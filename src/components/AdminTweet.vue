<template>
  <div class="AdminTweet">
    <router-link to="">
      <img class="adminTweetUserImage" src="https://img.ltn.com.tw/Upload/news/600/2016/04/17/phpFBRDIE.jpg" alt="">
    </router-link>
    <div class="adminTweetContent">
      <div class="adminTweetUserNameGroup">
        <router-link class="adminTweetUserName" to="">awwfuq</router-link>
        <router-link class="adminTweetUserAccount" to="">@awwfuq</router-link>
        <p class="adminTweetCreatedAt">・3小時</p>
      </div>
      <div class="adminTweetText">
        <p>這份設計稿將包含「網站風格設定」、「基本元件設定」、「使用者介面」、「使用者動線」等...。設計稿內容將使用目前業界主流工具 - Figma 呈現，進入設計稿前，請你詳閱以下說明。這份設計稿將包含「網站風格設定」、「基本元件設定」、「使用者介面」、「使用者動線」等...。設計稿內容將使用目前業界主流工具 - Figma 呈現，進入設計稿前，請你詳閱以下說明。</p>
      </div>
    </div>
    <button class="deleteTweetBtn"><img src="../assets/delete-icon.png" alt=""></button>
  </div>
</template>

<style scoped>
.AdminTweet {
  border-bottom: 1px solid #E6ECF0;
  width: 100%;
  min-height: 118px;
  padding: 16px 23px;
  display: flex;
  position: relative;
}

.adminTweetUserImage {
  width: 50px;
  height: 50px;
  margin-right: 8px;
}

.adminTweetContent {
  width: 839px;
}

.adminTweetUserNameGroup {
  display: flex;
  width: 100%;
  height: 26px;
  line-height: 26px;
}

.adminTweetUserName {
  font-size: 16px;
  font-weight: 700;
  color: #171725;
  text-decoration: none;
  margin-right: 8px;
}

.adminTweetUserAccount {
  font-size: 14px;
  font-weight: 400;
  color: #6C757D;
  text-decoration: none;
}

.adminTweetCreatedAt {
  font-size: 14px;
  font-weight: 400;
  color: #6C757D;
}

.adminTweetText {
  font-size: 16px;
  font-weight: 400;
  color: #171725;
  line-height: 26px;
}

.deleteTweetBtn {
  width: 24px;
  height: 24px;
  border: 0;
  background-color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  right: 0;
}

.deleteTweetBtn:hover {
  cursor: pointer;
}
</style>