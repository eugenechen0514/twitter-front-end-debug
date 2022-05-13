<template>
  <div class="TweetDetail">
    <div class="tweetContent">
      <div class="tweetUser">
        <router-link to="">
          <img
            class="tweetUserImage"
            src="https://img.ltn.com.tw/Upload/news/600/2016/04/17/phpFBRDIE.jpg"
            alt=""
          />
          <div class="tweetUserNameGroup">
            <p class="tweetUserName">awwfuq</p>
            <p class="tweetUserAccount">@awwfuq</p>
          </div>
        </router-link>
      </div>
      <div class="tweetText">
        <p>UI Components 是透過 Basic Elements 組合延伸而成。設計稿中提供的 UI Components 是設計師專為 Twitter 設計的元件，如：Nav Item 中，Icon 與文字的組合、不同的 Modal 中，按鈕的使用方式與陳列。因此，設計師準</p>
      </div>
      <div class="tweetCreatedAt">
        <p>2022/5/13</p>
      </div>
      <div class="tweetCommentsLikesCount">
        <p class="tweetCommentsCount"><span>34</span>回覆</p>
        <p class="tweetLikesCount"><span>808</span>喜歡次數</p>
      </div>
      <div class="tweetCommentLikeBtn">
        <button class="tweetCommentBtn"><img class="tweetCommentIcon" src="../assets/comment-icon-large.png" alt=""></button>
        <button class="tweetLikeBtn"><img class="tweetLikeIcon" src="../assets/like-icon-large.png" alt=""></button>
        <button class="tweetLikeBtn"><img class="tweetLikeActiveIcon" src="../assets/like-icon-large-active.png" alt=""></button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.TweetDetail {
  width: 100%;
  min-height: 350px;
  border-bottom: 1px solid #E6ECF0;
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
  color: #6C757D;
}

.tweetText {
  margin-top: 8px;
}

.tweetText p {
  font-size: 24px;
  font-weight: 400;
  color: #171725;
  line-height: 36px;
}

.tweetCreatedAt {
  border-bottom: 1px solid #E6ECF0;
  margin-top: 8px;
  padding-bottom: 8px;
}

.tweetCreatedAt p {
  font-size: 14px;
  font-weight: 500;
  color: #6C757D;
  line-height: 22px;
}

.tweetCommentsLikesCount {
  border-bottom: 1px solid #E6ECF0;
  height: 60px;
  display: flex;
  align-items: center;
  font-size: 19px;
  font-weight: 500;
  color: #6C757D;
}

.tweetCommentsCount {
  margin-right: 24px;
}

.tweetCommentsLikesCount span {
  color:  #171725;
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