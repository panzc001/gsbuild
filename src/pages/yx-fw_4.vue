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
                    <a class="active">技术信息</a>
                    <a href="/yx-fw_5">售后服务</a>
                    <a href="/yx-fw_6">留言咨询</a>
                </div>
            </div>
        </div>
        <!--中间板块-->
        <div class="word_all">
            <ul class="lilist animated fadeInUp">
                <li>
                    <span><img src="../assets/yx-fw_401.png" alt=""></span>
                    <div class="aalist">
                        <h3>自装卸式垃圾车维修手册</h3>
                        <p>修手册垃圾维修手册垃圾维修手册垃圾维修手册垃圾维修手册垃圾维修手册垃圾维修手册垃圾维修手册垃圾维修手册垃圾维修手册垃圾维修手册垃圾维修手册垃圾维修手册垃圾维修手册…</p>
                        <a href="javascript:;" ><p class="pone"></p>在线下载</a>
                        <a href="javascript:;" ><p class="ptwo"></p>在线预览</a>
                    </div>
                </li>
                <li>
                    <span><img src="../assets/yx-fw_401.png" alt=""></span>
                    <div class="aalist">
                        <h3>自装卸式垃圾车维修手册</h3>
                        <p>修手册垃圾维修手册垃圾维修手册垃圾维修手册垃圾维修手册垃圾维修手册垃圾维修手册垃圾维修手册垃圾维修手册垃圾维修手册垃圾维修手册垃圾维修手册垃圾维修手册垃圾维修手册…</p>
                        <a href="javascript:;" ><p class="pone"></p>在线下载</a>
                        <a href="javascript:;" ><p class="ptwo"></p>在线预览</a>
                    </div>
                </li>
                <li>
                    <span><img src="../assets/yx-fw_401.png" alt=""></span>
                    <div class="aalist">
                        <h3>自装卸式垃圾车维修手册</h3>
                        <p>修手册垃圾维修手册垃圾维修手册垃圾维修手册垃圾维修手册垃圾维修手册垃圾维修手册垃圾维修手册垃圾维修手册垃圾维修手册垃圾维修手册垃圾维修手册垃圾维修手册垃圾维修手册…</p>
                        <a href="javascript:;" ><p class="pone"></p>在线下载</a>
                        <a href="javascript:;" ><p class="ptwo"></p>在线预览</a>
                    </div>
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
            $('.aalist a').click(function () {
                $(this).addClass('active').siblings().removeClass('active');
            });


        }
    }
</script>

<style scoped>

</style>