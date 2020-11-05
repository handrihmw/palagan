<template>
    <div class="container">
        <div class="section">
            <h1 class="display-1 text-left mt-5">Dropdowns</h1>
            <p class="bd-lead mb-5">Toggle contextual overlays for displaying lists of links and more with the Bootstrap dropdown plugin.</p>
            <div class="all-section">
                <!-- Large button groups (default and split) -->
                <div class="btn-group">
                    <button class="btn btn-secondary btn-lg dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Large button
                    </button>
                    <div class="dropdown-menu">
                        ...
                    </div>
                </div>
                <div class="btn-group">
                    <button class="btn btn-secondary btn-lg" type="button">
                        Large split button
                    </button>
                    <button type="button" class="btn btn-lg btn-secondary dropdown-toggle dropdown-toggle-split" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <span class="sr-only">Toggle Dropdown</span>
                    </button>
                    <div class="dropdown-menu">
                        ...
                    </div>
                </div>

                <!-- Small button groups (default and split) -->
                <div class="btn-group">
                    <button class="btn btn-secondary btn-sm dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Small button
                    </button>
                    <div class="dropdown-menu">
                    ...
                    </div>
                </div>
                <div class="btn-group">
                    <button class="btn btn-secondary btn-sm" type="button">
                        Small split button
                    </button>
                    <button type="button" class="btn btn-sm btn-secondary dropdown-toggle dropdown-toggle-split" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <span class="sr-only">Toggle Dropdown</span>
                    </button>
                    <div class="dropdown-menu">
                        ...
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
