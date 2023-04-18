<template>
  <div class="album-container">
    <div class="button-container">
<picbtn></picbtn>
<!--      <el-button type="success" @click="dialogVisible = true" >创建相册</el-button>-->

    </div>
    <div class="album-row">
      <div class="album-box">
        <img src="@/assets/images/06.jpg" alt="First Album"  style="height: 85%"@click="oneimages">
        <p>第一个相册</p>
              <upload></upload>
      </div>
      <div class="album-box">
        <img src="@/assets/images2/a1.jpg" alt="Second Album" style="height: 85%" @click="oneimages2">
        <p>第二个相册</p>
        <upload></upload>
      </div>
    </div>
    <div class="album-row">
      <div class="album-box">
        <img src="@/assets/images3/b3.jpg" alt="Third Album" @click="oneimages3">
        <p>第三个相册</p>
        <upload></upload>
      </div>
      <div class="album-box">
        <img src="@/assets/images4/d1.jpg" alt="Fourth Album" @click="oneimages4">
        <p>第四个相册</p>
        <upload></upload>
      </div>
    </div>
    <!-- 其他相册行 -->
  </div>

</template>

<script>
import Upload from "@/views/workbench/upload";
import Picture from "@/views/workbench/picture.vue";
import picture from "@/views/workbench/picture";
import Picbtn from "@/views/workbench/PicBtn";

export default {
  components: {Picbtn, Upload},
  data() {
    return {
      dialogVisible: false,
      albums: [
        {
          title: '相册1',
          thumbnail: 'https://s2.loli.net/2023/04/06/JW2De5ANYPUIxsg.jpg',//

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
  },
  methods: {
    oneimages(){
      // this.$router.push({ component: Picture, params: { id: 123 }})
      // this.$router.push(path:"/picture",params: { id: 123 } )
      this.$router.push({ name: 'picture', params: { id: 123 }})
    },
    oneimages2(){
      // this.$router.push({ component: Picture, params: { id: 123 }})
      // this.$router.push(path:"/picture",params: { id: 123 } )
      this.$router.push({ name: 'picture2', params: { id: 123 }})
    },
    oneimages3(){
      // this.$router.push({ component: Picture, params: { id: 123 }})
      // this.$router.push(path:"/picture",params: { id: 123 } )
      this.$router.push({ name: 'picture3', params: { id: 123 }})
    },
    oneimages4(){
      // this.$router.push({ component: Picture, params: { id: 123 }})
      // this.$router.push(path:"/picture",params: { id: 123 } )
      this.$router.push({ name: 'picture4', params: { id: 123 }})
    },



    handleClose(done) {
      this.$confirm('确认关闭？')
        .then(_ => {
          done();
        })
        .catch(_ => {});
    }


  }
}
</script>

<style scoped>
.album-container {
  display: flex;
  flex-wrap: wrap;
}

.album-row {
  display: flex;
  width: 100%;
  justify-content: space-between;
  margin-bottom: 1rem;
}

.album-box {
  width: 48%;
  text-align: center;
}

.album-box img {
  width: 100%;
  height: auto;
}

.album-box p {
  margin-top: 0.5rem;
  font-size: 0.8rem;
}

img{
  width: 500px;
  height: 500px;
}

.button-container {
  display: flex;
  justify-content: space-between;
}

.button-container button:first-child {
  margin-right: auto;
}

</style>
