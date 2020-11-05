<template>
    <nav class="navbar navbar-expand-lg navbar-dark fixed-top bg-dark">
        <a class="navbar-brand" href="#">Palagan Design System</a>
        <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarCollapse"
            aria-controls="navbarCollapse"
            aria-expanded="false"
            aria-label="Toggle navigation"
        >
        <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarCollapse">
            <ul class="navbar-nav mr-auto sidenav" id="navAccordion">
                <li class="nav-item active">
                    <NuxtLink class="nav-link" to="/">
                        Home<span class="sr-only">(current)</span>
                    </NuxtLink>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="https://getbootstrap.com/docs/4.5/getting-started/introduction/" target="_blank" aria-label="bootstrap">Documentation</a>
                </li>
                <li class="nav-item">
                    <NuxtLink class="nav-link" to="/examples">
                        Examples
                    </NuxtLink>
                </li>
                <li class="nav-item">
                    <NuxtLink class="nav-link" to="/about">
                        About
                    </NuxtLink>
                </li>
                <li class="nav-item">
                    <NuxtLink class="nav-link" to="/contact">
                        Contact Us
                    </NuxtLink>
                </li>
                <li class="nav-item">
                    <NuxtLink class="nav-link" to="/alert">
                        Alerts
                    </NuxtLink>
                </li>
                <li class="nav-item">
                    <NuxtLink class="nav-link" to="/badge">
                        Badges
                    </NuxtLink>
                </li>
                <li class="nav-item">
                    <NuxtLink class="nav-link" to="/breadcrumb">
                        Breadcrumb
                    </NuxtLink>
                </li>
                <li class="nav-item">
                    <NuxtLink class="nav-link" to="/buttons">
                        Buttons
                    </NuxtLink>
                </li>
                <li class="nav-item">
                    <NuxtLink class="nav-link" to="/card">
                        Card
                    </NuxtLink>
                </li>
                <li class="nav-item">
                    <NuxtLink class="nav-link" to="/collapse">
                        Collapse
                    </NuxtLink>
                </li>
                <li class="nav-item">
                    <NuxtLink class="nav-link" to="/dropdown">
                        Dropdowns
                    </NuxtLink>
                </li>
                <li class="nav-item">
                    <NuxtLink class="nav-link" to="/form">
                        Forms
                    </NuxtLink>
                </li>
                <li class="nav-item">
                    <NuxtLink class="nav-link" to="/input-group">
                        Input Group
                    </NuxtLink>
                </li>
                <li class="nav-item">
                    <NuxtLink class="nav-link" to="/jumbotron">
                        Jumbotron
                    </NuxtLink>
                </li>
                <li class="nav-item">
                    <NuxtLink class="nav-link" to="/list-group">
                        List Group
                    </NuxtLink>
                </li>
                <li class="nav-item">
                    <NuxtLink class="nav-link" to="/modal">
                        Modal
                    </NuxtLink>
                </li>
                <li class="nav-item">
                    <NuxtLink class="nav-link" to="/navbar">
                        Navbar
                    </NuxtLink>
                </li>
                <li class="nav-item">
                    <NuxtLink class="nav-link" to="/pagination">
                        Pagination
                    </NuxtLink>
                </li>
                <li class="nav-item">
                    <NuxtLink class="nav-link" to="/popovers">
                        Popovers
                    </NuxtLink>
                </li>
                <li class="nav-item">
                    <NuxtLink class="nav-link" to="/progress">
                        Progress
                    </NuxtLink>
                </li>
                <li class="nav-item">
                    <NuxtLink class="nav-link" to="/toasts">
                        Toasts
                    </NuxtLink>
                </li>
                <li class="nav-item">
                    <NuxtLink class="nav-link" to="/tooltips">
                        Tooltips
                    </NuxtLink>
                </li>
                <li class="nav-item">
                    <NuxtLink class="nav-link" to="/typography">
                        Typography
                    </NuxtLink>
                </li>
            </ul>
        </div>
    </nav>
</template>

<style>
    html {
        position: relative;
        min-height: 100%;
    }

    body {
        padding-top: 4.5rem;
        margin-bottom: 4.5rem;
    }

    .footer {
        position: absolute;
        bottom: 0;
        width: 100%;
        height: 3.5rem;
        line-height: 3.5rem;
        background-color: #ccc;
    }

    .nav-link:hover {
        transition: all 0.4s;
    }

    .nav-link-collapse:after {
        float: right;
        content: '\f067';
        font-family: 'FontAwesome';
    }

    .nav-link-show:after {
        float: right;
        content: '\f068';
        font-family: 'FontAwesome';
    }

    .nav-item ul.nav-second-level {
        padding-left: 0;

        > .nav-item {
            padding-left: 20px;
        }
    }

    #navAccordion::-webkit-scrollbar {
        display: none;
    }

    @media (min-width: 992px) {
        .sidenav {
            position: absolute;
            top: 0;
            left: 0;
            width: 230px;
            height: calc(100vh - 3.5rem);
            margin-top: 3.5rem;
            background: #343a40;
            box-sizing: border-box;
            border-top: 1px solid rgba(0, 0, 0, 0.3);
            overflow-y: auto;
            overflow-x: hidden;
        }

        .navbar-expand-lg .sidenav {
            flex-direction: column;
        }

        .content-wrapper {
            margin-left: 230px;
        }

        .footer {
            width: calc(100% - 230px);
            margin-left: 230px;
        }
    }
</style>

<script>
export default {

}
</script>
