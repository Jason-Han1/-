const data = [//数据的值
                { value: 40, name: '立案' },
                { value: 5, name: '审核未通过' },
                { value: 10, name: '审核中' },
                { value: 20, name: '已处理' },
                { value: 25, name: '撤诉' },
            ]
let placeHolderStyle = {
    normal: {
        label: {
            show: false
        },
        labelLine: {
            show: false
        },
        color: 'rgba(0, 0, 0, 0)',
        borderColor: 'rgba(0, 0, 0, 0)',
        borderWidth: 0
    }
};
const color = ['#02baf4', '#e6ea7c', '#0079ea', '#1ee4ab', '#f1b457']
let list = []
let total = 0
for (let i in data) {
    total += data[i].value
}
// 这步主要是为了让小圆点的颜色和饼状图的块对应，如果圆点的颜色是统一的，只需要把label写在series里面
let setLabel = (data) => {
    let opts = [];
    for (let i = 0; i < data.length; i++) {
        let item = {};
        item.name = data[i].name;
        item.value = data[i].value;
        item.label = {
            normal: {
                //控制引导线上文字颜色和位置,此处a是显示文字区域，b做一个小圆圈在引导线尾部显示
                show: true,
                //a和b来识别不同的文字区域
                formatter: [
                    '{a|  {b}}',
                    '{b|}'
                ].join('\n'), //用\n来换行
                rich: {
                    a: {
                        align: 'center',
                        padding: [0, -80, -15, -80]
                    },
                    b: {
                        height: 5,
                        width: 5,
                        lineHeight: 5,
                        marginBottom: 10,
                        padding: [0, -5],
                        borderRadius: 5,
                        backgroundColor: color[i], // 圆点颜色和饼图块状颜色一致
                    }
                },

            }
        }

        opts.push(item, {
            value: 1,
            name: '_space_',
            itemStyle: placeHolderStyle
        })
    }
    return opts;
}

for (let i in data) {
    list.push({
        value: data[i].value,
        name: data[i].name,
        itemStyle: {
            normal: {
                borderWidth: 5,
                color: color[i]
            }
        }
    }, {
        value: 1,
        name: '_space_',
        itemStyle: placeHolderStyle
    })
}

option = {
            legend: {
                icon: "rect",//形状  类型包括 circle，rect,line，roundRect，triangle，diamond，pin，arrow，none
                itemWidth: 15,  // 设置宽度
                itemHeight: 8, // 设置高度
                itemGap: 10, // 设置间距
                align: "left",
                show: true,
                left: 'right', //位置
                data: ['立案', '审核未通过', '审核中', '已处理', '撤诉'],
                textStyle: {
                    //文字样式
                    color: "#fff",
                    fontSize: "12"
                }

            },
            backgroundColor: 'white',
            series: [
                {
                    name: '半径模式',
                    type: 'pie',//这个type决定了你画的图的类型是饼图还是柱状图等
                    radius: [50, 80],//饼图的内环和外环的半径
                    center: ['50%', '50%'],//玫瑰图在画布上的相对位置
                    color: color,
                    startAngle: 180,
		            avoidLabelOverlap: true,
                    itemStyle: {
                        normal: {
                            borderWidth: 1,
                            // borderColor: 'raba(0,0,0,0)',
                            label: {
                                show: false,//数据标签显示
                            },
                            labelLine: {
                                show: false,//数据标签引导线
                            }
                        }
                    },
                    data: list,
                    tooltip: {
                        formatter: function(params) {
                        if (params.data.name === '_space_'){
                            return
                        } else {
                            return params.data.name+ ' : ' + params.data.value
                        }
                    }
                    }
                },
                {
                    name: '半径模式',
                    type: 'pie',//这个type决定了你画的图的类型是饼图还是柱状图等
                    radius: [100, 100],//饼图的内环和外环的半径
                    center: ['50%', '50%'],//玫瑰图在画布上的相对位置
                    color: color,
                    startAngle: 180,
		            avoidLabelOverlap: true,
                    label: {
                        show: true,//数据标签显示
                        position: 'outer',
                        textStyle://数据标签的字体配置，与其他组件相同
                        {
                            fontSize: 12,//字号
                            fontWeight: 'normal',//粗细【normal\bold\bolder\lighter】
                            fontFamily: 'Microsoft YaHei',//字体【 'serif'\'monospace'\'Arial'\'Courier New'\'Microsoft YaHei'】
                            color: ''//颜色各异
                        },
                        //formatter: '{b}：{d}%'//a:系列名，就是你上面写的name半径模型，b：数据名，就是rose1，c：数据值，d百分比
                        // formatter: ' {b} \n\n',
                        // padding: [0, -55],
                        // alignTo: 'labelLine'
                    },
                    labelLine: {
                        show: true,//数据标签引导线
                        length: 15,
                        length2: 60,
                        align: 'right',
                        lineStyle: {
                            width: 1,
                            type: 'solid'
                        }
                    },
                    itemStyle: {
                      opacity: 0
                    },
                    data: setLabel(data),
                    tooltip: {
                        formatter: function(params) {
                        if (params.data.name === '_space_'){
                            return
                        } else {
                            return params.data.name+ ' : ' + params.data.value
                        }
                    }
                    }
                },
                {
                    name: '外边框',
                    type: 'pie',
                    clockWise: false, //顺时加载
                    hoverAnimation: false, //鼠标移入变大
                    center: ['50%', '50%'],
                    radius: [100, 100],
                    label: {
                        normal: {
                            show: false
                        }
                    },
                    data: [{
                        value: 9,
                        name: '',
                        itemStyle: {
                            normal: {
                                borderWidth: 1,
                                borderType: 'dashed',
                                borderColor: '#2985e0'
                            }
                        },
                        tooltip: {
                            show: false
                        }
                    }]
                },
            ],
            tooltip: {
                show: true,
                trigger: 'item', // 触发类型，默认数据触发，【item\axis】
                formatter: '{b} : {c}',//与数据标签相同
                showDelay: 20,  // 显示延迟，添加显示延迟可以避免频繁切换，单位ms
                hideDelay: 100,// 隐藏延迟，单位ms
                transitionDuration : 0.4,  // 动画变换时间，单位s
                //backgroundColor: 'rgba(0,0,0,0.7)',  // 提示背景颜色，最后一个参数是透明度
                // borderColor: '#333',            // 提示边框颜色
                // borderRadius: 4,                // 提示边框圆角，单位px，默认为4
                //borderWidth: 0,                // 提示边框线宽，单位px，默认为0（无边框）
                //padding: 5,                   // 提示内边距，单位px，默认各方向内边距为5，
                // 接受数组分别设定上右下左边距，同css
                // axisPointer : {                 // 坐标轴指示器，坐标轴触发有效
                //type : 'line',         // 默认为直线，可选为：'line' | 'shadow'
                // lineStyle : {          // 直线指示器样式设置
                // color: '#48b',
                // width: 2,
                //type: 'solid'
                // },
                // shadowStyle : {              // 阴影指示器样式设置
                //     width: 'auto',         // 阴影大小
                // color: 'rgba(150,150,150,0.3)'  // 阴影颜色
                //}
                //  },
                //textStyle: {
                //color: '#fff'
                // }
            }
        };
