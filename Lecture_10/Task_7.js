class Ball {
    constructor(ballType) {
        this.ballType = ballType;
    }
    set ballType(val) {
        if (val === "superBall") {
            this.__ballType = val;
        } else if (!val) {
            this.__ballType = "regular";
        } else {
            console.log("error")
        }
    }
    get ballType() {
        return this.__ballType;
    }
}