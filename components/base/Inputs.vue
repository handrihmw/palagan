<template>
    <div class="container">
        <div class="section">
            <h1 class="display-1 text-left mt-5">Input Group</h1>
            <p class="bd-lead mb-5">Easily extend form controls by adding text, buttons, or button groups on either side of textual inputs, custom selects, and custom file inputs.</p>
            <div class="row">
                <div class="col-lg-6 col-sm-6 mb-4">
                    <form autocomplete="off" class="form" id="formLogin" name="formLogin" role="form">
                        <div class="form-group">
                            <label for="uname1">Username</label>
                            <input class="form-control" id="uname" name="uname" required="" type="text">
                        </div>
                        <div class="form-group">
                            <label for="uname1">Email</label>
                            <input class="form-control" id="email" name="email" required="" type="email">
                        </div>
                        <div class="form-group">
                        <label for="inputPassword3">Password</label>
                            <input class="form-control" id="pwd" placeholder="Password" required="" type="password">
                            <small class="form-text text-muted" id="passwordHelpBlock">Your password must be 8-20 characters long.</small>
                        </div>
                    </form>
                </div>
                <div class="col-lg-6 col-sm-6 mt-4">
                    <form autocomplete="off" class="form" role="form">
                        <div class="form-group row">
                            <label class="col-lg-3 col-form-label form-control-label">First name</label>
                            <div class="col-lg-9">
                            <input class="form-control" type="text" value="Budi">
                            </div>
                        </div>
                        <div class="form-group row">
                            <label class="col-lg-3 col-form-label form-control-label">Website</label>
                            <div class="col-lg-9">
                            <input class="form-control" type="url" value="">
                            </div>
                        </div>
                        <div class="form-group row">
                            <label class="col-lg-3 col-form-label form-control-label">Time Zone</label>
                            <div class="col-lg-9">
                            <select class="form-control" id="user_time_zone" size="0">
                                <option value="Hawaii">
                                (GMT-10:00) Hawaii
                                </option>
                                <option value="Alaska">
                                (GMT-09:00) Alaska
                                </option>
                                <option value="Pacific Time (US &amp; Canada)">
                                (GMT-08:00) Pacific Time (US &amp; Canada)
                                </option>
                            </select>
                            </div>
                        </div>
                    </form>
                </div>
                <div class="col-lg-12 col-sm-12 pb-3">
                    <label for="exampleMessage">Message</label>
                    <textarea class="form-control" id="complexExampleMessage" rows="3"></textarea>
                    <small class="text-muted">Add any notes here.</small>
                </div>
            </div>
            <div class="row bg-input-gray pt-4 pb-1">
                <div class="col-lg-4 col-sm-6">
                    <div class="form-group nh-input nh-input--noborder">
                        <input type="text" placeholder="Regular" class="form-control">
                    </div>
                    <div class="form-group">
                        <div class="input-group nh-input nh-input--noborder mb-4">
                            <div class="input-group-prepend nh-input nh-input--noborder">
                                <span class="input-group-text"><i class="fas fa-search"></i></span>
                            </div>
                            <input class="form-control" placeholder="Search" type="text">
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-sm-6">
                    <div class="form-group nh-input nh-input--noborder">
                        <input type="text" placeholder="Disabled" class="form-control" disabled="">
                    </div>
                    <div class="form-group">
                        <div class="input-group nh-input nh-input--noborder mb-4">
                            <input class="form-control" placeholder="Search" type="text">
                            <div class="input-group-append nh-input nh-input--noborder">
                                <span class="input-group-text"><i class="fas fa-search"></i></span>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-sm-6">
                    <div class="form-group nh-input nh-input--noborder has-success">
                        <input type="text" placeholder="Success" class="form-control is-valid">
                    </div>
                    <div class="form-group nh-input nh-input--noborder has-danger">
                        <input type="email" placeholder="Error Input" class="form-control is-invalid">
                    </div>
                </div>
            </div>
        </div>
        <div class="row mt-4">
            <div class="col-sm-6 pb-3">
                <label for="exampleFirst">First Name</label>
                <input class="form-control" id="exampleFirst" type="text">
            </div>
            <div class="col-sm-6 pb-3">
                <label for="exampleLast">Last Name</label>
                <input class="form-control" id="exampleLast" type="text">
            </div>
            <div class="col-sm-6 pb-3">
                <label for="exampleCity">City</label> <input class="form-control" id="exampleCity" type="text">
            </div>
            <div class="col-sm-3 pb-3">
                <label for="exampleSt">State</label>
                <select class="form-control custom-select" id="exampleSt">
                    <option class="text-white bg-warning">
                        Pick a State
                    </option>
                    <option value="AL">
                        DKI Jakarta
                    </option>
                    <option value="AK">
                        DI Yogyakarta
                    </option>
                </select>
            </div>
            <div class="col-sm-3 pb-3">
                <label for="exampleZip">Postal Code</label>
                <input class="form-control" id="exampleZip" type="text">
            </div>
        </div>
    </div>
</template>

<script>
export default {

}
</script>
