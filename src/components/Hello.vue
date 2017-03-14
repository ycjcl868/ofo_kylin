<template>
  <div class="search-wrapper">
    <mt-field label="车牌号" placeholder="请输入车牌号" v-model="number" type="number"></mt-field>
    <mt-button @click.native="doSearch" class="search-button" type="primary">点击查询</mt-button>
  </div>
</template>

<script>
  import axios from 'axios'
  import { MessageBox } from 'mint-ui';
export default {
  name: 'hello',
  data () {
    return {
        number: '',
    }
  },
  methods:{
      doSearch(){
          let that = this;
          if(that.number == ''){
              MessageBox('提示','请输入车牌号');
              return;
          }
          axios.post('/api/search',{
              number:that.number
          }).then((response) => {
              console.log(response);
              if(response.data.info.status == 1){
                MessageBox('查询结果', '密码是'+Number(response.data.info.password));
              }else{
                  MessageBox('查询结果','没有查到相应的密码');
              }
          })
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .search-wrapper{
    margin-top: 3px;
  }
  .search-button{
    width: 94%;
    margin: 1rem 0;
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
