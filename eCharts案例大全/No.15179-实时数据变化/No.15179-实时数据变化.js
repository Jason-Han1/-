function GetRandomNum(Min, Max) {
    var Range = Max - Min;
    var Rand = Math.random();
    return (Min + Math.round(Rand * Range));
}
var gauge_value = 0;

setInterval(function() {
    gauge_value = GetRandomNum(-200, 200);
    console.log(gauge_value);

    option = {
        title: {
            //show:false,
            x: "center",
            bottom: 200,
            //text:'AAA',
            subtext: '高程'
        },
        tooltip: {
            show: true,
            // formatter: "{a} <br/>{b} {c}",
            backgroundColor: '#F7F9FB',
            borderColor: '#92DAFF',
            borderWidth: '1px',
            textStyle: {
                color: 'black'
            },
            formatter: function(param) {
                return '<em style="color:' + param.color + ';">' + param.value + '</em> 分'
            }
    
        },
        series: [{
            name: '高程',
            type: 'gauge',
            // startAngle: 180,
            // endAngle: 0,
            min: -200,
            max: 200,
            axisLine: {
                show: true,
                lineStyle: {
                    width: 40,
                    shadowBlur: 0,
                    color: [
                        [0.15, '#E43F3D'],
                        [0.35, '#E98E2C'],
                        [0.65, '#7CBB55'],
                        [0.85, '#E98E2C'],
                        [1, '#E43F3D']
                    ]
                }
            },
            axisTick: {
                show: true,
                splitNumber: 1
            },
            splitLine: {
                show: true,
                length: 40,
                lineStyle: {
                    //color:'black'
                },
            },
            axisLabel: {
                formatter: function(e) {
                    switch (e + "") {
                        case "-170":
                            return "报警";
                            //return "";
                        case "-140":
                            return "-140";
    
                        case "-100":
                            return "预警";
                            //return "";
                        case "-60":
                            return "-60";
    
                        case "-30":
                            return "-30";
                            //return "";
                        case "0":
                            return "0";
    
                        case "30":
                            return "30";
                            //return "";
                        case "60":
                            return "60";
    
                        case "-100":
                            return "预警";
    
                        case "140":
                            return "140";
                            
                        case "170":
                            return "报警";
                            
                        default:
                            return e;
                    }
                },
                textStyle: {
                    fontSize: 12,
                    fontWeight: ""
                }
            },
            pointer: {
                show: true,
            },
            detail: {
                //show:false,
                formatter: function(param) {
                    var level = '';
                    if (param < -140) {
                        level = '报警'
                    } else if (param < -60) {
                        level = '预警'
                    } else if (param < 60) {
                        level = '正常'
                    } else if (param <= 140) {
                        level = '预警'
                    } else {
                        level = '报警';
                    }
                    return level;
                },
                offsetCenter: [0, 140],
                textStyle: {
                    fontSize: 40
                }
            },
            data: [{
                name: "",
                value: Math.floor(gauge_value)
            }]
        }]
    };

    myChart.setOption(option);

}, 1000);