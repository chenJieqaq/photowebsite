<template>
  <div>
    <div class="tags">
      <span v-for="tag in tags" :key="tag" class="tag">{{ tag }}</span>
    </div>
    <div class="photos">
      <div v-for="photo in photos" :key="photo.id" class="photo">
        <img :src="photo.src" alt="photo">
        <div class="info">
          <div class="user">{{ photo.user }}</div>
          <div class="caption">{{ photo.caption }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tags: ["校园", "风景", "科技", "职场"],
      photos: [
        {
          id: 1,
          src: "https://picsum.photos/id/1002/600/400",
          user: "John Doe",
          caption: "A beautiful sunset"
        },
        {
          id: 2,
          src: "https://picsum.photos/id/101/600/400",
          user: "Jane Doe",
          caption: "A cute puppy"
        },
        {
          id: 3,
          src: "https://picsum.photos/id/102/600/400",
          user: "Bob Smith",
          caption: "A delicious meal"
        }
      ]
    };
  }
};
</script>

<style>
.tags {
  display: flex;
  flex-wrap: wrap;
}

.tag {
  margin-right: 10px;
  margin-bottom: 10px;
  padding: 5px 10px;
  background-color: #ccc;
  border-radius: 5px;
  font-size: 14px;
  cursor: pointer;
}

.photo {
  margin: 20px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
}

.photo img {
  width: 100%;
}

.info {
  padding: 10px;
  background-color: #fff;
}

.user {
  font-weight: bold;
  margin-bottom: 5px;
}

.caption {
  font-size: 14px;
}
</style>
