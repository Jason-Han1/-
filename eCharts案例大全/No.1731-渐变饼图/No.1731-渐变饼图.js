
// 格式化百分比
const formatPercent = (num) => {
    if (num.toString().indexOf(".") > -1) {
        let arr = num.toString().split(".");
        let decimalArr = arr[1].split("");
        if (decimalArr.length > 2) {
            return num.toFixed(2);
        } else {
            return num;
        }
    } else {
        return num;
    }
};
let value = 80;
let total = 100;
let color = ['#38F0FF', '#0A7EB8']; //渐变色列表
let point = value; //在线
let handred = total; //全部

option = {
    backgroundColor: '#313131',
    // 标题
    title: {
        text: '{a|' + (formatPercent(point * 100 / handred)) + '}{b|%}\n{c|在线率}',
        x: 'center',
        y: 'center',
        textStyle: {
            rich: {
                a: {
                    color: '#FFFFFF',
                    fontSize: '26',
                    fontFamily: 'OPPOSans-M'
                },
                b: {
                    fontSize: '14',
                    fontFamily: 'OPPOSans-R',
                    color: '#FFFFFF',
                    padding: [0, 0, 7, 2]
                },
                c: {
                    fontSize: '16',
                    fontFamily: 'SourceHanSansCN-Normal',
                    color: '#BDE7FA',
                    padding: [5, 0, 6, 0]
                }
            }
        }
    },
    series: [{
        name: '',
        type: 'pie',
        hoverAnimation: false,
        clockWise: true,
        radius: ['66%', '74%'],
        itemStyle: {
            normal: {
                label: {
                    show: false
                },
                labelLine: {
                    show: false
                }
            }
        },
        data: [{
            value: point,
            name: '占比',
            itemStyle: {
                normal: {
                    color: {
                        // 颜色渐变
                        type: 'linear',
                        x: 0,
                        y: 0.2,
                        x2: 0,
                        y2: 1,
                        colorStops: [{
                                offset: 0,
                                color: color[0] // 0% 处的颜色
                            },
                            {
                                offset: 0.6,
                                color: 'rgba(56, 240, 255, 0.6)' // 60% 处的颜色
                            },
                            {
                                offset: 1,
                                color: color[1] // 100% 处的颜色
                            }
                        ]
                    },
                    label: {
                        show: false
                    },
                    labelLine: {
                        show: false
                    }
                }
            }
        }, {
            // 剩余背景透明
            name: '剩余',
            z: 1,
            value: (handred - point) || 1,
            itemStyle: {
                normal: {
                    color: 'rgba(0, 0, 0, 0)'
                }
            }
        }]
    }]
}