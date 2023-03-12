var uploadedDataURL1 = "/asset/get/s/data-1596707036931-D4GWCj0vr.jpg";

var uploadedDataURL2 = "/asset/get/s/data-1596707393282-QX88rxW3Y.jpg";

var uploadedDataURL3 = "/asset/get/s/data-1596707399169-V3cfxnVcF.jpg";

var uploadedDataURL4 = "/asset/get/s/data-1596707417782-6LI0-e1EI.hdr";



option = {
    backgroundColor: '#000',
    globe: {
        baseTexture: uploadedDataURL1,
        heightTexture: uploadedDataURL2,
        displacementScale: 0.04,
        shading: 'realistic',
        environment: uploadedDataURL3,
        realisticMaterial: {
            roughness: 0.9
        },
        postEffect: {
            enable: true
        },
        light: {
            main: {
                intensity: 5,
                shadow: true
            },
            ambientCubemap: {
                texture: uploadedDataURL4,
                diffuseIntensity: 0.2
            }
        }
    }
};