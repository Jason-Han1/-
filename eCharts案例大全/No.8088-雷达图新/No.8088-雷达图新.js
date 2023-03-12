option = {
    color: ["rgba(249,153,153, 1)", "rgba(121,202,242, 1)"],
    tooltip: {
        show: true,
        trigger: "item"
    },
    legend: {
        orient: 'vertical',
        x:'left',
        y:'center',
        icon: "circle",
        textStyle: {
             fontSize: 22,
             align: "right",
             padding: 15,
         },
        data: ['2020年度', '2019年度'],
    },
    radar: {
        center: ["50%", "50%"],
        radius: "70%",
        startAngle: 90,
      splitArea: {
            areaStyle: {
                color: ["transparent"]
            }
        },
        
        indicator: [{
                name: '团队稳定',
                max: 6500
            },
            {
                name: '惩罚',
                max: 16000
            },
            {
                name: '奖励',
                max: 30000
            },
            {
                name: '费用情况',
                max: 38000
            },
            {
                name: '岗位调整',
                max: 52000
            } 
             
        ]
    },

    series: [{
        name: "2020年度",
        type: "radar",
        symbol: "none", 
        areaStyle: {
            normal: {
                color: "rgba(121,202,242, 1)"
            }
        },
        data: [
            [5000, 14000, 28000, 31000, 42000, 21000]
        ]
    }, {
        name: "2019年度",
        type: "radar",
        symbol: "none",
        areaStyle: {
            normal: {
                 color: "rgba(249,153,153, 1)"
            }
        },
        
        data: [
            [4300, 10000, 28000, 35000, 50000, 19000]
        ]
    }]


};