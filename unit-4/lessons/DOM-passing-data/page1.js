console.log("works on pg1 fam")

function gotoPage2() {
    let product = document.getElementById("product");
    let quantity = document.getElementById("quantity");

    //* in the window, go into the 'location' object, and to 'href' and link page 2
    window.location.href = `./page2.html?product=${product.value}&quantity=${quantity.value}`;

}