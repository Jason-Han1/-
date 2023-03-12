option = {
    title: {
        text: '每天GPU利用率曲线'
    },
    tooltip: {
        trigger: 'axis'
    },
    legend: {
        data:['周一','周二','周三','周四','周五']
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    toolbox: {
        feature: {
            saveAsImage: {}
        }
    },
    xAxis: {
        type: 'category',
        boundaryGap: false,
        axisLabel:{
                interval:0,
                rotate:50
            },
        data: ['minqinchen','zhengxinkang','zhentaotan','jiaweili','leimao','zhiboniu','huixue','liuchang','geyongtao','changweilin','qingqishi','mingzhang','zuweihuang','xiaozhang','diwu','xingyuzhou','yiwenhuang','zhichengsun','lindong']
    },
    yAxis: {
        type: 'value',
        min: 0,
        max: 100,
        interval: 20
    },
    series: [
        {
            name:'周一',
            type:'line',
            label: {
                normal: {
                    show: true
                }
            },
            data:[0.00,1.72,7.05,13.06,13.51,14.38,16.45,17.35,18.25,20.43,25.84,43.32,45.97,50.40,52.17,81.65,82.80,90.52,0]
        },
        {
            name:'周二',
            type:'line',
            label: {
                normal: {
                    show: true
                }
            },
            
            data:[0.00,2.10,9.19,0,2.52,14.45,6.17,17.6,20.67,25.02,26.77,42.66,43.03,46.8,0,81.63,82.79,90.57,0]
        },
        {
            name:'周三',
            type:'line',
            label: {
                normal: {
                    show: true
                }
            },
            data:[0,1.86,13.86,19.97,64.28,15.09,5.1,0,16.82,8.06,25.81,57.67,55.35,47.51,0,82.37,82.35,90.4,0]
        },
        {
            name:'周四',
            type:'line',
            label: {
                normal: {
                    show: true
                }
            },
            data:[0,1.21,14.61,24.93,13.79,0,4.6,0,1.86,14.24,21.92,77.4,63.9,50.62,0,82.51,82.62,90.36,0]
        },
        {
            name:'周五',
            type:'line',
            label: {
                normal: {
                    show: true
                }
            },
            data:[0,0.67,6.58,25.13,13.93,0,5.3,0,34.98,11.29,21.55,75.43,65.33,50.82,0,82.46,82.91,90.35,0]
        }
    ]
};
