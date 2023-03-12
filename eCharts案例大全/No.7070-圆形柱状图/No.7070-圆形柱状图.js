var lineColor = '#406A92';
var labelColor = '#fff';
var fontSize = '38';
var lineWidth = 3;
option = {
        backgroundColor:'#031845',
        grid: {
            left: '0%',
            right: '10%',
            top: '15%',
            bottom: '7%',
            containLabel: true
        },
        tooltip: {
            show: true,
            trigger: 'axis',
            textStyle:{
                fontSize:fontSize
            }
        },
        legend: {
            show: true,
            x: 'center',
            y: '1%',
            itemWidth: 45,
            itemHeight: 18,
            textStyle: {
                color: '#fff',
                fontSize: fontSize
            },
        },
        xAxis: [
            {
                type: 'category',
                name: '',
                nameTextStyle: {
                    fontSize: fontSize,
                    color:labelColor,
                    lineHeight:90,
                },
                axisLabel: {
                    color: labelColor,
                    fontSize: fontSize,
                    margin:30,
                },
                axisLine: {
                    show: false,
                    lineStyle: {
                        color: lineColor,
                        width: lineWidth
                    }
                },
                axisTick: {
                    show: false
                },
                splitLine: {
                    show: false,
                    lineStyle: {
                        color: '#195384'
                    }
                },
                data: ['2017年','2018年','2019年']
            }
        ],
        yAxis: [
            {
                type: 'value',
                name: '',
                nameTextStyle: {
                    fontSize: fontSize,
                    color:labelColor
                },
                nameGap:30,
                axisLabel: {
                    show: false,
                    formatter: '{value}',
                    margin:20,
                    textStyle: {
                        color: labelColor,
                        fontSize: fontSize,

                    }
                },
                axisLine: {
                    show: false,
                    lineStyle: {
                        color:lineColor,
                        width: lineWidth
                    }
                },
                splitArea: {
                    show: false,
                    areaStyle: {
                        color: ["rgba(128,160,176,.1)", "rgba(250,250,250,0)"]
                    }
                },
                axisTick: {
                    show: false
                },
                splitLine: {
                    show: false,
                    lineStyle: {
                        color: lineColor
                    }
                }
            }
        ],
        series: [
            {
                "name": "",
                type: 'pictorialBar',
                symbolSize: [50, 25],
                symbolOffset: [0, -10],
                symbolPosition: 'end',
                z: 12,
                tooltip:{
                    show:false
                },
                "label": {
                    "normal": {
                        "show": true,
                        "position": "top",
                        fontSize: fontSize,
                        color: '#fff'
                    }
                },
                color: "#26B2E8",
                data: [298, 300, 430]
            },
            {
                name: '',
                type: 'pictorialBar',
                tooltip:{
                    show:false
                },
                symbolSize: [70, 30],
                symbolOffset: [0, 15],
                z: 10,
                itemStyle: {
                    normal: {
                        color: 'transparent',
                        borderColor: '#2EA9E5',
                        borderType: 'solid',
                        borderWidth: 3
                    }
                },
                data: [298, 300, 430]
            },
            {
                name: '',
                type: 'pictorialBar',
                tooltip:{
                    show:false
                },
                symbolSize: [90, 40],
                symbolOffset: [0, 20],
                z: 10,
                itemStyle: {
                    normal: {
                        color: 'transparent',
                        borderColor: '#26B2E8',
                        borderType: 'solid',
                        borderWidth: 4
                    }
                },
                data: [298, 300, 430]
            },
            {
                name: '',
                type: 'pictorialBar',
                symbolSize: [50, 25],
                tooltip:{
                    show:false
                },
                symbolOffset: [0, 10],
                z: 12,
                "color": "#26B2E8",
                "data": [298, 300, 430]
            },
            {
                type: 'bar',
                "barWidth": "50",
                barGap: '10%',
                barCateGoryGap: '10%',
                itemStyle: {
                    normal: {
                        color: '#26B2E8',
                        opacity: .8
                    },
                },
                data: [298, 300, 430]
            }
        ]
    };