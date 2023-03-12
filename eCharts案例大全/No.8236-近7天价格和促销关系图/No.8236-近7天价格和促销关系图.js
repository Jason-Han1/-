const set1 = [
    ['日期', '挂牌价', '到手价', '凑单价', '促销数量', '可折价促销数量'],
    ['2019/2/10', 247, 227.12, 213.91, 5, 4],
    ['2019/2/11', 223, 191.73, 167.34, 5, 3],
    ['2019/2/12', 219, 207.2, 197.21, 4, 2],
    ['2019/2/13', 225, 199.69, 176.35, 3, 1],
    ['2019/2/14', 241, 203.57, 180.51, 3, 1],
    ['2019/2/15', 200, 159.79, 159.69, 4, 3],
    ['2019/2/16', 223, 177.12, 173.6, 6, 5],
    ['2019/2/17', 234, 201.25, 178.8, 4, 2],
    ['2019/2/18', 205, 175, 154.35, 6, 5],
    ['2019/2/19', 226, 189.59, 179.62, 5, 4],
    ['2019/2/20', 200, 155.39, 143.67, 6, 5],
    ['2019/2/21', 235, 226.56, 209.99, 4, 3],
    ['2019/2/22', 243, 210.08, 206.66, 3, 1],
    ['2019/2/23', 217, 181.12, 157.73, 6, 4],
    ['2019/2/24', 208, 162.12, 160.91, 3, 2],
    ['2019/2/25', 215, 191.33, 182.45, 4, 3],
    ['2019/2/26', 202, 152.48, 148, 3, 2],
    ['2019/2/27', 241, 236.11, 210.41, 4, 2],
    ['2019/2/28', 240, 193.95, 189.85, 6, 5],
    ['2019/3/1', 205, 165.88, 158.37, 4, 3],
    ['2019/3/2', 237, 218.64, 192.76, 6, 4],
    ['2019/3/3', 242, 236.29, 210.65, 5, 4],
    ['2019/3/4', 241, 237.56, 220.16, 6, 5],
    ['2019/3/5', 228, 181.26, 154.26, 4, 2],
    ['2019/3/6', 236, 189.38, 174.27, 3, 1],
    ['2019/3/7', 243, 237.91, 212.38, 5, 4],
    ['2019/3/8', 202, 175.46, 154.82, 5, 3],
    ['2019/3/9', 216, 186.77, 162.06, 5, 3],
    ['2019/3/10', 223, 187.01, 181.02, 3, 2],
    ['2019/3/11', 200, 150.59, 127.2, 4, 2],
    ['2019/3/12', 231, 184.26, 157.26, 6, 4]
];
const scol = ['#1A9E59','#2684FF','#D96969','#9369D9','#D969BF','#D2D2D2','#262626']

option = {
    dataset: [{
        source: set1,
    }],
    // backgroundColor: '#fff',
    dataZoom: {
        type: 'slider',
        handleSize: '80%',
        height: 16,
        bottom: 8
    },
    legend: {
        left: 16,
        top: 8,
        data: set1[0].slice(1)
    },
    grid: {
        left: 48,
        right: 32,
        top: 64,
        bottom: 64
    },
    tooltip: {
        show: true
    },
    xAxis: {
        type: 'time'
    },
    yAxis: [
        {
            id:0,
            type:'value',
            name:'价格'
        },
        {
            id:1,
            type:'value',
            name:'促销数量'
        }
    ],
    series:[
        {
            type:'line',
            yAxisIndex:0,
            name:set1[0][1],
            step:true,
            encode:{
                x:0,
                y:1
            },
            lineStyle:{
                color:scol[0]
            },
            itemStyle:{
                color:scol[0]
            },
        },
        {
            type:'line',
            yAxisIndex:0,
            name:set1[0][2],
            step:true,
            encode:{
                x:0,
                y:2
            },
            lineStyle:{
                color:scol[1]
            },
            itemStyle:{
                color:scol[1]
            },
        },
        {
            type:'line',
            yAxisIndex:0,
            name:set1[0][3],
            step:true,
            encode:{
                x:0,
                y:3
            },
            lineStyle:{
                color:scol[2]
            },
            itemStyle:{
                color:scol[2]
            },
        },
        {
            type:'bar',
            barWidth:'60%',
            yAxisIndex:1,
            name:set1[0][4],
            // step:true,
            encode:{
                x:0,
                y:4
            },
            lineStyle:{
                color:scol[6]
            },
            itemStyle:{
                color:scol[6],
                opacity:0.6
            },
        },
        {
            type:'bar',
            barGap:'-100%',
            barWidth:'60%',
            yAxisIndex:1,
            name:set1[0][5],
            // step:true,
            encode:{
                x:0,
                y:5
            },
            lineStyle:{
                color:scol[4]
            },
            itemStyle:{
                color:scol[4],
                opacity:0.6
            },
        },
        
    ],
    // series: Array.from({
    //     length: 5
    // }).map((key, idx) => ({
    //     name: set1[0][idx + 1],
    //     type: 'line',
    //     // step: true,
    //     encode: {
    //         x: 0,
    //         y: idx + 1
    //     },
    //     // markPoint: {
    //     //     data: [{
    //     //             name: '最高',
    //     //             type: 'max',
    //     //         },
    //     //         {
    //     //             name: '最低',
    //     //             type: 'min'
    //     //         }
    //     //     ],
    //     //     symbol: 'circle',
    //     //     symbolSize: '16',
    //     //     itemStyle: {
    //     //         opacity: 0.5
    //     //     },
    //     //     label: {
    //     //         show: false
    //     //     }
    //     // }
    // }))


};
myChart.resize({
    width: 728,
    height: 290
});