var dataMap = {};

function dataFormatter(obj) {
    var pList = ['北京', '天津', '河北'];
    var temp;
    for (var year = 2002; year <= 2004; year++) {
        var max = 0;
        var sum = 0;
        temp = obj[year];
        for (var i = 0, l = temp.length; i < l; i++) {
            max = Math.max(max, temp[i]);
            sum += temp[i];
            obj[year][i] = {
                name: pList[i],
                value: temp[i],
            };
        }
    }
    console.log(obj);
    return obj;
}

dataMap.dataGDP = dataFormatter({
    //max : 60000,
    2004: [6033.21, 3110.97, 8477.63],
    2003: [5007.21, 2578.03, 6921.29],
    2002: [4315, 2150.76, 6018.28],
});
console.log('dataMap.dataGDP', JSON.stringify(dataMap.dataGDP))

// dataGDP2222 = {
//   2002: [
//     { name: '北京', value: 4315 },
//     { name: '天津', value: 2150.76 },
//     { name: '河北', value: 6018.28 },
//   ],
//   2003: [
//     { name: '北京', value: 5007.21 },
//     { name: '天津', value: 2578.03 },
//     { name: '河北', value: 6921.29 },
//   ],
//   2004: [
//     { name: '北京', value: 6033.21 },
//     { name: '天津', value: 3110.97 },
//     { name: '河北', value: 8477.63 },
//   ],
// };

dataMap.dataPI = dataFormatter({
    //max : 4000,
    2004: [87.36, 105.28, 1370.43],
    2003: [84.11, 89.91, 1064.05],
    2002: [82.44, 84.21, 956.84],
});

dataMap.dataSI = dataFormatter({
    //max : 26600,
    2004: [1853.58, 1685.93, 4301.73],
    2003: [1487.15, 1337.31, 3417.56],
    2002: [1249.99, 1069.08, 2911.69],
});

dataMap.dataTI = dataFormatter({
    //max : 25000,
    2004: [4092.27, 1319.76, 2805.47],
    2003: [3435.95, 1150.81, 2439.68],
    2002: [2982.57, 997.47, 2149.75],
});

dataMap.dataEstate = dataFormatter({
    //max : 3600,
    2004: [436.11, 106.14, 231.08],
    2003: [341.88, 92.31, 185.19],
    2002: [298.02, 73.04, 140.89],
});

dataMap.dataFinancial = dataFormatter({
    //max : 3200,
    2004: [713.79, 136.97, 209.1],
    2003: [635.56, 112.79, 199.87],
    2002: [561.91, 76.86, 179.6],
});

option = {
    baseOption: {
        timeline: {
            axisType: 'category',
            symbol: 'none',
            controlStyle: false,
            autoPlay: false,
            lineStyle: false,
            data: [
                '客户名称',
                '项目类型',
                '项目经理',
                '年份',
            ],
            label: {
                // formatter: function(s) {
                //     return s
                // },
            },
            checkpointStyle: {
                symbol: 'none'
            }
        },
        title: {
            subtext: '数据来自国家统计局',
        },
        tooltip: {},
        legend: {
            left: 'right',
            data: ['第一产业', '第二产业', '第三产业', 'GDP', '金融', '房地产'],
            selected: {
                GDP: false,
                金融: false,
                房地产: false,
            },
        },
        calculable: true,
        grid: {
            top: 80,
            bottom: 100,
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    type: 'shadow',
                    label: {
                        show: true,
                        formatter: function(params) {
                            return params.value.replace('\n', '');
                        },
                    },
                },
            },
        },
        xAxis: [{
            type: 'category',
            axisLabel: {
                interval: 0
            },
            data: [
                '北京',
                '天津',
                '河北',
            ],
            splitLine: {
                show: false
            },
        }, ],
        yAxis: [{
            type: 'value',
            name: '个',
        }, ],
        series: [{
                name: 'GDP',
                type: 'bar'
            },
            {
                name: '金融',
                type: 'bar'
            },
            {
                name: '房地产',
                type: 'bar'
            },
            {
                name: '第一产业',
                type: 'bar'
            },
            {
                name: '第二产业',
                type: 'bar'
            },
            {
                name: '第三产业',
                type: 'bar'
            },
        ],
    },
    options: [{
            title: {
                text: '2002全国宏观经济指标'
            },
            series: [{
                    data: dataMap.dataGDP['2002']
                },
                {
                    data: dataMap.dataFinancial['2002']
                },
                {
                    data: dataMap.dataEstate['2002']
                },
                {
                    data: dataMap.dataPI['2002']
                },
                {
                    data: dataMap.dataSI['2002']
                },
                {
                    data: dataMap.dataTI['2002']
                },
            ],
        },
        {
            title: {
                text: '2003全国宏观经济指标'
            },
            series: [{
                    data: dataMap.dataGDP['2003']
                },
                {
                    data: dataMap.dataFinancial['2003']
                },
                {
                    data: dataMap.dataEstate['2003']
                },
                {
                    data: dataMap.dataPI['2003']
                },
                {
                    data: dataMap.dataSI['2003']
                },
                {
                    data: dataMap.dataTI['2003']
                },
            ],
        },
        {
            title: {
                text: '2004全国宏观经济指标'
            },
            series: [{
                    data: dataMap.dataGDP['2004']
                },
                {
                    data: dataMap.dataFinancial['2004']
                },
                {
                    data: dataMap.dataEstate['2004']
                },
                {
                    data: dataMap.dataPI['2004']
                },
                {
                    data: dataMap.dataSI['2004']
                },
                {
                    data: dataMap.dataTI['2004']
                },
            ],
        },
    ],
};

console.log(option);
