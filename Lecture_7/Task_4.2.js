let obj = {
    text: "Eto text!",
    getMessage(string) {
        this.text = string;
    },
    showMessage() {
        alert(this.text);
    }
}

obj.getMessage("A eto noviy text!");
obj.showMessage();