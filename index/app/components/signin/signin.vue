<template>
<div class="">
  <div class="modal-frame-wrapper">
        <form class="modal-frame-form"
          method="post"
          @submit.prevent='signin()'>
      <div class="modal-frame-form__title modal-frame-form__title_padd-b">Sign in</div>

      <div class="modal-frame-wrapper-fields">  

        <div class="modal-frame-form__fields">
          <div class="error"
               v-if="$v.email.$error">
            <div v-if="$v.email.$invalid">Invalid email</div>
          </div>
          <input class='modal-frame-form__input'
                 type="text"
                 name="email"
                 placeholder='E-mail'
                 v-model.trim.lazy='$v.email.$model'>
        </div>

        <div class="modal-frame-form__fields">
          <div class="error"
               v-if="$v.password.$error">
            <div v-if="$v.password.$invalid">Invalid password</div>
          </div>
          <input class='modal-frame-form__input'
                 type="password"
                 name="password"
                 placeholder='Password'
                 v-model.trim.lazy='$v.password.$model'>
        </div>

        <div class="modal-frame-form__fields">
          <button class='modal-frame-form__button' type="submit" name="button">Login</button>
        </div>
      </div>

    </form>
  </div>
</div>
</template>


<script src='./signin.controller.js'></script>
