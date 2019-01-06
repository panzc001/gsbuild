<template>
    <div class="wraper top_bg-cor">
        <page-header :isActive="isActive"></page-header>
        <!--top-menu-->
        <div class="about_nav-box con_tact-box">
            <div class="about_ctn">
                <h2>联系我们</h2>
            </div>
        </div>
        <div class="map_ctn-wrap ">
            <!--静态地图-->
            <div :style="{width:'690px',height:'490px'}" class="animated fadeInLeft">
                <el-amap vid="amapDemo" :zoom="zoom" :center="center" class="amap-demo" :style="{width:'690px',height:'490px'}">
                    <el-amap-marker vid="component-marker" :position="componentMarker.position" :content-render="componentMarker.contentRender" ></el-amap-marker>
                    <el-amap-marker v-for="(marker, index) in markers" :position="marker.position" :events="marker.events" :visible="marker.visible" :draggable="marker.draggable" :vid="index"></el-amap-marker>
                </el-amap>
            </div>
            <!--右边信息盒子-->
            <div class="message animated fadeInRight">
                <ul>
                    <li class="active" v-on:click="changePosition">
                        <p>甘肃建投重工科技有限公司</p>
                        <p>地址：甘肃省兰州市兰州新区昆仑山大道18号<br/>电话：0931-2903062</p>
                    </li>
                    <li  v-on:click="chnageDraggle">
                        <p>甘肃建投重工科技有限公司营销公司</p>
                        <p>地址：甘肃省兰州市兰州中心3306<br/>电话：0931-2796748</p>
                    </li>
                    <li  v-on:click="addMarker">
                        <p>甘肃高漠环境产业发展有限公司</p>
                        <p>地址：兰州市兰州中心3305<br/>电话：0931-2796748</p>
                    </li>
                    <li  v-on:click="removeMarker">
                        <p>甘肃省建筑机械工程实验室有限公司 </p>
                        <p>兰州市七里河区彭家镇彭家坪228号<br/>电话：0931-2903049</p>
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
    import textMap from '../components/textMap.vue'
    import animate from 'animate.css'
    import $ from 'jquery'
    import Swiper from 'swiper'
    export default {
        components: {pageHeader, pageFooter,textMap},
        data() {
            let self = this;
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
                count: 1,
                slotStyle: {
                    padding: '2px 8px',
                    background: '#eee',
                    color: '#333',
                    border: '1px solid #aaa'
                },
                zoom: 14,
                center: [103.695081, 36.531658],
                markers: [
                    {
                        position: [103.695081, 36.531658],
                        events: {
                            click: () => {
                                alert('click marker');
                            },
                            dragend: (e) => {
                                console.log('---event---: dragend')
                                this.markers[0].position = [e.lnglat.lng, e.lnglat.lat];
                            }
                        },
                        visible: true,
                        draggable: false,
                        template: '<span>1</span>',
                    }
                ],
                renderMarker: {
                    position: [121.5273285, 31.21715058],
                    contentRender: (h, instance) => {
                        // if use jsx you can write in this
                        // return <div style={{background: '#80cbc4', whiteSpace: 'nowrap', border: 'solid #ddd 1px', color: '#f00'}} onClick={() => ...}>marker inner text</div>
                        return h(
                            'div',
                            {
                                style: {background: '#80cbc4', whiteSpace: 'nowrap', border: 'solid #ddd 1px', color: '#f00'},
                                on: {
                                    click: () => {
                                        const position = this.renderMarker.position;
                                        this.renderMarker.position = [position[0] + 0.002, position[1] - 0.002];
                                    }
                                }
                            },
                            ['marker inner text']
                        )
                    }
                },
                componentMarker: {
                    position: [121.5273285, 31.21315058],
                    contentRender: (h, instance) => h(exampleComponents,{style: {backgroundColor: '#fff'}, props: {text: 'father is here'}}, ['xxxxxxx'])
                },
                slotMarker: {
                    position: [121.5073285, 31.21715058]
                }
            }
        },
        methods:{
            onClick(){
                this.count += 1;
            },
            changePosition() {
                this.markers[0].position = [103.695081, 36.531658];
                this.center = [103.695081,36.531658];
            },
            chnageDraggle(){
                this.markers[0].position = [103.845257,36.055688];
                this.center = [103.845257,36.055688];
            },
            addMarker(){
                this.markers[0].position = [103.77492,36.06898];
                this.center = [103.77492,36.06898];
            },
            removeMarker(){
                this.markers[0].position = [103.701677,36.059032];
                this.center = [103.701677,36.059032];
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
    };
</script>