var dataArr = [0,0,79,85,0,0,82,78,86];
option = {
    backgroundColor:"#0B1837",
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'none',
        },
        textStyle: {
            fontSize: 18,
        },
        formatter: function (params){
            var sname = params[0].seriesName;
            var areaname = params[0].name;
            var val = params[0].value;
            if(window.isNaN(params[0].value)||val==''){
                val = '暂无数据';
            }else{
                val += '万人';
            }
            return areaname+'<br/>'+ sname+ ': ' + val;
        }
    },
    grid: {
        left: '8%',
        right: '0',
        top: '20%',
        bottom: '15%'
    },
    xAxis: [
        {
            type: 'category',
            boundaryGap: true,
            axisLine: {
                show: true,
                lineStyle: {
                    color: '#2d4c99',
                },
            },
            axisTick: {
                show: false
            },
            axisLabel: {
                show: true,
                color: '#ffffff',
                fontSize: 16,
                interval: 0
            },
            data: ['2017.09','2017.12','2018.03','2018.06','2018.09','2018.12','2019.03','2019.06','2019.09'],
        }
    ],
    yAxis: [
        {
            type: 'value',
            name: '单位:万人           ',
            nameGap: 20,
            nameTextStyle: {
                color: '#bebebe',
                fontSize: 12,
            },
            min: 75,
            max: 86,
            axisTick: {
                show: false
            },
            axisLine: {
                show: false,
            },
            splitLine: {
                show: true,
                lineStyle: {
                    color: '#0d2b75',
                    type: 'dashed',
                },
            },
            axisLabel: {
                show: true,
                color: '#ffffff',
                fontSize: 14,
                interval: 0
            },
        },
    ],
    series: [
        {
            type: 'line',
            name: '低保对象',
            lineStyle: {
                color: '#08eaef',
                type: 'solid',
                width: 3,
            },
            symbolSize: 8,
            data: dealnullData(dataArr),
            z: 1,
        },
        // 虚线
        {
            type: 'line',
            // 连接空值点
            connectNulls: true,
            lineStyle: {
                color: '#a5a5a5',
                type: 'dashed',
                width: 2,
            },
            symbol: 'none',
            data: dealnullData(dataArr),
            // data: tabDashedArr,
            z: 0,
        },
    ]
};
// 处理断点的算法
function dealnullData(dataArr) {
    var tabDashed = [];
    var temp='';
    var len = dataArr.length;

    for(var i=0;i<len;i++){
        for(var j=i;j<len;j++){
            if(dealTabData(dataArr[j])!=''){
                temp = dealTabData(dataArr[j]);
                tabDashed[i]=dealTabData(dataArr[j]);
                break;
            }else{
                if(temp!=''){
                    if(j<len-1) {
                        for (var add = 0; add + j < len; add++) {
                            if (dealTabData(dataArr[j + add]) != '') {
                                // tabDashed[i] = (temp + dealTabData(dataArr[j + add])) / 2;
                                tabDashed[i] = '';
                                break;
                            }
                        }
                        break;
                    }else {
                        tabDashed[i] = temp;
                        break;
                    }
                }
            }
        }
    }
    return tabDashed;
}
function dealTabData(obj) {
    if(obj=='0'){
        obj='';
    }
    return obj;
}