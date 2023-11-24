var list = "";
function start() {
    for (var i = 1; i <= 12; i++) {
        list += "<p>";
        list += "<img id='image' src = 'media/" + i + ".jpeg' alt='Book" + i + "' >";
        list += "<button class='add-to-cart-btn' data-name='Book " + i + "' data-price='5.99'>Add to Cart</button>";
        list += "</p>";
    }

    document.getElementById("books").innerHTML = list;
}

window.addEventListener("load", start, false);


