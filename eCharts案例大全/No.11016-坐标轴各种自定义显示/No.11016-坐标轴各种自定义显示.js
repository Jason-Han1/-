option = {
    xAxis: {
        type: 'category',
        data: ['1', '2', '3','4', '5', '6','1', '2', '3','4', '5', '6','1', '2', '3','4', '5', '6'],
        boundaryGap:false,
        axisLine:{
            show:false
        },
        axisTick:{
            show:false
        },
        splitLine:{
            show: true,
            lineStyle:{
                type:'dashed'
            }
        },
        axisLabel:{
            show:true,
            interval:function(index, value){
                if(index == 0){
                    return true
                }
                if(index == 9){
                    return true
                }
                if(index == 17){
                    return true
                }
            },
            formatter:function(value, index){
                console.log(value)
               var labels = []
               if( index == 0){
                   labels.push(`{a|${value} 这段使用a}`)
               }else if(index == 9){
                   labels.push(`{b|${value} 这段使用b}`)
               }else if(index == 17){
                   labels.push(`{c|${value} 这段使用c}`)
               }
               return labels
            },
            rich: {
                a: {
                    color: 'red',
                    lineHeight: 10,
                    padding:[0,0,0,60]
                },
                b: {
                    color:'#000',
                    backgroundColor:'#ccc',
                    height: 30,
                    borderRadius:6
                },
                c: {
                    color:'green',
                    padding:[0,0,0,-60]
                }
            }
        }
    },
    yAxis: [{
        type: 'value',
        splitNumber:1,
        min:-150,
        max:840,
        axisLine:{
            lineStyle:{
                color:'#ccc'
            }
        },
        axisTick:{
            show:false
        },
        axisLabel:{
            show:false,
            showMinLabel:true,
            showMaxLabel:true
        },
        splitLine:{
            show:false
        }
    },
    {
        type: 'value',
        splitNumber:1,
        min:-150,
        max:840,
        axisLine:{
            lineStyle:{
                color:'#ccc'
            }
        },
        axisTick:{
            show:false
        },
        axisLabel:{
           inside:true,
           showMinLabel:true,
           showMaxLabel:true,
           formatter:function(value, index){
               var labels = []
               if( index == 2){
                   labels.push(`{a|${value} 这段使用a}`)
               }else if(index == 1){
                   labels.push(`{b|${value} 这段使用b}`)
               }else if(index == 0){
                   labels.push(`{c|${value} 这段使用c}`)
               }
               return labels
            },
            rich: {
                a: {
                    color: 'red',
                    lineHeight: 10,
                    padding:[-20,0,0,0]
                },
                b: {
                    color:'#000',
                    backgroundColor:'#ccc',
                    height: 30,
                    borderRadius:6
                },
                c: {
                    color:'#000',
                    fontSize: 18,
                    padding:[20,0,0,0]
                }
            }
        }
    }],
    series: [{
        data: [-100, 790, 321, -50, 389, 467,390, 321, 250, 389, 467, 321, -50, 389, 467,790, 321, -50, 389, 467],
        type: 'line',
        showSymbol:false
    }]
};
