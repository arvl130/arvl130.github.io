/* Testing, testing...

alert('Hello, World!');
*/

function openTab(event, tab_name) {
    console.log("Function" + this + "triggered.");
    let content_tabs = document.getElementsByClassName("page-body-content-tab");
    for (i = 0; i < content_tabs.length; i++) {
        content_tabs[i].style.display = "none";
    }

    let content_buttons = document.getElementsByClassName('tab-buttons');
    for (i = 0; i < content_buttons.length; i++) {
        content_buttons[i].className = content_buttons[i].className.replace(" active", "");
    }

    document.getElementById(tab_name).style.display = "block";
    event.currentTarget.className += " active";
}