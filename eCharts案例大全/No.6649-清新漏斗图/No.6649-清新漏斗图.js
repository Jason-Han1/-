option = {
    backgroundColor: "#ffffff",
    color: ["#CCF2FF", "#A4E1FF", "#53B7F4"],
    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c}"
    },

    calculable: true,
    series: [{
        name: 'DATA',
        type: 'funnel',
        left: 100,
        right: 100,
        min: 0,
        maxSize: '100%',
        sort: 'ascending',
        gap: 2,
        label: {
            show: true,
            position: 'inside',
            fontSize:24,
            fontWeight:'bold',
            color:'#fff'
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
                name: 'C'
            }
        ]
    }]
};