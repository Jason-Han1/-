// 关于indicator 最大值，最小值的取值方式，避免线飞出去。一般让后端给数据的时需注意让最小值更小，让最大值更大一些。例如：最小值为正数时那就乘以一个比1小的数值 让其变得更小

option = {
    "tooltip": {
        "show": true,
        "trigger": "item",
        "confine": true
    },
    "legend": {
        "icon": "roundRect",
        "left": "center",
        "top": "bottom",
        "itemHeight": 3,
        "textStyle": {
            "fontSize": 14,
            "color": "#088AD5"
        }
    },
    "radar": {
        "center": [
            "50%",
            "50%"
        ],
        "radius": "70%",
        "splitNumber": 4,
        "shape": "circle",
        "splitArea": {
            "areaStyle": {
                "color": [
                    "#ddedf6",
                    "#e1f0f8",
                    "#e6f3fa",
                    "#f0f8fc"
                ]
            }
        },
        "axisLine": {
            "show": true,
            "lineStyle": {
                "color": "#088AD5"
            }
        },
        "splitLine": {
            "show": true,
            "lineStyle": {
                "color": "#088AD5"
            }
        },
        "indicator": [
            {
                "max": 33.589858019999994,
                "min": 8.817294088,
                "name": "新开工面积合计"
            },
            {
                "max": 24.430116012,
                "min": -19.409638404000003,
                "name": "省网用电量"
            },
            {
                "max": 31.359995748,
                "min": -8.5877728368,
                "name": "铁路货运量"
            },
            {
                "max": 0.0714815064,
                "min": -8.0652219948,
                "name": "中外资银行业机构本外币贷款余额_企(事)业单位中长期贷款"
            },
            {
                "max": -5.004399198400001,
                "min": -15.252673644,
                "name": "社会融资规模"
            }
        ]
    },
    "series": {
        "name": "雷达图",
        "type": "radar",
        // "symbol": "none",
        "itemStyle": {
            "show": false
        },
        "lineStyle": {
            "normal": {
                "width": 2
            }
        },
        "areaStyle": {
            "normal": {
                "color": "rgba(0, 0, 0, 0)"
            }
        },
        "data": [
            {
                "name": "河南省",
                "value": [
                    27.99154835,
                    -16.17469867,
                    26.13332979,
                    0.059567922,
                    -12.71056137
                ]
            },
            {
                "name": "北京市",
                "value": [
                    11.02161761,
                    20.35843001,
                    -7.156477364,
                    -6.721018329,
                    -6.255498998
                ]
            }
        ]
    }
}