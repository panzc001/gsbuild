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
                    <a class="active" href="/about_9">人才招聘</a>
                </div>
            </div>
        </div>
        <div class="school_zp">
            <div class="sc_rig animated fadeInRight">
                <div class="sty_le">
                    <h1>招聘联系方式</h1>
                    <span>
                        <img src="../assets/sco_1.png"/>
                    </span>
                    <p>联系电话：0931-12341234</p>
                    <p>公司地址：甘肃省兰州市新区</p>
                </div>
                <div class="sty_le">
                    <h1>往年招聘简章</h1>
                    <p class="ye"><a href="#">2017年招聘简章</a></p>
                    <p class="ye"><a href="#">2018年招聘简章</a></p>
                </div>
            </div>
            <div class="sc_left animated fadeInLeft">
                <h1>2019年校园招聘</h1>
                <div class="zw_show">
                    <h2>一、招聘岗位</h2>
                    <p>【研发类】：职位介绍职位介绍职位介绍职位职位介绍职位介绍职位介绍职位</p>
                    <p>【研发类】：职位介绍职位介绍职位介绍职位职位介绍职位介绍职位介绍职位</p>
                    <p>【研发类】：职位介绍职位介绍职位介绍职位职位介绍职位介绍职位介绍职位</p>
                    <p>【研发类】：职位介绍职位介绍职位介绍职位职位介绍职位介绍职位介绍职位</p>
                </div>
                <div class="zw_show">
                    <h2>二、招聘专业</h2>
                    <p>招聘专业、招聘专业招聘专业招聘专业招聘专</p>
                </div>
                <div class="zw_show">
                    <h2>三、学历要求</h2>
                    <p>本科/硕士以上</p>
                </div>
                <div class="zw_show">
                    <h2>四、联系方式</h2>
                    <p>【研发类】：职位介绍职位介绍职位介绍职位职位介绍职位介绍职位介绍职位职位介绍职位介绍职位介绍职位</p>
                    <p>【研发类】：职位介绍职位介绍职位介绍职位</p>
                    <p>【研发类】：职位介绍职位介绍职位介绍职位</p>
                    <p>【研发类】：职位介绍职位介绍职位介绍职位</p>
                </div>
                <div class="zw_show">
                    <h2>五、注意事项</h2>
                    <p>应聘时请提供：就业协议书原件、成绩单原件</p>
                </div>
                <div class="bot-ewm">
                    <span>
                        <img src="../assets/wem.png"/>
                        <em>微信公众号</em>
                    </span>
                    <span>
                        <img src="../assets/wem.png"/>
                         <em>招聘公众号</em>
                    </span>
                    <div class="txt">
                        <h3>欢迎关注甘肃建投公众号</h3>
                        <p>线应聘该职位：您可把简历发送人力资源本部邮箱，或者登陆智联招聘查询详细信息，经过筛选后，我们会邀请您到公司参加面试。</p>
                    </div>
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
            $('html,body').animate({scrollTop: 0},0);
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