!function(){"use strict";
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */const t=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=63&i|128):55296==(64512&i)&&r+1<t.length&&56320==(64512&t.charCodeAt(r+1))?(i=65536+((1023&i)<<10)+(1023&t.charCodeAt(++r)),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=63&i|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=63&i|128)}return e},e={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"==typeof atob,encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let e=0;e<t.length;e+=3){const i=t[e],s=e+1<t.length,o=s?t[e+1]:0,a=e+2<t.length,l=a?t[e+2]:0,c=i>>2,h=(3&i)<<4|o>>4;let u=(15&o)<<2|l>>6,d=63&l;a||(d=64,s||(u=64)),r.push(n[c],n[h],n[u],n[d])}return r.join("")},encodeString(e,n){return this.HAS_NATIVE_SUPPORT&&!n?btoa(e):this.encodeByteArray(t(e),n)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((31&i)<<6|63&s)}else if(i>239&&i<365){const s=((7&i)<<18|(63&t[n++])<<12|(63&t[n++])<<6|63&t[n++])-65536;e[r++]=String.fromCharCode(55296+(s>>10)),e[r++]=String.fromCharCode(56320+(1023&s))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((15&i)<<12|(63&s)<<6|63&o)}}return e.join("")}(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const r=e?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let e=0;e<t.length;){const s=r[t.charAt(e++)],o=e<t.length?r[t.charAt(e)]:0;++e;const a=e<t.length?r[t.charAt(e)]:64;++e;const l=e<t.length?r[t.charAt(e)]:64;if(++e,null==s||null==o||null==a||null==l)throw new n;const c=s<<2|o>>4;if(i.push(c),64!==a){const t=o<<4&240|a>>2;if(i.push(t),64!==l){const t=a<<6&192|l;i.push(t)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class n extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const r=function(n){return function(n){const r=t(n);return e.encodeByteArray(r,!0)}(n).replace(/\./g,"")};
/**
     * @license
     * Copyright 2022 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
const i=()=>
/**
     * @license
     * Copyright 2022 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
function(){if("undefined"!=typeof self)return self;if("undefined"!=typeof window)return window;if("undefined"!=typeof global)return global;throw new Error("Unable to locate global object.")}().__FIREBASE_DEFAULTS__,s=()=>{if("undefined"==typeof document)return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch(t){return}const n=t&&function(t){try{return e.decodeString(t,!0)}catch(t){console.error("base64Decode failed: ",t)}return null}(t[1]);return n&&JSON.parse(n)},o=()=>{try{return i()||(()=>{if("undefined"==typeof process||void 0===process.env)return;const t=process.env.__FIREBASE_DEFAULTS__;return t?JSON.parse(t):void 0})()||s()}catch(t){return void console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`)}},a=t=>{const e=(t=>{var e,n;return null===(n=null===(e=o())||void 0===e?void 0:e.emulatorHosts)||void 0===n?void 0:n[t]})(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return"["===e[0]?[e.substring(1,n-1),r]:[e.substring(0,n),r]},l=()=>{var t;return null===(t=o())||void 0===t?void 0:t.config};
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
class c{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise(((t,e)=>{this.resolve=t,this.reject=e}))}wrapCallback(t){return(e,n)=>{e?this.reject(e):this.resolve(n),"function"==typeof t&&(this.promise.catch((()=>{})),1===t.length?t(e):t(e,n))}}}
/**
     * @license
     * Copyright 2021 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */function h(){return!function(){var t;const e=null===(t=o())||void 0===t?void 0:t.forceEnvironment;if("node"===e)return!0;if("browser"===e)return!1;try{return"[object process]"===Object.prototype.toString.call(global.process)}catch(t){return!1}}()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}class u extends Error{constructor(t,e,n){super(e),this.code=t,this.customData=n,this.name="FirebaseError",Object.setPrototypeOf(this,u.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,d.prototype.create)}}class d{constructor(t,e,n){this.service=t,this.serviceName=e,this.errors=n}create(t,...e){const n=e[0]||{},r=`${this.service}/${t}`,i=this.errors[t],s=i?function(t,e){return t.replace(f,((t,n)=>{const r=e[n];return null!=r?String(r):`<${n}?>`}))}(i,n):"Error",o=`${this.serviceName}: ${s} (${r}).`;return new u(r,o,n)}}const f=/\{\$([^}]+)}/g;function p(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const n=t[i],s=e[i];if(g(n)&&g(s)){if(!p(n,s))return!1}else if(n!==s)return!1}for(const t of r)if(!n.includes(t))return!1;return!0}function g(t){return null!==t&&"object"==typeof t}
/**
     * @license
     * Copyright 2021 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */function m(t){return t&&t._delegate?t._delegate:t}class y{constructor(t,e,n){this.name=t,this.instanceFactory=e,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */const v="[DEFAULT]";
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class w{constructor(t,e){this.name=t,this.container=e,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const e=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(e)){const t=new c;if(this.instancesDeferred.set(e,t),this.isInitialized(e)||this.shouldAutoInitialize())try{const n=this.getOrInitializeService({instanceIdentifier:e});n&&t.resolve(n)}catch(t){}}return this.instancesDeferred.get(e).promise}getImmediate(t){var e;const n=this.normalizeInstanceIdentifier(null==t?void 0:t.identifier),r=null!==(e=null==t?void 0:t.optional)&&void 0!==e&&e;if(!this.isInitialized(n)&&!this.shouldAutoInitialize()){if(r)return null;throw Error(`Service ${this.name} is not available`)}try{return this.getOrInitializeService({instanceIdentifier:n})}catch(t){if(r)return null;throw t}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,this.shouldAutoInitialize()){if(function(t){return"EAGER"===t.instantiationMode}
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */(t))try{this.getOrInitializeService({instanceIdentifier:v})}catch(t){}for(const[t,e]of this.instancesDeferred.entries()){const n=this.normalizeInstanceIdentifier(t);try{const t=this.getOrInitializeService({instanceIdentifier:n});e.resolve(t)}catch(t){}}}}clearInstance(t=v){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter((t=>"INTERNAL"in t)).map((t=>t.INTERNAL.delete())),...t.filter((t=>"_delete"in t)).map((t=>t._delete()))])}isComponentSet(){return null!=this.component}isInitialized(t=v){return this.instances.has(t)}getOptions(t=v){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:e={}}=t,n=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:n,options:e});for(const[t,e]of this.instancesDeferred.entries()){n===this.normalizeInstanceIdentifier(t)&&e.resolve(r)}return r}onInit(t,e){var n;const r=this.normalizeInstanceIdentifier(e),i=null!==(n=this.onInitCallbacks.get(r))&&void 0!==n?n:new Set;i.add(t),this.onInitCallbacks.set(r,i);const s=this.instances.get(r);return s&&t(s,r),()=>{i.delete(t)}}invokeOnInitCallbacks(t,e){const n=this.onInitCallbacks.get(e);if(n)for(const r of n)try{r(t,e)}catch(t){}}getOrInitializeService({instanceIdentifier:t,options:e={}}){let n=this.instances.get(t);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:(r=t,r===v?void 0:r),options:e}),this.instances.set(t,n),this.instancesOptions.set(t,e),this.invokeOnInitCallbacks(n,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,n)}catch(t){}var r;return n||null}normalizeInstanceIdentifier(t=v){return this.component?this.component.multipleInstances?t:v:t}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}}class E{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const e=this.getProvider(t.name);if(e.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);e.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const e=new w(t,this);return this.providers.set(t,e),e}getProviders(){return Array.from(this.providers.values())}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */var b;!function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"}(b||(b={}));const _={debug:b.DEBUG,verbose:b.VERBOSE,info:b.INFO,warn:b.WARN,error:b.ERROR,silent:b.SILENT},T=b.INFO,S={[b.DEBUG]:"log",[b.VERBOSE]:"log",[b.INFO]:"info",[b.WARN]:"warn",[b.ERROR]:"error"},I=(t,e,...n)=>{if(e<t.logLevel)return;const r=(new Date).toISOString(),i=S[e];if(!i)throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`);console[i](`[${r}]  ${t.name}:`,...n)};class C{constructor(t){this.name=t,this._logLevel=T,this._logHandler=I,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in b))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel="string"==typeof t?_[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if("function"!=typeof t)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,b.DEBUG,...t),this._logHandler(this,b.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,b.VERBOSE,...t),this._logHandler(this,b.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,b.INFO,...t),this._logHandler(this,b.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,b.WARN,...t),this._logHandler(this,b.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,b.ERROR,...t),this._logHandler(this,b.ERROR,...t)}}let A,D;const N=new WeakMap,k=new WeakMap,R=new WeakMap,x=new WeakMap,O=new WeakMap;let L={get(t,e,n){if(t instanceof IDBTransaction){if("done"===e)return k.get(t);if("objectStoreNames"===e)return t.objectStoreNames||R.get(t);if("store"===e)return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return F(t[e])},set:(t,e,n)=>(t[e]=n,!0),has:(t,e)=>t instanceof IDBTransaction&&("done"===e||"store"===e)||e in t};function M(t){return t!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?(D||(D=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])).includes(t)?function(...e){return t.apply(V(this),e),F(N.get(this))}:function(...e){return F(t.apply(V(this),e))}:function(e,...n){const r=t.call(V(this),e,...n);return R.set(r,e.sort?e.sort():[e]),F(r)}}function P(t){return"function"==typeof t?M(t):(t instanceof IDBTransaction&&function(t){if(k.has(t))return;const e=new Promise(((e,n)=>{const r=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",s),t.removeEventListener("abort",s)},i=()=>{e(),r()},s=()=>{n(t.error||new DOMException("AbortError","AbortError")),r()};t.addEventListener("complete",i),t.addEventListener("error",s),t.addEventListener("abort",s)}));k.set(t,e)}(t),e=t,(A||(A=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])).some((t=>e instanceof t))?new Proxy(t,L):t);var e}function F(t){if(t instanceof IDBRequest)return function(t){const e=new Promise(((e,n)=>{const r=()=>{t.removeEventListener("success",i),t.removeEventListener("error",s)},i=()=>{e(F(t.result)),r()},s=()=>{n(t.error),r()};t.addEventListener("success",i),t.addEventListener("error",s)}));return e.then((e=>{e instanceof IDBCursor&&N.set(e,t)})).catch((()=>{})),O.set(e,t),e}(t);if(x.has(t))return x.get(t);const e=P(t);return e!==t&&(x.set(t,e),O.set(e,t)),e}const V=t=>O.get(t);const U=["get","getKey","getAll","getAllKeys","count"],B=["put","add","delete","clear"],j=new Map;function q(t,e){if(!(t instanceof IDBDatabase)||e in t||"string"!=typeof e)return;if(j.get(e))return j.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=B.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!i&&!U.includes(n))return;const s=async function(t,...e){const s=this.transaction(t,i?"readwrite":"readonly");let o=s.store;return r&&(o=o.index(e.shift())),(await Promise.all([o[n](...e),i&&s.done]))[0]};return j.set(e,s),s}L=(t=>({...t,get:(e,n,r)=>q(e,n)||t.get(e,n,r),has:(e,n)=>!!q(e,n)||t.has(e,n)}))(L);
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
class z{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map((t=>{if(function(t){const e=t.getComponent();return"VERSION"===(null==e?void 0:e.type)}(t)){const e=t.getImmediate();return`${e.library}/${e.version}`}return null})).filter((t=>t)).join(" ")}}const G="@firebase/app",H="0.10.18",K=new C("@firebase/app"),Q="@firebase/app-compat",X="@firebase/analytics-compat",W="@firebase/analytics",J="@firebase/app-check-compat",Y="@firebase/app-check",Z="@firebase/auth",tt="@firebase/auth-compat",et="@firebase/database",nt="@firebase/data-connect",rt="@firebase/database-compat",it="@firebase/functions",st="@firebase/functions-compat",ot="@firebase/installations",at="@firebase/installations-compat",lt="@firebase/messaging",ct="@firebase/messaging-compat",ht="@firebase/performance",ut="@firebase/performance-compat",dt="@firebase/remote-config",ft="@firebase/remote-config-compat",pt="@firebase/storage",gt="@firebase/storage-compat",mt="@firebase/firestore",yt="@firebase/vertexai",vt="@firebase/firestore-compat",wt="firebase",Et="[DEFAULT]",bt={[G]:"fire-core",[Q]:"fire-core-compat",[W]:"fire-analytics",[X]:"fire-analytics-compat",[Y]:"fire-app-check",[J]:"fire-app-check-compat",[Z]:"fire-auth",[tt]:"fire-auth-compat",[et]:"fire-rtdb",[nt]:"fire-data-connect",[rt]:"fire-rtdb-compat",[it]:"fire-fn",[st]:"fire-fn-compat",[ot]:"fire-iid",[at]:"fire-iid-compat",[lt]:"fire-fcm",[ct]:"fire-fcm-compat",[ht]:"fire-perf",[ut]:"fire-perf-compat",[dt]:"fire-rc",[ft]:"fire-rc-compat",[pt]:"fire-gcs",[gt]:"fire-gcs-compat",[mt]:"fire-fst",[vt]:"fire-fst-compat",[yt]:"fire-vertex","fire-js":"fire-js",[wt]:"fire-js-all"},_t=new Map,Tt=new Map,St=new Map;function It(t,e){try{t.container.addComponent(e)}catch(n){K.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Ct(t){const e=t.name;if(St.has(e))return K.debug(`There were multiple attempts to register component ${e}.`),!1;St.set(e,t);for(const e of _t.values())It(e,t);for(const e of Tt.values())It(e,t);return!0}
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
const At=new d("app","Firebase",{"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."});
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
class Dt{constructor(t,e,n){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},e),this._name=e.name,this._automaticDataCollectionEnabled=e.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new y("app",(()=>this),"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw At.create("app-deleted",{appName:this._name})}}
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */function Nt(t,e={}){let n=t;if("object"!=typeof e){e={name:e}}const r=Object.assign({name:Et,automaticDataCollectionEnabled:!1},e),i=r.name;if("string"!=typeof i||!i)throw At.create("bad-app-name",{appName:String(i)});if(n||(n=l()),!n)throw At.create("no-options");const s=_t.get(i);if(s){if(p(n,s.options)&&p(r,s.config))return s;throw At.create("duplicate-app",{appName:i})}const o=new E(i);for(const t of St.values())o.addComponent(t);const a=new Dt(n,r,o);return _t.set(i,a),a}function kt(t,e,n){var r;let i=null!==(r=bt[t])&&void 0!==r?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const t=[`Unable to register library "${i}" with version "${e}":`];return s&&t.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&t.push("and"),o&&t.push(`version name "${e}" contains illegal characters (whitespace or "/")`),void K.warn(t.join(" "))}Ct(new y(`${i}-version`,(()=>({library:i,version:e})),"VERSION"))}
/**
     * @license
     * Copyright 2021 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */const Rt="firebase-heartbeat-store";let xt=null;function Ot(){return xt||(xt=function(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),a=F(o);return r&&o.addEventListener("upgradeneeded",(t=>{r(F(o.result),t.oldVersion,t.newVersion,F(o.transaction),t)})),n&&o.addEventListener("blocked",(t=>n(t.oldVersion,t.newVersion,t))),a.then((t=>{s&&t.addEventListener("close",(()=>s())),i&&t.addEventListener("versionchange",(t=>i(t.oldVersion,t.newVersion,t)))})).catch((()=>{})),a}("firebase-heartbeat-database",1,{upgrade:(t,e)=>{if(0===e)try{t.createObjectStore(Rt)}catch(t){console.warn(t)}}}).catch((t=>{throw At.create("idb-open",{originalErrorMessage:t.message})}))),xt}async function Lt(t,e){try{const n=(await Ot()).transaction(Rt,"readwrite"),r=n.objectStore(Rt);await r.put(e,Mt(t)),await n.done}catch(t){if(t instanceof u)K.warn(t.message);else{const e=At.create("idb-set",{originalErrorMessage:null==t?void 0:t.message});K.warn(e.message)}}}function Mt(t){return`${t.name}!${t.options.appId}`}
/**
     * @license
     * Copyright 2021 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class Pt{constructor(t){this.container=t,this._heartbeatsCache=null;const e=this.container.getProvider("app").getImmediate();this._storage=new Vt(e),this._heartbeatsCachePromise=this._storage.read().then((t=>(this._heartbeatsCache=t,t)))}async triggerHeartbeat(){var t,e;try{const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=Ft();if(null==(null===(t=this._heartbeatsCache)||void 0===t?void 0:t.heartbeats)&&(this._heartbeatsCache=await this._heartbeatsCachePromise,null==(null===(e=this._heartbeatsCache)||void 0===e?void 0:e.heartbeats)))return;if(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some((t=>t.date===r)))return;return this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter((t=>{const e=new Date(t.date).valueOf();return Date.now()-e<=2592e6})),this._storage.overwrite(this._heartbeatsCache)}catch(t){K.warn(t)}}async getHeartbeatsHeader(){var t;try{if(null===this._heartbeatsCache&&await this._heartbeatsCachePromise,null==(null===(t=this._heartbeatsCache)||void 0===t?void 0:t.heartbeats)||0===this._heartbeatsCache.heartbeats.length)return"";const e=Ft(),{heartbeatsToSend:n,unsentEntries:i}=function(t,e=1024){const n=[];let r=t.slice();for(const i of t){const t=n.find((t=>t.agent===i.agent));if(t){if(t.dates.push(i.date),Ut(n)>e){t.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Ut(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}(this._heartbeatsCache.heartbeats),s=r(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(t){return K.warn(t),""}}}function Ft(){return(new Date).toISOString().substring(0,10)}class Vt{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return!!function(){try{return"object"==typeof indexedDB}catch(t){return!1}}()&&new Promise(((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var t;e((null===(t=i.error)||void 0===t?void 0:t.message)||"")}}catch(t){e(t)}})).then((()=>!0)).catch((()=>!1))}async read(){if(await this._canUseIndexedDBPromise){const t=await async function(t){try{const e=(await Ot()).transaction(Rt),n=await e.objectStore(Rt).get(Mt(t));return await e.done,n}catch(t){if(t instanceof u)K.warn(t.message);else{const e=At.create("idb-get",{originalErrorMessage:null==t?void 0:t.message});K.warn(e.message)}}}(this.app);return(null==t?void 0:t.heartbeats)?t:{heartbeats:[]}}return{heartbeats:[]}}async overwrite(t){var e;if(await this._canUseIndexedDBPromise){const n=await this.read();return Lt(this.app,{lastSentHeartbeatDate:null!==(e=t.lastSentHeartbeatDate)&&void 0!==e?e:n.lastSentHeartbeatDate,heartbeats:t.heartbeats})}}async add(t){var e;if(await this._canUseIndexedDBPromise){const n=await this.read();return Lt(this.app,{lastSentHeartbeatDate:null!==(e=t.lastSentHeartbeatDate)&&void 0!==e?e:n.lastSentHeartbeatDate,heartbeats:[...n.heartbeats,...t.heartbeats]})}}}function Ut(t){return r(JSON.stringify({version:2,heartbeats:t})).length}
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */var Bt;Bt="",Ct(new y("platform-logger",(t=>new z(t)),"PRIVATE")),Ct(new y("heartbeat",(t=>new Pt(t)),"PRIVATE")),kt(G,H,Bt),kt(G,H,"esm2017"),kt("fire-js","");var jt,$t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};
/** @license
    Copyright The Closure Library Authors.
    SPDX-License-Identifier: Apache-2.0
    */(function(){var t;
/** @license

     Copyright The Closure Library Authors.
     SPDX-License-Identifier: Apache-2.0
    */function e(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}function n(t,e,n){n||(n=0);var r=Array(16);if("string"==typeof e)for(var i=0;16>i;++i)r[i]=e.charCodeAt(n++)|e.charCodeAt(n++)<<8|e.charCodeAt(n++)<<16|e.charCodeAt(n++)<<24;else for(i=0;16>i;++i)r[i]=e[n++]|e[n++]<<8|e[n++]<<16|e[n++]<<24;e=t.g[0],n=t.g[1],i=t.g[2];var s=t.g[3],o=e+(s^n&(i^s))+r[0]+3614090360&4294967295;o=(n=(i=(s=(e=(n=(i=(s=(e=(n=(i=(s=(e=(n=(i=(s=(e=(n=(i=(s=(e=(n=(i=(s=(e=(n=(i=(s=(e=(n=(i=(s=(e=(n=(i=(s=(e=(n=(i=(s=(e=(n=(i=(s=(e=(n=(i=(s=(e=(n=(i=(s=(e=(n=(i=(s=(e=(n=(i=(s=(e=n+(o<<7&4294967295|o>>>25))+((o=s+(i^e&(n^i))+r[1]+3905402710&4294967295)<<12&4294967295|o>>>20))+((o=i+(n^s&(e^n))+r[2]+606105819&4294967295)<<17&4294967295|o>>>15))+((o=n+(e^i&(s^e))+r[3]+3250441966&4294967295)<<22&4294967295|o>>>10))+((o=e+(s^n&(i^s))+r[4]+4118548399&4294967295)<<7&4294967295|o>>>25))+((o=s+(i^e&(n^i))+r[5]+1200080426&4294967295)<<12&4294967295|o>>>20))+((o=i+(n^s&(e^n))+r[6]+2821735955&4294967295)<<17&4294967295|o>>>15))+((o=n+(e^i&(s^e))+r[7]+4249261313&4294967295)<<22&4294967295|o>>>10))+((o=e+(s^n&(i^s))+r[8]+1770035416&4294967295)<<7&4294967295|o>>>25))+((o=s+(i^e&(n^i))+r[9]+2336552879&4294967295)<<12&4294967295|o>>>20))+((o=i+(n^s&(e^n))+r[10]+4294925233&4294967295)<<17&4294967295|o>>>15))+((o=n+(e^i&(s^e))+r[11]+2304563134&4294967295)<<22&4294967295|o>>>10))+((o=e+(s^n&(i^s))+r[12]+1804603682&4294967295)<<7&4294967295|o>>>25))+((o=s+(i^e&(n^i))+r[13]+4254626195&4294967295)<<12&4294967295|o>>>20))+((o=i+(n^s&(e^n))+r[14]+2792965006&4294967295)<<17&4294967295|o>>>15))+((o=n+(e^i&(s^e))+r[15]+1236535329&4294967295)<<22&4294967295|o>>>10))+((o=e+(i^s&(n^i))+r[1]+4129170786&4294967295)<<5&4294967295|o>>>27))+((o=s+(n^i&(e^n))+r[6]+3225465664&4294967295)<<9&4294967295|o>>>23))+((o=i+(e^n&(s^e))+r[11]+643717713&4294967295)<<14&4294967295|o>>>18))+((o=n+(s^e&(i^s))+r[0]+3921069994&4294967295)<<20&4294967295|o>>>12))+((o=e+(i^s&(n^i))+r[5]+3593408605&4294967295)<<5&4294967295|o>>>27))+((o=s+(n^i&(e^n))+r[10]+38016083&4294967295)<<9&4294967295|o>>>23))+((o=i+(e^n&(s^e))+r[15]+3634488961&4294967295)<<14&4294967295|o>>>18))+((o=n+(s^e&(i^s))+r[4]+3889429448&4294967295)<<20&4294967295|o>>>12))+((o=e+(i^s&(n^i))+r[9]+568446438&4294967295)<<5&4294967295|o>>>27))+((o=s+(n^i&(e^n))+r[14]+3275163606&4294967295)<<9&4294967295|o>>>23))+((o=i+(e^n&(s^e))+r[3]+4107603335&4294967295)<<14&4294967295|o>>>18))+((o=n+(s^e&(i^s))+r[8]+1163531501&4294967295)<<20&4294967295|o>>>12))+((o=e+(i^s&(n^i))+r[13]+2850285829&4294967295)<<5&4294967295|o>>>27))+((o=s+(n^i&(e^n))+r[2]+4243563512&4294967295)<<9&4294967295|o>>>23))+((o=i+(e^n&(s^e))+r[7]+1735328473&4294967295)<<14&4294967295|o>>>18))+((o=n+(s^e&(i^s))+r[12]+2368359562&4294967295)<<20&4294967295|o>>>12))+((o=e+(n^i^s)+r[5]+4294588738&4294967295)<<4&4294967295|o>>>28))+((o=s+(e^n^i)+r[8]+2272392833&4294967295)<<11&4294967295|o>>>21))+((o=i+(s^e^n)+r[11]+1839030562&4294967295)<<16&4294967295|o>>>16))+((o=n+(i^s^e)+r[14]+4259657740&4294967295)<<23&4294967295|o>>>9))+((o=e+(n^i^s)+r[1]+2763975236&4294967295)<<4&4294967295|o>>>28))+((o=s+(e^n^i)+r[4]+1272893353&4294967295)<<11&4294967295|o>>>21))+((o=i+(s^e^n)+r[7]+4139469664&4294967295)<<16&4294967295|o>>>16))+((o=n+(i^s^e)+r[10]+3200236656&4294967295)<<23&4294967295|o>>>9))+((o=e+(n^i^s)+r[13]+681279174&4294967295)<<4&4294967295|o>>>28))+((o=s+(e^n^i)+r[0]+3936430074&4294967295)<<11&4294967295|o>>>21))+((o=i+(s^e^n)+r[3]+3572445317&4294967295)<<16&4294967295|o>>>16))+((o=n+(i^s^e)+r[6]+76029189&4294967295)<<23&4294967295|o>>>9))+((o=e+(n^i^s)+r[9]+3654602809&4294967295)<<4&4294967295|o>>>28))+((o=s+(e^n^i)+r[12]+3873151461&4294967295)<<11&4294967295|o>>>21))+((o=i+(s^e^n)+r[15]+530742520&4294967295)<<16&4294967295|o>>>16))+((o=n+(i^s^e)+r[2]+3299628645&4294967295)<<23&4294967295|o>>>9))+((o=e+(i^(n|~s))+r[0]+4096336452&4294967295)<<6&4294967295|o>>>26))+((o=s+(n^(e|~i))+r[7]+1126891415&4294967295)<<10&4294967295|o>>>22))+((o=i+(e^(s|~n))+r[14]+2878612391&4294967295)<<15&4294967295|o>>>17))+((o=n+(s^(i|~e))+r[5]+4237533241&4294967295)<<21&4294967295|o>>>11))+((o=e+(i^(n|~s))+r[12]+1700485571&4294967295)<<6&4294967295|o>>>26))+((o=s+(n^(e|~i))+r[3]+2399980690&4294967295)<<10&4294967295|o>>>22))+((o=i+(e^(s|~n))+r[10]+4293915773&4294967295)<<15&4294967295|o>>>17))+((o=n+(s^(i|~e))+r[1]+2240044497&4294967295)<<21&4294967295|o>>>11))+((o=e+(i^(n|~s))+r[8]+1873313359&4294967295)<<6&4294967295|o>>>26))+((o=s+(n^(e|~i))+r[15]+4264355552&4294967295)<<10&4294967295|o>>>22))+((o=i+(e^(s|~n))+r[6]+2734768916&4294967295)<<15&4294967295|o>>>17))+((o=n+(s^(i|~e))+r[13]+1309151649&4294967295)<<21&4294967295|o>>>11))+((s=(e=n+((o=e+(i^(n|~s))+r[4]+4149444226&4294967295)<<6&4294967295|o>>>26))+((o=s+(n^(e|~i))+r[11]+3174756917&4294967295)<<10&4294967295|o>>>22))^((i=s+((o=i+(e^(s|~n))+r[2]+718787259&4294967295)<<15&4294967295|o>>>17))|~e))+r[9]+3951481745&4294967295,t.g[0]=t.g[0]+e&4294967295,t.g[1]=t.g[1]+(i+(o<<21&4294967295|o>>>11))&4294967295,t.g[2]=t.g[2]+i&4294967295,t.g[3]=t.g[3]+s&4294967295}function r(t,e){this.h=e;for(var n=[],r=!0,i=t.length-1;0<=i;i--){var s=0|t[i];r&&s==e||(n[i]=s,r=!1)}this.g=n}!function(t,e){function n(){}n.prototype=e.prototype,t.D=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.C=function(t,n,r){for(var i=Array(arguments.length-2),s=2;s<arguments.length;s++)i[s-2]=arguments[s];return e.prototype[n].apply(t,i)}}(e,(function(){this.blockSize=-1})),e.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0},e.prototype.u=function(t,e){void 0===e&&(e=t.length);for(var r=e-this.blockSize,i=this.B,s=this.h,o=0;o<e;){if(0==s)for(;o<=r;)n(this,t,o),o+=this.blockSize;if("string"==typeof t){for(;o<e;)if(i[s++]=t.charCodeAt(o++),s==this.blockSize){n(this,i),s=0;break}}else for(;o<e;)if(i[s++]=t[o++],s==this.blockSize){n(this,i),s=0;break}}this.h=s,this.o+=e},e.prototype.v=function(){var t=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);t[0]=128;for(var e=1;e<t.length-8;++e)t[e]=0;var n=8*this.o;for(e=t.length-8;e<t.length;++e)t[e]=255&n,n/=256;for(this.u(t),t=Array(16),e=n=0;4>e;++e)for(var r=0;32>r;r+=8)t[n++]=this.g[e]>>>r&255;return t};var i={};function s(t){return-128<=t&&128>t?function(t,e){var n=i;return Object.prototype.hasOwnProperty.call(n,t)?n[t]:n[t]=e(t)}(t,(function(t){return new r([0|t],0>t?-1:0)})):new r([0|t],0>t?-1:0)}function o(t){if(isNaN(t)||!isFinite(t))return a;if(0>t)return d(o(-t));for(var e=[],n=1,i=0;t>=n;i++)e[i]=t/n|0,n*=4294967296;return new r(e,0)}var a=s(0),l=s(1),c=s(16777216);function h(t){if(0!=t.h)return!1;for(var e=0;e<t.g.length;e++)if(0!=t.g[e])return!1;return!0}function u(t){return-1==t.h}function d(t){for(var e=t.g.length,n=[],i=0;i<e;i++)n[i]=~t.g[i];return new r(n,~t.h).add(l)}function f(t,e){return t.add(d(e))}function p(t,e){for(;(65535&t[e])!=t[e];)t[e+1]+=t[e]>>>16,t[e]&=65535,e++}function g(t,e){this.g=t,this.h=e}function m(t,e){if(h(e))throw Error("division by zero");if(h(t))return new g(a,a);if(u(t))return e=m(d(t),e),new g(d(e.g),d(e.h));if(u(e))return e=m(t,d(e)),new g(d(e.g),e.h);if(30<t.g.length){if(u(t)||u(e))throw Error("slowDivide_ only works with positive integers.");for(var n=l,r=e;0>=r.l(t);)n=y(n),r=y(r);var i=v(n,1),s=v(r,1);for(r=v(r,2),n=v(n,2);!h(r);){var c=s.add(r);0>=c.l(t)&&(i=i.add(n),s=c),r=v(r,1),n=v(n,1)}return e=f(t,i.j(e)),new g(i,e)}for(i=a;0<=t.l(e);){for(n=Math.max(1,Math.floor(t.m()/e.m())),r=48>=(r=Math.ceil(Math.log(n)/Math.LN2))?1:Math.pow(2,r-48),c=(s=o(n)).j(e);u(c)||0<c.l(t);)c=(s=o(n-=r)).j(e);h(s)&&(s=l),i=i.add(s),t=f(t,c)}return new g(i,t)}function y(t){for(var e=t.g.length+1,n=[],i=0;i<e;i++)n[i]=t.i(i)<<1|t.i(i-1)>>>31;return new r(n,t.h)}function v(t,e){var n=e>>5;e%=32;for(var i=t.g.length-n,s=[],o=0;o<i;o++)s[o]=0<e?t.i(o+n)>>>e|t.i(o+n+1)<<32-e:t.i(o+n);return new r(s,t.h)}(t=r.prototype).m=function(){if(u(this))return-d(this).m();for(var t=0,e=1,n=0;n<this.g.length;n++){var r=this.i(n);t+=(0<=r?r:4294967296+r)*e,e*=4294967296}return t},t.toString=function(t){if(2>(t=t||10)||36<t)throw Error("radix out of range: "+t);if(h(this))return"0";if(u(this))return"-"+d(this).toString(t);for(var e=o(Math.pow(t,6)),n=this,r="";;){var i=m(n,e).g,s=((0<(n=f(n,i.j(e))).g.length?n.g[0]:n.h)>>>0).toString(t);if(h(n=i))return s+r;for(;6>s.length;)s="0"+s;r=s+r}},t.i=function(t){return 0>t?0:t<this.g.length?this.g[t]:this.h},t.l=function(t){return u(t=f(this,t))?-1:h(t)?0:1},t.abs=function(){return u(this)?d(this):this},t.add=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],i=0,s=0;s<=e;s++){var o=i+(65535&this.i(s))+(65535&t.i(s)),a=(o>>>16)+(this.i(s)>>>16)+(t.i(s)>>>16);i=a>>>16,o&=65535,a&=65535,n[s]=a<<16|o}return new r(n,-2147483648&n[n.length-1]?-1:0)},t.j=function(t){if(h(this)||h(t))return a;if(u(this))return u(t)?d(this).j(d(t)):d(d(this).j(t));if(u(t))return d(this.j(d(t)));if(0>this.l(c)&&0>t.l(c))return o(this.m()*t.m());for(var e=this.g.length+t.g.length,n=[],i=0;i<2*e;i++)n[i]=0;for(i=0;i<this.g.length;i++)for(var s=0;s<t.g.length;s++){var l=this.i(i)>>>16,f=65535&this.i(i),g=t.i(s)>>>16,m=65535&t.i(s);n[2*i+2*s]+=f*m,p(n,2*i+2*s),n[2*i+2*s+1]+=l*m,p(n,2*i+2*s+1),n[2*i+2*s+1]+=f*g,p(n,2*i+2*s+1),n[2*i+2*s+2]+=l*g,p(n,2*i+2*s+2)}for(i=0;i<e;i++)n[i]=n[2*i+1]<<16|n[2*i];for(i=e;i<2*e;i++)n[i]=0;return new r(n,0)},t.A=function(t){return m(this,t).h},t.and=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],i=0;i<e;i++)n[i]=this.i(i)&t.i(i);return new r(n,this.h&t.h)},t.or=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],i=0;i<e;i++)n[i]=this.i(i)|t.i(i);return new r(n,this.h|t.h)},t.xor=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],i=0;i<e;i++)n[i]=this.i(i)^t.i(i);return new r(n,this.h^t.h)},e.prototype.digest=e.prototype.v,e.prototype.reset=e.prototype.s,e.prototype.update=e.prototype.u,r.prototype.add=r.prototype.add,r.prototype.multiply=r.prototype.j,r.prototype.modulo=r.prototype.A,r.prototype.compare=r.prototype.l,r.prototype.toNumber=r.prototype.m,r.prototype.toString=r.prototype.toString,r.prototype.getBits=r.prototype.i,r.fromNumber=o,r.fromString=function t(e,n){if(0==e.length)throw Error("number format error: empty string");if(2>(n=n||10)||36<n)throw Error("radix out of range: "+n);if("-"==e.charAt(0))return d(t(e.substring(1),n));if(0<=e.indexOf("-"))throw Error('number format error: interior "-" character');for(var r=o(Math.pow(n,8)),i=a,s=0;s<e.length;s+=8){var l=Math.min(8,e.length-s),c=parseInt(e.substring(s,s+l),n);8>l?(l=o(Math.pow(n,l)),i=i.j(l).add(o(c))):i=(i=i.j(r)).add(o(c))}return i},jt=r}).apply(void 0!==$t?$t:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{});var qt,zt,Gt,Ht,Kt,Qt,Xt,Wt,Jt="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};
/** @license
    Copyright The Closure Library Authors.
    SPDX-License-Identifier: Apache-2.0
    */(function(){var t,e="function"==typeof Object.defineProperties?Object.defineProperty:function(t,e,n){return t==Array.prototype||t==Object.prototype||(t[e]=n.value),t};var n=function(t){t=["object"==typeof globalThis&&globalThis,t,"object"==typeof window&&window,"object"==typeof self&&self,"object"==typeof Jt&&Jt];for(var e=0;e<t.length;++e){var n=t[e];if(n&&n.Math==Math)return n}throw Error("Cannot find global object")}(this);!function(t,r){if(r)t:{var i=n;t=t.split(".");for(var s=0;s<t.length-1;s++){var o=t[s];if(!(o in i))break t;i=i[o]}(r=r(s=i[t=t[t.length-1]]))!=s&&null!=r&&e(i,t,{configurable:!0,writable:!0,value:r})}}("Array.prototype.values",(function(t){return t||function(){return function(t,e){t instanceof String&&(t+="");var n=0,r=!1,i={next:function(){if(!r&&n<t.length){var i=n++;return{value:e(i,t[i]),done:!1}}return r=!0,{done:!0,value:void 0}}};return i[Symbol.iterator]=function(){return i},i}(this,(function(t,e){return e}))}}));
/** @license

     Copyright The Closure Library Authors.
     SPDX-License-Identifier: Apache-2.0
    */
var r=r||{},i=this||self;function s(t){var e=typeof t;return"array"==(e="object"!=e?e:t?Array.isArray(t)?"array":e:"null")||"object"==e&&"number"==typeof t.length}function o(t){var e=typeof t;return"object"==e&&null!=t||"function"==e}function a(t,e,n){return t.call.apply(t.bind,arguments)}function l(t,e,n){if(!t)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var n=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(n,r),t.apply(e,n)}}return function(){return t.apply(e,arguments)}}function c(t,e,n){return(c=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?a:l).apply(null,arguments)}function h(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var e=n.slice();return e.push.apply(e,arguments),t.apply(this,e)}}function u(t,e){function n(){}n.prototype=e.prototype,t.aa=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.Qb=function(t,n,r){for(var i=Array(arguments.length-2),s=2;s<arguments.length;s++)i[s-2]=arguments[s];return e.prototype[n].apply(t,i)}}function d(t){const e=t.length;if(0<e){const n=Array(e);for(let r=0;r<e;r++)n[r]=t[r];return n}return[]}function f(t,e){for(let e=1;e<arguments.length;e++){const n=arguments[e];if(s(n)){const e=t.length||0,r=n.length||0;t.length=e+r;for(let i=0;i<r;i++)t[e+i]=n[i]}else t.push(n)}}function p(t){return/^[\s\xa0]*$/.test(t)}function g(){var t=i.navigator;return t&&(t=t.userAgent)?t:""}function m(t){return m[" "](t),t}m[" "]=function(){};var y=!(-1==g().indexOf("Gecko")||-1!=g().toLowerCase().indexOf("webkit")&&-1==g().indexOf("Edge")||-1!=g().indexOf("Trident")||-1!=g().indexOf("MSIE")||-1!=g().indexOf("Edge"));function v(t,e,n){for(const r in t)e.call(n,t[r],r,t)}function w(t){const e={};for(const n in t)e[n]=t[n];return e}const E="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function b(t,e){let n,r;for(let e=1;e<arguments.length;e++){for(n in r=arguments[e],r)t[n]=r[n];for(let e=0;e<E.length;e++)n=E[e],Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}}function _(t){var e=1;t=t.split(":");const n=[];for(;0<e&&t.length;)n.push(t.shift()),e--;return t.length&&n.push(t.join(":")),n}function T(t){i.setTimeout((()=>{throw t}),0)}function S(){var t=N;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}var I=new class{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}((()=>new C),(t=>t.reset()));class C{constructor(){this.next=this.g=this.h=null}set(t,e){this.h=t,this.g=e,this.next=null}reset(){this.next=this.g=this.h=null}}let A,D=!1,N=new class{constructor(){this.h=this.g=null}add(t,e){const n=I.get();n.set(t,e),this.h?this.h.next=n:this.g=n,this.h=n}},k=()=>{const t=i.Promise.resolve(void 0);A=()=>{t.then(R)}};var R=()=>{for(var t;t=S();){try{t.h.call(t.g)}catch(t){T(t)}var e=I;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}D=!1};function x(){this.s=this.s,this.C=this.C}function O(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}x.prototype.s=!1,x.prototype.ma=function(){this.s||(this.s=!0,this.N())},x.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()},O.prototype.h=function(){this.defaultPrevented=!0};var L=function(){if(!i.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{const t=()=>{};i.addEventListener("test",t,e),i.removeEventListener("test",t,e)}catch(t){}return t}();function M(t,e){if(O.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,r=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(y){t:{try{m(e.nodeName);var i=!0;break t}catch(t){}i=!1}i||(e=null)}}else"mouseover"==n?e=t.fromElement:"mouseout"==n&&(e=t.toElement);this.relatedTarget=e,r?(this.clientX=void 0!==r.clientX?r.clientX:r.pageX,this.clientY=void 0!==r.clientY?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=void 0!==t.clientX?t.clientX:t.pageX,this.clientY=void 0!==t.clientY?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType="string"==typeof t.pointerType?t.pointerType:P[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&M.aa.h.call(this)}}u(M,O);var P={2:"touch",3:"pen",4:"mouse"};M.prototype.h=function(){M.aa.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var F="closure_listenable_"+(1e6*Math.random()|0),V=0;function U(t,e,n,r,i){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!r,this.ha=i,this.key=++V,this.da=this.fa=!1}function B(t){t.da=!0,t.listener=null,t.proxy=null,t.src=null,t.ha=null}function j(t){this.src=t,this.g={},this.h=0}function q(t,e){var n=e.type;if(n in t.g){var r,i=t.g[n],s=Array.prototype.indexOf.call(i,e,void 0);(r=0<=s)&&Array.prototype.splice.call(i,s,1),r&&(B(e),0==t.g[n].length&&(delete t.g[n],t.h--))}}function z(t,e,n,r){for(var i=0;i<t.length;++i){var s=t[i];if(!s.da&&s.listener==e&&s.capture==!!n&&s.ha==r)return i}return-1}j.prototype.add=function(t,e,n,r,i){var s=t.toString();(t=this.g[s])||(t=this.g[s]=[],this.h++);var o=z(t,e,r,i);return-1<o?(e=t[o],n||(e.fa=!1)):((e=new U(e,this.src,s,!!r,i)).fa=n,t.push(e)),e};var G="closure_lm_"+(1e6*Math.random()|0),H={};function K(t,e,n,r,i){if(Array.isArray(e)){for(var s=0;s<e.length;s++)K(t,e[s],n,r,i);return null}return n=tt(n),t&&t[F]?t.K(e,n,o(r)?!!r.capture:!!r,i):function(t,e,n,r,i,s){if(!e)throw Error("Invalid event type");var a=o(i)?!!i.capture:!!i,l=Y(t);if(l||(t[G]=l=new j(t)),n=l.add(e,n,r,a,s),n.proxy)return n;if(r=function(){function t(n){return e.call(t.src,t.listener,n)}const e=J;return t}(),n.proxy=r,r.src=t,r.listener=n,t.addEventListener)L||(i=a),void 0===i&&(i=!1),t.addEventListener(e.toString(),r,i);else if(t.attachEvent)t.attachEvent(W(e.toString()),r);else{if(!t.addListener||!t.removeListener)throw Error("addEventListener and attachEvent are unavailable.");t.addListener(r)}return n}(t,e,n,!1,r,i)}function Q(t,e,n,r,i){if(Array.isArray(e))for(var s=0;s<e.length;s++)Q(t,e[s],n,r,i);else r=o(r)?!!r.capture:!!r,n=tt(n),t&&t[F]?(t=t.i,(e=String(e).toString())in t.g&&(-1<(n=z(s=t.g[e],n,r,i))&&(B(s[n]),Array.prototype.splice.call(s,n,1),0==s.length&&(delete t.g[e],t.h--)))):t&&(t=Y(t))&&(e=t.g[e.toString()],t=-1,e&&(t=z(e,n,r,i)),(n=-1<t?e[t]:null)&&X(n))}function X(t){if("number"!=typeof t&&t&&!t.da){var e=t.src;if(e&&e[F])q(e.i,t);else{var n=t.type,r=t.proxy;e.removeEventListener?e.removeEventListener(n,r,t.capture):e.detachEvent?e.detachEvent(W(n),r):e.addListener&&e.removeListener&&e.removeListener(r),(n=Y(e))?(q(n,t),0==n.h&&(n.src=null,e[G]=null)):B(t)}}}function W(t){return t in H?H[t]:H[t]="on"+t}function J(t,e){if(t.da)t=!0;else{e=new M(e,this);var n=t.listener,r=t.ha||t.src;t.fa&&X(t),t=n.call(r,e)}return t}function Y(t){return(t=t[G])instanceof j?t:null}var Z="__closure_events_fn_"+(1e9*Math.random()>>>0);function tt(t){return"function"==typeof t?t:(t[Z]||(t[Z]=function(e){return t.handleEvent(e)}),t[Z])}function et(){x.call(this),this.i=new j(this),this.M=this,this.F=null}function nt(t,e){var n,r=t.F;if(r)for(n=[];r;r=r.F)n.push(r);if(t=t.M,r=e.type||e,"string"==typeof e)e=new O(e,t);else if(e instanceof O)e.target=e.target||t;else{var i=e;b(e=new O(r,t),i)}if(i=!0,n)for(var s=n.length-1;0<=s;s--){var o=e.g=n[s];i=rt(o,r,!0,e)&&i}if(i=rt(o=e.g=t,r,!0,e)&&i,i=rt(o,r,!1,e)&&i,n)for(s=0;s<n.length;s++)i=rt(o=e.g=n[s],r,!1,e)&&i}function rt(t,e,n,r){if(!(e=t.i.g[String(e)]))return!0;e=e.concat();for(var i=!0,s=0;s<e.length;++s){var o=e[s];if(o&&!o.da&&o.capture==n){var a=o.listener,l=o.ha||o.src;o.fa&&q(t.i,o),i=!1!==a.call(l,r)&&i}}return i&&!r.defaultPrevented}function it(t,e,n){if("function"==typeof t)n&&(t=c(t,n));else{if(!t||"function"!=typeof t.handleEvent)throw Error("Invalid listener argument");t=c(t.handleEvent,t)}return 2147483647<Number(e)?-1:i.setTimeout(t,e||0)}function st(t){t.g=it((()=>{t.g=null,t.i&&(t.i=!1,st(t))}),t.l);const e=t.h;t.h=null,t.m.apply(null,e)}u(et,x),et.prototype[F]=!0,et.prototype.removeEventListener=function(t,e,n,r){Q(this,t,e,n,r)},et.prototype.N=function(){if(et.aa.N.call(this),this.i){var t,e=this.i;for(t in e.g){for(var n=e.g[t],r=0;r<n.length;r++)B(n[r]);delete e.g[t],e.h--}}this.F=null},et.prototype.K=function(t,e,n,r){return this.i.add(String(t),e,!1,n,r)},et.prototype.L=function(t,e,n,r){return this.i.add(String(t),e,!0,n,r)};class ot extends x{constructor(t,e){super(),this.m=t,this.l=e,this.h=null,this.i=!1,this.g=null}j(t){this.h=arguments,this.g?this.i=!0:st(this)}N(){super.N(),this.g&&(i.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function at(t){x.call(this),this.h=t,this.g={}}u(at,x);var lt=[];function ct(t){v(t.g,(function(t,e){this.g.hasOwnProperty(e)&&X(t)}),t),t.g={}}at.prototype.N=function(){at.aa.N.call(this),ct(this)},at.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var ht=i.JSON.stringify,ut=i.JSON.parse,dt=class{stringify(t){return i.JSON.stringify(t,void 0)}parse(t){return i.JSON.parse(t,void 0)}};function ft(){}function pt(t){return t.h||(t.h=t.i())}function gt(){}ft.prototype.h=null;var mt={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function yt(){O.call(this,"d")}function vt(){O.call(this,"c")}u(yt,O),u(vt,O);var wt={},Et=null;function bt(){return Et=Et||new et}function _t(t){O.call(this,wt.La,t)}function Tt(t){const e=bt();nt(e,new _t(e))}function St(t,e){O.call(this,wt.STAT_EVENT,t),this.stat=e}function It(t){const e=bt();nt(e,new St(e,t))}function Ct(t,e){O.call(this,wt.Ma,t),this.size=e}function At(t,e){if("function"!=typeof t)throw Error("Fn must not be null and must be a function");return i.setTimeout((function(){t()}),e)}function Dt(){this.g=!0}function Nt(t,e,n,r){t.info((function(){return"XMLHTTP TEXT ("+e+"): "+function(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n)for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var r=n[t];if(!(2>r.length)){var i=r[1];if(Array.isArray(i)&&!(1>i.length)){var s=i[0];if("noop"!=s&&"stop"!=s&&"close"!=s)for(var o=1;o<i.length;o++)i[o]=""}}}return ht(n)}catch(t){return e}}(t,n)+(r?" "+r:"")}))}wt.La="serverreachability",u(_t,O),wt.STAT_EVENT="statevent",u(St,O),wt.Ma="timingevent",u(Ct,O),Dt.prototype.xa=function(){this.g=!1},Dt.prototype.info=function(){};var kt,Rt={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},xt={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"};function Ot(){}function Lt(t,e,n,r){this.j=t,this.i=e,this.l=n,this.R=r||1,this.U=new at(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Mt}function Mt(){this.i=null,this.g="",this.h=!1}u(Ot,ft),Ot.prototype.g=function(){return new XMLHttpRequest},Ot.prototype.i=function(){return{}},kt=new Ot;var Pt={},Ft={};function Vt(t,e,n){t.L=1,t.v=we(pe(e)),t.m=n,t.P=!0,Ut(t,null)}function Ut(t,e){t.F=Date.now(),$t(t),t.A=pe(t.v);var n=t.A,r=t.R;Array.isArray(r)||(r=[String(r)]),Oe(n.i,"t",r),t.C=0,n=t.j.J,t.h=new Mt,t.g=bn(t.j,n?e:null,!t.m),0<t.O&&(t.M=new ot(c(t.Y,t,t.g),t.O)),e=t.U,n=t.g,r=t.ca;var i="readystatechange";Array.isArray(i)||(i&&(lt[0]=i.toString()),i=lt);for(var s=0;s<i.length;s++){var o=K(n,i[s],r||e.handleEvent,!1,e.h||e);if(!o)break;e.g[o.key]=o}e=t.H?w(t.H):{},t.m?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ea(t.A,t.u,t.m,e)):(t.u="GET",t.g.ea(t.A,t.u,null,e)),Tt(),function(t,e,n,r,i,s){t.info((function(){if(t.g)if(s)for(var o="",a=s.split("&"),l=0;l<a.length;l++){var c=a[l].split("=");if(1<c.length){var h=c[0];c=c[1];var u=h.split("_");o=2<=u.length&&"type"==u[1]?o+(h+"=")+c+"&":o+(h+"=redacted&")}}else o=null;else o=s;return"XMLHTTP REQ ("+r+") [attempt "+i+"]: "+e+"\n"+n+"\n"+o}))}(t.i,t.u,t.A,t.l,t.R,t.m)}function Bt(t){return!!t.g&&("GET"==t.u&&2!=t.L&&t.j.Ca)}function jt(t,e){var n=t.C,r=e.indexOf("\n",n);return-1==r?Ft:(n=Number(e.substring(n,r)),isNaN(n)?Pt:(r+=1)+n>e.length?Ft:(e=e.slice(r,r+n),t.C=r+n,e))}function $t(t){t.S=Date.now()+t.I,Yt(t,t.I)}function Yt(t,e){if(null!=t.B)throw Error("WatchDog timer not null");t.B=At(c(t.ba,t),e)}function Zt(t){t.B&&(i.clearTimeout(t.B),t.B=null)}function te(t){0==t.j.G||t.J||mn(t.j,t)}function ee(t){Zt(t);var e=t.M;e&&"function"==typeof e.ma&&e.ma(),t.M=null,ct(t.U),t.g&&(e=t.g,t.g=null,e.abort(),e.ma())}function ne(t,e){try{var n=t.j;if(0!=n.G&&(n.g==t||ae(n.h,t)))if(!t.K&&ae(n.h,t)&&3==n.G){try{var r=n.Da.g.parse(e)}catch(t){r=null}if(Array.isArray(r)&&3==r.length){var i=r;if(0==i[0]){t:if(!n.u){if(n.g){if(!(n.g.F+3e3<t.F))break t;gn(n),sn(n)}dn(n),It(18)}}else n.za=i[1],0<n.za-n.T&&37500>i[2]&&n.F&&0==n.v&&!n.C&&(n.C=At(c(n.Za,n),6e3));if(1>=oe(n.h)&&n.ca){try{n.ca()}catch(t){}n.ca=void 0}}else vn(n,11)}else if((t.K||n.g==t)&&gn(n),!p(e))for(i=n.Da.g.parse(e),e=0;e<i.length;e++){let c=i[e];if(n.T=c[0],c=c[1],2==n.G)if("c"==c[0]){n.K=c[1],n.ia=c[2];const e=c[3];null!=e&&(n.la=e,n.j.info("VER="+n.la));const i=c[4];null!=i&&(n.Aa=i,n.j.info("SVER="+n.Aa));const h=c[5];null!=h&&"number"==typeof h&&0<h&&(r=1.5*h,n.L=r,n.j.info("backChannelRequestTimeoutMs_="+r)),r=n;const u=t.g;if(u){const t=u.g?u.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(t){var s=r.h;s.g||-1==t.indexOf("spdy")&&-1==t.indexOf("quic")&&-1==t.indexOf("h2")||(s.j=s.l,s.g=new Set,s.h&&(le(s,s.h),s.h=null))}if(r.D){const t=u.g?u.g.getResponseHeader("X-HTTP-Session-Id"):null;t&&(r.ya=t,ve(r.I,r.D,t))}}n.G=3,n.l&&n.l.ua(),n.ba&&(n.R=Date.now()-t.F,n.j.info("Handshake RTT: "+n.R+"ms"));var o=t;if((r=n).qa=En(r,r.J?r.ia:null,r.W),o.K){ce(r.h,o);var a=o,l=r.L;l&&(a.I=l),a.B&&(Zt(a),$t(a)),r.g=o}else un(r);0<n.i.length&&an(n)}else"stop"!=c[0]&&"close"!=c[0]||vn(n,7);else 3==n.G&&("stop"==c[0]||"close"==c[0]?"stop"==c[0]?vn(n,7):rn(n):"noop"!=c[0]&&n.l&&n.l.ta(c),n.v=0)}Tt()}catch(t){}}Lt.prototype.ca=function(t){t=t.target;const e=this.M;e&&3==Ze(t)?e.j():this.Y(t)},Lt.prototype.Y=function(t){try{if(t==this.g)t:{const d=Ze(this.g);var e=this.g.Ba();this.g.Z();if(!(3>d)&&(3!=d||this.g&&(this.h.h||this.g.oa()||tn(this.g)))){this.J||4!=d||7==e||Tt(),Zt(this);var n=this.g.Z();this.X=n;e:if(Bt(this)){var r=tn(this.g);t="";var s=r.length,o=4==Ze(this.g);if(!this.h.i){if("undefined"==typeof TextDecoder){ee(this),te(this);var a="";break e}this.h.i=new i.TextDecoder}for(e=0;e<s;e++)this.h.h=!0,t+=this.h.i.decode(r[e],{stream:!(o&&e==s-1)});r.length=0,this.h.g+=t,this.C=0,a=this.h.g}else a=this.g.oa();if(this.o=200==n,function(t,e,n,r,i,s,o){t.info((function(){return"XMLHTTP RESP ("+r+") [ attempt "+i+"]: "+e+"\n"+n+"\n"+s+" "+o}))}(this.i,this.u,this.A,this.l,this.R,d,n),this.o){if(this.T&&!this.K){e:{if(this.g){var l,c=this.g;if((l=c.g?c.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!p(l)){var h=l;break e}}h=null}if(!(n=h)){this.o=!1,this.s=3,It(12),ee(this),te(this);break t}Nt(this.i,this.l,n,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,ne(this,n)}if(this.P){let t;for(n=!0;!this.J&&this.C<a.length;){if(t=jt(this,a),t==Ft){4==d&&(this.s=4,It(14),n=!1),Nt(this.i,this.l,null,"[Incomplete Response]");break}if(t==Pt){this.s=4,It(15),Nt(this.i,this.l,a,"[Invalid Chunk]"),n=!1;break}Nt(this.i,this.l,t,null),ne(this,t)}if(Bt(this)&&0!=this.C&&(this.h.g=this.h.g.slice(this.C),this.C=0),4!=d||0!=a.length||this.h.h||(this.s=1,It(16),n=!1),this.o=this.o&&n,n){if(0<a.length&&!this.W){this.W=!0;var u=this.j;u.g==this&&u.ba&&!u.M&&(u.j.info("Great, no buffering proxy detected. Bytes received: "+a.length),fn(u),u.M=!0,It(11))}}else Nt(this.i,this.l,a,"[Invalid Chunked Response]"),ee(this),te(this)}else Nt(this.i,this.l,a,null),ne(this,a);4==d&&ee(this),this.o&&!this.J&&(4==d?mn(this.j,this):(this.o=!1,$t(this)))}else(function(t){const e={};t=(t.g&&2<=Ze(t)&&t.g.getAllResponseHeaders()||"").split("\r\n");for(let r=0;r<t.length;r++){if(p(t[r]))continue;var n=_(t[r]);const i=n[0];if("string"!=typeof(n=n[1]))continue;n=n.trim();const s=e[i]||[];e[i]=s,s.push(n)}!function(t,e){for(const n in t)e.call(void 0,t[n],n,t)}(e,(function(t){return t.join(", ")}))})(this.g),400==n&&0<a.indexOf("Unknown SID")?(this.s=3,It(12)):(this.s=0,It(13)),ee(this),te(this)}}}catch(t){}},Lt.prototype.cancel=function(){this.J=!0,ee(this)},Lt.prototype.ba=function(){this.B=null;const t=Date.now();0<=t-this.S?(function(t,e){t.info((function(){return"TIMEOUT: "+e}))}(this.i,this.A),2!=this.L&&(Tt(),It(17)),ee(this),this.s=2,te(this)):Yt(this,this.S-t)};var re=class{constructor(t,e){this.g=t,this.map=e}};function ie(t){this.l=t||10,i.PerformanceNavigationTiming?t=0<(t=i.performance.getEntriesByType("navigation")).length&&("hq"==t[0].nextHopProtocol||"h2"==t[0].nextHopProtocol):t=!!(i.chrome&&i.chrome.loadTimes&&i.chrome.loadTimes()&&i.chrome.loadTimes().wasFetchedViaSpdy),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function se(t){return!!t.h||!!t.g&&t.g.size>=t.j}function oe(t){return t.h?1:t.g?t.g.size:0}function ae(t,e){return t.h?t.h==e:!!t.g&&t.g.has(e)}function le(t,e){t.g?t.g.add(e):t.h=e}function ce(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}function he(t){if(null!=t.h)return t.i.concat(t.h.D);if(null!=t.g&&0!==t.g.size){let e=t.i;for(const n of t.g.values())e=e.concat(n.D);return e}return d(t.i)}function ue(t,e){if(t.forEach&&"function"==typeof t.forEach)t.forEach(e,void 0);else if(s(t)||"string"==typeof t)Array.prototype.forEach.call(t,e,void 0);else for(var n=function(t){if(t.na&&"function"==typeof t.na)return t.na();if(!t.V||"function"!=typeof t.V){if("undefined"!=typeof Map&&t instanceof Map)return Array.from(t.keys());if(!("undefined"!=typeof Set&&t instanceof Set)){if(s(t)||"string"==typeof t){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const r in t)e[n++]=r;return e}}}(t),r=function(t){if(t.V&&"function"==typeof t.V)return t.V();if("undefined"!=typeof Map&&t instanceof Map||"undefined"!=typeof Set&&t instanceof Set)return Array.from(t.values());if("string"==typeof t)return t.split("");if(s(t)){for(var e=[],n=t.length,r=0;r<n;r++)e.push(t[r]);return e}for(r in e=[],n=0,t)e[n++]=t[r];return e}(t),i=r.length,o=0;o<i;o++)e.call(void 0,r[o],n&&n[o],t)}ie.prototype.cancel=function(){if(this.i=he(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&0!==this.g.size){for(const t of this.g.values())t.cancel();this.g.clear()}};var de=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function fe(t){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,t instanceof fe){this.h=t.h,ge(this,t.j),this.o=t.o,this.g=t.g,me(this,t.s),this.l=t.l;var e=t.i,n=new Ne;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),ye(this,n),this.m=t.m}else t&&(e=String(t).match(de))?(this.h=!1,ge(this,e[1]||"",!0),this.o=Ee(e[2]||""),this.g=Ee(e[3]||"",!0),me(this,e[4]),this.l=Ee(e[5]||"",!0),ye(this,e[6]||"",!0),this.m=Ee(e[7]||"")):(this.h=!1,this.i=new Ne(null,this.h))}function pe(t){return new fe(t)}function ge(t,e,n){t.j=n?Ee(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function me(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.s=e}else t.s=null}function ye(t,e,n){e instanceof Ne?(t.i=e,function(t,e){e&&!t.j&&(ke(t),t.i=null,t.g.forEach((function(t,e){var n=e.toLowerCase();e!=n&&(Re(this,e),Oe(this,n,t))}),t)),t.j=e}(t.i,t.h)):(n||(e=be(e,Ae)),t.i=new Ne(e,t.h))}function ve(t,e,n){t.i.set(e,n)}function we(t){return ve(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function Ee(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function be(t,e,n){return"string"==typeof t?(t=encodeURI(t).replace(e,_e),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function _e(t){return"%"+((t=t.charCodeAt(0))>>4&15).toString(16)+(15&t).toString(16)}fe.prototype.toString=function(){var t=[],e=this.j;e&&t.push(be(e,Se,!0),":");var n=this.g;return(n||"file"==e)&&(t.push("//"),(e=this.o)&&t.push(be(e,Se,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),null!=(n=this.s)&&t.push(":",String(n))),(n=this.l)&&(this.g&&"/"!=n.charAt(0)&&t.push("/"),t.push(be(n,"/"==n.charAt(0)?Ce:Ie,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.m)&&t.push("#",be(n,De)),t.join("")};var Te,Se=/[#\/\?@]/g,Ie=/[#\?:]/g,Ce=/[#\?]/g,Ae=/[#\?@]/g,De=/#/g;function Ne(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function ke(t){t.g||(t.g=new Map,t.h=0,t.i&&function(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var r=t[n].indexOf("="),i=null;if(0<=r){var s=t[n].substring(0,r);i=t[n].substring(r+1)}else s=t[n];e(s,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}(t.i,(function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)})))}function Re(t,e){ke(t),e=Le(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function xe(t,e){return ke(t),e=Le(t,e),t.g.has(e)}function Oe(t,e,n){Re(t,e),0<n.length&&(t.i=null,t.g.set(Le(t,e),d(n)),t.h+=n.length)}function Le(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function Me(t,e,n,r,i){try{i&&(i.onload=null,i.onerror=null,i.onabort=null,i.ontimeout=null),r(n)}catch(t){}}function Pe(){this.g=new dt}function Fe(t,e,n){const r=n||"";try{ue(t,(function(t,n){let i=t;o(t)&&(i=ht(t)),e.push(r+n+"="+encodeURIComponent(i))}))}catch(t){throw e.push(r+"type="+encodeURIComponent("_badmap")),t}}function Ve(t){this.l=t.Ub||null,this.j=t.eb||!1}function Ue(t,e){et.call(this),this.D=t,this.o=e,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}function Be(t){t.j.read().then(t.Pa.bind(t)).catch(t.ga.bind(t))}function je(t){t.readyState=4,t.l=null,t.j=null,t.v=null,$e(t)}function $e(t){t.onreadystatechange&&t.onreadystatechange.call(t)}function qe(t){let e="";return v(t,(function(t,n){e+=n,e+=":",e+=t,e+="\r\n"})),e}function ze(t,e,n){t:{for(r in n){var r=!1;break t}r=!0}r||(n=qe(n),"string"==typeof t?null!=n&&encodeURIComponent(String(n)):ve(t,e,n))}function Ge(t){et.call(this),this.headers=new Map,this.o=t||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}(t=Ne.prototype).add=function(t,e){ke(this),this.i=null,t=Le(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this},t.forEach=function(t,e){ke(this),this.g.forEach((function(n,r){n.forEach((function(n){t.call(e,n,r,this)}),this)}),this)},t.na=function(){ke(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let r=0;r<e.length;r++){const i=t[r];for(let t=0;t<i.length;t++)n.push(e[r])}return n},t.V=function(t){ke(this);let e=[];if("string"==typeof t)xe(this,t)&&(e=e.concat(this.g.get(Le(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e},t.set=function(t,e){return ke(this),this.i=null,xe(this,t=Le(this,t))&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this},t.get=function(t,e){return t&&0<(t=this.V(t)).length?String(t[0]):e},t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var r=e[n];const s=encodeURIComponent(String(r)),o=this.V(r);for(r=0;r<o.length;r++){var i=s;""!==o[r]&&(i+="="+encodeURIComponent(String(o[r]))),t.push(i)}}return this.i=t.join("&")},u(Ve,ft),Ve.prototype.g=function(){return new Ue(this.l,this.j)},Ve.prototype.i=(Te={},function(){return Te}),u(Ue,et),(t=Ue.prototype).open=function(t,e){if(0!=this.readyState)throw this.abort(),Error("Error reopening a connection");this.B=t,this.A=e,this.readyState=1,$e(this)},t.send=function(t){if(1!=this.readyState)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.u,method:this.B,credentials:this.m,cache:void 0};t&&(e.body=t),(this.D||i).fetch(new Request(this.A,e)).then(this.Sa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch((()=>{})),1<=this.readyState&&this.g&&4!=this.readyState&&(this.g=!1,je(this)),this.readyState=0},t.Sa=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,$e(this)),this.g&&(this.readyState=3,$e(this),this.g)))if("arraybuffer"===this.responseType)t.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(void 0!==i.ReadableStream&&"body"in t){if(this.j=t.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Be(this)}else t.text().then(this.Ra.bind(this),this.ga.bind(this))},t.Pa=function(t){if(this.g){if(this.o&&t.value)this.response.push(t.value);else if(!this.o){var e=t.value?t.value:new Uint8Array(0);(e=this.v.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?je(this):$e(this),3==this.readyState&&Be(this)}},t.Ra=function(t){this.g&&(this.response=this.responseText=t,je(this))},t.Qa=function(t){this.g&&(this.response=t,je(this))},t.ga=function(){this.g&&je(this)},t.setRequestHeader=function(t,e){this.u.append(t,e)},t.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join("\r\n")},Object.defineProperty(Ue.prototype,"withCredentials",{get:function(){return"include"===this.m},set:function(t){this.m=t?"include":"same-origin"}}),u(Ge,et);var He=/^https?$/i,Ke=["POST","PUT"];function Qe(t,e){t.h=!1,t.g&&(t.j=!0,t.g.abort(),t.j=!1),t.l=e,t.m=5,Xe(t),Je(t)}function Xe(t){t.A||(t.A=!0,nt(t,"complete"),nt(t,"error"))}function We(t){if(t.h&&void 0!==r&&(!t.v[1]||4!=Ze(t)||2!=t.Z()))if(t.u&&4==Ze(t))it(t.Ea,0,t);else if(nt(t,"readystatechange"),4==Ze(t)){t.h=!1;try{const r=t.Z();t:switch(r){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break t;default:e=!1}var n;if(!(n=e)){var s;if(s=0===r){var o=String(t.D).match(de)[1]||null;!o&&i.self&&i.self.location&&(o=i.self.location.protocol.slice(0,-1)),s=!He.test(o?o.toLowerCase():"")}n=s}if(n)nt(t,"complete"),nt(t,"success");else{t.m=6;try{var a=2<Ze(t)?t.g.statusText:""}catch(t){a=""}t.l=a+" ["+t.Z()+"]",Xe(t)}}finally{Je(t)}}}function Je(t,e){if(t.g){Ye(t);const n=t.g,r=t.v[0]?()=>{}:null;t.g=null,t.v=null,e||nt(t,"ready");try{n.onreadystatechange=r}catch(t){}}}function Ye(t){t.I&&(i.clearTimeout(t.I),t.I=null)}function Ze(t){return t.g?t.g.readyState:0}function tn(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.H){case"":case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch(t){return null}}function en(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function nn(t){this.Aa=0,this.i=[],this.j=new Dt,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=en("failFast",!1,t),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=en("baseRetryDelayMs",5e3,t),this.cb=en("retryDelaySeedMs",1e4,t),this.Wa=en("forwardChannelMaxRetries",2,t),this.wa=en("forwardChannelRequestTimeoutMs",2e4,t),this.pa=t&&t.xmlHttpFactory||void 0,this.Xa=t&&t.Tb||void 0,this.Ca=t&&t.useFetchStreams||!1,this.L=void 0,this.J=t&&t.supportsCrossDomainXhr||!1,this.K="",this.h=new ie(t&&t.concurrentRequestLimit),this.Da=new Pe,this.P=t&&t.fastHandshake||!1,this.O=t&&t.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=t&&t.Rb||!1,t&&t.xa&&this.j.xa(),t&&t.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&t&&t.detectBufferingProxy||!1,this.ja=void 0,t&&t.longPollingTimeout&&0<t.longPollingTimeout&&(this.ja=t.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}function rn(t){if(on(t),3==t.G){var e=t.U++,n=pe(t.I);if(ve(n,"SID",t.K),ve(n,"RID",e),ve(n,"TYPE","terminate"),cn(t,n),(e=new Lt(t,t.j,e)).L=2,e.v=we(pe(n)),n=!1,i.navigator&&i.navigator.sendBeacon)try{n=i.navigator.sendBeacon(e.v.toString(),"")}catch(t){}!n&&i.Image&&((new Image).src=e.v,n=!0),n||(e.g=bn(e.j,null),e.g.ea(e.v)),e.F=Date.now(),$t(e)}wn(t)}function sn(t){t.g&&(fn(t),t.g.cancel(),t.g=null)}function on(t){sn(t),t.u&&(i.clearTimeout(t.u),t.u=null),gn(t),t.h.cancel(),t.s&&("number"==typeof t.s&&i.clearTimeout(t.s),t.s=null)}function an(t){if(!se(t.h)&&!t.s){t.s=!0;var e=t.Ga;A||k(),D||(A(),D=!0),N.add(e,t),t.B=0}}function ln(t,e){var n;n=e?e.l:t.U++;const r=pe(t.I);ve(r,"SID",t.K),ve(r,"RID",n),ve(r,"AID",t.T),cn(t,r),t.m&&t.o&&ze(r,t.m,t.o),n=new Lt(t,t.j,n,t.B+1),null===t.m&&(n.H=t.o),e&&(t.i=e.D.concat(t.i)),e=hn(t,n,1e3),n.I=Math.round(.5*t.wa)+Math.round(.5*t.wa*Math.random()),le(t.h,n),Vt(n,r,e)}function cn(t,e){t.H&&v(t.H,(function(t,n){ve(e,n,t)})),t.l&&ue({},(function(t,n){ve(e,n,t)}))}function hn(t,e,n){n=Math.min(t.i.length,n);var r=t.l?c(t.l.Na,t.l,t):null;t:{var i=t.i;let e=-1;for(;;){const t=["count="+n];-1==e?0<n?(e=i[0].g,t.push("ofs="+e)):e=0:t.push("ofs="+e);let s=!0;for(let o=0;o<n;o++){let n=i[o].g;const a=i[o].map;if(n-=e,0>n)e=Math.max(0,i[o].g-100),s=!1;else try{Fe(a,t,"req"+n+"_")}catch(t){r&&r(a)}}if(s){r=t.join("&");break t}}}return t=t.i.splice(0,n),e.D=t,r}function un(t){if(!t.g&&!t.u){t.Y=1;var e=t.Fa;A||k(),D||(A(),D=!0),N.add(e,t),t.v=0}}function dn(t){return!(t.g||t.u||3<=t.v)&&(t.Y++,t.u=At(c(t.Fa,t),yn(t,t.v)),t.v++,!0)}function fn(t){null!=t.A&&(i.clearTimeout(t.A),t.A=null)}function pn(t){t.g=new Lt(t,t.j,"rpc",t.Y),null===t.m&&(t.g.H=t.o),t.g.O=0;var e=pe(t.qa);ve(e,"RID","rpc"),ve(e,"SID",t.K),ve(e,"AID",t.T),ve(e,"CI",t.F?"0":"1"),!t.F&&t.ja&&ve(e,"TO",t.ja),ve(e,"TYPE","xmlhttp"),cn(t,e),t.m&&t.o&&ze(e,t.m,t.o),t.L&&(t.g.I=t.L);var n=t.g;t=t.ia,n.L=1,n.v=we(pe(e)),n.m=null,n.P=!0,Ut(n,t)}function gn(t){null!=t.C&&(i.clearTimeout(t.C),t.C=null)}function mn(t,e){var n=null;if(t.g==e){gn(t),fn(t),t.g=null;var r=2}else{if(!ae(t.h,e))return;n=e.D,ce(t.h,e),r=1}if(0!=t.G)if(e.o)if(1==r){n=e.m?e.m.length:0,e=Date.now()-e.F;var i=t.B;nt(r=bt(),new Ct(r,n)),an(t)}else un(t);else if(3==(i=e.s)||0==i&&0<e.X||!(1==r&&function(t,e){return!(oe(t.h)>=t.h.j-(t.s?1:0)||(t.s?(t.i=e.D.concat(t.i),0):1==t.G||2==t.G||t.B>=(t.Va?0:t.Wa)||(t.s=At(c(t.Ga,t,e),yn(t,t.B)),t.B++,0)))}(t,e)||2==r&&dn(t)))switch(n&&0<n.length&&(e=t.h,e.i=e.i.concat(n)),i){case 1:vn(t,5);break;case 4:vn(t,10);break;case 3:vn(t,6);break;default:vn(t,2)}}function yn(t,e){let n=t.Ta+Math.floor(Math.random()*t.cb);return t.isActive()||(n*=2),n*e}function vn(t,e){if(t.j.info("Error code "+e),2==e){var n=c(t.fb,t),r=t.Xa;const e=!r;r=new fe(r||"//www.google.com/images/cleardot.gif"),i.location&&"http"==i.location.protocol||ge(r,"https"),we(r),e?function(t,e){const n=new Dt;if(i.Image){const r=new Image;r.onload=h(Me,n,"TestLoadImage: loaded",!0,e,r),
r.onerror=h(Me,n,"TestLoadImage: error",!1,e,r),r.onabort=h(Me,n,"TestLoadImage: abort",!1,e,r),r.ontimeout=h(Me,n,"TestLoadImage: timeout",!1,e,r),i.setTimeout((function(){r.ontimeout&&r.ontimeout()}),1e4),r.src=t}else e(!1)}(r.toString(),n):function(t,e){new Dt;const n=new AbortController,r=setTimeout((()=>{n.abort(),Me(0,0,!1,e)}),1e4);fetch(t,{signal:n.signal}).then((t=>{clearTimeout(r),t.ok?Me(0,0,!0,e):Me(0,0,!1,e)})).catch((()=>{clearTimeout(r),Me(0,0,!1,e)}))}(r.toString(),n)}else It(2);t.G=0,t.l&&t.l.sa(e),wn(t),on(t)}function wn(t){if(t.G=0,t.ka=[],t.l){const e=he(t.h);0==e.length&&0==t.i.length||(f(t.ka,e),f(t.ka,t.i),t.h.i.length=0,d(t.i),t.i.length=0),t.l.ra()}}function En(t,e,n){var r=n instanceof fe?pe(n):new fe(n);if(""!=r.g)e&&(r.g=e+"."+r.g),me(r,r.s);else{var s=i.location;r=s.protocol,e=e?e+"."+s.hostname:s.hostname,s=+s.port;var o=new fe(null);r&&ge(o,r),e&&(o.g=e),s&&me(o,s),n&&(o.l=n),r=o}return n=t.D,e=t.ya,n&&e&&ve(r,n,e),ve(r,"VER",t.la),cn(t,r),r}function bn(t,e,n){if(e&&!t.J)throw Error("Can't create secondary domain capable XhrIo object.");return(e=t.Ca&&!t.pa?new Ge(new Ve({eb:n})):new Ge(t.pa)).Ha(t.J),e}function _n(){}function Tn(){}function Sn(t,e){et.call(this),this.g=new nn(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.o=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.va&&(t?t["X-WebChannel-Client-Profile"]=e.va:t={"X-WebChannel-Client-Profile":e.va}),this.g.S=t,(t=e&&e.Sb)&&!p(t)&&(this.g.m=t),this.v=e&&e.supportsCrossDomainXhr||!1,this.u=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!p(e)&&(this.g.D=e,null!==(t=this.h)&&e in t&&(e in(t=this.h)&&delete t[e])),this.j=new An(this)}function In(t){yt.call(this),t.__headers__&&(this.headers=t.__headers__,this.statusCode=t.__status__,delete t.__headers__,delete t.__status__);var e=t.__sm__;if(e){t:{for(const n in e){t=n;break t}t=void 0}(this.i=t)&&(t=this.i,e=null!==e&&t in e?e[t]:void 0),this.data=e}else this.data=t}function Cn(){vt.call(this),this.status=1}function An(t){this.g=t}(t=Ge.prototype).Ha=function(t){this.J=t},t.ea=function(t,e,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+t);e=e?e.toUpperCase():"GET",this.D=t,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():kt.g(),this.v=this.o?pt(this.o):pt(kt),this.g.onreadystatechange=c(this.Ea,this);try{this.B=!0,this.g.open(e,String(t),!0),this.B=!1}catch(t){return void Qe(this,t)}if(t=n||"",n=new Map(this.headers),r)if(Object.getPrototypeOf(r)===Object.prototype)for(var s in r)n.set(s,r[s]);else{if("function"!=typeof r.keys||"function"!=typeof r.get)throw Error("Unknown input type for opt_headers: "+String(r));for(const t of r.keys())n.set(t,r.get(t))}r=Array.from(n.keys()).find((t=>"content-type"==t.toLowerCase())),s=i.FormData&&t instanceof i.FormData,!(0<=Array.prototype.indexOf.call(Ke,e,void 0))||r||s||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[t,e]of n)this.g.setRequestHeader(t,e);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Ye(this),this.u=!0,this.g.send(t),this.u=!1}catch(t){Qe(this,t)}},t.abort=function(t){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=t||7,nt(this,"complete"),nt(this,"abort"),Je(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Je(this,!0)),Ge.aa.N.call(this)},t.Ea=function(){this.s||(this.B||this.u||this.j?We(this):this.bb())},t.bb=function(){We(this)},t.isActive=function(){return!!this.g},t.Z=function(){try{return 2<Ze(this)?this.g.status:-1}catch(t){return-1}},t.oa=function(){try{return this.g?this.g.responseText:""}catch(t){return""}},t.Oa=function(t){if(this.g){var e=this.g.responseText;return t&&0==e.indexOf(t)&&(e=e.substring(t.length)),ut(e)}},t.Ba=function(){return this.m},t.Ka=function(){return"string"==typeof this.l?this.l:String(this.l)},(t=nn.prototype).la=8,t.G=1,t.connect=function(t,e,n,r){It(0),this.W=t,this.H=e||{},n&&void 0!==r&&(this.H.OSID=n,this.H.OAID=r),this.F=this.X,this.I=En(this,null,this.W),an(this)},t.Ga=function(t){if(this.s)if(this.s=null,1==this.G){if(!t){this.U=Math.floor(1e5*Math.random()),t=this.U++;const i=new Lt(this,this.j,t);let s=this.o;if(this.S&&(s?(s=w(s),b(s,this.S)):s=this.S),null!==this.m||this.O||(i.H=s,s=null),this.P)t:{for(var e=0,n=0;n<this.i.length;n++){var r=this.i[n];if(void 0===(r="__data__"in r.map&&"string"==typeof(r=r.map.__data__)?r.length:void 0))break;if(4096<(e+=r)){e=n;break t}if(4096===e||n===this.i.length-1){e=n+1;break t}}e=1e3}else e=1e3;e=hn(this,i,e),ve(n=pe(this.I),"RID",t),ve(n,"CVER",22),this.D&&ve(n,"X-HTTP-Session-Id",this.D),cn(this,n),s&&(this.O?e="headers="+encodeURIComponent(String(qe(s)))+"&"+e:this.m&&ze(n,this.m,s)),le(this.h,i),this.Ua&&ve(n,"TYPE","init"),this.P?(ve(n,"$req",e),ve(n,"SID","null"),i.T=!0,Vt(i,n,null)):Vt(i,n,e),this.G=2}}else 3==this.G&&(t?ln(this,t):0==this.i.length||se(this.h)||ln(this))},t.Fa=function(){if(this.u=null,pn(this),this.ba&&!(this.M||null==this.g||0>=this.R)){var t=2*this.R;this.j.info("BP detection timer enabled: "+t),this.A=At(c(this.ab,this),t)}},t.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,It(10),sn(this),pn(this))},t.Za=function(){null!=this.C&&(this.C=null,sn(this),dn(this),It(19))},t.fb=function(t){t?(this.j.info("Successfully pinged google.com"),It(2)):(this.j.info("Failed to ping google.com"),It(1))},t.isActive=function(){return!!this.l&&this.l.isActive(this)},(t=_n.prototype).ua=function(){},t.ta=function(){},t.sa=function(){},t.ra=function(){},t.isActive=function(){return!0},t.Na=function(){},Tn.prototype.g=function(t,e){return new Sn(t,e)},u(Sn,et),Sn.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Sn.prototype.close=function(){rn(this.g)},Sn.prototype.o=function(t){var e=this.g;if("string"==typeof t){var n={};n.__data__=t,t=n}else this.u&&((n={}).__data__=ht(t),t=n);e.i.push(new re(e.Ya++,t)),3==e.G&&an(e)},Sn.prototype.N=function(){this.g.l=null,delete this.j,rn(this.g),delete this.g,Sn.aa.N.call(this)},u(In,yt),u(Cn,vt),u(An,_n),An.prototype.ua=function(){nt(this.g,"a")},An.prototype.ta=function(t){nt(this.g,new In(t))},An.prototype.sa=function(t){nt(this.g,new Cn)},An.prototype.ra=function(){nt(this.g,"b")},Tn.prototype.createWebChannel=Tn.prototype.g,Sn.prototype.send=Sn.prototype.o,Sn.prototype.open=Sn.prototype.m,Sn.prototype.close=Sn.prototype.close,Wt=function(){return new Tn},Xt=function(){return bt()},Qt=wt,Kt={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Rt.NO_ERROR=0,Rt.TIMEOUT=8,Rt.HTTP_ERROR=6,Ht=Rt,xt.COMPLETE="complete",Gt=xt,gt.EventType=mt,mt.OPEN="a",mt.CLOSE="b",mt.ERROR="c",mt.MESSAGE="d",et.prototype.listen=et.prototype.K,zt=gt,Ge.prototype.listenOnce=Ge.prototype.L,Ge.prototype.getLastError=Ge.prototype.Ka,Ge.prototype.getLastErrorCode=Ge.prototype.Ba,Ge.prototype.getStatus=Ge.prototype.Z,Ge.prototype.getResponseJson=Ge.prototype.Oa,Ge.prototype.getResponseText=Ge.prototype.oa,Ge.prototype.send=Ge.prototype.ea,Ge.prototype.setWithCredentials=Ge.prototype.Ha,qt=Ge}).apply(void 0!==Jt?Jt:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{});const Yt="@firebase/firestore";
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class Zt{constructor(t){this.uid=t}isAuthenticated(){return null!=this.uid}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}Zt.UNAUTHENTICATED=new Zt(null),Zt.GOOGLE_CREDENTIALS=new Zt("google-credentials-uid"),Zt.FIRST_PARTY=new Zt("first-party-uid"),Zt.MOCK_USER=new Zt("mock-user");
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
let te="11.2.0";
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */const ee=new C("@firebase/firestore");function ne(){return ee.logLevel}function re(t,...e){if(ee.logLevel<=b.DEBUG){const n=e.map(oe);ee.debug(`Firestore (${te}): ${t}`,...n)}}function ie(t,...e){if(ee.logLevel<=b.ERROR){const n=e.map(oe);ee.error(`Firestore (${te}): ${t}`,...n)}}function se(t,...e){if(ee.logLevel<=b.WARN){const n=e.map(oe);ee.warn(`Firestore (${te}): ${t}`,...n)}}function oe(t){if("string"==typeof t)return t;try{
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
return function(t){return JSON.stringify(t)}(t)}catch(e){return t}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */function ae(t="Unexpected state"){const e=`FIRESTORE (${te}) INTERNAL ASSERTION FAILED: `+t;throw ie(e),new Error(e)}function le(t,e){t||ae()}function ce(t,e){return t}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */const he={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class ue extends u{constructor(t,e){super(t,e),this.code=t,this.message=e,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class de{constructor(){this.promise=new Promise(((t,e)=>{this.resolve=t,this.reject=e}))}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class fe{constructor(t,e){this.user=e,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class pe{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,e){t.enqueueRetryable((()=>e(Zt.UNAUTHENTICATED)))}shutdown(){}}class ge{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,e){this.changeListener=e,t.enqueueRetryable((()=>e(this.token.user)))}shutdown(){this.changeListener=null}}class me{constructor(t){this.t=t,this.currentUser=Zt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,e){le(void 0===this.o);let n=this.i;const r=t=>this.i!==n?(n=this.i,e(t)):Promise.resolve();let i=new de;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new de,t.enqueueRetryable((()=>r(this.currentUser)))};const s=()=>{const e=i;t.enqueueRetryable((async()=>{await e.promise,await r(this.currentUser)}))},o=t=>{re("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=t,this.o&&(this.auth.addAuthTokenListener(this.o),s())};this.t.onInit((t=>o(t))),setTimeout((()=>{if(!this.auth){const t=this.t.getImmediate({optional:!0});t?o(t):(re("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new de)}}),0),s()}getToken(){const t=this.i,e=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(e).then((e=>this.i!==t?(re("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):e?(le("string"==typeof e.accessToken),new fe(e.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const t=this.auth&&this.auth.getUid();return le(null===t||"string"==typeof t),new Zt(t)}}class ye{constructor(t,e,n){this.l=t,this.h=e,this.P=n,this.type="FirstParty",this.user=Zt.FIRST_PARTY,this.T=new Map}I(){return this.P?this.P():null}get headers(){this.T.set("X-Goog-AuthUser",this.l);const t=this.I();return t&&this.T.set("Authorization",t),this.h&&this.T.set("X-Goog-Iam-Authorization-Token",this.h),this.T}}class ve{constructor(t,e,n){this.l=t,this.h=e,this.P=n}getToken(){return Promise.resolve(new ye(this.l,this.h,this.P))}start(t,e){t.enqueueRetryable((()=>e(Zt.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class we{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Ee{constructor(t){this.A=t,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(t,e){le(void 0===this.o);const n=t=>{null!=t.error&&re("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${t.error.message}`);const n=t.token!==this.R;return this.R=t.token,re("FirebaseAppCheckTokenProvider",`Received ${n?"new":"existing"} token.`),n?e(t.token):Promise.resolve()};this.o=e=>{t.enqueueRetryable((()=>n(e)))};const r=t=>{re("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=t,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit((t=>r(t))),setTimeout((()=>{if(!this.appCheck){const t=this.A.getImmediate({optional:!0});t?r(t):re("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then((t=>t?(le("string"==typeof t.token),this.R=t.token,new we(t.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */function be(t){const e="undefined"!=typeof self&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&"function"==typeof e.getRandomValues)e.getRandomValues(n);else for(let e=0;e<t;e++)n[e]=Math.floor(256*Math.random());return n}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class _e{static newId(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",e=62*Math.floor(256/62);let n="";for(;n.length<20;){const r=be(40);for(let i=0;i<r.length;++i)n.length<20&&r[i]<e&&(n+=t.charAt(r[i]%62))}return n}}function Te(t,e){return t<e?-1:t>e?1:0}function Se(t,e,n){return t.length===e.length&&t.every(((t,r)=>n(t,e[r])))}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class Ie{static now(){return Ie.fromMillis(Date.now())}static fromDate(t){return Ie.fromMillis(t.getTime())}static fromMillis(t){const e=Math.floor(t/1e3),n=Math.floor(1e6*(t-1e3*e));return new Ie(e,n)}constructor(t,e){if(this.seconds=t,this.nanoseconds=e,e<0)throw new ue(he.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(e>=1e9)throw new ue(he.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(t<-62135596800)throw new ue(he.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new ue(he.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(t){return this.seconds===t.seconds?Te(this.nanoseconds,t.nanoseconds):Te(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const t=this.seconds- -62135596800;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class Ce{static fromTimestamp(t){return new Ce(t)}static min(){return new Ce(new Ie(0,0))}static max(){return new Ce(new Ie(253402300799,999999999))}constructor(t){this.timestamp=t}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class Ae{constructor(t,e,n){void 0===e?e=0:e>t.length&&ae(),void 0===n?n=t.length-e:n>t.length-e&&ae(),this.segments=t,this.offset=e,this.len=n}get length(){return this.len}isEqual(t){return 0===Ae.comparator(this,t)}child(t){const e=this.segments.slice(this.offset,this.limit());return t instanceof Ae?t.forEach((t=>{e.push(t)})):e.push(t),this.construct(e)}limit(){return this.offset+this.length}popFirst(t){return t=void 0===t?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return 0===this.length}isPrefixOf(t){if(t.length<this.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}forEach(t){for(let e=this.offset,n=this.limit();e<n;e++)t(this.segments[e])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,e){const n=Math.min(t.length,e.length);for(let r=0;r<n;r++){const n=Ae.compareSegments(t.get(r),e.get(r));if(0!==n)return n}return Math.sign(t.length-e.length)}static compareSegments(t,e){const n=Ae.isNumericId(t),r=Ae.isNumericId(e);return n&&!r?-1:!n&&r?1:n&&r?Ae.extractNumericId(t).compare(Ae.extractNumericId(e)):t<e?-1:t>e?1:0}static isNumericId(t){return t.startsWith("__id")&&t.endsWith("__")}static extractNumericId(t){return jt.fromString(t.substring(4,t.length-2))}}class De extends Ae{construct(t,e,n){return new De(t,e,n)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...t){const e=[];for(const n of t){if(n.indexOf("//")>=0)throw new ue(he.INVALID_ARGUMENT,`Invalid segment (${n}). Paths must not contain // in them.`);e.push(...n.split("/").filter((t=>t.length>0)))}return new De(e)}static emptyPath(){return new De([])}}const Ne=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class ke extends Ae{construct(t,e,n){return new ke(t,e,n)}static isValidIdentifier(t){return Ne.test(t)}canonicalString(){return this.toArray().map((t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),ke.isValidIdentifier(t)||(t="`"+t+"`"),t))).join(".")}toString(){return this.canonicalString()}isKeyField(){return 1===this.length&&"__name__"===this.get(0)}static keyField(){return new ke(["__name__"])}static fromServerFormat(t){const e=[];let n="",r=0;const i=()=>{if(0===n.length)throw new ue(he.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);e.push(n),n=""};let s=!1;for(;r<t.length;){const e=t[r];if("\\"===e){if(r+1===t.length)throw new ue(he.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const e=t[r+1];if("\\"!==e&&"."!==e&&"`"!==e)throw new ue(he.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);n+=e,r+=2}else"`"===e?(s=!s,r++):"."!==e||s?(n+=e,r++):(i(),r++)}if(i(),s)throw new ue(he.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new ke(e)}static emptyPath(){return new ke([])}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class Re{constructor(t){this.path=t}static fromPath(t){return new Re(De.fromString(t))}static fromName(t){return new Re(De.fromString(t).popFirst(5))}static empty(){return new Re(De.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return null!==t&&0===De.comparator(this.path,t.path)}toString(){return this.path.toString()}static comparator(t,e){return De.comparator(t.path,e.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new Re(new De(t.slice()))}}function xe(t){return new Oe(t.readTime,t.key,-1)}class Oe{constructor(t,e,n){this.readTime=t,this.documentKey=e,this.largestBatchId=n}static min(){return new Oe(Ce.min(),Re.empty(),-1)}static max(){return new Oe(Ce.max(),Re.empty(),-1)}}function Le(t,e){let n=t.readTime.compareTo(e.readTime);return 0!==n?n:(n=Re.comparator(t.documentKey,e.documentKey),0!==n?n:Te(t.largestBatchId,e.largestBatchId)
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */)}class Me{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((t=>t()))}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */async function Pe(t){if(t.code!==he.FAILED_PRECONDITION||"The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab."!==t.message)throw t;re("LocalStore","Unexpectedly lost primary lease")}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class Fe{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t((t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)}),(t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)}))}catch(t){return this.next(void 0,t)}next(t,e){return this.callbackAttached&&ae(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(e,this.error):this.wrapSuccess(t,this.result):new Fe(((n,r)=>{this.nextCallback=e=>{this.wrapSuccess(t,e).next(n,r)},this.catchCallback=t=>{this.wrapFailure(e,t).next(n,r)}}))}toPromise(){return new Promise(((t,e)=>{this.next(t,e)}))}wrapUserFunction(t){try{const e=t();return e instanceof Fe?e:Fe.resolve(e)}catch(t){return Fe.reject(t)}}wrapSuccess(t,e){return t?this.wrapUserFunction((()=>t(e))):Fe.resolve(e)}wrapFailure(t,e){return t?this.wrapUserFunction((()=>t(e))):Fe.reject(e)}static resolve(t){return new Fe(((e,n)=>{e(t)}))}static reject(t){return new Fe(((e,n)=>{n(t)}))}static waitFor(t){return new Fe(((e,n)=>{let r=0,i=0,s=!1;t.forEach((t=>{++r,t.next((()=>{++i,s&&i===r&&e()}),(t=>n(t)))})),s=!0,i===r&&e()}))}static or(t){let e=Fe.resolve(!1);for(const n of t)e=e.next((t=>t?Fe.resolve(t):n()));return e}static forEach(t,e){const n=[];return t.forEach(((t,r)=>{n.push(e.call(this,t,r))})),this.waitFor(n)}static mapArray(t,e){return new Fe(((n,r)=>{const i=t.length,s=new Array(i);let o=0;for(let a=0;a<i;a++){const l=a;e(t[l]).next((t=>{s[l]=t,++o,o===i&&n(s)}),(t=>r(t)))}}))}static doWhile(t,e){return new Fe(((n,r)=>{const i=()=>{!0===t()?e().next((()=>{i()}),r):n()};i()}))}}function Ve(t){return"IndexedDbTransactionError"===t.name}
/**
     * @license
     * Copyright 2018 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class Ue{constructor(t,e){this.previousValue=t,e&&(e.sequenceNumberHandler=t=>this.ie(t),this.se=t=>e.writeSequenceNumber(t))}ie(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.se&&this.se(t),t}}function Be(t){return null==t}function je(t){return 0===t&&1/t==-1/0}function $e(t,e){let n=e;const r=t.length;for(let e=0;e<r;e++){const r=t.charAt(e);switch(r){case"\0":n+="";break;case"":n+="";break;default:n+=r}}return n}function qe(t){return t+""}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */function ze(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Ge(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function He(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */Ue.oe=-1;class Ke{constructor(t,e){this.comparator=t,this.root=e||Xe.EMPTY}insert(t,e){return new Ke(this.comparator,this.root.insert(t,e,this.comparator).copy(null,null,Xe.BLACK,null,null))}remove(t){return new Ke(this.comparator,this.root.remove(t,this.comparator).copy(null,null,Xe.BLACK,null,null))}get(t){let e=this.root;for(;!e.isEmpty();){const n=this.comparator(t,e.key);if(0===n)return e.value;n<0?e=e.left:n>0&&(e=e.right)}return null}indexOf(t){let e=0,n=this.root;for(;!n.isEmpty();){const r=this.comparator(t,n.key);if(0===r)return e+n.left.size;r<0?n=n.left:(e+=n.left.size+1,n=n.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal(((e,n)=>(t(e,n),!1)))}toString(){const t=[];return this.inorderTraversal(((e,n)=>(t.push(`${e}:${n}`),!1))),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new Qe(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new Qe(this.root,t,this.comparator,!1)}getReverseIterator(){return new Qe(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new Qe(this.root,t,this.comparator,!0)}}class Qe{constructor(t,e,n,r){this.isReverse=r,this.nodeStack=[];let i=1;for(;!t.isEmpty();)if(i=e?n(t.key,e):1,e&&r&&(i*=-1),i<0)t=this.isReverse?t.left:t.right;else{if(0===i){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const e={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return e}hasNext(){return this.nodeStack.length>0}peek(){if(0===this.nodeStack.length)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class Xe{constructor(t,e,n,r,i){this.key=t,this.value=e,this.color=null!=n?n:Xe.RED,this.left=null!=r?r:Xe.EMPTY,this.right=null!=i?i:Xe.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,e,n,r,i){return new Xe(null!=t?t:this.key,null!=e?e:this.value,null!=n?n:this.color,null!=r?r:this.left,null!=i?i:this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,e,n){let r=this;const i=n(t,r.key);return r=i<0?r.copy(null,null,null,r.left.insert(t,e,n),null):0===i?r.copy(null,e,null,null,null):r.copy(null,null,null,null,r.right.insert(t,e,n)),r.fixUp()}removeMin(){if(this.left.isEmpty())return Xe.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,e){let n,r=this;if(e(t,r.key)<0)r.left.isEmpty()||r.left.isRed()||r.left.left.isRed()||(r=r.moveRedLeft()),r=r.copy(null,null,null,r.left.remove(t,e),null);else{if(r.left.isRed()&&(r=r.rotateRight()),r.right.isEmpty()||r.right.isRed()||r.right.left.isRed()||(r=r.moveRedRight()),0===e(t,r.key)){if(r.right.isEmpty())return Xe.EMPTY;n=r.right.min(),r=r.copy(n.key,n.value,null,null,r.right.removeMin())}r=r.copy(null,null,null,null,r.right.remove(t,e))}return r.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,Xe.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,Xe.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),e=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,e)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw ae();if(this.right.isRed())throw ae();const t=this.left.check();if(t!==this.right.check())throw ae();return t+(this.isRed()?0:1)}}Xe.EMPTY=null,Xe.RED=!0,Xe.BLACK=!1,Xe.EMPTY=new class{constructor(){this.size=0}get key(){throw ae()}get value(){throw ae()}get color(){throw ae()}get left(){throw ae()}get right(){throw ae()}copy(t,e,n,r,i){return this}insert(t,e,n){return new Xe(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
class We{constructor(t){this.comparator=t,this.data=new Ke(this.comparator)}has(t){return null!==this.data.get(t)}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal(((e,n)=>(t(e),!1)))}forEachInRange(t,e){const n=this.data.getIteratorFrom(t[0]);for(;n.hasNext();){const r=n.getNext();if(this.comparator(r.key,t[1])>=0)return;e(r.key)}}forEachWhile(t,e){let n;for(n=void 0!==e?this.data.getIteratorFrom(e):this.data.getIterator();n.hasNext();)if(!t(n.getNext().key))return}firstAfterOrEqual(t){const e=this.data.getIteratorFrom(t);return e.hasNext()?e.getNext().key:null}getIterator(){return new Je(this.data.getIterator())}getIteratorFrom(t){return new Je(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let e=this;return e.size<t.size&&(e=t,t=this),t.forEach((t=>{e=e.add(t)})),e}isEqual(t){if(!(t instanceof We))return!1;if(this.size!==t.size)return!1;const e=this.data.getIterator(),n=t.data.getIterator();for(;e.hasNext();){const t=e.getNext().key,r=n.getNext().key;if(0!==this.comparator(t,r))return!1}return!0}toArray(){const t=[];return this.forEach((e=>{t.push(e)})),t}toString(){const t=[];return this.forEach((e=>t.push(e))),"SortedSet("+t.toString()+")"}copy(t){const e=new We(this.comparator);return e.data=t,e}}class Je{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class Ye{constructor(t){this.fields=t,t.sort(ke.comparator)}static empty(){return new Ye([])}unionWith(t){let e=new We(ke.comparator);for(const t of this.fields)e=e.add(t);for(const n of t)e=e.add(n);return new Ye(e.toArray())}covers(t){for(const e of this.fields)if(e.isPrefixOf(t))return!0;return!1}isEqual(t){return Se(this.fields,t.fields,((t,e)=>t.isEqual(e)))}}
/**
     * @license
     * Copyright 2023 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class Ze extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class tn{constructor(t){this.binaryString=t}static fromBase64String(t){const e=function(t){try{return atob(t)}catch(t){throw"undefined"!=typeof DOMException&&t instanceof DOMException?new Ze("Invalid base64 string: "+t):t}}(t);return new tn(e)}static fromUint8Array(t){const e=function(t){let e="";for(let n=0;n<t.length;++n)e+=String.fromCharCode(t[n]);return e}(t);return new tn(e)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return t=this.binaryString,btoa(t);var t}toUint8Array(){return function(t){const e=new Uint8Array(t.length);for(let n=0;n<t.length;n++)e[n]=t.charCodeAt(n);return e}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return Te(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}tn.EMPTY_BYTE_STRING=new tn("");const en=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function nn(t){if(le(!!t),"string"==typeof t){let e=0;const n=en.exec(t);if(le(!!n),n[1]){let t=n[1];t=(t+"000000000").substr(0,9),e=Number(t)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:rn(t.seconds),nanos:rn(t.nanos)}}function rn(t){return"number"==typeof t?t:"string"==typeof t?Number(t):0}function sn(t){return"string"==typeof t?tn.fromBase64String(t):tn.fromUint8Array(t)}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */function on(t){var e,n;return"server_timestamp"===(null===(n=((null===(e=null==t?void 0:t.mapValue)||void 0===e?void 0:e.fields)||{}).__type__)||void 0===n?void 0:n.stringValue)}function an(t){const e=t.mapValue.fields.__previous_value__;return on(e)?an(e):e}function ln(t){const e=nn(t.mapValue.fields.__local_write_time__.timestampValue);return new Ie(e.seconds,e.nanos)}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class cn{constructor(t,e,n,r,i,s,o,a,l){this.databaseId=t,this.appId=e,this.persistenceKey=n,this.host=r,this.ssl=i,this.forceLongPolling=s,this.autoDetectLongPolling=o,this.longPollingOptions=a,this.useFetchStreams=l}}class hn{constructor(t,e){this.projectId=t,this.database=e||"(default)"}static empty(){return new hn("","")}get isDefaultDatabase(){return"(default)"===this.database}isEqual(t){return t instanceof hn&&t.projectId===this.projectId&&t.database===this.database}}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */const un={fields:{__type__:{stringValue:"__max__"}}};function dn(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?on(t)?4:function(t){return"__max__"===(((t.mapValue||{}).fields||{}).__type__||{}).stringValue}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */(t)?9007199254740991:function(t){var e,n;return"__vector__"===(null===(n=((null===(e=null==t?void 0:t.mapValue)||void 0===e?void 0:e.fields)||{}).__type__)||void 0===n?void 0:n.stringValue)}(t)?10:11:ae()}function fn(t,e){if(t===e)return!0;const n=dn(t);if(n!==dn(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return ln(t).isEqual(ln(e));case 3:return function(t,e){if("string"==typeof t.timestampValue&&"string"==typeof e.timestampValue&&t.timestampValue.length===e.timestampValue.length)return t.timestampValue===e.timestampValue;const n=nn(t.timestampValue),r=nn(e.timestampValue);return n.seconds===r.seconds&&n.nanos===r.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(t,e){return sn(t.bytesValue).isEqual(sn(e.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(t,e){return rn(t.geoPointValue.latitude)===rn(e.geoPointValue.latitude)&&rn(t.geoPointValue.longitude)===rn(e.geoPointValue.longitude)}(t,e);case 2:return function(t,e){if("integerValue"in t&&"integerValue"in e)return rn(t.integerValue)===rn(e.integerValue);if("doubleValue"in t&&"doubleValue"in e){const n=rn(t.doubleValue),r=rn(e.doubleValue);return n===r?je(n)===je(r):isNaN(n)&&isNaN(r)}return!1}(t,e);case 9:return Se(t.arrayValue.values||[],e.arrayValue.values||[],fn);case 10:case 11:return function(t,e){const n=t.mapValue.fields||{},r=e.mapValue.fields||{};if(ze(n)!==ze(r))return!1;for(const t in n)if(n.hasOwnProperty(t)&&(void 0===r[t]||!fn(n[t],r[t])))return!1;return!0}(t,e);default:return ae()}}function pn(t,e){return void 0!==(t.values||[]).find((t=>fn(t,e)))}function gn(t,e){if(t===e)return 0;const n=dn(t),r=dn(e);if(n!==r)return Te(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return Te(t.booleanValue,e.booleanValue);case 2:return function(t,e){const n=rn(t.integerValue||t.doubleValue),r=rn(e.integerValue||e.doubleValue);return n<r?-1:n>r?1:n===r?0:isNaN(n)?isNaN(r)?0:-1:1}(t,e);case 3:return mn(t.timestampValue,e.timestampValue);case 4:return mn(ln(t),ln(e));case 5:return Te(t.stringValue,e.stringValue);case 6:return function(t,e){const n=sn(t),r=sn(e);return n.compareTo(r)}(t.bytesValue,e.bytesValue);case 7:return function(t,e){const n=t.split("/"),r=e.split("/");for(let t=0;t<n.length&&t<r.length;t++){const e=Te(n[t],r[t]);if(0!==e)return e}return Te(n.length,r.length)}(t.referenceValue,e.referenceValue);case 8:return function(t,e){const n=Te(rn(t.latitude),rn(e.latitude));return 0!==n?n:Te(rn(t.longitude),rn(e.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return yn(t.arrayValue,e.arrayValue);case 10:return function(t,e){var n,r,i,s;const o=t.fields||{},a=e.fields||{},l=null===(n=o.value)||void 0===n?void 0:n.arrayValue,c=null===(r=a.value)||void 0===r?void 0:r.arrayValue,h=Te((null===(i=null==l?void 0:l.values)||void 0===i?void 0:i.length)||0,(null===(s=null==c?void 0:c.values)||void 0===s?void 0:s.length)||0);return 0!==h?h:yn(l,c)}(t.mapValue,e.mapValue);case 11:return function(t,e){if(t===un&&e===un)return 0;if(t===un)return 1;if(e===un)return-1;const n=t.fields||{},r=Object.keys(n),i=e.fields||{},s=Object.keys(i);r.sort(),s.sort();for(let t=0;t<r.length&&t<s.length;++t){const e=Te(r[t],s[t]);if(0!==e)return e;const o=gn(n[r[t]],i[s[t]]);if(0!==o)return o}return Te(r.length,s.length)}(t.mapValue,e.mapValue);default:throw ae()}}function mn(t,e){if("string"==typeof t&&"string"==typeof e&&t.length===e.length)return Te(t,e);const n=nn(t),r=nn(e),i=Te(n.seconds,r.seconds);return 0!==i?i:Te(n.nanos,r.nanos)}function yn(t,e){const n=t.values||[],r=e.values||[];for(let t=0;t<n.length&&t<r.length;++t){const e=gn(n[t],r[t]);if(e)return e}return Te(n.length,r.length)}function vn(t){return wn(t)}function wn(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(t){const e=nn(t);return`time(${e.seconds},${e.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(t){return sn(t).toBase64()}(t.bytesValue):"referenceValue"in t?function(t){return Re.fromName(t).toString()}(t.referenceValue):"geoPointValue"in t?function(t){return`geo(${t.latitude},${t.longitude})`}(t.geoPointValue):"arrayValue"in t?function(t){let e="[",n=!0;for(const r of t.values||[])n?n=!1:e+=",",e+=wn(r);return e+"]"}(t.arrayValue):"mapValue"in t?function(t){const e=Object.keys(t.fields||{}).sort();let n="{",r=!0;for(const i of e)r?r=!1:n+=",",n+=`${i}:${wn(t.fields[i])}`;return n+"}"}(t.mapValue):ae()}function En(t){switch(dn(t)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=an(t);return e?16+En(e):16;case 5:return 2*t.stringValue.length;case 6:return sn(t.bytesValue).approximateByteSize();case 7:return t.referenceValue.length;case 9:return function(t){return(t.values||[]).reduce(((t,e)=>t+En(e)),0)}(t.arrayValue);case 10:case 11:return function(t){let e=0;return Ge(t.fields,((t,n)=>{e+=t.length+En(n)})),e}(t.mapValue);default:throw ae()}}function bn(t){return!!t&&"integerValue"in t}function _n(t){return!!t&&"arrayValue"in t}function Tn(t){return!!t&&"mapValue"in t}function Sn(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&"object"==typeof t.timestampValue)return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return Ge(t.mapValue.fields,((t,n)=>e.mapValue.fields[t]=Sn(n))),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Sn(t.arrayValue.values[n]);return e}return Object.assign({},t)}class In{constructor(t){this.value=t}static empty(){return new In({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let e=this.value;for(let n=0;n<t.length-1;++n)if(e=(e.mapValue.fields||{})[t.get(n)],!Tn(e))return null;return e=(e.mapValue.fields||{})[t.lastSegment()],e||null}}set(t,e){this.getFieldsMap(t.popLast())[t.lastSegment()]=Sn(e)}setAll(t){let e=ke.emptyPath(),n={},r=[];t.forEach(((t,i)=>{if(!e.isImmediateParentOf(i)){const t=this.getFieldsMap(e);this.applyChanges(t,n,r),n={},r=[],e=i.popLast()}t?n[i.lastSegment()]=Sn(t):r.push(i.lastSegment())}));const i=this.getFieldsMap(e);this.applyChanges(i,n,r)}delete(t){const e=this.field(t.popLast());Tn(e)&&e.mapValue.fields&&delete e.mapValue.fields[t.lastSegment()]}isEqual(t){return fn(this.value,t.value)}getFieldsMap(t){let e=this.value;e.mapValue.fields||(e.mapValue={fields:{}});for(let n=0;n<t.length;++n){let r=e.mapValue.fields[t.get(n)];Tn(r)&&r.mapValue.fields||(r={mapValue:{fields:{}}},e.mapValue.fields[t.get(n)]=r),e=r}return e.mapValue.fields}applyChanges(t,e,n){Ge(e,((e,n)=>t[e]=n));for(const e of n)delete t[e]}clone(){return new In(Sn(this.value))}}function Cn(t){const e=[];return Ge(t.fields,((t,n)=>{const r=new ke([t]);if(Tn(n)){const t=Cn(n.mapValue).fields;if(0===t.length)e.push(r);else for(const n of t)e.push(r.child(n))}else e.push(r)})),new Ye(e)
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */}class An{constructor(t,e,n,r,i,s,o){this.key=t,this.documentType=e,this.version=n,this.readTime=r,this.createTime=i,this.data=s,this.documentState=o}static newInvalidDocument(t){return new An(t,0,Ce.min(),Ce.min(),Ce.min(),In.empty(),0)}static newFoundDocument(t,e,n,r){return new An(t,1,e,Ce.min(),n,r,0)}static newNoDocument(t,e){return new An(t,2,e,Ce.min(),Ce.min(),In.empty(),0)}static newUnknownDocument(t,e){return new An(t,3,e,Ce.min(),Ce.min(),In.empty(),2)}convertToFoundDocument(t,e){return!this.createTime.isEqual(Ce.min())||2!==this.documentType&&0!==this.documentType||(this.createTime=t),this.version=t,this.documentType=1,this.data=e,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=In.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=In.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Ce.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return 1===this.documentState}get hasCommittedMutations(){return 2===this.documentState}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return 0!==this.documentType}isFoundDocument(){return 1===this.documentType}isNoDocument(){return 2===this.documentType}isUnknownDocument(){return 3===this.documentType}isEqual(t){return t instanceof An&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new An(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}
/**
     * @license
     * Copyright 2022 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class Dn{constructor(t,e){this.position=t,this.inclusive=e}}function Nn(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const s=e[i],o=t.position[i];if(r=s.field.isKeyField()?Re.comparator(Re.fromName(o.referenceValue),n.key):gn(o,n.data.field(s.field)),"desc"===s.dir&&(r*=-1),0!==r)break}return r}function kn(t,e){if(null===t)return null===e;if(null===e)return!1;if(t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!fn(t.position[n],e.position[n]))return!1;return!0}
/**
     * @license
     * Copyright 2022 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class Rn{constructor(t,e="asc"){this.field=t,this.dir=e}}function xn(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}
/**
     * @license
     * Copyright 2022 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class On{}class Ln extends On{constructor(t,e,n){super(),this.field=t,this.op=e,this.value=n}static create(t,e,n){return t.isKeyField()?"in"===e||"not-in"===e?this.createKeyFieldInFilter(t,e,n):new jn(t,e,n):"array-contains"===e?new Gn(t,n):"in"===e?new Hn(t,n):"not-in"===e?new Kn(t,n):"array-contains-any"===e?new Qn(t,n):new Ln(t,e,n)}static createKeyFieldInFilter(t,e,n){return"in"===e?new $n(t,n):new qn(t,n)}matches(t){const e=t.data.field(this.field);return"!="===this.op?null!==e&&this.matchesComparison(gn(e,this.value)):null!==e&&dn(this.value)===dn(e)&&this.matchesComparison(gn(e,this.value))}matchesComparison(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return 0===t;case"!=":return 0!==t;case">":return t>0;case">=":return t>=0;default:return ae()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Mn extends On{constructor(t,e){super(),this.filters=t,this.op=e,this.ae=null}static create(t,e){return new Mn(t,e)}matches(t){return Pn(this)?void 0===this.filters.find((e=>!e.matches(t))):void 0!==this.filters.find((e=>e.matches(t)))}getFlattenedFilters(){return null!==this.ae||(this.ae=this.filters.reduce(((t,e)=>t.concat(e.getFlattenedFilters())),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function Pn(t){return"and"===t.op}function Fn(t){return function(t){for(const e of t.filters)if(e instanceof Mn)return!1;return!0}(t)&&Pn(t)}function Vn(t){if(t instanceof Ln)return t.field.canonicalString()+t.op.toString()+vn(t.value);if(Fn(t))return t.filters.map((t=>Vn(t))).join(",");{const e=t.filters.map((t=>Vn(t))).join(",");return`${t.op}(${e})`}}function Un(t,e){return t instanceof Ln?function(t,e){return e instanceof Ln&&t.op===e.op&&t.field.isEqual(e.field)&&fn(t.value,e.value)}(t,e):t instanceof Mn?function(t,e){return e instanceof Mn&&t.op===e.op&&t.filters.length===e.filters.length&&t.filters.reduce(((t,n,r)=>t&&Un(n,e.filters[r])),!0)}(t,e):void ae()}function Bn(t){return t instanceof Ln?function(t){return`${t.field.canonicalString()} ${t.op} ${vn(t.value)}`}(t):t instanceof Mn?function(t){return t.op.toString()+" {"+t.getFilters().map(Bn).join(" ,")+"}"}(t):"Filter"}class jn extends Ln{constructor(t,e,n){super(t,e,n),this.key=Re.fromName(n.referenceValue)}matches(t){const e=Re.comparator(t.key,this.key);return this.matchesComparison(e)}}class $n extends Ln{constructor(t,e){super(t,"in",e),this.keys=zn("in",e)}matches(t){return this.keys.some((e=>e.isEqual(t.key)))}}class qn extends Ln{constructor(t,e){super(t,"not-in",e),this.keys=zn("not-in",e)}matches(t){return!this.keys.some((e=>e.isEqual(t.key)))}}function zn(t,e){var n;return((null===(n=e.arrayValue)||void 0===n?void 0:n.values)||[]).map((t=>Re.fromName(t.referenceValue)))}class Gn extends Ln{constructor(t,e){super(t,"array-contains",e)}matches(t){const e=t.data.field(this.field);return _n(e)&&pn(e.arrayValue,this.value)}}class Hn extends Ln{constructor(t,e){super(t,"in",e)}matches(t){const e=t.data.field(this.field);return null!==e&&pn(this.value.arrayValue,e)}}class Kn extends Ln{constructor(t,e){super(t,"not-in",e)}matches(t){if(pn(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const e=t.data.field(this.field);return null!==e&&!pn(this.value.arrayValue,e)}}class Qn extends Ln{constructor(t,e){super(t,"array-contains-any",e)}matches(t){const e=t.data.field(this.field);return!(!_n(e)||!e.arrayValue.values)&&e.arrayValue.values.some((t=>pn(this.value.arrayValue,t)))}}
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class Xn{constructor(t,e=null,n=[],r=[],i=null,s=null,o=null){this.path=t,this.collectionGroup=e,this.orderBy=n,this.filters=r,this.limit=i,this.startAt=s,this.endAt=o,this.ue=null}}function Wn(t,e=null,n=[],r=[],i=null,s=null,o=null){return new Xn(t,e,n,r,i,s,o)}function Jn(t){const e=ce(t);if(null===e.ue){let t=e.path.canonicalString();null!==e.collectionGroup&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map((t=>Vn(t))).join(","),t+="|ob:",t+=e.orderBy.map((t=>function(t){return t.field.canonicalString()+t.dir}(t))).join(","),Be(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map((t=>vn(t))).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map((t=>vn(t))).join(",")),e.ue=t}return e.ue}function Yn(t,e){if(t.limit!==e.limit)return!1;if(t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!xn(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!Un(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!kn(t.startAt,e.startAt)&&kn(t.endAt,e.endAt)}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class Zn{constructor(t,e=null,n=[],r=[],i=null,s="F",o=null,a=null){this.path=t,this.collectionGroup=e,this.explicitOrderBy=n,this.filters=r,this.limit=i,this.limitType=s,this.startAt=o,this.endAt=a,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function tr(t){return 0===t.filters.length&&null===t.limit&&null==t.startAt&&null==t.endAt&&(0===t.explicitOrderBy.length||1===t.explicitOrderBy.length&&t.explicitOrderBy[0].field.isKeyField())}function er(t){const e=ce(t);if(null===e.ce){e.ce=[];const t=new Set;for(const n of e.explicitOrderBy)e.ce.push(n),t.add(n.field.canonicalString());const n=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc",r=function(t){let e=new We(ke.comparator);return t.filters.forEach((t=>{t.getFlattenedFilters().forEach((t=>{t.isInequality()&&(e=e.add(t.field))}))})),e}(e);r.forEach((r=>{t.has(r.canonicalString())||r.isKeyField()||e.ce.push(new Rn(r,n))})),t.has(ke.keyField().canonicalString())||e.ce.push(new Rn(ke.keyField(),n))}return e.ce}function nr(t){const e=ce(t);return e.le||(e.le=function(t,e){if("F"===t.limitType)return Wn(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map((t=>{const e="desc"===t.dir?"asc":"desc";return new Rn(t.field,e)}));const n=t.endAt?new Dn(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new Dn(t.startAt.position,t.startAt.inclusive):null;return Wn(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}(e,er(t))),e.le}function rr(t,e,n){return new Zn(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function ir(t,e){return Yn(nr(t),nr(e))&&t.limitType===e.limitType}function sr(t){return`${Jn(nr(t))}|lt:${t.limitType}`}function or(t){return`Query(target=${function(t){let e=t.path.canonicalString();return null!==t.collectionGroup&&(e+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(e+=`, filters: [${t.filters.map((t=>Bn(t))).join(", ")}]`),Be(t.limit)||(e+=", limit: "+t.limit),t.orderBy.length>0&&(e+=`, orderBy: [${t.orderBy.map((t=>function(t){return`${t.field.canonicalString()} (${t.dir})`}(t))).join(", ")}]`),t.startAt&&(e+=", startAt: ",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map((t=>vn(t))).join(",")),t.endAt&&(e+=", endAt: ",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map((t=>vn(t))).join(",")),`Target(${e})`}(nr(t))}; limitType=${t.limitType})`}function ar(t,e){return e.isFoundDocument()&&function(t,e){const n=e.key.path;return null!==t.collectionGroup?e.key.hasCollectionId(t.collectionGroup)&&t.path.isPrefixOf(n):Re.isDocumentKey(t.path)?t.path.isEqual(n):t.path.isImmediateParentOf(n)}(t,e)&&function(t,e){for(const n of er(t))if(!n.field.isKeyField()&&null===e.data.field(n.field))return!1;return!0}(t,e)&&function(t,e){for(const n of t.filters)if(!n.matches(e))return!1;return!0}(t,e)&&function(t,e){return!(t.startAt&&!function(t,e,n){const r=Nn(t,e,n);return t.inclusive?r<=0:r<0}(t.startAt,er(t),e))&&!(t.endAt&&!function(t,e,n){const r=Nn(t,e,n);return t.inclusive?r>=0:r>0}(t.endAt,er(t),e))}(t,e)}function lr(t,e,n){const r=t.field.isKeyField()?Re.comparator(e.key,n.key):function(t,e,n){const r=e.data.field(t),i=n.data.field(t);return null!==r&&null!==i?gn(r,i):ae()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return ae()}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class cr{constructor(t,e){this.mapKeyFn=t,this.equalsFn=e,this.inner={},this.innerSize=0}get(t){const e=this.mapKeyFn(t),n=this.inner[e];if(void 0!==n)for(const[e,r]of n)if(this.equalsFn(e,t))return r}has(t){return void 0!==this.get(t)}set(t,e){const n=this.mapKeyFn(t),r=this.inner[n];if(void 0===r)return this.inner[n]=[[t,e]],void this.innerSize++;for(let n=0;n<r.length;n++)if(this.equalsFn(r[n][0],t))return void(r[n]=[t,e]);r.push([t,e]),this.innerSize++}delete(t){const e=this.mapKeyFn(t),n=this.inner[e];if(void 0===n)return!1;for(let r=0;r<n.length;r++)if(this.equalsFn(n[r][0],t))return 1===n.length?delete this.inner[e]:n.splice(r,1),this.innerSize--,!0;return!1}forEach(t){Ge(this.inner,((e,n)=>{for(const[e,r]of n)t(e,r)}))}isEmpty(){return He(this.inner)}size(){return this.innerSize}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */const hr=new Ke(Re.comparator);function ur(){return hr}const dr=new Ke(Re.comparator);function fr(...t){let e=dr;for(const n of t)e=e.insert(n.key,n);return e}function pr(t){let e=dr;return t.forEach(((t,n)=>e=e.insert(t,n.overlayedDocument))),e}function gr(){return yr()}function mr(){return yr()}function yr(){return new cr((t=>t.toString()),((t,e)=>t.isEqual(e)))}const vr=new Ke(Re.comparator),wr=new We(Re.comparator);function Er(...t){let e=wr;for(const n of t)e=e.add(n);return e}const br=new We(Te);
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
function _r(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:je(e)?"-0":e}}function Tr(t){return{integerValue:""+t}}function Sr(t,e){return function(t){return"number"==typeof t&&Number.isInteger(t)&&!je(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */(e)?Tr(e):_r(t,e)}
/**
     * @license
     * Copyright 2018 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class Ir{constructor(){this._=void 0}}function Cr(t,e,n){return t instanceof Nr?function(t,e){const n={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:t.seconds,nanos:t.nanoseconds}}}};return e&&on(e)&&(e=an(e)),e&&(n.fields.__previous_value__=e),{mapValue:n}}(n,e):t instanceof kr?Rr(t,e):t instanceof xr?Or(t,e):function(t,e){const n=Dr(t,e),r=Mr(n)+Mr(t.Pe);return bn(n)&&bn(t.Pe)?Tr(r):_r(t.serializer,r)}(t,e)}function Ar(t,e,n){return t instanceof kr?Rr(t,e):t instanceof xr?Or(t,e):n}function Dr(t,e){return t instanceof Lr?function(t){return bn(t)||function(t){return!!t&&"doubleValue"in t}(t)}(e)?e:{integerValue:0}:null}class Nr extends Ir{}class kr extends Ir{constructor(t){super(),this.elements=t}}function Rr(t,e){const n=Pr(e);for(const e of t.elements)n.some((t=>fn(t,e)))||n.push(e);return{arrayValue:{values:n}}}class xr extends Ir{constructor(t){super(),this.elements=t}}function Or(t,e){let n=Pr(e);for(const e of t.elements)n=n.filter((t=>!fn(t,e)));return{arrayValue:{values:n}}}class Lr extends Ir{constructor(t,e){super(),this.serializer=t,this.Pe=e}}function Mr(t){return rn(t.integerValue||t.doubleValue)}function Pr(t){return _n(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class Fr{constructor(t,e){this.field=t,this.transform=e}}class Vr{constructor(t,e){this.version=t,this.transformResults=e}}class Ur{constructor(t,e){this.updateTime=t,this.exists=e}static none(){return new Ur}static exists(t){return new Ur(void 0,t)}static updateTime(t){return new Ur(t)}get isNone(){return void 0===this.updateTime&&void 0===this.exists}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function Br(t,e){return void 0!==t.updateTime?e.isFoundDocument()&&e.version.isEqual(t.updateTime):void 0===t.exists||t.exists===e.isFoundDocument()}class jr{}function $r(t,e){if(!t.hasLocalMutations||e&&0===e.fields.length)return null;if(null===e)return t.isNoDocument()?new Yr(t.key,Ur.none()):new Kr(t.key,t.data,Ur.none());{const n=t.data,r=In.empty();let i=new We(ke.comparator);for(let t of e.fields)if(!i.has(t)){let e=n.field(t);null===e&&t.length>1&&(t=t.popLast(),e=n.field(t)),null===e?r.delete(t):r.set(t,e),i=i.add(t)}return new Qr(t.key,r,new Ye(i.toArray()),Ur.none())}}function qr(t,e,n){t instanceof Kr?function(t,e,n){const r=t.value.clone(),i=Wr(t.fieldTransforms,e,n.transformResults);r.setAll(i),e.convertToFoundDocument(n.version,r).setHasCommittedMutations()}(t,e,n):t instanceof Qr?function(t,e,n){if(!Br(t.precondition,e))return void e.convertToUnknownDocument(n.version);const r=Wr(t.fieldTransforms,e,n.transformResults),i=e.data;i.setAll(Xr(t)),i.setAll(r),e.convertToFoundDocument(n.version,i).setHasCommittedMutations()}(t,e,n):function(t,e,n){e.convertToNoDocument(n.version).setHasCommittedMutations()}(0,e,n)}function zr(t,e,n,r){return t instanceof Kr?function(t,e,n,r){if(!Br(t.precondition,e))return n;const i=t.value.clone(),s=Jr(t.fieldTransforms,r,e);return i.setAll(s),e.convertToFoundDocument(e.version,i).setHasLocalMutations(),null}(t,e,n,r):t instanceof Qr?function(t,e,n,r){if(!Br(t.precondition,e))return n;const i=Jr(t.fieldTransforms,r,e),s=e.data;return s.setAll(Xr(t)),s.setAll(i),e.convertToFoundDocument(e.version,s).setHasLocalMutations(),null===n?null:n.unionWith(t.fieldMask.fields).unionWith(t.fieldTransforms.map((t=>t.field)))}(t,e,n,r):function(t,e,n){return Br(t.precondition,e)?(e.convertToNoDocument(e.version).setHasLocalMutations(),null):n}(t,e,n)}function Gr(t,e){let n=null;for(const r of t.fieldTransforms){const t=e.data.field(r.field),i=Dr(r.transform,t||null);null!=i&&(null===n&&(n=In.empty()),n.set(r.field,i))}return n||null}function Hr(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(t,e){return void 0===t&&void 0===e||!(!t||!e)&&Se(t,e,((t,e)=>function(t,e){return t.field.isEqual(e.field)&&function(t,e){return t instanceof kr&&e instanceof kr||t instanceof xr&&e instanceof xr?Se(t.elements,e.elements,fn):t instanceof Lr&&e instanceof Lr?fn(t.Pe,e.Pe):t instanceof Nr&&e instanceof Nr}(t.transform,e.transform)}(t,e)))}(t.fieldTransforms,e.fieldTransforms)&&(0===t.type?t.value.isEqual(e.value):1!==t.type||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Kr extends jr{constructor(t,e,n,r=[]){super(),this.key=t,this.value=e,this.precondition=n,this.fieldTransforms=r,this.type=0}getFieldMask(){return null}}class Qr extends jr{constructor(t,e,n,r,i=[]){super(),this.key=t,this.data=e,this.fieldMask=n,this.precondition=r,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function Xr(t){const e=new Map;return t.fieldMask.fields.forEach((n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}})),e}function Wr(t,e,n){const r=new Map;le(t.length===n.length);for(let i=0;i<n.length;i++){const s=t[i],o=s.transform,a=e.data.field(s.field);r.set(s.field,Ar(o,a,n[i]))}return r}function Jr(t,e,n){const r=new Map;for(const i of t){const t=i.transform,s=n.data.field(i.field);r.set(i.field,Cr(t,s,e))}return r}class Yr extends jr{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class Zr extends jr{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class ti{constructor(t,e,n,r){this.batchId=t,this.localWriteTime=e,this.baseMutations=n,this.mutations=r}applyToRemoteDocument(t,e){const n=e.mutationResults;for(let e=0;e<this.mutations.length;e++){const r=this.mutations[e];r.key.isEqual(t.key)&&qr(r,t,n[e])}}applyToLocalView(t,e){for(const n of this.baseMutations)n.key.isEqual(t.key)&&(e=zr(n,t,e,this.localWriteTime));for(const n of this.mutations)n.key.isEqual(t.key)&&(e=zr(n,t,e,this.localWriteTime));return e}applyToLocalDocumentSet(t,e){const n=mr();return this.mutations.forEach((r=>{const i=t.get(r.key),s=i.overlayedDocument;let o=this.applyToLocalView(s,i.mutatedFields);o=e.has(r.key)?null:o;const a=$r(s,o);null!==a&&n.set(r.key,a),s.isValidDocument()||s.convertToNoDocument(Ce.min())})),n}keys(){return this.mutations.reduce(((t,e)=>t.add(e.key)),Er())}isEqual(t){return this.batchId===t.batchId&&Se(this.mutations,t.mutations,((t,e)=>Hr(t,e)))&&Se(this.baseMutations,t.baseMutations,((t,e)=>Hr(t,e)))}}class ei{constructor(t,e,n,r){this.batch=t,this.commitVersion=e,this.mutationResults=n,this.docVersions=r}static from(t,e,n){le(t.mutations.length===n.length);let r=vr;const i=t.mutations;for(let t=0;t<i.length;t++)r=r.insert(i[t].key,n[t].version);return new ei(t,e,n,r)}}
/**
     * @license
     * Copyright 2022 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class ni{constructor(t,e){this.largestBatchId=t,this.mutation=e}getKey(){return this.mutation.key}isEqual(t){return null!==t&&this.mutation===t.mutation}toString(){return`Overlay{\n      largestBatchId: ${this.largestBatchId},\n      mutation: ${this.mutation.toString()}\n    }`}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */var ri,ii;(ii=ri||(ri={}))[ii.OK=0]="OK",ii[ii.CANCELLED=1]="CANCELLED",ii[ii.UNKNOWN=2]="UNKNOWN",ii[ii.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",ii[ii.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",ii[ii.NOT_FOUND=5]="NOT_FOUND",ii[ii.ALREADY_EXISTS=6]="ALREADY_EXISTS",ii[ii.PERMISSION_DENIED=7]="PERMISSION_DENIED",ii[ii.UNAUTHENTICATED=16]="UNAUTHENTICATED",ii[ii.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",ii[ii.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",ii[ii.ABORTED=10]="ABORTED",ii[ii.OUT_OF_RANGE=11]="OUT_OF_RANGE",ii[ii.UNIMPLEMENTED=12]="UNIMPLEMENTED",ii[ii.INTERNAL=13]="INTERNAL",ii[ii.UNAVAILABLE=14]="UNAVAILABLE",ii[ii.DATA_LOSS=15]="DATA_LOSS",
/**
     * @license
     * Copyright 2022 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
new jt([4294967295,4294967295],0);class si{constructor(t,e){this.databaseId=t,this.useProto3Json=e}}function oi(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function ai(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function li(t,e){return oi(t,e.toTimestamp())}function ci(t){return le(!!t),Ce.fromTimestamp(function(t){const e=nn(t);return new Ie(e.seconds,e.nanos)}(t))}function hi(t,e){return ui(t,e).canonicalString()}function ui(t,e){const n=function(t){return new De(["projects",t.projectId,"databases",t.database])}(t).child("documents");return void 0===e?n:n.child(e)}function di(t,e){return hi(t.databaseId,e.path)}function fi(t){const e=function(t){const e=De.fromString(t);return le(function(t){return t.length>=4&&"projects"===t.get(0)&&"databases"===t.get(2)}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */(e)),e}(t);return 4===e.length?De.emptyPath():function(t){return le(t.length>4&&"documents"===t.get(4)),t.popFirst(5)}(e)}function pi(t,e,n){return{name:di(t,e),fields:n.value.mapValue.fields}}function gi(t){let e=fi(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){le(1===r);const t=n.from[0];t.allDescendants?i=t.collectionId:e=e.child(t.collectionId)}let s=[];n.where&&(s=function(t){const e=mi(t);return e instanceof Mn&&Fn(e)?e.getFilters():[e]}(n.where));let o=[];n.orderBy&&(o=function(t){return t.map((t=>function(t){return new Rn(yi(t.field),function(t){switch(t){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(t.direction))}(t)))}(n.orderBy));let a=null;n.limit&&(a=function(t){let e;return e="object"==typeof t?t.value:t,Be(e)?null:e}(n.limit));let l=null;n.startAt&&(l=function(t){const e=!!t.before,n=t.values||[];return new Dn(n,e)}(n.startAt));let c=null;return n.endAt&&(c=function(t){const e=!t.before,n=t.values||[];return new Dn(n,e)}(n.endAt)),function(t,e,n,r,i,s,o,a){return new Zn(t,e,n,r,i,s,o,a)}(e,i,o,s,a,"F",l,c)}function mi(t){return void 0!==t.unaryFilter?function(t){switch(t.unaryFilter.op){case"IS_NAN":const e=yi(t.unaryFilter.field);return Ln.create(e,"==",{doubleValue:NaN});case"IS_NULL":const n=yi(t.unaryFilter.field);return Ln.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const r=yi(t.unaryFilter.field);return Ln.create(r,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const i=yi(t.unaryFilter.field);return Ln.create(i,"!=",{nullValue:"NULL_VALUE"});default:return ae()}}(t):void 0!==t.fieldFilter?function(t){return Ln.create(yi(t.fieldFilter.field),function(t){switch(t){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return ae()}}(t.fieldFilter.op),t.fieldFilter.value)}(t):void 0!==t.compositeFilter?function(t){return Mn.create(t.compositeFilter.filters.map((t=>mi(t))),function(t){switch(t){case"AND":return"and";case"OR":return"or";default:return ae()}}(t.compositeFilter.op))}(t):ae()}function yi(t){return ke.fromServerFormat(t.fieldPath)}function vi(t){const e=[];return t.fields.forEach((t=>e.push(t.canonicalString()))),{fieldPaths:e}}class wi{constructor(t){this.ht=t}}function Ei(t){const e=gi({parent:t.parent,structuredQuery:t.structuredQuery});return"LAST"===t.limitType?rr(e,e.limit,"L"):e}
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class bi{constructor(){this.ln=new _i}addToCollectionParentIndex(t,e){return this.ln.add(e),Fe.resolve()}getCollectionParents(t,e){return Fe.resolve(this.ln.getEntries(e))}addFieldIndex(t,e){return Fe.resolve()}deleteFieldIndex(t,e){return Fe.resolve()}deleteAllFieldIndexes(t){return Fe.resolve()}createTargetIndexes(t,e){return Fe.resolve()}getDocumentsMatchingTarget(t,e){return Fe.resolve(null)}getIndexType(t,e){return Fe.resolve(0)}getFieldIndexes(t,e){return Fe.resolve([])}getNextCollectionGroupToUpdate(t){return Fe.resolve(null)}getMinOffset(t,e){return Fe.resolve(Oe.min())}getMinOffsetFromCollectionGroup(t,e){return Fe.resolve(Oe.min())}updateCollectionGroup(t,e,n){return Fe.resolve()}updateIndexEntries(t,e){return Fe.resolve()}}class _i{constructor(){this.index={}}add(t){const e=t.lastSegment(),n=t.popLast(),r=this.index[e]||new We(De.comparator),i=!r.has(n);return this.index[e]=r.add(n),i}has(t){const e=t.lastSegment(),n=t.popLast(),r=this.index[e];return r&&r.has(n)}getEntries(t){return(this.index[t]||new We(De.comparator)).toArray()}}
/**
     * @license
     * Copyright 2018 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */const Ti={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0};class Si{static withCacheSize(t){return new Si(t,Si.DEFAULT_COLLECTION_PERCENTILE,Si.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(t,e,n){this.cacheSizeCollectionThreshold=t,this.percentileToCollect=e,this.maximumSequenceNumbersToCollect=n}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */Si.DEFAULT_COLLECTION_PERCENTILE=10,Si.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Si.DEFAULT=new Si(41943040,Si.DEFAULT_COLLECTION_PERCENTILE,Si.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Si.DISABLED=new Si(-1,0,0);
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
class Ii{constructor(t){this.kn=t}next(){return this.kn+=2,this.kn}static qn(){return new Ii(0)}static Qn(){return new Ii(-1)}}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */function Ci([t,e],[n,r]){const i=Te(t,n);return 0===i?Te(e,r):i}class Ai{constructor(t){this.Gn=t,this.buffer=new We(Ci),this.zn=0}jn(){return++this.zn}Hn(t){const e=[t,this.jn()];if(this.buffer.size<this.Gn)this.buffer=this.buffer.add(e);else{const t=this.buffer.last();Ci(e,t)<0&&(this.buffer=this.buffer.delete(t).add(e))}}get maxValue(){return this.buffer.last()[0]}}class Di{constructor(t,e,n){this.garbageCollector=t,this.asyncQueue=e,this.localStore=n,this.Jn=null}start(){-1!==this.garbageCollector.params.cacheSizeCollectionThreshold&&this.Yn(6e4)}stop(){this.Jn&&(this.Jn.cancel(),this.Jn=null)}get started(){return null!==this.Jn}Yn(t){re("LruGarbageCollector",`Garbage collection scheduled in ${t}ms`),this.Jn=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",t,(async()=>{this.Jn=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){Ve(t)?re("LruGarbageCollector","Ignoring IndexedDB error during garbage collection: ",t):await Pe(t)}await this.Yn(3e5)}))}}class Ni{constructor(t,e){this.Zn=t,this.params=e}calculateTargetCount(t,e){return this.Zn.Xn(t).next((t=>Math.floor(e/100*t)))}nthSequenceNumber(t,e){if(0===e)return Fe.resolve(Ue.oe);const n=new Ai(e);return this.Zn.forEachTarget(t,(t=>n.Hn(t.sequenceNumber))).next((()=>this.Zn.er(t,(t=>n.Hn(t))))).next((()=>n.maxValue))}removeTargets(t,e,n){return this.Zn.removeTargets(t,e,n)}removeOrphanedDocuments(t,e){return this.Zn.removeOrphanedDocuments(t,e)}collect(t,e){return-1===this.params.cacheSizeCollectionThreshold?(re("LruGarbageCollector","Garbage collection skipped; disabled"),Fe.resolve(Ti)):this.getCacheSize(t).next((n=>n<this.params.cacheSizeCollectionThreshold?(re("LruGarbageCollector",`Garbage collection skipped; Cache size ${n} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Ti):this.tr(t,e)))}getCacheSize(t){return this.Zn.getCacheSize(t)}tr(t,e){let n,r,i,s,o,a,l;const c=Date.now();return this.calculateTargetCount(t,this.params.percentileToCollect).next((e=>(e>this.params.maximumSequenceNumbersToCollect?(re("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${e}`),r=this.params.maximumSequenceNumbersToCollect):r=e,s=Date.now(),this.nthSequenceNumber(t,r)))).next((r=>(n=r,o=Date.now(),this.removeTargets(t,n,e)))).next((e=>(i=e,a=Date.now(),this.removeOrphanedDocuments(t,n)))).next((t=>(l=Date.now(),ne()<=b.DEBUG&&re("LruGarbageCollector",`LRU Garbage Collection\n\tCounted targets in ${s-c}ms\n\tDetermined least recently used ${r} in `+(o-s)+"ms\n"+`\tRemoved ${i} targets in `+(a-o)+"ms\n"+`\tRemoved ${t} documents in `+(l-a)+"ms\n"+`Total Duration: ${l-c}ms`),Fe.resolve({didRun:!0,sequenceNumbersCollected:r,targetsRemoved:i,documentsRemoved:t}))))}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
class ki{constructor(){this.changes=new cr((t=>t.toString()),((t,e)=>t.isEqual(e))),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,e){this.assertNotApplied(),this.changes.set(t,An.newInvalidDocument(t).setReadTime(e))}getEntry(t,e){this.assertNotApplied();const n=this.changes.get(e);return void 0!==n?Fe.resolve(n):this.getFromCache(t,e)}getEntries(t,e){return this.getAllFromCache(t,e)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
/**
     * @license
     * Copyright 2022 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class Ri{constructor(t,e){this.overlayedDocument=t,this.mutatedFields=e}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class xi{constructor(t,e,n,r){this.remoteDocumentCache=t,this.mutationQueue=e,this.documentOverlayCache=n,this.indexManager=r}getDocument(t,e){let n=null;return this.documentOverlayCache.getOverlay(t,e).next((r=>(n=r,this.remoteDocumentCache.getEntry(t,e)))).next((t=>(null!==n&&zr(n.mutation,t,Ye.empty(),Ie.now()),t)))}getDocuments(t,e){return this.remoteDocumentCache.getEntries(t,e).next((e=>this.getLocalViewOfDocuments(t,e,Er()).next((()=>e))))}getLocalViewOfDocuments(t,e,n=Er()){const r=gr();return this.populateOverlays(t,r,e).next((()=>this.computeViews(t,e,r,n).next((t=>{let e=fr();return t.forEach(((t,n)=>{e=e.insert(t,n.overlayedDocument)})),e}))))}getOverlayedDocuments(t,e){const n=gr();return this.populateOverlays(t,n,e).next((()=>this.computeViews(t,e,n,Er())))}populateOverlays(t,e,n){const r=[];return n.forEach((t=>{e.has(t)||r.push(t)})),this.documentOverlayCache.getOverlays(t,r).next((t=>{t.forEach(((t,n)=>{e.set(t,n)}))}))}computeViews(t,e,n,r){let i=ur();const s=yr(),o=yr();return e.forEach(((t,e)=>{const o=n.get(e.key);r.has(e.key)&&(void 0===o||o.mutation instanceof Qr)?i=i.insert(e.key,e):void 0!==o?(s.set(e.key,o.mutation.getFieldMask()),zr(o.mutation,e,o.mutation.getFieldMask(),Ie.now())):s.set(e.key,Ye.empty())})),this.recalculateAndSaveOverlays(t,i).next((t=>(t.forEach(((t,e)=>s.set(t,e))),e.forEach(((t,e)=>{var n;return o.set(t,new Ri(e,null!==(n=s.get(t))&&void 0!==n?n:null))})),o)))}recalculateAndSaveOverlays(t,e){const n=yr();let r=new Ke(((t,e)=>t-e)),i=Er();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,e).next((t=>{for(const i of t)i.keys().forEach((t=>{const s=e.get(t);if(null===s)return;let o=n.get(t)||Ye.empty();o=i.applyToLocalView(s,o),n.set(t,o);const a=(r.get(i.batchId)||Er()).add(t);r=r.insert(i.batchId,a)}))})).next((()=>{const s=[],o=r.getReverseIterator();for(;o.hasNext();){const r=o.getNext(),a=r.key,l=r.value,c=mr();l.forEach((t=>{if(!i.has(t)){const r=$r(e.get(t),n.get(t));null!==r&&c.set(t,r),i=i.add(t)}})),s.push(this.documentOverlayCache.saveOverlays(t,a,c))}return Fe.waitFor(s)})).next((()=>n))}recalculateAndSaveOverlaysForDocumentKeys(t,e){return this.remoteDocumentCache.getEntries(t,e).next((e=>this.recalculateAndSaveOverlays(t,e)))}getDocumentsMatchingQuery(t,e,n,r){return function(t){return Re.isDocumentKey(t.path)&&null===t.collectionGroup&&0===t.filters.length}(e)?this.getDocumentsMatchingDocumentQuery(t,e.path):function(t){return null!==t.collectionGroup}(e)?this.getDocumentsMatchingCollectionGroupQuery(t,e,n,r):this.getDocumentsMatchingCollectionQuery(t,e,n,r)}getNextDocuments(t,e,n,r){return this.remoteDocumentCache.getAllFromCollectionGroup(t,e,n,r).next((i=>{const s=r-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,e,n.largestBatchId,r-i.size):Fe.resolve(gr());let o=-1,a=i;return s.next((e=>Fe.forEach(e,((e,n)=>(o<n.largestBatchId&&(o=n.largestBatchId),i.get(e)?Fe.resolve():this.remoteDocumentCache.getEntry(t,e).next((t=>{a=a.insert(e,t)}))))).next((()=>this.populateOverlays(t,e,i))).next((()=>this.computeViews(t,a,e,Er()))).next((t=>({batchId:o,changes:pr(t)})))))}))}getDocumentsMatchingDocumentQuery(t,e){return this.getDocument(t,new Re(e)).next((t=>{let e=fr();return t.isFoundDocument()&&(e=e.insert(t.key,t)),e}))}getDocumentsMatchingCollectionGroupQuery(t,e,n,r){const i=e.collectionGroup;let s=fr();return this.indexManager.getCollectionParents(t,i).next((o=>Fe.forEach(o,(o=>{const a=function(t,e){return new Zn(e,null,t.explicitOrderBy.slice(),t.filters.slice(),t.limit,t.limitType,t.startAt,t.endAt)}(e,o.child(i));return this.getDocumentsMatchingCollectionQuery(t,a,n,r).next((t=>{t.forEach(((t,e)=>{s=s.insert(t,e)}))}))})).next((()=>s))))}getDocumentsMatchingCollectionQuery(t,e,n,r){let i;return this.documentOverlayCache.getOverlaysForCollection(t,e.path,n.largestBatchId).next((s=>(i=s,this.remoteDocumentCache.getDocumentsMatchingQuery(t,e,n,i,r)))).next((t=>{i.forEach(((e,n)=>{const r=n.getKey();null===t.get(r)&&(t=t.insert(r,An.newInvalidDocument(r)))}));let n=fr();return t.forEach(((t,r)=>{const s=i.get(t);void 0!==s&&zr(s.mutation,r,Ye.empty(),Ie.now()),ar(e,r)&&(n=n.insert(t,r))})),n}))}}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class Oi{constructor(t){this.serializer=t,this.Tr=new Map,this.Ir=new Map}getBundleMetadata(t,e){return Fe.resolve(this.Tr.get(e))}saveBundleMetadata(t,e){return this.Tr.set(e.id,function(t){return{id:t.id,version:t.version,createTime:ci(t.createTime)}}(e)),Fe.resolve()}getNamedQuery(t,e){return Fe.resolve(this.Ir.get(e))}saveNamedQuery(t,e){return this.Ir.set(e.name,function(t){return{name:t.name,query:Ei(t.bundledQuery),readTime:ci(t.readTime)}}(e)),Fe.resolve()}}
/**
     * @license
     * Copyright 2022 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class Li{constructor(){this.overlays=new Ke(Re.comparator),this.dr=new Map}getOverlay(t,e){return Fe.resolve(this.overlays.get(e))}getOverlays(t,e){const n=gr();return Fe.forEach(e,(e=>this.getOverlay(t,e).next((t=>{null!==t&&n.set(e,t)})))).next((()=>n))}saveOverlays(t,e,n){return n.forEach(((n,r)=>{this.Tt(t,e,r)})),Fe.resolve()}removeOverlaysForBatchId(t,e,n){const r=this.dr.get(n);return void 0!==r&&(r.forEach((t=>this.overlays=this.overlays.remove(t))),this.dr.delete(n)),Fe.resolve()}getOverlaysForCollection(t,e,n){const r=gr(),i=e.length+1,s=new Re(e.child("")),o=this.overlays.getIteratorFrom(s);for(;o.hasNext();){const t=o.getNext().value,s=t.getKey();if(!e.isPrefixOf(s.path))break;s.path.length===i&&t.largestBatchId>n&&r.set(t.getKey(),t)}return Fe.resolve(r)}getOverlaysForCollectionGroup(t,e,n,r){let i=new Ke(((t,e)=>t-e));const s=this.overlays.getIterator();for(;s.hasNext();){const t=s.getNext().value;if(t.getKey().getCollectionGroup()===e&&t.largestBatchId>n){let e=i.get(t.largestBatchId);null===e&&(e=gr(),i=i.insert(t.largestBatchId,e)),e.set(t.getKey(),t)}}const o=gr(),a=i.getIterator();for(;a.hasNext()&&(a.getNext().value.forEach(((t,e)=>o.set(t,e))),!(o.size()>=r)););return Fe.resolve(o)}Tt(t,e,n){const r=this.overlays.get(n.key);if(null!==r){const t=this.dr.get(r.largestBatchId).delete(n.key);this.dr.set(r.largestBatchId,t)}this.overlays=this.overlays.insert(n.key,new ni(e,n));let i=this.dr.get(e);void 0===i&&(i=Er(),this.dr.set(e,i)),this.dr.set(e,i.add(n.key))}}
/**
     * @license
     * Copyright 2024 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class Mi{constructor(){this.sessionToken=tn.EMPTY_BYTE_STRING}getSessionToken(t){return Fe.resolve(this.sessionToken)}setSessionToken(t,e){return this.sessionToken=e,Fe.resolve()}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class Pi{constructor(){this.Er=new We(Fi.Ar),this.Rr=new We(Fi.Vr)}isEmpty(){return this.Er.isEmpty()}addReference(t,e){const n=new Fi(t,e);this.Er=this.Er.add(n),this.Rr=this.Rr.add(n)}mr(t,e){t.forEach((t=>this.addReference(t,e)))}removeReference(t,e){this.gr(new Fi(t,e))}pr(t,e){t.forEach((t=>this.removeReference(t,e)))}yr(t){const e=new Re(new De([])),n=new Fi(e,t),r=new Fi(e,t+1),i=[];return this.Rr.forEachInRange([n,r],(t=>{this.gr(t),i.push(t.key)})),i}wr(){this.Er.forEach((t=>this.gr(t)))}gr(t){this.Er=this.Er.delete(t),this.Rr=this.Rr.delete(t)}Sr(t){const e=new Re(new De([])),n=new Fi(e,t),r=new Fi(e,t+1);let i=Er();return this.Rr.forEachInRange([n,r],(t=>{i=i.add(t.key)})),i}containsKey(t){const e=new Fi(t,0),n=this.Er.firstAfterOrEqual(e);return null!==n&&t.isEqual(n.key)}}class Fi{constructor(t,e){this.key=t,this.br=e}static Ar(t,e){return Re.comparator(t.key,e.key)||Te(t.br,e.br)}static Vr(t,e){return Te(t.br,e.br)||Re.comparator(t.key,e.key)}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class Vi{constructor(t,e){this.indexManager=t,this.referenceDelegate=e,this.mutationQueue=[],this.Dr=1,this.vr=new We(Fi.Ar)}checkEmpty(t){return Fe.resolve(0===this.mutationQueue.length)}addMutationBatch(t,e,n,r){const i=this.Dr;this.Dr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const s=new ti(i,e,n,r);this.mutationQueue.push(s);for(const e of r)this.vr=this.vr.add(new Fi(e.key,i)),this.indexManager.addToCollectionParentIndex(t,e.key.path.popLast());return Fe.resolve(s)}lookupMutationBatch(t,e){return Fe.resolve(this.Cr(e))}getNextMutationBatchAfterBatchId(t,e){const n=e+1,r=this.Fr(n),i=r<0?0:r;return Fe.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return Fe.resolve(0===this.mutationQueue.length?-1:this.Dr-1)}getAllMutationBatches(t){return Fe.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,e){const n=new Fi(e,0),r=new Fi(e,Number.POSITIVE_INFINITY),i=[];return this.vr.forEachInRange([n,r],(t=>{const e=this.Cr(t.br);i.push(e)})),Fe.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(t,e){let n=new We(Te);return e.forEach((t=>{const e=new Fi(t,0),r=new Fi(t,Number.POSITIVE_INFINITY);this.vr.forEachInRange([e,r],(t=>{n=n.add(t.br)}))})),Fe.resolve(this.Mr(n))}getAllMutationBatchesAffectingQuery(t,e){const n=e.path,r=n.length+1;let i=n;Re.isDocumentKey(i)||(i=i.child(""));const s=new Fi(new Re(i),0);let o=new We(Te);return this.vr.forEachWhile((t=>{const e=t.key.path;return!!n.isPrefixOf(e)&&(e.length===r&&(o=o.add(t.br)),!0)}),s),Fe.resolve(this.Mr(o))}Mr(t){const e=[];return t.forEach((t=>{const n=this.Cr(t);null!==n&&e.push(n)})),e}removeMutationBatch(t,e){le(0===this.Or(e.batchId,"removed")),this.mutationQueue.shift();let n=this.vr;return Fe.forEach(e.mutations,(r=>{const i=new Fi(r.key,e.batchId);return n=n.delete(i),this.referenceDelegate.markPotentiallyOrphaned(t,r.key)})).next((()=>{this.vr=n}))}Bn(t){}containsKey(t,e){const n=new Fi(e,0),r=this.vr.firstAfterOrEqual(n);return Fe.resolve(e.isEqual(r&&r.key))}performConsistencyCheck(t){return this.mutationQueue.length,Fe.resolve()}Or(t,e){return this.Fr(t)}Fr(t){return 0===this.mutationQueue.length?0:t-this.mutationQueue[0].batchId}Cr(t){const e=this.Fr(t);return e<0||e>=this.mutationQueue.length?null:this.mutationQueue[e]}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class Ui{constructor(t){this.Nr=t,this.docs=new Ke(Re.comparator),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,e){const n=e.key,r=this.docs.get(n),i=r?r.size:0,s=this.Nr(e);return this.docs=this.docs.insert(n,{document:e.mutableCopy(),size:s}),this.size+=s-i,this.indexManager.addToCollectionParentIndex(t,n.path.popLast())}removeEntry(t){const e=this.docs.get(t);e&&(this.docs=this.docs.remove(t),this.size-=e.size)}getEntry(t,e){const n=this.docs.get(e);return Fe.resolve(n?n.document.mutableCopy():An.newInvalidDocument(e))}getEntries(t,e){let n=ur();return e.forEach((t=>{const e=this.docs.get(t);n=n.insert(t,e?e.document.mutableCopy():An.newInvalidDocument(t))})),Fe.resolve(n)}getDocumentsMatchingQuery(t,e,n,r){let i=ur();const s=e.path,o=new Re(s.child("__id-9223372036854775808__")),a=this.docs.getIteratorFrom(o);for(;a.hasNext();){const{key:t,value:{document:o}}=a.getNext();if(!s.isPrefixOf(t.path))break;t.path.length>s.length+1||Le(xe(o),n)<=0||(r.has(o.key)||ar(e,o))&&(i=i.insert(o.key,o.mutableCopy()))}return Fe.resolve(i)}getAllFromCollectionGroup(t,e,n,r){ae()}Br(t,e){return Fe.forEach(this.docs,(t=>e(t)))}newChangeBuffer(t){return new Bi(this)}getSize(t){return Fe.resolve(this.size)}}class Bi extends ki{constructor(t){super(),this.hr=t}applyChanges(t){const e=[];return this.changes.forEach(((n,r)=>{r.isValidDocument()?e.push(this.hr.addEntry(t,r)):this.hr.removeEntry(n)})),Fe.waitFor(e)}getFromCache(t,e){return this.hr.getEntry(t,e)}getAllFromCache(t,e){return this.hr.getEntries(t,e)}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class ji{constructor(t){this.persistence=t,this.Lr=new cr((t=>Jn(t)),Yn),this.lastRemoteSnapshotVersion=Ce.min(),this.highestTargetId=0,this.kr=0,this.qr=new Pi,this.targetCount=0,this.Qr=Ii.qn()}forEachTarget(t,e){return this.Lr.forEach(((t,n)=>e(n))),Fe.resolve()}getLastRemoteSnapshotVersion(t){return Fe.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return Fe.resolve(this.kr)}allocateTargetId(t){return this.highestTargetId=this.Qr.next(),Fe.resolve(this.highestTargetId)}setTargetsMetadata(t,e,n){return n&&(this.lastRemoteSnapshotVersion=n),e>this.kr&&(this.kr=e),Fe.resolve()}Un(t){this.Lr.set(t.target,t);const e=t.targetId;e>this.highestTargetId&&(this.Qr=new Ii(e),this.highestTargetId=e),t.sequenceNumber>this.kr&&(this.kr=t.sequenceNumber)}addTargetData(t,e){return this.Un(e),this.targetCount+=1,Fe.resolve()}updateTargetData(t,e){return this.Un(e),Fe.resolve()}removeTargetData(t,e){return this.Lr.delete(e.target),this.qr.yr(e.targetId),this.targetCount-=1,Fe.resolve()}removeTargets(t,e,n){let r=0;const i=[];return this.Lr.forEach(((s,o)=>{o.sequenceNumber<=e&&null===n.get(o.targetId)&&(this.Lr.delete(s),i.push(this.removeMatchingKeysForTargetId(t,o.targetId)),r++)})),Fe.waitFor(i).next((()=>r))}getTargetCount(t){return Fe.resolve(this.targetCount)}getTargetData(t,e){const n=this.Lr.get(e)||null;return Fe.resolve(n)}addMatchingKeys(t,e,n){return this.qr.mr(e,n),Fe.resolve()}removeMatchingKeys(t,e,n){this.qr.pr(e,n);const r=this.persistence.referenceDelegate,i=[];return r&&e.forEach((e=>{i.push(r.markPotentiallyOrphaned(t,e))})),Fe.waitFor(i)}removeMatchingKeysForTargetId(t,e){return this.qr.yr(e),Fe.resolve()}getMatchingKeysForTargetId(t,e){const n=this.qr.Sr(e);return Fe.resolve(n)}containsKey(t,e){return Fe.resolve(this.qr.containsKey(e))}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class $i{constructor(t,e){this.Kr={},this.overlays={},this.$r=new Ue(0),this.Ur=!1,this.Ur=!0,this.Wr=new Mi,this.referenceDelegate=t(this),this.Gr=new ji(this),this.indexManager=new bi,this.remoteDocumentCache=function(t){return new Ui(t)}((t=>this.referenceDelegate.zr(t))),this.serializer=new wi(e),this.jr=new Oi(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Ur=!1,Promise.resolve()}get started(){return this.Ur}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let e=this.overlays[t.toKey()];return e||(e=new Li,this.overlays[t.toKey()]=e),e}getMutationQueue(t,e){let n=this.Kr[t.toKey()];return n||(n=new Vi(e,this.referenceDelegate),this.Kr[t.toKey()]=n),n}getGlobalsCache(){return this.Wr}getTargetCache(){return this.Gr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.jr}runTransaction(t,e,n){re("MemoryPersistence","Starting transaction:",t);const r=new qi(this.$r.next());return this.referenceDelegate.Hr(),n(r).next((t=>this.referenceDelegate.Jr(r).next((()=>t)))).toPromise().then((t=>(r.raiseOnCommittedEvent(),t)))}Yr(t,e){return Fe.or(Object.values(this.Kr).map((n=>()=>n.containsKey(t,e))))}}class qi extends Me{constructor(t){super(),this.currentSequenceNumber=t}}class zi{constructor(t){this.persistence=t,this.Zr=new Pi,this.Xr=null}static ei(t){return new zi(t)}get ti(){if(this.Xr)return this.Xr;throw ae()}addReference(t,e,n){return this.Zr.addReference(n,e),this.ti.delete(n.toString()),Fe.resolve()}removeReference(t,e,n){return this.Zr.removeReference(n,e),this.ti.add(n.toString()),Fe.resolve()}markPotentiallyOrphaned(t,e){return this.ti.add(e.toString()),Fe.resolve()}removeTarget(t,e){this.Zr.yr(e.targetId).forEach((t=>this.ti.add(t.toString())));const n=this.persistence.getTargetCache();return n.getMatchingKeysForTargetId(t,e.targetId).next((t=>{t.forEach((t=>this.ti.add(t.toString())))})).next((()=>n.removeTargetData(t,e)))}Hr(){this.Xr=new Set}Jr(t){const e=this.persistence.getRemoteDocumentCache().newChangeBuffer();return Fe.forEach(this.ti,(n=>{const r=Re.fromPath(n);return this.ni(t,r).next((t=>{t||e.removeEntry(r,Ce.min())}))})).next((()=>(this.Xr=null,e.apply(t))))}updateLimboDocument(t,e){return this.ni(t,e).next((t=>{t?this.ti.delete(e.toString()):this.ti.add(e.toString())}))}zr(t){return 0}ni(t,e){return Fe.or([()=>Fe.resolve(this.Zr.containsKey(e)),()=>this.persistence.getTargetCache().containsKey(t,e),()=>this.persistence.Yr(t,e)])}}class Gi{constructor(t,e){this.persistence=t,this.ri=new cr((t=>function(t){let e="";for(let n=0;n<t.length;n++)e.length>0&&(e=qe(e)),e=$e(t.get(n),e);return qe(e)}(t.path)),((t,e)=>t.isEqual(e))),this.garbageCollector=function(t,e){return new Ni(t,e)}(this,e)}static ei(t,e){return new Gi(t,e)}Hr(){}Jr(t){return Fe.resolve()}forEachTarget(t,e){return this.persistence.getTargetCache().forEachTarget(t,e)}Xn(t){const e=this.nr(t);return this.persistence.getTargetCache().getTargetCount(t).next((t=>e.next((e=>t+e))))}nr(t){let e=0;return this.er(t,(t=>{e++})).next((()=>e))}er(t,e){return Fe.forEach(this.ri,((n,r)=>this.ir(t,n,r).next((t=>t?Fe.resolve():e(r)))))}removeTargets(t,e,n){return this.persistence.getTargetCache().removeTargets(t,e,n)}removeOrphanedDocuments(t,e){let n=0;const r=this.persistence.getRemoteDocumentCache(),i=r.newChangeBuffer();return r.Br(t,(r=>this.ir(t,r,e).next((t=>{t||(n++,i.removeEntry(r,Ce.min()))})))).next((()=>i.apply(t))).next((()=>n))}markPotentiallyOrphaned(t,e){return this.ri.set(e,t.currentSequenceNumber),Fe.resolve()}removeTarget(t,e){const n=e.withSequenceNumber(t.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(t,n)}addReference(t,e,n){return this.ri.set(n,t.currentSequenceNumber),Fe.resolve()}removeReference(t,e,n){return this.ri.set(n,t.currentSequenceNumber),Fe.resolve()}updateLimboDocument(t,e){return this.ri.set(e,t.currentSequenceNumber),Fe.resolve()}zr(t){let e=t.key.toString().length;return t.isFoundDocument()&&(e+=En(t.data.value)),e}ir(t,e,n){return Fe.or([()=>this.persistence.Yr(t,e),()=>this.persistence.getTargetCache().containsKey(t,e),()=>{const t=this.ri.get(e);return Fe.resolve(void 0!==t&&t>n)}])}getCacheSize(t){return this.persistence.getRemoteDocumentCache().getSize(t)}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class Hi{constructor(t,e,n,r){this.targetId=t,this.fromCache=e,this.Wi=n,this.Gi=r}static zi(t,e){let n=Er(),r=Er();for(const t of e.docChanges)switch(t.type){case 0:n=n.add(t.doc.key);break;case 1:r=r.add(t.doc.key)}return new Hi(t,e.fromCache,n,r)}}
/**
     * @license
     * Copyright 2023 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class Ki{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(t){this._documentReadCount+=t}}
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class Qi{constructor(){this.ji=!1,this.Hi=!1,this.Ji=100,this.Yi=h()?8:function(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}("undefined"!=typeof navigator&&"string"==typeof navigator.userAgent?navigator.userAgent:"")>0?6:4}initialize(t,e){this.Zi=t,this.indexManager=e,this.ji=!0}getDocumentsMatchingQuery(t,e,n,r){const i={result:null};return this.Xi(t,e).next((t=>{i.result=t})).next((()=>{if(!i.result)return this.es(t,e,r,n).next((t=>{i.result=t}))})).next((()=>{if(i.result)return;const n=new Ki;return this.ts(t,e,n).next((r=>{if(i.result=r,this.Hi)return this.ns(t,e,n,r.size)}))})).next((()=>i.result))}ns(t,e,n,r){return n.documentReadCount<this.Ji?(ne()<=b.DEBUG&&re("QueryEngine","SDK will not create cache indexes for query:",or(e),"since it only creates cache indexes for collection contains","more than or equal to",this.Ji,"documents"),Fe.resolve()):(ne()<=b.DEBUG&&re("QueryEngine","Query:",or(e),"scans",n.documentReadCount,"local documents and returns",r,"documents as results."),n.documentReadCount>this.Yi*r?(ne()<=b.DEBUG&&re("QueryEngine","The SDK decides to create cache indexes for query:",or(e),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(t,nr(e))):Fe.resolve())}Xi(t,e){if(tr(e))return Fe.resolve(null);let n=nr(e);return this.indexManager.getIndexType(t,n).next((r=>0===r?null:(null!==e.limit&&1===r&&(e=rr(e,null,"F"),n=nr(e)),this.indexManager.getDocumentsMatchingTarget(t,n).next((r=>{const i=Er(...r);return this.Zi.getDocuments(t,i).next((r=>this.indexManager.getMinOffset(t,n).next((n=>{const s=this.rs(e,r);return this.ss(e,s,i,n.readTime)?this.Xi(t,rr(e,null,"F")):this.os(t,s,e,n)}))))})))))}es(t,e,n,r){return tr(e)||r.isEqual(Ce.min())?Fe.resolve(null):this.Zi.getDocuments(t,n).next((i=>{const s=this.rs(e,i);return this.ss(e,s,n,r)?Fe.resolve(null):(ne()<=b.DEBUG&&re("QueryEngine","Re-using previous result from %s to execute query: %s",r.toString(),or(e)),this.os(t,s,e,function(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,i=Ce.fromTimestamp(1e9===r?new Ie(n+1,0):new Ie(n,r));return new Oe(i,Re.empty(),e)}(r,-1)).next((t=>t)))}))}rs(t,e){let n=new We(function(t){return(e,n)=>{let r=!1;for(const i of er(t)){const t=lr(i,e,n);if(0!==t)return t;r=r||i.field.isKeyField()}return 0}}(t));return e.forEach(((e,r)=>{ar(t,r)&&(n=n.add(r))})),n}ss(t,e,n,r){if(null===t.limit)return!1;if(n.size!==e.size)return!0;const i="F"===t.limitType?e.last():e.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(r)>0)}ts(t,e,n){return ne()<=b.DEBUG&&re("QueryEngine","Using full collection scan to execute query:",or(e)),this.Zi.getDocumentsMatchingQuery(t,e,Oe.min(),n)}os(t,e,n,r){return this.Zi.getDocumentsMatchingQuery(t,n,r).next((t=>(e.forEach((e=>{t=t.insert(e.key,e)})),t)))}}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class Xi{constructor(t,e,n,r){this.persistence=t,this._s=e,this.serializer=r,this.us=new Ke(Te),this.cs=new cr((t=>Jn(t)),Yn),this.ls=new Map,this.hs=t.getRemoteDocumentCache(),this.Gr=t.getTargetCache(),this.jr=t.getBundleCache(),this.Ps(n)}Ps(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new xi(this.hs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.hs.setIndexManager(this.indexManager),this._s.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(e=>t.collect(e,this.us)))}}async function Wi(t,e){const n=ce(t);return await n.persistence.runTransaction("Handle user change","readonly",(t=>{let r;return n.mutationQueue.getAllMutationBatches(t).next((i=>(r=i,n.Ps(e),n.mutationQueue.getAllMutationBatches(t)))).next((e=>{const i=[],s=[];let o=Er();for(const t of r){i.push(t.batchId);for(const e of t.mutations)o=o.add(e.key)}for(const t of e){s.push(t.batchId);for(const e of t.mutations)o=o.add(e.key)}return n.localDocuments.getDocuments(t,o).next((t=>({Ts:t,removedBatchIds:i,addedBatchIds:s})))}))}))}function Ji(t,e){const n=ce(t);return n.persistence.runTransaction("Get next mutation batch","readonly",(t=>(void 0===e&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(t,e))))}class Yi{constructor(){this.activeTargetIds=br}ps(t){this.activeTargetIds=this.activeTargetIds.add(t)}ys(t){this.activeTargetIds=this.activeTargetIds.delete(t)}gs(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class Zi{constructor(){this._o=new Yi,this.ao={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,e,n){}addLocalQueryTarget(t,e=!0){return e&&this._o.ps(t),this.ao[t]||"not-current"}updateQueryState(t,e,n){this.ao[t]=e}removeLocalQueryTarget(t){this._o.ys(t)}isLocalQueryTarget(t){return this._o.activeTargetIds.has(t)}clearQueryState(t){delete this.ao[t]}getAllActiveQueryTargets(){return this._o.activeTargetIds}isActiveQueryTarget(t){return this._o.activeTargetIds.has(t)}start(){return this._o=new Yi,Promise.resolve()}handleUserChange(t,e,n){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class ts{uo(t){}shutdown(){}}
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class es{constructor(){this.co=()=>this.lo(),this.ho=()=>this.Po(),this.To=[],this.Io()}uo(t){this.To.push(t)}shutdown(){window.removeEventListener("online",this.co),window.removeEventListener("offline",this.ho)}Io(){window.addEventListener("online",this.co),window.addEventListener("offline",this.ho)}lo(){re("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const t of this.To)t(0)}Po(){re("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const t of this.To)t(1)}static p(){return"undefined"!=typeof window&&void 0!==window.addEventListener&&void 0!==window.removeEventListener}}
/**
     * @license
     * Copyright 2023 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */let ns=null;function rs(){return null===ns?ns=268435456+Math.round(2147483648*Math.random()):ns++,"0x"+ns.toString(16)
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */}const is={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class ss{constructor(t){this.Eo=t.Eo,this.Ao=t.Ao}Ro(t){this.Vo=t}mo(t){this.fo=t}po(t){this.yo=t}onMessage(t){this.wo=t}close(){this.Ao()}send(t){this.Eo(t)}So(){this.Vo()}bo(){this.fo()}Do(t){this.yo(t)}vo(t){this.wo(t)}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */const os="WebChannelConnection";class as extends class{get Co(){return!1}constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const e=t.ssl?"https":"http",n=encodeURIComponent(this.databaseId.projectId),r=encodeURIComponent(this.databaseId.database);this.Fo=e+"://"+t.host,this.Mo=`projects/${n}/databases/${r}`,this.xo="(default)"===this.databaseId.database?`project_id=${n}`:`project_id=${n}&database_id=${r}`}Oo(t,e,n,r,i){const s=rs(),o=this.No(t,e.toUriEncodedString());re("RestConnection",`Sending RPC '${t}' ${s}:`,o,n);const a={"google-cloud-resource-prefix":this.Mo,"x-goog-request-params":this.xo};return this.Bo(a,r,i),this.Lo(t,o,a,n).then((e=>(re("RestConnection",`Received RPC '${t}' ${s}: `,e),e)),(e=>{throw se("RestConnection",`RPC '${t}' ${s} failed with error: `,e,"url: ",o,"request:",n),e}))}ko(t,e,n,r,i,s){return this.Oo(t,e,n,r,i)}Bo(t,e,n){t["X-Goog-Api-Client"]="gl-js/ fire/"+te,t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),e&&e.headers.forEach(((e,n)=>t[n]=e)),n&&n.headers.forEach(((e,n)=>t[n]=e))}No(t,e){const n=is[t];return`${this.Fo}/v1/${e}:${n}`}terminate(){}}{constructor(t){super(t),this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams,this.longPollingOptions=t.longPollingOptions}Lo(t,e,n,r){const i=rs();return new Promise(((s,o)=>{const a=new qt;a.setWithCredentials(!0),a.listenOnce(Gt.COMPLETE,(()=>{try{switch(a.getLastErrorCode()){case Ht.NO_ERROR:const e=a.getResponseJson();re(os,`XHR for RPC '${t}' ${i} received:`,JSON.stringify(e)),s(e);break;case Ht.TIMEOUT:re(os,`RPC '${t}' ${i} timed out`),o(new ue(he.DEADLINE_EXCEEDED,"Request time out"));break;case Ht.HTTP_ERROR:const n=a.getStatus();if(re(os,`RPC '${t}' ${i} failed with status:`,n,"response text:",a.getResponseText()),n>0){let t=a.getResponseJson();Array.isArray(t)&&(t=t[0]);const e=null==t?void 0:t.error;if(e&&e.status&&e.message){const t=function(t){const e=t.toLowerCase().replace(/_/g,"-");return Object.values(he).indexOf(e)>=0?e:he.UNKNOWN}(e.status);o(new ue(t,e.message))}else o(new ue(he.UNKNOWN,"Server responded with status "+a.getStatus()))}else o(new ue(he.UNAVAILABLE,"Connection failed."));break;default:ae()}}finally{re(os,`RPC '${t}' ${i} completed.`)}}));const l=JSON.stringify(r);re(os,`RPC '${t}' ${i} sending request:`,r),a.send(e,"POST",l,n,15)}))}qo(t,e,n){const r=rs(),i=[this.Fo,"/","google.firestore.v1.Firestore","/",t,"/channel"],s=Wt(),o=Xt(),a={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},l=this.longPollingOptions.timeoutSeconds;void 0!==l&&(a.longPollingTimeout=Math.round(1e3*l)),this.useFetchStreams&&(a.useFetchStreams=!0),this.Bo(a.initMessageHeaders,e,n),a.encodeInitMessageHeaders=!0;const c=i.join("");re(os,`Creating RPC '${t}' stream ${r}: ${c}`,a);const h=s.createWebChannel(c,a);let u=!1,d=!1;const f=new ss({Eo:e=>{d?re(os,`Not sending because RPC '${t}' stream ${r} is closed:`,e):(u||(re(os,`Opening RPC '${t}' stream ${r} transport.`),h.open(),u=!0),re(os,`RPC '${t}' stream ${r} sending:`,e),h.send(e))},Ao:()=>h.close()}),p=(t,e,n)=>{t.listen(e,(t=>{try{n(t)}catch(t){setTimeout((()=>{throw t}),0)}}))};return p(h,zt.EventType.OPEN,(()=>{d||(re(os,`RPC '${t}' stream ${r} transport opened.`),f.So())})),p(h,zt.EventType.CLOSE,(()=>{d||(d=!0,re(os,`RPC '${t}' stream ${r} transport closed`),f.Do())})),p(h,zt.EventType.ERROR,(e=>{d||(d=!0,se(os,`RPC '${t}' stream ${r} transport errored:`,e),f.Do(new ue(he.UNAVAILABLE,"The operation could not be completed")))})),p(h,zt.EventType.MESSAGE,(e=>{var n;if(!d){const i=e.data[0];le(!!i);const s=i,o=(null==s?void 0:s.error)||(null===(n=s[0])||void 0===n?void 0:n.error);if(o){re(os,`RPC '${t}' stream ${r} received error:`,o);const e=o.status;let n=function(t){const e=ri[t];if(void 0!==e)return function(t){if(void 0===t)return ie("GRPC error has no .code"),he.UNKNOWN;switch(t){case ri.OK:return he.OK;case ri.CANCELLED:return he.CANCELLED;case ri.UNKNOWN:return he.UNKNOWN;case ri.DEADLINE_EXCEEDED:return he.DEADLINE_EXCEEDED;case ri.RESOURCE_EXHAUSTED:return he.RESOURCE_EXHAUSTED;case ri.INTERNAL:return he.INTERNAL;case ri.UNAVAILABLE:return he.UNAVAILABLE;case ri.UNAUTHENTICATED:return he.UNAUTHENTICATED;case ri.INVALID_ARGUMENT:return he.INVALID_ARGUMENT;case ri.NOT_FOUND:return he.NOT_FOUND;case ri.ALREADY_EXISTS:return he.ALREADY_EXISTS;case ri.PERMISSION_DENIED:return he.PERMISSION_DENIED;case ri.FAILED_PRECONDITION:return he.FAILED_PRECONDITION;case ri.ABORTED:return he.ABORTED;case ri.OUT_OF_RANGE:return he.OUT_OF_RANGE;case ri.UNIMPLEMENTED:return he.UNIMPLEMENTED;case ri.DATA_LOSS:return he.DATA_LOSS;default:return ae()}}(e)}(e),i=o.message;void 0===n&&(n=he.INTERNAL,i="Unknown error status: "+e+" with message "+o.message),d=!0,f.Do(new ue(n,i)),h.close()}else re(os,`RPC '${t}' stream ${r} received:`,i),f.vo(i)}})),p(o,Qt.STAT_EVENT,(e=>{e.stat===Kt.PROXY?re(os,`RPC '${t}' stream ${r} detected buffering proxy`):e.stat===Kt.NOPROXY&&re(os,`RPC '${t}' stream ${r} detected no buffering proxy`)})),setTimeout((()=>{f.bo()}),0),f}}function ls(){return"undefined"!=typeof document?document:null}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */function cs(t){return new si(t,!0)}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class hs{constructor(t,e,n=1e3,r=1.5,i=6e4){this.li=t,this.timerId=e,this.Qo=n,this.Ko=r,this.$o=i,this.Uo=0,this.Wo=null,this.Go=Date.now(),this.reset()}reset(){this.Uo=0}zo(){this.Uo=this.$o}jo(t){this.cancel();const e=Math.floor(this.Uo+this.Ho()),n=Math.max(0,Date.now()-this.Go),r=Math.max(0,e-n);r>0&&re("ExponentialBackoff",`Backing off for ${r} ms (base delay: ${this.Uo} ms, delay with jitter: ${e} ms, last attempt: ${n} ms ago)`),this.Wo=this.li.enqueueAfterDelay(this.timerId,r,(()=>(this.Go=Date.now(),t()))),this.Uo*=this.Ko,this.Uo<this.Qo&&(this.Uo=this.Qo),this.Uo>this.$o&&(this.Uo=this.$o)}Jo(){null!==this.Wo&&(this.Wo.skipDelay(),this.Wo=null)}cancel(){null!==this.Wo&&(this.Wo.cancel(),this.Wo=null)}Ho(){return(Math.random()-.5)*this.Uo}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class us{constructor(t,e,n,r,i,s,o,a){this.li=t,this.Yo=n,this.Zo=r,this.connection=i,this.authCredentialsProvider=s,this.appCheckCredentialsProvider=o,this.listener=a,this.state=0,this.Xo=0,this.e_=null,this.t_=null,this.stream=null,this.n_=0,this.r_=new hs(t,e)}i_(){return 1===this.state||5===this.state||this.s_()}s_(){return 2===this.state||3===this.state}start(){this.n_=0,4!==this.state?this.auth():this.o_()}async stop(){this.i_()&&await this.close(0)}__(){this.state=0,this.r_.reset()}a_(){this.s_()&&null===this.e_&&(this.e_=this.li.enqueueAfterDelay(this.Yo,6e4,(()=>this.u_())))}c_(t){this.l_(),this.stream.send(t)}async u_(){if(this.s_())return this.close(0)}l_(){this.e_&&(this.e_.cancel(),this.e_=null)}h_(){this.t_&&(this.t_.cancel(),this.t_=null)}async close(t,e){this.l_(),this.h_(),this.r_.cancel(),this.Xo++,4!==t?this.r_.reset():e&&e.code===he.RESOURCE_EXHAUSTED?(ie(e.toString()),ie("Using maximum backoff delay to prevent overloading the backend."),this.r_.zo()):e&&e.code===he.UNAUTHENTICATED&&3!==this.state&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),null!==this.stream&&(this.P_(),this.stream.close(),this.stream=null),this.state=t,await this.listener.po(e)}P_(){}auth(){this.state=1;const t=this.T_(this.Xo),e=this.Xo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([t,n])=>{this.Xo===e&&this.I_(t,n)}),(e=>{t((()=>{const t=new ue(he.UNKNOWN,"Fetching auth token failed: "+e.message);return this.d_(t)}))}))}I_(t,e){const n=this.T_(this.Xo);this.stream=this.E_(t,e),this.stream.Ro((()=>{n((()=>this.listener.Ro()))})),this.stream.mo((()=>{n((()=>(this.state=2,this.t_=this.li.enqueueAfterDelay(this.Zo,1e4,(()=>(this.s_()&&(this.state=3),Promise.resolve()))),this.listener.mo())))})),this.stream.po((t=>{n((()=>this.d_(t)))})),this.stream.onMessage((t=>{n((()=>1==++this.n_?this.A_(t):this.onNext(t)))}))}o_(){this.state=5,this.r_.jo((async()=>{this.state=0,this.start()}))}d_(t){return re("PersistentStream",`close with error: ${t}`),this.stream=null,this.close(4,t)}T_(t){return e=>{this.li.enqueueAndForget((()=>this.Xo===t?e():(re("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class ds extends us{constructor(t,e,n,r,i,s){super(t,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",e,n,r,s),this.serializer=i}get f_(){return this.n_>0}start(){this.lastStreamToken=void 0,super.start()}P_(){this.f_&&this.g_([])}E_(t,e){return this.connection.qo("Write",t,e)}A_(t){return le(!!t.streamToken),this.lastStreamToken=t.streamToken,le(!t.writeResults||0===t.writeResults.length),this.listener.p_()}onNext(t){le(!!t.streamToken),this.lastStreamToken=t.streamToken,this.r_.reset();const e=function(t,e){return t&&t.length>0?(le(void 0!==e),t.map((t=>function(t,e){let n=t.updateTime?ci(t.updateTime):ci(e);return n.isEqual(Ce.min())&&(n=ci(e)),new Vr(n,t.transformResults||[])}(t,e)))):[]}(t.writeResults,t.commitTime),n=ci(t.commitTime);return this.listener.y_(n,e)}w_(){const t={};t.database=function(t){return new De(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}(this.serializer),this.c_(t)}g_(t){const e={streamToken:this.lastStreamToken,writes:t.map((t=>function(t,e){let n;if(e instanceof Kr)n={update:pi(t,e.key,e.value)};else if(e instanceof Yr)n={delete:di(t,e.key)};else if(e instanceof Qr)n={update:pi(t,e.key,e.data),updateMask:vi(e.fieldMask)};else{if(!(e instanceof Zr))return ae();n={verify:di(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map((t=>function(t,e){const n=e.transform;if(n instanceof Nr)return{fieldPath:e.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(n instanceof kr)return{fieldPath:e.field.canonicalString(),appendMissingElements:{values:n.elements}};if(n instanceof xr)return{fieldPath:e.field.canonicalString(),removeAllFromArray:{values:n.elements}};if(n instanceof Lr)return{fieldPath:e.field.canonicalString(),increment:n.Pe};throw ae()}(0,t)))),e.precondition.isNone||(n.currentDocument=function(t,e){return void 0!==e.updateTime?{updateTime:li(t,e.updateTime)}:void 0!==e.exists?{exists:e.exists}:ae()}(t,e.precondition)),n}(this.serializer,t)))};this.c_(e)}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class fs extends class{}{constructor(t,e,n,r){super(),this.authCredentials=t,this.appCheckCredentials=e,this.connection=n,this.serializer=r,this.S_=!1}b_(){if(this.S_)throw new ue(he.FAILED_PRECONDITION,"The client has already been terminated.")}Oo(t,e,n,r){return this.b_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([i,s])=>this.connection.Oo(t,ui(e,n),r,i,s))).catch((t=>{throw"FirebaseError"===t.name?(t.code===he.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),t):new ue(he.UNKNOWN,t.toString())}))}ko(t,e,n,r,i){return this.b_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([s,o])=>this.connection.ko(t,ui(e,n),r,s,o,i))).catch((t=>{throw"FirebaseError"===t.name?(t.code===he.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),t):new ue(he.UNKNOWN,t.toString())}))}terminate(){this.S_=!0,this.connection.terminate()}}class ps{constructor(t,e){this.asyncQueue=t,this.onlineStateHandler=e,this.state="Unknown",this.D_=0,this.v_=null,this.C_=!0}F_(){0===this.D_&&(this.M_("Unknown"),this.v_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this.v_=null,this.x_("Backend didn't respond within 10 seconds."),this.M_("Offline"),Promise.resolve()))))}O_(t){"Online"===this.state?this.M_("Unknown"):(this.D_++,this.D_>=1&&(this.N_(),this.x_(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.M_("Offline")))}set(t){this.N_(),this.D_=0,"Online"===t&&(this.C_=!1),this.M_(t)}M_(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}x_(t){const e=`Could not reach Cloud Firestore backend. ${t}\nThis typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.C_?(ie(e),this.C_=!1):re("OnlineStateTracker",e)}N_(){null!==this.v_&&(this.v_.cancel(),this.v_=null)}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class gs{constructor(t,e,n,r,i){this.localStore=t,this.datastore=e,this.asyncQueue=n,this.remoteSyncer={},this.B_=[],this.L_=new Map,this.k_=new Set,this.q_=[],this.Q_=i,this.Q_.uo((t=>{n.enqueueAndForget((async()=>{vs(this)&&(re("RemoteStore","Restarting streams for network reachability change."),await async function(t){const e=ce(t);e.k_.add(4),await ys(e),e.K_.set("Unknown"),e.k_.delete(4),await ms(e)}(this))}))})),this.K_=new ps(n,r)}}async function ms(t){if(vs(t))for(const e of t.q_)await e(!0)}async function ys(t){for(const e of t.q_)await e(!1)}function vs(t){return 0===ce(t).k_.size}async function ws(t,e,n){if(!Ve(e))throw e;t.k_.add(1),await ys(t),t.K_.set("Offline"),n||(n=()=>function(t){const e=ce(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",(t=>e.Gr.getLastRemoteSnapshotVersion(t)))}(t.localStore)),t.asyncQueue.enqueueRetryable((async()=>{re("RemoteStore","Retrying IndexedDB access"),await n(),t.k_.delete(1),await ms(t)}))}function Es(t,e){return e().catch((n=>ws(t,n,e)))}async function bs(t){const e=ce(t),n=Rs(e);let r=e.B_.length>0?e.B_[e.B_.length-1].batchId:-1;for(;_s(e);)try{const t=await Ji(e.localStore,r);if(null===t){0===e.B_.length&&n.a_();break}r=t.batchId,Ts(e,t)}catch(t){await ws(e,t)}Ss(e)&&Is(e)}function _s(t){return vs(t)&&t.B_.length<10}function Ts(t,e){t.B_.push(e);const n=Rs(t);n.s_()&&n.f_&&n.g_(e.mutations)}function Ss(t){return vs(t)&&!Rs(t).i_()&&t.B_.length>0}function Is(t){Rs(t).start()}async function Cs(t){Rs(t).w_()}async function As(t){const e=Rs(t);for(const n of t.B_)e.g_(n.mutations)}async function Ds(t,e,n){const r=t.B_.shift(),i=ei.from(r,e,n);await Es(t,(()=>t.remoteSyncer.applySuccessfulWrite(i))),await bs(t)}async function Ns(t,e){e&&Rs(t).f_&&await async function(t,e){if(function(t){return function(t){switch(t){default:return ae();case he.CANCELLED:case he.UNKNOWN:case he.DEADLINE_EXCEEDED:case he.RESOURCE_EXHAUSTED:case he.INTERNAL:case he.UNAVAILABLE:case he.UNAUTHENTICATED:return!1;case he.INVALID_ARGUMENT:case he.NOT_FOUND:case he.ALREADY_EXISTS:case he.PERMISSION_DENIED:case he.FAILED_PRECONDITION:case he.ABORTED:case he.OUT_OF_RANGE:case he.UNIMPLEMENTED:case he.DATA_LOSS:return!0}}(t)&&t!==he.ABORTED}(e.code)){const n=t.B_.shift();Rs(t).__(),await Es(t,(()=>t.remoteSyncer.rejectFailedWrite(n.batchId,e))),await bs(t)}}(t,e),Ss(t)&&Is(t)}async function ks(t,e){const n=ce(t);n.asyncQueue.verifyOperationInProgress(),re("RemoteStore","RemoteStore received new credentials");const r=vs(n);n.k_.add(3),await ys(n),r&&n.K_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.k_.delete(3),await ms(n)}function Rs(t){return t.G_||(t.G_=function(t,e,n){const r=ce(t);return r.b_(),new ds(e,r.connection,r.authCredentials,r.appCheckCredentials,r.serializer,n)}(t.datastore,t.asyncQueue,{Ro:()=>Promise.resolve(),mo:Cs.bind(null,t),po:Ns.bind(null,t),p_:As.bind(null,t),y_:Ds.bind(null,t)}),t.q_.push((async e=>{e?(t.G_.__(),await bs(t)):(await t.G_.stop(),t.B_.length>0&&(re("RemoteStore",`Stopping write stream with ${t.B_.length} pending writes`),t.B_=[]))}))),t.G_
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */}class xs{constructor(t,e,n,r,i){this.asyncQueue=t,this.timerId=e,this.targetTimeMs=n,this.op=r,this.removalCallback=i,this.deferred=new de,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((t=>{}))}get promise(){return this.deferred.promise}static createAndSchedule(t,e,n,r,i){const s=Date.now()+n,o=new xs(t,e,s,r,i);return o.start(n),o}start(t){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){null!==this.timerHandle&&(this.clearTimeout(),this.deferred.reject(new ue(he.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>null!==this.timerHandle?(this.clearTimeout(),this.op().then((t=>this.deferred.resolve(t)))):Promise.resolve()))}clearTimeout(){null!==this.timerHandle&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Os(t,e){if(ie("AsyncQueue",`${e}: ${t}`),Ve(t))return new ue(he.UNAVAILABLE,`${e}: ${t}`);throw t}class Ls{constructor(){this.queries=Ms(),this.onlineState="Unknown",this.X_=new Set}terminate(){!function(t,e){const n=ce(t),r=n.queries;n.queries=Ms(),r.forEach(((t,n)=>{for(const t of n.J_)t.onError(e)}))}(this,new ue(he.ABORTED,"Firestore shutting down"))}}function Ms(){return new cr((t=>sr(t)),ir)}var Ps,Fs;(Fs=Ps||(Ps={})).na="default",Fs.Cache="cache";class Vs{constructor(t,e,n,r,i,s){this.localStore=t,this.remoteStore=e,this.eventManager=n,this.sharedClientState=r,this.currentUser=i,this.maxConcurrentLimboResolutions=s,this.Ma={},this.xa=new cr((t=>sr(t)),ir),this.Oa=new Map,this.Na=new Set,this.Ba=new Ke(Re.comparator),this.La=new Map,this.ka=new Pi,this.qa={},this.Qa=new Map,this.Ka=Ii.Qn(),this.onlineState="Unknown",this.$a=void 0}get isPrimaryClient(){return!0===this.$a}}async function Us(t,e,n){const r=function(t){const e=ce(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=js.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=$s.bind(null,e),e}(t);try{const t=await function(t,e){const n=ce(t),r=Ie.now(),i=e.reduce(((t,e)=>t.add(e.key)),Er());let s,o;return n.persistence.runTransaction("Locally write mutations","readwrite",(t=>{let a=ur(),l=Er();return n.hs.getEntries(t,i).next((t=>{a=t,a.forEach(((t,e)=>{e.isValidDocument()||(l=l.add(t))}))})).next((()=>n.localDocuments.getOverlayedDocuments(t,a))).next((i=>{s=i;const o=[];for(const t of e){const e=Gr(t,s.get(t.key).overlayedDocument);null!=e&&o.push(new Qr(t.key,e,Cn(e.value.mapValue),Ur.exists(!0)))}return n.mutationQueue.addMutationBatch(t,r,o,e)})).next((e=>{o=e;const r=e.applyToLocalDocumentSet(s,l);return n.documentOverlayCache.saveOverlays(t,e.batchId,r)}))})).then((()=>({batchId:o.batchId,changes:pr(s)})))}(r.localStore,e);r.sharedClientState.addPendingMutation(t.batchId),function(t,e,n){let r=t.qa[t.currentUser.toKey()];r||(r=new Ke(Te)),r=r.insert(e,n),t.qa[t.currentUser.toKey()]=r}(r,t.batchId,n),await Gs(r,t.changes),await bs(r.remoteStore)}catch(t){const e=Os(t,"Failed to persist write");n.reject(e)}}function Bs(t,e,n){const r=ce(t);if(r.isPrimaryClient&&0===n||!r.isPrimaryClient&&1===n){const t=[];r.xa.forEach(((n,r)=>{const i=r.view.ea(e);i.snapshot&&t.push(i.snapshot)})),function(t,e){const n=ce(t);n.onlineState=e;let r=!1;n.queries.forEach(((t,n)=>{for(const t of n.J_)t.ea(e)&&(r=!0)})),r&&function(t){t.X_.forEach((t=>{t.next()}))}(n)}(r.eventManager,e),t.length&&r.Ma.R_(t),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function js(t,e){const n=ce(t),r=e.batch.batchId;try{const t=await function(t,e){const n=ce(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",(t=>{const r=e.batch.keys(),i=n.hs.newChangeBuffer({trackRemovals:!0});return function(t,e,n,r){const i=n.batch,s=i.keys();let o=Fe.resolve();return s.forEach((t=>{o=o.next((()=>r.getEntry(e,t))).next((e=>{const s=n.docVersions.get(t);le(null!==s),e.version.compareTo(s)<0&&(i.applyToRemoteDocument(e,n),e.isValidDocument()&&(e.setReadTime(n.commitVersion),r.addEntry(e)))}))})),o.next((()=>t.mutationQueue.removeMutationBatch(e,i)))}(n,t,e,i).next((()=>i.apply(t))).next((()=>n.mutationQueue.performConsistencyCheck(t))).next((()=>n.documentOverlayCache.removeOverlaysForBatchId(t,r,e.batch.batchId))).next((()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(t,function(t){let e=Er();for(let n=0;n<t.mutationResults.length;++n)t.mutationResults[n].transformResults.length>0&&(e=e.add(t.batch.mutations[n].key));return e}(e)))).next((()=>n.localDocuments.getDocuments(t,r)))}))}(n.localStore,e);zs(n,r,null),qs(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await Gs(n,t)}catch(t){await Pe(t)}}async function $s(t,e,n){const r=ce(t);try{const t=await function(t,e){const n=ce(t);return n.persistence.runTransaction("Reject batch","readwrite-primary",(t=>{let r;return n.mutationQueue.lookupMutationBatch(t,e).next((e=>(le(null!==e),r=e.keys(),n.mutationQueue.removeMutationBatch(t,e)))).next((()=>n.mutationQueue.performConsistencyCheck(t))).next((()=>n.documentOverlayCache.removeOverlaysForBatchId(t,r,e))).next((()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(t,r))).next((()=>n.localDocuments.getDocuments(t,r)))}))}(r.localStore,e);zs(r,e,n),qs(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await Gs(r,t)}catch(n){await Pe(n)}}function qs(t,e){(t.Qa.get(e)||[]).forEach((t=>{t.resolve()})),t.Qa.delete(e)}function zs(t,e,n){const r=ce(t);let i=r.qa[r.currentUser.toKey()];if(i){const t=i.get(e);t&&(n?t.reject(n):t.resolve(),i=i.remove(e)),r.qa[r.currentUser.toKey()]=i}}async function Gs(t,e,n){const r=ce(t),i=[],s=[],o=[];r.xa.isEmpty()||(r.xa.forEach(((t,a)=>{o.push(r.Ua(a,e,n).then((t=>{if((t||n)&&r.isPrimaryClient){const e=t?!t.fromCache:void 0;r.sharedClientState.updateQueryState(a.targetId,e?"current":"not-current")}if(t){i.push(t);const e=Hi.zi(a.targetId,t);s.push(e)}})))})),await Promise.all(o),r.Ma.R_(i),await async function(t,e){const n=ce(t);try{await n.persistence.runTransaction("notifyLocalViewChanges","readwrite",(t=>Fe.forEach(e,(e=>Fe.forEach(e.Wi,(r=>n.persistence.referenceDelegate.addReference(t,e.targetId,r))).next((()=>Fe.forEach(e.Gi,(r=>n.persistence.referenceDelegate.removeReference(t,e.targetId,r)))))))))}catch(t){if(!Ve(t))throw t;re("LocalStore","Failed to update sequence numbers: "+t)}for(const t of e){const e=t.targetId;if(!t.fromCache){const t=n.us.get(e),r=t.snapshotVersion,i=t.withLastLimboFreeSnapshotVersion(r);n.us=n.us.insert(e,i)}}}(r.localStore,s))}async function Hs(t,e){const n=ce(t);if(!n.currentUser.isEqual(e)){re("SyncEngine","User change. New user:",e.toKey());const t=await Wi(n.localStore,e);n.currentUser=e,function(t,e){t.Qa.forEach((t=>{t.forEach((t=>{t.reject(new ue(he.CANCELLED,e))}))})),t.Qa.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,t.removedBatchIds,t.addedBatchIds),await Gs(n,t.Ts)}}class Ks{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(t){this.serializer=cs(t.databaseInfo.databaseId),this.sharedClientState=this.za(t),this.persistence=this.ja(t),await this.persistence.start(),this.localStore=this.Ha(t),this.gcScheduler=this.Ja(t,this.localStore),this.indexBackfillerScheduler=this.Ya(t,this.localStore)}Ja(t,e){return null}Ya(t,e){return null}Ha(t){return function(t,e,n,r){return new Xi(t,e,n,r)}(this.persistence,new Qi,t.initialUser,this.serializer)}ja(t){return new $i(zi.ei,this.serializer)}za(t){return new Zi}async terminate(){var t,e;null===(t=this.gcScheduler)||void 0===t||t.stop(),null===(e=this.indexBackfillerScheduler)||void 0===e||e.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Ks.provider={build:()=>new Ks};class Qs extends Ks{constructor(t){super(),this.cacheSizeBytes=t}Ja(t,e){le(this.persistence.referenceDelegate instanceof Gi);const n=this.persistence.referenceDelegate.garbageCollector;return new Di(n,t.asyncQueue,e)}ja(t){const e=void 0!==this.cacheSizeBytes?Si.withCacheSize(this.cacheSizeBytes):Si.DEFAULT;return new $i((t=>Gi.ei(t,e)),this.serializer)}}class Xs{async initialize(t,e){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(e),this.remoteStore=this.createRemoteStore(e),this.eventManager=this.createEventManager(e),this.syncEngine=this.createSyncEngine(e,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=t=>Bs(this.syncEngine,t,1),this.remoteStore.remoteSyncer.handleCredentialChange=Hs.bind(null,this.syncEngine),await async function(t,e){const n=ce(t);e?(n.k_.delete(2),await ms(n)):e||(n.k_.add(2),await ys(n),n.K_.set("Unknown"))}(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return new Ls}createDatastore(t){const e=cs(t.databaseInfo.databaseId),n=function(t){return new as(t)}(t.databaseInfo);return function(t,e,n,r){return new fs(t,e,n,r)}(t.authCredentials,t.appCheckCredentials,n,e)}createRemoteStore(t){return function(t,e,n,r,i){return new gs(t,e,n,r,i)}(this.localStore,this.datastore,t.asyncQueue,(t=>Bs(this.syncEngine,t,0)),es.p()?new es:new ts)}createSyncEngine(t,e){return function(t,e,n,r,i,s,o){const a=new Vs(t,e,n,r,i,s);return o&&(a.$a=!0),a}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,e)}async terminate(){var t,e;await async function(t){const e=ce(t);re("RemoteStore","RemoteStore shutting down."),e.k_.add(5),await ys(e),e.Q_.shutdown(),e.K_.set("Unknown")}(this.remoteStore),null===(t=this.datastore)||void 0===t||t.terminate(),null===(e=this.eventManager)||void 0===e||e.terminate()}}Xs.provider={build:()=>new Xs};
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
class Ws{constructor(t,e,n,r,i){this.authCredentials=t,this.appCheckCredentials=e,this.asyncQueue=n,this.databaseInfo=r,this.user=Zt.UNAUTHENTICATED,this.clientId=_e.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(n,(async t=>{re("FirestoreClient","Received user=",t.uid),await this.authCredentialListener(t),this.user=t})),this.appCheckCredentials.start(n,(t=>(re("FirestoreClient","Received new app check token=",t),this.appCheckCredentialListener(t,this.user))))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}terminate(){this.asyncQueue.enterRestrictedMode();const t=new de;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(e){const n=Os(e,"Failed to shutdown persistence");t.reject(n)}})),t.promise}}async function Js(t,e){t.asyncQueue.verifyOperationInProgress(),re("FirestoreClient","Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener((async t=>{r.isEqual(t)||(await Wi(e.localStore,t),r=t)})),e.persistence.setDatabaseDeletedListener((()=>t.terminate())),t._offlineComponents=e}async function Ys(t,e){t.asyncQueue.verifyOperationInProgress();const n=await async function(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){re("FirestoreClient","Using user provided OfflineComponentProvider");try{await Js(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!function(t){return"FirebaseError"===t.name?t.code===he.FAILED_PRECONDITION||t.code===he.UNIMPLEMENTED:!("undefined"!=typeof DOMException&&t instanceof DOMException)||22===t.code||20===t.code||11===t.code}(n))throw n;se("Error using user provided cache. Falling back to memory cache: "+n),await Js(t,new Ks)}}else re("FirestoreClient","Using default OfflineComponentProvider"),await Js(t,new Qs(void 0));return t._offlineComponents}(t);re("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener((t=>ks(e.remoteStore,t))),t.setAppCheckTokenChangeListener(((t,n)=>ks(e.remoteStore,n))),t._onlineComponents=e}function Zs(t){return async function(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(re("FirestoreClient","Using user provided OnlineComponentProvider"),await Ys(t,t._uninitializedComponentsProvider._online)):(re("FirestoreClient","Using default OnlineComponentProvider"),await Ys(t,new Xs))),t._onlineComponents}(t).then((t=>t.syncEngine))}
/**
     * @license
     * Copyright 2023 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */function to(t){const e={};return void 0!==t.timeoutSeconds&&(e.timeoutSeconds=t.timeoutSeconds),e
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */}const eo=new Map;
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */function no(t,e,n){if(!n)throw new ue(he.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function ro(t){if(!Re.isDocumentKey(t))throw new ue(he.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function io(t){if(Re.isDocumentKey(t))throw new ue(he.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function so(t){if(void 0===t)return"undefined";if(null===t)return"null";if("string"==typeof t)return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if("number"==typeof t||"boolean"==typeof t)return""+t;if("object"==typeof t){if(t instanceof Array)return"an array";{const e=function(t){return t.constructor?t.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return"function"==typeof t?"a function":ae()}function oo(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new ue(he.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=so(t);throw new ue(he.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class ao{constructor(t){var e,n;if(void 0===t.host){if(void 0!==t.ssl)throw new ue(he.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=t.host,this.ssl=null===(e=t.ssl)||void 0===e||e;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.localCache=t.localCache,void 0===t.cacheSizeBytes)this.cacheSizeBytes=41943040;else{if(-1!==t.cacheSizeBytes&&t.cacheSizeBytes<1048576)throw new ue(he.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}(function(t,e,n,r){if(!0===e&&!0===r)throw new ue(he.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)})("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:void 0===t.experimentalAutoDetectLongPolling?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=to(null!==(n=t.experimentalLongPollingOptions)&&void 0!==n?n:{}),function(t){if(void 0!==t.timeoutSeconds){if(isNaN(t.timeoutSeconds))throw new ue(he.INVALID_ARGUMENT,`invalid long polling timeout: ${t.timeoutSeconds} (must not be NaN)`);if(t.timeoutSeconds<5)throw new ue(he.INVALID_ARGUMENT,`invalid long polling timeout: ${t.timeoutSeconds} (minimum allowed value is 5)`);if(t.timeoutSeconds>30)throw new ue(he.INVALID_ARGUMENT,`invalid long polling timeout: ${t.timeoutSeconds} (maximum allowed value is 30)`)}}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */(this.experimentalLongPollingOptions),this.useFetchStreams=!!t.useFetchStreams}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&function(t,e){return t.timeoutSeconds===e.timeoutSeconds}(this.experimentalLongPollingOptions,t.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}class lo{constructor(t,e,n,r){this._authCredentials=t,this._appCheckCredentials=e,this._databaseId=n,this._app=r,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new ao({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new ue(he.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return"notTerminated"!==this._terminateTask}_setSettings(t){if(this._settingsFrozen)throw new ue(he.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new ao(t),void 0!==t.credentials&&(this._authCredentials=function(t){if(!t)return new pe;switch(t.type){case"firstParty":return new ve(t.sessionIndex||"0",t.iamToken||null,t.authTokenFactory||null);case"provider":return t.client;default:throw new ue(he.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return"notTerminated"===this._terminateTask&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){"notTerminated"===this._terminateTask?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const e=eo.get(t);e&&(re("ComponentProvider","Removing Datastore"),eo.delete(t),e.terminate())}(this),Promise.resolve()}}function co(t,e,n,i={}){var s;const o=(t=oo(t,lo))._getSettings(),a=`${e}:${n}`;if("firestore.googleapis.com"!==o.host&&o.host!==a&&se("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},o),{host:a,ssl:!1})),i.mockUserToken){let e,n;if("string"==typeof i.mockUserToken)e=i.mockUserToken,n=Zt.MOCK_USER;else{e=function(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${n}`,aud:n,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t);return[r(JSON.stringify({alg:"none",type:"JWT"})),r(JSON.stringify(o)),""].join(".")}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */(i.mockUserToken,null===(s=t._app)||void 0===s?void 0:s.options.projectId);const o=i.mockUserToken.sub||i.mockUserToken.user_id;if(!o)throw new ue(he.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");n=new Zt(o)}t._authCredentials=new ge(new fe(e,n))}}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class ho{constructor(t,e,n){this.converter=e,this._query=n,this.type="query",this.firestore=t}withConverter(t){return new ho(this.firestore,t,this._query)}}class uo{constructor(t,e,n){this.converter=e,this._key=n,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new fo(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new uo(this.firestore,t,this._key)}}class fo extends ho{constructor(t,e,n){super(t,e,function(t){return new Zn(t)}(n)),this._path=n,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new uo(this.firestore,null,new Re(t))}withConverter(t){return new fo(this.firestore,t,this._path)}}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
class po{constructor(t=Promise.resolve()){this.Iu=[],this.du=!1,this.Eu=[],this.Au=null,this.Ru=!1,this.Vu=!1,this.mu=[],this.r_=new hs(this,"async_queue_retry"),this.fu=()=>{const t=ls();t&&re("AsyncQueue","Visibility state changed to "+t.visibilityState),this.r_.Jo()},this.gu=t;const e=ls();e&&"function"==typeof e.addEventListener&&e.addEventListener("visibilitychange",this.fu)}get isShuttingDown(){return this.du}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.pu(),this.yu(t)}enterRestrictedMode(t){if(!this.du){this.du=!0,this.Vu=t||!1;const e=ls();e&&"function"==typeof e.removeEventListener&&e.removeEventListener("visibilitychange",this.fu)}}enqueue(t){if(this.pu(),this.du)return new Promise((()=>{}));const e=new de;return this.yu((()=>this.du&&this.Vu?Promise.resolve():(t().then(e.resolve,e.reject),e.promise))).then((()=>e.promise))}enqueueRetryable(t){this.enqueueAndForget((()=>(this.Iu.push(t),this.wu())))}async wu(){if(0!==this.Iu.length){try{await this.Iu[0](),this.Iu.shift(),this.r_.reset()}catch(t){if(!Ve(t))throw t;re("AsyncQueue","Operation failed with retryable error: "+t)}this.Iu.length>0&&this.r_.jo((()=>this.wu()))}}yu(t){const e=this.gu.then((()=>(this.Ru=!0,t().catch((t=>{this.Au=t,this.Ru=!1;const e=function(t){let e=t.message||"";return t.stack&&(e=t.stack.includes(t.message)?t.stack:t.message+"\n"+t.stack),e}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */(t);throw ie("INTERNAL UNHANDLED ERROR: ",e),t})).then((t=>(this.Ru=!1,t))))));return this.gu=e,e}enqueueAfterDelay(t,e,n){this.pu(),this.mu.indexOf(t)>-1&&(e=0);const r=xs.createAndSchedule(this,t,e,n,(t=>this.Su(t)));return this.Eu.push(r),r}pu(){this.Au&&ae()}verifyOperationInProgress(){}async bu(){let t;do{t=this.gu,await t}while(t!==this.gu)}Du(t){for(const e of this.Eu)if(e.timerId===t)return!0;return!1}vu(t){return this.bu().then((()=>{this.Eu.sort(((t,e)=>t.targetTimeMs-e.targetTimeMs));for(const e of this.Eu)if(e.skipDelay(),"all"!==t&&e.timerId===t)break;return this.bu()}))}Cu(t){this.mu.push(t)}Su(t){const e=this.Eu.indexOf(t);this.Eu.splice(e,1)}}class go extends lo{constructor(t,e,n,r){super(t,e,n,r),this.type="firestore",this._queue=new po,this._persistenceKey=(null==r?void 0:r.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const t=this._firestoreClient.terminate();this._queue=new po(t),this._firestoreClient=void 0,await t}}}function mo(t){if(t._terminated)throw new ue(he.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||function(t){var e,n,r;const i=t._freezeSettings(),s=function(t,e,n,r){return new cn(t,e,n,r.host,r.ssl,r.experimentalForceLongPolling,r.experimentalAutoDetectLongPolling,to(r.experimentalLongPollingOptions),r.useFetchStreams)}(t._databaseId,(null===(e=t._app)||void 0===e?void 0:e.options.appId)||"",t._persistenceKey,i);t._componentsProvider||(null===(n=i.localCache)||void 0===n?void 0:n._offlineComponentProvider)&&(null===(r=i.localCache)||void 0===r?void 0:r._onlineComponentProvider)&&(t._componentsProvider={_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider}),t._firestoreClient=new Ws(t._authCredentials,t._appCheckCredentials,t._queue,s,t._componentsProvider&&function(t){const e=null==t?void 0:t._online.build();return{_offline:null==t?void 0:t._offline.build(e),_online:e}}(t._componentsProvider))}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */(t),t._firestoreClient}class yo{constructor(t){this._byteString=t}static fromBase64String(t){try{return new yo(tn.fromBase64String(t))}catch(t){throw new ue(he.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(t){return new yo(tn.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class vo{constructor(...t){for(let e=0;e<t.length;++e)if(0===t[e].length)throw new ue(he.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new ke(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class wo{constructor(t){this._methodName=t}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class Eo{constructor(t,e){if(!isFinite(t)||t<-90||t>90)throw new ue(he.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(e)||e<-180||e>180)throw new ue(he.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+e);this._lat=t,this._long=e}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(t){return Te(this._lat,t._lat)||Te(this._long,t._long)}}
/**
     * @license
     * Copyright 2024 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class bo{constructor(t){this._values=(t||[]).map((t=>t))}toArray(){return this._values.map((t=>t))}isEqual(t){return function(t,e){if(t.length!==e.length)return!1;for(let n=0;n<t.length;++n)if(t[n]!==e[n])return!1;return!0}(this._values,t._values)}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */const _o=/^__.*__$/;class To{constructor(t,e,n){this.data=t,this.fieldMask=e,this.fieldTransforms=n}toMutation(t,e){return null!==this.fieldMask?new Qr(t,this.data,this.fieldMask,e,this.fieldTransforms):new Kr(t,this.data,e,this.fieldTransforms)}}function So(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw ae()}}class Io{constructor(t,e,n,r,i,s){this.settings=t,this.databaseId=e,this.serializer=n,this.ignoreUndefinedProperties=r,void 0===i&&this.Fu(),this.fieldTransforms=i||[],this.fieldMask=s||[]}get path(){return this.settings.path}get Mu(){return this.settings.Mu}xu(t){return new Io(Object.assign(Object.assign({},this.settings),t),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Ou(t){var e;const n=null===(e=this.path)||void 0===e?void 0:e.child(t),r=this.xu({path:n,Nu:!1});return r.Bu(t),r}Lu(t){var e;const n=null===(e=this.path)||void 0===e?void 0:e.child(t),r=this.xu({path:n,Nu:!1});return r.Fu(),r}ku(t){return this.xu({path:void 0,Nu:!0})}qu(t){return Po(t,this.settings.methodName,this.settings.Qu||!1,this.path,this.settings.Ku)}contains(t){return void 0!==this.fieldMask.find((e=>t.isPrefixOf(e)))||void 0!==this.fieldTransforms.find((e=>t.isPrefixOf(e.field)))}Fu(){if(this.path)for(let t=0;t<this.path.length;t++)this.Bu(this.path.get(t))}Bu(t){if(0===t.length)throw this.qu("Document fields must not be empty");if(So(this.Mu)&&_o.test(t))throw this.qu('Document fields cannot begin and end with "__"')}}class Co{constructor(t,e,n){this.databaseId=t,this.ignoreUndefinedProperties=e,this.serializer=n||cs(t)}$u(t,e,n,r=!1){return new Io({Mu:t,methodName:e,Ku:n,path:ke.emptyPath(),Nu:!1,Qu:r},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Ao(t){const e=t._freezeSettings(),n=cs(t._databaseId);return new Co(t._databaseId,!!e.ignoreUndefinedProperties,n)}function Do(t,e,n,r,i,s={}){const o=t.$u(s.merge||s.mergeFields?2:0,e,n,i);Oo("Data must be an object, but it was:",o,r);const a=Ro(r,o);let l,c;if(s.merge)l=new Ye(o.fieldMask),c=o.fieldTransforms;else if(s.mergeFields){const t=[];for(const r of s.mergeFields){const i=Lo(e,r,n);if(!o.contains(i))throw new ue(he.INVALID_ARGUMENT,`Field '${i}' is specified in your field mask but missing from your input data.`);Fo(t,i)||t.push(i)}l=new Ye(t),c=o.fieldTransforms.filter((t=>l.covers(t.field)))}else l=null,c=o.fieldTransforms;return new To(new In(a),l,c)}class No extends wo{_toFieldTransform(t){return new Fr(t.path,new Nr)}isEqual(t){return t instanceof No}}function ko(t,e){if(xo(t=m(t)))return Oo("Unsupported field value:",e,t),Ro(t,e);if(t instanceof wo)return function(t,e){if(!So(e.Mu))throw e.qu(`${t._methodName}() can only be used with update() and set()`);if(!e.path)throw e.qu(`${t._methodName}() is not currently supported inside arrays`);const n=t._toFieldTransform(e);n&&e.fieldTransforms.push(n)}(t,e),null;if(void 0===t&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.Nu&&4!==e.Mu)throw e.qu("Nested arrays are not supported");return function(t,e){const n=[];let r=0;for(const i of t){let t=ko(i,e.ku(r));null==t&&(t={nullValue:"NULL_VALUE"}),n.push(t),r++}return{arrayValue:{values:n}}}(t,e)}return function(t,e){if(null===(t=m(t)))return{nullValue:"NULL_VALUE"};if("number"==typeof t)return Sr(e.serializer,t);if("boolean"==typeof t)return{booleanValue:t};if("string"==typeof t)return{stringValue:t};if(t instanceof Date){const n=Ie.fromDate(t);return{timestampValue:oi(e.serializer,n)}}if(t instanceof Ie){const n=new Ie(t.seconds,1e3*Math.floor(t.nanoseconds/1e3));return{timestampValue:oi(e.serializer,n)}}if(t instanceof Eo)return{geoPointValue:{latitude:t.latitude,longitude:t.longitude}};if(t instanceof yo)return{bytesValue:ai(e.serializer,t._byteString)};if(t instanceof uo){const n=e.databaseId,r=t.firestore._databaseId;if(!r.isEqual(n))throw e.qu(`Document reference is for database ${r.projectId}/${r.database} but should be for database ${n.projectId}/${n.database}`);return{referenceValue:hi(t.firestore._databaseId||e.databaseId,t._key.path)}}if(t instanceof bo)return function(t,e){return{mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{values:t.toArray().map((t=>{if("number"!=typeof t)throw e.qu("VectorValues must only contain numeric values.");return _r(e.serializer,t)}))}}}}}}(t,e);throw e.qu(`Unsupported field value: ${so(t)}`)}(t,e)}function Ro(t,e){const n={};return He(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Ge(t,((t,r)=>{const i=ko(r,e.Ou(t));null!=i&&(n[t]=i)})),{mapValue:{fields:n}}}function xo(t){return!("object"!=typeof t||null===t||t instanceof Array||t instanceof Date||t instanceof Ie||t instanceof Eo||t instanceof yo||t instanceof uo||t instanceof wo||t instanceof bo)}function Oo(t,e,n){if(!xo(n)||!function(t){return"object"==typeof t&&null!==t&&(Object.getPrototypeOf(t)===Object.prototype||null===Object.getPrototypeOf(t))}(n)){const r=so(n);throw"an object"===r?e.qu(t+" a custom object"):e.qu(t+" "+r)}}function Lo(t,e,n){if((e=m(e))instanceof vo)return e._internalPath;if("string"==typeof e)return function(t,e,n){if(e.search(Mo)>=0)throw Po(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new vo(...e.split("."))._internalPath}catch(r){throw Po(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}(t,e);throw Po("Field path arguments must be of type string or ",t,!1,void 0,n)}const Mo=new RegExp("[~\\*/\\[\\]]");function Po(t,e,n,r,i){const s=r&&!r.isEmpty(),o=void 0!==i;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let l="";return(s||o)&&(l+=" (found",s&&(l+=` in field ${r}`),o&&(l+=` in document ${i}`),l+=")"),new ue(he.INVALID_ARGUMENT,a+t+l)}function Fo(t,e){return t.some((t=>t.isEqual(e)))}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */function Vo(t,e){const n=oo(t.firestore,go),r=function(t,e,...n){if(t=m(t),1===arguments.length&&(e=_e.newId()),no("doc","path",e),t instanceof lo){const r=De.fromString(e,...n);return ro(r),new uo(t,null,new Re(r))}{if(!(t instanceof uo||t instanceof fo))throw new ue(he.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(De.fromString(e,...n));return ro(r),new uo(t.firestore,t instanceof fo?t.converter:null,new Re(r))}}(t),i=function(t,e){let n;return n=t?t.toFirestore(e):e,n}(t.converter,e);return function(t,e){return function(t,e){const n=new de;return t.asyncQueue.enqueueAndForget((async()=>Us(await Zs(t),e,n))),n.promise}(mo(t),e)}(n,[Do(Ao(t.firestore),"addDoc",r._key,i,null!==t.converter,{}).toMutation(r._key,Ur.exists(!1))]).then((()=>r))}!function(t,e=!0){!function(t){te=t}("11.2.0"),Ct(new y("firestore",((t,{instanceIdentifier:n,options:r})=>{const i=t.getProvider("app").getImmediate(),s=new go(new me(t.getProvider("auth-internal")),new Ee(t.getProvider("app-check-internal")),function(t,e){if(!Object.prototype.hasOwnProperty.apply(t.options,["projectId"]))throw new ue(he.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new hn(t.options.projectId,e)}(i,n),i);return r=Object.assign({useFetchStreams:e},r),s._setSettings(r),s}),"PUBLIC").setMultipleInstances(!0)),kt(Yt,"4.7.6",t),kt(Yt,"4.7.6","esm2017")}();
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
kt("firebase","11.2.0","app");Nt({apiKey:"AIzaSyBgOheePCJqT_ivlXs_EagQ3wQPGIMpJUg",authDomain:"howardlucas-7fcb0.firebaseapp.com",projectId:"howardlucas-7fcb0",storageBucket:"howardlucas-7fcb0.firebasestorage.app",messagingSenderId:"945745527827",appId:"1:945745527827:web:3e282534ecdd22c66eabe6"});const Uo=function(){const t=function(t=Et){const e=_t.get(t);if(!e&&t===Et&&l())return Nt();if(!e)throw At.create("no-app",{appName:t});return e}(),e=function(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}(t,"firestore").getImmediate({identifier:"(default)"});if(!e._initialized){const t=a("firestore");t&&co(e,...t)}return e}(),Bo=function(t,e,...n){if(t=m(t),no("collection","path",e),t instanceof lo){const r=De.fromString(e,...n);return io(r),new fo(t,null,r)}{if(!(t instanceof uo||t instanceof fo))throw new ue(he.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(De.fromString(e,...n));return io(r),new fo(t.firestore,null,r)}}(Uo,"contacts"),jo=document.querySelector(".contact-form"),$o=document.querySelector(".feedback");jo.addEventListener("submit",(t=>{t.preventDefault(),Vo(Bo,{name:jo.name.value,email:jo.email.value,message:jo.message.value,createdAt:new No("serverTimestamp")}).then((()=>{$o.style.display="block",setTimeout((()=>{$o.style.display="none",jo.name.value="",jo.email.value="",jo.message.value=""}),3e3)}))}))}();