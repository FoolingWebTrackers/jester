<template>
  <div class="mainPage-header">
    <img :src="require('@/assets/icon-128.png')" alt="Icon" class="icon" />
  </div>
  <div class="mainPage-container">
    <div class="button-container">
      <div class="button-group">
        <button class="icon-button">
          <i class="fa-solid fa-plus"></i>
        </button>
        <label>Create</label>
        <label style="margin-top: -3px">Personas</label>
      </div>
      <div class="button-group">
        <button class="icon-button">
          <i class="fa-solid fa-microphone"></i>
        </button>
        <label>Fake Mic</label>
      </div>
      <div class="button-group">
        <button class="icon-button">
          <i class="fa-solid fa-user"></i>
        </button>
        <label>Profile</label>
      </div>
      <div class="button-group">
        <button class="icon-button">
          <i class="fa-solid fa-gear"></i>
        </button>
        <label>Settings</label>
      </div>
    </div>
    <!-- Persona Container -->
    <div class="persona-container">
      <div v-for="persona in personas" :key="persona.id" class="persona-box">
        <img :src="persona.photo" alt="Persona Photo" class="persona-photo" />
        <div class="persona-info">
          <h3 class="persona-name">{{ persona.name }}</h3>
          <p class="persona-description">{{ persona.description }}</p>
        </div>
        <button class="select-button" @click="selectPersona(persona)">
          Select
        </button>
      </div>
    </div>
  </div>

  <div class="mainPage-footer unselectable">Jester</div>
</template>

<script>
/* global chrome */
import personasData from "@/assets/personas.json";
export default {
  data() {
    return {
      iconSrc: "../../public/icon-128.png",
      urls: [
        "https://www.youtube.com",
        "https://www.google.com",
        "https://www.github.com",
      ],
      tabIds: [],
      personas: personasData,
    };
  },
  methods: {
    selectPersona(persona) {
      // Implement logic for selecting a persona
      this.openTabsInSequence(persona.urls);
    },
    openTabsInSequence(urls) {
      //TODO Open tabs one by one,close them after render
      this.tabIds = [];

      for (const url of urls) {
        setTimeout(() => {
          chrome.tabs.create({ url }, (tab) => {
            this.tabIds.push(tab.id);
          });
        }, 1000);
      }

      setTimeout(() => {
        this.closeTabs();
      }, 1000);
    },

    closeTabs() {
      for (const tabId of this.tabIds) {
        chrome.tabs.remove(tabId);
      }
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
.persona-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
  width: 100%;
  max-height: 397px; /* Adjust the height to fit within main container */
  overflow-y: auto;
  overflow-x: hidden;
}

/* Custom scrollbar styling */
.persona-container::-webkit-scrollbar {
  width: 8px;
}

.persona-container::-webkit-scrollbar-track {
  background: #2e2e2e;
  border-radius: 10px;
}

.persona-container::-webkit-scrollbar-thumb {
  background-color: #4a0000;
  border-radius: 10px;
  border: 2px solid #2e2e2e;
}

.persona-box {
  display: flex;
  align-items: center;
  background-color: #2e2e2e;
  border: 1px solid #383636;
  border-radius: 5px;
  padding: 10px;
  margin: 10px;
  width: 90%;
}

.persona-photo {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin-right: 10px;
}

.persona-info {
  flex: 1;
}

.persona-name {
  font-size: 16px;
  color: #d1d1d1;
}

.persona-description {
  font-size: 12px;
  color: #b0b0b0;
}

.select-button {
  background-color: #4a0000;
  color: white;
  border: none;
  border-radius: 5px;
  padding: 5px 10px;
  cursor: pointer;
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
  display: flow-root;
  width: 300px;
  height: 500px;
  background: #1e1e1e;
  margin: 0 px;
  padding: 0px;
}
.fa-solid {
  font-size: 20px;
  position: relative;
  color: #d1d1d1;
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
