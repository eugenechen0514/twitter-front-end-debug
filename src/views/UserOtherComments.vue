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
      <UserOtherTabs />
      <Comments />
    </div>
    <PopularUsers id="PopularUsers" />
  </div>
</template>

<script>
import Navbar from "../components/Navbar.vue";
import PopularUsers from "../components/PopularUsers.vue";
import UserOtherTabs from "../components/UserOtherTabs.vue";
import UserOtherCard from "../components/UserOtherCard.vue";
import Comments from "../components/Comments.vue"

const dummyData = {
  currentTweets: [
    //顯示 isFollowed: true 的user推文  //排序從新到舊
    {
      tweet: {
        id: 1,
        text: "hello",
        createAt: "2022/5/9 12:00",
        commentsCount: 1,
        likesCount: 1,
        isLiked: true,
      },
      user: {
        id: 1,
        name: "awwfuq",
        account: "awwfuq",
        image:
          "https://img.ltn.com.tw/Upload/news/600/2016/04/17/phpFBRDIE.jpg",
      },
    },
    {
      tweet: {
        id: 2,
        text: "hello world",
        createAt: "2022/5/9 12:00",
        commentsCount: 1,
        likesCount: 1,
        isLiked: false,
      },
      user: {
        id: 2,
        name: "ohhfuck",
        account: "ohhfuck",
        image: "https://cdn2.ettoday.net/images/1027/1027134.jpg",
      },
    },
    {
      tweet: {
        id: 3,
        text: "hello",
        createAt: "2022/5/9 12:00",
        commentsCount: 1,
        likesCount: 1,
        isLiked: true,
      },
      user: {
        id: 1,
        name: "awwfuq",
        account: "awwfuq",
        image:
          "https://img.ltn.com.tw/Upload/news/600/2016/04/17/phpFBRDIE.jpg",
      },
    },
    {
      tweet: {
        id: 4,
        text: "hello world",
        createAt: "2022/5/9 12:00",
        commentsCount: 1,
        likesCount: 1,
        isLiked: false,
      },
      user: {
        id: 2,
        name: "ohhfuck",
        account: "ohhfuck",
        image: "https://cdn2.ettoday.net/images/1027/1027134.jpg",
      },
    },
    {
      tweet: {
        id: 5,
        text: "hello",
        createAt: "2022/5/9 12:00",
        commentsCount: 1,
        likesCount: 1,
        isLiked: true,
      },
      user: {
        id: 1,
        name: "awwfuq",
        account: "awwfuq",
        image:
          "https://img.ltn.com.tw/Upload/news/600/2016/04/17/phpFBRDIE.jpg",
      },
    },
    {
      tweet: {
        id: 6,
        text: "hello world",
        createAt: "2022/5/9 12:00",
        commentsCount: 1,
        likesCount: 1,
        isLiked: false,
      },
      user: {
        id: 2,
        name: "ohhfuck",
        account: "ohhfuck",
        image: "https://cdn2.ettoday.net/images/1027/1027134.jpg",
      },
    },
  ],
};

const dummyUser = {
  currentUser: {
    id: 1,
    name: "awwfuq",
    account: "awwfuq",
    image: "https://img.ltn.com.tw/Upload/news/600/2016/04/17/phpFBRDIE.jpg",
  },
};

export default {
  components: {
    Navbar,
    PopularUsers,
    UserOtherTabs,
    UserOtherCard,
    Comments
  },
  data() {
    return {
      currentTweets: [],
      currentUser: dummyUser.currentUser,
    };
  },

  methods: {
    fetchData() {
      this.currentTweets = dummyData.currentTweets;
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

.UserSelfMain {
  width: 640px;
  margin-left: 332px;
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
  padding-left: 28px;
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