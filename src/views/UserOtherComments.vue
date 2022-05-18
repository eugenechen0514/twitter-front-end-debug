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
      <UserOtherCard :currentUser="currentUser" />
      <UserOtherTabs :currentUser="currentUser" />
      <Comments :currentRepliedTweets="currentRepliedTweets" />
    </div>
    <PopularUsers id="PopularUsers" />
  </div>
</template>

<script>
import Navbar from "../components/Navbar.vue";
import PopularUsers from "../components/PopularUsers.vue";
import UserOtherTabs from "../components/UserOtherTabs.vue";
import UserOtherCard from "../components/UserOtherCard.vue";
import Comments from "../components/Comments.vue";

import usersAPI from "./../apis/users";
import { Toast } from "../utility/helpers";



export default {
  components: {
    Navbar,
    PopularUsers,
    UserOtherTabs,
    UserOtherCard,
    Comments,
  },
  data() {
    return {
      currentRepliedTweets: [],
      currentUser: {},
    };
  },

  methods: {
    async fetchData(id) {
      try {
        const { data } = await usersAPI.getUserRepliedTweets({ id });
        if (data.status === "error") {
          throw new Error(data.message);
        }
        this.currentRepliedTweets = data;
      } catch (error) {
        console.log("error", error);
        Toast.fire({
          icon: "error",
          title: "無法取得使用者推文，請稍候再試",
        });
      }
    },
    async fetchUser(id) {
      try {
        const { data } = await usersAPI.getUser({ id });
        if (data.status === "error") {
          throw new Error(data.message);
        }
        this.currentUser = {...data};
      } catch (error) {
        console.log("error", error);
        Toast.fire({
          icon: "error",
          title: "無法取得使用者資料，請稍候再試",
        });
      }
    },
  },

  created() {
    const { id } = this.$route.params;
    this.fetchData(id);
    this.fetchUser(id);
  },

  beforeRouteUpdate(to, from, next) {
    const { id } = to.params;
    this.fetchData(id);
    this.fetchUser(id);
    next();
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
  margin-left: 130px;
  /* width: 210px; */
}

#PopularUsers {
  position: fixed;
  justify-self: end;
  margin-right: 130px;
  margin-top: 16px;
  /* width: 350px; */
}

.UserSelfMain {
  width: 640px;
  margin-left: 332px;
  border-left: 1px solid #e6ecf0;
  border-right: 1px solid #e6ecf0;
  /* display: flex;
  flex-direction: column;
  align-items: center; */
  /* border: 1px solid black; */
}

.userTitle {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding-left: 28px;
  height: 74px;
  border-bottom: 1px solid #e6ecf0;
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
  color: #6c757d;
}
</style>