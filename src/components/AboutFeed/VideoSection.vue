<script setup>
import kutinaVideo from '../../assets/kutina.mp4'

</script>

<template>
  <section class="about-me-container vertical blue">
    <h1 class="about-me-heading">Video isječak o mom mjestu</h1>
    <video controls class="video">
      <source :src="kutinaVideo" />
    </video>
  </section>
</template>
