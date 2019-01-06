<template>
    <div class="wraper top_bg-cor">
        <!--导航头-->
        <page-header  :isActive="isActive"></page-header>
        <!--营销服务-->
        <div class="about_nav-box zz-_nav-bg product_nav">
            <div class="about_ctn">
                <h2>营销服务</h2>
                <div class="about_list">
                    <a class="active">营销网络</a>
                    <a href="/yx-fw_3">配件供应</a>
                    <a href="/yx-fw_4">技术信息</a>
                    <a href="/yx-fw_5">售后服务</a>
                    <a href="/yx-fw_6">留言咨询</a>
                </div>
            </div>
        </div>
        <!--地图-->
        <div class="mapbox">
            <div :style="{width:'1200px',height:' 957.63px'}" class="animated fadeInLeft">
                    <el-amap vid="amap" :plugin="plugin" class="amap-demo" :center="center">
                    </el-amap>
                </div>
        </div>
        <!--搜索+切换-->
        <div class="all thing">
            <!--城市查询-->
            <div class="all_1  animated fadeInUp">
                <div class="shzp_search news_search animated fadeInUp yx_search">
                    <span>
                            <em>省区</em>
                            <ul>
                                 <li>甘肃省</li>
                                <li>青海省</li>
                                <li>陕西省</li>
                                <li>河南省</li>
                            </ul>
                        </span>
                    <span>
                            <em>城市</em>
                        <ul>
                        <li>兰州市</li>
                        <li>西宁市</li>
                        <li>西安市</li>
                        <li>郑州市</li>
                        </ul>
                        </span>
                    <span class="input_sea">
                            <input type="text" placeholder="请输入关键词">
                        </span>
                    <a href="javascript:;">搜索</a>
                </div>
            </div>
            <!--各大办事处-->
            <ul CLASS="animated fadeInUp">
                <li>
                    <p><span>【销售及服务】</span>甘肃办事处</p>
                    <p>
                        <span>  授权区域：兰州</span>
                        <span>电话：18139996899（许主任） </span>
                        <span>甘肃省兰州市七里河兰州中心3306室</span>
                    </p>
                </li>
                <li>
                    <p><span>【销售及服务】</span>青海办事处</p>
                    <p>
                        <span>  授权区域：西宁</span>
                        <span>电话：13709750841（李主任） </span>
                        <span>青海省西宁市城中区南川东路21号2号区1号楼1幢1层</span>
                    </p>
                </li>
                <li>
                    <p><span>【销售及服务】</span>陕西办事处</p>
                    <p>
                        <span>  授权区域：西安</span>
                        <span>电话：18109491372（陈经理） </span>
                        <span>陕西省西安市未央区凯旋大厦1713</span>
                    </p>
                </li>
                <li>
                    <p><span>【销售及服务】</span>河南办事处</p>
                    <p>
                        <span>  授权区域：郑州</span>
                        <span>电话：17797575506（景主任） </span>
                        <span>河南省郑州市金水区未来路曼哈顿</span>
                    </p>
                </li>
            </ul>
            <!--底部导航-->
            <!--<div class="page_number" style="margin-top: 0;margin-bottom:40px;">-->
                <!--<a class="active">1</a>-->
                <!--<a>2</a>-->
                <!--<a>3</a>-->
                <!--<a>4</a>-->
                <!--<a>下一页</a>-->
            <!--</div>-->
        </div>

        <page-footer></page-footer>
    </div>
</template>

<script>
    import PageHeader from "../components/pageHeader";
    import PageFooter from "../components/pageFooter";
    import animate from 'animate.css'
    import $ from 'jquery'
    export default {
        name: "yx-fw_1",
        components: {PageHeader, PageFooter},
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
                    yx: true,
                    lx: false,
                },
                center: [103.845257,36.055688],
                lng: 0,
                lat: 0,
                loaded: false,
                plugin: [{
                    enableHighAccuracy: true,//是否使用高精度定位，默认:true
                    timeout: 100,          //超过10秒后停止定位，默认：无穷大
                    maximumAge: 0,           //定位结果缓存0毫秒，默认：0
                    convert: true,           //自动偏移坐标，偏移后的坐标为高德坐标，默认：true
                    showButton: true,        //显示定位按钮，默认：true
                    buttonPosition: 'RB',    //定位按钮停靠位置，默认：'LB'，左下角
                    showMarker: true,        //定位成功后在定位到的位置显示点标记，默认：true
                    showCircle: true,        //定位成功后用圆圈表示定位精度范围，默认：true
                    panToLocation: true,     //定位成功后将定位到的位置作为地图中心点，默认：true
                    zoomToAccuracy:true,//定位成功后调整地图视野范围使定位位置及精度范围视野内可见，默认：f
                    extensions:'all',
                    pName: 'Geolocation',
                    events: {
                        init(o) {
                            // o 是高德地图定位插件实例
                            o.getCurrentPosition((status, result) => {
                                console.log(result)
                                if (result && result.position) {
                                    self.lng = result.position.lng;
                                    self.lat = result.position.lat;
                                    self.center = [self.lng, self.lat];
                                    self.loaded = true;
                                    self.$nextTick();
                                }
                            });
                        }
                    }
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
            //点击筛选隐藏效果
            $('.yx_search span').click(function () {
                $(this).find('ul').slideDown().parent('span').siblings().find('ul').hide();
                event.stopPropagation();
            });
            //城市选中效果
            $('.yx_search ul li').click(function (event) {
                $(this).parent().prev().text($(this).text());
                $(this).parent().hide();
                event.stopPropagation();
            });
            //点击选中效果
            $('.thing ul li').click(function () {
                $(this).addClass('active').siblings().removeClass('active');
            });
        }
    }
</script>

<style scoped>

</style>