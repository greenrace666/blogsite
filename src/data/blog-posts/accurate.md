---
title: Accurate All-Atom Stucture Prediction In Seconds
publishDate: 17 Dec 2024
description: Chai1 on Modal H100
---
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Accurate All-Atom Structure Prediction In Seconds</title>
  <script src="https://cdn.jsdelivr.net/npm/ngl@latest/dist/ngl.js"></script>
  <style>
    body {
      font-family: Arial, sans-serif;
      line-height: 1.6;
      margin: 0;
      padding: 20px;
      background-color: #f4f4f4;
    }
    .container {
      max-width: 1000px;
      margin: auto;
      background: #fff;
      padding: 20px;
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    }
    h1, h2 {
      color: #333;
    }
    p {
      margin: 10px 0;
    }
    .image {
      text-align: center;
      margin: 20px 0;
    }
    .image img {
      max-width: 100%;
      height: auto;
    }
    .footer {
      text-align: center;
      margin-top: 20px;
      font-size: 0.9em;
      color: #777;
    }
  </style>
</head>
<body>
  <div class="container">
    <h1>Accurate All-Atom Structure Prediction In Seconds</h1>
    <p>December 16, 2024</p>
    <p>Pretty sure you must have heard of the news!</p>
    <blockquote class="twitter-tweet" data-dnt="true" align="center"><p lang="en" dir="ltr">BREAKING NEWS<br>The Royal Swedish Academy of Sciences has decided to award the 2024 <a href="https://twitter.com/hashtag/NobelPrize?src=hash&amp;ref_src=twsrc%5Etfw">#NobelPrize</a> in Chemistry with one half to David Baker “for computational protein design” and the other half jointly to Demis Hassabis and John M. Jumper “for protein structure prediction.” <a href="https://t.co/gYrdFFcD4T">pic.twitter.com/gYrdFFcD4T</a></p>&mdash; The Nobel Prize (@NobelPrize) <a href="https://twitter.com/NobelPrize/status/1843951197960777760?ref_src=twsrc%5Etfw">October 9, 2024</a></blockquote>
    <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
    <p>The two guys on the right developed the AlphaFold2 model, an ML model that predicts 3D protein structures from just the sequence. Here’s a deep look into the model:</p>
    <div align="center">
      <iframe width="560" height="315" src="https://www.youtube.com/embed/7q8Uw3rmXyE?si=niucsme7Dnp-A3u7" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
    </div>
    <p>A more recent version released is AlphaFold3 with a diffusion model used. Many open-source versions of its implementation have been produced with the best one being:</p>
    <blockquote class="twitter-tweet" data-dnt="true" align="center"><p lang="en" dir="ltr">We’re excited to introduce <a href="https://twitter.com/chaidiscovery?ref_src=twsrc%5Etfw">@ChaiDiscovery</a> and release Chai-1, a foundation model for molecular structure prediction that performs at the state-of-the-art across a variety of drug discovery tasks<br><br>We&#39;re releasing inference code, weights &amp; a web interface: <a href="https://t.co/QmpbVO9Fhd">https://t.co/QmpbVO9Fhd</a> <a href="https://t.co/TU7xuOAaIF">pic.twitter.com/TU7xuOAaIF</a></p>&mdash; Joshua Meier (@joshim5) <a href="https://twitter.com/joshim5/status/1833183091776721106?ref_src=twsrc%5Etfw">September 9, 2024</a></blockquote>
    <p>And Modal Labs have implemented this model to run on their GPU architecture using simple, easy-to-use code.</p>
    <blockquote class="twitter-tweet" data-dnt="true" align="center"><p lang="en" dir="ltr">Folding proteins on Modal with <a href="https://twitter.com/chaidiscovery?ref_src=twsrc%5Etfw">@chaidiscovery</a> Chai-1.<br><br>Comprehensive guide with working code samples from the <a href="https://twitter.com/modal_labs?ref_src=twsrc%5Etfw">@modal_labs</a> team.<a href="https://t.co/IYSO7ppz4V">https://t.co/IYSO7ppz4V</a></p>&mdash; Joshua Meier (@joshim5) <a href="https://twitter.com/joshim5/status/1864688989321744777?ref_src=twsrc%5Etfw">December 5, 2024</a></blockquote>
    <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
    <p>I was running into some issues with running the code and opened a <a href="https://github.com/greenrace666/chai1modal">PR</a> and corrected it. Now, you can easily run the code yourself by following the instructions in </p>
    <p><a href="https://github.com/greenrace666/chai1modal">https://github.com/greenrace666/chai1modal</a></p>
    <p>I’ve got a 1000 residue protein in under a minute!</p>
    <p>Move around this structure , it's 3D 👇</p>
    <div id="viewport" style="width: 100%; height: 500px;"></div>
    <script>
      document.addEventListener("DOMContentLoaded", function () {
        var stage = new NGL.Stage("viewport");
        stage.loadFile("rcsb://3pjr", { defaultRepresentation: true });
        stage.setParameters({ backgroundColor: "white" });
      });
    </script>
    
  </div>
</body>
</html>
