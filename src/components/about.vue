<template>
<div>
    <h1>详情页面</h1>
    <h2>动态路由参数{{$route.params.id}}</h2>
    </div>
</template>
<script>
export default {
    name:'about',
    created(){
        console.log(this.$route.params.id);
        console.log(this.$route.query)
    }
}
</script>
