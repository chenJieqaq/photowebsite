<template>
  <div>
    <el-button type="primary" @click="showDialog = true">创建相册</el-button>
    <el-dialog title="创建相册" :visible.sync="showDialog">
      <el-form ref="form" :model="form" label-width="100px">
        <el-form-item label="相册名称">
          <el-input v-model="form.albumName"></el-input>
        </el-form-item>
        <el-form-item label="活动时间">
          <el-date-picker type="datetime" v-model="form.activityTime"></el-date-picker>
        </el-form-item>
        <el-form-item label="拍摄城市">
          <el-input v-model="form.city"></el-input>
        </el-form-item>
        <el-form-item label="上传封面">
          <el-upload
            class="upload-demo"
            action="/upload"
            :on-success="handleUploadSuccess"
            :file-list="form.coverList">
            <el-button slot="trigger">选取文件</el-button>
            <el-button slot="tip" type="primary">只能上传jpg/png文件，且不超过2MB</el-button>
          </el-upload>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="showDialog = false">取消</el-button>
        <el-button type="primary" @click="submitForm">确定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name:'PicBtn',
  data() {
    return {
      showDialog: false,
      form: {
        albumName: '',
        activityTime: '',
        city: '',
        coverList: []
      }
    }
  },
  methods: {
    handleUploadSuccess(response, file, fileList) {
      this.form.coverList.push({
        url: URL.createObjectURL(file.raw),
        name: file.name
      });
    },
    submitForm() {
      this.$refs.form.validate(valid => {
        if (valid) {
          // 表单验证通过，可以提交表单
          console.log(this.form);
          // 关闭弹窗
          this.showDialog = false;
        } else {
          // 表单验证失败，不提交表单
          console.log('验证失败');
        }
      });
    }
  }
}
</script>
