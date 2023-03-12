var data = [{
    value: 1,
    name: '华南城市1'
}, {
    value: 2,
    name: '华南城市2'
}, {
    value: 3,
    name: '华南城市3'
}, {
    value: 4,
    name: '华南城市4'
}, {
    value: 5,
    name: '华南城市5'
}, {
    value: 6,
    name: '华南城市6'
}, {
    value: 1,
    name: '华东城市1'
}, {
    value: 2,
    name: '华东城市2'
}, {
    value: 3,
    name: '华东城市3'
}, {
    value: 4,
    name: '华东城市4'
}, {
    value: 5,
    name: '华东城市5'
}, {
    value: 6,
    name: '华东城市6'
}, {
    value: 1,
    name: '华北城市1'
}, {
    value: 2,
    name: '华北城市2'
}, {
    value: 3,
    name: '华北城市3'
}, {
    value: 4,
    name: '华北城市4'
}, {
    value: 5,
    name: '华北城市5'
}, {
    value: 6,
    name: '华北城市6'
}, {
    value: 1,
    name: '华西城市1'
}, {
    value: 2,
    name: '华西城市2'
}, {
    value: 3,
    name: '华西城市3'
}, {
    value: 4,
    name: '华西城市4'
}, {
    value: 5,
    name: '华西城市5'
}, {
    value: 6,
    name: '华西城市6'
}, {
    value: 1,
    name: '东北城市1'
}, {
    value: 2,
    name: '东北城市2'
}, {
    value: 3,
    name: '东北城市3'
}, {
    value: 4,
    name: '东北城市4'
}, {
    value: 5,
    name: '东北城市5'
}, {
    value: 6,
    name: '东北城市6'
}]
var labelData = [{
    value: 6,
    name: '华南'
}, {
    value: 6,
    name: '华东'
}, {
    value: 6,
    name: '华北'
}, {
    value: 6,
    name: '华西'
}, {
    value: 6,
    name: '东北'
}];

option = {
     backgroundColor: '#0C2A40',
    title: {
        text: '我是标题',
        left: '1%',
        top: '1%',
         textStyle:{
                color:"#FFF",
                fontSize:"12"
            }
    },
    tooltip: {
            trigger: 'item',
          
        },
    color: ["#FC0300", "#FC0303", "#FC0A0A", "#FC1A1A", "#FC3131", "#FC4B4B",
        "#19B7CF", "#2CB9CE", "#34BCD1", "#3BBFD1", "#48BFD1", "#58C1D1",
        "#CA8622", "#C98B2E", "#C9903B", "#CB9848", "#C99D5A", "#CBA567",
        "#2F4554", "#314652", "#344852", "#394852", "#3E4D55", "#404D55",
        "#91C7AE", "#98C6B2", "#9DC9B7", "#AAC6B9", "#B4C6BF", "#BCC9C4",

    ],

    series: [{
        type: 'pie',
        data: data,
        roseType: 'area',
        itemStyle: {
            normal: {

                // borderColor: '#22C3AA'
            }
        },
        label: {
            normal: {
                position: 'inside'
            }
        }


    }, {
        type: 'pie',
        data: labelData,
        radius: ['88%', '100%'],
        zlevel: -2,
        itemStyle: {
            normal: {
                color: '#152E43',
                borderColor: '#0F5FA0'
            }
        },
        label: {
            normal: {
                position: 'inside'
            }
        }
    }]
};