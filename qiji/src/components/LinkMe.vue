<template>
  <div class="linkMe">
    <div class="amap-wrapper">
     <el-amap vid="amapDemo" :zoom="zoom" :center="center" class="amap-demo">
        <el-amap-marker vid="component-marker" :position="componentMarker.position"  ></el-amap-marker>    
      </el-amap>
    </div>

   <div class="info">
     <h2><b></b>杭州齐集科技有限公司</h2>
     <p>公司地址：杭州江干区解放东路迪凯银座13F</p>
     <p>电话：0561-28271671</p>
     <p>邮箱：contact@yinglai.ren</p>
   </div>
  </div>
</template>

<script>
 
const exampleComponents = {
      props: ['text'],
      template: `<div>text from  parent: {{text}}</div>`
    }

export default {
  name: 'LinkMe',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      zoom: 16,
          center: [120.211627, 30.242009],
   
          
          markers: [
            {
              position: [120.211627, 30.242009],
  
             
              visible: true,
              draggable: false,
              // template: '<span>133333333</span>',
            }
          ],
         
          componentMarker: {
            position: [120.211627, 30.242009],

            
            // contentRender: (h, instance) => h(exampleComponents,{style: {backgroundColor: '#fff'}, props: {text: 'father is here'}}, ['xxxxxxx'])
          },
         
        };
    }
 
  
}

    // position: [120.206575, 30.244383]
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">

.linkMe{
 
  height: 414px;
  width:950px;
  margin: 50px auto;
  .info{
    height: 300px;
    width: 500px;
    float: right;
    margin-top: 122px;
    text-align: left;
    font-size: 18px;
    h2{
      color: #333;
      margin-bottom: 30px;
      b{
        width: 26px;
        height: 40px;
        display: block;
        float: left;
        margin-right: 15px;
        background: url(../assets/location.png)no-repeat center;
      }
    }
    p{
      color: #8a8a8a;
      line-height: 30px;
    }
  }
}
/* h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
} */
</style>
