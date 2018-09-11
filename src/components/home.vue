<template>
    <div>
        <h1>首页面</h1>
        <router-link :to="{path:'/login',query:{
        userinfo:'hahaha'
    }}">跳转到登录</router-link>
    <router-link :to="{path:'/about:123',query:{
        name:'123'
    }}">跳转到详情页</router-link>
    </div>
</template>
<script>
export default {
    name: "home"
};
</script>
