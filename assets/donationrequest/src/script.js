var closeButton = document.getElementById('closeButton');
var modal = document.getElementById("donationBoxModel");

closeButton.addEventListener('click', function(){
    modal.parentElement.style.display = modal.style.display = "none";
    showQR(false);
})

function showModal(){
       modal.style.display = modal.parentElement.style.display = "block";
}

function showQR(showQR) {
    if(showQR){
        document.getElementById("qrCodeContainer").classList.remove("hidden");
         document.getElementsByClassName("profile")[0].classList.add("hidden");
    }else{
        document.getElementById("qrCodeContainer").classList.add("hidden");
        document.getElementsByClassName("profile")[0].classList.remove("hidden");
    }
}


