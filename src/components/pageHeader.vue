<template>
    <div class="header">
        <div class="nav_box">
            <div class="top fn-clear">
                <span class="name_tel"></span>
                <ul class="nav">
                    <li class="aaa" :class="{active: isActive.index}">
                        <a href="/">
                            <span class="word">首页</span>
                        </a>
                    </li>
                    <li  :class="{active: isActive.about}">
                        <a href="/about_1">
                            <span>关于我们</span>
                        </a>
                        <div class="pump_slide about_us pump_slide-1 about_us-1">
                            <div class="lis">
                                <div class="bbox">
                                    <a href="/about_1">企业概况</a>
                                    <a href="/about_1#zhlv" class="click1">公司战略</a>
                                    <a href="/about_1#qywh">企业文化</a>
                                    <a href="/about_2">发展历程</a>
                                    <a href="/about_6">公司荣誉</a>
                                    <a href="/about_8">社会责任</a>
                                    <a href="/about_9">人才招聘</a>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li  :class="{active: isActive.dj}">
                        <a href="/about_7">
                            <span>党建工作</span>
                        </a>
                    </li>
                    <li  :class="{active: isActive.xw}">
                        <a href="/news_5">
                            <span>新闻中心</span>
                        </a>
                        <div class="pump_slide xw-cet pump_slide-1 xw-cet-1">
                            <div class="lis">
                                <div class="bbox">
                                    <a href="/news_2">公司新闻</a>
                                    <a href="/news_3">集团新闻</a>
                                    <a href="/news_1">视频新闻</a>
                                    <a href="/news_4">行业新闻</a>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li  :class="{active: isActive.pp}">
                        <a href="/product">
                            <span>产品中心</span>
                        </a>
                        <div class="pump_slide zz-serve pump_slide-1 zz-serve-1 product-1">
                            <div class="lis">
                                <div style="display:flex;flex-direction:column;" class="bbox">
                                    <a href="/product">环卫装备</a>
                                    <a href="/#">建筑装备</a>
                                    <a href="/#">运输装备</a>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li  :class="{active: isActive.zz}">
                        <a  href="/zz-serve_3">
                            <span>制造+服务</span>
                        </a>
                        <div class="pump_slide zz-serve pump_slide-1 zz-serve-1">
                            <div class="lis">
                                <div style="display:flex;flex-direction:column;" class="bbox">
                                    <a href="/zz-serve_1">环卫运营</a>
                                    <a href="/zz-serve_2">商砼服务</a>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li  :class="{active: isActive.kj}">
                        <a href="/kj-yf_2">
                            <span>科技+研发</span>
                        </a>
                        <div class="pump_slide kj-cetn pump_slide-1 kj-cetn-1">
                            <div class="lis">
                                <div class="bbox">
                                    <a href="/kj-yf_1">科技+研发</a>
                                    <a href="/kj-yf_3">研究成果专利</a>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li  :class="{active: isActive.yx}">
                        <a href="/yx-fw_1">
                            <span>营销服务</span>
                        </a>
                        <div class="pump_slide xw-cet pump_slide-1 xw-cet-1 yx-fw_1">
                            <div class="lis">
                                <div class="bbox">
                                    <a href="/yx-fw_2">营销网络</a>
                                    <a href="/yx-fw_3">配件供应</a>
                                    <a href="/yx-fw_4">技术信息</a>
                                    <a href="/yx-fw_5">售后服务</a>
                                    <a href="/yx-fw_6">留言咨询</a>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li  :class="{active: isActive.lx}">
                        <a href="/contact_1">
                            <span>联系我们</span>
                        </a>
                    </li>
                </ul>
                <a class="lang" @click="changelanguage">EN</a>
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
            $(".click1").click(function() {
                setTimeout(function(){
                    $("#zhlv").offset().top = 0
                },3000)
            })
        }
    }
</script>