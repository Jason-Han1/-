option = {
    color: ['#3398DB'],
    title: {
        text: '各省数据合格率统计',
        //textStyle: {
        //    color: '#fff'
        //}
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow'
        },
        formatter: "{b} <br> 合格率: {c}%"
    },
    /*legend: {
        data: [date]
    },*/
    grid: {
        left: '4%',
        right: '4%',
        bottom: '2%',
        containLabel: true
    },
    xAxis: {
        type: 'value',
        boundaryGap: [0, 0.01],
        min: 0,
        max: 100,
        interval: 20,
        axisLabel: {
            formatter: '{value}%',
            textStyle: {
                //color: '#fff',  
                fontWeight: '80'
            }
        }
    },
    yAxis: {
        type: 'category',
        data: ['湖北省', '湖南省', '河南省', '安徽省', '浙江省', '山东省', '广东省'],
        axisLabel: {
            show: true,
            interval: 0,
            rotate: 0,
            margin: 10,
            inside: false,
            textStyle: {
                //color: '#fff',
                fontWeight: '50'
            }
        }
    },
    series: [{
        type: 'bar',
        label: {
            normal: {
                show: true,
                // formatter: '{c}',
                formatter: function(v) {
                    var val = v.data;
                    if (val === 0) {
                        return '';
                    }
                    return val;
                },
                color: '#fff'
            }
        },
        data: [22, 33, 44, 55, 66, 77, 88]
    }]
};