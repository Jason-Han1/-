let data = {
    "chart": [{
            month: "1月",
            value: 2500,
            ratio: 14.89
        },

        {
            month: "2月",
            value: 2800,
            ratio: 79.49
        },

        {
            month: "3月",
            value: 3000,
            ratio: 75.8
        },

        {
            month: "4月",
            value: 2600,
            ratio: 19.8
        },

        {
            month: "5月",
            value: 3500,
            ratio: 44.5
        },


        {
            month: "6月",
            value: 2500,
            ratio: 87.3
        },
        {
            month: "7月",
            value: 3200,
            ratio: 87.3
        },
        {
            month: "8月",
            value: 3100,
            ratio: 87.3
        },
        {
            month: "9月",
            value: 2900,
            ratio: 87.3
        },
        {
            month: "10月",
            value: 2500,
            ratio: 87.3
        },
        {
            month: "11月",
            value: 3600,
            ratio: 87.3
        },
        {
            month: "12月",
            value: 3400,
            ratio: 87.3
        },
        {
            month: "1月",
            value: 2800,
            ratio: 87.3
        },
        {
            month: "2月",
            value: 3000,
            ratio: 87.3
        },
        {
            month: "3月",
            value: 2400,
            ratio: 87.3
        },

    ]
}


let xAxisMonth = [],
    barData = [],
    lineData = [];
for (let i = 0; i < data.chart.length; i++) {
    xAxisMonth.push(data.chart[i].month);
    barData.push({
        "name": xAxisMonth[i],
        "value": data.chart[i].value
    });
    lineData.push({
        "name": xAxisMonth[i],
        "value": data.chart[i].ratio
    });
}

option = {
    backgroundColor: "#020d22",
    title: '',
    grid: {
        top: '24%',
        left: '7%',
        bottom: '6%',
        containLabel: true
    },
    tooltip: {
        show:false,
        trigger: 'axis',
        axisPointer: {
            type: 'none'
        },
        // formatter: function(params) {
        //     return params[0]["data"].name + "<br/>" + '训练人次: ' + params[1]["data"].value + "<br/>" + '合格率: ' + params[0]["data"].value;
        // }
    },
    xAxis: [{
            type: 'category',
            show: false,
            data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月', '1月', '2月', '3月', ],
            axisLabel: {
                textStyle: {
                    color: '#b6b5ab'
                }
            }
        },
        {
            type: 'category',
            position: "bottom",
            data: xAxisMonth,
            boundaryGap: true,
            // offset: 40,
            axisTick: {
                show: false
            },
            axisLine: {
                show: false
            },
            axisLabel: {
                textStyle: {
                    color: '#b6b5ab'
                }
            }
        }

    ],
    yAxis: [{
        show: true,
        offset: 52,
        name:"单位:户",
        nameTextStyle:{
          color:"#b6b5ab"  
        },
        splitLine: {
            show: false,
            lineStyle: {
                color: "rgba(255,255,255,0.2)"
            }
        },
        axisTick: {
            show: false
        },
        axisLine: {
            show: true
        },
        axisLabel: {
            show: true,
            color: '#b6b5ab'
        }
    }, {
        show: false,
        type: "value",
        name: "合格率(%)",
        nameTextStyle: {
            color: '#ccc'
        },
        axisLabel: {
            color: '#ccc'
        },
        splitLine: {
            show: false
        },
        axisLine: {
            show: false
        },
        axisTick: {
            show: false
        }
    }],
    color: ['#e54035'],
    series: [{
        name: '训练人次',
        type: 'pictorialBar',
        xAxisIndex: 1,
        barCategoryGap: '-80%',
        // barCategoryGap: '-5%',
        symbol: 'path://d="M150 50 L130 130 L170 130  Z"',
        itemStyle: {
            normal: {
                color: function(params) {
                    let colorList = [
                        'rgba(13,177,205,0.8)', 'rgba(29,103,182,0.6)',
                        'rgba(13,177,205,0.8)', 'rgba(29,103,182,0.6)',
                        'rgba(13,177,205,0.8)', 'rgba(29,103,182,0.6)',
                        'rgba(13,177,205,0.8)', 'rgba(29,103,182,0.6)',
                        'rgba(13,177,205,0.8)', 'rgba(29,103,182,0.6)',
                        'rgba(13,177,205,0.8)', 'rgba(29,103,182,0.6)',
                        'rgba(13,177,205,0.8)', 'rgba(29,103,182,0.6)',
                        'rgba(13,177,205,0.8)', 'rgba(29,103,182,0.6)',
                    ];
                    return colorList[params.dataIndex];
                }
            },
            emphasis: {
                opacity: 1
            }
        },
        data: barData,
    }, ]
}