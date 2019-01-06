<template>
    <div class="wraper top_bg-cor">
        <page-header :isActive="isActive"></page-header>
        <!--产品中心-->
        <div class="about_nav-box zz-_nav-bg product_nav">
            <div class="about_ctn">
                <h2>产品中心</h2>
                <div class="about_list">
                    <a class="active">环卫装备</a>
                    <a href="/#">建筑装备</a>
                    <a href="/#">运输装备</a>
                </div>
            </div>
        </div>
        <!--一级导航-->
        <div class="zz-change-box">
            <ul class="change-list">
                <li class="active">清扫保洁类</li>
                <li>市政园林养护类</li>
                <li>垃圾收转类</li>
                <li>环卫电动类</li>
                <p class="spec">
                    <input id="txt" type="text" placeholder="请输入关键词">
                    <a>
                        <img  src="../assets/news_search.png">
                    </a>
                </p>
            </ul>
        </div>
        <!--二级导航-->
        <div class="zz-change-box second">
            <ul class="change-list second-change">
                <li class="active"><span></span>清扫车系列</li>
                <li><span></span>扫路车系列</li>
                <li><span></span>洒水车系列</li>
                <li><span></span>清洗车系列</li>
            </ul>
        </div>
        <!--中间部分-->
        <div class="centerall">
            <!--标题-->
            <div class="secriy">
                <h3>护栏清洗车系列<span>高漠牌GSK5070GQXQ5型护栏清洗车</span></h3>
            </div>
            <!--轮播图-->
            <div class="slider-1">
                <div class="swiper-container">
                    <div class="swiper-wrapper">
                        <div class="swiper-slide"><img src="../assets/cpxq2.png" alt=""></div>
                        <div class="swiper-slide"><img src="../assets/cpxq2.png" alt=""></div>
                        <div class="swiper-slide"><img src="../assets/cpxq2.png" alt=""></div>
                    </div>
                    <!-- Add Pagination -->
                    <div class="swiper-pagination"></div>
                    <!-- Add Arrows -->
                    <div class="swiper-button-next"></div>
                    <div class="swiper-button-prev"></div>
                </div>
            </div>
            <!--产品简介-->
            <div class="produce">
                <div class="produce-1">
                    <div>
                        <h3>产品简介</h3>
                    </div>
                </div>
                <p>护栏清洗车主要用于护栏清洗和城市道路隔离护栏清洗。也可用于清洗工业排液管道、壁面等、市道路隔离护栏、道路两侧墙体的刷洗。护栏清洗车可加装洒水和高压清洗装置。还可根据用户需要加装高压水泵、水枪，适用于冲刷城市小广告和刷洗城市雕塑等。</p>
            </div>
            <!--产品特点-->
            <div class="produce">
                <div class="produce-1">
                    <div>
                        <h3>产品特点</h3>
                    </div>
                </div>
                <p><img src="../assets/jiantou.png">双发动机结构副发动机单独驱动工作装置工作更可靠，清洗速度在4-10km/h任意控制，作业效率高，适应性好。</p>
                <p><img src="../assets/jiantou.png">导向机构，方便操作，避免司机频繁回头观察滚刷工作状态，大幅度降低劳动强度，安全可靠。</p>
                <p><img src="../assets/jiantou.png">自动避让、防撞的护栏清洗结构，清洗护栏的同时，能冲洗护栏下面的双黄线，可以高压冲洗路面。</p>
                <p><img src="../assets/jiantou.png">水箱容积大，采用先进的防腐层处理，不锈蚀，水箱底部设有低水位传感保护系统，防止水泵缺水损坏。</p>
                <p><img src="../assets/jiantou.png">高压水泵、喷嘴、以及主要液压电器元件均为国际名牌产品，性能可靠。</p>
            </div>
            <!--产品特点-->
            <div class="produce">
                <div class="produce-1">
                    <div>
                        <h3>产品特点</h3>
                    </div>
                </div>
                <p><span>底盘品牌 / 庆铃（国V）</span><span>底盘发动机功率  96kw</span></p>
                <p><span>整车外形尺寸（长×宽×高）5660mm × 2100mm × 2430mm</span><span>整车质量  4650kg</span></p>
                <p><span>最大总质量  7300kg</span><span>最高车速  110km/h</span></p>
                <p><span>清洗速度     4-10km/h</span><span>防抱死系统 / 有</span></p>
                <p><span>燃料 / 柴油</span><span>清洗高度 1300m</span></p>
            </div>
        </div>
        <page-footer></page-footer>
    </div>
</template>

<script>
    import PageHeader from "../components/pageHeader";
    import PageFooter from "../components/pageFooter";
    import Swiper from 'swiper'
    import $ from 'jquery'
    export default {
        name: "productdetail",
        components: {PageHeader,PageFooter},
        data() {
            return {
                isActive: {
                    index: false,
                    about: false,
                    dj: false,
                    xw: false,
                    pp: true,
                    zz: false,
                    kj: false,
                    yx: false,
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
            //一级菜单点击变色效果
            $('.change-list li').click(function(){
                $(this).addClass('active').siblings().removeClass('active');
            });
            //二级菜单点击变色效果
            $('.second-change li').click(function(){
                $(this).addClass('active').siblings().removeClass('active');
                $('.carlist .carlist_1').eq($(this).index()).show().siblings().hide();
            });

            var swiper = new Swiper('.swiper-container', {
                slidesPerView: 1,
                spaceBetween: 30,
                loop: true,
                pagination: {
                    el: '.swiper-pagination',
                    clickable: true,
                },
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                },
            });
        }
    }
</script>

<style scoped>
    @import '../common/css/swiper.min.css';
    .swiper-container {
        width: 1060px;
        height: 100%;
        margin-left: auto;
        margin-right: auto;
    }
    .swiper-slide {
        text-align: center;
        font-size: 18px;
        background:#f3f3f3;
        display: -webkit-box;
        display: -ms-flexbox;
        display: -webkit-flex;
        display: flex;
        -webkit-box-pack: center;
        -ms-flex-pack: center;
        -webkit-justify-content: center;
        justify-content: center;
        -webkit-box-align: center;
        -ms-flex-align: center;
        -webkit-align-items: center;
        align-items: center;
    }

    .swiper-button-next{
        width:31px!important;
        height:59px!important;
        background:url("../assets/jjy1.png") !important;
    }
    .swiper-button-prev{
        width:31px!important;
        height:59px!important;
        background:url("../assets/jj1.png") !important;
    }
</style>