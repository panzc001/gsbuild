<template>
    <div class="wraper">
        <page-header :isActive="isActive"></page-header>
        <img src="../assets/dj_1.png" class="dj_title animated zoomIn"/>
        <div class="dj_ctn">
            <ul class="dj_lef animated fadeInRight">
                <li>
                    <h1><a href="#">党建主题党建主题</a></h1>
                    <p>党建摘要党建摘要党建摘要党建摘要党建摘要党建摘要党建摘要党建摘要党建摘要党建摘要党建摘要党建摘要党建摘要党建摘要党建摘要</p>
                </li>
                <li>
                    <h1><a href="#">党建主题党建主题</a></h1>
                    <p>党建摘要党建摘要党建摘要党建摘要党建摘要党建摘要党建摘要党建摘要党建摘要党建摘要党建摘要党建摘要党建摘要党建摘要党建摘要</p>
                </li>
                <li>
                    <h1><a href="#">党建主题党建主题</a></h1>
                    <p>党建摘要党建摘要党建摘要党建摘要党建摘要党建摘要党建摘要党建摘要党建摘要党建摘要党建摘要党建摘要党建摘要党建摘要党建摘要</p>
                </li>
                <li>
                    <h1><a href="#">党建主题党建主题</a></h1>
                    <p>党建摘要党建摘要党建摘要党建摘要党建摘要党建摘要党建摘要党建摘要党建摘要党建摘要党建摘要党建摘要党建摘要党建摘要党建摘要</p>
                </li>
            </ul>
            <div class="dj_rig animated zoomIn">
                <ul class="swiper-wrapper">
                    <li class="swiper-slide">
                        <a href="#">
                            <h1>党建主题党建主题1</h1>
                            <i :style="'backgroundImage: url(' + img + ')'"></i>
                        </a>
                    </li>
                    <li class="swiper-slide">
                        <a href="#">
                            <h1>党建主题党建主题1</h1>
                            <i :style="'backgroundImage: url(' + img + ')'"></i>
                        </a>
                    </li>
                </ul>
                <div class="dj_pagination"></div>
            </div>
        </div>
        <page-footer></page-footer>
    </div>
</template>
<script>
    import pageHeader from '../components/pageHeader.vue'
    import pageFooter from '../components/pageFooter.vue'
    import animate from 'animate.css'
    import $ from 'jquery'
    import Swiper from 'swiper'

    export default {
        components: {pageHeader, pageFooter},
        data() {
            return {
                isActive: {
                    index: false,
                    about: false,
                    dj: true,
                    xw: false,
                    pp: false,
                    zz: false,
                    kj: false,
                    yx: false,
                    lx: false,
                },
                img: require("../assets/bann01.png")
            }
        },
        mounted() {
            new Swiper(".dj_rig", {
                pagination: {
                    el: '.dj_pagination',
                    clickable: true
                },
                paginationClickable: true,
                loop: true,
                autoplay: true
            });

            $(window).scroll(function () {
                const scrollTop = $(this).scrollTop();
                if (scrollTop > 0) {
                    $('.wraper,.nav_box').addClass('on');
                } else {
                    $('.wraper,.nav_box').removeClass('on');
                }
            });
        }
    }
</script>