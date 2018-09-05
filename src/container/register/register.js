import React from 'react'
import { List,InputItem,WingBlank,Radio,WhiteSpace,Button} from 'antd-mobile'
class Register extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            user:'',
            pwd:'',
            repeatpwd:'',
            type:'genius'
        }
    }
    handlerChange(key,v){
        this.setState({
            [key]:v
        })
    }
    register(){
        console.log(this.state);
    }
    render(){
        const RadioItem = Radio.RadioItem;

        return (
        <WingBlank>
            <List>
                <InputItem onChange={(v)=>this.handlerChange('user',v) }>用户名</InputItem>
                <WhiteSpace/>
                <InputItem onChange={(v)=>this.handlerChange('pwd',v) }>密码</InputItem>
                <WhiteSpace/>
                <InputItem onChange={(v)=>this.handlerChange('repeatpwd',v) }>确认密码</InputItem>
                <WhiteSpace/>
                <RadioItem 
                    checked={this.state.type == 'genius'}
                    onChange={(v)=>this.handlerChange('type','genius') }
                > 
                牛人
                </RadioItem >
                <RadioItem 
                    checked={this.state.type == 'boss'}
                    onChange={(v)=>this.handlerChange('type','boss') }
                > BOSS
                </RadioItem >
            </List>
            <WhiteSpace/>
            <Button type='primary' onClick={
                (v)=>this.register('type','boss')
            }>注册 </Button>
        </WingBlank>
         )
    }


}

export default Register;