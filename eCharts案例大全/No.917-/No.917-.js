var pieOption = {
        data: [
            { value: 15, name: '郑州西站' },
            { value: 15, name: '市委党校站' },
            { value: 15, name: '市中心医院站' },
            { value: 10, name: '郑州火车站' },
        ],
    },
    option = {
        tooltip: {
            trigger: 'item',
        },
         title: {
          text: 55,
          top: "50%",
          left: "50%",
          subtext: "设备总数",
          itemGap: 5,
          textStyle: {
            color: "#45a0e8",
            fontSize: 24
          },
          subtextStyle: {
            color: "#61bbff",
            fontSize: 20
          },
          textAlign: "center"
        },
        series: [
            {
                type: 'pie',
                radius: ['30%', '50%'],
                center: ['50%', '50%'],
                clockwise: false,
                labelLine: {
                    normal: {
                        lineStyle: {
                            color: '#61b7ce',
                        },
                    },
                },
                label: {
                    color: 'rgba(255,255,255,0.65)',
                    formatter: function (params) {
                        return `{normal|${params.value}台}\r\r\n{value|${params.data.name}}`;
                    },
                    rich: {
                        normal: {
                            //   color: "#8A8A8A",
                            fontSize: 16,
                            align: 'left',
                        },
                        value: {
                            fontSize: 14,
                            //   color: "#8A8A8A",
                            fontWeight: 600,
                            padding: [5, 0, 0, 0],
                        },
                    },
                },
                itemStyle: {
                    normal: {
                        borderWidth: 3,
                        borderColor: '#0a2d39',
                    },
                },
                data: pieOption.data ? pieOption.data : 0,
                emphasis: {
                    itemStyle: {
                        shadowBlur: 10,
                        shadowOffsetX: 0,
                        shadowColor: 'rgba(0, 0, 0, 0.5)',
                    },
                },
            },
        ],
    };
