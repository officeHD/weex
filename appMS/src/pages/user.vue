<template>
    <div class="wrapperc"  >
        <scroller class="scroller" >
            <div class="userHeader">
                <div class="imgBox">
                    <image
                        class="avator"
                        resize="contain"
                        :src="ImagePath"
                    >
                    </image>
                </div>
                <div class="userInfo">
                    <div class="nameBox">
                        <text class="userName">路人甲</text>
                        <text class="userType"  @click="tabTo('verify')" >去认证</text>
                    </div>
                    <div><text class="infoTips">普通会员，申请成为客户经理获得更丰厚的待遇</text></div>
                     <text  @click="itemClick('message')" class="userMessage iconfont">&#xe626;</text>
                </div> 
            </div>
            <div class="count"  @click="itemClick('count')" >
                <text class="countTitle">我的账户</text>
                <div class="countList">
                    <div class="item">
                        <text class="money">162.90</text>
                        <text class="item-name">可提现(元)</text>
                    </div>
                    <div class="item">
                        <text class="money">162.90</text>
                        <text class="item-name">结算中(元)</text>
                    </div>
                    <div class="item">
                        <text class="money">214568.90</text>
                        <text class="item-name">累计收入(元)</text>
                    </div>
                </div>
            </div>
             
            <div class="flexCenter">
                <div class="item"  @click="itemClick('order')">
                    <text class="iconfont f50 red">&#xe621;</text>
                    <text class="itemName">订单</text>
                </div>
                <div class="item"  @click="itemClick('customer')">
                    <text class="iconfont f50 red">&#xe606;</text>
                    <text class="itemName">客户</text>
                </div>
                <div class="item"  @click="itemClick('claims')">
                    <text class="iconfont f50 red">&#xe603;</text>
                    <text class="itemName">理赔</text>
                </div>
                <div class="item"  @click="itemClick('team')">
                    <text class="iconfont f50 red">&#xe64e;</text>
                    <text class="itemName">团队</text>
                </div>
            </div>
            <div class="betweenFlex bb" @click="itemClick('userfile')">
                <div class="flexStart">
                    <text class="iconfont seticon">&#xe7af;</text>
                    <text class="listName">我的资料</text>
                </div>
                <div><text class="iconfont seticon">&#xe639;</text></div>
            </div>
            <div class="betweenFlex"  @click="tabTo('invite')">
                <div class="flexStart">
                    <text class="iconfont seticon">&#xe66f;</text>
                    <text class="listName ">邀请好友</text>
                </div>
                <div><text class="iconfont seticon">&#xe639;</text></div>
            </div>

            <div class="betweenFlex mt20"  @click="itemClick('setting')">
                <div class="flexStart">
                    <text class="iconfont seticon">&#xe673;</text>
                    <text class="listName">设置</text>
                </div>
                <div><text class="iconfont seticon">&#xe639;</text></div>
            </div>
            <text class="hotLine">客服热线：400-880-2177</text>
            
         </scroller>
        <bottom-bar @tabTo="onTabTo" :pIndexKey="pIndexKey"></bottom-bar>
    </div>
</template>
<script>
import { BindEnv, Utils } from "weex-ui";
import BottomBar from "./components/BottomBar.vue";
export default {
  components: {
    "bottom-bar": BottomBar
  },
  data() {
    return {
      pIndexKey: "user",
      screenHeight: 0,
      ImagePath: "",
      ImagePathS:""
    };
  },

  created: function() {
    this.ImagePath = this.getImagePath("avator", ".png");
    this.ImagePathS = this.getImagePath("user", ".jpg");

    
    console.log(
      weex.config.env.deviceHeight / weex.config.env.deviceWidth * 750
    );
    this.screenHeight = Utils.env.getScreenHeight();
  },
  methods: {
    onTabTo(_result) {
      console.log(_result);
      let _key = _result.data.key || "";
      this.$router && this.$router.push("/" + _key);
    },
    tabTo(_key) {
      this.$router && this.$router.push("/" + _key);
    },
    itemClick(url, parmars) {
      this.jumpWithParams(url, {
        title: ""
      });
    }
  }
};
</script>
<style scoped>
.user{
  width: 750px;
  height: 1198px;
}

.wrapperc {
  background-color: #f2f2f2;
  padding-bottom: 100px;
  font-size: 28px;
  width: 750px;
  display: flex;
  justify-content: flex-start;
  flex: 1;
  position: fixed;
  left: 0;
  top: 0;
}
.iconfont {
  font-family: iconfont;
}
.userMessage {
  position: absolute;
  right: 20px;
  top: 20px;
  color: #ffffff;
  font-size: 44px;
}
.scroller {
  flex: 1;
  padding-bottom: 100px;
}
.imgBox {
  width: 150px;
  display: flex;

  align-items: center;
}
.nameBox {
  display: flex;
  flex-direction: row;
  width: 600px;
  padding-top: 20px;
}
.userHeader {
  height: 200px;
  background-color: #f55b39;
  display: flex;
  width: 750px;
  flex-direction: row;
  align-items: center;
}
.avator {
  width: 120px;
  height: 120px;
  border-radius: 50px;
}
.userInfo {
  height: 200px;
  color: #ffffff;
  justify-content: center;
}
.userName {
  color: #ffffff;
  font-size: 34px;
  margin-bottom: 10px;
}
.userType {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 10px;
  background-color: #fbc82f;
  padding: 5px 20px;
  border-radius: 30px;
  font-size: 20px;
  position: relative;
  top: -10px;
  color: #ffffff;
}
.infoTips {
  font-size: 22px;
  color: #f2f2f2;

  width: 600px;
}

.seticon {
  font-size: 36px;
  color: #999999;
}
.f50 {
  font-size: 50px;
}

.itemName {
  font-size: 32px;
  margin-top: 10px;
  color: #666;
}
.flexStart {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
}
.item-name {
  font-size: 24px;
  color: #666;
  margin-top: 10px;
}

.red {
  color: #da251e;
}

.count {
  background-color: #fff;
  margin-bottom: 20px;
}
.countTitle {
  line-height: 80px;
  font-size: 32px;
  padding-left: 20px;
}
.listName {
  font-size: 32px;
  margin-left: 20px;
}
.bb {
  border-bottom-color: #ccc;
  border-bottom-width: 1px;
  border-bottom-style: solid;
}
.mt20 {
  margin-top: 20px;
}
.betweenFlex {
  display: flex;
  width: 750px;
  justify-content: space-between;
  flex-direction: row;
  padding: 0 20px;
  background-color: #fff;
  height: 90px;
  align-items: center;
}
.countList {
  display: flex;
  flex-direction: row;
  width: 750px;
  background-color: #fff;
  padding: 20px 0;
}
.flexCenter {
  display: flex;
  flex-direction: row;
  width: 750px;
  background-color: #fff;
  padding: 30px 0;

  align-items: center;
  margin-bottom: 20px;
}
.money {
  color: #000;
  font-size: 40px;
}
.item {
  flex: 1;
  display: flex;

  align-items: center;
  flex-direction: column;
}

.hotLine {
  text-align: center;

  width: 750px;
  font-size: 28px;
  color: #666666;
  margin-top: 100px;
}
</style>
