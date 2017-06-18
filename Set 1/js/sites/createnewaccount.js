
function goExecute()
{
    var arrPages = new Array();
	arrPages[0] = "/login?.src=flickrsignin";
	arrPages[1] = "/sign_upv";
	arrPages[2] = "/home";
	arrPages[3] = "/settings/profile";
	
	if(curPage(arrPages) == 0)
	{
	    smessage("red", "<br/>Click <a href='http://www.mail.yahoo.com'>here</a> to continue.", "color:black !important;");
		
	}
	else if(vContent("Compose") && vContent("Inbox"))
	{
		smessage("green", "<br/>Keep this tab open, as you will need to verify social media accounts. Don't install the Yahoo extension if they ask you to.", "color:black !important;");
	}
	
}

$(document).ready(function()
{
	goExecute();
});	