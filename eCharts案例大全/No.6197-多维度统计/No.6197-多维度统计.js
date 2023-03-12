var data = [{
        //名称
        name: "MY001",
        //公司名称
        companyName: 'XXX信息有限公司',
        //应用名称
        applicationName: "应用1、应用2、应用3",
        value: {
            //加密
            encrypt: 200,
            //解密
            decode: 500,
            //其他
            other: 300
        }
    },
    {
        name: "MY002",
        companyName: 'XXX信息有限公司',
        applicationName: "应用1、应用2、应用3",
        value: {
            encrypt: 200,
            decode: 500,
            other: 300
        }
    },
    {
        name: "MY003",
        companyName: 'XXX信息有限公司',
        applicationName: "应用1、应用2、应用3",
        value: {
            encrypt: 200,
            decode: 500,
            other: 300
        }
    },
    {
        name: "MY004",
        companyName: 'XXX信息有限公司',
        applicationName: "应用1、应用2、应用3",
        value: {
            encrypt: 200,
            decode: 500,
            other: 300
        }
    },
    {
        name: "MY005",
        companyName: 'XXX信息有限公司',
        applicationName: "应用1、应用2、应用3",
        value: {
            encrypt: 200,
            decode: 500,
            other: 300
        }
    },
    {
        name: "MY006",
        companyName: 'XXX信息有限公司',
        applicationName: "应用1、应用2、应用3",
        value: {
            encrypt: 200,
            decode: 500,
            other: 300
        }
    },
    {
        name: "MY007",
        companyName: 'XXX信息有限公司',
        applicationName: "应用1、应用2、应用3",
        value: {
            encrypt: 200,
            decode: 500,
            other: 300
        }
    },
    {
        name: "MY008",
        companyName: 'XXX信息有限公司',
        applicationName: "应用1、应用2、应用3",
        value: {
            encrypt: 200,
            decode: 500,
            other: 300
        }
    },
    {
        name: "MY009",
        companyName: 'XXX信息有限公司',
        applicationName: "应用1、应用2、应用3",
        value: {
            encrypt: 200,
            decode: 500,
            other: 300
        }
    },
    {
        name: "MY0010",
        companyName: 'XXX信息有限公司',
        applicationName: "应用1、应用2、应用3",
        value: {
            encrypt: 200,
            decode: 500,
            other: 300
        }
    }
];
const getCompayName = (id) => {
    if (id == 'MY001') return '呵公司';
    else return '--'
}
option = {
    tooltip: {
        trigger: 'axis',
        axisPointer: { // 坐标轴指示器，坐标轴触发有效
            type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
        },
        formatter(params) {
            let list = []
            let listItem = '';
            let name = '';
            params.forEach((item, i) => {
                name = item.name;
                list.push('<span>' +
                    item.seriesName +
                    '</span>:' +
                    item.value +
                    '次',
                    i % 2 === 0 ? '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;' : '</br>'
                );
            });
            listItem = list.join('');
            return '<div class="showBox">' + listItem + '<br/>所属公司：' + getCompayName(name) + '<br/>应用：应用1、应用2 </div>'
        }
    },
    legend: {
        y: 'bottom',
        data: ['加密', '解密', '其他']
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis: [{
        type: 'category',
        data: ['MY001', 'MY002', 'MY003', 'MY004', 'MY005', 'MY006'],
    }],
    yAxis: [{
        type: 'value'
    }],
    series: [{
            name: '加密',
            type: 'bar',
            data: [{
                    name: "MY001",
                    value: 200
                },
                {
                    name: "MY002",
                    value: 100
                },
                {
                    name: "MY003",
                    value: 400
                },
                {
                    name: "MY004",
                    value: 55
                },
                {
                    name: "MY005",
                    value: 195
                },
                {
                    name: "MY006",
                    value: 666
                }
            ]
        },
        {
            name: '解密',
            type: 'bar',
            data: [{
                    name: "MY001",
                    value: 66
                },
                {
                    name: "MY002",
                    value: 88
                },
                {
                    name: "MY003",
                    value: 99
                },
                {
                    name: "MY004",
                    value: 99
                },
                {
                    name: "MY005",
                    value: 77
                },
                {
                    name: "MY006",
                    value: 222
                }
            ]
        },
        {
            name: '其他',
            type: 'bar',
            data: [{
                    name: "MY001",
                    value: 55
                },
                {
                    name: "MY002",
                    value: 888
                },
                {
                    name: "MY003",
                    value: 222
                },
                {
                    name: "MY004",
                    value: 758
                },
                {
                    name: "MY005",
                    value: 195
                },
                {
                    name: "MY006",
                    value: 333
                }
            ]
        }
    ]
};