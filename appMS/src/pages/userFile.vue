<template>
    <div class="wrapper">
        <navBar :title="titleName" v-bind:MainPage="true" />
        <div class="betweenFlex mt20">
            <text class="listName">头像</text>
            <div class="flexStart">
                <image
                    class="avator"
                    resize="contain"
                    src="http://doc.zwwill.com/yanxuan/imgs/yxbox-bg.png?v5"
                ></image>
                <text class="iconfont seticon">&#xe639;</text>
            </div>
        </div>

        <div class="betweenFlex bb mt20"  @click="tabTo('member')">
            <text class="listName">职级</text>
            <div class="flexStart">
                <text class="itemType">普通会员</text>
                <text class="iconfont seticon">&#xe639;</text>
                
                </div>
        </div>
        <div class="betweenFlex ">
            <text class="listName ">所在地区</text>
            <div class="flexStart"> <text class="itemType">请选择</text><text class="iconfont seticon">&#xe639;</text></div>
        </div>

        <div class="betweenFlex bb mt20">
            <text class="listName">资质认证</text>
            <div class="flexStart"> <text class="itemType error">去认证</text><text class="iconfont seticon">&#xe639;</text></div>
        </div>
        <div class="betweenFlex"  @click="tabTo('cardlist')">
            <text class="listName">银行卡</text>
            <div class="flexStart"> <text class="itemType error"  @click="tabTo('cardadd')">去绑定</text><text class="iconfont seticon">&#xe639;</text></div>
        </div>
        <div class="betweenFlex bb mt20">
            <text class="listName">手机号</text>
            <div class="flexStart"> <text class="itemType">15256235171</text><text class="iconfont seticon">&#xe639;</text></div>
        </div>
        <div class="betweenFlex">
            <text class="listName">设置密码</text>
            <div class="flexStart"> <text class="itemType setNow">马上设置</text><text class="iconfont seticon">&#xe639;</text></div>
        </div>
    </div>
</template>
<script>
    import navBar from './components/navBar.vue';
    
export default {
      components: {
          'navBar':navBar
      },
       data() {
          return {titleName:"个人中心"}
          },
    methods: {
        tabTo(_key) {
            
            this.$router && this.$router.push('/' + _key);
        },
        
    }
};
</script>
<style scoped>
.imgBox {
    width: 150px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
}
.nameBox {
    display: flex;
    flex-direction: row;
    width: 600px;
    padding-top: 20px;
}
.itemType{
    font-size: 28px;
    color: #666;
    margin-right: 20px;
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
    width: 80px;
    height: 80px;
    border-radius: 40px;
}
.setNow{
    display: inline-block;
    padding: 10px 20px;
    border-radius: 50px;
    background-color: #DA251E;
    color: #FFFFFF;
}
.userInfo {
    height: 200px;
    color: #ffffff;
    justify-content: center;
}
.userName {
    color: #ffffff;
    font-size: 40px;
    margin-bottom: 10px;
}
.error{
    color: #DA251E;
}
.userType {
    display: inline-block;
    margin-left: 15px;
    background-color: #fbc82f;
    padding: 10px 25px;
    border-radius: 20px;
    position: relative;
    top: -20px;
    color: #ffffff;
}
.infoTips {
    font-size: 28px;
    color: #ffffff;

    width: 600px;
}
.iconfont {
    font-family: iconfont;
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
    font-size: 28px;
    color: #666;
    margin-top: 10px;
}

.red {
    color: #da251e;
}
.wrapper {
    flex: 1;
    background-color: #f2f2f2;
    padding-bottom: 100px;
    font-size: 28px;
    width: 750px;
    flex-direction: column;
    justify-content: flex-start;
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
    margin-left: 5px;
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
    position: fixed;
    bottom: 130px;
    text-align: center;
    width: 750px;
    font-size: 28px;
    color: #666666;
}
</style>
