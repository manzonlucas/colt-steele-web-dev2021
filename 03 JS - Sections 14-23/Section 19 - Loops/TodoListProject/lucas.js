let command = prompt("Que desea hacer?");
const toDoList = [];
while (command !== "quit" && command !== "q") {
    if (command === "list") {
        console.log("********")
        for (let i = 0; i < toDoList.length; i++) {
            console.log(`Item N° ${i}: ${toDoList[i]}`)
        }
        console.log("********")
    } else if (command === "new") {
        const newToDo = prompt("Que desea agregar a la lista?")
        toDoList.push(newToDo)
        console.log(newToDo + " fue agregado a la lista")
    } else if (command === "delete") {
        const delItem = prompt("Ingrese el numero del item que desea eliminar");
        let deletedItem = toDoList.splice(delItem, 1);
        console.log(deletedItem + " fue eliminado de la lista")
    }


    command = prompt("Que desea hacer?")

}
console.log("ok quitting the app")
