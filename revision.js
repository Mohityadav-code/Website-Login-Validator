
var button=document.getElementById("buttonHere")
function login(){
   
        var mail= document.getElementById('typeEmailX').value
        console.log('mail: ', mail);
        var pass= document.getElementById('typePasswordX').value
        console.log('pass: ', pass);
        if(mail=="mohit"&&pass=="yadav"){
            location.href = './Thankyou.html';
            console.log("hello world");
            Thankyou()
        }
        else 
        location.href = './error.html';

}
function Thankyou(){
}