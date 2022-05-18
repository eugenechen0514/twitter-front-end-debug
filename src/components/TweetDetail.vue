<template>
  <div class="TweetDetail">
    <div class="tweetContent">
      <div class="tweetUser">
        <router-link to="">
          <img
            class="tweetUserImage"
            :src='tweet.User.avatar'
            alt=""
          />
          <div class="tweetUserNameGroup">
            <p class="tweetUserName">{{tweet.User.name}}</p>
            <p class="tweetUserAccount">@{{tweet.User.account}}</p>
          </div>
        </router-link>
      </div>
      <div class="tweetText">
        <p>{{ tweet.description }}</p>
      </div>
      <div class="tweetCreatedAt">
        <p>{{ tweet.createdAt }}</p>
      </div>
      <div class="tweetCommentsLikesCount">
        <p class="tweetCommentsCount">
          <span>{{ tweet.Replies }}</span
          >回覆
        </p>
        <p class="tweetLikesCount">
          <span>{{ tweet.Likes }}</span
          >喜歡次數
        </p>
      </div>
      <div class="tweetCommentLikeBtn">
        <button class="tweetCommentBtn">
          <img
            class="tweetCommentIcon"
            src="../assets/comment-icon-large.png"
            alt=""
          />
        </button>
        <button v-if="!tweet.isLiked" class="tweetLikeBtn">
          <img
            class="tweetLikeIcon"
            src="../assets/like-icon-large.png"
            alt=""
          />
        </button>
        <button v-else class="tweetLikeBtn">
          <img
            class="tweetLikeActiveIcon"
            src="../assets/like-icon-large-active.png"
            alt=""
          />
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    tweet: {
      type: Object,
      required: true,
    },
  },
};
</script>


<style scoped>
.TweetDetail {
  width: 100%;
  min-height: 350px;
  border-bottom: 1px solid #e6ecf0;
  padding: 16px 16px 0px 16px;
}

.tweetUser a {
  display: flex;
  text-decoration: none;
}

.tweetUserImage {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin-right: 8px;
}

.tweetUserNameGroup {
  height: 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.tweetUserName {
  font-size: 16px;
  font-weight: 700;
  color: #171725;
  margin-bottom: 5px;
}

.tweetUserAccount {
  font-size: 14px;
  font-weight: 400;
  color: #6c757d;
}

.tweetText {
  margin-top: 8px;
  min-height: 108px;
}

.tweetText p {
  font-size: 24px;
  font-weight: 400;
  color: #171725;
  line-height: 36px;
}

.tweetCreatedAt {
  border-bottom: 1px solid #e6ecf0;
  margin-top: 8px;
  padding-bottom: 8px;
}

.tweetCreatedAt p {
  font-size: 14px;
  font-weight: 500;
  color: #6c757d;
  line-height: 22px;
}

.tweetCommentsLikesCount {
  border-bottom: 1px solid #e6ecf0;
  height: 60px;
  display: flex;
  align-items: center;
  font-size: 19px;
  font-weight: 500;
  color: #6c757d;
}

.tweetCommentsCount {
  margin-right: 24px;
}

.tweetCommentsLikesCount span {
  color: #171725;
  font-weight: 700;
}

.tweetCommentLikeBtn {
  height: 68px;
  display: flex;
  align-items: center;
}

.tweetCommentLikeBtn button {
  height: 30px;
  width: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 130px;
  border: 0;
  background-color: #fff;
}

.tweetCommentLikeBtn button:hover {
  cursor: pointer;
}
</style>