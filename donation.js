// Donation System for Noakhali

document.getElementById("Nk-Donate-Btn").addEventListener('click',function(){
    const currentDonation = getDonationStatusnMoney('Nk-Donation');
    const inputDonation = getInputDonationMoney('Nk-Donate-Input');
    const totalBalanceAmount = getTotalDonation('donation-Total');

    if(inputDonation > 0 && typeof inputDonation === 'number' && totalBalanceAmount > 0 && totalBalanceAmount >= inputDonation){
    const totalDonation = currentDonation + inputDonation;
    updateDonation('Nk-Donation',totalDonation);
    updateTotalDonation('donation-Total',inputDonation);
    }
    else{
        alert("Please enter positive integer or Balance Low!!!");
    }
});


// Donation System for Feni
document.getElementById("Feni-Donate-Btn").addEventListener('click',function(){
    const currentDonation = getDonationStatusnMoney('Feni-Donation');
    const inputDonation = getInputDonationMoney('Feni-Donate-Input');
    const totalBalanceAmount = getTotalDonation('donation-Total');

    if(inputDonation > 0 && typeof inputDonation === 'number'  && totalBalanceAmount > 0 && totalBalanceAmount >= inputDonation){
    const totalDonation = currentDonation + inputDonation;
    updateDonation('Feni-Donation',totalDonation);
    updateTotalDonation('donation-Total',inputDonation);
    }
    else{
        alert("Please enter positive integer or Balance Low!!!");
    }
    
});


// Donation System for Quota Movement
document.getElementById("Quota-Donate-Btn").addEventListener('click',function(){
    const currentDonation = getDonationStatusnMoney('Quota-Donation');
    const inputDonation = getInputDonationMoney('Quota-Donate-Input');
    const totalBalanceAmount = getTotalDonation('donation-Total');

    if(inputDonation > 0 && typeof inputDonation === 'number'  && totalBalanceAmount > 0 && totalBalanceAmount >= inputDonation){
        const totalDonation = currentDonation + inputDonation;
        updateDonation('Quota-Donation',totalDonation);
        updateTotalDonation('donation-Total',inputDonation);
    }
    else{
        alert("Please enter positive integer or Balance Low!!!");
    }
});


// document.getElementById("History-Btn").addEventListener('click', function(){
//     document.getElementById('History-Btn').style.backgroundColor = 'green';
// });




