<template>
  <div class="popularUsers">
    <h1 class="popularUsersTitle">跟隨誰</h1>
    <div class="popularUser" v-for="user in popularUsers" :key="user.user.id">
      <router-link to="">
        <img :src="user.user.image" class="popularUsersImage" alt="" />
      </router-link>
      <div class="popularUsersNameGroup">
        <router-link to="" class="popularUsersName">{{
          user | nameIsTooLong
        }}</router-link>
        <router-link to="" class="popularUsersAccount"
          >@{{ user | accountIsTooLong }}</router-link
        >
      </div>
      <button class="popularUsersFollowedBtn" v-if="user.isFollowed">
        正在跟隨
      </button>
      <button class="popularUsersFollowBtn" v-else>跟隨</button>
    </div>
  </div>
</template>

<script>
const dummyData = {
  popularUsers: [
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
  data() {
    return {
      popularUsers: [],
    };
  },
  methods: {
    fetchData() {
      this.popularUsers = dummyData.popularUsers;
    },
  },
  created() {
    this.fetchData();
  },
  filters: {
    nameIsTooLong(User) {
      if (User.isFollowed) {
        if (User.user.name.length > 7) {
          return User.user.name.substr(0, 6) + "...";
        }
      }
      if (!User.isFollowed) {
        if (User.user.name.length > 10) {
          return User.user.name.substr(0, 9) + "...";
        }
      }
      return User.user.name
    },
    accountIsTooLong(User) {
      if (User.isFollowed) {
        if (User.user.account.length > 7) {
          return User.user.account.substr(0, 6) + "...";
        }
      }
      if (!User.isFollowed) {
        if (User.user.account.length > 10) {
          return User.user.account.substr(0, 9) + "...";
        }
      }
      return User.user.account;
    },
  },
};
</script>

<style scoped>
.popularUsers {
  width: 273px;
  height: 731px;
  border-radius: 16px;
  background-color: #f5f8fa;
  z-index: 50;
}

.popularUsersTitle {
  width: 100%;
  height: 74px;
  padding: 24px;
  font-size: 24px;
  font-weight: 700;
  border-bottom: 1px solid #e6ecf0;
}
.popularUser {
  width: 100%;
  height: 82px;
  display: flex;
  align-items: center;
  padding: 16px;
  position: relative;
}

.popularUsersImage {
  width: 50px;
  height: 50px;
  border-radius: 50%;
}

.popularUsersNameGroup {
  display: flex;
  flex-direction: column;
  margin-left: 8px;
}

.popularUsersName {
  font-size: 16px;
  font-weight: 700;
  color: #171725;
  text-decoration: none;
}

.popularUsersAccount {
  font-size: 14px;
  font-weight: 500;
  color: #92929d;
  text-decoration: none;
}

.popularUsersFollowedBtn {
  width: 96px;
  height: 40px;
  border-radius: 50px;
  border: 0;
  background-color: #ff6600;
  color: #fff;
  font-size: 16px;
  font-weight: 400;
}

.popularUsersFollowBtn {
  width: 64px;
  height: 40px;
  border-radius: 50px;
  border: 1px solid #ff6600;
  background-color: #f5f8fa;
  color: #ff6600;
  font-size: 16px;
  font-weight: 400;
}

.popularUsersFollowedBtn,
.popularUsersFollowBtn {
  position: absolute;
  right: 15px;
}

.popularUsersFollowedBtn:hover,
.popularUsersFollowBtn:hover {
  cursor: pointer;
}
</style>