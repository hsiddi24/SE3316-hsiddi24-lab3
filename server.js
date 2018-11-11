var express    = require('express');        // call express
var app        = express();                 // define our app using express
var bodyParser = require('body-parser');
var mangoose = require('mongoose');
mangoose.connect('mongodb://localhost:27017/phones');
var Phone = require ('./data/phone');
app.use('/', express.static('static'));

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

router.route('/phones')

.post(function (req, res){
    var phone = new Phone();
    console.log("HTML POST FUNCTIONING111111");
    phone.name= req.body.name;
    phone.quantity= req.body.quantity;
    phone.price=req.body.price;
    phone.tax= req.body.tax;
    console.log("HTML POST FUNCTIONING2");
    
    phone.save (function(err){
    if (err)
    res.send(err);
    
    res.json({message: 'phone created'});
    
    });
})


.get(function (req,res){
    console.log("GET FUNCTION ");
    Phone.find(function(err, phones){
        if (err)
        res.send(err);
        
        res.json(phones);
    });
});

router.route('/phones/:phone_id')

 .get(function(req, res) {
     console.log("Mini Get");
        Phone.findById(req.params.phone_id, function(err, phone) {
            if (err)
                res.send(err);
            res.json(phone);
        });
    })
    
    .put(function(req, res) {
        console.log("Put Execution");

        // use our phone model to find the phone we want
        Phone.findById(req.params.phone_id, function(err, phone) {

            if (err)
                res.send(err);

            phone.name = req.body.name;  // update the phones info
            phone.quantity= req.body.quantity;
            phone.price=req.body.price;
            phone.tax= req.body.price;

            // save the phone
            phone.save(function(err) {
                if (err)
                    res.send(err);

                res.json({ message: 'phone updated!' });
            });

        });
    })
    
     .delete(function(req, res) {
        Phone.remove({
            _id: req.params.phone_id
        }, function(err, phone) {
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