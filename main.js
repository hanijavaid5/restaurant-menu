
function calculateTotal(){
    const mainCourse= document.getElementById('mainCourse').value;
        const dessert= document.getElementById('dessert').value;
        const drink= document.getElementById('drink').value;
        const mainQuantity = parseInt(document.getElementById('mainQuantity').value);
        const drinkQuantity = parseInt(document.getElementById('drinkQuantity').value);
        const dessertQuantity = parseInt(document.getElementById('dessertQuantity').value);

        let dessertPrice=0, mainPrice=0, drinkPrice=0;   

        console.log("please print this");

    switch(mainCourse){
        case 'Chicken Karahi':
        mainPrice= 10; 
            break;

            case 'Chicken Qorma':
            mainPrice= 9; 
            break;

            case 'Chicken Biryani':
            mainPrice= 4; 
            break;

            case 'Chicken Chowmien':
            mainPrice= 10; 
            break;
            default:
            mainPrice =0;
    }

    switch(dessert){
        case 'Kalahari Desert':
        dessertPrice= 10; 
            break;

            case 'Chalbi Desert':
            dessertPrice= 7;
            break;

            case 'Guban Desert':
            dessertPrice= 9;
            break;

            case 'Karoo Desert':
            dessertPrice= 8;
            break;
            

         

            default:
            dessertPrice=0;
    }

    switch(drink){
        case 'Water':
        drinkPrice= 10;
            break;

            case 'Coffee':
            drinkPrice= 10;
            break;

            case 'Tea':
            drinkPrice= 5;
            break;

            case 'Milk':
            drinkPrice= 7;
            break;
            default:
            drinkPrice=0;
    }

    const mainTotal = mainPrice * mainQuantity;
          const dessertTotal = dessertPrice * dessertQuantity;
          const drinkTotal = drinkPrice * drinkQuantity;
   const total = mainTotal + dessertTotal + drinkTotal ;

   document.getElementById("mainTotal").innerText = "Price: $" + mainTotal.toFixed(2);
          document.getElementById("dessertTotal").innerText = "Price: $" + dessertTotal.toFixed(2);
          document.getElementById("drinkTotal").innerText = "Price: $" + drinkTotal.toFixed(2);
          document.getElementById("totalCost").innerText ="Price: $" + total.toFixed(2);

}

document.getElementById("placeOrderBtn").addEventListener("click", function() {
    // Add your logic here (e.g., submitting a form, sending data to a server)
    alert("Order has been placed!");
});



