<template>
    <div class="wraper top_bg-cor">
        <!--导航头-->
        <page-header  :isActive="isActive"></page-header>
        <!--营销服务-->
        <div class="about_nav-box zz-_nav-bg product_nav">
            <div class="about_ctn">
                <h2>营销服务</h2>
                <div class="about_list">
                    <a class="active">营销网络</a>
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
        <div class="all thing">
            <!--城市查询-->
            <div class="all_1  animated fadeInUp">
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
            <!--各大办事处-->
            <ul CLASS="animated fadeInUp">
                <li>
                    <p><span>【销售及服务】</span>甘肃办事处</p>
                    <p>
                        <span>  授权区域：兰州</span>
                        <span>电话：0931-12341234 </span>
                        <span>兰州七里河兰州中心</span>
                    </p>
                </li>
                <li>
                    <p><span>【销售及服务】</span>甘肃办事处</p>
                    <p>
                        <span>  授权区域：兰州</span>
                        <span>电话：0931-12341234 </span>
                        <span>兰州七里河兰州中心</span>
                    </p>
                </li>
                <li>
                    <p><span>【销售及服务】</span>甘肃办事处</p>
                    <p>
                        <span>  授权区域：兰州</span>
                        <span>电话：0931-12341234 </span>
                        <span>兰州七里河兰州中心</span>
                    </p>
                </li>
                <li>
                    <p><span>【销售及服务】</span>甘肃办事处</p>
                    <p>
                        <span>  授权区域：兰州</span>
                        <span>电话：0931-12341234 </span>
                        <span>兰州七里河兰州中心</span>
                    </p>
                </li>
            </ul>
            <!--底部导航-->
            <div class="page_number" style="margin-top: 0;margin-bottom:40px;">
                <a class="active">1</a>
                <a>2</a>
                <a>3</a>
                <a>4</a>
                <a>下一页</a>
            </div>
        </div>

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
            //点击选中效果
            $('.thing ul li').click(function () {
                $(this).addClass('active').siblings().removeClass('active');
            });
        }
    }
</script>

<style scoped>

</style>