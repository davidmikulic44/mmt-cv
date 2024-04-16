<script setup>
import ColleagueProfile from "./ColleagueProfile.vue";
import Link from "../Links/Link.vue";
import github from '../../assets/Github.svg';
import linkedin from '../../assets/LinkedIn.svg';
import rade from '../../assets/rade ulica.jpg'
</script>

<template>
  <footer>
    <section class="about">
      <h6 class="footer-text" id="about-text">
        Projekt za konstrukcijske vježbe iz kolegija Multimedijska Tehnika
      </h6>
      <h6 class="footer-text">David Mikulić, 2024.</h6>
    </section>
    <section class="footer-links">
      <h6 class="footer-text">Moji linkovi:</h6>
      <div class="links-content">
        <Link
          linkUrl="https://github.com/davidmikulic44/"
          :imageUrl="github"
          imageClass="logo-link-white"
        ></Link>
        <Link
          linkUrl="https://www.linkedin.com/in/david-mikuli%C4%87-b43a83295/"
          :imageUrl="linkedin"
          imageClass="logo-link-white"
        ></Link>
      </div>
    </section>
    <section class="colleagues">
      <ColleagueProfile
        :imageUrl="rade"
        name="Rade Ulica"
        siteUrl="https://www.youtube.com/watch?v=EpWyKn2t8HQ"
      ></ColleagueProfile>
      <ColleagueProfile
        :imageUrl="rade"
        name="Rade Ulica"
        siteUrl="https://www.youtube.com/watch?v=EpWyKn2t8HQ"
      ></ColleagueProfile
      ><ColleagueProfile
        :imageUrl="rade"
        name="Rade Ulica"
        siteUrl="https://www.youtube.com/watch?v=EpWyKn2t8HQ"
      ></ColleagueProfile>
    </section>
  </footer>
</template>
