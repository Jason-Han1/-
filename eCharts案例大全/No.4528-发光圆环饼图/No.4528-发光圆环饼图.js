var linew = 1;
var linel1 = 40;
var linl2 = 35;
var outr = 145;
var inr = 135;
var size = 20;
var numberdata = ['17', '20', '13', '16', '20', '15'];
var titledata = ['新料未添加、资料程式未同步', '错料', '站别错误', '网络异常', '进系统', '其他'];
var percents = []; //一个空数组用来保存每个数组百分比
var total = 0;
var percent = 0;
//计算总和
for (var i = 0; i < numberdata.length; i++) {
    total += Number(numberdata[i]);
}

//标题显示格式
let func = (params) => {
    let percent = ((params.value / total) * 100).toFixed(1);
    let name = params.name.replace(/\n/g, '');
    let value = params.value;
    if (params.name !== '') {
        return name + ':' + value + '项' + '\n{white|' + percent + '%}';
    } else {
        return '';
    }
};

let placeHolderStyle = {
    normal: {
        label: {
            show: false,
        },
        labelLine: {
            show: false,
        },
        color: 'rgba(0, 0, 0, 0)',
        borderColor: 'rgba(0, 0, 0, 0)',
        borderWidth: 0,
    },
};

let rich = {
    //富文本格式
    white: {
        fontSize: size, //改变百分数的数据
        align: 'center',
        padding: [3, 0],
    },
};

var data = [];
let color = ['#ff4343', '#f69846', '#f6d54a', '#58FAAC', '#45dbf7', '#4777f5', '#5045f6', '#ad46f3', '#f845f1'];

for (var i = 0; i < numberdata.length; i++) {
    data.push(
        {
            value: numberdata[i],
            name: titledata[i],
            itemStyle: {
                normal: {
                    borderWidth: 5,
                    shadowBlur: 20,
                    borderColor: color[i],
                    shadowColor: color[i],
                    color: color[i],
                },
            },
        },
        {
            value: total / 30,
            name: '',
            itemStyle: placeHolderStyle,
        }
    );
}

var seriesObj = [
    {
        name: '',
        type: 'pie',
        clockWise: false,
        startAngle: '90',
        center: ['45%', '50%'], //此处调整圆环的位置
        radius: [outr, inr], //此处可以调整圆环的大小
        hoverAnimation: false,
        itemStyle: {
            normal: {
                label: {
                    show: true,
                    position: 'outside',
                    formatter: func,
                    rich: rich,
                    fontSize: size, //此处修改字体大小
                },
                labelLine: {
                    length: linel1, //引导线的长度
                    length2: linl2,
                    show: true,
                    color: '#00ffff',
                    lineStyle: {
                        width: linew, //引导线的宽度
                    },
                },
            },
        },
        data: data,
        animationType: 'scale',
        animationEasing: 'elasticOut',
        animationDelay: function (idx) {
            return idx * 50;
        },
    },
    {
        name: '',
        type: 'pie',
        center: ['45%', '50%'],
        radius: ['49%', '49%'],
        itemStyle: {
            color: 'transparant',
        },
        startAngle: '90',
        data: [
            {
                value: total,
                name: '',
                label: {
                    normal: {
                        show: true,
                        formatter: '{b|第一季度SWDL异常统计}\n\n{b|共}{c|{c}} {b|项}',
                        rich: {
                            c: {
                                color: 'rgb(98,137,169)',
                                fontSize: size,
                                fontWeight: 'bold',
                                lineHeight: 5,
                            },
                            b: {
                                color: 'rgb(98,137,169)',
                                fontSize: size,
                                lineHeight: 5,
                            },
                        },
                        textStyle: {
                            fontSize: 28,
                            fontWeight: 'bold',
                        },
                        position: 'center',
                    },
                },
            },
        ],
    },
];

option = {
    backgroundColor: '#000000',
    tooltip: {
        show: false,
    },
    legend: {
        show: true,

        right: 20,
        top: '2%',
        textStyle: {
            color: '#fff',
            fontSize: size,
        },
        itemWidth: 20,
        itemHeight: 15,
        itemGap: 10,
    },
    toolbox: {
        show: false,
    },
    series: seriesObj,
};
