<template>
    <div class="wraper top_bg-cor">
        <page-header :isActive="isActive"></page-header>
        <!--top-menu-->
        <div class="zz-content_box">
            <div class="list_ctn animated fadeIn XG">
                <img src="../assets/XG1.png" alt="">
            </div>
            <div class="point">
                <span></span>
                <p>甘肃省高漠环境工程有限公司于2017年3月成立，位于兰州新区昆仑山大道18号甘肃建投工业产业基地内，是甘肃建投重工科技有限公司根据“环卫装备制造+环卫产业服务”的发展战略，为实现运营服务业带动制造业，制造业支持运营服务业务的双相融合新格局，专项成立的以环境卫生设计、投资、管理、运营为一体的一家环境卫生领域服务公司。</p>
            </div>
            <div  class="photo">
                <div >
                    <img src="../assets/zz-serve311.png" alt="">
                    <a href="/zz-serve_1">环卫运营</a>
                </div>
                <div>
                    <img src="../assets/zz-aerve321.png" alt="">
                    <a href="/zz-serve_2">商砼服务</a>
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