<template>
    <div class="wraper top_bg-cor">
        <page-header :isActive="isActive"></page-header>
        <img src="../assets/dj_1.png" class="dj_title animated zoomIn"/>
        <div class="dj_ctn">
            <h6 class="more_top"><a href="#">more&nbsp;&gt;</a></h6>
            <ul class="dj_lef animated fadeInRight">
                <li>
                    <h1><a href="#">不忘初心、牢记使命 ——庆祝中国共产党成立97周年教育活动</a></h1>
                    <p>重温入党誓词，牢记庄重承诺。重工科技有限公司董事长范一剑同志带领党支部全体党员重温入党誓词，认真回想入党时的初心，牢记中国共产党人的责任和使命。</p>
                </li>
                <li>
                    <h1><a href="#">扎实学好《条例》  认真建好支部</a></h1>
                    <p>根据装备公司党委统一部署要求,甘肃建投重工科技有限公司党支部于12月6日下午,召开党员学习大会,集中学习了《中国共产觉支部工作条例(试行)》。公司全体党员、入党积极分子参会,学习由公司支部书记范一剑主持。</p>
                </li>
                <li>
                    <h1><a href="#">甘肃建投重工科技有限公司参加第九届bauma CHINA</a></h1>
                    <p>bauma CHINA 2018，第九届中国国际工程机械、建材机械、矿山机械、工程车辆及设备博览会已于2018年11月27-30日在上海新国际博览中心成功举办。</p>
                </li>
                <li>
                    <h1><a href="#">甘肃建投重工科技有限公司参加第二十届中国国际高新技术成果交易会</a></h1>
                    <p>本次公司参展的项目是最新研发的洗扫车，该车利用激光实时成像原理，达到自动控制扫盘自动收缩动作，此新兴技术引领了信息化和工业化的深度融合，为制造业从“生产型”向“服务型”转变提供技术支撑，推动了产业结构升级，且该项目荣获高新技术成果交易会《优秀产品奖》。</p>
                </li>



            </ul>
            <div class="dj_rig animated zoomIn">
                <ul class="swiper-wrapper">
                    <li class="swiper-slide">
                        <a href="#">
                            <h1>不忘初心、牢记使命 ——庆祝中国共产党成立97周年教育活动</h1>
                            <i :style="'backgroundImage: url(' + img4 + ')'"></i>
                        </a>
                    </li>
                    <li class="swiper-slide">
                        <a href="#">
                            <h1>扎实学好《条例》  认真建好支部</h1>
                            <i :style="'backgroundImage: url(' + img1 + ')'"></i>
                        </a>
                    </li>
                    <li class="swiper-slide">
                        <a href="#">
                            <h1>甘肃建投重工科技有限公司参加第九届bauma CHINA</h1>
                            <i :style="'backgroundImage: url(' + img2 + ')'"></i>
                        </a>
                    </li>
                    <li class="swiper-slide">
                        <a href="#">
                            <h1>甘肃建投重工科技有限公司参加第二十届中国国际高新技术成果交易会</h1>
                            <i :style="'backgroundImage: url(' + img3 + ')'"></i>
                        </a>
                    </li>
                </ul>
                <div class="dj_pagination"></div>
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
                    dj: true,
                    xw: false,
                    pp: false,
                    zz: false,
                    kj: false,
                    yx: false,
                    lx: false,
                },
                img1: require("../assets/dgb1.jpg"),
                img2: require("../assets/dgb2.png"),
                img3: require("../assets/dgb3.png"),
                img4: require("../assets/dgb4.jpg"),
            }
        },
        mounted() {
            new Swiper(".dj_rig", {
                pagination: {
                    el: '.dj_pagination',
                    clickable: true
                },
                paginationClickable: true,
                loop: true,
                autoplay: true
            });

            $(window).scroll(function () {
                const scrollTop = $(this).scrollTop();
                if (scrollTop > 0) {
                    $('.wraper,.nav_box').addClass('on');
                } else {
                    $('.wraper,.nav_box').removeClass('on');
                }
            });
        }
    }
</script>