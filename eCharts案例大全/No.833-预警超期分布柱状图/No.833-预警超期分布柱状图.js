    var path = 'path://M214,1079l8-6h16l8,6-8,6H222Z';
    var zzx1 = ["3", "5"];
    var wgx1 = ["4", "1"];
    var option = {
        backgroundColor:'#091839',
        legend: {
             data: ['预警数', '超期数'],
            
            left: 'center',
            top:'60%',
            textStyle: {
                color:"#fff",
                fontSize:14
            },
            itemWidth: 12,
            itemHeight: 10,
            // itemGap: 35
            color: '#242424'
        },
        tooltip: {
            trigger: 'axis',
            axisPointer: { // 坐标轴指示器，坐标轴触发有效
                type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
            },
            //luohh 注释：本次不需要
            formatter: function(e){
                if(e.length>1){
                    var S=e[1].data-e[0].data;
                    // return e[0].axisValue+":<br>差额=当前－年初<br>="+S;
                    return e[0].axisValue+":<br>预警数："+e[0].data+"<br>"+"超期数："+e[1].data;
                }else if(e.length=1){
                    return e[0].axisValue+":<br>"+e[0].seriesName+"="+e[0].data;
                }

            }
        },
        grid: {
            left: '2%',
            right: '4%',
            bottom: '4%',
            top:'70%', //图表距顶部距离
            containLabel: true
        },
        
        xAxis: {
            type: 'category',
            data: ['宜昌工厂', '南昌工厂'],
            axisLine: {
                lineStyle: {
                    show: true,
                    lineStyle: {
                        color: '#6A989E',
                    }
                }
            },
            axisLabel: {
                // interval: 0,
                // rotate: 40,
                textStyle: {
                    fontFamily: 'Microsoft YaHei',
                    color: '#fff',// x轴颜色
                    fontWeight: 'normal',
                    fontSize: '14',
                    lineHeight: 22
                }
            },
            // splitLine:{
            //     show:true,
            //     lineStyle: {
            //         type: 'dashed',
            //         color: 'rgba(135,140,147,0.8)'
            //     }
            // },
        },

        yAxis: {
            type: 'value',
            name: "         单位: 个",
            nameTextStyle: {
                color: '#ffffff'
            },
            axisLine: {
                show: false,
                lineStyle: {
                    type: 'dashed',
                    color: 'rgba(135,140,147,0.8)'
                }
            },
            splitLine: {
                show: true,
                lineStyle: {
                    color: '#153C64' //左侧显示线
                }
            },
            axisLabel: {
                formatter: '{value}',
                color: '#fff',
                fontSize: 14
            }
        },
        series: [{
            type: 'pictorialBar',
            symbol: path,
            symbolSize: [30, 8],
            symbolOffset: [-18, -4],
            symbolPosition: 'end',
            z: 12,
            color: "#F7C503", //预警柱子封顶颜色
            data: zzx1
        },
            {
                type: 'pictorialBar',
                symbol: path,
                symbolSize: [30, 8],
                symbolOffset: [18, -4],
                symbolPosition: 'end',
                z: 12,
                color: "#FF1155", //超期柱子封顶颜色
                data: wgx1
            },
            {
                type: 'pictorialBar',
                symbol: path,
                symbolSize: [30, 8],
                symbolOffset: [-18, 4],
                z: 12,
                // color: "rgba(126,192,238,0.6)",
                color: "#FCEECC", //预警柱子底部颜色
                data: zzx1
            },
            {
                name: '',
                type: 'pictorialBar',
                symbol: path,
                symbolSize: [30, 8],
                symbolOffset: [18, 4],
                color: "#FFC0CB",//超期柱子底部颜色
                z: 12,
                data: wgx1
            },
            {
            name: '预警数',
            type: 'bar',
            barWidth: '30',
            itemStyle: {
                normal: {
                    opacity: .7,
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: '#F7C503' //预警柱子上半段颜色
                    }, {
                        offset: 1,
                        color: '#FAE190' //预警柱子下半段颜色
                    }]),
                    barBorderRadius: 0,
                },

            },
            label: {
                show: true,
                position: ['-18','-18'],
                color: '#00f8ff',
                fontSize: 12,
            },
            data: zzx1
        },
            {
                name: '超期数',
                type: 'bar',
                barWidth: '30',
                itemStyle: {
                    normal: {
                        opacity: .7,
                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                            offset: 0,
                            color: '#FF2246'
                        }, {
                            offset: 1,
                            color: '#FFC0CB'

                        }]),
                        barBorderRadius: 0,
                    }

                },
                label: {
                    show: true,
                    position: ['18','-18'],
                    color: '#00ffff',
                    fontSize: 12,
                },
                data: wgx1
            },
        ]
    };