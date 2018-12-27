<template>
    <div class="wraper top_bg-cor">
        <page-header :isActive="isActive"></page-header>
        <!--top-menu-->
        <div class="about_nav-box kj_yf-box">
            <div class="about_ctn">
                <h2>科技+研发</h2>
                <div class="about_list">
                    <a href="/kj-yf_1">科技+研发</a>
                    <a href="/kj-yf_2">建筑机械工程实验室</a>
                    <a class="active">研究成果专利</a>
                </div>
            </div>
        </div>
        <div class="kj_yf-wrap">
            <div class="cg_zl">
                <div class="cttn-show animated fadeInUp">
                    <h3>风电塔架升降机</h3>
                    <p>依托国家质检总局科技计划项目《风电塔架专用升降机及相关检测技术的研究》，项目编号：2010QK055。</p>
                    <p>研制完成了具有自主知识产权的风电塔架专用升降机。
                        该项目2014年通过了甘肃省科技厅组织的科技成果鉴定（鉴定证书号：甘科鉴字（2014）第0003号），进行了成果登记。并参与编制完成了《风电塔架专用升降机技术规范》，甘肃省质量技术监督局第117号公告发布为地方标准，标准号：DB62/T2265-2012，成为国内风电专用升降机的首部技术规范。</p>
                    <p>该项目《风电塔架智能检测平台的研究与应用》</br>
                        荣获2016年度甘肃省科技进步三等奖（证书号：2016-J3-084-D1）；</br>
                        荣获2014年度甘肃省建设投资（控股）集团总公司科学技术进步一等奖（证书号：2014-GJKJ1-01-R01）。</p>
                    <p>该项目申请实用新型专利13项，全部授权。申请发明4项，授权2项，</br>
                        其中《一种圆弧齿型齿条加工设备》发明专利荣获2015年度甘肃省人民政府专利奖二等奖（证书号：2015-J2-002），</br>
                        《圆弧形齿条及其加工工艺和圆弧齿成型装置》发明专利荣获2016年度甘肃省专利奖三等奖（证书号：2016-ZL-048）</p>
                    <p>
                        该项目已完成成果转化，进入批量化生产阶段，在武威甘肃建投新能源装备制造产业园内投资4.8亿元，建设了风电装备制造基地，将进行自主知识产权的风电塔架升降机和风电塔筒智能化检修平台的生产制造。基地占地423.98 亩，可实现年产17750台套风电塔机升降机和风电塔筒的制作安装。已在景泰大唐风电场和酒泉风电场投入使用，运行效果良好。</p>
                </div>
                <div class="cttn-show animated show-2">
                    <h3>QTZ400大型塔式起重机</h3>
                    <p>该项目于2015年7月16日通过甘肃省科学技术厅成果鉴定（鉴定证书号：甘科鉴字[2015]第0028号），并已通过验收，进行了成果转化，进入了批量化生产。</p>
                    <p>该项目《QTZ400塔式起重机的研制与应用》</br>
                        荣获2016年度甘肃省建设投资（控股）集团总公司科学技术进步二等奖（证书号：2016-GJKJ2-02）。</p>
                    <p>
                        该项目申请实用新型专利6项，全部授权。申请发明1项，已授权。项目已完成成果转化，进入批量化生产阶段，在甘肃建投装备制造有限公司起重机事业部进行批量化生产，可实现年产100台大型塔式起重机。</p>
                </div>
                <div class="cttn-show animated show-3">
                    <h3>GJR400全液压旋挖钻机</h3>
                    <p>GJR400全液压旋挖钻机项目已完成样机的试制，并已通过西安筑路机械测试中心的型式试验检测。正在准备省级科技成果的鉴定工作。</p>
                    <p>该项目申请实用新型专利5项，已授权3项。申请发明专利3项，已全部受理。项目正在进行小批量试产阶段，在甘肃建投装备制造有限公司工程机械事业部进行生产，可实现年产80台型旋挖钻机。</p>
                </div>
                <div class="cttn-show animated show-4">
                    <h3>专用汽车</h3>
                    <p>
                        已完成了GSK5420THB混凝土泵车、GSK5250GJB混凝土搅拌运输车、GSK5160ZYS4压缩式垃圾车等12款专用汽车的研发、成果转化及产业化推广、关键技术的研究和新技术的优化升级等工作，并已通过甘肃建投科学技术委员会工程机械专业技术委员会的验收鉴定。</p>
                    <p>12款专用汽车产品通过了国家轿车质量监督检验中心、国家汽车质量监督检验中心（襄阳）的检测，</br>
                        2015年12月取得国家工信部车辆生产企业及产品公告，顺利通过产品准入、3C认证，已具有专用汽车研发资质。</p>
                    <p>该项目已申请实用新型专利11项，授权7项。申请发明专利1项，已受理。制定企业标准12部，并已发布实施。 </p>
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
                    xw: false,
                    pp: false,
                    zz: false,
                    kj: true,
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

            $(window).scroll(function () {
                const scrollTop = $(this).scrollTop();
                const scrop_1 = $('.show-2').offset().top;
                const scrop_2 = $('.show-3').offset().top;
                const scrop_3 = $('.show-4').offset().top;
                if (scrollTop >= scrop_1 - 400 && scrollTop < scrop_2 - 400) {
                    $('.show-2').addClass('fadeInUp');
                } else if (scrollTop >= scrop_2 - 400 && scrollTop < scrop_3 - 400) {
                    $('.show-3').addClass('fadeInUp');
                } else if (scrollTop >= scrop_3 - 400) {
                    $('.show-4').addClass('fadeInUp');
                }
            });
        }
    }
</script>