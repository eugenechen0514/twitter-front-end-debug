<template>
  <div class="main">
    <Navbar id="Navbar" />
    <div class="mainSection">
      <MainPostTweet :currentUser="currentUser"/>
      <MainTweets :currentTweets="currentTweets" />
      <MainTweets :currentTweets="currentTweets" />
      <MainTweets :currentTweets="currentTweets" />
      <MainTweets :currentTweets="currentTweets" />
    </div>
    <PopularUsers id="PopularUsers"/>
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
  width: 100%;
}

#Navbar {
  position: fixed;
  top: 0;
  left: 100px;
  /* width: 235px; */
}

#PopularUsers {
  position: fixed;
  right: 100px;
  top: 15px;
  /* width: 350px; */
}

.mainSection {
  border: 1px solid blue;
  position: absolute;
  left: 335px;
  right: 450px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.mainPostTweet {
  margin-bottom: 10px;
}


</style>