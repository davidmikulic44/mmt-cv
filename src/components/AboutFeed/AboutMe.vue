<script setup>
import { ref, defineProps } from "vue";
import Link from "../Links/Link.vue";

const props = defineProps(["imageUrl", "imageUrlBig"]);

const imageEnlarged = ref(false);
const imageUrl = ref(props.imageUrl);
const containerClass = ref("about-me-container");
const imageClass = ref("profile-picture");

const changeImageSize = () => {
  imageEnlarged.value = !imageEnlarged.value;
  if (imageEnlarged.value) {
    imageUrl.value = props.imageUrlBig;
    containerClass.value = "about-me-container-big";
    imageClass.value = "profile-picture-big";
  } else {
    imageUrl.value = props.imageUrl;
    containerClass.value = "about-me-container";
    imageClass.value = "profile-picture";
  }
};
</script>

<template>
  <div :class="containerClass" class="brown">
    <aside class="about-me-side">
      <img
        :src="imageUrl"
        :class="imageClass"
        alt=""
        @click="changeImageSize"
      />
      <div class="links">
        <Link
          linkUrl="https://github.com/davidmikulic44/"
          imageUrl="/src/assets/Github.svg"
          imageClass="about-me-link"
        ></Link>
        <Link
          linkUrl="https://www.linkedin.com/in/david-mikuli%C4%87-b43a83295/"
          imageUrl="/src/assets/LinkedIn.svg"
          imageClass="about-me-link"
        ></Link>
      </div>
    </aside>
    <section class="about-me-text">
      <h1 class="about-me-heading">David Mikulić</h1>
      <div class="desc-container">
        <p class="project-description">
          Završio sam
          <a
            href="http://www.ss-tehnicka-kt.skole.hr/"
            class="text-link"
            target="_blank"
            >Tehničku školu u Kutini</a
          >, smjer tehničara za računarstvo. Trenutno studiram na
          <a
            href="https://www.ferit.unios.hr/"
            class="text-link"
            target="_blank"
            >FERIT-u</a
          >
          u
          <a href="https://www.osijek.hr" class="text-link" target="_blank"
            >Osijeku</a
          >
          i 3. sam godina sturčnog studija računarstva. Radio sam studentske
          poslove u
          <a href="https://selk.hr/" class="text-link" target="_blank"
            >SELK d.d.</a
          >
          gdje sam učio koristiti framework
          <a
            href="https://dotnet.microsoft.com/en-us/apps/aspnet/web-apps/blazor"
            class="text-link"
            target="_blank"
            >Blazor</a
          >
          u programskom jeziku C#. Stručnu praksu sam odradio 2024. godine u
          <a href="https://factory.dev/" class="text-link">Factory d.o.o.</a>
          gdje sam se susreo s radom u frameworku
          <a href="https://vuejs.org/" class="text-link" target="_blank"
            >Vue.js</a
          >
          za frontend development, koja je podrazumjevala razumijevanje HTML-a,
          ekstenzije CSS-a:
          <a href="https://sass-lang.com/" class="text-link" target="_blank"
            >SASS</a
          >, Javascripta te biblioteke
          <a href="https://jquery.com/" class="text-link" target="_blank"
            >jQuery</a
          >. Također imam iskustva s programskim jezikom Python u kojemu sam
          radio strojno učenje te framework
          <a href="" class="text-link" target="_blank">Django</a> za backend
          development.
        </p>
      </div>
    </section>
  </div>
</template>
