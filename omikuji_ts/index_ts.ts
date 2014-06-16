class Omikuji {
    span: HTMLElement;
    items: Array<string>;

    constructor(span: HTMLElement) {
        this.span = span;
        this.items = ["大吉", "中吉", "小吉", "凶", "大凶"];
    }

    consult() {
        var result = Math.floor(Math.random() * this.items.length);
        this.span.innerHTML = this.items[result];
    }
}

window.onload = () => {
    var result = document.getElementById("result");
    var omikuji = new Omikuji(result);
    var button = document.getElementById("omikuji");
    button.onclick = () => {
        omikuji.consult();
    }
}

