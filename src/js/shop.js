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

console.log(`yolo`);


// function isBiggerThan(a, b) {
// 	if (a > b) {
// 		return true;
// 	}
// 	return false;
// }

// const summe = add(1,2);
/*eslint-disable*/

//vorgehensweise (das ist n Object btw)
// const yolo = `ugh it´s complicated`;
// let howTo = {
//     first:`definiere Vn (productContainer) für das div, wo wir einfügen wollen`,
//     second:`definieren template-vn, welche mit .map alle Daten für alle Einträge(product) aus der json sagst:schreibei folgendes html`,
//     second2:`map führt function aus und returned den wert wieder in neues array. foreach führt nur aus`;
//     third:`verknüpfe dabei die einzelnen data entries (?) aus der json via ${yolo}`,
//     fourth:`du kannst dabei auch noch operatoren anwenden wie etwa /100`,
//     fifth:`NACH der Map (klammer zu) dann unbedingt noch .join Methode anwenden, damit alles als EIN String abgebildet wird`,
//     sixth:`setze für .innerHTML dann deine Vn productTemplate ein`
// };
// howTo();

export function shop() {
	const productContainer = document.querySelector(".products");
	const productTemplate = products.map(
		 product => `
		   <div class="product">
			 <h3 class="headline">${product.productName}</h3>
			 <div class="description">${product.description}</div>
			 <div class="price">${product.price / 100}€</div>
			 <button class="add-to-cart-button" data-product-id="${
			   product.id
			 }">Add to cart</button>
		   </div>
		  `
	   ).join("");

	   console.log(productTemplate);
       productContainer.innerHTML = productTemplate;
       
       //jetzt der button um das element in den warenkorb zu legen. 1. alle suchen, 2. 
       const addToCartButtons = document.querySelectorAll(".add-to-cart-button");

       addToCartButtons.forEach((cartButton) =>
         cartButton.addEventListener("click", handleCartButtonClick)
       );
}



export const meineZahl = 1;

       //ich will in der anderen datei den shop aufrufen
      export default shop;