// add_css
// Given a CSS string, add a stylesheet to the document.
function add_css(css_text) {
    var head = document.getElementsByTagName("head")[0];
    var css = document.createElement("style");

    css.type = "text/css";
    css.innerHTML = css_text;
    head.appendChild(css);
}

// set_colors
// Takes a hash of the form:
//	{
//	  selector: [fg_color, bg_color],
//	  ...
//	}
// converts it to a CSS string, and adds it to the document.
// Here, 'selector' is a CSS selector (e.g. an element or class), and
// 'fg_color' and 'bg_color' are the foreground and background colors,
// respctively.
function set_colors(color_table)
{
    let css = "";
    for (var sel in color_table)
    {
	let fg = color_table[sel][0];
	let bg = color_table[sel][1];
	css +=
`${sel} {
	color: ${fg};
	background-color: ${bg};
}
`;
    }
    add_css(css);
}
