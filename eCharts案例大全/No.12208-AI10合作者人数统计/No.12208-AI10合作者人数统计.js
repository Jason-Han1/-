app.title = '堆叠条形图';

option = {
    tooltip : {
        trigger: 'axis',
        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        }
    },
        title: [{
        text: 'The number distribution',
        left: '1%',
        top: '6%',
        textStyle: {
            color: '#ff733f'
        }
    }, {
        text: 'The ratio distribution',
        left: '83%',
        top: '6%',
        textAlign: 'center',
        textStyle: {
            color: '#ff733f'
        }
    }],
    legend: {
         
 
        data: ['0-9', '10-19','20-29','30-39','40-49','50-99']
    },
    grid: {
        left: '1%',
        right: '50%',
        top: '16%',
        bottom: '26%',
        containLabel: true
    },
    xAxis:  {
        type: 'value'
    },
    yAxis: {
        type: 'category',
        data: ['0-9', '10-19','20-29','30-39','40-49','50-99']
    },
    series: [
        // {
        //     // name: '销量',
        //     type: 'bar',
        //     data: [
        //         {value:1324, name:'0-9'},
        //         {value:630, name:'10-19'},
        //         {value:207, name:'20-29'},
        //         {value:87, name:'30-39'},
        //         {value:41, name:'40-49'},
        //         {value:25, name:'50-99'}
        //     ]
        // },
        {
            name: '50-99',
            type: 'bar',
            stack: '总量',
            label: {
                normal: {
                    show: true,
                    position: 'right',
                    distance: 0
                }
            },
            data: [0,0,0,0,0,1324]
        },
        {
            name: '40-49',
            type: 'bar',
            stack: '总量',
            label: {
                normal: {
                    show: true,
                    position: 'right',
                    distance: 0
                }
            },
            data: [0,0,0,0,603]
        },
        {
            name: '30-39',
            type: 'bar',
            stack: '总量',
            label: {
                normal: {
                    show: true,
                    position: 'right',
                    distance: 0
                }
            },
            data: [0, 0,0,207]
        },
        {
            name: '20-29',
            type: 'bar',
            stack: '总量',
            label: {
                normal: {
                    show: true,
                    position: 'right',
                    distance: 0
                }
            },
            data: [0,0,87]
        },
        {
            name: '10-19',
            type: 'bar',
            stack: '总量',
            label: {
                normal: {
                    show: true,
                    position: 'right',
                    distance: 0
                }
            },
            data: [0,41]
        },
        {
            name: '0-9',
            type: 'bar',
            stack: '总量',
            label: {
                normal: {
                    show: true,
                    position: 'right',
                    distance: 0
                }
            },
            data: [25]
        },
        {
        type: 'pie',
        center: ['75%', '50%'],
        radius: ['35%', '49%'],

              data:[
                {value:1324, name:'0-9'},
                {value:630, name:'10-19'},
                {value:207, name:'20-29'},
                {value:87, name:'30-39'},
                {value:41, name:'40-49'},
                {value:25, name:'50-99'}
            ]
    },


  
    ]
};