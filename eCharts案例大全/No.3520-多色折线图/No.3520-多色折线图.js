
option = {
    color:['blue', 'lightgreen', 'red',],
    // title: {
    //     text: '近五日来访人员情况',
    //     x: 'center',
    //     top: '10%',
    //     textStyle: { color: '#2D527C', fontSize: '16', fontWeight: 'bold'},
    // },
    legend: {
        top: '14%',
        data: ['来访人员', '健康', '异常']
    },
    // toolbox:{
    //     show: true,
    //     feature: {
    //         // dataZoom: {
    //         //     yAxisIndex: 'none'
    //         // },
    //         dataView: {
    //             // 数据视图
    //             optionToContent: (opt) => {
    //                 var axisData = opt.xAxis[0].data;
    //                 var series = opt.series;
    //                 var table = `<div class="echartstableview"><table style="width:100%;text-align:center">
    //                                 <thead><tr><th>时间</th>`;
    //                 series.forEach(( element, index) => {
    //                     table += `<th>${element.name}</th>`;
    //                 })
    //                 table += `</tr></thead><tbody>`;
    //                 axisData.forEach(( date, index) => {
    //                     table += `<tr><td>${date}</td>`;
    //                     series.forEach(( series_, index_) => {
    //                         table += `<td>${series_.data[index]}</td>`;
    //                     })  
    //                     table += `</tr>`;
    //                 })
    //                 table += '</tbody></table></div>';
    //                 return table;
    //             }
    //         },
    //         magicType: {type: ['line', 'bar']},
    //         restore: {},
    //         saveAsImage: {}
    //     }
    // },
    // tooltip: {
    //     // show: true
    //     trigger: 'axis',
    //     axisPointer: { type: 'cross' },
    // },
    grid: {
        left: '10%',
        right: '10%',
        top: '20%',
        bottom: '20%',
        containLabel: true
    },
    xAxis: {
        axisTick: { show: false },
        axisLabel: {
            textStyle: { color: '#707070', fontSize: 14 }
        },
        axisLine: {
            // onZero: false, // X轴脱离Y轴0刻度
            lineStyle: { color: '#cccccc', type: 'dashed' }
        },
        data: ['5月1日', '5月2日', '5月3日', '5月4日', '5月5日']
    },
    yAxis: {
        name: '人数（人）',
        nameTextStyle:{
            color: '#707070', fontSize: 14
        },
        axisLabel: {
            textStyle: { color: '#707070', fontSize: 14 },
            showMaxLabel:false
        },
        axisLine: {
            symbol :['none', 'arrow'],
            symbolOffset: [0, 4],
            lineStyle: { color: '#707070' }
        },
        splitLine: { show: false },
        boundaryGap: [0, 0.1]
    },
    series: [
        {
            name:'来访人员',
            type: 'line',
            symbolSize: 10,
            z:12,
            data:[15, 6, 12, 3, 8]
        },
        {
            name:'健康',
            type: 'line',
            symbolSize: 10,
            data:[12, 5, 9, 3, 8]
        },
        {
            name:'异常',
            type: 'line',
            symbolSize: 10,
            data:[3, 1, 3, 0, 0]
        }
    ]
};




