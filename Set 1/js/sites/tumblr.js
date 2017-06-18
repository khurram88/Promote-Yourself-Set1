$(document).ready(function()
{
	var arrPages = new Array();
	arrPages[0] = "/register";
	arrPages[1] = "/new/text";
	arrPages[2] = "/new/link";
	arrPages[3] = "/getting_to_know_tumblr/#follow_some_blogs";
	arrPages[4] = "/dashboard";
	arrPages[5] = "/getting_to_know_tumblr/#create_your_blog"; //This url is found last time is testing. No smessage on this page.
	arrPages[6] = "/getting_to_know_tumblr/#blog_search";
	arrPages[7] = "/verify/";
	
	console.log(curPage(arrPages));
	if(curPage(arrPages) == 0)
	{	
		if(vContent("Another person has claimed this"))
		{
			smessage("red", "<br/>Click <span style='font-style: italic;'>SIGN UP</span>, then<br/>Enter your <span style='font-style: italic;'>AGE</span>, then<br/>Click <span style='font-style: italic;'>NEXT</span>, then <br/> Click on <span style='font-style: italic;'>I'm not a roboot</span>, then <br/> Click <span style='font-style: italic;'>VERIFY.</span>");
			
			vChange("name", "tumblelog[name]","username");
			vChange("name", "user[password]", "password");
			vChange("name", "user[email]", "useremail");	
			
			
			var timerIDD = setInterval(function()
				{
					if(vContent("Terms of Service"))
					{
						try { vCustom("id", "signup_age", "18"); } catch(e) { }
						try { vCustom("id", "signup_tos", true); } catch(e) { }
						clearInterval(timerIDD);
					}
				}, 1000);
		}
		else
		{
			smessage("red", "<br/>Click <span style='font-style: italic;'>SIGN UP</span>, then<br/>Enter your <span style='font-style: italic;'>AGE</span>, then <br/>Click <span style='font-style: italic;'>NEXT</span>, then<br/> Click on <span style='font-style: italic;'>I'm not a roboot</span>, then<br/> Click <span style='font-style: italic;'>VERIFY.</span>");
			
			vChange("name", "tumblelog[name]","username");
			vChange("name", "user[password]", "password");
			vChange("name", "user[email]", "useremail");	
			
			var timerIDD2 = setInterval(function()
			{
				try { vCustom("id", "signup_age", "18"); } catch(e) { }
				try { vCustom("id", "signup_tos", true); } catch(e) { }
				clearInterval(timerIDD2);
			
			}, 1000);
		}
	}
	else if(curPage(arrPages) == 1)
	{
		smessage("green", "<br/>Type your <span style='font-style: italic;'>TITLE</span>, then <br/> Type your <span style='font-style: italic;'>TEXT</span>, then <br/>Click <span style='font-style: italic;'>POST</span>, then you can move onto the next tab.");
		var url = $("#open_blog_link").attr('href');
		var urlnew = url.replace("http://", "http://www.");
		
		var title = localStorage['firstname']+" "+localStorage['lastname']+" on Tumblr";
		
		chrome.extension.sendRequest({method: "setLocalStorage", key: "tumblr_sLinkSet1", data: urlnew});
		chrome.extension.sendRequest({method: "setLocalStorage", key: "tumblr_sTitleSet1", data: title});
		
		
	}
	else if(curPage(arrPages) == 3)
	{
		smessage("red", "<br/>Click <a href='http://www.tumblr.com/dashboard'>here</a> to continue");
	}
	else if(curPage(arrPages) == 4)
	{
		//smessage("green", "<br/>You may add a <span style='font-style: italic;'>BIOGRAPHY</span>, <span style='font-style: italic;'>IMAGE</span> or details about your <span style='font-style: italic;'>SOCIAL WEBSITES LINKS</span> on this page. <br/><br/>If not, you are finished with tumblr and you may exit this tab.");
		smessage("red", "<br/>Click <a href='https://www.tumblr.com/new/text'><u>here</u></a> to add content.");
		
	}
	else if(curPage(arrPages) == 5)
	{
		smessage("red", "<br/>Click <a href='http://www.tumblr.com/dashboard'>here</a> to continue");
	}
	else if(curPage(arrPages) == 6)
	{
		smessage("red", "<br/>Click <span style='font-style: italic;'>SKIP</span>");
	}
	else if(curPage(arrPages) == 7)
	{
		smessage("red", "<br/>Click <i>CONTINUE TO TUMBLR</i>", "box-sizing: content-box !important;");
	}
	
});