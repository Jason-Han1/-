option = {
    backgroundColor: '#000',
    visualMap: {
        //图例值控制
        min: 0,
        max: 10000,
        show: false,
        calculable: true,
        color: ["#0bc7f3"],
        textStyle: {
            color: "#fff"
        },
    },
    geo: {
        map: "world",
        label: {
            emphasis: {
                show: false
            }
        },
        roam: true, //是否允许缩放
        layoutCenter: ["50%", "50%"], //地图位置
        itemStyle: {
            normal: {
                color: "#04284e", //地图背景色
                borderColor: "#5bc1c9" //省市边界线
            },
            emphasis: {
                color: "rgba(37, 43, 61, .5)" //悬浮背景
            }
        }
    },
};