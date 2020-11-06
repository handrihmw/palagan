<template>
    <main class="content-wrapper">
        <section class="our-services">
            <div class="containers">
                <ul class="our-services__list">
                    <li class="our-services__card">
                        <a href="">
                            <img class="our-services__service-image  img-fluid" src="https://www.niagahoster.co.id/assets/images/2020/campaign/blackfriday/icon-unlimited.svg" alt="">
                            <h4 class="our-services__service-title">Unlimited Hosting</h4>
                            <p class="our-services__service-description">Cocok untuk website skala kecil dan menengah </p>
                            <p class="our-services__service-start-from">Mulai dari</p>
                            <p class="our-services__service-price">Rp. 200.000,-</p>
                        </a>
                    </li>
                    <li class="our-services__card">
                        <a href="">
                            <img class="our-services__service-image  img-fluid" src="https://www.niagahoster.co.id/assets/images/2020/campaign/blackfriday/icon-cloudhosting.svg" alt="">
                            <h4 class="our-services__service-title">Cloud Hosting</h4>
                            <p class="our-services__service-description">Kapasitas resource tinggi, fully managed, dan mudah dikelola</p>
                            <p class="our-services__service-start-from">Mulai dari</p>
                            <p class="our-services__service-price">Rp. 175.000,-</p>
                        </a>
                    </li>
                    <li class="our-services__card">
                        <a href="">
                            <img class="our-services__service-image  img-fluid" src="https://www.niagahoster.co.id/assets/images/2020/campaign/blackfriday/icon-vps.svg" alt="">
                            <h4 class="our-services__service-title">Cloud VPS</h4>
                            <p class="our-services__service-description">Dedicated resource dengan akses root </p>
                            <p class="our-services__service-start-from">Mulai dari</p>
                            <p class="our-services__service-price">Rp. 145.000,-</p>
                        </a>
                    </li>
                    <li class="our-services__card">
                        <a href="">
                            <img class="our-services__service-image  img-fluid" src="https://www.niagahoster.co.id/assets/images/2020/campaign/blackfriday/icon-domain.svg" alt="">
                            <h4 class="our-services__service-title">Domain</h4>
                            <p class="our-services__service-description">Temukan nama domain yang Anda inginkan</p>
                            <p class="our-services__service-start-from">Mulai dari</p>
                            <p class="our-services__service-price">Rp 14.000,-</p>
                        </a>
                    </li>
                </ul>
                <div class="our-services-website row justify-content-center">
                    <div class="col-lg-6">
                        <div class="card">
                            <div class="card-body our-services-website__link" onclick="javascript:void();">
                                <div class="row align-items-center">
                                    <div class="col-lg-3 col-12">
                                        <img class="our-services-website__img" src="https://www.niagahoster.co.id/assets/images/2020/campaign/blackfriday/icon-pembuatan-website.svg" alt="">
                                    </div>
                                    <div class="col-lg-9">
                                        <h3 class="our-services-website__title">Pembuatan Website</h3>
                                        <p class="our-services-website__description">500 perusahaan lebih percayakan pembuatan websitenya pada kami. <a href="https://www.niagahoster.co.id/membuat-website" title="Cek Selengkapnya" target="_blank">Cek selengkapnya...</a></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </main>
</template>

<style lang="scss">
    .our-services {
        margin-top: 30px;

        &__title {
            text-align: center;
            margin-bottom: 55px;
            font-family: NunitoSansBold, sans-serif;
            font-size: 33px;
        }

        &__list {
            list-style: none;
            margin: 0;
            padding: 0;
            text-align: center;
        }

        &__card {
            display: inline-block;
            max-width: 260px;
            height: 394px;
            padding: 55px 24px;
            background: #fff;
            border-radius: 10px;
            box-shadow: 0 6px 20px rgba(17,26,104,.2);
            text-align: center;
            margin-left: 15px;
            margin-right: 15px;
            transition: all .4s;

            > a {
            color: #3A4166;
            }
            &:not(:last-child) {
            margin-bottom: 30px;
            }
            &:hover {
            cursor: pointer;
            transform: scaleY(1.025);
            box-shadow: 0 6px 30px rgba(17,26,104,.4);
            transition: all .4s;

            > * {
                transform: scaleY(.975);
                transition: transform .4s;
            }
            }

            @media screen and (max-width: 1200px) {
            margin-left: 0;
            margin-right: 0;
            margin-bottom: 0 !important;

            &:not(:last-child) {
                margin-right: 28px;
            }
            }
        }

        &__service-image {
            margin-bottom: 30px;
        }

        &__service-title {
            font-family: NunitoSansBold, sans-serif;
            font-size: 18px;
            font-weight: bold;
            margin-bottom: 18px;
        }

        &__service-description {
            font-size: 14px;
            color: rgba(58,65,102,.7);
            margin-bottom: 24px;
        }

        &__service-start-from {
            font-family: NunitoSansBold, sans-serif;
            font-size: 14px;
            font-weight: bold;
            opacity: .7;
        }
        &__service-price {
            font-family: NunitoSansBold, sans-serif;
            font-size: 24px;
            font-weight: bold;
        }
    }
</style>
