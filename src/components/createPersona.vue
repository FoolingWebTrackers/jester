<template>
  <div class="create-persona-container">
    <input type="text" placeholder="Persona Name" class="persona-name-input" />
    <input
      type="text"
      placeholder="Persona Description"
      class="persona-description-input"
      :disabled="generateDesc"
    />
    <div class="checkbox-container">
      <input type="checkbox" v-model="generateDesc" ></input>
      <label>AI generated description</label>
    </div>
    <div class="checkbox-container">
      <input type="checkbox" v-model="generatePhoto" />
      <label>AI generated photo</label>
    </div>
    <button class="create-persona-button">Create Persona</button>
  </div>
</template>
<script>
export default {
  name: "createPersona",
  data() {
    return {
      generateDesc: true,
      generatePhoto: false,
    };
  },
  methods: {},
};
</script>

<style scoped>
.create-persona-container {
  display: flex;
  flex-direction: column;
  align-items: left;
  justify-content: left;
  max-height: 400px;
  padding: 3px;
}
label {
  color: #d1d1d1;
  -webkit-transition: color 0.2s ease-out;
  -moz-transition: color 0.2s ease-out;
  -o-transition: color 0.2s ease-out;
  -ms-transition: color 0.2s ease-out;
  transition: color 0.2s ease-out;
}
input[type="text"] {
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  box-sizing: border-box;
  border: 2px solid #383636;
  border-radius: 30px;
}
input[type="text"]:disabled {
  background-color: #f0f0f0;
  color: #a1a1a1;
  border-color: #d3d3d3;
}
.checkbox-container {
  display: flex;
  align-items: center;
  justify-content: left;
}
input[type="checkbox"] {
  appearance: none;
  width: 30px;
  height: 30px;
  border: 2px solid #383636;
  border-radius: 4px;
  background-color: transparent;
  transition: background-color 0.3s ease, border-color 0.3s ease;
  cursor: pointer;
}
input[type="checkbox"]:checked {
  background-color: #4a0000;
  border-color: #ff0000;
}
input[type="checkbox"]:checked + label {
  color: #ff0000;
  -webkit-transition: color 0.2s ease-out;
  -moz-transition: color 0.2s ease-out;
  -o-transition: color 0.2s ease-out;
  -ms-transition: color 0.2s ease-out;
  transition: color 0.2s ease-out;
}
</style>
