var getmax = 100;
var getvalue = 45;
option = {
    title: [
        {  
            text: getvalue + '%',
            subtext:'有分值绩效点占比',
            x: 'center',
            y: 'center',
            textStyle: {
                fontWeight: 'normal',
                color: '#3BA1FF',
                fontSize: 14,
            },
            itemGap: 300
        },
    ],

    angleAxis: {
        show: false,

        // max: (getmax * 360) / 270, //-45度到225度，二者偏移值是270度除360度
        type: 'value',
        startAngle: 90, //极坐标初始角度
        splitLine: {
            show: false,
        },
    },

    barMaxWidth: 20, //圆环宽度

    radiusAxis: {
        show: false,

        type: 'category',
    },

    //圆环位置和大小

    polar: {
        center: ['50%', '50%'],

        radius: '120%',
    },

    series: [
        {
            type: 'bar',

            data: [
                {
                    //上层圆环，显示数据

                    value: getvalue,

                    itemStyle: {
                        color: '#1598FF',
                    },
                },
            ],

            barGap: '-100%', //柱间距离,上下两层圆环重合

            coordinateSystem: 'polar',

            roundCap: true, //顶端圆角

            z: 3, //圆环层级，同zindex
        },

        {
            //下层圆环，显示最大值

            type: 'bar',

            data: [
                {
                    value: getmax,

                    itemStyle: {
                        color: '#1598FF',

                        opacity: 0.2,

                        borderWidth: 0,
                    },
                },
            ],

            barGap: '-100%',

            coordinateSystem: 'polar',

            roundCap: true,

            z: 1,
        },
    ],
};
