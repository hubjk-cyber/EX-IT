const data = {
    p: [
        {name:"Pineapple Pizza", price:10, img:"p.jfif"},
        {name:"Cheese Pizza", price:8, img:"p1.jpg"},
        {name:"Pepperoni Pizza", price:9, img:"p2.jfif"},
        {name:"Veggie Pizza", price:7, img:"p3.jfif"},
        {name:"BBQ Pizza", price:11, img:"p4.jfif"},
        {name:"Mushroom Pizza", price:9, img:"p5.jfif"}
    ],
    dr: [
        {name:"Cola", price:2, img:"j.jfif"},
        {name:"Juice", price:3, img:"j1.jfif"},
        {name:"Water", price:1, img:"j2.jfif"},
        {name:"Milkshake", price:4, img:"j3.jfif"},
        {name:"Tea", price:2, img:"j4.jfif"},
        {name:"Coffee", price:3, img:"j5.jfif"}
    ],
    b: [
        {name:"Veggie", price:7, img:"b.jfif"},
        {name:"Normal", price:5, img:"b1.jfif"},
        {name:"Smash", price:4, img:"b2.jfif"},
        {name:"Triple combo", price:13, img:"b3.jfif"},
        {name:"Double combo", price:8, img:"b4.jfif"},
        {name:"Fried", price:7, img:"b5.jfif"}
    ],
    d: [
        {name:"Oreo cake", price:4, img:"d.jfif"},
        {name:"Ice cream", price:4, img:"d1.jfif"},
        {name:"chocolate puffs", price:3, img:"d2.jfif"},
        {name:"pancake", price:5, img:"d3.jfif"},
        {name:"Lava cake", price:5, img:"d4.jfif"},
        {name:"churros", price:3, img:"d5.jfif"}
    ],
    f: [
        {name:"cheese", price:4, img:"f.jfif"},
        {name:"BBQ", price:4, img:"f1.jfif"},
        {name:"animal", price:3, img:"f2.jfif"},
        {name:"plain", price:5, img:"f3.jfif"},
        {name:"curly", price:5, img:"f4.jfif"},
        {name:"crinkle cut", price:3, img:"f5.jfif"}
    ],
    c: [
        {name:"BBQ chicken", price:4, img:"c.jfif"},
        {name:"Fried chicken", price:4, img:"c1.jfif"},
        {name:"smoked chicken", price:3, img:"c2.jfif"},
        {name:"grilled chicken", price:5, img:"c3.jfif"},
        {name:"Tso chicken", price:5, img:"c4.jfif"},
        {name:"butter chicken", price:3, img:"c5.jfif"}
    ],
    br: [
        {name:"bread", price:4, img:"br.jfif"},
        {name:"breaDD", price:4, img:"br1.jfif"},
        {name:"BrEaD", price:3, img:"br2.jfif"},
        {name:"brEAd", price:5, img:"br3.jfif"},
        {name:"BREADDDD", price:5, img:"br4.jfif"},
        {name:"BreAD", price:3, img:"br5.jfif"}
    ],
    bu: [
        {name:"Homemade", price:4, img:"bu.jfif"},
        {name:"butter", price:4, img:"bu1.jfif"},
        {name:"sonic butter", price:3, img:"bu2.jfif"},
        {name:"Block o butter", price:5, img:"bu3.jfif"},
        {name:"buttermilk", price:5, img:"bu4.jfif"},
        {name:"honey butter", price:3, img:"bu5.jfif"}
    ],
    pa: [
        {name:"chicken fajita", price:4, img:"pa.jfif"},
        {name:"carbonara", price:4, img:"pa1.jfif"},
        {name:"alfredo", price:3, img:"pa2.jfif"},
        {name:"grilled chicken", price:5, img:"pa3.jfif"},
        {name:"creamy shrimp", price:5, img:"pa4.jfif"},
        {name:"garlic butter", price:3, img:"pa5.jfif"}
    ],
    l: [
        {name:"not wine", price:4, img:"c.jfif"},
        {name:"cherry wine", price:4, img:"c1.jfif"},
        {name:"red wine", price:3, img:"c2.jfif"},
        {name:"premium red wine", price:5, img:"c3.jfif"},
        {name:"Hatten wine", price:5, img:"c4.jfif"},
        {name:"white wine", price:3, img:"c5.jfif"}
    ],
    r: [
        {name:"shoyu", price:4, img:"r.jfif"},
        {name:"spicy", price:4, img:"r1.jfif"},
        {name:"chicken", price:3, img:"r2.jfif"},
        {name:"tonkotsu", price:5, img:"r3.jfif"},
        {name:"pork belly", price:5, img:"r4.jfif"},
        {name:"gochujang", price:3, img:"r5.jfif"}
    ],
    w: [
        {name:"belgian", price:4, img:"c.jfif"},
        {name:"chocolate", price:4, img:"c1.jfif"},
        {name:"sugar bomb", price:3, img:"c2.jfif"},
        {name:"normal", price:5, img:"c3.jfif"},
        {name:"milky way", price:5, img:"c4.jfif"},
        {name:"dark chocolate", price:3, img:"c5.jfif"}
    ]
};

let total = 0;

function loadCategory(category) {
    const container = document.getElementById("products");
    container.innerHTML = "";

    data[category].forEach(item => {
        container.innerHTML += `
        <div class="card">
            <img src="${item.img}">
            <h3>${item.name}</h3>
            <p>$${item.price}</p>
            <button onclick="addToCart('${item.name}', ${item.price})">Add</button>
        </div>`;
    });
}

function addToCart(name, price) {
    const li = document.createElement("li");
    li.textContent = name;
    document.getElementById("cartItems").appendChild(li);

    total += price;
    document.getElementById("total").textContent = total;
}

function checkout() {
    document.getElementById("popup").style.display = "block";
}

function closePopup() {
    document.getElementById("popup").style.display = "none";

    document.getElementById("cartItems").innerHTML = "";
    document.getElementById("total").textContent = "0";
    total = 0;
}