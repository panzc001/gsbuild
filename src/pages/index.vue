<template>
    <div class="wraper">
        <page-header :isActive="isActive"></page-header>
        <!--banner-->
        <div class="top_banner">
            <ul class="swiper-wrapper">
                <li class="swiper-slide" v-for="(item,index) in bannerbg" :key="index">
                    <a :href='item.href' :style="'backgroundImage: url(' + item.img + ')'"></a>
                </li>
            </ul>
            <div class="top-pagination"></div>
        </div>
        <div class="produce_box">
            <div class="pro_top">
                <ul class="top-menu">
                    <li class="on">
                        <h1>产品中心</h1>
                    </li>
                    <li>
                        <h1>制造+服务</h1>
                    </li>
                    <li>
                        <h1>科技+研发</h1>
                    </li>
                </ul>
            </div>
            <!--产品中心-->
            <div class="pro-ctn">
                <div class="list_show">
                    <div class="zb_box">
                        <a href="#" class="animated">
                            <span>
                                <i :style="'backgroundImage: url(' + imghw + ')'"></i>
                            </span>
                            <h1>环卫装备</h1>
                        </a>
                        <a href="#" class="animated">
                            <span>
                                <i :style="'backgroundImage: url(' + imggc + ')'"></i>
                            </span>
                            <h1>工程装备</h1>
                        </a>
                    </div>
                </div>
                <div class="list_show zf_show" style="display: none;">
                    <a href="#" class="list_s animated">
                        <span>
                            <img src="../assets/zafu_3.png"/>
                        </span>
                        <p>环卫装备制造+环卫产业服务</p>
                    </a>
                    <a href="#" class="list_s animated">
                        <span>
                            <img src="../assets/zafu_2.png"/>
                        </span>
                        <p>混凝土装备制造+混凝土运输服务</p>
                    </a>
                </div>
                <div class="list_show ky_show" style="display: none;">
                    <a href="#" class="list_s animated">
                        <span>
                            <img src="../assets/ky_2.png"/>
                        </span>
                        <p>甘肃省建筑机械工程实验室</p>
                    </a>
                    <a href="#" class="list_s animated">
                        <span>
                            <img src="../assets/ky_3.png"/>
                        </span>
                        <p>研究成果及专利</p>
                    </a>
                </div>
            </div>
        </div>
        <!--服务-->
        <div class="server_container">
            <div class="ser_ctn">
                <div class="ser_img">
                    <h2>营销网络</h2>
                    <div class="img animated">
                        <a href="#">
                            <i :style="'backgroundImage: url(' + imgyx + ')'"></i>
                        </a>
                    </div>
                </div>
                <div class="ser_img">
                    <h2>售后服务</h2>
                    <div class="img animated">
                        <a href="#">
                            <i :style="'backgroundImage: url(' + imgsh + ')'"></i>
                        </a>
                    </div>
                </div>
            </div>
        </div>
        <!--新闻-->
        <div class="new-wrap">
            <div class="news-container">
                <div class="new-box">
                    <h2>
                        <span>NEWS</span>
                        <em>新闻</em>
                    </h2>
                    <p><a href="#">more&nbsp;&gt;</a></p>
                </div>
                <ul class="news-list">
                    <li class="animated" v-for="(item,index) in newsData.slice(0,2)" :key="index">
                        <a class="im-g" :href='item.href'>
                            <i :style="'backgroundImage: url(' + item.img + ')'"></i>
                            <h1>{{item.name}}</h1>
                        </a>
                    </li>
                    <li class="animated">
                        <dl class="n-lsit-box">
                            <dd>
                                <div class="time">
                                    <span>08</span>
                                    <p>2018-12</p>
                                </div>
                                <p class="lis_tit">
                                    <a href="#">新闻标题新闻标题新闻标题新闻标题新闻标题新闻标题新闻标题新闻标题新闻标题新闻</a>
                                </p>
                            </dd>
                            <dd>
                                <div class="time">
                                    <span>07</span>
                                    <p>2018-12</p>
                                </div>
                                <p class="lis_tit">
                                    <a href="#">新闻标题新闻标题新闻标题新闻标题新闻标题新闻标题新闻标题新闻标题新闻标题新闻</a>
                                </p>
                            </dd>
                            <dd>
                                <div class="time">
                                    <span>06</span>
                                    <p>2018-12</p>
                                </div>
                                <p class="lis_tit">
                                    <a href="#">新闻标题新闻标题新闻标题新闻标题新闻标题新闻标题新闻标题新闻标题新闻标题新闻</a>
                                </p>
                            </dd>
                            <dd>
                                <div class="time">
                                    <span>06</span>
                                    <p>2018-12</p>
                                </div>
                                <p class="lis_tit">
                                    <a href="#">新闻标题新闻标题新闻标题新闻标题新闻标题新闻标题新闻标题新闻标题新闻标题新闻</a>
                                </p>
                            </dd>
                        </dl>
                    </li>
                </ul>
                <div class="bot-listctn">
                    <p class="top-tt">集成专用汽车、电动特种车辆研发、生产、销售、市政环境卫生设施投资建设、 运用服务和再生资源利用一体化的综合性服务商</p>
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
                    index: true,
                    about: false,
                    dj: false,
                    xw: false,
                    pp: false,
                    zz: false,
                    kj: false,
                    yx: false,
                    lx: false,
                },
                imgBg: require("../assets/bann01.png"),
                imghw: require("../assets/hw_1.png"),
                imggc: require("../assets/gc_1.png"),
                imgyx: require("../assets/cur_3.png"),
                imgsh: require("../assets/cur_3_1.png"),
                bannerbg: [
                    {
                        href: '#',
                        img: require("../assets/bann01.png")
                    },
                    {
                        href: '#',
                        img: require("../assets/bann02.png")
                    },
                    {
                        href: '#',
                        img: require("../assets/bann03.png")
                    }

                ],
                serData: [
                    {
                        name: '营销网络',
                        img: require("../assets/cur_3.png"),
                        href: '#'
                    }, {
                        name: '售后服务',
                        img: require("../assets/cur_3_1.png"),
                        href: '#'
                    }
                ],
                newsData: [
                    {
                        name: '新闻标题1',
                        img: require("../assets/news_img-1.png"),
                        href: '#'
                    },
                    {
                        name: '新闻标题2',
                        img: require("../assets/news_img-2.png"),
                        href: '#'
                    }
                ],
                botIconList: [
                    {
                        href: '#',
                        icon: require("../assets/bot-1.png"),
                        title: '服务'
                    },
                    {
                        href: '#',
                        icon: require("../assets/bot-2.png"),
                        title: '安全'
                    },
                    {
                        href: '#',
                        icon: require("../assets/bot-3.png"),
                        title: '重工'
                    },
                    {
                        href: '#',
                        icon: require("../assets/bot-4.png"),
                        title: '研发'
                    },
                    {
                        href: '#',
                        icon: require("../assets/bot-5.png"),
                        title: '我们'
                    }
                ]
            }
        },
        mounted() {
            new Swiper(".top_banner", {
                pagination: {
                    el: '.top-pagination',
                    clickable: true
                },
                paginationClickable: true,
                loop: true,
                autoplay: true
            });

            $(window).scroll(function () {
                const scrollTop = $(this).scrollTop();
                if (scrollTop >= 30) {
                    $('.wraper,.nav_box').addClass('on');
                } else {
                    $('.wraper,.nav_box').removeClass('on');
                }
            });

            $(window).scroll(function () {
                const scrollTop = $(this).scrollTop();
                const anc_1 = $('.list_show').offset().top;
                const anc_2 = $('.server_container').offset().top;
                const anc_3 = $('.new-box').offset().top;
                if (scrollTop >= anc_1 - 320 && scrollTop < anc_2 - 320) {
                    $('.list_show a').show().addClass('zoomIn');
                } else if (scrollTop >= anc_2 - 320 && scrollTop < anc_3 - 120) {
                    $('.ser_img .img').show().addClass('zoomIn')
                } else if (scrollTop >= anc_3 - 120) {
                    $('.news-list li:first-child').addClass('fadeInLeft');
                    $('.news-list li:nth-child(2)').addClass('fadeInLeft');
                    $('.news-list li:last-child').addClass('fadeInRight');
                }
            });

            $(".top-menu li").click(function(){
                $(this).addClass('on').siblings().removeClass('on')
                $('.list_show').eq($(this).index()).show().siblings().hide();
            });
        }
    }


</script>

