const passport = require('passport')
const GoogleStrategy = require('passport-google-oauth20').Strategy
const FacebookStrategy = require('passport-facebook').Strategy
const GitHubStrategy = require('passport-github2').Strategy
const TwitterStrategy = require('passport-twitter')
const OAuth2Strategy = require('passport-oauth2').Strategy;


const connectDB = require('./connection.mongodb')

passport.serializeUser((user, done) => {
    done(null, user)
})

passport.deserializeUser((user, done) => {
    done(null, user)
})

// google
passport.use(
    new GoogleStrategy(
        {
            clientID: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
            callbackURL: process.env.GOOGLE_CALLBACK_URL,
        },
        (accessToken, refreshToken, profile, done) => {
            return done(null, profile)
        }
    )
)

// facebook
passport.use(new FacebookStrategy({
    clientID: process.env.FACEBOOK_CLIENT_ID,
    clientSecret: process.env.FACEBOOK_CLIENT_SECRET,
    callbackURL: process.env.FACEBOOK_CALLBACK_URL,
    profileFields: ['id', 'displayName', 'photos', 'email']
}, (accessToken, refreshToken, profile, done) => done(null, profile)))

// github
passport.use(
    new GitHubStrategy(
        {
            clientID: process.env.GITHUB_CLIENT_ID,
            clientSecret: process.env.GITHUB_CLIENT_SECRET,
            callbackURL: process.env.GITHUB_CALLBACK_URL,
            scope: ['user:email']
        },
        async (accessToken, refreshToken, profile, done) => {
            try {
                const db = await connectDB()
                const userCollection = db.collection('users')
                const existingUser = await userCollection.findOne({ githubId: profile.id })

                if (!existingUser) {
                    const newUser = {
                        githubId: profile.id,
                        displayName: profile.displayName,
                        email: profile.emails && profile.emails[0].value,
                        authMethod: 'Github'
                    }
                    await userCollection.insertOne(newUser)
                    console.log('New GitHub user added to the database')
                } else {
                    console.log('GitHub user already exists in the database')
                }

                return done(null, profile)

            } catch (error) {
                console.error('Error while saving GitHub user into db', error.message)
                return done(error, null)
            }
        }
    )
)

// twitter
passport.use(
    new TwitterStrategy(
        {
            consumerKey: process.env.TWITTER_API_KEY,
            consumerSecret: process.env.TWITTER_API_SECRET,
            callbackURL: process.env.TWITTER_CALLBACK_URL,
        },
        async (token, tokenSecret, profile, done) => {
            console.log('Token:', token)
            console.log('Token Secret:', tokenSecret)
            console.log('Profile:', profile)
            try {
                const db = await connectDB()
                const userCollection = db.collection('users')

                const existingUser = await userCollection.findOne({ twitterId: profile.id })

                if (!existingUser) {
                    const newUser = {
                        twitterId: profile.id,
                        displayName: profile.displayName,
                        username: profile.username,
                        authMethod: 'Twitter',
                    }
                    await userCollection.insertOne(newUser)
                    console.log('New Twitter user added to the database')
                } else {
                    console.log('Twitter user already exists in the database')
                }

                return done(null, profile)
            } catch (error) {
                console.error('Error while saving Twitter user into db', error.message)
                return done(error, null)
            }
        }
    )
)

// tiktok
passport.use(
    'tiktok',
    new OAuth2Strategy(
        {
            authorizationURL: process.env.TIKTOK_AUTHORIZATION_URL,
            tokenURL: process.env.TIKTOK_TOKEN_URL,
            clientID: process.env.TIKTOK_CLIENT_ID,
            clientSecret: process.env.TIKTOK_CLIENT_SECRET,
            callbackURL: process.env.TIKTOK_CALLBACK_URL,
        },
        async (accessToken, refreshToken, params, done) => {
            try {
                // Retrieve user info using the TikTok API
                const userProfileResponse = await fetch(
                    `https://open-api.tiktok.com/user/info/`,
                    {
                        method: 'GET',
                        headers: {
                            Authorization: `Bearer ${accessToken}`,
                        },
                    }
                );
                const userProfile = await userProfileResponse.json();

                if (userProfile && userProfile.data) {
                    return done(null, userProfile.data);
                } else {
                    throw new Error('Failed to fetch TikTok user profile');
                }
            } catch (error) {
                console.error('Error during TikTok authentication:', error.message);
                return done(error, null);
            }
        }
    )
);
