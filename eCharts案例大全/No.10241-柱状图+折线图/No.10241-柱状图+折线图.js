option = {
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
            text:'区域情况',
            left:'center'
        },
        legend: {
            data:['账户数1','账户数2','账户数3','账户数4'],
            y:'bottom'
        },
        xAxis: [
            {
                type: 'category',
                data: ['地区1','地区2','地区3','地区4','地区5','地区6','地区7'],
                axisPointer: {
                    type: 'shadow'
                }
            }
        ],
        yAxis: [
            {
                type: 'value',
                min:0,
                interval: 500,
                axisLabel: {
                    formatter: '{value}'
                }
            },
            {
                type: 'value',
                interval: 1,
                min:0,
            },
            {
                type: 'value',
                interval: 500,
                min:0,
                axisLabel: {
                    formatter: '{value}'
                }
            },
            {
                type: 'value',
                interval: 500,
                min:0,
                axisLabel: {
                    formatter: '{value}'
                }
            }
        ],
        series: [
            {
                name:'账户数1',
                type:'bar',
                data:[144,70,67,75,28,32,49]
            },
            {
                name:'账户数2',
                type:'bar',
                data:[461,155,186,180,82,135,81]
            },
            {
                name:'账户数3',
                type:'bar',
                data:[2594,1109,1189,904,269,554,719]
            },
            {
                name:'账户数4',
                type:'line',
                yAxisIndex: 1,
                itemStyle:{
                    normal:{
                        label:{
                            show:true
                        }
                    }
                },
                data:[3.20,2.21,2.78,2.40,2.93,4.22,2.79,2.88]
            }
        ]
    };