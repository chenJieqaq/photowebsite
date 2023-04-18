<template>
  <div class="home">
    <img :src="item" alt="" v-for="(item, index) in imgList" :key="index" />

  </div>
</template>
<script>
export default {
  name: 'Picture2',
  data(){
    return {
      imgList: [],
      imgUrl: '../../assets/images'
    }}
  ,
  mounted(){
    console.log(this.imgUrl)
    const imgList = [];
    const directoryPath = '../../assets/images2'
    const files = require.context('../../assets/images2', true, /\.*\.jpg|jpeg|png$/).keys();
    files.forEach((e) =>{
      imgList.push(require('../../assets/images2' + e.slice(1)));
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

</style>
