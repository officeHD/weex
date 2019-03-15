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
            class="gb-box"
            v-for="(item, key, index) in goods"
            v-bind:key="index"
            @click="godetail(item)"
        >
            <div class="box-item bb">
              <div>
                <text class="item-title mb5">{{item.title}}</text>
                <text class="item-name">{{item.createTime}}</text>
              </div>
              <div>
                <text class="item-money mb5">{{item.receiveMoney}}</text>
                <text  class="item-status">{{item.status}}</text>
              </div>
            </div>
            <div class="box-item" v-if="item.recommended">
              <text class="item-name">被推荐人</text>
              <text class="item-name">{{item.recommended}}</text>
            </div>
            <div class="box-item bb"  v-if="item.premium">
              <text class="item-name">保险金额</text>
              <text class="item-name">{{item.premium}}</text>
            </div>
            <div class="box-item" v-if="item.settleDate">
              <text class="item-name">结算日期</text>
              <text class="item-name">{{item.settleDate}}</text>
            </div>
          
        </div>
	</div>
</template>

<script>
const storage = weex.requireModule("storage");
export default {
  props: {
    goods: Array
  },
  components: {},
  data() {
    return {
      imagePath: ""
    };
  },
  created: function() {},
  methods: {
    godetail(item) {
      // 先设置当前月份 再跳转
      let self = this;
      storage.setItem("salaryMonth", "2018-10-12", event => {
        if (item.type.toString() === "1") {
          //salary
          //工资详情
          self.jumpInter("salary");
        } else if (item.type.toString() === "2") {
          // 保险佣金（订单详情）
          self.jumpWithParams("order", { orderId: "333" });
        } else if (item.type.toString() === "3") {
          //推广费
          self.jumpInter("extendfee");
          //  extendfee
        } else if (item.type.toString() === "4") {
          //推荐奖
          self.jumpInter("recomfee");
          //  recomfee
        }
      });
    }
  }
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
  margin-bottom: 10px;
  padding: 0 16px;
}
.box-item {
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  padding: 15px 5px;
}
.mb20 {
  margin-bottom: 20px;
}
.item-name {
  color: #666;
  font-size: 28px;
}
.item-money {
  font-size: 34px;
  color: #da2721;
}
.item-status {
  font-size: 24px;
  color: #da2721;
  text-align: right;
}
.item-title {
  color: #333;
  font-size: 32px;
}
.bb {
  border-bottom-color: #eee;
  border-bottom-style: solid;
  border-bottom-width: 1px;
}
.mb5 {
  margin-bottom: 5px;
}
</style>
