



let data = [
        {
            id : 1,
            title : "ADDIDAS NEW HAMMER SOLE FOR SPORTS PERSON",
            price : 150.00,
            image : "https://preview.colorlib.com/theme/karma/img/product/p1.jpg"
    
        },
    
        {
            id : 2,
            title : "ADDIDAS NEW HAMMER SOLE FOR SPORTS PERSON",
            price : 250.00,
            image : "https://preview.colorlib.com/theme/karma/img/product/p2.jpg"
    
        },
    
        {
            id : 3,
            title : "ADDIDAS NEW HAMMER SOLE FOR SPORTS PERSON",
            price : 350.00,
            image : "https://preview.colorlib.com/theme/karma/img/product/p3.jpg"
    
        },
    
        {
            id : 4,
            title : "ADDIDAS NEW HAMMER SOLE FOR SPORTS PERSON",
            price : 299.00,
            image : "https://preview.colorlib.com/theme/karma/img/product/p4.jpg"
    
        },
    
        {
            id : 5,
            title : "ADDIDAS NEW HAMMER SOLE FOR SPORTS PERSON",
            price : 99.00,
            image : "https://preview.colorlib.com/theme/karma/img/product/p5.jpg"
    
        },
    
    
        {
            id : 6,
            title : "ADDIDAS NEW HAMMER SOLE FOR  SPORTS PERSON",
            price : 169.00,
            image : "https://preview.colorlib.com/theme/karma/img/product/p6.jpg"
    
        },
    
        {
            id : 7,
            title : "ADDIDAS NEW HAMMER SOLE FOR SPORTS PERSON",
            price : 500.00,
            image : "https://preview.colorlib.com/theme/karma/img/product/p7.jpg"
    
        },
    
        {
            id : 8,
            title : "ADDIDAS NEW HAMMER SOLE FOR SPORTS PERSON",
            price : 990.00,
            image : "https://preview.colorlib.com/theme/karma/img/product/p8.jpg"
    
        }
    
    ]






let cartbtn = document.createElement("button")
cartbtn.innerHTML="CART"
document.getElementById("cart").append(cartbtn)

cartbtn.addEventListener("click",function(){
    window.open("cart.html")
})

function displaydata(data){
    document.getElementById("main").innerHTML=""
    data.map((el,i)=>{
        let div = document.createElement("div")
        div.setAttribute("id","giris")

        let pic = document.createElement("img")
        pic.setAttribute("src",el.image)
        pic.setAttribute("id", "photo")


        let name = document.createElement("h6")
        name.innerHTML = el.title

        let pr = document.createElement("h5")
        pr.innerText = el.price

        let btn = document.createElement("button")
        btn.innerHTML = "ADD TO CART"
        btn.setAttribute("id","ak1")

        btn.addEventListener("click",function(){
            addTocart(i)
        })


        div.append(pic,name,pr,btn)
        document.querySelector("#main").append(div)
    })
}

displaydata(data)

let sortselect = document.getElementById("sort-select")
sortselect.addEventListener("change",()=>{
    let selected = sortselect.value 
    let selectedvalue = []

    if(selected === "low"){
        selectedvalue = data.slice().sort((a,b)=>a.price-b.price)
    }else if(selected === "high"){
        selectedvalue = data.slice().sort((a,b)=>b.price - a.price)
    }else if (selected === "az"){
        selectedvalue = data.slice().sort((a,b)=>a.title.localeCompare(b.title))
    }else if (selected === "za"){
        selectedvalue = data.slice().sort((a,b)=>b.title.localeCompare(a.title))
    }
    displaydata(selectedvalue)
})

function addTocart(index){
    let prodect = data.filter((item,i)=>{
        return i === index
    })

    let prodects = JSON.parse(localStorage.getItem("cart")) || []
    prodects.push(prodect[0])

    localStorage.setItem("cart",JSON.stringify(prodects))
}