<template>
  <v-card 
    ref="cardRef"
    class="profile-card modern-card" 
    elevation="0"
    @mouseenter="onCardHover"
    @mouseleave="onCardLeave"
  >
    <!-- Profile Header with Glassmorphism -->
    <div class="card-header">
      <div class="header-background"></div>
      <div class="profile-image-container">
        <div class="image-ring">
          <img 
            :src="profile.image" 
            :alt="`${profile.name}의 프로필`"
            class="profile-image"
            @error="handleImageError"
            @load="onImageLoad"
            loading="lazy"
          />
        </div>
        
        <!-- Status indicator -->
        <div class="status-indicator online">
          <v-icon icon="mdi-circle" size="12" color="success" />
        </div>
        
        <!-- Hover overlay -->
        <div class="image-overlay">
          <v-btn
            v-if="profile.link"
            icon
            size="small"
            color="white"
            variant="elevated"
            :href="profile.link"
            target="_blank"
            rel="noopener noreferrer"
            @click.stop
          >
            <v-icon icon="mdi-github" />
          </v-btn>
        </div>
      </div>
    </div>
    
    <!-- Profile Content -->
    <v-card-text class="card-content">
      <div class="profile-info">
        <h3 class="profile-name">{{ profile.name }}</h3>
        
        <v-chip
          size="small"
          :color="getProfessionColor(profile.profession)"
          variant="tonal"
          class="profession-chip"
        >
          <v-icon start :icon="getProfessionIcon(profile.profession)" size="16" />
          {{ profile.profession }}
        </v-chip>
        
        <blockquote class="profile-motto">
          <v-icon icon="mdi-format-quote-open" size="16" class="quote-icon" />
          {{ profile.motto }}
          <v-icon icon="mdi-format-quote-close" size="16" class="quote-icon" />
        </blockquote>
      </div>
      
      <!-- Social Links -->
      <div class="profile-actions" v-if="profile.link">
        <v-btn
          variant="outlined"
          color="primary"
          size="small"
          :href="profile.link"
          target="_blank"
          rel="noopener noreferrer"
          class="github-btn"
        >
          <v-icon start icon="mdi-github" />
          GitHub
        </v-btn>
      </div>
    </v-card-text>
    
    <!-- Decorative corner -->
    <div class="corner-decoration">
      <v-icon icon="mdi-code-tags" size="16" color="primary" opacity="0.3" />
    </div>
  </v-card>
</template>

<script setup>
import { ref } from 'vue'
import { gsap } from 'gsap'

defineProps({
  profile: {
    type: Object,
    required: true
  }
})

const cardRef = ref(null)

const handleImageError = (event) => {
  event.target.src = 'https://via.placeholder.com/120x120/667eea/ffffff?text=' + encodeURIComponent('👤')
}

const onImageLoad = (event) => {
  // 모바일에서는 애니메이션 비활성화
  if (window.innerWidth <= 768) return
  
  if (event.target) {
    gsap.fromTo(event.target, 
      { scale: 0, rotation: 180 },
      { scale: 1, rotation: 0, duration: 0.8, ease: "back.out(1.7)" }
    )
  }
}

const onCardHover = () => {
  // 모바일에서는 애니메이션 비활성화
  if (window.innerWidth <= 768) return
  
  if (cardRef.value) {
    gsap.to(cardRef.value, {
      y: -12,
      rotateY: 5,
      duration: 0.4,
      ease: "power2.out"
    })
  }
}

const onCardLeave = () => {
  // 모바일에서는 애니메이션 비활성화
  if (window.innerWidth <= 768) return
  
  if (cardRef.value) {
    gsap.to(cardRef.value, {
      y: 0,
      rotateY: 0,
      duration: 0.4,
      ease: "power2.out"
    })
  }
}

const getProfessionColor = (profession) => {
  const colorMap = {
    '웹 개발자': 'primary',
    '서버 개발자': 'success',
    '안드로이드 개발자': 'info',
    '솔루션 개발자': 'warning',
    '프론트 개발자': 'secondary',
    '군인': 'error'
  }
  return colorMap[profession] || 'primary'
}

const getProfessionIcon = (profession) => {
  const iconMap = {
    '웹 개발자': 'mdi-web',
    '서버 개발자': 'mdi-server',
    '안드로이드 개발자': 'mdi-android',
    '솔루션 개발자': 'mdi-cog',
    '프론트 개발자': 'mdi-monitor',
    '군인': 'mdi-shield'
  }
  return iconMap[profession] || 'mdi-code-tags'
}
</script>

<style scoped>

.profile-card {
  background: rgba(255, 255, 255, 0.95) !important;
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.3);
  border-radius: 24px;
  transition: all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);
  overflow: hidden;
  height: 100%;
  position: relative;
  transform-style: preserve-3d;
  perspective: 1000px;
}

.profile-card:hover {
  background: rgba(255, 255, 255, 1) !important;
  box-shadow: 0 25px 50px rgba(0, 0, 0, 0.15);
  border-color: rgba(102, 126, 234, 0.3);
}

.card-header {
  position: relative;
  padding: 2.5rem 1.5rem 1.5rem;
  text-align: center;
  overflow: hidden;
  
  .header-background {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    opacity: 0.9;
  }
  
  .header-background::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Ccircle cx='3' cy='3' r='3'/%3E%3Ccircle cx='13' cy='13' r='3'/%3E%3C/g%3E%3C/svg%3E") repeat;
  }
  
  .profile-image-container {
    position: relative;
    display: inline-block;
    z-index: 2;
    
    .image-ring {
      position: relative;
      padding: 4px;
      border-radius: 50%;
      background: linear-gradient(45deg, rgba(255, 255, 255, 0.3), rgba(255, 255, 255, 0.1));
      
      .profile-image {
        width: 120px;
        height: 120px;
        border-radius: 50%;
        object-fit: cover;
        display: block;
        transition: all 0.4s ease;
        border: 3px solid rgba(255, 255, 255, 0.8);
      }
      
      .profile-image:hover {
        transform: scale(1.05);
      }
    }
    
    .status-indicator {
      position: absolute;
      bottom: 8px;
      right: 8px;
      width: 20px;
      height: 20px;
      border-radius: 50%;
      background: white;
      display: flex;
      align-items: center;
      justify-content: center;
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
    }
    
    .image-overlay {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: rgba(0, 0, 0, 0.7);
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      opacity: 0;
      transition: all 0.3s ease;
      backdrop-filter: blur(5px);
    }
  }
  
  .profile-image-container:hover .image-overlay {
    opacity: 1;
  }
}

.card-content {
  padding: 2rem 1.5rem;
  text-align: center;
  position: relative;
  z-index: 2;
  
  .profile-info {
    margin-bottom: 1.5rem;
    
    .profile-name {
      font-size: 1.5rem;
      font-weight: 700;
      color: #2c3e50;
      margin-bottom: 1rem;
      line-height: 1.2;
    }
    
    .profession-chip {
      margin-bottom: 1.5rem;
      font-weight: 500;
      text-transform: none;
    }
    
    .profile-motto {
      font-size: 1rem;
      color: rgba(0, 0, 0, 0.7);
      line-height: 1.6;
      margin: 0;
      font-style: italic;
      position: relative;
      padding: 1rem;
      background: rgba(102, 126, 234, 0.05);
      border-radius: 12px;
      border-left: 3px solid rgba(102, 126, 234, 0.3);
      
      .quote-icon {
        vertical-align: baseline;
        opacity: 0.5;
      }
      
      .quote-icon:first-child {
        margin-right: 0.25rem;
      }
      
      .quote-icon:last-child {
        margin-left: 0.25rem;
      }
    }
  }
  
  .profile-actions {
    .github-btn {
      font-weight: 600;
      text-transform: none;
      border-radius: 16px;
      transition: all 0.3s ease;
    }
    
    .github-btn:hover {
      background: rgba(102, 126, 234, 0.1);
      transform: translateY(-2px);
      box-shadow: 0 4px 12px rgba(102, 126, 234, 0.3);
    }
  }
}

.corner-decoration {
  position: absolute;
  top: 1rem;
  right: 1rem;
  z-index: 1;
}

/* Responsive Design */
@media (max-width: 768px) {
  .card-header {
    padding: 2rem 1rem 1rem;
  }
  
  .card-header .profile-image-container .image-ring .profile-image {
    width: 100px;
    height: 100px;
  }
  
  .card-content {
    padding: 1.5rem 1rem;
  }
  
  .card-content .profile-name {
    font-size: 1.3rem;
  }
  
  .card-content .profile-motto {
    font-size: 0.9rem;
  }
}

@media (max-width: 480px) {
  .card-header .profile-image-container .image-ring .profile-image {
    width: 80px;
    height: 80px;
  }
  
  .card-content .profile-name {
    font-size: 1.2rem;
  }
  
  .card-content .profile-motto {
    font-size: 0.85rem;
  }
}

</style>