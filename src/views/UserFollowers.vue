<template>
  <div class="UserSelfContainer">
    <Navbar id="Navbar" />
    <div class="UserFollowersMain">
      <div class="userTitle">
        <router-link to="/user/self/tweets">
          <img class="backIcon" src="../assets/Vector.png" alt="" />
        </router-link>
        <div class="userInfo">
          <h1 class="infoName">John Doe</h1>
          <span class="infoTweetsNumber">15推文</span>
        </div>
      </div>
      <!-- 跟隨者列表 -->
      <div class="followers" v-for="user in followers" :key="user.user.id">
        <!-- image -->
        <router-link to="">
          <img :src="user.user.image" class="followersImage" alt="" />
        </router-link>
        <!-- Content -->
        <div class="followersContent">
          <div class="followersInfo">
            <router-link to="" class="followersName">{{
              user.user.name
            }}</router-link>
            <button class="followersFollowedBtn" v-if="user.isFollowed">
              正在跟隨
            </button>
            <button class="followersFollowBtn" v-else>跟隨</button>
          </div>
          <p class="followersText">rlkjkflgdmflkgjdlkf</p>
        </div>
      </div>
    </div>
    <PopularUsers id="PopularUsers" />
  </div>
</template>

<script>
import Navbar from "../components/Navbar.vue";
import PopularUsers from "../components/PopularUsers.vue";

const dummyData = {
  followers: [
    {
      user: {
        id: 1,
        name: "awwfuqqqqqq",
        account: "awwfuqqqqqq",
        image:
          "https://img.ltn.com.tw/Upload/news/600/2016/04/17/phpFBRDIE.jpg",
      },
      isFollowed: true,
    },
    {
      user: {
        id: 2,
        name: "ohhfuckkkkkk",
        account: "ohhfuckkkkkkkk",
        image: "https://cdn2.ettoday.net/images/1027/1027134.jpg",
      },
      isFollowed: false,
    },
    {
      user: {
        id: 3,
        name: "awwfuq",
        account: "awwfuq",
        image:
          "https://img.ltn.com.tw/Upload/news/600/2016/04/17/phpFBRDIE.jpg",
      },
      isFollowed: true,
    },
    {
      user: {
        id: 4,
        name: "ohhfuck",
        account: "ohhfuck",
        image: "https://cdn2.ettoday.net/images/1027/1027134.jpg",
      },
      isFollowed: false,
    },
    {
      user: {
        id: 5,
        name: "awwfuq",
        account: "awwfuq",
        image:
          "https://img.ltn.com.tw/Upload/news/600/2016/04/17/phpFBRDIE.jpg",
      },
      isFollowed: true,
    },
    {
      user: {
        id: 6,
        name: "ohhfuck",
        account: "ohhfuck",
        image: "https://cdn2.ettoday.net/images/1027/1027134.jpg",
      },
      isFollowed: false,
    },
    {
      user: {
        id: 7,
        name: "awwfuq",
        account: "awwfuq",
        image:
          "https://img.ltn.com.tw/Upload/news/600/2016/04/17/phpFBRDIE.jpg",
      },
      isFollowed: true,
    },
    {
      user: {
        id: 8,
        name: "ohhfuck",
        account: "ohhfuck",
        image: "https://cdn2.ettoday.net/images/1027/1027134.jpg",
      },
      isFollowed: false,
    },
  ],
};

export default {
  components: {
    Navbar,
    PopularUsers,
  },
  data() {
    return {
      followers: [],
    };
  },
  methods: {
    fetchData() {
      this.followers = dummyData.followers;
    },
  },
  created() {
    this.fetchData();
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

.UserFollowersMain {
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

.followers {
  display: flex;
  height: 158px;
  border-bottom: 1px solid #e6ecf0;
  padding: 16px 30px 0 23px;
}

.followersImage {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin-right: 10px;
}

.followersContent {
  width: 100%;
}

.followersInfo {
  display: flex;
  justify-content: space-between;
}

.followersName {
  text-decoration: none;
  font-weight: 700;
  font-size: 16px;
  line-height: 26px;
  color: #171725;
}

.followersFollowedBtn {
  width: 96px;
  height: 40px;
  border-radius: 50px;
  border: 0;
  background-color: #ff6600;
  color: #fff;
  font-size: 16px;
  font-weight: 400;
}

.followersFollowBtn {
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

