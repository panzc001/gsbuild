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
                        <a href="/news_3">集团新闻</a>
                        <a href="/news_1">视频新闻</a>
                        <a  class="active">行业新闻</a>
                    </div>
                </div>
            </div>
            <div class="content">
                <div class="shzp_search news_search animated fadeInUp">
                    <span>
                        <em>新闻发布年份</em>
                        <ul>
                            <li>2019</li>
                            <li>2018</li>
                            <li>2017</li>
                            <li>2016</li>
                        </ul>
                    </span>
                    <span>
                        <em>发布月份</em>
                        <ul>
                            <li>1月</li>
                            <li>2月</li>
                            <li>3月</li>
                            <li>4月</li>
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
                        time: '2018-11-27',
                        titleHref: '#',
                        title: '人民日报关于垃圾分类最新盘点：创新制度 让垃圾分类成新时尚',
                        desc: '有了“桶长”，垃圾可以追溯到户；有了“垃圾银行”，垃圾可以兑换成牙膏、香皂等生活用品……近期，全国各地不断创新垃圾分类的制度设计和科技手段，使垃圾分类迈上了新台阶，也让垃圾分类逐渐成了社会新时尚……',
                        imgUrl: require("../assets/hynews_1.jpg"),
                    }, {
                        time: '2018-11-20',
                        titleHref: '#',
                        title: '世界厕所日丨“厕所革命”正当时，Nature is calling~',
                        desc: '在改革开放40周年的春风里，在首届进博会的余温中，2018年11月19日，迎来了第六个“世界厕所日”。',
                        imgUrl: require("../assets/hynews_2.jpg"),
                    }, {
                        time: '2018-11-08',
                        titleHref: '#',
                        title: '习近平：垃圾分类就是新时尚，上海要抓实办好这件事！',
                        desc: '6日上午，习近平来到虹口区市民驿站嘉兴路街道第一分站。几位年轻党员在交流社区垃圾分类推广的做法。习近平仔细听他们介绍自己的做法，一位小伙子告诉总书记，参加公益活动对年轻人来说都是新时尚。习近平表示，垃圾分类工作就是新时尚。我关注着这件事，希望上海抓实办好。',
                        imgUrl: require("../assets/hynews_3.jpg"),
                    }, {
                        time: '2018-11-03',
                        titleHref: '#',
                        title: '2018中国环境卫生国际博览会 暨中国环境卫生行业峰会于11月2日在南京盛大开幕',
                        desc: '11月2日，深秋的南京硕果飘香，秋风送爽,在这美好的季节里，全国环境卫生行业人士齐聚金陵,在热烈的氛围中，2018中国环境卫生国际博览会暨中国环境卫生高峰论坛隆重开幕。',
                        imgUrl: require("../assets/hynews_4.jpg"),
                    }, {
                        time: '2018-10-26',
                        titleHref: '#',
                        title: '长春市市委书记王君正在第十个环卫工人节来临之际向全市两万余名“城市美容师”致以节日问候',
                        desc: '原创： 今天发展环卫事业共建幸福家园',
                        imgUrl: require("../assets/hynews_5.jpg"),
                    }, {
                        time: '2018-10-26',
                        titleHref: '#',
                        title: '致全国环卫工人的慰问信',
                        desc: '金秋十月，在中国工会第十七次全国代表大会召开之际，广大环卫工人又一次迎来了10月26日这个值得纪念的日子。',
                    }, {
                        time: '2018-10-25',
                        titleHref: '#',
                        title: '2018年环卫10强省出炉， “粤浙豫”新签年费均破30亿',
                        desc: '截止2018年9月30日，2018年度前九个月的全国新签环卫项目年费总额高达355亿，比2017年全年总额高出37亿。环卫市场化的高速增长，除了广东、浙江、山东等传统环卫大省持续发力外，安徽、河南、河北、江西等新兴环卫大省的迅速崛起，更是蔚为壮观……',
                        imgUrl: require("../assets/hynews_6.jpg"),
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


