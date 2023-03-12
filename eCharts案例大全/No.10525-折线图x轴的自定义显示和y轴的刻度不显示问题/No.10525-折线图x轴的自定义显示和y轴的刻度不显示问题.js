option = {
    tooltip: {
        trigger: 'axis',
        backgroundColor: '#EC5353',
        position: function(point, params, dom, rect, size) {
            // 固定在顶部
            return [point[0], '0%'];
        },
        formatter: function(params, ticket, callback) {
            that.priceDate = {
                todayTime: params[0].name.todayTime,
                todayDataPrice: params[0].name.todayDataPrice,
                yesterdayTime: params[0].name.yesterdayTime,
                yesterdayDataPrice: params[0].name.yesterdayDataPrice
            }
            var res = params[0].name.xDate;
            return res
        }
    },
    toolbox: {
        show: true
    },
    xAxis: {
        type: 'category',
        boundaryGap: ['1%', '1%'],
        triggerEvent: true,
        axisTick: {
            show: false,
            length: 6,
            feature: {
                dataZoom: {
                    yAxisIndex: 'none'
                },
                dataView: {
                    readOnly: false
                },
                magicType: {
                    type: ['line', 'bar']
                },
                restore: {},
                saveAsImage: {}
            }
        },
        axisLine: {
            lineStyle: {
                type: 'solid',
                color: '#eaeaea', //左边线的颜色
                width: '1' //坐标线的宽度
            }
        },
        axisLabel: {
            textStyle: {
                color: '#000', //坐标值得具体的颜色
            },
            formatter: function(value, index) {
                return value.xDate;

            }
        },
        data: [{
            "value": {
                "week": 3,
                "todayTime": 1532966400000,
                "yesterdayTime": 1533052800000,
                "todayDataPrice": 670.84,
                "yesterdayDataPrice": 755.89,
                "xDate": "07-31",
                "name": "18-08",
                "yearDate": "07-31",
                "weekTime": 3
            }
        }, {
            "value": {
                "week": 4,
                "todayTime": 1533052800000,
                "yesterdayTime": 1533139200000,
                "todayDataPrice": 755.89,
                "yesterdayDataPrice": 697.61,
                "xDate": "08-01",
                "name": "18-08"
            }
        }, {
            "value": {
                "week": 5,
                "todayTime": 1533139200000,
                "yesterdayTime": 1533225600000,
                "todayDataPrice": 697.61,
                "yesterdayDataPrice": 434.77,
                "xDate": "08-02",
                "name": "18-08"
            }
        }, {
            "value": {
                "week": 6,
                "todayTime": 1533225600000,
                "yesterdayTime": 1533312000000,
                "todayDataPrice": 434.77,
                "yesterdayDataPrice": 1180.82,
                "xDate": "08-03",
                "name": "18-08"
            }
        }, {
            "value": {
                "week": 0,
                "todayTime": 1533312000000,
                "yesterdayTime": 1533398400000,
                "todayDataPrice": 1180.82,
                "yesterdayDataPrice": 691.84,
                "xDate": "08-04",
                "name": "18-08"
            }
        }, {
            "value": {
                "week": 1,
                "todayTime": 1533398400000,
                "yesterdayTime": 1533484800000,
                "todayDataPrice": 691.84,
                "yesterdayDataPrice": 1176.84,
                "xDate": "08-05",
                "name": "18-08"
            }
        }, {
            "value": {
                "week": 2,
                "todayTime": 1533484800000,
                "yesterdayTime": 1533571200000,
                "todayDataPrice": 1176.84,
                "yesterdayDataPrice": 863.58,
                "xDate": "08-06",
                "name": "18-08"
            }
        }, {
            "value": {
                "week": 3,
                "todayTime": 1533571200000,
                "yesterdayTime": 1533657600000,
                "todayDataPrice": 863.58,
                "yesterdayDataPrice": 677.29,
                "xDate": "08-07",
                "name": "18-08"
            }
        }, {
            "value": {
                "week": 4,
                "todayTime": 1533657600000,
                "yesterdayTime": 1533744000000,
                "todayDataPrice": 677.29,
                "yesterdayDataPrice": 1156.84,
                "xDate": "08-08",
                "name": "18-08"
            }
        }, {
            "value": {
                "week": 5,
                "todayTime": 1533744000000,
                "yesterdayTime": 1533830400000,
                "todayDataPrice": 1156.84,
                "yesterdayDataPrice": 820.92,
                "xDate": "08-09",
                "name": "18-08"
            }
        }, {
            "value": {
                "week": 6,
                "todayTime": 1533830400000,
                "yesterdayTime": 1533916800000,
                "todayDataPrice": 820.92,
                "yesterdayDataPrice": 544.27,
                "xDate": "08-10",
                "name": "18-08"
            }
        }, {
            "value": {
                "week": 0,
                "todayTime": 1533916800000,
                "yesterdayTime": 1534003200000,
                "todayDataPrice": 544.27,
                "yesterdayDataPrice": 1065.67,
                "xDate": "08-11",
                "name": "18-08"
            }
        }, {
            "value": {
                "week": 1,
                "todayTime": 1534003200000,
                "yesterdayTime": 1534089600000,
                "todayDataPrice": 1065.67,
                "yesterdayDataPrice": 843.84,
                "xDate": "08-12",
                "name": "18-08"
            }
        }, {
            "value": {
                "week": 2,
                "todayTime": 1534089600000,
                "yesterdayTime": 1534176000000,
                "todayDataPrice": 843.84,
                "yesterdayDataPrice": 809.46,
                "xDate": "08-13",
                "name": "18-08"
            }
        }, {
            "value": {
                "week": 3,
                "todayTime": 1534176000000,
                "yesterdayTime": 1534262400000,
                "todayDataPrice": 809.46,
                "yesterdayDataPrice": 673.98,
                "xDate": "08-14",
                "name": "18-08"
            }
        }, {
            "value": {
                "week": 4,
                "todayTime": 1534262400000,
                "yesterdayTime": 1534348800000,
                "todayDataPrice": 673.98,
                "yesterdayDataPrice": 1071.53,
                "xDate": "08-15",
                "name": "18-08"
            }
        }, {
            "value": {
                "week": 5,
                "todayTime": 1534348800000,
                "yesterdayTime": 1534435200000,
                "todayDataPrice": 1071.53,
                "yesterdayDataPrice": 627.79,
                "xDate": "08-16",
                "name": "18-08"
            }
        }, {
            "value": {
                "week": 6,
                "todayTime": 1534435200000,
                "yesterdayTime": 1534521600000,
                "todayDataPrice": 627.79,
                "yesterdayDataPrice": 915.61,
                "xDate": "08-17",
                "name": "18-08"
            }
        }, {
            "value": {
                "week": 0,
                "todayTime": 1534521600000,
                "yesterdayTime": 1534608000000,
                "todayDataPrice": 915.61,
                "yesterdayDataPrice": 202.94,
                "xDate": "08-18",
                "name": "18-08"
            }
        }, {
            "value": {
                "week": 1,
                "todayTime": 1534608000000,
                "yesterdayTime": 1534694400000,
                "todayDataPrice": 202.94,
                "yesterdayDataPrice": 404.61,
                "xDate": "08-19",
                "name": "18-08"
            }
        }, {
            "value": {
                "week": 2,
                "todayTime": 1534694400000,
                "yesterdayTime": 1534780800000,
                "todayDataPrice": 404.61,
                "yesterdayDataPrice": 564.23,
                "xDate": "08-20",
                "name": "18-08"
            }
        }, {
            "value": {
                "week": 3,
                "todayTime": 1534780800000,
                "yesterdayTime": 1534867200000,
                "todayDataPrice": 564.23,
                "yesterdayDataPrice": 1104.77,
                "xDate": "08-21",
                "name": "18-08"
            }
        }, {
            "value": {
                "week": 4,
                "todayTime": 1534867200000,
                "yesterdayTime": 1534953600000,
                "todayDataPrice": 1104.77,
                "yesterdayDataPrice": 518.5,
                "xDate": "08-22",
                "name": "18-08"
            }
        }, {
            "value": {
                "week": 5,
                "todayTime": 1534953600000,
                "yesterdayTime": 1535040000000,
                "todayDataPrice": 518.5,
                "yesterdayDataPrice": 817.56,
                "xDate": "08-23",
                "name": "18-08"
            }
        }, {
            "value": {
                "week": 6,
                "todayTime": 1535040000000,
                "yesterdayTime": 1535126400000,
                "todayDataPrice": 817.56,
                "yesterdayDataPrice": 420.38,
                "xDate": "08-24",
                "name": "18-08"
            }
        }, {
            "value": {
                "week": 0,
                "todayTime": 1535126400000,
                "yesterdayTime": 1535212800000,
                "todayDataPrice": 420.38,
                "yesterdayDataPrice": 1108.8,
                "xDate": "08-25",
                "name": "18-08"
            }
        }, {
            "value": {
                "week": 1,
                "todayTime": 1535212800000,
                "yesterdayTime": 1535299200000,
                "todayDataPrice": 1108.8,
                "yesterdayDataPrice": 487.07,
                "xDate": "08-26",
                "name": "18-08"
            }
        }, {
            "value": {
                "week": 2,
                "todayTime": 1535299200000,
                "yesterdayTime": 1535385600000,
                "todayDataPrice": 487.07,
                "yesterdayDataPrice": 857.72,
                "xDate": "08-27",
                "name": "18-08"
            }
        }, {
            "value": {
                "week": 3,
                "todayTime": 1535385600000,
                "yesterdayTime": 1535472000000,
                "todayDataPrice": 857.72,
                "yesterdayDataPrice": 923.12,
                "xDate": "08-28",
                "name": "18-08"
            }
        }, {
            "value": {
                "week": 4,
                "todayTime": 1535472000000,
                "yesterdayTime": 1535558400000,
                "todayDataPrice": 923.12,
                "yesterdayDataPrice": 981.72,
                "xDate": "08-29",
                "name": "18-08"
            }
        }, {
            "value": {
                "week": 5,
                "todayTime": 1535558400000,
                "yesterdayTime": 1535644800000,
                "todayDataPrice": 981.72,
                "yesterdayDataPrice": 695.25,
                "xDate": "08-30",
                "name": "18-08"
            }
        }, {
            "value": {
                "week": 6,
                "todayTime": 1535644800000,
                "yesterdayTime": 1535731200000,
                "todayDataPrice": 695.25,
                "yesterdayDataPrice": 455.55,
                "xDate": "08-31",
                "name": "18-09"
            }
        }, {
            "value": {
                "week": 0,
                "todayTime": 1535731200000,
                "yesterdayTime": 1535817600000,
                "todayDataPrice": 455.55,
                "yesterdayDataPrice": 964.18,
                "xDate": "09-01",
                "name": "18-09"
            }
        }, {
            "value": {
                "week": 1,
                "todayTime": 1535817600000,
                "yesterdayTime": 1535904000000,
                "todayDataPrice": 964.18,
                "yesterdayDataPrice": 972.1,
                "xDate": "09-02",
                "name": "18-09"
            }
        }, {
            "value": {
                "week": 2,
                "todayTime": 1535904000000,
                "yesterdayTime": 1535990400000,
                "todayDataPrice": 972.1,
                "yesterdayDataPrice": 396.65,
                "xDate": "09-03",
                "name": "18-09"
            }
        }, {
            "value": {
                "week": 3,
                "todayTime": 1535990400000,
                "yesterdayTime": 1536076800000,
                "todayDataPrice": 396.65,
                "yesterdayDataPrice": 1056.13,
                "xDate": "09-04",
                "name": "18-09"
            }
        }, {
            "value": {
                "week": 4,
                "todayTime": 1536076800000,
                "yesterdayTime": 1536163200000,
                "todayDataPrice": 1056.13,
                "yesterdayDataPrice": 527.08,
                "xDate": "09-05",
                "name": "18-09"
            }
        }, {
            "value": {
                "week": 5,
                "todayTime": 1536163200000,
                "yesterdayTime": 1536249600000,
                "todayDataPrice": 527.08,
                "yesterdayDataPrice": 1095.11,
                "xDate": "09-06",
                "name": "18-09"
            }
        }, {
            "value": {
                "week": 6,
                "todayTime": 1536249600000,
                "yesterdayTime": 1536336000000,
                "todayDataPrice": 1095.11,
                "yesterdayDataPrice": 304.2,
                "xDate": "09-07",
                "name": "18-09"
            }
        }, {
            "value": {
                "week": 0,
                "todayTime": 1536336000000,
                "yesterdayTime": 1536422400000,
                "todayDataPrice": 304.2,
                "yesterdayDataPrice": 782.98,
                "xDate": "09-08",
                "name": "18-09"
            }
        }, {
            "value": {
                "week": 1,
                "todayTime": 1536422400000,
                "yesterdayTime": 1536508800000,
                "todayDataPrice": 782.98,
                "yesterdayDataPrice": 1093.62,
                "xDate": "09-09",
                "name": "18-09"
            }
        }, {
            "value": {
                "week": 2,
                "todayTime": 1536508800000,
                "yesterdayTime": 1536595200000,
                "todayDataPrice": 1093.62,
                "yesterdayDataPrice": 553.98,
                "xDate": "09-10",
                "name": "18-09"
            }
        }, {
            "value": {
                "week": 3,
                "todayTime": 1536595200000,
                "yesterdayTime": 1536681600000,
                "todayDataPrice": 553.98,
                "yesterdayDataPrice": 970.93,
                "xDate": "09-11",
                "name": "18-09"
            }
        }, {
            "value": {
                "week": 4,
                "todayTime": 1536681600000,
                "yesterdayTime": 1536768000000,
                "todayDataPrice": 970.93,
                "yesterdayDataPrice": 1124,
                "xDate": "09-12",
                "name": "18-09"
            }
        }, {
            "value": {
                "week": 5,
                "todayTime": 1536768000000,
                "yesterdayTime": 1536854400000,
                "todayDataPrice": 1124,
                "yesterdayDataPrice": 749.7,
                "xDate": "09-13",
                "name": "18-09"
            }
        }, {
            "value": {
                "week": 6,
                "todayTime": 1536854400000,
                "yesterdayTime": 1536940800000,
                "todayDataPrice": 749.7,
                "yesterdayDataPrice": 645.73,
                "xDate": "09-14",
                "name": "18-09"
            }
        }, {
            "value": {
                "week": 0,
                "todayTime": 1536940800000,
                "yesterdayTime": 1537027200000,
                "todayDataPrice": 645.73,
                "yesterdayDataPrice": 1072.93,
                "xDate": "09-15",
                "name": "18-09"
            }
        }, {
            "value": {
                "week": 1,
                "todayTime": 1537027200000,
                "yesterdayTime": 1537113600000,
                "todayDataPrice": 1072.93,
                "yesterdayDataPrice": 849.3,
                "xDate": "09-16",
                "name": "18-09"
            }
        }, {
            "value": {
                "week": 2,
                "todayTime": 1537113600000,
                "yesterdayTime": 1537200000000,
                "todayDataPrice": 849.3,
                "yesterdayDataPrice": 1140.66,
                "xDate": "09-17",
                "name": "18-09"
            }
        }, {
            "value": {
                "week": 3,
                "todayTime": 1537200000000,
                "yesterdayTime": 1537286400000,
                "todayDataPrice": 1140.66,
                "yesterdayDataPrice": 990.3,
                "xDate": "09-18",
                "name": "18-09"
            }
        }, {
            "value": {
                "week": 4,
                "todayTime": 1537286400000,
                "yesterdayTime": 1537372800000,
                "todayDataPrice": 990.3,
                "yesterdayDataPrice": 448.51,
                "xDate": "09-19",
                "name": "18-09"
            }
        }, {
            "value": {
                "week": 5,
                "todayTime": 1537372800000,
                "yesterdayTime": 1537459200000,
                "todayDataPrice": 448.51,
                "yesterdayDataPrice": 309,
                "xDate": "09-20",
                "name": "18-09"
            }
        }, {
            "value": {
                "week": 6,
                "todayTime": 1537459200000,
                "yesterdayTime": 1537545600000,
                "todayDataPrice": 309,
                "yesterdayDataPrice": 826.06,
                "xDate": "09-21",
                "name": "18-09"
            }
        }, {
            "value": {
                "week": 0,
                "todayTime": 1537545600000,
                "yesterdayTime": 1537632000000,
                "todayDataPrice": 826.06,
                "yesterdayDataPrice": 845.01,
                "xDate": "09-22",
                "name": "18-09"
            }
        }, {
            "value": {
                "week": 1,
                "todayTime": 1537632000000,
                "yesterdayTime": 1537718400000,
                "todayDataPrice": 845.01,
                "yesterdayDataPrice": 256.34,
                "xDate": "09-23",
                "name": "18-09"
            }
        }, {
            "value": {
                "week": 2,
                "todayTime": 1537718400000,
                "yesterdayTime": 1537804800000,
                "todayDataPrice": 256.34,
                "yesterdayDataPrice": 916.51,
                "xDate": "09-24",
                "name": "18-09"
            }
        }, {
            "value": {
                "week": 3,
                "todayTime": 1537804800000,
                "yesterdayTime": 1537891200000,
                "todayDataPrice": 916.51,
                "yesterdayDataPrice": 451.83,
                "xDate": "09-25",
                "name": "18-09"
            }
        }, {
            "value": {
                "week": 4,
                "todayTime": 1537891200000,
                "yesterdayTime": 1537977600000,
                "todayDataPrice": 451.83,
                "yesterdayDataPrice": 907.88,
                "xDate": "09-26",
                "name": "18-09"
            }
        }, {
            "value": {
                "week": 5,
                "todayTime": 1537977600000,
                "yesterdayTime": 1538064000000,
                "todayDataPrice": 907.88,
                "yesterdayDataPrice": 1092.97,
                "xDate": "09-27",
                "name": "18-09"
            }
        }, {
            "value": {
                "week": 6,
                "todayTime": 1538064000000,
                "yesterdayTime": 1538150400000,
                "todayDataPrice": 1092.97,
                "yesterdayDataPrice": 498.52,
                "xDate": "09-28",
                "name": "18-09"
            }
        }, {
            "value": {
                "week": 0,
                "todayTime": 1538150400000,
                "yesterdayTime": 1538236800000,
                "todayDataPrice": 498.52,
                "yesterdayDataPrice": 494.51,
                "xDate": "09-29",
                "name": "18-09"
            }
        }, {
            "value": {
                "week": 1,
                "todayTime": 1538236800000,
                "yesterdayTime": 1538323200000,
                "todayDataPrice": 494.51,
                "yesterdayDataPrice": 373.73,
                "xDate": "09-30",
                "name": "18-10"
            }
        }, {
            "value": {
                "week": 2,
                "todayTime": 1538323200000,
                "yesterdayTime": 1538409600000,
                "todayDataPrice": 373.73,
                "yesterdayDataPrice": 356.06,
                "xDate": "10-01",
                "name": "18-10"
            }
        }, {
            "value": {
                "week": 3,
                "todayTime": 1538409600000,
                "yesterdayTime": 1538496000000,
                "todayDataPrice": 356.06,
                "yesterdayDataPrice": 287.94,
                "xDate": "10-02",
                "name": "18-10"
            }
        }, {
            "value": {
                "week": 4,
                "todayTime": 1538496000000,
                "yesterdayTime": 1538582400000,
                "todayDataPrice": 287.94,
                "yesterdayDataPrice": 1138.27,
                "xDate": "10-03",
                "name": "18-10"
            }
        }, {
            "value": {
                "week": 5,
                "todayTime": 1538582400000,
                "yesterdayTime": 1538668800000,
                "todayDataPrice": 1138.27,
                "yesterdayDataPrice": 1085.95,
                "xDate": "10-04",
                "name": "18-10"
            }
        }, {
            "value": {
                "week": 6,
                "todayTime": 1538668800000,
                "yesterdayTime": 1538755200000,
                "todayDataPrice": 1085.95,
                "yesterdayDataPrice": 555.27,
                "xDate": "10-05",
                "name": "18-10"
            }
        }, {
            "value": {
                "week": 0,
                "todayTime": 1538755200000,
                "yesterdayTime": 1538841600000,
                "todayDataPrice": 555.27,
                "yesterdayDataPrice": 649.14,
                "xDate": "10-06",
                "name": "18-10"
            }
        }, {
            "value": {
                "week": 1,
                "todayTime": 1538841600000,
                "yesterdayTime": 1538928000000,
                "todayDataPrice": 649.14,
                "yesterdayDataPrice": 1119.56,
                "xDate": "10-07",
                "name": "18-10"
            }
        }, {
            "value": {
                "week": 2,
                "todayTime": 1538928000000,
                "yesterdayTime": 1539014400000,
                "todayDataPrice": 1119.56,
                "yesterdayDataPrice": 424.91,
                "xDate": "10-08",
                "name": "18-10"
            }
        }, {
            "value": {
                "week": 3,
                "todayTime": 1539014400000,
                "yesterdayTime": 1539100800000,
                "todayDataPrice": 424.91,
                "yesterdayDataPrice": 655.97,
                "xDate": "10-09",
                "name": "18-10"
            }
        }, {
            "value": {
                "week": 4,
                "todayTime": 1539100800000,
                "yesterdayTime": 1539187200000,
                "todayDataPrice": 655.97,
                "yesterdayDataPrice": 1157.61,
                "xDate": "10-10",
                "name": "18-10"
            }
        }, {
            "value": {
                "week": 5,
                "todayTime": 1539187200000,
                "yesterdayTime": 1539273600000,
                "todayDataPrice": 1157.61,
                "yesterdayDataPrice": 1117.36,
                "xDate": "10-11",
                "name": "18-10",
                "yearDate": "10-11",
                "weekTime": 3
            }
        }, {
            "value": {
                "week": 6,
                "todayTime": 1539273600000,
                "yesterdayTime": 1539360000000,
                "todayDataPrice": 1117.36,
                "yesterdayDataPrice": 1090.32,
                "xDate": "10-12",
                "name": "18-10"
            }
        }, {
            "value": {
                "week": 0,
                "todayTime": 1539360000000,
                "yesterdayTime": 1539446400000,
                "todayDataPrice": 1090.32,
                "yesterdayDataPrice": 893.86,
                "xDate": "10-13",
                "name": "18-10"
            }
        }, {
            "value": {
                "week": 1,
                "todayTime": 1539446400000,
                "yesterdayTime": 1539532800000,
                "todayDataPrice": 893.86,
                "yesterdayDataPrice": 406.46,
                "xDate": "10-14",
                "name": "18-10"
            }
        }, {
            "value": {
                "week": 2,
                "todayTime": 1539532800000,
                "yesterdayTime": 1539619200000,
                "todayDataPrice": 406.46,
                "yesterdayDataPrice": 479.38,
                "xDate": "10-15",
                "name": "18-10"
            }
        }, {
            "value": {
                "week": 3,
                "todayTime": 1539619200000,
                "yesterdayTime": 1539705600000,
                "todayDataPrice": 479.38,
                "yesterdayDataPrice": 1170.47,
                "xDate": "10-16",
                "name": "18-10"
            }
        }, {
            "value": {
                "week": 4,
                "todayTime": 1539705600000,
                "yesterdayTime": 1539792000000,
                "todayDataPrice": 1170.47,
                "yesterdayDataPrice": 819.74,
                "xDate": "10-17",
                "name": "18-10"
            }
        }, {
            "value": {
                "week": 5,
                "todayTime": 1539792000000,
                "yesterdayTime": 1539878400000,
                "todayDataPrice": 819.74,
                "yesterdayDataPrice": 882.52,
                "xDate": "10-18",
                "name": "18-10"
            }
        }, {
            "value": {
                "week": 6,
                "todayTime": 1539878400000,
                "yesterdayTime": 1539964800000,
                "todayDataPrice": 882.52,
                "yesterdayDataPrice": 754.42,
                "xDate": "10-19",
                "name": "18-10"
            }
        }, {
            "value": {
                "week": 0,
                "todayTime": 1539964800000,
                "yesterdayTime": 1540051200000,
                "todayDataPrice": 754.42,
                "yesterdayDataPrice": 845.09,
                "xDate": "10-20",
                "name": "18-10"
            }
        }, {
            "value": {
                "week": 1,
                "todayTime": 1540051200000,
                "yesterdayTime": 1540137600000,
                "todayDataPrice": 845.09,
                "yesterdayDataPrice": 623.65,
                "xDate": "10-21",
                "name": "18-10"
            }
        }, {
            "value": {
                "week": 2,
                "todayTime": 1540137600000,
                "yesterdayTime": 1540224000000,
                "todayDataPrice": 623.65,
                "yesterdayDataPrice": 442.87,
                "xDate": "10-22",
                "name": "18-10"
            }
        }, {
            "value": {
                "week": 3,
                "todayTime": 1540224000000,
                "yesterdayTime": 1540310400000,
                "todayDataPrice": 442.87,
                "yesterdayDataPrice": 651.44,
                "xDate": "10-23",
                "name": "18-10"
            }
        }, {
            "value": {
                "week": 4,
                "todayTime": 1540310400000,
                "yesterdayTime": 1540396800000,
                "todayDataPrice": 651.44,
                "yesterdayDataPrice": 741.7,
                "xDate": "10-24",
                "name": "18-10"
            }
        }, {
            "value": {
                "week": 5,
                "todayTime": 1540396800000,
                "yesterdayTime": 1540483200000,
                "todayDataPrice": 741.7,
                "yesterdayDataPrice": 1046.54,
                "xDate": "10-25",
                "name": "18-10"
            }
        }, {
            "value": {
                "week": 6,
                "todayTime": 1540483200000,
                "yesterdayTime": 1540569600000,
                "todayDataPrice": 1046.54,
                "yesterdayDataPrice": 330.12,
                "xDate": "10-26",
                "name": "18-10"
            }
        }, {
            "value": {
                "week": 0,
                "todayTime": 1540569600000,
                "yesterdayTime": 1540656000000,
                "todayDataPrice": 330.12,
                "yesterdayDataPrice": 663.23,
                "xDate": "10-27",
                "name": "18-10"
            }
        }, {
            "value": {
                "week": 1,
                "todayTime": 1540656000000,
                "yesterdayTime": 1540742400000,
                "todayDataPrice": 663.23,
                "yesterdayDataPrice": 356.77,
                "xDate": "10-28",
                "name": "18-10"
            }
        }, {
            "value": {
                "week": 2,
                "todayTime": 1540742400000,
                "yesterdayTime": 1540828800000,
                "todayDataPrice": 356.77,
                "yesterdayDataPrice": 414.99,
                "xDate": "10-29",
                "name": "18-10"
            }
        }, {
            "value": {
                "week": 3,
                "todayTime": 1540828800000,
                "yesterdayTime": 1540915200000,
                "todayDataPrice": 414.99,
                "yesterdayDataPrice": 290.44,
                "xDate": "10-30",
                "name": "18-10"
            }
        }, {
            "value": {
                "week": 4,
                "todayTime": 1540915200000,
                "yesterdayTime": 1541001600000,
                "todayDataPrice": 290.44,
                "yesterdayDataPrice": 680.03,
                "xDate": "10-31",
                "name": "18-11"
            }
        }, {
            "value": {
                "week": 5,
                "todayTime": 1541001600000,
                "yesterdayTime": 1541088000000,
                "todayDataPrice": 680.03,
                "yesterdayDataPrice": 1063.28,
                "xDate": "11-01",
                "name": "18-11"
            }
        }, {
            "value": {
                "week": 6,
                "todayTime": 1541088000000,
                "yesterdayTime": 1541174400000,
                "todayDataPrice": 1063.28,
                "yesterdayDataPrice": 531.01,
                "xDate": "11-02",
                "name": "18-11"
            }
        }, {
            "value": {
                "week": 0,
                "todayTime": 1541174400000,
                "yesterdayTime": 1541260800000,
                "todayDataPrice": 531.01,
                "yesterdayDataPrice": 203.48,
                "xDate": "11-03",
                "name": "18-11"
            }
        }, {
            "value": {
                "week": 1,
                "todayTime": 1541260800000,
                "yesterdayTime": 1541347200000,
                "todayDataPrice": 203.48,
                "yesterdayDataPrice": 473.91,
                "xDate": "11-04",
                "name": "18-11"
            }
        }, {
            "value": {
                "week": 2,
                "todayTime": 1541347200000,
                "yesterdayTime": 1541433600000,
                "todayDataPrice": 473.91,
                "yesterdayDataPrice": 1055.68,
                "xDate": "11-05",
                "name": "18-11"
            }
        }, {
            "value": {
                "week": 3,
                "todayTime": 1541433600000,
                "yesterdayTime": 1541520000000,
                "todayDataPrice": 1055.68,
                "yesterdayDataPrice": 313.69,
                "xDate": "11-06",
                "name": "18-11"
            }
        }, {
            "value": {
                "week": 4,
                "todayTime": 1541520000000,
                "yesterdayTime": 1541606400000,
                "todayDataPrice": 313.69,
                "yesterdayDataPrice": 696.35,
                "xDate": "11-07",
                "name": "18-11"
            }
        }, {
            "value": {
                "week": 5,
                "todayTime": 1541606400000,
                "yesterdayTime": 1541692800000,
                "todayDataPrice": 696.35,
                "yesterdayDataPrice": 959.08,
                "xDate": "11-08",
                "name": "18-11"
            }
        }, {
            "value": {
                "week": 6,
                "todayTime": 1541692800000,
                "yesterdayTime": 1541779200000,
                "todayDataPrice": 959.08,
                "yesterdayDataPrice": 1130.71,
                "xDate": "11-09",
                "name": "18-11"
            }
        }, {
            "value": {
                "week": 0,
                "todayTime": 1541779200000,
                "yesterdayTime": 1541865600000,
                "todayDataPrice": 1130.71,
                "yesterdayDataPrice": 223.62,
                "xDate": "11-10",
                "name": "18-11"
            }
        }, {
            "value": {
                "week": 1,
                "todayTime": 1541865600000,
                "yesterdayTime": 1541952000000,
                "todayDataPrice": 223.62,
                "yesterdayDataPrice": 496.38,
                "xDate": "11-11",
                "name": "18-11"
            }
        }, {
            "value": {
                "week": 2,
                "todayTime": 1541952000000,
                "yesterdayTime": 1542038400000,
                "todayDataPrice": 496.38,
                "yesterdayDataPrice": 626.67,
                "xDate": "11-12",
                "name": "18-11"
            }
        }, {
            "value": {
                "week": 3,
                "todayTime": 1542038400000,
                "yesterdayTime": 1542124800000,
                "todayDataPrice": 626.67,
                "yesterdayDataPrice": 469.42,
                "xDate": "11-13",
                "name": "18-11"
            }
        }, {
            "value": {
                "week": 4,
                "todayTime": 1542124800000,
                "yesterdayTime": 1542211200000,
                "todayDataPrice": 469.42,
                "yesterdayDataPrice": 603.18,
                "xDate": "11-14",
                "name": "18-11"
            }
        }, {
            "value": {
                "week": 5,
                "todayTime": 1542211200000,
                "yesterdayTime": 1542297600000,
                "todayDataPrice": 603.18,
                "yesterdayDataPrice": 778.21,
                "xDate": "11-15",
                "name": "18-11"
            }
        }, {
            "value": {
                "week": 6,
                "todayTime": 1542297600000,
                "yesterdayTime": 1542384000000,
                "todayDataPrice": 778.21,
                "yesterdayDataPrice": 514.08,
                "xDate": "11-16",
                "name": "18-11"
            }
        }, {
            "value": {
                "week": 0,
                "todayTime": 1542384000000,
                "yesterdayTime": 1542470400000,
                "todayDataPrice": 514.08,
                "yesterdayDataPrice": 571.03,
                "xDate": "11-17",
                "name": "18-11"
            }
        }, {
            "value": {
                "week": 1,
                "todayTime": 1542470400000,
                "yesterdayTime": 1542556800000,
                "todayDataPrice": 571.03,
                "yesterdayDataPrice": 1137.4,
                "xDate": "11-18",
                "name": "18-11"
            }
        }, {
            "value": {
                "week": 2,
                "todayTime": 1542556800000,
                "yesterdayTime": 1542643200000,
                "todayDataPrice": 1137.4,
                "yesterdayDataPrice": 480.6,
                "xDate": "11-19",
                "name": "18-11"
            }
        }, {
            "value": {
                "week": 3,
                "todayTime": 1542643200000,
                "yesterdayTime": 1542729600000,
                "todayDataPrice": 480.6,
                "yesterdayDataPrice": 500.18,
                "xDate": "11-20",
                "name": "18-11"
            }
        }, {
            "value": {
                "week": 4,
                "todayTime": 1542729600000,
                "yesterdayTime": 1542816000000,
                "todayDataPrice": 500.18,
                "yesterdayDataPrice": 1193.24,
                "xDate": "11-21",
                "name": "18-11"
            }
        }, {
            "value": {
                "week": 5,
                "todayTime": 1542816000000,
                "yesterdayTime": 1542902400000,
                "todayDataPrice": 1193.24,
                "yesterdayDataPrice": 679.9,
                "xDate": "11-22",
                "name": "18-11"
            }
        }, {
            "value": {
                "week": 6,
                "todayTime": 1542902400000,
                "yesterdayTime": 1542988800000,
                "todayDataPrice": 679.9,
                "yesterdayDataPrice": 506.53,
                "xDate": "11-23",
                "name": "18-11"
            }
        }, {
            "value": {
                "week": 0,
                "todayTime": 1542988800000,
                "yesterdayTime": 1543075200000,
                "todayDataPrice": 506.53,
                "yesterdayDataPrice": 616.47,
                "xDate": "11-24",
                "name": "18-11"
            }
        }, {
            "value": {
                "week": 1,
                "todayTime": 1543075200000,
                "yesterdayTime": 1543161600000,
                "todayDataPrice": 616.47,
                "yesterdayDataPrice": 576.62,
                "xDate": "11-25",
                "name": "18-11"
            }
        }, {
            "value": {
                "week": 2,
                "todayTime": 1543161600000,
                "yesterdayTime": 1543248000000,
                "todayDataPrice": 576.62,
                "yesterdayDataPrice": 697.3,
                "xDate": "11-26",
                "name": "18-11"
            }
        }, {
            "value": {
                "week": 3,
                "todayTime": 1543248000000,
                "yesterdayTime": 1543334400000,
                "todayDataPrice": 697.3,
                "yesterdayDataPrice": 877.95,
                "xDate": "11-27",
                "name": "18-11"
            }
        }, {
            "value": {
                "week": 4,
                "todayTime": 1543334400000,
                "yesterdayTime": 1543420800000,
                "todayDataPrice": 877.95,
                "yesterdayDataPrice": 432.98,
                "xDate": "11-28",
                "name": "18-11"
            }
        }, {
            "value": {
                "week": 5,
                "todayTime": 1543420800000,
                "yesterdayTime": 1543507200000,
                "todayDataPrice": 432.98,
                "yesterdayDataPrice": 372.24,
                "xDate": "11-29",
                "name": "18-11"
            }
        }, {
            "value": {
                "week": 6,
                "todayTime": 1543507200000,
                "yesterdayTime": 1543593600000,
                "todayDataPrice": 372.24,
                "yesterdayDataPrice": 563.09,
                "xDate": "11-30",
                "name": "18-12"
            }
        }, {
            "value": {
                "week": 0,
                "todayTime": 1543593600000,
                "yesterdayTime": 1543680000000,
                "todayDataPrice": 563.09,
                "yesterdayDataPrice": 291.8,
                "xDate": "12-01",
                "name": "18-12"
            }
        }, {
            "value": {
                "week": 1,
                "todayTime": 1543680000000,
                "yesterdayTime": 1543766400000,
                "todayDataPrice": 291.8,
                "yesterdayDataPrice": 414.27,
                "xDate": "12-02",
                "name": "18-12"
            }
        }, {
            "value": {
                "week": 2,
                "todayTime": 1543766400000,
                "yesterdayTime": 1543852800000,
                "todayDataPrice": 414.27,
                "yesterdayDataPrice": 551.99,
                "xDate": "12-03",
                "name": "18-12"
            }
        }, {
            "value": {
                "week": 3,
                "todayTime": 1543852800000,
                "yesterdayTime": 1543939200000,
                "todayDataPrice": 551.99,
                "yesterdayDataPrice": 878.12,
                "xDate": "12-04",
                "name": "18-12"
            }
        }, {
            "value": {
                "week": 4,
                "todayTime": 1543939200000,
                "yesterdayTime": 1544025600000,
                "todayDataPrice": 878.12,
                "yesterdayDataPrice": 1119.26,
                "xDate": "12-05",
                "name": "18-12"
            }
        }, {
            "value": {
                "week": 5,
                "todayTime": 1544025600000,
                "yesterdayTime": 1544112000000,
                "todayDataPrice": 1119.26,
                "yesterdayDataPrice": 446.69,
                "xDate": "12-06",
                "name": "18-12"
            }
        }, {
            "value": {
                "week": 6,
                "todayTime": 1544112000000,
                "yesterdayTime": 1544198400000,
                "todayDataPrice": 446.69,
                "yesterdayDataPrice": 1160.22,
                "xDate": "12-07",
                "name": "18-12"
            }
        }, {
            "value": {
                "week": 0,
                "todayTime": 1544198400000,
                "yesterdayTime": 1544284800000,
                "todayDataPrice": 1160.22,
                "yesterdayDataPrice": 909.95,
                "xDate": "12-08",
                "name": "18-12"
            }
        }, {
            "value": {
                "week": 1,
                "todayTime": 1544284800000,
                "yesterdayTime": 1544371200000,
                "todayDataPrice": 909.95,
                "yesterdayDataPrice": 703.42,
                "xDate": "12-09",
                "name": "18-12"
            }
        }, {
            "value": {
                "week": 2,
                "todayTime": 1544371200000,
                "yesterdayTime": 1544457600000,
                "todayDataPrice": 703.42,
                "yesterdayDataPrice": 512.49,
                "xDate": "12-10",
                "name": "18-12"
            }
        }, {
            "value": {
                "week": 3,
                "todayTime": 1544457600000,
                "yesterdayTime": 1544544000000,
                "todayDataPrice": 512.49,
                "yesterdayDataPrice": 1063.29,
                "xDate": "12-11",
                "name": "18-12"
            }
        }, {
            "value": {
                "week": 4,
                "todayTime": 1544544000000,
                "yesterdayTime": 1544630400000,
                "todayDataPrice": 1063.29,
                "yesterdayDataPrice": 1127.19,
                "xDate": "12-12",
                "name": "18-12"
            }
        }, {
            "value": {
                "week": 5,
                "todayTime": 1544630400000,
                "yesterdayTime": 1544716800000,
                "todayDataPrice": 1127.19,
                "yesterdayDataPrice": 842.6,
                "xDate": "12-13",
                "name": "18-12"
            }
        }, {
            "value": {
                "week": 6,
                "todayTime": 1544716800000,
                "yesterdayTime": 1544803200000,
                "todayDataPrice": 842.6,
                "yesterdayDataPrice": 729.47,
                "xDate": "12-14",
                "name": "18-12"
            }
        }, {
            "value": {
                "week": 0,
                "todayTime": 1544803200000,
                "yesterdayTime": 1544889600000,
                "todayDataPrice": 729.47,
                "yesterdayDataPrice": 869.88,
                "xDate": "12-15",
                "name": "18-12"
            }
        }, {
            "value": {
                "week": 1,
                "todayTime": 1544889600000,
                "yesterdayTime": 1544976000000,
                "todayDataPrice": 869.88,
                "yesterdayDataPrice": 657.33,
                "xDate": "12-16",
                "name": "18-12"
            }
        }, {
            "value": {
                "week": 2,
                "todayTime": 1544976000000,
                "yesterdayTime": 1545062400000,
                "todayDataPrice": 657.33,
                "yesterdayDataPrice": 597.94,
                "xDate": "12-17",
                "name": "18-12"
            }
        }, {
            "value": {
                "week": 3,
                "todayTime": 1545062400000,
                "yesterdayTime": 1545148800000,
                "todayDataPrice": 597.94,
                "yesterdayDataPrice": 686.82,
                "xDate": "12-18",
                "name": "18-12"
            }
        }, {
            "value": {
                "week": 4,
                "todayTime": 1545148800000,
                "yesterdayTime": 1545235200000,
                "todayDataPrice": 686.82,
                "yesterdayDataPrice": 930.6,
                "xDate": "12-19",
                "name": "18-12"
            }
        }, {
            "value": {
                "week": 5,
                "todayTime": 1545235200000,
                "yesterdayTime": 1545321600000,
                "todayDataPrice": 930.6,
                "yesterdayDataPrice": 317.91,
                "xDate": "12-20",
                "name": "18-12"
            }
        }, {
            "value": {
                "week": 6,
                "todayTime": 1545321600000,
                "yesterdayTime": 1545408000000,
                "todayDataPrice": 317.91,
                "yesterdayDataPrice": 1033.26,
                "xDate": "12-21",
                "name": "18-12"
            }
        }, {
            "value": {
                "week": 0,
                "todayTime": 1545408000000,
                "yesterdayTime": 1545494400000,
                "todayDataPrice": 1033.26,
                "yesterdayDataPrice": 1188.44,
                "xDate": "12-22",
                "name": "18-12"
            }
        }, {
            "value": {
                "week": 1,
                "todayTime": 1545494400000,
                "yesterdayTime": 1545580800000,
                "todayDataPrice": 1188.44,
                "yesterdayDataPrice": 779.46,
                "xDate": "12-23",
                "name": "18-12",
                "yearDate": "12-23",
                "weekTime": 3
            }
        }, {
            "value": {
                "week": 2,
                "todayTime": 1545580800000,
                "yesterdayTime": 1545667200000,
                "todayDataPrice": 779.46,
                "yesterdayDataPrice": 661.09,
                "xDate": "12-24",
                "name": "18-12"
            }
        }, {
            "value": {
                "week": 3,
                "todayTime": 1545667200000,
                "yesterdayTime": 1545753600000,
                "todayDataPrice": 661.09,
                "yesterdayDataPrice": 1183.81,
                "xDate": "12-25",
                "name": "18-12"
            }
        }, {
            "value": {
                "week": 4,
                "todayTime": 1545753600000,
                "yesterdayTime": 1545840000000,
                "todayDataPrice": 1183.81,
                "yesterdayDataPrice": 1164.4,
                "xDate": "12-26",
                "name": "18-12"
            }
        }, {
            "value": {
                "week": 5,
                "todayTime": 1545840000000,
                "yesterdayTime": 1545926400000,
                "todayDataPrice": 1164.4,
                "yesterdayDataPrice": 552.5,
                "xDate": "12-27",
                "name": "18-12"
            }
        }, {
            "value": {
                "week": 6,
                "todayTime": 1545926400000,
                "yesterdayTime": 1546012800000,
                "todayDataPrice": 552.5,
                "yesterdayDataPrice": 230.12,
                "xDate": "12-28",
                "name": "18-12"
            }
        }, {
            "value": {
                "week": 0,
                "todayTime": 1546012800000,
                "yesterdayTime": 1546099200000,
                "todayDataPrice": 230.12,
                "yesterdayDataPrice": 457.72,
                "xDate": "12-29",
                "name": "18-12"
            }
        }, {
            "value": {
                "week": 1,
                "todayTime": 1546099200000,
                "yesterdayTime": 1546185600000,
                "todayDataPrice": 457.72,
                "yesterdayDataPrice": 629.56,
                "xDate": "12-30",
                "name": "18-12"
            }
        }, {
            "value": {
                "week": 2,
                "todayTime": 1546185600000,
                "yesterdayTime": 1546272000000,
                "todayDataPrice": 629.56,
                "yesterdayDataPrice": 810.48,
                "xDate": "12-31",
                "name": "19-01"
            }
        }, {
            "value": {
                "week": 3,
                "todayTime": 1546272000000,
                "yesterdayTime": 1546358400000,
                "todayDataPrice": 810.48,
                "yesterdayDataPrice": 954.13,
                "xDate": "01-01",
                "name": "19-01"
            }
        }, {
            "value": {
                "week": 4,
                "todayTime": 1546358400000,
                "yesterdayTime": 1546444800000,
                "todayDataPrice": 954.13,
                "yesterdayDataPrice": 800.07,
                "xDate": "01-02",
                "name": "19-01"
            }
        }, {
            "value": {
                "week": 5,
                "todayTime": 1546444800000,
                "yesterdayTime": 1546531200000,
                "todayDataPrice": 800.07,
                "yesterdayDataPrice": 1154.98,
                "xDate": "01-03",
                "name": "19-01"
            }
        }, {
            "value": {
                "week": 6,
                "todayTime": 1546531200000,
                "yesterdayTime": 1546617600000,
                "todayDataPrice": 1154.98,
                "yesterdayDataPrice": 803.18,
                "xDate": "01-04",
                "name": "19-01"
            }
        }, {
            "value": {
                "week": 0,
                "todayTime": 1546617600000,
                "yesterdayTime": 1546704000000,
                "todayDataPrice": 803.18,
                "yesterdayDataPrice": 303.59,
                "xDate": "01-05",
                "name": "19-01"
            }
        }, {
            "value": {
                "week": 1,
                "todayTime": 1546704000000,
                "yesterdayTime": 1546790400000,
                "todayDataPrice": 303.59,
                "yesterdayDataPrice": 293.9,
                "xDate": "01-06",
                "name": "19-01"
            }
        }, {
            "value": {
                "week": 2,
                "todayTime": 1546790400000,
                "yesterdayTime": 1546876800000,
                "todayDataPrice": 293.9,
                "yesterdayDataPrice": 373.64,
                "xDate": "01-07",
                "name": "19-01"
            }
        }, {
            "value": {
                "week": 3,
                "todayTime": 1546876800000,
                "yesterdayTime": 1546963200000,
                "todayDataPrice": 373.64,
                "yesterdayDataPrice": 541.45,
                "xDate": "01-08",
                "name": "19-01"
            }
        }, {
            "value": {
                "week": 4,
                "todayTime": 1546963200000,
                "yesterdayTime": 1547049600000,
                "todayDataPrice": 541.45,
                "yesterdayDataPrice": 494.21,
                "xDate": "01-09",
                "name": "19-01"
            }
        }, {
            "value": {
                "week": 5,
                "todayTime": 1547049600000,
                "yesterdayTime": 1547136000000,
                "todayDataPrice": 494.21,
                "yesterdayDataPrice": 436.38,
                "xDate": "01-10",
                "name": "19-01"
            }
        }, {
            "value": {
                "week": 6,
                "todayTime": 1547136000000,
                "yesterdayTime": 1547222400000,
                "todayDataPrice": 436.38,
                "yesterdayDataPrice": 566.4,
                "xDate": "01-11",
                "name": "19-01"
            }
        }, {
            "value": {
                "week": 0,
                "todayTime": 1547222400000,
                "yesterdayTime": 1547308800000,
                "todayDataPrice": 566.4,
                "yesterdayDataPrice": 1091.56,
                "xDate": "01-12",
                "name": "19-01"
            }
        }, {
            "value": {
                "week": 1,
                "todayTime": 1547308800000,
                "yesterdayTime": 1547395200000,
                "todayDataPrice": 1091.56,
                "yesterdayDataPrice": 660.48,
                "xDate": "01-13",
                "name": "19-01"
            }
        }, {
            "value": {
                "week": 2,
                "todayTime": 1547395200000,
                "yesterdayTime": 1547481600000,
                "todayDataPrice": 660.48,
                "yesterdayDataPrice": 1110.21,
                "xDate": "01-14",
                "name": "19-01"
            }
        }, {
            "value": {
                "week": 3,
                "todayTime": 1547481600000,
                "yesterdayTime": 1547568000000,
                "todayDataPrice": 1110.21,
                "yesterdayDataPrice": 367.04,
                "xDate": "01-15",
                "name": "19-01"
            }
        }, {
            "value": {
                "week": 4,
                "todayTime": 1547568000000,
                "yesterdayTime": 1547654400000,
                "todayDataPrice": 367.04,
                "yesterdayDataPrice": 272.47,
                "xDate": "01-16",
                "name": "19-01"
            }
        }, {
            "value": {
                "week": 5,
                "todayTime": 1547654400000,
                "yesterdayTime": 1547740800000,
                "todayDataPrice": 272.47,
                "yesterdayDataPrice": 522.75,
                "xDate": "01-17",
                "name": "19-01"
            }
        }, {
            "value": {
                "week": 6,
                "todayTime": 1547740800000,
                "yesterdayTime": 1547827200000,
                "todayDataPrice": 522.75,
                "yesterdayDataPrice": 271.58,
                "xDate": "01-18",
                "name": "19-01"
            }
        }, {
            "value": {
                "week": 0,
                "todayTime": 1547827200000,
                "yesterdayTime": 1547913600000,
                "todayDataPrice": 271.58,
                "yesterdayDataPrice": 1087.66,
                "xDate": "01-19",
                "name": "19-01"
            }
        }, {
            "value": {
                "week": 1,
                "todayTime": 1547913600000,
                "yesterdayTime": 1548000000000,
                "todayDataPrice": 1087.66,
                "yesterdayDataPrice": 422.5,
                "xDate": "01-20",
                "name": "19-01"
            }
        }, {
            "value": {
                "week": 2,
                "todayTime": 1548000000000,
                "yesterdayTime": 1548086400000,
                "todayDataPrice": 422.5,
                "yesterdayDataPrice": 643.17,
                "xDate": "01-21",
                "name": "19-01"
            }
        }, {
            "value": {
                "week": 3,
                "todayTime": 1548086400000,
                "yesterdayTime": 1548172800000,
                "todayDataPrice": 643.17,
                "yesterdayDataPrice": 595.54,
                "xDate": "01-22",
                "name": "19-01"
            }
        }, {
            "value": {
                "week": 4,
                "todayTime": 1548172800000,
                "yesterdayTime": 1548259200000,
                "todayDataPrice": 595.54,
                "yesterdayDataPrice": 1095.61,
                "xDate": "01-23",
                "name": "19-01"
            }
        }, {
            "value": {
                "week": 5,
                "todayTime": 1548259200000,
                "yesterdayTime": 1548345600000,
                "todayDataPrice": 1095.61,
                "yesterdayDataPrice": 1105.5,
                "xDate": "01-24",
                "name": "19-01"
            }
        }, {
            "value": {
                "week": 6,
                "todayTime": 1548345600000,
                "yesterdayTime": 1548432000000,
                "todayDataPrice": 1105.5,
                "yesterdayDataPrice": 905.53,
                "xDate": "01-25",
                "name": "19-01"
            }
        }, {
            "value": {
                "week": 0,
                "todayTime": 1548432000000,
                "yesterdayTime": 1548518400000,
                "todayDataPrice": 905.53,
                "yesterdayDataPrice": 758.25,
                "xDate": "01-26",
                "name": "19-01"
            }
        }, {
            "value": {
                "week": 1,
                "todayTime": 1548518400000,
                "yesterdayTime": 1548604800000,
                "todayDataPrice": 758.25,
                "yesterdayDataPrice": 1073.41,
                "xDate": "01-27",
                "name": "19-01"
            }
        }, {
            "value": {
                "week": 2,
                "todayTime": 1548604800000,
                "yesterdayTime": 1548691200000,
                "todayDataPrice": 1073.41,
                "yesterdayDataPrice": 549.87,
                "xDate": "01-28",
                "name": "19-01"
            }
        }, {
            "value": {
                "week": 3,
                "todayTime": 1548691200000,
                "yesterdayTime": 1548777600000,
                "todayDataPrice": 549.87,
                "yesterdayDataPrice": 363.2,
                "xDate": "01-29",
                "name": "19-01"
            }
        }, {
            "value": {
                "week": 4,
                "todayTime": 1548777600000,
                "yesterdayTime": 1548864000000,
                "todayDataPrice": 363.2,
                "yesterdayDataPrice": 692.7,
                "xDate": "01-30",
                "name": "19-01"
            }
        }, {
            "value": {
                "week": 5,
                "todayTime": 1548864000000,
                "yesterdayTime": 1548950400000,
                "todayDataPrice": 692.7,
                "yesterdayDataPrice": 860.54,
                "xDate": "01-31",
                "name": "19-02"
            }
        }, {
            "value": {
                "week": 6,
                "todayTime": 1548950400000,
                "yesterdayTime": 1549036800000,
                "todayDataPrice": 860.54,
                "yesterdayDataPrice": 255.15,
                "xDate": "02-01",
                "name": "19-02"
            }
        }, {
            "value": {
                "week": 0,
                "todayTime": 1549036800000,
                "yesterdayTime": 1549123200000,
                "todayDataPrice": 255.15,
                "yesterdayDataPrice": 1076.53,
                "xDate": "02-02",
                "name": "19-02"
            }
        }, {
            "value": {
                "week": 1,
                "todayTime": 1549123200000,
                "yesterdayTime": 1549209600000,
                "todayDataPrice": 1076.53,
                "yesterdayDataPrice": 1030.58,
                "xDate": "02-03",
                "name": "19-02"
            }
        }, {
            "value": {
                "week": 2,
                "todayTime": 1549209600000,
                "yesterdayTime": 1549296000000,
                "todayDataPrice": 1030.58,
                "yesterdayDataPrice": 913.33,
                "xDate": "02-04",
                "name": "19-02"
            }
        }, {
            "value": {
                "week": 3,
                "todayTime": 1549296000000,
                "yesterdayTime": 1549382400000,
                "todayDataPrice": 913.33,
                "yesterdayDataPrice": 561.28,
                "xDate": "02-05",
                "name": "19-02"
            }
        }, {
            "value": {
                "week": 4,
                "todayTime": 1549382400000,
                "yesterdayTime": 1549468800000,
                "todayDataPrice": 561.28,
                "yesterdayDataPrice": 1007.73,
                "xDate": "02-06",
                "name": "19-02"
            }
        }, {
            "value": {
                "week": 5,
                "todayTime": 1549468800000,
                "yesterdayTime": 1549555200000,
                "todayDataPrice": 1007.73,
                "yesterdayDataPrice": 1037.56,
                "xDate": "02-07",
                "name": "19-02"
            }
        }, {
            "value": {
                "week": 6,
                "todayTime": 1549555200000,
                "yesterdayTime": 1549641600000,
                "todayDataPrice": 1037.56,
                "yesterdayDataPrice": 224.71,
                "xDate": "02-08",
                "name": "19-02"
            }
        }, {
            "value": {
                "week": 0,
                "todayTime": 1549641600000,
                "yesterdayTime": 1549728000000,
                "todayDataPrice": 224.71,
                "yesterdayDataPrice": 1054.85,
                "xDate": "02-09",
                "name": "19-02"
            }
        }, {
            "value": {
                "week": 1,
                "todayTime": 1549728000000,
                "yesterdayTime": 1549814400000,
                "todayDataPrice": 1054.85,
                "yesterdayDataPrice": 455.97,
                "xDate": "02-10",
                "name": "19-02"
            }
        }, {
            "value": {
                "week": 2,
                "todayTime": 1549814400000,
                "yesterdayTime": 1549900800000,
                "todayDataPrice": 455.97,
                "yesterdayDataPrice": 662.87,
                "xDate": "02-11",
                "name": "19-02"
            }
        }, {
            "value": {
                "week": 3,
                "todayTime": 1549900800000,
                "yesterdayTime": 1549987200000,
                "todayDataPrice": 662.87,
                "yesterdayDataPrice": 820,
                "xDate": "02-12",
                "name": "19-02"
            }
        }, {
            "value": {
                "week": 4,
                "todayTime": 1549987200000,
                "yesterdayTime": 1550073600000,
                "todayDataPrice": 820,
                "yesterdayDataPrice": 484.38,
                "xDate": "02-13",
                "name": "19-02"
            }
        }, {
            "value": {
                "week": 5,
                "todayTime": 1550073600000,
                "yesterdayTime": 1550160000000,
                "todayDataPrice": 484.38,
                "yesterdayDataPrice": 899.42,
                "xDate": "02-14",
                "name": "19-02"
            }
        }, {
            "value": {
                "week": 6,
                "todayTime": 1550160000000,
                "yesterdayTime": 1550246400000,
                "todayDataPrice": 899.42,
                "yesterdayDataPrice": 856.22,
                "xDate": "02-15",
                "name": "19-02"
            }
        }, {
            "value": {
                "week": 0,
                "todayTime": 1550246400000,
                "yesterdayTime": 1550332800000,
                "todayDataPrice": 856.22,
                "yesterdayDataPrice": 688.04,
                "xDate": "02-16",
                "name": "19-02"
            }
        }, {
            "value": {
                "week": 1,
                "todayTime": 1550332800000,
                "yesterdayTime": 1550419200000,
                "todayDataPrice": 688.04,
                "yesterdayDataPrice": 373.26,
                "xDate": "02-17",
                "name": "19-02"
            }
        }, {
            "value": {
                "week": 2,
                "todayTime": 1550419200000,
                "yesterdayTime": 1550505600000,
                "todayDataPrice": 373.26,
                "yesterdayDataPrice": 463.54,
                "xDate": "02-18",
                "name": "19-02"
            }
        }, {
            "value": {
                "week": 3,
                "todayTime": 1550505600000,
                "yesterdayTime": 1550592000000,
                "todayDataPrice": 463.54,
                "yesterdayDataPrice": 1056.02,
                "xDate": "02-19",
                "name": "19-02"
            }
        }, {
            "value": {
                "week": 4,
                "todayTime": 1550592000000,
                "yesterdayTime": 1550678400000,
                "todayDataPrice": 1056.02,
                "yesterdayDataPrice": 218.97,
                "xDate": "02-20",
                "name": "19-02"
            }
        }, {
            "value": {
                "week": 5,
                "todayTime": 1550678400000,
                "yesterdayTime": 1550764800000,
                "todayDataPrice": 218.97,
                "yesterdayDataPrice": 754.57,
                "xDate": "02-21",
                "name": "19-02"
            }
        }, {
            "value": {
                "week": 6,
                "todayTime": 1550764800000,
                "yesterdayTime": 1550851200000,
                "todayDataPrice": 754.57,
                "yesterdayDataPrice": 555.88,
                "xDate": "02-22",
                "name": "19-02"
            }
        }, {
            "value": {
                "week": 0,
                "todayTime": 1550851200000,
                "yesterdayTime": 1550937600000,
                "todayDataPrice": 555.88,
                "yesterdayDataPrice": 722.69,
                "xDate": "02-23",
                "name": "19-02"
            }
        }, {
            "value": {
                "week": 1,
                "todayTime": 1550937600000,
                "yesterdayTime": 1551024000000,
                "todayDataPrice": 722.69,
                "yesterdayDataPrice": 900.55,
                "xDate": "02-24",
                "name": "19-02"
            }
        }, {
            "value": {
                "week": 2,
                "todayTime": 1551024000000,
                "yesterdayTime": 1551110400000,
                "todayDataPrice": 900.55,
                "yesterdayDataPrice": 405.69,
                "xDate": "02-25",
                "name": "19-02"
            }
        }, {
            "value": {
                "week": 3,
                "todayTime": 1551110400000,
                "yesterdayTime": 1551196800000,
                "todayDataPrice": 405.69,
                "yesterdayDataPrice": 498.15,
                "xDate": "02-26",
                "name": "19-02"
            }
        }, {
            "value": {
                "week": 4,
                "todayTime": 1551196800000,
                "yesterdayTime": 1551283200000,
                "todayDataPrice": 498.15,
                "yesterdayDataPrice": 979.37,
                "xDate": "02-27",
                "name": "19-02"
            }
        }, {
            "value": {
                "week": 5,
                "todayTime": 1551283200000,
                "yesterdayTime": 1551369600000,
                "todayDataPrice": 979.37,
                "yesterdayDataPrice": 1174.42,
                "xDate": "02-28",
                "name": "19-03"
            }
        }, {
            "value": {
                "week": 6,
                "todayTime": 1551369600000,
                "yesterdayTime": 1551456000000,
                "todayDataPrice": 1174.42,
                "yesterdayDataPrice": 633.91,
                "xDate": "03-01",
                "name": "19-03"
            }
        }, {
            "value": {
                "week": 0,
                "todayTime": 1551456000000,
                "yesterdayTime": 1551542400000,
                "todayDataPrice": 633.91,
                "yesterdayDataPrice": 244.81,
                "xDate": "03-02",
                "name": "19-03"
            }
        }, {
            "value": {
                "week": 1,
                "todayTime": 1551542400000,
                "yesterdayTime": 1551628800000,
                "todayDataPrice": 244.81,
                "yesterdayDataPrice": 829.24,
                "xDate": "03-03",
                "name": "19-03"
            }
        }, {
            "value": {
                "week": 2,
                "todayTime": 1551628800000,
                "yesterdayTime": 1551715200000,
                "todayDataPrice": 829.24,
                "yesterdayDataPrice": 971.66,
                "xDate": "03-04",
                "name": "19-03"
            }
        }, {
            "value": {
                "week": 3,
                "todayTime": 1551715200000,
                "yesterdayTime": 1551801600000,
                "todayDataPrice": 971.66,
                "yesterdayDataPrice": 1055.47,
                "xDate": "03-05",
                "name": "19-03"
            }
        }, {
            "value": {
                "week": 4,
                "todayTime": 1551801600000,
                "yesterdayTime": 1551888000000,
                "todayDataPrice": 1055.47,
                "yesterdayDataPrice": 504.96,
                "xDate": "03-06",
                "name": "19-03",
                "yearDate": "03-06",
                "weekTime": 3
            }
        }, {
            "value": {
                "week": 5,
                "todayTime": 1551888000000,
                "yesterdayTime": 1551974400000,
                "todayDataPrice": 504.96,
                "yesterdayDataPrice": 1045.21,
                "xDate": "03-07",
                "name": "19-03"
            }
        }, {
            "value": {
                "week": 6,
                "todayTime": 1551974400000,
                "yesterdayTime": 1552060800000,
                "todayDataPrice": 1045.21,
                "yesterdayDataPrice": 534.23,
                "xDate": "03-08",
                "name": "19-03"
            }
        }, {
            "value": {
                "week": 0,
                "todayTime": 1552060800000,
                "yesterdayTime": 1552147200000,
                "todayDataPrice": 534.23,
                "yesterdayDataPrice": 921.1,
                "xDate": "03-09",
                "name": "19-03"
            }
        }, {
            "value": {
                "week": 1,
                "todayTime": 1552147200000,
                "yesterdayTime": 1552233600000,
                "todayDataPrice": 921.1,
                "yesterdayDataPrice": 780.88,
                "xDate": "03-10",
                "name": "19-03"
            }
        }, {
            "value": {
                "week": 2,
                "todayTime": 1552233600000,
                "yesterdayTime": 1552320000000,
                "todayDataPrice": 780.88,
                "yesterdayDataPrice": 671.84,
                "xDate": "03-11",
                "name": "19-03"
            }
        }, {
            "value": {
                "week": 3,
                "todayTime": 1552320000000,
                "yesterdayTime": 1552406400000,
                "todayDataPrice": 671.84,
                "yesterdayDataPrice": 684.29,
                "xDate": "03-12",
                "name": "19-03"
            }
        }, {
            "value": {
                "week": 4,
                "todayTime": 1552406400000,
                "yesterdayTime": 1552492800000,
                "todayDataPrice": 684.29,
                "yesterdayDataPrice": 370.04,
                "xDate": "03-13",
                "name": "19-03"
            }
        }, {
            "value": {
                "week": 5,
                "todayTime": 1552492800000,
                "yesterdayTime": 1552579200000,
                "todayDataPrice": 370.04,
                "yesterdayDataPrice": 1001.12,
                "xDate": "03-14",
                "name": "19-03"
            }
        }, {
            "value": {
                "week": 6,
                "todayTime": 1552579200000,
                "yesterdayTime": 1552665600000,
                "todayDataPrice": 1001.12,
                "yesterdayDataPrice": 1143.31,
                "xDate": "03-15",
                "name": "19-03"
            }
        }, {
            "value": {
                "week": 0,
                "todayTime": 1552665600000,
                "yesterdayTime": 1552752000000,
                "todayDataPrice": 1143.31,
                "yesterdayDataPrice": 727.85,
                "xDate": "03-16",
                "name": "19-03"
            }
        }, {
            "value": {
                "week": 1,
                "todayTime": 1552752000000,
                "yesterdayTime": 1552838400000,
                "todayDataPrice": 727.85,
                "yesterdayDataPrice": 542.43,
                "xDate": "03-17",
                "name": "19-03"
            }
        }, {
            "value": {
                "week": 2,
                "todayTime": 1552838400000,
                "yesterdayTime": 1552924800000,
                "todayDataPrice": 542.43,
                "yesterdayDataPrice": 560.49,
                "xDate": "03-18",
                "name": "19-03"
            }
        }, {
            "value": {
                "week": 3,
                "todayTime": 1552924800000,
                "yesterdayTime": 1553011200000,
                "todayDataPrice": 560.49,
                "yesterdayDataPrice": 303.16,
                "xDate": "03-19",
                "name": "19-03"
            }
        }, {
            "value": {
                "week": 4,
                "todayTime": 1553011200000,
                "yesterdayTime": 1553097600000,
                "todayDataPrice": 303.16,
                "yesterdayDataPrice": 672.51,
                "xDate": "03-20",
                "name": "19-03"
            }
        }, {
            "value": {
                "week": 5,
                "todayTime": 1553097600000,
                "yesterdayTime": 1553184000000,
                "todayDataPrice": 672.51,
                "yesterdayDataPrice": 746.67,
                "xDate": "03-21",
                "name": "19-03"
            }
        }, {
            "value": {
                "week": 6,
                "todayTime": 1553184000000,
                "yesterdayTime": 1553270400000,
                "todayDataPrice": 746.67,
                "yesterdayDataPrice": 681.07,
                "xDate": "03-22",
                "name": "19-03"
            }
        }, {
            "value": {
                "week": 0,
                "todayTime": 1553270400000,
                "yesterdayTime": 1553356800000,
                "todayDataPrice": 681.07,
                "yesterdayDataPrice": 1112.81,
                "xDate": "03-23",
                "name": "19-03"
            }
        }, {
            "value": {
                "week": 1,
                "todayTime": 1553356800000,
                "yesterdayTime": 1553443200000,
                "todayDataPrice": 1112.81,
                "yesterdayDataPrice": 400.74,
                "xDate": "03-24",
                "name": "19-03"
            }
        }, {
            "value": {
                "week": 2,
                "todayTime": 1553443200000,
                "yesterdayTime": 1553529600000,
                "todayDataPrice": 400.74,
                "yesterdayDataPrice": 863.45,
                "xDate": "03-25",
                "name": "19-03"
            }
        }, {
            "value": {
                "week": 3,
                "todayTime": 1553529600000,
                "yesterdayTime": 1553616000000,
                "todayDataPrice": 863.45,
                "yesterdayDataPrice": 1080.45,
                "xDate": "03-26",
                "name": "19-03"
            }
        }, {
            "value": {
                "week": 4,
                "todayTime": 1553616000000,
                "yesterdayTime": 1553702400000,
                "todayDataPrice": 1080.45,
                "yesterdayDataPrice": 555.2,
                "xDate": "03-27",
                "name": "19-03"
            }
        }, {
            "value": {
                "week": 5,
                "todayTime": 1553702400000,
                "yesterdayTime": 1553788800000,
                "todayDataPrice": 555.2,
                "yesterdayDataPrice": 871.08,
                "xDate": "03-28",
                "name": "19-03"
            }
        }, {
            "value": {
                "week": 6,
                "todayTime": 1553788800000,
                "yesterdayTime": 1553875200000,
                "todayDataPrice": 871.08,
                "yesterdayDataPrice": 872.57,
                "xDate": "03-29",
                "name": "19-03"
            }
        }, {
            "value": {
                "week": 0,
                "todayTime": 1553875200000,
                "yesterdayTime": 1553961600000,
                "todayDataPrice": 872.57,
                "yesterdayDataPrice": 972.64,
                "xDate": "03-30",
                "name": "19-03"
            }
        }, {
            "value": {
                "week": 1,
                "todayTime": 1553961600000,
                "yesterdayTime": 1554048000000,
                "todayDataPrice": 972.64,
                "yesterdayDataPrice": 1178.82,
                "xDate": "03-31",
                "name": "19-04"
            }
        }, {
            "value": {
                "week": 2,
                "todayTime": 1554048000000,
                "yesterdayTime": 1554134400000,
                "todayDataPrice": 1178.82,
                "yesterdayDataPrice": 318.8,
                "xDate": "04-01",
                "name": "19-04"
            }
        }, {
            "value": {
                "week": 3,
                "todayTime": 1554134400000,
                "yesterdayTime": 1554220800000,
                "todayDataPrice": 318.8,
                "yesterdayDataPrice": 811.24,
                "xDate": "04-02",
                "name": "19-04"
            }
        }, {
            "value": {
                "week": 4,
                "todayTime": 1554220800000,
                "yesterdayTime": 1554307200000,
                "todayDataPrice": 811.24,
                "yesterdayDataPrice": 436.7,
                "xDate": "04-03",
                "name": "19-04"
            }
        }, {
            "value": {
                "week": 5,
                "todayTime": 1554307200000,
                "yesterdayTime": 1554393600000,
                "todayDataPrice": 436.7,
                "yesterdayDataPrice": 884.18,
                "xDate": "04-04",
                "name": "19-04"
            }
        }, {
            "value": {
                "week": 6,
                "todayTime": 1554393600000,
                "yesterdayTime": 1554480000000,
                "todayDataPrice": 884.18,
                "yesterdayDataPrice": 795.77,
                "xDate": "04-05",
                "name": "19-04"
            }
        }, {
            "value": {
                "week": 0,
                "todayTime": 1554480000000,
                "yesterdayTime": 1554566400000,
                "todayDataPrice": 795.77,
                "yesterdayDataPrice": 614.31,
                "xDate": "04-06",
                "name": "19-04"
            }
        }, {
            "value": {
                "week": 1,
                "todayTime": 1554566400000,
                "yesterdayTime": 1554652800000,
                "todayDataPrice": 614.31,
                "yesterdayDataPrice": 1164.93,
                "xDate": "04-07",
                "name": "19-04"
            }
        }, {
            "value": {
                "week": 2,
                "todayTime": 1554652800000,
                "yesterdayTime": 1554739200000,
                "todayDataPrice": 1164.93,
                "yesterdayDataPrice": 931.11,
                "xDate": "04-08",
                "name": "19-04"
            }
        }, {
            "value": {
                "week": 3,
                "todayTime": 1554739200000,
                "yesterdayTime": 1554825600000,
                "todayDataPrice": 931.11,
                "yesterdayDataPrice": 226.56,
                "xDate": "04-09",
                "name": "19-04"
            }
        }, {
            "value": {
                "week": 4,
                "todayTime": 1554825600000,
                "yesterdayTime": 1554912000000,
                "todayDataPrice": 226.56,
                "yesterdayDataPrice": 1147.2,
                "xDate": "04-10",
                "name": "19-04"
            }
        }, {
            "value": {
                "week": 5,
                "todayTime": 1554912000000,
                "yesterdayTime": 1554998400000,
                "todayDataPrice": 1147.2,
                "yesterdayDataPrice": 549.23,
                "xDate": "04-11",
                "name": "19-04"
            }
        }, {
            "value": {
                "week": 6,
                "todayTime": 1554998400000,
                "yesterdayTime": 1555084800000,
                "todayDataPrice": 549.23,
                "yesterdayDataPrice": 739.84,
                "xDate": "04-12",
                "name": "19-04"
            }
        }, {
            "value": {
                "week": 0,
                "todayTime": 1555084800000,
                "yesterdayTime": 1555171200000,
                "todayDataPrice": 739.84,
                "yesterdayDataPrice": 462.75,
                "xDate": "04-13",
                "name": "19-04"
            }
        }, {
            "value": {
                "week": 1,
                "todayTime": 1555171200000,
                "yesterdayTime": 1555257600000,
                "todayDataPrice": 462.75,
                "yesterdayDataPrice": 321.35,
                "xDate": "04-14",
                "name": "19-04"
            }
        }, {
            "value": {
                "week": 2,
                "todayTime": 1555257600000,
                "yesterdayTime": 1555344000000,
                "todayDataPrice": 321.35,
                "yesterdayDataPrice": 979.19,
                "xDate": "04-15",
                "name": "19-04"
            }
        }, {
            "value": {
                "week": 3,
                "todayTime": 1555344000000,
                "yesterdayTime": 1555430400000,
                "todayDataPrice": 979.19,
                "yesterdayDataPrice": 872.15,
                "xDate": "04-16",
                "name": "19-04"
            }
        }, {
            "value": {
                "week": 4,
                "todayTime": 1555430400000,
                "yesterdayTime": 1555516800000,
                "todayDataPrice": 872.15,
                "yesterdayDataPrice": 592.6,
                "xDate": "04-17",
                "name": "19-04"
            }
        }, {
            "value": {
                "week": 5,
                "todayTime": 1555516800000,
                "yesterdayTime": 1555603200000,
                "todayDataPrice": 592.6,
                "yesterdayDataPrice": 480.02,
                "xDate": "04-18",
                "name": "19-04"
            }
        }, {
            "value": {
                "week": 6,
                "todayTime": 1555603200000,
                "yesterdayTime": 1555689600000,
                "todayDataPrice": 480.02,
                "yesterdayDataPrice": 1109.08,
                "xDate": "04-19",
                "name": "19-04"
            }
        }, {
            "value": {
                "week": 0,
                "todayTime": 1555689600000,
                "yesterdayTime": 1555776000000,
                "todayDataPrice": 1109.08,
                "yesterdayDataPrice": 611.56,
                "xDate": "04-20",
                "name": "19-04"
            }
        }, {
            "value": {
                "week": 1,
                "todayTime": 1555776000000,
                "yesterdayTime": 1555862400000,
                "todayDataPrice": 611.56,
                "yesterdayDataPrice": 1005.9,
                "xDate": "04-21",
                "name": "19-04"
            }
        }, {
            "value": {
                "week": 2,
                "todayTime": 1555862400000,
                "yesterdayTime": 1555948800000,
                "todayDataPrice": 1005.9,
                "yesterdayDataPrice": 258.55,
                "xDate": "04-22",
                "name": "19-04"
            }
        }, {
            "value": {
                "week": 3,
                "todayTime": 1555948800000,
                "yesterdayTime": 1556035200000,
                "todayDataPrice": 258.55,
                "yesterdayDataPrice": 703.66,
                "xDate": "04-23",
                "name": "19-04"
            }
        }, {
            "value": {
                "week": 4,
                "todayTime": 1556035200000,
                "yesterdayTime": 1556121600000,
                "todayDataPrice": 703.66,
                "yesterdayDataPrice": 811.88,
                "xDate": "04-24",
                "name": "19-04"
            }
        }, {
            "value": {
                "week": 5,
                "todayTime": 1556121600000,
                "yesterdayTime": 1556208000000,
                "todayDataPrice": 811.88,
                "yesterdayDataPrice": 425.82,
                "xDate": "04-25",
                "name": "19-04"
            }
        }, {
            "value": {
                "week": 6,
                "todayTime": 1556208000000,
                "yesterdayTime": 1556294400000,
                "todayDataPrice": 425.82,
                "yesterdayDataPrice": 858.94,
                "xDate": "04-26",
                "name": "19-04"
            }
        }, {
            "value": {
                "week": 0,
                "todayTime": 1556294400000,
                "yesterdayTime": 1556380800000,
                "todayDataPrice": 858.94,
                "yesterdayDataPrice": 493.87,
                "xDate": "04-27",
                "name": "19-04"
            }
        }, {
            "value": {
                "week": 1,
                "todayTime": 1556380800000,
                "yesterdayTime": 1556467200000,
                "todayDataPrice": 493.87,
                "yesterdayDataPrice": 1153.7,
                "xDate": "04-28",
                "name": "19-04"
            }
        }, {
            "value": {
                "week": 2,
                "todayTime": 1556467200000,
                "yesterdayTime": 1556553600000,
                "todayDataPrice": 1153.7,
                "yesterdayDataPrice": 300.51,
                "xDate": "04-29",
                "name": "19-04"
            }
        }, {
            "value": {
                "week": 3,
                "todayTime": 1556553600000,
                "yesterdayTime": 1556640000000,
                "todayDataPrice": 300.51,
                "yesterdayDataPrice": 1132.46,
                "xDate": "04-30",
                "name": "19-05"
            }
        }, {
            "value": {
                "week": 4,
                "todayTime": 1556640000000,
                "yesterdayTime": 1556726400000,
                "todayDataPrice": 1132.46,
                "yesterdayDataPrice": 263.6,
                "xDate": "05-01",
                "name": "19-05"
            }
        }, {
            "value": {
                "week": 5,
                "todayTime": 1556726400000,
                "yesterdayTime": 1556812800000,
                "todayDataPrice": 263.6,
                "yesterdayDataPrice": 636.64,
                "xDate": "05-02",
                "name": "19-05"
            }
        }, {
            "value": {
                "week": 6,
                "todayTime": 1556812800000,
                "yesterdayTime": 1556899200000,
                "todayDataPrice": 636.64,
                "yesterdayDataPrice": 596.17,
                "xDate": "05-03",
                "name": "19-05"
            }
        }, {
            "value": {
                "week": 0,
                "todayTime": 1556899200000,
                "yesterdayTime": 1556985600000,
                "todayDataPrice": 596.17,
                "yesterdayDataPrice": 1036.83,
                "xDate": "05-04",
                "name": "19-05"
            }
        }, {
            "value": {
                "week": 1,
                "todayTime": 1556985600000,
                "yesterdayTime": 1557072000000,
                "todayDataPrice": 1036.83,
                "yesterdayDataPrice": 1147.55,
                "xDate": "05-05",
                "name": "19-05"
            }
        }, {
            "value": {
                "week": 2,
                "todayTime": 1557072000000,
                "yesterdayTime": 1557158400000,
                "todayDataPrice": 1147.55,
                "yesterdayDataPrice": 1042.34,
                "xDate": "05-06",
                "name": "19-05"
            }
        }, {
            "value": {
                "week": 3,
                "todayTime": 1557158400000,
                "yesterdayTime": 1557244800000,
                "todayDataPrice": 1042.34,
                "yesterdayDataPrice": 1151.95,
                "xDate": "05-07",
                "name": "19-05"
            }
        }, {
            "value": {
                "week": 4,
                "todayTime": 1557244800000,
                "yesterdayTime": 1557331200000,
                "todayDataPrice": 1151.95,
                "yesterdayDataPrice": 926.31,
                "xDate": "05-08",
                "name": "19-05"
            }
        }, {
            "value": {
                "week": 5,
                "todayTime": 1557331200000,
                "yesterdayTime": 1557417600000,
                "todayDataPrice": 926.31,
                "yesterdayDataPrice": 847.46,
                "xDate": "05-09",
                "name": "19-05"
            }
        }, {
            "value": {
                "week": 6,
                "todayTime": 1557417600000,
                "yesterdayTime": 1557504000000,
                "todayDataPrice": 847.46,
                "yesterdayDataPrice": 229.43,
                "xDate": "05-10",
                "name": "19-05"
            }
        }, {
            "value": {
                "week": 0,
                "todayTime": 1557504000000,
                "yesterdayTime": 1557590400000,
                "todayDataPrice": 229.43,
                "yesterdayDataPrice": 343.47,
                "xDate": "05-11",
                "name": "19-05"
            }
        }, {
            "value": {
                "week": 1,
                "todayTime": 1557590400000,
                "yesterdayTime": 1557676800000,
                "todayDataPrice": 343.47,
                "yesterdayDataPrice": 743.22,
                "xDate": "05-12",
                "name": "19-05"
            }
        }, {
            "value": {
                "week": 2,
                "todayTime": 1557676800000,
                "yesterdayTime": 1557763200000,
                "todayDataPrice": 743.22,
                "yesterdayDataPrice": 1170.79,
                "xDate": "05-13",
                "name": "19-05"
            }
        }, {
            "value": {
                "week": 3,
                "todayTime": 1557763200000,
                "yesterdayTime": 1557849600000,
                "todayDataPrice": 1170.79,
                "yesterdayDataPrice": 466,
                "xDate": "05-14",
                "name": "19-05"
            }
        }, {
            "value": {
                "week": 4,
                "todayTime": 1557849600000,
                "yesterdayTime": 1557936000000,
                "todayDataPrice": 466,
                "yesterdayDataPrice": 857.95,
                "xDate": "05-15",
                "name": "19-05"
            }
        }, {
            "value": {
                "week": 5,
                "todayTime": 1557936000000,
                "yesterdayTime": 1558022400000,
                "todayDataPrice": 857.95,
                "yesterdayDataPrice": 508.49,
                "xDate": "05-16",
                "name": "19-05"
            }
        }, {
            "value": {
                "week": 6,
                "todayTime": 1558022400000,
                "yesterdayTime": 1558108800000,
                "todayDataPrice": 508.49,
                "yesterdayDataPrice": 960.4,
                "xDate": "05-17",
                "name": "19-05"
            }
        }, {
            "value": {
                "week": 0,
                "todayTime": 1558108800000,
                "yesterdayTime": 1558195200000,
                "todayDataPrice": 960.4,
                "yesterdayDataPrice": 569.06,
                "xDate": "05-18",
                "name": "19-05",
                "yearDate": "05-18",
                "weekTime": 3
            }
        }, {
            "value": {
                "week": 1,
                "todayTime": 1558195200000,
                "yesterdayTime": 1558281600000,
                "todayDataPrice": 569.06,
                "yesterdayDataPrice": 907.81,
                "xDate": "05-19",
                "name": "19-05"
            }
        }, {
            "value": {
                "week": 2,
                "todayTime": 1558281600000,
                "yesterdayTime": 1558368000000,
                "todayDataPrice": 907.81,
                "yesterdayDataPrice": 556.95,
                "xDate": "05-20",
                "name": "19-05"
            }
        }, {
            "value": {
                "week": 3,
                "todayTime": 1558368000000,
                "yesterdayTime": 1558454400000,
                "todayDataPrice": 556.95,
                "yesterdayDataPrice": 1117.94,
                "xDate": "05-21",
                "name": "19-05"
            }
        }, {
            "value": {
                "week": 4,
                "todayTime": 1558454400000,
                "yesterdayTime": 1558540800000,
                "todayDataPrice": 1117.94,
                "yesterdayDataPrice": 402.41,
                "xDate": "05-22",
                "name": "19-05"
            }
        }, {
            "value": {
                "week": 5,
                "todayTime": 1558540800000,
                "yesterdayTime": 1558627200000,
                "todayDataPrice": 402.41,
                "yesterdayDataPrice": 203.12,
                "xDate": "05-23",
                "name": "19-05"
            }
        }, {
            "value": {
                "week": 6,
                "todayTime": 1558627200000,
                "yesterdayTime": 1558713600000,
                "todayDataPrice": 203.12,
                "yesterdayDataPrice": 729.31,
                "xDate": "05-24",
                "name": "19-05"
            }
        }, {
            "value": {
                "week": 0,
                "todayTime": 1558713600000,
                "yesterdayTime": 1558800000000,
                "todayDataPrice": 729.31,
                "yesterdayDataPrice": 1026.2,
                "xDate": "05-25",
                "name": "19-05"
            }
        }, {
            "value": {
                "week": 1,
                "todayTime": 1558800000000,
                "yesterdayTime": 1558886400000,
                "todayDataPrice": 1026.2,
                "yesterdayDataPrice": 285.26,
                "xDate": "05-26",
                "name": "19-05"
            }
        }, {
            "value": {
                "week": 2,
                "todayTime": 1558886400000,
                "yesterdayTime": 1558972800000,
                "todayDataPrice": 285.26,
                "yesterdayDataPrice": 465.22,
                "xDate": "05-27",
                "name": "19-05"
            }
        }, {
            "value": {
                "week": 3,
                "todayTime": 1558972800000,
                "yesterdayTime": 1559059200000,
                "todayDataPrice": 465.22,
                "yesterdayDataPrice": 218.35,
                "xDate": "05-28",
                "name": "19-05"
            }
        }, {
            "value": {
                "week": 4,
                "todayTime": 1559059200000,
                "yesterdayTime": 1559145600000,
                "todayDataPrice": 218.35,
                "yesterdayDataPrice": 246.64,
                "xDate": "05-29",
                "name": "19-05"
            }
        }, {
            "value": {
                "week": 5,
                "todayTime": 1559145600000,
                "yesterdayTime": 1559232000000,
                "todayDataPrice": 246.64,
                "yesterdayDataPrice": 1083.98,
                "xDate": "05-30",
                "name": "19-05"
            }
        }, {
            "value": {
                "week": 6,
                "todayTime": 1559232000000,
                "yesterdayTime": 1559318400000,
                "todayDataPrice": 1083.98,
                "yesterdayDataPrice": 1194.13,
                "xDate": "05-31",
                "name": "19-06"
            }
        }, {
            "value": {
                "week": 0,
                "todayTime": 1559318400000,
                "yesterdayTime": 1559404800000,
                "todayDataPrice": 1194.13,
                "yesterdayDataPrice": 971.04,
                "xDate": "06-01",
                "name": "19-06"
            }
        }, {
            "value": {
                "week": 1,
                "todayTime": 1559404800000,
                "yesterdayTime": 1559491200000,
                "todayDataPrice": 971.04,
                "yesterdayDataPrice": 908.7,
                "xDate": "06-02",
                "name": "19-06"
            }
        }, {
            "value": {
                "week": 2,
                "todayTime": 1559491200000,
                "yesterdayTime": 1559577600000,
                "todayDataPrice": 908.7,
                "yesterdayDataPrice": 1197.42,
                "xDate": "06-03",
                "name": "19-06"
            }
        }, {
            "value": {
                "week": 3,
                "todayTime": 1559577600000,
                "yesterdayTime": 1559664000000,
                "todayDataPrice": 1197.42,
                "yesterdayDataPrice": 802.21,
                "xDate": "06-04",
                "name": "19-06"
            }
        }, {
            "value": {
                "week": 4,
                "todayTime": 1559664000000,
                "yesterdayTime": 1559750400000,
                "todayDataPrice": 802.21,
                "yesterdayDataPrice": 470.75,
                "xDate": "06-05",
                "name": "19-06"
            }
        }, {
            "value": {
                "week": 5,
                "todayTime": 1559750400000,
                "yesterdayTime": 1559836800000,
                "todayDataPrice": 470.75,
                "yesterdayDataPrice": 716.26,
                "xDate": "06-06",
                "name": "19-06"
            }
        }, {
            "value": {
                "week": 6,
                "todayTime": 1559836800000,
                "yesterdayTime": 1559923200000,
                "todayDataPrice": 716.26,
                "yesterdayDataPrice": 303.99,
                "xDate": "06-07",
                "name": "19-06"
            }
        }, {
            "value": {
                "week": 0,
                "todayTime": 1559923200000,
                "yesterdayTime": 1560009600000,
                "todayDataPrice": 303.99,
                "yesterdayDataPrice": 1094.43,
                "xDate": "06-08",
                "name": "19-06"
            }
        }, {
            "value": {
                "week": 1,
                "todayTime": 1560009600000,
                "yesterdayTime": 1560096000000,
                "todayDataPrice": 1094.43,
                "yesterdayDataPrice": 365.91,
                "xDate": "06-09",
                "name": "19-06"
            }
        }, {
            "value": {
                "week": 2,
                "todayTime": 1560096000000,
                "yesterdayTime": 1560182400000,
                "todayDataPrice": 365.91,
                "yesterdayDataPrice": 973.74,
                "xDate": "06-10",
                "name": "19-06"
            }
        }, {
            "value": {
                "week": 3,
                "todayTime": 1560182400000,
                "yesterdayTime": 1560268800000,
                "todayDataPrice": 973.74,
                "yesterdayDataPrice": 614,
                "xDate": "06-11",
                "name": "19-06"
            }
        }, {
            "value": {
                "week": 4,
                "todayTime": 1560268800000,
                "yesterdayTime": 1560355200000,
                "todayDataPrice": 614,
                "yesterdayDataPrice": 412.64,
                "xDate": "06-12",
                "name": "19-06"
            }
        }, {
            "value": {
                "week": 5,
                "todayTime": 1560355200000,
                "yesterdayTime": 1560441600000,
                "todayDataPrice": 412.64,
                "yesterdayDataPrice": 771.21,
                "xDate": "06-13",
                "name": "19-06"
            }
        }, {
            "value": {
                "week": 6,
                "todayTime": 1560441600000,
                "yesterdayTime": 1560528000000,
                "todayDataPrice": 771.21,
                "yesterdayDataPrice": 481.29,
                "xDate": "06-14",
                "name": "19-06"
            }
        }, {
            "value": {
                "week": 0,
                "todayTime": 1560528000000,
                "yesterdayTime": 1560614400000,
                "todayDataPrice": 481.29,
                "yesterdayDataPrice": 466.15,
                "xDate": "06-15",
                "name": "19-06"
            }
        }, {
            "value": {
                "week": 1,
                "todayTime": 1560614400000,
                "yesterdayTime": 1560700800000,
                "todayDataPrice": 466.15,
                "yesterdayDataPrice": 566.8,
                "xDate": "06-16",
                "name": "19-06"
            }
        }, {
            "value": {
                "week": 2,
                "todayTime": 1560700800000,
                "yesterdayTime": 1560787200000,
                "todayDataPrice": 566.8,
                "yesterdayDataPrice": 1147.02,
                "xDate": "06-17",
                "name": "19-06"
            }
        }, {
            "value": {
                "week": 3,
                "todayTime": 1560787200000,
                "yesterdayTime": 1560873600000,
                "todayDataPrice": 1147.02,
                "yesterdayDataPrice": 562.89,
                "xDate": "06-18",
                "name": "19-06"
            }
        }, {
            "value": {
                "week": 4,
                "todayTime": 1560873600000,
                "yesterdayTime": 1560960000000,
                "todayDataPrice": 562.89,
                "yesterdayDataPrice": 420.14,
                "xDate": "06-19",
                "name": "19-06"
            }
        }, {
            "value": {
                "week": 5,
                "todayTime": 1560960000000,
                "yesterdayTime": 1561046400000,
                "todayDataPrice": 420.14,
                "yesterdayDataPrice": 950.68,
                "xDate": "06-20",
                "name": "19-06"
            }
        }, {
            "value": {
                "week": 6,
                "todayTime": 1561046400000,
                "yesterdayTime": 1561132800000,
                "todayDataPrice": 950.68,
                "yesterdayDataPrice": 460.31,
                "xDate": "06-21",
                "name": "19-06"
            }
        }, {
            "value": {
                "week": 0,
                "todayTime": 1561132800000,
                "yesterdayTime": 1561219200000,
                "todayDataPrice": 460.31,
                "yesterdayDataPrice": 875.55,
                "xDate": "06-22",
                "name": "19-06"
            }
        }, {
            "value": {
                "week": 1,
                "todayTime": 1561219200000,
                "yesterdayTime": 1561305600000,
                "todayDataPrice": 875.55,
                "yesterdayDataPrice": 529.59,
                "xDate": "06-23",
                "name": "19-06"
            }
        }, {
            "value": {
                "week": 2,
                "todayTime": 1561305600000,
                "yesterdayTime": 1561392000000,
                "todayDataPrice": 529.59,
                "yesterdayDataPrice": 982.54,
                "xDate": "06-24",
                "name": "19-06"
            }
        }, {
            "value": {
                "week": 3,
                "todayTime": 1561392000000,
                "yesterdayTime": 1561478400000,
                "todayDataPrice": 982.54,
                "yesterdayDataPrice": 846.95,
                "xDate": "06-25",
                "name": "19-06"
            }
        }, {
            "value": {
                "week": 4,
                "todayTime": 1561478400000,
                "yesterdayTime": 1561564800000,
                "todayDataPrice": 846.95,
                "yesterdayDataPrice": 999.84,
                "xDate": "06-26",
                "name": "19-06"
            }
        }, {
            "value": {
                "week": 5,
                "todayTime": 1561564800000,
                "yesterdayTime": 1561651200000,
                "todayDataPrice": 999.84,
                "yesterdayDataPrice": 230.78,
                "xDate": "06-27",
                "name": "19-06"
            }
        }, {
            "value": {
                "week": 6,
                "todayTime": 1561651200000,
                "yesterdayTime": 1561737600000,
                "todayDataPrice": 230.78,
                "yesterdayDataPrice": 223.37,
                "xDate": "06-28",
                "name": "19-06"
            }
        }, {
            "value": {
                "week": 0,
                "todayTime": 1561737600000,
                "yesterdayTime": 1561824000000,
                "todayDataPrice": 223.37,
                "yesterdayDataPrice": 230.82,
                "xDate": "06-29",
                "name": "19-06"
            }
        }, {
            "value": {
                "week": 1,
                "todayTime": 1561824000000,
                "yesterdayTime": 1561910400000,
                "todayDataPrice": 230.82,
                "yesterdayDataPrice": 1133.64,
                "xDate": "06-30",
                "name": "19-07"
            }
        }, {
            "value": {
                "week": 2,
                "todayTime": 1561910400000,
                "yesterdayTime": 1561996800000,
                "todayDataPrice": 1133.64,
                "yesterdayDataPrice": 251.89,
                "xDate": "07-01",
                "name": "19-07"
            }
        }, {
            "value": {
                "week": 3,
                "todayTime": 1561996800000,
                "yesterdayTime": 1562083200000,
                "todayDataPrice": 251.89,
                "yesterdayDataPrice": 205.81,
                "xDate": "07-02",
                "name": "19-07"
            }
        }, {
            "value": {
                "week": 4,
                "todayTime": 1562083200000,
                "yesterdayTime": 1562169600000,
                "todayDataPrice": 205.81,
                "yesterdayDataPrice": 308.94,
                "xDate": "07-03",
                "name": "19-07"
            }
        }, {
            "value": {
                "week": 5,
                "todayTime": 1562169600000,
                "yesterdayTime": 1562256000000,
                "todayDataPrice": 308.94,
                "yesterdayDataPrice": 500.82,
                "xDate": "07-04",
                "name": "19-07"
            }
        }, {
            "value": {
                "week": 6,
                "todayTime": 1562256000000,
                "yesterdayTime": 1562342400000,
                "todayDataPrice": 500.82,
                "yesterdayDataPrice": 1136.58,
                "xDate": "07-05",
                "name": "19-07"
            }
        }, {
            "value": {
                "week": 0,
                "todayTime": 1562342400000,
                "yesterdayTime": 1562428800000,
                "todayDataPrice": 1136.58,
                "yesterdayDataPrice": 1156.38,
                "xDate": "07-06",
                "name": "19-07"
            }
        }, {
            "value": {
                "week": 1,
                "todayTime": 1562428800000,
                "yesterdayTime": 1562515200000,
                "todayDataPrice": 1156.38,
                "yesterdayDataPrice": 985.08,
                "xDate": "07-07",
                "name": "19-07"
            }
        }, {
            "value": {
                "week": 2,
                "todayTime": 1562515200000,
                "yesterdayTime": 1562601600000,
                "todayDataPrice": 985.08,
                "yesterdayDataPrice": 345.46,
                "xDate": "07-08",
                "name": "19-07"
            }
        }, {
            "value": {
                "week": 3,
                "todayTime": 1562601600000,
                "yesterdayTime": 1562688000000,
                "todayDataPrice": 345.46,
                "yesterdayDataPrice": 382.28,
                "xDate": "07-09",
                "name": "19-07"
            }
        }, {
            "value": {
                "week": 4,
                "todayTime": 1562688000000,
                "yesterdayTime": 1562774400000,
                "todayDataPrice": 382.28,
                "yesterdayDataPrice": 411.72,
                "xDate": "07-10",
                "name": "19-07"
            }
        }, {
            "value": {
                "week": 5,
                "todayTime": 1562774400000,
                "yesterdayTime": 1562860800000,
                "todayDataPrice": 411.72,
                "yesterdayDataPrice": 725.46,
                "xDate": "07-11",
                "name": "19-07"
            }
        }, {
            "value": {
                "week": 6,
                "todayTime": 1562860800000,
                "yesterdayTime": 1562947200000,
                "todayDataPrice": 725.46,
                "yesterdayDataPrice": 609.78,
                "xDate": "07-12",
                "name": "19-07"
            }
        }, {
            "value": {
                "week": 0,
                "todayTime": 1562947200000,
                "yesterdayTime": 1563033600000,
                "todayDataPrice": 609.78,
                "yesterdayDataPrice": 820.05,
                "xDate": "07-13",
                "name": "19-07"
            }
        }, {
            "value": {
                "week": 1,
                "todayTime": 1563033600000,
                "yesterdayTime": 1563120000000,
                "todayDataPrice": 820.05,
                "yesterdayDataPrice": 416.56,
                "xDate": "07-14",
                "name": "19-07"
            }
        }, {
            "value": {
                "week": 2,
                "todayTime": 1563120000000,
                "yesterdayTime": 1563206400000,
                "todayDataPrice": 416.56,
                "yesterdayDataPrice": 420.97,
                "xDate": "07-15",
                "name": "19-07"
            }
        }, {
            "value": {
                "week": 3,
                "todayTime": 1563206400000,
                "yesterdayTime": 1563292800000,
                "todayDataPrice": 420.97,
                "yesterdayDataPrice": 590,
                "xDate": "07-16",
                "name": "19-07"
            }
        }, {
            "value": {
                "week": 4,
                "todayTime": 1563292800000,
                "yesterdayTime": 1563379200000,
                "todayDataPrice": 590,
                "yesterdayDataPrice": 707.45,
                "xDate": "07-17",
                "name": "19-07"
            }
        }, {
            "value": {
                "week": 5,
                "todayTime": 1563379200000,
                "yesterdayTime": 1563465600000,
                "todayDataPrice": 707.45,
                "yesterdayDataPrice": 746.72,
                "xDate": "07-18",
                "name": "19-07"
            }
        }, {
            "value": {
                "week": 6,
                "todayTime": 1563465600000,
                "yesterdayTime": 1563552000000,
                "todayDataPrice": 746.72,
                "yesterdayDataPrice": 1169.04,
                "xDate": "07-19",
                "name": "19-07"
            }
        }, {
            "value": {
                "week": 0,
                "todayTime": 1563552000000,
                "yesterdayTime": 1563638400000,
                "todayDataPrice": 1169.04,
                "yesterdayDataPrice": 1029.81,
                "xDate": "07-20",
                "name": "19-07"
            }
        }, {
            "value": {
                "week": 1,
                "todayTime": 1563638400000,
                "yesterdayTime": 1563724800000,
                "todayDataPrice": 1029.81,
                "yesterdayDataPrice": 1069.13,
                "xDate": "07-21",
                "name": "19-07"
            }
        }, {
            "value": {
                "week": 2,
                "todayTime": 1563724800000,
                "yesterdayTime": 1563811200000,
                "todayDataPrice": 1069.13,
                "yesterdayDataPrice": 624.87,
                "xDate": "07-22",
                "name": "19-07"
            }
        }, {
            "value": {
                "week": 3,
                "todayTime": 1563811200000,
                "yesterdayTime": 1563897600000,
                "todayDataPrice": 624.87,
                "yesterdayDataPrice": 936.35,
                "xDate": "07-23",
                "name": "19-07"
            }
        }, {
            "value": {
                "week": 4,
                "todayTime": 1563897600000,
                "yesterdayTime": 1563984000000,
                "todayDataPrice": 936.35,
                "yesterdayDataPrice": 244.5,
                "xDate": "07-24",
                "name": "19-07"
            }
        }, {
            "value": {
                "week": 5,
                "todayTime": 1563984000000,
                "yesterdayTime": 1564070400000,
                "todayDataPrice": 244.5,
                "yesterdayDataPrice": 1102.39,
                "xDate": "07-25",
                "name": "19-07"
            }
        }, {
            "value": {
                "week": 6,
                "todayTime": 1564070400000,
                "yesterdayTime": 1564156800000,
                "todayDataPrice": 1102.39,
                "yesterdayDataPrice": 890.01,
                "xDate": "07-26",
                "name": "19-07"
            }
        }, {
            "value": {
                "week": 0,
                "todayTime": 1564156800000,
                "yesterdayTime": 1564243200000,
                "todayDataPrice": 890.01,
                "yesterdayDataPrice": 330.21,
                "xDate": "07-27",
                "name": "19-07"
            }
        }, {
            "value": {
                "week": 1,
                "todayTime": 1564243200000,
                "yesterdayTime": 1564329600000,
                "todayDataPrice": 330.21,
                "yesterdayDataPrice": 971.6,
                "xDate": "07-28",
                "name": "19-07"
            }
        }, {
            "value": {
                "week": 2,
                "todayTime": 1564329600000,
                "yesterdayTime": 1564416000000,
                "todayDataPrice": 971.6,
                "yesterdayDataPrice": 965.75,
                "xDate": "07-29",
                "name": "19-07",
                "yearDate": "07-29",
                "weekTime": 3
            }
        }]
    },
    yAxis: {
        type: 'value',
        splitLine: {
            lineStyle: {
                // 使用深浅的间隔色
                color: '#eaeaea',
                type: 'dashed'
            }
        },
        axisLine: {
            lineStyle: {
                type: 'solid',
                color: '#eaeaea', //左边线的颜色
                width: '1' //坐标线的宽度
            }
        },
        axisTick: {
            show: false
        },
        axisLabel: {
            formatter:function (value) {
              console.log(value)
                return value
            },
            textStyle: {
                color: '#eaeaea', //坐标值得具体的颜色
            }
        }
    },
    series: [{
        name: [1, 2, 4, 5, 6],
        type: 'line',
        lineStyle: {
            normal: {
                color: 'rgba(236, 83, 83,1)'
            }
        },
        smooth: true,
        areaStyle: {
            normal: {
                color: {
                    type: 'linear',
                    x: 0,
                    y: 0,
                    x2: 0,
                    y2: 1,
                    colorStops: [{
                        offset: 0,
                        color: 'rgba(236, 83, 83,0.8)'
                    }, {
                        offset: 0.1,
                        color: 'rgba(236, 83, 83,0.2)'
                    }, {
                        offset: 1,
                        color: 'rgba(236, 83, 83,0)'
                    }]
                }
            }
        },
        data: [670.84, 755.89, 697.61, 434.77, 1180.82, 691.84, 1176.84, 863.58, 677.29, 1156.84, 820.92, 544.27, 1065.67, 843.84, 809.46, 673.98, 1071.53, 627.79, 915.61, 202.94, 404.61, 564.23, 1104.77, 518.5, 817.56, 420.38, 1108.8, 487.07, 857.72, 923.12, 981.72, 695.25, 455.55, 964.18, 972.1, 396.65, 1056.13, 527.08, 1095.11, 304.2, 782.98, 1093.62, 553.98, 970.93, 1124, 749.7, 645.73, 1072.93, 849.3, 1140.66, 990.3, 448.51, 309, 826.06, 845.01, 256.34, 916.51, 451.83, 907.88, 1092.97, 498.52, 494.51, 373.73, 356.06, 287.94, 1138.27, 1085.95, 555.27, 649.14, 1119.56, 424.91, 655.97, 1157.61, 1117.36, 1090.32, 893.86, 406.46, 479.38, 1170.47, 819.74, 882.52, 754.42, 845.09, 623.65, 442.87, 651.44, 741.7, 1046.54, 330.12, 663.23, 356.77, 414.99, 290.44, 680.03, 1063.28, 531.01, 203.48, 473.91, 1055.68, 313.69, 696.35, 959.08, 1130.71, 223.62, 496.38, 626.67, 469.42, 603.18, 778.21, 514.08, 571.03, 1137.4, 480.6, 500.18, 1193.24, 679.9, 506.53, 616.47, 576.62, 697.3, 877.95, 432.98, 372.24, 563.09, 291.8, 414.27, 551.99, 878.12, 1119.26, 446.69, 1160.22, 909.95, 703.42, 512.49, 1063.29, 1127.19, 842.6, 729.47, 869.88, 657.33, 597.94, 686.82, 930.6, 317.91, 1033.26, 1188.44, 779.46, 661.09, 1183.81, 1164.4, 552.5, 230.12, 457.72, 629.56, 810.48, 954.13, 800.07, 1154.98, 803.18, 303.59, 293.9, 373.64, 541.45, 494.21, 436.38, 566.4, 1091.56, 660.48, 1110.21, 367.04, 272.47, 522.75, 271.58, 1087.66, 422.5, 643.17, 595.54, 1095.61, 1105.5, 905.53, 758.25, 1073.41, 549.87, 363.2, 692.7, 860.54, 255.15, 1076.53, 1030.58, 913.33, 561.28, 1007.73, 1037.56, 224.71, 1054.85, 455.97, 662.87, 820, 484.38, 899.42, 856.22, 688.04, 373.26, 463.54, 1056.02, 218.97, 754.57, 555.88, 722.69, 900.55, 405.69, 498.15, 979.37, 1174.42, 633.91, 244.81, 829.24, 971.66, 1055.47, 504.96, 1045.21, 534.23, 921.1, 780.88, 671.84, 684.29, 370.04, 1001.12, 1143.31, 727.85, 542.43, 560.49, 303.16, 672.51, 746.67, 681.07, 1112.81, 400.74, 863.45, 1080.45, 555.2, 871.08, 872.57, 972.64, 1178.82, 318.8, 811.24, 436.7, 884.18, 795.77, 614.31, 1164.93, 931.11, 226.56, 1147.2, 549.23, 739.84, 462.75, 321.35, 979.19, 872.15, 592.6, 480.02, 1109.08, 611.56, 1005.9, 258.55, 703.66, 811.88, 425.82, 858.94, 493.87, 1153.7, 300.51, 1132.46, 263.6, 636.64, 596.17, 1036.83, 1147.55, 1042.34, 1151.95, 926.31, 847.46, 229.43, 343.47, 743.22, 1170.79, 466, 857.95, 508.49, 960.4, 569.06, 907.81, 556.95, 1117.94, 402.41, 203.12, 729.31, 1026.2, 285.26, 465.22, 218.35, 246.64, 1083.98, 1194.13, 971.04, 908.7, 1197.42, 802.21, 470.75, 716.26, 303.99, 1094.43, 365.91, 973.74, 614, 412.64, 771.21, 481.29, 466.15, 566.8, 1147.02, 562.89, 420.14, 950.68, 460.31, 875.55, 529.59, 982.54, 846.95, 999.84, 230.78, 223.37, 230.82, 1133.64, 251.89, 205.81, 308.94, 500.82, 1136.58, 1156.38, 985.08, 345.46, 382.28, 411.72, 725.46, 609.78, 820.05, 416.56, 420.97, 590, 707.45, 746.72, 1169.04, 1029.81, 1069.13, 624.87, 936.35, 244.5, 1102.39, 890.01, 330.21, 971.6]
    }],
    grid: {
        x: 3,
        y: 9,
        left: '15px',
        right: '15px'
    },
}



// 1.遇到两个问题，第一个就说 不知道什么原因，y轴的坐标轴数据无法显示，或者都是0.我在 y的axisLabel: {
            // formatter:function (value) {
            //   console.log(value)
            //     return value
            // },这里是可以拿到当前折线的数据的，但是不知道什么原因y轴无法显示。
            // 问题2   产品需求是年的时候x轴坐标每隔2个月显示一个日期，x轴一年要求只显示6个，而我自定义了数据格式插入到value里，在 x轴的  formatter: function(value, index) {
            //   return value.xDate; 里判断,拿我自己定义的数据,默认好像只能拿到第一个.我想问一下自定义显示哪几个应该如何配置. 
            //   默认的坐标轴 是显示5个的，但是文档上写的是会自己调整，如果不能自定义，能不能写判断当数据量大于多少的时候，强制显示几个