import React from 'react'
import axios from 'axios'
import { withRouter } from 'react-router-dom'
@withRouter
class AuthRoute extends React.Component{
    constructor(props){
        super(props);
        
    }
   componentDidMount(){
   }  
   render(){
         //获取用户信息
        const publicList = ['/login','/register'];
        const pathname = this.props.location.pathname;
        if(publicList.indexOf(pathname) > -1){
            return null;
        }
        axios.get('/user/info').then((res)=>{
            
                if(res.status == 200){
                    
                    if(res.data.code == 0){
                        //有登录信息
                        console.log('有登录信息');
                    }else{
                        console.log('history');
                        this.props.history.push('/login');
                    }
                }else{
                    console.log('请求失败');
                }
            },(err)=>{
                console.log(err);
            });
                //是否登录
                //现在的URL地址，login是不需要跳转
                //用户的type 身份是boss 还是牛人
                //用户是否完善信息(选择头像 个人简历)

    
       return null;
   }


}
export default AuthRoute;