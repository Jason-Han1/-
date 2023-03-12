//获取每月的天数
function mGetDate(year, month){
    var d = new Date(year, month, 0);
    return d.getDate();
}

//获取两个数之间的随机整数
function getRandomNumberByRange(start, end) { 
    return Math.floor(Math.random() * (end - start) + start)
}

//12个月的颜色
let color = [
    "#0090FF",  //第一月背景
    "#0079AF",  //第二月背景
    "#36CE9E",  //第三月背景
    "#2FA57A",  //第四月背景
    "#00FFF2",  //第五月背景
    "#00BCAE",  //第六月背景
    "#FFC005",  //第七月背景
    "#DD9F05",  //第八月背景
    "#FF515A",  //第九月背景
    "#B73B47",  //第十月背景
    "#8B5CFF",  //第十一月背景
    "#6245BA",  //第十二月背景
];

const hexToRgba = (hex, opacity) => {
    let rgbaColor = "";
    let reg = /^#[\da-f]{6}$/i;
    if (reg.test(hex)) {
        rgbaColor = `rgba(${parseInt("0x" + hex.slice(1, 3))},${parseInt(
    "0x" + hex.slice(3, 5)
    )},${parseInt("0x" + hex.slice(5, 7))},${opacity})`;
    }
    return rgbaColor;
}

//数据
let datas = [];
for (var i = 1; i <= 12; i++) {
    for (var j = 1; j <= mGetDate(2021,i); j++) {
        let date1 = i+"-" +j
        if(date1.slice(0,2).indexOf('-') > -1){
            date1 = '0' + date1
        }
        datas.push({
            'date1':date1,
            'data1':getRandomNumberByRange(0,500),
            'data2':getRandomNumberByRange(0,500),
            'data3':getRandomNumberByRange(0,500),
            'data4':getRandomNumberByRange(0,500),
        })
    }
}

//柱状图数据
let xData=[],data1=[],data2=[],data3=[],data4=[];
//折线图数据
let value1 = [],value2 = [],value3 = [],value4 = [],value5 = [],value6 = [],value7 = [],value8 = [],value9 = [],value10 = [],value11 = [],value12 = [];

datas.map((item,index)=>{
    xData.push(item.date1);
    data1.push(item.data1);
    data2.push(item.data2);
    data3.push(item.data3);
    data4.push(item.data4);
    
    let next = datas[index+1]&&datas[index+1].date1
    //第一月
    if(item.date1.slice(0,2) == '01'){
        value1.push(2000);
        //判断是当前月最后一条数据的话下个月的第一条数据赋值
        if(item.date1.slice(0,2) == '01' && next && next.slice(0,2) == '02'){
        value2.push(2000);
        }else{
        value2.push(undefined);
        }
        value3.push(undefined);
        value4.push(undefined);
        value5.push(undefined);
        value6.push(undefined);
        value7.push(undefined);
        value8.push(undefined);
        value9.push(undefined);
        value10.push(undefined);
        value11.push(undefined);
        value12.push(undefined);
    //第二月
    }else if(item.date1.slice(0,2) == '02'){
        value2.push(2000);
        //判断是当前月最后一条数据的话下个月的第一条数据赋值
        if(item.date1.slice(0,2) == '02' && next && next.slice(0,2) == '03'){
        value3.push(2000);
        }else{
        value3.push(undefined);
        }
        value4.push(undefined);
        value5.push(undefined);
        value6.push(undefined);
        value7.push(undefined);
        value8.push(undefined);
        value9.push(undefined);
        value10.push(undefined);
        value11.push(undefined);
        value12.push(undefined);
    //第三月
    }else if(item.date1.slice(0,2) == '03'){
        value3.push(2000);
        //判断是当前月最后一条数据的话下个月的第一条数据赋值
        if(item.date1.slice(0,2) == '03' && next && next.slice(0,2) == '04'){
        value4.push(2000);
        }else{
        value4.push(undefined);
        }
        value5.push(undefined);
        value6.push(undefined);
        value7.push(undefined);
        value8.push(undefined);
        value9.push(undefined);
        value10.push(undefined);
        value11.push(undefined);
        value12.push(undefined);
    //第四月
    }else if(item.date1.slice(0,2) == '04'){
        value4.push(2000);
        //判断是当前月最后一条数据的话下个月的第一条数据赋值
        if(item.date1.slice(0,2) == '04' && next && next.slice(0,2) == '05'){
        value5.push(2000);
        }else{
        value5.push(undefined);
        }
        value6.push(undefined);
        value7.push(undefined);
        value8.push(undefined);
        value9.push(undefined);
        value10.push(undefined);
        value11.push(undefined);
        value12.push(undefined);
    //第五月
    }else if(item.date1.slice(0,2) == '05'){
        value5.push(2000);
        //判断是当前月最后一条数据的话下个月的第一条数据赋值
        if(item.date1.slice(0,2) == '05' && next && next.slice(0,2) == '06'){
        value6.push(2000);
        }else{
        value6.push(undefined);
        }
        value7.push(undefined);
        value8.push(undefined);
        value9.push(undefined);
        value10.push(undefined);
        value11.push(undefined);
        value12.push(undefined);
    //第六月
    }else if(item.date1.slice(0,2) == '06'){
        value6.push(2000);
        //判断是当前月最后一条数据的话下个月的第一条数据赋值
        if(item.date1.slice(0,2) == '06' && next && next.slice(0,2) == '07'){
        value7.push(2000);
        }else{
        value7.push(undefined);
        }
        value8.push(undefined);
        value9.push(undefined);
        value10.push(undefined);
        value11.push(undefined);
        value12.push(undefined);
    //第七月
    }else if(item.date1.slice(0,2) == '07'){
        value7.push(2000);
        //判断是当前月最后一条数据的话下个月的第一条数据赋值
        if(item.date1.slice(0,2) == '07' && next && next.slice(0,2) == '08'){
        value8.push(2000);
        }else{
        value8.push(undefined);
        }
        value9.push(undefined);
        value10.push(undefined);
        value11.push(undefined);
        value12.push(undefined);
    //第八月
    }else if(item.date1.slice(0,2) == '08'){
        value8.push(2000);
        //判断是当前月最后一条数据的话下个月的第一条数据赋值
        if(item.date1.slice(0,2) == '08' && next && next.slice(0,2) == '09'){
        value9.push(2000);
        }else{
        value9.push(undefined);
        }
        value10.push(undefined);
        value11.push(undefined);
        value12.push(undefined);
    //第九月
    }else if(item.date1.slice(0,2) == '09'){
        value9.push(2000);
        //判断是当前月最后一条数据的话下个月的第一条数据赋值
        if(item.date1.slice(0,2) == '09' && next && next.slice(0,2) == '10'){
        value10.push(2000);
        }else{
        value10.push(undefined);
        }
        value11.push(undefined);
        value12.push(undefined);
    //第十月
    }else if(item.date1.slice(0,2) == '10'){
        value10.push(2000);
        //判断是当前月最后一条数据的话下个月的第一条数据赋值
        if(item.date1.slice(0,2) == '10' && next && next.slice(0,2) == '11'){
        value11.push(2000);
        }else{
        value11.push(undefined);
        }
        value12.push(undefined);
    //第十一月
    }else if(item.date1.slice(0,2) == '11'){
        value11.push(2000);
        //判断是当前月最后一条数据的话下个月的第一条数据赋值
        if(item.date1.slice(0,2) == '11' && next && next.slice(0,2) == '12'){
        value12.push(2000);
        }else{
        value12.push(undefined);
        }
    //第十二月
    }else if(item.date1.slice(0,2) == '12'){
        value12.push(2000);
    }
})
  
option = {
    tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'shadow'
            },
            formatter:(res)=>{
                let title = res[0].name;
                let text1 = res[0].seriesName + ":" + res[0].value
                let text2 = res[1].seriesName + ":" + (res[0].value + res[1].value)
                let text3 = res[2].seriesName + ":" + (res[0].value + res[1].value + res[2].value)
                let text4 = res[3].seriesName + ":" + (res[0].value + res[1].value + res[2].value + res[3].value)
                return title + "<br/>" + text1 + "<br/>" + text2 + "<br/>" + text3 + "<br/>" + text4
            }
        },
        dataZoom : [
          {
            type: 'slider',
            show: true,
            start: 0,
            end: 100,
            bottom:60,
            height:50,
          }
        ],
        grid: [
          {
            top: 10,
            left:80,
            right:10,
            bottom: 150
          }
        ],
        xAxis: [{
            type: 'category',
            data: xData,
            gridIndex: 0,
            axisLabel: {
                rotate:25,
                color: '#333',
                fontSize:14
            },
            axisLine: {
                lineStyle: {
                    color: '#e7e7e7'
                }
            },
            axisTick: {
                lineStyle: {
                    color: '#e7e7e7'
                }
            },
            zlevel: 2
        }],
        yAxis: [{
            type: 'value',
            gridIndex: 0,
            axisLabel: {
                color: '#333',
                fontSize:14
            },
            splitLine: {
                lineStyle: {
                    type: 'dashed'
                }
            },
            axisLine: {
                lineStyle: {
                    color: '#ccc'
                }
            },
            axisTick: {
                lineStyle: {
                    color: '#ccc'
                }
            }
        }],
        series: [{
            name:'第一组',
            data: data1,
            type: 'bar',
            stack:'1',
            label: {
                show: false,
            },
            itemStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: hexToRgba('#90BEFF', 1)
                    }, {
                        offset: 1,
                        color: hexToRgba('#5EA1FF', 0.8)
                    }]),
                barBorderRadius: 0,
                }
            },
            xAxisIndex: 0,
            yAxisIndex: 0
        },{
            name:'第二组',
            data: data2,
            type: 'bar',
            stack:'1',
            label: {
                show: false,
            },
            itemStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: hexToRgba('#ffbdbd', 1)
                    }, {
                        offset: 1,
                        color: hexToRgba('#ff9d69', 0.8)
                    }]),
                    barBorderRadius: 0,
                },
            },
            xAxisIndex: 0,
            yAxisIndex: 0
        },{
            name:'第三组',
            data: data3,
            type: 'bar',
            stack:'1',
            label: {
                show: false,
            },
            itemStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: hexToRgba('#FFABAC', 1)
                    }, {
                        offset: 1,
                        color: hexToRgba('#FF6772', 0.8)
                    }]),
                    barBorderRadius: 0,
                }
                
            },
            xAxisIndex: 0,
            yAxisIndex: 0
        },{
            name:'第四组',
            data: data4,
            type: 'bar',
            stack:'1',
            label: {
                show: false,
            },
            itemStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: hexToRgba('#FFF0A0', 1)
                    }, {
                        offset: 1,
                        color: hexToRgba('#FFD355', 0.8)
                    }]),
                    barBorderRadius: 0,
                }
                
            },
            xAxisIndex: 0,
            yAxisIndex: 0
        },{
            name: "一月",
            type: "line",
            showSymbol: true,
            symbolSize:0.1,
            lineStyle: {
                normal: {
                    color: '#fff',
                }
            },
            label:{
                show:true,
                fontSize:24,
                color:'red',
                offset:[0,40],
                formatter:(res)=>{
                    let text = ''
                    if(res.dataIndex == 6){
                        text = res.seriesName
                    }else{
                        text = ""
                    }
                    return text
                }
            },
            areaStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(
                        0,
                        0,
                        0,
                        1,
                        [{
                                offset: 0,
                                color: hexToRgba(color[0], 0.3)
                            },
                            {
                                offset: 1,
                                color: hexToRgba(color[0], 0.1)
                            }
                        ],
                        false
                    ),
                    shadowColor: hexToRgba(color[0], 0.1),
                    shadowBlur: 10
                }
            },
            data: value1
        },{
            name: "二月",
            type: "line",
            showSymbol: true,
            symbolSize:0.1,
            lineStyle: {
                normal: {
                    color: '#fff',
                }
            },
            label:{
                show:true,
                fontSize:24,
                color:'red',
                offset:[0,40],
                formatter:(res)=>{
                    let text = ''
                    if(res.dataIndex == 36){
                        text = res.seriesName
                    }else{
                        text = ""
                    }
                    return text
                }
            },
            areaStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(
                        0,
                        0,
                        0,
                        1,
                        [{
                                offset: 0,
                                color: hexToRgba(color[1], 0.3)
                            },
                            {
                                offset: 1,
                                color: hexToRgba(color[1], 0.1)
                            }
                        ],
                        false
                    ),
                    shadowColor: hexToRgba(color[1], 0.1),
                    shadowBlur: 10
                }
            },
            data: value2
        },{
            name: "三月",
            type: "line",
            showSymbol: true,
            symbolSize:0.1,
            lineStyle: {
                normal: {
                    color: '#fff',
                }
            },
            label:{
                show:true,
                fontSize:24,
                color:'red',
                offset:[0,40],
                formatter:(res)=>{
                    let text = ''
                    if(res.dataIndex == 65){
                        text = res.seriesName
                    }else{
                        text = ""
                    }
                    return text
                }
            },
            areaStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(
                        0,
                        0,
                        0,
                        1,
                        [{
                                offset: 0,
                                color: hexToRgba(color[2], 0.3)
                            },
                            {
                                offset: 1,
                                color: hexToRgba(color[2], 0.1)
                            }
                        ],
                        false
                    ),
                    shadowColor: hexToRgba(color[2], 0.1),
                    shadowBlur: 10
                }
            },
            data: value3
        },{
            name: "四月",
            type: "line",
            showSymbol: true,
            symbolSize:0.1,
            lineStyle: {
                normal: {
                    color: '#fff',
                }
            },
            label:{
                show:true,
                fontSize:24,
                color:'red',
                offset:[0,40],
                formatter:(res)=>{
                    let text = ''
                    if(res.dataIndex == 95){
                        text = res.seriesName
                    }else{
                        text = ""
                    }
                    return text
                }
            },
            areaStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(
                        0,
                        0,
                        0,
                        1,
                        [{
                                offset: 0,
                                color: hexToRgba(color[3], 0.3)
                            },
                            {
                                offset: 1,
                                color: hexToRgba(color[3], 0.1)
                            }
                        ],
                        false
                    ),
                    shadowColor: hexToRgba(color[3], 0.1),
                    shadowBlur: 10
                }
            },
            data: value4
        },{
            name: "五月",
            type: "line",
            showSymbol: true,
            symbolSize:0.1,
            lineStyle: {
                normal: {
                    color: '#fff',
                }
            },
            label:{
                show:true,
                fontSize:24,
                color:'red',
                offset:[0,40],
                formatter:(res)=>{
                    let text = ''
                    if(res.dataIndex == 125){
                        text = res.seriesName
                    }else{
                        text = ""
                    }
                    return text
                }
            },
            areaStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(
                        0,
                        0,
                        0,
                        1,
                        [{
                                offset: 0,
                                color: hexToRgba(color[4], 0.3)
                            },
                            {
                                offset: 1,
                                color: hexToRgba(color[4], 0.1)
                            }
                        ],
                        false
                    ),
                    shadowColor: hexToRgba(color[4], 0.1),
                    shadowBlur: 10
                }
            },
            data: value5
        },{
            name: "六月",
            type: "line",
            showSymbol: true,
            symbolSize:0.1,
            lineStyle: {
                normal: {
                    color: '#fff',
                }
            },
            label:{
                show:true,
                fontSize:24,
                color:'red',
                offset:[0,40],
                formatter:(res)=>{
                    let text = ''
                    if(res.dataIndex == 156){
                        text = res.seriesName
                    }else{
                        text = ""
                    }
                    return text
                }
            },
            areaStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(
                        0,
                        0,
                        0,
                        1,
                        [{
                                offset: 0,
                                color: hexToRgba(color[5], 0.3)
                            },
                            {
                                offset: 1,
                                color: hexToRgba(color[5], 0.1)
                            }
                        ],
                        false
                    ),
                    shadowColor: hexToRgba(color[5], 0.1),
                    shadowBlur: 10
                }
            },
            data: value6
        },{
            name: "七月",
            type: "line",
            showSymbol: true,
            symbolSize:0.1,
            lineStyle: {
                normal: {
                    color: '#fff',
                }
            },
            label:{
                show:true,
                fontSize:24,
                color:'red',
                offset:[0,40],
                formatter:(res)=>{
                    let text = ''
                    if(res.dataIndex == 186){
                        text = res.seriesName
                    }else{
                        text = ""
                    }
                    return text
                }
            },
            areaStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(
                        0,
                        0,
                        0,
                        1,
                        [{
                                offset: 0,
                                color: hexToRgba(color[6], 0.3)
                            },
                            {
                                offset: 1,
                                color: hexToRgba(color[6], 0.1)
                            }
                        ],
                        false
                    ),
                    shadowColor: hexToRgba(color[6], 0.1),
                    shadowBlur: 10
                }
            },
            data: value7
        },{
            name: "八月",
            type: "line",
            showSymbol: true,
            symbolSize:0.1,
            lineStyle: {
                normal: {
                    color: '#fff',
                }
            },
            label:{
                show:true,
                fontSize:24,
                color:'red',
                offset:[0,40],
                formatter:(res)=>{
                    let text = ''
                    if(res.dataIndex == 218){
                        text = res.seriesName
                    }else{
                        text = ""
                    }
                    return text
                }
            },
            areaStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(
                        0,
                        0,
                        0,
                        1,
                        [{
                                offset: 0,
                                color: hexToRgba(color[7], 0.3)
                            },
                            {
                                offset: 1,
                                color: hexToRgba(color[7], 0.1)
                            }
                        ],
                        false
                    ),
                    shadowColor: hexToRgba(color[7], 0.1),
                    shadowBlur: 10
                }
            },
            data: value8
        },{
            name: "九月",
            type: "line",
            showSymbol: true,
            symbolSize:0.1,
            lineStyle: {
                normal: {
                    color: '#fff',
                }
            },
            label:{
                show:true,
                fontSize:24,
                color:'red',
                offset:[0,40],
                formatter:(res)=>{
                    let text = ''
                    if(res.dataIndex == 248){
                        text = res.seriesName
                    }else{
                        text = ""
                    }
                    return text
                }
            },
            areaStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(
                        0,
                        0,
                        0,
                        1,
                        [{
                                offset: 0,
                                color: hexToRgba(color[8], 0.3)
                            },
                            {
                                offset: 1,
                                color: hexToRgba(color[8], 0.1)
                            }
                        ],
                        false
                    ),
                    shadowColor: hexToRgba(color[8], 0.1),
                    shadowBlur: 10
                }
            },
            data: value9
        },{
            name: "十月",
            type: "line",
            showSymbol: true,
            symbolSize:0.1,
            lineStyle: {
                normal: {
                    color: '#fff',
                }
            },
            label:{
                show:true,
                fontSize:24,
                color:'red',
                offset:[0,40],
                formatter:(res)=>{
                    let text = ''
                    if(res.dataIndex == 278){
                        text = res.seriesName
                    }else{
                        text = ""
                    }
                    return text
                }
            },
            areaStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(
                        0,
                        0,
                        0,
                        1,
                        [{
                                offset: 0,
                                color: hexToRgba(color[9], 0.3)
                            },
                            {
                                offset: 1,
                                color: hexToRgba(color[9], 0.1)
                            }
                        ],
                        false
                    ),
                    shadowColor: hexToRgba(color[9], 0.1),
                    shadowBlur: 10
                }
            },
            data: value10
        },{
            name: "十一月",
            type: "line",
            showSymbol: true,
            symbolSize:0.1,
            lineStyle: {
                normal: {
                    color: '#fff',
                }
            },
            label:{
                show:true,
                fontSize:24,
                color:'red',
                offset:[0,40],
                formatter:(res)=>{
                    let text = ''
                    if(res.dataIndex == 312){
                        text = res.seriesName
                    }else{
                        text = ""
                    }
                    return text
                }
            },
            areaStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(
                        0,
                        0,
                        0,
                        1,
                        [{
                                offset: 0,
                                color: hexToRgba(color[10], 0.3)
                            },
                            {
                                offset: 1,
                                color: hexToRgba(color[10], 0.1)
                            }
                        ],
                        false
                    ),
                    shadowColor: hexToRgba(color[10], 0.1),
                    shadowBlur: 10
                }
            },
            data: value11
        },{
            name: "十二月",
            type: "line",
            showSymbol: true,
            symbolSize:0.1,
            lineStyle: {
                normal: {
                    color: '#fff',
                }
            },
            label:{
                show:true,
                fontSize:24,
                color:'red',
                offset:[0,40],
                formatter:(res)=>{
                    let text = ''
                    if(res.dataIndex == 342){
                        text = res.seriesName
                    }else{
                        text = ""
                    }
                    return text
                }
            },
            areaStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(
                        0,
                        0,
                        0,
                        1,
                        [{
                                offset: 0,
                                color: hexToRgba(color[11], 0.3)
                            },
                            {
                                offset: 1,
                                color: hexToRgba(color[11], 0.1)
                            }
                        ],
                        false
                    ),
                    shadowColor: hexToRgba(color[11], 0.1),
                    shadowBlur: 10
                }
            },
            data: value12
        }]
};