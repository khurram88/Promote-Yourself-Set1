
function goExecute()
{
    var arrPages = new Array();
	arrPages[0] = "/u/account/signup";
	arrPages[1] = "/login/sign_in.action";
	
	if(curPage(arrPages) == 0)
	{
		if(vContent("Sign up"))
		{
			smessage("red","<br/>Click <span style='font-style:italic'>SIGN UP</span>");
			vChange("id", "user_name", "username");
			vChange("id", "user_www", "link1_oLinkSet1");
			vChange("id", "user_email", "useremail");
			vCountry("id", "user_country_id", true);
			//vChange("id", "user_started_at", "yearfounded");
			vChange("id", "user_login", "username");
			vChange("id", "user_password", "password");
			vChange("id", "user_password_confirmation", "password");
			
			$("#user_terms_of_service").prop("checked", true);
			
		}
	}
	else if(vContent("Add your tags separated by space"))
	{
	    smessage("green", "<br/>Add a bio under ABOUT, Click <span style='font-style:italic !important;'>Add Link</span> to promote LINKS, and your TAGS. Then, you are finished with ProfessionalOnTheWeb and you may exit this tab.");
		myVLinks("id", "link_name", "id", "link_www", false);
		
		var linkObj = returnMyVLinksObj();
		var randNum;
		
		for(i=0; i < linkObj.length; i++)
		{
			var str = linkObj[i].link;
			if(str.indexOf("professionalontheweb.com") != -1)
			{
				linkObj.splice(i,1);
			}
		}
		
		function addNewValue()
		{
			var objLength = linkObj.length;
			console.log("Length is "+objLength);
			console.log(linkObj);
			randNum = Math.floor((Math.random() * objLength) + 0);
			console.log("Random number "+randNum);
			
			vCustom("id", "link_name", linkObj[randNum].title);
			vCustom("id", "link_www", linkObj[randNum].link.replace("https", "http"));
			console.log(linkObj[randNum].link);
			linkObj.splice(randNum,1);
			
		}
		
		addNewValue();
	
		setInterval(function ()
		{
			if($("#link_name").val().length == 0 && linkObj.length > 0)
			{
				addNewValue();
			}
		},1000);
		
		var tagName = localStorage['firstname']+" "+localStorage['lastname']+" "+localStorage['state']+" "+localStorage['city'];
		vCustom("id", "tag_name", tagName);
		setTimeout(function ()
		{
			$('[value="Add Tags"]').focus().click().blur();
		},1000);
		
		setInterval(function ()
		{
			$("a").each(function ()
			{
				var user_name = localStorage['username'];
				if($(this).text() == user_name)
				{
					var url = "http://www.professionalontheweb.com"+$(this).attr("href");
					var title = localStorage['firstname']+" "+localStorage['lastname']+" - Professional On The Web";
					chrome.extension.sendRequest({method: "setLocalStorage", key: "professionalontheweb_sLinkSet1", data: url});
					chrome.extension.sendRequest({method: "setLocalStorage", key: "professionalontheweb_sTitleSet1", data: title});
					return false;
				}
			});
		},2000);
	
	}
	
}

$(document).ready(function()
{
	goExecute();
});	
			