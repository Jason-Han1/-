var $timeList = [
    { name: 'O/N', value: 2 },
    { name: 'TN', value: 8 },
    { name: '1D', value: 8 },
    { name: 'SN', value: 16 },
    { name: '1W', value: 8 },
    { name: '2W', value: 14 },
    { name: '3W', value: 20 },
    { name: '1M', value: 26 },
    { name: '2M', value: 32 },
    { name: '3M', value: 38 },
    { name: '4M', value: 44 },
    { name: '5M', value: 50 },
    { name: '6M', value: 56 },

    { name: '9M', value: 66 },
    { name: '1Y', value: 76 },
    { name: '18M', value: 86 },
    { name: '2Y', value: 96 },
    { name: '3Y', value: 116 },
    { name: '4Y', value: 136 },
    { name: '5Y', value: 156 },
    { name: '7Y', value: 186 },
    { name: '10Y', value: 226 },
];

var $tenorList = [
    { tenor: 'O/N', point: 4.56 },
    { tenor: '1W', point: 100.56 },
    { tenor: '2W', point: 200.56 },
    { tenor: '3W', point: 300.56 },
    { tenor: '1M', point: 400 },
    { tenor: '2M', point: 600 },
    { tenor: '3M', point: 700 },
    { tenor: '4M', point: 810 },
    { tenor: '5M', point: 820 },
    { tenor: '6M', point: 840 },
    { tenor: '9M', point: 850 },
    { tenor: '1Y', point: 860 },
    { tenor: '18M', point: 900 },
    { tenor: '2Y', point: 920 },
    { tenor: '3Y', point: 940 },
    { tenor: '4Y', point: 960 },
    { tenor: '5Y', point: 1020 },
];
let $seriesData = [];
var $filterList = [];
$tenorList.forEach((v) => {
    let inList = [];
    let __timeobj = $timeList.find((ele) => ele.name === v.tenor);
    $filterList.push(__timeobj);
    inList.push(__timeobj.value);
    inList.push(v.point);
    $seriesData.push(inList);
});
console.log($filterList);
console.log($seriesData);

option = {
    backgroundColor: '#fff',
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'cross',
            label: {
                show: true,
                backgroundColor: '#dce4e9',
                color: '#445566',
                borderColor: 'rgba(0,0,0,0)',
                shadowColor: 'rgba(0,0,0,0)',
                shadowOffsetY: 0,
                formatter: (params) => {
                    if (params.axisDimension === 'y') {
                        return params.value.toFixed(2);
                    } else {
                        let ite = $filterList.find((v) => v.value === params.value);
                        return ite.name;
                    }
                },
            },
            textStyle: {
                color: '#fff',
            },
        },
        formatter: (params) => {
            let ite = $filterList.find((v) => v.value === params[0].data[0]);
            return ite && `${ite.name}：${params[0].data[1]}`;
        },
        lineStyle: {
            color: {
                type: 'linear',
                x: 0,
                y: 0,
                x2: 0,
                y2: 0,
                colorStops: [
                    {
                        offet: 0,
                        color: 'red',
                    },
                    {
                        offet: 0.5,
                        color: 'blue',
                    },
                    {
                        offet: 1,
                        color: 'white',
                    },
                ],
            },
        },
        padding: [5, 10],
        extraCssText: 'box-shadow: 1px 0 2px 0 rgba(163, 163, 163, .5)',
    },
    xAxis: {
        type: 'value',
        interval: 2,
        axisLabel: {
            color: '#212121',
            fontSize: 10,
            formatter: (val) => {
                let ite = $filterList.find((e) => e.value == val);
                return ite && ite.name;
            },
        },
        max: (val) => {
            return val.max + 2;
        },
        axisLine: {
            show: true,
        },
        splitLine: {
            show: false,
        },
        axisTick: {
            show: false,
        },
    },
    yAxis: {
        type: 'value',
        axisTick: {
            show: false,
        },
        axisLine: {
            lineStyle: {
                color: '#212121',
            },
        },
        axisLabel: {
            textStyle: {
                color: '#212121',
            },
        },
        splitLine: {
            show: false,
        },
    },
    series: [
        {
            name: 'S',
            type: 'line',
            data: $seriesData,
            symbolSize: 4,
            symbol: 'circle',
            smooth: true,
            lineStyle: {
                color: '#fe9a8b'
            },
            itemStyle: {
                normal: {
                    color: '#fe9a8b',
                    borderColor: '#fe9a8b',
                },
            },
            areaStyle: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                    {
                        offset: 0,
                        color: '#fe9a8bb3',
                    },
                    {
                        offset: 1,
                        color: '#fe9a8b03',
                    },
                ]),
            },
            emphasis: {
                itemStyle: {
                    color: {
                        type: 'radial',
                        x: 0.5,
                        y: 0.5,
                        r: 0.5,
                        colorStops: [
                            {
                                offset: 0,
                                color: '#fe9a8b',
                            },
                            {
                                offset: 0.4,
                                color: '#fe9a8b',
                            },
                            {
                                offset: 0.5,
                                color: '#fff',
                            },
                            {
                                offset: 0.7,
                                color: '#fff',
                            },
                            {
                                offset: 0.8,
                                color: '#fff',
                            },
                            {
                                offset: 1,
                                color: '#fff',
                            },
                        ],
                    },
                    borderColor: '#fe9a8b',
                    borderWidth: 4,
                },
            },
        },
    ],
};
