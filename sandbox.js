
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
  self.skill_i = [" test;", "2;", "2;", "Web Consulting;"];
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


        angular.element(menu1).css( "display", "inline-block");
        angular.element(menu2).css( "display", "inline-block");
        angular.element(menu3).css( "display", "inline-block");
        angular.element(menu4).css( "display", "inline-block");   
        angular.element(layer_intro).css( "padding-top", "280px");   
        self.control_scroll = false;   
      }
 
  });//scroll

  self.isActive = false;
  self.isActive_menu_1 = false;
  self.isActive_menu_2 = false;
  self.isActive_menu_3 = false;
  self.isActive_menu_4 = false;

  self.open_menu_1 = function(e) {
    if (!self.isActive){
      self.isActive = !self.isActive;
      self.isActive_menu_1 = true;
      $document.find("body").css('overflow-y', 'auto');
    }
    
  };

  self.open_menu_2 = function(e) {
  if (!self.isActive){
      self.isActive = !self.isActive;
      self.isActive_menu_2 = true;
      $document.find("body").css('overflow-y', 'auto');
      angular.element(menu1).css( "display", "none");
    }
    
  };


  self.close_menu = function(e) {
    if (self.isActive){
      self.isActive = !self.isActive;
      self.isActive_menu_1 = false;
      self.isActive_menu_2 = false;
      angular.element(menu1).css( "display", "inline-block");
      angular.element(menu2).css( "display", "inline-block");
      angular.element(menu3).css( "display", "inline-block");
      angular.element(menu4).css( "display", "inline-block"); 
      $document.find("body").css('overflow-y', 'hidden');
    }
    
  };

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

