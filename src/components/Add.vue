<template>
    <div class="add-wrapper">
      <mt-field label="车牌号" placeholder="请输入车牌号" type="number"></mt-field>
      <mt-field label="密码" placeholder="请输入密码" type="number"></mt-field>
    </div>
</template>
<style>
  .add-wrapper{
    margin-top: 3px;
  }
    body{
        background-color:#fff;
    }
</style>
<script>
    export default{
        data(){
            return{
                msg:'hello vue'
            }
        },
      methods:{
        doAdd(){

        }
      },
        components:{
        }
    }
</script>
