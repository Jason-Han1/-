option = {
    color: ['#e5cd00','#F9BD3D'],
    backgroundColor: '#04243E',
    xAxis: {
        type: 'category',
        data: ['累计', '目标'],
        axisLabel : {
            color : 'white'
        },
        axisLine : {
            lineStyle : {
                color : 'rgba(200,200,200,0.2)'
            }
           
        },
    },
    yAxis: {
        type: 'value',
        axisLine : {
            show : false,
            lineStyle : {
                color : 'rgba(200,200,200,0.2)'
            }
        },
        axisLabel : {
              show : false,
            color : '#4397d2'
        },
        splitLine : {
              show : false,
            lineStyle : {
                color : 'rgba(200,200,200,0.2)'
            }
        }
    },
    grid : {
        top : '12%',
        bottom : '15%'
    },
    series: [{
        data: [{
            value: 100,
            "itemStyle": {
                    "color": "#2CBF89"
            }
        },{
            value: 100,
            "itemStyle": {
                    "color": "#F9BD3D"
            }
        }],
        type: 'bar',
        barWidth: 20,
        itemStyle : {
          normal : {
              barBorderRadius: [10, 10, 0, 0] //圆角
          }  
        },
        label: {
            normal: {
                show: true,
                position: 'top',
                color : 'white',
                formatter: function(e){
                    return e.value + '%';
                    
                },
            }
        },
    }]
};