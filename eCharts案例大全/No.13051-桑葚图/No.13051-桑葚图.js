var option = {
    //工具提示
    backgroundColor: 'white',
    color: ['#6b43de', '#4d8fea', '#eb6739', '#fedd28', '#1ed3d8', '#319fa7'],
    tooltip: {
        trigger: 'item',
        triggerOn: 'mousemove'

    },
    series: [{
        //图的类型
        type: 'sankey',
        layout: 'none',
        //图中所用数据，就是上面引入的数据，包括节点和关联两部分
        data: [{
                "name": "Total vehicle"
            },
            {
                "name": "Gasoline"
            },
            {
                "name": "Four door car"
            },
            {
                "name": "Two door car"
            },
            {
                "name": "Truck"
            },
            {
                "name": "Van"
            },
            {
                "name": "Sport utility vehicle"
            },
            {
                "name": "Station wagon"
            },
            {
                "name": "Diesel"
            },
            {
                "name": "Flexible fuel"
            },
        ],
        links: [{
                "source": "Total vehicle",
                "target": "Gasoline",
                "value": 0.992581
            },
            {
                "source": "Gasoline",
                "target": "Four door car",
                "value": 0.442242
            },
            {
                "source": "Gasoline",
                "target": "Two door car",
                "value": 0.217774
            },
            {
                "source": "Gasoline",
                "target": "Truck",
                "value": 0.129499
            },
            {
                "source": "Gasoline",
                "target": "Van",
                "value": 0.113676
            },
            {
                "source": "Gasoline",
                "target": "Sport utility vehicle",
                "value": 0.071501
            },
            {
                "source": "Gasoline",
                "target": "Station wagon",
                "value": 0.025308
            },
            {
                "source": "Total vehicle",
                "target": "Diesel",
                "value": 0.007227
            },
            {
                "source": "Diesel",
                "target": "Truck",
                "value": 0.590069
            },
            {
                "source": "Diesel",
                "target": "Four door car",
                "value": 0.264434
            },
            {
                "source": "Diesel",
                "target": "Sport utility vehicle",
                "value": 0.06582
            },
            {
                "source": "Diesel",
                "target": "Two door car",
                "value": 0.051963
            },
            {
                "source": "Diesel",
                "target": "Van",
                "value": 0.01963
            },
            {
                "source": "Diesel",
                "target": "Station wagon",
                "value": 0.008083
            },
            {
                "source": "Total vehicle",
                "target": "Flexible fuel",
                "value": 0.000192
            },
            {
                "source": "Flexible fuel",
                "target": "Truck",
                "value": 0.73913
            },
            {
                "source": "Flexible fuel",
                "target": "Four door car",
                "value": 0.26087
            }
        ],
        itemStyle: {
            normal: {
                borderWidth: 1,
                borderColor: '#aaa'
            }
        },
        label: {
            textStyle: {
                fontFamily: 'Arial',
                fontSize: 20,
                color: 'black'
            }
        },
        //线条样式
        lineStyle: {
            normal: {
                curveness: 0.6
            }
        }
    }]
}