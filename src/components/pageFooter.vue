<template>
    <div class="footer">
        <div class="cnt_show">
            <div class="normal_lx">
                <h1>常用链接</h1>
                <p>
                    <a href="#">联系我们</a>
                    <a href="#">网站地图</a>
                    <a href="#">负责声明</a>
                </p>
                <div class="yy">
                    <a href="#"><img src="../assets/wx_icon.png"/></a>
                    <a href="#"><img src="../assets/wb_icon.png"/></a>
                    <a href="#"><img src="../assets/qq_icon.png"></a>
                </div>
                <div class="fot_ewm">
                    <p>
                        <img src="../assets/ewm.png"/>
                        <span>官方微信</span>
                    </p>
                    <p>
                        <img src="../assets/ewm.png"/>
                        <span>手机网站</span>
                    </p>
                </div>
            </div>
            <ul class="fot_nav">
                <li>
                    <div class="sm_list">
                        <a>关于</a>
                        <a>公司介绍</a>
                        <a>公司战略</a>
                        <a>企业文化</a>
                        <a>发展历程</a>
                        <a>公司荣誉</a>
                        <a>社会责任</a>
                        <a>人才招聘</a>
                    </div>
                </li>
                <li>
                    <div class="sm_list">
                        <a>新闻中心</a>
                        <a>公司新闻</a>
                        <a>集团动态</a>
                        <a>行业新闻</a>
                        <a>视频中心</a>
                    </div>
                </li>
                <li>
                    <div class="sm_list">
                        <a>产品中心</a>
                        <a>环卫装备</a>
                        <a>建筑装备</a>
                        <a>运输装备</a>
                    </div>
                </li>
                <li>
                    <div class="sm_list">
                        <a>制造+服务</a>
                        <a>环卫运营</a>
                        <a>商砼服务</a>
                    </div>
                </li>
                <li>
                    <div class="sm_list">
                        <a>营销服务</a>
                        <a>营销网络</a>
                        <a>售后服务</a>
                        <a>配件供应</a>
                        <a>技术信息</a>
                        <a>留言咨询</a>
                    </div>
                </li>
            </ul>
        </div>
        <div class="bot_bt">
            <div class="btt_wrap">
                <ul class="rig_tt">
                    <li>服务热线：400-888-2961</li>
                </ul>
                <ul class="lef_tt">
                    <li>Copyright 2018 All rights reserved</li>
                    <li>甘ICP备12345678号</li>
                </ul>
            </div>
        </div>
    </div>
</template>
<script>
    import $ from 'jquery'

    export default {
        mounted() {
            $('.normal_lx').css('height', $('.fot_nav').height());
        }
    }
</script>