// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
})

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	$('.project a').click(addProjectDetails);
}

function addProject(data) {
	var projectHTML =
		'<p>'+data['title']+'</p>'+
		'<p><small>' + data['date'] +'</small></p>'+
		'<img src="' + data['image'] + '" class="detailsImage">' +
		'<p>' + data['summary'] + '</p>'; 
	return projectHTML;
}

/*
 * Make an AJAX call to retrieve project details and add it in
 */
function addProjectDetails(e) {
	// Prevent following the link
	e.preventDefault();

	// Get the div ID, e.g., "project3"
	var projectID = $(this).closest('.project').attr('id');
	// get rid of 'project' from the front of the id 'project3'
	var idNumber = projectID.substr('project'.length);

	var dest = "/project/"+idNumber;

	$.get(dest, function(result){
		var html = addProject(result);
		console.log(html);
		var details = $("div #"+projectID).find(".details").html(html);
	});

	console.log("User clicked on project " + idNumber);
}
