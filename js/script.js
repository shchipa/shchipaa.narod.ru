jQuery(document).ready(function ($) {

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
