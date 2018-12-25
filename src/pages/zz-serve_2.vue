<template>
    <div class="wraper">
        <page-header :isActive="isActive"></page-header>
        <!--top-menu-->
        <div class="about_nav-box zz-_nav-bg">
            <div class="about_ctn">
                <h2>制造+服务</h2>
                <div class="about_list">
                    <a href="/zz-serve_1">环卫装备制造+环卫产业服务</a>
                    <a class="active">混凝土装备制造+混凝土运输服务</a>
                    <a href="/zz-serve_3">甘肃高漠环境工程有限公司</a>
                </div>
            </div>
        </div>
        <div class="zz-content_box">
            <div class="list_ctn animated fadeIn">
                <div class="tt">
                    <h2>主旨：核心技术服务化</h2>
                </div>
                <div class="tt">
                    <h2>一、设备租赁</h2>
                    <p>
                        公司具有商砼领域系列产品开发、生产、销售、售后保障能力，可为客户提供标准化、个性化的各商砼装备，优化设备选型配置，科学使用装备，对设备的管理具有独特优势。针对商砼市场的需求差异化，组织多种容积的混凝土运输车、各类商砼施工装备，投入市场以满足不同客户的需求。</p>
                </div>
                <div class="tt">
                    <h2>二、远程监控（智慧平台）</h2>
                    <p>
                        结合国内先进的物联网、互联网应用及大数据云平台技术，将我司所有工程装备纳入到远程管理平台。针对租赁车辆不同及客户需求各异，做到实时监控、实时指挥、实时调配、油量监控、轨迹追踪，改变原有管理模式、保障监管效果，提高精细化管理，为客户节省管理成本。</p>
                </div>
                <div class="tt">
                    <h2>三、个性化订制（团队服务及专业运营）</h2>
                    <p>针对客户的差异化需求，一是组织不同专业人员组成管理团队，为客户提供最适合的服务。二是应客户要求的不同，运用专业的计算模型，为客户组织最适合的施工车队，以达到客户收益最大化的目的。</p>
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