<template>
  <div class="userCard">
    <img
      class="userBackgroundImage"
      src="https://static.vecteezy.com/system/resources/previews/002/523/012/original/wide-tropical-beach-banner-background-vector.jpg"
      width="600px"
      height="200px"
      alt=""
    />
    <img
      class="userImage"
      :src="currentUser.image"
      width="140px"
      height="140px"
      alt=""
    />
    <div class="buttons">
      <router-link class="mailBorder" to="/#">
        <img class="mail" src="../assets/mail.png" alt="" />
      </router-link>
      <div class="bellBorder" v-if="false">
        <img class="bell" src="../assets/bell.png" alt="" />
      </div>
      <div class="bellActiveBorder" v-else>
        <img class="bellActive" src="../assets/bell-active.png" alt="" />
      </div>
      <button class="otherUserFollowedBtn" v-if="true">正在跟隨</button>
      <button class="otherUserFollowBtn" v-else>跟隨</button>
    </div>

    <div class="userInformation">
      <p class="userName">{{ currentUser.name }}</p>
      <p class="userAccount">@{{ currentUser.account }}</p>
      <p class="userDescription">
        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
        sint.
      </p>
      <router-link class="userFollowersCount" to="/user/1/followings"
        >34個<span>跟隨中</span></router-link
      >
      //
      <router-link class="userFollowingsCount" to="/user/1/followers"
        >59個<span>跟隨者</span></router-link
      >
    </div>
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
.userCard {
  height: 375px;
  /* border: 1px solid black; */
  position: relative;
  margin-bottom: 31px;
}

.userImage {
  position: absolute;
  top: 124px;
  left: 14px;
  z-index: 10;
  border-radius: 50%;
  border: 4px solid #ffffff;
}

.userEdit {
  position: absolute;
  right: 30px;
  top: 220px;
  border: 1px solid #ff6600;
  border-radius: 50px;
  color: #ff6600;
  font-size: 16px;
  padding: 8px 16px;
  background: #ffffff;
}

.userInformation {
  margin-top: 16px;
  margin-left: 16px;
}

.userName {
  font-weight: 700;
  line-height: 26px;
  font-size: 18px;
}

.userAccount {
  font-weight: 400;
  font-size: 14px;
  line-height: 22px;
  color: #6c757d;
}

.userDescription {
  margin-top: 6px;
  font-size: 14px;
  line-height: 22px;
  margin-bottom: 8px;
}

.userFollowersCount,
.userFollowingsCount {
  text-decoration: none;
  color: black;
  font-size: 14px;
}

span {
  color: #6c757d;
}

.buttons {
  display: flex;
  justify-content: flex-end;
  margin-top: 16px;
  margin-right: 17px;
}

.mailBorder,
.bellBorder,
.bellActiveBorder {
  width: 40px;
  height: 40px;
  border: 1px solid #ff6600;
  border-radius: 50%;
  position: relative;
  margin-right: 16px;
  cursor: pointer;
}

.mail {
  width: 20px;
  height: 18px;
  position: absolute;
  top: 11px;
  left: 9px;
}

.bell,
.bellActive {
  width: 24px;
  height: 24px;
  position: absolute;
  top: 7px;
  left: 8px;
}

.bellActiveBorder {
  background-color: #ff6600;
}

.otherUserFollowedBtn {
  width: 96px;
  height: 40px;
  border-radius: 50px;
  border: 0;
  background-color: #ff6600;
  color: #fff;
  font-size: 16px;
  font-weight: 400;
}

.otherUserFollowBtn {
  width: 64px;
  height: 40px;
  border-radius: 50px;
  border: 1px solid #ff6600;
  background-color: #f5f8fa;
  color: #ff6600;
  font-size: 16px;
  font-weight: 400;
}

.otherUserFollowedBtn:hover,
.otherUserFollowBtn:hover {
  cursor: pointer;
}
</style>