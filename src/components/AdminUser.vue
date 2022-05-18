<template>
  <div class="AdminUser">
    <img class="adminUserBackgroundImage" :src="user.cover" alt="">
    <img class="adminUserImage" :src="user.avatar | emptyImage" alt="">
    <div class="adminUserNameGroup">
      <p class="adminUserName">{{user.name}}</p>
      <p class="adminUserAccount">@{{user.account}}</p>
    </div>
    <div class="adminUserTweetsAndLikesCountGroup">
      <div class="adminUserTweetsCountGroup">
        <img src="../assets/admin-tweet-icon.png" alt="">
        <p>{{user.Tweets}}</p>
      </div>
      <div class="adminUserLikesCountGroup">
        <img src="../assets/admin-like-icon.png" alt="">
        <p>{{user.Likes}}</p>
      </div>
    </div>
    <div class="adminUserFollowingsFollowersCountGroup">
      <div class="adminUserFollowingsCountGroup">
        <p><span>{{user.Followings}} 個</span>跟隨中</p>
      </div>
      <div class="adminUserFollowersCountGroup">
        <p><span>{{user.Followers}} 位</span>跟隨者</p>
      </div>
    </div>
  </div>
</template>

<script>
import { emptyImageFilter } from '../utility/mixins'

export default {
  props: {
    user: {
      type: Object,
      required: true
    }
  },
  mixins: [emptyImageFilter]
}
</script>

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
  background-color: #fff;
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