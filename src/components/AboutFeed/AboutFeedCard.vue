<script setup>
import { ref, defineProps } from "vue";

const props = defineProps([
  "imageUrl",
  "imageUrlBig",
]);

const imageEnlarged = ref(false);
const imageUrl = ref(props.imageUrl)
const containerClass = ref("about-me-container")
const imageClass = ref("profile-picture")

const changeImageSize = () => {
  imageEnlarged.value = !imageEnlarged.value;
  if (imageEnlarged.value) {
    imageUrl.value = props.imageUrlBig
    containerClass.value = "about-me-container-big"
    imageClass.value = "profile-picture-big"
  }
  else {
    imageUrl.value = props.imageUrl
    containerClass.value = "about-me-container"
    imageClass.value = "profile-picture"
  }
}

</script>

<template>
  <div :class="containerClass">
    <aside class="about-me-side">
      <img :src="imageUrl" :class="imageClass" alt="" @click="changeImageSize"/>
    </aside>
    <section class="about-me-text">
      <h1 class="about-me-heading">O meni</h1>
      <div class="desc-container">
        <p class="project-description">
          Rođen sam 28.1.2002. u <a class="text-link" href="https://www.zagreb.hr/">Zagrebu</a> i odrastao u <a class="text-link" href="https://www.kutina.hr/">Kutini</a>.
          U slobodno vrijeme se bavim glazbom, nogometom i trčanjem.
        </p>
        <audio controls class="audio">
            <source src="/src/assets/david.mp3">
        </audio>
      </div>
    </section>
  </div>
</template>
