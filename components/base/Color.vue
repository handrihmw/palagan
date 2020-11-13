<template>
    <div class="container">
        <div class="section">
            <h1 class="display-1 text-left mt-5">Color</h1>
            <p class="bd-lead mb-5">Convey meaning through color with a handful of color utility classes. Includes support for styling links with hover states, too.</p>
            <div class="all-section">
                <section>
                    <h2 class="mt-5 mb-5">Primary Colors</h2>
                    <figure class="colors text-white">
                        <div class="blue">
                            blue
                            <span>#007aff</span>
                            <span>rgb(0, 122, 255)</span>
                        </div>
                        <div class="orange">
                            orange
                            <span>#fb8c00</span>
                            <span>rgb(251, 140, 0)</span>
                        </div>
                        <div class="green">
                            green
                            <span>#00bfa5</span>
                            <span>rgb(0, 191, 165)</span>
                        </div>
                        <div class="red">
                            red
                            <span>#ee4957</span>
                            <span>rgb(238, 73, 87)</span>
                        </div>
                        <div class="white text-black-50">
                            white
                            <span>#ffffff</span>
                            <span>rgb(255, 255, 255)</span>
                        </div>
                        <div class="gray">
                            gray
                            <span>#6c757d</span>
                            <span>rgb(108, 117, 125)</span>
                        </div>
                        <div class="violet">
                            violet
                            <span>#5831cc</span>
                            <span>rgb(88, 49, 204)</span>
                        </div>
                        <div class="black">
                            black
                            <span>#343a40</span>
                            <span>rgb(52, 58, 64)</span>
                        </div>
                    </figure>

                    <h2 class="mt-5 mb-5">Monochromatic Colors</h2>
                    <figure class="tint text-white">
                        <div class="soft-blue">
                            soft blue
                            <span>#1a87ff</span>
                            <span>rgb(26,135,255)</span>
                        </div>
                        <div class="blue">
                            blue
                            <span>#007aff</span>
                            <span>rgb(0,122,255)</span>
                        </div>
                        <div class="dark-blue">
                            dark blue
                            <span>#006ee6</span>
                            <span>rgb(0,110,230)</span>
                        </div>
                    </figure>
                    <figure class="tint text-white">
                        <div class="soft-orange">
                            soft orange
                            <span>#ff9717</span>
                            <span>rgb(26,135,255)</span>
                        </div>
                        <div class="orange">
                            orange
                            <span>#fb8c00</span>
                            <span>rgb(0,122,255)</span>
                        </div>
                        <div class="dark-orange">
                            dark orange
                            <span>#ee8100</span>
                            <span>rgb(0,110,230)</span>
                        </div>
                    </figure>
                    <figure class="tint text-white">
                        <div class="soft-green">
                            soft green
                            <span>#25cab0</span>
                            <span>rgb</span>
                        </div>
                        <div class="green">
                            green
                            <span>#00bfa5</span>
                            <span>rgb</span>
                        </div>
                        <div class="dark-green">
                            dark green
                            <span>#00b49a</span>
                            <span>rgb</span>
                        </div>
                    </figure>
                    <figure class="tint text-white d-flex">
                        <div class="soft-red">
                            soft red
                            <span>#f8535f</span>
                            <span>rgb</span>
                        </div>
                        <div class="red">
                            red
                            <span>#ee4957</span>
                            <span>rgb</span>
                        </div>
                        <div class="dark-red">
                            dark red
                            <span>#e43f4f</span>
                            <span>rgb</span>
                        </div>
                    </figure>
			    </section>

                <section>
                    <h2 class="mt-5 mb-5">RGBA Colors</h2>
                    <div class="row">
                        <div class="col-md-4 p-2">
                            <div v-for="(value, clr) in items.red" :key="clr">
                                <div :class="'monochromatic monochromatic__'+ value.color">
                                    <div class="d-flex justify-content-start">
                                        <div class="d-flex align-items-center">
                                            <span><b>{{ value.percent }}</b></span>
                                        </div>
                                        <div class="d-flex flex-column ml-5">
                                            <span>CMYK <b>{{ value.cmyk }}</b></span>
                                            <span>RGB <b>{{ value.rgb }}</b></span>
                                            <span>HEX <b>{{ value.hex }}</b></span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4 p-2">
                            <div v-for="(value, clr) in items.green" :key="clr">
                                <div :class="'monochromatic monochromatic__'+ value.color">
                                    <div class="d-flex justify-content-start">
                                        <div class="d-flex align-items-center">
                                            <span><b>{{ value.percent }}</b></span>
                                        </div>
                                        <div class="d-flex flex-column ml-5">
                                            <span>CMYK <b>{{ value.cmyk }}</b></span>
                                            <span>RGB <b>{{ value.rgb }}</b></span>
                                            <span>HEX <b>{{ value.hex }}</b></span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4 p-2">
                            <div v-for="(value, clr) in items.blue" :key="clr">
                                <div :class="'monochromatic monochromatic__'+ value.color">
                                    <div class="d-flex justify-content-start">
                                        <div class="d-flex align-items-center">
                                            <span><b>{{ value.percent }}</b></span>
                                        </div>
                                        <div class="d-flex flex-column ml-5">
                                            <span>CMYK <b>{{ value.cmyk }}</b></span>
                                            <span>RGB <b>{{ value.rgb }}</b></span>
                                            <span>HEX <b>{{ value.hex }}</b></span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    </div>
</template>

<script>
    import color from '~/static/color.json'

    export default {
        data() {
            return {
                items: color
            };
        }
    };
</script>
