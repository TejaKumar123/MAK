
function sidepane(n){
s=document.getElementById('sidepane');
if(n==1){
s.style.width='250px';
s.style.border="1px solid black";
s.style.overflow="auto";
}
else{
s.style.width="0px";
s.style.border="none";
s.style.overflow="hidden";
}

}
sign_index=0;
function open_sign_up(k){
m=document.getElementById("signup");
n=document.getElementById("sign1");
if(k==1){
m.style.display="block";
n.style.animation="popup 0.30s linear 0s 1 normal";
opensign(sign_index);
}
else{
m.style.display="none";
n.style.animation="";
}

}


function opensign(l){
m=document.getElementsByClassName("loginup");
sign_index=l;
if(l==0){
document.getElementById("signin").style.display="block";
document.getElementById("signin").style.animation="opac 0.25s linear 0s 1 normal";
document.getElementById("signin1").style.display="none";
document.getElementById("signin1").style.animation="";
document.getElementById("sign1").style.height="400px";
m[0].style.backgroundColor="#39bed0";
m[0].style.boxShadow="0px 1px 3px black";
m[1].style.boxShadow="none";
m[1].style.backgroundColor="#2999bf";


}

else{
document.getElementById("signin").style.display="none";
document.getElementById("signin").style.animation="";
document.getElementById("signin1").style.display="block";
document.getElementById("signin1").style.animation="opac 0.25s linear 0s 1 normal";
document.getElementById("sign1").style.height="620px";
m[1].style.backgroundColor="#39bed0";
m[1].style.boxShadow="0px 1px 3px black";
m[0].style.boxShadow="none";
m[0].style.backgroundColor="#2999bf";
}

}








