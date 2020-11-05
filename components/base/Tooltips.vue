<template>
    <div class="container">
        <div class="section">
            <h1 class="display-1 text-left mt-5">Tooltips</h1>
            <p class="bd-lead mb-5">Documentation and examples for adding custom Bootstrap tooltips with CSS and JavaScript using CSS3 for animations and data-attributes for local title storage.</p>
            <div class="all-section">
                <h3 class="mt-md mb-4">Tooltips</h3>
                <button type="button" class="btn btn-lg btn-primary btn-tooltip" data-toggle="tooltip" data-placement="left" title="" data-container="body" data-animation="true" data-delay="100" data-original-title="Tooltip on left">On left</button>
                <button type="button" class="btn btn-lg btn-success btn-tooltip" data-toggle="tooltip" data-placement="top" title="" data-container="body" data-animation="true" data-original-title="Tooltip on top">On top</button>
                <button type="button" class="btn btn-lg btn-danger btn-tooltip" data-toggle="tooltip" data-placement="bottom" title="" data-container="body" data-animation="true" data-original-title="Tooltip on bottom">On bottom</button>
                <button type="button" class="btn btn-lg btn-info btn-tooltip" data-toggle="tooltip" data-placement="right" title="" data-container="body" data-animation="true" data-original-title="Tooltip on right">On right</button>
            </div>
        </div>
    </div>
</template>

<script>
export default {

}
</script>
