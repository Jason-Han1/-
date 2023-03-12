option = {
    backgroundColor: "#ffffff",
    color: ["#CCF2FF", "#A4E1FF", "#53B7F4", "#694EEB", "#9B1AD9"],
    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c}"
    },
    legend: {
        top: 10
    },
    calculable: true,
    series: [{
        name: 'DATA',
        type: 'funnel',
        left: 100,
        right: 100,
        min: 0,
        maxSize: '100%',
        sort: 'descending', // ascending 此属性设置正倒方向
        gap: 2,
        label: {
            show: true,
            position: 'inside',
            fontSize:24,
            fontWeight:'bold',
            color:'#fff',
            emphasis: {
                position: 'inside',
                formatter: '{b}:{c}',
                fontSize:20,
                color: '#32F8A4'
            },
        },
        labelLine: {
            length: 10,
            lineStyle: {
                width: 1,
                type: 'solid'
            }
        },
        itemStyle: {
            borderColor: '#fff',
            borderWidth: 1
        },
        
        data: [{
                value: 10,
                name: 'A'
            },
            {
                value: 20,
                name: 'B'
            },
            {
                value: 30,
                name: 'D'
            },
            {
                value: 40
                ,
                name: 'E'
            },
            {
                value: 50,
                name: 'F'
            }
        ]
    }]
};