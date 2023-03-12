var dataValArray = 0.63;
var uploadedDataURL = "/asset/get/s/data-1559120606810-8K55q2kWT.png";
option = {
    tooltip: {
        formatter: '{a} <br/>{b} : {c}%'
    },
    series: [
        {
            name: '业务指标',
            type: 'gauge',
            max: 50,
            detail: {
                formatter: ['{value}℃','{a|今日平均体温}'].join('\n'),
                fontSize: 30,
                width: '100%',
                height: '30%',
                padding: [-300, 0, 0, 0],
                rich:{
                    a:{
                        color:'#cccccc',
                        fontSize: 20,
                        padding: [10, 0, 10, 0],
                    }
                }
            },
            data: [{value: 50}],
            axisLine: {
              lineStyle: {
                color: [
                    [1,new echarts.graphic.LinearGradient(0, 0, 1, 0, [
                      {
                        offset: 0.1,
                        color: "#64d8fd"
                      },
                      {
                        offset: 0.6,
                        color: "#89c2db"
                      },
                      {
                        offset: 1,
                        color: "#fb4770"
                      }
                    ])
                  ]
                ],
                width: 22
              }
            },
            splitLine: {
                length: 22,
                lineStyle:{
                    width:4
                }
            },
            axisLabel:{
                distance: -20,
                show: true,
                formatter: function(value){
                if(value === 0 || value === 50){
                      return value + '℃'
                    }
                    return ''
                  },
            //   padding: '8 0 0 0'
                lineHeight: -60,
                fontSize: 40
            },
            pointer:{
              show: false  
            },
            axisTick:{
                show: false
            },
            
        },
        {
            //进度圆环
            name: 'Line 1',
            type: 'pie',
            startAngle: -135,
            clockWise: true,
            radius:['71%','72%'],
            itemStyle: {
                normal: {
                    label: {
                        show: true
                    },
                    labelLine: {
                        show: false
                    },
                }
            },
            hoverAnimation: false,

            data: [{
                value:  50 ,
                itemStyle: {
                    normal: {
                        color: 'transparent'
                    }
                }
            },{//画中间的图标
                name: "",
                value: 0,
                label: {
                    position:'inside',
                    backgroundColor: '#53adf4',
                    width: 16,
                    height: 16,
                    borderRadius: 20,
                    borderColor: '#fff',
                    borderWidth: 4,
                    padding: 8
                }
            }, {
                value: 17 ,
                name: 'invisible',
                itemStyle: {
                    normal: {
                        color: 'transparent', //未完成的圆环的颜色
                        label: {
                            show: false
                        },
                        labelLine: {
                            show: false
                        }
                    }
                }
            }
            ]
        }
    ]
};
setInterval(function () {
    let num = (Math.random() * 50).toFixed(2) - 0;
    option.series[0].data[0].value = num;
    option.series[1].data[0].value = num;
    option.series[1].data[2].value = 67 - num;
    myChart.setOption(option, true);
},2000);
