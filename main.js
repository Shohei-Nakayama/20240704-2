var app = new Vue({
el:'#app',
data:{
    myPrice:""
},
computed:{
        function(myPrice){
                                if (myPrice >=50){
                                    alert('myPriceは５０以上です')
                                }else if(myPrice >=10){
                                    alert('myPriceは10以上５０未満です')
                                }else{
                                    alert('myPriceは１０未満です')
                                  }
                                }
                        }
})