function generateSignal() {
    const signals = ["BUY 📈", "SELL 📉", "WAIT ⏳"];
    const randomIndex = Math.floor(Math.random() * signals.length);
    document.getElementById("result").innerText = signals[randomIndex];
}
