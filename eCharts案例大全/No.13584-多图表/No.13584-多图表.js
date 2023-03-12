var dataAll = {
    "mb_tab_check": { //极耳尺寸测试
        "y_data":[80, 100, 77, 66, 110, 130, 33, 33, 33, 33, 33, 33],
        "total": 8000
    },
    "mb_f_dimen": { //成品尺寸测试
        "y_data": [80, 100, 77, 66, 110, 130, 33, 33, 33, 33, 33, 33],
        "total": 8000
    },
    "mb_f_test": { //成品功能测试
        "y_data": [80, 100, 77, 66, 110, 130, 33, 33, 33, 33, 33, 33],
        "total": 8000
    },
    "mb_weld_check": { //焊点检查，取上一工序PCM信息绑定
        "y_data": [80, 100, 77, 66, 110, 130, 33, 33, 33, 33, 33, 33],
        "total": 8000
    },
    "mb_f_outside": { //成品外观， 取上一工序成品功能测试
        "y_data": [80, 100, 77, 66, 110, 130, 33, 33, 33, 33, 33, 33],
        "total": 8000
    },
    "object_upper_limit": 120,
    "object_lower_limit": 80,
    "x_data": ["08:00-08:10", "08:10-08:20", "08:10-08:20", "08:10-08:20", "08:10-08:20", "08:10-08:20", "08:10-08:20", "08:10-08:20", "08:10-08:20", "08:10-08:20", "08:10-08:20", "08:10-08:20"],
    "line_name": "MBPACK-A4FA",
    "product_material_number": "100001",
    "form_order": "F0001",
    "plan_total": 8000,
    "complete_total": 7000,
    "complete_rate": "90%",
    "product_name": "BT065(HB396285ECW)  手机电池 手机电池 聚合物电芯 1S1P 3.82V  3320mAh  CEUL REACHRoHs无卤 华为编码：24022756 方案三 0201封装 全自动线 华通 含税"
};


var markLineOpt = {
    animation: false,
    label: {
        normal: {
            formatter: 'y = 0.5 * x + 3',
            textStyle: {
                align: 'right'
            }
        }
    },
    lineStyle: {
        normal: {
            type: 'solid'
        }
    },
    tooltip: {
        formatter: 'y = 0.5 * x + 3'
    },
    data: [
        [{
            coord: [0, 3],
            symbol: 'none'
        }, {
            coord: [20, 13],
            symbol: 'none'
        }]
    ]
};


var markxAxis = function(len) {
    var Axis = [];
    for (var i = 0; i < len; i++) {
        Axis.push({
            axisLabel: {
                interval: 0,
                color:'#555',
                rotate:45
            },
            gridIndex: i,
            data: dataAll.x_data
        });
    }
    return Axis;
};
var markyAxis = function(len) {
    var Axis = [];
    for (var i = 0; i < len; i++) {
        Axis.push({
            gridIndex: i,
            axisLabel: {
                color:'#777'
            },
            splitLine:{
                show: false,
            },
            axisTick:{
                //show: false,
            },
            axisLine:{
               // show: false,
            },
            min: function(value) {
                return Math.min(value.min - 5, dataAll.object_lower_limit - 5);
            },
            max: function(value) {
                return Math.max(value.max + 5, dataAll.object_upper_limit + 5);
            }
        });
    }
    return Axis;
};

option = {
    title: [{
        top: '0%',
        x: '25%',
        textStyle: {
          fontSize:14,  
        },
        textAlign: 'center',
        text: '极耳尺寸检查UPM'
    }, {
        x: '75%',
        textStyle: {
          fontSize:14,  
        },
        textAlign: 'center',
        top: '0%',
        text: '焊点检查UPM'
    }, {
        x: '25%',
        textStyle: {
          fontSize:14,  
        },
        textAlign: 'center',
        top: '33%',
        text: '成品尺寸测试UPM'
    }, {
        x: '75%',
        textStyle: {
          fontSize:14,  
        },
        textAlign: 'center',
        top: '33%',
        text: '成品功能测试UPM'
    }, {
        x: '25%',
        textStyle: {
          fontSize:14,  
        },
        textAlign: 'center',
        top: '66%',
        text: '成品外观UPM'
    }],
    grid: [{
            left: '3%',
            top: '5%',
            width: '45%',
            height: '20%'
        },
        {
            left: '53%',
            top: '5%',
            width: '45%',
            height: '20%'
        },
        {
            left: '3%',
            top: '38%',
            width: '45%',
            height: '20%'
        },
        {
            left: '53%',
            top: '38%',
            width: '45%',
            height: '20%'
        },
        {
            left: '3%',
            top: '71%',
            width: '45%',
            height: '20%'
        }
    ],
    /*tooltip: {
        show: 'false'
    },*/
    visualMap: {
        show: false,
        right: '30%',
        pieces: [{
            gt: dataAll.object_upper_limit,
            color: '#ff0000'
        }, {
            lte: dataAll.object_upper_limit,
            gte: dataAll.object_lower_limit,
            color: '#4db64d'
        }, {
            lt: dataAll.object_lower_limit,
            color: '#ff0000'
        }]
    },
    xAxis: markxAxis(5),
    yAxis: markyAxis(5),
    series: [{
            name: 'I',
            type: 'bar',
            xAxisIndex: 0,
            yAxisIndex: 0,
            label: {
                position: 'top',
                show: true,
                color: '#333'
            },
            data: dataAll.mb_tab_check.y_data,
            markLine: markLineOpt
        },
        {
            name: 'II',
            type: 'bar',
            xAxisIndex: 1,
            yAxisIndex: 1,
            label: {
                position: 'top',
                show: true,
                color: '#333'
            },
            data: dataAll.mb_weld_check.y_data,
            markLine: markLineOpt
        },
        {
            name: 'III',
            type: 'bar',
            xAxisIndex: 2,
            yAxisIndex: 2,
            label: {
                position: 'top',
                show: true,
                color: '#333'
            },
            data: dataAll.mb_f_dimen.y_data,
            markLine: markLineOpt
        },
        {
            name: 'IV',
            type: 'bar',
            xAxisIndex: 3,
            yAxisIndex: 3,
            label: {
                position: 'top',
                show: true,
                color: '#333'
            },
            data: dataAll.mb_f_test.y_data,
            markLine: markLineOpt
        },
        {
            name: 'IV',
            type: 'bar',
            xAxisIndex: 4,
            yAxisIndex: 4,
            label: {
                position: 'top',
                show: true,
                color: '#333'
            },
            data: dataAll.mb_f_outside.y_data,
            markLine: markLineOpt
        }
    ]
};