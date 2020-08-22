class calculadora 
{
    num1 : number = 0;
    num2 : number = 0;
    constructor (x:number, y:number)
    {
        this.num1 = x;
        this.num2 = y;

    }
    multi()
    {
        return this.num1*this.num2;
        
    };
    resta(){
        return this.num1-this.num2;
    }
    suma(){
        return this.num1+this.num2;
    }

    div(){
        return this.num1/this.num2;
    }
}

let c = new calculadora(10,12);
let d = new calculadora(10,12);
let e = new calculadora(10,12);
let f = new calculadora(10,12);

console.log(c.multi());
console.log(d.resta());
console.log(e.suma());
console.log(f.div());


