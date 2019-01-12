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
                    <a class="active">配件供应</a>
                    <a href="/yx-fw_4">技术信息</a>
                    <a href="/yx-fw_5">售后服务</a>
                    <a href="/yx-fw_6">留言咨询</a>
                </div>
            </div>
        </div>
        <div class="word_all">
            <div class="wordall_1">
                <h3>配件销售</h3>
                <p>配件销售文案配件销售文案配件销售文案配件销售文案配件销售文案配件销售文案配件销售文案配件销售文案配件销售文案配件销售文案配件销售文案配件销售文案配件销售文案配件销售文案配件销售文案配件销售文案配件销售文案配件销售文案配件销售文案配件销售文案配件销售文案配件销售文案配件销售文案配件销售文案配件销售文案配件销售文案</p>
                <p>配件销售文案配件销售文案配件销售文案配件销售文案配件销售文案配件销售文案配件销售文案配件销售文案配件销售文案配件销售文案配件销售文案配件销售文案配件销售文案配件销售文案配件销售文案配件销售文案配件销售文案配件销售文案配件销售文案配件销售文案配件销售文案配件销售文案配件销售文案配件销售文案配件销售文案配件销售文案</p>
            </div>
            <!--轮播图效果-->
            <div class="wordall_3">
                <div class="imgs animated fadeInLeft">
                    <img src="../assets/Group 13.png" alt="">
                </div>
                <div class="butn  animated fadeInRight">
                    <!--//上箭头-->
                    <span class="pre"><img src="../assets/Group 11.png" alt=""></span>
                    <ul class="slider">
                        <li><img src="../assets/por-car-2.png" alt=""></li>
                        <li><img src="../assets/por-car-2.png" alt=""></li>
                        <li><img src="../assets/por-car-2.png" alt=""></li>
                        <li><img src="../assets/por-car-2.png" alt=""></li>
                        <li><img src="../assets/por-car-2.png" alt=""></li>
                        <li><img src="../assets/por-car-2.png" alt=""></li>
                    </ul>
                    <!--//下箭头-->
                    <span class="next"><img src="../assets/Group 12.png" alt=""></span>
                </div>
            </div>
            <div class="wordall_1 wordall_2">
                <h3>保障中心设备大修</h3>
                <h5>副标题副标题副标题</h5>
                <p>配件销售文案配件销售文案配件销售文案配件销售文案配件销售文案配件销售文案配件销售文案配件销售文案配件销售文案配件销售文案配件销售文案配件销售文案配件销售文案配件销售文案配件销售文案配件销售文案配件销售文案配件销售文案配件销售文案配件销售文案配件销售文案配件销售文案配件销售文案配件销售文案配件销售文案配件销售文案</p>
                <h5>副标题副标题副标题</h5>
                <p>配件销售文案配件销售文案配件销售文案配件销售文案配件销售文案配件销售文案配件销售文案配件销售文案配件销售文案配件销售文案配件销售文案配件销售文案配件销售文案配件销售文案配件销售文案配件销售文案配件销售文案配件销售文案配件销售文案配件销售文案配件销售文案配件销售文案配件销售文案配件销售文案配件销售文案配件销售文案</p>
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
           //点击箭头图片上下滚动效果
            $('.pre').bind("click", function(){
               $('.slider li').animate({"top":"-160",})
            });
            $('.next').bind("click", function(){
                $('.slider li').animate({"top":"0",})
            });
            //点击切换图片
            $('.slider li').bind("click", function(){
               var si = $('.slider li img').attr('src')
                $('.imgs img').attr('si');
            });
        }
    }
</script>

<style scoped>

</style>