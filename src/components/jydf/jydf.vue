<template>
  <div class="mainpage wdxh">
    <div class="titleInfo font-size-top">金域东方</div>
    <swiper class="swiperImgConter" :options="swiperOption" ref="mySwiper">
      <!-- slides -->
      <swiper-slide><img class="swiperImg" src="../../assets/JYDF/JYDF5.jpeg"></swiper-slide>
      <swiper-slide><img class="swiperImg" src="../../assets/JYDF/JYDF1.png"></swiper-slide>
      <swiper-slide><img class="swiperImg" src="../../assets/JYDF/JYDF2.png"></swiper-slide>
      <swiper-slide><img class="swiperImg" src="../../assets/JYDF/JYDF4.png"></swiper-slide>
      <swiper-slide><img class="swiperImg" src="../../assets/JYDF/JYDF3.png"></swiper-slide>
      <!-- Optional controls -->
      <div class="swiper-pagination"  slot="pagination"></div>
      <div class="swiper-scrollbar"   slot="scrollbar"></div>
    </swiper>
    <introduce :proContent="zzPro"></introduce>
    <el-input v-model="name" placeholder="姓名（必填）"></el-input>
    <el-input v-model="phone" placeholder="联系电话(必填)"></el-input>
    <el-button type="info" @click="addSubscribe">提交</el-button>
    <el-button type="danger"><a style="color: #fff" href="tel:02558917591">致电售楼处预约</a></el-button>
  </div>
</template>

<script>
  import '../NanJingWDM/NanJingWDM.scss'
  import introduce from '../NanJingWDM/introduce/introduce.vue'
  import subscribeApi  from '../../api/collect'
  import './jydf.scss'
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
        zzPro:JYDFPRO
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
        var that= this;
        if(this.name==null || this.name==""){
          alert("姓名不能为空！")
          return;
        }
        if(this.phone==null || this.phone==""){
          alert("手机号不能为空！")
          return;
        }

        subscribeApi.addSubscribe(this.phone,this.name,'JYDF').then((response) =>{
          alert("预约成功！")
          that.phone = "";
          that.name = ""

        }).catch((response)=>{
          if(response.message!=null || response.message!="")
            alert(response.message)
          else alert("预约失败！")
          that.phone = "";
          that.name = ""
        })
      }
    }
  }
</script>
