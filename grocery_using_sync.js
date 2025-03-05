
const readline = require("readline-sync");

class GroceryItem {
    constructor(name, quantity, price) {
      this.name = name;
      this.quantity = quantity;
      this.price = price;
      this.bought = false;
    }
  
    markAsBought() {
      this.bought = true;
    }
  }


class GroceryList {
    constructor() {
        this.items = [];
    }

    addItem(name, quantity, price) {
        this.items.push(new GroceryItem(name, quantity, price));
        console.log(` Added ${name} to the list.`);
      }
      removeItem(name) {
        const index = this.items.findIndex(item => item.name.toLowerCase() === name.toLowerCase());
        if (index !== -1) {
          this.items.splice(index, 1);
          console.log(`Removed ${name} from the list.`);
        } else {
          console.log("Item not found.");
        }
      }
      markAsBought(name) {
        const item = this.items.find(item => item.name.toLowerCase() === name.toLowerCase());
        if (item) {
          item.markAsBought();
          console.log(` Marked ${name} as bought.`);
        } else {
          console.log("Item not found.");
        }
      }
    
      displayList() {
        if (this.items.length === 0) {
          console.log(" The grocery list is empty.");
          return;
        }
    
        console.log("\n Grocery List:");
        this.items.forEach((item, index) => {
          console.log(
            `${index + 1}. ${item.name} - ${item.quantity} pcs - $${item.price.toFixed(2)} ${
              item.bought ? "[BOUGHT]" : "[NOT BOUGHT]"
            }`
          );
        });
      }
}

const groceryList = new GroceryList();

while (true) {
    console.log("\nGrocery List Manager");
    console.log("1️ Add an item");
    console.log("2️ Remove an item");
    console.log("3️ Mark item as bought");
    console.log("4️ Display grocery list");
    console.log("5️ Exit");
  
    let choice = readline.question("Choose an option: ");
  
    switch (choice) {
      case "1":
        let name = readline.question("Enter item name: ");
        let quantity = parseInt(readline.question("Enter quantity: "));
        let price = parseFloat(readline.question("Enter price: "));
        groceryList.addItem(name, quantity, price);
        break;
  
      case "2":
        let removeName = readline.question("Enter item name to remove: ");
        groceryList.removeItem(removeName);
        break;
  
      case "3":
        let boughtName = readline.question("Enter item name to mark as bought: ");
        groceryList.markAsBought(boughtName);
        break;
  
      case "4":
        groceryList.displayList();
        break;
  
      case "5":
        console.log(" Exiting... Happy Shopping!");
        process.exit();
  
      default:
        console.log(" Invalid choice. Please try again.");
    }
  }




