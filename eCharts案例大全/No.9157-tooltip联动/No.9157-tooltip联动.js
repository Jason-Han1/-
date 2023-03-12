var xAxisData = ['2019-12-03','2019-12-04','2019-12-05','2019-12-06',
'2019-12-07','2019-12-08','2019-12-09','2019-12-10','2019-12-11',
'2019-12-12','2019-12-13','2019-12-14','2019-12-15','2019-12-16']
var xAxisDayData = [];
Array.from(Array(48), (v, k) => k).forEach(el => {
    xAxisDayData.push(el)
})

option = {
    axisPointer: {
        link: [
            {
                xAxisIndex: [0,1],
            },   
            {
                xAxisIndex: [2,3],
            },
        ],
    },
     tooltip : {
        trigger: 'axis',
        axisPointer : {            
            type : 'shadow'
        },
        formatter: function(params, b, c){
            let dataArr = [];
            let newDataArr = [];
            let formatterStr = ''
            params.map(function (item, index) {
                dataArr[item.seriesIndex] = item;
            })

            dataArr.map(function (item, index) {
                newDataArr.push({seriesName: item.seriesName, name: item.name, value: item.value})
            })
            
            formatterStr += newDataArr[0].name + '<br />';
           
            newDataArr.map(function (item, index) {
                formatterStr += item.seriesName + ': ' + item.value + '<br />';
            })
            return　formatterStr
        }
    },
    xAxis: [
        {
            type: 'category',
            data: xAxisData,
            gridIndex: 0
        },
        {
            type: 'category',
            data: xAxisData,
            gridIndex: 1
        },
        {
            type: 'category',
            data: xAxisDayData,
            gridIndex: 2
        },
        {
            type: 'category',
            data: xAxisDayData,
            gridIndex: 3
        }
    ],
    yAxis: [
        {
            type: 'value',
            name: '单位：pc',
            gridIndex: 0
        },
        {
            type: 'value',
            name: '单位：次',
            gridIndex: 1
        },
        {
            type: 'value',
            name: '单位：pc',
            gridIndex: 2
        },
        {
            type: 'value',
            name: '单位：次',
            gridIndex: 3
        }
    ],
    grid: [
        {
            top: '6%',
            right: '52%',
            bottom: '56%',
        },
        {
            top: '56%',
            right: '52%',
            bottom: '6%'
        },
         {
            top: '6%',
            left: '52%',
            bottom: '56%',
        },
        {
            top: '56%',
            left: '52%',
            bottom: '6%'
        }
    ],
    series: [
        {
            name: '幅值',
            data: [120, 200, 150, 80, 70, 110, 130],
            xAxisIndex: 0,//使用x轴的索引
            yAxisIndex: 0,//使用y轴的索引
            type: 'bar',
        },
        {
            name: '频次',
            data: [19, 20, 15, 8, 7, 11, 13],
            xAxisIndex: 1,//使用x轴的索引
            yAxisIndex: 1,//使用y轴的索引
            type: 'line'
        },
        {
            name: '幅值',
            data: [120, 200, 150, 80, 70, 110, 130],
            xAxisIndex: 2,//使用x轴的索引
            yAxisIndex: 2,//使用y轴的索引
            type: 'bar',
        },
        {
            name: '频次',
            data: [19, 20, 15, 8, 7, 11, 13],
            xAxisIndex: 3,//使用x轴的索引
            yAxisIndex: 3,//使用y轴的索引
            type: 'line'
        }
    ]
};
