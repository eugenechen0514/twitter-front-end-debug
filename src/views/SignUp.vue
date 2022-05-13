<template>
  <div class="SignUp">
    <form @submit.stop.prevent="handleSubmit">
      <router-link to="/signin">
        <img
          class="logo"
          src="../assets/Icon.png"
          height="40px"
          width="40px"
          alt=""
        />
      </router-link>
      <h1 class="title">建立你的帳號</h1>
      <div class="labelInputGroup">
        <label for="account" class="formLabel">帳號</label>
        <input
          v-model="account"
          type="text"
          name="account"
          class="formInput"
          :class="{ error: account.length > 50 }"
          id="account"
          placeholder="請輸入帳號"
          required
        />
        <div class="errorMessage" v-if="account.length > 0">
          <p class="errorText" v-if="account.length > 50">字數超出上限!</p>
          <p class="wordsCount">{{ account.length }}/50</p>
        </div>
      </div>
      <div class="labelInputGroup">
        <label for="name" class="formLabel">名稱</label>
        <input
          v-model="name"
          type="text"
          name="name"
          class="formInput"
          :class="{ error: name.length > 50 }"
          id="name"
          placeholder="請輸入使用者名稱"
          required
        />
        <div class="errorMessage" v-if="name.length > 0">
          <p class="errorText" v-if="name.length > 50">字數超出上限!</p>
          <p class="wordsCount">{{ name.length }}/50</p>
        </div>
      </div>
      <div class="labelInputGroup">
        <label for="email" class="formLabel">Email</label>
        <input
          v-model="email"
          type="email"
          name="email"
          class="formInput"
          id="email"
          placeholder="請輸入Email"
          required
        />
      </div>
      <div class="labelInputGroup">
        <label for="password" class="formLabel">密碼</label>
        <input
          v-model="password"
          type="password"
          name="password"
          class="formInput"
          id="password"
          placeholder="請設定密碼"
          required
        />
        <div class="errorMessage" v-if="password.length > 0">
          <p class="errorText" v-if="password.length > 50">字數超出上限!</p>
          <p class="wordsCount">{{ password.length }}/50</p>
        </div>
      </div>

      <div class="labelInputGroup">
        <label for="password" class="formLabel">密碼確認</label>
        <input
          v-model="passwordCheck"
          type="password"
          name="passwordCheck"
          class="formInput"
          id="passwordCheck"
          placeholder="請再次輸入密碼"
          required
        />
        <div class="errorMessage" v-if="passwordCheck.length > 0">
          <p class="errorText" v-if="passwordCheck.length > 50">字數超出上限!</p>
          <p class="wordsCount">{{ passwordCheck.length }}/50</p>
        </div>
      </div>
      <button type="submit" class="signUpBtn">註冊</button>
      <button @click.stop.prevent="cancelSubmit" class="cancelBtn">取消</button>
    </form>
  </div>
</template>

<script>
import { Toast } from "../utility/helpers";

export default {
  data() {
    return {
      account: "",
      name: "",
      email: "",
      password: "",
      passwordCheck: "",
    };
  },
  methods: {
    handleSubmit() {
      if (
        !this.account |
        !this.password |
        !this.name |
        !this.email |
        this.passwordCheck
      ) {
        Toast.fire({
          icon: "warning",
          title: "請輸入帳號密碼",
        });
        return;
      }
      if (this.name.length > 50) {
        Toast.fire({
          icon: "warning",
          title: "名稱超出字數",
        });
      }
      console.log({
        account: this.account,
        name: this.name,
        email: this.email,
        password: this.password,
        passwordCheck: this.passwordCheck,
      });
      this.$router.push({ name: "sign-in" });
    },
    cancelSubmit() {
      this.$router.push('/signin')
    },
  },
};
</script>

<style scoped>
.SignUp {
  padding-top: 65px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

form {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 356px;
}

.logo {
  margin-bottom: 29px;
}

.title {
  font-size: 28px;
  font-weight: 700;
  color: #1c1c1c;
  margin-bottom: 40px;
}

.labelInputGroup {
  background-color: #f5f8fa;
  width: 100%;
  height: 54px;
  margin-bottom: 32px;
  display: flex;
  flex-direction: column;
  position: relative;
}

.formLabel {
  font-size: 14px;
  font-weight: 400;
  color: #696974;
  margin-top: 5px;
  margin-left: 10px;
}

.formInput {
  border: 0;
  background-color: #f5f8fa;
  width: 100%;
  padding: 2px 10px;
  line-height: 26px;
  font-size: 16px;
  border-bottom: 2px solid #657786;
  font-weight: 400;
  position: absolute;
  bottom: 0px;
}

.formInput::placeholder {
  color: #b5b5be;
}

.formInput:focus,
.formInput:hover {
  outline: 0;
  border-bottom: 2px solid #50b5ff;
}

.formInput.error {
  border-bottom: 2px solid #fc5a5a;
}

.errorMessage {
  position: absolute;
  width: 100%;
  top: 100%;
  font-size: 12px;
  font-weight: 500;
  line-height: 20px;
  color: #657786;
}

.errorText {
  color: #fc5a5a;
  position: absolute;
  left: 0px;
}

.wordsCount {
  position: absolute;
  right: 0px;
}

.signUpBtn {
  margin-top: 8px;
  margin-bottom: 22px;
  width: 100%;
  height: 46px;
  border: 0;
  border-radius: 50px;
  background-color: #ff6600;
  font-size: 20px;
  font-weight: 400;
  color: #ffffff;
}

.signUpBtn:hover {
  cursor: pointer;
}

.cancelBtn {
  font-size: 16px;
  font-weight: 400;
  color: #0062ff;
  text-decoration: underline;
  border: 0;
  background-color: #fff;
}

.cancelBtn:hover {
  cursor: pointer;
}
</style>