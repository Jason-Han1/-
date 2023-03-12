option = {
    backgroundColor: "#03141c",
    title: {
        top: '34%',
        left: 'center',
        subtext: '已到账 \n 2019年KPI为3亿',
        subtextStyle: {
            top: '0%',
            color: '#fff',
            fontSize: 14,
            lineHeight: 150
        }
    },
    calculable: true,
    series: [
        {
            name: '已到账',
            type: 'pie',
            radius: [104, 108],
            center: ['50%', '50%'],
            data: [
                {
                    value: 40,
                    name: '已到账占比',
                    itemStyle: {
                        color: '#FFF'
                    },
                   label: {
                    show: true,
                    position: 'center',
                    color: '#fff',
                    fontSize: 80,
                    fontWeight: 'bolder',
                    fontFamily: 'Impact',
                    formatter: function(o){
                        return o.value + '%'
                      }
                    },
                    labelLine: {
                        show: false
                    }
                },
                
                {
                    value: 60,
                    name: '未到账剩余KPI占比',
                    itemStyle: {
                        color: "transparent"
                    }
                }
            ],
            
        },
        {
            name: '签约',
            type: 'pie',
            radius: [103, 108],
            center: ['50%', '50%'],
            data: [
                {
                    value: 40,
                    name: '已签约且已到账占比',
                    itemStyle: {
                        color: "transparent"
                    }
                },
                {
                    value: 10,
                    name: '已签约未到账占比',
                    itemStyle: {
                        color: '#FFF',
                        borderType: 'dashed',
                        borderColor: '#000',
                        borderWidth: 5,
                    },
                    label: {
                        show: false
                    },
                    labelLine: {
                        show: false
                    }
                },
                {
                    value: 50,
                    name: '未签约剩余KPI占比',
                    itemStyle: {
                        color: "transparent"
                    }
                }
            ]
        },
        {
            name: 'KPI',
            type: 'pie',
            radius: [105, 107],
            center: ['50%', '50%'],
            data: [
                {
                    value: 50,
                    name: '已完成KPI',
                    itemStyle: {
                        color: "transparent"
                    }
                },
                {
                    value: 50,
                    name: '剩余KPI',
                    itemStyle: {
                        color: '#4B4B4B'
                    },
                    labelLine: {
                        show: false
                    },
                    label: {
                        show: false
                    }
                }
            ]
        }
    ]
};