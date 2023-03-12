    option = {
        tooltip: {
            type: "cross",
            trigger: 'axis',
            formatter:function(params){
                let res = ''
                for (let i = 0; i < params.length-1; i++) {
                    let series = params[i];
                    res += series.marker + series.seriesName + ":" + series.data + "<br/>";
                }
                return res;
            }
        },
        legend: {
            data: ['邮件营销', '联盟广告', '视频广告']
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        toolbox: {
            feature: {
                saveAsImage: {}
            }
        },
        xAxis: {
            type: 'category',
            boundaryGap: false,
            axisLine:{
                lineStyle:{
                    color:'#ccc'
                }
            },
            axisLabel: {
                show: true,
                textStyle: {
                    color: '#333'
                }
            },
            data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
        },
        yAxis: [{
            type: 'value',
            position:'right',
            axisLine:{
                lineStyle:{
                    color:'#ccc'
                }
            },
            axisLabel: {
                show: true,
                textStyle: {
                    color: '#333'
                }
            },
        },{
            type: 'value',
            position:'left',
            axisLine:{
                lineStyle:{
                    color:'#ccc'
                }
            },
            axisLabel: {
                show: true,
                textStyle: {
                    color: '#333'
                }
            },
        }],
        series: [
            {
                name: '邮件营销',
                type: 'line',
                symbol: 'none',
                lineStyle: {
                    color: '#53A58A',
                },
                markArea: {
                    silent: true,
                    label:{
                        position:[10, 10],
                        color:'#53A58A',
                        fontSize:14,
                        fontWeight:'bold'
                    },
                    itemStyle:{
                      color: 'rgba(83,165,138,.1)',
                    },
                    data: [
                        [{
                            xAxis: '周四',
                            name:'Halving',
                            
                        }, {
                            xAxis: '周日'
                        }]
                    ]
                },
                markLine: {
                    symbol: 'none',
                    label: {show: false},
                    lineStyle:{
                        type:'solid',
                        color: '#53A58A',
                        width: 1.5
                    },
                    data: [
                        {xAxis: '周四'},
                    ]
                },
                data: [220, 182, 191, 234, 290, 330, 310],
            },
            {
                name: '联盟广告',
                type: 'line',
                symbol: 'none',
                lineStyle: {
                    color: '#F19A41',
                },
                data: [120, 132, 101, 134]
            },
            {
                name: '视频广告',
                type: 'line',
                symbol: 'none',
                lineStyle: {
                    color: '#6C7AB4',
                },
                data: [150, 232, 201, 154, 190, 330, 410]
            },
            {
                name: '百分率',
                type: 'line',
                symbol: 'none',
                lineStyle: {
                    color: 'rgba(255,255,255,0)',
                },
                yAxisIndex:1,
                data: [1,2,3,4,5,5,5]
            }
        ]
    } 