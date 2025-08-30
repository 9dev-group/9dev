<template>
  <v-card class="location-card" elevation="8" hover>
    <v-card-title class="card-title">
      <v-icon size="32" color="primary" class="mr-3">mdi-map-marker</v-icon>
      <span class="title-text">모임 장소</span>
    </v-card-title>
    
    <v-card-text class="pa-0">
      <div class="map-container">
        <iframe 
          id="googleMap" 
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12666.555472892378!2d126.9322982!3d37.4692477!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357c9fe7b06520f5%3A0x416113ca566fa354!2z67Cc66Oo7Yag!5e0!3m2!1sko!2skr!4v1545546403982" 
          frameborder="0" 
          allowfullscreen
          class="map-iframe"
        ></iframe>
      </div>
      
      <div class="location-info pa-6">
        <h3 class="location-name">강남역 카페</h3>
        <p class="location-address">
          <v-icon size="16" color="primary" class="mr-2">mdi-map-marker</v-icon>
          서울특별시 강남구 강남대로 123
        </p>
        <p class="location-details">
          <v-icon size="16" color="primary" class="mr-2">mdi-subway</v-icon>
          강남역 2번 출구에서 도보 5분
        </p>
        <p class="location-details">
          <v-icon size="16" color="primary" class="mr-2">mdi-clock</v-icon>
          매주 토요일 오후 2시 - 6시
        </p>
        
        <v-btn
          color="primary"
          outlined
          class="mt-4"
          href="https://maps.google.com/?q=강남역"
          target="_blank"
        >
          <v-icon left>mdi-directions</v-icon>
          길찾기
        </v-btn>
      </div>
    </v-card-text>
  </v-card>
</template>

<style scoped>
.location-card {
  border-radius: 20px;
  background: white;
  transition: all 0.3s ease;
  height: 100%;
  overflow: hidden;
}

.location-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
}

.card-title {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 1.5rem;
  display: flex;
  align-items: center;
}

.title-text {
  font-size: 1.5rem;
  font-weight: 600;
}

.map-container {
  position: relative;
  width: 100%;
  height: 250px;
  overflow: hidden;
}

.map-iframe {
  width: 100%;
  height: 100%;
  border: none;
  transition: transform 0.3s ease;
}

.location-card:hover .map-iframe {
  transform: scale(1.05);
}

.location-info {
  background: white;
}

.location-name {
  font-size: 1.3rem;
  font-weight: 700;
  color: #2c3e50;
  margin-bottom: 1rem;
}

.location-address {
  font-size: 1rem;
  color: #7f8c8d;
  margin-bottom: 0.5rem;
  display: flex;
  align-items: center;
}

.location-details {
  font-size: 0.9rem;
  color: #95a5a6;
  margin-bottom: 0.5rem;
  display: flex;
  align-items: center;
}

/* 반응형 디자인 */
@media (max-width: 600px) {
  .title-text {
    font-size: 1.3rem;
  }
  
  .location-name {
    font-size: 1.2rem;
  }
  
  .location-address {
    font-size: 0.9rem;
  }
  
  .location-details {
    font-size: 0.8rem;
  }
  
  .map-container {
    height: 200px;
  }
}
</style>
