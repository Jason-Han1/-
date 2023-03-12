
var datas=[78,59,15,78,59]
option = {
        backgroundColor:'#0e2147',
        grid: {
            left: '5%',
            top:'2%',
            right: '5%',
            bottom: '3%',
            containLabel: true
        },
        xAxis: [{
            show: false,
        }],
        yAxis: [{
                splitLine:'none',
                axisTick:'none',
                axisLine:'none',
                axisLabel: {
                        textStyle: {
                            color: '#04d0d2',
                        }
                    },
                data: ['1项目','2项目','3项目','4项目','5项目']
            }, {
                splitLine:'',
                axisTick:'none',
                axisLine:'none',
                data: datas,
                axisLabel: {
                        show:true,
                        padding: [0,8,10,0],
                        textStyle: {
                            color:'#04d0d2',
                        },
                    },
                
            },{
                splitLine:'none',
                axisTick:'none',
                axisLine:'none',
                data:[]
            }],
        series: [
            {
            name: '条',
            type: 'bar',
            yAxisIndex: 0,
            data: datas,
            label:{
                  normal:{
                    show:true,
                    color: '#04d0d2',
                    fontFamily:'arial',
                    formatter:'{c}%',
                    position: 'left',
                    offset: [80, -20],
                    fontSize: 14,
                  }
            },
            barWidth:12,
            itemStyle: {
                normal: {
                    color:  new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                            offset: 0,
                            color: "#ff7c00"
                        },
                        {
                            offset: 1,
                            color: "#fd2700"
                        }
                    ]),
                    barBorderRadius: 5,
                }
            },
            z: 2
        },
        {
            name: '外框',
            type: 'bar',
            yAxisIndex: 2,
            barGap: '-100%',
            data: [100,100,100,100,100],
            barWidth:12,
            itemStyle: {
                normal: {
                      color: '#121e47',
                    opacity:.2,
                    barBorderRadius: 5,
                }
            },
            z: 0
        }]
    };