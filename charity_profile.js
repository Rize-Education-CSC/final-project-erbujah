// Event listener to the "Volunteer Now" button
document.addEventListener("DOMContentLoaded", () => {
    const volunteerButton = document.querySelector("button[type='submit']");
    const formSection = document.createElement("div");

    // hidden form to collect contact information
    formSection.innerHTML = `
        <form id="contactForm" style="display: none;">
            <label for="name">Name:</label>
            <input type="text" id="name" name="name" required>
            <label for="email">Email:</label>
            <input type="email" id="email" name="email" required>
            <button type="submit">Submit</button>
        </form>
    `;

    document.body.appendChild(formSection);

    // Show form on button click
    volunteerButton.addEventListener("click", (e) => {
        e.preventDefault();
        const contactForm = document.getElementById("contactForm");
        contactForm.style.display = "block";
    });

    //  (hover effect)
    const header = document.querySelector("header h1");
    header.addEventListener("mouseover", () => {
        header.style.color = "#FFD700";
    });
    header.addEventListener("mouseout", () => {
        header.style.color = "white";
    });
});
