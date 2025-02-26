document.addEventListener("DOMContentLoaded", function () {
    const hoursSelect = document.getElementById("hours");
    const equipmentSelect = document.getElementById("equipment");
    const totalPrice = document.getElementById("total-price");

    function calculatePrice() {
        let baseRate = 100; // Set hourly rate
        let hours = parseFloat(hoursSelect.value);
        let price = hours * baseRate;

        if (equipmentSelect.value === "no") {
            price += 50; // Additional charge if equipment is NOT provided
        }

        totalPrice.textContent = `$${price.toFixed(2)}`;
    }

    hoursSelect.addEventListener("change", calculatePrice);
    equipmentSelect.addEventListener("change", calculatePrice);

    calculatePrice();
});