// src/ngl-background.js
document.addEventListener('DOMContentLoaded', function () {
    var stage = new NGL.Stage("viewport", { backgroundColor: "white" });
    stage.loadFile("rcsb://1crn", { defaultRepresentation: true }).then(function (component) {
      component.addRepresentation("surface", { colorScheme: "element" });
      stage.autoView();
      animate();
    });
  
    function animate() {
      requestAnimationFrame(animate);
      stage.viewerControls.rotate([0.01, 0.01, 0]);
    }
  });
  