<template>
    <div class="introduce">
      <!--<div class="title font-size-top">南京万达茂</div>-->
      <swiper :options="swiperOptionintroduce" ref="mySwiperintroduce">
        <!-- slides -->
        <swiper-slide>
          <div class="swiper-introduce font-size-body">
            <div class="int-title font-size-title">推荐理由</div>
            <div class="int-body">&nbsp;&nbsp;&nbsp;&nbsp;1,（品牌影响力）万达集团品牌房企，150亿文旅旗舰，</div>
            <div class="int-body">&nbsp;&nbsp;&nbsp;&nbsp;2.（辐射能力）  万达新中心，拥城际核心资源，宁镇杨新风口。</div>
            <div class="int-body">&nbsp;&nbsp;&nbsp;&nbsp;3.（交通便利）  地铁2号线和地铁4号线直达主城主要商圈，规划中的宁镇城际紧邻项目，</div>
            <div class="int-body">&nbsp;&nbsp;&nbsp;&nbsp;4全方位商务配套 360°都市生活圈依托120万平米大型文化旅游项目，万达集团全新产品设计，轻松享有全方位配套。全方位满足不同级别的商务接待需求，工作生活同样轻松自如。</div>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="swiper-introduce font-size-body">
            <div class="int-title font-size-title">项目介绍</div>
            <div class="int-body">&nbsp;&nbsp;&nbsp;&nbsp;南京万达茂是万达文化旅游城的精华版，是万达集团斥资150亿元在南京打造的首个大型文化旅游旗舰项目，总体量120万方，集“文化、旅游、商业、商务、人居”五位为一体，涵盖全天候文旅科技主题乐园、儿童主题乐园、万达广场、世界风情室外步行街、5A写字楼、精品住宅、万达茂·中心等7大体验业态，不仅是为南京服务，更是辐射“大南京”200公里半径都市圈的现代超大型都市文旅旗舰项目。</div>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="swiper-introduce font-size-body">
            <div class="int-title font-size-title">区域介绍</div>
            <div class="int-body">&nbsp;&nbsp;&nbsp;&nbsp;1,项目北临广志路，南临仙林大道，西侧为守敬路，东侧为湖东路；</div>
            <div class="int-body">&nbsp;&nbsp;&nbsp;&nbsp;2.区域交通配套</div>
            <div class="int-body">&nbsp;&nbsp;&nbsp;&nbsp;3.三线地铁畅达南京主城，二号线，四号线（堪称南京的换乘大王）、15号线对接宁镇扬。</div>
          </div>
        </swiper-slide>
      </swiper>
    </div>
</template>

<script>
    import  './introduce.scss'
    export default{
        data(){
            return {
              swiperOptionintroduce: {
                autoplay: 5000,
                loop: true,
                pagination: '.swiper-pagination',
                paginationClickable :true,
              }
            }
        },
        components: {},
        created(){
        },
        mounted(){
        },
        methods: {}
    }
</script>
