<template>
  <div>
    <!-- 分享作品按钮 -->
    <button @click="showModal = true">分享作品</button>

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
</template>

<script>
export default {
  data() {
    return {
      showModal: false,
      photo: null,
      title: '',
      description: '',
      uploading: false,
      uploaded: false,
    };
  },
  methods: {
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
  },
};
</script>

<style>
.modal {
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
}

.modal-content {
  background-color: #fff;
  padding: 20px;
  border-radius: 5px;
}
</style>
