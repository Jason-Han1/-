option = {
    title: {
        text: '',
        subtext: ''
    },
    color:['#d87c7c','#ff907c','#919e8b','#759e8b'],
    backgroundColor: '#fff',
    tooltip: {
        trigger: 'axis'
    },
    legend: {
        data: ['上份试卷客观题得分', '上份试卷主观题得分','本份试卷客观题得分','本份试卷主观题得分']
    },
    calculable: true,
    xAxis: [{
        type: 'category',
        data: ['最高分', '平均分', '最低分'],
        axisLabel: {
            textStyle: {
                fontSize: 25
            }
        }
    }],
    yAxis: [{
        type: 'value',
        max: '120',
        name: '分',
        axisLabel: {
            textStyle: {
                fontSize: 25
            },

        }
    }],
    series: [{
            name: '上份试卷客观题得分',
            type: 'bar',
            stack:'上份',
            data: [80, 55, 10],
            markPoint: {
                label: {
                    offset: [0, 0],
                    color: '#ffffff',
                    formatter: function(a) {
                        console.log(a)
                    },
                },
                itemStyle: {
                    color: 'green',
                },
                data: [

                    {
                        coord: [0, 100],
                        value: 100
                    },
                    {
                        coord: [1, 75],
                        value: 75
                    },
                    {
                        coord: [2, 10],
                        value: 10
                    },

                ]
            },
        },{
            name: '上份试卷主观题得分',
            type: 'bar',
            stack:'上份',
            data: [20, 20, 0],
        },
        {
            name: '本份试卷客观题得分',
            type: 'bar',
            stack:'本份',
            data: [100, 65, 15],
            markPoint: {
                label: {
                    offset: [0, 0],
                    color: '#ffffff',
                    formatter: function(a) {
                        console.log(a)
                    },
                },
                itemStyle: {
                    color: 'green',
                },
                data: [

                    {
                        coord: [0, 110],
                        value: 110
                    },
                    {
                        coord: [1, 85],
                        value: 85
                    },
                    {
                        coord: [2, 20],
                        value: 20
                    },

                ]
            },

        },{
             name: '本份试卷主观题得分',
            type: 'bar',
            stack:'本份',
            data: [10, 20, 5],
        }

    ]
};