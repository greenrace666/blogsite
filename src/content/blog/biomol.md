---
title: Biomolecule fascination      
author: Nikil Krishna
pubDatetime: 2024-12-25T20:30:05
slug: biomol
featured: true
draft: true
ogImage: /assets/biomol.webp
tags:
  - computational biology
  - art of biomolecules
  - proteins
description: How did I start to take interest in this?
---
# 3D Möbius Strip

<div id="container"></div>

<script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js"></script>
<script>
  // Set up the scene, camera, and renderer
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
  const renderer = new THREE.WebGLRenderer();
  renderer.setSize(window.innerWidth, window.innerHeight);
  document.getElementById('container').appendChild(renderer.domElement);

  // Create the Möbius strip geometry
  const geometry = new THREE.ParametricGeometry((u, v, target) => {
    u = u * Math.PI * 2;
    v = v * 2 * Math.PI;
    u = u * 2;
    const x = Math.cos(u) * (1 + 0.5 * Math.cos(v));
    const y = Math.sin(u) * (1 + 0.5 * Math.cos(v));
    const z = 0.5 * Math.sin(v);
    target.set(x, y, z);
  }, 100, 100);

  // Create a material and mesh
  const material = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true });
  const mobiusStrip = new THREE.Mesh(geometry, material);
  scene.add(mobiusStrip);

  // Position the camera
  camera.position.z = 5;

  // Animation loop
  function animate() {
    requestAnimationFrame(animate);
    mobiusStrip.rotation.x += 0.01;
    mobiusStrip.rotation.y += 0.01;
    renderer.render(scene, camera);
  }
  animate();
</script>
