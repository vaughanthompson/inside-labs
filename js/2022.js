﻿$(document).ready(function(){
   /* $.localScroll({
            target: 'body',
            queue: false,
            hash: false,
            duration: 2000,
            stop: true,
            //offset: 5,
            easing: 'easeOutExpo'
    }); */

    //$('#inpageTabs').localScroll({
    //    offset: {top:-100}
    //});



    


    


    

    var tabOffset = -500;
    $('#fixedRight').hide();
    $('.logos').hide();
    $('.hero').show(); 

    var waypoint = new Waypoint({
        element: document.getElementById('intro'),
        handler: function (direction) {
            if (direction === 'down') {
                $('#fixedRight').fadeTo(1000,1.0);
                $('.hero').hide(); 
                $('#strip nav a.iconCTA').addClass('syncUpRight'); 
            }
            else {
                $('#fixedRight').fadeTo(500,0.0);
                $('.hero').show(); 
                $('#strip nav a.iconCTA').removeClass('syncUpRight'); 
            }
        },
        offset: tabOffset
    });   
    
    // reverse timeline
    var revOffsetOnOff = 350;
    var waypoint = new Waypoint({
        element: document.getElementById('revTriggerOn'),
        handler: function (direction) {
            if (direction === 'down') {
                $('div#fixedRight').find('div#nodeNav').addClass('revNav');
            }
            else {
                $('div#fixedRight').find('div#nodeNav').removeClass('revNav');
            }
        },
        offset: revOffsetOnOff
    });  
    var waypoint = new Waypoint({
        element: document.getElementById('revTriggerOff'),
        handler: function (direction) {
            if (direction === 'down') {
                $('div#fixedRight').find('div#nodeNav').removeClass('revNav');
            }
            else {
                $('div#fixedRight').find('div#nodeNav').addClass('revNav');
            }
        },
        offset: revOffsetOnOff
    });  

    
    



    /* logo changouts */
    var waypoint1 = new Waypoint({
        element: document.getElementById('s2'),
        handler: function (direction) {
            if (direction === 'down') {  
                //$('.logo1').fadeTo(500,1.0); 
                $('.logo1').show(); 
            }
            else {
                $('.logos').hide(); 
            }
        },
        group: 'logo-changer',
        continuous: false
    });
    /*
    var waypoint2a = new Waypoint({
        element: document.getElementById('s4'),
        handler: function (direction) {
            if (direction === 'down') {  
                $('.logos').hide(); 
                $('.logo1R').show(); 
            }
            else {
                //$('.logo1').fadeTo(500,1.0); 
                $('.logos').hide(); 
            }
        },
        group: 'logo-changer',
        continuous: false
    }); 
    var waypoint2b = new Waypoint({
        element: document.getElementById('s6'),
        handler: function (direction) {
            if (direction === 'down') {  
                $('.logos').hide(); 
                $('.logo2').show();  
            }
            else {
                //$('.logo1').fadeTo(500,1.0); 
                $('.logos').hide(); 
            }
        },
        group: 'logo-changer',
        continuous: false
    });   
    var waypoint3 = new Waypoint({
        element: document.getElementById('s8'),
        handler: function (direction) {
            if (direction === 'down') {  
                $('.logos').hide(); 
                $('.logo3').show(); 
            }
            else {
                //$('.logo2').fadeTo(500,1.0); 
                $('.logos').hide(); 
            }
        },
        group: 'logo-changer',
        continuous: false
    });   
    var waypoint3 = new Waypoint({
        element: document.getElementById('s9'),
        handler: function (direction) {
            if (direction === 'down') {  
                $('.logos').hide(); 
                $('.logo4').show(); 
            }
            else {
                //$('.logo2').fadeTo(500,1.0); 
                $('.logos').hide(); 
            }
        },
        group: 'logo-changer',
        continuous: false
    });   
    
    var waypoint5 = new Waypoint({
        element: document.getElementById('s10'),
        handler: function (direction) {
            if (direction === 'down') { 
                $('.logos').hide(); 
                $('.hero').show(); 
            }
            else {
                //$('.logo3').fadeTo(500,1.0); 
                $('.logos').hide(); 
            }
        },
        group: 'logo-changer',
        continuous: false
    }); 
    */
    



    // reset / set initial animations
    // 1979
    var inview = new Waypoint.Inview({
        element: $('#intro')[0],
        enter: function(direction) {
            $('.year').removeClass('animated fadeIn'); 
            $('.feat1').removeClass('animated fadeIn rollIn rotateInDownRight'); 
            $('.feat2').removeClass('animated fadeIn rollIn rotateInDownRight'); 
            $('.feat3').removeClass('animated fadeIn rollIn rotateInDownRight'); 
            $('.feat4').removeClass('animated fadeIn rollIn rotateInDownRight bounceIn'); 
            //$('a.nodeItem').find('.activeNode').addClass('inactive'); 
            //$('a.nodeItem').find('.label').removeClass('activeLabel');
        }
    });




    // 1979
    var inview = new Waypoint.Inview({
    element: $('#s1 > div')[0],
    enter: function(direction) {
            $('a.nodeItem').find('.activeNode').addClass('inactive'); 
            $('a.nodeItem').find('.label').removeClass('activeLabel');
            $('#n1').find('.activeNode').removeClass('inactive'); 
            $('a#n1').find('.label').addClass('activeLabel');
            //anims 
            /*          
            $('#s1').find('.year').addClass('animated fadeIn');
            $('#s1').find('.feat1').addClass('animated fadeIn');
            $('#s1').find('.feat2').addClass('animated rotateInDownRight');
            $('#s1').find('.feat3').addClass('animated fadeIn');
            $('#s1').find('.feat4').addClass('animated bounceIn');
            */
        },
        offset: 100
    });
    // 1981
    var inview = new Waypoint.Inview({
        element: $('#s2 > div')[0],
        enter: function(direction) {  
            $('a.nodeItem').find('.activeNode').addClass('inactive'); 
            $('a.nodeItem').find('.label').removeClass('activeLabel');
            $('#n2').find('.activeNode').removeClass('inactive'); 
            $('a#n2').find('.label').addClass('activeLabel');
            //anims  
            /*         
            $('#s2').find('.year').addClass('animated fadeIn');
            $('#s2').find('.feat1').addClass('animated fadeIn');
            $('#s2').find('.feat2').addClass('animated rollIn');
            */
        },
        offset: 100
    });
    // 1987
    var inview = new Waypoint.Inview({
        element: $('#s3 > div')[0],
        enter: function(direction) {  
            $('a.nodeItem').find('.activeNode').addClass('inactive'); 
            $('a.nodeItem').find('.label').removeClass('activeLabel');
            $('#n3').find('.activeNode').removeClass('inactive'); 
            $('a#n3').find('.label').addClass('activeLabel');
            //anims     
            /*      
            $('#s3').find('.year').addClass('animated fadeIn');
            $('#s3').find('.feat1').addClass('animated fadeIn');
            $('#s3').find('.feat2').addClass('animated rollIn');
            $('#s3').find('.feat3').addClass('animated fadeIn');
            */
        },
        offset: 100
    });
    // 1993
    var inview = new Waypoint.Inview({
        element: $('#s4 > div')[0],
        enter: function(direction) {  
            $('a.nodeItem').find('.activeNode').addClass('inactive'); 
            $('a.nodeItem').find('.label').removeClass('activeLabel');
            $('#n4').find('.activeNode').removeClass('inactive'); 
            $('a#n4').find('.label').addClass('activeLabel');
            //anims  
            /*        
            $('#s4').find('.year').addClass('animated fadeIn');
            $('#s4').find('.feat1').addClass('animated rollIn');
            $('#s4').find('.feat2').addClass('animated fadeIn');
            */
        },
        offset: 100
    });   
    // 1994 
    var inview = new Waypoint.Inview({
        element: $('#s5 > div')[0],
        enter: function(direction) {  
            $('a.nodeItem').find('.activeNode').addClass('inactive'); 
            $('a.nodeItem').find('.label').removeClass('activeLabel');
            $('#n5').find('.activeNode').removeClass('inactive'); 
            $('a#n5').find('.label').addClass('activeLabel');
            //anims           
            $('#s5').find('.year').addClass('animated fadeIn');
            $('#s5').find('.feat1').addClass('animated fadeIn');
            $('#s5').find('.feat2').addClass('animated fadeIn');
        },
        offset: 100
    });
    //1998
    /*var inview = new Waypoint.Inview({
        element: $('#s5b > div')[0],
        enter: function(direction) {  
            $('a.nodeItem').find('.activeNode').addClass('inactive'); 
            $('a.nodeItem').find('.label').removeClass('activeLabel');
            $('#n5b').find('.activeNode').removeClass('inactive'); 
            $('a#n5b').find('.label').addClass('activeLabel');
             //anims           
             $('#s5b').find('.year').addClass('animated fadeIn');
             $('#s5b').find('.feat1').addClass('animated rollIn');
             $('#s5b').find('.feat2').addClass('animated fadeIn');
            
        },
        offset: 100
    });*/
    // 2006
    var inview = new Waypoint.Inview({
        element: $('#s6 > div')[0],
        enter: function(direction) {  
            $('a.nodeItem').find('.activeNode').addClass('inactive'); 
            $('a.nodeItem').find('.label').removeClass('activeLabel');
            $('#n6').find('.activeNode').removeClass('inactive'); 
            $('a#n6').find('.label').addClass('activeLabel');
            //anims           
            $('#s6').find('.year').addClass('animated fadeIn');
            $('#s6').find('.feat1').addClass('animated rotateInDownRight');
            $('#s6').find('.feat2').addClass('animated fadeIn');
            $('#s6').find('.feat3').addClass('animated fadeIn');
        },
        offset: 100
    });
    //2008
    var inview = new Waypoint.Inview({
        element: $('#s7 > div')[0],
        enter: function(direction) {  
            $('a.nodeItem').find('.activeNode').addClass('inactive'); 
            $('a.nodeItem').find('.label').removeClass('activeLabel');
            $('#n7').find('.activeNode').removeClass('inactive'); 
            $('a#n7').find('.label').addClass('activeLabel');
            //anims           
            $('#s7').find('.year').addClass('animated fadeIn');
            $('#s7').find('.feat1').addClass('animated fadeIn');
            $('#s7').find('.feat2').addClass('animated rollIn');
        },
        offset: 100
    });
    // 2010
    var inview = new Waypoint.Inview({
        element: $('#s8 > div')[0],
        enter: function(direction) {  
            $('a.nodeItem').find('.activeNode').addClass('inactive'); 
            $('a.nodeItem').find('.label').removeClass('activeLabel');
            $('#n8').find('.activeNode').removeClass('inactive'); 
            $('a#n8').find('.label').addClass('activeLabel');
            //anims           
            $('#s8').find('.year').addClass('animated fadeIn');
            $('#s8').find('.feat1').addClass('animated rotateInDownRight');
            $('#s8').find('.feat2').addClass('animated fadeIn');
        },
        offset: 100
    });
    // 2011
    var inview = new Waypoint.Inview({
        element: $('#s9 > div')[0],
        enter: function(direction) {  
            $('a.nodeItem').find('.activeNode').addClass('inactive'); 
            $('a.nodeItem').find('.label').removeClass('activeLabel');
            $('#n9').find('.activeNode').removeClass('inactive'); 
            $('a#n9').find('.label').addClass('activeLabel');
            //anims           
            $('#s9').find('.year').addClass('animated fadeIn');
            $('#s9').find('.feat1').addClass('animated fadeIn');
            $('#s9').find('.feat2').addClass('animated fadeIn');
            $('#s9').find('.feat3').addClass('animated rollIn');
        },
        offset: 100
    });
    var inview = new Waypoint.Inview({
        element: $('#s10 > div')[0],
        enter: function(direction) {  
            $('a.nodeItem').find('.activeNode').addClass('inactive'); 
            $('a.nodeItem').find('.label').removeClass('activeLabel');
            $('#n10').find('.activeNode').removeClass('inactive'); 
            $('a#n10').find('.label').addClass('activeLabel');
            //anims           
            $('#s10').find('.year').addClass('animated fadeIn');
            $('#s10').find('.feat1').addClass('animated fadeIn');
            $('#s10').find('.feat2').addClass('animated fadeIn');
            $('#s10').find('.feat3').addClass('animated rollIn');
        },
        offset: 100
    });
    var inview = new Waypoint.Inview({
        element: $('#s11 > div')[0],
        enter: function(direction) {  
            $('a.nodeItem').find('.activeNode').addClass('inactive'); 
            $('a.nodeItem').find('.label').removeClass('activeLabel');
            $('#n11').find('.activeNode').removeClass('inactive'); 
            $('a#n11').find('.label').addClass('activeLabel');
            //anims           
            $('#s11').find('.year').addClass('animated fadeIn');
            $('#s11').find('.feat2').addClass('animated fadeIn');
            $('#s11').find('.feat3').addClass('animated fadeIn');            
        },
        offset: 100
    });
    var inview = new Waypoint.Inview({
        element: $('#s12 > div')[0],
        enter: function(direction) {  
            $('a.nodeItem').find('.activeNode').addClass('inactive'); 
            $('a.nodeItem').find('.label').removeClass('activeLabel');
            $('#n12').find('.activeNode').removeClass('inactive'); 
            $('a#n12').find('.label').addClass('activeLabel');
        },
        offset: 100
    });
    var inview = new Waypoint.Inview({
        element: $('#s13 > div')[0],
        enter: function(direction) {  
            $('a.nodeItem').find('.activeNode').addClass('inactive'); 
            $('a.nodeItem').find('.label').removeClass('activeLabel');
            $('#n13').find('.activeNode').removeClass('inactive'); 
            $('a#n13').find('.label').addClass('activeLabel');
        },
        offset: 100
    });




 

        

/*
      
    var tabOffset = 0;

    function resetAll() {
        $('div#fixedRight').find('.activeNode').addClass('inactive');
        $('div#fixedRight').find('.label').removeClass('activeLabel');
    };

    var waypoint1 = new Waypoint({
        element: document.getElementById('slide79'),
        handler: function (direction) {
            if (direction === 'down') {  
                resetAll();
                $('a#n1').find('.activeNode').removeClass('inactive');
                $('a#n1').find('.label').addClass('activeLabel')
            }
            else {
                $('a#n1').find('.activeNode').addClass('inactive');
                $('a#n1').find('.label').removeClass('activeLabel');                    
            }
        },
        offset: tabOffset
    });
       
    var waypoint2 = new Waypoint({
        element: document.getElementById('slide81'),
        handler: function (direction) {
            if (direction === 'down') {  
                resetAll();
                $('a#n2').find('.activeNode').removeClass('inactive');
                $('a#n2').find('.label').addClass('activeLabel')
            }
            else {
                $('a#n2').find('.activeNode').addClass('inactive');
                $('a#n2').find('.label').removeClass('activeLabel');                    
            }
        },
        offset: tabOffset
    });
*/


}); 