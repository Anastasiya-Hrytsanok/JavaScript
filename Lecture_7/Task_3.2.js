let circle = {
    radius: 20,
    color: "green",
    calculateCircumference() {
        console.log(2 * Math.PI * this.radius)
    }
}

circle.calculateCircumference();