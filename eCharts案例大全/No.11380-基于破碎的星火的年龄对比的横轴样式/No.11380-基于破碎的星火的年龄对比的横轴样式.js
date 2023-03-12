option = {
    backgroundColor: '#002060',
    color: ['#FF5624', '#5EA6FE', '#36c57d', '#2e73ff'],
    legend: {
        data: [
            {
                name: '一般',
                icon: 'circle'
            },
            {
                name: '重大',
                icon: 'circle'
            },
            {
                name: '非常重大',
                icon: 'circle'
            },
         
            ],
        top: 26,
        right: 10,
        textStyle: {
            color: '#FFFFFF',
            fontSize: 14
        },
        itemGap: 34,
        itemWidth: 10,
        itemHeight: 10
    },
    tooltip: {
        trigger: 'axis',
        backgroundColor: '#002060',
        padding: [0, 0, 0, 0],
        textStyle: {
            color: '#FFFFFF'
        },
        axisPointer: {
            type: 'line',
            animation: true,
            lineStyle: {
                color: 'transparent'
            }
        },
        extraCssText: 'box-shadow: 0px 0px 10px -4px rgba(3, 3, 3, .4)',
        formatter: (params, ticket, callback) => {
            let htmls = '',
                xaxisName = '';
            if (params.length > 0) {
                xaxisName = params[0].axisValue;
                htmls += '<div style="font-size:16px;height:32px;color:#0069FF;border-radius:4px;line-height:36px;padding-left:15px;text-align: left;">' + xaxisName + '</div><div>';
                for (let j = 0; j < params.length; j++) {
                    htmls += '<p style="font-size:14px;padding:4px 23px 6px 15px;color:#333;text-align: left;">' + params[j].seriesName + ' : ' + params[j].data + '%</p>';
                }
                htmls += '</div>';
                return htmls;
            }
        }
    },
    xAxis: {
        type: 'category',
        splitLine: {
            show: false
        },
        axisLine: {
            lineStyle: {
                color: '#FFFFFF'
            }
        },
        axisTick: {
            show: false
        },
        axisLabel: {
            fontSize: 13,
            color: '#FFFFFF'
        },
        data: ['甘孜藏族自治州','阿坝藏族羌族自治州 ','成都市','攀枝花市','凉山彝族自治州','绵阳市','达州市','广元市','雅安市','宜宾市','乐山市','南充市','巴中市','泸州市','资阳市','眉山市','广安市','德阳市','内江市','遂宁市','自贡市']
    },
    yAxis: {
        name: '',
        type: 'value',
        nameRotate: 1,
        splitLine: {
            show: false
        },
        axisLine: {
            lineStyle: {
                color: '#FFFFFF'
            }
        },
        axisTick: {
            show: true
        },
        axisLabel: {
            fontSize: 13,
            color: '#FFFFFF'
        }
    },
    series: [
     
   
        {
        name: 'I级违章',
        type: 'bar',
        stack: 'a',
        barWidth: '30%',
        
        data: ['7', '9', '5', '4', '6', '3', '4','5', '4', '6', '3', '4','7', '9', '5', '4', '6', '3', '4','5', '4', '6','8']
        },
        {
        name: 'II级违章',
        type: 'bar',
        stack: 'a',
        barWidth: '30%',
        data: ['5', '7', '6', '4', '8', '4', '5','5', '7', '6', '4', '8', '4', '5','5', '7', '6', '4', '8', '4', '5',]
        }
    ]
};