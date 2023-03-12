option = {
    backgroundColor: '#112232',
    title : {
      text: '表务流程管理',
      textStyle:{
          color:"#fff"
      }

    },
    tooltip : {
        trigger: 'axis'
    },
    grid: {
        left: '2%',
        right: '2%',
        bottom: '3%',
        top:"10%",
        containLabel: true
    },
    legend: {
        data:['2018年', '2019年'],
      textStyle:{
				color:'#1bb4f6'
			},
    },
    toolbox: {
        show : true,
        feature : {
            mark : {show: true},
            dataView : {show: true, readOnly: false},
            magicType: {show: true, type: ['line', 'bar']},
            restore : {show: true},
            saveAsImage : {show: true}
        }
    },
    calculable : true,
    xAxis : [
        {
            type : 'value',
            boundaryGap : [0, 0.01],
          axisLabel: {
              textStyle: {
                  fontSize: 18,
                  color: '#D5CBE8'
              }
          },
           axisLine: {
            lineStyle: {
                color: '#DDD'
            }
        },
        splitLine: {
            lineStyle: {
                type: 'dashed',
                color: '#DDD'
            }
        }
        }
    ],
    yAxis : [
        {
            type : 'category',
            name:"",
            data : ['欠费停水','改三供一业','撤表','周期','故障','新装'],
          axisLabel: {
              textStyle: {
                  fontSize: 18,
                  color: '#D5CBE8'
              }
          },
           axisLine: {
            lineStyle: {
                color: '#DDD'
            }
        },
        }
    ],
    series : [
        {
            name:'2018年',
            type:'bar',
             itemStyle: {
            normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: '#8bd46e'
                }, {
                    offset: 1,
                    color: '#09bcb7'
                }]),
                barBorderRadius: 10,
                
            }
            
          },
            data:[100,150, 580, 850, 500,3000],
        },
        {
            name:'2019年',
            type:'bar',
            itemStyle: {
            normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: '#248ff7'
                }, {
                    offset: 1,
                    color: '#6851f1'
                }]),
            barBorderRadius: 10,
            }
          },
            data:[200,300, 650, 880, 300,3500]
        }
    ]
};
                    