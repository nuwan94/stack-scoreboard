$(function(){

    	// Added your user id list to this string

    var userids = "3125964;7469625;7992142;9274132;8540694;8030256;8520448;8538605;8559510;8235644";

    	// this will count how many users in the list

    var num = userids.split(";").length;

    	// requesting informations from Stackexchange API

    $.getJSON('https://api.stackexchange.com/2.2/users/'+ userids + '?order=desc&sort=reputation&site=stackoverflow', function(data) {
    
    	// iterating JSON object array and generate rows in table

	    for (var i = 0; i < num ; i++) {
	    $("#socreboard tbody").append("<tr> <td>"+ (i+1) + "</td><td><a href='"+ data.items[i].link+ "' target='_blank'><img class='avatar' src='"+data.items[i].profile_image+"'/>"+ data.items[i].display_name + "</a></td><td>"+data.items[i].reputation + "</td><td>" + data.items[i].badge_counts.gold + "</td><td>" + data.items[i].badge_counts.silver + "</td><td>" + data.items[i].badge_counts.bronze + "</td></tr>");
	    }

    });

});