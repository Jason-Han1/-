// 返回数据
// [出勤率, 人均单量, 人数]
let takeOutData = [
    {
        value: [0, 10000, 100],
        name: '数据2',
    },
    {
        value: [45, 35, 15],
        name: '数据3',
    },
    {
        value: [85, 15, 20],
        name: '数据4',
    },
];
let carData = [
    {
        value: [0, 10000, 100],
        name: '数据2',
    },
    {
        value: [45, 35, 15],
        name: '数据3',
    },
    {
        value: [85, 15, 20],
        name: '数据4',
    },
];

let cleanData = [
    {
        value: [50, 10000, 100],
        name: '数据2',
    },
    {
        value: [85, 35, 15],
        name: '数据3',
    },
    {
        value: [185, 15, 20],
        name: '数据4',
    },
];

option = {
    color: ['#F5B544', '#7BC278', '#508BF1'],
    legend: {
        data: ['外卖','网约车','家政保洁'],
        icon: 'roundRect',
        left: 'center',
        top: '2%',
        itemGap:24,
        itemWidth: 18,
        itemHeight: 12,
      },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            // type: 'cross'
        },
        backgroundColor: 'rgba(245, 245, 245, 0.8)',
        borderWidth: 1,
        borderColor: '#ccc',
        padding: 10,
        formatter: function (params) {
            let result = params.map((item) => {
                return item.name;
            });
            return result.join('<br/>');
        },
        textStyle: {
            color: '#000',
        },
    },
    grid: {
      left: '5%',
        right: '5%',
        bottom: '5%',
        top: '10%',
        containLabel: true,
    },
    xAxis: {
        name: '出勤率',
        nameTextStyle: {
            fontSize: 12,
            color: 'rgba(9,27,61,0.6)',

        },
        splitLine: {
            show: false,
        },
        axisTick: {
            show: false,
        },
        axisLabel: {
            margin: 20,
            textStyle: {
              color: 'rgba(9,27,61,0.6)',
            },
        },
        axisLine: {
            lineStyle: {
              color: '#DDDDDD',
            },
        },
        
    },
    yAxis: {
        name: '人均单量',
        nameTextStyle: {
            fontSize: 12,
            color: 'rgba(9,27,61,0.6)',
        },
        axisTick: {
            show: false,
        },
        axisLine: {
            show:false,
        },
        axisLabel: {
            margin: 20,
            textStyle: {
              color: 'rgba(9,27,61,0.6)',
            },
        },
        splitLine: {
            lineStyle: {
              type: 'dashed',
              color: 'rgba(9,27,61,0.1)',
            },
        },
    },
     visualMap: {
      left: 'right',
      bottom: '10%',
      dimension: 2,
      itemWidth: 30,
      itemHeight: 120,
      calculable: true,
      textGap: 10,
      inRange: {
        symbolSize: [0, 70]
      },
      outOfRange: {
        symbolSize: [0, 70],
        color: ['rgba(255,255,255,0)']
      },
      controller: {
        inRange: {
          color: ['#f9d27d'] 
        },
        outOfRange: {
          color: ['#999']
        }
      }
    },
    series: [
        {
            name:'外卖',
            type: 'scatter',
            data: takeOutData,
        },
        {
            name:'网约车',
            type: 'scatter',
            data: carData,
        },
        {
            name:'家政保洁',
            type: 'scatter',
            data: cleanData,
        }
    ],
};

