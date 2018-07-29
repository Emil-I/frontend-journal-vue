<template>
    <div class="root">
        <!--MENU START-->
        <div class="menu-wrapper">
            <leftMenu></leftMenu>
        </div>
        <!--MENU END-->

        <!--CONTENT START-->
        <div class="content-box">
            <router-view class="view"></router-view>
        </div>
        <!--CONTENT END-->
    </div>
</template>

<script src='./root.controller.js'></script>