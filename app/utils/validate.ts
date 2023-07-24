
export const validatePasssword = (password, repeatPassword):String | boolean => {
    var regularExpression = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;
    if(!regularExpression.test(password) || password.length<8){
        return 'Пароль не надежный'
    }else if(password !== repeatPassword){
        return "Пароли не совпадают"
    }else{
        return false
    }
    
} 