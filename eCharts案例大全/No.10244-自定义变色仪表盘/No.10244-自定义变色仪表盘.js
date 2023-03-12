option = {
    tooltip: {},
    grid: {
        left: '0%',
        right: '0%',
        bottom: '0%',
        top: '0%',
        containLabel: true,
        borderWidth: '0'
    },
    series: [{
        name: '业务指标',
        type: 'gauge',
        splitNumber: 13, // 分割段数，默认为5
        z: 8,
        min: 0,
        max: 130,
        axisLine: { // 坐标轴线
            lineStyle: { // 属性lineStyle控制线条样式
                color: [
                    [1.1, '#11ffbd'],
                    [0.462, '#19affb'],
                    [0.692, '#ff8008'],
                    [0.923, '#ff0000'],
                    ['1', '#ca002a']
                ],
                width: 0
            }
        },
        axisTick: { // 坐标轴小标记
            splitNumber: 5, // 每份split细分多少段
            length: 10, // 属性length控制线长
            lineStyle: { // 属性lineStyle控制线条样式
                color: 'auto',
                width: 2,
            }
        },
        axisLabel: { // 坐标轴文本标签，详见axis.axisLabel
            formatter: function(v) {
                switch (v + '') {
                    case '0':
                        return '0%';
                    case '30':
                        return '30%';
                    case '60':
                        return '60%';
                    case '90':
                        return '90%';
                    case '120':
                        return '120%';
                    case '130':
                        return '严重超标';

                }
            },
            textStyle: { // 其余属性默认使用全局文本样式，详见TEXTSTYLE
                color: 'auto'
            }
        },
        splitLine: { // 分隔线
            show: true, // 默认显示，属性show控制显示与否
            length: 20, // 属性length控制线长
            lineStyle: { // 属性lineStyle（详见lineStyle）控制线条样式
                color: 'auto',
                width: 2,
            }
        },
        pointer: {
            width: 10
        },
        title: {
            show: true,
            offsetCenter: [0, '-40%'], // x, y，单位px
            textStyle: { // 其余属性默认使用全局文本样式，详见TEXTSTYLE
                fontWeight: 'bolder'
            }
        },
        detail: { //'{value}%'
            formatter: function(value) {

                var zhuangtai = " ";

                if (value <= 30) {
                    zhuangtai = "达标";
                } else if (value > 30 && value <= 60) {
                    zhuangtai = "良好";
                } else if (value > 60 && value <= 90) {
                    zhuangtai = "一般";
                } else if (value > 90 && value <= 120) {
                    zhuangtai = "超标";
                } else if (value > 120) {
                    zhuangtai = "严重超标";
                }

                // alert(zhuangtai)

                value = zhuangtai + '\n' + value + "%";
                return value;
            },
            textStyle: { // 其余属性默认使用全局文本样式，详见TEXTSTYLE
                color: 'auto',
                fontWeight: 'bolder',
                lineHeight: 25,
                fontSize: 16,
            }
        },
        //  达标、良好、一般、超标、严重超标
        data: [{
            value: 65
        }]
    }]
};