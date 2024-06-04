
let arr = JSON.parse(localStorage.getItem("data")) || []
let box = document.querySelector("#box")

document.querySelector("form").addEventListener("submit",(deepak)=>{
    deeapk.preventDefault()
  
    let obj = {
        id : arr.length+1,
        work : document.getElementById("work").value,
        completed : false
    }

    arr.push(obj)
    localStorage.setItem("data",JSON.stringify(arr))
    console.log(arr)
    view(arr)
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
        Ebtn.innerText = "Toogle"
        Ebtn.addEventListener("click",()=>{
           let a = arr.map((ele,i)=>{
                
                if(el.id == ele.id){
                    return {...ele,completed : !ele.completed}
                }else{
                    return ele
                }
            })
            localStorage.setItem("data",JSON.stringify(a))
             view(a)
            
        })
        let Dbtn = document.createElement("button")
        Dbtn.innerText = "Delete"
        Dbtn.addEventListener("click",()=>{
            
           arr.splice(index,1)
           localStorage.setItem("data",JSON.stringify(arr))
           view(arr)
        })
        let editbtn = document.createElement("button")
        editbtn.innerText = "Edit"
        let editinput = document.createElement("input")
        let editbutton = document.createElement("button")
        editbutton.innerText = "Edit Data"
        editinput.style.display = "none"
        editbutton.style.display = "none"
        editbtn.addEventListener("click",()=>{
            editinput.style.display = "block"
            editbutton.style.display = "block"
            editinput.value = el.work
            editbutton.addEventListener("click",()=>{
                let b = arr.map((ele)=>{
                    if(el.id == ele.id){
                        return {...ele,work:editinput.value}
                    }else{
                        return ele
                    }
                 })
                 console.log(b)
                 localStorage.setItem("data",JSON.stringify(b))
                 view(b)
            })
        })
        div.append(h1,p,Ebtn,Dbtn,editbtn,editinput,editbutton)
        box.append(div)
    })
}

view(arr)