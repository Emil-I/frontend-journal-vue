<template>
  <div class="">
    <div class="title-block">
      <h1>{{title}}</h1>
    </div>


    <ul v-for='book in books'>
      <li>{{book.name}}</li>
    </ul>

    <div>{{message}}</div>
    <button @click='log' type="button" name="button">Log</button>
    <button @click='logTwo' type="button" name="button">LogTwo</button>
  </div>
</template>


<script src='./signin.controller.js'></script>

<style lang="scss" scoped>
   @import 'signin.scss'
</style>
