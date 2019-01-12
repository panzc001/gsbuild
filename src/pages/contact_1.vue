<template>
    <div class="wraper top_bg-cor">
        <page-header :isActive="isActive"></page-header>
        <!--top-menu-->
        <div class="about_nav-box con_tact-box">
            <div class="about_ctn">
                <h2>联系我们</h2>
            </div>
        </div>
        <div class="map_ctn-wrap">
            <div id="allmap" class="message animated fadeInLeft">

                <!--静态地图-->
            </div>
            <div class="message animated fadeInRight">
                <!--右边信息盒-->
                <ul>
                    <li class="active">
                        <p>甘肃建投重工科技有限公司</p>
                        <p>地址：甘肃省兰州市兰州新区昆仑山大道18号<br/>电话：0931-2903062</p>
                    </li>
                    <li>
                        <p>甘肃建投重工科技有限公司营销公司</p>
                        <p>地址：甘肃省兰州市兰州中心3306<br/>电话：0931-2796748</p>
                    </li>
                    <li>
                        <p>甘肃高漠环境产业发展有限公司</p>
                        <p>地址：兰州市兰州中心3305<br/>电话：0931-2796748</p>
                    </li>
                    <li>
                        <p>甘肃省建筑机械工程实验室有限公司 </p>
                        <p>兰州市七里河区彭家彭镇彭家坪228号<br/>电话：0931-2903049</p>
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
                    about: false,
                    dj: false,
                    xw: false,
                    pp: false,
                    zz: false,
                    kj: false,
                    yx: false,
                    lx: true,
                },
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
                if(scrollTo>200){
                    $('.message').addClass('fadeInRight');
                }
            });
            $('.message li').click(function () {
                $(this).addClass('active').siblings().removeClass('active');
            });

        }
    }
</script>