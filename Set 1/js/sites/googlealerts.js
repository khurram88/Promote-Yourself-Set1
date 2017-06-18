
$(document).ready(function()
{
		var arrPages = new Array();
		arrPages[0] = "/alerts";
		
		if(curPage(arrPages) == 0)
		{
			smessage("red","<br/>Type your alert name in box, then <br/> Click <i>CREATE ALERT</i>.");
			var email = localStorage['useremail'];
			$(".delivery_input").val(email);
			//var name = localStorage['firstname']+" "+localStorage['lastname'];
			//$("[placeholder='Create an alert about...']").val(name);
			//$(".alert_buttons").show();
			
		}
		
});

