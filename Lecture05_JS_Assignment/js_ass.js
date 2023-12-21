let shoppingList = ["milk", "egg", "bread"];

//add two new item
function addNewItem() {
    let newItem = prompt("Enter new items:");
    shoppingList.push(newItem);
    console.log(shoppingList);
}
addNewItem()
addNewItem()

//delete last item
function deleteLastItem() {
    shoppingList.pop();
    console.log(shoppingList);
}
deleteLastItem()

//check if cart is full
function checkCartFull() {
    if (shoppingList.length > 5) {
        console.log("Your cart is full.")
    }
    else {
        console.log("Your cart is not full.")
    }
}
checkCartFull()

function displayItem() {
    shoppingList.forEach(
        (item, index) => {
            console.log(`${index + 1}.${item}`)
        }
    )
}
displayItem()

function checkItemIn(item) {
    if (shoppingList.includes(item)) {
        console.log(`${item} is in shopping list.`)
    }
    else {
        console.log(`${item} is not in shopping list.`)
    }
}
checkItemIn("milk")
checkItemIn("tomato")

