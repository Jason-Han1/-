var color = [
    '#0CD2E6',
    '#3751E6',
    '#FFC722',
    '#886EFF',
    '#008DEC',
    '#114C90',
    '#00BFA5',
];

var title = '自动切换轮播';

var seriesData = [
    { "name": "A需求类型", "value": 30 },
    { "name": "B需求类型", "value": 10 },
    { "name": "C需求类型", "value": 15 },
    { "name": "D需求类型", "value": 23 },
    { "name": "E需求类型", "value": 10 },
    { "name": "其他", "value": 12 }
]

var option = {
    backgroundColor:'#050e31',
    color: color,
    title: {
        top: 20,
        text: title,
        textStyle: {
            fontSize: 20,
            color: '#DDEEFF',
        },
    },
    grid: {
        top: '15%',
        left: 0,
        right: '1%',
        bottom: 5,
        containLabel: true,
    },
    series: [{
        name: '需求类型占比',
        type: 'pie',
        center: ['50%', '50%'],
        radius: ['45%', '65%'],
        label: {
            normal: {
                show: false,
                position: 'center',
                formatter: '{value|{c}}\n{label|{b}}',
                rich: {
                    value: {
                        padding: 5,
                        align: 'center',
                        verticalAlign: 'middle',
                        fontSize: 32,
                    },
                    label: {
                        align: 'center',
                        verticalAlign: 'middle',
                        fontSize: 16,
                    },
                },
            },
            emphasis: {
                show: true,
                textStyle: {
                    fontSize: '12',
                },
            },
        },
        labelLine: {
            show: false,
            length: 0,
            length2: 0,
        },
        data: seriesData,
    }],
};

myChart.setOption(option);

var currentIndex = -1
 console.log(option)
//  let myChart = echarts.getInstanceByDom(document.getElementById("chart-panel"))
 var dataLen = option.series[0].data.length
var timer=0;
 setInterval(() => {
    
     console.log(123)
     //  计时器增加
     timer++;
    if (timer==5) {
        for(let index in arr){
        arr[index].value=(Math.random()*50+100).toFixed(0);
        }
        myChart.setOption({
            series: [{
                data: arr
            }]
        })
        timer=1;
    }
     // 取消之前高亮的图形
     myChart.dispatchAction({
         type: 'downplay',
         seriesIndex: 0,
         dataIndex: currentIndex
     })
     currentIndex = (currentIndex + 1) % dataLen
     // 高亮当前图形
     myChart.dispatchAction({
         type: 'highlight',
         seriesIndex: 0,
         dataIndex: currentIndex
     })
     // 显示 tooltip
     myChart.dispatchAction({
         type: 'showTip',
         seriesIndex: 0,
         dataIndex: currentIndex
     })
    
 }, 3000)