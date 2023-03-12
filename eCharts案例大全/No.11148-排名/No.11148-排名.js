option = {
    backgroundColor: 'white',
    yAxis: {
        type: 'category',
        data: ['1 武汉', '2 孝感', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        axisLabel : {
            color : 'black'
        },
        axisLine : {
            lineStyle : {
                color : 'rgba(200,200,200,0)'
            }
           
        },
    },
    xAxis: {
        type: 'value',
        axisLine : {
            show : false,
            lineStyle : {
                color : 'rgba(200,200,200,0.2)'
            }
        },
        axisLabel : {
            show: false,
            color : '#4397d2'
        },
        splitLine : {
            lineStyle : {
                color : 'rgba(200,200,200,0)'
            }
        }
    },
    grid : {
        top : '12%',
        bottom : '15%'
    },
    series: [{
        //data: [10,97,6,5,4,3,2],
        data: [{
           value : 10,
           itemStyle: {
               color: 'blue'
           }
        },{
           value : 110,
           itemStyle: {
               color: 'orange'
           }
        }],
        type: 'bar',
        barWidth: 20,
        itemStyle : {
          normal : {
              barBorderRadius: [0, 10, 10, 0] //圆角
          }  
        },
        label: {
            normal: {
                show: true,
                position: 'right',
                formatter: function(e){
                    return e.value;
                    
                },
                color : 'black'
            }
        },
    }]
};