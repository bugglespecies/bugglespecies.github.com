---
layout: infopage
title: Announcement
description: Post an announcement to the Discord!
image: /img/social.png
icon: fas fa-bullhorn
---
<div class="input-group mb-3">
  <div class="input-group-prepend">
    <span class="input-group-text text-primary bg-dark" id="full-prepend"><i class="fas fa-ticket-alt"></i></span>
  </div>
  <input id="token" type="text" class="form-control bg-darker text-white" placeholder="Auth Token...">
</div>
<div class="input-group mb-3">
  <div class="input-group-prepend">
    <span class="input-group-text text-primary bg-dark" id="full-prepend"><i class="fas fa-envelope"></i></span>
  </div>
  <textarea id="post" class="form-control bg-darker text-white" placeholder="Announcement..."></textarea>
</div>
<div class="input-group mb-3 text-center">
  <button id="submit" class="btn btn-primary text-dark">Post</button>
  <span id="statusBox"></span>
</div>
<script type="text/javascript">

var destination = "https://canary.discordapp.com/api/webhooks/555515773247029259/";
var username = "Buggle Staff"
var image = "https://cdn.discordapp.com/icons/541806481683644438/a1d48057d40804d0464909783709f9b8.png?size=2048";

document.getElementById('submit').addEventListener('click', function(e) {
	let authToken = document.getElementById('token').value;
	let announcement = document.getElementById('post').value;
	
	if(authToken !== "" && announcement !== "") {
		let request = new XMLHttpRequest();
	
		request.open('POST', destination + authToken);
		request.setRequestHeader('Content-Type', 'application/json; charset=UTF-8');
		request.send(JSON.stringify({
			"username": username,
			"avatar_url": image,
			"content": announcement
		}))
	}
})

</script>
