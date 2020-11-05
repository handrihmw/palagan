<template>
    <div class="container">
        <div class="section">
            <h1 class="display-1 text-left mt-5">Breadcrumb</h1>
            <p class="bd-lead mb-5">Indicate the current page’s location within a navigational hierarchy that automatically adds separators via CSS.</p>
            <div class="all-section">
                <nav aria-label="breadcrumb">
                    <ol class="breadcrumb">
                        <li class="breadcrumb-item active" aria-current="page">Home</li>
                    </ol>
                    </nav>

                    <nav aria-label="breadcrumb">
                    <ol class="breadcrumb">
                        <li class="breadcrumb-item"><a href="#">Home</a></li>
                        <li class="breadcrumb-item active" aria-current="page">Library</li>
                    </ol>
                    </nav>

                    <nav aria-label="breadcrumb">
                    <ol class="breadcrumb">
                        <li class="breadcrumb-item"><a href="#">Home</a></li>
                        <li class="breadcrumb-item"><a href="#">Library</a></li>
                        <li class="breadcrumb-item active" aria-current="page">Data</li>
                    </ol>
                </nav>
            </div>
        </div>
    </div>
</template>

<script>
export default {

}
</script>
