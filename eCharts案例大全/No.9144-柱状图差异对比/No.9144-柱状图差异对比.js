var dataall = [{
        name: '汇总',
        text1: 45.7,
        text3: 29.5,
        text4: 16.2,
        percent: (16.2 / 45.7 * 100).toFixed(2)
    },
    {
        name: '1.5MW',
        text1: 10,
        text3: 6,
        text4: 4,
        percent: (4 / 10 * 100).toFixed(2)
    },
    {
        name: '2MW',
        text1: 7.2,
        text3: 3.5,
        text4: 3.7,
        percent: (3.7 / 7.2 * 100).toFixed(2)
    },
    {
        name: '2XMW',
        text1: 12,
        text3: 11,
        text4: 1,
        percent: (1 / 12 * 100).toFixed(2)
    },
]
var Yaxisdata = [];
var data1 = [];
var data2 = [];
var data3 = [];
var data4 = [];
for (var i = 0; i < dataall.length; i++) {
    Yaxisdata.push(dataall[i].name);
    data1.push(dataall[i].text1);
    if (dataall[i].text1 > dataall[i].text3) {
        data3.push({
            name: dataall[i].name,
            value: dataall[i].text3,
            itemStyle: {
                color: 'orange'
            }
        });
    } else {
        data3.push(dataall[i].text3);
    }

    data2.push(dataall[i].text2);
    data4.push(dataall[i].text4)
}


option = {
    tooltip: {
        trigger: 'axis',
        axisPointer: { // 坐标轴指示器，坐标轴触发有效
            type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    legend: {
        data: ['当前实际值', '当前计划值']
    },
    grid: {
        left: '3%',
        right: '24%',
        bottom: '3%',
        containLabel: true
    },
    xAxis: {
        type: 'value'
    },
    yAxis: {
        type: 'category',
        data: Yaxisdata
    },
    series: [{

            type: 'bar',
            stack: '总量',
            label: {
                normal: {
                    show: true,
                    position: 'insideRight'
                }
            },
            data: data1
        },
        {

            type: 'bar',
            stack: '总量',
            label: {
                normal: {
                    show: true,
                    position: 'insideRight'
                }
            },
            data: data2
        },

        {

            type: 'bar',
            stack: '总数',
            label: {
                normal: {
                    show: true,
                    position: 'insideRight'
                }
            },
            data: data3
        },
        {

            type: 'bar',
            stack: '总数',
            label: {
                normal: {
                    show: true,
                    position: 'insideRight'
                }
            },
            data: data4
        },
        {
            name: dataall[3].name,
            type: 'pie',
            radius: ['10%', '15%'],
            center: ['85%', '20%'],
            avoidLabelOverlap: false,
            label: {

                show: false,
                position: 'center',
                formatter: '{c}%'
            },
            data: [{
                    value: dataall[3].percent,
                    name: '直接访问',
                    label: {
                        show: true
                    }
                },
                {
                    value: 100 - dataall[3].percent,
                    name: '邮件营销'
                },

            ]
        },
        {
            name: dataall[2].name,
            type: 'pie',
            radius: ['10%', '15%'],
            center: ['85%', '40%'],
            avoidLabelOverlap: false,
            label: {

                show: false,
                position: 'center',
                formatter: '{c}%'
            },
            data: [{
                    value: dataall[2].percent,
                    name: '直接访问',
                    label: {
                        show: true
                    }
                },
                {
                    value: 100 - dataall[2].percent,
                    name: '邮件营销'
                },

            ]
        },
        {
            name: dataall[1].name,
            type: 'pie',
            radius: ['10%', '15%'],
            center: ['85%', '60%'],
            avoidLabelOverlap: false,
            label: {

                show: false,
                position: 'center',
                formatter: '{c}%'
            },
            data: [{
                    value: dataall[1].percent,
                    name: '直接访问',
                    label: {
                        show: true
                    }
                },
                {
                    value: 100 - dataall[1].percent,
                    name: '邮件营销'
                },

            ]
        },
        {
            name: dataall[0].name,
            type: 'pie',
            radius: ['10%', '15%'],
            center: ['85%', '80%'],
            avoidLabelOverlap: false,
            label: {

                show: false,
                position: 'center',
                formatter: '{c}%'
            },
            data: [{
                    value: dataall[0].percent,
                    name: '直接访问',
                    label: {
                        show: true
                    }
                },
                {
                    value: 100 - dataall[0].percent,
                    name: '邮件营销'
                },

            ]
        }

    ]
};