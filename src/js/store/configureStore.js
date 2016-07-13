
if (process.env.NODE_ENV === 'production') {
     exports.configureStore = require('./configureStore.prod')
} else {
     exports.configureStore = require('./configureStore.dev')
}
