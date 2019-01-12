<template>
    <div class="wraper top_bg-cor">
        <page-header :isActive="isActive"></page-header>
        <!--产品中心-->
        <div class="about_nav-box zz-_nav-bg product_nav">
            <div class="about_ctn">
                <h2>产品中心</h2>
                <div class="about_list">
                    <a class="active">环卫装备</a>
                    <a href="/#">混凝土装备</a>
                    <a href="/#">运输装备</a>
                </div>
            </div>
        </div>
        <!--一级导航-->
        <div class="zz-change-box">
            <ul class="change-list">
                <li class="active">清扫类保洁</li>
                <li>市政园林养护类</li>
                <li>垃圾收转类</li>
                <li>环卫电动类</li>
                <p class="spec">
                    <input id="txt" type="text" placeholder="请输入关键词">
                    <a>
                        <img  src="../assets/news_search.png">
                    </a>
                </p>
            </ul>
        </div>

        <!--二级导航-->
        <div class="zz-change-box second">
            <ul class="change-list second-change">
                <li class="active"><span></span>清扫车系列</li>
                <li><span></span>扫路车系列</li>
                <li><span></span>洒水车系列</li>
                <li><span></span>高压清洗车系列</li>
            </ul>
        </div>
        <!--中间图片,后端传值-->
        <div class="carlist">
        <!--清扫类之清扫车系列-->
            <div class="content carlist_1">
                <ul class="imglist">
                    <li>
                        <img src="../assets/por-car-2.png" alt="">
                        <span>GSK5310GJB</span>
                        <div class="masking">
                            <a href=""><img src="../assets/product-1.png" alt=""></a>
                        </div>
                    </li>
                    <li>
                        <img src="../assets/por-car-2.png" alt="">
                        <span>GSK5310GJB</span>
                        <div class="masking">
                           <a href=""><img src="../assets/product-1.png" alt=""></a>
                        </div>
                    </li>
                    <li>
                        <img src="../assets/por-car-2.png" alt="">
                        <span>GSK5310GJB</span>
                        <div class="masking">
                            <a href=""><img src="../assets/product-1.png" alt=""></a>
                        </div>
                    </li>
                    <li><img src="../assets/por-car-2.png" alt=""><span>GSK5310GJB</span></li>
                    <li><img src="../assets/por-car-2.png" alt=""><span>GSK5310GJB</span></li>
                    <li><img src="../assets/por-car-2.png" alt=""><span>GSK5310GJB</span></li>
                    <li><img src="../assets/por-car-2.png" alt=""><span>GSK5310GJB</span></li>
                    <li><img src="../assets/por-car-2.png" alt=""><span>GSK5310GJB</span></li>
                    <li><img src="../assets/por-car-2.png" alt=""><span>GSK5310GJB</span></li>
                </ul>
            </div>
        <!--清扫类之扫路车系列-->
            <div class="content  carlist_1">
                <ul class="imglist">
                    <li><img src="../assets/2013.png" alt=""><span>GSK5310GJB</span></li>
                    <li><img src="../assets/2013.png" alt=""><span>GSK5310GJB</span></li>
                    <li><img src="../assets/2013.png" alt=""><span>GSK5310GJB</span></li>
                    <li><img src="../assets/2013.png" alt=""><span>GSK5310GJB</span></li>
                    <li><img src="../assets/2013.png" alt=""><span>GSK5310GJB</span></li>
                    <li><img src="../assets/2013.png" alt=""><span>GSK5310GJB</span></li>
                    <li><img src="../assets/2013.png" alt=""><span>GSK5310GJB</span></li>
                    <li><img src="../assets/2013.png" alt=""><span>GSK5310GJB</span></li>
                    <li><img src="../assets/2013.png" alt=""><span>GSK5310GJB</span></li>
                </ul>
            </div>
        <!--清扫类之洒水车系列-->
            <div class="content  carlist_1">
                <ul class="imglist">
                    <li><img src="../assets/por-car-1.png" alt=""><span>GSK5310GJB</span></li>
                    <li><img src="../assets/por-car-1.png" alt=""><span>GSK5310GJB</span></li>
                    <li><img src="../assets/por-car-1.png" alt=""><span>GSK5310GJB</span></li>
                    <li><img src="../assets/por-car-1.png" alt=""><span>GSK5310GJB</span></li>
                    <li><img src="../assets/por-car-1.png" alt=""><span>GSK5310GJB</span></li>
                    <li><img src="../assets/por-car-1.png" alt=""><span>GSK5310GJB</span></li>
                    <li><img src="../assets/por-car-1.png" alt=""><span>GSK5310GJB</span></li>
                    <li><img src="../assets/por-car-1.png" alt=""><span>GSK5310GJB</span></li>
                    <li><img src="../assets/por-car-1.png" alt=""><span>GSK5310GJB</span></li>
                </ul>
            </div>
        <!--清扫类之高压清洗车系列-->
            <div class="content  carlist_1">
                <ul class="imglist">
                    <li><img src="../assets/hw_1.png" alt=""><span>GSK5310GJB</span></li>
                    <li><img src="../assets/hw_1.png" alt=""><span>GSK5310GJB</span></li>
                    <li><img src="../assets/hw_1.png" alt=""><span>GSK5310GJB</span></li>
                    <li><img src="../assets/hw_1.png" alt=""><span>GSK5310GJB</span></li>
                    <li><img src="../assets/hw_1.png" alt=""><span>GSK5310GJB</span></li>
                    <li><img src="../assets/hw_1.png" alt=""><span>GSK5310GJB</span></li>
                    <li><img src="../assets/hw_1.png" alt=""><span>GSK5310GJB</span></li>
                    <li><img src="../assets/hw_1.png" alt=""><span>GSK5310GJB</span></li>
                    <li><img src="../assets/hw_1.png" alt=""><span>GSK5310GJB</span></li>
                </ul>
            </div>
        </div>

        <!--底部导航-->
        <div class="page_number" style="margin-top: 0;margin-bottom:40px;">
            <a class="active">1</a>
            <a>2</a>
            <a>3</a>
            <a>4</a>
            <a>下一页</a>
        </div>

        <page-footer></page-footer>
    </div>
</template>

<script>
    import PageHeader from "../components/pageHeader";
    import PageFooter from "../components/pageFooter";
    import $ from 'jquery'
    export default {
        name: "product",
        components: {PageHeader,PageFooter},
        data() {
            return {
                isActive: {
                    index: false,
                    about: false,
                    dj: false,
                    xw: false,
                    pp: true,
                    zz: false,
                    kj: false,
                    yx: false,
                    lx: false,
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
            });
            //一级菜单点击变色效果
            $('.change-list li').click(function(){
                $(this).addClass('active').siblings().removeClass('active');
            });
            //二级菜单点击变色效果
            $('.second-change li').click(function(){
                $(this).addClass('active').siblings().removeClass('active');
                $('.carlist .carlist_1').eq($(this).index()).show().siblings().hide();
            });
        }
    }
</script>

<style scoped>

</style>