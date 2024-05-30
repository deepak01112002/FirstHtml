
let arr = JSON.parse(localStorage.getItem("data")) || []
let box = document.querySelector("#box")
document.querySelector("form").addEventListener("submit",(e)=>{
    
  
    let obj = {
        work : document.getElementById("work").value,
        completed : false
    }

    arr.push(obj)
    localStorage.setItem("data",JSON.stringify(arr))
    console.log(arr)
})



function view(arr){
    box.innerHTML = ""
    arr.forEach((el,index)=>{
        let div = document.createElement("div")
        div.setAttribute("class","cards")
        let h1 = document.createElement("h1")
        h1.innerText = el.work
        let p = document.createElement("p")
        p.innerText = el.completed ? "Completed" : "Not completed"
        // if(el.completed == true){
        //     p.innerText = "completed"
        // }else{
        //     p.innerText = "Not completed"
        // }
        let Ebtn = document.createElement("button")
        Ebtn.innerText = "Edit"
        let Dbtn = document.createElement("button")
        Dbtn.innerText = "Delete"
        Dbtn.addEventListener("click",()=>{
           arr.splice(index,1)
           localStorage.setItem("data",JSON.stringify(arr))
           view(arr)
        })
        div.append(h1,p,Ebtn,Dbtn)
        box.append(div)
    })
}

view(arr)