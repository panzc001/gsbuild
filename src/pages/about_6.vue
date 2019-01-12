<template>
    <div class="wraper top_bg-cor">
        <page-header :isActive="isActive"></page-header>
        <!--top-menu-->
        <div class="about_nav-box">
            <div class="about_ctn">
                <h2>关于我们</h2>
                <div class="about_list">
                     <a href="/about_3">企业概况</a>
                    <a href="/about_4">公司战略</a>
                    <a href="/about_5">企业文化</a>
                    <a href="/about_2">发展历程</a>
                    <a class="active">公司荣誉</a>
                    <a href="/about_8">社会责任</a>
                    <a href="/about_9">人才招聘</a>
                </div>
            </div>
        </div>
        <div class="honur_box">
            <div class="rig_box animated fadeInRight">
                <div class="list">
                    <div class="yea">
                        <span>2018</span>
                        <i></i>
                    </div>
                    <ul class="dea">
                        <li>
                            <span>
                                <em>20</em>
                                <i>2018-11</i>
                            </span>
                            <p>中清协会员</p>
                            <a href="javascript:;"><img src="../assets/ry20181120.jpg"/></a>
                        </li>
                        <li>
                            <span>
                                <em>6</em>
                                <i>2018-11</i>
                            </span>
                            <p>诚信经营师范单位证书</p>
                            <a href="javascript:;"><img src="../assets/ry20181106.jpg"/></a>
                        </li>
                        <li>
                            <span>
                                <em>6</em>
                                <i>2018-11</i>
                            </span>
                            <p>AAA级信用等级证书</p>
                            <a href="javascript:;"><img src="../assets/ry201811062.jpg"/></a>
                        </li>
                        <li>
                            <span>
                                <em>6</em>
                                <i>2018-11</i>
                            </span>
                            <p>质量服务信誉证书</p>
                            <a href="javascript:;"><img src="../assets/ry201811063.jpg"/></a>
                        </li>
                        <li>
                            <span>
                                <em>6</em>
                                <i>2018-11</i>
                            </span>
                            <p>重合同守信用证书</p>
                            <a href="javascript:;"><img src="../assets/ry201811064.jpg"/></a>
                        </li><li>
                            <span>
                                <em>6</em>
                                <i>2018-11</i>
                            </span>
                        <p>AAA级资信等级证书</p>
                        <a href="javascript:;"><img src="../assets/201811065.jpg"/></a>
                    </li>
                        <li>
                            <span>
                                <em>30</em>
                                <i>2018-10</i>
                            </span>
                            <p>五星品牌认证</p>
                            <a href="javascript:;"><img src="../assets/ry20181030.jpg"/></a>
                        </li>
                        <li>
                            <span>
                                <em>23</em>
                                <i>2018-7</i>
                            </span>
                            <p>高新技术企业证书</p>
                            <a href="javascript:;"><img src="../assets/ry20180723.jpg"/></a>
                        </li>


                    </ul>
                </div>
                <div class="list">
                    <div class="yea">
                        <span>2017</span>
                        <i></i>
                    </div>
                    <ul class="dea">
                        <li>
                            <span>
                                <em>7</em>
                                <i>2017-12</i>
                            </span>
                            <p>五星售后服务认证</p>
                            <a href="javascript:;"><img src="../assets/ry20171207.png"/></a>
                        </li>
                        <li>
                            <span>
                                <em>17</em>
                                <i>2017-9</i>
                            </span>
                            <p>全国售后服务先进单位称号</p>
                            <a href="javascript:;"><img src="../assets/ry20170917.png"/></a>
                        </li>
                    </ul>
                </div>
                <div class="list">
                    <div class="yea">
                        <span>2016</span>
                        <i></i>
                    </div>
                    <ul class="dea">
                        <li>
                            <span>
                                <em>12</em>
                                <i>2016-6</i>
                            </span>
                            <p>世界制造厂识别代号</p>
                            <a href="javascript:;"><img src="../assets/ry20160612.png"/></a>
                        </li>
                        <li>
                            <span>
                                <em>19</em>
                                <i>2016-1</i>
                            </span>
                            <p>企业名称代号证书</p>
                            <a href="javascript:;"><img src="../assets/ry20160119.png"/></a>
                        </li>
                    </ul>
                </div>
            </div>
            <img src="../assets/honur.png" class="lef_img animated fadeInLeft"/>
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