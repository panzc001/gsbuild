<template>
    <div class="header">
        <div class="nav_box">
            <div class="top fn-clear">
                <img class="name_tel" src="../assets/logo.png"/>
                <ul class="nav">
                    <li :class="{active: isActive.index}">
                        <a href="/">
                            <span>首页</span>
                        </a>
                        <i></i>
                    </li>
                    <li :class="{active: isActive.about}">
                        <a href="/about_1">
                            <span>关于我们</span>
                        </a>
                        <i></i>
                        <div class="pump_slide">
                            <div class="lis">
                                <div class="bbox about_us">
                                    <a href="/about_3">企业概况</a>
                                    <a href="/about_6">公司荣誉</a>
                                    <a href="/about_4">公司战略</a>
                                    <a href="/about_5">企业文化</a>
                                    <a href="/about_8">社会责任</a>
                                    <a href="/about_2">发展历程</a>
                                    <a href="/about_9">人才招聘</a>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li :class="{active: isActive.dj}">
                        <a href="/about_7">
                            <span>党建工作</span>
                        </a>
                        <i></i>
                    </li>
                    <li :class="{active: isActive.xw}">
                        <a href="#">
                            <span>新闻中心</span>
                        </a>
                        <i></i>
                        <div class="pump_slide">
                            <div class="lis">
                                <div class="bbox xw-cetn">
                                    <a href="/news_5">新闻中心</a>
                                    <a href="/news_2">公司新闻</a>
                                    <a href="/news_3">集团新闻</a>
                                    <a href="/news_1">视频新闻</a>
                                    <a href="/news_4">行业新闻</a>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li :class="{active: isActive.pp}">
                        <a href="#">
                            <span>产品中心</span>
                        </a>
                        <i></i>
                    </li>
                    <li :class="{active: isActive.zz}">
                        <a href="/zz-serve-_1">
                            <span>制造+服务</span>
                        </a>
                        <i></i>
                        <div class="pump_slide">
                            <div class="lis">
                                <div class="bbox zz-serve">
                                    <a href="/zz-serve-_1">环卫装备制造+环卫产业服务</a>
                                    <a href="/zz-serve-_2">混凝土装备制造+混凝土运输服务</a>
                                    <a href="/zz-serve-_3">甘肃高漠环境工程有限公司</a>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li :class="{active: isActive.kj}">
                        <a href="#">
                            <span>科技+研发</span>
                        </a>
                        <i></i>
                        <div class="pump_slide">
                            <div class="lis">
                                <div class="bbox kj-cetn">
                                    <a href="/kj-yf_1">科技+研发</a>
                                    <a href="/kj-yf_2">建筑机械工程实验室</a>
                                    <a href="/kj-yf_3">研究成果专利</a>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li :class="{active: isActive.yx}">
                        <a href="#">
                            <span>营销服务</span>
                        </a>
                        <i></i>
                    </li>
                    <li :class="{active: isActive.lx}">
                        <a href="#">
                            <span>联系我们</span>
                        </a>
                        <i></i>
                    </li>
                </ul>
                <a class="lang">EN</a>
            </div>
        </div>
    </div>
</template>
<script>
    import $ from 'jquery'

    export default {
        props: {
            isActive: {
                type: Object,
                request: true,
                default: '导航高亮'
            }
        },
        mounted() {
            $('.nav li').click(function () {
                $(this).addClass('active').siblings().removeClass('active')
            });
        }
    }
</script>