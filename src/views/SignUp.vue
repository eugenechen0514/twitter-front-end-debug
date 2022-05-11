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
          id="account"
          required
        />
      </div>
      <div class="labelInputGroup">
        <label for="name" class="formLabel">名稱</label>
        <input
          v-model="name"
          type="text"
          name="name"
          class="formInput"
          :class="{error: name.length>50}"
          id="name"
          required
        />
        <div class="errorMessage" v-if="name.length>50">
          <p class="errorText">字數超出上限!</p>
          <p>{{name.length}}/50</p>
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
          required
        />
      </div>

      <div class="labelInputGroup">
        <label for="password" class="formLabel">密碼確認</label>
        <input
          v-model="passwordCheck"
          type="password"
          name="passwordCheck"
          class="formInput"
          id="passwordCheck"
          required
        />
      </div>
      <button type="submit" class="signUpBtn">註冊</button>
      <button @click.stop.prevent="clearForm" class="cancelBtn">取消</button>
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
      if(this.name.length > 50) {
        Toast.fire({
          icon: 'warning',
          title: '名稱超出字數'
        })
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
    clearForm() {
      this.account = "";
      this.name = "";
      this.email = "";
      this.password = "";
      this.passwordCheck = "";
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

.formInput:focus, .formInput:hover {
  outline: 0;
  border-bottom: 2px solid #50b5ff;
}

.formInput.error {
  border-bottom: 2px solid #FC5A5A;
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
  color: #FC5A5A;
}

.signUpBtn {
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

.signUpBtn:hover {
  cursor: pointer;
}

.cancelBtn {
  font-size: 18px;
  font-weight: 700;
  color: #0099ff;
  text-decoration: underline;
  border: 0;
  background-color: #fff;
}

.cancelBtn:hover {
  cursor: pointer;
}
</style>