<template>
  <div class="mainPostTweet">
    <img :src="currentUser.image" width="50px" height="50px" alt="">
    <input type="text" name="" id="">
    <button>推文</button>
  </div>
</template>

<script>
export default {
  props: {
    currentUser: {
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped>
.mainPostTweet {
  width: 600px;
  height: 120px;
  border: 1px solid black
}
</style>