<template>
  <div id="app">
    <h3>App.vue</h3>
    <p>Unfiltered text: {{ text }}</p><!--This is a random text. -->
    <p>Filtered text: {{ text | toUpperCase }}</p><!--THIS IS A RANDOM TEXT. -->
    <p>Chain filtered text: {{ text | toUpperCase | toLowerCase }}</p><!-- this is a random text. -->
    <input v-model="filterText">
    <p>This is the unfiltered version of fruits</p>
    <ul>
        <li v-for="fruit in fruits">{{ fruit }}</li>
    </ul>
    <p>This is the filtered version of fruits</p>
    <ul>
        <li v-for="fruit in filteredFruits">{{ fruit }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'app',
  data(){
    return {
      text: 'This is a random text.',
    }
  },

 

  filters: {//this is a locally defined filter
    toUpperCase(value){
      return value.toUpperCase();
    }
  }
}
</script>

<style>

</style>
