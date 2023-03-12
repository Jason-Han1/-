option = {
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
            fontWeight: 'normal',
            color: ['#333']
        },
        subtextStyle: {
            color: '#666',
            fontSize: 14
        },
    },
    backgroundColor: '#ffffff',
    tooltip: {
        trigger: 'item',
        // formatter: "{a} <br/>{b}:({d}%)"
    },
    series: [{
        name: '',
        type: 'pie',
        radius: ['30%', '50%'],
        color: ['#ec5d51', '#59abe1', '#f4cf42'],
        label: {
            normal: {
                position: 'inner'
            }
        },
        data: [{
            value: 20,
            name: 'ODS'
        }, {
            value: 30,
            name: 'DW'
        }, {
            value: 50,
            name: '备份下发库'
        }]
    }, {
        name: '',
        type: 'pie',
        radius: ['64%', '84%'],
        color: ['#ec5d51', '#ec5d51', '#59abe1', '#59abe1', '#f4cf42', '#f4cf42'],
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
            name: '昨日-ODS'
        }, {
            value: 10,
            name: '今日-ODS'
        }, {
            value: 15,
            name: '昨日-DW'
        }, {
            value: 15,
            name: '今日-DW'
        }, {
            value: 25,
            name: '昨日-备份下发库'
        }, {
            value: 25,
            name: '今日-备份下发库'
        }]
    }]
};