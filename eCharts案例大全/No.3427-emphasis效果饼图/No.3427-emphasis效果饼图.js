

option = {
    title: {
        text: 'emphasis效果饼图'
    },
    series: [{
        type: 'pie',
        center: ['50%','50%'], // 圆心
        radius: ['40%','50%'], // 圆环图
        itemStyle: {
            borderRadius: 10,
            borderColor: '#fff',
            borderWidth: 2
        },
        data:[
            {name: '招商局蛇口工业区控股股份有限公司', value: 220},
            {name: '美团点评', value: 220},
            {name: '吉利汽车控股有限公司', value: 220},
            {name: '长城汽车股份有限公司', value: 220},
            {name: '信达资产管理股份有限公司', value: 160},
            {name: '大唐国际发电股份有限公司', value: 150},
        ],
        labelLine: {
            
        },
        label: {
            show: false
        },
        emphasis: {
            show: true,
            label: {
                show: true,
                textStyle: {
                    
                },
                formatter({name, percent, value}) {
                    //console.log(echarts.format);
                    window.FF = echarts.format;
                    console.log('a,b,c,d',name, percent, value)
                }
            }
        }
    }]
};

