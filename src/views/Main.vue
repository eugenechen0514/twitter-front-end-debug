<template>
  <div class="Main">
    <Navbar id="Navbar" />
    <div class="mainSection">
      <div class="mainSectionContent">
        <div class="mainTitle">
          <h1>首頁</h1>
        </div>
        <MainPostTweet :currentUser="currentUser" />
        <AllTweets :currentTweets="currentTweets" />
      </div>
    </div>
    <PopularUsers id="PopularUsers" />
  </div>
</template>

<script>
import Navbar from "../components/Navbar.vue";
import MainPostTweet from "../components/MainPostTweet.vue";
import AllTweets from "../components/AllTweets.vue";
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
    AllTweets,
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
.Main {
  width: 100%;
  display: grid;
}

#Navbar {
  justify-self: start;
  position: fixed;
  margin-left: 130px;
  /* width: 178px; */
}

#PopularUsers {
  position: fixed;
  justify-self: end;
  margin-right: 130px; 
  margin-top: 16px; 
  /* width: 273px; */
}

.mainSection {
  width: 640px;
  margin-left: 332px;
}

.mainSectionContent {
  border-left: 1px solid #E6ECF0;
  border-right: 1px solid #E6ECF0;
}

.mainTitle {
  width: 100%;
  height: 74px;
  border-bottom: 1px solid #E6ECF0;
  padding: 24px 23px;
  font-size: 24px;
  font-weight: 700;
  color: #1c1c1c;
}
</style>