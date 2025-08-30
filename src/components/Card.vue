<template>
  <v-card class="profile-card" elevation="4" hover>
    <div class="card-header">
      <div class="profile-image-container">
        <img 
          :src="profile.image" 
          :alt="profile.name"
          class="profile-image"
          @error="handleImageError"
        />
        <div class="image-overlay">
          <v-icon size="32" color="white">mdi-account</v-icon>
        </div>
      </div>
    </div>
    
    <v-card-text class="card-content">
      <h3 class="profile-name">{{ profile.name }}</h3>
      <p class="profile-profession">{{ profile.profession }}</p>
      <p class="profile-motto">{{ profile.motto }}</p>
      
      <div v-if="profile.link" class="profile-link">
        <v-btn
          small
          outlined
          color="primary"
          :href="profile.link"
          target="_blank"
          class="mt-3"
        >
          <v-icon left size="16">mdi-github</v-icon>
          GitHub
        </v-btn>
      </div>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  props: ['profile'],
  methods: {
    handleImageError(event) {
      // 이미지 로드 실패 시 기본 이미지로 대체
      event.target.src = 'src/assets/images/profiles/default.png';
    }
  }
};
</script>

<style scoped>
.profile-card {
  border-radius: 20px;
  background: white;
  transition: all 0.3s ease;
  overflow: hidden;
  height: 100%;
  position: relative;
}

.profile-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
}

.card-header {
  position: relative;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  padding: 2rem 1rem 1rem;
  text-align: center;
}

.profile-image-container {
  position: relative;
  display: inline-block;
  margin-bottom: 1rem;
}

.profile-image {
  width: 120px;
  height: 120px;
  border-radius: 50%;
  object-fit: cover;
  border: 4px solid white;
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.2);
  transition: all 0.3s ease;
}

.profile-card:hover .profile-image {
  transform: scale(1.1);
  box-shadow: 0 12px 35px rgba(0, 0, 0, 0.3);
}

.image-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.profile-card:hover .image-overlay {
  opacity: 1;
}

.card-content {
  padding: 1.5rem;
  text-align: center;
}

.profile-name {
  font-size: 1.5rem;
  font-weight: 700;
  color: #2c3e50;
  margin-bottom: 0.5rem;
  line-height: 1.2;
}

.profile-profession {
  font-size: 1rem;
  color: #667eea;
  font-weight: 600;
  margin-bottom: 1rem;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.profile-motto {
  font-size: 0.9rem;
  color: #7f8c8d;
  line-height: 1.5;
  margin-bottom: 1rem;
  font-style: italic;
}

.profile-link {
  margin-top: auto;
}

/* 애니메이션 효과 */
.profile-card {
  animation: fadeInUp 0.6s ease forwards;
  opacity: 0;
  transform: translateY(30px);
}

.profile-card:nth-child(1) { animation-delay: 0.1s; }
.profile-card:nth-child(2) { animation-delay: 0.2s; }
.profile-card:nth-child(3) { animation-delay: 0.3s; }
.profile-card:nth-child(4) { animation-delay: 0.4s; }
.profile-card:nth-child(5) { animation-delay: 0.5s; }
.profile-card:nth-child(6) { animation-delay: 0.6s; }
.profile-card:nth-child(7) { animation-delay: 0.7s; }
.profile-card:nth-child(8) { animation-delay: 0.8s; }
.profile-card:nth-child(9) { animation-delay: 0.9s; }
.profile-card:nth-child(10) { animation-delay: 1.0s; }
.profile-card:nth-child(11) { animation-delay: 1.1s; }
.profile-card:nth-child(12) { animation-delay: 1.2s; }

@keyframes fadeInUp {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* 반응형 디자인 */
@media (max-width: 600px) {
  .profile-image {
    width: 100px;
    height: 100px;
  }
  
  .profile-name {
    font-size: 1.3rem;
  }
  
  .profile-profession {
    font-size: 0.9rem;
  }
  
  .profile-motto {
    font-size: 0.8rem;
  }
}
</style>