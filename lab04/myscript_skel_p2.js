const iconMoon = document.querySelector('.night');
const iconSun = document.querySelector('.day');

const body = document.body;

/**
 * Initial states of the icons
 */
iconMoon.style.display = 'block';
iconSun.style.display = 'none';
//document.getElementById('btn').addEventListener('click', () => { document.getElementById('header_1').innerHTML = "alt text" });
//document.getElementById('btn').addEventListener('click', () => { document.getElementById('header_1').innerHTML = '<div style="background=color: blue;">mesaj</div>' });

const btnMode = document.querySelector('.btn');
btnMode.addEventListener('click', () => {
    /**
     * TODO - Add/Remove the 'active' class depending on
     *        the Day/Night Mode
     * 
     *   -> the 'active' class is used to change the background
     *      when switching to Day Mode (see body.active in .css)
     * 
     * ++ - try using only one command
     */
     document.body.classList.toggle( "active" );
     func();

    /**
     * TODO - Create a function to change the text
     *        and call it (e.g. from 'Night Mode' to 'Day Mode')
     * 
     *   - you can pass any parameters to the function
     */

     
    /**
     * TODO - Create a function to switch the icon
     * 
     * > Hint - which attribute can you change?
     */
});

function func()
{
    if(document.body.classList.contains("active"))
     {
        document.body.getElementsByClassName("text-mode")[0].textContent = "Day Mode";
        document.body.getElementsByClassName("text-mode")[0].style = "color: #ffbf00";
        document.getElementsByClassName("icon")[1].classList.remove("fa-moon-o","night");
        document.getElementsByClassName("icon")[1].classList.add("fa-sun-o","day");
     }
     else
     {
        document.body.getElementsByClassName("text-mode")[0].textContent = "Night Mode";
        document.body.getElementsByClassName("text-mode")[0].style = "color: white";
        document.getElementsByClassName("icon")[1].classList.remove("fa-sun-o","day");
        document.getElementsByClassName("icon")[1].classList.add("fa-moon-o","night");
     }
}