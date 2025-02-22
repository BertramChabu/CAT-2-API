const div = document.getElementById('anime');
const fetchButton = document.getElementById('fetch'); // Renamed variable

function newList(data) {
    const ul = document.createElement("ul");
    ul.classList.add("list-group");
    ul.classList.add("mt-5");// Bootstrap class for list
    ul.classList.add("col-lg-4")
    ul.classList.add("col-md-6")
    ul.classList.add("col-sm-12")

    const li1 = document.createElement("li");
    li1.textContent = `ID: ${data.id}`;
    li1.classList.add("list-group-item"); // Bootstrap item class
    li1.classList.add("active");

    const li2 = document.createElement("li");
    li2.textContent = `Product Name: ${data.product_name}`;
    li2.classList.add("list-group-item");

    const li3 = document.createElement("li");
    li3.textContent = `Description: ${data.product_description}`;
    li3.classList.add("list-group-item");

    const li4 = document.createElement("li");
    li4.textContent = `Price: $${data.price}`;
    li4.classList.add("list-group-item");

    // Append list items to the ul
    ul.appendChild(li1);
    ul.appendChild(li2);
    ul.appendChild(li3);
    ul.appendChild(li4);

    return ul;
}

fetchButton.addEventListener("click", async function fetchData() {
    const apiUrl = "http://127.0.0.1:8000/store/product/"; // Replace with actual API URL

    try {
        const response = await fetch(apiUrl);

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();

        // Ensure it's an array, if multiple products
        div.innerHTML = ""; // Clear previous results
        data.forEach(product => {
            div.appendChild(newList(product));
        });

    } catch (error) {
        console.error("Fetch Error:", error);
    }
});
