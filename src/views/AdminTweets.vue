<template>
  <div class="AdminTweets">
    <AdminNavbar id="AdminNavbar" />
    <div class="adminTweetsSection">
      <div class="adminTweetsSectionContent">
        <div class="adminTweetsTitle">
          <h1 class="adminTweetsTitleText">推文清單</h1>
        </div>
        <div class="adminTweetsTable">
          <AdminTweet/>
          <AdminTweet/>
          <AdminTweet/>
          <AdminTweet/>
          <AdminTweet/>
          <AdminTweet/>
          <AdminTweet/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AdminNavbar from "../components/AdminNavbar.vue";
import AdminTweet from '../components/AdminTweet.vue'

export default {
  components: {
    AdminNavbar,
    AdminTweet
  },
};
</script>

<style scoped>
.AdminTweets {
  width: 100%;
  display: grid;
}

#AdminNavbar {
  justify-self: start;
  position: fixed;
  margin-left: 130px;
}

.adminTweetsSection {
  width: 937px;
  margin-left: 332px;
}

.adminTweetsSectionContent {
  width: 100%;
  border-left: 1px solid #e6ecf0;
  border-right: 1px solid #e6ecf0;
}

.adminTweetsTitle {
  width: 100%;
  height: 74px;
  border-bottom: 1px solid #E6ECF0;
  padding: 24px 23px;
  font-size: 24px;
  font-weight: 700;
  color: #1c1c1c;
}

.adminTweetsTable {
  width: 100%;
}
</style>