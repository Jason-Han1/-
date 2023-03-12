 var option = {
        // backgroundColor: '#0E2A43',
         tooltip: {
                trigger: 'axis',       
                backgroundColor:"rgba(255,255,255,0.1)",
                axisPointer:{type:'line',lineStyle:{color:'rgba(255,255,255,0.1)'}},
                textStyle:{
                    fontSize:'10',
                },
    
                // formatter:'{b0}<br/>{a0}：{c0}万<br/>{a1}：{c1}万<br/>{a2}：{c2}万',
                formatter: function(params){
                    var result = ""
                    var respon = ""
                    for (var key in params){
                        respon =params[key].seriesName +"："+ params[key].value
                        result = result + respon + "万" + "<br/>" 
                    }
                    return params[0].name+"<br/>"+result   
                  }
            },
          legend: { 
                icon:'circle',
                left:577,
                top:'30%',
                itemWidth: 10,
                itemHeight: 10,
                textStyle: {
                  color:'#999999'
                },
                top: '-1%',
                selectedMode:false,
                data: ['固网家庭网关','存量智能网关','已完成支持IPv6升级数量'],
            },
            grid: { //图表的位置
                top: '20%',
                left: '3%',
                right: '4%',
                bottom: '6%',
                containLabel: true
            },
        yAxis: [ {
                type: 'value',
                name:'万',
                min: 0,
                max: 300,
                // interval: 40,
                axisLabel: {textStyle:{color: '#8c99a8',fontSize:'10',fontFamily: 'Microsoft YaHei'},formatter: '{value}'},
        axisTick: {
            show: false,
            length: 15,
            lineStyle: {
                color: "#e4e4e4",
            }
        },
        splitLine: {
            // show:true,
            lineStyle: {
                type: 'bolid',
                color: '#50556b'
            }
        },
        axisLine: {
            show: false,
            lineStyle: {
                type:'bolid',
                color: "#50556b"
            },
        },
        nameTextStyle: {
            color: "#999"
        },
        splitArea: {
            show: false
        }   
            }],
        
        xAxis: [
            {
                type: 'category',
                axisTick: {
                    show: false
                },
                axisLine: {
                    show: false,
                    lineStyle: {
                        color: '#fff',
                    }
                },
                axisLabel:{ textStyle:{color: '#999999', fontSize:'10', fontFamily: 'Microsoft YaHei'}},
                data: ['2019-06', '2019-07', '2019-08', '2019-09', '2019-10', '2019-11']
            }, 
            {
                type: 'category',
                axisLine: {
                    show: false
                },
                axisTick: {
                    show: false
                },
                axisLabel: {
                    show: false
                },
                splitArea: {
                    show: false
                },
                splitLine: {
                    show: false
                },
                data: ['2019-06', '2019-07', '2019-08', '2019-09', '2019-10', '2019-11']
            },
    
        ],
        series: [{
                name: '固网家庭网关',
                type: 'bar',
                xAxisIndex: 1,
                itemStyle: {
                    normal: {
                        show: true,
                        color: '#2aa5f3',
                        // barBorderRadius: 50,
                        borderWidth: 0,
                        borderColor: '#333',
                    }
                },
                barWidth: '20px',
                data:[272, 272, 272, 281,282],
            },
           
            {
                name: '存量智能网关',
                type: 'bar',
                barWidth: '20px',
                itemStyle: {
                    normal: {
                        show: true,
                        color:'#29eef4',
                        // barBorderRadius: 50,
                        borderWidth: 0,
                        borderColor: '#333',
                    }
                },
                label: {
                    normal: {
                        show: false,
                        position: 'top',
                        textStyle: {
                            color: '#fff'
                        }
                    }
                },
                barGap: '3%',
                data: [103, 103, 103, 111,115]
            },
             {
                name: '已完成支持IPv6升级数量',
                type: 'bar',
                xAxisIndex: 1,
    
                itemStyle: {
                    normal: {
                        show: true,
                        color: '#935cff',
                        borderWidth: 0,
                        borderColor: '#333',
                    }
                },
                barWidth: '20px',
                barGap: '3%',
                data: [127, 194, 194, 203,210]
            },
            {
                name: '',
                type: 'bar',
                itemStyle: {
                    normal: {
                        show: false,
                        color:'transparent',
                        // color:'red',
                        borderWidth: 0,
                        borderColor: '#333',
                    }
                },
                label: {
                    normal: {
                        show: false,
                        position: 'top',
                        textStyle: {
                            color: '#fff'
                        }
                    }
                },
                barWidth: '20px',
                // data: [0, 0, 0,0]
            },
             
    
        ]
    };