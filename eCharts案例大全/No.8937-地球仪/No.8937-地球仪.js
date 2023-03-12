var uploadedDataURL = "/asset/get/s/data-1578034769214-N71JWRM9.jpg";

option = {
    backgroundColor: '#000',
    globe: {
        displacementScale: 0.04,
        baseTexture: uploadedDataURL,
        shading: 'realistic',
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
                diffuseIntensity: 0.2
            }
        }
    }
};