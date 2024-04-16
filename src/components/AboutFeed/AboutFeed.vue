<script setup>
import AboutMe from "./AboutMe.vue";
import AboutFeedCard from "./AboutFeedCard.vue";
import VideoSection from "./VideoSection.vue";
import RadialGradientFollowMouse from "../RadialGradientFollowMouse/RadialGradientFollowMouse.vue";
import "./styles/_aboutMe.scss";
import "./styles/_aboutFeed.scss";
</script>

<template>
  <RadialGradientFollowMouse>
    <div class="about-container">
      <AboutMe
        imageUrl="/src/assets/david300x300.png"
        imageUrlBig="/src/assets/david900x900.png"
      ></AboutMe>
      <AboutFeedCard
        imageUrl="/src/assets/kutina300x300.bmp"
        imageUrlBig="/src/assets/kutina900x900.bmp"
      ></AboutFeedCard>
      <VideoSection></VideoSection>
    </div>
  </RadialGradientFollowMouse>
</template>
