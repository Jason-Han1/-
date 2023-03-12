let maxDatas = [741, 741, 741, 741, 741];
let datas = [0, 305, 415, 741, 405];
option = {
    backgroundColor: '#031245',
    //标题
    title: {
        x: 'left',
        text: 'aaaaa',
        y: 'top',
        padding: [0, 0, 0, 26],
        textStyle: {
            fontSize: 16,
            fontWeight: 400,
            color: '#70E0FD',
            lineHeight: 30,
            fontFamily: 'PingFang SC',
            rich: {
                A: {
                    // color: '#70E0FD',
                    // 设置背景图片，可以设置width和height，不设置时宽高自适应
                    backgroundColor: {
                        //   image: require('../../assets/images/bm12.png'),
                    },
                },
            },
        },
    },
    "color": ["#69ABF8", "#77E0FB", "#03387a", "#03387a", "#03387a", "#6c93ee", "#a9abff", "#f7a23f", "#27bae7", "#ff6d9d", "#cb79ff", "#f95b5a", "#ccaf27", "#38b99c", "#93d0ff", "#bd74e0", "#fd77da", "#dea700"],
    //      x轴的下三角, 柱子的顶部, 阴影背景，?,        阴影的顶部,      ?         ?     
    "grid": {
        "containLabel": true,
        "left": 20,
        "right": 20,
        "bottom": 10,
        "top": 40
    },
    "xAxis": {
        "nameTextStyle": {
            "color": "#c0c3cd",
            "padding": [0, 0, -10, 0],
            "fontSize": 14
        },
        "axisLabel": {
            "color": "#c0c3cd",
            "fontSize": 14,
            "interval": 0,
            margin: 12,//刻度标签与轴线之间的距离。
        },
        "axisTick": {
            "lineStyle": {
                "color": "#384267",
                "width": 1
            },
            "show": true
        },
        "splitLine": {
            "show": false
        },
        "axisLine": {
            "lineStyle": {
                "color": "#384267",
                "width": 1,
                "type": "dashed"
            },
            "show": true
        },
        "data": ['2017年', '2018年', '2019年', '2020年', '2021年'],
        "type": "category"
    },
    "yAxis": {
        "show": false
    },
    "series": [{
        "data": datas,
        "type": "bar",
        "barMaxWidth": "auto",
        "barWidth": 30,
        "itemStyle": {
            "color": {
                "x": 0,
                "y": 0,
                "x2": 0,
                "y2": 1,
                "type": "linear",
                "global": false,
                "colorStops": [{
                    "offset": 0,
                    "color": "#77D6F8"
                }, {
                    "offset": 1,
                    "color": "#69ABF8"
                }]
            }
        },
        "label": {
            "show": true,
            "position": "top",
            "distance": 10,
            color: '#6DD9F5',
            fontSize: 14,
            fontFamily: 'Arial',
        }
    }, { // 底层
        "data": [1, 1, 1, 1, 1],
        "type": "pictorialBar",
        "barMaxWidth": "20",
        "symbol": "diamond",
        "symbolOffset": [0, "50%"],
        "symbolSize": [30, 15],
    }, { // 顶层
        "data": datas,
        "type": "pictorialBar",
        "barMaxWidth": "20",
        "symbolPosition": "end",
        "symbol": "diamond",
        "symbolOffset": [0, "-50%"],
        "symbolSize": [30, 12],
        "zlevel": 2,
    }, { // 阴影色
        "data": maxDatas,
        "type": "bar",
        "barMaxWidth": "auto",
        "barWidth": 30,
        "barGap": "-100%",
        "zlevel": -1,
    }, {
        "data": [1, 1, 1, 1, 1],
        "type": "pictorialBar",
        "barMaxWidth": "20",
        "symbol": "diamond",
        "symbolOffset": [0, "50%"],
        "symbolSize": [30, 15],
        "zlevel": -2,
    },
    {
        "data": maxDatas,
        "type": "pictorialBar",
        "barMaxWidth": "20",
        "symbolPosition": "end",
        "symbol": "diamond",
        "symbolOffset": [0, "-50%"],
        "symbolSize": [30, 12],
        "zlevel": -1,
    }],
}