var gain = 1.2;
var gap = 0;
var myColor=['#e63810','#ff6b00','#e3b61f','#13b5b1'];
var myBgColor=['rgba(230,56,16,0.2)','rgba(255,107,0,0.2)','rgba(227,182,31,0.2)','rgba(19,181,177,0.2)'];
option = {
    backgroundColor:'#0e2147',
    grid: {
        left: '4%',
        top:'10%',
        right: '5%',
        bottom: '7%',
        containLabel: true
    },
    xAxis: [{
            type: 'category',
            axisTick: {
                show: false
            },
            axisLine:{
                          lineStyle:{
                              color:'rgba(160,160,160,0.3)',
                          }
                      },
            axisLabel:{
                textStyle:{
                    color:function(param,index){
                        return myColor[index]
                    },
                    fontSize:12*gain,
                }
            },
            data: ['法定审限内结案','超审限未结案','延长审限结案','超审限结案']
        }, {
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
            data: []
        },
    ],
    yAxis: {
        type: 'value',
        name:'单位：件',
        nameGap:35+gap,
        nameTextStyle:{
            color:'#ffffff',
            fontSize:16*gain,
        },
        axisTick: {
            show: false
        },
        axisLine: {
            show: false
        },
        splitLine: {
            lineStyle:{
                color:'rgba(160,160,160,0.3)',
            }
        },
        axisLabel: {
            textStyle: {
                color: 'rgba(255,255,255,0.8)',
                fontSize:14*gain,
            }
        }
    },
    series: [{
            type: 'bar',
            xAxisIndex: 1,
            itemStyle: {
                normal: {
                    show: true,
                    color: function(params) {
                        var num=myBgColor.length;
                        return myBgColor[params.dataIndex%num]
                    },
                    barBorderRadius: 50,
                    borderWidth: 0,
                    borderColor: '#333',
                }
            },
            barWidth: '25%',
            data: [33, 33, 33,33]
        }, 
        {
            type: 'bar',
            itemStyle: {
                normal: {
                    show: true,
                    color: function(params) {
                        var num=myColor.length;
                        return myColor[params.dataIndex%num]
                    },
                    barBorderRadius: 50,
                    borderWidth: 0,
                    borderColor: '#333',
                }
            },
            label: {
                normal: {
                    show: true,
                    position: 'top',
                    textStyle:{
                        color:'#ffffff',
                        fontSize:16*gain,
                    }
                }
            },
            barWidth: '25%',
            data: [8, 15, 10,6]
        }
    ]
};