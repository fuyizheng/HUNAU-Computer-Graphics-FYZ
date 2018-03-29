  //取滑动条颜色
  function hexFromRGB(r, g, b) {
    var hex = [
      r.toString( 16 ),
      g.toString( 16 ),
      b.toString( 16 )
    ];
    $.each( hex, function( nr, val ) {
      if ( val.length === 1 ) {
        hex[ nr ] = "0" + val;
      }
    });
    return hex.join( "" ).toUpperCase();
  }
  //改变滑动条颜色
  function refreshSwatch() {
    var red = $( "#red" ).slider( "value" ),
      green = $( "#green" ).slider( "value" ),
      blue = $( "#blue" ).slider( "value" ),
      hex = hexFromRGB( red, green, blue );
      redLight = red;
    $( "#swatch" ).css( "background-color", "#" + hex );
  }
  //光照颜色区
  $(function() {
    $( "#red, #green, #blue" ).slider({
      orientation: "horizontal",
      range: "min",
      max: 255,
      value: 127,
      slide: refreshSwatch,
      change: refreshSwatch
    });
    $( "#red" ).slider( "value", 140 );
    $( "#green" ).slider( "value", 140 );
    $( "#blue" ).slider( "value", 140 );
  });

 function hexFromRGB2(r, g, b) {
    var hex = [
      r.toString( 16 ),
      g.toString( 16 ),
      b.toString( 16 )
    ];
    $.each( hex, function( nr, val ) {
      if ( val.length === 1 ) {
        hex[ nr ] = "0" + val;
      }
    });
    return hex.join( "" ).toUpperCase();
  }
  function refreshSwatch2() {
    var red = $( "#red2" ).slider( "value" ),
      green = $( "#green2" ).slider( "value" ),
      blue = $( "#blue2" ).slider( "value" ),
      hex = hexFromRGB2( red, green, blue );
      redLight = red;
    $( "#swatch2" ).css( "background-color", "#" + hex );
  }
  //光照颜色区
  $(function() {
    $( "#red2, #green2, #blue2" ).slider({
      orientation: "horizontal",
      range: "min",
      max: 255,
      value: 127,
      slide: refreshSwatch2,
      change: refreshSwatch2
    });
    $( "#red2" ).slider( "value", 140 );
    $( "#green2" ).slider( "value", 140 );
    $( "#blue2" ).slider( "value", 140 );
  });

  //调整视角区 F
  $(function() {
    $( "#sliderRotxF,#sliderRotyF,#sliderRotzF" ).slider({
    orientation: "horizontal",
      range: "min",
      max:200,
      min:-200,
      value:0,
       slider:rotF,
       change: rotF,
    });
  });
  //调整视角区 Y
  $(function() {
    $( "#sliderRotxY,#sliderRotyY,#sliderRotzY" ).slider({
    orientation: "horizontal",
      range: "min",
      max:200,
      min:-200,
      value:0,
       slider:rotY,
       change: rotY,
    });
  });
  //调整视角区 Z
  $(function() {
    $( "#sliderRotxZ,#sliderRotyZ,#sliderRotzZ" ).slider({
    orientation: "horizontal",
      range: "min",
      max:200,
      min:-200,    
      value:0,
       slider:rotZ,
       change: rotZ,
    });
  });
  //调整视角区 整体
  $(function() {
    $( "#sliderRotx,#sliderRoty,#sliderRotz" ).slider({
    orientation: "horizontal",
      range: "min",
      max:200,
      min:-200,
      value:0,
       slider:rotA,
       change: rotA,
    });
  });
  //调整自转速率区 F
  $(function() {
    $( "#sliderSpeedxF,#sliderSpeedyF,#sliderSpeedzF" ).slider({
    orientation: "horizontal",
      range: "min",
      max:800,
      min:-800,
      value:0,
      slider:rotFf,
      change: rotFf,

    });
    $( "#sliderSpeedyF" ).slider( "value", 20 );
    
  });
  //调整自转速率区 Y
  $(function() {
    $( "#sliderSpeedxY,#sliderSpeedyY,#sliderSpeedzY" ).slider({
    orientation: "horizontal",
      range: "min",
      max:800,
      min:-800,
      value:0,
      slider:rotYf,
      change: rotYf,
    });
    $( "#sliderSpeedxY" ).slider( "value", 20 );
  });
  //调整自转速率区 Z
  $(function() {
    $( "#sliderSpeedxZ,#sliderSpeedyZ,#sliderSpeedzZ" ).slider({
    orientation: "horizontal",
      range: "min",
      max:800,
      min:-800,
      value:0,
      slider:rotZf,
      change: rotZf,
    });
    $( "#sliderSpeedyZ" ).slider( "value", 20 );
  });
  //自转速率区  整体
  $(function() {
    $( "#sliderSpeedx,#sliderSpeedy,#sliderSpeedz" ).slider({
    orientation: "horizontal",
      range: "min",
      max:800,
      min:-800,
      value:0,
      slider:rotAf,
      change: rotAf,
    });
  });
  //调整放大缩小区 全部
  $(function() {
    $( "#sliderZoom" ).slider({
    orientation: "horizontal",
      range: "min",
      max:10,
      min:-100,
      value:0,
    });
  });
  //调整放大缩小区 单独
  $(function() {
    $( "#sliderZoomF,#sliderZoomY,#sliderZoomZ" ).slider({
    orientation: "horizontal",
      range: "min",
      max:10,
      min:-100,
      value:-7,	
    });
  });
  //移动区 整体
$(function() {
    $( "#sliderMovex,#sliderMovey" ).slider({
    orientation: "horizontal",
      range: "min",
      max:10,
      min:-10,
      value:0,
      slider:move,
      change: move,
    });
  });
  //移动区 FYZ
  $(function() {
    $( "#sliderMovexF,#sliderMoveyF,#sliderMovexY,#sliderMoveyY,#sliderMovexZ,#sliderMoveyZ" ).slider({
    orientation: "horizontal",
      range: "min",
      max:10,
      min:-10,
      value:0,
      slider:move,
      change: move,
    });
    $( "#sliderMovexF" ).slider( "value", -2 );
    $( "#sliderMovexY" ).slider( "value", 0 );
    $( "#sliderMovexZ" ).slider( "value", 2 );
  });
//光照方向区
  $(function() {
    $( "#lightDirectionX,#lightDirectionY,#lightDirectionZ" ).slider({
    orientation: "horizontal",
      range: "min",
      max:100,
      min:-100,
      value:0,
    });
    $( "#lightDirectionZ" ).slider( "value", -100 );
  });

  function rotF(){
        boolRotF = 1;
        boolRotA = 2;
  }
  function rotFf(){
        boolRotF = 0;
        boolRotA = 2;
  }
  function rotY(){
        boolRotY = 1;
        boolRotA = 2;
  }
  function rotYf(){
        boolRotY = 0;
        boolRotA = 2;
  }
  function rotZ(){
        boolRotZ = 1;
        boolRotA = 2;
  }
  function rotZf(){
        boolRotZ = 0;
        boolRotA = 2;
  }
  function rotA(){
        boolRotA = 1;
  }
  function rotAf(){
        boolRotA = 0;
        boolRotF = 0;
        boolRotY = 0;
        boolRotZ = 0;
  }

 
  function move(){
        boolMove = 1;
  }
  function movea(){
        boolMove = 2;
  }

  $(document).ready(function(){
   

$("#selectMoveA1").click(function(){
    // alert(1);
    boolMove = 0;
    boolMoveA = 0;
    
});
              
$("#selectMoveA2").click(function(){
    // alert(1);
    boolMove = 0;
    boolMoveA = 2;

});
$("#selectMoveA3").click(function(){
    // alert(1);
    boolMove = 0;
    boolMoveA = 3;
    
});
$("#selectMoveF1").click(function(){
    // alert(1);
    boolMove = 0;
    boolMoveA = 0;
    boolMoveF = 1;
   // tick();
});
$("#selectMoveF2").click(function(){
    boolMove = 0;
    boolMoveA = 0;
    boolMoveF = 2;
   // tick();
});
$("#selectMoveF3").click(function(){
    boolMove = 0;
    boolMoveA = 0;
    boolMoveF = 3;
   // tick();
});
$("#selectMoveY1").click(function(){
    boolMove = 0;
    boolMoveA = 0;
    boolMoveY = 1;
   // tick();
});
$("#selectMoveY2").click(function(){
  Y2=YyMove;
    boolMove = 0;
    boolMoveA = 0;
    boolMoveY = 2;
    // Yspeed2=0,ty2=0;
   // tick();
});
$("#selectMoveY3").click(function(){
  Y3=YyMove;
    boolMove = 0;
    boolMoveA = 0;
    boolMoveY = 3;
    // Yspeed3=0,ty3=0;
   // tick();
});
$("#selectMoveZ1").click(function(){
    boolMove = 0;
    boolMoveA = 0;
    boolMoveZ = 1;
   // tick();
});
$("#selectMoveZ2").click(function(){
    boolMove = 0;
    boolMoveA = 0;
    boolMoveZ = 2;
   // tick();
});
$("#selectMoveZ3").click(function(){
    boolMove = 0;
    boolMoveA = 0;
    boolMoveZ = 3;
});
$("#selectTexF1").click(function(){
    booltextureF = 1;
});
$("#selectTexF2").click(function(){
    booltextureF = 2;
});
$("#selectTexF3").click(function(){
    booltextureF = 3;
});
$("#selectTexY1").click(function(){
    booltextureY = 1;
});
$("#selectTexY2").click(function(){
    booltextureY = 2;
});
$("#selectTexY3").click(function(){
    booltextureY = 3;
});
$("#selectTexZ1").click(function(){
    booltextureZ = 1;
});
$("#selectTexZ2").click(function(){
    booltextureZ = 2;
});
$("#selectTexZ3").click(function(){
    booltextureZ = 3;
});

$("#defaultRot").click(function(){
    $( "#sliderRotxF" ).slider( "value", 0 );
    $( "#sliderRotyF" ).slider( "value", 0 );
    $( "#sliderRotzF" ).slider( "value", 0 );
    $( "#sliderRotxY" ).slider( "value", 0 );
    $( "#sliderRotyY" ).slider( "value", 0 );
    $( "#sliderRotzY" ).slider( "value", 0 );
    $( "#sliderRotxZ" ).slider( "value", 0 );
    $( "#sliderRotyZ" ).slider( "value", 0 );
    $( "#sliderRotzZ" ).slider( "value", 0 );
    $( "#sliderRotx" ).slider( "value", 0 );
    $( "#sliderRoty" ).slider( "value", 0 );
    $( "#sliderRotz" ).slider( "value", 0 );
   
});
$("#defaultSpeed").click(function(){
    $( "#sliderSpeedxF" ).slider( "value", 0 );
    $( "#sliderSpeedyF" ).slider( "value", 0 );
    $( "#sliderSpeedzF" ).slider( "value", 0 );
    $( "#sliderSpeedxY" ).slider( "value", 0 );
    $( "#sliderSpeedyY" ).slider( "value", 0 );
    $( "#sliderSpeedzY" ).slider( "value", 0 );
    $( "#sliderSpeedxZ" ).slider( "value", 0 );
    $( "#sliderSpeedyZ" ).slider( "value", 0 );
    $( "#sliderSpeedzZ" ).slider( "value", 0 );
    $( "#sliderSpeedx" ).slider( "value", 0 );
    $( "#sliderSpeedy" ).slider( "value", 0 );
    $( "#sliderSpeedz" ).slider( "value", 0 );

});
$("#defaultZoom").click(function(){
    $( "#sliderZoomF" ).slider( "value", -7 );
    $( "#sliderZoomY" ).slider( "value", -7 );
    $( "#sliderZoomZ" ).slider( "value", -7 );
    $( "#sliderZoom" ).slider( "value", 0 );
});
$("#defaultMove").click(function(){
    $( "#sliderMovex" ).slider( "value", 0 );
    $( "#sliderMovey" ).slider( "value", 0 );
    $( "#sliderMovexF" ).slider( "value", -2 );
    $( "#sliderMoveyF" ).slider( "value", 0 );
    $( "#sliderMovexY" ).slider( "value", 0 );
    $( "#sliderMoveyY" ).slider( "value", 0 );
    $( "#sliderMovexZ" ).slider( "value", 2 );
    $( "#sliderMoveyZ" ).slider( "value", 0 );
});
$("#defalutLightColor").click(function(){
    $( "#red" ).slider( "value", 140 );
    $( "#green" ).slider( "value", 140 );
    $( "#blue" ).slider( "value", 140 );
});
$("#defalutlightDirection").click(function(){
  $( "#lightDirectionX" ).slider( "value", 0 );
  $( "#lightDirectionY" ).slider( "value", 0 );
    $( "#lightDirectionZ" ).slider( "value", -100 );
});
$("#defalutEnviColor").click(function(){
    $( "#red2" ).slider( "value", 140 );
    $( "#green2" ).slider( "value", 140 );
    $( "#blue2" ).slider( "value", 140 );
});
$("#defalutMove").click(function(){
  boolMove = 0;
  boolMoveA =0;
    boolMoveF = 1;
    boolMoveY = 1;
    boolMoveZ = 1;
    h=0,A2=1.57,A3=0,Yspeed3=0,boolY3=1,ty3=0,Yspeed2=0,ty2=0;
});
});

   


    
