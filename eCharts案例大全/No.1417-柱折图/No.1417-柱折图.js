let streetChart = {
    monthList: ['2021.4', '2021.5', '2021.6', '2021.7'],
    dataList: [
        {
            name: '凤山街道',
            type: 'bar',
            data: [6766.6, 8583.9, 11429.8, 13327.3],
            itemStyle: {
                color: '#004BD3',
            },
        },
        {
            name: '凤山街道',
            type: 'line',
            yAxisIndex: 1,
            data: ['94.0', '63.3', '65.4', '56.2'],
            itemStyle: {
                color: '#004BD3',
            },
        },
        {
            name: '阳明街道',
            type: 'bar',
            data: [78712.3, 98835.5, 121549, 141131.2],
            itemStyle: {
                color: '#67C23A',
            },
        },
        {
            name: '阳明街道',
            type: 'line',
            yAxisIndex: 1,
            data: ['23.0', '19.5', '19.8', '17.0'],
            itemStyle: {
                color: '#67C23A',
            },
        },
        {
            name: '梨洲街道',
            type: 'bar',
            data: [7070.3, 8595.7, 10462.1, 12468.3],
            itemStyle: {
                color: '#FAC858',
            },
        },
        {
            name: '梨洲街道',
            type: 'line',
            yAxisIndex: 1,
            data: ['68.6', '53.4', '44.1', '36.6'],
            itemStyle: {
                color: '#FAC858',
            },
        },
        {
            name: '兰江街道',
            type: 'bar',
            data: [11711.9, 15118.7, 18556.1, 21845.3],
            itemStyle: {
                color: '#6e25a5',
            },
        },
        {
            name: '兰江街道',
            type: 'line',
            yAxisIndex: 1,
            data: ['41.5', '34.7', '31.7', '27.7'],
            itemStyle: {
                color: '#6e25a5',
            },
        },
        {
            name: '朗霞街道',
            type: 'bar',
            data: [8625.8, 11452.4, 14369.1, 16396.1],
            itemStyle: {
                color: '#ff39b9',
            },
        },
        {
            name: '朗霞街道',
            type: 'line',
            yAxisIndex: 1,
            data: ['39.0', '32.7', '31.6', '24.6'],
            itemStyle: {
                color: '#ff39b9',
            },
        },
        {
            name: '低塘街道',
            type: 'bar',
            data: [5415.2, 7627.9, 9997.8, 11908.2],
            itemStyle: {
                color: '#a456a9',
            },
        },
        {
            name: '低塘街道',
            type: 'line',
            yAxisIndex: 1,
            data: ['49.8', '44.4', '50.9', '46.9'],
            itemStyle: {
                color: '#a456a9',
            },
        },
        {
            name: '马渚镇',
            type: 'bar',
            data: [5195.7, 6948.4, 8819.2, 9564.9],
            itemStyle: {
                color: '#1dace4',
            },
        },
        {
            name: '马渚镇',
            type: 'line',
            yAxisIndex: 1,
            data: ['71.3', '53.7', '53.1', '40.6'],
            itemStyle: {
                color: '#1dace4',
            },
        },
        {
            name: '牟山镇',
            type: 'bar',
            data: [3211.8, 4892.6, 6003.8, 7103.3],
            itemStyle: {
                color: '#00f176',
            },
        },
        {
            name: '牟山镇',
            type: 'line',
            yAxisIndex: 1,
            data: ['35.9', '48.8', '41.0', '40.9'],
            itemStyle: {
                color: '#00f176',
            },
        },
        {
            name: '丈亭镇',
            type: 'bar',
            data: [3430.6, 4459.1, 5690.7, 6817.7],
            itemStyle: {
                color: '#bf4646',
            },
        },
        {
            name: '丈亭镇',
            type: 'line',
            yAxisIndex: 1,
            data: ['51.9', '52.4', '57.3', '57.3'],
            itemStyle: {
                color: '#bf4646',
            },
        },
        {
            name: '三七市镇',
            type: 'bar',
            data: [2465.8, 3256.4, 4004.1, 4851.7],
            itemStyle: {
                color: '#27a525',
            },
        },
        {
            name: '三七市镇',
            type: 'line',
            yAxisIndex: 1,
            data: ['39.0', '39.2', '34.5', '37.7'],
            itemStyle: {
                color: '#27a525',
            },
        },
        {
            name: '河姆渡镇',
            type: 'bar',
            data: [2257.5, 2957.2, 3740.3, 4383.1],
            itemStyle: {
                color: '#85bf46',
            },
        },
        {
            name: '河姆渡镇',
            type: 'line',
            yAxisIndex: 1,
            data: ['74.3', '66.0', '57.5', '48.7'],
            itemStyle: {
                color: '#85bf46',
            },
        },
        {
            name: '泗门镇',
            type: 'bar',
            data: [13712.4, 18597.1, 23374.6, 27640.1],
            itemStyle: {
                color: '#b8bf46',
            },
        },
        {
            name: '泗门镇',
            type: 'line',
            yAxisIndex: 1,
            data: ['57.0', '45.3', '36.1', '33.1'],
            itemStyle: {
                color: '#b8bf46',
            },
        },
        {
            name: '小曹娥镇',
            type: 'bar',
            data: [4173, 4145.2, 4866.6, 6101.1],
            itemStyle: {
                color: '#205F78',
            },
        },
        {
            name: '小曹娥镇',
            type: 'line',
            yAxisIndex: 1,
            data: ['53.6', '-1.3', '15.0', '19.0'],
            itemStyle: {
                color: '#205F78',
            },
        },
        {
            name: '临山镇',
            type: 'bar',
            data: [4721.9, 6447.7, 7782, 9359.6],
            itemStyle: {
                color: '#67a8e0',
            },
        },
        {
            name: '临山镇',
            type: 'line',
            yAxisIndex: 1,
            data: ['69.7', '57.2', '48.1', '48.2'],
            itemStyle: {
                color: '#67a8e0',
            },
        },
        {
            name: '黄家埠镇',
            type: 'bar',
            data: [5149.5, 6935.7, 8598.2, 10006.1],
            itemStyle: {
                color: '#f56c6c',
            },
        },
        {
            name: '黄家埠镇',
            type: 'line',
            yAxisIndex: 1,
            data: ['31.8', '16.5', '18.9', '18.4'],
            itemStyle: {
                color: '#f56c6c',
            },
        },
        {
            name: '陆埠镇',
            type: 'bar',
            data: [3593.4, 4780.5, 5847.5, 7173.9],
            itemStyle: {
                color: '#6cf5dc',
            },
        },
        {
            name: '陆埠镇',
            type: 'line',
            yAxisIndex: 1,
            data: ['54.9', '52.3', '44.1', '47.7'],
            itemStyle: {
                color: '#6cf5dc',
            },
        },
        {
            name: '经济开发区',
            type: 'bar',
            data: [22689.9, 28635.6, 35133.8, 42251.9],
            itemStyle: {
                color: '#5686a9',
            },
        },
        {
            name: '经济开发区',
            type: 'line',
            yAxisIndex: 1,
            data: ['44.1', '37.4', '30.5', '29.2'],
            itemStyle: {
                color: '#5686a9',
            },
        },
        {
            name: '中意生态园',
            type: 'bar',
            data: [44665.8, 55948.8, 70979.7, 83036.7],
            itemStyle: {
                color: '#6756a9',
            },
        },
        {
            name: '中意生态园',
            type: 'line',
            yAxisIndex: 1,
            data: ['699.7', '423.1', '379.5', '175.7'],
            itemStyle: {
                color: '#6756a9',
            },
        },
        {
            name: '大隐镇',
            type: 'bar',
            data: [1799.7, 2253.6, 2746.4, 3370.1],
            itemStyle: {
                color: '#46bfa9',
            },
        },
        {
            name: '大隐镇',
            type: 'line',
            yAxisIndex: 1,
            data: ['81.0', '68.2', '55.3', '56.5'],
            itemStyle: {
                color: '#46bfa9',
            },
        },
        {
            name: '梁弄镇',
            type: 'bar',
            data: [306.8, 368.4, 434.4, 494.5],
            itemStyle: {
                color: '#F35656',
            },
        },
        {
            name: '梁弄镇',
            type: 'line',
            yAxisIndex: 1,
            data: ['169.8', '108.6', '95.3', '82.1'],
            itemStyle: {
                color: '#F35656',
            },
        },
        {
            name: '大岚镇',
            type: 'bar',
            data: [124, 142.8, 254.2, 195.4],
            itemStyle: {},
        },
        {
            name: '大岚镇',
            type: 'line',
            yAxisIndex: 1,
            data: ['-', '1198.2', '2210.9', '1676.4'],
            itemStyle: {},
        },
        {
            name: '四明山镇',
            type: 'bar',
            data: [13.9, 25, 28.6, 32.2],
            itemStyle: {},
        },
        {
            name: '四明山镇',
            type: 'line',
            yAxisIndex: 1,
            data: ['-41.8', '-37.2', '-33.6', '-31.8'],
            itemStyle: {},
        },
        {
            name: '鹿亭乡',
            type: 'bar',
            data: [147.9, 246.4, 294.1, 381.3],
            itemStyle: {},
        },
        {
            name: '鹿亭乡',
            type: 'line',
            yAxisIndex: 1,
            data: ['169.4', '133.1', '68.2', '82.2'],
            itemStyle: {},
        },
    ],
    hideList: {
        "凤山街道": true,
        "阳明街道": true,
        "梨洲街道": true,
        "兰江街道": false,
        "朗霞街道": false,
        "低塘街道": false,
        "马渚镇": false,
        "牟山镇": false,
        "丈亭镇": false,
        "三七市镇": false,
        "河姆渡镇": false,
        "泗门镇": false,
        "小曹娥镇": false,
        "临山镇": false,
        "黄家埠镇": false,
        "陆埠镇": false,
        "经济开发区": false,
        "中意生态园": false,
        "大隐镇": false,
        "梁弄镇": false,
        "大岚镇": false,
        "四明山镇": false,
        "鹿亭乡": false
    },
};
option = {
    tooltip: {
        transitionDuration: 0,
        confine: true,
        trigger: 'axis',
        axisPointer: {
            type: 'shadow',

            textStyle: {
                color: '#05294D',
            },
        },
        backgroundColor: '#fff',
        borderColor: '#135469',
        borderWidth: 0,
        padding: [10, 10, 10, 10],
        formatter: function (params) {
            //return that.getToolyip(params, '街道', that.currentQuota.unitName2);
        },
    },
    legend: {
        show: true,
        top: 'bottom',
        selected: streetChart.hideList, // { '奉化区': false }
    },
    grid: {
        left: '10%',
        bottom: '110',
        right: '10%',
        width: 'auto',
        height: 'auto',
    },
    xAxis: [
        {
            type: 'category',
            data: streetChart.monthList, //['2015年', '2016年', '2017年', '2018年', '2019年'],
            splitLine: {
                //显示分割线
                show: true,
            },
        },
    ],
    yAxis: [
        {
            type: 'value',
            name:  '研发费用（万元）',
            splitLine: {
                //不显示分割线
                show: false,
            },
        },
        {
            type: 'value',
            name:  '同比增速（%）',
            splitLine: {
                show: false,
            },
        },
    ],
    series: streetChart.dataList,
};
