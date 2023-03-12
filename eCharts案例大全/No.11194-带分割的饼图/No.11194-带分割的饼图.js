option = {
    graphic: [{
            type: "text",
            left: "center",
            top: "50%",
            style: {
                fill: "#3AA0FF",
                text: "1111",
                font: "20px Microsoft YaHei"
            }
        },
        {
            type: "text",
            left: "center",
            top: "60%",
            z: 10,
            style: {
                text: "总计",
                fill: "#808492",
                font: "12px Microsoft YaHei"
            }
        }
    ],
    tooltip: {
        // show:false,
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    color: ["#FF8282", "#FFCC5D", "#32DBC9"],
    legend: {
        itemWidth: 10, //图例的宽度
        itemHeight: 10, //图例的高度
        itemGap: 30,
        orient: 'horizontal',
        left: 'center',
        top: '20px',
        icon: 'rect',
        selectedMode: false, //取消图例上的点击事件
        data: ['未控制', '部分控制', '完全控制'],
        textStyle: {
            color: '#808492'
        },
    },
    series: [{
        name: '性别',
        type: 'pie',
        radius: '55%',
        // center: ['40%', '50%'],
        center: ["50%", "55%"],
        radius: ["30%", "50%"],
        data: [{
                value: 335,
                name: '未控制'
            },
            {
                value: 180,
                name: '部分控制'
            },
            {
                value: 50,
                name: '完全控制'
            },
        ],
        // itemStyle: {
        //     emphasis: {
        //         shadowBlur: 10,
        //         shadowOffsetX: 0,
        //         shadowColor: 'rgba(0, 0, 0, 0.5)'
        //     }
        // },
        // labelLine: {//设置引导线样式
        //     show: true,
        //     lineStyle: {
        //       color: '#888888',
        //       width: 1,
        //     }
        //   },
        
        itemStyle: {
            
            normal: {
                label: {
                    show: true,
                    // formatter: '{b} : {c} ({d}%)' 
                    formatter: '{b}',
                    // color: '#888888',

                },
                borderColor: '#ffffff',
                borderWidth: 2,
            },

        }
    }]
};