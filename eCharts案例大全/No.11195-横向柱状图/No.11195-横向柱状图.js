option = {
    grid: {
        top: '20',
        left: '15',
        right: '40',
        bottom: '20px',
        containLabel: true
    },
    tooltip: {
        show: "true",
        trigger: 'axis',
        axisPointer: { // 坐标轴指示器，坐标轴触发有效
            type: 'shadow', // 默认为直线，可选为：'line' | 'shadow'
            // 坐标轴指示器，坐标轴触发有效
            label: {
                show: true //显示横坐标文字背景
            }
        }
    },
    xAxis: {
        type: 'value',
        boundaryGap: false, //false代表是零刻度开始，设置为true代表离零刻度间隔一段距离
        data: [],
        splitNumber: 0,
        
        splitLine: {
            show: false
        }, //去除网格线
        splitArea: {
            show: false
        }, //保留网格区域
        axisTick: {
            show: false
        },
        axisLine: {
            show: false,
        },
        splitLine: {
            show: true,
            lineStyle: {
                type: 'dashed',
                color: 'rgba(33,148,246,0.2)'
            }
        },
        axisLabel: {
            interval: 1, //隔几个显示
            rotate: 0,
            showMaxLabel: true,
            showMinLabel: true,
            textStyle: {
                color: "#808492"
            }
        }
    },
    yAxis: [{
        type: 'category',
        boundaryGap: true, //false代表是零刻度开始，设置为true代表离零刻度间隔一段距离
        nameTextStyle: {
            color: "#808492"
            // fontSize:16,
        },
        splitLine: {
            show: false
        }, //去除网格线
        splitArea: {
            show: false
        }, //保留网格区域
        axisLine: {
            show: true,
            lineStyle: {
                color: "#808492",
                width: 1.2 //这里是为了突出显示加上的
            },
        },
        axisTick: {
            show: true, //显示刻度线
            alignWithLabel: true, //在 boundaryGap: true,时候才可以，使得刻度线跟项目保持一致
        },
        axisLabel: {
            textStyle: {
                color: "#808492"
            }
        },
        axisLine: {
            lineStyle: {
                color: '#808492',
            }
        },
        data: ["3~4", "5~11", "12~17", "18~30", "31~40", "41~50", "51~60", "71~80", ">80"],
    }],
    series: [{
        name: '数量',
        type: 'bar',
        itemStyle: {
            normal: {
                color: '#55ADFF', // 100% 处的颜色
                //柱形图圆角，初始化效果
                // barBorderRadius: [10, 10, 10, 10],
                label: {
                    show: true,//是否展示
                    position: 'right',
                    distance: 20,//调整距离
                    fontSize : '12',
                    align:'center',
                    color: '#565656',
                    formatter: function(param) {
                        console.log(param)
                        // 这个得先计算出来总数
                        // return '同比：'+data.visits[param.dataIndex] +'%';
                        return `${30}%`;
                    },
                }

            },
        },
        barWidth: 10, //柱图宽度
        // barGap: '0%',
        // barCategoryGap: '50%',
        data: [14, 267, 339, 2737, 3227, 3834, 3938, 5641, 1437]
    }]
};