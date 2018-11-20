<template>
  <div  id="mainpage"  class="mainLayout" :class="{'layout-hide-text': spanLeft < 5}">
  <Row type="flex">
    <Col :span="spanLeft" class="layout-menu-left" >
    <Menu   themem="dark" width="auto" :accordion="accordion" >
      <div class="layout-logo-left">
        <div class="bgImg" :class="{ 'smallLogo' : spanLeft < 4 }">  </div>
        <!--<img class="fire-cow" src="../../assets/logo2.png">-->
      </div>
      <div class="big-menu" v-show="spanLeft === 4">
        <div class="fire-cow-menu" v-for="(menuItem,index) in menu">
          <Submenu :name="index" v-if="menuItem.hasChild" >
            <template slot="title">
              <Icon  v-if="!ISNULL(menuItem.menuIcon)" :type="menuItem.menuIcon" />
              {{menuItem.menuName}}
            </template>
            <MenuItem   v-for="(childrenItem,indexChildrenT) in menuItem.childMenuList" :name="index+'-'+indexChildrenT" @click.native="goPage(childrenItem.linkHref)" >
              <Icon  v-if="!ISNULL(menuItem.menuIcon)" :type="menuItem.menuIcon" />
              <span >{{childrenItem.menuName}}</span>
            </MenuItem>
          </Submenu>
          <MenuItem :name="index" v-else @click.native="goPage(menuItem.linkHref)">
            <Icon  v-if="!ISNULL(menuItem.menuIcon)" :type="menuItem.menuIcon" />
            <span>{{menuItem.menuName}}</span>
          </MenuItem>
        </div>
      </div>

      <div class="small-menu" v-show="spanLeft === 2">
        <Dropdown  v-for="(menuItem,index) in menu" placement="right">
          <div >
            <Icon  v-if="!ISNULL(menuItem.menuIcon)" :type="menuItem.menuIcon" />
          </div>
          <DropdownMenu slot="list"  v-if="menuItem.hasChild">
            <DropdownItem  v-for="(childrenItem,indexChildrenT) in menuItem.childMenuList" @click.native="goPage(childrenItem.linkHref)"  v-if="!childrenItem.needPower || $store.getters.getAccountType === '管理员'">
              <Icon  v-if="!ISNULL(childrenItem.menuIcon)" :type="childrenItem.menuIcon" />
              <span>{{childrenItem.menuName}}</span>
            </DropdownItem>
          </DropdownMenu>

          <DropdownMenu slot="list"  v-else>
            <DropdownItem  @click.native="goPage(menuItem.linkHref)" >
              <Icon  v-if="!ISNULL(menuItem.menuIcon)" :type="menuItem.menuIcon" />
              <span>{{menuItem.menuName}}</span>
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </div>

    </Menu>
    </Col>
    <Col :span="spanRight" class="main-content-span">
    <div class="layout-header">
      <Button type="text" @click="toggleClick">
        <Icon type="md-menu" size="32"/>
      </Button>
      <div class="user-tool-bar">
        <div class="user-info">
          <Dropdown>
            <a  href="javascript:void(0)">
              欢迎您！XX
              <Icon type="arrow-down-b"></Icon>
            </a>
            <DropdownMenu slot="list" class="user-operator">
              <DropdownItem><i  class="iconfont icon-xiugaimima" ></i>修改密码</DropdownItem>
              <DropdownItem divided> <i  class="iconfont icon-caozuo_zhuxiao_tuichudenglu" ></i>退出系统</DropdownItem>
            </DropdownMenu>
          </Dropdown>
          <!--<div class="user-header">
            <img  src="../../assets/header.png" />
          </div>-->
        </div>

        <div class="email-count">
          <Badge :count="17" overflow-count="999">
            <Icon type="ios-notifications-outline" size="26"/>
          </Badge>
        </div>


      </div>
    </div>
    <div class="menu-list-content">
      <Tag v-for="(item,index) in menuList" :class="{ activeTag : item.isActive }" @on-close="closePage(index)"  @click.native="changePgae(index,item.link)" type="dot" :closable="index > 0 "  checkable>{{item.name}}</Tag>
    </div>

    <div class="layout-content">
      <div class="layout-content-main">
        <router-view  >
          <!-- 这里是不被缓存的视图组件 -->
        </router-view>
      </div>
    </div>
    <!--<div class="layout-copy">
      2011-2016 &copy; TalkingData
    </div>-->
    </Col>
  </Row>
  </div>
</template>

<script>
  import '../../menu'
    export default{
      data () {
        return {
          spanLeftSmallValue:2,
          spanRightBigValue:22,
          spanleftValue:4,
          spanRightValue: 20,
          spanLeft: 4,
          spanRight: 20,
          accordion:true,
          menu:MENU,
        }
      },
      computed: {
        iconSize () {
          return this.spanLeft === this.spanleftValue ? 14 : 24;
        },
        menuList(){
            return this.$store.getters.getMenuList;
        }
      },
      mounted(){
          for(let item in this.$store.getters.getMenuList){
              if(this.$store.getters.getMenuList[item].isActive){
                this.$router.push({ path:this.$store.getters.getMenuList[item].link })
                return ''
              }
          }
        this.$router.push({ path:this.$store.getters.getMenuList[this.$store.getters.getMenuList.length-1].link })
      },
      methods: {
        toggleClick () {
          if (this.spanLeft === this.spanleftValue) {
            this.spanLeft = this.spanLeftSmallValue;
            this.spanRight = this.spanRightBigValue;
          } else {
            this.spanLeft = this.spanleftValue;
            this.spanRight = this.spanRightValue;
          }
        },
        goPage(path){
          if(this.$store.getters.getMenuList.length>8){
            let flag = false;
            let menuList = this.$store.getters.getMenuList;
            for(let item in menuList){
                if(menuList[item].link === path){
                    flag = true;
                    break;
                }
            }
            if(!flag){
              this.$warning('操作错误', '标签页最多存在8个，请关闭之前的标签页再重复此操作！');
              return;
            }

          }


          this.$router.push({ path:path })
        },
        changePgae(index,path){
            this.$store.commit('changeActivePage',index)
            this.$router.push({ path:path })
        },
        closePage(index){
            let flag = false;
            if(this.$store.getters.getMenuList[index].isActive){
                flag = true
            }
            this.$store.dispatch('deletePageAction',index)
            if(flag){
              let length = this.$store.getters.getMenuList.length
              let activelink = this.$store.getters.getMenuList[length-1].link
              this.$router.push({ path:activelink })
            }


        }
      }
    }
</script>

<style lang="scss" rel="stylesheet/scss" >
  @import '../../common/css/globalscss.scss';
    .mainLayout{
      border: 1px solid #d7dde4;
      background: #f5f7f9;
      position: relative;
      border-radius: 4px;
      overflow-x: auto;
      overflow-y: hidden;
      height:100%;
      .ivu-menu-item>i {
        margin-bottom: 3px;
      }
      .bgImg{
        // background: url("../../assets/logo2.png");
        height:40px;
        width:100%;
        background-size:cover;
        transition: all .2s;
        margin-top:2%;
      }
      .bgImg.smallLogo{
        // background: url("../../assets/logo2.png");
        height:40px;
        width: 81%;
        margin-left: 16%;
        background-size:cover;
      }
      .user-operator{
        li:hover{
          background: $menuSelectFontColor;
          color: white;
        }
        .iconfont{
          position: relative;
          top: 1px;
        }
      }
      .menu-list-content{
        margin-top:2px;
      }
      .ivu-col-span-2{
        width:60px;
      }
      .ivu-row-flex{
        height:100%;
      }
      .layout-content{
        min-height: 200px;
        height: calc(100% - 92px );
        margin: 2px;
        overflow: auto;
        background: #fff;
        border-radius: 4px;
      }
      .layout-content-main{
        width:96%;
        margin:0 auto;
        max-width:2880px;
        padding: 10px;
        height:100%;
        position: relative;
      }
      .layout-copy{
        text-align: center;
        padding: 10px 0 20px;
        color: #9ea7b4;
      }
      .layout-menu-left{
        background: #464c5b;
      }
      .layout-menu-left.ivu-col-span-4{
        width:200px;
      }
      .layout-menu-left.ivu-col-span-2{
        width:60px;
      }
      .ivu-col{
        transition: width .3s;
      }
      .main-content-span{
        width:auto;
        position: absolute;
        transition: left .3s;
        height:100%;
        right: 0px;
        bottom: 0px;
        min-width:900px;
      }
      .ivu-col.ivu-col-span-20{
        left:200px;
      }
      .ivu-col.ivu-col-span-22{
        left:60px;
      }
      .layout-header{
        height: 60px;
        background: #fff;
        display: flex;
        .user-tool-bar{
          display: flex;
          flex:1;
          flex-direction: row-reverse;
          width: 100%;
          text-align: right;
          line-height: 3.5;
          .user-info{
            display: flex;
            align-items: center;
            padding:0 10px;
            .ivu-dropdown{
              padding-right:16px;
            }
            a{
              color: #495060;
            }
            a:hover{
              color: $menuSelectFontColor;
            }
          }
          .user-header{
            display: flex;
            img{
              width:40px;
              height:40px;
            }
          }
          .email-count{
            padding: 0px 15px;
          }

        }

      }
      .layout-logo-left{
        width: 90%;
        height: 40px;
        border-radius: 3px;
        margin:5px 5% 8px 5%;
      }
      .layout-ceiling-main a{
        color: #9ba7b5;
      }
      .layout-hide-text .layout-text{
        display: none;
      }

      .ivu-btn.ivu-btn-text:hover{
        color:$menuSelectFontColor;
        border-color: transparent;

      }
      .fire-cow{
        height:40px;
        width:100%;
      }
      .small-menu{
        display: block;
        .ivu-dropdown{
          display: block;
          text-align: center;
          padding:10px 0px;
          .iconfont{
            font-size:15px;
          }
        }
        .ivu-dropdown-rel{
          .iconfont{
            font-size:20px;
          }
        }
        .ivu-dropdown:hover{
          cursor: pointer;
          background: $menuHoverBackgroundColor;
          color: $menuSelectFontColor;
        }
      }
      .activeTag .ivu-tag-dot-inner{
        background: $menuSelectFontColor;
      }
      .ivu-dropdown-item{
        font-size:14px!important;
      }
      .ivu-badge {
        display: inline;
      }
    }

</style>
