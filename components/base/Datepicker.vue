<template>
    <div class="container">
        <div class="section">
            <h2 class="display-4 text-uppercase text-center mt-5 mb-5">Component Datepicker</h2>
            <div class="row">
                <div class="col-md-4">
                    <small class="d-block text-uppercase font-weight-bold mb-3">Single date</small>
                    <div class="form-group">
                        <div class="input-group">
                            <div class="input-group-prepend">
                                <span class="input-group-text"><i class="ni ni-calendar-grid-58"></i></span>
                            </div>
                            <input class="flatpickr flatpickr-input form-control" type="text" placeholder="Select Date.." readonly="readonly">
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-md-4">
                <small class="d-block text-uppercase font-weight-bold mb-3">Date range</small>
                <div class="input-daterange">
                    <div class="form-group">
                        <div class="input-group">
                            <div class="input-group-prepend">
                                <span class="input-group-text"><i class="ni ni-calendar-grid-58"></i></span>
                            </div>
                            <input class="flatpickr range form-control flatpickr-input" type="text" placeholder="Range" readonly="readonly">
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-md-4">
                <small class="d-block text-uppercase font-weight-bold mb-3">DateTimePicker</small>
                <div class="form-group">
                    <div class="input-group">
                        <div class="input-group-prepend">
                            <span class="input-group-text"><i class="ni ni-calendar-grid-58"></i></span>
                        </div>
                        <input class="flatpickr datetimepicker form-control flatpickr-input" type="text" placeholder="Datetimepicker" readonly="readonly">
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
