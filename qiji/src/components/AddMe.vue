<template>
  <div class="addMe">
    <div class="cel" v-for="k in msg" :key="k.url">
     
      <div class="content">
        <h3>{{k.title}}</h3>
        <p>岗位职责：</p>
        <p>{{k.content}}</p>
        <span>{{k.time}}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AddMe',
  data () {
    return {
       msg: [{
        title:'PHP开发工程师',
        content:'1、负责公司ecshop尚诚系统的日常管理、维护工作；2、知道各部门使用相关模块，协助和知道各部门更新、修改尚诚网页和内容；3、知道各分店、各分公司在商城内建立网上分店。',
        url:1,
        time:'2018.01.09'
      },
      {
        title:'Web前端开发工程师',
        content:'1、2年以上工作经历，熟悉HTML/CSS等技术优先，具有优良的代码风格；2、能熟悉使用JavaScript/jquery/Zepto开发；3、了解至少一门后端语言，能与后端开发人员进行数据交互；4、有angular，grunt等实际开发经验者优先；5、对浏览器兼容性、代码可维护性…',
        url:2,
        time:'2018.12.27'
      },
      {
        title:'Android开发工程师',
        content:'1、负责Android客户端架构设计，并完成主要功能模块代码的编写；2、参与产品的系统设计，代码编写，单元测试和bug修复工作；3、编写Android产品的程序设计等技术工作；4、与产品、测试等相关人员配合共同完成产品的研发工作…',
        url:3,
        time:'2018.10.31'
      },
      {
        title:'大数据架构师',
        content:'1、熟悉云计算及分布计算原理；2、熟悉流行云计算框架的应用模式及开发：hadoop、zookeeper、hbase、hive、Storm、Spark;3、精通Java语言开发，熟悉Python或者Go语言Linux操作系统。4、精通主流数据（如Oracle,MySQL、GP等），熟悉NoS…',
        url:4,
        time:'2017.09.11'
      }
      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">

.addMe{
  width: 1090px;
  margin:40px auto 50px;
 text-align: left;
 .cel{
    // overflow: hidden;
    border-bottom: 1px solid #dedede;
   
    .content{
      margin-top: 26px;
      // text-align: left;
      
      h3{
        font-size: 18px;
        color: #323232;
        margin-bottom: 20px;
        // text-align: left;
        
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
        margin-top: 20px;
        margin-bottom: 20px;
      }
    }
  }
}

</style>
