// Donation System for Noakhali

document.getElementById("Nk-Donate-Btn").addEventListener('click',function(){
    const currentDonation = getDonationStatusnMoney('Nk-Donation');
    const inputDonation = getInputDonationMoney('Nk-Donate-Input');
    const totalBalanceAmount = getTotalDonation('donation-Total');

    if(inputDonation > 0 && typeof inputDonation === 'number' && totalBalanceAmount > 0 && totalBalanceAmount >= inputDonation){
    const totalDonation = currentDonation + inputDonation;
    updateDonation('Nk-Donation',totalDonation);
    updateTotalDonation('donation-Total',inputDonation);

    // History Create
    const h2 = document.createElement("h2");
    h2.innerText = `${inputDonation} Taka is Donated for famine-2024 at Noakhali, Bangladesh`;
    document.getElementById("History-Section").appendChild(h2);
    h2.classList.add('text-2xl');
   

    const p = document.createElement("p");
    p.innerText = `Date: ${getCurrentDateTime()}`;
    document.getElementById('History-Section').appendChild(p);
    p.classList.add('mb-5');

    // 
    const modal = document.getElementById('my_modal_5');
    modal.showModal();

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

    // History Create
    const h2 = document.createElement("h2");
    h2.innerText = `${inputDonation} Taka is Donated for Flood Relief in Feni,Bangladesh`;
    document.getElementById("History-Section").appendChild(h2);
    h2.classList.add('text-2xl');
   

    const p = document.createElement("p");
    p.innerText = `Date: ${getCurrentDateTime()}`;
    document.getElementById('History-Section').appendChild(p);
    p.classList.add('mb-5');

    const modal = document.getElementById('my_modal_5');
    modal.showModal();
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

        // History Create
    const h2 = document.createElement("h2");
    h2.innerText = `${inputDonation} Taka is Donated for Aid for Injured in the Quota Movement, Bangladesh`;
    document.getElementById("History-Section").appendChild(h2);
    h2.classList.add('text-2xl');
   

    const p = document.createElement("p");
    p.innerText = `Date: ${getCurrentDateTime()}`;
    document.getElementById('History-Section').appendChild(p);
    p.classList.add('mb-5');

    const modal = document.getElementById('my_modal_5');
    modal.showModal();
    }
    else{
        alert("Please enter positive integer or Balance Low!!!");
    }
});


document.getElementById("History-Btn").addEventListener('click', function(){
    document.getElementById('History-Btn').style.backgroundColor = '#B4F461';
    document.getElementById("Donate-Btn").style.backgroundColor = 'white';
    showDonationHistory("History-Section");
});

document.getElementById("Donate-Btn").addEventListener('click', function(){
    document.getElementById('History-Btn').style.backgroundColor = 'white';
    document.getElementById("Donate-Btn").style.backgroundColor = '#B4F461';
    showDonationHistory("Donation-Section");
    
});







