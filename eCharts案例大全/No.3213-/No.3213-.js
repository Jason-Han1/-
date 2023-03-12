var getname =['芙蓉一', '芙蓉二', '芙蓉三', '芙蓉四']

var getvalue =   [1000, 800, 1200, 500]

var getvalue1 = [2100, 1000, 200, 1000]


var getvaluesum=[];

for(var i=0;i<getname.length;i++){

    getvaluesum[i]=getvalue[i]+getvalue1[i];

}



var maxnum = Math.max.apply(null, getvaluesum);

var maxlen = Math.pow(10, String(Math.ceil(maxnum)).length - 2);

if (maxnum >= 50) {

    var max = Math.ceil(maxnum / (.95 * maxlen)) * maxlen;

} else {

    var max = 45;

}





option = {

    grid: {

        top: '50',

        right: '4%',

        left: '15%',

        bottom: '50'

    },

    tooltip: {

        trigger: 'axis',

        axisPointer: {

            type: 'none'

        },

        backgroundColor : 'rgba(21, 64, 92, 1)',

        formatter: '<span style="color:rgba(0, 255, 252, 1);font-size:15px;font-weight:bold;">'+'{b0}'+'</span></br>{a0}数量：{c0}</br>{a1}数量：{c1}'

    },

    legend: {

        type: "scroll",

        right: '20',

        top: '0',
        
         icon:'circle',
        data:  ['未离校', '已离校'],

        itemGap: 25,

        itemWidth: 16,

        itemHeight: 16,

        textStyle: {

            fontSize: '13',

            color: '#A9C1E5',

        },



    },

    xAxis: [{
        data: getname,

        axisLabel: {

            interval: 0,  

            formatter: function(value) {

                var ret = ""; //拼接加\n返回的类目项  

                var maxLength = 6; //每项显示文字个数  

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

            color: '#A9C1E5',

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

        

        },

    }],

    yAxis: [{

        min: 0,

        minInterval: 1,

       // max: 100, // 计算最大值

        //interval: 100 / 5, //  平均分为5份

       // splitNumber: 5,


        axisLabel: {

            color: '#A9C1E5',

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

        name: '未离校',

        type: 'bar',

        data: getvalue,

        stack: '研究生分布情况',

        barWidth: '18px',

        itemStyle: {

            normal: {

                color: {

                    x: 0,

                    y: 0,

                    x2: 0,

                    y2: 1,

                    colorStops: [{

                        offset: 0,

                        color: '#70F3C2' // 0% 处的颜色

                    }, {

                        offset: 1,

                        color: '#48D69E' // 100% 处的颜色

                    }],

                },

                barBorderRadius: [0, 0, 0, 0],

                label: {

                    show: false,

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

        name: '已离校',

        type: 'bar',

        data: getvalue1,

        stack: '研究生分布情况',

        barWidth: '18px',

        itemStyle: {

            normal: {

                color: {

                    x: 0,

                    y: 0,

                    x2: 0,

                    y2: 1,

                    colorStops: [{

                        offset: 1,

                        color: '#065ADA' // 0% 处的颜色

                    }, {

                        offset: 0,

                        color: '#22CFF5' // 100% 处的颜色

                    }],

                },

                barBorderRadius: [0, 0, 0, 0],

                label: {

                    show: false,

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

return option;

