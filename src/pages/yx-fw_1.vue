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
                    <a href="/yx-fw_5">售后服务</a>
                    <a href="/yx-fw_6">留言咨询</a>
                </div>
            </div>
        </div>

        <!--地图-->
        <div class="mapbox"></div>
        <!--搜索+切换-->
        <div class="all">
            <!--城市查询-->
            <div class="all_1">
                <div class="shzp_search news_search animated fadeInUp yx_search">
                    <span>
                            <em>省区</em>
                            <ul>
                                 <li>甘肃省</li>
                                <li>山西省</li>
                                <li>陕西省</li>
                                <li>浙江省</li>
                            </ul>
                        </span>
                    <span>
                            <em>城市</em>
                        <ul>
                        <li>兰州市</li>
                        <li>定西市</li>
                        <li>白银市</li>
                        <li>陇西县</li>
                        </ul>
                        </span>
                    <span class="input_sea">
                            <input type="text" placeholder="请输入关键词">
                        </span>
                    <a href="javascript:;">搜索</a>
                </div>
            </div>
            <!--信息技术-->
            <div class="mdvp">
                <div class="showimg2 mr20 animated dvp1">
                    <a href="javascript:;">
                        <img src="../assets/yx-fw_1.1.png">
                    </a>
                </div>
                <div class="dvp2">
                     <h2>信息技术</h2>
                    <ul>
                        <li>
                            <h3>自装卸式垃圾维修手册</h3>
                            <p>句子句子句子句子句子句子句子句子句子句子句子句子句子句子句子句子句子句子句子句子句子句子句子句子句子句子句子句子</p>
                        </li>
                        <li>
                            <h3>自装卸式垃圾维修手册</h3>
                            <p>句子句子句子句子句子句子句子句子句子句子句子句子句子句子</p>
                        </li>
                        <li>
                            <h3>自装卸式垃圾维修手册</h3>
                            <p>句子句子句子句子句子句子句子句子句子句子句子句子句子句子</p>
                        </li>
                    </ul>
                </div>

            </div>
            <!--售后服务-->
            <div class="customer">
                <!--遮罩层-->
                <div class="mask"></div>
                <div class="customer_1">
                    <h2>售后服务</h2>
                    <div class="customer_2">
                        <div>
                            <h4>三个保障</h4>
                            <p>全方位：售前、售中、售后一站式整体<span style="margin-left:65px;">
                                服务</span>
                                全覆盖：服务覆盖设备生命周期、服务<span  style="margin-left:65px;">
                                覆盖全国任何地方</span>
                                全天候：7 x 24小时服务
                            </p>
                        </div>
                        <div>
                            <h4>四个准则</h4>
                            <p>高效：数百名服务工程师以及配套服务<span>车辆随时准备出发，使命必达</span>经济：对产品零部件最优性价比的偏执<span>追求，只为不断降低客户设备的
                                使用成本</span>
                            </p>
                        </div>
                        <div>
                            <h4>五个要快</h4>
                            <p>服务工程师接到服务信息后15分钟内出
                                发，市区2小时内到达，市区外8小时内
                                到达；一般故障24小时内处理完毕，重
                                大故障72小时处理完毕；客户需求一刻
                                钟内给予解答</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!--在线咨询-->
        <div class="ask">
            <p>欢迎进行产品服务在线咨询</p>
            <div>
                <a><span>TEL</span> 400 888 2961</a>
                <a>为你提供产品服务专业的问题解答</a>
            </div>
        </div>

        <page-footer></page-footer>
    </div>
</template>

<script>
    import PageHeader from "../components/pageHeader";
    import PageFooter from "../components/pageFooter";
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
            $(window).scroll(function () {
                const scrollTop = $(this).scrollTop();
                if (scrollTop > 0) {
                    $('.wraper,.nav_box').addClass('on');
                } else {
                    $('.wraper,.nav_box').removeClass('on');
                }
            });
            $('.yx_search span').click(function () {
                $(this).find('ul').slideDown().parent('span').siblings().find('ul').hide();
                event.stopPropagation();
            });
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