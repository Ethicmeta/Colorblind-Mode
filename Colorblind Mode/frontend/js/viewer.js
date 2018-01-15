/*
Copyright 2017 Amazon.com, Inc. or its affiliates. All Rights Reserved.

Licensed under the Apache License, Version 2.0 (the "License"). You may not use this file except in compliance with the License. A copy of the License is located at

    http://aws.amazon.com/apache2.0/

or in the "license" file accompanying this file. This file is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.
*/

/*

  Set Javascript specific to the extension viewer view in this file.

*/

$( document ).ready(function() {
	
	function injectStyles(rule) {
	  var div = $("<div />", {
		html: '&shy;<style>' + rule + '</style>'
	  }).appendTo("body");    
	}
	
	var i = null;
	$("iframe").mousemove(function() {
		clearTimeout(i);
		$("#deficiency-type").show("slow");
		i = setTimeout(function () {
			$("#deficiency-type").hide("slow");
		}, 5000);
	});
	
	$("#deficiency-type").change(function(){		
		var type = parseInt($(this).val());
		switch (type){
			case 0:
				injectStyles('iframe { filter: none; }');
				break;
			case 1:
			injectStyles('iframe { filter: url(#protanopia); }');
				break;
			case 2:
				injectStyles('iframe { filter: url(#Protanomaly) }');
				break;
			case 3:
				injectStyles('iframe { filter: url(#deuteranopia) }');
				break;
			case 4:
				injectStyles('iframe { filter: url(#deuteranomaly) }');
				break;
			case 5:
				injectStyles('iframe { filter: url(#tritanopia) }');
				break;
			case 6:
				injectStyles('iframe { filter: url(#tritanomaly) }');
				break;
			case 7:
				injectStyles('iframe { filter: url(#achromatopsia) }');
				break;
			case 8:
				injectStyles('iframe { filter: url(#achromatomaly) }');
				break;
			case 9:
				injectStyles('iframe { filter: url(#low-contrast) }');
				break;
			default:
				break;
		}
	})
})