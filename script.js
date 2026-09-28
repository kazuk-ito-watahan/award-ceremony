(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function t(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(i){if(i.ep)return;i.ep=!0;const s=t(i);fetch(i.href,s)}})();const Th="186",zm=0,qf=1,km=2,dl=1,Vm=2,ba=3,rs=0,Vn=1,Ni=2,zi=0,Ua=1,Pl=2,Ff=3,Of=4,Hm=5,Us=100,Gm=101,Wm=102,Xm=103,Ym=104,Zm=200,$m=201,Km=202,Jm=203,bp=204,wp=205,Qm=206,jm=207,e_=208,t_=209,n_=210,i_=211,r_=212,s_=213,a_=214,ou=0,lu=1,cu=2,ja=3,uu=4,hu=5,fu=6,du=7,Ap=0,o_=1,l_=2,ki=0,Eh=1,bh=2,wh=3,Kl=4,Ah=5,Ch=6,Rh=7,Cp=300,ss=301,Qs=302,lc=303,cc=304,Jl=306,pu=1e3,tr=1001,mu=1002,hn=1003,c_=1004,wo=1005,yn=1006,uc=1007,Wr=1008,ni=1009,Rp=1010,Pp=1011,eo=1012,Ph=1013,Gi=1014,qi=1015,Hn=1016,Dh=1017,Lh=1018,to=1020,Dp=35902,Lp=35899,Ip=1021,Np=1022,wi=1023,sr=1026,Xr=1027,Up=1028,Ih=1029,as=1030,Nh=1031,Uh=1033,pl=33776,ml=33777,_l=33778,gl=33779,_u=35840,gu=35841,xu=35842,vu=35843,Su=36196,Mu=37492,yu=37496,Tu=37488,Eu=37489,Dl=37490,bu=37491,wu=37808,Au=37809,Cu=37810,Ru=37811,Pu=37812,Du=37813,Lu=37814,Iu=37815,Nu=37816,Uu=37817,qu=37818,Fu=37819,Ou=37820,Bu=37821,zu=36492,ku=36494,Vu=36495,Hu=36283,Gu=36284,Ll=36285,Wu=36286,u_=3200,Xu=0,h_=1,vr="",jn="srgb",Il="srgb-linear",Nl="linear",gt="srgb",hc=7680,f_=519,d_=512,p_=513,m_=514,qh=515,__=516,g_=517,Fh=518,x_=519,v_=35044,Bf="300 es",Fi=2e3,no=2001;function S_(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function Ul(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function M_(){const r=Ul("canvas");return r.style.display="block",r}const zf={};function kf(...r){const e="THREE."+r.shift();console.log(e,...r)}function qp(r){const e=r[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=r[1];t&&t.isStackTrace?r[0]+=" "+t.getLocation():r[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return r}function Je(...r){r=qp(r);const e="THREE."+r.shift();{const t=r[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...r)}}function mt(...r){r=qp(r);const e="THREE."+r.shift();{const t=r[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...r)}}function Gs(...r){const e=r.join(" ");e in zf||(zf[e]=!0,Je(...r))}function y_(r,e,t){return new Promise(function(n,i){function s(){switch(r.clientWaitSync(e,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:i();break;case r.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:n()}}setTimeout(s,t)})}const T_={[ou]:lu,[cu]:fu,[uu]:du,[ja]:hu,[lu]:ou,[fu]:cu,[du]:uu,[hu]:ja};class ds{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const i=n[e];if(i!==void 0){const s=i.indexOf(t);s!==-1&&i.splice(s,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let s=0,a=i.length;s<a;s++)i[s].call(this,e);e.target=null}}}const _n=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],fc=Math.PI/180,ql=180/Math.PI;function ca(){const r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(_n[r&255]+_n[r>>8&255]+_n[r>>16&255]+_n[r>>24&255]+"-"+_n[e&255]+_n[e>>8&255]+"-"+_n[e>>16&15|64]+_n[e>>24&255]+"-"+_n[t&63|128]+_n[t>>8&255]+"-"+_n[t>>16&255]+_n[t>>24&255]+_n[n&255]+_n[n>>8&255]+_n[n>>16&255]+_n[n>>24&255]).toLowerCase()}function lt(r,e,t){return Math.max(e,Math.min(t,r))}function E_(r,e){return(r%e+e)%e}function dc(r,e,t){return(1-t)*r+t*e}function ma(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:case Uint8ClampedArray:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function On(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}const Pf=class Pf{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=lt(this.x,e.x,t.x),this.y=lt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=lt(this.x,e,t),this.y=lt(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(lt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(lt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*n-a*i+e.x,this.y=s*i+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Pf.prototype.isVector2=!0;let fe=Pf;class ua{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,s,a,o){let l=n[i+0],c=n[i+1],u=n[i+2],d=n[i+3],h=s[a+0],f=s[a+1],_=s[a+2],g=s[a+3];if(d!==g||l!==h||c!==f||u!==_){let p=l*h+c*f+u*_+d*g;p<0&&(h=-h,f=-f,_=-_,g=-g,p=-p);let m=1-o;if(p<.9995){const M=Math.acos(p),A=Math.sin(M);m=Math.sin(m*M)/A,o=Math.sin(o*M)/A,l=l*m+h*o,c=c*m+f*o,u=u*m+_*o,d=d*m+g*o}else{l=l*m+h*o,c=c*m+f*o,u=u*m+_*o,d=d*m+g*o;const M=1/Math.sqrt(l*l+c*c+u*u+d*d);l*=M,c*=M,u*=M,d*=M}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=d}static multiplyQuaternionsFlat(e,t,n,i,s,a){const o=n[i],l=n[i+1],c=n[i+2],u=n[i+3],d=s[a],h=s[a+1],f=s[a+2],_=s[a+3];return e[t]=o*_+u*d+l*f-c*h,e[t+1]=l*_+u*h+c*d-o*f,e[t+2]=c*_+u*f+o*h-l*d,e[t+3]=u*_-o*d-l*h-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,i=e._y,s=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(n/2),u=o(i/2),d=o(s/2),h=l(n/2),f=l(i/2),_=l(s/2);switch(a){case"XYZ":this._x=h*u*d+c*f*_,this._y=c*f*d-h*u*_,this._z=c*u*_+h*f*d,this._w=c*u*d-h*f*_;break;case"YXZ":this._x=h*u*d+c*f*_,this._y=c*f*d-h*u*_,this._z=c*u*_-h*f*d,this._w=c*u*d+h*f*_;break;case"ZXY":this._x=h*u*d-c*f*_,this._y=c*f*d+h*u*_,this._z=c*u*_+h*f*d,this._w=c*u*d-h*f*_;break;case"ZYX":this._x=h*u*d-c*f*_,this._y=c*f*d+h*u*_,this._z=c*u*_-h*f*d,this._w=c*u*d+h*f*_;break;case"YZX":this._x=h*u*d+c*f*_,this._y=c*f*d+h*u*_,this._z=c*u*_-h*f*d,this._w=c*u*d-h*f*_;break;case"XZY":this._x=h*u*d-c*f*_,this._y=c*f*d-h*u*_,this._z=c*u*_+h*f*d,this._w=c*u*d+h*f*_;break;default:Je("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],s=t[8],a=t[1],o=t[5],l=t[9],c=t[2],u=t[6],d=t[10],h=n+o+d;if(h>0){const f=.5/Math.sqrt(h+1);this._w=.25/f,this._x=(u-l)*f,this._y=(s-c)*f,this._z=(a-i)*f}else if(n>o&&n>d){const f=2*Math.sqrt(1+n-o-d);this._w=(u-l)/f,this._x=.25*f,this._y=(i+a)/f,this._z=(s+c)/f}else if(o>d){const f=2*Math.sqrt(1+o-n-d);this._w=(s-c)/f,this._x=(i+a)/f,this._y=.25*f,this._z=(l+u)/f}else{const f=2*Math.sqrt(1+d-n-o);this._w=(a-i)/f,this._x=(s+c)/f,this._y=(l+u)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(lt(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,s=e._z,a=e._w,o=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+a*o+i*c-s*l,this._y=i*u+a*l+s*o-n*c,this._z=s*u+a*c+n*l-i*o,this._w=a*u-n*o-i*l-s*c,this._onChangeCallback(),this}slerp(e,t){let n=e._x,i=e._y,s=e._z,a=e._w,o=this.dot(e);o<0&&(n=-n,i=-i,s=-s,a=-a,o=-o);let l=1-t;if(o<.9995){const c=Math.acos(o),u=Math.sin(c);l=Math.sin(l*c)/u,t=Math.sin(t*c)/u,this._x=this._x*l+n*t,this._y=this._y*l+i*t,this._z=this._z*l+s*t,this._w=this._w*l+a*t,this._onChangeCallback()}else this._x=this._x*l+n*t,this._y=this._y*l+i*t,this._z=this._z*l+s*t,this._w=this._w*l+a*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const Df=class Df{constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Vf.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Vf.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*i,this.y=s[1]*t+s[4]*n+s[7]*i,this.z=s[2]*t+s[5]*n+s[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=e.elements,a=1/(s[3]*t+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*i+s[12])*a,this.y=(s[1]*t+s[5]*n+s[9]*i+s[13])*a,this.z=(s[2]*t+s[6]*n+s[10]*i+s[14])*a,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,s=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*i-o*n),u=2*(o*t-s*i),d=2*(s*n-a*t);return this.x=t+l*c+a*d-o*u,this.y=n+l*u+o*c-s*d,this.z=i+l*d+s*u-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*i,this.y=s[1]*t+s[5]*n+s[9]*i,this.z=s[2]*t+s[6]*n+s[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=lt(this.x,e.x,t.x),this.y=lt(this.y,e.y,t.y),this.z=lt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=lt(this.x,e,t),this.y=lt(this.y,e,t),this.z=lt(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(lt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,s=e.z,a=t.x,o=t.y,l=t.z;return this.x=i*l-s*o,this.y=s*a-n*l,this.z=n*o-i*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return pc.copy(this).projectOnVector(e),this.sub(pc)}reflect(e){return this.sub(pc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(lt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Df.prototype.isVector3=!0;let B=Df;const pc=new B,Vf=new ua,Lf=class Lf{constructor(e,t,n,i,s,a,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,a,o,l,c)}set(e,t,n,i,s,a,o,l,c){const u=this.elements;return u[0]=e,u[1]=i,u[2]=o,u[3]=t,u[4]=s,u[5]=l,u[6]=n,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],u=n[4],d=n[7],h=n[2],f=n[5],_=n[8],g=i[0],p=i[3],m=i[6],M=i[1],A=i[4],v=i[7],y=i[2],E=i[5],w=i[8];return s[0]=a*g+o*M+l*y,s[3]=a*p+o*A+l*E,s[6]=a*m+o*v+l*w,s[1]=c*g+u*M+d*y,s[4]=c*p+u*A+d*E,s[7]=c*m+u*v+d*w,s[2]=h*g+f*M+_*y,s[5]=h*p+f*A+_*E,s[8]=h*m+f*v+_*w,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8];return t*a*u-t*o*c-n*s*u+n*o*l+i*s*c-i*a*l}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],d=u*a-o*c,h=o*l-u*s,f=c*s-a*l,_=t*d+n*h+i*f;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const g=1/_;return e[0]=d*g,e[1]=(i*c-u*n)*g,e[2]=(o*n-i*a)*g,e[3]=h*g,e[4]=(u*t-i*l)*g,e[5]=(i*s-o*t)*g,e[6]=f*g,e[7]=(n*l-c*t)*g,e[8]=(a*t-n*s)*g,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,s,a,o){const l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*a+c*o)+a+e,-i*c,i*l,-i*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return Gs("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(mc.makeScale(e,t)),this}rotate(e){return Gs("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(mc.makeRotation(-e)),this}translate(e,t){return Gs("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(mc.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}};Lf.prototype.isMatrix3=!0;let et=Lf;const mc=new et,Hf=new et().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Gf=new et().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function b_(){const r={enabled:!0,workingColorSpace:Il,spaces:{},convert:function(i,s,a){return this.enabled===!1||s===a||!s||!a||(this.spaces[s].transfer===gt&&(i.r=ir(i.r),i.g=ir(i.g),i.b=ir(i.b)),this.spaces[s].primaries!==this.spaces[a].primaries&&(i.applyMatrix3(this.spaces[s].toXYZ),i.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===gt&&(i.r=Ws(i.r),i.g=Ws(i.g),i.b=Ws(i.b))),i},workingToColorSpace:function(i,s){return this.convert(i,this.workingColorSpace,s)},colorSpaceToWorking:function(i,s){return this.convert(i,s,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===vr?Nl:this.spaces[i].transfer},getToneMappingMode:function(i){return this.spaces[i].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(i,s=this.workingColorSpace){return i.fromArray(this.spaces[s].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,s,a){return i.copy(this.spaces[s].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(i,s){return Gs("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),r.workingToColorSpace(i,s)},toWorkingColorSpace:function(i,s){return Gs("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),r.colorSpaceToWorking(i,s)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return r.define({[Il]:{primaries:e,whitePoint:n,transfer:Nl,toXYZ:Hf,fromXYZ:Gf,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:jn},outputColorSpaceConfig:{drawingBufferColorSpace:jn}},[jn]:{primaries:e,whitePoint:n,transfer:gt,toXYZ:Hf,fromXYZ:Gf,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:jn}}}),r}const ht=b_();function ir(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function Ws(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let vs;class w_{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{vs===void 0&&(vs=Ul("canvas")),vs.width=e.width,vs.height=e.height;const i=vs.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=vs}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Ul("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),s=i.data;for(let a=0;a<s.length;a++)s[a]=ir(s[a]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(ir(t[n]/255)*255):t[n]=ir(t[n]);return{data:t,width:e.width,height:e.height}}else return Je("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let A_=0;class Oh{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:A_++}),this.uuid=ca(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let a=0,o=i.length;a<o;a++)i[a].isDataTexture?s.push(_c(i[a].image)):s.push(_c(i[a]))}else s=_c(i);n.url=s}return t||(e.images[this.uuid]=n),n}}function _c(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?w_.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(Je("Texture: Unable to serialize Texture."),{})}let C_=0;const gc=new B;class qn extends ds{constructor(e=qn.DEFAULT_IMAGE,t=qn.DEFAULT_MAPPING,n=tr,i=tr,s=yn,a=Wr,o=wi,l=ni,c=qn.DEFAULT_ANISOTROPY,u=vr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:C_++}),this.uuid=ca(),this.name="",this.source=new Oh(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new fe(0,0),this.repeat=new fe(1,1),this.center=new fe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new et,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(gc).x}get height(){return this.source.getSize(gc).y}get depth(){return this.source.getSize(gc).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const n=e[t];if(n===void 0){Je(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){Je(`Texture.setValues(): property '${t}' does not exist.`);continue}i&&n&&i.isVector2&&n.isVector2||i&&n&&i.isVector3&&n.isVector3||i&&n&&i.isMatrix3&&n.isMatrix3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Cp)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case pu:e.x=e.x-Math.floor(e.x);break;case tr:e.x=e.x<0?0:1;break;case mu:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case pu:e.y=e.y-Math.floor(e.y);break;case tr:e.y=e.y<0?0:1;break;case mu:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}qn.DEFAULT_IMAGE=null;qn.DEFAULT_MAPPING=Cp;qn.DEFAULT_ANISOTROPY=1;const If=class If{constructor(e=0,t=0,n=0,i=1){this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*i+a[12]*s,this.y=a[1]*t+a[5]*n+a[9]*i+a[13]*s,this.z=a[2]*t+a[6]*n+a[10]*i+a[14]*s,this.w=a[3]*t+a[7]*n+a[11]*i+a[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,s;const l=e.elements,c=l[0],u=l[4],d=l[8],h=l[1],f=l[5],_=l[9],g=l[2],p=l[6],m=l[10];if(Math.abs(u-h)<.01&&Math.abs(d-g)<.01&&Math.abs(_-p)<.01){if(Math.abs(u+h)<.1&&Math.abs(d+g)<.1&&Math.abs(_+p)<.1&&Math.abs(c+f+m-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const A=(c+1)/2,v=(f+1)/2,y=(m+1)/2,E=(u+h)/4,w=(d+g)/4,x=(_+p)/4;return A>v&&A>y?A<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(A),i=E/n,s=w/n):v>y?v<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(v),n=E/i,s=x/i):y<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(y),n=w/s,i=x/s),this.set(n,i,s,t),this}let M=Math.sqrt((p-_)*(p-_)+(d-g)*(d-g)+(h-u)*(h-u));return Math.abs(M)<.001&&(M=1),this.x=(p-_)/M,this.y=(d-g)/M,this.z=(h-u)/M,this.w=Math.acos((c+f+m-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=lt(this.x,e.x,t.x),this.y=lt(this.y,e.y,t.y),this.z=lt(this.z,e.z,t.z),this.w=lt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=lt(this.x,e,t),this.y=lt(this.y,e,t),this.z=lt(this.z,e,t),this.w=lt(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(lt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};If.prototype.isVector4=!0;let Nt=If;class R_ extends ds{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:yn,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new Nt(0,0,e,t),this.scissorTest=!1,this.viewport=new Nt(0,0,e,t),this.textures=[];const i={width:e,height:t,depth:n.depth},s=new qn(i),a=n.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){const t={minFilter:yn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,s=this.textures.length;i<s;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=n,this.textures[i].isData3DTexture!==!0&&(this.textures[i].isArrayTexture=this.textures[i].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const i=Object.assign({},e.textures[t].image);this.textures[t].source=new Oh(i)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){const t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Fn extends R_{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class Fp extends qn{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=hn,this.minFilter=hn,this.wrapR=tr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class P_ extends qn{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=hn,this.minFilter=hn,this.wrapR=tr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}}const $l=class $l{constructor(e,t,n,i,s,a,o,l,c,u,d,h,f,_,g,p){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,a,o,l,c,u,d,h,f,_,g,p)}set(e,t,n,i,s,a,o,l,c,u,d,h,f,_,g,p){const m=this.elements;return m[0]=e,m[4]=t,m[8]=n,m[12]=i,m[1]=s,m[5]=a,m[9]=o,m[13]=l,m[2]=c,m[6]=u,m[10]=d,m[14]=h,m[3]=f,m[7]=_,m[11]=g,m[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new $l().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const t=this.elements,n=e.elements,i=1/Ss.setFromMatrixColumn(e,0).length(),s=1/Ss.setFromMatrixColumn(e,1).length(),a=1/Ss.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,s=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(i),c=Math.sin(i),u=Math.cos(s),d=Math.sin(s);if(e.order==="XYZ"){const h=a*u,f=a*d,_=o*u,g=o*d;t[0]=l*u,t[4]=-l*d,t[8]=c,t[1]=f+_*c,t[5]=h-g*c,t[9]=-o*l,t[2]=g-h*c,t[6]=_+f*c,t[10]=a*l}else if(e.order==="YXZ"){const h=l*u,f=l*d,_=c*u,g=c*d;t[0]=h+g*o,t[4]=_*o-f,t[8]=a*c,t[1]=a*d,t[5]=a*u,t[9]=-o,t[2]=f*o-_,t[6]=g+h*o,t[10]=a*l}else if(e.order==="ZXY"){const h=l*u,f=l*d,_=c*u,g=c*d;t[0]=h-g*o,t[4]=-a*d,t[8]=_+f*o,t[1]=f+_*o,t[5]=a*u,t[9]=g-h*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){const h=a*u,f=a*d,_=o*u,g=o*d;t[0]=l*u,t[4]=_*c-f,t[8]=h*c+g,t[1]=l*d,t[5]=g*c+h,t[9]=f*c-_,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){const h=a*l,f=a*c,_=o*l,g=o*c;t[0]=l*u,t[4]=g-h*d,t[8]=_*d+f,t[1]=d,t[5]=a*u,t[9]=-o*u,t[2]=-c*u,t[6]=f*d+_,t[10]=h-g*d}else if(e.order==="XZY"){const h=a*l,f=a*c,_=o*l,g=o*c;t[0]=l*u,t[4]=-d,t[8]=c*u,t[1]=h*d+g,t[5]=a*u,t[9]=f*d-_,t[2]=_*d-f,t[6]=o*u,t[10]=g*d+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(D_,e,L_)}lookAt(e,t,n){const i=this.elements;return $n.subVectors(e,t),$n.lengthSq()===0&&($n.z=1),$n.normalize(),fr.crossVectors(n,$n),fr.lengthSq()===0&&(Math.abs(n.z)===1?$n.x+=1e-4:$n.z+=1e-4,$n.normalize(),fr.crossVectors(n,$n)),fr.normalize(),Ao.crossVectors($n,fr),i[0]=fr.x,i[4]=Ao.x,i[8]=$n.x,i[1]=fr.y,i[5]=Ao.y,i[9]=$n.y,i[2]=fr.z,i[6]=Ao.z,i[10]=$n.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],u=n[1],d=n[5],h=n[9],f=n[13],_=n[2],g=n[6],p=n[10],m=n[14],M=n[3],A=n[7],v=n[11],y=n[15],E=i[0],w=i[4],x=i[8],T=i[12],C=i[1],L=i[5],D=i[9],k=i[13],I=i[2],F=i[6],X=i[10],z=i[14],j=i[3],Y=i[7],P=i[11],J=i[15];return s[0]=a*E+o*C+l*I+c*j,s[4]=a*w+o*L+l*F+c*Y,s[8]=a*x+o*D+l*X+c*P,s[12]=a*T+o*k+l*z+c*J,s[1]=u*E+d*C+h*I+f*j,s[5]=u*w+d*L+h*F+f*Y,s[9]=u*x+d*D+h*X+f*P,s[13]=u*T+d*k+h*z+f*J,s[2]=_*E+g*C+p*I+m*j,s[6]=_*w+g*L+p*F+m*Y,s[10]=_*x+g*D+p*X+m*P,s[14]=_*T+g*k+p*z+m*J,s[3]=M*E+A*C+v*I+y*j,s[7]=M*w+A*L+v*F+y*Y,s[11]=M*x+A*D+v*X+y*P,s[15]=M*T+A*k+v*z+y*J,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],s=e[12],a=e[1],o=e[5],l=e[9],c=e[13],u=e[2],d=e[6],h=e[10],f=e[14],_=e[3],g=e[7],p=e[11],m=e[15],M=l*f-c*h,A=o*f-c*d,v=o*h-l*d,y=a*f-c*u,E=a*h-l*u,w=a*d-o*u;return t*(g*M-p*A+m*v)-n*(_*M-p*y+m*E)+i*(_*A-g*y+m*w)-s*(_*v-g*E+p*w)}determinantAffine(){const e=this.elements,t=e[0],n=e[4],i=e[8],s=e[1],a=e[5],o=e[9],l=e[2],c=e[6],u=e[10];return t*(a*u-o*c)-n*(s*u-o*l)+i*(s*c-a*l)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],d=e[9],h=e[10],f=e[11],_=e[12],g=e[13],p=e[14],m=e[15],M=t*o-n*a,A=t*l-i*a,v=t*c-s*a,y=n*l-i*o,E=n*c-s*o,w=i*c-s*l,x=u*g-d*_,T=u*p-h*_,C=u*m-f*_,L=d*p-h*g,D=d*m-f*g,k=h*m-f*p,I=M*k-A*D+v*L+y*C-E*T+w*x;if(I===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const F=1/I;return e[0]=(o*k-l*D+c*L)*F,e[1]=(i*D-n*k-s*L)*F,e[2]=(g*w-p*E+m*y)*F,e[3]=(h*E-d*w-f*y)*F,e[4]=(l*C-a*k-c*T)*F,e[5]=(t*k-i*C+s*T)*F,e[6]=(p*v-_*w-m*A)*F,e[7]=(u*w-h*v+f*A)*F,e[8]=(a*D-o*C+c*x)*F,e[9]=(n*C-t*D-s*x)*F,e[10]=(_*E-g*v+m*M)*F,e[11]=(d*v-u*E-f*M)*F,e[12]=(o*T-a*L-l*x)*F,e[13]=(t*L-n*T+i*x)*F,e[14]=(g*A-_*y-p*M)*F,e[15]=(u*y-d*A+h*M)*F,this}scale(e){const t=this.elements,n=e.x,i=e.y,s=e.z;return t[0]*=n,t[4]*=i,t[8]*=s,t[1]*=n,t[5]*=i,t[9]*=s,t[2]*=n,t[6]*=i,t[10]*=s,t[3]*=n,t[7]*=i,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),s=1-n,a=e.x,o=e.y,l=e.z,c=s*a,u=s*o;return this.set(c*a+n,c*o-i*l,c*l+i*o,0,c*o+i*l,u*o+n,u*l-i*a,0,c*l-i*o,u*l+i*a,s*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,s,a){return this.set(1,n,s,0,e,1,a,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,s=t._x,a=t._y,o=t._z,l=t._w,c=s+s,u=a+a,d=o+o,h=s*c,f=s*u,_=s*d,g=a*u,p=a*d,m=o*d,M=l*c,A=l*u,v=l*d,y=n.x,E=n.y,w=n.z;return i[0]=(1-(g+m))*y,i[1]=(f+v)*y,i[2]=(_-A)*y,i[3]=0,i[4]=(f-v)*E,i[5]=(1-(h+m))*E,i[6]=(p+M)*E,i[7]=0,i[8]=(_+A)*w,i[9]=(p-M)*w,i[10]=(1-(h+g))*w,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;e.x=i[12],e.y=i[13],e.z=i[14];const s=this.determinantAffine();if(s===0)return n.set(1,1,1),t.identity(),this;let a=Ss.set(i[0],i[1],i[2]).length();const o=Ss.set(i[4],i[5],i[6]).length(),l=Ss.set(i[8],i[9],i[10]).length();s<0&&(a=-a),Mi.copy(this);const c=1/a,u=1/o,d=1/l;return Mi.elements[0]*=c,Mi.elements[1]*=c,Mi.elements[2]*=c,Mi.elements[4]*=u,Mi.elements[5]*=u,Mi.elements[6]*=u,Mi.elements[8]*=d,Mi.elements[9]*=d,Mi.elements[10]*=d,t.setFromRotationMatrix(Mi),n.x=a,n.y=o,n.z=l,this}makePerspective(e,t,n,i,s,a,o=Fi,l=!1){const c=this.elements,u=2*s/(t-e),d=2*s/(n-i),h=(t+e)/(t-e),f=(n+i)/(n-i);let _,g;if(l)_=s/(a-s),g=a*s/(a-s);else if(o===Fi)_=-(a+s)/(a-s),g=-2*a*s/(a-s);else if(o===no)_=-a/(a-s),g=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=h,c[12]=0,c[1]=0,c[5]=d,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=_,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,i,s,a,o=Fi,l=!1){const c=this.elements,u=2/(t-e),d=2/(n-i),h=-(t+e)/(t-e),f=-(n+i)/(n-i);let _,g;if(l)_=1/(a-s),g=a/(a-s);else if(o===Fi)_=-2/(a-s),g=-(a+s)/(a-s);else if(o===no)_=-1/(a-s),g=-s/(a-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=0,c[12]=h,c[1]=0,c[5]=d,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=_,c[14]=g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}};$l.prototype.isMatrix4=!0;let Dt=$l;const Ss=new B,Mi=new Dt,D_=new B(0,0,0),L_=new B(1,1,1),fr=new B,Ao=new B,$n=new B,Wf=new Dt,Xf=new ua;class Cr{constructor(e=0,t=0,n=0,i=Cr.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,s=i[0],a=i[4],o=i[8],l=i[1],c=i[5],u=i[9],d=i[2],h=i[6],f=i[10];switch(t){case"XYZ":this._y=Math.asin(lt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,f),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-lt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin(lt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-d,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-lt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(h,f),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(lt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-lt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-u,f),this._y=0);break;default:Je("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Wf.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Wf,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Xf.setFromEuler(this),this.setFromQuaternion(Xf,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Cr.DEFAULT_ORDER="XYZ";class Op{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let I_=0;const Yf=new B,Ms=new ua,Yi=new Dt,Co=new B,_a=new B,N_=new B,U_=new ua,Zf=new B(1,0,0),$f=new B(0,1,0),Kf=new B(0,0,1),Jf={type:"added"},q_={type:"removed"},ys={type:"childadded",child:null},xc={type:"childremoved",child:null};class Gt extends ds{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:I_++}),this.uuid=ca(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Gt.DEFAULT_UP.clone();const e=new B,t=new Cr,n=new ua,i=new B(1,1,1);function s(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Dt},normalMatrix:{value:new et}}),this.matrix=new Dt,this.matrixWorld=new Dt,this.matrixAutoUpdate=Gt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Gt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Op,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ms.setFromAxisAngle(e,t),this.quaternion.multiply(Ms),this}rotateOnWorldAxis(e,t){return Ms.setFromAxisAngle(e,t),this.quaternion.premultiply(Ms),this}rotateX(e){return this.rotateOnAxis(Zf,e)}rotateY(e){return this.rotateOnAxis($f,e)}rotateZ(e){return this.rotateOnAxis(Kf,e)}translateOnAxis(e,t){return Yf.copy(e).applyQuaternion(this.quaternion),this.position.add(Yf.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Zf,e)}translateY(e){return this.translateOnAxis($f,e)}translateZ(e){return this.translateOnAxis(Kf,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Yi.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Co.copy(e):Co.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),_a.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Yi.lookAt(_a,Co,this.up):Yi.lookAt(Co,_a,this.up),this.quaternion.setFromRotationMatrix(Yi),i&&(Yi.extractRotation(i.matrixWorld),Ms.setFromRotationMatrix(Yi),this.quaternion.premultiply(Ms.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(mt("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Jf),ys.child=e,this.dispatchEvent(ys),ys.child=null):mt("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(q_),xc.child=e,this.dispatchEvent(xc),xc.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Yi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Yi.multiply(e.parent.matrixWorld)),e.applyMatrix4(Yi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Jf),ys.child=e,this.dispatchEvent(ys),ys.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const i=this.children;for(let s=0,a=i.length;s<a;s++)i[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(_a,e,N_),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(_a,U_,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,n=e.y,i=e.z,s=this.matrix.elements;s[12]+=t-s[0]*t-s[4]*n-s[8]*i,s[13]+=n-s[1]*t-s[5]*n-s[9]*i,s[14]+=i-s[2]*t-s[6]*n-s[10]*i}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){const s=this.children;for(let a=0,o=s.length;a<o;a++)s[a].updateWorldMatrix(!1,!0,n)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,i.name=this.name,i.castShadow=this.castShadow,i.receiveShadow=this.receiveShadow,i.visible=this.visible,i.frustumCulled=this.frustumCulled,i.renderOrder=this.renderOrder,i.static=this.static,i.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.pivot!==null&&(i.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(i.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(i.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),i.instanceInfo=this._instanceInfo.map(o=>({...o})),i.availableInstanceIds=this._availableInstanceIds.slice(),i.availableGeometryIds=this._availableGeometryIds.slice(),i.nextIndexStart=this._nextIndexStart,i.nextVertexStart=this._nextVertexStart,i.geometryCount=this._geometryCount,i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.matricesTexture=this._matricesTexture.toJSON(e),i.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(i.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(i.boundingBox=this.boundingBox.toJSON()));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const d=l[c];s(e.shapes,d)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(e.materials,this.material[l]));i.material=o}else i.material=s(e.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];i.animations.push(s(e.animations,l))}}if(t){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),u=a(e.images),d=a(e.shapes),h=a(e.skeletons),f=a(e.animations),_=a(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),d.length>0&&(n.shapes=d),h.length>0&&(n.skeletons=h),f.length>0&&(n.animations=f),_.length>0&&(n.nodes=_)}return n.object=i,n;function a(o){const l=[];for(const c in o){const u=o[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}}Gt.DEFAULT_UP=new B(0,1,0);Gt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Gt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Os extends Gt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const F_={type:"move"};class vc{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Os,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Os,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new B,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new B),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Os,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new B,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new B,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,s=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const g of e.hand.values()){const p=t.getJointPose(g,n),m=this._getHandJoint(c,g);p!==null&&(m.matrix.fromArray(p.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=p.radius),m.visible=p!==null}const u=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],h=u.position.distanceTo(d.position),f=.02,_=.005;c.inputState.pinching&&h>f+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&h<=f-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(F_)))}return o!==null&&(o.visible=i!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Os;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const Bp={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},dr={h:0,s:0,l:0},Ro={h:0,s:0,l:0};function Sc(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+(e-r)*6*t:t<1/2?e:t<2/3?r+(e-r)*6*(2/3-t):r}class je{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=jn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,ht.colorSpaceToWorking(this,t),this}setRGB(e,t,n,i=ht.workingColorSpace){return this.r=e,this.g=t,this.b=n,ht.colorSpaceToWorking(this,i),this}setHSL(e,t,n,i=ht.workingColorSpace){if(e=E_(e,1),t=lt(t,0,1),n=lt(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,a=2*n-s;this.r=Sc(a,s,e+1/3),this.g=Sc(a,s,e),this.b=Sc(a,s,e-1/3)}return ht.colorSpaceToWorking(this,i),this}setStyle(e,t=jn){function n(s){s!==void 0&&parseFloat(s)<1&&Je("Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=i[1],o=i[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:Je("Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=i[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);Je("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=jn){const n=Bp[e.toLowerCase()];return n!==void 0?this.setHex(n,t):Je("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ir(e.r),this.g=ir(e.g),this.b=ir(e.b),this}copyLinearToSRGB(e){return this.r=Ws(e.r),this.g=Ws(e.g),this.b=Ws(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=jn){return ht.workingToColorSpace(gn.copy(this),e),Math.round(lt(gn.r*255,0,255))*65536+Math.round(lt(gn.g*255,0,255))*256+Math.round(lt(gn.b*255,0,255))}getHexString(e=jn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=ht.workingColorSpace){ht.workingToColorSpace(gn.copy(this),t);const n=gn.r,i=gn.g,s=gn.b,a=Math.max(n,i,s),o=Math.min(n,i,s);let l,c;const u=(o+a)/2;if(o===a)l=0,c=0;else{const d=a-o;switch(c=u<=.5?d/(a+o):d/(2-a-o),a){case n:l=(i-s)/d+(i<s?6:0);break;case i:l=(s-n)/d+2;break;case s:l=(n-i)/d+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=ht.workingColorSpace){return ht.workingToColorSpace(gn.copy(this),t),e.r=gn.r,e.g=gn.g,e.b=gn.b,e}getStyle(e=jn){ht.workingToColorSpace(gn.copy(this),e);const t=gn.r,n=gn.g,i=gn.b;return e!==jn?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(dr),this.setHSL(dr.h+e,dr.s+t,dr.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(dr),e.getHSL(Ro);const n=dc(dr.h,Ro.h,t),i=dc(dr.s,Ro.s,t),s=dc(dr.l,Ro.l,t);return this.setHSL(n,i,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,i=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*i,this.g=s[1]*t+s[4]*n+s[7]*i,this.b=s[2]*t+s[5]*n+s[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const gn=new je;je.NAMES=Bp;class Bh{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new je(e),this.density=t}clone(){return new Bh(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class O_ extends Gt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Cr,this.environmentIntensity=1,this.environmentRotation=new Cr,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}}const yi=new B,Zi=new B,Mc=new B,$i=new B,Ts=new B,Es=new B,Qf=new B,yc=new B,Tc=new B,Ec=new B,bc=new Nt,wc=new Nt,Ac=new Nt;class bi{constructor(e=new B,t=new B,n=new B){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),yi.subVectors(e,t),i.cross(yi);const s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(e,t,n,i,s){yi.subVectors(i,t),Zi.subVectors(n,t),Mc.subVectors(e,t);const a=yi.dot(yi),o=yi.dot(Zi),l=yi.dot(Mc),c=Zi.dot(Zi),u=Zi.dot(Mc),d=a*c-o*o;if(d===0)return s.set(0,0,0),null;const h=1/d,f=(c*l-o*u)*h,_=(a*u-o*l)*h;return s.set(1-f-_,_,f)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,$i)===null?!1:$i.x>=0&&$i.y>=0&&$i.x+$i.y<=1}static getInterpolation(e,t,n,i,s,a,o,l){return this.getBarycoord(e,t,n,i,$i)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,$i.x),l.addScaledVector(a,$i.y),l.addScaledVector(o,$i.z),l)}static getInterpolatedAttribute(e,t,n,i,s,a){return bc.setScalar(0),wc.setScalar(0),Ac.setScalar(0),bc.fromBufferAttribute(e,t),wc.fromBufferAttribute(e,n),Ac.fromBufferAttribute(e,i),a.setScalar(0),a.addScaledVector(bc,s.x),a.addScaledVector(wc,s.y),a.addScaledVector(Ac,s.z),a}static isFrontFacing(e,t,n,i){return yi.subVectors(n,t),Zi.subVectors(e,t),yi.cross(Zi).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return yi.subVectors(this.c,this.b),Zi.subVectors(this.a,this.b),yi.cross(Zi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return bi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return bi.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,i,s){return bi.getInterpolation(e,this.a,this.b,this.c,t,n,i,s)}containsPoint(e){return bi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return bi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,s=this.c;let a,o;Ts.subVectors(i,n),Es.subVectors(s,n),yc.subVectors(e,n);const l=Ts.dot(yc),c=Es.dot(yc);if(l<=0&&c<=0)return t.copy(n);Tc.subVectors(e,i);const u=Ts.dot(Tc),d=Es.dot(Tc);if(u>=0&&d<=u)return t.copy(i);const h=l*d-u*c;if(h<=0&&l>=0&&u<=0)return a=l/(l-u),t.copy(n).addScaledVector(Ts,a);Ec.subVectors(e,s);const f=Ts.dot(Ec),_=Es.dot(Ec);if(_>=0&&f<=_)return t.copy(s);const g=f*c-l*_;if(g<=0&&c>=0&&_<=0)return o=c/(c-_),t.copy(n).addScaledVector(Es,o);const p=u*_-f*d;if(p<=0&&d-u>=0&&f-_>=0)return Qf.subVectors(s,i),o=(d-u)/(d-u+(f-_)),t.copy(i).addScaledVector(Qf,o);const m=1/(p+g+h);return a=g*m,o=h*m,t.copy(n).addScaledVector(Ts,a).addScaledVector(Es,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class xo{constructor(e=new B(1/0,1/0,1/0),t=new B(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Ti.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Ti.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Ti.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Ti):Ti.fromBufferAttribute(s,a),Ti.applyMatrix4(e.matrixWorld),this.expandByPoint(Ti);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Po.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Po.copy(n.boundingBox)),Po.applyMatrix4(e.matrixWorld),this.union(Po)}const i=e.children;for(let s=0,a=i.length;s<a;s++)this.expandByObject(i[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Ti),Ti.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ga),Do.subVectors(this.max,ga),bs.subVectors(e.a,ga),ws.subVectors(e.b,ga),As.subVectors(e.c,ga),pr.subVectors(ws,bs),mr.subVectors(As,ws),Ur.subVectors(bs,As);let t=[0,-pr.z,pr.y,0,-mr.z,mr.y,0,-Ur.z,Ur.y,pr.z,0,-pr.x,mr.z,0,-mr.x,Ur.z,0,-Ur.x,-pr.y,pr.x,0,-mr.y,mr.x,0,-Ur.y,Ur.x,0];return!Cc(t,bs,ws,As,Do)||(t=[1,0,0,0,1,0,0,0,1],!Cc(t,bs,ws,As,Do))?!1:(Lo.crossVectors(pr,mr),t=[Lo.x,Lo.y,Lo.z],Cc(t,bs,ws,As,Do))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Ti).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Ti).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Ki[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ki[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ki[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ki[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ki[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ki[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ki[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ki[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ki),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Ki=[new B,new B,new B,new B,new B,new B,new B,new B],Ti=new B,Po=new xo,bs=new B,ws=new B,As=new B,pr=new B,mr=new B,Ur=new B,ga=new B,Do=new B,Lo=new B,qr=new B;function Cc(r,e,t,n,i){for(let s=0,a=r.length-3;s<=a;s+=3){qr.fromArray(r,s);const o=i.x*Math.abs(qr.x)+i.y*Math.abs(qr.y)+i.z*Math.abs(qr.z),l=e.dot(qr),c=t.dot(qr),u=n.dot(qr);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}const Zt=new B,Io=new fe;let B_=0;class Vi extends ds{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:B_++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=v_,this.updateRanges=[],this.gpuType=qi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Io.fromBufferAttribute(this,t),Io.applyMatrix3(e),this.setXY(t,Io.x,Io.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Zt.fromBufferAttribute(this,t),Zt.applyMatrix3(e),this.setXYZ(t,Zt.x,Zt.y,Zt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Zt.fromBufferAttribute(this,t),Zt.applyMatrix4(e),this.setXYZ(t,Zt.x,Zt.y,Zt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Zt.fromBufferAttribute(this,t),Zt.applyNormalMatrix(e),this.setXYZ(t,Zt.x,Zt.y,Zt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Zt.fromBufferAttribute(this,t),Zt.transformDirection(e),this.setXYZ(t,Zt.x,Zt.y,Zt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=ma(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=On(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=ma(t,this.array)),t}setX(e,t){return this.normalized&&(t=On(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=ma(t,this.array)),t}setY(e,t){return this.normalized&&(t=On(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=ma(t,this.array)),t}setZ(e,t){return this.normalized&&(t=On(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=ma(t,this.array)),t}setW(e,t){return this.normalized&&(t=On(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=On(t,this.array),n=On(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=On(t,this.array),n=On(n,this.array),i=On(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e*=this.itemSize,this.normalized&&(t=On(t,this.array),n=On(n,this.array),i=On(i,this.array),s=On(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}}class zp extends Vi{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class kp extends Vi{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class Bt extends Vi{constructor(e,t,n){super(new Float32Array(e),t,n)}}const z_=new xo,xa=new B,Rc=new B;class Ql{constructor(e=new B,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):z_.setFromPoints(e).getCenter(n);let i=0;for(let s=0,a=e.length;s<a;s++)i=Math.max(i,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;xa.subVectors(e,this.center);const t=xa.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(xa,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Rc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(xa.copy(e.center).add(Rc)),this.expandByPoint(xa.copy(e.center).sub(Rc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let k_=0;const di=new Dt,Pc=new Gt,Cs=new B,Kn=new xo,va=new xo,an=new B;class En extends ds{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:k_++}),this.uuid=ca(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(S_(e)?kp:zp)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new et().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return di.makeRotationFromQuaternion(e),this.applyMatrix4(di),this}rotateX(e){return di.makeRotationX(e),this.applyMatrix4(di),this}rotateY(e){return di.makeRotationY(e),this.applyMatrix4(di),this}rotateZ(e){return di.makeRotationZ(e),this.applyMatrix4(di),this}translate(e,t,n){return di.makeTranslation(e,t,n),this.applyMatrix4(di),this}scale(e,t,n){return di.makeScale(e,t,n),this.applyMatrix4(di),this}lookAt(e){return Pc.lookAt(e),Pc.updateMatrix(),this.applyMatrix4(Pc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Cs).negate(),this.translate(Cs.x,Cs.y,Cs.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let i=0,s=e.length;i<s;i++){const a=e[i];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Bt(n,3))}else{const n=Math.min(e.length,t.count);for(let i=0;i<n;i++){const s=e[i];t.setXYZ(i,s.x,s.y,s.z||0)}e.length>t.count&&Je("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new xo);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){mt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new B(-1/0,-1/0,-1/0),new B(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const s=t[n];Kn.setFromBufferAttribute(s),this.morphTargetsRelative?(an.addVectors(this.boundingBox.min,Kn.min),this.boundingBox.expandByPoint(an),an.addVectors(this.boundingBox.max,Kn.max),this.boundingBox.expandByPoint(an)):(this.boundingBox.expandByPoint(Kn.min),this.boundingBox.expandByPoint(Kn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&mt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ql);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){mt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new B,1/0);return}if(e){const n=this.boundingSphere.center;if(Kn.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){const o=t[s];va.setFromBufferAttribute(o),this.morphTargetsRelative?(an.addVectors(Kn.min,va.min),Kn.expandByPoint(an),an.addVectors(Kn.max,va.max),Kn.expandByPoint(an)):(Kn.expandByPoint(va.min),Kn.expandByPoint(va.max))}Kn.getCenter(n);let i=0;for(let s=0,a=e.count;s<a;s++)an.fromBufferAttribute(e,s),i=Math.max(i,n.distanceToSquared(an));if(t)for(let s=0,a=t.length;s<a;s++){const o=t[s],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)an.fromBufferAttribute(o,c),l&&(Cs.fromBufferAttribute(e,c),an.add(Cs)),i=Math.max(i,n.distanceToSquared(an))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&mt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){mt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,i=t.normal,s=t.uv;let a=this.getAttribute("tangent");(a===void 0||a.count!==n.count)&&(a=new Vi(new Float32Array(4*n.count),4),this.setAttribute("tangent",a));const o=[],l=[];for(let x=0;x<n.count;x++)o[x]=new B,l[x]=new B;const c=new B,u=new B,d=new B,h=new fe,f=new fe,_=new fe,g=new B,p=new B;function m(x,T,C){c.fromBufferAttribute(n,x),u.fromBufferAttribute(n,T),d.fromBufferAttribute(n,C),h.fromBufferAttribute(s,x),f.fromBufferAttribute(s,T),_.fromBufferAttribute(s,C),u.sub(c),d.sub(c),f.sub(h),_.sub(h);const L=1/(f.x*_.y-_.x*f.y);isFinite(L)&&(g.copy(u).multiplyScalar(_.y).addScaledVector(d,-f.y).multiplyScalar(L),p.copy(d).multiplyScalar(f.x).addScaledVector(u,-_.x).multiplyScalar(L),o[x].add(g),o[T].add(g),o[C].add(g),l[x].add(p),l[T].add(p),l[C].add(p))}let M=this.groups;M.length===0&&(M=[{start:0,count:e.count}]);for(let x=0,T=M.length;x<T;++x){const C=M[x],L=C.start,D=C.count;for(let k=L,I=L+D;k<I;k+=3)m(e.getX(k+0),e.getX(k+1),e.getX(k+2))}const A=new B,v=new B,y=new B,E=new B;function w(x){y.fromBufferAttribute(i,x),E.copy(y);const T=o[x];A.copy(T),A.sub(y.multiplyScalar(y.dot(T))).normalize(),v.crossVectors(E,T);const L=v.dot(l[x])<0?-1:1;a.setXYZW(x,A.x,A.y,A.z,L)}for(let x=0,T=M.length;x<T;++x){const C=M[x],L=C.start,D=C.count;for(let k=L,I=L+D;k<I;k+=3)w(e.getX(k+0)),w(e.getX(k+1)),w(e.getX(k+2))}this._transformed=!0}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==t.count)n=new Vi(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let h=0,f=n.count;h<f;h++)n.setXYZ(h,0,0,0);const i=new B,s=new B,a=new B,o=new B,l=new B,c=new B,u=new B,d=new B;if(e)for(let h=0,f=e.count;h<f;h+=3){const _=e.getX(h+0),g=e.getX(h+1),p=e.getX(h+2);i.fromBufferAttribute(t,_),s.fromBufferAttribute(t,g),a.fromBufferAttribute(t,p),u.subVectors(a,s),d.subVectors(i,s),u.cross(d),o.fromBufferAttribute(n,_),l.fromBufferAttribute(n,g),c.fromBufferAttribute(n,p),o.add(u),l.add(u),c.add(u),n.setXYZ(_,o.x,o.y,o.z),n.setXYZ(g,l.x,l.y,l.z),n.setXYZ(p,c.x,c.y,c.z)}else for(let h=0,f=t.count;h<f;h+=3)i.fromBufferAttribute(t,h+0),s.fromBufferAttribute(t,h+1),a.fromBufferAttribute(t,h+2),u.subVectors(a,s),d.subVectors(i,s),u.cross(d),n.setXYZ(h+0,u.x,u.y,u.z),n.setXYZ(h+1,u.x,u.y,u.z),n.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)an.fromBufferAttribute(e,t),an.normalize(),e.setXYZ(t,an.x,an.y,an.z)}toNonIndexed(){function e(o,l){const c=o.array,u=o.itemSize,d=o.normalized,h=new c.constructor(l.length*u);let f=0,_=0;for(let g=0,p=l.length;g<p;g++){o.isInterleavedBufferAttribute?f=l[g]*o.data.stride+o.offset:f=l[g]*u;for(let m=0;m<u;m++)h[_++]=c[f++]}return new Vi(h,u,d)}if(this.index===null)return Je("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new En,n=this.index.array,i=this.attributes;for(const o in i){const l=i[o],c=e(l,n);t.setAttribute(o,c)}const s=this.morphAttributes;for(const o in s){const l=[],c=s[o];for(let u=0,d=c.length;u<d;u++){const h=c[u],f=e(h,n);l.push(f)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const i={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let d=0,h=c.length;d<h;d++){const f=c[d];u.push(f.toJSON(e.data))}u.length>0&&(i[l]=u,s=!0)}s&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone());const i=e.attributes;for(const c in i){const u=i[c];this.setAttribute(c,u.clone(t))}const s=e.morphAttributes;for(const c in s){const u=[],d=s[c];for(let h=0,f=d.length;h<f;h++)u.push(d[h].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,u=a.length;c<u;c++){const d=a[c];this.addGroup(d.start,d.count,d.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Dc=new B,V_=new B,H_=new et;class xr{constructor(e=new B(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=Dc.subVectors(n,t).cross(V_.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){const i=e.delta(Dc),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const a=-(e.start.dot(this.normal)+this.constant)/s;return n===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(i,a)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||H_.getNormalMatrix(e),i=this.coplanarPoint(Dc).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}}let G_=0;class ha extends ds{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:G_++}),this.uuid=ca(),this.name="",this.type="Material",this.blending=Ua,this.side=rs,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=bp,this.blendDst=wp,this.blendEquation=Us,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new je(0,0,0),this.blendAlpha=0,this.depthFunc=ja,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=f_,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=hc,this.stencilZFail=hc,this.stencilZPass=hc,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){Je(`Material: parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){Je(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector2&&n&&n.isVector2||i&&i.isEuler&&n&&n.isEuler||i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(s=>s.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(t){const s=i(e.textures),a=i(e.images);s.length>0&&(n.textures=s),a.length>0&&(n.images=a)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new je().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(n=>new xr().fromJSON(n))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let n=e.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new fe().fromArray(n)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new fe().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const Ji=new B,Lc=new B,No=new B,Uo=new B;class Vp{constructor(e=new B,t=new B(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ji)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Ji.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Ji.copy(this.origin).addScaledVector(this.direction,t),Ji.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){Lc.copy(e).add(t).multiplyScalar(.5),No.copy(t).sub(e).normalize(),Uo.copy(this.origin).sub(Lc);const s=e.distanceTo(t)*.5,a=-this.direction.dot(No),o=Uo.dot(this.direction),l=-Uo.dot(No),c=Uo.lengthSq(),u=Math.abs(1-a*a);let d,h,f,_;if(u>0)if(d=a*l-o,h=a*o-l,_=s*u,d>=0)if(h>=-_)if(h<=_){const g=1/u;d*=g,h*=g,f=d*(d+a*h+2*o)+h*(a*d+h+2*l)+c}else h=s,d=Math.max(0,-(a*h+o)),f=-d*d+h*(h+2*l)+c;else h=-s,d=Math.max(0,-(a*h+o)),f=-d*d+h*(h+2*l)+c;else h<=-_?(d=Math.max(0,-(-a*s+o)),h=d>0?-s:Math.min(Math.max(-s,-l),s),f=-d*d+h*(h+2*l)+c):h<=_?(d=0,h=Math.min(Math.max(-s,-l),s),f=h*(h+2*l)+c):(d=Math.max(0,-(a*s+o)),h=d>0?s:Math.min(Math.max(-s,-l),s),f=-d*d+h*(h+2*l)+c);else h=a>0?-s:s,d=Math.max(0,-(a*h+o)),f=-d*d+h*(h+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,d),i&&i.copy(Lc).addScaledVector(No,h),f}intersectSphere(e,t){if(e.radius<0)return null;Ji.subVectors(e.center,this.origin);const n=Ji.dot(this.direction),i=Ji.dot(Ji)-n*n,s=e.radius*e.radius;if(i>s)return null;const a=Math.sqrt(s-i),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,s,a,o,l;const c=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,h=this.origin;return c>=0?(n=(e.min.x-h.x)*c,i=(e.max.x-h.x)*c):(n=(e.max.x-h.x)*c,i=(e.min.x-h.x)*c),u>=0?(s=(e.min.y-h.y)*u,a=(e.max.y-h.y)*u):(s=(e.max.y-h.y)*u,a=(e.min.y-h.y)*u),n>a||s>i||((s>n||isNaN(n))&&(n=s),(a<i||isNaN(i))&&(i=a),d>=0?(o=(e.min.z-h.z)*d,l=(e.max.z-h.z)*d):(o=(e.max.z-h.z)*d,l=(e.min.z-h.z)*d),n>l||o>i)||((o>n||n!==n)&&(n=o),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,Ji)!==null}intersectTriangle(e,t,n,i,s){const a=this.origin,o=this.direction,l=o.x,c=o.y,u=o.z,d=e.x-a.x,h=e.y-a.y,f=e.z-a.z,_=t.x-a.x,g=t.y-a.y,p=t.z-a.z,m=n.x-a.x,M=n.y-a.y,A=n.z-a.z,v=Math.abs(l),y=Math.abs(c),E=Math.abs(u);let w,x,T,C,L,D,k,I,F,X,z,j;if(v>=y&&v>=E?(T=l,D=d,F=_,j=m,l>=0?(w=c,x=u,C=h,L=f,k=g,I=p,X=M,z=A):(w=u,x=c,C=f,L=h,k=p,I=g,X=A,z=M)):y>=E?(T=c,D=h,F=g,j=M,c>=0?(w=u,x=l,C=f,L=d,k=p,I=_,X=A,z=m):(w=l,x=u,C=d,L=f,k=_,I=p,X=m,z=A)):(T=u,D=f,F=p,j=A,u>=0?(w=l,x=c,C=d,L=h,k=_,I=g,X=m,z=M):(w=c,x=l,C=h,L=d,k=g,I=_,X=M,z=m)),T===0)return null;const Y=w/T,P=x/T,J=1/T,we=C-Y*D,Ee=L-P*D,Ye=k-Y*F,We=I-P*F,Ke=X-Y*j,$=z-P*j,te=Ke*We-$*Ye,me=we*$-Ee*Ke,Ve=Ye*Ee-We*we;if(i){if(te<0||me<0||Ve<0)return null}else if((te<0||me<0||Ve<0)&&(te>0||me>0||Ve>0))return null;const xe=te+me+Ve;if(xe===0)return null;const Le=J*(te*D+me*F+Ve*j);return(xe>0?Le<0:Le>0)?null:this.at(Le/xe,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class jl extends ha{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new je(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Cr,this.combine=Ap,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const jf=new Dt,Fr=new Vp,qo=new Ql,ed=new B,Fo=new B,Oo=new B,Bo=new B,Ic=new B,zo=new B,td=new B,ko=new B;class en extends Gt{constructor(e=new En,t=new jl){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=i.length;s<a;s++){const o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const o=this.morphTargetInfluences;if(s&&o){zo.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=o[l],d=s[l];u!==0&&(Ic.fromBufferAttribute(d,e),a?zo.addScaledVector(Ic,u):zo.addScaledVector(Ic.sub(t),u))}t.add(zo)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const n=this.geometry,i=this.material,s=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),qo.copy(n.boundingSphere),qo.applyMatrix4(s),Fr.copy(e.ray).recast(e.near),!(qo.containsPoint(Fr.origin)===!1&&(Fr.intersectSphere(qo,ed)===null||Fr.origin.distanceToSquared(ed)>(e.far-e.near)**2))&&(jf.copy(s).invert(),Fr.copy(e.ray).applyMatrix4(jf),!(n.boundingBox!==null&&Fr.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Fr)))}_computeIntersections(e,t,n){let i;const s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,d=s.attributes.normal,h=s.groups,f=s.drawRange;if(o!==null)if(Array.isArray(a))for(let _=0,g=h.length;_<g;_++){const p=h[_],m=a[p.materialIndex],M=Math.max(p.start,f.start),A=Math.min(o.count,Math.min(p.start+p.count,f.start+f.count));for(let v=M,y=A;v<y;v+=3){const E=o.getX(v),w=o.getX(v+1),x=o.getX(v+2);i=Vo(this,m,e,n,c,u,d,E,w,x),i&&(i.faceIndex=Math.floor(v/3),i.face.materialIndex=p.materialIndex,t.push(i))}}else{const _=Math.max(0,f.start),g=Math.min(o.count,f.start+f.count);for(let p=_,m=g;p<m;p+=3){const M=o.getX(p),A=o.getX(p+1),v=o.getX(p+2);i=Vo(this,a,e,n,c,u,d,M,A,v),i&&(i.faceIndex=Math.floor(p/3),t.push(i))}}else if(l!==void 0)if(Array.isArray(a))for(let _=0,g=h.length;_<g;_++){const p=h[_],m=a[p.materialIndex],M=Math.max(p.start,f.start),A=Math.min(l.count,Math.min(p.start+p.count,f.start+f.count));for(let v=M,y=A;v<y;v+=3){const E=v,w=v+1,x=v+2;i=Vo(this,m,e,n,c,u,d,E,w,x),i&&(i.faceIndex=Math.floor(v/3),i.face.materialIndex=p.materialIndex,t.push(i))}}else{const _=Math.max(0,f.start),g=Math.min(l.count,f.start+f.count);for(let p=_,m=g;p<m;p+=3){const M=p,A=p+1,v=p+2;i=Vo(this,a,e,n,c,u,d,M,A,v),i&&(i.faceIndex=Math.floor(p/3),t.push(i))}}}}function W_(r,e,t,n,i,s,a,o){let l;if(e.side===Vn?l=n.intersectTriangle(a,s,i,!0,o):l=n.intersectTriangle(i,s,a,e.side===rs,o),l===null)return null;ko.copy(o),ko.applyMatrix4(r.matrixWorld);const c=t.ray.origin.distanceTo(ko);return c<t.near||c>t.far?null:{distance:c,point:ko.clone(),object:r}}function Vo(r,e,t,n,i,s,a,o,l,c){r.getVertexPosition(o,Fo),r.getVertexPosition(l,Oo),r.getVertexPosition(c,Bo);const u=W_(r,e,t,n,Fo,Oo,Bo,td);if(u){const d=new B;bi.getBarycoord(td,Fo,Oo,Bo,d),i&&(u.uv=bi.getInterpolatedAttribute(i,o,l,c,d,new fe)),s&&(u.uv1=bi.getInterpolatedAttribute(s,o,l,c,d,new fe)),a&&(u.normal=bi.getInterpolatedAttribute(a,o,l,c,d,new B),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const h={a:o,b:l,c,normal:new B,materialIndex:0};bi.getNormal(Fo,Oo,Bo,h.normal),u.face=h,u.barycoord=d}return u}class X_ extends qn{constructor(e=null,t=1,n=1,i,s,a,o,l,c=hn,u=hn,d,h){super(null,a,o,l,c,u,i,s,d,h),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Or=new Ql,Y_=new fe(.5,.5),Ho=new B;class zh{constructor(e=new xr,t=new xr,n=new xr,i=new xr,s=new xr,a=new xr){this.planes=[e,t,n,i,s,a]}set(e,t,n,i,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(i),o[4].copy(s),o[5].copy(a),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Fi,n=!1){const i=this.planes,s=e.elements,a=s[0],o=s[1],l=s[2],c=s[3],u=s[4],d=s[5],h=s[6],f=s[7],_=s[8],g=s[9],p=s[10],m=s[11],M=s[12],A=s[13],v=s[14],y=s[15];if(i[0].setComponents(c-a,f-u,m-_,y-M).normalize(),i[1].setComponents(c+a,f+u,m+_,y+M).normalize(),i[2].setComponents(c+o,f+d,m+g,y+A).normalize(),i[3].setComponents(c-o,f-d,m-g,y-A).normalize(),n)i[4].setComponents(l,h,p,v).normalize(),i[5].setComponents(c-l,f-h,m-p,y-v).normalize();else if(i[4].setComponents(c-l,f-h,m-p,y-v).normalize(),t===Fi)i[5].setComponents(c+l,f+h,m+p,y+v).normalize();else if(t===no)i[5].setComponents(l,h,p,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Or.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Or.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Or)}intersectsSprite(e){Or.center.set(0,0,0);const t=Y_.distanceTo(e.center);return Or.radius=.7071067811865476+t,Or.applyMatrix4(e.matrixWorld),this.intersectsSphere(Or)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(Ho.x=i.normal.x>0?e.max.x:e.min.x,Ho.y=i.normal.y>0?e.max.y:e.min.y,Ho.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(Ho)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Hp extends ha{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new je(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const nd=new Dt,Yu=new Vp,Go=new Ql,Wo=new B;class Z_ extends Gt{constructor(e=new En,t=new Hp){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const n=this.geometry,i=this.matrixWorld,s=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Go.copy(n.boundingSphere),Go.applyMatrix4(i),Go.radius+=s,e.ray.intersectsSphere(Go)===!1)return;nd.copy(i).invert(),Yu.copy(e.ray).applyMatrix4(nd);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,d=n.attributes.position;if(c!==null){const h=Math.max(0,a.start),f=Math.min(c.count,a.start+a.count);for(let _=h,g=f;_<g;_++){const p=c.getX(_);Wo.fromBufferAttribute(d,p),id(Wo,p,l,i,e,t,this)}}else{const h=Math.max(0,a.start),f=Math.min(d.count,a.start+a.count);for(let _=h,g=f;_<g;_++)Wo.fromBufferAttribute(d,_),id(Wo,_,l,i,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=i.length;s<a;s++){const o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function id(r,e,t,n,i,s,a){const o=Yu.distanceSqToPoint(r);if(o<t){const l=new B;Yu.closestPointToPoint(r,l),l.applyMatrix4(n);const c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;s.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}class Gp extends qn{constructor(e=[],t=ss,n,i,s,a,o,l,c,u){super(e,t,n,i,s,a,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class io extends qn{constructor(e,t,n=Gi,i,s,a,o=hn,l=hn,c,u=sr,d=1){if(u!==sr&&u!==Xr)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const h={width:e,height:t,depth:d};super(h,i,s,a,o,l,u,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Oh(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}}class $_ extends io{constructor(e,t=Gi,n=ss,i,s,a=hn,o=hn,l,c=sr){const u={width:e,height:e,depth:1},d=[u,u,u,u,u,u];super(e,e,t,n,i,s,a,o,l,c),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class Wp extends qn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class os extends En{constructor(e=1,t=1,n=1,i=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:s,depthSegments:a};const o=this;i=Math.floor(i),s=Math.floor(s),a=Math.floor(a);const l=[],c=[],u=[],d=[];let h=0,f=0;_("z","y","x",-1,-1,n,t,e,a,s,0),_("z","y","x",1,-1,n,t,-e,a,s,1),_("x","z","y",1,1,e,n,t,i,a,2),_("x","z","y",1,-1,e,n,-t,i,a,3),_("x","y","z",1,-1,e,t,n,i,s,4),_("x","y","z",-1,-1,e,t,-n,i,s,5),this.setIndex(l),this.setAttribute("position",new Bt(c,3)),this.setAttribute("normal",new Bt(u,3)),this.setAttribute("uv",new Bt(d,2));function _(g,p,m,M,A,v,y,E,w,x,T){const C=v/w,L=y/x,D=v/2,k=y/2,I=E/2,F=w+1,X=x+1;let z=0,j=0;const Y=new B;for(let P=0;P<X;P++){const J=P*L-k;for(let we=0;we<F;we++){const Ee=we*C-D;Y[g]=Ee*M,Y[p]=J*A,Y[m]=I,c.push(Y.x,Y.y,Y.z),Y[g]=0,Y[p]=0,Y[m]=E>0?1:-1,u.push(Y.x,Y.y,Y.z),d.push(we/w),d.push(1-P/x),z+=1}}for(let P=0;P<x;P++)for(let J=0;J<w;J++){const we=h+J+F*P,Ee=h+J+F*(P+1),Ye=h+(J+1)+F*(P+1),We=h+(J+1)+F*P;l.push(we,Ee,We),l.push(Ee,Ye,We),j+=6}o.addGroup(f,j,T),f+=j,h+=z}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new os(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class qa extends En{constructor(e=1,t=1,n=1,i=32,s=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:i,heightSegments:s,openEnded:a,thetaStart:o,thetaLength:l};const c=this;i=Math.floor(i),s=Math.floor(s);const u=[],d=[],h=[],f=[];let _=0;const g=[],p=n/2;let m=0;M(),a===!1&&(e>0&&A(!0),t>0&&A(!1)),this.setIndex(u),this.setAttribute("position",new Bt(d,3)),this.setAttribute("normal",new Bt(h,3)),this.setAttribute("uv",new Bt(f,2));function M(){const v=new B,y=new B;let E=0;const w=(t-e)/n;for(let x=0;x<=s;x++){const T=[],C=x/s,L=C*(t-e)+e;for(let D=0;D<=i;D++){const k=D/i,I=k*l+o,F=Math.sin(I),X=Math.cos(I);y.x=L*F,y.y=-C*n+p,y.z=L*X,d.push(y.x,y.y,y.z),v.set(F,w,X).normalize(),h.push(v.x,v.y,v.z),f.push(k,1-C),T.push(_++)}g.push(T)}for(let x=0;x<i;x++)for(let T=0;T<s;T++){const C=g[T][x],L=g[T+1][x],D=g[T+1][x+1],k=g[T][x+1];(e>0||T!==0)&&(u.push(C,L,k),E+=3),(t>0||T!==s-1)&&(u.push(L,D,k),E+=3)}c.addGroup(m,E,0),m+=E}function A(v){const y=_,E=new fe,w=new B;let x=0;const T=v===!0?e:t,C=v===!0?1:-1;for(let D=1;D<=i;D++)d.push(0,p*C,0),h.push(0,C,0),f.push(.5,.5),_++;const L=_;for(let D=0;D<=i;D++){const I=D/i*l+o,F=Math.cos(I),X=Math.sin(I);w.x=T*X,w.y=p*C,w.z=T*F,d.push(w.x,w.y,w.z),h.push(0,C,0),E.x=F*.5+.5,E.y=X*.5*C+.5,f.push(E.x,E.y),_++}for(let D=0;D<i;D++){const k=y+D,I=L+D;v===!0?u.push(I,I+1,k):u.push(I+1,I,k),x+=3}c.addGroup(m,x,v===!0?1:2),m+=x}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new qa(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class kh extends En{constructor(e=[],t=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:i};const s=[],a=[];o(i),c(n),u(),this.setAttribute("position",new Bt(s,3)),this.setAttribute("normal",new Bt(s.slice(),3)),this.setAttribute("uv",new Bt(a,2)),i===0?this.computeVertexNormals():this.normalizeNormals();function o(M){const A=new B,v=new B,y=new B;for(let E=0;E<t.length;E+=3)f(t[E+0],A),f(t[E+1],v),f(t[E+2],y),l(A,v,y,M)}function l(M,A,v,y){const E=y+1,w=[];for(let x=0;x<=E;x++){w[x]=[];const T=M.clone().lerp(v,x/E),C=A.clone().lerp(v,x/E),L=E-x;for(let D=0;D<=L;D++)D===0&&x===E?w[x][D]=T:w[x][D]=T.clone().lerp(C,D/L)}for(let x=0;x<E;x++)for(let T=0;T<2*(E-x)-1;T++){const C=Math.floor(T/2);T%2===0?(h(w[x][C+1]),h(w[x+1][C]),h(w[x][C])):(h(w[x][C+1]),h(w[x+1][C+1]),h(w[x+1][C]))}}function c(M){const A=new B;for(let v=0;v<s.length;v+=3)A.x=s[v+0],A.y=s[v+1],A.z=s[v+2],A.normalize().multiplyScalar(M),s[v+0]=A.x,s[v+1]=A.y,s[v+2]=A.z}function u(){const M=new B;for(let A=0;A<s.length;A+=3){M.x=s[A+0],M.y=s[A+1],M.z=s[A+2];const v=p(M)/2/Math.PI+.5,y=m(M)/Math.PI+.5;a.push(v,1-y)}_(),d()}function d(){for(let M=0;M<a.length;M+=6){const A=a[M+0],v=a[M+2],y=a[M+4],E=Math.max(A,v,y),w=Math.min(A,v,y);E>.9&&w<.1&&(A<.2&&(a[M+0]+=1),v<.2&&(a[M+2]+=1),y<.2&&(a[M+4]+=1))}}function h(M){s.push(M.x,M.y,M.z)}function f(M,A){const v=M*3;A.x=e[v+0],A.y=e[v+1],A.z=e[v+2]}function _(){const M=new B,A=new B,v=new B,y=new B,E=new fe,w=new fe,x=new fe;for(let T=0,C=0;T<s.length;T+=9,C+=6){M.set(s[T+0],s[T+1],s[T+2]),A.set(s[T+3],s[T+4],s[T+5]),v.set(s[T+6],s[T+7],s[T+8]),E.set(a[C+0],a[C+1]),w.set(a[C+2],a[C+3]),x.set(a[C+4],a[C+5]),y.copy(M).add(A).add(v).divideScalar(3);const L=p(y);g(E,C+0,M,L),g(w,C+2,A,L),g(x,C+4,v,L)}}function g(M,A,v,y){y<0&&M.x===1&&(a[A]=M.x-1),v.x===0&&v.z===0&&(a[A]=y/2/Math.PI+.5)}function p(M){return Math.atan2(M.z,-M.x)}function m(M){return Math.atan2(-M.y,Math.sqrt(M.x*M.x+M.z*M.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new kh(e.vertices,e.indices,e.radius,e.detail)}}class Xi{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Je("Curve: .getPoint() not implemented.")}getPointAt(e,t){const n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let n,i=this.getPoint(0),s=0;t.push(0);for(let a=1;a<=e;a++)n=this.getPoint(a/e),s+=n.distanceTo(i),t.push(s),i=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){const n=this.getLengths();let i=0;const s=n.length;let a;t?a=t:a=e*n[s-1];let o=0,l=s-1,c;for(;o<=l;)if(i=Math.floor(o+(l-o)/2),c=n[i]-a,c<0)o=i+1;else if(c>0)l=i-1;else{l=i;break}if(i=l,n[i]===a)return i/(s-1);const u=n[i],h=n[i+1]-u,f=(a-u)/h;return(i+f)/(s-1)}getTangent(e,t){let i=e-1e-4,s=e+1e-4;i<0&&(i=0),s>1&&(s=1);const a=this.getPoint(i),o=this.getPoint(s),l=t||(a.isVector2?new fe:new B);return l.copy(o).sub(a).normalize(),l}getTangentAt(e,t){const n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){const n=new B,i=[],s=[],a=[],o=new B,l=new Dt;for(let f=0;f<=e;f++){const _=f/e;i[f]=this.getTangentAt(_,new B)}s[0]=new B,a[0]=new B;let c=Number.MAX_VALUE;const u=Math.abs(i[0].x),d=Math.abs(i[0].y),h=Math.abs(i[0].z);u<=c&&(c=u,n.set(1,0,0)),d<=c&&(c=d,n.set(0,1,0)),h<=c&&n.set(0,0,1),o.crossVectors(i[0],n).normalize(),s[0].crossVectors(i[0],o),a[0].crossVectors(i[0],s[0]);for(let f=1;f<=e;f++){if(s[f]=s[f-1].clone(),a[f]=a[f-1].clone(),o.crossVectors(i[f-1],i[f]),o.length()>Number.EPSILON){o.normalize();const _=Math.acos(lt(i[f-1].dot(i[f]),-1,1));s[f].applyMatrix4(l.makeRotationAxis(o,_))}a[f].crossVectors(i[f],s[f])}if(t===!0){let f=Math.acos(lt(s[0].dot(s[e]),-1,1));f/=e,i[0].dot(o.crossVectors(s[0],s[e]))>0&&(f=-f);for(let _=1;_<=e;_++)s[_].applyMatrix4(l.makeRotationAxis(i[_],f*_)),a[_].crossVectors(i[_],s[_])}return{tangents:i,normals:s,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class Vh extends Xi{constructor(e=0,t=0,n=1,i=1,s=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=i,this.aStartAngle=s,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(e,t=new fe){const n=t,i=Math.PI*2;let s=this.aEndAngle-this.aStartAngle;const a=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=i;for(;s>i;)s-=i;s<Number.EPSILON&&(a?s=0:s=i),this.aClockwise===!0&&!a&&(s===i?s=-i:s=s-i);const o=this.aStartAngle+e*s;let l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){const u=Math.cos(this.aRotation),d=Math.sin(this.aRotation),h=l-this.aX,f=c-this.aY;l=h*u-f*d+this.aX,c=h*d+f*u+this.aY}return n.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class K_ extends Vh{constructor(e,t,n,i,s,a){super(e,t,n,n,i,s,a),this.isArcCurve=!0,this.type="ArcCurve"}}function Hh(){let r=0,e=0,t=0,n=0;function i(s,a,o,l){r=s,e=o,t=-3*s+3*a-2*o-l,n=2*s-2*a+o+l}return{initCatmullRom:function(s,a,o,l,c){i(a,o,c*(o-s),c*(l-a))},initNonuniformCatmullRom:function(s,a,o,l,c,u,d){let h=(a-s)/c-(o-s)/(c+u)+(o-a)/u,f=(o-a)/u-(l-a)/(u+d)+(l-o)/d;h*=u,f*=u,i(a,o,h,f)},calc:function(s){const a=s*s,o=a*s;return r+e*s+t*a+n*o}}}const rd=new B,sd=new B,Nc=new Hh,Uc=new Hh,qc=new Hh;class J_ extends Xi{constructor(e=[],t=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=i}getPoint(e,t=new B){const n=t,i=this.points,s=i.length,a=(s-(this.closed?0:1))*e;let o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/s)+1)*s:l===0&&o===s-1&&(o=s-2,l=1);let c,u;this.closed||o>0?c=i[(o-1)%s]:(sd.subVectors(i[0],i[1]).add(i[0]),c=sd);const d=i[o%s],h=i[(o+1)%s];if(this.closed||o+2<s?u=i[(o+2)%s]:(rd.subVectors(i[s-1],i[s-2]).add(i[s-1]),u=rd),this.curveType==="centripetal"||this.curveType==="chordal"){const f=this.curveType==="chordal"?.5:.25;let _=Math.pow(c.distanceToSquared(d),f),g=Math.pow(d.distanceToSquared(h),f),p=Math.pow(h.distanceToSquared(u),f);g<1e-4&&(g=1),_<1e-4&&(_=g),p<1e-4&&(p=g),Nc.initNonuniformCatmullRom(c.x,d.x,h.x,u.x,_,g,p),Uc.initNonuniformCatmullRom(c.y,d.y,h.y,u.y,_,g,p),qc.initNonuniformCatmullRom(c.z,d.z,h.z,u.z,_,g,p)}else this.curveType==="catmullrom"&&(Nc.initCatmullRom(c.x,d.x,h.x,u.x,this.tension),Uc.initCatmullRom(c.y,d.y,h.y,u.y,this.tension),qc.initCatmullRom(c.z,d.z,h.z,u.z,this.tension));return n.set(Nc.calc(l),Uc.calc(l),qc.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(i.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const i=this.points[t];e.points.push(i.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(new B().fromArray(i))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function ad(r,e,t,n,i){const s=(n-e)*.5,a=(i-t)*.5,o=r*r,l=r*o;return(2*t-2*n+s+a)*l+(-3*t+3*n-2*s-a)*o+s*r+t}function Q_(r,e){const t=1-r;return t*t*e}function j_(r,e){return 2*(1-r)*r*e}function e1(r,e){return r*r*e}function Fa(r,e,t,n){return Q_(r,e)+j_(r,t)+e1(r,n)}function t1(r,e){const t=1-r;return t*t*t*e}function n1(r,e){const t=1-r;return 3*t*t*r*e}function i1(r,e){return 3*(1-r)*r*r*e}function r1(r,e){return r*r*r*e}function Oa(r,e,t,n,i){return t1(r,e)+n1(r,t)+i1(r,n)+r1(r,i)}class Xp extends Xi{constructor(e=new fe,t=new fe,n=new fe,i=new fe){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new fe){const n=t,i=this.v0,s=this.v1,a=this.v2,o=this.v3;return n.set(Oa(e,i.x,s.x,a.x,o.x),Oa(e,i.y,s.y,a.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class s1 extends Xi{constructor(e=new B,t=new B,n=new B,i=new B){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new B){const n=t,i=this.v0,s=this.v1,a=this.v2,o=this.v3;return n.set(Oa(e,i.x,s.x,a.x,o.x),Oa(e,i.y,s.y,a.y,o.y),Oa(e,i.z,s.z,a.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class Yp extends Xi{constructor(e=new fe,t=new fe){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new fe){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new fe){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class a1 extends Xi{constructor(e=new B,t=new B){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new B){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new B){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Zp extends Xi{constructor(e=new fe,t=new fe,n=new fe){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new fe){const n=t,i=this.v0,s=this.v1,a=this.v2;return n.set(Fa(e,i.x,s.x,a.x),Fa(e,i.y,s.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class o1 extends Xi{constructor(e=new B,t=new B,n=new B){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new B){const n=t,i=this.v0,s=this.v1,a=this.v2;return n.set(Fa(e,i.x,s.x,a.x),Fa(e,i.y,s.y,a.y),Fa(e,i.z,s.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class $p extends Xi{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new fe){const n=t,i=this.points,s=(i.length-1)*e,a=Math.floor(s),o=s-a,l=i[a===0?a:a-1],c=i[a],u=i[a>i.length-2?i.length-1:a+1],d=i[a>i.length-3?i.length-1:a+2];return n.set(ad(o,l.x,c.x,u.x,d.x),ad(o,l.y,c.y,u.y,d.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(i.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const i=this.points[t];e.points.push(i.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(new fe().fromArray(i))}return this}}var Zu=Object.freeze({__proto__:null,ArcCurve:K_,CatmullRomCurve3:J_,CubicBezierCurve:Xp,CubicBezierCurve3:s1,EllipseCurve:Vh,LineCurve:Yp,LineCurve3:a1,QuadraticBezierCurve:Zp,QuadraticBezierCurve3:o1,SplineCurve:$p});class l1 extends Xi{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){const n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Zu[n](t,e))}return this}getPoint(e,t){const n=e*this.getLength(),i=this.getCurveLengths();let s=0;for(;s<i.length;){if(i[s]>=n){const a=i[s]-n,o=this.curves[s],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,t)}s++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let n=0,i=this.curves.length;n<i;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let n;for(let i=0,s=this.curves;i<s.length;i++){const a=s[i],o=a.isEllipseCurve?e*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?e*a.points.length:e,l=a.getPoints(o);for(let c=0;c<l.length;c++){const u=l[c];n&&n.equals(u)||(t.push(u),n=u)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const i=e.curves[t];this.curves.push(i.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){const i=this.curves[t];e.curves.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const i=e.curves[t];this.curves.push(new Zu[i.type]().fromJSON(i))}return this}}class Fl extends l1{constructor(e){super(),this.type="Path",this.currentPoint=new fe,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const n=new Yp(this.currentPoint.clone(),new fe(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,i){const s=new Zp(this.currentPoint.clone(),new fe(e,t),new fe(n,i));return this.curves.push(s),this.currentPoint.set(n,i),this}bezierCurveTo(e,t,n,i,s,a){const o=new Xp(this.currentPoint.clone(),new fe(e,t),new fe(n,i),new fe(s,a));return this.curves.push(o),this.currentPoint.set(s,a),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),n=new $p(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,i,s,a){const o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+o,t+l,n,i,s,a),this}absarc(e,t,n,i,s,a){return this.absellipse(e,t,n,n,i,s,a),this}ellipse(e,t,n,i,s,a,o,l){const c=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(e+c,t+u,n,i,s,a,o,l),this}absellipse(e,t,n,i,s,a,o,l){const c=new Vh(e,t,n,i,s,a,o,l);if(this.curves.length>0){const d=c.getPoint(0);d.equals(this.currentPoint)||this.lineTo(d.x,d.y)}this.curves.push(c);const u=c.getPoint(1);return this.currentPoint.copy(u),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class Kp extends Fl{constructor(e){super(e),this.uuid=ca(),this.type="Shape",this.holes=[]}getPointsHoles(e){const t=[];for(let n=0,i=this.holes.length;n<i;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const i=e.holes[t];this.holes.push(i.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){const i=this.holes[t];e.holes.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const i=e.holes[t];this.holes.push(new Fl().fromJSON(i))}return this}}function c1(r,e,t=2){const n=e&&e.length,i=n?e[0]*t:r.length;let s=Jp(r,0,i,t,!0);const a=[];if(!s||s.next===s.prev)return a;let o,l,c;if(n&&(s=p1(r,e,s,t)),r.length>80*t){o=r[0],l=r[1];let u=o,d=l;for(let h=t;h<i;h+=t){const f=r[h],_=r[h+1];f<o&&(o=f),_<l&&(l=_),f>u&&(u=f),_>d&&(d=_)}c=Math.max(u-o,d-l),c=c!==0?32767/c:0}return ro(s,a,t,o,l,c,0),a}function Jp(r,e,t,n,i){let s;if(i===b1(r,e,t,n)>0)for(let a=e;a<t;a+=n)s=od(a/n|0,r[a],r[a+1],s);else for(let a=t-n;a>=e;a-=n)s=od(a/n|0,r[a],r[a+1],s);return s&&js(s,s.next)&&(ao(s),s=s.next),s}function ls(r,e){if(!r)return r;e||(e=r);let t=r,n;do if(n=!1,!t.steiner&&(js(t,t.next)||Ut(t.prev,t,t.next)===0)){if(ao(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function ro(r,e,t,n,i,s,a){if(!r)return;!a&&s&&v1(r,n,i,s);let o=r;for(;r.prev!==r.next;){const l=r.prev,c=r.next;if(s?h1(r,n,i,s):u1(r)){e.push(l.i,r.i,c.i),ao(r),r=c.next,o=c.next;continue}if(r=c,r===o){a?a===1?(r=f1(ls(r),e),ro(r,e,t,n,i,s,2)):a===2&&d1(r,e,t,n,i,s):ro(ls(r),e,t,n,i,s,1);break}}}function u1(r){const e=r.prev,t=r,n=r.next;if(Ut(e,t,n)>=0)return!1;const i=e.x,s=t.x,a=n.x,o=e.y,l=t.y,c=n.y,u=Math.min(i,s,a),d=Math.min(o,l,c),h=Math.max(i,s,a),f=Math.max(o,l,c);let _=n.next;for(;_!==e;){if(_.x>=u&&_.x<=h&&_.y>=d&&_.y<=f&&wa(i,o,s,l,a,c,_.x,_.y)&&Ut(_.prev,_,_.next)>=0)return!1;_=_.next}return!0}function h1(r,e,t,n){const i=r.prev,s=r,a=r.next;if(Ut(i,s,a)>=0)return!1;const o=i.x,l=s.x,c=a.x,u=i.y,d=s.y,h=a.y,f=Math.min(o,l,c),_=Math.min(u,d,h),g=Math.max(o,l,c),p=Math.max(u,d,h),m=$u(f,_,e,t,n),M=$u(g,p,e,t,n);let A=r.prevZ,v=r.nextZ;for(;A&&A.z>=m&&v&&v.z<=M;){if(A.x>=f&&A.x<=g&&A.y>=_&&A.y<=p&&A!==i&&A!==a&&wa(o,u,l,d,c,h,A.x,A.y)&&Ut(A.prev,A,A.next)>=0||(A=A.prevZ,v.x>=f&&v.x<=g&&v.y>=_&&v.y<=p&&v!==i&&v!==a&&wa(o,u,l,d,c,h,v.x,v.y)&&Ut(v.prev,v,v.next)>=0))return!1;v=v.nextZ}for(;A&&A.z>=m;){if(A.x>=f&&A.x<=g&&A.y>=_&&A.y<=p&&A!==i&&A!==a&&wa(o,u,l,d,c,h,A.x,A.y)&&Ut(A.prev,A,A.next)>=0)return!1;A=A.prevZ}for(;v&&v.z<=M;){if(v.x>=f&&v.x<=g&&v.y>=_&&v.y<=p&&v!==i&&v!==a&&wa(o,u,l,d,c,h,v.x,v.y)&&Ut(v.prev,v,v.next)>=0)return!1;v=v.nextZ}return!0}function f1(r,e){let t=r;do{const n=t.prev,i=t.next.next;!js(n,i)&&jp(n,t,t.next,i)&&so(n,i)&&so(i,n)&&(e.push(n.i,t.i,i.i),ao(t),ao(t.next),t=r=i),t=t.next}while(t!==r);return ls(t)}function d1(r,e,t,n,i,s){let a=r;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&y1(a,o)){let l=e0(a,o);a=ls(a,a.next),l=ls(l,l.next),ro(a,e,t,n,i,s,0),ro(l,e,t,n,i,s,0);return}o=o.next}a=a.next}while(a!==r)}function p1(r,e,t,n){const i=[];for(let s=0,a=e.length;s<a;s++){const o=e[s]*n,l=s<a-1?e[s+1]*n:r.length,c=Jp(r,o,l,n,!1);c===c.next&&(c.steiner=!0),i.push(M1(c))}i.sort(m1);for(let s=0;s<i.length;s++)t=_1(i[s],t);return t}function m1(r,e){let t=r.x-e.x;if(t===0&&(t=r.y-e.y,t===0)){const n=(r.next.y-r.y)/(r.next.x-r.x),i=(e.next.y-e.y)/(e.next.x-e.x);t=n-i}return t}function _1(r,e){const t=g1(r,e);if(!t)return e;const n=e0(t,r);return ls(n,n.next),ls(t,t.next)}function g1(r,e){let t=e;const n=r.x,i=r.y;let s=-1/0,a;if(js(r,t))return t;do{if(js(r,t.next))return t.next;if(i<=t.y&&i>=t.next.y&&t.next.y!==t.y){const d=t.x+(i-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(d<=n&&d>s&&(s=d,a=t.x<t.next.x?t:t.next,d===n))return a}t=t.next}while(t!==e);if(!a)return null;const o=a,l=a.x,c=a.y;let u=1/0;t=a;do{if(n>=t.x&&t.x>=l&&n!==t.x&&Qp(i<c?n:s,i,l,c,i<c?s:n,i,t.x,t.y)){const d=Math.abs(i-t.y)/(n-t.x);so(t,r)&&(d<u||d===u&&(t.x>a.x||t.x===a.x&&x1(a,t)))&&(a=t,u=d)}t=t.next}while(t!==o);return a}function x1(r,e){return Ut(r.prev,r,e.prev)<0&&Ut(e.next,r,r.next)<0}function v1(r,e,t,n){let i=r;do i.z===0&&(i.z=$u(i.x,i.y,e,t,n)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==r);i.prevZ.nextZ=null,i.prevZ=null,S1(i)}function S1(r){let e,t=1;do{let n=r,i;r=null;let s=null;for(e=0;n;){e++;let a=n,o=0;for(let c=0;c<t&&(o++,a=a.nextZ,!!a);c++);let l=t;for(;o>0||l>0&&a;)o!==0&&(l===0||!a||n.z<=a.z)?(i=n,n=n.nextZ,o--):(i=a,a=a.nextZ,l--),s?s.nextZ=i:r=i,i.prevZ=s,s=i;n=a}s.nextZ=null,t*=2}while(e>1);return r}function $u(r,e,t,n,i){return r=(r-t)*i|0,e=(e-n)*i|0,r=(r|r<<8)&16711935,r=(r|r<<4)&252645135,r=(r|r<<2)&858993459,r=(r|r<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,r|e<<1}function M1(r){let e=r,t=r;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==r);return t}function Qp(r,e,t,n,i,s,a,o){return(i-a)*(e-o)>=(r-a)*(s-o)&&(r-a)*(n-o)>=(t-a)*(e-o)&&(t-a)*(s-o)>=(i-a)*(n-o)}function wa(r,e,t,n,i,s,a,o){return!(r===a&&e===o)&&Qp(r,e,t,n,i,s,a,o)}function y1(r,e){return r.next.i!==e.i&&r.prev.i!==e.i&&!T1(r,e)&&(so(r,e)&&so(e,r)&&E1(r,e)&&(Ut(r.prev,r,e.prev)||Ut(r,e.prev,e))||js(r,e)&&Ut(r.prev,r,r.next)>0&&Ut(e.prev,e,e.next)>0)}function Ut(r,e,t){return(e.y-r.y)*(t.x-e.x)-(e.x-r.x)*(t.y-e.y)}function js(r,e){return r.x===e.x&&r.y===e.y}function jp(r,e,t,n){const i=Yo(Ut(r,e,t)),s=Yo(Ut(r,e,n)),a=Yo(Ut(t,n,r)),o=Yo(Ut(t,n,e));return!!(i!==s&&a!==o||i===0&&Xo(r,t,e)||s===0&&Xo(r,n,e)||a===0&&Xo(t,r,n)||o===0&&Xo(t,e,n))}function Xo(r,e,t){return e.x<=Math.max(r.x,t.x)&&e.x>=Math.min(r.x,t.x)&&e.y<=Math.max(r.y,t.y)&&e.y>=Math.min(r.y,t.y)}function Yo(r){return r>0?1:r<0?-1:0}function T1(r,e){let t=r;do{if(t.i!==r.i&&t.next.i!==r.i&&t.i!==e.i&&t.next.i!==e.i&&jp(t,t.next,r,e))return!0;t=t.next}while(t!==r);return!1}function so(r,e){return Ut(r.prev,r,r.next)<0?Ut(r,e,r.next)>=0&&Ut(r,r.prev,e)>=0:Ut(r,e,r.prev)<0||Ut(r,r.next,e)<0}function E1(r,e){let t=r,n=!1;const i=(r.x+e.x)/2,s=(r.y+e.y)/2;do t.y>s!=t.next.y>s&&t.next.y!==t.y&&i<(t.next.x-t.x)*(s-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==r);return n}function e0(r,e){const t=Ku(r.i,r.x,r.y),n=Ku(e.i,e.x,e.y),i=r.next,s=e.prev;return r.next=e,e.prev=r,t.next=i,i.prev=t,n.next=t,t.prev=n,s.next=n,n.prev=s,n}function od(r,e,t,n){const i=Ku(r,e,t);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function ao(r){r.next.prev=r.prev,r.prev.next=r.next,r.prevZ&&(r.prevZ.nextZ=r.nextZ),r.nextZ&&(r.nextZ.prevZ=r.prevZ)}function Ku(r,e,t){return{i:r,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function b1(r,e,t,n){let i=0;for(let s=e,a=t-n;s<t;s+=n)i+=(r[a]-r[s])*(r[s+1]+r[a+1]),a=s;return i}class w1{static triangulate(e,t,n=2){return c1(e,t,n)}}class Yr{static area(e){const t=e.length;let n=0;for(let i=t-1,s=0;s<t;i=s++)n+=e[i].x*e[s].y-e[s].x*e[i].y;return n*.5}static isClockWise(e){return Yr.area(e)<0}static triangulateShape(e,t){const n=[],i=[],s=[];ld(e),cd(n,e);let a=e.length;t.forEach(ld);for(let l=0;l<t.length;l++)i.push(a),a+=t[l].length,cd(n,t[l]);const o=w1.triangulate(n,i);for(let l=0;l<o.length;l+=3)s.push(o.slice(l,l+3));return s}}function ld(r){const e=r.length;e>2&&r[e-1].equals(r[0])&&r.pop()}function cd(r,e){for(let t=0;t<e.length;t++)r.push(e[t].x),r.push(e[t].y)}class Gh extends En{constructor(e=new Kp([new fe(.5,.5),new fe(-.5,.5),new fe(-.5,-.5),new fe(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];const n=this,i=[],s=[];for(let o=0,l=e.length;o<l;o++){const c=e[o];a(c)}this.setAttribute("position",new Bt(i,3)),this.setAttribute("uv",new Bt(s,2)),this.computeVertexNormals();function a(o){const l=[],c=t.curveSegments!==void 0?t.curveSegments:12,u=t.steps!==void 0?t.steps:1,d=t.depth!==void 0?t.depth:1;let h=t.bevelEnabled!==void 0?t.bevelEnabled:!0,f=t.bevelThickness!==void 0?t.bevelThickness:.2,_=t.bevelSize!==void 0?t.bevelSize:f-.1,g=t.bevelOffset!==void 0?t.bevelOffset:0,p=t.bevelSegments!==void 0?t.bevelSegments:3;const m=t.extrudePath,M=t.UVGenerator!==void 0?t.UVGenerator:A1;let A,v=!1,y,E,w,x;if(m){A=m.getSpacedPoints(u),v=!0,h=!1;const Q=m.isCatmullRomCurve3?m.closed:!1;y=m.computeFrenetFrames(u,Q),E=new B,w=new B,x=new B}h||(p=0,f=0,_=0,g=0);const T=o.extractPoints(c);let C=T.shape;const L=T.holes;if(!Yr.isClockWise(C)){C=C.reverse();for(let Q=0,re=L.length;Q<re;Q++){const oe=L[Q];Yr.isClockWise(oe)&&(L[Q]=oe.reverse())}}function k(Q){const oe=10000000000000001e-36;let N=Q[0];for(let de=1;de<=Q.length;de++){const Be=de%Q.length,Ue=Q[Be],Ce=Ue.x-N.x,Ze=Ue.y-N.y,U=Ce*Ce+Ze*Ze,rt=Math.max(Math.abs(Ue.x),Math.abs(Ue.y),Math.abs(N.x),Math.abs(N.y)),Ge=oe*rt*rt;if(U<=Ge){Q.splice(Be,1),de--;continue}N=Ue}}k(C),L.forEach(k);const I=L.length,F=C;for(let Q=0;Q<I;Q++){const re=L[Q];C=C.concat(re)}function X(Q,re,oe){return re||mt("ExtrudeGeometry: vec does not exist"),Q.clone().addScaledVector(re,oe)}const z=C.length;function j(Q,re,oe){let N,de,Be;const Ue=Q.x-re.x,Ce=Q.y-re.y,Ze=oe.x-Q.x,U=oe.y-Q.y,rt=Ue*Ue+Ce*Ce,Ge=Ue*U-Ce*Ze;if(Math.abs(Ge)>Number.EPSILON){const R=Math.sqrt(rt),S=Math.sqrt(Ze*Ze+U*U),V=re.x-Ce/R,H=re.y+Ue/R,K=oe.x-U/S,pe=oe.y+Ze/S,ce=((K-V)*U-(pe-H)*Ze)/(Ue*U-Ce*Ze);N=V+Ue*ce-Q.x,de=H+Ce*ce-Q.y;const ee=N*N+de*de;if(ee<=2)return new fe(N,de);Be=Math.sqrt(ee/2)}else{let R=!1;Ue>Number.EPSILON?Ze>Number.EPSILON&&(R=!0):Ue<-Number.EPSILON?Ze<-Number.EPSILON&&(R=!0):Math.sign(Ce)===Math.sign(U)&&(R=!0),R?(N=-Ce,de=Ue,Be=Math.sqrt(rt)):(N=Ue,de=Ce,Be=Math.sqrt(rt/2))}return new fe(N/Be,de/Be)}const Y=[];for(let Q=0,re=F.length,oe=re-1,N=Q+1;Q<re;Q++,oe++,N++)oe===re&&(oe=0),N===re&&(N=0),Y[Q]=j(F[Q],F[oe],F[N]);const P=[];let J,we=Y.concat();for(let Q=0,re=I;Q<re;Q++){const oe=L[Q];J=[];for(let N=0,de=oe.length,Be=de-1,Ue=N+1;N<de;N++,Be++,Ue++)Be===de&&(Be=0),Ue===de&&(Ue=0),J[N]=j(oe[N],oe[Be],oe[Ue]);P.push(J),we=we.concat(J)}let Ee;if(p===0)Ee=Yr.triangulateShape(F,L);else{const Q=[],re=[];for(let oe=0;oe<p;oe++){const N=oe/p,de=f*Math.cos(N*Math.PI/2),Be=_*Math.sin(N*Math.PI/2)+g;for(let Ue=0,Ce=F.length;Ue<Ce;Ue++){const Ze=X(F[Ue],Y[Ue],Be);me(Ze.x,Ze.y,-de),N===0&&Q.push(Ze)}for(let Ue=0,Ce=I;Ue<Ce;Ue++){const Ze=L[Ue];J=P[Ue];const U=[];for(let rt=0,Ge=Ze.length;rt<Ge;rt++){const R=X(Ze[rt],J[rt],Be);me(R.x,R.y,-de),N===0&&U.push(R)}N===0&&re.push(U)}}Ee=Yr.triangulateShape(Q,re)}const Ye=Ee.length,We=_+g;for(let Q=0;Q<z;Q++){const re=h?X(C[Q],we[Q],We):C[Q];v?(w.copy(y.normals[0]).multiplyScalar(re.x),E.copy(y.binormals[0]).multiplyScalar(re.y),x.copy(A[0]).add(w).add(E),me(x.x,x.y,x.z)):me(re.x,re.y,0)}for(let Q=1;Q<=u;Q++)for(let re=0;re<z;re++){const oe=h?X(C[re],we[re],We):C[re];v?(w.copy(y.normals[Q]).multiplyScalar(oe.x),E.copy(y.binormals[Q]).multiplyScalar(oe.y),x.copy(A[Q]).add(w).add(E),me(x.x,x.y,x.z)):me(oe.x,oe.y,d/u*Q)}for(let Q=p-1;Q>=0;Q--){const re=Q/p,oe=f*Math.cos(re*Math.PI/2),N=_*Math.sin(re*Math.PI/2)+g;for(let de=0,Be=F.length;de<Be;de++){const Ue=X(F[de],Y[de],N);me(Ue.x,Ue.y,d+oe)}for(let de=0,Be=L.length;de<Be;de++){const Ue=L[de];J=P[de];for(let Ce=0,Ze=Ue.length;Ce<Ze;Ce++){const U=X(Ue[Ce],J[Ce],N);v?me(U.x,U.y+A[u-1].y,A[u-1].x+oe):me(U.x,U.y,d+oe)}}}Ke(),$();function Ke(){const Q=i.length/3;if(h){let re=0,oe=z*re;for(let N=0;N<Ye;N++){const de=Ee[N];Ve(de[2]+oe,de[1]+oe,de[0]+oe)}re=u+p*2,oe=z*re;for(let N=0;N<Ye;N++){const de=Ee[N];Ve(de[0]+oe,de[1]+oe,de[2]+oe)}}else{for(let re=0;re<Ye;re++){const oe=Ee[re];Ve(oe[2],oe[1],oe[0])}for(let re=0;re<Ye;re++){const oe=Ee[re];Ve(oe[0]+z*u,oe[1]+z*u,oe[2]+z*u)}}n.addGroup(Q,i.length/3-Q,0)}function $(){const Q=i.length/3;let re=0;te(F,re),re+=F.length;for(let oe=0,N=L.length;oe<N;oe++){const de=L[oe];te(de,re),re+=de.length}n.addGroup(Q,i.length/3-Q,1)}function te(Q,re){let oe=Q.length;for(;--oe>=0;){const N=oe;let de=oe-1;de<0&&(de=Q.length-1);for(let Be=0,Ue=u+p*2;Be<Ue;Be++){const Ce=z*Be,Ze=z*(Be+1),U=re+N+Ce,rt=re+de+Ce,Ge=re+de+Ze,R=re+N+Ze;xe(U,rt,Ge,R)}}}function me(Q,re,oe){l.push(Q),l.push(re),l.push(oe)}function Ve(Q,re,oe){Le(Q),Le(re),Le(oe);const N=i.length/3,de=M.generateTopUV(n,i,N-3,N-2,N-1);Ne(de[0]),Ne(de[1]),Ne(de[2])}function xe(Q,re,oe,N){Le(Q),Le(re),Le(N),Le(re),Le(oe),Le(N);const de=i.length/3,Be=M.generateSideWallUV(n,i,de-6,de-3,de-2,de-1);Ne(Be[0]),Ne(Be[1]),Ne(Be[3]),Ne(Be[1]),Ne(Be[2]),Ne(Be[3])}function Le(Q){i.push(l[Q*3+0]),i.push(l[Q*3+1]),i.push(l[Q*3+2])}function Ne(Q){s.push(Q.x),s.push(Q.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return C1(t,n,e)}static fromJSON(e,t){const n=[];for(let s=0,a=e.shapes.length;s<a;s++){const o=t[e.shapes[s]];n.push(o)}const i=e.options.extrudePath;return i!==void 0&&(e.options.extrudePath=new Zu[i.type]().fromJSON(i)),new Gh(n,e.options)}}const A1={generateTopUV:function(r,e,t,n,i){const s=e[t*3],a=e[t*3+1],o=e[n*3],l=e[n*3+1],c=e[i*3],u=e[i*3+1];return[new fe(s,a),new fe(o,l),new fe(c,u)]},generateSideWallUV:function(r,e,t,n,i,s){const a=e[t*3],o=e[t*3+1],l=e[t*3+2],c=e[n*3],u=e[n*3+1],d=e[n*3+2],h=e[i*3],f=e[i*3+1],_=e[i*3+2],g=e[s*3],p=e[s*3+1],m=e[s*3+2];return Math.abs(o-u)<Math.abs(a-c)?[new fe(a,1-l),new fe(c,1-d),new fe(h,1-_),new fe(g,1-m)]:[new fe(o,1-l),new fe(u,1-d),new fe(f,1-_),new fe(p,1-m)]}};function C1(r,e,t){if(t.shapes=[],Array.isArray(r))for(let n=0,i=r.length;n<i;n++){const s=r[n];t.shapes.push(s.uuid)}else t.shapes.push(r.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}class Wh extends kh{constructor(e=1,t=0){const n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],i=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,i,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new Wh(e.radius,e.detail)}}class vo extends En{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const s=e/2,a=t/2,o=Math.floor(n),l=Math.floor(i),c=o+1,u=l+1,d=e/o,h=t/l,f=[],_=[],g=[],p=[];for(let m=0;m<u;m++){const M=m*h-a;for(let A=0;A<c;A++){const v=A*d-s;_.push(v,-M,0),g.push(0,0,1),p.push(A/o),p.push(1-m/l)}}for(let m=0;m<l;m++)for(let M=0;M<o;M++){const A=M+c*m,v=M+c*(m+1),y=M+1+c*(m+1),E=M+1+c*m;f.push(A,v,E),f.push(v,y,E)}this.setIndex(f),this.setAttribute("position",new Bt(_,3)),this.setAttribute("normal",new Bt(g,3)),this.setAttribute("uv",new Bt(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new vo(e.width,e.height,e.widthSegments,e.heightSegments)}}class Xh extends En{constructor(e=1,t=32,n=16,i=0,s=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:s,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const l=Math.min(a+o,Math.PI);let c=0;const u=[],d=new B,h=new B,f=[],_=[],g=[],p=[];for(let m=0;m<=n;m++){const M=[],A=m/n,v=a+A*o,y=e*Math.cos(v),E=Math.sqrt(e*e-y*y);let w=0;m===0&&a===0?w=.5/t:m===n&&l===Math.PI&&(w=-.5/t);for(let x=0;x<=t;x++){const T=x/t,C=i+T*s;d.x=-E*Math.cos(C),d.y=y,d.z=E*Math.sin(C),_.push(d.x,d.y,d.z),h.copy(d).normalize(),g.push(h.x,h.y,h.z),p.push(T+w,1-A),M.push(c++)}u.push(M)}for(let m=0;m<n;m++)for(let M=0;M<t;M++){const A=u[m][M+1],v=u[m][M],y=u[m+1][M],E=u[m+1][M+1];(m!==0||a>0)&&f.push(A,v,E),(m!==n-1||l<Math.PI)&&f.push(v,y,E)}this.setIndex(f),this.setAttribute("position",new Bt(_,3)),this.setAttribute("normal",new Bt(g,3)),this.setAttribute("uv",new Bt(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Xh(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}function ea(r){const e={};for(const t in r){e[t]={};for(const n in r[t]){const i=r[t][n];if(ud(i))i.isRenderTargetTexture?(Je("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone();else if(Array.isArray(i))if(ud(i[0])){const s=[];for(let a=0,o=i.length;a<o;a++)s[a]=i[a].clone();e[t][n]=s}else e[t][n]=i.slice();else e[t][n]=i}}return e}function Pn(r){const e={};for(let t=0;t<r.length;t++){const n=ea(r[t]);for(const i in n)e[i]=n[i]}return e}function ud(r){return r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)}function R1(r){const e=[];for(let t=0;t<r.length;t++)e.push(r[t].clone());return e}function t0(r){const e=r.getRenderTarget();return e===null?r.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:ht.workingColorSpace}const oo={clone:ea,merge:Pn};var P1=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,D1=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class cn extends ha{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=P1,this.fragmentShader=D1,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ea(e.uniforms),this.uniformsGroups=R1(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const a=this.uniforms[i].value;a&&a.isTexture?t.uniforms[i]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[i]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[i]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[i]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[i]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[i]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[i]={type:"m4",value:a.toArray()}:t.uniforms[i]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(const n in e.uniforms){const i=e.uniforms[n];switch(this.uniforms[n]={},i.type){case"t":this.uniforms[n].value=t[i.value]||null;break;case"c":this.uniforms[n].value=new je().setHex(i.value);break;case"v2":this.uniforms[n].value=new fe().fromArray(i.value);break;case"v3":this.uniforms[n].value=new B().fromArray(i.value);break;case"v4":this.uniforms[n].value=new Nt().fromArray(i.value);break;case"m3":this.uniforms[n].value=new et().fromArray(i.value);break;case"m4":this.uniforms[n].value=new Dt().fromArray(i.value);break;default:this.uniforms[n].value=i.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const n in e.extensions)this.extensions[n]=e.extensions[n];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class n0 extends cn{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class So extends ha{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new je(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new je(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Xu,this.normalScale=new fe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Cr,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class L1 extends So{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new fe(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return lt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new je(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new je(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new je(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(e){this._retroreflectivity>0!=e>0&&this.version++,this._retroreflectivity=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.retroreflectivity=e.retroreflectivity,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class I1 extends ha{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=u_,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class N1 extends ha{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class Mo extends Gt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new je(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}}class U1 extends Mo{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Gt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new je(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){const t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}}const Fc=new Dt,hd=new B,fd=new B;class Yh{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new fe(512,512),this.mapType=ni,this.map=null,this.mapPass=null,this.matrix=new Dt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new zh,this._frameExtents=new fe(1,1),this._viewportCount=1,this._viewports=[new Nt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera;hd.setFromMatrixPosition(e.matrixWorld),t.position.copy(hd),fd.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(fd),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,n,i){Fc.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),n.setFromProjectionMatrix(Fc,e.coordinateSystem,e.reversedDepth);const s=this._frameExtents,a=i?i.z/s.x:1,o=i?i.w/s.y:1,l=i?i.x/s.x:0,c=i?i.y/s.y:0;e.coordinateSystem===no||e.reversedDepth?t.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,1,0,0,0,0,1):t.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,.5,.5,0,0,0,1),t.multiply(Fc)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const Zo=new B,$o=new ua,Ri=new B;class i0 extends Gt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Dt,this.projectionMatrix=new Dt,this.projectionMatrixInverse=new Dt,this.coordinateSystem=Fi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Zo,$o,Ri),Ri.x===1&&Ri.y===1&&Ri.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Zo,$o,Ri.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(Zo,$o,Ri),Ri.x===1&&Ri.y===1&&Ri.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Zo,$o,Ri.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const _r=new B,dd=new fe,pd=new fe;class zn extends i0{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=ql*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(fc*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ql*2*Math.atan(Math.tan(fc*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){_r.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(_r.x,_r.y).multiplyScalar(-e/_r.z),_r.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(_r.x,_r.y).multiplyScalar(-e/_r.z)}getViewSize(e,t){return this.getViewBounds(e,dd,pd),t.subVectors(pd,dd)}setViewOffset(e,t,n,i,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(fc*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,s=-.5*i;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*i/l,t-=a.offsetY*n/c,i*=a.width/l,n*=a.height/c}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class q1 extends Yh{constructor(){super(new zn(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){const t=this.camera,n=ql*2*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height*this.aspect,s=e.distance||t.far;(n!==t.fov||i!==t.aspect||s!==t.far)&&(t.fov=n,t.aspect=i,t.far=s,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this.aspect=e.aspect,this}toJSON(){const e=super.toJSON();return e.focus=this.focus,e.aspect=this.aspect,e}}class F1 extends Mo{constructor(e,t,n=0,i=Math.PI/3,s=0,a=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Gt.DEFAULT_UP),this.updateMatrix(),this.target=new Gt,this.distance=n,this.angle=i,this.penumbra=s,this.decay=a,this.map=null,this.shadow=new q1}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.map=e.map,this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.distance=this.distance,t.object.angle=this.angle,t.object.decay=this.decay,t.object.penumbra=this.penumbra,t.object.target=this.target.uuid,this.map&&this.map.isTexture&&(t.object.map=this.map.toJSON(e).uuid),t.object.shadow=this.shadow.toJSON(),t}}class O1 extends Yh{constructor(){super(new zn(90,1,.5,500)),this.isPointLightShadow=!0}}class B1 extends Mo{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new O1}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}}class ec extends i0{constructor(e=-1,t=1,n=1,i=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let s=n-e,a=n+e,o=i+t,l=i-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class z1 extends Yh{constructor(){super(new ec(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class k1 extends Mo{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Gt.DEFAULT_UP),this.updateMatrix(),this.target=new Gt,this.shadow=new z1}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}}class V1 extends Mo{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}const Rs=-90,Ps=1;class H1 extends Gt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new zn(Rs,Ps,e,t);i.layers=this.layers,this.add(i);const s=new zn(Rs,Ps,e,t);s.layers=this.layers,this.add(s);const a=new zn(Rs,Ps,e,t);a.layers=this.layers,this.add(a);const o=new zn(Rs,Ps,e,t);o.layers=this.layers,this.add(o);const l=new zn(Rs,Ps,e,t);l.layers=this.layers,this.add(l);const c=new zn(Rs,Ps,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,i,s,a,o,l]=t;for(const c of t)this.remove(c);if(e===Fi)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===no)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,l,c,u]=this.children,d=e.getRenderTarget(),h=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;const g=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let p=!1;e.isWebGLRenderer===!0?p=e.state.buffers.depth.getReversed():p=e.reversedDepthBuffer,e.setRenderTarget(n,0,i),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,s),e.setRenderTarget(n,1,i),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,2,i),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,3,i),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(n,4,i),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),n.texture.generateMipmaps=g,e.setRenderTarget(n,5,i),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,u),e.setRenderTarget(d,h,f),e.xr.enabled=_,n.texture.needsPMREMUpdate=!0}}class G1 extends zn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class W1{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=performance.now(),this._delta=0,this._elapsed=0,this._timescale=1,this._document=null,this._pageVisibilityHandler=null}connect(e){this._document=e,e.hidden!==void 0&&(this._pageVisibilityHandler=X1.bind(this),e.addEventListener("visibilitychange",this._pageVisibilityHandler,!1))}disconnect(){this._pageVisibilityHandler!==null&&(this._document.removeEventListener("visibilitychange",this._pageVisibilityHandler),this._pageVisibilityHandler=null),this._document=null}getDelta(){return this._delta/1e3}getElapsed(){return this._elapsed/1e3}getTimescale(){return this._timescale}setTimescale(e){return this._timescale=e,this}reset(){return this._currentTime=performance.now()-this._startTime,this}dispose(){this.disconnect()}update(e){return this._pageVisibilityHandler!==null&&this._document.hidden===!0?this._delta=0:(this._previousTime=this._currentTime,this._currentTime=(e!==void 0?e:performance.now())-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta),this}}function X1(){this._document.hidden===!1&&this.reset()}class Y1{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1,Je("Clock: This module has been deprecated. Please use THREE.Timer instead.")}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=performance.now();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}const Nf=class Nf{constructor(e,t,n,i){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,i)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,i){const s=this.elements;return s[0]=e,s[2]=t,s[1]=n,s[3]=i,this}};Nf.prototype.isMatrix2=!0;let md=Nf;const _d=new fe;class Z1{constructor(e=new fe(1/0,1/0),t=new fe(-1/0,-1/0)){this.isBox2=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=_d.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=1/0,this.max.x=this.max.y=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y}getCenter(e){return this.isEmpty()?e.set(0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,_d).distanceTo(e)}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}class $1{constructor(){this.type="ShapePath",this.color=new je,this.subPaths=[],this.currentPath=null,this.userData={}}moveTo(e,t){return this.currentPath=new Fl,this.subPaths.push(this.currentPath),this.currentPath.moveTo(e,t),this}lineTo(e,t){return this.currentPath.lineTo(e,t),this}quadraticCurveTo(e,t,n,i){return this.currentPath.quadraticCurveTo(e,t,n,i),this}bezierCurveTo(e,t,n,i,s,a){return this.currentPath.bezierCurveTo(e,t,n,i,s,a),this}splineThru(e){return this.currentPath.splineThru(e),this}toShapes(){function e(l,c){let u=!1;const d=c.length;for(let h=0,f=d-1;h<d;f=h++){const _=c[h],g=c[f];_.y>l.y!=g.y>l.y&&l.x<(g.x-_.x)*(l.y-_.y)/(g.y-_.y)+_.x&&(u=!u)}return u}function t(l,c){const u=c.getCenter(new fe);if(e(u,l))return u;const d=u.y,h=[],f=l.length;for(let _=0;_<f;_++){const g=l[_],p=l[(_+1)%f];if(g.y>d!=p.y>d){const m=g.x+(d-g.y)*(p.x-g.x)/(p.y-g.y);h.push(m)}}return h.length>1&&(h.sort((_,g)=>_-g),u.x=(h[0]+h[1])/2),u}let n=this.userData.style&&this.userData.style.fillRule||"nonzero";n!=="nonzero"&&n!=="evenodd"&&(Je('Fill-rule "'+n+'" is not supported, falling back to "nonzero".'),n="nonzero");const i=n==="nonzero"?(l=>l!==0):(l=>(l&1)!==0),s=[];for(const l of this.subPaths){const c=l.getPoints();if(c.length<3)continue;const u=Yr.area(c);if(u===0)continue;const d=new Z1;for(let h=0;h<c.length;h++)d.expandByPoint(c[h]);s.push({subPath:l,points:c,boundingBox:d,interiorPoint:t(c,d),absArea:Math.abs(u),winding:u<0?-1:1,container:null,exclude:!1,role:null})}s.sort((l,c)=>c.absArea-l.absArea);for(let l=0;l<s.length;l++){const c=s[l];let u=0;for(let d=l-1;d>=0;d--){const h=s[d];if(h.boundingBox.containsBox(c.boundingBox)&&e(c.interiorPoint,h.points)){c.container=h.exclude?h.container:h,u=h.winding,c.winding+=u;break}}i(c.winding)===i(u)&&(c.exclude=!0)}for(const l of s)l.exclude||(l.role=l.container===null||l.container.role==="hole"?"outer":"hole");const a=[],o=new Map;for(const l of s){if(l.exclude||l.role!=="outer")continue;const c=new Kp;c.curves=l.subPath.curves,a.push(c),o.set(l,c)}for(const l of s){if(l.exclude||l.role!=="hole")continue;const c=o.get(l.container);if(!c)continue;const u=new Fl;u.curves=l.subPath.curves,c.holes.push(u)}return a}}function gd(r,e,t,n){const i=K1(n);switch(t){case Ip:return r*e;case Up:return r*e/i.components*i.byteLength;case Ih:return r*e/i.components*i.byteLength;case as:return r*e*2/i.components*i.byteLength;case Nh:return r*e*2/i.components*i.byteLength;case Np:return r*e*3/i.components*i.byteLength;case wi:return r*e*4/i.components*i.byteLength;case Uh:return r*e*4/i.components*i.byteLength;case pl:case ml:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case _l:case gl:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case gu:case vu:return Math.max(r,16)*Math.max(e,8)/4;case _u:case xu:return Math.max(r,8)*Math.max(e,8)/2;case Su:case Mu:case Tu:case Eu:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case yu:case Dl:case bu:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case wu:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Au:return Math.floor((r+4)/5)*Math.floor((e+3)/4)*16;case Cu:return Math.floor((r+4)/5)*Math.floor((e+4)/5)*16;case Ru:return Math.floor((r+5)/6)*Math.floor((e+4)/5)*16;case Pu:return Math.floor((r+5)/6)*Math.floor((e+5)/6)*16;case Du:return Math.floor((r+7)/8)*Math.floor((e+4)/5)*16;case Lu:return Math.floor((r+7)/8)*Math.floor((e+5)/6)*16;case Iu:return Math.floor((r+7)/8)*Math.floor((e+7)/8)*16;case Nu:return Math.floor((r+9)/10)*Math.floor((e+4)/5)*16;case Uu:return Math.floor((r+9)/10)*Math.floor((e+5)/6)*16;case qu:return Math.floor((r+9)/10)*Math.floor((e+7)/8)*16;case Fu:return Math.floor((r+9)/10)*Math.floor((e+9)/10)*16;case Ou:return Math.floor((r+11)/12)*Math.floor((e+9)/10)*16;case Bu:return Math.floor((r+11)/12)*Math.floor((e+11)/12)*16;case zu:case ku:case Vu:return Math.ceil(r/4)*Math.ceil(e/4)*16;case Hu:case Gu:return Math.ceil(r/4)*Math.ceil(e/4)*8;case Ll:case Wu:return Math.ceil(r/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function K1(r){switch(r){case ni:case Rp:return{byteLength:1,components:1};case eo:case Pp:case Hn:return{byteLength:2,components:1};case Dh:case Lh:return{byteLength:2,components:4};case Gi:case Ph:case qi:return{byteLength:4,components:1};case Dp:case Lp:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${r}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Th}}));typeof window<"u"&&(window.__THREE__?Je("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Th);function r0(){let r=null,e=!1,t=null,n=null;function i(s,a){n=r.requestAnimationFrame(i),t(s,a)}return{start:function(){e!==!0&&t!==null&&r!==null&&(n=r.requestAnimationFrame(i),e=!0)},stop:function(){r!==null&&r.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){r=s}}}function J1(r){const e=new WeakMap;function t(o,l){const c=o.array,u=o.usage,d=c.byteLength,h=r.createBuffer();r.bindBuffer(l,h),r.bufferData(l,c,u),o.onUploadCallback();let f;if(c instanceof Float32Array)f=r.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)f=r.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?f=r.HALF_FLOAT:f=r.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=r.SHORT;else if(c instanceof Uint32Array)f=r.UNSIGNED_INT;else if(c instanceof Int32Array)f=r.INT;else if(c instanceof Int8Array)f=r.BYTE;else if(c instanceof Uint8Array)f=r.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:h,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:d}}function n(o,l,c){const u=l.array,d=l.updateRanges;if(r.bindBuffer(c,o),d.length===0)r.bufferSubData(c,0,u);else{d.sort((f,_)=>f.start-_.start);let h=0;for(let f=1;f<d.length;f++){const _=d[h],g=d[f];g.start<=_.start+_.count+1?_.count=Math.max(_.count,g.start+g.count-_.start):(++h,d[h]=g)}d.length=h+1;for(let f=0,_=d.length;f<_;f++){const g=d[f];r.bufferSubData(c,g.start*u.BYTES_PER_ELEMENT,u,g.start,g.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(r.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const u=e.get(o);(!u||u.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:i,remove:s,update:a}}var Q1=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,j1=`#ifdef USE_ALPHAHASH
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
#endif`,eg=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,tg=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,ng=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,ig=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,rg=`#ifdef USE_AOMAP
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
#endif`,sg=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,ag=`#ifdef USE_BATCHING
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
#endif`,og=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,lg=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,cg=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,ug=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,hg=`#ifdef USE_IRIDESCENCE
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
#endif`,fg=`#ifdef USE_BUMPMAP
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
#endif`,dg=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,pg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,mg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,_g=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,gg=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,xg=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,vg=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Sg=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,Mg=`#define PI 3.141592653589793
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
} // validated`,yg=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Tg=`vec3 transformedNormal = objectNormal;
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
#endif`,Eg=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,bg=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,wg=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Ag=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Cg="gl_FragColor = linearToOutputTexel( gl_FragColor );",Rg=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Pg=`#ifdef USE_ENVMAP
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
#endif`,Dg=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Lg=`#ifdef USE_ENVMAP
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
#endif`,Ig=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Ng=`#ifdef USE_ENVMAP
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
#endif`,Ug=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,qg=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Fg=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Og=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Bg=`#ifdef USE_GRADIENTMAP
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
}`,zg=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,kg=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Vg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Hg=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,Gg=`#ifdef USE_ENVMAP
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
#endif`,Wg=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Xg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Yg=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Zg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,$g=`PhysicalMaterial material;
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
#endif`,Kg=`uniform sampler2D dfgLUT;
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
}`,Jg=`
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
#endif`,Qg=`#if defined( RE_IndirectDiffuse )
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
#endif`,jg=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,ex=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,tx=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,nx=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ix=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,rx=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,sx=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,ax=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,ox=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,lx=`#if defined( USE_POINTS_UV )
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
#endif`,cx=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,ux=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,hx=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,fx=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,dx=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,px=`#ifdef USE_MORPHTARGETS
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
#endif`,mx=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,_x=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,gx=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,xx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,vx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Sx=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Mx=`#ifdef USE_NORMALMAP
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
#endif`,yx=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Tx=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Ex=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,bx=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,wx=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Ax=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Cx=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Rx=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Px=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Dx=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Lx=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Ix=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Nx=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Ux=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,qx=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Fx=`float getShadowMask() {
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
}`,Ox=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Bx=`#ifdef USE_SKINNING
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
#endif`,zx=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,kx=`#ifdef USE_SKINNING
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
#endif`,Vx=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Hx=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Gx=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Wx=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Xx=`#ifdef USE_TRANSMISSION
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
#endif`,Yx=`#ifdef USE_TRANSMISSION
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
#endif`,Zx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,$x=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Kx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Jx=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Qx=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,jx=`uniform sampler2D t2D;
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
}`,e2=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,t2=`#ifdef ENVMAP_TYPE_CUBE
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
}`,n2=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,i2=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,r2=`#include <common>
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
}`,s2=`#if DEPTH_PACKING == 3200
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
}`,a2=`#define DISTANCE
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
}`,o2=`#define DISTANCE
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
}`,l2=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,c2=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,u2=`uniform float scale;
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
}`,h2=`uniform vec3 diffuse;
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
}`,f2=`#include <common>
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
}`,d2=`uniform vec3 diffuse;
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
}`,p2=`#define LAMBERT
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
}`,m2=`#define LAMBERT
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
}`,_2=`#define MATCAP
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
}`,g2=`#define MATCAP
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
}`,x2=`#define NORMAL
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
}`,v2=`#define NORMAL
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
}`,S2=`#define PHONG
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
}`,M2=`#define PHONG
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
}`,y2=`#define STANDARD
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
}`,T2=`#define STANDARD
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
}`,E2=`#define TOON
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
}`,b2=`#define TOON
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
}`,w2=`uniform float size;
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
}`,A2=`uniform vec3 diffuse;
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
}`,C2=`#include <common>
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
}`,R2=`uniform vec3 color;
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
}`,P2=`uniform float rotation;
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
}`,D2=`uniform vec3 diffuse;
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
}`,nt={alphahash_fragment:Q1,alphahash_pars_fragment:j1,alphamap_fragment:eg,alphamap_pars_fragment:tg,alphatest_fragment:ng,alphatest_pars_fragment:ig,aomap_fragment:rg,aomap_pars_fragment:sg,batching_pars_vertex:ag,batching_vertex:og,begin_vertex:lg,beginnormal_vertex:cg,bsdfs:ug,iridescence_fragment:hg,bumpmap_pars_fragment:fg,clipping_planes_fragment:dg,clipping_planes_pars_fragment:pg,clipping_planes_pars_vertex:mg,clipping_planes_vertex:_g,color_fragment:gg,color_pars_fragment:xg,color_pars_vertex:vg,color_vertex:Sg,common:Mg,cube_uv_reflection_fragment:yg,defaultnormal_vertex:Tg,displacementmap_pars_vertex:Eg,displacementmap_vertex:bg,emissivemap_fragment:wg,emissivemap_pars_fragment:Ag,colorspace_fragment:Cg,colorspace_pars_fragment:Rg,envmap_fragment:Pg,envmap_common_pars_fragment:Dg,envmap_pars_fragment:Lg,envmap_pars_vertex:Ig,envmap_physical_pars_fragment:Gg,envmap_vertex:Ng,fog_vertex:Ug,fog_pars_vertex:qg,fog_fragment:Fg,fog_pars_fragment:Og,gradientmap_pars_fragment:Bg,lightmap_pars_fragment:zg,lights_lambert_fragment:kg,lights_lambert_pars_fragment:Vg,lights_pars_begin:Hg,lights_toon_fragment:Wg,lights_toon_pars_fragment:Xg,lights_phong_fragment:Yg,lights_phong_pars_fragment:Zg,lights_physical_fragment:$g,lights_physical_pars_fragment:Kg,lights_fragment_begin:Jg,lights_fragment_maps:Qg,lights_fragment_end:jg,lightprobes_pars_fragment:ex,logdepthbuf_fragment:tx,logdepthbuf_pars_fragment:nx,logdepthbuf_pars_vertex:ix,logdepthbuf_vertex:rx,map_fragment:sx,map_pars_fragment:ax,map_particle_fragment:ox,map_particle_pars_fragment:lx,metalnessmap_fragment:cx,metalnessmap_pars_fragment:ux,morphinstance_vertex:hx,morphcolor_vertex:fx,morphnormal_vertex:dx,morphtarget_pars_vertex:px,morphtarget_vertex:mx,normal_fragment_begin:_x,normal_fragment_maps:gx,normal_pars_fragment:xx,normal_pars_vertex:vx,normal_vertex:Sx,normalmap_pars_fragment:Mx,clearcoat_normal_fragment_begin:yx,clearcoat_normal_fragment_maps:Tx,clearcoat_pars_fragment:Ex,iridescence_pars_fragment:bx,opaque_fragment:wx,packing:Ax,premultiplied_alpha_fragment:Cx,project_vertex:Rx,dithering_fragment:Px,dithering_pars_fragment:Dx,roughnessmap_fragment:Lx,roughnessmap_pars_fragment:Ix,shadowmap_pars_fragment:Nx,shadowmap_pars_vertex:Ux,shadowmap_vertex:qx,shadowmask_pars_fragment:Fx,skinbase_vertex:Ox,skinning_pars_vertex:Bx,skinning_vertex:zx,skinnormal_vertex:kx,specularmap_fragment:Vx,specularmap_pars_fragment:Hx,tonemapping_fragment:Gx,tonemapping_pars_fragment:Wx,transmission_fragment:Xx,transmission_pars_fragment:Yx,uv_pars_fragment:Zx,uv_pars_vertex:$x,uv_vertex:Kx,worldpos_vertex:Jx,background_vert:Qx,background_frag:jx,backgroundCube_vert:e2,backgroundCube_frag:t2,cube_vert:n2,cube_frag:i2,depth_vert:r2,depth_frag:s2,distance_vert:a2,distance_frag:o2,equirect_vert:l2,equirect_frag:c2,linedashed_vert:u2,linedashed_frag:h2,meshbasic_vert:f2,meshbasic_frag:d2,meshlambert_vert:p2,meshlambert_frag:m2,meshmatcap_vert:_2,meshmatcap_frag:g2,meshnormal_vert:x2,meshnormal_frag:v2,meshphong_vert:S2,meshphong_frag:M2,meshphysical_vert:y2,meshphysical_frag:T2,meshtoon_vert:E2,meshtoon_frag:b2,points_vert:w2,points_frag:A2,shadow_vert:C2,shadow_frag:R2,sprite_vert:P2,sprite_frag:D2},be={common:{diffuse:{value:new je(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new et},alphaMap:{value:null},alphaMapTransform:{value:new et},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new et}},envmap:{envMap:{value:null},envMapRotation:{value:new et},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new et}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new et}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new et},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new et},normalScale:{value:new fe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new et},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new et}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new et}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new et}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new je(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new B},probesMax:{value:new B},probesResolution:{value:new B}},points:{diffuse:{value:new je(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new et},alphaTest:{value:0},uvTransform:{value:new et}},sprite:{diffuse:{value:new je(16777215)},opacity:{value:1},center:{value:new fe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new et},alphaMap:{value:null},alphaMapTransform:{value:new et},alphaTest:{value:0}}},Ii={basic:{uniforms:Pn([be.common,be.specularmap,be.envmap,be.aomap,be.lightmap,be.fog]),vertexShader:nt.meshbasic_vert,fragmentShader:nt.meshbasic_frag},lambert:{uniforms:Pn([be.common,be.specularmap,be.envmap,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.fog,be.lights,{emissive:{value:new je(0)},envMapIntensity:{value:1}}]),vertexShader:nt.meshlambert_vert,fragmentShader:nt.meshlambert_frag},phong:{uniforms:Pn([be.common,be.specularmap,be.envmap,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.fog,be.lights,{emissive:{value:new je(0)},specular:{value:new je(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:nt.meshphong_vert,fragmentShader:nt.meshphong_frag},standard:{uniforms:Pn([be.common,be.envmap,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.roughnessmap,be.metalnessmap,be.fog,be.lights,{emissive:{value:new je(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:nt.meshphysical_vert,fragmentShader:nt.meshphysical_frag},toon:{uniforms:Pn([be.common,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.gradientmap,be.fog,be.lights,{emissive:{value:new je(0)}}]),vertexShader:nt.meshtoon_vert,fragmentShader:nt.meshtoon_frag},matcap:{uniforms:Pn([be.common,be.bumpmap,be.normalmap,be.displacementmap,be.fog,{matcap:{value:null}}]),vertexShader:nt.meshmatcap_vert,fragmentShader:nt.meshmatcap_frag},points:{uniforms:Pn([be.points,be.fog]),vertexShader:nt.points_vert,fragmentShader:nt.points_frag},dashed:{uniforms:Pn([be.common,be.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:nt.linedashed_vert,fragmentShader:nt.linedashed_frag},depth:{uniforms:Pn([be.common,be.displacementmap]),vertexShader:nt.depth_vert,fragmentShader:nt.depth_frag},normal:{uniforms:Pn([be.common,be.bumpmap,be.normalmap,be.displacementmap,{opacity:{value:1}}]),vertexShader:nt.meshnormal_vert,fragmentShader:nt.meshnormal_frag},sprite:{uniforms:Pn([be.sprite,be.fog]),vertexShader:nt.sprite_vert,fragmentShader:nt.sprite_frag},background:{uniforms:{uvTransform:{value:new et},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:nt.background_vert,fragmentShader:nt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new et}},vertexShader:nt.backgroundCube_vert,fragmentShader:nt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:nt.cube_vert,fragmentShader:nt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:nt.equirect_vert,fragmentShader:nt.equirect_frag},distance:{uniforms:Pn([be.common,be.displacementmap,{referencePosition:{value:new B},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:nt.distance_vert,fragmentShader:nt.distance_frag},shadow:{uniforms:Pn([be.lights,be.fog,{color:{value:new je(0)},opacity:{value:1}}]),vertexShader:nt.shadow_vert,fragmentShader:nt.shadow_frag}};Ii.physical={uniforms:Pn([Ii.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new et},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new et},clearcoatNormalScale:{value:new fe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new et},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new et},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new et},sheen:{value:0},sheenColor:{value:new je(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new et},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new et},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new et},transmissionSamplerSize:{value:new fe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new et},attenuationDistance:{value:0},attenuationColor:{value:new je(0)},specularColor:{value:new je(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new et},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new et},anisotropyVector:{value:new fe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new et}}]),vertexShader:nt.meshphysical_vert,fragmentShader:nt.meshphysical_frag};const Ko={r:0,b:0,g:0},L2=new Dt,s0=new et;s0.set(-1,0,0,0,1,0,0,0,1);function I2(r,e,t,n,i,s){const a=new je(0);let o=i===!0?0:1,l,c,u=null,d=0,h=null;function f(M){let A=M.isScene===!0?M.background:null;if(A&&A.isTexture){const v=M.backgroundBlurriness>0;A=e.get(A,v)}return A}function _(M){let A=!1;const v=f(M);v===null?p(a,o):v&&v.isColor&&(p(v,1),A=!0);const y=r.xr.getEnvironmentBlendMode();y==="additive"?t.buffers.color.setClear(0,0,0,1,s):y==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,s),(r.autoClear||A)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function g(M,A){const v=f(A);v&&(v.isCubeTexture||v.mapping===Jl)?(c===void 0&&(c=new en(new os(1,1,1),new cn({name:"BackgroundCubeMaterial",uniforms:ea(Ii.backgroundCube.uniforms),vertexShader:Ii.backgroundCube.vertexShader,fragmentShader:Ii.backgroundCube.fragmentShader,side:Vn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(y,E,w){this.matrixWorld.copyPosition(w.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=v,c.material.uniforms.backgroundBlurriness.value=A.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(L2.makeRotationFromEuler(A.backgroundRotation)).transpose(),v.isCubeTexture&&v.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(s0),c.material.toneMapped=ht.getTransfer(v.colorSpace)!==gt,(u!==v||d!==v.version||h!==r.toneMapping)&&(c.material.needsUpdate=!0,u=v,d=v.version,h=r.toneMapping),c.layers.enableAll(),M.unshift(c,c.geometry,c.material,0,0,null)):v&&v.isTexture&&(l===void 0&&(l=new en(new vo(2,2),new cn({name:"BackgroundMaterial",uniforms:ea(Ii.background.uniforms),vertexShader:Ii.background.vertexShader,fragmentShader:Ii.background.fragmentShader,side:rs,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=v,l.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,l.material.toneMapped=ht.getTransfer(v.colorSpace)!==gt,v.matrixAutoUpdate===!0&&v.updateMatrix(),l.material.uniforms.uvTransform.value.copy(v.matrix),(u!==v||d!==v.version||h!==r.toneMapping)&&(l.material.needsUpdate=!0,u=v,d=v.version,h=r.toneMapping),l.layers.enableAll(),M.unshift(l,l.geometry,l.material,0,0,null))}function p(M,A){M.getRGB(Ko,t0(r)),t.buffers.color.setClear(Ko.r,Ko.g,Ko.b,A,s)}function m(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(M,A=1){a.set(M),o=A,p(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(M){o=M,p(a,o)},render:_,addToRenderList:g,dispose:m}}function N2(r,e){const t=r.getParameter(r.MAX_VERTEX_ATTRIBS),n={},i=h(null);let s=i,a=!1;function o(L,D,k,I,F){let X=!1;const z=d(L,I,k,D);s!==z&&(s=z,c(s.object)),X=f(L,I,k,F),X&&_(L,I,k,F),F!==null&&e.update(F,r.ELEMENT_ARRAY_BUFFER),(X||a)&&(a=!1,v(L,D,k,I),F!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,e.get(F).buffer))}function l(){return r.createVertexArray()}function c(L){return r.bindVertexArray(L)}function u(L){return r.deleteVertexArray(L)}function d(L,D,k,I){const F=I.wireframe===!0;let X=n[D.id];X===void 0&&(X={},n[D.id]=X);const z=L.isInstancedMesh===!0?L.id:0;let j=X[z];j===void 0&&(j={},X[z]=j);let Y=j[k.id];Y===void 0&&(Y={},j[k.id]=Y);let P=Y[F];return P===void 0&&(P=h(l()),Y[F]=P),P}function h(L){const D=[],k=[],I=[];for(let F=0;F<t;F++)D[F]=0,k[F]=0,I[F]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:D,enabledAttributes:k,attributeDivisors:I,object:L,attributes:{},index:null}}function f(L,D,k,I){const F=s.attributes,X=D.attributes;let z=0;const j=k.getAttributes();for(const Y in j)if(j[Y].location>=0){const J=F[Y];let we=X[Y];if(we===void 0&&(Y==="instanceMatrix"&&L.instanceMatrix&&(we=L.instanceMatrix),Y==="instanceColor"&&L.instanceColor&&(we=L.instanceColor)),J===void 0||J.attribute!==we||we&&J.data!==we.data)return!0;z++}return s.attributesNum!==z||s.index!==I}function _(L,D,k,I){const F={},X=D.attributes;let z=0;const j=k.getAttributes();for(const Y in j)if(j[Y].location>=0){let J=X[Y];J===void 0&&(Y==="instanceMatrix"&&L.instanceMatrix&&(J=L.instanceMatrix),Y==="instanceColor"&&L.instanceColor&&(J=L.instanceColor));const we={};we.attribute=J,J&&J.data&&(we.data=J.data),F[Y]=we,z++}s.attributes=F,s.attributesNum=z,s.index=I}function g(){const L=s.newAttributes;for(let D=0,k=L.length;D<k;D++)L[D]=0}function p(L){m(L,0)}function m(L,D){const k=s.newAttributes,I=s.enabledAttributes,F=s.attributeDivisors;k[L]=1,I[L]===0&&(r.enableVertexAttribArray(L),I[L]=1),F[L]!==D&&(r.vertexAttribDivisor(L,D),F[L]=D)}function M(){const L=s.newAttributes,D=s.enabledAttributes;for(let k=0,I=D.length;k<I;k++)D[k]!==L[k]&&(r.disableVertexAttribArray(k),D[k]=0)}function A(L,D,k,I,F,X,z){z===!0?r.vertexAttribIPointer(L,D,k,F,X):r.vertexAttribPointer(L,D,k,I,F,X)}function v(L,D,k,I){g();const F=I.attributes,X=k.getAttributes(),z=D.defaultAttributeValues;for(const j in X){const Y=X[j];if(Y.location>=0){let P=F[j];if(P===void 0&&(j==="instanceMatrix"&&L.instanceMatrix&&(P=L.instanceMatrix),j==="instanceColor"&&L.instanceColor&&(P=L.instanceColor)),P!==void 0){const J=P.normalized,we=P.itemSize,Ee=e.get(P);if(Ee===void 0)continue;const Ye=Ee.buffer,We=Ee.type,Ke=Ee.bytesPerElement,$=We===r.INT||We===r.UNSIGNED_INT||P.gpuType===Ph;if(P.isInterleavedBufferAttribute){const te=P.data,me=te.stride,Ve=P.offset;if(te.isInstancedInterleavedBuffer){for(let xe=0;xe<Y.locationSize;xe++)m(Y.location+xe,te.meshPerAttribute);L.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=te.meshPerAttribute*te.count)}else for(let xe=0;xe<Y.locationSize;xe++)p(Y.location+xe);r.bindBuffer(r.ARRAY_BUFFER,Ye);for(let xe=0;xe<Y.locationSize;xe++)A(Y.location+xe,we/Y.locationSize,We,J,me*Ke,(Ve+we/Y.locationSize*xe)*Ke,$)}else{if(P.isInstancedBufferAttribute){for(let te=0;te<Y.locationSize;te++)m(Y.location+te,P.meshPerAttribute);L.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=P.meshPerAttribute*P.count)}else for(let te=0;te<Y.locationSize;te++)p(Y.location+te);r.bindBuffer(r.ARRAY_BUFFER,Ye);for(let te=0;te<Y.locationSize;te++)A(Y.location+te,we/Y.locationSize,We,J,we*Ke,we/Y.locationSize*te*Ke,$)}}else if(z!==void 0){const J=z[j];if(J!==void 0)switch(J.length){case 2:r.vertexAttrib2fv(Y.location,J);break;case 3:r.vertexAttrib3fv(Y.location,J);break;case 4:r.vertexAttrib4fv(Y.location,J);break;default:r.vertexAttrib1fv(Y.location,J)}}}}M()}function y(){T();for(const L in n){const D=n[L];for(const k in D){const I=D[k];for(const F in I){const X=I[F];for(const z in X)u(X[z].object),delete X[z];delete I[F]}}delete n[L]}}function E(L){if(n[L.id]===void 0)return;const D=n[L.id];for(const k in D){const I=D[k];for(const F in I){const X=I[F];for(const z in X)u(X[z].object),delete X[z];delete I[F]}}delete n[L.id]}function w(L){for(const D in n){const k=n[D];for(const I in k){const F=k[I];if(F[L.id]===void 0)continue;const X=F[L.id];for(const z in X)u(X[z].object),delete X[z];delete F[L.id]}}}function x(L){for(const D in n){const k=n[D],I=L.isInstancedMesh===!0?L.id:0,F=k[I];if(F!==void 0){for(const X in F){const z=F[X];for(const j in z)u(z[j].object),delete z[j];delete F[X]}delete k[I],Object.keys(k).length===0&&delete n[D]}}}function T(){C(),a=!0,s!==i&&(s=i,c(s.object))}function C(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:o,reset:T,resetDefaultState:C,dispose:y,releaseStatesOfGeometry:E,releaseStatesOfObject:x,releaseStatesOfProgram:w,initAttributes:g,enableAttribute:p,disableUnusedAttributes:M}}function U2(r,e,t){let n;function i(l){n=l}function s(l,c){r.drawArrays(n,l,c),t.update(c,n,1)}function a(l,c,u){u!==0&&(r.drawArraysInstanced(n,l,c,u),t.update(c,n,u))}function o(l,c,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,u);let h=0;for(let f=0;f<u;f++)h+=c[f];t.update(h,n,1)}this.setMode=i,this.render=s,this.renderInstances=a,this.renderMultiDraw=o}function q2(r,e,t,n){let i;function s(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const w=e.get("EXT_texture_filter_anisotropic");i=r.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function a(w){return!(w!==wi&&n.convert(w)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(w){const x=w===Hn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(w!==ni&&w!==qi&&!x&&n.convert(w)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE))}function l(w){if(w==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const u=l(c);u!==c&&(Je("WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const d=t.logarithmicDepthBuffer===!0,h=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&h===!1&&Je("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const f=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),_=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),g=r.getParameter(r.MAX_TEXTURE_SIZE),p=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),m=r.getParameter(r.MAX_VERTEX_ATTRIBS),M=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),A=r.getParameter(r.MAX_VARYING_VECTORS),v=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),y=r.getParameter(r.MAX_SAMPLES),E=r.getParameter(r.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:d,reversedDepthBuffer:h,maxTextures:f,maxVertexTextures:_,maxTextureSize:g,maxCubemapSize:p,maxAttributes:m,maxVertexUniforms:M,maxVaryings:A,maxFragmentUniforms:v,maxSamples:y,samples:E}}function F2(r){const e=this;let t=null,n=0,i=!1,s=!1;const a=new xr,o=new et,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,h){const f=d.length!==0||h||n!==0||i;return i=h,n=d.length,f},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,h){t=u(d,h,0)},this.setState=function(d,h,f){const _=d.clippingPlanes,g=d.clipIntersection,p=d.clipShadows,m=r.get(d);if(!i||_===null||_.length===0||s&&!p)s?u(null):c();else{const M=s?0:n,A=M*4;let v=m.clippingState||null;l.value=v,v=u(_,h,A,f);for(let y=0;y!==A;++y)v[y]=t[y];m.clippingState=v,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=M}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(d,h,f,_){const g=d!==null?d.length:0;let p=null;if(g!==0){if(p=l.value,_!==!0||p===null){const m=f+g*4,M=h.matrixWorldInverse;o.getNormalMatrix(M),(p===null||p.length<m)&&(p=new Float32Array(m));for(let A=0,v=f;A!==g;++A,v+=4)a.copy(d[A]).applyMatrix4(M,o),a.normal.toArray(p,v),p[v+3]=a.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=g,e.numIntersection=0,p}}const Bs=4,O2=6,B2=20,z2=256,Sa=new ec,xd=new je;let Oc=null,Bc=0,zc=0,kc=!1;const k2=new B,Br=new B;class vd{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,i=100,s={}){const{size:a=256,position:o=k2}=s;Oc=this._renderer.getRenderTarget(),Bc=this._renderer.getActiveCubeFace(),zc=this._renderer.getActiveMipmapLevel(),kc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,n,i,l,o),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=yd(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Md(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Oc,Bc,zc),this._renderer.xr.enabled=kc,e.scissorTest=!1,Ds(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===ss||e.mapping===Qs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Oc=this._renderer.getRenderTarget(),Bc=this._renderer.getActiveCubeFace(),zc=this._renderer.getActiveMipmapLevel(),kc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:yn,minFilter:yn,generateMipmaps:!1,type:Hn,format:wi,colorSpace:Il,depthBuffer:!1},i=Sd(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Sd(e,t,n);const{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=V2(s)),this._blurMaterial=G2(s,e,t),this._ggxMaterial=H2(s,e,t)}return i}_compileMaterial(e){const t=new en(new En,e);this._renderer.compile(t,Sa)}_sceneToCubeUV(e,t,n,i,s){const l=new zn(90,1,t,n),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],d=this._renderer,h=d.autoClear,f=d.toneMapping;d.getClearColor(xd),d.toneMapping=ki,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(i),d.clearDepth(),d.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new en(new os,new jl({name:"PMREM.Background",side:Vn,depthWrite:!1,depthTest:!1})));const g=this._backgroundBox,p=g.material;let m=!1;const M=e.background;M?M.isColor&&(p.color.copy(M),e.background=null,m=!0):(p.color.copy(xd),m=!0);for(let A=0;A<6;A++){const v=A%3;v===0?(l.up.set(0,c[A],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+u[A],s.y,s.z)):v===1?(l.up.set(0,0,c[A]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+u[A],s.z)):(l.up.set(0,c[A],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+u[A]));const y=this._cubeSize;Ds(i,v*y,A>2?y:0,y,y),d.setRenderTarget(i),m&&d.render(g,l),d.render(e,l)}d.toneMapping=f,d.autoClear=h,e.background=M}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===ss||e.mapping===Qs;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=yd()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Md());const s=i?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=s;const o=s.uniforms;o.envMap.value=e;const l=this._cubeSize;Ds(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(a,Sa)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const i=this._lodMeshes.length;for(let s=1;s<i;s++)this._applyGGXFilter(e,s-1,s);t.autoClear=n}_applyGGXFilter(e,t,n){const i=this._renderer,s=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;const l=a.uniforms,c=n/(this._lodMeshes.length-1),u=t/(this._lodMeshes.length-1),d=Math.sqrt(c*c-u*u),h=c*1.25,f=d*h,{_lodMax:_}=this,g=this._sizeLods[n],p=3*g*(n>_-Bs?n-_+Bs:0),m=4*(this._cubeSize-g);l.envMap.value=e.texture,l.roughness.value=f,l.mipInt.value=_-t,Ds(s,p,m,3*g,2*g),i.setRenderTarget(s),i.render(o,Sa),l.envMap.value=s.texture,l.roughness.value=0,l.mipInt.value=_-n,Ds(e,p,m,3*g,2*g),i.setRenderTarget(e),i.render(o,Sa)}_blur(e,t,n,i){const s=this._pingPongRenderTarget,a=Math.min(i,Math.PI)/Math.SQRT2;this._blurPass(e,s,t,n,a),this._blurPass(s,e,n,n,a)}_blurPass(e,t,n,i,s){const a=this._renderer,o=this._blurMaterial,l=this._lodMeshes[i];l.material=o;const c=o.uniforms;c.envMap.value=e.texture,c.sigma.value=s,c.mipInt.value=this._lodMax-n;const u=this._sizeLods[i],d=3*u*(i>this._lodMax-Bs?i-this._lodMax+Bs:0),h=4*(this._cubeSize-u);Ds(t,d,h,3*u,2*u),a.setRenderTarget(t),a.render(l,Sa)}}function V2(r){const e=[],t=[];let n=r;const i=r-Bs+1+O2;for(let s=0;s<i;s++){const a=Math.pow(2,n);e.push(a);const o=1/(a-2),l=-o,c=1+o,u=[l,l,c,l,c,c,l,l,c,c,l,c],d=6,h=6,f=3,_=new Float32Array(f*h*d),g=new Float32Array(f*h*d);for(let m=0;m<d;m++){const M=m%3*2/3-1,A=m>2?0:-1,v=[M,A,0,M+2/3,A,0,M+2/3,A+1,0,M,A,0,M+2/3,A+1,0,M,A+1,0];_.set(v,f*h*m);for(let y=0;y<h;y++){const E=u[y*2]*2-1,w=u[y*2+1]*2-1;m===0?Br.set(1,w,E):m===1?Br.set(-E,1,-w):m===2?Br.set(-E,w,1):m===3?Br.set(-1,w,-E):m===4?Br.set(-E,-1,w):Br.set(E,w,-1),Br.toArray(g,(m*h+y)*f)}}const p=new En;p.setAttribute("position",new Vi(_,f)),p.setAttribute("outputDirection",new Vi(g,f)),t.push(new en(p,null)),n>Bs&&n--}return{lodMeshes:t,sizeLods:e}}function Sd(r,e,t){const n=new Fn(r,e,t);return n.texture.mapping=Jl,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Ds(r,e,t,n,i){r.viewport.set(e,t,n,i),r.scissor.set(e,t,n,i)}function H2(r,e,t){return new cn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:z2,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:tc(),fragmentShader:`

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
		`,blending:zi,depthTest:!1,depthWrite:!1})}function G2(r,e,t){return new cn({name:"SphericalGaussianBlur",defines:{SAMPLES:B2,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:tc(),fragmentShader:`

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
		`,blending:zi,depthTest:!1,depthWrite:!1})}function Md(){return new cn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:tc(),fragmentShader:`

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
		`,blending:zi,depthTest:!1,depthWrite:!1})}function yd(){return new cn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:tc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:zi,depthTest:!1,depthWrite:!1})}function tc(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}class a0 extends Fn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new Gp(i),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new os(5,5,5),s=new cn({name:"CubemapFromEquirect",uniforms:ea(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Vn,blending:zi});s.uniforms.tEquirect.value=t;const a=new en(i,s),o=t.minFilter;return t.minFilter===Wr&&(t.minFilter=yn),new H1(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,i=!0){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,i);e.setRenderTarget(s)}}function W2(r){let e=new WeakMap,t=new WeakMap,n=null;function i(h,f=!1){return h==null?null:f?a(h):s(h)}function s(h){if(h&&h.isTexture){const f=h.mapping;if(f===lc||f===cc)if(e.has(h)){const _=e.get(h).texture;return o(_,h.mapping)}else{const _=h.image;if(_&&_.height>0){const g=new a0(_.height);return g.fromEquirectangularTexture(r,h),e.set(h,g),h.addEventListener("dispose",c),o(g.texture,h.mapping)}else return null}}return h}function a(h){if(h&&h.isTexture){const f=h.mapping,_=f===lc||f===cc,g=f===ss||f===Qs;if(_||g){let p=t.get(h);const m=p!==void 0?p.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==m)return n===null&&(n=new vd(r)),p=_?n.fromEquirectangular(h,p):n.fromCubemap(h,p),p.texture.pmremVersion=h.pmremVersion,t.set(h,p),p.texture;if(p!==void 0)return p.texture;{const M=h.image;return _&&M&&M.height>0||g&&M&&l(M)?(n===null&&(n=new vd(r)),p=_?n.fromEquirectangular(h):n.fromCubemap(h),p.texture.pmremVersion=h.pmremVersion,t.set(h,p),h.addEventListener("dispose",u),p.texture):null}}}return h}function o(h,f){return f===lc?h.mapping=ss:f===cc&&(h.mapping=Qs),h}function l(h){let f=0;const _=6;for(let g=0;g<_;g++)h[g]!==void 0&&f++;return f===_}function c(h){const f=h.target;f.removeEventListener("dispose",c);const _=e.get(f);_!==void 0&&(e.delete(f),_.dispose())}function u(h){const f=h.target;f.removeEventListener("dispose",u);const _=t.get(f);_!==void 0&&(t.delete(f),_.dispose())}function d(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:d}}function X2(r){const e={};function t(n){if(e[n]!==void 0)return e[n];const i=r.getExtension(n);return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const i=t(n);return i===null&&Gs("WebGLRenderer: "+n+" extension not supported."),i}}}function Y2(r,e,t,n){const i={},s=new WeakMap;function a(d){const h=d.target;h.index!==null&&e.remove(h.index);for(const _ in h.attributes)e.remove(h.attributes[_]);h.removeEventListener("dispose",a),delete i[h.id];const f=s.get(h);f&&(e.remove(f),s.delete(h)),n.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function o(d,h){return i[h.id]===!0||(h.addEventListener("dispose",a),i[h.id]=!0,t.memory.geometries++),h}function l(d){const h=d.attributes;for(const f in h)e.update(h[f],r.ARRAY_BUFFER)}function c(d){const h=[],f=d.index,_=d.attributes.position;let g=0;if(_===void 0)return;if(f!==null){const M=f.array;g=f.version;for(let A=0,v=M.length;A<v;A+=3){const y=M[A+0],E=M[A+1],w=M[A+2];h.push(y,E,E,w,w,y)}}else{const M=_.array;g=_.version;for(let A=0,v=M.length/3-1;A<v;A+=3){const y=A+0,E=A+1,w=A+2;h.push(y,E,E,w,w,y)}}const p=new(_.count>=65535?kp:zp)(h,1);p.version=g;const m=s.get(d);m&&e.remove(m),s.set(d,p)}function u(d){const h=s.get(d);if(h){const f=d.index;f!==null&&h.version<f.version&&c(d)}else c(d);return s.get(d)}return{get:o,update:l,getWireframeAttribute:u}}function Z2(r,e,t){let n;function i(d){n=d}let s,a;function o(d){s=d.type,a=d.bytesPerElement}function l(d,h){r.drawElements(n,h,s,d*a),t.update(h,n,1)}function c(d,h,f){f!==0&&(r.drawElementsInstanced(n,h,s,d*a,f),t.update(h,n,f))}function u(d,h,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,h,0,s,d,0,f);let g=0;for(let p=0;p<f;p++)g+=h[p];t.update(g,n,1)}this.setMode=i,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=u}function $2(r){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,a,o){switch(t.calls++,a){case r.TRIANGLES:t.triangles+=o*(s/3);break;case r.LINES:t.lines+=o*(s/2);break;case r.LINE_STRIP:t.lines+=o*(s-1);break;case r.LINE_LOOP:t.lines+=o*s;break;case r.POINTS:t.points+=o*s;break;default:mt("WebGLInfo: Unknown draw mode:",a);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function K2(r,e,t){const n=new WeakMap,i=new Nt;function s(a,o,l){const c=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=u!==void 0?u.length:0;let h=n.get(o);if(h===void 0||h.count!==d){let C=function(){x.dispose(),n.delete(o),o.removeEventListener("dispose",C)};var f=C;h!==void 0&&h.texture.dispose();const _=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,p=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],M=o.morphAttributes.normal||[],A=o.morphAttributes.color||[];let v=0;_===!0&&(v=1),g===!0&&(v=2),p===!0&&(v=3);let y=o.attributes.position.count*v,E=1;y>e.maxTextureSize&&(E=Math.ceil(y/e.maxTextureSize),y=e.maxTextureSize);const w=new Float32Array(y*E*4*d),x=new Fp(w,y,E,d);x.type=qi,x.needsUpdate=!0;const T=v*4;for(let L=0;L<d;L++){const D=m[L],k=M[L],I=A[L],F=y*E*4*L;for(let X=0;X<D.count;X++){const z=X*T;_===!0&&(i.fromBufferAttribute(D,X),w[F+z+0]=i.x,w[F+z+1]=i.y,w[F+z+2]=i.z,w[F+z+3]=0),g===!0&&(i.fromBufferAttribute(k,X),w[F+z+4]=i.x,w[F+z+5]=i.y,w[F+z+6]=i.z,w[F+z+7]=0),p===!0&&(i.fromBufferAttribute(I,X),w[F+z+8]=i.x,w[F+z+9]=i.y,w[F+z+10]=i.z,w[F+z+11]=I.itemSize===4?i.w:1)}}h={count:d,texture:x,size:new fe(y,E)},n.set(o,h),o.addEventListener("dispose",C)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(r,"morphTexture",a.morphTexture,t);else{let _=0;for(let p=0;p<c.length;p++)_+=c[p];const g=o.morphTargetsRelative?1:1-_;l.getUniforms().setValue(r,"morphTargetBaseInfluence",g),l.getUniforms().setValue(r,"morphTargetInfluences",c)}l.getUniforms().setValue(r,"morphTargetsTexture",h.texture,t),l.getUniforms().setValue(r,"morphTargetsTextureSize",h.size)}return{update:s}}function J2(r,e,t,n,i){let s=new WeakMap;function a(c){const u=i.render.frame,d=c.geometry,h=e.get(c,d);if(s.get(h)!==u&&(e.update(h),s.set(h,u)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),s.get(c)!==u&&(t.update(c.instanceMatrix,r.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,r.ARRAY_BUFFER),s.set(c,u))),c.isSkinnedMesh){const f=c.skeleton;s.get(f)!==u&&(f.update(),s.set(f,u))}return h}function o(){s=new WeakMap}function l(c){const u=c.target;u.removeEventListener("dispose",l),n.releaseStatesOfObject(u),t.remove(u.instanceMatrix),u.instanceColor!==null&&t.remove(u.instanceColor)}return{update:a,dispose:o}}const Q2={[Eh]:"LINEAR_TONE_MAPPING",[bh]:"REINHARD_TONE_MAPPING",[wh]:"CINEON_TONE_MAPPING",[Kl]:"ACES_FILMIC_TONE_MAPPING",[Ch]:"AGX_TONE_MAPPING",[Rh]:"NEUTRAL_TONE_MAPPING",[Ah]:"CUSTOM_TONE_MAPPING"};function j2(r,e,t,n,i,s){const a=new Fn(e,t,{type:r,depthBuffer:i,stencilBuffer:s,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1});let o=null,l=null;const c=new En;c.setAttribute("position",new Bt([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new Bt([0,2,0,0,2,0],2));const u=new n0({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),d=new en(c,u),h=new ec(-1,1,1,-1,0,1);let f=null,_=null,g=!1,p,m=null,M=[],A=!1;this.setSize=function(v,y){a.setSize(v,y),o!==null&&o.setSize(v,y),l!==null&&l.setSize(v,y);for(let E=0;E<M.length;E++){const w=M[E];w.setSize&&w.setSize(v,y)}},this.setEffects=function(v){M=v,A=M.length>0&&M[0].isRenderPass===!0;const y=a.width,E=a.height;M.length>0&&o===null&&(o=new Fn(y,E,{type:Hn,depthBuffer:!1,stencilBuffer:!1}),l=new Fn(y,E,{type:Hn,depthBuffer:!1,stencilBuffer:!1}));for(let w=0;w<M.length;w++){const x=M[w];x.setSize&&x.setSize(y,E)}},this.begin=function(v,y){if(g||v.toneMapping===ki&&M.length===0)return!1;if(m=y,y!==null){const E=y.width,w=y.height;(a.width!==E||a.height!==w)&&this.setSize(E,w)}return A===!1&&v.setRenderTarget(a),p=v.toneMapping,v.toneMapping=ki,!0},this.hasRenderPass=function(){return A},this.end=function(v,y){v.toneMapping=p,g=!0;let E=a,w=o;for(let x=0;x<M.length;x++){const T=M[x];T.enabled!==!1&&(T.render(v,w,E,y),T.needsSwap!==!1&&(E=w,w=w===o?l:o))}if(f!==v.outputColorSpace||_!==v.toneMapping){f=v.outputColorSpace,_=v.toneMapping,u.defines={},ht.getTransfer(f)===gt&&(u.defines.SRGB_TRANSFER="");const x=Q2[_];x&&(u.defines[x]=""),u.needsUpdate=!0}u.uniforms.tDiffuse.value=E.texture,v.setRenderTarget(m),v.render(d,h),m=null,g=!1},this.isCompositing=function(){return g},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),l!==null&&l.dispose(),c.dispose(),u.dispose()}}const o0=new qn,Ju=new io(1,1),l0=new Fp,c0=new P_,u0=new Gp,Td=[],Ed=[],bd=new Float32Array(16),wd=new Float32Array(9),Ad=new Float32Array(4);function fa(r,e,t){const n=r[0];if(n<=0||n>0)return r;const i=e*t;let s=Td[i];if(s===void 0&&(s=new Float32Array(i),Td[i]=s),e!==0){n.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,r[a].toArray(s,o)}return s}function tn(r,e){if(r.length!==e.length)return!1;for(let t=0,n=r.length;t<n;t++)if(r[t]!==e[t])return!1;return!0}function nn(r,e){for(let t=0,n=e.length;t<n;t++)r[t]=e[t]}function nc(r,e){let t=Ed[e];t===void 0&&(t=new Int32Array(e),Ed[e]=t);for(let n=0;n!==e;++n)t[n]=r.allocateTextureUnit();return t}function e3(r,e){const t=this.cache;t[0]!==e&&(r.uniform1f(this.addr,e),t[0]=e)}function t3(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(tn(t,e))return;r.uniform2fv(this.addr,e),nn(t,e)}}function n3(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(tn(t,e))return;r.uniform3fv(this.addr,e),nn(t,e)}}function i3(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(tn(t,e))return;r.uniform4fv(this.addr,e),nn(t,e)}}function r3(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(tn(t,e))return;r.uniformMatrix2fv(this.addr,!1,e),nn(t,e)}else{if(tn(t,n))return;Ad.set(n),r.uniformMatrix2fv(this.addr,!1,Ad),nn(t,n)}}function s3(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(tn(t,e))return;r.uniformMatrix3fv(this.addr,!1,e),nn(t,e)}else{if(tn(t,n))return;wd.set(n),r.uniformMatrix3fv(this.addr,!1,wd),nn(t,n)}}function a3(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(tn(t,e))return;r.uniformMatrix4fv(this.addr,!1,e),nn(t,e)}else{if(tn(t,n))return;bd.set(n),r.uniformMatrix4fv(this.addr,!1,bd),nn(t,n)}}function o3(r,e){const t=this.cache;t[0]!==e&&(r.uniform1i(this.addr,e),t[0]=e)}function l3(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(tn(t,e))return;r.uniform2iv(this.addr,e),nn(t,e)}}function c3(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(tn(t,e))return;r.uniform3iv(this.addr,e),nn(t,e)}}function u3(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(tn(t,e))return;r.uniform4iv(this.addr,e),nn(t,e)}}function h3(r,e){const t=this.cache;t[0]!==e&&(r.uniform1ui(this.addr,e),t[0]=e)}function f3(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(tn(t,e))return;r.uniform2uiv(this.addr,e),nn(t,e)}}function d3(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(tn(t,e))return;r.uniform3uiv(this.addr,e),nn(t,e)}}function p3(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(tn(t,e))return;r.uniform4uiv(this.addr,e),nn(t,e)}}function m3(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i);let s;this.type===r.SAMPLER_2D_SHADOW?(Ju.compareFunction=t.isReversedDepthBuffer()?Fh:qh,s=Ju):s=o0,t.setTexture2D(e||s,i)}function _3(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||c0,i)}function g3(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||u0,i)}function x3(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||l0,i)}function v3(r){switch(r){case 5126:return e3;case 35664:return t3;case 35665:return n3;case 35666:return i3;case 35674:return r3;case 35675:return s3;case 35676:return a3;case 5124:case 35670:return o3;case 35667:case 35671:return l3;case 35668:case 35672:return c3;case 35669:case 35673:return u3;case 5125:return h3;case 36294:return f3;case 36295:return d3;case 36296:return p3;case 35678:case 36198:case 36298:case 36306:case 35682:return m3;case 35679:case 36299:case 36307:return _3;case 35680:case 36300:case 36308:case 36293:return g3;case 36289:case 36303:case 36311:case 36292:return x3}}function S3(r,e){r.uniform1fv(this.addr,e)}function M3(r,e){const t=fa(e,this.size,2);r.uniform2fv(this.addr,t)}function y3(r,e){const t=fa(e,this.size,3);r.uniform3fv(this.addr,t)}function T3(r,e){const t=fa(e,this.size,4);r.uniform4fv(this.addr,t)}function E3(r,e){const t=fa(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,t)}function b3(r,e){const t=fa(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,t)}function w3(r,e){const t=fa(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,t)}function A3(r,e){r.uniform1iv(this.addr,e)}function C3(r,e){r.uniform2iv(this.addr,e)}function R3(r,e){r.uniform3iv(this.addr,e)}function P3(r,e){r.uniform4iv(this.addr,e)}function D3(r,e){r.uniform1uiv(this.addr,e)}function L3(r,e){r.uniform2uiv(this.addr,e)}function I3(r,e){r.uniform3uiv(this.addr,e)}function N3(r,e){r.uniform4uiv(this.addr,e)}function U3(r,e,t){const n=this.cache,i=e.length,s=nc(t,i);tn(n,s)||(r.uniform1iv(this.addr,s),nn(n,s));let a;this.type===r.SAMPLER_2D_SHADOW?a=Ju:a=o0;for(let o=0;o!==i;++o)t.setTexture2D(e[o]||a,s[o])}function q3(r,e,t){const n=this.cache,i=e.length,s=nc(t,i);tn(n,s)||(r.uniform1iv(this.addr,s),nn(n,s));for(let a=0;a!==i;++a)t.setTexture3D(e[a]||c0,s[a])}function F3(r,e,t){const n=this.cache,i=e.length,s=nc(t,i);tn(n,s)||(r.uniform1iv(this.addr,s),nn(n,s));for(let a=0;a!==i;++a)t.setTextureCube(e[a]||u0,s[a])}function O3(r,e,t){const n=this.cache,i=e.length,s=nc(t,i);tn(n,s)||(r.uniform1iv(this.addr,s),nn(n,s));for(let a=0;a!==i;++a)t.setTexture2DArray(e[a]||l0,s[a])}function B3(r){switch(r){case 5126:return S3;case 35664:return M3;case 35665:return y3;case 35666:return T3;case 35674:return E3;case 35675:return b3;case 35676:return w3;case 5124:case 35670:return A3;case 35667:case 35671:return C3;case 35668:case 35672:return R3;case 35669:case 35673:return P3;case 5125:return D3;case 36294:return L3;case 36295:return I3;case 36296:return N3;case 35678:case 36198:case 36298:case 36306:case 35682:return U3;case 35679:case 36299:case 36307:return q3;case 35680:case 36300:case 36308:case 36293:return F3;case 36289:case 36303:case 36311:case 36292:return O3}}class z3{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=v3(t.type)}}class k3{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=B3(t.type)}}class V3{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let s=0,a=i.length;s!==a;++s){const o=i[s];o.setValue(e,t[o.id],n)}}}const Vc=/(\w+)(\])?(\[|\.)?/g;function Cd(r,e){r.seq.push(e),r.map[e.id]=e}function H3(r,e,t){const n=r.name,i=n.length;for(Vc.lastIndex=0;;){const s=Vc.exec(n),a=Vc.lastIndex;let o=s[1];const l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===i){Cd(t,c===void 0?new z3(o,r,e):new k3(o,r,e));break}else{let d=t.map[o];d===void 0&&(d=new V3(o),Cd(t,d)),t=d}}}class xl{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){const o=e.getActiveUniform(t,a),l=e.getUniformLocation(t,o.name);H3(o,l,this)}const i=[],s=[];for(const a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?i.push(a):s.push(a);i.length>0&&(this.seq=i.concat(s))}setValue(e,t,n,i){const s=this.map[t];s!==void 0&&s.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let s=0,a=t.length;s!==a;++s){const o=t[s],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,s=e.length;i!==s;++i){const a=e[i];a.id in t&&n.push(a)}return n}}function Rd(r,e,t){const n=r.createShader(e);return r.shaderSource(n,t),r.compileShader(n),n}const G3=37297;let W3=0;function X3(r,e){const t=r.split(`
`),n=[],i=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let a=i;a<s;a++){const o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}const Pd=new et;function Y3(r){ht._getMatrix(Pd,ht.workingColorSpace,r);const e=`mat3( ${Pd.elements.map(t=>t.toFixed(4))} )`;switch(ht.getTransfer(r)){case Nl:return[e,"LinearTransferOETF"];case gt:return[e,"sRGBTransferOETF"];default:return Je("WebGLProgram: Unsupported color space: ",r),[e,"LinearTransferOETF"]}}function Dd(r,e,t){const n=r.getShaderParameter(e,r.COMPILE_STATUS),s=(r.getShaderInfoLog(e)||"").trim();if(n&&s==="")return"";const a=/ERROR: 0:(\d+)/.exec(s);if(a){const o=parseInt(a[1]);return t.toUpperCase()+`

`+s+`

`+X3(r.getShaderSource(e),o)}else return s}function Z3(r,e){const t=Y3(e);return[`vec4 ${r}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const $3={[Eh]:"Linear",[bh]:"Reinhard",[wh]:"Cineon",[Kl]:"ACESFilmic",[Ch]:"AgX",[Rh]:"Neutral",[Ah]:"Custom"};function K3(r,e){const t=$3[e];return t===void 0?(Je("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+r+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+r+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Jo=new B;function J3(){ht.getLuminanceCoefficients(Jo);const r=Jo.x.toFixed(4),e=Jo.y.toFixed(4),t=Jo.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Q3(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Aa).join(`
`)}function j3(r){const e=[];for(const t in r){const n=r[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function ev(r,e){const t={},n=r.getProgramParameter(e,r.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const s=r.getActiveAttrib(e,i),a=s.name;let o=1;s.type===r.FLOAT_MAT2&&(o=2),s.type===r.FLOAT_MAT3&&(o=3),s.type===r.FLOAT_MAT4&&(o=4),t[a]={type:s.type,location:r.getAttribLocation(e,a),locationSize:o}}return t}function Aa(r){return r!==""}function Ld(r,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Id(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const tv=/^[ \t]*#include +<([\w\d./]+)>/gm;function Qu(r){return r.replace(tv,iv)}const nv=new Map;function iv(r,e){let t=nt[e];if(t===void 0){const n=nv.get(e);if(n!==void 0)t=nt[n],Je('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return Qu(t)}const rv=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Nd(r){return r.replace(rv,sv)}function sv(r,e,t,n){let i="";for(let s=parseInt(e);s<parseInt(t);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function Ud(r){let e=`precision ${r.precision} float;
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
#define LOW_PRECISION`),e}const av={[dl]:"SHADOWMAP_TYPE_PCF",[ba]:"SHADOWMAP_TYPE_VSM"};function ov(r){return av[r.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const lv={[ss]:"ENVMAP_TYPE_CUBE",[Qs]:"ENVMAP_TYPE_CUBE",[Jl]:"ENVMAP_TYPE_CUBE_UV"};function cv(r){return r.envMap===!1?"ENVMAP_TYPE_CUBE":lv[r.envMapMode]||"ENVMAP_TYPE_CUBE"}const uv={[Qs]:"ENVMAP_MODE_REFRACTION"};function hv(r){return r.envMap===!1?"ENVMAP_MODE_REFLECTION":uv[r.envMapMode]||"ENVMAP_MODE_REFLECTION"}const fv={[Ap]:"ENVMAP_BLENDING_MULTIPLY",[o_]:"ENVMAP_BLENDING_MIX",[l_]:"ENVMAP_BLENDING_ADD"};function dv(r){return r.envMap===!1?"ENVMAP_BLENDING_NONE":fv[r.combine]||"ENVMAP_BLENDING_NONE"}function pv(r){const e=r.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function mv(r,e,t,n){const i=r.getContext(),s=t.defines;let a=t.vertexShader,o=t.fragmentShader;const l=ov(t),c=cv(t),u=hv(t),d=dv(t),h=pv(t),f=Q3(t),_=j3(s),g=i.createProgram();let p,m,M=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(Aa).join(`
`),p.length>0&&(p+=`
`),m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(Aa).join(`
`),m.length>0&&(m+=`
`)):(p=[Ud(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Aa).join(`
`),m=[Ud(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+d:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==ki?"#define TONE_MAPPING":"",t.toneMapping!==ki?nt.tonemapping_pars_fragment:"",t.toneMapping!==ki?K3("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",nt.colorspace_pars_fragment,Z3("linearToOutputTexel",t.outputColorSpace),J3(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Aa).join(`
`)),a=Qu(a),a=Ld(a,t),a=Id(a,t),o=Qu(o),o=Ld(o,t),o=Id(o,t),a=Nd(a),o=Nd(o),t.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,p=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,m=["#define varying in",t.glslVersion===Bf?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Bf?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);const A=M+p+a,v=M+m+o,y=Rd(i,i.VERTEX_SHADER,A),E=Rd(i,i.FRAGMENT_SHADER,v);i.attachShader(g,y),i.attachShader(g,E),t.index0AttributeName!==void 0?i.bindAttribLocation(g,0,t.index0AttributeName):t.hasPositionAttribute===!0&&i.bindAttribLocation(g,0,"position"),i.linkProgram(g);function w(L){if(r.debug.checkShaderErrors){const D=i.getProgramInfoLog(g)||"",k=i.getShaderInfoLog(y)||"",I=i.getShaderInfoLog(E)||"",F=D.trim(),X=k.trim(),z=I.trim();let j=!0,Y=!0;if(i.getProgramParameter(g,i.LINK_STATUS)===!1)if(j=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(i,g,y,E);else{const P=Dd(i,y,"vertex"),J=Dd(i,E,"fragment");mt("WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(g,i.VALIDATE_STATUS)+`

Material Name: `+L.name+`
Material Type: `+L.type+`

Program Info Log: `+F+`
`+P+`
`+J)}else F!==""?Je("WebGLProgram: Program Info Log:",F):(X===""||z==="")&&(Y=!1);Y&&(L.diagnostics={runnable:j,programLog:F,vertexShader:{log:X,prefix:p},fragmentShader:{log:z,prefix:m}})}i.deleteShader(y),i.deleteShader(E),x=new xl(i,g),T=ev(i,g)}let x;this.getUniforms=function(){return x===void 0&&w(this),x};let T;this.getAttributes=function(){return T===void 0&&w(this),T};let C=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return C===!1&&(C=i.getProgramParameter(g,G3)),C},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(g),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=W3++,this.cacheKey=e,this.usedTimes=1,this.program=g,this.vertexShader=y,this.fragmentShader=E,this}let _v=0;class gv{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){const i=this._getShaderCacheForMaterial(e);return i.has(t)===!1&&(i.add(t),t.usedTimes++),i.has(n)===!1&&(i.add(n),n.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new xv(e),t.set(e,n)),n}}class xv{constructor(e){this.id=_v++,this.code=e,this.usedTimes=0}}function vv(r){return r===as||r===Dl||r===Ll}function Sv(r,e,t,n,i,s){const a=new Op,o=new gv,l=new Set,c=[],u=new Map,d=n.logarithmicDepthBuffer;let h=n.precision;const f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(x){return l.add(x),x===0?"uv":`uv${x}`}function g(x,T,C,L,D,k){const I=L.fog,F=D.geometry,X=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?L.environment:null,z=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap,j=e.get(x.envMap||X,z),Y=j&&j.mapping===Jl?j.image.height:null,P=f[x.type];x.precision!==null&&(h=n.getMaxPrecision(x.precision),h!==x.precision&&Je("WebGLProgram.getParameters:",x.precision,"not supported, using",h,"instead."));const J=F.morphAttributes.position||F.morphAttributes.normal||F.morphAttributes.color,we=J!==void 0?J.length:0;let Ee=0;F.morphAttributes.position!==void 0&&(Ee=1),F.morphAttributes.normal!==void 0&&(Ee=2),F.morphAttributes.color!==void 0&&(Ee=3);let Ye,We,Ke,$;if(P){const He=Ii[P];Ye=He.vertexShader,We=He.fragmentShader}else{Ye=x.vertexShader,We=x.fragmentShader;const He=o.getVertexShaderStage(x),le=o.getFragmentShaderStage(x);o.update(x,He,le),Ke=He.id,$=le.id}const te=r.getRenderTarget(),me=r.state.buffers.depth.getReversed(),Ve=D.isInstancedMesh===!0,xe=D.isBatchedMesh===!0,Le=!!x.map,Ne=!!x.matcap,Q=!!j,re=!!x.aoMap,oe=!!x.lightMap,N=!!x.bumpMap&&x.wireframe===!1,de=!!x.normalMap,Be=!!x.displacementMap,Ue=!!x.emissiveMap,Ce=!!x.metalnessMap,Ze=!!x.roughnessMap,U=x.anisotropy>0,rt=x.clearcoat>0,Ge=x.dispersion>0,R=x.retroreflectivity>0,S=x.iridescence>0,V=x.sheen>0,H=x.transmission>0,K=U&&!!x.anisotropyMap,pe=rt&&!!x.clearcoatMap,ce=rt&&!!x.clearcoatNormalMap,ee=rt&&!!x.clearcoatRoughnessMap,ie=S&&!!x.iridescenceMap,ve=S&&!!x.iridescenceThicknessMap,Ie=V&&!!x.sheenColorMap,Se=V&&!!x.sheenRoughnessMap,ge=!!x.specularMap,he=!!x.specularColorMap,ze=!!x.specularIntensityMap,$e=H&&!!x.transmissionMap,q=H&&!!x.thicknessMap,_e=!!x.gradientMap,ne=!!x.alphaMap,Me=x.alphaTest>0,Te=!!x.alphaHash,se=!!x.extensions;let ue=ki;x.toneMapped&&(te===null||te.isXRRenderTarget===!0)&&(ue=r.toneMapping);const ae={shaderID:P,shaderType:x.type,shaderName:x.name,vertexShader:Ye,fragmentShader:We,defines:x.defines,customVertexShaderID:Ke,customFragmentShaderID:$,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:h,batching:xe,batchingColor:xe&&D._colorsTexture!==null,instancing:Ve,instancingColor:Ve&&D.instanceColor!==null,instancingMorph:Ve&&D.morphTexture!==null,outputColorSpace:te===null?r.outputColorSpace:te.isXRRenderTarget===!0?te.texture.colorSpace:ht.workingColorSpace,alphaToCoverage:!!x.alphaToCoverage,map:Le,matcap:Ne,envMap:Q,envMapMode:Q&&j.mapping,envMapCubeUVHeight:Y,aoMap:re,lightMap:oe,bumpMap:N,normalMap:de,displacementMap:Be,emissiveMap:Ue,normalMapObjectSpace:de&&x.normalMapType===h_,normalMapTangentSpace:de&&x.normalMapType===Xu,packedNormalMap:de&&x.normalMapType===Xu&&vv(x.normalMap.format),metalnessMap:Ce,roughnessMap:Ze,anisotropy:U,anisotropyMap:K,clearcoat:rt,clearcoatMap:pe,clearcoatNormalMap:ce,clearcoatRoughnessMap:ee,dispersion:Ge,retroreflection:R,iridescence:S,iridescenceMap:ie,iridescenceThicknessMap:ve,sheen:V,sheenColorMap:Ie,sheenRoughnessMap:Se,specularMap:ge,specularColorMap:he,specularIntensityMap:ze,transmission:H,transmissionMap:$e,thicknessMap:q,gradientMap:_e,opaque:x.transparent===!1&&x.blending===Ua&&x.alphaToCoverage===!1,alphaMap:ne,alphaTest:Me,alphaHash:Te,combine:x.combine,mapUv:Le&&_(x.map.channel),aoMapUv:re&&_(x.aoMap.channel),lightMapUv:oe&&_(x.lightMap.channel),bumpMapUv:N&&_(x.bumpMap.channel),normalMapUv:de&&_(x.normalMap.channel),displacementMapUv:Be&&_(x.displacementMap.channel),emissiveMapUv:Ue&&_(x.emissiveMap.channel),metalnessMapUv:Ce&&_(x.metalnessMap.channel),roughnessMapUv:Ze&&_(x.roughnessMap.channel),anisotropyMapUv:K&&_(x.anisotropyMap.channel),clearcoatMapUv:pe&&_(x.clearcoatMap.channel),clearcoatNormalMapUv:ce&&_(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ee&&_(x.clearcoatRoughnessMap.channel),iridescenceMapUv:ie&&_(x.iridescenceMap.channel),iridescenceThicknessMapUv:ve&&_(x.iridescenceThicknessMap.channel),sheenColorMapUv:Ie&&_(x.sheenColorMap.channel),sheenRoughnessMapUv:Se&&_(x.sheenRoughnessMap.channel),specularMapUv:ge&&_(x.specularMap.channel),specularColorMapUv:he&&_(x.specularColorMap.channel),specularIntensityMapUv:ze&&_(x.specularIntensityMap.channel),transmissionMapUv:$e&&_(x.transmissionMap.channel),thicknessMapUv:q&&_(x.thicknessMap.channel),alphaMapUv:ne&&_(x.alphaMap.channel),vertexTangents:!!F.attributes.tangent&&(de||U),vertexNormals:!!F.attributes.normal,vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!F.attributes.color&&F.attributes.color.itemSize===4,pointsUvs:D.isPoints===!0&&!!F.attributes.uv&&(Le||ne),fog:!!I,useFog:x.fog===!0,fogExp2:!!I&&I.isFogExp2,flatShading:x.wireframe===!1&&(x.flatShading===!0||F.attributes.normal===void 0&&de===!1&&(x.isMeshLambertMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isMeshPhysicalMaterial)),sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:me,skinning:D.isSkinnedMesh===!0,hasPositionAttribute:F.attributes.position!==void 0,morphTargets:F.morphAttributes.position!==void 0,morphNormals:F.morphAttributes.normal!==void 0,morphColors:F.morphAttributes.color!==void 0,morphTargetsCount:we,morphTextureStride:Ee,numSunLights:T.sun.length,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numSunLightShadows:T.sunShadowMap.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numLightProbeGrids:k.length,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:x.dithering,shadowMapEnabled:r.shadowMap.enabled&&C.length>0,shadowMapType:r.shadowMap.type,toneMapping:ue,decodeVideoTexture:Le&&x.map.isVideoTexture===!0&&ht.getTransfer(x.map.colorSpace)===gt,decodeVideoTextureEmissive:Ue&&x.emissiveMap.isVideoTexture===!0&&ht.getTransfer(x.emissiveMap.colorSpace)===gt,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===Ni,flipSided:x.side===Vn,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:se&&x.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(se&&x.extensions.multiDraw===!0||xe)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return ae.vertexUv1s=l.has(1),ae.vertexUv2s=l.has(2),ae.vertexUv3s=l.has(3),l.clear(),ae}function p(x){const T=[];if(x.shaderID?T.push(x.shaderID):(T.push(x.customVertexShaderID),T.push(x.customFragmentShaderID)),x.defines!==void 0)for(const C in x.defines)T.push(C),T.push(x.defines[C]);return x.isRawShaderMaterial===!1&&(m(T,x),M(T,x),T.push(r.outputColorSpace)),T.push(x.customProgramCacheKey),T.join()}function m(x,T){x.push(T.precision),x.push(T.outputColorSpace),x.push(T.envMapMode),x.push(T.envMapCubeUVHeight),x.push(T.mapUv),x.push(T.alphaMapUv),x.push(T.lightMapUv),x.push(T.aoMapUv),x.push(T.bumpMapUv),x.push(T.normalMapUv),x.push(T.displacementMapUv),x.push(T.emissiveMapUv),x.push(T.metalnessMapUv),x.push(T.roughnessMapUv),x.push(T.anisotropyMapUv),x.push(T.clearcoatMapUv),x.push(T.clearcoatNormalMapUv),x.push(T.clearcoatRoughnessMapUv),x.push(T.iridescenceMapUv),x.push(T.iridescenceThicknessMapUv),x.push(T.sheenColorMapUv),x.push(T.sheenRoughnessMapUv),x.push(T.specularMapUv),x.push(T.specularColorMapUv),x.push(T.specularIntensityMapUv),x.push(T.transmissionMapUv),x.push(T.thicknessMapUv),x.push(T.combine),x.push(T.fogExp2),x.push(T.sizeAttenuation),x.push(T.morphTargetsCount),x.push(T.morphAttributeCount),x.push(T.numSunLights),x.push(T.numDirLights),x.push(T.numPointLights),x.push(T.numSpotLights),x.push(T.numSpotLightMaps),x.push(T.numHemiLights),x.push(T.numRectAreaLights),x.push(T.numSunLightShadows),x.push(T.numDirLightShadows),x.push(T.numPointLightShadows),x.push(T.numSpotLightShadows),x.push(T.numSpotLightShadowsWithMaps),x.push(T.numLightProbes),x.push(T.shadowMapType),x.push(T.toneMapping),x.push(T.numClippingPlanes),x.push(T.numClipIntersection),x.push(T.depthPacking)}function M(x,T){a.disableAll(),T.instancing&&a.enable(0),T.instancingColor&&a.enable(1),T.instancingMorph&&a.enable(2),T.matcap&&a.enable(3),T.envMap&&a.enable(4),T.normalMapObjectSpace&&a.enable(5),T.normalMapTangentSpace&&a.enable(6),T.clearcoat&&a.enable(7),T.iridescence&&a.enable(8),T.alphaTest&&a.enable(9),T.vertexColors&&a.enable(10),T.vertexAlphas&&a.enable(11),T.vertexUv1s&&a.enable(12),T.vertexUv2s&&a.enable(13),T.vertexUv3s&&a.enable(14),T.vertexTangents&&a.enable(15),T.anisotropy&&a.enable(16),T.alphaHash&&a.enable(17),T.batching&&a.enable(18),T.dispersion&&a.enable(19),T.retroreflection&&a.enable(24),T.batchingColor&&a.enable(20),T.gradientMap&&a.enable(21),T.packedNormalMap&&a.enable(22),T.vertexNormals&&a.enable(23),x.push(a.mask),a.disableAll(),T.fog&&a.enable(0),T.useFog&&a.enable(1),T.flatShading&&a.enable(2),T.logarithmicDepthBuffer&&a.enable(3),T.reversedDepthBuffer&&a.enable(4),T.skinning&&a.enable(5),T.morphTargets&&a.enable(6),T.morphNormals&&a.enable(7),T.morphColors&&a.enable(8),T.premultipliedAlpha&&a.enable(9),T.shadowMapEnabled&&a.enable(10),T.doubleSided&&a.enable(11),T.flipSided&&a.enable(12),T.useDepthPacking&&a.enable(13),T.dithering&&a.enable(14),T.transmission&&a.enable(15),T.sheen&&a.enable(16),T.opaque&&a.enable(17),T.pointsUvs&&a.enable(18),T.decodeVideoTexture&&a.enable(19),T.decodeVideoTextureEmissive&&a.enable(20),T.alphaToCoverage&&a.enable(21),T.numLightProbeGrids>0&&a.enable(22),T.hasPositionAttribute&&a.enable(23),x.push(a.mask)}function A(x){const T=f[x.type];let C;if(T){const L=Ii[T];C=oo.clone(L.uniforms)}else C=x.uniforms;return C}function v(x,T){let C=u.get(T);return C!==void 0?++C.usedTimes:(C=new mv(r,T,x,i),c.push(C),u.set(T,C)),C}function y(x){if(--x.usedTimes===0){const T=c.indexOf(x);c[T]=c[c.length-1],c.pop(),u.delete(x.cacheKey),x.destroy()}}function E(x){o.remove(x)}function w(){o.dispose()}return{getParameters:g,getProgramCacheKey:p,getUniforms:A,acquireProgram:v,releaseProgram:y,releaseShaderCache:E,programs:c,dispose:w}}function Mv(){let r=new WeakMap;function e(a){return r.has(a)}function t(a){let o=r.get(a);return o===void 0&&(o={},r.set(a,o)),o}function n(a){r.delete(a)}function i(a,o,l){r.get(a)[o]=l}function s(){r=new WeakMap}return{has:e,get:t,remove:n,update:i,dispose:s}}function yv(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.materialVariant!==e.materialVariant?r.materialVariant-e.materialVariant:r.z!==e.z?r.z-e.z:r.id-e.id}function qd(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function Fd(){const r=[];let e=0;const t=[],n=[],i=[];function s(){e=0,t.length=0,n.length=0,i.length=0}function a(h){let f=0;return h.isInstancedMesh&&(f+=2),h.isSkinnedMesh&&(f+=1),f}function o(h,f,_,g,p,m){let M=r[e];return M===void 0?(M={id:h.id,object:h,geometry:f,material:_,materialVariant:a(h),groupOrder:g,renderOrder:h.renderOrder,z:p,group:m},r[e]=M):(M.id=h.id,M.object=h,M.geometry=f,M.material=_,M.materialVariant=a(h),M.groupOrder=g,M.renderOrder=h.renderOrder,M.z=p,M.group=m),e++,M}function l(h,f,_,g,p,m,M){M.reversedDepth===!0&&(p=-p);const A=o(h,f,_,g,p,m);_.transmission>0?n.push(A):_.transparent===!0?i.push(A):t.push(A)}function c(h,f,_,g,p,m){const M=o(h,f,_,g,p,m);_.transmission>0?n.unshift(M):_.transparent===!0?i.unshift(M):t.unshift(M)}function u(h,f){t.length>1&&t.sort(h||yv),n.length>1&&n.sort(f||qd),i.length>1&&i.sort(f||qd)}function d(){for(let h=e,f=r.length;h<f;h++){const _=r[h];if(_.id===null)break;_.id=null,_.object=null,_.geometry=null,_.material=null,_.group=null}}return{opaque:t,transmissive:n,transparent:i,init:s,push:l,unshift:c,finish:d,sort:u}}function Tv(){let r=new WeakMap;function e(n,i){const s=r.get(n);let a;return s===void 0?(a=new Fd,r.set(n,[a])):i>=s.length?(a=new Fd,s.push(a)):a=s[i],a}function t(){r=new WeakMap}return{get:e,dispose:t}}function Ev(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new B,color:new je};break;case"SpotLight":t={position:new B,direction:new B,color:new je,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new B,color:new je,distance:0,decay:0};break;case"HemisphereLight":t={direction:new B,skyColor:new je,groundColor:new je};break;case"RectAreaLight":t={color:new je,position:new B,halfWidth:new B,halfHeight:new B};break}return r[e.id]=t,t}}}function bv(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new fe};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new fe};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new fe,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=t,t}}}let wv=0;function Av(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function Cv(r){const e=new Ev,t=bv(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new B);const i=new B,s=new Dt,a=new Dt;function o(c){let u=0,d=0,h=0;for(let D=0;D<9;D++)n.probe[D].set(0,0,0);let f=0,_=0,g=0,p=0,m=0,M=0,A=0,v=0,y=0,E=0,w=0,x=0,T=0,C=0;c.sort(Av);for(let D=0,k=c.length;D<k;D++){const I=c[D],F=I.color,X=I.intensity,z=I.distance;let j=null;if(I.shadow&&I.shadow.map&&(I.shadow.map.texture.format===as?j=I.shadow.map.texture:j=I.shadow.map.depthTexture||I.shadow.map.texture),I.isAmbientLight)u+=F.r*X,d+=F.g*X,h+=F.b*X;else if(I.isLightProbe){for(let Y=0;Y<9;Y++)n.probe[Y].addScaledVector(I.sh.coefficients[Y],X);C++}else if(I.isSunLight){const Y=e.get(I);if(Y.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){const P=I.shadow,J=t.get(I);J.shadowIntensity=P.intensity,J.shadowBias=P.bias,J.shadowNormalBias=P.normalBias,J.shadowRadius=P.radius,J.shadowMapSize.copy(P.mapSize).multiply(P.getFrameExtents()),n.sunShadow[_]=J,n.sunShadowMap[_]=j;const we=P.getViewportCount();for(let Ee=0;Ee<we;Ee++)n.sunShadowMatrix[g+Ee]=P.getMatrix(Ee),n.sunShadowCascade[g+Ee]=P._cascadeData[Ee];g+=we,_++}n.sun[f]=Y,f++}else if(I.isDirectionalLight){const Y=e.get(I);if(Y.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){const P=I.shadow,J=t.get(I);J.shadowIntensity=P.intensity,J.shadowBias=P.bias,J.shadowNormalBias=P.normalBias,J.shadowRadius=P.radius,J.shadowMapSize=P.mapSize,n.directionalShadow[p]=J,n.directionalShadowMap[p]=j,n.directionalShadowMatrix[p]=I.shadow.matrix,y++}n.directional[p]=Y,p++}else if(I.isSpotLight){const Y=e.get(I);Y.position.setFromMatrixPosition(I.matrixWorld),Y.color.copy(F).multiplyScalar(X),Y.distance=z,Y.coneCos=Math.cos(I.angle),Y.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),Y.decay=I.decay,n.spot[M]=Y;const P=I.shadow;if(I.map&&(n.spotLightMap[x]=I.map,x++,P.updateMatrices(I),I.castShadow&&T++),n.spotLightMatrix[M]=P.matrix,I.castShadow){const J=t.get(I);J.shadowIntensity=P.intensity,J.shadowBias=P.bias,J.shadowNormalBias=P.normalBias,J.shadowRadius=P.radius,J.shadowMapSize=P.mapSize,n.spotShadow[M]=J,n.spotShadowMap[M]=j,w++}M++}else if(I.isRectAreaLight){const Y=e.get(I);Y.color.copy(F).multiplyScalar(X),Y.halfWidth.set(I.width*.5,0,0),Y.halfHeight.set(0,I.height*.5,0),n.rectArea[A]=Y,A++}else if(I.isPointLight){const Y=e.get(I);if(Y.color.copy(I.color).multiplyScalar(I.intensity),Y.distance=I.distance,Y.decay=I.decay,I.castShadow){const P=I.shadow,J=t.get(I);J.shadowIntensity=P.intensity,J.shadowBias=P.bias,J.shadowNormalBias=P.normalBias,J.shadowRadius=P.radius,J.shadowMapSize=P.mapSize,J.shadowCameraNear=P.camera.near,J.shadowCameraFar=P.camera.far,n.pointShadow[m]=J,n.pointShadowMap[m]=j,n.pointShadowMatrix[m]=I.shadow.matrix,E++}n.point[m]=Y,m++}else if(I.isHemisphereLight){const Y=e.get(I);Y.skyColor.copy(I.color).multiplyScalar(X),Y.groundColor.copy(I.groundColor).multiplyScalar(X),n.hemi[v]=Y,v++}}A>0&&(r.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=be.LTC_FLOAT_1,n.rectAreaLTC2=be.LTC_FLOAT_2):(n.rectAreaLTC1=be.LTC_HALF_1,n.rectAreaLTC2=be.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=d,n.ambient[2]=h;const L=n.hash;(L.sunLength!==f||L.directionalLength!==p||L.pointLength!==m||L.spotLength!==M||L.rectAreaLength!==A||L.hemiLength!==v||L.numSunShadows!==_||L.numDirectionalShadows!==y||L.numPointShadows!==E||L.numSpotShadows!==w||L.numSpotMaps!==x||L.numLightProbes!==C)&&(n.sun.length=f,n.directional.length=p,n.spot.length=M,n.rectArea.length=A,n.point.length=m,n.hemi.length=v,n.sunShadow.length=_,n.sunShadowMap.length=_,n.sunShadowMatrix.length=g,n.sunShadowCascade.length=g,n.directionalShadow.length=y,n.directionalShadowMap.length=y,n.directionalShadowMatrix.length=y,n.pointShadow.length=E,n.pointShadowMap.length=E,n.pointShadowMatrix.length=E,n.spotShadow.length=w,n.spotShadowMap.length=w,n.spotLightMatrix.length=w+x-T,n.spotLightMap.length=x,n.numSpotLightShadowsWithMaps=T,n.numLightProbes=C,L.sunLength=f,L.directionalLength=p,L.pointLength=m,L.spotLength=M,L.rectAreaLength=A,L.hemiLength=v,L.numSunShadows=_,L.numDirectionalShadows=y,L.numPointShadows=E,L.numSpotShadows=w,L.numSpotMaps=x,L.numLightProbes=C,n.version=wv++)}function l(c,u){let d=0,h=0,f=0,_=0,g=0,p=0;const m=u.matrixWorldInverse;for(let M=0,A=c.length;M<A;M++){const v=c[M];if(v.isSunLight){const y=n.sun[d];y.direction.setFromMatrixPosition(v.matrixWorld),y.direction.transformDirection(m),d++}else if(v.isDirectionalLight){const y=n.directional[h];y.direction.setFromMatrixPosition(v.matrixWorld),i.setFromMatrixPosition(v.target.matrixWorld),y.direction.sub(i),y.direction.transformDirection(m),h++}else if(v.isSpotLight){const y=n.spot[_];y.position.setFromMatrixPosition(v.matrixWorld),y.position.applyMatrix4(m),y.direction.setFromMatrixPosition(v.matrixWorld),i.setFromMatrixPosition(v.target.matrixWorld),y.direction.sub(i),y.direction.transformDirection(m),_++}else if(v.isRectAreaLight){const y=n.rectArea[g];y.position.setFromMatrixPosition(v.matrixWorld),y.position.applyMatrix4(m),a.identity(),s.copy(v.matrixWorld),s.premultiply(m),a.extractRotation(s),y.halfWidth.set(v.width*.5,0,0),y.halfHeight.set(0,v.height*.5,0),y.halfWidth.applyMatrix4(a),y.halfHeight.applyMatrix4(a),g++}else if(v.isPointLight){const y=n.point[f];y.position.setFromMatrixPosition(v.matrixWorld),y.position.applyMatrix4(m),f++}else if(v.isHemisphereLight){const y=n.hemi[p];y.direction.setFromMatrixPosition(v.matrixWorld),y.direction.transformDirection(m),p++}}}return{setup:o,setupView:l,state:n}}function Od(r){const e=new Cv(r),t=[],n=[],i=[];function s(h){d.camera=h,t.length=0,n.length=0,i.length=0}function a(h){t.push(h)}function o(h){n.push(h)}function l(h){i.push(h)}function c(){e.setup(t)}function u(h){e.setupView(t,h)}const d={lightsArray:t,shadowsArray:n,lightProbeGridArray:i,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:s,state:d,setupLights:c,setupLightsView:u,pushLight:a,pushShadow:o,pushLightProbeGrid:l}}function Rv(r){let e=new WeakMap;function t(i,s=0){const a=e.get(i);let o;return a===void 0?(o=new Od(r),e.set(i,[o])):s>=a.length?(o=new Od(r),a.push(o)):o=a[s],o}function n(){e=new WeakMap}return{get:t,dispose:n}}const Pv=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Dv=`uniform sampler2D shadow_pass;
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
}`,Lv=[new B(1,0,0),new B(-1,0,0),new B(0,1,0),new B(0,-1,0),new B(0,0,1),new B(0,0,-1)],Iv=[new B(0,-1,0),new B(0,-1,0),new B(0,0,1),new B(0,0,-1),new B(0,-1,0),new B(0,-1,0)],Bd=new Dt,Ma=new B,Hc=new B;function Nv(r,e,t){let n=new zh;const i=new fe,s=new fe,a=new Nt,o=new I1,l=new N1,c={},u=t.maxTextureSize,d={[rs]:Vn,[Vn]:rs,[Ni]:Ni},h=new cn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new fe},radius:{value:4}},vertexShader:Pv,fragmentShader:Dv}),f=h.clone();f.defines.HORIZONTAL_PASS=1;const _=new En;_.setAttribute("position",new Vi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const g=new en(_,h),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=dl;let m=this.type;this.render=function(E,w,x){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||E.length===0)return;this.type===Vm&&(Je("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=dl);const T=r.getRenderTarget(),C=r.getActiveCubeFace(),L=r.getActiveMipmapLevel(),D=r.state;D.setBlending(zi),D.buffers.depth.getReversed()===!0?D.buffers.color.setClear(0,0,0,0):D.buffers.color.setClear(1,1,1,1),D.buffers.depth.setTest(!0),D.setScissorTest(!1);const k=m!==this.type;k&&w.traverse(function(I){I.material&&(Array.isArray(I.material)?I.material.forEach(F=>F.needsUpdate=!0):I.material.needsUpdate=!0)});for(let I=0,F=E.length;I<F;I++){const X=E[I],z=X.shadow;if(z===void 0){Je("WebGLShadowMap:",X,"has no shadow.");continue}if(z.autoUpdate===!1&&z.needsUpdate===!1)continue;i.copy(z.mapSize);const j=z.getFrameExtents();i.multiply(j),s.copy(z.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(s.x=Math.floor(u/j.x),i.x=s.x*j.x,z.mapSize.x=s.x),i.y>u&&(s.y=Math.floor(u/j.y),i.y=s.y*j.y,z.mapSize.y=s.y));const Y=r.state.buffers.depth.getReversed();if(z.camera._reversedDepth=Y,z.map===null||k===!0){if(z.map!==null&&(z.map.depthTexture!==null&&(z.map.depthTexture.dispose(),z.map.depthTexture=null),z.map.dispose()),this.type===ba){if(X.isPointLight){Je("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}z.map=new Fn(i.x,i.y,{format:as,type:Hn,minFilter:yn,magFilter:yn,generateMipmaps:!1}),z.map.texture.name=X.name+".shadowMap",z.map.depthTexture=new io(i.x,i.y,qi),z.map.depthTexture.name=X.name+".shadowMapDepth",z.map.depthTexture.format=sr,z.map.depthTexture.compareFunction=null,z.map.depthTexture.minFilter=hn,z.map.depthTexture.magFilter=hn}else X.isPointLight?(z.map=new a0(i.x),z.map.depthTexture=new $_(i.x,Gi)):(z.map=new Fn(i.x,i.y),z.map.depthTexture=new io(i.x,i.y,Gi)),z.map.depthTexture.name=X.name+".shadowMap",z.map.depthTexture.format=sr,this.type===dl?(z.map.depthTexture.compareFunction=Y?Fh:qh,z.map.depthTexture.minFilter=yn,z.map.depthTexture.magFilter=yn):(z.map.depthTexture.compareFunction=null,z.map.depthTexture.minFilter=hn,z.map.depthTexture.magFilter=hn);z.camera.updateProjectionMatrix()}z.map.isWebGLCubeRenderTarget!==!0&&(z.map.width!==i.x||z.map.height!==i.y)&&z.map.setSize(i.x,i.y);const P=z.map.isWebGLCubeRenderTarget?6:z.getViewportCount();X.isPointLight!==!0&&z.updateMatrices(X,x);for(let J=0;J<P;J++){const we=z.getCamera(J);if(X.isPointLight){const Ee=z.camera,Ye=z.matrix,We=X.distance||Ee.far;We!==Ee.far&&(Ee.far=We,Ee.updateProjectionMatrix()),Ma.setFromMatrixPosition(X.matrixWorld),Ee.position.copy(Ma),Hc.copy(Ee.position),Hc.add(Lv[J]),Ee.up.copy(Iv[J]),Ee.lookAt(Hc),Ee.updateMatrixWorld(),Ye.makeTranslation(-Ma.x,-Ma.y,-Ma.z),Bd.multiplyMatrices(Ee.projectionMatrix,Ee.matrixWorldInverse),z._frustum.setFromProjectionMatrix(Bd,Ee.coordinateSystem,Ee.reversedDepth)}if(z.map.isWebGLCubeRenderTarget)r.setRenderTarget(z.map,J),r.clear();else{J===0&&(r.setRenderTarget(z.map),r.clear());const Ee=z.getViewport(J);a.set(s.x*Ee.x,s.y*Ee.y,s.x*Ee.z,s.y*Ee.w),D.viewport(a)}n=z.getFrustum(J),v(w,x,we,X,this.type)}z.isPointLightShadow!==!0&&this.type===ba&&M(z,x),z.needsUpdate=!1}m=this.type,p.needsUpdate=!1,r.setRenderTarget(T,C,L)};function M(E,w){const x=e.update(g);h.defines.VSM_SAMPLES!==E.blurSamples&&(h.defines.VSM_SAMPLES=E.blurSamples,f.defines.VSM_SAMPLES=E.blurSamples,h.needsUpdate=!0,f.needsUpdate=!0),E.mapPass===null?E.mapPass=new Fn(i.x,i.y,{format:as,type:Hn}):(E.mapPass.width!==E.map.width||E.mapPass.height!==E.map.height)&&E.mapPass.setSize(E.map.width,E.map.height),h.uniforms.shadow_pass.value=E.map.depthTexture,h.uniforms.resolution.value.set(E.map.width,E.map.height),h.uniforms.radius.value=E.radius,r.setRenderTarget(E.mapPass),r.clear(),r.renderBufferDirect(w,null,x,h,g,null),f.uniforms.shadow_pass.value=E.mapPass.texture,f.uniforms.resolution.value.set(E.map.width,E.map.height),f.uniforms.radius.value=E.radius,r.setRenderTarget(E.map),r.clear(),r.renderBufferDirect(w,null,x,f,g,null)}function A(E,w,x,T){let C=null;const L=x.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(L!==void 0)C=L;else if(C=x.isPointLight===!0?l:o,r.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0||w.alphaToCoverage===!0){const D=C.uuid,k=w.uuid;let I=c[D];I===void 0&&(I={},c[D]=I);let F=I[k];F===void 0&&(F=C.clone(),I[k]=F,w.addEventListener("dispose",y)),C=F}if(C.visible=w.visible,C.wireframe=w.wireframe,T===ba?C.side=w.shadowSide!==null?w.shadowSide:w.side:C.side=w.shadowSide!==null?w.shadowSide:d[w.side],C.alphaMap=w.alphaMap,C.alphaTest=w.alphaToCoverage===!0?.5:w.alphaTest,C.map=w.map,C.clipShadows=w.clipShadows,C.clippingPlanes=w.clippingPlanes,C.clipIntersection=w.clipIntersection,C.displacementMap=w.displacementMap,C.displacementScale=w.displacementScale,C.displacementBias=w.displacementBias,C.wireframeLinewidth=w.wireframeLinewidth,C.linewidth=w.linewidth,x.isPointLight===!0&&C.isMeshDistanceMaterial===!0){const D=r.properties.get(C);D.light=x}return C}function v(E,w,x,T,C){if(E.visible===!1)return;if(E.layers.test(w.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&C===ba)&&(!E.frustumCulled||E.intersectsFrustum(n))){E.modelViewMatrix.multiplyMatrices(x.matrixWorldInverse,E.matrixWorld);const k=e.update(E),I=E.material;if(Array.isArray(I)){const F=k.groups;for(let X=0,z=F.length;X<z;X++){const j=F[X],Y=I[j.materialIndex];if(Y&&Y.visible){const P=A(E,Y,T,C);E.onBeforeShadow(r,E,w,x,k,P,j),r.renderBufferDirect(x,null,k,P,E,j),E.onAfterShadow(r,E,w,x,k,P,j)}}}else if(I.visible){const F=A(E,I,T,C);E.onBeforeShadow(r,E,w,x,k,F,null),r.renderBufferDirect(x,null,k,F,E,null),E.onAfterShadow(r,E,w,x,k,F,null)}}const D=E.children;for(let k=0,I=D.length;k<I;k++)v(D[k],w,x,T,C)}function y(E){E.target.removeEventListener("dispose",y);for(const x in c){const T=c[x],C=E.target.uuid;C in T&&(T[C].dispose(),delete T[C])}}}function Uv(r,e){function t(){let q=!1;const _e=new Nt;let ne=null;const Me=new Nt(0,0,0,0);return{setMask:function(Te){ne!==Te&&!q&&(r.colorMask(Te,Te,Te,Te),ne=Te)},setLocked:function(Te){q=Te},setClear:function(Te,se,ue,ae,He){He===!0&&(Te*=ae,se*=ae,ue*=ae),_e.set(Te,se,ue,ae),Me.equals(_e)===!1&&(r.clearColor(Te,se,ue,ae),Me.copy(_e))},reset:function(){q=!1,ne=null,Me.set(-1,0,0,0)}}}function n(){let q=!1,_e=!1,ne=null,Me=null,Te=null;return{setReversed:function(se){if(_e!==se){const ue=e.get("EXT_clip_control");se?ue.clipControlEXT(ue.LOWER_LEFT_EXT,ue.ZERO_TO_ONE_EXT):ue.clipControlEXT(ue.LOWER_LEFT_EXT,ue.NEGATIVE_ONE_TO_ONE_EXT),_e=se;const ae=Te;Te=null,this.setClear(ae)}},getReversed:function(){return _e},setTest:function(se){se?te(r.DEPTH_TEST):me(r.DEPTH_TEST)},setMask:function(se){ne!==se&&!q&&(r.depthMask(se),ne=se)},setFunc:function(se){if(_e&&(se=T_[se]),Me!==se){switch(se){case ou:r.depthFunc(r.NEVER);break;case lu:r.depthFunc(r.ALWAYS);break;case cu:r.depthFunc(r.LESS);break;case ja:r.depthFunc(r.LEQUAL);break;case uu:r.depthFunc(r.EQUAL);break;case hu:r.depthFunc(r.GEQUAL);break;case fu:r.depthFunc(r.GREATER);break;case du:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}Me=se}},setLocked:function(se){q=se},setClear:function(se){Te!==se&&(Te=se,_e&&(se=1-se),r.clearDepth(se))},reset:function(){q=!1,ne=null,Me=null,Te=null,_e=!1}}}function i(){let q=!1,_e=null,ne=null,Me=null,Te=null,se=null,ue=null,ae=null,He=null;return{setTest:function(le){q||(le?te(r.STENCIL_TEST):me(r.STENCIL_TEST))},setMask:function(le){_e!==le&&!q&&(r.stencilMask(le),_e=le)},setFunc:function(le,Xe,qe){(ne!==le||Me!==Xe||Te!==qe)&&(r.stencilFunc(le,Xe,qe),ne=le,Me=Xe,Te=qe)},setOp:function(le,Xe,qe){(se!==le||ue!==Xe||ae!==qe)&&(r.stencilOp(le,Xe,qe),se=le,ue=Xe,ae=qe)},setLocked:function(le){q=le},setClear:function(le){He!==le&&(r.clearStencil(le),He=le)},reset:function(){q=!1,_e=null,ne=null,Me=null,Te=null,se=null,ue=null,ae=null,He=null}}}const s=new t,a=new n,o=new i,l=new WeakMap,c=new WeakMap;let u={},d={},h={},f=new WeakMap,_=[],g=null,p=!1,m=null,M=null,A=null,v=null,y=null,E=null,w=null,x=new je(0,0,0),T=0,C=!1,L=null,D=null,k=null,I=null,F=null;const X=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let z=!1,j=0;const Y=r.getParameter(r.VERSION);Y.indexOf("WebGL")!==-1?(j=parseFloat(/^WebGL (\d)/.exec(Y)[1]),z=j>=1):Y.indexOf("OpenGL ES")!==-1&&(j=parseFloat(/^OpenGL ES (\d)/.exec(Y)[1]),z=j>=2);let P=null,J={};const we=r.getParameter(r.SCISSOR_BOX),Ee=r.getParameter(r.VIEWPORT),Ye=new Nt().fromArray(we),We=new Nt().fromArray(Ee);function Ke(q,_e,ne,Me){const Te=new Uint8Array(4),se=r.createTexture();r.bindTexture(q,se),r.texParameteri(q,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(q,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let ue=0;ue<ne;ue++)q===r.TEXTURE_3D||q===r.TEXTURE_2D_ARRAY?r.texImage3D(_e,0,r.RGBA,1,1,Me,0,r.RGBA,r.UNSIGNED_BYTE,Te):r.texImage2D(_e+ue,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,Te);return se}const $={};$[r.TEXTURE_2D]=Ke(r.TEXTURE_2D,r.TEXTURE_2D,1),$[r.TEXTURE_CUBE_MAP]=Ke(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),$[r.TEXTURE_2D_ARRAY]=Ke(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),$[r.TEXTURE_3D]=Ke(r.TEXTURE_3D,r.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),te(r.DEPTH_TEST),a.setFunc(ja),N(!1),de(qf),te(r.CULL_FACE),re(zi);function te(q){u[q]!==!0&&(r.enable(q),u[q]=!0)}function me(q){u[q]!==!1&&(r.disable(q),u[q]=!1)}function Ve(q,_e){return h[q]!==_e?(r.bindFramebuffer(q,_e),h[q]=_e,q===r.DRAW_FRAMEBUFFER&&(h[r.FRAMEBUFFER]=_e),q===r.FRAMEBUFFER&&(h[r.DRAW_FRAMEBUFFER]=_e),!0):!1}function xe(q,_e){let ne=_,Me=!1;if(q){ne=f.get(_e),ne===void 0&&(ne=[],f.set(_e,ne));const Te=q.textures;if(ne.length!==Te.length||ne[0]!==r.COLOR_ATTACHMENT0){for(let se=0,ue=Te.length;se<ue;se++)ne[se]=r.COLOR_ATTACHMENT0+se;ne.length=Te.length,Me=!0}}else ne[0]!==r.BACK&&(ne[0]=r.BACK,Me=!0);Me&&r.drawBuffers(ne)}function Le(q){return g!==q?(r.useProgram(q),g=q,!0):!1}const Ne={[Us]:r.FUNC_ADD,[Gm]:r.FUNC_SUBTRACT,[Wm]:r.FUNC_REVERSE_SUBTRACT};Ne[Xm]=r.MIN,Ne[Ym]=r.MAX;const Q={[Zm]:r.ZERO,[$m]:r.ONE,[Km]:r.SRC_COLOR,[bp]:r.SRC_ALPHA,[n_]:r.SRC_ALPHA_SATURATE,[e_]:r.DST_COLOR,[Qm]:r.DST_ALPHA,[Jm]:r.ONE_MINUS_SRC_COLOR,[wp]:r.ONE_MINUS_SRC_ALPHA,[t_]:r.ONE_MINUS_DST_COLOR,[jm]:r.ONE_MINUS_DST_ALPHA,[i_]:r.CONSTANT_COLOR,[r_]:r.ONE_MINUS_CONSTANT_COLOR,[s_]:r.CONSTANT_ALPHA,[a_]:r.ONE_MINUS_CONSTANT_ALPHA};function re(q,_e,ne,Me,Te,se,ue,ae,He,le){if(q===zi){p===!0&&(me(r.BLEND),p=!1);return}if(p===!1&&(te(r.BLEND),p=!0),q!==Hm){if(q!==m||le!==C){if((M!==Us||y!==Us)&&(r.blendEquation(r.FUNC_ADD),M=Us,y=Us),le)switch(q){case Ua:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Pl:r.blendFunc(r.ONE,r.ONE);break;case Ff:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case Of:r.blendFuncSeparate(r.DST_COLOR,r.ONE_MINUS_SRC_ALPHA,r.ZERO,r.ONE);break;default:mt("WebGLState: Invalid blending: ",q);break}else switch(q){case Ua:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Pl:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE,r.ONE,r.ONE);break;case Ff:mt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Of:mt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:mt("WebGLState: Invalid blending: ",q);break}A=null,v=null,E=null,w=null,x.set(0,0,0),T=0,m=q,C=le}return}Te=Te||_e,se=se||ne,ue=ue||Me,(_e!==M||Te!==y)&&(r.blendEquationSeparate(Ne[_e],Ne[Te]),M=_e,y=Te),(ne!==A||Me!==v||se!==E||ue!==w)&&(r.blendFuncSeparate(Q[ne],Q[Me],Q[se],Q[ue]),A=ne,v=Me,E=se,w=ue),(ae.equals(x)===!1||He!==T)&&(r.blendColor(ae.r,ae.g,ae.b,He),x.copy(ae),T=He),m=q,C=!1}function oe(q,_e){q.side===Ni?me(r.CULL_FACE):te(r.CULL_FACE);let ne=q.side===Vn;_e&&(ne=!ne),N(ne),q.blending===Ua&&q.transparent===!1?re(zi):re(q.blending,q.blendEquation,q.blendSrc,q.blendDst,q.blendEquationAlpha,q.blendSrcAlpha,q.blendDstAlpha,q.blendColor,q.blendAlpha,q.premultipliedAlpha),a.setFunc(q.depthFunc),a.setTest(q.depthTest),a.setMask(q.depthWrite),s.setMask(q.colorWrite);const Me=q.stencilWrite;o.setTest(Me),Me&&(o.setMask(q.stencilWriteMask),o.setFunc(q.stencilFunc,q.stencilRef,q.stencilFuncMask),o.setOp(q.stencilFail,q.stencilZFail,q.stencilZPass)),Ue(q.polygonOffset,q.polygonOffsetFactor,q.polygonOffsetUnits),q.alphaToCoverage===!0?te(r.SAMPLE_ALPHA_TO_COVERAGE):me(r.SAMPLE_ALPHA_TO_COVERAGE)}function N(q){L!==q&&(q?r.frontFace(r.CW):r.frontFace(r.CCW),L=q)}function de(q){q!==zm?(te(r.CULL_FACE),q!==D&&(q===qf?r.cullFace(r.BACK):q===km?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):me(r.CULL_FACE),D=q}function Be(q){q!==k&&(z&&r.lineWidth(q),k=q)}function Ue(q,_e,ne){q?(te(r.POLYGON_OFFSET_FILL),(I!==_e||F!==ne)&&(I=_e,F=ne,a.getReversed()&&(_e=-_e),r.polygonOffset(_e,ne))):me(r.POLYGON_OFFSET_FILL)}function Ce(q){q?te(r.SCISSOR_TEST):me(r.SCISSOR_TEST)}function Ze(q){q===void 0&&(q=r.TEXTURE0+X-1),P!==q&&(r.activeTexture(q),P=q)}function U(q,_e,ne){ne===void 0&&(P===null?ne=r.TEXTURE0+X-1:ne=P);let Me=J[ne];Me===void 0&&(Me={type:void 0,texture:void 0},J[ne]=Me),(Me.type!==q||Me.texture!==_e)&&(P!==ne&&(r.activeTexture(ne),P=ne),r.bindTexture(q,_e||$[q]),Me.type=q,Me.texture=_e)}function rt(){const q=J[P];q!==void 0&&q.type!==void 0&&(r.bindTexture(q.type,null),q.type=void 0,q.texture=void 0)}function Ge(){try{r.compressedTexImage2D(...arguments)}catch(q){mt("WebGLState:",q)}}function R(){try{r.compressedTexImage3D(...arguments)}catch(q){mt("WebGLState:",q)}}function S(){try{r.texSubImage2D(...arguments)}catch(q){mt("WebGLState:",q)}}function V(){try{r.texSubImage3D(...arguments)}catch(q){mt("WebGLState:",q)}}function H(){try{r.compressedTexSubImage2D(...arguments)}catch(q){mt("WebGLState:",q)}}function K(){try{r.compressedTexSubImage3D(...arguments)}catch(q){mt("WebGLState:",q)}}function pe(){try{r.texStorage2D(...arguments)}catch(q){mt("WebGLState:",q)}}function ce(){try{r.texStorage3D(...arguments)}catch(q){mt("WebGLState:",q)}}function ee(){try{r.texImage2D(...arguments)}catch(q){mt("WebGLState:",q)}}function ie(){try{r.texImage3D(...arguments)}catch(q){mt("WebGLState:",q)}}function ve(q){return d[q]!==void 0?d[q]:r.getParameter(q)}function Ie(q,_e){d[q]!==_e&&(r.pixelStorei(q,_e),d[q]=_e)}function Se(q){Ye.equals(q)===!1&&(r.scissor(q.x,q.y,q.z,q.w),Ye.copy(q))}function ge(q){We.equals(q)===!1&&(r.viewport(q.x,q.y,q.z,q.w),We.copy(q))}function he(q,_e){let ne=c.get(_e);ne===void 0&&(ne=new WeakMap,c.set(_e,ne));let Me=ne.get(q);Me===void 0&&(Me=r.getUniformBlockIndex(_e,q.name),ne.set(q,Me))}function ze(q,_e){const Me=c.get(_e).get(q);l.get(_e)!==Me&&(r.uniformBlockBinding(_e,Me,q.__bindingPointIndex),l.set(_e,Me))}function $e(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),a.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),r.pixelStorei(r.PACK_ALIGNMENT,4),r.pixelStorei(r.UNPACK_ALIGNMENT,4),r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,!1),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,r.BROWSER_DEFAULT_WEBGL),r.pixelStorei(r.PACK_ROW_LENGTH,0),r.pixelStorei(r.PACK_SKIP_PIXELS,0),r.pixelStorei(r.PACK_SKIP_ROWS,0),r.pixelStorei(r.UNPACK_ROW_LENGTH,0),r.pixelStorei(r.UNPACK_IMAGE_HEIGHT,0),r.pixelStorei(r.UNPACK_SKIP_PIXELS,0),r.pixelStorei(r.UNPACK_SKIP_ROWS,0),r.pixelStorei(r.UNPACK_SKIP_IMAGES,0),u={},d={},P=null,J={},h={},f=new WeakMap,_=[],g=null,p=!1,m=null,M=null,A=null,v=null,y=null,E=null,w=null,x=new je(0,0,0),T=0,C=!1,L=null,D=null,k=null,I=null,F=null,Ye.set(0,0,r.canvas.width,r.canvas.height),We.set(0,0,r.canvas.width,r.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:te,disable:me,bindFramebuffer:Ve,drawBuffers:xe,useProgram:Le,setBlending:re,setMaterial:oe,setFlipSided:N,setCullFace:de,setLineWidth:Be,setPolygonOffset:Ue,setScissorTest:Ce,activeTexture:Ze,bindTexture:U,unbindTexture:rt,compressedTexImage2D:Ge,compressedTexImage3D:R,texImage2D:ee,texImage3D:ie,pixelStorei:Ie,getParameter:ve,updateUBOMapping:he,uniformBlockBinding:ze,texStorage2D:pe,texStorage3D:ce,texSubImage2D:S,texSubImage3D:V,compressedTexSubImage2D:H,compressedTexSubImage3D:K,scissor:Se,viewport:ge,reset:$e}}function qv(r,e,t,n,i,s,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new fe,u=new WeakMap,d=new Set;let h;const f=new WeakMap;let _=!1;try{_=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(R,S){return _?new OffscreenCanvas(R,S):Ul("canvas")}function p(R,S,V){let H=1;const K=Ge(R);if((K.width>V||K.height>V)&&(H=V/Math.max(K.width,K.height)),H<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){const pe=Math.floor(H*K.width),ce=Math.floor(H*K.height);h===void 0&&(h=g(pe,ce));const ee=S?g(pe,ce):h;return ee.width=pe,ee.height=ce,ee.getContext("2d").drawImage(R,0,0,pe,ce),Je("WebGLRenderer: Texture has been resized from ("+K.width+"x"+K.height+") to ("+pe+"x"+ce+")."),ee}else return"data"in R&&Je("WebGLRenderer: Image in DataTexture is too big ("+K.width+"x"+K.height+")."),R;return R}function m(R){return R.generateMipmaps}function M(R){r.generateMipmap(R)}function A(R){return R.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:R.isWebGL3DRenderTarget?r.TEXTURE_3D:R.isWebGLArrayRenderTarget||R.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function v(R,S,V,H,K,pe=!1){if(R!==null){if(r[R]!==void 0)return r[R];Je("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let ce;H&&(ce=e.get("EXT_texture_norm16"),ce||Je("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let ee=S;if(S===r.RED&&(V===r.FLOAT&&(ee=r.R32F),V===r.HALF_FLOAT&&(ee=r.R16F),V===r.UNSIGNED_BYTE&&(ee=r.R8),V===r.UNSIGNED_SHORT&&ce&&(ee=ce.R16_EXT),V===r.SHORT&&ce&&(ee=ce.R16_SNORM_EXT)),S===r.RED_INTEGER&&(V===r.UNSIGNED_BYTE&&(ee=r.R8UI),V===r.UNSIGNED_SHORT&&(ee=r.R16UI),V===r.UNSIGNED_INT&&(ee=r.R32UI),V===r.BYTE&&(ee=r.R8I),V===r.SHORT&&(ee=r.R16I),V===r.INT&&(ee=r.R32I)),S===r.RG&&(V===r.FLOAT&&(ee=r.RG32F),V===r.HALF_FLOAT&&(ee=r.RG16F),V===r.UNSIGNED_BYTE&&(ee=r.RG8),V===r.UNSIGNED_SHORT&&ce&&(ee=ce.RG16_EXT),V===r.SHORT&&ce&&(ee=ce.RG16_SNORM_EXT)),S===r.RG_INTEGER&&(V===r.UNSIGNED_BYTE&&(ee=r.RG8UI),V===r.UNSIGNED_SHORT&&(ee=r.RG16UI),V===r.UNSIGNED_INT&&(ee=r.RG32UI),V===r.BYTE&&(ee=r.RG8I),V===r.SHORT&&(ee=r.RG16I),V===r.INT&&(ee=r.RG32I)),S===r.RGB_INTEGER&&(V===r.UNSIGNED_BYTE&&(ee=r.RGB8UI),V===r.UNSIGNED_SHORT&&(ee=r.RGB16UI),V===r.UNSIGNED_INT&&(ee=r.RGB32UI),V===r.BYTE&&(ee=r.RGB8I),V===r.SHORT&&(ee=r.RGB16I),V===r.INT&&(ee=r.RGB32I)),S===r.RGBA_INTEGER&&(V===r.UNSIGNED_BYTE&&(ee=r.RGBA8UI),V===r.UNSIGNED_SHORT&&(ee=r.RGBA16UI),V===r.UNSIGNED_INT&&(ee=r.RGBA32UI),V===r.BYTE&&(ee=r.RGBA8I),V===r.SHORT&&(ee=r.RGBA16I),V===r.INT&&(ee=r.RGBA32I)),S===r.RGB&&(V===r.UNSIGNED_SHORT&&ce&&(ee=ce.RGB16_EXT),V===r.SHORT&&ce&&(ee=ce.RGB16_SNORM_EXT),V===r.UNSIGNED_INT_5_9_9_9_REV&&(ee=r.RGB9_E5),V===r.UNSIGNED_INT_10F_11F_11F_REV&&(ee=r.R11F_G11F_B10F)),S===r.RGBA){const ie=pe?Nl:ht.getTransfer(K);V===r.FLOAT&&(ee=r.RGBA32F),V===r.HALF_FLOAT&&(ee=r.RGBA16F),V===r.UNSIGNED_BYTE&&(ee=ie===gt?r.SRGB8_ALPHA8:r.RGBA8),V===r.UNSIGNED_SHORT&&ce&&(ee=ce.RGBA16_EXT),V===r.SHORT&&ce&&(ee=ce.RGBA16_SNORM_EXT),V===r.UNSIGNED_SHORT_4_4_4_4&&(ee=r.RGBA4),V===r.UNSIGNED_SHORT_5_5_5_1&&(ee=r.RGB5_A1)}return(ee===r.R16F||ee===r.R32F||ee===r.RG16F||ee===r.RG32F||ee===r.RGBA16F||ee===r.RGBA32F)&&e.get("EXT_color_buffer_float"),ee}function y(R,S){let V;return R?S===null||S===Gi||S===to?V=r.DEPTH24_STENCIL8:S===qi?V=r.DEPTH32F_STENCIL8:S===eo&&(V=r.DEPTH24_STENCIL8,Je("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===Gi||S===to?V=r.DEPTH_COMPONENT24:S===qi?V=r.DEPTH_COMPONENT32F:S===eo&&(V=r.DEPTH_COMPONENT16),V}function E(R,S){return m(R)===!0||R.isFramebufferTexture&&R.minFilter!==hn&&R.minFilter!==yn?Math.log2(Math.max(S.width,S.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?S.mipmaps.length:1}function w(R){const S=R.target;S.removeEventListener("dispose",w),T(S),S.isVideoTexture&&u.delete(S),S.isHTMLTexture&&d.delete(S)}function x(R){const S=R.target;S.removeEventListener("dispose",x),L(S)}function T(R){const S=n.get(R);if(S.__webglInit===void 0)return;const V=R.source,H=f.get(V);if(H){const K=H[S.__cacheKey];K.usedTimes--,K.usedTimes===0&&C(R),Object.keys(H).length===0&&f.delete(V)}n.remove(R)}function C(R){const S=n.get(R);r.deleteTexture(S.__webglTexture);const V=R.source,H=f.get(V);delete H[S.__cacheKey],a.memory.textures--}function L(R){const S=n.get(R);if(R.depthTexture&&(R.depthTexture.dispose(),n.remove(R.depthTexture)),R.isWebGLCubeRenderTarget)for(let H=0;H<6;H++){if(Array.isArray(S.__webglFramebuffer[H]))for(let K=0;K<S.__webglFramebuffer[H].length;K++)r.deleteFramebuffer(S.__webglFramebuffer[H][K]);else r.deleteFramebuffer(S.__webglFramebuffer[H]);S.__webglDepthbuffer&&r.deleteRenderbuffer(S.__webglDepthbuffer[H])}else{if(Array.isArray(S.__webglFramebuffer))for(let H=0;H<S.__webglFramebuffer.length;H++)r.deleteFramebuffer(S.__webglFramebuffer[H]);else r.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&r.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&r.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let H=0;H<S.__webglColorRenderbuffer.length;H++)S.__webglColorRenderbuffer[H]&&r.deleteRenderbuffer(S.__webglColorRenderbuffer[H]);S.__webglDepthRenderbuffer&&r.deleteRenderbuffer(S.__webglDepthRenderbuffer)}const V=R.textures;for(let H=0,K=V.length;H<K;H++){const pe=n.get(V[H]);pe.__webglTexture&&(r.deleteTexture(pe.__webglTexture),a.memory.textures--),n.remove(V[H])}n.remove(R)}let D=0;function k(){D=0}function I(){return D}function F(R){D=R}function X(){const R=D;return R>=i.maxTextures&&Je("WebGLTextures: Trying to use "+(R+1)+" texture units while this GPU supports only "+i.maxTextures),D+=1,R}function z(R){const S=[];return S.push(R.wrapS),S.push(R.wrapT),S.push(R.wrapR||0),S.push(R.magFilter),S.push(R.minFilter),S.push(R.anisotropy),S.push(R.internalFormat),S.push(R.format),S.push(R.type),S.push(R.generateMipmaps),S.push(R.premultiplyAlpha),S.push(R.flipY),S.push(R.unpackAlignment),S.push(R.colorSpace),S.join()}function j(R,S){const V=n.get(R);if(R.isVideoTexture&&U(R),R.isRenderTargetTexture===!1&&R.isExternalTexture!==!0&&R.version>0&&V.__version!==R.version){const H=R.image;if(H===null)Je("WebGLRenderer: Texture marked for update but no image data found.");else if(H.complete===!1)Je("WebGLRenderer: Texture marked for update but image is incomplete");else{me(V,R,S);return}}else R.isExternalTexture&&(V.__webglTexture=R.sourceTexture?R.sourceTexture:null);t.bindTexture(r.TEXTURE_2D,V.__webglTexture,r.TEXTURE0+S)}function Y(R,S){const V=n.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&V.__version!==R.version){me(V,R,S);return}else R.isExternalTexture&&(V.__webglTexture=R.sourceTexture?R.sourceTexture:null);t.bindTexture(r.TEXTURE_2D_ARRAY,V.__webglTexture,r.TEXTURE0+S)}function P(R,S){const V=n.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&V.__version!==R.version){me(V,R,S);return}t.bindTexture(r.TEXTURE_3D,V.__webglTexture,r.TEXTURE0+S)}function J(R,S){const V=n.get(R);if(R.isCubeDepthTexture!==!0&&R.version>0&&V.__version!==R.version){Ve(V,R,S);return}t.bindTexture(r.TEXTURE_CUBE_MAP,V.__webglTexture,r.TEXTURE0+S)}const we={[pu]:r.REPEAT,[tr]:r.CLAMP_TO_EDGE,[mu]:r.MIRRORED_REPEAT},Ee={[hn]:r.NEAREST,[c_]:r.NEAREST_MIPMAP_NEAREST,[wo]:r.NEAREST_MIPMAP_LINEAR,[yn]:r.LINEAR,[uc]:r.LINEAR_MIPMAP_NEAREST,[Wr]:r.LINEAR_MIPMAP_LINEAR},Ye={[d_]:r.NEVER,[x_]:r.ALWAYS,[p_]:r.LESS,[qh]:r.LEQUAL,[m_]:r.EQUAL,[Fh]:r.GEQUAL,[__]:r.GREATER,[g_]:r.NOTEQUAL};function We(R,S){if(S.type===qi&&e.has("OES_texture_float_linear")===!1&&(S.magFilter===yn||S.magFilter===uc||S.magFilter===wo||S.magFilter===Wr||S.minFilter===yn||S.minFilter===uc||S.minFilter===wo||S.minFilter===Wr)&&Je("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(R,r.TEXTURE_WRAP_S,we[S.wrapS]),r.texParameteri(R,r.TEXTURE_WRAP_T,we[S.wrapT]),(R===r.TEXTURE_3D||R===r.TEXTURE_2D_ARRAY)&&r.texParameteri(R,r.TEXTURE_WRAP_R,we[S.wrapR]),r.texParameteri(R,r.TEXTURE_MAG_FILTER,Ee[S.magFilter]),r.texParameteri(R,r.TEXTURE_MIN_FILTER,Ee[S.minFilter]),S.compareFunction&&(r.texParameteri(R,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(R,r.TEXTURE_COMPARE_FUNC,Ye[S.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===hn||S.minFilter!==wo&&S.minFilter!==Wr||S.type===qi&&e.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||n.get(S).__currentAnisotropy){const V=e.get("EXT_texture_filter_anisotropic");r.texParameterf(R,V.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,i.getMaxAnisotropy())),n.get(S).__currentAnisotropy=S.anisotropy}}}function Ke(R,S){let V=!1;R.__webglInit===void 0&&(R.__webglInit=!0,S.addEventListener("dispose",w));const H=S.source;let K=f.get(H);K===void 0&&(K={},f.set(H,K));const pe=z(S);if(pe!==R.__cacheKey){K[pe]===void 0&&(K[pe]={texture:r.createTexture(),usedTimes:0},a.memory.textures++,V=!0),K[pe].usedTimes++;const ce=K[R.__cacheKey];ce!==void 0&&(K[R.__cacheKey].usedTimes--,ce.usedTimes===0&&C(S)),R.__cacheKey=pe,R.__webglTexture=K[pe].texture}return V}function $(R,S,V){return Math.floor(Math.floor(R/V)/S)}function te(R,S,V,H){const pe=R.updateRanges;if(pe.length===0)t.texSubImage2D(r.TEXTURE_2D,0,0,0,S.width,S.height,V,H,S.data);else{pe.sort((Ie,Se)=>Ie.start-Se.start);let ce=0;for(let Ie=1;Ie<pe.length;Ie++){const Se=pe[ce],ge=pe[Ie],he=Se.start+Se.count,ze=$(ge.start,S.width,4),$e=$(Se.start,S.width,4);ge.start<=he+1&&ze===$e&&$(ge.start+ge.count-1,S.width,4)===ze?Se.count=Math.max(Se.count,ge.start+ge.count-Se.start):(++ce,pe[ce]=ge)}pe.length=ce+1;const ee=t.getParameter(r.UNPACK_ROW_LENGTH),ie=t.getParameter(r.UNPACK_SKIP_PIXELS),ve=t.getParameter(r.UNPACK_SKIP_ROWS);t.pixelStorei(r.UNPACK_ROW_LENGTH,S.width);for(let Ie=0,Se=pe.length;Ie<Se;Ie++){const ge=pe[Ie],he=Math.floor(ge.start/4),ze=Math.ceil(ge.count/4),$e=he%S.width,q=Math.floor(he/S.width),_e=ze,ne=1;t.pixelStorei(r.UNPACK_SKIP_PIXELS,$e),t.pixelStorei(r.UNPACK_SKIP_ROWS,q),t.texSubImage2D(r.TEXTURE_2D,0,$e,q,_e,ne,V,H,S.data)}R.clearUpdateRanges(),t.pixelStorei(r.UNPACK_ROW_LENGTH,ee),t.pixelStorei(r.UNPACK_SKIP_PIXELS,ie),t.pixelStorei(r.UNPACK_SKIP_ROWS,ve)}}function me(R,S,V){let H=r.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(H=r.TEXTURE_2D_ARRAY),S.isData3DTexture&&(H=r.TEXTURE_3D);const K=Ke(R,S),pe=S.source;t.bindTexture(H,R.__webglTexture,r.TEXTURE0+V);const ce=n.get(pe);if(pe.version!==ce.__version||K===!0){if(t.activeTexture(r.TEXTURE0+V),(typeof ImageBitmap<"u"&&S.image instanceof ImageBitmap)===!1){const ne=ht.getPrimaries(ht.workingColorSpace),Me=S.colorSpace===vr?null:ht.getPrimaries(S.colorSpace),Te=S.colorSpace===vr||ne===Me?r.NONE:r.BROWSER_DEFAULT_WEBGL;t.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,S.flipY),t.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),t.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Te)}t.pixelStorei(r.UNPACK_ALIGNMENT,S.unpackAlignment);let ie=p(S.image,!1,i.maxTextureSize);ie=rt(S,ie);const ve=s.convert(S.format,S.colorSpace),Ie=s.convert(S.type);let Se=v(S.internalFormat,ve,Ie,S.normalized,S.colorSpace,S.isVideoTexture);We(H,S);let ge;const he=S.mipmaps,ze=S.isVideoTexture!==!0,$e=ce.__version===void 0||K===!0,q=pe.dataReady,_e=E(S,ie);if(S.isDepthTexture)Se=y(S.format===Xr,S.type),$e&&(ze?t.texStorage2D(r.TEXTURE_2D,1,Se,ie.width,ie.height):t.texImage2D(r.TEXTURE_2D,0,Se,ie.width,ie.height,0,ve,Ie,null));else if(S.isDataTexture)if(he.length>0){ze&&$e&&t.texStorage2D(r.TEXTURE_2D,_e,Se,he[0].width,he[0].height);for(let ne=0,Me=he.length;ne<Me;ne++)ge=he[ne],ze?q&&t.texSubImage2D(r.TEXTURE_2D,ne,0,0,ge.width,ge.height,ve,Ie,ge.data):t.texImage2D(r.TEXTURE_2D,ne,Se,ge.width,ge.height,0,ve,Ie,ge.data);S.generateMipmaps=!1}else ze?($e&&t.texStorage2D(r.TEXTURE_2D,_e,Se,ie.width,ie.height),q&&te(S,ie,ve,Ie)):t.texImage2D(r.TEXTURE_2D,0,Se,ie.width,ie.height,0,ve,Ie,ie.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){ze&&$e&&t.texStorage3D(r.TEXTURE_2D_ARRAY,_e,Se,he[0].width,he[0].height,ie.depth);for(let ne=0,Me=he.length;ne<Me;ne++)if(ge=he[ne],S.format!==wi)if(ve!==null)if(ze){if(q)if(S.layerUpdates.size>0){const Te=gd(ge.width,ge.height,S.format,S.type);for(const se of S.layerUpdates){const ue=ge.data.subarray(se*Te/ge.data.BYTES_PER_ELEMENT,(se+1)*Te/ge.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,ne,0,0,se,ge.width,ge.height,1,ve,ue)}}else t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,ne,0,0,0,ge.width,ge.height,ie.depth,ve,ge.data)}else t.compressedTexImage3D(r.TEXTURE_2D_ARRAY,ne,Se,ge.width,ge.height,ie.depth,0,ge.data,0,0);else Je("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ze?q&&t.texSubImage3D(r.TEXTURE_2D_ARRAY,ne,0,0,0,ge.width,ge.height,ie.depth,ve,Ie,ge.data):t.texImage3D(r.TEXTURE_2D_ARRAY,ne,Se,ge.width,ge.height,ie.depth,0,ve,Ie,ge.data);S.layerUpdates.size>0&&S.clearLayerUpdates()}else{ze&&$e&&t.texStorage2D(r.TEXTURE_2D,_e,Se,he[0].width,he[0].height);for(let ne=0,Me=he.length;ne<Me;ne++)ge=he[ne],S.format!==wi?ve!==null?ze?q&&t.compressedTexSubImage2D(r.TEXTURE_2D,ne,0,0,ge.width,ge.height,ve,ge.data):t.compressedTexImage2D(r.TEXTURE_2D,ne,Se,ge.width,ge.height,0,ge.data):Je("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ze?q&&t.texSubImage2D(r.TEXTURE_2D,ne,0,0,ge.width,ge.height,ve,Ie,ge.data):t.texImage2D(r.TEXTURE_2D,ne,Se,ge.width,ge.height,0,ve,Ie,ge.data)}else if(S.isDataArrayTexture)if(ze){if($e&&t.texStorage3D(r.TEXTURE_2D_ARRAY,_e,Se,ie.width,ie.height,ie.depth),q)if(S.layerUpdates.size>0){const ne=gd(ie.width,ie.height,S.format,S.type);for(const Me of S.layerUpdates){const Te=ie.data.subarray(Me*ne/ie.data.BYTES_PER_ELEMENT,(Me+1)*ne/ie.data.BYTES_PER_ELEMENT);t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,Me,ie.width,ie.height,1,ve,Ie,Te)}S.clearLayerUpdates()}else t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,ie.width,ie.height,ie.depth,ve,Ie,ie.data)}else t.texImage3D(r.TEXTURE_2D_ARRAY,0,Se,ie.width,ie.height,ie.depth,0,ve,Ie,ie.data);else if(S.isData3DTexture)ze?($e&&t.texStorage3D(r.TEXTURE_3D,_e,Se,ie.width,ie.height,ie.depth),q&&t.texSubImage3D(r.TEXTURE_3D,0,0,0,0,ie.width,ie.height,ie.depth,ve,Ie,ie.data)):t.texImage3D(r.TEXTURE_3D,0,Se,ie.width,ie.height,ie.depth,0,ve,Ie,ie.data);else if(S.isFramebufferTexture){if($e)if(ze)t.texStorage2D(r.TEXTURE_2D,_e,Se,ie.width,ie.height);else{let ne=ie.width,Me=ie.height;for(let Te=0;Te<_e;Te++)t.texImage2D(r.TEXTURE_2D,Te,Se,ne,Me,0,ve,Ie,null),ne>>=1,Me>>=1}}else if(S.isHTMLTexture){if("texElementImage2D"in r){const ne=r.canvas;if(ne.hasAttribute("layoutsubtree")||ne.setAttribute("layoutsubtree","true"),ie.parentNode!==ne){ne.appendChild(ie),d.add(S),ne.onpaint=Me=>{const Te=Me.changedElements;for(const se of d)Te.includes(se.image)&&(se.needsUpdate=!0)},ne.requestPaint();return}if(r.texElementImage2D.length===3)r.texElementImage2D(r.TEXTURE_2D,r.RGBA8,ie);else{const Te=r.RGBA,se=r.RGBA,ue=r.UNSIGNED_BYTE;r.texElementImage2D(r.TEXTURE_2D,0,Te,se,ue,ie)}r.texParameteri(r.TEXTURE_2D,r.TEXTURE_MIN_FILTER,r.LINEAR),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_S,r.CLAMP_TO_EDGE),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_T,r.CLAMP_TO_EDGE)}}else if(he.length>0){if(ze&&$e){const ne=Ge(he[0]);t.texStorage2D(r.TEXTURE_2D,_e,Se,ne.width,ne.height)}for(let ne=0,Me=he.length;ne<Me;ne++)ge=he[ne],ze?q&&t.texSubImage2D(r.TEXTURE_2D,ne,0,0,ve,Ie,ge):t.texImage2D(r.TEXTURE_2D,ne,Se,ve,Ie,ge);S.generateMipmaps=!1}else if(ze){if($e){const ne=Ge(ie);t.texStorage2D(r.TEXTURE_2D,_e,Se,ne.width,ne.height)}q&&t.texSubImage2D(r.TEXTURE_2D,0,0,0,ve,Ie,ie)}else t.texImage2D(r.TEXTURE_2D,0,Se,ve,Ie,ie);m(S)&&M(H),ce.__version=pe.version,S.onUpdate&&S.onUpdate(S)}R.__version=S.version}function Ve(R,S,V){if(S.image.length!==6)return;const H=Ke(R,S),K=S.source;t.bindTexture(r.TEXTURE_CUBE_MAP,R.__webglTexture,r.TEXTURE0+V);const pe=n.get(K);if(K.version!==pe.__version||H===!0){t.activeTexture(r.TEXTURE0+V);const ce=ht.getPrimaries(ht.workingColorSpace),ee=S.colorSpace===vr?null:ht.getPrimaries(S.colorSpace),ie=S.colorSpace===vr||ce===ee?r.NONE:r.BROWSER_DEFAULT_WEBGL;t.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,S.flipY),t.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),t.pixelStorei(r.UNPACK_ALIGNMENT,S.unpackAlignment),t.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,ie);const ve=S.isCompressedTexture||S.image[0].isCompressedTexture,Ie=S.image[0]&&S.image[0].isDataTexture,Se=[];for(let se=0;se<6;se++)!ve&&!Ie?Se[se]=p(S.image[se],!0,i.maxCubemapSize):Se[se]=Ie?S.image[se].image:S.image[se],Se[se]=rt(S,Se[se]);const ge=Se[0],he=s.convert(S.format,S.colorSpace),ze=s.convert(S.type),$e=v(S.internalFormat,he,ze,S.normalized,S.colorSpace),q=S.isVideoTexture!==!0,_e=pe.__version===void 0||H===!0,ne=K.dataReady;let Me=E(S,ge);We(r.TEXTURE_CUBE_MAP,S);let Te;if(ve){q&&_e&&t.texStorage2D(r.TEXTURE_CUBE_MAP,Me,$e,ge.width,ge.height);for(let se=0;se<6;se++){Te=Se[se].mipmaps;for(let ue=0;ue<Te.length;ue++){const ae=Te[ue];S.format!==wi?he!==null?q?ne&&t.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+se,ue,0,0,ae.width,ae.height,he,ae.data):t.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+se,ue,$e,ae.width,ae.height,0,ae.data):Je("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):q?ne&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+se,ue,0,0,ae.width,ae.height,he,ze,ae.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+se,ue,$e,ae.width,ae.height,0,he,ze,ae.data)}}}else{if(Te=S.mipmaps,q&&_e){Te.length>0&&Me++;const se=Ge(Se[0]);t.texStorage2D(r.TEXTURE_CUBE_MAP,Me,$e,se.width,se.height)}for(let se=0;se<6;se++)if(Ie){q?ne&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,0,0,Se[se].width,Se[se].height,he,ze,Se[se].data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,$e,Se[se].width,Se[se].height,0,he,ze,Se[se].data);for(let ue=0;ue<Te.length;ue++){const He=Te[ue].image[se].image;q?ne&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+se,ue+1,0,0,He.width,He.height,he,ze,He.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+se,ue+1,$e,He.width,He.height,0,he,ze,He.data)}}else{q?ne&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,0,0,he,ze,Se[se]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,$e,he,ze,Se[se]);for(let ue=0;ue<Te.length;ue++){const ae=Te[ue];q?ne&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+se,ue+1,0,0,he,ze,ae.image[se]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+se,ue+1,$e,he,ze,ae.image[se])}}}m(S)&&M(r.TEXTURE_CUBE_MAP),pe.__version=K.version,S.onUpdate&&S.onUpdate(S)}R.__version=S.version}function xe(R,S,V,H,K,pe){const ce=s.convert(V.format,V.colorSpace),ee=s.convert(V.type),ie=v(V.internalFormat,ce,ee,V.normalized,V.colorSpace),ve=n.get(S),Ie=n.get(V);if(Ie.__renderTarget=S,!ve.__hasExternalTextures){const Se=Math.max(1,S.width>>pe),ge=Math.max(1,S.height>>pe);K===r.TEXTURE_3D||K===r.TEXTURE_2D_ARRAY?t.texImage3D(K,pe,ie,Se,ge,S.depth,0,ce,ee,null):t.texImage2D(K,pe,ie,Se,ge,0,ce,ee,null)}t.bindFramebuffer(r.FRAMEBUFFER,R),Ze(S)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,H,K,Ie.__webglTexture,0,Ce(S)):(K===r.TEXTURE_2D||K>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&K<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,H,K,Ie.__webglTexture,pe),t.bindFramebuffer(r.FRAMEBUFFER,null)}function Le(R,S,V){if(r.bindRenderbuffer(r.RENDERBUFFER,R),S.depthBuffer){const H=S.depthTexture,K=H&&H.isDepthTexture?H.type:null,pe=y(S.stencilBuffer,K),ce=S.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;Ze(S)?o.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Ce(S),pe,S.width,S.height):V?r.renderbufferStorageMultisample(r.RENDERBUFFER,Ce(S),pe,S.width,S.height):r.renderbufferStorage(r.RENDERBUFFER,pe,S.width,S.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,ce,r.RENDERBUFFER,R)}else{const H=S.textures;for(let K=0;K<H.length;K++){const pe=H[K],ce=s.convert(pe.format,pe.colorSpace),ee=s.convert(pe.type),ie=v(pe.internalFormat,ce,ee,pe.normalized,pe.colorSpace);Ze(S)?o.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Ce(S),ie,S.width,S.height):V?r.renderbufferStorageMultisample(r.RENDERBUFFER,Ce(S),ie,S.width,S.height):r.renderbufferStorage(r.RENDERBUFFER,ie,S.width,S.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function Ne(R,S,V){const H=S.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(r.FRAMEBUFFER,R),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const K=n.get(S.depthTexture);if(K.__renderTarget=S,(!K.__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),H){if(K.__webglInit===void 0&&(K.__webglInit=!0,S.depthTexture.addEventListener("dispose",w)),K.__webglTexture===void 0){K.__webglTexture=r.createTexture(),t.bindTexture(r.TEXTURE_CUBE_MAP,K.__webglTexture),We(r.TEXTURE_CUBE_MAP,S.depthTexture);const ve=s.convert(S.depthTexture.format),Ie=s.convert(S.depthTexture.type);let Se;S.depthTexture.format===sr?Se=r.DEPTH_COMPONENT24:S.depthTexture.format===Xr&&(Se=r.DEPTH24_STENCIL8);for(let ge=0;ge<6;ge++)r.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0,Se,S.width,S.height,0,ve,Ie,null)}}else j(S.depthTexture,0);const pe=K.__webglTexture,ce=Ce(S),ee=H?r.TEXTURE_CUBE_MAP_POSITIVE_X+V:r.TEXTURE_2D,ie=S.depthTexture.format===Xr?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;if(S.depthTexture.format===sr)Ze(S)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,ie,ee,pe,0,ce):r.framebufferTexture2D(r.FRAMEBUFFER,ie,ee,pe,0);else if(S.depthTexture.format===Xr)Ze(S)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,ie,ee,pe,0,ce):r.framebufferTexture2D(r.FRAMEBUFFER,ie,ee,pe,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function Q(R){const S=n.get(R),V=R.isWebGLCubeRenderTarget===!0;if(S.__boundDepthTexture!==R.depthTexture){const H=R.depthTexture;if(S.__depthDisposeCallback&&S.__depthDisposeCallback(),H){const K=()=>{delete S.__boundDepthTexture,delete S.__depthDisposeCallback,H.removeEventListener("dispose",K)};H.addEventListener("dispose",K),S.__depthDisposeCallback=K}S.__boundDepthTexture=H}if(R.depthTexture&&!S.__autoAllocateDepthBuffer)if(V)for(let H=0;H<6;H++)Ne(S.__webglFramebuffer[H],R,H);else{const H=R.texture.mipmaps;H&&H.length>0?Ne(S.__webglFramebuffer[0],R,0):Ne(S.__webglFramebuffer,R,0)}else if(V){S.__webglDepthbuffer=[];for(let H=0;H<6;H++)if(t.bindFramebuffer(r.FRAMEBUFFER,S.__webglFramebuffer[H]),S.__webglDepthbuffer[H]===void 0)S.__webglDepthbuffer[H]=r.createRenderbuffer(),Le(S.__webglDepthbuffer[H],R,!1);else{const K=R.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,pe=S.__webglDepthbuffer[H];r.bindRenderbuffer(r.RENDERBUFFER,pe),r.framebufferRenderbuffer(r.FRAMEBUFFER,K,r.RENDERBUFFER,pe)}}else{const H=R.texture.mipmaps;if(H&&H.length>0?t.bindFramebuffer(r.FRAMEBUFFER,S.__webglFramebuffer[0]):t.bindFramebuffer(r.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer===void 0)S.__webglDepthbuffer=r.createRenderbuffer(),Le(S.__webglDepthbuffer,R,!1);else{const K=R.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,pe=S.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,pe),r.framebufferRenderbuffer(r.FRAMEBUFFER,K,r.RENDERBUFFER,pe)}}t.bindFramebuffer(r.FRAMEBUFFER,null)}function re(R,S,V){const H=n.get(R);S!==void 0&&xe(H.__webglFramebuffer,R,R.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),V!==void 0&&Q(R)}function oe(R){const S=R.texture,V=n.get(R),H=n.get(S);R.addEventListener("dispose",x);const K=R.textures,pe=R.isWebGLCubeRenderTarget===!0,ce=K.length>1;if(ce||(H.__webglTexture===void 0&&(H.__webglTexture=r.createTexture()),H.__version=S.version,a.memory.textures++),pe){V.__webglFramebuffer=[];for(let ee=0;ee<6;ee++)if(S.mipmaps&&S.mipmaps.length>0){V.__webglFramebuffer[ee]=[];for(let ie=0;ie<S.mipmaps.length;ie++)V.__webglFramebuffer[ee][ie]=r.createFramebuffer()}else V.__webglFramebuffer[ee]=r.createFramebuffer()}else{if(S.mipmaps&&S.mipmaps.length>0){V.__webglFramebuffer=[];for(let ee=0;ee<S.mipmaps.length;ee++)V.__webglFramebuffer[ee]=r.createFramebuffer()}else V.__webglFramebuffer=r.createFramebuffer();if(ce)for(let ee=0,ie=K.length;ee<ie;ee++){const ve=n.get(K[ee]);ve.__webglTexture===void 0&&(ve.__webglTexture=r.createTexture(),a.memory.textures++)}if(R.samples>0&&Ze(R)===!1){V.__webglMultisampledFramebuffer=r.createFramebuffer(),V.__webglColorRenderbuffer=[],t.bindFramebuffer(r.FRAMEBUFFER,V.__webglMultisampledFramebuffer);for(let ee=0;ee<K.length;ee++){const ie=K[ee];V.__webglColorRenderbuffer[ee]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,V.__webglColorRenderbuffer[ee]);const ve=s.convert(ie.format,ie.colorSpace),Ie=s.convert(ie.type),Se=v(ie.internalFormat,ve,Ie,ie.normalized,ie.colorSpace,R.isXRRenderTarget===!0),ge=Ce(R);r.renderbufferStorageMultisample(r.RENDERBUFFER,ge,Se,R.width,R.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+ee,r.RENDERBUFFER,V.__webglColorRenderbuffer[ee])}r.bindRenderbuffer(r.RENDERBUFFER,null),R.depthBuffer&&(V.__webglDepthRenderbuffer=r.createRenderbuffer(),Le(V.__webglDepthRenderbuffer,R,!0)),t.bindFramebuffer(r.FRAMEBUFFER,null)}}if(pe){t.bindTexture(r.TEXTURE_CUBE_MAP,H.__webglTexture),We(r.TEXTURE_CUBE_MAP,S);for(let ee=0;ee<6;ee++)if(S.mipmaps&&S.mipmaps.length>0)for(let ie=0;ie<S.mipmaps.length;ie++)xe(V.__webglFramebuffer[ee][ie],R,S,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+ee,ie);else xe(V.__webglFramebuffer[ee],R,S,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0);m(S)&&M(r.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ce){for(let ee=0,ie=K.length;ee<ie;ee++){const ve=K[ee],Ie=n.get(ve);let Se=r.TEXTURE_2D;(R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(Se=R.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),t.bindTexture(Se,Ie.__webglTexture),We(Se,ve),xe(V.__webglFramebuffer,R,ve,r.COLOR_ATTACHMENT0+ee,Se,0),m(ve)&&M(Se)}t.unbindTexture()}else{let ee=r.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(ee=R.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),t.bindTexture(ee,H.__webglTexture),We(ee,S),S.mipmaps&&S.mipmaps.length>0)for(let ie=0;ie<S.mipmaps.length;ie++)xe(V.__webglFramebuffer[ie],R,S,r.COLOR_ATTACHMENT0,ee,ie);else xe(V.__webglFramebuffer,R,S,r.COLOR_ATTACHMENT0,ee,0);m(S)&&M(ee),t.unbindTexture()}R.depthBuffer&&Q(R)}function N(R){const S=R.textures;for(let V=0,H=S.length;V<H;V++){const K=S[V];if(m(K)){const pe=A(R),ce=n.get(K).__webglTexture;t.bindTexture(pe,ce),M(pe),t.unbindTexture()}}}const de=[],Be=[];function Ue(R){if(R.samples>0){if(Ze(R)===!1){const S=R.textures,V=R.width,H=R.height;let K=r.COLOR_BUFFER_BIT;const pe=R.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,ce=n.get(R),ee=S.length>1;if(ee)for(let ve=0;ve<S.length;ve++)t.bindFramebuffer(r.FRAMEBUFFER,ce.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+ve,r.RENDERBUFFER,null),t.bindFramebuffer(r.FRAMEBUFFER,ce.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+ve,r.TEXTURE_2D,null,0);t.bindFramebuffer(r.READ_FRAMEBUFFER,ce.__webglMultisampledFramebuffer);const ie=R.texture.mipmaps;ie&&ie.length>0?t.bindFramebuffer(r.DRAW_FRAMEBUFFER,ce.__webglFramebuffer[0]):t.bindFramebuffer(r.DRAW_FRAMEBUFFER,ce.__webglFramebuffer);for(let ve=0;ve<S.length;ve++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(K|=r.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(K|=r.STENCIL_BUFFER_BIT)),ee){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,ce.__webglColorRenderbuffer[ve]);const Ie=n.get(S[ve]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,Ie,0)}r.blitFramebuffer(0,0,V,H,0,0,V,H,K,r.NEAREST),l===!0&&(de.length=0,Be.length=0,de.push(r.COLOR_ATTACHMENT0+ve),R.depthBuffer&&R.storeMultisampledDepthBuffer===!1&&(de.push(pe),Be.push(pe),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,Be)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,de))}if(t.bindFramebuffer(r.READ_FRAMEBUFFER,null),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),ee)for(let ve=0;ve<S.length;ve++){t.bindFramebuffer(r.FRAMEBUFFER,ce.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+ve,r.RENDERBUFFER,ce.__webglColorRenderbuffer[ve]);const Ie=n.get(S[ve]).__webglTexture;t.bindFramebuffer(r.FRAMEBUFFER,ce.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+ve,r.TEXTURE_2D,Ie,0)}t.bindFramebuffer(r.DRAW_FRAMEBUFFER,ce.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.storeMultisampledDepthBuffer===!1&&l){const S=R.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[S])}}}function Ce(R){return Math.min(i.maxSamples,R.samples)}function Ze(R){const S=n.get(R);return R.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function U(R){const S=a.render.frame;u.get(R)!==S&&(u.set(R,S),R.update())}function rt(R,S){const V=R.colorSpace,H=R.format,K=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||V!==Il&&V!==vr&&(ht.getTransfer(V)===gt?(H!==wi||K!==ni)&&Je("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):mt("WebGLTextures: Unsupported texture color space:",V)),S}function Ge(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(c.width=R.naturalWidth||R.width,c.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(c.width=R.displayWidth,c.height=R.displayHeight):(c.width=R.width,c.height=R.height),c}this.allocateTextureUnit=X,this.resetTextureUnits=k,this.getTextureUnits=I,this.setTextureUnits=F,this.setTexture2D=j,this.setTexture2DArray=Y,this.setTexture3D=P,this.setTextureCube=J,this.rebindTextures=re,this.setupRenderTarget=oe,this.updateRenderTargetMipmap=N,this.updateMultisampleRenderTarget=Ue,this.setupDepthRenderbuffer=Q,this.setupFrameBufferTexture=xe,this.useMultisampledRTT=Ze,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function Fv(r,e){function t(n,i=vr){let s;const a=ht.getTransfer(i);if(n===ni)return r.UNSIGNED_BYTE;if(n===Dh)return r.UNSIGNED_SHORT_4_4_4_4;if(n===Lh)return r.UNSIGNED_SHORT_5_5_5_1;if(n===Dp)return r.UNSIGNED_INT_5_9_9_9_REV;if(n===Lp)return r.UNSIGNED_INT_10F_11F_11F_REV;if(n===Rp)return r.BYTE;if(n===Pp)return r.SHORT;if(n===eo)return r.UNSIGNED_SHORT;if(n===Ph)return r.INT;if(n===Gi)return r.UNSIGNED_INT;if(n===qi)return r.FLOAT;if(n===Hn)return r.HALF_FLOAT;if(n===Ip)return r.ALPHA;if(n===Np)return r.RGB;if(n===wi)return r.RGBA;if(n===sr)return r.DEPTH_COMPONENT;if(n===Xr)return r.DEPTH_STENCIL;if(n===Up)return r.RED;if(n===Ih)return r.RED_INTEGER;if(n===as)return r.RG;if(n===Nh)return r.RG_INTEGER;if(n===Uh)return r.RGBA_INTEGER;if(n===pl||n===ml||n===_l||n===gl)if(a===gt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===pl)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===ml)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===_l)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===gl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===pl)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===ml)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===_l)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===gl)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===_u||n===gu||n===xu||n===vu)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===_u)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===gu)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===xu)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===vu)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Su||n===Mu||n===yu||n===Tu||n===Eu||n===Dl||n===bu)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(n===Su||n===Mu)return a===gt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===yu)return a===gt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(n===Tu)return s.COMPRESSED_R11_EAC;if(n===Eu)return s.COMPRESSED_SIGNED_R11_EAC;if(n===Dl)return s.COMPRESSED_RG11_EAC;if(n===bu)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===wu||n===Au||n===Cu||n===Ru||n===Pu||n===Du||n===Lu||n===Iu||n===Nu||n===Uu||n===qu||n===Fu||n===Ou||n===Bu)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(n===wu)return a===gt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Au)return a===gt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Cu)return a===gt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Ru)return a===gt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Pu)return a===gt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Du)return a===gt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Lu)return a===gt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Iu)return a===gt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Nu)return a===gt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Uu)return a===gt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===qu)return a===gt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Fu)return a===gt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Ou)return a===gt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Bu)return a===gt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===zu||n===ku||n===Vu)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(n===zu)return a===gt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===ku)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Vu)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Hu||n===Gu||n===Ll||n===Wu)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(n===Hu)return s.COMPRESSED_RED_RGTC1_EXT;if(n===Gu)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Ll)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Wu)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===to?r.UNSIGNED_INT_24_8:r[n]!==void 0?r[n]:null}return{convert:t}}const Ov=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Bv=`
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

}`;class zv{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const n=new Wp(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new cn({vertexShader:Ov,fragmentShader:Bv,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new en(new vo(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class kv extends ds{constructor(e,t){super();const n=this;let i=null,s=1,a=null,o="local-floor",l=1,c=null,u=null,d=null,h=null,f=null,_=null;const g=typeof XRWebGLBinding<"u",p=new zv,m={},M=t.getContextAttributes();let A=null,v=null;const y=[],E=[],w=new fe;let x=null,T=null;const C=new zn;C.viewport=new Nt;const L=new zn;L.viewport=new Nt;const D=[C,L],k=new G1;let I=null,F=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function($){let te=y[$];return te===void 0&&(te=new vc,y[$]=te),te.getTargetRaySpace()},this.getControllerGrip=function($){let te=y[$];return te===void 0&&(te=new vc,y[$]=te),te.getGripSpace()},this.getHand=function($){let te=y[$];return te===void 0&&(te=new vc,y[$]=te),te.getHandSpace()};function X($){const te=E.indexOf($.inputSource);if(te===-1)return;const me=y[te];me!==void 0&&(me.update($.inputSource,$.frame,c||a),me.dispatchEvent({type:$.type,data:$.inputSource}))}function z(){i.removeEventListener("select",X),i.removeEventListener("selectstart",X),i.removeEventListener("selectend",X),i.removeEventListener("squeeze",X),i.removeEventListener("squeezestart",X),i.removeEventListener("squeezeend",X),i.removeEventListener("end",z),i.removeEventListener("inputsourceschange",j);for(let $=0;$<y.length;$++){const te=E[$];te!==null&&(E[$]=null,y[$].disconnect(te))}I=null,F=null,p.reset();for(const $ in m)delete m[$];if(e.setRenderTarget(A),f=null,h=null,d=null,i=null,v=null,Ke.stop(),n.isPresenting=!1,e.setPixelRatio(x),e.setSize(w.width,w.height,!1),T!==null){const $=T.camera;$.fov=T.fov,$.zoom=T.zoom,$.updateProjectionMatrix(),T=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function($){s=$,n.isPresenting===!0&&Je("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function($){o=$,n.isPresenting===!0&&Je("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function($){c=$},this.getBaseLayer=function(){return h!==null?h:f},this.getBinding=function(){return d===null&&g&&(d=new XRWebGLBinding(i,t)),d},this.getFrame=function(){return _},this.getSession=function(){return i},this.setSession=async function($){if(i=$,i!==null){if(A=e.getRenderTarget(),i.addEventListener("select",X),i.addEventListener("selectstart",X),i.addEventListener("selectend",X),i.addEventListener("squeeze",X),i.addEventListener("squeezestart",X),i.addEventListener("squeezeend",X),i.addEventListener("end",z),i.addEventListener("inputsourceschange",j),M.xrCompatible!==!0&&await t.makeXRCompatible(),x=e.getPixelRatio(),e.getSize(w),g&&"createProjectionLayer"in XRWebGLBinding.prototype){let me=null,Ve=null,xe=null;M.depth&&(xe=M.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,me=M.stencil?Xr:sr,Ve=M.stencil?to:Gi);const Le={colorFormat:t.RGBA8,depthFormat:xe,scaleFactor:s};d=this.getBinding(),h=d.createProjectionLayer(Le),i.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),v=new Fn(h.textureWidth,h.textureHeight,{format:wi,type:ni,depthTexture:new io(h.textureWidth,h.textureHeight,Ve,void 0,void 0,void 0,void 0,void 0,void 0,me),stencilBuffer:M.stencil,colorSpace:e.outputColorSpace,samples:M.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1,storeMultisampledDepthBuffer:h.ignoreDepthValues===!1,storeMultisampledStencilBuffer:h.ignoreDepthValues===!1})}else{const me={antialias:M.antialias,alpha:!0,depth:M.depth,stencil:M.stencil,framebufferScaleFactor:s};f=new XRWebGLLayer(i,t,me),i.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),v=new Fn(f.framebufferWidth,f.framebufferHeight,{format:wi,type:ni,colorSpace:e.outputColorSpace,stencilBuffer:M.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await i.requestReferenceSpace(o),Ke.setContext(i),Ke.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return p.getDepthTexture()};function j($){for(let te=0;te<$.removed.length;te++){const me=$.removed[te],Ve=E.indexOf(me);Ve>=0&&(E[Ve]=null,y[Ve].disconnect(me))}for(let te=0;te<$.added.length;te++){const me=$.added[te];let Ve=E.indexOf(me);if(Ve===-1){for(let Le=0;Le<y.length;Le++)if(Le>=E.length){E.push(me),Ve=Le;break}else if(E[Le]===null){E[Le]=me,Ve=Le;break}if(Ve===-1)break}const xe=y[Ve];xe&&xe.connect(me)}}const Y=new B,P=new B;function J($,te,me){Y.setFromMatrixPosition(te.matrixWorld),P.setFromMatrixPosition(me.matrixWorld);const Ve=Y.distanceTo(P),xe=te.projectionMatrix.elements,Le=me.projectionMatrix.elements,Ne=xe[14]/(xe[10]-1),Q=xe[14]/(xe[10]+1),re=(xe[9]+1)/xe[5],oe=(xe[9]-1)/xe[5],N=(xe[8]-1)/xe[0],de=(Le[8]+1)/Le[0],Be=Ne*N,Ue=Ne*de,Ce=Ve/(-N+de),Ze=Ce*-N;if(te.matrixWorld.decompose($.position,$.quaternion,$.scale),$.translateX(Ze),$.translateZ(Ce),$.matrixWorld.compose($.position,$.quaternion,$.scale),$.matrixWorldInverse.copy($.matrixWorld).invert(),xe[10]===-1)$.projectionMatrix.copy(te.projectionMatrix),$.projectionMatrixInverse.copy(te.projectionMatrixInverse);else{const U=Ne+Ce,rt=Q+Ce,Ge=Be-Ze,R=Ue+(Ve-Ze),S=re*Q/rt*U,V=oe*Q/rt*U;$.projectionMatrix.makePerspective(Ge,R,S,V,U,rt),$.projectionMatrixInverse.copy($.projectionMatrix).invert()}}function we($,te){te===null?$.matrixWorld.copy($.matrix):$.matrixWorld.multiplyMatrices(te.matrixWorld,$.matrix),$.matrixWorldInverse.copy($.matrixWorld).invert()}this.updateCamera=function($){if(i===null)return;let te=$.near,me=$.far;p.texture!==null&&(p.depthNear>0&&(te=p.depthNear),p.depthFar>0&&(me=p.depthFar)),k.near=L.near=C.near=te,k.far=L.far=C.far=me,(I!==k.near||F!==k.far)&&(i.updateRenderState({depthNear:k.near,depthFar:k.far}),I=k.near,F=k.far),k.layers.mask=$.layers.mask|6,C.layers.mask=k.layers.mask&-5,L.layers.mask=k.layers.mask&-3;const Ve=$.parent,xe=k.cameras;we(k,Ve);for(let Le=0;Le<xe.length;Le++)we(xe[Le],Ve);xe.length===2?J(k,C,L):k.projectionMatrix.copy(C.projectionMatrix),T===null&&$.isPerspectiveCamera&&(T={camera:$,fov:$.fov,zoom:$.zoom}),Ee($,k,Ve)};function Ee($,te,me){me===null?$.matrix.copy(te.matrixWorld):($.matrix.copy(me.matrixWorld),$.matrix.invert(),$.matrix.multiply(te.matrixWorld)),$.matrix.decompose($.position,$.quaternion,$.scale),$.updateMatrixWorld(!0),$.projectionMatrix.copy(te.projectionMatrix),$.projectionMatrixInverse.copy(te.projectionMatrixInverse),$.isPerspectiveCamera&&($.fov=ql*2*Math.atan(1/$.projectionMatrix.elements[5]),$.zoom=1)}this.getCamera=function(){return k},this.getFoveation=function(){if(!(h===null&&f===null))return l},this.setFoveation=function($){l=$,h!==null&&(h.fixedFoveation=$),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=$)},this.hasDepthSensing=function(){return p.texture!==null},this.getDepthSensingMesh=function(){return p.getMesh(k)},this.getCameraTexture=function($){return m[$]};let Ye=null;function We($,te){if(u=te.getViewerPose(c||a),_=te,u!==null){const me=u.views;f!==null&&(e.setRenderTargetFramebuffer(v,f.framebuffer),e.setRenderTarget(v));let Ve=!1;me.length!==k.cameras.length&&(k.cameras.length=0,Ve=!0);for(let Q=0;Q<me.length;Q++){const re=me[Q];let oe=null;if(f!==null)oe=f.getViewport(re);else{const de=d.getViewSubImage(h,re);oe=de.viewport,Q===0&&(e.setRenderTargetTextures(v,de.colorTexture,de.depthStencilTexture),e.setRenderTarget(v))}let N=D[Q];N===void 0&&(N=new zn,N.layers.enable(Q),N.viewport=new Nt,D[Q]=N),N.matrix.fromArray(re.transform.matrix),N.matrix.decompose(N.position,N.quaternion,N.scale),N.projectionMatrix.fromArray(re.projectionMatrix),N.projectionMatrixInverse.copy(N.projectionMatrix).invert(),N.viewport.set(oe.x,oe.y,oe.width,oe.height),Q===0&&(k.matrix.copy(N.matrix),k.matrix.decompose(k.position,k.quaternion,k.scale)),Ve===!0&&k.cameras.push(N)}const xe=i.enabledFeatures;if(xe&&xe.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&g){d=n.getBinding();const Q=d.getDepthInformation(me[0]);Q&&Q.isValid&&Q.texture&&p.init(Q,i.renderState)}if(xe&&xe.includes("camera-access")&&g){e.state.unbindTexture(),d=n.getBinding();for(let Q=0;Q<me.length;Q++){const re=me[Q].camera;if(re){let oe=m[re];oe||(oe=new Wp,m[re]=oe);const N=d.getCameraImage(re);oe.sourceTexture=N}}}}for(let me=0;me<y.length;me++){const Ve=E[me],xe=y[me];Ve!==null&&xe!==void 0&&xe.update(Ve,te,c||a)}Ye&&Ye($,te),te.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:te}),_=null}const Ke=new r0;Ke.setAnimationLoop(We),this.setAnimationLoop=function($){Ye=$},this.dispose=function(){}}}const Vv=new Dt,h0=new et;h0.set(-1,0,0,0,1,0,0,0,1);function Hv(r,e){function t(p,m){p.matrixAutoUpdate===!0&&p.updateMatrix(),m.value.copy(p.matrix)}function n(p,m){m.color.getRGB(p.fogColor.value,t0(r)),m.isFog?(p.fogNear.value=m.near,p.fogFar.value=m.far):m.isFogExp2&&(p.fogDensity.value=m.density)}function i(p,m,M,A,v){m.isNodeMaterial?m.uniformsNeedUpdate=!1:m.isMeshBasicMaterial?s(p,m):m.isMeshLambertMaterial?(s(p,m),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)):m.isMeshToonMaterial?(s(p,m),d(p,m)):m.isMeshPhongMaterial?(s(p,m),u(p,m),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)):m.isMeshStandardMaterial?(s(p,m),h(p,m),m.isMeshPhysicalMaterial&&f(p,m,v)):m.isMeshMatcapMaterial?(s(p,m),_(p,m)):m.isMeshDepthMaterial?s(p,m):m.isMeshDistanceMaterial?(s(p,m),g(p,m)):m.isMeshNormalMaterial?s(p,m):m.isLineBasicMaterial?(a(p,m),m.isLineDashedMaterial&&o(p,m)):m.isPointsMaterial?l(p,m,M,A):m.isSpriteMaterial?c(p,m):m.isShadowMaterial?(p.color.value.copy(m.color),p.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function s(p,m){p.opacity.value=m.opacity,m.color&&p.diffuse.value.copy(m.color),m.emissive&&p.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(p.map.value=m.map,t(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.bumpMap&&(p.bumpMap.value=m.bumpMap,t(m.bumpMap,p.bumpMapTransform),p.bumpScale.value=m.bumpScale,m.side===Vn&&(p.bumpScale.value*=-1)),m.normalMap&&(p.normalMap.value=m.normalMap,t(m.normalMap,p.normalMapTransform),p.normalScale.value.copy(m.normalScale),m.side===Vn&&p.normalScale.value.negate()),m.displacementMap&&(p.displacementMap.value=m.displacementMap,t(m.displacementMap,p.displacementMapTransform),p.displacementScale.value=m.displacementScale,p.displacementBias.value=m.displacementBias),m.emissiveMap&&(p.emissiveMap.value=m.emissiveMap,t(m.emissiveMap,p.emissiveMapTransform)),m.specularMap&&(p.specularMap.value=m.specularMap,t(m.specularMap,p.specularMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest);const M=e.get(m),A=M.envMap,v=M.envMapRotation;A&&(p.envMap.value=A,p.envMapRotation.value.setFromMatrix4(Vv.makeRotationFromEuler(v)).transpose(),A.isCubeTexture&&A.isRenderTargetTexture===!1&&p.envMapRotation.value.premultiply(h0),p.reflectivity.value=m.reflectivity,p.ior.value=m.ior,p.refractionRatio.value=m.refractionRatio),m.lightMap&&(p.lightMap.value=m.lightMap,p.lightMapIntensity.value=m.lightMapIntensity,t(m.lightMap,p.lightMapTransform)),m.aoMap&&(p.aoMap.value=m.aoMap,p.aoMapIntensity.value=m.aoMapIntensity,t(m.aoMap,p.aoMapTransform))}function a(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,m.map&&(p.map.value=m.map,t(m.map,p.mapTransform))}function o(p,m){p.dashSize.value=m.dashSize,p.totalSize.value=m.dashSize+m.gapSize,p.scale.value=m.scale}function l(p,m,M,A){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.size.value=m.size*M,p.scale.value=A*.5,m.map&&(p.map.value=m.map,t(m.map,p.uvTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function c(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.rotation.value=m.rotation,m.map&&(p.map.value=m.map,t(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function u(p,m){p.specular.value.copy(m.specular),p.shininess.value=Math.max(m.shininess,1e-4)}function d(p,m){m.gradientMap&&(p.gradientMap.value=m.gradientMap)}function h(p,m){p.metalness.value=m.metalness,m.metalnessMap&&(p.metalnessMap.value=m.metalnessMap,t(m.metalnessMap,p.metalnessMapTransform)),p.roughness.value=m.roughness,m.roughnessMap&&(p.roughnessMap.value=m.roughnessMap,t(m.roughnessMap,p.roughnessMapTransform)),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)}function f(p,m,M){p.ior.value=m.ior,m.sheen>0&&(p.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),p.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(p.sheenColorMap.value=m.sheenColorMap,t(m.sheenColorMap,p.sheenColorMapTransform)),m.sheenRoughnessMap&&(p.sheenRoughnessMap.value=m.sheenRoughnessMap,t(m.sheenRoughnessMap,p.sheenRoughnessMapTransform))),m.clearcoat>0&&(p.clearcoat.value=m.clearcoat,p.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(p.clearcoatMap.value=m.clearcoatMap,t(m.clearcoatMap,p.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,t(m.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(p.clearcoatNormalMap.value=m.clearcoatNormalMap,t(m.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===Vn&&p.clearcoatNormalScale.value.negate())),m.dispersion>0&&(p.dispersion.value=m.dispersion),m.retroreflectivity>0&&(p.retroreflectivity.value=m.retroreflectivity),m.iridescence>0&&(p.iridescence.value=m.iridescence,p.iridescenceIOR.value=m.iridescenceIOR,p.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(p.iridescenceMap.value=m.iridescenceMap,t(m.iridescenceMap,p.iridescenceMapTransform)),m.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=m.iridescenceThicknessMap,t(m.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),m.transmission>0&&(p.transmission.value=m.transmission,p.transmissionSamplerMap.value=M.texture,p.transmissionSamplerSize.value.set(M.width,M.height),m.transmissionMap&&(p.transmissionMap.value=m.transmissionMap,t(m.transmissionMap,p.transmissionMapTransform)),p.thickness.value=m.thickness,m.thicknessMap&&(p.thicknessMap.value=m.thicknessMap,t(m.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=m.attenuationDistance,p.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(p.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(p.anisotropyMap.value=m.anisotropyMap,t(m.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=m.specularIntensity,p.specularColor.value.copy(m.specularColor),m.specularColorMap&&(p.specularColorMap.value=m.specularColorMap,t(m.specularColorMap,p.specularColorMapTransform)),m.specularIntensityMap&&(p.specularIntensityMap.value=m.specularIntensityMap,t(m.specularIntensityMap,p.specularIntensityMapTransform))}function _(p,m){m.matcap&&(p.matcap.value=m.matcap)}function g(p,m){const M=e.get(m).light;p.referencePosition.value.setFromMatrixPosition(M.matrixWorld),p.nearDistance.value=M.shadow.camera.near,p.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function Gv(r,e,t,n){let i={},s={},a=[];const o=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function l(v,y){const E=y.program;n.uniformBlockBinding(v,E)}function c(v,y){let E=i[v.id];E===void 0&&(p(v),E=u(v),i[v.id]=E,v.addEventListener("dispose",M));const w=y.program;n.updateUBOMapping(v,w);const x=e.render.frame;s[v.id]!==x&&(h(v),s[v.id]=x)}function u(v){const y=d();v.__bindingPointIndex=y;const E=r.createBuffer(),w=v.__size,x=v.usage;return r.bindBuffer(r.UNIFORM_BUFFER,E),r.bufferData(r.UNIFORM_BUFFER,w,x),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,y,E),E}function d(){for(let v=0;v<o;v++)if(a.indexOf(v)===-1)return a.push(v),v;return mt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(v){const y=i[v.id],E=v.uniforms,w=v.__cache;r.bindBuffer(r.UNIFORM_BUFFER,y);for(let x=0,T=E.length;x<T;x++){const C=E[x];if(Array.isArray(C))for(let L=0,D=C.length;L<D;L++)f(C[L],x,L,w);else f(C,x,0,w)}r.bindBuffer(r.UNIFORM_BUFFER,null)}function f(v,y,E,w){if(g(v,y,E,w)===!0){const x=v.__offset,T=v.value;if(Array.isArray(T)){let C=0;for(let L=0;L<T.length;L++){const D=T[L],k=m(D);_(D,v.__data,C),typeof D!="number"&&typeof D!="boolean"&&!D.isMatrix3&&!ArrayBuffer.isView(D)&&(C+=k.storage/Float32Array.BYTES_PER_ELEMENT)}}else _(T,v.__data,0);r.bufferSubData(r.UNIFORM_BUFFER,x,v.__data)}}function _(v,y,E){typeof v=="number"||typeof v=="boolean"?y[0]=v:v.isMatrix3?(y[0]=v.elements[0],y[1]=v.elements[1],y[2]=v.elements[2],y[3]=0,y[4]=v.elements[3],y[5]=v.elements[4],y[6]=v.elements[5],y[7]=0,y[8]=v.elements[6],y[9]=v.elements[7],y[10]=v.elements[8],y[11]=0):ArrayBuffer.isView(v)?y.set(new v.constructor(v.buffer,v.byteOffset,y.length)):v.toArray(y,E)}function g(v,y,E,w){const x=v.value,T=y+"_"+E;if(w[T]===void 0)return typeof x=="number"||typeof x=="boolean"?w[T]=x:ArrayBuffer.isView(x)?w[T]=x.slice():w[T]=x.clone(),!0;{const C=w[T];if(typeof x=="number"||typeof x=="boolean"){if(C!==x)return w[T]=x,!0}else{if(ArrayBuffer.isView(x))return!0;if(C.equals(x)===!1)return C.copy(x),!0}}return!1}function p(v){const y=v.uniforms;let E=0;const w=16;for(let T=0,C=y.length;T<C;T++){const L=Array.isArray(y[T])?y[T]:[y[T]];for(let D=0,k=L.length;D<k;D++){const I=L[D],F=Array.isArray(I.value)?I.value:[I.value];for(let X=0,z=F.length;X<z;X++){const j=F[X],Y=m(j),P=E%w,J=P%Y.boundary,we=P+J;E+=J,we!==0&&w-we<Y.storage&&(E+=w-we),I.__data=new Float32Array(Y.storage/Float32Array.BYTES_PER_ELEMENT),I.__offset=E,E+=Y.storage}}}const x=E%w;return x>0&&(E+=w-x),v.__size=E,v.__cache={},this}function m(v){const y={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(y.boundary=4,y.storage=4):v.isVector2?(y.boundary=8,y.storage=8):v.isVector3||v.isColor?(y.boundary=16,y.storage=12):v.isVector4?(y.boundary=16,y.storage=16):v.isMatrix3?(y.boundary=48,y.storage=48):v.isMatrix4?(y.boundary=64,y.storage=64):v.isTexture?Je("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(v)?(y.boundary=16,y.storage=v.byteLength):Je("WebGLRenderer: Unsupported uniform value type.",v),y}function M(v){const y=v.target;y.removeEventListener("dispose",M);const E=a.indexOf(y.__bindingPointIndex);a.splice(E,1),r.deleteBuffer(i[y.id]),delete i[y.id],delete s[y.id]}function A(){for(const v in i)r.deleteBuffer(i[v]);a=[],i={},s={}}return{bind:l,update:c,dispose:A}}const Wv=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Pi=null;function Xv(){return Pi===null&&(Pi=new X_(Wv,16,16,as,Hn),Pi.name="DFG_LUT",Pi.minFilter=yn,Pi.magFilter=yn,Pi.wrapS=tr,Pi.wrapT=tr,Pi.generateMipmaps=!1,Pi.needsUpdate=!0),Pi}class Yv{constructor(e={}){const{canvas:t=M_(),context:n=null,depth:i=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:h=!1,outputBufferType:f=ni}=e;this.isWebGLRenderer=!0;let _;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");_=n.getContextAttributes().alpha}else _=a;const g=f,p=new Set([Uh,Nh,Ih]),m=new Set([ni,Gi,eo,to,Dh,Lh]),M=new Uint32Array(4),A=new Int32Array(4),v=new B;let y=null,E=null;const w=[],x=[];let T=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=ki,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const C=this;let L=!1,D=null,k=null,I=null,F=null;this._outputColorSpace=jn;let X=0,z=0,j=null,Y=-1,P=null;const J=new Nt,we=new Nt;let Ee=null;const Ye=new je(0);let We=0,Ke=t.width,$=t.height,te=1,me=null,Ve=null;const xe=new Nt(0,0,Ke,$),Le=new Nt(0,0,Ke,$);let Ne=!1;const Q=new zh;let re=!1,oe=!1;const N=new Dt,de=new B,Be=new Nt,Ue={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Ce=!1;function Ze(){return j===null?te:1}let U=n;function rt(b,O){return t.getContext(b,O)}let Ge,R,S,V,H,K,pe,ce,ee,ie,ve,Ie,Se,ge,he,ze,$e,q,_e,ne,Me,Te,se;try{const b={alpha:!0,depth:i,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Th}`),t.addEventListener("webglcontextlost",He,!1),t.addEventListener("webglcontextrestored",le,!1),t.addEventListener("webglcontextcreationerror",Xe,!1),U===null){const O="webgl2";if(U=rt(O,b),U===null)throw rt(O)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}ue()}catch(b){throw t.removeEventListener("webglcontextlost",He,!1),t.removeEventListener("webglcontextrestored",le,!1),t.removeEventListener("webglcontextcreationerror",Xe,!1),mt("WebGLRenderer: "+b.message),b}function ue(){Ge=new X2(U),Ge.init(),Me=new Fv(U,Ge),R=new q2(U,Ge,e,Me),S=new Uv(U,Ge),R.reversedDepthBuffer&&h&&S.buffers.depth.setReversed(!0),k=U.createFramebuffer(),I=U.createFramebuffer(),F=U.createFramebuffer(),V=new $2(U),H=new Mv,K=new qv(U,Ge,S,H,R,Me,V),pe=new W2(C),ce=new J1(U),Te=new N2(U,ce),ee=new Y2(U,ce,V,Te),ie=new J2(U,ee,ce,Te,V),q=new K2(U,R,K),he=new F2(H),ve=new Sv(C,pe,Ge,R,Te,he),Ie=new Hv(C,H),Se=new Tv,ge=new Rv(Ge),$e=new I2(C,pe,S,ie,_,l),ze=new Nv(C,ie,R),se=new Gv(U,V,R,S),_e=new U2(U,Ge,V),ne=new Z2(U,Ge,V),V.programs=ve.programs,C.capabilities=R,C.extensions=Ge,C.properties=H,C.renderLists=Se,C.shadowMap=ze,C.state=S,C.info=V}g!==ni&&(T=new j2(g,t.width,t.height,o,i,s));const ae=new kv(C,U);this.xr=ae,this.getContext=function(){return U},this.getContextAttributes=function(){return U.getContextAttributes()},this.forceContextLoss=function(){const b=Ge.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){const b=Ge.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return te},this.setPixelRatio=function(b){b!==void 0&&(te=b,this.setSize(Ke,$,!1))},this.getSize=function(b){return b.set(Ke,$)},this.setSize=function(b,O,Z=!0){if(ae.isPresenting){Je("WebGLRenderer: Can't change size while VR device is presenting.");return}Ke=b,$=O,t.width=Math.floor(b*te),t.height=Math.floor(O*te),Z===!0&&(t.style.width=b+"px",t.style.height=O+"px"),T!==null&&T.setSize(t.width,t.height),this.setViewport(0,0,b,O)},this.getDrawingBufferSize=function(b){return b.set(Ke*te,$*te).floor()},this.setDrawingBufferSize=function(b,O,Z){Ke=b,$=O,te=Z,t.width=Math.floor(b*Z),t.height=Math.floor(O*Z),this.setViewport(0,0,b,O)},this.setEffects=function(b){if(g===ni){mt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(b){for(let O=0;O<b.length;O++)if(b[O].isOutputPass===!0){Je("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}T.setEffects(b||[])},this.getCurrentViewport=function(b){return b.copy(J)},this.getViewport=function(b){return b.copy(xe)},this.setViewport=function(b,O,Z,G){b.isVector4?xe.set(b.x,b.y,b.z,b.w):xe.set(b,O,Z,G),S.viewport(J.copy(xe).multiplyScalar(te).round())},this.getScissor=function(b){return b.copy(Le)},this.setScissor=function(b,O,Z,G){b.isVector4?Le.set(b.x,b.y,b.z,b.w):Le.set(b,O,Z,G),S.scissor(we.copy(Le).multiplyScalar(te).round())},this.getScissorTest=function(){return Ne},this.setScissorTest=function(b){S.setScissorTest(Ne=b)},this.setOpaqueSort=function(b){me=b},this.setTransparentSort=function(b){Ve=b},this.getClearColor=function(b){return b.copy($e.getClearColor())},this.setClearColor=function(){$e.setClearColor(...arguments)},this.getClearAlpha=function(){return $e.getClearAlpha()},this.setClearAlpha=function(){$e.setClearAlpha(...arguments)},this.clear=function(b=!0,O=!0,Z=!0){let G=0;if(b){let W=!1;if(j!==null){const ye=j.texture.format;W=p.has(ye)}if(W){const ye=j.texture.type,Pe=m.has(ye),Ae=$e.getClearColor(),Fe=$e.getClearAlpha(),ke=Ae.r,tt=Ae.g,ut=Ae.b;Pe?(M[0]=ke,M[1]=tt,M[2]=ut,M[3]=Fe,U.clearBufferuiv(U.COLOR,0,M)):(A[0]=ke,A[1]=tt,A[2]=ut,A[3]=Fe,U.clearBufferiv(U.COLOR,0,A))}else G|=U.COLOR_BUFFER_BIT}O&&(G|=U.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),Z&&(G|=U.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),G!==0&&U.clear(G)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(b){b.setRenderer(this),D=b},this.dispose=function(){t.removeEventListener("webglcontextlost",He,!1),t.removeEventListener("webglcontextrestored",le,!1),t.removeEventListener("webglcontextcreationerror",Xe,!1),$e.dispose(),Se.dispose(),ge.dispose(),H.dispose(),pe.dispose(),ie.dispose(),Te.dispose(),se.dispose(),ve.dispose(),ae.dispose(),ae.removeEventListener("sessionstart",Ct),ae.removeEventListener("sessionend",St),ft.stop()};function He(b){b.preventDefault(),kf("WebGLRenderer: Context Lost."),L=!0}function le(){kf("WebGLRenderer: Context Restored."),L=!1;const b=V.autoReset,O=ze.enabled,Z=ze.autoUpdate,G=ze.needsUpdate,W=ze.type;ue(),V.autoReset=b,ze.enabled=O,ze.autoUpdate=Z,ze.needsUpdate=G,ze.type=W}function Xe(b){mt("WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function qe(b){const O=b.target;O.removeEventListener("dispose",qe),Qe(O)}function Qe(b){Wt(b),H.remove(b)}function Wt(b){const O=H.get(b).programs;O!==void 0&&(O.forEach(function(Z){ve.releaseProgram(Z)}),b.isShaderMaterial&&ve.releaseShaderCache(b))}this.renderBufferDirect=function(b,O,Z,G,W,ye){O===null&&(O=Ue);const Pe=W.isMesh&&W.matrixWorld.determinantAffine()<0,Ae=sn(b,O,Z,G,W);S.setMaterial(G,Pe);let Fe=Z.index,ke=1;if(G.wireframe===!0){if(Fe=ee.getWireframeAttribute(Z),Fe===void 0)return;ke=2}const tt=Z.drawRange,ut=Z.attributes.position;let Oe=tt.start*ke,_t=(tt.start+tt.count)*ke;ye!==null&&(Oe=Math.max(Oe,ye.start*ke),_t=Math.min(_t,(ye.start+ye.count)*ke)),Fe!==null?(Oe=Math.max(Oe,0),_t=Math.min(_t,Fe.count)):ut!=null&&(Oe=Math.max(Oe,0),_t=Math.min(_t,ut.count));const Yt=_t-Oe;if(Yt<0||Yt===1/0)return;Te.setup(W,G,Ae,Z,Fe);let Rt,Mt=_e;if(Fe!==null&&(Rt=ce.get(Fe),Mt=ne,Mt.setIndex(Rt)),W.isMesh)G.wireframe===!0?(S.setLineWidth(G.wireframeLinewidth*Ze()),Mt.setMode(U.LINES)):Mt.setMode(U.TRIANGLES);else if(W.isLine){let mn=G.linewidth;mn===void 0&&(mn=1),S.setLineWidth(mn*Ze()),W.isLineSegments?Mt.setMode(U.LINES):W.isLineLoop?Mt.setMode(U.LINE_LOOP):Mt.setMode(U.LINE_STRIP)}else W.isPoints?Mt.setMode(U.POINTS):W.isSprite&&Mt.setMode(U.TRIANGLES);if(W.isBatchedMesh)if(Ge.get("WEBGL_multi_draw"))Mt.renderMultiDraw(W._multiDrawStarts,W._multiDrawCounts,W._multiDrawCount);else{const mn=W._multiDrawStarts,Re=W._multiDrawCounts,An=W._multiDrawCount,pt=Fe?ce.get(Fe).bytesPerElement:1,fi=H.get(G).currentProgram.getUniforms();for(let Ci=0;Ci<An;Ci++)fi.setValue(U,"_gl_DrawID",Ci),Mt.render(mn[Ci]/pt,Re[Ci])}else if(W.isInstancedMesh)Mt.renderInstances(Oe,Yt,W.count);else if(Z.isInstancedBufferGeometry){const mn=Z._maxInstanceCount!==void 0?Z._maxInstanceCount:1/0,Re=Math.min(Z.instanceCount,mn);Mt.renderInstances(Oe,Yt,Re)}else Mt.render(Oe,Yt)};function st(b,O,Z,G){D!==null&&b.isNodeMaterial&&D.setObject(G,b),re===!0&&he.setState(b,Z,!1),b.transparent===!0&&b.side===Ni&&b.forceSinglePass===!1?(b.side=Vn,b.needsUpdate=!0,Ft(b,O,G),b.side=rs,b.needsUpdate=!0,Ft(b,O,G),b.side=Ni):Ft(b,O,G)}this.compile=function(b,O,Z=null){Z===null&&(Z=b),D!==null&&D.renderStart(b,O,Z),E=ge.get(Z),E.init(O),x.push(E),Z.traverseVisible(function(W){W.isLight&&W.layers.test(O.layers)&&(E.pushLight(W),W.castShadow&&E.pushShadow(W))}),b!==Z&&b.traverseVisible(function(W){W.isLight&&W.layers.test(O.layers)&&(E.pushLight(W),W.castShadow&&E.pushShadow(W))}),E.setupLights(),D!==null&&D.updateLights(E.state.lightsArray),oe=this.localClippingEnabled,re=he.init(this.clippingPlanes,oe),re===!0&&he.setGlobalState(this.clippingPlanes,O),D!==null&&ze.render(E.state.shadowsArray,Z,O);const G=new Set;return b.traverse(function(W){if(!(W.isMesh||W.isPoints||W.isLine||W.isSprite))return;const ye=W.material;if(ye)if(Array.isArray(ye))for(let Pe=0;Pe<ye.length;Pe++){const Ae=ye[Pe];st(Ae,Z,O,W),G.add(Ae)}else st(ye,Z,O,W),G.add(ye)}),E=x.pop(),D!==null&&D.renderEnd(),G},this.compileAsync=function(b,O,Z=null){const G=this.compile(b,O,Z);return new Promise(W=>{function ye(){if(G.forEach(function(Pe){const Fe=H.get(Pe).currentProgram;(Fe===void 0||Fe.isReady())&&G.delete(Pe)}),G.size===0){W(b);return}setTimeout(ye,10)}Ge.get("KHR_parallel_shader_compile")!==null?ye():setTimeout(ye,10)})};let At=null;function rn(b){At&&At(b)}function Ct(){ft.stop()}function St(){ft.start()}const ft=new r0;ft.setAnimationLoop(rn),typeof self<"u"&&ft.setContext(self),this.setAnimationLoop=function(b){At=b,ae.setAnimationLoop(b),b===null?ft.stop():ft.start()},ae.addEventListener("sessionstart",Ct),ae.addEventListener("sessionend",St),this.render=function(b,O){if(O!==void 0&&O.isCamera!==!0){mt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(L===!0)return;D!==null&&D.renderStart(b,O);const Z=ae.enabled===!0&&ae.isPresenting===!0,G=T!==null&&(j===null||Z)&&T.begin(C,j);if(b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),O.parent===null&&O.matrixWorldAutoUpdate===!0&&O.updateMatrixWorld(),ae.enabled===!0&&ae.isPresenting===!0&&(T===null||T.isCompositing()===!1)&&(ae.cameraAutoUpdate===!0&&ae.updateCamera(O),O=ae.getCamera()),b.isScene===!0&&b.onBeforeRender(C,b,O,j),E=ge.get(b,x.length),E.init(O),E.state.textureUnits=K.getTextureUnits(),x.push(E),N.multiplyMatrices(O.projectionMatrix,O.matrixWorldInverse),Q.setFromProjectionMatrix(N,Fi,O.reversedDepth),oe=this.localClippingEnabled,re=he.init(this.clippingPlanes,oe),y=Se.get(b,w.length),y.init(),w.push(y),ae.enabled===!0&&ae.isPresenting===!0){const Pe=C.xr.getDepthSensingMesh();Pe!==null&&bn(Pe,O,-1/0,C.sortObjects)}bn(b,O,0,C.sortObjects),y.finish(),D!==null&&D.updateLights(E.state.lightsArray),C.sortObjects===!0&&y.sort(me,Ve),Ce=ae.enabled===!1||ae.isPresenting===!1||ae.hasDepthSensing()===!1,Ce&&$e.addToRenderList(y,b),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),re===!0&&he.beginShadows();const W=E.state.shadowsArray;if(ze.render(W,b,O),re===!0&&he.endShadows(),(G&&T.hasRenderPass())===!1){const Pe=y.opaque,Ae=y.transmissive;if(E.setupLights(),O.isArrayCamera){const Fe=O.cameras;if(Ae.length>0)for(let ke=0,tt=Fe.length;ke<tt;ke++){const ut=Fe[ke];pn(Pe,Ae,b,ut)}Ce&&$e.render(b);for(let ke=0,tt=Fe.length;ke<tt;ke++){const ut=Fe[ke];Et(y,b,ut,ut.viewport)}}else Ae.length>0&&pn(Pe,Ae,b,O),Ce&&$e.render(b),Et(y,b,O)}j!==null&&z===0&&(K.updateMultisampleRenderTarget(j),K.updateRenderTargetMipmap(j)),G&&T.end(C),b.isScene===!0&&b.onAfterRender(C,b,O),Te.resetDefaultState(),Y=-1,P=null,x.pop(),x.length>0?(E=x[x.length-1],K.setTextureUnits(E.state.textureUnits),re===!0&&he.setGlobalState(C.clippingPlanes,E.state.camera)):E=null,w.pop(),w.length>0?y=w[w.length-1]:y=null,D!==null&&D.renderEnd()};function bn(b,O,Z,G){if(b.visible===!1)return;if(b.layers.test(O.layers)){if(b.isGroup)Z=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(O);else if(b.isLightProbeGrid)E.pushLightProbeGrid(b);else if(b.isLight)E.pushLight(b),b.castShadow&&E.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||b.intersectsFrustum(Q)){G&&Be.setFromMatrixPosition(b.matrixWorld).applyMatrix4(N);const Pe=ie.update(b),Ae=b.material;Ae.visible&&y.push(b,Pe,Ae,Z,Be.z,null,O)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||b.intersectsFrustum(Q))){const Pe=ie.update(b),Ae=b.material;if(G&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),Be.copy(b.boundingSphere.center)):(Pe.boundingSphere===null&&Pe.computeBoundingSphere(),Be.copy(Pe.boundingSphere.center)),Be.applyMatrix4(b.matrixWorld).applyMatrix4(N)),Array.isArray(Ae)){const Fe=Pe.groups;for(let ke=0,tt=Fe.length;ke<tt;ke++){const ut=Fe[ke],Oe=Ae[ut.materialIndex];Oe&&Oe.visible&&y.push(b,Pe,Oe,Z,Be.z,ut,O)}}else Ae.visible&&y.push(b,Pe,Ae,Z,Be.z,null,O)}}const ye=b.children;for(let Pe=0,Ae=ye.length;Pe<Ae;Pe++)bn(ye[Pe],O,Z,G)}function Et(b,O,Z,G){const{opaque:W,transmissive:ye,transparent:Pe}=b;E.setupLightsView(Z),re===!0&&he.setGlobalState(C.clippingPlanes,Z),G&&S.viewport(J.copy(G)),W.length>0&&wn(W,O,Z),ye.length>0&&wn(ye,O,Z),Pe.length>0&&wn(Pe,O,Z),S.buffers.depth.setTest(!0),S.buffers.depth.setMask(!0),S.buffers.color.setMask(!0),S.setPolygonOffset(!1)}function pn(b,O,Z,G){if((Z.isScene===!0?Z.overrideMaterial:null)!==null)return;if(E.state.transmissionRenderTarget[G.id]===void 0){const Oe=Ge.has("EXT_color_buffer_half_float")||Ge.has("EXT_color_buffer_float");E.state.transmissionRenderTarget[G.id]=new Fn(1,1,{generateMipmaps:!0,type:Oe?Hn:ni,minFilter:Wr,samples:Math.max(4,R.samples),stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:ht.workingColorSpace})}const ye=E.state.transmissionRenderTarget[G.id],Pe=G.viewport||J;ye.setSize(Pe.z*C.transmissionResolutionScale,Pe.w*C.transmissionResolutionScale);const Ae=C.getRenderTarget(),Fe=C.getActiveCubeFace(),ke=C.getActiveMipmapLevel();C.setRenderTarget(ye),C.getClearColor(Ye),We=C.getClearAlpha(),We<1&&C.setClearColor(16777215,.5),C.clear(),Ce&&$e.render(Z);const tt=C.toneMapping;C.toneMapping=ki;const ut=G.viewport;if(G.viewport!==void 0&&(G.viewport=void 0),E.setupLightsView(G),re===!0&&he.setGlobalState(C.clippingPlanes,G),wn(b,Z,G),K.updateMultisampleRenderTarget(ye),K.updateRenderTargetMipmap(ye),Ge.has("WEBGL_multisampled_render_to_texture")===!1){let Oe=!1;for(let _t=0,Yt=O.length;_t<Yt;_t++){const Rt=O[_t],{object:Mt,geometry:mn,material:Re,group:An}=Rt;if(Re.side===Ni&&Mt.layers.test(G.layers)){const pt=Re.side;Re.side=Vn,Re.needsUpdate=!0,Xt(Mt,Z,G,mn,Re,An),Re.side=pt,Re.needsUpdate=!0,Oe=!0}}Oe===!0&&(K.updateMultisampleRenderTarget(ye),K.updateRenderTargetMipmap(ye))}C.setRenderTarget(Ae,Fe,ke),C.setClearColor(Ye,We),ut!==void 0&&(G.viewport=ut),C.toneMapping=tt}function wn(b,O,Z){const G=O.isScene===!0?O.overrideMaterial:null;for(let W=0,ye=b.length;W<ye;W++){const Pe=b[W],{object:Ae,geometry:Fe,group:ke}=Pe;let tt=Pe.material;tt.allowOverride===!0&&G!==null&&(tt=G),Ae.layers.test(Z.layers)&&Xt(Ae,O,Z,Fe,tt,ke)}}function Xt(b,O,Z,G,W,ye){D!==null&&W.isNodeMaterial&&D.setObject(b,W),b.onBeforeRender(C,O,Z,G,W,ye),b.modelViewMatrix.multiplyMatrices(Z.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),W.onBeforeRender(C,O,Z,G,b,ye),W.transparent===!0&&W.side===Ni&&W.forceSinglePass===!1?(W.side=Vn,W.needsUpdate=!0,C.renderBufferDirect(Z,O,G,W,b,ye),W.side=rs,W.needsUpdate=!0,C.renderBufferDirect(Z,O,G,W,b,ye),W.side=Ni):C.renderBufferDirect(Z,O,G,W,b,ye),b.onAfterRender(C,O,Z,G,W,ye)}function Ft(b,O,Z){O.isScene!==!0&&(O=Ue);const G=H.get(b),W=E.state.lights,ye=E.state.shadowsArray,Pe=W.state.version,Ae=ve.getParameters(b,W.state,ye,O,Z,E.state.lightProbeGridArray),Fe=ve.getProgramCacheKey(Ae);let ke=G.programs;G.environment=b.isMeshStandardMaterial||b.isMeshLambertMaterial||b.isMeshPhongMaterial?O.environment:null,G.fog=O.fog;const tt=b.isMeshStandardMaterial||b.isMeshLambertMaterial&&!b.envMap||b.isMeshPhongMaterial&&!b.envMap;G.envMap=pe.get(b.envMap||G.environment,tt),G.envMapRotation=G.environment!==null&&b.envMap===null?O.environmentRotation:b.envMapRotation,ke===void 0&&(b.addEventListener("dispose",qe),ke=new Map,G.programs=ke);let ut=ke.get(Fe);if(ut!==void 0){if(G.currentProgram===ut&&G.lightsStateVersion===Pe)return Ai(b,Ae),ut}else Ae.uniforms=ve.getUniforms(b),D!==null&&b.isNodeMaterial&&D.build(b,Z,Ae),b.onBeforeCompile(Ae,C),ut=ve.acquireProgram(Ae,Fe),ke.set(Fe,ut),G.uniforms=Ae.uniforms;const Oe=G.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(Oe.clippingPlanes=he.uniform),Ai(b,Ae),G.needsLights=hi(b),G.lightsStateVersion=Pe,G.needsLights&&(Oe.ambientLightColor.value=W.state.ambient,Oe.lightProbe.value=W.state.probe,Oe.sunLights.value=W.state.sun,Oe.sunLightShadows.value=W.state.sunShadow,Oe.directionalLights.value=W.state.directional,Oe.directionalLightShadows.value=W.state.directionalShadow,Oe.spotLights.value=W.state.spot,Oe.spotLightShadows.value=W.state.spotShadow,Oe.rectAreaLights.value=W.state.rectArea,Oe.ltc_1.value=W.state.rectAreaLTC1,Oe.ltc_2.value=W.state.rectAreaLTC2,Oe.pointLights.value=W.state.point,Oe.pointLightShadows.value=W.state.pointShadow,Oe.hemisphereLights.value=W.state.hemi,Oe.sunShadowMatrix.value=W.state.sunShadowMatrix,Oe.sunShadowCascade.value=W.state.sunShadowCascade,Oe.directionalShadowMatrix.value=W.state.directionalShadowMatrix,Oe.spotLightMatrix.value=W.state.spotLightMatrix,Oe.spotLightMap.value=W.state.spotLightMap,Oe.pointShadowMatrix.value=W.state.pointShadowMatrix),G.lightProbeGrid=E.state.lightProbeGridArray.length>0,G.currentProgram=ut,G.uniformsList=null,ut}function Jt(b){if(b.uniformsList===null){const O=b.currentProgram.getUniforms();b.uniformsList=xl.seqWithValue(O.seq,b.uniforms)}return b.uniformsList}function Ai(b,O){const Z=H.get(b);Z.outputColorSpace=O.outputColorSpace,Z.batching=O.batching,Z.batchingColor=O.batchingColor,Z.instancing=O.instancing,Z.instancingColor=O.instancingColor,Z.instancingMorph=O.instancingMorph,Z.skinning=O.skinning,Z.morphTargets=O.morphTargets,Z.morphNormals=O.morphNormals,Z.morphColors=O.morphColors,Z.morphTargetsCount=O.morphTargetsCount,Z.numClippingPlanes=O.numClippingPlanes,Z.numIntersection=O.numClipIntersection,Z.vertexAlphas=O.vertexAlphas,Z.vertexTangents=O.vertexTangents,Z.toneMapping=O.toneMapping}function ms(b,O){if(b.length===0)return null;if(b.length===1)return b[0].texture!==null?b[0]:null;v.setFromMatrixPosition(O.matrixWorld);for(let Z=0,G=b.length;Z<G;Z++){const W=b[Z];if(W.texture!==null&&W.boundingBox.containsPoint(v))return W}return null}function sn(b,O,Z,G,W){O.isScene!==!0&&(O=Ue),K.resetTextureUnits();const ye=O.fog,Pe=G.isMeshStandardMaterial||G.isMeshLambertMaterial||G.isMeshPhongMaterial?O.environment:null,Ae=j===null?C.outputColorSpace:j.isXRRenderTarget===!0?j.texture.colorSpace:ht.workingColorSpace,Fe=G.isMeshStandardMaterial||G.isMeshLambertMaterial&&!G.envMap||G.isMeshPhongMaterial&&!G.envMap,ke=pe.get(G.envMap||Pe,Fe),tt=G.vertexColors===!0&&!!Z.attributes.color&&Z.attributes.color.itemSize===4,ut=!!Z.attributes.tangent&&(!!G.normalMap||G.anisotropy>0),Oe=!!Z.morphAttributes.position,_t=!!Z.morphAttributes.normal,Yt=!!Z.morphAttributes.color;let Rt=ki;G.toneMapped&&(j===null||j.isXRRenderTarget===!0)&&(Rt=C.toneMapping);const Mt=Z.morphAttributes.position||Z.morphAttributes.normal||Z.morphAttributes.color,mn=Mt!==void 0?Mt.length:0,Re=H.get(G),An=E.state.lights;if(re===!0&&(oe===!0||b!==P)){const bt=b===P&&G.id===Y;he.setState(G,b,bt)}let pt=!1;G.version===Re.__version?(Re.needsLights&&Re.lightsStateVersion!==An.state.version||Re.outputColorSpace!==Ae||W.isBatchedMesh&&Re.batching===!1||!W.isBatchedMesh&&Re.batching===!0||W.isBatchedMesh&&Re.batchingColor===!0&&W._colorsTexture===null||W.isBatchedMesh&&Re.batchingColor===!1&&W._colorsTexture!==null||W.isInstancedMesh&&Re.instancing===!1||!W.isInstancedMesh&&Re.instancing===!0||W.isSkinnedMesh&&Re.skinning===!1||!W.isSkinnedMesh&&Re.skinning===!0||W.isInstancedMesh&&Re.instancingColor===!0&&W.instanceColor===null||W.isInstancedMesh&&Re.instancingColor===!1&&W.instanceColor!==null||W.isInstancedMesh&&Re.instancingMorph===!0&&W.morphTexture===null||W.isInstancedMesh&&Re.instancingMorph===!1&&W.morphTexture!==null||Re.envMap!==ke||G.fog===!0&&Re.fog!==ye||Re.numClippingPlanes!==void 0&&(Re.numClippingPlanes!==he.numPlanes||Re.numIntersection!==he.numIntersection)||Re.vertexAlphas!==tt||Re.vertexTangents!==ut||Re.morphTargets!==Oe||Re.morphNormals!==_t||Re.morphColors!==Yt||Re.toneMapping!==Rt||Re.morphTargetsCount!==mn||!!Re.lightProbeGrid!=E.state.lightProbeGridArray.length>0)&&(pt=!0):(pt=!0,Re.__version=G.version);let fi=Re.currentProgram;pt===!0&&(fi=Ft(G,O,W),D&&G.isNodeMaterial&&D.onUpdateProgram(G,fi,Re));let Ci=!1,cr=!1,gs=!1;const vt=fi.getUniforms(),kt=Re.uniforms;if(S.useProgram(fi.program)&&(Ci=!0,cr=!0,gs=!0),G.id!==Y&&(Y=G.id,cr=!0),Re.needsLights){const bt=ms(E.state.lightProbeGridArray,W);Re.lightProbeGrid!==bt&&(Re.lightProbeGrid=bt,cr=!0)}if(Ci||P!==b){S.buffers.depth.getReversed()&&b.reversedDepth!==!0&&(b._reversedDepth=!0,b.updateProjectionMatrix()),vt.setValue(U,"projectionMatrix",b.projectionMatrix),vt.setValue(U,"viewMatrix",b.matrixWorldInverse);const hr=vt.map.cameraPosition;hr!==void 0&&hr.setValue(U,de.setFromMatrixPosition(b.matrixWorld)),R.logarithmicDepthBuffer&&vt.setValue(U,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(G.isMeshPhongMaterial||G.isMeshToonMaterial||G.isMeshLambertMaterial||G.isMeshBasicMaterial||G.isMeshStandardMaterial||G.isShaderMaterial)&&vt.setValue(U,"isOrthographic",b.isOrthographicCamera===!0),P!==b&&(P=b,cr=!0,gs=!0)}if(Re.needsLights&&(An.state.sunShadowMap.length>0&&vt.setValue(U,"sunShadowMap",An.state.sunShadowMap,K),An.state.directionalShadowMap.length>0&&vt.setValue(U,"directionalShadowMap",An.state.directionalShadowMap,K),An.state.spotShadowMap.length>0&&vt.setValue(U,"spotShadowMap",An.state.spotShadowMap,K),An.state.pointShadowMap.length>0&&vt.setValue(U,"pointShadowMap",An.state.pointShadowMap,K)),W.isSkinnedMesh){vt.setOptional(U,W,"bindMatrix"),vt.setOptional(U,W,"bindMatrixInverse");const bt=W.skeleton;bt&&(bt.boneTexture===null&&bt.computeBoneTexture(),vt.setValue(U,"boneTexture",bt.boneTexture,K))}W.isBatchedMesh&&(vt.setOptional(U,W,"batchingTexture"),vt.setValue(U,"batchingTexture",W._matricesTexture,K),vt.setOptional(U,W,"batchingIdTexture"),vt.setValue(U,"batchingIdTexture",W._indirectTexture,K),vt.setOptional(U,W,"batchingColorTexture"),W._colorsTexture!==null&&vt.setValue(U,"batchingColorTexture",W._colorsTexture,K));const ur=Z.morphAttributes;if((ur.position!==void 0||ur.normal!==void 0||ur.color!==void 0)&&q.update(W,Z,fi),(cr||Re.receiveShadow!==W.receiveShadow)&&(Re.receiveShadow=W.receiveShadow,vt.setValue(U,"receiveShadow",W.receiveShadow)),(G.isMeshStandardMaterial||G.isMeshLambertMaterial||G.isMeshPhongMaterial)&&G.envMap===null&&O.environment!==null&&(kt.envMapIntensity.value=O.environmentIntensity),kt.dfgLUT!==void 0&&(kt.dfgLUT.value=Xv()),cr){if(vt.setValue(U,"toneMappingExposure",C.toneMappingExposure),Re.needsLights&&zt(kt,gs),ye&&G.fog===!0&&Ie.refreshFogUniforms(kt,ye),Ie.refreshMaterialUniforms(kt,G,te,$,E.state.transmissionRenderTarget[b.id]),Re.needsLights&&Re.lightProbeGrid){const bt=Re.lightProbeGrid;kt.probesSH.value=bt.texture,kt.probesMin.value.copy(bt.boundingBox.min),kt.probesMax.value.copy(bt.boundingBox.max),kt.probesResolution.value.copy(bt.resolution)}xl.upload(U,Jt(Re),kt,K)}if(G.isShaderMaterial&&G.uniformsNeedUpdate===!0&&(xl.upload(U,Jt(Re),kt,K),G.uniformsNeedUpdate=!1),G.isSpriteMaterial&&vt.setValue(U,"center",W.center),vt.setValue(U,"modelViewMatrix",W.modelViewMatrix),vt.setValue(U,"normalMatrix",W.normalMatrix),vt.setValue(U,"modelMatrix",W.matrixWorld),G.uniformsGroups!==void 0){const bt=G.uniformsGroups;for(let hr=0,xs=bt.length;hr<xs;hr++){const Uf=bt[hr];se.update(Uf,fi),se.bind(Uf,fi)}}return fi}function zt(b,O){b.ambientLightColor.needsUpdate=O,b.lightProbe.needsUpdate=O,b.sunLights.needsUpdate=O,b.sunLightShadows.needsUpdate=O,b.directionalLights.needsUpdate=O,b.directionalLightShadows.needsUpdate=O,b.pointLights.needsUpdate=O,b.pointLightShadows.needsUpdate=O,b.spotLights.needsUpdate=O,b.spotLightShadows.needsUpdate=O,b.rectAreaLights.needsUpdate=O,b.hemisphereLights.needsUpdate=O}function hi(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return X},this.getActiveMipmapLevel=function(){return z},this.getRenderTarget=function(){return j},this.setRenderTargetTextures=function(b,O,Z){const G=H.get(b);G.__autoAllocateDepthBuffer=b.resolveDepthBuffer===!1,G.__autoAllocateDepthBuffer===!1&&(G.__useRenderToTexture=!1),H.get(b.texture).__webglTexture=O,H.get(b.depthTexture).__webglTexture=G.__autoAllocateDepthBuffer?void 0:Z,G.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(b,O){const Z=H.get(b);Z.__webglFramebuffer=O,Z.__useDefaultFramebuffer=O===void 0},this.setRenderTarget=function(b,O=0,Z=0){j=b,X=O,z=Z;let G=null,W=!1,ye=!1;if(b){const Ae=H.get(b);if(Ae.__useDefaultFramebuffer!==void 0){S.bindFramebuffer(U.FRAMEBUFFER,Ae.__webglFramebuffer),J.copy(b.viewport),we.copy(b.scissor),Ee=b.scissorTest,S.viewport(J),S.scissor(we),S.setScissorTest(Ee),Y=-1;return}else if(Ae.__webglFramebuffer===void 0)K.setupRenderTarget(b);else if(Ae.__hasExternalTextures)K.rebindTextures(b,H.get(b.texture).__webglTexture,H.get(b.depthTexture).__webglTexture);else if(b.depthBuffer){const tt=b.depthTexture;if(Ae.__boundDepthTexture!==tt){if(tt!==null&&H.has(tt)&&(b.width!==tt.image.width||b.height!==tt.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");K.setupDepthRenderbuffer(b)}}const Fe=b.texture;(Fe.isData3DTexture||Fe.isDataArrayTexture||Fe.isCompressedArrayTexture)&&(ye=!0);const ke=H.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(ke[O])?G=ke[O][Z]:G=ke[O],W=!0):b.samples>0&&K.useMultisampledRTT(b)===!1?G=H.get(b).__webglMultisampledFramebuffer:Array.isArray(ke)?G=ke[Z]:G=ke,J.copy(b.viewport),we.copy(b.scissor),Ee=b.scissorTest}else J.copy(xe).multiplyScalar(te).floor(),we.copy(Le).multiplyScalar(te).floor(),Ee=Ne;if(Z!==0&&(G=k),S.bindFramebuffer(U.FRAMEBUFFER,G)&&S.drawBuffers(b,G),S.viewport(J),S.scissor(we),S.setScissorTest(Ee),W){const Ae=H.get(b.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_CUBE_MAP_POSITIVE_X+O,Ae.__webglTexture,Z)}else if(ye){const Ae=O;for(let Fe=0;Fe<b.textures.length;Fe++){const ke=H.get(b.textures[Fe]);U.framebufferTextureLayer(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0+Fe,ke.__webglTexture,Z,Ae)}}else if(b!==null&&Z!==0){const Ae=H.get(b.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,Ae.__webglTexture,Z)}Y=-1};function _s(b){const O=H.get(b);return(O.__readFormat!==b.format||O.__readType!==b.type)&&(O.__readFormat=b.format,O.__readType=b.type,O.__formatReadable=R.textureFormatReadable(b.format),O.__typeReadable=R.textureTypeReadable(b.type)),O}this.readRenderTargetPixels=function(b,O,Z,G,W,ye,Pe,Ae=0){if(!(b&&b.isWebGLRenderTarget)){mt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Fe=H.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&Pe!==void 0&&(Fe=Fe[Pe]),Fe){S.bindFramebuffer(U.FRAMEBUFFER,Fe);try{const ke=b.textures[Ae],tt=ke.format,ut=ke.type;b.textures.length>1&&U.readBuffer(U.COLOR_ATTACHMENT0+Ae);const Oe=_s(ke);if(Oe.__formatReadable===!1){mt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Oe.__typeReadable===!1){mt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}O>=0&&O<=b.width-G&&Z>=0&&Z<=b.height-W&&U.readPixels(O,Z,G,W,Me.convert(tt),Me.convert(ut),ye)}finally{const ke=j!==null?H.get(j).__webglFramebuffer:null;S.bindFramebuffer(U.FRAMEBUFFER,ke)}}},this.readRenderTargetPixelsAsync=async function(b,O,Z,G,W,ye,Pe,Ae=0){if(!(b&&b.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Fe=H.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&Pe!==void 0&&(Fe=Fe[Pe]),Fe)if(O>=0&&O<=b.width-G&&Z>=0&&Z<=b.height-W){S.bindFramebuffer(U.FRAMEBUFFER,Fe);const ke=b.textures[Ae],tt=ke.format,ut=ke.type;b.textures.length>1&&U.readBuffer(U.COLOR_ATTACHMENT0+Ae);const Oe=_s(ke);if(Oe.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Oe.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const _t=U.createBuffer();U.bindBuffer(U.PIXEL_PACK_BUFFER,_t),U.bufferData(U.PIXEL_PACK_BUFFER,ye.byteLength,U.STREAM_READ),U.readPixels(O,Z,G,W,Me.convert(tt),Me.convert(ut),0),U.bindBuffer(U.PIXEL_PACK_BUFFER,null);const Yt=j!==null?H.get(j).__webglFramebuffer:null;S.bindFramebuffer(U.FRAMEBUFFER,Yt);const Rt=U.fenceSync(U.SYNC_GPU_COMMANDS_COMPLETE,0);return U.flush(),await y_(U,Rt,4),U.bindBuffer(U.PIXEL_PACK_BUFFER,_t),U.getBufferSubData(U.PIXEL_PACK_BUFFER,0,ye),U.bindBuffer(U.PIXEL_PACK_BUFFER,null),U.deleteBuffer(_t),U.deleteSync(Rt),ye}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(b,O=null,Z=0){const G=Math.pow(2,-Z),W=Math.floor(b.image.width*G),ye=Math.floor(b.image.height*G),Pe=O!==null?O.x:0,Ae=O!==null?O.y:0;K.setTexture2D(b,0),U.copyTexSubImage2D(U.TEXTURE_2D,Z,0,0,Pe,Ae,W,ye),S.unbindTexture()},this.copyTextureToTexture=function(b,O,Z=null,G=null,W=0,ye=0){let Pe,Ae,Fe,ke,tt,ut,Oe,_t,Yt;const Rt=b.isCompressedTexture?b.mipmaps[ye]:b.image;if(Z!==null)Pe=Z.max.x-Z.min.x,Ae=Z.max.y-Z.min.y,Fe=Z.isBox3?Z.max.z-Z.min.z:1,ke=Z.min.x,tt=Z.min.y,ut=Z.isBox3?Z.min.z:0;else{const kt=Math.pow(2,-W);Pe=Math.floor(Rt.width*kt),Ae=Math.floor(Rt.height*kt),b.isDataArrayTexture?Fe=Rt.depth:b.isData3DTexture?Fe=Math.floor(Rt.depth*kt):Fe=1,ke=0,tt=0,ut=0}G!==null?(Oe=G.x,_t=G.y,Yt=G.z):(Oe=0,_t=0,Yt=0);const Mt=Me.convert(O.format),mn=Me.convert(O.type);let Re;O.isData3DTexture?(K.setTexture3D(O,0),Re=U.TEXTURE_3D):O.isDataArrayTexture||O.isCompressedArrayTexture?(K.setTexture2DArray(O,0),Re=U.TEXTURE_2D_ARRAY):(K.setTexture2D(O,0),Re=U.TEXTURE_2D),S.activeTexture(U.TEXTURE0),S.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,O.flipY),S.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,O.premultiplyAlpha),S.pixelStorei(U.UNPACK_ALIGNMENT,O.unpackAlignment);const An=S.getParameter(U.UNPACK_ROW_LENGTH),pt=S.getParameter(U.UNPACK_IMAGE_HEIGHT),fi=S.getParameter(U.UNPACK_SKIP_PIXELS),Ci=S.getParameter(U.UNPACK_SKIP_ROWS),cr=S.getParameter(U.UNPACK_SKIP_IMAGES);S.pixelStorei(U.UNPACK_ROW_LENGTH,Rt.width),S.pixelStorei(U.UNPACK_IMAGE_HEIGHT,Rt.height),S.pixelStorei(U.UNPACK_SKIP_PIXELS,ke),S.pixelStorei(U.UNPACK_SKIP_ROWS,tt),S.pixelStorei(U.UNPACK_SKIP_IMAGES,ut);const gs=b.isDataArrayTexture||b.isData3DTexture,vt=O.isDataArrayTexture||O.isData3DTexture;if(b.isDepthTexture){const kt=H.get(b),ur=H.get(O),bt=H.get(kt.__renderTarget),hr=H.get(ur.__renderTarget);S.bindFramebuffer(U.READ_FRAMEBUFFER,bt.__webglFramebuffer),S.bindFramebuffer(U.DRAW_FRAMEBUFFER,hr.__webglFramebuffer);for(let xs=0;xs<Fe;xs++)gs&&(U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,H.get(b).__webglTexture,W,ut+xs),U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,H.get(O).__webglTexture,ye,Yt+xs)),U.blitFramebuffer(ke,tt,Pe,Ae,Oe,_t,Pe,Ae,U.DEPTH_BUFFER_BIT,U.NEAREST);S.bindFramebuffer(U.READ_FRAMEBUFFER,null),S.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else if(W!==0||b.isRenderTargetTexture||H.has(b)){const kt=H.get(b),ur=H.get(O);S.bindFramebuffer(U.READ_FRAMEBUFFER,I),S.bindFramebuffer(U.DRAW_FRAMEBUFFER,F);for(let bt=0;bt<Fe;bt++)gs?U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,kt.__webglTexture,W,ut+bt):U.framebufferTexture2D(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,kt.__webglTexture,W),vt?U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,ur.__webglTexture,ye,Yt+bt):U.framebufferTexture2D(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,ur.__webglTexture,ye),W!==0?U.blitFramebuffer(ke,tt,Pe,Ae,Oe,_t,Pe,Ae,U.COLOR_BUFFER_BIT,U.NEAREST):vt?U.copyTexSubImage3D(Re,ye,Oe,_t,Yt+bt,ke,tt,Pe,Ae):U.copyTexSubImage2D(Re,ye,Oe,_t,ke,tt,Pe,Ae);S.bindFramebuffer(U.READ_FRAMEBUFFER,null),S.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else vt?b.isDataTexture||b.isData3DTexture?U.texSubImage3D(Re,ye,Oe,_t,Yt,Pe,Ae,Fe,Mt,mn,Rt.data):O.isCompressedArrayTexture?U.compressedTexSubImage3D(Re,ye,Oe,_t,Yt,Pe,Ae,Fe,Mt,Rt.data):U.texSubImage3D(Re,ye,Oe,_t,Yt,Pe,Ae,Fe,Mt,mn,Rt):b.isDataTexture?U.texSubImage2D(U.TEXTURE_2D,ye,Oe,_t,Pe,Ae,Mt,mn,Rt.data):b.isCompressedTexture?U.compressedTexSubImage2D(U.TEXTURE_2D,ye,Oe,_t,Rt.width,Rt.height,Mt,Rt.data):U.texSubImage2D(U.TEXTURE_2D,ye,Oe,_t,Pe,Ae,Mt,mn,Rt);S.pixelStorei(U.UNPACK_ROW_LENGTH,An),S.pixelStorei(U.UNPACK_IMAGE_HEIGHT,pt),S.pixelStorei(U.UNPACK_SKIP_PIXELS,fi),S.pixelStorei(U.UNPACK_SKIP_ROWS,Ci),S.pixelStorei(U.UNPACK_SKIP_IMAGES,cr),ye===0&&O.generateMipmaps&&U.generateMipmap(Re),S.unbindTexture()},this.initRenderTarget=function(b){H.get(b).__webglFramebuffer===void 0&&K.setupRenderTarget(b)},this.initTexture=function(b){b.isCubeTexture?K.setTextureCube(b,0):b.isData3DTexture?K.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?K.setTexture2DArray(b,0):K.setTexture2D(b,0),S.unbindTexture()},this.resetState=function(){X=0,z=0,j=null,S.reset(),Te.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Fi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=ht._getDrawingBufferColorSpace(e),t.unpackColorSpace=ht._getUnpackColorSpace()}}class f0{constructor(e){this.isFont=!0,this.type="Font",this.data=e}generateShapes(e,t=100,n="ltr"){const i=[],s=Zv(e,t,this.data,n);for(let a=0,o=s.length;a<o;a++)i.push(...s[a].toShapes());return i}}function Zv(r,e,t,n){const i=Array.from(r),s=e/t.resolution,a=(t.boundingBox.yMax-t.boundingBox.yMin+t.underlineThickness)*s,o=[];let l=0,c=0;(n=="rtl"||n=="tb")&&i.reverse();for(let u=0;u<i.length;u++){const d=i[u];if(d===`
`)l=0,c-=a;else{const h=$v(d,s,l,c,t);n=="tb"?(l=0,c+=t.ascender*s):l+=h.offsetX,o.push(h.path)}}return o}function $v(r,e,t,n,i){const s=i.glyphs[r]||i.glyphs["?"];if(!s){console.error('THREE.Font: character "'+r+'" does not exists in font family '+i.familyName+".");return}const a=new $1;let o,l,c,u,d,h,f,_;if(s.o){const g=s._cachedOutline||(s._cachedOutline=s.o.split(" "));for(let p=0,m=g.length;p<m;)switch(g[p++]){case"m":o=g[p++]*e+t,l=g[p++]*e+n,a.moveTo(o,l);break;case"l":o=g[p++]*e+t,l=g[p++]*e+n,a.lineTo(o,l);break;case"q":c=g[p++]*e+t,u=g[p++]*e+n,d=g[p++]*e+t,h=g[p++]*e+n,a.quadraticCurveTo(d,h,c,u);break;case"b":c=g[p++]*e+t,u=g[p++]*e+n,d=g[p++]*e+t,h=g[p++]*e+n,f=g[p++]*e+t,_=g[p++]*e+n,a.bezierCurveTo(d,h,f,_,c,u);break}}return{offsetX:s.ha*e,path:a}}class Zh extends Gh{constructor(e,t={}){const n=t.font;if(n===void 0)super();else{const i=n.generateShapes(e,t.size,t.direction);t.depth===void 0&&(t.depth=50),t.bevelThickness===void 0&&(t.bevelThickness=10),t.bevelSize===void 0&&(t.bevelSize=8),t.bevelEnabled===void 0&&(t.bevelEnabled=!1),super(i,t)}this.type="TextGeometry"}toJSON(){return super.toJSON()}static fromJSON(e){const t=e.options;return t.font=new f0(t.font.data),new Zh(t.text,t)}}const vl={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};class da{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const Kv=new ec(-1,1,1,-1,0,1);class Jv extends En{constructor(){super(),this.setAttribute("position",new Bt([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new Bt([0,2,0,0,2,0],2))}}const Qv=new Jv;class $h{constructor(e){this._mesh=new en(Qv,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,Kv)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}class jv extends da{constructor(e,t="tDiffuse"){super(),this.textureID=t,this.uniforms=null,this.material=null,e instanceof cn?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=oo.clone(e.uniforms),this.material=new cn({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this._fsQuad=new $h(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this._fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}}class zd extends da{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){const i=e.getContext(),s=e.state;s.buffers.color.setMask(!1),s.buffers.depth.setMask(!1),s.buffers.color.setLocked(!0),s.buffers.depth.setLocked(!0);let a,o;this.inverse?(a=0,o=1):(a=1,o=0),s.buffers.stencil.setTest(!0),s.buffers.stencil.setOp(i.REPLACE,i.REPLACE,i.REPLACE),s.buffers.stencil.setFunc(i.ALWAYS,a,4294967295),s.buffers.stencil.setClear(o),s.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),s.buffers.color.setLocked(!1),s.buffers.depth.setLocked(!1),s.buffers.color.setMask(!0),s.buffers.depth.setMask(!0),s.buffers.stencil.setLocked(!1),s.buffers.stencil.setFunc(i.EQUAL,1,4294967295),s.buffers.stencil.setOp(i.KEEP,i.KEEP,i.KEEP),s.buffers.stencil.setLocked(!0)}}class eS extends da{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class tS{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){const n=e.getSize(new fe);this._width=n.width,this._height=n.height,t=new Fn(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:Hn}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new jv(vl),this.copyPass.material.blending=zi,this.timer=new W1}swapBuffers(){const e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){const t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){this.timer.update(),e===void 0&&(e=this.timer.getDelta());const t=this.renderer.getRenderTarget();let n=!1;for(let i=0,s=this.passes.length;i<s;i++){const a=this.passes[i];if(a.enabled!==!1){if(a.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(i),a.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),a.needsSwap){if(n){const o=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(o.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(o.EQUAL,1,4294967295)}this.swapBuffers()}zd!==void 0&&(a instanceof zd?n=!0:a instanceof eS&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){const t=this.renderer.getSize(new fe);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;const n=this._width*this._pixelRatio,i=this._height*this._pixelRatio;this.renderTarget1.setSize(n,i),this.renderTarget2.setSize(n,i);for(let s=0;s<this.passes.length;s++)this.passes[s].setSize(n,i)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class nS extends da{constructor(e,t,n=null,i=null,s=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=i,this.clearAlpha=s,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this.isRenderPass=!0,this._oldClearColor=new je}render(e,t,n){const i=e.autoClear;e.autoClear=!1;let s,a;this.overrideMaterial!==null&&(a=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(s=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(s),this.overrideMaterial!==null&&(this.scene.overrideMaterial=a),e.autoClear=i}}const iS={uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new je(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};class ta extends da{constructor(e,t=1,n,i){super(),this.strength=t,this.radius=n,this.threshold=i,this.resolution=e!==void 0?new fe(e.x,e.y):new fe(256,256),this.clearColor=new je(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let s=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);this.renderTargetBright=new Fn(s,a,{type:Hn,depthBuffer:!1}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let u=0;u<this.nMips;u++){const d=new Fn(s,a,{type:Hn,depthBuffer:!1});d.texture.name="UnrealBloomPass.h"+u,d.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(d);const h=new Fn(s,a,{type:Hn,depthBuffer:!1});h.texture.name="UnrealBloomPass.v"+u,h.texture.generateMipmaps=!1,this.renderTargetsVertical.push(h),s=Math.round(s/2),a=Math.round(a/2)}const o=iS;this.highPassUniforms=oo.clone(o.uniforms),this.highPassUniforms.luminosityThreshold.value=i,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new cn({uniforms:this.highPassUniforms,vertexShader:o.vertexShader,fragmentShader:o.fragmentShader}),this.separableBlurMaterials=[];const l=[6,10,14,18,22];s=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);for(let u=0;u<this.nMips;u++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(l[u])),this.separableBlurMaterials[u].uniforms.invSize.value=new fe(1/s,1/a),s=Math.round(s/2),a=Math.round(a/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;const c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new B(1,1,1),new B(1,1,1),new B(1,1,1),new B(1,1,1),new B(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=oo.clone(vl.uniforms),this.blendMaterial=new cn({uniforms:this.copyUniforms,vertexShader:vl.vertexShader,fragmentShader:vl.fragmentShader,premultipliedAlpha:!0,blending:Pl,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new je,this._oldClearAlpha=1,this._basic=new jl,this._fsQuad=new $h(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(e,t){let n=Math.round(e/2),i=Math.round(t/2);this.renderTargetBright.setSize(n,i);for(let s=0;s<this.nMips;s++)this.renderTargetsHorizontal[s].setSize(n,i),this.renderTargetsVertical[s].setSize(n,i),this.separableBlurMaterials[s].uniforms.invSize.value=new fe(1/n,1/i),n=Math.round(n/2),i=Math.round(i/2)}render(e,t,n,i,s){e.getClearColor(this._oldClearColor),this._oldClearAlpha=e.getClearAlpha();const a=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),s&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=n.texture,e.setRenderTarget(null),e.clear(),this._fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this._fsQuad.render(e);let o=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this._fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=o.texture,this.separableBlurMaterials[l].uniforms.direction.value=ta.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[l]),e.clear(),this._fsQuad.render(e),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=ta.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[l]),e.clear(),this._fsQuad.render(e),o=this.renderTargetsVertical[l];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this._fsQuad.render(e),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,s&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(n),this._fsQuad.render(e)),e.setClearColor(this._oldClearColor,this._oldClearAlpha),e.autoClear=a}_getSeparableBlurMaterial(e){const t=[],n=e/3;for(let a=0;a<e;a++)t.push(.39894*Math.exp(-.5*a*a/(n*n))/n);const i=[],s=[];for(let a=1;a<e;a+=2){const o=t[a],l=a+1<e?t[a+1]:0,c=o+l;i.push((a*o+(a+1)*l)/c),s.push(c)}return new cn({defines:{KERNEL_PAIRS:i.length},uniforms:{colorTexture:{value:null},invSize:{value:new fe(.5,.5)},direction:{value:new fe(.5,.5)},centerWeight:{value:t[0]},gaussianOffsets:{value:i},gaussianWeights:{value:s}},vertexShader:`

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

				}`})}_getCompositeMaterial(e){return new cn({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`

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

				}`})}}ta.BlurDirectionX=new fe(1,0);ta.BlurDirectionY=new fe(0,1);const Qo={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		}`};class rS extends da{constructor(){super(),this.isOutputPass=!0,this.uniforms=oo.clone(Qo.uniforms),this.material=new n0({name:Qo.name,uniforms:this.uniforms,vertexShader:Qo.vertexShader,fragmentShader:Qo.fragmentShader}),this._fsQuad=new $h(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},ht.getTransfer(this._outputColorSpace)===gt&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===Eh?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===bh?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===wh?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===Kl?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===Ch?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===Rh?this.material.defines.NEUTRAL_TONE_MAPPING="":this._toneMapping===Ah&&(this.material.defines.CUSTOM_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}}const sS=JSON.parse('{"0":{"x_min":51,"x_max":779,"ha":828,"o":"m 415 -26 q 142 129 242 -26 q 51 476 51 271 q 141 825 51 683 q 415 984 242 984 q 687 825 585 984 q 779 476 779 682 q 688 131 779 271 q 415 -26 587 -26 m 415 137 q 529 242 485 137 q 568 477 568 338 q 530 713 568 619 q 415 821 488 821 q 303 718 344 821 q 262 477 262 616 q 301 237 262 337 q 415 137 341 137 "},"1":{"x_min":197.609375,"x_max":628,"ha":828,"o":"m 628 0 l 434 0 l 434 674 l 197 674 l 197 810 q 373 837 318 810 q 468 984 450 876 l 628 984 l 628 0 "},"2":{"x_min":64,"x_max":764,"ha":828,"o":"m 764 685 q 675 452 764 541 q 484 325 637 415 q 307 168 357 250 l 754 168 l 754 0 l 64 0 q 193 301 64 175 q 433 480 202 311 q 564 673 564 576 q 519 780 564 737 q 416 824 475 824 q 318 780 358 824 q 262 633 270 730 l 80 633 q 184 903 80 807 q 415 988 276 988 q 654 907 552 988 q 764 685 764 819 "},"3":{"x_min":61,"x_max":767,"ha":828,"o":"m 767 290 q 653 51 767 143 q 402 -32 548 -32 q 168 48 262 -32 q 61 300 61 140 l 250 300 q 298 173 250 219 q 405 132 343 132 q 514 169 471 132 q 563 282 563 211 q 491 405 563 369 q 343 432 439 432 l 343 568 q 472 592 425 568 q 534 701 534 626 q 493 793 534 758 q 398 829 453 829 q 306 789 344 829 q 268 669 268 749 l 80 669 q 182 909 80 823 q 410 986 274 986 q 633 916 540 986 q 735 719 735 840 q 703 608 735 656 q 615 522 672 561 q 727 427 687 486 q 767 290 767 369 "},"4":{"x_min":53,"x_max":775.21875,"ha":828,"o":"m 775 213 l 660 213 l 660 0 l 470 0 l 470 213 l 53 213 l 53 384 l 416 958 l 660 958 l 660 370 l 775 370 l 775 213 m 474 364 l 474 786 l 204 363 l 474 364 "},"5":{"x_min":59,"x_max":767,"ha":828,"o":"m 767 319 q 644 59 767 158 q 382 -29 533 -29 q 158 43 247 -29 q 59 264 59 123 l 252 264 q 295 165 252 201 q 400 129 339 129 q 512 172 466 129 q 564 308 564 220 q 514 437 564 387 q 398 488 464 488 q 329 472 361 488 q 271 420 297 456 l 93 428 l 157 958 l 722 958 l 722 790 l 295 790 l 271 593 q 348 635 306 621 q 431 649 389 649 q 663 551 560 649 q 767 319 767 453 "},"6":{"x_min":57,"x_max":771,"ha":828,"o":"m 744 734 l 544 734 q 500 802 533 776 q 425 828 466 828 q 315 769 359 828 q 264 571 264 701 q 451 638 343 638 q 691 537 602 638 q 771 315 771 449 q 683 79 771 176 q 420 -29 586 -29 q 134 123 227 -29 q 57 455 57 250 q 184 865 57 721 q 452 988 293 988 q 657 916 570 988 q 744 734 744 845 m 426 128 q 538 178 498 128 q 578 300 578 229 q 538 422 578 372 q 415 479 493 479 q 303 430 342 479 q 264 313 264 381 q 308 184 264 240 q 426 128 352 128 "},"7":{"x_min":65.28125,"x_max":762.5,"ha":828,"o":"m 762 808 q 521 435 604 626 q 409 0 438 244 l 205 0 q 313 422 227 234 q 548 789 387 583 l 65 789 l 65 958 l 762 958 l 762 808 "},"8":{"x_min":57,"x_max":770,"ha":828,"o":"m 625 516 q 733 416 697 477 q 770 284 770 355 q 675 69 770 161 q 415 -29 574 -29 q 145 65 244 -29 q 57 273 57 150 q 93 413 57 350 q 204 516 130 477 q 112 609 142 556 q 83 718 83 662 q 177 905 83 824 q 414 986 272 986 q 650 904 555 986 q 745 715 745 822 q 716 608 745 658 q 625 516 688 558 m 414 590 q 516 624 479 590 q 553 706 553 659 q 516 791 553 755 q 414 828 480 828 q 311 792 348 828 q 275 706 275 757 q 310 624 275 658 q 414 590 345 590 m 413 135 q 527 179 487 135 q 564 279 564 218 q 525 386 564 341 q 411 436 482 436 q 298 387 341 436 q 261 282 261 344 q 300 178 261 222 q 413 135 340 135 "},"9":{"x_min":58,"x_max":769,"ha":828,"o":"m 769 492 q 646 90 769 232 q 384 -33 539 -33 q 187 35 271 -33 q 83 224 98 107 l 282 224 q 323 154 286 182 q 404 127 359 127 q 513 182 471 127 q 563 384 563 248 q 475 335 532 355 q 372 315 418 315 q 137 416 224 315 q 58 642 58 507 q 144 877 58 781 q 407 984 239 984 q 694 827 602 984 q 769 492 769 699 m 416 476 q 525 521 488 476 q 563 632 563 566 q 521 764 563 709 q 403 826 474 826 q 297 773 337 826 q 258 649 258 720 q 295 530 258 577 q 416 476 339 476 "},"ο":{"x_min":0,"x_max":764,"ha":863,"o":"m 380 -25 q 105 87 211 -25 q 0 372 0 200 q 104 660 0 545 q 380 775 209 775 q 658 659 552 775 q 764 372 764 544 q 658 87 764 200 q 380 -25 552 -25 m 379 142 q 515 216 466 142 q 557 373 557 280 q 515 530 557 465 q 379 607 466 607 q 245 530 294 607 q 204 373 204 465 q 245 218 204 283 q 379 142 294 142 "},"S":{"x_min":0,"x_max":826,"ha":915,"o":"m 826 306 q 701 55 826 148 q 423 -29 587 -29 q 138 60 255 -29 q 0 318 13 154 l 208 318 q 288 192 216 238 q 437 152 352 152 q 559 181 506 152 q 623 282 623 217 q 466 411 623 372 q 176 487 197 478 q 18 719 18 557 q 136 958 18 869 q 399 1040 244 1040 q 670 956 561 1040 q 791 713 791 864 l 591 713 q 526 826 583 786 q 393 866 469 866 q 277 838 326 866 q 218 742 218 804 q 374 617 218 655 q 667 542 646 552 q 826 306 826 471 "},"¦":{"x_min":0,"x_max":143,"ha":240,"o":"m 143 462 l 0 462 l 0 984 l 143 984 l 143 462 m 143 -242 l 0 -242 l 0 280 l 143 280 l 143 -242 "},"/":{"x_min":196.109375,"x_max":632.5625,"ha":828,"o":"m 632 1040 l 289 -128 l 196 -128 l 538 1040 l 632 1040 "},"Τ":{"x_min":-0.609375,"x_max":808,"ha":878,"o":"m 808 831 l 508 831 l 508 0 l 298 0 l 298 831 l 0 831 l 0 1013 l 808 1013 l 808 831 "},"y":{"x_min":0,"x_max":738.890625,"ha":828,"o":"m 738 749 l 444 -107 q 361 -238 413 -199 q 213 -277 308 -277 q 156 -275 176 -277 q 120 -271 131 -271 l 120 -110 q 147 -113 134 -111 q 179 -116 161 -116 q 247 -91 226 -116 q 269 -17 269 -67 q 206 173 269 -4 q 84 515 162 301 q 0 749 41 632 l 218 749 l 376 207 l 529 749 l 738 749 "},"Π":{"x_min":0,"x_max":809,"ha":922,"o":"m 809 0 l 598 0 l 598 836 l 208 836 l 208 0 l 0 0 l 0 1012 l 809 1012 l 809 0 "},"ΐ":{"x_min":-162,"x_max":364,"ha":364,"o":"m 364 810 l 235 810 l 235 952 l 364 952 l 364 810 m 301 1064 l 86 810 l -12 810 l 123 1064 l 301 1064 m -33 810 l -162 810 l -162 952 l -33 952 l -33 810 m 200 0 l 0 0 l 0 748 l 200 748 l 200 0 "},"g":{"x_min":0,"x_max":724,"ha":839,"o":"m 724 48 q 637 -223 724 -142 q 357 -304 551 -304 q 140 -253 226 -304 q 23 -72 36 -192 l 243 -72 q 290 -127 255 -110 q 368 -144 324 -144 q 504 -82 470 -144 q 530 71 530 -38 l 530 105 q 441 25 496 51 q 319 0 386 0 q 79 115 166 0 q 0 377 0 219 q 77 647 0 534 q 317 775 166 775 q 534 656 456 775 l 534 748 l 724 748 l 724 48 m 368 167 q 492 237 447 167 q 530 382 530 297 q 490 529 530 466 q 364 603 444 603 q 240 532 284 603 q 201 386 201 471 q 240 239 201 300 q 368 167 286 167 "},"²":{"x_min":0,"x_max":463,"ha":560,"o":"m 463 791 q 365 627 463 706 q 151 483 258 555 l 455 483 l 455 382 l 0 382 q 84 565 0 488 q 244 672 97 576 q 331 784 331 727 q 299 850 331 824 q 228 876 268 876 q 159 848 187 876 q 132 762 132 820 l 10 762 q 78 924 10 866 q 228 976 137 976 q 392 925 322 976 q 463 791 463 874 "},"–":{"x_min":0,"x_max":704.171875,"ha":801,"o":"m 704 297 l 0 297 l 0 450 l 704 450 l 704 297 "},"Κ":{"x_min":0,"x_max":899.671875,"ha":969,"o":"m 899 0 l 646 0 l 316 462 l 208 355 l 208 0 l 0 0 l 0 1013 l 208 1013 l 208 596 l 603 1013 l 863 1013 l 460 603 l 899 0 "},"ƒ":{"x_min":-46,"x_max":440,"ha":525,"o":"m 440 609 l 316 609 l 149 -277 l -46 -277 l 121 609 l 14 609 l 14 749 l 121 749 q 159 949 121 894 q 344 1019 208 1019 l 440 1015 l 440 855 l 377 855 q 326 841 338 855 q 314 797 314 827 q 314 773 314 786 q 314 749 314 761 l 440 749 l 440 609 "},"e":{"x_min":0,"x_max":708,"ha":808,"o":"m 708 321 l 207 321 q 254 186 207 236 q 362 141 298 141 q 501 227 453 141 l 700 227 q 566 36 662 104 q 362 -26 477 -26 q 112 72 213 -26 q 0 369 0 182 q 95 683 0 573 q 358 793 191 793 q 619 677 531 793 q 708 321 708 561 m 501 453 q 460 571 501 531 q 353 612 420 612 q 247 570 287 612 q 207 453 207 529 l 501 453 "},"ό":{"x_min":0,"x_max":764,"ha":863,"o":"m 380 -25 q 105 87 211 -25 q 0 372 0 200 q 104 660 0 545 q 380 775 209 775 q 658 659 552 775 q 764 372 764 544 q 658 87 764 200 q 380 -25 552 -25 m 379 142 q 515 216 466 142 q 557 373 557 280 q 515 530 557 465 q 379 607 466 607 q 245 530 294 607 q 204 373 204 465 q 245 218 204 283 q 379 142 294 142 m 593 1039 l 391 823 l 293 823 l 415 1039 l 593 1039 "},"J":{"x_min":0,"x_max":649,"ha":760,"o":"m 649 294 q 573 48 649 125 q 327 -29 497 -29 q 61 82 136 -29 q 0 375 0 173 l 200 375 l 199 309 q 219 194 199 230 q 321 145 249 145 q 418 193 390 145 q 441 307 441 232 l 441 1013 l 649 1013 l 649 294 "},"»":{"x_min":-0.234375,"x_max":526,"ha":624,"o":"m 526 286 l 297 87 l 296 250 l 437 373 l 297 495 l 297 660 l 526 461 l 526 286 m 229 286 l 0 87 l 0 250 l 140 373 l 0 495 l 0 660 l 229 461 l 229 286 "},"©":{"x_min":3,"x_max":1007,"ha":1104,"o":"m 507 -6 q 129 153 269 -6 q 3 506 3 298 q 127 857 3 713 q 502 1017 266 1017 q 880 855 740 1017 q 1007 502 1007 711 q 882 152 1007 295 q 507 -6 743 -6 m 502 934 q 184 800 302 934 q 79 505 79 680 q 184 210 79 331 q 501 76 302 76 q 819 210 701 76 q 925 507 925 331 q 820 800 925 682 q 502 934 704 934 m 758 410 q 676 255 748 313 q 506 197 605 197 q 298 291 374 197 q 229 499 229 377 q 297 713 229 624 q 494 811 372 811 q 666 760 593 811 q 752 616 739 710 l 621 616 q 587 688 621 658 q 509 719 554 719 q 404 658 441 719 q 368 511 368 598 q 403 362 368 427 q 498 298 438 298 q 624 410 606 298 l 758 410 "},"ώ":{"x_min":0,"x_max":945,"ha":1051,"o":"m 566 528 l 372 528 l 372 323 q 372 298 372 311 q 373 271 372 285 q 360 183 373 211 q 292 142 342 142 q 219 222 243 142 q 203 365 203 279 q 241 565 203 461 q 334 748 273 650 l 130 748 q 36 552 68 650 q 0 337 0 444 q 69 96 0 204 q 276 -29 149 -29 q 390 0 337 -29 q 470 78 444 28 q 551 0 495 30 q 668 -29 608 -29 q 874 96 793 -29 q 945 337 945 205 q 910 547 945 444 q 814 748 876 650 l 610 748 q 703 565 671 650 q 742 365 742 462 q 718 189 742 237 q 651 142 694 142 q 577 190 597 142 q 565 289 565 221 l 565 323 l 566 528 m 718 1039 l 516 823 l 417 823 l 540 1039 l 718 1039 "},"^":{"x_min":197.21875,"x_max":630.5625,"ha":828,"o":"m 630 836 l 536 836 l 413 987 l 294 836 l 197 836 l 331 1090 l 493 1090 l 630 836 "},"«":{"x_min":0,"x_max":526.546875,"ha":624,"o":"m 526 87 l 297 286 l 297 461 l 526 660 l 526 495 l 385 373 l 526 250 l 526 87 m 229 87 l 0 286 l 0 461 l 229 660 l 229 495 l 88 373 l 229 250 l 229 87 "},"D":{"x_min":0,"x_max":864,"ha":968,"o":"m 400 1013 q 736 874 608 1013 q 864 523 864 735 q 717 146 864 293 q 340 0 570 0 l 0 0 l 0 1013 l 400 1013 m 398 837 l 206 837 l 206 182 l 372 182 q 584 276 507 182 q 657 504 657 365 q 594 727 657 632 q 398 837 522 837 "},"∙":{"x_min":0,"x_max":207,"ha":304,"o":"m 207 528 l 0 528 l 0 735 l 207 735 l 207 528 "},"ÿ":{"x_min":0,"x_max":47,"ha":125,"o":"m 47 3 q 37 -7 47 -7 q 28 0 30 -7 q 39 -4 32 -4 q 45 3 45 -1 l 37 0 q 28 9 28 0 q 39 19 28 19 l 47 16 l 47 19 l 47 3 m 37 1 q 44 8 44 1 q 37 16 44 16 q 30 8 30 16 q 37 1 30 1 m 26 1 l 23 22 l 14 0 l 3 22 l 3 3 l 0 25 l 13 1 l 22 25 l 26 1 "},"w":{"x_min":0,"x_max":1056.953125,"ha":1150,"o":"m 1056 749 l 848 0 l 647 0 l 527 536 l 412 0 l 211 0 l 0 749 l 202 749 l 325 226 l 429 748 l 633 748 l 740 229 l 864 749 l 1056 749 "},"$":{"x_min":0,"x_max":704,"ha":800,"o":"m 682 693 l 495 693 q 468 782 491 749 q 391 831 441 824 l 391 579 q 633 462 562 534 q 704 259 704 389 q 616 57 704 136 q 391 -22 528 -22 l 391 -156 l 308 -156 l 308 -22 q 76 69 152 -7 q 0 300 0 147 l 183 300 q 215 191 190 230 q 308 128 245 143 l 308 414 q 84 505 157 432 q 12 700 12 578 q 89 902 12 824 q 308 981 166 981 l 308 1069 l 391 1069 l 391 981 q 595 905 521 981 q 682 693 670 829 m 308 599 l 308 831 q 228 796 256 831 q 200 712 200 762 q 225 642 200 668 q 308 599 251 617 m 391 128 q 476 174 449 140 q 504 258 504 207 q 391 388 504 354 l 391 128 "},"\\\\":{"x_min":-0.03125,"x_max":434.765625,"ha":532,"o":"m 434 -128 l 341 -128 l 0 1039 l 91 1040 l 434 -128 "},"µ":{"x_min":0,"x_max":647,"ha":754,"o":"m 647 0 l 478 0 l 478 68 q 412 9 448 30 q 330 -11 375 -11 q 261 3 296 -11 q 199 43 226 18 l 199 -277 l 0 -277 l 0 749 l 199 749 l 199 358 q 216 221 199 267 q 322 151 244 151 q 435 240 410 151 q 448 401 448 283 l 448 749 l 647 749 l 647 0 "},"Ι":{"x_min":42,"x_max":250,"ha":413,"o":"m 250 0 l 42 0 l 42 1013 l 250 1013 l 250 0 "},"Ύ":{"x_min":0,"x_max":1211.15625,"ha":1289,"o":"m 1211 1012 l 907 376 l 907 0 l 697 0 l 697 376 l 374 1012 l 583 1012 l 802 576 l 1001 1012 l 1211 1012 m 313 1035 l 98 780 l 0 780 l 136 1035 l 313 1035 "},"’":{"x_min":0,"x_max":192,"ha":289,"o":"m 192 834 q 137 692 192 751 q 0 626 83 634 l 0 697 q 101 831 101 723 l 0 831 l 0 1013 l 192 1013 l 192 834 "},"Ν":{"x_min":0,"x_max":833,"ha":946,"o":"m 833 0 l 617 0 l 206 696 l 206 0 l 0 0 l 0 1013 l 216 1013 l 629 315 l 629 1013 l 833 1013 l 833 0 "},"-":{"x_min":27.78125,"x_max":413.890625,"ha":525,"o":"m 413 279 l 27 279 l 27 468 l 413 468 l 413 279 "},"Q":{"x_min":0,"x_max":995.59375,"ha":1096,"o":"m 995 49 l 885 -70 l 762 42 q 641 -12 709 4 q 497 -29 572 -29 q 135 123 271 -29 q 0 504 0 276 q 131 881 0 731 q 497 1040 270 1040 q 859 883 719 1040 q 994 506 994 731 q 966 321 994 413 q 884 152 938 229 l 995 49 m 730 299 q 767 395 755 344 q 779 504 779 446 q 713 743 779 644 q 505 857 638 857 q 284 745 366 857 q 210 501 210 644 q 279 265 210 361 q 492 157 357 157 q 615 181 557 157 l 508 287 l 620 405 l 730 299 "},"ς":{"x_min":0,"x_max":731.78125,"ha":768,"o":"m 731 448 l 547 448 q 485 571 531 533 q 369 610 440 610 q 245 537 292 610 q 204 394 204 473 q 322 186 204 238 q 540 133 430 159 q 659 -15 659 98 q 643 -141 659 -80 q 595 -278 627 -202 l 423 -278 q 458 -186 448 -215 q 474 -88 474 -133 q 352 0 474 -27 q 123 80 181 38 q 0 382 0 170 q 98 660 0 549 q 367 777 202 777 q 622 683 513 777 q 731 448 731 589 "},"M":{"x_min":0,"x_max":1019,"ha":1135,"o":"m 1019 0 l 823 0 l 823 819 l 618 0 l 402 0 l 194 818 l 194 0 l 0 0 l 0 1013 l 309 1012 l 510 241 l 707 1013 l 1019 1013 l 1019 0 "},"Ψ":{"x_min":0,"x_max":995,"ha":1085,"o":"m 995 698 q 924 340 995 437 q 590 200 841 227 l 590 0 l 404 0 l 404 200 q 70 340 152 227 q 0 698 0 437 l 0 1013 l 188 1013 l 188 694 q 212 472 188 525 q 404 383 254 383 l 404 1013 l 590 1013 l 590 383 q 781 472 740 383 q 807 694 807 525 l 807 1013 l 995 1013 l 995 698 "},"C":{"x_min":0,"x_max":970.828125,"ha":1043,"o":"m 970 345 q 802 70 933 169 q 490 -29 672 -29 q 130 130 268 -29 q 0 506 0 281 q 134 885 0 737 q 502 1040 275 1040 q 802 939 668 1040 q 965 679 936 838 l 745 679 q 649 809 716 761 q 495 857 582 857 q 283 747 361 857 q 214 508 214 648 q 282 267 214 367 q 493 154 359 154 q 651 204 584 154 q 752 345 718 255 l 970 345 "},"!":{"x_min":0,"x_max":204,"ha":307,"o":"m 204 739 q 182 515 204 686 q 152 282 167 398 l 52 282 q 13 589 27 473 q 0 739 0 704 l 0 1013 l 204 1013 l 204 739 m 204 0 l 0 0 l 0 203 l 204 203 l 204 0 "},"{":{"x_min":0,"x_max":501.390625,"ha":599,"o":"m 501 -285 q 229 -209 301 -285 q 176 -35 176 -155 q 182 47 176 -8 q 189 126 189 103 q 156 245 189 209 q 0 294 112 294 l 0 438 q 154 485 111 438 q 189 603 189 522 q 186 666 189 636 q 176 783 176 772 q 231 945 176 894 q 501 1015 306 1015 l 501 872 q 370 833 408 872 q 340 737 340 801 q 342 677 340 705 q 353 569 353 579 q 326 451 353 496 q 207 366 291 393 q 327 289 294 346 q 353 164 353 246 q 348 79 353 132 q 344 17 344 26 q 372 -95 344 -58 q 501 -141 408 -141 l 501 -285 "},"X":{"x_min":0,"x_max":894.453125,"ha":999,"o":"m 894 0 l 654 0 l 445 351 l 238 0 l 0 0 l 316 516 l 0 1013 l 238 1013 l 445 659 l 652 1013 l 894 1013 l 577 519 l 894 0 "},"#":{"x_min":0,"x_max":1019.453125,"ha":1117,"o":"m 1019 722 l 969 582 l 776 581 l 717 417 l 919 417 l 868 279 l 668 278 l 566 -6 l 413 -5 l 516 279 l 348 279 l 247 -6 l 94 -6 l 196 278 l 0 279 l 49 417 l 245 417 l 304 581 l 98 582 l 150 722 l 354 721 l 455 1006 l 606 1006 l 507 721 l 673 722 l 776 1006 l 927 1006 l 826 721 l 1019 722 m 627 581 l 454 581 l 394 417 l 567 417 l 627 581 "},"ι":{"x_min":42,"x_max":242,"ha":389,"o":"m 242 0 l 42 0 l 42 749 l 242 749 l 242 0 "},"Ά":{"x_min":0,"x_max":995.828125,"ha":1072,"o":"m 313 1035 l 98 780 l 0 780 l 136 1035 l 313 1035 m 995 0 l 776 0 l 708 208 l 315 208 l 247 0 l 29 0 l 390 1012 l 629 1012 l 995 0 m 652 376 l 509 809 l 369 376 l 652 376 "},")":{"x_min":0,"x_max":389,"ha":486,"o":"m 389 357 q 319 14 389 187 q 145 -293 259 -134 l 0 -293 q 139 22 90 -142 q 189 358 189 187 q 139 689 189 525 q 0 1013 90 853 l 145 1013 q 319 703 258 857 q 389 357 389 528 "},"ε":{"x_min":16.671875,"x_max":652.78125,"ha":742,"o":"m 652 259 q 565 49 652 123 q 340 -25 479 -25 q 102 39 188 -25 q 16 197 16 104 q 45 299 16 249 q 134 390 75 348 q 58 456 86 419 q 25 552 25 502 q 120 717 25 653 q 322 776 208 776 q 537 710 456 776 q 625 508 625 639 l 445 508 q 415 585 445 563 q 327 608 386 608 q 254 590 293 608 q 215 544 215 573 q 252 469 215 490 q 336 453 280 453 q 369 455 347 453 q 400 456 391 456 l 400 308 l 329 308 q 247 291 280 308 q 204 223 204 269 q 255 154 204 172 q 345 143 286 143 q 426 174 398 143 q 454 259 454 206 l 652 259 "},"Δ":{"x_min":0,"x_max":981.953125,"ha":1057,"o":"m 981 0 l 0 0 l 386 1013 l 594 1013 l 981 0 m 715 175 l 490 765 l 266 175 l 715 175 "},"}":{"x_min":0,"x_max":500,"ha":597,"o":"m 500 294 q 348 246 390 294 q 315 128 315 209 q 320 42 315 101 q 326 -48 326 -17 q 270 -214 326 -161 q 0 -285 196 -285 l 0 -141 q 126 -97 90 -141 q 154 8 154 -64 q 150 91 154 37 q 146 157 146 145 q 172 281 146 235 q 294 366 206 339 q 173 451 208 390 q 146 576 146 500 q 150 655 146 603 q 154 731 154 708 q 126 831 154 799 q 0 872 90 872 l 0 1015 q 270 944 196 1015 q 326 777 326 891 q 322 707 326 747 q 313 593 313 612 q 347 482 313 518 q 500 438 390 438 l 500 294 "},"‰":{"x_min":0,"x_max":1681,"ha":1775,"o":"m 861 484 q 1048 404 979 484 q 1111 228 1111 332 q 1048 51 1111 123 q 859 -29 979 -29 q 672 50 740 -29 q 610 227 610 122 q 672 403 610 331 q 861 484 741 484 m 861 120 q 939 151 911 120 q 967 226 967 183 q 942 299 967 270 q 861 333 912 333 q 783 301 811 333 q 756 226 756 269 q 783 151 756 182 q 861 120 810 120 m 904 984 l 316 -28 l 205 -29 l 793 983 l 904 984 m 250 984 q 436 904 366 984 q 499 730 499 832 q 436 552 499 626 q 248 472 366 472 q 62 552 132 472 q 0 728 0 624 q 62 903 0 831 q 250 984 132 984 m 249 835 q 169 801 198 835 q 140 725 140 768 q 167 652 140 683 q 247 621 195 621 q 327 654 298 621 q 357 730 357 687 q 329 803 357 772 q 249 835 301 835 m 1430 484 q 1618 404 1548 484 q 1681 228 1681 332 q 1618 51 1681 123 q 1429 -29 1548 -29 q 1241 50 1309 -29 q 1179 227 1179 122 q 1241 403 1179 331 q 1430 484 1311 484 m 1431 120 q 1509 151 1481 120 q 1537 226 1537 183 q 1511 299 1537 270 q 1431 333 1482 333 q 1352 301 1380 333 q 1325 226 1325 269 q 1352 151 1325 182 q 1431 120 1379 120 "},"a":{"x_min":0,"x_max":700,"ha":786,"o":"m 700 0 l 488 0 q 465 93 469 45 q 365 5 427 37 q 233 -26 303 -26 q 65 37 130 -26 q 0 205 0 101 q 120 409 0 355 q 343 452 168 431 q 465 522 465 468 q 424 588 465 565 q 337 611 384 611 q 250 581 285 611 q 215 503 215 552 l 26 503 q 113 707 26 633 q 328 775 194 775 q 538 723 444 775 q 657 554 657 659 l 657 137 q 666 73 657 101 q 700 33 675 45 l 700 0 m 465 297 l 465 367 q 299 322 358 340 q 193 217 193 287 q 223 150 193 174 q 298 127 254 127 q 417 175 370 127 q 465 297 465 224 "},"—":{"x_min":0,"x_max":941.671875,"ha":1039,"o":"m 941 297 l 0 297 l 0 450 l 941 450 l 941 297 "},"=":{"x_min":29.171875,"x_max":798.609375,"ha":828,"o":"m 798 502 l 29 502 l 29 635 l 798 635 l 798 502 m 798 204 l 29 204 l 29 339 l 798 339 l 798 204 "},"N":{"x_min":0,"x_max":833,"ha":949,"o":"m 833 0 l 617 0 l 206 695 l 206 0 l 0 0 l 0 1013 l 216 1013 l 629 315 l 629 1013 l 833 1013 l 833 0 "},"ρ":{"x_min":0,"x_max":722,"ha":810,"o":"m 364 -17 q 271 0 313 -17 q 194 48 230 16 l 194 -278 l 0 -278 l 0 370 q 87 656 0 548 q 358 775 183 775 q 626 655 524 775 q 722 372 722 541 q 621 95 722 208 q 364 -17 520 -17 m 360 607 q 237 529 280 607 q 201 377 201 463 q 234 229 201 292 q 355 147 277 147 q 467 210 419 147 q 515 374 515 273 q 471 537 515 468 q 360 607 428 607 "},"¯":{"x_min":0,"x_max":775,"ha":771,"o":"m 775 958 l 0 958 l 0 1111 l 775 1111 l 775 958 "},"Z":{"x_min":0,"x_max":804.171875,"ha":906,"o":"m 804 836 l 251 182 l 793 182 l 793 0 l 0 0 l 0 176 l 551 830 l 11 830 l 11 1013 l 804 1013 l 804 836 "},"u":{"x_min":0,"x_max":668,"ha":782,"o":"m 668 0 l 474 0 l 474 89 q 363 9 425 37 q 233 -19 301 -19 q 61 53 123 -19 q 0 239 0 126 l 0 749 l 199 749 l 199 296 q 225 193 199 233 q 316 146 257 146 q 424 193 380 146 q 469 304 469 240 l 469 749 l 668 749 l 668 0 "},"k":{"x_min":0,"x_max":688.890625,"ha":771,"o":"m 688 0 l 450 0 l 270 316 l 196 237 l 196 0 l 0 0 l 0 1013 l 196 1013 l 196 483 l 433 748 l 675 748 l 413 469 l 688 0 "},"Η":{"x_min":0,"x_max":837,"ha":950,"o":"m 837 0 l 627 0 l 627 450 l 210 450 l 210 0 l 0 0 l 0 1013 l 210 1013 l 210 635 l 627 635 l 627 1013 l 837 1013 l 837 0 "},"Α":{"x_min":0,"x_max":966.671875,"ha":1043,"o":"m 966 0 l 747 0 l 679 208 l 286 208 l 218 0 l 0 0 l 361 1013 l 600 1013 l 966 0 m 623 376 l 480 809 l 340 376 l 623 376 "},"s":{"x_min":0,"x_max":681,"ha":775,"o":"m 681 229 q 568 33 681 105 q 340 -29 471 -29 q 107 39 202 -29 q 0 245 0 114 l 201 245 q 252 155 201 189 q 358 128 295 128 q 436 144 401 128 q 482 205 482 166 q 363 284 482 255 q 143 348 181 329 q 25 533 25 408 q 129 716 25 647 q 340 778 220 778 q 554 710 465 778 q 658 522 643 643 l 463 522 q 419 596 458 570 q 327 622 380 622 q 255 606 290 622 q 221 556 221 590 q 339 473 221 506 q 561 404 528 420 q 681 229 681 344 "},"B":{"x_min":0,"x_max":835,"ha":938,"o":"m 674 547 q 791 450 747 518 q 835 304 835 383 q 718 75 835 158 q 461 0 612 0 l 0 0 l 0 1013 l 477 1013 q 697 951 609 1013 q 797 754 797 880 q 765 630 797 686 q 674 547 734 575 m 438 621 q 538 646 495 621 q 590 730 590 676 q 537 814 590 785 q 436 838 494 838 l 199 838 l 199 621 l 438 621 m 445 182 q 561 211 513 182 q 618 311 618 247 q 565 410 618 375 q 444 446 512 446 l 199 446 l 199 182 l 445 182 "},"…":{"x_min":0,"x_max":819,"ha":963,"o":"m 206 0 l 0 0 l 0 207 l 206 207 l 206 0 m 512 0 l 306 0 l 306 207 l 512 207 l 512 0 m 819 0 l 613 0 l 613 207 l 819 207 l 819 0 "},"?":{"x_min":1,"x_max":687,"ha":785,"o":"m 687 734 q 621 563 687 634 q 501 454 560 508 q 436 293 436 386 l 251 293 l 251 391 q 363 557 251 462 q 476 724 476 653 q 432 827 476 788 q 332 866 389 866 q 238 827 275 866 q 195 699 195 781 l 1 699 q 110 955 1 861 q 352 1040 210 1040 q 582 963 489 1040 q 687 734 687 878 m 446 0 l 243 0 l 243 203 l 446 203 l 446 0 "},"H":{"x_min":0,"x_max":838,"ha":953,"o":"m 838 0 l 628 0 l 628 450 l 210 450 l 210 0 l 0 0 l 0 1013 l 210 1013 l 210 635 l 628 635 l 628 1013 l 838 1013 l 838 0 "},"ν":{"x_min":0,"x_max":740.28125,"ha":828,"o":"m 740 749 l 473 0 l 266 0 l 0 749 l 222 749 l 373 211 l 529 749 l 740 749 "},"c":{"x_min":0,"x_max":751.390625,"ha":828,"o":"m 751 282 q 625 58 725 142 q 384 -26 526 -26 q 107 84 215 -26 q 0 366 0 195 q 98 651 0 536 q 370 774 204 774 q 616 700 518 774 q 751 486 715 626 l 536 486 q 477 570 516 538 q 380 607 434 607 q 248 533 298 607 q 204 378 204 466 q 242 219 204 285 q 377 139 290 139 q 483 179 438 139 q 543 282 527 220 l 751 282 "},"¶":{"x_min":0,"x_max":566.671875,"ha":678,"o":"m 21 892 l 52 892 l 98 761 l 145 892 l 176 892 l 178 741 l 157 741 l 157 867 l 108 741 l 88 741 l 40 871 l 40 741 l 21 741 l 21 892 m 308 854 l 308 731 q 252 691 308 691 q 227 691 240 691 q 207 696 213 695 l 207 712 l 253 706 q 288 733 288 706 l 288 763 q 244 741 279 741 q 193 797 193 741 q 261 860 193 860 q 287 860 273 860 q 308 854 302 855 m 288 842 l 263 843 q 213 796 213 843 q 248 756 213 756 q 288 796 288 756 l 288 842 m 566 988 l 502 988 l 502 -1 l 439 -1 l 439 988 l 317 988 l 317 -1 l 252 -1 l 252 602 q 81 653 155 602 q 0 805 0 711 q 101 989 0 918 q 309 1053 194 1053 l 566 1053 l 566 988 "},"β":{"x_min":0,"x_max":703,"ha":789,"o":"m 510 539 q 651 429 600 501 q 703 262 703 357 q 617 53 703 136 q 404 -29 532 -29 q 199 51 279 -29 l 199 -278 l 0 -278 l 0 627 q 77 911 0 812 q 343 1021 163 1021 q 551 957 464 1021 q 649 769 649 886 q 613 638 649 697 q 510 539 577 579 m 344 136 q 452 181 408 136 q 497 291 497 227 q 435 409 497 369 q 299 444 381 444 l 299 600 q 407 634 363 600 q 452 731 452 669 q 417 820 452 784 q 329 857 382 857 q 217 775 246 857 q 199 622 199 725 l 199 393 q 221 226 199 284 q 344 136 254 136 "},"Μ":{"x_min":0,"x_max":1019,"ha":1132,"o":"m 1019 0 l 823 0 l 823 818 l 617 0 l 402 0 l 194 818 l 194 0 l 0 0 l 0 1013 l 309 1013 l 509 241 l 708 1013 l 1019 1013 l 1019 0 "},"Ό":{"x_min":0.15625,"x_max":1174,"ha":1271,"o":"m 676 -29 q 312 127 451 -29 q 179 505 179 277 q 311 883 179 733 q 676 1040 449 1040 q 1040 883 901 1040 q 1174 505 1174 733 q 1041 127 1174 277 q 676 -29 903 -29 m 676 154 q 890 266 811 154 q 961 506 961 366 q 891 745 961 648 q 676 857 812 857 q 462 747 541 857 q 392 506 392 648 q 461 266 392 365 q 676 154 540 154 m 314 1034 l 98 779 l 0 779 l 136 1034 l 314 1034 "},"Ή":{"x_min":0,"x_max":1248,"ha":1361,"o":"m 1248 0 l 1038 0 l 1038 450 l 621 450 l 621 0 l 411 0 l 411 1012 l 621 1012 l 621 635 l 1038 635 l 1038 1012 l 1248 1012 l 1248 0 m 313 1035 l 98 780 l 0 780 l 136 1035 l 313 1035 "},"•":{"x_min":-27.78125,"x_max":691.671875,"ha":775,"o":"m 691 508 q 588 252 691 358 q 331 147 486 147 q 77 251 183 147 q -27 508 -27 355 q 75 761 -27 655 q 331 868 179 868 q 585 763 479 868 q 691 508 691 658 "},"¥":{"x_min":0,"x_max":836,"ha":931,"o":"m 195 625 l 0 1013 l 208 1013 l 427 576 l 626 1013 l 836 1013 l 650 625 l 777 625 l 777 472 l 578 472 l 538 389 l 777 389 l 777 236 l 532 236 l 532 0 l 322 0 l 322 236 l 79 236 l 79 389 l 315 389 l 273 472 l 79 472 l 79 625 l 195 625 "},"(":{"x_min":0,"x_max":388.890625,"ha":486,"o":"m 388 -293 l 243 -293 q 70 14 130 -134 q 0 357 0 189 q 69 703 0 526 q 243 1013 129 856 l 388 1013 q 248 695 297 860 q 200 358 200 530 q 248 24 200 187 q 388 -293 297 -138 "},"U":{"x_min":0,"x_max":813,"ha":926,"o":"m 813 362 q 697 79 813 187 q 405 -29 582 -29 q 114 78 229 -29 q 0 362 0 186 l 0 1013 l 210 1013 l 210 387 q 260 226 210 291 q 408 154 315 154 q 554 226 500 154 q 603 387 603 291 l 603 1013 l 813 1013 l 813 362 "},"γ":{"x_min":0.0625,"x_max":729.234375,"ha":815,"o":"m 729 749 l 457 37 l 457 -278 l 257 -278 l 257 37 q 218 155 243 95 q 170 275 194 215 l 0 749 l 207 749 l 363 284 l 522 749 l 729 749 "},"α":{"x_min":-1,"x_max":722,"ha":835,"o":"m 722 0 l 531 0 l 530 101 q 433 8 491 41 q 304 -25 375 -25 q 72 104 157 -25 q -1 372 -1 216 q 72 643 -1 530 q 308 775 158 775 q 433 744 375 775 q 528 656 491 713 l 528 749 l 722 749 l 722 0 m 361 601 q 233 527 277 601 q 196 375 196 464 q 232 224 196 288 q 358 144 277 144 q 487 217 441 144 q 528 370 528 281 q 489 523 528 457 q 361 601 443 601 "},"F":{"x_min":0,"x_max":706.953125,"ha":778,"o":"m 706 837 l 206 837 l 206 606 l 645 606 l 645 431 l 206 431 l 206 0 l 0 0 l 0 1013 l 706 1013 l 706 837 "},"­":{"x_min":0,"x_max":704.171875,"ha":801,"o":"m 704 297 l 0 297 l 0 450 l 704 450 l 704 297 "},":":{"x_min":0,"x_max":207,"ha":304,"o":"m 207 528 l 0 528 l 0 735 l 207 735 l 207 528 m 207 0 l 0 0 l 0 207 l 207 207 l 207 0 "},"Χ":{"x_min":0,"x_max":894.453125,"ha":978,"o":"m 894 0 l 654 0 l 445 351 l 238 0 l 0 0 l 316 516 l 0 1013 l 238 1013 l 445 660 l 652 1013 l 894 1013 l 577 519 l 894 0 "},"*":{"x_min":115,"x_max":713,"ha":828,"o":"m 713 740 l 518 688 l 651 525 l 531 438 l 412 612 l 290 439 l 173 523 l 308 688 l 115 741 l 159 880 l 342 816 l 343 1013 l 482 1013 l 481 816 l 664 880 l 713 740 "},"†":{"x_min":0,"x_max":809,"ha":894,"o":"m 509 804 l 809 804 l 809 621 l 509 621 l 509 0 l 299 0 l 299 621 l 0 621 l 0 804 l 299 804 l 299 1011 l 509 1011 l 509 804 "},"°":{"x_min":-1,"x_max":363,"ha":460,"o":"m 181 808 q 46 862 94 808 q -1 992 -1 917 q 44 1118 -1 1066 q 181 1175 96 1175 q 317 1118 265 1175 q 363 991 363 1066 q 315 862 363 917 q 181 808 267 808 m 181 908 q 240 933 218 908 q 263 992 263 958 q 242 1051 263 1027 q 181 1075 221 1075 q 120 1050 142 1075 q 99 991 99 1026 q 120 933 99 958 q 181 908 142 908 "},"V":{"x_min":0,"x_max":895.828125,"ha":997,"o":"m 895 1013 l 550 0 l 347 0 l 0 1013 l 231 1013 l 447 256 l 666 1013 l 895 1013 "},"Ξ":{"x_min":0,"x_max":751.390625,"ha":800,"o":"m 733 826 l 5 826 l 5 1012 l 733 1012 l 733 826 m 681 432 l 65 432 l 65 617 l 681 617 l 681 432 m 751 0 l 0 0 l 0 183 l 751 183 l 751 0 "}," ":{"x_min":0,"x_max":0,"ha":853},"Ϋ":{"x_min":-0.21875,"x_max":836.171875,"ha":914,"o":"m 610 1046 l 454 1046 l 454 1215 l 610 1215 l 610 1046 m 369 1046 l 212 1046 l 212 1215 l 369 1215 l 369 1046 m 836 1012 l 532 376 l 532 0 l 322 0 l 322 376 l 0 1012 l 208 1012 l 427 576 l 626 1012 l 836 1012 "},"”":{"x_min":0,"x_max":469,"ha":567,"o":"m 192 834 q 137 692 192 751 q 0 626 83 634 l 0 697 q 101 831 101 723 l 0 831 l 0 1013 l 192 1013 l 192 834 m 469 834 q 414 692 469 751 q 277 626 360 634 l 277 697 q 379 831 379 723 l 277 831 l 277 1013 l 469 1013 l 469 834 "},"@":{"x_min":0,"x_max":1276,"ha":1374,"o":"m 1115 -52 q 895 -170 1015 -130 q 647 -211 776 -211 q 158 -34 334 -211 q 0 360 0 123 q 179 810 0 621 q 698 1019 377 1019 q 1138 859 981 1019 q 1276 514 1276 720 q 1173 210 1276 335 q 884 75 1062 75 q 784 90 810 75 q 737 186 749 112 q 647 104 698 133 q 532 75 596 75 q 360 144 420 75 q 308 308 308 205 q 398 568 308 451 q 638 696 497 696 q 731 671 690 696 q 805 604 772 647 l 840 673 l 964 673 q 886 373 915 490 q 856 239 856 257 q 876 201 856 214 q 920 188 895 188 q 1084 284 1019 188 q 1150 511 1150 380 q 1051 779 1150 672 q 715 905 934 905 q 272 734 439 905 q 121 363 121 580 q 250 41 121 170 q 647 -103 394 -103 q 863 -67 751 -103 q 1061 26 975 -32 l 1115 -52 m 769 483 q 770 500 770 489 q 733 567 770 539 q 651 596 695 596 q 508 504 566 596 q 457 322 457 422 q 483 215 457 256 q 561 175 509 175 q 671 221 625 175 q 733 333 718 268 l 769 483 "},"Ί":{"x_min":0,"x_max":619,"ha":732,"o":"m 313 1035 l 98 780 l 0 780 l 136 1035 l 313 1035 m 619 0 l 411 0 l 411 1012 l 619 1012 l 619 0 "},"i":{"x_min":14,"x_max":214,"ha":326,"o":"m 214 830 l 14 830 l 14 1013 l 214 1013 l 214 830 m 214 0 l 14 0 l 14 748 l 214 748 l 214 0 "},"Β":{"x_min":0,"x_max":835,"ha":961,"o":"m 675 547 q 791 450 747 518 q 835 304 835 383 q 718 75 835 158 q 461 0 612 0 l 0 0 l 0 1013 l 477 1013 q 697 951 609 1013 q 797 754 797 880 q 766 630 797 686 q 675 547 734 575 m 439 621 q 539 646 496 621 q 590 730 590 676 q 537 814 590 785 q 436 838 494 838 l 199 838 l 199 621 l 439 621 m 445 182 q 561 211 513 182 q 618 311 618 247 q 565 410 618 375 q 444 446 512 446 l 199 446 l 199 182 l 445 182 "},"υ":{"x_min":0,"x_max":656,"ha":767,"o":"m 656 416 q 568 55 656 145 q 326 -25 490 -25 q 59 97 137 -25 q 0 369 0 191 l 0 749 l 200 749 l 200 369 q 216 222 200 268 q 326 142 245 142 q 440 247 411 142 q 456 422 456 304 l 456 749 l 656 749 l 656 416 "},"]":{"x_min":0,"x_max":349,"ha":446,"o":"m 349 -300 l 0 -300 l 0 -154 l 163 -154 l 163 866 l 0 866 l 0 1013 l 349 1013 l 349 -300 "},"m":{"x_min":0,"x_max":1065,"ha":1174,"o":"m 1065 0 l 866 0 l 866 483 q 836 564 866 532 q 759 596 807 596 q 663 555 700 596 q 627 454 627 514 l 627 0 l 433 0 l 433 481 q 403 563 433 531 q 323 596 374 596 q 231 554 265 596 q 197 453 197 513 l 197 0 l 0 0 l 0 748 l 189 748 l 189 665 q 279 745 226 715 q 392 775 333 775 q 509 744 455 775 q 606 659 563 713 q 695 744 640 713 q 814 775 749 775 q 992 702 920 775 q 1065 523 1065 630 l 1065 0 "},"χ":{"x_min":0,"x_max":759.71875,"ha":847,"o":"m 759 -299 l 548 -299 l 379 66 l 215 -299 l 0 -299 l 261 233 l 13 749 l 230 749 l 379 400 l 527 749 l 738 749 l 500 238 l 759 -299 "},"ί":{"x_min":42,"x_max":371.171875,"ha":389,"o":"m 242 0 l 42 0 l 42 748 l 242 748 l 242 0 m 371 1039 l 169 823 l 71 823 l 193 1039 l 371 1039 "},"Ζ":{"x_min":0,"x_max":804.171875,"ha":886,"o":"m 804 835 l 251 182 l 793 182 l 793 0 l 0 0 l 0 176 l 551 829 l 11 829 l 11 1012 l 804 1012 l 804 835 "},"R":{"x_min":0,"x_max":836.109375,"ha":947,"o":"m 836 0 l 608 0 q 588 53 596 20 q 581 144 581 86 q 581 179 581 162 q 581 215 581 197 q 553 345 581 306 q 428 393 518 393 l 208 393 l 208 0 l 0 0 l 0 1013 l 491 1013 q 720 944 630 1013 q 819 734 819 869 q 778 584 819 654 q 664 485 738 513 q 757 415 727 463 q 794 231 794 358 l 794 170 q 800 84 794 116 q 836 31 806 51 l 836 0 m 462 838 l 208 838 l 208 572 l 452 572 q 562 604 517 572 q 612 704 612 640 q 568 801 612 765 q 462 838 525 838 "},"o":{"x_min":0,"x_max":764,"ha":871,"o":"m 380 -26 q 105 86 211 -26 q 0 371 0 199 q 104 660 0 545 q 380 775 209 775 q 658 659 552 775 q 764 371 764 544 q 658 86 764 199 q 380 -26 552 -26 m 379 141 q 515 216 466 141 q 557 373 557 280 q 515 530 557 465 q 379 607 466 607 q 245 530 294 607 q 204 373 204 465 q 245 217 204 282 q 379 141 294 141 "},"K":{"x_min":0,"x_max":900,"ha":996,"o":"m 900 0 l 647 0 l 316 462 l 208 355 l 208 0 l 0 0 l 0 1013 l 208 1013 l 208 595 l 604 1013 l 863 1013 l 461 603 l 900 0 "},",":{"x_min":0,"x_max":206,"ha":303,"o":"m 206 5 q 150 -151 206 -88 q 0 -238 94 -213 l 0 -159 q 84 -100 56 -137 q 111 -2 111 -62 l 0 -2 l 0 205 l 206 205 l 206 5 "},"d":{"x_min":0,"x_max":722,"ha":836,"o":"m 722 0 l 530 0 l 530 101 q 303 -26 449 -26 q 72 103 155 -26 q 0 373 0 214 q 72 642 0 528 q 305 775 156 775 q 433 743 373 775 q 530 656 492 712 l 530 1013 l 722 1013 l 722 0 m 361 600 q 234 523 280 600 q 196 372 196 458 q 233 220 196 286 q 358 143 278 143 q 489 216 442 143 q 530 369 530 280 q 491 522 530 456 q 361 600 443 600 "},"¨":{"x_min":212,"x_max":609,"ha":933,"o":"m 609 1046 l 453 1046 l 453 1216 l 609 1216 l 609 1046 m 369 1046 l 212 1046 l 212 1216 l 369 1216 l 369 1046 "},"E":{"x_min":0,"x_max":761.109375,"ha":824,"o":"m 761 0 l 0 0 l 0 1013 l 734 1013 l 734 837 l 206 837 l 206 621 l 690 621 l 690 446 l 206 446 l 206 186 l 761 186 l 761 0 "},"Y":{"x_min":0,"x_max":836,"ha":931,"o":"m 836 1013 l 532 376 l 532 0 l 322 0 l 322 376 l 0 1013 l 208 1013 l 427 576 l 626 1013 l 836 1013 "},"\\"":{"x_min":0,"x_max":357,"ha":454,"o":"m 357 604 l 225 604 l 225 988 l 357 988 l 357 604 m 132 604 l 0 604 l 0 988 l 132 988 l 132 604 "},"‹":{"x_min":35.984375,"x_max":791.671875,"ha":828,"o":"m 791 17 l 36 352 l 35 487 l 791 823 l 791 672 l 229 421 l 791 168 l 791 17 "},"„":{"x_min":0,"x_max":483,"ha":588,"o":"m 206 5 q 150 -151 206 -88 q 0 -238 94 -213 l 0 -159 q 84 -100 56 -137 q 111 -2 111 -62 l 0 -2 l 0 205 l 206 205 l 206 5 m 483 5 q 427 -151 483 -88 q 277 -238 371 -213 l 277 -159 q 361 -100 334 -137 q 388 -2 388 -62 l 277 -2 l 277 205 l 483 205 l 483 5 "},"δ":{"x_min":6,"x_max":732,"ha":835,"o":"m 732 352 q 630 76 732 177 q 354 -25 529 -25 q 101 74 197 -25 q 6 333 6 174 q 89 581 6 480 q 323 690 178 690 q 66 864 201 787 l 66 1013 l 669 1013 l 669 856 l 348 856 q 532 729 461 789 q 673 566 625 651 q 732 352 732 465 m 419 551 q 259 496 321 551 q 198 344 198 441 q 238 208 198 267 q 357 140 283 140 q 484 203 437 140 q 526 344 526 260 q 499 466 526 410 q 419 551 473 521 "},"έ":{"x_min":16.671875,"x_max":652.78125,"ha":742,"o":"m 652 259 q 565 49 652 123 q 340 -25 479 -25 q 102 39 188 -25 q 16 197 16 104 q 45 299 16 250 q 134 390 75 348 q 58 456 86 419 q 25 552 25 502 q 120 717 25 653 q 322 776 208 776 q 537 710 456 776 q 625 508 625 639 l 445 508 q 415 585 445 563 q 327 608 386 608 q 254 590 293 608 q 215 544 215 573 q 252 469 215 490 q 336 453 280 453 q 369 455 347 453 q 400 456 391 456 l 400 308 l 329 308 q 247 291 280 308 q 204 223 204 269 q 255 154 204 172 q 345 143 286 143 q 426 174 398 143 q 454 259 454 206 l 652 259 m 579 1039 l 377 823 l 279 823 l 401 1039 l 579 1039 "},"ω":{"x_min":0,"x_max":945,"ha":1051,"o":"m 565 323 l 565 289 q 577 190 565 221 q 651 142 597 142 q 718 189 694 142 q 742 365 742 237 q 703 565 742 462 q 610 749 671 650 l 814 749 q 910 547 876 650 q 945 337 945 444 q 874 96 945 205 q 668 -29 793 -29 q 551 0 608 -29 q 470 78 495 30 q 390 0 444 28 q 276 -29 337 -29 q 69 96 149 -29 q 0 337 0 204 q 36 553 0 444 q 130 749 68 650 l 334 749 q 241 565 273 650 q 203 365 203 461 q 219 222 203 279 q 292 142 243 142 q 360 183 342 142 q 373 271 373 211 q 372 298 372 285 q 372 323 372 311 l 372 528 l 566 528 l 565 323 "},"´":{"x_min":0,"x_max":132,"ha":299,"o":"m 132 604 l 0 604 l 0 988 l 132 988 l 132 604 "},"±":{"x_min":29,"x_max":798,"ha":828,"o":"m 798 480 l 484 480 l 484 254 l 344 254 l 344 480 l 29 480 l 29 615 l 344 615 l 344 842 l 484 842 l 484 615 l 798 615 l 798 480 m 798 0 l 29 0 l 29 136 l 798 136 l 798 0 "},"|":{"x_min":0,"x_max":143,"ha":240,"o":"m 143 462 l 0 462 l 0 984 l 143 984 l 143 462 m 143 -242 l 0 -242 l 0 280 l 143 280 l 143 -242 "},"ϋ":{"x_min":0,"x_max":656,"ha":767,"o":"m 535 810 l 406 810 l 406 952 l 535 952 l 535 810 m 271 810 l 142 810 l 142 952 l 271 952 l 271 810 m 656 417 q 568 55 656 146 q 326 -25 490 -25 q 59 97 137 -25 q 0 369 0 192 l 0 748 l 200 748 l 200 369 q 216 222 200 268 q 326 142 245 142 q 440 247 411 142 q 456 422 456 304 l 456 748 l 656 748 l 656 417 "},"§":{"x_min":0,"x_max":633,"ha":731,"o":"m 633 469 q 601 356 633 406 q 512 274 569 305 q 570 197 548 242 q 593 105 593 152 q 501 -76 593 -5 q 301 -142 416 -142 q 122 -82 193 -142 q 43 108 43 -15 l 212 108 q 251 27 220 53 q 321 1 283 1 q 389 23 360 1 q 419 83 419 46 q 310 194 419 139 q 108 297 111 295 q 0 476 0 372 q 33 584 0 537 q 120 659 62 626 q 72 720 91 686 q 53 790 53 755 q 133 978 53 908 q 312 1042 207 1042 q 483 984 412 1042 q 574 807 562 921 l 409 807 q 379 875 409 851 q 307 900 349 900 q 244 881 270 900 q 218 829 218 862 q 324 731 218 781 q 524 636 506 647 q 633 469 633 565 m 419 334 q 473 411 473 372 q 451 459 473 436 q 390 502 430 481 l 209 595 q 167 557 182 577 q 153 520 153 537 q 187 461 153 491 q 263 413 212 440 l 419 334 "},"b":{"x_min":0,"x_max":722,"ha":822,"o":"m 416 -26 q 289 6 346 -26 q 192 101 232 39 l 192 0 l 0 0 l 0 1013 l 192 1013 l 192 656 q 286 743 226 712 q 415 775 346 775 q 649 644 564 775 q 722 374 722 533 q 649 106 722 218 q 416 -26 565 -26 m 361 600 q 232 524 279 600 q 192 371 192 459 q 229 221 192 284 q 357 145 275 145 q 487 221 441 145 q 526 374 526 285 q 488 523 526 460 q 361 600 442 600 "},"q":{"x_min":0,"x_max":722,"ha":833,"o":"m 722 -298 l 530 -298 l 530 97 q 306 -25 449 -25 q 73 104 159 -25 q 0 372 0 216 q 72 643 0 529 q 305 775 156 775 q 430 742 371 775 q 530 654 488 709 l 530 750 l 722 750 l 722 -298 m 360 601 q 234 527 278 601 q 197 378 197 466 q 233 225 197 291 q 357 144 277 144 q 488 217 441 144 q 530 370 530 282 q 491 523 530 459 q 360 601 443 601 "},"Ω":{"x_min":-0.03125,"x_max":1008.53125,"ha":1108,"o":"m 1008 0 l 589 0 l 589 199 q 717 368 670 265 q 764 580 764 471 q 698 778 764 706 q 504 855 629 855 q 311 773 380 855 q 243 563 243 691 q 289 360 243 458 q 419 199 336 262 l 419 0 l 0 0 l 0 176 l 202 176 q 77 355 123 251 q 32 569 32 459 q 165 908 32 776 q 505 1040 298 1040 q 844 912 711 1040 q 977 578 977 785 q 931 362 977 467 q 805 176 886 256 l 1008 176 l 1008 0 "},"ύ":{"x_min":0,"x_max":656,"ha":767,"o":"m 656 417 q 568 55 656 146 q 326 -25 490 -25 q 59 97 137 -25 q 0 369 0 192 l 0 748 l 200 748 l 201 369 q 218 222 201 269 q 326 142 245 142 q 440 247 411 142 q 456 422 456 304 l 456 748 l 656 748 l 656 417 m 579 1039 l 378 823 l 279 823 l 401 1039 l 579 1039 "},"z":{"x_min":0,"x_max":663.890625,"ha":753,"o":"m 663 0 l 0 0 l 0 154 l 411 591 l 25 591 l 25 749 l 650 749 l 650 584 l 245 165 l 663 165 l 663 0 "},"™":{"x_min":0,"x_max":951,"ha":1063,"o":"m 405 921 l 255 921 l 255 506 l 149 506 l 149 921 l 0 921 l 0 1013 l 405 1013 l 405 921 m 951 506 l 852 506 l 852 916 l 750 506 l 643 506 l 539 915 l 539 506 l 442 506 l 442 1013 l 595 1012 l 695 625 l 794 1013 l 951 1013 l 951 506 "},"ή":{"x_min":0,"x_max":669,"ha":779,"o":"m 669 -278 l 469 -278 l 469 390 q 448 526 469 473 q 348 606 417 606 q 244 553 288 606 q 201 441 201 501 l 201 0 l 0 0 l 0 749 l 201 749 l 201 665 q 301 744 244 715 q 423 774 359 774 q 606 685 538 774 q 669 484 669 603 l 669 -278 m 495 1039 l 293 823 l 195 823 l 317 1039 l 495 1039 "},"Θ":{"x_min":0,"x_max":993,"ha":1092,"o":"m 497 -29 q 133 127 272 -29 q 0 505 0 277 q 133 883 0 733 q 497 1040 272 1040 q 861 883 722 1040 q 993 505 993 733 q 861 127 993 277 q 497 -29 722 -29 m 497 154 q 711 266 631 154 q 782 506 782 367 q 712 746 782 648 q 497 858 634 858 q 281 746 361 858 q 211 506 211 648 q 280 266 211 365 q 497 154 359 154 m 676 430 l 316 430 l 316 593 l 676 593 l 676 430 "},"®":{"x_min":3,"x_max":1007,"ha":1104,"o":"m 507 -6 q 129 153 269 -6 q 3 506 3 298 q 127 857 3 713 q 502 1017 266 1017 q 880 855 740 1017 q 1007 502 1007 711 q 882 152 1007 295 q 507 -6 743 -6 m 502 934 q 184 800 302 934 q 79 505 79 680 q 184 210 79 331 q 501 76 302 76 q 819 210 701 76 q 925 507 925 331 q 820 800 925 682 q 502 934 704 934 m 782 190 l 639 190 q 627 225 632 202 q 623 285 623 248 l 623 326 q 603 411 623 384 q 527 439 584 439 l 388 439 l 388 190 l 257 190 l 257 829 l 566 829 q 709 787 654 829 q 772 654 772 740 q 746 559 772 604 q 675 497 720 514 q 735 451 714 483 q 756 341 756 419 l 756 299 q 760 244 756 265 q 782 212 764 223 l 782 190 m 546 718 l 388 718 l 388 552 l 541 552 q 612 572 584 552 q 641 635 641 593 q 614 695 641 672 q 546 718 587 718 "},"~":{"x_min":0,"x_max":851,"ha":949,"o":"m 851 968 q 795 750 851 831 q 599 656 730 656 q 406 744 506 656 q 259 832 305 832 q 162 775 193 832 q 139 656 139 730 l 0 656 q 58 871 0 787 q 251 968 124 968 q 442 879 341 968 q 596 791 544 791 q 691 849 663 791 q 712 968 712 892 l 851 968 "},"Ε":{"x_min":0,"x_max":761.546875,"ha":824,"o":"m 761 0 l 0 0 l 0 1012 l 735 1012 l 735 836 l 206 836 l 206 621 l 690 621 l 690 446 l 206 446 l 206 186 l 761 186 l 761 0 "},"³":{"x_min":0,"x_max":467,"ha":564,"o":"m 467 555 q 393 413 467 466 q 229 365 325 365 q 70 413 134 365 q 0 565 0 467 l 123 565 q 163 484 131 512 q 229 461 190 461 q 299 486 269 461 q 329 553 329 512 q 281 627 329 607 q 187 641 248 641 l 187 722 q 268 737 237 722 q 312 804 312 758 q 285 859 312 837 q 224 882 259 882 q 165 858 189 882 q 135 783 140 834 l 12 783 q 86 930 20 878 q 230 976 145 976 q 379 931 314 976 q 444 813 444 887 q 423 744 444 773 q 365 695 402 716 q 439 640 412 676 q 467 555 467 605 "},"[":{"x_min":0,"x_max":347.21875,"ha":444,"o":"m 347 -300 l 0 -300 l 0 1013 l 347 1013 l 347 866 l 188 866 l 188 -154 l 347 -154 l 347 -300 "},"L":{"x_min":0,"x_max":704.171875,"ha":763,"o":"m 704 0 l 0 0 l 0 1013 l 208 1013 l 208 186 l 704 186 l 704 0 "},"σ":{"x_min":0,"x_max":851.3125,"ha":940,"o":"m 851 594 l 712 594 q 761 369 761 485 q 658 83 761 191 q 379 -25 555 -25 q 104 87 208 -25 q 0 372 0 200 q 103 659 0 544 q 378 775 207 775 q 464 762 407 775 q 549 750 521 750 l 851 750 l 851 594 m 379 142 q 515 216 466 142 q 557 373 557 280 q 515 530 557 465 q 379 608 465 608 q 244 530 293 608 q 203 373 203 465 q 244 218 203 283 q 379 142 293 142 "},"ζ":{"x_min":0,"x_max":622,"ha":701,"o":"m 622 -32 q 604 -158 622 -98 q 551 -278 587 -218 l 373 -278 q 426 -180 406 -229 q 446 -80 446 -131 q 421 -22 446 -37 q 354 -8 397 -8 q 316 -9 341 -8 q 280 -11 291 -11 q 75 69 150 -11 q 0 283 0 150 q 87 596 0 437 q 291 856 162 730 l 47 856 l 47 1013 l 592 1013 l 592 904 q 317 660 422 800 q 197 318 197 497 q 306 141 197 169 q 510 123 408 131 q 622 -32 622 102 "},"θ":{"x_min":0,"x_max":714,"ha":817,"o":"m 357 1022 q 633 833 534 1022 q 714 486 714 679 q 634 148 714 288 q 354 -25 536 -25 q 79 147 175 -25 q 0 481 0 288 q 79 831 0 679 q 357 1022 177 1022 m 510 590 q 475 763 510 687 q 351 862 430 862 q 233 763 272 862 q 204 590 204 689 l 510 590 m 510 440 l 204 440 q 233 251 204 337 q 355 131 274 131 q 478 248 434 131 q 510 440 510 337 "},"Ο":{"x_min":0,"x_max":995,"ha":1092,"o":"m 497 -29 q 133 127 272 -29 q 0 505 0 277 q 132 883 0 733 q 497 1040 270 1040 q 861 883 722 1040 q 995 505 995 733 q 862 127 995 277 q 497 -29 724 -29 m 497 154 q 711 266 632 154 q 781 506 781 365 q 711 745 781 647 q 497 857 632 857 q 283 747 361 857 q 213 506 213 647 q 282 266 213 365 q 497 154 361 154 "},"Γ":{"x_min":0,"x_max":703.84375,"ha":742,"o":"m 703 836 l 208 836 l 208 0 l 0 0 l 0 1012 l 703 1012 l 703 836 "}," ":{"x_min":0,"x_max":0,"ha":375},"%":{"x_min":0,"x_max":1111,"ha":1213,"o":"m 861 484 q 1048 404 979 484 q 1111 228 1111 332 q 1048 51 1111 123 q 859 -29 979 -29 q 672 50 740 -29 q 610 227 610 122 q 672 403 610 331 q 861 484 741 484 m 861 120 q 939 151 911 120 q 967 226 967 183 q 942 299 967 270 q 861 333 912 333 q 783 301 811 333 q 756 226 756 269 q 783 151 756 182 q 861 120 810 120 m 904 984 l 316 -28 l 205 -29 l 793 983 l 904 984 m 250 984 q 436 904 366 984 q 499 730 499 832 q 436 552 499 626 q 248 472 366 472 q 62 552 132 472 q 0 728 0 624 q 62 903 0 831 q 250 984 132 984 m 249 835 q 169 801 198 835 q 140 725 140 768 q 167 652 140 683 q 247 621 195 621 q 327 654 298 621 q 357 730 357 687 q 329 803 357 772 q 249 835 301 835 "},"P":{"x_min":0,"x_max":771,"ha":838,"o":"m 208 361 l 208 0 l 0 0 l 0 1013 l 450 1013 q 682 919 593 1013 q 771 682 771 826 q 687 452 771 544 q 466 361 604 361 l 208 361 m 421 837 l 208 837 l 208 544 l 410 544 q 525 579 480 544 q 571 683 571 615 q 527 792 571 747 q 421 837 484 837 "},"Έ":{"x_min":0,"x_max":1172.546875,"ha":1235,"o":"m 1172 0 l 411 0 l 411 1012 l 1146 1012 l 1146 836 l 617 836 l 617 621 l 1101 621 l 1101 446 l 617 446 l 617 186 l 1172 186 l 1172 0 m 313 1035 l 98 780 l 0 780 l 136 1035 l 313 1035 "},"Ώ":{"x_min":0.4375,"x_max":1189.546875,"ha":1289,"o":"m 1189 0 l 770 0 l 770 199 q 897 369 849 263 q 945 580 945 474 q 879 778 945 706 q 685 855 810 855 q 492 773 561 855 q 424 563 424 691 q 470 360 424 458 q 600 199 517 262 l 600 0 l 180 0 l 180 176 l 383 176 q 258 355 304 251 q 213 569 213 459 q 346 908 213 776 q 686 1040 479 1040 q 1025 912 892 1040 q 1158 578 1158 785 q 1112 362 1158 467 q 986 176 1067 256 l 1189 176 l 1189 0 m 314 1092 l 99 837 l 0 837 l 136 1092 l 314 1092 "},"_":{"x_min":61.109375,"x_max":766.671875,"ha":828,"o":"m 766 -333 l 61 -333 l 61 -190 l 766 -190 l 766 -333 "},"Ϊ":{"x_min":-56,"x_max":342,"ha":503,"o":"m 342 1046 l 186 1046 l 186 1215 l 342 1215 l 342 1046 m 101 1046 l -56 1046 l -56 1215 l 101 1215 l 101 1046 m 249 0 l 41 0 l 41 1012 l 249 1012 l 249 0 "},"+":{"x_min":43,"x_max":784,"ha":828,"o":"m 784 353 l 483 353 l 483 0 l 343 0 l 343 353 l 43 353 l 43 489 l 343 489 l 343 840 l 483 840 l 483 489 l 784 489 l 784 353 "},"½":{"x_min":0,"x_max":1090,"ha":1188,"o":"m 1090 380 q 992 230 1090 301 q 779 101 886 165 q 822 94 784 95 q 924 93 859 93 l 951 93 l 973 93 l 992 93 l 1009 93 q 1046 93 1027 93 q 1085 93 1066 93 l 1085 0 l 650 0 l 654 38 q 815 233 665 137 q 965 376 965 330 q 936 436 965 412 q 869 461 908 461 q 806 435 831 461 q 774 354 780 409 l 659 354 q 724 505 659 451 q 870 554 783 554 q 1024 506 958 554 q 1090 380 1090 459 m 868 998 l 268 -28 l 154 -27 l 757 999 l 868 998 m 272 422 l 147 422 l 147 799 l 0 799 l 0 875 q 126 900 91 875 q 170 973 162 926 l 272 973 l 272 422 "},"Ρ":{"x_min":0,"x_max":771,"ha":838,"o":"m 208 361 l 208 0 l 0 0 l 0 1012 l 450 1012 q 682 919 593 1012 q 771 681 771 826 q 687 452 771 544 q 466 361 604 361 l 208 361 m 422 836 l 209 836 l 209 544 l 410 544 q 525 579 480 544 q 571 683 571 614 q 527 791 571 747 q 422 836 484 836 "},"\'":{"x_min":0,"x_max":192,"ha":289,"o":"m 192 834 q 137 692 192 751 q 0 626 82 632 l 0 697 q 101 830 101 726 l 0 830 l 0 1013 l 192 1013 l 192 834 "},"ª":{"x_min":0,"x_max":350,"ha":393,"o":"m 350 625 l 245 625 q 237 648 241 636 q 233 672 233 661 q 117 611 192 611 q 33 643 66 611 q 0 727 0 675 q 116 846 0 828 q 233 886 233 864 q 211 919 233 907 q 168 931 190 931 q 108 877 108 931 l 14 877 q 56 977 14 942 q 165 1013 98 1013 q 270 987 224 1013 q 329 903 329 955 l 329 694 q 332 661 329 675 q 350 641 336 648 l 350 625 m 233 774 l 233 809 q 151 786 180 796 q 97 733 97 768 q 111 700 97 712 q 149 689 126 689 q 210 713 187 689 q 233 774 233 737 "},"΅":{"x_min":57,"x_max":584,"ha":753,"o":"m 584 810 l 455 810 l 455 952 l 584 952 l 584 810 m 521 1064 l 305 810 l 207 810 l 343 1064 l 521 1064 m 186 810 l 57 810 l 57 952 l 186 952 l 186 810 "},"T":{"x_min":0,"x_max":809,"ha":894,"o":"m 809 831 l 509 831 l 509 0 l 299 0 l 299 831 l 0 831 l 0 1013 l 809 1013 l 809 831 "},"Φ":{"x_min":0,"x_max":949,"ha":1032,"o":"m 566 0 l 385 0 l 385 121 q 111 230 222 121 q 0 508 0 340 q 112 775 0 669 q 385 892 219 875 l 385 1013 l 566 1013 l 566 892 q 836 776 732 875 q 949 507 949 671 q 838 231 949 341 q 566 121 728 121 l 566 0 m 566 285 q 701 352 650 285 q 753 508 753 419 q 703 658 753 597 q 566 729 653 720 l 566 285 m 385 285 l 385 729 q 245 661 297 717 q 193 516 193 604 q 246 356 193 427 q 385 285 300 285 "},"j":{"x_min":-45.828125,"x_max":242,"ha":361,"o":"m 242 830 l 42 830 l 42 1013 l 242 1013 l 242 830 m 242 -119 q 180 -267 242 -221 q 20 -308 127 -308 l -45 -308 l -45 -140 l -24 -140 q 25 -130 8 -140 q 42 -88 42 -120 l 42 748 l 242 748 l 242 -119 "},"Σ":{"x_min":0,"x_max":772.21875,"ha":849,"o":"m 772 0 l 0 0 l 0 140 l 368 526 l 18 862 l 18 1012 l 740 1012 l 740 836 l 315 836 l 619 523 l 298 175 l 772 175 l 772 0 "},"›":{"x_min":36.109375,"x_max":792,"ha":828,"o":"m 792 352 l 36 17 l 36 168 l 594 420 l 36 672 l 36 823 l 792 487 l 792 352 "},"<":{"x_min":35.984375,"x_max":791.671875,"ha":828,"o":"m 791 17 l 36 352 l 35 487 l 791 823 l 791 672 l 229 421 l 791 168 l 791 17 "},"£":{"x_min":0,"x_max":716.546875,"ha":814,"o":"m 716 38 q 603 -9 658 5 q 502 -24 548 -24 q 398 -10 451 -24 q 239 25 266 25 q 161 12 200 25 q 77 -29 122 0 l 0 113 q 110 211 81 174 q 151 315 151 259 q 117 440 151 365 l 0 440 l 0 515 l 73 515 q 35 610 52 560 q 15 710 15 671 q 119 910 15 831 q 349 984 216 984 q 570 910 480 984 q 693 668 674 826 l 501 668 q 455 791 501 746 q 353 830 414 830 q 256 795 298 830 q 215 705 215 760 q 249 583 215 655 q 283 515 266 548 l 479 515 l 479 440 l 309 440 q 316 394 313 413 q 319 355 319 374 q 287 241 319 291 q 188 135 263 205 q 262 160 225 152 q 332 168 298 168 q 455 151 368 168 q 523 143 500 143 q 588 152 558 143 q 654 189 617 162 l 716 38 "},"t":{"x_min":0,"x_max":412,"ha":511,"o":"m 412 -6 q 349 -8 391 -6 q 287 -11 307 -11 q 137 38 177 -11 q 97 203 97 87 l 97 609 l 0 609 l 0 749 l 97 749 l 97 951 l 297 951 l 297 749 l 412 749 l 412 609 l 297 609 l 297 191 q 315 152 297 162 q 366 143 334 143 q 389 143 378 143 q 412 143 400 143 l 412 -6 "},"¬":{"x_min":0,"x_max":704,"ha":801,"o":"m 704 93 l 551 93 l 551 297 l 0 297 l 0 450 l 704 450 l 704 93 "},"λ":{"x_min":0,"x_max":701.390625,"ha":775,"o":"m 701 0 l 491 0 l 345 444 l 195 0 l 0 0 l 238 697 l 131 1013 l 334 1013 l 701 0 "},"W":{"x_min":0,"x_max":1291.671875,"ha":1399,"o":"m 1291 1013 l 1002 0 l 802 0 l 645 777 l 490 0 l 288 0 l 0 1013 l 215 1013 l 388 298 l 534 1012 l 757 1013 l 904 299 l 1076 1013 l 1291 1013 "},">":{"x_min":36.109375,"x_max":792,"ha":828,"o":"m 792 352 l 36 17 l 36 168 l 594 420 l 36 672 l 36 823 l 792 487 l 792 352 "},"v":{"x_min":0,"x_max":740.28125,"ha":828,"o":"m 740 749 l 473 0 l 266 0 l 0 749 l 222 749 l 373 211 l 529 749 l 740 749 "},"τ":{"x_min":0.28125,"x_max":618.734375,"ha":699,"o":"m 618 593 l 409 593 l 409 0 l 210 0 l 210 593 l 0 593 l 0 749 l 618 749 l 618 593 "},"ξ":{"x_min":0,"x_max":640,"ha":715,"o":"m 640 -14 q 619 -157 640 -84 q 563 -299 599 -230 l 399 -299 q 442 -194 433 -223 q 468 -85 468 -126 q 440 -25 468 -41 q 368 -10 412 -10 q 333 -11 355 -10 q 302 -13 311 -13 q 91 60 179 -13 q 0 259 0 138 q 56 426 0 354 q 201 530 109 493 q 106 594 144 553 q 65 699 65 642 q 94 787 65 747 q 169 856 123 828 l 22 856 l 22 1013 l 597 1013 l 597 856 l 497 857 q 345 840 398 857 q 257 736 257 812 q 366 614 257 642 q 552 602 416 602 l 552 446 l 513 446 q 313 425 379 446 q 199 284 199 389 q 312 162 199 184 q 524 136 418 148 q 640 -14 640 105 "},"&":{"x_min":-1,"x_max":910.109375,"ha":1007,"o":"m 910 -1 l 676 -1 l 607 83 q 291 -47 439 -47 q 50 100 135 -47 q -1 273 -1 190 q 51 431 -1 357 q 218 568 104 505 q 151 661 169 629 q 120 769 120 717 q 201 951 120 885 q 382 1013 276 1013 q 555 957 485 1013 q 635 789 635 894 q 584 644 635 709 q 468 539 548 597 l 615 359 q 664 527 654 440 l 844 527 q 725 223 824 359 l 910 -1 m 461 787 q 436 848 461 826 q 381 870 412 870 q 325 849 349 870 q 301 792 301 829 q 324 719 301 757 q 372 660 335 703 q 430 714 405 680 q 461 787 461 753 m 500 214 l 318 441 q 198 286 198 363 q 225 204 198 248 q 347 135 268 135 q 425 153 388 135 q 500 214 462 172 "},"Λ":{"x_min":0,"x_max":894.453125,"ha":974,"o":"m 894 0 l 666 0 l 447 757 l 225 0 l 0 0 l 344 1013 l 547 1013 l 894 0 "},"I":{"x_min":41,"x_max":249,"ha":365,"o":"m 249 0 l 41 0 l 41 1013 l 249 1013 l 249 0 "},"G":{"x_min":0,"x_max":971,"ha":1057,"o":"m 971 -1 l 829 -1 l 805 118 q 479 -29 670 -29 q 126 133 261 -29 q 0 509 0 286 q 130 884 0 737 q 493 1040 268 1040 q 790 948 659 1040 q 961 698 920 857 l 736 698 q 643 813 709 769 q 500 857 578 857 q 285 746 364 857 q 213 504 213 644 q 285 263 213 361 q 505 154 365 154 q 667 217 598 154 q 761 374 736 280 l 548 374 l 548 548 l 971 548 l 971 -1 "},"ΰ":{"x_min":0,"x_max":655,"ha":767,"o":"m 583 810 l 454 810 l 454 952 l 583 952 l 583 810 m 186 810 l 57 809 l 57 952 l 186 952 l 186 810 m 516 1039 l 315 823 l 216 823 l 338 1039 l 516 1039 m 655 417 q 567 55 655 146 q 326 -25 489 -25 q 59 97 137 -25 q 0 369 0 192 l 0 748 l 200 748 l 201 369 q 218 222 201 269 q 326 142 245 142 q 439 247 410 142 q 455 422 455 304 l 455 748 l 655 748 l 655 417 "},"`":{"x_min":0,"x_max":190,"ha":288,"o":"m 190 654 l 0 654 l 0 830 q 55 970 0 909 q 190 1040 110 1031 l 190 969 q 111 922 134 952 q 88 836 88 892 l 190 836 l 190 654 "},"·":{"x_min":0,"x_max":207,"ha":304,"o":"m 207 528 l 0 528 l 0 735 l 207 735 l 207 528 "},"Υ":{"x_min":-0.21875,"x_max":836.171875,"ha":914,"o":"m 836 1013 l 532 376 l 532 0 l 322 0 l 322 376 l 0 1013 l 208 1013 l 427 576 l 626 1013 l 836 1013 "},"r":{"x_min":0,"x_max":431.9375,"ha":513,"o":"m 431 564 q 269 536 320 564 q 200 395 200 498 l 200 0 l 0 0 l 0 748 l 183 748 l 183 618 q 285 731 224 694 q 431 768 345 768 l 431 564 "},"x":{"x_min":0,"x_max":738.890625,"ha":826,"o":"m 738 0 l 504 0 l 366 238 l 230 0 l 0 0 l 252 382 l 11 749 l 238 749 l 372 522 l 502 749 l 725 749 l 488 384 l 738 0 "},"μ":{"x_min":0,"x_max":647,"ha":754,"o":"m 647 0 l 477 0 l 477 68 q 411 9 448 30 q 330 -11 374 -11 q 261 3 295 -11 q 199 43 226 18 l 199 -278 l 0 -278 l 0 749 l 199 749 l 199 358 q 216 222 199 268 q 322 152 244 152 q 435 240 410 152 q 448 401 448 283 l 448 749 l 647 749 l 647 0 "},"h":{"x_min":0,"x_max":669,"ha":782,"o":"m 669 0 l 469 0 l 469 390 q 449 526 469 472 q 353 607 420 607 q 248 554 295 607 q 201 441 201 501 l 201 0 l 0 0 l 0 1013 l 201 1013 l 201 665 q 303 743 245 715 q 425 772 362 772 q 609 684 542 772 q 669 484 669 605 l 669 0 "},".":{"x_min":0,"x_max":206,"ha":303,"o":"m 206 0 l 0 0 l 0 207 l 206 207 l 206 0 "},"φ":{"x_min":-1,"x_max":921,"ha":990,"o":"m 542 -278 l 367 -278 l 367 -22 q 99 92 200 -22 q -1 376 -1 206 q 72 627 -1 520 q 288 769 151 742 l 288 581 q 222 495 243 550 q 202 378 202 439 q 240 228 202 291 q 367 145 285 157 l 367 776 l 515 776 q 807 667 694 776 q 921 379 921 558 q 815 93 921 209 q 542 -22 709 -22 l 542 -278 m 542 145 q 672 225 625 145 q 713 381 713 291 q 671 536 713 470 q 542 611 624 611 l 542 145 "},";":{"x_min":0,"x_max":208,"ha":306,"o":"m 208 528 l 0 528 l 0 735 l 208 735 l 208 528 m 208 6 q 152 -151 208 -89 q 0 -238 96 -212 l 0 -158 q 87 -100 61 -136 q 113 0 113 -65 l 0 0 l 0 207 l 208 207 l 208 6 "},"f":{"x_min":0,"x_max":424,"ha":525,"o":"m 424 609 l 300 609 l 300 0 l 107 0 l 107 609 l 0 609 l 0 749 l 107 749 q 145 949 107 894 q 328 1019 193 1019 l 424 1015 l 424 855 l 362 855 q 312 841 324 855 q 300 797 300 827 q 300 773 300 786 q 300 749 300 761 l 424 749 l 424 609 "},"“":{"x_min":0,"x_max":468,"ha":567,"o":"m 190 631 l 0 631 l 0 807 q 55 947 0 885 q 190 1017 110 1010 l 190 947 q 88 813 88 921 l 190 813 l 190 631 m 468 631 l 278 631 l 278 807 q 333 947 278 885 q 468 1017 388 1010 l 468 947 q 366 813 366 921 l 468 813 l 468 631 "},"A":{"x_min":0,"x_max":966.671875,"ha":1069,"o":"m 966 0 l 747 0 l 679 208 l 286 208 l 218 0 l 0 0 l 361 1013 l 600 1013 l 966 0 m 623 376 l 480 810 l 340 376 l 623 376 "},"‘":{"x_min":0,"x_max":190,"ha":289,"o":"m 190 631 l 0 631 l 0 807 q 55 947 0 885 q 190 1017 110 1010 l 190 947 q 88 813 88 921 l 190 813 l 190 631 "},"ϊ":{"x_min":-55,"x_max":337,"ha":389,"o":"m 337 810 l 208 810 l 208 952 l 337 952 l 337 810 m 74 810 l -55 810 l -55 952 l 74 952 l 74 810 m 242 0 l 42 0 l 42 748 l 242 748 l 242 0 "},"π":{"x_min":0.5,"x_max":838.890625,"ha":938,"o":"m 838 593 l 750 593 l 750 0 l 549 0 l 549 593 l 287 593 l 287 0 l 88 0 l 88 593 l 0 593 l 0 749 l 838 749 l 838 593 "},"ά":{"x_min":-1,"x_max":722,"ha":835,"o":"m 722 0 l 531 0 l 530 101 q 433 8 491 41 q 304 -25 375 -25 q 72 104 157 -25 q -1 372 -1 216 q 72 643 -1 530 q 308 775 158 775 q 433 744 375 775 q 528 656 491 713 l 528 749 l 722 749 l 722 0 m 361 601 q 233 527 277 601 q 196 375 196 464 q 232 224 196 288 q 358 144 277 144 q 487 217 441 144 q 528 370 528 281 q 489 523 528 457 q 361 601 443 601 m 579 1039 l 377 823 l 279 823 l 401 1039 l 579 1039 "},"O":{"x_min":0,"x_max":994,"ha":1094,"o":"m 497 -29 q 133 127 272 -29 q 0 505 0 277 q 131 883 0 733 q 497 1040 270 1040 q 860 883 721 1040 q 994 505 994 733 q 862 127 994 277 q 497 -29 723 -29 m 497 154 q 710 266 631 154 q 780 506 780 365 q 710 745 780 647 q 497 857 631 857 q 283 747 361 857 q 213 506 213 647 q 282 266 213 365 q 497 154 361 154 "},"n":{"x_min":0,"x_max":669,"ha":782,"o":"m 669 0 l 469 0 l 469 452 q 442 553 469 513 q 352 601 412 601 q 245 553 290 601 q 200 441 200 505 l 200 0 l 0 0 l 0 748 l 194 748 l 194 659 q 289 744 230 713 q 416 775 349 775 q 600 700 531 775 q 669 509 669 626 l 669 0 "},"l":{"x_min":41,"x_max":240,"ha":363,"o":"m 240 0 l 41 0 l 41 1013 l 240 1013 l 240 0 "},"¤":{"x_min":40.265625,"x_max":727.203125,"ha":825,"o":"m 727 792 l 594 659 q 620 552 620 609 q 598 459 620 504 l 725 331 l 620 224 l 491 352 q 382 331 443 331 q 273 352 322 331 l 144 224 l 40 330 l 167 459 q 147 552 147 501 q 172 658 147 608 l 40 794 l 147 898 l 283 759 q 383 776 330 776 q 482 759 434 776 l 620 898 l 727 792 m 383 644 q 308 617 334 644 q 283 551 283 590 q 309 489 283 517 q 381 462 335 462 q 456 488 430 462 q 482 554 482 515 q 455 616 482 588 q 383 644 429 644 "},"κ":{"x_min":0,"x_max":691.84375,"ha":779,"o":"m 691 0 l 479 0 l 284 343 l 196 252 l 196 0 l 0 0 l 0 749 l 196 749 l 196 490 l 440 749 l 677 749 l 416 479 l 691 0 "},"p":{"x_min":0,"x_max":722,"ha":824,"o":"m 415 -26 q 287 4 346 -26 q 192 92 228 34 l 192 -298 l 0 -298 l 0 750 l 192 750 l 192 647 q 289 740 230 706 q 416 775 347 775 q 649 645 566 775 q 722 375 722 534 q 649 106 722 218 q 415 -26 564 -26 m 363 603 q 232 529 278 603 q 192 375 192 465 q 230 222 192 286 q 360 146 276 146 q 487 221 441 146 q 526 371 526 285 q 488 523 526 458 q 363 603 443 603 "},"‡":{"x_min":0,"x_max":809,"ha":894,"o":"m 299 621 l 0 621 l 0 804 l 299 804 l 299 1011 l 509 1011 l 509 804 l 809 804 l 809 621 l 509 621 l 509 387 l 809 387 l 809 205 l 509 205 l 509 0 l 299 0 l 299 205 l 0 205 l 0 387 l 299 387 l 299 621 "},"ψ":{"x_min":0,"x_max":875,"ha":979,"o":"m 522 142 q 657 274 620 163 q 671 352 671 316 l 671 748 l 875 748 l 875 402 q 806 134 875 240 q 525 -22 719 -1 l 525 -278 l 349 -278 l 349 -22 q 65 135 152 -1 q 0 402 0 238 l 0 748 l 204 748 l 204 352 q 231 240 204 295 q 353 142 272 159 l 353 922 l 524 922 l 522 142 "},"η":{"x_min":0,"x_max":669,"ha":779,"o":"m 669 -278 l 469 -278 l 469 390 q 448 526 469 473 q 348 606 417 606 q 244 553 288 606 q 201 441 201 501 l 201 0 l 0 0 l 0 749 l 201 749 l 201 665 q 301 744 244 715 q 423 774 359 774 q 606 685 538 774 q 669 484 669 603 l 669 -278 "}}'),aS="bold",oS=1216,lS=-100,cS="normal",uS={yMin:-333,xMin:-162,yMax:1216,xMax:1681},hS=1e3,fS={postscript_name:"Helvetiker-Bold",version_string:"Version 1.00 2004 initial release",vendor_url:"http://www.magenta.gr",full_font_name:"Helvetiker Bold",font_family_name:"Helvetiker",copyright:"Copyright (c) Magenta ltd, 2004.",description:"",trademark:"",designer:"",designer_url:"",unique_font_identifier:"Magenta ltd:Helvetiker Bold:22-10-104",license_url:"http://www.ellak.gr/fonts/MgOpen/license.html",license_description:`Copyright (c) 2004 by MAGENTA Ltd. All Rights Reserved.\r
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
THE FONT SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO ANY WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT OF COPYRIGHT, PATENT, TRADEMARK, OR OTHER RIGHT. IN NO EVENT SHALL MAGENTA OR PERSONS OR BODIES IN CHARGE OF ADMINISTRATION AND MAINTENANCE OF THE FONT SOFTWARE BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, INCLUDING ANY GENERAL, SPECIAL, INDIRECT, INCIDENTAL, OR CONSEQUENTIAL DAMAGES, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF THE USE OR INABILITY TO USE THE FONT SOFTWARE OR FROM OTHER DEALINGS IN THE FONT SOFTWARE.`,manufacturer_name:"Magenta ltd",font_sub_family_name:"Bold"},dS=-334,pS="Helvetiker",mS=1549,_S=50,gS={glyphs:sS,cssFontWeight:aS,ascender:oS,underlinePosition:lS,cssFontStyle:cS,boundingBox:uS,resolution:hS,original_font_information:fS,descender:dS,familyName:pS,lineHeight:mS,underlineThickness:_S};function Qi(r){if(r===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return r}function d0(r,e){r.prototype=Object.create(e.prototype),r.prototype.constructor=r,r.__proto__=e}var oi={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},na={duration:.5,overwrite:!1,delay:0},Kh,dn,Pt,gi=1e8,Tt=1/gi,ju=Math.PI*2,xS=ju/4,vS=0,p0=Math.sqrt,SS=Math.cos,MS=Math.sin,un=function(e){return typeof e=="string"},Ot=function(e){return typeof e=="function"},ar=function(e){return typeof e=="number"},Jh=function(e){return typeof e>"u"},Wi=function(e){return typeof e=="object"},Gn=function(e){return e!==!1},Qh=function(){return typeof window<"u"},jo=function(e){return Ot(e)||un(e)},m0=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},Tn=Array.isArray,yS=/random\([^)]+\)/g,TS=/,\s*/g,kd=/(?:-?\.?\d|\.)+/gi,_0=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,zs=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,Gc=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,g0=/[+-]=-?[.\d]+/,ES=/[^,'"\[\]\s]+/gi,bS=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,It,Di,eh,jh,li={},Ol={},x0,v0=function(e){return(Ol=ia(e,li))&&Zn},ef=function(e,t){return console.warn("Invalid property",e,"set to",t,"Missing plugin? gsap.registerPlugin()")},lo=function(e,t){return!t&&console.warn(e)},S0=function(e,t){return e&&(li[e]=t)&&Ol&&(Ol[e]=t)||li},co=function(){return 0},wS={suppressEvents:!0,isStart:!0,kill:!1},Sl={suppressEvents:!0,kill:!1},AS={suppressEvents:!0},tf={},br=[],th={},M0,ei={},Wc={},Vd=30,Ml=[],nf="",rf=function(e){var t=e[0],n,i;if(Wi(t)||Ot(t)||(e=[e]),!(n=(t._gsap||{}).harness)){for(i=Ml.length;i--&&!Ml[i].targetTest(t););n=Ml[i]}for(i=e.length;i--;)e[i]&&(e[i]._gsap||(e[i]._gsap=new W0(e[i],n)))||e.splice(i,1);return e},Kr=function(e){return e._gsap||rf(xi(e))[0]._gsap},y0=function(e,t,n){return(n=e[t])&&Ot(n)?e[t]():Jh(n)&&e.getAttribute&&e.getAttribute(t)||n},Wn=function(e,t){return(e=e.split(",")).forEach(t)||e},Vt=function(e){return Math.round(e*1e5)/1e5||0},Lt=function(e){return Math.round(e*1e7)/1e7||0},Xs=function(e,t){var n=t.charAt(0),i=parseFloat(t.substr(2));return e=parseFloat(e),n==="+"?e+i:n==="-"?e-i:n==="*"?e*i:e/i},CS=function(e,t){for(var n=t.length,i=0;e.indexOf(t[i])<0&&++i<n;);return i<n},Bl=function(){var e=br.length,t=br.slice(0),n,i;for(th={},br.length=0,n=0;n<e;n++)i=t[n],i&&i._lazy&&(i.render(i._lazy[0],i._lazy[1],!0)._lazy=0)},sf=function(e){return!!(e._initted||e._startAt||e.add)},T0=function(e,t,n,i){br.length&&!dn&&Bl(),e.render(t,n,!!(dn&&t<0&&sf(e))),br.length&&!dn&&Bl()},E0=function(e){var t=parseFloat(e);return(t||t===0)&&(e+"").match(ES).length<2?t:un(e)?e.trim():e},b0=function(e){return e},ci=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},RS=function(e){return function(t,n){for(var i in n)i in t||i==="duration"&&e||i==="ease"||(t[i]=n[i])}},ia=function(e,t){for(var n in t)e[n]=t[n];return e},Hd=function r(e,t){for(var n in t)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(e[n]=Wi(t[n])?r(e[n]||(e[n]={}),t[n]):t[n]);return e},zl=function(e,t){var n={},i;for(i in e)i in t||(n[i]=e[i]);return n},Ba=function(e){var t=e.parent||It,n=e.keyframes?RS(Tn(e.keyframes)):ci;if(Gn(e.inherit))for(;t;)n(e,t.vars.defaults),t=t.parent||t._dp;return e},PS=function(e,t){for(var n=e.length,i=n===t.length;i&&n--&&e[n]===t[n];);return n<0},w0=function(e,t,n,i,s){var a=e[i],o;if(s)for(o=t[s];a&&a[s]>o;)a=a._prev;return a?(t._next=a._next,a._next=t):(t._next=e[n],e[n]=t),t._next?t._next._prev=t:e[i]=t,t._prev=a,t.parent=t._dp=e,t},ic=function(e,t,n,i){n===void 0&&(n="_first"),i===void 0&&(i="_last");var s=t._prev,a=t._next;s?s._next=a:e[n]===t&&(e[n]=a),a?a._prev=s:e[i]===t&&(e[i]=s),t._next=t._prev=t.parent=null},Rr=function(e,t){e.parent&&(!t||e.parent.autoRemoveChildren)&&e.parent.remove&&e.parent.remove(e),e._act=0},Jr=function(e,t){if(e&&(!t||t._end>e._dur||t._start<0))for(var n=e;n;)n._dirty=1,n=n.parent;return e},DS=function(e){for(var t=e.parent;t&&t.parent;)t._dirty=1,t.totalDuration(),t=t.parent;return e},nh=function(e,t,n,i){return e._startAt&&(dn?e._startAt.revert(Sl):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(t,!0,i))},LS=function r(e){return!e||e._ts&&r(e.parent)},Gd=function(e){return e._repeat?ra(e._tTime,e=e.duration()+e._rDelay)*e:0},ra=function(e,t){var n=Math.floor(e=Lt(e/t));return e&&n===e?n-1:n},kl=function(e,t){return(e-t._start)*t._ts+(t._ts>=0?0:t._dirty?t.totalDuration():t._tDur)},rc=function(e){return e._end=Lt(e._start+(e._tDur/Math.abs(e._ts||e._rts||Tt)||0))},sc=function(e,t){var n=e._dp;return n&&n.smoothChildTiming&&e._ts&&(e._start=Lt(n._time-(e._ts>0?t/e._ts:((e._dirty?e.totalDuration():e._tDur)-t)/-e._ts)),rc(e),n._dirty||Jr(n,e)),e},A0=function(e,t){var n;if((t._time||!t._dur&&t._initted||t._start<e._time&&(t._dur||!t.add))&&(n=kl(e.rawTime(),t),(!t._dur||yo(0,t.totalDuration(),n)-t._tTime>Tt)&&t.render(n,!0)),Jr(e,t)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(n=e;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;e._zTime=-Tt}},Ui=function(e,t,n,i){return t.parent&&Rr(t),t._start=Lt((ar(n)?n:n||e!==It?pi(e,n,t):e._time)+t._delay),t._end=Lt(t._start+(t.totalDuration()/Math.abs(t.timeScale())||0)),w0(e,t,"_first","_last",e._sort?"_start":0),ih(t)||(e._recent=t),i||A0(e,t),e._ts<0&&sc(e,e._tTime),e},C0=function(e,t){return(li.ScrollTrigger||ef("scrollTrigger",t))&&li.ScrollTrigger.create(t,e)},R0=function(e,t,n,i,s){if(of(e,t,s),!e._initted)return 1;if(!n&&e._pt&&!dn&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&M0!==ii.frame)return br.push(e),e._lazy=[s,i],1},IS=function r(e){var t=e.parent;return t&&t._ts&&t._initted&&!t._lock&&(t.rawTime()<0||r(t))},ih=function(e){var t=e.data;return t==="isFromStart"||t==="isStart"},NS=function(e,t,n,i){var s=e.ratio,a=t<0||!t&&(!e._start&&IS(e)&&!(!e._initted&&ih(e))||(e._ts<0||e._dp._ts<0)&&!ih(e))?0:1,o=e._rDelay,l=0,c,u,d;if(o&&e._repeat&&(l=yo(0,e._tDur,t),u=ra(l,o),e._yoyo&&u&1&&(a=1-a),u!==ra(e._tTime,o)&&(s=1-a,e.vars.repeatRefresh&&e._initted&&e.invalidate())),a!==s||dn||i||e._zTime===Tt||!t&&e._zTime){if(!e._initted&&R0(e,t,i,n,l))return;for(d=e._zTime,e._zTime=t||(n?Tt:0),n||(n=t&&!d),e.ratio=a,e._from&&(a=1-a),e._time=0,e._tTime=l,c=e._pt;c;)c.r(a,c.d),c=c._next;t<0&&nh(e,t,n,!0),e._onUpdate&&!n&&si(e,"onUpdate"),l&&e._repeat&&!n&&e.parent&&si(e,"onRepeat"),(t>=e._tDur||t<0)&&e.ratio===a&&(a&&Rr(e,1),!n&&!dn&&(si(e,a?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=t)},US=function(e,t,n){var i;if(n>t)for(i=e._first;i&&i._start<=n;){if(i.data==="isPause"&&i._start>t)return i;i=i._next}else for(i=e._last;i&&i._start>=n;){if(i.data==="isPause"&&i._start<t)return i;i=i._prev}},sa=function(e,t,n,i){var s=e._repeat,a=Lt(t)||0,o=e._tTime/e._tDur;return o&&!i&&(e._time*=a/e._dur),e._dur=a,e._tDur=s?s<0?1e10:Lt(a*(s+1)+e._rDelay*s):a,o>0&&!i&&sc(e,e._tTime=e._tDur*o),e.parent&&rc(e),n||Jr(e.parent,e),e},Wd=function(e){return e instanceof Nn?Jr(e):sa(e,e._dur)},qS={_start:0,endTime:co,totalDuration:co},pi=function r(e,t,n){var i=e.labels,s=e._recent||qS,a=e.duration()>=gi?s.endTime(!1):e._dur,o,l,c;return un(t)&&(isNaN(t)||t in i)?(l=t.charAt(0),c=t.substr(-1)==="%",o=t.indexOf("="),l==="<"||l===">"?(o>=0&&(t=t.replace(/=/,"")),(l==="<"?s._start:s.endTime(s._repeat>=0))+(parseFloat(t.substr(1))||0)*(c?(o<0?s:n).totalDuration()/100:1)):o<0?(t in i||(i[t]=a),i[t]):(l=parseFloat(t.charAt(o-1)+t.substr(o+1)),c&&n&&(l=l/100*(Tn(n)?n[0]:n).totalDuration()),o>1?r(e,t.substr(0,o-1),n)+l:a+l)):t==null?a:+t},za=function(e,t,n){var i=ar(t[1]),s=(i?2:1)+(e<2?0:1),a=t[s],o,l;if(i&&(a.duration=t[1]),a.parent=n,e){for(o=a,l=n;l&&!("immediateRender"in o);)o=l.vars.defaults||{},l=Gn(l.vars.inherit)&&l.parent;a.immediateRender=Gn(o.immediateRender),e<2?a.runBackwards=1:a.startAt=t[s-1]}return new Kt(t[0],a,t[s+1])},Nr=function(e,t){return e||e===0?t(e):t},yo=function(e,t,n){return n<e?e:n>t?t:n},Sn=function(e,t){return!un(e)||!(t=bS.exec(e))?"":t[1]},FS=function(e,t,n){return Nr(n,function(i){return yo(e,t,i)})},rh=[].slice,P0=function(e,t){return e&&Wi(e)&&"length"in e&&(!t&&!e.length||e.length-1 in e&&Wi(e[0]))&&!e.nodeType&&e!==Di},OS=function(e,t,n){return n===void 0&&(n=[]),e.forEach(function(i){var s;return un(i)&&!t||P0(i,1)?(s=n).push.apply(s,xi(i)):n.push(i)})||n},xi=function(e,t,n){return Pt&&!t&&Pt.selector?Pt.selector(e):un(e)&&!n&&(eh||!aa())?rh.call((t||jh).querySelectorAll(e),0):Tn(e)?OS(e,n):P0(e)?rh.call(e,0):e?[e]:[]},sh=function(e){return e=xi(e)[0]||lo("Invalid scope")||{},function(t){var n=e.current||e.nativeElement||e;return xi(t,n.querySelectorAll?n:n===e?lo("Invalid scope")||jh.createElement("div"):e)}},D0=function(e){return e.sort(function(){return .5-Math.random()})},L0=function(e){if(Ot(e))return e;var t=Wi(e)?e:{each:e},n=Qr(t.ease),i=t.from||0,s=parseFloat(t.base)||0,a={},o=i>0&&i<1,l=isNaN(i)||o,c=t.axis,u=i,d=i;return un(i)?u=d={center:.5,edges:.5,end:1}[i]||0:!o&&l&&(u=i[0],d=i[1]),function(h,f,_){var g=(_||t).length,p=a[g],m,M,A,v,y,E,w,x,T;if(!p){if(T=t.grid==="auto"?0:(t.grid||[1,gi])[1],!T){for(w=-gi;w<(w=_[T++].getBoundingClientRect().left)&&T<g;);T<g&&T--}for(p=a[g]=[],m=l?Math.min(T,g)*u-.5:i%T,M=T===gi?0:l?g*d/T-.5:i/T|0,w=0,x=gi,E=0;E<g;E++)A=E%T-m,v=M-(E/T|0),p[E]=y=c?Math.abs(c==="y"?v:A):p0(A*A+v*v),y>w&&(w=y),y<x&&(x=y);i==="random"&&D0(p),p.max=w-x,p.min=x,p.v=g=(parseFloat(t.amount)||parseFloat(t.each)*(T>g?g-1:c?c==="y"?g/T:T:Math.max(T,g/T))||0)*(i==="edges"?-1:1),p.b=g<0?s-g:s,p.u=Sn(t.amount||t.each)||0,n=n&&g<0?V0(n):n}return g=(p[h]-p.min)/p.max||0,Lt(p.b+(n?n(g):g)*p.v)+p.u}},ah=function(e){var t=Math.pow(10,((e+"").split(".")[1]||"").length);return function(n){var i=Lt(Math.round(parseFloat(n)/e)*e*t);return(i-i%1)/t+(ar(n)?0:Sn(n))}},I0=function(e,t){var n=Tn(e),i,s;return!n&&Wi(e)&&(i=n=e.radius||gi,e.values?(e=xi(e.values),(s=!ar(e[0]))&&(i*=i)):e=ah(e.increment)),Nr(t,n?Ot(e)?function(a){return s=e(a),Math.abs(s-a)<=i?s:a}:function(a){for(var o=parseFloat(s?a.x:a),l=parseFloat(s?a.y:0),c=gi,u=0,d=e.length,h,f;d--;)s?(h=e[d].x-o,f=e[d].y-l,h=h*h+f*f):h=Math.abs(e[d]-o),h<c&&(c=h,u=d);return u=!i||c<=i?e[u]:a,s||u===a||ar(a)?u:u+Sn(a)}:ah(e))},N0=function(e,t,n,i){return Nr(Tn(e)?!t:n===!0?!!(n=0):!i,function(){return Tn(e)?e[~~(Math.random()*e.length)]:(n=n||1e-5)&&(i=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((e-n/2+Math.random()*(t-e+n*.99))/n)*n*i)/i})},BS=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(i){return t.reduce(function(s,a){return a(s)},i)}},zS=function(e,t){return function(n){return e(parseFloat(n))+(t||Sn(n))}},kS=function(e,t,n){return q0(e,t,0,1,n)},U0=function(e,t,n){return Nr(n,function(i){return e[~~t(i)]})},VS=function r(e,t,n){var i=t-e;return Tn(e)?U0(e,r(0,e.length),t):Nr(n,function(s){return(i+(s-e)%i)%i+e})},HS=function r(e,t,n){var i=t-e,s=i*2;return Tn(e)?U0(e,r(0,e.length-1),t):Nr(n,function(a){return a=(s+(a-e)%s)%s||0,e+(a>i?s-a:a)})},uo=function(e){return e.replace(yS,function(t){var n=t.indexOf("[")+1,i=t.substring(n||7,n?t.indexOf("]"):t.length-1).split(TS);return N0(n?i:+i[0],n?0:+i[1],+i[2]||1e-5)})},q0=function(e,t,n,i,s){var a=t-e,o=i-n;return Nr(s,function(l){return n+((l-e)/a*o||0)})},GS=function r(e,t,n,i){var s=isNaN(e+t)?0:function(f){return(1-f)*e+f*t};if(!s){var a=un(e),o={},l,c,u,d,h;if(n===!0&&(i=1)&&(n=null),a)e={p:e},t={p:t};else if(Tn(e)&&!Tn(t)){for(u=[],d=e.length,h=d-2,c=1;c<d;c++)u.push(r(e[c-1],e[c]));d--,s=function(_){_*=d;var g=Math.min(h,~~_);return u[g](_-g)},n=t}else i||(e=ia(Tn(e)?[]:{},e));if(!u){for(l in t)af.call(o,e,l,"get",t[l]);s=function(_){return uf(_,o)||(a?e.p:e)}}}return Nr(n,s)},Xd=function(e,t,n){var i=e.labels,s=gi,a,o,l;for(a in i)o=i[a]-t,o<0==!!n&&o&&s>(o=Math.abs(o))&&(l=a,s=o);return l},si=function(e,t,n){var i=e.vars,s=i[t],a=Pt,o=e._ctx,l,c,u;if(s)return l=i[t+"Params"],c=i.callbackScope||e,n&&br.length&&Bl(),o&&(Pt=o),u=l?s.apply(c,l):s.call(c),Pt=a,u},Ca=function(e){return Rr(e),e.scrollTrigger&&e.scrollTrigger.kill(!!dn),e.progress()<1&&si(e,"onInterrupt"),e},ks,F0=[],O0=function(e){if(e)if(e=!e.name&&e.default||e,Qh()||e.headless){var t=e.name,n=Ot(e),i=t&&!n&&e.init?function(){this._props=[]}:e,s={init:co,render:uf,add:af,kill:aM,modifier:sM,rawVars:0},a={targetTest:0,get:0,getSetter:cf,aliases:{},register:0};if(aa(),e!==i){if(ei[t])return;ci(i,ci(zl(e,s),a)),ia(i.prototype,ia(s,zl(e,a))),ei[i.prop=t]=i,e.targetTest&&(Ml.push(i),tf[t]=1),t=(t==="css"?"CSS":t.charAt(0).toUpperCase()+t.substr(1))+"Plugin"}S0(t,i),e.register&&e.register(Zn,i,Xn)}else F0.push(e)},yt=255,Ra={aqua:[0,yt,yt],lime:[0,yt,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,yt],navy:[0,0,128],white:[yt,yt,yt],olive:[128,128,0],yellow:[yt,yt,0],orange:[yt,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[yt,0,0],pink:[yt,192,203],cyan:[0,yt,yt],transparent:[yt,yt,yt,0]},Xc=function(e,t,n){return e+=e<0?1:e>1?-1:0,(e*6<1?t+(n-t)*e*6:e<.5?n:e*3<2?t+(n-t)*(2/3-e)*6:t)*yt+.5|0},B0=function(e,t,n){var i=e?ar(e)?[e>>16,e>>8&yt,e&yt]:0:Ra.black,s,a,o,l,c,u,d,h,f,_;if(!i){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),Ra[e])i=Ra[e];else if(e.charAt(0)==="#"){if(e.length<6&&(s=e.charAt(1),a=e.charAt(2),o=e.charAt(3),e="#"+s+s+a+a+o+o+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return i=parseInt(e.substr(1,6),16),[i>>16,i>>8&yt,i&yt,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),i=[e>>16,e>>8&yt,e&yt]}else if(e.substr(0,3)==="hsl"){if(i=_=e.match(kd),!t)l=+i[0]%360/360,c=+i[1]/100,u=+i[2]/100,a=u<=.5?u*(c+1):u+c-u*c,s=u*2-a,i.length>3&&(i[3]*=1),i[0]=Xc(l+1/3,s,a),i[1]=Xc(l,s,a),i[2]=Xc(l-1/3,s,a);else if(~e.indexOf("="))return i=e.match(_0),n&&i.length<4&&(i[3]=1),i}else i=e.match(kd)||Ra.transparent;i=i.map(Number)}return t&&!_&&(s=i[0]/yt,a=i[1]/yt,o=i[2]/yt,d=Math.max(s,a,o),h=Math.min(s,a,o),u=(d+h)/2,d===h?l=c=0:(f=d-h,c=u>.5?f/(2-d-h):f/(d+h),l=d===s?(a-o)/f+(a<o?6:0):d===a?(o-s)/f+2:(s-a)/f+4,l*=60),i[0]=~~(l+.5),i[1]=~~(c*100+.5),i[2]=~~(u*100+.5)),n&&i.length<4&&(i[3]=1),i},z0=function(e){var t=[],n=[],i=-1;return e.split(wr).forEach(function(s){var a=s.match(zs)||[];t.push.apply(t,a),n.push(i+=a.length+1)}),t.c=n,t},Yd=function(e,t,n){var i="",s=(e+i).match(wr),a=t?"hsla(":"rgba(",o=0,l,c,u,d;if(!s)return e;if(s=s.map(function(h){return(h=B0(h,t,1))&&a+(t?h[0]+","+h[1]+"%,"+h[2]+"%,"+h[3]:h.join(","))+")"}),n&&(u=z0(e),l=n.c,l.join(i)!==u.c.join(i)))for(c=e.replace(wr,"1").split(zs),d=c.length-1;o<d;o++)i+=c[o]+(~l.indexOf(o)?s.shift()||a+"0,0,0,0)":(u.length?u:s.length?s:n).shift());if(!c)for(c=e.split(wr),d=c.length-1;o<d;o++)i+=c[o]+s[o];return i+c[d]},wr=(function(){var r="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in Ra)r+="|"+e+"\\b";return new RegExp(r+")","gi")})(),WS=/hsl[a]?\(/,k0=function(e){var t=e.join(" "),n;if(wr.lastIndex=0,wr.test(t))return n=WS.test(t),e[1]=Yd(e[1],n),e[0]=Yd(e[0],n,z0(e[1])),!0},ho,ii=(function(){var r=Date.now,e=500,t=33,n=r(),i=n,s=1e3/240,a=s,o=[],l,c,u,d,h,f,_=function g(p){var m=r()-i,M=p===!0,A,v,y,E;if((m>e||m<0)&&(n+=m-t),i+=m,y=i-n,A=y-a,(A>0||M)&&(E=++d.frame,h=y-d.time*1e3,d.time=y=y/1e3,a+=A+(A>=s?4:s-A),v=1),M||(l=c(g)),v)for(f=0;f<o.length;f++)o[f](y,h,E,p)};return d={time:0,frame:0,tick:function(){_(!0)},deltaRatio:function(p){return h/(1e3/(p||60))},wake:function(){x0&&(!eh&&Qh()&&(Di=eh=window,jh=Di.document||{},li.gsap=Zn,(Di.gsapVersions||(Di.gsapVersions=[])).push(Zn.version),v0(Ol||Di.GreenSockGlobals||!Di.gsap&&Di||{}),F0.forEach(O0)),u=typeof requestAnimationFrame<"u"&&requestAnimationFrame,l&&d.sleep(),c=u||function(p){return setTimeout(p,a-d.time*1e3+1|0)},ho=1,_(2))},sleep:function(){(u?cancelAnimationFrame:clearTimeout)(l),ho=0,c=co},lagSmoothing:function(p,m){e=p||1/0,t=Math.min(m||33,e)},fps:function(p){s=1e3/(p||240),a=d.time*1e3+s},add:function(p,m,M){var A=m?function(v,y,E,w){p(v,y,E,w),d.remove(A)}:p;return d.remove(p),o[M?"unshift":"push"](A),aa(),A},remove:function(p,m){~(m=o.indexOf(p))&&o.splice(m,1)&&f>=m&&f--},_listeners:o},d})(),aa=function(){return!ho&&ii.wake()},dt={},XS=/^[\d.\-M][\d.\-,\s]/,YS=/["']/g,ZS=function(e){for(var t={},n=e.substr(1,e.length-3).split(":"),i=n[0],s=1,a=n.length,o,l,c;s<a;s++)l=n[s],o=s!==a-1?l.lastIndexOf(","):l.length,c=l.substr(0,o),t[i]=isNaN(c)?c.replace(YS,"").trim():+c,i=l.substr(o+1).trim();return t},$S=function(e){var t=e.indexOf("(")+1,n=e.indexOf(")"),i=e.indexOf("(",t);return e.substring(t,~i&&i<n?e.indexOf(")",n+1):n)},KS=function(e){var t=(e+"").split("("),n=dt[t[0]];return n&&t.length>1&&n.config?n.config.apply(null,~e.indexOf("{")?[ZS(t[1])]:$S(e).split(",").map(E0)):dt._CE&&XS.test(e)?dt._CE("",e):n},V0=function(e){return function(t){return 1-e(1-t)}},H0=function r(e,t){for(var n=e._first,i;n;)n instanceof Nn?r(n,t):n.vars.yoyoEase&&(!n._yoyo||!n._repeat)&&n._yoyo!==t&&(n.timeline?r(n.timeline,t):(i=n._ease,n._ease=n._yEase,n._yEase=i,n._yoyo=t)),n=n._next},Qr=function(e,t){return e&&(Ot(e)?e:dt[e]||KS(e))||t},ps=function(e,t,n,i){n===void 0&&(n=function(l){return 1-t(1-l)}),i===void 0&&(i=function(l){return l<.5?t(l*2)/2:1-t((1-l)*2)/2});var s={easeIn:t,easeOut:n,easeInOut:i},a;return Wn(e,function(o){dt[o]=li[o]=s,dt[a=o.toLowerCase()]=n;for(var l in s)dt[a+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=dt[o+"."+l]=s[l]}),s},G0=function(e){return function(t){return t<.5?(1-e(1-t*2))/2:.5+e((t-.5)*2)/2}},Yc=function r(e,t,n){var i=t>=1?t:1,s=(n||(e?.3:.45))/(t<1?t:1),a=s/ju*(Math.asin(1/i)||0),o=function(u){return u===1?1:i*Math.pow(2,-10*u)*MS((u-a)*s)+1},l=e==="out"?o:e==="in"?function(c){return 1-o(1-c)}:G0(o);return s=ju/s,l.config=function(c,u){return r(e,c,u)},l},Zc=function r(e,t){t===void 0&&(t=1.70158);var n=function(a){return a?--a*a*((t+1)*a+t)+1:0},i=e==="out"?n:e==="in"?function(s){return 1-n(1-s)}:G0(n);return i.config=function(s){return r(e,s)},i};Wn("Linear,Quad,Cubic,Quart,Quint,Strong",function(r,e){var t=e<5?e+1:e;ps(r+",Power"+(t-1),e?function(n){return Math.pow(n,t)}:function(n){return n},function(n){return 1-Math.pow(1-n,t)},function(n){return n<.5?Math.pow(n*2,t)/2:1-Math.pow((1-n)*2,t)/2})});dt.Linear.easeNone=dt.none=dt.Linear.easeIn;ps("Elastic",Yc("in"),Yc("out"),Yc());(function(r,e){var t=1/e,n=2*t,i=2.5*t,s=function(o){return o<t?r*o*o:o<n?r*Math.pow(o-1.5/e,2)+.75:o<i?r*(o-=2.25/e)*o+.9375:r*Math.pow(o-2.625/e,2)+.984375};ps("Bounce",function(a){return 1-s(1-a)},s)})(7.5625,2.75);ps("Expo",function(r){return Math.pow(2,10*(r-1))*r+r*r*r*r*r*r*(1-r)});ps("Circ",function(r){return-(p0(1-r*r)-1)});ps("Sine",function(r){return r===1?1:-SS(r*xS)+1});ps("Back",Zc("in"),Zc("out"),Zc());dt.SteppedEase=dt.steps=li.SteppedEase={config:function(e,t){e===void 0&&(e=1);var n=1/e,i=e+(t?0:1),s=t?1:0,a=1-Tt;return function(o){return((i*yo(0,a,o)|0)+s)*n}}};na.ease=dt["quad.out"];Wn("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(r){return nf+=r+","+r+"Params,"});var W0=function(e,t){this.id=vS++,e._gsap=this,this.target=e,this.harness=t,this.get=t?t.get:y0,this.set=t?t.getSetter:cf},fo=(function(){function r(t){this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat===1/0?-2:t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,sa(this,+t.duration,1,1),this.data=t.data,Pt&&(this._ctx=Pt,Pt.data.push(this)),ho||ii.wake()}var e=r.prototype;return e.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},e.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},e.totalDuration=function(n){return arguments.length?(this._dirty=0,sa(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(n,i){if(aa(),!arguments.length)return this._tTime;var s=this._dp;if(s&&s.smoothChildTiming&&this._ts){for(sc(this,n),!s._dp||s.parent||A0(s,this);s&&s.parent;)s.parent._time!==s._start+(s._ts>=0?s._tTime/s._ts:(s.totalDuration()-s._tTime)/-s._ts)&&s.totalTime(s._tTime,!0),s=s.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&Ui(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!i||this._initted&&Math.abs(this._zTime)===Tt||!this._initted&&this._dur&&n||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),T0(this,n,i)),this},e.time=function(n,i){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+Gd(this))%(this._dur+this._rDelay)||(n?this._dur:0),i):this._time},e.totalProgress=function(n,i){return arguments.length?this.totalTime(this.totalDuration()*n,i):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},e.progress=function(n,i){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+Gd(this),i):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},e.iteration=function(n,i){var s=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*s,i):this._repeat?ra(this._tTime,s)+1:1},e.timeScale=function(n,i){if(!arguments.length)return this._rts===-Tt?0:this._rts;if(this._rts===n)return this;var s=this.parent&&this._ts?kl(this.parent._time,this):this._tTime;return this._rts=+n||0,this._ts=this._ps||n===-Tt?0:this._rts,this.totalTime(yo(-Math.abs(this._delay),this.totalDuration(),s),i!==!1),rc(this),DS(this)},e.paused=function(n){return arguments.length?(this._ps!==n&&(this._ps=n,n?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(aa(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==Tt&&(this._tTime-=Tt)))),this):this._ps},e.startTime=function(n){if(arguments.length){this._start=Lt(n);var i=this.parent||this._dp;return i&&(i._sort||!this.parent)&&Ui(i,this,this._start-this._delay),this}return this._start},e.endTime=function(n){return this._start+(Gn(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(n){var i=this.parent||this._dp;return i?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?kl(i.rawTime(n),this):this._tTime:this._tTime},e.revert=function(n){n===void 0&&(n=AS);var i=dn;return dn=n,sf(this)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),dn=i,this},e.globalTime=function(n){for(var i=this,s=arguments.length?n:i.rawTime();i;)s=i._start+s/(Math.abs(i._ts)||1),i=i._dp;return!this.parent&&this._sat?this._sat.globalTime(n):s},e.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,Wd(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(n){if(arguments.length){var i=this._time;return this._rDelay=n,Wd(this),i?this.time(i):this}return this._rDelay},e.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},e.seek=function(n,i){return this.totalTime(pi(this,n),Gn(i))},e.restart=function(n,i){return this.play().totalTime(n?-this._delay:0,Gn(i)),this._dur||(this._zTime=-Tt),this},e.play=function(n,i){return n!=null&&this.seek(n,i),this.reversed(!1).paused(!1)},e.reverse=function(n,i){return n!=null&&this.seek(n||this.totalDuration(),i),this.reversed(!0).paused(!1)},e.pause=function(n,i){return n!=null&&this.seek(n,i),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-Tt:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-Tt,this},e.isActive=function(){var n=this.parent||this._dp,i=this._start,s;return!!(!n||this._ts&&this._initted&&n.isActive()&&(s=n.rawTime(!0))>=i&&s<this.endTime(!0)-Tt)},e.eventCallback=function(n,i,s){var a=this.vars;return arguments.length>1?(i?(a[n]=i,s&&(a[n+"Params"]=s),n==="onUpdate"&&(this._onUpdate=i)):delete a[n],this):a[n]},e.then=function(n){var i=this,s=i._prom;return new Promise(function(a){var o=Ot(n)?n:b0,l=function(){var u=i.then;i.then=null,s&&s(),Ot(o)&&(o=o(i))&&(o.then||o===i)&&(i.then=u),a(o),i.then=u};i._initted&&i.totalProgress()===1&&i._ts>=0||!i._tTime&&i._ts<0?l():i._prom=l})},e.kill=function(){Ca(this)},r})();ci(fo.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-Tt,_prom:0,_ps:!1,_rts:1});var Nn=(function(r){d0(e,r);function e(n,i){var s;return n===void 0&&(n={}),s=r.call(this,n)||this,s.labels={},s.smoothChildTiming=!!n.smoothChildTiming,s.autoRemoveChildren=!!n.autoRemoveChildren,s._sort=Gn(n.sortChildren),It&&Ui(n.parent||It,Qi(s),i),n.reversed&&s.reverse(),n.paused&&s.paused(!0),n.scrollTrigger&&C0(Qi(s),n.scrollTrigger),s}var t=e.prototype;return t.to=function(i,s,a){return za(0,arguments,this),this},t.from=function(i,s,a){return za(1,arguments,this),this},t.fromTo=function(i,s,a,o){return za(2,arguments,this),this},t.set=function(i,s,a){return s.duration=0,s.parent=this,Ba(s).repeatDelay||(s.repeat=0),s.immediateRender=!!s.immediateRender,new Kt(i,s,pi(this,a),1),this},t.call=function(i,s,a){return Ui(this,Kt.delayedCall(0,i,s),a)},t.staggerTo=function(i,s,a,o,l,c,u){return a.duration=s,a.stagger=a.stagger||o,a.onComplete=c,a.onCompleteParams=u,a.parent=this,new Kt(i,a,pi(this,l)),this},t.staggerFrom=function(i,s,a,o,l,c,u){return a.runBackwards=1,Ba(a).immediateRender=Gn(a.immediateRender),this.staggerTo(i,s,a,o,l,c,u)},t.staggerFromTo=function(i,s,a,o,l,c,u,d){return o.startAt=a,Ba(o).immediateRender=Gn(o.immediateRender),this.staggerTo(i,s,o,l,c,u,d)},t.render=function(i,s,a){var o=this._time,l=this._dirty?this.totalDuration():this._tDur,c=this._dur,u=i<=0?0:Lt(i),d=this._zTime<0!=i<0&&(this._initted||!c),h,f,_,g,p,m,M,A,v,y,E,w;if(this!==It&&u>l&&i>=0&&(u=l),u!==this._tTime||a||d){if(o!==this._time&&c&&(u+=this._time-o,i+=this._time-o),h=u,v=this._start,A=this._ts,m=!A,d&&(c||(o=this._zTime),(i||!s)&&(this._zTime=i)),this._repeat){if(E=this._yoyo,p=c+this._rDelay,this._repeat<-1&&i<0)return this.totalTime(p*100+i,s,a);if(h=Lt(u%p),u===l?(g=this._repeat,h=c):(y=Lt(u/p),g=~~y,g&&g===y&&(h=c,g--),h>c&&(h=c)),y=ra(this._tTime,p),!o&&this._tTime&&y!==g&&this._tTime-y*p-this._dur<=0&&(y=g),E&&g&1&&(h=c-h,w=1),g!==y&&!this._lock){var x=E&&y&1,T=x===(E&&g&1);if(g<y&&(x=!x),o=x?0:u%c?c:u,this._lock=1,this.render(o||(w?0:Lt(g*p)),s,!c)._lock=0,this._tTime=u,!s&&this.parent&&si(this,"onRepeat"),this.vars.repeatRefresh&&!w&&(this.invalidate()._lock=1,y=g),o&&o!==this._time||m!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,l=this._tDur,T&&(this._lock=2,o=x?c:-1e-4,this.render(o,!0),this.vars.repeatRefresh&&!w&&this.invalidate()),this._lock=0,!this._ts&&!m)return this;H0(this,w)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(M=US(this,Lt(o),Lt(h)),M&&(u-=h-(h=M._start))),this._tTime=u,this._time=h,this._act=!A,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=i,o=0),!o&&u&&c&&!s&&!y&&(si(this,"onStart"),this._tTime!==u))return this;if(h>=o&&i>=0)for(f=this._first;f;){if(_=f._next,(f._act||h>=f._start)&&f._ts&&M!==f){if(f.parent!==this)return this.render(i,s,a);if(f.render(f._ts>0?(h-f._start)*f._ts:(f._dirty?f.totalDuration():f._tDur)+(h-f._start)*f._ts,s,a),h!==this._time||!this._ts&&!m){M=0,_&&(u+=this._zTime=-Tt);break}}f=_}else{f=this._last;for(var C=i<0?i:h;f;){if(_=f._prev,(f._act||C<=f._end)&&f._ts&&M!==f){if(f.parent!==this)return this.render(i,s,a);if(f.render(f._ts>0?(C-f._start)*f._ts:(f._dirty?f.totalDuration():f._tDur)+(C-f._start)*f._ts,s,a||dn&&sf(f)),h!==this._time||!this._ts&&!m){M=0,_&&(u+=this._zTime=C?-Tt:Tt);break}}f=_}}if(M&&!s&&(this.pause(),M.render(h>=o?0:-Tt)._zTime=h>=o?1:-1,this._ts))return this._start=v,rc(this),this.render(i,s,a);this._onUpdate&&!s&&si(this,"onUpdate",!0),(u===l&&this._tTime>=this.totalDuration()||!u&&o)&&(v===this._start||Math.abs(A)!==Math.abs(this._ts))&&(this._lock||((i||!c)&&(u===l&&this._ts>0||!u&&this._ts<0)&&Rr(this,1),!s&&!(i<0&&!o)&&(u||o||!l)&&(si(this,u===l&&i>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(u<l&&this.timeScale()>0)&&this._prom())))}return this},t.add=function(i,s){var a=this;if(ar(s)||(s=pi(this,s,i)),!(i instanceof fo)){if(Tn(i))return i.forEach(function(o){return a.add(o,s)}),this;if(un(i))return this.addLabel(i,s);if(Ot(i))i=Kt.delayedCall(0,i);else return this}return this!==i?Ui(this,i,s):this},t.getChildren=function(i,s,a,o){i===void 0&&(i=!0),s===void 0&&(s=!0),a===void 0&&(a=!0),o===void 0&&(o=-gi);for(var l=[],c=this._first;c;)c._start>=o&&(c instanceof Kt?s&&l.push(c):(a&&l.push(c),i&&l.push.apply(l,c.getChildren(!0,s,a)))),c=c._next;return l},t.getById=function(i){for(var s=this.getChildren(1,1,1),a=s.length;a--;)if(s[a].vars.id===i)return s[a]},t.remove=function(i){return un(i)?this.removeLabel(i):Ot(i)?this.killTweensOf(i):(i.parent===this&&ic(this,i),i===this._recent&&(this._recent=this._last),Jr(this))},t.totalTime=function(i,s){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=Lt(ii.time-(this._ts>0?i/this._ts:(this.totalDuration()-i)/-this._ts))),r.prototype.totalTime.call(this,i,s),this._forcing=0,this):this._tTime},t.addLabel=function(i,s){return this.labels[i]=pi(this,s),this},t.removeLabel=function(i){return delete this.labels[i],this},t.addPause=function(i,s,a){var o=Kt.delayedCall(0,s||co,a);return o.data="isPause",this._hasPause=1,Ui(this,o,pi(this,i))},t.removePause=function(i){var s=this._first;for(i=pi(this,i);s;)s._start===i&&s.data==="isPause"&&Rr(s),s=s._next},t.killTweensOf=function(i,s,a){for(var o=this.getTweensOf(i,a),l=o.length;l--;)Sr!==o[l]&&o[l].kill(i,s);return this},t.getTweensOf=function(i,s){for(var a=[],o=xi(i),l=this._first,c=ar(s),u;l;)l instanceof Kt?CS(l._targets,o)&&(c?(!Sr||l._initted&&l._ts)&&l.globalTime(0)<=s&&l.globalTime(l.totalDuration())>s:!s||l.isActive())&&a.push(l):(u=l.getTweensOf(o,s)).length&&a.push.apply(a,u),l=l._next;return a},t.tweenTo=function(i,s){s=s||{};var a=this,o=pi(a,i),l=s,c=l.startAt,u=l.onStart,d=l.onStartParams,h=l.immediateRender,f,_=Kt.to(a,ci({ease:s.ease||"none",lazy:!1,immediateRender:!1,time:o,overwrite:"auto",duration:s.duration||Math.abs((o-(c&&"time"in c?c.time:a._time))/a.timeScale())||Tt,onStart:function(){if(a.pause(),!f){var p=s.duration||Math.abs((o-(c&&"time"in c?c.time:a._time))/a.timeScale());_._dur!==p&&sa(_,p,0,1).render(_._time,!0,!0),f=1}u&&u.apply(_,d||[])}},s));return h?_.render(0):_},t.tweenFromTo=function(i,s,a){return this.tweenTo(s,ci({startAt:{time:pi(this,i)}},a))},t.recent=function(){return this._recent},t.nextLabel=function(i){return i===void 0&&(i=this._time),Xd(this,pi(this,i))},t.previousLabel=function(i){return i===void 0&&(i=this._time),Xd(this,pi(this,i),1)},t.currentLabel=function(i){return arguments.length?this.seek(i,!0):this.previousLabel(this._time+Tt)},t.shiftChildren=function(i,s,a){a===void 0&&(a=0);var o=this._first,l=this.labels,c;for(i=Lt(i);o;)o._start>=a&&(o._start+=i,o._end+=i),o=o._next;if(s)for(c in l)l[c]>=a&&(l[c]+=i);return Jr(this)},t.invalidate=function(i){var s=this._first;for(this._lock=0;s;)s.invalidate(i),s=s._next;return r.prototype.invalidate.call(this,i)},t.clear=function(i){i===void 0&&(i=!0);for(var s=this._first,a;s;)a=s._next,this.remove(s),s=a;return this._dp&&(this._time=this._tTime=this._pTime=0),i&&(this.labels={}),Jr(this)},t.totalDuration=function(i){var s=0,a=this,o=a._last,l=gi,c,u,d;if(arguments.length)return a.timeScale((a._repeat<0?a.duration():a.totalDuration())/(a.reversed()?-i:i));if(a._dirty){for(d=a.parent;o;)c=o._prev,o._dirty&&o.totalDuration(),u=o._start,u>l&&a._sort&&o._ts&&!a._lock?(a._lock=1,Ui(a,o,u-o._delay,1)._lock=0):l=u,u<0&&o._ts&&(s-=u,(!d&&!a._dp||d&&d.smoothChildTiming)&&(a._start+=Lt(u/a._ts),a._time-=u,a._tTime-=u),a.shiftChildren(-u,!1,-1/0),l=0),o._end>s&&o._ts&&(s=o._end),o=c;sa(a,a===It&&a._time>s?a._time:s,1,1),a._dirty=0}return a._tDur},e.updateRoot=function(i){if(It._ts&&(T0(It,kl(i,It)),M0=ii.frame),ii.frame>=Vd){Vd+=oi.autoSleep||120;var s=It._first;if((!s||!s._ts)&&oi.autoSleep&&ii._listeners.length<2){for(;s&&!s._ts;)s=s._next;s||ii.sleep()}}},e})(fo);ci(Nn.prototype,{_lock:0,_hasPause:0,_forcing:0});var JS=function(e,t,n,i,s,a,o){var l=new Xn(this._pt,e,t,0,1,J0,null,s),c=0,u=0,d,h,f,_,g,p,m,M;for(l.b=n,l.e=i,n+="",i+="",(m=~i.indexOf("random("))&&(i=uo(i)),a&&(M=[n,i],a(M,e,t),n=M[0],i=M[1]),h=n.match(Gc)||[];d=Gc.exec(i);)_=d[0],g=i.substring(c,d.index),f?f=(f+1)%5:g.substr(-5)==="rgba("&&(f=1),_!==h[u++]&&(p=parseFloat(h[u-1])||0,l._pt={_next:l._pt,p:g||u===1?g:",",s:p,c:_.charAt(1)==="="?Xs(p,_)-p:parseFloat(_)-p,m:f&&f<4?Math.round:0},c=Gc.lastIndex);return l.c=c<i.length?i.substring(c,i.length):"",l.fp=o,(g0.test(i)||m)&&(l.e=0),this._pt=l,l},af=function(e,t,n,i,s,a,o,l,c,u){Ot(i)&&(i=i(s||0,e,a));var d=e[t],h=n!=="get"?n:Ot(d)?c?e[t.indexOf("set")||!Ot(e["get"+t.substr(3)])?t:"get"+t.substr(3)](c):e[t]():d,f=Ot(d)?c?nM:$0:lf,_;if(un(i)&&(~i.indexOf("random(")&&(i=uo(i)),i.charAt(1)==="="&&(_=Xs(h,i)+(Sn(h)||0),(_||_===0)&&(i=_))),!u||h!==i||oh)return!isNaN(h*i)&&i!==""?(_=new Xn(this._pt,e,t,+h||0,i-(h||0),typeof d=="boolean"?rM:K0,0,f),c&&(_.fp=c),o&&_.modifier(o,this,e),this._pt=_):(!d&&!(t in e)&&ef(t,i),JS.call(this,e,t,h,i,f,l||oi.stringFilter,c))},QS=function(e,t,n,i,s){if(Ot(e)&&(e=ka(e,s,t,n,i)),!Wi(e)||e.style&&e.nodeType||Tn(e)||m0(e))return un(e)?ka(e,s,t,n,i):e;var a={},o;for(o in e)a[o]=ka(e[o],s,t,n,i);return a},X0=function(e,t,n,i,s,a){var o,l,c,u;if(ei[e]&&(o=new ei[e]).init(s,o.rawVars?t[e]:QS(t[e],i,s,a,n),n,i,a)!==!1&&(n._pt=l=new Xn(n._pt,s,e,0,1,o.render,o,0,o.priority),n!==ks))for(c=n._ptLookup[n._targets.indexOf(s)],u=o._props.length;u--;)c[o._props[u]]=l;return o},Sr,oh,of=function r(e,t,n){var i=e.vars,s=i.ease,a=i.startAt,o=i.immediateRender,l=i.lazy,c=i.onUpdate,u=i.runBackwards,d=i.yoyoEase,h=i.keyframes,f=i.autoRevert,_=e._dur,g=e._startAt,p=e._targets,m=e.parent,M=m&&m.data==="nested"?m.vars.targets:p,A=e._overwrite==="auto"&&!Kh,v=e.timeline,y,E,w,x,T,C,L,D,k,I,F,X,z;if(v&&(!h||!s)&&(s="none"),e._ease=Qr(s,na.ease),e._yEase=d?V0(Qr(d===!0?s:d,na.ease)):0,d&&e._yoyo&&!e._repeat&&(d=e._yEase,e._yEase=e._ease,e._ease=d),e._from=!v&&!!i.runBackwards,!v||h&&!i.stagger){if(D=p[0]?Kr(p[0]).harness:0,X=D&&i[D.prop],y=zl(i,tf),g&&(g._zTime<0&&g.progress(1),t<0&&u&&o&&!f?g.render(-1,!0):g.revert(u&&_?Sl:wS),g._lazy=0),a){if(Rr(e._startAt=Kt.set(p,ci({data:"isStart",overwrite:!1,parent:m,immediateRender:!0,lazy:!g&&Gn(l),startAt:null,delay:0,onUpdate:c&&function(){return si(e,"onUpdate")},stagger:0},a))),e._startAt._dp=0,e._startAt._sat=e,t<0&&(dn||!o&&!f)&&e._startAt.revert(Sl),o&&_&&t<=0&&n<=0){t&&(e._zTime=t);return}}else if(u&&_&&!g){if(t&&(o=!1),w=ci({overwrite:!1,data:"isFromStart",lazy:o&&!g&&Gn(l),immediateRender:o,stagger:0,parent:m},y),X&&(w[D.prop]=X),Rr(e._startAt=Kt.set(p,w)),e._startAt._dp=0,e._startAt._sat=e,t<0&&(dn?e._startAt.revert(Sl):e._startAt.render(-1,!0)),e._zTime=t,!o)r(e._startAt,Tt,Tt);else if(!t)return}for(e._pt=e._ptCache=0,l=_&&Gn(l)||l&&!_,E=0;E<p.length;E++){if(T=p[E],L=T._gsap||rf(p)[E]._gsap,e._ptLookup[E]=I={},th[L.id]&&br.length&&Bl(),F=M===p?E:M.indexOf(T),D&&(k=new D).init(T,X||y,e,F,M)!==!1&&(e._pt=x=new Xn(e._pt,T,k.name,0,1,k.render,k,0,k.priority),k._props.forEach(function(j){I[j]=x}),k.priority&&(C=1)),!D||X)for(w in y)ei[w]&&(k=X0(w,y,e,F,T,M))?k.priority&&(C=1):I[w]=x=af.call(e,T,w,"get",y[w],F,M,0,i.stringFilter);e._op&&e._op[E]&&e.kill(T,e._op[E]),A&&e._pt&&(Sr=e,It.killTweensOf(T,I,e.globalTime(t)),z=!e.parent,Sr=0),e._pt&&l&&(th[L.id]=1)}C&&Q0(e),e._onInit&&e._onInit(e)}e._onUpdate=c,e._initted=(!e._op||e._pt)&&!z,h&&t<=0&&v.render(gi,!0,!0)},jS=function(e,t,n,i,s,a,o,l){var c=(e._pt&&e._ptCache||(e._ptCache={}))[t],u,d,h,f;if(!c)for(c=e._ptCache[t]=[],h=e._ptLookup,f=e._targets.length;f--;){if(u=h[f][t],u&&u.d&&u.d._pt)for(u=u.d._pt;u&&u.p!==t&&u.fp!==t;)u=u._next;if(!u)return oh=1,e.vars[t]="+=0",of(e,o),oh=0,l?lo(t+" not eligible for reset"):1;c.push(u)}for(f=c.length;f--;)d=c[f],u=d._pt||d,u.s=(i||i===0)&&!s?i:u.s+(i||0)+a*u.c,u.c=n-u.s,d.e&&(d.e=Vt(n)+Sn(d.e)),d.b&&(d.b=u.s+Sn(d.b))},eM=function(e,t){var n=e[0]?Kr(e[0]).harness:0,i=n&&n.aliases,s,a,o,l;if(!i)return t;s=ia({},t);for(a in i)if(a in s)for(l=i[a].split(","),o=l.length;o--;)s[l[o]]=s[a];return s},tM=function(e,t,n,i){var s=t.ease||i||"power1.inOut",a,o;if(Tn(t))o=n[e]||(n[e]=[]),t.forEach(function(l,c){return o.push({t:c/(t.length-1)*100,v:l,e:s})});else for(a in t)o=n[a]||(n[a]=[]),a==="ease"||o.push({t:parseFloat(e),v:t[a],e:s})},ka=function(e,t,n,i,s){return Ot(e)?e.call(t,n,i,s):un(e)&&~e.indexOf("random(")?uo(e):e},Y0=nf+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",Z0={};Wn(Y0+",id,stagger,delay,duration,paused,scrollTrigger",function(r){return Z0[r]=1});var Kt=(function(r){d0(e,r);function e(n,i,s,a){var o;typeof i=="number"&&(s.duration=i,i=s,s=null),o=r.call(this,a?i:Ba(i))||this;var l=o.vars,c=l.duration,u=l.delay,d=l.immediateRender,h=l.stagger,f=l.overwrite,_=l.keyframes,g=l.defaults,p=l.scrollTrigger,m=l.yoyoEase,M=i.parent||It,A=(Tn(n)||m0(n)?ar(n[0]):"length"in i)?[n]:xi(n),v,y,E,w,x,T,C,L;if(o._targets=A.length?rf(A):lo("GSAP target "+n+" not found. https://gsap.com",!oi.nullTargetWarn)||[],o._ptLookup=[],o._overwrite=f,_||h||jo(c)||jo(u)){if(i=o.vars,v=o.timeline=new Nn({data:"nested",defaults:g||{},targets:M&&M.data==="nested"?M.vars.targets:A}),v.kill(),v.parent=v._dp=Qi(o),v._start=0,h||jo(c)||jo(u)){if(w=A.length,C=h&&L0(h),Wi(h))for(x in h)~Y0.indexOf(x)&&(L||(L={}),L[x]=h[x]);for(y=0;y<w;y++)E=zl(i,Z0),E.stagger=0,m&&(E.yoyoEase=m),L&&ia(E,L),T=A[y],E.duration=+ka(c,Qi(o),y,T,A),E.delay=(+ka(u,Qi(o),y,T,A)||0)-o._delay,!h&&w===1&&E.delay&&(o._delay=u=E.delay,o._start+=u,E.delay=0),v.to(T,E,C?C(y,T,A):0),v._ease=dt.none;v.duration()?c=u=0:o.timeline=0}else if(_){Ba(ci(v.vars.defaults,{ease:"none"})),v._ease=Qr(_.ease||i.ease||"none");var D=0,k,I,F;if(Tn(_))_.forEach(function(X){return v.to(A,X,">")}),v.duration();else{E={};for(x in _)x==="ease"||x==="easeEach"||tM(x,_[x],E,_.easeEach);for(x in E)for(k=E[x].sort(function(X,z){return X.t-z.t}),D=0,y=0;y<k.length;y++)I=k[y],F={ease:I.e,duration:(I.t-(y?k[y-1].t:0))/100*c},F[x]=I.v,v.to(A,F,D),D+=F.duration;v.duration()<c&&v.to({},{duration:c-v.duration()})}}c||o.duration(c=v.duration())}else o.timeline=0;return f===!0&&!Kh&&(Sr=Qi(o),It.killTweensOf(A),Sr=0),Ui(M,Qi(o),s),i.reversed&&o.reverse(),i.paused&&o.paused(!0),(d||!c&&!_&&o._start===Lt(M._time)&&Gn(d)&&LS(Qi(o))&&M.data!=="nested")&&(o._tTime=-Tt,o.render(Math.max(0,-u)||0)),p&&C0(Qi(o),p),o}var t=e.prototype;return t.render=function(i,s,a){var o=this._time,l=this._tDur,c=this._dur,u=i<0,d=i>l-Tt&&!u?l:i<Tt?0:i,h,f,_,g,p,m,M,A,v;if(!c)NS(this,i,s,a);else if(d!==this._tTime||!i||a||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==u||this._lazy){if(h=d,A=this.timeline,this._repeat){if(g=c+this._rDelay,this._repeat<-1&&u)return this.totalTime(g*100+i,s,a);if(h=Lt(d%g),d===l?(_=this._repeat,h=c):(p=Lt(d/g),_=~~p,_&&_===p?(h=c,_--):h>c&&(h=c)),m=this._yoyo&&_&1,m&&(v=this._yEase,h=c-h),p=ra(this._tTime,g),h===o&&!a&&this._initted&&_===p)return this._tTime=d,this;_!==p&&(A&&this._yEase&&H0(A,m),this.vars.repeatRefresh&&!m&&!this._lock&&h!==g&&this._initted&&(this._lock=a=1,this.render(Lt(g*_),!0).invalidate()._lock=0))}if(!this._initted){if(R0(this,u?i:h,a,s,d))return this._tTime=0,this;if(o!==this._time&&!(a&&this.vars.repeatRefresh&&_!==p))return this;if(c!==this._dur)return this.render(i,s,a)}if(this._tTime=d,this._time=h,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=M=(v||this._ease)(h/c),this._from&&(this.ratio=M=1-M),!o&&d&&!s&&!p&&(si(this,"onStart"),this._tTime!==d))return this;for(f=this._pt;f;)f.r(M,f.d),f=f._next;A&&A.render(i<0?i:A._dur*A._ease(h/this._dur),s,a)||this._startAt&&(this._zTime=i),this._onUpdate&&!s&&(u&&nh(this,i,s,a),si(this,"onUpdate")),this._repeat&&_!==p&&this.vars.onRepeat&&!s&&this.parent&&si(this,"onRepeat"),(d===this._tDur||!d)&&this._tTime===d&&(u&&!this._onUpdate&&nh(this,i,!0,!0),(i||!c)&&(d===this._tDur&&this._ts>0||!d&&this._ts<0)&&Rr(this,1),!s&&!(u&&!o)&&(d||o||m)&&(si(this,d===l?"onComplete":"onReverseComplete",!0),this._prom&&!(d<l&&this.timeScale()>0)&&this._prom()))}return this},t.targets=function(){return this._targets},t.invalidate=function(i){return(!i||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(i),r.prototype.invalidate.call(this,i)},t.resetTo=function(i,s,a,o,l){ho||ii.wake(),this._ts||this.play();var c=Math.min(this._dur,(this._dp._time-this._start)*this._ts),u;return this._initted||of(this,c),u=this._ease(c/this._dur),jS(this,i,s,a,o,u,c,l)?this.resetTo(i,s,a,o,1):(sc(this,0),this.parent||w0(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},t.kill=function(i,s){if(s===void 0&&(s="all"),!i&&(!s||s==="all"))return this._lazy=this._pt=0,this.parent?Ca(this):this.scrollTrigger&&this.scrollTrigger.kill(!!dn),this;if(this.timeline){var a=this.timeline.totalDuration();return this.timeline.killTweensOf(i,s,Sr&&Sr.vars.overwrite!==!0)._first||Ca(this),this.parent&&a!==this.timeline.totalDuration()&&sa(this,this._dur*this.timeline._tDur/a,0,1),this}var o=this._targets,l=i?xi(i):o,c=this._ptLookup,u=this._pt,d,h,f,_,g,p,m;if((!s||s==="all")&&PS(o,l))return s==="all"&&(this._pt=0),Ca(this);for(d=this._op=this._op||[],s!=="all"&&(un(s)&&(g={},Wn(s,function(M){return g[M]=1}),s=g),s=eM(o,s)),m=o.length;m--;)if(~l.indexOf(o[m])){h=c[m],s==="all"?(d[m]=s,_=h,f={}):(f=d[m]=d[m]||{},_=s);for(g in _)p=h&&h[g],p&&((!("kill"in p.d)||p.d.kill(g)===!0)&&ic(this,p,"_pt"),delete h[g]),f!=="all"&&(f[g]=1)}return this._initted&&!this._pt&&u&&Ca(this),this},e.to=function(i,s){return new e(i,s,arguments[2])},e.from=function(i,s){return za(1,arguments)},e.delayedCall=function(i,s,a,o){return new e(s,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:i,onComplete:s,onReverseComplete:s,onCompleteParams:a,onReverseCompleteParams:a,callbackScope:o})},e.fromTo=function(i,s,a){return za(2,arguments)},e.set=function(i,s){return s.duration=0,s.repeatDelay||(s.repeat=0),new e(i,s)},e.killTweensOf=function(i,s,a){return It.killTweensOf(i,s,a)},e})(fo);ci(Kt.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});Wn("staggerTo,staggerFrom,staggerFromTo",function(r){Kt[r]=function(){var e=new Nn,t=rh.call(arguments,0);return t.splice(r==="staggerFromTo"?5:4,0,0),e[r].apply(e,t)}});var lf=function(e,t,n){return e[t]=n},$0=function(e,t,n){return e[t](n)},nM=function(e,t,n,i){return e[t](i.fp,n)},iM=function(e,t,n){return e.setAttribute(t,n)},cf=function(e,t){return Ot(e[t])?$0:Jh(e[t])&&e.setAttribute?iM:lf},K0=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e6)/1e6,t)},rM=function(e,t){return t.set(t.t,t.p,!!(t.s+t.c*e),t)},J0=function(e,t){var n=t._pt,i="";if(!e&&t.b)i=t.b;else if(e===1&&t.e)i=t.e;else{for(;n;)i=n.p+(n.m?n.m(n.s+n.c*e):Math.round((n.s+n.c*e)*1e4)/1e4)+i,n=n._next;i+=t.c}t.set(t.t,t.p,i,t)},uf=function(e,t){for(var n=t._pt;n;)n.r(e,n.d),n=n._next},sM=function(e,t,n,i){for(var s=this._pt,a;s;)a=s._next,s.p===i&&s.modifier(e,t,n),s=a},aM=function(e){for(var t=this._pt,n,i;t;)i=t._next,t.p===e&&!t.op||t.op===e?ic(this,t,"_pt"):t.dep||(n=1),t=i;return!n},oM=function(e,t,n,i){i.mSet(e,t,i.m.call(i.tween,n,i.mt),i)},Q0=function(e){for(var t=e._pt,n,i,s,a;t;){for(n=t._next,i=s;i&&i.pr>t.pr;)i=i._next;(t._prev=i?i._prev:a)?t._prev._next=t:s=t,(t._next=i)?i._prev=t:a=t,t=n}e._pt=s},Xn=(function(){function r(t,n,i,s,a,o,l,c,u){this.t=n,this.s=s,this.c=a,this.p=i,this.r=o||K0,this.d=l||this,this.set=c||lf,this.pr=u||0,this._next=t,t&&(t._prev=this)}var e=r.prototype;return e.modifier=function(n,i,s){this.mSet=this.mSet||this.set,this.set=oM,this.m=n,this.mt=s,this.tween=i},r})();Wn(nf+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(r){return tf[r]=1});li.TweenMax=li.TweenLite=Kt;li.TimelineLite=li.TimelineMax=Nn;It=new Nn({sortChildren:!1,defaults:na,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});oi.stringFilter=k0;var jr=[],yl={},lM=[],Zd=0,cM=0,$c=function(e){return(yl[e]||lM).map(function(t){return t()})},lh=function(){var e=Date.now(),t=[];e-Zd>2&&($c("matchMediaInit"),jr.forEach(function(n){var i=n.queries,s=n.conditions,a,o,l,c;for(o in i)a=Di.matchMedia(i[o]).matches,a&&(l=1),a!==s[o]&&(s[o]=a,c=1);c&&(n.revert(),l&&t.push(n))}),$c("matchMediaRevert"),t.forEach(function(n){return n.onMatch(n,function(i){return n.add(null,i)})}),Zd=e,$c("matchMedia"))},j0=(function(){function r(t,n){this.selector=n&&sh(n),this.data=[],this._r=[],this.isReverted=!1,this.id=cM++,t&&this.add(t)}var e=r.prototype;return e.add=function(n,i,s){Ot(n)&&(s=i,i=n,n=Ot);var a=this,o=function(){var c=Pt,u=a.selector,d;return c&&c!==a&&c.data.push(a),s&&(a.selector=sh(s)),Pt=a,d=i.apply(a,arguments),Ot(d)&&a._r.push(d),Pt=c,a.selector=u,a.isReverted=!1,d};return a.last=o,n===Ot?o(a,function(l){return a.add(null,l)}):n?a[n]=o:o},e.ignore=function(n){var i=Pt;Pt=null,n(this),Pt=i},e.getTweens=function(){var n=[];return this.data.forEach(function(i){return i instanceof r?n.push.apply(n,i.getTweens()):i instanceof Kt&&!(i.parent&&i.parent.data==="nested")&&n.push(i)}),n},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(n,i){var s=this;if(n?(function(){for(var o=s.getTweens(),l=s.data.length,c;l--;)c=s.data[l],c.data==="isFlip"&&(c.revert(),c.getChildren(!0,!0,!1).forEach(function(u){return o.splice(o.indexOf(u),1)}));for(o.map(function(u){return{g:u._dur||u._delay||u._sat&&!u._sat.vars.immediateRender?u.globalTime(0):-1/0,t:u}}).sort(function(u,d){return d.g-u.g||-1/0}).forEach(function(u){return u.t.revert(n)}),l=s.data.length;l--;)c=s.data[l],c instanceof Nn?c.data!=="nested"&&(c.scrollTrigger&&c.scrollTrigger.revert(),c.kill()):!(c instanceof Kt)&&c.revert&&c.revert(n);s._r.forEach(function(u){return u(n,s)}),s.isReverted=!0})():this.data.forEach(function(o){return o.kill&&o.kill()}),this.clear(),i)for(var a=jr.length;a--;)jr[a].id===this.id&&jr.splice(a,1)},e.revert=function(n){this.kill(n||{})},r})(),uM=(function(){function r(t){this.contexts=[],this.scope=t,Pt&&Pt.data.push(this)}var e=r.prototype;return e.add=function(n,i,s){Wi(n)||(n={matches:n});var a=new j0(0,s||this.scope),o=a.conditions={},l,c,u;Pt&&!a.selector&&(a.selector=Pt.selector),this.contexts.push(a),i=a.add("onMatch",i),a.queries=n;for(c in n)c==="all"?u=1:(l=Di.matchMedia(n[c]),l&&(jr.indexOf(a)<0&&jr.push(a),(o[c]=l.matches)&&(u=1),l.addListener?l.addListener(lh):l.addEventListener("change",lh)));return u&&i(a,function(d){return a.add(null,d)}),this},e.revert=function(n){this.kill(n||{})},e.kill=function(n){this.contexts.forEach(function(i){return i.kill(n,!0)})},r})(),Vl={registerPlugin:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];t.forEach(function(i){return O0(i)})},timeline:function(e){return new Nn(e)},getTweensOf:function(e,t){return It.getTweensOf(e,t)},getProperty:function(e,t,n,i){un(e)&&(e=xi(e)[0]);var s=Kr(e||{}).get,a=n?b0:E0;return n==="native"&&(n=""),e&&(t?a((ei[t]&&ei[t].get||s)(e,t,n,i)):function(o,l,c){return a((ei[o]&&ei[o].get||s)(e,o,l,c))})},quickSetter:function(e,t,n){if(e=xi(e),e.length>1){var i=e.map(function(u){return Zn.quickSetter(u,t,n)}),s=i.length;return function(u){for(var d=s;d--;)i[d](u)}}e=e[0]||{};var a=ei[t],o=Kr(e),l=o.harness&&(o.harness.aliases||{})[t]||t,c=a?function(u){var d=new a;ks._pt=0,d.init(e,n?u+n:u,ks,0,[e]),d.render(1,d),ks._pt&&uf(1,ks)}:o.set(e,l);return a?c:function(u){return c(e,l,n?u+n:u,o,1)}},quickTo:function(e,t,n){var i,s=Zn.to(e,ci((i={},i[t]="+=0.1",i.paused=!0,i.stagger=0,i),n||{})),a=function(l,c,u){return s.resetTo(t,l,c,u)};return a.tween=s,a},isTweening:function(e){return It.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=Qr(e.ease,na.ease)),Hd(na,e||{})},config:function(e){return Hd(oi,e||{})},registerEffect:function(e){var t=e.name,n=e.effect,i=e.plugins,s=e.defaults,a=e.extendTimeline;(i||"").split(",").forEach(function(o){return o&&!ei[o]&&!li[o]&&lo(t+" effect requires "+o+" plugin.")}),Wc[t]=function(o,l,c){return n(xi(o),ci(l||{},s),c)},a&&(Nn.prototype[t]=function(o,l,c){return this.add(Wc[t](o,Wi(l)?l:(c=l)&&{},this),c)})},registerEase:function(e,t){dt[e]=Qr(t)},parseEase:function(e,t){return arguments.length?Qr(e,t):dt},getById:function(e){return It.getById(e)},exportRoot:function(e,t){e===void 0&&(e={});var n=new Nn(e),i,s;for(n.smoothChildTiming=Gn(e.smoothChildTiming),It.remove(n),n._dp=0,n._time=n._tTime=It._time,i=It._first;i;)s=i._next,(t||!(!i._dur&&i instanceof Kt&&i.vars.onComplete===i._targets[0]))&&Ui(n,i,i._start-i._delay),i=s;return Ui(It,n,0),n},context:function(e,t){return e?new j0(e,t):Pt},matchMedia:function(e){return new uM(e)},matchMediaRefresh:function(){return jr.forEach(function(e){var t=e.conditions,n,i;for(i in t)t[i]&&(t[i]=!1,n=1);n&&e.revert()})||lh()},addEventListener:function(e,t){var n=yl[e]||(yl[e]=[]);~n.indexOf(t)||n.push(t)},removeEventListener:function(e,t){var n=yl[e],i=n&&n.indexOf(t);i>=0&&n.splice(i,1)},utils:{wrap:VS,wrapYoyo:HS,distribute:L0,random:N0,snap:I0,normalize:kS,getUnit:Sn,clamp:FS,splitColor:B0,toArray:xi,selector:sh,mapRange:q0,pipe:BS,unitize:zS,interpolate:GS,shuffle:D0},install:v0,effects:Wc,ticker:ii,updateRoot:Nn.updateRoot,plugins:ei,globalTimeline:It,core:{PropTween:Xn,globals:S0,Tween:Kt,Timeline:Nn,Animation:fo,getCache:Kr,_removeLinkedListItem:ic,reverting:function(){return dn},context:function(e){return e&&Pt&&(Pt.data.push(e),e._ctx=Pt),Pt},suppressOverwrites:function(e){return Kh=e}}};Wn("to,from,fromTo,delayedCall,set,killTweensOf",function(r){return Vl[r]=Kt[r]});ii.add(Nn.updateRoot);ks=Vl.to({},{duration:0});var hM=function(e,t){for(var n=e._pt;n&&n.p!==t&&n.op!==t&&n.fp!==t;)n=n._next;return n},fM=function(e,t){var n=e._targets,i,s,a;for(i in t)for(s=n.length;s--;)a=e._ptLookup[s][i],a&&(a=a.d)&&(a._pt&&(a=hM(a,i)),a&&a.modifier&&a.modifier(t[i],e,n[s],i))},Kc=function(e,t){return{name:e,headless:1,rawVars:1,init:function(i,s,a){a._onInit=function(o){var l,c;if(un(s)&&(l={},Wn(s,function(u){return l[u]=1}),s=l),t){l={};for(c in s)l[c]=t(s[c]);s=l}fM(o,s)}}}},Zn=Vl.registerPlugin({name:"attr",init:function(e,t,n,i,s){var a,o,l;this.tween=n;for(a in t)l=e.getAttribute(a)||"",o=this.add(e,"setAttribute",(l||0)+"",t[a],i,s,0,0,a),o.op=a,o.b=l,this._props.push(a)},render:function(e,t){for(var n=t._pt;n;)dn?n.set(n.t,n.p,n.b,n):n.r(e,n.d),n=n._next}},{name:"endArray",headless:1,init:function(e,t){for(var n=t.length;n--;)this.add(e,n,e[n]||0,t[n],0,0,0,0,0,1)}},Kc("roundProps",ah),Kc("modifiers"),Kc("snap",I0))||Vl;Kt.version=Nn.version=Zn.version="3.14.2";x0=1;Qh()&&aa();dt.Power0;dt.Power1;dt.Power2;dt.Power3;dt.Power4;dt.Linear;dt.Quad;dt.Cubic;dt.Quart;dt.Quint;dt.Strong;dt.Elastic;dt.Back;dt.SteppedEase;dt.Bounce;dt.Sine;dt.Expo;dt.Circ;var $d,Mr,Ys,hf,Zr,Kd,ff,dM=function(){return typeof window<"u"},or={},Vr=180/Math.PI,Zs=Math.PI/180,Ls=Math.atan2,Jd=1e8,df=/([A-Z])/g,pM=/(left|right|width|margin|padding|x)/i,mM=/[\s,\(]\S/,Oi={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},ch=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},_M=function(e,t){return t.set(t.t,t.p,e===1?t.e:Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},gM=function(e,t){return t.set(t.t,t.p,e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},xM=function(e,t){return t.set(t.t,t.p,e===1?t.e:e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},vM=function(e,t){var n=t.s+t.c*e;t.set(t.t,t.p,~~(n+(n<0?-.5:.5))+t.u,t)},em=function(e,t){return t.set(t.t,t.p,e?t.e:t.b,t)},tm=function(e,t){return t.set(t.t,t.p,e!==1?t.b:t.e,t)},SM=function(e,t,n){return e.style[t]=n},MM=function(e,t,n){return e.style.setProperty(t,n)},yM=function(e,t,n){return e._gsap[t]=n},TM=function(e,t,n){return e._gsap.scaleX=e._gsap.scaleY=n},EM=function(e,t,n,i,s){var a=e._gsap;a.scaleX=a.scaleY=n,a.renderTransform(s,a)},bM=function(e,t,n,i,s){var a=e._gsap;a[t]=n,a.renderTransform(s,a)},qt="transform",Yn=qt+"Origin",wM=function r(e,t){var n=this,i=this.target,s=i.style,a=i._gsap;if(e in or&&s){if(this.tfm=this.tfm||{},e!=="transform")e=Oi[e]||e,~e.indexOf(",")?e.split(",").forEach(function(o){return n.tfm[o]=ji(i,o)}):this.tfm[e]=a.x?a[e]:ji(i,e),e===Yn&&(this.tfm.zOrigin=a.zOrigin);else return Oi.transform.split(",").forEach(function(o){return r.call(n,o,t)});if(this.props.indexOf(qt)>=0)return;a.svg&&(this.svgo=i.getAttribute("data-svg-origin"),this.props.push(Yn,t,"")),e=qt}(s||t)&&this.props.push(e,t,s[e])},nm=function(e){e.translate&&(e.removeProperty("translate"),e.removeProperty("scale"),e.removeProperty("rotate"))},AM=function(){var e=this.props,t=this.target,n=t.style,i=t._gsap,s,a;for(s=0;s<e.length;s+=3)e[s+1]?e[s+1]===2?t[e[s]](e[s+2]):t[e[s]]=e[s+2]:e[s+2]?n[e[s]]=e[s+2]:n.removeProperty(e[s].substr(0,2)==="--"?e[s]:e[s].replace(df,"-$1").toLowerCase());if(this.tfm){for(a in this.tfm)i[a]=this.tfm[a];i.svg&&(i.renderTransform(),t.setAttribute("data-svg-origin",this.svgo||"")),s=ff(),(!s||!s.isStart)&&!n[qt]&&(nm(n),i.zOrigin&&n[Yn]&&(n[Yn]+=" "+i.zOrigin+"px",i.zOrigin=0,i.renderTransform()),i.uncache=1)}},im=function(e,t){var n={target:e,props:[],revert:AM,save:wM};return e._gsap||Zn.core.getCache(e),t&&e.style&&e.nodeType&&t.split(",").forEach(function(i){return n.save(i)}),n},rm,uh=function(e,t){var n=Mr.createElementNS?Mr.createElementNS((t||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):Mr.createElement(e);return n&&n.style?n:Mr.createElement(e)},ai=function r(e,t,n){var i=getComputedStyle(e);return i[t]||i.getPropertyValue(t.replace(df,"-$1").toLowerCase())||i.getPropertyValue(t)||!n&&r(e,oa(t)||t,1)||""},Qd="O,Moz,ms,Ms,Webkit".split(","),oa=function(e,t,n){var i=t||Zr,s=i.style,a=5;if(e in s&&!n)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);a--&&!(Qd[a]+e in s););return a<0?null:(a===3?"ms":a>=0?Qd[a]:"")+e},hh=function(){dM()&&window.document&&($d=window,Mr=$d.document,Ys=Mr.documentElement,Zr=uh("div")||{style:{}},uh("div"),qt=oa(qt),Yn=qt+"Origin",Zr.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",rm=!!oa("perspective"),ff=Zn.core.reverting,hf=1)},jd=function(e){var t=e.ownerSVGElement,n=uh("svg",t&&t.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),i=e.cloneNode(!0),s;i.style.display="block",n.appendChild(i),Ys.appendChild(n);try{s=i.getBBox()}catch{}return n.removeChild(i),Ys.removeChild(n),s},ep=function(e,t){for(var n=t.length;n--;)if(e.hasAttribute(t[n]))return e.getAttribute(t[n])},sm=function(e){var t,n;try{t=e.getBBox()}catch{t=jd(e),n=1}return t&&(t.width||t.height)||n||(t=jd(e)),t&&!t.width&&!t.x&&!t.y?{x:+ep(e,["x","cx","x1"])||0,y:+ep(e,["y","cy","y1"])||0,width:0,height:0}:t},am=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&sm(e))},Pr=function(e,t){if(t){var n=e.style,i;t in or&&t!==Yn&&(t=qt),n.removeProperty?(i=t.substr(0,2),(i==="ms"||t.substr(0,6)==="webkit")&&(t="-"+t),n.removeProperty(i==="--"?t:t.replace(df,"-$1").toLowerCase())):n.removeAttribute(t)}},yr=function(e,t,n,i,s,a){var o=new Xn(e._pt,t,n,0,1,a?tm:em);return e._pt=o,o.b=i,o.e=s,e._props.push(n),o},tp={deg:1,rad:1,turn:1},CM={grid:1,flex:1},Dr=function r(e,t,n,i){var s=parseFloat(n)||0,a=(n+"").trim().substr((s+"").length)||"px",o=Zr.style,l=pM.test(t),c=e.tagName.toLowerCase()==="svg",u=(c?"client":"offset")+(l?"Width":"Height"),d=100,h=i==="px",f=i==="%",_,g,p,m;if(i===a||!s||tp[i]||tp[a])return s;if(a!=="px"&&!h&&(s=r(e,t,n,"px")),m=e.getCTM&&am(e),(f||a==="%")&&(or[t]||~t.indexOf("adius")))return _=m?e.getBBox()[l?"width":"height"]:e[u],Vt(f?s/_*d:s/100*_);if(o[l?"width":"height"]=d+(h?a:i),g=i!=="rem"&&~t.indexOf("adius")||i==="em"&&e.appendChild&&!c?e:e.parentNode,m&&(g=(e.ownerSVGElement||{}).parentNode),(!g||g===Mr||!g.appendChild)&&(g=Mr.body),p=g._gsap,p&&f&&p.width&&l&&p.time===ii.time&&!p.uncache)return Vt(s/p.width*d);if(f&&(t==="height"||t==="width")){var M=e.style[t];e.style[t]=d+i,_=e[u],M?e.style[t]=M:Pr(e,t)}else(f||a==="%")&&!CM[ai(g,"display")]&&(o.position=ai(e,"position")),g===e&&(o.position="static"),g.appendChild(Zr),_=Zr[u],g.removeChild(Zr),o.position="absolute";return l&&f&&(p=Kr(g),p.time=ii.time,p.width=g[u]),Vt(h?_*s/d:_&&s?d/_*s:0)},ji=function(e,t,n,i){var s;return hf||hh(),t in Oi&&t!=="transform"&&(t=Oi[t],~t.indexOf(",")&&(t=t.split(",")[0])),or[t]&&t!=="transform"?(s=mo(e,i),s=t!=="transformOrigin"?s[t]:s.svg?s.origin:Gl(ai(e,Yn))+" "+s.zOrigin+"px"):(s=e.style[t],(!s||s==="auto"||i||~(s+"").indexOf("calc("))&&(s=Hl[t]&&Hl[t](e,t,n)||ai(e,t)||y0(e,t)||(t==="opacity"?1:0))),n&&!~(s+"").trim().indexOf(" ")?Dr(e,t,s,n)+n:s},RM=function(e,t,n,i){if(!n||n==="none"){var s=oa(t,e,1),a=s&&ai(e,s,1);a&&a!==n?(t=s,n=a):t==="borderColor"&&(n=ai(e,"borderTopColor"))}var o=new Xn(this._pt,e.style,t,0,1,J0),l=0,c=0,u,d,h,f,_,g,p,m,M,A,v,y;if(o.b=n,o.e=i,n+="",i+="",i.substring(0,6)==="var(--"&&(i=ai(e,i.substring(4,i.indexOf(")")))),i==="auto"&&(g=e.style[t],e.style[t]=i,i=ai(e,t)||i,g?e.style[t]=g:Pr(e,t)),u=[n,i],k0(u),n=u[0],i=u[1],h=n.match(zs)||[],y=i.match(zs)||[],y.length){for(;d=zs.exec(i);)p=d[0],M=i.substring(l,d.index),_?_=(_+1)%5:(M.substr(-5)==="rgba("||M.substr(-5)==="hsla(")&&(_=1),p!==(g=h[c++]||"")&&(f=parseFloat(g)||0,v=g.substr((f+"").length),p.charAt(1)==="="&&(p=Xs(f,p)+v),m=parseFloat(p),A=p.substr((m+"").length),l=zs.lastIndex-A.length,A||(A=A||oi.units[t]||v,l===i.length&&(i+=A,o.e+=A)),v!==A&&(f=Dr(e,t,g,A)||0),o._pt={_next:o._pt,p:M||c===1?M:",",s:f,c:m-f,m:_&&_<4||t==="zIndex"?Math.round:0});o.c=l<i.length?i.substring(l,i.length):""}else o.r=t==="display"&&i==="none"?tm:em;return g0.test(i)&&(o.e=0),this._pt=o,o},np={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},PM=function(e){var t=e.split(" "),n=t[0],i=t[1]||"50%";return(n==="top"||n==="bottom"||i==="left"||i==="right")&&(e=n,n=i,i=e),t[0]=np[n]||n,t[1]=np[i]||i,t.join(" ")},DM=function(e,t){if(t.tween&&t.tween._time===t.tween._dur){var n=t.t,i=n.style,s=t.u,a=n._gsap,o,l,c;if(s==="all"||s===!0)i.cssText="",l=1;else for(s=s.split(","),c=s.length;--c>-1;)o=s[c],or[o]&&(l=1,o=o==="transformOrigin"?Yn:qt),Pr(n,o);l&&(Pr(n,qt),a&&(a.svg&&n.removeAttribute("transform"),i.scale=i.rotate=i.translate="none",mo(n,1),a.uncache=1,nm(i)))}},Hl={clearProps:function(e,t,n,i,s){if(s.data!=="isFromStart"){var a=e._pt=new Xn(e._pt,t,n,0,0,DM);return a.u=i,a.pr=-10,a.tween=s,e._props.push(n),1}}},po=[1,0,0,1,0,0],om={},lm=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},ip=function(e){var t=ai(e,qt);return lm(t)?po:t.substr(7).match(_0).map(Vt)},pf=function(e,t){var n=e._gsap||Kr(e),i=e.style,s=ip(e),a,o,l,c;return n.svg&&e.getAttribute("transform")?(l=e.transform.baseVal.consolidate().matrix,s=[l.a,l.b,l.c,l.d,l.e,l.f],s.join(",")==="1,0,0,1,0,0"?po:s):(s===po&&!e.offsetParent&&e!==Ys&&!n.svg&&(l=i.display,i.display="block",a=e.parentNode,(!a||!e.offsetParent&&!e.getBoundingClientRect().width)&&(c=1,o=e.nextElementSibling,Ys.appendChild(e)),s=ip(e),l?i.display=l:Pr(e,"display"),c&&(o?a.insertBefore(e,o):a?a.appendChild(e):Ys.removeChild(e))),t&&s.length>6?[s[0],s[1],s[4],s[5],s[12],s[13]]:s)},fh=function(e,t,n,i,s,a){var o=e._gsap,l=s||pf(e,!0),c=o.xOrigin||0,u=o.yOrigin||0,d=o.xOffset||0,h=o.yOffset||0,f=l[0],_=l[1],g=l[2],p=l[3],m=l[4],M=l[5],A=t.split(" "),v=parseFloat(A[0])||0,y=parseFloat(A[1])||0,E,w,x,T;n?l!==po&&(w=f*p-_*g)&&(x=v*(p/w)+y*(-g/w)+(g*M-p*m)/w,T=v*(-_/w)+y*(f/w)-(f*M-_*m)/w,v=x,y=T):(E=sm(e),v=E.x+(~A[0].indexOf("%")?v/100*E.width:v),y=E.y+(~(A[1]||A[0]).indexOf("%")?y/100*E.height:y)),i||i!==!1&&o.smooth?(m=v-c,M=y-u,o.xOffset=d+(m*f+M*g)-m,o.yOffset=h+(m*_+M*p)-M):o.xOffset=o.yOffset=0,o.xOrigin=v,o.yOrigin=y,o.smooth=!!i,o.origin=t,o.originIsAbsolute=!!n,e.style[Yn]="0px 0px",a&&(yr(a,o,"xOrigin",c,v),yr(a,o,"yOrigin",u,y),yr(a,o,"xOffset",d,o.xOffset),yr(a,o,"yOffset",h,o.yOffset)),e.setAttribute("data-svg-origin",v+" "+y)},mo=function(e,t){var n=e._gsap||new W0(e);if("x"in n&&!t&&!n.uncache)return n;var i=e.style,s=n.scaleX<0,a="px",o="deg",l=getComputedStyle(e),c=ai(e,Yn)||"0",u,d,h,f,_,g,p,m,M,A,v,y,E,w,x,T,C,L,D,k,I,F,X,z,j,Y,P,J,we,Ee,Ye,We;return u=d=h=g=p=m=M=A=v=0,f=_=1,n.svg=!!(e.getCTM&&am(e)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(i[qt]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[qt]!=="none"?l[qt]:"")),i.scale=i.rotate=i.translate="none"),w=pf(e,n.svg),n.svg&&(n.uncache?(j=e.getBBox(),c=n.xOrigin-j.x+"px "+(n.yOrigin-j.y)+"px",z=""):z=!t&&e.getAttribute("data-svg-origin"),fh(e,z||c,!!z||n.originIsAbsolute,n.smooth!==!1,w)),y=n.xOrigin||0,E=n.yOrigin||0,w!==po&&(L=w[0],D=w[1],k=w[2],I=w[3],u=F=w[4],d=X=w[5],w.length===6?(f=Math.sqrt(L*L+D*D),_=Math.sqrt(I*I+k*k),g=L||D?Ls(D,L)*Vr:0,M=k||I?Ls(k,I)*Vr+g:0,M&&(_*=Math.abs(Math.cos(M*Zs))),n.svg&&(u-=y-(y*L+E*k),d-=E-(y*D+E*I))):(We=w[6],Ee=w[7],P=w[8],J=w[9],we=w[10],Ye=w[11],u=w[12],d=w[13],h=w[14],x=Ls(We,we),p=x*Vr,x&&(T=Math.cos(-x),C=Math.sin(-x),z=F*T+P*C,j=X*T+J*C,Y=We*T+we*C,P=F*-C+P*T,J=X*-C+J*T,we=We*-C+we*T,Ye=Ee*-C+Ye*T,F=z,X=j,We=Y),x=Ls(-k,we),m=x*Vr,x&&(T=Math.cos(-x),C=Math.sin(-x),z=L*T-P*C,j=D*T-J*C,Y=k*T-we*C,Ye=I*C+Ye*T,L=z,D=j,k=Y),x=Ls(D,L),g=x*Vr,x&&(T=Math.cos(x),C=Math.sin(x),z=L*T+D*C,j=F*T+X*C,D=D*T-L*C,X=X*T-F*C,L=z,F=j),p&&Math.abs(p)+Math.abs(g)>359.9&&(p=g=0,m=180-m),f=Vt(Math.sqrt(L*L+D*D+k*k)),_=Vt(Math.sqrt(X*X+We*We)),x=Ls(F,X),M=Math.abs(x)>2e-4?x*Vr:0,v=Ye?1/(Ye<0?-Ye:Ye):0),n.svg&&(z=e.getAttribute("transform"),n.forceCSS=e.setAttribute("transform","")||!lm(ai(e,qt)),z&&e.setAttribute("transform",z))),Math.abs(M)>90&&Math.abs(M)<270&&(s?(f*=-1,M+=g<=0?180:-180,g+=g<=0?180:-180):(_*=-1,M+=M<=0?180:-180)),t=t||n.uncache,n.x=u-((n.xPercent=u&&(!t&&n.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-u)?-50:0)))?e.offsetWidth*n.xPercent/100:0)+a,n.y=d-((n.yPercent=d&&(!t&&n.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-d)?-50:0)))?e.offsetHeight*n.yPercent/100:0)+a,n.z=h+a,n.scaleX=Vt(f),n.scaleY=Vt(_),n.rotation=Vt(g)+o,n.rotationX=Vt(p)+o,n.rotationY=Vt(m)+o,n.skewX=M+o,n.skewY=A+o,n.transformPerspective=v+a,(n.zOrigin=parseFloat(c.split(" ")[2])||!t&&n.zOrigin||0)&&(i[Yn]=Gl(c)),n.xOffset=n.yOffset=0,n.force3D=oi.force3D,n.renderTransform=n.svg?IM:rm?cm:LM,n.uncache=0,n},Gl=function(e){return(e=e.split(" "))[0]+" "+e[1]},Jc=function(e,t,n){var i=Sn(t);return Vt(parseFloat(t)+parseFloat(Dr(e,"x",n+"px",i)))+i},LM=function(e,t){t.z="0px",t.rotationY=t.rotationX="0deg",t.force3D=0,cm(e,t)},zr="0deg",ya="0px",kr=") ",cm=function(e,t){var n=t||this,i=n.xPercent,s=n.yPercent,a=n.x,o=n.y,l=n.z,c=n.rotation,u=n.rotationY,d=n.rotationX,h=n.skewX,f=n.skewY,_=n.scaleX,g=n.scaleY,p=n.transformPerspective,m=n.force3D,M=n.target,A=n.zOrigin,v="",y=m==="auto"&&e&&e!==1||m===!0;if(A&&(d!==zr||u!==zr)){var E=parseFloat(u)*Zs,w=Math.sin(E),x=Math.cos(E),T;E=parseFloat(d)*Zs,T=Math.cos(E),a=Jc(M,a,w*T*-A),o=Jc(M,o,-Math.sin(E)*-A),l=Jc(M,l,x*T*-A+A)}p!==ya&&(v+="perspective("+p+kr),(i||s)&&(v+="translate("+i+"%, "+s+"%) "),(y||a!==ya||o!==ya||l!==ya)&&(v+=l!==ya||y?"translate3d("+a+", "+o+", "+l+") ":"translate("+a+", "+o+kr),c!==zr&&(v+="rotate("+c+kr),u!==zr&&(v+="rotateY("+u+kr),d!==zr&&(v+="rotateX("+d+kr),(h!==zr||f!==zr)&&(v+="skew("+h+", "+f+kr),(_!==1||g!==1)&&(v+="scale("+_+", "+g+kr),M.style[qt]=v||"translate(0, 0)"},IM=function(e,t){var n=t||this,i=n.xPercent,s=n.yPercent,a=n.x,o=n.y,l=n.rotation,c=n.skewX,u=n.skewY,d=n.scaleX,h=n.scaleY,f=n.target,_=n.xOrigin,g=n.yOrigin,p=n.xOffset,m=n.yOffset,M=n.forceCSS,A=parseFloat(a),v=parseFloat(o),y,E,w,x,T;l=parseFloat(l),c=parseFloat(c),u=parseFloat(u),u&&(u=parseFloat(u),c+=u,l+=u),l||c?(l*=Zs,c*=Zs,y=Math.cos(l)*d,E=Math.sin(l)*d,w=Math.sin(l-c)*-h,x=Math.cos(l-c)*h,c&&(u*=Zs,T=Math.tan(c-u),T=Math.sqrt(1+T*T),w*=T,x*=T,u&&(T=Math.tan(u),T=Math.sqrt(1+T*T),y*=T,E*=T)),y=Vt(y),E=Vt(E),w=Vt(w),x=Vt(x)):(y=d,x=h,E=w=0),(A&&!~(a+"").indexOf("px")||v&&!~(o+"").indexOf("px"))&&(A=Dr(f,"x",a,"px"),v=Dr(f,"y",o,"px")),(_||g||p||m)&&(A=Vt(A+_-(_*y+g*w)+p),v=Vt(v+g-(_*E+g*x)+m)),(i||s)&&(T=f.getBBox(),A=Vt(A+i/100*T.width),v=Vt(v+s/100*T.height)),T="matrix("+y+","+E+","+w+","+x+","+A+","+v+")",f.setAttribute("transform",T),M&&(f.style[qt]=T)},NM=function(e,t,n,i,s){var a=360,o=un(s),l=parseFloat(s)*(o&&~s.indexOf("rad")?Vr:1),c=l-i,u=i+c+"deg",d,h;return o&&(d=s.split("_")[1],d==="short"&&(c%=a,c!==c%(a/2)&&(c+=c<0?a:-a)),d==="cw"&&c<0?c=(c+a*Jd)%a-~~(c/a)*a:d==="ccw"&&c>0&&(c=(c-a*Jd)%a-~~(c/a)*a)),e._pt=h=new Xn(e._pt,t,n,i,c,_M),h.e=u,h.u="deg",e._props.push(n),h},rp=function(e,t){for(var n in t)e[n]=t[n];return e},UM=function(e,t,n){var i=rp({},n._gsap),s="perspective,force3D,transformOrigin,svgOrigin",a=n.style,o,l,c,u,d,h,f,_;i.svg?(c=n.getAttribute("transform"),n.setAttribute("transform",""),a[qt]=t,o=mo(n,1),Pr(n,qt),n.setAttribute("transform",c)):(c=getComputedStyle(n)[qt],a[qt]=t,o=mo(n,1),a[qt]=c);for(l in or)c=i[l],u=o[l],c!==u&&s.indexOf(l)<0&&(f=Sn(c),_=Sn(u),d=f!==_?Dr(n,l,c,_):parseFloat(c),h=parseFloat(u),e._pt=new Xn(e._pt,o,l,d,h-d,ch),e._pt.u=_||0,e._props.push(l));rp(o,i)};Wn("padding,margin,Width,Radius",function(r,e){var t="Top",n="Right",i="Bottom",s="Left",a=(e<3?[t,n,i,s]:[t+s,t+n,i+n,i+s]).map(function(o){return e<2?r+o:"border"+o+r});Hl[e>1?"border"+r:r]=function(o,l,c,u,d){var h,f;if(arguments.length<4)return h=a.map(function(_){return ji(o,_,c)}),f=h.join(" "),f.split(h[0]).length===5?h[0]:f;h=(u+"").split(" "),f={},a.forEach(function(_,g){return f[_]=h[g]=h[g]||h[(g-1)/2|0]}),o.init(l,f,d)}});var um={name:"css",register:hh,targetTest:function(e){return e.style&&e.nodeType},init:function(e,t,n,i,s){var a=this._props,o=e.style,l=n.vars.startAt,c,u,d,h,f,_,g,p,m,M,A,v,y,E,w,x,T;hf||hh(),this.styles=this.styles||im(e),x=this.styles.props,this.tween=n;for(g in t)if(g!=="autoRound"&&(u=t[g],!(ei[g]&&X0(g,t,n,i,e,s)))){if(f=typeof u,_=Hl[g],f==="function"&&(u=u.call(n,i,e,s),f=typeof u),f==="string"&&~u.indexOf("random(")&&(u=uo(u)),_)_(this,e,g,u,n)&&(w=1);else if(g.substr(0,2)==="--")c=(getComputedStyle(e).getPropertyValue(g)+"").trim(),u+="",wr.lastIndex=0,wr.test(c)||(p=Sn(c),m=Sn(u),m?p!==m&&(c=Dr(e,g,c,m)+m):p&&(u+=p)),this.add(o,"setProperty",c,u,i,s,0,0,g),a.push(g),x.push(g,0,o[g]);else if(f!=="undefined"){if(l&&g in l?(c=typeof l[g]=="function"?l[g].call(n,i,e,s):l[g],un(c)&&~c.indexOf("random(")&&(c=uo(c)),Sn(c+"")||c==="auto"||(c+=oi.units[g]||Sn(ji(e,g))||""),(c+"").charAt(1)==="="&&(c=ji(e,g))):c=ji(e,g),h=parseFloat(c),M=f==="string"&&u.charAt(1)==="="&&u.substr(0,2),M&&(u=u.substr(2)),d=parseFloat(u),g in Oi&&(g==="autoAlpha"&&(h===1&&ji(e,"visibility")==="hidden"&&d&&(h=0),x.push("visibility",0,o.visibility),yr(this,o,"visibility",h?"inherit":"hidden",d?"inherit":"hidden",!d)),g!=="scale"&&g!=="transform"&&(g=Oi[g],~g.indexOf(",")&&(g=g.split(",")[0]))),A=g in or,A){if(this.styles.save(g),T=u,f==="string"&&u.substring(0,6)==="var(--"){if(u=ai(e,u.substring(4,u.indexOf(")"))),u.substring(0,5)==="calc("){var C=e.style.perspective;e.style.perspective=u,u=ai(e,"perspective"),C?e.style.perspective=C:Pr(e,"perspective")}d=parseFloat(u)}if(v||(y=e._gsap,y.renderTransform&&!t.parseTransform||mo(e,t.parseTransform),E=t.smoothOrigin!==!1&&y.smooth,v=this._pt=new Xn(this._pt,o,qt,0,1,y.renderTransform,y,0,-1),v.dep=1),g==="scale")this._pt=new Xn(this._pt,y,"scaleY",y.scaleY,(M?Xs(y.scaleY,M+d):d)-y.scaleY||0,ch),this._pt.u=0,a.push("scaleY",g),g+="X";else if(g==="transformOrigin"){x.push(Yn,0,o[Yn]),u=PM(u),y.svg?fh(e,u,0,E,0,this):(m=parseFloat(u.split(" ")[2])||0,m!==y.zOrigin&&yr(this,y,"zOrigin",y.zOrigin,m),yr(this,o,g,Gl(c),Gl(u)));continue}else if(g==="svgOrigin"){fh(e,u,1,E,0,this);continue}else if(g in om){NM(this,y,g,h,M?Xs(h,M+u):u);continue}else if(g==="smoothOrigin"){yr(this,y,"smooth",y.smooth,u);continue}else if(g==="force3D"){y[g]=u;continue}else if(g==="transform"){UM(this,u,e);continue}}else g in o||(g=oa(g)||g);if(A||(d||d===0)&&(h||h===0)&&!mM.test(u)&&g in o)p=(c+"").substr((h+"").length),d||(d=0),m=Sn(u)||(g in oi.units?oi.units[g]:p),p!==m&&(h=Dr(e,g,c,m)),this._pt=new Xn(this._pt,A?y:o,g,h,(M?Xs(h,M+d):d)-h,!A&&(m==="px"||g==="zIndex")&&t.autoRound!==!1?vM:ch),this._pt.u=m||0,A&&T!==u?(this._pt.b=c,this._pt.e=T,this._pt.r=xM):p!==m&&m!=="%"&&(this._pt.b=c,this._pt.r=gM);else if(g in o)RM.call(this,e,g,c,M?M+u:u);else if(g in e)this.add(e,g,c||e[g],M?M+u:u,i,s);else if(g!=="parseTransform"){ef(g,u);continue}A||(g in o?x.push(g,0,o[g]):typeof e[g]=="function"?x.push(g,2,e[g]()):x.push(g,1,c||e[g])),a.push(g)}}w&&Q0(this)},render:function(e,t){if(t.tween._time||!ff())for(var n=t._pt;n;)n.r(e,n.d),n=n._next;else t.styles.revert()},get:ji,aliases:Oi,getSetter:function(e,t,n){var i=Oi[t];return i&&i.indexOf(",")<0&&(t=i),t in or&&t!==Yn&&(e._gsap.x||ji(e,"x"))?n&&Kd===n?t==="scale"?TM:yM:(Kd=n||{})&&(t==="scale"?EM:bM):e.style&&!Jh(e.style[t])?SM:~t.indexOf("-")?MM:cf(e,t)},core:{_removeProperty:Pr,_getMatrix:pf}};Zn.utils.checkPrefix=oa;Zn.core.getStyleSaver=im;(function(r,e,t,n){var i=Wn(r+","+e+","+t,function(s){or[s]=1});Wn(e,function(s){oi.units[s]="deg",om[s]=1}),Oi[i[13]]=r+","+e,Wn(n,function(s){var a=s.split(":");Oi[a[1]]=i[a[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");Wn("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(r){oi.units[r]="px"});Zn.registerPlugin(um);var ac=Zn.registerPlugin(um)||Zn;ac.core.Tween;function qM(r,e){for(var t=0;t<e.length;t++){var n=e[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(r,n.key,n)}}function FM(r,e,t){return e&&qM(r.prototype,e),r}var fn,Tl,ri,Tr,Er,$s,hm,Hr,Va,fm,nr,Ei,dm,pm=function(){return fn||typeof window<"u"&&(fn=window.gsap)&&fn.registerPlugin&&fn},mm=1,Vs=[],ot=[],Hi=[],Ha=Date.now,dh=function(e,t){return t},OM=function(){var e=Va.core,t=e.bridge||{},n=e._scrollers,i=e._proxies;n.push.apply(n,ot),i.push.apply(i,Hi),ot=n,Hi=i,dh=function(a,o){return t[a](o)}},Ar=function(e,t){return~Hi.indexOf(e)&&Hi[Hi.indexOf(e)+1][t]},Ga=function(e){return!!~fm.indexOf(e)},Rn=function(e,t,n,i,s){return e.addEventListener(t,n,{passive:i!==!1,capture:!!s})},Cn=function(e,t,n,i){return e.removeEventListener(t,n,!!i)},el="scrollLeft",tl="scrollTop",ph=function(){return nr&&nr.isPressed||ot.cache++},Wl=function(e,t){var n=function i(s){if(s||s===0){mm&&(ri.history.scrollRestoration="manual");var a=nr&&nr.isPressed;s=i.v=Math.round(s)||(nr&&nr.iOS?1:0),e(s),i.cacheID=ot.cache,a&&dh("ss",s)}else(t||ot.cache!==i.cacheID||dh("ref"))&&(i.cacheID=ot.cache,i.v=e());return i.v+i.offset};return n.offset=0,e&&n},Un={s:el,p:"left",p2:"Left",os:"right",os2:"Right",d:"width",d2:"Width",a:"x",sc:Wl(function(r){return arguments.length?ri.scrollTo(r,jt.sc()):ri.pageXOffset||Tr[el]||Er[el]||$s[el]||0})},jt={s:tl,p:"top",p2:"Top",os:"bottom",os2:"Bottom",d:"height",d2:"Height",a:"y",op:Un,sc:Wl(function(r){return arguments.length?ri.scrollTo(Un.sc(),r):ri.pageYOffset||Tr[tl]||Er[tl]||$s[tl]||0})},Bn=function(e,t){return(t&&t._ctx&&t._ctx.selector||fn.utils.toArray)(e)[0]||(typeof e=="string"&&fn.config().nullTargetWarn!==!1?console.warn("Element not found:",e):null)},BM=function(e,t){for(var n=t.length;n--;)if(t[n]===e||t[n].contains(e))return!0;return!1},Lr=function(e,t){var n=t.s,i=t.sc;Ga(e)&&(e=Tr.scrollingElement||Er);var s=ot.indexOf(e),a=i===jt.sc?1:2;!~s&&(s=ot.push(e)-1),ot[s+a]||Rn(e,"scroll",ph);var o=ot[s+a],l=o||(ot[s+a]=Wl(Ar(e,n),!0)||(Ga(e)?i:Wl(function(c){return arguments.length?e[n]=c:e[n]})));return l.target=e,o||(l.smooth=fn.getProperty(e,"scrollBehavior")==="smooth"),l},mh=function(e,t,n){var i=e,s=e,a=Ha(),o=a,l=t||50,c=Math.max(500,l*3),u=function(_,g){var p=Ha();g||p-a>l?(s=i,i=_,o=a,a=p):n?i+=_:i=s+(_-s)/(p-o)*(a-o)},d=function(){s=i=n?0:i,o=a=0},h=function(_){var g=o,p=s,m=Ha();return(_||_===0)&&_!==i&&u(_),a===o||m-o>c?0:(i+(n?p:-p))/((n?m:a)-g)*1e3};return{update:u,reset:d,getVelocity:h}},Ta=function(e,t){return t&&!e._gsapAllow&&e.preventDefault(),e.changedTouches?e.changedTouches[0]:e},sp=function(e){var t=Math.max.apply(Math,e),n=Math.min.apply(Math,e);return Math.abs(t)>=Math.abs(n)?t:n},_m=function(){Va=fn.core.globals().ScrollTrigger,Va&&Va.core&&OM()},gm=function(e){return fn=e||pm(),!Tl&&fn&&typeof document<"u"&&document.body&&(ri=window,Tr=document,Er=Tr.documentElement,$s=Tr.body,fm=[ri,Tr,Er,$s],fn.utils.clamp,dm=fn.core.context||function(){},Hr="onpointerenter"in $s?"pointer":"mouse",hm=Ht.isTouch=ri.matchMedia&&ri.matchMedia("(hover: none), (pointer: coarse)").matches?1:"ontouchstart"in ri||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0?2:0,Ei=Ht.eventTypes=("ontouchstart"in Er?"touchstart,touchmove,touchcancel,touchend":"onpointerdown"in Er?"pointerdown,pointermove,pointercancel,pointerup":"mousedown,mousemove,mouseup,mouseup").split(","),setTimeout(function(){return mm=0},500),_m(),Tl=1),Tl};Un.op=jt;ot.cache=0;var Ht=(function(){function r(t){this.init(t)}var e=r.prototype;return e.init=function(n){Tl||gm(fn)||console.warn("Please gsap.registerPlugin(Observer)"),Va||_m();var i=n.tolerance,s=n.dragMinimum,a=n.type,o=n.target,l=n.lineHeight,c=n.debounce,u=n.preventDefault,d=n.onStop,h=n.onStopDelay,f=n.ignore,_=n.wheelSpeed,g=n.event,p=n.onDragStart,m=n.onDragEnd,M=n.onDrag,A=n.onPress,v=n.onRelease,y=n.onRight,E=n.onLeft,w=n.onUp,x=n.onDown,T=n.onChangeX,C=n.onChangeY,L=n.onChange,D=n.onToggleX,k=n.onToggleY,I=n.onHover,F=n.onHoverEnd,X=n.onMove,z=n.ignoreCheck,j=n.isNormalizer,Y=n.onGestureStart,P=n.onGestureEnd,J=n.onWheel,we=n.onEnable,Ee=n.onDisable,Ye=n.onClick,We=n.scrollSpeed,Ke=n.capture,$=n.allowClicks,te=n.lockAxis,me=n.onLockAxis;this.target=o=Bn(o)||Er,this.vars=n,f&&(f=fn.utils.toArray(f)),i=i||1e-9,s=s||0,_=_||1,We=We||1,a=a||"wheel,touch,pointer",c=c!==!1,l||(l=parseFloat(ri.getComputedStyle($s).lineHeight)||22);var Ve,xe,Le,Ne,Q,re,oe,N=this,de=0,Be=0,Ue=n.passive||!u&&n.passive!==!1,Ce=Lr(o,Un),Ze=Lr(o,jt),U=Ce(),rt=Ze(),Ge=~a.indexOf("touch")&&!~a.indexOf("pointer")&&Ei[0]==="pointerdown",R=Ga(o),S=o.ownerDocument||Tr,V=[0,0,0],H=[0,0,0],K=0,pe=function(){return K=Ha()},ce=function(ae,He){return(N.event=ae)&&f&&BM(ae.target,f)||He&&Ge&&ae.pointerType!=="touch"||z&&z(ae,He)},ee=function(){N._vx.reset(),N._vy.reset(),xe.pause(),d&&d(N)},ie=function(){var ae=N.deltaX=sp(V),He=N.deltaY=sp(H),le=Math.abs(ae)>=i,Xe=Math.abs(He)>=i;L&&(le||Xe)&&L(N,ae,He,V,H),le&&(y&&N.deltaX>0&&y(N),E&&N.deltaX<0&&E(N),T&&T(N),D&&N.deltaX<0!=de<0&&D(N),de=N.deltaX,V[0]=V[1]=V[2]=0),Xe&&(x&&N.deltaY>0&&x(N),w&&N.deltaY<0&&w(N),C&&C(N),k&&N.deltaY<0!=Be<0&&k(N),Be=N.deltaY,H[0]=H[1]=H[2]=0),(Ne||Le)&&(X&&X(N),Le&&(p&&Le===1&&p(N),M&&M(N),Le=0),Ne=!1),re&&!(re=!1)&&me&&me(N),Q&&(J(N),Q=!1),Ve=0},ve=function(ae,He,le){V[le]+=ae,H[le]+=He,N._vx.update(ae),N._vy.update(He),c?Ve||(Ve=requestAnimationFrame(ie)):ie()},Ie=function(ae,He){te&&!oe&&(N.axis=oe=Math.abs(ae)>Math.abs(He)?"x":"y",re=!0),oe!=="y"&&(V[2]+=ae,N._vx.update(ae,!0)),oe!=="x"&&(H[2]+=He,N._vy.update(He,!0)),c?Ve||(Ve=requestAnimationFrame(ie)):ie()},Se=function(ae){if(!ce(ae,1)){ae=Ta(ae,u);var He=ae.clientX,le=ae.clientY,Xe=He-N.x,qe=le-N.y,Qe=N.isDragging;N.x=He,N.y=le,(Qe||(Xe||qe)&&(Math.abs(N.startX-He)>=s||Math.abs(N.startY-le)>=s))&&(Le||(Le=Qe?2:1),Qe||(N.isDragging=!0),Ie(Xe,qe))}},ge=N.onPress=function(ue){ce(ue,1)||ue&&ue.button||(N.axis=oe=null,xe.pause(),N.isPressed=!0,ue=Ta(ue),de=Be=0,N.startX=N.x=ue.clientX,N.startY=N.y=ue.clientY,N._vx.reset(),N._vy.reset(),Rn(j?o:S,Ei[1],Se,Ue,!0),N.deltaX=N.deltaY=0,A&&A(N))},he=N.onRelease=function(ue){if(!ce(ue,1)){Cn(j?o:S,Ei[1],Se,!0);var ae=!isNaN(N.y-N.startY),He=N.isDragging,le=He&&(Math.abs(N.x-N.startX)>3||Math.abs(N.y-N.startY)>3),Xe=Ta(ue);!le&&ae&&(N._vx.reset(),N._vy.reset(),u&&$&&fn.delayedCall(.08,function(){if(Ha()-K>300&&!ue.defaultPrevented){if(ue.target.click)ue.target.click();else if(S.createEvent){var qe=S.createEvent("MouseEvents");qe.initMouseEvent("click",!0,!0,ri,1,Xe.screenX,Xe.screenY,Xe.clientX,Xe.clientY,!1,!1,!1,!1,0,null),ue.target.dispatchEvent(qe)}}})),N.isDragging=N.isGesturing=N.isPressed=!1,d&&He&&!j&&xe.restart(!0),Le&&ie(),m&&He&&m(N),v&&v(N,le)}},ze=function(ae){return ae.touches&&ae.touches.length>1&&(N.isGesturing=!0)&&Y(ae,N.isDragging)},$e=function(){return(N.isGesturing=!1)||P(N)},q=function(ae){if(!ce(ae)){var He=Ce(),le=Ze();ve((He-U)*We,(le-rt)*We,1),U=He,rt=le,d&&xe.restart(!0)}},_e=function(ae){if(!ce(ae)){ae=Ta(ae,u),J&&(Q=!0);var He=(ae.deltaMode===1?l:ae.deltaMode===2?ri.innerHeight:1)*_;ve(ae.deltaX*He,ae.deltaY*He,0),d&&!j&&xe.restart(!0)}},ne=function(ae){if(!ce(ae)){var He=ae.clientX,le=ae.clientY,Xe=He-N.x,qe=le-N.y;N.x=He,N.y=le,Ne=!0,d&&xe.restart(!0),(Xe||qe)&&Ie(Xe,qe)}},Me=function(ae){N.event=ae,I(N)},Te=function(ae){N.event=ae,F(N)},se=function(ae){return ce(ae)||Ta(ae,u)&&Ye(N)};xe=N._dc=fn.delayedCall(h||.25,ee).pause(),N.deltaX=N.deltaY=0,N._vx=mh(0,50,!0),N._vy=mh(0,50,!0),N.scrollX=Ce,N.scrollY=Ze,N.isDragging=N.isGesturing=N.isPressed=!1,dm(this),N.enable=function(ue){return N.isEnabled||(Rn(R?S:o,"scroll",ph),a.indexOf("scroll")>=0&&Rn(R?S:o,"scroll",q,Ue,Ke),a.indexOf("wheel")>=0&&Rn(o,"wheel",_e,Ue,Ke),(a.indexOf("touch")>=0&&hm||a.indexOf("pointer")>=0)&&(Rn(o,Ei[0],ge,Ue,Ke),Rn(S,Ei[2],he),Rn(S,Ei[3],he),$&&Rn(o,"click",pe,!0,!0),Ye&&Rn(o,"click",se),Y&&Rn(S,"gesturestart",ze),P&&Rn(S,"gestureend",$e),I&&Rn(o,Hr+"enter",Me),F&&Rn(o,Hr+"leave",Te),X&&Rn(o,Hr+"move",ne)),N.isEnabled=!0,N.isDragging=N.isGesturing=N.isPressed=Ne=Le=!1,N._vx.reset(),N._vy.reset(),U=Ce(),rt=Ze(),ue&&ue.type&&ge(ue),we&&we(N)),N},N.disable=function(){N.isEnabled&&(Vs.filter(function(ue){return ue!==N&&Ga(ue.target)}).length||Cn(R?S:o,"scroll",ph),N.isPressed&&(N._vx.reset(),N._vy.reset(),Cn(j?o:S,Ei[1],Se,!0)),Cn(R?S:o,"scroll",q,Ke),Cn(o,"wheel",_e,Ke),Cn(o,Ei[0],ge,Ke),Cn(S,Ei[2],he),Cn(S,Ei[3],he),Cn(o,"click",pe,!0),Cn(o,"click",se),Cn(S,"gesturestart",ze),Cn(S,"gestureend",$e),Cn(o,Hr+"enter",Me),Cn(o,Hr+"leave",Te),Cn(o,Hr+"move",ne),N.isEnabled=N.isPressed=N.isDragging=!1,Ee&&Ee(N))},N.kill=N.revert=function(){N.disable();var ue=Vs.indexOf(N);ue>=0&&Vs.splice(ue,1),nr===N&&(nr=0)},Vs.push(N),j&&Ga(o)&&(nr=N),N.enable(g)},FM(r,[{key:"velocityX",get:function(){return this._vx.getVelocity()}},{key:"velocityY",get:function(){return this._vy.getVelocity()}}]),r})();Ht.version="3.14.2";Ht.create=function(r){return new Ht(r)};Ht.register=gm;Ht.getAll=function(){return Vs.slice()};Ht.getById=function(r){return Vs.filter(function(e){return e.vars.id===r})[0]};pm()&&fn.registerPlugin(Ht);var De,qs,at,wt,ti,xt,mf,Xl,_o,Wa,Pa,nl,xn,oc,_h,Ln,ap,op,Fs,xm,Qc,vm,Dn,gh,Sm,Mm,gr,xh,_f,Ks,gf,Xa,vh,jc,il=1,vn=Date.now,eu=vn(),Si=0,Da=0,lp=function(e,t,n){var i=Qn(e)&&(e.substr(0,6)==="clamp("||e.indexOf("max")>-1);return n["_"+t+"Clamp"]=i,i?e.substr(6,e.length-7):e},cp=function(e,t){return t&&(!Qn(e)||e.substr(0,6)!=="clamp(")?"clamp("+e+")":e},zM=function r(){return Da&&requestAnimationFrame(r)},up=function(){return oc=1},hp=function(){return oc=0},Li=function(e){return e},La=function(e){return Math.round(e*1e5)/1e5||0},ym=function(){return typeof window<"u"},Tm=function(){return De||ym()&&(De=window.gsap)&&De.registerPlugin&&De},cs=function(e){return!!~mf.indexOf(e)},Em=function(e){return(e==="Height"?gf:at["inner"+e])||ti["client"+e]||xt["client"+e]},bm=function(e){return Ar(e,"getBoundingClientRect")||(cs(e)?function(){return Cl.width=at.innerWidth,Cl.height=gf,Cl}:function(){return er(e)})},kM=function(e,t,n){var i=n.d,s=n.d2,a=n.a;return(a=Ar(e,"getBoundingClientRect"))?function(){return a()[i]}:function(){return(t?Em(s):e["client"+s])||0}},VM=function(e,t){return!t||~Hi.indexOf(e)?bm(e):function(){return Cl}},Bi=function(e,t){var n=t.s,i=t.d2,s=t.d,a=t.a;return Math.max(0,(n="scroll"+i)&&(a=Ar(e,n))?a()-bm(e)()[s]:cs(e)?(ti[n]||xt[n])-Em(i):e[n]-e["offset"+i])},rl=function(e,t){for(var n=0;n<Fs.length;n+=3)(!t||~t.indexOf(Fs[n+1]))&&e(Fs[n],Fs[n+1],Fs[n+2])},Qn=function(e){return typeof e=="string"},Mn=function(e){return typeof e=="function"},Ia=function(e){return typeof e=="number"},Gr=function(e){return typeof e=="object"},Ea=function(e,t,n){return e&&e.progress(t?0:1)&&n&&e.pause()},tu=function(e,t){if(e.enabled){var n=e._ctx?e._ctx.add(function(){return t(e)}):t(e);n&&n.totalTime&&(e.callbackAnimation=n)}},Is=Math.abs,wm="left",Am="top",xf="right",vf="bottom",es="width",ts="height",Ya="Right",Za="Left",$a="Top",Ka="Bottom",$t="padding",mi="margin",la="Width",Sf="Height",Qt="px",_i=function(e){return at.getComputedStyle(e)},HM=function(e){var t=_i(e).position;e.style.position=t==="absolute"||t==="fixed"?t:"relative"},fp=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},er=function(e,t){var n=t&&_i(e)[_h]!=="matrix(1, 0, 0, 1, 0, 0)"&&De.to(e,{x:0,y:0,xPercent:0,yPercent:0,rotation:0,rotationX:0,rotationY:0,scale:1,skewX:0,skewY:0}).progress(1),i=e.getBoundingClientRect();return n&&n.progress(0).kill(),i},Yl=function(e,t){var n=t.d2;return e["offset"+n]||e["client"+n]||0},Cm=function(e){var t=[],n=e.labels,i=e.duration(),s;for(s in n)t.push(n[s]/i);return t},GM=function(e){return function(t){return De.utils.snap(Cm(e),t)}},Mf=function(e){var t=De.utils.snap(e),n=Array.isArray(e)&&e.slice(0).sort(function(i,s){return i-s});return n?function(i,s,a){a===void 0&&(a=.001);var o;if(!s)return t(i);if(s>0){for(i-=a,o=0;o<n.length;o++)if(n[o]>=i)return n[o];return n[o-1]}else for(o=n.length,i+=a;o--;)if(n[o]<=i)return n[o];return n[0]}:function(i,s,a){a===void 0&&(a=.001);var o=t(i);return!s||Math.abs(o-i)<a||o-i<0==s<0?o:t(s<0?i-e:i+e)}},WM=function(e){return function(t,n){return Mf(Cm(e))(t,n.direction)}},sl=function(e,t,n,i){return n.split(",").forEach(function(s){return e(t,s,i)})},ln=function(e,t,n,i,s){return e.addEventListener(t,n,{passive:!i,capture:!!s})},on=function(e,t,n,i){return e.removeEventListener(t,n,!!i)},al=function(e,t,n){n=n&&n.wheelHandler,n&&(e(t,"wheel",n),e(t,"touchmove",n))},dp={startColor:"green",endColor:"red",indent:0,fontSize:"16px",fontWeight:"normal"},ol={toggleActions:"play",anticipatePin:0},Zl={top:0,left:0,center:.5,bottom:1,right:1},El=function(e,t){if(Qn(e)){var n=e.indexOf("="),i=~n?+(e.charAt(n-1)+1)*parseFloat(e.substr(n+1)):0;~n&&(e.indexOf("%")>n&&(i*=t/100),e=e.substr(0,n-1)),e=i+(e in Zl?Zl[e]*t:~e.indexOf("%")?parseFloat(e)*t/100:parseFloat(e)||0)}return e},ll=function(e,t,n,i,s,a,o,l){var c=s.startColor,u=s.endColor,d=s.fontSize,h=s.indent,f=s.fontWeight,_=wt.createElement("div"),g=cs(n)||Ar(n,"pinType")==="fixed",p=e.indexOf("scroller")!==-1,m=g?xt:n,M=e.indexOf("start")!==-1,A=M?c:u,v="border-color:"+A+";font-size:"+d+";color:"+A+";font-weight:"+f+";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";return v+="position:"+((p||l)&&g?"fixed;":"absolute;"),(p||l||!g)&&(v+=(i===jt?xf:vf)+":"+(a+parseFloat(h))+"px;"),o&&(v+="box-sizing:border-box;text-align:left;width:"+o.offsetWidth+"px;"),_._isStart=M,_.setAttribute("class","gsap-marker-"+e+(t?" marker-"+t:"")),_.style.cssText=v,_.innerText=t||t===0?e+"-"+t:e,m.children[0]?m.insertBefore(_,m.children[0]):m.appendChild(_),_._offset=_["offset"+i.op.d2],bl(_,0,i,M),_},bl=function(e,t,n,i){var s={display:"block"},a=n[i?"os2":"p2"],o=n[i?"p2":"os2"];e._isFlipped=i,s[n.a+"Percent"]=i?-100:0,s[n.a]=i?"1px":0,s["border"+a+la]=1,s["border"+o+la]=0,s[n.p]=t+"px",De.set(e,s)},it=[],Sh={},go,pp=function(){return vn()-Si>34&&(go||(go=requestAnimationFrame(rr)))},Ns=function(){(!Dn||!Dn.isPressed||Dn.startX>xt.clientWidth)&&(ot.cache++,Dn?go||(go=requestAnimationFrame(rr)):rr(),Si||hs("scrollStart"),Si=vn())},nu=function(){Mm=at.innerWidth,Sm=at.innerHeight},Na=function(e){ot.cache++,(e===!0||!xn&&!vm&&!wt.fullscreenElement&&!wt.webkitFullscreenElement&&(!gh||Mm!==at.innerWidth||Math.abs(at.innerHeight-Sm)>at.innerHeight*.25))&&Xl.restart(!0)},us={},XM=[],Rm=function r(){return on(ct,"scrollEnd",r)||$r(!0)},hs=function(e){return us[e]&&us[e].map(function(t){return t()})||XM},Jn=[],Pm=function(e){for(var t=0;t<Jn.length;t+=5)(!e||Jn[t+4]&&Jn[t+4].query===e)&&(Jn[t].style.cssText=Jn[t+1],Jn[t].getBBox&&Jn[t].setAttribute("transform",Jn[t+2]||""),Jn[t+3].uncache=1)},Dm=function(){return ot.forEach(function(e){return Mn(e)&&++e.cacheID&&(e.rec=e())})},yf=function(e,t){var n;for(Ln=0;Ln<it.length;Ln++)n=it[Ln],n&&(!t||n._ctx===t)&&(e?n.kill(1):n.revert(!0,!0));Xa=!0,t&&Pm(t),t||hs("revert")},Lm=function(e,t){ot.cache++,(t||!In)&&ot.forEach(function(n){return Mn(n)&&n.cacheID++&&(n.rec=0)}),Qn(e)&&(at.history.scrollRestoration=_f=e)},In,ns=0,mp,YM=function(){if(mp!==ns){var e=mp=ns;requestAnimationFrame(function(){return e===ns&&$r(!0)})}},Im=function(){xt.appendChild(Ks),gf=!Dn&&Ks.offsetHeight||at.innerHeight,xt.removeChild(Ks)},_p=function(e){return _o(".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end").forEach(function(t){return t.style.display=e?"none":"block"})},$r=function(e,t){if(ti=wt.documentElement,xt=wt.body,mf=[at,wt,ti,xt],Si&&!e&&!Xa){ln(ct,"scrollEnd",Rm);return}Im(),In=ct.isRefreshing=!0,Xa||Dm();var n=hs("refreshInit");xm&&ct.sort(),t||yf(),ot.forEach(function(i){Mn(i)&&(i.smooth&&(i.target.style.scrollBehavior="auto"),i(0))}),it.slice(0).forEach(function(i){return i.refresh()}),Xa=!1,it.forEach(function(i){if(i._subPinOffset&&i.pin){var s=i.vars.horizontal?"offsetWidth":"offsetHeight",a=i.pin[s];i.revert(!0,1),i.adjustPinSpacing(i.pin[s]-a),i.refresh()}}),vh=1,_p(!0),it.forEach(function(i){var s=Bi(i.scroller,i._dir),a=i.vars.end==="max"||i._endClamp&&i.end>s,o=i._startClamp&&i.start>=s;(a||o)&&i.setPositions(o?s-1:i.start,a?Math.max(o?s:i.start+1,s):i.end,!0)}),_p(!1),vh=0,n.forEach(function(i){return i&&i.render&&i.render(-1)}),ot.forEach(function(i){Mn(i)&&(i.smooth&&requestAnimationFrame(function(){return i.target.style.scrollBehavior="smooth"}),i.rec&&i(i.rec))}),Lm(_f,1),Xl.pause(),ns++,In=2,rr(2),it.forEach(function(i){return Mn(i.vars.onRefresh)&&i.vars.onRefresh(i)}),In=ct.isRefreshing=!1,hs("refresh")},Mh=0,wl=1,Ja,rr=function(e){if(e===2||!In&&!Xa){ct.isUpdating=!0,Ja&&Ja.update(0);var t=it.length,n=vn(),i=n-eu>=50,s=t&&it[0].scroll();if(wl=Mh>s?-1:1,In||(Mh=s),i&&(Si&&!oc&&n-Si>200&&(Si=0,hs("scrollEnd")),Pa=eu,eu=n),wl<0){for(Ln=t;Ln-- >0;)it[Ln]&&it[Ln].update(0,i);wl=1}else for(Ln=0;Ln<t;Ln++)it[Ln]&&it[Ln].update(0,i);ct.isUpdating=!1}go=0},yh=[wm,Am,vf,xf,mi+Ka,mi+Ya,mi+$a,mi+Za,"display","flexShrink","float","zIndex","gridColumnStart","gridColumnEnd","gridRowStart","gridRowEnd","gridArea","justifySelf","alignSelf","placeSelf","order"],Al=yh.concat([es,ts,"boxSizing","max"+la,"max"+Sf,"position",mi,$t,$t+$a,$t+Ya,$t+Ka,$t+Za]),ZM=function(e,t,n){Js(n);var i=e._gsap;if(i.spacerIsNative)Js(i.spacerState);else if(e._gsap.swappedIn){var s=t.parentNode;s&&(s.insertBefore(e,t),s.removeChild(t))}e._gsap.swappedIn=!1},iu=function(e,t,n,i){if(!e._gsap.swappedIn){for(var s=yh.length,a=t.style,o=e.style,l;s--;)l=yh[s],a[l]=n[l];a.position=n.position==="absolute"?"absolute":"relative",n.display==="inline"&&(a.display="inline-block"),o[vf]=o[xf]="auto",a.flexBasis=n.flexBasis||"auto",a.overflow="visible",a.boxSizing="border-box",a[es]=Yl(e,Un)+Qt,a[ts]=Yl(e,jt)+Qt,a[$t]=o[mi]=o[Am]=o[wm]="0",Js(i),o[es]=o["max"+la]=n[es],o[ts]=o["max"+Sf]=n[ts],o[$t]=n[$t],e.parentNode!==t&&(e.parentNode.insertBefore(t,e),t.appendChild(e)),e._gsap.swappedIn=!0}},$M=/([A-Z])/g,Js=function(e){if(e){var t=e.t.style,n=e.length,i=0,s,a;for((e.t._gsap||De.core.getCache(e.t)).uncache=1;i<n;i+=2)a=e[i+1],s=e[i],a?t[s]=a:t[s]&&t.removeProperty(s.replace($M,"-$1").toLowerCase())}},cl=function(e){for(var t=Al.length,n=e.style,i=[],s=0;s<t;s++)i.push(Al[s],n[Al[s]]);return i.t=e,i},KM=function(e,t,n){for(var i=[],s=e.length,a=n?8:0,o;a<s;a+=2)o=e[a],i.push(o,o in t?t[o]:e[a+1]);return i.t=e.t,i},Cl={left:0,top:0},gp=function(e,t,n,i,s,a,o,l,c,u,d,h,f,_){Mn(e)&&(e=e(l)),Qn(e)&&e.substr(0,3)==="max"&&(e=h+(e.charAt(4)==="="?El("0"+e.substr(3),n):0));var g=f?f.time():0,p,m,M;if(f&&f.seek(0),isNaN(e)||(e=+e),Ia(e))f&&(e=De.utils.mapRange(f.scrollTrigger.start,f.scrollTrigger.end,0,h,e)),o&&bl(o,n,i,!0);else{Mn(t)&&(t=t(l));var A=(e||"0").split(" "),v,y,E,w;M=Bn(t,l)||xt,v=er(M)||{},(!v||!v.left&&!v.top)&&_i(M).display==="none"&&(w=M.style.display,M.style.display="block",v=er(M),w?M.style.display=w:M.style.removeProperty("display")),y=El(A[0],v[i.d]),E=El(A[1]||"0",n),e=v[i.p]-c[i.p]-u+y+s-E,o&&bl(o,E,i,n-E<20||o._isStart&&E>20),n-=n-E}if(_&&(l[_]=e||-.001,e<0&&(e=0)),a){var x=e+n,T=a._isStart;p="scroll"+i.d2,bl(a,x,i,T&&x>20||!T&&(d?Math.max(xt[p],ti[p]):a.parentNode[p])<=x+1),d&&(c=er(o),d&&(a.style[i.op.p]=c[i.op.p]-i.op.m-a._offset+Qt))}return f&&M&&(p=er(M),f.seek(h),m=er(M),f._caScrollDist=p[i.p]-m[i.p],e=e/f._caScrollDist*h),f&&f.seek(g),f?e:Math.round(e)},JM=/(webkit|moz|length|cssText|inset)/i,xp=function(e,t,n,i){if(e.parentNode!==t){var s=e.style,a,o;if(t===xt){e._stOrig=s.cssText,o=_i(e);for(a in o)!+a&&!JM.test(a)&&o[a]&&typeof s[a]=="string"&&a!=="0"&&(s[a]=o[a]);s.top=n,s.left=i}else s.cssText=e._stOrig;De.core.getCache(e).uncache=1,t.appendChild(e)}},Nm=function(e,t,n){var i=t,s=i;return function(a){var o=Math.round(e());return o!==i&&o!==s&&Math.abs(o-i)>3&&Math.abs(o-s)>3&&(a=o,n&&n()),s=i,i=Math.round(a),i}},ul=function(e,t,n){var i={};i[t.p]="+="+n,De.set(e,i)},vp=function(e,t){var n=Lr(e,t),i="_scroll"+t.p2,s=function a(o,l,c,u,d){var h=a.tween,f=l.onComplete,_={};c=c||n();var g=Nm(n,c,function(){h.kill(),a.tween=0});return d=u&&d||0,u=u||o-c,h&&h.kill(),l[i]=o,l.inherit=!1,l.modifiers=_,_[i]=function(){return g(c+u*h.ratio+d*h.ratio*h.ratio)},l.onUpdate=function(){ot.cache++,a.tween&&rr()},l.onComplete=function(){a.tween=0,f&&f.call(h)},h=a.tween=De.to(e,l),h};return e[i]=n,n.wheelHandler=function(){return s.tween&&s.tween.kill()&&(s.tween=0)},ln(e,"wheel",n.wheelHandler),ct.isTouch&&ln(e,"touchmove",n.wheelHandler),s},ct=(function(){function r(t,n){qs||r.register(De)||console.warn("Please gsap.registerPlugin(ScrollTrigger)"),xh(this),this.init(t,n)}var e=r.prototype;return e.init=function(n,i){if(this.progress=this.start=0,this.vars&&this.kill(!0,!0),!Da){this.update=this.refresh=this.kill=Li;return}n=fp(Qn(n)||Ia(n)||n.nodeType?{trigger:n}:n,ol);var s=n,a=s.onUpdate,o=s.toggleClass,l=s.id,c=s.onToggle,u=s.onRefresh,d=s.scrub,h=s.trigger,f=s.pin,_=s.pinSpacing,g=s.invalidateOnRefresh,p=s.anticipatePin,m=s.onScrubComplete,M=s.onSnapComplete,A=s.once,v=s.snap,y=s.pinReparent,E=s.pinSpacer,w=s.containerAnimation,x=s.fastScrollEnd,T=s.preventOverlaps,C=n.horizontal||n.containerAnimation&&n.horizontal!==!1?Un:jt,L=!d&&d!==0,D=Bn(n.scroller||at),k=De.core.getCache(D),I=cs(D),F=("pinType"in n?n.pinType:Ar(D,"pinType")||I&&"fixed")==="fixed",X=[n.onEnter,n.onLeave,n.onEnterBack,n.onLeaveBack],z=L&&n.toggleActions.split(" "),j="markers"in n?n.markers:ol.markers,Y=I?0:parseFloat(_i(D)["border"+C.p2+la])||0,P=this,J=n.onRefreshInit&&function(){return n.onRefreshInit(P)},we=kM(D,I,C),Ee=VM(D,I),Ye=0,We=0,Ke=0,$=Lr(D,C),te,me,Ve,xe,Le,Ne,Q,re,oe,N,de,Be,Ue,Ce,Ze,U,rt,Ge,R,S,V,H,K,pe,ce,ee,ie,ve,Ie,Se,ge,he,ze,$e,q,_e,ne,Me,Te;if(P._startClamp=P._endClamp=!1,P._dir=C,p*=45,P.scroller=D,P.scroll=w?w.time.bind(w):$,xe=$(),P.vars=n,i=i||n.animation,"refreshPriority"in n&&(xm=1,n.refreshPriority===-9999&&(Ja=P)),k.tweenScroll=k.tweenScroll||{top:vp(D,jt),left:vp(D,Un)},P.tweenTo=te=k.tweenScroll[C.p],P.scrubDuration=function(le){ze=Ia(le)&&le,ze?he?he.duration(le):he=De.to(i,{ease:"expo",totalProgress:"+=0",inherit:!1,duration:ze,paused:!0,onComplete:function(){return m&&m(P)}}):(he&&he.progress(1).kill(),he=0)},i&&(i.vars.lazy=!1,i._initted&&!P.isReverted||i.vars.immediateRender!==!1&&n.immediateRender!==!1&&i.duration()&&i.render(0,!0,!0),P.animation=i.pause(),i.scrollTrigger=P,P.scrubDuration(d),Se=0,l||(l=i.vars.id)),v&&((!Gr(v)||v.push)&&(v={snapTo:v}),"scrollBehavior"in xt.style&&De.set(I?[xt,ti]:D,{scrollBehavior:"auto"}),ot.forEach(function(le){return Mn(le)&&le.target===(I?wt.scrollingElement||ti:D)&&(le.smooth=!1)}),Ve=Mn(v.snapTo)?v.snapTo:v.snapTo==="labels"?GM(i):v.snapTo==="labelsDirectional"?WM(i):v.directional!==!1?function(le,Xe){return Mf(v.snapTo)(le,vn()-We<500?0:Xe.direction)}:De.utils.snap(v.snapTo),$e=v.duration||{min:.1,max:2},$e=Gr($e)?Wa($e.min,$e.max):Wa($e,$e),q=De.delayedCall(v.delay||ze/2||.1,function(){var le=$(),Xe=vn()-We<500,qe=te.tween;if((Xe||Math.abs(P.getVelocity())<10)&&!qe&&!oc&&Ye!==le){var Qe=(le-Ne)/Ce,Wt=i&&!L?i.totalProgress():Qe,st=Xe?0:(Wt-ge)/(vn()-Pa)*1e3||0,At=De.utils.clamp(-Qe,1-Qe,Is(st/2)*st/.185),rn=Qe+(v.inertia===!1?0:At),Ct,St,ft=v,bn=ft.onStart,Et=ft.onInterrupt,pn=ft.onComplete;if(Ct=Ve(rn,P),Ia(Ct)||(Ct=rn),St=Math.max(0,Math.round(Ne+Ct*Ce)),le<=Q&&le>=Ne&&St!==le){if(qe&&!qe._initted&&qe.data<=Is(St-le))return;v.inertia===!1&&(At=Ct-Qe),te(St,{duration:$e(Is(Math.max(Is(rn-Wt),Is(Ct-Wt))*.185/st/.05||0)),ease:v.ease||"power3",data:Is(St-le),onInterrupt:function(){return q.restart(!0)&&Et&&Et(P)},onComplete:function(){P.update(),Ye=$(),i&&!L&&(he?he.resetTo("totalProgress",Ct,i._tTime/i._tDur):i.progress(Ct)),Se=ge=i&&!L?i.totalProgress():P.progress,M&&M(P),pn&&pn(P)}},le,At*Ce,St-le-At*Ce),bn&&bn(P,te.tween)}}else P.isActive&&Ye!==le&&q.restart(!0)}).pause()),l&&(Sh[l]=P),h=P.trigger=Bn(h||f!==!0&&f),Te=h&&h._gsap&&h._gsap.stRevert,Te&&(Te=Te(P)),f=f===!0?h:Bn(f),Qn(o)&&(o={targets:h,className:o}),f&&(_===!1||_===mi||(_=!_&&f.parentNode&&f.parentNode.style&&_i(f.parentNode).display==="flex"?!1:$t),P.pin=f,me=De.core.getCache(f),me.spacer?Ze=me.pinState:(E&&(E=Bn(E),E&&!E.nodeType&&(E=E.current||E.nativeElement),me.spacerIsNative=!!E,E&&(me.spacerState=cl(E))),me.spacer=Ge=E||wt.createElement("div"),Ge.classList.add("pin-spacer"),l&&Ge.classList.add("pin-spacer-"+l),me.pinState=Ze=cl(f)),n.force3D!==!1&&De.set(f,{force3D:!0}),P.spacer=Ge=me.spacer,Ie=_i(f),pe=Ie[_+C.os2],S=De.getProperty(f),V=De.quickSetter(f,C.a,Qt),iu(f,Ge,Ie),rt=cl(f)),j){Be=Gr(j)?fp(j,dp):dp,N=ll("scroller-start",l,D,C,Be,0),de=ll("scroller-end",l,D,C,Be,0,N),R=N["offset"+C.op.d2];var se=Bn(Ar(D,"content")||D);re=this.markerStart=ll("start",l,se,C,Be,R,0,w),oe=this.markerEnd=ll("end",l,se,C,Be,R,0,w),w&&(Me=De.quickSetter([re,oe],C.a,Qt)),!F&&!(Hi.length&&Ar(D,"fixedMarkers")===!0)&&(HM(I?xt:D),De.set([N,de],{force3D:!0}),ee=De.quickSetter(N,C.a,Qt),ve=De.quickSetter(de,C.a,Qt))}if(w){var ue=w.vars.onUpdate,ae=w.vars.onUpdateParams;w.eventCallback("onUpdate",function(){P.update(0,0,1),ue&&ue.apply(w,ae||[])})}if(P.previous=function(){return it[it.indexOf(P)-1]},P.next=function(){return it[it.indexOf(P)+1]},P.revert=function(le,Xe){if(!Xe)return P.kill(!0);var qe=le!==!1||!P.enabled,Qe=xn;qe!==P.isReverted&&(qe&&(_e=Math.max($(),P.scroll.rec||0),Ke=P.progress,ne=i&&i.progress()),re&&[re,oe,N,de].forEach(function(Wt){return Wt.style.display=qe?"none":"block"}),qe&&(xn=P,P.update(qe)),f&&(!y||!P.isActive)&&(qe?ZM(f,Ge,Ze):iu(f,Ge,_i(f),ce)),qe||P.update(qe),xn=Qe,P.isReverted=qe)},P.refresh=function(le,Xe,qe,Qe){if(!((xn||!P.enabled)&&!Xe)){if(f&&le&&Si){ln(r,"scrollEnd",Rm);return}!In&&J&&J(P),xn=P,te.tween&&!qe&&(te.tween.kill(),te.tween=0),he&&he.pause(),g&&i&&(i.revert({kill:!1}).invalidate(),i.getChildren?i.getChildren(!0,!0,!1).forEach(function(ye){return ye.vars.immediateRender&&ye.render(0,!0,!0)}):i.vars.immediateRender&&i.render(0,!0,!0)),P.isReverted||P.revert(!0,!0),P._subPinOffset=!1;var Wt=we(),st=Ee(),At=w?w.duration():Bi(D,C),rn=Ce<=.01||!Ce,Ct=0,St=Qe||0,ft=Gr(qe)?qe.end:n.end,bn=n.endTrigger||h,Et=Gr(qe)?qe.start:n.start||(n.start===0||!h?0:f?"0 0":"0 100%"),pn=P.pinnedContainer=n.pinnedContainer&&Bn(n.pinnedContainer,P),wn=h&&Math.max(0,it.indexOf(P))||0,Xt=wn,Ft,Jt,Ai,ms,sn,zt,hi,_s,b,O,Z,G,W;for(j&&Gr(qe)&&(G=De.getProperty(N,C.p),W=De.getProperty(de,C.p));Xt-- >0;)zt=it[Xt],zt.end||zt.refresh(0,1)||(xn=P),hi=zt.pin,hi&&(hi===h||hi===f||hi===pn)&&!zt.isReverted&&(O||(O=[]),O.unshift(zt),zt.revert(!0,!0)),zt!==it[Xt]&&(wn--,Xt--);for(Mn(Et)&&(Et=Et(P)),Et=lp(Et,"start",P),Ne=gp(Et,h,Wt,C,$(),re,N,P,st,Y,F,At,w,P._startClamp&&"_startClamp")||(f?-.001:0),Mn(ft)&&(ft=ft(P)),Qn(ft)&&!ft.indexOf("+=")&&(~ft.indexOf(" ")?ft=(Qn(Et)?Et.split(" ")[0]:"")+ft:(Ct=El(ft.substr(2),Wt),ft=Qn(Et)?Et:(w?De.utils.mapRange(0,w.duration(),w.scrollTrigger.start,w.scrollTrigger.end,Ne):Ne)+Ct,bn=h)),ft=lp(ft,"end",P),Q=Math.max(Ne,gp(ft||(bn?"100% 0":At),bn,Wt,C,$()+Ct,oe,de,P,st,Y,F,At,w,P._endClamp&&"_endClamp"))||-.001,Ct=0,Xt=wn;Xt--;)zt=it[Xt]||{},hi=zt.pin,hi&&zt.start-zt._pinPush<=Ne&&!w&&zt.end>0&&(Ft=zt.end-(P._startClamp?Math.max(0,zt.start):zt.start),(hi===h&&zt.start-zt._pinPush<Ne||hi===pn)&&isNaN(Et)&&(Ct+=Ft*(1-zt.progress)),hi===f&&(St+=Ft));if(Ne+=Ct,Q+=Ct,P._startClamp&&(P._startClamp+=Ct),P._endClamp&&!In&&(P._endClamp=Q||-.001,Q=Math.min(Q,Bi(D,C))),Ce=Q-Ne||(Ne-=.01)&&.001,rn&&(Ke=De.utils.clamp(0,1,De.utils.normalize(Ne,Q,_e))),P._pinPush=St,re&&Ct&&(Ft={},Ft[C.a]="+="+Ct,pn&&(Ft[C.p]="-="+$()),De.set([re,oe],Ft)),f&&!(vh&&P.end>=Bi(D,C)))Ft=_i(f),ms=C===jt,Ai=$(),H=parseFloat(S(C.a))+St,!At&&Q>1&&(Z=(I?wt.scrollingElement||ti:D).style,Z={style:Z,value:Z["overflow"+C.a.toUpperCase()]},I&&_i(xt)["overflow"+C.a.toUpperCase()]!=="scroll"&&(Z.style["overflow"+C.a.toUpperCase()]="scroll")),iu(f,Ge,Ft),rt=cl(f),Jt=er(f,!0),_s=F&&Lr(D,ms?Un:jt)(),_?(ce=[_+C.os2,Ce+St+Qt],ce.t=Ge,Xt=_===$t?Yl(f,C)+Ce+St:0,Xt&&(ce.push(C.d,Xt+Qt),Ge.style.flexBasis!=="auto"&&(Ge.style.flexBasis=Xt+Qt)),Js(ce),pn&&it.forEach(function(ye){ye.pin===pn&&ye.vars.pinSpacing!==!1&&(ye._subPinOffset=!0)}),F&&$(_e)):(Xt=Yl(f,C),Xt&&Ge.style.flexBasis!=="auto"&&(Ge.style.flexBasis=Xt+Qt)),F&&(sn={top:Jt.top+(ms?Ai-Ne:_s)+Qt,left:Jt.left+(ms?_s:Ai-Ne)+Qt,boxSizing:"border-box",position:"fixed"},sn[es]=sn["max"+la]=Math.ceil(Jt.width)+Qt,sn[ts]=sn["max"+Sf]=Math.ceil(Jt.height)+Qt,sn[mi]=sn[mi+$a]=sn[mi+Ya]=sn[mi+Ka]=sn[mi+Za]="0",sn[$t]=Ft[$t],sn[$t+$a]=Ft[$t+$a],sn[$t+Ya]=Ft[$t+Ya],sn[$t+Ka]=Ft[$t+Ka],sn[$t+Za]=Ft[$t+Za],U=KM(Ze,sn,y),In&&$(0)),i?(b=i._initted,Qc(1),i.render(i.duration(),!0,!0),K=S(C.a)-H+Ce+St,ie=Math.abs(Ce-K)>1,F&&ie&&U.splice(U.length-2,2),i.render(0,!0,!0),b||i.invalidate(!0),i.parent||i.totalTime(i.totalTime()),Qc(0)):K=Ce,Z&&(Z.value?Z.style["overflow"+C.a.toUpperCase()]=Z.value:Z.style.removeProperty("overflow-"+C.a));else if(h&&$()&&!w)for(Jt=h.parentNode;Jt&&Jt!==xt;)Jt._pinOffset&&(Ne-=Jt._pinOffset,Q-=Jt._pinOffset),Jt=Jt.parentNode;O&&O.forEach(function(ye){return ye.revert(!1,!0)}),P.start=Ne,P.end=Q,xe=Le=In?_e:$(),!w&&!In&&(xe<_e&&$(_e),P.scroll.rec=0),P.revert(!1,!0),We=vn(),q&&(Ye=-1,q.restart(!0)),xn=0,i&&L&&(i._initted||ne)&&i.progress()!==ne&&i.progress(ne||0,!0).render(i.time(),!0,!0),(rn||Ke!==P.progress||w||g||i&&!i._initted)&&(i&&!L&&(i._initted||Ke||i.vars.immediateRender!==!1)&&i.totalProgress(w&&Ne<-.001&&!Ke?De.utils.normalize(Ne,Q,0):Ke,!0),P.progress=rn||(xe-Ne)/Ce===Ke?0:Ke),f&&_&&(Ge._pinOffset=Math.round(P.progress*K)),he&&he.invalidate(),isNaN(G)||(G-=De.getProperty(N,C.p),W-=De.getProperty(de,C.p),ul(N,C,G),ul(re,C,G-(Qe||0)),ul(de,C,W),ul(oe,C,W-(Qe||0))),rn&&!In&&P.update(),u&&!In&&!Ue&&(Ue=!0,u(P),Ue=!1)}},P.getVelocity=function(){return($()-Le)/(vn()-Pa)*1e3||0},P.endAnimation=function(){Ea(P.callbackAnimation),i&&(he?he.progress(1):i.paused()?L||Ea(i,P.direction<0,1):Ea(i,i.reversed()))},P.labelToScroll=function(le){return i&&i.labels&&(Ne||P.refresh()||Ne)+i.labels[le]/i.duration()*Ce||0},P.getTrailing=function(le){var Xe=it.indexOf(P),qe=P.direction>0?it.slice(0,Xe).reverse():it.slice(Xe+1);return(Qn(le)?qe.filter(function(Qe){return Qe.vars.preventOverlaps===le}):qe).filter(function(Qe){return P.direction>0?Qe.end<=Ne:Qe.start>=Q})},P.update=function(le,Xe,qe){if(!(w&&!qe&&!le)){var Qe=In===!0?_e:P.scroll(),Wt=le?0:(Qe-Ne)/Ce,st=Wt<0?0:Wt>1?1:Wt||0,At=P.progress,rn,Ct,St,ft,bn,Et,pn,wn;if(Xe&&(Le=xe,xe=w?$():Qe,v&&(ge=Se,Se=i&&!L?i.totalProgress():st)),p&&f&&!xn&&!il&&Si&&(!st&&Ne<Qe+(Qe-Le)/(vn()-Pa)*p?st=1e-4:st===1&&Q>Qe+(Qe-Le)/(vn()-Pa)*p&&(st=.9999)),st!==At&&P.enabled){if(rn=P.isActive=!!st&&st<1,Ct=!!At&&At<1,Et=rn!==Ct,bn=Et||!!st!=!!At,P.direction=st>At?1:-1,P.progress=st,bn&&!xn&&(St=st&&!At?0:st===1?1:At===1?2:3,L&&(ft=!Et&&z[St+1]!=="none"&&z[St+1]||z[St],wn=i&&(ft==="complete"||ft==="reset"||ft in i))),T&&(Et||wn)&&(wn||d||!i)&&(Mn(T)?T(P):P.getTrailing(T).forEach(function(Ai){return Ai.endAnimation()})),L||(he&&!xn&&!il?(he._dp._time-he._start!==he._time&&he.render(he._dp._time-he._start),he.resetTo?he.resetTo("totalProgress",st,i._tTime/i._tDur):(he.vars.totalProgress=st,he.invalidate().restart())):i&&i.totalProgress(st,!!(xn&&(We||le)))),f){if(le&&_&&(Ge.style[_+C.os2]=pe),!F)V(La(H+K*st));else if(bn){if(pn=!le&&st>At&&Q+1>Qe&&Qe+1>=Bi(D,C),y)if(!le&&(rn||pn)){var Xt=er(f,!0),Ft=Qe-Ne;xp(f,xt,Xt.top+(C===jt?Ft:0)+Qt,Xt.left+(C===jt?0:Ft)+Qt)}else xp(f,Ge);Js(rn||pn?U:rt),ie&&st<1&&rn||V(H+(st===1&&!pn?K:0))}}v&&!te.tween&&!xn&&!il&&q.restart(!0),o&&(Et||A&&st&&(st<1||!jc))&&_o(o.targets).forEach(function(Ai){return Ai.classList[rn||A?"add":"remove"](o.className)}),a&&!L&&!le&&a(P),bn&&!xn?(L&&(wn&&(ft==="complete"?i.pause().totalProgress(1):ft==="reset"?i.restart(!0).pause():ft==="restart"?i.restart(!0):i[ft]()),a&&a(P)),(Et||!jc)&&(c&&Et&&tu(P,c),X[St]&&tu(P,X[St]),A&&(st===1?P.kill(!1,1):X[St]=0),Et||(St=st===1?1:3,X[St]&&tu(P,X[St]))),x&&!rn&&Math.abs(P.getVelocity())>(Ia(x)?x:2500)&&(Ea(P.callbackAnimation),he?he.progress(1):Ea(i,ft==="reverse"?1:!st,1))):L&&a&&!xn&&a(P)}if(ve){var Jt=w?Qe/w.duration()*(w._caScrollDist||0):Qe;ee(Jt+(N._isFlipped?1:0)),ve(Jt)}Me&&Me(-Qe/w.duration()*(w._caScrollDist||0))}},P.enable=function(le,Xe){P.enabled||(P.enabled=!0,ln(D,"resize",Na),I||ln(D,"scroll",Ns),J&&ln(r,"refreshInit",J),le!==!1&&(P.progress=Ke=0,xe=Le=Ye=$()),Xe!==!1&&P.refresh())},P.getTween=function(le){return le&&te?te.tween:he},P.setPositions=function(le,Xe,qe,Qe){if(w){var Wt=w.scrollTrigger,st=w.duration(),At=Wt.end-Wt.start;le=Wt.start+At*le/st,Xe=Wt.start+At*Xe/st}P.refresh(!1,!1,{start:cp(le,qe&&!!P._startClamp),end:cp(Xe,qe&&!!P._endClamp)},Qe),P.update()},P.adjustPinSpacing=function(le){if(ce&&le){var Xe=ce.indexOf(C.d)+1;ce[Xe]=parseFloat(ce[Xe])+le+Qt,ce[1]=parseFloat(ce[1])+le+Qt,Js(ce)}},P.disable=function(le,Xe){if(le!==!1&&P.revert(!0,!0),P.enabled&&(P.enabled=P.isActive=!1,Xe||he&&he.pause(),_e=0,me&&(me.uncache=1),J&&on(r,"refreshInit",J),q&&(q.pause(),te.tween&&te.tween.kill()&&(te.tween=0)),!I)){for(var qe=it.length;qe--;)if(it[qe].scroller===D&&it[qe]!==P)return;on(D,"resize",Na),I||on(D,"scroll",Ns)}},P.kill=function(le,Xe){P.disable(le,Xe),he&&!Xe&&he.kill(),l&&delete Sh[l];var qe=it.indexOf(P);qe>=0&&it.splice(qe,1),qe===Ln&&wl>0&&Ln--,qe=0,it.forEach(function(Qe){return Qe.scroller===P.scroller&&(qe=1)}),qe||In||(P.scroll.rec=0),i&&(i.scrollTrigger=null,le&&i.revert({kill:!1}),Xe||i.kill()),re&&[re,oe,N,de].forEach(function(Qe){return Qe.parentNode&&Qe.parentNode.removeChild(Qe)}),Ja===P&&(Ja=0),f&&(me&&(me.uncache=1),qe=0,it.forEach(function(Qe){return Qe.pin===f&&qe++}),qe||(me.spacer=0)),n.onKill&&n.onKill(P)},it.push(P),P.enable(!1,!1),Te&&Te(P),i&&i.add&&!Ce){var He=P.update;P.update=function(){P.update=He,ot.cache++,Ne||Q||P.refresh()},De.delayedCall(.01,P.update),Ce=.01,Ne=Q=0}else P.refresh();f&&YM()},r.register=function(n){return qs||(De=n||Tm(),ym()&&window.document&&r.enable(),qs=Da),qs},r.defaults=function(n){if(n)for(var i in n)ol[i]=n[i];return ol},r.disable=function(n,i){Da=0,it.forEach(function(a){return a[i?"kill":"disable"](n)}),on(at,"wheel",Ns),on(wt,"scroll",Ns),clearInterval(nl),on(wt,"touchcancel",Li),on(xt,"touchstart",Li),sl(on,wt,"pointerdown,touchstart,mousedown",up),sl(on,wt,"pointerup,touchend,mouseup",hp),Xl.kill(),rl(on);for(var s=0;s<ot.length;s+=3)al(on,ot[s],ot[s+1]),al(on,ot[s],ot[s+2])},r.enable=function(){if(at=window,wt=document,ti=wt.documentElement,xt=wt.body,De&&(_o=De.utils.toArray,Wa=De.utils.clamp,xh=De.core.context||Li,Qc=De.core.suppressOverwrites||Li,_f=at.history.scrollRestoration||"auto",Mh=at.pageYOffset||0,De.core.globals("ScrollTrigger",r),xt)){Da=1,Ks=document.createElement("div"),Ks.style.height="100vh",Ks.style.position="absolute",Im(),zM(),Ht.register(De),r.isTouch=Ht.isTouch,gr=Ht.isTouch&&/(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent),gh=Ht.isTouch===1,ln(at,"wheel",Ns),mf=[at,wt,ti,xt],De.matchMedia?(r.matchMedia=function(c){var u=De.matchMedia(),d;for(d in c)u.add(d,c[d]);return u},De.addEventListener("matchMediaInit",function(){Dm(),yf()}),De.addEventListener("matchMediaRevert",function(){return Pm()}),De.addEventListener("matchMedia",function(){$r(0,1),hs("matchMedia")}),De.matchMedia().add("(orientation: portrait)",function(){return nu(),nu})):console.warn("Requires GSAP 3.11.0 or later"),nu(),ln(wt,"scroll",Ns);var n=xt.hasAttribute("style"),i=xt.style,s=i.borderTopStyle,a=De.core.Animation.prototype,o,l;for(a.revert||Object.defineProperty(a,"revert",{value:function(){return this.time(-.01,!0)}}),i.borderTopStyle="solid",o=er(xt),jt.m=Math.round(o.top+jt.sc())||0,Un.m=Math.round(o.left+Un.sc())||0,s?i.borderTopStyle=s:i.removeProperty("border-top-style"),n||(xt.setAttribute("style",""),xt.removeAttribute("style")),nl=setInterval(pp,250),De.delayedCall(.5,function(){return il=0}),ln(wt,"touchcancel",Li),ln(xt,"touchstart",Li),sl(ln,wt,"pointerdown,touchstart,mousedown",up),sl(ln,wt,"pointerup,touchend,mouseup",hp),_h=De.utils.checkPrefix("transform"),Al.push(_h),qs=vn(),Xl=De.delayedCall(.2,$r).pause(),Fs=[wt,"visibilitychange",function(){var c=at.innerWidth,u=at.innerHeight;wt.hidden?(ap=c,op=u):(ap!==c||op!==u)&&Na()},wt,"DOMContentLoaded",$r,at,"load",$r,at,"resize",Na],rl(ln),it.forEach(function(c){return c.enable(0,1)}),l=0;l<ot.length;l+=3)al(on,ot[l],ot[l+1]),al(on,ot[l],ot[l+2])}},r.config=function(n){"limitCallbacks"in n&&(jc=!!n.limitCallbacks);var i=n.syncInterval;i&&clearInterval(nl)||(nl=i)&&setInterval(pp,i),"ignoreMobileResize"in n&&(gh=r.isTouch===1&&n.ignoreMobileResize),"autoRefreshEvents"in n&&(rl(on)||rl(ln,n.autoRefreshEvents||"none"),vm=(n.autoRefreshEvents+"").indexOf("resize")===-1)},r.scrollerProxy=function(n,i){var s=Bn(n),a=ot.indexOf(s),o=cs(s);~a&&ot.splice(a,o?6:2),i&&(o?Hi.unshift(at,i,xt,i,ti,i):Hi.unshift(s,i))},r.clearMatchMedia=function(n){it.forEach(function(i){return i._ctx&&i._ctx.query===n&&i._ctx.kill(!0,!0)})},r.isInViewport=function(n,i,s){var a=(Qn(n)?Bn(n):n).getBoundingClientRect(),o=a[s?es:ts]*i||0;return s?a.right-o>0&&a.left+o<at.innerWidth:a.bottom-o>0&&a.top+o<at.innerHeight},r.positionInViewport=function(n,i,s){Qn(n)&&(n=Bn(n));var a=n.getBoundingClientRect(),o=a[s?es:ts],l=i==null?o/2:i in Zl?Zl[i]*o:~i.indexOf("%")?parseFloat(i)*o/100:parseFloat(i)||0;return s?(a.left+l)/at.innerWidth:(a.top+l)/at.innerHeight},r.killAll=function(n){if(it.slice(0).forEach(function(s){return s.vars.id!=="ScrollSmoother"&&s.kill()}),n!==!0){var i=us.killAll||[];us={},i.forEach(function(s){return s()})}},r})();ct.version="3.14.2";ct.saveStyles=function(r){return r?_o(r).forEach(function(e){if(e&&e.style){var t=Jn.indexOf(e);t>=0&&Jn.splice(t,5),Jn.push(e,e.style.cssText,e.getBBox&&e.getAttribute("transform"),De.core.getCache(e),xh())}}):Jn};ct.revert=function(r,e){return yf(!r,e)};ct.create=function(r,e){return new ct(r,e)};ct.refresh=function(r){return r?Na(!0):(qs||ct.register())&&$r(!0)};ct.update=function(r){return++ot.cache&&rr(r===!0?2:0)};ct.clearScrollMemory=Lm;ct.maxScroll=function(r,e){return Bi(r,e?Un:jt)};ct.getScrollFunc=function(r,e){return Lr(Bn(r),e?Un:jt)};ct.getById=function(r){return Sh[r]};ct.getAll=function(){return it.filter(function(r){return r.vars.id!=="ScrollSmoother"})};ct.isScrolling=function(){return!!Si};ct.snapDirectional=Mf;ct.addEventListener=function(r,e){var t=us[r]||(us[r]=[]);~t.indexOf(e)||t.push(e)};ct.removeEventListener=function(r,e){var t=us[r],n=t&&t.indexOf(e);n>=0&&t.splice(n,1)};ct.batch=function(r,e){var t=[],n={},i=e.interval||.016,s=e.batchMax||1e9,a=function(c,u){var d=[],h=[],f=De.delayedCall(i,function(){u(d,h),d=[],h=[]}).pause();return function(_){d.length||f.restart(!0),d.push(_.trigger),h.push(_),s<=d.length&&f.progress(1)}},o;for(o in e)n[o]=o.substr(0,2)==="on"&&Mn(e[o])&&o!=="onRefreshInit"?a(o,e[o]):e[o];return Mn(s)&&(s=s(),ln(ct,"refresh",function(){return s=e.batchMax()})),_o(r).forEach(function(l){var c={};for(o in n)c[o]=n[o];c.trigger=l,t.push(ct.create(c))}),t};var Sp=function(e,t,n,i){return t>i?e(i):t<0&&e(0),n>i?(i-t)/(n-t):n<0?t/(t-n):1},ru=function r(e,t){t===!0?e.style.removeProperty("touch-action"):e.style.touchAction=t===!0?"auto":t?"pan-"+t+(Ht.isTouch?" pinch-zoom":""):"none",e===ti&&r(xt,t)},hl={auto:1,scroll:1},QM=function(e){var t=e.event,n=e.target,i=e.axis,s=(t.changedTouches?t.changedTouches[0]:t).target,a=s._gsap||De.core.getCache(s),o=vn(),l;if(!a._isScrollT||o-a._isScrollT>2e3){for(;s&&s!==xt&&(s.scrollHeight<=s.clientHeight&&s.scrollWidth<=s.clientWidth||!(hl[(l=_i(s)).overflowY]||hl[l.overflowX]));)s=s.parentNode;a._isScroll=s&&s!==n&&!cs(s)&&(hl[(l=_i(s)).overflowY]||hl[l.overflowX]),a._isScrollT=o}(a._isScroll||i==="x")&&(t.stopPropagation(),t._gsapAllow=!0)},Um=function(e,t,n,i){return Ht.create({target:e,capture:!0,debounce:!1,lockAxis:!0,type:t,onWheel:i=i&&QM,onPress:i,onDrag:i,onScroll:i,onEnable:function(){return n&&ln(wt,Ht.eventTypes[0],yp,!1,!0)},onDisable:function(){return on(wt,Ht.eventTypes[0],yp,!0)}})},jM=/(input|label|select|textarea)/i,Mp,yp=function(e){var t=jM.test(e.target.tagName);(t||Mp)&&(e._gsapAllow=!0,Mp=t)},e4=function(e){Gr(e)||(e={}),e.preventDefault=e.isNormalizer=e.allowClicks=!0,e.type||(e.type="wheel,touch"),e.debounce=!!e.debounce,e.id=e.id||"normalizer";var t=e,n=t.normalizeScrollX,i=t.momentum,s=t.allowNestedScroll,a=t.onRelease,o,l,c=Bn(e.target)||ti,u=De.core.globals().ScrollSmoother,d=u&&u.get(),h=gr&&(e.content&&Bn(e.content)||d&&e.content!==!1&&!d.smooth()&&d.content()),f=Lr(c,jt),_=Lr(c,Un),g=1,p=(Ht.isTouch&&at.visualViewport?at.visualViewport.scale*at.visualViewport.width:at.outerWidth)/at.innerWidth,m=0,M=Mn(i)?function(){return i(o)}:function(){return i||2.8},A,v,y=Um(c,e.type,!0,s),E=function(){return v=!1},w=Li,x=Li,T=function(){l=Bi(c,jt),x=Wa(gr?1:0,l),n&&(w=Wa(0,Bi(c,Un))),A=ns},C=function(){h._gsap.y=La(parseFloat(h._gsap.y)+f.offset)+"px",h.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+parseFloat(h._gsap.y)+", 0, 1)",f.offset=f.cacheID=0},L=function(){if(v){requestAnimationFrame(E);var j=La(o.deltaY/2),Y=x(f.v-j);if(h&&Y!==f.v+f.offset){f.offset=Y-f.v;var P=La((parseFloat(h&&h._gsap.y)||0)-f.offset);h.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+P+", 0, 1)",h._gsap.y=P+"px",f.cacheID=ot.cache,rr()}return!0}f.offset&&C(),v=!0},D,k,I,F,X=function(){T(),D.isActive()&&D.vars.scrollY>l&&(f()>l?D.progress(1)&&f(l):D.resetTo("scrollY",l))};return h&&De.set(h,{y:"+=0"}),e.ignoreCheck=function(z){return gr&&z.type==="touchmove"&&L()||g>1.05&&z.type!=="touchstart"||o.isGesturing||z.touches&&z.touches.length>1},e.onPress=function(){v=!1;var z=g;g=La((at.visualViewport&&at.visualViewport.scale||1)/p),D.pause(),z!==g&&ru(c,g>1.01?!0:n?!1:"x"),k=_(),I=f(),T(),A=ns},e.onRelease=e.onGestureStart=function(z,j){if(f.offset&&C(),!j)F.restart(!0);else{ot.cache++;var Y=M(),P,J;n&&(P=_(),J=P+Y*.05*-z.velocityX/.227,Y*=Sp(_,P,J,Bi(c,Un)),D.vars.scrollX=w(J)),P=f(),J=P+Y*.05*-z.velocityY/.227,Y*=Sp(f,P,J,Bi(c,jt)),D.vars.scrollY=x(J),D.invalidate().duration(Y).play(.01),(gr&&D.vars.scrollY>=l||P>=l-1)&&De.to({},{onUpdate:X,duration:Y})}a&&a(z)},e.onWheel=function(){D._ts&&D.pause(),vn()-m>1e3&&(A=0,m=vn())},e.onChange=function(z,j,Y,P,J){if(ns!==A&&T(),j&&n&&_(w(P[2]===j?k+(z.startX-z.x):_()+j-P[1])),Y){f.offset&&C();var we=J[2]===Y,Ee=we?I+z.startY-z.y:f()+Y-J[1],Ye=x(Ee);we&&Ee!==Ye&&(I+=Ye-Ee),f(Ye)}(Y||j)&&rr()},e.onEnable=function(){ru(c,n?!1:"x"),ct.addEventListener("refresh",X),ln(at,"resize",X),f.smooth&&(f.target.style.scrollBehavior="auto",f.smooth=_.smooth=!1),y.enable()},e.onDisable=function(){ru(c,!0),on(at,"resize",X),ct.removeEventListener("refresh",X),y.kill()},e.lockAxis=e.lockAxis!==!1,o=new Ht(e),o.iOS=gr,gr&&!f()&&f(1),gr&&De.ticker.add(Li),F=o._dc,D=De.to(o,{ease:"power4",paused:!0,inherit:!1,scrollX:n?"+=0.1":"+=0",scrollY:"+=0.1",modifiers:{scrollY:Nm(f,f(),function(){return D.pause()})},onUpdate:rr,onComplete:F.vars.onComplete}),o};ct.sort=function(r){if(Mn(r))return it.sort(r);var e=at.pageYOffset||0;return ct.getAll().forEach(function(t){return t._sortY=t.trigger?e+t.trigger.getBoundingClientRect().top:t.start+at.innerHeight}),it.sort(r||function(t,n){return(t.vars.refreshPriority||0)*-1e6+(t.vars.containerAnimation?1e6:t._sortY)-((n.vars.containerAnimation?1e6:n._sortY)+(n.vars.refreshPriority||0)*-1e6)})};ct.observe=function(r){return new Ht(r)};ct.normalizeScroll=function(r){if(typeof r>"u")return Dn;if(r===!0&&Dn)return Dn.enable();if(r===!1){Dn&&Dn.kill(),Dn=r;return}var e=r instanceof Ht?r:e4(r);return Dn&&Dn.target===e.target&&Dn.kill(),cs(e.target)&&(Dn=e),e};ct.core={_getVelocityProp:mh,_inputObserver:Um,_scrollers:ot,_proxies:Hi,bridge:{ss:function(){Si||hs("scrollStart"),Si=vn()},ref:function(){return xn}}};Tm()&&De.registerPlugin(ct);const t4={anniversary:"20",ordinal:"th",company:"COMPANY",awards:"AWARDS",year:"2026",brand:"COMPANY AWARDS",awardCategory:"SPECIAL RECOGNITION",recipient:"YOUR NAME"},Ir={...t4,...window.AWARDS_CONFIG??{}};ac.registerPlugin(ct);document.querySelectorAll("[data-bind]").forEach(r=>{r.textContent=Ir[r.dataset.bind]??""});document.title=`${Ir.brand} ${Ir.year} | Opening`;const n4=document.querySelector("#stage"),kn=new O_;kn.background=new je(525846);kn.fog=new Bh(1313834,.007);const vi=new zn(42,1,.1,180),Hs=new B(0,5.6,0);vi.position.set(10.8,5.2,17.5);vi.lookAt(Hs);const pa=new Yv({canvas:n4,antialias:!0,powerPreference:"high-performance"});pa.setPixelRatio(Math.min(window.devicePixelRatio,1.7));pa.toneMapping=Kl;pa.toneMappingExposure=1.42;pa.outputColorSpace=jn;const To=new tS(pa);To.addPass(new nS(kn,vi));const qm=new ta(new fe(1,1),.35,.58,.75);To.addPass(qm);To.addPass(new rS);const Tf=new en(new vo(240,140),new cn({depthWrite:!1,uniforms:{uTime:{value:0}},vertexShader:"varying vec2 vUv; void main(){vUv=uv;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}",fragmentShader:`varying vec2 vUv; uniform float uTime;
      float glow(vec2 p,vec2 c,vec2 s){vec2 q=(p-c)/s;return exp(-dot(q,q)*2.3);}
      void main(){vec3 c=mix(vec3(.022,.018,.074),vec3(.115,.055,.19),1.-vUv.y);
        c+=vec3(.19,.055,.23)*glow(vUv,vec2(.18,.29),vec2(.31,.34));
        c+=vec3(.06,.055,.18)*glow(vUv,vec2(.85,.48),vec2(.34,.42));
        c+=vec3(.19,.072,.1)*glow(vUv,vec2(.48,.13),vec2(.55,.17));
        c+=.012*sin(vUv.x*19.+uTime*.1)*sin(vUv.y*18.);gl_FragColor=vec4(c,1.);}`}));Tf.position.set(0,10,-52);kn.add(Tf);let Tp=2026;const su=()=>(Tp=Tp*1664525+1013904223>>>0)/4294967296,Rl=new Float32Array(900*3);for(let r=0;r<900;r++)Rl[r*3]=(su()-.5)*110,Rl[r*3+1]=su()*48+4,Rl[r*3+2]=-25-su()*36;const Ef=new Z_(new En,new Hp({color:13808895,size:.11,transparent:!0,opacity:.7,sizeAttenuation:!0,depthWrite:!1}));Ef.geometry.setAttribute("position",new Vi(Rl,3));kn.add(Ef);kn.add(new V1(7955366,1.35));const i4=new U1(16246467,2757178,2.2);kn.add(i4);function bf(r,e,t,n,i){const s=new k1(r,e);s.position.set(t,n,i),kn.add(s)}bf(16768144,4,-7,14,10);bf(16777215,2.6,8,10,7);bf(16229708,3.2,2,4,-9);const wf=new B1(16758624,85,30);wf.position.set(-5,3.5,6);kn.add(wf);const fs=new Os;kn.add(fs);const r4=new L1({color:16104005,metalness:.64,roughness:.23,clearcoat:.42,clearcoatRoughness:.18}),s4=new So({color:7819292,metalness:.72,roughness:.3}),lr=new So({color:13273656,metalness:.73,roughness:.29}),Af=new So({color:2891824,metalness:.35,roughness:.55}),Eo=new So({color:6636329,metalness:.53,roughness:.43}),a4=new f0(gS);function bo(r,e,t,n,i,s={}){const a=new Zh(r,{font:a4,size:e,depth:t,curveSegments:10,bevelEnabled:!0,bevelThickness:s.bevel??.07,bevelSize:s.bevel??.07,bevelSegments:4});a.computeBoundingBox();const o=a.boundingBox.max.x-a.boundingBox.min.x;a.translate(-o/2,0,0);const l=new en(a,[r4,s4]);return l.position.set(s.x??0,n,i),l.castShadow=!0,fs.add(l),l}function ui(r,e,t,n,i,s,a,o=0){const l=new en(new os(r,e,t),a);if(l.position.set(n,i,s),l.castShadow=!0,l.receiveShadow=!0,fs.add(l),o){const c=new en(new os(r+.05,o,t+.05),lr);c.position.set(n,i+e/2-o/2,s),fs.add(c)}return l}ui(17.2,1.3,6.9,0,-1.15,0,Af,.13);ui(16.4,.43,6.5,0,-.25,0,Eo,.12);ui(15.7,.35,6.2,0,.18,0,lr);ui(14.8,1.35,5.2,0,1.01,-.3,Af,.09);ui(15.9,.28,5.9,0,1.86,-.2,Eo,.12);ui(14.1,.22,5.25,0,2.11,-.2,lr);ui(12.8,1.65,3.8,0,3.13,-.58,Eo,.1);ui(14,.24,4.4,0,4.08,-.4,lr);ui(11.9,1.6,3.2,0,5,-.8,Af,.09);ui(12.7,.19,3.6,0,5.92,-.65,lr);ui(10,.85,2.8,0,6.3,-1,Eo,.09);for(const r of[-6.6,-5.65,5.65,6.6])ui(.21,1.13,.16,r,1.1,2.39,lr);for(const r of[-1.55,-1.31,-.94])ui(17.25,.045,.06,0,r,3.49,lr);bo(Ir.anniversary,5.3,1.05,6.64,1.72,{x:-1.15,bevel:.11});bo(Ir.ordinal,1.42,.58,9.72,1.68,{x:4.47,bevel:.045});bo(Ir.company,1.23,.55,4.35,2.15,{bevel:.045});bo(Ir.awards,2.12,.7,2.24,2.62,{bevel:.07});bo(Ir.year,.52,.28,.78,2.68,{bevel:.025});for(const r of[-5.6,-4.8,4.8,5.6]){const e=new en(new Wh(.15),lr);e.position.set(r,.98,2.55),fs.add(e)}const o4=new cn({transparent:!0,depthWrite:!1,side:Ni,blending:Pl,uniforms:{uOpacity:{value:.57}},vertexShader:"varying vec2 vUv; void main(){vUv=uv;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}",fragmentShader:"varying vec2 vUv;uniform float uOpacity;void main(){float f=pow(1.-vUv.y,.35);float streak=.68+.32*sin(vUv.x*22.);float edge=smoothstep(0.,.1,vUv.y);gl_FragColor=vec4(.48,.55,1.,uOpacity*f*streak*edge*.13);}"}),Fm=[],l4=new B(0,1,0);for(let r=0;r<6;r++){const e=r<3?-1:1,t=e*(10.3+r%3*2.4),n=-1.8-r%3*3.4,i=new B(t,-.35,n),s=new Os;s.position.copy(i),s.add(new en(new qa(.36,.47,.7,12),Eo));const a=new en(new qa(.39,.39,.1,12),lr);a.position.y=.4,s.add(a);const o=new en(new Xh(.22,10,8),new jl({color:13227775}));o.position.y=.51,s.add(o),kn.add(s);const l=new en(new qa(2.35,.12,1,28,1,!0),o4.clone());l.renderOrder=2,kn.add(l);const c=new Gt;kn.add(c);const u=new F1(10399743,45,34,Math.PI/9,.9,1.6);u.position.copy(i).add(new B(0,.6,0)),u.target=c,kn.add(u),Fm.push({beam:l,target:c,origin:i,light:u,phase:r*1.7,side:e})}const is={beams:.48,pedestal:1,final:0},c4=document.querySelector("#intro-copy"),u4=document.querySelector("#final-copy"),h4=document.querySelector("#progress-bar"),f4=document.querySelector("#scene-index"),d4=document.querySelector(".scroll-prompt"),p4=ac.matchMedia();p4.add("(prefers-reduced-motion: reduce)",()=>{is.reducedMotion=!0});const Cf=ac.timeline({scrollTrigger:{trigger:"#experience",start:"top top",end:"bottom bottom",scrub:1.15,onUpdate:({progress:r})=>{h4.style.width=`${(r*100).toFixed(1)}%`,f4.textContent=String(Math.min(4,Math.floor(r*3.15)+1)).padStart(2,"0"),d4.style.opacity=String(Math.max(.25,1-r*5))}}});Cf.to(vi.position,{x:8.1,y:7.7,z:21.2,duration:1.05,ease:"power2.inOut"},0).to(Hs,{y:4.9,duration:1.05},0).to(fs.rotation,{y:-.04,duration:1.05},0).to(c4,{opacity:0,y:-22,duration:.45},.45).to(is,{beams:.85,duration:.8},.45).to(vi.position,{x:3.7,y:7.6,z:23.5,duration:1.1,ease:"power2.inOut"},1.05).to(Hs,{y:5.1,duration:1.1},1.05).to(fs.rotation,{y:.015,duration:1.1},1.05).to(vi.position,{x:0,y:6.7,z:25.8,duration:1,ease:"power2.inOut"},2.15).to(Hs,{y:5.15,duration:1},2.15).to(is,{beams:1,duration:.7},2.3).to(vi.position,{x:0,y:7.15,z:28.4,duration:.65,ease:"power2.inOut"},3.15).to(Hs,{y:5.9,duration:.65},3.15).to(is,{final:1,duration:.35},3.55).to(u4,{opacity:1,y:0,duration:.4},3.55);function Qa(r){const e=Cf.scrollTrigger;window.scrollTo({top:e.start+(e.end-e.start)*r,behavior:"smooth"})}const Ep=[0,.28,.58,.79,1];function Rf(r){const e=Cf.scrollTrigger.progress,t=r>0?Ep.find(n=>n>e+.035):[...Ep].reverse().find(n=>n<e-.035);Qa(t??(r>0?1:0))}document.querySelector("#next").addEventListener("click",()=>Rf(1));document.querySelector("#prev").addEventListener("click",()=>Rf(-1));document.querySelector("#replay").addEventListener("click",()=>Qa(0));document.querySelector("#fullscreen").addEventListener("click",()=>{document.fullscreenElement?document.exitFullscreen():document.documentElement.requestFullscreen?.()});window.addEventListener("keydown",r=>{["Space","ArrowDown","PageDown","ArrowUp","PageUp","Home","End"].includes(r.code)&&(r.preventDefault(),r.code==="Home"?Qa(0):r.code==="End"?Qa(1):Rf(["ArrowUp","PageUp"].includes(r.code)?-1:1)),r.code==="KeyF"&&document.querySelector("#fullscreen").click(),r.code==="KeyR"&&Qa(0)});function Om(){const r=window.innerWidth,e=window.innerHeight;vi.aspect=r/e,vi.fov=r<700?54:42,vi.zoom=r<700?.75:1,vi.updateProjectionMatrix(),pa.setSize(r,e,!1),To.setSize(r,e),qm.setSize(r,e),ct.refresh()}window.addEventListener("resize",Om);Om();window.scrollTo(0,0);const m4=new Y1,au=new B,fl=new B;function Bm(){const r=m4.getElapsedTime();Tf.material.uniforms.uTime.value=r;for(const e of Fm){const t=is.reducedMotion?.25:1;au.set(e.origin.x+e.side*(1.5+3.4*Math.sin(r*.36*t+e.phase)),21+2*Math.cos(r*.21+e.phase),e.origin.z-8+4*Math.sin(r*.25*t+e.phase)),fl.subVectors(au,e.origin),e.beam.position.copy(e.origin).addScaledVector(fl,.5),e.beam.quaternion.setFromUnitVectors(l4,fl.clone().normalize()),e.beam.scale.set(1,fl.length(),1),e.beam.material.uniforms.uOpacity.value=is.beams,e.target.position.copy(au),e.light.intensity=27+is.beams*25}wf.intensity=75+13*Math.sin(r*.8),Ef.material.opacity=.58+.12*Math.sin(r*.43),vi.lookAt(Hs),To.render(),requestAnimationFrame(Bm)}Bm();
