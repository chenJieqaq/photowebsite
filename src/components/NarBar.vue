<template>
  <nav class="nav-menu">
    <div></div>
    <ul>
      <li><router-link to="/home">首页</router-link></li>
      <li><router-link to="/realtime">实时照片分享</router-link></li>
      <li><router-link to="/challenge">摄影挑战</router-link></li>
      <li><router-link to="/user">个人用户中心</router-link></li>
    </ul>
  </nav>
</template>

<style>
.nav-menu {
  display: flex;
  justify-content: space-between;
  align-items: center;
  /*background-color: #00BFFF;*/
  color: #fff;
  height: 60px;
  width: 100%;
  margin-left: 0%;
  border-bottom: 2px solid #B0C4DE;
  /*渐变色特效*/
  background: linear-gradient(45deg, #ff9d6c, #ff6c6c, #c86464, #8868a7, #7156a5, #3f4c9a, #3f4c9a, #4d4d4d);
  background-size: 400% 400%;
  animation: gradient 20s ease infinite;
}

ul {
  display: flex;
  margin: 0;
  padding: 0;
  list-style: none;
}

li {
  margin: 0 20px;
  font-size: 20px;
  cursor: pointer;
  text-align: center;
  line-height: 60px;
  transition: all 0.3s;
}

li:hover {
  background-color: #87CEFA;
}

a {
  color: inherit;
  text-decoration: none;
}


/*渐变色特效*/


@keyframes gradient {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}

</style>
