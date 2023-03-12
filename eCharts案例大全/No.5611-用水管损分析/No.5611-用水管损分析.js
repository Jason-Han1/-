options = [{
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'cross',
                crossStyle: {
                    color: '#999'
                }
            }
        },
        title:{
            text:'用水管损',
        },
        legend: {
            data: ['用水量', '给水量', '管损量']
        },
        xAxis: [{
            type: 'category',
            data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月'],
            axisPointer: {
                type: 'shadow'
            }
        }],
        yAxis: [{
                type: 'value',
                min: 0,
                max: 400,
                axisLabel: {
                    formatter: '{value} 吨'
                }
            },
            {
                type: 'value',
                min: 0,
                max: 100,
                axisLabel: {
                    formatter: '{value} 吨'
                }
            }
        ],
        series: [{
                name: '给水量',
                type: 'bar',
                data: [357,348 ,265 ,300 ,304 ,382 ,298 ,392 ,263 ,264]
            },
            {
                name: '用水量',
                type: 'bar',
                data: [307 ,303 ,238 ,244 ,274 ,290,239 ,361 ,202 ,244]
            },
            {
                name: '管损量',
                type: 'line',
                yAxisIndex: 1,
                data: [50, 45, 27, 56, 30,92, 59, 29,61, 20]
            }
        ]
    },
    {
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'cross',
                crossStyle: {
                    color: '#999'
                }
            }
        },
        title:{
            text:'天然气管损',
        },
        legend: {
            data: ['用气量', '供气量', '管损量']
        },
        xAxis: [{
            type: 'category',
            data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月'],
            axisPointer: {
                type: 'shadow'
            }
        }],
        yAxis: [{
                type: 'value',
                min: 0,
                max: 400,
                axisLabel: {
                    formatter: '{value} 吨'
                }
            },
            {
                type: 'value',
                min: 0,
                max: 100,
                axisLabel: {
                    formatter: '{value} 吨'
                }
            }
        ],
        series: [{
                name: '供气量',
                type: 'bar',
                data: [304,368,278,313,355,330,357,348,292,337]
            },
            {
                name: '用气量',
                type: 'bar',
                data: [267,271,236,260,319,293,330,313,235,304]
            },
            {
                name: '管损量',
                type: 'line',
                yAxisIndex: 1,
                data: [37,97,42,53,36,37,27,35,57,33]
            }
        ]
    },
    {
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'cross',
                crossStyle: {
                    color: '#999'
                }
            }
        },
        title:{
            text:'蒸汽管损',
        },
        legend: {
            data: ['蒸汽用量', '蒸汽供给量', '管损量']
        },
        xAxis: [{
            type: 'category',
            data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月'],
            axisPointer: {
                type: 'shadow'
            }
        }],
        yAxis: [{
                type: 'value',
                min: 0,
                max: 400,
                axisLabel: {
                    formatter: '{value} 吨'
                }
            },
            {
                type: 'value',
                min: 0,
                max: 100,
                axisLabel: {
                    formatter: '{value} 吨'
                }
            }
        ],
        series: [{
                name: '蒸汽供给量',
                type: 'bar',
                data: [362,337,340,	339,388,305,218,373,300,323]
            },
            {
                name: '蒸汽用量',
                type: 'bar',
                data: [296,301,270,332,327,257,216,312,261,280]
            },
            {
                name: '管损量',
                type: 'line',
                yAxisIndex: 1,
                data: [66,36,83,70,61,48,2,61,39,43]
            }
        ]
    }
]