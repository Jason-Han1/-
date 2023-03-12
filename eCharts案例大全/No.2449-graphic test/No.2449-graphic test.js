option = {
   graphic: [
         {
            type: 'group',
            left: 'center',
            bottom: 'middle',
            children: [
                
                {
                    type: 'group',
                    children: [
                        {
                            type: 'rect',
                            right: '0',
                            top: 'middle',
                            shape: {
                                width: 30,
                                height: 90
                            },
                            style: {
                                fill: '#fff',
                                stroke: '#555',
                                lineWidth: 2,
                                shadowBlur: 8,
                                shadowOffsetX: 3,
                                shadowOffsetY: 3,
                                shadowColor: 'rgba(0,0,0,0.3)'
                            }
                        },
                        {
                            type: 'text',
                            left: '10',
                            top: '-30',
                            style: {
                                fill: '#333',
                                text: '男',
                                font: '18px Microsoft YaHei'
                            }
                        },
                        {
                             type: 'group',
                             left: '10',
                             children: [
                                {
                                    type: 'text',
                                    right: '0',
                                    top: '10',
                                    style: {
                                        fill: '#333',
                                        text: '99',
                                        font: '16px Microsoft YaHei'
                                    }
                                },
                                {
                                    type: 'text',
                                    left: '0',
                                    top: '14',
                                    style: {
                                        fill: '#333',
                                        text: '%',
                                        font: '12px Microsoft YaHei'
                                    }
                                }
                            ]
                        },
                        
                    ]
                }
                
            ]
        }
    ],

};