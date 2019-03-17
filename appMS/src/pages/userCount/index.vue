<template>
    <div class="wrapper">
      <navBar :title="titleName" v-bind:MainPage="true"  />
         <scroller
            :class="['main-list', isIpx && isIpx() ? 'ml-ipx' : '']"
            offset-accuracy="300"
            loadmoreoffset="300"
            @loadmore="onloadmore"
        >
          <refresher @loadingDown="loadingDown"></refresher>
          <div>
            <div class="scrollBox">
              <div class="countBox">
                <div class="countBox-top">
                    <div class="">
                        <text class="title">可提现(元)</text>
                        <text class="money">145.26</text>
                    </div>
                    <div><text class="draw" @click="getCash">提现 ></text></div>
                </div>
                <div class="countBox-bottom">
                    <div class="recive">
                        <text class="minmoney">4762.90</text>
                        <text class="title">累计收入(元)</text>
                    </div>
                    <div>
                        <text class="minmoney">145.26</text>
                        <text class="title">结算中(元)</text>
                    </div>
                </div>
              </div>
            </div>
            <div :class="['navBar',  fixedNav ? 'fixedNav' : '']">
             <wxc-tab-page ref="wxc-tab-page"
                :tab-titles="tabTitles"
                :tab-styles="tabStyles"
                title-type="icon"
                :tab-page-height="tabPageHeight "
                
                @wxcTabPageCurrentTabSelected="wxcTabPageCurrentTabSelected">

            </wxc-tab-page>
            </div>
            <ReceiveList class="receive" v-if="pageType.toString() == '0'" :goods="goodsList"></ReceiveList>
            <DrawCashList v-else :goods="drawList"></DrawCashList>
          </div>
           
        <loading class="loading" @loading="onloading" :display="showLoading">
                <text class="indicator">...</text>
        </loading>
        </scroller>
         <text class = "hint">{{hint}}</text>
      </div>
</template>

<script>
import navBar from "../components/navBar.vue";
import refresher from "../components/refresh.vue";
import receiveList from "./receiveList.vue";
import drawCashList from "./drawCashList.vue";

const animation = weex.requireModule("animation");
const modal = weex.requireModule("modal");
const dom = weex.requireModule("dom");
import { WxcTabPage, Utils, BindEnv } from "weex-ui";

export default {
  components: {
    refresher: refresher,
    navBar: navBar,
    ReceiveList: receiveList,
    DrawCashList: drawCashList,
    WxcTabPage
  },
  data() {
    return {
      tabTitles: [
        {
          title: "收入明细"
        },
        {
          title: "提现记录"
        }
      ],
      tabStyles: {
        bgColor: "#FFFFFF",
        titleColor: "#666666",
        activeTitleColor: "#DA251E",
        activeBgColor: "#FFFFFF",
        isActiveTitleBold: true,
        width: 275,
        height: 80,
        fontSize: 28,
        hasActiveBottom: true,
        activeBottomColor: "#DA251E",
        activeBottomHeight: 5,
        activeBottomWidth: 60,
        rightOffset: 100,
        leftOffset: 100
      },
      imagePath: "",
      titleName: "我的账户",
      realHeight: Utils.env.getScreenHeight(),
      pageType: 0,
      tabPageHeight: 80,
      showLoading: "hide",
      hint: "",
      fixedNav: false,
      goodsList: [
        {
          type: 1,
          title: "2018-10月工资",
          receiveMoney: "3511.00",
          createTime: "2018-02-03",
          status: "已结算",
          recommended: "李依依"
        },
        {
          type: 2,
          title: "复星联合星如意",
          receiveMoney: "20.00",
          createTime: "2018-02-03",
          status: "已结算",
          premium: "4520.00",
          settleDate: "2018-10-20"
        },
        {
          type: 3,
          title: "2018-10月工资",
          receiveMoney: "3511.00",
          createTime: "2018-02-03",
          status: "已结算",
          recommended: "李依依"
        },
        {
          type: 4,
          title: "复星联合星如意",
          receiveMoney: "20.00",
          createTime: "2018-02-03",
          status: "已结算",
          premium: "4520.00",
          settleDate: "2018-10-20"
        }
      ],
      drawList: [
        {
          date: "2016-11-01",
          time: "11:12",
          money: "200.00"
        },
        {
          date: "2019-11-01",
          time: "11:12",
          money: "20.00"
        },
        {
          date: "2019-11-01",
          time: "11:12",
          money: "300.00"
        },
        {
          date: "2019-11-03",
          time: "11:12",
          money: "200.30"
        },
        {
          date: "2019-11-01",
          time: "11:12",
          money: "500.00"
        },
        {
          date: "2019-11-01",
          time: "11:12",
          money: "500.00"
        },
        {
          date: "2019-11-01",
          time: "11:12",
          money: "500.00"
        },
        {
          date: "2019-11-01",
          time: "11:12",
          money: "500.00"
        }
      ]
    };
  },
  created: function() {
    this.imagePath = this.getImagePath("count", ".jpg");
  },
  methods: {
    onloading() {
      modal.toast({ message: "loading", duration: 0.3 });
      this.showLoading = "show";
      setTimeout(() => {
        // this.goodsList.push(...this.recommend.goods1);
        this.showLoading = "hide";
      }, 300);
    },
    onloadmore() {
      modal.toast({ message: "loading", duration: 0.3 });
      setTimeout(() => {
        // this.goodsList.push(...this.recommend.goods1);
      }, 100);
    },
    loadingDown() {
      // this.goodsList = [];
      // this.goodsList.push(...this.recommend.goods2);
      // this.goodsList.push(...this.recommend.goods1);
    },
    wxcTabPageCurrentTabSelected(e) {
      const self = this;
      const index = e.page;
      self.pageType = index;
    },
    scrollHandel(e) {},
	getCash(){
		this.jumpInter("drawcash");
	}
  }
};
</script>

<style scoped>
.main-list {
  position: fixed;
  top: 100px;
  bottom: 0;
  left: 0;
  right: 0;
}
.navBar {
  position: sticky;
  width: 750px;
}
.fixedNav {
  top: 100px;
}
.hint {
  position: fixed;
  bottom: 90px;
}
.ml-ipx {
  top: 140px;
  bottom: 40px;
}

.item-container {
  width: 750px;
  background-color: #f2f3f4;
}

.content {
  width: 750px;
  height: 150px;
  border-bottom-width: 1px;
  align-items: center;
  justify-content: center;
}
.wrapper {
  flex: 1;
  background-color: #f2f2f2;
  font-size: 28px;
  width: 750px;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
}
.scrollBox {
  width: 750px;
  justify-content: center;
  align-items: center;
}

.countBox {
  width: 700px;
  height: 280px;

  background-color: #f24c4c;
  border-radius: 10px;
  margin-top: 20px;
  padding: 20px 30px;
  display: flex;
  justify-content: center;
}
.countBox-top {
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  align-items: flex-end;

  flex: 1;
  border-bottom-color: #ff6b57;
  border-bottom-width: 1px;
  border-bottom-style: solid;
  padding-bottom: 10px;
  padding-left: 10px;
}
.countBox-bottom {
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 100px;
  padding-top: 20px;
  padding-left: 10px;
}
.title {
  font-size: 22px;
  color: #cccccc;
}
.recive {
  margin-right: 50px;
}
.draw {
  color: #fff;
  font-size: 28px;
  margin-bottom: 15px;
}
.minmoney {
  font-size: 40px;
  color: #fff;
  margin-bottom: 10px;
}
.money {
  font-size: 52px;
  color: #fff;
  margin-top: 10px;
}
.indicator {
  text-align: center;
}
</style>
