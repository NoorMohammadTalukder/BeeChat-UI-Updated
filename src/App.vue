<template>
  <router-view></router-view>
  <!-- <the-home></the-home> -->
  <!-- <the-ab></the-ab> -->
</template>

<script>
// import TheHome from './components/TheHome.vue';
// import TheAb from './components/TheAb.vue';

export default {
  // name: 'App',
  // components: {
  //   // TheHome,
  //   TheAb
  // }
};
</script>

<style>
::-webkit-scrollbar {
  width: 5px;
  /* display: none; */
}

/* Track */
::-webkit-scrollbar-track {
  border-radius: 10px;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: #44474798;

  border-radius: 5px;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: rgba(70, 69, 69, 0.726);
}

body {
  font-family: "Roboto", sans-serif;
  scroll-behavior: smooth;
 
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
</style>
