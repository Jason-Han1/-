 
    let arr = []
        for (var i = 0; i < 1000; i++) {
            let height = 150 + Math.random() * 10 * 4
            let tz = 40 + Math.random() * 10 * 6
            let newArr = [height, tz]
            arr.push(newArr)

        };
      
      
 option = {
     xAxis:{
         type : 'value',
             scale :'all',
         boundaryGap : ['1%','1%'] ,
     },
     yAxis : {
         type : 'value',
         boundaryGap : ['1%','1%'] ,
          scale :'all',
     },

     series : {
         name : '',
         data :  arr,
         type : 'scatter',
         symbolSize : function (arg){
              console.log(arg)
                
             let h = arg[0]/100
             let w = arg[1]
             let p = w / (h * h)
             if ( p > 28){
                 
                 return 20
             }
             return 10
         },
         itemStyle : {
             color :  function (arg) {
                 console.log(arg)
             let h = arg[0]/100
             let w = arg[1]
             let p = w / (h * h)
             if ( p > 28){
                 
                 return 'red'
             }
             return 'yellow'
             },
         },
        
     }
 }