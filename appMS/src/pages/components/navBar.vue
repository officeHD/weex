<template>
    <div class="clearFix">
        <div class="navBar">
            <div class="left" @click="backPage()"><text class="iconfont backIcon">&#xe654;</text></div>
            <div class="center"><text class="title">{{ title }}</text></div>
            <div class="right"></div>
        </div>
    </div>
</template>

<script>
export default {
    props: ['title','MainPage'],
    methods:{
        backPage(){
          
            if(this.MainPage){
                 this.toBack()
                
            }else{
                this.$router.go(-1)
            }
         
        }
    }
};
</script>

<style scoped>
.iconfont {
    font-family: iconfont;
}
.clearFix {
    height: 90px;
    width: 750px;
    background-color: #fff;
}
.navBar {
    background-color: #fff;
    height: 90px;
    width: 750px;
    position: fixed;
    left: 0;
    top: 0;
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    align-items: center;
}
.center{
    width: 550px;
    text-align: center;
    justify-content: center;
    align-items: center;
   
}
.left,.right,.center{
  
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
}
.left,.right{
     width: 100px;
}
    
.backIcon{
    color: #DA251E;
    font-size: 42px;
}
.title{
     font-size: 36px;
    color: #000;
}
</style>
