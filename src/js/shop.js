//baue Schema X mit Constructor Function..  (Angela 166)
//provides number of inputs, die inputs matchen wir mit property names wie country
//hier jetzt auch erster letter groß + wir nutzen das keyword new um dann daraus ganz viele bullets zu nutzen
function ShopItem (id, productName, price, description) {
    this.id = id;
    this.productName = productName,
    this.price = price;
    this.description= description
}

//Initialize object:
var ShopItem1 = new ShopItem (`0`, `Äthiopien`, `6.90` `Maya Hochlandkaffee von Maya Kaffee 1991 ..hier fehlt stuff aber Eric macht es ja auch anders` )

