var years = ['2020-11', '2020-12', '2021-01','2021-02', '2021-03', '2021-04', '2021-05','2021-06', '2021-07', '2021-08', '2021-09','2021-10', '2021-11'];
        var data = [
            [2, 1.11, 13.6, 284, 138, 237, 479, 477, 371, 224, 956, 499, 778,534, 187],
            [3,  31, 580, 199, 409, 670, 175, 382, 171, 343, 71, 72, 62, 757, 314],
            [4, 11,  964, 296, 748, 527, 89, 34, 185, 351, 139, 54, 205, 95, 855, ],
            [5, 151, 136, 9284, 64138, 2237, 4779, 48877, 2371, 36224, 12956, 2499, 4778,534, 16487],
            [7,  101, 80, 1909, 40469, 67490, 1765, 36982, 15371, 3643, 2871, 762, 962, 757, 34414],
            [14.23, 31,  94, 2966, 129748, 59827, 8519, 38344, 18495, 3531, 1369, 544, 2005, 975, 33855, ],
            [13.2, 111, 136, 9284, 64138, 2237, 4779, 48877, 2371, 36224, 12956, 2499, 4778,534, 16487],
            [15.26,  131, 91580, 1909, 40469, 67490, 1765, 36982, 15371, 3643, 2871, 762, 962, 757, 34414],
            [20, 31,  64, 2966, 129748, 59827, 8519, 38344, 18495, 3531, 1369, 544, 2005, 975, 33855, ],
            [122, 11, 136, 9284, 64138, 2237, 4779, 48877, 2371, 36224, 12956, 2499, 4778,534, 16487],
            [15.26,  131, 91580, 1909, 40469, 67490, 1765, 36982, 15371, 3643, 2871, 762, 962, 757, 34414],
            [14.23, 131,  964, 2966, 129748, 59827, 8519, 38344, 18495, 3531, 1369, 544, 2005, 975, 33855, ],
            [13.2, 111, 136, 984, 638, 227, 479, 877, 231, 324, 126, 299, 778,534, 187],
        ];

        var jdData = ['深圳', '福州', '中山', '杭州', '天津', '东莞', '武汉', '长春', '珠海', '佛山', '北京', '南宁', '株洲', '厦门', '长沙']

        var grids = [];
        var xAxes = [];
        var yAxes = [];
        var series = [];
        var titles = [];
        var count = 0;
        echarts.util.each(jdData, function (jdData, index) {
            grids.push({
                show: true,
                borderWidth: 0,
                backgroundColor: '#fff',
                shadowColor: 'rgba(0, 0, 0, 0.3)',
                shadowBlur: 2
            });
            xAxes.push({
                data:years,
                show: false,
                gridIndex: count
            });
            yAxes.push({
                type: 'value',
                show: false,
                gridIndex: count
            });
            series.push({
                name: jdData,
                type: 'line',
                xAxisIndex: count,
                yAxisIndex: count,
                data: data.map(function (item) {
                    return item[index];
                }),
                showSymbol: false,
                animationEasing: jdData,
                animationDuration: 1000
            });
            titles.push({
                textAlign: 'center',
                text: jdData,
                textStyle: {
                    fontSize: 12,
                    fontWeight: 'normal'
                }
            });
            count++;
        });

        var rowNumber = Math.ceil(Math.sqrt(count));
        echarts.util.each(grids, function (grid, idx) {
            grid.left = ((idx % rowNumber) / rowNumber * 100 + 0.5) + '%';
            grid.top = (Math.floor(idx / rowNumber) / rowNumber * 90 + 0.5) + '%';
            grid.width = (1 / rowNumber * 100 - 1) + '%';
            grid.height = (1 / rowNumber * 90 - 1) + '%';

            titles[idx].left = parseFloat(grid.left) + parseFloat(grid.width) / 2 + '%';
            titles[idx].top = parseFloat(grid.top) + '%';
        });


        option = {
            // Make gradient line here
            baseOption: {
                timeline: {
                    data: years,
                    axisType: 'category',
                    autoPlay: true,
                    playInterval: 3000, //播放速度

                    left: '3%',
                    right: '3%',
                    bottom: '0%',
                    width: '94%',
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
                color : [
                    '#00c5d2', '#ffce2b ', '#4e70f0', '#f95dba', '#1720d1',
                    '#749f83', '#ff812c', '#ff5a5a', '#a8d8ea', '#a750ff',
                    '#fcbad3', '#749f83', '#f38181', '#ca8622', '#95e1d3'
                ],
                title: titles.concat([{
                    text: '',
                    top: 'bottom',
                    left: 'center'
                }]),
                grid: grids,
                xAxis: xAxes,
                yAxis: yAxes,
                series: series,

                animationEasingUpdate: 'quinticInOut',
                animationDurationUpdate: 1500, //动画效果
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
     var res1 = [];
     var res2 = [];
     //console.log(res);
     for (t = 0; t < res.length; t++) {
         res1[t] = res[t].name;
         res2[t] = res[t].value;
     }
     option.options.push({
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