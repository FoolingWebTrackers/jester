<template>
  <div class="mainPage-header">
    <img :src="require('@/assets/icon-128.png')" alt="Icon" class="icon" />
  </div>
  <div class="mainPage-container">
    <div class="button-container">
      <div class="button-group">
        <button class="icon-button"></button>
        <label>Create</label>
        <label style="margin-top: -3px">Personas</label>
      </div>
      <div class="button-group">
        <button class="icon-button"></button>
        <label>Fake Mic</label>
      </div>
      <div class="button-group">
        <button class="icon-button"></button>
        <label>Profile</label>
      </div>
      <div class="button-group">
        <button class="icon-button"></button>
        <label>Settings</label>
      </div>
    </div>
  </div>
  <div class="mainPage-footer">Jester</div>
</template>

<script>
/* global chrome */
export default {
  data() {
    return {
      isChecked: false, // Default unchecked
      iconSrc: "../../public/icon-128.png",
    };
  },
  methods: {
    openSite() {
      const url = this.isChecked
        ? "https://www.google.com"
        : "https://www.youtube.com";
      chrome.tabs.create({ url });
    },
  },
};
</script>

<style scoped>
.icon {
  width: 45px; /* Adjust the size as needed */
  height: auto; /* Maintain aspect ratio */
}
.icon-button {
  width: 50px;
  height: 50px;
  background-color: #4a0000;
  border-radius: 50%;
  border: none;
  cursor: pointer;
}
.button-container {
  align-items: baseline;
  display: flex;
  margin-top: 20px;
  width: 100%;
  justify-content: space-evenly;
  height: 100px; /* Adjusted height to accommodate labels */
}
.button-group {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
}

label {
  margin-top: 5px; /* Space between button and label */
  color: #d1d1d1; /* Adjust label color as needed */
}

input {
  margin-right: 10px;
}
.mainPage-footer {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 30px;
  background: #383636;
  box-shadow: 0px -10px 20px rgba(0, 0, 0, 0.5);
  color: #761626;
  font-size: 15pt;
}
.mainPage-header {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #383636;
  height: 70px;
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.5);
}
.mainPage-container {
  display: flex;
  width: 300px;
  height: 500px;
  background: #1e1e1e;
  margin: 0 px;
  padding: 0px;
}
</style>
<style>
body {
  overflow: hidden; /* Hide scrollbars */
  margin: 0px;
  width: 300px;
  height: 600px;
  background: transparent;
}
</style>
