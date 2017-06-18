
var timer = setInterval(function()
{
	if(window.location.href.indexOf("/sign_up") != -1)
	{
		window.location.href = "https://vimeo.com/home";
		clearInterval(timer);
	}
},100);

function goExecute()
{
    var arrPages = new Array();
	arrPages[0] = "/join";
	arrPages[1] = "/sign_upv";
	arrPages[2] = "/home";
	arrPages[3] = "/settings/profile";
	
	if(curPage(arrPages) == 0)
	{
	    smessage("red", "<br/>Click <i>JOIN</i>.", "margin-top: 15px;");
		
		var f_lname = localStorage['firstname']+" "+localStorage['lastname'];
		$('#name').val(f_lname);
		vChange("id", "email", "useremail");
		vChange("id", "password", "password");
		//fn_click("input", "value", "Join", 10);
		
	}
	else if(curPage(arrPages) == 1)
	{
		smessage("red", "<br/>Click <i>NO THANKS, I'll STICK WITH FREE VIMEO BASIC FOR NOW</i>");
	}
	else if(curPage(arrPages) == 2)
	{
		smessage("red", "<br/>Click <a href='/settings/profile' style='color:black; font-weight: normal !important;'><u>here</u></a> to continue.", "margin-top: 15px;");
	}
	else if(curPage(arrPages) == 3)
	{
		smessage("green", "<br/>Click <i>SAVE CHANGES</i>. You are now finished with Vimeo and may close this tab, despite a prompt.", "margin-top: 15px;");
		myvBio("id", "bio", false);
		
		var location = localStorage['city']+", "+localStorage['country'];
		$('#location').val(location);
		
		if(localStorage['gender'] == 'male')
		{
			$("#gender").val('m');
		}
		else
		{
			$("#gender").val('f');
		}

		$('input[value="Save Changes"]').prop('disabled', false);
		var linkObj = returnMyVLinksObj();
		var randNum;
		
		for(i=0; i < linkObj.length; i++)
		{
			var str = linkObj[i].link;
			if(str.indexOf("vimeo.com") != -1)
			{
				linkObj.splice(i,1);
			}
		}
		
		$('.js_new_link').bind("click", function() 
		{
			$("#link_submit").prop("disabled", false);
			var objLength = linkObj.length;
			console.log("Length is "+objLength);
			console.log(linkObj);
			randNum = Math.floor((Math.random() * objLength) + 0);
			console.log("Random number "+randNum);
			
			vCustom("id", "link_title", linkObj[randNum].title);
			vCustom("id", "link_url", linkObj[randNum].link);
			console.log(linkObj[randNum].link);
			
		});
		
		$('#link_submit').bind("click", function() 
		{
			linkObj.splice(randNum,1);
		});
			
		var flname = localStorage['firstname']+localStorage['middlename']+localStorage['lastname'];
		var newflname = flname.replace(/\s/g, '');
		$("#url").val(newflname);
		
		setInterval(function ()
		{
			var url = "http://www.vimeo.com/"+$("#url").val();
			var title = localStorage['firstname']+" "+localStorage['lastname']+" on Vimeo";
			chrome.extension.sendRequest({method: "setLocalStorage", key: "vimeo_sLinkSet1", data: url});
			chrome.extension.sendRequest({method: "setLocalStorage", key: "vimeo_sTitleSet1", data: title});
		},500);
		
		
	}
	
	
}

$(document).ready(function()
{
	goExecute();
});	