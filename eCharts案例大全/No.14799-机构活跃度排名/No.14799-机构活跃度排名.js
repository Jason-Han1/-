app.title = '世界人口总量 - 条形图';

option = {
    backgroundColor: '#404a59',
    title: {
        text: '机构活跃度排名',
        subtext: '活跃度算法....'
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow'
        }
    },
    legend: {
        data: ['2011年']
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis: {
        type: 'value',
        show: false,
        boundaryGap: [0, 0.01]
    },
    yAxis: {
        type: 'category',
        data: ['深创投','顺为资本','晨星资本','阿里巴巴','IDG资本','真格基金','经纬腾讯','腾讯','创新工场', '红杉资本']
    },
    series: [
        {
            type: 'bar',
            data: [ 11003, 11111, 11260, 11820, 23489, 29034, 104970, 131744, 155666, 230230]
        
            
        },
      
    ]
};
