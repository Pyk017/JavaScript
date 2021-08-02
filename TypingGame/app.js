tsParticles.load("tsparticles", {
  fullScreen: {
    enable: true,
    zIndex: 1,
  },
  interactivity: {
    events: {
      onClick: {
        enable: true,
        mode: "push",
      },
      onDiv: {
        selectors: "#repulse-div",
        mode: "repulse",
      },
      onHover: {
        enable: true,
        mode: "connect",
        parallax: {
          force: 60,
        },
      },
    },
    modes: {
      bubble: {
        distance: 400,
        duration: 2,
        opacity: 0.8,
        size: 40,
      },
      grab: {
        distance: 400,
      },
    },
  },
  particles: {
    color: {
      value: "random",
    },
    links: {
      color: {
        value: "#ffffff",
      },
      distance: 150,
      opacity: 0.4,
    },
    move: {
      attract: {
        rotate: {
          x: 600,
          y: 1200,
        },
      },
      enable: true,
      outModes: {
        bottom: "out",
        left: "out",
        right: "out",
        top: "out",
      },
      speed: 6,
    },
    number: {
      density: {
        enable: true,
      },
      limit: 500,
      value: 100,
    },
    opacity: {
      value: 0.5,
      animation: {
        speed: 1,
        minimumValue: 0.1,
      },
    },
    size: {
      random: {
        enable: true,
        minimumValue: 10,
      },
      value: {
        min: 10,
        max: 15,
      },
      animation: {
        speed: 40,
        minimumValue: 0.1,
      },
    },
  },
});
