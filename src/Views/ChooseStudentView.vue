<script setup>
import { useRouter } from "vue-router";
import StudentOption from "../components/StudentOption/StudentOption.vue";
import "./styles/_chooseStudentView.scss";
import StudentOptionDirectLink from "../components/StudentOption/StudentOptionDirectLink.vue";

import davidImage from "../assets/david900x900.png";
import radeImage from "../assets/rade ulica.jpg";
</script>

<template>
  <div class="student-options-container">
    <StudentOptionDirectLink
      name="Matej Milanović"
      :imageUrl="radeImage"
      siteUrl="/src/matejmilanovic/index.html"
    ></StudentOptionDirectLink>
    <StudentOption
      name="David Mikulić"
      :imageUrl="davidImage"
      siteUrl="/davidmikulic/omeni"
    ></StudentOption>
  </div>
</template>
