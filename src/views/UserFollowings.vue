<template>
  <div class="UserSelfContainer">
    <Navbar id="Navbar" />
    <div class="UserFollowingsMain">
      <div class="userTitle">
        <router-link :to="{ name: 'user-tweets', params: currentUser.id }">
          <img class="backIcon" src="../assets/Vector.png" alt="" />
        </router-link>
        <div class="userInfo">
          <h1 class="infoName">{{ currentUser.name }}</h1>
          <span class="infoTweetsNumber">{{ currentTweets.length }}則推文</span>
        </div>
      </div>
      <!-- tabs -->
      <ul class="tabs">
        <li>
          <router-link
            class="tabsFollowers"
            :to="{ name: 'user-followers', params: { id: currentUser.id } }"
            >追隨者</router-link
          >
        </li>
        <li>
          <router-link
            class="tabsFollowings"
            :to="{ name: 'user-followings', params: { id: currentUser.id } }"
            >正在追隨</router-link
          >
        </li>
      </ul>
      <!-- 跟隨者列表 -->
      <div
        class="followings"
        v-for="user in followings"
        :key="user.followingId"
      >
        <!-- image -->
        <router-link to="">
          <img :src="user.followingAvatar" class="followingsImage" alt="" />
        </router-link>
        <!-- Content -->
        <div class="followingsContent">
          <div class="followingsInfo">
            <router-link to="" class="followingsName">{{
              user.followingName
            }}</router-link>
            <button class="followingsFollowedBtn" v-if="user.isFollowed">
              正在跟隨
            </button>
            <button class="followingsFollowBtn" v-else>跟隨</button>
          </div>
          <p class="followingsText">{{ user.followingIntroduction }}</p>
        </div>
      </div>
    </div>
    <PopularUsers id="PopularUsers" />
  </div>
</template>

<script>
import Navbar from "../components/Navbar.vue";
import PopularUsers from "../components/PopularUsers.vue";

import usersAPI from "./../apis/users";
import { Toast } from "../utility/helpers";

export default {
  components: {
    Navbar,
    PopularUsers,
  },
  data() {
    return {
      followings: [],
      currentTweets: [],
      currentUser: {},
    };
  },
  beforeRouteUpdate(to, from, next) {
    const { id } = to.params;
    this.fetchFollowings(id);
    this.fetchUser(id);
    this.fetchTweets(id);
    next();
  },
  created() {
    const { id } = this.$route.params;
    this.fetchFollowings(id);
    this.fetchUser(id);
    this.fetchTweets(id);
  },

  methods: {
    async fetchFollowings(id) {
      try {
        const { data } = await usersAPI.getUserFollowings({ id });
        if (data.status === "error") {
          throw new Error(data.message);
        }
        this.followings = data;
      } catch (error) {
        console.log("error", error);
        Toast.fire({
          icon: "error",
          title: "無法取得資料，請稍候再試",
        });
      }
    },
    async fetchUser(id) {
      try {
        const { data } = await usersAPI.getUser({ id });
        if (data.status === "error") {
          throw new Error(data.message);
        }
        this.currentUser = data;
        console.log(data);
      } catch (error) {
        console.log("error", error);
        Toast.fire({
          icon: "error",
          title: "無法取得資料，請稍候再試",
        });
      }
    },
    async fetchTweets(id) {
      try {
        const { data } = await usersAPI.getUserTweets({ id });
        if (data.status === "error") {
          throw new Error(data.message);
        }
        this.currentTweets = data;
      } catch (error) {
        console.log("error", error);
        Toast.fire({
          icon: "error",
          title: "無法取得資料，請稍候再試",
        });
      }
    },
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

.UserFollowingsMain {
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

.tabs {
  display: flex;
  border-bottom: 1px solid #e6ecf0;
}

li {
  padding-bottom: 15px;
  padding-top: 15px;
}

.tabsFollowers,
.tabsFollowings {
  text-decoration: none;
  font-weight: 700;
  font-size: 15px;
  line-height: 22px;
  color: #657786;
}

.tabsFollowers {
   padding-left: 45px;
}

.tabsFollowings {
  margin-left:70px;
}

.tabsFollowers.active,
.tabsFollowings.active {
  color: #ff6600;
  position: relative;
}

.tabsFollowers.active::after,
.tabsFollowings::after {
  content: "";
  position: absolute;
  bottom: -15px;
  left: 0px;
  height: 2px;
  width: 130px;
  background-color: #ff6600;
  border-radius: 100px;
}

.tabsFollowings::after {
  left: -27px;
}


.followings {
  display: flex;
  height: 158px;
  border-bottom: 1px solid #e6ecf0;
  padding: 16px 30px 0 23px;
}

.followingsImage {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin-right: 10px;
}

.followingsContent {
  width: 100%;
}

.followingsInfo {
  display: flex;
  justify-content: space-between;
}

.followingsName {
  text-decoration: none;
  font-weight: 700;
  font-size: 16px;
  line-height: 26px;
  color: #171725;
}

.followingsFollowedBtn {
  width: 96px;
  height: 40px;
  border-radius: 50px;
  border: 0;
  background-color: #ff6600;
  color: #fff;
  font-size: 16px;
  font-weight: 400;
}

.followingsFollowBtn {
  width: 64px;
  height: 40px;
  border-radius: 50px;
  border: 1px solid #ff6600;
  background-color: #f5f8fa;
  color: #ff6600;
  font-size: 16px;
  font-weight: 400;
}
</style>