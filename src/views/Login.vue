<template>
    <div id="profile">
        <!-- <van-cell-group> -->
            <van-field
            v-model="username"
            required
            clearable
            label="用户名:"
            placeholder="请输入用户名">

            </van-field>
            <van-field
            v-model="password"
            required
            clearable
            label="密码:"
            placeholder="请输入密码"
            type="password">

            </van-field>
        <!-- </van-cell-group> -->
        <van-button type="primary" size="large">登录</van-button>
    </div>
</template>
<script>
export default {
    data(){
        return{
            username:''
        }
    }
}
</script>
