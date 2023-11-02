# Convert All HMTL Special Characters README


## Features

A simple extension that adds a command "Convert All HMTL Special Characters" to the command pallete, which converts HTML symbols and special characters into their HTML-entity name or number counterparts. 

You can also run this command by clicking the "&ntilde;" button in the bottom right of your VScode Status Bar.

![A tilde-n button in the bottom right of the VScode status bar](https://raw.githubusercontent.com/bobeatspie/htmlcharacterconverter/main/image.png)

E.g. Running "Convert All HMTL Special Characters" replaces: 

'º' with  '\&deg;'
'½' with '\&frac12;'
á with '\&aacute;'


Full list:

    'º': '\&deg;',
	'½': '\&frac12;',
	'„': '\&bdquo;',
	'“': '\&ldquo;',
	'”': '\&rdquo;',
	'«': '\&laquo;',
	'»': '\&raquo;',
	'‹': '\&lsaquo;',
	'›': '\&rsaquo;',
	'‘': '\&lsquo;',
	'’': '\&rsquo;',
	'á': '\&aacute;',
	'é': '\&eacute;',
	'í': '\&iacute;',
	'ó': '\&oacute;',
	'ñ': '\&ntilde;',
	'ú': '\&uacute;',
	'ü': '\&uuml;',
	'Á': '\&Aacute;',
	'É': '\&Eacute;',
	'Í': '\&Iacute;',
	'Ó': '\&Oacute;',
	'Ñ': '\&Ntilde;',
	'Ú': '\&Uacute;',
	'Ü': '\&Uuml;',
	'¡': '\&iexcl;',
	'¿': '\&iquest;',
	'Ä': '\&Auml;',
	'Ö': '\&Ouml;',
	'ä': '\&auml;',
	'ö': '\&ouml;',
	'ß': '\&szlig;',
	'č': '\&#269;',
	'ď': '\&#271;',
	'ě': '\&#283;',
	'ň': '\&#328;',
	'ř': '\&#345;',
	'š': '\&#353;',
	'ť': '\&#357;',
	'ů': '\&#367;',
	'ý': '\&yacute;',
    'ń': '\&nacute',
	'ž': '\&#382;',
	'Č': '\&#268;',
	'Ď': '\&#270;',
	'Ě': '\&#282;',
	'Ň': '\&#327;',
	'Ř': '\&#344;',
	'Š': '\&#352;',
	'Ť': '\&#356;',
	'Ů': '\&#366;',
	'Ý': '\&Yacute;',
	'Ž': '\&#381;',
	'à': '\&agrave;',
	'è': '\&egrave;',
	'ì': '\&igrave;',
	'ò': '\&ograve;',
	'ù': '\&ugrave;',
	'À': '\&Agrave;',
	'È': '\&Egrave;',
	'Ì': '\&Igrave;',
	'Ò': '\&Ograve;',
	'Ù': '\&Ugrave;',
	'ç': '\&ccedil;',
	'Ç': '\&Ccedil;',
	'â': '\&acirc;',
	'ê': '\&ecirc;',
	'Â': '\&Acirc;',
	'Ê': '\&Ecirc;',
	'ã': '\&atilde;',
	'õ': '\&otilde;',
	'Ã': '\&Atilde;',
	'Õ': '\&Otilde;',
	'ï': '\&iuml;',
	'Ï': '\&Iuml;',
	'ª': '\&ordf;',
	'î': '\&icirc;',
	'ô': '\&ocirc;',
	'û': '\&ucirc;',
	'Î': '\&Icirc;',
	'Ô': '\&Ocirc;',
	'Û': '\&Ucirc;',
	'ë': '\&euml;',
	'ÿ': '\&yuml;',
	'Ë': '\&Euml;',
	'Ÿ': '\&#376;',
	'œ': '\&oelig;',
	'Œ': '\&OElig;',
	'ł': '&lstrok;',
	'ż': '&zdot;'


Any suggestions or feeback? I'd love to hear: bobeatspie123@gmail.com

## Release Notes


### 1.0.0

Initial release

### 1.1.0

Changed name to "HTML special character converter"
Added status bar button
Updated README
added \&nacute; (&nacute;) support
