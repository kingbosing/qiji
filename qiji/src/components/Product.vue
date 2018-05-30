<template>
  <div class="product">
    <div class="product_nav">
     
      <!-- <img src="../assets/xyjh/banner1.png" alt=""> -->
    </div>
    <div class='product_tap'>
      <ul>
        <li class="nav"> <router-link to="/Product/?num=2">小赢计划</router-link></li>
        <li class=" nav"> <router-link to="/Product/Xyzp?num=2">小赢招聘</router-link></li>
      </ul>
    </div>
    <div class='min'>
         <router-view/>
    </div>
     
  </div>
</template>

<script>
export default {
  name: 'Product',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">


h1, h2 {
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
}
.min{
  margin: 0 auto;
}
.product{

.product_nav{
  height: 400px;
  overflow: hidden;
  //  background: -webkit-linear-gradient(#3b4e7f, #6f84b8); /* Safari 5.1 - 6.0 */
  // background: -o-linear-gradient(#3b4e7f, #6f84b8); /* Opera 11.1 - 12.0 */
  // background: -moz-linear-gradient(#3b4e7f, #6f84b8); /* Firefox 3.6 - 15 */
  // background: linear-gradient(#3b4e7f, #6f84b8); /* 标准的语法 */
  img{
    margin: 111px auto 0;
  }
}
.product_tap{
  border-bottom: 1px solid #dedede;
  ul{
    height: 70px;
    line-height: 70px;
    width: 980px;
    margin: 0 auto;
    text-align: left;
    color: #333;
   li a{
    color: #333;
     
   }
   .router-link-active{
      color: #333;
    }
    .router-link-exact-active{
      color: #f99740;
    
        border-bottom: 3px solid #f99740;
        padding-bottom: 25px;
    }
}
}
}
</style>
