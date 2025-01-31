document.addEventListener("DOMContentLoaded", function () {
    const dateInput = document.getElementById("tour-date");
    const today = new Date();
    const minDate = new Date("2025-02-16"); // Booking opens from Feb 16
    const maxDate = new Date("2025-02-25"); // Booking closes on Feb 25
    
    // Format date as YYYY-MM-DD
    const formatDate = (date) => {
        let d = date.getDate().toString().padStart(2, '0');
        let m = (date.getMonth() + 1).toString().padStart(2, '0');
        let y = date.getFullYear();
        return `${y}-${m}-${d}`;
    };

    dateInput.min = formatDate(minDate);
    dateInput.max = formatDate(maxDate);
    dateInput.value = formatDate(today < minDate ? minDate : today);
});