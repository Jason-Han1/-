function dateFormat(fmt, date) {
    let ret;
    const opt = {
        'Y+': date.getFullYear().toString(), // 年
        'm+': (date.getMonth() + 1).toString(), // 月
        'd+': date.getDate().toString(), // 日
        'H+': date.getHours().toString(), // 时
        'M+': date.getMinutes().toString(), // 分
        'S+': date.getSeconds().toString(), // 秒
        // 有其他格式化字符需求可以继续添加，必须转化成字符串
    };
    for (let k in opt) {
        ret = new RegExp('(' + k + ')').exec(fmt);
        if (ret) {
            fmt = fmt.replace(ret[1], ret[1].length == 1 ? opt[k] : opt[k].padStart(ret[1].length, '0'));
        }
    }
    return fmt;
}
//生成从minNum到maxNum的随机数
function randomNum(minNum, maxNum) {
    switch (arguments.length) {
        case 1:
            return parseInt(Math.random() * minNum + 1, 10);
            break;
        case 2:
            return parseInt(Math.random() * (maxNum - minNum + 1) + minNum, 10);
            break;
        default:
            return 0;
            break;
    }
}
function getHour(hour) {
    var today = new Date();
    var targetday_milliseconds = today.getTime() + 1000 * 60 * 60 * hour;
    today.setTime(targetday_milliseconds);
    var tHour = today.getHours();
    return tHour;
}
var time = [];
for (var i = dateFormat('HH', new Date()); i >= 0; i--) {
    time.push(getHour(-1 * i) + ':00');
}

var real_time = [];
for (var i = dateFormat('HH', new Date()); i >= 0; i--) {
    real_time.push({
        time: getHour(-1 * i),
        value: randomNum(50, 100),
    });
}
var real_time_num = []; //实时人数

for (let index = 0; index < real_time.length; index++) {
    const element = real_time[index];

    real_time_num.push(element.value);
}

option = {
    animationEasing: 'quarticOut',
    animationDelay: function (idx) {
        return 0;
    },
    title: {
        text: '',
        subtext: '',
    },
    tooltip: {
        //提示框组件，鼠标悬浮在图表上，有相应提示框
        show: true,
        trigger: 'axis',
        axisPointer: {
            type: 'shadow', //可选line、shadow、none
        },
    },

    grid: {
        //直角坐标系，图表的位置参数
        left: '5%',
        right: '10%',
        bottom: '5%',
        top: '5%',
        containLabel: true, //grid 区域是否包含坐标轴的刻度标签。
        //这常用于『防止标签溢出』的场景，标签溢出指的是，标签长度动态变化时，可能会溢出容器或者覆盖其他组件。
    },

    xAxis: {
        show: false, //是否显示x轴
        position: 'bottom', //x轴显示在哪 只有top和bottom选项
        offset: 0, //x轴相对默认位置的偏移

        type: 'value', //1.value 数值轴 2.category类目轴 3.time 时间轴 4.log对数轴

        // data:echartData,    //x轴数据放人数
        data: real_time_num,

        axisLine: {
            //坐标轴线的相关设置 不用动 已经默认隐藏
            lineStyle: {
                color: '#a09fa3',
            },
            show: false, //是否显示坐标轴线
            symbol: 'none', //坐标轴的箭头，默认不显示，可选rect、circle、pin、arrow
            //symbolSize:[11,11]  箭头符号的尺寸
        },

        axisTick: {
            //坐标轴的刻度相关设置 不用动 默认隐藏
            show: false, //是否显示
            alignWidthLabel: false, //刻度线和柱子是否对齐
            inside: false, //刻度是否朝内，true为朝外
            length: 5, //刻度线的长度
            //lineStyle样式{ color , width , type , shadowBlur , shadowColor , shadowOffsetX , shadowOffsetY , opacity }
        },

        axisLabel: {
            //刻度标签的设置（刻度下面的文字）
            show: false,
            interval: 0, //刻度标签显示的间隔
            rotate: 0, //刻度标签旋转的角度，在类目轴的类目标签显示不下的时候可以通过旋转防止标签之间重叠。
            margin: 10, //刻度与轴线之间的距离
            //color: "rgba(235, 172, 55, 1)",//标签文字颜色
            width: 10, //文字的宽度
            clickable: false,
            textStyle: {
                //文字样式
                color: '#a09fa3',
                fontFamily: 'Arial, Verdana, sans-serif',
                fontSize: 16,
                fontStyle: 'normal',
                fontWeight: 'normal',
            },
        },
        splitLine: {
            //每根柱子的分隔线，默认不显示
            show: false,
            onGap: null,
            lineStyle: {
                color: '#a09fa3',
                type: 'solid',
                shadowColor: 'rgba(0,0,0,0)',
                shadowBlur: 5,
                shadowOffsetX: 3,
                shadowOffsetY: 3,
            },
        },
    },

    yAxis: {
        name: '',
        type: 'category',
        data: time, //////纵坐标放时间
        nameTextStyle: {
            fontSize: 16,
        },
        axisLine: {
            //纵坐标轴线 不显示
            lineStyle: {
                color: '#a09fa3',
            },
            show: false,
        },
        axisTick: {
            //纵坐标轴的刻度 不显示
            show: false,
        },
        axisLabel: {
            //纵坐标刻度标签文字
            show: true,
            interval: 'auto',
            rotate: 0,
            margin: 8,
            clickable: false,
            // formatter: '{value}',
            textStyle: {
                color: 'rgb(0,182,236)',
                fontFamily: 'Arial, Verdana, sans-serif',
                fontSize: 16,
                fontStyle: 'normal',
                fontWeight: 'normal',
            },
        },
        // splitNumber:6, //坐标轴分隔的段数，这只是个预估值，实际显示会以具体数据为准，可增加
        splitLine: {
            show: false,
            onGap: null,
            lineStyle: {
                color: '#a09fa3',
                type: 'solid',
                shadowColor: 'rgba(0,0,0,0)',
                shadowBlur: 5,
                shadowOffsetX: 3,
                shadowOffsetY: 3,
            },
        },
    },

    series: [
        //这里放图表的数据
        {
            name: '人数',
            type: 'bar', //图表类型
            // data:echartData, //图表具体数据，这里通过echartData获取
            data: real_time_num,
            itemStyle: {
                //图表样式
                normal: {
                    color: function (params) {
                        console.log(params);
                        var data = real_time_num;
                        data.sort(function (a, b) {
                            return a - b;
                        });
                        data.reverse();
                        var statusIndex = 0;
                        data.forEach(function (event, index) {
                            if (event == params.data) {
                                statusIndex = index;
                            }
                        });
                       
                        var colorList = [
                            'rgba(223,65,56,1)',
                            'rgba(229,115,63,1)',
                            'rgba(240,189,108,1)',
                            'rgba(237,214,102,1)',
                            'rgba(77,168,222,1)',
                            'rgba(25,168,164,1)',
                        ];
                        var colorList2 = [
                            'rgba(223,65,56,0.2)',
                            'rgba(229,115,63,0.2)',
                            'rgba(240,189,108,0.2)',
                            'rgba(237,214,102,0.2)',
                            'rgba(77,168,222,0.2)',
                            'rgba(25,168,164,0.2)',
                        ];
                        var color =  new echarts.graphic.LinearGradient(1, 0, 0, 0, [
                            {
                                offset: 0,
                                color: colorList[statusIndex % 6],
                            },
                            {
                                offset: 1,
                                color: colorList2[statusIndex% 6],
                            },
                        ])
                        return color; //大概最新的柱子颜色始终一样的 不太理解
                    },
                    label: {
                        //柱状图显示数字
                        show: true, //开启显示
                        position: 'right', //在上方显示
                        textStyle: {
                            //数值样式
                            color: 'white',
                            fontSize: 15,
                        },
                    },
                    borderWidth: 2,
                    barBorderRadius: 15,
                },
            },
            barWidth: 10, //柱子宽度，根据不同屏幕判断柱子大小不同
            barMaxWidth: 30,
            animationEasing: 'quarticOut', //动画
            animationDelay: function (idx) {
                return 0;
            },
        },
    ],
};
