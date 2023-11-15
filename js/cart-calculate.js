
let total = 0;
let totalDecimel = 0;
// some global value 
const cuponInput = document.getElementById('cupon-input');
const totalPrice = document.getElementById('total-price');
const discount = document.getElementById('discount');
const totalMoney = document.getElementById('total');

const selectedItemContainer = document.getElementById("items-select");

function btnClickHandle(target) {
    //click any card div add creatElement li

    const count = selectedItemContainer.childElementCount;
    const itemName = target.childNodes[3].childNodes[3].innerText;
    const li = document.createElement("li");
    li.classList.add('my-2');
    li.innerText = `${count + 1}. ${itemName} `;
    selectedItemContainer.appendChild(li);

    //click card apply the discount innerText 00
    discount.innerText = '00.00';

    //Total Price calculate
    const productPrice = target.childNodes[3].childNodes[5].innerText.split(" ")[0];
    total = parseFloat(total) + parseFloat(productPrice);
    totalDecimel = total.toFixed(2)
    totalPrice.innerText = totalDecimel;

    //Total value  to same  total price value
    const totalMoney = document.getElementById('total');
    const totalMoneyCalculate = parseFloat(totalDecimel);
    totalMoney.innerText = totalMoneyCalculate.toFixed(2);

    updateCart();
}


//total price > 0 & total price >= 200, apply and make purchase btn enabled --
const btnApply = document.getElementById('btn-apply')
const btnMakePurchase = document.getElementById('btn-make-purchase')

function updateCart() {
    // check for apply
    if (totalDecimel >= 200) {
        btnApply.disabled = false;
    } else {
        btnApply.disabled = true;
    }

    // check for make purchase
    if (totalDecimel > 0) {
        btnMakePurchase.disabled = false;
    } else {
        btnMakePurchase.disabled = true;
    }
}

updateCart();

//Coupon code check "SELL200" and click apply btn ---
btnApply.addEventListener('click', function () {

    if (cuponInput.value === "SELL200") {
        cuponInput.value = ' ';
        //Discount Price calculate
        const discountCalculate = totalDecimel * (20 / 100);
        discount.innerText = discountCalculate.toFixed(2);
        //click apply btn change the Total 
        const totalMoneyCalculate = parseFloat(totalDecimel) - discount.innerText;
        totalMoney.innerText = totalMoneyCalculate.toFixed(2);
        return;
    }
    else {
        cuponInput.value = ' ';
        discount.innerText = '00.00';
        alert('Please enter correct Cuopon Code');
        return;

    }

})

// Go Home btn function click and all clear page ---
const btnGoHome = document.getElementById('btn-go-home');

btnGoHome.addEventListener('click', function () {
    total = 0;
    selectedItemContainer.innerText = '';
    totalPrice.innerText = '00.00'
    discount.innerText = '00.00';
    totalMoney.innerText = '00.00'
    cuponInput.value = '';
    btnApply.disabled = true;
    btnMakePurchase.disabled = true;
})


