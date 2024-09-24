// Donation System for Noakhali

document.getElementById("Nk-Donate-Btn").addEventListener('click',function(){
    const currentDonation = getDonationStatusnMoney('Nk-Donation');
    const inputDonation = getInputDonationMoney('Nk-Donate-Input');
    if(inputDonation > 0 && typeof inputDonation === 'number'){
    const totalDonation = currentDonation + inputDonation;
    updateDonation('Nk-Donation',totalDonation);
    updateTotalDonation('donation-Total');
    }
    else{
        alert("Please enter positive integer!!!");
    }
});


// Donation System for Feni
document.getElementById("Feni-Donate-Btn").addEventListener('click',function(){
    const currentDonation = getDonationStatusnMoney('Feni-Donation');
    const inputDonation = getInputDonationMoney('Feni-Donate-Input');

    if(inputDonation > 0 && typeof inputDonation === 'number'){
    const totalDonation = currentDonation + inputDonation;
    updateDonation('Feni-Donation',totalDonation);
    updateTotalDonation('donation-Total');
    }
    else{
        alert("Please enter positive integer!!!");
    }
    
});


// Donation System for Quota Movement
document.getElementById("Quota-Donate-Btn").addEventListener('click',function(){
    const currentDonation = getDonationStatusnMoney('Quota-Donation');
    const inputDonation = getInputDonationMoney('Quota-Donate-Input');
    
    if(inputDonation > 0 && typeof inputDonation === 'number'){
        const totalDonation = currentDonation + inputDonation;
        updateDonation('Quota-Donation',totalDonation);
        updateTotalDonation('donation-Total');
    }
    else{
        alert("Please enter positive integer!!!");
    }
});



// Update Total Donation
updateTotalDonation('donation-Total');



