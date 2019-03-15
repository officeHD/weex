<template>
	<div class="wrapper">
        <div class="header">
          <text class="total">全部4762.90元</text>
          <div class="headerR">
             <text class="rname">筛选</text>
              <text class="iconfont">&#xe695;</text>
          </div>
        </div>
         <div
            class="gb-box bb"
            v-for="(item, key, index) in goods"
            v-bind:key="index"
        >
            <div class="box-item ">
              <div class="item-left">
                <text class="item-icon">提</text>
                <div>
                    <text class="item-time">{{item.date}}</text>
                    <text class="item-time">{{item.time}}</text>
                </div>
              </div>
               <text class="item-money">{{item.money}}</text>
            </div>
            
        </div>
	</div>
</template>

<script>
export default {
  props:{
    goods:Array
  },
  components: {},
  data() {
    return {
      imagePath: "",
       
    };
  },
  created: function() {}
};
</script>

<style scoped>
.iconfont {
  font-family: iconfont;
}
.wrapper {
  flex: 1;
  background-color: #f2f2f2;
  font-size: 28px;
  width: 750px;
  flex-direction: column;
  justify-content: flex-start;
}
.header {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 20px 25px;
}
.headerR {
  display: flex;
  flex-direction: row;
}
.total {
  font-size: 30px;
}
.rname {
  color: #444;
  font-size: 28px;
}
.gb-box {
  background-color: #ffffff;
  
  padding:0  20px;
}
.box-item {
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
  height: 100px;
}
.item-left{
   display: flex;
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
}
.mb20{
   margin-bottom: 20px;
}
 
.item-money{
  font-size: 40px;
  color: #333;
}
.item-status{
  font-size: 24px;
   color: #DA2721;
}
.item-icon{
  color: #333;
  font-size: 32px;
  text-align: center;
  height: 80px;
  width: 80px;
  line-height: 80px;
  border-radius: 40px;
  background-color: #FFDEC5;
  color: #fff;
  margin-right: 10px;
}
.item-time{
  color: #666;
  font-size: 28px;
  margin: 2px;
}
.bb {
  border-bottom-color: #eee;
  border-bottom-style: solid;
  border-bottom-width: 1px;
}
</style>
