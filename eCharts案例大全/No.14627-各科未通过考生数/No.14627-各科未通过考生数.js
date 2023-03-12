var PatternSrc = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACcAAACyAgMAAAC8Zj5WAAAADFBMVEU1mcQAAAA1mcQ1mcQFya0nAAAABHRSTlMZAAkRJfDlNAAAAFtJREFUOMtjCIWBEAYyAcIEkpikgDMGh3nAyIAkK1bBwAqSbPsPA39Ism03DOwgyTaEI0myDeFIWtk2NJIGfW07bwwFNvRIiIgUNZoQB33SQIBBXEaNJsQhmRABdkqh2Grn4rYAAAAASUVORK5CYII='
var PatternImg = new Image();
PatternImg.src = PatternSrc;

var fillSrc = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAF+CAMAAADz+WkdAAAAY1BMVEUAAAA00Lw92bE41LdD36lJ5aJV8JRb9Y1N6Z1R7ZhY85BZ9I8207kyz75b9o000bw51bZX8pJV8JRA3K1N6Z1Q7JlL56BT7pdC3qs717NE4Kg82LI+2rBG4aZI46RJ5aJP6pvNrsJWAAAAC3RSTlMA5+fn5+fn5+fn5wyCdZUAAAFNSURBVHja7dLrboJQEEXhkZuKqK2giNe+/1O2L9BkVtJjD+P++L1CBrYtd4ztAgT4aHHQlrSlP7PcMLYJEOCjxaPN70+nD1pt6cf/b+kTyjFoaSAeTX5/On3QaEspNAfGDgECfLRksqWRPS94QzMyJh7rkbExQLDWllJYHxk7Bgjw0TLTLX1BPFjRQDxWA2NDgAAfLTPd0gmy08AeW9E3RFDjzxogqN/xT6dXPxl7Bgjw0eJRPxh7BAjw0eJR3xm7BwgqGohHdWHsEiDAR0uSLZ2hHIOKBuJRJf9xPWTnnj38DRUNxKPoGesDBIW2lEJxY+wWIMBHi0dxZewaIMBHi0cxMTYFCPDR4lFOjH1AOQYlDcSjzO9Pa0szVXaMdQECfLRoS78EC20phcWesT0OOvYYfwPEj5ZMtpRfoC0lsdgytg0Q4KNFW9KWXugb9rK+ibjhjhMAAAAASUVORK5CYII='
var fillImg = new Image();
fillImg.src=fillSrc;

var data = [{
    name: '综合学科',
    value: 2154
}, {
    name: '高等教育学',
    value: 3000
}, {
    name: '高等教育\n心理学',
    value: 2357
}];
var maxData = [];
var maxNumArray = [];
data.forEach(function(value, index) {
    maxNumArray.push(value.value);
})
data.forEach(function(value, index) {
    var num;
    maxData.push({
        name: value.name,
        value: Math.max.apply(null, maxNumArray)
    });
})
var scale = 1;
//富文本配置
var rich = {
    white: {
        color: "#fff",
        align: 'left',
        fontSize: 18 * scale,
        padding: [0, 0]
    },
};
var option = {
    backgroundColor: '#031f2d',
    grid: {
        left: '3%',
        right: '6%',
        bottom: '3%',
        containLabel: true
    },
    yAxis: [{
        type: 'value',
        splitLine: {
            show: false
        },
        axisLine: {
            show: false
        },
        axisTick: {
            show: true,
            inside: true,
            length: 10 * scale,
            lineStyle: {
                color: '#0b5263'
            }
        },
        axisLabel: {
            textStyle: {
                color: '#0b5263',
                fontSize: 14 * scale
            }
        },
    }],
    xAxis: [{
        type: 'category',
        data: ['综合学科', '高等教育学', '高等教育\n心理学'],
        boundaryGap: ['20%', '20%'],
        splitLine: {
            show: false
        },
        axisLine: {
            show: false
        },
        axisTick: {
            show: false
        },
        axisLabel: {
            //   rotate: 45,
            padding: [15, 0, 0, 0],
            textStyle: {
                fontSize: 16 * scale,
                color: '#3fdaff'
            }
        }
    }],
    series: [{
        name: '100',
        type: 'bar',
        stack: '总量',
        z: 3,
        barWidth: '45%',
        data: data,
        itemStyle: {
            normal: {
                // barBorderRadius: [5, 5, 0, 0],
                // color: {
                //     type: 'linear',
                //     x: 0,
                //     y: 0,
                //     x2: 0,
                //     y2: 1,
                //     colorStops: [{
                //         offset: 0,
                //         color: 'rgba(235,41,125,0.9)' // 0% 处的颜色
                //     }, {
                //         offset: 1,
                //         color: 'rgba(55,28,39,0.8)' // 100% 处的颜色
                //     }],
                //     globalCoord: false // 缺省为 false
                // },
                  color: {image: fillImg,repeat: 'repeat'}
            }
        }
    }, {
        name: '占位',
        type: 'bar',
        barWidth: '45%',
        barGap: '-100%',
        silent: true,
        label: {
            normal: {
                show: true,
                position: "top",
                distance: 20 * scale,
                formatter: function(params) {
                    var stuNum = 0;
                    data.forEach(function(value, index, array) {
                        if (params.name == value.name) {
                            stuNum = value.value;
                        }
                    })
                    return stuNum + '{white| 人}';
                },
                textStyle: {
                    color: "#ffc72b",
                    fontSize: 20 * scale
                },
                rich: rich
            }
        },
        itemStyle: {
            normal: {
                barBorderRadius: [5, 5, 0, 0],
                // color: 'rgba(53,153,196,0.1)'
                  color: {image: PatternImg,repeat: 'repeat'}
            }
        },
        data: maxData
    }]
};