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
        <div class="big_box-container">
            <div class="produce_box">
                <div class="pro_top">
                    <ul class="top-menu">
                        <li class="on">
                            <h1>产品中心</h1>
                            <p>Produtc</p>
                        </li>
                        <li>
                            <h1>制造+服务</h1>
                            <p>Manufacturing+Services</p>
                        </li>
                        <li>
                            <h1>科技+研发</h1>
                            <p>Heavy industry+R&D</p>
                        </li>
                    </ul>
                </div>
            </div>
            <!--产品中心-->
            <div class="pos_wrap-ctn">
                <div class="produce_center animated zoomIn">
                    <ul class="center_list">
                        <li>
                            <a href="#">
                                <i></i>
                                <h4>环卫装备</h4>
                                <p>SANITATION EQUIPMENT</p>
                                <img src="../assets/pro_jt.png"/>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <i></i>
                                <h4>建筑装备</h4>
                                <p>CONSTRUCTION EQUIPMENT</p>
                                <img src="../assets/pro_jt.png"/>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <i></i>
                                <h4>运输装备</h4>
                                <p>TRANSPORT EQUIPMENT</p>
                                <img src="../assets/pro_jt.png"/>
                            </a>
                        </li>
                    </ul>
                </div>
                <div class="produce_center pro_2 animated zoomIn" style="display: none;">
                    <ul class="center_list">
                        <li>
                            <a href="/zz-serve_1">
                                <i></i>
                                <h4>环卫运营</h4>
                                <p>SANITATION OPERATION</p>
                                <img src="../assets/pro_jt.png"/>
                            </a>
                        </li>
                        <li>
                            <a href="/zz-serve_2">
                                <i></i>
                                <h4>商砼服务</h4>
                                <p>COMMERCIAL CONCRETE SERVICE</p>
                                <img src="../assets/pro_jt.png"/>
                            </a>
                        </li>
                    </ul>
                </div>
                <div class="produce_center pro_3 animated zoomIn" style="display: none;">
                    <ul class="center_list">
                        <li>
                            <a href="/kj-yf_2">
                                <i></i>
                                <h4>甘肃省建筑机械工程实验室</h4>
                                <p>Gansu Construction Machinery Engineering Laboratory</p>
                                <img src="../assets/pro_jt.png"/>
                            </a>
                        </li>
                        <li>
                            <a href="/kj-yf_3">
                                <i></i>
                                <h4>研究成果及专利</h4>
                                <p>RESEARCH RESULTS AND PATENTS</p>
                                <img src="../assets/pro_jt.png"/>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="sj_jg-box">
                <img class="sj_1" src="../assets/inde_sl-11.png"/>
                <img class="sj_2" src="../assets/inde_sl-22.png">
            </div>
            <!--服务-->
            <div class="ser-ve_wrap">
                <!-- <h3>致力成为服务型制造业的领跑者</h3>
                <p>我们致力于服务型制造业，成为行业专家，用做行业的领跑者。</p> -->
                <ul class="se_list-ctt">
                    <li>
                        <a href="#">
                            <div class="tt-1">
                                <h2>营销服务</h2>
                                <span>Marketing Service</span>
                                <p>我们围绕服务型制造领域，结合产业和产品的特性，分别在XXX、XXX、XXX等地设有XXX家XX。</p>
                            </div>
                            <img src="../assets/yx_fw.png"/>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <div class="tt-1">
                                <h2>营销网络</h2>
                                <span>Marketing Network</span>
                            </div>
                            <img src="../assets/yx_wl.png"/>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <div class="tt-1">
                                <h2>售后服务</h2>
                                <span>After-Sales service</span>
                            </div>
                            <img src="../assets/sh_fw.png"/>
                        </a>
                    </li>
                </ul>
            </div>
            <!--新闻-->
            <div class="news_box-wrap">
                <h3>
                    <p>
                        <span>新闻中心</span>
                        <em>News Center</em>
                    </p>
                </h3>
                <h6 class="more_top"><a href="#">more&nbsp;&gt;</a></h6>
                <div class="new_content">
                    <ul class="lef_list animated">
                        <li>
                            <div class="time">
                                <span>2018</span>
                                <p>12-20</p>
                            </div>
                            <div class="tt">
                                <h2><a href="#">新闻标题新闻标题新闻标题新闻标题新闻标题新闻…</a></h2>
                                <p>新闻概要新闻概要新闻概要新闻概要新闻概要新闻概要新闻概要新闻概要新闻概要新闻概要新闻概要新闻概要…</p>
                            </div>
                        </li>
                        <li>
                            <div class="time">
                                <span>2018</span>
                                <p>12-20</p>
                            </div>
                            <div class="tt">
                                <h2><a href="#">新闻标题新闻标题新闻标题新闻标题新闻标题新闻…</a></h2>
                                <p>新闻概要新闻概要新闻概要新闻概要新闻概要新闻概要新闻概要新闻概要新闻概要新闻概要新闻概要新闻概要…</p>
                            </div>
                        </li>
                        <li>
                            <div class="time">
                                <span>2018</span>
                                <p>12-20</p>
                            </div>
                            <div class="tt">
                                <h2><a href="#">新闻标题新闻标题新闻标题新闻标题新闻标题新闻…</a></h2>
                                <p>新闻概要新闻概要新闻概要新闻概要新闻概要新闻概要新闻概要新闻概要新闻概要新闻概要新闻概要新闻概要…</p>
                            </div>
                        </li>
                    </ul>
                    <div class="right_slide animated">
                        <ul class="swiper-wrapper">
                            <li class="swiper-slide">
                                <a href="#">
                                    <h3>甘肃省庆祝改革开放40周年图片展开幕</h3>
                                    <i :style="'backgroundImage: url(' + imghw + ')'"></i>
                                </a>
                            </li>
                            <li class="swiper-slide">
                                <a href="#">
                                    <h3>甘肃省庆祝改革开放40周年图片展开幕</h3>
                                    <i :style="'backgroundImage: url(' + imggc + ')'"></i>
                                </a>
                            </li>
                            <li class="swiper-slide">
                                <a href="#">
                                    <h3>甘肃省庆祝改革开放40周年图片展开幕</h3>
                                    <i :style="'backgroundImage: url(' + imgyx + ')'"></i>
                                </a>
                            </li>
                        </ul>
                        <div class="new-pagination"></div>
                    </div>
                </div>
            </div>
            <div class="bott_lst-boss">
                <div class="ls">
                    <a v-for="(item,index) in fot_img" :key="index">
                        <i :style="'backgroundImage: url(' + item.img + ')'"></i>
                        <p>{{item.name}}</p>
                    </a>
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
                imghw: require("../assets/lc_13.png"),
                imggc: require("../assets/lc_10.png"),
                imgyx: require("../assets/lc_12.png"),
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
                    },
                    {
                        href: '#',
                        img: require("../assets/bann04.png")
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
                ],
                fot_img: [
                    {
                        name: '诚信',
                        img: require("../assets/ws_img.png")
                    }, {
                        name: '创新',
                        img: require("../assets/cx_img.png")
                    }, {
                        name: '高效',
                        img: require("../assets/gx_img.png")
                    }, {
                        name: '专业',
                        img: require("../assets/zy_img.png")
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
            
            new Swiper(".right_slide", {
                pagination: {
                    el: '.new-pagination',
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
                const anc_1 = $('.sj_jg-box').offset().top;
                const anc_2 = $('.ser-ve_wrap').offset().top;
                const anc_3 = $('.new_content').offset().top;
                const anc_4 = $('.bott_lst-boss .ls').offset().top;
                const anc_5 = $('.footer').offset().top;
                if (scrollTop >= anc_1 - 320 && scrollTop < anc_2 - 320) {
                    $('.sj_jg-box').css('background-positionY', (scrollTop - anc_2) * 0.12)
                } else if (scrollTop >= anc_2 - 320 && scrollTop < anc_3 - 320) {
                    $('.se_list-ctt li').addClass('revealed');
                } else if (scrollTop >= anc_3 - 320 && scrollTop < anc_4 - 280) {
                    $('.right_slide').addClass('fadeInLeft');
                    $('.lef_list').addClass('fadeInRight');
                } else if (scrollTop >= anc_4 - 280 && scrollTop < anc_5 - 280) {
                    $('.bott_lst-boss .ls a').addClass('fadeInUp')
                    $('.bott_lst-boss').css('background-positionY', ( anc_3-scrollTop) * 0.5)
                }
            });
            
            $(".top-menu li").click(function () {
                $(this).addClass('on').siblings().removeClass('on')
                $('.pos_wrap-ctn .produce_center').eq($(this).index()).show().siblings().hide();
            });
        }
    }


</script>

