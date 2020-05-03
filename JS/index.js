
    $(".UXprojects figure").hover(function(){
      $( this).css("background-color","#386C81");
      $( this).css("border","0");
      $("figcaption",this).css("color","white");
      $("#ux1").click(function(){
        $(this).wrap(
          $("<a>").attr("href", "Quail.html")
        );
        $("<a>").css("text-decoration"," none");
      });

      $("#ux2").click(function(){
        $(this).wrap(
          $("<a>").attr("href", "Mojo.html")
        );
      });

      $("#ux3").click(function(){
        $(this).wrap(
          $("<a>").attr("href","Epa.html")
        );
      });
    });
    $(".UXprojects figure").on("mouseleave", function(){
      $( this).css("background-color"," white");
      $( this).css("border","1px solid #919293");
      $("figcaption", this).css("color","#386C81");
    });


    $(".GDprojects figure").hover(function(){
      $( this).css("background-color","#386C81");
      $( this).css("border","0");
      $("figcaption",this).css("color","white");
      $(".active", this).css("opacity","0");
      $(".notActive", this).css("opacity","1");
    });
    $(".GDprojects figure").on("mouseleave", function(){
      $( this).css("background-color"," white");
      $( this).css("border","1px solid #919293");
      $("figcaption", this).css("color","#AC774C");
      $(".active", this).css("opacity","1");
      $(".notActive", this).css("opacity","0");
    });


    $(".Mprojects figure").hover(function(){
      $( this).css("background-color","#386C81");
      $( this).css("border","0");
      $("figcaption",this).css("color","white");
    });
    $(".Mprojects figure").on("mouseleave", function(){
      $( this).css("background-color"," white");
      $( this).css("border","1px solid #919293");
      $("figcaption", this).css("color","#386C81");
    });


   