<template>
<div id="app" class='my-body'>

  <header class="header">
    <ul class="header-menu-list">
      <li class="header-menu-list__item">
        <a class='header-menu-list__link' href="#">Регистрация</a>
      </li>
      <li class="header-menu-list__item">
        <a class='header-menu-list__link' href="#">Вход</a>
      </li>
    </ul>
  </header>

  <!-- <div class="side-left">

  </div> -->

  <div class="main-container-video-and-svg-mask">
    <div class="main-container-video-and-svg-mask__center">

      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 285 80" preserveAspectRatio="xMidYMid slice">
      <defs>
        <mask id="mask" x="0" y="0" width="100%" height="100%" >
          <rect x="0" y="0" width="100%" height="100%" />
            <text id='text_one' x="34%"  y="26">The</text>
            <text x="34%"  y="48">SPACE</text>
            <text id='text-two' x="53.6%"  y="54">in my head</text>
          </mask>

          </defs>
             <rect id='rect-two' x="0" y="0" width="100%" height="100%" />
      </svg>

      <!-- <video autoplay playsinline muted loop preload poster="https://s3-us-west-2.amazonaws.com/s.cdpn.io/4273/oceanshot.jpg">
  		<source src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/4273/ocean-small.webm" />
      <source src="http://thenewcode.com/assets/videos/ocean-small.mp4" />
    	</video> -->

      <video autoplay playsinline muted loop preload poster="">
      <!-- <source src="./assets/videos/stock/Dodge-Tornado.webm" /> -->
      <source src="./assets/videos/stock/Pexels Videos 4590.mp4" />
      </video>
    </div>
  </div>


  <section class="text-info-container">
    <div class="text-info">
      Создай свою историю
    </div>
  </section>

</div>
</template>

<!-- CONTROLLER -->
<script src='./app.controller.js'></script>

<!-- STYLES -->
<style lang="scss">
@import "./styles/fonts.scss";
@import './styles/app.scss';
</style>
