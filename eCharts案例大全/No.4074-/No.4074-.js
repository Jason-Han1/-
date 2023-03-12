var getname = ['东北师范大学', '北京师范大学', '华东师范大学', '华中师范大学', '陕西师范大学', '西南大学'];
var getvalue = [318, 159, 219, 157, 134, 224];
var getvalue1 = [208, 119, 219, 136, 214, 54];
var getvalue2 = [218, 219, 179, 317, 303, 124];
var getvalue3 = [188, 324, 199, 187, 174, 241];
var getvalue4 = [168, 155, 272, 157, 194, 224];
var getvaluesum=[];
for(var i=0;i<getname.length;i++){
    getvaluesum[i]=getvalue[i]+getvalue1[i]+getvalue2[i]+getvalue3[i]+getvalue4[i];
}

var maxnum = Math.max.apply(null, getvaluesum);
var maxlen = Math.pow(10, String(Math.ceil(maxnum)).length - 2);
if (maxnum >= 5) {
    var max = Math.ceil(maxnum / (.95 * maxlen)) * maxlen;
} else {
    var max = 5;
}

option = {
    grid: {
        top: '33',
        right: '15',
        left: '50',
        bottom: '55'
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'none'
        },
        formatter: '{b0}</br>{a0}本科人数：{c0}人</br>{a1}本科人数：{c1}人</br>{a2}本科人数：{c2}人</br>{a3}本科人数：{c3}人</br>{a4}本科人数：{c4}人'
    },
    legend: {
        type: "scroll",
        right: '10',
        top: '0',
        data: ['2020级', '2019级', '2018级', '2017级', '2016级'],
        itemGap: 25,
        itemWidth: 16,
        itemHeight: 16,
        textStyle: {
            fontSize: '13',
            color: '#666666',
        },

    },
    xAxis: [{
        data: getname,
        axisLabel: {
            //interval: 0,  
            formatter: function(value) {
                var ret = ""; //拼接加\n返回的类目项  
                var maxLength = 5; //每项显示文字个数  
                var valLength = value.length; //X轴类目项的文字个数  
                var rowN = Math.ceil(valLength / maxLength); //类目项需要换行的行数  
                if (rowN > 1) //如果类目项的文字大于5,
                {
                    for (var i = 0; i < rowN; i++) {
                        var temp = ""; //每次截取的字符串  
                        var start = i * maxLength; //开始截取的位置  
                        var end = start + maxLength; //结束截取的位置  
                        //这里也可以加一个是否是最后一行的判断，但是不加也没有影响，那就不加吧  
                        temp = value.substring(start, end) + "\n";
                        ret += temp; //凭借最终的字符串  
                    }
                    return ret;
                } else {
                    return value;
                }
            },
            margin: 10,
            color: '#666666',
            textStyle: {
                fontSize: 13,
                fontWeight:400
            },
        },
        axisLine: {
            lineStyle: {
                color: '#B0C5DB',
            }
        },
        axisTick: {
            show: false
        },
    }],
    yAxis: [{
        min: 0,
        max: max, // 计算最大值
        interval: max / 5, //  平均分为5份
        splitNumber: 5,
        name: '单位：人',
        nameTextStyle: {
            color: '#999999',
            fontSize: 13,
            padding: [0, 0, 0, 65]
        },
        axisLabel: {
            color: '#666666',
            textStyle: {
                fontSize: 13
            },
        },
        axisLine: {
            show: false
        },
        axisTick: {
            show: false
        },
        splitLine: {
            lineStyle: {
                color: '#CCDBEB',
                type: 'dashed',
                opacity: 0.5
            }
        }
    }],
    series: [{
        name: '2020级',
        type: 'bar',
        data: getvalue,
        stack: '各专业本科生年级分布',
        barWidth: '20px',
        itemStyle: {
            normal: {
                color: {
                    x: 0,
                    y: 0,
                    x2: 0,
                    y2: 1,
                    colorStops: [{
                        offset: 0,
                        color: '#63B4FF' // 0% 处的颜色
                    }, {
                        offset: 1,
                        color: '#1890FF' // 100% 处的颜色
                    }],
                },
                barBorderRadius: [0, 0, 0, 0],
                label: {
                    show: true,
                    position: 'top',
                    offset: [15, 20],
                    align:'left',
                    formatter: function(params) {
                        return params.value;
                    },
                    textStyle: {
                        fontSize: 12,
                        color: '#666666',

                    },
                }
            }
        },
    }, {
        name: '2019级',
        type: 'bar',
        data: getvalue1,
        stack: '各专业本科生年级分布',
        barWidth: '20px',
        itemStyle: {
            normal: {
                color: {
                    x: 0,
                    y: 0,
                    x2: 0,
                    y2: 1,
                    colorStops: [{
                        offset: 0,
                        color: '#FFD19A' // 0% 处的颜色
                    }, {
                        offset: 1,
                        color: '#FFD283' // 100% 处的颜色
                    }],
                },
                barBorderRadius: [0, 0, 0, 0],
                label: {
                    show: true,
                    position: 'top',
                    offset: [15, 20],
                    align:'left',
                    formatter: function(params) {
                        return params.value;
                    },
                    textStyle: {
                        fontSize: 12,
                        color: '#666666',

                    },
                }
            }
        },
    }, {
        name: '2018级',
        type: 'bar',
        data: getvalue2,
        stack: '各专业本科生年级分布',
        barWidth: '20px',
        itemStyle: {
            normal: {
                color: {
                    x: 0,
                    y: 0,
                    x2: 0,
                    y2: 1,
                    colorStops: [{
                        offset: 0,
                        color: '#64F0BC' // 0% 处的颜色
                    }, {
                        offset: 1,
                        color: '#47D095' // 100% 处的颜色
                    }],
                },
                barBorderRadius: [0, 0, 0, 0],
                label: {
                    show: true,
                    position: 'top',
                    offset: [15, 20],
                    align:'left',
                    formatter: function(params) {
                        return params.value;
                    },
                    textStyle: {
                        fontSize: 12,
                        color: '#666666',

                    },
                }
            }
        },
    }, {
        name: '2017级',
        type: 'bar',
        data: getvalue3,
        stack: '各专业本科生年级分布',
        barWidth: '20px',
        itemStyle: {
            normal: {
                color: {
                    x: 0,
                    y: 0,
                    x2: 0,
                    y2: 1,
                    colorStops: [{
                        offset: 0,
                        color: '#BDBCFF' // 0% 处的颜色
                    }, {
                        offset: 1,
                        color: '#9C9BFF' // 100% 处的颜色
                    }],
                },
                barBorderRadius: [0, 0, 0, 0],
                label: {
                    show: true,
                    position: 'top',
                    offset: [15, 20],
                    align:'left',
                    formatter: function(params) {
                        return params.value;
                    },
                    textStyle: {
                        fontSize: 12,
                        color: '#666666',

                    },
                }
            }
        },
    }, {
        name: '2016级',
        type: 'bar',
        data: getvalue4,
        barWidth: '20px',
        stack: '各专业本科生年级分布',
        itemStyle: {
            normal: {
                color: {
                    x: 0,
                    y: 0,
                    x2: 0,
                    y2: 1,
                    colorStops: [{
                        offset: 0,
                        color: '#FFA387' // 0% 处的颜色
                    }, {
                        offset: 1,
                        color: '#FF6388' // 100% 处的颜色
                    }],
                },
                barBorderRadius: [3, 3, 0, 0],
                label: {
                    show: true,
                    position: 'top',
                    offset: [15, 20],
                    align:'left',
                    formatter: function(params) {
                        return params.value;
                    },
                    textStyle: {
                        fontSize: 12,
                        color: '#666666',

                    },
                }
            }
        },
    }]
};