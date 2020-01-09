<template>
  <div class="works">
    <Nav/>
    <h1>This is an works page</h1>
    <Foot/>
  </div>
</template>
<script>

export default {
  name:"works",
  components:{
  },
  created() {
    get().then(res => {
      console.log(res);
    });
  }
};
</script>
