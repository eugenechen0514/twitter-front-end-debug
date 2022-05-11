<template>
  <div class="Navbar">
    <router-link to="/signin">
      <img
        class="navbarLogo"
        src="../assets/Icon.png"
        width="50px"
        height="50px"
        alt=""
      />
    </router-link>
    <div class="navLinkGroup">
      <img
        class="navLinkIcon"
        src="../assets/home-active.png"
        v-if="$route.path === '/main'"
        alt=""
      />
      <img class="navLinkIcon" src="../assets/home.png" v-else alt="" />
      <router-link class="navLinkText" to="/main"> 首頁 </router-link>
    </div>
    <div class="navLinkGroup">
      <img
        class="navLinkIcon"
        src="../assets/selfInfo-active.png"
        v-if="
          ($route.path === '/user/self/tweets') |
            ($route.path === '/user/self/tweetsandcomments') |
            ($route.path === '/user/self/likes')
        "
        alt=""
      />
      <img class="navLinkIcon" src="../assets/selfInfo.png" v-else alt="" />
      <router-link class="navLinkText" to="/user/self/tweets">
        個人資料
      </router-link>
    </div>
    <div class="navLinkGroup">
      <img
        class="navLinkIcon"
        src="../assets/setting-active.png"
        v-if="$route.path === '/setting'"
        alt=""
      />
      <img class="navLinkIcon" src="../assets/setting.png" v-else alt="" />
      <router-link class="navLinkText" to="/setting"> 設定 </router-link>
    </div>
    <button
      class="openPostTweetModalBtn"
      @click.stop.prevent="openPostTweetModal"
    >
      推文
    </button>
    <!-- 推文modal -->
    <div id="postTweetModal" v-show="postTweetModalIsOpen">
      <div id="postTweetModalWrapper">
        <button
          class="closePostTweetModalBtn"
          @click.stop.prevent="closePostTweetModal"
        >
          ✖
        </button>
        <div class="postTweetModalContent">
          <img
            src="https://img.ltn.com.tw/Upload/news/600/2016/04/17/phpFBRDIE.jpg"
            width="50px"
            height="50px"
            class="postTweetModalUserImg"
            alt=""
          />
          <textarea v-model="tweetText" class="postTweetModalText" placeholder="有什麼新鮮事?">
          </textarea>
          <button @click.stop.prevent="postTweetModalSubmit" class="postTweetModalSubmitBtn">推文</button>
        </div>
      </div>
    </div>
    <div class="navLinkGroup navLogoutLinkGroup">
      <img class="navLinkIcon" src="../assets/logout.png" alt="" />
      <button class="navLogoutBtn">登出</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      postTweetModalIsOpen: false,
      tweetText: ''
    };
  },
  methods: {
    openPostTweetModal() {
      this.postTweetModalIsOpen = true;
    },
    closePostTweetModal() {
      this.postTweetModalIsOpen = false;
    },
    postTweetModalSubmit() {
      console.log({text: this.tweetText})
      this.tweetText = ''
      this.postTweetModalIsOpen = false
    }
  },
};
</script>

<style scoped>
.Navbar {
  border: 1px solid black;
  background-color: #fff;
  width: 235px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  z-index: 100;
}

.navbarLogo {
  margin-top: 10px;
  margin-left: 10px;
  margin-bottom: 45px;
}

.navLinkGroup {
  margin-left: 10px;
  margin-bottom: 30px;
  display: flex;
  align-items: center;
}

.navLinkIcon {
  margin-right: 20px;
}

.navLinkText {
  font-size: 18px;
  font-weight: 700;
  text-decoration: none;
  color: black;
}

.navLinkText.active {
  color: #ff6600;
}

.openPostTweetModalBtn {
  width: 100%;
  height: 38px;
  border: 0;
  border-radius: 100px;
  background-color: #ff6600;
  font-size: 18px;
  font-weight: 500;
  color: #fff;
}

#postTweetModal {
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

#postTweetModalWrapper {
  width: 600px;
  height: 300px;
  background-color: #fff;
  margin-top: 54px;
  border-radius: 14px;
}

.closePostTweetModalBtn {
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

.closePostTweetModalBtn:hover {
  cursor: pointer;
}

.postTweetModalContent {
  border-top: 1px solid #e6ecf0;
  height: 245px;
  padding: 15px;
  display: flex;
  position: relative;
}

.postTweetModalUserImg {
  border-radius: 50%;
  margin-right: 15px;
}

.postTweetModalText {
  width: 510px;
  height: 170px;
  resize: none;
  font-size: 18px;
  font-weight: 500;
  border: 0;
}

.postTweetModalText:focus {
  outline: none;
}

.postTweetModalSubmitBtn {
  position: absolute;
  right: 15px;
  bottom: 15px;
  width: 66px;
  height: 38px;
  border-radius: 100px;
  border: 0;
  background-color: #FF6600;
  color: #FFF;
  font-size: 18px;
  font-weight: 500;
}

.navLogoutBtn {
  font-size: 18px;
  font-weight: 700;
  border: 0;
  background-color: #fff;
}

.navLogoutBtn:hover {
  cursor: pointer;
}

.navLogoutLinkGroup {
  position: absolute;
  bottom: 17px;
}
</style>