console.log("It is functioning")

for (let i = 0, element; element = document.querySelectorAll('input[type="range"]')[i++];) {
    rangeSlider.create(element, {
        polyfill: true
    });
}

// Bubble Shaders
const BUBBLE_VERTEX_SHADER = `
varying vec2 vUv;

void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0);
}
`;
const BUBBLE_FRAGMENT_SHDAER = `
uniform vec3 color1;
uniform vec3 color2;

varying vec2 vUv;

void main() {
    gl_FragColor = vec4(mix(color1, color2, vUv.y), 1.0);
}
`;

// Glow Shaders
const GLOW_VERTEX_SHADERS = `
varying vec3 vNormal;
void main() {
    vec3 vNormal = normalize( normalMatrix * normal );
    gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}
`;
const GLOW_FRAGMENT_SHADERS = `
varying vec3 vNormal;
void main() {
    float intensity = pow( 0.7 - dot( vNormal, vec3( 0.0, 0.0, 1.0 ) ), 4.0 );
    gl_FragColor = vec4( 1.0, 1.0, 1.0, 1.0 ) * intensity;
}
`;

$(document).ready(function () {
    // Range SLiders
    const speedSlider = $('input[name="speed"]');
    const spikesSlider = $('input[name="spikes"]');
    const processingSlider = $('input[name="processing"]');

    // Scene & Camera & Renderer
    const $canvas = $('#blob canvas'),
        canvas = $canvas[0],
        renderer = new THREE.WebGLRenderer({
            canvas: canvas,
            context: canvas.getContext('webgl2'),
            antialias: true,
            alpha: true
        }),
        simplex = new SimplexNoise();

    renderer.setSize($canvas.width(), $canvas.height());
    renderer.setPixelRatio(window.devicePixelRatio || 1);

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, $canvas.width() / $canvas.height(), 0.1, 1000);
    camera.position.z = 5;

    // Top Light
    const lightTop = new THREE.DirectionalLight(0xFFFFFF, .7);
    lightTop.position.set(0, 500, 200);
    lightTop.castShadow = true;
    scene.add(lightTop);

    // Bottom Light
    const lightBottom = new THREE.DirectionalLight(0xFFFFFF, .25);
    lightBottom.position.set(0, -500, 400);
    lightBottom.castShadow = true;
    scene.add(lightBottom);

    // Ambient Light
    const ambientLight = new THREE.AmbientLight(0x798296);
    scene.add(ambientLight);

    // Bubble
    const bubbleGeometry = new THREE.CircleGeometry(20, 128, 6, 6.3);
    const bubbleMaterial = new THREE.ShaderMaterial({
        uniforms: {
            color1: {
                value: new THREE.Color("#FE390C")
            },
            color2: {
                value: new THREE.Color("#FACE40")
            }
        },
        vertexShader: BUBBLE_VERTEX_SHADER,
        fragmentShader: BUBBLE_FRAGMENT_SHDAER,
    });

    const bubble = new THREE.Mesh(bubbleGeometry, bubbleMaterial);
    scene.add(bubble);

    // Buble Glow
    const glowMaterial = new THREE.ShaderMaterial({
        uniforms: {
            c: { type: "f", value: 1.0 },
            p: { type: "f", value: 1.4 },
            color1: {
                value: new THREE.Color("#FE390C")
            },
            color2: {
                value: new THREE.Color("#FACE40")
            },
            viewVector: { type: "v3", value: camera.position },
        },
        vertexShader: GLOW_VERTEX_SHADERS,
        fragmentShader: GLOW_FRAGMENT_SHADERS,
        side: THREE.FrontSide,
        blending: THREE.AdditiveBlending,
        transparent: true,
    })
    const glow = new THREE.Mesh(bubbleGeometry.clone(), glowMaterial);
    glow.position = bubble.position;
    glow.scale.multiplyScalar(1.1);
    // scene.add(glow);

    // Update
    const update = () => {

        const time = performance.now() * 0.00001 * speedSlider.val() * Math.pow(processingSlider.val(), 3),
            spikes = spikesSlider.val() * processingSlider.val();

        for (let i = 0; i < bubble.geometry.vertices.length; i++) {
            const b = bubble.geometry.vertices[i]; // bubble vertices
            // const g = glow.geometry.vertices[i]; // glow vertices

            b.normalize().multiplyScalar(1 + 0.3 * simplex.noise4D(b.x * spikes, b.y * spikes, b.z * spikes + time, 3));
            // g.normalize().multiplyScalar(1 + 0.3 * simplex.noise4D(g.x * spikes, g.y * spikes, g.z * spikes + time, 3));
        }

        // glow.material.uniforms.viewVector.value = new THREE.Vector3().subVectors(
        //     camera.position,
        //     glow.position
        // );

        bubble.geometry.computeVertexNormals();
        bubble.geometry.normalsNeedUpdate = true;
        bubble.geometry.verticesNeedUpdate = true;

        // glow.geometry.computeVertexNormals();
        // glow.geometry.normalsNeedUpdate = true;
        // glow.geometry.verticesNeedUpdate = true;

    }

    // Animate
    function animate() {
        update();
        renderer.render(scene, camera);
        requestAnimationFrame(animate);
    }
    requestAnimationFrame(animate);

});