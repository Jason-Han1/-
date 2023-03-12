//  data示例参数
let data = {
  title: ['微信','朋友圈'],
  data: [{value: 135,name: '微信'},{value: 35,name: '朋友圈'}]
}

let span = '40%'   //span 饼图环化程度  0%-100%  0%实心 --非必选参数
option = {
    tooltip: {
        trigger: 'item', 
        // {a}：系列名。
        // {b}：数据名。
        // {c}：数据值。
        // {d}：百分比。
        formatter: "{a} <br/>{b}: {c} ({d}%)"
    },
    backgroundColor: '#263988',
    color: ['#4C84FF', '#13C2C2', '#9A47FF', '#F04864', '#FF884C', '#FACC14', '#2FC25B', '#66B5FF'],
    legend: {
        orient: 'horizontal',
        show: true,
        bottom: 0,
        data: data.title
    }, 
    series: [{
        name: '详细数据',
        type: 'pie',
        radius: [span || '0%', '55%'],
        labelLine: {
            normal: {
                length: 30,
                length2: 80,
                lineStyle: {
                    color: '#fff'
                }
            }
        },
        label: {
            normal: {
                formatter: '{a|{d}%} {b|{b}}\n',
                borderWidth: 0,
                borderRadius: 4,
                padding: [0, -50],
                rich: {
                    a: {
                        color: '#fff',
                        fontSize: 14,
                        lineHeight: 20
                    },
                    hr: {
                        borderColor: '#fff',
                        width: '100%',
                        borderWidth: 0.5,
                        height: 0
                    },
                    b: {
                        fontSize: 14,
                        lineHeight: 20,
                        color: '#fff'
                    }
                }
            }
        },
        data: data.data
    }]
};