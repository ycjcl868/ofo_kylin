<template>
    <div class="add-wrapper">
      <mt-field label="1111" placeholder="请输入1111" v-model="number" type="number"></mt-field>
      <mt-field label="2222" placeholder="请输入2222" v-model="password" type="number"></mt-field>
        <mt-button @click.native="doAdd" class="add-button" type="primary">点击3333</mt-button>
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
            if(that.number == '' || that.password == ''){
                MessageBox('提示','添加的1111不能为空');
                return;
            }
            axios.post('/api/add',{
                number:that.number,
                password:that.password
            }).then((response) => {
                console.log(response);
                const status = response.data.info.status;
                if(status == 1){
                    MessageBox('提示', '1111成功');
                }else if(status == 2){
                    MessageBox('提示',that.number+'号的2222修改成功');
                }else if(status == -2){
                    MessageBox('提示','已经添加过此1111');
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
