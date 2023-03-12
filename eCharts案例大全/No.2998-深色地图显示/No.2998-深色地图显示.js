var uploadedDataURL = '/asset/get/s/data-1623048704698-g1I4zum9i.json';

myChart.showLoading();

$.getJSON(uploadedDataURL, function (geoJson) {
    //geoJson：地图配置
    var geoCoordMap = [
        {
            name: '铜元局街道',
            value: 9508,
            center: '[106.551715,29.535452]',
        },
        {
            name: '花园路街道',
            value: 6618,
            center: '[106.559975,29.513858]',
        },
        {
            name: '南坪街道',
            value: 17425,
            center: '[106.576293,29.536841]',
        },
        {
            name: '海棠溪街道',
            value: 52632,
            center: '[106.594659,29.549126]',
        },
        {
            name: '龙门浩街道',
            value: 77566,
            center: '[106.600889,29.558524]',
        },
        {
            name: '弹子石街道',
            value: 90811,
            center: '[106.596689,29.588186]',
        },
        {
            name: '南山街道',
            value: 76247,
            center: '[106.61456,29.550597]',
        },
        {
            name: '天文街道',
            value: 6036,
            center: '[106.660338,29.521843]',
        },
        {
            name: '南坪镇',
            value: 91474,
            center: '[106.578033,29.532214]',
        },
        {
            name: '涂山镇',
            value: 22694,
            center: '[106.608112,29.583989]',
        },
        {
            name: '鸡冠石镇',
            value: 12305,
            center: '[106.61955,29.600138]',
        },
        {
            name: '峡口镇',
            value: 17520,
            center: '[106.675192,29.56862]',
        },
        {
            name: '长生桥镇',
            value: 61539,
            center: '[106.675452,29.510935]',
        },
        {
            name: '迎龙镇',
            value: 23673,
            center: '[106.717726,29.52648]',
        },
        {
            name: '广阳镇',
            value: 21793,
            center: '[106.784151,29.601682]',
        },
    ]; //区域范围数据
    //图表加载方法
    echarts.registerMap('动态地图', geoJson);
    myChart.hideLoading();
    option = {
        backgroundColor: '#0a0b30',
        tooltip: {
            trigger: 'item',
            formatter: function (params) {
                if (typeof params.value[2] == 'undefined') {
                    return params.name + ' : ' + params.value;
                } else {
                    return params.name + ' : ' + params.value[2];
                }
            }
        },
        legend: {
            left: 'left',
            data: ['强', '中', '弱'],
            textStyle: {
                color: '#ccc',
            },
        },
        geo: {
            map: '动态地图',
            roam: true,
            label: {
                normal:{
                    show:true,
                    color:'#fff'
                },
                emphasis: {
                    show: true,
                    color:'#fff'
                },
            },
            itemStyle: {
                normal: {
                    areaColor: '#24CFF4',
                    borderColor: '#2871FF', //线
                    shadowColor: '#02DAE3',
                    borderWidth: 0.5,
                    shadowBlur: 15,
                    shadowOffsetX : 0,
                    shadowOffsetY: 0,
                },
                emphasis: {
                    borderWidth: 2.5,
                    shadowBlur: 15,
                    areaColor:'#0a0b30'
                },
            },
        },
        series: {
            name: '详细情况明细图',
            type: 'map',
            geoIndex: 0,
            map: '动态地图',
            roam: true,
            zoom: 1.3,
            tooltip: {
                trigger: 'item',
                formatter: (p) => {
                    let val = p.value;
                    let txtCon = "<div style='text-align:left'>" + p.name + ':<br />' + val + '</div>';
                    return txtCon;
                },
            },
            label: {
                normal: {
                    show: true,
                },
                emphasis: {
                    show: true,
                },
            },
            data: geoCoordMap,
        },
    };
    myChart.setOption(option);

    //处理分区域颜色范围
    var mapData = [];
    var min = null;
    var max = null;
    for (var s = 0; s < geoCoordMap.length; s++) {
        if (!min || geoCoordMap[s]['value'] < min) {
            min = geoCoordMap[s]['value'];
        }
        if (!max || geoCoordMap[s]['value'] > max) {
            max = geoCoordMap[s]['value'];
        }
    }
    option.visualMap = {
        min: min,
        max: max,
        left: '3%',
        bottom: '5%',
        calculable: true,
        seriesIndex: 0,
        inRange: {
            color: ['#164CFF', '#0027AB', '#00196D'],
        },
        textStyle: {
            color: '#24CFF4',
        },
    };
    myChart.setOption(option);
});
