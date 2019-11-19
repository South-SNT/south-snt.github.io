
load("nav.html", document.getElementById("navi"));
load("https://south-snt.github.io/Sisters-in-Technology/nav.html", document.getElementById("navi2"));


function load(url, element) {
    req = new XMLHttpRequest();

    req.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            // Typical action to be performed when the document is ready:
            element.innerHTML = req.responseText;
        }
    };

    req.open("GET", url, true);
    req.send(null);
}