<template>
    <div class="row justify-content-center">
        <div class="col-lg-5 col-md-7">
            <div class="card bg-secondary shadow border-0">
                <div class="card-header bg-transparent ">
                    <div class="text-muted text-center mt-2">
                        <h1>SING UP</h1>
                    </div>
                    <!--<div class="btn-wrapper text-center">
                        <a href="#" class="btn btn-neutral btn-icon">
                            <span class="btn-inner--icon"><img src="img/icons/common/github.svg"></span>
                            <span class="btn-inner--text">Github</span>
                        </a>
                        <a href="#" class="btn btn-neutral btn-icon">
                            <span class="btn-inner--icon"><img src="img/icons/common/google.svg"></span>
                            <span class="btn-inner--text">Google</span>
                        </a>
                    </div>-->
                </div>
                <div class="card-body px-5 py-5">
                    <form role="form">

                        <base-input class="input-group-alternative mb-3"
                                    placeholder="Fullname"
                                    addon-left-icon="ni ni-single-02"
                                    v-model="model.name">
                        </base-input>
                        <base-input class="input-group-alternative mb-3"
                                    placeholder="Gender"
                                    addon-left-icon="ni ni-check-bold"
                                    v-model="model.gender">
                        </base-input>
                        <base-input class="input-group-alternative mb-3"
                                    placeholder="Email"
                                    addon-left-icon="ni ni-email-83"
                                    v-model="model.email">
                        </base-input>
                        <base-input class="input-group-alternative mb-3"
                                    placeholder="Phone Number"
                                    addon-left-icon="ni ni-tag"
                                    v-model="model.phonenum">
                        </base-input>

                        <base-input class="input-group-alternative"
                                    placeholder="Password"
                                    type="password"
                                    addon-left-icon="ni ni-lock-circle-open"
                                    v-model="model.password">
                        </base-input>

                        <div class="row my-4">
                            <div class="col-12">
                                <base-checkbox class="custom-control-alternative">
                                    <span class="text-muted">I agree with the <a href="#!">Privacy Policy</a></span>
                                </base-checkbox>
                            </div>
                        </div>
                        <div class="text-center">
                            <base-button type="primary" class="my-4">Create account</base-button>
                        </div>
                    </form>
                </div>
            </div>
            <div class="row mt-3">
                <div class="col-6">
                    <a href="#" class="text-light">
                        <small>Forgot password?</small>
                    </a>
                </div>
                <div class="col-6 text-right">
                    <router-link to="/login" class="text-light">
                        <small>Login into your account</small>
                    </router-link>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
  export default {
    name: 'register',
    data() {
      return {
        model: {
          name: '',
          gender: '',
          phonenum:'',
          email: '',
          password: ''
        }
      }
    }
  }
</script>
<style>
</style>
