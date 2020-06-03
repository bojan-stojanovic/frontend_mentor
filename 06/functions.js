const price = document.querySelectorAll(".price");
const switchToggle = document.querySelector("#price_switch");

switchToggle.addEventListener("change", switchPrize, false);

function switchPrize(e) {
    for (let i = 0; i < price.length; i++) {
        let annualPrice = price[i].dataset.annual;
        let monthlyPrice = price[i].dataset.month;

        if (e.target.checked) {
            price[i].innerHTML = "&dollar;" + annualPrice;
        } else {
            price[i].innerHTML = "&dollar;" + monthlyPrice;
        }
    }
}