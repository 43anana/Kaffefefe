import products from "./products.json";
//DAS FUNKTIONIERT NUR WEIL WIR N PARCELBUNDLER HABEN. sonst müssten wir fetchen

//this bezieht sich auf das element, auf das wir es anwenden. also hier das dataset vom button
//dataset holt sich dann aus dem button attribut ..wenn ich ein data- dash benutze wird aus dem 
//html data-product-id  dann in javascript einfach camelcase dataset.productId
//er hat auch gesagt: jeder cart button hat eigenes this
//parseInt brauch er an der Stelle weil unten die productID als attribut von button ja in einem 
//string mit `` durch return (zeile 45) eingegeben wird

function handleCartButtonClick(event) {
  const productId = parseInt(this.dataset.productId, 10);
  const chosenProduct3 = products.find(function (product) {
    if (product.id === productId) {
      return true;
    }
    return false;
  });
//chosenProduct3 soll beinhalten: speichere in der Vn jenes product (das isteht oben in (klammern)),
// welches gefunden wird, wenn ich mit .find für jedes product der products json gucke 
//ob product.id genau gleich ist wie die Zahl (4) die z.b. mein Produkt hat (das steht ja inder productId)
//das if else ist ziemlich doppelt, weil es nur true geben soll, bzw usn das interessiert. 
  const chosenProduct = products.find((product) => {
    if (product.id === productId) {
      return true;
    }
    return false;
  });
///was haben wir bis jetzt geschafft? das richtige produkt aus der json auswählen,
//indem wir über die in button attributes gespeicherte productId mit einem objekt
//in der json gematcht haben. wir haben jetzt also das richtige Produkt ausgewählt.
//noch ist glaube nichts gespeichert

  const chosenProduct2 = products.find((product) => product.id === productId);

  const currentCart = JSON.parse(localStorage.getItem("cart"));

  console.log(currentCart);

  //spread operator ... braucht es, damit nicht einfach zwei arrays in updatedCart gespeichert 
  //werden sondern ein langer, also nicht = [[1,3,5], [4]] sondern [1,3,5,4]

  //local storage ist hier jetzt nur ne "Krücke", eigentlich schreibt man es direkt in die
  //Datenbank --> also sowohl warnekorb sachen als auch gekaufte sachen

  //setitem nutzen wir hier um es in den warenkorb zu packen

  if (currentCart !== null) {
    const updatedCart = [...currentCart, chosenProduct];
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  } else {
    localStorage.setItem("cart", JSON.stringify([chosenProduct]));
  }
}

function shop() {
  const productContainer = document.querySelector(".products");
  const productTemplate = products.map(
    //!!!!!!hier könnte ich übrigens noch nach preis sortieren, das ist glaube in der boilerplate!
       (product) => {
         console.log(product);
         return `
         <div class="product">
           <h3 class="headline">${product.productName}</h3>
           <div class="description">${product.description}</div>
           <div class="price">${product.price / 100}€</div>
           <button class="add-to-cart-button" data-product-id="${
             product.id
           }">Add to cart</button>
         </div>
        `;
       }
     );

  productContainer.innerHTML = productTemplate;

  const addToCartButtons = document.querySelectorAll(".add-to-cart-button");

  addToCartButtons.forEach((cartButton) =>
    cartButton.addEventListener("click", handleCartButtonClick)
  );
}

export default shop;