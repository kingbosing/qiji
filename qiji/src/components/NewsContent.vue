<template>
  <div class="NewsContent">
    <div class="cel" v-for="k in msg" :key="k.url">
      <img :src="k.url" alt="">
      <div class="content">
        <h3>{{k.title}}</h3>
        <p>{{k.content}}</p>
        <span>{{k.time}}</span>
      </div>
    </div>
  </div>
</template>

<script>

import news_one from "../assets/news/news_one.png";
import news_two from "../assets/news/news_two.png";
import news_three from "../assets/news/news_three.png";
import news_four from "../assets/news/news_four.png";


export default {
  name: 'NewsContent',
  data () {
    return {
      msg: [{
        title:'赢莱与中智及中瑞信三方成功签约',
        content:'2018年1月8日星期一，在这“爱你要发要发吉祥的日子里，公司以李董事长为主的代表团正式与中国国际技术智力合作有限公司（简称中智）、中瑞信融资担保有限公司（简称中…）',
        url:news_one,
        time:'2017.01.09'
      },
      {
        title:'共襄盛举，赢享空间答谢会圆满结束',
        content:'017年12月26日，圣诞节刚过去，为感恩答谢与赢享空间合作的新老客户、促进甲流共谋发展，赢享空间在杭州赢莱控股集团圆满举办了商家答谢会…',
        url:news_two,
        time:'2018.12.27'
      },
      {
        title:'赢享空间与两岸咖啡达成战略合作，打造共享经济新形态',
        content:'2017年10月30日，共享会客厅平台《赢享空间》与餐饮行业知名品牌《两岸咖啡》在赢莱控股集团会议室举行战略合作签约仪式，两岸咖啡将在杭州地区提供数十家直营店入驻赢享空…',
        url:news_three,
        time:'2017.10.31'
      },
      {
        title:'杭州推出移动会客厅，赢享空间重新定义会议模式',
        content:'2017注定是个共享经济年。先是年初摩拜单车宣布完成D轮2.15亿美元融资，紧接其后OFO小黄车宣布完成4.5亿美元D轮融资，再是6月份摩拜单车宣布完成新的一轮6亿美元融资。共享单…',
        url:news_four,
        time:'2017.09.11'
      }
      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">

.NewsContent{
  /* min-height: 500px; */
  width:1090px;
  margin: 30px auto ;
  .cel{
    overflow: hidden;
    border-bottom: 1px solid #dedede;
    img{
      margin: 24px;
      float: left;
      height: 152px;
      width:300px;
    }
    .content{
      margin-top: 26px;
      text-align: left;
      
      h3{
        font-size: 18px;
        color: #323232;
        margin-bottom: 20px;
        text-align: left;
        
      }
      p{
         font-size: 16x;
        color: #8a8a8a;
        line-height: 24px;
      }
      span{
         font-size: 16x;
        color: #8a8a8a;
        display: block;
        margin-top: 40px;
      }
    }
  }
}
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

</style>
