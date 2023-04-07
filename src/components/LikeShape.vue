<template>
  <div class="like-container" @click="toggleLike">
    <svg v-if="isLiked" class="like-icon is-active" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
      <path d="M20.8 4.4c-2.5-2.5-6.5-2.5-9 0l-.8.8-.8-.8c-2.5-2.5-6.5-2.5-9 0s-2.5 6.5 0 9l9 9 9-9c2.5-2.5 2.5-6.5 0-9z"/>
    </svg>
    <svg v-else class="like-icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
      <path d="M12 20.8l-.4.4-.4-.4c-3.6-3.6-9.4-3.6-13 0-3.6 3.6-3.6 9.4 0 13s9.4 3.6 13 0c3.6-3.6 3.6-9.4 0-13zM16.5 9c-.8 0-1.6.3-2.1.8L12 12.6l-2.4-2.4c-.6-.6-1.4-.8-2.1-.8s-1.6.3-2.1.8c-1.2 1.2-1.2 3.1 0 4.2l4.5 4.5c.6.6 1.4.9 2.1.9s1.6-.3 2.1-.8l4.5-4.5c1.2-1.1 1.2-3 0-4.2-.5-.5-1.3-.8-2.1-.8z"/>
    </svg>
    <span class="like-count">{{ likeCount }}</span>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isLiked: false,
      likeCount: 0
    }
  },
  methods: {
    toggleLike() {
      this.isLiked = !this.isLiked;
      if (this.isLiked) {
        this.likeCount++;
      } else {
        this.likeCount--;
      }
    }
  }
}
</script>

<style scoped>
.like-container {
  display: flex;
  align-items: center;
  cursor: pointer;
}
.like-icon {
  width: 24px;
  height: 24px;
  margin-right: 5px;
  fill: #000;
  transition: fill 0.2s ease-in-out;
}
.like-icon.is-active {
  fill: #f44336;
}
.like-count {
  font-size: 14px;
}
</style>
