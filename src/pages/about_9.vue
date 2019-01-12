<template>
    <div class="wraper top_bg-cor">
        <page-header :isActive="isActive"></page-header>
        <!--top-menu-->
        <div class="about_nav-box">
            <div class="about_ctn">
                <h2>关于我们</h2>
                <div class="about_list">
                    <a href="/about_1">企业概况</a>
                    <a href="/about_1#zhlv">公司战略</a>
                    <a href="/about_1#qywh">企业文化</a>
                    <a href="/about_2">发展历程</a>
                    <a href="/about_6">公司荣誉</a>
                    <a href="/about_8">社会责任</a>
                    <a class="active">人才招聘</a>
                </div>
            </div>
        </div>
        <div class="zP-wraper ">
            <a class="zp_1 animated zoomIn">
                <img src="../assets/zp_1.png" />
            </a>
            <a class="zp_2 animated zoomIn">
                <div class="rig-bot">
                    <h3>社会招聘</h3>
                    <span><em @click="jump1">查看更多&nbsp;&gt;</em></span>
                </div>
                <img src="../assets/zp_2.png" />
            </a>
            <a class="zp_3  animated zoomIn">
                <div class="rig-bot">
                    <h3>校园招聘</h3>
                    <span><em @click="jump2">查看更多&nbsp;&gt;</em></span>
                </div>
                <img src="../assets/zp_3.png" />
            </a>
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
        },
        methods: {
            jump1(){
            //this.$router.push("/cart")
            //传递的参数用{{ $route.query.goodsId }}获取
            this.$router.push({path: '/about_11'})
            //this.$router.go(-2)
            //后退两步
            },
            jump2(){
            this.$router.push({path: '/about_10'})
            }
  }
    }
</script>