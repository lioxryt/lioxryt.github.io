langs = {};

lang = "en-US";

lang_elements = [

	"title",

	"goomy_counter_pre",
	"goomy_counter_post",
	"gps_counter_pre",
	"gps_counter_post",
	"level_counter",

	"stats_header",
	"stats_play_time",
	"stats_goomies",
	"stats_total_goomies",
	"stats_total_total_goomies",
	"stats_exp",
	"stats_exp_to_next_level_pre",
	"stats_exp_to_next_level_post",

	"cursor_counter",
	"cursor_counter_short",

	"youngster_counter",
	"youngster_counter_short",

	"tooltip_gps_pre",
	"tooltip_gps_post",

];

change_language = function(new_lang){

	lang = new_lang;

	update_language();

	for(var a = 0; a < lang_elements.length; ++a){
		$(".lang_" + lang_elements[a]).html(langs[lang][lang_elements[a]]);
	}

}
