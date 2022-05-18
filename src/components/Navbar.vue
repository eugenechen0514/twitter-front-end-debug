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
            ($route.path === '/user/self/comments') |
            ($route.path === '/user/self/likes')
        "
        alt=""
      />
      <img
        class="navLinkIcon"
        src="../assets/selfInfo.png"
        v-else
        alt=""
      />
      <router-link class="navLinkText"
      :class="{active: $route.path==='/user/self/comments' || $route.path==='/user/self/likes'}"
      to="/user/self/tweets">
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
          <textarea
            v-model="tweetText"
            class="postTweetModalText"
            placeholder="有什麼新鮮事?"
          >
          </textarea>
          <p
            class="postTweetModalErrorMessage"
            v-if="postTweetModalErrorMessage && !tweetText"
          >
            {{ postTweetModalErrorMessage }}
          </p>
          <p class="postTweetModalErrorMessage" v-if="tweetText.length > 140">
            字數不可超過140字
          </p>
          <button
            @click.stop.prevent="postTweetModalSubmit"
            class="postTweetModalSubmitBtn"
          >
            推文
          </button>
        </div>
      </div>
    </div>
    <div class="navLinkGroup navLogoutLinkGroup">
      <img class="navLinkIcon" src="../assets/logout.png" alt="" />
      <button @click.stop.prevent="logout" class="navLogoutBtn">登出</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      postTweetModalIsOpen: false,
      tweetText: "",
      postTweetModalErrorMessage: "",
    };
  },
  methods: {
    openPostTweetModal() {
      this.tweetText = "";
      this.postTweetModalErrorMessage = "";
      this.postTweetModalIsOpen = true;
    },
    closePostTweetModal() {
      this.tweetText = "";
      this.postTweetModalErrorMessage = "";
      this.postTweetModalIsOpen = false;
    },
    postTweetModalSubmit() {
      if (!this.tweetText) {
        this.postTweetModalErrorMessage = "內容不可留白";
        return;
      }
      console.log({ text: this.tweetText });
      this.tweetText = "";
      this.postTweetModalIsOpen = false;
    },
    logout () {
      this.$store.commit('revokeAuthentication')
    }
  },
};
</script>

<style scoped>
.Navbar {
  background-color: #fff;
  width: 178px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  z-index: 100;
}

.navbarLogo {
  margin-top: 13px;
  margin-left: 13px;
  margin-bottom: 13px;
  width: 40px;
  height: 40px;
}

.navLinkGroup {
  width: 100%;
  height: 58px;
  padding-left: 18px;
  display: flex;
  align-items: center;
}

.navLinkIcon {
  margin-right: 17px;
}

.navLinkText {
  font-size: 18px;
  font-weight: 700;
  text-decoration: none;
  color: #44444f;
}

.navLinkText.active {
  color: #ff6600;
}

.openPostTweetModalBtn {
  margin-top: 8px;
  width: 100%;
  height: 46px;
  border: 0;
  border-radius: 50px;
  background-color: #ff6600;
  font-size: 20px;
  font-weight: 400;
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
  background-color: rgba(0, 0, 0, 0.3);
  display: flex;
  justify-content: center;
}

#postTweetModalWrapper {
  width: 643px;
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
  margin-right: 8px;
}

.postTweetModalText {
  margin-top: 10px;
  width: 528px;
  height: 160px;
  resize: none;
  font-size: 16px;
  font-weight: 400;
  border: 0;
}

.postTweetModalText::placeholder {
  color: #6c757d;
}

.postTweetModalText:focus {
  outline: none;
}

.postTweetModalSubmitBtn {
  position: absolute;
  right: 16px;
  bottom: 16px;
  width: 64px;
  height: 40px;
  border-radius: 50px;
  border: 0;
  background-color: #ff6600;
  color: #fff;
  font-size: 16px;
  font-weight: 400;
}

.postTweetModalErrorMessage {
  position: absolute;
  bottom: 28px;
  right: 101px;
  font-size: 15px;
  font-weight: 500;
  color: #fc5a5a;
}

.navLogoutBtn {
  font-size: 18px;
  font-weight: 700;
  border: 0;
  background-color: #fff;
  color: #44444f;
}

.navLogoutBtn:hover {
  cursor: pointer;
}

.navLogoutLinkGroup {
  position: absolute;
  bottom: 0px;
}
</style>