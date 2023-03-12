var data1 = [65, 63, 103, 164];
var data2 = [0, 1, 3, 6];


option = {
    title: {
        text: '湖北地区新增治愈病例'
    },
    legend: {
        data: [{
                name: "武汉新增治愈病例",
                icon: 'circle',
                textStyle: {
                    color: 'red'
                }
            },
            {
                name: "咸宁新增治愈病例",
                icon: 'circle',
                textStyle: {
                    color: 'blue'
                }
            }
        ]
    },
    xAxis: {
        data: ['20200204', '20200205', '20200206', '20200207']
    },
    yAxis: {},
    series: [{
            name: "武汉新增治愈病例",
            type: 'bar',
            data: data1
        },

        {
            name: "咸宁新增治愈病例",
            type: 'bar',
            data: data2

        }
    ]
};