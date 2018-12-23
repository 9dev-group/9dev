<template>
  <div class="card-container">
    <div class="card">
      <div class="front">
        <div class="cover"></div>
        <div class="user">
          <img src="src/images/default.png" width="100" height="100"/>
        </div>
        <div class="content">
          <div class="main">
            <h3 class="name">{{ profile.name }}</h3>
            <p class="profession">{{ profile.profession }}</p>
            <p class="text-center">{{ profile.motto }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Profile',
  props: ['profile'],
};
</script>

<style scoped>

</style>