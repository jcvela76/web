
angular.module('MyApp', [])

.controller('MyController', function ($document, $window, $interval, $timeout) {
  console.log('starting');
  var self = this;
  self.winWidth = 0;
  self.winHeight = 0;
  self.videoWidth = 1920;
  self.videoHeight = 1080;
  self.scrollPos = 0;
  //self.skill_i = [" Developer;", "Email marketing;", "Web Troubleshooting;", "Web Consulting;"];
  self.skill_i = [" test;", "2;", "2;", "3;"];
  self.skill = "";
  self.promt = "_";
  self.control_promt = 1;
  self.control_scroll = false;

  center_background();
  skills_presentation(self.skill_i[0], true);
  $timeout(function() {
      skills_presentation(self.skill_i[1], true);
  },self.skill_i[0].length * 500 + 2000);

  $timeout(function() {
      skills_presentation(self.skill_i[2],true);
  },self.skill_i[0].length * 500 + self.skill_i[1].length * 500 + 4000);

  $timeout(function() {
      skills_presentation(self.skill_i[3], false);
  },self.skill_i[0].length * 500 + self.skill_i[1].length * 500 + self.skill_i[2].length * 500 + 6000);


  $timeout(function() {
      
      angular.element(scroll_sign).css( "display", "block");
      self.control_scroll = true;

  },self.skill_i[0].length * 500 + self.skill_i[1].length * 500 + self.skill_i[2].length * 500 + self.skill_i[3].length * 500 + 3000);



  $interval(function() {
    self.control_promt = self.control_promt * -1;
    if (self.control_promt > 0){
        angular.element(promt_).css( "opacity", 1);
    }
    else{
        angular.element(promt_).css( "opacity", 0);
    }
  }, 500);//blink promt


  function skills_presentation (skill,pass) {
    self.countdown = skill.length;

    $interval(function() {
      self.countdown--;
      self.skill = skill.substring(0,skill.length-self.countdown);
    }, 250, self.countdown);
    if(pass)
    {$timeout(function() {
            self.countdown = skill.length;
            $interval(function() {
            self.countdown--;
            self.skill = skill.substring(0,self.countdown);
            }, 150, self.countdown);
    
        }, self.countdown * 250 + 1000);}
  }

  
// Part to scroll
  angular.element($window).bind('wheel', function(){

    //console.log("scrolling");
      if(self.control_scroll)
      {
        var video = angular.element(vid);
        video[0].pause();      
        angular.element(vid).css( "opacity", 0.4);      
        angular.element(scroll_sign).css( "display", "none");
      }
 
  });//scroll


  //angular.element('#layer-background').addClass('hide');
  //$document.find(layer).css( "display", "none" );
  //angular.element(layer).css( "display", "none" );

  //console.log('test'+document.querySelectorAll("#video-background")[0].clientWidth)
  console.log(angular.element(document).find("#layer-background"));
  console.log($document.find("#layer-background"));

  angular.element($window).bind('resize', function(){

    center_background();
    
  });//resize

  





  function center_background () {
    self.winWidth = $window.innerWidth;
    self.winHeight = $window.innerHeight;

    var marRight = -(self.videoWidth - self.winWidth)/2;
    var marTop = -(self.videoHeight - self.winHeight)/2;

    angular.element(layer).css( "margin-left", marRight+"px");
    angular.element(layer).css( "margin-top", marTop+"px");
    angular.element(layer_intro).css( "margin-left", marRight+"px");
    angular.element(layer_intro).css( "margin-top", marTop+"px");
  }//center_background

});

