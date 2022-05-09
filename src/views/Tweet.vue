<template>
  <div class="Tweet">
    <h1>Tweet</h1>
    <Navbar />
    <div class="TweetContainer">
      <div class="tweetContent">
        <div>
          <img :src="user.image" width="50px" height="50px" alt="" />
          <router-link to="">{{user.name}}</router-link>
          <router-link to="">@{{user.account}}</router-link>
        </div>
        <div>
          <p>{{tweet.text}}</p>
        </div>
        <div>
          <p>{{tweet.createAt}}</p>
        </div>
      </div>
      <div class="commentsLikesCount">
        <p style="display: inline">commentsCount: {{tweet.commentsCount}}</p>
        <p style="display: inline">LikesCount: {{tweet.likesCount}}</p>
      </div>
      <div class="commentsLikesBtn">
        <button>commentModal</button>
        <button>Like</button>
      </div>
      <div class="comments">
        <div v-for="comment in tweet.comments" :key="comment.comment.id" class="comment">
          <img :src="comment.user.image" width="50px" height="50px" alt="" />
          <div>
            <router-link to="">{{comment.user.name}}</router-link>
            <router-link to="">@{{comment.user.account}}</router-link>
            <p style="display: inline">。{{comment.comment.createAt}}</p>
            <p>回覆@{{user.account}}</p>
            <p>{{comment.comment.text}}</p>
          </div>
        </div>
      </div>
    </div>
    <PopularUsers />
  </div>
</template>

<script>
import Navbar from "../components/Navbar.vue";
import PopularUsers from "../components/PopularUsers.vue";

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
  },
  data() {
    return {
      tweet: {},
      user: {},
      currentUser: dummyUser.currentUser
    }
  },
  methods: {
    fetchData() {
      this.tweet = dummyData.tweet
      this.user = dummyData.user
    }
  },
  created() {
    this.fetchData()
  }
};
</script>

<style scoped>
.Tweet {
  display: flex;
  justify-content: center;
  gap: 10px;
}

.TweetContainer {
  width: 600px;
  border: 1px solid black;
}

.tweetContent {
  border: 1px solid black;
}

.commentsLikesCount {
  border: 1px solid black;
  display: flex;
  justify-content: space-evenly;
}

.commentsLikesBtn {
  border: 1px solid black;
  display: flex;
  justify-content: space-evenly;
}

.comments {
  border: 1px solid black;
  padding: 15px;
}

.comment {
  border: 1px solid black;
  display: flex;
  min-height: 91px;
}
</style>