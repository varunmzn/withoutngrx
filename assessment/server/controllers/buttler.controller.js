const mongoose = require('mongoose');
const passport = require('passport');
const _ = require('lodash');
const image =  require ('../common/fileupload')
const Allocations = mongoose.model('Allocations');

const clients = [
    {
        clientId: 1,
        clientName: 'abc',
    },
    {
        clientId: 2,
        clientName: 'ghi',
    },
    
];


const requests = [
    {
        clientId: 1,
        requestId: 'abc',
        hours: 6
    },
    {
        clientId: 2,
        requestId: 'ghi',
        hours: 1
    },
    {
        clientId: 1,
        requestId: 'def',
        hours: 4
    },
    {
        clientId: 1,
        requestId: 'zzz',
        hours: 2
    }
];


const buttlers = [
    {
        buttlerId: 1,
        buttlerName: 'A',
    },
    {
        buttlerId: 2,
        buttlerName: 'B',
    },
    {
        buttlerId: 2,
        buttlerName: 'C',
    },
]

module.exports.allocateAndReport = (req, res, next) => {


data=[{
    clientId:1,
    buttlerId:1,
    allocatedHours:[5]
}]






    var allocations = new Allocations(data);
    
    allocations.save((err, doc) => {
        if (!err){
            res.send(doc);
        }
        else {
                return next(err);
        }
    }); 
    
  
}

function  getAllocattedButtlers(){

    Allocations.find(query,(err,result)=>{
   if(!err){
       res.send(result);
   } else {
           return next(err);
   }
 });

}