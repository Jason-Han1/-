const funnel_index = ['1194859', '1204548', '1045451', '1026045', '1145731', '1245947', '1150457', '1204338', '1810937', '1232034', '1334452', '1194564', '1024524', '124453', '1232045', '1654519', '1156453', '1654599', '1145593', '1124514', '1127459', '1245934', '1114506', '1162622', '1222641', '1186252', '1220422', '1653865', '1232451', '1007833', '1213724', '1233661', '1784151', '1154326', '1162452', '1228596', '1529449', '1051155', '1579122', '1104331', '1228398', '1656602', '1721621', '1579135', '1220932', '1664920', '1176515', '1231938', '1228667', '1811276', '1142461', '1179633', '1040932', '1785550', '1098207', '1163572', '1115868', '1113913', '1232443', '1590754', '1224398', '1209645', '1056776', '1471530', '1210733', '1209973', '1773029', '1027426', '1232810', '1495368', '1111546', '1579132', '1775082', '1782197', '1210536', '1118665', '1040991', '1633650', '1617178', '1212419', '1214679', '1181422', '1108907', '1748339', '1219492', '1033377', '1226410', '1227185', '1197099', '1749200', '1725035', '1132742', '1039506', '1228660', '1228750', '1228776', '1179923', '1231933', '1232036', '1233268'];
const funnel_data_col = ['sum__detail_view', 'sum__add', 'sum__checkout', 'sum__orders'];
const funnel_data = [
    [81, 19, 15, 0],
    [76, 13, 4, 0],
    [76, 23, 30, 0],
    [67, 0, 0, 0],
    [62, 16, 8, 0],
    [60, 2, 40, 0],
    [54, 13, 7, 1],
    [53, 14, 16, 0],
    [42, 0, 0, 0],
    [40, 15, 33, 1],
    [38, 0, 0, 0],
    [37, 14, 3, 0],
    [37, 13, 43, 0],
    [35, 14, 44, 1],
    [35, 15, 22, 0],
    [34, 0, 0, 0],
    [32, 4, 7, 0],
    [31, 0, 0, 0],
    [30, 9, 21, 0],
    [30, 2, 2, 0],
    [28, 13, 29, 0],
    [27, 0, 0, 0],
    [25, 1, 1, 0],
    [25, 18, 0, 0],
    [24, 6, 8, 0],
    [23, 9, 18, 0],
    [23, 12, 13, 1],
    [23, 0, 0, 0],
    [22, 11, 17, 0],
    [21, 0, 0, 0],
    [21, 1, 3, 0],
    [21, 4, 8, 0],
    [21, 0, 0, 0],
    [20, 6, 5, 0],
    [20, 3, 5, 0],
    [20, 0, 12, 0],
    [20, 0, 0, 0],
    [19, 6, 6, 0],
    [18, 0, 0, 0],
    [18, 0, 0, 0],
    [18, 0, 0, 0],
    [18, 0, 0, 0],
    [18, 0, 0, 0],
    [18, 0, 0, 0],
    [17, 7, 3, 0],
    [16, 0, 0, 0],
    [16, 7, 11, 2],
    [16, 2, 3, 0],
    [16, 0, 7, 0],
    [15, 0, 0, 0],
    [15, 0, 0, 0],
    [15, 6, 8, 0],
    [15, 9, 9, 0],
    [15, 0, 0, 0],
    [14, 4, 2, 0],
    [14, 2, 0, 0],
    [13, 1, 2, 0],
    [13, 8, 7, 0],
    [13, 2, 1, 0],
    [13, 0, 0, 0],
    [13, 0, 0, 0],
    [12, 10, 16, 0],
    [12, 0, 0, 0],
    [12, 0, 0, 0],
    [12, 2, 8, 0],
    [12, 3, 4, 0],
    [12, 0, 0, 0],
    [12, 3, 0, 0],
    [11, 11, 17, 0],
    [11, 0, 0, 0],
    [11, 9, 9, 0],
    [11, 0, 0, 0],
    [11, 0, 0, 0],
    [11, 0, 0, 0],
    [11, 6, 9, 0],
    [10, 0, 0, 0],
    [10, 2, 1, 0],
    [10, 0, 0, 0],
    [9, 0, 0, 0],
    [9, 1, 4, 0],
    [9, 10, 12, 0],
    [9, 5, 6, 0],
    [8, 1, 0, 0],
    [8, 0, 0, 0],
    [8, 4, 3, 0],
    [8, 5, 7, 0],
    [8, 0, 0, 0],
    [8, 5, 3, 0],
    [8, 4, 4, 0],
    [8, 0, 0, 0],
    [8, 0, 0, 0],
    [8, 6, 14, 0],
    [8, 6, 0, 0],
    [8, 0, 6, 0],
    [8, 0, 5, 0],
    [8, 0, 8, 0],
    [8, 1, 2, 0],
    [8, 1, 1, 0],
    [8, 4, 4, 0],
    [8, 2, 5, 0]
];
const funnel_percent_col = ['sum__add/sum__detail_view', 'sum__checkout/sum__detail_view', 'sum__orders/sum__detail_view'];
const funnel_percent = [
    [23.45, 18.51, 0.0],
    [17.1, 5.26, 0.0],
    [30.26, 39.47, 0.0],
    [0.0, 0.0, 0.0],
    [25.8, 12.9, 0.0],
    [3.33, 66.66, 0.0],
    [24.07, 12.96, 1.85],
    [26.41, 30.18, 0.0],
    [0.0, 0.0, 0.0],
    [37.5, 82.5, 2.5],
    [0.0, 0.0, 0.0],
    [37.83, 8.1, 0.0],
    [35.13, 116.21, 0.0],
    [40.0, 125.71, 2.85],
    [42.85, 62.85, 0.0],
    [0.0, 0.0, 0.0],
    [12.5, 21.87, 0.0],
    [0.0, 0.0, 0.0],
    [30.0, 70.0, 0.0],
    [6.66, 6.66, 0.0],
    [46.42, 103.57, 0.0],
    [0.0, 0.0, 0.0],
    [4.0, 4.0, 0.0],
    [72.0, 0.0, 0.0],
    [25.0, 33.33, 0.0],
    [39.13, 78.26, 0.0],
    [52.17, 56.52, 4.34],
    [0.0, 0.0, 0.0],
    [50.0, 77.27, 0.0],
    [0.0, 0.0, 0.0],
    [4.76, 14.28, 0.0],
    [19.04, 38.09, 0.0],
    [0.0, 0.0, 0.0],
    [30.0, 25.0, 0.0],
    [15.0, 25.0, 0.0],
    [0.0, 60.0, 0.0],
    [0.0, 0.0, 0.0],
    [31.57, 31.57, 0.0],
    [0.0, 0.0, 0.0],
    [0.0, 0.0, 0.0],
    [0.0, 0.0, 0.0],
    [0.0, 0.0, 0.0],
    [0.0, 0.0, 0.0],
    [0.0, 0.0, 0.0],
    [41.17, 17.64, 0.0],
    [0.0, 0.0, 0.0],
    [43.75, 68.75, 12.5],
    [12.5, 18.75, 0.0],
    [0.0, 43.75, 0.0],
    [0.0, 0.0, 0.0],
    [0.0, 0.0, 0.0],
    [40.0, 53.33, 0.0],
    [60.0, 60.0, 0.0],
    [0.0, 0.0, 0.0],
    [28.57, 14.28, 0.0],
    [14.28, 0.0, 0.0],
    [7.69, 15.38, 0.0],
    [61.53, 53.84, 0.0],
    [15.38, 7.69, 0.0],
    [0.0, 0.0, 0.0],
    [0.0, 0.0, 0.0],
    [83.33, 133.33, 0.0],
    [0.0, 0.0, 0.0],
    [0.0, 0.0, 0.0],
    [16.66, 66.66, 0.0],
    [25.0, 33.33, 0.0],
    [0.0, 0.0, 0.0],
    [25.0, 0.0, 0.0],
    [100.0, 154.54, 0.0],
    [0.0, 0.0, 0.0],
    [81.81, 81.81, 0.0],
    [0.0, 0.0, 0.0],
    [0.0, 0.0, 0.0],
    [0.0, 0.0, 0.0],
    [54.54, 81.81, 0.0],
    [0.0, 0.0, 0.0],
    [20.0, 10.0, 0.0],
    [0.0, 0.0, 0.0],
    [0.0, 0.0, 0.0],
    [11.11, 44.44, 0.0],
    [111.11, 133.33, 0.0],
    [55.55, 66.66, 0.0],
    [12.5, 0.0, 0.0],
    [0.0, 0.0, 0.0],
    [50.0, 37.5, 0.0],
    [62.5, 87.5, 0.0],
    [0.0, 0.0, 0.0],
    [62.5, 37.5, 0.0],
    [50.0, 50.0, 0.0],
    [0.0, 0.0, 0.0],
    [0.0, 0.0, 0.0],
    [75.0, 175.0, 0.0],
    [75.0, 0.0, 0.0],
    [0.0, 75.0, 0.0],
    [0.0, 62.5, 0.0],
    [0.0, 100.0, 0.0],
    [12.5, 25.0, 0.0],
    [12.5, 12.5, 0.0],
    [50.0, 50.0, 0.0],
    [25.0, 62.5, 0.0]
];

let show_percent = false;

let nfid = 0; // now funnel id

function formatShowData(nameList, dataList) {
    const r_data = [];
    for (let i = 0; i < nameList.length; i++) {
        r_data.push({
            name: nameList[i],
            value: dataList[i]
        });
    }
    return r_data;
}

option = {
    title: {
        show: true,
        text: 'goods_id' + ': ' + funnel_index[nfid] + '\n No.' + (nfid + 1) + ' in ' + ' query',
        bottom: 'bottom',
        left: 'right'
    },
    toolbox: {
        show: true,
        itemSize: 20,
        feature: {
            myTool1: {
                show: true,
                title: 'percent view',
                icon: 'path://M804.571429 731.428571c0-40.009143-33.133714-73.142857-73.142858-73.142857s-73.142857 33.133714-73.142857 73.142857 33.133714 73.142857 73.142857 73.142858 73.142857-33.133714 73.142858-73.142858zM365.714286 292.571429c0-40.009143-33.133714-73.142857-73.142857-73.142858s-73.142857 33.133714-73.142858 73.142858 33.133714 73.142857 73.142858 73.142857 73.142857-33.133714 73.142857-73.142857z m585.142857 438.857142c0 121.161143-98.304 219.428571-219.428572 219.428572s-219.428571-98.304-219.428571-219.428572 98.304-219.428571 219.428571-219.428571 219.428571 98.304 219.428572 219.428571zM896 109.714286c0 8.009143-2.852571 15.433143-7.424 21.723428l-603.428571 804.571429C278.308571 945.152 267.446857 950.857143 256 950.857143H164.571429c-20.004571 0-36.571429-16.566857-36.571429-36.571429 0-8.009143 2.852571-15.433143 7.424-21.723428l603.428571-804.571429C745.691429 78.848 756.553143 73.142857 768 73.142857h91.428571c20.004571 0 36.571429 16.566857 36.571429 36.571429zM512 292.571429c0 121.161143-98.304 219.428571-219.428571 219.428571s-219.428571-98.304-219.428572-219.428571 98.304-219.428571 219.428572-219.428572 219.428571 98.304 219.428571 219.428572z',
                iconStyle: {
                    color: '#cdcdcd'
                },
                onclick: function() {
                    show_percent = !show_percent;
                    myChart.setOption({
                        toolbox: {
                            feature: {
                                myTool1: {
                                    iconStyle: {
                                        color: (show_percent) ? '#7CFC00' : '#cdcdcd'
                                    }
                                }
                            }
                        },
                        legend: {
                            data: (show_percent) ? funnel_percent_col : funnel_data_col,
                        },
                        series: {
                            label: {
                                normal: {
                                    formatter: (show_percent) ? function(params) {
                                        const percent_name = params.name;
                                        const percent_index = funnel_percent_col.indexOf(percent_name);
                                        const spilt_name = percent_name.split('/');
                                        const data1_name = spilt_name[0];
                                        const data2_name = spilt_name[1];
                                        const data1_index = funnel_data_col.indexOf(data1_name);
                                        const data2_index = funnel_data_col.indexOf(data2_name);
                                        let str = data2_name + ': ' + funnel_data[nfid][data2_index] + '\n';
                                        str += funnel_percent[nfid][percent_index] + '%\n';
                                        str += data1_name + ': ' + funnel_data[nfid][data1_index];
                                        return str;
                                    } : function(params) {
                                        const data_name = params.name;
                                        const data_index = funnel_data_col.indexOf(data_name);
                                        return data_name + '\n' + funnel_data[nfid][data_index];
                                    },
                                }
                            },
                            data: (show_percent) ? formatShowData(funnel_percent_col, funnel_percent[nfid]) : formatShowData(funnel_data_col, funnel_data[nfid]),
                        }
                    });
                }
            },
            myTool2: {
                show: true,
                title: 'goods_id' + ' prev',
                icon: 'path://M573.056 272l308.8 404.608A76.8 76.8 0 0 1 820.736 800H203.232a76.8 76.8 0 0 1-61.056-123.392L450.976 272a76.8 76.8 0 0 1 122.08 0z',
                iconStyle: {
                    color: '#cdcdcd'
                },
                onclick: function() {
                    nfid = ((nfid - 1) < 0) ? funnel_index.length - 1 : nfid - 1;
                    myChart.setOption({
                        title: {
                            text: 'goods_id' + ': ' + funnel_index[nfid] + '\n No.' + (nfid + 1),
                        },
                        series: {
                            label: {
                                normal: {
                                    formatter: (show_percent) ? function(params) {
                                        const percent_name = params.name;
                                        const percent_index = funnel_percent_col.indexOf(percent_name);
                                        const spilt_name = percent_name.split('/');
                                        const data1_name = spilt_name[0];
                                        const data2_name = spilt_name[1];
                                        const data1_index = funnel_data_col.indexOf(data1_name);
                                        const data2_index = funnel_data_col.indexOf(data2_name);
                                        let str = data2_name + ': ' + funnel_data[nfid][data2_index] + '\n';
                                        str += funnel_percent[nfid][percent_index] + '%\n';
                                        str += data1_name + ': ' + funnel_data[nfid][data1_index];
                                        return str;
                                    } : function(params) {
                                        const data_name = params.name;
                                        const data_index = funnel_data_col.indexOf(data_name);
                                        return data_name + '\n' + funnel_data[nfid][data_index];
                                    },
                                }
                            },
                            data: (show_percent) ? formatShowData(funnel_percent_col, funnel_percent[nfid]) : formatShowData(funnel_data_col, funnel_data[nfid]),
                        }
                    });
                }
            },
            myTool3: {
                show: true,
                title: 'goods_id' + ' next',
                icon: 'path://M573.056 752l308.8-404.608A76.8 76.8 0 0 0 820.736 224H203.232a76.8 76.8 0 0 0-61.056 123.392l308.8 404.608a76.8 76.8 0 0 0 122.08 0z',
                iconStyle: {
                    color: '#cdcdcd'
                },
                onclick: function() {
                    nfid = ((nfid + 1) === funnel_index.length) ? 0 : nfid + 1;
                    myChart.setOption({
                        title: {
                            text: 'goods_id' + ': ' + funnel_index[nfid] + '\n No.' + (nfid + 1),
                        },
                        series: {
                            label: {
                                normal: {
                                    formatter: (show_percent) ? function(params) {
                                        const percent_name = params.name;
                                        const percent_index = funnel_percent_col.indexOf(percent_name);
                                        const spilt_name = percent_name.split('/');
                                        const data1_name = spilt_name[0];
                                        const data2_name = spilt_name[1];
                                        const data1_index = funnel_data_col.indexOf(data1_name);
                                        const data2_index = funnel_data_col.indexOf(data2_name);
                                        let str = data2_name + ': ' + funnel_data[nfid][data2_index] + '\n';
                                        str += funnel_percent[nfid][percent_index] + '%\n';
                                        str += data1_name + ': ' + funnel_data[nfid][data1_index];
                                        return str;
                                    } : function(params) {
                                        const data_name = params.name;
                                        const data_index = funnel_data_col.indexOf(data_name);
                                        return data_name + '\n' + funnel_data[nfid][data_index];
                                    },
                                }
                            },
                            data: (show_percent) ? formatShowData(funnel_percent_col, funnel_percent[nfid]) : formatShowData(funnel_data_col, funnel_data[nfid]),
                        }
                    });
                }
            }
        },
        top: '3%',
        right: '3%'
    },
    tooltip: {
        trigger: 'item',
        formatter: function(params) {
            const name = params.name;
            let str = name + '<br/>';
            const tooltip_index = (show_percent) ? funnel_percent_col.indexOf(name) : funnel_data_col.indexOf(name);
            const data = (show_percent) ? 'CR: ' + funnel_percent[nfid][tooltip_index] + '%' : funnel_data[nfid][tooltip_index];
            str += data + '<br/>';
            return str;
        },
        confine: true
    },
    legend: {
        data: (show_percent) ? funnel_percent_col : funnel_data_col,
        selectedMode: false
    },
    calculable: true,
    series: {
        name: funnel_index[nfid],
        type: 'funnel',
        left: '10%',
        top: '10%',
        width: '80%',
        minSize: (show_percent) ? Math.min(...funnel_percent[nfid]) + '%' : Math.min(...funnel_data[nfid]),
        sort: 'none',
        gap: 2,
        label: {
            normal: {
                show: true,
                position: 'inside',
                formatter: (show_percent) ? function(params) {
                    const percent_name = params.name;
                    const percent_index = funnel_percent_col.indexOf(percent_name);
                    const spilt_name = percent_name.split('/');
                    const data1_name = spilt_name[0];
                    const data2_name = spilt_name[1];
                    const data1_index = funnel_data_col.indexOf(data1_name);
                    const data2_index = funnel_data_col.indexOf(data2_name);
                    let str = data2_name + ': ' + funnel_data[nfid][data2_index] + '\n';
                    str += funnel_percent[nfid][percent_index] + '%\n';
                    str += data1_name + ': ' + funnel_data[nfid][data1_index];
                    return str;
                } : function(params) {
                    const data_name = params.name;
                    const data_index = funnel_data_col.indexOf(data_name);
                    return data_name + '\n' + funnel_data[nfid][data_index];
                },
            },
            emphasis: {
                textStyle: {
                    fontSize: 20,
                },
            },
        },
        labelLine: {
            normal: {
                length: 30,
                lineStyle: {
                    width: 3,
                    type: 'solid',
                },
            },
        },
        itemStyle: {
            normal: {
                borderColor: '#fff',
                borderWidth: 1,
            },
        },
        data: (show_percent) ? formatShowData(funnel_percent_col, funnel_percent[nfid]) : formatShowData(funnel_data_col, funnel_data[nfid]),
    }
};