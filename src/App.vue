<template>
  <div class="mainPage-header">
    <img :src="require('@/assets/icon-128.png')" alt="Icon" class="icon" />
  </div>
  <div class="mainPage-container">
    <transition name="fade" mode="out-in">
      <component :is="currentView" @open-create-persona="toggleComponent" />
    </transition>
  </div>
  <div class="mainPage-footer unselectable">Jester</div>
</template>

<script>
import personasData from "@/assets/personas.json";
import mainPage from "@/components/mainPage.vue";
import createPersona from "@/components/createPersona.vue";
export default {
  components: {
    mainPage,
    createPersona,
  },
  data() {
    return {
      currentView: "mainPage",
      iconSrc: "../../public/icon-128.png",
      tabIds: [],
      personas: personasData.map((persona) => ({
        ...persona,
        photo: persona.photo,
      })),
    };
  },
  methods: {
    toggleComponent() {
      console.log("recieved emit.");
      this.currentView =
        this.currentView === "mainPage" ? "createPersona" : "mainPage";
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
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
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
.unselectable {
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
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
