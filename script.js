let numP=0;
let pantallaN="si";
let punto="no";
let numE=0;
let opera="";
let solucion="";

function ingresarNumero(x)
{
if(x!=".")
{

	if(numP=="0" || pantallaN=="si")
		{
			document.Calculadora.txt.value=x;
			numP=x;
		}
	else if(x!=".")
		{
			document.Calculadora.txt.value+=x;
			numP+=x;
		}
}

if(x=="." && punto=="no" && numP=="0")
	{
		document.Calculadora.txt.value="0.";
		numP=x;
		punto="si";
	}	
else if(x=="." && punto=="no")
	{

		document.Calculadora.txt.value +=x;
		numP +=x;
		punto="si";
	}
else if(x=="." && punto=="si")
{

}
	pantallaN="no";
}

function ingresarOperacion(y)
{
if(opera =="")
{

numE=document.Calculadora.txt.value;
document.Calculadora.txt.value +=y;
opera = y;
pantallaN = "no";
numP = "";
punto = "no";
_
}

}

function resultado()
{

if(opera != "") 
{
solucion= numE + opera + numP;
document.Calculadora.txt.value=eval(solucion);
numP = eval(solucion);
pantallaN="si";
opera = "";
punto = "no";

}

}

function raiz()
{

if(opera == "")
{
document.Calculadora.txt.value=Math.sqrt(numP);
pantallaN = "no";
opera = "";
punto = "no";
}
}

function limpiar()
{

 numP="0";
 pantallaN="si";
 punto="no"; 
 numE=0;
 opera="";
 solucion="";
document.Calculadora.txt.value="0";
}