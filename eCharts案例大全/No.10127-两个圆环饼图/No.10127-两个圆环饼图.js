var option = {
        // title: {
        //     text: "",
        //     subtext: "",
        //     left: "center",
        //     textStyle: {
        //         color: "#fff",
        //         fontSize: 18
        //     },
        // },
        title: {
            text: '100',
            subtext: '总量',
            x: 'center',
            y: 'center',
            textStyle: {
                fontSize: 30,
                lineHeight: 30,
                fontWeight: 'normal',
                color: "#fff"
            },
            subtextStyle: {
                color: '#fff',
                fontSize: 14
            },
        },
        backgroundColor: '#00265f',
        tooltip: {
            trigger: 'item',
            // formatter: "{a} <br/>{b}:({d}%)"
        },
        series: [{
            name: '',
            type: 'pie',
            radius: ['30%', '40%'],
            color: ['#0000FF', '#63D32A', '#49DFF0'],
            label: {
                normal: {
                    position: 'inner'
                }
            },
            data: [{
                value: 20,
                name: 'ppp'
            }, {
                value: 30,
                name: 'qqq'
            }, {
                value: 50,
                name: 'xxx'
            }]
        }, {
            name: '',
            type: 'pie',
            radius: ['60%', '70%'],
            color: ['#0000FF', '#0000FF', '#63D32A', '#63D32A', '#49DFF0', '#49DFF0'],
            label: {
                // normal: {
                //     show: false,
                //     formatter: '{b}\n{d}%'
                // }
                normal: {
                    position: 'inner'
                }
            },
            data: [{
                value: 10,
                name: '昨日-ppp'
            }, {
                value: 10,
                name: '今日-ppp'
            }, {
                value: 15,
                name: '昨日-qqq'
            }, {
                value: 15,
                name: '今日-qqq'
            }, {
                value: 25,
                name: '昨日-xxx'
            }, {
                value: 25,
                name: '今日-xxx'
            }]
        }]
    };