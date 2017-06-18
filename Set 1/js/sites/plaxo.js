$(document).ready(function() {
	
		var arrPages = new Array();
		arrPages[0] =  "/join";
		arrPages[1] =  "/home";
		arrPages[2] = "/bizCard/edit?src=homepage";
		
		console.log(curPage(arrPages));
		if(curPage(arrPages) == 0)
		{
			smessage("red","<br/>Click <i>REGISTER</i>", "line-height: normal !important; box-sizing: content-box !important;");
			
			vChange("id", "full_name", "fullname");
			vChange("id", "identity", "useremail");
			vChange("id", "password", "password");
			
		}
		else if(curPage(arrPages) == 1)
		{		
			if(vContent("We've sent you a confirmation e-mail to"))
			{
				smessage("red","<br/>Confirm your email, or move onto the next tab.", "line-height: normal !important; box-sizing: content-box !important;");
			}
		}
		else if(curPage(arrPages) == 2)
		{
			smessage("green","<br/>Click <i>EDIT</i>. You are now finished with Plaxo and may close this tab.", "line-height: normal !important; box-sizing: content-box !important;");
			// $('[onclick="editPublicUrl()"]').attr("disabled", true);
			$('a').each(function() 
			{
				if(this.text == "edit")
				{
					
					$(this).focus();
					var evt = document.createEvent("MouseEvents");
					evt.initMouseEvent("click", true, true, window, 1, 0, 0, 0, 0, false, false, false, false, 0, null);    	
					$(this).get(0).dispatchEvent(evt);    		    

					$(this).blur();
					evt.initMouseEvent("click", true, true, window, 1, 0, 0, 0, 0, false, false, false, false, 0, null);
					vChange("id", "nickname", 'username');
					
					$('a').each(function ()
					{
						if(this.text == "save")
						{
							$(this).focus();
							var evt = document.createEvent("MouseEvents");
							evt.initMouseEvent("click", true, true, window, 1, 0, 0, 0, 0, false, false, false, false, 0, null);    	
							$(this).get(0).dispatchEvent(evt);    		    

							$(this).blur();
							evt.initMouseEvent("click", true, true, window, 1, 0, 0, 0, 0, false, false, false, false, 0, null);
							return false;
						}
					});
					
					return false;
				}
			});
			
			var i = 0;
			setInterval(function ()
			{
				var elem = document.getElementById("contact_jobTitle");
				if(elem != null)
				{
					if(i == 0)
					{
						i++
						
						vChange("id", "contact_jobTitle", "jobtitle");
						vChange("id", "contact_company", "employer");
						myvBio("id", "contact_bio", false);
						vMonth("id", "contact_bMonth", "birthmonth");
						vChange("id", 'contact_bDay', 'birthday');
						vChange("id", "contact_workCity", "city");
						vChange("id", "contact_workState", "state");
						vChange("id", "contact_workPostalCode", "zip");
						vChange("id", "contact_workCountry", "country");
						var lnk = myVLinks("", "", "", "", true);
						
						vCustom("id", "workWebPageField", lnk.link);
						
						$('input[placeholder="LinkedIn"]').val(localStorage['linkedin_sLinkSet1']);
					}
				}
				else
					i = 0;
				
			},500);
			
			setInterval(function ()
			{
				var href = $( "#showNickName" ).text();
				var newhref = href.replace("edit", "");
				var title = localStorage['firstname']+" "+localStorage['lastname']+" - Plaxo";
				chrome.extension.sendRequest({method: "setLocalStorage", key: "plaxo_sLinkSet1", data: newhref });
				chrome.extension.sendRequest({method: "setLocalStorage", key: "plaxo_sTitleSet1", data: title});
			},500);
			
			//vChange("id", "candidate_headline", "jobtitle");
		}
		else if(curPage(arrPages) == -1)
		{
			if(vContent("including Sync Setting, Backup & Recovery"))
			{
				smessage("red","<br/>Click <a href='http://www.plaxo.com/bizCard/edit?src=homepage' style='color:black !important;'><u>here</u></a> to continue", "line-height: normal !important; box-sizing: content-box !important;");
				//vChange("id", "role_jobTypeName", "jobtitle");
				//vChange("id", "role_employer", "employer");
				//$("#role_fromYear_titletext").children().text("2009");
			}
		}
		

	
});
