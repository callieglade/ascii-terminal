/*
Every (ASCII) animation implementation i've seen in JS has basically done it by
using setInterval() to call a function that updates an element's innerHTML.

I'm going to start by creating a blinking cursor, and then a typer. Seems easy... enough.

1. Create a function that updates a given element.innerHTML between two states
2. Create a function that uses setInterval() to swap those states on a delay to make a blinking cursor
3. Modify function to update given element.innerHTML on an iterative (character by character) basis
4. Modify function to update in a multiple-line fashion
5. Figure out where to go from there

Supposedly CSS animation is an option too but this makes more sense for manipulating text in particular

*/

let element = document.getElementsByClassName("has-cursor");