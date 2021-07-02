<template>
    <div>
<button> {{ name }} </button>
    </div>
</template>

<script>

export default {
   name:'Button',
   props: {
       name: String,
   },
};
</script>

<style scoped>

</style>