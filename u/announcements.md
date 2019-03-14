---
layout: infopage
title: Announcement
description: Post an announcement to the Discord!
image: /img/social.png
icon: fas fa-bullhorn
---
<script type="text/javascript" src="http://code.jquery.com/jquery-3.3.1.min.js"></script>
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
  <textarea id="token" class="form-control bg-darker text-white" placeholder="Auth Token..."></textarea>
</div>
<div class="input-group mb-3">
  <button id="sbtn" class="btn btn-primary text-dark">Shorten!</button>
  <span id="statusBox"></span>
</div>
