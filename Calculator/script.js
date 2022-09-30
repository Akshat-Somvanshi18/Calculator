let i=0;
let r=0;
document.getElementById("dscreen1").value="";

function display(s)
{
    if(r==1)
    {
        document.getElementById("dscreen1").value="";
        r=0; 
        document.getElementById("dscreen1").style.animation="dscreen_anime2 0.1s 1 forwards"; 
        document.getElementById("dscreen2").style.animation="dscreen_anime1 0.1s 1 forwards"; 
    }
   document.getElementById("dscreen2").value="";
   document.getElementById("dscreen1").value+=s;
}

function display2(st)
{
    if(r==1)
    {
        document.getElementById("dscreen1").value="";
        r=0;
        document.getElementById("dscreen1").style.animation="dscreen_anime2 0.1s 1 forwards"; 
        document.getElementById("dscreen2").style.animation="dscreen_anime1 0.1s 1 forwards";  
    }
    document.getElementById("dscreen2").value="";
    if(st=='(')
    {
        document.getElementById("dscreen1").value+='(';
    }
    else if(st==')')
    {
        document.getElementById("dscreen1").value+=')';
    }
    else if(st=='10y')
    {
        document.getElementById("dscreen1").value+="10^";
    }
    else if(st=='pi')
    {
        document.getElementById("dscreen1").value+="pi";
    }
    else if(st=='ln' || st=='log')
    {
        document.getElementById("dscreen1").value+=st+"(";
    }
    else if(st=='2'&&document.getElementById("dscreen1").value!="")
    {
        document.getElementById("dscreen1").value+="^"+"2";
        calculate();
    }
}

function root(str)
{
    let x=document.getElementById("dscreen1").value;
    document.getElementById("dscreen2").value=eval(x+"**(1/"+str+")");
    if(str=='2')
    document.getElementById("dscreen1").value=+x+"^(1/2)=";
    else
    document.getElementById("dscreen1").value=x+"^(1/3)=";
    document.getElementById("dscreen1").style.animation="dscreen_anime1 0.1s 1 forwards";
    document.getElementById("dscreen2").style.animation="dscreen_anime2 0.1s 1 forwards";
    r=1;
    
}

function clearscreen(){
    document.getElementById("dscreen1").value="";
    document.getElementById("dscreen2").value="";
    document.getElementById("dscreen1").style.animation="dscreen_anime2 0.1s 1 forwards"; 
    document.getElementById("dscreen2").style.animation="dscreen_anime1 0.1s 1 forwards";   
}

function calculate()
{   
    let result = document.getElementById("dscreen1").value;
    result=result.replace(/Mod/g,"%");
    result=result.replace("^","**");
    result=result.replace(/x/g,"*");
    result=result.replace(/10^/g,"10**");
    result=result.replace(/pi/g,"Math.PI");
    result=result.replace(/log/g,"Math.log10");
    result=result.replace(/ln/g,"Math.log");
    document.getElementById("dscreen2").value=eval(result);
    document.getElementById("dscreen1").value=document.getElementById("dscreen1").value+"=";
    document.getElementById("dscreen1").style.animation="dscreen_anime1 0.1s 1 forwards";
    document.getElementById("dscreen2").style.animation="dscreen_anime2 0.1s 1 forwards";
    r=1;
}

function backspace(){
    var l = document.getElementById("dscreen1").value.length;
    document.getElementById("dscreen1").value=document.getElementById("dscreen1").value.slice(0,l-1);
}

 function disable()
 {
    document.getElementById("dscreen2").disabled=true;
 }

 

 


