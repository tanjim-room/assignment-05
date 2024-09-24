// Common Donation Function


// Get Input Field Money
function getInputDonationMoney(id){
    const inputDonationMoney = Number(document.getElementById(id).value);
    return inputDonationMoney;
}

// Get Donation Status Money
function getDonationStatusnMoney(id){
    const donationStatusMoney = Number(document.getElementById(id).innerText);
    return donationStatusMoney;
}

// Update Donation Status
function updateDonation(id,totalDonation){
    document.getElementById(id).innerText = totalDonation;
}

// Update Total Donation
function updateTotalDonation(id){
    const currentDonationTotal = getDonationStatusnMoney('Nk-Donation')+
                                 getDonationStatusnMoney('Feni-Donation')+
                                 getDonationStatusnMoney('Quota-Donation');

    document.getElementById(id).innerText = currentDonationTotal;
}

