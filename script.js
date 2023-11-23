//your code here!

document.addEventListener("DOMContentLoaded", function() {
    // Initial list items
    const initialItems = 10;
    const myList = document.getElementById("myList");

    for (let i = 1; i <= initialItems; i++) {
        const listItem = document.createElement("li");
        listItem.textContent = `List item ${i}`;
        myList.appendChild(listItem);
    }

    // Function to add more list items when scrolling to the bottom
    function addMoreItems() {
        const totalItems = myList.childElementCount;
        const scrollPosition = window.scrollY;
        const windowHeight = window.innerHeight;
        const documentHeight = document.documentElement.scrollHeight;

        // Check if the user has scrolled to the bottom
        if (scrollPosition + windowHeight >= documentHeight - 20) {
            // Add 2 more list items
            for (let i = 1; i <= 2; i++) {
                const newItem = document.createElement("li");
                newItem.textContent = `List item ${totalItems + i}`;
                myList.appendChild(newItem);
            }
        }
    }

    // Attach the addMoreItems function to the scroll event
    window.addEventListener("scroll", addMoreItems);
});
