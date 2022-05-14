<template>
  <div class="AdminUser">
    <img class="adminUserBackgroundImage" src="https://i2.jueshifan.com/205a28/78027f82/705f25c11eaabe409478.jpg" alt="">
    <img class="adminUserImage" src="https://img.ltn.com.tw/Upload/news/600/2016/04/17/phpFBRDIE.jpg" alt="">
    <div class="adminUserNameGroup">
      <p class="adminUserName">awwfuq</p>
      <p class="adminUserAccount">@awwfuq</p>
    </div>
    <div class="adminUserTweetsAndLikesCountGroup">
      <div class="adminUserTweetsCountGroup">
        <img src="../assets/admin-tweet-icon.png" alt="">
        <p>1.5k</p>
      </div>
      <div class="adminUserLikesCountGroup">
        <img src="../assets/admin-like-icon.png" alt="">
        <p>20k</p>
      </div>
    </div>
    <div class="adminUserFollowingsFollowersCountGroup">
      <div class="adminUserFollowingsCountGroup">
        <p><span>34 個</span>跟隨中</p>
      </div>
      <div class="adminUserFollowersCountGroup">
        <p><span>59 位</span>跟隨者</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.AdminUser {
  width: 249px;
  height: 314px;
  border-radius: 10px;
  overflow: hidden;
  position: relative;
  background-color: #F6F7F8;
}

.adminUserBackgroundImage {
  width: 100%;
  height: 140px;
  object-fit: cover;
  position: absolute;
  top: 0;
}

.adminUserImage {
  width: 100px;
  height: 100px;
  border: 4px solid #FFFFFF;
  border-radius: 50%;
  position: absolute;
  left: 50%;
  top: 64px;
  transform: translateX(-50%);
  z-index: 1;
}

.adminUserNameGroup {
  margin-top: 172px;
  text-align: center;
}

.adminUserName {
  font-size: 16px;
  font-weight: 700;
  color: #171725;
  line-height: 26px;
}

.adminUserAccount {
  font-size: 14px;
  font-weight: 400;
  color: #6C757D;
  line-height: 22px;
}

.adminUserTweetsAndLikesCountGroup {
  margin-top: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 16px;
}

.adminUserTweetsCountGroup, .adminUserLikesCountGroup {
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 16px;
  font-weight: 500;
  line-height: 15px;
}

.adminUserFollowingsFollowersCountGroup {
  margin-top: 9px;
  display: flex;
    justify-content: center;
  align-items: center;
  gap: 8px;
}

.adminUserFollowingsCountGroup, .adminUserFollowersCountGroup {
  font-size: 14px;
  font-weight: 400;
  line-height: 22px;
  color: #6C757D;
}

.adminUserFollowingsCountGroup span, .adminUserFollowersCountGroup span {
  color: #171725;
}
</style>