<template>
<div class="">
  <div class="modal-frame-wrapper">
    <form class="modal-frame-form" method="post">
      <div class="modal-frame-form__title v-toggleModal:signup='setModal' modal-frame-form__title_padd-b">Sign in</div>

      <div class="modal-frame-wrapper-fields">
        <div class="modal-frame-form__fields">
          <input class='modal-frame-form__input' type="text" name="" placeholder='Username or E-mail'>
        </div>


        <div class="modal-frame-form__fields">
          <input class='modal-frame-form__input' type="text" name="" value="" placeholder='Password'>
        </div>

        <div class="modal-frame-form__fields">
          <button class='modal-frame-form__button' type="button" name="button">Login</button>
        </div>
      </div>

    </form>
  </div>
</div>
</template>


<script src='./signin.controller.js'></script>

<style lang="scss" scoped>
@import 'signin.scss'
</style>
