var placeHoledStyle = {
    normal:{
        barBorderColor:'rgba(0,0,0,0)',
        color:'rgba(0,0,0,0)'
    },
    emphasis:{
        barBorderColor:'rgba(0,0,0,0)',
        color:'rgba(0,0,0,0)'
    }
};
var dataStyle = { 
    normal: {
        label : {
            show: true,
            position: 'insideLeft',
            formatter: '{c}%'
        }
    }
};
option = {
    title: {
        text: '多维条形图',
        subtext: 'From ExcelHome',
        sublink: 'http://e.weibo.com/1341556070/AiEscco0H'
    },
    tooltip : {
        trigger: 'axis',
        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        },
        formatter : '{b}<br/>{a0}:{c0}%<br/>{a2}:{c2}%<br/>{a4}:{c4}%<br/>{a6}:{c6}%'
    },
    legend: {
        y: 55,
        //itemGap : document.getElementById('main').offsetWidth / 8,
        data:['GML', 'PYP','WTC', 'ZTW']
    },
    toolbox: {
        show : true,
        feature : {
            mark : {show: true},
            dataView : {show: true, readOnly: false},
            restore : {show: true},
            saveAsImage : {show: true}
        }
    },
    grid: {
        y: 80,
        y2: 30
    },
    xAxis : [
        {
            type : 'value',
            position: 'top',
            splitLine: {show: false},
            axisLabel: {show: false}
        }
    ],
    yAxis : [
        {
            type : 'category',
            splitLine: {show: false},
            data : ['重庆', '天津', '上海', '北京']
        }
    ],
    series : [
        {
            name:'GML',
            type:'bar',
            stack: '总量',
            itemStyle : dataStyle,
            data:[38, 50, 33, 72]
        },
        {
            name:'GML',
            type:'bar',
            stack: '总量',
            itemStyle: placeHoledStyle,
            data:[62, 50, 67, 28]
        },
        {
            name:'PYP',
            type:'bar',
            stack: '总量',
            itemStyle : dataStyle,
            data:[61, 41, 42, 30]
        },
        {
            name:'PYP',
            type:'bar',
            stack: '总量',
            itemStyle: placeHoledStyle,
            data:[39, 59, 58, 70]
        },
        {
            name:'WTC',
            type:'bar',
            stack: '总量',
            itemStyle : dataStyle,
            data:[37, 35, 44, 60]
        },
        {
            name:'WTC',
            type:'bar',
            stack: '总量',
            itemStyle: placeHoledStyle,
            data:[63, 65, 56, 40]
        },
        {
            name:'ZTW',
            type:'bar',
            stack: '总量',
            itemStyle : dataStyle,
            data:[71, 50, 31, 39]
        },
        {
            name:'ZTW',
            type:'bar',
            stack: '总量',
            itemStyle: placeHoledStyle,
            data:[29, 50, 69, 61]
        }
    ]
};
                    