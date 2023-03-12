// 定义学生行为
var behaviours = {}, std={};
behaviours['表扬'] = ['帮助他人', '认真读书', '活泼开朗', '一点就通', '热情主动', '举手答问', '入班即静'];
behaviours['待改进'] = ['上课走神','辱骂同学'];
// 某个学生的行为次数，没有的行为次数为0，与定义的行为一一对应
std['表扬'] =  [1, 1, 2, 1, 1, 1, 1];
std['待改进'] = [1,2];

// 内环数据统计，2种形式的总次数
var innervalue = [];
for(let k of Object.keys(behaviours)){
    innervalue.push({
        name: k,
        value: std[k].reduce((acc, cur)=>{ return acc+cur; },0)
    })
}
// 外环数据统计, 各类行为的次数
var outervalue = [];
var behaviours_arr = [...behaviours['表扬'], ...behaviours['待改进']];
var std_arr = [...std['表扬'], ...std['待改进']];
for(let [k,v] of behaviours_arr.entries()){
    outervalue.push({
        name: v,
        value: std_arr[k]
    })
}

// 定义好坏颜色，注意：echart文字不支持渐变色，所以外环只能单色
goodCor = ['#3295FF','#81BEFF'];
badCor = ['#bf2f2f','#9b2323'];

let echartData = {
    inner: innervalue,
    outer: outervalue
};
option = {};
option.color = [
    {
        x: 0,
        y: 0,
        x2: 0,
        y2: 1,
        colorStops: [{
            offset: 0,
            color: goodCor[0] // 0% 处的颜色
        }, {
            offset: 1,
            color: goodCor[1] // 100% 处的颜色
        }],
    }, {
        x: 0,
        y: 0,
        x2: 0,
        y2: 1,
        colorStops: [{
            offset: 0,
            color: badCor[0] // 0% 处的颜色
        }, {
            offset: 1,
            color: badCor[1] // 100% 处的颜色
        }],
    }
];
// option.color = ['#ff6900'];
option.series = [
    {
        type: 'pie',
        radius: [0, '40%'],
        hoverAnimation:1,
        hoverOffset:1,
        selectedMode: 'single',
        selectedOffset:3,
        itemStyle: {
            normal: {
                borderColor: '#fff',
            }
        },
        label: {
            normal: {
                position: 'inner',
                fontSize: 14,
                formatter: params => {
                    return (
                        '{name|' + params.name + '}'
                    );
                },
                rich: {
                    name: {
                        fontSize: 14,
                        padding: [0, 0, 3, 0],
                        color: '#fff',
                        textBorderWidth: 0
                    }
                },
                padding: [0, -130, 25, -130]
            },
        },
        labelLine: {
            normal: {
                show: false
            }
        },
        data: echartData.inner
    },
    {
        type: 'pie',
        radius: ['40%', '60%'],
        hoverAnimation:1,
        hoverOffset:1,
        selectedMode: 'single',
        selectedOffset:3,
        labelLine: {
            normal: {
                length:20,
                length2: 0,
                smooth: 1,
            }
        },
        itemStyle:{
            normal:{
                color: params => {
                    if(behaviours['待改进'].includes(params.name)){
                        // return option.color[1]
                        return badCor[0]
                    }else{
                        return goodCor[1]
                    }
                },
                borderWidth: 0.5,
                borderColor: '#fff'
            }
        },
        label: {
            normal: {
                formatter: params => {
                    return '{name|' + params.name + '}\n{hr|}\n{percent|' + params.percent + '%}  {score|' + (behaviours['待改进'].includes(params.name) ? '-':'+') + params.value + '分} '
                },
                distanceToLabelLine: 0,
                padding: [-2, 0, 0, 0],
                rich: {
                    name: {
                        color: "#656565",
                        fontSize: 13,
                        padding: [6, 10],
                        align: 'left'
                    },
                    percent: {
                        color: "#656565",
                        align: 'center',
                        fontSize: 13,
                        padding: [5, 10]
                    },
                    score:{
                    },
                    hr: {
                        borderColor: '#C8C8C8',
                        width: '100%',
                        borderWidth: 0.5,
                        height: 0,
                    }
                }
            }
        },
        data: echartData.outer
    }
];
