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
                        <a class="/news_3">行业新闻</a>
                    </div>
                </div>
            </div>
            <div class="content">
                <div class="content">
                    <div class="home_box1">
                        <div class="tit">
                            <h5>公司新闻</h5>
                            <a>more &gt;</a>
                        </div>
                        <ul class="home_box1_list ts  animated">
                            <li v-for="li1 in list1">
                                <a href="#">
                                    <div class="img"></div>
                                    <p class="time" v-text="li1.time"></p>
                                    <p class="title" v-text="li1.title"></p>
                                    <p class="info" v-text="li1.info"></p>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="bac">
                <div class="content">
                    <div class="home_box2">
                        <div class="tit">
                            <h5>集团新闻</h5>
                            <a>more &gt;</a>
                        </div>
                        <div class="showimg2 mr20 animated">
                            <a :href="list2href">
                                <img :src="list2img">
                                <div class="imginfo">
                                    <p class="time" v-text="list2time"></p>
                                    <p class="title" v-text="list2title"></p>
                                </div>
                            </a>
                        </div>
                        <ul class="home_box2_list animated">
                            <li v-for="(li2,index) in list2" :key="index" @mouseenter="setshow2(li2)">
                                <div class="date_box">
                                    <h3 v-text="li2.time.length==10?li2.time.substr(8,9):''"></h3>
                                    <span v-text="li2.time.length==10?li2.time.substr(0,7):''"></span>
                                </div>
                                <div class="text_box">
                                    <h5>
                                        <a :href="li2.titleHref">{{li2.title}}</a>
                                    </h5>
                                    <p v-text="li2.desc"></p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="content">
                <div class="home_box3">
                    <div class="tit">
                        <h5>视频新闻</h5>
                        <a>more &gt;</a>
                    </div>
                    <div class="newsvideolist">
                        <ul class="newsvideo animated">
                            <li v-for="li3 in list3" @click="onPlay(li3)">
                                <div><img :src="li3.imgUrl" alt=""></div>
                                <h4>{{li3.title}}</h4>
                            </li>
                        </ul>
                        <div class="showvideo animated">
                            <video-player class="video-player vjs-custom-skin showv"
                                          ref="videoPlayer"
                                          :playsinline="true"
                                          :options="players"></video-player>
                        </div>
                    </div>
                </div>
                <div class="home_box4">
                    <div class="tit">
                        <h5>行业新闻</h5>
                        <a href="">more &gt;</a>
                    </div>
                    <ul class="home_box4_list animated">
                        <li v-for="(li4,index) in list4" :key="index" @mouseenter="setshow4(li4)">
                            <div class="date_box">
                                <h3 v-text="li4.time.length==10?li4.time.substr(8,9):''"></h3>
                                <span v-text="li4.time.length==10?li4.time.substr(0,7):''"></span>
                            </div>
                            <div class="text_box">
                                <h5>
                                    <a :href="li4.titleHref">{{li4.title}}</a>

                                </h5>
                                <p v-text="li4.desc"></p>
                            </div>
                        </li>
                    </ul>
                    <div class="showimg4 ml20 animated">
                        <a :href="list4href">
                            <img :src="list4img">
                            <div class="imginfo">
                                <p class="time" v-text="list4time"></p>
                                <p class="title" v-text="list4title"></p>
                            </div>
                        </a>
                    </div>
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
                list2time: '',
                list2title: '',
                list2img: '',
                list2href: '',
                list4time: '',
                list4title: '',
                list4img: '',
                list4href: '',
                playerOptions: {
                    poster: require("../assets/bann01.png"),
                    sources: [{src: require("../common/lib/jwplayer/data/1.mp4"),}],
                },
                img: require("../assets/bann01.png"),
                list1:
                    [
                        {
                            time: '2018-12-06',
                            title: '甘肃建投重工科技有限公司参加第九届bauma CHINA',
                            info: 'bauma CHINA 2018，第九届中国国际工程机械、建材机械、矿山机械、工程车辆及设备博览会已于2018年11月27-30日在上海新国际博览中心成功举办。',
                        },
                        {
                            time: '2018-11-27',
                            title: '祝贺甘肃建投重工科技有限公司获得“重合同守信用企业”荣誉称号',
                            info: '近日，我公司被长风国际信用评价集团有限公司授予“重合同守信用企业”荣誉称号，成为全省同行业中获此殊荣的佼佼者。',

                        },
                        {
                            time: '2018-11-21',
                            title: '甘肃建投重工科技有限公司参加第二十届中国国际高新技术成果交易会',
                            info: '2018年11月14日甘肃建投重工科技有限公司亮相第二十届中国国际高新技术成果交易会。本次公司参展的项目是最新研发的洗扫车，该车利用激光实时成像原理，达到自动控制扫盘自动收缩动作，此新兴技术引领了信息化和工业化的深度融合，为制造业从“生产型”向“服务型”转变提供技术支撑，推动了产业结构升级，且该项目荣获高新技术成果交易会《优秀产品奖》。',

                        },
                        {
                            time: '2018-11-15',
                            title: '甘肃省发改委一行调研甘肃建投重工科技有限公司',
                            info: '11月14日下午，甘肃省发展与改革委员会副主任汪尚学一行调研甘肃建投重工科技有限公司。兰州新区管委会、甘肃建投工业处、甘肃建投新区公司、甘肃建投重工科技公司相关领导陪同调研。',
                        }
                    ],
                list2:
                    [
                        {
                            time: '2018-12-04',
                            titleHref: '#',
                            title: '肃建投与兰州市棚改项目洽谈会召开',
                            desc: '助力全省棚改攻坚战 积极参与兰州市棚改建设',
                            imgUrl: require("../assets/jtnews_1.jpg"),
                        },
                        {
                            time: '2018-12-01',
                            titleHref: '#',
                            title: '甘肃建投召开清欠工作会议',
                            desc: '11月29日，甘肃建投召开清欠工作会议，分析今年1-10月份集团总公司清欠工作开展情况，通报今年下半年清欠工作督导检查情况，结合当前清欠工作形势，安排部署下一阶段清欠工作。',
                            imgUrl: require("../assets/jtnews_3.jpg"),
                        },
                        {
                            time: '2018-11-30',
                            titleHref: '#',
                            title: '甘肃建投编制的我省13项工程建设地方标准发布实施',
                            desc: '11月27日上午，甘肃省工程建设标准管理办公室、甘肃建投举行工程建设地方标准发布会，由甘肃建投及司属单位共同编制完成的《建筑地基基础工程施工工艺规程》等13项规程，经省建设厅、省质量技术监督局共同审定，批准为甘肃省地方标准，自2018年5月1日起实施。',
                            imgUrl: require("../assets/jtnews_2.jpg"),
                        }],


                list3: [
                    {
                        imgUrl: require("../assets/bann01.png"),
                        video: require("../common/lib/jwplayer/data/1.mp4"),
                        title: '新闻标题新闻标题新闻标题新闻标题新闻…'
                    }, {
                        imgUrl: require("../assets/banner_cover.png"),
                        video: require("../common/lib/jwplayer/data/1.mp4"),
                        title: '新闻标题新闻标题新闻标题新闻标题新闻'
                    }, {
                        imgUrl: require("../assets/bann01.png"),
                        video: require("../common/lib/jwplayer/data/1.mp4"),
                        title: '新闻标题新闻标题新闻标题新闻标题新闻'
                    },
                ],
                list4:
                    [
                        {
                            time: '2018-11-27',
                            titleHref: '#',
                            title: '人民日报关于垃圾分类最新盘点：创新制度 让垃圾分类成新时尚',
                            desc: '有了“桶长”，垃圾可以追溯到户；有了“垃圾银行”，垃圾可以兑换成牙膏、香皂等生活用品……近期，全国各地不断创新垃圾分类的制度设计和科技手段，使垃圾分类迈上了新台阶，也让垃圾分类逐渐成了社会新时尚……',
                            imgUrl: require("../assets/hynews_1.jpg"),
                        },
                        {
                            time: '2018-11-20',
                            titleHref: '#',
                            title: '世界厕所日丨“厕所革命”正当时，Nature is calling~',
                            desc: '在改革开放40周年的春风里，在首届进博会的余温中，2018年11月19日，迎来了第六个“世界厕所日”。',
                            imgUrl: require("../assets/hynews_2.jpg"),
                        },
                        {
                            time: '2018-11-08',
                            titleHref: '#',
                            title: '习近平：垃圾分类就是新时尚，上海要抓实办好这件事！',
                            desc: '6日上午，习近平来到虹口区市民驿站嘉兴路街道第一分站。几位年轻党员在交流社区垃圾分类推广的做法。习近平仔细听他们介绍自己的做法，一位小伙子告诉总书记，参加公益活动对年轻人来说都是新时尚。习近平表示，垃圾分类工作就是新时尚。我关注着这件事，希望上海抓实办好。',
                            imgUrl: require("../assets/hynews_3.jpg"),
                        }]
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
            $('.home_box2_list li:nth-child(1)').addClass('active')
            $('.home_box2_list li').hover(function () {
                $(this).addClass('active').siblings().removeClass('active')
            });
            $('.home_box4_list li:nth-child(1)').addClass('active')
            $('.home_box4_list li').hover(function () {
                $(this).addClass('active').siblings().removeClass('active')
            });

            $('.home_box1_list').show().addClass('zoomIn');
            $(window).scroll(function () {
                const scrollTop = $(this).scrollTop();
                const scrop_1 = $('.home_box1').offset().top;
                const scrop_2 = $('.home_box2').offset().top;
                const scrop_3 = $('.home_box3').offset().top;
                const scrop_4 = $('.home_box4').offset().top;

                if (scrollTop >= scrop_2 - 320 && scrollTop < scrop_3 - 320) {
                    $('.showimg2').addClass('fadeInLeft')
                    $('.home_box2_list').addClass('fadeInRight')
                } else if (scrollTop >= scrop_3 - 320 && scrollTop < scrop_4 - 320) {
                    $('.newsvideo').addClass('fadeInLeft')
                    $('.showvideo').addClass('fadeInRight')
                } else if (scrollTop >= scrop_4 - 320) {
                    $('.home_box4_list').show().addClass('zoomIn')
                    $('.showimg4').show().addClass('zoomIn')
                }
            });


        },
        computed: {
            players() {
                return this.playerOptions
            }
        },
        methods: {
            setshow2(e) {
                this.list2href = e.titleHref
                this.list2time = e.time,
                    this.list2title = e.title,
                    this.list2img = e.imgUrl
            },
            setshow4(e) {
                this.list4href = e.titleHref
                this.list4time = e.time,
                    this.list4title = e.title,
                    this.list4img = e.imgUrl
            },
            onPlay(k) {
                this.playerOptions.poster = k.imgUrl
                this.playerOptions.sources[0].src = k.video
            },
            removeByValue(arr, val) {
                for (var i = 0; i < arr.length; i++) {
                    if (arr[i] == val) {
                        arr.splice(i, 1);
                        break;
                    }
                }
            },
        },
        created() {
            //先要请求道list2所需要的数据赋值给list2
            //先要请求道list4所需要的数据赋值给list4
            this.playerOptions.poster//视频初始化，第一个视频对应的封面png
            this.playerOptions.sources[0].src//视频初始化，第一个视频对应的视屏地址
            //按照顺序
            this.list2time = this.list2[0].time
            this.list2title = this.list2[0].title
            this.list2img = this.list2[0].imgUrl
            this.list2href = this.list2[0].titleHref
            this.list4time = this.list4[0].time
            this.list4title = this.list4[0].title
            this.list4img = this.list4[0].imgUrl
            this.list4href = this.list4[0].titleHref


        },
    }
</script>


