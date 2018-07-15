<template>
<div id="app" class='my-body' v-bind:class='openModal'>

  <header class="header">
    <ul class="header-menu-list">
      <li class="header-menu-list__item">
        <a v-ToggleModal:signup='setModal' class='header-menu-list__link' href="#">Регистрация</a>
      </li>
      <li class="header-menu-list__item">
        <a v-ToggleModal:signin='setModal' class='header-menu-list__link' href="#">Вход</a>
      </li>
    </ul>
  </header>

  <div class="index-content">
    <!-- main-container-video-and-svg-mask START -->
    <section class="main-container-video-and-svg-mask">
      <div class="main-container-video-and-svg-mask__center">
          <button @click="startSession()" type="button">get pots</button>
      </div>
    </section>
    <!-- main-container-video-and-svg-mask END -->
  </div>


  <!-- modal-frame START -->
  <signinFrame class='modal-frame signin-frame' />
  <signupFrame class='modal-frame signup-frame' />
  <!-- modal-frame END -->

</div>
</template>

<!-- CONTROLLER -->
<script src='./app.controller.js'></script>

<!-- STYLES -->
<style lang="scss">
@import "./styles/fonts.scss";
@import './styles/app.scss';
</style>
