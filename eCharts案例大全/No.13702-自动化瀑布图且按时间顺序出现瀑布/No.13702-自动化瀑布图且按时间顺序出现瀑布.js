//在yourdata中填入数据，增加为正数，减少为负数
// var yourdata=[91, 526, 423, 2404, -473, 11178, -5174, 1970, 791, -843, 2847, 2908, -690, 225, -812, 1921, -11223, -523, 2624, 277, 800, 777, -205, -657, -462, 883, 434, 539, 2014, 882, 1622, -2241, 299, -1635, 1110, -2633, 598, -2298, 1628, 378, 782, 284, -3713, 761, 338, 799, -926, -459, 996, -208, 546, 250, 888, 568, 891, 998, -355, 929, 550, -246, -399, -292, -566, -182, -799, -97, -455, -484, 308, 329, 533, -485, -1753, 227, -4103, 319, 818, 1297, 482, 819, 964, 790, -888, 964, -133, 557, 751, 431, 766, -137, 682, -261, 768, 671, 146, -2205, -977, -723, -29, -486, -181, 965, -194, -113, 517, -603, -451, 948, 806, 673, -308, -340, -2425, 822, 820, 900, -308, 946, 253, 459, 30, 923, 249, 3153, -550, -72, 374, 809, -251, -147, 140, -3707, -535, 954, 431, 172, -381, 345, -536, -818, -495, 2438, -788, 782, 836, -668, -312, -151, -33, 539, -492, 49, 934, -635, 237, -361, -19, 967, -965, -603, -145, -642, -397, 825, -785, -123, -875, 395, 450, -234, -296, -278, -304, 819, -253, 307, -902, -938, 912, -896, 311, -48, -110, -842, -484, -658, -165, 519, -284, 21, 512, 527, -114, 936, -470, -385, -630, 775, 743, -450, -250, 663, 872, -249, 799, 660, 401, -396, -384, 674, -145, 768, 717, 934, 62, 111, 117, 10, 6, 551, 641, -37, 903, -426, 35, 632, -566, 639, -521, -653, -447, 380, -481, 868, -977, 834, -862, -37, -853, -612, 137, -867, 82, 577, -907, -268, 722, 220, 390, 385, -832, 579, 468, -181, -407, 775, 448, 528, 768, 402, -318, -6, -563, -303, -597, 502, -492, 36, -766, -24, 44, 233, 688, -647, -328, 25, 582, 494, 219, 362, 829, 641, 290, 696, 940, 598, 470, -125, -234, -386, -800, -326, 415, 494, -487, -79, 79, 897, -171, -99, 376, -39, -919, -160, 580, -19, -894, 347, -957, 294, -289, -518, -311, -124, 765, 922, 145, 349, -111, 50, 399, -693, 696, -964, 121, 99, -844, 117, -98, 110, 654, 411, -571, -238, -291, 92, -624, 291, 188, -147, 136, 117, -498, 944, 916, -988, -583, -50, 225, -822, 170, -34, 849, -920, -379, -644, 393, -908, -835, 895, 16, -682, 836, 967, 572, 333]
//在xaxisdata中填入x轴的数据
var yourdata=[]
var dep=[-65.17, -66.35, -71.54, -69.94, -77.82, -87.15, -96.63, -103.23, -119, -111.16, -124.77, -134.47, -137.01, -150.38]
var fcs=[97.43, 105.72, 108.44, 109.06, 123.54, 133.95, 146.27, 140.12, 163.79, 166.96, 165.11, 185.32, 192.77, 200.13]
var xaxisdata=['2001_fcs', '2001_dep', '2002_fcs', '2002_dep', '2001_fcs', '2001_dep', '2002_fcs', '2002_dep', '2001_fcs', '2001_dep', '2002_fcs', '2002_dep', '2001_fcs', '2001_dep', '2002_fcs', '2002_dep', '2001_fcs', '2001_dep', '2002_fcs', '2002_dep', '2001_fcs', '2001_dep', '2002_fcs', '2002_dep', '2001_fcs', '2001_dep', '2002_fcs', '2002_dep']
//出现时间间隔
var timeinterval=300
//是否出现标签
var yesorno=true
for (var i=0;i<dep.length;i++){
    yourdata.push(Math.round(fcs[i],0))
    yourdata.push(Math.round(dep[i],0))
}
console.log(yourdata)
console.log(xaxisdata)
//求出右图中的顶点，为确定y轴的最大值做准备
function maxsum(data) {
    var x = 0;
    var list = []
    for (var i = 0; i < data.length; i++) {
        x = x + data[i];
        list.push(x)
    };
    return Math.max.apply(null, list)
}
//求出y轴的最大值
function getymax() {
    var data = maxsum(yourdata)
    var length = Math.floor(Math.log10(data)) -1
    var yaxismax = Math.ceil(data / Math.pow(10, length)) * Math.pow(10, length)
    return yaxismax

}
function mean(arr,sign){
    var count1=0;
    var count2=0;
    var sum1=0;
    var sum2=0;
    for(var i = 0; i < arr.length; i++){
        if (arr[i]>0){
            count1+=1
            sum1 += arr[i];
        }else{
            count2+=1
            sum2 +=arr[i]
        }
    }
    if (sign==0){
        return Math.round(sum1/count1)
    }else{
        return Math.round(Math.abs(sum2/count2))
    }

}

var ymax = getymax()
var updata = [];
var downdata = [];
var auxdata = [];
var sum = 0
//求出各个系列的值
for (var i = 0; i < yourdata.length; i++) {
    auxdata.push(sum)
    if (yourdata[i] > 0) {
        updata.push(yourdata[i])
        downdata.push('-')
    } else {
        updata.push('-')
        downdata.push(Math.abs(yourdata[i]))
    }
    sum = sum + yourdata[i]
};
// console.log(mean(yourdata,1))
auxdata.slice(0, yourdata.length - 1)

option = {
    title: [{
        text: '阶梯瀑布图',
        subtext: '修改自官网by小白高'
    },

    ],
    //     dataZoom: [
    //     {
    //         type: 'inside',
    //         start: 0,
    //         end: 10
    //     },
    //     {
    //         show: true,
    //         type: 'slider',
    //         y: '90%',
    //         start: 50,
    //         end: 100
    //     }
    // ],
    toolbox: {
        feature: {
            magicType: {
                type: ['line','bar']
            },
            saveAsImage: {
                show: true,
            }
        }
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: { // 坐标轴指示器，坐标轴触发有效
            type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
        },
        formatter: function(params) {
            var tar;
            if (params[1].value != '-') {
                tar = params[1];
            } else {
                tar = params[2];
            }
            return tar.name + '<br/>' + tar.seriesName + ' : ' + tar.value;
        }
    },
    legend: {
        data: ['支出', '收入']
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis: {
        type: 'category',
        splitLine: {
            show: false
        },
        data: xaxisdata
    },
    yAxis: [{
        splitLine:{
            show:false
        },
            type: 'value',
            max: ymax
        },
        {
            type: 'value',
            max: ymax,
            inverse: true,
            show: false
        }
    ],
    series: [{
            name: '辅助',
            type: 'bar',
            stack: '总量',
            itemStyle: {
                normal: {
                    barBorderColor: 'rgba(0,0,0,0)',
                    color: 'rgba(0,0,0,0)'
                },
                emphasis: {
                    barBorderColor: 'rgba(0,0,0,0)',
                    color: 'rgba(0,0,0,0)'
                }
            },
            data: auxdata,
        },
        {
            name: '收入',
            type: 'bar',
            stack: '总量',
            label: {
                normal: {
                    show: yesorno,
                    fontSize:10,
                    position: 'top'
                }
            },
            data: updata,
            animationDelay: function(idx) {
                return idx * timeinterval;
            }

        },
        {
            name: '支出',
            type: 'bar',
            yAxisIndex: 1,
            stack: '总量',
            label: {
                normal: {
                    fontSize:10,
                    show: yesorno,
                    position: 'bottom'
                }
            },
            data: downdata,
            animationDelay: function(idx) {
                return idx * timeinterval;
            }
        }
    ],
    animationEasing: 'elasticOut',
    animationDelayUpdate: function(idx) {
        return idx * 5;
    }
};