const mongoose = require('mongoose');

var requestsSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: 'Full name can\'t be empty'
    },
    lastName: {
        type: String,
        required: 'Last name can\'t be empty'
    },
});




mongoose.model('Requests', requestsSchema);