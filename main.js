$(document).ready(function () {
    
//1. Show me how to calculate the average price of all items.
    //Steps. .reduceLoop, convert from object, return price, shorten decimels, 
   
     var totalPrice = items.reduce(function (a, b) {
         if (typeof a === "number") {
             return a + b.price;
         } else {
             return a.price + b.price;
         }
     });
     var avgPrice = (totalPrice / items.length).toFixed(2);
 
    $("#ans1").html(avgPrice);
   
    
    // -----------------------------------------------------------------------------
    //2. Show me how to get an array of items that cost between $14.00 and $18.00 USD.
    //Filter 14-18 from lists.price. 
    
    var priceRange = items.filter(function(listObj) {
        if (listOjb.price > 14 && listOjb.price < 18) {
            return true;
        } else {
            return false;
        }
        console.log(priceRange);
    });
    
    var newRange = priceRange.map(function(listObj) {
        return {
            title: listObj.title, 
            price: listObj.price
        }
        console.log(newRange);
    });
    
    var requestedRange = newRange.forEach(function(listObj) {
        $("#ans").append("li");
    });
    
       //$("#ans2").html(requestedRange);
      //$("#ans2").append(listObj.title + ", $" + listObj.price);
    
    
    /*function range() {
      var priceRange = items.filter(function (price(, items) {
        return var listedRange = items.price <= 18 &&
        items.price >= 14;
    });
        return (listedRange.length);
        $("#answer2 p").html();                                     
    };
    var answer2elem = document.getElementById("answer2");
    answer2elem.innerHTML = answer2elem.innerHTML + range();*/
    
    
    
    //-----------------------------------------------------------------------
    //3. Which item has a "GBP" currency code? Display it's name and price. Find GBP and return &pound.
    // 
    /*function findPound () {
    var poundCurrency = items.filter(function (items) {
        if (items.currency_code === "GBP") {
         return true; 
         } else {
             return false;
         }
    })
};
    var answer3elem = document.getElementById("answer3");
    answer3elem.innerHTML = answer3elem.innerHTML + findPound;*/
    
        
    //---------------------------------------------------------
    //4. Display a list of all items who are made of wood. Find WOOD from the MATERIALS PROPERTIES.
   /* vaar itemsMadeOfWood = madeOfWood();
    
    itemsMadeOfWood.forEach(function(item){
        $("#num4").append("<p> + item + " is made of wood. </p>");
    });
    });
    
    function findWood {
     items.filter(function(item){
         var materials = items.materials;
         var isWood = false;
         
         items.forEach(function(material){
             if (material === 'wood') {
                 isWood = true;
             }
         });
         
         return isWood;
     }).map(function(item){
         return item.title;
     });
        
        return newArray;
    }*/
    
    
    
    
    
          //   arr.filter(callback[, thisArg])
    //-------------------------------------------------------------------------------------
    //5. Which items are made of eight or more materials? Display the name, number of items and the items it is made of. List the new array out of property-materials > 8.
    
   /* var itemsEightOrMore = eightOrMore;
    
    itemsMadeOfWood.forEach(function(item){
        $("#num5").append()
    })
    
    function numOfMaterials() {
        var findNum = items.filter(function(item){
        return (items.materials.length >= 8)
            return findNum;
    }
    console.log(findNum);
    });
$("#answer5").html.valueOf;*/
    
    
    
    
    //-------------------------------------------------------------------------------------
    //6. How many items were made by their sellers? Find/return to html who_made = "i_did"
   
    
    /*function whoMadeIt() {
       var whoMade = items.filter(function(lists.who_made, )
        if(whoMade === "i_did") {
            console.log = (whoMade);
        }  else {
            return false;
        });                          
   };*/
   //$("#answer6").html.getAttribute("whoMade");


});//CLOSES DOCUMENT READY
