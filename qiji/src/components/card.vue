<template>
  <div class="Card" @mouseover="getIt" @mouseout="lostIt" v-bind:class="{ flipped: isActive }">   
    <div class="front face" v-bind:style="{  background:'url('+ childMsg[0] + ')no-repeat center' }"></div>
    <div class="back face"  v-bind:style="{  background:'url('+ childMsg[1] + ')no-repeat center' }"></div>  
  </div>
</template>

<script>
 


export default {
    name: 'Card',
    data:function(){
        return {
            isActive:false
        }
    },
     props: {
        childMsg: Array
    },
    methods:{
        getIt:function(){  
            // console.log('in')       
                this.isActive=!this.isActive;  
                       event.cancelBubble = true;
        },
        lostIt:function(){
            // this.isActive=false;           
        }
    }
  
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">

    .face{
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          border-radius: 4px;
          backface-visibility: hidden;
          transition: all 0.5s ease-out;
          cursor: pointer;
       }
       .front {
              background: #81d1e9 ;
              transform: rotate3d(0, 1, 0, 0deg);
            }

          .back {
              background: #4474b5 ;
              transform: rotate3d(0, 1, 0, 180deg);
              border: 3px solid white;
            }
        .flipped > .face.front {
          transform: rotate3d(0, 1, 0, -180deg);
        }

        .flipped > .face.back {
          transform: rotate3d(0, 1, 0, 0deg);
          border: 1px solid #ccc;
        }

        // .Card:hover .face.front {
        //   transform: rotate3d(0, 1, 0, -180deg);
        // }

        // .Card:hover  .face.back {
        //   transform: rotate3d(0, 1, 0, 0deg);
        //   border: 1px solid #ccc;
        // }
</style>
