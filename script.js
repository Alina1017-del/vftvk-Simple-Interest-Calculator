function compute(){
//get the value and calculate
   var principal =parseFloat( document.getElementById("principal").value);
   var rate=parseFloat(document.getElementById("rate").value);
   var years=parseFloat(document.getElementById("years").value);
   var interest = principal*years*rate/100;
   var yearInFuture= new Date().getFullYear()+years;
   //create the interest rate
   document.getElementById("result").innerHTML = "Interest:If you deposit<mark>"+principal+"</mark>,<br/>"+
   "at an interest rate of <mark>"+ rate + "</mark>,<br/>"+
   "you will receive an amount of <mark>" + interest +"</mark>,<br/>"+
   "in the year <mark>" + yearInFuture + "</mark>";
}
//update the value
function getSliderValue()
{
    document.getElementById("rateSpan").innerHTML=document.getElementById("rate").value;

}
//check for positive nos
function validateAmount()
{
    var principal = document.getElementById("principal").value;
    var biggerThanZero=parseInt(principal)>0;
    if(!biggerThanZero)
    {
        alert("Enter positive number");
        document.getElementById("principal").focus();
    }
}
        