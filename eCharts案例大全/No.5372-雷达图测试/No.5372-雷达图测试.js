var loaddata = [99, 98, 100, 99, 98, 100, 99, 98];
option = {
    backgroundColor: 'rgba(0,0,0,.5)',
    title: {
        text: '产品合格率厚浆出厂'
    },
    legend: {
        orient:'vertical',
        icon: 'squareRatio', //图例形状
        data: ['a','d','c'],
        bottom:'35%',
        right:'5%',
        itemWidth: 14, // 图例标记的图形宽度。[ default: 25 ]
        itemHeight: 14, // 图例标记的图形高度。[ default: 14 ]
        itemGap: 21, // 图例每项之间的间隔。[ default: 10 ]横向布局时为水平间隔，纵向布局时为纵向间隔。
        textStyle: {
            fontSize: 14,
            color: '#fff',
        },
    },
    radar: {
        radius: '60%',//占整个屏幕百分比
        center: ['50%', '52%'],//中心位于屏幕左上角偏移量
        startAngle: 90,//旋转角度
        triggerEvent: true,
        name: {
            textStyle: {
                color: '#fff',
                fontSize: '20',
                borderRadius: 3,
                padding: [20, 5]
            }
        },
        nameGap: '3',
        indicator: [
            {
                name: '03月',
                min: 90,
                max: 101
            },
            {
                name: '04月',
                min: 90, //起始值
                max: 101 //终止值
            },
            {
                name: '05月',
                min: 90,
                max: 101
            },
            {
                name: '06月',
                min: 90,
                max: 101
            },
            {
                name: '07月',
                min: 90,
                max: 101
            },
            {
                name: '08月',
                min: 90,
                max: 101
            },
            {
                name: '09月',
                min: 90,
                max: 101
            },
            {
                name: '10月',
                min: 90,
                max: 101
            },
        ],
        splitArea: {
            areaStyle: {
                color: ['rgba(0,255,255, 0.1)', 'rgba(0,255,255, 0.2)', 'rgba(0,255,255, 0.3)', 'rgba(0,255,255, 0.4)', 'rgba(0,255,255, 0.5)', 'rgba(0,255,255, 0.6)', ].reverse(),
                shadowColor: 'rgba(0, 0, 0, 1)',
                shadowBlur: 30,
                shadowOffsetX: 10,
                shadowOffsetY: 10
            }
        },
        axisLine: {
            lineStyle: {
                color: 'rgba(0,206,209, 0.9)'
            }
        },
        splitLine: {
            lineStyle: {
                width: 1,
                color: ['rgba(0,206,209, 0.1)', 'rgba(0,206,209, 0.2)', 'rgba(0,206,209, 0.3)', 'rgba(0,206,209, 0.4)', 'rgba(0,206,209, 0.5)', 'rgba(0,206,209, 0.6)'].reverse()
            }
        }
    },
    series: [{
        name: '厚浆',
        type: 'radar', //雷达图
        symbol: 'circle',
        symbolSize: 12,
        itemStyle: {
            color: 'rgba(255,237,145,0.8)',
            borderColor: 'rgba(255,237,145,0.2)',
            borderWidth: 20,
        },
        lineStyle: {
            color: 'rgba(255,237,145, 0.6)',
            width: 2
        },
        label: {
            show: true,
        },
        areaStyle: {
            normal: {
                width: 1,
                opacity: 0.3,
                shadowColor: 'rgba(0, 0, 0, .5)',
                shadowBlur: 3,//虚影模糊度
                shadowOffsetX: 15,//虚影横向距离
                shadowOffsetY:15,//虚影纵向距离
            },
            color: 'rgba(255,237,145, 0.5)'
        },
        data: [
            loaddata
        ]
    }]
};