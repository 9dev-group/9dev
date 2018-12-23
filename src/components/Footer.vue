<template>
  <footer>
    <p id="footer"> {{ message }} </p>
  </footer>
</template>

<script>
export default {
  data() {
    return {
      message: '©2018 9dev'
    }
  }
}
</script>

<style>
p#footer {
  font-size: 0.8rem;
}
</style>
