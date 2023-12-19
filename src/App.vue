<template>
  <div>
    <!-- svg使用 -->

    <h1>11111</h1>
    <div class="bb">
      <CSVG class="aa" href="gift" size="80px"></CSVG>
      2
    </div>
    <div class="cc">
      <CTest />
    </div>
    <div>
      {{ username }}
    </div>
    <div class="progress">
      <el-rate
        v-model="value"
        :texts="['oops', 'disappointed', 'normal', 'good', 'great']"
        show-text
      />

      <el-button type="success">Success</el-button>
    </div>
  </div>
</template>
<script setup lang="js">
import http from '@axios/httpAxios.js'
import { ref,onMounted } from 'vue'
import axios from 'axios'
const value = ref()
const username = ref('张三')
const fetchApi  = ()=>{
  http.post('/login',
  {
    aa:'11111',bb:'ccccc'
  }).then(res=>{
    username.value = res.data.message
  } ).catch(err=>{
    // console.log(err)
    console.log('>>>>>>>>>>>>>>>>>>>接口报错');
  })
}
onMounted(()=>{
  fetchApi()
} )
</script>
<style scoped>
.aa {
  background-color: red;
}
.cc {
  width: 100px;
  height: 100px;
  display: inline-block;
}
.progress {
  width: 100px;
}
</style>
