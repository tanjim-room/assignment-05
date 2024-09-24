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

// Get Total Donation
function getTotalDonation(id){
    const total = Number(document.getElementById(id).innerText);
    return total;
}

// Update Total Donation
function updateTotalDonation(id,donation){
    const updateTotalBalance = Number(document.getElementById(id).innerText) - donation;
    document.getElementById(id).innerText = updateTotalBalance;

}