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

// No button action
let noBtnClickCount = 0;
document.getElementById("noBtn").addEventListener("click", function() {
    noBtnClickCount++;
    this.style.pointerEvents = "none"; // Disable clicking after the first click
    
    // Change button behavior after each click (e.g., change text, color, etc.)
    if (noBtnClickCount === 1) {
        this.innerText = "No... Really?";
        this.style.backgroundColor = "#ffcc00"; // Yellow
    } else if (noBtnClickCount === 2) {
        this.innerText = "You're really sure?";
        this.style.backgroundColor = "#d32f2f"; // Red
    } else {
        this.innerText = "Okay, I get it!";
        this.style.backgroundColor = "#ff8a65"; // Light red
    }
});
