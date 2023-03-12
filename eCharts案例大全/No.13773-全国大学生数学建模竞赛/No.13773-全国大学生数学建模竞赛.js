var scale = 1;
//国家一等奖7项、国家二等奖50项，
//省一等奖85项、省二等奖56项、省三等奖41项。
//提名奖（Finalist Winner）一项、
//一等奖（Meritorious Winner）11项、二等奖（Honorable Mention）39项
var echartData =[{
                name: '国家一等奖',
                value: 7
            },{
                name: '国家二等奖',
                value: 50
            },{
                name: '省一等奖',
                value: 85
            },{
                name: '省二等奖',
                value: 56
            },{
                name: '省三等奖',
                value: 41
            }]
var echartData2 =[{
                name: '提名奖',
                value: 1
            },{
                name: '一等奖',
                value: 11
            },{
                name: '二等奖',
                value: 39
            }]
var rich = {
    yellow: {
        color: "#659F83",
        fontSize: 18 * scale,
        padding: [5, 4],
        align: 'center'
    },
    total: {
        color: "#659F83",
        fontSize: 18 * scale,
        align: 'center'
    },
    white: {
       color:'#333333',
        align: 'center',
        fontSize: 14 * scale,
        padding: [5, 0]
    },
    blue: {
        color: '#222222',
        fontSize: 14 * scale,
        align: 'left'
    }
}
option = {
    title: [{
        text:'全国大学生数学建模竞赛',
        left:'19%',
        top:'10%',
        padding:[24,0],
        textStyle:{
            fontSize:18*scale,
            align:'center'
        }
    },{
        text:'美国大学生数学建模竞赛',
        left:'57%',
        top:'10%',
        padding:[24,0],
        textStyle:{
            fontSize:18*scale,
            align:'center'
        }
    }],
    legend: [{
        selectedMode:false,
        formatter: function(name) {
            var total = 0; //各科正确率总和
            var averagePercent; //综合正确率
            echartData.forEach(function(value, index, array) {
                total += value.value;
            });
            return '{total|' + total +'人'+ '}';
        },
        data: [echartData[0].name],
        // data: ['高等教育学'],
        // itemGap: 50,
        left: '23%',
        top: 'center',
        icon: 'none',
        align:'center',
        textStyle: {
            fontSize: 16 * scale,
            rich: rich
        },
    },{
       formatter: function(name) {
            var total = 0; //各科正确率总和
            var averagePercent; //综合正确率
            echartData2.forEach(function(value, index, array) {
                total += value.value;
            });
            return '{total|' + total +'人'+ '}';
        },
        data: [echartData[1].name],
        // data: ['高等教育学'],
        // itemGap: 50,
        left: '63%',
        top: 'center',
        icon: 'none',
        align:'center',
        textStyle: {
            fontSize: 16 * scale,
            rich: rich
        },  
    }],
    series: [{
        name: '课程满意度',
        type: 'pie',
        center:['25%','50%'],
        radius: ['20%', '30%'],
        hoverAnimation: false,
        color: ['#c487ee', '#deb140', '#49dff0', '#034079', '#6f81da', '#00ffb4','#659F83','#08C7AE'],
        label: {
            normal: {
                formatter: function(params, ticket, callback) {
                    var total = 0; //考生总数量
                    var percent = 0; //考生占比
                    echartData.forEach(function(value, index, array) {
                        total += value.value;
                    });
                    percent = ((params.value / total) * 100).toFixed(1);
                    return '{white|' + params.name + '}\n{white|' + params.value +'人'+ '}：{blue|' + percent + '%}';
                },
                rich: rich
            },
        },
        labelLine: {
            normal: {
                length: 25 * scale,
                length2: 0,
                lineStyle: {
                    color: '#0b5263'
                }
            }
        },
        data: echartData
    },{
        name: '课程满意度',
        type: 'pie',
        center:['65%','50%'],
        radius: ['20%', '30%'],
        hoverAnimation: false,
        color: ['#c487ee', '#deb140', '#49dff0', '#034079', '#6f81da', '#00ffb4','#659F83','#08C7AE'],
        label: {
            normal: {
                formatter: function(params, ticket, callback) {
                    var total = 0; //考生总数量
                    var percent = 0; //考生占比
                    echartData2.forEach(function(value, index, array) {
                        total += value.value;
                    });
                    percent = ((params.value / total) * 100).toFixed(1);
                    return '{white|' + params.name + '}：{yellow|' + params.value +'人'+ '}\n{blue|' +'（'+ percent + '%）}';
                },
                rich: rich
            },
        },
        labelLine: {
            normal: {
                length: 25 * scale,
                length2: 0,
                lineStyle: {
                    color: '#0b5263'
                }
            }
        },
        data: echartData2
    }]
};