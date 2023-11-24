// variables used to interact with the img elements
var book1Image;
var book2Image;
var qoutes = ['The reading of all good books is like conversation with the finest (people) of the past centuries." - Descartes',
    '\"The more that you read, the more things you will know. The more that you learn, the more places you\'ll go.\" - Dr. Seuss',
    "\"Read the best books first, or you may not have a chance to read them at all.\" - Henry David Thoreau",
    "The more that you read, the more things you will know. The more that you learn, the more placesyou'll go.- Dr. Seuss"];


// register button listener and get the img elements
function start() {
    //document.getElementById("hi").innerHTML = Date();
    book1Image = document.getElementById("book1_img");
    ref1 = document.getElementById("ref1");
    book2Image = document.getElementById("book2_img");
    book3Image = document.getElementById("book3_img");
    qoute_header = document.getElementById("qoute");
    setImage1(book1Image, ref1);
    setImage2(book2Image);
    setImage3(book3Image);
    setQoute(qoute_header, qoutes);

} // end function start


function setQoute(qoute_header, qoutes) {
    var randValue = Math.floor(1 + Math.random() * 4);
    qoute_header.innerHTML = qoutes[randValue - 1];
    qoute_header.innerHTML += "&emsp; &emsp;";
} // end function 


function setImage1(Img_num, ref) {
    var randValue = Math.floor(1 + Math.random() * 4);
    Img_num.setAttribute("src", "media/" + randValue + ".jpeg");
    Img_num.setAttribute("alt",
        "Book " + randValue);
    ref.setAttribute("href",
        randValue + ".html");
} // end function setImage

function setImage2(Img_num, ref) {
    var randValue = Math.floor(1 + Math.random() * 6);
    Img_num.setAttribute("src", "media/" + randValue + ".jpeg");
    Img_num.setAttribute("alt",
        "Book " + randValue);
} // end function setImage
function setImage3(Img_num, ref) {
    var randValue = Math.floor(1 + Math.random() * 6) + 6;
    Img_num.setAttribute("src", "media/" + randValue + ".jpeg");
    Img_num.setAttribute("alt",
        "Book " + randValue);
} // end function setImage

window.addEventListener("load", start, false);