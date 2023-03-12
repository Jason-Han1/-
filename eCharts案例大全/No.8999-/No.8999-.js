var data = [['2018/01', 557560, 'brand_search'],
       ['2018/02', 417913, 'brand_search'],
       ['2018/03', 481868, 'brand_search'],
       ['2018/04', 367033, 'brand_search'],
       ['2018/05', 292087, 'brand_search']];
       
option = {
    legend:{
        data:['brand_search']
        
    },
    singleAxis: {
        top: 50,
        bottom: 50,
        axisTick: {},
        axisLabel: {},
        type: 'category',
        data: data.map(v=>v[0]),
    },
    series: [
        {
            type: 'themeRiver',
            // data: [[category中的序号,值,type],[]]
            data: data.map((v,index)=>[index,v[1],v[2]]),
        }
    ]
};