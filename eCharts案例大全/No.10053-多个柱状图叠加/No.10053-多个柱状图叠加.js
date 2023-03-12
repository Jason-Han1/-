var data1 = [20, 30, 20, 30, 20, 30, 20, 30, 20, 30, 20, 30, 12, 45, 74, 44];
var datacity = ['省局', '南京', '无锡', '扬州', '苏州', '盐城', '徐州', '镇江', '淮安', '南通', '常州', '连云港', '泰州', '宿迁', '苏州工业园区', '张家港保税区'];
var option = {
    backgroundColor: '#043065',
    // color: ['#388BFF', '#05C3FA', '#F6931C', '#FFD52E'],
    tooltip: {
        trigger: 'axis',
        axisPointer: { // 坐标轴指示器，坐标轴触发有效
            type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
        },
        formatter: function(param) {
            var resultTooltip = "";
            resultTooltip =
                "<div>" +
                "<div>" + param[0].name + "</div>" +
                "<div>" +
                "<span style='margin-left: 10px; display: inline-block; width: 11px; height: 11px; background-color: #c165e3; border-radius: 5px;'></span>" +
                "<span style=''> " + param[0].seriesName + ": </span>" +
                "<span style=''>" + param[0].value + "</span>" +
                "</div>" +
                "<div>" +
                "<span style='margin-left: 10px; display: inline-block; width: 11px; height: 11px; background-color: #6633cc; border-radius: 5px;'></span>" +
                "<span style=''> " + param[1].seriesName + ": </span>" +
                "<span style=''>" + param[1].value + "</span>" +
                "</div>" +
                "<div>" +
                "<span style='margin-left: 10px; display: inline-block; width: 11px; height: 11px; background-color: #00ffff; border-radius: 5px;'></span>" +
                "<span style=''> 下面所有</span>" +
                "<div style='margin-left: 20px;'>" +
                "<span style='margin-left: 10px; display: inline-block; width: 11px; height: 11px; background-color: #00ffff; border-radius: 5px;'></span>" +
                "<span style=''> " + param[2].seriesName + ": </span>" +
                "<span style=''>" + param[2].value + "</span>" +
                "</div>" +
                "<div style='margin-left: 20px;'>" +
                "<span style='margin-left: 10px; display: inline-block; width: 11px; height: 11px; background-color: #435cc8; border-radius: 5px;'></span>" +
                "<span style=''> " + param[3].seriesName + ": </span>" +
                "<span style=''>" + param[3].value + "</span>" +
                "</div>" +
                "<div style='margin-left: 20px;'>" +
                "<span style='margin-left: 10px; display: inline-block; width: 11px; height: 11px; background-color: #1e6ed7; border-radius: 5px;'></span>" +
                "<span style=''> " + param[4].seriesName + ": </span>" +
                "<span style=''>" + param[4].value + "</span>" +
                "</div>" +
                "<div style='margin-left: 20px;'>" +
                "<span style='margin-left: 10px; display: inline-block; width: 11px; height: 11px; background-color: #3a91e7; border-radius: 5px;'></span>" +
                "<span style=''> " + param[5].seriesName + ": </span>" +
                "<span style=''>" + param[5].value + "</span>" +
                "</div>" +
                "<div style='margin-left: 20px;'>" +
                "<span style='margin-left: 10px; display: inline-block; width: 11px; height: 11px; background-color: #68d4ec; border-radius: 5px;'></span>" +
                "<span style=''> " + param[6].seriesName + ": </span>" +
                "<span style=''>" + param[6].value + "</span>" +
                "</div>" +
                "<div style='margin-left: 20px;'>" +
                "<span style='margin-left: 10px; display: inline-block; width: 11px; height: 11px; background-color: #7beef7; border-radius: 5px;'></span>" +
                "<span style=''> " + param[7].seriesName + ": </span>" +
                "<span style=''>" + param[7].value + "</span>" +
                "</div>" +
                "</div>" +
                "</div>";
            return resultTooltip
        }
    },
    grid: { //图表的位置
        top: '5%',
        left: '5%',
        right: '5%',
        bottom: '10%',
        // containLabel: true
    },
    xAxis: {
        show: true,
        type: 'category',
        // boundaryGap: false,
        axisLine: {
            lineStyle: {
                color: '#57617B'
            }
        },
        axisTick: {
            show: false
        },
        axisLabel: {
            margin: 10,
            textStyle: {
                color: "rgba(255,255,255,.8)",
                fontSize: '12',
            }
        },
        // data: ['ODS', 'DW', '备份库']
        data: datacity
    },
    yAxis: [{
        show: true,
        type: 'value',
        axisTick: {
            show: false
        },
        axisLine: {
            lineStyle: {
                color: '#57617B'
            }
        },
        axisLabel: {
            margin: 10,
            textStyle: {
                color: "rgba(255,255,255,.8)",
                fontSize: '12',
            }
        },
        splitLine: {
            show: false,
            lineStyle: {
                color: "rgba(255,255,255,0.1)",
            }
        }
    }],
    dataZoom: [{
        show: true,
        height: 12,
        xAxisIndex: [0],
        bottom: '2%',
        start: 80,
        end: 100,
        handleIcon: 'path://M306.1,413c0,2.2-1.8,4-4,4h-59.8c-2.2,0-4-1.8-4-4V200.8c0-2.2,1.8-4,4-4h59.8c2.2,0,4,1.8,4,4V413z',
        handleSize: '110%',
        handleStyle: {
            color: "#d3dee5",
        },
        textStyle: {
            color: "#fff"
        },
        borderColor: "#90979c"
    }, {
        type: "inside",
        show: true,
        height: 15,
        start: 1,
        end: 35
    }],
    animationEasing: 'elasticOut',
    series: [{
            name: 'name1',
            type: 'bar',
            stack: 'sum1',
            barWidth: '20px',
            data: data1,
            color: '#c165e3'
        },
        {
            name: 'name2',
            type: 'bar',
            stack: 'sum2',
            barWidth: '20px',
            data: data1,
            color: '#6633cc'
        },
        {
            name: 'name3',
            type: 'bar',
            stack: 'sum3',
            barWidth: '20px',
            data: data1,
            color: '#00ffff'
        },
        {
            name: 'name4',
            type: 'bar',
            stack: 'sum3',
            barWidth: '20px',
            data: data1,
            color: '#435cc8'
        },
        {
            name: 'name5',
            type: 'bar',
            stack: 'sum3',
            barWidth: '20px',
            data: data1,
            color: '#1e6ed7'
        },
        {
            name: 'name6',
            type: 'bar',
            stack: 'sum3',
            barWidth: '20px',
            data: data1,
            color: '#3a91e7'
        },
        {
            name: 'name7',
            type: 'bar',
            stack: 'sum3',
            barWidth: '20px',
            data: data1,
            color: '#68d4ec'
        },
        {
            name: 'name8',
            type: 'bar',
            stack: 'sum3',
            barWidth: '20px',
            data: data1,
            color: '#7beef7'
        },
    ]
};