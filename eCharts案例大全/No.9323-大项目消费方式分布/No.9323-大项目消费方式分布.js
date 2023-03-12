var typeList = ['TQB', 'SC', 'SUPERFUN']; //表示x轴的类型列表
var biList = [50, 60, 90];
var ticket = [60, 80, 90];

var sumPeople = 5000; //总人次
var currency = 3000; //币
var Tickets = 2000 // 票  

var currencyScale = (currency / sumPeople) * 100 + '%';
var TicketsScale = (Tickets / sumPeople) * 100 + '%';

var optionText = '总人次: ' + sumPeople + ' 币: ' + currency + ' ' + currencyScale + ' 门票: ' + Tickets + ' ' + TicketsScale

var sources = [
    ['product', '币', '票']
];
for (let i = 0; i < typeList.length; i++) {
    var List = [];
    var Type = typeList[i];
    var Bi = biList[i];
    var Tick = ticket[i];
    List.push(Type, Bi, Tick);
    sources.push(List);
}

option = {
    title: {
        text: optionText,
        left: '30%'
    },
    legend: {
        bottom: 'bottom'
    },
    tooltip: {},
    dataset: {
        source: sources
        //  ["product", "币", "票"],
        //  ["TQB", 50, 60],
        //  ["SC", 60, 80],
        //  ["SUPERFUN", 90, 90]
    },
    xAxis: {
        type: 'category',
        axisLabel: {
            tooltip: {
                show: true,
            },
            inside: false,
            textStyle: {
                fontSize: 14
            },
            interval: 0,
            color: '#666'
        },
        axisTick: {
            show: true
        },
        axisLine: {
            lineStyle: {
                color: '#ddd',
            }
        },

    },
    yAxis: {
        axisLine: {
            show: false,
            lineStyle: {
                color: "#333"
            },
        },
    },

    series: [{
            type: 'bar',
            barCategoryGap: '50%',
            itemStyle: {
                normal: {
                    label: {
                        show: true,
                        position: 'top',
                        color: '#666',
                        fontSize: 14,
                    },
                    color: '#3aa1ff',
                    opacity: 1,
                    shadowBlur: 20,
                    shadowColor: 'rgba(255, 255, 255, 0.5)'
                }
            },
        },
        {
            type: 'bar',
            itemStyle: {
                normal: {
                    label: {
                        show: true,
                        position: 'top',
                        color: '#666',
                        fontSize: 14,
                    },
                    color: '#4ecb73',
                    opacity: 1,
                    shadowBlur: 20,
                    shadowColor: 'rgba(255, 255, 255, 0.5)'
                }
            },
        },

    ]
};