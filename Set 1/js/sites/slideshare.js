$(document).ready(function()
{
	
	var arrPages = new Array();
	arrPages[0] = "/signup";
	arrPages[1] = "/newsfeed?new_signup=true";
	arrPages[2] = "/edit_mypersonalinfo";
	arrPages[3] = "/newsfeed?redirect=1";
	arrPages[4] = "/professional-journey";
	arrPages[5] = "/?new_signup";
	
	var i = 0;
	var j = 0;
	var k = 0;
	
	console.log(curPage(arrPages));
	if(curPage(arrPages) == 0)
	{	
		smessage("red", "<br/> Enter the <i>CAPTCHA CODE</i>, then<br/>Click <i>SIGN UP</i>.", "box-sizing: content-box !important; line-height: normal !important;");
		vChange("id", "user_email", "useremail");
		$('#user_email').focus();
		
		vChange("id", "user_login", "username");
		$('#user_login').focus();
		
		vChange("id", "user_password", "password");
		$('#user_password').focus();	

	}
	else if(curPage(arrPages) == 1 || curPage(arrPages) == 3)
	{
		/* $(".j-edit-profile").each(function()
		{
			window.location.href = $(this).attr("href");
			return false;
		}); */
		
		$("a").each(function ()
		{
			if($(this).text() == "My Uploads")
			{
				var url = $(this).attr('href');
				var sp = url.split("/");
				
				var url = "https://www.slideshare.net/"+sp[1]+"/edit_mypersonalinfo";
				//smessage("red", "<br/> Click <a href='"+url+"' style='color:black !important;'><u>here</u></a> to continue.", "line-height: normal !important; box-sizing: content-box !important;");
				window.location.href = url;
				return false;
			}
		});
	}
	else if(curPage(arrPages) == 2)
	{
		smessage("green", "<br/>Click <i>SAVE</i> below, then move onto the next tab.");
		$("#account_type_id").val("2");
		if(localStorage['gender'] == 'male')
		{
			$("#user_gender").val("Male");
		}
		else 
		{
			$("#user_gender").val("Female");
		}
		
		vChange("id", "user_first_name", "firstname");
		vChange("id", "user_last_name", "lastname");
				
		vChange("id", "user_occupation", "jobtitle");
		vChange("id", "user_organization", "employer");
		myvBio("id", "user_description", false);
		myVLinks("", "", "id", "user_url", false);
		
		
		$("a").each(function ()
		{
			if($(this).text() == "My Uploads")
			{
				var url = $(this).attr('href');
				var sp = url.split("/");
				console.log(sp[1]);
				url = "https://www.slideshare.net/"+sp[1];
				var title = localStorage['firstname']+" "+localStorage['lastname']+" on Slideshare";
				chrome.extension.sendRequest({method: "setLocalStorage", key: "slideshare_sLinkSet1", data: url});
				chrome.extension.sendRequest({method: "setLocalStorage", key: "slideshare_sTitleSet1", data: title});
				return false;
			}
		});
	}
	else if(curPage(arrPages) == 4)
	{	
		smessage("red", "<br/>Click <i>NO THANKS</i>.");
	}
	else if(curPage(arrPages) == 5)
	{
		$("a").each(function ()
		{
			if($(this).text() == "My Uploads")
			{
				var url = $(this).attr('href');
				var sp = url.split("/");
				
				var url = "https://www.slideshare.net/"+sp[1]+"/edit_mypersonalinfo";
				smessage("red", "<br/> Click <a href='"+url+"' style='color:black !important;'><u>here</u></a> to continue.", "line-height: normal !important; box-sizing: content-box !important;");
				return false;
			}
		});
		
		
	}
		

});