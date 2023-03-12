
var data = [80, 70, 38, 85, 25, 56, 78, 49];
var indicatorname = ['Marketing', 'Technology', 'Search', 'Business news', 'Social', 'Design', 'Advertising', 'Tech news'];
var maxdata = [100, 100, 100, 100, 100, 100, 100, 100];

function contains(arrays, obj) {
    var i = arrays.length;
    while (i--) {
        if (arrays[i] === obj) {
            return i;
        }
    }
    return false;
}

var indicator = [];
for (var i = 0; i < indicatorname.length; i++) {
    indicator.push({
        name: indicatorname[i],
        max: maxdata[i]
    })
}
option = {
        // backgroundColor:'black',
        normal: {
            top: 200,
            left: 300,
            width: 500,
            height: 400,
            zIndex: 6,
            // "backgroundColor": ""
        },
        title: {
            show: false,
            // text: '雷达图',
            // left: '40%',
            // top: '1%',
            // textStyle: {
            //     fontSize: 18,
            //     color: '#fff',
            //     fontStyle: 'normal',
            //     fontWeight: 'normal',
            // },
        },
        tooltip: {
            show: false,
            trigger: 'item',
        },
        legend: {
            show: false,
            // icon: 'circle',
            // left: '35%',
            // top: '90%',
            // orient: 'horizontal',
            // textStyle: {
            //     fontSize: 14,
            //     color: '#fff',
            // },
            // data: ['数据1', '数据2'],
        },
        radar: {
            center: ['50%', '50%'],
            radius: '70%',
            startAngle: 90,
            splitNumber: 4,
            shape: 'circle',
            splitArea: {
                areaStyle: {
                    color: ['transparent'],
                },
            },
            axisLabel: {
                show: true,
                fontSize: 10,
                // align:'center',
                showMinLabel: false,
                showMaxLabel: false,
                formatter: function (v) {
                    return v + '%'
                },
                rotate: 0,
                color: '#888',
                fontStyle: 'normal',
                fontWeight: 'normal',
            },
            axisLine: {
                show: true,
                lineStyle: {
                    color: '#d6d6d6', //
                },
            },
            splitLine: {
                show: true,
                lineStyle: {
                    color: '#d6d6d6', //
                },
            },
            name: {
                textStyle: {
                    rich: {
                        a: {
                            fontSize: '14',
                            color: '#666',
                            align: 'center',
                            lineHeight: '30',
                        },
                        b: {
                            fontSize: '14',
                            color: '#333',
                            align: 'center',
                            fontWeight: 'bold',
                        }
                    },
                },
                formatter: function (params, index) {
                    var i = contains(indicatorname, params);
                    var percent = data[i] / 100 * 100;
                    return '{a|' + params + '}\n' + '{b|' + Math.round(percent) + '%}'
                },
            },
            indicator
        },
        series: [

            {
                name: 'Business Interests',
                type: 'radar',
                symbol: 'circle',
                symbolSize: 10,
                itemStyle: {
                    normal: {
                        opacity: 0,
                        // color: 'rgba(19, 173, 255, 1)',
                        // borderColor: 'rgba(19, 173, 255, 0.4)',
                        // borderWidth: 10,
                    },
                },
                areaStyle: {
                    normal: {
                        color: 'rgba(169,168,254,0.75)',
                    },
                },
                lineStyle: {
                    normal: {
                        color: '#5755FE',
                        width: 4,
                        type: 'solid',
                    },
                },
                data: [data],
            },
        ],
    };

