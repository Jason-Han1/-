let max = 180;
let value = 50;
let colorBar = {
    type: 'linear',
    // 两端添加透明度,模拟两端线收缩
    colorStops: [
        {
            offset: 0,
            color: 'rgba(255, 165, 49, 1)', // 0% 处的颜色
        },
        {
            offset: 1,
            color: 'rgba(255, 201, 73, 1)', // 100% 处的颜色
        }
    ],
};
let color = 'rgba(255, 165, 49, 0.2)';

option = {
    title:{
        text:'主讲本科课程的教授占教授总数的比例（%）',
        textStyle:{
            fontSize:12,
            color:'rgba(202, 238, 255, 1)'
        }
    },
    angleAxis: {
        show: false,
        max: (max * 360) / 180,
        type: 'value',
        startAngle: 180,
        splitLine: {
            show: false,
        },
    },
    //圆环位置和大小
    polar: {
        center:[100,100],
        radius: '200%',
    },
    radiusAxis: {
        show: false,
        type: 'category',
    },
    series: [
        {
            type:'pie',
            radius:'100%',
            center:['50%','50%'],
            itemStyle:{
                color:'rgba(0,0,0,0)'
            },
            data:[1],
            label:{
                show:true,
                textStyle:{
                    color:'rgba(255, 201, 73, 1)',
                    fontSize:24,
                    padding:[0,0,50,0]
                },
                position:'center',
                formatter:()=>{
                    return (value/max*100).toFixed(0) + '%'
                }
            }
        },
        {
            type: 'bar',
            data: [value],
            barWidth: 20,
            stack: 'sameBar',
            coordinateSystem: 'polar',
            z: 3,
            itemStyle: {
                color: colorBar,
                // shadowColor: colorBar,
                // shadowBlur: 3,
            },
        },
        {
            type: 'bar',
            data:[max/180],
            barWidth:20,
            stack:'sameBar',
            coordinateSystem: 'polar',
            z:3,
            itemStyle:{
                color:'rgba(0,0,0,0)'
            }
        },
        {
            type: 'bar',
            data: [ max - value ],
            barWidth: 20,
            stack: 'sameBar',
            coordinateSystem: 'polar',
            z: 3,
            itemStyle: {
                color: color,
            },
        },
        {
            type: 'bar',
            barGap: '-100%',
            barWidth: 28,
            data: [
                {
                    value: value,
                    itemStyle: {
                        color: color,
                    },
                },
            ],
            coordinateSystem: 'polar',
        },
    ],
};
