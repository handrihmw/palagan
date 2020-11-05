<template>
    <div>
        <main class="content-wrapper">
            <div class="container-fluid mt-5">
                <div class="jumbotron bg-white">
                    <div class="text-center pb-5">
                        <logo />
                    </div>
                    <h1 class="display-4 text-center">Palagan Design System</h1>
                    <h2 class="lead text-center pb-3">Palagan inspired <strong>User Interface Kit</strong> that will help you prototype and design <br> beautiful, creative and modern websites.</h2>
                    <div class="text-center mt-5">
                        <a href="https://github.com/nuxt/nuxt.js" target="_blank" class="tn btn-dark btn-lg text-decoration-none">GitHub</a>
                    </div>
                </div>
            </div>
        </main>
        <LayFooter/>
    </div>
</template>

<script>
import Logo from "~/components/Logo.vue"
export default {
    components: {
        Logo
    }
};
</script>
