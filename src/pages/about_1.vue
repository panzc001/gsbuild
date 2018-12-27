<template>
    <div class="wraper top_bg-cor">
        <page-header :isActive="isActive"></page-header>
        <div class="about_nav-box">
            <div class="about_ctn">
                <h2>关于我们</h2>
                <div class="about_list">
                    <a class="active">企业概况</a>
                    <a>公司战略</a>
                    <a>企业文化</a>
                    <a href="/about_2">发展历程</a>
                    <a href="/about_6">公司荣誉</a>
                    <a href="/about_8">社会责任</a>
                    <a href="/about_9">人才招聘</a>
                </div>
            </div>
        </div>
        <!--top-->
        <div class="abo_top">
            <div class="tt">
                <p>集专用车辆、环卫等高新技术装备的研发和制造，环境卫生项目投资与运营为一体的综合性提供商</p>
                <ul>
                    <li class="animated fadeInUp">省级专用汽车工程研究中心</li>
                    <li class="animated fadeInUp">专用汽车西北试验基地</li>
                    <li class="animated fadeInUp">国家级高新技术企业</li>
                    <li class="animated fadeInUp">中国城市环境卫生协会会员单位</li>
                </ul>
            </div>
        </div>

        <!--公司战略-->
        <div class="zhlv_container">
            <div class="zhlv">
                <h2 class="animated"></h2>
                <h3 class="animated">成为服务型制造业的领跑者</h3>
                <p class="animated">在甘肃建投集团战略的引领下</p>
                <p class="animated">聚焦于专用车、环卫等高端装备制造业与环境卫生项目投资、运营等领域业务</p>
                <p class="animated">成为服务型制造业的领跑者</p>
            </div>
        </div>
        <!--企业文化-->
        <div class="comp_culture">
            <h1></h1>
            <div class="cnt">
                <ul class="list_box animated">
                    <li>
                        <h2>企业愿景</h2>
                        <p>致力成为国内领先的“制造+服务”综合性提供商</p>
                    </li>
                    <li>
                        <h2>企业使命</h2>
                        <p>共建人类美好家园</p>
                    </li>
                    <li>
                        <h2>企业精神</h2>
                        <p>务实、创新、高效、专业</p>
                    </li>
                </ul>
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
            const scrop_1 = $('.zhlv_container').offset().top;
            const scrop_2 = $('.comp_culture').offset().top;
            $('.about_list a').click(function () {
                const index = $(this).index();
                $(this).addClass('active').siblings().removeClass('active')
                switch (index) {
                    case 1:
                        $('html,body').animate({scrollTop: scrop_1-100});
                        break;
                    case 2:
                        $('html,body').animate({scrollTop: scrop_2-80});
                        break;
                    default:
                        break;
                }
            });

            $(window).scroll(function () {
                const scrollTop = $(this).scrollTop();
                if (scrollTop >= scrop_1 - 320 && scrollTop < scrop_2-150) {
                    $('.zhlv h2').addClass('fadeInUp');
                    $('.zhlv h3').addClass('fadeInUp');
                    $('.zhlv p').addClass('fadeInUp');
                } else if (scrollTop >= scrop_2-150) {
                    $('.list_box').addClass('fadeInRight');
                }
            });
        }
    }
</script>