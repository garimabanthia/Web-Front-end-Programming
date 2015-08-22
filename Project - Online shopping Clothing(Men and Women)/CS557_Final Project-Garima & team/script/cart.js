/* 
/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


//create array that will hold all ordered products
        var shoppingCart = [];
        
        //this function manipulates DOM and displays content of our shopping cart
       
        function displayShoppingCart(){
                     
            var orderedProductsTblBody=document.getElementById("orderedProductsTblBody");
            // var singleProduct = localStorage.getItem("key");
          //document.getElementById("demo").innerHTML=JSON.parse(localStorage["singleProduct"]); 
          shoppingCart =JSON.parse(localStorage["shoppingCart"]); 
          
          
        //document.getElementById("demo").innerHTML= (localStorage["singleProduct"]);
            //ensure we delete all previously added rows from ordered products table
            while(orderedProductsTblBody.rows.length>0) {
                orderedProductsTblBody.deleteRow(0);
            }
                   
            //variable to hold total price of shopping cart
            var cart_total_price=0;
            //iterate over array of objects
          //  alert("GARIMA1");
            for(var product in shoppingCart){
            
                //add new row      
                var row=orderedProductsTblBody.insertRow();
                //create three cells for product properties 
                var cellId = row.insertCell(0);
                var cellName = row.insertCell(1);
                var cellDescription = row.insertCell(2);
				var cellSize = row.insertCell(3);
                var cellQuantity = row.insertCell(4);
                var cellPrice = row.insertCell(5);
            
                
                cellPrice.align="right";
                //fill cells with values from current product object of our array
                cellId.innerHTML = shoppingCart[product].Id;
               // alert(shoppingCart[product].Id);
                cellName.innerHTML = shoppingCart[product].Name;
                cellDescription.innerHTML = shoppingCart[product].Description;
                cellSize.innerHTML = shoppingCart[product].Size;
                cellQuantity.innerHTML = shoppingCart[product].Quantity;
                cellPrice.innerHTML = shoppingCart[product].Price;
                cart_total_price+=shoppingCart[product].Price;
            
            }
            //fill total cost of our shopping cart 
            document.getElementById("cart_total").innerHTML=cart_total_price;
			cartLength();
        }
        // Size that user wants
        function changeSize(){
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
            
			// Total items in the cart
             function cartLength(){
                return shoppingCart.length;
            }
         


