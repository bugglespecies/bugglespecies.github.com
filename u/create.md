---
layout: infopage
title: Bugglet.API
description: The Buggle URL Shortener
icon: fas fa-link
image: /img/social.png
---
<div class="input-group mb-3">
  <div class="input-group-prepend">
    <span class="input-group-text text-primary bg-dark" id="full-prepend">Full URL</span>
  </div>
  <input id="urlinput" type="text" class="form-control bg-darker" placeholder="http://buggle.ml/">
</div>
<div class="input-group mb-3">
  <div class="input-group-prepend">
    <span class="input-group-text text-primary bg-dark" id="custom-prepend">Custom Extension</span>
  </div>
  <input id="custominput" type="text" class="form-control bg-darker" placeholder="buggle">
</div>
<div class="input-group mb-3">
  <div class="input-group-prepend">
    <span class="input-group-text text-primary bg-dark" id="result-prepend">Your Short URL</span>
  </div>
  <input id="shortenedURL" type="text" class="form-control bg-darker" placeholder="http://buggle.ml/u/#buggle">
</div>
<script type="text/javascript" src="/u/shorten.core.js"></script>
