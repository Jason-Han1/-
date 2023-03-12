var data = ['高','中','低'];
var data2 = [95, 79,95];
option = {
 
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    yAxis:  {
        type: 'value',
        axisLine:{
            show: false
        },
        axisLabel : {
            show: false
        },
        splitLine :{
            show: false
        },
        axisTick :{
            show: false
        }
    },
    xAxis: {
        type: 'category',
        axisTick :{
            show: false
        },
         axisLine:{
            lineStyle:{
                color:"#814255"
            }
        },
        axisLabel : {
             show: false
         },
        data: data
    },
    series: [
        {
            name: '',
            type: 'bar',
            stack: '总量',
             barWidth: 5,
            label: {
                normal: {
                    show: true,
                    position: 'insideRight',
                    textStyle:{
                         color:"#FE4070"
                    }
                }
            },
              itemStyle:{
              normal:{
                  color:"#FE4070"
              }  
            },
            data: [5, 21,5]
        },
        {
            name: '',
            type: 'bar',
            stack: '总量',
            barWidth: 5,
            label: {
                normal: {
                    show: true,
                    position: 'top',
                    formatter: '{b}',
                    textStyle:{
                         color:"#40A5FF"
                    }
                }
            },
            itemStyle:{
              normal:{
                  color:"#2E4072"
              }  
            },
            data: [{name:"高",value:95},
                {name:"中",value:75},
                {name:"低",value:95}
            ]
        }
    ]
};