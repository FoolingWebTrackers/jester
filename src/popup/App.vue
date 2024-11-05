<template>
  <div class="mainPage-header">
    <img :src="require('@/assets/icon-128.png')" alt="Icon" class="icon" />
  </div>
  <div class="mainPage-container">
    <div class="button-container">
      <div class="button-group">
        <button class="icon-button" @click="openTabsInSequence(postNuclearWarSurvivorLinks)"></button>
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
      urls: [
        "https://www.youtube.com",
        "https://www.google.com",
        "https://www.github.com"
      ],
      postNuclearWarSurvivorLinks: [
      "https://time.com/6159942/amazon-potassium-iodide-nuclear-products-ukraine-invasion/",
      "https://www.ncbi.nlm.nih.gov/books/NBK219185/",
      "https://www.vox.com/future-perfect/24139145/fallout-amazon-prime-video-game-nuclear-war-existential-risk",
      "https://thebulletin.org/2022/10/nowhere-to-hide-how-a-nuclear-war-would-kill-you-and-almost-everyone-else/",
      "https://www.amazon.com/NUCLEAR-WAR-Survival-Scenarios-Post-Apocalyptic-ebook/dp/B0DD5N1K54",
      "https://www.amazon.com.tr/Surviving-Nuclear-Attack-Strategies-Post-Apocalyptic/dp/B0D3J66S2C",
      "https://www.tandfonline.com/doi/abs/10.1080/00396338.2024.2357486",
      "https://www.youtube.com/watch?v=HNd7ERHxHmY",
      "https://apps.dtic.mil/sti/tr/pdf/ADA328301.pdf",
      "https://www.amazon.com/Nuclear-War-Survival-Skills-Instructions/dp/1634502973",
      "https://en.wikipedia.org/wiki/Nuclear_War_Survival_Skills",
      "https://www.ready.gov/sites/default/files/2024-03/ready.gov_nuclear-explosion-hazard-info-sheet.pdf",
      "https://pubmed.ncbi.nlm.nih.gov/6737669/",
      "https://www.amazon.com/Shelter-Building-Nuclear-War-Survival/dp/B0C8P6C7K5",
      "https://www.amazon.com/Nuclear-War-Survival-Skills-Kearny/dp/B0C8P6C7K5",
      "https://www.cdc.gov/nceh/radiation/emergencies/index.htm",
      "https://www.nrc.gov/about-nrc/emergency-preparedness.html",
      "https://www.redcross.org/get-help/how-to-prepare-for-emergencies/types-of-emergencies/nuclear.html",
      "https://www.amazon.com/Nuclear-War-Survival-Kit/dp/B07H8H7T2S",
      "https://www.aliexpress.com/item/1005003091845931.html",
      "https://www.amazon.com/Emergency-Survival-Kit-Nuclear-War/dp/B08P4ZB3W4",
      "https://www.amazon.com/Nuclear-War-Survival-Handbook/dp/B00R8Z3T5S",
      "https://www.amazon.com/Nuclear-War-Survival-Kit/dp/B07F8Y6G9H",
      "https://survivallife.com/nuclear-war-survival-guide/",
      "https://www.survivopedia.com/nuclear-war-survival-guide/",
      "https://theprepperjournal.com/nuclear-war-survival-skills/",
      "https://www.nukepills.com/",
      "https://store.ki4u.com/products/potassium-iodide-tablets",
      "https://www.amazon.com/Potassium-Iodide-Tablets-Nuclear-Radiation/dp/B00B2A1VQK",
      "https://www.aliexpress.com/item/1005003091845931.html",
      "https://www.amazon.com/Nuclear-War-Survival-Kit/dp/B07H8H7T2S",
      "https://nukepills.com/",
      "https://nukepreparedness.org/",
      "https://survivallife.com/nuclear-war-survival-guide/",
      "https://theprepperjournal.com/nuclear-war-survival-skills/",
      "https://nukepills.com/",
      "http://nuclearnotebook.blogspot.com/",
      "http://nukewatch.org/",
      // Continue adding links until reaching 100 total
      ],
      tabIds: [],
    };
  },
  methods: {
    openSite() {
      const url = this.isChecked
        ? "https://www.google.com"
        : "https://www.youtube.com";
      chrome.tabs.create({ url });
    },

    openTabsInSequence(urls) {
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
      
    }
  }

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
