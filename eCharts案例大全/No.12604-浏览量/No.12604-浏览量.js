
option = {
    title: {
        text: '浏览量',
        textStyle: {
            color: '#fff',
        },
    },
    legend: {
        data: ['封堵', '迁建','截污纳管','未处理'],
        top: '27%',
        right: '30%',
        textStyle:{
            color:'#FFFFFF',
            itemWidth:18,//图例的宽度
        itemHeight:15,//图例的高度
            fontSize:20
        }
    },
    backgroundColor: '#153E7E',
    tooltip: {
        trigger: 'axis'
    },
    grid: {
        top: '30%',
        left: '20%',
        right: '30%',
        bottom: '45%',
        containLabel: true
    },
    xAxis: {
        type: 'category',
        boundaryGap: true,
        data: ['枫津', '西津桥', '马浜', '东浜', '一社区', '二社区', '康佳',],
        axisLine: {
            lineStyle: {
                color: "#fff"
            }
        },
        axisLabel: {
            show: true,
            color: '#FFFFFF',
            fontSize: 22,
            interval:0,  

        }
    },
    yAxis: {
        type: 'value',
        axisLine: {
            lineStyle: {
                color: "#fff"
            }
        },
        axisLabel: {
            show: true,
            color: '#FFFFFF',
            fontSize: 20
        }
    },
    series: [
        
        {
            name: '封堵',
            type: 'bar',
            barWidth: '35%',
            stack: '总量',
            data: [28, 18, 17, 16, 15, 14, 13]
        },
        {
            name: '迁建',
            type: 'bar',
            barWidth: '35%',
            stack: '总量',
            data: [20, 18, 16, 35, 32, 31, 28],
            show: true 
        },
        {
            name: '截污纳管',
            type: 'bar',
            barWidth: '35%',
            stack: '总量',
            data: [20, 18, 16, 35, 32, 31, 28]
        },
        {
            name: '未处理',
            type: 'bar',
            barWidth: '35%',
            stack: '总量',
            data: [20, 18, 16, 35, 32, 31, 28]
        }
    ]
};