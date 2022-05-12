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
      src="https://img.ltn.com.tw/Upload/news/600/2016/04/17/phpFBRDIE.jpg"
      width="140px"
      height="140px"
      alt=""
    />
    <button class="userEdit">編輯個人資料</button>
    <div class="userInformation">
      <p class="userName">userName</p>
      <p class="userAccount">@userAccount</p>
      <p class="userDescription">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.</p>
      <router-link class="userFollowersCount" to="/user/1/followers"
        >34個<span>跟隨中</span></router-link
      >
      //
      <router-link class="userFollowingsCount" to="/user/1/followings"
        >59個<span>跟隨者</span></router-link
      >
    </div>
  </div>
</template>

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
  margin-top: 72px;
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
</style>