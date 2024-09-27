function openTab(tabId) {
    const tabs = document.querySelectorAll('.sidebar ul li');
    tabs.forEach(tab => {
        tab.classList.remove('active');
    });
    const currentTab = document.querySelector(`li[onclick="openTab('${tabId}')"]`);
    if (currentTab) {
        currentTab.classList.add('active');
    }
    const contents = document.querySelectorAll('.tab-content');
    contents.forEach(content => {
        content.classList.remove('active');
    });
    const selectedContent = document.getElementById(tabId);
    if (selectedContent) {
        selectedContent.classList.add('active');
    }
}
