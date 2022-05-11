<template>
  <div class="popularUsers">
    <h1>Popular</h1>
    <div class="user" v-for="user in popularUsers" :key="user.user.id">
      <img :src="user.user.image" width="50px" height="50px" alt="" />
      <div>
        <router-link to="">{{user.user.name}}</router-link> <br>
        <router-link to="">@{{user.user.account}}</router-link>
      </div>
      <button>跟隨</button>
    </div>
  </div>
</template>

<script>
const dummyData = {
  popularUsers: [
    {
      user: {
        id: 1,
        name: "awwfuq",
        account: "awwfuq",
        image:
          "https://img.ltn.com.tw/Upload/news/600/2016/04/17/phpFBRDIE.jpg",
      },
      isFollowed: true,
    },
    {
      user: {
        id: 2,
        name: "ohhfuck",
        account: "ohhfuck",
        image: "https://cdn2.ettoday.net/images/1027/1027134.jpg",
      },
      isFollowed: true,
    },
  ],
}

export default {
  data() {
    return {
      popularUsers: []
    }
  },
  methods: {
    fetchData() {
      this.popularUsers = dummyData.popularUsers
    }
  },
  created() {
    this.fetchData()
  }
}
</script>

<style scoped>
.popularUsers {
  width: 350px;
  height: 765px;
  border: 1px solid black;
  background-color: #fff;
  z-index: 50;
}
.user {
  width: 350px;
  height: 61px;
  border: 1px solid black;
  display: flex;
}
</style>