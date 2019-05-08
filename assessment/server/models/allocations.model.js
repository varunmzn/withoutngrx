const mongoose = require('mongoose');

var allocationsSchema = new mongoose.Schema({
    clientId: {
        type: String,
        // required: 'Full name can\'t be empty'
    },
    buttlerId: {
        type: String,
    },
    allocatedHours: {
        type: Array,
    },
});




mongoose.model('Allocations', allocationsSchema);