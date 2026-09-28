(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function t(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(i){if(i.ep)return;i.ep=!0;const s=t(i);fetch(i.href,s)}})();const lf="186",o_=0,Pd=1,l_=2,Bl=1,c_=2,Xa=3,ps=0,Zn=1,oi=2,Zi=0,no=1,ic=2,Dd=3,Ld=4,u_=5,$s=100,h_=101,f_=102,d_=103,p_=104,m_=200,__=201,g_=202,x_=203,R0=204,P0=205,v_=206,S_=207,M_=208,y_=209,b_=210,T_=211,E_=212,w_=213,A_=214,Vu=0,Hu=1,Wu=2,bo=3,Xu=4,Yu=5,Zu=6,$u=7,D0=0,C_=1,R_=2,$i=0,cf=1,uf=2,hf=3,Ac=4,ff=5,df=6,pf=7,L0=300,ms=301,fa=302,Hc=303,Wc=304,Cc=306,Ju=1e3,cr=1001,Ku=1002,_n=1003,P_=1004,Zo=1005,Rn=1006,Xc=1007,is=1008,li=1009,I0=1010,N0=1011,To=1012,mf=1013,Qi=1014,Ni=1015,$n=1016,_f=1017,gf=1018,Eo=1020,U0=35902,O0=35899,F0=1021,q0=1022,Ui=1023,pr=1026,rs=1027,xf=1028,vf=1029,_s=1030,Sf=1031,Mf=1033,zl=33776,kl=33777,Gl=33778,Vl=33779,Qu=35840,ju=35841,eh=35842,th=35843,nh=36196,ih=37492,rh=37496,sh=37488,ah=37489,rc=37490,oh=37491,lh=37808,ch=37809,uh=37810,hh=37811,fh=37812,dh=37813,ph=37814,mh=37815,_h=37816,gh=37817,xh=37818,vh=37819,Sh=37820,Mh=37821,yh=36492,bh=36494,Th=36495,Eh=36283,wh=36284,sc=36285,Ah=36286,D_=3200,Ch=0,L_=1,Ar="",wn="srgb",ac="srgb-linear",oc="linear",vt="srgb",Yc=7680,I_=519,N_=512,U_=513,O_=514,yf=515,F_=516,q_=517,bf=518,B_=519,z_=35044,k_=35048,Id="300 es",Hi=2e3,wo=2001;function G_(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function lc(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function V_(){const r=lc("canvas");return r.style.display="block",r}const Nd={};function Ud(...r){const e="THREE."+r.shift();console.log(e,...r)}function B0(r){const e=r[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=r[1];t&&t.isStackTrace?r[0]+=" "+t.getLocation():r[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return r}function Ke(...r){r=B0(r);const e="THREE."+r.shift();{const t=r[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...r)}}function gt(...r){r=B0(r);const e="THREE."+r.shift();{const t=r[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...r)}}function ia(...r){const e=r.join(" ");e in Nd||(Nd[e]=!0,Ke(...r))}function H_(r,e,t){return new Promise(function(n,i){function s(){switch(r.clientWaitSync(e,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:i();break;case r.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:n()}}setTimeout(s,t)})}const W_={[Vu]:Hu,[Wu]:Zu,[Xu]:$u,[bo]:Yu,[Hu]:Vu,[Zu]:Wu,[$u]:Xu,[Yu]:bo};class ys{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const i=n[e];if(i!==void 0){const s=i.indexOf(t);s!==-1&&i.splice(s,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let s=0,a=i.length;s<a;s++)i[s].call(this,e);e.target=null}}}const yn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Od=1234567;const io=Math.PI/180,da=180/Math.PI;function bs(){const r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(yn[r&255]+yn[r>>8&255]+yn[r>>16&255]+yn[r>>24&255]+"-"+yn[e&255]+yn[e>>8&255]+"-"+yn[e>>16&15|64]+yn[e>>24&255]+"-"+yn[t&63|128]+yn[t>>8&255]+"-"+yn[t>>16&255]+yn[t>>24&255]+yn[n&255]+yn[n>>8&255]+yn[n>>16&255]+yn[n>>24&255]).toLowerCase()}function st(r,e,t){return Math.max(e,Math.min(t,r))}function Tf(r,e){return(r%e+e)%e}function X_(r,e,t,n,i){return n+(r-e)*(i-n)/(t-e)}function Y_(r,e,t){return r!==e?(t-r)/(e-r):0}function ro(r,e,t){return(1-t)*r+t*e}function Z_(r,e,t,n){return ro(r,e,1-Math.exp(-t*n))}function $_(r,e=1){return e-Math.abs(Tf(r,e*2)-e)}function J_(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*(3-2*r))}function K_(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*r*(r*(r*6-15)+10))}function Q_(r,e){return r+Math.floor(Math.random()*(e-r+1))}function j_(r,e){return r+Math.random()*(e-r)}function eg(r){return r*(.5-Math.random())}function tg(r){r!==void 0&&(Od=r);let e=Od+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function ng(r){return r*io}function ig(r){return r*da}function rg(r){return r>0&&Number.isInteger(r)&&2**Math.round(Math.log2(r))===r}function sg(r){return Math.pow(2,Math.ceil(Math.log(r)/Math.LN2))}function ag(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function og(r,e,t,n,i){const s=Math.cos,a=Math.sin,o=s(t/2),l=a(t/2),c=s((e+n)/2),u=a((e+n)/2),d=s((e-n)/2),h=a((e-n)/2),f=s((n-e)/2),_=a((n-e)/2);switch(i){case"XYX":r.set(o*u,l*d,l*h,o*c);break;case"YZY":r.set(l*h,o*u,l*d,o*c);break;case"ZXZ":r.set(l*d,l*h,o*u,o*c);break;case"XZX":r.set(o*u,l*_,l*f,o*c);break;case"YXY":r.set(l*f,o*u,l*_,o*c);break;case"ZYZ":r.set(l*_,l*f,o*u,o*c);break;default:Ke("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function Js(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:case Uint8ClampedArray:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function On(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}const lg={DEG2RAD:io,RAD2DEG:da,generateUUID:bs,clamp:st,euclideanModulo:Tf,mapLinear:X_,inverseLerp:Y_,lerp:ro,damp:Z_,pingpong:$_,smoothstep:J_,smootherstep:K_,randInt:Q_,randFloat:j_,randFloatSpread:eg,seededRandom:tg,degToRad:ng,radToDeg:ig,isPowerOfTwo:rg,ceilPowerOfTwo:sg,floorPowerOfTwo:ag,setQuaternionFromProperEuler:og,normalize:On,denormalize:Js},Td=class Td{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=st(this.x,e.x,t.x),this.y=st(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=st(this.x,e,t),this.y=st(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(st(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(st(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*n-a*i+e.x,this.y=s*i+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Td.prototype.isVector2=!0;let he=Td;class Ea{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,s,a,o){let l=n[i+0],c=n[i+1],u=n[i+2],d=n[i+3],h=s[a+0],f=s[a+1],_=s[a+2],g=s[a+3];if(d!==g||l!==h||c!==f||u!==_){let p=l*h+c*f+u*_+d*g;p<0&&(h=-h,f=-f,_=-_,g=-g,p=-p);let m=1-o;if(p<.9995){const M=Math.acos(p),w=Math.sin(M);m=Math.sin(m*M)/w,o=Math.sin(o*M)/w,l=l*m+h*o,c=c*m+f*o,u=u*m+_*o,d=d*m+g*o}else{l=l*m+h*o,c=c*m+f*o,u=u*m+_*o,d=d*m+g*o;const M=1/Math.sqrt(l*l+c*c+u*u+d*d);l*=M,c*=M,u*=M,d*=M}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=d}static multiplyQuaternionsFlat(e,t,n,i,s,a){const o=n[i],l=n[i+1],c=n[i+2],u=n[i+3],d=s[a],h=s[a+1],f=s[a+2],_=s[a+3];return e[t]=o*_+u*d+l*f-c*h,e[t+1]=l*_+u*h+c*d-o*f,e[t+2]=c*_+u*f+o*h-l*d,e[t+3]=u*_-o*d-l*h-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,i=e._y,s=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(n/2),u=o(i/2),d=o(s/2),h=l(n/2),f=l(i/2),_=l(s/2);switch(a){case"XYZ":this._x=h*u*d+c*f*_,this._y=c*f*d-h*u*_,this._z=c*u*_+h*f*d,this._w=c*u*d-h*f*_;break;case"YXZ":this._x=h*u*d+c*f*_,this._y=c*f*d-h*u*_,this._z=c*u*_-h*f*d,this._w=c*u*d+h*f*_;break;case"ZXY":this._x=h*u*d-c*f*_,this._y=c*f*d+h*u*_,this._z=c*u*_+h*f*d,this._w=c*u*d-h*f*_;break;case"ZYX":this._x=h*u*d-c*f*_,this._y=c*f*d+h*u*_,this._z=c*u*_-h*f*d,this._w=c*u*d+h*f*_;break;case"YZX":this._x=h*u*d+c*f*_,this._y=c*f*d+h*u*_,this._z=c*u*_-h*f*d,this._w=c*u*d-h*f*_;break;case"XZY":this._x=h*u*d-c*f*_,this._y=c*f*d-h*u*_,this._z=c*u*_+h*f*d,this._w=c*u*d+h*f*_;break;default:Ke("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],s=t[8],a=t[1],o=t[5],l=t[9],c=t[2],u=t[6],d=t[10],h=n+o+d;if(h>0){const f=.5/Math.sqrt(h+1);this._w=.25/f,this._x=(u-l)*f,this._y=(s-c)*f,this._z=(a-i)*f}else if(n>o&&n>d){const f=2*Math.sqrt(1+n-o-d);this._w=(u-l)/f,this._x=.25*f,this._y=(i+a)/f,this._z=(s+c)/f}else if(o>d){const f=2*Math.sqrt(1+o-n-d);this._w=(s-c)/f,this._x=(i+a)/f,this._y=.25*f,this._z=(l+u)/f}else{const f=2*Math.sqrt(1+d-n-o);this._w=(a-i)/f,this._x=(s+c)/f,this._y=(l+u)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(st(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,s=e._z,a=e._w,o=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+a*o+i*c-s*l,this._y=i*u+a*l+s*o-n*c,this._z=s*u+a*c+n*l-i*o,this._w=a*u-n*o-i*l-s*c,this._onChangeCallback(),this}slerp(e,t){let n=e._x,i=e._y,s=e._z,a=e._w,o=this.dot(e);o<0&&(n=-n,i=-i,s=-s,a=-a,o=-o);let l=1-t;if(o<.9995){const c=Math.acos(o),u=Math.sin(c);l=Math.sin(l*c)/u,t=Math.sin(t*c)/u,this._x=this._x*l+n*t,this._y=this._y*l+i*t,this._z=this._z*l+s*t,this._w=this._w*l+a*t,this._onChangeCallback()}else this._x=this._x*l+n*t,this._y=this._y*l+i*t,this._z=this._z*l+s*t,this._w=this._w*l+a*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const Ed=class Ed{constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Fd.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Fd.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*i,this.y=s[1]*t+s[4]*n+s[7]*i,this.z=s[2]*t+s[5]*n+s[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=e.elements,a=1/(s[3]*t+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*i+s[12])*a,this.y=(s[1]*t+s[5]*n+s[9]*i+s[13])*a,this.z=(s[2]*t+s[6]*n+s[10]*i+s[14])*a,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,s=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*i-o*n),u=2*(o*t-s*i),d=2*(s*n-a*t);return this.x=t+l*c+a*d-o*u,this.y=n+l*u+o*c-s*d,this.z=i+l*d+s*u-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*i,this.y=s[1]*t+s[5]*n+s[9]*i,this.z=s[2]*t+s[6]*n+s[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=st(this.x,e.x,t.x),this.y=st(this.y,e.y,t.y),this.z=st(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=st(this.x,e,t),this.y=st(this.y,e,t),this.z=st(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(st(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,s=e.z,a=t.x,o=t.y,l=t.z;return this.x=i*l-s*o,this.y=s*a-n*l,this.z=n*o-i*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Zc.copy(this).projectOnVector(e),this.sub(Zc)}reflect(e){return this.sub(Zc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(st(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Ed.prototype.isVector3=!0;let O=Ed;const Zc=new O,Fd=new Ea,wd=class wd{constructor(e,t,n,i,s,a,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,a,o,l,c)}set(e,t,n,i,s,a,o,l,c){const u=this.elements;return u[0]=e,u[1]=i,u[2]=o,u[3]=t,u[4]=s,u[5]=l,u[6]=n,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],u=n[4],d=n[7],h=n[2],f=n[5],_=n[8],g=i[0],p=i[3],m=i[6],M=i[1],w=i[4],v=i[7],y=i[2],T=i[5],A=i[8];return s[0]=a*g+o*M+l*y,s[3]=a*p+o*w+l*T,s[6]=a*m+o*v+l*A,s[1]=c*g+u*M+d*y,s[4]=c*p+u*w+d*T,s[7]=c*m+u*v+d*A,s[2]=h*g+f*M+_*y,s[5]=h*p+f*w+_*T,s[8]=h*m+f*v+_*A,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8];return t*a*u-t*o*c-n*s*u+n*o*l+i*s*c-i*a*l}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],d=u*a-o*c,h=o*l-u*s,f=c*s-a*l,_=t*d+n*h+i*f;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const g=1/_;return e[0]=d*g,e[1]=(i*c-u*n)*g,e[2]=(o*n-i*a)*g,e[3]=h*g,e[4]=(u*t-i*l)*g,e[5]=(i*s-o*t)*g,e[6]=f*g,e[7]=(n*l-c*t)*g,e[8]=(a*t-n*s)*g,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,s,a,o){const l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*a+c*o)+a+e,-i*c,i*l,-i*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return ia("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply($c.makeScale(e,t)),this}rotate(e){return ia("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply($c.makeRotation(-e)),this}translate(e,t){return ia("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply($c.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}};wd.prototype.isMatrix3=!0;let et=wd;const $c=new et,qd=new et().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Bd=new et().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function cg(){const r={enabled:!0,workingColorSpace:ac,spaces:{},convert:function(i,s,a){return this.enabled===!1||s===a||!s||!a||(this.spaces[s].transfer===vt&&(i.r=fr(i.r),i.g=fr(i.g),i.b=fr(i.b)),this.spaces[s].primaries!==this.spaces[a].primaries&&(i.applyMatrix3(this.spaces[s].toXYZ),i.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===vt&&(i.r=ra(i.r),i.g=ra(i.g),i.b=ra(i.b))),i},workingToColorSpace:function(i,s){return this.convert(i,this.workingColorSpace,s)},colorSpaceToWorking:function(i,s){return this.convert(i,s,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===Ar?oc:this.spaces[i].transfer},getToneMappingMode:function(i){return this.spaces[i].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(i,s=this.workingColorSpace){return i.fromArray(this.spaces[s].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,s,a){return i.copy(this.spaces[s].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(i,s){return ia("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),r.workingToColorSpace(i,s)},toWorkingColorSpace:function(i,s){return ia("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),r.colorSpaceToWorking(i,s)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return r.define({[ac]:{primaries:e,whitePoint:n,transfer:oc,toXYZ:qd,fromXYZ:Bd,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:wn},outputColorSpaceConfig:{drawingBufferColorSpace:wn}},[wn]:{primaries:e,whitePoint:n,transfer:vt,toXYZ:qd,fromXYZ:Bd,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:wn}}}),r}const ft=cg();function fr(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function ra(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let Ls;class ug{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Ls===void 0&&(Ls=lc("canvas")),Ls.width=e.width,Ls.height=e.height;const i=Ls.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=Ls}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=lc("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),s=i.data;for(let a=0;a<s.length;a++)s[a]=fr(s[a]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(fr(t[n]/255)*255):t[n]=fr(t[n]);return{data:t,width:e.width,height:e.height}}else return Ke("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let hg=0;class Ef{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:hg++}),this.uuid=bs(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let a=0,o=i.length;a<o;a++)i[a].isDataTexture?s.push(Jc(i[a].image)):s.push(Jc(i[a]))}else s=Jc(i);n.url=s}return t||(e.images[this.uuid]=n),n}}function Jc(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?ug.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(Ke("Texture: Unable to serialize Texture."),{})}let fg=0;const Kc=new O;class Pn extends ys{constructor(e=Pn.DEFAULT_IMAGE,t=Pn.DEFAULT_MAPPING,n=cr,i=cr,s=Rn,a=is,o=Ui,l=li,c=Pn.DEFAULT_ANISOTROPY,u=Ar){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:fg++}),this.uuid=bs(),this.name="",this.source=new Ef(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new he(0,0),this.repeat=new he(1,1),this.center=new he(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new et,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Kc).x}get height(){return this.source.getSize(Kc).y}get depth(){return this.source.getSize(Kc).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const n=e[t];if(n===void 0){Ke(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){Ke(`Texture.setValues(): property '${t}' does not exist.`);continue}i&&n&&i.isVector2&&n.isVector2||i&&n&&i.isVector3&&n.isVector3||i&&n&&i.isMatrix3&&n.isMatrix3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==L0)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Ju:e.x=e.x-Math.floor(e.x);break;case cr:e.x=e.x<0?0:1;break;case Ku:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Ju:e.y=e.y-Math.floor(e.y);break;case cr:e.y=e.y<0?0:1;break;case Ku:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Pn.DEFAULT_IMAGE=null;Pn.DEFAULT_MAPPING=L0;Pn.DEFAULT_ANISOTROPY=1;const Ad=class Ad{constructor(e=0,t=0,n=0,i=1){this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*i+a[12]*s,this.y=a[1]*t+a[5]*n+a[9]*i+a[13]*s,this.z=a[2]*t+a[6]*n+a[10]*i+a[14]*s,this.w=a[3]*t+a[7]*n+a[11]*i+a[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,s;const l=e.elements,c=l[0],u=l[4],d=l[8],h=l[1],f=l[5],_=l[9],g=l[2],p=l[6],m=l[10];if(Math.abs(u-h)<.01&&Math.abs(d-g)<.01&&Math.abs(_-p)<.01){if(Math.abs(u+h)<.1&&Math.abs(d+g)<.1&&Math.abs(_+p)<.1&&Math.abs(c+f+m-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const w=(c+1)/2,v=(f+1)/2,y=(m+1)/2,T=(u+h)/4,A=(d+g)/4,x=(_+p)/4;return w>v&&w>y?w<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(w),i=T/n,s=A/n):v>y?v<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(v),n=T/i,s=x/i):y<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(y),n=A/s,i=x/s),this.set(n,i,s,t),this}let M=Math.sqrt((p-_)*(p-_)+(d-g)*(d-g)+(h-u)*(h-u));return Math.abs(M)<.001&&(M=1),this.x=(p-_)/M,this.y=(d-g)/M,this.z=(h-u)/M,this.w=Math.acos((c+f+m-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=st(this.x,e.x,t.x),this.y=st(this.y,e.y,t.y),this.z=st(this.z,e.z,t.z),this.w=st(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=st(this.x,e,t),this.y=st(this.y,e,t),this.z=st(this.z,e,t),this.w=st(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(st(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Ad.prototype.isVector4=!0;let Bt=Ad;class dg extends ys{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Rn,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new Bt(0,0,e,t),this.scissorTest=!1,this.viewport=new Bt(0,0,e,t),this.textures=[];const i={width:e,height:t,depth:n.depth},s=new Pn(i),a=n.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){const t={minFilter:Rn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,s=this.textures.length;i<s;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=n,this.textures[i].isData3DTexture!==!0&&(this.textures[i].isArrayTexture=this.textures[i].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const i=Object.assign({},e.textures[t].image);this.textures[t].source=new Ef(i)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){const t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Hn extends dg{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class z0 extends Pn{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=_n,this.minFilter=_n,this.wrapR=cr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class pg extends Pn{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=_n,this.minFilter=_n,this.wrapR=cr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}}const wc=class wc{constructor(e,t,n,i,s,a,o,l,c,u,d,h,f,_,g,p){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,a,o,l,c,u,d,h,f,_,g,p)}set(e,t,n,i,s,a,o,l,c,u,d,h,f,_,g,p){const m=this.elements;return m[0]=e,m[4]=t,m[8]=n,m[12]=i,m[1]=s,m[5]=a,m[9]=o,m[13]=l,m[2]=c,m[6]=u,m[10]=d,m[14]=h,m[3]=f,m[7]=_,m[11]=g,m[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new wc().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const t=this.elements,n=e.elements,i=1/Is.setFromMatrixColumn(e,0).length(),s=1/Is.setFromMatrixColumn(e,1).length(),a=1/Is.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,s=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(i),c=Math.sin(i),u=Math.cos(s),d=Math.sin(s);if(e.order==="XYZ"){const h=a*u,f=a*d,_=o*u,g=o*d;t[0]=l*u,t[4]=-l*d,t[8]=c,t[1]=f+_*c,t[5]=h-g*c,t[9]=-o*l,t[2]=g-h*c,t[6]=_+f*c,t[10]=a*l}else if(e.order==="YXZ"){const h=l*u,f=l*d,_=c*u,g=c*d;t[0]=h+g*o,t[4]=_*o-f,t[8]=a*c,t[1]=a*d,t[5]=a*u,t[9]=-o,t[2]=f*o-_,t[6]=g+h*o,t[10]=a*l}else if(e.order==="ZXY"){const h=l*u,f=l*d,_=c*u,g=c*d;t[0]=h-g*o,t[4]=-a*d,t[8]=_+f*o,t[1]=f+_*o,t[5]=a*u,t[9]=g-h*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){const h=a*u,f=a*d,_=o*u,g=o*d;t[0]=l*u,t[4]=_*c-f,t[8]=h*c+g,t[1]=l*d,t[5]=g*c+h,t[9]=f*c-_,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){const h=a*l,f=a*c,_=o*l,g=o*c;t[0]=l*u,t[4]=g-h*d,t[8]=_*d+f,t[1]=d,t[5]=a*u,t[9]=-o*u,t[2]=-c*u,t[6]=f*d+_,t[10]=h-g*d}else if(e.order==="XZY"){const h=a*l,f=a*c,_=o*l,g=o*c;t[0]=l*u,t[4]=-d,t[8]=c*u,t[1]=h*d+g,t[5]=a*u,t[9]=f*d-_,t[2]=_*d-f,t[6]=o*u,t[10]=g*d+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(mg,e,_g)}lookAt(e,t,n){const i=this.elements;return ti.subVectors(e,t),ti.lengthSq()===0&&(ti.z=1),ti.normalize(),Sr.crossVectors(n,ti),Sr.lengthSq()===0&&(Math.abs(n.z)===1?ti.x+=1e-4:ti.z+=1e-4,ti.normalize(),Sr.crossVectors(n,ti)),Sr.normalize(),$o.crossVectors(ti,Sr),i[0]=Sr.x,i[4]=$o.x,i[8]=ti.x,i[1]=Sr.y,i[5]=$o.y,i[9]=ti.y,i[2]=Sr.z,i[6]=$o.z,i[10]=ti.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],u=n[1],d=n[5],h=n[9],f=n[13],_=n[2],g=n[6],p=n[10],m=n[14],M=n[3],w=n[7],v=n[11],y=n[15],T=i[0],A=i[4],x=i[8],b=i[12],C=i[1],L=i[5],D=i[9],k=i[13],I=i[2],q=i[6],X=i[10],z=i[14],j=i[3],Y=i[7],P=i[11],K=i[15];return s[0]=a*T+o*C+l*I+c*j,s[4]=a*A+o*L+l*q+c*Y,s[8]=a*x+o*D+l*X+c*P,s[12]=a*b+o*k+l*z+c*K,s[1]=u*T+d*C+h*I+f*j,s[5]=u*A+d*L+h*q+f*Y,s[9]=u*x+d*D+h*X+f*P,s[13]=u*b+d*k+h*z+f*K,s[2]=_*T+g*C+p*I+m*j,s[6]=_*A+g*L+p*q+m*Y,s[10]=_*x+g*D+p*X+m*P,s[14]=_*b+g*k+p*z+m*K,s[3]=M*T+w*C+v*I+y*j,s[7]=M*A+w*L+v*q+y*Y,s[11]=M*x+w*D+v*X+y*P,s[15]=M*b+w*k+v*z+y*K,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],s=e[12],a=e[1],o=e[5],l=e[9],c=e[13],u=e[2],d=e[6],h=e[10],f=e[14],_=e[3],g=e[7],p=e[11],m=e[15],M=l*f-c*h,w=o*f-c*d,v=o*h-l*d,y=a*f-c*u,T=a*h-l*u,A=a*d-o*u;return t*(g*M-p*w+m*v)-n*(_*M-p*y+m*T)+i*(_*w-g*y+m*A)-s*(_*v-g*T+p*A)}determinantAffine(){const e=this.elements,t=e[0],n=e[4],i=e[8],s=e[1],a=e[5],o=e[9],l=e[2],c=e[6],u=e[10];return t*(a*u-o*c)-n*(s*u-o*l)+i*(s*c-a*l)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],d=e[9],h=e[10],f=e[11],_=e[12],g=e[13],p=e[14],m=e[15],M=t*o-n*a,w=t*l-i*a,v=t*c-s*a,y=n*l-i*o,T=n*c-s*o,A=i*c-s*l,x=u*g-d*_,b=u*p-h*_,C=u*m-f*_,L=d*p-h*g,D=d*m-f*g,k=h*m-f*p,I=M*k-w*D+v*L+y*C-T*b+A*x;if(I===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const q=1/I;return e[0]=(o*k-l*D+c*L)*q,e[1]=(i*D-n*k-s*L)*q,e[2]=(g*A-p*T+m*y)*q,e[3]=(h*T-d*A-f*y)*q,e[4]=(l*C-a*k-c*b)*q,e[5]=(t*k-i*C+s*b)*q,e[6]=(p*v-_*A-m*w)*q,e[7]=(u*A-h*v+f*w)*q,e[8]=(a*D-o*C+c*x)*q,e[9]=(n*C-t*D-s*x)*q,e[10]=(_*T-g*v+m*M)*q,e[11]=(d*v-u*T-f*M)*q,e[12]=(o*b-a*L-l*x)*q,e[13]=(t*L-n*b+i*x)*q,e[14]=(g*w-_*y-p*M)*q,e[15]=(u*y-d*w+h*M)*q,this}scale(e){const t=this.elements,n=e.x,i=e.y,s=e.z;return t[0]*=n,t[4]*=i,t[8]*=s,t[1]*=n,t[5]*=i,t[9]*=s,t[2]*=n,t[6]*=i,t[10]*=s,t[3]*=n,t[7]*=i,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),s=1-n,a=e.x,o=e.y,l=e.z,c=s*a,u=s*o;return this.set(c*a+n,c*o-i*l,c*l+i*o,0,c*o+i*l,u*o+n,u*l-i*a,0,c*l-i*o,u*l+i*a,s*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,s,a){return this.set(1,n,s,0,e,1,a,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,s=t._x,a=t._y,o=t._z,l=t._w,c=s+s,u=a+a,d=o+o,h=s*c,f=s*u,_=s*d,g=a*u,p=a*d,m=o*d,M=l*c,w=l*u,v=l*d,y=n.x,T=n.y,A=n.z;return i[0]=(1-(g+m))*y,i[1]=(f+v)*y,i[2]=(_-w)*y,i[3]=0,i[4]=(f-v)*T,i[5]=(1-(h+m))*T,i[6]=(p+M)*T,i[7]=0,i[8]=(_+w)*A,i[9]=(p-M)*A,i[10]=(1-(h+g))*A,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;e.x=i[12],e.y=i[13],e.z=i[14];const s=this.determinantAffine();if(s===0)return n.set(1,1,1),t.identity(),this;let a=Is.set(i[0],i[1],i[2]).length();const o=Is.set(i[4],i[5],i[6]).length(),l=Is.set(i[8],i[9],i[10]).length();s<0&&(a=-a),Ci.copy(this);const c=1/a,u=1/o,d=1/l;return Ci.elements[0]*=c,Ci.elements[1]*=c,Ci.elements[2]*=c,Ci.elements[4]*=u,Ci.elements[5]*=u,Ci.elements[6]*=u,Ci.elements[8]*=d,Ci.elements[9]*=d,Ci.elements[10]*=d,t.setFromRotationMatrix(Ci),n.x=a,n.y=o,n.z=l,this}makePerspective(e,t,n,i,s,a,o=Hi,l=!1){const c=this.elements,u=2*s/(t-e),d=2*s/(n-i),h=(t+e)/(t-e),f=(n+i)/(n-i);let _,g;if(l)_=s/(a-s),g=a*s/(a-s);else if(o===Hi)_=-(a+s)/(a-s),g=-2*a*s/(a-s);else if(o===wo)_=-a/(a-s),g=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=h,c[12]=0,c[1]=0,c[5]=d,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=_,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,i,s,a,o=Hi,l=!1){const c=this.elements,u=2/(t-e),d=2/(n-i),h=-(t+e)/(t-e),f=-(n+i)/(n-i);let _,g;if(l)_=1/(a-s),g=a/(a-s);else if(o===Hi)_=-2/(a-s),g=-(a+s)/(a-s);else if(o===wo)_=-1/(a-s),g=-s/(a-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=0,c[12]=h,c[1]=0,c[5]=d,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=_,c[14]=g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}};wc.prototype.isMatrix4=!0;let bt=wc;const Is=new O,Ci=new bt,mg=new O(0,0,0),_g=new O(1,1,1),Sr=new O,$o=new O,ti=new O,zd=new bt,kd=new Ea;class qr{constructor(e=0,t=0,n=0,i=qr.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,s=i[0],a=i[4],o=i[8],l=i[1],c=i[5],u=i[9],d=i[2],h=i[6],f=i[10];switch(t){case"XYZ":this._y=Math.asin(st(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,f),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-st(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin(st(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-d,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-st(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(h,f),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(st(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-st(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-u,f),this._y=0);break;default:Ke("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return zd.makeRotationFromQuaternion(e),this.setFromRotationMatrix(zd,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return kd.setFromEuler(this),this.setFromQuaternion(kd,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}qr.DEFAULT_ORDER="XYZ";class k0{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let gg=0;const Gd=new O,Ns=new Ea,tr=new bt,Jo=new O,Ia=new O,xg=new O,vg=new Ea,Vd=new O(1,0,0),Hd=new O(0,1,0),Wd=new O(0,0,1),Xd={type:"added"},Sg={type:"removed"},Us={type:"childadded",child:null},Qc={type:"childremoved",child:null};class Gt extends ys{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:gg++}),this.uuid=bs(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Gt.DEFAULT_UP.clone();const e=new O,t=new qr,n=new Ea,i=new O(1,1,1);function s(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new bt},normalMatrix:{value:new et}}),this.matrix=new bt,this.matrixWorld=new bt,this.matrixAutoUpdate=Gt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Gt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new k0,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ns.setFromAxisAngle(e,t),this.quaternion.multiply(Ns),this}rotateOnWorldAxis(e,t){return Ns.setFromAxisAngle(e,t),this.quaternion.premultiply(Ns),this}rotateX(e){return this.rotateOnAxis(Vd,e)}rotateY(e){return this.rotateOnAxis(Hd,e)}rotateZ(e){return this.rotateOnAxis(Wd,e)}translateOnAxis(e,t){return Gd.copy(e).applyQuaternion(this.quaternion),this.position.add(Gd.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Vd,e)}translateY(e){return this.translateOnAxis(Hd,e)}translateZ(e){return this.translateOnAxis(Wd,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(tr.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Jo.copy(e):Jo.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),Ia.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?tr.lookAt(Ia,Jo,this.up):tr.lookAt(Jo,Ia,this.up),this.quaternion.setFromRotationMatrix(tr),i&&(tr.extractRotation(i.matrixWorld),Ns.setFromRotationMatrix(tr),this.quaternion.premultiply(Ns.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(gt("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Xd),Us.child=e,this.dispatchEvent(Us),Us.child=null):gt("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Sg),Qc.child=e,this.dispatchEvent(Qc),Qc.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),tr.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),tr.multiply(e.parent.matrixWorld)),e.applyMatrix4(tr),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Xd),Us.child=e,this.dispatchEvent(Us),Us.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const i=this.children;for(let s=0,a=i.length;s<a;s++)i[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ia,e,xg),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ia,vg,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,n=e.y,i=e.z,s=this.matrix.elements;s[12]+=t-s[0]*t-s[4]*n-s[8]*i,s[13]+=n-s[1]*t-s[5]*n-s[9]*i,s[14]+=i-s[2]*t-s[6]*n-s[10]*i}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){const s=this.children;for(let a=0,o=s.length;a<o;a++)s[a].updateWorldMatrix(!1,!0,n)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,i.name=this.name,i.castShadow=this.castShadow,i.receiveShadow=this.receiveShadow,i.visible=this.visible,i.frustumCulled=this.frustumCulled,i.renderOrder=this.renderOrder,i.static=this.static,i.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.pivot!==null&&(i.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(i.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(i.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),i.instanceInfo=this._instanceInfo.map(o=>({...o})),i.availableInstanceIds=this._availableInstanceIds.slice(),i.availableGeometryIds=this._availableGeometryIds.slice(),i.nextIndexStart=this._nextIndexStart,i.nextVertexStart=this._nextVertexStart,i.geometryCount=this._geometryCount,i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.matricesTexture=this._matricesTexture.toJSON(e),i.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(i.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(i.boundingBox=this.boundingBox.toJSON()));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const d=l[c];s(e.shapes,d)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(e.materials,this.material[l]));i.material=o}else i.material=s(e.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];i.animations.push(s(e.animations,l))}}if(t){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),u=a(e.images),d=a(e.shapes),h=a(e.skeletons),f=a(e.animations),_=a(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),d.length>0&&(n.shapes=d),h.length>0&&(n.skeletons=h),f.length>0&&(n.animations=f),_.length>0&&(n.nodes=_)}return n.object=i,n;function a(o){const l=[];for(const c in o){const u=o[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}}Gt.DEFAULT_UP=new O(0,1,0);Gt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Gt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class ur extends Gt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Mg={type:"move"};class jc{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ur,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ur,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new O,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new O),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ur,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new O,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new O,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,s=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const g of e.hand.values()){const p=t.getJointPose(g,n),m=this._getHandJoint(c,g);p!==null&&(m.matrix.fromArray(p.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=p.radius),m.visible=p!==null}const u=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],h=u.position.distanceTo(d.position),f=.02,_=.005;c.inputState.pinching&&h>f+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&h<=f-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Mg)))}return o!==null&&(o.visible=i!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new ur;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const G0={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Mr={h:0,s:0,l:0},Ko={h:0,s:0,l:0};function eu(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+(e-r)*6*t:t<1/2?e:t<2/3?r+(e-r)*6*(2/3-t):r}class Je{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=wn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,ft.colorSpaceToWorking(this,t),this}setRGB(e,t,n,i=ft.workingColorSpace){return this.r=e,this.g=t,this.b=n,ft.colorSpaceToWorking(this,i),this}setHSL(e,t,n,i=ft.workingColorSpace){if(e=Tf(e,1),t=st(t,0,1),n=st(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,a=2*n-s;this.r=eu(a,s,e+1/3),this.g=eu(a,s,e),this.b=eu(a,s,e-1/3)}return ft.colorSpaceToWorking(this,i),this}setStyle(e,t=wn){function n(s){s!==void 0&&parseFloat(s)<1&&Ke("Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=i[1],o=i[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:Ke("Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=i[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);Ke("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=wn){const n=G0[e.toLowerCase()];return n!==void 0?this.setHex(n,t):Ke("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=fr(e.r),this.g=fr(e.g),this.b=fr(e.b),this}copyLinearToSRGB(e){return this.r=ra(e.r),this.g=ra(e.g),this.b=ra(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=wn){return ft.workingToColorSpace(bn.copy(this),e),Math.round(st(bn.r*255,0,255))*65536+Math.round(st(bn.g*255,0,255))*256+Math.round(st(bn.b*255,0,255))}getHexString(e=wn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=ft.workingColorSpace){ft.workingToColorSpace(bn.copy(this),t);const n=bn.r,i=bn.g,s=bn.b,a=Math.max(n,i,s),o=Math.min(n,i,s);let l,c;const u=(o+a)/2;if(o===a)l=0,c=0;else{const d=a-o;switch(c=u<=.5?d/(a+o):d/(2-a-o),a){case n:l=(i-s)/d+(i<s?6:0);break;case i:l=(s-n)/d+2;break;case s:l=(n-i)/d+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=ft.workingColorSpace){return ft.workingToColorSpace(bn.copy(this),t),e.r=bn.r,e.g=bn.g,e.b=bn.b,e}getStyle(e=wn){ft.workingToColorSpace(bn.copy(this),e);const t=bn.r,n=bn.g,i=bn.b;return e!==wn?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(Mr),this.setHSL(Mr.h+e,Mr.s+t,Mr.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Mr),e.getHSL(Ko);const n=ro(Mr.h,Ko.h,t),i=ro(Mr.s,Ko.s,t),s=ro(Mr.l,Ko.l,t);return this.setHSL(n,i,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,i=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*i,this.g=s[1]*t+s[4]*n+s[7]*i,this.b=s[2]*t+s[5]*n+s[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const bn=new Je;Je.NAMES=G0;class wf{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new Je(e),this.density=t}clone(){return new wf(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class yg extends Gt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new qr,this.environmentIntensity=1,this.environmentRotation=new qr,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}}const Ri=new O,nr=new O,tu=new O,ir=new O,Os=new O,Fs=new O,Yd=new O,nu=new O,iu=new O,ru=new O,su=new Bt,au=new Bt,ou=new Bt;class Li{constructor(e=new O,t=new O,n=new O){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),Ri.subVectors(e,t),i.cross(Ri);const s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(e,t,n,i,s){Ri.subVectors(i,t),nr.subVectors(n,t),tu.subVectors(e,t);const a=Ri.dot(Ri),o=Ri.dot(nr),l=Ri.dot(tu),c=nr.dot(nr),u=nr.dot(tu),d=a*c-o*o;if(d===0)return s.set(0,0,0),null;const h=1/d,f=(c*l-o*u)*h,_=(a*u-o*l)*h;return s.set(1-f-_,_,f)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,ir)===null?!1:ir.x>=0&&ir.y>=0&&ir.x+ir.y<=1}static getInterpolation(e,t,n,i,s,a,o,l){return this.getBarycoord(e,t,n,i,ir)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,ir.x),l.addScaledVector(a,ir.y),l.addScaledVector(o,ir.z),l)}static getInterpolatedAttribute(e,t,n,i,s,a){return su.setScalar(0),au.setScalar(0),ou.setScalar(0),su.fromBufferAttribute(e,t),au.fromBufferAttribute(e,n),ou.fromBufferAttribute(e,i),a.setScalar(0),a.addScaledVector(su,s.x),a.addScaledVector(au,s.y),a.addScaledVector(ou,s.z),a}static isFrontFacing(e,t,n,i){return Ri.subVectors(n,t),nr.subVectors(e,t),Ri.cross(nr).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Ri.subVectors(this.c,this.b),nr.subVectors(this.a,this.b),Ri.cross(nr).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Li.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Li.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,i,s){return Li.getInterpolation(e,this.a,this.b,this.c,t,n,i,s)}containsPoint(e){return Li.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Li.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,s=this.c;let a,o;Os.subVectors(i,n),Fs.subVectors(s,n),nu.subVectors(e,n);const l=Os.dot(nu),c=Fs.dot(nu);if(l<=0&&c<=0)return t.copy(n);iu.subVectors(e,i);const u=Os.dot(iu),d=Fs.dot(iu);if(u>=0&&d<=u)return t.copy(i);const h=l*d-u*c;if(h<=0&&l>=0&&u<=0)return a=l/(l-u),t.copy(n).addScaledVector(Os,a);ru.subVectors(e,s);const f=Os.dot(ru),_=Fs.dot(ru);if(_>=0&&f<=_)return t.copy(s);const g=f*c-l*_;if(g<=0&&c>=0&&_<=0)return o=c/(c-_),t.copy(n).addScaledVector(Fs,o);const p=u*_-f*d;if(p<=0&&d-u>=0&&f-_>=0)return Yd.subVectors(s,i),o=(d-u)/(d-u+(f-_)),t.copy(i).addScaledVector(Yd,o);const m=1/(p+g+h);return a=g*m,o=h*m,t.copy(n).addScaledVector(Os,a).addScaledVector(Fs,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class Ts{constructor(e=new O(1/0,1/0,1/0),t=new O(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Pi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Pi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Pi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Pi):Pi.fromBufferAttribute(s,a),Pi.applyMatrix4(e.matrixWorld),this.expandByPoint(Pi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Qo.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Qo.copy(n.boundingBox)),Qo.applyMatrix4(e.matrixWorld),this.union(Qo)}const i=e.children;for(let s=0,a=i.length;s<a;s++)this.expandByObject(i[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Pi),Pi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Na),jo.subVectors(this.max,Na),qs.subVectors(e.a,Na),Bs.subVectors(e.b,Na),zs.subVectors(e.c,Na),yr.subVectors(Bs,qs),br.subVectors(zs,Bs),Yr.subVectors(qs,zs);let t=[0,-yr.z,yr.y,0,-br.z,br.y,0,-Yr.z,Yr.y,yr.z,0,-yr.x,br.z,0,-br.x,Yr.z,0,-Yr.x,-yr.y,yr.x,0,-br.y,br.x,0,-Yr.y,Yr.x,0];return!lu(t,qs,Bs,zs,jo)||(t=[1,0,0,0,1,0,0,0,1],!lu(t,qs,Bs,zs,jo))?!1:(el.crossVectors(yr,br),t=[el.x,el.y,el.z],lu(t,qs,Bs,zs,jo))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Pi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Pi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(rr[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),rr[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),rr[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),rr[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),rr[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),rr[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),rr[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),rr[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(rr),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const rr=[new O,new O,new O,new O,new O,new O,new O,new O],Pi=new O,Qo=new Ts,qs=new O,Bs=new O,zs=new O,yr=new O,br=new O,Yr=new O,Na=new O,jo=new O,el=new O,Zr=new O;function lu(r,e,t,n,i){for(let s=0,a=r.length-3;s<=a;s+=3){Zr.fromArray(r,s);const o=i.x*Math.abs(Zr.x)+i.y*Math.abs(Zr.y)+i.z*Math.abs(Zr.z),l=e.dot(Zr),c=t.dot(Zr),u=n.dot(Zr);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}const jt=new O,tl=new he;let bg=0;class Ei extends ys{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:bg++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=z_,this.updateRanges=[],this.gpuType=Ni,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)tl.fromBufferAttribute(this,t),tl.applyMatrix3(e),this.setXY(t,tl.x,tl.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)jt.fromBufferAttribute(this,t),jt.applyMatrix3(e),this.setXYZ(t,jt.x,jt.y,jt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)jt.fromBufferAttribute(this,t),jt.applyMatrix4(e),this.setXYZ(t,jt.x,jt.y,jt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)jt.fromBufferAttribute(this,t),jt.applyNormalMatrix(e),this.setXYZ(t,jt.x,jt.y,jt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)jt.fromBufferAttribute(this,t),jt.transformDirection(e),this.setXYZ(t,jt.x,jt.y,jt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Js(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=On(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Js(t,this.array)),t}setX(e,t){return this.normalized&&(t=On(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Js(t,this.array)),t}setY(e,t){return this.normalized&&(t=On(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Js(t,this.array)),t}setZ(e,t){return this.normalized&&(t=On(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Js(t,this.array)),t}setW(e,t){return this.normalized&&(t=On(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=On(t,this.array),n=On(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=On(t,this.array),n=On(n,this.array),i=On(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e*=this.itemSize,this.normalized&&(t=On(t,this.array),n=On(n,this.array),i=On(i,this.array),s=On(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}}class V0 extends Ei{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class H0 extends Ei{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class mt extends Ei{constructor(e,t,n){super(new Float32Array(e),t,n)}}const Tg=new Ts,Ua=new O,cu=new O;class Es{constructor(e=new O,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):Tg.setFromPoints(e).getCenter(n);let i=0;for(let s=0,a=e.length;s<a;s++)i=Math.max(i,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ua.subVectors(e,this.center);const t=Ua.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(Ua,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(cu.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ua.copy(e.center).add(cu)),this.expandByPoint(Ua.copy(e.center).sub(cu))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let Eg=0;const vi=new bt,uu=new Gt,ks=new O,ni=new Ts,Oa=new Ts,un=new O;class Vt extends ys{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Eg++}),this.uuid=bs(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(G_(e)?H0:V0)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new et().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return vi.makeRotationFromQuaternion(e),this.applyMatrix4(vi),this}rotateX(e){return vi.makeRotationX(e),this.applyMatrix4(vi),this}rotateY(e){return vi.makeRotationY(e),this.applyMatrix4(vi),this}rotateZ(e){return vi.makeRotationZ(e),this.applyMatrix4(vi),this}translate(e,t,n){return vi.makeTranslation(e,t,n),this.applyMatrix4(vi),this}scale(e,t,n){return vi.makeScale(e,t,n),this.applyMatrix4(vi),this}lookAt(e){return uu.lookAt(e),uu.updateMatrix(),this.applyMatrix4(uu.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ks).negate(),this.translate(ks.x,ks.y,ks.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let i=0,s=e.length;i<s;i++){const a=e[i];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new mt(n,3))}else{const n=Math.min(e.length,t.count);for(let i=0;i<n;i++){const s=e[i];t.setXYZ(i,s.x,s.y,s.z||0)}e.length>t.count&&Ke("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ts);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){gt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new O(-1/0,-1/0,-1/0),new O(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const s=t[n];ni.setFromBufferAttribute(s),this.morphTargetsRelative?(un.addVectors(this.boundingBox.min,ni.min),this.boundingBox.expandByPoint(un),un.addVectors(this.boundingBox.max,ni.max),this.boundingBox.expandByPoint(un)):(this.boundingBox.expandByPoint(ni.min),this.boundingBox.expandByPoint(ni.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&gt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Es);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){gt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new O,1/0);return}if(e){const n=this.boundingSphere.center;if(ni.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){const o=t[s];Oa.setFromBufferAttribute(o),this.morphTargetsRelative?(un.addVectors(ni.min,Oa.min),ni.expandByPoint(un),un.addVectors(ni.max,Oa.max),ni.expandByPoint(un)):(ni.expandByPoint(Oa.min),ni.expandByPoint(Oa.max))}ni.getCenter(n);let i=0;for(let s=0,a=e.count;s<a;s++)un.fromBufferAttribute(e,s),i=Math.max(i,n.distanceToSquared(un));if(t)for(let s=0,a=t.length;s<a;s++){const o=t[s],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)un.fromBufferAttribute(o,c),l&&(ks.fromBufferAttribute(e,c),un.add(ks)),i=Math.max(i,n.distanceToSquared(un))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&gt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){gt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,i=t.normal,s=t.uv;let a=this.getAttribute("tangent");(a===void 0||a.count!==n.count)&&(a=new Ei(new Float32Array(4*n.count),4),this.setAttribute("tangent",a));const o=[],l=[];for(let x=0;x<n.count;x++)o[x]=new O,l[x]=new O;const c=new O,u=new O,d=new O,h=new he,f=new he,_=new he,g=new O,p=new O;function m(x,b,C){c.fromBufferAttribute(n,x),u.fromBufferAttribute(n,b),d.fromBufferAttribute(n,C),h.fromBufferAttribute(s,x),f.fromBufferAttribute(s,b),_.fromBufferAttribute(s,C),u.sub(c),d.sub(c),f.sub(h),_.sub(h);const L=1/(f.x*_.y-_.x*f.y);isFinite(L)&&(g.copy(u).multiplyScalar(_.y).addScaledVector(d,-f.y).multiplyScalar(L),p.copy(d).multiplyScalar(f.x).addScaledVector(u,-_.x).multiplyScalar(L),o[x].add(g),o[b].add(g),o[C].add(g),l[x].add(p),l[b].add(p),l[C].add(p))}let M=this.groups;M.length===0&&(M=[{start:0,count:e.count}]);for(let x=0,b=M.length;x<b;++x){const C=M[x],L=C.start,D=C.count;for(let k=L,I=L+D;k<I;k+=3)m(e.getX(k+0),e.getX(k+1),e.getX(k+2))}const w=new O,v=new O,y=new O,T=new O;function A(x){y.fromBufferAttribute(i,x),T.copy(y);const b=o[x];w.copy(b),w.sub(y.multiplyScalar(y.dot(b))).normalize(),v.crossVectors(T,b);const L=v.dot(l[x])<0?-1:1;a.setXYZW(x,w.x,w.y,w.z,L)}for(let x=0,b=M.length;x<b;++x){const C=M[x],L=C.start,D=C.count;for(let k=L,I=L+D;k<I;k+=3)A(e.getX(k+0)),A(e.getX(k+1)),A(e.getX(k+2))}this._transformed=!0}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==t.count)n=new Ei(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let h=0,f=n.count;h<f;h++)n.setXYZ(h,0,0,0);const i=new O,s=new O,a=new O,o=new O,l=new O,c=new O,u=new O,d=new O;if(e)for(let h=0,f=e.count;h<f;h+=3){const _=e.getX(h+0),g=e.getX(h+1),p=e.getX(h+2);i.fromBufferAttribute(t,_),s.fromBufferAttribute(t,g),a.fromBufferAttribute(t,p),u.subVectors(a,s),d.subVectors(i,s),u.cross(d),o.fromBufferAttribute(n,_),l.fromBufferAttribute(n,g),c.fromBufferAttribute(n,p),o.add(u),l.add(u),c.add(u),n.setXYZ(_,o.x,o.y,o.z),n.setXYZ(g,l.x,l.y,l.z),n.setXYZ(p,c.x,c.y,c.z)}else for(let h=0,f=t.count;h<f;h+=3)i.fromBufferAttribute(t,h+0),s.fromBufferAttribute(t,h+1),a.fromBufferAttribute(t,h+2),u.subVectors(a,s),d.subVectors(i,s),u.cross(d),n.setXYZ(h+0,u.x,u.y,u.z),n.setXYZ(h+1,u.x,u.y,u.z),n.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)un.fromBufferAttribute(e,t),un.normalize(),e.setXYZ(t,un.x,un.y,un.z)}toNonIndexed(){function e(o,l){const c=o.array,u=o.itemSize,d=o.normalized,h=new c.constructor(l.length*u);let f=0,_=0;for(let g=0,p=l.length;g<p;g++){o.isInterleavedBufferAttribute?f=l[g]*o.data.stride+o.offset:f=l[g]*u;for(let m=0;m<u;m++)h[_++]=c[f++]}return new Ei(h,u,d)}if(this.index===null)return Ke("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Vt,n=this.index.array,i=this.attributes;for(const o in i){const l=i[o],c=e(l,n);t.setAttribute(o,c)}const s=this.morphAttributes;for(const o in s){const l=[],c=s[o];for(let u=0,d=c.length;u<d;u++){const h=c[u],f=e(h,n);l.push(f)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const i={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let d=0,h=c.length;d<h;d++){const f=c[d];u.push(f.toJSON(e.data))}u.length>0&&(i[l]=u,s=!0)}s&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone());const i=e.attributes;for(const c in i){const u=i[c];this.setAttribute(c,u.clone(t))}const s=e.morphAttributes;for(const c in s){const u=[],d=s[c];for(let h=0,f=d.length;h<f;h++)u.push(d[h].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,u=a.length;c<u;c++){const d=a[c];this.addGroup(d.start,d.count,d.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}const hu=new O,wg=new O,Ag=new et;class wr{constructor(e=new O(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=hu.subVectors(n,t).cross(wg.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){const i=e.delta(hu),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const a=-(e.start.dot(this.normal)+this.constant)/s;return n===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(i,a)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||Ag.getNormalMatrix(e),i=this.coplanarPoint(hu).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}}let Cg=0;class ws extends ys{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Cg++}),this.uuid=bs(),this.name="",this.type="Material",this.blending=no,this.side=ps,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=R0,this.blendDst=P0,this.blendEquation=$s,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Je(0,0,0),this.blendAlpha=0,this.depthFunc=bo,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=I_,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Yc,this.stencilZFail=Yc,this.stencilZPass=Yc,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){Ke(`Material: parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){Ke(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector2&&n&&n.isVector2||i&&i.isEuler&&n&&n.isEuler||i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(s=>s.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(t){const s=i(e.textures),a=i(e.images);s.length>0&&(n.textures=s),a.length>0&&(n.images=a)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new Je().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(n=>new wr().fromJSON(n))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let n=e.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new he().fromArray(n)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new he().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const sr=new O,fu=new O,nl=new O,il=new O;class Af{constructor(e=new O,t=new O(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,sr)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=sr.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(sr.copy(this.origin).addScaledVector(this.direction,t),sr.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){fu.copy(e).add(t).multiplyScalar(.5),nl.copy(t).sub(e).normalize(),il.copy(this.origin).sub(fu);const s=e.distanceTo(t)*.5,a=-this.direction.dot(nl),o=il.dot(this.direction),l=-il.dot(nl),c=il.lengthSq(),u=Math.abs(1-a*a);let d,h,f,_;if(u>0)if(d=a*l-o,h=a*o-l,_=s*u,d>=0)if(h>=-_)if(h<=_){const g=1/u;d*=g,h*=g,f=d*(d+a*h+2*o)+h*(a*d+h+2*l)+c}else h=s,d=Math.max(0,-(a*h+o)),f=-d*d+h*(h+2*l)+c;else h=-s,d=Math.max(0,-(a*h+o)),f=-d*d+h*(h+2*l)+c;else h<=-_?(d=Math.max(0,-(-a*s+o)),h=d>0?-s:Math.min(Math.max(-s,-l),s),f=-d*d+h*(h+2*l)+c):h<=_?(d=0,h=Math.min(Math.max(-s,-l),s),f=h*(h+2*l)+c):(d=Math.max(0,-(a*s+o)),h=d>0?s:Math.min(Math.max(-s,-l),s),f=-d*d+h*(h+2*l)+c);else h=a>0?-s:s,d=Math.max(0,-(a*h+o)),f=-d*d+h*(h+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,d),i&&i.copy(fu).addScaledVector(nl,h),f}intersectSphere(e,t){if(e.radius<0)return null;sr.subVectors(e.center,this.origin);const n=sr.dot(this.direction),i=sr.dot(sr)-n*n,s=e.radius*e.radius;if(i>s)return null;const a=Math.sqrt(s-i),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,s,a,o,l;const c=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,h=this.origin;return c>=0?(n=(e.min.x-h.x)*c,i=(e.max.x-h.x)*c):(n=(e.max.x-h.x)*c,i=(e.min.x-h.x)*c),u>=0?(s=(e.min.y-h.y)*u,a=(e.max.y-h.y)*u):(s=(e.max.y-h.y)*u,a=(e.min.y-h.y)*u),n>a||s>i||((s>n||isNaN(n))&&(n=s),(a<i||isNaN(i))&&(i=a),d>=0?(o=(e.min.z-h.z)*d,l=(e.max.z-h.z)*d):(o=(e.max.z-h.z)*d,l=(e.min.z-h.z)*d),n>l||o>i)||((o>n||n!==n)&&(n=o),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,sr)!==null}intersectTriangle(e,t,n,i,s){const a=this.origin,o=this.direction,l=o.x,c=o.y,u=o.z,d=e.x-a.x,h=e.y-a.y,f=e.z-a.z,_=t.x-a.x,g=t.y-a.y,p=t.z-a.z,m=n.x-a.x,M=n.y-a.y,w=n.z-a.z,v=Math.abs(l),y=Math.abs(c),T=Math.abs(u);let A,x,b,C,L,D,k,I,q,X,z,j;if(v>=y&&v>=T?(b=l,D=d,q=_,j=m,l>=0?(A=c,x=u,C=h,L=f,k=g,I=p,X=M,z=w):(A=u,x=c,C=f,L=h,k=p,I=g,X=w,z=M)):y>=T?(b=c,D=h,q=g,j=M,c>=0?(A=u,x=l,C=f,L=d,k=p,I=_,X=w,z=m):(A=l,x=u,C=d,L=f,k=_,I=p,X=m,z=w)):(b=u,D=f,q=p,j=w,u>=0?(A=l,x=c,C=d,L=h,k=_,I=g,X=m,z=M):(A=c,x=l,C=h,L=d,k=g,I=_,X=M,z=m)),b===0)return null;const Y=A/b,P=x/b,K=1/b,we=C-Y*D,Te=L-P*D,Ye=k-Y*q,We=I-P*q,Qe=X-Y*j,$=z-P*j,te=Qe*We-$*Ye,me=we*$-Te*Qe,Ge=Ye*Te-We*we;if(i){if(te<0||me<0||Ge<0)return null}else if((te<0||me<0||Ge<0)&&(te>0||me>0||Ge>0))return null;const xe=te+me+Ge;if(xe===0)return null;const Le=K*(te*D+me*q+Ge*j);return(xe>0?Le<0:Le>0)?null:this.at(Le/xe,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Hr extends ws{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Je(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new qr,this.combine=D0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Zd=new bt,$r=new Af,rl=new Es,$d=new O,sl=new O,al=new O,ol=new O,du=new O,ll=new O,Jd=new O,cl=new O;class tt extends Gt{constructor(e=new Vt,t=new Hr){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=i.length;s<a;s++){const o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const o=this.morphTargetInfluences;if(s&&o){ll.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=o[l],d=s[l];u!==0&&(du.fromBufferAttribute(d,e),a?ll.addScaledVector(du,u):ll.addScaledVector(du.sub(t),u))}t.add(ll)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const n=this.geometry,i=this.material,s=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),rl.copy(n.boundingSphere),rl.applyMatrix4(s),$r.copy(e.ray).recast(e.near),!(rl.containsPoint($r.origin)===!1&&($r.intersectSphere(rl,$d)===null||$r.origin.distanceToSquared($d)>(e.far-e.near)**2))&&(Zd.copy(s).invert(),$r.copy(e.ray).applyMatrix4(Zd),!(n.boundingBox!==null&&$r.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,$r)))}_computeIntersections(e,t,n){let i;const s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,d=s.attributes.normal,h=s.groups,f=s.drawRange;if(o!==null)if(Array.isArray(a))for(let _=0,g=h.length;_<g;_++){const p=h[_],m=a[p.materialIndex],M=Math.max(p.start,f.start),w=Math.min(o.count,Math.min(p.start+p.count,f.start+f.count));for(let v=M,y=w;v<y;v+=3){const T=o.getX(v),A=o.getX(v+1),x=o.getX(v+2);i=ul(this,m,e,n,c,u,d,T,A,x),i&&(i.faceIndex=Math.floor(v/3),i.face.materialIndex=p.materialIndex,t.push(i))}}else{const _=Math.max(0,f.start),g=Math.min(o.count,f.start+f.count);for(let p=_,m=g;p<m;p+=3){const M=o.getX(p),w=o.getX(p+1),v=o.getX(p+2);i=ul(this,a,e,n,c,u,d,M,w,v),i&&(i.faceIndex=Math.floor(p/3),t.push(i))}}else if(l!==void 0)if(Array.isArray(a))for(let _=0,g=h.length;_<g;_++){const p=h[_],m=a[p.materialIndex],M=Math.max(p.start,f.start),w=Math.min(l.count,Math.min(p.start+p.count,f.start+f.count));for(let v=M,y=w;v<y;v+=3){const T=v,A=v+1,x=v+2;i=ul(this,m,e,n,c,u,d,T,A,x),i&&(i.faceIndex=Math.floor(v/3),i.face.materialIndex=p.materialIndex,t.push(i))}}else{const _=Math.max(0,f.start),g=Math.min(l.count,f.start+f.count);for(let p=_,m=g;p<m;p+=3){const M=p,w=p+1,v=p+2;i=ul(this,a,e,n,c,u,d,M,w,v),i&&(i.faceIndex=Math.floor(p/3),t.push(i))}}}}function Rg(r,e,t,n,i,s,a,o){let l;if(e.side===Zn?l=n.intersectTriangle(a,s,i,!0,o):l=n.intersectTriangle(i,s,a,e.side===ps,o),l===null)return null;cl.copy(o),cl.applyMatrix4(r.matrixWorld);const c=t.ray.origin.distanceTo(cl);return c<t.near||c>t.far?null:{distance:c,point:cl.clone(),object:r}}function ul(r,e,t,n,i,s,a,o,l,c){r.getVertexPosition(o,sl),r.getVertexPosition(l,al),r.getVertexPosition(c,ol);const u=Rg(r,e,t,n,sl,al,ol,Jd);if(u){const d=new O;Li.getBarycoord(Jd,sl,al,ol,d),i&&(u.uv=Li.getInterpolatedAttribute(i,o,l,c,d,new he)),s&&(u.uv1=Li.getInterpolatedAttribute(s,o,l,c,d,new he)),a&&(u.normal=Li.getInterpolatedAttribute(a,o,l,c,d,new O),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const h={a:o,b:l,c,normal:new O,materialIndex:0};Li.getNormal(sl,al,ol,h.normal),u.face=h,u.barycoord=d}return u}class W0 extends Pn{constructor(e=null,t=1,n=1,i,s,a,o,l,c=_n,u=_n,d,h){super(null,a,o,l,c,u,i,s,d,h),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Kd extends Ei{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const Gs=new bt,Qd=new bt,hl=[],jd=new Ts,Pg=new bt,Fa=new tt,qa=new Es;class Dg extends tt{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Kd(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,Pg)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Ts),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Gs),jd.copy(e.boundingBox).applyMatrix4(Gs),this.boundingBox.union(jd)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Es),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Gs),qa.copy(e.boundingSphere).applyMatrix4(Gs),this.boundingSphere.union(qa)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const n=t.morphTargetInfluences,i=this.morphTexture.source.data.data,s=n.length+1,a=e*s+1;for(let o=0;o<n.length;o++)n[o]=i[a+o]}raycast(e,t){const n=this.matrixWorld,i=this.count;if(Fa.geometry=this.geometry,Fa.material=this.material,Fa.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),qa.copy(this.boundingSphere),qa.applyMatrix4(n),e.ray.intersectsSphere(qa)!==!1))for(let s=0;s<i;s++){this.getMatrixAt(s,Gs),Qd.multiplyMatrices(n,Gs),Fa.matrixWorld=Qd,Fa.raycast(e,hl);for(let a=0,o=hl.length;a<o;a++){const l=hl[a];l.instanceId=s,l.object=this,t.push(l)}hl.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new Kd(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){const n=t.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new W0(new Float32Array(i*this.count),i,this.count,xf,Ni));const s=this.morphTexture.source.data.data;let a=0;for(let c=0;c<n.length;c++)a+=n[c];const o=this.geometry.morphTargetsRelative?1:1-a,l=i*e;return s[l]=o,s.set(n,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const Jr=new Es,Lg=new he(.5,.5),fl=new O;class Cf{constructor(e=new wr,t=new wr,n=new wr,i=new wr,s=new wr,a=new wr){this.planes=[e,t,n,i,s,a]}set(e,t,n,i,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(i),o[4].copy(s),o[5].copy(a),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Hi,n=!1){const i=this.planes,s=e.elements,a=s[0],o=s[1],l=s[2],c=s[3],u=s[4],d=s[5],h=s[6],f=s[7],_=s[8],g=s[9],p=s[10],m=s[11],M=s[12],w=s[13],v=s[14],y=s[15];if(i[0].setComponents(c-a,f-u,m-_,y-M).normalize(),i[1].setComponents(c+a,f+u,m+_,y+M).normalize(),i[2].setComponents(c+o,f+d,m+g,y+w).normalize(),i[3].setComponents(c-o,f-d,m-g,y-w).normalize(),n)i[4].setComponents(l,h,p,v).normalize(),i[5].setComponents(c-l,f-h,m-p,y-v).normalize();else if(i[4].setComponents(c-l,f-h,m-p,y-v).normalize(),t===Hi)i[5].setComponents(c+l,f+h,m+p,y+v).normalize();else if(t===wo)i[5].setComponents(l,h,p,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Jr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Jr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Jr)}intersectsSprite(e){Jr.center.set(0,0,0);const t=Lg.distanceTo(e.center);return Jr.radius=.7071067811865476+t,Jr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Jr)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(fl.x=i.normal.x>0?e.max.x:e.min.x,fl.y=i.normal.y>0?e.max.y:e.min.y,fl.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(fl)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class X0 extends ws{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Je(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const cc=new O,uc=new O,ep=new bt,Ba=new Af,dl=new Es,pu=new O,tp=new O;class Ig extends Gt{constructor(e=new Vt,t=new X0){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let i=1,s=t.count;i<s;i++)cc.fromBufferAttribute(t,i-1),uc.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=cc.distanceTo(uc);e.setAttribute("lineDistance",new mt(n,1))}else Ke("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const n=this.geometry,i=this.matrixWorld,s=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),dl.copy(n.boundingSphere),dl.applyMatrix4(i),dl.radius+=s,e.ray.intersectsSphere(dl)===!1)return;ep.copy(i).invert(),Ba.copy(e.ray).applyMatrix4(ep);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,u=n.index,h=n.attributes.position;if(u!==null){const f=Math.max(0,a.start),_=Math.min(u.count,a.start+a.count);for(let g=f,p=_-1;g<p;g+=c){const m=u.getX(g),M=u.getX(g+1),w=pl(this,e,Ba,l,m,M,g);w&&t.push(w)}if(this.isLineLoop){const g=u.getX(_-1),p=u.getX(f),m=pl(this,e,Ba,l,g,p,_-1);m&&t.push(m)}}else{const f=Math.max(0,a.start),_=Math.min(h.count,a.start+a.count);for(let g=f,p=_-1;g<p;g+=c){const m=pl(this,e,Ba,l,g,g+1,g);m&&t.push(m)}if(this.isLineLoop){const g=pl(this,e,Ba,l,_-1,f,_-1);g&&t.push(g)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=i.length;s<a;s++){const o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function pl(r,e,t,n,i,s,a){const o=r.geometry.attributes.position;if(cc.fromBufferAttribute(o,i),uc.fromBufferAttribute(o,s),t.distanceSqToSegment(cc,uc,pu,tp)>n)return;pu.applyMatrix4(r.matrixWorld);const c=e.ray.origin.distanceTo(pu);if(!(c<e.near||c>e.far))return{distance:c,point:tp.clone().applyMatrix4(r.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:r}}class Ng extends Ig{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class Rf extends ws{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Je(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const np=new bt,Rh=new Af,ml=new Es,_l=new O;class Y0 extends Gt{constructor(e=new Vt,t=new Rf){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const n=this.geometry,i=this.matrixWorld,s=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ml.copy(n.boundingSphere),ml.applyMatrix4(i),ml.radius+=s,e.ray.intersectsSphere(ml)===!1)return;np.copy(i).invert(),Rh.copy(e.ray).applyMatrix4(np);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,d=n.attributes.position;if(c!==null){const h=Math.max(0,a.start),f=Math.min(c.count,a.start+a.count);for(let _=h,g=f;_<g;_++){const p=c.getX(_);_l.fromBufferAttribute(d,p),ip(_l,p,l,i,e,t,this)}}else{const h=Math.max(0,a.start),f=Math.min(d.count,a.start+a.count);for(let _=h,g=f;_<g;_++)_l.fromBufferAttribute(d,_),ip(_l,_,l,i,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=i.length;s<a;s++){const o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function ip(r,e,t,n,i,s,a){const o=Rh.distanceSqToPoint(r);if(o<t){const l=new O;Rh.closestPointToPoint(r,l),l.applyMatrix4(n);const c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;s.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}class Z0 extends Pn{constructor(e=[],t=ms,n,i,s,a,o,l,c,u){super(e,t,n,i,s,a,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Pf extends Pn{constructor(e,t,n,i,s,a,o,l,c){super(e,t,n,i,s,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Ao extends Pn{constructor(e,t,n=Qi,i,s,a,o=_n,l=_n,c,u=pr,d=1){if(u!==pr&&u!==rs)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const h={width:e,height:t,depth:d};super(h,i,s,a,o,l,u,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Ef(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}}class Ug extends Ao{constructor(e,t=Qi,n=ms,i,s,a=_n,o=_n,l,c=pr){const u={width:e,height:e,depth:1},d=[u,u,u,u,u,u];super(e,e,t,n,i,s,a,o,l,c),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class $0 extends Pn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Ai extends Vt{constructor(e=1,t=1,n=1,i=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:s,depthSegments:a};const o=this;i=Math.floor(i),s=Math.floor(s),a=Math.floor(a);const l=[],c=[],u=[],d=[];let h=0,f=0;_("z","y","x",-1,-1,n,t,e,a,s,0),_("z","y","x",1,-1,n,t,-e,a,s,1),_("x","z","y",1,1,e,n,t,i,a,2),_("x","z","y",1,-1,e,n,-t,i,a,3),_("x","y","z",1,-1,e,t,n,i,s,4),_("x","y","z",-1,-1,e,t,-n,i,s,5),this.setIndex(l),this.setAttribute("position",new mt(c,3)),this.setAttribute("normal",new mt(u,3)),this.setAttribute("uv",new mt(d,2));function _(g,p,m,M,w,v,y,T,A,x,b){const C=v/A,L=y/x,D=v/2,k=y/2,I=T/2,q=A+1,X=x+1;let z=0,j=0;const Y=new O;for(let P=0;P<X;P++){const K=P*L-k;for(let we=0;we<q;we++){const Te=we*C-D;Y[g]=Te*M,Y[p]=K*w,Y[m]=I,c.push(Y.x,Y.y,Y.z),Y[g]=0,Y[p]=0,Y[m]=T>0?1:-1,u.push(Y.x,Y.y,Y.z),d.push(we/A),d.push(1-P/x),z+=1}}for(let P=0;P<x;P++)for(let K=0;K<A;K++){const we=h+K+q*P,Te=h+K+q*(P+1),Ye=h+(K+1)+q*(P+1),We=h+(K+1)+q*P;l.push(we,Te,We),l.push(Te,Ye,We),j+=6}o.addGroup(f,j,b),f+=j,h+=z}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ai(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class Df extends Vt{constructor(e=1,t=32,n=0,i=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:i},t=Math.max(3,t);const s=[],a=[],o=[],l=[],c=new O,u=new he;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let d=0,h=3;d<=t;d++,h+=3){const f=n+d/t*i;c.x=e*Math.cos(f),c.y=e*Math.sin(f),a.push(c.x,c.y,c.z),o.push(0,0,1),u.x=(a[h]/e+1)/2,u.y=(a[h+1]/e+1)/2,l.push(u.x,u.y)}for(let d=1;d<=t;d++)s.push(d,d+1,0);this.setIndex(s),this.setAttribute("position",new mt(a,3)),this.setAttribute("normal",new mt(o,3)),this.setAttribute("uv",new mt(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Df(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class Ji extends Vt{constructor(e=1,t=1,n=1,i=32,s=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:i,heightSegments:s,openEnded:a,thetaStart:o,thetaLength:l};const c=this;i=Math.floor(i),s=Math.floor(s);const u=[],d=[],h=[],f=[];let _=0;const g=[],p=n/2;let m=0;M(),a===!1&&(e>0&&w(!0),t>0&&w(!1)),this.setIndex(u),this.setAttribute("position",new mt(d,3)),this.setAttribute("normal",new mt(h,3)),this.setAttribute("uv",new mt(f,2));function M(){const v=new O,y=new O;let T=0;const A=(t-e)/n;for(let x=0;x<=s;x++){const b=[],C=x/s,L=C*(t-e)+e;for(let D=0;D<=i;D++){const k=D/i,I=k*l+o,q=Math.sin(I),X=Math.cos(I);y.x=L*q,y.y=-C*n+p,y.z=L*X,d.push(y.x,y.y,y.z),v.set(q,A,X).normalize(),h.push(v.x,v.y,v.z),f.push(k,1-C),b.push(_++)}g.push(b)}for(let x=0;x<i;x++)for(let b=0;b<s;b++){const C=g[b][x],L=g[b+1][x],D=g[b+1][x+1],k=g[b][x+1];(e>0||b!==0)&&(u.push(C,L,k),T+=3),(t>0||b!==s-1)&&(u.push(L,D,k),T+=3)}c.addGroup(m,T,0),m+=T}function w(v){const y=_,T=new he,A=new O;let x=0;const b=v===!0?e:t,C=v===!0?1:-1;for(let D=1;D<=i;D++)d.push(0,p*C,0),h.push(0,C,0),f.push(.5,.5),_++;const L=_;for(let D=0;D<=i;D++){const I=D/i*l+o,q=Math.cos(I),X=Math.sin(I);A.x=b*X,A.y=p*C,A.z=b*q,d.push(A.x,A.y,A.z),h.push(0,C,0),T.x=q*.5+.5,T.y=X*.5*C+.5,f.push(T.x,T.y),_++}for(let D=0;D<i;D++){const k=y+D,I=L+D;v===!0?u.push(I,I+1,k):u.push(I+1,I,k),x+=3}c.addGroup(m,x,v===!0?1:2),m+=x}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ji(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Lf extends Ji{constructor(e=1,t=1,n=32,i=1,s=!1,a=0,o=Math.PI*2){super(0,e,t,n,i,s,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:i,openEnded:s,thetaStart:a,thetaLength:o}}static fromJSON(e){return new Lf(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class If extends Vt{constructor(e=[],t=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:i};const s=[],a=[];o(i),c(n),u(),this.setAttribute("position",new mt(s,3)),this.setAttribute("normal",new mt(s.slice(),3)),this.setAttribute("uv",new mt(a,2)),i===0?this.computeVertexNormals():this.normalizeNormals();function o(M){const w=new O,v=new O,y=new O;for(let T=0;T<t.length;T+=3)f(t[T+0],w),f(t[T+1],v),f(t[T+2],y),l(w,v,y,M)}function l(M,w,v,y){const T=y+1,A=[];for(let x=0;x<=T;x++){A[x]=[];const b=M.clone().lerp(v,x/T),C=w.clone().lerp(v,x/T),L=T-x;for(let D=0;D<=L;D++)D===0&&x===T?A[x][D]=b:A[x][D]=b.clone().lerp(C,D/L)}for(let x=0;x<T;x++)for(let b=0;b<2*(T-x)-1;b++){const C=Math.floor(b/2);b%2===0?(h(A[x][C+1]),h(A[x+1][C]),h(A[x][C])):(h(A[x][C+1]),h(A[x+1][C+1]),h(A[x+1][C]))}}function c(M){const w=new O;for(let v=0;v<s.length;v+=3)w.x=s[v+0],w.y=s[v+1],w.z=s[v+2],w.normalize().multiplyScalar(M),s[v+0]=w.x,s[v+1]=w.y,s[v+2]=w.z}function u(){const M=new O;for(let w=0;w<s.length;w+=3){M.x=s[w+0],M.y=s[w+1],M.z=s[w+2];const v=p(M)/2/Math.PI+.5,y=m(M)/Math.PI+.5;a.push(v,1-y)}_(),d()}function d(){for(let M=0;M<a.length;M+=6){const w=a[M+0],v=a[M+2],y=a[M+4],T=Math.max(w,v,y),A=Math.min(w,v,y);T>.9&&A<.1&&(w<.2&&(a[M+0]+=1),v<.2&&(a[M+2]+=1),y<.2&&(a[M+4]+=1))}}function h(M){s.push(M.x,M.y,M.z)}function f(M,w){const v=M*3;w.x=e[v+0],w.y=e[v+1],w.z=e[v+2]}function _(){const M=new O,w=new O,v=new O,y=new O,T=new he,A=new he,x=new he;for(let b=0,C=0;b<s.length;b+=9,C+=6){M.set(s[b+0],s[b+1],s[b+2]),w.set(s[b+3],s[b+4],s[b+5]),v.set(s[b+6],s[b+7],s[b+8]),T.set(a[C+0],a[C+1]),A.set(a[C+2],a[C+3]),x.set(a[C+4],a[C+5]),y.copy(M).add(w).add(v).divideScalar(3);const L=p(y);g(T,C+0,M,L),g(A,C+2,w,L),g(x,C+4,v,L)}}function g(M,w,v,y){y<0&&M.x===1&&(a[w]=M.x-1),v.x===0&&v.z===0&&(a[w]=y/2/Math.PI+.5)}function p(M){return Math.atan2(M.z,-M.x)}function m(M){return Math.atan2(-M.y,Math.sqrt(M.x*M.x+M.z*M.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new If(e.vertices,e.indices,e.radius,e.detail)}}class er{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Ke("Curve: .getPoint() not implemented.")}getPointAt(e,t){const n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let n,i=this.getPoint(0),s=0;t.push(0);for(let a=1;a<=e;a++)n=this.getPoint(a/e),s+=n.distanceTo(i),t.push(s),i=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){const n=this.getLengths();let i=0;const s=n.length;let a;t?a=t:a=e*n[s-1];let o=0,l=s-1,c;for(;o<=l;)if(i=Math.floor(o+(l-o)/2),c=n[i]-a,c<0)o=i+1;else if(c>0)l=i-1;else{l=i;break}if(i=l,n[i]===a)return i/(s-1);const u=n[i],h=n[i+1]-u,f=(a-u)/h;return(i+f)/(s-1)}getTangent(e,t){let i=e-1e-4,s=e+1e-4;i<0&&(i=0),s>1&&(s=1);const a=this.getPoint(i),o=this.getPoint(s),l=t||(a.isVector2?new he:new O);return l.copy(o).sub(a).normalize(),l}getTangentAt(e,t){const n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){const n=new O,i=[],s=[],a=[],o=new O,l=new bt;for(let f=0;f<=e;f++){const _=f/e;i[f]=this.getTangentAt(_,new O)}s[0]=new O,a[0]=new O;let c=Number.MAX_VALUE;const u=Math.abs(i[0].x),d=Math.abs(i[0].y),h=Math.abs(i[0].z);u<=c&&(c=u,n.set(1,0,0)),d<=c&&(c=d,n.set(0,1,0)),h<=c&&n.set(0,0,1),o.crossVectors(i[0],n).normalize(),s[0].crossVectors(i[0],o),a[0].crossVectors(i[0],s[0]);for(let f=1;f<=e;f++){if(s[f]=s[f-1].clone(),a[f]=a[f-1].clone(),o.crossVectors(i[f-1],i[f]),o.length()>Number.EPSILON){o.normalize();const _=Math.acos(st(i[f-1].dot(i[f]),-1,1));s[f].applyMatrix4(l.makeRotationAxis(o,_))}a[f].crossVectors(i[f],s[f])}if(t===!0){let f=Math.acos(st(s[0].dot(s[e]),-1,1));f/=e,i[0].dot(o.crossVectors(s[0],s[e]))>0&&(f=-f);for(let _=1;_<=e;_++)s[_].applyMatrix4(l.makeRotationAxis(i[_],f*_)),a[_].crossVectors(i[_],s[_])}return{tangents:i,normals:s,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class Nf extends er{constructor(e=0,t=0,n=1,i=1,s=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=i,this.aStartAngle=s,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(e,t=new he){const n=t,i=Math.PI*2;let s=this.aEndAngle-this.aStartAngle;const a=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=i;for(;s>i;)s-=i;s<Number.EPSILON&&(a?s=0:s=i),this.aClockwise===!0&&!a&&(s===i?s=-i:s=s-i);const o=this.aStartAngle+e*s;let l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){const u=Math.cos(this.aRotation),d=Math.sin(this.aRotation),h=l-this.aX,f=c-this.aY;l=h*u-f*d+this.aX,c=h*d+f*u+this.aY}return n.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class Og extends Nf{constructor(e,t,n,i,s,a){super(e,t,n,n,i,s,a),this.isArcCurve=!0,this.type="ArcCurve"}}function Uf(){let r=0,e=0,t=0,n=0;function i(s,a,o,l){r=s,e=o,t=-3*s+3*a-2*o-l,n=2*s-2*a+o+l}return{initCatmullRom:function(s,a,o,l,c){i(a,o,c*(o-s),c*(l-a))},initNonuniformCatmullRom:function(s,a,o,l,c,u,d){let h=(a-s)/c-(o-s)/(c+u)+(o-a)/u,f=(o-a)/u-(l-a)/(u+d)+(l-o)/d;h*=u,f*=u,i(a,o,h,f)},calc:function(s){const a=s*s,o=a*s;return r+e*s+t*a+n*o}}}const rp=new O,sp=new O,mu=new Uf,_u=new Uf,gu=new Uf;class Fg extends er{constructor(e=[],t=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=i}getPoint(e,t=new O){const n=t,i=this.points,s=i.length,a=(s-(this.closed?0:1))*e;let o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/s)+1)*s:l===0&&o===s-1&&(o=s-2,l=1);let c,u;this.closed||o>0?c=i[(o-1)%s]:(sp.subVectors(i[0],i[1]).add(i[0]),c=sp);const d=i[o%s],h=i[(o+1)%s];if(this.closed||o+2<s?u=i[(o+2)%s]:(rp.subVectors(i[s-1],i[s-2]).add(i[s-1]),u=rp),this.curveType==="centripetal"||this.curveType==="chordal"){const f=this.curveType==="chordal"?.5:.25;let _=Math.pow(c.distanceToSquared(d),f),g=Math.pow(d.distanceToSquared(h),f),p=Math.pow(h.distanceToSquared(u),f);g<1e-4&&(g=1),_<1e-4&&(_=g),p<1e-4&&(p=g),mu.initNonuniformCatmullRom(c.x,d.x,h.x,u.x,_,g,p),_u.initNonuniformCatmullRom(c.y,d.y,h.y,u.y,_,g,p),gu.initNonuniformCatmullRom(c.z,d.z,h.z,u.z,_,g,p)}else this.curveType==="catmullrom"&&(mu.initCatmullRom(c.x,d.x,h.x,u.x,this.tension),_u.initCatmullRom(c.y,d.y,h.y,u.y,this.tension),gu.initCatmullRom(c.z,d.z,h.z,u.z,this.tension));return n.set(mu.calc(l),_u.calc(l),gu.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(i.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const i=this.points[t];e.points.push(i.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(new O().fromArray(i))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function ap(r,e,t,n,i){const s=(n-e)*.5,a=(i-t)*.5,o=r*r,l=r*o;return(2*t-2*n+s+a)*l+(-3*t+3*n-2*s-a)*o+s*r+t}function qg(r,e){const t=1-r;return t*t*e}function Bg(r,e){return 2*(1-r)*r*e}function zg(r,e){return r*r*e}function so(r,e,t,n){return qg(r,e)+Bg(r,t)+zg(r,n)}function kg(r,e){const t=1-r;return t*t*t*e}function Gg(r,e){const t=1-r;return 3*t*t*r*e}function Vg(r,e){return 3*(1-r)*r*r*e}function Hg(r,e){return r*r*r*e}function ao(r,e,t,n,i){return kg(r,e)+Gg(r,t)+Vg(r,n)+Hg(r,i)}class J0 extends er{constructor(e=new he,t=new he,n=new he,i=new he){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new he){const n=t,i=this.v0,s=this.v1,a=this.v2,o=this.v3;return n.set(ao(e,i.x,s.x,a.x,o.x),ao(e,i.y,s.y,a.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class Wg extends er{constructor(e=new O,t=new O,n=new O,i=new O){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new O){const n=t,i=this.v0,s=this.v1,a=this.v2,o=this.v3;return n.set(ao(e,i.x,s.x,a.x,o.x),ao(e,i.y,s.y,a.y,o.y),ao(e,i.z,s.z,a.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class K0 extends er{constructor(e=new he,t=new he){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new he){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new he){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Xg extends er{constructor(e=new O,t=new O){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new O){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new O){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Q0 extends er{constructor(e=new he,t=new he,n=new he){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new he){const n=t,i=this.v0,s=this.v1,a=this.v2;return n.set(so(e,i.x,s.x,a.x),so(e,i.y,s.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Yg extends er{constructor(e=new O,t=new O,n=new O){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new O){const n=t,i=this.v0,s=this.v1,a=this.v2;return n.set(so(e,i.x,s.x,a.x),so(e,i.y,s.y,a.y),so(e,i.z,s.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class j0 extends er{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new he){const n=t,i=this.points,s=(i.length-1)*e,a=Math.floor(s),o=s-a,l=i[a===0?a:a-1],c=i[a],u=i[a>i.length-2?i.length-1:a+1],d=i[a>i.length-3?i.length-1:a+2];return n.set(ap(o,l.x,c.x,u.x,d.x),ap(o,l.y,c.y,u.y,d.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(i.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const i=this.points[t];e.points.push(i.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(new he().fromArray(i))}return this}}var Ph=Object.freeze({__proto__:null,ArcCurve:Og,CatmullRomCurve3:Fg,CubicBezierCurve:J0,CubicBezierCurve3:Wg,EllipseCurve:Nf,LineCurve:K0,LineCurve3:Xg,QuadraticBezierCurve:Q0,QuadraticBezierCurve3:Yg,SplineCurve:j0});class Zg extends er{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){const n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Ph[n](t,e))}return this}getPoint(e,t){const n=e*this.getLength(),i=this.getCurveLengths();let s=0;for(;s<i.length;){if(i[s]>=n){const a=i[s]-n,o=this.curves[s],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,t)}s++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let n=0,i=this.curves.length;n<i;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let n;for(let i=0,s=this.curves;i<s.length;i++){const a=s[i],o=a.isEllipseCurve?e*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?e*a.points.length:e,l=a.getPoints(o);for(let c=0;c<l.length;c++){const u=l[c];n&&n.equals(u)||(t.push(u),n=u)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const i=e.curves[t];this.curves.push(i.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){const i=this.curves[t];e.curves.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const i=e.curves[t];this.curves.push(new Ph[i.type]().fromJSON(i))}return this}}class hc extends Zg{constructor(e){super(),this.type="Path",this.currentPoint=new he,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const n=new K0(this.currentPoint.clone(),new he(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,i){const s=new Q0(this.currentPoint.clone(),new he(e,t),new he(n,i));return this.curves.push(s),this.currentPoint.set(n,i),this}bezierCurveTo(e,t,n,i,s,a){const o=new J0(this.currentPoint.clone(),new he(e,t),new he(n,i),new he(s,a));return this.curves.push(o),this.currentPoint.set(s,a),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),n=new j0(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,i,s,a){const o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+o,t+l,n,i,s,a),this}absarc(e,t,n,i,s,a){return this.absellipse(e,t,n,n,i,s,a),this}ellipse(e,t,n,i,s,a,o,l){const c=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(e+c,t+u,n,i,s,a,o,l),this}absellipse(e,t,n,i,s,a,o,l){const c=new Nf(e,t,n,i,s,a,o,l);if(this.curves.length>0){const d=c.getPoint(0);d.equals(this.currentPoint)||this.lineTo(d.x,d.y)}this.curves.push(c);const u=c.getPoint(1);return this.currentPoint.copy(u),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class ko extends hc{constructor(e){super(e),this.uuid=bs(),this.type="Shape",this.holes=[]}getPointsHoles(e){const t=[];for(let n=0,i=this.holes.length;n<i;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const i=e.holes[t];this.holes.push(i.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){const i=this.holes[t];e.holes.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const i=e.holes[t];this.holes.push(new hc().fromJSON(i))}return this}}function $g(r,e,t=2){const n=e&&e.length,i=n?e[0]*t:r.length;let s=em(r,0,i,t,!0);const a=[];if(!s||s.next===s.prev)return a;let o,l,c;if(n&&(s=e2(r,e,s,t)),r.length>80*t){o=r[0],l=r[1];let u=o,d=l;for(let h=t;h<i;h+=t){const f=r[h],_=r[h+1];f<o&&(o=f),_<l&&(l=_),f>u&&(u=f),_>d&&(d=_)}c=Math.max(u-o,d-l),c=c!==0?32767/c:0}return Co(s,a,t,o,l,c,0),a}function em(r,e,t,n,i){let s;if(i===h2(r,e,t,n)>0)for(let a=e;a<t;a+=n)s=op(a/n|0,r[a],r[a+1],s);else for(let a=t-n;a>=e;a-=n)s=op(a/n|0,r[a],r[a+1],s);return s&&pa(s,s.next)&&(Po(s),s=s.next),s}function gs(r,e){if(!r)return r;e||(e=r);let t=r,n;do if(n=!1,!t.steiner&&(pa(t,t.next)||zt(t.prev,t,t.next)===0)){if(Po(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function Co(r,e,t,n,i,s,a){if(!r)return;!a&&s&&s2(r,n,i,s);let o=r;for(;r.prev!==r.next;){const l=r.prev,c=r.next;if(s?Kg(r,n,i,s):Jg(r)){e.push(l.i,r.i,c.i),Po(r),r=c.next,o=c.next;continue}if(r=c,r===o){a?a===1?(r=Qg(gs(r),e),Co(r,e,t,n,i,s,2)):a===2&&jg(r,e,t,n,i,s):Co(gs(r),e,t,n,i,s,1);break}}}function Jg(r){const e=r.prev,t=r,n=r.next;if(zt(e,t,n)>=0)return!1;const i=e.x,s=t.x,a=n.x,o=e.y,l=t.y,c=n.y,u=Math.min(i,s,a),d=Math.min(o,l,c),h=Math.max(i,s,a),f=Math.max(o,l,c);let _=n.next;for(;_!==e;){if(_.x>=u&&_.x<=h&&_.y>=d&&_.y<=f&&Ya(i,o,s,l,a,c,_.x,_.y)&&zt(_.prev,_,_.next)>=0)return!1;_=_.next}return!0}function Kg(r,e,t,n){const i=r.prev,s=r,a=r.next;if(zt(i,s,a)>=0)return!1;const o=i.x,l=s.x,c=a.x,u=i.y,d=s.y,h=a.y,f=Math.min(o,l,c),_=Math.min(u,d,h),g=Math.max(o,l,c),p=Math.max(u,d,h),m=Dh(f,_,e,t,n),M=Dh(g,p,e,t,n);let w=r.prevZ,v=r.nextZ;for(;w&&w.z>=m&&v&&v.z<=M;){if(w.x>=f&&w.x<=g&&w.y>=_&&w.y<=p&&w!==i&&w!==a&&Ya(o,u,l,d,c,h,w.x,w.y)&&zt(w.prev,w,w.next)>=0||(w=w.prevZ,v.x>=f&&v.x<=g&&v.y>=_&&v.y<=p&&v!==i&&v!==a&&Ya(o,u,l,d,c,h,v.x,v.y)&&zt(v.prev,v,v.next)>=0))return!1;v=v.nextZ}for(;w&&w.z>=m;){if(w.x>=f&&w.x<=g&&w.y>=_&&w.y<=p&&w!==i&&w!==a&&Ya(o,u,l,d,c,h,w.x,w.y)&&zt(w.prev,w,w.next)>=0)return!1;w=w.prevZ}for(;v&&v.z<=M;){if(v.x>=f&&v.x<=g&&v.y>=_&&v.y<=p&&v!==i&&v!==a&&Ya(o,u,l,d,c,h,v.x,v.y)&&zt(v.prev,v,v.next)>=0)return!1;v=v.nextZ}return!0}function Qg(r,e){let t=r;do{const n=t.prev,i=t.next.next;!pa(n,i)&&nm(n,t,t.next,i)&&Ro(n,i)&&Ro(i,n)&&(e.push(n.i,t.i,i.i),Po(t),Po(t.next),t=r=i),t=t.next}while(t!==r);return gs(t)}function jg(r,e,t,n,i,s){let a=r;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&l2(a,o)){let l=im(a,o);a=gs(a,a.next),l=gs(l,l.next),Co(a,e,t,n,i,s,0),Co(l,e,t,n,i,s,0);return}o=o.next}a=a.next}while(a!==r)}function e2(r,e,t,n){const i=[];for(let s=0,a=e.length;s<a;s++){const o=e[s]*n,l=s<a-1?e[s+1]*n:r.length,c=em(r,o,l,n,!1);c===c.next&&(c.steiner=!0),i.push(o2(c))}i.sort(t2);for(let s=0;s<i.length;s++)t=n2(i[s],t);return t}function t2(r,e){let t=r.x-e.x;if(t===0&&(t=r.y-e.y,t===0)){const n=(r.next.y-r.y)/(r.next.x-r.x),i=(e.next.y-e.y)/(e.next.x-e.x);t=n-i}return t}function n2(r,e){const t=i2(r,e);if(!t)return e;const n=im(t,r);return gs(n,n.next),gs(t,t.next)}function i2(r,e){let t=e;const n=r.x,i=r.y;let s=-1/0,a;if(pa(r,t))return t;do{if(pa(r,t.next))return t.next;if(i<=t.y&&i>=t.next.y&&t.next.y!==t.y){const d=t.x+(i-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(d<=n&&d>s&&(s=d,a=t.x<t.next.x?t:t.next,d===n))return a}t=t.next}while(t!==e);if(!a)return null;const o=a,l=a.x,c=a.y;let u=1/0;t=a;do{if(n>=t.x&&t.x>=l&&n!==t.x&&tm(i<c?n:s,i,l,c,i<c?s:n,i,t.x,t.y)){const d=Math.abs(i-t.y)/(n-t.x);Ro(t,r)&&(d<u||d===u&&(t.x>a.x||t.x===a.x&&r2(a,t)))&&(a=t,u=d)}t=t.next}while(t!==o);return a}function r2(r,e){return zt(r.prev,r,e.prev)<0&&zt(e.next,r,r.next)<0}function s2(r,e,t,n){let i=r;do i.z===0&&(i.z=Dh(i.x,i.y,e,t,n)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==r);i.prevZ.nextZ=null,i.prevZ=null,a2(i)}function a2(r){let e,t=1;do{let n=r,i;r=null;let s=null;for(e=0;n;){e++;let a=n,o=0;for(let c=0;c<t&&(o++,a=a.nextZ,!!a);c++);let l=t;for(;o>0||l>0&&a;)o!==0&&(l===0||!a||n.z<=a.z)?(i=n,n=n.nextZ,o--):(i=a,a=a.nextZ,l--),s?s.nextZ=i:r=i,i.prevZ=s,s=i;n=a}s.nextZ=null,t*=2}while(e>1);return r}function Dh(r,e,t,n,i){return r=(r-t)*i|0,e=(e-n)*i|0,r=(r|r<<8)&16711935,r=(r|r<<4)&252645135,r=(r|r<<2)&858993459,r=(r|r<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,r|e<<1}function o2(r){let e=r,t=r;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==r);return t}function tm(r,e,t,n,i,s,a,o){return(i-a)*(e-o)>=(r-a)*(s-o)&&(r-a)*(n-o)>=(t-a)*(e-o)&&(t-a)*(s-o)>=(i-a)*(n-o)}function Ya(r,e,t,n,i,s,a,o){return!(r===a&&e===o)&&tm(r,e,t,n,i,s,a,o)}function l2(r,e){return r.next.i!==e.i&&r.prev.i!==e.i&&!c2(r,e)&&(Ro(r,e)&&Ro(e,r)&&u2(r,e)&&(zt(r.prev,r,e.prev)||zt(r,e.prev,e))||pa(r,e)&&zt(r.prev,r,r.next)>0&&zt(e.prev,e,e.next)>0)}function zt(r,e,t){return(e.y-r.y)*(t.x-e.x)-(e.x-r.x)*(t.y-e.y)}function pa(r,e){return r.x===e.x&&r.y===e.y}function nm(r,e,t,n){const i=xl(zt(r,e,t)),s=xl(zt(r,e,n)),a=xl(zt(t,n,r)),o=xl(zt(t,n,e));return!!(i!==s&&a!==o||i===0&&gl(r,t,e)||s===0&&gl(r,n,e)||a===0&&gl(t,r,n)||o===0&&gl(t,e,n))}function gl(r,e,t){return e.x<=Math.max(r.x,t.x)&&e.x>=Math.min(r.x,t.x)&&e.y<=Math.max(r.y,t.y)&&e.y>=Math.min(r.y,t.y)}function xl(r){return r>0?1:r<0?-1:0}function c2(r,e){let t=r;do{if(t.i!==r.i&&t.next.i!==r.i&&t.i!==e.i&&t.next.i!==e.i&&nm(t,t.next,r,e))return!0;t=t.next}while(t!==r);return!1}function Ro(r,e){return zt(r.prev,r,r.next)<0?zt(r,e,r.next)>=0&&zt(r,r.prev,e)>=0:zt(r,e,r.prev)<0||zt(r,r.next,e)<0}function u2(r,e){let t=r,n=!1;const i=(r.x+e.x)/2,s=(r.y+e.y)/2;do t.y>s!=t.next.y>s&&t.next.y!==t.y&&i<(t.next.x-t.x)*(s-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==r);return n}function im(r,e){const t=Lh(r.i,r.x,r.y),n=Lh(e.i,e.x,e.y),i=r.next,s=e.prev;return r.next=e,e.prev=r,t.next=i,i.prev=t,n.next=t,t.prev=n,s.next=n,n.prev=s,n}function op(r,e,t,n){const i=Lh(r,e,t);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function Po(r){r.next.prev=r.prev,r.prev.next=r.next,r.prevZ&&(r.prevZ.nextZ=r.nextZ),r.nextZ&&(r.nextZ.prevZ=r.prevZ)}function Lh(r,e,t){return{i:r,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function h2(r,e,t,n){let i=0;for(let s=e,a=t-n;s<t;s+=n)i+=(r[a]-r[s])*(r[s+1]+r[a+1]),a=s;return i}class f2{static triangulate(e,t,n=2){return $g(e,t,n)}}class Wi{static area(e){const t=e.length;let n=0;for(let i=t-1,s=0;s<t;i=s++)n+=e[i].x*e[s].y-e[s].x*e[i].y;return n*.5}static isClockWise(e){return Wi.area(e)<0}static triangulateShape(e,t){const n=[],i=[],s=[];lp(e),cp(n,e);let a=e.length;t.forEach(lp);for(let l=0;l<t.length;l++)i.push(a),a+=t[l].length,cp(n,t[l]);const o=f2.triangulate(n,i);for(let l=0;l<o.length;l+=3)s.push(o.slice(l,l+3));return s}}function lp(r){const e=r.length;e>2&&r[e-1].equals(r[0])&&r.pop()}function cp(r,e){for(let t=0;t<e.length;t++)r.push(e[t].x),r.push(e[t].y)}class Rc extends Vt{constructor(e=new ko([new he(.5,.5),new he(-.5,.5),new he(-.5,-.5),new he(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];const n=this,i=[],s=[];for(let o=0,l=e.length;o<l;o++){const c=e[o];a(c)}this.setAttribute("position",new mt(i,3)),this.setAttribute("uv",new mt(s,2)),this.computeVertexNormals();function a(o){const l=[],c=t.curveSegments!==void 0?t.curveSegments:12,u=t.steps!==void 0?t.steps:1,d=t.depth!==void 0?t.depth:1;let h=t.bevelEnabled!==void 0?t.bevelEnabled:!0,f=t.bevelThickness!==void 0?t.bevelThickness:.2,_=t.bevelSize!==void 0?t.bevelSize:f-.1,g=t.bevelOffset!==void 0?t.bevelOffset:0,p=t.bevelSegments!==void 0?t.bevelSegments:3;const m=t.extrudePath,M=t.UVGenerator!==void 0?t.UVGenerator:d2;let w,v=!1,y,T,A,x;if(m){w=m.getSpacedPoints(u),v=!0,h=!1;const Q=m.isCatmullRomCurve3?m.closed:!1;y=m.computeFrenetFrames(u,Q),T=new O,A=new O,x=new O}h||(p=0,f=0,_=0,g=0);const b=o.extractPoints(c);let C=b.shape;const L=b.holes;if(!Wi.isClockWise(C)){C=C.reverse();for(let Q=0,re=L.length;Q<re;Q++){const oe=L[Q];Wi.isClockWise(oe)&&(L[Q]=oe.reverse())}}function k(Q){const oe=10000000000000001e-36;let N=Q[0];for(let de=1;de<=Q.length;de++){const Be=de%Q.length,Ue=Q[Be],Ce=Ue.x-N.x,Ze=Ue.y-N.y,U=Ce*Ce+Ze*Ze,at=Math.max(Math.abs(Ue.x),Math.abs(Ue.y),Math.abs(N.x),Math.abs(N.y)),He=oe*at*at;if(U<=He){Q.splice(Be,1),de--;continue}N=Ue}}k(C),L.forEach(k);const I=L.length,q=C;for(let Q=0;Q<I;Q++){const re=L[Q];C=C.concat(re)}function X(Q,re,oe){return re||gt("ExtrudeGeometry: vec does not exist"),Q.clone().addScaledVector(re,oe)}const z=C.length;function j(Q,re,oe){let N,de,Be;const Ue=Q.x-re.x,Ce=Q.y-re.y,Ze=oe.x-Q.x,U=oe.y-Q.y,at=Ue*Ue+Ce*Ce,He=Ue*U-Ce*Ze;if(Math.abs(He)>Number.EPSILON){const R=Math.sqrt(at),S=Math.sqrt(Ze*Ze+U*U),G=re.x-Ce/R,V=re.y+Ue/R,J=oe.x-U/S,pe=oe.y+Ze/S,ce=((J-G)*U-(pe-V)*Ze)/(Ue*U-Ce*Ze);N=G+Ue*ce-Q.x,de=V+Ce*ce-Q.y;const ee=N*N+de*de;if(ee<=2)return new he(N,de);Be=Math.sqrt(ee/2)}else{let R=!1;Ue>Number.EPSILON?Ze>Number.EPSILON&&(R=!0):Ue<-Number.EPSILON?Ze<-Number.EPSILON&&(R=!0):Math.sign(Ce)===Math.sign(U)&&(R=!0),R?(N=-Ce,de=Ue,Be=Math.sqrt(at)):(N=Ue,de=Ce,Be=Math.sqrt(at/2))}return new he(N/Be,de/Be)}const Y=[];for(let Q=0,re=q.length,oe=re-1,N=Q+1;Q<re;Q++,oe++,N++)oe===re&&(oe=0),N===re&&(N=0),Y[Q]=j(q[Q],q[oe],q[N]);const P=[];let K,we=Y.concat();for(let Q=0,re=I;Q<re;Q++){const oe=L[Q];K=[];for(let N=0,de=oe.length,Be=de-1,Ue=N+1;N<de;N++,Be++,Ue++)Be===de&&(Be=0),Ue===de&&(Ue=0),K[N]=j(oe[N],oe[Be],oe[Ue]);P.push(K),we=we.concat(K)}let Te;if(p===0)Te=Wi.triangulateShape(q,L);else{const Q=[],re=[];for(let oe=0;oe<p;oe++){const N=oe/p,de=f*Math.cos(N*Math.PI/2),Be=_*Math.sin(N*Math.PI/2)+g;for(let Ue=0,Ce=q.length;Ue<Ce;Ue++){const Ze=X(q[Ue],Y[Ue],Be);me(Ze.x,Ze.y,-de),N===0&&Q.push(Ze)}for(let Ue=0,Ce=I;Ue<Ce;Ue++){const Ze=L[Ue];K=P[Ue];const U=[];for(let at=0,He=Ze.length;at<He;at++){const R=X(Ze[at],K[at],Be);me(R.x,R.y,-de),N===0&&U.push(R)}N===0&&re.push(U)}}Te=Wi.triangulateShape(Q,re)}const Ye=Te.length,We=_+g;for(let Q=0;Q<z;Q++){const re=h?X(C[Q],we[Q],We):C[Q];v?(A.copy(y.normals[0]).multiplyScalar(re.x),T.copy(y.binormals[0]).multiplyScalar(re.y),x.copy(w[0]).add(A).add(T),me(x.x,x.y,x.z)):me(re.x,re.y,0)}for(let Q=1;Q<=u;Q++)for(let re=0;re<z;re++){const oe=h?X(C[re],we[re],We):C[re];v?(A.copy(y.normals[Q]).multiplyScalar(oe.x),T.copy(y.binormals[Q]).multiplyScalar(oe.y),x.copy(w[Q]).add(A).add(T),me(x.x,x.y,x.z)):me(oe.x,oe.y,d/u*Q)}for(let Q=p-1;Q>=0;Q--){const re=Q/p,oe=f*Math.cos(re*Math.PI/2),N=_*Math.sin(re*Math.PI/2)+g;for(let de=0,Be=q.length;de<Be;de++){const Ue=X(q[de],Y[de],N);me(Ue.x,Ue.y,d+oe)}for(let de=0,Be=L.length;de<Be;de++){const Ue=L[de];K=P[de];for(let Ce=0,Ze=Ue.length;Ce<Ze;Ce++){const U=X(Ue[Ce],K[Ce],N);v?me(U.x,U.y+w[u-1].y,w[u-1].x+oe):me(U.x,U.y,d+oe)}}}Qe(),$();function Qe(){const Q=i.length/3;if(h){let re=0,oe=z*re;for(let N=0;N<Ye;N++){const de=Te[N];Ge(de[2]+oe,de[1]+oe,de[0]+oe)}re=u+p*2,oe=z*re;for(let N=0;N<Ye;N++){const de=Te[N];Ge(de[0]+oe,de[1]+oe,de[2]+oe)}}else{for(let re=0;re<Ye;re++){const oe=Te[re];Ge(oe[2],oe[1],oe[0])}for(let re=0;re<Ye;re++){const oe=Te[re];Ge(oe[0]+z*u,oe[1]+z*u,oe[2]+z*u)}}n.addGroup(Q,i.length/3-Q,0)}function $(){const Q=i.length/3;let re=0;te(q,re),re+=q.length;for(let oe=0,N=L.length;oe<N;oe++){const de=L[oe];te(de,re),re+=de.length}n.addGroup(Q,i.length/3-Q,1)}function te(Q,re){let oe=Q.length;for(;--oe>=0;){const N=oe;let de=oe-1;de<0&&(de=Q.length-1);for(let Be=0,Ue=u+p*2;Be<Ue;Be++){const Ce=z*Be,Ze=z*(Be+1),U=re+N+Ce,at=re+de+Ce,He=re+de+Ze,R=re+N+Ze;xe(U,at,He,R)}}}function me(Q,re,oe){l.push(Q),l.push(re),l.push(oe)}function Ge(Q,re,oe){Le(Q),Le(re),Le(oe);const N=i.length/3,de=M.generateTopUV(n,i,N-3,N-2,N-1);Ne(de[0]),Ne(de[1]),Ne(de[2])}function xe(Q,re,oe,N){Le(Q),Le(re),Le(N),Le(re),Le(oe),Le(N);const de=i.length/3,Be=M.generateSideWallUV(n,i,de-6,de-3,de-2,de-1);Ne(Be[0]),Ne(Be[1]),Ne(Be[3]),Ne(Be[1]),Ne(Be[2]),Ne(Be[3])}function Le(Q){i.push(l[Q*3+0]),i.push(l[Q*3+1]),i.push(l[Q*3+2])}function Ne(Q){s.push(Q.x),s.push(Q.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return p2(t,n,e)}static fromJSON(e,t){const n=[];for(let s=0,a=e.shapes.length;s<a;s++){const o=t[e.shapes[s]];n.push(o)}const i=e.options.extrudePath;return i!==void 0&&(e.options.extrudePath=new Ph[i.type]().fromJSON(i)),new Rc(n,e.options)}}const d2={generateTopUV:function(r,e,t,n,i){const s=e[t*3],a=e[t*3+1],o=e[n*3],l=e[n*3+1],c=e[i*3],u=e[i*3+1];return[new he(s,a),new he(o,l),new he(c,u)]},generateSideWallUV:function(r,e,t,n,i,s){const a=e[t*3],o=e[t*3+1],l=e[t*3+2],c=e[n*3],u=e[n*3+1],d=e[n*3+2],h=e[i*3],f=e[i*3+1],_=e[i*3+2],g=e[s*3],p=e[s*3+1],m=e[s*3+2];return Math.abs(o-u)<Math.abs(a-c)?[new he(a,1-l),new he(c,1-d),new he(h,1-_),new he(g,1-m)]:[new he(o,1-l),new he(u,1-d),new he(f,1-_),new he(p,1-m)]}};function p2(r,e,t){if(t.shapes=[],Array.isArray(r))for(let n=0,i=r.length;n<i;n++){const s=r[n];t.shapes.push(s.uuid)}else t.shapes.push(r.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}class Of extends If{constructor(e=1,t=0){const n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],i=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,i,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new Of(e.radius,e.detail)}}class Wr extends Vt{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const s=e/2,a=t/2,o=Math.floor(n),l=Math.floor(i),c=o+1,u=l+1,d=e/o,h=t/l,f=[],_=[],g=[],p=[];for(let m=0;m<u;m++){const M=m*h-a;for(let w=0;w<c;w++){const v=w*d-s;_.push(v,-M,0),g.push(0,0,1),p.push(w/o),p.push(1-m/l)}}for(let m=0;m<l;m++)for(let M=0;M<o;M++){const w=M+c*m,v=M+c*(m+1),y=M+1+c*(m+1),T=M+1+c*m;f.push(w,v,T),f.push(v,y,T)}this.setIndex(f),this.setAttribute("position",new mt(_,3)),this.setAttribute("normal",new mt(g,3)),this.setAttribute("uv",new mt(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Wr(e.width,e.height,e.widthSegments,e.heightSegments)}}class Ff extends Vt{constructor(e=new ko([new he(0,.5),new he(-.5,-.5),new he(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};const n=[],i=[],s=[],a=[];let o=0,l=0;if(Array.isArray(e)===!1)c(e);else for(let u=0;u<e.length;u++)c(e[u]),this.addGroup(o,l,u),o+=l,l=0;this.setIndex(n),this.setAttribute("position",new mt(i,3)),this.setAttribute("normal",new mt(s,3)),this.setAttribute("uv",new mt(a,2));function c(u){const d=i.length/3,h=u.extractPoints(t);let f=h.shape;const _=h.holes;Wi.isClockWise(f)===!1&&(f=f.reverse());for(let p=0,m=_.length;p<m;p++){const M=_[p];Wi.isClockWise(M)===!0&&(_[p]=M.reverse())}const g=Wi.triangulateShape(f,_);for(let p=0,m=_.length;p<m;p++){const M=_[p];f=f.concat(M)}for(let p=0,m=f.length;p<m;p++){const M=f[p];i.push(M.x,M.y,0),s.push(0,0,1),a.push(M.x,M.y)}for(let p=0,m=g.length;p<m;p++){const M=g[p],w=M[0]+d,v=M[1]+d,y=M[2]+d;n.push(w,v,y),l+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes;return m2(t,e)}static fromJSON(e,t){const n=[];for(let i=0,s=e.shapes.length;i<s;i++){const a=t[e.shapes[i]];n.push(a)}return new Ff(n,e.curveSegments)}}function m2(r,e){if(e.shapes=[],Array.isArray(r))for(let t=0,n=r.length;t<n;t++){const i=r[t];e.shapes.push(i.uuid)}else e.shapes.push(r.uuid);return e}class Go extends Vt{constructor(e=1,t=32,n=16,i=0,s=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:s,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const l=Math.min(a+o,Math.PI);let c=0;const u=[],d=new O,h=new O,f=[],_=[],g=[],p=[];for(let m=0;m<=n;m++){const M=[],w=m/n,v=a+w*o,y=e*Math.cos(v),T=Math.sqrt(e*e-y*y);let A=0;m===0&&a===0?A=.5/t:m===n&&l===Math.PI&&(A=-.5/t);for(let x=0;x<=t;x++){const b=x/t,C=i+b*s;d.x=-T*Math.cos(C),d.y=y,d.z=T*Math.sin(C),_.push(d.x,d.y,d.z),h.copy(d).normalize(),g.push(h.x,h.y,h.z),p.push(b+A,1-w),M.push(c++)}u.push(M)}for(let m=0;m<n;m++)for(let M=0;M<t;M++){const w=u[m][M+1],v=u[m][M],y=u[m+1][M],T=u[m+1][M+1];(m!==0||a>0)&&f.push(w,v,T),(m!==n-1||l<Math.PI)&&f.push(v,y,T)}this.setIndex(f),this.setAttribute("position",new mt(_,3)),this.setAttribute("normal",new mt(g,3)),this.setAttribute("uv",new mt(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Go(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class fc extends Vt{constructor(e=1,t=.4,n=12,i=48,s=Math.PI*2,a=0,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:i,arc:s,thetaStart:a,thetaLength:o},n=Math.floor(n),i=Math.floor(i);const l=[],c=[],u=[],d=[],h=new O,f=new O,_=new O;for(let g=0;g<=n;g++){const p=a+g/n*o;for(let m=0;m<=i;m++){const M=m/i*s;f.x=(e+t*Math.cos(p))*Math.cos(M),f.y=(e+t*Math.cos(p))*Math.sin(M),f.z=t*Math.sin(p),c.push(f.x,f.y,f.z),h.x=e*Math.cos(M),h.y=e*Math.sin(M),_.subVectors(f,h).normalize(),u.push(_.x,_.y,_.z),d.push(m/i),d.push(g/n)}}for(let g=1;g<=n;g++)for(let p=1;p<=i;p++){const m=(i+1)*g+p-1,M=(i+1)*(g-1)+p-1,w=(i+1)*(g-1)+p,v=(i+1)*g+p;l.push(m,M,v),l.push(M,w,v)}this.setIndex(l),this.setAttribute("position",new mt(c,3)),this.setAttribute("normal",new mt(u,3)),this.setAttribute("uv",new mt(d,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new fc(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc,e.thetaStart,e.thetaLength)}}function ma(r){const e={};for(const t in r){e[t]={};for(const n in r[t]){const i=r[t][n];if(up(i))i.isRenderTargetTexture?(Ke("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone();else if(Array.isArray(i))if(up(i[0])){const s=[];for(let a=0,o=i.length;a<o;a++)s[a]=i[a].clone();e[t][n]=s}else e[t][n]=i.slice();else e[t][n]=i}}return e}function qn(r){const e={};for(let t=0;t<r.length;t++){const n=ma(r[t]);for(const i in n)e[i]=n[i]}return e}function up(r){return r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)}function _2(r){const e=[];for(let t=0;t<r.length;t++)e.push(r[t].clone());return e}function rm(r){const e=r.getRenderTarget();return e===null?r.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:ft.workingColorSpace}const Do={clone:ma,merge:qn};var g2=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,x2=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class dn extends ws{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=g2,this.fragmentShader=x2,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ma(e.uniforms),this.uniformsGroups=_2(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const a=this.uniforms[i].value;a&&a.isTexture?t.uniforms[i]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[i]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[i]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[i]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[i]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[i]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[i]={type:"m4",value:a.toArray()}:t.uniforms[i]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(const n in e.uniforms){const i=e.uniforms[n];switch(this.uniforms[n]={},i.type){case"t":this.uniforms[n].value=t[i.value]||null;break;case"c":this.uniforms[n].value=new Je().setHex(i.value);break;case"v2":this.uniforms[n].value=new he().fromArray(i.value);break;case"v3":this.uniforms[n].value=new O().fromArray(i.value);break;case"v4":this.uniforms[n].value=new Bt().fromArray(i.value);break;case"m3":this.uniforms[n].value=new et().fromArray(i.value);break;case"m4":this.uniforms[n].value=new bt().fromArray(i.value);break;default:this.uniforms[n].value=i.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const n in e.extensions)this.extensions[n]=e.extensions[n];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class sm extends dn{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class pn extends ws{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Je(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Je(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ch,this.normalScale=new he(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new qr,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class qf extends pn{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new he(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return st(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Je(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Je(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Je(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(e){this._retroreflectivity>0!=e>0&&this.version++,this._retroreflectivity=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.retroreflectivity=e.retroreflectivity,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class v2 extends ws{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=D_,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class S2 extends ws{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class Vo extends Gt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Je(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}}class M2 extends Vo{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Gt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Je(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){const t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}}const xu=new bt,hp=new O,fp=new O;class Bf{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new he(512,512),this.mapType=li,this.map=null,this.mapPass=null,this.matrix=new bt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Cf,this._frameExtents=new he(1,1),this._viewportCount=1,this._viewports=[new Bt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera;hp.setFromMatrixPosition(e.matrixWorld),t.position.copy(hp),fp.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(fp),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,n,i){xu.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),n.setFromProjectionMatrix(xu,e.coordinateSystem,e.reversedDepth);const s=this._frameExtents,a=i?i.z/s.x:1,o=i?i.w/s.y:1,l=i?i.x/s.x:0,c=i?i.y/s.y:0;e.coordinateSystem===wo||e.reversedDepth?t.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,1,0,0,0,0,1):t.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,.5,.5,0,0,0,1),t.multiply(xu)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const vl=new O,Sl=new Ea,qi=new O;class am extends Gt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new bt,this.projectionMatrix=new bt,this.projectionMatrixInverse=new bt,this.coordinateSystem=Hi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(vl,Sl,qi),qi.x===1&&qi.y===1&&qi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(vl,Sl,qi.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(vl,Sl,qi),qi.x===1&&qi.y===1&&qi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(vl,Sl,qi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const Tr=new O,dp=new he,pp=new he;class Yn extends am{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=da*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(io*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return da*2*Math.atan(Math.tan(io*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Tr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Tr.x,Tr.y).multiplyScalar(-e/Tr.z),Tr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Tr.x,Tr.y).multiplyScalar(-e/Tr.z)}getViewSize(e,t){return this.getViewBounds(e,dp,pp),t.subVectors(pp,dp)}setViewOffset(e,t,n,i,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(io*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,s=-.5*i;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*i/l,t-=a.offsetY*n/c,i*=a.width/l,n*=a.height/c}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class y2 extends Bf{constructor(){super(new Yn(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){const t=this.camera,n=da*2*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height*this.aspect,s=e.distance||t.far;(n!==t.fov||i!==t.aspect||s!==t.far)&&(t.fov=n,t.aspect=i,t.far=s,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this.aspect=e.aspect,this}toJSON(){const e=super.toJSON();return e.focus=this.focus,e.aspect=this.aspect,e}}class b2 extends Vo{constructor(e,t,n=0,i=Math.PI/3,s=0,a=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Gt.DEFAULT_UP),this.updateMatrix(),this.target=new Gt,this.distance=n,this.angle=i,this.penumbra=s,this.decay=a,this.map=null,this.shadow=new y2}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.map=e.map,this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.distance=this.distance,t.object.angle=this.angle,t.object.decay=this.decay,t.object.penumbra=this.penumbra,t.object.target=this.target.uuid,this.map&&this.map.isTexture&&(t.object.map=this.map.toJSON(e).uuid),t.object.shadow=this.shadow.toJSON(),t}}class T2 extends Bf{constructor(){super(new Yn(90,1,.5,500)),this.isPointLightShadow=!0}}class E2 extends Vo{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new T2}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}}class Pc extends am{constructor(e=-1,t=1,n=1,i=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let s=n-e,a=n+e,o=i+t,l=i-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class w2 extends Bf{constructor(){super(new Pc(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class A2 extends Vo{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Gt.DEFAULT_UP),this.updateMatrix(),this.target=new Gt,this.shadow=new w2}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}}class C2 extends Vo{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}const Vs=-90,Hs=1;class R2 extends Gt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new Yn(Vs,Hs,e,t);i.layers=this.layers,this.add(i);const s=new Yn(Vs,Hs,e,t);s.layers=this.layers,this.add(s);const a=new Yn(Vs,Hs,e,t);a.layers=this.layers,this.add(a);const o=new Yn(Vs,Hs,e,t);o.layers=this.layers,this.add(o);const l=new Yn(Vs,Hs,e,t);l.layers=this.layers,this.add(l);const c=new Yn(Vs,Hs,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,i,s,a,o,l]=t;for(const c of t)this.remove(c);if(e===Hi)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===wo)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,l,c,u]=this.children,d=e.getRenderTarget(),h=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;const g=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let p=!1;e.isWebGLRenderer===!0?p=e.state.buffers.depth.getReversed():p=e.reversedDepthBuffer,e.setRenderTarget(n,0,i),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,s),e.setRenderTarget(n,1,i),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,2,i),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,3,i),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(n,4,i),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),n.texture.generateMipmaps=g,e.setRenderTarget(n,5,i),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,u),e.setRenderTarget(d,h,f),e.xr.enabled=_,n.texture.needsPMREMUpdate=!0}}class P2 extends Yn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class D2{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=performance.now(),this._delta=0,this._elapsed=0,this._timescale=1,this._document=null,this._pageVisibilityHandler=null}connect(e){this._document=e,e.hidden!==void 0&&(this._pageVisibilityHandler=L2.bind(this),e.addEventListener("visibilitychange",this._pageVisibilityHandler,!1))}disconnect(){this._pageVisibilityHandler!==null&&(this._document.removeEventListener("visibilitychange",this._pageVisibilityHandler),this._pageVisibilityHandler=null),this._document=null}getDelta(){return this._delta/1e3}getElapsed(){return this._elapsed/1e3}getTimescale(){return this._timescale}setTimescale(e){return this._timescale=e,this}reset(){return this._currentTime=performance.now()-this._startTime,this}dispose(){this.disconnect()}update(e){return this._pageVisibilityHandler!==null&&this._document.hidden===!0?this._delta=0:(this._previousTime=this._currentTime,this._currentTime=(e!==void 0?e:performance.now())-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta),this}}function L2(){this._document.hidden===!1&&this.reset()}class I2{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1,Ke("Clock: This module has been deprecated. Please use THREE.Timer instead.")}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=performance.now();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}const Cd=class Cd{constructor(e,t,n,i){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,i)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,i){const s=this.elements;return s[0]=e,s[2]=t,s[1]=n,s[3]=i,this}};Cd.prototype.isMatrix2=!0;let mp=Cd;const _p=new he;class N2{constructor(e=new he(1/0,1/0),t=new he(-1/0,-1/0)){this.isBox2=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=_p.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=1/0,this.max.x=this.max.y=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y}getCenter(e){return this.isEmpty()?e.set(0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,_p).distanceTo(e)}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}class U2{constructor(){this.type="ShapePath",this.color=new Je,this.subPaths=[],this.currentPath=null,this.userData={}}moveTo(e,t){return this.currentPath=new hc,this.subPaths.push(this.currentPath),this.currentPath.moveTo(e,t),this}lineTo(e,t){return this.currentPath.lineTo(e,t),this}quadraticCurveTo(e,t,n,i){return this.currentPath.quadraticCurveTo(e,t,n,i),this}bezierCurveTo(e,t,n,i,s,a){return this.currentPath.bezierCurveTo(e,t,n,i,s,a),this}splineThru(e){return this.currentPath.splineThru(e),this}toShapes(){function e(l,c){let u=!1;const d=c.length;for(let h=0,f=d-1;h<d;f=h++){const _=c[h],g=c[f];_.y>l.y!=g.y>l.y&&l.x<(g.x-_.x)*(l.y-_.y)/(g.y-_.y)+_.x&&(u=!u)}return u}function t(l,c){const u=c.getCenter(new he);if(e(u,l))return u;const d=u.y,h=[],f=l.length;for(let _=0;_<f;_++){const g=l[_],p=l[(_+1)%f];if(g.y>d!=p.y>d){const m=g.x+(d-g.y)*(p.x-g.x)/(p.y-g.y);h.push(m)}}return h.length>1&&(h.sort((_,g)=>_-g),u.x=(h[0]+h[1])/2),u}let n=this.userData.style&&this.userData.style.fillRule||"nonzero";n!=="nonzero"&&n!=="evenodd"&&(Ke('Fill-rule "'+n+'" is not supported, falling back to "nonzero".'),n="nonzero");const i=n==="nonzero"?(l=>l!==0):(l=>(l&1)!==0),s=[];for(const l of this.subPaths){const c=l.getPoints();if(c.length<3)continue;const u=Wi.area(c);if(u===0)continue;const d=new N2;for(let h=0;h<c.length;h++)d.expandByPoint(c[h]);s.push({subPath:l,points:c,boundingBox:d,interiorPoint:t(c,d),absArea:Math.abs(u),winding:u<0?-1:1,container:null,exclude:!1,role:null})}s.sort((l,c)=>c.absArea-l.absArea);for(let l=0;l<s.length;l++){const c=s[l];let u=0;for(let d=l-1;d>=0;d--){const h=s[d];if(h.boundingBox.containsBox(c.boundingBox)&&e(c.interiorPoint,h.points)){c.container=h.exclude?h.container:h,u=h.winding,c.winding+=u;break}}i(c.winding)===i(u)&&(c.exclude=!0)}for(const l of s)l.exclude||(l.role=l.container===null||l.container.role==="hole"?"outer":"hole");const a=[],o=new Map;for(const l of s){if(l.exclude||l.role!=="outer")continue;const c=new ko;c.curves=l.subPath.curves,a.push(c),o.set(l,c)}for(const l of s){if(l.exclude||l.role!=="hole")continue;const c=o.get(l.container);if(!c)continue;const u=new hc;u.curves=l.subPath.curves,c.holes.push(u)}return a}}function gp(r,e,t,n){const i=O2(n);switch(t){case F0:return r*e;case xf:return r*e/i.components*i.byteLength;case vf:return r*e/i.components*i.byteLength;case _s:return r*e*2/i.components*i.byteLength;case Sf:return r*e*2/i.components*i.byteLength;case q0:return r*e*3/i.components*i.byteLength;case Ui:return r*e*4/i.components*i.byteLength;case Mf:return r*e*4/i.components*i.byteLength;case zl:case kl:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case Gl:case Vl:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case ju:case th:return Math.max(r,16)*Math.max(e,8)/4;case Qu:case eh:return Math.max(r,8)*Math.max(e,8)/2;case nh:case ih:case sh:case ah:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case rh:case rc:case oh:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case lh:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case ch:return Math.floor((r+4)/5)*Math.floor((e+3)/4)*16;case uh:return Math.floor((r+4)/5)*Math.floor((e+4)/5)*16;case hh:return Math.floor((r+5)/6)*Math.floor((e+4)/5)*16;case fh:return Math.floor((r+5)/6)*Math.floor((e+5)/6)*16;case dh:return Math.floor((r+7)/8)*Math.floor((e+4)/5)*16;case ph:return Math.floor((r+7)/8)*Math.floor((e+5)/6)*16;case mh:return Math.floor((r+7)/8)*Math.floor((e+7)/8)*16;case _h:return Math.floor((r+9)/10)*Math.floor((e+4)/5)*16;case gh:return Math.floor((r+9)/10)*Math.floor((e+5)/6)*16;case xh:return Math.floor((r+9)/10)*Math.floor((e+7)/8)*16;case vh:return Math.floor((r+9)/10)*Math.floor((e+9)/10)*16;case Sh:return Math.floor((r+11)/12)*Math.floor((e+9)/10)*16;case Mh:return Math.floor((r+11)/12)*Math.floor((e+11)/12)*16;case yh:case bh:case Th:return Math.ceil(r/4)*Math.ceil(e/4)*16;case Eh:case wh:return Math.ceil(r/4)*Math.ceil(e/4)*8;case sc:case Ah:return Math.ceil(r/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function O2(r){switch(r){case li:case I0:return{byteLength:1,components:1};case To:case N0:case $n:return{byteLength:2,components:1};case _f:case gf:return{byteLength:2,components:4};case Qi:case mf:case Ni:return{byteLength:4,components:1};case U0:case O0:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${r}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:lf}}));typeof window<"u"&&(window.__THREE__?Ke("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=lf);function om(){let r=null,e=!1,t=null,n=null;function i(s,a){n=r.requestAnimationFrame(i),t(s,a)}return{start:function(){e!==!0&&t!==null&&r!==null&&(n=r.requestAnimationFrame(i),e=!0)},stop:function(){r!==null&&r.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){r=s}}}function F2(r){const e=new WeakMap;function t(o,l){const c=o.array,u=o.usage,d=c.byteLength,h=r.createBuffer();r.bindBuffer(l,h),r.bufferData(l,c,u),o.onUploadCallback();let f;if(c instanceof Float32Array)f=r.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)f=r.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?f=r.HALF_FLOAT:f=r.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=r.SHORT;else if(c instanceof Uint32Array)f=r.UNSIGNED_INT;else if(c instanceof Int32Array)f=r.INT;else if(c instanceof Int8Array)f=r.BYTE;else if(c instanceof Uint8Array)f=r.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:h,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:d}}function n(o,l,c){const u=l.array,d=l.updateRanges;if(r.bindBuffer(c,o),d.length===0)r.bufferSubData(c,0,u);else{d.sort((f,_)=>f.start-_.start);let h=0;for(let f=1;f<d.length;f++){const _=d[h],g=d[f];g.start<=_.start+_.count+1?_.count=Math.max(_.count,g.start+g.count-_.start):(++h,d[h]=g)}d.length=h+1;for(let f=0,_=d.length;f<_;f++){const g=d[f];r.bufferSubData(c,g.start*u.BYTES_PER_ELEMENT,u,g.start,g.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(r.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const u=e.get(o);(!u||u.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:i,remove:s,update:a}}var q2=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,B2=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,z2=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,k2=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,G2=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,V2=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,H2=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,W2=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,X2=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,Y2=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Z2=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,$2=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,J2=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,K2=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Q2=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,j2=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,ex=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,tx=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,nx=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,ix=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,rx=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,sx=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,ax=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,ox=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,lx=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,cx=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,ux=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,hx=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,fx=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,dx=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,px="gl_FragColor = linearToOutputTexel( gl_FragColor );",mx=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,_x=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,gx=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,xx=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,vx=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Sx=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Mx=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,yx=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,bx=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Tx=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Ex=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,wx=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Ax=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Cx=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Rx=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,Px=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureCubeUV( envMap, envMapRotation * retroVec, roughness );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_CUBE_UV
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,Dx=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Lx=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Ix=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Nx=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Ux=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Ox=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Fx=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,qx=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Bx=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,zx=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,kx=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Gx=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Vx=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Hx=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Wx=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Xx=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Yx=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Zx=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,$x=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Jx=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Kx=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Qx=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,jx=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,e3=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,t3=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,n3=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,i3=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,r3=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,s3=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,a3=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,o3=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,l3=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,c3=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,u3=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,h3=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,f3=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,d3=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,p3=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,m3=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,_3=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,g3=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,x3=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,v3=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,S3=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,M3=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,y3=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,b3=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,T3=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,E3=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,w3=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,A3=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,C3=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,R3=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,P3=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,D3=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,L3=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,I3=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,N3=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,U3=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,O3=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,F3=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const q3=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,B3=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,z3=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,k3=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,G3=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,V3=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,H3=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,W3=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,X3=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Y3=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,Z3=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,$3=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,J3=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,K3=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Q3=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,j3=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ev=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,tv=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,nv=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,iv=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,rv=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,sv=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,av=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,ov=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,lv=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,cv=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,uv=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,hv=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,fv=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,dv=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,pv=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,mv=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,_v=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,gv=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,it={alphahash_fragment:q2,alphahash_pars_fragment:B2,alphamap_fragment:z2,alphamap_pars_fragment:k2,alphatest_fragment:G2,alphatest_pars_fragment:V2,aomap_fragment:H2,aomap_pars_fragment:W2,batching_pars_vertex:X2,batching_vertex:Y2,begin_vertex:Z2,beginnormal_vertex:$2,bsdfs:J2,iridescence_fragment:K2,bumpmap_pars_fragment:Q2,clipping_planes_fragment:j2,clipping_planes_pars_fragment:ex,clipping_planes_pars_vertex:tx,clipping_planes_vertex:nx,color_fragment:ix,color_pars_fragment:rx,color_pars_vertex:sx,color_vertex:ax,common:ox,cube_uv_reflection_fragment:lx,defaultnormal_vertex:cx,displacementmap_pars_vertex:ux,displacementmap_vertex:hx,emissivemap_fragment:fx,emissivemap_pars_fragment:dx,colorspace_fragment:px,colorspace_pars_fragment:mx,envmap_fragment:_x,envmap_common_pars_fragment:gx,envmap_pars_fragment:xx,envmap_pars_vertex:vx,envmap_physical_pars_fragment:Px,envmap_vertex:Sx,fog_vertex:Mx,fog_pars_vertex:yx,fog_fragment:bx,fog_pars_fragment:Tx,gradientmap_pars_fragment:Ex,lightmap_pars_fragment:wx,lights_lambert_fragment:Ax,lights_lambert_pars_fragment:Cx,lights_pars_begin:Rx,lights_toon_fragment:Dx,lights_toon_pars_fragment:Lx,lights_phong_fragment:Ix,lights_phong_pars_fragment:Nx,lights_physical_fragment:Ux,lights_physical_pars_fragment:Ox,lights_fragment_begin:Fx,lights_fragment_maps:qx,lights_fragment_end:Bx,lightprobes_pars_fragment:zx,logdepthbuf_fragment:kx,logdepthbuf_pars_fragment:Gx,logdepthbuf_pars_vertex:Vx,logdepthbuf_vertex:Hx,map_fragment:Wx,map_pars_fragment:Xx,map_particle_fragment:Yx,map_particle_pars_fragment:Zx,metalnessmap_fragment:$x,metalnessmap_pars_fragment:Jx,morphinstance_vertex:Kx,morphcolor_vertex:Qx,morphnormal_vertex:jx,morphtarget_pars_vertex:e3,morphtarget_vertex:t3,normal_fragment_begin:n3,normal_fragment_maps:i3,normal_pars_fragment:r3,normal_pars_vertex:s3,normal_vertex:a3,normalmap_pars_fragment:o3,clearcoat_normal_fragment_begin:l3,clearcoat_normal_fragment_maps:c3,clearcoat_pars_fragment:u3,iridescence_pars_fragment:h3,opaque_fragment:f3,packing:d3,premultiplied_alpha_fragment:p3,project_vertex:m3,dithering_fragment:_3,dithering_pars_fragment:g3,roughnessmap_fragment:x3,roughnessmap_pars_fragment:v3,shadowmap_pars_fragment:S3,shadowmap_pars_vertex:M3,shadowmap_vertex:y3,shadowmask_pars_fragment:b3,skinbase_vertex:T3,skinning_pars_vertex:E3,skinning_vertex:w3,skinnormal_vertex:A3,specularmap_fragment:C3,specularmap_pars_fragment:R3,tonemapping_fragment:P3,tonemapping_pars_fragment:D3,transmission_fragment:L3,transmission_pars_fragment:I3,uv_pars_fragment:N3,uv_pars_vertex:U3,uv_vertex:O3,worldpos_vertex:F3,background_vert:q3,background_frag:B3,backgroundCube_vert:z3,backgroundCube_frag:k3,cube_vert:G3,cube_frag:V3,depth_vert:H3,depth_frag:W3,distance_vert:X3,distance_frag:Y3,equirect_vert:Z3,equirect_frag:$3,linedashed_vert:J3,linedashed_frag:K3,meshbasic_vert:Q3,meshbasic_frag:j3,meshlambert_vert:ev,meshlambert_frag:tv,meshmatcap_vert:nv,meshmatcap_frag:iv,meshnormal_vert:rv,meshnormal_frag:sv,meshphong_vert:av,meshphong_frag:ov,meshphysical_vert:lv,meshphysical_frag:cv,meshtoon_vert:uv,meshtoon_frag:hv,points_vert:fv,points_frag:dv,shadow_vert:pv,shadow_frag:mv,sprite_vert:_v,sprite_frag:gv},Ee={common:{diffuse:{value:new Je(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new et},alphaMap:{value:null},alphaMapTransform:{value:new et},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new et}},envmap:{envMap:{value:null},envMapRotation:{value:new et},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new et}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new et}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new et},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new et},normalScale:{value:new he(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new et},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new et}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new et}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new et}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Je(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new O},probesMax:{value:new O},probesResolution:{value:new O}},points:{diffuse:{value:new Je(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new et},alphaTest:{value:0},uvTransform:{value:new et}},sprite:{diffuse:{value:new Je(16777215)},opacity:{value:1},center:{value:new he(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new et},alphaMap:{value:null},alphaMapTransform:{value:new et},alphaTest:{value:0}}},Gi={basic:{uniforms:qn([Ee.common,Ee.specularmap,Ee.envmap,Ee.aomap,Ee.lightmap,Ee.fog]),vertexShader:it.meshbasic_vert,fragmentShader:it.meshbasic_frag},lambert:{uniforms:qn([Ee.common,Ee.specularmap,Ee.envmap,Ee.aomap,Ee.lightmap,Ee.emissivemap,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,Ee.fog,Ee.lights,{emissive:{value:new Je(0)},envMapIntensity:{value:1}}]),vertexShader:it.meshlambert_vert,fragmentShader:it.meshlambert_frag},phong:{uniforms:qn([Ee.common,Ee.specularmap,Ee.envmap,Ee.aomap,Ee.lightmap,Ee.emissivemap,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,Ee.fog,Ee.lights,{emissive:{value:new Je(0)},specular:{value:new Je(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:it.meshphong_vert,fragmentShader:it.meshphong_frag},standard:{uniforms:qn([Ee.common,Ee.envmap,Ee.aomap,Ee.lightmap,Ee.emissivemap,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,Ee.roughnessmap,Ee.metalnessmap,Ee.fog,Ee.lights,{emissive:{value:new Je(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:it.meshphysical_vert,fragmentShader:it.meshphysical_frag},toon:{uniforms:qn([Ee.common,Ee.aomap,Ee.lightmap,Ee.emissivemap,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,Ee.gradientmap,Ee.fog,Ee.lights,{emissive:{value:new Je(0)}}]),vertexShader:it.meshtoon_vert,fragmentShader:it.meshtoon_frag},matcap:{uniforms:qn([Ee.common,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,Ee.fog,{matcap:{value:null}}]),vertexShader:it.meshmatcap_vert,fragmentShader:it.meshmatcap_frag},points:{uniforms:qn([Ee.points,Ee.fog]),vertexShader:it.points_vert,fragmentShader:it.points_frag},dashed:{uniforms:qn([Ee.common,Ee.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:it.linedashed_vert,fragmentShader:it.linedashed_frag},depth:{uniforms:qn([Ee.common,Ee.displacementmap]),vertexShader:it.depth_vert,fragmentShader:it.depth_frag},normal:{uniforms:qn([Ee.common,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,{opacity:{value:1}}]),vertexShader:it.meshnormal_vert,fragmentShader:it.meshnormal_frag},sprite:{uniforms:qn([Ee.sprite,Ee.fog]),vertexShader:it.sprite_vert,fragmentShader:it.sprite_frag},background:{uniforms:{uvTransform:{value:new et},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:it.background_vert,fragmentShader:it.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new et}},vertexShader:it.backgroundCube_vert,fragmentShader:it.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:it.cube_vert,fragmentShader:it.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:it.equirect_vert,fragmentShader:it.equirect_frag},distance:{uniforms:qn([Ee.common,Ee.displacementmap,{referencePosition:{value:new O},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:it.distance_vert,fragmentShader:it.distance_frag},shadow:{uniforms:qn([Ee.lights,Ee.fog,{color:{value:new Je(0)},opacity:{value:1}}]),vertexShader:it.shadow_vert,fragmentShader:it.shadow_frag}};Gi.physical={uniforms:qn([Gi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new et},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new et},clearcoatNormalScale:{value:new he(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new et},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new et},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new et},sheen:{value:0},sheenColor:{value:new Je(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new et},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new et},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new et},transmissionSamplerSize:{value:new he},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new et},attenuationDistance:{value:0},attenuationColor:{value:new Je(0)},specularColor:{value:new Je(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new et},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new et},anisotropyVector:{value:new he},anisotropyMap:{value:null},anisotropyMapTransform:{value:new et}}]),vertexShader:it.meshphysical_vert,fragmentShader:it.meshphysical_frag};const Ml={r:0,b:0,g:0},xv=new bt,lm=new et;lm.set(-1,0,0,0,1,0,0,0,1);function vv(r,e,t,n,i,s){const a=new Je(0);let o=i===!0?0:1,l,c,u=null,d=0,h=null;function f(M){let w=M.isScene===!0?M.background:null;if(w&&w.isTexture){const v=M.backgroundBlurriness>0;w=e.get(w,v)}return w}function _(M){let w=!1;const v=f(M);v===null?p(a,o):v&&v.isColor&&(p(v,1),w=!0);const y=r.xr.getEnvironmentBlendMode();y==="additive"?t.buffers.color.setClear(0,0,0,1,s):y==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,s),(r.autoClear||w)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function g(M,w){const v=f(w);v&&(v.isCubeTexture||v.mapping===Cc)?(c===void 0&&(c=new tt(new Ai(1,1,1),new dn({name:"BackgroundCubeMaterial",uniforms:ma(Gi.backgroundCube.uniforms),vertexShader:Gi.backgroundCube.vertexShader,fragmentShader:Gi.backgroundCube.fragmentShader,side:Zn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(y,T,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=v,c.material.uniforms.backgroundBlurriness.value=w.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(xv.makeRotationFromEuler(w.backgroundRotation)).transpose(),v.isCubeTexture&&v.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(lm),c.material.toneMapped=ft.getTransfer(v.colorSpace)!==vt,(u!==v||d!==v.version||h!==r.toneMapping)&&(c.material.needsUpdate=!0,u=v,d=v.version,h=r.toneMapping),c.layers.enableAll(),M.unshift(c,c.geometry,c.material,0,0,null)):v&&v.isTexture&&(l===void 0&&(l=new tt(new Wr(2,2),new dn({name:"BackgroundMaterial",uniforms:ma(Gi.background.uniforms),vertexShader:Gi.background.vertexShader,fragmentShader:Gi.background.fragmentShader,side:ps,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=v,l.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,l.material.toneMapped=ft.getTransfer(v.colorSpace)!==vt,v.matrixAutoUpdate===!0&&v.updateMatrix(),l.material.uniforms.uvTransform.value.copy(v.matrix),(u!==v||d!==v.version||h!==r.toneMapping)&&(l.material.needsUpdate=!0,u=v,d=v.version,h=r.toneMapping),l.layers.enableAll(),M.unshift(l,l.geometry,l.material,0,0,null))}function p(M,w){M.getRGB(Ml,rm(r)),t.buffers.color.setClear(Ml.r,Ml.g,Ml.b,w,s)}function m(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(M,w=1){a.set(M),o=w,p(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(M){o=M,p(a,o)},render:_,addToRenderList:g,dispose:m}}function Sv(r,e){const t=r.getParameter(r.MAX_VERTEX_ATTRIBS),n={},i=h(null);let s=i,a=!1;function o(L,D,k,I,q){let X=!1;const z=d(L,I,k,D);s!==z&&(s=z,c(s.object)),X=f(L,I,k,q),X&&_(L,I,k,q),q!==null&&e.update(q,r.ELEMENT_ARRAY_BUFFER),(X||a)&&(a=!1,v(L,D,k,I),q!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,e.get(q).buffer))}function l(){return r.createVertexArray()}function c(L){return r.bindVertexArray(L)}function u(L){return r.deleteVertexArray(L)}function d(L,D,k,I){const q=I.wireframe===!0;let X=n[D.id];X===void 0&&(X={},n[D.id]=X);const z=L.isInstancedMesh===!0?L.id:0;let j=X[z];j===void 0&&(j={},X[z]=j);let Y=j[k.id];Y===void 0&&(Y={},j[k.id]=Y);let P=Y[q];return P===void 0&&(P=h(l()),Y[q]=P),P}function h(L){const D=[],k=[],I=[];for(let q=0;q<t;q++)D[q]=0,k[q]=0,I[q]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:D,enabledAttributes:k,attributeDivisors:I,object:L,attributes:{},index:null}}function f(L,D,k,I){const q=s.attributes,X=D.attributes;let z=0;const j=k.getAttributes();for(const Y in j)if(j[Y].location>=0){const K=q[Y];let we=X[Y];if(we===void 0&&(Y==="instanceMatrix"&&L.instanceMatrix&&(we=L.instanceMatrix),Y==="instanceColor"&&L.instanceColor&&(we=L.instanceColor)),K===void 0||K.attribute!==we||we&&K.data!==we.data)return!0;z++}return s.attributesNum!==z||s.index!==I}function _(L,D,k,I){const q={},X=D.attributes;let z=0;const j=k.getAttributes();for(const Y in j)if(j[Y].location>=0){let K=X[Y];K===void 0&&(Y==="instanceMatrix"&&L.instanceMatrix&&(K=L.instanceMatrix),Y==="instanceColor"&&L.instanceColor&&(K=L.instanceColor));const we={};we.attribute=K,K&&K.data&&(we.data=K.data),q[Y]=we,z++}s.attributes=q,s.attributesNum=z,s.index=I}function g(){const L=s.newAttributes;for(let D=0,k=L.length;D<k;D++)L[D]=0}function p(L){m(L,0)}function m(L,D){const k=s.newAttributes,I=s.enabledAttributes,q=s.attributeDivisors;k[L]=1,I[L]===0&&(r.enableVertexAttribArray(L),I[L]=1),q[L]!==D&&(r.vertexAttribDivisor(L,D),q[L]=D)}function M(){const L=s.newAttributes,D=s.enabledAttributes;for(let k=0,I=D.length;k<I;k++)D[k]!==L[k]&&(r.disableVertexAttribArray(k),D[k]=0)}function w(L,D,k,I,q,X,z){z===!0?r.vertexAttribIPointer(L,D,k,q,X):r.vertexAttribPointer(L,D,k,I,q,X)}function v(L,D,k,I){g();const q=I.attributes,X=k.getAttributes(),z=D.defaultAttributeValues;for(const j in X){const Y=X[j];if(Y.location>=0){let P=q[j];if(P===void 0&&(j==="instanceMatrix"&&L.instanceMatrix&&(P=L.instanceMatrix),j==="instanceColor"&&L.instanceColor&&(P=L.instanceColor)),P!==void 0){const K=P.normalized,we=P.itemSize,Te=e.get(P);if(Te===void 0)continue;const Ye=Te.buffer,We=Te.type,Qe=Te.bytesPerElement,$=We===r.INT||We===r.UNSIGNED_INT||P.gpuType===mf;if(P.isInterleavedBufferAttribute){const te=P.data,me=te.stride,Ge=P.offset;if(te.isInstancedInterleavedBuffer){for(let xe=0;xe<Y.locationSize;xe++)m(Y.location+xe,te.meshPerAttribute);L.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=te.meshPerAttribute*te.count)}else for(let xe=0;xe<Y.locationSize;xe++)p(Y.location+xe);r.bindBuffer(r.ARRAY_BUFFER,Ye);for(let xe=0;xe<Y.locationSize;xe++)w(Y.location+xe,we/Y.locationSize,We,K,me*Qe,(Ge+we/Y.locationSize*xe)*Qe,$)}else{if(P.isInstancedBufferAttribute){for(let te=0;te<Y.locationSize;te++)m(Y.location+te,P.meshPerAttribute);L.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=P.meshPerAttribute*P.count)}else for(let te=0;te<Y.locationSize;te++)p(Y.location+te);r.bindBuffer(r.ARRAY_BUFFER,Ye);for(let te=0;te<Y.locationSize;te++)w(Y.location+te,we/Y.locationSize,We,K,we*Qe,we/Y.locationSize*te*Qe,$)}}else if(z!==void 0){const K=z[j];if(K!==void 0)switch(K.length){case 2:r.vertexAttrib2fv(Y.location,K);break;case 3:r.vertexAttrib3fv(Y.location,K);break;case 4:r.vertexAttrib4fv(Y.location,K);break;default:r.vertexAttrib1fv(Y.location,K)}}}}M()}function y(){b();for(const L in n){const D=n[L];for(const k in D){const I=D[k];for(const q in I){const X=I[q];for(const z in X)u(X[z].object),delete X[z];delete I[q]}}delete n[L]}}function T(L){if(n[L.id]===void 0)return;const D=n[L.id];for(const k in D){const I=D[k];for(const q in I){const X=I[q];for(const z in X)u(X[z].object),delete X[z];delete I[q]}}delete n[L.id]}function A(L){for(const D in n){const k=n[D];for(const I in k){const q=k[I];if(q[L.id]===void 0)continue;const X=q[L.id];for(const z in X)u(X[z].object),delete X[z];delete q[L.id]}}}function x(L){for(const D in n){const k=n[D],I=L.isInstancedMesh===!0?L.id:0,q=k[I];if(q!==void 0){for(const X in q){const z=q[X];for(const j in z)u(z[j].object),delete z[j];delete q[X]}delete k[I],Object.keys(k).length===0&&delete n[D]}}}function b(){C(),a=!0,s!==i&&(s=i,c(s.object))}function C(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:o,reset:b,resetDefaultState:C,dispose:y,releaseStatesOfGeometry:T,releaseStatesOfObject:x,releaseStatesOfProgram:A,initAttributes:g,enableAttribute:p,disableUnusedAttributes:M}}function Mv(r,e,t){let n;function i(l){n=l}function s(l,c){r.drawArrays(n,l,c),t.update(c,n,1)}function a(l,c,u){u!==0&&(r.drawArraysInstanced(n,l,c,u),t.update(c,n,u))}function o(l,c,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,u);let h=0;for(let f=0;f<u;f++)h+=c[f];t.update(h,n,1)}this.setMode=i,this.render=s,this.renderInstances=a,this.renderMultiDraw=o}function yv(r,e,t,n){let i;function s(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const A=e.get("EXT_texture_filter_anisotropic");i=r.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function a(A){return!(A!==Ui&&n.convert(A)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(A){const x=A===$n&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(A!==li&&A!==Ni&&!x&&n.convert(A)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE))}function l(A){if(A==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const u=l(c);u!==c&&(Ke("WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const d=t.logarithmicDepthBuffer===!0,h=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&h===!1&&Ke("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const f=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),_=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),g=r.getParameter(r.MAX_TEXTURE_SIZE),p=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),m=r.getParameter(r.MAX_VERTEX_ATTRIBS),M=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),w=r.getParameter(r.MAX_VARYING_VECTORS),v=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),y=r.getParameter(r.MAX_SAMPLES),T=r.getParameter(r.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:d,reversedDepthBuffer:h,maxTextures:f,maxVertexTextures:_,maxTextureSize:g,maxCubemapSize:p,maxAttributes:m,maxVertexUniforms:M,maxVaryings:w,maxFragmentUniforms:v,maxSamples:y,samples:T}}function bv(r){const e=this;let t=null,n=0,i=!1,s=!1;const a=new wr,o=new et,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,h){const f=d.length!==0||h||n!==0||i;return i=h,n=d.length,f},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,h){t=u(d,h,0)},this.setState=function(d,h,f){const _=d.clippingPlanes,g=d.clipIntersection,p=d.clipShadows,m=r.get(d);if(!i||_===null||_.length===0||s&&!p)s?u(null):c();else{const M=s?0:n,w=M*4;let v=m.clippingState||null;l.value=v,v=u(_,h,w,f);for(let y=0;y!==w;++y)v[y]=t[y];m.clippingState=v,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=M}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(d,h,f,_){const g=d!==null?d.length:0;let p=null;if(g!==0){if(p=l.value,_!==!0||p===null){const m=f+g*4,M=h.matrixWorldInverse;o.getNormalMatrix(M),(p===null||p.length<m)&&(p=new Float32Array(m));for(let w=0,v=f;w!==g;++w,v+=4)a.copy(d[w]).applyMatrix4(M,o),a.normal.toArray(p,v),p[v+3]=a.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=g,e.numIntersection=0,p}}const js=4,Tv=6,Ev=20,wv=256,za=new Pc,xp=new Je;let vu=null,Su=0,Mu=0,yu=!1;const Av=new O,Kr=new O;class vp{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,i=100,s={}){const{size:a=256,position:o=Av}=s;vu=this._renderer.getRenderTarget(),Su=this._renderer.getActiveCubeFace(),Mu=this._renderer.getActiveMipmapLevel(),yu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,n,i,l,o),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=yp(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Mp(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(vu,Su,Mu),this._renderer.xr.enabled=yu,e.scissorTest=!1,Ws(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===ms||e.mapping===fa?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),vu=this._renderer.getRenderTarget(),Su=this._renderer.getActiveCubeFace(),Mu=this._renderer.getActiveMipmapLevel(),yu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Rn,minFilter:Rn,generateMipmaps:!1,type:$n,format:Ui,colorSpace:ac,depthBuffer:!1},i=Sp(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Sp(e,t,n);const{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=Cv(s)),this._blurMaterial=Pv(s,e,t),this._ggxMaterial=Rv(s,e,t)}return i}_compileMaterial(e){const t=new tt(new Vt,e);this._renderer.compile(t,za)}_sceneToCubeUV(e,t,n,i,s){const l=new Yn(90,1,t,n),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],d=this._renderer,h=d.autoClear,f=d.toneMapping;d.getClearColor(xp),d.toneMapping=$i,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(i),d.clearDepth(),d.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new tt(new Ai,new Hr({name:"PMREM.Background",side:Zn,depthWrite:!1,depthTest:!1})));const g=this._backgroundBox,p=g.material;let m=!1;const M=e.background;M?M.isColor&&(p.color.copy(M),e.background=null,m=!0):(p.color.copy(xp),m=!0);for(let w=0;w<6;w++){const v=w%3;v===0?(l.up.set(0,c[w],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+u[w],s.y,s.z)):v===1?(l.up.set(0,0,c[w]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+u[w],s.z)):(l.up.set(0,c[w],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+u[w]));const y=this._cubeSize;Ws(i,v*y,w>2?y:0,y,y),d.setRenderTarget(i),m&&d.render(g,l),d.render(e,l)}d.toneMapping=f,d.autoClear=h,e.background=M}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===ms||e.mapping===fa;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=yp()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Mp());const s=i?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=s;const o=s.uniforms;o.envMap.value=e;const l=this._cubeSize;Ws(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(a,za)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const i=this._lodMeshes.length;for(let s=1;s<i;s++)this._applyGGXFilter(e,s-1,s);t.autoClear=n}_applyGGXFilter(e,t,n){const i=this._renderer,s=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;const l=a.uniforms,c=n/(this._lodMeshes.length-1),u=t/(this._lodMeshes.length-1),d=Math.sqrt(c*c-u*u),h=c*1.25,f=d*h,{_lodMax:_}=this,g=this._sizeLods[n],p=3*g*(n>_-js?n-_+js:0),m=4*(this._cubeSize-g);l.envMap.value=e.texture,l.roughness.value=f,l.mipInt.value=_-t,Ws(s,p,m,3*g,2*g),i.setRenderTarget(s),i.render(o,za),l.envMap.value=s.texture,l.roughness.value=0,l.mipInt.value=_-n,Ws(e,p,m,3*g,2*g),i.setRenderTarget(e),i.render(o,za)}_blur(e,t,n,i){const s=this._pingPongRenderTarget,a=Math.min(i,Math.PI)/Math.SQRT2;this._blurPass(e,s,t,n,a),this._blurPass(s,e,n,n,a)}_blurPass(e,t,n,i,s){const a=this._renderer,o=this._blurMaterial,l=this._lodMeshes[i];l.material=o;const c=o.uniforms;c.envMap.value=e.texture,c.sigma.value=s,c.mipInt.value=this._lodMax-n;const u=this._sizeLods[i],d=3*u*(i>this._lodMax-js?i-this._lodMax+js:0),h=4*(this._cubeSize-u);Ws(t,d,h,3*u,2*u),a.setRenderTarget(t),a.render(l,za)}}function Cv(r){const e=[],t=[];let n=r;const i=r-js+1+Tv;for(let s=0;s<i;s++){const a=Math.pow(2,n);e.push(a);const o=1/(a-2),l=-o,c=1+o,u=[l,l,c,l,c,c,l,l,c,c,l,c],d=6,h=6,f=3,_=new Float32Array(f*h*d),g=new Float32Array(f*h*d);for(let m=0;m<d;m++){const M=m%3*2/3-1,w=m>2?0:-1,v=[M,w,0,M+2/3,w,0,M+2/3,w+1,0,M,w,0,M+2/3,w+1,0,M,w+1,0];_.set(v,f*h*m);for(let y=0;y<h;y++){const T=u[y*2]*2-1,A=u[y*2+1]*2-1;m===0?Kr.set(1,A,T):m===1?Kr.set(-T,1,-A):m===2?Kr.set(-T,A,1):m===3?Kr.set(-1,A,-T):m===4?Kr.set(-T,-1,A):Kr.set(T,A,-1),Kr.toArray(g,(m*h+y)*f)}}const p=new Vt;p.setAttribute("position",new Ei(_,f)),p.setAttribute("outputDirection",new Ei(g,f)),t.push(new tt(p,null)),n>js&&n--}return{lodMeshes:t,sizeLods:e}}function Sp(r,e,t){const n=new Hn(r,e,t);return n.texture.mapping=Cc,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Ws(r,e,t,n,i){r.viewport.set(e,t,n,i),r.scissor.set(e,t,n,i)}function Rv(r,e,t){return new dn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:wv,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Dc(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:Zi,depthTest:!1,depthWrite:!1})}function Pv(r,e,t){return new dn({name:"SphericalGaussianBlur",defines:{SAMPLES:Ev,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:Dc(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float sigma;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359
			#define GOLDEN_ANGLE 2.39996322973

			void main() {

				if ( sigma == 0.0 ) {

					gl_FragColor = vec4( bilinearCubeUV( envMap, vOutputDirection, mipInt ), 1.0 );
					return;

				}

				vec3 outputDirection = normalize( vOutputDirection );

				vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
				vec3 tangent = normalize( cross( up, outputDirection ) );
				vec3 bitangent = cross( outputDirection, tangent );

				// Truncate the kernel at three standard deviations or at the antipode.
				float thetaMax = min( 3.0 * sigma, PI );
				float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

				vec3 accumColor = vec3( 0.0 );
				float accumWeight = 0.0;

				for ( int i = 0; i < SAMPLES; i ++ ) {

					// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
					float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
					float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
					float phi = float( i ) * GOLDEN_ANGLE;

					vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
					vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

					// Correct the planar sample density to solid angle.
					float weight = sin( theta ) / theta;

					accumColor += weight * bilinearCubeUV( envMap, sampleDirection, mipInt );
					accumWeight += weight;

				}

				gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

			}
		`,blending:Zi,depthTest:!1,depthWrite:!1})}function Mp(){return new dn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Dc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Zi,depthTest:!1,depthWrite:!1})}function yp(){return new dn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Dc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Zi,depthTest:!1,depthWrite:!1})}function Dc(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}class cm extends Hn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new Z0(i),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new Ai(5,5,5),s=new dn({name:"CubemapFromEquirect",uniforms:ma(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Zn,blending:Zi});s.uniforms.tEquirect.value=t;const a=new tt(i,s),o=t.minFilter;return t.minFilter===is&&(t.minFilter=Rn),new R2(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,i=!0){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,i);e.setRenderTarget(s)}}function Dv(r){let e=new WeakMap,t=new WeakMap,n=null;function i(h,f=!1){return h==null?null:f?a(h):s(h)}function s(h){if(h&&h.isTexture){const f=h.mapping;if(f===Hc||f===Wc)if(e.has(h)){const _=e.get(h).texture;return o(_,h.mapping)}else{const _=h.image;if(_&&_.height>0){const g=new cm(_.height);return g.fromEquirectangularTexture(r,h),e.set(h,g),h.addEventListener("dispose",c),o(g.texture,h.mapping)}else return null}}return h}function a(h){if(h&&h.isTexture){const f=h.mapping,_=f===Hc||f===Wc,g=f===ms||f===fa;if(_||g){let p=t.get(h);const m=p!==void 0?p.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==m)return n===null&&(n=new vp(r)),p=_?n.fromEquirectangular(h,p):n.fromCubemap(h,p),p.texture.pmremVersion=h.pmremVersion,t.set(h,p),p.texture;if(p!==void 0)return p.texture;{const M=h.image;return _&&M&&M.height>0||g&&M&&l(M)?(n===null&&(n=new vp(r)),p=_?n.fromEquirectangular(h):n.fromCubemap(h),p.texture.pmremVersion=h.pmremVersion,t.set(h,p),h.addEventListener("dispose",u),p.texture):null}}}return h}function o(h,f){return f===Hc?h.mapping=ms:f===Wc&&(h.mapping=fa),h}function l(h){let f=0;const _=6;for(let g=0;g<_;g++)h[g]!==void 0&&f++;return f===_}function c(h){const f=h.target;f.removeEventListener("dispose",c);const _=e.get(f);_!==void 0&&(e.delete(f),_.dispose())}function u(h){const f=h.target;f.removeEventListener("dispose",u);const _=t.get(f);_!==void 0&&(t.delete(f),_.dispose())}function d(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:d}}function Lv(r){const e={};function t(n){if(e[n]!==void 0)return e[n];const i=r.getExtension(n);return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const i=t(n);return i===null&&ia("WebGLRenderer: "+n+" extension not supported."),i}}}function Iv(r,e,t,n){const i={},s=new WeakMap;function a(d){const h=d.target;h.index!==null&&e.remove(h.index);for(const _ in h.attributes)e.remove(h.attributes[_]);h.removeEventListener("dispose",a),delete i[h.id];const f=s.get(h);f&&(e.remove(f),s.delete(h)),n.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function o(d,h){return i[h.id]===!0||(h.addEventListener("dispose",a),i[h.id]=!0,t.memory.geometries++),h}function l(d){const h=d.attributes;for(const f in h)e.update(h[f],r.ARRAY_BUFFER)}function c(d){const h=[],f=d.index,_=d.attributes.position;let g=0;if(_===void 0)return;if(f!==null){const M=f.array;g=f.version;for(let w=0,v=M.length;w<v;w+=3){const y=M[w+0],T=M[w+1],A=M[w+2];h.push(y,T,T,A,A,y)}}else{const M=_.array;g=_.version;for(let w=0,v=M.length/3-1;w<v;w+=3){const y=w+0,T=w+1,A=w+2;h.push(y,T,T,A,A,y)}}const p=new(_.count>=65535?H0:V0)(h,1);p.version=g;const m=s.get(d);m&&e.remove(m),s.set(d,p)}function u(d){const h=s.get(d);if(h){const f=d.index;f!==null&&h.version<f.version&&c(d)}else c(d);return s.get(d)}return{get:o,update:l,getWireframeAttribute:u}}function Nv(r,e,t){let n;function i(d){n=d}let s,a;function o(d){s=d.type,a=d.bytesPerElement}function l(d,h){r.drawElements(n,h,s,d*a),t.update(h,n,1)}function c(d,h,f){f!==0&&(r.drawElementsInstanced(n,h,s,d*a,f),t.update(h,n,f))}function u(d,h,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,h,0,s,d,0,f);let g=0;for(let p=0;p<f;p++)g+=h[p];t.update(g,n,1)}this.setMode=i,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=u}function Uv(r){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,a,o){switch(t.calls++,a){case r.TRIANGLES:t.triangles+=o*(s/3);break;case r.LINES:t.lines+=o*(s/2);break;case r.LINE_STRIP:t.lines+=o*(s-1);break;case r.LINE_LOOP:t.lines+=o*s;break;case r.POINTS:t.points+=o*s;break;default:gt("WebGLInfo: Unknown draw mode:",a);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function Ov(r,e,t){const n=new WeakMap,i=new Bt;function s(a,o,l){const c=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=u!==void 0?u.length:0;let h=n.get(o);if(h===void 0||h.count!==d){let C=function(){x.dispose(),n.delete(o),o.removeEventListener("dispose",C)};var f=C;h!==void 0&&h.texture.dispose();const _=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,p=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],M=o.morphAttributes.normal||[],w=o.morphAttributes.color||[];let v=0;_===!0&&(v=1),g===!0&&(v=2),p===!0&&(v=3);let y=o.attributes.position.count*v,T=1;y>e.maxTextureSize&&(T=Math.ceil(y/e.maxTextureSize),y=e.maxTextureSize);const A=new Float32Array(y*T*4*d),x=new z0(A,y,T,d);x.type=Ni,x.needsUpdate=!0;const b=v*4;for(let L=0;L<d;L++){const D=m[L],k=M[L],I=w[L],q=y*T*4*L;for(let X=0;X<D.count;X++){const z=X*b;_===!0&&(i.fromBufferAttribute(D,X),A[q+z+0]=i.x,A[q+z+1]=i.y,A[q+z+2]=i.z,A[q+z+3]=0),g===!0&&(i.fromBufferAttribute(k,X),A[q+z+4]=i.x,A[q+z+5]=i.y,A[q+z+6]=i.z,A[q+z+7]=0),p===!0&&(i.fromBufferAttribute(I,X),A[q+z+8]=i.x,A[q+z+9]=i.y,A[q+z+10]=i.z,A[q+z+11]=I.itemSize===4?i.w:1)}}h={count:d,texture:x,size:new he(y,T)},n.set(o,h),o.addEventListener("dispose",C)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(r,"morphTexture",a.morphTexture,t);else{let _=0;for(let p=0;p<c.length;p++)_+=c[p];const g=o.morphTargetsRelative?1:1-_;l.getUniforms().setValue(r,"morphTargetBaseInfluence",g),l.getUniforms().setValue(r,"morphTargetInfluences",c)}l.getUniforms().setValue(r,"morphTargetsTexture",h.texture,t),l.getUniforms().setValue(r,"morphTargetsTextureSize",h.size)}return{update:s}}function Fv(r,e,t,n,i){let s=new WeakMap;function a(c){const u=i.render.frame,d=c.geometry,h=e.get(c,d);if(s.get(h)!==u&&(e.update(h),s.set(h,u)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),s.get(c)!==u&&(t.update(c.instanceMatrix,r.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,r.ARRAY_BUFFER),s.set(c,u))),c.isSkinnedMesh){const f=c.skeleton;s.get(f)!==u&&(f.update(),s.set(f,u))}return h}function o(){s=new WeakMap}function l(c){const u=c.target;u.removeEventListener("dispose",l),n.releaseStatesOfObject(u),t.remove(u.instanceMatrix),u.instanceColor!==null&&t.remove(u.instanceColor)}return{update:a,dispose:o}}const qv={[cf]:"LINEAR_TONE_MAPPING",[uf]:"REINHARD_TONE_MAPPING",[hf]:"CINEON_TONE_MAPPING",[Ac]:"ACES_FILMIC_TONE_MAPPING",[df]:"AGX_TONE_MAPPING",[pf]:"NEUTRAL_TONE_MAPPING",[ff]:"CUSTOM_TONE_MAPPING"};function Bv(r,e,t,n,i,s){const a=new Hn(e,t,{type:r,depthBuffer:i,stencilBuffer:s,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1});let o=null,l=null;const c=new Vt;c.setAttribute("position",new mt([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new mt([0,2,0,0,2,0],2));const u=new sm({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),d=new tt(c,u),h=new Pc(-1,1,1,-1,0,1);let f=null,_=null,g=!1,p,m=null,M=[],w=!1;this.setSize=function(v,y){a.setSize(v,y),o!==null&&o.setSize(v,y),l!==null&&l.setSize(v,y);for(let T=0;T<M.length;T++){const A=M[T];A.setSize&&A.setSize(v,y)}},this.setEffects=function(v){M=v,w=M.length>0&&M[0].isRenderPass===!0;const y=a.width,T=a.height;M.length>0&&o===null&&(o=new Hn(y,T,{type:$n,depthBuffer:!1,stencilBuffer:!1}),l=new Hn(y,T,{type:$n,depthBuffer:!1,stencilBuffer:!1}));for(let A=0;A<M.length;A++){const x=M[A];x.setSize&&x.setSize(y,T)}},this.begin=function(v,y){if(g||v.toneMapping===$i&&M.length===0)return!1;if(m=y,y!==null){const T=y.width,A=y.height;(a.width!==T||a.height!==A)&&this.setSize(T,A)}return w===!1&&v.setRenderTarget(a),p=v.toneMapping,v.toneMapping=$i,!0},this.hasRenderPass=function(){return w},this.end=function(v,y){v.toneMapping=p,g=!0;let T=a,A=o;for(let x=0;x<M.length;x++){const b=M[x];b.enabled!==!1&&(b.render(v,A,T,y),b.needsSwap!==!1&&(T=A,A=A===o?l:o))}if(f!==v.outputColorSpace||_!==v.toneMapping){f=v.outputColorSpace,_=v.toneMapping,u.defines={},ft.getTransfer(f)===vt&&(u.defines.SRGB_TRANSFER="");const x=qv[_];x&&(u.defines[x]=""),u.needsUpdate=!0}u.uniforms.tDiffuse.value=T.texture,v.setRenderTarget(m),v.render(d,h),m=null,g=!1},this.isCompositing=function(){return g},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),l!==null&&l.dispose(),c.dispose(),u.dispose()}}const um=new Pn,Ih=new Ao(1,1),hm=new z0,fm=new pg,dm=new Z0,bp=[],Tp=[],Ep=new Float32Array(16),wp=new Float32Array(9),Ap=new Float32Array(4);function wa(r,e,t){const n=r[0];if(n<=0||n>0)return r;const i=e*t;let s=bp[i];if(s===void 0&&(s=new Float32Array(i),bp[i]=s),e!==0){n.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,r[a].toArray(s,o)}return s}function an(r,e){if(r.length!==e.length)return!1;for(let t=0,n=r.length;t<n;t++)if(r[t]!==e[t])return!1;return!0}function on(r,e){for(let t=0,n=e.length;t<n;t++)r[t]=e[t]}function Lc(r,e){let t=Tp[e];t===void 0&&(t=new Int32Array(e),Tp[e]=t);for(let n=0;n!==e;++n)t[n]=r.allocateTextureUnit();return t}function zv(r,e){const t=this.cache;t[0]!==e&&(r.uniform1f(this.addr,e),t[0]=e)}function kv(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(an(t,e))return;r.uniform2fv(this.addr,e),on(t,e)}}function Gv(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(an(t,e))return;r.uniform3fv(this.addr,e),on(t,e)}}function Vv(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(an(t,e))return;r.uniform4fv(this.addr,e),on(t,e)}}function Hv(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(an(t,e))return;r.uniformMatrix2fv(this.addr,!1,e),on(t,e)}else{if(an(t,n))return;Ap.set(n),r.uniformMatrix2fv(this.addr,!1,Ap),on(t,n)}}function Wv(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(an(t,e))return;r.uniformMatrix3fv(this.addr,!1,e),on(t,e)}else{if(an(t,n))return;wp.set(n),r.uniformMatrix3fv(this.addr,!1,wp),on(t,n)}}function Xv(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(an(t,e))return;r.uniformMatrix4fv(this.addr,!1,e),on(t,e)}else{if(an(t,n))return;Ep.set(n),r.uniformMatrix4fv(this.addr,!1,Ep),on(t,n)}}function Yv(r,e){const t=this.cache;t[0]!==e&&(r.uniform1i(this.addr,e),t[0]=e)}function Zv(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(an(t,e))return;r.uniform2iv(this.addr,e),on(t,e)}}function $v(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(an(t,e))return;r.uniform3iv(this.addr,e),on(t,e)}}function Jv(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(an(t,e))return;r.uniform4iv(this.addr,e),on(t,e)}}function Kv(r,e){const t=this.cache;t[0]!==e&&(r.uniform1ui(this.addr,e),t[0]=e)}function Qv(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(an(t,e))return;r.uniform2uiv(this.addr,e),on(t,e)}}function jv(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(an(t,e))return;r.uniform3uiv(this.addr,e),on(t,e)}}function eS(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(an(t,e))return;r.uniform4uiv(this.addr,e),on(t,e)}}function tS(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i);let s;this.type===r.SAMPLER_2D_SHADOW?(Ih.compareFunction=t.isReversedDepthBuffer()?bf:yf,s=Ih):s=um,t.setTexture2D(e||s,i)}function nS(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||fm,i)}function iS(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||dm,i)}function rS(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||hm,i)}function sS(r){switch(r){case 5126:return zv;case 35664:return kv;case 35665:return Gv;case 35666:return Vv;case 35674:return Hv;case 35675:return Wv;case 35676:return Xv;case 5124:case 35670:return Yv;case 35667:case 35671:return Zv;case 35668:case 35672:return $v;case 35669:case 35673:return Jv;case 5125:return Kv;case 36294:return Qv;case 36295:return jv;case 36296:return eS;case 35678:case 36198:case 36298:case 36306:case 35682:return tS;case 35679:case 36299:case 36307:return nS;case 35680:case 36300:case 36308:case 36293:return iS;case 36289:case 36303:case 36311:case 36292:return rS}}function aS(r,e){r.uniform1fv(this.addr,e)}function oS(r,e){const t=wa(e,this.size,2);r.uniform2fv(this.addr,t)}function lS(r,e){const t=wa(e,this.size,3);r.uniform3fv(this.addr,t)}function cS(r,e){const t=wa(e,this.size,4);r.uniform4fv(this.addr,t)}function uS(r,e){const t=wa(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,t)}function hS(r,e){const t=wa(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,t)}function fS(r,e){const t=wa(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,t)}function dS(r,e){r.uniform1iv(this.addr,e)}function pS(r,e){r.uniform2iv(this.addr,e)}function mS(r,e){r.uniform3iv(this.addr,e)}function _S(r,e){r.uniform4iv(this.addr,e)}function gS(r,e){r.uniform1uiv(this.addr,e)}function xS(r,e){r.uniform2uiv(this.addr,e)}function vS(r,e){r.uniform3uiv(this.addr,e)}function SS(r,e){r.uniform4uiv(this.addr,e)}function MS(r,e,t){const n=this.cache,i=e.length,s=Lc(t,i);an(n,s)||(r.uniform1iv(this.addr,s),on(n,s));let a;this.type===r.SAMPLER_2D_SHADOW?a=Ih:a=um;for(let o=0;o!==i;++o)t.setTexture2D(e[o]||a,s[o])}function yS(r,e,t){const n=this.cache,i=e.length,s=Lc(t,i);an(n,s)||(r.uniform1iv(this.addr,s),on(n,s));for(let a=0;a!==i;++a)t.setTexture3D(e[a]||fm,s[a])}function bS(r,e,t){const n=this.cache,i=e.length,s=Lc(t,i);an(n,s)||(r.uniform1iv(this.addr,s),on(n,s));for(let a=0;a!==i;++a)t.setTextureCube(e[a]||dm,s[a])}function TS(r,e,t){const n=this.cache,i=e.length,s=Lc(t,i);an(n,s)||(r.uniform1iv(this.addr,s),on(n,s));for(let a=0;a!==i;++a)t.setTexture2DArray(e[a]||hm,s[a])}function ES(r){switch(r){case 5126:return aS;case 35664:return oS;case 35665:return lS;case 35666:return cS;case 35674:return uS;case 35675:return hS;case 35676:return fS;case 5124:case 35670:return dS;case 35667:case 35671:return pS;case 35668:case 35672:return mS;case 35669:case 35673:return _S;case 5125:return gS;case 36294:return xS;case 36295:return vS;case 36296:return SS;case 35678:case 36198:case 36298:case 36306:case 35682:return MS;case 35679:case 36299:case 36307:return yS;case 35680:case 36300:case 36308:case 36293:return bS;case 36289:case 36303:case 36311:case 36292:return TS}}class wS{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=sS(t.type)}}class AS{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=ES(t.type)}}class CS{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let s=0,a=i.length;s!==a;++s){const o=i[s];o.setValue(e,t[o.id],n)}}}const bu=/(\w+)(\])?(\[|\.)?/g;function Cp(r,e){r.seq.push(e),r.map[e.id]=e}function RS(r,e,t){const n=r.name,i=n.length;for(bu.lastIndex=0;;){const s=bu.exec(n),a=bu.lastIndex;let o=s[1];const l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===i){Cp(t,c===void 0?new wS(o,r,e):new AS(o,r,e));break}else{let d=t.map[o];d===void 0&&(d=new CS(o),Cp(t,d)),t=d}}}class Hl{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){const o=e.getActiveUniform(t,a),l=e.getUniformLocation(t,o.name);RS(o,l,this)}const i=[],s=[];for(const a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?i.push(a):s.push(a);i.length>0&&(this.seq=i.concat(s))}setValue(e,t,n,i){const s=this.map[t];s!==void 0&&s.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let s=0,a=t.length;s!==a;++s){const o=t[s],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,s=e.length;i!==s;++i){const a=e[i];a.id in t&&n.push(a)}return n}}function Rp(r,e,t){const n=r.createShader(e);return r.shaderSource(n,t),r.compileShader(n),n}const PS=37297;let DS=0;function LS(r,e){const t=r.split(`
`),n=[],i=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let a=i;a<s;a++){const o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}const Pp=new et;function IS(r){ft._getMatrix(Pp,ft.workingColorSpace,r);const e=`mat3( ${Pp.elements.map(t=>t.toFixed(4))} )`;switch(ft.getTransfer(r)){case oc:return[e,"LinearTransferOETF"];case vt:return[e,"sRGBTransferOETF"];default:return Ke("WebGLProgram: Unsupported color space: ",r),[e,"LinearTransferOETF"]}}function Dp(r,e,t){const n=r.getShaderParameter(e,r.COMPILE_STATUS),s=(r.getShaderInfoLog(e)||"").trim();if(n&&s==="")return"";const a=/ERROR: 0:(\d+)/.exec(s);if(a){const o=parseInt(a[1]);return t.toUpperCase()+`

`+s+`

`+LS(r.getShaderSource(e),o)}else return s}function NS(r,e){const t=IS(e);return[`vec4 ${r}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const US={[cf]:"Linear",[uf]:"Reinhard",[hf]:"Cineon",[Ac]:"ACESFilmic",[df]:"AgX",[pf]:"Neutral",[ff]:"Custom"};function OS(r,e){const t=US[e];return t===void 0?(Ke("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+r+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+r+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const yl=new O;function FS(){ft.getLuminanceCoefficients(yl);const r=yl.x.toFixed(4),e=yl.y.toFixed(4),t=yl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function qS(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Za).join(`
`)}function BS(r){const e=[];for(const t in r){const n=r[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function zS(r,e){const t={},n=r.getProgramParameter(e,r.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const s=r.getActiveAttrib(e,i),a=s.name;let o=1;s.type===r.FLOAT_MAT2&&(o=2),s.type===r.FLOAT_MAT3&&(o=3),s.type===r.FLOAT_MAT4&&(o=4),t[a]={type:s.type,location:r.getAttribLocation(e,a),locationSize:o}}return t}function Za(r){return r!==""}function Lp(r,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Ip(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const kS=/^[ \t]*#include +<([\w\d./]+)>/gm;function Nh(r){return r.replace(kS,VS)}const GS=new Map;function VS(r,e){let t=it[e];if(t===void 0){const n=GS.get(e);if(n!==void 0)t=it[n],Ke('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return Nh(t)}const HS=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Np(r){return r.replace(HS,WS)}function WS(r,e,t,n){let i="";for(let s=parseInt(e);s<parseInt(t);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function Up(r){let e=`precision ${r.precision} float;
	precision ${r.precision} int;
	precision ${r.precision} sampler2D;
	precision ${r.precision} samplerCube;
	precision ${r.precision} sampler3D;
	precision ${r.precision} sampler2DArray;
	precision ${r.precision} sampler2DShadow;
	precision ${r.precision} samplerCubeShadow;
	precision ${r.precision} sampler2DArrayShadow;
	precision ${r.precision} isampler2D;
	precision ${r.precision} isampler3D;
	precision ${r.precision} isamplerCube;
	precision ${r.precision} isampler2DArray;
	precision ${r.precision} usampler2D;
	precision ${r.precision} usampler3D;
	precision ${r.precision} usamplerCube;
	precision ${r.precision} usampler2DArray;
	`;return r.precision==="highp"?e+=`
#define HIGH_PRECISION`:r.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const XS={[Bl]:"SHADOWMAP_TYPE_PCF",[Xa]:"SHADOWMAP_TYPE_VSM"};function YS(r){return XS[r.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const ZS={[ms]:"ENVMAP_TYPE_CUBE",[fa]:"ENVMAP_TYPE_CUBE",[Cc]:"ENVMAP_TYPE_CUBE_UV"};function $S(r){return r.envMap===!1?"ENVMAP_TYPE_CUBE":ZS[r.envMapMode]||"ENVMAP_TYPE_CUBE"}const JS={[fa]:"ENVMAP_MODE_REFRACTION"};function KS(r){return r.envMap===!1?"ENVMAP_MODE_REFLECTION":JS[r.envMapMode]||"ENVMAP_MODE_REFLECTION"}const QS={[D0]:"ENVMAP_BLENDING_MULTIPLY",[C_]:"ENVMAP_BLENDING_MIX",[R_]:"ENVMAP_BLENDING_ADD"};function jS(r){return r.envMap===!1?"ENVMAP_BLENDING_NONE":QS[r.combine]||"ENVMAP_BLENDING_NONE"}function eM(r){const e=r.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function tM(r,e,t,n){const i=r.getContext(),s=t.defines;let a=t.vertexShader,o=t.fragmentShader;const l=YS(t),c=$S(t),u=KS(t),d=jS(t),h=eM(t),f=qS(t),_=BS(s),g=i.createProgram();let p,m,M=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(Za).join(`
`),p.length>0&&(p+=`
`),m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(Za).join(`
`),m.length>0&&(m+=`
`)):(p=[Up(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Za).join(`
`),m=[Up(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+d:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==$i?"#define TONE_MAPPING":"",t.toneMapping!==$i?it.tonemapping_pars_fragment:"",t.toneMapping!==$i?OS("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",it.colorspace_pars_fragment,NS("linearToOutputTexel",t.outputColorSpace),FS(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Za).join(`
`)),a=Nh(a),a=Lp(a,t),a=Ip(a,t),o=Nh(o),o=Lp(o,t),o=Ip(o,t),a=Np(a),o=Np(o),t.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,p=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,m=["#define varying in",t.glslVersion===Id?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Id?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);const w=M+p+a,v=M+m+o,y=Rp(i,i.VERTEX_SHADER,w),T=Rp(i,i.FRAGMENT_SHADER,v);i.attachShader(g,y),i.attachShader(g,T),t.index0AttributeName!==void 0?i.bindAttribLocation(g,0,t.index0AttributeName):t.hasPositionAttribute===!0&&i.bindAttribLocation(g,0,"position"),i.linkProgram(g);function A(L){if(r.debug.checkShaderErrors){const D=i.getProgramInfoLog(g)||"",k=i.getShaderInfoLog(y)||"",I=i.getShaderInfoLog(T)||"",q=D.trim(),X=k.trim(),z=I.trim();let j=!0,Y=!0;if(i.getProgramParameter(g,i.LINK_STATUS)===!1)if(j=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(i,g,y,T);else{const P=Dp(i,y,"vertex"),K=Dp(i,T,"fragment");gt("WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(g,i.VALIDATE_STATUS)+`

Material Name: `+L.name+`
Material Type: `+L.type+`

Program Info Log: `+q+`
`+P+`
`+K)}else q!==""?Ke("WebGLProgram: Program Info Log:",q):(X===""||z==="")&&(Y=!1);Y&&(L.diagnostics={runnable:j,programLog:q,vertexShader:{log:X,prefix:p},fragmentShader:{log:z,prefix:m}})}i.deleteShader(y),i.deleteShader(T),x=new Hl(i,g),b=zS(i,g)}let x;this.getUniforms=function(){return x===void 0&&A(this),x};let b;this.getAttributes=function(){return b===void 0&&A(this),b};let C=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return C===!1&&(C=i.getProgramParameter(g,PS)),C},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(g),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=DS++,this.cacheKey=e,this.usedTimes=1,this.program=g,this.vertexShader=y,this.fragmentShader=T,this}let nM=0;class iM{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){const i=this._getShaderCacheForMaterial(e);return i.has(t)===!1&&(i.add(t),t.usedTimes++),i.has(n)===!1&&(i.add(n),n.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new rM(e),t.set(e,n)),n}}class rM{constructor(e){this.id=nM++,this.code=e,this.usedTimes=0}}function sM(r){return r===_s||r===rc||r===sc}function aM(r,e,t,n,i,s){const a=new k0,o=new iM,l=new Set,c=[],u=new Map,d=n.logarithmicDepthBuffer;let h=n.precision;const f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(x){return l.add(x),x===0?"uv":`uv${x}`}function g(x,b,C,L,D,k){const I=L.fog,q=D.geometry,X=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?L.environment:null,z=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap,j=e.get(x.envMap||X,z),Y=j&&j.mapping===Cc?j.image.height:null,P=f[x.type];x.precision!==null&&(h=n.getMaxPrecision(x.precision),h!==x.precision&&Ke("WebGLProgram.getParameters:",x.precision,"not supported, using",h,"instead."));const K=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,we=K!==void 0?K.length:0;let Te=0;q.morphAttributes.position!==void 0&&(Te=1),q.morphAttributes.normal!==void 0&&(Te=2),q.morphAttributes.color!==void 0&&(Te=3);let Ye,We,Qe,$;if(P){const Ve=Gi[P];Ye=Ve.vertexShader,We=Ve.fragmentShader}else{Ye=x.vertexShader,We=x.fragmentShader;const Ve=o.getVertexShaderStage(x),le=o.getFragmentShaderStage(x);o.update(x,Ve,le),Qe=Ve.id,$=le.id}const te=r.getRenderTarget(),me=r.state.buffers.depth.getReversed(),Ge=D.isInstancedMesh===!0,xe=D.isBatchedMesh===!0,Le=!!x.map,Ne=!!x.matcap,Q=!!j,re=!!x.aoMap,oe=!!x.lightMap,N=!!x.bumpMap&&x.wireframe===!1,de=!!x.normalMap,Be=!!x.displacementMap,Ue=!!x.emissiveMap,Ce=!!x.metalnessMap,Ze=!!x.roughnessMap,U=x.anisotropy>0,at=x.clearcoat>0,He=x.dispersion>0,R=x.retroreflectivity>0,S=x.iridescence>0,G=x.sheen>0,V=x.transmission>0,J=U&&!!x.anisotropyMap,pe=at&&!!x.clearcoatMap,ce=at&&!!x.clearcoatNormalMap,ee=at&&!!x.clearcoatRoughnessMap,ie=S&&!!x.iridescenceMap,ve=S&&!!x.iridescenceThicknessMap,Ie=G&&!!x.sheenColorMap,Se=G&&!!x.sheenRoughnessMap,ge=!!x.specularMap,fe=!!x.specularColorMap,ze=!!x.specularIntensityMap,$e=V&&!!x.transmissionMap,F=V&&!!x.thicknessMap,_e=!!x.gradientMap,ne=!!x.alphaMap,Me=x.alphaTest>0,be=!!x.alphaHash,se=!!x.extensions;let ue=$i;x.toneMapped&&(te===null||te.isXRRenderTarget===!0)&&(ue=r.toneMapping);const ae={shaderID:P,shaderType:x.type,shaderName:x.name,vertexShader:Ye,fragmentShader:We,defines:x.defines,customVertexShaderID:Qe,customFragmentShaderID:$,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:h,batching:xe,batchingColor:xe&&D._colorsTexture!==null,instancing:Ge,instancingColor:Ge&&D.instanceColor!==null,instancingMorph:Ge&&D.morphTexture!==null,outputColorSpace:te===null?r.outputColorSpace:te.isXRRenderTarget===!0?te.texture.colorSpace:ft.workingColorSpace,alphaToCoverage:!!x.alphaToCoverage,map:Le,matcap:Ne,envMap:Q,envMapMode:Q&&j.mapping,envMapCubeUVHeight:Y,aoMap:re,lightMap:oe,bumpMap:N,normalMap:de,displacementMap:Be,emissiveMap:Ue,normalMapObjectSpace:de&&x.normalMapType===L_,normalMapTangentSpace:de&&x.normalMapType===Ch,packedNormalMap:de&&x.normalMapType===Ch&&sM(x.normalMap.format),metalnessMap:Ce,roughnessMap:Ze,anisotropy:U,anisotropyMap:J,clearcoat:at,clearcoatMap:pe,clearcoatNormalMap:ce,clearcoatRoughnessMap:ee,dispersion:He,retroreflection:R,iridescence:S,iridescenceMap:ie,iridescenceThicknessMap:ve,sheen:G,sheenColorMap:Ie,sheenRoughnessMap:Se,specularMap:ge,specularColorMap:fe,specularIntensityMap:ze,transmission:V,transmissionMap:$e,thicknessMap:F,gradientMap:_e,opaque:x.transparent===!1&&x.blending===no&&x.alphaToCoverage===!1,alphaMap:ne,alphaTest:Me,alphaHash:be,combine:x.combine,mapUv:Le&&_(x.map.channel),aoMapUv:re&&_(x.aoMap.channel),lightMapUv:oe&&_(x.lightMap.channel),bumpMapUv:N&&_(x.bumpMap.channel),normalMapUv:de&&_(x.normalMap.channel),displacementMapUv:Be&&_(x.displacementMap.channel),emissiveMapUv:Ue&&_(x.emissiveMap.channel),metalnessMapUv:Ce&&_(x.metalnessMap.channel),roughnessMapUv:Ze&&_(x.roughnessMap.channel),anisotropyMapUv:J&&_(x.anisotropyMap.channel),clearcoatMapUv:pe&&_(x.clearcoatMap.channel),clearcoatNormalMapUv:ce&&_(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ee&&_(x.clearcoatRoughnessMap.channel),iridescenceMapUv:ie&&_(x.iridescenceMap.channel),iridescenceThicknessMapUv:ve&&_(x.iridescenceThicknessMap.channel),sheenColorMapUv:Ie&&_(x.sheenColorMap.channel),sheenRoughnessMapUv:Se&&_(x.sheenRoughnessMap.channel),specularMapUv:ge&&_(x.specularMap.channel),specularColorMapUv:fe&&_(x.specularColorMap.channel),specularIntensityMapUv:ze&&_(x.specularIntensityMap.channel),transmissionMapUv:$e&&_(x.transmissionMap.channel),thicknessMapUv:F&&_(x.thicknessMap.channel),alphaMapUv:ne&&_(x.alphaMap.channel),vertexTangents:!!q.attributes.tangent&&(de||U),vertexNormals:!!q.attributes.normal,vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,pointsUvs:D.isPoints===!0&&!!q.attributes.uv&&(Le||ne),fog:!!I,useFog:x.fog===!0,fogExp2:!!I&&I.isFogExp2,flatShading:x.wireframe===!1&&(x.flatShading===!0||q.attributes.normal===void 0&&de===!1&&(x.isMeshLambertMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isMeshPhysicalMaterial)),sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:me,skinning:D.isSkinnedMesh===!0,hasPositionAttribute:q.attributes.position!==void 0,morphTargets:q.morphAttributes.position!==void 0,morphNormals:q.morphAttributes.normal!==void 0,morphColors:q.morphAttributes.color!==void 0,morphTargetsCount:we,morphTextureStride:Te,numSunLights:b.sun.length,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numSunLightShadows:b.sunShadowMap.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numLightProbeGrids:k.length,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:x.dithering,shadowMapEnabled:r.shadowMap.enabled&&C.length>0,shadowMapType:r.shadowMap.type,toneMapping:ue,decodeVideoTexture:Le&&x.map.isVideoTexture===!0&&ft.getTransfer(x.map.colorSpace)===vt,decodeVideoTextureEmissive:Ue&&x.emissiveMap.isVideoTexture===!0&&ft.getTransfer(x.emissiveMap.colorSpace)===vt,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===oi,flipSided:x.side===Zn,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:se&&x.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(se&&x.extensions.multiDraw===!0||xe)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return ae.vertexUv1s=l.has(1),ae.vertexUv2s=l.has(2),ae.vertexUv3s=l.has(3),l.clear(),ae}function p(x){const b=[];if(x.shaderID?b.push(x.shaderID):(b.push(x.customVertexShaderID),b.push(x.customFragmentShaderID)),x.defines!==void 0)for(const C in x.defines)b.push(C),b.push(x.defines[C]);return x.isRawShaderMaterial===!1&&(m(b,x),M(b,x),b.push(r.outputColorSpace)),b.push(x.customProgramCacheKey),b.join()}function m(x,b){x.push(b.precision),x.push(b.outputColorSpace),x.push(b.envMapMode),x.push(b.envMapCubeUVHeight),x.push(b.mapUv),x.push(b.alphaMapUv),x.push(b.lightMapUv),x.push(b.aoMapUv),x.push(b.bumpMapUv),x.push(b.normalMapUv),x.push(b.displacementMapUv),x.push(b.emissiveMapUv),x.push(b.metalnessMapUv),x.push(b.roughnessMapUv),x.push(b.anisotropyMapUv),x.push(b.clearcoatMapUv),x.push(b.clearcoatNormalMapUv),x.push(b.clearcoatRoughnessMapUv),x.push(b.iridescenceMapUv),x.push(b.iridescenceThicknessMapUv),x.push(b.sheenColorMapUv),x.push(b.sheenRoughnessMapUv),x.push(b.specularMapUv),x.push(b.specularColorMapUv),x.push(b.specularIntensityMapUv),x.push(b.transmissionMapUv),x.push(b.thicknessMapUv),x.push(b.combine),x.push(b.fogExp2),x.push(b.sizeAttenuation),x.push(b.morphTargetsCount),x.push(b.morphAttributeCount),x.push(b.numSunLights),x.push(b.numDirLights),x.push(b.numPointLights),x.push(b.numSpotLights),x.push(b.numSpotLightMaps),x.push(b.numHemiLights),x.push(b.numRectAreaLights),x.push(b.numSunLightShadows),x.push(b.numDirLightShadows),x.push(b.numPointLightShadows),x.push(b.numSpotLightShadows),x.push(b.numSpotLightShadowsWithMaps),x.push(b.numLightProbes),x.push(b.shadowMapType),x.push(b.toneMapping),x.push(b.numClippingPlanes),x.push(b.numClipIntersection),x.push(b.depthPacking)}function M(x,b){a.disableAll(),b.instancing&&a.enable(0),b.instancingColor&&a.enable(1),b.instancingMorph&&a.enable(2),b.matcap&&a.enable(3),b.envMap&&a.enable(4),b.normalMapObjectSpace&&a.enable(5),b.normalMapTangentSpace&&a.enable(6),b.clearcoat&&a.enable(7),b.iridescence&&a.enable(8),b.alphaTest&&a.enable(9),b.vertexColors&&a.enable(10),b.vertexAlphas&&a.enable(11),b.vertexUv1s&&a.enable(12),b.vertexUv2s&&a.enable(13),b.vertexUv3s&&a.enable(14),b.vertexTangents&&a.enable(15),b.anisotropy&&a.enable(16),b.alphaHash&&a.enable(17),b.batching&&a.enable(18),b.dispersion&&a.enable(19),b.retroreflection&&a.enable(24),b.batchingColor&&a.enable(20),b.gradientMap&&a.enable(21),b.packedNormalMap&&a.enable(22),b.vertexNormals&&a.enable(23),x.push(a.mask),a.disableAll(),b.fog&&a.enable(0),b.useFog&&a.enable(1),b.flatShading&&a.enable(2),b.logarithmicDepthBuffer&&a.enable(3),b.reversedDepthBuffer&&a.enable(4),b.skinning&&a.enable(5),b.morphTargets&&a.enable(6),b.morphNormals&&a.enable(7),b.morphColors&&a.enable(8),b.premultipliedAlpha&&a.enable(9),b.shadowMapEnabled&&a.enable(10),b.doubleSided&&a.enable(11),b.flipSided&&a.enable(12),b.useDepthPacking&&a.enable(13),b.dithering&&a.enable(14),b.transmission&&a.enable(15),b.sheen&&a.enable(16),b.opaque&&a.enable(17),b.pointsUvs&&a.enable(18),b.decodeVideoTexture&&a.enable(19),b.decodeVideoTextureEmissive&&a.enable(20),b.alphaToCoverage&&a.enable(21),b.numLightProbeGrids>0&&a.enable(22),b.hasPositionAttribute&&a.enable(23),x.push(a.mask)}function w(x){const b=f[x.type];let C;if(b){const L=Gi[b];C=Do.clone(L.uniforms)}else C=x.uniforms;return C}function v(x,b){let C=u.get(b);return C!==void 0?++C.usedTimes:(C=new tM(r,b,x,i),c.push(C),u.set(b,C)),C}function y(x){if(--x.usedTimes===0){const b=c.indexOf(x);c[b]=c[c.length-1],c.pop(),u.delete(x.cacheKey),x.destroy()}}function T(x){o.remove(x)}function A(){o.dispose()}return{getParameters:g,getProgramCacheKey:p,getUniforms:w,acquireProgram:v,releaseProgram:y,releaseShaderCache:T,programs:c,dispose:A}}function oM(){let r=new WeakMap;function e(a){return r.has(a)}function t(a){let o=r.get(a);return o===void 0&&(o={},r.set(a,o)),o}function n(a){r.delete(a)}function i(a,o,l){r.get(a)[o]=l}function s(){r=new WeakMap}return{has:e,get:t,remove:n,update:i,dispose:s}}function lM(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.materialVariant!==e.materialVariant?r.materialVariant-e.materialVariant:r.z!==e.z?r.z-e.z:r.id-e.id}function Op(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function Fp(){const r=[];let e=0;const t=[],n=[],i=[];function s(){e=0,t.length=0,n.length=0,i.length=0}function a(h){let f=0;return h.isInstancedMesh&&(f+=2),h.isSkinnedMesh&&(f+=1),f}function o(h,f,_,g,p,m){let M=r[e];return M===void 0?(M={id:h.id,object:h,geometry:f,material:_,materialVariant:a(h),groupOrder:g,renderOrder:h.renderOrder,z:p,group:m},r[e]=M):(M.id=h.id,M.object=h,M.geometry=f,M.material=_,M.materialVariant=a(h),M.groupOrder=g,M.renderOrder=h.renderOrder,M.z=p,M.group=m),e++,M}function l(h,f,_,g,p,m,M){M.reversedDepth===!0&&(p=-p);const w=o(h,f,_,g,p,m);_.transmission>0?n.push(w):_.transparent===!0?i.push(w):t.push(w)}function c(h,f,_,g,p,m){const M=o(h,f,_,g,p,m);_.transmission>0?n.unshift(M):_.transparent===!0?i.unshift(M):t.unshift(M)}function u(h,f){t.length>1&&t.sort(h||lM),n.length>1&&n.sort(f||Op),i.length>1&&i.sort(f||Op)}function d(){for(let h=e,f=r.length;h<f;h++){const _=r[h];if(_.id===null)break;_.id=null,_.object=null,_.geometry=null,_.material=null,_.group=null}}return{opaque:t,transmissive:n,transparent:i,init:s,push:l,unshift:c,finish:d,sort:u}}function cM(){let r=new WeakMap;function e(n,i){const s=r.get(n);let a;return s===void 0?(a=new Fp,r.set(n,[a])):i>=s.length?(a=new Fp,s.push(a)):a=s[i],a}function t(){r=new WeakMap}return{get:e,dispose:t}}function uM(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new O,color:new Je};break;case"SpotLight":t={position:new O,direction:new O,color:new Je,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new O,color:new Je,distance:0,decay:0};break;case"HemisphereLight":t={direction:new O,skyColor:new Je,groundColor:new Je};break;case"RectAreaLight":t={color:new Je,position:new O,halfWidth:new O,halfHeight:new O};break}return r[e.id]=t,t}}}function hM(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new he};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new he};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new he,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=t,t}}}let fM=0;function dM(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function pM(r){const e=new uM,t=hM(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new O);const i=new O,s=new bt,a=new bt;function o(c){let u=0,d=0,h=0;for(let D=0;D<9;D++)n.probe[D].set(0,0,0);let f=0,_=0,g=0,p=0,m=0,M=0,w=0,v=0,y=0,T=0,A=0,x=0,b=0,C=0;c.sort(dM);for(let D=0,k=c.length;D<k;D++){const I=c[D],q=I.color,X=I.intensity,z=I.distance;let j=null;if(I.shadow&&I.shadow.map&&(I.shadow.map.texture.format===_s?j=I.shadow.map.texture:j=I.shadow.map.depthTexture||I.shadow.map.texture),I.isAmbientLight)u+=q.r*X,d+=q.g*X,h+=q.b*X;else if(I.isLightProbe){for(let Y=0;Y<9;Y++)n.probe[Y].addScaledVector(I.sh.coefficients[Y],X);C++}else if(I.isSunLight){const Y=e.get(I);if(Y.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){const P=I.shadow,K=t.get(I);K.shadowIntensity=P.intensity,K.shadowBias=P.bias,K.shadowNormalBias=P.normalBias,K.shadowRadius=P.radius,K.shadowMapSize.copy(P.mapSize).multiply(P.getFrameExtents()),n.sunShadow[_]=K,n.sunShadowMap[_]=j;const we=P.getViewportCount();for(let Te=0;Te<we;Te++)n.sunShadowMatrix[g+Te]=P.getMatrix(Te),n.sunShadowCascade[g+Te]=P._cascadeData[Te];g+=we,_++}n.sun[f]=Y,f++}else if(I.isDirectionalLight){const Y=e.get(I);if(Y.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){const P=I.shadow,K=t.get(I);K.shadowIntensity=P.intensity,K.shadowBias=P.bias,K.shadowNormalBias=P.normalBias,K.shadowRadius=P.radius,K.shadowMapSize=P.mapSize,n.directionalShadow[p]=K,n.directionalShadowMap[p]=j,n.directionalShadowMatrix[p]=I.shadow.matrix,y++}n.directional[p]=Y,p++}else if(I.isSpotLight){const Y=e.get(I);Y.position.setFromMatrixPosition(I.matrixWorld),Y.color.copy(q).multiplyScalar(X),Y.distance=z,Y.coneCos=Math.cos(I.angle),Y.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),Y.decay=I.decay,n.spot[M]=Y;const P=I.shadow;if(I.map&&(n.spotLightMap[x]=I.map,x++,P.updateMatrices(I),I.castShadow&&b++),n.spotLightMatrix[M]=P.matrix,I.castShadow){const K=t.get(I);K.shadowIntensity=P.intensity,K.shadowBias=P.bias,K.shadowNormalBias=P.normalBias,K.shadowRadius=P.radius,K.shadowMapSize=P.mapSize,n.spotShadow[M]=K,n.spotShadowMap[M]=j,A++}M++}else if(I.isRectAreaLight){const Y=e.get(I);Y.color.copy(q).multiplyScalar(X),Y.halfWidth.set(I.width*.5,0,0),Y.halfHeight.set(0,I.height*.5,0),n.rectArea[w]=Y,w++}else if(I.isPointLight){const Y=e.get(I);if(Y.color.copy(I.color).multiplyScalar(I.intensity),Y.distance=I.distance,Y.decay=I.decay,I.castShadow){const P=I.shadow,K=t.get(I);K.shadowIntensity=P.intensity,K.shadowBias=P.bias,K.shadowNormalBias=P.normalBias,K.shadowRadius=P.radius,K.shadowMapSize=P.mapSize,K.shadowCameraNear=P.camera.near,K.shadowCameraFar=P.camera.far,n.pointShadow[m]=K,n.pointShadowMap[m]=j,n.pointShadowMatrix[m]=I.shadow.matrix,T++}n.point[m]=Y,m++}else if(I.isHemisphereLight){const Y=e.get(I);Y.skyColor.copy(I.color).multiplyScalar(X),Y.groundColor.copy(I.groundColor).multiplyScalar(X),n.hemi[v]=Y,v++}}w>0&&(r.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Ee.LTC_FLOAT_1,n.rectAreaLTC2=Ee.LTC_FLOAT_2):(n.rectAreaLTC1=Ee.LTC_HALF_1,n.rectAreaLTC2=Ee.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=d,n.ambient[2]=h;const L=n.hash;(L.sunLength!==f||L.directionalLength!==p||L.pointLength!==m||L.spotLength!==M||L.rectAreaLength!==w||L.hemiLength!==v||L.numSunShadows!==_||L.numDirectionalShadows!==y||L.numPointShadows!==T||L.numSpotShadows!==A||L.numSpotMaps!==x||L.numLightProbes!==C)&&(n.sun.length=f,n.directional.length=p,n.spot.length=M,n.rectArea.length=w,n.point.length=m,n.hemi.length=v,n.sunShadow.length=_,n.sunShadowMap.length=_,n.sunShadowMatrix.length=g,n.sunShadowCascade.length=g,n.directionalShadow.length=y,n.directionalShadowMap.length=y,n.directionalShadowMatrix.length=y,n.pointShadow.length=T,n.pointShadowMap.length=T,n.pointShadowMatrix.length=T,n.spotShadow.length=A,n.spotShadowMap.length=A,n.spotLightMatrix.length=A+x-b,n.spotLightMap.length=x,n.numSpotLightShadowsWithMaps=b,n.numLightProbes=C,L.sunLength=f,L.directionalLength=p,L.pointLength=m,L.spotLength=M,L.rectAreaLength=w,L.hemiLength=v,L.numSunShadows=_,L.numDirectionalShadows=y,L.numPointShadows=T,L.numSpotShadows=A,L.numSpotMaps=x,L.numLightProbes=C,n.version=fM++)}function l(c,u){let d=0,h=0,f=0,_=0,g=0,p=0;const m=u.matrixWorldInverse;for(let M=0,w=c.length;M<w;M++){const v=c[M];if(v.isSunLight){const y=n.sun[d];y.direction.setFromMatrixPosition(v.matrixWorld),y.direction.transformDirection(m),d++}else if(v.isDirectionalLight){const y=n.directional[h];y.direction.setFromMatrixPosition(v.matrixWorld),i.setFromMatrixPosition(v.target.matrixWorld),y.direction.sub(i),y.direction.transformDirection(m),h++}else if(v.isSpotLight){const y=n.spot[_];y.position.setFromMatrixPosition(v.matrixWorld),y.position.applyMatrix4(m),y.direction.setFromMatrixPosition(v.matrixWorld),i.setFromMatrixPosition(v.target.matrixWorld),y.direction.sub(i),y.direction.transformDirection(m),_++}else if(v.isRectAreaLight){const y=n.rectArea[g];y.position.setFromMatrixPosition(v.matrixWorld),y.position.applyMatrix4(m),a.identity(),s.copy(v.matrixWorld),s.premultiply(m),a.extractRotation(s),y.halfWidth.set(v.width*.5,0,0),y.halfHeight.set(0,v.height*.5,0),y.halfWidth.applyMatrix4(a),y.halfHeight.applyMatrix4(a),g++}else if(v.isPointLight){const y=n.point[f];y.position.setFromMatrixPosition(v.matrixWorld),y.position.applyMatrix4(m),f++}else if(v.isHemisphereLight){const y=n.hemi[p];y.direction.setFromMatrixPosition(v.matrixWorld),y.direction.transformDirection(m),p++}}}return{setup:o,setupView:l,state:n}}function qp(r){const e=new pM(r),t=[],n=[],i=[];function s(h){d.camera=h,t.length=0,n.length=0,i.length=0}function a(h){t.push(h)}function o(h){n.push(h)}function l(h){i.push(h)}function c(){e.setup(t)}function u(h){e.setupView(t,h)}const d={lightsArray:t,shadowsArray:n,lightProbeGridArray:i,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:s,state:d,setupLights:c,setupLightsView:u,pushLight:a,pushShadow:o,pushLightProbeGrid:l}}function mM(r){let e=new WeakMap;function t(i,s=0){const a=e.get(i);let o;return a===void 0?(o=new qp(r),e.set(i,[o])):s>=a.length?(o=new qp(r),a.push(o)):o=a[s],o}function n(){e=new WeakMap}return{get:t,dispose:n}}const _M=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,gM=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,xM=[new O(1,0,0),new O(-1,0,0),new O(0,1,0),new O(0,-1,0),new O(0,0,1),new O(0,0,-1)],vM=[new O(0,-1,0),new O(0,-1,0),new O(0,0,1),new O(0,0,-1),new O(0,-1,0),new O(0,-1,0)],Bp=new bt,ka=new O,Tu=new O;function SM(r,e,t){let n=new Cf;const i=new he,s=new he,a=new Bt,o=new v2,l=new S2,c={},u=t.maxTextureSize,d={[ps]:Zn,[Zn]:ps,[oi]:oi},h=new dn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new he},radius:{value:4}},vertexShader:_M,fragmentShader:gM}),f=h.clone();f.defines.HORIZONTAL_PASS=1;const _=new Vt;_.setAttribute("position",new Ei(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const g=new tt(_,h),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Bl;let m=this.type;this.render=function(T,A,x){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||T.length===0)return;this.type===c_&&(Ke("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Bl);const b=r.getRenderTarget(),C=r.getActiveCubeFace(),L=r.getActiveMipmapLevel(),D=r.state;D.setBlending(Zi),D.buffers.depth.getReversed()===!0?D.buffers.color.setClear(0,0,0,0):D.buffers.color.setClear(1,1,1,1),D.buffers.depth.setTest(!0),D.setScissorTest(!1);const k=m!==this.type;k&&A.traverse(function(I){I.material&&(Array.isArray(I.material)?I.material.forEach(q=>q.needsUpdate=!0):I.material.needsUpdate=!0)});for(let I=0,q=T.length;I<q;I++){const X=T[I],z=X.shadow;if(z===void 0){Ke("WebGLShadowMap:",X,"has no shadow.");continue}if(z.autoUpdate===!1&&z.needsUpdate===!1)continue;i.copy(z.mapSize);const j=z.getFrameExtents();i.multiply(j),s.copy(z.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(s.x=Math.floor(u/j.x),i.x=s.x*j.x,z.mapSize.x=s.x),i.y>u&&(s.y=Math.floor(u/j.y),i.y=s.y*j.y,z.mapSize.y=s.y));const Y=r.state.buffers.depth.getReversed();if(z.camera._reversedDepth=Y,z.map===null||k===!0){if(z.map!==null&&(z.map.depthTexture!==null&&(z.map.depthTexture.dispose(),z.map.depthTexture=null),z.map.dispose()),this.type===Xa){if(X.isPointLight){Ke("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}z.map=new Hn(i.x,i.y,{format:_s,type:$n,minFilter:Rn,magFilter:Rn,generateMipmaps:!1}),z.map.texture.name=X.name+".shadowMap",z.map.depthTexture=new Ao(i.x,i.y,Ni),z.map.depthTexture.name=X.name+".shadowMapDepth",z.map.depthTexture.format=pr,z.map.depthTexture.compareFunction=null,z.map.depthTexture.minFilter=_n,z.map.depthTexture.magFilter=_n}else X.isPointLight?(z.map=new cm(i.x),z.map.depthTexture=new Ug(i.x,Qi)):(z.map=new Hn(i.x,i.y),z.map.depthTexture=new Ao(i.x,i.y,Qi)),z.map.depthTexture.name=X.name+".shadowMap",z.map.depthTexture.format=pr,this.type===Bl?(z.map.depthTexture.compareFunction=Y?bf:yf,z.map.depthTexture.minFilter=Rn,z.map.depthTexture.magFilter=Rn):(z.map.depthTexture.compareFunction=null,z.map.depthTexture.minFilter=_n,z.map.depthTexture.magFilter=_n);z.camera.updateProjectionMatrix()}z.map.isWebGLCubeRenderTarget!==!0&&(z.map.width!==i.x||z.map.height!==i.y)&&z.map.setSize(i.x,i.y);const P=z.map.isWebGLCubeRenderTarget?6:z.getViewportCount();X.isPointLight!==!0&&z.updateMatrices(X,x);for(let K=0;K<P;K++){const we=z.getCamera(K);if(X.isPointLight){const Te=z.camera,Ye=z.matrix,We=X.distance||Te.far;We!==Te.far&&(Te.far=We,Te.updateProjectionMatrix()),ka.setFromMatrixPosition(X.matrixWorld),Te.position.copy(ka),Tu.copy(Te.position),Tu.add(xM[K]),Te.up.copy(vM[K]),Te.lookAt(Tu),Te.updateMatrixWorld(),Ye.makeTranslation(-ka.x,-ka.y,-ka.z),Bp.multiplyMatrices(Te.projectionMatrix,Te.matrixWorldInverse),z._frustum.setFromProjectionMatrix(Bp,Te.coordinateSystem,Te.reversedDepth)}if(z.map.isWebGLCubeRenderTarget)r.setRenderTarget(z.map,K),r.clear();else{K===0&&(r.setRenderTarget(z.map),r.clear());const Te=z.getViewport(K);a.set(s.x*Te.x,s.y*Te.y,s.x*Te.z,s.y*Te.w),D.viewport(a)}n=z.getFrustum(K),v(A,x,we,X,this.type)}z.isPointLightShadow!==!0&&this.type===Xa&&M(z,x),z.needsUpdate=!1}m=this.type,p.needsUpdate=!1,r.setRenderTarget(b,C,L)};function M(T,A){const x=e.update(g);h.defines.VSM_SAMPLES!==T.blurSamples&&(h.defines.VSM_SAMPLES=T.blurSamples,f.defines.VSM_SAMPLES=T.blurSamples,h.needsUpdate=!0,f.needsUpdate=!0),T.mapPass===null?T.mapPass=new Hn(i.x,i.y,{format:_s,type:$n}):(T.mapPass.width!==T.map.width||T.mapPass.height!==T.map.height)&&T.mapPass.setSize(T.map.width,T.map.height),h.uniforms.shadow_pass.value=T.map.depthTexture,h.uniforms.resolution.value.set(T.map.width,T.map.height),h.uniforms.radius.value=T.radius,r.setRenderTarget(T.mapPass),r.clear(),r.renderBufferDirect(A,null,x,h,g,null),f.uniforms.shadow_pass.value=T.mapPass.texture,f.uniforms.resolution.value.set(T.map.width,T.map.height),f.uniforms.radius.value=T.radius,r.setRenderTarget(T.map),r.clear(),r.renderBufferDirect(A,null,x,f,g,null)}function w(T,A,x,b){let C=null;const L=x.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(L!==void 0)C=L;else if(C=x.isPointLight===!0?l:o,r.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0||A.alphaToCoverage===!0){const D=C.uuid,k=A.uuid;let I=c[D];I===void 0&&(I={},c[D]=I);let q=I[k];q===void 0&&(q=C.clone(),I[k]=q,A.addEventListener("dispose",y)),C=q}if(C.visible=A.visible,C.wireframe=A.wireframe,b===Xa?C.side=A.shadowSide!==null?A.shadowSide:A.side:C.side=A.shadowSide!==null?A.shadowSide:d[A.side],C.alphaMap=A.alphaMap,C.alphaTest=A.alphaToCoverage===!0?.5:A.alphaTest,C.map=A.map,C.clipShadows=A.clipShadows,C.clippingPlanes=A.clippingPlanes,C.clipIntersection=A.clipIntersection,C.displacementMap=A.displacementMap,C.displacementScale=A.displacementScale,C.displacementBias=A.displacementBias,C.wireframeLinewidth=A.wireframeLinewidth,C.linewidth=A.linewidth,x.isPointLight===!0&&C.isMeshDistanceMaterial===!0){const D=r.properties.get(C);D.light=x}return C}function v(T,A,x,b,C){if(T.visible===!1)return;if(T.layers.test(A.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&C===Xa)&&(!T.frustumCulled||T.intersectsFrustum(n))){T.modelViewMatrix.multiplyMatrices(x.matrixWorldInverse,T.matrixWorld);const k=e.update(T),I=T.material;if(Array.isArray(I)){const q=k.groups;for(let X=0,z=q.length;X<z;X++){const j=q[X],Y=I[j.materialIndex];if(Y&&Y.visible){const P=w(T,Y,b,C);T.onBeforeShadow(r,T,A,x,k,P,j),r.renderBufferDirect(x,null,k,P,T,j),T.onAfterShadow(r,T,A,x,k,P,j)}}}else if(I.visible){const q=w(T,I,b,C);T.onBeforeShadow(r,T,A,x,k,q,null),r.renderBufferDirect(x,null,k,q,T,null),T.onAfterShadow(r,T,A,x,k,q,null)}}const D=T.children;for(let k=0,I=D.length;k<I;k++)v(D[k],A,x,b,C)}function y(T){T.target.removeEventListener("dispose",y);for(const x in c){const b=c[x],C=T.target.uuid;C in b&&(b[C].dispose(),delete b[C])}}}function MM(r,e){function t(){let F=!1;const _e=new Bt;let ne=null;const Me=new Bt(0,0,0,0);return{setMask:function(be){ne!==be&&!F&&(r.colorMask(be,be,be,be),ne=be)},setLocked:function(be){F=be},setClear:function(be,se,ue,ae,Ve){Ve===!0&&(be*=ae,se*=ae,ue*=ae),_e.set(be,se,ue,ae),Me.equals(_e)===!1&&(r.clearColor(be,se,ue,ae),Me.copy(_e))},reset:function(){F=!1,ne=null,Me.set(-1,0,0,0)}}}function n(){let F=!1,_e=!1,ne=null,Me=null,be=null;return{setReversed:function(se){if(_e!==se){const ue=e.get("EXT_clip_control");se?ue.clipControlEXT(ue.LOWER_LEFT_EXT,ue.ZERO_TO_ONE_EXT):ue.clipControlEXT(ue.LOWER_LEFT_EXT,ue.NEGATIVE_ONE_TO_ONE_EXT),_e=se;const ae=be;be=null,this.setClear(ae)}},getReversed:function(){return _e},setTest:function(se){se?te(r.DEPTH_TEST):me(r.DEPTH_TEST)},setMask:function(se){ne!==se&&!F&&(r.depthMask(se),ne=se)},setFunc:function(se){if(_e&&(se=W_[se]),Me!==se){switch(se){case Vu:r.depthFunc(r.NEVER);break;case Hu:r.depthFunc(r.ALWAYS);break;case Wu:r.depthFunc(r.LESS);break;case bo:r.depthFunc(r.LEQUAL);break;case Xu:r.depthFunc(r.EQUAL);break;case Yu:r.depthFunc(r.GEQUAL);break;case Zu:r.depthFunc(r.GREATER);break;case $u:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}Me=se}},setLocked:function(se){F=se},setClear:function(se){be!==se&&(be=se,_e&&(se=1-se),r.clearDepth(se))},reset:function(){F=!1,ne=null,Me=null,be=null,_e=!1}}}function i(){let F=!1,_e=null,ne=null,Me=null,be=null,se=null,ue=null,ae=null,Ve=null;return{setTest:function(le){F||(le?te(r.STENCIL_TEST):me(r.STENCIL_TEST))},setMask:function(le){_e!==le&&!F&&(r.stencilMask(le),_e=le)},setFunc:function(le,Xe,Oe){(ne!==le||Me!==Xe||be!==Oe)&&(r.stencilFunc(le,Xe,Oe),ne=le,Me=Xe,be=Oe)},setOp:function(le,Xe,Oe){(se!==le||ue!==Xe||ae!==Oe)&&(r.stencilOp(le,Xe,Oe),se=le,ue=Xe,ae=Oe)},setLocked:function(le){F=le},setClear:function(le){Ve!==le&&(r.clearStencil(le),Ve=le)},reset:function(){F=!1,_e=null,ne=null,Me=null,be=null,se=null,ue=null,ae=null,Ve=null}}}const s=new t,a=new n,o=new i,l=new WeakMap,c=new WeakMap;let u={},d={},h={},f=new WeakMap,_=[],g=null,p=!1,m=null,M=null,w=null,v=null,y=null,T=null,A=null,x=new Je(0,0,0),b=0,C=!1,L=null,D=null,k=null,I=null,q=null;const X=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let z=!1,j=0;const Y=r.getParameter(r.VERSION);Y.indexOf("WebGL")!==-1?(j=parseFloat(/^WebGL (\d)/.exec(Y)[1]),z=j>=1):Y.indexOf("OpenGL ES")!==-1&&(j=parseFloat(/^OpenGL ES (\d)/.exec(Y)[1]),z=j>=2);let P=null,K={};const we=r.getParameter(r.SCISSOR_BOX),Te=r.getParameter(r.VIEWPORT),Ye=new Bt().fromArray(we),We=new Bt().fromArray(Te);function Qe(F,_e,ne,Me){const be=new Uint8Array(4),se=r.createTexture();r.bindTexture(F,se),r.texParameteri(F,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(F,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let ue=0;ue<ne;ue++)F===r.TEXTURE_3D||F===r.TEXTURE_2D_ARRAY?r.texImage3D(_e,0,r.RGBA,1,1,Me,0,r.RGBA,r.UNSIGNED_BYTE,be):r.texImage2D(_e+ue,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,be);return se}const $={};$[r.TEXTURE_2D]=Qe(r.TEXTURE_2D,r.TEXTURE_2D,1),$[r.TEXTURE_CUBE_MAP]=Qe(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),$[r.TEXTURE_2D_ARRAY]=Qe(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),$[r.TEXTURE_3D]=Qe(r.TEXTURE_3D,r.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),te(r.DEPTH_TEST),a.setFunc(bo),N(!1),de(Pd),te(r.CULL_FACE),re(Zi);function te(F){u[F]!==!0&&(r.enable(F),u[F]=!0)}function me(F){u[F]!==!1&&(r.disable(F),u[F]=!1)}function Ge(F,_e){return h[F]!==_e?(r.bindFramebuffer(F,_e),h[F]=_e,F===r.DRAW_FRAMEBUFFER&&(h[r.FRAMEBUFFER]=_e),F===r.FRAMEBUFFER&&(h[r.DRAW_FRAMEBUFFER]=_e),!0):!1}function xe(F,_e){let ne=_,Me=!1;if(F){ne=f.get(_e),ne===void 0&&(ne=[],f.set(_e,ne));const be=F.textures;if(ne.length!==be.length||ne[0]!==r.COLOR_ATTACHMENT0){for(let se=0,ue=be.length;se<ue;se++)ne[se]=r.COLOR_ATTACHMENT0+se;ne.length=be.length,Me=!0}}else ne[0]!==r.BACK&&(ne[0]=r.BACK,Me=!0);Me&&r.drawBuffers(ne)}function Le(F){return g!==F?(r.useProgram(F),g=F,!0):!1}const Ne={[$s]:r.FUNC_ADD,[h_]:r.FUNC_SUBTRACT,[f_]:r.FUNC_REVERSE_SUBTRACT};Ne[d_]=r.MIN,Ne[p_]=r.MAX;const Q={[m_]:r.ZERO,[__]:r.ONE,[g_]:r.SRC_COLOR,[R0]:r.SRC_ALPHA,[b_]:r.SRC_ALPHA_SATURATE,[M_]:r.DST_COLOR,[v_]:r.DST_ALPHA,[x_]:r.ONE_MINUS_SRC_COLOR,[P0]:r.ONE_MINUS_SRC_ALPHA,[y_]:r.ONE_MINUS_DST_COLOR,[S_]:r.ONE_MINUS_DST_ALPHA,[T_]:r.CONSTANT_COLOR,[E_]:r.ONE_MINUS_CONSTANT_COLOR,[w_]:r.CONSTANT_ALPHA,[A_]:r.ONE_MINUS_CONSTANT_ALPHA};function re(F,_e,ne,Me,be,se,ue,ae,Ve,le){if(F===Zi){p===!0&&(me(r.BLEND),p=!1);return}if(p===!1&&(te(r.BLEND),p=!0),F!==u_){if(F!==m||le!==C){if((M!==$s||y!==$s)&&(r.blendEquation(r.FUNC_ADD),M=$s,y=$s),le)switch(F){case no:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case ic:r.blendFunc(r.ONE,r.ONE);break;case Dd:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case Ld:r.blendFuncSeparate(r.DST_COLOR,r.ONE_MINUS_SRC_ALPHA,r.ZERO,r.ONE);break;default:gt("WebGLState: Invalid blending: ",F);break}else switch(F){case no:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case ic:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE,r.ONE,r.ONE);break;case Dd:gt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Ld:gt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:gt("WebGLState: Invalid blending: ",F);break}w=null,v=null,T=null,A=null,x.set(0,0,0),b=0,m=F,C=le}return}be=be||_e,se=se||ne,ue=ue||Me,(_e!==M||be!==y)&&(r.blendEquationSeparate(Ne[_e],Ne[be]),M=_e,y=be),(ne!==w||Me!==v||se!==T||ue!==A)&&(r.blendFuncSeparate(Q[ne],Q[Me],Q[se],Q[ue]),w=ne,v=Me,T=se,A=ue),(ae.equals(x)===!1||Ve!==b)&&(r.blendColor(ae.r,ae.g,ae.b,Ve),x.copy(ae),b=Ve),m=F,C=!1}function oe(F,_e){F.side===oi?me(r.CULL_FACE):te(r.CULL_FACE);let ne=F.side===Zn;_e&&(ne=!ne),N(ne),F.blending===no&&F.transparent===!1?re(Zi):re(F.blending,F.blendEquation,F.blendSrc,F.blendDst,F.blendEquationAlpha,F.blendSrcAlpha,F.blendDstAlpha,F.blendColor,F.blendAlpha,F.premultipliedAlpha),a.setFunc(F.depthFunc),a.setTest(F.depthTest),a.setMask(F.depthWrite),s.setMask(F.colorWrite);const Me=F.stencilWrite;o.setTest(Me),Me&&(o.setMask(F.stencilWriteMask),o.setFunc(F.stencilFunc,F.stencilRef,F.stencilFuncMask),o.setOp(F.stencilFail,F.stencilZFail,F.stencilZPass)),Ue(F.polygonOffset,F.polygonOffsetFactor,F.polygonOffsetUnits),F.alphaToCoverage===!0?te(r.SAMPLE_ALPHA_TO_COVERAGE):me(r.SAMPLE_ALPHA_TO_COVERAGE)}function N(F){L!==F&&(F?r.frontFace(r.CW):r.frontFace(r.CCW),L=F)}function de(F){F!==o_?(te(r.CULL_FACE),F!==D&&(F===Pd?r.cullFace(r.BACK):F===l_?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):me(r.CULL_FACE),D=F}function Be(F){F!==k&&(z&&r.lineWidth(F),k=F)}function Ue(F,_e,ne){F?(te(r.POLYGON_OFFSET_FILL),(I!==_e||q!==ne)&&(I=_e,q=ne,a.getReversed()&&(_e=-_e),r.polygonOffset(_e,ne))):me(r.POLYGON_OFFSET_FILL)}function Ce(F){F?te(r.SCISSOR_TEST):me(r.SCISSOR_TEST)}function Ze(F){F===void 0&&(F=r.TEXTURE0+X-1),P!==F&&(r.activeTexture(F),P=F)}function U(F,_e,ne){ne===void 0&&(P===null?ne=r.TEXTURE0+X-1:ne=P);let Me=K[ne];Me===void 0&&(Me={type:void 0,texture:void 0},K[ne]=Me),(Me.type!==F||Me.texture!==_e)&&(P!==ne&&(r.activeTexture(ne),P=ne),r.bindTexture(F,_e||$[F]),Me.type=F,Me.texture=_e)}function at(){const F=K[P];F!==void 0&&F.type!==void 0&&(r.bindTexture(F.type,null),F.type=void 0,F.texture=void 0)}function He(){try{r.compressedTexImage2D(...arguments)}catch(F){gt("WebGLState:",F)}}function R(){try{r.compressedTexImage3D(...arguments)}catch(F){gt("WebGLState:",F)}}function S(){try{r.texSubImage2D(...arguments)}catch(F){gt("WebGLState:",F)}}function G(){try{r.texSubImage3D(...arguments)}catch(F){gt("WebGLState:",F)}}function V(){try{r.compressedTexSubImage2D(...arguments)}catch(F){gt("WebGLState:",F)}}function J(){try{r.compressedTexSubImage3D(...arguments)}catch(F){gt("WebGLState:",F)}}function pe(){try{r.texStorage2D(...arguments)}catch(F){gt("WebGLState:",F)}}function ce(){try{r.texStorage3D(...arguments)}catch(F){gt("WebGLState:",F)}}function ee(){try{r.texImage2D(...arguments)}catch(F){gt("WebGLState:",F)}}function ie(){try{r.texImage3D(...arguments)}catch(F){gt("WebGLState:",F)}}function ve(F){return d[F]!==void 0?d[F]:r.getParameter(F)}function Ie(F,_e){d[F]!==_e&&(r.pixelStorei(F,_e),d[F]=_e)}function Se(F){Ye.equals(F)===!1&&(r.scissor(F.x,F.y,F.z,F.w),Ye.copy(F))}function ge(F){We.equals(F)===!1&&(r.viewport(F.x,F.y,F.z,F.w),We.copy(F))}function fe(F,_e){let ne=c.get(_e);ne===void 0&&(ne=new WeakMap,c.set(_e,ne));let Me=ne.get(F);Me===void 0&&(Me=r.getUniformBlockIndex(_e,F.name),ne.set(F,Me))}function ze(F,_e){const Me=c.get(_e).get(F);l.get(_e)!==Me&&(r.uniformBlockBinding(_e,Me,F.__bindingPointIndex),l.set(_e,Me))}function $e(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),a.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),r.pixelStorei(r.PACK_ALIGNMENT,4),r.pixelStorei(r.UNPACK_ALIGNMENT,4),r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,!1),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,r.BROWSER_DEFAULT_WEBGL),r.pixelStorei(r.PACK_ROW_LENGTH,0),r.pixelStorei(r.PACK_SKIP_PIXELS,0),r.pixelStorei(r.PACK_SKIP_ROWS,0),r.pixelStorei(r.UNPACK_ROW_LENGTH,0),r.pixelStorei(r.UNPACK_IMAGE_HEIGHT,0),r.pixelStorei(r.UNPACK_SKIP_PIXELS,0),r.pixelStorei(r.UNPACK_SKIP_ROWS,0),r.pixelStorei(r.UNPACK_SKIP_IMAGES,0),u={},d={},P=null,K={},h={},f=new WeakMap,_=[],g=null,p=!1,m=null,M=null,w=null,v=null,y=null,T=null,A=null,x=new Je(0,0,0),b=0,C=!1,L=null,D=null,k=null,I=null,q=null,Ye.set(0,0,r.canvas.width,r.canvas.height),We.set(0,0,r.canvas.width,r.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:te,disable:me,bindFramebuffer:Ge,drawBuffers:xe,useProgram:Le,setBlending:re,setMaterial:oe,setFlipSided:N,setCullFace:de,setLineWidth:Be,setPolygonOffset:Ue,setScissorTest:Ce,activeTexture:Ze,bindTexture:U,unbindTexture:at,compressedTexImage2D:He,compressedTexImage3D:R,texImage2D:ee,texImage3D:ie,pixelStorei:Ie,getParameter:ve,updateUBOMapping:fe,uniformBlockBinding:ze,texStorage2D:pe,texStorage3D:ce,texSubImage2D:S,texSubImage3D:G,compressedTexSubImage2D:V,compressedTexSubImage3D:J,scissor:Se,viewport:ge,reset:$e}}function yM(r,e,t,n,i,s,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new he,u=new WeakMap,d=new Set;let h;const f=new WeakMap;let _=!1;try{_=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(R,S){return _?new OffscreenCanvas(R,S):lc("canvas")}function p(R,S,G){let V=1;const J=He(R);if((J.width>G||J.height>G)&&(V=G/Math.max(J.width,J.height)),V<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){const pe=Math.floor(V*J.width),ce=Math.floor(V*J.height);h===void 0&&(h=g(pe,ce));const ee=S?g(pe,ce):h;return ee.width=pe,ee.height=ce,ee.getContext("2d").drawImage(R,0,0,pe,ce),Ke("WebGLRenderer: Texture has been resized from ("+J.width+"x"+J.height+") to ("+pe+"x"+ce+")."),ee}else return"data"in R&&Ke("WebGLRenderer: Image in DataTexture is too big ("+J.width+"x"+J.height+")."),R;return R}function m(R){return R.generateMipmaps}function M(R){r.generateMipmap(R)}function w(R){return R.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:R.isWebGL3DRenderTarget?r.TEXTURE_3D:R.isWebGLArrayRenderTarget||R.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function v(R,S,G,V,J,pe=!1){if(R!==null){if(r[R]!==void 0)return r[R];Ke("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let ce;V&&(ce=e.get("EXT_texture_norm16"),ce||Ke("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let ee=S;if(S===r.RED&&(G===r.FLOAT&&(ee=r.R32F),G===r.HALF_FLOAT&&(ee=r.R16F),G===r.UNSIGNED_BYTE&&(ee=r.R8),G===r.UNSIGNED_SHORT&&ce&&(ee=ce.R16_EXT),G===r.SHORT&&ce&&(ee=ce.R16_SNORM_EXT)),S===r.RED_INTEGER&&(G===r.UNSIGNED_BYTE&&(ee=r.R8UI),G===r.UNSIGNED_SHORT&&(ee=r.R16UI),G===r.UNSIGNED_INT&&(ee=r.R32UI),G===r.BYTE&&(ee=r.R8I),G===r.SHORT&&(ee=r.R16I),G===r.INT&&(ee=r.R32I)),S===r.RG&&(G===r.FLOAT&&(ee=r.RG32F),G===r.HALF_FLOAT&&(ee=r.RG16F),G===r.UNSIGNED_BYTE&&(ee=r.RG8),G===r.UNSIGNED_SHORT&&ce&&(ee=ce.RG16_EXT),G===r.SHORT&&ce&&(ee=ce.RG16_SNORM_EXT)),S===r.RG_INTEGER&&(G===r.UNSIGNED_BYTE&&(ee=r.RG8UI),G===r.UNSIGNED_SHORT&&(ee=r.RG16UI),G===r.UNSIGNED_INT&&(ee=r.RG32UI),G===r.BYTE&&(ee=r.RG8I),G===r.SHORT&&(ee=r.RG16I),G===r.INT&&(ee=r.RG32I)),S===r.RGB_INTEGER&&(G===r.UNSIGNED_BYTE&&(ee=r.RGB8UI),G===r.UNSIGNED_SHORT&&(ee=r.RGB16UI),G===r.UNSIGNED_INT&&(ee=r.RGB32UI),G===r.BYTE&&(ee=r.RGB8I),G===r.SHORT&&(ee=r.RGB16I),G===r.INT&&(ee=r.RGB32I)),S===r.RGBA_INTEGER&&(G===r.UNSIGNED_BYTE&&(ee=r.RGBA8UI),G===r.UNSIGNED_SHORT&&(ee=r.RGBA16UI),G===r.UNSIGNED_INT&&(ee=r.RGBA32UI),G===r.BYTE&&(ee=r.RGBA8I),G===r.SHORT&&(ee=r.RGBA16I),G===r.INT&&(ee=r.RGBA32I)),S===r.RGB&&(G===r.UNSIGNED_SHORT&&ce&&(ee=ce.RGB16_EXT),G===r.SHORT&&ce&&(ee=ce.RGB16_SNORM_EXT),G===r.UNSIGNED_INT_5_9_9_9_REV&&(ee=r.RGB9_E5),G===r.UNSIGNED_INT_10F_11F_11F_REV&&(ee=r.R11F_G11F_B10F)),S===r.RGBA){const ie=pe?oc:ft.getTransfer(J);G===r.FLOAT&&(ee=r.RGBA32F),G===r.HALF_FLOAT&&(ee=r.RGBA16F),G===r.UNSIGNED_BYTE&&(ee=ie===vt?r.SRGB8_ALPHA8:r.RGBA8),G===r.UNSIGNED_SHORT&&ce&&(ee=ce.RGBA16_EXT),G===r.SHORT&&ce&&(ee=ce.RGBA16_SNORM_EXT),G===r.UNSIGNED_SHORT_4_4_4_4&&(ee=r.RGBA4),G===r.UNSIGNED_SHORT_5_5_5_1&&(ee=r.RGB5_A1)}return(ee===r.R16F||ee===r.R32F||ee===r.RG16F||ee===r.RG32F||ee===r.RGBA16F||ee===r.RGBA32F)&&e.get("EXT_color_buffer_float"),ee}function y(R,S){let G;return R?S===null||S===Qi||S===Eo?G=r.DEPTH24_STENCIL8:S===Ni?G=r.DEPTH32F_STENCIL8:S===To&&(G=r.DEPTH24_STENCIL8,Ke("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===Qi||S===Eo?G=r.DEPTH_COMPONENT24:S===Ni?G=r.DEPTH_COMPONENT32F:S===To&&(G=r.DEPTH_COMPONENT16),G}function T(R,S){return m(R)===!0||R.isFramebufferTexture&&R.minFilter!==_n&&R.minFilter!==Rn?Math.log2(Math.max(S.width,S.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?S.mipmaps.length:1}function A(R){const S=R.target;S.removeEventListener("dispose",A),b(S),S.isVideoTexture&&u.delete(S),S.isHTMLTexture&&d.delete(S)}function x(R){const S=R.target;S.removeEventListener("dispose",x),L(S)}function b(R){const S=n.get(R);if(S.__webglInit===void 0)return;const G=R.source,V=f.get(G);if(V){const J=V[S.__cacheKey];J.usedTimes--,J.usedTimes===0&&C(R),Object.keys(V).length===0&&f.delete(G)}n.remove(R)}function C(R){const S=n.get(R);r.deleteTexture(S.__webglTexture);const G=R.source,V=f.get(G);delete V[S.__cacheKey],a.memory.textures--}function L(R){const S=n.get(R);if(R.depthTexture&&(R.depthTexture.dispose(),n.remove(R.depthTexture)),R.isWebGLCubeRenderTarget)for(let V=0;V<6;V++){if(Array.isArray(S.__webglFramebuffer[V]))for(let J=0;J<S.__webglFramebuffer[V].length;J++)r.deleteFramebuffer(S.__webglFramebuffer[V][J]);else r.deleteFramebuffer(S.__webglFramebuffer[V]);S.__webglDepthbuffer&&r.deleteRenderbuffer(S.__webglDepthbuffer[V])}else{if(Array.isArray(S.__webglFramebuffer))for(let V=0;V<S.__webglFramebuffer.length;V++)r.deleteFramebuffer(S.__webglFramebuffer[V]);else r.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&r.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&r.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let V=0;V<S.__webglColorRenderbuffer.length;V++)S.__webglColorRenderbuffer[V]&&r.deleteRenderbuffer(S.__webglColorRenderbuffer[V]);S.__webglDepthRenderbuffer&&r.deleteRenderbuffer(S.__webglDepthRenderbuffer)}const G=R.textures;for(let V=0,J=G.length;V<J;V++){const pe=n.get(G[V]);pe.__webglTexture&&(r.deleteTexture(pe.__webglTexture),a.memory.textures--),n.remove(G[V])}n.remove(R)}let D=0;function k(){D=0}function I(){return D}function q(R){D=R}function X(){const R=D;return R>=i.maxTextures&&Ke("WebGLTextures: Trying to use "+(R+1)+" texture units while this GPU supports only "+i.maxTextures),D+=1,R}function z(R){const S=[];return S.push(R.wrapS),S.push(R.wrapT),S.push(R.wrapR||0),S.push(R.magFilter),S.push(R.minFilter),S.push(R.anisotropy),S.push(R.internalFormat),S.push(R.format),S.push(R.type),S.push(R.generateMipmaps),S.push(R.premultiplyAlpha),S.push(R.flipY),S.push(R.unpackAlignment),S.push(R.colorSpace),S.join()}function j(R,S){const G=n.get(R);if(R.isVideoTexture&&U(R),R.isRenderTargetTexture===!1&&R.isExternalTexture!==!0&&R.version>0&&G.__version!==R.version){const V=R.image;if(V===null)Ke("WebGLRenderer: Texture marked for update but no image data found.");else if(V.complete===!1)Ke("WebGLRenderer: Texture marked for update but image is incomplete");else{me(G,R,S);return}}else R.isExternalTexture&&(G.__webglTexture=R.sourceTexture?R.sourceTexture:null);t.bindTexture(r.TEXTURE_2D,G.__webglTexture,r.TEXTURE0+S)}function Y(R,S){const G=n.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&G.__version!==R.version){me(G,R,S);return}else R.isExternalTexture&&(G.__webglTexture=R.sourceTexture?R.sourceTexture:null);t.bindTexture(r.TEXTURE_2D_ARRAY,G.__webglTexture,r.TEXTURE0+S)}function P(R,S){const G=n.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&G.__version!==R.version){me(G,R,S);return}t.bindTexture(r.TEXTURE_3D,G.__webglTexture,r.TEXTURE0+S)}function K(R,S){const G=n.get(R);if(R.isCubeDepthTexture!==!0&&R.version>0&&G.__version!==R.version){Ge(G,R,S);return}t.bindTexture(r.TEXTURE_CUBE_MAP,G.__webglTexture,r.TEXTURE0+S)}const we={[Ju]:r.REPEAT,[cr]:r.CLAMP_TO_EDGE,[Ku]:r.MIRRORED_REPEAT},Te={[_n]:r.NEAREST,[P_]:r.NEAREST_MIPMAP_NEAREST,[Zo]:r.NEAREST_MIPMAP_LINEAR,[Rn]:r.LINEAR,[Xc]:r.LINEAR_MIPMAP_NEAREST,[is]:r.LINEAR_MIPMAP_LINEAR},Ye={[N_]:r.NEVER,[B_]:r.ALWAYS,[U_]:r.LESS,[yf]:r.LEQUAL,[O_]:r.EQUAL,[bf]:r.GEQUAL,[F_]:r.GREATER,[q_]:r.NOTEQUAL};function We(R,S){if(S.type===Ni&&e.has("OES_texture_float_linear")===!1&&(S.magFilter===Rn||S.magFilter===Xc||S.magFilter===Zo||S.magFilter===is||S.minFilter===Rn||S.minFilter===Xc||S.minFilter===Zo||S.minFilter===is)&&Ke("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(R,r.TEXTURE_WRAP_S,we[S.wrapS]),r.texParameteri(R,r.TEXTURE_WRAP_T,we[S.wrapT]),(R===r.TEXTURE_3D||R===r.TEXTURE_2D_ARRAY)&&r.texParameteri(R,r.TEXTURE_WRAP_R,we[S.wrapR]),r.texParameteri(R,r.TEXTURE_MAG_FILTER,Te[S.magFilter]),r.texParameteri(R,r.TEXTURE_MIN_FILTER,Te[S.minFilter]),S.compareFunction&&(r.texParameteri(R,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(R,r.TEXTURE_COMPARE_FUNC,Ye[S.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===_n||S.minFilter!==Zo&&S.minFilter!==is||S.type===Ni&&e.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||n.get(S).__currentAnisotropy){const G=e.get("EXT_texture_filter_anisotropic");r.texParameterf(R,G.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,i.getMaxAnisotropy())),n.get(S).__currentAnisotropy=S.anisotropy}}}function Qe(R,S){let G=!1;R.__webglInit===void 0&&(R.__webglInit=!0,S.addEventListener("dispose",A));const V=S.source;let J=f.get(V);J===void 0&&(J={},f.set(V,J));const pe=z(S);if(pe!==R.__cacheKey){J[pe]===void 0&&(J[pe]={texture:r.createTexture(),usedTimes:0},a.memory.textures++,G=!0),J[pe].usedTimes++;const ce=J[R.__cacheKey];ce!==void 0&&(J[R.__cacheKey].usedTimes--,ce.usedTimes===0&&C(S)),R.__cacheKey=pe,R.__webglTexture=J[pe].texture}return G}function $(R,S,G){return Math.floor(Math.floor(R/G)/S)}function te(R,S,G,V){const pe=R.updateRanges;if(pe.length===0)t.texSubImage2D(r.TEXTURE_2D,0,0,0,S.width,S.height,G,V,S.data);else{pe.sort((Ie,Se)=>Ie.start-Se.start);let ce=0;for(let Ie=1;Ie<pe.length;Ie++){const Se=pe[ce],ge=pe[Ie],fe=Se.start+Se.count,ze=$(ge.start,S.width,4),$e=$(Se.start,S.width,4);ge.start<=fe+1&&ze===$e&&$(ge.start+ge.count-1,S.width,4)===ze?Se.count=Math.max(Se.count,ge.start+ge.count-Se.start):(++ce,pe[ce]=ge)}pe.length=ce+1;const ee=t.getParameter(r.UNPACK_ROW_LENGTH),ie=t.getParameter(r.UNPACK_SKIP_PIXELS),ve=t.getParameter(r.UNPACK_SKIP_ROWS);t.pixelStorei(r.UNPACK_ROW_LENGTH,S.width);for(let Ie=0,Se=pe.length;Ie<Se;Ie++){const ge=pe[Ie],fe=Math.floor(ge.start/4),ze=Math.ceil(ge.count/4),$e=fe%S.width,F=Math.floor(fe/S.width),_e=ze,ne=1;t.pixelStorei(r.UNPACK_SKIP_PIXELS,$e),t.pixelStorei(r.UNPACK_SKIP_ROWS,F),t.texSubImage2D(r.TEXTURE_2D,0,$e,F,_e,ne,G,V,S.data)}R.clearUpdateRanges(),t.pixelStorei(r.UNPACK_ROW_LENGTH,ee),t.pixelStorei(r.UNPACK_SKIP_PIXELS,ie),t.pixelStorei(r.UNPACK_SKIP_ROWS,ve)}}function me(R,S,G){let V=r.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(V=r.TEXTURE_2D_ARRAY),S.isData3DTexture&&(V=r.TEXTURE_3D);const J=Qe(R,S),pe=S.source;t.bindTexture(V,R.__webglTexture,r.TEXTURE0+G);const ce=n.get(pe);if(pe.version!==ce.__version||J===!0){if(t.activeTexture(r.TEXTURE0+G),(typeof ImageBitmap<"u"&&S.image instanceof ImageBitmap)===!1){const ne=ft.getPrimaries(ft.workingColorSpace),Me=S.colorSpace===Ar?null:ft.getPrimaries(S.colorSpace),be=S.colorSpace===Ar||ne===Me?r.NONE:r.BROWSER_DEFAULT_WEBGL;t.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,S.flipY),t.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),t.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,be)}t.pixelStorei(r.UNPACK_ALIGNMENT,S.unpackAlignment);let ie=p(S.image,!1,i.maxTextureSize);ie=at(S,ie);const ve=s.convert(S.format,S.colorSpace),Ie=s.convert(S.type);let Se=v(S.internalFormat,ve,Ie,S.normalized,S.colorSpace,S.isVideoTexture);We(V,S);let ge;const fe=S.mipmaps,ze=S.isVideoTexture!==!0,$e=ce.__version===void 0||J===!0,F=pe.dataReady,_e=T(S,ie);if(S.isDepthTexture)Se=y(S.format===rs,S.type),$e&&(ze?t.texStorage2D(r.TEXTURE_2D,1,Se,ie.width,ie.height):t.texImage2D(r.TEXTURE_2D,0,Se,ie.width,ie.height,0,ve,Ie,null));else if(S.isDataTexture)if(fe.length>0){ze&&$e&&t.texStorage2D(r.TEXTURE_2D,_e,Se,fe[0].width,fe[0].height);for(let ne=0,Me=fe.length;ne<Me;ne++)ge=fe[ne],ze?F&&t.texSubImage2D(r.TEXTURE_2D,ne,0,0,ge.width,ge.height,ve,Ie,ge.data):t.texImage2D(r.TEXTURE_2D,ne,Se,ge.width,ge.height,0,ve,Ie,ge.data);S.generateMipmaps=!1}else ze?($e&&t.texStorage2D(r.TEXTURE_2D,_e,Se,ie.width,ie.height),F&&te(S,ie,ve,Ie)):t.texImage2D(r.TEXTURE_2D,0,Se,ie.width,ie.height,0,ve,Ie,ie.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){ze&&$e&&t.texStorage3D(r.TEXTURE_2D_ARRAY,_e,Se,fe[0].width,fe[0].height,ie.depth);for(let ne=0,Me=fe.length;ne<Me;ne++)if(ge=fe[ne],S.format!==Ui)if(ve!==null)if(ze){if(F)if(S.layerUpdates.size>0){const be=gp(ge.width,ge.height,S.format,S.type);for(const se of S.layerUpdates){const ue=ge.data.subarray(se*be/ge.data.BYTES_PER_ELEMENT,(se+1)*be/ge.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,ne,0,0,se,ge.width,ge.height,1,ve,ue)}}else t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,ne,0,0,0,ge.width,ge.height,ie.depth,ve,ge.data)}else t.compressedTexImage3D(r.TEXTURE_2D_ARRAY,ne,Se,ge.width,ge.height,ie.depth,0,ge.data,0,0);else Ke("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ze?F&&t.texSubImage3D(r.TEXTURE_2D_ARRAY,ne,0,0,0,ge.width,ge.height,ie.depth,ve,Ie,ge.data):t.texImage3D(r.TEXTURE_2D_ARRAY,ne,Se,ge.width,ge.height,ie.depth,0,ve,Ie,ge.data);S.layerUpdates.size>0&&S.clearLayerUpdates()}else{ze&&$e&&t.texStorage2D(r.TEXTURE_2D,_e,Se,fe[0].width,fe[0].height);for(let ne=0,Me=fe.length;ne<Me;ne++)ge=fe[ne],S.format!==Ui?ve!==null?ze?F&&t.compressedTexSubImage2D(r.TEXTURE_2D,ne,0,0,ge.width,ge.height,ve,ge.data):t.compressedTexImage2D(r.TEXTURE_2D,ne,Se,ge.width,ge.height,0,ge.data):Ke("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ze?F&&t.texSubImage2D(r.TEXTURE_2D,ne,0,0,ge.width,ge.height,ve,Ie,ge.data):t.texImage2D(r.TEXTURE_2D,ne,Se,ge.width,ge.height,0,ve,Ie,ge.data)}else if(S.isDataArrayTexture)if(ze){if($e&&t.texStorage3D(r.TEXTURE_2D_ARRAY,_e,Se,ie.width,ie.height,ie.depth),F)if(S.layerUpdates.size>0){const ne=gp(ie.width,ie.height,S.format,S.type);for(const Me of S.layerUpdates){const be=ie.data.subarray(Me*ne/ie.data.BYTES_PER_ELEMENT,(Me+1)*ne/ie.data.BYTES_PER_ELEMENT);t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,Me,ie.width,ie.height,1,ve,Ie,be)}S.clearLayerUpdates()}else t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,ie.width,ie.height,ie.depth,ve,Ie,ie.data)}else t.texImage3D(r.TEXTURE_2D_ARRAY,0,Se,ie.width,ie.height,ie.depth,0,ve,Ie,ie.data);else if(S.isData3DTexture)ze?($e&&t.texStorage3D(r.TEXTURE_3D,_e,Se,ie.width,ie.height,ie.depth),F&&t.texSubImage3D(r.TEXTURE_3D,0,0,0,0,ie.width,ie.height,ie.depth,ve,Ie,ie.data)):t.texImage3D(r.TEXTURE_3D,0,Se,ie.width,ie.height,ie.depth,0,ve,Ie,ie.data);else if(S.isFramebufferTexture){if($e)if(ze)t.texStorage2D(r.TEXTURE_2D,_e,Se,ie.width,ie.height);else{let ne=ie.width,Me=ie.height;for(let be=0;be<_e;be++)t.texImage2D(r.TEXTURE_2D,be,Se,ne,Me,0,ve,Ie,null),ne>>=1,Me>>=1}}else if(S.isHTMLTexture){if("texElementImage2D"in r){const ne=r.canvas;if(ne.hasAttribute("layoutsubtree")||ne.setAttribute("layoutsubtree","true"),ie.parentNode!==ne){ne.appendChild(ie),d.add(S),ne.onpaint=Me=>{const be=Me.changedElements;for(const se of d)be.includes(se.image)&&(se.needsUpdate=!0)},ne.requestPaint();return}if(r.texElementImage2D.length===3)r.texElementImage2D(r.TEXTURE_2D,r.RGBA8,ie);else{const be=r.RGBA,se=r.RGBA,ue=r.UNSIGNED_BYTE;r.texElementImage2D(r.TEXTURE_2D,0,be,se,ue,ie)}r.texParameteri(r.TEXTURE_2D,r.TEXTURE_MIN_FILTER,r.LINEAR),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_S,r.CLAMP_TO_EDGE),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_T,r.CLAMP_TO_EDGE)}}else if(fe.length>0){if(ze&&$e){const ne=He(fe[0]);t.texStorage2D(r.TEXTURE_2D,_e,Se,ne.width,ne.height)}for(let ne=0,Me=fe.length;ne<Me;ne++)ge=fe[ne],ze?F&&t.texSubImage2D(r.TEXTURE_2D,ne,0,0,ve,Ie,ge):t.texImage2D(r.TEXTURE_2D,ne,Se,ve,Ie,ge);S.generateMipmaps=!1}else if(ze){if($e){const ne=He(ie);t.texStorage2D(r.TEXTURE_2D,_e,Se,ne.width,ne.height)}F&&t.texSubImage2D(r.TEXTURE_2D,0,0,0,ve,Ie,ie)}else t.texImage2D(r.TEXTURE_2D,0,Se,ve,Ie,ie);m(S)&&M(V),ce.__version=pe.version,S.onUpdate&&S.onUpdate(S)}R.__version=S.version}function Ge(R,S,G){if(S.image.length!==6)return;const V=Qe(R,S),J=S.source;t.bindTexture(r.TEXTURE_CUBE_MAP,R.__webglTexture,r.TEXTURE0+G);const pe=n.get(J);if(J.version!==pe.__version||V===!0){t.activeTexture(r.TEXTURE0+G);const ce=ft.getPrimaries(ft.workingColorSpace),ee=S.colorSpace===Ar?null:ft.getPrimaries(S.colorSpace),ie=S.colorSpace===Ar||ce===ee?r.NONE:r.BROWSER_DEFAULT_WEBGL;t.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,S.flipY),t.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),t.pixelStorei(r.UNPACK_ALIGNMENT,S.unpackAlignment),t.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,ie);const ve=S.isCompressedTexture||S.image[0].isCompressedTexture,Ie=S.image[0]&&S.image[0].isDataTexture,Se=[];for(let se=0;se<6;se++)!ve&&!Ie?Se[se]=p(S.image[se],!0,i.maxCubemapSize):Se[se]=Ie?S.image[se].image:S.image[se],Se[se]=at(S,Se[se]);const ge=Se[0],fe=s.convert(S.format,S.colorSpace),ze=s.convert(S.type),$e=v(S.internalFormat,fe,ze,S.normalized,S.colorSpace),F=S.isVideoTexture!==!0,_e=pe.__version===void 0||V===!0,ne=J.dataReady;let Me=T(S,ge);We(r.TEXTURE_CUBE_MAP,S);let be;if(ve){F&&_e&&t.texStorage2D(r.TEXTURE_CUBE_MAP,Me,$e,ge.width,ge.height);for(let se=0;se<6;se++){be=Se[se].mipmaps;for(let ue=0;ue<be.length;ue++){const ae=be[ue];S.format!==Ui?fe!==null?F?ne&&t.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+se,ue,0,0,ae.width,ae.height,fe,ae.data):t.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+se,ue,$e,ae.width,ae.height,0,ae.data):Ke("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):F?ne&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+se,ue,0,0,ae.width,ae.height,fe,ze,ae.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+se,ue,$e,ae.width,ae.height,0,fe,ze,ae.data)}}}else{if(be=S.mipmaps,F&&_e){be.length>0&&Me++;const se=He(Se[0]);t.texStorage2D(r.TEXTURE_CUBE_MAP,Me,$e,se.width,se.height)}for(let se=0;se<6;se++)if(Ie){F?ne&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,0,0,Se[se].width,Se[se].height,fe,ze,Se[se].data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,$e,Se[se].width,Se[se].height,0,fe,ze,Se[se].data);for(let ue=0;ue<be.length;ue++){const Ve=be[ue].image[se].image;F?ne&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+se,ue+1,0,0,Ve.width,Ve.height,fe,ze,Ve.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+se,ue+1,$e,Ve.width,Ve.height,0,fe,ze,Ve.data)}}else{F?ne&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,0,0,fe,ze,Se[se]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,$e,fe,ze,Se[se]);for(let ue=0;ue<be.length;ue++){const ae=be[ue];F?ne&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+se,ue+1,0,0,fe,ze,ae.image[se]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+se,ue+1,$e,fe,ze,ae.image[se])}}}m(S)&&M(r.TEXTURE_CUBE_MAP),pe.__version=J.version,S.onUpdate&&S.onUpdate(S)}R.__version=S.version}function xe(R,S,G,V,J,pe){const ce=s.convert(G.format,G.colorSpace),ee=s.convert(G.type),ie=v(G.internalFormat,ce,ee,G.normalized,G.colorSpace),ve=n.get(S),Ie=n.get(G);if(Ie.__renderTarget=S,!ve.__hasExternalTextures){const Se=Math.max(1,S.width>>pe),ge=Math.max(1,S.height>>pe);J===r.TEXTURE_3D||J===r.TEXTURE_2D_ARRAY?t.texImage3D(J,pe,ie,Se,ge,S.depth,0,ce,ee,null):t.texImage2D(J,pe,ie,Se,ge,0,ce,ee,null)}t.bindFramebuffer(r.FRAMEBUFFER,R),Ze(S)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,V,J,Ie.__webglTexture,0,Ce(S)):(J===r.TEXTURE_2D||J>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&J<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,V,J,Ie.__webglTexture,pe),t.bindFramebuffer(r.FRAMEBUFFER,null)}function Le(R,S,G){if(r.bindRenderbuffer(r.RENDERBUFFER,R),S.depthBuffer){const V=S.depthTexture,J=V&&V.isDepthTexture?V.type:null,pe=y(S.stencilBuffer,J),ce=S.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;Ze(S)?o.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Ce(S),pe,S.width,S.height):G?r.renderbufferStorageMultisample(r.RENDERBUFFER,Ce(S),pe,S.width,S.height):r.renderbufferStorage(r.RENDERBUFFER,pe,S.width,S.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,ce,r.RENDERBUFFER,R)}else{const V=S.textures;for(let J=0;J<V.length;J++){const pe=V[J],ce=s.convert(pe.format,pe.colorSpace),ee=s.convert(pe.type),ie=v(pe.internalFormat,ce,ee,pe.normalized,pe.colorSpace);Ze(S)?o.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Ce(S),ie,S.width,S.height):G?r.renderbufferStorageMultisample(r.RENDERBUFFER,Ce(S),ie,S.width,S.height):r.renderbufferStorage(r.RENDERBUFFER,ie,S.width,S.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function Ne(R,S,G){const V=S.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(r.FRAMEBUFFER,R),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const J=n.get(S.depthTexture);if(J.__renderTarget=S,(!J.__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),V){if(J.__webglInit===void 0&&(J.__webglInit=!0,S.depthTexture.addEventListener("dispose",A)),J.__webglTexture===void 0){J.__webglTexture=r.createTexture(),t.bindTexture(r.TEXTURE_CUBE_MAP,J.__webglTexture),We(r.TEXTURE_CUBE_MAP,S.depthTexture);const ve=s.convert(S.depthTexture.format),Ie=s.convert(S.depthTexture.type);let Se;S.depthTexture.format===pr?Se=r.DEPTH_COMPONENT24:S.depthTexture.format===rs&&(Se=r.DEPTH24_STENCIL8);for(let ge=0;ge<6;ge++)r.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0,Se,S.width,S.height,0,ve,Ie,null)}}else j(S.depthTexture,0);const pe=J.__webglTexture,ce=Ce(S),ee=V?r.TEXTURE_CUBE_MAP_POSITIVE_X+G:r.TEXTURE_2D,ie=S.depthTexture.format===rs?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;if(S.depthTexture.format===pr)Ze(S)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,ie,ee,pe,0,ce):r.framebufferTexture2D(r.FRAMEBUFFER,ie,ee,pe,0);else if(S.depthTexture.format===rs)Ze(S)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,ie,ee,pe,0,ce):r.framebufferTexture2D(r.FRAMEBUFFER,ie,ee,pe,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function Q(R){const S=n.get(R),G=R.isWebGLCubeRenderTarget===!0;if(S.__boundDepthTexture!==R.depthTexture){const V=R.depthTexture;if(S.__depthDisposeCallback&&S.__depthDisposeCallback(),V){const J=()=>{delete S.__boundDepthTexture,delete S.__depthDisposeCallback,V.removeEventListener("dispose",J)};V.addEventListener("dispose",J),S.__depthDisposeCallback=J}S.__boundDepthTexture=V}if(R.depthTexture&&!S.__autoAllocateDepthBuffer)if(G)for(let V=0;V<6;V++)Ne(S.__webglFramebuffer[V],R,V);else{const V=R.texture.mipmaps;V&&V.length>0?Ne(S.__webglFramebuffer[0],R,0):Ne(S.__webglFramebuffer,R,0)}else if(G){S.__webglDepthbuffer=[];for(let V=0;V<6;V++)if(t.bindFramebuffer(r.FRAMEBUFFER,S.__webglFramebuffer[V]),S.__webglDepthbuffer[V]===void 0)S.__webglDepthbuffer[V]=r.createRenderbuffer(),Le(S.__webglDepthbuffer[V],R,!1);else{const J=R.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,pe=S.__webglDepthbuffer[V];r.bindRenderbuffer(r.RENDERBUFFER,pe),r.framebufferRenderbuffer(r.FRAMEBUFFER,J,r.RENDERBUFFER,pe)}}else{const V=R.texture.mipmaps;if(V&&V.length>0?t.bindFramebuffer(r.FRAMEBUFFER,S.__webglFramebuffer[0]):t.bindFramebuffer(r.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer===void 0)S.__webglDepthbuffer=r.createRenderbuffer(),Le(S.__webglDepthbuffer,R,!1);else{const J=R.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,pe=S.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,pe),r.framebufferRenderbuffer(r.FRAMEBUFFER,J,r.RENDERBUFFER,pe)}}t.bindFramebuffer(r.FRAMEBUFFER,null)}function re(R,S,G){const V=n.get(R);S!==void 0&&xe(V.__webglFramebuffer,R,R.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),G!==void 0&&Q(R)}function oe(R){const S=R.texture,G=n.get(R),V=n.get(S);R.addEventListener("dispose",x);const J=R.textures,pe=R.isWebGLCubeRenderTarget===!0,ce=J.length>1;if(ce||(V.__webglTexture===void 0&&(V.__webglTexture=r.createTexture()),V.__version=S.version,a.memory.textures++),pe){G.__webglFramebuffer=[];for(let ee=0;ee<6;ee++)if(S.mipmaps&&S.mipmaps.length>0){G.__webglFramebuffer[ee]=[];for(let ie=0;ie<S.mipmaps.length;ie++)G.__webglFramebuffer[ee][ie]=r.createFramebuffer()}else G.__webglFramebuffer[ee]=r.createFramebuffer()}else{if(S.mipmaps&&S.mipmaps.length>0){G.__webglFramebuffer=[];for(let ee=0;ee<S.mipmaps.length;ee++)G.__webglFramebuffer[ee]=r.createFramebuffer()}else G.__webglFramebuffer=r.createFramebuffer();if(ce)for(let ee=0,ie=J.length;ee<ie;ee++){const ve=n.get(J[ee]);ve.__webglTexture===void 0&&(ve.__webglTexture=r.createTexture(),a.memory.textures++)}if(R.samples>0&&Ze(R)===!1){G.__webglMultisampledFramebuffer=r.createFramebuffer(),G.__webglColorRenderbuffer=[],t.bindFramebuffer(r.FRAMEBUFFER,G.__webglMultisampledFramebuffer);for(let ee=0;ee<J.length;ee++){const ie=J[ee];G.__webglColorRenderbuffer[ee]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,G.__webglColorRenderbuffer[ee]);const ve=s.convert(ie.format,ie.colorSpace),Ie=s.convert(ie.type),Se=v(ie.internalFormat,ve,Ie,ie.normalized,ie.colorSpace,R.isXRRenderTarget===!0),ge=Ce(R);r.renderbufferStorageMultisample(r.RENDERBUFFER,ge,Se,R.width,R.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+ee,r.RENDERBUFFER,G.__webglColorRenderbuffer[ee])}r.bindRenderbuffer(r.RENDERBUFFER,null),R.depthBuffer&&(G.__webglDepthRenderbuffer=r.createRenderbuffer(),Le(G.__webglDepthRenderbuffer,R,!0)),t.bindFramebuffer(r.FRAMEBUFFER,null)}}if(pe){t.bindTexture(r.TEXTURE_CUBE_MAP,V.__webglTexture),We(r.TEXTURE_CUBE_MAP,S);for(let ee=0;ee<6;ee++)if(S.mipmaps&&S.mipmaps.length>0)for(let ie=0;ie<S.mipmaps.length;ie++)xe(G.__webglFramebuffer[ee][ie],R,S,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+ee,ie);else xe(G.__webglFramebuffer[ee],R,S,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0);m(S)&&M(r.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ce){for(let ee=0,ie=J.length;ee<ie;ee++){const ve=J[ee],Ie=n.get(ve);let Se=r.TEXTURE_2D;(R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(Se=R.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),t.bindTexture(Se,Ie.__webglTexture),We(Se,ve),xe(G.__webglFramebuffer,R,ve,r.COLOR_ATTACHMENT0+ee,Se,0),m(ve)&&M(Se)}t.unbindTexture()}else{let ee=r.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(ee=R.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),t.bindTexture(ee,V.__webglTexture),We(ee,S),S.mipmaps&&S.mipmaps.length>0)for(let ie=0;ie<S.mipmaps.length;ie++)xe(G.__webglFramebuffer[ie],R,S,r.COLOR_ATTACHMENT0,ee,ie);else xe(G.__webglFramebuffer,R,S,r.COLOR_ATTACHMENT0,ee,0);m(S)&&M(ee),t.unbindTexture()}R.depthBuffer&&Q(R)}function N(R){const S=R.textures;for(let G=0,V=S.length;G<V;G++){const J=S[G];if(m(J)){const pe=w(R),ce=n.get(J).__webglTexture;t.bindTexture(pe,ce),M(pe),t.unbindTexture()}}}const de=[],Be=[];function Ue(R){if(R.samples>0){if(Ze(R)===!1){const S=R.textures,G=R.width,V=R.height;let J=r.COLOR_BUFFER_BIT;const pe=R.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,ce=n.get(R),ee=S.length>1;if(ee)for(let ve=0;ve<S.length;ve++)t.bindFramebuffer(r.FRAMEBUFFER,ce.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+ve,r.RENDERBUFFER,null),t.bindFramebuffer(r.FRAMEBUFFER,ce.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+ve,r.TEXTURE_2D,null,0);t.bindFramebuffer(r.READ_FRAMEBUFFER,ce.__webglMultisampledFramebuffer);const ie=R.texture.mipmaps;ie&&ie.length>0?t.bindFramebuffer(r.DRAW_FRAMEBUFFER,ce.__webglFramebuffer[0]):t.bindFramebuffer(r.DRAW_FRAMEBUFFER,ce.__webglFramebuffer);for(let ve=0;ve<S.length;ve++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(J|=r.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(J|=r.STENCIL_BUFFER_BIT)),ee){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,ce.__webglColorRenderbuffer[ve]);const Ie=n.get(S[ve]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,Ie,0)}r.blitFramebuffer(0,0,G,V,0,0,G,V,J,r.NEAREST),l===!0&&(de.length=0,Be.length=0,de.push(r.COLOR_ATTACHMENT0+ve),R.depthBuffer&&R.storeMultisampledDepthBuffer===!1&&(de.push(pe),Be.push(pe),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,Be)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,de))}if(t.bindFramebuffer(r.READ_FRAMEBUFFER,null),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),ee)for(let ve=0;ve<S.length;ve++){t.bindFramebuffer(r.FRAMEBUFFER,ce.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+ve,r.RENDERBUFFER,ce.__webglColorRenderbuffer[ve]);const Ie=n.get(S[ve]).__webglTexture;t.bindFramebuffer(r.FRAMEBUFFER,ce.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+ve,r.TEXTURE_2D,Ie,0)}t.bindFramebuffer(r.DRAW_FRAMEBUFFER,ce.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.storeMultisampledDepthBuffer===!1&&l){const S=R.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[S])}}}function Ce(R){return Math.min(i.maxSamples,R.samples)}function Ze(R){const S=n.get(R);return R.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function U(R){const S=a.render.frame;u.get(R)!==S&&(u.set(R,S),R.update())}function at(R,S){const G=R.colorSpace,V=R.format,J=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||G!==ac&&G!==Ar&&(ft.getTransfer(G)===vt?(V!==Ui||J!==li)&&Ke("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):gt("WebGLTextures: Unsupported texture color space:",G)),S}function He(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(c.width=R.naturalWidth||R.width,c.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(c.width=R.displayWidth,c.height=R.displayHeight):(c.width=R.width,c.height=R.height),c}this.allocateTextureUnit=X,this.resetTextureUnits=k,this.getTextureUnits=I,this.setTextureUnits=q,this.setTexture2D=j,this.setTexture2DArray=Y,this.setTexture3D=P,this.setTextureCube=K,this.rebindTextures=re,this.setupRenderTarget=oe,this.updateRenderTargetMipmap=N,this.updateMultisampleRenderTarget=Ue,this.setupDepthRenderbuffer=Q,this.setupFrameBufferTexture=xe,this.useMultisampledRTT=Ze,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function bM(r,e){function t(n,i=Ar){let s;const a=ft.getTransfer(i);if(n===li)return r.UNSIGNED_BYTE;if(n===_f)return r.UNSIGNED_SHORT_4_4_4_4;if(n===gf)return r.UNSIGNED_SHORT_5_5_5_1;if(n===U0)return r.UNSIGNED_INT_5_9_9_9_REV;if(n===O0)return r.UNSIGNED_INT_10F_11F_11F_REV;if(n===I0)return r.BYTE;if(n===N0)return r.SHORT;if(n===To)return r.UNSIGNED_SHORT;if(n===mf)return r.INT;if(n===Qi)return r.UNSIGNED_INT;if(n===Ni)return r.FLOAT;if(n===$n)return r.HALF_FLOAT;if(n===F0)return r.ALPHA;if(n===q0)return r.RGB;if(n===Ui)return r.RGBA;if(n===pr)return r.DEPTH_COMPONENT;if(n===rs)return r.DEPTH_STENCIL;if(n===xf)return r.RED;if(n===vf)return r.RED_INTEGER;if(n===_s)return r.RG;if(n===Sf)return r.RG_INTEGER;if(n===Mf)return r.RGBA_INTEGER;if(n===zl||n===kl||n===Gl||n===Vl)if(a===vt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===zl)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===kl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Gl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Vl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===zl)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===kl)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Gl)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Vl)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Qu||n===ju||n===eh||n===th)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===Qu)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===ju)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===eh)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===th)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===nh||n===ih||n===rh||n===sh||n===ah||n===rc||n===oh)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(n===nh||n===ih)return a===vt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===rh)return a===vt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(n===sh)return s.COMPRESSED_R11_EAC;if(n===ah)return s.COMPRESSED_SIGNED_R11_EAC;if(n===rc)return s.COMPRESSED_RG11_EAC;if(n===oh)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===lh||n===ch||n===uh||n===hh||n===fh||n===dh||n===ph||n===mh||n===_h||n===gh||n===xh||n===vh||n===Sh||n===Mh)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(n===lh)return a===vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===ch)return a===vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===uh)return a===vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===hh)return a===vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===fh)return a===vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===dh)return a===vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===ph)return a===vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===mh)return a===vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===_h)return a===vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===gh)return a===vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===xh)return a===vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===vh)return a===vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Sh)return a===vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Mh)return a===vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===yh||n===bh||n===Th)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(n===yh)return a===vt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===bh)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Th)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Eh||n===wh||n===sc||n===Ah)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(n===Eh)return s.COMPRESSED_RED_RGTC1_EXT;if(n===wh)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===sc)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Ah)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Eo?r.UNSIGNED_INT_24_8:r[n]!==void 0?r[n]:null}return{convert:t}}const TM=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,EM=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class wM{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const n=new $0(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new dn({vertexShader:TM,fragmentShader:EM,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new tt(new Wr(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class AM extends ys{constructor(e,t){super();const n=this;let i=null,s=1,a=null,o="local-floor",l=1,c=null,u=null,d=null,h=null,f=null,_=null;const g=typeof XRWebGLBinding<"u",p=new wM,m={},M=t.getContextAttributes();let w=null,v=null;const y=[],T=[],A=new he;let x=null,b=null;const C=new Yn;C.viewport=new Bt;const L=new Yn;L.viewport=new Bt;const D=[C,L],k=new P2;let I=null,q=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function($){let te=y[$];return te===void 0&&(te=new jc,y[$]=te),te.getTargetRaySpace()},this.getControllerGrip=function($){let te=y[$];return te===void 0&&(te=new jc,y[$]=te),te.getGripSpace()},this.getHand=function($){let te=y[$];return te===void 0&&(te=new jc,y[$]=te),te.getHandSpace()};function X($){const te=T.indexOf($.inputSource);if(te===-1)return;const me=y[te];me!==void 0&&(me.update($.inputSource,$.frame,c||a),me.dispatchEvent({type:$.type,data:$.inputSource}))}function z(){i.removeEventListener("select",X),i.removeEventListener("selectstart",X),i.removeEventListener("selectend",X),i.removeEventListener("squeeze",X),i.removeEventListener("squeezestart",X),i.removeEventListener("squeezeend",X),i.removeEventListener("end",z),i.removeEventListener("inputsourceschange",j);for(let $=0;$<y.length;$++){const te=T[$];te!==null&&(T[$]=null,y[$].disconnect(te))}I=null,q=null,p.reset();for(const $ in m)delete m[$];if(e.setRenderTarget(w),f=null,h=null,d=null,i=null,v=null,Qe.stop(),n.isPresenting=!1,e.setPixelRatio(x),e.setSize(A.width,A.height,!1),b!==null){const $=b.camera;$.fov=b.fov,$.zoom=b.zoom,$.updateProjectionMatrix(),b=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function($){s=$,n.isPresenting===!0&&Ke("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function($){o=$,n.isPresenting===!0&&Ke("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function($){c=$},this.getBaseLayer=function(){return h!==null?h:f},this.getBinding=function(){return d===null&&g&&(d=new XRWebGLBinding(i,t)),d},this.getFrame=function(){return _},this.getSession=function(){return i},this.setSession=async function($){if(i=$,i!==null){if(w=e.getRenderTarget(),i.addEventListener("select",X),i.addEventListener("selectstart",X),i.addEventListener("selectend",X),i.addEventListener("squeeze",X),i.addEventListener("squeezestart",X),i.addEventListener("squeezeend",X),i.addEventListener("end",z),i.addEventListener("inputsourceschange",j),M.xrCompatible!==!0&&await t.makeXRCompatible(),x=e.getPixelRatio(),e.getSize(A),g&&"createProjectionLayer"in XRWebGLBinding.prototype){let me=null,Ge=null,xe=null;M.depth&&(xe=M.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,me=M.stencil?rs:pr,Ge=M.stencil?Eo:Qi);const Le={colorFormat:t.RGBA8,depthFormat:xe,scaleFactor:s};d=this.getBinding(),h=d.createProjectionLayer(Le),i.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),v=new Hn(h.textureWidth,h.textureHeight,{format:Ui,type:li,depthTexture:new Ao(h.textureWidth,h.textureHeight,Ge,void 0,void 0,void 0,void 0,void 0,void 0,me),stencilBuffer:M.stencil,colorSpace:e.outputColorSpace,samples:M.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1,storeMultisampledDepthBuffer:h.ignoreDepthValues===!1,storeMultisampledStencilBuffer:h.ignoreDepthValues===!1})}else{const me={antialias:M.antialias,alpha:!0,depth:M.depth,stencil:M.stencil,framebufferScaleFactor:s};f=new XRWebGLLayer(i,t,me),i.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),v=new Hn(f.framebufferWidth,f.framebufferHeight,{format:Ui,type:li,colorSpace:e.outputColorSpace,stencilBuffer:M.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await i.requestReferenceSpace(o),Qe.setContext(i),Qe.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return p.getDepthTexture()};function j($){for(let te=0;te<$.removed.length;te++){const me=$.removed[te],Ge=T.indexOf(me);Ge>=0&&(T[Ge]=null,y[Ge].disconnect(me))}for(let te=0;te<$.added.length;te++){const me=$.added[te];let Ge=T.indexOf(me);if(Ge===-1){for(let Le=0;Le<y.length;Le++)if(Le>=T.length){T.push(me),Ge=Le;break}else if(T[Le]===null){T[Le]=me,Ge=Le;break}if(Ge===-1)break}const xe=y[Ge];xe&&xe.connect(me)}}const Y=new O,P=new O;function K($,te,me){Y.setFromMatrixPosition(te.matrixWorld),P.setFromMatrixPosition(me.matrixWorld);const Ge=Y.distanceTo(P),xe=te.projectionMatrix.elements,Le=me.projectionMatrix.elements,Ne=xe[14]/(xe[10]-1),Q=xe[14]/(xe[10]+1),re=(xe[9]+1)/xe[5],oe=(xe[9]-1)/xe[5],N=(xe[8]-1)/xe[0],de=(Le[8]+1)/Le[0],Be=Ne*N,Ue=Ne*de,Ce=Ge/(-N+de),Ze=Ce*-N;if(te.matrixWorld.decompose($.position,$.quaternion,$.scale),$.translateX(Ze),$.translateZ(Ce),$.matrixWorld.compose($.position,$.quaternion,$.scale),$.matrixWorldInverse.copy($.matrixWorld).invert(),xe[10]===-1)$.projectionMatrix.copy(te.projectionMatrix),$.projectionMatrixInverse.copy(te.projectionMatrixInverse);else{const U=Ne+Ce,at=Q+Ce,He=Be-Ze,R=Ue+(Ge-Ze),S=re*Q/at*U,G=oe*Q/at*U;$.projectionMatrix.makePerspective(He,R,S,G,U,at),$.projectionMatrixInverse.copy($.projectionMatrix).invert()}}function we($,te){te===null?$.matrixWorld.copy($.matrix):$.matrixWorld.multiplyMatrices(te.matrixWorld,$.matrix),$.matrixWorldInverse.copy($.matrixWorld).invert()}this.updateCamera=function($){if(i===null)return;let te=$.near,me=$.far;p.texture!==null&&(p.depthNear>0&&(te=p.depthNear),p.depthFar>0&&(me=p.depthFar)),k.near=L.near=C.near=te,k.far=L.far=C.far=me,(I!==k.near||q!==k.far)&&(i.updateRenderState({depthNear:k.near,depthFar:k.far}),I=k.near,q=k.far),k.layers.mask=$.layers.mask|6,C.layers.mask=k.layers.mask&-5,L.layers.mask=k.layers.mask&-3;const Ge=$.parent,xe=k.cameras;we(k,Ge);for(let Le=0;Le<xe.length;Le++)we(xe[Le],Ge);xe.length===2?K(k,C,L):k.projectionMatrix.copy(C.projectionMatrix),b===null&&$.isPerspectiveCamera&&(b={camera:$,fov:$.fov,zoom:$.zoom}),Te($,k,Ge)};function Te($,te,me){me===null?$.matrix.copy(te.matrixWorld):($.matrix.copy(me.matrixWorld),$.matrix.invert(),$.matrix.multiply(te.matrixWorld)),$.matrix.decompose($.position,$.quaternion,$.scale),$.updateMatrixWorld(!0),$.projectionMatrix.copy(te.projectionMatrix),$.projectionMatrixInverse.copy(te.projectionMatrixInverse),$.isPerspectiveCamera&&($.fov=da*2*Math.atan(1/$.projectionMatrix.elements[5]),$.zoom=1)}this.getCamera=function(){return k},this.getFoveation=function(){if(!(h===null&&f===null))return l},this.setFoveation=function($){l=$,h!==null&&(h.fixedFoveation=$),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=$)},this.hasDepthSensing=function(){return p.texture!==null},this.getDepthSensingMesh=function(){return p.getMesh(k)},this.getCameraTexture=function($){return m[$]};let Ye=null;function We($,te){if(u=te.getViewerPose(c||a),_=te,u!==null){const me=u.views;f!==null&&(e.setRenderTargetFramebuffer(v,f.framebuffer),e.setRenderTarget(v));let Ge=!1;me.length!==k.cameras.length&&(k.cameras.length=0,Ge=!0);for(let Q=0;Q<me.length;Q++){const re=me[Q];let oe=null;if(f!==null)oe=f.getViewport(re);else{const de=d.getViewSubImage(h,re);oe=de.viewport,Q===0&&(e.setRenderTargetTextures(v,de.colorTexture,de.depthStencilTexture),e.setRenderTarget(v))}let N=D[Q];N===void 0&&(N=new Yn,N.layers.enable(Q),N.viewport=new Bt,D[Q]=N),N.matrix.fromArray(re.transform.matrix),N.matrix.decompose(N.position,N.quaternion,N.scale),N.projectionMatrix.fromArray(re.projectionMatrix),N.projectionMatrixInverse.copy(N.projectionMatrix).invert(),N.viewport.set(oe.x,oe.y,oe.width,oe.height),Q===0&&(k.matrix.copy(N.matrix),k.matrix.decompose(k.position,k.quaternion,k.scale)),Ge===!0&&k.cameras.push(N)}const xe=i.enabledFeatures;if(xe&&xe.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&g){d=n.getBinding();const Q=d.getDepthInformation(me[0]);Q&&Q.isValid&&Q.texture&&p.init(Q,i.renderState)}if(xe&&xe.includes("camera-access")&&g){e.state.unbindTexture(),d=n.getBinding();for(let Q=0;Q<me.length;Q++){const re=me[Q].camera;if(re){let oe=m[re];oe||(oe=new $0,m[re]=oe);const N=d.getCameraImage(re);oe.sourceTexture=N}}}}for(let me=0;me<y.length;me++){const Ge=T[me],xe=y[me];Ge!==null&&xe!==void 0&&xe.update(Ge,te,c||a)}Ye&&Ye($,te),te.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:te}),_=null}const Qe=new om;Qe.setAnimationLoop(We),this.setAnimationLoop=function($){Ye=$},this.dispose=function(){}}}const CM=new bt,pm=new et;pm.set(-1,0,0,0,1,0,0,0,1);function RM(r,e){function t(p,m){p.matrixAutoUpdate===!0&&p.updateMatrix(),m.value.copy(p.matrix)}function n(p,m){m.color.getRGB(p.fogColor.value,rm(r)),m.isFog?(p.fogNear.value=m.near,p.fogFar.value=m.far):m.isFogExp2&&(p.fogDensity.value=m.density)}function i(p,m,M,w,v){m.isNodeMaterial?m.uniformsNeedUpdate=!1:m.isMeshBasicMaterial?s(p,m):m.isMeshLambertMaterial?(s(p,m),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)):m.isMeshToonMaterial?(s(p,m),d(p,m)):m.isMeshPhongMaterial?(s(p,m),u(p,m),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)):m.isMeshStandardMaterial?(s(p,m),h(p,m),m.isMeshPhysicalMaterial&&f(p,m,v)):m.isMeshMatcapMaterial?(s(p,m),_(p,m)):m.isMeshDepthMaterial?s(p,m):m.isMeshDistanceMaterial?(s(p,m),g(p,m)):m.isMeshNormalMaterial?s(p,m):m.isLineBasicMaterial?(a(p,m),m.isLineDashedMaterial&&o(p,m)):m.isPointsMaterial?l(p,m,M,w):m.isSpriteMaterial?c(p,m):m.isShadowMaterial?(p.color.value.copy(m.color),p.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function s(p,m){p.opacity.value=m.opacity,m.color&&p.diffuse.value.copy(m.color),m.emissive&&p.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(p.map.value=m.map,t(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.bumpMap&&(p.bumpMap.value=m.bumpMap,t(m.bumpMap,p.bumpMapTransform),p.bumpScale.value=m.bumpScale,m.side===Zn&&(p.bumpScale.value*=-1)),m.normalMap&&(p.normalMap.value=m.normalMap,t(m.normalMap,p.normalMapTransform),p.normalScale.value.copy(m.normalScale),m.side===Zn&&p.normalScale.value.negate()),m.displacementMap&&(p.displacementMap.value=m.displacementMap,t(m.displacementMap,p.displacementMapTransform),p.displacementScale.value=m.displacementScale,p.displacementBias.value=m.displacementBias),m.emissiveMap&&(p.emissiveMap.value=m.emissiveMap,t(m.emissiveMap,p.emissiveMapTransform)),m.specularMap&&(p.specularMap.value=m.specularMap,t(m.specularMap,p.specularMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest);const M=e.get(m),w=M.envMap,v=M.envMapRotation;w&&(p.envMap.value=w,p.envMapRotation.value.setFromMatrix4(CM.makeRotationFromEuler(v)).transpose(),w.isCubeTexture&&w.isRenderTargetTexture===!1&&p.envMapRotation.value.premultiply(pm),p.reflectivity.value=m.reflectivity,p.ior.value=m.ior,p.refractionRatio.value=m.refractionRatio),m.lightMap&&(p.lightMap.value=m.lightMap,p.lightMapIntensity.value=m.lightMapIntensity,t(m.lightMap,p.lightMapTransform)),m.aoMap&&(p.aoMap.value=m.aoMap,p.aoMapIntensity.value=m.aoMapIntensity,t(m.aoMap,p.aoMapTransform))}function a(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,m.map&&(p.map.value=m.map,t(m.map,p.mapTransform))}function o(p,m){p.dashSize.value=m.dashSize,p.totalSize.value=m.dashSize+m.gapSize,p.scale.value=m.scale}function l(p,m,M,w){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.size.value=m.size*M,p.scale.value=w*.5,m.map&&(p.map.value=m.map,t(m.map,p.uvTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function c(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.rotation.value=m.rotation,m.map&&(p.map.value=m.map,t(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function u(p,m){p.specular.value.copy(m.specular),p.shininess.value=Math.max(m.shininess,1e-4)}function d(p,m){m.gradientMap&&(p.gradientMap.value=m.gradientMap)}function h(p,m){p.metalness.value=m.metalness,m.metalnessMap&&(p.metalnessMap.value=m.metalnessMap,t(m.metalnessMap,p.metalnessMapTransform)),p.roughness.value=m.roughness,m.roughnessMap&&(p.roughnessMap.value=m.roughnessMap,t(m.roughnessMap,p.roughnessMapTransform)),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)}function f(p,m,M){p.ior.value=m.ior,m.sheen>0&&(p.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),p.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(p.sheenColorMap.value=m.sheenColorMap,t(m.sheenColorMap,p.sheenColorMapTransform)),m.sheenRoughnessMap&&(p.sheenRoughnessMap.value=m.sheenRoughnessMap,t(m.sheenRoughnessMap,p.sheenRoughnessMapTransform))),m.clearcoat>0&&(p.clearcoat.value=m.clearcoat,p.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(p.clearcoatMap.value=m.clearcoatMap,t(m.clearcoatMap,p.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,t(m.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(p.clearcoatNormalMap.value=m.clearcoatNormalMap,t(m.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===Zn&&p.clearcoatNormalScale.value.negate())),m.dispersion>0&&(p.dispersion.value=m.dispersion),m.retroreflectivity>0&&(p.retroreflectivity.value=m.retroreflectivity),m.iridescence>0&&(p.iridescence.value=m.iridescence,p.iridescenceIOR.value=m.iridescenceIOR,p.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(p.iridescenceMap.value=m.iridescenceMap,t(m.iridescenceMap,p.iridescenceMapTransform)),m.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=m.iridescenceThicknessMap,t(m.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),m.transmission>0&&(p.transmission.value=m.transmission,p.transmissionSamplerMap.value=M.texture,p.transmissionSamplerSize.value.set(M.width,M.height),m.transmissionMap&&(p.transmissionMap.value=m.transmissionMap,t(m.transmissionMap,p.transmissionMapTransform)),p.thickness.value=m.thickness,m.thicknessMap&&(p.thicknessMap.value=m.thicknessMap,t(m.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=m.attenuationDistance,p.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(p.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(p.anisotropyMap.value=m.anisotropyMap,t(m.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=m.specularIntensity,p.specularColor.value.copy(m.specularColor),m.specularColorMap&&(p.specularColorMap.value=m.specularColorMap,t(m.specularColorMap,p.specularColorMapTransform)),m.specularIntensityMap&&(p.specularIntensityMap.value=m.specularIntensityMap,t(m.specularIntensityMap,p.specularIntensityMapTransform))}function _(p,m){m.matcap&&(p.matcap.value=m.matcap)}function g(p,m){const M=e.get(m).light;p.referencePosition.value.setFromMatrixPosition(M.matrixWorld),p.nearDistance.value=M.shadow.camera.near,p.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function PM(r,e,t,n){let i={},s={},a=[];const o=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function l(v,y){const T=y.program;n.uniformBlockBinding(v,T)}function c(v,y){let T=i[v.id];T===void 0&&(p(v),T=u(v),i[v.id]=T,v.addEventListener("dispose",M));const A=y.program;n.updateUBOMapping(v,A);const x=e.render.frame;s[v.id]!==x&&(h(v),s[v.id]=x)}function u(v){const y=d();v.__bindingPointIndex=y;const T=r.createBuffer(),A=v.__size,x=v.usage;return r.bindBuffer(r.UNIFORM_BUFFER,T),r.bufferData(r.UNIFORM_BUFFER,A,x),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,y,T),T}function d(){for(let v=0;v<o;v++)if(a.indexOf(v)===-1)return a.push(v),v;return gt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(v){const y=i[v.id],T=v.uniforms,A=v.__cache;r.bindBuffer(r.UNIFORM_BUFFER,y);for(let x=0,b=T.length;x<b;x++){const C=T[x];if(Array.isArray(C))for(let L=0,D=C.length;L<D;L++)f(C[L],x,L,A);else f(C,x,0,A)}r.bindBuffer(r.UNIFORM_BUFFER,null)}function f(v,y,T,A){if(g(v,y,T,A)===!0){const x=v.__offset,b=v.value;if(Array.isArray(b)){let C=0;for(let L=0;L<b.length;L++){const D=b[L],k=m(D);_(D,v.__data,C),typeof D!="number"&&typeof D!="boolean"&&!D.isMatrix3&&!ArrayBuffer.isView(D)&&(C+=k.storage/Float32Array.BYTES_PER_ELEMENT)}}else _(b,v.__data,0);r.bufferSubData(r.UNIFORM_BUFFER,x,v.__data)}}function _(v,y,T){typeof v=="number"||typeof v=="boolean"?y[0]=v:v.isMatrix3?(y[0]=v.elements[0],y[1]=v.elements[1],y[2]=v.elements[2],y[3]=0,y[4]=v.elements[3],y[5]=v.elements[4],y[6]=v.elements[5],y[7]=0,y[8]=v.elements[6],y[9]=v.elements[7],y[10]=v.elements[8],y[11]=0):ArrayBuffer.isView(v)?y.set(new v.constructor(v.buffer,v.byteOffset,y.length)):v.toArray(y,T)}function g(v,y,T,A){const x=v.value,b=y+"_"+T;if(A[b]===void 0)return typeof x=="number"||typeof x=="boolean"?A[b]=x:ArrayBuffer.isView(x)?A[b]=x.slice():A[b]=x.clone(),!0;{const C=A[b];if(typeof x=="number"||typeof x=="boolean"){if(C!==x)return A[b]=x,!0}else{if(ArrayBuffer.isView(x))return!0;if(C.equals(x)===!1)return C.copy(x),!0}}return!1}function p(v){const y=v.uniforms;let T=0;const A=16;for(let b=0,C=y.length;b<C;b++){const L=Array.isArray(y[b])?y[b]:[y[b]];for(let D=0,k=L.length;D<k;D++){const I=L[D],q=Array.isArray(I.value)?I.value:[I.value];for(let X=0,z=q.length;X<z;X++){const j=q[X],Y=m(j),P=T%A,K=P%Y.boundary,we=P+K;T+=K,we!==0&&A-we<Y.storage&&(T+=A-we),I.__data=new Float32Array(Y.storage/Float32Array.BYTES_PER_ELEMENT),I.__offset=T,T+=Y.storage}}}const x=T%A;return x>0&&(T+=A-x),v.__size=T,v.__cache={},this}function m(v){const y={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(y.boundary=4,y.storage=4):v.isVector2?(y.boundary=8,y.storage=8):v.isVector3||v.isColor?(y.boundary=16,y.storage=12):v.isVector4?(y.boundary=16,y.storage=16):v.isMatrix3?(y.boundary=48,y.storage=48):v.isMatrix4?(y.boundary=64,y.storage=64):v.isTexture?Ke("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(v)?(y.boundary=16,y.storage=v.byteLength):Ke("WebGLRenderer: Unsupported uniform value type.",v),y}function M(v){const y=v.target;y.removeEventListener("dispose",M);const T=a.indexOf(y.__bindingPointIndex);a.splice(T,1),r.deleteBuffer(i[y.id]),delete i[y.id],delete s[y.id]}function w(){for(const v in i)r.deleteBuffer(i[v]);a=[],i={},s={}}return{bind:l,update:c,dispose:w}}const DM=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Bi=null;function LM(){return Bi===null&&(Bi=new W0(DM,16,16,_s,$n),Bi.name="DFG_LUT",Bi.minFilter=Rn,Bi.magFilter=Rn,Bi.wrapS=cr,Bi.wrapT=cr,Bi.generateMipmaps=!1,Bi.needsUpdate=!0),Bi}class IM{constructor(e={}){const{canvas:t=V_(),context:n=null,depth:i=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:h=!1,outputBufferType:f=li}=e;this.isWebGLRenderer=!0;let _;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");_=n.getContextAttributes().alpha}else _=a;const g=f,p=new Set([Mf,Sf,vf]),m=new Set([li,Qi,To,Eo,_f,gf]),M=new Uint32Array(4),w=new Int32Array(4),v=new O;let y=null,T=null;const A=[],x=[];let b=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=$i,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const C=this;let L=!1,D=null,k=null,I=null,q=null;this._outputColorSpace=wn;let X=0,z=0,j=null,Y=-1,P=null;const K=new Bt,we=new Bt;let Te=null;const Ye=new Je(0);let We=0,Qe=t.width,$=t.height,te=1,me=null,Ge=null;const xe=new Bt(0,0,Qe,$),Le=new Bt(0,0,Qe,$);let Ne=!1;const Q=new Cf;let re=!1,oe=!1;const N=new bt,de=new O,Be=new Bt,Ue={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Ce=!1;function Ze(){return j===null?te:1}let U=n;function at(E,B){return t.getContext(E,B)}let He,R,S,G,V,J,pe,ce,ee,ie,ve,Ie,Se,ge,fe,ze,$e,F,_e,ne,Me,be,se;try{const E={alpha:!0,depth:i,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${lf}`),t.addEventListener("webglcontextlost",Ve,!1),t.addEventListener("webglcontextrestored",le,!1),t.addEventListener("webglcontextcreationerror",Xe,!1),U===null){const B="webgl2";if(U=at(B,E),U===null)throw at(B)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}ue()}catch(E){throw t.removeEventListener("webglcontextlost",Ve,!1),t.removeEventListener("webglcontextrestored",le,!1),t.removeEventListener("webglcontextcreationerror",Xe,!1),gt("WebGLRenderer: "+E.message),E}function ue(){He=new Lv(U),He.init(),Me=new bM(U,He),R=new yv(U,He,e,Me),S=new MM(U,He),R.reversedDepthBuffer&&h&&S.buffers.depth.setReversed(!0),k=U.createFramebuffer(),I=U.createFramebuffer(),q=U.createFramebuffer(),G=new Uv(U),V=new oM,J=new yM(U,He,S,V,R,Me,G),pe=new Dv(C),ce=new F2(U),be=new Sv(U,ce),ee=new Iv(U,ce,G,be),ie=new Fv(U,ee,ce,be,G),F=new Ov(U,R,J),fe=new bv(V),ve=new aM(C,pe,He,R,be,fe),Ie=new RM(C,V),Se=new cM,ge=new mM(He),$e=new vv(C,pe,S,ie,_,l),ze=new SM(C,ie,R),se=new PM(U,G,R,S),_e=new Mv(U,He,G),ne=new Nv(U,He,G),G.programs=ve.programs,C.capabilities=R,C.extensions=He,C.properties=V,C.renderLists=Se,C.shadowMap=ze,C.state=S,C.info=G}g!==li&&(b=new Bv(g,t.width,t.height,o,i,s));const ae=new AM(C,U);this.xr=ae,this.getContext=function(){return U},this.getContextAttributes=function(){return U.getContextAttributes()},this.forceContextLoss=function(){const E=He.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){const E=He.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return te},this.setPixelRatio=function(E){E!==void 0&&(te=E,this.setSize(Qe,$,!1))},this.getSize=function(E){return E.set(Qe,$)},this.setSize=function(E,B,Z=!0){if(ae.isPresenting){Ke("WebGLRenderer: Can't change size while VR device is presenting.");return}Qe=E,$=B,t.width=Math.floor(E*te),t.height=Math.floor(B*te),Z===!0&&(t.style.width=E+"px",t.style.height=B+"px"),b!==null&&b.setSize(t.width,t.height),this.setViewport(0,0,E,B)},this.getDrawingBufferSize=function(E){return E.set(Qe*te,$*te).floor()},this.setDrawingBufferSize=function(E,B,Z){Qe=E,$=B,te=Z,t.width=Math.floor(E*Z),t.height=Math.floor(B*Z),this.setViewport(0,0,E,B)},this.setEffects=function(E){if(g===li){gt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(E){for(let B=0;B<E.length;B++)if(E[B].isOutputPass===!0){Ke("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}b.setEffects(E||[])},this.getCurrentViewport=function(E){return E.copy(K)},this.getViewport=function(E){return E.copy(xe)},this.setViewport=function(E,B,Z,H){E.isVector4?xe.set(E.x,E.y,E.z,E.w):xe.set(E,B,Z,H),S.viewport(K.copy(xe).multiplyScalar(te).round())},this.getScissor=function(E){return E.copy(Le)},this.setScissor=function(E,B,Z,H){E.isVector4?Le.set(E.x,E.y,E.z,E.w):Le.set(E,B,Z,H),S.scissor(we.copy(Le).multiplyScalar(te).round())},this.getScissorTest=function(){return Ne},this.setScissorTest=function(E){S.setScissorTest(Ne=E)},this.setOpaqueSort=function(E){me=E},this.setTransparentSort=function(E){Ge=E},this.getClearColor=function(E){return E.copy($e.getClearColor())},this.setClearColor=function(){$e.setClearColor(...arguments)},this.getClearAlpha=function(){return $e.getClearAlpha()},this.setClearAlpha=function(){$e.setClearAlpha(...arguments)},this.clear=function(E=!0,B=!0,Z=!0){let H=0;if(E){let W=!1;if(j!==null){const ye=j.texture.format;W=p.has(ye)}if(W){const ye=j.texture.type,Pe=m.has(ye),Ae=$e.getClearColor(),Fe=$e.getClearAlpha(),ke=Ae.r,nt=Ae.g,ht=Ae.b;Pe?(M[0]=ke,M[1]=nt,M[2]=ht,M[3]=Fe,U.clearBufferuiv(U.COLOR,0,M)):(w[0]=ke,w[1]=nt,w[2]=ht,w[3]=Fe,U.clearBufferiv(U.COLOR,0,w))}else H|=U.COLOR_BUFFER_BIT}B&&(H|=U.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),Z&&(H|=U.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),H!==0&&U.clear(H)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(E){E.setRenderer(this),D=E},this.dispose=function(){t.removeEventListener("webglcontextlost",Ve,!1),t.removeEventListener("webglcontextrestored",le,!1),t.removeEventListener("webglcontextcreationerror",Xe,!1),$e.dispose(),Se.dispose(),ge.dispose(),V.dispose(),pe.dispose(),ie.dispose(),be.dispose(),se.dispose(),ve.dispose(),ae.dispose(),ae.removeEventListener("sessionstart",It),ae.removeEventListener("sessionend",Tt),dt.stop()};function Ve(E){E.preventDefault(),Ud("WebGLRenderer: Context Lost."),L=!0}function le(){Ud("WebGLRenderer: Context Restored."),L=!1;const E=G.autoReset,B=ze.enabled,Z=ze.autoUpdate,H=ze.needsUpdate,W=ze.type;ue(),G.autoReset=E,ze.enabled=B,ze.autoUpdate=Z,ze.needsUpdate=H,ze.type=W}function Xe(E){gt("WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function Oe(E){const B=E.target;B.removeEventListener("dispose",Oe),je(B)}function je(E){Jt(E),V.remove(E)}function Jt(E){const B=V.get(E).programs;B!==void 0&&(B.forEach(function(Z){ve.releaseProgram(Z)}),E.isShaderMaterial&&ve.releaseShaderCache(E))}this.renderBufferDirect=function(E,B,Z,H,W,ye){B===null&&(B=Ue);const Pe=W.isMesh&&W.matrixWorld.determinantAffine()<0,Ae=cn(E,B,Z,H,W);S.setMaterial(H,Pe);let Fe=Z.index,ke=1;if(H.wireframe===!0){if(Fe=ee.getWireframeAttribute(Z),Fe===void 0)return;ke=2}const nt=Z.drawRange,ht=Z.attributes.position;let qe=nt.start*ke,xt=(nt.start+nt.count)*ke;ye!==null&&(qe=Math.max(qe,ye.start*ke),xt=Math.min(xt,(ye.start+ye.count)*ke)),Fe!==null?(qe=Math.max(qe,0),xt=Math.min(xt,Fe.count)):ht!=null&&(qe=Math.max(qe,0),xt=Math.min(xt,ht.count));const Qt=xt-qe;if(Qt<0||Qt===1/0)return;be.setup(W,H,Ae,Z,Fe);let Nt,Et=_e;if(Fe!==null&&(Nt=ce.get(Fe),Et=ne,Et.setIndex(Nt)),W.isMesh)H.wireframe===!0?(S.setLineWidth(H.wireframeLinewidth*Ze()),Et.setMode(U.LINES)):Et.setMode(U.TRIANGLES);else if(W.isLine){let Mn=H.linewidth;Mn===void 0&&(Mn=1),S.setLineWidth(Mn*Ze()),W.isLineSegments?Et.setMode(U.LINES):W.isLineLoop?Et.setMode(U.LINE_LOOP):Et.setMode(U.LINE_STRIP)}else W.isPoints?Et.setMode(U.POINTS):W.isSprite&&Et.setMode(U.TRIANGLES);if(W.isBatchedMesh)if(He.get("WEBGL_multi_draw"))Et.renderMultiDraw(W._multiDrawStarts,W._multiDrawCounts,W._multiDrawCount);else{const Mn=W._multiDrawStarts,Re=W._multiDrawCounts,Nn=W._multiDrawCount,_t=Fe?ce.get(Fe).bytesPerElement:1,xi=V.get(H).currentProgram.getUniforms();for(let Fi=0;Fi<Nn;Fi++)xi.setValue(U,"_gl_DrawID",Fi),Et.render(Mn[Fi]/_t,Re[Fi])}else if(W.isInstancedMesh)Et.renderInstances(qe,Qt,W.count);else if(Z.isInstancedBufferGeometry){const Mn=Z._maxInstanceCount!==void 0?Z._maxInstanceCount:1/0,Re=Math.min(Z.instanceCount,Mn);Et.renderInstances(qe,Qt,Re)}else Et.render(qe,Qt)};function ot(E,B,Z,H){D!==null&&E.isNodeMaterial&&D.setObject(H,E),re===!0&&fe.setState(E,Z,!1),E.transparent===!0&&E.side===oi&&E.forceSinglePass===!1?(E.side=Zn,E.needsUpdate=!0,Ht(E,B,H),E.side=ps,E.needsUpdate=!0,Ht(E,B,H),E.side=oi):Ht(E,B,H)}this.compile=function(E,B,Z=null){Z===null&&(Z=E),D!==null&&D.renderStart(E,B,Z),T=ge.get(Z),T.init(B),x.push(T),Z.traverseVisible(function(W){W.isLight&&W.layers.test(B.layers)&&(T.pushLight(W),W.castShadow&&T.pushShadow(W))}),E!==Z&&E.traverseVisible(function(W){W.isLight&&W.layers.test(B.layers)&&(T.pushLight(W),W.castShadow&&T.pushShadow(W))}),T.setupLights(),D!==null&&D.updateLights(T.state.lightsArray),oe=this.localClippingEnabled,re=fe.init(this.clippingPlanes,oe),re===!0&&fe.setGlobalState(this.clippingPlanes,B),D!==null&&ze.render(T.state.shadowsArray,Z,B);const H=new Set;return E.traverse(function(W){if(!(W.isMesh||W.isPoints||W.isLine||W.isSprite))return;const ye=W.material;if(ye)if(Array.isArray(ye))for(let Pe=0;Pe<ye.length;Pe++){const Ae=ye[Pe];ot(Ae,Z,B,W),H.add(Ae)}else ot(ye,Z,B,W),H.add(ye)}),T=x.pop(),D!==null&&D.renderEnd(),H},this.compileAsync=function(E,B,Z=null){const H=this.compile(E,B,Z);return new Promise(W=>{function ye(){if(H.forEach(function(Pe){const Fe=V.get(Pe).currentProgram;(Fe===void 0||Fe.isReady())&&H.delete(Pe)}),H.size===0){W(E);return}setTimeout(ye,10)}He.get("KHR_parallel_shader_compile")!==null?ye():setTimeout(ye,10)})};let Lt=null;function ln(E){Lt&&Lt(E)}function It(){dt.stop()}function Tt(){dt.start()}const dt=new om;dt.setAnimationLoop(ln),typeof self<"u"&&dt.setContext(self),this.setAnimationLoop=function(E){Lt=E,ae.setAnimationLoop(E),E===null?dt.stop():dt.start()},ae.addEventListener("sessionstart",It),ae.addEventListener("sessionend",Tt),this.render=function(E,B){if(B!==void 0&&B.isCamera!==!0){gt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(L===!0)return;D!==null&&D.renderStart(E,B);const Z=ae.enabled===!0&&ae.isPresenting===!0,H=b!==null&&(j===null||Z)&&b.begin(C,j);if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),B.parent===null&&B.matrixWorldAutoUpdate===!0&&B.updateMatrixWorld(),ae.enabled===!0&&ae.isPresenting===!0&&(b===null||b.isCompositing()===!1)&&(ae.cameraAutoUpdate===!0&&ae.updateCamera(B),B=ae.getCamera()),E.isScene===!0&&E.onBeforeRender(C,E,B,j),T=ge.get(E,x.length),T.init(B),T.state.textureUnits=J.getTextureUnits(),x.push(T),N.multiplyMatrices(B.projectionMatrix,B.matrixWorldInverse),Q.setFromProjectionMatrix(N,Hi,B.reversedDepth),oe=this.localClippingEnabled,re=fe.init(this.clippingPlanes,oe),y=Se.get(E,A.length),y.init(),A.push(y),ae.enabled===!0&&ae.isPresenting===!0){const Pe=C.xr.getDepthSensingMesh();Pe!==null&&Ln(Pe,B,-1/0,C.sortObjects)}Ln(E,B,0,C.sortObjects),y.finish(),D!==null&&D.updateLights(T.state.lightsArray),C.sortObjects===!0&&y.sort(me,Ge),Ce=ae.enabled===!1||ae.isPresenting===!1||ae.hasDepthSensing()===!1,Ce&&$e.addToRenderList(y,E),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),re===!0&&fe.beginShadows();const W=T.state.shadowsArray;if(ze.render(W,E,B),re===!0&&fe.endShadows(),(H&&b.hasRenderPass())===!1){const Pe=y.opaque,Ae=y.transmissive;if(T.setupLights(),B.isArrayCamera){const Fe=B.cameras;if(Ae.length>0)for(let ke=0,nt=Fe.length;ke<nt;ke++){const ht=Fe[ke];Sn(Pe,Ae,E,ht)}Ce&&$e.render(E);for(let ke=0,nt=Fe.length;ke<nt;ke++){const ht=Fe[ke];Ct(y,E,ht,ht.viewport)}}else Ae.length>0&&Sn(Pe,Ae,E,B),Ce&&$e.render(E),Ct(y,E,B)}j!==null&&z===0&&(J.updateMultisampleRenderTarget(j),J.updateRenderTargetMipmap(j)),H&&b.end(C),E.isScene===!0&&E.onAfterRender(C,E,B),be.resetDefaultState(),Y=-1,P=null,x.pop(),x.length>0?(T=x[x.length-1],J.setTextureUnits(T.state.textureUnits),re===!0&&fe.setGlobalState(C.clippingPlanes,T.state.camera)):T=null,A.pop(),A.length>0?y=A[A.length-1]:y=null,D!==null&&D.renderEnd()};function Ln(E,B,Z,H){if(E.visible===!1)return;if(E.layers.test(B.layers)){if(E.isGroup)Z=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(B);else if(E.isLightProbeGrid)T.pushLightProbeGrid(E);else if(E.isLight)T.pushLight(E),E.castShadow&&T.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||E.intersectsFrustum(Q)){H&&Be.setFromMatrixPosition(E.matrixWorld).applyMatrix4(N);const Pe=ie.update(E),Ae=E.material;Ae.visible&&y.push(E,Pe,Ae,Z,Be.z,null,B)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||E.intersectsFrustum(Q))){const Pe=ie.update(E),Ae=E.material;if(H&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),Be.copy(E.boundingSphere.center)):(Pe.boundingSphere===null&&Pe.computeBoundingSphere(),Be.copy(Pe.boundingSphere.center)),Be.applyMatrix4(E.matrixWorld).applyMatrix4(N)),Array.isArray(Ae)){const Fe=Pe.groups;for(let ke=0,nt=Fe.length;ke<nt;ke++){const ht=Fe[ke],qe=Ae[ht.materialIndex];qe&&qe.visible&&y.push(E,Pe,qe,Z,Be.z,ht,B)}}else Ae.visible&&y.push(E,Pe,Ae,Z,Be.z,null,B)}}const ye=E.children;for(let Pe=0,Ae=ye.length;Pe<Ae;Pe++)Ln(ye[Pe],B,Z,H)}function Ct(E,B,Z,H){const{opaque:W,transmissive:ye,transparent:Pe}=E;T.setupLightsView(Z),re===!0&&fe.setGlobalState(C.clippingPlanes,Z),H&&S.viewport(K.copy(H)),W.length>0&&In(W,B,Z),ye.length>0&&In(ye,B,Z),Pe.length>0&&In(Pe,B,Z),S.buffers.depth.setTest(!0),S.buffers.depth.setMask(!0),S.buffers.color.setMask(!0),S.setPolygonOffset(!1)}function Sn(E,B,Z,H){if((Z.isScene===!0?Z.overrideMaterial:null)!==null)return;if(T.state.transmissionRenderTarget[H.id]===void 0){const qe=He.has("EXT_color_buffer_half_float")||He.has("EXT_color_buffer_float");T.state.transmissionRenderTarget[H.id]=new Hn(1,1,{generateMipmaps:!0,type:qe?$n:li,minFilter:is,samples:Math.max(4,R.samples),stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:ft.workingColorSpace})}const ye=T.state.transmissionRenderTarget[H.id],Pe=H.viewport||K;ye.setSize(Pe.z*C.transmissionResolutionScale,Pe.w*C.transmissionResolutionScale);const Ae=C.getRenderTarget(),Fe=C.getActiveCubeFace(),ke=C.getActiveMipmapLevel();C.setRenderTarget(ye),C.getClearColor(Ye),We=C.getClearAlpha(),We<1&&C.setClearColor(16777215,.5),C.clear(),Ce&&$e.render(Z);const nt=C.toneMapping;C.toneMapping=$i;const ht=H.viewport;if(H.viewport!==void 0&&(H.viewport=void 0),T.setupLightsView(H),re===!0&&fe.setGlobalState(C.clippingPlanes,H),In(E,Z,H),J.updateMultisampleRenderTarget(ye),J.updateRenderTargetMipmap(ye),He.has("WEBGL_multisampled_render_to_texture")===!1){let qe=!1;for(let xt=0,Qt=B.length;xt<Qt;xt++){const Nt=B[xt],{object:Et,geometry:Mn,material:Re,group:Nn}=Nt;if(Re.side===oi&&Et.layers.test(H.layers)){const _t=Re.side;Re.side=Zn,Re.needsUpdate=!0,Kt(Et,Z,H,Mn,Re,Nn),Re.side=_t,Re.needsUpdate=!0,qe=!0}}qe===!0&&(J.updateMultisampleRenderTarget(ye),J.updateRenderTargetMipmap(ye))}C.setRenderTarget(Ae,Fe,ke),C.setClearColor(Ye,We),ht!==void 0&&(H.viewport=ht),C.toneMapping=nt}function In(E,B,Z){const H=B.isScene===!0?B.overrideMaterial:null;for(let W=0,ye=E.length;W<ye;W++){const Pe=E[W],{object:Ae,geometry:Fe,group:ke}=Pe;let nt=Pe.material;nt.allowOverride===!0&&H!==null&&(nt=H),Ae.layers.test(Z.layers)&&Kt(Ae,B,Z,Fe,nt,ke)}}function Kt(E,B,Z,H,W,ye){D!==null&&W.isNodeMaterial&&D.setObject(E,W),E.onBeforeRender(C,B,Z,H,W,ye),E.modelViewMatrix.multiplyMatrices(Z.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),W.onBeforeRender(C,B,Z,H,E,ye),W.transparent===!0&&W.side===oi&&W.forceSinglePass===!1?(W.side=Zn,W.needsUpdate=!0,C.renderBufferDirect(Z,B,H,W,E,ye),W.side=ps,W.needsUpdate=!0,C.renderBufferDirect(Z,B,H,W,E,ye),W.side=oi):C.renderBufferDirect(Z,B,H,W,E,ye),E.onAfterRender(C,B,Z,H,W,ye)}function Ht(E,B,Z){B.isScene!==!0&&(B=Ue);const H=V.get(E),W=T.state.lights,ye=T.state.shadowsArray,Pe=W.state.version,Ae=ve.getParameters(E,W.state,ye,B,Z,T.state.lightProbeGridArray),Fe=ve.getProgramCacheKey(Ae);let ke=H.programs;H.environment=E.isMeshStandardMaterial||E.isMeshLambertMaterial||E.isMeshPhongMaterial?B.environment:null,H.fog=B.fog;const nt=E.isMeshStandardMaterial||E.isMeshLambertMaterial&&!E.envMap||E.isMeshPhongMaterial&&!E.envMap;H.envMap=pe.get(E.envMap||H.environment,nt),H.envMapRotation=H.environment!==null&&E.envMap===null?B.environmentRotation:E.envMapRotation,ke===void 0&&(E.addEventListener("dispose",Oe),ke=new Map,H.programs=ke);let ht=ke.get(Fe);if(ht!==void 0){if(H.currentProgram===ht&&H.lightsStateVersion===Pe)return Oi(E,Ae),ht}else Ae.uniforms=ve.getUniforms(E),D!==null&&E.isNodeMaterial&&D.build(E,Z,Ae),E.onBeforeCompile(Ae,C),ht=ve.acquireProgram(Ae,Fe),ke.set(Fe,ht),H.uniforms=Ae.uniforms;const qe=H.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(qe.clippingPlanes=fe.uniform),Oi(E,Ae),H.needsLights=gi(E),H.lightsStateVersion=Pe,H.needsLights&&(qe.ambientLightColor.value=W.state.ambient,qe.lightProbe.value=W.state.probe,qe.sunLights.value=W.state.sun,qe.sunLightShadows.value=W.state.sunShadow,qe.directionalLights.value=W.state.directional,qe.directionalLightShadows.value=W.state.directionalShadow,qe.spotLights.value=W.state.spot,qe.spotLightShadows.value=W.state.spotShadow,qe.rectAreaLights.value=W.state.rectArea,qe.ltc_1.value=W.state.rectAreaLTC1,qe.ltc_2.value=W.state.rectAreaLTC2,qe.pointLights.value=W.state.point,qe.pointLightShadows.value=W.state.pointShadow,qe.hemisphereLights.value=W.state.hemi,qe.sunShadowMatrix.value=W.state.sunShadowMatrix,qe.sunShadowCascade.value=W.state.sunShadowCascade,qe.directionalShadowMatrix.value=W.state.directionalShadowMatrix,qe.spotLightMatrix.value=W.state.spotLightMatrix,qe.spotLightMap.value=W.state.spotLightMap,qe.pointShadowMatrix.value=W.state.pointShadowMatrix),H.lightProbeGrid=T.state.lightProbeGridArray.length>0,H.currentProgram=ht,H.uniformsList=null,ht}function nn(E){if(E.uniformsList===null){const B=E.currentProgram.getUniforms();E.uniformsList=Hl.seqWithValue(B.seq,E.uniforms)}return E.uniformsList}function Oi(E,B){const Z=V.get(E);Z.outputColorSpace=B.outputColorSpace,Z.batching=B.batching,Z.batchingColor=B.batchingColor,Z.instancing=B.instancing,Z.instancingColor=B.instancingColor,Z.instancingMorph=B.instancingMorph,Z.skinning=B.skinning,Z.morphTargets=B.morphTargets,Z.morphNormals=B.morphNormals,Z.morphColors=B.morphColors,Z.morphTargetsCount=B.morphTargetsCount,Z.numClippingPlanes=B.numClippingPlanes,Z.numIntersection=B.numClipIntersection,Z.vertexAlphas=B.vertexAlphas,Z.vertexTangents=B.vertexTangents,Z.toneMapping=B.toneMapping}function Cs(E,B){if(E.length===0)return null;if(E.length===1)return E[0].texture!==null?E[0]:null;v.setFromMatrixPosition(B.matrixWorld);for(let Z=0,H=E.length;Z<H;Z++){const W=E[Z];if(W.texture!==null&&W.boundingBox.containsPoint(v))return W}return null}function cn(E,B,Z,H,W){B.isScene!==!0&&(B=Ue),J.resetTextureUnits();const ye=B.fog,Pe=H.isMeshStandardMaterial||H.isMeshLambertMaterial||H.isMeshPhongMaterial?B.environment:null,Ae=j===null?C.outputColorSpace:j.isXRRenderTarget===!0?j.texture.colorSpace:ft.workingColorSpace,Fe=H.isMeshStandardMaterial||H.isMeshLambertMaterial&&!H.envMap||H.isMeshPhongMaterial&&!H.envMap,ke=pe.get(H.envMap||Pe,Fe),nt=H.vertexColors===!0&&!!Z.attributes.color&&Z.attributes.color.itemSize===4,ht=!!Z.attributes.tangent&&(!!H.normalMap||H.anisotropy>0),qe=!!Z.morphAttributes.position,xt=!!Z.morphAttributes.normal,Qt=!!Z.morphAttributes.color;let Nt=$i;H.toneMapped&&(j===null||j.isXRRenderTarget===!0)&&(Nt=C.toneMapping);const Et=Z.morphAttributes.position||Z.morphAttributes.normal||Z.morphAttributes.color,Mn=Et!==void 0?Et.length:0,Re=V.get(H),Nn=T.state.lights;if(re===!0&&(oe===!0||E!==P)){const Rt=E===P&&H.id===Y;fe.setState(H,E,Rt)}let _t=!1;H.version===Re.__version?(Re.needsLights&&Re.lightsStateVersion!==Nn.state.version||Re.outputColorSpace!==Ae||W.isBatchedMesh&&Re.batching===!1||!W.isBatchedMesh&&Re.batching===!0||W.isBatchedMesh&&Re.batchingColor===!0&&W._colorsTexture===null||W.isBatchedMesh&&Re.batchingColor===!1&&W._colorsTexture!==null||W.isInstancedMesh&&Re.instancing===!1||!W.isInstancedMesh&&Re.instancing===!0||W.isSkinnedMesh&&Re.skinning===!1||!W.isSkinnedMesh&&Re.skinning===!0||W.isInstancedMesh&&Re.instancingColor===!0&&W.instanceColor===null||W.isInstancedMesh&&Re.instancingColor===!1&&W.instanceColor!==null||W.isInstancedMesh&&Re.instancingMorph===!0&&W.morphTexture===null||W.isInstancedMesh&&Re.instancingMorph===!1&&W.morphTexture!==null||Re.envMap!==ke||H.fog===!0&&Re.fog!==ye||Re.numClippingPlanes!==void 0&&(Re.numClippingPlanes!==fe.numPlanes||Re.numIntersection!==fe.numIntersection)||Re.vertexAlphas!==nt||Re.vertexTangents!==ht||Re.morphTargets!==qe||Re.morphNormals!==xt||Re.morphColors!==Qt||Re.toneMapping!==Nt||Re.morphTargetsCount!==Mn||!!Re.lightProbeGrid!=T.state.lightProbeGridArray.length>0)&&(_t=!0):(_t=!0,Re.__version=H.version);let xi=Re.currentProgram;_t===!0&&(xi=Ht(H,B,W),D&&H.isNodeMaterial&&D.onUpdateProgram(H,xi,Re));let Fi=!1,gr=!1,Ps=!1;const yt=xi.getUniforms(),Yt=Re.uniforms;if(S.useProgram(xi.program)&&(Fi=!0,gr=!0,Ps=!0),H.id!==Y&&(Y=H.id,gr=!0),Re.needsLights){const Rt=Cs(T.state.lightProbeGridArray,W);Re.lightProbeGrid!==Rt&&(Re.lightProbeGrid=Rt,gr=!0)}if(Fi||P!==E){S.buffers.depth.getReversed()&&E.reversedDepth!==!0&&(E._reversedDepth=!0,E.updateProjectionMatrix()),yt.setValue(U,"projectionMatrix",E.projectionMatrix),yt.setValue(U,"viewMatrix",E.matrixWorldInverse);const vr=yt.map.cameraPosition;vr!==void 0&&vr.setValue(U,de.setFromMatrixPosition(E.matrixWorld)),R.logarithmicDepthBuffer&&yt.setValue(U,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(H.isMeshPhongMaterial||H.isMeshToonMaterial||H.isMeshLambertMaterial||H.isMeshBasicMaterial||H.isMeshStandardMaterial||H.isShaderMaterial)&&yt.setValue(U,"isOrthographic",E.isOrthographicCamera===!0),P!==E&&(P=E,gr=!0,Ps=!0)}if(Re.needsLights&&(Nn.state.sunShadowMap.length>0&&yt.setValue(U,"sunShadowMap",Nn.state.sunShadowMap,J),Nn.state.directionalShadowMap.length>0&&yt.setValue(U,"directionalShadowMap",Nn.state.directionalShadowMap,J),Nn.state.spotShadowMap.length>0&&yt.setValue(U,"spotShadowMap",Nn.state.spotShadowMap,J),Nn.state.pointShadowMap.length>0&&yt.setValue(U,"pointShadowMap",Nn.state.pointShadowMap,J)),W.isSkinnedMesh){yt.setOptional(U,W,"bindMatrix"),yt.setOptional(U,W,"bindMatrixInverse");const Rt=W.skeleton;Rt&&(Rt.boneTexture===null&&Rt.computeBoneTexture(),yt.setValue(U,"boneTexture",Rt.boneTexture,J))}W.isBatchedMesh&&(yt.setOptional(U,W,"batchingTexture"),yt.setValue(U,"batchingTexture",W._matricesTexture,J),yt.setOptional(U,W,"batchingIdTexture"),yt.setValue(U,"batchingIdTexture",W._indirectTexture,J),yt.setOptional(U,W,"batchingColorTexture"),W._colorsTexture!==null&&yt.setValue(U,"batchingColorTexture",W._colorsTexture,J));const xr=Z.morphAttributes;if((xr.position!==void 0||xr.normal!==void 0||xr.color!==void 0)&&F.update(W,Z,xi),(gr||Re.receiveShadow!==W.receiveShadow)&&(Re.receiveShadow=W.receiveShadow,yt.setValue(U,"receiveShadow",W.receiveShadow)),(H.isMeshStandardMaterial||H.isMeshLambertMaterial||H.isMeshPhongMaterial)&&H.envMap===null&&B.environment!==null&&(Yt.envMapIntensity.value=B.environmentIntensity),Yt.dfgLUT!==void 0&&(Yt.dfgLUT.value=LM()),gr){if(yt.setValue(U,"toneMappingExposure",C.toneMappingExposure),Re.needsLights&&Xt(Yt,Ps),ye&&H.fog===!0&&Ie.refreshFogUniforms(Yt,ye),Ie.refreshMaterialUniforms(Yt,H,te,$,T.state.transmissionRenderTarget[E.id]),Re.needsLights&&Re.lightProbeGrid){const Rt=Re.lightProbeGrid;Yt.probesSH.value=Rt.texture,Yt.probesMin.value.copy(Rt.boundingBox.min),Yt.probesMax.value.copy(Rt.boundingBox.max),Yt.probesResolution.value.copy(Rt.resolution)}Hl.upload(U,nn(Re),Yt,J)}if(H.isShaderMaterial&&H.uniformsNeedUpdate===!0&&(Hl.upload(U,nn(Re),Yt,J),H.uniformsNeedUpdate=!1),H.isSpriteMaterial&&yt.setValue(U,"center",W.center),yt.setValue(U,"modelViewMatrix",W.modelViewMatrix),yt.setValue(U,"normalMatrix",W.normalMatrix),yt.setValue(U,"modelMatrix",W.matrixWorld),H.uniformsGroups!==void 0){const Rt=H.uniformsGroups;for(let vr=0,Ds=Rt.length;vr<Ds;vr++){const Rd=Rt[vr];se.update(Rd,xi),se.bind(Rd,xi)}}return xi}function Xt(E,B){E.ambientLightColor.needsUpdate=B,E.lightProbe.needsUpdate=B,E.sunLights.needsUpdate=B,E.sunLightShadows.needsUpdate=B,E.directionalLights.needsUpdate=B,E.directionalLightShadows.needsUpdate=B,E.pointLights.needsUpdate=B,E.pointLightShadows.needsUpdate=B,E.spotLights.needsUpdate=B,E.spotLightShadows.needsUpdate=B,E.rectAreaLights.needsUpdate=B,E.hemisphereLights.needsUpdate=B}function gi(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return X},this.getActiveMipmapLevel=function(){return z},this.getRenderTarget=function(){return j},this.setRenderTargetTextures=function(E,B,Z){const H=V.get(E);H.__autoAllocateDepthBuffer=E.resolveDepthBuffer===!1,H.__autoAllocateDepthBuffer===!1&&(H.__useRenderToTexture=!1),V.get(E.texture).__webglTexture=B,V.get(E.depthTexture).__webglTexture=H.__autoAllocateDepthBuffer?void 0:Z,H.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(E,B){const Z=V.get(E);Z.__webglFramebuffer=B,Z.__useDefaultFramebuffer=B===void 0},this.setRenderTarget=function(E,B=0,Z=0){j=E,X=B,z=Z;let H=null,W=!1,ye=!1;if(E){const Ae=V.get(E);if(Ae.__useDefaultFramebuffer!==void 0){S.bindFramebuffer(U.FRAMEBUFFER,Ae.__webglFramebuffer),K.copy(E.viewport),we.copy(E.scissor),Te=E.scissorTest,S.viewport(K),S.scissor(we),S.setScissorTest(Te),Y=-1;return}else if(Ae.__webglFramebuffer===void 0)J.setupRenderTarget(E);else if(Ae.__hasExternalTextures)J.rebindTextures(E,V.get(E.texture).__webglTexture,V.get(E.depthTexture).__webglTexture);else if(E.depthBuffer){const nt=E.depthTexture;if(Ae.__boundDepthTexture!==nt){if(nt!==null&&V.has(nt)&&(E.width!==nt.image.width||E.height!==nt.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");J.setupDepthRenderbuffer(E)}}const Fe=E.texture;(Fe.isData3DTexture||Fe.isDataArrayTexture||Fe.isCompressedArrayTexture)&&(ye=!0);const ke=V.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(ke[B])?H=ke[B][Z]:H=ke[B],W=!0):E.samples>0&&J.useMultisampledRTT(E)===!1?H=V.get(E).__webglMultisampledFramebuffer:Array.isArray(ke)?H=ke[Z]:H=ke,K.copy(E.viewport),we.copy(E.scissor),Te=E.scissorTest}else K.copy(xe).multiplyScalar(te).floor(),we.copy(Le).multiplyScalar(te).floor(),Te=Ne;if(Z!==0&&(H=k),S.bindFramebuffer(U.FRAMEBUFFER,H)&&S.drawBuffers(E,H),S.viewport(K),S.scissor(we),S.setScissorTest(Te),W){const Ae=V.get(E.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_CUBE_MAP_POSITIVE_X+B,Ae.__webglTexture,Z)}else if(ye){const Ae=B;for(let Fe=0;Fe<E.textures.length;Fe++){const ke=V.get(E.textures[Fe]);U.framebufferTextureLayer(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0+Fe,ke.__webglTexture,Z,Ae)}}else if(E!==null&&Z!==0){const Ae=V.get(E.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,Ae.__webglTexture,Z)}Y=-1};function Rs(E){const B=V.get(E);return(B.__readFormat!==E.format||B.__readType!==E.type)&&(B.__readFormat=E.format,B.__readType=E.type,B.__formatReadable=R.textureFormatReadable(E.format),B.__typeReadable=R.textureTypeReadable(E.type)),B}this.readRenderTargetPixels=function(E,B,Z,H,W,ye,Pe,Ae=0){if(!(E&&E.isWebGLRenderTarget)){gt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Fe=V.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&Pe!==void 0&&(Fe=Fe[Pe]),Fe){S.bindFramebuffer(U.FRAMEBUFFER,Fe);try{const ke=E.textures[Ae],nt=ke.format,ht=ke.type;E.textures.length>1&&U.readBuffer(U.COLOR_ATTACHMENT0+Ae);const qe=Rs(ke);if(qe.__formatReadable===!1){gt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(qe.__typeReadable===!1){gt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}B>=0&&B<=E.width-H&&Z>=0&&Z<=E.height-W&&U.readPixels(B,Z,H,W,Me.convert(nt),Me.convert(ht),ye)}finally{const ke=j!==null?V.get(j).__webglFramebuffer:null;S.bindFramebuffer(U.FRAMEBUFFER,ke)}}},this.readRenderTargetPixelsAsync=async function(E,B,Z,H,W,ye,Pe,Ae=0){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Fe=V.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&Pe!==void 0&&(Fe=Fe[Pe]),Fe)if(B>=0&&B<=E.width-H&&Z>=0&&Z<=E.height-W){S.bindFramebuffer(U.FRAMEBUFFER,Fe);const ke=E.textures[Ae],nt=ke.format,ht=ke.type;E.textures.length>1&&U.readBuffer(U.COLOR_ATTACHMENT0+Ae);const qe=Rs(ke);if(qe.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(qe.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const xt=U.createBuffer();U.bindBuffer(U.PIXEL_PACK_BUFFER,xt),U.bufferData(U.PIXEL_PACK_BUFFER,ye.byteLength,U.STREAM_READ),U.readPixels(B,Z,H,W,Me.convert(nt),Me.convert(ht),0),U.bindBuffer(U.PIXEL_PACK_BUFFER,null);const Qt=j!==null?V.get(j).__webglFramebuffer:null;S.bindFramebuffer(U.FRAMEBUFFER,Qt);const Nt=U.fenceSync(U.SYNC_GPU_COMMANDS_COMPLETE,0);return U.flush(),await H_(U,Nt,4),U.bindBuffer(U.PIXEL_PACK_BUFFER,xt),U.getBufferSubData(U.PIXEL_PACK_BUFFER,0,ye),U.bindBuffer(U.PIXEL_PACK_BUFFER,null),U.deleteBuffer(xt),U.deleteSync(Nt),ye}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(E,B=null,Z=0){const H=Math.pow(2,-Z),W=Math.floor(E.image.width*H),ye=Math.floor(E.image.height*H),Pe=B!==null?B.x:0,Ae=B!==null?B.y:0;J.setTexture2D(E,0),U.copyTexSubImage2D(U.TEXTURE_2D,Z,0,0,Pe,Ae,W,ye),S.unbindTexture()},this.copyTextureToTexture=function(E,B,Z=null,H=null,W=0,ye=0){let Pe,Ae,Fe,ke,nt,ht,qe,xt,Qt;const Nt=E.isCompressedTexture?E.mipmaps[ye]:E.image;if(Z!==null)Pe=Z.max.x-Z.min.x,Ae=Z.max.y-Z.min.y,Fe=Z.isBox3?Z.max.z-Z.min.z:1,ke=Z.min.x,nt=Z.min.y,ht=Z.isBox3?Z.min.z:0;else{const Yt=Math.pow(2,-W);Pe=Math.floor(Nt.width*Yt),Ae=Math.floor(Nt.height*Yt),E.isDataArrayTexture?Fe=Nt.depth:E.isData3DTexture?Fe=Math.floor(Nt.depth*Yt):Fe=1,ke=0,nt=0,ht=0}H!==null?(qe=H.x,xt=H.y,Qt=H.z):(qe=0,xt=0,Qt=0);const Et=Me.convert(B.format),Mn=Me.convert(B.type);let Re;B.isData3DTexture?(J.setTexture3D(B,0),Re=U.TEXTURE_3D):B.isDataArrayTexture||B.isCompressedArrayTexture?(J.setTexture2DArray(B,0),Re=U.TEXTURE_2D_ARRAY):(J.setTexture2D(B,0),Re=U.TEXTURE_2D),S.activeTexture(U.TEXTURE0),S.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,B.flipY),S.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,B.premultiplyAlpha),S.pixelStorei(U.UNPACK_ALIGNMENT,B.unpackAlignment);const Nn=S.getParameter(U.UNPACK_ROW_LENGTH),_t=S.getParameter(U.UNPACK_IMAGE_HEIGHT),xi=S.getParameter(U.UNPACK_SKIP_PIXELS),Fi=S.getParameter(U.UNPACK_SKIP_ROWS),gr=S.getParameter(U.UNPACK_SKIP_IMAGES);S.pixelStorei(U.UNPACK_ROW_LENGTH,Nt.width),S.pixelStorei(U.UNPACK_IMAGE_HEIGHT,Nt.height),S.pixelStorei(U.UNPACK_SKIP_PIXELS,ke),S.pixelStorei(U.UNPACK_SKIP_ROWS,nt),S.pixelStorei(U.UNPACK_SKIP_IMAGES,ht);const Ps=E.isDataArrayTexture||E.isData3DTexture,yt=B.isDataArrayTexture||B.isData3DTexture;if(E.isDepthTexture){const Yt=V.get(E),xr=V.get(B),Rt=V.get(Yt.__renderTarget),vr=V.get(xr.__renderTarget);S.bindFramebuffer(U.READ_FRAMEBUFFER,Rt.__webglFramebuffer),S.bindFramebuffer(U.DRAW_FRAMEBUFFER,vr.__webglFramebuffer);for(let Ds=0;Ds<Fe;Ds++)Ps&&(U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,V.get(E).__webglTexture,W,ht+Ds),U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,V.get(B).__webglTexture,ye,Qt+Ds)),U.blitFramebuffer(ke,nt,Pe,Ae,qe,xt,Pe,Ae,U.DEPTH_BUFFER_BIT,U.NEAREST);S.bindFramebuffer(U.READ_FRAMEBUFFER,null),S.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else if(W!==0||E.isRenderTargetTexture||V.has(E)){const Yt=V.get(E),xr=V.get(B);S.bindFramebuffer(U.READ_FRAMEBUFFER,I),S.bindFramebuffer(U.DRAW_FRAMEBUFFER,q);for(let Rt=0;Rt<Fe;Rt++)Ps?U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,Yt.__webglTexture,W,ht+Rt):U.framebufferTexture2D(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,Yt.__webglTexture,W),yt?U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,xr.__webglTexture,ye,Qt+Rt):U.framebufferTexture2D(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,xr.__webglTexture,ye),W!==0?U.blitFramebuffer(ke,nt,Pe,Ae,qe,xt,Pe,Ae,U.COLOR_BUFFER_BIT,U.NEAREST):yt?U.copyTexSubImage3D(Re,ye,qe,xt,Qt+Rt,ke,nt,Pe,Ae):U.copyTexSubImage2D(Re,ye,qe,xt,ke,nt,Pe,Ae);S.bindFramebuffer(U.READ_FRAMEBUFFER,null),S.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else yt?E.isDataTexture||E.isData3DTexture?U.texSubImage3D(Re,ye,qe,xt,Qt,Pe,Ae,Fe,Et,Mn,Nt.data):B.isCompressedArrayTexture?U.compressedTexSubImage3D(Re,ye,qe,xt,Qt,Pe,Ae,Fe,Et,Nt.data):U.texSubImage3D(Re,ye,qe,xt,Qt,Pe,Ae,Fe,Et,Mn,Nt):E.isDataTexture?U.texSubImage2D(U.TEXTURE_2D,ye,qe,xt,Pe,Ae,Et,Mn,Nt.data):E.isCompressedTexture?U.compressedTexSubImage2D(U.TEXTURE_2D,ye,qe,xt,Nt.width,Nt.height,Et,Nt.data):U.texSubImage2D(U.TEXTURE_2D,ye,qe,xt,Pe,Ae,Et,Mn,Nt);S.pixelStorei(U.UNPACK_ROW_LENGTH,Nn),S.pixelStorei(U.UNPACK_IMAGE_HEIGHT,_t),S.pixelStorei(U.UNPACK_SKIP_PIXELS,xi),S.pixelStorei(U.UNPACK_SKIP_ROWS,Fi),S.pixelStorei(U.UNPACK_SKIP_IMAGES,gr),ye===0&&B.generateMipmaps&&U.generateMipmap(Re),S.unbindTexture()},this.initRenderTarget=function(E){V.get(E).__webglFramebuffer===void 0&&J.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?J.setTextureCube(E,0):E.isData3DTexture?J.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?J.setTexture2DArray(E,0):J.setTexture2D(E,0),S.unbindTexture()},this.resetState=function(){X=0,z=0,j=null,S.reset(),be.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Hi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=ft._getDrawingBufferColorSpace(e),t.unpackColorSpace=ft._getUnpackColorSpace()}}class mm{constructor(e){this.isFont=!0,this.type="Font",this.data=e}generateShapes(e,t=100,n="ltr"){const i=[],s=NM(e,t,this.data,n);for(let a=0,o=s.length;a<o;a++)i.push(...s[a].toShapes());return i}}function NM(r,e,t,n){const i=Array.from(r),s=e/t.resolution,a=(t.boundingBox.yMax-t.boundingBox.yMin+t.underlineThickness)*s,o=[];let l=0,c=0;(n=="rtl"||n=="tb")&&i.reverse();for(let u=0;u<i.length;u++){const d=i[u];if(d===`
`)l=0,c-=a;else{const h=UM(d,s,l,c,t);n=="tb"?(l=0,c+=t.ascender*s):l+=h.offsetX,o.push(h.path)}}return o}function UM(r,e,t,n,i){const s=i.glyphs[r]||i.glyphs["?"];if(!s){console.error('THREE.Font: character "'+r+'" does not exists in font family '+i.familyName+".");return}const a=new U2;let o,l,c,u,d,h,f,_;if(s.o){const g=s._cachedOutline||(s._cachedOutline=s.o.split(" "));for(let p=0,m=g.length;p<m;)switch(g[p++]){case"m":o=g[p++]*e+t,l=g[p++]*e+n,a.moveTo(o,l);break;case"l":o=g[p++]*e+t,l=g[p++]*e+n,a.lineTo(o,l);break;case"q":c=g[p++]*e+t,u=g[p++]*e+n,d=g[p++]*e+t,h=g[p++]*e+n,a.quadraticCurveTo(d,h,c,u);break;case"b":c=g[p++]*e+t,u=g[p++]*e+n,d=g[p++]*e+t,h=g[p++]*e+n,f=g[p++]*e+t,_=g[p++]*e+n,a.bezierCurveTo(d,h,f,_,c,u);break}}return{offsetX:s.ha*e,path:a}}class zf extends Rc{constructor(e,t={}){const n=t.font;if(n===void 0)super();else{const i=n.generateShapes(e,t.size,t.direction);t.depth===void 0&&(t.depth=50),t.bevelThickness===void 0&&(t.bevelThickness=10),t.bevelSize===void 0&&(t.bevelSize=8),t.bevelEnabled===void 0&&(t.bevelEnabled=!1),super(i,t)}this.type="TextGeometry"}toJSON(){return super.toJSON()}static fromJSON(e){const t=e.options;return t.font=new mm(t.font.data),new zf(t.text,t)}}const Wl={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};class Aa{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const OM=new Pc(-1,1,1,-1,0,1);class FM extends Vt{constructor(){super(),this.setAttribute("position",new mt([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new mt([0,2,0,0,2,0],2))}}const qM=new FM;class kf{constructor(e){this._mesh=new tt(qM,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,OM)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}class BM extends Aa{constructor(e,t="tDiffuse"){super(),this.textureID=t,this.uniforms=null,this.material=null,e instanceof dn?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=Do.clone(e.uniforms),this.material=new dn({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this._fsQuad=new kf(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this._fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}}class zp extends Aa{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){const i=e.getContext(),s=e.state;s.buffers.color.setMask(!1),s.buffers.depth.setMask(!1),s.buffers.color.setLocked(!0),s.buffers.depth.setLocked(!0);let a,o;this.inverse?(a=0,o=1):(a=1,o=0),s.buffers.stencil.setTest(!0),s.buffers.stencil.setOp(i.REPLACE,i.REPLACE,i.REPLACE),s.buffers.stencil.setFunc(i.ALWAYS,a,4294967295),s.buffers.stencil.setClear(o),s.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),s.buffers.color.setLocked(!1),s.buffers.depth.setLocked(!1),s.buffers.color.setMask(!0),s.buffers.depth.setMask(!0),s.buffers.stencil.setLocked(!1),s.buffers.stencil.setFunc(i.EQUAL,1,4294967295),s.buffers.stencil.setOp(i.KEEP,i.KEEP,i.KEEP),s.buffers.stencil.setLocked(!0)}}class zM extends Aa{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class kM{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){const n=e.getSize(new he);this._width=n.width,this._height=n.height,t=new Hn(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:$n}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new BM(Wl),this.copyPass.material.blending=Zi,this.timer=new D2}swapBuffers(){const e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){const t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){this.timer.update(),e===void 0&&(e=this.timer.getDelta());const t=this.renderer.getRenderTarget();let n=!1;for(let i=0,s=this.passes.length;i<s;i++){const a=this.passes[i];if(a.enabled!==!1){if(a.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(i),a.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),a.needsSwap){if(n){const o=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(o.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(o.EQUAL,1,4294967295)}this.swapBuffers()}zp!==void 0&&(a instanceof zp?n=!0:a instanceof zM&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){const t=this.renderer.getSize(new he);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;const n=this._width*this._pixelRatio,i=this._height*this._pixelRatio;this.renderTarget1.setSize(n,i),this.renderTarget2.setSize(n,i);for(let s=0;s<this.passes.length;s++)this.passes[s].setSize(n,i)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class GM extends Aa{constructor(e,t,n=null,i=null,s=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=i,this.clearAlpha=s,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this.isRenderPass=!0,this._oldClearColor=new Je}render(e,t,n){const i=e.autoClear;e.autoClear=!1;let s,a;this.overrideMaterial!==null&&(a=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(s=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(s),this.overrideMaterial!==null&&(this.scene.overrideMaterial=a),e.autoClear=i}}const VM={uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new Je(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			float v = luminance( texel.xyz );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`};class _a extends Aa{constructor(e,t=1,n,i){super(),this.strength=t,this.radius=n,this.threshold=i,this.resolution=e!==void 0?new he(e.x,e.y):new he(256,256),this.clearColor=new Je(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let s=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);this.renderTargetBright=new Hn(s,a,{type:$n,depthBuffer:!1}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let u=0;u<this.nMips;u++){const d=new Hn(s,a,{type:$n,depthBuffer:!1});d.texture.name="UnrealBloomPass.h"+u,d.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(d);const h=new Hn(s,a,{type:$n,depthBuffer:!1});h.texture.name="UnrealBloomPass.v"+u,h.texture.generateMipmaps=!1,this.renderTargetsVertical.push(h),s=Math.round(s/2),a=Math.round(a/2)}const o=VM;this.highPassUniforms=Do.clone(o.uniforms),this.highPassUniforms.luminosityThreshold.value=i,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new dn({uniforms:this.highPassUniforms,vertexShader:o.vertexShader,fragmentShader:o.fragmentShader}),this.separableBlurMaterials=[];const l=[6,10,14,18,22];s=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);for(let u=0;u<this.nMips;u++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(l[u])),this.separableBlurMaterials[u].uniforms.invSize.value=new he(1/s,1/a),s=Math.round(s/2),a=Math.round(a/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;const c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new O(1,1,1),new O(1,1,1),new O(1,1,1),new O(1,1,1),new O(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=Do.clone(Wl.uniforms),this.blendMaterial=new dn({uniforms:this.copyUniforms,vertexShader:Wl.vertexShader,fragmentShader:Wl.fragmentShader,premultipliedAlpha:!0,blending:ic,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new Je,this._oldClearAlpha=1,this._basic=new Hr,this._fsQuad=new kf(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(e,t){let n=Math.round(e/2),i=Math.round(t/2);this.renderTargetBright.setSize(n,i);for(let s=0;s<this.nMips;s++)this.renderTargetsHorizontal[s].setSize(n,i),this.renderTargetsVertical[s].setSize(n,i),this.separableBlurMaterials[s].uniforms.invSize.value=new he(1/n,1/i),n=Math.round(n/2),i=Math.round(i/2)}render(e,t,n,i,s){e.getClearColor(this._oldClearColor),this._oldClearAlpha=e.getClearAlpha();const a=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),s&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=n.texture,e.setRenderTarget(null),e.clear(),this._fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this._fsQuad.render(e);let o=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this._fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=o.texture,this.separableBlurMaterials[l].uniforms.direction.value=_a.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[l]),e.clear(),this._fsQuad.render(e),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=_a.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[l]),e.clear(),this._fsQuad.render(e),o=this.renderTargetsVertical[l];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this._fsQuad.render(e),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,s&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(n),this._fsQuad.render(e)),e.setClearColor(this._oldClearColor,this._oldClearAlpha),e.autoClear=a}_getSeparableBlurMaterial(e){const t=[],n=e/3;for(let a=0;a<e;a++)t.push(.39894*Math.exp(-.5*a*a/(n*n))/n);const i=[],s=[];for(let a=1;a<e;a+=2){const o=t[a],l=a+1<e?t[a+1]:0,c=o+l;i.push((a*o+(a+1)*l)/c),s.push(c)}return new dn({defines:{KERNEL_PAIRS:i.length},uniforms:{colorTexture:{value:null},invSize:{value:new he(.5,.5)},direction:{value:new he(.5,.5)},centerWeight:{value:t[0]},gaussianOffsets:{value:i},gaussianWeights:{value:s}},vertexShader:`

				varying vec2 vUv;

				void main() {

					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}`,fragmentShader:`

				#include <common>

				varying vec2 vUv;

				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float centerWeight;
				uniform float gaussianOffsets[KERNEL_PAIRS];
				uniform float gaussianWeights[KERNEL_PAIRS];

				void main() {

					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * centerWeight;

					for ( int i = 0; i < KERNEL_PAIRS; i ++ ) {

						vec2 uvOffset = direction * invSize * gaussianOffsets[ i ];
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += ( sample1 + sample2 ) * gaussianWeights[ i ];

					}

					gl_FragColor = vec4( diffuseSum, 1.0 );

				}`})}_getCompositeMaterial(e){return new dn({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`

				varying vec2 vUv;

				void main() {

					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}`,fragmentShader:`

				varying vec2 vUv;

				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor( const in float factor ) {

					float mirrorFactor = 1.2 - factor;
					return mix( factor, mirrorFactor, bloomRadius );

				}

				void main() {

					// 3.0 for backwards compatibility with previous alpha-based intensity
					vec3 bloom = 3.0 * bloomStrength * (
						lerpBloomFactor( bloomFactors[ 0 ] ) * bloomTintColors[ 0 ] * texture2D( blurTexture1, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 1 ] ) * bloomTintColors[ 1 ] * texture2D( blurTexture2, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 2 ] ) * bloomTintColors[ 2 ] * texture2D( blurTexture3, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 3 ] ) * bloomTintColors[ 3 ] * texture2D( blurTexture4, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 4 ] ) * bloomTintColors[ 4 ] * texture2D( blurTexture5, vUv ).rgb
					);

					float bloomAlpha = max( bloom.r, max( bloom.g, bloom.b ) );
					gl_FragColor = vec4( bloom, bloomAlpha );

				}`})}}_a.BlurDirectionX=new he(1,0);_a.BlurDirectionY=new he(0,1);const bl={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
		precision highp float;

		uniform mat4 modelViewMatrix;
		uniform mat4 projectionMatrix;

		attribute vec3 position;
		attribute vec2 uv;

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		precision highp float;

		uniform sampler2D tDiffuse;

		#include <tonemapping_pars_fragment>
		#include <colorspace_pars_fragment>

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );

			// tone mapping

			#ifdef LINEAR_TONE_MAPPING

				gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );

			#elif defined( REINHARD_TONE_MAPPING )

				gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );

			#elif defined( CINEON_TONE_MAPPING )

				gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );

			#elif defined( ACES_FILMIC_TONE_MAPPING )

				gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );

			#elif defined( AGX_TONE_MAPPING )

				gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );

			#elif defined( NEUTRAL_TONE_MAPPING )

				gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );

			#elif defined( CUSTOM_TONE_MAPPING )

				gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );

			#endif

			// color space

			#ifdef SRGB_TRANSFER

				gl_FragColor = sRGBTransferOETF( gl_FragColor );

			#endif

		}`};class HM extends Aa{constructor(){super(),this.isOutputPass=!0,this.uniforms=Do.clone(bl.uniforms),this.material=new sm({name:bl.name,uniforms:this.uniforms,vertexShader:bl.vertexShader,fragmentShader:bl.fragmentShader}),this._fsQuad=new kf(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},ft.getTransfer(this._outputColorSpace)===vt&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===cf?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===uf?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===hf?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===Ac?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===df?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===pf?this.material.defines.NEUTRAL_TONE_MAPPING="":this._toneMapping===ff&&(this.material.defines.CUSTOM_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}}const WM=JSON.parse('{"0":{"x_min":51,"x_max":779,"ha":828,"o":"m 415 -26 q 142 129 242 -26 q 51 476 51 271 q 141 825 51 683 q 415 984 242 984 q 687 825 585 984 q 779 476 779 682 q 688 131 779 271 q 415 -26 587 -26 m 415 137 q 529 242 485 137 q 568 477 568 338 q 530 713 568 619 q 415 821 488 821 q 303 718 344 821 q 262 477 262 616 q 301 237 262 337 q 415 137 341 137 "},"1":{"x_min":197.609375,"x_max":628,"ha":828,"o":"m 628 0 l 434 0 l 434 674 l 197 674 l 197 810 q 373 837 318 810 q 468 984 450 876 l 628 984 l 628 0 "},"2":{"x_min":64,"x_max":764,"ha":828,"o":"m 764 685 q 675 452 764 541 q 484 325 637 415 q 307 168 357 250 l 754 168 l 754 0 l 64 0 q 193 301 64 175 q 433 480 202 311 q 564 673 564 576 q 519 780 564 737 q 416 824 475 824 q 318 780 358 824 q 262 633 270 730 l 80 633 q 184 903 80 807 q 415 988 276 988 q 654 907 552 988 q 764 685 764 819 "},"3":{"x_min":61,"x_max":767,"ha":828,"o":"m 767 290 q 653 51 767 143 q 402 -32 548 -32 q 168 48 262 -32 q 61 300 61 140 l 250 300 q 298 173 250 219 q 405 132 343 132 q 514 169 471 132 q 563 282 563 211 q 491 405 563 369 q 343 432 439 432 l 343 568 q 472 592 425 568 q 534 701 534 626 q 493 793 534 758 q 398 829 453 829 q 306 789 344 829 q 268 669 268 749 l 80 669 q 182 909 80 823 q 410 986 274 986 q 633 916 540 986 q 735 719 735 840 q 703 608 735 656 q 615 522 672 561 q 727 427 687 486 q 767 290 767 369 "},"4":{"x_min":53,"x_max":775.21875,"ha":828,"o":"m 775 213 l 660 213 l 660 0 l 470 0 l 470 213 l 53 213 l 53 384 l 416 958 l 660 958 l 660 370 l 775 370 l 775 213 m 474 364 l 474 786 l 204 363 l 474 364 "},"5":{"x_min":59,"x_max":767,"ha":828,"o":"m 767 319 q 644 59 767 158 q 382 -29 533 -29 q 158 43 247 -29 q 59 264 59 123 l 252 264 q 295 165 252 201 q 400 129 339 129 q 512 172 466 129 q 564 308 564 220 q 514 437 564 387 q 398 488 464 488 q 329 472 361 488 q 271 420 297 456 l 93 428 l 157 958 l 722 958 l 722 790 l 295 790 l 271 593 q 348 635 306 621 q 431 649 389 649 q 663 551 560 649 q 767 319 767 453 "},"6":{"x_min":57,"x_max":771,"ha":828,"o":"m 744 734 l 544 734 q 500 802 533 776 q 425 828 466 828 q 315 769 359 828 q 264 571 264 701 q 451 638 343 638 q 691 537 602 638 q 771 315 771 449 q 683 79 771 176 q 420 -29 586 -29 q 134 123 227 -29 q 57 455 57 250 q 184 865 57 721 q 452 988 293 988 q 657 916 570 988 q 744 734 744 845 m 426 128 q 538 178 498 128 q 578 300 578 229 q 538 422 578 372 q 415 479 493 479 q 303 430 342 479 q 264 313 264 381 q 308 184 264 240 q 426 128 352 128 "},"7":{"x_min":65.28125,"x_max":762.5,"ha":828,"o":"m 762 808 q 521 435 604 626 q 409 0 438 244 l 205 0 q 313 422 227 234 q 548 789 387 583 l 65 789 l 65 958 l 762 958 l 762 808 "},"8":{"x_min":57,"x_max":770,"ha":828,"o":"m 625 516 q 733 416 697 477 q 770 284 770 355 q 675 69 770 161 q 415 -29 574 -29 q 145 65 244 -29 q 57 273 57 150 q 93 413 57 350 q 204 516 130 477 q 112 609 142 556 q 83 718 83 662 q 177 905 83 824 q 414 986 272 986 q 650 904 555 986 q 745 715 745 822 q 716 608 745 658 q 625 516 688 558 m 414 590 q 516 624 479 590 q 553 706 553 659 q 516 791 553 755 q 414 828 480 828 q 311 792 348 828 q 275 706 275 757 q 310 624 275 658 q 414 590 345 590 m 413 135 q 527 179 487 135 q 564 279 564 218 q 525 386 564 341 q 411 436 482 436 q 298 387 341 436 q 261 282 261 344 q 300 178 261 222 q 413 135 340 135 "},"9":{"x_min":58,"x_max":769,"ha":828,"o":"m 769 492 q 646 90 769 232 q 384 -33 539 -33 q 187 35 271 -33 q 83 224 98 107 l 282 224 q 323 154 286 182 q 404 127 359 127 q 513 182 471 127 q 563 384 563 248 q 475 335 532 355 q 372 315 418 315 q 137 416 224 315 q 58 642 58 507 q 144 877 58 781 q 407 984 239 984 q 694 827 602 984 q 769 492 769 699 m 416 476 q 525 521 488 476 q 563 632 563 566 q 521 764 563 709 q 403 826 474 826 q 297 773 337 826 q 258 649 258 720 q 295 530 258 577 q 416 476 339 476 "},"ο":{"x_min":0,"x_max":764,"ha":863,"o":"m 380 -25 q 105 87 211 -25 q 0 372 0 200 q 104 660 0 545 q 380 775 209 775 q 658 659 552 775 q 764 372 764 544 q 658 87 764 200 q 380 -25 552 -25 m 379 142 q 515 216 466 142 q 557 373 557 280 q 515 530 557 465 q 379 607 466 607 q 245 530 294 607 q 204 373 204 465 q 245 218 204 283 q 379 142 294 142 "},"S":{"x_min":0,"x_max":826,"ha":915,"o":"m 826 306 q 701 55 826 148 q 423 -29 587 -29 q 138 60 255 -29 q 0 318 13 154 l 208 318 q 288 192 216 238 q 437 152 352 152 q 559 181 506 152 q 623 282 623 217 q 466 411 623 372 q 176 487 197 478 q 18 719 18 557 q 136 958 18 869 q 399 1040 244 1040 q 670 956 561 1040 q 791 713 791 864 l 591 713 q 526 826 583 786 q 393 866 469 866 q 277 838 326 866 q 218 742 218 804 q 374 617 218 655 q 667 542 646 552 q 826 306 826 471 "},"¦":{"x_min":0,"x_max":143,"ha":240,"o":"m 143 462 l 0 462 l 0 984 l 143 984 l 143 462 m 143 -242 l 0 -242 l 0 280 l 143 280 l 143 -242 "},"/":{"x_min":196.109375,"x_max":632.5625,"ha":828,"o":"m 632 1040 l 289 -128 l 196 -128 l 538 1040 l 632 1040 "},"Τ":{"x_min":-0.609375,"x_max":808,"ha":878,"o":"m 808 831 l 508 831 l 508 0 l 298 0 l 298 831 l 0 831 l 0 1013 l 808 1013 l 808 831 "},"y":{"x_min":0,"x_max":738.890625,"ha":828,"o":"m 738 749 l 444 -107 q 361 -238 413 -199 q 213 -277 308 -277 q 156 -275 176 -277 q 120 -271 131 -271 l 120 -110 q 147 -113 134 -111 q 179 -116 161 -116 q 247 -91 226 -116 q 269 -17 269 -67 q 206 173 269 -4 q 84 515 162 301 q 0 749 41 632 l 218 749 l 376 207 l 529 749 l 738 749 "},"Π":{"x_min":0,"x_max":809,"ha":922,"o":"m 809 0 l 598 0 l 598 836 l 208 836 l 208 0 l 0 0 l 0 1012 l 809 1012 l 809 0 "},"ΐ":{"x_min":-162,"x_max":364,"ha":364,"o":"m 364 810 l 235 810 l 235 952 l 364 952 l 364 810 m 301 1064 l 86 810 l -12 810 l 123 1064 l 301 1064 m -33 810 l -162 810 l -162 952 l -33 952 l -33 810 m 200 0 l 0 0 l 0 748 l 200 748 l 200 0 "},"g":{"x_min":0,"x_max":724,"ha":839,"o":"m 724 48 q 637 -223 724 -142 q 357 -304 551 -304 q 140 -253 226 -304 q 23 -72 36 -192 l 243 -72 q 290 -127 255 -110 q 368 -144 324 -144 q 504 -82 470 -144 q 530 71 530 -38 l 530 105 q 441 25 496 51 q 319 0 386 0 q 79 115 166 0 q 0 377 0 219 q 77 647 0 534 q 317 775 166 775 q 534 656 456 775 l 534 748 l 724 748 l 724 48 m 368 167 q 492 237 447 167 q 530 382 530 297 q 490 529 530 466 q 364 603 444 603 q 240 532 284 603 q 201 386 201 471 q 240 239 201 300 q 368 167 286 167 "},"²":{"x_min":0,"x_max":463,"ha":560,"o":"m 463 791 q 365 627 463 706 q 151 483 258 555 l 455 483 l 455 382 l 0 382 q 84 565 0 488 q 244 672 97 576 q 331 784 331 727 q 299 850 331 824 q 228 876 268 876 q 159 848 187 876 q 132 762 132 820 l 10 762 q 78 924 10 866 q 228 976 137 976 q 392 925 322 976 q 463 791 463 874 "},"–":{"x_min":0,"x_max":704.171875,"ha":801,"o":"m 704 297 l 0 297 l 0 450 l 704 450 l 704 297 "},"Κ":{"x_min":0,"x_max":899.671875,"ha":969,"o":"m 899 0 l 646 0 l 316 462 l 208 355 l 208 0 l 0 0 l 0 1013 l 208 1013 l 208 596 l 603 1013 l 863 1013 l 460 603 l 899 0 "},"ƒ":{"x_min":-46,"x_max":440,"ha":525,"o":"m 440 609 l 316 609 l 149 -277 l -46 -277 l 121 609 l 14 609 l 14 749 l 121 749 q 159 949 121 894 q 344 1019 208 1019 l 440 1015 l 440 855 l 377 855 q 326 841 338 855 q 314 797 314 827 q 314 773 314 786 q 314 749 314 761 l 440 749 l 440 609 "},"e":{"x_min":0,"x_max":708,"ha":808,"o":"m 708 321 l 207 321 q 254 186 207 236 q 362 141 298 141 q 501 227 453 141 l 700 227 q 566 36 662 104 q 362 -26 477 -26 q 112 72 213 -26 q 0 369 0 182 q 95 683 0 573 q 358 793 191 793 q 619 677 531 793 q 708 321 708 561 m 501 453 q 460 571 501 531 q 353 612 420 612 q 247 570 287 612 q 207 453 207 529 l 501 453 "},"ό":{"x_min":0,"x_max":764,"ha":863,"o":"m 380 -25 q 105 87 211 -25 q 0 372 0 200 q 104 660 0 545 q 380 775 209 775 q 658 659 552 775 q 764 372 764 544 q 658 87 764 200 q 380 -25 552 -25 m 379 142 q 515 216 466 142 q 557 373 557 280 q 515 530 557 465 q 379 607 466 607 q 245 530 294 607 q 204 373 204 465 q 245 218 204 283 q 379 142 294 142 m 593 1039 l 391 823 l 293 823 l 415 1039 l 593 1039 "},"J":{"x_min":0,"x_max":649,"ha":760,"o":"m 649 294 q 573 48 649 125 q 327 -29 497 -29 q 61 82 136 -29 q 0 375 0 173 l 200 375 l 199 309 q 219 194 199 230 q 321 145 249 145 q 418 193 390 145 q 441 307 441 232 l 441 1013 l 649 1013 l 649 294 "},"»":{"x_min":-0.234375,"x_max":526,"ha":624,"o":"m 526 286 l 297 87 l 296 250 l 437 373 l 297 495 l 297 660 l 526 461 l 526 286 m 229 286 l 0 87 l 0 250 l 140 373 l 0 495 l 0 660 l 229 461 l 229 286 "},"©":{"x_min":3,"x_max":1007,"ha":1104,"o":"m 507 -6 q 129 153 269 -6 q 3 506 3 298 q 127 857 3 713 q 502 1017 266 1017 q 880 855 740 1017 q 1007 502 1007 711 q 882 152 1007 295 q 507 -6 743 -6 m 502 934 q 184 800 302 934 q 79 505 79 680 q 184 210 79 331 q 501 76 302 76 q 819 210 701 76 q 925 507 925 331 q 820 800 925 682 q 502 934 704 934 m 758 410 q 676 255 748 313 q 506 197 605 197 q 298 291 374 197 q 229 499 229 377 q 297 713 229 624 q 494 811 372 811 q 666 760 593 811 q 752 616 739 710 l 621 616 q 587 688 621 658 q 509 719 554 719 q 404 658 441 719 q 368 511 368 598 q 403 362 368 427 q 498 298 438 298 q 624 410 606 298 l 758 410 "},"ώ":{"x_min":0,"x_max":945,"ha":1051,"o":"m 566 528 l 372 528 l 372 323 q 372 298 372 311 q 373 271 372 285 q 360 183 373 211 q 292 142 342 142 q 219 222 243 142 q 203 365 203 279 q 241 565 203 461 q 334 748 273 650 l 130 748 q 36 552 68 650 q 0 337 0 444 q 69 96 0 204 q 276 -29 149 -29 q 390 0 337 -29 q 470 78 444 28 q 551 0 495 30 q 668 -29 608 -29 q 874 96 793 -29 q 945 337 945 205 q 910 547 945 444 q 814 748 876 650 l 610 748 q 703 565 671 650 q 742 365 742 462 q 718 189 742 237 q 651 142 694 142 q 577 190 597 142 q 565 289 565 221 l 565 323 l 566 528 m 718 1039 l 516 823 l 417 823 l 540 1039 l 718 1039 "},"^":{"x_min":197.21875,"x_max":630.5625,"ha":828,"o":"m 630 836 l 536 836 l 413 987 l 294 836 l 197 836 l 331 1090 l 493 1090 l 630 836 "},"«":{"x_min":0,"x_max":526.546875,"ha":624,"o":"m 526 87 l 297 286 l 297 461 l 526 660 l 526 495 l 385 373 l 526 250 l 526 87 m 229 87 l 0 286 l 0 461 l 229 660 l 229 495 l 88 373 l 229 250 l 229 87 "},"D":{"x_min":0,"x_max":864,"ha":968,"o":"m 400 1013 q 736 874 608 1013 q 864 523 864 735 q 717 146 864 293 q 340 0 570 0 l 0 0 l 0 1013 l 400 1013 m 398 837 l 206 837 l 206 182 l 372 182 q 584 276 507 182 q 657 504 657 365 q 594 727 657 632 q 398 837 522 837 "},"∙":{"x_min":0,"x_max":207,"ha":304,"o":"m 207 528 l 0 528 l 0 735 l 207 735 l 207 528 "},"ÿ":{"x_min":0,"x_max":47,"ha":125,"o":"m 47 3 q 37 -7 47 -7 q 28 0 30 -7 q 39 -4 32 -4 q 45 3 45 -1 l 37 0 q 28 9 28 0 q 39 19 28 19 l 47 16 l 47 19 l 47 3 m 37 1 q 44 8 44 1 q 37 16 44 16 q 30 8 30 16 q 37 1 30 1 m 26 1 l 23 22 l 14 0 l 3 22 l 3 3 l 0 25 l 13 1 l 22 25 l 26 1 "},"w":{"x_min":0,"x_max":1056.953125,"ha":1150,"o":"m 1056 749 l 848 0 l 647 0 l 527 536 l 412 0 l 211 0 l 0 749 l 202 749 l 325 226 l 429 748 l 633 748 l 740 229 l 864 749 l 1056 749 "},"$":{"x_min":0,"x_max":704,"ha":800,"o":"m 682 693 l 495 693 q 468 782 491 749 q 391 831 441 824 l 391 579 q 633 462 562 534 q 704 259 704 389 q 616 57 704 136 q 391 -22 528 -22 l 391 -156 l 308 -156 l 308 -22 q 76 69 152 -7 q 0 300 0 147 l 183 300 q 215 191 190 230 q 308 128 245 143 l 308 414 q 84 505 157 432 q 12 700 12 578 q 89 902 12 824 q 308 981 166 981 l 308 1069 l 391 1069 l 391 981 q 595 905 521 981 q 682 693 670 829 m 308 599 l 308 831 q 228 796 256 831 q 200 712 200 762 q 225 642 200 668 q 308 599 251 617 m 391 128 q 476 174 449 140 q 504 258 504 207 q 391 388 504 354 l 391 128 "},"\\\\":{"x_min":-0.03125,"x_max":434.765625,"ha":532,"o":"m 434 -128 l 341 -128 l 0 1039 l 91 1040 l 434 -128 "},"µ":{"x_min":0,"x_max":647,"ha":754,"o":"m 647 0 l 478 0 l 478 68 q 412 9 448 30 q 330 -11 375 -11 q 261 3 296 -11 q 199 43 226 18 l 199 -277 l 0 -277 l 0 749 l 199 749 l 199 358 q 216 221 199 267 q 322 151 244 151 q 435 240 410 151 q 448 401 448 283 l 448 749 l 647 749 l 647 0 "},"Ι":{"x_min":42,"x_max":250,"ha":413,"o":"m 250 0 l 42 0 l 42 1013 l 250 1013 l 250 0 "},"Ύ":{"x_min":0,"x_max":1211.15625,"ha":1289,"o":"m 1211 1012 l 907 376 l 907 0 l 697 0 l 697 376 l 374 1012 l 583 1012 l 802 576 l 1001 1012 l 1211 1012 m 313 1035 l 98 780 l 0 780 l 136 1035 l 313 1035 "},"’":{"x_min":0,"x_max":192,"ha":289,"o":"m 192 834 q 137 692 192 751 q 0 626 83 634 l 0 697 q 101 831 101 723 l 0 831 l 0 1013 l 192 1013 l 192 834 "},"Ν":{"x_min":0,"x_max":833,"ha":946,"o":"m 833 0 l 617 0 l 206 696 l 206 0 l 0 0 l 0 1013 l 216 1013 l 629 315 l 629 1013 l 833 1013 l 833 0 "},"-":{"x_min":27.78125,"x_max":413.890625,"ha":525,"o":"m 413 279 l 27 279 l 27 468 l 413 468 l 413 279 "},"Q":{"x_min":0,"x_max":995.59375,"ha":1096,"o":"m 995 49 l 885 -70 l 762 42 q 641 -12 709 4 q 497 -29 572 -29 q 135 123 271 -29 q 0 504 0 276 q 131 881 0 731 q 497 1040 270 1040 q 859 883 719 1040 q 994 506 994 731 q 966 321 994 413 q 884 152 938 229 l 995 49 m 730 299 q 767 395 755 344 q 779 504 779 446 q 713 743 779 644 q 505 857 638 857 q 284 745 366 857 q 210 501 210 644 q 279 265 210 361 q 492 157 357 157 q 615 181 557 157 l 508 287 l 620 405 l 730 299 "},"ς":{"x_min":0,"x_max":731.78125,"ha":768,"o":"m 731 448 l 547 448 q 485 571 531 533 q 369 610 440 610 q 245 537 292 610 q 204 394 204 473 q 322 186 204 238 q 540 133 430 159 q 659 -15 659 98 q 643 -141 659 -80 q 595 -278 627 -202 l 423 -278 q 458 -186 448 -215 q 474 -88 474 -133 q 352 0 474 -27 q 123 80 181 38 q 0 382 0 170 q 98 660 0 549 q 367 777 202 777 q 622 683 513 777 q 731 448 731 589 "},"M":{"x_min":0,"x_max":1019,"ha":1135,"o":"m 1019 0 l 823 0 l 823 819 l 618 0 l 402 0 l 194 818 l 194 0 l 0 0 l 0 1013 l 309 1012 l 510 241 l 707 1013 l 1019 1013 l 1019 0 "},"Ψ":{"x_min":0,"x_max":995,"ha":1085,"o":"m 995 698 q 924 340 995 437 q 590 200 841 227 l 590 0 l 404 0 l 404 200 q 70 340 152 227 q 0 698 0 437 l 0 1013 l 188 1013 l 188 694 q 212 472 188 525 q 404 383 254 383 l 404 1013 l 590 1013 l 590 383 q 781 472 740 383 q 807 694 807 525 l 807 1013 l 995 1013 l 995 698 "},"C":{"x_min":0,"x_max":970.828125,"ha":1043,"o":"m 970 345 q 802 70 933 169 q 490 -29 672 -29 q 130 130 268 -29 q 0 506 0 281 q 134 885 0 737 q 502 1040 275 1040 q 802 939 668 1040 q 965 679 936 838 l 745 679 q 649 809 716 761 q 495 857 582 857 q 283 747 361 857 q 214 508 214 648 q 282 267 214 367 q 493 154 359 154 q 651 204 584 154 q 752 345 718 255 l 970 345 "},"!":{"x_min":0,"x_max":204,"ha":307,"o":"m 204 739 q 182 515 204 686 q 152 282 167 398 l 52 282 q 13 589 27 473 q 0 739 0 704 l 0 1013 l 204 1013 l 204 739 m 204 0 l 0 0 l 0 203 l 204 203 l 204 0 "},"{":{"x_min":0,"x_max":501.390625,"ha":599,"o":"m 501 -285 q 229 -209 301 -285 q 176 -35 176 -155 q 182 47 176 -8 q 189 126 189 103 q 156 245 189 209 q 0 294 112 294 l 0 438 q 154 485 111 438 q 189 603 189 522 q 186 666 189 636 q 176 783 176 772 q 231 945 176 894 q 501 1015 306 1015 l 501 872 q 370 833 408 872 q 340 737 340 801 q 342 677 340 705 q 353 569 353 579 q 326 451 353 496 q 207 366 291 393 q 327 289 294 346 q 353 164 353 246 q 348 79 353 132 q 344 17 344 26 q 372 -95 344 -58 q 501 -141 408 -141 l 501 -285 "},"X":{"x_min":0,"x_max":894.453125,"ha":999,"o":"m 894 0 l 654 0 l 445 351 l 238 0 l 0 0 l 316 516 l 0 1013 l 238 1013 l 445 659 l 652 1013 l 894 1013 l 577 519 l 894 0 "},"#":{"x_min":0,"x_max":1019.453125,"ha":1117,"o":"m 1019 722 l 969 582 l 776 581 l 717 417 l 919 417 l 868 279 l 668 278 l 566 -6 l 413 -5 l 516 279 l 348 279 l 247 -6 l 94 -6 l 196 278 l 0 279 l 49 417 l 245 417 l 304 581 l 98 582 l 150 722 l 354 721 l 455 1006 l 606 1006 l 507 721 l 673 722 l 776 1006 l 927 1006 l 826 721 l 1019 722 m 627 581 l 454 581 l 394 417 l 567 417 l 627 581 "},"ι":{"x_min":42,"x_max":242,"ha":389,"o":"m 242 0 l 42 0 l 42 749 l 242 749 l 242 0 "},"Ά":{"x_min":0,"x_max":995.828125,"ha":1072,"o":"m 313 1035 l 98 780 l 0 780 l 136 1035 l 313 1035 m 995 0 l 776 0 l 708 208 l 315 208 l 247 0 l 29 0 l 390 1012 l 629 1012 l 995 0 m 652 376 l 509 809 l 369 376 l 652 376 "},")":{"x_min":0,"x_max":389,"ha":486,"o":"m 389 357 q 319 14 389 187 q 145 -293 259 -134 l 0 -293 q 139 22 90 -142 q 189 358 189 187 q 139 689 189 525 q 0 1013 90 853 l 145 1013 q 319 703 258 857 q 389 357 389 528 "},"ε":{"x_min":16.671875,"x_max":652.78125,"ha":742,"o":"m 652 259 q 565 49 652 123 q 340 -25 479 -25 q 102 39 188 -25 q 16 197 16 104 q 45 299 16 249 q 134 390 75 348 q 58 456 86 419 q 25 552 25 502 q 120 717 25 653 q 322 776 208 776 q 537 710 456 776 q 625 508 625 639 l 445 508 q 415 585 445 563 q 327 608 386 608 q 254 590 293 608 q 215 544 215 573 q 252 469 215 490 q 336 453 280 453 q 369 455 347 453 q 400 456 391 456 l 400 308 l 329 308 q 247 291 280 308 q 204 223 204 269 q 255 154 204 172 q 345 143 286 143 q 426 174 398 143 q 454 259 454 206 l 652 259 "},"Δ":{"x_min":0,"x_max":981.953125,"ha":1057,"o":"m 981 0 l 0 0 l 386 1013 l 594 1013 l 981 0 m 715 175 l 490 765 l 266 175 l 715 175 "},"}":{"x_min":0,"x_max":500,"ha":597,"o":"m 500 294 q 348 246 390 294 q 315 128 315 209 q 320 42 315 101 q 326 -48 326 -17 q 270 -214 326 -161 q 0 -285 196 -285 l 0 -141 q 126 -97 90 -141 q 154 8 154 -64 q 150 91 154 37 q 146 157 146 145 q 172 281 146 235 q 294 366 206 339 q 173 451 208 390 q 146 576 146 500 q 150 655 146 603 q 154 731 154 708 q 126 831 154 799 q 0 872 90 872 l 0 1015 q 270 944 196 1015 q 326 777 326 891 q 322 707 326 747 q 313 593 313 612 q 347 482 313 518 q 500 438 390 438 l 500 294 "},"‰":{"x_min":0,"x_max":1681,"ha":1775,"o":"m 861 484 q 1048 404 979 484 q 1111 228 1111 332 q 1048 51 1111 123 q 859 -29 979 -29 q 672 50 740 -29 q 610 227 610 122 q 672 403 610 331 q 861 484 741 484 m 861 120 q 939 151 911 120 q 967 226 967 183 q 942 299 967 270 q 861 333 912 333 q 783 301 811 333 q 756 226 756 269 q 783 151 756 182 q 861 120 810 120 m 904 984 l 316 -28 l 205 -29 l 793 983 l 904 984 m 250 984 q 436 904 366 984 q 499 730 499 832 q 436 552 499 626 q 248 472 366 472 q 62 552 132 472 q 0 728 0 624 q 62 903 0 831 q 250 984 132 984 m 249 835 q 169 801 198 835 q 140 725 140 768 q 167 652 140 683 q 247 621 195 621 q 327 654 298 621 q 357 730 357 687 q 329 803 357 772 q 249 835 301 835 m 1430 484 q 1618 404 1548 484 q 1681 228 1681 332 q 1618 51 1681 123 q 1429 -29 1548 -29 q 1241 50 1309 -29 q 1179 227 1179 122 q 1241 403 1179 331 q 1430 484 1311 484 m 1431 120 q 1509 151 1481 120 q 1537 226 1537 183 q 1511 299 1537 270 q 1431 333 1482 333 q 1352 301 1380 333 q 1325 226 1325 269 q 1352 151 1325 182 q 1431 120 1379 120 "},"a":{"x_min":0,"x_max":700,"ha":786,"o":"m 700 0 l 488 0 q 465 93 469 45 q 365 5 427 37 q 233 -26 303 -26 q 65 37 130 -26 q 0 205 0 101 q 120 409 0 355 q 343 452 168 431 q 465 522 465 468 q 424 588 465 565 q 337 611 384 611 q 250 581 285 611 q 215 503 215 552 l 26 503 q 113 707 26 633 q 328 775 194 775 q 538 723 444 775 q 657 554 657 659 l 657 137 q 666 73 657 101 q 700 33 675 45 l 700 0 m 465 297 l 465 367 q 299 322 358 340 q 193 217 193 287 q 223 150 193 174 q 298 127 254 127 q 417 175 370 127 q 465 297 465 224 "},"—":{"x_min":0,"x_max":941.671875,"ha":1039,"o":"m 941 297 l 0 297 l 0 450 l 941 450 l 941 297 "},"=":{"x_min":29.171875,"x_max":798.609375,"ha":828,"o":"m 798 502 l 29 502 l 29 635 l 798 635 l 798 502 m 798 204 l 29 204 l 29 339 l 798 339 l 798 204 "},"N":{"x_min":0,"x_max":833,"ha":949,"o":"m 833 0 l 617 0 l 206 695 l 206 0 l 0 0 l 0 1013 l 216 1013 l 629 315 l 629 1013 l 833 1013 l 833 0 "},"ρ":{"x_min":0,"x_max":722,"ha":810,"o":"m 364 -17 q 271 0 313 -17 q 194 48 230 16 l 194 -278 l 0 -278 l 0 370 q 87 656 0 548 q 358 775 183 775 q 626 655 524 775 q 722 372 722 541 q 621 95 722 208 q 364 -17 520 -17 m 360 607 q 237 529 280 607 q 201 377 201 463 q 234 229 201 292 q 355 147 277 147 q 467 210 419 147 q 515 374 515 273 q 471 537 515 468 q 360 607 428 607 "},"¯":{"x_min":0,"x_max":775,"ha":771,"o":"m 775 958 l 0 958 l 0 1111 l 775 1111 l 775 958 "},"Z":{"x_min":0,"x_max":804.171875,"ha":906,"o":"m 804 836 l 251 182 l 793 182 l 793 0 l 0 0 l 0 176 l 551 830 l 11 830 l 11 1013 l 804 1013 l 804 836 "},"u":{"x_min":0,"x_max":668,"ha":782,"o":"m 668 0 l 474 0 l 474 89 q 363 9 425 37 q 233 -19 301 -19 q 61 53 123 -19 q 0 239 0 126 l 0 749 l 199 749 l 199 296 q 225 193 199 233 q 316 146 257 146 q 424 193 380 146 q 469 304 469 240 l 469 749 l 668 749 l 668 0 "},"k":{"x_min":0,"x_max":688.890625,"ha":771,"o":"m 688 0 l 450 0 l 270 316 l 196 237 l 196 0 l 0 0 l 0 1013 l 196 1013 l 196 483 l 433 748 l 675 748 l 413 469 l 688 0 "},"Η":{"x_min":0,"x_max":837,"ha":950,"o":"m 837 0 l 627 0 l 627 450 l 210 450 l 210 0 l 0 0 l 0 1013 l 210 1013 l 210 635 l 627 635 l 627 1013 l 837 1013 l 837 0 "},"Α":{"x_min":0,"x_max":966.671875,"ha":1043,"o":"m 966 0 l 747 0 l 679 208 l 286 208 l 218 0 l 0 0 l 361 1013 l 600 1013 l 966 0 m 623 376 l 480 809 l 340 376 l 623 376 "},"s":{"x_min":0,"x_max":681,"ha":775,"o":"m 681 229 q 568 33 681 105 q 340 -29 471 -29 q 107 39 202 -29 q 0 245 0 114 l 201 245 q 252 155 201 189 q 358 128 295 128 q 436 144 401 128 q 482 205 482 166 q 363 284 482 255 q 143 348 181 329 q 25 533 25 408 q 129 716 25 647 q 340 778 220 778 q 554 710 465 778 q 658 522 643 643 l 463 522 q 419 596 458 570 q 327 622 380 622 q 255 606 290 622 q 221 556 221 590 q 339 473 221 506 q 561 404 528 420 q 681 229 681 344 "},"B":{"x_min":0,"x_max":835,"ha":938,"o":"m 674 547 q 791 450 747 518 q 835 304 835 383 q 718 75 835 158 q 461 0 612 0 l 0 0 l 0 1013 l 477 1013 q 697 951 609 1013 q 797 754 797 880 q 765 630 797 686 q 674 547 734 575 m 438 621 q 538 646 495 621 q 590 730 590 676 q 537 814 590 785 q 436 838 494 838 l 199 838 l 199 621 l 438 621 m 445 182 q 561 211 513 182 q 618 311 618 247 q 565 410 618 375 q 444 446 512 446 l 199 446 l 199 182 l 445 182 "},"…":{"x_min":0,"x_max":819,"ha":963,"o":"m 206 0 l 0 0 l 0 207 l 206 207 l 206 0 m 512 0 l 306 0 l 306 207 l 512 207 l 512 0 m 819 0 l 613 0 l 613 207 l 819 207 l 819 0 "},"?":{"x_min":1,"x_max":687,"ha":785,"o":"m 687 734 q 621 563 687 634 q 501 454 560 508 q 436 293 436 386 l 251 293 l 251 391 q 363 557 251 462 q 476 724 476 653 q 432 827 476 788 q 332 866 389 866 q 238 827 275 866 q 195 699 195 781 l 1 699 q 110 955 1 861 q 352 1040 210 1040 q 582 963 489 1040 q 687 734 687 878 m 446 0 l 243 0 l 243 203 l 446 203 l 446 0 "},"H":{"x_min":0,"x_max":838,"ha":953,"o":"m 838 0 l 628 0 l 628 450 l 210 450 l 210 0 l 0 0 l 0 1013 l 210 1013 l 210 635 l 628 635 l 628 1013 l 838 1013 l 838 0 "},"ν":{"x_min":0,"x_max":740.28125,"ha":828,"o":"m 740 749 l 473 0 l 266 0 l 0 749 l 222 749 l 373 211 l 529 749 l 740 749 "},"c":{"x_min":0,"x_max":751.390625,"ha":828,"o":"m 751 282 q 625 58 725 142 q 384 -26 526 -26 q 107 84 215 -26 q 0 366 0 195 q 98 651 0 536 q 370 774 204 774 q 616 700 518 774 q 751 486 715 626 l 536 486 q 477 570 516 538 q 380 607 434 607 q 248 533 298 607 q 204 378 204 466 q 242 219 204 285 q 377 139 290 139 q 483 179 438 139 q 543 282 527 220 l 751 282 "},"¶":{"x_min":0,"x_max":566.671875,"ha":678,"o":"m 21 892 l 52 892 l 98 761 l 145 892 l 176 892 l 178 741 l 157 741 l 157 867 l 108 741 l 88 741 l 40 871 l 40 741 l 21 741 l 21 892 m 308 854 l 308 731 q 252 691 308 691 q 227 691 240 691 q 207 696 213 695 l 207 712 l 253 706 q 288 733 288 706 l 288 763 q 244 741 279 741 q 193 797 193 741 q 261 860 193 860 q 287 860 273 860 q 308 854 302 855 m 288 842 l 263 843 q 213 796 213 843 q 248 756 213 756 q 288 796 288 756 l 288 842 m 566 988 l 502 988 l 502 -1 l 439 -1 l 439 988 l 317 988 l 317 -1 l 252 -1 l 252 602 q 81 653 155 602 q 0 805 0 711 q 101 989 0 918 q 309 1053 194 1053 l 566 1053 l 566 988 "},"β":{"x_min":0,"x_max":703,"ha":789,"o":"m 510 539 q 651 429 600 501 q 703 262 703 357 q 617 53 703 136 q 404 -29 532 -29 q 199 51 279 -29 l 199 -278 l 0 -278 l 0 627 q 77 911 0 812 q 343 1021 163 1021 q 551 957 464 1021 q 649 769 649 886 q 613 638 649 697 q 510 539 577 579 m 344 136 q 452 181 408 136 q 497 291 497 227 q 435 409 497 369 q 299 444 381 444 l 299 600 q 407 634 363 600 q 452 731 452 669 q 417 820 452 784 q 329 857 382 857 q 217 775 246 857 q 199 622 199 725 l 199 393 q 221 226 199 284 q 344 136 254 136 "},"Μ":{"x_min":0,"x_max":1019,"ha":1132,"o":"m 1019 0 l 823 0 l 823 818 l 617 0 l 402 0 l 194 818 l 194 0 l 0 0 l 0 1013 l 309 1013 l 509 241 l 708 1013 l 1019 1013 l 1019 0 "},"Ό":{"x_min":0.15625,"x_max":1174,"ha":1271,"o":"m 676 -29 q 312 127 451 -29 q 179 505 179 277 q 311 883 179 733 q 676 1040 449 1040 q 1040 883 901 1040 q 1174 505 1174 733 q 1041 127 1174 277 q 676 -29 903 -29 m 676 154 q 890 266 811 154 q 961 506 961 366 q 891 745 961 648 q 676 857 812 857 q 462 747 541 857 q 392 506 392 648 q 461 266 392 365 q 676 154 540 154 m 314 1034 l 98 779 l 0 779 l 136 1034 l 314 1034 "},"Ή":{"x_min":0,"x_max":1248,"ha":1361,"o":"m 1248 0 l 1038 0 l 1038 450 l 621 450 l 621 0 l 411 0 l 411 1012 l 621 1012 l 621 635 l 1038 635 l 1038 1012 l 1248 1012 l 1248 0 m 313 1035 l 98 780 l 0 780 l 136 1035 l 313 1035 "},"•":{"x_min":-27.78125,"x_max":691.671875,"ha":775,"o":"m 691 508 q 588 252 691 358 q 331 147 486 147 q 77 251 183 147 q -27 508 -27 355 q 75 761 -27 655 q 331 868 179 868 q 585 763 479 868 q 691 508 691 658 "},"¥":{"x_min":0,"x_max":836,"ha":931,"o":"m 195 625 l 0 1013 l 208 1013 l 427 576 l 626 1013 l 836 1013 l 650 625 l 777 625 l 777 472 l 578 472 l 538 389 l 777 389 l 777 236 l 532 236 l 532 0 l 322 0 l 322 236 l 79 236 l 79 389 l 315 389 l 273 472 l 79 472 l 79 625 l 195 625 "},"(":{"x_min":0,"x_max":388.890625,"ha":486,"o":"m 388 -293 l 243 -293 q 70 14 130 -134 q 0 357 0 189 q 69 703 0 526 q 243 1013 129 856 l 388 1013 q 248 695 297 860 q 200 358 200 530 q 248 24 200 187 q 388 -293 297 -138 "},"U":{"x_min":0,"x_max":813,"ha":926,"o":"m 813 362 q 697 79 813 187 q 405 -29 582 -29 q 114 78 229 -29 q 0 362 0 186 l 0 1013 l 210 1013 l 210 387 q 260 226 210 291 q 408 154 315 154 q 554 226 500 154 q 603 387 603 291 l 603 1013 l 813 1013 l 813 362 "},"γ":{"x_min":0.0625,"x_max":729.234375,"ha":815,"o":"m 729 749 l 457 37 l 457 -278 l 257 -278 l 257 37 q 218 155 243 95 q 170 275 194 215 l 0 749 l 207 749 l 363 284 l 522 749 l 729 749 "},"α":{"x_min":-1,"x_max":722,"ha":835,"o":"m 722 0 l 531 0 l 530 101 q 433 8 491 41 q 304 -25 375 -25 q 72 104 157 -25 q -1 372 -1 216 q 72 643 -1 530 q 308 775 158 775 q 433 744 375 775 q 528 656 491 713 l 528 749 l 722 749 l 722 0 m 361 601 q 233 527 277 601 q 196 375 196 464 q 232 224 196 288 q 358 144 277 144 q 487 217 441 144 q 528 370 528 281 q 489 523 528 457 q 361 601 443 601 "},"F":{"x_min":0,"x_max":706.953125,"ha":778,"o":"m 706 837 l 206 837 l 206 606 l 645 606 l 645 431 l 206 431 l 206 0 l 0 0 l 0 1013 l 706 1013 l 706 837 "},"­":{"x_min":0,"x_max":704.171875,"ha":801,"o":"m 704 297 l 0 297 l 0 450 l 704 450 l 704 297 "},":":{"x_min":0,"x_max":207,"ha":304,"o":"m 207 528 l 0 528 l 0 735 l 207 735 l 207 528 m 207 0 l 0 0 l 0 207 l 207 207 l 207 0 "},"Χ":{"x_min":0,"x_max":894.453125,"ha":978,"o":"m 894 0 l 654 0 l 445 351 l 238 0 l 0 0 l 316 516 l 0 1013 l 238 1013 l 445 660 l 652 1013 l 894 1013 l 577 519 l 894 0 "},"*":{"x_min":115,"x_max":713,"ha":828,"o":"m 713 740 l 518 688 l 651 525 l 531 438 l 412 612 l 290 439 l 173 523 l 308 688 l 115 741 l 159 880 l 342 816 l 343 1013 l 482 1013 l 481 816 l 664 880 l 713 740 "},"†":{"x_min":0,"x_max":809,"ha":894,"o":"m 509 804 l 809 804 l 809 621 l 509 621 l 509 0 l 299 0 l 299 621 l 0 621 l 0 804 l 299 804 l 299 1011 l 509 1011 l 509 804 "},"°":{"x_min":-1,"x_max":363,"ha":460,"o":"m 181 808 q 46 862 94 808 q -1 992 -1 917 q 44 1118 -1 1066 q 181 1175 96 1175 q 317 1118 265 1175 q 363 991 363 1066 q 315 862 363 917 q 181 808 267 808 m 181 908 q 240 933 218 908 q 263 992 263 958 q 242 1051 263 1027 q 181 1075 221 1075 q 120 1050 142 1075 q 99 991 99 1026 q 120 933 99 958 q 181 908 142 908 "},"V":{"x_min":0,"x_max":895.828125,"ha":997,"o":"m 895 1013 l 550 0 l 347 0 l 0 1013 l 231 1013 l 447 256 l 666 1013 l 895 1013 "},"Ξ":{"x_min":0,"x_max":751.390625,"ha":800,"o":"m 733 826 l 5 826 l 5 1012 l 733 1012 l 733 826 m 681 432 l 65 432 l 65 617 l 681 617 l 681 432 m 751 0 l 0 0 l 0 183 l 751 183 l 751 0 "}," ":{"x_min":0,"x_max":0,"ha":853},"Ϋ":{"x_min":-0.21875,"x_max":836.171875,"ha":914,"o":"m 610 1046 l 454 1046 l 454 1215 l 610 1215 l 610 1046 m 369 1046 l 212 1046 l 212 1215 l 369 1215 l 369 1046 m 836 1012 l 532 376 l 532 0 l 322 0 l 322 376 l 0 1012 l 208 1012 l 427 576 l 626 1012 l 836 1012 "},"”":{"x_min":0,"x_max":469,"ha":567,"o":"m 192 834 q 137 692 192 751 q 0 626 83 634 l 0 697 q 101 831 101 723 l 0 831 l 0 1013 l 192 1013 l 192 834 m 469 834 q 414 692 469 751 q 277 626 360 634 l 277 697 q 379 831 379 723 l 277 831 l 277 1013 l 469 1013 l 469 834 "},"@":{"x_min":0,"x_max":1276,"ha":1374,"o":"m 1115 -52 q 895 -170 1015 -130 q 647 -211 776 -211 q 158 -34 334 -211 q 0 360 0 123 q 179 810 0 621 q 698 1019 377 1019 q 1138 859 981 1019 q 1276 514 1276 720 q 1173 210 1276 335 q 884 75 1062 75 q 784 90 810 75 q 737 186 749 112 q 647 104 698 133 q 532 75 596 75 q 360 144 420 75 q 308 308 308 205 q 398 568 308 451 q 638 696 497 696 q 731 671 690 696 q 805 604 772 647 l 840 673 l 964 673 q 886 373 915 490 q 856 239 856 257 q 876 201 856 214 q 920 188 895 188 q 1084 284 1019 188 q 1150 511 1150 380 q 1051 779 1150 672 q 715 905 934 905 q 272 734 439 905 q 121 363 121 580 q 250 41 121 170 q 647 -103 394 -103 q 863 -67 751 -103 q 1061 26 975 -32 l 1115 -52 m 769 483 q 770 500 770 489 q 733 567 770 539 q 651 596 695 596 q 508 504 566 596 q 457 322 457 422 q 483 215 457 256 q 561 175 509 175 q 671 221 625 175 q 733 333 718 268 l 769 483 "},"Ί":{"x_min":0,"x_max":619,"ha":732,"o":"m 313 1035 l 98 780 l 0 780 l 136 1035 l 313 1035 m 619 0 l 411 0 l 411 1012 l 619 1012 l 619 0 "},"i":{"x_min":14,"x_max":214,"ha":326,"o":"m 214 830 l 14 830 l 14 1013 l 214 1013 l 214 830 m 214 0 l 14 0 l 14 748 l 214 748 l 214 0 "},"Β":{"x_min":0,"x_max":835,"ha":961,"o":"m 675 547 q 791 450 747 518 q 835 304 835 383 q 718 75 835 158 q 461 0 612 0 l 0 0 l 0 1013 l 477 1013 q 697 951 609 1013 q 797 754 797 880 q 766 630 797 686 q 675 547 734 575 m 439 621 q 539 646 496 621 q 590 730 590 676 q 537 814 590 785 q 436 838 494 838 l 199 838 l 199 621 l 439 621 m 445 182 q 561 211 513 182 q 618 311 618 247 q 565 410 618 375 q 444 446 512 446 l 199 446 l 199 182 l 445 182 "},"υ":{"x_min":0,"x_max":656,"ha":767,"o":"m 656 416 q 568 55 656 145 q 326 -25 490 -25 q 59 97 137 -25 q 0 369 0 191 l 0 749 l 200 749 l 200 369 q 216 222 200 268 q 326 142 245 142 q 440 247 411 142 q 456 422 456 304 l 456 749 l 656 749 l 656 416 "},"]":{"x_min":0,"x_max":349,"ha":446,"o":"m 349 -300 l 0 -300 l 0 -154 l 163 -154 l 163 866 l 0 866 l 0 1013 l 349 1013 l 349 -300 "},"m":{"x_min":0,"x_max":1065,"ha":1174,"o":"m 1065 0 l 866 0 l 866 483 q 836 564 866 532 q 759 596 807 596 q 663 555 700 596 q 627 454 627 514 l 627 0 l 433 0 l 433 481 q 403 563 433 531 q 323 596 374 596 q 231 554 265 596 q 197 453 197 513 l 197 0 l 0 0 l 0 748 l 189 748 l 189 665 q 279 745 226 715 q 392 775 333 775 q 509 744 455 775 q 606 659 563 713 q 695 744 640 713 q 814 775 749 775 q 992 702 920 775 q 1065 523 1065 630 l 1065 0 "},"χ":{"x_min":0,"x_max":759.71875,"ha":847,"o":"m 759 -299 l 548 -299 l 379 66 l 215 -299 l 0 -299 l 261 233 l 13 749 l 230 749 l 379 400 l 527 749 l 738 749 l 500 238 l 759 -299 "},"ί":{"x_min":42,"x_max":371.171875,"ha":389,"o":"m 242 0 l 42 0 l 42 748 l 242 748 l 242 0 m 371 1039 l 169 823 l 71 823 l 193 1039 l 371 1039 "},"Ζ":{"x_min":0,"x_max":804.171875,"ha":886,"o":"m 804 835 l 251 182 l 793 182 l 793 0 l 0 0 l 0 176 l 551 829 l 11 829 l 11 1012 l 804 1012 l 804 835 "},"R":{"x_min":0,"x_max":836.109375,"ha":947,"o":"m 836 0 l 608 0 q 588 53 596 20 q 581 144 581 86 q 581 179 581 162 q 581 215 581 197 q 553 345 581 306 q 428 393 518 393 l 208 393 l 208 0 l 0 0 l 0 1013 l 491 1013 q 720 944 630 1013 q 819 734 819 869 q 778 584 819 654 q 664 485 738 513 q 757 415 727 463 q 794 231 794 358 l 794 170 q 800 84 794 116 q 836 31 806 51 l 836 0 m 462 838 l 208 838 l 208 572 l 452 572 q 562 604 517 572 q 612 704 612 640 q 568 801 612 765 q 462 838 525 838 "},"o":{"x_min":0,"x_max":764,"ha":871,"o":"m 380 -26 q 105 86 211 -26 q 0 371 0 199 q 104 660 0 545 q 380 775 209 775 q 658 659 552 775 q 764 371 764 544 q 658 86 764 199 q 380 -26 552 -26 m 379 141 q 515 216 466 141 q 557 373 557 280 q 515 530 557 465 q 379 607 466 607 q 245 530 294 607 q 204 373 204 465 q 245 217 204 282 q 379 141 294 141 "},"K":{"x_min":0,"x_max":900,"ha":996,"o":"m 900 0 l 647 0 l 316 462 l 208 355 l 208 0 l 0 0 l 0 1013 l 208 1013 l 208 595 l 604 1013 l 863 1013 l 461 603 l 900 0 "},",":{"x_min":0,"x_max":206,"ha":303,"o":"m 206 5 q 150 -151 206 -88 q 0 -238 94 -213 l 0 -159 q 84 -100 56 -137 q 111 -2 111 -62 l 0 -2 l 0 205 l 206 205 l 206 5 "},"d":{"x_min":0,"x_max":722,"ha":836,"o":"m 722 0 l 530 0 l 530 101 q 303 -26 449 -26 q 72 103 155 -26 q 0 373 0 214 q 72 642 0 528 q 305 775 156 775 q 433 743 373 775 q 530 656 492 712 l 530 1013 l 722 1013 l 722 0 m 361 600 q 234 523 280 600 q 196 372 196 458 q 233 220 196 286 q 358 143 278 143 q 489 216 442 143 q 530 369 530 280 q 491 522 530 456 q 361 600 443 600 "},"¨":{"x_min":212,"x_max":609,"ha":933,"o":"m 609 1046 l 453 1046 l 453 1216 l 609 1216 l 609 1046 m 369 1046 l 212 1046 l 212 1216 l 369 1216 l 369 1046 "},"E":{"x_min":0,"x_max":761.109375,"ha":824,"o":"m 761 0 l 0 0 l 0 1013 l 734 1013 l 734 837 l 206 837 l 206 621 l 690 621 l 690 446 l 206 446 l 206 186 l 761 186 l 761 0 "},"Y":{"x_min":0,"x_max":836,"ha":931,"o":"m 836 1013 l 532 376 l 532 0 l 322 0 l 322 376 l 0 1013 l 208 1013 l 427 576 l 626 1013 l 836 1013 "},"\\"":{"x_min":0,"x_max":357,"ha":454,"o":"m 357 604 l 225 604 l 225 988 l 357 988 l 357 604 m 132 604 l 0 604 l 0 988 l 132 988 l 132 604 "},"‹":{"x_min":35.984375,"x_max":791.671875,"ha":828,"o":"m 791 17 l 36 352 l 35 487 l 791 823 l 791 672 l 229 421 l 791 168 l 791 17 "},"„":{"x_min":0,"x_max":483,"ha":588,"o":"m 206 5 q 150 -151 206 -88 q 0 -238 94 -213 l 0 -159 q 84 -100 56 -137 q 111 -2 111 -62 l 0 -2 l 0 205 l 206 205 l 206 5 m 483 5 q 427 -151 483 -88 q 277 -238 371 -213 l 277 -159 q 361 -100 334 -137 q 388 -2 388 -62 l 277 -2 l 277 205 l 483 205 l 483 5 "},"δ":{"x_min":6,"x_max":732,"ha":835,"o":"m 732 352 q 630 76 732 177 q 354 -25 529 -25 q 101 74 197 -25 q 6 333 6 174 q 89 581 6 480 q 323 690 178 690 q 66 864 201 787 l 66 1013 l 669 1013 l 669 856 l 348 856 q 532 729 461 789 q 673 566 625 651 q 732 352 732 465 m 419 551 q 259 496 321 551 q 198 344 198 441 q 238 208 198 267 q 357 140 283 140 q 484 203 437 140 q 526 344 526 260 q 499 466 526 410 q 419 551 473 521 "},"έ":{"x_min":16.671875,"x_max":652.78125,"ha":742,"o":"m 652 259 q 565 49 652 123 q 340 -25 479 -25 q 102 39 188 -25 q 16 197 16 104 q 45 299 16 250 q 134 390 75 348 q 58 456 86 419 q 25 552 25 502 q 120 717 25 653 q 322 776 208 776 q 537 710 456 776 q 625 508 625 639 l 445 508 q 415 585 445 563 q 327 608 386 608 q 254 590 293 608 q 215 544 215 573 q 252 469 215 490 q 336 453 280 453 q 369 455 347 453 q 400 456 391 456 l 400 308 l 329 308 q 247 291 280 308 q 204 223 204 269 q 255 154 204 172 q 345 143 286 143 q 426 174 398 143 q 454 259 454 206 l 652 259 m 579 1039 l 377 823 l 279 823 l 401 1039 l 579 1039 "},"ω":{"x_min":0,"x_max":945,"ha":1051,"o":"m 565 323 l 565 289 q 577 190 565 221 q 651 142 597 142 q 718 189 694 142 q 742 365 742 237 q 703 565 742 462 q 610 749 671 650 l 814 749 q 910 547 876 650 q 945 337 945 444 q 874 96 945 205 q 668 -29 793 -29 q 551 0 608 -29 q 470 78 495 30 q 390 0 444 28 q 276 -29 337 -29 q 69 96 149 -29 q 0 337 0 204 q 36 553 0 444 q 130 749 68 650 l 334 749 q 241 565 273 650 q 203 365 203 461 q 219 222 203 279 q 292 142 243 142 q 360 183 342 142 q 373 271 373 211 q 372 298 372 285 q 372 323 372 311 l 372 528 l 566 528 l 565 323 "},"´":{"x_min":0,"x_max":132,"ha":299,"o":"m 132 604 l 0 604 l 0 988 l 132 988 l 132 604 "},"±":{"x_min":29,"x_max":798,"ha":828,"o":"m 798 480 l 484 480 l 484 254 l 344 254 l 344 480 l 29 480 l 29 615 l 344 615 l 344 842 l 484 842 l 484 615 l 798 615 l 798 480 m 798 0 l 29 0 l 29 136 l 798 136 l 798 0 "},"|":{"x_min":0,"x_max":143,"ha":240,"o":"m 143 462 l 0 462 l 0 984 l 143 984 l 143 462 m 143 -242 l 0 -242 l 0 280 l 143 280 l 143 -242 "},"ϋ":{"x_min":0,"x_max":656,"ha":767,"o":"m 535 810 l 406 810 l 406 952 l 535 952 l 535 810 m 271 810 l 142 810 l 142 952 l 271 952 l 271 810 m 656 417 q 568 55 656 146 q 326 -25 490 -25 q 59 97 137 -25 q 0 369 0 192 l 0 748 l 200 748 l 200 369 q 216 222 200 268 q 326 142 245 142 q 440 247 411 142 q 456 422 456 304 l 456 748 l 656 748 l 656 417 "},"§":{"x_min":0,"x_max":633,"ha":731,"o":"m 633 469 q 601 356 633 406 q 512 274 569 305 q 570 197 548 242 q 593 105 593 152 q 501 -76 593 -5 q 301 -142 416 -142 q 122 -82 193 -142 q 43 108 43 -15 l 212 108 q 251 27 220 53 q 321 1 283 1 q 389 23 360 1 q 419 83 419 46 q 310 194 419 139 q 108 297 111 295 q 0 476 0 372 q 33 584 0 537 q 120 659 62 626 q 72 720 91 686 q 53 790 53 755 q 133 978 53 908 q 312 1042 207 1042 q 483 984 412 1042 q 574 807 562 921 l 409 807 q 379 875 409 851 q 307 900 349 900 q 244 881 270 900 q 218 829 218 862 q 324 731 218 781 q 524 636 506 647 q 633 469 633 565 m 419 334 q 473 411 473 372 q 451 459 473 436 q 390 502 430 481 l 209 595 q 167 557 182 577 q 153 520 153 537 q 187 461 153 491 q 263 413 212 440 l 419 334 "},"b":{"x_min":0,"x_max":722,"ha":822,"o":"m 416 -26 q 289 6 346 -26 q 192 101 232 39 l 192 0 l 0 0 l 0 1013 l 192 1013 l 192 656 q 286 743 226 712 q 415 775 346 775 q 649 644 564 775 q 722 374 722 533 q 649 106 722 218 q 416 -26 565 -26 m 361 600 q 232 524 279 600 q 192 371 192 459 q 229 221 192 284 q 357 145 275 145 q 487 221 441 145 q 526 374 526 285 q 488 523 526 460 q 361 600 442 600 "},"q":{"x_min":0,"x_max":722,"ha":833,"o":"m 722 -298 l 530 -298 l 530 97 q 306 -25 449 -25 q 73 104 159 -25 q 0 372 0 216 q 72 643 0 529 q 305 775 156 775 q 430 742 371 775 q 530 654 488 709 l 530 750 l 722 750 l 722 -298 m 360 601 q 234 527 278 601 q 197 378 197 466 q 233 225 197 291 q 357 144 277 144 q 488 217 441 144 q 530 370 530 282 q 491 523 530 459 q 360 601 443 601 "},"Ω":{"x_min":-0.03125,"x_max":1008.53125,"ha":1108,"o":"m 1008 0 l 589 0 l 589 199 q 717 368 670 265 q 764 580 764 471 q 698 778 764 706 q 504 855 629 855 q 311 773 380 855 q 243 563 243 691 q 289 360 243 458 q 419 199 336 262 l 419 0 l 0 0 l 0 176 l 202 176 q 77 355 123 251 q 32 569 32 459 q 165 908 32 776 q 505 1040 298 1040 q 844 912 711 1040 q 977 578 977 785 q 931 362 977 467 q 805 176 886 256 l 1008 176 l 1008 0 "},"ύ":{"x_min":0,"x_max":656,"ha":767,"o":"m 656 417 q 568 55 656 146 q 326 -25 490 -25 q 59 97 137 -25 q 0 369 0 192 l 0 748 l 200 748 l 201 369 q 218 222 201 269 q 326 142 245 142 q 440 247 411 142 q 456 422 456 304 l 456 748 l 656 748 l 656 417 m 579 1039 l 378 823 l 279 823 l 401 1039 l 579 1039 "},"z":{"x_min":0,"x_max":663.890625,"ha":753,"o":"m 663 0 l 0 0 l 0 154 l 411 591 l 25 591 l 25 749 l 650 749 l 650 584 l 245 165 l 663 165 l 663 0 "},"™":{"x_min":0,"x_max":951,"ha":1063,"o":"m 405 921 l 255 921 l 255 506 l 149 506 l 149 921 l 0 921 l 0 1013 l 405 1013 l 405 921 m 951 506 l 852 506 l 852 916 l 750 506 l 643 506 l 539 915 l 539 506 l 442 506 l 442 1013 l 595 1012 l 695 625 l 794 1013 l 951 1013 l 951 506 "},"ή":{"x_min":0,"x_max":669,"ha":779,"o":"m 669 -278 l 469 -278 l 469 390 q 448 526 469 473 q 348 606 417 606 q 244 553 288 606 q 201 441 201 501 l 201 0 l 0 0 l 0 749 l 201 749 l 201 665 q 301 744 244 715 q 423 774 359 774 q 606 685 538 774 q 669 484 669 603 l 669 -278 m 495 1039 l 293 823 l 195 823 l 317 1039 l 495 1039 "},"Θ":{"x_min":0,"x_max":993,"ha":1092,"o":"m 497 -29 q 133 127 272 -29 q 0 505 0 277 q 133 883 0 733 q 497 1040 272 1040 q 861 883 722 1040 q 993 505 993 733 q 861 127 993 277 q 497 -29 722 -29 m 497 154 q 711 266 631 154 q 782 506 782 367 q 712 746 782 648 q 497 858 634 858 q 281 746 361 858 q 211 506 211 648 q 280 266 211 365 q 497 154 359 154 m 676 430 l 316 430 l 316 593 l 676 593 l 676 430 "},"®":{"x_min":3,"x_max":1007,"ha":1104,"o":"m 507 -6 q 129 153 269 -6 q 3 506 3 298 q 127 857 3 713 q 502 1017 266 1017 q 880 855 740 1017 q 1007 502 1007 711 q 882 152 1007 295 q 507 -6 743 -6 m 502 934 q 184 800 302 934 q 79 505 79 680 q 184 210 79 331 q 501 76 302 76 q 819 210 701 76 q 925 507 925 331 q 820 800 925 682 q 502 934 704 934 m 782 190 l 639 190 q 627 225 632 202 q 623 285 623 248 l 623 326 q 603 411 623 384 q 527 439 584 439 l 388 439 l 388 190 l 257 190 l 257 829 l 566 829 q 709 787 654 829 q 772 654 772 740 q 746 559 772 604 q 675 497 720 514 q 735 451 714 483 q 756 341 756 419 l 756 299 q 760 244 756 265 q 782 212 764 223 l 782 190 m 546 718 l 388 718 l 388 552 l 541 552 q 612 572 584 552 q 641 635 641 593 q 614 695 641 672 q 546 718 587 718 "},"~":{"x_min":0,"x_max":851,"ha":949,"o":"m 851 968 q 795 750 851 831 q 599 656 730 656 q 406 744 506 656 q 259 832 305 832 q 162 775 193 832 q 139 656 139 730 l 0 656 q 58 871 0 787 q 251 968 124 968 q 442 879 341 968 q 596 791 544 791 q 691 849 663 791 q 712 968 712 892 l 851 968 "},"Ε":{"x_min":0,"x_max":761.546875,"ha":824,"o":"m 761 0 l 0 0 l 0 1012 l 735 1012 l 735 836 l 206 836 l 206 621 l 690 621 l 690 446 l 206 446 l 206 186 l 761 186 l 761 0 "},"³":{"x_min":0,"x_max":467,"ha":564,"o":"m 467 555 q 393 413 467 466 q 229 365 325 365 q 70 413 134 365 q 0 565 0 467 l 123 565 q 163 484 131 512 q 229 461 190 461 q 299 486 269 461 q 329 553 329 512 q 281 627 329 607 q 187 641 248 641 l 187 722 q 268 737 237 722 q 312 804 312 758 q 285 859 312 837 q 224 882 259 882 q 165 858 189 882 q 135 783 140 834 l 12 783 q 86 930 20 878 q 230 976 145 976 q 379 931 314 976 q 444 813 444 887 q 423 744 444 773 q 365 695 402 716 q 439 640 412 676 q 467 555 467 605 "},"[":{"x_min":0,"x_max":347.21875,"ha":444,"o":"m 347 -300 l 0 -300 l 0 1013 l 347 1013 l 347 866 l 188 866 l 188 -154 l 347 -154 l 347 -300 "},"L":{"x_min":0,"x_max":704.171875,"ha":763,"o":"m 704 0 l 0 0 l 0 1013 l 208 1013 l 208 186 l 704 186 l 704 0 "},"σ":{"x_min":0,"x_max":851.3125,"ha":940,"o":"m 851 594 l 712 594 q 761 369 761 485 q 658 83 761 191 q 379 -25 555 -25 q 104 87 208 -25 q 0 372 0 200 q 103 659 0 544 q 378 775 207 775 q 464 762 407 775 q 549 750 521 750 l 851 750 l 851 594 m 379 142 q 515 216 466 142 q 557 373 557 280 q 515 530 557 465 q 379 608 465 608 q 244 530 293 608 q 203 373 203 465 q 244 218 203 283 q 379 142 293 142 "},"ζ":{"x_min":0,"x_max":622,"ha":701,"o":"m 622 -32 q 604 -158 622 -98 q 551 -278 587 -218 l 373 -278 q 426 -180 406 -229 q 446 -80 446 -131 q 421 -22 446 -37 q 354 -8 397 -8 q 316 -9 341 -8 q 280 -11 291 -11 q 75 69 150 -11 q 0 283 0 150 q 87 596 0 437 q 291 856 162 730 l 47 856 l 47 1013 l 592 1013 l 592 904 q 317 660 422 800 q 197 318 197 497 q 306 141 197 169 q 510 123 408 131 q 622 -32 622 102 "},"θ":{"x_min":0,"x_max":714,"ha":817,"o":"m 357 1022 q 633 833 534 1022 q 714 486 714 679 q 634 148 714 288 q 354 -25 536 -25 q 79 147 175 -25 q 0 481 0 288 q 79 831 0 679 q 357 1022 177 1022 m 510 590 q 475 763 510 687 q 351 862 430 862 q 233 763 272 862 q 204 590 204 689 l 510 590 m 510 440 l 204 440 q 233 251 204 337 q 355 131 274 131 q 478 248 434 131 q 510 440 510 337 "},"Ο":{"x_min":0,"x_max":995,"ha":1092,"o":"m 497 -29 q 133 127 272 -29 q 0 505 0 277 q 132 883 0 733 q 497 1040 270 1040 q 861 883 722 1040 q 995 505 995 733 q 862 127 995 277 q 497 -29 724 -29 m 497 154 q 711 266 632 154 q 781 506 781 365 q 711 745 781 647 q 497 857 632 857 q 283 747 361 857 q 213 506 213 647 q 282 266 213 365 q 497 154 361 154 "},"Γ":{"x_min":0,"x_max":703.84375,"ha":742,"o":"m 703 836 l 208 836 l 208 0 l 0 0 l 0 1012 l 703 1012 l 703 836 "}," ":{"x_min":0,"x_max":0,"ha":375},"%":{"x_min":0,"x_max":1111,"ha":1213,"o":"m 861 484 q 1048 404 979 484 q 1111 228 1111 332 q 1048 51 1111 123 q 859 -29 979 -29 q 672 50 740 -29 q 610 227 610 122 q 672 403 610 331 q 861 484 741 484 m 861 120 q 939 151 911 120 q 967 226 967 183 q 942 299 967 270 q 861 333 912 333 q 783 301 811 333 q 756 226 756 269 q 783 151 756 182 q 861 120 810 120 m 904 984 l 316 -28 l 205 -29 l 793 983 l 904 984 m 250 984 q 436 904 366 984 q 499 730 499 832 q 436 552 499 626 q 248 472 366 472 q 62 552 132 472 q 0 728 0 624 q 62 903 0 831 q 250 984 132 984 m 249 835 q 169 801 198 835 q 140 725 140 768 q 167 652 140 683 q 247 621 195 621 q 327 654 298 621 q 357 730 357 687 q 329 803 357 772 q 249 835 301 835 "},"P":{"x_min":0,"x_max":771,"ha":838,"o":"m 208 361 l 208 0 l 0 0 l 0 1013 l 450 1013 q 682 919 593 1013 q 771 682 771 826 q 687 452 771 544 q 466 361 604 361 l 208 361 m 421 837 l 208 837 l 208 544 l 410 544 q 525 579 480 544 q 571 683 571 615 q 527 792 571 747 q 421 837 484 837 "},"Έ":{"x_min":0,"x_max":1172.546875,"ha":1235,"o":"m 1172 0 l 411 0 l 411 1012 l 1146 1012 l 1146 836 l 617 836 l 617 621 l 1101 621 l 1101 446 l 617 446 l 617 186 l 1172 186 l 1172 0 m 313 1035 l 98 780 l 0 780 l 136 1035 l 313 1035 "},"Ώ":{"x_min":0.4375,"x_max":1189.546875,"ha":1289,"o":"m 1189 0 l 770 0 l 770 199 q 897 369 849 263 q 945 580 945 474 q 879 778 945 706 q 685 855 810 855 q 492 773 561 855 q 424 563 424 691 q 470 360 424 458 q 600 199 517 262 l 600 0 l 180 0 l 180 176 l 383 176 q 258 355 304 251 q 213 569 213 459 q 346 908 213 776 q 686 1040 479 1040 q 1025 912 892 1040 q 1158 578 1158 785 q 1112 362 1158 467 q 986 176 1067 256 l 1189 176 l 1189 0 m 314 1092 l 99 837 l 0 837 l 136 1092 l 314 1092 "},"_":{"x_min":61.109375,"x_max":766.671875,"ha":828,"o":"m 766 -333 l 61 -333 l 61 -190 l 766 -190 l 766 -333 "},"Ϊ":{"x_min":-56,"x_max":342,"ha":503,"o":"m 342 1046 l 186 1046 l 186 1215 l 342 1215 l 342 1046 m 101 1046 l -56 1046 l -56 1215 l 101 1215 l 101 1046 m 249 0 l 41 0 l 41 1012 l 249 1012 l 249 0 "},"+":{"x_min":43,"x_max":784,"ha":828,"o":"m 784 353 l 483 353 l 483 0 l 343 0 l 343 353 l 43 353 l 43 489 l 343 489 l 343 840 l 483 840 l 483 489 l 784 489 l 784 353 "},"½":{"x_min":0,"x_max":1090,"ha":1188,"o":"m 1090 380 q 992 230 1090 301 q 779 101 886 165 q 822 94 784 95 q 924 93 859 93 l 951 93 l 973 93 l 992 93 l 1009 93 q 1046 93 1027 93 q 1085 93 1066 93 l 1085 0 l 650 0 l 654 38 q 815 233 665 137 q 965 376 965 330 q 936 436 965 412 q 869 461 908 461 q 806 435 831 461 q 774 354 780 409 l 659 354 q 724 505 659 451 q 870 554 783 554 q 1024 506 958 554 q 1090 380 1090 459 m 868 998 l 268 -28 l 154 -27 l 757 999 l 868 998 m 272 422 l 147 422 l 147 799 l 0 799 l 0 875 q 126 900 91 875 q 170 973 162 926 l 272 973 l 272 422 "},"Ρ":{"x_min":0,"x_max":771,"ha":838,"o":"m 208 361 l 208 0 l 0 0 l 0 1012 l 450 1012 q 682 919 593 1012 q 771 681 771 826 q 687 452 771 544 q 466 361 604 361 l 208 361 m 422 836 l 209 836 l 209 544 l 410 544 q 525 579 480 544 q 571 683 571 614 q 527 791 571 747 q 422 836 484 836 "},"\'":{"x_min":0,"x_max":192,"ha":289,"o":"m 192 834 q 137 692 192 751 q 0 626 82 632 l 0 697 q 101 830 101 726 l 0 830 l 0 1013 l 192 1013 l 192 834 "},"ª":{"x_min":0,"x_max":350,"ha":393,"o":"m 350 625 l 245 625 q 237 648 241 636 q 233 672 233 661 q 117 611 192 611 q 33 643 66 611 q 0 727 0 675 q 116 846 0 828 q 233 886 233 864 q 211 919 233 907 q 168 931 190 931 q 108 877 108 931 l 14 877 q 56 977 14 942 q 165 1013 98 1013 q 270 987 224 1013 q 329 903 329 955 l 329 694 q 332 661 329 675 q 350 641 336 648 l 350 625 m 233 774 l 233 809 q 151 786 180 796 q 97 733 97 768 q 111 700 97 712 q 149 689 126 689 q 210 713 187 689 q 233 774 233 737 "},"΅":{"x_min":57,"x_max":584,"ha":753,"o":"m 584 810 l 455 810 l 455 952 l 584 952 l 584 810 m 521 1064 l 305 810 l 207 810 l 343 1064 l 521 1064 m 186 810 l 57 810 l 57 952 l 186 952 l 186 810 "},"T":{"x_min":0,"x_max":809,"ha":894,"o":"m 809 831 l 509 831 l 509 0 l 299 0 l 299 831 l 0 831 l 0 1013 l 809 1013 l 809 831 "},"Φ":{"x_min":0,"x_max":949,"ha":1032,"o":"m 566 0 l 385 0 l 385 121 q 111 230 222 121 q 0 508 0 340 q 112 775 0 669 q 385 892 219 875 l 385 1013 l 566 1013 l 566 892 q 836 776 732 875 q 949 507 949 671 q 838 231 949 341 q 566 121 728 121 l 566 0 m 566 285 q 701 352 650 285 q 753 508 753 419 q 703 658 753 597 q 566 729 653 720 l 566 285 m 385 285 l 385 729 q 245 661 297 717 q 193 516 193 604 q 246 356 193 427 q 385 285 300 285 "},"j":{"x_min":-45.828125,"x_max":242,"ha":361,"o":"m 242 830 l 42 830 l 42 1013 l 242 1013 l 242 830 m 242 -119 q 180 -267 242 -221 q 20 -308 127 -308 l -45 -308 l -45 -140 l -24 -140 q 25 -130 8 -140 q 42 -88 42 -120 l 42 748 l 242 748 l 242 -119 "},"Σ":{"x_min":0,"x_max":772.21875,"ha":849,"o":"m 772 0 l 0 0 l 0 140 l 368 526 l 18 862 l 18 1012 l 740 1012 l 740 836 l 315 836 l 619 523 l 298 175 l 772 175 l 772 0 "},"›":{"x_min":36.109375,"x_max":792,"ha":828,"o":"m 792 352 l 36 17 l 36 168 l 594 420 l 36 672 l 36 823 l 792 487 l 792 352 "},"<":{"x_min":35.984375,"x_max":791.671875,"ha":828,"o":"m 791 17 l 36 352 l 35 487 l 791 823 l 791 672 l 229 421 l 791 168 l 791 17 "},"£":{"x_min":0,"x_max":716.546875,"ha":814,"o":"m 716 38 q 603 -9 658 5 q 502 -24 548 -24 q 398 -10 451 -24 q 239 25 266 25 q 161 12 200 25 q 77 -29 122 0 l 0 113 q 110 211 81 174 q 151 315 151 259 q 117 440 151 365 l 0 440 l 0 515 l 73 515 q 35 610 52 560 q 15 710 15 671 q 119 910 15 831 q 349 984 216 984 q 570 910 480 984 q 693 668 674 826 l 501 668 q 455 791 501 746 q 353 830 414 830 q 256 795 298 830 q 215 705 215 760 q 249 583 215 655 q 283 515 266 548 l 479 515 l 479 440 l 309 440 q 316 394 313 413 q 319 355 319 374 q 287 241 319 291 q 188 135 263 205 q 262 160 225 152 q 332 168 298 168 q 455 151 368 168 q 523 143 500 143 q 588 152 558 143 q 654 189 617 162 l 716 38 "},"t":{"x_min":0,"x_max":412,"ha":511,"o":"m 412 -6 q 349 -8 391 -6 q 287 -11 307 -11 q 137 38 177 -11 q 97 203 97 87 l 97 609 l 0 609 l 0 749 l 97 749 l 97 951 l 297 951 l 297 749 l 412 749 l 412 609 l 297 609 l 297 191 q 315 152 297 162 q 366 143 334 143 q 389 143 378 143 q 412 143 400 143 l 412 -6 "},"¬":{"x_min":0,"x_max":704,"ha":801,"o":"m 704 93 l 551 93 l 551 297 l 0 297 l 0 450 l 704 450 l 704 93 "},"λ":{"x_min":0,"x_max":701.390625,"ha":775,"o":"m 701 0 l 491 0 l 345 444 l 195 0 l 0 0 l 238 697 l 131 1013 l 334 1013 l 701 0 "},"W":{"x_min":0,"x_max":1291.671875,"ha":1399,"o":"m 1291 1013 l 1002 0 l 802 0 l 645 777 l 490 0 l 288 0 l 0 1013 l 215 1013 l 388 298 l 534 1012 l 757 1013 l 904 299 l 1076 1013 l 1291 1013 "},">":{"x_min":36.109375,"x_max":792,"ha":828,"o":"m 792 352 l 36 17 l 36 168 l 594 420 l 36 672 l 36 823 l 792 487 l 792 352 "},"v":{"x_min":0,"x_max":740.28125,"ha":828,"o":"m 740 749 l 473 0 l 266 0 l 0 749 l 222 749 l 373 211 l 529 749 l 740 749 "},"τ":{"x_min":0.28125,"x_max":618.734375,"ha":699,"o":"m 618 593 l 409 593 l 409 0 l 210 0 l 210 593 l 0 593 l 0 749 l 618 749 l 618 593 "},"ξ":{"x_min":0,"x_max":640,"ha":715,"o":"m 640 -14 q 619 -157 640 -84 q 563 -299 599 -230 l 399 -299 q 442 -194 433 -223 q 468 -85 468 -126 q 440 -25 468 -41 q 368 -10 412 -10 q 333 -11 355 -10 q 302 -13 311 -13 q 91 60 179 -13 q 0 259 0 138 q 56 426 0 354 q 201 530 109 493 q 106 594 144 553 q 65 699 65 642 q 94 787 65 747 q 169 856 123 828 l 22 856 l 22 1013 l 597 1013 l 597 856 l 497 857 q 345 840 398 857 q 257 736 257 812 q 366 614 257 642 q 552 602 416 602 l 552 446 l 513 446 q 313 425 379 446 q 199 284 199 389 q 312 162 199 184 q 524 136 418 148 q 640 -14 640 105 "},"&":{"x_min":-1,"x_max":910.109375,"ha":1007,"o":"m 910 -1 l 676 -1 l 607 83 q 291 -47 439 -47 q 50 100 135 -47 q -1 273 -1 190 q 51 431 -1 357 q 218 568 104 505 q 151 661 169 629 q 120 769 120 717 q 201 951 120 885 q 382 1013 276 1013 q 555 957 485 1013 q 635 789 635 894 q 584 644 635 709 q 468 539 548 597 l 615 359 q 664 527 654 440 l 844 527 q 725 223 824 359 l 910 -1 m 461 787 q 436 848 461 826 q 381 870 412 870 q 325 849 349 870 q 301 792 301 829 q 324 719 301 757 q 372 660 335 703 q 430 714 405 680 q 461 787 461 753 m 500 214 l 318 441 q 198 286 198 363 q 225 204 198 248 q 347 135 268 135 q 425 153 388 135 q 500 214 462 172 "},"Λ":{"x_min":0,"x_max":894.453125,"ha":974,"o":"m 894 0 l 666 0 l 447 757 l 225 0 l 0 0 l 344 1013 l 547 1013 l 894 0 "},"I":{"x_min":41,"x_max":249,"ha":365,"o":"m 249 0 l 41 0 l 41 1013 l 249 1013 l 249 0 "},"G":{"x_min":0,"x_max":971,"ha":1057,"o":"m 971 -1 l 829 -1 l 805 118 q 479 -29 670 -29 q 126 133 261 -29 q 0 509 0 286 q 130 884 0 737 q 493 1040 268 1040 q 790 948 659 1040 q 961 698 920 857 l 736 698 q 643 813 709 769 q 500 857 578 857 q 285 746 364 857 q 213 504 213 644 q 285 263 213 361 q 505 154 365 154 q 667 217 598 154 q 761 374 736 280 l 548 374 l 548 548 l 971 548 l 971 -1 "},"ΰ":{"x_min":0,"x_max":655,"ha":767,"o":"m 583 810 l 454 810 l 454 952 l 583 952 l 583 810 m 186 810 l 57 809 l 57 952 l 186 952 l 186 810 m 516 1039 l 315 823 l 216 823 l 338 1039 l 516 1039 m 655 417 q 567 55 655 146 q 326 -25 489 -25 q 59 97 137 -25 q 0 369 0 192 l 0 748 l 200 748 l 201 369 q 218 222 201 269 q 326 142 245 142 q 439 247 410 142 q 455 422 455 304 l 455 748 l 655 748 l 655 417 "},"`":{"x_min":0,"x_max":190,"ha":288,"o":"m 190 654 l 0 654 l 0 830 q 55 970 0 909 q 190 1040 110 1031 l 190 969 q 111 922 134 952 q 88 836 88 892 l 190 836 l 190 654 "},"·":{"x_min":0,"x_max":207,"ha":304,"o":"m 207 528 l 0 528 l 0 735 l 207 735 l 207 528 "},"Υ":{"x_min":-0.21875,"x_max":836.171875,"ha":914,"o":"m 836 1013 l 532 376 l 532 0 l 322 0 l 322 376 l 0 1013 l 208 1013 l 427 576 l 626 1013 l 836 1013 "},"r":{"x_min":0,"x_max":431.9375,"ha":513,"o":"m 431 564 q 269 536 320 564 q 200 395 200 498 l 200 0 l 0 0 l 0 748 l 183 748 l 183 618 q 285 731 224 694 q 431 768 345 768 l 431 564 "},"x":{"x_min":0,"x_max":738.890625,"ha":826,"o":"m 738 0 l 504 0 l 366 238 l 230 0 l 0 0 l 252 382 l 11 749 l 238 749 l 372 522 l 502 749 l 725 749 l 488 384 l 738 0 "},"μ":{"x_min":0,"x_max":647,"ha":754,"o":"m 647 0 l 477 0 l 477 68 q 411 9 448 30 q 330 -11 374 -11 q 261 3 295 -11 q 199 43 226 18 l 199 -278 l 0 -278 l 0 749 l 199 749 l 199 358 q 216 222 199 268 q 322 152 244 152 q 435 240 410 152 q 448 401 448 283 l 448 749 l 647 749 l 647 0 "},"h":{"x_min":0,"x_max":669,"ha":782,"o":"m 669 0 l 469 0 l 469 390 q 449 526 469 472 q 353 607 420 607 q 248 554 295 607 q 201 441 201 501 l 201 0 l 0 0 l 0 1013 l 201 1013 l 201 665 q 303 743 245 715 q 425 772 362 772 q 609 684 542 772 q 669 484 669 605 l 669 0 "},".":{"x_min":0,"x_max":206,"ha":303,"o":"m 206 0 l 0 0 l 0 207 l 206 207 l 206 0 "},"φ":{"x_min":-1,"x_max":921,"ha":990,"o":"m 542 -278 l 367 -278 l 367 -22 q 99 92 200 -22 q -1 376 -1 206 q 72 627 -1 520 q 288 769 151 742 l 288 581 q 222 495 243 550 q 202 378 202 439 q 240 228 202 291 q 367 145 285 157 l 367 776 l 515 776 q 807 667 694 776 q 921 379 921 558 q 815 93 921 209 q 542 -22 709 -22 l 542 -278 m 542 145 q 672 225 625 145 q 713 381 713 291 q 671 536 713 470 q 542 611 624 611 l 542 145 "},";":{"x_min":0,"x_max":208,"ha":306,"o":"m 208 528 l 0 528 l 0 735 l 208 735 l 208 528 m 208 6 q 152 -151 208 -89 q 0 -238 96 -212 l 0 -158 q 87 -100 61 -136 q 113 0 113 -65 l 0 0 l 0 207 l 208 207 l 208 6 "},"f":{"x_min":0,"x_max":424,"ha":525,"o":"m 424 609 l 300 609 l 300 0 l 107 0 l 107 609 l 0 609 l 0 749 l 107 749 q 145 949 107 894 q 328 1019 193 1019 l 424 1015 l 424 855 l 362 855 q 312 841 324 855 q 300 797 300 827 q 300 773 300 786 q 300 749 300 761 l 424 749 l 424 609 "},"“":{"x_min":0,"x_max":468,"ha":567,"o":"m 190 631 l 0 631 l 0 807 q 55 947 0 885 q 190 1017 110 1010 l 190 947 q 88 813 88 921 l 190 813 l 190 631 m 468 631 l 278 631 l 278 807 q 333 947 278 885 q 468 1017 388 1010 l 468 947 q 366 813 366 921 l 468 813 l 468 631 "},"A":{"x_min":0,"x_max":966.671875,"ha":1069,"o":"m 966 0 l 747 0 l 679 208 l 286 208 l 218 0 l 0 0 l 361 1013 l 600 1013 l 966 0 m 623 376 l 480 810 l 340 376 l 623 376 "},"‘":{"x_min":0,"x_max":190,"ha":289,"o":"m 190 631 l 0 631 l 0 807 q 55 947 0 885 q 190 1017 110 1010 l 190 947 q 88 813 88 921 l 190 813 l 190 631 "},"ϊ":{"x_min":-55,"x_max":337,"ha":389,"o":"m 337 810 l 208 810 l 208 952 l 337 952 l 337 810 m 74 810 l -55 810 l -55 952 l 74 952 l 74 810 m 242 0 l 42 0 l 42 748 l 242 748 l 242 0 "},"π":{"x_min":0.5,"x_max":838.890625,"ha":938,"o":"m 838 593 l 750 593 l 750 0 l 549 0 l 549 593 l 287 593 l 287 0 l 88 0 l 88 593 l 0 593 l 0 749 l 838 749 l 838 593 "},"ά":{"x_min":-1,"x_max":722,"ha":835,"o":"m 722 0 l 531 0 l 530 101 q 433 8 491 41 q 304 -25 375 -25 q 72 104 157 -25 q -1 372 -1 216 q 72 643 -1 530 q 308 775 158 775 q 433 744 375 775 q 528 656 491 713 l 528 749 l 722 749 l 722 0 m 361 601 q 233 527 277 601 q 196 375 196 464 q 232 224 196 288 q 358 144 277 144 q 487 217 441 144 q 528 370 528 281 q 489 523 528 457 q 361 601 443 601 m 579 1039 l 377 823 l 279 823 l 401 1039 l 579 1039 "},"O":{"x_min":0,"x_max":994,"ha":1094,"o":"m 497 -29 q 133 127 272 -29 q 0 505 0 277 q 131 883 0 733 q 497 1040 270 1040 q 860 883 721 1040 q 994 505 994 733 q 862 127 994 277 q 497 -29 723 -29 m 497 154 q 710 266 631 154 q 780 506 780 365 q 710 745 780 647 q 497 857 631 857 q 283 747 361 857 q 213 506 213 647 q 282 266 213 365 q 497 154 361 154 "},"n":{"x_min":0,"x_max":669,"ha":782,"o":"m 669 0 l 469 0 l 469 452 q 442 553 469 513 q 352 601 412 601 q 245 553 290 601 q 200 441 200 505 l 200 0 l 0 0 l 0 748 l 194 748 l 194 659 q 289 744 230 713 q 416 775 349 775 q 600 700 531 775 q 669 509 669 626 l 669 0 "},"l":{"x_min":41,"x_max":240,"ha":363,"o":"m 240 0 l 41 0 l 41 1013 l 240 1013 l 240 0 "},"¤":{"x_min":40.265625,"x_max":727.203125,"ha":825,"o":"m 727 792 l 594 659 q 620 552 620 609 q 598 459 620 504 l 725 331 l 620 224 l 491 352 q 382 331 443 331 q 273 352 322 331 l 144 224 l 40 330 l 167 459 q 147 552 147 501 q 172 658 147 608 l 40 794 l 147 898 l 283 759 q 383 776 330 776 q 482 759 434 776 l 620 898 l 727 792 m 383 644 q 308 617 334 644 q 283 551 283 590 q 309 489 283 517 q 381 462 335 462 q 456 488 430 462 q 482 554 482 515 q 455 616 482 588 q 383 644 429 644 "},"κ":{"x_min":0,"x_max":691.84375,"ha":779,"o":"m 691 0 l 479 0 l 284 343 l 196 252 l 196 0 l 0 0 l 0 749 l 196 749 l 196 490 l 440 749 l 677 749 l 416 479 l 691 0 "},"p":{"x_min":0,"x_max":722,"ha":824,"o":"m 415 -26 q 287 4 346 -26 q 192 92 228 34 l 192 -298 l 0 -298 l 0 750 l 192 750 l 192 647 q 289 740 230 706 q 416 775 347 775 q 649 645 566 775 q 722 375 722 534 q 649 106 722 218 q 415 -26 564 -26 m 363 603 q 232 529 278 603 q 192 375 192 465 q 230 222 192 286 q 360 146 276 146 q 487 221 441 146 q 526 371 526 285 q 488 523 526 458 q 363 603 443 603 "},"‡":{"x_min":0,"x_max":809,"ha":894,"o":"m 299 621 l 0 621 l 0 804 l 299 804 l 299 1011 l 509 1011 l 509 804 l 809 804 l 809 621 l 509 621 l 509 387 l 809 387 l 809 205 l 509 205 l 509 0 l 299 0 l 299 205 l 0 205 l 0 387 l 299 387 l 299 621 "},"ψ":{"x_min":0,"x_max":875,"ha":979,"o":"m 522 142 q 657 274 620 163 q 671 352 671 316 l 671 748 l 875 748 l 875 402 q 806 134 875 240 q 525 -22 719 -1 l 525 -278 l 349 -278 l 349 -22 q 65 135 152 -1 q 0 402 0 238 l 0 748 l 204 748 l 204 352 q 231 240 204 295 q 353 142 272 159 l 353 922 l 524 922 l 522 142 "},"η":{"x_min":0,"x_max":669,"ha":779,"o":"m 669 -278 l 469 -278 l 469 390 q 448 526 469 473 q 348 606 417 606 q 244 553 288 606 q 201 441 201 501 l 201 0 l 0 0 l 0 749 l 201 749 l 201 665 q 301 744 244 715 q 423 774 359 774 q 606 685 538 774 q 669 484 669 603 l 669 -278 "}}'),XM="bold",YM=1216,ZM=-100,$M="normal",JM={yMin:-333,xMin:-162,yMax:1216,xMax:1681},KM=1e3,QM={postscript_name:"Helvetiker-Bold",version_string:"Version 1.00 2004 initial release",vendor_url:"http://www.magenta.gr",full_font_name:"Helvetiker Bold",font_family_name:"Helvetiker",copyright:"Copyright (c) Magenta ltd, 2004.",description:"",trademark:"",designer:"",designer_url:"",unique_font_identifier:"Magenta ltd:Helvetiker Bold:22-10-104",license_url:"http://www.ellak.gr/fonts/MgOpen/license.html",license_description:`Copyright (c) 2004 by MAGENTA Ltd. All Rights Reserved.\r
\r
Permission is hereby granted, free of charge, to any person obtaining a copy of the fonts accompanying this license ("Fonts") and associated documentation files (the "Font Software"), to reproduce and distribute the Font Software, including without limitation the rights to use, copy, merge, publish, distribute, and/or sell copies of the Font Software, and to permit persons to whom the Font Software is furnished to do so, subject to the following conditions: \r
\r
The above copyright and this permission notice shall be included in all copies of one or more of the Font Software typefaces.\r
\r
The Font Software may be modified, altered, or added to, and in particular the designs of glyphs or characters in the Fonts may be modified and additional glyphs or characters may be added to the Fonts, only if the fonts are renamed to names not containing the word "MgOpen", or if the modifications are accepted for inclusion in the Font Software itself by the each appointed Administrator.\r
\r
This License becomes null and void to the extent applicable to Fonts or Font Software that has been modified and is distributed under the "MgOpen" name.\r
\r
The Font Software may be sold as part of a larger software package but no copy of one or more of the Font Software typefaces may be sold by itself. \r
\r
THE FONT SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO ANY WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT OF COPYRIGHT, PATENT, TRADEMARK, OR OTHER RIGHT. IN NO EVENT SHALL MAGENTA OR PERSONS OR BODIES IN CHARGE OF ADMINISTRATION AND MAINTENANCE OF THE FONT SOFTWARE BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, INCLUDING ANY GENERAL, SPECIAL, INDIRECT, INCIDENTAL, OR CONSEQUENTIAL DAMAGES, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF THE USE OR INABILITY TO USE THE FONT SOFTWARE OR FROM OTHER DEALINGS IN THE FONT SOFTWARE.`,manufacturer_name:"Magenta ltd",font_sub_family_name:"Bold"},jM=-334,ey="Helvetiker",ty=1549,ny=50,iy={glyphs:WM,cssFontWeight:XM,ascender:YM,underlinePosition:ZM,cssFontStyle:$M,boundingBox:JM,resolution:KM,original_font_information:QM,descender:jM,familyName:ey,lineHeight:ty,underlineThickness:ny};function ar(r){if(r===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return r}function _m(r,e){r.prototype=Object.create(e.prototype),r.prototype.constructor=r,r.__proto__=e}var di={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},ga={duration:.5,overwrite:!1,delay:0},Gf,vn,Ot,bi=1e8,At=1/bi,Uh=Math.PI*2,ry=Uh/4,sy=0,gm=Math.sqrt,ay=Math.cos,oy=Math.sin,mn=function(e){return typeof e=="string"},Wt=function(e){return typeof e=="function"},mr=function(e){return typeof e=="number"},Vf=function(e){return typeof e>"u"},ji=function(e){return typeof e=="object"},Jn=function(e){return e!==!1},Hf=function(){return typeof window<"u"},Tl=function(e){return Wt(e)||mn(e)},xm=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},Dn=Array.isArray,ly=/random\([^)]+\)/g,cy=/,\s*/g,kp=/(?:-?\.?\d|\.)+/gi,vm=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,ea=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,Eu=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,Sm=/[+-]=-?[.\d]+/,uy=/[^,'"\[\]\s]+/gi,hy=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,qt,zi,Oh,Wf,pi={},dc={},Mm,ym=function(e){return(dc=xa(e,pi))&&ei},Xf=function(e,t){return console.warn("Invalid property",e,"set to",t,"Missing plugin? gsap.registerPlugin()")},Lo=function(e,t){return!t&&console.warn(e)},bm=function(e,t){return e&&(pi[e]=t)&&dc&&(dc[e]=t)||pi},Io=function(){return 0},fy={suppressEvents:!0,isStart:!0,kill:!1},Xl={suppressEvents:!0,kill:!1},dy={suppressEvents:!0},Yf={},Nr=[],Fh={},Tm,si={},wu={},Gp=30,Yl=[],Zf="",$f=function(e){var t=e[0],n,i;if(ji(t)||Wt(t)||(e=[e]),!(n=(t._gsap||{}).harness)){for(i=Yl.length;i--&&!Yl[i].targetTest(t););n=Yl[i]}for(i=e.length;i--;)e[i]&&(e[i]._gsap||(e[i]._gsap=new Zm(e[i],n)))||e.splice(i,1);return e},os=function(e){return e._gsap||$f(Ti(e))[0]._gsap},Em=function(e,t,n){return(n=e[t])&&Wt(n)?e[t]():Vf(n)&&e.getAttribute&&e.getAttribute(t)||n},Kn=function(e,t){return(e=e.split(",")).forEach(t)||e},Zt=function(e){return Math.round(e*1e5)/1e5||0},Ft=function(e){return Math.round(e*1e7)/1e7||0},sa=function(e,t){var n=t.charAt(0),i=parseFloat(t.substr(2));return e=parseFloat(e),n==="+"?e+i:n==="-"?e-i:n==="*"?e*i:e/i},py=function(e,t){for(var n=t.length,i=0;e.indexOf(t[i])<0&&++i<n;);return i<n},pc=function(){var e=Nr.length,t=Nr.slice(0),n,i;for(Fh={},Nr.length=0,n=0;n<e;n++)i=t[n],i&&i._lazy&&(i.render(i._lazy[0],i._lazy[1],!0)._lazy=0)},Jf=function(e){return!!(e._initted||e._startAt||e.add)},wm=function(e,t,n,i){Nr.length&&!vn&&pc(),e.render(t,n,!!(vn&&t<0&&Jf(e))),Nr.length&&!vn&&pc()},Am=function(e){var t=parseFloat(e);return(t||t===0)&&(e+"").match(uy).length<2?t:mn(e)?e.trim():e},Cm=function(e){return e},mi=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},my=function(e){return function(t,n){for(var i in n)i in t||i==="duration"&&e||i==="ease"||(t[i]=n[i])}},xa=function(e,t){for(var n in t)e[n]=t[n];return e},Vp=function r(e,t){for(var n in t)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(e[n]=ji(t[n])?r(e[n]||(e[n]={}),t[n]):t[n]);return e},mc=function(e,t){var n={},i;for(i in e)i in t||(n[i]=e[i]);return n},oo=function(e){var t=e.parent||qt,n=e.keyframes?my(Dn(e.keyframes)):mi;if(Jn(e.inherit))for(;t;)n(e,t.vars.defaults),t=t.parent||t._dp;return e},_y=function(e,t){for(var n=e.length,i=n===t.length;i&&n--&&e[n]===t[n];);return n<0},Rm=function(e,t,n,i,s){var a=e[i],o;if(s)for(o=t[s];a&&a[s]>o;)a=a._prev;return a?(t._next=a._next,a._next=t):(t._next=e[n],e[n]=t),t._next?t._next._prev=t:e[i]=t,t._prev=a,t.parent=t._dp=e,t},Ic=function(e,t,n,i){n===void 0&&(n="_first"),i===void 0&&(i="_last");var s=t._prev,a=t._next;s?s._next=a:e[n]===t&&(e[n]=a),a?a._prev=s:e[i]===t&&(e[i]=s),t._next=t._prev=t.parent=null},Br=function(e,t){e.parent&&(!t||e.parent.autoRemoveChildren)&&e.parent.remove&&e.parent.remove(e),e._act=0},ls=function(e,t){if(e&&(!t||t._end>e._dur||t._start<0))for(var n=e;n;)n._dirty=1,n=n.parent;return e},gy=function(e){for(var t=e.parent;t&&t.parent;)t._dirty=1,t.totalDuration(),t=t.parent;return e},qh=function(e,t,n,i){return e._startAt&&(vn?e._startAt.revert(Xl):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(t,!0,i))},xy=function r(e){return!e||e._ts&&r(e.parent)},Hp=function(e){return e._repeat?va(e._tTime,e=e.duration()+e._rDelay)*e:0},va=function(e,t){var n=Math.floor(e=Ft(e/t));return e&&n===e?n-1:n},_c=function(e,t){return(e-t._start)*t._ts+(t._ts>=0?0:t._dirty?t.totalDuration():t._tDur)},Nc=function(e){return e._end=Ft(e._start+(e._tDur/Math.abs(e._ts||e._rts||At)||0))},Uc=function(e,t){var n=e._dp;return n&&n.smoothChildTiming&&e._ts&&(e._start=Ft(n._time-(e._ts>0?t/e._ts:((e._dirty?e.totalDuration():e._tDur)-t)/-e._ts)),Nc(e),n._dirty||ls(n,e)),e},Pm=function(e,t){var n;if((t._time||!t._dur&&t._initted||t._start<e._time&&(t._dur||!t.add))&&(n=_c(e.rawTime(),t),(!t._dur||Ho(0,t.totalDuration(),n)-t._tTime>At)&&t.render(n,!0)),ls(e,t)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(n=e;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;e._zTime=-At}},Vi=function(e,t,n,i){return t.parent&&Br(t),t._start=Ft((mr(n)?n:n||e!==qt?Si(e,n,t):e._time)+t._delay),t._end=Ft(t._start+(t.totalDuration()/Math.abs(t.timeScale())||0)),Rm(e,t,"_first","_last",e._sort?"_start":0),Bh(t)||(e._recent=t),i||Pm(e,t),e._ts<0&&Uc(e,e._tTime),e},Dm=function(e,t){return(pi.ScrollTrigger||Xf("scrollTrigger",t))&&pi.ScrollTrigger.create(t,e)},Lm=function(e,t,n,i,s){if(Qf(e,t,s),!e._initted)return 1;if(!n&&e._pt&&!vn&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&Tm!==ci.frame)return Nr.push(e),e._lazy=[s,i],1},vy=function r(e){var t=e.parent;return t&&t._ts&&t._initted&&!t._lock&&(t.rawTime()<0||r(t))},Bh=function(e){var t=e.data;return t==="isFromStart"||t==="isStart"},Sy=function(e,t,n,i){var s=e.ratio,a=t<0||!t&&(!e._start&&vy(e)&&!(!e._initted&&Bh(e))||(e._ts<0||e._dp._ts<0)&&!Bh(e))?0:1,o=e._rDelay,l=0,c,u,d;if(o&&e._repeat&&(l=Ho(0,e._tDur,t),u=va(l,o),e._yoyo&&u&1&&(a=1-a),u!==va(e._tTime,o)&&(s=1-a,e.vars.repeatRefresh&&e._initted&&e.invalidate())),a!==s||vn||i||e._zTime===At||!t&&e._zTime){if(!e._initted&&Lm(e,t,i,n,l))return;for(d=e._zTime,e._zTime=t||(n?At:0),n||(n=t&&!d),e.ratio=a,e._from&&(a=1-a),e._time=0,e._tTime=l,c=e._pt;c;)c.r(a,c.d),c=c._next;t<0&&qh(e,t,n,!0),e._onUpdate&&!n&&hi(e,"onUpdate"),l&&e._repeat&&!n&&e.parent&&hi(e,"onRepeat"),(t>=e._tDur||t<0)&&e.ratio===a&&(a&&Br(e,1),!n&&!vn&&(hi(e,a?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=t)},My=function(e,t,n){var i;if(n>t)for(i=e._first;i&&i._start<=n;){if(i.data==="isPause"&&i._start>t)return i;i=i._next}else for(i=e._last;i&&i._start>=n;){if(i.data==="isPause"&&i._start<t)return i;i=i._prev}},Sa=function(e,t,n,i){var s=e._repeat,a=Ft(t)||0,o=e._tTime/e._tDur;return o&&!i&&(e._time*=a/e._dur),e._dur=a,e._tDur=s?s<0?1e10:Ft(a*(s+1)+e._rDelay*s):a,o>0&&!i&&Uc(e,e._tTime=e._tDur*o),e.parent&&Nc(e),n||ls(e.parent,e),e},Wp=function(e){return e instanceof Gn?ls(e):Sa(e,e._dur)},yy={_start:0,endTime:Io,totalDuration:Io},Si=function r(e,t,n){var i=e.labels,s=e._recent||yy,a=e.duration()>=bi?s.endTime(!1):e._dur,o,l,c;return mn(t)&&(isNaN(t)||t in i)?(l=t.charAt(0),c=t.substr(-1)==="%",o=t.indexOf("="),l==="<"||l===">"?(o>=0&&(t=t.replace(/=/,"")),(l==="<"?s._start:s.endTime(s._repeat>=0))+(parseFloat(t.substr(1))||0)*(c?(o<0?s:n).totalDuration()/100:1)):o<0?(t in i||(i[t]=a),i[t]):(l=parseFloat(t.charAt(o-1)+t.substr(o+1)),c&&n&&(l=l/100*(Dn(n)?n[0]:n).totalDuration()),o>1?r(e,t.substr(0,o-1),n)+l:a+l)):t==null?a:+t},lo=function(e,t,n){var i=mr(t[1]),s=(i?2:1)+(e<2?0:1),a=t[s],o,l;if(i&&(a.duration=t[1]),a.parent=n,e){for(o=a,l=n;l&&!("immediateRender"in o);)o=l.vars.defaults||{},l=Jn(l.vars.inherit)&&l.parent;a.immediateRender=Jn(o.immediateRender),e<2?a.runBackwards=1:a.startAt=t[s-1]}return new tn(t[0],a,t[s+1])},Xr=function(e,t){return e||e===0?t(e):t},Ho=function(e,t,n){return n<e?e:n>t?t:n},An=function(e,t){return!mn(e)||!(t=hy.exec(e))?"":t[1]},by=function(e,t,n){return Xr(n,function(i){return Ho(e,t,i)})},zh=[].slice,Im=function(e,t){return e&&ji(e)&&"length"in e&&(!t&&!e.length||e.length-1 in e&&ji(e[0]))&&!e.nodeType&&e!==zi},Ty=function(e,t,n){return n===void 0&&(n=[]),e.forEach(function(i){var s;return mn(i)&&!t||Im(i,1)?(s=n).push.apply(s,Ti(i)):n.push(i)})||n},Ti=function(e,t,n){return Ot&&!t&&Ot.selector?Ot.selector(e):mn(e)&&!n&&(Oh||!Ma())?zh.call((t||Wf).querySelectorAll(e),0):Dn(e)?Ty(e,n):Im(e)?zh.call(e,0):e?[e]:[]},kh=function(e){return e=Ti(e)[0]||Lo("Invalid scope")||{},function(t){var n=e.current||e.nativeElement||e;return Ti(t,n.querySelectorAll?n:n===e?Lo("Invalid scope")||Wf.createElement("div"):e)}},Nm=function(e){return e.sort(function(){return .5-Math.random()})},Um=function(e){if(Wt(e))return e;var t=ji(e)?e:{each:e},n=cs(t.ease),i=t.from||0,s=parseFloat(t.base)||0,a={},o=i>0&&i<1,l=isNaN(i)||o,c=t.axis,u=i,d=i;return mn(i)?u=d={center:.5,edges:.5,end:1}[i]||0:!o&&l&&(u=i[0],d=i[1]),function(h,f,_){var g=(_||t).length,p=a[g],m,M,w,v,y,T,A,x,b;if(!p){if(b=t.grid==="auto"?0:(t.grid||[1,bi])[1],!b){for(A=-bi;A<(A=_[b++].getBoundingClientRect().left)&&b<g;);b<g&&b--}for(p=a[g]=[],m=l?Math.min(b,g)*u-.5:i%b,M=b===bi?0:l?g*d/b-.5:i/b|0,A=0,x=bi,T=0;T<g;T++)w=T%b-m,v=M-(T/b|0),p[T]=y=c?Math.abs(c==="y"?v:w):gm(w*w+v*v),y>A&&(A=y),y<x&&(x=y);i==="random"&&Nm(p),p.max=A-x,p.min=x,p.v=g=(parseFloat(t.amount)||parseFloat(t.each)*(b>g?g-1:c?c==="y"?g/b:b:Math.max(b,g/b))||0)*(i==="edges"?-1:1),p.b=g<0?s-g:s,p.u=An(t.amount||t.each)||0,n=n&&g<0?Wm(n):n}return g=(p[h]-p.min)/p.max||0,Ft(p.b+(n?n(g):g)*p.v)+p.u}},Gh=function(e){var t=Math.pow(10,((e+"").split(".")[1]||"").length);return function(n){var i=Ft(Math.round(parseFloat(n)/e)*e*t);return(i-i%1)/t+(mr(n)?0:An(n))}},Om=function(e,t){var n=Dn(e),i,s;return!n&&ji(e)&&(i=n=e.radius||bi,e.values?(e=Ti(e.values),(s=!mr(e[0]))&&(i*=i)):e=Gh(e.increment)),Xr(t,n?Wt(e)?function(a){return s=e(a),Math.abs(s-a)<=i?s:a}:function(a){for(var o=parseFloat(s?a.x:a),l=parseFloat(s?a.y:0),c=bi,u=0,d=e.length,h,f;d--;)s?(h=e[d].x-o,f=e[d].y-l,h=h*h+f*f):h=Math.abs(e[d]-o),h<c&&(c=h,u=d);return u=!i||c<=i?e[u]:a,s||u===a||mr(a)?u:u+An(a)}:Gh(e))},Fm=function(e,t,n,i){return Xr(Dn(e)?!t:n===!0?!!(n=0):!i,function(){return Dn(e)?e[~~(Math.random()*e.length)]:(n=n||1e-5)&&(i=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((e-n/2+Math.random()*(t-e+n*.99))/n)*n*i)/i})},Ey=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(i){return t.reduce(function(s,a){return a(s)},i)}},wy=function(e,t){return function(n){return e(parseFloat(n))+(t||An(n))}},Ay=function(e,t,n){return Bm(e,t,0,1,n)},qm=function(e,t,n){return Xr(n,function(i){return e[~~t(i)]})},Cy=function r(e,t,n){var i=t-e;return Dn(e)?qm(e,r(0,e.length),t):Xr(n,function(s){return(i+(s-e)%i)%i+e})},Ry=function r(e,t,n){var i=t-e,s=i*2;return Dn(e)?qm(e,r(0,e.length-1),t):Xr(n,function(a){return a=(s+(a-e)%s)%s||0,e+(a>i?s-a:a)})},No=function(e){return e.replace(ly,function(t){var n=t.indexOf("[")+1,i=t.substring(n||7,n?t.indexOf("]"):t.length-1).split(cy);return Fm(n?i:+i[0],n?0:+i[1],+i[2]||1e-5)})},Bm=function(e,t,n,i,s){var a=t-e,o=i-n;return Xr(s,function(l){return n+((l-e)/a*o||0)})},Py=function r(e,t,n,i){var s=isNaN(e+t)?0:function(f){return(1-f)*e+f*t};if(!s){var a=mn(e),o={},l,c,u,d,h;if(n===!0&&(i=1)&&(n=null),a)e={p:e},t={p:t};else if(Dn(e)&&!Dn(t)){for(u=[],d=e.length,h=d-2,c=1;c<d;c++)u.push(r(e[c-1],e[c]));d--,s=function(_){_*=d;var g=Math.min(h,~~_);return u[g](_-g)},n=t}else i||(e=xa(Dn(e)?[]:{},e));if(!u){for(l in t)Kf.call(o,e,l,"get",t[l]);s=function(_){return td(_,o)||(a?e.p:e)}}}return Xr(n,s)},Xp=function(e,t,n){var i=e.labels,s=bi,a,o,l;for(a in i)o=i[a]-t,o<0==!!n&&o&&s>(o=Math.abs(o))&&(l=a,s=o);return l},hi=function(e,t,n){var i=e.vars,s=i[t],a=Ot,o=e._ctx,l,c,u;if(s)return l=i[t+"Params"],c=i.callbackScope||e,n&&Nr.length&&pc(),o&&(Ot=o),u=l?s.apply(c,l):s.call(c),Ot=a,u},$a=function(e){return Br(e),e.scrollTrigger&&e.scrollTrigger.kill(!!vn),e.progress()<1&&hi(e,"onInterrupt"),e},ta,zm=[],km=function(e){if(e)if(e=!e.name&&e.default||e,Hf()||e.headless){var t=e.name,n=Wt(e),i=t&&!n&&e.init?function(){this._props=[]}:e,s={init:Io,render:td,add:Kf,kill:Xy,modifier:Wy,rawVars:0},a={targetTest:0,get:0,getSetter:ed,aliases:{},register:0};if(Ma(),e!==i){if(si[t])return;mi(i,mi(mc(e,s),a)),xa(i.prototype,xa(s,mc(e,a))),si[i.prop=t]=i,e.targetTest&&(Yl.push(i),Yf[t]=1),t=(t==="css"?"CSS":t.charAt(0).toUpperCase()+t.substr(1))+"Plugin"}bm(t,i),e.register&&e.register(ei,i,Qn)}else zm.push(e)},wt=255,Ja={aqua:[0,wt,wt],lime:[0,wt,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,wt],navy:[0,0,128],white:[wt,wt,wt],olive:[128,128,0],yellow:[wt,wt,0],orange:[wt,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[wt,0,0],pink:[wt,192,203],cyan:[0,wt,wt],transparent:[wt,wt,wt,0]},Au=function(e,t,n){return e+=e<0?1:e>1?-1:0,(e*6<1?t+(n-t)*e*6:e<.5?n:e*3<2?t+(n-t)*(2/3-e)*6:t)*wt+.5|0},Gm=function(e,t,n){var i=e?mr(e)?[e>>16,e>>8&wt,e&wt]:0:Ja.black,s,a,o,l,c,u,d,h,f,_;if(!i){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),Ja[e])i=Ja[e];else if(e.charAt(0)==="#"){if(e.length<6&&(s=e.charAt(1),a=e.charAt(2),o=e.charAt(3),e="#"+s+s+a+a+o+o+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return i=parseInt(e.substr(1,6),16),[i>>16,i>>8&wt,i&wt,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),i=[e>>16,e>>8&wt,e&wt]}else if(e.substr(0,3)==="hsl"){if(i=_=e.match(kp),!t)l=+i[0]%360/360,c=+i[1]/100,u=+i[2]/100,a=u<=.5?u*(c+1):u+c-u*c,s=u*2-a,i.length>3&&(i[3]*=1),i[0]=Au(l+1/3,s,a),i[1]=Au(l,s,a),i[2]=Au(l-1/3,s,a);else if(~e.indexOf("="))return i=e.match(vm),n&&i.length<4&&(i[3]=1),i}else i=e.match(kp)||Ja.transparent;i=i.map(Number)}return t&&!_&&(s=i[0]/wt,a=i[1]/wt,o=i[2]/wt,d=Math.max(s,a,o),h=Math.min(s,a,o),u=(d+h)/2,d===h?l=c=0:(f=d-h,c=u>.5?f/(2-d-h):f/(d+h),l=d===s?(a-o)/f+(a<o?6:0):d===a?(o-s)/f+2:(s-a)/f+4,l*=60),i[0]=~~(l+.5),i[1]=~~(c*100+.5),i[2]=~~(u*100+.5)),n&&i.length<4&&(i[3]=1),i},Vm=function(e){var t=[],n=[],i=-1;return e.split(Ur).forEach(function(s){var a=s.match(ea)||[];t.push.apply(t,a),n.push(i+=a.length+1)}),t.c=n,t},Yp=function(e,t,n){var i="",s=(e+i).match(Ur),a=t?"hsla(":"rgba(",o=0,l,c,u,d;if(!s)return e;if(s=s.map(function(h){return(h=Gm(h,t,1))&&a+(t?h[0]+","+h[1]+"%,"+h[2]+"%,"+h[3]:h.join(","))+")"}),n&&(u=Vm(e),l=n.c,l.join(i)!==u.c.join(i)))for(c=e.replace(Ur,"1").split(ea),d=c.length-1;o<d;o++)i+=c[o]+(~l.indexOf(o)?s.shift()||a+"0,0,0,0)":(u.length?u:s.length?s:n).shift());if(!c)for(c=e.split(Ur),d=c.length-1;o<d;o++)i+=c[o]+s[o];return i+c[d]},Ur=(function(){var r="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in Ja)r+="|"+e+"\\b";return new RegExp(r+")","gi")})(),Dy=/hsl[a]?\(/,Hm=function(e){var t=e.join(" "),n;if(Ur.lastIndex=0,Ur.test(t))return n=Dy.test(t),e[1]=Yp(e[1],n),e[0]=Yp(e[0],n,Vm(e[1])),!0},Uo,ci=(function(){var r=Date.now,e=500,t=33,n=r(),i=n,s=1e3/240,a=s,o=[],l,c,u,d,h,f,_=function g(p){var m=r()-i,M=p===!0,w,v,y,T;if((m>e||m<0)&&(n+=m-t),i+=m,y=i-n,w=y-a,(w>0||M)&&(T=++d.frame,h=y-d.time*1e3,d.time=y=y/1e3,a+=w+(w>=s?4:s-w),v=1),M||(l=c(g)),v)for(f=0;f<o.length;f++)o[f](y,h,T,p)};return d={time:0,frame:0,tick:function(){_(!0)},deltaRatio:function(p){return h/(1e3/(p||60))},wake:function(){Mm&&(!Oh&&Hf()&&(zi=Oh=window,Wf=zi.document||{},pi.gsap=ei,(zi.gsapVersions||(zi.gsapVersions=[])).push(ei.version),ym(dc||zi.GreenSockGlobals||!zi.gsap&&zi||{}),zm.forEach(km)),u=typeof requestAnimationFrame<"u"&&requestAnimationFrame,l&&d.sleep(),c=u||function(p){return setTimeout(p,a-d.time*1e3+1|0)},Uo=1,_(2))},sleep:function(){(u?cancelAnimationFrame:clearTimeout)(l),Uo=0,c=Io},lagSmoothing:function(p,m){e=p||1/0,t=Math.min(m||33,e)},fps:function(p){s=1e3/(p||240),a=d.time*1e3+s},add:function(p,m,M){var w=m?function(v,y,T,A){p(v,y,T,A),d.remove(w)}:p;return d.remove(p),o[M?"unshift":"push"](w),Ma(),w},remove:function(p,m){~(m=o.indexOf(p))&&o.splice(m,1)&&f>=m&&f--},_listeners:o},d})(),Ma=function(){return!Uo&&ci.wake()},pt={},Ly=/^[\d.\-M][\d.\-,\s]/,Iy=/["']/g,Ny=function(e){for(var t={},n=e.substr(1,e.length-3).split(":"),i=n[0],s=1,a=n.length,o,l,c;s<a;s++)l=n[s],o=s!==a-1?l.lastIndexOf(","):l.length,c=l.substr(0,o),t[i]=isNaN(c)?c.replace(Iy,"").trim():+c,i=l.substr(o+1).trim();return t},Uy=function(e){var t=e.indexOf("(")+1,n=e.indexOf(")"),i=e.indexOf("(",t);return e.substring(t,~i&&i<n?e.indexOf(")",n+1):n)},Oy=function(e){var t=(e+"").split("("),n=pt[t[0]];return n&&t.length>1&&n.config?n.config.apply(null,~e.indexOf("{")?[Ny(t[1])]:Uy(e).split(",").map(Am)):pt._CE&&Ly.test(e)?pt._CE("",e):n},Wm=function(e){return function(t){return 1-e(1-t)}},Xm=function r(e,t){for(var n=e._first,i;n;)n instanceof Gn?r(n,t):n.vars.yoyoEase&&(!n._yoyo||!n._repeat)&&n._yoyo!==t&&(n.timeline?r(n.timeline,t):(i=n._ease,n._ease=n._yEase,n._yEase=i,n._yoyo=t)),n=n._next},cs=function(e,t){return e&&(Wt(e)?e:pt[e]||Oy(e))||t},As=function(e,t,n,i){n===void 0&&(n=function(l){return 1-t(1-l)}),i===void 0&&(i=function(l){return l<.5?t(l*2)/2:1-t((1-l)*2)/2});var s={easeIn:t,easeOut:n,easeInOut:i},a;return Kn(e,function(o){pt[o]=pi[o]=s,pt[a=o.toLowerCase()]=n;for(var l in s)pt[a+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=pt[o+"."+l]=s[l]}),s},Ym=function(e){return function(t){return t<.5?(1-e(1-t*2))/2:.5+e((t-.5)*2)/2}},Cu=function r(e,t,n){var i=t>=1?t:1,s=(n||(e?.3:.45))/(t<1?t:1),a=s/Uh*(Math.asin(1/i)||0),o=function(u){return u===1?1:i*Math.pow(2,-10*u)*oy((u-a)*s)+1},l=e==="out"?o:e==="in"?function(c){return 1-o(1-c)}:Ym(o);return s=Uh/s,l.config=function(c,u){return r(e,c,u)},l},Ru=function r(e,t){t===void 0&&(t=1.70158);var n=function(a){return a?--a*a*((t+1)*a+t)+1:0},i=e==="out"?n:e==="in"?function(s){return 1-n(1-s)}:Ym(n);return i.config=function(s){return r(e,s)},i};Kn("Linear,Quad,Cubic,Quart,Quint,Strong",function(r,e){var t=e<5?e+1:e;As(r+",Power"+(t-1),e?function(n){return Math.pow(n,t)}:function(n){return n},function(n){return 1-Math.pow(1-n,t)},function(n){return n<.5?Math.pow(n*2,t)/2:1-Math.pow((1-n)*2,t)/2})});pt.Linear.easeNone=pt.none=pt.Linear.easeIn;As("Elastic",Cu("in"),Cu("out"),Cu());(function(r,e){var t=1/e,n=2*t,i=2.5*t,s=function(o){return o<t?r*o*o:o<n?r*Math.pow(o-1.5/e,2)+.75:o<i?r*(o-=2.25/e)*o+.9375:r*Math.pow(o-2.625/e,2)+.984375};As("Bounce",function(a){return 1-s(1-a)},s)})(7.5625,2.75);As("Expo",function(r){return Math.pow(2,10*(r-1))*r+r*r*r*r*r*r*(1-r)});As("Circ",function(r){return-(gm(1-r*r)-1)});As("Sine",function(r){return r===1?1:-ay(r*ry)+1});As("Back",Ru("in"),Ru("out"),Ru());pt.SteppedEase=pt.steps=pi.SteppedEase={config:function(e,t){e===void 0&&(e=1);var n=1/e,i=e+(t?0:1),s=t?1:0,a=1-At;return function(o){return((i*Ho(0,a,o)|0)+s)*n}}};ga.ease=pt["quad.out"];Kn("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(r){return Zf+=r+","+r+"Params,"});var Zm=function(e,t){this.id=sy++,e._gsap=this,this.target=e,this.harness=t,this.get=t?t.get:Em,this.set=t?t.getSetter:ed},Oo=(function(){function r(t){this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat===1/0?-2:t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,Sa(this,+t.duration,1,1),this.data=t.data,Ot&&(this._ctx=Ot,Ot.data.push(this)),Uo||ci.wake()}var e=r.prototype;return e.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},e.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},e.totalDuration=function(n){return arguments.length?(this._dirty=0,Sa(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(n,i){if(Ma(),!arguments.length)return this._tTime;var s=this._dp;if(s&&s.smoothChildTiming&&this._ts){for(Uc(this,n),!s._dp||s.parent||Pm(s,this);s&&s.parent;)s.parent._time!==s._start+(s._ts>=0?s._tTime/s._ts:(s.totalDuration()-s._tTime)/-s._ts)&&s.totalTime(s._tTime,!0),s=s.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&Vi(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!i||this._initted&&Math.abs(this._zTime)===At||!this._initted&&this._dur&&n||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),wm(this,n,i)),this},e.time=function(n,i){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+Hp(this))%(this._dur+this._rDelay)||(n?this._dur:0),i):this._time},e.totalProgress=function(n,i){return arguments.length?this.totalTime(this.totalDuration()*n,i):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},e.progress=function(n,i){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+Hp(this),i):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},e.iteration=function(n,i){var s=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*s,i):this._repeat?va(this._tTime,s)+1:1},e.timeScale=function(n,i){if(!arguments.length)return this._rts===-At?0:this._rts;if(this._rts===n)return this;var s=this.parent&&this._ts?_c(this.parent._time,this):this._tTime;return this._rts=+n||0,this._ts=this._ps||n===-At?0:this._rts,this.totalTime(Ho(-Math.abs(this._delay),this.totalDuration(),s),i!==!1),Nc(this),gy(this)},e.paused=function(n){return arguments.length?(this._ps!==n&&(this._ps=n,n?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(Ma(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==At&&(this._tTime-=At)))),this):this._ps},e.startTime=function(n){if(arguments.length){this._start=Ft(n);var i=this.parent||this._dp;return i&&(i._sort||!this.parent)&&Vi(i,this,this._start-this._delay),this}return this._start},e.endTime=function(n){return this._start+(Jn(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(n){var i=this.parent||this._dp;return i?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?_c(i.rawTime(n),this):this._tTime:this._tTime},e.revert=function(n){n===void 0&&(n=dy);var i=vn;return vn=n,Jf(this)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),vn=i,this},e.globalTime=function(n){for(var i=this,s=arguments.length?n:i.rawTime();i;)s=i._start+s/(Math.abs(i._ts)||1),i=i._dp;return!this.parent&&this._sat?this._sat.globalTime(n):s},e.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,Wp(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(n){if(arguments.length){var i=this._time;return this._rDelay=n,Wp(this),i?this.time(i):this}return this._rDelay},e.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},e.seek=function(n,i){return this.totalTime(Si(this,n),Jn(i))},e.restart=function(n,i){return this.play().totalTime(n?-this._delay:0,Jn(i)),this._dur||(this._zTime=-At),this},e.play=function(n,i){return n!=null&&this.seek(n,i),this.reversed(!1).paused(!1)},e.reverse=function(n,i){return n!=null&&this.seek(n||this.totalDuration(),i),this.reversed(!0).paused(!1)},e.pause=function(n,i){return n!=null&&this.seek(n,i),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-At:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-At,this},e.isActive=function(){var n=this.parent||this._dp,i=this._start,s;return!!(!n||this._ts&&this._initted&&n.isActive()&&(s=n.rawTime(!0))>=i&&s<this.endTime(!0)-At)},e.eventCallback=function(n,i,s){var a=this.vars;return arguments.length>1?(i?(a[n]=i,s&&(a[n+"Params"]=s),n==="onUpdate"&&(this._onUpdate=i)):delete a[n],this):a[n]},e.then=function(n){var i=this,s=i._prom;return new Promise(function(a){var o=Wt(n)?n:Cm,l=function(){var u=i.then;i.then=null,s&&s(),Wt(o)&&(o=o(i))&&(o.then||o===i)&&(i.then=u),a(o),i.then=u};i._initted&&i.totalProgress()===1&&i._ts>=0||!i._tTime&&i._ts<0?l():i._prom=l})},e.kill=function(){$a(this)},r})();mi(Oo.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-At,_prom:0,_ps:!1,_rts:1});var Gn=(function(r){_m(e,r);function e(n,i){var s;return n===void 0&&(n={}),s=r.call(this,n)||this,s.labels={},s.smoothChildTiming=!!n.smoothChildTiming,s.autoRemoveChildren=!!n.autoRemoveChildren,s._sort=Jn(n.sortChildren),qt&&Vi(n.parent||qt,ar(s),i),n.reversed&&s.reverse(),n.paused&&s.paused(!0),n.scrollTrigger&&Dm(ar(s),n.scrollTrigger),s}var t=e.prototype;return t.to=function(i,s,a){return lo(0,arguments,this),this},t.from=function(i,s,a){return lo(1,arguments,this),this},t.fromTo=function(i,s,a,o){return lo(2,arguments,this),this},t.set=function(i,s,a){return s.duration=0,s.parent=this,oo(s).repeatDelay||(s.repeat=0),s.immediateRender=!!s.immediateRender,new tn(i,s,Si(this,a),1),this},t.call=function(i,s,a){return Vi(this,tn.delayedCall(0,i,s),a)},t.staggerTo=function(i,s,a,o,l,c,u){return a.duration=s,a.stagger=a.stagger||o,a.onComplete=c,a.onCompleteParams=u,a.parent=this,new tn(i,a,Si(this,l)),this},t.staggerFrom=function(i,s,a,o,l,c,u){return a.runBackwards=1,oo(a).immediateRender=Jn(a.immediateRender),this.staggerTo(i,s,a,o,l,c,u)},t.staggerFromTo=function(i,s,a,o,l,c,u,d){return o.startAt=a,oo(o).immediateRender=Jn(o.immediateRender),this.staggerTo(i,s,o,l,c,u,d)},t.render=function(i,s,a){var o=this._time,l=this._dirty?this.totalDuration():this._tDur,c=this._dur,u=i<=0?0:Ft(i),d=this._zTime<0!=i<0&&(this._initted||!c),h,f,_,g,p,m,M,w,v,y,T,A;if(this!==qt&&u>l&&i>=0&&(u=l),u!==this._tTime||a||d){if(o!==this._time&&c&&(u+=this._time-o,i+=this._time-o),h=u,v=this._start,w=this._ts,m=!w,d&&(c||(o=this._zTime),(i||!s)&&(this._zTime=i)),this._repeat){if(T=this._yoyo,p=c+this._rDelay,this._repeat<-1&&i<0)return this.totalTime(p*100+i,s,a);if(h=Ft(u%p),u===l?(g=this._repeat,h=c):(y=Ft(u/p),g=~~y,g&&g===y&&(h=c,g--),h>c&&(h=c)),y=va(this._tTime,p),!o&&this._tTime&&y!==g&&this._tTime-y*p-this._dur<=0&&(y=g),T&&g&1&&(h=c-h,A=1),g!==y&&!this._lock){var x=T&&y&1,b=x===(T&&g&1);if(g<y&&(x=!x),o=x?0:u%c?c:u,this._lock=1,this.render(o||(A?0:Ft(g*p)),s,!c)._lock=0,this._tTime=u,!s&&this.parent&&hi(this,"onRepeat"),this.vars.repeatRefresh&&!A&&(this.invalidate()._lock=1,y=g),o&&o!==this._time||m!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,l=this._tDur,b&&(this._lock=2,o=x?c:-1e-4,this.render(o,!0),this.vars.repeatRefresh&&!A&&this.invalidate()),this._lock=0,!this._ts&&!m)return this;Xm(this,A)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(M=My(this,Ft(o),Ft(h)),M&&(u-=h-(h=M._start))),this._tTime=u,this._time=h,this._act=!w,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=i,o=0),!o&&u&&c&&!s&&!y&&(hi(this,"onStart"),this._tTime!==u))return this;if(h>=o&&i>=0)for(f=this._first;f;){if(_=f._next,(f._act||h>=f._start)&&f._ts&&M!==f){if(f.parent!==this)return this.render(i,s,a);if(f.render(f._ts>0?(h-f._start)*f._ts:(f._dirty?f.totalDuration():f._tDur)+(h-f._start)*f._ts,s,a),h!==this._time||!this._ts&&!m){M=0,_&&(u+=this._zTime=-At);break}}f=_}else{f=this._last;for(var C=i<0?i:h;f;){if(_=f._prev,(f._act||C<=f._end)&&f._ts&&M!==f){if(f.parent!==this)return this.render(i,s,a);if(f.render(f._ts>0?(C-f._start)*f._ts:(f._dirty?f.totalDuration():f._tDur)+(C-f._start)*f._ts,s,a||vn&&Jf(f)),h!==this._time||!this._ts&&!m){M=0,_&&(u+=this._zTime=C?-At:At);break}}f=_}}if(M&&!s&&(this.pause(),M.render(h>=o?0:-At)._zTime=h>=o?1:-1,this._ts))return this._start=v,Nc(this),this.render(i,s,a);this._onUpdate&&!s&&hi(this,"onUpdate",!0),(u===l&&this._tTime>=this.totalDuration()||!u&&o)&&(v===this._start||Math.abs(w)!==Math.abs(this._ts))&&(this._lock||((i||!c)&&(u===l&&this._ts>0||!u&&this._ts<0)&&Br(this,1),!s&&!(i<0&&!o)&&(u||o||!l)&&(hi(this,u===l&&i>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(u<l&&this.timeScale()>0)&&this._prom())))}return this},t.add=function(i,s){var a=this;if(mr(s)||(s=Si(this,s,i)),!(i instanceof Oo)){if(Dn(i))return i.forEach(function(o){return a.add(o,s)}),this;if(mn(i))return this.addLabel(i,s);if(Wt(i))i=tn.delayedCall(0,i);else return this}return this!==i?Vi(this,i,s):this},t.getChildren=function(i,s,a,o){i===void 0&&(i=!0),s===void 0&&(s=!0),a===void 0&&(a=!0),o===void 0&&(o=-bi);for(var l=[],c=this._first;c;)c._start>=o&&(c instanceof tn?s&&l.push(c):(a&&l.push(c),i&&l.push.apply(l,c.getChildren(!0,s,a)))),c=c._next;return l},t.getById=function(i){for(var s=this.getChildren(1,1,1),a=s.length;a--;)if(s[a].vars.id===i)return s[a]},t.remove=function(i){return mn(i)?this.removeLabel(i):Wt(i)?this.killTweensOf(i):(i.parent===this&&Ic(this,i),i===this._recent&&(this._recent=this._last),ls(this))},t.totalTime=function(i,s){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=Ft(ci.time-(this._ts>0?i/this._ts:(this.totalDuration()-i)/-this._ts))),r.prototype.totalTime.call(this,i,s),this._forcing=0,this):this._tTime},t.addLabel=function(i,s){return this.labels[i]=Si(this,s),this},t.removeLabel=function(i){return delete this.labels[i],this},t.addPause=function(i,s,a){var o=tn.delayedCall(0,s||Io,a);return o.data="isPause",this._hasPause=1,Vi(this,o,Si(this,i))},t.removePause=function(i){var s=this._first;for(i=Si(this,i);s;)s._start===i&&s.data==="isPause"&&Br(s),s=s._next},t.killTweensOf=function(i,s,a){for(var o=this.getTweensOf(i,a),l=o.length;l--;)Cr!==o[l]&&o[l].kill(i,s);return this},t.getTweensOf=function(i,s){for(var a=[],o=Ti(i),l=this._first,c=mr(s),u;l;)l instanceof tn?py(l._targets,o)&&(c?(!Cr||l._initted&&l._ts)&&l.globalTime(0)<=s&&l.globalTime(l.totalDuration())>s:!s||l.isActive())&&a.push(l):(u=l.getTweensOf(o,s)).length&&a.push.apply(a,u),l=l._next;return a},t.tweenTo=function(i,s){s=s||{};var a=this,o=Si(a,i),l=s,c=l.startAt,u=l.onStart,d=l.onStartParams,h=l.immediateRender,f,_=tn.to(a,mi({ease:s.ease||"none",lazy:!1,immediateRender:!1,time:o,overwrite:"auto",duration:s.duration||Math.abs((o-(c&&"time"in c?c.time:a._time))/a.timeScale())||At,onStart:function(){if(a.pause(),!f){var p=s.duration||Math.abs((o-(c&&"time"in c?c.time:a._time))/a.timeScale());_._dur!==p&&Sa(_,p,0,1).render(_._time,!0,!0),f=1}u&&u.apply(_,d||[])}},s));return h?_.render(0):_},t.tweenFromTo=function(i,s,a){return this.tweenTo(s,mi({startAt:{time:Si(this,i)}},a))},t.recent=function(){return this._recent},t.nextLabel=function(i){return i===void 0&&(i=this._time),Xp(this,Si(this,i))},t.previousLabel=function(i){return i===void 0&&(i=this._time),Xp(this,Si(this,i),1)},t.currentLabel=function(i){return arguments.length?this.seek(i,!0):this.previousLabel(this._time+At)},t.shiftChildren=function(i,s,a){a===void 0&&(a=0);var o=this._first,l=this.labels,c;for(i=Ft(i);o;)o._start>=a&&(o._start+=i,o._end+=i),o=o._next;if(s)for(c in l)l[c]>=a&&(l[c]+=i);return ls(this)},t.invalidate=function(i){var s=this._first;for(this._lock=0;s;)s.invalidate(i),s=s._next;return r.prototype.invalidate.call(this,i)},t.clear=function(i){i===void 0&&(i=!0);for(var s=this._first,a;s;)a=s._next,this.remove(s),s=a;return this._dp&&(this._time=this._tTime=this._pTime=0),i&&(this.labels={}),ls(this)},t.totalDuration=function(i){var s=0,a=this,o=a._last,l=bi,c,u,d;if(arguments.length)return a.timeScale((a._repeat<0?a.duration():a.totalDuration())/(a.reversed()?-i:i));if(a._dirty){for(d=a.parent;o;)c=o._prev,o._dirty&&o.totalDuration(),u=o._start,u>l&&a._sort&&o._ts&&!a._lock?(a._lock=1,Vi(a,o,u-o._delay,1)._lock=0):l=u,u<0&&o._ts&&(s-=u,(!d&&!a._dp||d&&d.smoothChildTiming)&&(a._start+=Ft(u/a._ts),a._time-=u,a._tTime-=u),a.shiftChildren(-u,!1,-1/0),l=0),o._end>s&&o._ts&&(s=o._end),o=c;Sa(a,a===qt&&a._time>s?a._time:s,1,1),a._dirty=0}return a._tDur},e.updateRoot=function(i){if(qt._ts&&(wm(qt,_c(i,qt)),Tm=ci.frame),ci.frame>=Gp){Gp+=di.autoSleep||120;var s=qt._first;if((!s||!s._ts)&&di.autoSleep&&ci._listeners.length<2){for(;s&&!s._ts;)s=s._next;s||ci.sleep()}}},e})(Oo);mi(Gn.prototype,{_lock:0,_hasPause:0,_forcing:0});var Fy=function(e,t,n,i,s,a,o){var l=new Qn(this._pt,e,t,0,1,e1,null,s),c=0,u=0,d,h,f,_,g,p,m,M;for(l.b=n,l.e=i,n+="",i+="",(m=~i.indexOf("random("))&&(i=No(i)),a&&(M=[n,i],a(M,e,t),n=M[0],i=M[1]),h=n.match(Eu)||[];d=Eu.exec(i);)_=d[0],g=i.substring(c,d.index),f?f=(f+1)%5:g.substr(-5)==="rgba("&&(f=1),_!==h[u++]&&(p=parseFloat(h[u-1])||0,l._pt={_next:l._pt,p:g||u===1?g:",",s:p,c:_.charAt(1)==="="?sa(p,_)-p:parseFloat(_)-p,m:f&&f<4?Math.round:0},c=Eu.lastIndex);return l.c=c<i.length?i.substring(c,i.length):"",l.fp=o,(Sm.test(i)||m)&&(l.e=0),this._pt=l,l},Kf=function(e,t,n,i,s,a,o,l,c,u){Wt(i)&&(i=i(s||0,e,a));var d=e[t],h=n!=="get"?n:Wt(d)?c?e[t.indexOf("set")||!Wt(e["get"+t.substr(3)])?t:"get"+t.substr(3)](c):e[t]():d,f=Wt(d)?c?Gy:Qm:jf,_;if(mn(i)&&(~i.indexOf("random(")&&(i=No(i)),i.charAt(1)==="="&&(_=sa(h,i)+(An(h)||0),(_||_===0)&&(i=_))),!u||h!==i||Vh)return!isNaN(h*i)&&i!==""?(_=new Qn(this._pt,e,t,+h||0,i-(h||0),typeof d=="boolean"?Hy:jm,0,f),c&&(_.fp=c),o&&_.modifier(o,this,e),this._pt=_):(!d&&!(t in e)&&Xf(t,i),Fy.call(this,e,t,h,i,f,l||di.stringFilter,c))},qy=function(e,t,n,i,s){if(Wt(e)&&(e=co(e,s,t,n,i)),!ji(e)||e.style&&e.nodeType||Dn(e)||xm(e))return mn(e)?co(e,s,t,n,i):e;var a={},o;for(o in e)a[o]=co(e[o],s,t,n,i);return a},$m=function(e,t,n,i,s,a){var o,l,c,u;if(si[e]&&(o=new si[e]).init(s,o.rawVars?t[e]:qy(t[e],i,s,a,n),n,i,a)!==!1&&(n._pt=l=new Qn(n._pt,s,e,0,1,o.render,o,0,o.priority),n!==ta))for(c=n._ptLookup[n._targets.indexOf(s)],u=o._props.length;u--;)c[o._props[u]]=l;return o},Cr,Vh,Qf=function r(e,t,n){var i=e.vars,s=i.ease,a=i.startAt,o=i.immediateRender,l=i.lazy,c=i.onUpdate,u=i.runBackwards,d=i.yoyoEase,h=i.keyframes,f=i.autoRevert,_=e._dur,g=e._startAt,p=e._targets,m=e.parent,M=m&&m.data==="nested"?m.vars.targets:p,w=e._overwrite==="auto"&&!Gf,v=e.timeline,y,T,A,x,b,C,L,D,k,I,q,X,z;if(v&&(!h||!s)&&(s="none"),e._ease=cs(s,ga.ease),e._yEase=d?Wm(cs(d===!0?s:d,ga.ease)):0,d&&e._yoyo&&!e._repeat&&(d=e._yEase,e._yEase=e._ease,e._ease=d),e._from=!v&&!!i.runBackwards,!v||h&&!i.stagger){if(D=p[0]?os(p[0]).harness:0,X=D&&i[D.prop],y=mc(i,Yf),g&&(g._zTime<0&&g.progress(1),t<0&&u&&o&&!f?g.render(-1,!0):g.revert(u&&_?Xl:fy),g._lazy=0),a){if(Br(e._startAt=tn.set(p,mi({data:"isStart",overwrite:!1,parent:m,immediateRender:!0,lazy:!g&&Jn(l),startAt:null,delay:0,onUpdate:c&&function(){return hi(e,"onUpdate")},stagger:0},a))),e._startAt._dp=0,e._startAt._sat=e,t<0&&(vn||!o&&!f)&&e._startAt.revert(Xl),o&&_&&t<=0&&n<=0){t&&(e._zTime=t);return}}else if(u&&_&&!g){if(t&&(o=!1),A=mi({overwrite:!1,data:"isFromStart",lazy:o&&!g&&Jn(l),immediateRender:o,stagger:0,parent:m},y),X&&(A[D.prop]=X),Br(e._startAt=tn.set(p,A)),e._startAt._dp=0,e._startAt._sat=e,t<0&&(vn?e._startAt.revert(Xl):e._startAt.render(-1,!0)),e._zTime=t,!o)r(e._startAt,At,At);else if(!t)return}for(e._pt=e._ptCache=0,l=_&&Jn(l)||l&&!_,T=0;T<p.length;T++){if(b=p[T],L=b._gsap||$f(p)[T]._gsap,e._ptLookup[T]=I={},Fh[L.id]&&Nr.length&&pc(),q=M===p?T:M.indexOf(b),D&&(k=new D).init(b,X||y,e,q,M)!==!1&&(e._pt=x=new Qn(e._pt,b,k.name,0,1,k.render,k,0,k.priority),k._props.forEach(function(j){I[j]=x}),k.priority&&(C=1)),!D||X)for(A in y)si[A]&&(k=$m(A,y,e,q,b,M))?k.priority&&(C=1):I[A]=x=Kf.call(e,b,A,"get",y[A],q,M,0,i.stringFilter);e._op&&e._op[T]&&e.kill(b,e._op[T]),w&&e._pt&&(Cr=e,qt.killTweensOf(b,I,e.globalTime(t)),z=!e.parent,Cr=0),e._pt&&l&&(Fh[L.id]=1)}C&&t1(e),e._onInit&&e._onInit(e)}e._onUpdate=c,e._initted=(!e._op||e._pt)&&!z,h&&t<=0&&v.render(bi,!0,!0)},By=function(e,t,n,i,s,a,o,l){var c=(e._pt&&e._ptCache||(e._ptCache={}))[t],u,d,h,f;if(!c)for(c=e._ptCache[t]=[],h=e._ptLookup,f=e._targets.length;f--;){if(u=h[f][t],u&&u.d&&u.d._pt)for(u=u.d._pt;u&&u.p!==t&&u.fp!==t;)u=u._next;if(!u)return Vh=1,e.vars[t]="+=0",Qf(e,o),Vh=0,l?Lo(t+" not eligible for reset"):1;c.push(u)}for(f=c.length;f--;)d=c[f],u=d._pt||d,u.s=(i||i===0)&&!s?i:u.s+(i||0)+a*u.c,u.c=n-u.s,d.e&&(d.e=Zt(n)+An(d.e)),d.b&&(d.b=u.s+An(d.b))},zy=function(e,t){var n=e[0]?os(e[0]).harness:0,i=n&&n.aliases,s,a,o,l;if(!i)return t;s=xa({},t);for(a in i)if(a in s)for(l=i[a].split(","),o=l.length;o--;)s[l[o]]=s[a];return s},ky=function(e,t,n,i){var s=t.ease||i||"power1.inOut",a,o;if(Dn(t))o=n[e]||(n[e]=[]),t.forEach(function(l,c){return o.push({t:c/(t.length-1)*100,v:l,e:s})});else for(a in t)o=n[a]||(n[a]=[]),a==="ease"||o.push({t:parseFloat(e),v:t[a],e:s})},co=function(e,t,n,i,s){return Wt(e)?e.call(t,n,i,s):mn(e)&&~e.indexOf("random(")?No(e):e},Jm=Zf+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",Km={};Kn(Jm+",id,stagger,delay,duration,paused,scrollTrigger",function(r){return Km[r]=1});var tn=(function(r){_m(e,r);function e(n,i,s,a){var o;typeof i=="number"&&(s.duration=i,i=s,s=null),o=r.call(this,a?i:oo(i))||this;var l=o.vars,c=l.duration,u=l.delay,d=l.immediateRender,h=l.stagger,f=l.overwrite,_=l.keyframes,g=l.defaults,p=l.scrollTrigger,m=l.yoyoEase,M=i.parent||qt,w=(Dn(n)||xm(n)?mr(n[0]):"length"in i)?[n]:Ti(n),v,y,T,A,x,b,C,L;if(o._targets=w.length?$f(w):Lo("GSAP target "+n+" not found. https://gsap.com",!di.nullTargetWarn)||[],o._ptLookup=[],o._overwrite=f,_||h||Tl(c)||Tl(u)){if(i=o.vars,v=o.timeline=new Gn({data:"nested",defaults:g||{},targets:M&&M.data==="nested"?M.vars.targets:w}),v.kill(),v.parent=v._dp=ar(o),v._start=0,h||Tl(c)||Tl(u)){if(A=w.length,C=h&&Um(h),ji(h))for(x in h)~Jm.indexOf(x)&&(L||(L={}),L[x]=h[x]);for(y=0;y<A;y++)T=mc(i,Km),T.stagger=0,m&&(T.yoyoEase=m),L&&xa(T,L),b=w[y],T.duration=+co(c,ar(o),y,b,w),T.delay=(+co(u,ar(o),y,b,w)||0)-o._delay,!h&&A===1&&T.delay&&(o._delay=u=T.delay,o._start+=u,T.delay=0),v.to(b,T,C?C(y,b,w):0),v._ease=pt.none;v.duration()?c=u=0:o.timeline=0}else if(_){oo(mi(v.vars.defaults,{ease:"none"})),v._ease=cs(_.ease||i.ease||"none");var D=0,k,I,q;if(Dn(_))_.forEach(function(X){return v.to(w,X,">")}),v.duration();else{T={};for(x in _)x==="ease"||x==="easeEach"||ky(x,_[x],T,_.easeEach);for(x in T)for(k=T[x].sort(function(X,z){return X.t-z.t}),D=0,y=0;y<k.length;y++)I=k[y],q={ease:I.e,duration:(I.t-(y?k[y-1].t:0))/100*c},q[x]=I.v,v.to(w,q,D),D+=q.duration;v.duration()<c&&v.to({},{duration:c-v.duration()})}}c||o.duration(c=v.duration())}else o.timeline=0;return f===!0&&!Gf&&(Cr=ar(o),qt.killTweensOf(w),Cr=0),Vi(M,ar(o),s),i.reversed&&o.reverse(),i.paused&&o.paused(!0),(d||!c&&!_&&o._start===Ft(M._time)&&Jn(d)&&xy(ar(o))&&M.data!=="nested")&&(o._tTime=-At,o.render(Math.max(0,-u)||0)),p&&Dm(ar(o),p),o}var t=e.prototype;return t.render=function(i,s,a){var o=this._time,l=this._tDur,c=this._dur,u=i<0,d=i>l-At&&!u?l:i<At?0:i,h,f,_,g,p,m,M,w,v;if(!c)Sy(this,i,s,a);else if(d!==this._tTime||!i||a||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==u||this._lazy){if(h=d,w=this.timeline,this._repeat){if(g=c+this._rDelay,this._repeat<-1&&u)return this.totalTime(g*100+i,s,a);if(h=Ft(d%g),d===l?(_=this._repeat,h=c):(p=Ft(d/g),_=~~p,_&&_===p?(h=c,_--):h>c&&(h=c)),m=this._yoyo&&_&1,m&&(v=this._yEase,h=c-h),p=va(this._tTime,g),h===o&&!a&&this._initted&&_===p)return this._tTime=d,this;_!==p&&(w&&this._yEase&&Xm(w,m),this.vars.repeatRefresh&&!m&&!this._lock&&h!==g&&this._initted&&(this._lock=a=1,this.render(Ft(g*_),!0).invalidate()._lock=0))}if(!this._initted){if(Lm(this,u?i:h,a,s,d))return this._tTime=0,this;if(o!==this._time&&!(a&&this.vars.repeatRefresh&&_!==p))return this;if(c!==this._dur)return this.render(i,s,a)}if(this._tTime=d,this._time=h,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=M=(v||this._ease)(h/c),this._from&&(this.ratio=M=1-M),!o&&d&&!s&&!p&&(hi(this,"onStart"),this._tTime!==d))return this;for(f=this._pt;f;)f.r(M,f.d),f=f._next;w&&w.render(i<0?i:w._dur*w._ease(h/this._dur),s,a)||this._startAt&&(this._zTime=i),this._onUpdate&&!s&&(u&&qh(this,i,s,a),hi(this,"onUpdate")),this._repeat&&_!==p&&this.vars.onRepeat&&!s&&this.parent&&hi(this,"onRepeat"),(d===this._tDur||!d)&&this._tTime===d&&(u&&!this._onUpdate&&qh(this,i,!0,!0),(i||!c)&&(d===this._tDur&&this._ts>0||!d&&this._ts<0)&&Br(this,1),!s&&!(u&&!o)&&(d||o||m)&&(hi(this,d===l?"onComplete":"onReverseComplete",!0),this._prom&&!(d<l&&this.timeScale()>0)&&this._prom()))}return this},t.targets=function(){return this._targets},t.invalidate=function(i){return(!i||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(i),r.prototype.invalidate.call(this,i)},t.resetTo=function(i,s,a,o,l){Uo||ci.wake(),this._ts||this.play();var c=Math.min(this._dur,(this._dp._time-this._start)*this._ts),u;return this._initted||Qf(this,c),u=this._ease(c/this._dur),By(this,i,s,a,o,u,c,l)?this.resetTo(i,s,a,o,1):(Uc(this,0),this.parent||Rm(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},t.kill=function(i,s){if(s===void 0&&(s="all"),!i&&(!s||s==="all"))return this._lazy=this._pt=0,this.parent?$a(this):this.scrollTrigger&&this.scrollTrigger.kill(!!vn),this;if(this.timeline){var a=this.timeline.totalDuration();return this.timeline.killTweensOf(i,s,Cr&&Cr.vars.overwrite!==!0)._first||$a(this),this.parent&&a!==this.timeline.totalDuration()&&Sa(this,this._dur*this.timeline._tDur/a,0,1),this}var o=this._targets,l=i?Ti(i):o,c=this._ptLookup,u=this._pt,d,h,f,_,g,p,m;if((!s||s==="all")&&_y(o,l))return s==="all"&&(this._pt=0),$a(this);for(d=this._op=this._op||[],s!=="all"&&(mn(s)&&(g={},Kn(s,function(M){return g[M]=1}),s=g),s=zy(o,s)),m=o.length;m--;)if(~l.indexOf(o[m])){h=c[m],s==="all"?(d[m]=s,_=h,f={}):(f=d[m]=d[m]||{},_=s);for(g in _)p=h&&h[g],p&&((!("kill"in p.d)||p.d.kill(g)===!0)&&Ic(this,p,"_pt"),delete h[g]),f!=="all"&&(f[g]=1)}return this._initted&&!this._pt&&u&&$a(this),this},e.to=function(i,s){return new e(i,s,arguments[2])},e.from=function(i,s){return lo(1,arguments)},e.delayedCall=function(i,s,a,o){return new e(s,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:i,onComplete:s,onReverseComplete:s,onCompleteParams:a,onReverseCompleteParams:a,callbackScope:o})},e.fromTo=function(i,s,a){return lo(2,arguments)},e.set=function(i,s){return s.duration=0,s.repeatDelay||(s.repeat=0),new e(i,s)},e.killTweensOf=function(i,s,a){return qt.killTweensOf(i,s,a)},e})(Oo);mi(tn.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});Kn("staggerTo,staggerFrom,staggerFromTo",function(r){tn[r]=function(){var e=new Gn,t=zh.call(arguments,0);return t.splice(r==="staggerFromTo"?5:4,0,0),e[r].apply(e,t)}});var jf=function(e,t,n){return e[t]=n},Qm=function(e,t,n){return e[t](n)},Gy=function(e,t,n,i){return e[t](i.fp,n)},Vy=function(e,t,n){return e.setAttribute(t,n)},ed=function(e,t){return Wt(e[t])?Qm:Vf(e[t])&&e.setAttribute?Vy:jf},jm=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e6)/1e6,t)},Hy=function(e,t){return t.set(t.t,t.p,!!(t.s+t.c*e),t)},e1=function(e,t){var n=t._pt,i="";if(!e&&t.b)i=t.b;else if(e===1&&t.e)i=t.e;else{for(;n;)i=n.p+(n.m?n.m(n.s+n.c*e):Math.round((n.s+n.c*e)*1e4)/1e4)+i,n=n._next;i+=t.c}t.set(t.t,t.p,i,t)},td=function(e,t){for(var n=t._pt;n;)n.r(e,n.d),n=n._next},Wy=function(e,t,n,i){for(var s=this._pt,a;s;)a=s._next,s.p===i&&s.modifier(e,t,n),s=a},Xy=function(e){for(var t=this._pt,n,i;t;)i=t._next,t.p===e&&!t.op||t.op===e?Ic(this,t,"_pt"):t.dep||(n=1),t=i;return!n},Yy=function(e,t,n,i){i.mSet(e,t,i.m.call(i.tween,n,i.mt),i)},t1=function(e){for(var t=e._pt,n,i,s,a;t;){for(n=t._next,i=s;i&&i.pr>t.pr;)i=i._next;(t._prev=i?i._prev:a)?t._prev._next=t:s=t,(t._next=i)?i._prev=t:a=t,t=n}e._pt=s},Qn=(function(){function r(t,n,i,s,a,o,l,c,u){this.t=n,this.s=s,this.c=a,this.p=i,this.r=o||jm,this.d=l||this,this.set=c||jf,this.pr=u||0,this._next=t,t&&(t._prev=this)}var e=r.prototype;return e.modifier=function(n,i,s){this.mSet=this.mSet||this.set,this.set=Yy,this.m=n,this.mt=s,this.tween=i},r})();Kn(Zf+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(r){return Yf[r]=1});pi.TweenMax=pi.TweenLite=tn;pi.TimelineLite=pi.TimelineMax=Gn;qt=new Gn({sortChildren:!1,defaults:ga,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});di.stringFilter=Hm;var us=[],Zl={},Zy=[],Zp=0,$y=0,Pu=function(e){return(Zl[e]||Zy).map(function(t){return t()})},Hh=function(){var e=Date.now(),t=[];e-Zp>2&&(Pu("matchMediaInit"),us.forEach(function(n){var i=n.queries,s=n.conditions,a,o,l,c;for(o in i)a=zi.matchMedia(i[o]).matches,a&&(l=1),a!==s[o]&&(s[o]=a,c=1);c&&(n.revert(),l&&t.push(n))}),Pu("matchMediaRevert"),t.forEach(function(n){return n.onMatch(n,function(i){return n.add(null,i)})}),Zp=e,Pu("matchMedia"))},n1=(function(){function r(t,n){this.selector=n&&kh(n),this.data=[],this._r=[],this.isReverted=!1,this.id=$y++,t&&this.add(t)}var e=r.prototype;return e.add=function(n,i,s){Wt(n)&&(s=i,i=n,n=Wt);var a=this,o=function(){var c=Ot,u=a.selector,d;return c&&c!==a&&c.data.push(a),s&&(a.selector=kh(s)),Ot=a,d=i.apply(a,arguments),Wt(d)&&a._r.push(d),Ot=c,a.selector=u,a.isReverted=!1,d};return a.last=o,n===Wt?o(a,function(l){return a.add(null,l)}):n?a[n]=o:o},e.ignore=function(n){var i=Ot;Ot=null,n(this),Ot=i},e.getTweens=function(){var n=[];return this.data.forEach(function(i){return i instanceof r?n.push.apply(n,i.getTweens()):i instanceof tn&&!(i.parent&&i.parent.data==="nested")&&n.push(i)}),n},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(n,i){var s=this;if(n?(function(){for(var o=s.getTweens(),l=s.data.length,c;l--;)c=s.data[l],c.data==="isFlip"&&(c.revert(),c.getChildren(!0,!0,!1).forEach(function(u){return o.splice(o.indexOf(u),1)}));for(o.map(function(u){return{g:u._dur||u._delay||u._sat&&!u._sat.vars.immediateRender?u.globalTime(0):-1/0,t:u}}).sort(function(u,d){return d.g-u.g||-1/0}).forEach(function(u){return u.t.revert(n)}),l=s.data.length;l--;)c=s.data[l],c instanceof Gn?c.data!=="nested"&&(c.scrollTrigger&&c.scrollTrigger.revert(),c.kill()):!(c instanceof tn)&&c.revert&&c.revert(n);s._r.forEach(function(u){return u(n,s)}),s.isReverted=!0})():this.data.forEach(function(o){return o.kill&&o.kill()}),this.clear(),i)for(var a=us.length;a--;)us[a].id===this.id&&us.splice(a,1)},e.revert=function(n){this.kill(n||{})},r})(),Jy=(function(){function r(t){this.contexts=[],this.scope=t,Ot&&Ot.data.push(this)}var e=r.prototype;return e.add=function(n,i,s){ji(n)||(n={matches:n});var a=new n1(0,s||this.scope),o=a.conditions={},l,c,u;Ot&&!a.selector&&(a.selector=Ot.selector),this.contexts.push(a),i=a.add("onMatch",i),a.queries=n;for(c in n)c==="all"?u=1:(l=zi.matchMedia(n[c]),l&&(us.indexOf(a)<0&&us.push(a),(o[c]=l.matches)&&(u=1),l.addListener?l.addListener(Hh):l.addEventListener("change",Hh)));return u&&i(a,function(d){return a.add(null,d)}),this},e.revert=function(n){this.kill(n||{})},e.kill=function(n){this.contexts.forEach(function(i){return i.kill(n,!0)})},r})(),gc={registerPlugin:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];t.forEach(function(i){return km(i)})},timeline:function(e){return new Gn(e)},getTweensOf:function(e,t){return qt.getTweensOf(e,t)},getProperty:function(e,t,n,i){mn(e)&&(e=Ti(e)[0]);var s=os(e||{}).get,a=n?Cm:Am;return n==="native"&&(n=""),e&&(t?a((si[t]&&si[t].get||s)(e,t,n,i)):function(o,l,c){return a((si[o]&&si[o].get||s)(e,o,l,c))})},quickSetter:function(e,t,n){if(e=Ti(e),e.length>1){var i=e.map(function(u){return ei.quickSetter(u,t,n)}),s=i.length;return function(u){for(var d=s;d--;)i[d](u)}}e=e[0]||{};var a=si[t],o=os(e),l=o.harness&&(o.harness.aliases||{})[t]||t,c=a?function(u){var d=new a;ta._pt=0,d.init(e,n?u+n:u,ta,0,[e]),d.render(1,d),ta._pt&&td(1,ta)}:o.set(e,l);return a?c:function(u){return c(e,l,n?u+n:u,o,1)}},quickTo:function(e,t,n){var i,s=ei.to(e,mi((i={},i[t]="+=0.1",i.paused=!0,i.stagger=0,i),n||{})),a=function(l,c,u){return s.resetTo(t,l,c,u)};return a.tween=s,a},isTweening:function(e){return qt.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=cs(e.ease,ga.ease)),Vp(ga,e||{})},config:function(e){return Vp(di,e||{})},registerEffect:function(e){var t=e.name,n=e.effect,i=e.plugins,s=e.defaults,a=e.extendTimeline;(i||"").split(",").forEach(function(o){return o&&!si[o]&&!pi[o]&&Lo(t+" effect requires "+o+" plugin.")}),wu[t]=function(o,l,c){return n(Ti(o),mi(l||{},s),c)},a&&(Gn.prototype[t]=function(o,l,c){return this.add(wu[t](o,ji(l)?l:(c=l)&&{},this),c)})},registerEase:function(e,t){pt[e]=cs(t)},parseEase:function(e,t){return arguments.length?cs(e,t):pt},getById:function(e){return qt.getById(e)},exportRoot:function(e,t){e===void 0&&(e={});var n=new Gn(e),i,s;for(n.smoothChildTiming=Jn(e.smoothChildTiming),qt.remove(n),n._dp=0,n._time=n._tTime=qt._time,i=qt._first;i;)s=i._next,(t||!(!i._dur&&i instanceof tn&&i.vars.onComplete===i._targets[0]))&&Vi(n,i,i._start-i._delay),i=s;return Vi(qt,n,0),n},context:function(e,t){return e?new n1(e,t):Ot},matchMedia:function(e){return new Jy(e)},matchMediaRefresh:function(){return us.forEach(function(e){var t=e.conditions,n,i;for(i in t)t[i]&&(t[i]=!1,n=1);n&&e.revert()})||Hh()},addEventListener:function(e,t){var n=Zl[e]||(Zl[e]=[]);~n.indexOf(t)||n.push(t)},removeEventListener:function(e,t){var n=Zl[e],i=n&&n.indexOf(t);i>=0&&n.splice(i,1)},utils:{wrap:Cy,wrapYoyo:Ry,distribute:Um,random:Fm,snap:Om,normalize:Ay,getUnit:An,clamp:by,splitColor:Gm,toArray:Ti,selector:kh,mapRange:Bm,pipe:Ey,unitize:wy,interpolate:Py,shuffle:Nm},install:ym,effects:wu,ticker:ci,updateRoot:Gn.updateRoot,plugins:si,globalTimeline:qt,core:{PropTween:Qn,globals:bm,Tween:tn,Timeline:Gn,Animation:Oo,getCache:os,_removeLinkedListItem:Ic,reverting:function(){return vn},context:function(e){return e&&Ot&&(Ot.data.push(e),e._ctx=Ot),Ot},suppressOverwrites:function(e){return Gf=e}}};Kn("to,from,fromTo,delayedCall,set,killTweensOf",function(r){return gc[r]=tn[r]});ci.add(Gn.updateRoot);ta=gc.to({},{duration:0});var Ky=function(e,t){for(var n=e._pt;n&&n.p!==t&&n.op!==t&&n.fp!==t;)n=n._next;return n},Qy=function(e,t){var n=e._targets,i,s,a;for(i in t)for(s=n.length;s--;)a=e._ptLookup[s][i],a&&(a=a.d)&&(a._pt&&(a=Ky(a,i)),a&&a.modifier&&a.modifier(t[i],e,n[s],i))},Du=function(e,t){return{name:e,headless:1,rawVars:1,init:function(i,s,a){a._onInit=function(o){var l,c;if(mn(s)&&(l={},Kn(s,function(u){return l[u]=1}),s=l),t){l={};for(c in s)l[c]=t(s[c]);s=l}Qy(o,s)}}}},ei=gc.registerPlugin({name:"attr",init:function(e,t,n,i,s){var a,o,l;this.tween=n;for(a in t)l=e.getAttribute(a)||"",o=this.add(e,"setAttribute",(l||0)+"",t[a],i,s,0,0,a),o.op=a,o.b=l,this._props.push(a)},render:function(e,t){for(var n=t._pt;n;)vn?n.set(n.t,n.p,n.b,n):n.r(e,n.d),n=n._next}},{name:"endArray",headless:1,init:function(e,t){for(var n=t.length;n--;)this.add(e,n,e[n]||0,t[n],0,0,0,0,0,1)}},Du("roundProps",Gh),Du("modifiers"),Du("snap",Om))||gc;tn.version=Gn.version=ei.version="3.14.2";Mm=1;Hf()&&Ma();pt.Power0;pt.Power1;pt.Power2;pt.Power3;pt.Power4;pt.Linear;pt.Quad;pt.Cubic;pt.Quart;pt.Quint;pt.Strong;pt.Elastic;pt.Back;pt.SteppedEase;pt.Bounce;pt.Sine;pt.Expo;pt.Circ;var $p,Rr,aa,nd,ss,Jp,id,jy=function(){return typeof window<"u"},_r={},es=180/Math.PI,oa=Math.PI/180,Xs=Math.atan2,Kp=1e8,rd=/([A-Z])/g,e4=/(left|right|width|margin|padding|x)/i,t4=/[\s,\(]\S/,Xi={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},Wh=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},n4=function(e,t){return t.set(t.t,t.p,e===1?t.e:Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},i4=function(e,t){return t.set(t.t,t.p,e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},r4=function(e,t){return t.set(t.t,t.p,e===1?t.e:e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},s4=function(e,t){var n=t.s+t.c*e;t.set(t.t,t.p,~~(n+(n<0?-.5:.5))+t.u,t)},i1=function(e,t){return t.set(t.t,t.p,e?t.e:t.b,t)},r1=function(e,t){return t.set(t.t,t.p,e!==1?t.b:t.e,t)},a4=function(e,t,n){return e.style[t]=n},o4=function(e,t,n){return e.style.setProperty(t,n)},l4=function(e,t,n){return e._gsap[t]=n},c4=function(e,t,n){return e._gsap.scaleX=e._gsap.scaleY=n},u4=function(e,t,n,i,s){var a=e._gsap;a.scaleX=a.scaleY=n,a.renderTransform(s,a)},h4=function(e,t,n,i,s){var a=e._gsap;a[t]=n,a.renderTransform(s,a)},kt="transform",jn=kt+"Origin",f4=function r(e,t){var n=this,i=this.target,s=i.style,a=i._gsap;if(e in _r&&s){if(this.tfm=this.tfm||{},e!=="transform")e=Xi[e]||e,~e.indexOf(",")?e.split(",").forEach(function(o){return n.tfm[o]=or(i,o)}):this.tfm[e]=a.x?a[e]:or(i,e),e===jn&&(this.tfm.zOrigin=a.zOrigin);else return Xi.transform.split(",").forEach(function(o){return r.call(n,o,t)});if(this.props.indexOf(kt)>=0)return;a.svg&&(this.svgo=i.getAttribute("data-svg-origin"),this.props.push(jn,t,"")),e=kt}(s||t)&&this.props.push(e,t,s[e])},s1=function(e){e.translate&&(e.removeProperty("translate"),e.removeProperty("scale"),e.removeProperty("rotate"))},d4=function(){var e=this.props,t=this.target,n=t.style,i=t._gsap,s,a;for(s=0;s<e.length;s+=3)e[s+1]?e[s+1]===2?t[e[s]](e[s+2]):t[e[s]]=e[s+2]:e[s+2]?n[e[s]]=e[s+2]:n.removeProperty(e[s].substr(0,2)==="--"?e[s]:e[s].replace(rd,"-$1").toLowerCase());if(this.tfm){for(a in this.tfm)i[a]=this.tfm[a];i.svg&&(i.renderTransform(),t.setAttribute("data-svg-origin",this.svgo||"")),s=id(),(!s||!s.isStart)&&!n[kt]&&(s1(n),i.zOrigin&&n[jn]&&(n[jn]+=" "+i.zOrigin+"px",i.zOrigin=0,i.renderTransform()),i.uncache=1)}},a1=function(e,t){var n={target:e,props:[],revert:d4,save:f4};return e._gsap||ei.core.getCache(e),t&&e.style&&e.nodeType&&t.split(",").forEach(function(i){return n.save(i)}),n},o1,Xh=function(e,t){var n=Rr.createElementNS?Rr.createElementNS((t||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):Rr.createElement(e);return n&&n.style?n:Rr.createElement(e)},fi=function r(e,t,n){var i=getComputedStyle(e);return i[t]||i.getPropertyValue(t.replace(rd,"-$1").toLowerCase())||i.getPropertyValue(t)||!n&&r(e,ya(t)||t,1)||""},Qp="O,Moz,ms,Ms,Webkit".split(","),ya=function(e,t,n){var i=t||ss,s=i.style,a=5;if(e in s&&!n)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);a--&&!(Qp[a]+e in s););return a<0?null:(a===3?"ms":a>=0?Qp[a]:"")+e},Yh=function(){jy()&&window.document&&($p=window,Rr=$p.document,aa=Rr.documentElement,ss=Xh("div")||{style:{}},Xh("div"),kt=ya(kt),jn=kt+"Origin",ss.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",o1=!!ya("perspective"),id=ei.core.reverting,nd=1)},jp=function(e){var t=e.ownerSVGElement,n=Xh("svg",t&&t.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),i=e.cloneNode(!0),s;i.style.display="block",n.appendChild(i),aa.appendChild(n);try{s=i.getBBox()}catch{}return n.removeChild(i),aa.removeChild(n),s},e0=function(e,t){for(var n=t.length;n--;)if(e.hasAttribute(t[n]))return e.getAttribute(t[n])},l1=function(e){var t,n;try{t=e.getBBox()}catch{t=jp(e),n=1}return t&&(t.width||t.height)||n||(t=jp(e)),t&&!t.width&&!t.x&&!t.y?{x:+e0(e,["x","cx","x1"])||0,y:+e0(e,["y","cy","y1"])||0,width:0,height:0}:t},c1=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&l1(e))},zr=function(e,t){if(t){var n=e.style,i;t in _r&&t!==jn&&(t=kt),n.removeProperty?(i=t.substr(0,2),(i==="ms"||t.substr(0,6)==="webkit")&&(t="-"+t),n.removeProperty(i==="--"?t:t.replace(rd,"-$1").toLowerCase())):n.removeAttribute(t)}},Pr=function(e,t,n,i,s,a){var o=new Qn(e._pt,t,n,0,1,a?r1:i1);return e._pt=o,o.b=i,o.e=s,e._props.push(n),o},t0={deg:1,rad:1,turn:1},p4={grid:1,flex:1},kr=function r(e,t,n,i){var s=parseFloat(n)||0,a=(n+"").trim().substr((s+"").length)||"px",o=ss.style,l=e4.test(t),c=e.tagName.toLowerCase()==="svg",u=(c?"client":"offset")+(l?"Width":"Height"),d=100,h=i==="px",f=i==="%",_,g,p,m;if(i===a||!s||t0[i]||t0[a])return s;if(a!=="px"&&!h&&(s=r(e,t,n,"px")),m=e.getCTM&&c1(e),(f||a==="%")&&(_r[t]||~t.indexOf("adius")))return _=m?e.getBBox()[l?"width":"height"]:e[u],Zt(f?s/_*d:s/100*_);if(o[l?"width":"height"]=d+(h?a:i),g=i!=="rem"&&~t.indexOf("adius")||i==="em"&&e.appendChild&&!c?e:e.parentNode,m&&(g=(e.ownerSVGElement||{}).parentNode),(!g||g===Rr||!g.appendChild)&&(g=Rr.body),p=g._gsap,p&&f&&p.width&&l&&p.time===ci.time&&!p.uncache)return Zt(s/p.width*d);if(f&&(t==="height"||t==="width")){var M=e.style[t];e.style[t]=d+i,_=e[u],M?e.style[t]=M:zr(e,t)}else(f||a==="%")&&!p4[fi(g,"display")]&&(o.position=fi(e,"position")),g===e&&(o.position="static"),g.appendChild(ss),_=ss[u],g.removeChild(ss),o.position="absolute";return l&&f&&(p=os(g),p.time=ci.time,p.width=g[u]),Zt(h?_*s/d:_&&s?d/_*s:0)},or=function(e,t,n,i){var s;return nd||Yh(),t in Xi&&t!=="transform"&&(t=Xi[t],~t.indexOf(",")&&(t=t.split(",")[0])),_r[t]&&t!=="transform"?(s=qo(e,i),s=t!=="transformOrigin"?s[t]:s.svg?s.origin:vc(fi(e,jn))+" "+s.zOrigin+"px"):(s=e.style[t],(!s||s==="auto"||i||~(s+"").indexOf("calc("))&&(s=xc[t]&&xc[t](e,t,n)||fi(e,t)||Em(e,t)||(t==="opacity"?1:0))),n&&!~(s+"").trim().indexOf(" ")?kr(e,t,s,n)+n:s},m4=function(e,t,n,i){if(!n||n==="none"){var s=ya(t,e,1),a=s&&fi(e,s,1);a&&a!==n?(t=s,n=a):t==="borderColor"&&(n=fi(e,"borderTopColor"))}var o=new Qn(this._pt,e.style,t,0,1,e1),l=0,c=0,u,d,h,f,_,g,p,m,M,w,v,y;if(o.b=n,o.e=i,n+="",i+="",i.substring(0,6)==="var(--"&&(i=fi(e,i.substring(4,i.indexOf(")")))),i==="auto"&&(g=e.style[t],e.style[t]=i,i=fi(e,t)||i,g?e.style[t]=g:zr(e,t)),u=[n,i],Hm(u),n=u[0],i=u[1],h=n.match(ea)||[],y=i.match(ea)||[],y.length){for(;d=ea.exec(i);)p=d[0],M=i.substring(l,d.index),_?_=(_+1)%5:(M.substr(-5)==="rgba("||M.substr(-5)==="hsla(")&&(_=1),p!==(g=h[c++]||"")&&(f=parseFloat(g)||0,v=g.substr((f+"").length),p.charAt(1)==="="&&(p=sa(f,p)+v),m=parseFloat(p),w=p.substr((m+"").length),l=ea.lastIndex-w.length,w||(w=w||di.units[t]||v,l===i.length&&(i+=w,o.e+=w)),v!==w&&(f=kr(e,t,g,w)||0),o._pt={_next:o._pt,p:M||c===1?M:",",s:f,c:m-f,m:_&&_<4||t==="zIndex"?Math.round:0});o.c=l<i.length?i.substring(l,i.length):""}else o.r=t==="display"&&i==="none"?r1:i1;return Sm.test(i)&&(o.e=0),this._pt=o,o},n0={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},_4=function(e){var t=e.split(" "),n=t[0],i=t[1]||"50%";return(n==="top"||n==="bottom"||i==="left"||i==="right")&&(e=n,n=i,i=e),t[0]=n0[n]||n,t[1]=n0[i]||i,t.join(" ")},g4=function(e,t){if(t.tween&&t.tween._time===t.tween._dur){var n=t.t,i=n.style,s=t.u,a=n._gsap,o,l,c;if(s==="all"||s===!0)i.cssText="",l=1;else for(s=s.split(","),c=s.length;--c>-1;)o=s[c],_r[o]&&(l=1,o=o==="transformOrigin"?jn:kt),zr(n,o);l&&(zr(n,kt),a&&(a.svg&&n.removeAttribute("transform"),i.scale=i.rotate=i.translate="none",qo(n,1),a.uncache=1,s1(i)))}},xc={clearProps:function(e,t,n,i,s){if(s.data!=="isFromStart"){var a=e._pt=new Qn(e._pt,t,n,0,0,g4);return a.u=i,a.pr=-10,a.tween=s,e._props.push(n),1}}},Fo=[1,0,0,1,0,0],u1={},h1=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},i0=function(e){var t=fi(e,kt);return h1(t)?Fo:t.substr(7).match(vm).map(Zt)},sd=function(e,t){var n=e._gsap||os(e),i=e.style,s=i0(e),a,o,l,c;return n.svg&&e.getAttribute("transform")?(l=e.transform.baseVal.consolidate().matrix,s=[l.a,l.b,l.c,l.d,l.e,l.f],s.join(",")==="1,0,0,1,0,0"?Fo:s):(s===Fo&&!e.offsetParent&&e!==aa&&!n.svg&&(l=i.display,i.display="block",a=e.parentNode,(!a||!e.offsetParent&&!e.getBoundingClientRect().width)&&(c=1,o=e.nextElementSibling,aa.appendChild(e)),s=i0(e),l?i.display=l:zr(e,"display"),c&&(o?a.insertBefore(e,o):a?a.appendChild(e):aa.removeChild(e))),t&&s.length>6?[s[0],s[1],s[4],s[5],s[12],s[13]]:s)},Zh=function(e,t,n,i,s,a){var o=e._gsap,l=s||sd(e,!0),c=o.xOrigin||0,u=o.yOrigin||0,d=o.xOffset||0,h=o.yOffset||0,f=l[0],_=l[1],g=l[2],p=l[3],m=l[4],M=l[5],w=t.split(" "),v=parseFloat(w[0])||0,y=parseFloat(w[1])||0,T,A,x,b;n?l!==Fo&&(A=f*p-_*g)&&(x=v*(p/A)+y*(-g/A)+(g*M-p*m)/A,b=v*(-_/A)+y*(f/A)-(f*M-_*m)/A,v=x,y=b):(T=l1(e),v=T.x+(~w[0].indexOf("%")?v/100*T.width:v),y=T.y+(~(w[1]||w[0]).indexOf("%")?y/100*T.height:y)),i||i!==!1&&o.smooth?(m=v-c,M=y-u,o.xOffset=d+(m*f+M*g)-m,o.yOffset=h+(m*_+M*p)-M):o.xOffset=o.yOffset=0,o.xOrigin=v,o.yOrigin=y,o.smooth=!!i,o.origin=t,o.originIsAbsolute=!!n,e.style[jn]="0px 0px",a&&(Pr(a,o,"xOrigin",c,v),Pr(a,o,"yOrigin",u,y),Pr(a,o,"xOffset",d,o.xOffset),Pr(a,o,"yOffset",h,o.yOffset)),e.setAttribute("data-svg-origin",v+" "+y)},qo=function(e,t){var n=e._gsap||new Zm(e);if("x"in n&&!t&&!n.uncache)return n;var i=e.style,s=n.scaleX<0,a="px",o="deg",l=getComputedStyle(e),c=fi(e,jn)||"0",u,d,h,f,_,g,p,m,M,w,v,y,T,A,x,b,C,L,D,k,I,q,X,z,j,Y,P,K,we,Te,Ye,We;return u=d=h=g=p=m=M=w=v=0,f=_=1,n.svg=!!(e.getCTM&&c1(e)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(i[kt]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[kt]!=="none"?l[kt]:"")),i.scale=i.rotate=i.translate="none"),A=sd(e,n.svg),n.svg&&(n.uncache?(j=e.getBBox(),c=n.xOrigin-j.x+"px "+(n.yOrigin-j.y)+"px",z=""):z=!t&&e.getAttribute("data-svg-origin"),Zh(e,z||c,!!z||n.originIsAbsolute,n.smooth!==!1,A)),y=n.xOrigin||0,T=n.yOrigin||0,A!==Fo&&(L=A[0],D=A[1],k=A[2],I=A[3],u=q=A[4],d=X=A[5],A.length===6?(f=Math.sqrt(L*L+D*D),_=Math.sqrt(I*I+k*k),g=L||D?Xs(D,L)*es:0,M=k||I?Xs(k,I)*es+g:0,M&&(_*=Math.abs(Math.cos(M*oa))),n.svg&&(u-=y-(y*L+T*k),d-=T-(y*D+T*I))):(We=A[6],Te=A[7],P=A[8],K=A[9],we=A[10],Ye=A[11],u=A[12],d=A[13],h=A[14],x=Xs(We,we),p=x*es,x&&(b=Math.cos(-x),C=Math.sin(-x),z=q*b+P*C,j=X*b+K*C,Y=We*b+we*C,P=q*-C+P*b,K=X*-C+K*b,we=We*-C+we*b,Ye=Te*-C+Ye*b,q=z,X=j,We=Y),x=Xs(-k,we),m=x*es,x&&(b=Math.cos(-x),C=Math.sin(-x),z=L*b-P*C,j=D*b-K*C,Y=k*b-we*C,Ye=I*C+Ye*b,L=z,D=j,k=Y),x=Xs(D,L),g=x*es,x&&(b=Math.cos(x),C=Math.sin(x),z=L*b+D*C,j=q*b+X*C,D=D*b-L*C,X=X*b-q*C,L=z,q=j),p&&Math.abs(p)+Math.abs(g)>359.9&&(p=g=0,m=180-m),f=Zt(Math.sqrt(L*L+D*D+k*k)),_=Zt(Math.sqrt(X*X+We*We)),x=Xs(q,X),M=Math.abs(x)>2e-4?x*es:0,v=Ye?1/(Ye<0?-Ye:Ye):0),n.svg&&(z=e.getAttribute("transform"),n.forceCSS=e.setAttribute("transform","")||!h1(fi(e,kt)),z&&e.setAttribute("transform",z))),Math.abs(M)>90&&Math.abs(M)<270&&(s?(f*=-1,M+=g<=0?180:-180,g+=g<=0?180:-180):(_*=-1,M+=M<=0?180:-180)),t=t||n.uncache,n.x=u-((n.xPercent=u&&(!t&&n.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-u)?-50:0)))?e.offsetWidth*n.xPercent/100:0)+a,n.y=d-((n.yPercent=d&&(!t&&n.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-d)?-50:0)))?e.offsetHeight*n.yPercent/100:0)+a,n.z=h+a,n.scaleX=Zt(f),n.scaleY=Zt(_),n.rotation=Zt(g)+o,n.rotationX=Zt(p)+o,n.rotationY=Zt(m)+o,n.skewX=M+o,n.skewY=w+o,n.transformPerspective=v+a,(n.zOrigin=parseFloat(c.split(" ")[2])||!t&&n.zOrigin||0)&&(i[jn]=vc(c)),n.xOffset=n.yOffset=0,n.force3D=di.force3D,n.renderTransform=n.svg?v4:o1?f1:x4,n.uncache=0,n},vc=function(e){return(e=e.split(" "))[0]+" "+e[1]},Lu=function(e,t,n){var i=An(t);return Zt(parseFloat(t)+parseFloat(kr(e,"x",n+"px",i)))+i},x4=function(e,t){t.z="0px",t.rotationY=t.rotationX="0deg",t.force3D=0,f1(e,t)},Qr="0deg",Ga="0px",jr=") ",f1=function(e,t){var n=t||this,i=n.xPercent,s=n.yPercent,a=n.x,o=n.y,l=n.z,c=n.rotation,u=n.rotationY,d=n.rotationX,h=n.skewX,f=n.skewY,_=n.scaleX,g=n.scaleY,p=n.transformPerspective,m=n.force3D,M=n.target,w=n.zOrigin,v="",y=m==="auto"&&e&&e!==1||m===!0;if(w&&(d!==Qr||u!==Qr)){var T=parseFloat(u)*oa,A=Math.sin(T),x=Math.cos(T),b;T=parseFloat(d)*oa,b=Math.cos(T),a=Lu(M,a,A*b*-w),o=Lu(M,o,-Math.sin(T)*-w),l=Lu(M,l,x*b*-w+w)}p!==Ga&&(v+="perspective("+p+jr),(i||s)&&(v+="translate("+i+"%, "+s+"%) "),(y||a!==Ga||o!==Ga||l!==Ga)&&(v+=l!==Ga||y?"translate3d("+a+", "+o+", "+l+") ":"translate("+a+", "+o+jr),c!==Qr&&(v+="rotate("+c+jr),u!==Qr&&(v+="rotateY("+u+jr),d!==Qr&&(v+="rotateX("+d+jr),(h!==Qr||f!==Qr)&&(v+="skew("+h+", "+f+jr),(_!==1||g!==1)&&(v+="scale("+_+", "+g+jr),M.style[kt]=v||"translate(0, 0)"},v4=function(e,t){var n=t||this,i=n.xPercent,s=n.yPercent,a=n.x,o=n.y,l=n.rotation,c=n.skewX,u=n.skewY,d=n.scaleX,h=n.scaleY,f=n.target,_=n.xOrigin,g=n.yOrigin,p=n.xOffset,m=n.yOffset,M=n.forceCSS,w=parseFloat(a),v=parseFloat(o),y,T,A,x,b;l=parseFloat(l),c=parseFloat(c),u=parseFloat(u),u&&(u=parseFloat(u),c+=u,l+=u),l||c?(l*=oa,c*=oa,y=Math.cos(l)*d,T=Math.sin(l)*d,A=Math.sin(l-c)*-h,x=Math.cos(l-c)*h,c&&(u*=oa,b=Math.tan(c-u),b=Math.sqrt(1+b*b),A*=b,x*=b,u&&(b=Math.tan(u),b=Math.sqrt(1+b*b),y*=b,T*=b)),y=Zt(y),T=Zt(T),A=Zt(A),x=Zt(x)):(y=d,x=h,T=A=0),(w&&!~(a+"").indexOf("px")||v&&!~(o+"").indexOf("px"))&&(w=kr(f,"x",a,"px"),v=kr(f,"y",o,"px")),(_||g||p||m)&&(w=Zt(w+_-(_*y+g*A)+p),v=Zt(v+g-(_*T+g*x)+m)),(i||s)&&(b=f.getBBox(),w=Zt(w+i/100*b.width),v=Zt(v+s/100*b.height)),b="matrix("+y+","+T+","+A+","+x+","+w+","+v+")",f.setAttribute("transform",b),M&&(f.style[kt]=b)},S4=function(e,t,n,i,s){var a=360,o=mn(s),l=parseFloat(s)*(o&&~s.indexOf("rad")?es:1),c=l-i,u=i+c+"deg",d,h;return o&&(d=s.split("_")[1],d==="short"&&(c%=a,c!==c%(a/2)&&(c+=c<0?a:-a)),d==="cw"&&c<0?c=(c+a*Kp)%a-~~(c/a)*a:d==="ccw"&&c>0&&(c=(c-a*Kp)%a-~~(c/a)*a)),e._pt=h=new Qn(e._pt,t,n,i,c,n4),h.e=u,h.u="deg",e._props.push(n),h},r0=function(e,t){for(var n in t)e[n]=t[n];return e},M4=function(e,t,n){var i=r0({},n._gsap),s="perspective,force3D,transformOrigin,svgOrigin",a=n.style,o,l,c,u,d,h,f,_;i.svg?(c=n.getAttribute("transform"),n.setAttribute("transform",""),a[kt]=t,o=qo(n,1),zr(n,kt),n.setAttribute("transform",c)):(c=getComputedStyle(n)[kt],a[kt]=t,o=qo(n,1),a[kt]=c);for(l in _r)c=i[l],u=o[l],c!==u&&s.indexOf(l)<0&&(f=An(c),_=An(u),d=f!==_?kr(n,l,c,_):parseFloat(c),h=parseFloat(u),e._pt=new Qn(e._pt,o,l,d,h-d,Wh),e._pt.u=_||0,e._props.push(l));r0(o,i)};Kn("padding,margin,Width,Radius",function(r,e){var t="Top",n="Right",i="Bottom",s="Left",a=(e<3?[t,n,i,s]:[t+s,t+n,i+n,i+s]).map(function(o){return e<2?r+o:"border"+o+r});xc[e>1?"border"+r:r]=function(o,l,c,u,d){var h,f;if(arguments.length<4)return h=a.map(function(_){return or(o,_,c)}),f=h.join(" "),f.split(h[0]).length===5?h[0]:f;h=(u+"").split(" "),f={},a.forEach(function(_,g){return f[_]=h[g]=h[g]||h[(g-1)/2|0]}),o.init(l,f,d)}});var d1={name:"css",register:Yh,targetTest:function(e){return e.style&&e.nodeType},init:function(e,t,n,i,s){var a=this._props,o=e.style,l=n.vars.startAt,c,u,d,h,f,_,g,p,m,M,w,v,y,T,A,x,b;nd||Yh(),this.styles=this.styles||a1(e),x=this.styles.props,this.tween=n;for(g in t)if(g!=="autoRound"&&(u=t[g],!(si[g]&&$m(g,t,n,i,e,s)))){if(f=typeof u,_=xc[g],f==="function"&&(u=u.call(n,i,e,s),f=typeof u),f==="string"&&~u.indexOf("random(")&&(u=No(u)),_)_(this,e,g,u,n)&&(A=1);else if(g.substr(0,2)==="--")c=(getComputedStyle(e).getPropertyValue(g)+"").trim(),u+="",Ur.lastIndex=0,Ur.test(c)||(p=An(c),m=An(u),m?p!==m&&(c=kr(e,g,c,m)+m):p&&(u+=p)),this.add(o,"setProperty",c,u,i,s,0,0,g),a.push(g),x.push(g,0,o[g]);else if(f!=="undefined"){if(l&&g in l?(c=typeof l[g]=="function"?l[g].call(n,i,e,s):l[g],mn(c)&&~c.indexOf("random(")&&(c=No(c)),An(c+"")||c==="auto"||(c+=di.units[g]||An(or(e,g))||""),(c+"").charAt(1)==="="&&(c=or(e,g))):c=or(e,g),h=parseFloat(c),M=f==="string"&&u.charAt(1)==="="&&u.substr(0,2),M&&(u=u.substr(2)),d=parseFloat(u),g in Xi&&(g==="autoAlpha"&&(h===1&&or(e,"visibility")==="hidden"&&d&&(h=0),x.push("visibility",0,o.visibility),Pr(this,o,"visibility",h?"inherit":"hidden",d?"inherit":"hidden",!d)),g!=="scale"&&g!=="transform"&&(g=Xi[g],~g.indexOf(",")&&(g=g.split(",")[0]))),w=g in _r,w){if(this.styles.save(g),b=u,f==="string"&&u.substring(0,6)==="var(--"){if(u=fi(e,u.substring(4,u.indexOf(")"))),u.substring(0,5)==="calc("){var C=e.style.perspective;e.style.perspective=u,u=fi(e,"perspective"),C?e.style.perspective=C:zr(e,"perspective")}d=parseFloat(u)}if(v||(y=e._gsap,y.renderTransform&&!t.parseTransform||qo(e,t.parseTransform),T=t.smoothOrigin!==!1&&y.smooth,v=this._pt=new Qn(this._pt,o,kt,0,1,y.renderTransform,y,0,-1),v.dep=1),g==="scale")this._pt=new Qn(this._pt,y,"scaleY",y.scaleY,(M?sa(y.scaleY,M+d):d)-y.scaleY||0,Wh),this._pt.u=0,a.push("scaleY",g),g+="X";else if(g==="transformOrigin"){x.push(jn,0,o[jn]),u=_4(u),y.svg?Zh(e,u,0,T,0,this):(m=parseFloat(u.split(" ")[2])||0,m!==y.zOrigin&&Pr(this,y,"zOrigin",y.zOrigin,m),Pr(this,o,g,vc(c),vc(u)));continue}else if(g==="svgOrigin"){Zh(e,u,1,T,0,this);continue}else if(g in u1){S4(this,y,g,h,M?sa(h,M+u):u);continue}else if(g==="smoothOrigin"){Pr(this,y,"smooth",y.smooth,u);continue}else if(g==="force3D"){y[g]=u;continue}else if(g==="transform"){M4(this,u,e);continue}}else g in o||(g=ya(g)||g);if(w||(d||d===0)&&(h||h===0)&&!t4.test(u)&&g in o)p=(c+"").substr((h+"").length),d||(d=0),m=An(u)||(g in di.units?di.units[g]:p),p!==m&&(h=kr(e,g,c,m)),this._pt=new Qn(this._pt,w?y:o,g,h,(M?sa(h,M+d):d)-h,!w&&(m==="px"||g==="zIndex")&&t.autoRound!==!1?s4:Wh),this._pt.u=m||0,w&&b!==u?(this._pt.b=c,this._pt.e=b,this._pt.r=r4):p!==m&&m!=="%"&&(this._pt.b=c,this._pt.r=i4);else if(g in o)m4.call(this,e,g,c,M?M+u:u);else if(g in e)this.add(e,g,c||e[g],M?M+u:u,i,s);else if(g!=="parseTransform"){Xf(g,u);continue}w||(g in o?x.push(g,0,o[g]):typeof e[g]=="function"?x.push(g,2,e[g]()):x.push(g,1,c||e[g])),a.push(g)}}A&&t1(this)},render:function(e,t){if(t.tween._time||!id())for(var n=t._pt;n;)n.r(e,n.d),n=n._next;else t.styles.revert()},get:or,aliases:Xi,getSetter:function(e,t,n){var i=Xi[t];return i&&i.indexOf(",")<0&&(t=i),t in _r&&t!==jn&&(e._gsap.x||or(e,"x"))?n&&Jp===n?t==="scale"?c4:l4:(Jp=n||{})&&(t==="scale"?u4:h4):e.style&&!Vf(e.style[t])?a4:~t.indexOf("-")?o4:ed(e,t)},core:{_removeProperty:zr,_getMatrix:sd}};ei.utils.checkPrefix=ya;ei.core.getStyleSaver=a1;(function(r,e,t,n){var i=Kn(r+","+e+","+t,function(s){_r[s]=1});Kn(e,function(s){di.units[s]="deg",u1[s]=1}),Xi[i[13]]=r+","+e,Kn(n,function(s){var a=s.split(":");Xi[a[1]]=i[a[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");Kn("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(r){di.units[r]="px"});ei.registerPlugin(d1);var Oc=ei.registerPlugin(d1)||ei;Oc.core.Tween;function y4(r,e){for(var t=0;t<e.length;t++){var n=e[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(r,n.key,n)}}function b4(r,e,t){return e&&y4(r.prototype,e),r}var gn,$l,ui,Dr,Lr,la,p1,ts,uo,m1,hr,Di,_1,g1=function(){return gn||typeof window<"u"&&(gn=window.gsap)&&gn.registerPlugin&&gn},x1=1,na=[],ct=[],Ki=[],ho=Date.now,$h=function(e,t){return t},T4=function(){var e=uo.core,t=e.bridge||{},n=e._scrollers,i=e._proxies;n.push.apply(n,ct),i.push.apply(i,Ki),ct=n,Ki=i,$h=function(a,o){return t[a](o)}},Or=function(e,t){return~Ki.indexOf(e)&&Ki[Ki.indexOf(e)+1][t]},fo=function(e){return!!~m1.indexOf(e)},Fn=function(e,t,n,i,s){return e.addEventListener(t,n,{passive:i!==!1,capture:!!s})},Un=function(e,t,n,i){return e.removeEventListener(t,n,!!i)},El="scrollLeft",wl="scrollTop",Jh=function(){return hr&&hr.isPressed||ct.cache++},Sc=function(e,t){var n=function i(s){if(s||s===0){x1&&(ui.history.scrollRestoration="manual");var a=hr&&hr.isPressed;s=i.v=Math.round(s)||(hr&&hr.iOS?1:0),e(s),i.cacheID=ct.cache,a&&$h("ss",s)}else(t||ct.cache!==i.cacheID||$h("ref"))&&(i.cacheID=ct.cache,i.v=e());return i.v+i.offset};return n.offset=0,e&&n},Vn={s:El,p:"left",p2:"Left",os:"right",os2:"Right",d:"width",d2:"Width",a:"x",sc:Sc(function(r){return arguments.length?ui.scrollTo(r,sn.sc()):ui.pageXOffset||Dr[El]||Lr[El]||la[El]||0})},sn={s:wl,p:"top",p2:"Top",os:"bottom",os2:"Bottom",d:"height",d2:"Height",a:"y",op:Vn,sc:Sc(function(r){return arguments.length?ui.scrollTo(Vn.sc(),r):ui.pageYOffset||Dr[wl]||Lr[wl]||la[wl]||0})},Xn=function(e,t){return(t&&t._ctx&&t._ctx.selector||gn.utils.toArray)(e)[0]||(typeof e=="string"&&gn.config().nullTargetWarn!==!1?console.warn("Element not found:",e):null)},E4=function(e,t){for(var n=t.length;n--;)if(t[n]===e||t[n].contains(e))return!0;return!1},Gr=function(e,t){var n=t.s,i=t.sc;fo(e)&&(e=Dr.scrollingElement||Lr);var s=ct.indexOf(e),a=i===sn.sc?1:2;!~s&&(s=ct.push(e)-1),ct[s+a]||Fn(e,"scroll",Jh);var o=ct[s+a],l=o||(ct[s+a]=Sc(Or(e,n),!0)||(fo(e)?i:Sc(function(c){return arguments.length?e[n]=c:e[n]})));return l.target=e,o||(l.smooth=gn.getProperty(e,"scrollBehavior")==="smooth"),l},Kh=function(e,t,n){var i=e,s=e,a=ho(),o=a,l=t||50,c=Math.max(500,l*3),u=function(_,g){var p=ho();g||p-a>l?(s=i,i=_,o=a,a=p):n?i+=_:i=s+(_-s)/(p-o)*(a-o)},d=function(){s=i=n?0:i,o=a=0},h=function(_){var g=o,p=s,m=ho();return(_||_===0)&&_!==i&&u(_),a===o||m-o>c?0:(i+(n?p:-p))/((n?m:a)-g)*1e3};return{update:u,reset:d,getVelocity:h}},Va=function(e,t){return t&&!e._gsapAllow&&e.preventDefault(),e.changedTouches?e.changedTouches[0]:e},s0=function(e){var t=Math.max.apply(Math,e),n=Math.min.apply(Math,e);return Math.abs(t)>=Math.abs(n)?t:n},v1=function(){uo=gn.core.globals().ScrollTrigger,uo&&uo.core&&T4()},S1=function(e){return gn=e||g1(),!$l&&gn&&typeof document<"u"&&document.body&&(ui=window,Dr=document,Lr=Dr.documentElement,la=Dr.body,m1=[ui,Dr,Lr,la],gn.utils.clamp,_1=gn.core.context||function(){},ts="onpointerenter"in la?"pointer":"mouse",p1=$t.isTouch=ui.matchMedia&&ui.matchMedia("(hover: none), (pointer: coarse)").matches?1:"ontouchstart"in ui||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0?2:0,Di=$t.eventTypes=("ontouchstart"in Lr?"touchstart,touchmove,touchcancel,touchend":"onpointerdown"in Lr?"pointerdown,pointermove,pointercancel,pointerup":"mousedown,mousemove,mouseup,mouseup").split(","),setTimeout(function(){return x1=0},500),v1(),$l=1),$l};Vn.op=sn;ct.cache=0;var $t=(function(){function r(t){this.init(t)}var e=r.prototype;return e.init=function(n){$l||S1(gn)||console.warn("Please gsap.registerPlugin(Observer)"),uo||v1();var i=n.tolerance,s=n.dragMinimum,a=n.type,o=n.target,l=n.lineHeight,c=n.debounce,u=n.preventDefault,d=n.onStop,h=n.onStopDelay,f=n.ignore,_=n.wheelSpeed,g=n.event,p=n.onDragStart,m=n.onDragEnd,M=n.onDrag,w=n.onPress,v=n.onRelease,y=n.onRight,T=n.onLeft,A=n.onUp,x=n.onDown,b=n.onChangeX,C=n.onChangeY,L=n.onChange,D=n.onToggleX,k=n.onToggleY,I=n.onHover,q=n.onHoverEnd,X=n.onMove,z=n.ignoreCheck,j=n.isNormalizer,Y=n.onGestureStart,P=n.onGestureEnd,K=n.onWheel,we=n.onEnable,Te=n.onDisable,Ye=n.onClick,We=n.scrollSpeed,Qe=n.capture,$=n.allowClicks,te=n.lockAxis,me=n.onLockAxis;this.target=o=Xn(o)||Lr,this.vars=n,f&&(f=gn.utils.toArray(f)),i=i||1e-9,s=s||0,_=_||1,We=We||1,a=a||"wheel,touch,pointer",c=c!==!1,l||(l=parseFloat(ui.getComputedStyle(la).lineHeight)||22);var Ge,xe,Le,Ne,Q,re,oe,N=this,de=0,Be=0,Ue=n.passive||!u&&n.passive!==!1,Ce=Gr(o,Vn),Ze=Gr(o,sn),U=Ce(),at=Ze(),He=~a.indexOf("touch")&&!~a.indexOf("pointer")&&Di[0]==="pointerdown",R=fo(o),S=o.ownerDocument||Dr,G=[0,0,0],V=[0,0,0],J=0,pe=function(){return J=ho()},ce=function(ae,Ve){return(N.event=ae)&&f&&E4(ae.target,f)||Ve&&He&&ae.pointerType!=="touch"||z&&z(ae,Ve)},ee=function(){N._vx.reset(),N._vy.reset(),xe.pause(),d&&d(N)},ie=function(){var ae=N.deltaX=s0(G),Ve=N.deltaY=s0(V),le=Math.abs(ae)>=i,Xe=Math.abs(Ve)>=i;L&&(le||Xe)&&L(N,ae,Ve,G,V),le&&(y&&N.deltaX>0&&y(N),T&&N.deltaX<0&&T(N),b&&b(N),D&&N.deltaX<0!=de<0&&D(N),de=N.deltaX,G[0]=G[1]=G[2]=0),Xe&&(x&&N.deltaY>0&&x(N),A&&N.deltaY<0&&A(N),C&&C(N),k&&N.deltaY<0!=Be<0&&k(N),Be=N.deltaY,V[0]=V[1]=V[2]=0),(Ne||Le)&&(X&&X(N),Le&&(p&&Le===1&&p(N),M&&M(N),Le=0),Ne=!1),re&&!(re=!1)&&me&&me(N),Q&&(K(N),Q=!1),Ge=0},ve=function(ae,Ve,le){G[le]+=ae,V[le]+=Ve,N._vx.update(ae),N._vy.update(Ve),c?Ge||(Ge=requestAnimationFrame(ie)):ie()},Ie=function(ae,Ve){te&&!oe&&(N.axis=oe=Math.abs(ae)>Math.abs(Ve)?"x":"y",re=!0),oe!=="y"&&(G[2]+=ae,N._vx.update(ae,!0)),oe!=="x"&&(V[2]+=Ve,N._vy.update(Ve,!0)),c?Ge||(Ge=requestAnimationFrame(ie)):ie()},Se=function(ae){if(!ce(ae,1)){ae=Va(ae,u);var Ve=ae.clientX,le=ae.clientY,Xe=Ve-N.x,Oe=le-N.y,je=N.isDragging;N.x=Ve,N.y=le,(je||(Xe||Oe)&&(Math.abs(N.startX-Ve)>=s||Math.abs(N.startY-le)>=s))&&(Le||(Le=je?2:1),je||(N.isDragging=!0),Ie(Xe,Oe))}},ge=N.onPress=function(ue){ce(ue,1)||ue&&ue.button||(N.axis=oe=null,xe.pause(),N.isPressed=!0,ue=Va(ue),de=Be=0,N.startX=N.x=ue.clientX,N.startY=N.y=ue.clientY,N._vx.reset(),N._vy.reset(),Fn(j?o:S,Di[1],Se,Ue,!0),N.deltaX=N.deltaY=0,w&&w(N))},fe=N.onRelease=function(ue){if(!ce(ue,1)){Un(j?o:S,Di[1],Se,!0);var ae=!isNaN(N.y-N.startY),Ve=N.isDragging,le=Ve&&(Math.abs(N.x-N.startX)>3||Math.abs(N.y-N.startY)>3),Xe=Va(ue);!le&&ae&&(N._vx.reset(),N._vy.reset(),u&&$&&gn.delayedCall(.08,function(){if(ho()-J>300&&!ue.defaultPrevented){if(ue.target.click)ue.target.click();else if(S.createEvent){var Oe=S.createEvent("MouseEvents");Oe.initMouseEvent("click",!0,!0,ui,1,Xe.screenX,Xe.screenY,Xe.clientX,Xe.clientY,!1,!1,!1,!1,0,null),ue.target.dispatchEvent(Oe)}}})),N.isDragging=N.isGesturing=N.isPressed=!1,d&&Ve&&!j&&xe.restart(!0),Le&&ie(),m&&Ve&&m(N),v&&v(N,le)}},ze=function(ae){return ae.touches&&ae.touches.length>1&&(N.isGesturing=!0)&&Y(ae,N.isDragging)},$e=function(){return(N.isGesturing=!1)||P(N)},F=function(ae){if(!ce(ae)){var Ve=Ce(),le=Ze();ve((Ve-U)*We,(le-at)*We,1),U=Ve,at=le,d&&xe.restart(!0)}},_e=function(ae){if(!ce(ae)){ae=Va(ae,u),K&&(Q=!0);var Ve=(ae.deltaMode===1?l:ae.deltaMode===2?ui.innerHeight:1)*_;ve(ae.deltaX*Ve,ae.deltaY*Ve,0),d&&!j&&xe.restart(!0)}},ne=function(ae){if(!ce(ae)){var Ve=ae.clientX,le=ae.clientY,Xe=Ve-N.x,Oe=le-N.y;N.x=Ve,N.y=le,Ne=!0,d&&xe.restart(!0),(Xe||Oe)&&Ie(Xe,Oe)}},Me=function(ae){N.event=ae,I(N)},be=function(ae){N.event=ae,q(N)},se=function(ae){return ce(ae)||Va(ae,u)&&Ye(N)};xe=N._dc=gn.delayedCall(h||.25,ee).pause(),N.deltaX=N.deltaY=0,N._vx=Kh(0,50,!0),N._vy=Kh(0,50,!0),N.scrollX=Ce,N.scrollY=Ze,N.isDragging=N.isGesturing=N.isPressed=!1,_1(this),N.enable=function(ue){return N.isEnabled||(Fn(R?S:o,"scroll",Jh),a.indexOf("scroll")>=0&&Fn(R?S:o,"scroll",F,Ue,Qe),a.indexOf("wheel")>=0&&Fn(o,"wheel",_e,Ue,Qe),(a.indexOf("touch")>=0&&p1||a.indexOf("pointer")>=0)&&(Fn(o,Di[0],ge,Ue,Qe),Fn(S,Di[2],fe),Fn(S,Di[3],fe),$&&Fn(o,"click",pe,!0,!0),Ye&&Fn(o,"click",se),Y&&Fn(S,"gesturestart",ze),P&&Fn(S,"gestureend",$e),I&&Fn(o,ts+"enter",Me),q&&Fn(o,ts+"leave",be),X&&Fn(o,ts+"move",ne)),N.isEnabled=!0,N.isDragging=N.isGesturing=N.isPressed=Ne=Le=!1,N._vx.reset(),N._vy.reset(),U=Ce(),at=Ze(),ue&&ue.type&&ge(ue),we&&we(N)),N},N.disable=function(){N.isEnabled&&(na.filter(function(ue){return ue!==N&&fo(ue.target)}).length||Un(R?S:o,"scroll",Jh),N.isPressed&&(N._vx.reset(),N._vy.reset(),Un(j?o:S,Di[1],Se,!0)),Un(R?S:o,"scroll",F,Qe),Un(o,"wheel",_e,Qe),Un(o,Di[0],ge,Qe),Un(S,Di[2],fe),Un(S,Di[3],fe),Un(o,"click",pe,!0),Un(o,"click",se),Un(S,"gesturestart",ze),Un(S,"gestureend",$e),Un(o,ts+"enter",Me),Un(o,ts+"leave",be),Un(o,ts+"move",ne),N.isEnabled=N.isPressed=N.isDragging=!1,Te&&Te(N))},N.kill=N.revert=function(){N.disable();var ue=na.indexOf(N);ue>=0&&na.splice(ue,1),hr===N&&(hr=0)},na.push(N),j&&fo(o)&&(hr=N),N.enable(g)},b4(r,[{key:"velocityX",get:function(){return this._vx.getVelocity()}},{key:"velocityY",get:function(){return this._vy.getVelocity()}}]),r})();$t.version="3.14.2";$t.create=function(r){return new $t(r)};$t.register=S1;$t.getAll=function(){return na.slice()};$t.getById=function(r){return na.filter(function(e){return e.vars.id===r})[0]};g1()&&gn.registerPlugin($t);var De,Ks,lt,Pt,ai,St,ad,Mc,Bo,po,Ka,Al,Tn,Fc,Qh,zn,a0,o0,Qs,M1,Iu,y1,Bn,jh,b1,T1,Er,ef,od,ca,ld,mo,tf,Nu,Cl=1,En=Date.now,Uu=En(),wi=0,Qa=0,l0=function(e,t,n){var i=ri(e)&&(e.substr(0,6)==="clamp("||e.indexOf("max")>-1);return n["_"+t+"Clamp"]=i,i?e.substr(6,e.length-7):e},c0=function(e,t){return t&&(!ri(e)||e.substr(0,6)!=="clamp(")?"clamp("+e+")":e},w4=function r(){return Qa&&requestAnimationFrame(r)},u0=function(){return Fc=1},h0=function(){return Fc=0},ki=function(e){return e},ja=function(e){return Math.round(e*1e5)/1e5||0},E1=function(){return typeof window<"u"},w1=function(){return De||E1()&&(De=window.gsap)&&De.registerPlugin&&De},xs=function(e){return!!~ad.indexOf(e)},A1=function(e){return(e==="Height"?ld:lt["inner"+e])||ai["client"+e]||St["client"+e]},C1=function(e){return Or(e,"getBoundingClientRect")||(xs(e)?function(){return ec.width=lt.innerWidth,ec.height=ld,ec}:function(){return lr(e)})},A4=function(e,t,n){var i=n.d,s=n.d2,a=n.a;return(a=Or(e,"getBoundingClientRect"))?function(){return a()[i]}:function(){return(t?A1(s):e["client"+s])||0}},C4=function(e,t){return!t||~Ki.indexOf(e)?C1(e):function(){return ec}},Yi=function(e,t){var n=t.s,i=t.d2,s=t.d,a=t.a;return Math.max(0,(n="scroll"+i)&&(a=Or(e,n))?a()-C1(e)()[s]:xs(e)?(ai[n]||St[n])-A1(i):e[n]-e["offset"+i])},Rl=function(e,t){for(var n=0;n<Qs.length;n+=3)(!t||~t.indexOf(Qs[n+1]))&&e(Qs[n],Qs[n+1],Qs[n+2])},ri=function(e){return typeof e=="string"},Cn=function(e){return typeof e=="function"},eo=function(e){return typeof e=="number"},ns=function(e){return typeof e=="object"},Ha=function(e,t,n){return e&&e.progress(t?0:1)&&n&&e.pause()},Ou=function(e,t){if(e.enabled){var n=e._ctx?e._ctx.add(function(){return t(e)}):t(e);n&&n.totalTime&&(e.callbackAnimation=n)}},Ys=Math.abs,R1="left",P1="top",cd="right",ud="bottom",hs="width",fs="height",_o="Right",go="Left",xo="Top",vo="Bottom",en="padding",Mi="margin",ba="Width",hd="Height",rn="px",yi=function(e){return lt.getComputedStyle(e)},R4=function(e){var t=yi(e).position;e.style.position=t==="absolute"||t==="fixed"?t:"relative"},f0=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},lr=function(e,t){var n=t&&yi(e)[Qh]!=="matrix(1, 0, 0, 1, 0, 0)"&&De.to(e,{x:0,y:0,xPercent:0,yPercent:0,rotation:0,rotationX:0,rotationY:0,scale:1,skewX:0,skewY:0}).progress(1),i=e.getBoundingClientRect();return n&&n.progress(0).kill(),i},yc=function(e,t){var n=t.d2;return e["offset"+n]||e["client"+n]||0},D1=function(e){var t=[],n=e.labels,i=e.duration(),s;for(s in n)t.push(n[s]/i);return t},P4=function(e){return function(t){return De.utils.snap(D1(e),t)}},fd=function(e){var t=De.utils.snap(e),n=Array.isArray(e)&&e.slice(0).sort(function(i,s){return i-s});return n?function(i,s,a){a===void 0&&(a=.001);var o;if(!s)return t(i);if(s>0){for(i-=a,o=0;o<n.length;o++)if(n[o]>=i)return n[o];return n[o-1]}else for(o=n.length,i+=a;o--;)if(n[o]<=i)return n[o];return n[0]}:function(i,s,a){a===void 0&&(a=.001);var o=t(i);return!s||Math.abs(o-i)<a||o-i<0==s<0?o:t(s<0?i-e:i+e)}},D4=function(e){return function(t,n){return fd(D1(e))(t,n.direction)}},Pl=function(e,t,n,i){return n.split(",").forEach(function(s){return e(t,s,i)})},fn=function(e,t,n,i,s){return e.addEventListener(t,n,{passive:!i,capture:!!s})},hn=function(e,t,n,i){return e.removeEventListener(t,n,!!i)},Dl=function(e,t,n){n=n&&n.wheelHandler,n&&(e(t,"wheel",n),e(t,"touchmove",n))},d0={startColor:"green",endColor:"red",indent:0,fontSize:"16px",fontWeight:"normal"},Ll={toggleActions:"play",anticipatePin:0},bc={top:0,left:0,center:.5,bottom:1,right:1},Jl=function(e,t){if(ri(e)){var n=e.indexOf("="),i=~n?+(e.charAt(n-1)+1)*parseFloat(e.substr(n+1)):0;~n&&(e.indexOf("%")>n&&(i*=t/100),e=e.substr(0,n-1)),e=i+(e in bc?bc[e]*t:~e.indexOf("%")?parseFloat(e)*t/100:parseFloat(e)||0)}return e},Il=function(e,t,n,i,s,a,o,l){var c=s.startColor,u=s.endColor,d=s.fontSize,h=s.indent,f=s.fontWeight,_=Pt.createElement("div"),g=xs(n)||Or(n,"pinType")==="fixed",p=e.indexOf("scroller")!==-1,m=g?St:n,M=e.indexOf("start")!==-1,w=M?c:u,v="border-color:"+w+";font-size:"+d+";color:"+w+";font-weight:"+f+";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";return v+="position:"+((p||l)&&g?"fixed;":"absolute;"),(p||l||!g)&&(v+=(i===sn?cd:ud)+":"+(a+parseFloat(h))+"px;"),o&&(v+="box-sizing:border-box;text-align:left;width:"+o.offsetWidth+"px;"),_._isStart=M,_.setAttribute("class","gsap-marker-"+e+(t?" marker-"+t:"")),_.style.cssText=v,_.innerText=t||t===0?e+"-"+t:e,m.children[0]?m.insertBefore(_,m.children[0]):m.appendChild(_),_._offset=_["offset"+i.op.d2],Kl(_,0,i,M),_},Kl=function(e,t,n,i){var s={display:"block"},a=n[i?"os2":"p2"],o=n[i?"p2":"os2"];e._isFlipped=i,s[n.a+"Percent"]=i?-100:0,s[n.a]=i?"1px":0,s["border"+a+ba]=1,s["border"+o+ba]=0,s[n.p]=t+"px",De.set(e,s)},rt=[],nf={},zo,p0=function(){return En()-wi>34&&(zo||(zo=requestAnimationFrame(dr)))},Zs=function(){(!Bn||!Bn.isPressed||Bn.startX>St.clientWidth)&&(ct.cache++,Bn?zo||(zo=requestAnimationFrame(dr)):dr(),wi||Ss("scrollStart"),wi=En())},Fu=function(){T1=lt.innerWidth,b1=lt.innerHeight},to=function(e){ct.cache++,(e===!0||!Tn&&!y1&&!Pt.fullscreenElement&&!Pt.webkitFullscreenElement&&(!jh||T1!==lt.innerWidth||Math.abs(lt.innerHeight-b1)>lt.innerHeight*.25))&&Mc.restart(!0)},vs={},L4=[],L1=function r(){return hn(ut,"scrollEnd",r)||as(!0)},Ss=function(e){return vs[e]&&vs[e].map(function(t){return t()})||L4},ii=[],I1=function(e){for(var t=0;t<ii.length;t+=5)(!e||ii[t+4]&&ii[t+4].query===e)&&(ii[t].style.cssText=ii[t+1],ii[t].getBBox&&ii[t].setAttribute("transform",ii[t+2]||""),ii[t+3].uncache=1)},N1=function(){return ct.forEach(function(e){return Cn(e)&&++e.cacheID&&(e.rec=e())})},dd=function(e,t){var n;for(zn=0;zn<rt.length;zn++)n=rt[zn],n&&(!t||n._ctx===t)&&(e?n.kill(1):n.revert(!0,!0));mo=!0,t&&I1(t),t||Ss("revert")},U1=function(e,t){ct.cache++,(t||!kn)&&ct.forEach(function(n){return Cn(n)&&n.cacheID++&&(n.rec=0)}),ri(e)&&(lt.history.scrollRestoration=od=e)},kn,ds=0,m0,I4=function(){if(m0!==ds){var e=m0=ds;requestAnimationFrame(function(){return e===ds&&as(!0)})}},O1=function(){St.appendChild(ca),ld=!Bn&&ca.offsetHeight||lt.innerHeight,St.removeChild(ca)},_0=function(e){return Bo(".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end").forEach(function(t){return t.style.display=e?"none":"block"})},as=function(e,t){if(ai=Pt.documentElement,St=Pt.body,ad=[lt,Pt,ai,St],wi&&!e&&!mo){fn(ut,"scrollEnd",L1);return}O1(),kn=ut.isRefreshing=!0,mo||N1();var n=Ss("refreshInit");M1&&ut.sort(),t||dd(),ct.forEach(function(i){Cn(i)&&(i.smooth&&(i.target.style.scrollBehavior="auto"),i(0))}),rt.slice(0).forEach(function(i){return i.refresh()}),mo=!1,rt.forEach(function(i){if(i._subPinOffset&&i.pin){var s=i.vars.horizontal?"offsetWidth":"offsetHeight",a=i.pin[s];i.revert(!0,1),i.adjustPinSpacing(i.pin[s]-a),i.refresh()}}),tf=1,_0(!0),rt.forEach(function(i){var s=Yi(i.scroller,i._dir),a=i.vars.end==="max"||i._endClamp&&i.end>s,o=i._startClamp&&i.start>=s;(a||o)&&i.setPositions(o?s-1:i.start,a?Math.max(o?s:i.start+1,s):i.end,!0)}),_0(!1),tf=0,n.forEach(function(i){return i&&i.render&&i.render(-1)}),ct.forEach(function(i){Cn(i)&&(i.smooth&&requestAnimationFrame(function(){return i.target.style.scrollBehavior="smooth"}),i.rec&&i(i.rec))}),U1(od,1),Mc.pause(),ds++,kn=2,dr(2),rt.forEach(function(i){return Cn(i.vars.onRefresh)&&i.vars.onRefresh(i)}),kn=ut.isRefreshing=!1,Ss("refresh")},rf=0,Ql=1,So,dr=function(e){if(e===2||!kn&&!mo){ut.isUpdating=!0,So&&So.update(0);var t=rt.length,n=En(),i=n-Uu>=50,s=t&&rt[0].scroll();if(Ql=rf>s?-1:1,kn||(rf=s),i&&(wi&&!Fc&&n-wi>200&&(wi=0,Ss("scrollEnd")),Ka=Uu,Uu=n),Ql<0){for(zn=t;zn-- >0;)rt[zn]&&rt[zn].update(0,i);Ql=1}else for(zn=0;zn<t;zn++)rt[zn]&&rt[zn].update(0,i);ut.isUpdating=!1}zo=0},sf=[R1,P1,ud,cd,Mi+vo,Mi+_o,Mi+xo,Mi+go,"display","flexShrink","float","zIndex","gridColumnStart","gridColumnEnd","gridRowStart","gridRowEnd","gridArea","justifySelf","alignSelf","placeSelf","order"],jl=sf.concat([hs,fs,"boxSizing","max"+ba,"max"+hd,"position",Mi,en,en+xo,en+_o,en+vo,en+go]),N4=function(e,t,n){ua(n);var i=e._gsap;if(i.spacerIsNative)ua(i.spacerState);else if(e._gsap.swappedIn){var s=t.parentNode;s&&(s.insertBefore(e,t),s.removeChild(t))}e._gsap.swappedIn=!1},qu=function(e,t,n,i){if(!e._gsap.swappedIn){for(var s=sf.length,a=t.style,o=e.style,l;s--;)l=sf[s],a[l]=n[l];a.position=n.position==="absolute"?"absolute":"relative",n.display==="inline"&&(a.display="inline-block"),o[ud]=o[cd]="auto",a.flexBasis=n.flexBasis||"auto",a.overflow="visible",a.boxSizing="border-box",a[hs]=yc(e,Vn)+rn,a[fs]=yc(e,sn)+rn,a[en]=o[Mi]=o[P1]=o[R1]="0",ua(i),o[hs]=o["max"+ba]=n[hs],o[fs]=o["max"+hd]=n[fs],o[en]=n[en],e.parentNode!==t&&(e.parentNode.insertBefore(t,e),t.appendChild(e)),e._gsap.swappedIn=!0}},U4=/([A-Z])/g,ua=function(e){if(e){var t=e.t.style,n=e.length,i=0,s,a;for((e.t._gsap||De.core.getCache(e.t)).uncache=1;i<n;i+=2)a=e[i+1],s=e[i],a?t[s]=a:t[s]&&t.removeProperty(s.replace(U4,"-$1").toLowerCase())}},Nl=function(e){for(var t=jl.length,n=e.style,i=[],s=0;s<t;s++)i.push(jl[s],n[jl[s]]);return i.t=e,i},O4=function(e,t,n){for(var i=[],s=e.length,a=n?8:0,o;a<s;a+=2)o=e[a],i.push(o,o in t?t[o]:e[a+1]);return i.t=e.t,i},ec={left:0,top:0},g0=function(e,t,n,i,s,a,o,l,c,u,d,h,f,_){Cn(e)&&(e=e(l)),ri(e)&&e.substr(0,3)==="max"&&(e=h+(e.charAt(4)==="="?Jl("0"+e.substr(3),n):0));var g=f?f.time():0,p,m,M;if(f&&f.seek(0),isNaN(e)||(e=+e),eo(e))f&&(e=De.utils.mapRange(f.scrollTrigger.start,f.scrollTrigger.end,0,h,e)),o&&Kl(o,n,i,!0);else{Cn(t)&&(t=t(l));var w=(e||"0").split(" "),v,y,T,A;M=Xn(t,l)||St,v=lr(M)||{},(!v||!v.left&&!v.top)&&yi(M).display==="none"&&(A=M.style.display,M.style.display="block",v=lr(M),A?M.style.display=A:M.style.removeProperty("display")),y=Jl(w[0],v[i.d]),T=Jl(w[1]||"0",n),e=v[i.p]-c[i.p]-u+y+s-T,o&&Kl(o,T,i,n-T<20||o._isStart&&T>20),n-=n-T}if(_&&(l[_]=e||-.001,e<0&&(e=0)),a){var x=e+n,b=a._isStart;p="scroll"+i.d2,Kl(a,x,i,b&&x>20||!b&&(d?Math.max(St[p],ai[p]):a.parentNode[p])<=x+1),d&&(c=lr(o),d&&(a.style[i.op.p]=c[i.op.p]-i.op.m-a._offset+rn))}return f&&M&&(p=lr(M),f.seek(h),m=lr(M),f._caScrollDist=p[i.p]-m[i.p],e=e/f._caScrollDist*h),f&&f.seek(g),f?e:Math.round(e)},F4=/(webkit|moz|length|cssText|inset)/i,x0=function(e,t,n,i){if(e.parentNode!==t){var s=e.style,a,o;if(t===St){e._stOrig=s.cssText,o=yi(e);for(a in o)!+a&&!F4.test(a)&&o[a]&&typeof s[a]=="string"&&a!=="0"&&(s[a]=o[a]);s.top=n,s.left=i}else s.cssText=e._stOrig;De.core.getCache(e).uncache=1,t.appendChild(e)}},F1=function(e,t,n){var i=t,s=i;return function(a){var o=Math.round(e());return o!==i&&o!==s&&Math.abs(o-i)>3&&Math.abs(o-s)>3&&(a=o,n&&n()),s=i,i=Math.round(a),i}},Ul=function(e,t,n){var i={};i[t.p]="+="+n,De.set(e,i)},v0=function(e,t){var n=Gr(e,t),i="_scroll"+t.p2,s=function a(o,l,c,u,d){var h=a.tween,f=l.onComplete,_={};c=c||n();var g=F1(n,c,function(){h.kill(),a.tween=0});return d=u&&d||0,u=u||o-c,h&&h.kill(),l[i]=o,l.inherit=!1,l.modifiers=_,_[i]=function(){return g(c+u*h.ratio+d*h.ratio*h.ratio)},l.onUpdate=function(){ct.cache++,a.tween&&dr()},l.onComplete=function(){a.tween=0,f&&f.call(h)},h=a.tween=De.to(e,l),h};return e[i]=n,n.wheelHandler=function(){return s.tween&&s.tween.kill()&&(s.tween=0)},fn(e,"wheel",n.wheelHandler),ut.isTouch&&fn(e,"touchmove",n.wheelHandler),s},ut=(function(){function r(t,n){Ks||r.register(De)||console.warn("Please gsap.registerPlugin(ScrollTrigger)"),ef(this),this.init(t,n)}var e=r.prototype;return e.init=function(n,i){if(this.progress=this.start=0,this.vars&&this.kill(!0,!0),!Qa){this.update=this.refresh=this.kill=ki;return}n=f0(ri(n)||eo(n)||n.nodeType?{trigger:n}:n,Ll);var s=n,a=s.onUpdate,o=s.toggleClass,l=s.id,c=s.onToggle,u=s.onRefresh,d=s.scrub,h=s.trigger,f=s.pin,_=s.pinSpacing,g=s.invalidateOnRefresh,p=s.anticipatePin,m=s.onScrubComplete,M=s.onSnapComplete,w=s.once,v=s.snap,y=s.pinReparent,T=s.pinSpacer,A=s.containerAnimation,x=s.fastScrollEnd,b=s.preventOverlaps,C=n.horizontal||n.containerAnimation&&n.horizontal!==!1?Vn:sn,L=!d&&d!==0,D=Xn(n.scroller||lt),k=De.core.getCache(D),I=xs(D),q=("pinType"in n?n.pinType:Or(D,"pinType")||I&&"fixed")==="fixed",X=[n.onEnter,n.onLeave,n.onEnterBack,n.onLeaveBack],z=L&&n.toggleActions.split(" "),j="markers"in n?n.markers:Ll.markers,Y=I?0:parseFloat(yi(D)["border"+C.p2+ba])||0,P=this,K=n.onRefreshInit&&function(){return n.onRefreshInit(P)},we=A4(D,I,C),Te=C4(D,I),Ye=0,We=0,Qe=0,$=Gr(D,C),te,me,Ge,xe,Le,Ne,Q,re,oe,N,de,Be,Ue,Ce,Ze,U,at,He,R,S,G,V,J,pe,ce,ee,ie,ve,Ie,Se,ge,fe,ze,$e,F,_e,ne,Me,be;if(P._startClamp=P._endClamp=!1,P._dir=C,p*=45,P.scroller=D,P.scroll=A?A.time.bind(A):$,xe=$(),P.vars=n,i=i||n.animation,"refreshPriority"in n&&(M1=1,n.refreshPriority===-9999&&(So=P)),k.tweenScroll=k.tweenScroll||{top:v0(D,sn),left:v0(D,Vn)},P.tweenTo=te=k.tweenScroll[C.p],P.scrubDuration=function(le){ze=eo(le)&&le,ze?fe?fe.duration(le):fe=De.to(i,{ease:"expo",totalProgress:"+=0",inherit:!1,duration:ze,paused:!0,onComplete:function(){return m&&m(P)}}):(fe&&fe.progress(1).kill(),fe=0)},i&&(i.vars.lazy=!1,i._initted&&!P.isReverted||i.vars.immediateRender!==!1&&n.immediateRender!==!1&&i.duration()&&i.render(0,!0,!0),P.animation=i.pause(),i.scrollTrigger=P,P.scrubDuration(d),Se=0,l||(l=i.vars.id)),v&&((!ns(v)||v.push)&&(v={snapTo:v}),"scrollBehavior"in St.style&&De.set(I?[St,ai]:D,{scrollBehavior:"auto"}),ct.forEach(function(le){return Cn(le)&&le.target===(I?Pt.scrollingElement||ai:D)&&(le.smooth=!1)}),Ge=Cn(v.snapTo)?v.snapTo:v.snapTo==="labels"?P4(i):v.snapTo==="labelsDirectional"?D4(i):v.directional!==!1?function(le,Xe){return fd(v.snapTo)(le,En()-We<500?0:Xe.direction)}:De.utils.snap(v.snapTo),$e=v.duration||{min:.1,max:2},$e=ns($e)?po($e.min,$e.max):po($e,$e),F=De.delayedCall(v.delay||ze/2||.1,function(){var le=$(),Xe=En()-We<500,Oe=te.tween;if((Xe||Math.abs(P.getVelocity())<10)&&!Oe&&!Fc&&Ye!==le){var je=(le-Ne)/Ce,Jt=i&&!L?i.totalProgress():je,ot=Xe?0:(Jt-ge)/(En()-Ka)*1e3||0,Lt=De.utils.clamp(-je,1-je,Ys(ot/2)*ot/.185),ln=je+(v.inertia===!1?0:Lt),It,Tt,dt=v,Ln=dt.onStart,Ct=dt.onInterrupt,Sn=dt.onComplete;if(It=Ge(ln,P),eo(It)||(It=ln),Tt=Math.max(0,Math.round(Ne+It*Ce)),le<=Q&&le>=Ne&&Tt!==le){if(Oe&&!Oe._initted&&Oe.data<=Ys(Tt-le))return;v.inertia===!1&&(Lt=It-je),te(Tt,{duration:$e(Ys(Math.max(Ys(ln-Jt),Ys(It-Jt))*.185/ot/.05||0)),ease:v.ease||"power3",data:Ys(Tt-le),onInterrupt:function(){return F.restart(!0)&&Ct&&Ct(P)},onComplete:function(){P.update(),Ye=$(),i&&!L&&(fe?fe.resetTo("totalProgress",It,i._tTime/i._tDur):i.progress(It)),Se=ge=i&&!L?i.totalProgress():P.progress,M&&M(P),Sn&&Sn(P)}},le,Lt*Ce,Tt-le-Lt*Ce),Ln&&Ln(P,te.tween)}}else P.isActive&&Ye!==le&&F.restart(!0)}).pause()),l&&(nf[l]=P),h=P.trigger=Xn(h||f!==!0&&f),be=h&&h._gsap&&h._gsap.stRevert,be&&(be=be(P)),f=f===!0?h:Xn(f),ri(o)&&(o={targets:h,className:o}),f&&(_===!1||_===Mi||(_=!_&&f.parentNode&&f.parentNode.style&&yi(f.parentNode).display==="flex"?!1:en),P.pin=f,me=De.core.getCache(f),me.spacer?Ze=me.pinState:(T&&(T=Xn(T),T&&!T.nodeType&&(T=T.current||T.nativeElement),me.spacerIsNative=!!T,T&&(me.spacerState=Nl(T))),me.spacer=He=T||Pt.createElement("div"),He.classList.add("pin-spacer"),l&&He.classList.add("pin-spacer-"+l),me.pinState=Ze=Nl(f)),n.force3D!==!1&&De.set(f,{force3D:!0}),P.spacer=He=me.spacer,Ie=yi(f),pe=Ie[_+C.os2],S=De.getProperty(f),G=De.quickSetter(f,C.a,rn),qu(f,He,Ie),at=Nl(f)),j){Be=ns(j)?f0(j,d0):d0,N=Il("scroller-start",l,D,C,Be,0),de=Il("scroller-end",l,D,C,Be,0,N),R=N["offset"+C.op.d2];var se=Xn(Or(D,"content")||D);re=this.markerStart=Il("start",l,se,C,Be,R,0,A),oe=this.markerEnd=Il("end",l,se,C,Be,R,0,A),A&&(Me=De.quickSetter([re,oe],C.a,rn)),!q&&!(Ki.length&&Or(D,"fixedMarkers")===!0)&&(R4(I?St:D),De.set([N,de],{force3D:!0}),ee=De.quickSetter(N,C.a,rn),ve=De.quickSetter(de,C.a,rn))}if(A){var ue=A.vars.onUpdate,ae=A.vars.onUpdateParams;A.eventCallback("onUpdate",function(){P.update(0,0,1),ue&&ue.apply(A,ae||[])})}if(P.previous=function(){return rt[rt.indexOf(P)-1]},P.next=function(){return rt[rt.indexOf(P)+1]},P.revert=function(le,Xe){if(!Xe)return P.kill(!0);var Oe=le!==!1||!P.enabled,je=Tn;Oe!==P.isReverted&&(Oe&&(_e=Math.max($(),P.scroll.rec||0),Qe=P.progress,ne=i&&i.progress()),re&&[re,oe,N,de].forEach(function(Jt){return Jt.style.display=Oe?"none":"block"}),Oe&&(Tn=P,P.update(Oe)),f&&(!y||!P.isActive)&&(Oe?N4(f,He,Ze):qu(f,He,yi(f),ce)),Oe||P.update(Oe),Tn=je,P.isReverted=Oe)},P.refresh=function(le,Xe,Oe,je){if(!((Tn||!P.enabled)&&!Xe)){if(f&&le&&wi){fn(r,"scrollEnd",L1);return}!kn&&K&&K(P),Tn=P,te.tween&&!Oe&&(te.tween.kill(),te.tween=0),fe&&fe.pause(),g&&i&&(i.revert({kill:!1}).invalidate(),i.getChildren?i.getChildren(!0,!0,!1).forEach(function(ye){return ye.vars.immediateRender&&ye.render(0,!0,!0)}):i.vars.immediateRender&&i.render(0,!0,!0)),P.isReverted||P.revert(!0,!0),P._subPinOffset=!1;var Jt=we(),ot=Te(),Lt=A?A.duration():Yi(D,C),ln=Ce<=.01||!Ce,It=0,Tt=je||0,dt=ns(Oe)?Oe.end:n.end,Ln=n.endTrigger||h,Ct=ns(Oe)?Oe.start:n.start||(n.start===0||!h?0:f?"0 0":"0 100%"),Sn=P.pinnedContainer=n.pinnedContainer&&Xn(n.pinnedContainer,P),In=h&&Math.max(0,rt.indexOf(P))||0,Kt=In,Ht,nn,Oi,Cs,cn,Xt,gi,Rs,E,B,Z,H,W;for(j&&ns(Oe)&&(H=De.getProperty(N,C.p),W=De.getProperty(de,C.p));Kt-- >0;)Xt=rt[Kt],Xt.end||Xt.refresh(0,1)||(Tn=P),gi=Xt.pin,gi&&(gi===h||gi===f||gi===Sn)&&!Xt.isReverted&&(B||(B=[]),B.unshift(Xt),Xt.revert(!0,!0)),Xt!==rt[Kt]&&(In--,Kt--);for(Cn(Ct)&&(Ct=Ct(P)),Ct=l0(Ct,"start",P),Ne=g0(Ct,h,Jt,C,$(),re,N,P,ot,Y,q,Lt,A,P._startClamp&&"_startClamp")||(f?-.001:0),Cn(dt)&&(dt=dt(P)),ri(dt)&&!dt.indexOf("+=")&&(~dt.indexOf(" ")?dt=(ri(Ct)?Ct.split(" ")[0]:"")+dt:(It=Jl(dt.substr(2),Jt),dt=ri(Ct)?Ct:(A?De.utils.mapRange(0,A.duration(),A.scrollTrigger.start,A.scrollTrigger.end,Ne):Ne)+It,Ln=h)),dt=l0(dt,"end",P),Q=Math.max(Ne,g0(dt||(Ln?"100% 0":Lt),Ln,Jt,C,$()+It,oe,de,P,ot,Y,q,Lt,A,P._endClamp&&"_endClamp"))||-.001,It=0,Kt=In;Kt--;)Xt=rt[Kt]||{},gi=Xt.pin,gi&&Xt.start-Xt._pinPush<=Ne&&!A&&Xt.end>0&&(Ht=Xt.end-(P._startClamp?Math.max(0,Xt.start):Xt.start),(gi===h&&Xt.start-Xt._pinPush<Ne||gi===Sn)&&isNaN(Ct)&&(It+=Ht*(1-Xt.progress)),gi===f&&(Tt+=Ht));if(Ne+=It,Q+=It,P._startClamp&&(P._startClamp+=It),P._endClamp&&!kn&&(P._endClamp=Q||-.001,Q=Math.min(Q,Yi(D,C))),Ce=Q-Ne||(Ne-=.01)&&.001,ln&&(Qe=De.utils.clamp(0,1,De.utils.normalize(Ne,Q,_e))),P._pinPush=Tt,re&&It&&(Ht={},Ht[C.a]="+="+It,Sn&&(Ht[C.p]="-="+$()),De.set([re,oe],Ht)),f&&!(tf&&P.end>=Yi(D,C)))Ht=yi(f),Cs=C===sn,Oi=$(),V=parseFloat(S(C.a))+Tt,!Lt&&Q>1&&(Z=(I?Pt.scrollingElement||ai:D).style,Z={style:Z,value:Z["overflow"+C.a.toUpperCase()]},I&&yi(St)["overflow"+C.a.toUpperCase()]!=="scroll"&&(Z.style["overflow"+C.a.toUpperCase()]="scroll")),qu(f,He,Ht),at=Nl(f),nn=lr(f,!0),Rs=q&&Gr(D,Cs?Vn:sn)(),_?(ce=[_+C.os2,Ce+Tt+rn],ce.t=He,Kt=_===en?yc(f,C)+Ce+Tt:0,Kt&&(ce.push(C.d,Kt+rn),He.style.flexBasis!=="auto"&&(He.style.flexBasis=Kt+rn)),ua(ce),Sn&&rt.forEach(function(ye){ye.pin===Sn&&ye.vars.pinSpacing!==!1&&(ye._subPinOffset=!0)}),q&&$(_e)):(Kt=yc(f,C),Kt&&He.style.flexBasis!=="auto"&&(He.style.flexBasis=Kt+rn)),q&&(cn={top:nn.top+(Cs?Oi-Ne:Rs)+rn,left:nn.left+(Cs?Rs:Oi-Ne)+rn,boxSizing:"border-box",position:"fixed"},cn[hs]=cn["max"+ba]=Math.ceil(nn.width)+rn,cn[fs]=cn["max"+hd]=Math.ceil(nn.height)+rn,cn[Mi]=cn[Mi+xo]=cn[Mi+_o]=cn[Mi+vo]=cn[Mi+go]="0",cn[en]=Ht[en],cn[en+xo]=Ht[en+xo],cn[en+_o]=Ht[en+_o],cn[en+vo]=Ht[en+vo],cn[en+go]=Ht[en+go],U=O4(Ze,cn,y),kn&&$(0)),i?(E=i._initted,Iu(1),i.render(i.duration(),!0,!0),J=S(C.a)-V+Ce+Tt,ie=Math.abs(Ce-J)>1,q&&ie&&U.splice(U.length-2,2),i.render(0,!0,!0),E||i.invalidate(!0),i.parent||i.totalTime(i.totalTime()),Iu(0)):J=Ce,Z&&(Z.value?Z.style["overflow"+C.a.toUpperCase()]=Z.value:Z.style.removeProperty("overflow-"+C.a));else if(h&&$()&&!A)for(nn=h.parentNode;nn&&nn!==St;)nn._pinOffset&&(Ne-=nn._pinOffset,Q-=nn._pinOffset),nn=nn.parentNode;B&&B.forEach(function(ye){return ye.revert(!1,!0)}),P.start=Ne,P.end=Q,xe=Le=kn?_e:$(),!A&&!kn&&(xe<_e&&$(_e),P.scroll.rec=0),P.revert(!1,!0),We=En(),F&&(Ye=-1,F.restart(!0)),Tn=0,i&&L&&(i._initted||ne)&&i.progress()!==ne&&i.progress(ne||0,!0).render(i.time(),!0,!0),(ln||Qe!==P.progress||A||g||i&&!i._initted)&&(i&&!L&&(i._initted||Qe||i.vars.immediateRender!==!1)&&i.totalProgress(A&&Ne<-.001&&!Qe?De.utils.normalize(Ne,Q,0):Qe,!0),P.progress=ln||(xe-Ne)/Ce===Qe?0:Qe),f&&_&&(He._pinOffset=Math.round(P.progress*J)),fe&&fe.invalidate(),isNaN(H)||(H-=De.getProperty(N,C.p),W-=De.getProperty(de,C.p),Ul(N,C,H),Ul(re,C,H-(je||0)),Ul(de,C,W),Ul(oe,C,W-(je||0))),ln&&!kn&&P.update(),u&&!kn&&!Ue&&(Ue=!0,u(P),Ue=!1)}},P.getVelocity=function(){return($()-Le)/(En()-Ka)*1e3||0},P.endAnimation=function(){Ha(P.callbackAnimation),i&&(fe?fe.progress(1):i.paused()?L||Ha(i,P.direction<0,1):Ha(i,i.reversed()))},P.labelToScroll=function(le){return i&&i.labels&&(Ne||P.refresh()||Ne)+i.labels[le]/i.duration()*Ce||0},P.getTrailing=function(le){var Xe=rt.indexOf(P),Oe=P.direction>0?rt.slice(0,Xe).reverse():rt.slice(Xe+1);return(ri(le)?Oe.filter(function(je){return je.vars.preventOverlaps===le}):Oe).filter(function(je){return P.direction>0?je.end<=Ne:je.start>=Q})},P.update=function(le,Xe,Oe){if(!(A&&!Oe&&!le)){var je=kn===!0?_e:P.scroll(),Jt=le?0:(je-Ne)/Ce,ot=Jt<0?0:Jt>1?1:Jt||0,Lt=P.progress,ln,It,Tt,dt,Ln,Ct,Sn,In;if(Xe&&(Le=xe,xe=A?$():je,v&&(ge=Se,Se=i&&!L?i.totalProgress():ot)),p&&f&&!Tn&&!Cl&&wi&&(!ot&&Ne<je+(je-Le)/(En()-Ka)*p?ot=1e-4:ot===1&&Q>je+(je-Le)/(En()-Ka)*p&&(ot=.9999)),ot!==Lt&&P.enabled){if(ln=P.isActive=!!ot&&ot<1,It=!!Lt&&Lt<1,Ct=ln!==It,Ln=Ct||!!ot!=!!Lt,P.direction=ot>Lt?1:-1,P.progress=ot,Ln&&!Tn&&(Tt=ot&&!Lt?0:ot===1?1:Lt===1?2:3,L&&(dt=!Ct&&z[Tt+1]!=="none"&&z[Tt+1]||z[Tt],In=i&&(dt==="complete"||dt==="reset"||dt in i))),b&&(Ct||In)&&(In||d||!i)&&(Cn(b)?b(P):P.getTrailing(b).forEach(function(Oi){return Oi.endAnimation()})),L||(fe&&!Tn&&!Cl?(fe._dp._time-fe._start!==fe._time&&fe.render(fe._dp._time-fe._start),fe.resetTo?fe.resetTo("totalProgress",ot,i._tTime/i._tDur):(fe.vars.totalProgress=ot,fe.invalidate().restart())):i&&i.totalProgress(ot,!!(Tn&&(We||le)))),f){if(le&&_&&(He.style[_+C.os2]=pe),!q)G(ja(V+J*ot));else if(Ln){if(Sn=!le&&ot>Lt&&Q+1>je&&je+1>=Yi(D,C),y)if(!le&&(ln||Sn)){var Kt=lr(f,!0),Ht=je-Ne;x0(f,St,Kt.top+(C===sn?Ht:0)+rn,Kt.left+(C===sn?0:Ht)+rn)}else x0(f,He);ua(ln||Sn?U:at),ie&&ot<1&&ln||G(V+(ot===1&&!Sn?J:0))}}v&&!te.tween&&!Tn&&!Cl&&F.restart(!0),o&&(Ct||w&&ot&&(ot<1||!Nu))&&Bo(o.targets).forEach(function(Oi){return Oi.classList[ln||w?"add":"remove"](o.className)}),a&&!L&&!le&&a(P),Ln&&!Tn?(L&&(In&&(dt==="complete"?i.pause().totalProgress(1):dt==="reset"?i.restart(!0).pause():dt==="restart"?i.restart(!0):i[dt]()),a&&a(P)),(Ct||!Nu)&&(c&&Ct&&Ou(P,c),X[Tt]&&Ou(P,X[Tt]),w&&(ot===1?P.kill(!1,1):X[Tt]=0),Ct||(Tt=ot===1?1:3,X[Tt]&&Ou(P,X[Tt]))),x&&!ln&&Math.abs(P.getVelocity())>(eo(x)?x:2500)&&(Ha(P.callbackAnimation),fe?fe.progress(1):Ha(i,dt==="reverse"?1:!ot,1))):L&&a&&!Tn&&a(P)}if(ve){var nn=A?je/A.duration()*(A._caScrollDist||0):je;ee(nn+(N._isFlipped?1:0)),ve(nn)}Me&&Me(-je/A.duration()*(A._caScrollDist||0))}},P.enable=function(le,Xe){P.enabled||(P.enabled=!0,fn(D,"resize",to),I||fn(D,"scroll",Zs),K&&fn(r,"refreshInit",K),le!==!1&&(P.progress=Qe=0,xe=Le=Ye=$()),Xe!==!1&&P.refresh())},P.getTween=function(le){return le&&te?te.tween:fe},P.setPositions=function(le,Xe,Oe,je){if(A){var Jt=A.scrollTrigger,ot=A.duration(),Lt=Jt.end-Jt.start;le=Jt.start+Lt*le/ot,Xe=Jt.start+Lt*Xe/ot}P.refresh(!1,!1,{start:c0(le,Oe&&!!P._startClamp),end:c0(Xe,Oe&&!!P._endClamp)},je),P.update()},P.adjustPinSpacing=function(le){if(ce&&le){var Xe=ce.indexOf(C.d)+1;ce[Xe]=parseFloat(ce[Xe])+le+rn,ce[1]=parseFloat(ce[1])+le+rn,ua(ce)}},P.disable=function(le,Xe){if(le!==!1&&P.revert(!0,!0),P.enabled&&(P.enabled=P.isActive=!1,Xe||fe&&fe.pause(),_e=0,me&&(me.uncache=1),K&&hn(r,"refreshInit",K),F&&(F.pause(),te.tween&&te.tween.kill()&&(te.tween=0)),!I)){for(var Oe=rt.length;Oe--;)if(rt[Oe].scroller===D&&rt[Oe]!==P)return;hn(D,"resize",to),I||hn(D,"scroll",Zs)}},P.kill=function(le,Xe){P.disable(le,Xe),fe&&!Xe&&fe.kill(),l&&delete nf[l];var Oe=rt.indexOf(P);Oe>=0&&rt.splice(Oe,1),Oe===zn&&Ql>0&&zn--,Oe=0,rt.forEach(function(je){return je.scroller===P.scroller&&(Oe=1)}),Oe||kn||(P.scroll.rec=0),i&&(i.scrollTrigger=null,le&&i.revert({kill:!1}),Xe||i.kill()),re&&[re,oe,N,de].forEach(function(je){return je.parentNode&&je.parentNode.removeChild(je)}),So===P&&(So=0),f&&(me&&(me.uncache=1),Oe=0,rt.forEach(function(je){return je.pin===f&&Oe++}),Oe||(me.spacer=0)),n.onKill&&n.onKill(P)},rt.push(P),P.enable(!1,!1),be&&be(P),i&&i.add&&!Ce){var Ve=P.update;P.update=function(){P.update=Ve,ct.cache++,Ne||Q||P.refresh()},De.delayedCall(.01,P.update),Ce=.01,Ne=Q=0}else P.refresh();f&&I4()},r.register=function(n){return Ks||(De=n||w1(),E1()&&window.document&&r.enable(),Ks=Qa),Ks},r.defaults=function(n){if(n)for(var i in n)Ll[i]=n[i];return Ll},r.disable=function(n,i){Qa=0,rt.forEach(function(a){return a[i?"kill":"disable"](n)}),hn(lt,"wheel",Zs),hn(Pt,"scroll",Zs),clearInterval(Al),hn(Pt,"touchcancel",ki),hn(St,"touchstart",ki),Pl(hn,Pt,"pointerdown,touchstart,mousedown",u0),Pl(hn,Pt,"pointerup,touchend,mouseup",h0),Mc.kill(),Rl(hn);for(var s=0;s<ct.length;s+=3)Dl(hn,ct[s],ct[s+1]),Dl(hn,ct[s],ct[s+2])},r.enable=function(){if(lt=window,Pt=document,ai=Pt.documentElement,St=Pt.body,De&&(Bo=De.utils.toArray,po=De.utils.clamp,ef=De.core.context||ki,Iu=De.core.suppressOverwrites||ki,od=lt.history.scrollRestoration||"auto",rf=lt.pageYOffset||0,De.core.globals("ScrollTrigger",r),St)){Qa=1,ca=document.createElement("div"),ca.style.height="100vh",ca.style.position="absolute",O1(),w4(),$t.register(De),r.isTouch=$t.isTouch,Er=$t.isTouch&&/(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent),jh=$t.isTouch===1,fn(lt,"wheel",Zs),ad=[lt,Pt,ai,St],De.matchMedia?(r.matchMedia=function(c){var u=De.matchMedia(),d;for(d in c)u.add(d,c[d]);return u},De.addEventListener("matchMediaInit",function(){N1(),dd()}),De.addEventListener("matchMediaRevert",function(){return I1()}),De.addEventListener("matchMedia",function(){as(0,1),Ss("matchMedia")}),De.matchMedia().add("(orientation: portrait)",function(){return Fu(),Fu})):console.warn("Requires GSAP 3.11.0 or later"),Fu(),fn(Pt,"scroll",Zs);var n=St.hasAttribute("style"),i=St.style,s=i.borderTopStyle,a=De.core.Animation.prototype,o,l;for(a.revert||Object.defineProperty(a,"revert",{value:function(){return this.time(-.01,!0)}}),i.borderTopStyle="solid",o=lr(St),sn.m=Math.round(o.top+sn.sc())||0,Vn.m=Math.round(o.left+Vn.sc())||0,s?i.borderTopStyle=s:i.removeProperty("border-top-style"),n||(St.setAttribute("style",""),St.removeAttribute("style")),Al=setInterval(p0,250),De.delayedCall(.5,function(){return Cl=0}),fn(Pt,"touchcancel",ki),fn(St,"touchstart",ki),Pl(fn,Pt,"pointerdown,touchstart,mousedown",u0),Pl(fn,Pt,"pointerup,touchend,mouseup",h0),Qh=De.utils.checkPrefix("transform"),jl.push(Qh),Ks=En(),Mc=De.delayedCall(.2,as).pause(),Qs=[Pt,"visibilitychange",function(){var c=lt.innerWidth,u=lt.innerHeight;Pt.hidden?(a0=c,o0=u):(a0!==c||o0!==u)&&to()},Pt,"DOMContentLoaded",as,lt,"load",as,lt,"resize",to],Rl(fn),rt.forEach(function(c){return c.enable(0,1)}),l=0;l<ct.length;l+=3)Dl(hn,ct[l],ct[l+1]),Dl(hn,ct[l],ct[l+2])}},r.config=function(n){"limitCallbacks"in n&&(Nu=!!n.limitCallbacks);var i=n.syncInterval;i&&clearInterval(Al)||(Al=i)&&setInterval(p0,i),"ignoreMobileResize"in n&&(jh=r.isTouch===1&&n.ignoreMobileResize),"autoRefreshEvents"in n&&(Rl(hn)||Rl(fn,n.autoRefreshEvents||"none"),y1=(n.autoRefreshEvents+"").indexOf("resize")===-1)},r.scrollerProxy=function(n,i){var s=Xn(n),a=ct.indexOf(s),o=xs(s);~a&&ct.splice(a,o?6:2),i&&(o?Ki.unshift(lt,i,St,i,ai,i):Ki.unshift(s,i))},r.clearMatchMedia=function(n){rt.forEach(function(i){return i._ctx&&i._ctx.query===n&&i._ctx.kill(!0,!0)})},r.isInViewport=function(n,i,s){var a=(ri(n)?Xn(n):n).getBoundingClientRect(),o=a[s?hs:fs]*i||0;return s?a.right-o>0&&a.left+o<lt.innerWidth:a.bottom-o>0&&a.top+o<lt.innerHeight},r.positionInViewport=function(n,i,s){ri(n)&&(n=Xn(n));var a=n.getBoundingClientRect(),o=a[s?hs:fs],l=i==null?o/2:i in bc?bc[i]*o:~i.indexOf("%")?parseFloat(i)*o/100:parseFloat(i)||0;return s?(a.left+l)/lt.innerWidth:(a.top+l)/lt.innerHeight},r.killAll=function(n){if(rt.slice(0).forEach(function(s){return s.vars.id!=="ScrollSmoother"&&s.kill()}),n!==!0){var i=vs.killAll||[];vs={},i.forEach(function(s){return s()})}},r})();ut.version="3.14.2";ut.saveStyles=function(r){return r?Bo(r).forEach(function(e){if(e&&e.style){var t=ii.indexOf(e);t>=0&&ii.splice(t,5),ii.push(e,e.style.cssText,e.getBBox&&e.getAttribute("transform"),De.core.getCache(e),ef())}}):ii};ut.revert=function(r,e){return dd(!r,e)};ut.create=function(r,e){return new ut(r,e)};ut.refresh=function(r){return r?to(!0):(Ks||ut.register())&&as(!0)};ut.update=function(r){return++ct.cache&&dr(r===!0?2:0)};ut.clearScrollMemory=U1;ut.maxScroll=function(r,e){return Yi(r,e?Vn:sn)};ut.getScrollFunc=function(r,e){return Gr(Xn(r),e?Vn:sn)};ut.getById=function(r){return nf[r]};ut.getAll=function(){return rt.filter(function(r){return r.vars.id!=="ScrollSmoother"})};ut.isScrolling=function(){return!!wi};ut.snapDirectional=fd;ut.addEventListener=function(r,e){var t=vs[r]||(vs[r]=[]);~t.indexOf(e)||t.push(e)};ut.removeEventListener=function(r,e){var t=vs[r],n=t&&t.indexOf(e);n>=0&&t.splice(n,1)};ut.batch=function(r,e){var t=[],n={},i=e.interval||.016,s=e.batchMax||1e9,a=function(c,u){var d=[],h=[],f=De.delayedCall(i,function(){u(d,h),d=[],h=[]}).pause();return function(_){d.length||f.restart(!0),d.push(_.trigger),h.push(_),s<=d.length&&f.progress(1)}},o;for(o in e)n[o]=o.substr(0,2)==="on"&&Cn(e[o])&&o!=="onRefreshInit"?a(o,e[o]):e[o];return Cn(s)&&(s=s(),fn(ut,"refresh",function(){return s=e.batchMax()})),Bo(r).forEach(function(l){var c={};for(o in n)c[o]=n[o];c.trigger=l,t.push(ut.create(c))}),t};var S0=function(e,t,n,i){return t>i?e(i):t<0&&e(0),n>i?(i-t)/(n-t):n<0?t/(t-n):1},Bu=function r(e,t){t===!0?e.style.removeProperty("touch-action"):e.style.touchAction=t===!0?"auto":t?"pan-"+t+($t.isTouch?" pinch-zoom":""):"none",e===ai&&r(St,t)},Ol={auto:1,scroll:1},q4=function(e){var t=e.event,n=e.target,i=e.axis,s=(t.changedTouches?t.changedTouches[0]:t).target,a=s._gsap||De.core.getCache(s),o=En(),l;if(!a._isScrollT||o-a._isScrollT>2e3){for(;s&&s!==St&&(s.scrollHeight<=s.clientHeight&&s.scrollWidth<=s.clientWidth||!(Ol[(l=yi(s)).overflowY]||Ol[l.overflowX]));)s=s.parentNode;a._isScroll=s&&s!==n&&!xs(s)&&(Ol[(l=yi(s)).overflowY]||Ol[l.overflowX]),a._isScrollT=o}(a._isScroll||i==="x")&&(t.stopPropagation(),t._gsapAllow=!0)},q1=function(e,t,n,i){return $t.create({target:e,capture:!0,debounce:!1,lockAxis:!0,type:t,onWheel:i=i&&q4,onPress:i,onDrag:i,onScroll:i,onEnable:function(){return n&&fn(Pt,$t.eventTypes[0],y0,!1,!0)},onDisable:function(){return hn(Pt,$t.eventTypes[0],y0,!0)}})},B4=/(input|label|select|textarea)/i,M0,y0=function(e){var t=B4.test(e.target.tagName);(t||M0)&&(e._gsapAllow=!0,M0=t)},z4=function(e){ns(e)||(e={}),e.preventDefault=e.isNormalizer=e.allowClicks=!0,e.type||(e.type="wheel,touch"),e.debounce=!!e.debounce,e.id=e.id||"normalizer";var t=e,n=t.normalizeScrollX,i=t.momentum,s=t.allowNestedScroll,a=t.onRelease,o,l,c=Xn(e.target)||ai,u=De.core.globals().ScrollSmoother,d=u&&u.get(),h=Er&&(e.content&&Xn(e.content)||d&&e.content!==!1&&!d.smooth()&&d.content()),f=Gr(c,sn),_=Gr(c,Vn),g=1,p=($t.isTouch&&lt.visualViewport?lt.visualViewport.scale*lt.visualViewport.width:lt.outerWidth)/lt.innerWidth,m=0,M=Cn(i)?function(){return i(o)}:function(){return i||2.8},w,v,y=q1(c,e.type,!0,s),T=function(){return v=!1},A=ki,x=ki,b=function(){l=Yi(c,sn),x=po(Er?1:0,l),n&&(A=po(0,Yi(c,Vn))),w=ds},C=function(){h._gsap.y=ja(parseFloat(h._gsap.y)+f.offset)+"px",h.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+parseFloat(h._gsap.y)+", 0, 1)",f.offset=f.cacheID=0},L=function(){if(v){requestAnimationFrame(T);var j=ja(o.deltaY/2),Y=x(f.v-j);if(h&&Y!==f.v+f.offset){f.offset=Y-f.v;var P=ja((parseFloat(h&&h._gsap.y)||0)-f.offset);h.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+P+", 0, 1)",h._gsap.y=P+"px",f.cacheID=ct.cache,dr()}return!0}f.offset&&C(),v=!0},D,k,I,q,X=function(){b(),D.isActive()&&D.vars.scrollY>l&&(f()>l?D.progress(1)&&f(l):D.resetTo("scrollY",l))};return h&&De.set(h,{y:"+=0"}),e.ignoreCheck=function(z){return Er&&z.type==="touchmove"&&L()||g>1.05&&z.type!=="touchstart"||o.isGesturing||z.touches&&z.touches.length>1},e.onPress=function(){v=!1;var z=g;g=ja((lt.visualViewport&&lt.visualViewport.scale||1)/p),D.pause(),z!==g&&Bu(c,g>1.01?!0:n?!1:"x"),k=_(),I=f(),b(),w=ds},e.onRelease=e.onGestureStart=function(z,j){if(f.offset&&C(),!j)q.restart(!0);else{ct.cache++;var Y=M(),P,K;n&&(P=_(),K=P+Y*.05*-z.velocityX/.227,Y*=S0(_,P,K,Yi(c,Vn)),D.vars.scrollX=A(K)),P=f(),K=P+Y*.05*-z.velocityY/.227,Y*=S0(f,P,K,Yi(c,sn)),D.vars.scrollY=x(K),D.invalidate().duration(Y).play(.01),(Er&&D.vars.scrollY>=l||P>=l-1)&&De.to({},{onUpdate:X,duration:Y})}a&&a(z)},e.onWheel=function(){D._ts&&D.pause(),En()-m>1e3&&(w=0,m=En())},e.onChange=function(z,j,Y,P,K){if(ds!==w&&b(),j&&n&&_(A(P[2]===j?k+(z.startX-z.x):_()+j-P[1])),Y){f.offset&&C();var we=K[2]===Y,Te=we?I+z.startY-z.y:f()+Y-K[1],Ye=x(Te);we&&Te!==Ye&&(I+=Ye-Te),f(Ye)}(Y||j)&&dr()},e.onEnable=function(){Bu(c,n?!1:"x"),ut.addEventListener("refresh",X),fn(lt,"resize",X),f.smooth&&(f.target.style.scrollBehavior="auto",f.smooth=_.smooth=!1),y.enable()},e.onDisable=function(){Bu(c,!0),hn(lt,"resize",X),ut.removeEventListener("refresh",X),y.kill()},e.lockAxis=e.lockAxis!==!1,o=new $t(e),o.iOS=Er,Er&&!f()&&f(1),Er&&De.ticker.add(ki),q=o._dc,D=De.to(o,{ease:"power4",paused:!0,inherit:!1,scrollX:n?"+=0.1":"+=0",scrollY:"+=0.1",modifiers:{scrollY:F1(f,f(),function(){return D.pause()})},onUpdate:dr,onComplete:q.vars.onComplete}),o};ut.sort=function(r){if(Cn(r))return rt.sort(r);var e=lt.pageYOffset||0;return ut.getAll().forEach(function(t){return t._sortY=t.trigger?e+t.trigger.getBoundingClientRect().top:t.start+lt.innerHeight}),rt.sort(r||function(t,n){return(t.vars.refreshPriority||0)*-1e6+(t.vars.containerAnimation?1e6:t._sortY)-((n.vars.containerAnimation?1e6:n._sortY)+(n.vars.refreshPriority||0)*-1e6)})};ut.observe=function(r){return new $t(r)};ut.normalizeScroll=function(r){if(typeof r>"u")return Bn;if(r===!0&&Bn)return Bn.enable();if(r===!1){Bn&&Bn.kill(),Bn=r;return}var e=r instanceof $t?r:z4(r);return Bn&&Bn.target===e.target&&Bn.kill(),xs(e.target)&&(Bn=e),e};ut.core={_getVelocityProp:Kh,_inputObserver:q1,_scrollers:ct,_proxies:Ki,bridge:{ss:function(){wi||Ss("scrollStart"),wi=En()},ref:function(){return Tn}}};w1()&&De.registerPlugin(ut);const k4={titleTop:"DIAMOND",titleBottom:"AWARDS",year:"2026",brand:"DIAMOND AWARDS",thirdTeam:"〇〇チーム",secondTeam:"〇〇チーム",firstTeam:"〇〇チーム",skyOverscan:1.3},Ms={...k4,...window.AWARDS_CONFIG??{}};Oc.registerPlugin(ut);document.querySelectorAll("[data-bind]").forEach(r=>{r.textContent=Ms[r.dataset.bind]??""});document.title=`${Ms.brand} ${Ms.year} | Opening`;const G4=document.querySelector("#stage"),Dt=new yg;Dt.background=new Je(465440);Dt.fog=new wf(730416,.006);const xn=new Yn(42,1,.1,180),Tc=new O(0,5.6,0);xn.position.set(10.8,5.2,17.5);xn.lookAt(Tc);const Ca=new IM({canvas:G4,antialias:!0,powerPreference:"high-performance"});Ca.setPixelRatio(Math.min(window.devicePixelRatio,1.7));Ca.toneMapping=Ac;Ca.toneMappingExposure=1.42;Ca.outputColorSpace=wn;const Wo=new kM(Ca);Wo.addPass(new GM(Dt,xn));const pd=new _a(new he(1,1),.35,.58,.75);Wo.addPass(pd);Wo.addPass(new HM);const B1=120,Ra=new tt(new Wr(1,1),new dn({depthWrite:!1,depthTest:!1,uniforms:{uTime:{value:0}},vertexShader:"varying vec2 vUv; void main(){vUv=uv;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}",fragmentShader:`varying vec2 vUv; uniform float uTime;
      float glow(vec2 p,vec2 c,vec2 s){vec2 q=(p-c)/s;return exp(-dot(q,q)*2.3);}
      void main(){vec3 c=mix(vec3(.014,.08,.10),vec3(.018,.06,.14),vUv.y);
        c+=vec3(.08,.16,.17)*glow(vUv,vec2(.18,.55),vec2(.31,.38));
        c+=vec3(.06,.12,.17)*glow(vUv,vec2(.85,.62),vec2(.34,.42));
        c+=vec3(.13,.08,.05)*glow(vUv,vec2(.48,.15),vec2(.55,.17));
        c+=.012*sin(vUv.x*19.+uTime*.1)*sin(vUv.y*18.);gl_FragColor=vec4(c,1.);}`}));Ra.position.set(0,0,-B1);Ra.renderOrder=-100;Ra.frustumCulled=!1;Dt.add(xn);xn.add(Ra);function V4(){const r=Number(Ms.skyOverscan),e=Number.isFinite(r)?Math.max(1.05,r):1.3,t=B1*Math.tan(lg.degToRad(xn.fov/2))/xn.zoom;Ra.scale.set(2*t*xn.aspect*e,2*t*e,1)}let b0=2026;const Ii=()=>(b0=b0*1664525+1013904223>>>0)/4294967296,tc=new Float32Array(900*3);for(let r=0;r<900;r++)tc[r*3]=(Ii()-.5)*110,tc[r*3+1]=Ii()*48+4,tc[r*3+2]=-25-Ii()*36;const md=new Y0(new Vt,new Rf({color:15853003,size:.1,transparent:!0,opacity:.48,sizeAttenuation:!0,depthWrite:!1}));md.geometry.setAttribute("position",new Ei(tc,3));Dt.add(md);const _d=new tt(new Wr(130,100),new pn({color:1855543,roughness:.95}));_d.rotation.x=-Math.PI/2;_d.position.y=-2.08;Dt.add(_d);const Pa=new ko;Pa.moveTo(0,-14);Pa.lineTo(10,-1);Pa.lineTo(0,10);Pa.lineTo(-10,-1);Pa.closePath();const gd=new tt(new Ff(Pa),new pn({color:9198396,roughness:1,side:oi}));gd.rotation.x=-Math.PI/2;gd.position.y=-2.045;Dt.add(gd);const H4=new Ng(new Vt().setFromPoints([new O(0,-2.01,14),new O(10,-2.01,1),new O(0,-2.01,-10),new O(-10,-2.01,1)]),new X0({color:14275769,transparent:!0,opacity:.68}));Dt.add(H4);const z1=new tt(new Ai(80,4.5,1),new pn({color:1525043,roughness:.95}));z1.position.set(0,1.1,-19);Dt.add(z1);const k1=new tt(new Ai(80,.22,1.15),new pn({color:13940080,metalness:.45,roughness:.5}));k1.position.set(0,3.48,-19);Dt.add(k1);for(let r=0;r<5;r++){const e=new tt(new Ai(90,.55,3),new pn({color:r%2?1390651:2116169,roughness:.9}));e.position.set(0,4.15+r*1.18,-21-r*1.8),Dt.add(e)}const nc=new Float32Array(2600*3);for(let r=0;r<2600;r++)nc[r*3]=(Ii()-.5)*82,nc[r*3+1]=4.2+Ii()*5.4,nc[r*3+2]=-19.8-Ii()*10;const G1=new Y0(new Vt,new Rf({color:14733994,size:.13,transparent:!0,opacity:.42,depthWrite:!1}));G1.geometry.setAttribute("position",new Ei(nc,3));Dt.add(G1);const qc=document.createElement("canvas");qc.width=1024;qc.height=360;const _i=qc.getContext("2d");_i.fillStyle="#102527";_i.fillRect(0,0,1024,360);_i.strokeStyle="#bba16a";_i.lineWidth=8;_i.strokeRect(16,16,992,328);_i.fillStyle="#e8d5a4";_i.textAlign="center";_i.font="bold 45px Arial";_i.fillText("DIAMOND  AWARDS",512,112);_i.font="bold 104px Georgia";_i.fillText("FINAL GAME",512,227);_i.font="bold 30px Arial";_i.fillText("2026  •  THE ROAD TO GLORY",512,290);const V1=new Pf(qc);V1.colorSpace=wn;const H1=new tt(new Wr(13.6,4.8),new Hr({map:V1}));H1.position.set(0,11.2,-26);Dt.add(H1);for(const r of[-19,19]){const e=new tt(new Ji(.16,.24,19,8),new pn({color:6648954,metalness:.65}));e.position.set(r,8.5,-19),Dt.add(e);const t=new tt(new Ai(5.1,2.2,.55),new pn({color:3688779,metalness:.58}));t.position.set(r,18.4,-18.6),Dt.add(t);for(let n=0;n<2;n++)for(let i=0;i<6;i++){const s=new tt(new Df(.28,12),new Hr({color:16774096}));s.position.set(r-2.05+i*.82,17.92+n*.89,-18.28),Dt.add(s)}}Dt.add(new C2(8563377,1.5));const W4=new M2(15136493,1193261,2.1);Dt.add(W4);function xd(r,e,t,n,i){const s=new A2(r,e);s.position.set(t,n,i),Dt.add(s)}xd(16769709,3.6,-7,14,10);xd(14217727,3,8,11,7);xd(16229708,2.5,2,4,-9);const Ec=new E2(16758624,85,30);Ec.position.set(-5,3.5,6);Dt.add(Ec);const Vr=new ur;Dt.add(Vr);const Ta=new ur;Vr.add(Ta);const W1=new qf({color:16104005,metalness:.64,roughness:.23,clearcoat:.42,clearcoatRoughness:.18,transparent:!0}),X1=new pn({color:7819292,metalness:.72,roughness:.3,transparent:!0}),Da=new pn({color:13273656,metalness:.73,roughness:.29}),Y1=new pn({color:1321770,metalness:.28,roughness:.65}),Z1=new pn({color:6636329,metalness:.53,roughness:.43}),X4=new mm(iy);function Bc(r,e,t,n,i,s={}){const a=new zf(r,{font:X4,size:e,depth:t,curveSegments:10,bevelEnabled:!0,bevelThickness:s.bevel??.07,bevelSize:s.bevel??.07,bevelSegments:4});a.computeBoundingBox();const o=a.boundingBox.max.x-a.boundingBox.min.x;a.translate(-o/2,0,0);const l=new tt(a,[s.front??W1,s.side??X1]);return l.position.set(s.x??0,n,i),l.castShadow=!0,(s.parent??Vr).add(l),l}function Xo(r,e,t,n,i,s,a,o=0){const l=new tt(new Ai(r,e,t),a);if(l.position.set(n,i,s),l.castShadow=!0,l.receiveShadow=!0,Vr.add(l),o){const c=new tt(new Ai(r+.05,o,t+.05),Da);c.position.set(n,i+e/2-o/2,s),Vr.add(c)}return l}Xo(17.5,.85,6.8,0,-1.45,0,Y1,.1);Xo(16.2,.35,6.2,0,-.83,0,Z1,.1);Xo(15.1,.23,5.8,0,-.47,0,Da);Xo(13.7,.42,5.1,0,-.12,-.2,Y1,.09);for(const r of[-7.4,7.4])Xo(.1,.32,5.8,r,-.8,0,Da);Bc(Ms.titleTop,1.75,.55,5.95,1.55,{bevel:.065,parent:Ta});Bc(Ms.titleBottom,2.1,.7,3.55,1.8,{bevel:.08,parent:Ta});Bc(Ms.year,.68,.3,2.65,2,{bevel:.03,parent:Ta});function zu(r,e,t,n){const i=new ur;Vr.add(i);const s=new qf({color:e,metalness:.68,roughness:.2,clearcoat:.55,transparent:!0,opacity:0}),a=new pn({color:t,metalness:.72,roughness:.28,transparent:!0,opacity:0}),o=new pn({color:1054489,metalness:.25,roughness:.5,transparent:!0,opacity:0}),l=new ko;l.moveTo(-3,3.35),l.lineTo(3,3.35),l.lineTo(3.1,-.9),l.quadraticCurveTo(2.5,-2.6,0,-3.65),l.quadraticCurveTo(-2.5,-2.6,-3.1,-.9),l.closePath();const c=new Rc(l,{depth:.38,bevelEnabled:!0,bevelSize:.12,bevelThickness:.12,bevelSegments:3,curveSegments:12}),u=new tt(c,s);u.position.set(0,8.25,.5),u.scale.set(1.08,1.08,1),i.add(u);const d=new tt(c,o);d.position.set(0,8.25,.75),i.add(d);const h=new tt(new Ji(1.08,1.08,.22,48),s);h.rotation.x=Math.PI/2,h.position.set(0,10.68,1.36),i.add(h);const f=new tt(new fc(.78,.045,8,64),a);f.position.set(0,10.68,1.52),i.add(f);const _=new tt(new Go(.42,20,16),new pn({color:16771795,transparent:!0,opacity:0}));_.position.set(0,10.68,1.52),i.add(_),Bc(r,3.9,.7,5.75,1.45,{bevel:.1,parent:i,front:s,side:a});const g=new tt(new Ai(3.9,.16,.17),s);g.position.set(0,5.48,1.5),i.add(g);const p=[o,_.material];for(let m=0;m<n;m++){const M=new Hr({color:e,transparent:!0,opacity:0,depthWrite:!1}),w=new tt(new fc(4+m*.3,.026,8,96),M);w.position.set(0,8.4,-.2-m*.12),i.add(w),p.push(M)}return i.visible=!1,{group:i,materials:[s,a,...p]}}const zc={third:zu("3",13075799,6108199,1),second:zu("2",13162473,5464440,2),first:zu("1",16765024,9003028,3)},kc=document.createElement("canvas");kc.width=1024;kc.height=512;const Mt=kc.getContext("2d");Mt.fillStyle="#9a101b";Mt.fillRect(0,0,1024,512);const vd=Mt.createRadialGradient(500,260,40,500,260,520);vd.addColorStop(0,"rgba(230,68,53,.45)");vd.addColorStop(1,"rgba(45,0,18,0)");Mt.fillStyle=vd;Mt.fillRect(0,0,1024,512);Mt.strokeStyle="#e1b75c";Mt.lineWidth=22;Mt.strokeRect(17,17,990,478);Mt.strokeStyle="#f6d889";Mt.lineWidth=3;Mt.strokeRect(37,37,950,438);Mt.fillStyle="#f7d77e";Mt.textAlign="center";Mt.font="bold 140px serif";Mt.fillText("優",240,280);Mt.fillText("勝",790,280);Mt.font="bold 42px Georgia";Mt.fillText("CHAMPIONS",518,400);Mt.font="bold 28px Arial";Mt.fillText("DIAMOND AWARDS 2026",518,88);for(const r of[135,900])Mt.beginPath(),Mt.arc(r,260,49,0,Math.PI*2),Mt.strokeStyle="#f6d889",Mt.lineWidth=6,Mt.stroke(),Mt.beginPath(),Mt.moveTo(r-17,230),Mt.bezierCurveTo(r+8,249,r-8,278,r+17,290),Mt.stroke();const $1=new Pf(kc);$1.colorSpace=wn;const Yo=new ur;Yo.position.set(-6.9,0,-.85);zc.first.group.add(Yo);const Sd=[],J1=[],K1=[],Mo=28,af=12;for(let r=0;r<=af;r++)for(let e=0;e<=Mo;e++){const t=e/Mo,n=r/af;Sd.push(t*13.8,13.65-n*(5.15+.35*Math.sin(t*Math.PI)),0),J1.push(t,1-n)}for(let r=0;r<af;r++)for(let e=0;e<Mo;e++){const t=r*(Mo+1)+e,n=t+Mo+1;K1.push(t,n,t+1,n,n+1,t+1)}const Fr=new Vt;Fr.setAttribute("position",new mt(Sd,3));Fr.setAttribute("uv",new mt(J1,2));Fr.setIndex(K1);Fr.computeVertexNormals();const ku=Float32Array.from(Sd),Q1=new pn({map:$1,side:oi,roughness:.68,metalness:.08,transparent:!0,opacity:0,depthWrite:!1}),Y4=new tt(Fr,Q1);Yo.add(Y4);const Md=new pn({color:14724699,metalness:.68,roughness:.35,transparent:!0,opacity:0});for(let r=0;r<36;r++){const e=r/35,t=new tt(new Ji(.022,.025,.55,5),Md);t.position.set(e*13.8,8.23-.35*Math.sin(e*Math.PI),.03),Yo.add(t)}const j1=new pn({color:1120803,metalness:.58,roughness:.33,transparent:!0,opacity:0}),e_=new tt(new Ji(.105,.14,14.3,10),j1);e_.position.set(-7.02,7.5,-.95);zc.first.group.add(e_);const t_=new tt(new Lf(.3,1.2,8),Md);t_.position.set(-7.02,15.05,-.95);zc.first.group.add(t_);const Gc=document.createElement("canvas");Gc.width=512;Gc.height=256;const Wn=Gc.getContext("2d");Wn.fillStyle="#eadfc9";Wn.fillRect(0,0,512,256);Wn.strokeStyle="#a9453e";Wn.lineWidth=5;for(const r of[135,375]){Wn.beginPath();for(let e=0;e<=256;e+=4){const t=r+32*Math.sin(e/45+(r>250?Math.PI:0));e===0?Wn.moveTo(t,e):Wn.lineTo(t,e)}Wn.stroke(),Wn.lineWidth=3;for(let e=10;e<256;e+=18){const t=r+32*Math.sin(e/45+(r>250?Math.PI:0));Wn.beginPath(),Wn.moveTo(t-11,e-6),Wn.lineTo(t+11,e+6),Wn.stroke()}Wn.lineWidth=5}const n_=new Pf(Gc);n_.colorSpace=wn;const Vc=new tt(new Go(.83,32,24),new qf({map:n_,roughness:.75,clearcoat:.12}));Vc.position.set(7.3,.92,2.6);Vc.rotation.set(.35,-.6,.2);Vr.add(Vc);for(const r of[-5.6,-4.8,4.8,5.6]){const e=new tt(new Of(.15),Da);e.position.set(r,.28,2.55),Vr.add(e)}const Z4=new dn({transparent:!0,depthWrite:!1,side:oi,blending:ic,uniforms:{uOpacity:{value:.57},uColor:{value:new Je(10399743)}},vertexShader:"varying vec2 vUv; void main(){vUv=uv;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}",fragmentShader:"varying vec2 vUv;uniform float uOpacity;uniform vec3 uColor;void main(){float f=pow(1.-vUv.y,.35);float streak=.68+.32*sin(vUv.x*22.);float edge=smoothstep(0.,.1,vUv.y);gl_FragColor=vec4(uColor,uOpacity*f*streak*edge*.13);}"}),i_=[],$4=new O(0,1,0);for(let r=0;r<6;r++){const e=r<3?-1:1,t=e*(10.3+r%3*2.4),n=-1.8-r%3*3.4,i=new O(t,-.35,n),s=new ur;s.position.copy(i),s.add(new tt(new Ji(.36,.47,.7,12),Z1));const a=new tt(new Ji(.39,.39,.1,12),Da);a.position.y=.4,s.add(a);const o=new tt(new Go(.22,10,8),new Hr({color:13227775}));o.position.y=.51,s.add(o),Dt.add(s);const l=new tt(new Ji(2.35,.12,1,28,1,!0),Z4.clone());l.renderOrder=2,Dt.add(l);const c=new Gt;Dt.add(c);const u=new b2(10399743,45,34,Math.PI/9,.9,1.6);u.position.copy(i).add(new O(0,.6,0)),u.target=c,Dt.add(u),i_.push({beam:l,target:c,origin:i,light:u,phase:r*1.7,side:e,order:[0,2,4,1,3,5][r]})}const La=1500,ha=new Float32Array(La*3),r_=new Float32Array(La),of=new Float32Array(La),Ir=new Dg(new Wr(.19,.34),new Hr({color:16777215,transparent:!0,opacity:.87,side:oi,depthWrite:!1}),La);Ir.instanceMatrix.setUsage(k_);for(let r=0;r<La;r++)ha[r*3]=(Ii()-.5)*34,ha[r*3+1]=Ii()*26,ha[r*3+2]=(Ii()-.5)*15+5,r_[r]=1.25+Ii()*3.1,of[r]=Ii()*Math.PI*2,Ir.setColorAt(r,new Je([16106576,11738411,16777215,14337927][r%4]));Ir.count=0;Dt.add(Ir);const Wa=new Gt,Ut={intro:1,third:0,second:0,first:0,beams:.32,beamCount:2,palette:0,flag:0,confettiCount:0,celebration:0},J4=document.querySelector("#intro-copy"),T0=document.querySelector("#rank-third"),E0=document.querySelector("#rank-second"),K4=document.querySelector("#rank-first"),Q4=document.querySelector("#progress-bar"),j4=document.querySelector("#scene-index"),e5=document.querySelector(".scroll-prompt"),t5=Oc.matchMedia();t5.add("(prefers-reduced-motion: reduce)",()=>{Ut.reducedMotion=!0});const yd=Oc.timeline({scrollTrigger:{trigger:"#experience",start:"top top",end:"bottom bottom",scrub:1.15,onUpdate:({progress:r})=>{Q4.style.width=`${(r*100).toFixed(1)}%`,j4.textContent=r<.22?"OPENING":r<.48?"3位":r<.72?"2位":"1位",e5.style.opacity=String(Math.max(.25,1-r*5))}}});yd.to(xn.position,{x:7.3,y:7.2,z:22.4,duration:.9,ease:"power2.inOut"},0).to(Tc,{y:5.25,duration:.9},0).to(J4,{opacity:0,y:-22,duration:.25},.56).to(Ut,{intro:0,third:1,beams:.55,beamCount:2,palette:1,duration:.42},.65).to(T0,{opacity:1,y:0,duration:.37},.81).to(Ut,{confettiCount:90,duration:.35},.88).to(xn.position,{x:4.4,y:7.25,z:24.4,duration:.72,ease:"power2.inOut"},.9).to(T0,{opacity:0,y:-24,duration:.2},1.52).to(Ut,{third:0,second:1,beams:.76,beamCount:4,palette:2,confettiCount:350,duration:.42},1.55).to(E0,{opacity:1,y:0,duration:.32},1.72).to(xn.position,{x:1.5,y:7.35,z:25.8,duration:.8,ease:"power2.inOut"},1.72).to(E0,{opacity:0,y:-24,duration:.2},2.48).to(Ut,{second:0,first:1,beams:1.15,beamCount:6,palette:3,duration:.48},2.5).to(Ut,{flag:1,confettiCount:1500,duration:.65},2.68).to(K4,{opacity:1,y:0,duration:.38},2.72).to(xn.position,{x:0,y:7.75,z:27.5,duration:.85,ease:"power2.inOut"},2.68).to(Tc,{y:5.55,duration:.85},2.68).to(Ut,{celebration:1,duration:.8},3.15);function yo(r){const e=yd.scrollTrigger;window.scrollTo({top:e.start+(e.end-e.start)*r,behavior:"smooth"})}const w0=[0,.31,.59,.9];function bd(r){const e=yd.scrollTrigger.progress,t=r>0?w0.find(n=>n>e+.035):[...w0].reverse().find(n=>n<e-.035);yo(t??(r>0?1:0))}document.querySelector("#next").addEventListener("click",()=>bd(1));document.querySelector("#prev").addEventListener("click",()=>bd(-1));document.querySelector("#replay").addEventListener("click",()=>yo(0));document.querySelector("#fullscreen").addEventListener("click",()=>{document.fullscreenElement?document.exitFullscreen():document.documentElement.requestFullscreen?.()});window.addEventListener("keydown",r=>{["Space","ArrowDown","PageDown","ArrowUp","PageUp","Home","End"].includes(r.code)&&(r.preventDefault(),r.code==="Home"?yo(0):r.code==="End"?yo(1):bd(["ArrowUp","PageUp"].includes(r.code)?-1:1)),r.code==="KeyF"&&document.querySelector("#fullscreen").click(),r.code==="KeyR"&&yo(0)});function s_(){const r=window.innerWidth,e=window.innerHeight;xn.aspect=r/e,xn.fov=r<700?54:42,xn.zoom=r<700?.75:1,xn.updateProjectionMatrix(),V4(),Ca.setSize(r,e,!1),Wo.setSize(r,e),pd.setSize(r,e),ut.refresh()}window.addEventListener("resize",s_);s_();window.scrollTo(0,0);const n5=new I2,Gu=new O,Fl=new O,i5=[10399743,15837820,14148863,16766074].map(r=>new Je(r)),r5=[13273656,10118734,13095392,16104009].map(r=>new Je(r)),ql=new Je,A0=new Je;function C0(r,e,t){const n=Math.min(r.length-1,Math.floor(e)),i=Math.min(r.length-1,n+1);return t.copy(r[n]).lerp(r[i],Math.max(0,Math.min(1,e-n)))}function a_(){const r=n5.getElapsedTime();Ra.material.uniforms.uTime.value=r,C0(i5,Ut.palette,ql),C0(r5,Ut.palette,A0),Da.color.copy(A0),W1.opacity=X1.opacity=Ut.intro,Ta.visible=Ut.intro>.005,Ta.position.y=(Ut.intro-1)*.8;for(const t of["third","second","first"]){const n=zc[t],i=Ut[t];n.group.visible=i>.005,n.group.position.y=(i-1)*1.2,n.materials.forEach((s,a)=>{s.opacity=i*(a<4?1:.5)})}Yo.scale.x=Math.max(.001,Ut.flag),Q1.opacity=Ut.first,Md.opacity=j1.opacity=Ut.first;const e=Fr.attributes.position.array;for(let t=0;t<e.length;t+=3){const n=ku[t]/13.8,i=(13.65-ku[t+1])/5.5;e[t+1]=ku[t+1]+n*.18*Math.sin(r*1.5+n*5),e[t+2]=n*(.28+i*.25)*Math.sin(r*2.2-n*8)}Fr.attributes.position.needsUpdate=!0,Fr.computeVertexNormals();for(const t of i_){const n=Ut.reducedMotion?.25:1;Gu.set(t.origin.x+t.side*(1.5+3.4*Math.sin(r*.36*n+t.phase)),21+2*Math.cos(r*.21+t.phase),t.origin.z-8+4*Math.sin(r*.25*n+t.phase)),Fl.subVectors(Gu,t.origin),t.beam.position.copy(t.origin).addScaledVector(Fl,.5),t.beam.quaternion.setFromUnitVectors($4,Fl.clone().normalize()),t.beam.scale.set(1,Fl.length(),1);const i=Math.max(0,Math.min(1,Ut.beamCount-t.order));t.beam.material.uniforms.uOpacity.value=Ut.beams*i,t.beam.material.uniforms.uColor.value.copy(ql),t.target.position.copy(Gu),t.light.color.copy(ql),t.light.intensity=i*(20+Ut.beams*38)}Ec.color.copy(ql),Ec.intensity=48+Ut.palette*11+13*Math.sin(r*.8),Vc.rotation.y=-.6+r*.26,Ir.count=Math.max(0,Math.min(La,Math.round(Ut.confettiCount)));for(let t=0;t<Ir.count;t++)Wa.position.set(ha[t*3]+.55*Math.sin(r*.75+t),((ha[t*3+1]-r*r_[t])%26+26)%26-2,ha[t*3+2]),Wa.rotation.set(r*(1.2+of[t]*.15),r*.8+of[t],r*1.4+t),Wa.scale.setScalar(t%9===0?1.5:.8+t%5*.13),Wa.updateMatrix(),Ir.setMatrixAt(t,Wa.matrix);Ir.instanceMatrix.needsUpdate=!0,pd.strength=.28+Ut.palette*.08+Ut.celebration*.5,md.material.opacity=.58+.12*Math.sin(r*.43),xn.lookAt(Tc),Wo.render(),requestAnimationFrame(a_)}a_();
