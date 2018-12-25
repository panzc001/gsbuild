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
                            time: '2017-06-08',
                            title: '标题标题标题标题标题标题标题标题标题标题',
                            info: '内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容',
                        },
                        {
                            time: '2017-06-08',
                            title: '标题标题标题标题标题标题标题标题标题标题',
                            info: '内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容',

                        },
                        {
                            time: '2017-06-08',
                            title: '标题标题标题标题标题标题标题标题标题标题',
                            info: '内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容',

                        },
                        {
                            time: '2017-06-08',
                            title: '标题标题标题标题标题标题标题标题标题标题',
                            info: '内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容',
                        }
                    ],
                list2:
                    [
                        {
                            time: '2018-12-01',
                            titleHref: 'www.baidu.com',
                            title: '标题标题标题标题标题标题标题标题标题标题',
                            desc: 'jieshao介绍jieshao介绍jieshao介绍jieshao介绍jieshao介绍jieshao介绍jieshao介绍jieshao介绍jieshao介绍jieshao介绍jieshao介绍jieshao介绍jieshao介绍jieshao介绍jieshao介绍jieshao介绍',
                            imgUrl: require("../assets/bann01.png"),
                        },
                        {
                            time: '2018-12-02',
                            titleHref: 'www.baidu.com',
                            title: '标题标题标题标题标题标题标题标题标题标题',
                            desc: 'jieshao介绍jieshao介绍jieshao介绍jieshao介绍jieshao介绍jieshao介绍jieshao介绍jieshao介绍jieshao介绍jieshao介绍jieshao介绍jieshao介绍jieshao介绍jieshao介绍jieshao介绍jieshao介绍',
                            imgUrl: require("../assets/bann01.png"),
                        },
                        {
                            time: '2018-12-03',
                            titleHref: 'www.baidu.com',
                            title: '标题标题标题标题标题标题标题标题标题标题',
                            desc: 'jieshao介绍jieshao介绍jieshao介绍jieshao介绍jieshao介绍jieshao介绍jieshao介绍jieshao介绍jieshao介绍jieshao介绍jieshao介绍jieshao介绍jieshao介绍jieshao介绍jieshao介绍jieshao介绍',
                            imgUrl: require("../assets/bann01.png"),
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
                            time: '2018-12-22',
                            titleHref: 'www.baidu.com',
                            title: '标题标题标题标题标题标题标题标题标题标题',
                            desc: 'jieshao介绍jieshao介绍jieshao介绍jieshao介绍jieshao介绍jieshao介绍jieshao介绍jieshao介绍jieshao介绍jieshao介绍jieshao介绍jieshao介绍jieshao介绍jieshao介绍jieshao介绍jieshao介绍',
                            imgUrl: require("../assets/bann01.png"),
                        },
                        {
                            time: '2018-12-22',
                            titleHref: 'www.baidu.com',
                            title: '标题标题标题标题标题标题标题标题标题标题',
                            desc: 'jieshao介绍jieshao介绍jieshao介绍jieshao介绍jieshao介绍jieshao介绍jieshao介绍jieshao介绍jieshao介绍jieshao介绍jieshao介绍jieshao介绍jieshao介绍jieshao介绍jieshao介绍jieshao介绍',
                            imgUrl: require("../assets/bann01.png"),
                        },
                        {
                            time: '2018-12-22',
                            titleHref: 'www.baidu.com',
                            title: '标题标题标题标题标题标题标题标题标题标题',
                            desc: 'jieshao介绍jieshao介绍jieshao介绍jieshao介绍jieshao介绍jieshao介绍jieshao介绍jieshao介绍jieshao介绍jieshao介绍jieshao介绍jieshao介绍jieshao介绍jieshao介绍jieshao介绍jieshao介绍',
                            imgUrl: require("../assets/bann01.png"),
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


