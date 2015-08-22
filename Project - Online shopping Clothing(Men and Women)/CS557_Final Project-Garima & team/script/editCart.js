/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

//create array that will hold all ordered products
var shoppingCart = [];

//this function manipulates DOM and displays content of our shopping cart
function displayShoppingCart() {

    var orderedProductsTblBody = document.getElementById("orderedProductsTblBody");

    //document.getElementById("demo").innerHTML=JSON.parse(localStorage["singleProduct"]); 
    shoppingCart = JSON.parse(localStorage["shoppingCart"]);

    //ensure we delete all previously added rows from ordered products table
    while (orderedProductsTblBody.rows.length > 0) {
        orderedProductsTblBody.myDeleteRow(0);
    }

    //variable to hold total price of shopping cart
    var cart_total_price = 0;
    //iterate over array of objects

    for (var product in shoppingCart) {
       
        //add new row      
        var row = orderedProductsTblBody.insertRow();
        //create three cells for product properties 
        var cellId = row.insertCell(0);
        var cellName = row.insertCell(1);
        var cellDescription = row.insertCell(2);
        var cellSize = row.insertCell(3);
        var cellQuantity = row.insertCell(4);
        var cellPrice = row.insertCell(5);
        row.insertCell(6).innerHTML = '<input type="button" value = "Delete" onClick="Javacsript:myDeleteRow(this)">';
        cellPrice.align = "right";
        //fill cells with values from current product object of our array
        cellId.innerHTML = shoppingCart[product].Id;
        cellName.innerHTML = shoppingCart[product].Name;
        cellDescription.innerHTML = shoppingCart[product].Description;
        cellSize.innerHTML = shoppingCart[product].Size;
        cellQuantity.innerHTML = shoppingCart[product].Quantity;
        cellPrice.innerHTML = shoppingCart[product].Price;
        cart_total_price += shoppingCart[product].Price;
    }

    //fill total cost of our shopping cart 
    document.getElementById("cart_total").innerHTML = cart_total_price;
}



//update the price in the cart  
function updatePrice() {
    var cart_total_price = 0;
    for (var product in shoppingCart) {
        cart_total_price += shoppingCart[product].Price;
    }
    document.getElementById("cart_total").innerHTML = cart_total_price;

}

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



function myDeleteRow(row1) {
//alert("in delete");
    var j = row1.parentNode.parentNode.rowIndex;
//alert("j: " + j);
    shoppingCart = JSON.parse(localStorage.shoppingCart);

    for (var product in shoppingCart) {
        var delProdId = document.getElementById("orderedProductsTbl").rows[j].cells[0].innerHTML;

        if (shoppingCart[product].Id === delProdId) {
	//	alert("shoppingCart[product].Id: " + shoppingCart[product].Id);
	//	alert(" delProdId" + delProdId);
		
            shoppingCart.splice(j - 1, 1);
            updatePrice();
            localStorage.shoppingCart = JSON.stringify(shoppingCart);
            orderedProductsTblBody.deleteRow(j - 1);

            break;
        }
    }
}



