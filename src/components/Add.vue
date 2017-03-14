<template>
    <div class="add-wrapper">
      <mt-field label="车牌号" placeholder="请输入车牌号" v-model="number" type="number"></mt-field>
      <mt-field label="密码" placeholder="请输入密码" v-model="password" type="number"></mt-field>
      <mt-field label="管理员密码" placeholder="请输入管理员密码" type="password" v-model="adminPass"></mt-field>
        <mt-button @click.native="doAdd" class="add-button" type="primary">点击添加</mt-button>
    </div>
</template>
<style>
  .add-wrapper{
    margin-top: 3px;
  }
  .add-button{
      width: 94%;
      margin: 1rem 0;
  }
    body{
        background-color:#fff;
    }
</style>
<script>
    import axios from 'axios'
    import { MessageBox } from 'mint-ui';
    export default{
        data(){
            return{
                number:"",
                password:"",
                adminPass:""
            }
        },
      methods:{
        doAdd(){
            let that = this;
            if(that.number == '' || that.password == '' || that.adminPass == '' ){
                MessageBox('提示','添加的信息不能为空');
                return;
            }
            axios.post('/api/add',{
                number:that.number,
                password:that.password,
                adminPass:that.adminPass
            }).then((response) => {
                console.log(response);
                const status = response.data.info.status;
                if(status == 1){
                    MessageBox('提示', '添加成功');
                }else if(status == 2){
                    MessageBox('提示',that.number+'号的密码修改成功');
                }else if(status == 0){
                    MessageBox('提示','管理员密码不正确');
                }else if(status == -2){
                    MessageBox('提示','已经添加过此车号');
                }else{
                    MessageBox('提示','异常错误');
                }
            })

        }
      },
        components:{
        }
    }
</script>
