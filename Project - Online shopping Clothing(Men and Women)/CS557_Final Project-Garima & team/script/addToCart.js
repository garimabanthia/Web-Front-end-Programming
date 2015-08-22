/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
//create array that will hold all ordered products
        var shoppingCart = [];

    // Size that user wants
        function changeSize() {
            var select = document.getElementById("sizeList");
            var size = select.value;
            return size;
        } // end function


        // Quantity slected from the drop down list
        function changeQuantity() {
            var number = document.getElementById("quantityList");
            var quantity = number.value;
            return quantity;
        } // end function
		
		//total number of items in the cart
		function cartLength() {
		alert("shoppingCart.length" + shoppingCart.length);
		return shoppingCart.length;
		}
      
        function AddtoCart( name, description, size, quantity, price) {
            //Below we create JavaScript Object that will hold three properties you have mentioned:Name,Description and Price
            
            //document.getElementById("demo").innerHTML = (localStorage["shoppingCart"]);
            
            if (localStorage.length!==0) {
                //alert("garima");
                shoppingCart = JSON.parse(localStorage["shoppingCart"]);
                
            }
            
            var singleProduct = {};
            //Fill the product object with data
            
            if (localStorage.length!==0) {
                localStorage.clickcount = Number(localStorage.clickcount)+1;
                singleProduct.Id = localStorage.clickcount;
              //  alert("singleProduct.Id " + singleProduct.Id);
            } else {
                singleProduct.Id = 1;
                localStorage.clickcount = 1;
            }
                     
            singleProduct.Name = name;
            singleProduct.Description = description;
            singleProduct.Size = size;
            singleProduct.Quantity = quantity;
            singleProduct.Price=price*quantity;
            
            
           //Add newly created product to our shopping cart
            shoppingCart.push(singleProduct);

            
        //    localStorage["singleProduct"] = JSON.stringify(singleProduct);
            localStorage["shoppingCart"] = JSON.stringify(shoppingCart);
            //document.getElementById("demo1").innerHTML = (localStorage["singleProduct"]);
            window.location.assign("../cart.html");
	
        
    }

