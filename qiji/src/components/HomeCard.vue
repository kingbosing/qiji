<template>
  <div class="HomeCard" @mouseenter="getIt" @mouseleave="LostIt"  v-bind:class="{ flipped: isActive }" >   
    <div class="front_1 face">{{childMsg.title}} <b></b></div>
    <div class="back_1 face">
        {{childMsg.content}}
    </div>

   
  </div>
</template>

<script>
 


export default {
    name: 'HomeCard',
    data:function(){
        return {
            isActive:false
        }
    },
     props: {
        childMsg: Object
    },
    methods:{
        getIt:function(){
            // console.info(this.childMsg)
            this.isActive=true;
        },
        LostIt:function(){
            this.isActive=false;
            
        }
    }
  
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">

    .HomeCard{
        height: 100%;
        width: 100%;
        // border: 1px solid #ccc;
        position: relative;
        cursor: pointer;
        overflow: hidden;
        z-index: 1;
        .face{
             transition:all 0.5s linear ;
            -moz-transition:all 0.5s linear ; /* Firefox 4 */
            -webkit-transition:all 0.5s linear ; /* Safari and Chrome */
            -o-transition:all 0.5s linear ; /* Opera */
        }
        
        .front_1{
            font-size: 18px;
            color: #fff;
            height: 30px;
            position: absolute;
            top: 100px;
            left: 0;
            right: 0;
            bottom: 0;
            margin:0 auto;
            z-index: 2;
            b{
                height: 3px;
               margin: 5px auto;
                width: 16px;
                display: block;
                background: #fff;
            }
        }
        .back_1{
            height: 50px;
            width: 250px;
            position: absolute;
            top:300px;
            left: 0;
            right: 0;
            bottom: 0;
            margin:0 auto;
            color: #fff;
            border: none;
            z-index: 2;
            line-height: 30px;
        }



        
    }
    .HomeCard.flipped{
            
            .front_1{           
                top: 60px;
            }
            .back_1{
                top: 110px;
              
            }
            .front_1 >b{
                 width: 0;
            }
        }
</style>
