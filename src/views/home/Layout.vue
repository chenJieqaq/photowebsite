<template>
  <div class="container">
    <header>
      <nar-bar></nar-bar>
    </header>
    <main>
      <router-view></router-view>
    </main>
    <footer>Footer</footer>
  </div>
</template>

<style>
html, body {
  height: 100%;
}
.container {
  position: relative;
  height: 100%;
  display: flex;
  flex-direction: column;
}

header {
  height: 60px;
  background-color: #f0f0f0;
}

main {
  flex: 1;
  background-color: #fff;
}

footer {
  margin-top: auto;
  /*bottom: 0;*/
  width: 100%;
  height: 60px;
  background-color: #f0f0f0;
}
</style>
<script>
import NarBar from "@/components/NarBar";
export default {
  components: {NarBar}
}
</script>
