<template>
  <div class="mainPage-container">
    <input type="checkbox" v-model="isChecked" id="checkbox" />
    <label for="checkbox"
      >Open Google (when checked) / YouTube (when unchecked)</label
    >
    <label v-if="isChecked">Denem Denemeadwad</label>
    <button @click="openSite">Open Site</button>
  </div>
</template>

<script>
/* global chrome */
export default {
  data() {
    return {
      isChecked: false, // Default unchecked
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
button {
  background-color: #c71b15;
  color: white;
  padding: 10px;
  border: none;
  cursor: pointer;
}

input {
  margin-right: 10px;
}
.mainPage-container {
  display: flex;
  width: 450px;
  height: 750px;
  background: #383636;
  margin: 0 px;
  padding: 0px;
}
</style>
<style>
body {
  overflow: hidden; /* Hide scrollbars */
  margin: 0px;
  width: 450px;
  height: 600px;
}
</style>
