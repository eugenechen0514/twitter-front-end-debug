<template>
  <div>
    <ul class="tabs">
      <li>
        <router-link class="tweet" to="/user/self/tweets">推文</router-link>
      </li>
      <li>
        <router-link class="tweetAndResponse" to="/user/self/tweetsandcomments"
          >推文與回覆</router-link
        >
      </li>
      <li>
        <router-link class="likedContent" to="/user/self/likes"
          >喜歡的內容</router-link
        >
      </li>
    </ul>
  </div>
</template>

<style scoped>
.tabs {
  display: flex;
}

li {
  padding: 0px 50px 15px;
}

.tweet,
.tweetAndResponse,
.likedContent {
  text-decoration: none;
  font-weight: 700;
  font-size: 15px;
  line-height: 22px;
  color: #657786;
}

.tweet.active,
.tweetAndResponse.active,
.likedContent.active {
  color: #FF6600;
  border-bottom: 1px solid #FF6600;
}

.tweet.active,
.tweetAndResponse.active,
.likedContent.active {
  color: #FF6600;
}
</style>