(function(){

var __apfx = ["", " thousand", " million", " billion", " trillion", " quadrillion", " quintillion", " sextillion", " septillion", " octillion", " nonillion", " decillion"]
var __aspfx = ["", "K", "M", "B", "T", "Qa", "Qi", "Sx", "Sp", "Oc", "No", "Dc"]

var __bpfx = ["", " million", " billion", " trillion", " quadrillion", " quintillion", " sextillion", " septillion", " octillion", " nonillion", " decillion"]
var __bspfx = ["", "M", "B", "T", "Qa", "Qi", "Sx", "Sp", "Oc", "No", "Dc"]

var __sipfx = ["", "k", "M", "G", "T", "P", "E", "Z", "Y"]

var __chpfx = ["", "万", "億", "兆", "京", "垓", "秭", "穰", "溝", "澗", "正", "載", "極"]


function __digitgroup(x, d, s, p) {
	s = typeof(s) !== 'undefined' ? s : ",";
	p = typeof(p) !== 'undefined' ? p : ".";
	var parts = x.toPrecision(d).split(".");
		parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, s);
		if(parts[1]){
			parts[1] = parts[1].replace(/(\d{3})/g, '$1 ');
		}
	return parts.join(p).trim();
}


function __digitgroup4(x, d, s, p) {
	s = typeof(s) !== 'undefined' ? s : "'";
	p = typeof(p) !== 'undefined' ? p : ".";
	var parts = x.toPrecision(d).split(".");
		parts[0] = parts[0].replace(/\B(?=(\d{4})+(?!\d))/g, s);
		if(parts[1]){
			parts[1] = parts[1].replace(/(\d{4})/g, '$1 ');
		}
	return parts.join(p).trim();
}


function _reprnum_generic(minimum, base, suffixlist, base_symbol, abbr_func, null_func){

	return function(n){

		if(n < minimum) return "" + null_func(n);

		var order = Math.floor(Math.log(n) / Math.log(base));
		var mantissa = n / Math.pow(base, order);

		if (order < suffixlist.length)
			return abbr_func(mantissa) + suffixlist[order];
		else
			return abbr_func(mantissa) + base_symbol + "<sup>" + order + "</sup>";

	}

}

_reprnum_short = _reprnum_generic(1000000, 1000, __apfx, "K", function(n){return n.toPrecision(6);}, function(n){return __digitgroup(n);});
_reprnum_short_european = _reprnum_generic(1000000, 1000, __apfx, "K", function(n){return __digitgroup(n, 6, " ", ",");}, function(n){return __digitgroup(n, undefined, " ", ",");});

_reprnum_short_suffix = _reprnum_generic(1000, 1000, __aspfx, "K", function(n){return n.toPrecision(3);}, function(n){return n;});
_reprnum_short_suffix_european = _reprnum_generic(1000, 1000, __aspfx, "K", function(n){return __digitgroup(n, 3, " ", ",");}, function(n){return __digitgroup(n, undefined, " ", ",");});

_reprnum_short_suffix2 = _reprnum_generic(1000000, 1000, __aspfx, "K", function(n){return __digitgroup(n, 6);}, function(n){return __digitgroup(n);});
_reprnum_short_suffix2_european = _reprnum_generic(1000000, 1000, __aspfx, "K", function(n){return __digitgroup(n, 6, " ", ",");}, function(n){return __digitgroup(n, undefined, " ", ",");});

_reprnum_long = _reprnum_generic(1000000, 1000000, __bpfx, "M", function(n){return __digitgroup(n, 6, " ");}, function(n){return __digitgroup(n);});
_reprnum_long_european = _reprnum_generic(1000000, 1000000, __bpfx, "M", function(n){return __digitgroup(n, 6, " ", ",");}, function(n){return __digitgroup(n, undefined, " ", ",");});

_reprnum_long_suffix = _reprnum_generic(1000000, 1000000, __bspfx, "M", function(n){return __digitgroup(n, 6, " ");}, function(n){return __digitgroup(n);});
_reprnum_long_suffix_european = _reprnum_generic(1000000, 1000000, __bspfx, "M", function(n){return __digitgroup(n, 6, " ", ",");}, function(n){return __digitgroup(n, undefined, " ", ",");});

function _reprnum_si(n){

	/* Returns a representation of n with the SI prefix numbering system, with 4 significant digits. */

	if(n < 1000) return "" + n;

	var order = Math.floor(Math.log(n) / Math.log(1000));
	var mantissa = n / Math.pow(1000, order);

	if (order < __sipfx.length)
		return mantissa.toPrecision(3) + " " + __sipfx[order];
	else
		return mantissa.toPrecision(3) + " K<sup>" + order + "</sup>";

}

function _reprnum_chinese(n){

	if(n < 10000) return "" + n;

	var order = Math.floor(Math.log(n) / Math.log(10000));
	var mantissa = n / Math.pow(10000, order);

	if (order < __sipfx.length)
		return mantissa.toPrecision(4) + "" + __chpfx[order];
	else
		return mantissa.toPrecision(4) + "万<sup>" + order + "</sup>";

}


/* external exposed function */
this.reprnum = function(n, length){
	/* use a different locale depending on taste. */

	if(length == "short"){
		switch(lang){
			case "en-US": case "en-CA":
				return _reprnum_short_suffix(n);
			case "en-GB":
				return _reprnum_long_suffix(n);
			case "fr-CA":
			case "es-ES":
			case "cs-CZ":
				return _reprnum_short_suffix_european(n);
			case "jp-JP":
			case "zh-CN":
				return _reprnum_chinese(n);
		}
	}else if(length == "medium"){
		switch(lang){
			case "en-US": case "en-CA":
				return _reprnum_short_suffix2(n);
			case "en-GB":
				return _reprnum_long_suffix(n);
			case "fr-CA":
			case "es-ES":
			case "cs-CZ":
				return _reprnum_short_suffix2_european(n);
			case "jp-JP":
			case "zh-CN":
				return _reprnum_chinese(n);
		}
	}else if(length == "long"){
		switch(lang){
			case "en-US": case "en-CA":
				return _reprnum_short(n);
			case "en-GB":
				return _reprnum_long(n);
			case "fr-CA":
			case "es-ES":
			case "cs-CZ":
				return _reprnum_short_european(n);
			case "jp-JP":
			case "zh-CN":
				return _reprnum_chinese(n);
		}
	}else{ // treat it as "full"
		switch(lang){
			case "en-US": case "en-CA": case "en-GB":
				return __digitgroup(n);
			case "fr-CA":
			case "es-ES":
			case "cs-CZ":
				return __digitgroup(n, undefined, " ", ",");
			case "jp-JP":
			case "zh-CN":
				return __digitgroup4(n);
		}
	}

	return n; // if all else fails, just return the number again.

}

}).call(this);
