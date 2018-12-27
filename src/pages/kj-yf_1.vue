<template>
    <div class="wraper top_bg-cor">
        <page-header :isActive="isActive"></page-header>
        <!--top-menu-->
        <div class="about_nav-box kj_yf-box">
            <div class="about_ctn">
                <h2>科技+研发</h2>
                <div class="about_list">
                    <a class="active">科技+研发</a>
                    <a href="/kj-yf_2">建筑机械工程实验室</a>
                    <a href="/kj-yf_3">研究成果专利</a>
                </div>
            </div>
        </div>
        <div class="kj_yf-wrap">
            <div class="kj_1">
                <ul>
                    <li class="active">
                        <h1>01</h1>
                        <span>业务平台</span>
                        <p>产品技术研发、技术咨询、
                            技术转让、检验检测等</p>
                    </li>
                    <li>
                        <h1>02</h1>
                        <span>产品平台</span>
                        <p>混凝土泵车、
                            混凝土搅拌运输车等混凝土机械、
                            洒水车、洗扫车、
                            压缩式垃圾车等环卫机械、
                            高空作业车、广告车等市政车辆</p>
                    </li>
                    <li>
                        <h1>03</h1>
                        <span>检测平台</span>
                        <p>产品技术研发、技术咨询、
                            技术转让、检验检测等</p>
                    </li>
                    <li>
                        <h1>04</h1>
                        <span>创新中心</span>
                        <p>产品技术研发、技术咨询、
                            技术转让、检验检测等</p>
                    </li>
                </ul>
            </div>
            <div class="kj_2">
                <h2>研究成果、专利、获奖以及成果工程化和产业化情况</h2>
                <div class="bg_img">
                    <ul class="animated">
                        <li>风电塔架升降机</li>
                        <li>QTZ400大型塔式起重机</li>
                        <li>GJR400全液压旋挖钻机</li>
                        <li>专用汽车</li>
                    </ul>
                </div>
            </div>
            <div class="kj_3">
                <div class="ctn_box">
                    <div class="wri-tt animated">
                        <h2>建筑机械工程实验室</h2>
                        <p>甘肃省建筑机械工程实验室有限公司成立于2014年10月，注册资金3000万元，系甘肃建投装备制造有限公司的全资子公司，是省发展和改革委员会批复的省级工程研究中心（工程实验室）（甘发改高技〔2014〕1037号）。</p>
                    </div>
                    <img class="animated" src="../assets/kj-yf_3.png"/>
                </div>
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
                    dj: false,
                    xw: false,
                    pp: false,
                    zz: false,
                    kj: true,
                    yx: false,
                    lx: false,
                },
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
                const scrop_1 = $('.kj_2').offset().top;
                const scrop_2 = $('.kj_3').offset().top;
                if (scrollTop >= scrop_1 - 400 && scrollTop < scrop_2- 400 ) {
                    $('.bg_img ul').addClass('fadeInRight');
                } else if (scrollTop >= scrop_2- 400) {
                    $('.wri-tt').addClass('fadeInRight');
                    $('.ctn_box img').addClass('fadeInLeft');
                }
            });

            $('.kj_1 li').hover(function () {
                $(this).addClass('active').siblings().removeClass('active');
            });
        }
    }
</script>