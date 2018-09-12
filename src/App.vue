<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
    name: "App",
    created() {
      // var url =this.HOME+'/v2/movie/in_theaters';
      // this.$axios.get(url).then(res=>{
      //   console.log(res.data);
      // }).catch(err=>{
      //   console.log(err)
      // })

      var url2=this.HOME+'/v2/movie/in_theaters';
      this.$axios.post(url2).then(res=>{
        console.log(res)
      }).catch(err=>{
        console.log(err)
      })
    }
};
</script>

<style>
</style>
