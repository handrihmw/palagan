<template>
    <div class="container">
        <div class="section">
            <div class="primary">
                <div class="container">
                    <div class="color-palette">
                        <div class="palette blue" data-clipboard-text='#006ee6' data-toggle="tooltip" data-placement="bottom" title="Click to Copy!"></div>
                        <div class="palette purple" data-clipboard-text='#7a00ff' data-toggle="tooltip" data-placement="bottom" title="Click to Copy!"></div>
                        <div class="palette yellow" data-clipboard-text='#fbe20e' data-toggle="tooltip" data-placement="bottom" title="Click to Copy!"></div>
                        <div class="palette orange" data-clipboard-text='#ed7043' data-toggle="tooltip" data-placement="bottom" title="Click to Copy!"></div>
                        <div class="palette red" data-clipboard-text='#db5358' data-toggle="tooltip" data-placement="bottom" title="Click to Copy!"></div>
                        <div class="palette white" data-clipboard-text='#f6fbff' data-toggle="tooltip" data-placement="bottom" title="Click to Copy!"></div>
                        <div class="palette green" data-clipboard-text='#00bfa5' data-toggle="tooltip" data-placement="bottom" title="Click to Copy!"></div>
                        <div class="palette gray" data-clipboard-text='#757a94' data-toggle="tooltip" data-placement="bottom" title="Click to Copy!"></div>
                        <div class="palette navy" data-clipboard-text='#3a4166' data-toggle="tooltip" data-placement="bottom" title="Click to Copy!"></div>
                        <div class="palette black" data-clipboard-text='#343a40' data-toggle="tooltip" data-placement="bottom" title="Click to Copy!"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    head: {
        script: [
            {
                type: 'module',
                src: '~/assets/js/copy.js'
            }
        ]
    },
};
</script>
