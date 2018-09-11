<template>
    <div>
        用户名：<input type="text" v-model="username">
        <br> 密码： <input type="password" v-model="password">
        <br>
        <button @click="handle">登录</button>
    </div>
</template>
<script>
import axios from "axios";

export default {
    data() {
        return {
            username: "",
            password: ""
        };
    },
    created() {
        console.log(this.$route);
        console.log(this.$router);
        console.log(this.$route.query);
    },
    methods: {
        handle() {
            axios
                .post("http://localhost:3000/login", {
                    username: this.username,
                    password: this.password
                })
                .then(res => {
                    if (res.data.code == 200) {
                        alert("登陆成功");
                    }else{
                        alert('登录失败');
                    }
                });
        }
    }
};
</script>
<style>
</style>
