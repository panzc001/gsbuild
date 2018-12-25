<template>
    <div class="wraper">
        <page-header :isActive="isActive"></page-header>
        <!--top-menu-->
        <div class="about_nav-box">
            <div class="about_ctn">
                <h2>关于我们</h2>
                <div class="about_list">
                     <a class="active">企业概况</a>
                    <a href="/about_4">公司战略</a>
                    <a href="/about_5">企业文化</a>
                    <a href="/about_2">发展历程</a>
                    <a href="/about_6">公司荣誉</a>
                    <a href="/about_8">社会责任</a>
                    <a href="/about_9">人才招聘</a>
                </div>
            </div>
        </div>
        <div class="wri_box-1">
            <img class="animated fadeInLeft" src="../assets/qygk_1.png"/>
            <div class="tt animated fadeInRight ">
                <p>甘肃建投重工科技有限公司是集专用车辆、环卫等高新技术装备的研发和制造，环境卫生项目投资与运营为一体的综合性提供商，拥有省级专用汽车工程研究中心、专用汽车西北试验基地，是国家级高新技术企业、中国城市环境卫生协会会员单位，是中国500强企业甘肃省建设投资(控股)集团总公司的直属经营公司。</p>
                <p>公司坐落于第五个国家级新区—兰州新区，并建成完善了专用车辆、环卫等装备产品生产线，现已形成以环境卫生领域为重点、建筑运输领域和文化旅游领域为辅的三大核心产品体系，为客户提供了道路清扫保洁、市政路面养护、垃圾收集转运、混凝土运输泵送等成套设备解决方案。</p>
            </div>
        </div>
        <img class="wri_box-2 animated" src="../assets/qygk_2.png"/>
        <div class="wri_box-3">
            <img class="animated" src="../assets/qygk_3.png"/>
            <div class="tt animated">
                <p>多年来公司坚持以科技研发为核心导向，设立甘肃省建筑机械工程实验室有限公司，专项开展对专用汽车领域关键共性技术的研究，承担科研开发和工程化研究任务，构建产学研深度融合的技术创新体系，为高漠牌产品研发提供技术开发及成果工程化的试验、验证环境，为产品优化、系列化及更新换代、提供了强有力的科技支撑。</p>
                <p>公司积极响应国家供给侧结构性改革、PPP模式发展导向、中国装备制造2025指导思想，根据“制造+服务”的重点发展战略，为实现服务业带动制造业，制造业支持服务业的双向融台新格局而专项成立了以环境卫生项目设计、投资、运营为一体的环境卫生领域服务公司—甘肃高漠环境产业发展有限公司，承揽的环卫PPP及外包项目遍布于多个省份。</p>
                <p>公司自创立以来，秉持“与世界标准接轨、与国家战略融合、与区域经济协调”的发展理念，坚持一流的管理，生产一流的产品，提供一流的服务，创建一流的企业，致力成为服务型制造业的领跑者。</p>
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

            $(window).scroll(function () {
                const scrollTop = $(this).scrollTop();
                const scrop_1 = $('.wri_box-2').offset().top;
                const scrop_2 = $('.wri_box-3').offset().top;
                if (scrollTop >= scrop_1 - 320 && scrollTop < scrop_2-300) {
                    $('.wri_box-2').addClass('zoomIn').addClass('on');
                } else if (scrollTop >= scrop_2-300) {
                    $('.wri_box-3 .tt').addClass('fadeInLeft');
                    $('.wri_box-3 img').addClass('fadeInRight')
                }
            });
        }
    }
</script>