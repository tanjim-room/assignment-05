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

// Show Donation or History
function showDonationHistory(id){
    document.getElementById('Donation-Section').classList.add('hidden');
    document.getElementById('History-Section').classList.add('hidden');
    document.getElementById(id).classList.remove('hidden');
}

// Get Time
function getCurrentDateTime() {
    const now = new Date();
    
    const day = now.getDate().toString().padStart(2, '0');
    const month = (now.getMonth() + 1).toString().padStart(2, '0'); // Month is zero-based, so add 1
    const year = now.getFullYear();
    
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');
    
    return `${day}/${month}/${year} ${hours}:${minutes}:${seconds}`;
}