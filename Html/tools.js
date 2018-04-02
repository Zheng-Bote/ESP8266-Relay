
function crMenu()
{
	console.log("crMenu");
	$("#menue").empty();
	
	var mnuName = ["Home", "System Info", "Relay Config", "File Info", "File Upload"];
	var mnuUrli = ["/index.htm", "/system.htm", "/relay.htm", "/spiff.htm", "/upload.htm"];
 
  for (var i = 0; i < mnuName.length; i++) 
  {
    var val = 'menue' + i;
    var html = '<a class="btn btn-primary btn-lg" href="' + mnuUrli[i] + '" role="button">' + mnuName[i] + '</a>';
    $("#menue").append(html);
  }
}
 
function getSpiff()
{
	console.log("getSpiff");
	$("#spiff").empty();
	jQuery.getJSON("/getSpiff",function (data) 
	{
      var count = Object.keys(data).length - 1;
 		for(var n = 0; n < count; n++)
		{
			// var html = "<p>file: " + data[n][0].fname + " , size: " + data[n][0].fsize + "</p>";
			var html = "<div class=\"row\"><div class=\"col-sm-4\" style=\"background-color:lavender;\"><a href=\"" + data[n][0].fname + "\">" + data[n][0].fname + "</a></div><div class=\"col-sm-4\" style=\"background-color:lavender;\" align=\"right\">" + data[n][0].fsize + "</div></div>";
			$("#spiff").append(html);
		}
    });
}  

function loadSpiff(itemList)
{
	console.log("loadSpiff");
	/*
	console.log(Object.keys(itemList).length);
	
	if(Object.keys(itemList).length == 1)
	{
		jQuery('#relais1').prop('checked', true);
		addRelay(1);
		//jQuery("#0").val(itemList[0].name);
		console.log("Relais: 1");
		for(var n = 0; n < Object.keys(itemList).length; n++)
		{
			var target = '#' + n;
			jQuery(target).val(itemList[n]);
		}
	}
	*/
}

function btnPower(id)
{
	var tmp = "cmdRelay?Relay=" + id + "&Power=toggle";
	
	var jqxhr = $.post( tmp, function() 
	{
		$(location).attr('href',"/index.htm");
		window.location = "/index.htm";
		window.location.replace("/index.htm");
	})
	.fail(function() 
	{
		$(location).attr('href',"/relay.htm");
		window.location = "/relay.htm"; 
		window.location.replace("/relay.htm");
	 });
}
