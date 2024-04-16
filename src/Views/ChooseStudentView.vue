<script setup>
import { useRouter } from "vue-router";
import StudentOption from "../components/StudentOption/StudentOption.vue";
import "./styles/_chooseStudentView.scss";
import StudentOptionDirectLink from "../components/StudentOption/StudentOptionDirectLink.vue";
</script>

<template>
  <div class="student-options-container">
    <StudentOptionDirectLink
      name="Matej Milanović"
      imageUrl="/src/assets/rade ulica.jpg"
      siteUrl="/src/matejmilanovic/index.html"
    ></StudentOptionDirectLink>
    <StudentOption
      name="David Mikulić"
      imageUrl="/src/assets/david900x900.png"
      siteUrl="/davidmikulic/omeni"
    ></StudentOption>
  </div>
</template>
