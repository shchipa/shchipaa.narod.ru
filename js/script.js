jQuery(document).ready(function ($) {
    // $(".kb > span").hover(
    //     function () {
    //     	//alert($(this).parents().attr("id"));    //.css({"border":"1px solid red"});
    //     	//$(this).css({"border":"1px solid red"});
    //         var id = $(this).parents().attr("id");
    //         $(".list").filter(function () {
		// 		if($(this).attr("id") == id){
		// 			return true;
		// 		}
    //         }).slideDown(1000);	//.css({"display":"block"});
    //     },
    //     function () {
    //         $(".list").mouseleave(
    //         	function () {
		// 			$(this).slideUp(1000);	//$(this).css({"display":"none"});
    //             }
		// 	);
    //     });

	var kb = $(".kb > span");


//slideUp/Down left menu kb
    kb.click(function () {
        var id = $(this).parent(".kb").attr("id");
		var slide = $("div.list").filter(function () {
			if($(this).attr("id") == id){
				return true;
			}
		}); //.css({"display":"block"});

		if (slide.css("display") == "none"){
			slide.slideDown(1000);
		}
		else {
            slide.slideUp(1000);
		}

        $("div.list").not(slide).slideUp(1000);
	});
/*
//display logo kb when hover
    kb.mouseenter(function () {
        var id = $(this).parent(".kb").attr("id");
        //$(this).parents("div").css({"border":"1px solid red"});
        $(this).parents("div").after('<div class="logo logo_'+ id +'"><img src="pic/small_'+ id +'.gif" alt="'+ id +'" class="logo logo_'+ id +'"/></div>');
		// $(this).after('<div class="logo logo_'+ id +'"><img src="pic/small_'+ id +'.gif" alt="'+ id +'" class="logo logo_'+ id +'"/></div>');
    });

    kb.mouseleave(function () {
        var id = $(this).parent(".kb").attr("id");
        $("div.logo_"+id).detach();
    });
*/

	var content = $("div#content");
	var header = $("div#header");

	$("div.list > h4").click(function () {
		var id_list = $(this).attr("id");
        content.load("txt/" + id_list + ".txt").slideUp(1).slideDown(3000);

        var class_list = $(this).attr("class");
        header.html('<img src="pic/' + class_list + '.gif" alt="' + class_list + '"/>').slideUp(1).slideDown(1000);
    });


    //css({"border":"1px solid red"});
})