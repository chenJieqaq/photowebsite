<template>
  <div class="container">
    <div v-for="(album, index) in albums" :key="index" class="album">
      <div class="album-thumbnail">
        <img :src="album.thumbnail" alt="">
        <div class="album-count">{{ album.count }}</div>
      </div>
      <div class="album-title">{{ album.title }}</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      albums: [
        {
          title: '相册1',
          thumbnail: 'https://s2.loli.net/2023/04/06/JW2De5ANYPUIxsg.jpg',

          count: 10
        },
        {
          title: '相册2',
          thumbnail: 'album2.jpg',

          count: 20
        },
        {
          title: '相册3',

          count: 30
        },
        {
          title: '相册4',

          count: 40
        }
      ]
    }
  }
}
</script>

<style scoped>
/* 清除默认样式 */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

/* 设置容器样式 */
.container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

/* 设置相册样式 */
.album {
  width: 48%;
  margin-bottom: 20px;
  border: 1px solid #ccc;
}

.album-thumbnail {
  position: relative;
}

.album-thumbnail img {
  width: 100%;
  display: block;
}

.second-thumbnail {
  position: absolute;
  top: 0;
  left: 0;
  width: 50px;
  height: 50px;
}

.album-count {
  position: absolute;
  bottom: 0;
  right: 0;
  background-color: #333;
  color: #fff;
  padding: 5px 10px;
  font-size: 12px;
}

.album-title {
  padding: 10px;
  text-align: center;
}
</style>
