
let products = {
    data: [
        {
            name: "LAPTOP GAMING ACER NITRO V",
            price: "19.990.000Đđ - 23.990.000đ",
            image: "https://bizweb.dktcdn.net/100/408/235/products/acer-ra-mat-laptop-gaming-predator-triton-helios-va-acer-nitro-5-da-nang-cap-tech-times-3-2-scaled.jpg?v=1630730896443"
        },

        {
            name: "LAPTOP GAMING ACER PREDATOR HELIOS 16",
            price: "71.990.000đ - 77.990.000đ",
            image: "https://product.hstatic.net/200000837185/product/laptop-acer-predator-helios-16-ph16-71-72bv_0474a6f1efc94deb91a841ef00cbebd3_master.jpg"
        },

        {
            name: "LAPTOP GAMING GIGABYTE G5",
            price: "780.000đ - 1.470.000đ",
            image: "https://bizweb.dktcdn.net/100/408/235/products/laptop-gigabyte-gaming-g5-3.jpg?v=1655112765533"
        },

        {
            name: "LAPTOP GAMING ACER NITRO 5 TIGER",
            price: "19.990.000đ - 24.990.000đ",
            image: "https://cdn.tgdd.vn/Products/Images/44/283458/acer-nitro-5-tiger-an515-58-773y-i7-nhqfksv001-thumb-600x600.jpg"
        },

        {
            name: "LAPTOP GAMING ACER ASPIRE 5",
            price: "15.780.000đ - 20.470.000đ",
            image: "https://product.hstatic.net/200000722513/product/gearvn-laptop-acer-aspire-5-a515-58p-71ej-1_e9e697ec1a934534891d0129e495e9b9_1024x1024.png"
        },

        {
            name: "LAPTOP GAMING ASUS ROG ZEPHYRUS G16",
            price: "60.780.000đ - 66.670.000đ",
            image: "https://product.hstatic.net/200000837185/product/laptop-asus-rog-zephyrus-g16-gu603vu-n3898w_096dfe1bcaef474eb6209082956a495f.jpg"
        },

        {
            name: "LATOP GAMING ASUS TUF GAMING A15",
            price: "32.780.000đ - 37.990.000đ",
            image: "https://cdn.tgdd.vn/Products/Images/44/315892/asus-tuf-gaming-a15-fa507nv-r7-lp031w-glr-thumb-600x600.jpg"
        },

        {
            name: "LAPTOP GAMING ASUS ROG STRIX G16",
            price: "47.780.000đ - 52.670.000đ",
            image: "https://product.hstatic.net/200000837185/product/laptop-gaming-asus-rog-strix-g16-g614ji-n4084w_25c2348a21394cebba801d1b1f7eade1_master.jpg"
        },

        {
            name: "LAPTOP GAMING LENOVO LOQ",
            price: "29.990.000đ - 32.990.000đ",
            image: "https://cdn.tgdd.vn/Products/Images/44/313611/lenovo-loq-gaming-15irh8-i5-82xv00q4vn-thumb-600x600.jpg"
        },

        {
            name: "LAPTOP GAMING LENOVO LEGION PRO 7",
            price: "79.990.000đ - 84.990.000đ",
            image: "https://minhancomputercdn.com/media/product/9937_lenovo_legion_7_16arha7_82uh001dvn_3.jpg"
        },

        {
            name: "LAPTOP GAMING MSI SWORD 16",
            price: "35.990.000đ - 40.670.000đ",
            image: "https://cdn.tgdd.vn/Products/Images/44/322100/msi-gaming-sword-16-hx-b14vfkg-i7-045vn-thumb-600x600.jpg"
        },

        {
            name: "LAPTOP GAMING MSI CYBORG 15",
            price: ".17.990.000đ - 20.990.000đ",
            image: "https://cdn.tgdd.vn/Products/Images/44/306134/msi-gaming-cyborg-15-a12ucx-i5-281vn-100623-021020-600x600.jpg"
        },

        {
            name: "LAPTOP GAMING HP OMEN 16",
            price: "64780.000đ - 69.670.000đ",
            image: "https://cdn.tgdd.vn/Products/Images/44/302981/hp-omen-16-n0087ax-r7-7c0t7pa-thumb-1-600x600.jpg"
        },
    ]
}
for (let items of products.data) {

    let card = document.createElement("div")
    card.classList.add("card")

    let imgInfor = document.createElement("div")
    imgInfor.classList.add("image-infor")

    let image = document.createElement("img")
    image.setAttribute("src", items.image)
    imgInfor.appendChild(image)
    card.appendChild(image)

    let infor = document.createElement("div")
    infor.classList.add("infor")

    let name = document.createElement("h5");
    name.classList.add("product-name");
    name.innerText = items.name.toUpperCase();
    infor.appendChild(name);

    let price = document.createElement("h6");
    price.innerHTML = "<b>Price:</b> " + items.price;
    infor.appendChild(price);

    let btn = document.createElement("button")
    btn.setAttribute("onclick", "addToCart()")
    btn.innerHTML = "Thêm vào giỏ hàng"
    infor.appendChild(btn)
  
    card.appendChild(infor);
    document.getElementById("feature").appendChild(card);
}

  for (let i of products.data){
    let product = JSON.parse(localStorage.product)
     product.push({
         name: items.name,
         price: items.price , 
         images: items.image
     })

      localStorage.setItem("product", JSON.stringify(product))
 }


 const addToCart = () => {
    
 }                 
