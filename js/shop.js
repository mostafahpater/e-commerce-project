var storeData = [
            {"id": 1, "title": "woman hat", "price": 50, "image": "https://m.media-amazon.com/images/I/31zLEQC2jaL._AC_.jpg"  },
            {"id": 2, "title": "man scarve", "price": 100, "image": "https://m.media-amazon.com/images/I/61cTBlCyprL._AC_SY550_.jpg"  },
            {"id": 3, "title": "labtop bag", "price": 600, "image": "https://m.media-amazon.com/images/I/51HqPDFAoAL._AC_.jpg"  },
            {"id": 4, "title": "woman dress", "price": 400, "image": "https://m.media-amazon.com/images/I/51zdV1iA-IL._AC_SY741_.jpg"  },
            {"id": 5, "title": "woman sunglass", "price": 280, "image": "https://m.media-amazon.com/images/I/512mxMe8sXL._AC_SX679_.jpg"  },
            {"id": 6, "title": "basket jacket", "price": 480, "image": "https://m.media-amazon.com/images/I/51hXoK6pxZL._AC_SX569_.jpg"  }

        ]

var dataarry = [];
function cards1() {
    var data = storeData[0]
  
    if (!(localStorage.getItem("card1"))) {
        localStorage.setItem("card1", JSON.stringify(dataarry));
       

      } else {
        dataarry =  JSON.parse(localStorage.getItem("card1"));
   

          dataarry.push(data);
      localStorage.setItem("card1", JSON.stringify(dataarry));
  }
}
function cards2() {
    var data = storeData[1]
      
    if (!(localStorage.getItem("card1"))) {
        localStorage.setItem("card1", JSON.stringify(dataarry));
      } else {
        dataarry =  JSON.parse(localStorage.getItem("card1"));
   

          dataarry.push(data);
      localStorage.setItem("card1", JSON.stringify(dataarry));
  
  }
}
function cards3() {
    var data = storeData[2]
    
    if (!(localStorage.getItem("card1"))) {
        localStorage.setItem("card1", JSON.stringify(dataarry));
      } else {
        dataarry =  JSON.parse(localStorage.getItem("card1"));
   

          dataarry.push(data);
      localStorage.setItem("card1", JSON.stringify(dataarry));
  
  }
}
function cards4() {
    var data = storeData[3]
    
    if (!(localStorage.getItem("card1"))) {
        localStorage.setItem("card1", JSON.stringify(dataarry));
      } else {
        dataarry =  JSON.parse(localStorage.getItem("card1"));
   

          dataarry.push(data);
      localStorage.setItem("card1", JSON.stringify(dataarry));
  }
}
function cards5() {
    var data = storeData[4]
   
    if (!(localStorage.getItem("card1"))) {
        localStorage.setItem("card1", JSON.stringify(dataarry));
      } else {
        dataarry =  JSON.parse(localStorage.getItem("card1"));
   

          dataarry.push(data);
      localStorage.setItem("card1", JSON.stringify(dataarry));
  }
}
function cards6() {
    var data = storeData[5]
   
    if (!(localStorage.getItem("card1"))) {
        localStorage.setItem("card1", JSON.stringify(dataarry));
      } else {
        dataarry =  JSON.parse(localStorage.getItem("card1"));
   

          dataarry.push(data);
      localStorage.setItem("card1", JSON.stringify(dataarry));
    }
    loadding()
}

// carts html

var mainselec = document.querySelector("body > main > .container")
var total = document.getElementById("totalprice")
function loadding() {
    var loc = localStorage.getItem("namehtml")
    acc.innerText = loc
    //add to cart
    var getter =JSON.parse(localStorage.getItem("card1"))
for(i in getter){
     mainselec.innerHTML += `<div>
    <img width="100" height="100" src="${getter[i].image}" alt="">
    <h3 >${getter[i].title}</h3>
    <p >${getter[i].price} EGP</p>
    <button onclick="del(${i})">Delete</button>
</div>`
// collection values for product
total.innerText = parseInt(total.textContent) + getter[i].price
}



}
//delete Cart

function del(i) {
    getter =JSON.parse(localStorage.getItem("card1"))
    getter.splice(i,1)
    localStorage.setItem("card1", JSON.stringify(getter));
    console.log(getter)
    mainselec.innerHTML = " "
    total.innerHTML = parseInt(total.textContent) - parseInt(getter[i].price)
    loadding()  
}

//Sorts By Name And By Price

function sortprice() {
  getter =JSON.parse(localStorage.getItem("card1"))
  getter.sort(function(a, b){ return a.price-b.price})
  mainselec.innerHTML = ""
  localStorage.setItem("card1", JSON.stringify(getter));
loadding()
  console.log(getter)
  
}
function sortName() {
  getter =JSON.parse(localStorage.getItem("card1"))
  var rade = getter.sort(function(a, b){ 
    
    if (a.title >b.title) {
      return 1;
    } else if(a.title<b.title){
      return -1;
    }else{
      return 0;
    }
  })
  mainselec.innerHTML = ""
  localStorage.setItem("card1", JSON.stringify(getter));
loadding()
  console.log(getter)
  
}


//search by name
var divw = document.querySelectorAll("body >.product > div > div")
var i ; 
function searchname(){
  var produtData = new XMLHttpRequest
   produtData.open("GET","https://mocki.io/v1/ab07ea1c-6c2d-43fb-bc62-4d0b19df4d26")
   produtData.onreadystatechange =function(){
   if ((produtData.status == 200) && (produtData.readyState ==4)) {
    var data = JSON.parse(produtData.responseText);
    var search = document.getElementById("myInput").value;
    for (i of data)
     {
       i = 0
       if(i.title.toLowerCase().includes(search.toLowerCase())){
          }else
          {               
            
            
             }
                          
      }
}
                        
}
                      produtData.send()
}