<template>
  <div class="main">
    <h1>主頁</h1>
    <Navbar />
    <div>
      <MainPostTweet :currentUser="currentUser"/>
      <MainTweets :currentTweets="currentTweets" />
    </div>
    <PopularUsers/>
  </div>
</template>

<script>
import Navbar from "../components/Navbar.vue";
import MainPostTweet from "../components/MainPostTweet.vue";
import MainTweets from "../components/MainTweets.vue";
import PopularUsers from "../components/PopularUsers.vue";

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
    MainPostTweet,
    MainTweets,
    PopularUsers,
  },
  data() {
    return {
      currentTweets: [],
      currentUser: dummyUser.currentUser
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
.main {
  display: flex;
  justify-content: center;
  gap: 10px;
}
.mainPostTweet {
  margin-bottom: 10px;
}
</style>