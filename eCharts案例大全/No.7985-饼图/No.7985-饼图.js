option = {
    backgroundColor: "#0f375f",
    legend: {
        orient: 'vertical',
        top: "center",
        right: "5%",
        data: ['类目1', '类目2', '类目3', '类目4', '类目5'],
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
        type: 'pie',
        radius: '70%',
        center: ['40%', '50%'],
        label: {
            normal: {
                fontSize: 16
            }
        },
        data: [{
                value: 335,
                name: '类目1',
                itemStyle: {
                    color: "rgba(50,123,250,0.7)",
                    borderColor: "rgba(50,123,250,1)",
                    borderWidth: 3
                }
            },
            {
                value: 310,
                name: '类目2',
                itemStyle: {
                    color: "rgba(244,201,7,0.7)",
                    borderColor: "rgba(244,201,7,1)",
                    borderWidth: 3
                }
            },
            {
                value: 234,
                name: '类目3',
                itemStyle: {
                    color: "rgba(23,216,161,0.7)",
                    borderColor: "rgba(23,216,161,1)",
                    borderWidth: 3
                }
            },
            {
                value: 135,
                name: '类目4',
                itemStyle: {
                    color: "rgba(122,60,235,0.7)",
                    borderColor: "rgba(122,60,235,1)",
                    borderWidth: 3
                }
            },
            {
                value: 1548,
                name: '类目5',
                itemStyle: {
                    color: "rgba(15,197,243,0.7)",
                    borderColor: "rgba(15,197,243,1)",
                    borderWidth: 3
                }
            }
        ]
    }]
};