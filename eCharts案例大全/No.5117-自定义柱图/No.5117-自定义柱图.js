    var zzx1 = ["2771", "3801", "8141", "11121", "22711"];
    var wgx1 = ["3731", "4011", "6313", "10861", "23641"];
    var option = {
        backgroundColor:'#0e2147',
        grid: {
            left: '2%',
            right: '4%',
            bottom: '4%',
            top:'16%',
            containLabel: true
        },
        legend: {
            data: ['教职工', '学生'],
            left: 220,
            top:1,
            textStyle: {
                color:"#fff",
                fontSize:14
            },
            itemWidth: 12,
            itemHeight: 12,
            color: '#fff'
        },
        xAxis: {
            type: 'category',
            data: ['2016','2017','2018','2019','2020'],
            axisLine: {
                lineStyle: {
                    show: true,
                    lineStyle: {
                        color: '#fff',
                    }
                }
            },
            axisLabel:{
                color: '#fff',
            },
        },

        yAxis: {
            type: 'value',
            name: "人数",
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
            symbolSize: [25, 8],
            symbolOffset: [-16, -4],
            symbolPosition: 'end',
            z: 12,
            color: "rgb(172,172,0)",
            data: zzx1
        },
            {
                type: 'pictorialBar',
                symbolSize: [25, 8],
                symbolOffset: [16, -4],
                symbolPosition: 'end',
                z: 12,
                color: "rgb(15,148,210)",
                data: wgx1
            },
            {
                type: 'pictorialBar',
                symbolSize: [25, 8],
                symbolOffset: [-16, 4],
                z: 12,
                color: 'rgb(221,221,0)',
                data: zzx1
            },
            {
                name: '',
                type: 'pictorialBar',
                symbolSize: [25, 8],
                symbolOffset: [16, 4],
                color: 'rgb(72,193,250)',
                z: 12,
                data: wgx1
            },{
            name: '教职工',
            type: 'bar',
            barWidth: '25',
            itemStyle: {
                normal: {
                    opacity: 1,
                    color: 'rgb(221,221,0)',
                    barBorderRadius: 0,
                },

            },
            label: {
                show: false,
            },
            data: zzx1
        },
            {
                name: '学生',
                type: 'bar',
                barWidth: '25',
                itemStyle: {
                    normal: {
                        color: 'rgb(72,193,250)',
                        barBorderRadius: 0,
                    }

                },
                label: {
                    show: false,
                },
                data: wgx1
            },
        ]
    };