var option = {
    series: [{
            type: 'liquidFill',
            radius: '45%',
            data: [0.6, 0.5, 0.4, 0.3, 0.2],
            amplitude: '2%',
            center: ['25%', '25%'],
            shape: 'path://M33.609,20.96v12.384c0,1.104-0.896,2-2,2H7.805c-1.104,0-2-0.896-2-2V20.96c0-0.69,0.355-1.332,0.94-1.696l11.901-7.433c0.648-0.405,1.472-0.405,2.119,0l11.901,7.433C33.253,19.628,33.609,20.269,33.609,20.96z M38.475,15.432L20.768,4.374c-0.648-0.405-1.471-0.405-2.119,0L0.94,15.432c-0.937,0.585-1.221,1.819-0.637,2.756c0.584,0.938,1.816,1.224,2.756,0.638L19.707,8.428l16.646,10.396c0.33,0.206,0.695,0.304,1.059,0.304c0.667,0,1.318-0.333,1.697-0.941C39.695,17.249,39.41,16.017,38.475,15.432z',
        },
        {
            type: 'liquidFill',
            radius: '40%',
            data: [0.6, 0.5, 0.4, 0.3, 0.2],
            amplitude: '8%',
            center: ['75%', '25%'],
            shape: 'roundRect',
            direction: 'left',
            backgroundStyle: {
                borderColor: 'red',
                borderWidth: 5,
                shadowColor: 'rgba(0, 34, 0, 0.4)',
                shadowBlur: 80
            },
        },
        {
            type: 'liquidFill',
            radius: '40%',
            name: 'three',
            data: [{
                value: 0.6,
                name:'first',
                direction: 'right',
                itemStyle: {
                    normal: {
                        color: 'red'
                    }
                }
            }, 0.5, 0.4, 0.3, 0.2],
            amplitude: '8%',
            center: ['25%', '75%'],
            shape: 'arrow',
            direction: 'left',
            label: {
                normal: {
                    formatter: '{a}\n{b}\nValue: {c}',
                    textStyle: {
                        color: '#FF6666',
                        insideColor: '#cccccc',
                        fontSize: 38
                    }
                }
            }
        },

    ],
}