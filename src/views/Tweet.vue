<template>
  <div class="Tweet">
    <Navbar id="Navbar" />
    <div class="tweetSection">
      <div class="tweetSectionContent">
        <div class="tweetTitle">
          <router-link to="">
            <img src="../assets/prev-icon.png" alt="" />
            <p>推文</p>
          </router-link>
        </div>
        <TweetDetail id="TweetDetail" />
        <Comments id="TweetComments" />
      </div>
    </div>
    <PopularUsers id="PopularUsers" />
  </div>
</template>

<script>
import Navbar from "../components/Navbar.vue";
import PopularUsers from "../components/PopularUsers.vue";
import TweetDetail from "../components/TweetDetail.vue";
import Comments from "../components/Comments.vue";

const dummyData = {
  tweet: {
    id: 1,
    text: "hello",
    createAt: "2022/5/9 12:00",
    commentsCount: 1,
    likesCount: 1,
    comments: [
      {
        comment: {
          id: 1,
          text: "wow",
          createAt: "2022/5/9 14:00",
        },
        user: {
          id: 2,
          name: "ohhfuck",
          account: "ohhfuck",
          image: "https://cdn2.ettoday.net/images/1027/1027134.jpg",
        },
      },
    ],
  },
  user: {
    id: 1,
    name: "awwfuq",
    account: "awwfuq",
    image: "https://img.ltn.com.tw/Upload/news/600/2016/04/17/phpFBRDIE.jpg",
  },
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
    TweetDetail,
    Comments,
  },
  data() {
    return {
      tweet: {},
      user: {},
      currentUser: dummyUser.currentUser,
    };
  },
  methods: {
    fetchData() {
      this.tweet = dummyData.tweet;
      this.user = dummyData.user;
    },
  },
  created() {
    this.fetchData();
  },
};
</script>

<style scoped>
.Tweet {
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

.tweetSection {
  width: 640px;
  margin-left: 332px;
}

.tweetSectionContent {
  border-left: 1px solid #e6ecf0;
  border-right: 1px solid #e6ecf0;
}

.tweetTitle {
  width: 100%;
  height: 74px;
  border-bottom: 1px solid #e6ecf0;
  padding: 24px 23px;
}

.tweetTitle a {
  display: flex;
  text-decoration: none;
}

.tweetTitle p {
  margin-left: 16px;
  font-size: 24px;
  font-weight: 700;
  color: #1c1c1c;
}

.TweetDetail {
}
</style>