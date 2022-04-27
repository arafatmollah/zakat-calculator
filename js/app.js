document.getElementById('calculate').addEventListener('click', function () {
    const bank = document.getElementById('bank');
    const bankValue = parseFloat(bank.value);
    bank.value = '';
    const gold = document.getElementById('gold');
    const goldValue = parseFloat(gold.value);
    gold.value = '';
    const silver = document.getElementById('silver');
    const silverValue = parseFloat(silver.value);
    silver.value = '';
    const business = document.getElementById('business');
    const businessValue = parseFloat(business.value);
    business.value = '';

    
    const fullValue = bankValue + goldValue + silverValue + businessValue;
    const balanace = document.getElementById('zakat');
    balanace.innerText = fullValue;
});
document.getElementById('save').addEventListener('click', () => {
    const total = document.getElementById('zakat');
    const valueTotal = parseFloat(total.innerText);
    
    const payable = (2.58 / 100) * valueTotal;
    console.log(payable)

    const pay = document.getElementById('pay');
    pay.innerText = payable;
});


document.getElementById('goods-save').addEventListener('click', () => {
    const goods = document.getElementById('goods');
    const goodsValue = parseFloat(goods.value);
    const saving = (5 / 100) * goodsValue;
    const goodsItem = document.getElementById('goods-value');
    goodsItem.innerText = saving;
});

document.getElementById('total-value').addEventListener('click', () => {
    console.log(555);
    const payZakat = document.getElementById('pay');
    const payZakatValue = parseInt(payZakat.innerText);
    const goodsItemValue = document.getElementById('goods-value');
    const value = parseInt(goodsItemValue.innerText)
    const finalZakat = value + payZakatValue;
    const totalzakat = document.getElementById('total-zakat');
    totalzakat.innerText = finalZakat;
    console.log(finalZakat)
})

