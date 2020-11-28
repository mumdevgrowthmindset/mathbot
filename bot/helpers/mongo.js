const mongoose = require('mongoose')
const { mongoPath } = require('../config.json')

module.exports = async () => {
    await mongoose.connect(mongoPath, {
        // To avoid deperecation warnings
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    return mongoose
}