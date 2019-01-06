<template>
    <div class="wraper top_bg-cor">
        <page-header :isActive="isActive"></page-header>
        <div class="cont-ent_box">
            <!--top-menu-->
            <div class="about_nav-box news_nav-box">
                <div class="about_ctn">
                    <h2>新闻中心</h2>
                    <div class="about_list">
                        <a class="active">公司新闻</a>
                        <a href="/news_3">集团新闻</a>
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
                            <li>5月</li>
                            <li>6月</li>
                            <li>7月</li>
                            <li>8月</li>
                            <li>9月</li>
                            <li>10月</li>
                            <li>11月</li>
                            <li>12月</li>

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
                        time: '2019-01-03',
                        titleHref: '#',
                        title: '【甘肃建投科技领军人才】孜孜不倦 刻苦钻研',
                        desc: '——记甘肃建投科技领军人才重工科技赵峰',
                        imgUrl: require("../assets/gsnews_1.jpg")
                    }, {
                        time: '2018-01-03',
                        titleHref: '#',
                        title: '【甘肃建投金牌工匠】焊接领域的领头羊',
                        desc: '——记甘肃建投金牌工匠重工科技张星',
                        imgUrl: require("../assets/gsnews_2.jpg")
                    }, {
                        time: '2018-12-06',
                        titleHref: '#',
                        title: '甘肃建投重工科技有限公司参加第九届bauma CHINA',
                        desc: 'bauma CHINA 2018，第九届中国国际工程机械、建材机械、矿山机械、工程车辆及设备博览会已于2018年11月27-30日在上海新国际博览中心成功举办。',
                        imgUrl: require("../assets/gsnews_3.png")
                    }, {
                        time: '2018-11-27',
                        titleHref: '#',
                        title: '祝贺甘肃建投重工科技有限公司获得“重合同守信用企业”荣誉称号',
                        desc: '近日，我公司被长风国际信用评价集团有限公司授予“重合同守信用企业”荣誉称号，成为全省同行业中获此殊荣的佼佼者。',
                        imgUrl: require("../assets/gsnews_4.png")
                    }, {
                        time: '2018-11-21',
                        titleHref: '#',
                        title: '甘肃建投重工科技有限公司参加第二十届中国国际高新技术成果交易会',
                        desc: '2018年11月14日甘肃建投重工科技有限公司亮相第二十届中国国际高新技术成果交易会。',
                        imgUrl: require("../assets/gsnews_5.png")
                    }, {
                        time: '2018-11-15',
                        titleHref: '#',
                        title: '甘肃省发改委一行调研甘肃建投重工科技有限公司',
                        desc: '11月14日下午，甘肃省发展与改革委员会副主任汪尚学一行调研甘肃建投重工科技有限公司。兰州新区管委会、甘肃建投工业处、甘肃建投新区公司、甘肃建投重工科技公司相关领导陪同调研。',
                        imgUrl: require("../assets/gsnews_6.jpg")
                    }, {
                        time: '2018-09-27',
                        titleHref: '3',
                        title: '甘肃建投重工科技有限公司营销分公司成立',
                        desc: '2018年9月19日甘肃建投重工科技有限公司营销分公司在兰州中心写字楼33楼挂牌成立，开启公司专用车事业发展新篇章。分公司主要从事专用车销售、租赁、环卫一体等业务。',
                        imgUrl: require("../assets/gsnews_7.png")
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


