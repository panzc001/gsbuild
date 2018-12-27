<template>
    <div class="wraper top_bg-cor">
        <page-header :isActive="isActive"></page-header>
        <div class="about_nav-box">
            <div class="about_ctn">
                <h2>关于我们</h2>
                <div class="about_list">
                    <a href="/about_3">企业概况</a>
                    <a href="/about_4">公司战略</a>
                    <a href="/about_5">企业文化</a>
                    <a class="active">发展历程</a>
                    <a href="/about_6">公司荣誉</a>
                    <a href="/about_8">社会责任</a>
                    <a href="/about_9">人才招聘</a>
                </div>
            </div>
        </div>
        <!--年份切换-->
        <div class="year_change-wrap">
            <div class="ange-wrap">
                <ul class="swiper-wrapper">
                    <li class="swiper-slide" data-year="1">
                        <a>
                            <img src="../assets/2013.png"/>
                        </a>
                    </li>
                    <li class="swiper-slide" data-year="2">
                        <a>
                            <img src="../assets/2014.png"/>
                        </a>
                    </li>
                    <li class="swiper-slide" data-year="3">
                        <a>
                            <img src="../assets/2015.png"/>
                        </a>
                    </li>
                    <li class="swiper-slide" data-year="4">
                        <a>
                            <img src="../assets/2016.png"/>
                        </a>
                    </li>
                    <li class="swiper-slide" data-year="5">
                        <a>
                            <img src="../assets/2017.png"/>
                        </a>
                    </li>
                    <li class="swiper-slide" data-year="6">
                        <a>
                            <img src="../assets/2018.png"/>
                        </a>
                    </li>
                    <!--<li class="swiper-slide" data-year="2018">-->
                    <!--</li>-->
                    <!--<li class="swiper-slide" data-year="2018">-->
                    <!--</li>-->
                </ul>
            </div>
            <div class="btn_next"></div>
            <div class="btn_prev"></div>
        </div>
        <!--发展历程-->
        <div class="develop-ment">
            <div class="year_box">
                <ul class="rig_year animated">
                    <li class="active">2013年</li>
                </ul>
                <ul class="year_ctn  animated">
                    <li>
                        <i></i>
                        <div class="txt">
                            <div class="tt">
                                <h1>2013年12月</h1>
                                <p>注册成立甘肃建投重工科技有限公司。</p>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
            <div class="year_box" style="display: none">
                <ul class="rig_year animated">
                    <li class="active">2014年</li>
                </ul>
                <ul class="year_ctn  animated">
                    <li>
                        <i></i>
                        <div class="txt">
                        <span>
                            <img src="../assets/lc_1.png"/>
                        </span>
                            <div class="tt">
                                <h1>2014年8月</h1>
                                  <p>专用车项目正式成立 </p>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
            <div class="year_box" style="display: none">
                <ul class="rig_year animated">
                    <li class="active">2015年</li>
                </ul>
                <ul class="year_ctn  animated">
                    <li>
                        <i></i>
                        <div class="txt">
                            <div class="tt">
                                <h1>2015年</h1>
                                <p>
                                    专用车项目开始试生产</p>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
            <div class="year_box" style="display: none">
                <ul class="rig_year animated">
                    <li class="active">2016年</li>
                </ul>
                <ul class="year_ctn  animated">
                    <li>
                        <i></i>
                        <div class="txt">
                            <div class="tt">
                                <h1>2016年1月</h1>
                                <p>
                                    设立为专用车生产企业。</p>
                            </div>
                        </div>
                    </li>
                    <li>
                        <i></i>
                        <div class="txt">
                            <div class="tt">
                                <h1>2016年1月19日</h1>
                                <p>
                                    获得中国汽车技术研究中心颁发的《企业名称代号证书》。标志着公司作为车辆生产企业，所生产的产品型号具有唯一性。</p>
                            </div>
                        </div>
                    </li>
                    <li>
                        <i></i>
                        <div class="txt">
                        <span>
                            <img src="../assets/lc_2.png"/>
                        </span>
                            <div class="tt">
                                <h1>2016年3月</h1>
                                <p>
                                    专用汽车生产基地自主研发生产的首台车厢可卸式垃圾车装配完成。为生产基地台车下线仪式奠定了坚实的基础。</p>
                            </div>
                        </div>
                    </li>
                     <li>
                        <i></i>
                        <div class="txt">
                            <div class="tt">
                                <h1>2016年5月31日</h1>
                                <p>
                                    获得中汽认证中心颁发的《中国国家强制性产品认证证书》。</p>
                            </div>
                        </div>
                    </li>
                     <li>
                        <i></i>
                        <div class="txt">
                            <div class="tt">
                                <h1>2016年6月12日</h1>
                                <p>
                                    获得中国汽车技术研究中心颁发的《世界制造厂识别代号证书》。</p>
                            </div>
                        </div>
                    </li>
                    <li>
                        <i></i>
                        <div class="txt">
                        <span>
                            <img src="../assets/lc_3.png"/>
                        </span>
                            <div class="tt">
                                <h1>2016年7月8日</h1>
                                <p>
                                   津巴布韦政府代表团、国家发改委国际合作中心及中非发展基金一行访问专用车生产基地。</p>
                            </div>
                        </div>
                    </li>
                    <li>
                        <i></i>
                        <div class="txt">
                            <div class="tt">
                                <h1>2016年7月15日</h1>
                                <p>
                                    通过了中汽认证中心ISO9001质量体系认证，取得了《质量管理体系认证证书》。</p>
                            </div>
                        </div>
                    </li>
                    <li>
                        <i></i>
                        <div class="txt">
                            <div class="tt">
                                <h1>2016年7月27日</h1>
                                <p>
                                    甘肃建投重工科技有限公司“百台下线仪式”，160台、38款“高漠”牌专用汽车在专用车生产基地成功下线，标志着甘肃建投投资近10亿元，历时两年打造的专用车生产基地正式进入批量化生产阶段。</p>
                            </div>
                        </div>
                    </li>
                    <li>
                        <i></i>
                        <div class="txt">
                        <span>
                            <img src="../assets/lc_10.png"/>
                        </span>
                            <div class="tt">
                                <h1>2016年8月29日</h1>
                                <p>
                                   兰州市副市长严志坚带队，由市工信委、市财政局、市国资委等部门和兰州宏建、城关物业、市一建等重点企业负责人组成的考察团赴甘肃建投专用车生产基地考察调研。</p>
                            </div>
                        </div>
                    </li>
                    <li>
                        <i></i>
                        <div class="txt">
                        <span>
                            <img src="../assets/lc_5.png"/>
                        </span>
                            <div class="tt">
                                <h1>2016年9月13日</h1>
                                <p>
                                   省人防办主任周应军一行考察专用车生产基地。</p>
                            </div>
                        </div>
                    </li>
                    <li>
                        <i></i>
                        <div class="txt">
                        <span>
                            <img src="../assets/lc_6.png"/>
                        </span>
                            <div class="tt">
                                <h1>2016年9月22日</h1>
                                <p>
                                   瑞士索罗图恩州议员、瑞士西北应用科技与艺术大学经济管理学院院长鲁迪·纽因茨、瑞士索罗图恩州经济发展局首席代表卡尔·布兰德带领的瑞士索罗图恩州政府代表团一行在省委组织部副部长陈卫中，市委常委、兰州新区党工委书记、新区管委会主任李睿等省市领导的陪同下参观考察甘肃专用汽车生产基地。</p>
                            </div>
                        </div>
                    </li>
                    <li>
                        <i></i>
                        <div class="txt">
                        <span>
                            <img src="../assets/lc_7.png"/>
                        </span>
                            <div class="tt">
                                <h1>2016年9月</h1>
                                <p>
                                   兰州新区管委会主任李睿、兰州副市长牛向东一行观摩专用车生产基地.此次考察团由新区党工委、管委会领导、新区各部门、省市驻新区各单位、各产业园建设管理办公室、各国有企业主要负责人、新区三镇党政主要负责人、新区彩虹城社区主要负责人、新区辖区重点企业负责人、驻区金融机构负责人及新闻媒体记者组成。</p>
                            </div>
                        </div>
                    </li>
                    <li>
                        <i></i>
                        <div class="txt">
                        <span>
                            <img src="../assets/lc_8.png"/>
                        </span>
                            <div class="tt">
                                <h1>2016年10月20日</h1>
                                <p>
                                   陇南市市长陈青一行观摩考察甘肃建投专用汽车生产基地，甘肃建投董事长苏海明、总经理苏跃华、甘肃建投重工科技有限公司董事长温守钦陪同参观。</p>
                            </div>
                        </div>
                    </li>
                    <li>
                        <i></i>
                        <div class="txt">
                        <span>
                            <img src="../assets/lc_9.png"/>
                        </span>
                            <div class="tt">
                                <h1>2016年11月11日</h1>
                                <p>
                                   兰州市科学技术局局长王柠一行到甘肃建投兰州新区产业园，观摩考察甘肃建投专用汽车生产基地。</p>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
            <div class="year_box" style="display: none">
                <ul class="rig_year animated">
                    <li class="active">2017年</li>
                </ul>
                <ul class="year_ctn  animated">
                    <li>
                        <i></i>
                        <div class="txt">
                            <span>
                            <img src="../assets/lc_11.png"/>
                        </span>
                            <div class="tt">
                                <h1>2017年1月4日</h1>
                                <p>
                                    汉阳专家一行到专用车生产基地调研指导，并为企业做转型发展思路培训。</p>
                            </div>
                        </div>
                    </li>
                    <li>
                        <i></i>
                        <div class="txt">
                            <div class="tt">
                                <h1>2017年3月10日</h1>
                                <p>
                                    通过了环境/职业健康安全体系认证，取得了《环境管理体系认证证书》及《职业健康安全管理体系认证证书》。</p>
                            </div>
                        </div>
                    </li>
                    <li>
                        <i></i>
                        <div class="txt">
                            <span>
                            <img src="../assets/lc_12.png"/>
                        </span>
                            <div class="tt">
                                <h1>2017年3月20日</h1>
                                <p>
                                    省政协副主席黄选平在市政府、市政协、市发改委、市工信委、市政府国资委分管领导的陪同下到甘肃建投兰州新区产业园，观摩甘肃建投专用汽车生产基地。</p>
                            </div>
                        </div>
                    </li>
                    <li>
                        <i></i>
                        <div class="txt">
                            <span>
                            <img src="../assets/lc_13.png"/>
                        </span>
                            <div class="tt">
                                <h1>2017年4月</h1>
                                <p>
                                    210辆保洁车交付使用。</p>
                            </div>
                        </div>
                    </li>
                    <li>
                        <i></i>
                        <div class="txt">
                            <span>
                            <img src="../assets/lc_14.png"/>
                        </span>
                            <div class="tt">
                                <h1>2017年4月12日</h1>
                                <p>
                                    兰州新区综合执法局党委书记、局长康岸桥、兰州新区市政投资管理集团有限公司、各大物业环卫服务公司相关领导观摩调研专用车生产基地。</p>
                            </div>
                        </div>
                    </li>
                    <li>
                        <i></i>
                        <div class="txt">
                            <span>
                            <img src="../assets/lc_15.png"/>
                        </span>
                            <div class="tt">
                                <h1>2017年4月18日</h1>
                                <p>
                                    基地研制的臂架式混凝土泵车顺利通过欧盟CE产品认证，并获得《臂架式混凝土泵车欧盟产品CE安全认证证书》。标志着装备公司产品在技术、质量、安全、使用等方面与欧盟标准正式接轨。</p>
                            </div>
                        </div>
                    </li>
                     <li>
                        <i></i>
                        <div class="txt">
                            <span>
                            <img src="../assets/lc_16.jpg"/>
                        </span>
                            <div class="tt">
                                <h1>2017年11月</h1>
                                <p>
                                    无锡市金沙田科技有限公司在装备公司签署战略合作协议。</p>
                            </div>
                        </div>
                    </li>
                     <li>
                        <i></i>
                        <div class="txt">
                            <span>
                            <img src="../assets/lc_17.png"/>
                        </span>
                            <div class="tt">
                                <h1>2017年12月14日</h1>
                                <p>
                                    二十余台1吨车厢可卸式垃圾车从兰州新区甘肃建投专用汽车生产基地驶出，奔向新区两镇（西岔镇、秦川镇），参与兰州新区道路清扫保洁服务项目。</p>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
             <div class="year_box" style="display: none">
                <ul class="rig_year animated">
                    <li class="active">2018年</li>
                </ul>
                <ul class="year_ctn  animated">
                    <li>
                        <i></i>
                        <div class="txt">
                            <div class="tt">
                                <h1>2018年3月</h1>
                                <p>
                                    兰州新区蓝白试验区联合创新研究院和德国专业汽车设计FEV公司参观专用车生产基地</p>
                            </div>
                        </div>
                    </li>
                     <li>
                        <i></i>
                        <div class="txt">
                            <div class="tt">
                                <h1>2018年3月</h1>
                                <p>
                                    宝鸡华山工程车辆有限责任公司在兰州新区甘肃建投产业园内签署战略协议</p>
                            </div>
                        </div>
                    </li>
                    <li>
                        <i></i>
                        <div class="txt">
                            <div class="tt">
                                <h1>2018年3月</h1>
                                <p>
                                   630辆 电动环卫保洁车交付甘南藏族自治州使用。</p>
                            </div>
                        </div>
                    </li>
                    <li>
                        <i></i>
                        <div class="txt">
                            <div class="tt">
                                <h1>2018年6月</h1>
                                <p>
                                   “汉阳专用汽车研究所西北实验基地”正式揭牌。</p>
                            </div>
                        </div>
                    </li>
                    <li>
                        <i></i>
                        <div class="txt">
                            <div class="tt">
                                <h1>2018年7月</h1>
                                <p>
                                   加纳议会基础设施改善项目考察团参观专用车生产基地</p>
                            </div>
                        </div>
                    </li>
                    <li>
                        <i></i>
                        <div class="txt">
                            <div class="tt">
                                <h1>2018年10月24</h1>
                                <p>
                                   取得甘肃省2018年第一批高新技术企业备案。</p>
                            </div>
                        </div>
                    </li>
                     <li>
                        <i></i>
                        <div class="txt">
                             <span>
                            <img src="../assets/lc_18.jpg"/>
                        </span>
                            <div class="tt">
                                <h1>2018年11月</h1>
                                <p>
                                   取得企业信用等级证书“AAA”证书。</p>
                            </div>
                        </div>
                    </li>
                </ul>
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
                    about: true,
                    dj: false,
                    xw: false,
                    pp: false,
                    zz: false,
                    kj: false,
                    yx: false,
                    lx: false,
                },
                img: require("../assets/bann01.png")
            }
        },
        mounted() {
            new Swiper(".ange-wrap", {
                slidesPerView: 3,
                spaceBetween: 15,
                loop: true,
                navigation: {
                    nextEl: '.btn_next',
                    prevEl: '.btn_prev',
                },
                on: {
                    slideChangeTransitionEnd: function () {
                        let index = $('.ange-wrap li').eq(this.activeIndex).attr('data-year');
                        $('.year_box').eq(index-1).show().siblings().hide();
                    },
                },
            });

            $(window).scroll(function () {
                const scrollTop = $(this).scrollTop();
                if (scrollTop > 0) {
                    $('.wraper,.nav_box').addClass('on');
                } else {
                    $('.wraper,.nav_box').removeClass('on');
                }
            });

            $(window).scroll(function () {
                const scrollTop = $(this).scrollTop();
                const scrop_1 = $('.year_box').offset().top;
                if (scrollTop >= scrop_1 - 400) {
                    $('.rig_year').show().addClass('fadeInLeft');
                    $('.year_ctn').show().addClass('fadeInRight')
                }
            });
        }
    }
</script>