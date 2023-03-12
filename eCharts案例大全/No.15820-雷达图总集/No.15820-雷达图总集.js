var plagpath = 'path://M54.227,12.611c-0.338-0.336-0.736-0.505-1.196-0.505c-0.229,0-0.712,0.188-1.446,0.559  c-0.735,0.372-1.515,0.786-2.336,1.248c-0.823,0.459-1.797,0.875-2.921,1.247c-1.123,0.371-2.163,0.559-3.12,0.559  c-0.884,0-1.664-0.168-2.336-0.505c-2.229-1.044-4.168-1.823-5.814-2.337c-1.646-0.513-3.416-0.771-5.311-0.771  c-3.272,0-6.999,1.064-11.177,3.188c-0.862,0.43-1.48,0.763-1.88,1.007l-0.397-2.911c0.897-0.779,1.476-1.914,1.476-3.195  c0-2.347-1.902-4.249-4.249-4.249c-2.347,0-4.249,1.902-4.249,4.249c0,1.531,0.818,2.862,2.032,3.61l5.74,42.09  c0.171,1.253,1.243,2.162,2.474,2.162c0.112,0,0.226-0.007,0.341-0.022c1.368-0.188,2.326-1.447,2.139-2.815L19.69,38.303  c4.186-2.077,7.807-3.124,10.853-3.124c1.293,0,2.554,0.193,3.783,0.583c1.23,0.391,2.253,0.815,3.067,1.274  c0.814,0.46,1.775,0.886,2.88,1.274c1.107,0.39,2.2,0.585,3.279,0.585c2.726,0,5.991-1.027,9.796-3.08  c0.478-0.248,0.828-0.492,1.049-0.731c0.221-0.239,0.332-0.579,0.332-1.021V13.806C54.729,13.347,54.562,12.948,54.227,12.611z';
var fjpath = 'path://M1705.06,1318.313v-89.254l-319.9-221.799l0.073-208.063c0.521-84.662-26.629-121.796-63.961-121.491c-37.332-0.305-64.482,36.829-63.961,121.491l0.073,208.063l-319.9,221.799v89.254l330.343-157.288l12.238,241.308l-134.449,92.931l0.531,42.034l175.125-42.917l175.125,42.917l0.531-42.034l-134.449-92.931l12.238-241.308L1705.06,1318.313z';

//中间的
var indicators = [{
    name: '项目一', //指示器名称。
    min: 70,
    max: 95
}, {
    name: '项目二',
    min: 70,
    max: 88
}, {
    name: '项目三',
    min: 70,
    max: 89
}, {
    name: '项目四',
    min: 70,
    max: 97
}, {
    name: '项目五',
    min: 70,
    max: 90
}];
var series = [{
    name: 'red vs green', //系列名称
    type: 'radar',
    symbol: plagpath, //标记的图形。roundRect实心，arrow箭头,rect正方形
    symbolSize: 15, //标记的大小,[10,20] ，width10,height20
    symbolRotate: 50, //标记的旋转角度
    symbolOffset: [0, '50%'],
    label: {
        normal: {
            show: true,
            textStyle: {
                color: '#f00',
            },
            //formatter: '{b}: {c}'
        }
    },
    lineStyle: {
        normal: {
            //线的颜色,支持径向渐变，线性渐变，纹理填充，RGB等
            //线性渐变
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: 'red'
                }, // 0% 处的颜色
                {
                    offset: 1,
                    color: 'blue'
                } // 100% 处的颜色
            ], false),
            width: 2,

        }
    },
    areaStyle: { //区域填充样式
        normal: {
            // 径向渐变，前三个参数分别是圆心 x, y 和半径，取值同线性渐变
            color: new echarts.graphic.RadialGradient(0.5, 0.5, 0.5, [{
                    offset: 0,
                    color: 'pink'
                }, // 0% 处的颜色
                {
                    offset: 1,
                    color: 'green'
                } // 100% 处的颜色
            ], false)
        }
    },
    data: [ //雷达图的数据是多变量（维度）的
        {
            value: [87, 83, 78, 80, 75],
            name: 'red', //数据项名称
            symbol: fjpath, //单个数据标记的图形。
        }, {
            value: [87, 80, 84, 80, 80],
            name: 'green'
        }
    ]
}];
var strarr = [];

option = {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    title: { //标题组件，包含主标题和副标题。
        text: '雷达图',
        left: 'center', //居中
        padding: [10, 20],
        backgroundColor: '#ddd',
        textStyle: {
            color: '#fff',
            fontSize: 29,
            fontWeight: 'bold'
        },
        borderColor: '#ff0',
        borderWidth: 2,
    },
    tooltip: { //提示框组件
        trigger: 'item',
        backgroundColor: 'rgba(0,0,250,0.2)',
        // formatter:function(params){

        // },
        formatter: '{b0}: {c0}<br />{b1}: {c1}'
    },
    radar: {
        center: ['50%', '60%'], //中心（圆心）坐标，数组的第一项是横坐标，第二项是纵坐标。
        radius: '70%', //半经，相对于容器高宽中
        triggerEvent: true, //坐标轴的标签是否响应和触发鼠标事件
        name: { //雷达图每个指示器名称的配置项。
            show: true,
            formatter: function(value, indicator) {
                return value;
            },
            // formatter: '【{value}】',
            textStyle: {
                color: '#000',
                fontWeight: 'bold',
                fontSize: 12
            }
        },
        splitNumber: 4, //指示器轴的分割段数。
        splitArea: { //分隔区域，背景色、
            areaStyle: {
                color: ['#fff', '#ff0', '#f00', '#000']
            }
        },
        splitLine: { // 区域中的分隔线,环状
            lineStyle: {
                color: '#ddd',
                width: 3,
                type: 'dotted'
            }
        },
        axisLabel: { //坐标轴刻度标签
            show: true,
            textStyle: {
                color: '#dd0'
            },
            formatter: function(value, index) {
                if (!strarr[index] == value || strarr[index] == undefined) {
                    strarr.push(value);
                    str = value
                } else {
                    str = " "
                }
                return str;
            }
        },
        axisLine: { //坐标轴轴线的颜色线 
            lineStyle: {
                color: '#ccc',
                width: 2,
                type: 'dashed',
                opacity: 0.5
            }
        },
        indicator: indicators, //雷达图的指示器，用来指定雷达图中的多个变量（维度）
    },
    series: series
};