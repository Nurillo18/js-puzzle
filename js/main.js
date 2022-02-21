var money = Number(prompt("Qancha tolov qilmoqchisiz"));
var dollor = 750 ;
var yevro = 120 ;
var exchangeDollor = dollor * 10.900 ;
var exchangeYevro = yevro * 12272.64 ;

var accountMoney = exchangeDollor + exchangeYevro ;

if (money >= accountMoney) {
    console.log("“Oq yol, Alisher!”");
}else {
    console.log("“Alisher, ozgina sabr qilish kerak bolar ekan.” ");
}