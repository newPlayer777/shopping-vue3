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
import { ref } from 'vue'

const value = ref()
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
