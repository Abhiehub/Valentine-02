document.getElementById("envelope").addEventListener("click", openEnvelope);

let envelopeOpened = false;

function openEnvelope() {
    if (!envelopeOpened) {
        // Flip open the envelope
        document.querySelector(".flap").style.transform = "rotateX(180deg)";
        document.getElementById("message").classList.remove("hidden");
        envelopeOpened = true;
    }
}

// Yes button action
document.getElementById("yesBtn").addEventListener("click", function() {
    document.getElementById("finalMessage").classList.remove("hidden");
    document.getElementById("message").classList.add("hidden");
});
