option = {
    title: [
        {
            text: '',
            left: '16%',
            top: '5%',
            borderColor: '#ff0000',
            borderWidth: 1,
            padding: 20,
            textStyle: {
                fontSize: 25,
            },
        },
    ],
    grid: [
        { right: '3%', top: '1%', width: '50%', height: '30%' },
        { right: '3%', top: '34%', width: '50%', height: '30%' },
        // { right: '3%', top: '67%', width: '45%', height: '30%' },
        // {left: '7%', bottom: '7%', width: '38%', height: '38%'},
        // {right: '7%', bottom: '7%', width: '38%', height: '38%'}
    ],
    xAxis: [
        {
            type: 'category',
            data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
            gridIndex: 0,
        },
        {
            type: 'category',
            data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
            gridIndex: 1,
        },
        // {
        //     type: 'category',
        //     data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        //     gridIndex: 2,
        // },
    ],
    yAxis: [
        { type: 'value', gridIndex: 0, min: 0, max: 200 },
        { type: 'value', gridIndex: 1, min: 0, max: 200 },
        // { type: 'value', gridIndex: 2, min: 0, max: 200 },
    ],
    series: [
        {
            data: [120, 200, 150, 80, 70, 110, 130],
            type: 'bar',
            xAxisIndex: 0,
            yAxisIndex: 0,
        },
        {
            data: [120, 200, 150, 80, 70, 110, 130],
            type: 'bar',
            xAxisIndex: 1,
            yAxisIndex: 1,
        },
        {
            name: '面积模式',
            type: 'pie',
            radius: [20, 100],
            center: ['58%', '85%'],
            roseType: 'area',
            itemStyle: {
                borderRadius: 5,
            },
            data: [
                { value: 30, name: 'rose 1' },
                { value: 28, name: 'rose 2' },
                { value: 26, name: 'rose 3' },
                { value: 24, name: 'rose 4' },
                { value: 22, name: 'rose 5' },
                { value: 20, name: 'rose 6' },
                { value: 18, name: 'rose 7' },
                { value: 16, name: 'rose 8' },
            ],
        },
        {
            title: { text: 'asd' },
            type: 'treemap',
            roam: false,
            right:'3%',
            bottom:'13%',
            breadcrumb: false,
            width: '12%',
            height: '10%',
            label: {
                fontSize: 20,
                // backgroundColor:'#fff',
                borderColor: '#000',
                borderWidth: 1,
                borderRadius: 10,
                color: '#000',
            },
            itemStyle: {
                color: '#fff',
                borderRadius: 50,
            },
            levels: [
                {
                    color: '#fff',
                },
            ],
            data: [
                {
                    name: '90', // Second tree
                    value: 90,
                },
            ],
        },
    ],
};
