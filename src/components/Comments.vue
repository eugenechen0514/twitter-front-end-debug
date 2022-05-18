<template>
  <div class="Comments">
    <div
      class="comment"
      v-for="comment in currentRepliedTweets"
      :key="comment.id"
    >
      <div class="commentUserImage">
        <router-link to="">
          <img :src="comment.userAvatar" alt="" />
        </router-link>
      </div>
      <div class="commentContent">
        <div class="commentUserNameGroup">
          <router-link to="" class="commentUserName">等等處理</router-link>
          <router-link to="" class="commentUserAccount">＠account</router-link>
          <p class="commentCreatedAt">{{ comment.createdAt }}</p>
        </div>
        <div class="commentFor">
          <p>
            回覆 <span>@{{ comment.User }}</span>
          </p>
        </div>
        <div class="commentText">
          <p>
            {{ comment.comment }}
          </p>
        </div>
        <div class="commentLikeBtnGroup">
          <button class="commentBtn">
            <img src="../assets/comment-icon.png" alt="" />
            <p>13</p>
          </button>
          <button class="likeBtn">
            <img src="../assets/like-icon-active.png" alt="" />
            <p>76</p>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
   props: {
    currentRepliedTweets: {
      type: Array,
      required: true,
    },
}
}
</script>

<style scoped>
.Comments {
  width: 100%;
}

.comment {
  min-height: 146px;
  padding: 16px 23px;
  display: flex;
  border-bottom: 1px solid #e6ecf0;
}

.commentUserImage {
  margin-right: 8px;
}

.commentUserImage img {
  height: 50px;
  width: 50px;
  border-radius: 50%;
}

.commentUserNameGroup {
  height: 26px;
  display: flex;
  line-height: 26px;
}

.commentUserName {
  font-size: 16px;
  font-weight: 700;
  text-decoration: none;
  color: #171725;
  margin-right: 8px;
}

.commentUserAccount,
.commentCreatedAt {
  font-size: 14px;
  font-weight: 400;
  text-decoration: none;
  color: #6c757d;
}

.commentFor {
  height: 22px;
  margin-top: 8px;
  font-size: 14px;
  font-weight: 400;
  color: #6c757d;
  display: flex;
  align-items: center;
}

.commentFor span {
  color: #ff6600;
}

.commentText {
  margin-top: 8px;
  min-height: 26px;
  line-height: 26px;
  font-size: 16px;
  font-weight: 400;
  color: #171725;
}

.commentLikeBtnGroup {
  margin-top: 8px;
  height: 16px;
  display: flex;
}

.commentLikeBtnGroup button {
  height: 16px;
  display: flex;
  align-items: center;
  margin-right: 40px;
  border: 0;
  background-color: #fff;
}

.commentLikeBtnGroup button:hover {
  cursor: pointer;
}
</style>