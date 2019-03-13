<template>
    <div id="register">
        <van-field
        v-model="registerUsername"
        required
        clearable
        label="用户名:"
        placeholder="请输入用户名"
        >

        </van-field>

        <van-field
        v-model="registerPassword"
        required
        clearable
        label="密码:"
        placeholder="请输入密码"
        type="password">

        </van-field>
        <van-button type="primary" size="large">注册</van-button>
    </div>
</template>
