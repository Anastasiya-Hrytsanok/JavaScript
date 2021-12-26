let printMessage = (message, timePeriod) => {
    setInterval(() => console.log(message), timePeriod);
}

printMessage("privetiki", 3000);