<template>
  <div>
    <el-row :gutter="20">
      <el-col :span="16">
        <h3>热门话题</h3>
        <el-card :body-style="{ padding: '10px' }" v-for="(item, index) in topics" :key="index">
          <div>{{ item.title }}</div>
          <div>{{ item.description }}</div>
          <div>
            <el-tag v-for="(tag, index) in item.tags" :key="index">{{ tag }}</el-tag>
          </div>
        </el-card>
      </el-col>
      <el-col :span="8">
        <h3>热门摄影师</h3>
        <el-card :body-style="{ padding: '10px' }" v-for="(item, index) in photographers" :key="index">
          <div>{{ item.name }}</div>
          <div>{{ item.location }}</div>
          <div>{{ item.intro }}</div>
          <div>
            <el-button type="primary" size="small">关注</el-button>
          </div>
        </el-card>
      </el-col>
    </el-row>
    <h3>最新摄影作品</h3>
    <el-row :gutter="20">
      <el-col :span="8" v-for="(item, index) in photos" :key="index">
        <el-card :body-style="{ padding: '10px' }">
          <img :src="item.src" alt="" style="width: 100%">
          <div>{{ item.title }}</div>
          <div>
            <el-button type="text" size="small">点赞 {{ item.likes }}</el-button>
            <el-button type="text" size="small">评论 {{ item.comments }}</el-button>
            <el-button type="text" size="small">分享 {{ item.shares }}</el-button>
          </div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      topics: [
        {
          title: '夏日海边',
          description: '留住你我共同的回忆',
          tags: ['海边', '夏天', '旅行'],
        },
        {
          title: '城市夜景',
          description: '感受城市的魅力',
          tags: ['夜景', '城市', '摄影'],
        },
        {
          title: '自然风光',
          description: '与大自然亲近，感受它的美好',
          tags: ['自然', '风光', '旅行'],
        },
      ],
      photographers: [
        {
          name: '张三',
          location: '北京市',
          intro: '摄影师，擅长人像摄影',
        },
        {
          name: '李四',
          location: '上海市',
          intro: '自然风光摄影师，多次获得国际大奖',
        },
        {
          name: '王五',
          location: '广州市',
          intro: '城市建筑摄影师，拥有丰丰富的城市摄影作品',
        },
      ],
      photos: [
        {
          title: '城市夜景',
          src: 'https://picsum.photos/200/300?random=1',
          likes: 20,
          comments: 5,
          shares: 3,
        },
        {
          title: '自然风光',
          src: 'https://picsum.photos/200/300?random=2',
          likes: 35,
          comments: 10,
          shares: 6,
        },
        {
          title: '夏日海边',
          src: 'https://picsum.photos/200/300?random=3',
          likes: 15,
          comments: 3,
          shares: 1,
        },
        {
          title: '城市建筑',
          src: 'https://picsum.photos/200/300?random=4',
          likes: 25,
          comments: 7,
          shares: 4,
        },
        {
          title: '美食摄影',
          src: 'https://picsum.photos/200/300?random=5',
          likes: 12,
          comments: 2,
          shares: 0,
        },
        {
          title: '人像摄影',
          src: 'https://picsum.photos/200/300?random=6',
          likes: 30,
          comments: 8,
          shares: 5,
        },
      ],
    };
  },
};
</script>
