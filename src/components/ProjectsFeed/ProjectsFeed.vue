<script setup>
import ProjectArticle from "./ProjectArticle.vue";
import RadialGradientFollowMouse from "../RadialGradientFollowMouse/RadialGradientFollowMouse.vue";
import "./styles/_projectArticle.scss";
import "./styles/_projectsFeed.scss";
</script>

<template>
  <RadialGradientFollowMouse>
    <div class="projects-feed-container">
      <ProjectArticle
        imageUrl="/src/assets/hand.png"
        imageUrlBig="/src/assets/handBig.png"
        date="7. ruj. 2023."
        title="AI aplikacija za prepoznavanje gesti ruke"
        desc="Rađeno kao završni projekt za kolegij Primijenjeno Strojno Učenje u paru s kolegicom Leom Gregurić koristeći OpenCV i Mediapipe."
        githubUrl="https://github.com/davidmikulic44/HandGestureRecognition"
        shake="shake1"
      ></ProjectArticle>
      <ProjectArticle
        imageUrl="/src/assets/casinoSmall.gif"
        imageUrlBig="/src/assets/casinoBig.gif"
        date="12. velj. 2024."
        title='Web aplikacija simulator kazina "Cas-Simo"'
        desc="Rađeno kao završni projekt za kolegij Programsko Inženjerstvo u paru s kolegicom Leom Gregurić koristeći Django framework."
        githubUrl="https://github.com/davidmikulic44/cas-simo"
        class="project-right"
        shake="shake2"
      ></ProjectArticle>
      <ProjectArticle
        imageUrl="/src/assets/kenaz500.jpg"
        imageUrlBig="/src/assets/kenaz900.jpg"
        date="16. velj. 2024."
        title="News portal web aplikacija"
        desc="Rađeno u sklopu studentske prakse u Factory d.o.o. koristeći Vue.js framework."
        githubUrl="https://github.com/davidmikulic44/kenaz-factory"
        shake="shake3"
      ></ProjectArticle>
    </div>
  </RadialGradientFollowMouse>
</template>
