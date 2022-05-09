<template>
  <div class="UserSelfContainer">
    <h1>個人資料</h1>
    <Navbar />
    <div class="UserSelfMain">
      <div class="userCard">
        <img class="userBackgroundImage" src="" width="600px" height="200px" alt="">
        <img class="userImage" src="" width="140px" height="140px" alt="">
        <button class="userEdit">編輯個人資料</button>
        <p>userName</p>
        <p>userAccount</p>
        <p>userDescription</p>
        <router-link to="">userFollowerCount</router-link> //
        <router-link to="">userFollowingCount</router-link>
      </div>
      <UserTabs/>
      <div>
        <h1>Tweets</h1>
      </div>
    </div>
    <PopularUsers />
  </div>
</template>

<script>
import Navbar from "../components/Navbar.vue";
import PopularUsers from "../components/PopularUsers.vue";
import UserTabs from "../components/UserTabs.vue";

export default {
  components: {
    Navbar,
    PopularUsers,
    UserTabs
  },
};
</script>

<style scoped>
.UserSelfContainer {
  display: flex;
  justify-content: center;
  gap: 10px;
}

.UserSelfMain {
  width: 600px;
  border: 1px solid black;
}

.userCard {
  height: 375px;
  border: 1px solid black;
  position: relative;
}

.userImage {
  position: absolute;
  top: 124px;
  left: 14px;
  z-index: 10;
}

.userEdit {
  position: absolute;
  right: 30px;
  top: 220px;
}



</style>