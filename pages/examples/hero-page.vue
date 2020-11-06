<template>
    <main class="content-wrapper">
        <section class="hero">
            <div class="row">
                <div class="col-md-6">
                    <h1 class="hero__title">Saatnya Pindah ke VPS Murah Berkualitas!</h1>
                    <h2 class="hero__description">Dapatkan kontrol penuh atas server dan hosting yang Anda kelola dengan akses full root di VPS Hosting. Upgrade resource kapan saja sesuai kebutuhan Anda untuk menampung trafik website super tinggi!</h2>
                    <a class="btn nh-btn btn--secondary btn--solid text-uppercase font-weight-bold" href="javascript:void(0)">Pilih Sekarang</a>
                </div>
                <div class="hero__image-wrapper col-md-6">
                    <img class="hero__image img-fluid" src="~/assets/img/examples/hero-illustration-homepage.svg" alt="">
                </div>
            </div>
        </section>
    </main>
</template>

<style lang="scss">
    .hero {
        background: linear-gradient(63.11deg, #00349B -38.24%, rgba(0, 92, 255, 0.921875) 34.47%, #007AFF 104.22%);
        border-radius: 24px;
        box-shadow: 0 6px 20px rgba(17,26,104,.15);
        filter: drop-shadow(0 8px 32px rgba(58,65,102,.24));
        margin: 20px;
        padding: 80px 40px;

        &__title {
            color: #fff;
            font-family: NunitoSansBold, sans-serif;
            font-weight: bold;
            font-size: 40px;
            letter-spacing: .05em;
            margin-bottom: 24px;
        }

        &__description {
            color: #fff;
            font-family: NunitoSansRegular,sans-serif;
            font-size: 20px;
            margin-top: 40px;
            margin-bottom: 24px;
            line-height: 177.3%;
            letter-spacing: .05em;
            padding: 20px 0;
        }

        &__image-wrapper {
            @media screen and (max-width: 1200px) {
                margin-top: 0;
                position: relative;
            }
        }

        &__image {
            @media screen and (max-width: 1200px) {
                position: absolute;
                width: 100%;
                right: 0;
                top: -53px;
            }
        }
    }
</style>
