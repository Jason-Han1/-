var areaList = [
    "a", "b", "c", "d", "e",
    "f", "g", "h", "i", "j",
    "k", "l", "m", "n", "o",
    "p", "q", "r", "s", "t",
    "u", "v", "w", "x", "y",
    "z", "ab", "bc", "cd", "de",
    "ef", "fg", "gh", "hi", "ij",
    "jk", "kl", "lm", "mn"
];

var arr = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150, 160, 170, 180, 190, 200,
    210, 220, 230, 240, 250, 260, 270, 280, 290, 300, 310, 320, 330, 340, 350, 360, 370, 380, 390
];
//var sort = eval(zb_val2);   //排序

var displayNum = 5; //screen.width > 1500 ? 25 : 15;//每次显示数据条数
var groupNum = Math.ceil(arr.length / displayNum);
var arrGroup = [];
for (var i = 0; i < arr.length; i += displayNum) { //数据按个数分组存储
    arrGroup.push(arr.slice(i, i + displayNum));
}
var areaGroup = [];
for (var i = 0; i < areaList.length; i += displayNum) { //区域名称按个数分组存储
    areaGroup.push(areaList.slice(i, i + displayNum));
}
var groupOption = [];
for (var i = 0; i < groupNum; i++) {
    var temp = {

        xAxis: [{
            type: 'category',
            show: true,
            axisLine: {
                lineStyle: {
                    color: '#3d5269'
                }
            },
            axisLabel: {
                rotate: -45,
                color: '#fff',
                fontSize: 11
            },
            data: areaGroup[i],
        }],
        series: [{
            data: arrGroup[i]
        }, ]
    };
    groupOption.push(temp);
}


option = {
    backgroundColor: 'rgba(128, 128, 228)', //rgba设置透明度0.1
    baseOption: {
        timeline: {
            show: false,
            axisType: 'category',
            autoPlay: true,
            data: areaGroup,
            label: {
                formatter: function(s) {
                    return '';
                }
            }
        },
        title: {
            subtext: ''
        },
        tooltip: {},
        calculable: true,
        grid: {
            x: '15%',
            x2: '10%',
            y: '10%',
            y2: '30%'
        },
        xAxis: [{
            type: 'category',
            boundaryGap: true,
            show: true,
            axisLine: {
                lineStyle: {
                    color: '#3d5269'
                }
            },
            axisLabel: {
                rotate: -45,
                color: '#fff',
                fontSize: 11
            },
            /*data: xData*/
        }],
        yAxis: [{
                type: 'value',
                scale: true,
                name: '',
                axisLine: {
                    show: false
                },
                //min:min,
                // max:max,
                min: function(value) {
                    var num = parseInt(value.min);
                    if ((num - 5) > 0) {
                        return num - 5;
                    } else if ((num - 3) > 0) {
                        return num - 3;
                    } else if (num == 1) {
                        return 0;
                    } else {
                        return num;
                    }

                },
                max: function(value) {
                    if (value.max <= 1) {
                        return value.max;
                    }
                    return Math.ceil(value.max);
                },

                //minInterval: 100,

                splitNumber: 5,
                axisTick: {
                    show: false
                },
                splitLine: {
                    lineStyle: {
                        // 使用深浅的间隔色
                        color: '#4e608b'
                    }
                },
                axisLabel: {
                    fontSize: 12, //window.FS.chartLabel*1.45,
                    color: '#fff',
                    margin: 12,
                },

                boundaryGap: [0.2, 0.2]
            }

        ],
        series: [{
            name: '异常总数',
            type: 'bar',
            barWidth: 15,
            label: {
                normal: {
                    show: true,
                    position: 'top',
                    color: '#D0D8E2',

                    /*formatter: function(sort) {
			                            	console.log(params);
			    		                	return sort[params.dataIndex];   
			    		                }*/
                }
            },
            data: arr,
            itemStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(
                        0, 0, 0, 1, [{
                                offset: 0,
                                color: '#75c0ea'
                            },
                            {
                                offset: 1,
                                color: '#3b85dc'
                            }
                        ]
                    )
                }
            },
        }]
    },
    options: groupOption,
};
