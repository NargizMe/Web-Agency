$(document).ready(function() {
  // skill section
  const skill = [
    {
      icon: "fas fa-code",
      title: "CODE",
      text:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maiores recusandae pariatur delectus rerum corrupti excepturi debitis omnis"
    },
    {
      icon: "far fa-file-alt",
      title: "DOCUMENT",
      text:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maiores recusandae pariatur delectus rerum corrupti excepturi debitis omnis"
    },
    {
      icon: "fas fa-map",
      title: "OPTIMIZED",
      text:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maiores recusandae pariatur delectus rerum corrupti excepturi debitis omnis"
    },
    {
      icon: "fas fa-tv",
      title: "RETINA",
      text:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maiores recusandae pariatur delectus rerum corrupti excepturi debitis omnis"
    }
  ];

  skill.map(el => {
    $(".skills").append(`
  <div class="skill">
  <i class="${el.icon}"></i>
  <h1>${el.title}</h1>
  <p>${el.text}</p>
  </div>
`);
  });

  // service section
  const service = [
    {
      icon: "fas fa-cogs",
      title: "WEB DEVELOPMENT",
      text:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias totam molestias corrupti ea nobis quos.",
      bttton: "READ MORE"
    },
    {
      icon: "fas fa-edit",
      title: "DESIGN & BRANDING",
      text:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias totam molestias corrupti ea nobis quos.",
      bttton: "READ MORE"
    },
    {
      icon: "fas fa-chart-line",
      title: "SEO & SMM",
      text:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias totam molestias corrupti ea nobis quos.",
      bttton: "READ MORE"
    },
    {
      icon: "fas fa-chart-pie",
      title: "ANALYTICS",
      text:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias totam molestias corrupti ea nobis quos.",
      bttton: "READ MORE"
    }
  ];

  service.map(el => {
    $(".services-box").append(`
      <div class="service">
            <div class="service-top">
              <i class="${el.icon}"></i>
              <h3>${el.title}</h3>
            </div>
            <div class="service-bottom">
              <h3>${el.title}</h3>
              <p>${el.text}</p>
              <button type="submit">${el.button}</button>
            </div>
          </div>
      `);
  });

  // post section
  const post = [
    {
      picture: "./images/current-projects-1.jpeg",
      title: "Javascript post",
      showText:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum doloremque facilis neque laudantium asperiores eum!",
      hideText:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum doloremque facilis neque laudantium asperiores eum!",
      button: "Read More"
    },
    {
      picture: "./images/current-projects-2.jpeg",
      title: "React post",
      showText:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum doloremque facilis neque laudantium asperiores eum!",
      hideText:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum doloremque facilis neque laudantium asperiores eum!",
      button: "Read More"
    },
    {
      picture: "./images/current-projects-1.jpeg",
      title: "Node js post",
      showText:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum doloremque facilis neque laudantium asperiores eum!",
      hideText:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum doloremque facilis neque laudantium asperiores eum!",
      button: "Read More"
    }
  ];

  post.map(el => {
    $(".posts-container").append(`<div class="post">
    <img src="${el.picture}" alt="" />
    <div class="post-contex">
      <h1>${el.title}</h1>
      <p class="show-post-text">${el.showText}</p>
      <p class="hide-post-text">${el.hideText}</p>
      <button class="read-more">${el.button}</button>
    </div>
  </div>`);
  });
});
