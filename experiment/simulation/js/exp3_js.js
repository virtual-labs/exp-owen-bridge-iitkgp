function Set_l()
{
	var image = document.getElementById('myImage');
	var p2=parseFloat(document.getElementById('p2').value);
	if (image.src.match("s2")) 
	{
		alert('Switch off the circuit first.');
	}
	else
	{
		if (p2==1)
		{
		document.f1.r1.value= 10000;
		document.f1.L1.value= 45;
	    }
		if (p2==2)
		{
        document.f1.r1.value= 10000;
		document.f1.L1.value= 450;
	    }
}
}

function simulate_rl()
{
	if(check==1)
	{
		var f1=parseFloat(document.getElementById('f1').value);
		var w=2*3.14*f1;
		var C2=parseFloat(document.getElementById('C2').value);
		var R3=parseFloat(document.getElementById('R3').value);
		var C4=parseFloat(document.getElementById('C4').value);
		var R2=parseFloat(document.getElementById('R2').value);
	    document.f1.c333.value = (R2*R3*C4) * 1000;
		document.f1.r333.value = (R3*(C4/C2));
		document.f1.rd33.value = (w * (R2*R3*C4) /(R3*(C4/C2))).toPrecision(8) ;  
	}
	else
	{
		alert("Please Switch on the supply to verify the milivoltmeter reading first.");
	}

}

function changeImage() {
	
		var image = document.getElementById('myImage');
		var im5= document.getElementById('v1');
		var im6= document.getElementById('f1');
		if (image.src.match("s1")) {
			image.src = "./images/s2.png"; cf3=1;
			im5.setAttribute('readonly', 'readonly'); im6.setAttribute('readonly', 'readonly');
			check=1;
			execute_ckt();
		} 
			
		 else {
			image.src = "./images/s1.png"; cf3=0;
			im5.removeAttribute('readonly'); im6.removeAttribute('readonly');
			document.f1.A1.value = 0; check=0;
			perform_meter();
			document.f1.A2.value='';
			document.f1.c333.value='';
			document.f1.r333.value='';
			document.f1.rd33.value='';
			}
	}
	
function execute_ckt()
	{
		if(check==1)
		{
			var f1=parseFloat(document.getElementById('f1').value);
			var w=2*3.14*f1;
			var v1=parseFloat(document.getElementById('v1').value);
			var r1=parseFloat(document.getElementById('r1').value);
			var L1=(parseFloat(document.getElementById('L1').value))/1000;
			var R2=parseFloat(document.getElementById('R2').value);
			var C2=parseFloat(document.getElementById('C2').value);
			var R3=parseFloat(document.getElementById('R3').value);
			var C4=parseFloat(document.getElementById('C4').value);
			var Z1=Math.sqrt((r1*r1)+((w*L1)*(w*L1)));
			var Z2=Math.sqrt((R2*R2)+(1/(w*C2*w*C2)));
			var Z3=R3;
			var Z4=1/(w*C4);
			var I1=v1/(Z1+Z3);
			var I2=v1/(Z2+Z4);
			var dvv=((I1*Z1)-(I2*Z2));
			var xyz=dvv*1000;
			document.f1.A1.value= xyz.toPrecision(5);
			document.f1.A2.value= xyz.toPrecision(5);
			perform_meter();
		}
		
	}

