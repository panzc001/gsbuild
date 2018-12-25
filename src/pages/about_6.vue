<template>
    <div class="wraper">
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
                                <em>06</em>
                                <i>2018-11</i>
                            </span>
                            <p>荣誉标题荣誉标题荣誉标题荣誉标题</p>
                        </li>
                        <li>
                            <span>
                                <em>06</em>
                                <i>2018-11</i>
                            </span>
                            <p>荣誉标题荣誉标题荣誉标题荣誉标题</p>
                        </li>
                        <li>
                            <span>
                                <em>06</em>
                                <i>2018-11</i>
                            </span>
                            <p>荣誉标题荣誉标题荣誉标题荣誉标题</p>
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
                                <em>06</em>
                                <i>2018-11</i>
                            </span>
                            <p>荣誉标题荣誉标题荣誉标题荣誉标题</p>
                        </li>
                        <li>
                            <span>
                                <em>06</em>
                                <i>2018-11</i>
                            </span>
                            <p>荣誉标题荣誉标题荣誉标题荣誉标题</p>
                        </li>
                        <li>
                            <span>
                                <em>06</em>
                                <i>2018-11</i>
                            </span>
                            <p>荣誉标题荣誉标题荣誉标题荣誉标题</p>
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
                                <em>06</em>
                                <i>2018-11</i>
                            </span>
                            <p>荣誉标题荣誉标题荣誉标题荣誉标题</p>
                        </li>
                        <li>
                            <span>
                                <em>06</em>
                                <i>2018-11</i>
                            </span>
                            <p>荣誉标题荣誉标题荣誉标题荣誉标题</p>
                        </li>
                        <li>
                            <span>
                                <em>06</em>
                                <i>2018-11</i>
                            </span>
                            <p>荣誉标题荣誉标题荣誉标题荣誉标题</p>
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