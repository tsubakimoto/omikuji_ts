var Omikuji = (function () {
    function Omikuji(span) {
        this.span = span;
        this.items = ["大吉", "中吉", "小吉", "凶", "大凶"];
    }
    Omikuji.prototype.consult = function () {
        var result = Math.floor(Math.random() * this.items.length);
        this.span.innerHTML = this.items[result];
    };
    return Omikuji;
})();

window.onload = function () {
    var result = document.getElementById("result");
    var omikuji = new Omikuji(result);
    var button = document.getElementById("omikuji");
    button.onclick = function () {
        omikuji.consult();
    };
};
//# sourceMappingURL=index_ts.js.map
