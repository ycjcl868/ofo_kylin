<template>
  <div id="app">

      <mt-header fixed title="查询系统"></mt-header>

      
      <img class="banner" src="./assets/banner.jpg" alt="">
      <mt-navbar v-model="selected">
          <mt-tab-item id="1">查询</mt-tab-item>
          <mt-tab-item id="2">添加</mt-tab-item>
      </mt-navbar>
      
      


      <kylin-search v-if="selected == 1"></kylin-search>
      <kylin-add v-if="selected == 2"></kylin-add>







      <mt-tabbar v-model="selected">
          <mt-tab-item id="1">
            <img v-if="selected != 1" src="./assets/search.png" slot="icon">
            <img v-if="selected == 1" src="./assets/search-active.png" slot="icon">
              查询
          </mt-tab-item>
          <mt-tab-item id="2">
            <img v-if="selected != 2" src="./assets/add.png" slot="icon">
            <img v-if="selected == 2" src="./assets/add-active.png" slot="icon">
             添加

          </mt-tab-item>
      </mt-tabbar>
  </div>
</template>

<script>
    import Mint from 'mint-ui'
    import Search from './components/Hello'
    import Add from './components/Add'

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

        getData(){
            axios.get('/api').then((response) => {
                alert(1);
                console.log(response);
            })
        }
    }
}
</script>

<style>
    .banner{
        max-width: 100%;
    }
  body{
    margin: 0;
  }
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 40px;
}
</style>
