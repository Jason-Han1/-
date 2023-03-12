option = {
    title: {
        show:false,
        x: "center",
        text: '',
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
        name: '',
        type: 'gauge',

        startAngle: 180,
        endAngle: 0,
        min: 0,
        max: 100,
        axisLine: {
            show: true,
            lineStyle: {
                width: 40,
                shadowBlur: 0,
                color: [
                    [0.1, '#E43F3D'],
                    [0.5, '#DDBD4D'],
                    [0.9, '#9CD6CE'],
                    [1, '#7CBB55']
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
                    case "0":
                        return "高危";
                    case "30":
                        return "严重";
                    case "70":
                        return "告警";
                    case "100":
                        return "安全";
                    default:
                        return e;
                }
            },
            textStyle: {
                fontSize: 14,
                fontWeight: ""
            }
        },

        pointer: {
            show: true,
            width: 8,
            length: '35%',
        },
        detail: {
            offsetCenter: [0, -130],
            formatter: function(param) {
                return `{a|安全评分}\n` + param;
            },
            rich: {
                a: {
                    color: '#404346',
                    lineHeight: 55,
                    fontSize: 14,
                    fontWeight: 450
                }
            },
            textStyle: {
                fontSize: 40
            },
        },
        data: [{
            name: "",
            value: 45
        }]
    }]
};