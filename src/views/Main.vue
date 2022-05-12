<template>
  <div class="main">
    <Navbar id="Navbar" />
    <div class="mainSection">
      <div class="mainSectionContent">
        <div class="mainTitle">
          <h1>首頁</h1>
        </div>
        <MainPostTweet :currentUser="currentUser" />
        <MainTweets :currentTweets="currentTweets" />
      </div>
    </div>
    <PopularUsers id="PopularUsers" />
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
        isLiked: true
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
        isLiked: false
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
        isLiked: true
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
        isLiked: false
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
        isLiked: true
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
        isLiked: false
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
.main {
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

.mainSection {
  width: 600px;
  margin-left: 378px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.mainSectionContent {
  border-left: 1px solid #E6ECF0;
  border-right: 1px solid #E6ECF0;
}

.mainTitle {
  width: 600px;
  height: 55px;
  border-bottom: 1px solid #E6ECF0;
  padding: 15px;
  font-size: 18px;
  font-weight: 700;
  color: #1c1c1c;
}
</style>