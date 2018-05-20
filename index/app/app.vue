<template>
  <div id="app"
       class='my-body'
       :class="openModal"
  >

  <button
        @click='setOpenModal("signin")'
        type="button" name="button"
  >Signin</button>
<br>
  <button
        @click='setOpenModal("signup")'
        type="button" name="button"
  >Signup</button>
<br>
  <button
        @click='setOpenModal("close")'
        type="button" name="button"
  >Close</button>
  <br><br><br>


    <!-- ***************************** -->
    <!-- MODALS -->
    <!-- ***************************** -->
    <signinFrame
      class='modal-frame signin-frame'
      title='Signin'
    />

    <signupFrame
      class='modal-frame signup-frame'
      title='Signup'
    />

    <recoveryFrame
      class='modal-frame recovery-frame'
      title='Recovery'
    />
  </div>
</template>

<!-- CONTROLLER -->
<script src='./app.controller.js'></script>

<!-- STYLES -->
<style lang="scss">
   @import './styles/app.scss'
</style>
