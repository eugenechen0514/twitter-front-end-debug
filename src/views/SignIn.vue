<template>
  <div class="SignIn">
    <form @submit.stop.prevent="handleSubmit">
      <img
        class="logo"
        src="../assets/Icon.png"
        height="40px"
        width="40px"
        alt=""
      />
      <h1 class="title">登入 Alphitter</h1>
      <div class="labelInputGroup">
        <label for="account" class="formLabel">帳號</label>
        <input
          v-model="account"
          type="text"
          name="account"
          class="formInput"
          :class="{error: !isFirstTry && !account}"
          id="account"
          required
        />
        <div class="errorMessage" v-if="!isFirstTry && !account">
          <p class="errorText">{{accountErrorMessage}}</p>
        </div>
      </div>
      <div class="labelInputGroup">
        <label for="password" class="formLabel">密碼</label>
        <input
          v-model="password"
          type="password"
          name="password"
          class="formInput"
          id="password"
          required
        />
      </div>
      <button type="submit" class="signInBtn">登入</button>
      <div class="linkGroup">
        <router-link class="link" to="/signup">註冊Alphitter</router-link>
        •
        <router-link class="link" to="/admin/signin">後台登入</router-link>
      </div>
    </form>
  </div>
</template>

<script>
import { Toast } from "../utility/helpers";

export default {
  data() {
    return {
      account: "",
      password: "",
      isFirstTry: 'true',
      accountErrorMessage: '帳號不存在'
    };
  },
  methods: {
    handleSubmit() {
      if (!this.account | !this.password) {
        Toast.fire({
          icon: "warning",
          title: "請輸入帳號密碼",
        });
        return;
      }
      console.log({
        account: this.account,
        password: this.password,
      });
      this.$router.push({ name: "main" });
    },
  },
};
</script>

<style scoped>
.SignIn {
  padding-top: 65px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

form {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 540px;
}

.logo {
  margin-bottom: 25px;
}

.title {
  font-size: 23px;
  font-weight: 700;
  color: #1c1c1c;
  margin-bottom: 40px;
}

.labelInputGroup {
  background-color: #f5f8fa;
  width: 100%;
  height: 52px;
  margin-bottom: 32px;
  display: flex;
  flex-direction: column;
  position: relative;
}

.formLabel {
  font-size: 15px;
  font-weight: 500;
  color: #657786;
  margin-top: 5px;
  margin-left: 10px;
}

.formInput {
  border: 0;
  background-color: #f5f8fa;
  width: 100%;
  height: 30px;
  padding: 0 10px;
  line-height: 30;
  font-size: 15px;
  border-bottom: 2px solid #657786;
  font-size: 19px;
  font-weight: 500;
}

.formInput:focus,
.formInput:hover {
  outline: 0;
  border-bottom: 2px solid #50b5ff;
}

.errorMessage {
  position: absolute;
  width: 100%;
  top: 100%;
  display: flex;
  justify-content: space-between;
  font-size: 15px;
  font-weight: 500;
  color: #657786;
}

.errorText {
  color: #fc5a5a;
}

.signInBtn {
  margin-top: 10px;
  margin-bottom: 20px;
  width: 100%;
  height: 46px;
  border: 0;
  border-radius: 50px;
  background-color: #ff6600;
  font-size: 18px;
  font-weight: 700;
  color: #ffffff;
}

.signInBtn:hover {
  cursor: pointer;
}

.linkGroup {
  width: 100%;
  text-align: right;
  font-size: 18px;
  font-weight: 700;
  color: #0099ff;
}

.link {
  color: #0099ff;
}
</style>