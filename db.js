const mongoose = require('mongoose');

connectToDb().catch(err => console.error(err));

async function connectToDb() {
    await mongoose.connect(process.env.MONGODB_CONN)
}

const User = mongoose.model('User', new mongoose.Schema({
    UserId: String,
    UserName: String,
    Avatar: String,
    InputMethod: String,
    Language: String,
    Version: String,
    TitlesEnabled: Boolean,
    VerseNumbersEnabled: Boolean,
    PaginationEnabled: Boolean,
    DisplayStyle: Boolean
}, { collection: 'Users' }))

const Guild = mongoose.model('Guild', new mongoose.Schema({
    GuildId: String,
    GuildName: String,
    Language: String,
    Version: String,
    DisplayStyle: Boolean,
    IgnoringBrackets: String,
    DailyVerseChannelId: String,
    DailyVerseWebhook: String,
    DailyVerseTime: String,
    DailyVerseTimeZone: String,
    DailyVerseLastSentDate: String,
    IsDM: Boolean
}, { collection: 'Guilds' }))

const Version = mongoose.model('Version', new mongoose.Schema({
    Name: String,
    Abbreviation: String,
    Source: String,
    SupportsOldTestament: Boolean,
    SupportsNewTestament: Boolean,
    SupportsDeuterocanon: Boolean
}, { collection: 'Versions' }))

const FrontendStat = mongoose.model('FrontendStat', new mongoose.Schema({
    ShardCount: Number,
    ServerCount: Number,
    UserCount: Number,
    ChannelCount: Number
}, { collection: 'FrontendStats' }))

module.exports = {
    User,
    Guild,
    Version,
    FrontendStat
}