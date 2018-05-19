<template>
  <div id="app">






    <signinFrame
      class='modal-frame signin-frame'
      title='Signin'
    />

    <signupFrame
      class='modal-frame signun-frame'
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
