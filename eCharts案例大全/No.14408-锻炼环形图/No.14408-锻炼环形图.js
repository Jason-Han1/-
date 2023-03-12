option = {
    title: {
        text: "",
        subtext: "",
        left: "center",
        textStyle: {
            color: "#fff",
            fontSize: 18
        },
    },

    backgroundColor: '#ffffff',
    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b}:({d}%)"
    },
    series: [{
        name: '事业线',
        type: 'pie',
        radius: ['30%', '52%'],
        color: ['#ec5d51', '#59abe1', '#f4cf42', '#3dc6a8'],
        label: {
            normal: {
                position: 'inner'
            }
        },
        data: [{
            value: 15,
            name: '第一周'
        }, {
            value: 12,
            name: '第二周'
        }, {
            value: 8,
            name: '第三周'
        }, {
            value: 9,
            name: '第四周'
        } ]
    }, {
        name: '分组',
        type: 'pie',
        radius: ['54%', '72%'],
        color: ['#a0dca0', '#60bbb6', '#f78db3', '#feadac', '#fae395','#91d4e5','#8eb3e8'],
        label: {
            normal: {
               formatter: '{b}\n{d}%'
            }
        },
        data: [{
            value: 6,
            name: '跑步'
        }, {
            value: 5,
            name: '瑜伽'
        }, {
            value: 8,
            name: '羽毛球'
        }, {
            value: 7,
            name: '步行'
        }, {
            value: 9,
            name: '骑车'
        }, {
            value: 9,
            name: '游泳'
        }]
    }]
};