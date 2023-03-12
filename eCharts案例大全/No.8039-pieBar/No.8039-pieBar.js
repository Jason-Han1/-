var data = {
 
    dataAge: [{
        name: '名称2',
        value: '272'
    }, {
        name: '名称3',
        value: '292'
    }, {
        name: '名称4',
        value: '120'
    }, {
        name: '名称5',
        value: '42'
    }]
};
option = {
    backgroundColor: '#05274C',
    grid: {
      left: '20%'  
    },
    color: ['#51BEF9', '#1E7AFD', '#00FCFF', '#8F7AFC', '#48B188', '#5957C2', '#4A5D73'],
    series: [
        {
            color: ['#51BEF9', '#1E7AFD', '#00FCFF', '#8F7AFC', '#48B188', '#5957C2'],
            type: 'pie',
            radius: ['62', '100'],
            labelLine: {
                normal: {
                    length: 25,
                    length2: 50,
                    lineStyle: {
                        type: 'solid'
                    }
                }

            },
            label: {
                normal: {
                    formatter: (params)=>{
                        console.log(params);
                        return '{b| '+'}  ' + '{c|'+params.percent.toFixed(0)+'%}'
                    },
                    borderWidth: 0,
                    borderRadius: 4,
                    padding: [0, -56],
                    height: 70,
                    fontSize: 13,
                    align: 'center',
                    color: '#3494BD',
                    rich: {
                        b: {
                            fontSize: 12,
                            lineHeight: 20,
                            color: '#41B3DC',
                            padding: [0, 0, 5, 0]
                        },
                        c: {
                            fontSize: 20,
                            lineHeight:20,
                            color: '#fff'
                        }

                    }
                }
            },
            data: data.dataAge,
        },
       
    ]
};