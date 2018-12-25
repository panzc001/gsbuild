<template>
    <div class="wraper">
        <page-header :isActive="isActive"></page-header>
        <div class="cont-ent_box">
            <!--top-menu-->
            <div class="about_nav-box news_nav-box">
                <div class="about_ctn">
                    <h2>新闻中心</h2>
                    <div class="about_list">
                        <a href="/news_2">公司新闻</a>
                        <a class="active">集团新闻</a>
                        <a href="/news_1">视频新闻</a>
                        <a href="/news_4">行业新闻</a>
                    </div>
                </div>
            </div>
            <div class="content">
                <div class="info_box">
                    <h5 class="info_title">新闻标题新闻标题新闻标题新闻标题新闻标题</h5>
                    <span class="info_other">
                        <span class="time">2017-11-11</span>
                         <span class="eye">599</span>
                    </span>
                    <p class="info_text">
                        新闻详情新闻详情新闻详情新闻详情新闻详情新闻详情新闻详情新闻详情新闻详情新闻详情新闻详情新闻详情新闻详情新闻详情新闻详情新闻详情新闻详情新闻详情新闻详情新闻详情新闻详情新闻详情新闻详情新闻详情新闻详情</p>
                    <img class="info_img" src="../assets/lc_17.png"/>
                    <p class="info_text">
                        新闻详情新闻详情新闻详情新闻详情新闻详情新闻详情新闻详情新闻详情新闻详情新闻详情新闻详情新闻详情新闻详情新闻详情新闻详情新闻详情新闻详情新闻详情新闻详情新闻详情新闻详情新闻详情新闻详情新闻详情新闻详情</p>
                </div>
                <div class="tool_plus">
                    <ul>
                        <li ><a class="wechat"></a></li>
                        <li><a class="weibo"></a></li>
                        <li><a class="qq"></a></li>
                        <li class="golist" ><a>返回列表</a></li>
                    </ul>
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
                    about: false,
                    dj: false,
                    xw: true,
                    pp: false,
                    zz: false,
                    kj: false,
                    yx: false,
                    lx: false,
                },
                list: [
                    {
                        time: '2018-12-22',
                        titleHref: 'www.baidu.com',
                        title: '新闻标题新闻标题新闻标题新闻标题新',
                        desc: '新闻概要新闻概要新闻概要新闻概要新闻概要新闻概要新闻概要新闻概要新闻概要新闻概要新闻概要新闻概要新闻概要新闻概要新闻概要新闻概要新闻概要新闻概要新闻概要新闻概要…',
                        imgUrl: require("../assets/bann01.png"),
                    }, {
                        time: '2018-12-22',
                        titleHref: 'www.baidu.com',
                        title: '新闻标题新闻标题新闻标题新闻标题新',
                        desc: '新闻概要新闻概要新闻概要新闻概要新闻概要新闻概要新闻概要新闻概要新闻概要新闻概要新闻概要新闻概要新闻概要新闻概要新闻概要新闻概要新闻概要新闻概要新闻概要新闻概要…',
                        imgUrl: require("../assets/bann01.png"),
                    }, {
                        time: '2018-12-22',
                        titleHref: 'www.baidu.com',
                        title: '新闻标题新闻标题新闻标题新闻标题新',
                        desc: '新闻概要新闻概要新闻概要新闻概要新闻概要新闻概要新闻概要新闻概要新闻概要新闻概要新闻概要新闻概要新闻概要新闻概要新闻概要新闻概要新闻概要新闻概要新闻概要新闻概要…',
                    }, {
                        time: '2018-12-22',
                        titleHref: 'www.baidu.com',
                        title: '新闻标题新闻标题新闻标题新闻标题新',
                        desc: '新闻概要新闻概要新闻概要新闻概要新闻概要新闻概要新闻概要新闻概要新闻概要新闻概要新闻概要新闻概要新闻概要新闻概要新闻概要新闻概要新闻概要新闻概要新闻概要新闻概要…',
                    }, {
                        time: '2018-12-22',
                        titleHref: 'www.baidu.com',
                        title: '新闻标题新闻标题新闻标题新闻标题新',
                        desc: '新闻概要新闻概要新闻概要新闻概要新闻概要新闻概要新闻概要新闻概要新闻概要新闻概要新闻概要新闻概要新闻概要新闻概要新闻概要新闻概要新闻概要新闻概要新闻概要新闻概要…',
                        imgUrl: require("../assets/bann01.png"),
                    }, {
                        time: '2018-12-22',
                        titleHref: 'www.baidu.com',
                        title: '新闻标题新闻标题新闻标题新闻标题新',
                        desc: '新闻概要新闻概要新闻概要新闻概要新闻概要新闻概要新闻概要新闻概要新闻概要新闻概要新闻概要新闻概要新闻概要新闻概要新闻概要新闻概要新闻概要新闻概要新闻概要新闻概要…',
                    }, {
                        time: '2018-12-22',
                        titleHref: 'www.baidu.com',
                        title: '新闻标题新闻标题新闻标题新闻标题新',
                        desc: '新闻概要新闻概要新闻概要新闻概要新闻概要新闻概要新闻概要新闻概要新闻概要新闻概要新闻概要新闻概要新闻概要新闻概要新闻概要新闻概要新闻概要新闻概要新闻概要新闻概要…',
                        imgUrl: require("../assets/bann01.png"),
                    },
                ]
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
        },
        methods: {
            removeByValue(arr, val) {
                for (var i = 0; i < arr.length; i++) {
                    if (arr[i] == val) {
                        arr.splice(i, 1);
                        break;
                    }
                }
            },
            onPlayerPlay(k) {
                const l = this.videolist.length
                for (var i = 0; i < l; i++) {
                    if (i != k) {
                        this.playerOptions[i] = {}
                        this.playerOptions[i].sources = []
                        this.playerOptions[i].poster = this.videolist[i].imgUrl
                        this.playerOptions[i].sources[0] = {}
                        this.playerOptions[i].sources[0].src = ''
                        this.playerOptions[i].sources[0].src = this.videolist[i].video
                    }
                    else {
                        this.playerOptions[k].sources[0].src = this.videolist[k].video
                    }
                    l + 1
                }
                this.removeByValue(this.playerOptions, "hidden");
                this.playerOptions.push('hidden')
            },
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
            $('.shzp_search span').click(function () {
                $(this).find('ul').slideDown().parent('span').siblings().find('ul').hide();
                event.stopPropagation();
            });

            $('.shzp_search ul li').click(function (event) {
                $(this).parent().prev().text($(this).text());
                $(this).parent().hide();
                event.stopPropagation();
            });

            $('.wraper').click(function(e){
                $('.shzp_search ul').hide();
                event.stopPropagation();
            });

            $('.page_number a').click(function () {
                $(this).addClass('active').siblings().removeClass('active');
            })

            $('.input_sea').click(function(){
                $('.shzp_search ul').hide();
            });
        }
    }
</script>


