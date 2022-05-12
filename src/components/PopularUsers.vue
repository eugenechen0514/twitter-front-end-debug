<template>
  <div class="popularUsers">
    <h1 class="popularUsersTitle">Popular</h1>
    <div class="popularUser" v-for="user in popularUsers" :key="user.user.id">
      <router-link to="">
        <img :src="user.user.image" class="popularUsersImage" alt=""/>
      </router-link>
      <div class="popularUsersNameGroup">
        <router-link to="" class="popularUsersName">{{
          user.user.name
        }}</router-link>
        <router-link to="" class="popularUsersAccount"
          >@{{ user.user.account }}</router-link
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
        name: "awwfuq",
        account: "awwfuq",
        image:
          "https://img.ltn.com.tw/Upload/news/600/2016/04/17/phpFBRDIE.jpg",
      },
      isFollowed: true,
    },
    {
      user: {
        id: 2,
        name: "ohhfuck",
        account: "ohhfuck",
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
    {
      user: {
        id: 9,
        name: "awwfuq",
        account: "awwfuq",
        image:
          "https://img.ltn.com.tw/Upload/news/600/2016/04/17/phpFBRDIE.jpg",
      },
      isFollowed: true,
    },
    {
      user: {
        id: 10,
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
};
</script>

<style scoped>
.popularUsers {
  width: 350px;
  height: 765px;
  border-radius: 14px;
  background-color: #f5f8fa;
  z-index: 50;
}

.popularUsersTitle {
  width: 100%;
  height: 45px;
  padding: 15px;
  font-size: 18px;
  font-weight: 700;
}
.popularUser {
  width: 100%;
  height: 71px;
  border-top: 1px solid #E6ECF0;
  display: flex;
  align-items: center;
  padding: 10px 15px;
  position: relative
}

.popularUsersImage {
  width: 50px;
  height: 50px;
  border-radius: 50%;
}

.popularUsersNameGroup {
  display: flex;
  flex-direction: column;
  font-size: 15px;
  font-weight: 700;
  margin-left: 10px;
}

.popularUsersName {
  color: #1c1c1c;
  text-decoration: none;
}

.popularUsersAccount {
  color: #657786;
  text-decoration: none;
}

.popularUsersFollowedBtn {
  width: 90px;
  height: 35px;
  border-radius: 100px;
  border: 0;
  background-color: #ff6600;
  color: #fff;
  font-size: 15px;
  font-weight: 700;
}

.popularUsersFollowBtn {
  width: 60px;
  height: 35px;
  border-radius: 100px;
  border: 1px solid #FF6600;
  background-color: #F5F8FA;
  color: #FF6600;
  font-size: 15px;
  font-weight: 700;
}

.popularUsersFollowedBtn, .popularUsersFollowBtn {
  position: absolute;
  right: 15px;
}

.popularUsersFollowedBtn:hover, .popularUsersFollowBtn:hover {
  cursor: pointer;
} 

</style>