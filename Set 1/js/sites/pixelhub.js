$(document).ready(function() 
{
	
		var arrPages = new Array();
		arrPages[0] = "/home/index.php";
		
		if(curPage(arrPages) == 0)
		{
				smessage("red","<br/>Click <span style='font-style:italic;'>GET STARTED</span>, then click the yellow button.");
				vChange("id", "sign_up_name", "fullname");
				$("#sign_up_name").focus();
				
				$("#username_placeholder").text("pixelhub.me/");
				vChange("id", "sign_up_username", "username");
				$("#sign_up_username").focus();
				//localStorage['dooidUsername'] = 
				
				vChange("id", "sign_up_email", "useremail");
				$("#sign_up_email").focus();
				
				vChange("id", "password1", "password");
				$("#password1").focus();
				
		}
		
		if(vContent("Some tips for getting started:"))
		{
			smessage("green", "<br/>Replace the text with a bio in the box to the left by clicking on the 'pencil icon'.<br/>Go to your inbox and make sure you have confirmed or finished all of your social media accounts."); //Click <span id='urlguide' style='color:black; cursor:pointer;'><u>here</u></span> to double-check that your sites look the way you want them to.			
			var url = window.location.href;
			var spl = url.split("/");
			console.log(spl[3]);
			var title = localStorage['firstname']+" "+localStorage['lastname']+" - Pixelhub.me";
			var urlnew = url.replace("http://", "http://www.");
			
			chrome.extension.sendRequest({method: "setLocalStorage", key: "Pixelhub_sLinkSet1", data: urlnew});
			chrome.extension.sendRequest({method: "setLocalStorage", key: "Pixelhub_sTitleSet1", data: title});
			
		}
		
	
});