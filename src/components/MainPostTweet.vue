<template>
  <div class="mainPostTweet">
    <img
      class="mainPostTweetUserImage"
      :src="currentUser.image"
      width="50px"
      height="50px"
      alt=""
    />
    <textarea
      class="mainPostTweetText"
      placeholder="有什麼新鮮事嗎?"
    ></textarea>
    <button class="mainPostTweetSubmitBtn">推文</button>
  </div>
</template>

<script>
export default {
  props: {
    currentUser: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style scoped>
.mainPostTweet {
  width: 600px;
  height: 120px;
  padding: 10px 15px;
  position: relative;
  display: flex;
  border-bottom: 10px solid #e6ecf0;
}

.mainPostTweetUserImage {
  width: 50px;
  height: 50px;
  border-radius: 50%;
}

.mainPostTweetText {
  width: 430px;
  height: 90px;
  margin-left: 10px;
  resize: none;
  font-size: 18px;
  font-weight: 500;
  border: 0;
  outline: 0;
}

.mainPostTweetSubmitBtn {
  width: 66px;
  height: 38px;
  border-radius: 100px;
  background-color: #ff6600;
  color: #fff;
  font-size: 18px;
  font-weight: 500;
  position: absolute;
  bottom: 10px;
  right: 10px;
  border: 0;
}

.mainPostTweetSubmitBtn:hover {
  cursor: pointer;
}
</style>