<template>
  <div class="workbench">
    <!-- 相册展示区域 -->
    <div class="album-display">
      <img :src="firstAlbumImg" style="  width: 70%;
  height: 60%;
  margin: auto; margin-top: 0%;
  margin-left: 0%;
 "  alt="First Album">
      <img :src="secondAlbumImg"  style="
  margin-top: -54%;
  width: 30%;
  height: 30%;" alt="Second Album">

    </div>

    <!-- 操作按钮 -->
    <div class="action-buttons">
      <button @click="createAlbum">创建相册</button>
      <button @click="uploadPhoto">上传照片</button>
      <button @click="shareAlbum">分享相册</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      firstAlbumImg: require('@/assets/first-album.jpg'),
      secondAlbumImg: require('@/assets/second-album.jpg'),
    }
  },
  methods: {
    createAlbum() {
      // 处理创建相册逻辑
    },
    uploadPhoto() {
      // 处理上传照片逻辑
    },
    shareAlbum() {
      // 处理分享相册逻辑
    },
  },
}
</script>

<style>
.workbench {

  height: 100vh;
  width: 100vh;
}

.album-display {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50%;
  height: 50%;
  border: 1px solid #ccc;
}

.album-img {
  position: absolute;
  top: 0;
  left: 0;
}

.album-main {
  width: 50%;
  height: 50%;
  margin: auto;
  bottom: 0;
  right: 0;
}

.album-sub {
  margin-left: 90%;
  margin-top: 5%;
  width: 10%;
  height: 10%;
}

.action-buttons {
  display: flex;
  justify-content: center;
}

button {
  margin: 0 0.5rem;
}
</style>
