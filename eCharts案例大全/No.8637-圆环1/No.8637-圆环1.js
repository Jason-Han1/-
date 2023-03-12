option = {
    title: {
        text: '制造业',
        subtext: '28%',
        x: 'center',
        y: 'center',
        textStyle: {
            fontSize:20,
            fontWeight:'normal',
            color: '#fff'
        },
        subtextStyle: {
            color: '#2185a8',
            fontSize: 40
        },
    },
    series: [{
        name: '',
        type: 'pie',
        radius: ['80%', '82%'],
        label: {
            show: false,
        },
        labelLine: {
            show: false
        },
        color: '#48849d',
        data: [{
            value: 100,
            name: ''
        }]
    }, {
        name: '',
        type: 'pie',
        radius: ['60%', '78%'],
        label: {
            show: false,
        },
        labelLine: {
            show: false
        },
        data: [{
                value: 20,
                name: "",
                itemStyle: {
                    normal: {
                        color: {
                            x: 0,
                            y: 0,
                            x2: 0,
                            y2: 1,
                            colorStops: [{
                                offset: 0,
                                color: '#0d77d4' // 0% 处的颜色
                            }, {
                                offset: 1,
                                color: '#1ad7ea' // 100% 处的颜色
                            }],
                            globalCoord: false // 缺省为 false
                        }
                    }
                }
            },{
                value: 80,
                name: '1',
                itemStyle:{
                    color:'#173a60'
                }
            }
        ]
    }]
};