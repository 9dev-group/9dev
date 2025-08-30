<template>
  <v-card class="location-card modern-card" elevation="0">
    <!-- Card Header -->
    <div class="card-header">
      <div class="header-content">
        <v-avatar size="48" color="primary" class="elevation-2">
          <v-icon icon="mdi-map-marker" color="white" size="24" />
        </v-avatar>
        <div class="header-text">
          <h3 class="card-title">모임 장소</h3>
          <p class="card-subtitle">매주 토·일요일 중 편한 시간에</p>
        </div>
      </div>
    </div>
    
    <!-- Interactive Map -->
    <div class="map-container">
      <iframe 
        id="googleMap" 
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6698.203586195973!2d126.96890556411533!3d37.47494020686279!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357ca037ef2cc5df%3A0x78c5a26b1c43607f!2sCAFE%20BONITO!5e0!3m2!1sko!2skr!4v1756537055712!5m2!1sko!2skr" 
        frameborder="0" 
        allowfullscreen
        class="map-iframe"
        loading="lazy"
        title="9DEV 모임 장소 지도"
      ></iframe>
      <div class="map-overlay">
        <v-chip color="primary" variant="elevated" size="small">
          <v-icon start icon="mdi-map-marker" />
          사당역 근처
        </v-chip>
      </div>
    </div>
    
    <!-- Location Details -->
    <v-card-text class="location-details pa-6">
      <div class="location-info">
        <h4 class="location-name">사당역 카페</h4>
        
        <div class="detail-list">
          <div class="detail-item">
            <v-icon icon="mdi-map-marker" color="primary" size="20" />
            <div class="detail-content">
              <span class="detail-label">주소</span>
              <span class="detail-value">서울 관악구 남부순환로 2032 1층 카페보니또</span>
            </div>
          </div>
          
          <div class="detail-item">
            <v-icon icon="mdi-subway" color="success" size="20" />
            <div class="detail-content">
              <span class="detail-label">교통</span>
              <span class="detail-value">사당역 6번 출구 도보 8분</span>
            </div>
          </div>
          
          <div class="detail-item">
            <v-icon icon="mdi-clock" color="info" size="20" />
            <div class="detail-content">
              <span class="detail-label">시간</span>
              <span class="detail-value">매주 토·일요일 중 편한 시간에</span>
            </div>
          </div>
        </div>
        
        <div class="location-actions">
          <v-btn
            variant="elevated"
            color="primary"
            size="large"
            class="direction-btn"
            href="https://maps.google.com/?q=강남역"
            target="_blank"
            rel="noopener noreferrer"
          >
            <v-icon start icon="mdi-directions" />
            길찾기
          </v-btn>
          
          <v-btn
            variant="outlined"
            color="primary"
            size="large"
            class="ml-3"
            @click="copyAddress"
          >
            <v-icon start icon="mdi-content-copy" />
            주소 복사
          </v-btn>
        </div>
      </div>
    </v-card-text>
  </v-card>
</template>

<script setup>
import { ref } from 'vue'

const copyAddress = async () => {
  try {
    await navigator.clipboard.writeText('서울 관악구 남부순환로 2032 1층 카페보니또')
    // You could add a toast notification here
  } catch (err) {
    console.error('주소 복사 실패:', err)
  }
}
</script>

<style scoped>
.location-card {
  background: rgba(255, 255, 255, 0.95) !important;
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.3);
  border-radius: 24px;
  transition: all 0.4s ease;
  height: 100%;
  overflow: hidden;
}

.location-card:hover {
  background: rgba(255, 255, 255, 1) !important;
  transform: translateY(-8px);
  box-shadow: 0 25px 50px rgba(0, 0, 0, 0.15);
}

.card-header {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  padding: 1.5rem;
  color: white;
}

.card-header .header-content {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.card-header .header-content .header-text .card-title {
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 0.25rem;
}

.card-header .header-content .header-text .card-subtitle {
  font-size: 0.9rem;
  opacity: 0.9;
  margin: 0;
}

.map-container {
  position: relative;
  width: 100%;
  height: 280px;
  overflow: hidden;
}

.map-container .map-iframe {
  width: 100%;
  height: 100%;
  border: none;
  transition: transform 0.3s ease;
  filter: grayscale(20%);
}

.map-container .map-iframe:hover {
  filter: grayscale(0%);
  transform: scale(1.02);
}

.map-container .map-overlay {
  position: absolute;
  top: 1rem;
  left: 1rem;
  z-index: 2;
}

.location-details {
  background: white;
}

.location-details .location-info .location-name {
  font-size: 1.5rem;
  font-weight: 700;
  color: #2c3e50;
  margin-bottom: 1.5rem;
}

.location-details .location-info .detail-list {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-bottom: 2rem;
}

.location-details .location-info .detail-list .detail-item {
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  padding: 1rem;
  background: rgba(102, 126, 234, 0.05);
  border-radius: 12px;
  border-left: 3px solid rgba(102, 126, 234, 0.3);
  transition: all 0.3s ease;
}

.location-details .location-info .detail-list .detail-item:hover {
  background: rgba(102, 126, 234, 0.1);
  transform: translateX(5px);
}

.location-details .location-info .detail-list .detail-item .detail-content {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
}

.location-details .location-info .detail-list .detail-item .detail-content .detail-label {
  font-size: 0.85rem;
  font-weight: 600;
  color: rgba(0, 0, 0, 0.6);
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.location-details .location-info .detail-list .detail-item .detail-content .detail-value {
  font-size: 1rem;
  font-weight: 500;
  color: #2c3e50;
}

.location-details .location-info .location-actions {
  display: flex;
  gap: 0.75rem;
  flex-wrap: wrap;
}

.location-details .location-info .location-actions .direction-btn {
  font-weight: 600;
  text-transform: none;
}

.location-details .location-info .location-actions .direction-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(102, 126, 234, 0.3);
}

.location-details .location-info .location-actions .v-btn {
  font-weight: 600;
  text-transform: none;
}

.location-details .location-info .location-actions .v-btn:hover {
  transform: translateY(-2px);
}

/* Responsive Design */
@media (max-width: 768px) {
  .map-container {
    height: 220px;
  }
  
  .location-actions {
    flex-direction: column;
  }
  
  .location-actions .ml-3 {
    margin-left: 0 !important;
  }
}

@media (max-width: 480px) {
  .card-header .header-content {
    flex-direction: column;
    text-align: center;
    gap: 0.75rem;
  }
  
  .map-container {
    height: 200px;
  }
}
</style>