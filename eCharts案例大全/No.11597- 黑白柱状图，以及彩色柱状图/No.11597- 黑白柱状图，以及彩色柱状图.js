const colorBlueDark = 'rgb(0, 66, 178)';  //#0042B2
const colorBlueDark_50 = 'rgba(0, 66, 178, 0.5)';
const colorBlueLight = 'rgb(19, 195, 195)'; //##13C3C3
const colorBlueLight_50 = 'rgb(19, 195, 195, 0.5)';
const colorGreenDark = '#228B22';//'rgba(34,139,34,1)'
const colorGreenMiddle = '#5C9C2D';//'#73BC53';//'#448D27';//'#3C8C26';//'#5C9C2D';//'rgba(34,139,34,1)';
const colorGreenLight = '#7FFA00';//'rgba(127,250,0,1)';
const colorYellow = '#FFFF00';//'rgba(255,255,0,1)';
const colorOrange = '#FF8000';//'rgba(255,128,0,1)';
const colorRed = '#FF0000';//'rgba(255,0,0,1)';
const colorGrayDark = '#999';
const colorGrayLighter = '#eee';
const colorWhite = '#fff';
const colorBlack = '#000';
const colorBlack_40 = 'rgba(0,0,0,0.4)';
const colorTransparent = 'rgba(0,0,0,0)';
const colorRed1 = '#BC3C43';
const colorOrange2 = '#CA7038';
const colorYellow3 = '#F9D247';
const colorGreen4 = '#45965D';
const colorBlue5 = '#52B3DB';
const colorBlueDark6 = '#285794';
const colorPink7 = '#DD49D2';
const defaultColorOrder = [colorBlueDark, colorBlueLight, colorRed1, colorOrange2, colorYellow3, colorGreen4, colorBlue5, colorBlueDark6];

const chartTypeLine = 'line';
const chartTypeBar = 'bar';

const regionName = ["东丽区", "北辰区", "南开区", "和平区", "宁河县", "宝坻区", "武清区", "河东区", "河北区", "河西区", "津南区", "滨海新区", "红桥区", "蓟县", "西青区", "静海县",];

const oneDay15 = ["00:00", "00:15", "00:30", "00:45", "01:00", "01:15", "01:30", "01:45", "02:00", "02:15", "02:30", "02:45", "03:00", "03:15", "03:30", "03:45", "04:00", "04:15", "04:30", "04:45", "05:00", "05:15", "05:30", "05:45", "06:00", "06:15", "06:30", "06:45", "07:00", "07:15", "07:30", "07:45", "08:00", "08:15", "08:30", "08:45", "09:00", "09:15", "09:30", "09:45", "10:00", "10:15", "10:30", "10:45", "11:00", "11:15", "11:30", "11:45", "12:00", "12:15", "12:30", "12:45", "13:00", "13:15", "13:30", "13:45", "14:00", "14:15", "14:30", "14:45", "15:00", "15:15", "15:30", "15:45", "16:00", "16:15", "16:30", "16:45", "17:00", "17:15", "17:30", "17:45", "18:00", "18:15", "18:30", "18:45", "19:00", "19:15", "19:30", "19:45", "20:00", "20:15", "20:30", "20:45", "21:00", "21:15", "21:30", "21:45", "22:00", "22:15", "22:30", "22:45", "23:00", "23:15", "23:30", "23:45"];


// New Version ...
function get_multi_line_or_bar_option_v1(settings) {
    let defaultSetting = {
        title: '', //'Default Title',
        title_fontsize: 25,

        chart_type: chartTypeLine,

        axis_x_data: oneDay15,
        axis_y_label: 'y轴表示:',

        // Data in as an Array
        data_label: [
            '上周',
            '本周'
        ],
        data: [
            Array.from({
                length: 50
            }, () => Math.floor(Math.random() * 5) + 5),
            Array.from({
                length: 40
            }, () => Math.floor(Math.random() * 5) + 3)
        ],
        data_min: null,
        data_max: null,
        color: [colorBlueDark, colorBlueLight],

        show_legend: true,
        show_dataZoom: true,
        show_markLine: false,
        markLine_data: [
            {
                xAxis: '00:45'
            }, {
                yAxis: 2,
            }, {
                yAxis: 4
            }, {
                yAxis: 6
            }, {
                yAxis: 8
            }
        ],

        show_markArea: true,
        markArea_data: [
            [{
                name: '5',
                yAxis: 10,
                itemStyle: {
                    normal: {
                        color: colorRed,
                    }
                },
            }, {
                yAxis: 8,
            }],
            [{
                name: '4',
                yAxis: 8,
                itemStyle: {
                    normal: {
                        color: colorOrange,
                    }
                },
            }, {
                yAxis: 6,
            }],
            [{
                name: '3',
                yAxis: 6,
                itemStyle: {
                    normal: {
                        color: colorYellow,
                    }
                },
            }, {
                yAxis: 4,
            }],
            [{
                name: '2',
                yAxis: 4,
                itemStyle: {
                    normal: {
                        color: colorGreenLight
                    }
                },
            }, {
                yAxis: 2,
            }],
            [{
                name: '1',
                yAxis: 2,
                itemStyle: {
                    normal: {
                        color: colorGreenDark, //'rgba(250,250,51,0.2)'
                    }
                }
            }, {
                yAxis: 0,
            }],

        ],

    };
    $.extend(defaultSetting, settings);
    // extend default setting of colors ...
    // defaultSetting.color = [colorTransparent].concat(defaultSetting.color)


    let option = {
        backgroundColor: colorGrayLighter,
        color: defaultSetting.color,
        title: {
            text: defaultSetting.title,
            textStyle: {
                color: colorGrayDark,
                fontSize: defaultSetting.title_fontsize,
            },
            left: 'left',
        },
        tooltip: {
            trigger: 'axis',
            axisPointer:
                defaultSetting.chart_type === chartTypeLine ? {
                    type: 'cross',
                    animation: false,
                } : {
                    type: 'shadow',
                },
            label: {
                // formatter:
            },
            //extraCssText: 'width: 170px'
        },
        legend: defaultSetting.show_legend ? {
            orient: 'horizontal',
            right: "4%",
            itemGap: 20,
            //itemWidth:16,
            //itemHeight:12,
            data: defaultSetting.data_label,
            textStyle: {
                color: colorBlack,
            },

        } : null,
        toolbox: {
            top: 'middle',
            orient: 'vertical',
            feature: {
                dataView: {readOnly: false},
                magicType: {type: ['line', 'bar']},
                restore: {},
                saveAsImage: {}
            }
        },
        dataZoom: defaultSetting.show_dataZoom ? [{
            filterMode: "filter",
            type: "inside",
            start: 0,
            end: 30
        }, {
            start: 0,
            end: 40,
            textStyle: {
                fontSize: 10,
                color: colorBlack,
            },
            bottom: 0
        }] : null,
        axisPointer: {
            link: {
                xAxisIndex: 'all'
            }
        },
        grid: [{
            // left: '20%',
            // right: 40,
        },],
        xAxis: [{
            type: 'category',
            boundaryGap: defaultSetting.chart_type === chartTypeLine ? false: true,
            // axisLine: {
            //     onZero: true
            // },
            data: defaultSetting.axis_x_data,
            axisTick: {
                alignWithLabel: defaultSetting.chart_type === chartTypeLine ? true: false,
            }
        },
            // {
            // gridIndex: 1;
            // }
        ],
        yAxis: [{
            type: 'value',
            //  max: 600,
            name: defaultSetting.axis_y_label,
            //   min: 0,
            //   interval: 150,
            // min: 'dataMin',
            // max: 'dataMax',
            min: defaultSetting.data_min,
            max: defaultSetting.data_max,
            // scale: true,

            splitLine: {
                show: !defaultSetting.show_markArea,
            },

            splitArea: !defaultSetting.show_markArea ? {
                show: true,
            } : null,

        },],

        series: [
            {
                name: '', //PlaceHolder, only for backgroundColor
                type: 'custom', //defaultSetting.chart_type, //never be bar for placeholding...
                color: colorTransparent,
                markLine: defaultSetting.show_markLine ? {
                    silent: true,
                    data: defaultSetting.markLine_data,
                } : null,
                markArea: defaultSetting.show_markArea ? {
                    silent: true,
                    label: {
                        normal: {
                            position: ['5%', '50%']
                        }
                    },
                    data: defaultSetting.markArea_data,
                } : null,
                data: null,
            },
        ].concat(
            Array.from({
                length: defaultSetting.data.length
            }, (v, i) => {
                // console.log(defaultSetting.color);
                let _name = defaultSetting.data_label[i];
                // let _color_normal = defaultSetting.line_color[i+1]; //[0];
                // let _color_normal = defaultSetting.color[i+1]; //[0];
                // console.log(_color_normal);
                // let _color_lighter = defaultSetting.line_color[i][1];
                let _data = defaultSetting.data[i];


                return {
                    name: _name,
                    type: defaultSetting.chart_type,
                    // smooth: true,
                    // symbol: 'circle',
                    symbolSize: 8,
                    // showSymbol: true,
                    lineStyle: {
                        normal: {
                            // color: _color_normal,
                            width: 3,
                            shadowColor: colorBlack_40,
                            shadowBlur: 10,
                            shadowOffsetX: 4,
                            shadowOffsetY: 10,
                            // opacity: 0.5,
                        }
                    },
                    itemStyle: !1 ? {
                        normal: {
                            color: '#fff', //'#fff',
                            // borderColor: _color_normal, //"#2ec7c9",
                            borderWidth: 2,
                        }
                    } : null,
                    data: _data,

                    // only for `bar` type
                    barCategoryGap: defaultSetting.chart_type === chartTypeBar ? '40%': null,
                };
            })
        ),
    };
    return option;
}


function get_multi_bar_option_v11(settings) {
    let defaultSetting = {
        chart_type: chartTypeBar,
    };
    $.extend(defaultSetting, settings);

    return get_multi_line_or_bar_option_v1(defaultSetting);
}

/**
 * Bar type echarts option generate,
 * 5-level color background,
 * Region index present.
 * minData: 0, maxData: 100
 *
 * @param settings
 * @returns {{backgroundColor: string, color: (*[]|*), title: {text: string, textStyle: {color: string, fontSize: number}, left: string}, tooltip: {trigger: string, axisPointer: *, label: {}}, legend: *, toolbox: {top: string, orient: string, feature: {dataView: {readOnly: boolean}, magicType: {type: string[]}, restore: {}, saveAsImage: {}}}, dataZoom: *, axisPointer: {link: {xAxisIndex: string}}, grid: *[], xAxis: *[], yAxis: *[], series: *[]}}
 */
function get_region_index_bar(settings) {
    let defaultSetting = {
        title: '',

        axis_x_data: regionName,
        axis_y_label: '指数(%)',

        data_label: ['全天'],
        data: [
            Array.from({
                length: regionName.length,
            }, () => Math.floor(Math.random() * 25) + 75),
        ],
        data_min: null,
        data_max: null,
        color: defaultColorOrder,

        show_markArea: true,
        markArea_data: [
            [{
                name: '优',
                yAxis: 100,
                itemStyle: {
                    color: colorGreenDark,
                },
            }, {
                yAxis: 80,
            }],
            [{
                name: '较优',
                yAxis: 80,
                itemStyle: {
                    color: colorGreenLight,
                },
            }, {
                yAxis: 60,
            }],
            [{
                name: '中',
                yAxis: 60,
                itemStyle: {
                    color: colorYellow,
                },
            }, {
                yAxis: 40,
            }],
            [{
                name: '较差',
                yAxis: 40,
                itemStyle: {
                    color: colorOrange,
                },
            }, {
                yAxis: 20,
            }],
            [{
                name: '差',
                yAxis: 20,
                itemStyle: {
                    color: colorRed, //'rgba(250,250,51,0.2)'
                }
            }, {
                yAxis: 0,
            }],

        ],

    };
    $.extend(defaultSetting, settings);

    return get_multi_bar_option_v11(defaultSetting);
}


option = get_region_index_bar(
    {
        data_label: ['全天', '高峰'],
        data: [
            Array.from({
                length: regionName.length,
            }, () => Math.floor(Math.random() * 25) + 75),
            Array.from({
                length: regionName.length,
            }, () => Math.floor(Math.random() * 25) + 75),
        ],
        
    }
    )