<template>
    <div class="wraper top_bg-cor">
        <page-header :isActive="isActive"></page-header>
        <div class="cont-ent_box">
            <!--top-menu-->
            <div class="about_nav-box news_nav-box">
                <div class="about_ctn">
                    <h2>新闻中心</h2>
                    <div class="about_list">
                        <a href="/news_2">公司新闻</a>
                        <a  class="active">集团新闻</a>
                        <a href="/news_1">视频新闻</a>
                        <a href="/news_4">行业新闻</a>
                    </div>
                </div>
            </div>
            <div class="content">
                <div class="shzp_search news_search animated fadeInUp">
                    <span>
                        <em>新闻发布年份</em>
                        <ul>
                            <li>2018</li>
                            <li>2018</li>
                            <li>2018</li>
                            <li>2018</li>
                        </ul>
                    </span>
                    <span>
                        <em>发布月份</em>
                        <ul>
                            <li>2018</li>
                            <li>2018</li>
                            <li>2018</li>
                            <li>2018</li>
                        </ul>
                    </span>
                    <span class="input_sea">
                        <input type="text" placeholder="关键词">
                        <a>
                            <img src="../assets/news_search.png">
                        </a>
                    </span>
                </div>
                <ul class="list animated fadeInUp">
                    <li v-for="li in list">
                        <div class="date_box">
                            <h3 v-text="li.time.length==10?li.time.substr(8,9):''"></h3>
                            <span v-text="li.time.length==10?li.time.substr(0,7):''"></span>
                        </div>
                        <div class="text_box">
                            <h5>
                                <a :href="li.titleHref">{{li.title}}</a>
                            </h5>
                            <p v-text="li.desc"></p>
                        </div>
                        <div class="img_box" v-if="li.imgUrl">
                            <img :src=li.imgUrl>
                        </div>
                    </li>

                </ul>
                <div class="page_number">
                    <a class="active">1</a>
                    <a>2</a>
                    <a>3</a>
                    <a>4</a>
                    <a>下一页</a>
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
                        time: '2018-12-04',
                        titleHref: '#',
                        title: '肃建投与兰州市棚改项目洽谈会召开',
                        desc: '助力全省棚改攻坚战 积极参与兰州市棚改建设',
                        imgUrl: require("../assets/jtnews_1.jpg"),
                    }, {
                        time: '2018-12-03',
                        titleHref: '#',
                        title: '甘肃建投多项作品喜获甘肃省第一届 BIM 技术应用大赛奖项',
                        desc: '近日，由甘肃省建筑业联合会、甘肃省勘察设计协会、甘肃省建设监理协会、甘肃省建筑职教集团主办，17 家企业及高校协办的甘肃省第一届BIM（建筑信息模型）技术应用大赛圆满落幕。',

                    }, {
                        time: '2018-12-03',
                        titleHref: '#',
                        title: '省委书记林铎调研指导兰州新区大数据产业园项目',
                        desc: '11月29日，甘肃省委书记林铎实地调研了由三建集团第五工程公司承建的兰州新区科技文化旅游集团有限公司大数据产业园项目，了解项目的实际建设情况，听取对工程现阶段建设情况和城市管理运营中心大数据平台试运营情况的汇报。',
                    }, {
                        time: '2018-11-30',
                        titleHref: '#',
                        title: '甘肃建投召开清欠工作会议',
                        desc: '11月29日，甘肃建投召开清欠工作会议，分析今年1-10月份集团总公司清欠工作开展情况，通报今年下半年清欠工作督导检查情况，结合当前清欠工作形势，安排部署下一阶段清欠工作。',
                        imgUrl: require("../assets/jtnews_3.jpg"),
                    }, {
                        time: '2018-11-30',
                        titleHref: '#',
                        title: '红色南梁革命纪念园入选中国改革开放40年百项经典工程',
                        desc: '日前，在中国建筑业协会、中国建设报社主办的“激荡四十年·改革正当时——改革开放40周年建筑业在行动”纪念大会上，发布了《改革开放40年建筑业经典工程集》，甘肃建投六建集团匠心打造的红色南梁革命纪念园荣耀入选“改革开放40年百项经典工程”，该工程也是甘肃省唯一入选的经典代表工程。',
                        imgUrl: require("../assets/jtnews_4.jpg"),
                    }, {
                        time: '2018-11-30',
                        titleHref: '#',
                        title: '强管理 创品牌 保市场',
                        desc: '——甘肃建投建设有限公司兰州精业集团总部基地项目纪实',
                        imgUrl: require("../assets/jtnews_5.jpg"),
                    }, {
                        time: '2018-11-28',
                        titleHref: '#',
                        title: '甘肃建投编制的我省13项工程建设地方标准发布实施',
                        desc: '11月27日上午，甘肃省工程建设标准管理办公室、甘肃建投举行工程建设地方标准发布会，由甘肃建投及司属单位共同编制完成的《建筑地基基础工程施工工艺规程》等13项规程，经省建设厅、省质量技术监督局共同审定，批准为甘肃省地方标准，自2018年5月1日起实施。',
                        imgUrl: require("../assets/jtnews_2.jpg"),
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


