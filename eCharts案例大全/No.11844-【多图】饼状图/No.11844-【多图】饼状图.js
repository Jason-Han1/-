const colorBlueDark = 'rgb(26, 214,214)';
const colorBlueDark_50 = 'rgba(26, 214,214, 0.5)';
const colorBlueLight = 'rgb(0, 72, 195)';
const colorBlueLight_50 = 'rgb(0, 72, 195, 0.5)';
const colorGreenDark = 'rgba(34,139,34,1)';
const colorGreenLight = 'rgba(127,250,0,1)';
const colorYellow = 'rgba(255,255,0,1)';
const colorOrange = 'rgba(255,128,0,1)';
const colorRed = 'rgba(255,0,0,1)';
const colorGrayDark = '#999';
const colorWhite = '#fff';
const colorBlack = '#000';
const colorBlack_40 = 'rgba(0,0,0,0.4)';


function get_multi_pie_option(settings) {
    let defaultSetting = {
        title: '',//'Default Title',
        title_fontsize: 30,
        subtitle_fontsize: 25,
        legend_fontSize: 25,

        grid: {
            left: 0,
            right: 0,
            
        },

        // Data in as an Array
        pie_data: {
            '维度1': {
                '上周': 93,
                '本周': 28,
            },
            '维度2': {
                '上周': 89,
                '本周': 238,
            },
            '维度3': {
                '上周': 943,
                '本周': 284,
                '2周': 284,
            },
        },
        // pie_name: ['维度1', '维度2', '维度3'],
        // pie_data_label: ['上周', '本周'],
    };
    $.extend(defaultSetting, settings);

    defaultSetting.pie_name = Object.keys(defaultSetting.pie_data)
    // defaultSetting.pie_data_label = Array.from({})
    const one_pie_width = 100 / defaultSetting.pie_name.length;
    //defaultSetting.pie_data.length = Object.keys(defaultSetting.pie_data).length;
    console.log(defaultSetting);
    
    let option = {
        tooltip: {
            trigger: 'axis',
            axisPointer: { // 坐标轴指示器，坐标轴触发有效
                type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
            }
        },
        title: [
            {
                text: '【多图】饼状图',
                textStyle: {
                    color: colorBlack,
                    fontSize: defaultSetting.title_fontsize,
                },
            },
        ].concat(Array.from({length: defaultSetting.pie_name.length}, (v, i) => {
            // console.log(one_pie_width);
            let _title = {
                text: defaultSetting.pie_name[i],
                top: '20%',
                left: one_pie_width * i + '%',
                textStyle: {
                    color: colorBlack,
                    fontSize: defaultSetting.subtitle_fontsize,
                },
            }
            return _title;
        })),
        legend: [
            // {
            //     // data: defaultSetting.pie_data_label, //TODO: ????????
            //     // bottom: '80%',
            //     orient: 'horizontal',
            //     left: "5%",
            //     top: '5%',
            //     // right: "0%",
            //     textStyle: {
            //         color: colorBlack,
            //         fontSize: defaultSetting.legend_fontSize,
            //     },
            //     icon: 'roundRect',
            // },
        ].concat(Array.from({length: defaultSetting.pie_name.length}, (v,i)=>{
            let cur_pie_name = defaultSetting.pie_name[i];
            let cur_pie_date = defaultSetting.pie_data[cur_pie_name];
            
            
            return {
                data: Object.keys(cur_pie_date),
                orient: 'horizontal',
                left: "5%",
                top: '5%',
                // right: "0%",
                textStyle: {
                    color: colorBlack,
                    fontSize: defaultSetting.legend_fontSize,
                },
                icon: 'roundRect',
            };
        })),
        grid: {
            left: '0%',
            top: 'center',
            right: '0%',
            containLabel: true
        },
        series: [
            // {
            //     tooltip: {
            //         trigger: 'item',
            //         formatter: "{b} : {c} ({d}%)"
            //     },
            //     type: 'pie',
            //     center: ['15%', '50%'],
            //     radius: ['20%', '39%'],
            //     avoidLabelOverlap: false,
            //     label: {
            //         normal: {
            //             show: true,
            //             position: 'inside',
            //             formatter: '{b},{d}%'
            //         },
            //         emphasis: {
            //             show: true,
            //             textStyle: {
            //                 fontSize: '20',
            //                 fontWeight: 'bold'
            //             }
            //         }
            //     },
            //     labelLine: {
            //         normal: {
            //             show: false
            //         }
            //     },
            //     data: Array.from(defaultSetting.pie_data['维度1'].length = Object.keys(defaultSetting.pie_data['维度1']).length, (v,i)=>{
            //         return {
            //             value: defaultSetting.pie_data['维度1'].v,
            //             name: i,
            //         };
            //     }),
            // },
        ].concat(Array.from({length:defaultSetting.pie_name.length}, (v,i)=>{
                    console.log("pie_data",defaultSetting.pie_data);
                    console.log("v,i",v,i);
                    let cur_pie_name = defaultSetting.pie_name[i];
                    let cur_data = defaultSetting.pie_data[cur_pie_name];
                    let cur_data_keys = Object.keys(cur_data);
                    
                    console.log("cur_data",cur_data);
                    return {
                        tooltip: {
                            trigger: 'item',
                            formatter: "{b} : {c} ({d}%)"
                        },
                        type: 'pie',
                        center: [one_pie_width*(i+0.5)+'%', '50%'],
                        radius: one_pie_width+'%',//'33%',//['33%', '0%'],//33%=100%/3
                        avoidLabelOverlap: false,
                        label: {
                            normal: {
                                show: true,
                                position: 'inside',//'outside',//'inside',
                                formatter: '{b},{d}%'
                            },
                            emphasis: {
                                show: true,
                                textStyle: {
                                    fontSize: '20',
                                    fontWeight: 'bold'
                                }
                            }
                        },
                        labelLine: {
                            normal: {
                                show: false,//true,//set true if use "position: 'outside',"
                            }
                        },
                        data: Array.from({length:cur_data_keys.length}, (v,idx)=>{
                            let cur_data_key = cur_data_keys[idx];
                            console.log("-------");
                            console.log("idx:",idx, "cur_data_key:",cur_data_key,'cur_data',cur_data);
                            return {
                                value: cur_data[cur_data_key],
                                name: cur_data_key,
                            };
                        }),
                    };
                })),
    };

    console.log(option);
    return option;
}

option = get_multi_pie_option(null);
