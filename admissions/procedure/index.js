/* Testing, testing...

alert('Hello, World!');
*/

function pageInit() {
  console.log('JavaScript is enabled.');

  // Highlight the default opened tab
  document.getElementById('tab-button-default-open').className += " active";

  // Hide all tab panes that are marked inactive
  const default_tab_opened = "Process";
  let content_tabs = document.getElementsByClassName("page-body-content-tab");
  for (i = 0; i < content_tabs.length; i++) {
    if (content_tabs[i].id === default_tab_opened) {
      content_tabs[i].className += " active"
    }
    if (content_tabs[i].id !== default_tab_opened) {
      content_tabs[i].className += " inactive"
    }
  }

  // Unhide the Passers search field.
  document.getElementById('search-field').style.display = "block";

  // Hide HTML5 tabpane.
  document.getElementsByClassName('page-body-content-tabpane html5')[0].style.display = "none";

  // Show JavaScript tabpane.
  document.getElementsByClassName('page-body-content-tabpane jscript')[0].style.display = "block";
}

function openTab(event, tab_name) {
    // Cycle through the list of tab panes and hide each one.
    let content_tabs = document.getElementsByClassName("page-body-content-tab");
    for (i = 0; i < content_tabs.length; i++) {
        content_tabs[i].style.display = "none";
    }
    // Show the given tab pane name.
    document.getElementById(tab_name).style.display = "block";

    // Cycle through the list of tab buttons and remove the active flag from each one.
    let content_buttons = document.getElementsByClassName('tab-buttons');
    for (i = 0; i < content_buttons.length; i++) {
        content_buttons[i].className = content_buttons[i].className.replace(" active", "");
    }
    // Mark the button clicked active.
    event.currentTarget.className += " active";
}

function updateTable() {
  let input, filter, table, tr, td, i, txtValue;

  input = document.getElementById("search-field");
  filter = input.value.toUpperCase();
  table = document.getElementById("search-table");
  tr = table.getElementsByTagName("tr");
  
  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[0];
    if (td) {
      txtValue = td.textContent || td.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }       
  }
}