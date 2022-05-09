<template>
  <div class="navbar">
    <router-link to="/main">
      首頁
    </router-link>
    <router-link to="/user/self/tweets">
      個人資料
    </router-link>
    <router-link to="/setting">
      設定
    </router-link>
    <button>
      推文
    </button>
    <!-- 推文modal -->
    <button>
      登出
    </button>
  </div>
</template>

<style scoped>
  .navbar {
    width: 235px;
    height: 100vh;
    border: 1px solid black;
    display: flex;
    flex-direction: column;
  }
</style>