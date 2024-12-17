---
title: Structure2
publishDate: 17 Dec 2024
description: Chai1 on Modal H100
---
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>3D Protein Structure</title>
  <script src="https://cdn.jsdelivr.net/npm/ngl@latest/dist/ngl.js"></script>
</head>
<body>
  <div id="viewport" style="width: 100%; height: 500px;"></div>
  <script>
    document.addEventListener("DOMContentLoaded", function () {
      var stage = new NGL.Stage("viewport");
      stage.loadFile("/public/assets/c0.cif", { ext: "cif" }).then(function (component) {
        component.addRepresentation("cartoon");
        component.addRepresentation("ball+stick", { sele: "ligand" });
        component.addRepresentation("ball+stick", { sele: "dna" });
        stage.autoView();
      });
    });
  </script>
</body>
</html>
