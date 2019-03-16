<template>
	<div class="wrapper">
		<navBar :title="titleName" v-bind:MainPage="true"  />
    <div class="mt20 p20">
    <div class="listMes ">
       <text class="iconfont iconBox activit">&#xe60b;</text> 
       <div class="listContent">
         <div class="mesTitle">
           <text class="namespan">活动</text>
           <text  class="namespan"></text>
         </div>
         <text></text>
       </div>
       
    </div>
     <div  class="listMes">
      <text class="iconfont iconBox attention">&#xe608;</text> 
      
      <div class="listContent">
         <div class="mesTitle">
           <text class="namespan">提醒</text>
           <text class="namespan"></text>
         </div>
         <text class="detailMes"></text>
       </div>
       
    </div>
     <div  class="listMes">
      <text class="iconfont iconBox mes">&#xe61c;</text>
        <div class="listContent">
         <div class="mesTitle">
           <text class="namespan">消息</text>
           <text class="namespan"></text>
         </div>
         <text> </text>
       </div>
    </div>
    </div>
    <div class="mt20 p20">
     <div  class="listMes ">
      <text class="iconfont iconBox goobg">&#xe60c;</text>
      <div class="listContent">
         <div class="mesTitle">
           <text class="namespan">赞和收藏</text>
           <text class="namespan">{{'2019-1-20'|timeAgo }}</text>
         </div>
         <text class="namespan">相关信息 </text>
       </div>
    </div>
    
    <div  class="listMes">
       <text class="iconfont iconBox pinl">&#xe626;</text>
       <div class="listContent">
        <div class="mesTitle">
           <text class="namespan">评论和回复</text>
           <text class="namespan">{{'2019-1-22'|timeAgo }}</text>
         </div>
         <text> </text>
       </div>
    </div>
     <div  class="listMes">
      <text class="iconfont iconBox guanzhu">&#xe61e;</text>
       <div class="listContent">
         <div class="mesTitle">
           <text class="namespan">我的关注</text>
           <text class="namespan"> {{'2018-3-15'|timeAgo }}</text>
         </div>
         <text> </text>
       </div>
    </div>
    </div>
	</div>
</template>

<script>
import navBar from "./components/navBar.vue";
export default {
  components: {
    navBar: navBar
  },
  data() {
    return {
      imagePath: "",
      titleName: "消息中心"
    };
  },
  created: function() {}
};
</script>

<style scoped>
.iconfont {
  font-family: iconfont;
}
.iconBox {
  width: 100px;
  height: 100px;
  border-radius: 20px;
  line-height: 100px;
  background-color: #dedede;
  text-align: center;
  color: #ffffff;
  font-size: 60px;
  margin-right: 20px;
}
.activit {
  background-image: linear-gradient(to bottom, #f99d58, #fe733f);
}
.attention {
  background-image: linear-gradient(to bottom, #fde356, #fcc61a);
}
.mes {
  background-image: linear-gradient(to bottom, #c4ebfa, #7dcffd);
}

.goobg {
  background-image: linear-gradient(to bottom, #89aaee, #417bfb);
}
.pinl {
  background-image: linear-gradient(to bottom, #a1e177, #63d207);
}
.guanzhu {
  background-image: linear-gradient(to bottom, #f4a36a, #e05832);
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
.mt20 {
  margin-top: 20px;
  background-color: #ffffff;
}
.p20 {
  padding-left: 20px;
}
.listMes {
  height: 120px;
  background-color: #fff;
  border-bottom-color: #ccc;
  border-bottom-style: solid;
  border-bottom-width: 1px;
  display: flex;
  flex-direction: row;
  align-items: center;
}
.listContent {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex: 1;
  height: 120px;
  padding: 20px;
}
.mesTitle {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
}
.detailMes {
  font-size: 30px;
  color: #333;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  lines: 1;
}
.namespan {
  font-size: 28px;
  color: #666666;
}
</style>
