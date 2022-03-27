/* Testing, testing...

alert('Hello, World!');
*/

function pageInit() {
    // Highlight the default opened tab
    document.getElementById('tab-button-default-open').className += " active";
    
    // Hide all the page seperators in page body.
    const page_seps = document.getElementsByClassName("page-body-content-tab-sep");
    for (i = 0; i < page_seps.length; i++) {
        page_seps[i].style.display = "none";
    }
    
    // Hide all tab panes that are marked inactive
    const default_tab_opened = "Freshmen";
    let content_tabs = document.getElementsByClassName("page-body-content-tab");
    for (i = 0; i < content_tabs.length; i++) {
        if (content_tabs[i].id === default_tab_opened) {
        content_tabs[i].className += " active"
        }
        if (content_tabs[i].id !== default_tab_opened) {
        content_tabs[i].className += " inactive"
        }
    }

    // Hide HTML5 tabpane.
  document.getElementsByClassName('page-body-content-tabpane html5')[0].style.display = "none";

  // Show JavaScript tabpane.
  document.getElementsByClassName('page-body-content-tabpane jscript')[0].style.display = "block";
}

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