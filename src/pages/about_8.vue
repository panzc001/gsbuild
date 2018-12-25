<template>
    <div class="wraper">
        <page-header :isActive="isActive"></page-header>
        <!--top-menu-->
        <div class="about_nav-box">
            <div class="about_ctn">
                <h2>关于我们</h2>
                <div class="about_list">
                    <a href="/about_3">企业概况</a>
                    <a href="/about_4">公司战略</a>
                    <a href="/about_5">企业文化</a>
                    <a href="/about_2">发展历程</a>
                    <a href="/about_6">公司荣誉</a>
                    <a class="active">社会责任</a>
                    <a href="/about_9">人才招聘</a>
                </div>
            </div>
        </div>
        <ul class="sociol_ogy">
            <li class="ogy_1 animated fadeInUp">
                <div class="s-t">
                    <h3>标题标题标题</h3>
                    <p>
                        详情详情详情详情详情详情详情详情详情详情详情详情详情详情详情详情详情详情详情详情详情详情详情详情详情详情详情详情详情详情详情详情详情详情详情详情详情详情详情详情详情详情详情详情详情详情详情详情详情详情</p>
                </div>
                <span>
                     <img src="../assets/shzr_1.png"/>
                </span>
            </li>
            <li class="ogy_2 animated">
                <div class="s-t">
                    <h3>标题标题标题</h3>
                    <p>
                        详情详情详情详情详情详情详情详情详情详情详情详情详情详情详情详情详情详情详情详情详情详情详情详情详情详情详情详情详情详情详情详情详情详情详情详情详情详情详情详情详情详情详情详情详情详情详情详情详情详情</p>
                </div>
                <span>
                     <img src="../assets/shzr_2.png"/>
                </span>
            </li>
            <li class="ogy_3 animated">
                <div class="s-t">
                    <h3>标题标题标题</h3>
                    <p>
                        详情详情详情详情详情详情详情详情详情详情详情详情详情详情详情详情详情详情详情详情详情详情详情详情详情详情详情详情详情详情详情详情详情详情详情详情详情详情详情详情详情详情详情详情详情详情详情详情详情详情</p>
                </div>
                <span>
                     <img src="../assets/shzr_3.png"/>
                </span>
            </li>
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
                const scrop_1 = $('.ogy_1').offset().top;
                const scrop_2 = $('.ogy_2').offset().top;
                const scrop_3 = $('.ogy_3').offset().top;
                if (scrollTop >= scrop_1 && scrollTop < scrop_2) {
                    $('.ogy_2').addClass('fadeInUp');
                } else if (scrollTop >= scrop_2 &&  scrollTop < scrop_3-200) {
                    $('.ogy_3').addClass('fadeInUp');
                }
            });
        }
    }
</script>