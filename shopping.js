// variable
const itemIncreaseBtn = document.getElementById("phone_increase");
const itemDecreaseBtn = document.getElementById("phone_decrease");
const caseIncreaseBtn = document.getElementById("case_increase");
const caseDecreaseBtn = document.getElementById("case_decrease");

//Event Loader
itemIncreaseBtn.addEventListener("click", function () {
  handleProductChange("phone", true);
});

itemDecreaseBtn.addEventListener("click", function () {
  handleProductChange("phone", false);
});
//for case
caseIncreaseBtn.addEventListener("click", function () {
  handleProductChange("case", true);
});

caseDecreaseBtn.addEventListener("click", function () {
  handleProductChange("case", false);
});

//Event Handler
function handleProductChange(product, isIncrease) {
  const itemNumber = document.getElementById(product + "_count");
  const itemCount = parseFloat(itemNumber.value);
  console.log(itemCount);
  // const updatedNumber = 1 + itemCount;
  let updatedNumber = itemCount;
  if (isIncrease == true) {
    updatedNumber = itemCount + 1;
  }
  if (isIncrease == false && itemCount > 0) {
    updatedNumber = itemCount - 1;
  }
  document.getElementById(product + "_count").value = updatedNumber;
  // const phoneTotal = updatedNumber * 1219;

  let productPrice = 0;
  if (product == "phone") {
    productPrice = updatedNumber * 1219;
  }
  if (product == "case") {
    productPrice = updatedNumber * 59;
  }

  document.getElementById(product + "_total").innerText = "$" + productPrice;
}
