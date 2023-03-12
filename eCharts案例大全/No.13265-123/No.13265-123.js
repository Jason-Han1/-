var myColor=['#192948','#192948','#192948','#192948','#192948','#192948','#192948','#192948'];
option = {
        backgroundColor:'#fff',
        grid: {
            left: '5%',
            top:'1%',
            right: '2%',
            bottom: '1%',
            containLabel: true
        },
        xAxis: [{
            show: false,
        }],
        yAxis: [{
                axisTick:'none',
                axisLine:'none',
                offset:'27',
                axisLabel: {
                        textStyle: {
                            color: '#192948',
                            fontSize:'16',
                        }
                    },
                data: ['投影机使用寿命通知','投影机其它故障','投影机画面不正常','投影机画面暗','投影机故障','投影机下课后无法自动关机','投影机系统启动后投影机不加电','投影机无法切换到计算机画面','投影机温度指示灯报警','投影机灯泡指示灯报警','投影机开启无法启动']
            }, {
                axisTick:'none',
                axisLine:'none',
                axisLabel: {
                        textStyle: {
                            color: '#192948',
                            fontSize:'16',
                        }
                    },
                data: ['3','4','9','12','20','30','40','50','118','120','125']
            },{
                name:'',
                    nameGap:'50',
                    nameTextStyle:{
                        color:'#192948',
                        fontSize:'16',
                    },
                axisLine:{
                  lineStyle:{
                    color:'rgba(0,0,0,0)'
                  }
                },
                data: [],
        }],
        series: [{
            name: '条',
            type: 'bar',
            yAxisIndex: 0,
            data: [0.91,1.25,1.71,2.19,3.34,4.29,6.11,7.04,18.27,18.93,29.94],
            label:{
                  normal:{
                    show:true,
                    position:'right',
                    formatter:function(param){
                      return param.value + '%';
                    },
                    textStyle:{
                       color: '#192948',
                       fontSize:'16',
                    }
                  }
            },
            barWidth: 12,
            itemStyle: {
                normal: {
                    color: function(params) {
                            var num=myColor.length;
                            return myColor[params.dataIndex%num]
                    },
                }
            },
            z: 2
        }, {
            name: '白框',
            type: 'bar',
            yAxisIndex: 1,
            barGap: '-100%',
            data: [99,99.5,99.5,99.5,99,99.5,99.5,99.5,99.5,99.5,99.5,99.5],
            barWidth: 20,
            itemStyle: {
                normal: {
                    color: '#fff',
                    barBorderRadius: 5,
                }
            },
            z: 1
        }, {
            name: '外框',
            type: 'bar',
            yAxisIndex: 2,
            barGap: '-100%',
            data: [100,100,100,100,100,100,100,100,100,100,100],
            barWidth: 24,
            itemStyle: {
                normal: {
                    color: function(params) {
                            var num=myColor.length;
                            return myColor[params.dataIndex%num]
                    },
                    barBorderRadius: 5,
                }
            },
            z: 0
        }, 
        {
            name: '外圆',
            type: 'scatter',
            hoverAnimation: false,
            data: [0,0,0,0,0,0,0,0,0,0,0],
            yAxisIndex: 1,
            symbolSize: 24,
            itemStyle: {
                normal: {
                    color: function(params) {
                            var num=myColor.length;
                            return myColor[params.dataIndex%num]
                    },
                    opacity: 1,
                }
            },
            z: 2
        }]
    };