const path = require('path');
const express = require('express');
const cors = require('cors');
const auth = require('./routes/auth');
const session = require('express-session');
const passport = require('passport');
const SQLiteStore = require('connect-sqlite3')(session);

const PORT = process.env.PORT || 3001;
const app = express();
app.use(express.json());
app.use(cors({
    origin: "http://localhost:3001",
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    credentials: true
}));

app.use(express.static(path.resolve(__dirname, 'client/build')));
app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    store: new SQLiteStore( { db: 'sessions.db', dir: '.' })
}));
app.use(passport.authenticate('session'));

app.use('/api', auth)

app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, './client/build', 'index.html'));
});

app.listen(PORT, () => {
    console.log(`Running on localhost:${PORT}`);
})