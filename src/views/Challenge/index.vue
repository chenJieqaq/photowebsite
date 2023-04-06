<template>
  <div class="challenge-container">
    <div class="challenge-header">
      <h2>{{challengeTitle}}</h2>
      <p>{{challengeDescription}}</p>
    </div>
    <div class="challenge-gallery">
      <div v-for="photo in photos" :key="photo.id" class="photo-card">
        <img :src="photo.url" alt="Photo" style="width: 300px; height: 200px;">
        <div class="photo-info">
          <h3>{{photo.title}}</h3>
          <p>{{photo.description}}</p>
          <button @click="likePhoto(photo.id)">
            {{photo.likes}} likes
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      challengeTitle: 'Monthly Photo Challenge: Nature',
      challengeDescription: 'Take a photo of a natural scene and submit it to the challenge for a chance to win prizes!',
      photos: [
        {
          id: 1,
          title: '湖边的日落',
          description: 'Taken during a camping trip last summer',
          url: 'https://s2.loli.net/2023/04/06/JW2De5ANYPUIxsg.jpg',
          likes: 12
        },
        {
          id: 2,
          title: 'Flowers in the park',
          description: 'A colorful array of flowers in a local park',
          url: '@/assets/images/sunset.jpg',
          likes: 8
        },
        {
          id: 3,
          title: 'Mountain vista',
          description: 'View from the top of a nearby mountain',
          url: 'https://example.com/mountain.jpg',
          likes: 5
        }
      ]
    }
  },
  methods: {
    likePhoto(id) {
      const photo = this.photos.find(p => p.id === id)
      photo.likes++
    }
  }
}
</script>

<style>
/* Add styling as needed */
</style>
