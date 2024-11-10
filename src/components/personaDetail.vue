<template>
  <div class="persona-detail unselectable">
    <button class="close-button unselectable" @click="closeDetail">
      <i class="fa-solid fa-arrow-left-long unselectable"></i>
    </button>
    <img
      :src="persona.photo"
      alt="Persona Photo"
      class="persona-photo-large unselectable"
    />
    <div class="personaNameAndDesc unselectable">
      <h2>{{ persona.name }}</h2>
      <p>{{ persona.description }}</p>
    </div>
    <button class="select-persona-button" @click="selectPersona(persona)">
      Select Persona
    </button>
  </div>
</template>

<script>
export default {
  props: ["persona"],
  methods: {
    closeDetail() {
      this.$emit("close");
    },
    selectPersona(persona) {
      // Implement logic for selecting a persona
      this.openTabsInSequence(persona.urls);
    },
    openTabsInSequence(urls) {
      //TODO Open tabs one by one,close them after render
      const requestOptions = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ urls: urls }),
      };
      fetch("http://localhost:3000/browse", requestOptions).then((response) =>
        response.json()
      );
    },
  },
};
</script>

<style scoped>
/* Add styling for detailed view */
.persona-detail {
  position: fixed;
  top: 188px;
  left: 0;
  width: 100%;
  height: 100%;
  background: #333;
  color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 20px;
}
.persona-photo-large {
  width: 100px;
  height: 100px;
  border-radius: 50%;
}
.close-button {
  position: absolute;
  top: 10px;
  left: 10px;
  background: #4a0000;
  color: #fff;
  border: none;
  border-radius: 5px;
  padding: 5px 10px;
  cursor: pointer;
}
.personaNameAndDesc {
  display: flex;
  width: 90%;
  align-items: flex-start;
  flex-direction: column;
  padding-left: 20px;
  padding-right: 20px;
}
.select-persona-button {
  background-color: #1e1e1e;
  width: 90%;
  color: #d1d1d1;
  border: none;
  border-radius: 30px;
  padding: 12px 20px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
  transition: background-color 0.5s ease, color 0.5s ease;
}
.select-persona-button:hover {
  background-color: #4a0000;
  color: #ff0000;
}
.select-persona-button:active {
  background-color: #ff0000;
  color: #d1d1d1;
}
p {
  max-height: 120px;
  overflow: auto;
}
p::-webkit-scrollbar {
  width: 8px;
}

p::-webkit-scrollbar-track {
  background: #2e2e2e;
  border-radius: 10px;
}

p::-webkit-scrollbar-thumb {
  background-color: #4a0000;
  border-radius: 10px;
  border: 2px solid #2e2e2e;
}
</style>
