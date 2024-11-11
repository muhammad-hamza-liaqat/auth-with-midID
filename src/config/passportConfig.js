const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const FacebookStrategy = require('passport-facebook').Strategy;
const GitHubStrategy = require("passport-github2").Strategy;

const connectDB = require("./connection.mongodb");

passport.serializeUser((user, done) => {
    done(null, user);
});

passport.deserializeUser((user, done) => {
    done(null, user);
});

passport.use(
    new GoogleStrategy(
        {
            clientID: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
            callbackURL: process.env.GOOGLE_CALLBACK_URL,
        },
        (accessToken, refreshToken, profile, done) => {
            return done(null, profile);
        }
    )
);

passport.use(new FacebookStrategy({
    clientID: process.env.FACEBOOK_CLIENT_ID,
    clientSecret: process.env.FACEBOOK_CLIENT_SECRET,
    callbackURL: process.env.FACEBOOK_CALLBACK_URL,
    profileFields: ['id', 'displayName', 'photos', 'email']
}, (accessToken, refreshToken, profile, done) => done(null, profile)));

passport.use(
    new GitHubStrategy(
        {
            clientID: process.env.GITHUB_CLIENT_ID,
            clientSecret: process.env.GITHUB_CLIENT_SECRET,
            callbackURL: process.env.GITHUB_CALLBACK_URL,
            scope: ["user:email"]
        },
        async (accessToken, refreshToken, profile, done) => {
            try {
                const db = await connectDB();
                const userCollection = db.collection("users");
                const existingUser = await userCollection.findOne({ githubId: profile.id });

                if (!existingUser) {
                    const newUser = {
                        githubId: profile.id,
                        displayName: profile.displayName,
                        email: profile.emails && profile.emails[0].value,
                        authMethod: "Github"
                    };
                    await userCollection.insertOne(newUser);
                    console.log("New GitHub user added to the database");
                } else {
                    console.log("GitHub user already exists in the database");
                }

                return done(null, profile);

            } catch (error) {
                console.error("Error while saving GitHub user into db", error.message);
                return done(error, null);
            }
        }
    )
);
