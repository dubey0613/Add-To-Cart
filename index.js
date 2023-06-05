import {initializeApp} from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js"
import {getDatabase, ref, push} from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js"


const appSettings={
    databaseURL:"https://playground-61cd7-default-rtdb.asia-southeast1.firebasedatabase.app/"
}

const app=initializeApp(appSettings)
const database=getDatabase(app)
const shoppingListInDb=ref(database, "shopping-list") 

const input=document.getElementById("input-field")
const button=document.getElementById("add-button")

button.addEventListener("click", function(){
    let inputvalue=input.value
     push(shoppingListInDb, inputvalue)
})