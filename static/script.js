window.onload=function(){
  function postData(url = ``, data = {}) {
  // Default options are marked with *
    return fetch(url, {
        method: "POST", // *GET, POST, PUT, DELETE, etc.
        mode: "cors", // no-cors, cors, *same-origin
        cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
        credentials: "same-origin", // include, *same-origin, omit
        headers: {
            "Content-Type": "application/json; charset=utf-8",
            // "Content-Type": "application/x-www-form-urlencoded",
        },
        redirect: "follow", // manual, *follow, error
        referrer: "no-referrer", // no-referrer, *client
        body: JSON.stringify(data), // body data type must match "Content-Type" header
    })
    .then(response => response.json()); // parses response to JSON
}

    function putData(url = ``, data = {}) {
  // Default options are marked with *
    return fetch(url, {
        method: "PUT", // *GET, POST, PUT, DELETE, etc.
        mode: "cors", // no-cors, cors, *same-origin
        cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
        credentials: "same-origin", // include, *same-origin, omit
        headers: {
            "Content-Type": "application/json; charset=utf-8",
            // "Content-Type": "application/x-www-form-urlencoded",
        },
        redirect: "follow", // manual, *follow, error
        referrer: "no-referrer", // no-referrer, *client
        body: JSON.stringify(data), // body data type must match "Content-Type" header
    })
    .then(response => response.json()); // parses response to JSON
}

   function getData(url = ``,myCallBack) {
  // Default options are marked with *
    return fetch(url, {
        method: "GET", // *GET, POST, PUT, DELETE, etc.
        mode: "cors", // no-cors, cors, *same-origin
        cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
        credentials: "same-origin", // include, *same-origin, omit
        headers: {
            "Content-Type": "application/json; charset=utf-8",
            // "Content-Type": "application/x-www-form-urlencoded",
        },
        redirect: "follow", // manual, *follow, error
        referrer: "no-referrer" // body data type must match "Content-Type" header
    })
    
    .then(dataWrappedByPromise => dataWrappedByPromise.json())
    .then(data => {
    // you can access your data here
    myCallBack(data)
    }); // parses response to JSON
   }
   
   function deleteData(url = ``,myCallBack) {
    // Default options are marked with *
    return fetch(url, {
        method: "DELETE", // *GET, POST, PUT, DELETE, etc.
        mode: "cors", // no-cors, cors, *same-origin
        cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
        credentials: "same-origin", // include, *same-origin, omit
        headers: {
            "Content-Type": "application/json; charset=utf-8",
            // "Content-Type": "application/x-www-form-urlencoded",
        },
        redirect: "follow", // manual, *follow, error
        referrer: "no-referrer" // body data type must match "Content-Type" header
    })

        .then(dataWrappedByPromise => dataWrappedByPromise.json())
        .then(data => {
            // you can access your data here
            myCallBack(data)
        }); // parses response to JSON
}
   
      var myButton = document.getElementById('Add').addEventListener('click',

            function(){
           // console.log("Hello");
                var NewName = document.getElementById('NewName').value.toString();
                var NewPrice = parseFloat(document.getElementById('NewPrice').value);
                var NewQuantity = parseFloat(document.getElementById('NewQuantity').value);
                var NewTax = parseFloat(document.getElementById('NewTax').value);
                var data = {
                    name: String(NewName) ,
                    price: Number(NewPrice),
                    tax: Number(NewTax),
                    quantity: Number(NewQuantity)
                }

                postData( '/api/phones', data);
                
            }



        );
        
       var DeleteButton = document.getElementById('DeleteBtn').addEventListener('click',
    function(){
        var deleteID = document.getElementById('DeleteID').value;
        console.log("Function is Executed");
        let ThisURL= 'https://lab3hsiddi24-hsiddi24.c9users.io/api/phones/' + deleteID.toString();

        deleteData (ThisURL,
            function(data){
            }



        );
    }

);

var GetButton = document.getElementById('GetBtn').addEventListener('click',
    function(){
        var GetID = document.getElementById('GetID').value;
        console.log("Function is Executed");
        let ThisURL= 'https://lab3hsiddi24-hsiddi24.c9users.io/api/phones/' + GetID.toString();
        document.querySelector("div").innerHTML = '';
        document.querySelector("div").innerHTML = "<p>" + "The Price One Must Pay" + "</p>";

        getData (ThisURL,
            function(data){
            document.getElementById('GetName').value= data.name.toString();
                document.getElementById('GetPrice').value= data.price.toString();
                document.getElementById('GetTax').value= data.tax.toString();
                document.getElementById('GetQuantity').value= data.quantity.toString();


            }



        );
    }

);
 
        
       

  var UpdateName = document.getElementById('UpdateNameBtn').addEventListener('click', 
    function(){
      var ID = document.getElementById('UpdateNameID').value.toString();
      var NewName = document.getElementById('UpdateName').value;
      var ThisUrl = 'https://lab3hsiddi24-hsiddi24.c9users.io/api/phones/' + ID;
      var ThisUrl2= '/api/phones/' + ID.toString();
      var Cprice=0;
      var Cquantity=0;
      var Ctax=0;
      console.log("CHANGING NAME");
      getData (ThisUrl,
            function(data){
              console.log("GET FUNCTION");
                //document.getElementById('UpdatePriceID').value= data.price;
            Cprice= data.price;
            Cquantity = data.quantity;
            Ctax=data.tax;
            console.log(data.price);
            console.log(data.quantity);
            console.log(data.tax);
            
            let PutData = {
                    name: String(NewName) ,
                    price: Number(Cprice),
                    tax: Number(Ctax),
                    quantity: Number(Cquantity)
                };
                console.log(PutData.name);
                console.log(PutData.price);
                console.log(PutData.tax);
                console.log(PutData.quantity);
                putData(ThisUrl2, PutData);
                
            }
            );
      
    }
    
    
    
    );
    
    
        var UpdatePrice = document.getElementById('UpdatePriceBtn').addEventListener('click', 
    function(){
      let ID = document.getElementById('UpdatePriceID').value.toString();
      var NewPrice = parseFloat(document.getElementById('UpdatePrice').value);
      let ThisUrl = 'https://lab3hsiddi24-hsiddi24.c9users.io/api/phones/' + ID.toString();
      var ThisUrl2= '/api/phones/' + ID.toString();
      var Cname='';
      var Cquantity=0;
      var Ctax=0;
      console.log("CHANGING PRICE")
      getData (ThisUrl,
            function(data){
                console.log("GET FUNCTION");
              //console.log(data.name);
                //document.getElementById('UpdatePriceID').value= data.price;
            Cname= data.name;
            Cquantity = data.quantity;
            Ctax=data.tax;
            
            let PutData = {
                    name: String(Cname) ,
                    price: Number(NewPrice),
                    tax: Number(Ctax),
                    quantity: Number(Cquantity)
                };
                console.log(PutData.name);
                console.log(PutData.price);
                console.log(PutData.tax);
                console.log(PutData.quantity);
                putData(ThisUrl2, PutData);
                
            }
            );
      
    }
    
    
    
    );
    
    
          var UpdateQuantity = document.getElementById('UpdateQuantityBtn').addEventListener('click', 
    function(){
      let ID = document.getElementById('UpdateQuantityID').value.toString();
      var NewQuantity = parseFloat(document.getElementById('UpdateQuantity').value);
      let ThisUrl = 'https://lab3hsiddi24-hsiddi24.c9users.io/api/phones/' + ID.toString();
      var ThisUrl2= '/api/phones/' + ID.toString();
      var Cname='';
      var Cprice=0;
      var Ctax=0;
      
      getData (ThisUrl,
            function(data){
              console.log(data.name);
                //document.getElementById('UpdatePriceID').value= data.price;
            Cprice= data.price;
            Cname = data.name;
            Ctax=data.tax;
            
            let PutData = {
                    name: String(Cname) ,
                    price: Number(Cprice),
                    tax: Number(Ctax),
                    quantity: Number(NewQuantity)
                };
                console.log(PutData.name);
                console.log(PutData.price);
                console.log(PutData.tax);
                console.log(PutData.quantity);
                putData(ThisUrl2, PutData);
                
            }
            );
      
    }
    
    
    
    );
    
        var UpdateTax = document.getElementById('UpdateTaxBtn').addEventListener('click', 
    function(){
      let ID = document.getElementById('UpdateTaxID').value.toString();
      var NewTax = parseFloat(document.getElementById('UpdateTax').value);
      let ThisUrl = 'https://lab3hsiddi24-hsiddi24.c9users.io/api/phones/' + ID.toString();
      var ThisUrl2= '/api/phones/' + ID.toString();
      var Cname='';
      var Cprice=0;
      var Cquantity=0;
      
      getData (ThisUrl,
            function(data){
              console.log(data.name);
                //document.getElementById('UpdatePriceID').value= data.price;
            Cprice= data.price;
            Cname = data.name;
            Cquantity=data.quantity;
            
            let PutData = {
                    name: String(Cname) ,
                    price: Number(Cprice),
                    tax: Number(NewTax),
                    quantity: Number(Cquantity)
                };
                console.log(PutData.name);
                console.log(PutData.price);
                console.log(PutData.tax);
                console.log(PutData.quantity);
                putData(ThisUrl2, PutData);
                
            }
            );
      
    }
    
    
    
    );
    
    
    
    

function DisplayData(){
    getData('https://lab3hsiddi24-hsiddi24.c9users.io/api/phones', function(response){
        console.log(response)
          document.querySelector("tbody").innerHTML = "<tr>" +
                "<td>" +"phone._id" +"</td>"+
                "<td>" +"phone.name" +"</td>"+
                "<td>" +"phone.price" +"</td>"+
                "<td>" + "phone.tax" +"</td>" +
                "<td>" + "phone.quantity" +"</td>" +
                + "</tr>"

        
        response.forEach(function(phone){
            

            document.querySelector("tbody").innerHTML += "<tr>" +
                "<td>" +phone._id +"</td>"+
                "<td>" +phone.name +"</td>"+
                "<td>" +phone.price +"</td>"+
                "<td>" + phone.tax +"</td>" +
                "<td>" + phone.quantity +"</td>" +
                + "</tr>"

        })
    }

);
}

function PollData() {
    DisplayData();
    setTimeout(PollData, 2000);
    // ...
}

DisplayData();
setTimeout(PollData, 2000);







        }
        
