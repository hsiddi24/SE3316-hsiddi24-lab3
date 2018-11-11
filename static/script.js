
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
                alert(data.name + data.price.toString() + data.price.toString() + data.quantity.toString());
            }



        );
        
         var GetButton = document.getElementById('GetBtn').addEventListener('click',
        function(){
        console.log("Function is Executed");

        getData ("https://lab3hsiddi24-hsiddi24.c9users.io/api/phones",
            function(data){
                console.log(data);
                //document.getElementById('UpdatePriceID').value= data.price;
            data.forEach(function(phone){
                console.log(phone.name);
                console.log(phone.price);
                console.log(phone.quantity);
                console.log(phone.price);
                console.log(phone._id);
                }

            );
            }

            );
        }

        );
        
       

    var UpdateName = document.getElementById('UpdateNameBtn').addEventListener('click', 
    function(){
      let ID = document.getElementById('UpdateNameID').value.toString();
      let NewName = document.getElementById('UpdateName').value;
      let ThisUrl = 'https://lab3hsiddi24-hsiddi24.c9users.io/api/phones/' + ID.toString();
      var ThisUrl2= '/api/phones/' + ID.toString();
      var Cprice=0;
      var Cquantity=0;
      var Ctax=0;
      
      getData (ThisUrl,
            function(data){
              console.log(data.name);
                //document.getElementById('UpdatePriceID').value= data.price;
            Cprice= data.price;
            Cquantity = data.quantity;
            Ctax=data.tax;
            
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
      let NewPrice = parseFloat(document.getElementById('UpdatePrice').value);
    }
    
    
    
    );
    
    
     var UpdateQuantity = document.getElementById('UpdateQuantityBtn').addEventListener('click', 
    function(){
      let ID = document.getElementById('UpdateQuantityID').value.toString();
      let NewQuantity = parseFloat(document.getElementById('UpdateQuantity').value);
    }
    
    
    
    );
    
     var UpdateTax = document.getElementById('UpdateTaxBtn').addEventListener('click', 
    function(){
      let ID = document.getElementById('UpdateTaxID').value.toString();
      let NewTax = parseFloat(document.getElementById('UpdateTax').value);
    }
    
    
    
    )
    







        }