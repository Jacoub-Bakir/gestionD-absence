var particles = Particles.init({
    selector: ".background",
    color: ["#199cfa","#338033", "#379b37", "#33ff33","#1676ba"],
    connectParticles: true,
    responsive: [
      {
        breakpoint: 768,
        options: {
          color: ["#199cfa","#379b37", "#338033", "#33ff33","#1676ba"],
          maxParticles: 43,
          connectParticles: false
        }
      }
    ]
  });
  document.onload = function () {
    Particles.init({
      selector: ".background"
    });
  };