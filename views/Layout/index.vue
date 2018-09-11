<template>
    <div class="container">
        <div class="header">
            <h2>这是头部</h2>
        </div>
        <div class="nav">
            <ul>
                <li>
                    <router-link :to="{name: 'home1'}">首页</router-link>
                </li>
                <li>
                    <router-link :to="{name: 'about1'}">详情页</router-link>
                </li>
                <li>
                    <router-link :to="{name: 'login1'}">登录页</router-link>
                </li>
            </ul>
        </div>
        <div class="content">
            <router-view></router-view>
        </div>
    </div>
</template>
<script>
export default {};
</script>
<style lang="scss">
$width:200px;
.container {
    position: fixed;
    height: 100px;
    background-color: #e3c2b1;
    left: 0;
    top: 0;
    right: 0;
    z-index: 998;
}
.nav {
    z-index: 993;
    position: fixed;
    left: 0;
    top: 0;
    width: 180px;
    bottom: 0;
    background-color: #34394c;
    h1 {
        color: #595d66;
    }
}
.content{
    padding-left: $width;
    padding-top: $width;
}
</style>
