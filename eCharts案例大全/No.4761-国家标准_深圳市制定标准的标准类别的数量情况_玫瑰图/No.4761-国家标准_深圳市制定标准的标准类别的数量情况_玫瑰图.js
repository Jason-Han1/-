option = {
    backgroundColor: "#0f375f",
    legend: {
        orient: 'vertical',
        top: "center",
        right: "5%",
        data: ['产品', '方法', '环保', '基础', '管理'],
        textStyle: {
            color: "#fff",
            fontSize: 16
        }
    },
    tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b} : {c} ({d}%)'
    },
    series: [{
        name: '半径模式',
        type: 'pie',
        radius: ['30%', '80%'],
        center: ['40%', '50%'],
        roseType: 'radius',
        label: {
            show: true,
            normal: {
                position: 'outside',
                fontSize: 16
            }
        },
        labelLine: {
            length: 1,
            length2: 20,
            smooth: true
        },
        data: [{
                value: 1,
                name: '产品',
                itemStyle: {
                    color: "rgba(50,123,250,0.7)",
                    borderColor: "rgba(50,123,250,1)",
                    borderWidth: 3
                }
            },
            {
                value: 2,
                name: '方法',
                itemStyle: {
                    color: "rgba(244,201,7,0.7)",
                    borderColor: "rgba(244,201,7,1)",
                    borderWidth: 3
                }
            },
            {
                value: 3,
                name: '环保',
                itemStyle: {
                    color: "rgba(23,216,161,0.7)",
                    borderColor: "rgba(23,216,161,1)",
                    borderWidth: 3
                }
            },
            {
                value: 4,
                name: '基础',
                itemStyle: {
                    color: "rgba(122,60,235,0.7)",
                    borderColor: "rgba(122,60,235,1)",
                    borderWidth: 3
                }
            },
            {
                value: 5,
                name: '管理',
                itemStyle: {
                    color: "rgba(15,197,243,0.7)",
                    borderColor: "rgba(15,197,243,1)",
                    borderWidth: 3
                }
            }
        ]
    }]
};