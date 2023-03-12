    var path = 'path://M214,1079l8-6h16l8,6-8,6H222Z';
    var zzx1 = ["2771", "3801", "8141", "11121", "22711"];
    var wgx1 = ["3731", "4011", "6313", "10861", "23641"];
    var option = {
        backgroundColor:'#0e2147',
        tooltip: {
            trigger: 'axis',
            axisPointer: { // 坐标轴指示器，坐标轴触发有效
                type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
            },
            formatter: function(e){
                if(e.length>1){
                    var S=e[1].data-e[0].data;
                    return e[0].axisValue+":<br>差额=当前－年初<br>="+S;
                }else if(e.length=1){
                    return e[0].axisValue+":<br>"+e[0].seriesName+"="+e[0].data;
                }

            }
        },
        grid: {
            left: '2%',
            right: '4%',
            bottom: '4%',
            top:'16%',
            containLabel: true
        },
        legend: {
            data: ['年初值', '当前值'],
            left: 220,
            top:1,
            textStyle: {
                color:"#00ffff",
                fontSize:14
            },
            itemWidth: 12,
            itemHeight: 10,
            // itemGap: 35
            color: '#242424'
        },
        xAxis: {
            type: 'category',
            data: ['炉','钢','铸','自','外'],
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
            name: "         金额( 单位: 万元 )",
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
                    color: 'rgba(135,140,147,1)' //左侧显示线
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
            symbolOffset: [-20, -4],
            symbolPosition: 'end',
            z: 12,
            color: "#3440FF",
            data: zzx1
        },
            {
                type: 'pictorialBar',
                symbol: path,
                symbolSize: [30, 8],
                symbolOffset: [20, -4],
                symbolPosition: 'end',
                z: 12,
                color: "#FF1155",
                data: wgx1
            },
            {
                type: 'pictorialBar',
                symbol: path,
                symbolSize: [30, 8],
                symbolOffset: [-20, 4],
                z: 12,
                color: "rgba(126,192,238,0.6)",
                data: zzx1
            },
            {
                name: '',
                type: 'pictorialBar',
                symbol: path,
                symbolSize: [30, 8],
                symbolOffset: [20, 4],
                color: "#FFC0CB",
                z: 12,
                data: wgx1
            },{
            name: '年初值',
            type: 'bar',
            barWidth: '30',
            itemStyle: {
                normal: {
                    opacity: .7,
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: 'blue'
                    }, {
                        offset: 1,
                        color: '#7EC0EE'
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
                name: '当前值',
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
                    color: '#00f8ff',
                    fontSize: 12,
                },
                data: wgx1
            },
        ]
    };