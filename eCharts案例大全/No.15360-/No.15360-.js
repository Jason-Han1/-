option = {
    title: {
        text: "",
        subtext: "",
        left: "center",
        textStyle: {
            color: "#fff",
            fontSize: 18
        },
    },

    backgroundColor: '#ffffff',
    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b}:({d}%)"
    },
    series: [{
        name: '事业线',
        type: 'pie',
        radius: ['10%', '50%'],
        color: ['#ec5d51', '#59abe1', '#f4cf42', '#3dc6a8'],
        label: {
            normal: {
                position: 'inner'
            }
        },
        data: [{
            value: 11,
            name: 'APP事业部'
        }, {
            value: 15,
            name: '家长事业部'
        }, {
            value: 9,
            name: 'TV事业部'
        }, {
            value: 9,
            name: '公共'
        } ]
    }, {
        name: '分组',
        type: 'pie',
        radius: ['54%', '72%'],
        color: ['#a0dca0', '#60bbb6', '#f78db3', '#feadac', '#fae395','#91d4e5','#8eb3e8'],
        label: {
            normal: {
               formatter: '{b}\n{d}%'
            }
        },
        data: [{
            value: 6,
            name: '2D线'
        }, {
            value: 5,
            name: '3D线'
        }, {
            value: 8,
            name: '宝宝产品大全'
        }, {
            value: 7,
            name: '大全产品线'
        }, {
            value: 9,
            name: 'TV事业部'
        }, {
            value: 9,
            name: '公共'
        }]
    }]
};