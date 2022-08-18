// Write your JavaScript code.

mapboxgl.accessToken = 'pk.eyJ1IjoidmF1Z2hhbnRob21wc29uIiwiYSI6ImNpbHNtaG5iMTAwMWd1c2tzNW51bzZtMWkifQ.zc3CupdubTgYUxdPJgexKg';
        
          $(document).ready(function(){
                // theme switcher
                var themeOverride = 'no'
                var d = new Date();
                
                var dy = d.getYear();
                var dm = d.getMonth();
                var dd = d.getDate();
                var gt = d.getTime();
                    
                var dDayStart = new Date(d.getFullYear(),d.getMonth(),d.getDate(),07,00,0,0);
                var dDayEnd = new Date(d.getFullYear(),d.getMonth(),d.getDate(),17,30,0,0);
                
                if (d.getTime() >= dDayStart.getTime() && d.getTime() < dDayEnd.getTime() && themeOverride == 'no')
                {
                    //day
                    $('body').addClass('dayTheme');
                    //document.documentElement.style.setProperty('--testNight', '#1a1a1a');
                    //document.documentElement.style.setProperty('--colorGradient', '255,255,255');
                    var map = new mapboxgl.Map({
                                container: 'map',
                                style: 'mapbox://styles/vaughanthompson/cjh2jzpau1kd32rn0liaw1cxn',
                                center: [9.233464, 46.845305],
                                pitch: 60,
                                bearing: -23,
                                zoom: 13.15
                    });   
                } else {
                    //night
                    $('body').addClass('nightTheme');
                    //document.documentElement.style.setProperty('--testNight', '#ffffff');
                    //document.documentElement.style.setProperty('--colorGradient', '26,26,26');
                    var map = new mapboxgl.Map({
                                container: 'map',
                                style: 'mapbox://styles/vaughanthompson/cjiup2xa70rfp2rqroaxba1vm',
                                center: [9.233464, 46.845305],
                                pitch: 60,
                                bearing: -23,
                                zoom: 13.15
                    });  
                }
});
