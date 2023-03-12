var years = ['2016', '2017', '2018'];
var jdData = [
     ['香港同胞', '澳门同胞', '台湾同胞', '日  本', '韩  国', '蒙  古', '印度尼西亚', '马来西亚', '菲律宾', '新加坡', '泰  国', '印  度', '越  南', '缅  甸', '朝  鲜', '巴基斯坦', '其  它'],
     ['香港同胞', '澳门同胞', '台湾同胞', '日  本', '韩  国', '蒙  古', '印度尼西亚', '马来西亚', '菲律宾', '新加坡', '泰  国', '印  度', '越  南', '缅  甸', '朝  鲜', '巴基斯坦', '其  它'],
     ['香港同胞', '澳门同胞', '台湾同胞', '日  本', '韩  国', '蒙  古', '印度尼西亚', '马来西亚', '菲律宾', '新加坡', '泰  国', '印  度', '越  南', '缅  甸', '朝  鲜', '巴基斯坦', '其  它']
]
var data = [
     [13.2, 1.11, 13.6, 9284, 64138, 2237, 4779, 48877, 2371, 36224, 12956, 2499, 4778, 594, 717, 534, 16487],
     [15.26, 1.31, 16.68, 10331, 91580, 1909, 40469, 67490, 1765, 36982, 15371, 3643, 2871, 762, 962, 757, 34414],
     [14.23, 1.31, 21.13, 10873, 94964, 2966, 129748, 59827, 8519, 38344, 18495, 3531, 1369, 544, 2005, 975, 33855, ],
 ];
option = {
    baseOption: {
        timeline: {
            show:false,
             data: years,
             axisType: 'category',
             autoPlay: true,
             playInterval: 1500, //播放速度

             left: '5%',
             right: '5%',
             bottom: '0%',
             width: '90%',
             //  height: null,
             label: {
                 normal: {
                     textStyle: {

                         color: 'red',
                     }
                 },
                 emphasis: {
                     textStyle: {
                         color: 'red'
                     }
                 }
             },
             symbolSize: 10,
             lineStyle: {
                 color: '#red'
             },
             checkpointStyle: {
                 borderColor: '#red',
                 borderWidth: 2
             },
             controlStyle: {
                 showNextBtn: true,
                 showPrevBtn: true,
                 normal: {
                     color: '#ff8800',
                     borderColor: '#ff8800'
                 },
                 emphasis: {
                     color: 'red',
                     borderColor: 'red'
                 }
             },

        },
        tooltip: {
            trigger: 'axis',
            axisPointer: {            // 坐标轴指示器，坐标轴触发有效
                type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
            }
        },
        legend: {
            data: ['直接访问', '邮件营销', '联盟广告', '视频广告', '搜索引擎']
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        xAxis: {
            type: 'value'
        },
        yAxis: {
            type: 'category',
            data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
        },
        series: [
            {
                name: '直接访问',
                type: 'bar',
                stack: '总量',
                label: {
                    show: true,
                    position: 'insideRight'
                },
                data: [320, 302, 301, 334, 390, 330, 320]
            },
            {
                name: '邮件营销',
                type: 'bar',
                stack: '总量',
                label: {
                    show: true,
                    position: 'insideRight'
                },
                data: [120, 132, 101, 134, 90, 230, 210]
            }
        ],
         animationEasingUpdate: 'quinticInOut',
         animationDurationUpdate: 1500, //动画效果5
    },
    options: []
};
 for (var n = 0; n < years.length; n++) {

     var res = [];
     //alert(jdData.length);
     for (j = 0; j < data[n].length; j++) {
         res.push({
             name: jdData[n][j],
             value: data[n][j]
         });

     }

     res.sort(function(a, b) {
         return b.value - a.value;
     }).slice(0, 6);

     res.sort(function(a, b) {
         return a.value - b.value;
     });


     var res1 = [];
     var res2 = [];
     //console.log(res);
     for (t = 0; t < res.length; t++) {
         res1[t] = res[t].name;
         res2[t] = res[t].value;
     }
     option.options.push({
         title: {
             text: years[n] + '年'
         },
         yAxis: {
             data: res1,
         },
         series: [{
             data: res2
         }, {
             data: res2
         }]
     });
 }