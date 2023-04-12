<template>
  <div class="challenge-container">
    <div class="challenge-header">
      <h2>{{challengeTitle}}</h2>
<!--分享作品-->
      <div class="share-button">
        <i class="icon-share"></i>
        <span class="text" @click="showModal = true">分享作品</span>
      </div>

      <!-- 分享作品模态框 -->
      <div v-if="showModal" class="modal">
        <div class="modal-content">
          <h2>分享作品</h2>

          <!-- 上传照片组件 -->
          <div class="form-group">
            <label for="photo">上传照片:</label>
            <input type="file" id="photo" @change="handlePhotoChange" />
          </div>

          <!-- 填写信息组件 -->
          <div class="form-group">
            <label for="title">主题:</label>
            <input type="text" id="title" v-model="title" />

            <label for="description">描述:</label>
            <textarea id="description" v-model="description"></textarea>
          </div>

          <!-- 提交按钮 -->
          <button @click="handleSubmit">提交</button>

          <!-- 上传状态提示 -->
          <p v-if="uploading">正在上传...</p>
          <p v-else-if="uploaded">上传完成!</p>

          <!-- 关闭按钮 -->
          <button @click="showModal = false">关闭</button>
        </div>
      </div>


    </div>

    <p>{{challengeDescription}}</p>
    <div class="challenge-gallery">
      <div v-for="photo in photos" :key="photo.id" class="photo-card">
        <img :src="photo.url" alt="Photo" style="width: 300px; height: 200px;">
        <div class="photo-info">
          <h3>{{photo.title}}</h3>
          <p>{{photo.description}}</p>
<!--          <button @click="likePhoto(photo.id)">-->
<!--            {{photo.likes}} likes-->
<!--          </button>-->
          <like-shape></like-shape>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import LikeShape from "@/components/LikeShape";
import ShareShape from "@/components/ShareShape";
export default {
  components: {LikeShape,ShareShape},
  data() {
    return {
      challengeTitle: 'Monthly Photo Challenge: Nature',
      challengeDescription: 'Take a photo of a natural scene and submit it to the challenge for a chance to win prizes!',
      photos: [
        {
          id: 1,
          title: '湖边的日落',
          description: '在湖边看风景',
          url: 'https://s2.loli.net/2023/04/06/JW2De5ANYPUIxsg.jpg',
          likes: 12
        },
        {
          id: 2,
          title: '春游',
          description: '踏青，乘早',
          url: 'https://thoughtcatalog.com/wp-content/uploads/2015/05/8116650545_27f5f6ef27_h.jpg',
          likes: 8
        },
        {
          id: 3,
          title: '爬山',
          description: 'View from the top of a nearby mountain',
          url: 'http://thepaper-prod-oldimagefromnfs.oss-cn-shanghai.aliyuncs.com/image/37/15/323.jpg',
          likes: 5
        }
      ],
      //分享作品表单的属性值
      showModal: false,
      photo: null,
      title: '',
      description: '',
      uploading: false,
      uploaded: false,
    }
  },
  methods: {
    likePhoto(id) {
      const photo = this.photos.find(p => p.id === id)
      photo.likes++
    },
handlePhotoChange(event) {
  this.photo = event.target.files[0];
},
handleSubmit() {
  // 构造表单数据
  const formData = new FormData();
  formData.append('photo', this.photo);
  formData.append('title', this.title);
  formData.append('description', this.description);

  // 发送表单数据
  this.uploading = true;
  fetch('/upload', {
    method: 'POST',
    body: formData,
  })
    .then(() => {
      this.uploading = false;
      this.uploaded = true;
    })
    .catch(() => {
      this.uploading = false;
      this.uploaded = false;
    });
},
  }
}
</script>

<style>
/* Add styling as needed */
.challenge-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px;
  background-color: #fff;
  border-bottom: 1px solid #e6e6e6;
}

.challenge-header .title {
  font-size: 28px;
  font-weight: bold;
  color: #333;
}

.challenge-header .share-button {
  display: flex;
  align-items: center;
  cursor: pointer;
}

.challenge-header .share-button .icon-share {
  display: inline-block;
  width: 16px;
  height: 16px;
  margin-right: 8px;
  background-image: url("https://cdn-icons-png.flaticon.com/512/25/25419.png");
  background-repeat: no-repeat;
  background-size: cover;
}

.challenge-header .share-button .text {
  font-size: 14px;
  font-weight: bold;
  color: #333;
}

</style>
