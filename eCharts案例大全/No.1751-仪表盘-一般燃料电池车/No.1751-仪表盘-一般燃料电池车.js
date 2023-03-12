//由于第一次新建该demo时没经验，允许其他用户修改脚本
//所以还希望各位小哥哥小姐姐在对此代码修改查看时不要点保存呀
//因为保存会覆盖我的版本呢
//我也会继续分享自己实现的图表
//感谢看见的小伙伴，大家共同进步！
option = {
    backgroundColor: '#000',
    title: [
        {
            // text: '一般燃料电池车',
            text: '特殊燃料电池车',
            bottom: 350,
            x: 'center',
            borderColor: '#fff',
            borderWidth: 1,
            borderRadius: 15,
            padding: [7, 14],
            textStyle: {
                fontWeight: 'normal',
                fontSize: 20,
                color: '#fff',
            },
        },
    ],
    angleAxis: {
        show: false,
        max: (100 * 360) / 270, //-45度到225度，二者偏移值是270度除360度
        type: 'value',
        startAngle: 225, //极坐标初始角度
        splitLine: {
            show: false,
        },
    },
    barMaxWidth: 14, //圆环宽度
    radiusAxis: {
        show: false,
        type: 'category',
    },
    //圆环位置和大小
    polar: {
        center: ['50%', '50%'],
        radius: '180',
    },
    series: [
        {
            type: 'bar',
            data: [
                {
                    //上层圆环，显示数据
                    value: 100,
                    itemStyle: {
                        normal: {
                            color:'#FCC841',
                            areaColor: '#FCC841',
                            borderWidth: 4, //设置外层边框
                            // borderColor: '#9ffcff',
                            shadowColor: '#FCC841',
                            shadowBlur: 10,
                        },
                    },
                },
            ],
            barGap: '-100%', //柱间距离,上下两层圆环重合
            coordinateSystem: 'polar',
            roundCap: true, //顶端圆角从 v4.5.0 开始支持
            z: 2, //圆环层级，同zindex
        },
        {
            //下层圆环，显示最大值
            type: 'bar',
            data: [
                {
                    value: 100,
                    itemStyle: {
                        color: '#80B8FF',
                    },
                },
            ],
            barGap: '-100%',
            coordinateSystem: 'polar',
            roundCap: true,
            z: 1,
        },
        //仪表盘
        {
            name: 'AQI',
            type: 'gauge',
            startAngle: 225, //起始角度，同极坐标
            endAngle: -45, //终止角度，同极坐标
            axisLine: {
                show: false,
            },
            splitLine: {
                show: false,
            },
            axisTick: {
                show: false,
            },
            axisLabel: {
                show: false,
            },
            splitLabel: {
                show: false,
            },
            pointer: {
                show: false,
            },
            title: {
                offsetCenter: [-20, -10],
                color: '#FCC841',
                fontSize: 38,
                fontWeight: 500,
                rich: {
                    a: {
                        fontWeight: 'normal',
                        fontSize: 20,
                        color: '#FFF',
                        padding: [0, 0, 0, 0],
                    },
                },
                padding: [0, 0, 0, 40],
            },
            /**
                detail: {
                    formatter: function (e) {
                        return '90%';
                    },
                    color: '#fff',
                    fontSize: 16,
                    offsetCenter: [40, -15],
                    backgroundColor: '#FCC841',
                    borderRadius: 8,
                    padding: [4, 4],
                },**/
            detail: {},
            data: [
                {
                    value: 100,
                    // name: 310 + '公里\n' + '{a|' + '要求：300公里' + '}',
                    name: 220 + '公里\n' + '{a|' + '要求：200公里' + '}',
                },
            ],
        },
    ],
};
