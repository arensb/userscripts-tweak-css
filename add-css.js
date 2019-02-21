function add_css(css_text) {
    var head = document.getElementsByTagName("head")[0];
    var css = document.createElement("style");

    css.type = "text/css";
    css.innerHTML = css_text;
    head.appendChild(css);
}
