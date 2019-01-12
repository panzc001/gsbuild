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
                    <a class="active">留言咨询</a>
                </div>
            </div>
        </div>
        <!--中间板块-->
        <div class="word_all">
            <form action="" class="formword animated fadeInUp">
                <div class="formword-1">
                    <div>
                        <p><span><em>*</em>你的姓名</span><input type="text"></p>
                        <p><span>联系地址</span><input type="text"></p>
                        <p><span>公司名称</span><input type="text"></p>
                        <p><span><em>*</em>联系方式</span><input type="text"></p>
                        <p><span><em>*</em>联系邮箱</span><input type="text"  required="required"  name="email"></p>
                    </div>
                    <div>
                        <p class="span1"><span>留言内容</span><textarea name="" id=""></textarea></p>
                        <p><span><em>*</em>验证码</span><input type="text" id="yzm-1"><span id="yzm"></span><a>点击图片刷新</a></p>
                    </div>
                </div>
                <input type="submit" id="txt1" class="txt1">
                <input type="reset" id="res" class="txt1">
            </form>
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