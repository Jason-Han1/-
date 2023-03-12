//------------------------------------引用请注明出处

var myData = ['计算机', '法学院', '理学院', '外国语', '工商学院', '建工学院', '国教学院', '农学院', '工程学院', '食品学院', '艺术学院', '经济管理学院'];
var databeast = {
    1: [78, 75, 70, 65, 68, 75, 80, 85, 80, 75, 76],
    2: [71, 81, 83, 87, 80, 85, 86, 85, 88, 78, 86],
    3: [64, 67, 72, 75, 77, 80, 81, 82, 83, 85, 90],
    4: [78, 75, 70, 65, 68, 75, 80, 85, 80, 75, 76],
    5: [71, 81, 83, 87, 80, 85, 86, 85, 88, 78, 86],
    6: [64, 67, 72, 75, 77, 80, 81, 82, 83, 85, 90],
    7: [78, 75, 70, 65, 68, 75, 80, 85, 80, 75, 76],
    8: [71, 81, 83, 87, 80, 85, 86, 85, 88, 78, 86],
    9: [64, 67, 72, 75, 77, 80, 81, 82, 83, 85, 90],
    10: [78, 75, 70, 65, 68, 75, 80, 85, 80, 75, 76],
    11: [71, 81, 83, 87, 80, 85, 86, 85, 88, 78, 86],
    12: [64, 67, 72, 75, 77, 80, 81, 82, 83, 85, 90],

};

var timeLineData = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

function optiontitle(value) {
    if (value > 9) {
        return {
            text: '东农' + value + '实验人均课时趋势图',
            x: 'center',
            top: '8%'
        }
    } else return {
        text: '东农' + value + '实验人均课时趋势图',
        x: 'center',
        top: '8%'
    }


}
option = {
    baseOption: {

        timeline: {
            show: true,
            bottom: 30,
            axisType: 'category',
            tooltip: {
                show: true,
                formatter: function(params) {
                    console.log(params);
                    return params.name;
                }
            },
            autoPlay: true,
            currentIndex: 6,
            playInterval: 1000,
            label: {
                normal: {
                    show: true,
                    interval: 'auto',
                    formatter: function(value) {
                        return value
                    }
                },
            },
            data: [],
        },
        title: {
            //   text:'大北京景点帅哥美女统计', 
            textStyle: {
                fontSize: 16,
            },
        },

        grid: [{
            show: false,
            left: '10%',
            top: '15%',
            bottom: 90,
            containLabel: true,
        }],

        xAxis: [{
            boundaryGap: 0,
            type: 'category',
            data: ['2007', '2008', '2009', '2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017'],
            axisLabel: {
                show: true,
               
                textStyle: {
                    fontSize: 12,
                },
            },
            splitLine: {
                show: false
            },
        }],
        yAxis: [{
            type: 'value',
            name: '人数',
            min: 50,
            splitLine: {
                show: true
            },
            axisLabel: {
                formatter: function(value) {
                    return value + '0'
                },
            },
            data: myData,
        }],
        series: [],

    },

    options: [],


};

for (var i = 0; i < myData.length; i++) {
    option.baseOption.timeline.data.push(myData[i]);
    option.options.push({
        title: optiontitle(myData[i]),
        series: [{
            name: '总课时',
            type: 'line',
            barGap: 15,
            barWidth: 15,
            label: {
                normal: {
                    show: false,
                },
                emphasis: {
                    show: true,
                    position: 'left',
                    offset: [0, 0],
                    textStyle: {
                        color: '#fff',
                        fontSize: 14,
                    },
                },
            },
            areaStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: 'rgba(137, 189, 27, 0.3)'
                    }, {
                        offset: 0.8,
                        color: 'rgba(137, 189, 27, 0)'
                    }], false),
                    shadowColor: 'rgba(0, 0, 0, 0.1)',
                    shadowBlur: 10
                }
            },
            itemStyle: {
                normal: {
                    color: '#659F83',
                },
                emphasis: {
                    color: '#08C7AE',
                },
            },
            data: databeast[timeLineData[i]],
        }]
    });
}