<template>
  <section>
    <h2>장소</h2>
    <iframe id="googleMap" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12666.555472892378!2d126.9322982!3d37.4692477!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357c9fe7b06520f5%3A0x416113ca566fa354!2z67Cc66Oo7Yag!5e0!3m2!1sko!2skr!4v1545546403982" frameborder="0" style="border:0" allowfullscreen></iframe>
  </section>
</template>

<style>
iframe#googleMap {
  width: 600px;
  height: 450px;
}

@media (max-width: 768px) {
  iframe#googleMap {
    max-width: 400px;
    width: 100%;
    height: 450px;
  }
}
</style>
