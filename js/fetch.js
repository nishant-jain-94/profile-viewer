$(".candidates-container").slimScroll({
  height: "95%",
  wheelStep: 5
});
$.ajax({
        url:'../cadetInfoForm.json',
        dataType:'json',
        success: function(data) {
          arrCandidates = data;
          data.forEach(function(datum) {
            var name = datum["Name"];
            var emailId = datum["E-mail ID"];
            $("#candidates").append('<li><a class="candidate" data-email="' + emailId +'" href="#">'+ name +'</a></li>');
          });

          $(".candidate").click(function(e) {
              var candidate = $(this);
              var emailId = candidate.data("email");
              arrCandidates.forEach(function(datum){
                console.log(datum.emailId);
                if(datum["E-mail ID"] == emailId){
                  if(!$("#profile-section").hasClass('position-zero')){
                    $("#profile-section").addClass('position-zero');
                    $(".profile-detail-wrapper").toggleClass("profile-detail-wrapper-animate");
                  }
                  else {
                    $(".profile-detail-wrapper").toggleClass("profile-detail-wrapper-anti-animate");
                    $(".profile-detail-wrapper").toggleClass("profile-detail-wrapper-animate");
                    setTimeout(function(){
                      $(".profile-detail-wrapper").toggleClass("profile-detail-wrapper-anti-animate");
                      $(".profile-detail-wrapper").toggleClass("profile-detail-wrapper-animate");
                    },1000);
                  }
                  $("#name").text(datum["Name"]);
                  $("#dateOfBirth").text(datum["Date Of Birth"]);
                  $("#educationalQualification").text(datum["Educational Qualification"]);
                  $("#gitHubProfile").attr("href", datum["GitHub Profile"]);
                  $("#projectWorkedOn").text(datum["Project Worked On"]);
                  $("#projectWorkedOn").attr("href", datum["Project Link"]);
                  $("#emailId").attr("href",'mailto:'+datum["E-mail ID"]);
                  $("#organization").text(datum["Organization"]);
                  $("#linkedInUrl").attr('href',datum["Linked In URL"]);
                  $("#photoPath").attr('src',"images/" + datum["Photo"]);
                  $("#waveId").text("Wave " + datum["Wave ID"]);
                }
              });

            });
      }
  });
