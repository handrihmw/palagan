<template>
    <div class="container">
        <div class="section">
            <h1 class="display-1 text-left mt-5">Button</h1>
            <p class="bd-lead mb-5">Use Bootstrap’s custom button styles for actions in forms, dialogs, and more with support for multiple sizes, states, and more.</p>
            <table class="table table-borderless mb-5">
                <thead>
                    <tr>
                        <th>Type</th>
                        <th>Class Name</th>
                        <th>Color</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            Primary
                        </td>
                        <td>
                            <code>btn--primary</code>
                        </td>
                        <td>
                            <span class="nh-bg--blue rounded text-white p-2">Blue #007aff</span>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            Secondary
                        </td>
                        <td>
                            <code>btn--secondary</code>
                        </td>
                        <td>
                            <span class="nh-bg--orange rounded text-white p-2">Orange #fb8c00</span>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            Success
                        </td>
                        <td>
                            <code>btn--success</code>
                        </td>
                        <td>
                            <span class="nh-bg--green rounded text-white text-wrap p-2">Green #00bfa5</span>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            Danger
                        </td>
                        <td>
                            <code>btn--danger</code>
                        </td>
                        <td>
                            <span class="nh-bg--red rounded text-white p-2">Red #ee4957</span>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            Dark
                        </td>
                        <td>
                            <code>btn--dark</code>
                        </td>
                        <td>
                            <span class="nh-bg--black rounded text-white p-2">Black #343a40</span>
                        </td>
                    </tr>
                </tbody>
            </table>
            <div class="all-section mt-3 mb-5">
                <h2>Main button</h2>
                <p>Use the <span class="code-inline">.btn--solid</span> class if you want to use <b>standard</b> styles.</p>
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

                        <CodeButtonSolid/>
                    </div>
                </div>
            </div>

            <div class="all-section mt-3 mb-5">
                <h2>Pill button</h2>
                <p>Use the <span class="code-inline">.btn--pill</span> class if you want to use <b>pill / rounded</b> styles.</p>
                <div class="section">
                    <div class="row">
                        <div class="component-preview">
                            <div class="component-item d-flex justify-content-center">
                                <a class="btn nh-btn btn--primary btn--pill font-weight-bold" href="javascript:void(0)">primary button</a>
                                <a class="btn nh-btn btn--secondary btn--pill font-weight-bold" href="javascript:void(0)">secondary button</a>
                                <a class="btn nh-btn btn--success btn--pill font-weight-bold" href="javascript:void(0)">success button</a>
                                <a class="btn nh-btn btn--danger btn--pill font-weight-bold" href="javascript:void(0)">danger button</a>
                                <a class="btn nh-btn btn--dark btn--pill font-weight-bold" href="javascript:void(0)">dark button</a>
                            </div>
                        </div>

                        <CodeButtonPill/>
                    </div>
                </div>
            </div>

            <div class="all-section mt-3 mb-5">
                <h2>Outline button</h2>
                <p>Use the <span class="code-inline">.btn--outline</span> class if you want to use <b>outline</b> styles.</p>
                <div class="section">
                    <div class="row">
                        <div class="component-preview">
                            <div class="component-item d-flex justify-content-center">
                                <a class="btn nh-btn btn--primary btn--outline font-weight-bold" href="javascript:void(0)">primary button</a>
                                <a class="btn nh-btn btn--secondary btn--outline font-weight-bold" href="javascript:void(0)">secondary button</a>
                                <a class="btn nh-btn btn--success btn--outline font-weight-bold" href="javascript:void(0)">success button</a>
                                <a class="btn nh-btn btn--danger btn--outline font-weight-bold" href="javascript:void(0)">danger button</a>
                                <a class="btn nh-btn btn--dark btn--outline font-weight-bold" href="javascript:void(0)">dark button</a>
                            </div>
                        </div>

                        <CodeButtonOutline/>
                    </div>
                </div>
            </div>

            <div class="all-section mt-3 mb-5">
                <h2>Icon button</h2>
                <div class="section">
                    <div class="row">
                        <div class="component-preview">
                            <div class="component-item d-flex justify-content-center">
                                <a class="btn btn--icon btn--solid" href="javascript:void(0)" aria-label="icon button" title="icon button">
                                    <span aria-hidden="true" class="far fa-heart"></span>
                                </a>

                                <a class="btn btn--icon btn--pill" href="javascript:void(0)" aria-label="icon button" title="icon button">
                                    <span aria-hidden="true" class="fab fa-twitter"></span>
                                </a>
                                <a class="btn btn--icon btn--outline" href="javascript:void(0)" aria-label="icon button" title="icon button">
                                    <span aria-hidden="true" class="fab fa-google"></span>
                                </a>
                            </div>
                        </div>

                        <CodeButtonIcon/>
                    </div>
                </div>
            </div>

            <div class="all-section mt-3 mb-5">
                <h2>Icon with text button</h2>
                <div class="section">
                    <div class="row">
                        <div class="component-preview">
                            <div class="component-item d-flex justify-content-center">
                                <a class="btn nh-btn btn--default btn--solid" href="javascript:void(0)">
                                    <span class="mr-1">
                                    <span class="fas fa-angle-double-left"></span>
                                    </span> Icon Left
                                </a>
                                <a class="btn nh-btn btn--default btn--solid" href="javascript:void(0)">Icon Right
                                    <span class="ml-1">
                                    <span class="fas fa-angle-double-right"></span>
                                    </span>
                                </a>
                                <a class="btn nh-btn btn--default btn--pill" href="javascript:void(0)">
                                    <span class="mr-1">
                                    <span class="fas fa-angle-double-left"></span>
                                    </span> Icon Left
                                </a>
                                <a class="btn nh-btn btn--default btn--pill" href="javascript:void(0)">Icon Right
                                    <span class="ml-1">
                                    <span class="fas fa-angle-double-right"></span>
                                    </span>
                                </a><br>
                                <a class="btn nh-btn btn--default btn--outline" href="javascript:void(0)">
                                    <span class="mr-1">
                                        <span class="fas fa-angle-double-left"></span>
                                    </span> Icon Left
                                </a>
                                <a class="btn nh-btn btn--default btn--outline" href="javascript:void(0)">Icon Right
                                    <span class="ml-1">
                                        <span class="fas fa-angle-double-right"></span>
                                    </span>
                                </a>
                            </div>
                        </div>

                        <CodeButtonIconText/>
                    </div>
                </div>
            </div>

            <div class="all-section mt-3 mb-5">
                <h2>Loading button</h2>
                <div class="section">
                    <div class="row">
                        <div class="component-preview">
                            <div class="component-item d-flex justify-content-center">
                                <a class="btn nh-btn btn--default btn--solid" href="javascript:void(0)" disabled="disabled">
                                    <span class="ml-1">Loading...</span>
                                    <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                                </a>
                                <a class="btn nh-btn btn--default btn--pill" href="javascript:void(0)" disabled="disabled">
                                    <span class="ml-1">Loading...</span>
                                    <span class="spinner-grow spinner-grow-sm" role="status" aria-hidden="true"></span>
                                </a>
                                <a class="btn nh-btn btn--default btn--outline" href="javascript:void(0)" disabled="disabled">
                                    <span class="ml-1">Loading...</span>
                                    <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                                </a>
                            </div>
                        </div>

                        <CodeButtonLoading/>
                    </div>
                </div>
            </div>

            <div class="all-section mt-3 mb-5">
                <h2>Dropdown</h2>
                <div class="section">
                    <div class="row">
                        <div class="component-preview">
                            <div class="component-item d-flex justify-content-center">
                                <div class="btn-group" role="group">
                                    <button id="btnGroupDrop1" type="button" class="btn nh-btn btn--default btn--solid dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Dropdown
                                    </button>
                                    <div class="dropdown-menu" aria-labelledby="btnGroupDrop1">
                                    <a class="dropdown-item" href="javascript:void(0)">Dropdown link</a>
                                    <a class="dropdown-item" href="javascript:void(0)">Dropdown link</a>
                                    </div>
                                </div>
                                <div class="btn-group" role="group">
                                    <button id="btnGroupDrop1" type="button" class="btn nh-btn btn--default btn--pill dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Dropdown
                                    </button>
                                    <div class="dropdown-menu" aria-labelledby="btnGroupDrop1">
                                    <a class="dropdown-item" href="javascript:void(0)">Dropdown link</a>
                                    <a class="dropdown-item" href="javascript:void(0)">Dropdown link</a>
                                    </div>
                                </div>
                                <div class="btn-group" role="group">
                                    <button id="btnGroupDrop1" type="button" class="btn nh-btn btn--default btn--outline dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        Dropdown
                                    </button>
                                    <div class="dropdown-menu" aria-labelledby="btnGroupDrop1">
                                        <a class="dropdown-item" href="javascript:void(0)">Dropdown link</a>
                                        <a class="dropdown-item" href="javascript:void(0)">Dropdown link</a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <CodeButtonDropdown/>
                    </div>
                </div>
            </div>

            <div class="all-section mt-3 mb-5">
                <h2>Size button</h2>
                <p>Tambahkan class <span class="code-inline">.btn--solid</span> untuk menggunakannya.</p>
                <div class="section">
                    <div class="row">
                        <div class="component-preview">
                            <div class="component-item d-flex justify-content-center">
                                <a class="btn nh-btn btn-dark btn--sm" href="javascript:void(0)">small button</a>
                                <a class="btn nh-btn btn-dark btn--md" href="javascript:void(0)">medium button</a>
                                <a class="btn nh-btn btn-dark btn--lg" href="javascript:void(0)">large button</a>
                            </div>
                        </div>

                        <CodeButtonSize/>
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
