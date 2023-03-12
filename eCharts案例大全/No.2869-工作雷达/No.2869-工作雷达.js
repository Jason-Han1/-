var data = [{
        name: "解决问题能力",
        value: 70,
    },
    {
        name: "结果导向",
        value: 90,
    },
    {
        name: "学习能力",
        value: 80,
    },
    {
        name: "产品思维",
        value: 85,
    },
    {
        name: "沟通协调",
        value: 70,
    },
];

let dataArr = [];
data.forEach((item) => {
    dataArr.push(item.value);

});
option = {
    backgroundColor: '#212874',
 
    title: {
       
        top: '48%',
        bottom:'center',
        left: 'center',
 
    },
    radar: {
        center: ['50%', '50%'],
        radius: "40%",
        splitNumber: 5,
        name: {
            textStyle: {
                color: "#fff",
                borderRadius: 3,
                fontSize: 22,
            },
        },
        nameGap: "5",
        indicator: [{
        name: "解决问题能力",
        max:100,
        value: 70,
    },
    {
        name: "结果导向", max:100,
        value: 90,
    },
    {
        name: "学习能力", max:100,
        value: 80,
    },
    {
        name: "产品思维", max:100,
        value: 85,
    },
    {
        name: "沟通协调", max:100,
        value: 70,
    },
        ],
        // 圈圈网颜色
        splitLine: {
            show: true,
            lineStyle: {
                color: [
                    'rgba(108, 254, 255, 0)', 'rgba(108, 254, 255, 0.30196078431372547)', 'rgba(108, 254, 255, 0.30196078431372547)',
                    'rgba(108, 254, 255, 0.30196078431372547)', 'rgba(108, 254, 255, 0.30196078431372547)'
                ],
                width: '1'
            }
        },
        splitArea: {
            areaStyle: {
                color: 'rgba(119, 140, 162, 0.14)'
            },
        },
        axisLine: {
            show: true,
            lineStyle: {
                color: "rgba(0, 233, 234, 0.30196078431372547)",
            },
        },
    },
    series: [{
        name: "",
        type: "radar",
        symbol: "circle",
        symbolSize: "8",
        label: {
            show: false,
            // 让它的点没有显示格式
            formatter: "",
            color: "#fff",
            fontStyle: {
                fontSize: 33,
            },
        },
        data: [{
            value: dataArr,
            name: "健康态势",
            lineStyle: { //网调线 
                color: "#6CFEFF",
                // color: "rgba(108, 254, 255, 0.4)",
                background: "radial-gradient(circle, rgba(108, 254, 255, 0) 0%, rgba(108, 254, 255, 0.4) 100%)"
            },
            symbolSize: 8, //圆圈大小
            itemStyle: { //调点的样式
                show: true,
                color: "rgba(108, 254, 255, 1)",
                shadowColor: 'rgba(108, 254, 255, 1)',
                shadowBlur: 10,
                fontSize: 28,
            },
            areaStyle: {
                // 内网颜色
                normal: {
                    color: {
                        type: 'radial',
                        colorStops: [{
                            offset: 0,
                            color: 'rgba(108, 254, 255, 0)'
                        }, {
                            offset: 1,
                            color: 'rgba(108, 254, 255, 0.4)'
                        }],
                        globalCoord: false
                    },
                    opacity: 1,
                }
            },
        }, ],
    }, ],
};