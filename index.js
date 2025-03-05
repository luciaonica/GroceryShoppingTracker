const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

//initializing list of items
let groceryList = [];

//printing the menu options
printMenu();

//Item object
class Item {
    constructor(name, quantity, price){
        this.name = name,
        this.quantity = quantity,
        this.price = price,
        this.bought = false
    }

    //mark item as bought
    setBought(){
        this.bought = true
    }
}

//print the options
function printMenu(){
    console.log("\nGrocery list menu:\n");
    console.log("1 - add item");
    console.log("2 - display list");
    console.log("3 - remove item");
    console.log("4 - set item is bought");
    console.log("5 - exit");

    rl.question('select an option:', (option) => {
        switch (option) {
              case "1":
                addGrocery();
                break;
            case "2":
                displayList();
                break;
            case "3":
                removeItem();
                break;
            case "4":
                markAsBought();
                break;
            case "5":
                exit();
                break;
            default:
                console.log("\nInvalid option. Please try again");
                printMenu();
    }
        
    });
}

//add Item to list
function addGrocery(){
    let itemName = "";
    let itemQuantity = 0;
    let itemPrice = 0;
    rl.question('Enter item name:', (name) => {
        
        itemName = name;

        rl.question('Enter item price:', (price) => {
            
            itemPrice = price;

            rl.question('Enter item quantity:', (quantity) => {
                
                itemQuantity = quantity;

                groceryList.push(new Item(itemName, itemQuantity, itemPrice));                    
                
                console.log("Item added successfully!");

                printMenu();
                
            });
        });
    });
}

//display the list
function displayList() {
    console.log(groceryList);
    printMenu();
}

//exit 
function exit(){
    console.log("Thank you for using grocery manager app. Goodbye!!");
    rl.close();
}

//remove item from the list
function removeItem() {
    rl.question('Enter item name to remove:', (itname) => {
        
        groceryList = groceryList.filter(el => el.name !== itname);
        printMenu();
        
    });
}

//mark item as bought
function markAsBought(){
    rl.question('Enter item name to mark as bought:', (itname) => {
        
        groceryList.forEach(el => {
            if (el.name == itname){
                el.setBought();
            }
        });
        
        printMenu();
        
    });
}





