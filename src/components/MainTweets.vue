<template>
  <div class="mainTweets">
    <div class="mainTweet" v-for="tweet in currentTweets" :key="tweet.tweet.id">
      <img class="mainTweetUserImage" :src="tweet.user.image" alt="" />
      <div class="mainTweetContent">
        <div class="mainTweetUserNameGroup">
          <router-link class="mainTweetUserName" to="">{{
            tweet.user.name
          }}</router-link>
          <router-link class="mainTweetUserAccount" to=""
            >@{{ tweet.user.account }}</router-link
          >
          <p class="mainTweetCreatedAt">・{{ tweet.tweet.createAt }}</p>
        </div>
        <p class="mainTweetText">
          <router-link
            :to="{ name: 'tweet', params: { id: tweet.tweet.id } }"
            >{{ tweet.tweet.text }}</router-link
          >
        </p>
        <div class="mainTweetBtnGroup">
          <button
            class="mainTweetBtn"
            @click.stop.prevent="openReplyTweetModal"
          >
            <img src="../assets/comment-icon.png" alt="" />
            <p>{{ tweet.tweet.commentsCount }}</p>
          </button>

          <button class="mainTweetBtn">
            <img
              src="../assets/like-icon-active.png"
              v-if="tweet.tweet.isLiked"
              alt=""
            />
            <img src="../assets/like-icon.png" v-else alt="" />
            <p class="active" v-if="tweet.tweet.isLiked">
              {{ tweet.tweet.likesCount }}
            </p>
            <p v-else>{{ tweet.tweet.likesCount }}</p>
          </button>
        </div>
      </div>
    </div>
    <!-- replyModal -->
    <div id="replyTweetModal" v-show="replyTweetModalIsOpen">
      <div id="replyTweetModalWrapper">
        <div class="replyTweetModalConnectLine"></div>
        <button
          class="closeReplyTweetModalBtn"
          @click.stop.prevent="closeReplyTweetModal"
        >
          ✖
        </button>
        <div class="replyTweetModalContent">
          <div class="replyTweet">
            <img
              class="replyTweetUserImage"
              src="https://img.ltn.com.tw/Upload/news/600/2016/04/17/phpFBRDIE.jpg"
              alt=""
            />
            <div class="replyTweetContent">
              <div class="replyTweetUserNameGroup">
                <router-link class="replyTweetUserName" to=""
                  >awwfuq</router-link
                >
                <router-link class="replyTweetUserAccount" to=""
                  >@awwfuq</router-link
                >
                <p class="replyTweetCreatedAt">・2022/5/11</p>
              </div>
              <p class="replyTweetText">helloooo</p>
              <p class="replyTweetFor">回覆給 <span>@awwfuq</span></p>
            </div>
          </div>
          <div class="currentUserReply">
            <img
              src="https://img.ltn.com.tw/Upload/news/600/2016/04/17/phpFBRDIE.jpg"
              width="50px"
              height="50px"
              class="currentUserReplyUserImg"
              alt=""
            />
            <textarea
              v-model="replyText"
              class="currentUserReplyText"
              placeholder="推你的回覆"
            >
            </textarea>
          </div>
          <button
            @click.stop.prevent="replyTweetModalSubmit"
            class="replyTweetModalSubmitBtn"
          >
            回覆
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    currentTweets: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      replyTweetModalIsOpen: false,
      replyText: "",
    };
  },
  methods: {
    openReplyTweetModal() {
      this.replyTweetModalIsOpen = true;
    },
    closeReplyTweetModal() {
      this.replyTweetModalIsOpen = false;
    },
    replyTweetModalSubmit() {
      console.log({ text: this.replyText });
      this.replyText = "";
      this.replyTweetModalIsOpen = false;
    },
  },
};
</script>

<style scoped>
.mainTweets {
  width: 600px;
}
.mainTweet {
  border-bottom: 1px solid #e6ecf0;
  min-height: 136px;
  display: flex;
  padding: 13px 15px 15px 15px;
}

.mainTweetUserImage {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin-right: 10px;
}

.mainTweetContent {
  width: 510px;
}

.mainTweetUserNameGroup {
  display: flex;
}

.mainTweetUserName {
  font-size: 15px;
  font-weight: 700;
  color: #1c1c1c;
  margin-right: 5px;
  text-decoration: none;
}

.mainTweetUserAccount {
  font-size: 15px;
  font-weight: 500;
  color: #657786;
  text-decoration: none;
}

.mainTweetCreatedAt {
  font-size: 15px;
  font-weight: 500;
  color: #657786;
}

.mainTweetText {
  width: 100%;
  min-height: 50px;
  margin-top: 6px;
}

.mainTweetText a {
  text-decoration: none;
  font-size: 15px;
  font-weight: 500;
  color: #1c1c1c;
  line-height: 22px;
}

.mainTweetBtnGroup {
  display: flex;
  margin-top: 14px;
}

.mainTweetBtn {
  padding: 0;
  width: 40px;
  border: 0;
  margin-right: 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #fff;
  font-size: 13px;
  font-weight: 500;
  color: #657786;
}

.mainTweetBtn .active {
  color: #e0245e;
}
.mainTweetBtn:hover {
  cursor: pointer;
}

#replyTweetModal {
  position: fixed;
  left: 0px;
  top: 0px;
  right: 0px;
  bottom: 0px;
  z-index: 999;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
}

#replyTweetModalWrapper {
  width: 600px;
  height: 450px;
  background-color: #fff;
  margin-top: 54px;
  border-radius: 14px;
  position: relative;
}

.closeReplyTweetModalBtn {
  height: 24px;
  width: 24px;
  margin-top: 15px;
  margin-left: 15px;
  margin-bottom: 15px;
  font-size: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #ff6600;
  border: 0;
  background-color: #fff;
}

.closeReplyTweetModalBtn:hover {
  cursor: pointer;
}

.replyTweetModalContent {
  border-top: 1px solid #e6ecf0;
  height: 245px;
}

.currentUserReply {
  display: flex;
  padding: 10px 15px 15px 15px;
  margin-top: 23px;
}

.currentUserReplyUserImg {
  border-radius: 50%;
  margin-right: 15px;
}

.currentUserReplyText {
  width: 510px;
  height: 170px;
  resize: none;
  font-size: 18px;
  font-weight: 500;
  border: 0;
}

.currentUserReplyText:focus {
  outline: none;
}

.replyTweetModalSubmitBtn {
  position: absolute;
  right: 15px;
  bottom: 15px;
  width: 66px;
  height: 38px;
  border-radius: 100px;
  border: 0;
  background-color: #ff6600;
  color: #fff;
  font-size: 18px;
  font-weight: 500;
}

.replyTweet {
  display: flex;
  padding: 13px 15px 15px 15px;
  position: relative;
}

.replyTweetUserImage {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin-right: 10px;
}

.replyTweetUserNameGroup {
  display: flex;
}

.replyTweetUserName {
  font-size: 15px;
  font-weight: 700;
  color: #1c1c1c;
  margin-right: 5px;
  text-decoration: none;
}

.replyTweetUserAccount {
  font-size: 15px;
  font-weight: 500;
  color: #657786;
  text-decoration: none;
}

.replyTweetCreatedAt {
  font-size: 15px;
  font-weight: 500;
  color: #657786;
}

.replyTweetText {
  width: 500px;
  min-height: 50px;
  margin-top: 6px;
}

.replyTweetFor {
  margin-top: 19px;
  font-size: 13px;
  font-weight: 500;
  color: #657786;
}

.replyTweetFor span {
  color: #ff6600;
}

.replyTweetModalConnectLine {
  width: 2px;
  height: 80px;
  background-color: #ccd6dd;
  position: absolute;
  left: 40px;
  top: 128px;
}
</style>