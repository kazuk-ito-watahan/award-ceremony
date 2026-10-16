import * as THREE from 'three';
import {EffectComposer} from 'three/addons/postprocessing/EffectComposer.js';
import {RenderPass} from 'three/addons/postprocessing/RenderPass.js';
import {UnrealBloomPass} from 'three/addons/postprocessing/UnrealBloomPass.js';
import {OutputPass} from 'three/addons/postprocessing/OutputPass.js';
import {RoomEnvironment} from 'three/addons/environments/RoomEnvironment.js';
import {FontLoader} from 'three/addons/loaders/FontLoader.js';
import {mergeGeometries} from 'three/addons/utils/BufferGeometryUtils.js';
import {TextGeometry} from 'three/addons/geometries/TextGeometry.js';
import fontData from 'three/examples/fonts/helvetiker_bold.typeface.json';

async function boot(){
await document.fonts.load('700 40px "Noto Sans JP"',"優勝");
// THE LAST PITCH — a new, procedural stage. No previous scene code is used.
const $=id=>document.getElementById(id);
const config={...window.AWARDS_CONFIG};
const reduce=matchMedia('(prefers-reduced-motion: reduce)').matches;
const keys=['third','second','first'],names=['第 3 位','準優勝','優勝'];
let seed=8173;const random=()=>{seed=(Math.imul(seed,1664525)+1013904223)>>>0;return seed/4294967296;};
const renderer=new THREE.WebGLRenderer({canvas:$('stage'),antialias:true,powerPreference:'high-performance'});
renderer.setPixelRatio(Math.min(devicePixelRatio,1.5));renderer.setClearColor(0x031015);
renderer.shadowMap.enabled=true;renderer.shadowMap.type=THREE.PCFSoftShadowMap;
renderer.toneMapping=THREE.ACESFilmicToneMapping;renderer.toneMappingExposure=1.05;
const scene=new THREE.Scene();scene.background=new THREE.Color(0x030b10);scene.fog=new THREE.FogExp2(0x030b10,.033);
const camera=new THREE.PerspectiveCamera(37,1,.1,180);camera.position.set(0,4,17.5);
const composer=new EffectComposer(renderer);composer.addPass(new RenderPass(scene,camera));
const bloom=new UnrealBloomPass(new THREE.Vector2(800,600),.32,.65,1.15);composer.addPass(bloom);composer.addPass(new OutputPass());
const pmrem=new THREE.PMREMGenerator(renderer),environment=new RoomEnvironment();
scene.environment=pmrem.fromScene(environment,.06).texture;scene.environmentIntensity=.6;environment.dispose();pmrem.dispose();
const root=new THREE.Group();scene.add(root);
const make=(geometry,material,parent=root)=>{const mesh=new THREE.Mesh(geometry,material);parent.add(mesh);return mesh;};
const material=(color,metalness=0,roughness=.7)=>new THREE.MeshStandardMaterial({color,metalness,roughness});
const warm=new THREE.Color('#e2be73');

// Ground: painted clay grains, subtle furrows and chalk, all locally generated.
function texture(size,paint,srgb=true){const c=document.createElement('canvas');c.width=c.height=size;paint(c.getContext('2d'),size);const t=new THREE.CanvasTexture(c);if(srgb)t.colorSpace=THREE.SRGBColorSpace;t.anisotropy=Math.min(renderer.capabilities.getMaxAnisotropy(),8);return t;}
const clay=texture(1024,(g,n)=>{g.fillStyle='#51453b';g.fillRect(0,0,n,n);for(let i=0;i<150000;i++){let v=35+random()*90;g.fillStyle=`rgba(${v+15},${v},${v*.78},${.12+random()*.5})`;const r=.4+random()*1.7;g.fillRect(random()*n,random()*n,r,r);}g.strokeStyle='#a1978222';g.lineWidth=.6;for(let i=0;i<160;i++){g.beginPath();g.moveTo(0,i*7);g.bezierCurveTo(300,i*7+20,600,i*7-12,n,i*7+2);g.stroke();}});
clay.wrapS=clay.wrapT=THREE.RepeatWrapping;clay.repeat.set(18,18);
const ground=make(new THREE.PlaneGeometry(180,180),new THREE.MeshStandardMaterial({map:clay,bumpMap:clay,bumpScale:.12,roughness:.94,color:0x716552}));ground.rotation.x=-Math.PI/2;ground.receiveShadow=true;
const grass=material(0x12251e,0,1);const outfield=make(new THREE.RingGeometry(32,100,128),grass);outfield.rotation.x=-Math.PI/2;outfield.position.set(0,.005,6);
const chalk=material(0xb9b39d,0,.96);
function line(a,b,width=.07){const d=new THREE.Vector3().subVectors(b,a);const m=make(new THREE.BoxGeometry(width,.012,d.length()),chalk);m.position.copy(a).add(b).multiplyScalar(.5);m.rotation.y=Math.atan2(d.x,d.z);return m;}
line(new THREE.Vector3(0,.02,8),new THREE.Vector3(-48,.02,-43));line(new THREE.Vector3(0,.02,8),new THREE.Vector3(48,.02,-43));
const plateShape=new THREE.Shape();plateShape.moveTo(-.42,.38);plateShape.lineTo(.42,.38);plateShape.lineTo(.42,0);plateShape.lineTo(0,-.42);plateShape.lineTo(-.42,0);plateShape.closePath();const plate=make(new THREE.ShapeGeometry(plateShape),chalk);plate.rotation.x=-Math.PI/2;plate.position.set(0,.025,7.8);

// Distant continuous bowl. Seats are silhouettes rather than front-and-center blocks.
const darkConcrete=material(0x080f12,.05,.85),railing=material(0x283637,.6,.6);
for(let row=0;row<14;row++){
 const r=48+row*.75,points=[];for(let i=0;i<=140;i++){const a=Math.PI+i/140*Math.PI;points.push(new THREE.Vector3(Math.cos(a)*r,1.8+row*.36,Math.sin(a)*r-4));}
 const c=new THREE.CatmullRomCurve3(points);make(new THREE.TubeGeometry(c,140,.19,4,false),darkConcrete);
 if(row%4===0)make(new THREE.TubeGeometry(c,140,.035,4,false),railing).position.y=.3;
}
// Stadium lamps and soft optical halos.
const haloTexture=texture(128,(g,n)=>{const a=g.createRadialGradient(n/2,n/2,0,n/2,n/2,n/2);a.addColorStop(0,'rgba(255,241,208,1)');a.addColorStop(.08,'rgba(255,241,208,.8)');a.addColorStop(.3,'rgba(162,200,209,.15)');a.addColorStop(1,'rgba(162,200,209,0)');g.fillStyle=a;g.fillRect(0,0,n,n);});
function halo(x,y,z,size,opacity=.5){const s=new THREE.Sprite(new THREE.SpriteMaterial({map:haloTexture,transparent:true,opacity,blending:THREE.AdditiveBlending,depthWrite:false,color:0xddeaf1,fog:false}));s.position.set(x,y,z);s.scale.set(size,size,1);root.add(s);return s;}
const lampMat=new THREE.MeshBasicMaterial({color:new THREE.Color(2.4,2.25,1.9),fog:false});
for(const x of [-38,-19,20,39]){const z=x===-19||x===20?-45:-33;const pole=make(new THREE.CylinderGeometry(.12,.24,12,10),railing);pole.position.set(x,6,z);const rack=make(new THREE.BoxGeometry(5,1.3,.25),darkConcrete);rack.position.set(x,12,z);for(let i=0;i<10;i++){const bulb=make(new THREE.PlaneGeometry(.32,.23),lampMat);bulb.position.set(x-2+i%5,11.7+Math.floor(i/5)*.58,z+.17);}halo(x,12,z,16,.45);}
// A low-density cone of light scatters in the haze beneath the floodlights.
for(const side of [-1,1]){
 const start=new THREE.Vector3(side*19,12,-45),end=new THREE.Vector3(side*5,.5,-3),direction=new THREE.Vector3().subVectors(start,end);
 const m=new THREE.ShaderMaterial({transparent:true,depthWrite:false,blending:THREE.AdditiveBlending,side:THREE.DoubleSide,uniforms:{tint:{value:new THREE.Color(0x9cbecb)}},vertexShader:`varying vec2 vUv;void main(){vUv=uv;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}`,fragmentShader:`varying vec2 vUv;uniform vec3 tint;void main(){float edge=pow(sin(vUv.x*3.14159265),3.);float a=edge*pow(vUv.y,1.5)*smoothstep(1.,.88,vUv.y)*.035;gl_FragColor=vec4(tint,a);}`});
 const cone=make(new THREE.CylinderGeometry(.3,6,direction.length(),48,1,true),m);cone.position.copy(start).add(end).multiplyScalar(.5);cone.quaternion.setFromUnitVectors(new THREE.Vector3(0,1,0),direction.normalize());
}
// Warm specks of a distant audience, kept subtle by fog.
const seats=new Float32Array(1500*3);for(let i=0;i<1500;i++){const a=Math.PI+random()*Math.PI,r=49+random()*9;seats[i*3]=Math.cos(a)*r;seats[i*3+1]=2+random()*5;seats[i*3+2]=Math.sin(a)*r-4;}
const seatsG=new THREE.BufferGeometry();seatsG.setAttribute('position',new THREE.BufferAttribute(seats,3));root.add(new THREE.Points(seatsG,new THREE.PointsMaterial({color:0xa3b6b7,size:.065,transparent:true,opacity:.4,depthWrite:false})));
scene.add(new THREE.HemisphereLight(0x90acbb,0x36251a,1.25));
function spot(color,intensity,pos,target,angle){const s=new THREE.SpotLight(color,intensity,100,angle,.85,1.5);s.position.set(...pos);s.target.position.set(...target);scene.add(s,s.target);return s;}
const key=spot(0xffe5bd,170,[0,11,9],[4,2,0],.45);key.castShadow=true;key.shadow.mapSize.set(2048,2048);key.shadow.bias=-.0003;key.shadow.normalBias=.025;key.shadow.blurSamples=12;
spot(0xb8dbff,210,[12,8,-6],[4,2,0],.48);spot(0xffd291,55,[-8,4,4],[4,2,0],.6);
const floorLight=new THREE.PointLight(0xc69658,9,14,2);floorLight.position.set(5,1.5,3);scene.add(floorLight);

// Hero baseball: micro-pitted leather, recessed seam and individually modeled stitches.
const leather=texture(1024,(g,n)=>{g.fillStyle='#e4decb';g.fillRect(0,0,n,n);for(let i=0;i<80000;i++){const x=random()*n,y=random()*n,r=.3+random()*1.2;g.fillStyle=random()>.5?'#918a7030':'#fffbea65';g.beginPath();g.ellipse(x,y,r,r*.7,random()*3,0,7);g.fill();}});
leather.wrapS=leather.wrapT=THREE.RepeatWrapping;leather.repeat.set(3,2);
const ballGroup=new THREE.Group();root.add(ballGroup);
const ballMaterial=new THREE.MeshPhysicalMaterial({map:leather,bumpMap:leather,bumpScale:.075,roughness:.7,clearcoat:.04,color:0xfff7e4});
const ball=make(new THREE.SphereGeometry(1.62,96,64),ballMaterial,ballGroup);ball.castShadow=true;ball.receiveShadow=true;
const seamPoint=t=>{const lat=.58*Math.sin(2*t);return new THREE.Vector3(Math.cos(lat)*Math.cos(t),Math.sin(lat),Math.cos(lat)*Math.sin(t)).multiplyScalar(1.624);};
const seamPoints=Array.from({length:257},(_,i)=>seamPoint(i/256*Math.PI*2));
const seamPath=new THREE.CatmullRomCurve3(seamPoints,true);
make(new THREE.TubeGeometry(seamPath,320,.013,6,true),material(0x725e48,0,.9),ballGroup);
const thread=material(0x9c281f,0,.85),stitchGeometries=[];
for(let i=0;i<108;i++){
 const t=i/108*Math.PI*2,p=seamPoint(t),tangent=seamPoint(t+.003).sub(p).normalize(),normal=p.clone().normalize(),side=new THREE.Vector3().crossVectors(normal,tangent).normalize();
 for(const sign of [-1,1]){const a=p.clone().addScaledVector(side,sign*.067).addScaledVector(tangent,-.025).normalize().multiplyScalar(1.63),b=p.clone().addScaledVector(side,sign*.008).addScaledVector(tangent,.026).normalize().multiplyScalar(1.642),mid=a.clone().lerp(b,.5).normalize().multiplyScalar(1.65);stitchGeometries.push(new THREE.TubeGeometry(new THREE.QuadraticBezierCurve3(a,mid,b),5,.009,5,false));}
}
make(mergeGeometries(stitchGeometries),thread,ballGroup);stitchGeometries.forEach(g=>g.dispose());ballGroup.rotation.set(.3,.1,.55);

// The award is a monumental cast-metal numeral, with a fine architectural ring.
const hero=new THREE.Group();root.add(hero);hero.position.set(4.3,0,0);
const base=make(new THREE.CylinderGeometry(2.15,2.25,.22,96),material(0x141c1d,.55,.28),hero);base.position.y=.15;base.receiveShadow=true;base.castShadow=true;
const edge=make(new THREE.TorusGeometry(2.12,.018,8,120),material(0xe3bd70,.9,.25),hero);edge.rotation.x=Math.PI/2;edge.position.y=.27;
const font=new FontLoader().parse(fontData),awardGroups=[],awardMaterials=[];
for(let index=0;index<3;index++){
 const g=new THREE.Group();hero.add(g);awardGroups.push(g);
 const m=new THREE.MeshPhysicalMaterial({color:[0xbe7850,0xc4d4df,0xeac46c][index],metalness:.95,roughness:.3,clearcoat:.28,clearcoatRoughness:.18});awardMaterials.push(m);
 const geo=new TextGeometry(String(3-index),{font,size:3.85,depth:.4,curveSegments:20,bevelEnabled:true,bevelThickness:.065,bevelSize:.055,bevelSegments:5});geo.computeBoundingBox();geo.translate(-(geo.boundingBox.max.x+geo.boundingBox.min.x)/2,.31,-.2);
 const number=make(geo,m,g);number.castShadow=true;number.receiveShadow=true;
 const ring=make(new THREE.TorusGeometry(2.65,.019,8,160),m,g);ring.position.set(0,2.9,-.6);
 const ring2=make(new THREE.TorusGeometry(2.75,.006,6,160),m,g);ring2.position.copy(ring.position);
 // Small laurel leaves, deliberately restrained.
 for(const side of [-1,1])for(let j=0;j<12;j++){const a=(.55+j*.075)*Math.PI;const leaf=make(new THREE.SphereGeometry(1,10,6),m,g);leaf.scale.set(.065,.19,.023);leaf.position.set(side*Math.sin(a)*2.42,2.9+Math.cos(a)*2.42,-.57);leaf.rotation.z=side*(a-.5);}
 g.visible=false;
}
// A woven crimson pennant, made from a deformed cloth mesh, only for the champion.
const flagGroup=new THREE.Group();root.add(flagGroup);flagGroup.position.set(2.7,0,-2.2);
const flagMap=texture(1024,(g,n)=>{g.fillStyle='#641322';g.fillRect(0,0,n,n);for(let y=0;y<n;y+=3){g.strokeStyle=y%2?'#ffffff07':'#00000016';g.beginPath();g.moveTo(0,y);g.lineTo(n,y);g.stroke();}g.strokeStyle='#d9b15f';g.lineWidth=10;g.strokeRect(30,30,n-60,n-60);g.lineWidth=2;g.strokeRect(46,46,n-92,n-92);g.fillStyle='#ecd08a';g.textAlign='center';g.font='700 220px "Noto Sans JP"';g.fillText('優 勝',n/2,540);g.font='35px Georgia';g.fillText('CHAMPIONS',n/2,680);g.font='20px Arial';g.fillText('THE FINAL INNING',n/2,760);});
const flagGeo=new THREE.PlaneGeometry(4.4,3.2,64,40);flagGeo.translate(2.2,4.6,0);const flagOriginal=flagGeo.attributes.position.array.slice();
const flag=make(flagGeo,new THREE.MeshStandardMaterial({map:flagMap,side:THREE.DoubleSide,roughness:.78,metalness:.08}),flagGroup);flag.castShadow=true;
const pole=make(new THREE.CylinderGeometry(.045,.06,6.5,16),material(0xc7ac6c,.8,.3),flagGroup);pole.position.y=3.25;
const finial=make(new THREE.SphereGeometry(.11,16,12),material(0xd7b768,.85,.25),flagGroup);finial.position.y=6.55;

// Atmosphere: illuminated dust and celebratory foil with correct perspective.
const dustCount=160,dustPositions=new Float32Array(dustCount*3);for(let i=0;i<dustCount;i++){dustPositions[i*3]=(random()-.5)*25;dustPositions[i*3+1]=random()*12;dustPositions[i*3+2]=(random()-.5)*20;}
const dustGeometry=new THREE.BufferGeometry();dustGeometry.setAttribute('position',new THREE.BufferAttribute(dustPositions,3));const dust=new THREE.Points(dustGeometry,new THREE.PointsMaterial({map:haloTexture,color:0xf1d6a6,size:.075,transparent:true,opacity:.4,depthWrite:false,blending:THREE.AdditiveBlending}));root.add(dust);
const confettiCount=450,foil=new THREE.InstancedMesh(new THREE.PlaneGeometry(.055,.15),new THREE.MeshStandardMaterial({color:0xf3cf7e,metalness:.75,roughness:.35,side:THREE.DoubleSide}),confettiCount);root.add(foil);foil.instanceMatrix.setUsage(THREE.DynamicDrawUsage);foil.frustumCulled=false;
const foilData=Array.from({length:confettiCount},()=>({x:(random()-.5)*20+3,y:random()*14,z:(random()-.5)*12,speed:.5+random()*1.1,phase:random()*7}));const dummy=new THREE.Object3D();

// Existing UI, rebuilt controller. Rendering has a clean, explicit state boundary.
let step=0,busy=false,enabledSound=false,audio,phase='opening',rank=-1,revealStarted=0,phaseStarted=0;
let wanted={ball:1,award:0,flag:0,confetti:0,dim:1},smooth={...wanted};
function bind(){document.querySelectorAll('[data-bind]').forEach(el=>el.textContent=config[el.dataset.bind]??'');document.title=config.brand+' | 表彰式';document.querySelectorAll('.rank-announcement h2').forEach(el=>{el.style.fontSize=el.textContent.length>16?'clamp(24px,2.8vw,44px)':el.textContent.length>10?'clamp(28px,3.5vw,56px)':'';});}
function showOnly(id){for(const el of [$('intro-copy'),$('suspense'),...keys.map(k=>$('rank-'+k))]){const visible=el.id===id;el.getAnimations().forEach(a=>a.cancel());el.style.opacity=visible?'1':'0';el.setAttribute('aria-hidden',String(!visible));if(visible&&!reduce)el.animate([{opacity:0,translate:'0 18px'},{opacity:1,translate:'0 0'}],{duration:950,easing:'cubic-bezier(.2,.7,.2,1)'});}}
function playTone(f,at,len,volume=.035){if(!enabledSound)return;const o=audio.createOscillator(),g=audio.createGain();o.type='triangle';o.frequency.value=f;g.gain.setValueAtTime(0,audio.currentTime+at);g.gain.linearRampToValueAtTime(volume,audio.currentTime+at+.02);g.gain.exponentialRampToValueAtTime(.0001,audio.currentTime+at+len);o.connect(g);g.connect(audio.destination);o.start(audio.currentTime+at);o.stop(audio.currentTime+at+len+.02);}
const wait=ms=>new Promise(resolve=>setTimeout(resolve,reduce?30:ms));
async function advance(next){
 if(busy||next<0||next>6)return;busy=true;step=next;phase=step===0?'opening':step%2?'pending':'reveal';rank=Math.max(0,Math.ceil(step/2)-1);phaseStarted=performance.now()/1000;
 $('next').disabled=true;$('prev').disabled=step===0;$('settings').disabled=true;
 $('scene-index').textContent=step===0?'OPENING':names[rank];$('progress-bar').style.width=(step/6*100)+'%';
 $('next').textContent=step===0?'表彰を始める →':phase==='pending'?'受賞チームを発表 →':step===6?'表彰終了':'次の賞へ →';$('cue').textContent=step===6?'R で冒頭へ / ← で戻る':'SPACE / → で進行';
 wanted={ball:step===0?1:phase==='pending'?.9:0,award:0,flag:0,confetti:0,dim:phase==='pending'?.4:1};
 if(step===0){showOnly('intro-copy');await wait(700);}
 else if(phase==='pending'){showOnly('suspense');$('pending-rank').textContent=names[rank];playTone(130,0,.4,.025);await wait(850);}
 else {showOnly('suspense');$('pending-rank').textContent=names[rank];for(let i=0;i<10;i++)playTone(85+i*9,i*.13,.1,.02);await wait(1650);wanted={ball:0,award:1,flag:rank===2?1:0,confetti:reduce?0:[.1,.28,1][rank],dim:1};revealStarted=performance.now()/1000;showOnly('rank-'+keys[rank]);[392,523,659,784].forEach((f,i)=>playTone(f,i*.13,.85));await wait(1100);}
 busy=false;$('next').disabled=step===6;$('settings').disabled=false;
}
$('next').onclick=()=>advance(step+1);$('prev').onclick=()=>advance(step-1);
$('fullscreen').onclick=async()=>{try{document.fullscreenElement?await document.exitFullscreen():await document.documentElement.requestFullscreen();}catch{$('cue').textContent='F11 キーでも全画面に切り替えできます';}};
$('sound').onclick=()=>{enabledSound=!enabledSound;if(enabledSound){audio??=new(window.AudioContext||window.webkitAudioContext)();audio.resume();playTone(523,0,.2);}$('sound').textContent='音 '+(enabledSound?'ON':'OFF');$('sound').setAttribute('aria-pressed',String(enabledSound));};
keys.forEach((k,i)=>{const group=document.createElement('fieldset'),legend=document.createElement('legend');legend.textContent=names[i];group.append(legend);for(const [suffix,label] of [['Team','チーム名'],['Title','事業名']]){const l=document.createElement('label'),input=document.createElement('input');l.textContent=label;input.name=k+suffix;input.required=true;input.maxLength=suffix==='Team'?40:80;l.append(input);group.append(l);}$('team-fields').append(group);});
$('settings').onclick=()=>{if(busy)return;for(const input of $('config-form').querySelectorAll('input'))input.value=config[input.name]||'';$('editor').showModal();};$('close-editor').onclick=()=>$('editor').close();
$('config-form').onsubmit=e=>{e.preventDefault();const data=Object.fromEntries(new FormData(e.target));Object.assign(config,data);try{localStorage.setItem('diamond-ceremony-config',JSON.stringify(data));}catch{}bind();$('editor').close();advance(0);};
addEventListener('keydown',e=>{if($('editor').open||/INPUT|TEXTAREA|SELECT/.test(e.target.tagName)||e.repeat)return;if(e.target.tagName==='BUTTON'&&['Space','Enter'].includes(e.code))return;const forward=['Space','ArrowRight','ArrowDown','PageDown'],back=['ArrowLeft','ArrowUp','PageUp'];if([...forward,...back,'KeyR','KeyF'].includes(e.code))e.preventDefault();if(forward.includes(e.code))advance(step+1);if(back.includes(e.code))advance(step-1);if(e.code==='KeyR')advance(0);if(e.code==='KeyF')$('fullscreen').click();});
let narrow=false;function resize(){narrow=innerWidth<700;renderer.setSize(innerWidth,innerHeight,false);composer.setSize(innerWidth,innerHeight);camera.aspect=innerWidth/innerHeight;camera.fov=narrow?48:37;camera.updateProjectionMatrix();}addEventListener('resize',resize);resize();
const target=new THREE.Vector3();let previous=performance.now()/1000;const cameraPos=new THREE.Vector3(0,4,17);
function frame(){const now=performance.now()/1000,dt=Math.min(.5,now-previous);previous=now;const time=reduce?0:now;const damping=reduce?1:1-Math.exp(-dt*2.3);
 for(const k of Object.keys(smooth))smooth[k]+= (wanted[k]-smooth[k])*damping;
 root.position.x=narrow?-3.9:0;
 cameraPos.set(phase==='pending'?.5:0,phase==='pending'?3.6:4,phase==='pending'?15.8:17.5);camera.position.lerp(cameraPos,damping*.6);target.set(0,narrow?2.65:2.5,0);camera.lookAt(target);
 ballGroup.position.set(4.3,2.65+Math.sin(time*.35)*.04,0);ballGroup.scale.setScalar(Math.max(.001,smooth.ball));ballGroup.visible=smooth.ball>.01;ballGroup.rotation.y=.25+Math.sin(time*.045)*.4;ballGroup.rotation.z=.55;
 hero.visible=smooth.award>.005;hero.scale.setScalar(Math.max(.001,smooth.award));hero.position.y=(1-smooth.award)*-.3;
 awardGroups.forEach((g,i)=>{g.visible=i===rank;g.rotation.y=reduce?-.08:-.08+Math.sin(time*.23)*.035;});
 flagGroup.visible=smooth.flag>.01;flagGroup.scale.setScalar(Math.max(.001,smooth.flag));
 if(flagGroup.visible){const pos=flagGeo.attributes.position;for(let i=0;i<pos.count;i++){const x=flagOriginal[i*3],y=flagOriginal[i*3+1],u=x/4.4;pos.setXYZ(i,x,y-.18*u*u+.045*u*Math.sin(time*1.1+x),Math.sin(x*2.7-time*1.4)*.19*u+Math.sin(y*3+x-time*1.8)*.055*u);}pos.needsUpdate=true;flagGeo.computeVertexNormals();}
 key.intensity=105*smooth.dim;floorLight.intensity=6+smooth.award*4;bloom.strength=.28+smooth.flag*.12;
 dust.rotation.y=time*.004;
 foil.count=Math.floor(confettiCount*smooth.confetti);for(let i=0;i<foil.count;i++){const d=foilData[i],t=Math.max(0,now-revealStarted);dummy.position.set(d.x+Math.sin(t*.4+d.phase)*.5,((d.y-t*d.speed)%14+14)%14,d.z);dummy.rotation.set(t+d.phase,t*.6,d.phase+t*.8);dummy.updateMatrix();foil.setMatrixAt(i,dummy.matrix);}if(foil.count)foil.instanceMatrix.needsUpdate=true;
 composer.render();requestAnimationFrame(frame);
}
bind();window.ceremonyReady=true;advance(0);frame();

}
boot().catch(error=>{console.error(error);document.getElementById("fallback").hidden=false;});
