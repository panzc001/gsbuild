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
                                <h4>科技+研发</h4>
                                <p>Heavy industry+R&D</p>
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
                                <p></p>
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
            <!--缩放背景图-->
            <div class="sj_jg-box">
                <img class="sj_1" src="../assets/inde_sl-11.png"/>
                <img class="sj_2" src="../assets/inde_sl-22.png">
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
                                <p>11-14</p>
                            </div>
                            <div class="tt">
                                <h2><a href="#">甘肃省发改委一行调研甘肃建投重工科技有限公司</a></h2>
                                <p>11月14日下午，甘肃省发展与改革委员会副主任汪尚学一行调研甘肃建投重工科技有限公司。</p>
                            </div>
                        </li>
                        <li>
                            <div class="time">
                                <span>2018</span>
                                <p>11-21</p>
                            </div>
                            <div class="tt">
                                <h2><a href="#">甘肃建投重工科技有限公司参加第二十届中国国际高新技术成果交易会</a></h2>
                                <p>2018年11月14日甘肃建投重工科技有限公司亮相第二十届中国国际高新技术成果交易会。</p>
                            </div>
                        </li>
                        <li>
                            <div class="time">
                                <span>2018</span>
                                <p>9-19</p>
                            </div>
                            <div class="tt">
                                <h2><a href="#">甘肃建投重工科技有限公司营销分公司成立</a></h2>
                                <p>2018年9月19日甘肃建投重工科技有限公司营销分公司在兰州中心写字楼33楼挂牌成立，开启公司专用车事业发展新篇章。分公司主要从事专用车销售、租赁、环卫一体等业务。</p>
                            </div>
                        </li>
                    </ul>
                    <div class="right_slide animated">
                        <ul class="swiper-wrapper">
                            <li class="swiper-slide">
                                <a href="#">
                                    <h3>甘肃省发改委一行调研甘肃建投重工科技有限公司</h3>
                                    <i :style="'backgroundImage: url(' + imghw + ')'"></i>
                                </a>
                            </li>
                            <li class="swiper-slide">
                                <a href="#">
                                    <h3>甘肃建投重工科技有限公司参加第二十届中国国际高新技术成果交易会</h3>
                                    <i :style="'backgroundImage: url(' + imggc + ')'"></i>
                                </a>
                            </li>
                            <li class="swiper-slide">
                                <a href="#">
                                    <h3>甘肃建投重工科技有限公司营销分公司成立</h3>
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
                imghw: require("../assets/newstop1.jpg"),
                imggc: require("../assets/newstop2.png"),
                imgyx: require("../assets/newstop3.png"),
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
                if (scrollTop >= anc_2 - 320 && scrollTop < anc_3 - 320) {
                    $('.sj_jg-box').css('background-positionY', (scrollTop - anc_3) * 0.12)
                } else if (scrollTop >= anc_2 - 750 && scrollTop < anc_3 - 320) {
                    $('.se_list-ctt li').addClass('revealed');
                } else if (scrollTop >= anc_3 - 900 && scrollTop < anc_4-200) {
                    $('.right_slide').addClass('fadeInLeft');
                    $('.lef_list').addClass('fadeInRight');
                } else if (scrollTop >= anc_4 -700 && scrollTop < anc_5 - 300) {
                    $('.bott_lst-boss .ls a').addClass('fadeInUp')
                    $('.bott_lst-boss').css('background-positionY', ( anc_4-scrollTop) * 0.5)
                }
            });
            
            $(".top-menu li").click(function () {
                $(this).addClass('on').siblings().removeClass('on')
                $('.pos_wrap-ctn .produce_center').eq($(this).index()).show().siblings().hide();
            });
        }
    }


</script>

