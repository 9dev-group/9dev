<template>
  <section>
    <h2>소개</h2>
    <p v-for="message in messages">{{ message }}</p>
  </section>
</template>

<script>
export default {
  data() {
    return {
      messages: [
        '스터디의 공통 주제는 없습니다',
        '중요한 것은 개발자로서 성장하고 싶은 욕심인것 같습니다',
        '퇴근 후 혹은 주말에 부담없이 같이 스터디할 수 있는 모임을 지향하고 있습니다'
      ]
    }
  }
}
</script>

<style>

</style>
