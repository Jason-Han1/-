option = {
    backgroundColor:'#033a48',
    "grid": {
        "top": 10,
        bottom: 10,
        "right": 0,
        "left": 180
    },
    "tooltip": {
        "padding": 10,
        "textStyle": {
            "color": "#fff",
            "fontSize": 24
        },
        "backgroundColor": "#00576e"
    },
    "yAxis": [{
        "nameTextStyle": {
            "color": "#97d2ff",
            "padding": [0, 20, 10, 0],
            //"fontSize": 24
        },
        "axisLabel": {
            "color": "#0fd1d3",
            //"fontSize": 26,
            "interval": 0,
            "align": "left",
            "padding": [0, 60, 0, 0]
        },
        "axisTick": {
            "show": false
        },
        "splitLine": {
            "show": false
        },
        "axisLine": {
            "show": false
        },
        "type": "category",
        "data": ["1  汕尾市", "2  茂名市", "3  湛江市", "4  深圳市", "5  河源市", "6  阳江市", "7  惠州市", "8  汕头市", "9  梅州市", "10  珠海市", "11  韶关市", "12  中山市", "13  云浮市", "14  潮州市", "15  江门市", "16  揭阳市", "17  肇庆市", "18  东莞市", "19  清远市", "20  佛山市", "21  广州市"],
        "inverse": true,
        "offset": 140
    }, {
        "nameTextStyle": {
            "color": "#97d2ff",
            "padding": [0, 20, 10, 0],
            //"fontSize": 24
        },
        "axisLabel": {
            "show": false
        },
        "axisTick": {
            "show": false
        },
        "splitLine": {
            "show": false
        },
        "axisLine": {
            "show": false
        },
        "type": "category",
        "data": ["1  汕尾市", "2  茂名市", "3  湛江市", "4  深圳市", "5  河源市", "6  阳江市", "7  惠州市", "8  汕头市", "9  梅州市", "10  珠海市", "11  韶关市", "12  中山市", "13  云浮市", "14  潮州市", "15  江门市", "16  揭阳市", "17  肇庆市", "18  东莞市", "19  清远市", "20  佛山市", "21  广州市"],
        "inverse": true
    }],
    "xAxis": {
        "nameTextStyle": {
            "color": "#97d2ff",
            "padding": [0, 20, 10, 0],
            "fontSize": 24
        },
        "axisLabel": {
            "show": false
        },
        "axisTick": {
            "show": false
        },
        "splitLine": {
            "show": false
        },
        "axisLine": {
            "show": false
        }
    },
    "series": [{
        "type": "bar",
        "barWidth": 20,
        "barGap": "-100%",
        "yAxisIndex": 1,
        "data": [5.04, 5.04, 5.04, 5.04, 5.04, 5.04, 5.04, 5.04, 5.04, 5.04, 5.04, 5.04, 5.04, 5.04, 5.04, 5.04, 5.04, 5.04, 5.04, 5.04, 5.04],
        "itemStyle": {
            "normal": {
                "barBorderRadius": 20,
                "borderColor": "#01799a",
                "borderWidth": 2,
                "color": "rgba(0,0,0,0)"
            }
        },
        "label": {
            "show": true,
            "position": "insideRight",
            "color": "#fff",
            //"fontSize": 26,
            "padding": [0, 10, 0, 0]
        },
        "silent": true
    }, {
        "type": "bar",
        "barWidth": 15,
        "data": ["2.670", "2.680", "2.770", "2.880", "2.930", "2.950", "3.070", "3.100", "3.110", "3.150", "3.260", "3.280", "3.420", "3.460", "3.540", "3.630", "3.710", "3.780", "3.780", "3.910", "4.040"],
        "itemStyle": {
            "normal": {
                "barBorderRadius": 15,
                "color": {
                    "x": 0,
                    "y": 0,
                    "x2": 1,
                    "y2": 0,
                    "type": "linear",
                    "global": false,
                    "colorStops": [{
                        "offset": 0,
                        "color": "#459ded"
                    }, {
                        "offset": 1,
                        "color": "#20dbe7"
                    }]
                },
                "shadowBlur": 5,
                "shadowColor": "#000"
            }
        }
    }]
}