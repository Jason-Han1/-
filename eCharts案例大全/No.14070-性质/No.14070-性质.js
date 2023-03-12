var startColor = ['#dd8361', '#47c7ee', '#d9b778', '#4d37e5'];
var endColor = ['#db4b51', '#48d5a9', '#b5cf43', '#8222fe'];
var endData = [];
var data = [{
    "name": "第一次",
    "value": 300
}, {
    "name": "第二次",
    "value": 200
}, {
    "name": "第三次",
    "value": 900
},
 {
    "name": "第四次及以上",
    "value": 500
}]
data.map((item, index) => {
    endData.push({
        value: item.value
    })
});
var allData = data.concat(endData);
 for(let i=0;i<allData.length;i++){
            if(i<data.length){
                allData[i].itemStyle = {
                    normal: {
                        color: {
                            type: 'linear',
                            x: 1,
                            y: 0,
                            x2: 0,
                            y2: 1,
                            colorStops: [{
                                offset: 0, color: endColor[i] // 0% 处的颜色
                            }, {
                                offset: 0.5, color: endColor[i] // 0% 处的颜色
                            }, {
                                offset: 1, color: startColor[i] // 100% 处的颜色
                            }],
                            globalCoord: false // 缺省为 false
                        }
                    }
                };
            }else{
                allData[i].itemStyle= {
                    normal: {
                        color: 'pink',
                        opacity:0,
                    }
                };
                allData[i].label={
                    normal:{
                        show:false
                    }
                }
            }
        }


//数字每三位 加，的
function toThousands(num) {
        var result = '', counter = 0;
        num = (num || 0).toString();
        for (let i = num.length - 1; i >= 0; i--) {
            counter++;
            result = num.charAt(i) + result;
            if (!(counter % 3) && i != 0) {
                result = ',' + result;
            }
        }
        return result;
    };
    
option = {
    backgroundColor:'#021d49',
    tooltip: {
        trigger: 'item',
        formatter: "{a} :<br/>{b}: {c}人"
    },
    title: {
        text: "性质",
        left: '49.5%',
        top: '48%',
        textAlign: 'center',
        textBaseline: 'middle',
        textStyle: {
            fontSize: 16
        }
    },
    series: [
        // 内层圆圈
        {
            name: "性质",
            type: 'pie',
            radius: ['0', '38'],
            center: ['50%', '50%'],
            startAngle: 180,
            // center: ['50%', '100%'],
            z: 5,
            animation: false,
            hoverAnimation: false,
            avoidLabelOverlap: false,
            label: {
                normal: {
                    show: false,
                },
            },
            data: [{
                    value: 10,
                    name: '年龄',
                    itemStyle: {
                        normal: {
                            color: '#d4d4d6',
                            shadowColor: 'rgba(0, 0, 0, 0.6)',
                            shadowBlur: 30,
                        }
                    }
                },
                {
                    value: 10,
                    name: '年龄',
                    itemStyle: {
                        normal: {
                            color: '#d4d4d6',
                            opacity: 0,
                        }
                    }
                },
            ],
            tooltip: {
                show: false
            }
        },
        // 外层圆圈
        {
             name: "性质",
            type: 'pie',
            radius: ['86', '95'],
            center: ['50%', '50%'],
            // center: ['50%', '100%'],
            animation: false,
            z: 3,
            avoidLabelOverlap: false,
            hoverAnimation: false,
            startAngle: 180,
            label: {
                normal: {
                    show: false,
                },
            },
            tooltip: {
                show: false
            },
            data: [{
                    value: 10,
                    name: name,
                    itemStyle: {
                        normal: {
                            color: 'rgba(210, 210, 210, 0.55)',
                            shadowColor: 'rgba(0, 0, 0, 1)',
                            shadowBlur: 100
                        }
                    }
                },
                {
                    value: 10,
                    name: name,
                    itemStyle: {
                        normal: {
                            color: 'rgba(210, 210, 210, 0.55)',
                            opacity: 0,
                        }
                    }
                },
            ]
        },
        // 中间数据层 所传的第三组数据才是真实的数据
        {
             name: "性质",
            type: 'pie',
            radius: ['38', '86'],
            center: ['50%', '50%'],
            hoverAnimation: false,
            // minAngle: 10,
            avoidLabelOverlap: false,
            illShowZeroSum: true,
            startAngle: 180,
            label: {
                normal: {
                    show: true,
                    // 判断6个字以上的份两行 数字过千的有逗号
                    formatter: function(prams) {
                        let ret = ""; //拼接加\n返回的类目项
                        let maxLength = 3; //每项显示文字个数
                        let valLength = prams.name.length; //X轴类目项的文字个数
                        let rowN = Math.round(valLength / maxLength); //类目项需要换行的行数
                        if (rowN > 1) //如果类目项的文字大于3,
                        {
                            for (let i = 0; i < rowN; i++) {
                                let temp = ""; //每次截取的字符串
                                let start = i * maxLength; //开始截取的位置
                                let end = start + maxLength; //结束截取的位置
                                //这里也可以加一个是否是最后一行的判断，但是不加也没有影响，那就不加吧
                                temp = prams.name.substring(start, end) + "\n";
                                ret += temp; //凭借最终的字符串
                            }
                            return '{b|' + ret + '}' + '{c|' + toThousands(prams.value) + '}';
                        } else {
                            return '{b|' + prams.name + '}\n' + '{c|' + toThousands(prams.value) + '}';
                        }
                    },
                    position: 'outside',
                    textStyle: {
                        fontSize: '14',
                    },
                    rich: {
                        b: {
                            color: '#f2f2f2',
                            lineHeight: 15,
                        },
                        c: {
                            color: '#7fe3ff'
                        }
                    }
                },
                emphasis: {
                    show: true,
                }
            },
            labelLine: {
                normal: {
                    show: false,
                    length: 15,
                    length2: 10,
                }
            },
            data: allData
        },
    ]
};