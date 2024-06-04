
let arr = JSON.parse(localStorage.getItem("data")) || []
let box = document.querySelector("#box")
document.querySelector("form").addEventListener("submit",(e)=>{
    e.preventDefault()
    let obj = {
        id:arr.length+1,
        title : document.getElementById("title").value,
        cat : document.getElementById("category").value,
        price : document.getElementById("price").value,
        img : document.getElementById("imgURL").value
    }
    arr.push(obj)
    localStorage.setItem("data",JSON.stringify(arr))
    document.getElementById("box").innerHTML = view(arr)
})

document.getElementById("box").innerHTML = view(arr)


function view(arr){
    return `<div>
        <table>
                  <thead>
                      <tr>
                         <th>Image</th>
                         <th>Product Name</th>
                         <th>Price</th>
                         <th>Category</th>
                         <th>Edit</th>
                         <th>Delete</th>
                      </tr>
                  </thead>
                  <tbody>
                  ${arr.map((el)=>{
                     return `<tr>
                        <td><img src=${el.img} alt=${el.title} width="150px" height="150px"/></td>
                        <td>${el.title}</td>
                        <td>${el.price}</td>
                        <td>${el.cat}</td>
                        <td><button id="editbtn" onclick="edit(el.id)">Edit</button></td>
                        <td><button>Delete</button></td>
                    </tr>`
                    }).join("")}
                </tbody>
        </table>          
    </div>`
    
}


function edit(t){
    console.log(t)

}