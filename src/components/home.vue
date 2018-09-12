<template>
    <div>
        <h1>首页面</h1>
        <router-link :to="{path:'/login',query:{
        userinfo:'hahaha'
    }}">跳转到登录</router-link>
        <router-link :to="{path:'/about:123',query:{
        name:'123'
    }}">跳转到详情页</router-link>

        <button @click="handleDate">获取数据</button>
        <button @click="getJsonp">获取jsonp数据</button>
    </div>
</template>
<script>
import axios from "axios";
export default {
    name: "home",
    methods: {
        handleDate() {
            axios
                .get("http://localhost:3000/getMsg")
                .then(res => {
                    console.log(res);
                })
                .catch(err => {
                    console.log(err);
                });
        },
        getJsonp(){
            let script = document.createElement('script');
            let body = document.body
            script.src='http://localhost:3000/getJsonp?callback=getData '
            body.appendChild(script)
        }
    }
};
</script>
