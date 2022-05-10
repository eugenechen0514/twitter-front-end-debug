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
        <input v-model="account" type="text" name="account" class="formInput" id="account" required />
      </div>
      <div class="labelInputGroup">
        <label for="password" class="formLabel">密碼</label>
        <input v-model="password" type="password" name="password" class="formInput" id="password" required />
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
import {Toast} from '../utility/helpers'

export default {
  data() {
    return {
      account: '',
      password: '',
    }
  },
  methods: {
    handleSubmit() {
      if(!this.account | !this.password) {
        Toast.fire({
          icon: 'warning',
          title: '請輸入帳號密碼'
        })
        return
      }
      console.log({
        account: this.account,
        password: this.password
      })
      this.$router.push({name:'main'})
    }
  }
  
}
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
  border-bottom: 2px solid #657786;
  padding: 5px 10px 0px 10px;
}

.formLabel {
  font-size: 15px;
  font-weight: 500;
  color: #657786;
}

.formInput {
  border: 0;
  background-color: #f5f8fa;
  height: 30px;
  line-height: 30;
  font-size: 15px;
}

.formInput:focus {
  outline: 0;
}

.signInBtn {
  margin-top: 42px;
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
  color: #0099FF;
}

.link {
  color: #0099FF;
}
</style>