var data = [
    {
        value: 26,
        name: '桥路建设'
    },
    {
        value: 10,
        name: '公用事业'
    },
    {
        value: 14,
        name: '铁投集团'
    },
    {
        value: 20,
        name: '公盈投资'
    },
    {
        value: 10,
        name: '中力经营'
    },
    {
        value: 2,
        name: '粮食集团'
    },
    {
        value: 18,
        name: '建投集团'
    },
];
var objdata = array2obj(data, 'name');
function array2obj(array, key) {
    var resObj = {};
    for (var i = 0; i < array.length; i++) {
        resObj[array[i][key]] = array[i];
    }
    return resObj;
}
option = {
    backgroundColor: '#0a1a2a',
    legend: {
        selectedMode: false,
        orient: 'vertical',
        itemWidth: 8,
        itemHeight: 8,
        icon: 'circle',
        right: '5%',
        top: 'center',
        textStyle: {
            fontSize: 14,
            color: '#fff',
        },
        formatter: function (name) {
            return name + '  ' + objdata[name].value + '%';
        },
        data: ['桥路建设', '公用事业', '铁投集团', '公盈投资', '中力经营', '粮食集团', '建投集团'],
    },
    series: [
        {
            name: 'title',
            type: 'pie',
            startAngle: 280,
            radius: ['43%', '46%'],
            center: ['45%', '50%'],
            label: {
                show: false,
                formatter: (params) => {
                    return `
                     ${params.name}: ${params.percent}%
                     ${params.data.value}个
                     `;
                },
                padding: [0, -30],
                textStyle: {
                    lineHeight: 25,
                },
            },
            // labelLine: {
            //     show: true,
            //     // showAbove:true,
            //     length: 30,
            //     length2: 50,

            // },
            itemStyle: {
                shadowBlur: 15,
                shadowColor: 'rgba(0, 0, 0, 0.3)',
                borderColor: '#0a1a2a',
                borderWidth: '3',
            },
            color: ['red'],
            data: [
                {
                    value: 26,
                    name: '桥路建设',
                    itemStyle: {
                        color: 'rgba(37, 80, 185, 1)',
                    },
                },
                {
                    value: 10,
                    name: '公用事业',
                    itemStyle: {
                        color: 'rgba(117, 197, 225, 1)',
                    },
                },
                {
                    value: 14,
                    name: '铁投集团',
                    itemStyle: {
                        color: 'rgba(6, 255, 199, 1)',
                    },
                },
                {
                    value: 20,
                    name: '公盈投资',
                    itemStyle: {
                        color: 'rgba(53, 194, 246, 1)',
                    },
                },
                {
                    value: 10,
                    name: '中力经营',
                    itemStyle: {
                        color: 'rgba(126, 177, 64, 1)',
                    },
                },
                {
                    value: 2,
                    name: '粮食集团',
                    itemStyle: {
                        color: 'rgba(83, 34, 157, 1)',
                    },
                },
                {
                    value: 18,
                    name: '建投集团',
                    itemStyle: {
                        color: 'rgba(219, 67, 118, 1)',
                    },
                },
            ],
        },
        {
            name: '',
            type: 'pie',
            startAngle: 280,
            radius: ['40%', '35%'],
            center: ['45%', '50%'],
            zlevel: 3,
            hoverAnimation: false,
            legendHoverLink: false,
            label: {
                show: false,
            },
            labelLine: {
                show: false,
            },
            itemStyle: {
                normal: {
                    // shadowBlur: 15,
                    // shadowColor: 'rgba(0, 0, 0, 0.5)',
                    borderColor: '#0a1a2a',
                    borderWidth: '3',
                },
                ellipsis: {
                    borderColor: '#0a1a2a',
                },
            },
            tooltip: {
                show: false,
            },
            data: [
                {
                    value: 26,
                    name: '桥路建设',
                    itemStyle: {
                        color: 'rgba(37, 80, 185, 0.3)',
                    },
                },
                {
                    value: 10,
                    name: '公用事业',
                    itemStyle: {
                        color: 'rgba(117, 197, 225, 0.3)',
                    },
                },
                {
                    value: 14,
                    name: '铁投集团',
                    itemStyle: {
                        color: 'rgba(6, 255, 199, 0.3)',
                    },
                },
                {
                    value: 20,
                    name: '公盈投资',
                    itemStyle: {
                        color: 'rgba(53, 194, 246, 0.3)',
                    },
                },
                {
                    value: 10,
                    name: '中力经营',
                    itemStyle: {
                        color: 'rgba(126, 177, 64, 0.3)',
                    },
                },
                {
                    value: 2,
                    name: '粮食集团',
                    itemStyle: {
                        color: 'rgba(83, 34, 157, 0.3)',
                    },
                },
                {
                    value: 18,
                    name: '建投集团',
                    itemStyle: {
                        color: 'rgba(219, 67, 118, 0.3)',
                    },
                },
            ],
        },
        {
            name: 'title',
            type: 'pie',
            zlevel: 5,
            hoverAnimation: false,
            legendHoverLink: false,
            radius: ['48%', '49%'],
            center: ['45%', '50%'],
            label: {
                show: false,
                formatter: (params) => {
                    return `
                     ${params.name}: ${params.percent}%
                     ${params.data.value}个
                     `;
                },
                padding: [0, -30],
                textStyle: {
                    lineHeight: 25,
                },
            },
            itemStyle: {
                shadowBlur: 15,
                shadowColor: 'rgba(0, 0, 0, 0.3)',
                borderColor: '#0a1a2a',
                color: 'rgba(255,255,255,0.1)',
            },
            data: [
                {
                    value: 41,
                    name: '低级',
                },
            ],
        },
        {
            name: 'title',
            type: 'pie',
            zlevel: 5,
            hoverAnimation: false,
            legendHoverLink: false,
            radius: ['32%', '31%'],
            center: ['45%', '50%'],
            label: {
                show: false,
                formatter: (params) => {
                    return `
                     ${params.name}: ${params.percent}%
                     ${params.data.value}个
                     `;
                },
                padding: [0, -30],
                textStyle: {
                    lineHeight: 25,
                },
            },
            itemStyle: {
                shadowBlur: 15,
                shadowColor: 'rgba(0, 0, 0, 0.3)',
                borderColor: '#0a1a2a',
                color: 'rgba(255,255,255,0.1)',
            },
            data: [
                {
                    value: 41,
                    name: '低级',
                },
            ],
        },
    ],
    graphic: [
        {
            type: 'group',
            left: '39%',
            top: '44%',
            children: [
                {
                    type: 'text',
                    z: 100,
                    top: 'middle',
                    style: {
                        fill: '#fff',
                        text: ['行业', '分布'].join('\n'),
                        font: '48px Microsoft YaHei',
                    },
                },
            ],
        },
    ],
};
