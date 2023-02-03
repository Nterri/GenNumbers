<template>
    <div class="content">
      <router-view>

      </router-view>
    </div>
</template>

<script>
export default {
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: inherit;
}
@import url(https://fonts.googleapis.com/css?family=Montserrat:300,regular,500,600,italic&display=swap);
#app {
  font-style: normal;
  font-family: Montserrat;
  color: black;
  background: #fff;
  display: flex;
  min-height: 100vh;
  flex-direction: column;
}
.content {
  flex: 1 1 auto;
}
.container {
  max-width: 900px;
  margin: 0 auto;
  padding: 15px;
  box-sizing: content-box;
  color: black;
}
</style>