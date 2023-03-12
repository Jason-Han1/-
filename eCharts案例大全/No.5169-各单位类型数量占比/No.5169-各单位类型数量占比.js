option = {
    title: {
        text: "各单位类型数量占比",
        // top: "center",
        // left: "center",
        textStyle: {
            fontSize: "20",
            color: "#333",
            fontWeight: "400",
        },
    },
    tooltip: {
        trigger: "item",
        formatter: "{a} <br/>{b} : {c}家({d}%)",
    },
    series: [{
        name: "各单位类型数量占比",
        type: "pie",
        radius: '68%',
        center: ['50%', '50%'],
        avoidLabelOverlap: false,
        label: {
            show: true,
            formatter: "{b} : \n{c}家({d}%)",
        },
        labelLine: {
            show: true,
        },
        data: [{
                value: 170,
                name: "设计单位"
            },
            {
                value: 350,
                name: "基建单位"
            },
            {
                value: 103,
                name: "检修单位"
            },
            {
                value: 732,
                name: "运行/维护单位"
            },
        ],
        itemStyle: {
            normal: {
                borderWidth: 3,
                borderColor: '#ffffff',
            },
            emphasis: {
                borderWidth: 0,
                shadowBlur: 0,
                shadowOffsetX: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
            }
        },
        color: [
            '#ffc100',
            '#a5a5a4',
            '#ed7c2f',
            '#5a9bd5'
        ],
    }],

};