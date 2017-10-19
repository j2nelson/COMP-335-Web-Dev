//create tetrahedron

//Define canvas size
var canvasWidth = 600;
var canvasHeight = 400;
var canvasRatio = canvasWidth / canvasHeight;

//Create a scene
var scene = new THREE.Scene();
scene.background = new THREE.Color( 0xf0f0f0 );

//Create a camera
var camera = new THREE.PerspectiveCamera( 75, canvasRatio, 1, 4000 );
			
//Create a renderer
var renderer = new THREE.WebGLRenderer();
renderer.setSize( canvasWidth, canvasHeight );

//Place in HTML tag
var container = document.getElementById('shape');
container.appendChild( renderer.domElement );

//Create tetrahedron geometry 
var triangleGeometry = new THREE.TetrahedronGeometry(2,0);

//Add color to faces
triangleGeometry.faces[0].color.setHex(0x4286f4);
triangleGeometry.faces[1].color.setHex(0xf4415c);
triangleGeometry.faces[2].color.setHex(0x41f479);
triangleGeometry.faces[3].color.setHex(0xf4b841);

var triangleMaterial = new THREE.MeshBasicMaterial( { vertexColors: THREE.FaceColors, overdraw: 0.5 } );
var triangleMesh = new THREE.Mesh( triangleGeometry, triangleMaterial );


//Add tetrahedron to scene
scene.add( triangleMesh );

camera.position.z = 5;

//Rotate tetrahedron
var animate = function () {
	requestAnimationFrame( animate );

	triangleMesh.rotation.x += 0.01;
	triangleMesh.rotation.y += 0.01;

	renderer.render(scene, camera);
};

animate();

var canvas2Width = 200;
var canvas2Height = 200;
var canvas2Ratio = canvas2Width / canvas2Height;

//Create a scene
var scene2 = new THREE.Scene();
scene2.background = new THREE.Color( 0xf0f0f0 );

//Create a camera
var camera2 = new THREE.PerspectiveCamera( 75, canvas2Ratio, 1, 4000 );
			
//Create a renderer
var renderer2 = new THREE.WebGLRenderer();
renderer2.setSize( canvas2Width, canvas2Height );

//Place in HTML tag
var container2 = document.getElementById('shape');
container2.appendChild( renderer2.domElement );

//Create tetrahedron geometry 
var triangleGeometry2 = new THREE.TetrahedronGeometry(2,0);

//Add color to faces
triangleGeometry2.faces[0].color.setHex(0x4286f4);
triangleGeometry2.faces[1].color.setHex(0xf4415c);
triangleGeometry2.faces[2].color.setHex(0x41f479);
triangleGeometry2.faces[3].color.setHex(0xf4b841);

var triangleMaterial2 = new THREE.MeshBasicMaterial( { vertexColors: THREE.FaceColors, overdraw: 0.5 } );
var triangleMesh2 = new THREE.Mesh( triangleGeometry2, triangleMaterial2 );

//Add tetrahedron to scene
scene2.add( triangleMesh2 );

camera2.position.z = 5;

var animate2 = function () {
	requestAnimationFrame( animate2 );

	triangleMesh2.rotation.x += 0.01;
	triangleMesh2.rotation.y += 0.01;

	renderer2.render(scene2, camera2);
};

animate2();

var canvas3Width = 200;
var canvas3Height = 200;
var canvas3Ratio = canvas3Width / canvas3Height;

//Create a scene
var scene3 = new THREE.Scene();
scene3.background = new THREE.Color( 0xf0f0f0 );

//Create a camera
var camera3 = new THREE.PerspectiveCamera( 75, canvas3Ratio, 1, 4000 );
			
//Create a renderer
var renderer3 = new THREE.WebGLRenderer();
renderer3.setSize( canvas3Width, canvas3Height );

//Place in HTML tag
var container3 = document.getElementById('shape');
container3.appendChild( renderer3.domElement );

//Create tetrahedron geometry 
var triangleGeometry3 = new THREE.TetrahedronGeometry(2,0);

//Add color to faces
triangleGeometry3.faces[0].color.setHex(0x4286f4);
triangleGeometry3.faces[1].color.setHex(0xf4415c);
triangleGeometry3.faces[2].color.setHex(0x41f479);
triangleGeometry3.faces[3].color.setHex(0xf4b841);

var triangleMaterial3 = new THREE.MeshBasicMaterial( { vertexColors: THREE.FaceColors, overdraw: 0.5 } );
var triangleMesh3 = new THREE.Mesh( triangleGeometry3, triangleMaterial3 );

//Add tetrahedron to scene
scene3.add( triangleMesh3 );

camera3.position.z = 5;

var animate3 = function () {
	requestAnimationFrame( animate3 );

	triangleMesh3.rotation.x += 0.01;
	triangleMesh3.rotation.y += 0.01;

	renderer3.render(scene3, camera3);
};

animate3();

var canvas4Width = 200;
var canvas4Height = 200;
var canvas4Ratio = canvas4Width / canvas4Height;

//Create a scene
var scene4 = new THREE.Scene();
scene4.background = new THREE.Color( 0xf0f0f0 );

//Create a camera
var camera4 = new THREE.PerspectiveCamera( 75, canvas4Ratio, 1, 4000 );
			
//Create a renderer
var renderer4 = new THREE.WebGLRenderer();
renderer4.setSize( canvas4Width, canvas4Height );

//Place in HTML tag
var container4 = document.getElementById('shape');
container4.appendChild( renderer4.domElement );

//Create tetrahedron geometry 
var triangleGeometry4 = new THREE.TetrahedronGeometry(2,0);

//Add color to faces
triangleGeometry4.faces[0].color.setHex(0x4286f4);
triangleGeometry4.faces[1].color.setHex(0xf4415c);
triangleGeometry4.faces[2].color.setHex(0x41f479);
triangleGeometry4.faces[3].color.setHex(0xf4b841);

var triangleMaterial4 = new THREE.MeshBasicMaterial( { vertexColors: THREE.FaceColors, overdraw: 0.5 } );
var triangleMesh4 = new THREE.Mesh( triangleGeometry4, triangleMaterial4 );

//Add tetrahedron to scene
scene4.add( triangleMesh4 );

camera4.position.z = 5;

var animate4 = function () {
	requestAnimationFrame( animate4 );

	triangleMesh4.rotation.x += 0.01;
	triangleMesh4.rotation.y += 0.01;

	renderer4.render(scene4, camera4);
};

animate4();

var render = function( ){
	renderer.render( scene, camera);
}