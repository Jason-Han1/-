let placeHolderStyle = { //设置透明伞形
    normal: {
        color: 'transparent',

        label: {
            show: false
        },
        labelLine: {
            show: false
        }
    },

};
let dataPie = [{
        name: '机柜',
        value: 60
    },
    {
        name: '服务器',
        value: 40
    },
    {
        name: '路由器',
        value: 45
    },
    {
        name: '交换机',
        value: 55
    },
    {
        name: 'PDU',
        value: 35
    },
];
let dataColor = [{
        os1: '#4f91f0',
        os2: '#1955a9'
    },
    {
        os1: '#3e79cd',
        os2: '#4be0ff'
    },
    {
        os1: '#36d7e7',
        os2: '#226c96'
    },
    {
        os1: '#22aae0',
        os2: '#5abae0'
    },
    {
        os1: '#41d7cd',
        os2: '#01abff'
    },
];
let legendData = [],
    seriesData = [],
    total = 0,
    radiusValue = 100;
for (var i = 0; i < dataPie.length; i++) {
    total += dataPie[i].value
    legendData.push(dataPie[i].name);
    console.log(radiusValue - 10 * i - 2 + '%', radiusValue - 10 * i + '%')
    seriesData.push({
        type: 'pie',
        clockWise: false, //饼图的扇区是否是顺时针排布
        radius: [radiusValue - 10 * i - 1 + '%', radiusValue - 10 * i + '%'],
        center: ['35%', '50%'],
        label: {
            normal: {
                show: false //隐藏引导线标识
            }
        },
        hoverAnimation: false, //关闭 hover 在扇区上的放大动画效果
        startAngle: 90, //起始角度
        data: [{
                value: dataPie[i].value,
                name: dataPie[i].name,
                itemStyle: {
                    normal: {
                        borderWidth: 5,
                        borderColor: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                            offset: 0,
                            color: dataColor[i].os1,
                        }, {
                            offset: 1,
                            color: dataColor[i].os2,
                        }]),
                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                            offset: 0,
                            color: dataColor[i].os1
                        }, {
                            offset: 1,
                            color: dataColor[i].os2
                        }])
                    }
                }
            },
            { //透明伞形
                value: 100 - dataPie[i].value,
                tooltip: {
                    show: false
                },
                itemStyle: { //设置透明伞形
                    normal: {
                        color: 'transparent', //伞形颜色
                        label: {
                            show: false
                        },

                    },

                }
            },
        ]
    });


}
option = {
    backgroundColor: '#021228',
    title: {
        text: '设备类型',
        x: '28.5%',
        y: 'center',
        textStyle: {
            fontWeight: 'normal',
            fontSize: 12,
            color: "#419ece",
        }
    },
    grid: {
        left: '5px', // 与容器左侧的距离
        right: '5px', // 与容器右侧的距离
        top: '5px', // 与容器顶部的距离
        bottom: '5px', // 与容器底部的距离
    },
    tooltip: {
        trigger: 'item',
        show: true,
        formatter: "{b} : <br/>{d}%",
        backgroundColor: 'rgba(0,0,0,0.7)', // 背景
        padding: [8, 10], //内边距
        extraCssText: 'box-shadow: 0 0 3px rgba(255, 255, 255, 0.4);', //添加阴影
    },
    legend: {
        type: 'scroll',
        orient: 'vertical', //竖排
        icon: 'circle', //形状
        right: '50px',
        top: '10px',
        itemGap: 20,
        pageIconColor: "#00f6ff",
        pageTextStyle:{
            color:"#fff"
        },
        textStyle: {
            color: '#419ece', // color: '#fft' 文字颜色随图例颜色
            // align: 'right',
            rich: {
                yellow: {
                    color: '#00b5f3',
                    fontWeight: "bold"

                },
                blue: {
                    color: '#4be1ff',
                    align: 'right',

                },
            }
        },
        formatter: function(name) {

            let target, percent;
            for (let i = 0; i < dataPie.length; i++) {
                if (dataPie[i].name === name) {
                    target = dataPie[i].value;
                    percent = Math.round(((target / total) * 100));
                }
            }
            let arr = [' {blue|' + name + '}', percent + '% ' + ' {yellow|' + target + '}', ];
            return arr

        },
        data: legendData,

    },
    series: seriesData
};