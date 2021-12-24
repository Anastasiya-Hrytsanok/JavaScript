let selfGeneratedUser = {
    getInfo() {
        this.name = prompt("Enter your name");
        this.email = prompt("Enter your email");
        this.phone = prompt("Enter your phone");
    },
    introduce() {
        for (let key in selfGeneratedUser) {
            if (this[key] && typeof this[key] != 'function') {
                alert(`${key}: ${this[key]}`);
            }
        }
    }
}

selfGeneratedUser.getInfo();
selfGeneratedUser.introduce();