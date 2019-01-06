<template>
    <div class="amap-page-container">
        <el-amap vid="amapDemo" :zoom="zoom" :center="center" class="amap-demo">
            <el-amap-marker vid="component-marker" :position="componentMarker.position" :content-render="componentMarker.contentRender" ></el-amap-marker>
            <el-amap-marker v-for="(marker, index) in markers" :position="marker.position" :events="marker.events" :visible="marker.visible" :draggable="marker.draggable" :vid="index"></el-amap-marker>
        </el-amap>
        <div class="message animated fadeInRight">
            <!--右边信息盒-->
            <ul>
                <li class="active" v-on:click="changePosition">
                    <p>甘肃建投重工科技有限公司</p>
                    <p>地址：甘肃省兰州市兰州新区昆仑山大道18号<br/>电话：0931-2903062</p>
                </li>
                <li>
                    <p>甘肃建投重工科技有限公司营销公司</p>
                    <p>地址：甘肃省兰州市兰州中心3306<br/>电话：0931-2796748</p>
                </li>
                <li  >
                    <p>甘肃高漠环境产业发展有限公司</p>
                    <p>地址：兰州市兰州中心3305<br/>电话：0931-2796748</p>
                </li>
                <li >
                    <p>甘肃省建筑机械工程实验室有限公司 </p>
                    <p>兰州市七里河区彭家彭镇彭家坪228号<br/>电话：0931-2903049</p>
                </li>
            </ul>

        </div>
    </div>
</template>

<script>
    module.exports = {
        name: 'amap-page',
        data() {
            return {
                count: 1,
                slotStyle: {
                    padding: '2px 8px',
                    background: '#eee',
                    color: '#333',
                    border: '1px solid #aaa'
                },
                zoom: 14,
                center: [121.5273285, 31.21515044],
                markers: [
                    {
                        position: [121.5273285, 31.21515044],
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
            };
        },
        methods: {
            onClick() {
                this.count += 1;
            },
            changePosition() {
                this.markers[0].position = [103.695081, 36.531658];
                this.center = [103.695081,36.531658];
            },
        }
    };
</script>

<style scoped>
    .amap-page-container{
        display:flex;
        width:1100px;
        -webkit-justify-content: space-between;
        margin:30px auto;
    }
    .amap-demo {
        height: 490px;
        width:690px;
    }
    .message{
        width:380px;
        height:490px;
        background-color: rgba(106, 189, 255, 1);
    }
    .message ul li {
        width: 364px;
        height: 110px;
        padding-top: 7px;
        margin: 4px auto;
    }
</style>