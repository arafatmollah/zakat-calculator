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
    console.log(fullValue)
})