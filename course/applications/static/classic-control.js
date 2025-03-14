function openTab(evt, tabName) {
    // Hide all tab content
    const tabContents = document.getElementsByClassName("tab-content");
    for (const content of tabContents) {
        content.classList.remove("active");
    }
    
    // Remove active class from all tabs
    const tabs = document.getElementsByClassName("tab");
    for (const tab of tabs) {
        tab.classList.remove("active");
    }
    
    // Show the selected tab content and mark the button as active
    document.getElementById(tabName).classList.add("active");
    evt.currentTarget.classList.add("active");
}