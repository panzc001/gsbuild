<template>
    <div class="box">
        <div class="swiper-container gallery-top">
            <div class="swiper-wrapper box1">
                <div class="swiper-slide" style="background:#FAFAFA ;"><img src="../assets/Group 13.png" alt=""></div>
                <div class="swiper-slide" style="background:yellow;"><img src="../assets/cg_4.png" alt=""></div>
                <div class="swiper-slide" style="background:blue;"><img src="../assets/cg_5.png" alt=""></div>
                <div class="swiper-slide" style="background:#ac0;"><img src="../assets/cg_6.png" alt=""></div>
                <div class="swiper-slide" style="background:red;"><img src="../assets/cg_7.png" alt=""></div>
                <div class="swiper-slide" style="background:purple;"><img src="../assets/cg_8.png" alt=""></div>
            </div>
        </div>
        <div class="box3">
            <div class="swiper-button-next" ><img src="../assets/Group 11.png" alt=""></div>
            <div class="swiper-container gallery-thumbs">
                <div class="swiper-wrapper box2">
                    <div class="swiper-slide swiper-slide1" ><img src="../assets/Group 13.png" alt=""></div>
                    <div class="swiper-slide swiper-slide1" style="background:yellow;"><img src="../assets/cg_4.png" alt=""></div>
                    <div class="swiper-slide swiper-slide1" style="background:blue;"><img src="../assets/cg_5.png" alt=""></div>
                    <div class="swiper-slide swiper-slide1" style="background:#ac0;"><img src="../assets/cg_6.png" alt=""></div>
                    <div class="swiper-slide swiper-slide1" style="background:red;"><img src="../assets/cg_7.png" alt=""></div>
                    <div class="swiper-slide swiper-slide1" style="background:purple;"><img src="../assets/cg_8.png" alt=""></div>
                </div>
            </div>
            <div class="swiper-button-prev"><img src="../assets/Group 12.png" alt=""></div>
        </div>
    </div>
</template>

<script>
    import Swiper from 'swiper'
    export default {
        name: "pjgySlider",
        mounted() {
            var galleryThumbs = new Swiper('.gallery-thumbs', {
                direction: 'vertical',
                spaceBetween: 10,
                slidesPerView: 2,
                freeMode: true,
                watchSlidesVisibility: true,
                watchSlidesProgress: true,
            });
            var galleryTop = new Swiper('.gallery-top', {
                controller: {
                    control: [galleryThumbs,galleryTop],
                    inverse: true,
                    by: 'slide',
                },
                // spaceBetween: 10,
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                },
                thumbs: {
                    swiper: galleryThumbs
                }

            });
        }
    }

</script>

<style scoped>
    @import '../common/css/swiper.min.css';
.box{
    width:1060px;
    height:430px;
    margin:30px auto;
    display:flex;
    -webkit-justify-content: space-between;
}
    .box1 img{
        width:750px;
        height:430px;
    }
    .gallery-top{
        width:750px;
        height:430px;
    }
    .box3{
        width:290px;
        height:430px;
        position:relative;
    }
    .swiper-button-next{
        width:290px;
        height:50px;
        position:absolute;
        left:0;
        top:23px;
    }
    .swiper-button-prev{
        width:290px;
        height:50px;
        position:absolute;
        left:0;
        top:400px;
    }
    .gallery-thumbs{
        width:290px;
        height:310px;
        position:absolute;
        left:0;top:60px;
        overflow:hidden;
    }
    .box2{
        width:290px;
        height:310px;
    }
    .box2 img{
        width:290px;
        height:150px;
    }
    .swiper-slide1{
        width:290px;
        height:150px;
    }
</style>