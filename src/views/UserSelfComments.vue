<template>
  <div class="UserSelfContainer">
    <Navbar id="Navbar" />
    <div class="UserSelfMain">
      <div class="userTitle">
        <router-link to="/main">
          <img class="backIcon" src="../assets/Vector.png" alt="" />
        </router-link>
        <div class="userInfo">
          <h1 class="infoName">John Doe</h1>
          <span class="infoTweetsNumber">15推文</span>
        </div>
      </div>
      <UserSelfCard />
      <UserTabs />
      <Comments />
    </div>
    <PopularUsers id="PopularUsers" />
  </div>
</template>

<script>
import Navbar from "../components/Navbar.vue";
import PopularUsers from "../components/PopularUsers.vue";
import UserTabs from "../components/UserTabs.vue";
import UserSelfCard from "../components/UserSelfCard.vue";
import Comments from "../components/Comments.vue"

export default {
  components: {
    Navbar,
    PopularUsers,
    UserTabs,
    UserSelfCard,
    Comments
  },
};
</script>

<style scoped>
.UserSelfContainer {
  width: 100%;
  display: grid;
  
}

#Navbar {
  justify-self: start;
  position: fixed;
  margin-left: 113px;
  /* width: 210px; */
}

#PopularUsers {
  position: fixed;
  justify-self: end;
  margin-right: 82px;
  margin-top: 15px;
  /* width: 350px; */
}

.UserSelfMain {
  width: 600px;
  margin-left: 378px;
  border-left: 1px solid #E6ECF0;
  border-right: 1px solid #E6ECF0;
  /* display: flex;
  flex-direction: column;
  align-items: center; */
  /* border: 1px solid black; */
}

.userTitle {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-left: 28px;
  height: 74px;
  border-bottom: 1px solid #E6ECF0;
}

.backIcon {
  width: 17px;
  height: 14px;
}

.userInfo {
  margin-left: 19px;
}

.infoName {
  font-weight: 700;
  font-size: 18px;
  height: 24px;
  line-height: 26px;
}

.infoTweetsNumber {
  font-weight: 500;
  font-size: 13px;
  line-height: 19px;
  color: #6C757D
}
</style>