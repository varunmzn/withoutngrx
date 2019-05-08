const mongoose = require('mongoose');
const passport = require('passport');
const _ = require('lodash');

const Subjects = mongoose.model('Subjects');


module.exports.createSubject = (req, res, next) => {
    var subjects = new Subjects();
    // delete req.body._id;
    subjects.subjectName=req.body.subjectname;

    if(req.body._id){
        subjects.update({"_id" : req.body._id }, req.body, (err,result)=>{
             console.log("Updated")
        if(!err){
            res.send(result);
        } else {
                return next(err);
        }
      });
    }else{
       
        subjects.save((err, doc) => {
        if (!err){
        console.log(req.body)
            res.send(doc);
        }
        else {
            if (err.code == 11000)
                res.status(422).send(['Duplicate subject name found.']);
            else
            console.log(err)
                return next(err);
        }
    }); 
    }
  
}
module.exports.webSearchResult = (req, res, next) => {
    console.log(req.query.parm)
    const Wappalyzer = require('../node_modules/wappalyzer/driver');
    const Browser = require('../node_modules/wappalyzer/browsers/zombie');
     
    // const url = req.query.parm | 'https://www.soaphub.com';
    const url = (req.query.parm).toString()
    const options = {
      debug: false,
      delay: 500,
      maxDepth: 3,
      maxUrls: 10,
      maxWait: 5000,
      recursive: true,
      userAgent: 'Wappalyzer',
      htmlMaxCols: 2000,
      htmlMaxRows: 2000,
    };
     
    const wappalyzer = new Wappalyzer(Browser, url, options);
     
    // Optional: capture log output
    // wappalyzer.on('log', params => {
    //   const { message, source, type } = params;
    // });
     
    // Optional: do something on page visit
    // wappalyzer.on('visit', params => {
    //   const { browser, pageUrl } = params;
    // });
     
    wappalyzer.analyze()
      .then(json => {
          console.log("Done")
        res.send(`${JSON.stringify(json, null, 2)}\n`);
        // process.stdout.write(`${JSON.stringify(json, null, 2)}\n`);
     
        // process.exit(0);
      })
      .catch(error => {
        process.stderr.write(`${error}\n`);
     
        process.exit(1);
    });

}
