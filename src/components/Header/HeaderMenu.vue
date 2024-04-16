<script setup>
import { ref, onMounted } from "vue";
import { useRouter } from "vue-router";
import { RouterLink } from "vue-router";

const optionList1 = ["o meni", "projekti"];
const optionList2 = ["odabir studenta"];

const activeOption = ref(localStorage.getItem("activeCategory") || "omeni");
const router = useRouter();

const handleClick = (option) => {
  option = option.toLowerCase().replace(/\s/g, "");
  if (activeOption.value !== option) {
    activeOption.value = option;
    localStorage.setItem("activeCategory", option);
    router.push(option);
  }
};

const setActiveOption = () => {
  activeOption.value="omeni";
  localStorage.setItem("activeCategory", activeOption.value);
  console.log(activeOption.value);
}

onMounted(() => {
  if (!activeOption.value) {
    activeOption.value = "omeni";
    localStorage.setItem("activeCategory", "omeni");
  }
});

function capitalizeFirstLetter(str) {
  return str.substring(0, 1).toUpperCase() + str.substring(1);
}
</script>

<template>
  <div class="header-menu-container">
    <div class="header-menu-one-side">
      <RouterLink
        to="/davidmikulic/projects"
        v-for="(option, index) in optionList1"
        :key="index"
        class="header-menu-option"
        :class="{
          active: activeOption === option.toLowerCase().replace(/\s/g, ''),
        }"
        :id="option.toLowerCase().replace(/\s/g, '')"
        @click="handleClick(option)"
      >
        {{ capitalizeFirstLetter(option) }}
      </RouterLink>
    </div>
    <div class="header-menu-one-side">
      <RouterLink
        to="/"
        v-for="(option, index) in optionList2"
        :key="index"
        class="header-menu-option"
        :id="option.toLowerCase().replace(/\s/g, '')"
        @click="setActiveOption"
      >
        {{ capitalizeFirstLetter(option) }}
      </RouterLink>
    </div>
  </div>
</template>
