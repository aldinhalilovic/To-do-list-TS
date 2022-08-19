const form = document.getElementById("input");
const list = document.getElementById("list");
const filter = document.getElementById("filter");

form.addEventListener("submit", addItem );      //adding item
list.addEventListener("click", removeItem);    //deleting item
filter.addEventListener("keyup", searchItems); // searching item

function addItem(event) {
    event.preventDefault();
    
    const newItemValue = document.getElementById("first").value;

    const newItem = document.createElement("li");

    newItem.classList = "item"

    newItem.append(document.createTextNode(newItemValue));


    list.append(newItem);
    
    const deleteBtn = document.createElement("button");
    deleteBtn.classList = "x";
    deleteBtn.append(document.createTextNode("X"));
    newItem.append(deleteBtn);
}


function removeItem (e) {
    if (e.target.classList.contains("x")) {
        const li = e.target.parentElement;
        list.removeChild(li);
    }
}

function searchItems(e) {
    const text = e.target.value.toLowerCase();
    const itemList = list.getElementsByTagName("li");
    Array.from(itemList).forEach(function(predmet) {
        const newList = predmet.firstChild.textContent;
        if (newList.toLowerCase().indexOf(text) != -1) {
            predmet.style.display = "flex" 
        } else {
            predmet.style.display = "none"
        }
    })
}