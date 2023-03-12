data = [{
    name: 'WEB 应用攻击IP数',
    value: 20
},
{
    name: 'CC 攻击次数',
    value: 30
}];
getArrByKey = (data, k) => {
    let key = k || "value";
    let res = [];
    if (data) {
        data.forEach(function (t) {
            res.push(t[key]);
        });
    }
    return res;
};
opt = {
    index: 0
}
color = ['#FF9A2A', '#FF4304'];
data = data.sort((a,b) => {
    return b.value - a.value
});
option = {
    grid: {
        top: '20%',
        bottom: '30%',
        right: 30,
        left: 30,
        containLabel: true
    },
    xAxis: {
        show: false
    },
    yAxis: [{
        triggerEvent: true,
        show: true,
        inverse: true,
        data: getArrByKey(data, 'name'),
        axisLine: {
            show: false
        },
        splitLine: {
            show: false
        },
        axisTick: {
            show: false
        },
        axisLabel: {
            show: false,
        },
    }, {
        triggerEvent: true,
        show: true,
        inverse: true,
        data: getArrByKey(data, 'name'),
        axisLine: {
            show: false
        },
        splitLine: {
            show: false
        },
        axisTick: {
            show: false
        },
        axisLabel: {
            interval: 0,
            shadowOffsetX: '-20px',
            align: 'right',
            verticalAlign: 'bottom',
            lineHeight: 40,
            fontSize: 13,
            formatter: function (value, index) {
                let str = index === 0 ? "{a|" : "{b|"
                str += data[index].value + "}  "
                return str
            },
            
            rich: {
                a: {
                    color: '#ff9500',
                    fontWeight: 600,
                    fontSize: 20
                },
                b: {
                    color: '#FF4304',
                    fontWeight: 600,
                    fontSize: 20
                },
            }
        }
    }],
    series: [{
        name: '条',
        type: 'bar',
        showBackground: true,
        barBorderRadius: 30,
        yAxisIndex: 0,
        data: data,
        barWidth: 15,
        // align: left,
        itemStyle: {
            color: (val) => {
                return color[val.dataIndex];
            },
            barBorderRadius: 30,
        },
        label: {
            normal: {
                color: '#000',
                show: true,
                position: [0, '-20px'],
                textStyle: {
                    fontSize: 16
                },
                formatter: function(a) {
                    return "{a|" + a.name + "}"
                },
                rich: {
                    a: {
                        color: '#6A829A',
                        fontSize: 14
                    }
                }
            }
        }
    }]
};