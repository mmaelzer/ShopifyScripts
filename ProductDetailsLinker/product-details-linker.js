<script type="text/javascript">

$(document).ready(function() {
    
    var linkItems = ["Manufacturer", "Collection", "Designer", "Type", "Color Category", "Thread Line", "Author", "Creator"];
	var multiItems = ["Use" , "Pattern Types"];
    
    $("div#details > ul > li").each(function(index) {
        var thisLine = $(this).text();
		for (i in linkItems) {
			if (thisLine.indexOf(linkItems[i] + ':') != -1) {
				var val = thisLine.replace(linkItems[i] + ": ", "");
				var url = sanitize(val);
				$(this).html(linkItems[i] + ': ' + '<a href="http://www.YOURWEBSITE.com/collections/' + replaceAll(url, " ", "-") + '">' + val + '</a>');
			}
		}
		for (j in multiItems) {
		        if (thisLine.indexOf(multiItems[j] + ":") != -1) {
					var vals = thisLine.replace(multiItems[j] + ": ", "");
					var split = vals.split(",");
					var newHtml = multiItems[j] + ": ";
					for (k = 0; k < split.length; k++) {
						var val = $.trim(split[k]);
						var url = sanitize(val);
						newHtml += '<a href="http://www.YOURWEBSITE.com/collections/' + replaceAll(url, " ", "-") + '">' + val + '</a>';
						if (k + 1 < split.length) {
							newHtml += ',&nbsp;';    
						}
					}
					$(this).html(newHtml);
            }
		}
	});
});

function sanitize(text)
{
    text = replaceAll(text, "'", "");
    text = replaceAll(text, "!", "");
    text = replaceAll(text, "\"", "");
    text = replaceAll(text, ",", "");
	text = replaceAll(text, "&", "");
	text = replaceAll(text, "%", "");
    text = replaceAll(text, ":", "");
	text = replaceAll(text, "\\?", "");
	text = replaceAll(text, "\\.", "");
	text = replaceAll(text, "\\(", "");
	text = replaceAll(text, "\\)", "");
	text = text.replace(new RegExp('\\s+', 'g'), ' ');
    return text;
}

function replaceAll(text, oldchar, newchar) {
  return text.replace(new RegExp(oldchar, 'g'), newchar);
}
</script>