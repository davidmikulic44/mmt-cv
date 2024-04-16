<script setup>
import ColleagueProfile from "./ColleagueProfile.vue";
import Link from "../Links/Link.vue";
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
          imageUrl="/src/assets/Github.svg"
          imageClass="logo-link-white"
        ></Link>
        <Link
          linkUrl="https://www.linkedin.com/in/david-mikuli%C4%87-b43a83295/"
          imageUrl="/src/assets/LinkedIn.svg"
          imageClass="logo-link-white"
        ></Link>
      </div>
    </section>
    <section class="colleagues">
      <ColleagueProfile
        imageUrl="/src/assets/rade ulica.jpg"
        name="Rade Ulica"
        siteUrl="https://www.youtube.com/watch?v=EpWyKn2t8HQ"
      ></ColleagueProfile>
      <ColleagueProfile
        imageUrl="/src/assets/rade ulica.jpg"
        name="Rade Ulica"
        siteUrl="https://www.youtube.com/watch?v=EpWyKn2t8HQ"
      ></ColleagueProfile
      ><ColleagueProfile
        imageUrl="/src/assets/rade ulica.jpg"
        name="Rade Ulica"
        siteUrl="https://www.youtube.com/watch?v=EpWyKn2t8HQ"
      ></ColleagueProfile>
    </section>
  </footer>
</template>
