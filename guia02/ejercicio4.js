var calculadora = /** @class */ (function () {
    function calculadora(x, y) {
        this.num1 = 0;
        this.num2 = 0;
        this.num1 = x;
        this.num2 = y;
    }
    calculadora.prototype.multi = function () {
        return this.num1 * this.num2;
    };
    ;
    calculadora.prototype.resta = function () {
        return this.num1 - this.num2;
    };
    calculadora.prototype.suma = function () {
        return this.num1 + this.num2;
    };
    calculadora.prototype.div = function () {
        return this.num1 / this.num2;
    };
    return calculadora;
}());
var c = new calculadora(10, 12);
var d = new calculadora(10, 12);
var e = new calculadora(10, 12);
var f = new calculadora(10, 12);
console.log(c.multi());
console.log(d.resta());
console.log(e.suma());
console.log(f.div());
