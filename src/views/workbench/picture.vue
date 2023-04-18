<template>
<div class="home">
  <img :src="item" alt="" v-for="(item, index) in imgList" :key="index" />

</div>
</template>
<script>
import VueWaterfall from 'vue-waterfall'
export default {
  // eslint-disable-next-line vue/no-unused-components
  components: { VueWaterfall },
  data(){
    return {
      imgList: [],
      imgUrl: '../../assets/images'
    }}
,
  mounted(){
    console.log(this.imgUrl)
    const imgList = [];

    const files = require.context('../../assets/images', true, /\.*\.jpg|jpeg|png$/).keys();
    files.forEach((e) =>{
      imgList.push(require('../../assets/images' + e.slice(1)));
    });
    this.imgList = imgList;
  },
}
</script>
<style scoped>
img{
  width: 200px;
  height: 200px;
}
.waterfall {
  margin: 20px auto;
  width: 90%;
}


</style>
