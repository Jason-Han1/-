
var index = 0;
var colorList = ['#f36c6c', '#e6cf4e', '#20d180', '#0093ff'];
var attackSourcesName = ["中心村村委会", "中沟村村委会", "众众新家园居委会", "众安居委会", "光明村村委会", "光辉村村委会", "兴银花园居委会", "北桥居委会", "北桥村村委会", "向阳村村委会", "君临花园居委会", "君莲新城第一居委会", "君莲新城第三居委会", "君莲新城第二居委会", "君莲新城第五居委会", "君莲新城第四居委会", "复地北桥城居委会", "好世凤凰城居委会", "安乐村村委会", "招商雍华苑居委会", "文博水景居委会", "日月华城居委会", "星河湾居委会", "樱缘花园居委会", "灯塔村村委会", "秀龙居委会", "繁盛苑居委会", "翔泰苑居委会", "莘闵荣顺苑居委会", "都市富苑居委会", "金榜新苑居委会", "金都新村第三居委会", "银春花园居委会", "银桥花园居委会", "银都苑第一居委会", "银都苑第三居委会", "集体村村委会", "颛桥村村委会", "颛溪新村第五居委会", "颛溪新村第八居委会", "骏苑居委会"];

function contains(arr, dst) {
    var i = arr.length;
    while (i -= 1) {
        if (arr[i] == dst) {
            return i;
        }
    }
    return false;
}
option = {
    color:['#5CCED4','#4181E4'],
    dataZoom:[{
        type: 'slider',
        yAxisIndex: 0,
        zoomLock: true,
        width: 10,
        handleSize: 0,
        showDetail: false,
        start: 0,
        end: 16, // 百分比，此处是计算后传过来
        handleSize: '100%',
        handleStyle: {
            color: "#d3dee5",
        },
        borderColor: "#90979c"
    }, {
        type: 'inside',
        id: 'insideY',
        yAxisIndex: 0,
        start: 0,
        end: 50,
        zoomOnMouseWheel: false,
        moveOnMouseMove: true,
        moveOnMouseWheel: true
    }],
    grid:{x: '25%', y: '2%', width: '70%', height: '90%'},
    xAxis: {
        show: true,
        type: 'value',
        splitLine: {
            show: false
        },
        axisLabel: {
            interval: 0,
            textStyle: {
                fontSize: '12px',
                color: '#fff'
            }
        },
    },
    yAxis: {
        type: 'category',
        inverse: true,
        axisLine: {
            show: false
        },
        axisTick: {
            show: false
        },
        axisPointer: {
            label: {
                show: true,
                margin: 30
            }
        },
        data: attackSourcesName,
        axisLabel: {
            interval: 0,
            textStyle: {
                fontSize: '.12rem',
                color: '#fff'
            },
            margin: 100,
            fontSize: 14,
            align: 'left',
            color: '#333',
            rich: {
                a1: {
                    color: '#fff',
                    backgroundColor: colorList[0],
                    width: 15,
                    height: 15,
                    align: 'center',
                    borderRadius: 2
                },
                a2: {
                    color: '#fff',
                    backgroundColor: colorList[1],
                    width: 15,
                    height: 15,
                    align: 'center',
                    borderRadius: 2
                },
                a3: {
                    color: '#fff',
                    backgroundColor: colorList[2],
                    width: 15,
                    height: 15,
                    align: 'center',
                    borderRadius: 2
                },
                b: {
                    color: '#fff',
                    backgroundColor: colorList[3],
                    width: 15,
                    height: 15,
                    align: 'center',
                    borderRadius: 2
                }
            },
            formatter: function(params) {
                let index1 = params.indexOf('#');
                let num = params.slice(index + 1);
                let newParams = params.slice(0, index1);
                var newParamsName = "";// 最终拼接成的字符串
                var paramsNameNumber = newParams.length;// 实际标签的个数
                if(paramsNameNumber<=5){
                  newParamsName = newParams;
                }else{
                  newParamsName = newParams.substring(0,4)  + "...";
                }

                index = contains(attackSourcesName, params) + 1;
                params = newParamsName;
                if (index - 1 < 3) {
                    return [
                        '{a' + index + '|' + index + '}' + '  ' + params
                    ].join('\n')
                } else {
                    return [
                        '{b|' + index + '}' + '  ' + params
                    ].join('\n')
                }
            }
        }
    },
    series: [
        {
            name: '户籍',
            type: 'bar',
            stack: '总量',
            label: {
                show: true
            },
            barWidth: 10,
            data: [1, 1, 3, 1, 2, 2, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5, 0, 0, 0, 0, 0]
        },
        {
            name: '居住',
            type: 'bar',
            stack: '总量',
            label: {
                show: true,
                position: 'left'
            },
            barWidth: 10,
            data: [0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 28, 5, 0, 1, 0, 0, 0]
        }
    ]
};