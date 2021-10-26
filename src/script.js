import './style.css'
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import * as dat from 'dat.gui'

/**
 * Base
 */
// Debug
//const gui = new dat.GUI()

// Canvas
const canvas = document.querySelector('canvas.webgl')

// Scene
const scene = new THREE.Scene()

/**
 * Textures
 */
const textureLoader = new THREE.TextureLoader()

const chocolateAmbientOcclusionTexture = textureLoader.load('/textures/chocolate/Chocolate_001_ambientOcclusion.jpg')
const chocolateColorTexture = textureLoader.load('/textures/chocolate/Chocolate_001_baseColor.jpg')
const chocolateHeightTexture = textureLoader.load('/textures/chocolate/Chocolate_001_height.png')
const chocolateNormalTexture = textureLoader.load('/textures/chocolate/Chocolate_001_normal.jpg')
const chocolateRoughnessTexture = textureLoader.load('/textures/chocolate/Chocolate_001_roughness.jpg')

chocolateAmbientOcclusionTexture.repeat.set(4, 4)
chocolateColorTexture.repeat.set(4, 4)
chocolateHeightTexture.repeat.set(4, 4)
chocolateNormalTexture.repeat.set(4, 4)
chocolateRoughnessTexture.repeat.set(4, 4)

chocolateAmbientOcclusionTexture.wrapS = THREE.RepeatWrapping 
chocolateAmbientOcclusionTexture.wrapT = THREE.RepeatWrapping 
chocolateColorTexture.wrapS = THREE.RepeatWrapping 
chocolateColorTexture.wrapT = THREE.RepeatWrapping 
chocolateHeightTexture.wrapS = THREE.RepeatWrapping 
chocolateHeightTexture.wrapT = THREE.RepeatWrapping 
chocolateNormalTexture.wrapS = THREE.RepeatWrapping 
chocolateNormalTexture.wrapT = THREE.RepeatWrapping 
chocolateRoughnessTexture.wrapS = THREE.RepeatWrapping 
chocolateRoughnessTexture.wrapT = THREE.RepeatWrapping 

const chocolateAmbientOcclusionTexture2 = textureLoader.load('/textures/chocolate/Chocolate_001_ambientOcclusion.jpg')
const chocolateHeightTexture2 = textureLoader.load('/textures/chocolate/Chocolate_001_height.png')
const chocolateNormalTexture2 = textureLoader.load('/textures/chocolate/Chocolate_001_normal.jpg')

chocolateAmbientOcclusionTexture2.repeat.set(2, 2)
chocolateHeightTexture2.repeat.set(2, 2)
chocolateNormalTexture2.repeat.set(2, 2)

chocolateAmbientOcclusionTexture2.wrapS = THREE.RepeatWrapping 
chocolateAmbientOcclusionTexture2.wrapT = THREE.RepeatWrapping 
chocolateHeightTexture2.wrapS = THREE.RepeatWrapping 
chocolateHeightTexture2.wrapT = THREE.RepeatWrapping 
chocolateNormalTexture2.wrapS = THREE.RepeatWrapping 
chocolateNormalTexture2.wrapT = THREE.RepeatWrapping 

/**
 * Geometries
 */
const cakes = new THREE.Group()
scene.add(cakes)

// Cheese cake 
const cheeseCake = new THREE.Group()
cakes.add(cheeseCake)

const geometry = new THREE.CylinderGeometry(0.7, 0.7, 0.04, 42);
const material = new THREE.MeshStandardMaterial({ color: 0xf1b166 });
const cylinder = new THREE.Mesh(geometry, material);
cylinder.position.x = -4.1
cylinder.position.y = 0.02
cheeseCake.add(cylinder);

const geometry2 = new THREE.CylinderGeometry(0.7, 0.7, 0.4, 42);
const material2 = new THREE.MeshStandardMaterial({ color: 0xfff5d9 });
const cylinder2 = new THREE.Mesh(geometry2, material2);
cylinder2.position.x = -4.1
cylinder2.position.y = 0.238
cheeseCake.add(cylinder2);

const geometry3 = new THREE.CylinderGeometry(0.7, 0.7, 0.01, 42);
const material3 = new THREE.MeshStandardMaterial({ color: 0xff335f, roughness: 0.2 });
const cylinder3 = new THREE.Mesh(geometry3, material3);
cylinder3.position.x = -4.1
cylinder3.position.y = 0.44
cheeseCake.add(cylinder3);

// Chocolate cake 
const chocolateCake = new THREE.Group()
cakes.add(chocolateCake)

const geometry4 = new THREE.CylinderGeometry(0.7, 0.7, 0.2, 42);
const material4 = new THREE.MeshStandardMaterial({ color: 0x361e00 });
const cylinder4 = new THREE.Mesh(geometry4, material4);
cylinder4.position.x = 4.1
cylinder4.position.y = 0.1
chocolateCake.add(cylinder4);

const geometry5 = new THREE.CylinderGeometry(0.7, 0.7, 0.04, 42);
const material5 = new THREE.MeshStandardMaterial({ color: 0xffffff });
const cylinder5 = new THREE.Mesh(geometry5, material5);
cylinder5.position.x = 4.1
cylinder5.position.y = 0.22
chocolateCake.add(cylinder5);

const geometry6 = new THREE.CylinderGeometry(0.7, 0.7, 0.1, 42);
const material6 = new THREE.MeshStandardMaterial({ color: 0x361e00 });
const cylinder6 = new THREE.Mesh(geometry6, material6);
cylinder6.position.x = 4.1
cylinder6.position.y = 0.29
chocolateCake.add(cylinder6);

const geometry7 = new THREE.CylinderGeometry(0.7, 0.7, 0.04, 42);
const material7 = new THREE.MeshStandardMaterial({ color: 0xffffff });
const cylinder7 = new THREE.Mesh(geometry7, material7);
cylinder7.position.x = 4.1
cylinder7.position.y = 0.36
chocolateCake.add(cylinder7);

const geometry8 = new THREE.CylinderGeometry(0.7, 0.7, 0.2, 42);
const material8 = new THREE.MeshStandardMaterial({ color: 0x361e00 });
const cylinder8 = new THREE.Mesh(geometry8, material8);
cylinder8.position.x = 4.1
cylinder8.position.y = 0.48
chocolateCake.add(cylinder8);

const geometry9 = new THREE.CylinderGeometry(0.7, 0.7, 0.03, 42);
const material9 = new THREE.MeshStandardMaterial({ 
    aoMap: chocolateAmbientOcclusionTexture, 
    map: chocolateColorTexture, 
    displacementMap: chocolateHeightTexture, 
    normalMap: chocolateNormalTexture, 
    transparent: true,
    displacementScale: 0.01
});
const cylinder9 = new THREE.Mesh(geometry9, material9);
cylinder9.position.x = 4.1
cylinder9.position.y = 0.59
chocolateCake.add(cylinder9);

// Strawberry cream cake
const strawberryCake = new THREE.Group()
cakes.add(strawberryCake)

const geometry10 = new THREE.CylinderGeometry(0.7, 0.7, 0.04, 42);
const material10 = new THREE.MeshStandardMaterial({ color: 0x8a4900 });
const cylinder10 = new THREE.Mesh(geometry10, material10);
cylinder10.position.x = 1.88
cylinder10.position.y = 0.02
cylinder10.position.z = -3.5
strawberryCake.add(cylinder10);

const geometry11 = new THREE.CylinderGeometry(0.7, 0.7, 0.25, 42);
const material11 = new THREE.MeshStandardMaterial({ 
    color: 0xffb8f1, 
    aoMap: chocolateAmbientOcclusionTexture2,  
    displacementMap: chocolateHeightTexture2, 
    normalMap: chocolateNormalTexture2, 
    transparent: true,
    displacementScale: 0.01
});
const cylinder11 = new THREE.Mesh(geometry11, material11);
cylinder11.position.x = 1.88
cylinder11.position.y = 0.17
cylinder11.position.z = -3.5
strawberryCake.add(cylinder11);

// Cream cake
const creamCake = new THREE.Group()
cakes.add(creamCake)

const geometry12 = new THREE.CylinderGeometry(0.7, 0.7, 0.04, 42);
const material12 = new THREE.MeshStandardMaterial({ color: 0x8a4900 });
const cylinder12 = new THREE.Mesh(geometry12, material12);
cylinder12.position.x = -1.88
cylinder12.position.y = 0.02
cylinder12.position.z = -3.5
creamCake.add(cylinder12);

const geometry13 = new THREE.CylinderGeometry(0.7, 0.7, 0.3, 42);
const material13 = new THREE.MeshStandardMaterial({ color: 0xffffff });
const cylinder13 = new THREE.Mesh(geometry13, material13);
cylinder13.position.x = -1.88
cylinder13.position.y = 0.19
cylinder13.position.z = -3.5
creamCake.add(cylinder13);

const geometry14 = new THREE.CylinderGeometry(0.7, 0.7, 0.02, 42);
const material14 = new THREE.MeshStandardMaterial({ color: 0x452700 });
const cylinder14 = new THREE.Mesh(geometry14, material14);
cylinder14.position.x = -1.88
cylinder14.position.y = 0.35
cylinder14.position.z = -3.5
creamCake.add(cylinder14);

// Rainbow cake 
const rainbowCake = new THREE.Group()
cakes.add(rainbowCake)

const geometry15 = new THREE.CylinderGeometry(0.7, 0.7, 0.3, 42);
const material15 = new THREE.MeshStandardMaterial({ color: 0xffffff });
const cylinder15 = new THREE.Mesh(geometry15, material15);
cylinder15.position.x = 1.88
cylinder15.position.y = 0.14
cylinder15.position.z = 3.5
rainbowCake.add(cylinder15);

const geometry16 = new THREE.CylinderGeometry(0.55, 0.55, 0.2, 42);
const material16 = new THREE.MeshStandardMaterial({ color: 0xffffff });
const cylinder16 = new THREE.Mesh(geometry16, material16);
cylinder16.position.x = 1.88
cylinder16.position.y = 0.34
cylinder16.position.z = 3.5
rainbowCake.add(cylinder16);

const geometry17 = new THREE.CylinderGeometry(0.4, 0.4, 0.2, 42);
const material17 = new THREE.MeshStandardMaterial({ color: 0xffffff });
const cylinder17 = new THREE.Mesh(geometry17, material17);
cylinder17.position.x = 1.88
cylinder17.position.y = 0.54
cylinder17.position.z = 3.5
rainbowCake.add(cylinder17);

const berry1 = new THREE.DodecahedronGeometry(0.04, 1);
const berryMaterial = new THREE.MeshStandardMaterial({ color: 0x9e0022 });
const berryMesh1 = new THREE.Mesh(berry1, berryMaterial);
berryMesh1.position.x = 1.7
berryMesh1.position.y = 0.65
berryMesh1.position.z = 3.54
rainbowCake.add(berryMesh1);

const berry2 = new THREE.DodecahedronGeometry(0.04, 1);
const berryMesh2 = new THREE.Mesh(berry2, berryMaterial);
berryMesh2.position.x = 2.133
berryMesh2.position.y = 0.65
berryMesh2.position.z = 3.5
rainbowCake.add(berryMesh2);

const berry3 = new THREE.DodecahedronGeometry(0.04, 1);
const berryMesh3 = new THREE.Mesh(berry2, berryMaterial);
berryMesh3.position.x = 1.8
berryMesh3.position.y = 0.65
berryMesh3.position.z = 3.76
rainbowCake.add(berryMesh3);

const berry4 = new THREE.DodecahedronGeometry(0.04, 1);
const berryMesh4 = new THREE.Mesh(berry2, berryMaterial);
berryMesh4.position.x = 1.916
berryMesh4.position.y = 0.65
berryMesh4.position.z = 3.325
rainbowCake.add(berryMesh4);

const berry5 = new THREE.DodecahedronGeometry(0.04, 1);
const berryMesh5 = new THREE.Mesh(berry2, berryMaterial);
berryMesh5.position.x = 2.025
berryMesh5.position.y = 0.65
berryMesh5.position.z = 3.76
rainbowCake.add(berryMesh5);

const berry6 = new THREE.DodecahedronGeometry(0.04, 1);
const berryMesh6 = new THREE.Mesh(berry2, berryMaterial);
berryMesh6.position.x = 1.7
berryMesh6.position.y = 0.65
berryMesh6.position.z = 3.325
rainbowCake.add(berryMesh6);

// Berry Cake 
const berryCake = new THREE.Group()
cakes.add(berryCake)

const geometry18 = new THREE.CylinderGeometry(0.7, 0.7, 0.2, 42);
const material18 = new THREE.MeshStandardMaterial({ color: 0xf1b166 });
const cylinder18 = new THREE.Mesh(geometry18, material18);
cylinder18.position.x = -1.88
cylinder18.position.y = 0.1
cylinder18.position.z = 3.5
berryCake.add(cylinder18);

const geometry19 = new THREE.CylinderGeometry(0.7, 0.7, 0.06, 42);
const material19 = new THREE.MeshStandardMaterial({ 
    color: 0x9e0022, 
    aoMap: chocolateAmbientOcclusionTexture,  
    displacementMap: chocolateHeightTexture, 
    normalMap: chocolateNormalTexture, 
    roughnessMap: chocolateRoughnessTexture,
    transparent: true,
    displacementScale: 0.01
});
const cylinder19 = new THREE.Mesh(geometry19, material19);
cylinder19.position.x = -1.88
cylinder19.position.y = 0.23
cylinder19.position.z = 3.5
berryCake.add(cylinder19);

// Plane 
const circleGeometry = new THREE.RingGeometry(3, 5, 82);
const circleMaterial = new THREE.MeshStandardMaterial({ color: 0xffe3fd });
const circle = new THREE.Mesh(circleGeometry, circleMaterial);
circle.rotation.x = - Math.PI * 0.5
circle.position.y = 0

cakes.add(circle);

let objects = []
objects.push(circle)


/**
 * Lights
 */
// Ambient light
const ambientLight = new THREE.AmbientLight('#fffecc', 0.8)
scene.add(ambientLight)

// Directional light
const moonLight = new THREE.DirectionalLight('#ffffff', 0.3)
moonLight.position.set(4, 5, - 2)
scene.add(moonLight)

/**
 * Sizes
 */
const sizes = {
    width: window.innerWidth,
    height: window.innerHeight
}

window.addEventListener('resize', () =>
{
    // Update sizes
    sizes.width = window.innerWidth
    sizes.height = window.innerHeight

    // Update camera
    camera.aspect = sizes.width / sizes.height
    camera.updateProjectionMatrix()

    // Update renderer
    renderer.setSize(sizes.width, sizes.height)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
})

/**
 * Camera
 */
// Base camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 0.1, 100)
camera.position.x = 4
camera.position.y = 2
camera.position.z = 5
camera.lookAt(circle)
scene.add(camera)

/**
 * Renderer
 */
const renderer = new THREE.WebGLRenderer({
    canvas: canvas,
    alpha: true,
    antialias: true
})
renderer.setSize(sizes.width, sizes.height)
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
renderer.setClearColor(0xffffff, 0);

// Controls
const controls = new OrbitControls(camera, canvas)
//controls.enableDamping = true
controls.enabled = false 
//controls.maxPolarAngle = Math.PI/2;
//controls.minPolarAngle = Math.PI/2;

/**
 * Animate
 */
 const clock = new THREE.Clock()

 const tick = () => {
     const elapsedTime = clock.getElapsedTime()
     cakes.rotation.y = elapsedTime / 5

     // Update controls
     controls.update() 
 
     // Render
     renderer.render(scene, camera)
 
     // Call tick again on the next frame
     window.requestAnimationFrame(tick)
 }
 
 tick()







