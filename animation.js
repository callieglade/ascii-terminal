/*
Every (ASCII) animation implementation i've seen in JS has basically done it by
using setInterval() to call a function that updates an element's innerHTML.

I'm going to start by creating a blinking cursor, and then a typer. Seems easy... enough.

1. Create a function that updates a given element.innerHTML between two states
2. Create a function that uses setInterval() to swap those states on a delay to make a blinking cursor
3. Modify function to update given element.innerHTML on an iterative (character by character) basis
4. Modify function to update in a multiple-line fashion
5. Figure out where to go from there

Supposedly CSS animation is an option too but JS makes more sense for manipulating text in particular

*/

function Terminal(element) {
    // This will eventually be the text renderer for any Terminal windows.
    this.rows =       0; // vertical lines
    this.columns =    0; // number of columns in the terminal window
    this.activeLine = 0; // the # line the renderer is on
}
var cursor_element = document.getElementsByClassName("has-cursor");

function blinkCursor(e) { // assumes 1 has-cursor element in document
    var text = e.innerHTML;
    var cursor = "_";
    var on = false;
    if (on === false) {
        e.innerHTML = text + cursor;
        var on = true;
    } else {
        e.innerHTML = text - cursor;
        var on = false;
    }
}

var hasCursorID = setInterval(blinkCursor(cursor_element), 400);