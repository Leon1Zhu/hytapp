<template>
    <div class="mainpage">
      <div class="titleInfo font-size-top">南京万达茂</div>
      <swiper :options="swiperOption" ref="mySwiper">
        <!-- slides -->
        <swiper-slide><img class="swiperImg" src="../../assets/pic-1.jpg"></swiper-slide>
        <swiper-slide><img class="swiperImg" src="../../assets/pic-2.jpg"></swiper-slide>
        <swiper-slide><img class="swiperImg" src="../../assets/pic-3.jpg"></swiper-slide>
        <swiper-slide><img class="swiperImg" src="../../assets/pic-4.jpg"></swiper-slide>
        <swiper-slide><img class="swiperImg" src="../../assets/pic-5.jpg"></swiper-slide>
        <swiper-slide><img class="swiperImg" src="../../assets/pic-6.jpg"></swiper-slide>
        <swiper-slide><img class="swiperImg" src="../../assets/pic-7.jpg"></swiper-slide>
        <!-- Optional controls -->
        <div class="swiper-pagination"  slot="pagination"></div>
        <div class="swiper-scrollbar"   slot="scrollbar"></div>
      </swiper>
      <introduce></introduce>
      <el-input v-model="name" placeholder="姓名（必填）"></el-input>
      <el-input v-model="phone" placeholder="联系电话(必填)"></el-input>
      <el-button type="info" @click="addSubscribe">提交</el-button>
      <el-button type="danger">致电售楼处预约</el-button>
    </div>
</template>

<script>
import './NanJingWDM.scss'
import introduce from './introduce/introduce.vue'
import subscribeApi  from '../../api/collect'
    export default{
        data(){
            return {
              swiperOption: {
                autoplay: 5000,
                loop: true,
                pagination: '.swiper-pagination',
                paginationClickable :true,
              },
              phone:null,
              name:null,
            }
        },
        components: {
            "introduce": introduce
        },
        created(){
        },
        mounted(){
        },
        methods: {
            addSubscribe(){
              if(this.phone==null || this.phone==""){
                 alert("手机号不能为空！")
              }
              if(this.name==null || this.name==""){
                alert("姓名不能为空！")
              }
              subscribeApi.addSubscribe().then((response) =>{
                console.log(11111)
              })/*.catch((response)=>{
                console.log(22222)
              })*/
            }
        }
    }
</script>
