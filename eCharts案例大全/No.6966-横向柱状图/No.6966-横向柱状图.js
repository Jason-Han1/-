var nameList = ['开始','进度1','进度2','进度3','进度4','进度5','进度6',]
var len = nameList.length;
option = {
    backgroundColor: '#fff',
    yAxis: {
        type: 'category',
        axisLine: {
            show: false //坐标线
        },
        axisTick: {
            
            show: false //小横线
        },
        axisLabel: {
            show: false,
            color: '#999' //坐标轴字颜色
        },
        data: ['进度']
    },
    xAxis: {
        show: true,
        axisLine: {
            show: false //坐标线
        },
        axisTick: {
            
            show: false //小横线
        },
        splitLine:{
            show:false
        },
        axisLabel:{
            formatter: function (value, index) {
                var texts = '';
                nameList.forEach((item,index2,array)=>{
                    if(index ===index2){
                        texts = item
                    }
                })
                return texts;
            }
        }
    },
    grid: {
        top: '40',
        right: '50',
        left: '80',
        bottom: '40' //图表尺寸大小
    },
    // animationDuration: 9000,
    series: [{
        zlevel: 1,
        type: 'bar',
        barWidth: '10px',
        barGap:'-100%',
       
        label: {
            show: false,
            position: 'right' //每一条的数据位置

        },
        itemStyle: {
            normal: {
                color: '#2d82ff', //每个数据的颜色
                barBorderRadius: [30, 30, 30, 30], //圆角大小
            },
        },
        data: [{
                value: 10
            },
            
        ]
    },{
        type: 'bar',
        barWidth: '10px',
        showBackground: true,
       
        label: {
            show: false,
            position: 'right' //每一条的数据位置

        },
        itemStyle: {
            normal: {
                color:'#30E4FF', //每个数据的颜色
                barBorderRadius: [30, 30, 30, 30], //圆角大小
            },

        },
        data: [{
                value: 6
            },
            
        ]
    }]
};