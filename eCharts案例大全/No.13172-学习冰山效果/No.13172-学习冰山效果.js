let data = {
    "chart": [{
            month: "远程会诊",
            value: 138
        },

        {
            month: "远程诊断",
            value: 122
        },

        {
            month: "远程疑难病",
            value: 714
        },

        {
            month: "远程教学查房",
            value: 442
        },

        {
            month: "远程医疗查房",
            value: 622
        },


        {
            month: "远程手术示教",
            value: 528
        },
               {
            month: "远程重症监护",
            value: 528
        },
               {
            month: "远程培训",
            value: 528
        }
        

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
            data: ['远程会诊', '远程诊断', '远程疑难病', '远程教学查房', '远程医疗查房', '远程手术示教','远程重症监护','远程培训'],
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
        name: "业务量",
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
            name: '患者人数',
            type: 'pictorialBar',
            xAxisIndex: 1,
            barCategoryGap: '-80%',
            // barCategoryGap: '-5%',
            symbol: 'path://d="M150 50 L130 130 L170 130  Z"',
                    label: {
            show: true,
            position: 'top',
            color: '#1798ff',
            //fontSize: 22
        },
            itemStyle: {
                normal: {
                    color: function(params) {
                        let colorList = [
                            'rgba(13,177,205,0.8)', 'rgba(29,103,182,0.6)',
                            'rgba(13,177,205,0.8)', 'rgba(29,103,182,0.6)',
                            'rgba(13,177,205,0.8)', 'rgba(29,103,182,0.6)'
                        ];
                        return colorList[params.dataIndex];
                    }
                },
                emphasis: {
                    opacity: 1
                }
            },
            data: barData,
        }
    ]
}