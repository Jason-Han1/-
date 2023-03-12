//symbols里为未填充的柱形背景，为svg路径，可替换3d图形
var symbols = [
        "path://M0,4V3.9C.23,1.74,7.75,0,17,0S34,1.79,34,4h0V123c0,2.21-7.61,4-17,4s-17-1.79-17-4H0Z",
        "path://M0,4V3.9C.23,1.74,7.75,0,17,0S34,1.79,34,4h0V123c0,2.21-7.61,4-17,4s-17-1.79-17-4H0Z",
        "path://M0,4V3.9C.23,1.74,7.75,0,17,0S34,1.79,34,4h0V123c0,2.21-7.61,4-17,4s-17-1.79-17-4H0Z",
        "path://M0,4V3.9C.23,1.74,7.75,0,17,0S34,1.79,34,4h0V123c0,2.21-7.61,4-17,4s-17-1.79-17-4H0Z"
      ];
var bodyMax = 150;
var labelSetting = {
    normal: {
        show: true,
        position: "outside",
        formatter: function(param) {
            return param.value;
        },
        textStyle: {
            fontSize: 18,
            fontFamily: "Arial",
            // color: "#FFFFFF"
        }
    }
};
option = {
    xAxis: {
        data: ["微信", "窗口", "自助机", "支付宝"],
        axisTick: {
            show: false
        },
        axisLine: {
            show: false
        },
        // axisLabel: {
        //     color: "#FFFFFF"
        // }
    },
    yAxis: {
        max: bodyMax,
        offset: 20,
        axisTick: {
            show: false
        },
        axisLine: {
            show: false
        },
        splitLine: {
            show: false
        }
    },
    series: [{
            name: "占比",
            type: "pictorialBar",
            label: labelSetting,
            symbolClip: true,
            symbolBoundingData: bodyMax,
            data: [{
                    value: 123,
                    symbol: symbols[0],
                },
                {
                    value: 34,
                    symbol: symbols[1],
                },
                {
                    value: 101,
                    symbol: symbols[2],
                },
                {
                    value: 89,
                    symbol: symbols[3],
                }
            ],
            z: 10
        },
        {
            name: "未占比",
            type: "pictorialBar",
            symbolBoundingData: bodyMax,
            animationDuration: 0,
            itemStyle: {
                color: "#ccc"
            },
            data: [{
                    value: 1,
                    symbol: symbols[0]
                },
                {
                    value: 1,
                    symbol: symbols[1]
                },
                {
                    value: 1,
                    symbol: symbols[2]
                },
                {
                    value: 1,
                    symbol: symbols[3]
                }
            ]
        }
    ]
};