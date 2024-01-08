function billingFunction(){

	if(document.getElementById("same").checked)
	{
		var name=document.getElementById("shippingName").value;   //this will copy the value entered by the user in shipping name block
		var zip=document.getElementById("shippingZip").value;     //this will copy the value entered by the user in shipping zip block

		document.getElementById("billingName").value=name;   //finally these lines will copy the above initialised variables to the billing address and billing zip
		document.getElementById("billingZip").value=zip;
	}

	else
	{
		document.getElementById("billingName").value="";
		document.getElementById("billingZip").value="";
	}
}