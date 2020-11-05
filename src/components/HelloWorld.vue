<template>
  <div v-if="list || false">
    <div  class="skin-wrapper" v-for="(data,index) in list.data.list" :key="index">
    <div class="skin"  v-for="(num,key) in data.count" :key="key">
      <div class="eye left"></div>
      <div class="eye right"></div>
      <div class="nose">
        <div class="yuan"></div>
      </div>
      <div class="face left" :style="{background:data.color}">
      </div>
      <div class="face right" :style="{background:data.color}">
      </div>
      <div class="mouth">
        <div class="up">
          <div class="lip left"></div>
          <div class="lip right"></div>
        </div>
        <div class="down">
          <div class="yuan1">
            <div class="yuan2"></div>
          </div>
        </div>
      </div>
    </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data(){
    return{
      list: null
    }
  },
  mounted() {
    this.$axios.get('api/test/get/datas')
    .then((response)=>{
      this.list = response.data
    })
  }
}
</script>


<style scoped>
.skin-wrapper{
 display: flex;
  width: 2800px;
}

.skin{
  position: relative;
  background: #ffe600;
  height: 500px;
  width: 500px;
  margin-bottom: 40px;
  display: inline-block;
  margin-left: 40px;
}

.nose{
  border: 10px solid black;
  border-color: black transparent transparent;
  border-bottom: none;
  position: absolute;
  left: 50%;
  top: 145px;
  margin-left: -10px;
  z-index: 10;
}
@keyframes wave{
  0%{
    transform: rotate(0deg);
  }
  33%{
    transform: rotate(5deg);
  }
  66%{
    transform: rotate(-5deg);
  }
  100%{
    transform: rotate(0deg);
  }
}

.nose:hover{
  transform-origin: center bottom;
  animation: wave 300ms infinite linear;
}

.yuan{
  position: absolute;
  width: 20px;
  height: 6px;
  top: -16px;
  left: -10px;
  border-radius: 10px 10px 0 0;
  background-color: black;
}

.eye{
  border: 2px solid #000;
  width: 64px;
  height: 64px;
  position: absolute;
  left: 50%;
  top:100px;
  margin-left: -32px;
  background-color: #2e2e2e;
  border-radius: 50%;
}
.eye::before{
  content: '';
  border: 3px solid #000;
  width: 30px;
  height: 30px;
  display: block;
  background: #fff;
  border-radius: 50%;
  position: relative;
  left: 4px;
  top: 2px;
}

.eye.left{
  transform: translateX(-100px);
}

.eye.right{
  transform: translateX(100px);
}
.mouth{
  height: 200px;
  width: 200px;
  position: absolute;
  left: 50%;
  top: 170px;
  margin-left: -100px;
}

.mouth .up{
  position: relative;
  top: -20px;
  z-index: 1;
}

.mouth .up .lip{
  border: 3px solid black;
  height: 30px;
  width: 100px;
  background: #ffe600;
  border-top-color: transparent;
  border-right-color: transparent;
  position: relative;
  position: absolute;
  left: 50%;
  margin-left: -50px;
}

.mouth .up .lip.left{
  border-radius: 0 0 0 50px;
  transform: rotate(-15deg) translateX(-53px);
}
.mouth .up .lip.right{
  border-radius: 0 0 50px 0;
  transform: rotate(15deg) translateX(53px);
}

.mouth .up .lip::before{
  content: '';
  display: block;
  width: 7px;
  height: 30px;
  position: absolute;
  bottom: 0;
  background: #ffe600;
}

.mouth .up .lip.left::before{
  right: -6px;
}

.mouth .up .lip.right::before{
  left: -6px;
}

.mouth .down{
  height: 180px;
  position: absolute;
  width: 100%;
  top: 5px;
  overflow: hidden;
}

.mouth .down .yuan1{
  border: 3px solid black;
  width: 150px;
  height: 1000px;
  position: absolute;
  bottom: 0;
  left: 50%;
  margin-left: -75px;
  border-radius: 75px/300px;
  background: #9b000a;
  overflow: hidden;
}

.mouth .down .yuan1 .yuan2{
  width: 200px;
  height: 300px;
  position: absolute;
  background: #ff485f;
  bottom: -155px;
  left: 50%;
  margin-left: -100px;
  border-radius: 100px;
}

.face{
  position: absolute;
  left: 50%;
  border: 3px solid black;
  width: 88px;
  height: 88px;
  top:200px;
  margin-left: -44px;
  z-index: 3;
}


.face.left{
  transform: translateX(-180px);
  /*background: #ff0000;*/
  border-radius: 50%;
}



.face.right{
  transform: translateX(180px);
  /*background: #ff0000;*/
  border-radius: 50%;
}
</style>
