// 定义学生行为
var behaviours = {}, std={};
behaviours['范围2'] = ['范围2'];
behaviours['范围1'] = ['固定排放','移动排放', '逸散排放'];
std['范围2'] =  [12];
std['范围1'] = [1,1,2];
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
var behaviours_arr = [...behaviours['范围2'], ...behaviours['范围1']];
var std_arr = [...std['范围2'], ...std['范围1']];
for(let [k,v] of behaviours_arr.entries()){
    outervalue.push({
        name: v,
        value: std_arr[k]
    })
}
// 定义好坏颜色，注意：echart文字不支持渐变色，所以外环只能单色
goodCor = ['#67FF8A','#67FF8A'];
badCor = ['rgba(66,180,255,.6)','rgba(180, 220,252,.6)'];

let echartData = {
    inner: innervalue,
    outer: outervalue
};
option = {
    grid: {
        left:  '1%',
        right: '',
        top:  0,
        bottom:  0,
    },
    legend: [
    {
        show: true,
        data: ['范围1'],
        orient: 'vertical',
        right: '10%',
        top: '37%',
        // top: 'center',
        itemWidth: 20,
        itemHeight: 20,
        itemGap: 30,
        formatter: function (params) {
            var datas = std;
            var total = 0
            var total2 = 0
            datas['范围1'].map(item => {
                    total += (item - 0)
                    total2 += (item - 0)
                })
            datas['范围2'].map(item => {
                    total += (item - 0)
                })
                return params +'        '+ total2 +''+ 't CO2 '+'   '+ ((total2 / total).toFixed(2))*100 + '%'
                // let valueIndex = datas.map(item => item.name).indexOf(name);
                // return name + "  " + (showValue ? datas[valueIndex].value + (option.legendValueUnit || '') + ' ' : '') + (showPercent ? ((datas[valueIndex].value / total) * 100).toFixed(2) + "%" : '');
          debugger   
        },
        textStyle: {
            color: '#fff',
            fontSize: 16,
        },
    },
    {
        show: true,
        data: ['固定排放','移动排放','逸散排放',],
        orient: 'vertical',
        right: '10.5%',
        top: '13%',
        top: 'center',
        itemWidth: 20,
        itemHeight: 20,
        itemGap: 30,
        formatter: function (params) {
            var datas = std;
            var total = 0
            datas['范围1'].map(item => {
                    total += (item - 0)
                })
            datas['范围2'].map(item => {
                    total += (item - 0)
                })
            let nameData = ['固定排放','移动排放','逸散排放',]
            let valueIndex = nameData.filter(item => item).indexOf(params);
            
                return params +'    '+ datas['范围1'][valueIndex] +''+ 't CO2 '+'   '+ ((datas['范围1'][valueIndex] / total).toFixed(2))*100 + '%'
                // let valueIndex = datas.map(item => item.name).indexOf(name);
                // return name + "  " + (showValue ? datas[valueIndex].value + (option.legendValueUnit || '') + ' ' : '') + (showPercent ? ((datas[valueIndex].value / total) * 100).toFixed(2) + "%" : '');
       
        },
        textStyle: {
            color: '#B6C1C9',
            fontSize: 14,
        },
    },
    {
        show: true,
        data: ['范围2'],
        orient: 'vertical',
        right: '10%',
        top: '59%',
        itemWidth: 20,
        itemHeight: 20,
        itemGap: 30,
        formatter: function (params) {
            var datas = std;
            var total = 0
            var total2 = 0
            datas['范围1'].map(item => {
                    total += (item - 0)
                })
            datas['范围2'].map(item => {
                    total += (item - 0)
                    total2 += (item - 0)
                })
                return params +'       '+ total2 +''+ 't CO2 '+'   '+ ((total2 / total).toFixed(2))*100 + '%'
                // let valueIndex = datas.map(item => item.name).indexOf(name);
                // return name + "  " + (showValue ? datas[valueIndex].value + (option.legendValueUnit || '') + ' ' : '') + (showPercent ? ((datas[valueIndex].value / total) * 100).toFixed(2) + "%" : '');
        },
        textStyle: {
            color: '#fff',
            fontSize: 16,
        },
    },
    
    ],
};
option.backgroundColor="#071B33"
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
        type: 'pie', //内圈圈
        radius: ['34%', '40%'],
        
        hoverAnimation:1,
        hoverOffset:1,
        selectedMode: 'single',
        selectedOffset:3,
        zlevel:3,
        label: {
            show: false,
        },
        itemStyle: {
            normal: {
                borderColor: 'auto',
            }
        },
        data: echartData.inner
    },
    {
        type: 'pie', //外圈圈
        radius: ['34%', '46%'],
        hoverAnimation:1,
        hoverOffset:1,
        selectedMode: 'single',
        selectedOffset:3,
        label: {
            show: false,
        },
        itemStyle:{
            normal:{
                color: params => {
                    if(behaviours['范围1'].includes(params.name)){
                        if(params.name === '固定排放') {
                            return 'rgba(66,180,255,.8)'
                        } else if(params.name === '移动排放') {
                            return 'rgba(121,199,250,.8)'
                        } else if (params.name === '逸散排放') {
                            return 'rgba(170,221,255,.8)'
                        }
                        // return badCor[0]
                    }else{
                        return 'rgba(146,250,150,.2)'
                    }
                },
                borderWidth: 0,
                borderColor: 'rgba(14,36,76,.3)'
            }
        },
        data: echartData.outer
    },
    {
        type: 'pie', //外圈圈 蓝色透明扇形
        radius: ['29%', '40.2%'],
        hoverAnimation:1,
        hoverOffset:1,
        selectedMode: 'single',
        selectedOffset:3,
        zlevel:20,
        label: {
            show: false,
        },
        zlevel: 6,
        itemStyle:{
            normal:{
                color: params => {
                    if(behaviours['范围1'].includes(params.name)){
                        // return option.color[1]
                        // return 'rgba(24,57,110,.7)'
                        return 'rgba(4,155,255,.6)'
                    }else{
                        // return 'rgba(41,77,91,.1)'
                        return 'rgba(137,234,145,.3)'
                    }
                },
                borderWidth: 0,
                borderColor: 'rgba(14,36,76,.1)'
            }
        },
        data: echartData.outer
    }
];
