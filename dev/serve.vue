<script>
import { defineComponent } from 'vue';
import Button from '@/button.vue';

export default defineComponent({
  name: 'ServeDev',
  components: {
    Button
  }
});
</script>

<template>
  <div id="app">
   <Button name="Click Me"/>
  </div>
</template>
