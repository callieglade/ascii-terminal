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
    this.rows =     0; // vertical lines
    this.columns =  0; // number of columns in the terminal window
    this.position = 0; // the # line the renderer is on
}

function Cursor(element) {
    this.text = element.innerHTML;
    this.cursor = "_";
    this.on = false;
    this.blinkCursor = function(element) { // assumes 1 has-cursor element in document
        if (on === false) {
            element.innerHTML = text + cursor;
            var on = true;
        } else {
            element.innerHTML = text - cursor;
            var on = false;
        }
    }
}
const cursor = new Cursor(document.getElementsByClassName("has-cursor")); // assumes 1 has-cursor element in document

var hasCursorID = setInterval(cursor.blinkCursor, 400);