<template>
    <div class="container">
        <div class="section">
            <h1 class="display-1 text-left mt-5">Modal</h1>
            <p class="bd-lead mb-5">Use Bootstrap’s JavaScript modal plugin to add dialogs to your site for lightboxes, user notifications, or completely custom content.</p>
            <div class="row">
                <div class="col-md-3">
                    <button type="button" class="btn btn-block btn-primary mb-3" data-toggle="modal" data-target="#modal-default">Default</button>
                    <div class="modal fade" id="modal-default" tabindex="-1" role="dialog" aria-labelledby="modal-default" aria-hidden="true">
                        <div class="modal-dialog modal- modal-dialog-centered modal-" role="document">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <h6 class="modal-title" id="modal-title-default">Type your modal title</h6>
                                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true">×</span>
                                    </button>
                                </div>
                                <div class="modal-body">
                                    <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
                                    <p>A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>
                                </div>
                                <div class="modal-footer">
                                    <button type="button" class="btn btn-primary">Save changes</button>
                                    <button type="button" class="btn btn-link  ml-auto" data-dismiss="modal">Close</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-3">
                    <button type="button" class="btn btn-block btn-success mb-3" data-toggle="modal" data-target="#modal-notification">Notification</button>
                    <div class="modal fade" id="modal-notification" tabindex="-1" role="dialog" aria-labelledby="modal-notification" aria-hidden="true" style="display: none;">
                        <div class="modal-dialog modal-danger modal-dialog-centered modal-" role="document">
                            <div class="modal-content bg-gradient-danger">
                                <div class="modal-header">
                                    <h6 class="modal-title" id="modal-title-notification">Your attention is required</h6>
                                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true">×</span>
                                    </button>
                                </div>
                                <div class="modal-body">
                                    <div class="py-3 text-center">
                                        <i class="ni ni-bell-55 ni-3x"></i>
                                        <h4 class="heading text-danger mt-4">You should read this!</h4>
                                        <p>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-3">
                    <button type="button" class="btn btn-block btn-danger mb-3" data-toggle="modal" data-target="#modalSignup">Sign Up Modal</button>
                </div>
                <div class="col-md-3">
                    <button type="button" class="btn btn-block btn-info mb-3" data-toggle="modal" data-target="#modalLogin">Sign In Modal</button>
                </div>
            </div>

            <!-- Component Modal Sign Up -->
            <div class="signup-modal modal fade" id="modalSignup" tabindex="-1" aria-labelledby="modalSignuppLabel" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered">
                    <div class="modal-content">
                    <h5 class="signup-modal__title" id="modalSignuppLabel">Silakan Mendaftar</h5>
                    <p class="signup-modal__subtitle">Sudah punya akun. <span class="signup-modal__subtitle--show-login" onclick="">Login disini</span></p>
                    <form class="signup-modal__form signup-modal__form--signup">
                        <div class="form-group">
                        <label for="signupFullName">Nama Lengkap</label>
                        <input type="text" class="form-control" name="full_name" id="signupFullName" placeholder="Tulis namamu disini" required>
                        </div>
                        <div class="form-group">
                        <label for="signupPhoneNumber">Nomor Telepon</label>
                        <input type="tel" class="form-control" name="phone_number" id="signupPhoneNumber" placeholder="+6281333444xxx" required>
                        </div>
                        <div class="form-group">
                        <label for="signupEmail">Email</label>
                        <input type="email" class="form-control" name="email" id="signupEmail" placeholder="nama@email.com" required>
                        </div>
                        <div class="form-group mb-0">
                        <label for="signupPassword">Password</label>
                        <input type="password" class="form-control" name="password" id="signupPassword" placeholder="Minimal 6 karakter kombiniasi huruf dan angka" required>
                        </div>
                        <input type="hidden" name="auto_login" value="1">
                        <div class="text-center">
                        <a class="btn signup-modal__button signup-modal__button--register" href="javascript:void(0)" onclick="">
                        <span class="signup-modal__button--loading">
                            <i class="fas fa-circle-notch fa-spin"></i>
                        </span>
                        Daftar Sekarang
                        </a>
                        </div>
                    </form>
                    <p class="signup-modal__persuasive">atau mendaftar dengan cara lain</p>
                    <a href="" class="signup-modal__button signup-modal__button--google" onclick=""><i class="fab fa-google"></i> Daftar dengan google</a>
                    <a href="" class="signup-modal__button signup-modal__button--facebook" onclick=""><i class="fab fa-facebook-f"></i> Daftar dengan facebook</a>
                    </div>
                </div>
            </div>

            <!-- Component Modal Login -->
            <div class="signup-modal modal fade" id="modalLogin" tabindex="-1" aria-labelledby="modalLoginpLabel" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered">
                    <div class="modal-content">
                    <h5 class="signup-modal__title" id="modalLoginpLabel">Silakan Login</h5>
                    <p class="signup-modal__subtitle">Belum punya akun. <span class="signup-modal__subtitle--show-signup" onclick="">Daftar disini</span></p>
                    <div class="alert alert-danger" role="alert"></div>
                    <form class="signup-modal__form signup-modal__form--login">
                        <div class="signup-modal__step-1">
                        <div class="form-group">
                            <label for="loginEmail">Email</label>
                            <input type="email" class="form-control" name="email" id="loginEmail" placeholder="nama@email.com" required>
                        </div>
                        <div class="form-group mb-0">
                            <label for="loginPassword">Password</label>
                            <input type="password" class="form-control" name="password" id="loginPassword" placeholder="Minimal 6 karakter kombiniasi huruf dan angka" required>
                        </div>
                        <input type="hidden" name="step" value="1">
                            <div class="signup-modal__forgot-password">
                                <a href="" onclick="">Lupa password?</a>
                            </div>
                        </div>

                        <div class="signup-modal__step-2">
                            <div class="form-group">
                                <label for="loginTwoFa">Authentication Code</label>
                                <input type="tetx" class="form-control" name="2fa_code" id="loginTwoFa" inputmode="numeric" pattern="[0-9]*" placeholder="123456">
                            </div>
                        </div>

                        <div class="text-center">
                            <a class="btn signup-modal__button signup-modal__button--login" href="javascript:void(0)" onclick="">
                                <span class="signup-modal__button--loading">
                                <i class="fas fa-circle-notch fa-spin"></i>
                                </span>
                                Masuk Sekarang Juga
                            </a>
                        </div>
                    </form>
                    <p class="signup-modal__persuasive">atau masuk dengan cara lain</p>
                    <a href="" class="signup-modal__button signup-modal__button--google" onclick=""><i class="fab fa-google"></i> Login dengan google</a>
                    <a href="" class="signup-modal__button signup-modal__button--facebook" onclick=""><i class="fab fa-facebook-f"></i> Login dengan facebook</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {

}
</script>
