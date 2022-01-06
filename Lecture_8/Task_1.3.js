let printMessage = (message, timePeriod) => {
    setInterval(console.log, timePeriod, message);//так проще,если функция для интервала/таймаута простая 
}

printMessage("privetiki", 3000);
