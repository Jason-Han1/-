option = {
    title: {
        text: '九大运营中心组织评价',
        left: 'center'
    },
    tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b} : {c}'
    },
   
    xAxis: {
        type: 'category',
        name: 'x',
         
        splitLine: {
            show: true,
            lineStyle:{
                width: 1,
                type: 'dashed'
            }
        },
        data: ['30', '40', '50', '60', '70', '80', '90', '100'],
        
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    yAxis: {
        type: 'log',
        //网格样式
        splitLine: {
            show: true,
            lineStyle:{
                 width: 1,
                 type: 'dashed'
            }
        },
    },
    series: [
        {
            name: '组织评价',
            type: 'line',
            symbol: "none",
            data: [1,2,4,8,16,32,64,128],
            itemStyle : {  
                        normal : {  
                            lineStyle:{  
                                color:'#fc839f'
                            }  
                        }  
                    },  
            areaStyle: {
           normal: {
             // 线性渐变，前4个参数分别是x0,y0,x2,y2(范围0~1);相当于图形包围盒中的百分比。如果最后一个参数是‘true’，则该四个值是绝对像素位置。
             color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
               offset: 0,
               color: '#fc839f'
             },
             {
               offset: 1,
               color: 'rgba(254,63,93, 0)'
             }
             ], false),
             }
         },
        },
        
    ]
};
