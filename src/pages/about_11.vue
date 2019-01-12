<template>
    <div class="wraper top_bg-cor">
        <page-header :isActive="isActive"></page-header>
        <!--top-menu-->
        <div class="about_nav-box">
            <div class="about_ctn">
                <h2>关于我们</h2>
                <div class="about_list">
                    <a href="/about_1">企业概况</a>
                    <a href="/about_1#zhlv">公司战略</a>
                    <a href="/about_1#qywh">企业文化</a>
                    <a href="/about_2">发展历程</a>
                    <a href="/about_6">公司荣誉</a>
                    <a href="/about_8">社会责任</a>
                    <a class="active" href="/about_9">人才招聘</a>
                </div>
            </div>
        </div>
        <div class="sea-zp-box">
            <div class="shzp_search animated fadeInUp">
                <span>
                    <em>选择职位</em>
                    <ul>
                        <li>职位1</li>
                        <li>职位1职位1</li>
                        <li>职位1职位1</li>
                        <li>职位1职位1</li>
                    </ul>
                </span>
                <span>
                    <em>请选择招聘部门</em>
                    <ul>
                        <li>职位1</li>
                        <li>职位1职位1</li>
                        <li>职位1职位1</li>
                        <li>职位1职位1</li>
                    </ul>
                </span>
                <span class="input_sea">
                    <input type="text" placeholder="请输入关键词">
                </span>
                <span class="search_btn">搜索</span>
            </div>
            <ul class="sz_list">
                <li class="animated fadeInUp">
                    <h2>职位职位</h2>
                    <div class="eri">
                        <p>招聘人数：30人 </p>
                        <p>招聘部门：甘肃建投</p>
                        <P>工作地点： 兰州</p>
                    </div>
                    <a href="#">了解更多&nbsp;&gt;</a>
                </li>
                <li class="animated fadeInUp">
                    <h2>职位职位</h2>
                    <div class="eri">
                        <p>招聘人数：30人 </p>
                        <p>招聘部门：甘肃建投</p>
                        <P>工作地点： 兰州</p>
                    </div>
                    <a href="#">了解更多&nbsp;&gt;</a>
                </li>
                <li class="animated fadeInUp">
                    <h2>职位职位</h2>
                    <div class="eri">
                        <p>招聘人数：30人 </p>
                        <p>招聘部门：甘肃建投</p>
                        <P>工作地点： 兰州</p>
                    </div>
                    <a href="#">了解更多&nbsp;&gt;</a>
                </li>
                <li class="animated fadeInUp">
                    <h2>职位职位</h2>
                    <div class="eri">
                        <p>招聘人数：30人 </p>
                        <p>招聘部门：甘肃建投</p>
                        <P>工作地点： 兰州</p>
                    </div>
                    <a href="#">了解更多&nbsp;&gt;</a>
                </li>
                <li class="animated fadeInUp">
                    <h2>职位职位</h2>
                    <div class="eri">
                        <p>招聘人数：30人 </p>
                        <p>招聘部门：甘肃建投</p>
                        <P>工作地点： 兰州</p>
                    </div>
                    <a href="#">了解更多&nbsp;&gt;</a>
                </li>
                <li class="animated fadeInUp">
                    <h2>职位职位</h2>
                    <div class="eri">
                        <p>招聘人数：30人 </p>
                        <p>招聘部门：甘肃建投</p>
                        <P>工作地点： 兰州</p>
                    </div>
                    <a href="#">了解更多&nbsp;&gt;</a>
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
            $('html,body').animate({scrollTop: 0},0);
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

            $('.search_btn').click(function(){
                $('.shzp_search ul').hide();
                // alert('搜索');
            })
        }
    }
</script>