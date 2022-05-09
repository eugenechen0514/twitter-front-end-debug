<template>
  <div class="mainTweets">
    <div class="tweet" v-for="tweet in currentTweets" :key="tweet.tweet.id">
      <img :src="tweet.user.image" height="50px" width="50px" alt="" />
      <div>
        <router-link to="">{{ tweet.user.name }} @{{ tweet.user.account }}</router-link>
        <p style="display: inline;"> 。{{tweet.tweet.createAt}}</p>
        <br>
        <br>
        <router-link :to="{name: 'tweet', params: {id: tweet.tweet.id}}">{{ tweet.tweet.text }}</router-link>
        <br>
        <br>
        <div>
          <router-link to="">留言數{{ tweet.tweet.commentsCount }}</router-link>
          <button>按讚數{{ tweet.tweet.likesCount }}</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    currentTweets: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style scoped>
.mainTweets {
  border: 1px solid black;
  width: 600px;
  padding: 15px 15px;
}
.tweet {
  height: 136px;
  border: 1px solid black;
  display: flex;
}
</style>