var dataAxis = ['西安市','铜川市','宝鸡市','咸阳市','渭南市','延安市','汉中市','榆林市','安康市','商洛市','西咸新区','杨凌示范区','二分局'];
var data = [700000, 1700000, 1300000, 400000, 1000000, 1400000, 300000, 600000, 950000, 450000, 1300000, 
1000000, 320000];



var data2 = [70000, 40000, 160000, 50000, 50000, 160000, 100000, 260000, 235000, 40000, 150000, 
100000, 32000];
var yMax = 500;
var dataShadow = [];

for (var i = 0; i < data.length; i++) {
    dataShadow.push(yMax);
}

option = {
     legend: {
        data:['减免金额','减免人数']
    },
    xAxis: {
        data: dataAxis,
        axisLabel: {
             interval:0,
            textStyle: {
                color: '#7a8489'
            }
        },
         splitLine:{
             lineStyle:{
                color:"#f3f3f3"
            }
        },
        axisTick: {
            show: false
        },
        axisLine: {
             lineStyle:{
                color:"#d5d4d9"
            }
        },
        splitArea:{
            show:0
        },
        z: 10
    },
    yAxis: [{
        axisLine: {
            lineStyle:{
                color:"#d5d4d9"
            }
        },
          splitArea:{
            show:0
        },
        splitLine:{
             lineStyle:{
                color:"#f3f3f3"
            }
        },
        axisTick: {
            
        },
        axisLabel: {
            textStyle: {
                color: '#999'
            },
           
            formatter:'{value} 万元'
        }
    },
    {
         
        axisLine: {
            lineStyle:{
                color:"#d5d4d9"
            }
        },
          splitArea:{
            show:0
        },
        splitLine:{
             lineStyle:{
                color:"#f3f3f3"
            }
        },
        axisTick: {
            
        },
        axisLabel: {
            textStyle: {
                color: '#999'
            },
           // formatter:'{value} 万元'
        }
    }
    ],
    dataZoom: [
        {
            type: 'inside'
        }
    ],
    series: [
        { // For shadow
            type: 'bar',
            itemStyle: {
                normal: {color: '#ebf3fc'}
            },
            barGap:'-100%',
            barCategoryGap:'40%',
            data: dataShadow,
            animation: false
        },
        {
               name:"减免金额",
            type: 'bar',
             
            itemStyle: {
                normal: {
                      barBorderRadius:[5, 5, 0, 0],
                    color: new echarts.graphic.LinearGradient(
                        0, 0, 0, 1,
                        [
                            {offset: 0, color: '#1bc3d1'},
                            {offset: 0.5, color: '#25bccd'},
                            {offset: 1, color: '#569bba'}
                        ]
                    )
                }
            },
            data: data
        },
         {
             name:"减免人数",
            type: 'line',
             yAxisIndex:1,
                smooth: true,
            itemStyle: {
                normal: {
                      barBorderRadius:[5, 5, 0, 0],
                    color: "#02a3ff"
                }
            },
            data: data2
        }
    ]
};

 