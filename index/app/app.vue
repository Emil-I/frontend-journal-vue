<template>
<div id="app" class='my-body' v-bind:class='openModal'>

  <header class="header">
    <ul class="header-menu-list">
      <li class="header-menu-list__item">
        <a v-toggleModal:close='setModal' class='header-menu-list__link' href="#">Close</a>
      </li>
      <li class="header-menu-list__item">
        <a v-toggleModal:signup='setModal' class='header-menu-list__link' href="#">Регистрация</a>
      </li>
      <li class="header-menu-list__item">
        <a v-toggleModal:signin='setModal' class='header-menu-list__link' href="#">Вход</a>
      </li>
    </ul>
  </header>

  <!-- main-container-video-and-svg-mask START -->
  <section class="main-container-video-and-svg-mask">
    <div class="main-container-video-and-svg-mask__center">

      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 285 80" preserveAspectRatio="xMidYMid slice">
      <defs>
        <mask id="mask" x="0" y="0" width="100%" height="100%" >
            <rect x="0" y="0" width="100%" height="100%" />
            <text id='text_one' x="34%"  y="26">The</text>
            <text x="34%"  y="48">Space</text>
            <text id='text-two' x="53.6%"  y="54">in my head</text>
        </mask>

          </defs>
             <rect id='rect-two' x="0" y="0" width="100%" height="100%" />
      </svg>

      <video autoplay playsinline muted loop preload poster="">
      <!-- <source src="./assets/videos/stock/Dodge-Tornado.webm" /> -->
        <source src="./assets/videos/stock/galaxy.mp4" />
      </video>
    </div>

    <div class="arr-to-bottom-block">
      <div class="arr-to-bottom-block__wrapper">
        <div class="navigate icon icon_one"><i></i></div>
        <div class="navigate icon icon_two"><i></i></div>
        <div class="navigate icon icon_three"><i></i></div>
      </div>
    </div>
  </section>
  <!-- main-container-video-and-svg-mask END -->


  <!-- text-info-container START -->
  <section class="section text-info-container section_color-white">
    <!-- main-wrapper START -->
    <div class="main-wrapper">
      <div class="text-info-title">
        О сайте
      </div>

      <div class="section-info-block">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
          in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>
    </div>
    <!-- main-wrapper END -->
  </section>
  <!-- text-info-container END -->


  <!-- section-about-admin-panel START -->
  <section class="section section_bgr-light section-about-admin-panel">

  </section>
  <!-- section-about-admin-panel END -->

</div>
</template>

<!-- CONTROLLER -->
<script src='./app.controller.js'></script>

<!-- STYLES -->
<style lang="scss">
@import "./styles/fonts.scss";
@import './styles/app.scss';
</style>
