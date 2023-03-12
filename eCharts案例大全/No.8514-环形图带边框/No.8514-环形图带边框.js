 var fontColor = "#000";
      var seriesName = "";
      let noramlSize = 16;
     var datas = {
        imageUrl:
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEcAAAAuCAYAAAB6SwSNAAAFV0lEQVRoge3b+4tVVRQH8M/Y6KhZ6mg1hmgPsTLt5URpk72pfimtoCAqhRCCfuh/6UEOQT9EIUVUhNQPRZmDqImPSumllVqUhfTSLK9OP6w9njPjfY1zZu691BcuZ5999tl3ne9da+211j63bfGafjVwGa5AW62BLYISNuEAbF1deWB7jYkuwoNFSdVEmI9n8Vu1QeNqTHJJYeI0FyaIH74qamlOR659DIdHIlET4GyZQnRUG0htcvLYg7WnI1ET4SlMq3dwLbP6T+N/cqqgmchpulChmchZhkmNFiKPZiHnLNwggs2mQbOQs0zEHlc3WpA8moGcTlyT2l04v4GyDEIzkHMzzsidX1Nh3Jij0eR0YdGQvkUYX+f904sVZzAaTc6tsiX8+3TswII67p2F+0dDqAE0kpy5IjuGb/Fm7lo9ptWD2bigUKlyaCQ5t+Xa7+Fn7E/nczGjyr0zZNrVU7xogdEkp11kweVwCeak9udS4QnbcmOqaU+PzBznCRMrHKNFzoV4AqucSlCb8DXQj/dz13bhn9S+soJ8U50aLN4wEmEroWhyJmM5HhOqPx0rDSZoEc5L7Z3CnAbwDz5L7Skyn5THEtnSX0rHBSJeKhRFkdMmotsncVXq25OOnXgUZ4qHuiX1H8cHZeaqZlqTc32/Y11qj8PS05S9Ioog5xyhHfcK4X/Gi3hJJvxMoU03ymKTj5Wv4R7AwdSeJ/KuAVwn0gzYKDTv13R+1ZCxI0YR5HQJEyoJ//E8vkvXPsa7qX2uiIYJ8/moypzbc/INaOIEQQ4cERp2QpBELAAD1wtBEeR8iqfxDDYIc8ljk1iq89goHrASdubmuVqY7bWYmPo2yxz3dlltOz9mxCjK5/wtU+9y6JP5lyOyX7sSjuCL1O7ExcIRE6Rszo09hvUiJNiiwJrQcArsI8V6kTP9KfvVq2GbLNBbIRw6YapHh4zdkj6FYizJIcyrXm3dIxz2VBkxA7uVY4JGpA8n6hzXjx1D+nbgj2LFqYxGZ+W1sF2QxOCVaUzQ7OT8ir2pvQuHxvLLm50csoh5w1h/cSuQ84Uwr4O1BtaB90TuVqo1kLFfrU4HJVkaMhxMFGnLpDTHYewW5EyWrYAV0QrkUOcvLR66G5fLMv+h8+wVEfjuWpO1Cjm10C6S2qWy4vwJQcB+XC8S3nZRBpkvEuR1okRbFq3gc2phGh7HTfgx9ZVEVWBLuj70XZxDwtxWdve6vbu3/D59q5PTKYiZibewNfVvFFqySuRkk4fcdyaeE86+ByvKETQcs5qNh4Yj+SiiD7+IIloHXsY3uCNd3yvKF5Xe3OgQJZC1uEdk/r8ZXLIdFjlTcOkwxo8W9omC2L3CZF4TxJAltHepvntBZPP9eFuUcXu6e325dfXJHRDt4lWwShiqjkVii9orxjynbr38lI6zRYb/Ve7avnTsqjHvIakGtHW1E929doqyyKzuXlPxAOFzplX5TDh13sJQEqWHap9jZe6bl+TuE9q8XOY7v5URVA0fDjS6e52Du0VN+lO5on4jl/KlTq8oPj3d1yf2vhbjPrwhqoev4hHl4xyiPPtJap+HhwUPr6Tzk3v37SIeaLVV6zbZ7sMZos48XRD0C14QDnlh6i+JvfhNwlm3iV2MO9N8a0U1c6XMiZfaFq/pfyBN0mroxzvCdy0RG4XjRB62DT+UuWe82G3tEX7pIF4XqcaDBvvYPW2L1/SPF2rapQlfWqwD20W80il2NxYKkv4UzvsvoV1TxQ5Ie7rWJ0quM0UAOU4QflSQtq2tjj+GtBrOEn9mmSMefKLwRYdFBP21KMEep/ofQ/4FJVIFDVqHyOYAAAAASUVORK5CYII=",
        colors: ["#85cbcf", "#3b96f2"],
        legendArr: ["A类", "B类"],
        dataArr: [
          { value: 335, name: "A类" },
          { value: 310, name: "B类" }
        ],
        company: "个"
      };
     option={
         backgroundColor:"#fff",
        color: datas.colors,
        grid: {
          left: "7%",
          right: "7%",
          bottom: "15%",
          top: "5%"
        },
        graphic: {
          elements: [
            {
              type: "image",
              style: {
                image: datas.imageUrl,
                width: 71,
                height: 46
              },
              left: "center",
              top: "40%"
            }
          ]
        },
        tooltip: {
          trigger: "item",
          backgroundColor: "#f6f6f6",
          textStyle: {
            color: "#000"
          },
          formatter: "{b}: {c}"+datas.company+" ({d}%)"
        },
        legend: {
          icon: "rect",
          bottom: "5%",
          left: "center",
          itemWidth: 12,
          itemHeight: 12,
          itemGap: 50, //图例间隙
          textStyle: {
            color: "#000",
            fontSize: 14
          },
          formatter: function(legendData) {
            let names = "";
            let values = "";
            datas.dataArr.forEach(function(ele) {
              if (ele.name == legendData) {
                names = ele.name;
                values = ele.value;
              }
            });
            return names + "   " + values + datas.company;
          },
          data: datas.legendArr
        },
        series: [
          {
            name: "",
            type: "pie",
            radius: ["45%", "60%"],
            center: ["50%", "45%"],
            itemStyle: {
              normal: {
                borderWidth: 3,
                borderColor: "#fff"
              }
            },
            avoidLabelOverlap: false,
            label: {
              normal: {
                show: false,
                position: "center"
              },
              emphasis: {
                show: false,
                textStyle: {
                  fontSize: "30",
                  fontWeight: "bold"
                }
              }
            },
            labelLine: {
              normal: {
                show: false
              }
            },
            data: datas.dataArr
          }
        ]
      };