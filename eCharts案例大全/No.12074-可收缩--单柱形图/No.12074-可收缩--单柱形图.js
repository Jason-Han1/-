option = {
    backgroundColor: '#FFF',
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow'
        }
    },
    legend: {
        show:false,
        data: ['接入率'],
        align: 'right',
        right: 10,
        textStyle: {
            color: "#fff"
        },
        itemWidth: 10,
        itemHeight: 10,
        itemGap: 35
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis: [{
        type: 'category',
        data: ['喀什市',
            '疏附县',
            '疏勒县',
            '英吉沙县',
            '泽普县',
            '岳普湖县',
            '巴楚县',
            '伽师县',
            '叶城县',
            '莎车县 ',
        ],
        axisLine: {
            show: true,
            lineStyle: {
                color: "#8EB5C6",
                width: 1,
                type: "solid"
            }
        },
        axisTick: {
            show: false,
        },
        axisLabel: {
            show: true,
            textStyle: {
                color: "#666666",
            },
            formatter:function(value){
                if(value != null && value != undefined){
                    var valueLength = value.length;
                    if(valueLength > 5){
                        value = value.substring(0,5) + "...";
                    }
                }
                return value;
            }
        },
    }],
    yAxis: [{
        type: 'value',
        axisLabel: {
            textStyle: {
                color: "#666666"
            },
        //formatter: '{value} %'
        },
        axisTick: {
            show: true,
            lineStyle:{
                color:'#8EB5C6',
                width:1,
                type:"solid"
            }
        },
        axisLine: {
            show: true,
            lineStyle: {
                color: "#8EB5C6",
                width: 1,
                type: "solid"
            },
        },
        splitLine: {
            show:false,
            lineStyle: {
                color: "#063374",
            }
        }
    }],
    dataZoom: [ //给x轴设置滚动条
        {
            start: 0, //默认为0
            end: 100 - 1500 / 31, //默认为100
            type: 'slider',
            show: true,
            orient:"horizontal",
            xAxisIndex: [0],
            handleSize: 0, //滑动条的 左右2个滑动条的大小
            height: 12, //组件高度
            left: 50, //左边的距离
            right: 40, //右边的距离
            bottom: 0, //右边的距离
            handleColor: '#99ADC7', //h滑动图标的颜色
            handleStyle: {
                borderColor: "#99ADC7",
                borderWidth: "0",
                shadowBlur: 0,
                background: "#FFF",
                shadowColor: "#ddd",
            },
            fillerColor: '#99ADC7',//选中范围的填充颜色
            borderColor: "#DBDBDB",//边框颜色
            backgroundColor: '#FFF', //两边未选中的滑动条区域的颜色
            showDataShadow: false, //是否显示数据阴影 默认auto
            showDetail: false, //即拖拽时候是否显示详细数值信息 默认true
            handleIcon: 'M-292,322.2c-3.2,0-6.4-0.6-9.3-1.9c-2.9-1.2-5.4-2.9-7.6-5.1s-3.9-4.8-5.1-7.6c-1.3-3-1.9-6.1-1.9-9.3c0-3.2,0.6-6.4,1.9-9.3c1.2-2.9,2.9-5.4,5.1-7.6s4.8-3.9,7.6-5.1c3-1.3,6.1-1.9,9.3-1.9c3.2,0,6.4,0.6,9.3,1.9c2.9,1.2,5.4,2.9,7.6,5.1s3.9,4.8,5.1,7.6c1.3,3,1.9,6.1,1.9,9.3c0,3.2-0.6,6.4-1.9,9.3c-1.2,2.9-2.9,5.4-5.1,7.6s-4.8,3.9-7.6,5.1C-285.6,321.5-288.8,322.2-292,322.2z',
            filterMode: 'filter',
        },
        //下面这个属性是里面拖到
        {
            type: 'inside',
            show: true,
            xAxisIndex: [0],
            start: 0, //默认为1
            end: 100 - 1500 / 31, //默认为100
        },
    ],
    series: [{
        name: '接入率',
        type: 'bar',
        data: [20, 50, 80, 58, 83, 68, 57, 80, 42, 66],
        barWidth: 10, //柱子宽度
        barGap: 1, //柱子之间间距
        itemStyle: {
            normal: {
                barBorderRadius: [30, 30, 0, 0],
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: '#00D1C2'
                }, {
                    offset: 1,
                    color: '#00BFE8'
                }]),
                opacity: 1,
            }
        }
    }]
};