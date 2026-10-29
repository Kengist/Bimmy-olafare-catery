const year = document.querySelector("#year");

if (year) {
    year.textContent = new Date().getFullYear();
}

const bookingForm = document.querySelector("#booking-form");
const eventDate = document.querySelector("#event-date");
const whatsappNumber = "2349078782298";

if (eventDate) {
    const today = new Date();
    const localDate = new Date(today.getTime() - today.getTimezoneOffset() * 60_000)
        .toISOString()
        .slice(0, 10);
    eventDate.min = localDate;
}

if (bookingForm instanceof HTMLFormElement) {
    bookingForm.addEventListener("submit", (event) => {
        event.preventDefault();

        const formData = new FormData(bookingForm);
        const message = [
            "Hi Bimmy! I'd like to enquire about catering.",
            `Name: ${formData.get("name")}`,
            `Email: ${formData.get("email")}`,
            `Event date: ${formData.get("date")}`,
            `Number of guests: ${formData.get("guests")}`,
            `Occasion: ${formData.get("occasion")}`,
            `Additional details: ${formData.get("details") || "None"}`,
        ].join("\n");

        window.location.href = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    });
}