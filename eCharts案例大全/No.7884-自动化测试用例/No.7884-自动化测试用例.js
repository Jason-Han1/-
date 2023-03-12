var planePath = 'path://M1705.06,1318.313v-89.254l-319.9-221.799l0.073-208.063c0.521-84.662-26.629-121.796-63.961-121.491c-37.332-0.305-64.482,36.829-63.961,121.491l0.073,208.063l-319.9,221.799v89.254l330.343-157.288l12.238,241.308l-134.449,92.931l0.531,42.034l175.125-42.917l175.125,42.917l0.531-42.034l-134.449-92.931l12.238-241.308L1705.06,1318.313z';
var apis = [{
        uri: '1',
        status: 1
    },
    {
        uri: '2',
        status: 1
    },
    {
        uri: '3',
        status: 1
    },
    {
        uri: '4',
        status: 1
    },
    {
        uri: '5',
        status: 1
    },
    {
        uri: '6',
        status: 1
    },
    {
        uri: '7',
        status: 1
    },
    {
        uri: '8',
        status: 1
    },
    {
        uri: '9',
        status: 1
    },
    {
        uri: '10',
        status: 1
    },
    {
        uri: '11',
        status: 1
    },
    {
        uri: '12',
        status: 1
    },
    {
        uri: '13',
        status: 1
    }
]

var xn = 8;
var ynj = [200, 400, 600, 800, 1000, 1200, 1400, 1600]
var yno = [1600, 1400, 1200, 1000, 800, 600, 400, 200]
var data = apis.map((el, ei) => {
    let rn = Math.floor(ei / xn);
    return {
        name: el.uri,
        draggable: false,
        value: ((rn + 1) % 2 !== 0) ? [ynj[ei % xn], 100 * (rn + 1)] : // 奇数行
            [yno[ei % xn], 100 * (rn + 1)], // 偶数行
        itemStyle: {
            color: el.status === 1 ? '#90EE90' : '#FFA500'
        }
    }
})
var links = [] 
apis.forEach((el, ei) => {
    let rn = Math.floor(ei / xn);
    if ((ei + 1) < apis.length) {
        links.push({
            coords: [data[ei].value, data[ei + 1].value]
        })
    }
})
console.log(links)
option = {
    backgroundColor: '#404a59',
    title: {
        text: '自动化测试用例'
    },
    xAxis: {
        type: "value",
        show: false
    },
    yAxis: {
        show: false,
        type: 'value',
        inverse: true,
        max: 600
    },
    series: [{
            type: 'lines',
            coordinateSystem: 'cartesian2d',
            zlevel: 1,
            data: links,
            effect: {
                show: true,
                period: 6,
                trailLength: 0,
                symbol: planePath,
                symbolSize: 15
            },
            lineStyle: {
                normal: {
                    color: '#22ee22',
                    width: 1,
                    opacity: 0.4,
                    curveness: 0.2
                }
            }
        },
        {
            type: 'effectScatter',
            zlevel: 2,
            data: data,
            rippleEffect: {
                color: '#ebee22',
                period: 4,
                brushType: 'stroke'
            },
            symbolSize: 20,
            cursor: 'pointer'
        }
    ]
};