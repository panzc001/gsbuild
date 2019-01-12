<template>
    <div class="wraper top_bg-cor">
        <!--导航头-->
        <page-header  :isActive="isActive"></page-header>
        <!--营销服务-->
        <div class="about_nav-box zz-_nav-bg product_nav">
            <div class="about_ctn">
                <h2>营销服务</h2>
                <div class="about_list">
                    <a href="/yx-fw_2">营销网络</a>
                    <a href="/yx-fw_3">配件供应</a>
                    <a href="/yx-fw_4">技术信息</a>
                    <a class="active">售后服务</a>
                    <a href="/yx-fw_6">留言咨询</a>
                </div>
            </div>
        </div>
        <!--中间板块-->
        <div class="word_all">
            <div class="boxlist">
                <div class="boxlist-1 animated fadeInLeft">
                    <div>
                        <h2>一个宗旨</h2>
                        <p>为客户创造最大价值</p>
                    </div>
                    <div>
                        <h2>三个保障</h2>
                        <div>
                            <p>全方位、全覆盖、全天候</p>
                            <p> 全方位：售前、售中、售后一站式 整体服务</p>
                            <p> 全方位：售前、售中、售后一站式 整体服务 全天候服务</p>
                        </div>
                    </div>
                    <div>
                        <h2>四个准则</h2>
                        <div>
                            <p>诚信：至诚无息、博厚悠远</p>
                            <p> 标准：标准仪容、标准用语、标准装备、标准行为、标准流程</p>
                            <p> 高效：数百名工程师以及配套服务车辆随时准备出发、使命必达</p>
                            <p> 经济：对产品零部件最优性价比的偏执追求，<br/><span>只为不断降低客户设备的使用成本</span> </p>
                        </div>
                    </div>
                </div>
                <div class="boxlist-2 animated fadeInRight">
                    <div class="boxlist-2_1">
                        <h2>两个理念</h2>
                        <p>为客户创造最大价值</p>
                    </div>
                    <div class="boxlist-2_2">
                        <h2>五快要求</h2>
                        <div>
                            <p>快速响应、快速到达、快速排故、快速供货、快速答疑</p>
                            <p>快速响应：服务工程师接到服务信息后15分钟内出发</p>
                            <p>快速到达：市区2小时、市区外8小时</p>
                            <p>快速排故：一般24小时内处理完毕，重大故障72小时处理完毕</p>
                            <p>快速供货：尝配件24小时内满足</p>
                            <p>快速答疑：客户需求一刻钟内给予解答</p>
                        </div>
                    </div>
                </div>
            </div>
            <!--底部电话-->
            <div class="phone animated fadeInUp">
                <span><img src="../assets/phone1.png" alt=""></span>
                <p>服务热线：400-888-2961</p>
            </div>
        </div>
        <!--底部-->
        <page-footer></page-footer>
    </div>
</template>

<script>
    import PageHeader from "../components/pageHeader";
    import PageFooter from "../components/pageFooter";
    import animate from 'animate.css'
    import $ from 'jquery'
    export default {
        name: "yx-fw_1",
        components: {PageHeader, PageFooter},
        data() {
            return {
                isActive: {
                    index: false,
                    about: false,
                    dj: false,
                    xw: false,
                    pp: false,
                    zz: false,
                    kj: false,
                    yx: true,
                    lx: false,
                },
            }
        },
        mounted() {
            //导航
            $(window).scroll(function () {
                const scrollTop = $(this).scrollTop();
                if (scrollTop > 0) {
                    $('.wraper,.nav_box').addClass('on');
                } else {
                    $('.wraper,.nav_box').removeClass('on');
                }
            });
            //点击筛选隐藏效果
            $('.yx_search span').click(function () {
                $(this).find('ul').slideDown().parent('span').siblings().find('ul').hide();
                event.stopPropagation();
            });
            //城市选中效果
            $('.yx_search ul li').click(function (event) {
                $(this).parent().prev().text($(this).text());
                $(this).parent().hide();
                event.stopPropagation();
            });
        }
    }
</script>

<style scoped>

</style>