<template>
  <div>
    <div class="header">
      <ul>
        <li></li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 50px;
  background-color: #292c2f;
  color: #ffffff;

  /*吸顶效果*/
  /* position: sticky;
        position: -webkit-sticky;    !*兼容 -webkit 内核的浏览器*!
        top: 0px;                    !*必须设一个值，否则不生效*!*/
}
</style>
