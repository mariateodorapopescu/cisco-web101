/**
 * TODO - Add an alert to be displayed
 *        when the page is _loaded_
 * 
 * > Hint - EventListener()
 */
addEventListener('DOMContentLoaded', () => { alert("test") })

/**
 * TODO - Replace the text of the <h1 /> header
 * 
 * > Hint - use the _id_ associated with it
 */
// document.getElementById('btn').innerHTML.addEventListener('onclick', () => { document.getElementById('header_1').innerHTML = "alt text"; })
document.getElementById('header_1').innerHTML = "mesaj";
//document.getElementById('btn').addEventListener('click', () => { document.getElementById('header_1').innerHTML = "alt text" });
//document.getElementById('btn').addEventListener('click', () => { document.getElementById('header_1').innerHTML = '<div style="background=color: blue;">mesaj</div>' });
// initial, am crezut ca butonul trebuie sa modifice textul din header

/**
 * TODO - Display a message when the button with the id = "btn"
 *        is clicked
 *  - you can either display it as an alert, or as a text in the page
 */
document.getElementById('btn').addEventListener('click', () => { window.alert("aparent, atat s-a putut") });


/**
 * Don't change
 */

let curr = ``;
let ids = [];

for (let i = 0; i < 10; i++) {
    let aux = "d_" + i;
    ids.push(aux);

    curr += `<div class="ex2" id = ${ids[i]}> </div>`;
}

// use console.log() to check the content of ids
console.log(ids);

document.getElementById('res').innerHTML = curr;

for (let i = 0; i < 10; i++) {
    randColor = Math.floor(Math.random() * 16777215).toString(16);
    document.getElementById(ids[i]).style.backgroundColor = "#" + randColor;
}

/**
 * TODO - For each element having the id "d_<even_number>"
 *        remove the "ex2" class and replace it with "ex" class
 * 
 *      - Also, for each of these elements, add some text
 * 
 * > Hint - classList()
 * 
 */

const div = document.querySelectorAll("div");
for (let i = 0; i < div.length; i++)
{
    if (i % 2 == 0)
    {
        let ceva = div[i];
        if (ceva.classList.contains("ex2"))
        {
            ceva.classList.remove("ex2");
            ceva.classList.add("ex1");
            ceva.innerHTML = "impar";
        }
    }
    if (div[i].classList.contains("ex2"))
    {
        div[i].style.border = "thick solid #0000FF";
    }
}
/**
 * TODO - For each element having the class "ex2"
 *        add a border
 * 
 * > Hint - getElementsByClassName()
 */