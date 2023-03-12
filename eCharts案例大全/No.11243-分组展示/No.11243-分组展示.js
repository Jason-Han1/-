app.title = '世界人口总量 - 条形图';

option = {
    title: {
        text: '世界人口总量',
        subtext: '数据来自网络'
    },
    color: ['#3e6591', '#eb7d22', '#d73f45'],
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow'
        }
    },
    legend: {
        data: ['进行中', '待结算','已结算','总额']
    },
    grid: {
        left: '10%',
        right: '10%',
        bottom: '3%',
        containLabel: true
    },
    xAxis: {
        type: 'value',
        boundaryGap: [0, 0.01]
    },
    yAxis: {
        type: 'category',
        data: ['A','B','C','D'],
        offset:50,
    },
    series: [
        {
            name: '进行中',
            type: 'bar',
            data: [18203, 23489, 29034, 104970],
            label: {
                  normal: {
                       show: true,
                       position: 'left',
                       textStyle: {color: '#000'},
                       formatter: '进行中',              
                }
            } 
        },
                {
            name: '待结算',
            type: 'bar',
            data: [18203, 23489, 29034, 104970],
            label: {
                  normal: {
                       show: true,
                       position: 'left',
                       textStyle: {color: '#000'},
                       formatter: '待结算',              
                }
            } 
        },
                {
            name: '已结算',
            type: 'bar',
            data: [18203, 23489, 29034, 104970],
            label: {
                  normal: {
                       show: true,
                       position: 'left',
                       textStyle: {color: '#000'},
                       formatter: '已结算',              
                }
            } 
        },
        {
            name: '总额',
            type: 'bar',
            data: [19325, 23438, 31000, 121594],
            label: {
                  normal: {
                       show: true,
                       position: 'left',
                       textStyle: {color: '#000'},
                       formatter: '总额',              
                }
        } 
        }
    ]
};
