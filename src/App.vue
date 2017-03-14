<template>
  <div id="app">
      
      <mt-header fixed title="查询系统"></mt-header>

      
      <mt-navbar v-model="selected">
          <mt-tab-item id="1">查询</mt-tab-item>
          <mt-tab-item id="2">添加</mt-tab-item>
      </mt-navbar>
      <img src="./assets/logo.png" alt="">


      <kylin-search v-if="selected == 1"></kylin-search>
      <kylin-add v-if="selected == 2"></kylin-add>
      
      <button @click="getData">Hello</button>
      <p>{{ userData }}</p>
      
      
      
      
      
      
      <mt-tabbar v-model="selected">
          <mt-tab-item id="1">
              
              查询
          </mt-tab-item>
          <mt-tab-item id="2">
             添加
              
          </mt-tab-item>
      </mt-tabbar>
  </div>
</template>

<script>
    import Mint from 'mint-ui'
    import Search from './components/Hello'
    import Add from './components/Add'
    import axios from 'axios'
export default {
    
    name: 'app',
    components:{
        'kylin-search':Search,
        'kylin-add':Add
    },
    data(){
        return {
            selected:'1',
            userData:''
        }
    },
    methods:{
        
        getData:()=>{
            axios.get('/api').then((response) => {
                alert(1);
                console.log(response);
            })
        }
    }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 40px;
}
</style>
