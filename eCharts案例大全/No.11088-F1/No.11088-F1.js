var data1 = ['三门峡', '上海-徐汇区', '北京', '北京-朝阳区', '天津-和平区', '天津-红桥区', '武汉', '武汉-江夏区', '武汉-洪山区', '武汉-硚口区', '河南省', '洛阳', '海口', '西安-雁塔区', '郑州-中原区', '郑州-二七区', '郑州-惠济区', '郑州-管城回族区', '郑州-经开区', '郑州-郑东新区', '郑州-郑州航空港区', '郑州-金水区', '郑州-高新区'];
var data2 = ['19', '3', '1', '1', '2', '3', '4', '5', '13', '1', '1', '1', '1', '1', '10', '7', '2', '3', '9', '19', '12', '53', '38'];
option = {
    title: {
        text: '地区分布',
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow'
        }
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis: {
        type: 'value',
        boundaryGap: [0, 0.01]
    },
    yAxis: {
        type: 'category',
        data: data1
    },
    series: [
        {
            type: 'bar',
            data: data2
        }
    ]
};
