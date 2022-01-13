let printMessage = (message, timePeriod) => {
    setInterval(console.log, timePeriod, message);
}

printMessage("privetiki", 3000);