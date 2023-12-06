 
      $(document).ready(function () {
        var stopAutohide;
        
        function showWindow(){
        $('#main').show(screenLeft);
		// stop scroll
		$('html body').css('overflow-y','scroll');
		// auto hide fter 5s
		 
        //showWindow()
        }
        function hideWindow() {
          $("#main").hide();
          // on scroll
          $("html body").css("overflow-x", "hidden");
        }
        //hideWindow()

        // now call function automatically after some time

        // auto open after 2s
        setTimeout(showWindow, 30000);

        // close after click

        $("#close-btn").click(function () {
          hideWindow();
          celarTimeout(stopAutohide);
        });
      });
    