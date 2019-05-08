const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI, (err) => {
    if (!err) { console.log('MongoDB connection succeeded.'); }
    else { console.log('Error in MongoDB connection : ' + JSON.stringify(err, undefined, 2)); }
});

require('./user.model');
require('./users.model');
require('./assessments.model');
require('./subjects.model');
require('./questions.model');
require('./requests.model');
require('./allocations.model');