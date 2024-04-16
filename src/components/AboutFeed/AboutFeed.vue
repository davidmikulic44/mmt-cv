<script setup>
import AboutMe from "./AboutMe.vue";
import AboutFeedCard from "./AboutFeedCard.vue";
import VideoSection from "./VideoSection.vue";
import RadialGradientFollowMouse from "../RadialGradientFollowMouse/RadialGradientFollowMouse.vue";
import "./styles/_aboutMe.scss";
import "./styles/_aboutFeed.scss";

import david300 from '../../assets/david300x300.png'
import david900 from '../../assets/david900x900.png'
import kutina300 from '../../assets/kutina300x300.bmp'
import kutina900 from '../../assets/kutina900x900.bmp'
</script>

<template>
  <RadialGradientFollowMouse>
    <div class="about-container">
      <AboutMe
        :imageUrl="david300"
        :imageUrlBig="david900"
      ></AboutMe>
      <AboutFeedCard
        :imageUrl="kutina300"
        :imageUrlBig="kutina900"
      ></AboutFeedCard>
      <VideoSection></VideoSection>
    </div>
  </RadialGradientFollowMouse>
</template>
