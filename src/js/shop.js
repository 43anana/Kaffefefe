//baue Schema X mit Constructor Function..  (Angela 166)
//provides number of inputs, die inputs matchen wir mit property names wie country
//hier jetzt auch erster letter groß + wir nutzen das keyword new um dann daraus ganz viele bullets zu nutzen
// function ShopItem (id, productName, price, description) {
//     this.id = id;
//     this.productName = productName,
//     this.price = price;
//     this.description= description
// }

// //Initialize object:
// var ShopItem1 = new ShopItem (`0`, `Äthiopien`, `6.90` `Maya Hochlandkaffee von Maya Kaffee 1991 ..hier fehlt stuff aber Eric macht es ja auch anders` )
import products from "./products.json";
import productImages from "../img/*.png";


/*eslint-disable*/

// function fillTemplateImg (product) {
//     return `
//     <img src="${productImages[product.image]}"
//     alt="eine Tüte unseres Kaffees der Sorte ${product.productName}"
//   />
// `
// }
// function  Lukas {
// const productTemplates = products.map(fillTemplate).join("");
// const shopi = document.querySelector(".products");
// shopi.innerHTML = productTemplates;
// }

function handleCartButtonClick(event) {
    const productId = parseInt(this.dataset.productId, 10);
    const chosenProduct = products.find ((product) => { 
        if(product.id === productId) {
            return true;
        } 
        return false;
    });

    const currentCart = JSON.parse (localStorage.getItem("cart"));
    console.log(currentCart);

    if (currentCart !== null) {
        const updatedCart = [...currentCart, chosenProduct];
        localStorage.setItem("cart", JSON.stringify(updatedCart));
        console.log(currentCart);
    } else {
        localStorage.setItem("cart", JSON.stringify([chosenProduct]));
        console.log(currentCart);
    }
}

//vorgehensweise (das ist n Object btw)
// const yolo = `ugh it´s complicated`;
// let howTo = {
//     first:`definiere Vn (productContainer) für das div, wo wir einfügen wollen, mit backtiks damit html möglich`,
//     first-2: `wir machen die product-objects in ein array weil array andere methoden als n objekt hat`,
//     first-3:`sortieren, rausschmeißen, rein, .. und wir können für jedes in Serie das gleiche html erstellen! das machen wir`,
//     second:`definieren template-vn, welche mit .map alle Daten für alle Einträge(product) aus der json sagst:schreibei folgendes html`,
//     second2:`map führt function aus und returned den wert wieder in neues array. foreach führt nur aus`;
//     third:`verknüpfe dabei die einzelnen data entries (?) aus der json via ${yolo}`,
//     fourth:`du kannst dabei auch noch operatoren anwenden wie etwa /100`,
//     fifth:`NACH der Map (klammer zu) dann unbedingt noch .join Methode anwenden, damit alles als EIN String abgebildet wird`,
//     sixth:`setze für .innerHTML dann deine Vn productTemplate ein`
// };
// howTo();

//INNERHALB `VON ${IST JAVASCRIPT}, AUßERHALB DANN TEXT`

 function shop() {
     const productContainer= document.querySelector(`.products`);
    //  const productTemplate = `
    //  ${products.map(
    //      function(product){hier drin weiter mit product arbeiten}
    //  )
    //     ;
    //  }` //jetzt ist die .map aus der productTemplate zu

     //SAME IN ARROW:
     const productTemplateArrow = `
     ${products.map(
         //hinter den pfeil kommt jetzt wieder n template string rein
        //da zieh ich dann auch aus product.map die json infos
         (product) => `
        <div class="product">
            <img class="image" src="${productImages[product.image]}"
            alt="eine Tüte unseres Kaffees der Sorte ${product.productName}"
            />
            <h3 class="headline">${product.productName}</h3>
            <div class="price">${product.price / 100}Euro</div>
            <button class="add-to-cart-button" data-product-id="${
                product.id
              }">Add to cart</button>
        </div>
     `
     )
     .join ("")    } 
     `// jetzt ist mein $products.map zu
     ; //und auch beendet (? weil simikolon)

     //von productcontainer das inner.html auf den string setzen, den wir gebaut haben:
     productContainer.innerHTML = productTemplateArrow;

    //FÜGE EINEN EINKUAFSWAGEN HINZU, DER KLICKBAR IST
    const addToCartButtons = document.querySelectorAll(".add-to-cart-button");

    addToCartButtons.forEach((cartButton) =>
    cartButton.addEventListener("click", handleCartButtonClick)
  );
}   //jetzt ist der shop zu


    //ENTSPRECHEND in LANGER schreibweise:
//    export function shopTest () {
//     const testProductsContainer = document.querySelector(`.products`);
//     const testProducts = `
//     ${products.map((product) =>{
//         console.log(product);
//         return `
//         <div class="product">
//             <h3 class="headline">${product.productName}</h3>
//         </div>
//         `;
//      } )
//      .join ("")}
//         `;
       
//         testProductsContainer.innerHTML = testProducts;
//     }


    //3: brauchen jetzt noch aus unserem dom das element wo wir das gnaze eihngen wollen
    //das ist das products div in der html.. indem wir ganz oben productContainer in shop schreiben
    
// 	const productContainer = document.querySelector(".products");
// 	const productTemplate = products.map(
// 		 product => `
// 		   <div class="product">
// 			 <h3 class="headline">${product.productName}</h3>
// 			 <div class="description">${product.description}</div>
// 			 <div class="price">${product.price / 100}€</div>
// 			 <button class="add-to-cart-button" data-product-id="${
// 			   product.id
// 			 }">Add to cart</button>
// 		   </div>
// 		  `
// 	   ).join("");

// 	   console.log(productTemplate);
//        productContainer.innerHTML = productTemplate;

//        //jetzt der button um das element in den warenkorb zu legen. 1. alle suchen, 2. 
//        const addToCartButtons = document.querySelectorAll(".add-to-cart-button");

//        addToCartButtons.forEach((cartButton) =>
//          cartButton.addEventListener("click", handleCartButtonClick)
//        );
// }
console.log(products);
const findBrazil = `${products.find( ({productName}) => productName ===`Brasilien`)} und schreibe noch..`;
console.log(findBrazil);

//const result = inventory.find( ({ name }) => name === 'cherries' );


export const meineZahl = 1;

       //ich will in der anderen datei den shop aufrufen
      export default shop;