// ABCDEF library for Javascript
// © 2014 Joe Zeng.
// This code is released under the MIT License.

savetextstring = "0123456789.-,|e`";
hexstring = "0123456789abcdef";

savetextmap = {
	"0": "0000",
	"1": "0001",
	"2": "0010",
	"3": "0011",
	"4": "0100",
	"5": "0101",
	"6": "0110",
	"7": "0111",
	"8": "1000",
	"9": "1001",
	".": "1010", // decimal
	"-": "1011", // negative
	",": "1100", // level 2 separator
	"|": "1101", // level 1 separator
	"e": "1110", // exponent
	"`": "1111", // symbol escape
	"a": "1010",
	"b": "1011",
	"c": "1100",
	"d": "1101",
	"f": "1111"
};

base64string = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";

function repr_sstr(n){

	if(n == Infinity){ return "e"; }
	if(n == -Infinity){ return "-e"; }
	if(isNaN(n)){ return "-"; }

	return ("" + n).replace("+", "");

}

function sstr_to_bin(sstr){
	var bin = "";
	for(var a = 0; a < sstr.length; ++a){
		if(sstr[a] == "+") continue; // ignore plus signs completely
		if(savetextstring.indexOf(sstr[a]) == -1 && hexstring.indexOf(sstr[a]) == -1){
			throw "Conversion error";
		}
		bin += savetextmap[sstr[a]];
	}
	return bin;
}

function bin_to_b64(bin){

	if(bin.length % 2 != 0){
		throw "Conversion error";
	}

	var b64 = "";
	var padding = "";

	while(bin.length % 6 != 0){
		bin += "00";
		padding += base64string[64];
	}

	var strlength = 0;
	for(; strlength < bin.length; strlength += 6){
		b64 += base64string[parseInt(bin.substr(strlength, 6), 2)];
	}

	return b64 + padding;
}


function b64_to_bin(b64){
	var bin = "";
	for(var a = 0; a < b64.length; ++a){
		if(b64[a] == "="){
			bin = bin.slice(0, -2);
			continue;
		}
		for(var b = 0; b < 64; ++b){
			if(b64[a] == base64string[b]){
				bin += sprintf("%06b", b);
				break;
			}
		}
	}
	return bin;
}

function bin_to_sstr(bin){

	var sstr = "";

	var binary_mode = false;
	var binary_mode_digit_counter = 0;
	var binary_mode_counter = 0;

	for(var a = 0; a < bin.length; a += 4){

		// binary parsing mode
		// step 1: determining file length length
		if(bin.substr(a, 4) == "1111" && binary_mode == false && binary_mode_counter == 0){
			binary_mode_digit_counter += 1;
			sstr += "`";
		// step 3: determine file length
	    }else if(binary_mode == false && binary_mode_digit_counter > 0){
			binary_mode_digit_counter -= 1;
			binary_mode_counter = binary_mode_counter * 10 + parseInt(bin.substr(a, 4), 2);
			sstr += hexstring[parseInt(bin.substr(a, 4), 2)];
			if(binary_mode_digit_counter == 0) binary_mode = true;
		// step 4: encoding files in regular hex
		}else if(binary_mode == true){
			sstr += hexstring[parseInt(bin.substr(a, 4), 2)];
			--binary_mode_counter;
			if(binary_mode_counter == 0) binary_mode = false;
		}else{
			sstr += savetextstring[parseInt(bin.substr(a, 4), 2)];
		}

	}

	return sstr;
}


function sstr_to_b64(sstr){
	return bin_to_b64(sstr_to_bin(sstr));
}

function b64_to_sstr(b64){
	return bin_to_sstr(b64_to_bin(b64));
}
