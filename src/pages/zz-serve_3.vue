<template>
    <div class="wraper">
        <page-header :isActive="isActive"></page-header>
        <!--top-menu-->
        <div class="about_nav-box zz-_nav-bg">
            <div class="about_ctn">
                <h2>制造+服务</h2>
                <div class="about_list">
                    <a href="/zz-serve_1">环卫装备制造+环卫产业服务</a>
                    <a href="/zz-serve_2">混凝土装备制造+混凝土运输服务</a>
                    <a class="active">甘肃高漠环境工程有限公司</a>
                </div>
            </div>
        </div>
        <div class="zz-content_box">
            <div class="list_ctn animated fadeIn">
                <div class="tt">
                    <p class="animated fadeInUp">
                        甘肃高漠环境工程有限公司于2017年3月成立，位于兰州新区昆仑山大道18号甘肃建投工业产业基地内，是甘肃建投重工科技有限公司根据“环卫装备制造+环卫产业服务”的发展战略，为实现运营服务业带动制造业，制造业支持运营服务业的双相融合新格局，专项成立的以环境卫生设计、投资、管理、运营为一体的一家环境卫生领域服务公司。</p>

                    <div class="gm_box">
                        <div class="wri animated fadeInRight">
                            <p>公司将以兰州新区作为战略基地，依托甘肃建投重工科技有限公司强有力的环卫装备生产设计能力，以“共建人类美好家园”为己任，面向国内市场，打造环卫精品工程。</p>
                            <p>
                                公司自成立以来，在环卫服务领域不断探索创新，围绕“环保、智能、创新”的技术理念，“平台化、模块化、便捷化”的设计理念，“优质、专注、高效”的服务理念，“一体化、集约化、精细化”的管理理念，确保公司在环卫服务领域的市场竞争力。</p>
                        </div>
                        <img class="animated fadeInLeft" src="../assets/gm_img.png">
                    </div>
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
                    zz: true,
                    kj: false,
                    yx: false,
                    lx: false,
                },
                img: require("../assets/bann01.png")
            }
        },
        mounted() {
            $('html,body').animate({scrollTop: 0}, 0);
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