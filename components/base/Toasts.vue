<template>
    <div class="container">
        <!-- <div class="section">
            <h1 class="display-1 text-left mt-5">Toasts</h1>
            <p class="bd-lead mb-5">Push notifications to your visitors with a toast, a lightweight and easily customizable alert message.</p>
            <div class="all-section">
                <div class="toast" role="alert" aria-live="assertive" aria-atomic="true">
                    <div class="toast-header">
                        <img src="" class="rounded mr-2" alt="...">
                        <strong class="mr-auto">Bootstrap</strong>
                        <small class="text-muted">just now</small>
                        <button type="button" class="ml-2 mb-1 close" data-dismiss="toast" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="toast-body">
                        See? Just like this.
                    </div>
                </div>
            </div>
        </div> -->
        <div class="section">
            <div class="row">
                <div class="component-preview">
                    <div class="component-item d-flex justify-content-center">
                        <a class="btn nh-btn btn--primary btn--solid font-weight-bold" href="javascript:void(0)">primary button</a>
                        <a class="btn nh-btn btn--secondary btn--solid font-weight-bold" href="javascript:void(0)">secondary button</a>
                        <a class="btn nh-btn btn--success btn--solid font-weight-bold" href="javascript:void(0)">success button</a>
                        <a class="btn nh-btn btn--danger btn--solid font-weight-bold" href="javascript:void(0)">danger button</a>
                        <a class="btn nh-btn btn--dark btn--solid font-weight-bold" href="javascript:void(0)">dark button</a>
                    </div>
                </div>
                <div class="component-code">
                    <div class="component-item">
                        <code class="language-html" data-lang="html">
                            <span class="np">&lt;</span><span class="nt">button</span> <span class="na">class</span><span class="np">="</span><span class="s">btn nh-btn btn--primary btn--solid text-uppercase font-weight-bold</span><span class="np">"&gt;</span><span class="nm">Primary</span><span class="np">&lt;/</span><span class="nt">button<span class="np">&gt;</span></span><br>
                            <span class="np">&lt;</span><span class="nt">button</span> <span class="na">class</span><span class="np">="</span><span class="s">btn nh-btn btn--secondary btn--solid text-uppercase font-weight-bold"</span><span class="nt">&gt;</span><span class="nm">Secondary</span><span class="np">&lt;/</span><span class="nt">button<span class="np">&gt;</span></span><br>
                            <span class="np">&lt;</span><span class="nt">button</span> <span class="na">class</span><span class="np">="</span><span class="s">btn nh-btn btn--success btn--solid text-uppercase font-weight-bold"</span><span class="nt">&gt;</span><span class="nm">Success</span><span class="np">&lt;/</span><span class="nt">button<span class="np">&gt;</span></span><br>
                            <span class="np">&lt;</span><span class="nt">button</span> <span class="na">class</span><span class="np">="</span><span class="s">btn nh-btn btn--danger btn--solid text-uppercase font-weight-bold"</span><span class="nt">&gt;</span><span class="nm">Danger</span><span class="np">&lt;/</span><span class="nt">button<span class="np">&gt;</span></span><br>
                            <span class="np">&lt;</span><span class="nt">button</span> <span class="na">class</span><span class="np">="</span><span class="s">btn nh-btn btn--dark btn--solid text-uppercase font-weight-bold"</span><span class="nt">&gt;</span><span class="nm">Dark</span><span class="np">&lt;/</span><span class="nt">button<span class="np">&gt;</span></span>
                        </code>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
    .nt {
        color: #ff8383;
    }

    .na {
        color: #ffe484;
    }

    .nm {
        color: #f7fafc;
    }

    .np {
        color: #93ddfd;
    }

    .s {
        color: #b5f4a5;
    }
    .component-preview {
        align-items: stretch;
        border: 1px solid #4a5568;
        border-radius: 8px 8px 0 0;
        display: flex;
        flex-direction: column;
        padding: 1.5rem;
        width: 100%;
    }

    .component-item {
        align-items: center;
        display: flex;
        flex-wrap: wrap;
        justify-content: flex-start;

        a {
            margin: 5px;
        }
    }

    .component-item:not(:last-child) {
        margin-bottom: 1rem;
    }

    .component-code {
        background-color: #2d3748;
        border-radius: 0 0 8px 8px;
        font-family: monospace;
        font-size: 1em;
        line-height: 1.375;
        margin-bottom: 0px !important;
        margin: 0px;
        overflow-x: auto;
        overflow-wrap: normal;
        overflow: auto;
        padding: 1.5rem;
        white-space: nowrap;
        width: 100%;
        -webkit-font-smoothing: auto;
    }
</style>

<script>
export default {

}
</script>
