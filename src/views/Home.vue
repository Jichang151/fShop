<template>
    <div id="home">
        <!-- 导航 -->
        <van-nav-bar title="商城">
            <van-icon name="search" slot="left"></van-icon>
            <van-icon name="cart" slot="right"></van-icon>
        </van-nav-bar>

        <!-- 轮播图 -->
        <div class="carousel">
            <van-swipe :autoplay="2000" >
                <van-swipe-item class="carousel-item" v-for="(item, index) in images" :key="index">
                    <img v-lazy= item.imgSrc>
                </van-swipe-item>
            </van-swipe>
        </div>

        <!-- 热门商品 -->
        <div class="hot">
            <p class="hot-title">热门商品</p>
            <swiper class="hot-swiper" :options = "swiperOption">
                <swiper-slide v-for="(item,index) in hotProducts" :key="index">
                    <div class="hot-swiper-content">
                        <img :src="item.imgSrc" alt="失敗">
                        <div>{{item.name}}</div>
                        <div>￥{{item.price}}</div>
                    </div>
                </swiper-slide>
            </swiper>
        </div>

        <!-- 推荐商品 -->
        <div class="variety">
            <p class="variety-title">推荐商品</p>
            <ul class="variety-content">
                <li v-for="(item,index) in varietyItem" :key="index">
                    <img :src="item.imgSrc" alt="">
                    <div>{{item.name}}</div>
                    <div>￥{{item.price}}</div>
                </li>
            </ul>
        </div>
    </div>
</template>
<style lang="scss" >
#home{
    margin-bottom:50px;
}
    .carousel{
        height:10rem;
        margin-bottom:10px;
        &-item{
            img{
                width:100%;
                height:10rem;
            }
        }
    }
    .hot{
        margin-bottom:10px;
        &-title{
            // width:100%;
            height:2rem;
            line-height:2rem;
            // text-align:center;
            padding-left:1rem;
            color:red;
        }
        &-swiper{
            &-content{
                width:5rem;
                // height:5rem;
                text-align:center;
                font-size: 0.5rem;
                text-align:center;
                img{
                width:5rem;
                height:5rem;
                }
            }
        }
    }
    .variety{
        &-title{
            // width:100%;
            height:2rem;
            line-height:2rem;
            font-size:0.8rem;
            padding-left:1rem;
            color:brown;
        }
        &-content{
            width:100%;
            display: flex;
            // flex-direction: row;
            flex-wrap:wrap;
            justify-content: center;
            li{
                // width:10rem;
                font-size: 0.5rem;
                // text-align:center;
                img{
                    width:8rem;
                    height:8rem;
                }
                div{
                    padding-left:1rem;

                }
            }
        }
    }
    
</style>
<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css';
export default {
    
  data () {
    return {
      images: [
        {
            name: 'mate20',
            imgSrc: '//img14.360buyimg.com/n1/s450x450_jfs/t26119/239/992259869/473535/e50fe16b/5bbf1f1cNb29d0b65.jpg'
        }, {
            name: '8X',
            imgSrc: '//img14.360buyimg.com/n1/s450x450_jfs/t1/204/12/2599/82133/5b963c1aEd9fa390e/970adadd473ff485.jpg'
        }, {
            name: '9i',
            imgSrc: '//img11.360buyimg.com/n1/s450x450_jfs/t19951/206/1198351272/188769/a0810744/5b17a8a1N2a25a442.jpg'
        }
      ],
      hotProducts: [
        {
            name: 'mate20',
            imgSrc: '//img14.360buyimg.com/n1/s450x450_jfs/t26119/239/992259869/473535/e50fe16b/5bbf1f1cNb29d0b65.jpg',
            price:'3999'
        }, {
            name: '8X',
            imgSrc: '//img14.360buyimg.com/n1/s450x450_jfs/t1/204/12/2599/82133/5b963c1aEd9fa390e/970adadd473ff485.jpg',
            price:'2889'
        }, {
            name: '9i',
            imgSrc: '//img11.360buyimg.com/n1/s450x450_jfs/t19951/206/1198351272/188769/a0810744/5b17a8a1N2a25a442.jpg',
            price:'1399'
        },
        {
            name: 'mate20',
            imgSrc: '//img14.360buyimg.com/n1/s450x450_jfs/t26119/239/992259869/473535/e50fe16b/5bbf1f1cNb29d0b65.jpg',
            price:'3999'
        }, {
            name: '8X',
            imgSrc: '//img14.360buyimg.com/n1/s450x450_jfs/t1/204/12/2599/82133/5b963c1aEd9fa390e/970adadd473ff485.jpg',
            price:'2889'
        }, {
            name: '9i',
            imgSrc: '//img11.360buyimg.com/n1/s450x450_jfs/t19951/206/1198351272/188769/a0810744/5b17a8a1N2a25a442.jpg',
            price:'1399'
        }
      ],
      varietyItem:[
          {
            name: 'mate20',
            imgSrc: '//img14.360buyimg.com/n1/s450x450_jfs/t26119/239/992259869/473535/e50fe16b/5bbf1f1cNb29d0b65.jpg',
            price:'3999'
        }, {
            name: '8X',
            imgSrc: '//img14.360buyimg.com/n1/s450x450_jfs/t1/204/12/2599/82133/5b963c1aEd9fa390e/970adadd473ff485.jpg',
            price:'2889'
        }, {
            name: '9i',
            imgSrc: '//img11.360buyimg.com/n1/s450x450_jfs/t19951/206/1198351272/188769/a0810744/5b17a8a1N2a25a442.jpg',
            price:'1399'
        },
        {
            name: 'mate20',
            imgSrc: '//img14.360buyimg.com/n1/s450x450_jfs/t26119/239/992259869/473535/e50fe16b/5bbf1f1cNb29d0b65.jpg',
            price:'3999'
        }, {
            name: '8X',
            imgSrc: '//img14.360buyimg.com/n1/s450x450_jfs/t1/204/12/2599/82133/5b963c1aEd9fa390e/970adadd473ff485.jpg',
            price:'2889'
        }, {
            name: '9i',
            imgSrc: '//img11.360buyimg.com/n1/s450x450_jfs/t19951/206/1198351272/188769/a0810744/5b17a8a1N2a25a442.jpg',
            price:'1399'
        }
      ],
      swiperOption:{
        slidesPerView:3
      }
    }
    
  },
  components:{
      swiper,
      swiperSlide
  }
}
</script>


