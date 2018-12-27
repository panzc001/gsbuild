<template xmlns="http://www.w3.org/1999/html">
    <div class="wraper top_bg-cor">
        <page-header :isActive="isActive"></page-header>
        <!--top-menu-->
        <div class="about_nav-box">
            <div class="about_ctn">
                <h2>关于我们</h2>
                <div class="about_list">
                    <a href="/about_3">企业概况</a>
                    <a class="active">公司战略</a>
                    <a href="/about_5">企业文化</a>
                    <a href="/about_2">发展历程</a>
                    <a href="/about_6">公司荣誉</a>
                    <a href="/about_8">社会责任</a>
                    <a href="/about_9">人才招聘</a>
                </div>
            </div>
        </div>
        <img src="../assets/qyzl_1.png" class="qyzl_img animated zoomIn"/>
        <div class="qyzy_tt">
            <h1 class="animated">成为服务型制造业的领跑者</h1>
            <p class="animated">在甘肃建投集团战略的引领下</br>聚焦于专用车辆、环卫等高端装备制造业与环境卫生项目投资、运营等领域业务</br>成为服务型制造业的领跑者</p>
        </div>
        <img src="../assets/qyzl_2.png" class="qyzl_img mr-t-50 animated"/>
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
                const scrop_1 = $('.qyzy_tt').offset().top;
                const scrop_2 = $('.mr-t-50').offset().top;
                if (scrollTop >= scrop_1 - 320 && scrollTop < scrop_2 - 260) {
                    $('.qyzy_tt h1,.qyzy_tt p').addClass('fadeInUp');
                } else if (scrollTop >= scrop_2 - 260) {
                    $('.mr-t-50').addClass('zoomIn');
                }
            });
        }
    }
</script>