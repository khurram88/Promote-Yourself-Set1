$(document).ready(function()
{
	try {
			
		var arrPages = new Array();
		arrPages[0] = "/reg/join?trk=hb_join";
		arrPages[1] = "/reg/basic-profile"; 
		arrPages[2] = "/reg/abook";
		arrPages[3] = "/reg/confirm-";
		arrPages[4] = "/reg/send-mobile-message-entry";
		arrPages[5] = "/reg/upgrade?flow=";
		arrPages[6] = "/profile/guided";
		arrPages[7] = "/profile/edit";
		arrPages[8] = "/profile/edit-additional-info";
		arrPages[9] = "/profile/edit?";
		arrPages[10] = "/profile/edit-education";
		arrPages[11] = "/profile/edit-summary";
		arrPages[12] = "/uas/login";
		arrPages[13] = "/profile/view";
		arrPages[14] = "/profile/edit?locale=en_US&report%2Esuccess";
		arrPages[15] = "/reg/join-create";
		arrPages[16] = "/reg/broadcast-entry?";
		arrPages[17] = "/profile/public-profile-settings";
		arrPages[18] = "/reg/pymk-entry";
		
		var i = 0;
		var j = 0;
		var k = 0;
		var it = 0;
		var p = 0;
		var pfirst = true;
		var itfirst = true;
		var sfirst = true;
		console.log(curPage(arrPages));
		if(curPage(arrPages) == 0)
		{	
			smessage("red", "<br/>You do not have to create a 2nd LinkedIn profile if you already have one, and you may close this tab. However I recommend creating one through our software, as it will be powerful in search engine rankings. Please click<br/> <i>JOIN LINKEDIN</i> to continue.");

			vChange("id", "firstName-coldRegistrationForm", "firstname");
			vChange("id", "lastName-coldRegistrationForm", "lastname");
			vChange("id", "email-coldRegistrationForm", "useremail");
			vChange("id", "password-coldRegistrationForm", "password");
			
			var inp = $("#firstName-coldRegistrationForm");
			if(inp.val().length == 0) 
			{
				location.reload(true);
			}
			
			//fn_click("button", "id", "btn-submit", 10); Yes
		}
		else if(curPage(arrPages) == 1)
		{
			smessage("red", "<br/>If the prompt appears, select an <i>INDUSTRY</i> at the bottom, and then click <i>CREATE MY PROFILE</i> below.");
			vCountry("id", "countryCode-location-employedProfileForm", true);
			vChange("name", "postalCode", "zip");
			vChange("id", "companyName-companyInfo-employeeCompany-employedProfileForm", "employer");
			vChange("id", "workCompanyTitle-employedProfileForm", "jobtitle");
			vChange("id", "schoolText-school-education-studentProfileForm", "college");
			vChange("id", "startYear-startEndYear-education-studentProfileForm", "educationstartyear");
			
			if(localStorage['presently_employed'] == 'true')
			{
				$("#employed-btn").focus().click().blur();
			}
			else if(localStorage['presently_studied'] == 'true')
			{
				$("#student-btn").focus().click().blur();
			}
			
			//fn_click("input", "id", "employed-btn-submit", 10);
		}
		else if(curPage(arrPages) == 2)
		{
			smessage("red", "<br/>Click <i>SKIP</i>, unless you want to connect with friends. By the way, you can move this box around if I ever get in your way.");
			
			//fn_click_byID("id", "skipButton", 10);
		}
		else if(curPage(arrPages) == 12)
		{
			//smessage("red", "[Step 6 of 17] <br/>Click SIGN IN to continue");
			//vChange("id", "session_password-login", "password");
		}
		else if(curPage(arrPages) == 3)
		{
			if(vContent("After clicking the button below you will be asked to sign in to your account to confirm this email address"))
			{
				//smessage("red", "[Step 5 of 17] <br/>Click CONFIRM");
				//fn_click("input", "value", "Confirm", 10);
			}
			else
			{
				smessage("red", "<br/>You need to confirm your email now or later. I prefer to move onto the next tabs (windows at the top) and confirm all of the emails at the end.");
				$("a").each(function()
				{
					if($(this).html().indexOf("Confirm my Yahoo! Account") != -1)
					{	
						$(this).hide();
						$(this).css("display", "none");
						$(this).css("opacity", "0");
						return false;
					}
				});		
				
			}
		}
		else if(curPage(arrPages) == 4)
		{
			smessage("red", "<br/>Click <i>SKIP</i>");
			//click_func("object", "button", "html", "Share on Twitter", 10);
		}
		else if(curPage(arrPages) == 5)
		{
			smessage("red", "<br/>Click <i>SKIP THIS STEP</i>");
			//fn_click("a", "html", "Choose Basic", 10);
		}
		else if(curPage(arrPages) == 6)
		{
			smessage("red", "<br/> Click <a href='http://www.linkedin.com/profile/edit' style='color:black !important;'><u>here</u></a> to continue.");
			//fn_click("url", null, "http://www.linkedin.com/profile/public-profile-settings", 10);
		}
		else if(curPage(arrPages) == 7)
		{
			smessage("red", "<br/>You can add some details of your career on this page. Then, <br/>Click <a href='https://www.linkedin.com/profile/public-profile-settings?trk=prof-edit-edit-public_profile' style='color:black !important;'><u>here</u></a> to continue");
			
			setInterval(function()
			{
				var experience = document.getElementById("experience-blank-form").style.display;
				var education = document.getElementById("education-blank-form").style.display;
				var summary = document.getElementById("summary-item-edit").style.display;
				var interest = document.getElementById("interests-edit"). style.display;
				var personal = document.getElementById("personal-info-edit").style.display;
				
				if(experience == "block")
				{
					if(i == 0)
					{
						i++;
						
						
						vChange("id", "companyName-positionCompany-position-editPositionForm", "employer");
						vChange("id", "title-position-editPositionForm", "jobtitle");
						vChange("id", "month-startDate-position-editPositionForm", "jobstartmonth");
						vChange("id", "year-startDate-position-editPositionForm", "jobstartyear");
						vChange("id", "summary-position-editPositionForm", "jobdesc");
						
						if(localStorage['presently_employed'] == 'true')
						{
							$("#isCurrent-endDate-position-editPositionForm").click();
						}
						else 
						{
							vChange("id", "month-monthYear-endDate-position-editPositionForm", "jobendmonth");
							vChange("id", "year-monthYear-endDate-position-editPositionForm", "jobendyear");
						}
						
					}	
				}
				else
				{
					i = 0;
				}
				
				if(education == "block")
				{
					if(j == 0)
					{
						j++;
						
						//Job detail
						vChange("id", "schoolText-schoolchoice-editEducationForm", "college");
						vChange("id", "startYear-startEndYear-editEducationForm", "educationstartyear");
						vChange("id", "endYear-startEndYear-editEducationForm", "educationendyear");
						vChange("id", "schoolDegree-editEducationForm", "degree");
						vChange("id", "schoolFieldOfStudy-editEducationForm", "major");
						vChange("name", "employment_city", "city");
						vChange("name", "employment_country", "country");
						vChange("name", "employment_state", "state");
						
						if(localStorage['presently_employed'] == 'true')
						{
							$('#presently_employed').focus().click().blur();
						}
						else
						{
							vChange("name", "employment_end_month", "jobendmonth");
							vChange("name", "employment_end_year", "jobendyear");
						}
					}	
				}
				else
				{
					j = 0;
				}
				
				if(summary == "block")
				{
					if(k == 0)
					{
						k++;
						myvBio("id", "expertise_comments-editExpertiseForm", false);
					}	
				}
				else
				{
					k = 0;
					var elem = document.getElementById("summary-item-edit-clone");
					if(elem != null && sfirst)
					{
						sfirst = false;
						myvBio("id", "expertise_comments-editExpertiseForm", false);
					}
				}
				
				if(interest == "block")
				{
					if(it == 0)
					{
						it++;
						vChange("id", "interestsParam-editAdditionalInformationV2", "interests");
					}	
				}
				else
				{
					it = 0;
					var elem = document.getElementById("interests-edit-clone");
					if(elem != null && itfirst)
					{
						itfirst = false;
						vChange("id", "interestsParam-editAdditionalInformationV2", "interests");
					}
				}
				
				if(personal == "block")
				{
					if(p == 0)
					{
						p++;
						vChange("id", "month-birthdayParam-editAdditionalInformationV2", "birthmonth");
						vChange("id", "day-birthdayParam-editAdditionalInformationV2", "birthday");
						vChange("id", "birthYearParam-editAdditionalInformationV2", "birthyear");
					}	
				}
				else
				{
					p = 0;
					var elem = document.getElementById("personal-info-edit-clone");
					if(elem != null && pfirst)
					{
						pfirst = false;
						vChange("id", "month-birthdayParam-editAdditionalInformationV2", "birthmonth");
						vChange("id", "day-birthdayParam-editAdditionalInformationV2", "birthday");
						vChange("id", "birthYearParam-editAdditionalInformationV2", "birthyear");
					}
				}
				
				
			},500);
		
		
			/*if(vContent("not currently available"))
			{
				smessage("red", "[Step 10 of 17] <br/>The username is not available please choose another then click save.");
			}
			else if(vContent("Your custom URL has been saved."))
			{
				smessage("red", "[Step 11 of 17] <br/>Then click <a href='http://www.linkedin.com/profile/edit-additional-info?locale=en_US&goback=%2Enpe_*1_*1_*1_*1_*1_*1'>here</a> to continue.");
				fn_click("url", null, "http://www.linkedin.com/profile/edit-additional-info?locale=en_US&goback=%2Enpe_*1_*1_*1_*1_*1_*1", 10);
			}
			else
			{
				smessage("red", "[Step 10 of 17] <br/>Click CUSTOMIZE YOUR PUBLIC PROFILE URL directly below. Click SET CUSTOM URL.");
				setInterval('vChange("id", "vanity-name-input", "username");', 1000);
			}*/
		}
		else if(curPage(arrPages) == 16) //removed
		{
			smessage("red", "<br/>Click <i>SKIP THIS STEP</i>");
			//fn_click("a", "html", "Choose Basic", 10);
		}
		else if(curPage(arrPages) == 17)
		{
			smessage("green", "<br/>Click <span style='font-style:italic !important;'>SAVE</span> to confirm your public URL, and you may move onto the next tab. Don't forget to verify your email later.");
			$(".create-vanity-url").focus().click().blur();
			var fulname = localStorage['firstname']+localStorage['lastname'];
			fulname = fulname.replace(/\s/g, '');
			vCustom("id", "vanityName-vanityUrlForm", fulname);
			
			setInterval(function ()
			{
				var url = "http://www.linkedin.com/in/"+$("#vanityName-vanityUrlForm").val();
				var title = localStorage['firstname']+" "+localStorage['lastname']+" | LinkedIn";
				chrome.extension.sendRequest({method: "setLocalStorage", key: "linkedin_sLinkSet1", data: url});
				chrome.extension.sendRequest({method: "setLocalStorage", key: "linkedin_sTitleSet1", data: title});
			
			},500);
		}
		else if(curPage(arrPages) == 18)
		{
			smessage("red", "<br/>Click <i>SKIP THIS STEP</i>");
			//fn_click("a", "html", "Choose Basic", 10);
		}
	
	
  } catch(err) {
		
		
  }	
	
});