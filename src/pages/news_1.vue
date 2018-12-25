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
                        <a  class="active">视频新闻</a>
                        <a href="/news_4">行业新闻</a>
                    </div>
                </div>
            </div>
            <div class="content">
                <ul class="videolist">
                    <li class="animated zoomIn" v-for="(li,index) in videolist" :key="index" :class="(index+2)%3==0?'mid':''">
                        <video-player class="video-player vjs-custom-skin video_img"
                                      ref="videoPlayer"
                                      :playsinline="true"
                                      :options="players?players[index]:''"
                                      @play="onPlayerPlay(index)">
                        </video-player>
                        <div href="" class="video_text play"><span>{{index+li.title}}</span><i></i></div>
                    </li>
                </ul>
                <div class="page_number" style="margin-top: 0;">
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
        data () {
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
                playerOptions: [],
                videolist: [],
            }
        },
        mounted () {
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
            removeByValue (arr, val) {
                for (var i = 0; i < arr.length; i++) {
                    if (arr[i] == val) {
                        arr.splice(i, 1);
                        break;
                    }
                }
            },
            onPlayerPlay (k) {
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
        computed: {
            players () {
                return this.playerOptions
            }
        },
        created: function () {
            //模拟请求道数据，并且赋值给this.videolist
            this.videolist = [
                {
                    imgUrl: require("../assets/news_img-1.png"),
                    video: require("../common/lib/jwplayer/data/1.mp4"),
                    title: '9月12号召开的党建会议 copy 3'
                }, {
                    imgUrl: require("../assets/news_img-1.png"),
                    video: require("../common/lib/jwplayer/data/1.mp4"),
                    title: '9月12号召开的党建会议 copy 3'
                }, {
                    imgUrl: require("../assets/bann01.png"),
                    video: require("../common/lib/jwplayer/data/1.mp4"),
                    title: '9月12号召开的党建会议 copy 3'
                }, {
                    imgUrl: require("../assets/bann01.png"),
                    video: require("../common/lib/jwplayer/data/1.mp4"),
                    title: '9月12号召开的党建会议 copy 3'
                }, {
                    imgUrl: require("../assets/news_img-1.png"),
                    video: require("../common/lib/jwplayer/data/1.mp4"),
                    title: '9月12号召开的党建会议 copy 3'
                }, {
                    imgUrl: require("../assets/bann01.png"),
                    video: require("../common/lib/jwplayer/data/1.mp4"),
                    title: '9月12号召开的党建会议 copy 3'
                }, {
                    imgUrl: require("../assets/bann01.png"),
                    video: require("../common/lib/jwplayer/data/1.mp4"),
                    title: '9月12号召开的党建会议 copy 3'
                }, {
                    imgUrl: require("../assets/news_img-1.png"),
                    video: require("../common/lib/jwplayer/data/1.mp4"),
                    title: '9月12号召开的党建会议 copy 3'
                }, {
                    imgUrl: require("../assets/bann01.png"),
                    video: require("../common/lib/jwplayer/data/1.mp4"),
                    title: '9月12号召开的党建会议 copy 3'
                }
            ]
            //初始化数据语句，不要删除
            const l = this.videolist.length
            for (var i = 0; i < l; i++) {
                this.playerOptions[i] = {}
                this.playerOptions[i].sources = []
                this.playerOptions[i].poster = ''
                this.playerOptions[i].sources[0] = {}
                this.playerOptions[i].sources[0].src = ''
                this.playerOptions[i].poster = this.videolist[i].imgUrl
                this.playerOptions[i].sources[0].src = this.videolist[i].video
            }
        }
    }
</script>


