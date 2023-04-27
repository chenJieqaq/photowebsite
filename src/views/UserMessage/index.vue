<template>
  <div class="user-profile">


    <div class="user-profile__header">
      <div class="user-profile__avatar">
        <img src="../../assets/images/kabi.png" alt="avatar">
      </div>
      <h2 class="user-profile__username" >{{form.name}}</h2>
    </div>


    <div class="user-profile__bio">
      <p class="user-profile__bio-text">{{form.message}}</p>

      <button class="user-profile__edit-btn" @click="dialogFormVisible = true">编辑</button>

<!--      个人信息界面-->
      <el-dialog title="个人信息" :visible.sync="dialogFormVisible">
        <el-form :model="form">
          <el-form-item label="用户名" :label-width="formLabelWidth">
            <el-input v-model="form.name" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="标签" :label-width="formLabelWidth">
            <el-input v-model="form.message" autocomplete="off"></el-input>
          </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button @click="dialogFormVisible = false">取 消</el-button>
          <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
        </div>
      </el-dialog>


    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      dialogFormVisible: false,
      form: {
        name: 'John Doe',
        message: '热爱捕捉自然之美的热情摄影师.', // 个人标签
        region: '',
        delivery: false,
        type: [],
        resource: '',
        desc: ''
      },
      formLabelWidth: '120px'
    }
  }

}
</script>

<style scoped>
.user-profile {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
}

.user-profile__header {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
}

.user-profile__avatar {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  overflow: hidden;
  margin-right: 20px;
}

.user-profile__avatar img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.user-profile__username {
  font-size: 28px;
  font-weight: bold;
}

.user-profile__bio {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}

.user-profile__bio-text {
  font-size: 18px;
  text-align: center;
  margin-bottom: 20px;
}

.user-profile__edit-btn {
  border: none;
  background-color: #999;
  color: #fff;
  padding: 10px 20px;
  border-radius: 20px;
  font-size: 16px;
  cursor: pointer;
}
</style>
