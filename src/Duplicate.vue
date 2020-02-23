<template>
  <div>
    <h3>Duplicate.vue</h3>
    <input v-model="filterText">
    <p>This is the filtered version of fruits</p>
    <ul>
        <li v-for="fruit in filteredFruits">{{ fruit }}</li>
    </ul>
  </div>
</template>

<script>
import { fruitMixin } from './fruitMixin';
export default {
  mixins: [fruitMixin],
  data(){
    return {
     
    }
  },
}
</script>