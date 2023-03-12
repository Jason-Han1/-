var data=['101', '80', '58','40','30'];
var className=['192.168.3.10','192.168.3.11','192.168.3.12','192.168.3.13','192.168.3.14'];
var colorList=['rgb(39,93,254)','rgb(39,115,254)','rgb(1,155,255)','rgb(23,167,244)','rgb(125,235,255)'];
var defaultData=[130,130,130,130,130,130];
option = {
    grid: {
        left: '5%',
        right: '5%',
        bottom: '5%',
        top: '10%',
        containLabel: true
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'none'
        },
        formatter: function(params) {
            return params[0].name + '<br/>' +
                "<span style='display:inline-block;margin-right:5px;width:9px;height:9px;background-color:#00FFFF'></span>" +
                // params[0].seriesName + ' : ' + Number((params[0].value.toFixed(4) / 10000).toFixed(2)).toLocaleString() + ' <br/>'
                params[0].seriesName + ' : ' + params[0].value+'次'
        }
    },
    backgroundColor: 'rgb(20,28,52)',
    xAxis: {
        show: false,
        type: 'value'
    },
    yAxis: [{
        type: 'category',
        inverse: true,
        axisLabel: {
            show: true,
            textStyle: {
                color: '#fff'
            },
        },
        splitLine: {
            show: false
        },
        axisTick: {
            show: false
        },
        axisLine: {
            show: false
        },
        data: className
    }, {
        type: 'category',
        inverse: true,
        axisTick: 'none',
        axisLine: 'none',
        show: false,
        axisLabel: {
            textStyle: {
                color: '#ffffff',
                fontSize: '12'
            },
            formatter: function(value) {
                    return value + ' %';
            },
        },
        data: data
    }],
    series: [{
            name: '攻击次数',
            type: 'bar',
            zlevel: 1,
            itemStyle: {
                normal: {
                    barBorderRadius: 0,
                    color: (params) => {
					return colorList[params.dataIndex]
				}
                },
            },
           label: {
            show: true,
            position: 'top', // 位置
            color: '#00FFFF',
            fontSize: 14,
            distance: 2 ,// 距离
            formatter: '{c} 次',
            }, // 柱子上方的数值
            barWidth: 8,
            data: data
        },
        {
            name: '背景',
            type: 'bar',
            barWidth: 8,
            barGap: '-100%',
            data: defaultData,
            itemStyle: {
                normal: {
                    color: '#1B375E',
                    barBorderRadius: 0,
                }
            },
        },
    ]
};
