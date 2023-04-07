<template>
  <div class="slider-container">
    <swiper :options="swiperOptions">
      <swiper-slide v-for="(slide, index) in slides" :key="index">
        <img :src="slide.image" />
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
      <div class="swiper-button-prev" slot="button-prev"></div>
      <div class="swiper-button-next" slot="button-next"></div>
    </swiper>
    <div class="introduction">
      <!-- 网站介绍文字 -->
      <div style="font-family: 'Microsoft Yahei'; text-align: center; height: 100vh; display: flex; justify-content: center; align-items: center;">
        <p style="width: 100%; font-size: 24px;">欢迎来到我们的摄影网站！我们的网站致力于为摄影爱好者们提供一个充满挑战、互动和分享的平台。我们相信每张照片都有自己的故事和美丽，因此我们提供了一个实时照片分享的功能，让您可以在第一时间分享您的作品，与其他摄影爱好者们一起分享、学习和成长。除了分享您的照片外，我们还提供了各种摄影挑战活动，让您可以通过不同的主题和任务来挑战自己的摄影技巧和创意，还能赢取丰厚的奖励哦！最重要的是，我们的网站是一个社交互动的平台，您可以与其他摄影爱好者们互动交流、分享技巧和心得，建立起真正意义上的摄影社区。加入我们，让我们一起探索和发现摄影的美丽和无限可能吧！</p>
      </div>

    </div>

  </div>
</template>

<script>

import 'swiper/css/swiper.css';
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'

export default {
  components: {
    Swiper,
    SwiperSlide
  },
  data () {
    return {
      slides: [
        {
          image: 'https://cdn.pixabay.com/photo/2016/11/14/23/54/minneapolis-1824972_960_720.jpg'
        },
        {
          image: 'https://s2.loli.net/2023/04/06/fs1deUbMz7VHhC6.png'
        },
        {
          image: 'https://s2.loli.net/2023/04/06/hfqC6zQ41RHPUYG.png'
        }
      ],
      swiperOptions: {
        pagination: {
          el: '.swiper-pagination'
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        },
        loop: true
      }
    }
  }
}
</script>
<style>
.swiper-slide img {
  width: 100%;
  height: 100vh;
  object-fit: cover;
}
.introduction {
  height: 1000px; /* 网站介绍文字框的高度，可根据实际需要自行调整 */
  background-image: url("https://img.1ppt.com/uploads/allimg/1705/1_170518085106_1.jpg");
  /* 其他样式 */
}
</style>
