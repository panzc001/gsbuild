<template>
    <div class="wraper top_bg-cor">
        <page-header :isActive="isActive"></page-header>
        <!--top-menu-->
        <div class="about_nav-box">
            <div class="about_ctn">
                <h2>关于我们</h2>
                <div class="about_list">
                    <a href="/about_3">企业概况</a>
                    <a href="/about_4">公司战略</a>
                    <a class="active">企业文化</a>
                    <a href="/about_2">发展历程</a>
                    <a href="/about_6">公司荣誉</a>
                    <a href="/about_8">社会责任</a>
                    <a href="/about_9">人才招聘</a>
                </div>
            </div>
        </div>
        <div class="cur_1">
            <div class="animated zoomIn">
                <img src="../assets/cur_1.png"/>
                <div class="cut_tt">
                    <h1>企业愿景</h1>
                    <p>致力成为国内领先的“制造+服务” </br>综合性提供商</p>
                </div>
            </div>
        </div>
        <div class="cur_2 animated">
            <h2>企业使命</h2>
            <span>共建人类美好家园</span>
        </div>
        <div class="cur_2 animated">
            <h2>企业精神</h2>
            <span>务实、创新、高效、专业</span>
        </div>
        <ul class="cur_3">
            <li class="animated">
                <img src="../assets/cur_2.png"/>
            </li>
            <li class="animated">
                <img src="../assets/cur_3.png"/>
            </li>
            <li class="animated">
                <img src="../assets/cur_4.png"/>
            </li  class="animated">
        </ul>
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
                    about: true,
                    dj: false,
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
            $(window).scroll(function () {
                const scrollTop = $(this).scrollTop();
                if (scrollTop > 0) {
                    $('.wraper,.nav_box').addClass('on');
                } else {
                    $('.wraper,.nav_box').removeClass('on');
                }
            });

            $(window).scroll(function () {
                const scrollTop = $(this).scrollTop();
                const scrop_1 = $('.cur_2').offset().top;
                const scrop_2 = $('.cur_3').offset().top;
                if (scrollTop >= scrop_1 - 320 && scrollTop < scrop_2 - 320) {
                    $('.cur_2').addClass('fadeInUp');
                } else if (scrollTop >= scrop_2 - 320) {
                    $('.cur_3 li').addClass('zoomIn');
                }
            });
        }
    }
</script>