var data = {value: 350, label: '良', color: '#ee0'};
var max = 500;
option = {
	min: 0,
    max: max,
    backgroundColor: '#aaa',
    series: [
        {
            name: 'AQI',
            type: 'gauge',
            radius: '100%',
            startAngle: 245,
            endAngle: -65,
            axisLine: {
                show: true,
                lineStyle: {
                    width: 20,
                    color: [[data.value/max, data.color], [1, '#eee']],
                }
            },
            splitLine: {show: false},
            axisTick: {show: false},
            axisLabel: {show: false},
            splitLabel: {show: false},
            pointer: {show: false},
            itemStyle: {
                borderWidth: 30,
                color: '#0f0',
            },
            title: {
                offsetCenter: [0, '-20%'],
                color: '#FFFFFF',
                fontSize: 50,
                fontWeight: 700
            },
            detail: {
                formatter:function(e){
                    return data.label;
                },
                color: '#fff',
                offsetCenter: [0, '30%'],
                backgroundColor : data.color,
                borderRadius : 8,
                padding: 10,
                lineHeight: 40
            },
            data: [{value: data.value, name: 'AQI\n\n'+data.value}]
        }
    ]
};
