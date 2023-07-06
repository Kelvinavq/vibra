particlesJS('particles-js', {
    particles: {
      number: {
        value: 80,
        density: {
          enable: true,
          value_area: 800
        }
      },
      color: {
        value: '#ffffff'
      },
      shape: {
        type: 'circle',
        stroke: {
          width: 0,
          color: '#000000'
        },
        polygon: {
          nb_sides: 5
        },
        image: {
          src: 'img/github.svg',
          width: 100,
          height: 100
        }
      },
      opacity: {
        value: 0.5,
        random: false,
        anim: {
          enable: false,
          speed: 1,
          opacity_min: 0.1,
          sync: false
        }
      },
      size: {
        value: 3,
        random: true,
        anim: {
          enable: false,
          speed: 40,
          size_min: 0.1,
          sync: false
        }
      },
      line_linked: {
        enable: true,
        distance: 150,
        color: '#ff9702',
        opacity: 1,
        width: 1
      },
      move: {
        enable: true,
        speed: 10,
        direction: 'none',
        random: false,
        straight: false,
        out_mode: 'out',
        bounce: false,
        attract: {
          enable: false,
          rotateX: 600,
          rotateY: 1200
        }
      }
    },
    interactivity: {
      detect_on: 'canvas',
      events: {
        onhover: {
          enable: true,
          mode: 'repulse'
        },
        onclick: {
          enable: true,
          mode: 'push'
        },
        resize: true
      },
      modes: {
        grab: {
          distance: 400,
          line_linked: {
            opacity: 1
          }
        },
        bubble: {
          distance: 400,
          size: 40,
          duration: 2,
          opacity: 8,
          speed: 3
        },
        repulse: {
          distance: 200
        },
        push: {
          particles_nb: 4
        },
        remove: {
          particles_nb: 2
        }
      }
    },
    retina_detect: true
  });
  

  const nombre = document.getElementById("nombre");
const telefono = document.getElementById("telefono");
const correo = document.getElementById("correo");
const inputs = document.querySelectorAll("input");

const form = document.getElementById("contacto-form");




form.addEventListener("submit", (e) => {
    e.preventDefault();


    inputs.forEach(element => {
        element.style.border = "none";
    });


    var regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/

    if (nombre.value < 3) {

        nombre.style.border = "1px solid red";

        swal({
            title: "El nombre debe contener al menos 3 carácteres.",
            icon: "warning",
          })
          .then((ok) => {
            if (ok) {
            }
          });

    }  else if (telefono.value.length < 10) {

        telefono.style.border = "1px solid red";

        swal({
            title: "El número de teléfono debe contener al menos 10 dígitos.",
            icon: "warning",
          })
          .then((ok) => {
            if (ok) {
            }
          });

    }else if (regexEmail.test(correo.value) != true) {

        correo.style.border = "1px solid red";
        swal({
            title: "El correo debe contener el formato correcto.",
            text: "Por ejemplo: jon@mail.com",
            icon: "warning",
          })
          .then((ok) => {
            if (ok) {
            }
          });

    } else {

      
        form.submit();
    }


})

