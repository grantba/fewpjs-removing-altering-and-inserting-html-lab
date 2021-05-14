// no longer has DOM node 'main#main': Make sure you remove the <main> with id 'main': expected <main id="main"></main> to not exist
main.remove();
// has a 'newHeader' variable that points to node 'h1#victory': newHeader is not defined
let newHeader = document.createElement("h1");
// has a 'newHeader' variable that points to node 'h1#victory' with "YOUR-NAME is the champion" inside: newHeader is not defined
newHeader.id = "victory";
newHeader.innerHTML = "Blaire is the champion";
