
// call the packages we need
var express    = require('express');        // call express
var app        = express();                 // define our app using express
var bodyParser = require('body-parser');
var mangoose = require('mongoose');
mangoose.connect('mongodb://localhost:27017/bears');
var Bear = require ('./data/bear');


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var port = process.env.PORT || 8080;        // set our port

// ROUTES FOR OUR API
// =============================================================================
var router = express.Router();              // get an instance of the express Router

router.use(function(req,res, next){
    console.log('Something is Happening. ');
    next();
});

router.route('/bears')

.post(function (req, res){
    var bear = new Bear();
    bear.name= req.body.name;
    bear.quantity= req.body.quantity;
    bear.price=req.body.price;
    
    bear.save (function(err){
    if (err)
    res.send(err);
    
    res.json({message: 'Bear created'});
    
    });
})


.get(function (req,res){
    Bear.find(function(err, bears){
        if (err)
        res.send(err);
        
        res.json(bears);
    });
});

router.route('/bears/:bear_id')

 .get(function(req, res) {
        Bear.findById(req.params.bear_id, function(err, bear) {
            if (err)
                res.send(err);
            res.json(bear);
        });
    })
    
    .put(function(req, res) {

        // use our bear model to find the bear we want
        Bear.findById(req.params.bear_id, function(err, bear) {

            if (err)
                res.send(err);

            bear.name = req.body.name;  // update the bears info
            bear.quantity= req.body.quantity;
            bear.price=req.body.price;

            // save the bear
            bear.save(function(err) {
                if (err)
                    res.send(err);

                res.json({ message: 'Bear updated!' });
            });

        });
    })
    
     .delete(function(req, res) {
        Bear.remove({
            _id: req.params.bear_id
        }, function(err, bear) {
            if (err)
                res.send(err);

            res.json({ message: 'Successfully deleted' });
        });
    });





// test route to make sure everything is working (accessed at GET http://localhost:8080/api)
router.get('/', function(req, res) {
    console.log('You Have entered');
    res.json({ message: 'hooray! welcome to our api!' });   
});


app.use('/api', router);

// START THE SERVER
// =============================================================================
app.listen(port);
console.log('Magic happens on port ' + port);
