<template>
  <div>
    <input type="file" @change="onFileSelected" accept="image/*">
    <button type="success" @click="upload">上传</button>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name:'Upload',
  data() {
    return {
      file: null
    }
  },
  methods: {
    onFileSelected(event) {
      this.file = event.target.files[0]
    },
    upload() {
      const formData = new FormData()
      formData.append('file', this.file)
      axios.post('http://localhost:8099/api/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      })
        .then(response => {
          console.log(response.data);

          if(response.data=='上传成功'){
            alert('登录成功');
          }
        })
        .catch(error => {
          console.log(error)
        })
    }
  }
}
</script>
