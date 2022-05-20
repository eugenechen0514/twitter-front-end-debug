<template>
  <div class="userCard">
    <img
      class="userBackgroundImage"
      src="https://static.vecteezy.com/system/resources/previews/002/523/012/original/wide-tropical-beach-banner-background-vector.jpg"
      width="600px"
      height="200px"
      alt=""
    />
    <img
      class="userImage"
      :src="currentUser.image"
      width="140px"
      height="140px"
      alt=""
    />
    <button class="userEdit" @click.stop.prevent="openUserEditModal">
      編輯個人資料
    </button>
    <div id="userEditModal" v-show="userEditModalIsOpen">
      <form id="userEditModalWrapper">
        <div class="editHeader">
          <button
            class="closeUserEditModalBtn"
            @click.stop.prevent="closeUserEditModal"
          >
            ✖
          </button>
          <p class="title">編輯個人資料</p>
          <button class="save" @click.stop.prevent="userEditModalSave">
            儲存
          </button>
        </div>
        <div class="userEditModalContent">
          <div class="backgroundImageGroup">
            <img
              :src="modalBackgroundImage"
              class="modalBackgroundImage"
              alt=""
            />
            <img src="../assets/camera.png" class="backgroundCamera" alt="" />
            <img src="../assets/x.png" class="backgroundX" alt="" />
          </div>
          <div class="userImageGroup">
            <img class="modalUserImage" :src="modalUserImage" alt="" />
            <img src="../assets/camera.png" class="userCamera" alt="" />
          </div>
          <div class="inputName">
            <label for="modalName" class="formLabel">名稱</label>
            <input
              v-model="modalName"
              type="text"
              name="modalName"
              class="formInput"
              :class="{
                error: modalName.length > 50 || modalName.length === 0,
              }"
              id="modalName"
              required
            />
            <div class="nameReminder">
              <p v-if="modalName.length > 50" class="errorText">字數超出上限</p>
              <p v-if="modalName.length === 0" class="errorText">不可為空白</p>
              <span class="nameLength">{{ modalName.length }}/50</span>
            </div>
          </div>
          <div class="inputDescription">
            <label for="modalDescription" class="formLabel">自我介紹</label>
            <textarea
              v-model="modalDescription"
              rows="4"
              name="modalDescription"
              class="formInput formInputDes"
              :class="{
                error: modalDescription.length > 160,
              }"
              id="modalDescription"
              required
            />
            <div class="descriptionReminder">
              <p v-if="modalDescription.length > 160" class="errorText">
                字數超出上限
              </p>
              <span class="descriptionLength"
                >{{ modalDescription.length }}/160</span
              >
            </div>
          </div>
        </div>
      </form>
    </div>
    <div class="userInformation">
      <p class="userName">{{ currentUser.name }}</p>
      <p class="userAccount">@{{ currentUser.account }}</p>
      <p class="userDescription">
        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
        sint.
      </p>
      <router-link class="userFollowersCount" to="/user/1/followings"
        >34個<span>跟隨中</span></router-link
      >
      //
      <router-link class="userFollowingsCount" to="/user/1/followers"
        >59個<span>跟隨者</span></router-link
      >
    </div>
  </div>
</template>

<script>
export default {
  props: {
    currentUser: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      modalBackgroundImage:
        "https://static.vecteezy.com/system/resources/previews/002/523/012/original/wide-tropical-beach-banner-background-vector.jpg",
      modalUserImage: this.currentUser.image,
      modalName: "ererjj",
      modalDescription: "erer",
      nameErrorMessage: "",
      descriptionErrorMessage: "",
      userEditModalIsOpen: false,
    };
  },
  methods: {
    openUserEditModal() {
      this.userEditModalIsOpen = true;
    },
    closeUserEditModal() {
      this.tweetText = "";
      this.postTweetModalErrorMessage = "";
      this.userEditModalIsOpen = false;
    },
    userEditModalSave() {
      if (!this.modalName) {
        this.nameErrorMessage = "姓名不可留白";
        return;
      } else if (this.modalName.length > 50) {
        this.nameErrorMessage = "姓名字數超過50字";
        return;
      }
      if (!this.modalDescription.length > 160) {
        this.descriptionErrorMessage = "自我介紹超過160字";
        return;
      }
      this.userEditModalIsOpen = false;
    },
  },
};
</script>


<style scoped>
.userCard {
  height: 375px;
  /* border: 1px solid black; */
  position: relative;
  margin-bottom: 31px;
}

.userBackgroundImage {
  width: 100%;
  height: 200px;
  object-fit: cover;
}

.userImage {
  position: absolute;
  top: 124px;
  left: 14px;
  z-index: 10;
  border-radius: 50%;
  border: 4px solid #ffffff;
}

.userEdit {
  position: absolute;
  right: 30px;
  top: 220px;
  border: 1px solid #ff6600;
  border-radius: 50px;
  color: #ff6600;
  font-size: 16px;
  padding: 8px 16px;
  background: #ffffff;
}

.userInformation {
  margin-top: 72px;
  margin-left: 16px;
}

.userName {
  font-weight: 700;
  line-height: 26px;
  font-size: 18px;
}

.userAccount {
  font-weight: 400;
  font-size: 14px;
  line-height: 22px;
  color: #6c757d;
}

.userDescription {
  margin-top: 6px;
  font-size: 14px;
  line-height: 22px;
  margin-bottom: 8px;
}
.userFollowersCount,
.userFollowingsCount {
  text-decoration: none;
  color: black;
  font-size: 14px;
}
span {
  color: #6c757d;
}

#userEditModal {
  position: fixed;
  left: 0px;
  top: 0px;
  right: 0px;
  bottom: 0px;
  z-index: 999;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.3);
}

#userEditModalWrapper {
  width: 634px;
  height: 610px;
  background-color: #fff;
  margin-top: 56px;
  margin-left: 334px;
  border-radius: 14px;
}

.editHeader {
  width: 100%;
  height: 57px;
  display: flex;
  border-bottom: 1px solid #e6ecf0;
}

.closeUserEditModalBtn {
  height: 15px;
  width: 15px;
  margin-top: 20.5px;
  margin-left: 19.5px;
  font-size: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #ff6600;
  border: 0;
  background-color: #fff;
}

.closeUserEditModalBtn:hover,
.save:hover {
  cursor: pointer;
}

.title {
  margin-left: 36.5px;
  margin-top: 15px;
  font-weight: 700;
  font-size: 18px;
  line-height: 26px;
  color: #1c1c1c;
}

.save {
  width: 64px;
  height: 40px;
  margin-left: 375px;
  margin-top: 8px;
  background: #ff6600;
  border-radius: 50px;
  border: none;
  color: #ffffff;
  font-size: 16px;
  line-height: 24px;
}

.userEditModalContent {
  position: relative;
}

.backgroundImageGroup {
  position: relative;
  background-color: #444444;
  width: 100%;
  height: 200px;
}

.modalBackgroundImage {
  width: 100%;
  height: 200px;
  opacity: 0.5;
}

.backgroundCamera {
  position: absolute;
  top: 90px;
  left: 279px;
  width: 21px;
  height: 20px;
  z-index: 10;
}

.backgroundX {
  position: absolute;
  top: 92.5px;
  left: 335px;
  width: 15px;
  height: 15px;
  z-index: 10;
}

.backgroundCamera:hover,
.backgroundX:hover {
  cursor: pointer;
}

.userImageGroup {
  position: absolute;
  top: 124px;
  left: 14px;
  background-color: #555555;
  border-radius: 50%;
  width: 140px;
  height: 140px;
  border: 4px solid #ffffff;
}

.modalUserImage {
  position: absolute;
  top: 0px;
  left: 0px;
  z-index: 10;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  opacity: 0.5;
}

.userCamera {
  position: absolute;
  top: 56px;
  left: 56px;
  width: 21px;
  height: 20px;
  z-index: 20;
}

.userCamera:hover {
  cursor: pointer;
}

.inputName,
.inputDescription {
  width: 602px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  position: relative;
}

.inputName {
  margin-top: 80px;
}

.inputDescription {
  margin-top: 32px;
}

.formLabel {
  font-size: 14px;
  font-weight: 400;
  line-height: 22px;
  color: #696974;
  padding-top: 2px;
  padding-left: 10px;
  background-color: #f5f8fa;
}

.formInput {
  border: 0;
  background-color: #f5f8fa;
  width: 100%;
  line-height: 26px;
  padding: 0 10px 2px;
  font-size: 16px;
  border-bottom: 2px solid #657786;
  font-weight: 400;
}

.formInputDes {
  padding-bottom: 15px;
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
  display: flex;
  justify-content: space-between;
  font-size: 15px;
  font-weight: 500;
  color: #657786;
}

.nameReminder,
.descriptionReminder {
  position: relative;
}

.errorText {
  color: #fc5a5a;
  position: absolute;
  left: 0;
  top: 4px;
  font-weight: 500;
  font-size: 14px;
  line-height: 18px;
}

.nameLength,
.descriptionLength {
  position: absolute;
  right: 0;
  top: 4px;
  font-weight: 500;
  font-size: 12px;
  line-height: 20px;
}
</style>