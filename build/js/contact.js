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
     */const t=function(t){const e=[];let n=0;for(let i=0;i<t.length;i++){let r=t.charCodeAt(i);r<128?e[n++]=r:r<2048?(e[n++]=r>>6|192,e[n++]=63&r|128):55296==(64512&r)&&i+1<t.length&&56320==(64512&t.charCodeAt(i+1))?(r=65536+((1023&r)<<10)+(1023&t.charCodeAt(++i)),e[n++]=r>>18|240,e[n++]=r>>12&63|128,e[n++]=r>>6&63|128,e[n++]=63&r|128):(e[n++]=r>>12|224,e[n++]=r>>6&63|128,e[n++]=63&r|128)}return e},e={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"==typeof atob,encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let e=0;e<t.length;e+=3){const r=t[e],s=e+1<t.length,o=s?t[e+1]:0,a=e+2<t.length,h=a?t[e+2]:0,l=r>>2,c=(3&r)<<4|o>>4;let u=(15&o)<<2|h>>6,f=63&h;a||(f=64,s||(u=64)),i.push(n[l],n[c],n[u],n[f])}return i.join("")},encodeString(e,n){return this.HAS_NATIVE_SUPPORT&&!n?btoa(e):this.encodeByteArray(t(e),n)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):function(t){const e=[];let n=0,i=0;for(;n<t.length;){const r=t[n++];if(r<128)e[i++]=String.fromCharCode(r);else if(r>191&&r<224){const s=t[n++];e[i++]=String.fromCharCode((31&r)<<6|63&s)}else if(r>239&&r<365){const s=((7&r)<<18|(63&t[n++])<<12|(63&t[n++])<<6|63&t[n++])-65536;e[i++]=String.fromCharCode(55296+(s>>10)),e[i++]=String.fromCharCode(56320+(1023&s))}else{const s=t[n++],o=t[n++];e[i++]=String.fromCharCode((15&r)<<12|(63&s)<<6|63&o)}}return e.join("")}(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const i=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let e=0;e<t.length;){const s=i[t.charAt(e++)],o=e<t.length?i[t.charAt(e)]:0;++e;const a=e<t.length?i[t.charAt(e)]:64;++e;const h=e<t.length?i[t.charAt(e)]:64;if(++e,null==s||null==o||null==a||null==h)throw new n;const l=s<<2|o>>4;if(r.push(l),64!==a){const t=o<<4&240|a>>2;if(r.push(t),64!==h){const t=a<<6&192|h;r.push(t)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class n extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const i=function(n){return function(n){const i=t(n);return e.encodeByteArray(i,!0)}(n).replace(/\./g,"")};
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
const r=()=>
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
function(){if("undefined"!=typeof self)return self;if("undefined"!=typeof window)return window;if("undefined"!=typeof global)return global;throw new Error("Unable to locate global object.")}().__FIREBASE_DEFAULTS__,s=()=>{if("undefined"==typeof document)return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch(t){return}const n=t&&function(t){try{return e.decodeString(t,!0)}catch(t){console.error("base64Decode failed: ",t)}return null}(t[1]);return n&&JSON.parse(n)},o=()=>{try{return r()||(()=>{if("undefined"==typeof process||void 0===process.env)return;const t=process.env.__FIREBASE_DEFAULTS__;return t?JSON.parse(t):void 0})()||s()}catch(t){return void console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`)}},a=t=>{const e=(t=>{var e,n;return null===(n=null===(e=o())||void 0===e?void 0:e.emulatorHosts)||void 0===n?void 0:n[t]})(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const i=parseInt(e.substring(n+1),10);return"["===e[0]?[e.substring(1,n-1),i]:[e.substring(0,n),i]},h=()=>{var t;return null===(t=o())||void 0===t?void 0:t.config};
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
class l{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise(((t,e)=>{this.resolve=t,this.reject=e}))}wrapCallback(t){return(e,n)=>{e?this.reject(e):this.resolve(n),"function"==typeof t&&(this.promise.catch((()=>{})),1===t.length?t(e):t(e,n))}}}
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
     */function c(){return!function(){var t;const e=null===(t=o())||void 0===t?void 0:t.forceEnvironment;if("node"===e)return!0;if("browser"===e)return!1;try{return"[object process]"===Object.prototype.toString.call(global.process)}catch(t){return!1}}()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}class u extends Error{constructor(t,e,n){super(e),this.code=t,this.customData=n,this.name="FirebaseError",Object.setPrototypeOf(this,u.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,f.prototype.create)}}class f{constructor(t,e,n){this.service=t,this.serviceName=e,this.errors=n}create(t,...e){const n=e[0]||{},i=`${this.service}/${t}`,r=this.errors[t],s=r?function(t,e){return t.replace(d,((t,n)=>{const i=e[n];return null!=i?String(i):`<${n}?>`}))}(r,n):"Error",o=`${this.serviceName}: ${s} (${i}).`;return new u(i,o,n)}}const d=/\{\$([^}]+)}/g;function p(t,e){if(t===e)return!0;const n=Object.keys(t),i=Object.keys(e);for(const r of n){if(!i.includes(r))return!1;const n=t[r],s=e[r];if(g(n)&&g(s)){if(!p(n,s))return!1}else if(n!==s)return!1}for(const t of i)if(!n.includes(t))return!1;return!0}function g(t){return null!==t&&"object"==typeof t}
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
     */class w{constructor(t,e){this.name=t,this.container=e,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const e=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(e)){const t=new l;if(this.instancesDeferred.set(e,t),this.isInitialized(e)||this.shouldAutoInitialize())try{const n=this.getOrInitializeService({instanceIdentifier:e});n&&t.resolve(n)}catch(t){}}return this.instancesDeferred.get(e).promise}getImmediate(t){var e;const n=this.normalizeInstanceIdentifier(null==t?void 0:t.identifier),i=null!==(e=null==t?void 0:t.optional)&&void 0!==e&&e;if(!this.isInitialized(n)&&!this.shouldAutoInitialize()){if(i)return null;throw Error(`Service ${this.name} is not available`)}try{return this.getOrInitializeService({instanceIdentifier:n})}catch(t){if(i)return null;throw t}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,this.shouldAutoInitialize()){if(function(t){return"EAGER"===t.instantiationMode}
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
     */(t))try{this.getOrInitializeService({instanceIdentifier:v})}catch(t){}for(const[t,e]of this.instancesDeferred.entries()){const n=this.normalizeInstanceIdentifier(t);try{const t=this.getOrInitializeService({instanceIdentifier:n});e.resolve(t)}catch(t){}}}}clearInstance(t=v){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter((t=>"INTERNAL"in t)).map((t=>t.INTERNAL.delete())),...t.filter((t=>"_delete"in t)).map((t=>t._delete()))])}isComponentSet(){return null!=this.component}isInitialized(t=v){return this.instances.has(t)}getOptions(t=v){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:e={}}=t,n=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:n,options:e});for(const[t,e]of this.instancesDeferred.entries()){n===this.normalizeInstanceIdentifier(t)&&e.resolve(i)}return i}onInit(t,e){var n;const i=this.normalizeInstanceIdentifier(e),r=null!==(n=this.onInitCallbacks.get(i))&&void 0!==n?n:new Set;r.add(t),this.onInitCallbacks.set(i,r);const s=this.instances.get(i);return s&&t(s,i),()=>{r.delete(t)}}invokeOnInitCallbacks(t,e){const n=this.onInitCallbacks.get(e);if(n)for(const i of n)try{i(t,e)}catch(t){}}getOrInitializeService({instanceIdentifier:t,options:e={}}){let n=this.instances.get(t);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:(i=t,i===v?void 0:i),options:e}),this.instances.set(t,n),this.instancesOptions.set(t,e),this.invokeOnInitCallbacks(n,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,n)}catch(t){}var i;return n||null}normalizeInstanceIdentifier(t=v){return this.component?this.component.multipleInstances?t:v:t}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}}class E{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const e=this.getProvider(t.name);if(e.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);e.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const e=new w(t,this);return this.providers.set(t,e),e}getProviders(){return Array.from(this.providers.values())}}
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
     */var b;!function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"}(b||(b={}));const _={debug:b.DEBUG,verbose:b.VERBOSE,info:b.INFO,warn:b.WARN,error:b.ERROR,silent:b.SILENT},T=b.INFO,I={[b.DEBUG]:"log",[b.VERBOSE]:"log",[b.INFO]:"info",[b.WARN]:"warn",[b.ERROR]:"error"},S=(t,e,...n)=>{if(e<t.logLevel)return;const i=(new Date).toISOString(),r=I[e];if(!r)throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`);console[r](`[${i}]  ${t.name}:`,...n)};class A{constructor(t){this.name=t,this._logLevel=T,this._logHandler=S,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in b))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel="string"==typeof t?_[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if("function"!=typeof t)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,b.DEBUG,...t),this._logHandler(this,b.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,b.VERBOSE,...t),this._logHandler(this,b.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,b.INFO,...t),this._logHandler(this,b.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,b.WARN,...t),this._logHandler(this,b.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,b.ERROR,...t),this._logHandler(this,b.ERROR,...t)}}const C=(t,e)=>e.some((e=>t instanceof e));let D,N;const k=new WeakMap,R=new WeakMap,O=new WeakMap,x=new WeakMap,L=new WeakMap;let M={get(t,e,n){if(t instanceof IDBTransaction){if("done"===e)return R.get(t);if("objectStoreNames"===e)return t.objectStoreNames||O.get(t);if("store"===e)return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return V(t[e])},set:(t,e,n)=>(t[e]=n,!0),has:(t,e)=>t instanceof IDBTransaction&&("done"===e||"store"===e)||e in t};function P(t){return t!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?(N||(N=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])).includes(t)?function(...e){return t.apply(U(this),e),V(k.get(this))}:function(...e){return V(t.apply(U(this),e))}:function(e,...n){const i=t.call(U(this),e,...n);return O.set(i,e.sort?e.sort():[e]),V(i)}}function F(t){return"function"==typeof t?P(t):(t instanceof IDBTransaction&&function(t){if(R.has(t))return;const e=new Promise(((e,n)=>{const i=()=>{t.removeEventListener("complete",r),t.removeEventListener("error",s),t.removeEventListener("abort",s)},r=()=>{e(),i()},s=()=>{n(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",r),t.addEventListener("error",s),t.addEventListener("abort",s)}));R.set(t,e)}(t),C(t,D||(D=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction]))?new Proxy(t,M):t)}function V(t){if(t instanceof IDBRequest)return function(t){const e=new Promise(((e,n)=>{const i=()=>{t.removeEventListener("success",r),t.removeEventListener("error",s)},r=()=>{e(V(t.result)),i()},s=()=>{n(t.error),i()};t.addEventListener("success",r),t.addEventListener("error",s)}));return e.then((e=>{e instanceof IDBCursor&&k.set(e,t)})).catch((()=>{})),L.set(e,t),e}(t);if(x.has(t))return x.get(t);const e=F(t);return e!==t&&(x.set(t,e),L.set(e,t)),e}const U=t=>L.get(t);const B=["get","getKey","getAll","getAllKeys","count"],j=["put","add","delete","clear"],z=new Map;function q(t,e){if(!(t instanceof IDBDatabase)||e in t||"string"!=typeof e)return;if(z.get(e))return z.get(e);const n=e.replace(/FromIndex$/,""),i=e!==n,r=j.includes(n);if(!(n in(i?IDBIndex:IDBObjectStore).prototype)||!r&&!B.includes(n))return;const s=async function(t,...e){const s=this.transaction(t,r?"readwrite":"readonly");let o=s.store;return i&&(o=o.index(e.shift())),(await Promise.all([o[n](...e),r&&s.done]))[0]};return z.set(e,s),s}M=(t=>({...t,get:(e,n,i)=>q(e,n)||t.get(e,n,i),has:(e,n)=>!!q(e,n)||t.has(e,n)}))(M);
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
class H{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map((t=>{if(function(t){const e=t.getComponent();return"VERSION"===(null==e?void 0:e.type)}(t)){const e=t.getImmediate();return`${e.library}/${e.version}`}return null})).filter((t=>t)).join(" ")}}const G="@firebase/app",K="0.10.5",Q=new A("@firebase/app"),W="[DEFAULT]",X={[G]:"fire-core","@firebase/app-compat":"fire-core-compat","@firebase/analytics":"fire-analytics","@firebase/analytics-compat":"fire-analytics-compat","@firebase/app-check":"fire-app-check","@firebase/app-check-compat":"fire-app-check-compat","@firebase/auth":"fire-auth","@firebase/auth-compat":"fire-auth-compat","@firebase/database":"fire-rtdb","@firebase/database-compat":"fire-rtdb-compat","@firebase/functions":"fire-fn","@firebase/functions-compat":"fire-fn-compat","@firebase/installations":"fire-iid","@firebase/installations-compat":"fire-iid-compat","@firebase/messaging":"fire-fcm","@firebase/messaging-compat":"fire-fcm-compat","@firebase/performance":"fire-perf","@firebase/performance-compat":"fire-perf-compat","@firebase/remote-config":"fire-rc","@firebase/remote-config-compat":"fire-rc-compat","@firebase/storage":"fire-gcs","@firebase/storage-compat":"fire-gcs-compat","@firebase/firestore":"fire-fst","@firebase/firestore-compat":"fire-fst-compat","@firebase/vertexai-preview":"fire-vertex","fire-js":"fire-js",firebase:"fire-js-all"},Y=new Map,J=new Map,Z=new Map;function tt(t,e){try{t.container.addComponent(e)}catch(n){Q.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function et(t){const e=t.name;if(Z.has(e))return Q.debug(`There were multiple attempts to register component ${e}.`),!1;Z.set(e,t);for(const e of Y.values())tt(e,t);for(const e of J.values())tt(e,t);return!0}
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
const nt=new f("app","Firebase",{"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."});
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
class it{constructor(t,e,n){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},e),this._name=e.name,this._automaticDataCollectionEnabled=e.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new y("app",(()=>this),"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw nt.create("app-deleted",{appName:this._name})}}
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
     */function rt(t,e={}){let n=t;if("object"!=typeof e){e={name:e}}const i=Object.assign({name:W,automaticDataCollectionEnabled:!1},e),r=i.name;if("string"!=typeof r||!r)throw nt.create("bad-app-name",{appName:String(r)});if(n||(n=h()),!n)throw nt.create("no-options");const s=Y.get(r);if(s){if(p(n,s.options)&&p(i,s.config))return s;throw nt.create("duplicate-app",{appName:r})}const o=new E(r);for(const t of Z.values())o.addComponent(t);const a=new it(n,i,o);return Y.set(r,a),a}function st(t,e,n){var i;let r=null!==(i=X[t])&&void 0!==i?i:t;n&&(r+=`-${n}`);const s=r.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const t=[`Unable to register library "${r}" with version "${e}":`];return s&&t.push(`library name "${r}" contains illegal characters (whitespace or "/")`),s&&o&&t.push("and"),o&&t.push(`version name "${e}" contains illegal characters (whitespace or "/")`),void Q.warn(t.join(" "))}et(new y(`${r}-version`,(()=>({library:r,version:e})),"VERSION"))}
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
     */const ot="firebase-heartbeat-database",at=1,ht="firebase-heartbeat-store";let lt=null;function ct(){return lt||(lt=function(t,e,{blocked:n,upgrade:i,blocking:r,terminated:s}={}){const o=indexedDB.open(t,e),a=V(o);return i&&o.addEventListener("upgradeneeded",(t=>{i(V(o.result),t.oldVersion,t.newVersion,V(o.transaction),t)})),n&&o.addEventListener("blocked",(t=>n(t.oldVersion,t.newVersion,t))),a.then((t=>{s&&t.addEventListener("close",(()=>s())),r&&t.addEventListener("versionchange",(t=>r(t.oldVersion,t.newVersion,t)))})).catch((()=>{})),a}(ot,at,{upgrade:(t,e)=>{if(0===e)try{t.createObjectStore(ht)}catch(t){console.warn(t)}}}).catch((t=>{throw nt.create("idb-open",{originalErrorMessage:t.message})}))),lt}async function ut(t,e){try{const n=(await ct()).transaction(ht,"readwrite"),i=n.objectStore(ht);await i.put(e,ft(t)),await n.done}catch(t){if(t instanceof u)Q.warn(t.message);else{const e=nt.create("idb-set",{originalErrorMessage:null==t?void 0:t.message});Q.warn(e.message)}}}function ft(t){return`${t.name}!${t.options.appId}`}
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
     */class dt{constructor(t){this.container=t,this._heartbeatsCache=null;const e=this.container.getProvider("app").getImmediate();this._storage=new gt(e),this._heartbeatsCachePromise=this._storage.read().then((t=>(this._heartbeatsCache=t,t)))}async triggerHeartbeat(){var t,e;const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=pt();if((null!=(null===(t=this._heartbeatsCache)||void 0===t?void 0:t.heartbeats)||(this._heartbeatsCache=await this._heartbeatsCachePromise,null!=(null===(e=this._heartbeatsCache)||void 0===e?void 0:e.heartbeats)))&&this._heartbeatsCache.lastSentHeartbeatDate!==i&&!this._heartbeatsCache.heartbeats.some((t=>t.date===i)))return this._heartbeatsCache.heartbeats.push({date:i,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter((t=>{const e=new Date(t.date).valueOf();return Date.now()-e<=2592e6})),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var t;if(null===this._heartbeatsCache&&await this._heartbeatsCachePromise,null==(null===(t=this._heartbeatsCache)||void 0===t?void 0:t.heartbeats)||0===this._heartbeatsCache.heartbeats.length)return"";const e=pt(),{heartbeatsToSend:n,unsentEntries:r}=function(t,e=1024){const n=[];let i=t.slice();for(const r of t){const t=n.find((t=>t.agent===r.agent));if(t){if(t.dates.push(r.date),mt(n)>e){t.dates.pop();break}}else if(n.push({agent:r.agent,dates:[r.date]}),mt(n)>e){n.pop();break}i=i.slice(1)}return{heartbeatsToSend:n,unsentEntries:i}}(this._heartbeatsCache.heartbeats),s=i(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}}function pt(){return(new Date).toISOString().substring(0,10)}class gt{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return!!function(){try{return"object"==typeof indexedDB}catch(t){return!1}}()&&new Promise(((t,e)=>{try{let n=!0;const i="validate-browser-context-for-indexeddb-analytics-module",r=self.indexedDB.open(i);r.onsuccess=()=>{r.result.close(),n||self.indexedDB.deleteDatabase(i),t(!0)},r.onupgradeneeded=()=>{n=!1},r.onerror=()=>{var t;e((null===(t=r.error)||void 0===t?void 0:t.message)||"")}}catch(t){e(t)}})).then((()=>!0)).catch((()=>!1))}async read(){if(await this._canUseIndexedDBPromise){const t=await async function(t){try{const e=(await ct()).transaction(ht),n=await e.objectStore(ht).get(ft(t));return await e.done,n}catch(t){if(t instanceof u)Q.warn(t.message);else{const e=nt.create("idb-get",{originalErrorMessage:null==t?void 0:t.message});Q.warn(e.message)}}}(this.app);return(null==t?void 0:t.heartbeats)?t:{heartbeats:[]}}return{heartbeats:[]}}async overwrite(t){var e;if(await this._canUseIndexedDBPromise){const n=await this.read();return ut(this.app,{lastSentHeartbeatDate:null!==(e=t.lastSentHeartbeatDate)&&void 0!==e?e:n.lastSentHeartbeatDate,heartbeats:t.heartbeats})}}async add(t){var e;if(await this._canUseIndexedDBPromise){const n=await this.read();return ut(this.app,{lastSentHeartbeatDate:null!==(e=t.lastSentHeartbeatDate)&&void 0!==e?e:n.lastSentHeartbeatDate,heartbeats:[...n.heartbeats,...t.heartbeats]})}}}function mt(t){return i(JSON.stringify({version:2,heartbeats:t})).length}
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
     */var yt;yt="",et(new y("platform-logger",(t=>new H(t)),"PRIVATE")),et(new y("heartbeat",(t=>new dt(t)),"PRIVATE")),st(G,K,yt),st(G,K,"esm2017"),st("fire-js","");
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
st("firebase","10.12.2","app");var vt,wt="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};
/** @license
    Copyright The Closure Library Authors.
    SPDX-License-Identifier: Apache-2.0
    */(function(){var t;
/** @license

     Copyright The Closure Library Authors.
     SPDX-License-Identifier: Apache-2.0
    */function e(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}function n(t,e,n){n||(n=0);var i=Array(16);if("string"==typeof e)for(var r=0;16>r;++r)i[r]=e.charCodeAt(n++)|e.charCodeAt(n++)<<8|e.charCodeAt(n++)<<16|e.charCodeAt(n++)<<24;else for(r=0;16>r;++r)i[r]=e[n++]|e[n++]<<8|e[n++]<<16|e[n++]<<24;e=t.g[0],n=t.g[1],r=t.g[2];var s=t.g[3],o=e+(s^n&(r^s))+i[0]+3614090360&4294967295;o=(n=(r=(s=(e=(n=(r=(s=(e=(n=(r=(s=(e=(n=(r=(s=(e=(n=(r=(s=(e=(n=(r=(s=(e=(n=(r=(s=(e=(n=(r=(s=(e=(n=(r=(s=(e=(n=(r=(s=(e=(n=(r=(s=(e=(n=(r=(s=(e=(n=(r=(s=(e=(n=(r=(s=(e=(n=(r=(s=(e=n+(o<<7&4294967295|o>>>25))+((o=s+(r^e&(n^r))+i[1]+3905402710&4294967295)<<12&4294967295|o>>>20))+((o=r+(n^s&(e^n))+i[2]+606105819&4294967295)<<17&4294967295|o>>>15))+((o=n+(e^r&(s^e))+i[3]+3250441966&4294967295)<<22&4294967295|o>>>10))+((o=e+(s^n&(r^s))+i[4]+4118548399&4294967295)<<7&4294967295|o>>>25))+((o=s+(r^e&(n^r))+i[5]+1200080426&4294967295)<<12&4294967295|o>>>20))+((o=r+(n^s&(e^n))+i[6]+2821735955&4294967295)<<17&4294967295|o>>>15))+((o=n+(e^r&(s^e))+i[7]+4249261313&4294967295)<<22&4294967295|o>>>10))+((o=e+(s^n&(r^s))+i[8]+1770035416&4294967295)<<7&4294967295|o>>>25))+((o=s+(r^e&(n^r))+i[9]+2336552879&4294967295)<<12&4294967295|o>>>20))+((o=r+(n^s&(e^n))+i[10]+4294925233&4294967295)<<17&4294967295|o>>>15))+((o=n+(e^r&(s^e))+i[11]+2304563134&4294967295)<<22&4294967295|o>>>10))+((o=e+(s^n&(r^s))+i[12]+1804603682&4294967295)<<7&4294967295|o>>>25))+((o=s+(r^e&(n^r))+i[13]+4254626195&4294967295)<<12&4294967295|o>>>20))+((o=r+(n^s&(e^n))+i[14]+2792965006&4294967295)<<17&4294967295|o>>>15))+((o=n+(e^r&(s^e))+i[15]+1236535329&4294967295)<<22&4294967295|o>>>10))+((o=e+(r^s&(n^r))+i[1]+4129170786&4294967295)<<5&4294967295|o>>>27))+((o=s+(n^r&(e^n))+i[6]+3225465664&4294967295)<<9&4294967295|o>>>23))+((o=r+(e^n&(s^e))+i[11]+643717713&4294967295)<<14&4294967295|o>>>18))+((o=n+(s^e&(r^s))+i[0]+3921069994&4294967295)<<20&4294967295|o>>>12))+((o=e+(r^s&(n^r))+i[5]+3593408605&4294967295)<<5&4294967295|o>>>27))+((o=s+(n^r&(e^n))+i[10]+38016083&4294967295)<<9&4294967295|o>>>23))+((o=r+(e^n&(s^e))+i[15]+3634488961&4294967295)<<14&4294967295|o>>>18))+((o=n+(s^e&(r^s))+i[4]+3889429448&4294967295)<<20&4294967295|o>>>12))+((o=e+(r^s&(n^r))+i[9]+568446438&4294967295)<<5&4294967295|o>>>27))+((o=s+(n^r&(e^n))+i[14]+3275163606&4294967295)<<9&4294967295|o>>>23))+((o=r+(e^n&(s^e))+i[3]+4107603335&4294967295)<<14&4294967295|o>>>18))+((o=n+(s^e&(r^s))+i[8]+1163531501&4294967295)<<20&4294967295|o>>>12))+((o=e+(r^s&(n^r))+i[13]+2850285829&4294967295)<<5&4294967295|o>>>27))+((o=s+(n^r&(e^n))+i[2]+4243563512&4294967295)<<9&4294967295|o>>>23))+((o=r+(e^n&(s^e))+i[7]+1735328473&4294967295)<<14&4294967295|o>>>18))+((o=n+(s^e&(r^s))+i[12]+2368359562&4294967295)<<20&4294967295|o>>>12))+((o=e+(n^r^s)+i[5]+4294588738&4294967295)<<4&4294967295|o>>>28))+((o=s+(e^n^r)+i[8]+2272392833&4294967295)<<11&4294967295|o>>>21))+((o=r+(s^e^n)+i[11]+1839030562&4294967295)<<16&4294967295|o>>>16))+((o=n+(r^s^e)+i[14]+4259657740&4294967295)<<23&4294967295|o>>>9))+((o=e+(n^r^s)+i[1]+2763975236&4294967295)<<4&4294967295|o>>>28))+((o=s+(e^n^r)+i[4]+1272893353&4294967295)<<11&4294967295|o>>>21))+((o=r+(s^e^n)+i[7]+4139469664&4294967295)<<16&4294967295|o>>>16))+((o=n+(r^s^e)+i[10]+3200236656&4294967295)<<23&4294967295|o>>>9))+((o=e+(n^r^s)+i[13]+681279174&4294967295)<<4&4294967295|o>>>28))+((o=s+(e^n^r)+i[0]+3936430074&4294967295)<<11&4294967295|o>>>21))+((o=r+(s^e^n)+i[3]+3572445317&4294967295)<<16&4294967295|o>>>16))+((o=n+(r^s^e)+i[6]+76029189&4294967295)<<23&4294967295|o>>>9))+((o=e+(n^r^s)+i[9]+3654602809&4294967295)<<4&4294967295|o>>>28))+((o=s+(e^n^r)+i[12]+3873151461&4294967295)<<11&4294967295|o>>>21))+((o=r+(s^e^n)+i[15]+530742520&4294967295)<<16&4294967295|o>>>16))+((o=n+(r^s^e)+i[2]+3299628645&4294967295)<<23&4294967295|o>>>9))+((o=e+(r^(n|~s))+i[0]+4096336452&4294967295)<<6&4294967295|o>>>26))+((o=s+(n^(e|~r))+i[7]+1126891415&4294967295)<<10&4294967295|o>>>22))+((o=r+(e^(s|~n))+i[14]+2878612391&4294967295)<<15&4294967295|o>>>17))+((o=n+(s^(r|~e))+i[5]+4237533241&4294967295)<<21&4294967295|o>>>11))+((o=e+(r^(n|~s))+i[12]+1700485571&4294967295)<<6&4294967295|o>>>26))+((o=s+(n^(e|~r))+i[3]+2399980690&4294967295)<<10&4294967295|o>>>22))+((o=r+(e^(s|~n))+i[10]+4293915773&4294967295)<<15&4294967295|o>>>17))+((o=n+(s^(r|~e))+i[1]+2240044497&4294967295)<<21&4294967295|o>>>11))+((o=e+(r^(n|~s))+i[8]+1873313359&4294967295)<<6&4294967295|o>>>26))+((o=s+(n^(e|~r))+i[15]+4264355552&4294967295)<<10&4294967295|o>>>22))+((o=r+(e^(s|~n))+i[6]+2734768916&4294967295)<<15&4294967295|o>>>17))+((o=n+(s^(r|~e))+i[13]+1309151649&4294967295)<<21&4294967295|o>>>11))+((s=(e=n+((o=e+(r^(n|~s))+i[4]+4149444226&4294967295)<<6&4294967295|o>>>26))+((o=s+(n^(e|~r))+i[11]+3174756917&4294967295)<<10&4294967295|o>>>22))^((r=s+((o=r+(e^(s|~n))+i[2]+718787259&4294967295)<<15&4294967295|o>>>17))|~e))+i[9]+3951481745&4294967295,t.g[0]=t.g[0]+e&4294967295,t.g[1]=t.g[1]+(r+(o<<21&4294967295|o>>>11))&4294967295,t.g[2]=t.g[2]+r&4294967295,t.g[3]=t.g[3]+s&4294967295}function i(t,e){this.h=e;for(var n=[],i=!0,r=t.length-1;0<=r;r--){var s=0|t[r];i&&s==e||(n[r]=s,i=!1)}this.g=n}!function(t,e){function n(){}n.prototype=e.prototype,t.D=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.C=function(t,n,i){for(var r=Array(arguments.length-2),s=2;s<arguments.length;s++)r[s-2]=arguments[s];return e.prototype[n].apply(t,r)}}(e,(function(){this.blockSize=-1})),e.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0},e.prototype.u=function(t,e){void 0===e&&(e=t.length);for(var i=e-this.blockSize,r=this.B,s=this.h,o=0;o<e;){if(0==s)for(;o<=i;)n(this,t,o),o+=this.blockSize;if("string"==typeof t){for(;o<e;)if(r[s++]=t.charCodeAt(o++),s==this.blockSize){n(this,r),s=0;break}}else for(;o<e;)if(r[s++]=t[o++],s==this.blockSize){n(this,r),s=0;break}}this.h=s,this.o+=e},e.prototype.v=function(){var t=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);t[0]=128;for(var e=1;e<t.length-8;++e)t[e]=0;var n=8*this.o;for(e=t.length-8;e<t.length;++e)t[e]=255&n,n/=256;for(this.u(t),t=Array(16),e=n=0;4>e;++e)for(var i=0;32>i;i+=8)t[n++]=this.g[e]>>>i&255;return t};var r={};function s(t){return-128<=t&&128>t?function(t,e){var n=r;return Object.prototype.hasOwnProperty.call(n,t)?n[t]:n[t]=e(t)}(t,(function(t){return new i([0|t],0>t?-1:0)})):new i([0|t],0>t?-1:0)}function o(t){if(isNaN(t)||!isFinite(t))return a;if(0>t)return f(o(-t));for(var e=[],n=1,r=0;t>=n;r++)e[r]=t/n|0,n*=4294967296;return new i(e,0)}var a=s(0),h=s(1),l=s(16777216);function c(t){if(0!=t.h)return!1;for(var e=0;e<t.g.length;e++)if(0!=t.g[e])return!1;return!0}function u(t){return-1==t.h}function f(t){for(var e=t.g.length,n=[],r=0;r<e;r++)n[r]=~t.g[r];return new i(n,~t.h).add(h)}function d(t,e){return t.add(f(e))}function p(t,e){for(;(65535&t[e])!=t[e];)t[e+1]+=t[e]>>>16,t[e]&=65535,e++}function g(t,e){this.g=t,this.h=e}function m(t,e){if(c(e))throw Error("division by zero");if(c(t))return new g(a,a);if(u(t))return e=m(f(t),e),new g(f(e.g),f(e.h));if(u(e))return e=m(t,f(e)),new g(f(e.g),e.h);if(30<t.g.length){if(u(t)||u(e))throw Error("slowDivide_ only works with positive integers.");for(var n=h,i=e;0>=i.l(t);)n=y(n),i=y(i);var r=v(n,1),s=v(i,1);for(i=v(i,2),n=v(n,2);!c(i);){var l=s.add(i);0>=l.l(t)&&(r=r.add(n),s=l),i=v(i,1),n=v(n,1)}return e=d(t,r.j(e)),new g(r,e)}for(r=a;0<=t.l(e);){for(n=Math.max(1,Math.floor(t.m()/e.m())),i=48>=(i=Math.ceil(Math.log(n)/Math.LN2))?1:Math.pow(2,i-48),l=(s=o(n)).j(e);u(l)||0<l.l(t);)l=(s=o(n-=i)).j(e);c(s)&&(s=h),r=r.add(s),t=d(t,l)}return new g(r,t)}function y(t){for(var e=t.g.length+1,n=[],r=0;r<e;r++)n[r]=t.i(r)<<1|t.i(r-1)>>>31;return new i(n,t.h)}function v(t,e){var n=e>>5;e%=32;for(var r=t.g.length-n,s=[],o=0;o<r;o++)s[o]=0<e?t.i(o+n)>>>e|t.i(o+n+1)<<32-e:t.i(o+n);return new i(s,t.h)}(t=i.prototype).m=function(){if(u(this))return-f(this).m();for(var t=0,e=1,n=0;n<this.g.length;n++){var i=this.i(n);t+=(0<=i?i:4294967296+i)*e,e*=4294967296}return t},t.toString=function(t){if(2>(t=t||10)||36<t)throw Error("radix out of range: "+t);if(c(this))return"0";if(u(this))return"-"+f(this).toString(t);for(var e=o(Math.pow(t,6)),n=this,i="";;){var r=m(n,e).g,s=((0<(n=d(n,r.j(e))).g.length?n.g[0]:n.h)>>>0).toString(t);if(c(n=r))return s+i;for(;6>s.length;)s="0"+s;i=s+i}},t.i=function(t){return 0>t?0:t<this.g.length?this.g[t]:this.h},t.l=function(t){return u(t=d(this,t))?-1:c(t)?0:1},t.abs=function(){return u(this)?f(this):this},t.add=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0,s=0;s<=e;s++){var o=r+(65535&this.i(s))+(65535&t.i(s)),a=(o>>>16)+(this.i(s)>>>16)+(t.i(s)>>>16);r=a>>>16,o&=65535,a&=65535,n[s]=a<<16|o}return new i(n,-2147483648&n[n.length-1]?-1:0)},t.j=function(t){if(c(this)||c(t))return a;if(u(this))return u(t)?f(this).j(f(t)):f(f(this).j(t));if(u(t))return f(this.j(f(t)));if(0>this.l(l)&&0>t.l(l))return o(this.m()*t.m());for(var e=this.g.length+t.g.length,n=[],r=0;r<2*e;r++)n[r]=0;for(r=0;r<this.g.length;r++)for(var s=0;s<t.g.length;s++){var h=this.i(r)>>>16,d=65535&this.i(r),g=t.i(s)>>>16,m=65535&t.i(s);n[2*r+2*s]+=d*m,p(n,2*r+2*s),n[2*r+2*s+1]+=h*m,p(n,2*r+2*s+1),n[2*r+2*s+1]+=d*g,p(n,2*r+2*s+1),n[2*r+2*s+2]+=h*g,p(n,2*r+2*s+2)}for(r=0;r<e;r++)n[r]=n[2*r+1]<<16|n[2*r];for(r=e;r<2*e;r++)n[r]=0;return new i(n,0)},t.A=function(t){return m(this,t).h},t.and=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.i(r)&t.i(r);return new i(n,this.h&t.h)},t.or=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.i(r)|t.i(r);return new i(n,this.h|t.h)},t.xor=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.i(r)^t.i(r);return new i(n,this.h^t.h)},e.prototype.digest=e.prototype.v,e.prototype.reset=e.prototype.s,e.prototype.update=e.prototype.u,i.prototype.add=i.prototype.add,i.prototype.multiply=i.prototype.j,i.prototype.modulo=i.prototype.A,i.prototype.compare=i.prototype.l,i.prototype.toNumber=i.prototype.m,i.prototype.toString=i.prototype.toString,i.prototype.getBits=i.prototype.i,i.fromNumber=o,i.fromString=function t(e,n){if(0==e.length)throw Error("number format error: empty string");if(2>(n=n||10)||36<n)throw Error("radix out of range: "+n);if("-"==e.charAt(0))return f(t(e.substring(1),n));if(0<=e.indexOf("-"))throw Error('number format error: interior "-" character');for(var i=o(Math.pow(n,8)),r=a,s=0;s<e.length;s+=8){var h=Math.min(8,e.length-s),l=parseInt(e.substring(s,s+h),n);8>h?(h=o(Math.pow(n,h)),r=r.j(h).add(o(l))):r=(r=r.j(i)).add(o(l))}return r},vt=i}).apply(void 0!==wt?wt:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{});var Et,bt,_t,Tt,It,St,At,Ct,Dt,Nt="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};
/** @license
    Copyright The Closure Library Authors.
    SPDX-License-Identifier: Apache-2.0
    */(function(){var t,e="function"==typeof Object.defineProperties?Object.defineProperty:function(t,e,n){return t==Array.prototype||t==Object.prototype||(t[e]=n.value),t};var n=function(t){t=["object"==typeof globalThis&&globalThis,t,"object"==typeof window&&window,"object"==typeof self&&self,"object"==typeof Nt&&Nt];for(var e=0;e<t.length;++e){var n=t[e];if(n&&n.Math==Math)return n}throw Error("Cannot find global object")}(this);!function(t,i){if(i)t:{var r=n;t=t.split(".");for(var s=0;s<t.length-1;s++){var o=t[s];if(!(o in r))break t;r=r[o]}(i=i(s=r[t=t[t.length-1]]))!=s&&null!=i&&e(r,t,{configurable:!0,writable:!0,value:i})}}("Array.prototype.values",(function(t){return t||function(){return function(t,e){t instanceof String&&(t+="");var n=0,i=!1,r={next:function(){if(!i&&n<t.length){var r=n++;return{value:e(r,t[r]),done:!1}}return i=!0,{done:!0,value:void 0}}};return r[Symbol.iterator]=function(){return r},r}(this,(function(t,e){return e}))}}));
/** @license

     Copyright The Closure Library Authors.
     SPDX-License-Identifier: Apache-2.0
    */
var i=i||{},r=this||self;function s(t){var e=typeof t;return"array"==(e="object"!=e?e:t?Array.isArray(t)?"array":e:"null")||"object"==e&&"number"==typeof t.length}function o(t){var e=typeof t;return"object"==e&&null!=t||"function"==e}function a(t,e,n){return t.call.apply(t.bind,arguments)}function h(t,e,n){if(!t)throw Error();if(2<arguments.length){var i=Array.prototype.slice.call(arguments,2);return function(){var n=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(n,i),t.apply(e,n)}}return function(){return t.apply(e,arguments)}}function l(t,e,n){return(l=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?a:h).apply(null,arguments)}function c(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var e=n.slice();return e.push.apply(e,arguments),t.apply(this,e)}}function u(t,e){function n(){}n.prototype=e.prototype,t.aa=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.Qb=function(t,n,i){for(var r=Array(arguments.length-2),s=2;s<arguments.length;s++)r[s-2]=arguments[s];return e.prototype[n].apply(t,r)}}function f(t){const e=t.length;if(0<e){const n=Array(e);for(let i=0;i<e;i++)n[i]=t[i];return n}return[]}function d(t,e){for(let e=1;e<arguments.length;e++){const n=arguments[e];if(s(n)){const e=t.length||0,i=n.length||0;t.length=e+i;for(let r=0;r<i;r++)t[e+r]=n[r]}else t.push(n)}}function p(t){return/^[\s\xa0]*$/.test(t)}function g(){var t=r.navigator;return t&&(t=t.userAgent)?t:""}function m(t){return m[" "](t),t}m[" "]=function(){};var y=!(-1==g().indexOf("Gecko")||-1!=g().toLowerCase().indexOf("webkit")&&-1==g().indexOf("Edge")||-1!=g().indexOf("Trident")||-1!=g().indexOf("MSIE")||-1!=g().indexOf("Edge"));function v(t,e,n){for(const i in t)e.call(n,t[i],i,t)}function w(t){const e={};for(const n in t)e[n]=t[n];return e}const E="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function b(t,e){let n,i;for(let e=1;e<arguments.length;e++){for(n in i=arguments[e],i)t[n]=i[n];for(let e=0;e<E.length;e++)n=E[e],Object.prototype.hasOwnProperty.call(i,n)&&(t[n]=i[n])}}function _(t){var e=1;t=t.split(":");const n=[];for(;0<e&&t.length;)n.push(t.shift()),e--;return t.length&&n.push(t.join(":")),n}function T(t){r.setTimeout((()=>{throw t}),0)}function I(){var t=N;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}var S=new class{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}((()=>new A),(t=>t.reset()));class A{constructor(){this.next=this.g=this.h=null}set(t,e){this.h=t,this.g=e,this.next=null}reset(){this.next=this.g=this.h=null}}let C,D=!1,N=new class{constructor(){this.h=this.g=null}add(t,e){const n=S.get();n.set(t,e),this.h?this.h.next=n:this.g=n,this.h=n}},k=()=>{const t=r.Promise.resolve(void 0);C=()=>{t.then(R)}};var R=()=>{for(var t;t=I();){try{t.h.call(t.g)}catch(t){T(t)}var e=S;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}D=!1};function O(){this.s=this.s,this.C=this.C}function x(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}O.prototype.s=!1,O.prototype.ma=function(){this.s||(this.s=!0,this.N())},O.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()},x.prototype.h=function(){this.defaultPrevented=!0};var L=function(){if(!r.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{const t=()=>{};r.addEventListener("test",t,e),r.removeEventListener("test",t,e)}catch(t){}return t}();function M(t,e){if(x.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,i=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(y){t:{try{m(e.nodeName);var r=!0;break t}catch(t){}r=!1}r||(e=null)}}else"mouseover"==n?e=t.fromElement:"mouseout"==n&&(e=t.toElement);this.relatedTarget=e,i?(this.clientX=void 0!==i.clientX?i.clientX:i.pageX,this.clientY=void 0!==i.clientY?i.clientY:i.pageY,this.screenX=i.screenX||0,this.screenY=i.screenY||0):(this.clientX=void 0!==t.clientX?t.clientX:t.pageX,this.clientY=void 0!==t.clientY?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType="string"==typeof t.pointerType?t.pointerType:P[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&M.aa.h.call(this)}}u(M,x);var P={2:"touch",3:"pen",4:"mouse"};M.prototype.h=function(){M.aa.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var F="closure_listenable_"+(1e6*Math.random()|0),V=0;function U(t,e,n,i,r){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!i,this.ha=r,this.key=++V,this.da=this.fa=!1}function B(t){t.da=!0,t.listener=null,t.proxy=null,t.src=null,t.ha=null}function j(t){this.src=t,this.g={},this.h=0}function z(t,e){var n=e.type;if(n in t.g){var i,r=t.g[n],s=Array.prototype.indexOf.call(r,e,void 0);(i=0<=s)&&Array.prototype.splice.call(r,s,1),i&&(B(e),0==t.g[n].length&&(delete t.g[n],t.h--))}}function q(t,e,n,i){for(var r=0;r<t.length;++r){var s=t[r];if(!s.da&&s.listener==e&&s.capture==!!n&&s.ha==i)return r}return-1}j.prototype.add=function(t,e,n,i,r){var s=t.toString();(t=this.g[s])||(t=this.g[s]=[],this.h++);var o=q(t,e,i,r);return-1<o?(e=t[o],n||(e.fa=!1)):((e=new U(e,this.src,s,!!i,r)).fa=n,t.push(e)),e};var H="closure_lm_"+(1e6*Math.random()|0),G={};function K(t,e,n,i,r){if(i&&i.once)return W(t,e,n,i,r);if(Array.isArray(e)){for(var s=0;s<e.length;s++)K(t,e[s],n,i,r);return null}return n=nt(n),t&&t[F]?t.K(e,n,o(i)?!!i.capture:!!i,r):Q(t,e,n,!1,i,r)}function Q(t,e,n,i,r,s){if(!e)throw Error("Invalid event type");var a=o(r)?!!r.capture:!!r,h=tt(t);if(h||(t[H]=h=new j(t)),(n=h.add(e,n,i,a,s)).proxy)return n;if(i=function(){function t(n){return e.call(t.src,t.listener,n)}const e=Z;return t}(),n.proxy=i,i.src=t,i.listener=n,t.addEventListener)L||(r=a),void 0===r&&(r=!1),t.addEventListener(e.toString(),i,r);else if(t.attachEvent)t.attachEvent(J(e.toString()),i);else{if(!t.addListener||!t.removeListener)throw Error("addEventListener and attachEvent are unavailable.");t.addListener(i)}return n}function W(t,e,n,i,r){if(Array.isArray(e)){for(var s=0;s<e.length;s++)W(t,e[s],n,i,r);return null}return n=nt(n),t&&t[F]?t.L(e,n,o(i)?!!i.capture:!!i,r):Q(t,e,n,!0,i,r)}function X(t,e,n,i,r){if(Array.isArray(e))for(var s=0;s<e.length;s++)X(t,e[s],n,i,r);else i=o(i)?!!i.capture:!!i,n=nt(n),t&&t[F]?(t=t.i,(e=String(e).toString())in t.g&&(-1<(n=q(s=t.g[e],n,i,r))&&(B(s[n]),Array.prototype.splice.call(s,n,1),0==s.length&&(delete t.g[e],t.h--)))):t&&(t=tt(t))&&(e=t.g[e.toString()],t=-1,e&&(t=q(e,n,i,r)),(n=-1<t?e[t]:null)&&Y(n))}function Y(t){if("number"!=typeof t&&t&&!t.da){var e=t.src;if(e&&e[F])z(e.i,t);else{var n=t.type,i=t.proxy;e.removeEventListener?e.removeEventListener(n,i,t.capture):e.detachEvent?e.detachEvent(J(n),i):e.addListener&&e.removeListener&&e.removeListener(i),(n=tt(e))?(z(n,t),0==n.h&&(n.src=null,e[H]=null)):B(t)}}}function J(t){return t in G?G[t]:G[t]="on"+t}function Z(t,e){if(t.da)t=!0;else{e=new M(e,this);var n=t.listener,i=t.ha||t.src;t.fa&&Y(t),t=n.call(i,e)}return t}function tt(t){return(t=t[H])instanceof j?t:null}var et="__closure_events_fn_"+(1e9*Math.random()>>>0);function nt(t){return"function"==typeof t?t:(t[et]||(t[et]=function(e){return t.handleEvent(e)}),t[et])}function it(){O.call(this),this.i=new j(this),this.M=this,this.F=null}function rt(t,e){var n,i=t.F;if(i)for(n=[];i;i=i.F)n.push(i);if(t=t.M,i=e.type||e,"string"==typeof e)e=new x(e,t);else if(e instanceof x)e.target=e.target||t;else{var r=e;b(e=new x(i,t),r)}if(r=!0,n)for(var s=n.length-1;0<=s;s--){var o=e.g=n[s];r=st(o,i,!0,e)&&r}if(r=st(o=e.g=t,i,!0,e)&&r,r=st(o,i,!1,e)&&r,n)for(s=0;s<n.length;s++)r=st(o=e.g=n[s],i,!1,e)&&r}function st(t,e,n,i){if(!(e=t.i.g[String(e)]))return!0;e=e.concat();for(var r=!0,s=0;s<e.length;++s){var o=e[s];if(o&&!o.da&&o.capture==n){var a=o.listener,h=o.ha||o.src;o.fa&&z(t.i,o),r=!1!==a.call(h,i)&&r}}return r&&!i.defaultPrevented}function ot(t,e,n){if("function"==typeof t)n&&(t=l(t,n));else{if(!t||"function"!=typeof t.handleEvent)throw Error("Invalid listener argument");t=l(t.handleEvent,t)}return 2147483647<Number(e)?-1:r.setTimeout(t,e||0)}function at(t){t.g=ot((()=>{t.g=null,t.i&&(t.i=!1,at(t))}),t.l);const e=t.h;t.h=null,t.m.apply(null,e)}u(it,O),it.prototype[F]=!0,it.prototype.removeEventListener=function(t,e,n,i){X(this,t,e,n,i)},it.prototype.N=function(){if(it.aa.N.call(this),this.i){var t,e=this.i;for(t in e.g){for(var n=e.g[t],i=0;i<n.length;i++)B(n[i]);delete e.g[t],e.h--}}this.F=null},it.prototype.K=function(t,e,n,i){return this.i.add(String(t),e,!1,n,i)},it.prototype.L=function(t,e,n,i){return this.i.add(String(t),e,!0,n,i)};class ht extends O{constructor(t,e){super(),this.m=t,this.l=e,this.h=null,this.i=!1,this.g=null}j(t){this.h=arguments,this.g?this.i=!0:at(this)}N(){super.N(),this.g&&(r.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function lt(t){O.call(this),this.h=t,this.g={}}u(lt,O);var ct=[];function ut(t){v(t.g,(function(t,e){this.g.hasOwnProperty(e)&&Y(t)}),t),t.g={}}lt.prototype.N=function(){lt.aa.N.call(this),ut(this)},lt.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var ft=r.JSON.stringify,dt=r.JSON.parse,pt=class{stringify(t){return r.JSON.stringify(t,void 0)}parse(t){return r.JSON.parse(t,void 0)}};function gt(){}function mt(t){return t.h||(t.h=t.i())}function yt(){}gt.prototype.h=null;var vt={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function wt(){x.call(this,"d")}function kt(){x.call(this,"c")}u(wt,x),u(kt,x);var Rt={},Ot=null;function xt(){return Ot=Ot||new it}function Lt(t){x.call(this,Rt.La,t)}function Mt(t){const e=xt();rt(e,new Lt(e))}function Pt(t,e){x.call(this,Rt.STAT_EVENT,t),this.stat=e}function Ft(t){const e=xt();rt(e,new Pt(e,t))}function Vt(t,e){x.call(this,Rt.Ma,t),this.size=e}function Ut(t,e){if("function"!=typeof t)throw Error("Fn must not be null and must be a function");return r.setTimeout((function(){t()}),e)}function Bt(){this.g=!0}function jt(t,e,n,i){t.info((function(){return"XMLHTTP TEXT ("+e+"): "+function(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n)for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var i=n[t];if(!(2>i.length)){var r=i[1];if(Array.isArray(r)&&!(1>r.length)){var s=r[0];if("noop"!=s&&"stop"!=s&&"close"!=s)for(var o=1;o<r.length;o++)r[o]=""}}}return ft(n)}catch(t){return e}}(t,n)+(i?" "+i:"")}))}Rt.La="serverreachability",u(Lt,x),Rt.STAT_EVENT="statevent",u(Pt,x),Rt.Ma="timingevent",u(Vt,x),Bt.prototype.xa=function(){this.g=!1},Bt.prototype.info=function(){};var $t,zt={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},qt={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"};function Ht(){}function Gt(t,e,n,i){this.j=t,this.i=e,this.l=n,this.R=i||1,this.U=new lt(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Kt}function Kt(){this.i=null,this.g="",this.h=!1}u(Ht,gt),Ht.prototype.g=function(){return new XMLHttpRequest},Ht.prototype.i=function(){return{}},$t=new Ht;var Qt={},Wt={};function Xt(t,e,n){t.L=1,t.v=_e(ye(e)),t.m=n,t.P=!0,Yt(t,null)}function Yt(t,e){t.F=Date.now(),te(t),t.A=ye(t.v);var n=t.A,i=t.R;Array.isArray(i)||(i=[String(i)]),Pe(n.i,"t",i),t.C=0,n=t.j.J,t.h=new Kt,t.g=In(t.j,n?e:null,!t.m),0<t.O&&(t.M=new ht(l(t.Y,t,t.g),t.O)),e=t.U,n=t.g,i=t.ca;var r="readystatechange";Array.isArray(r)||(r&&(ct[0]=r.toString()),r=ct);for(var s=0;s<r.length;s++){var o=K(n,r[s],i||e.handleEvent,!1,e.h||e);if(!o)break;e.g[o.key]=o}e=t.H?w(t.H):{},t.m?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ea(t.A,t.u,t.m,e)):(t.u="GET",t.g.ea(t.A,t.u,null,e)),Mt(),function(t,e,n,i,r,s){t.info((function(){if(t.g)if(s)for(var o="",a=s.split("&"),h=0;h<a.length;h++){var l=a[h].split("=");if(1<l.length){var c=l[0];l=l[1];var u=c.split("_");o=2<=u.length&&"type"==u[1]?o+(c+"=")+l+"&":o+(c+"=redacted&")}}else o=null;else o=s;return"XMLHTTP REQ ("+i+") [attempt "+r+"]: "+e+"\n"+n+"\n"+o}))}(t.i,t.u,t.A,t.l,t.R,t.m)}function Jt(t){return!!t.g&&("GET"==t.u&&2!=t.L&&t.j.Ca)}function Zt(t,e){var n=t.C,i=e.indexOf("\n",n);return-1==i?Wt:(n=Number(e.substring(n,i)),isNaN(n)?Qt:(i+=1)+n>e.length?Wt:(e=e.slice(i,i+n),t.C=i+n,e))}function te(t){t.S=Date.now()+t.I,ee(t,t.I)}function ee(t,e){if(null!=t.B)throw Error("WatchDog timer not null");t.B=Ut(l(t.ba,t),e)}function ne(t){t.B&&(r.clearTimeout(t.B),t.B=null)}function ie(t){0==t.j.G||t.J||wn(t.j,t)}function re(t){ne(t);var e=t.M;e&&"function"==typeof e.ma&&e.ma(),t.M=null,ut(t.U),t.g&&(e=t.g,t.g=null,e.abort(),e.ma())}function se(t,e){try{var n=t.j;if(0!=n.G&&(n.g==t||ce(n.h,t)))if(!t.K&&ce(n.h,t)&&3==n.G){try{var i=n.Da.g.parse(e)}catch(t){i=null}if(Array.isArray(i)&&3==i.length){var r=i;if(0==r[0]){t:if(!n.u){if(n.g){if(!(n.g.F+3e3<t.F))break t;vn(n),hn(n)}gn(n),Ft(18)}}else n.za=r[1],0<n.za-n.T&&37500>r[2]&&n.F&&0==n.v&&!n.C&&(n.C=Ut(l(n.Za,n),6e3));if(1>=le(n.h)&&n.ca){try{n.ca()}catch(t){}n.ca=void 0}}else bn(n,11)}else if((t.K||n.g==t)&&vn(n),!p(e))for(r=n.Da.g.parse(e),e=0;e<r.length;e++){let l=r[e];if(n.T=l[0],l=l[1],2==n.G)if("c"==l[0]){n.K=l[1],n.ia=l[2];const e=l[3];null!=e&&(n.la=e,n.j.info("VER="+n.la));const r=l[4];null!=r&&(n.Aa=r,n.j.info("SVER="+n.Aa));const c=l[5];null!=c&&"number"==typeof c&&0<c&&(i=1.5*c,n.L=i,n.j.info("backChannelRequestTimeoutMs_="+i)),i=n;const u=t.g;if(u){const t=u.g?u.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(t){var s=i.h;s.g||-1==t.indexOf("spdy")&&-1==t.indexOf("quic")&&-1==t.indexOf("h2")||(s.j=s.l,s.g=new Set,s.h&&(ue(s,s.h),s.h=null))}if(i.D){const t=u.g?u.g.getResponseHeader("X-HTTP-Session-Id"):null;t&&(i.ya=t,be(i.I,i.D,t))}}n.G=3,n.l&&n.l.ua(),n.ba&&(n.R=Date.now()-t.F,n.j.info("Handshake RTT: "+n.R+"ms"));var o=t;if((i=n).qa=Tn(i,i.J?i.ia:null,i.W),o.K){fe(i.h,o);var a=o,h=i.L;h&&(a.I=h),a.B&&(ne(a),te(a)),i.g=o}else pn(i);0<n.i.length&&cn(n)}else"stop"!=l[0]&&"close"!=l[0]||bn(n,7);else 3==n.G&&("stop"==l[0]||"close"==l[0]?"stop"==l[0]?bn(n,7):an(n):"noop"!=l[0]&&n.l&&n.l.ta(l),n.v=0)}Mt()}catch(t){}}Gt.prototype.ca=function(t){t=t.target;const e=this.M;e&&3==nn(t)?e.j():this.Y(t)},Gt.prototype.Y=function(t){try{if(t==this.g)t:{const f=nn(this.g);var e=this.g.Ba();this.g.Z();if(!(3>f)&&(3!=f||this.g&&(this.h.h||this.g.oa()||rn(this.g)))){this.J||4!=f||7==e||Mt(),ne(this);var n=this.g.Z();this.X=n;e:if(Jt(this)){var i=rn(this.g);t="";var s=i.length,o=4==nn(this.g);if(!this.h.i){if("undefined"==typeof TextDecoder){re(this),ie(this);var a="";break e}this.h.i=new r.TextDecoder}for(e=0;e<s;e++)this.h.h=!0,t+=this.h.i.decode(i[e],{stream:!(o&&e==s-1)});i.length=0,this.h.g+=t,this.C=0,a=this.h.g}else a=this.g.oa();if(this.o=200==n,function(t,e,n,i,r,s,o){t.info((function(){return"XMLHTTP RESP ("+i+") [ attempt "+r+"]: "+e+"\n"+n+"\n"+s+" "+o}))}(this.i,this.u,this.A,this.l,this.R,f,n),this.o){if(this.T&&!this.K){e:{if(this.g){var h,l=this.g;if((h=l.g?l.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!p(h)){var c=h;break e}}c=null}if(!(n=c)){this.o=!1,this.s=3,Ft(12),re(this),ie(this);break t}jt(this.i,this.l,n,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,se(this,n)}if(this.P){let t;for(n=!0;!this.J&&this.C<a.length;){if(t=Zt(this,a),t==Wt){4==f&&(this.s=4,Ft(14),n=!1),jt(this.i,this.l,null,"[Incomplete Response]");break}if(t==Qt){this.s=4,Ft(15),jt(this.i,this.l,a,"[Invalid Chunk]"),n=!1;break}jt(this.i,this.l,t,null),se(this,t)}if(Jt(this)&&0!=this.C&&(this.h.g=this.h.g.slice(this.C),this.C=0),4!=f||0!=a.length||this.h.h||(this.s=1,Ft(16),n=!1),this.o=this.o&&n,n){if(0<a.length&&!this.W){this.W=!0;var u=this.j;u.g==this&&u.ba&&!u.M&&(u.j.info("Great, no buffering proxy detected. Bytes received: "+a.length),mn(u),u.M=!0,Ft(11))}}else jt(this.i,this.l,a,"[Invalid Chunked Response]"),re(this),ie(this)}else jt(this.i,this.l,a,null),se(this,a);4==f&&re(this),this.o&&!this.J&&(4==f?wn(this.j,this):(this.o=!1,te(this)))}else(function(t){const e={};t=(t.g&&2<=nn(t)&&t.g.getAllResponseHeaders()||"").split("\r\n");for(let i=0;i<t.length;i++){if(p(t[i]))continue;var n=_(t[i]);const r=n[0];if("string"!=typeof(n=n[1]))continue;n=n.trim();const s=e[r]||[];e[r]=s,s.push(n)}!function(t,e){for(const n in t)e.call(void 0,t[n],n,t)}(e,(function(t){return t.join(", ")}))})(this.g),400==n&&0<a.indexOf("Unknown SID")?(this.s=3,Ft(12)):(this.s=0,Ft(13)),re(this),ie(this)}}}catch(t){}},Gt.prototype.cancel=function(){this.J=!0,re(this)},Gt.prototype.ba=function(){this.B=null;const t=Date.now();0<=t-this.S?(function(t,e){t.info((function(){return"TIMEOUT: "+e}))}(this.i,this.A),2!=this.L&&(Mt(),Ft(17)),re(this),this.s=2,ie(this)):ee(this,this.S-t)};var oe=class{constructor(t,e){this.g=t,this.map=e}};function ae(t){this.l=t||10,r.PerformanceNavigationTiming?t=0<(t=r.performance.getEntriesByType("navigation")).length&&("hq"==t[0].nextHopProtocol||"h2"==t[0].nextHopProtocol):t=!!(r.chrome&&r.chrome.loadTimes&&r.chrome.loadTimes()&&r.chrome.loadTimes().wasFetchedViaSpdy),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function he(t){return!!t.h||!!t.g&&t.g.size>=t.j}function le(t){return t.h?1:t.g?t.g.size:0}function ce(t,e){return t.h?t.h==e:!!t.g&&t.g.has(e)}function ue(t,e){t.g?t.g.add(e):t.h=e}function fe(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}function de(t){if(null!=t.h)return t.i.concat(t.h.D);if(null!=t.g&&0!==t.g.size){let e=t.i;for(const n of t.g.values())e=e.concat(n.D);return e}return f(t.i)}function pe(t,e){if(t.forEach&&"function"==typeof t.forEach)t.forEach(e,void 0);else if(s(t)||"string"==typeof t)Array.prototype.forEach.call(t,e,void 0);else for(var n=function(t){if(t.na&&"function"==typeof t.na)return t.na();if(!t.V||"function"!=typeof t.V){if("undefined"!=typeof Map&&t instanceof Map)return Array.from(t.keys());if(!("undefined"!=typeof Set&&t instanceof Set)){if(s(t)||"string"==typeof t){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const i in t)e[n++]=i;return e}}}(t),i=function(t){if(t.V&&"function"==typeof t.V)return t.V();if("undefined"!=typeof Map&&t instanceof Map||"undefined"!=typeof Set&&t instanceof Set)return Array.from(t.values());if("string"==typeof t)return t.split("");if(s(t)){for(var e=[],n=t.length,i=0;i<n;i++)e.push(t[i]);return e}for(i in e=[],n=0,t)e[n++]=t[i];return e}(t),r=i.length,o=0;o<r;o++)e.call(void 0,i[o],n&&n[o],t)}ae.prototype.cancel=function(){if(this.i=de(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&0!==this.g.size){for(const t of this.g.values())t.cancel();this.g.clear()}};var ge=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function me(t){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,t instanceof me){this.h=t.h,ve(this,t.j),this.o=t.o,this.g=t.g,we(this,t.s),this.l=t.l;var e=t.i,n=new Oe;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),Ee(this,n),this.m=t.m}else t&&(e=String(t).match(ge))?(this.h=!1,ve(this,e[1]||"",!0),this.o=Te(e[2]||""),this.g=Te(e[3]||"",!0),we(this,e[4]),this.l=Te(e[5]||"",!0),Ee(this,e[6]||"",!0),this.m=Te(e[7]||"")):(this.h=!1,this.i=new Oe(null,this.h))}function ye(t){return new me(t)}function ve(t,e,n){t.j=n?Te(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function we(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.s=e}else t.s=null}function Ee(t,e,n){e instanceof Oe?(t.i=e,function(t,e){e&&!t.j&&(xe(t),t.i=null,t.g.forEach((function(t,e){var n=e.toLowerCase();e!=n&&(Le(this,e),Pe(this,n,t))}),t)),t.j=e}(t.i,t.h)):(n||(e=Ie(e,ke)),t.i=new Oe(e,t.h))}function be(t,e,n){t.i.set(e,n)}function _e(t){return be(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function Te(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function Ie(t,e,n){return"string"==typeof t?(t=encodeURI(t).replace(e,Se),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function Se(t){return"%"+((t=t.charCodeAt(0))>>4&15).toString(16)+(15&t).toString(16)}me.prototype.toString=function(){var t=[],e=this.j;e&&t.push(Ie(e,Ce,!0),":");var n=this.g;return(n||"file"==e)&&(t.push("//"),(e=this.o)&&t.push(Ie(e,Ce,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),null!=(n=this.s)&&t.push(":",String(n))),(n=this.l)&&(this.g&&"/"!=n.charAt(0)&&t.push("/"),t.push(Ie(n,"/"==n.charAt(0)?Ne:De,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.m)&&t.push("#",Ie(n,Re)),t.join("")};var Ae,Ce=/[#\/\?@]/g,De=/[#\?:]/g,Ne=/[#\?]/g,ke=/[#\?@]/g,Re=/#/g;function Oe(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function xe(t){t.g||(t.g=new Map,t.h=0,t.i&&function(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var i=t[n].indexOf("="),r=null;if(0<=i){var s=t[n].substring(0,i);r=t[n].substring(i+1)}else s=t[n];e(s,r?decodeURIComponent(r.replace(/\+/g," ")):"")}}}(t.i,(function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)})))}function Le(t,e){xe(t),e=Fe(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function Me(t,e){return xe(t),e=Fe(t,e),t.g.has(e)}function Pe(t,e,n){Le(t,e),0<n.length&&(t.i=null,t.g.set(Fe(t,e),f(n)),t.h+=n.length)}function Fe(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function Ve(t,e,n,i,r){try{r&&(r.onload=null,r.onerror=null,r.onabort=null,r.ontimeout=null),i(n)}catch(t){}}function Ue(){this.g=new pt}function Be(t,e,n){const i=n||"";try{pe(t,(function(t,n){let r=t;o(t)&&(r=ft(t)),e.push(i+n+"="+encodeURIComponent(r))}))}catch(t){throw e.push(i+"type="+encodeURIComponent("_badmap")),t}}function je(t){this.l=t.Ub||null,this.j=t.eb||!1}function $e(t,e){it.call(this),this.D=t,this.o=e,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}function ze(t){t.j.read().then(t.Pa.bind(t)).catch(t.ga.bind(t))}function qe(t){t.readyState=4,t.l=null,t.j=null,t.v=null,He(t)}function He(t){t.onreadystatechange&&t.onreadystatechange.call(t)}function Ge(t){let e="";return v(t,(function(t,n){e+=n,e+=":",e+=t,e+="\r\n"})),e}function Ke(t,e,n){t:{for(i in n){var i=!1;break t}i=!0}i||(n=Ge(n),"string"==typeof t?null!=n&&encodeURIComponent(String(n)):be(t,e,n))}function Qe(t){it.call(this),this.headers=new Map,this.o=t||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}(t=Oe.prototype).add=function(t,e){xe(this),this.i=null,t=Fe(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this},t.forEach=function(t,e){xe(this),this.g.forEach((function(n,i){n.forEach((function(n){t.call(e,n,i,this)}),this)}),this)},t.na=function(){xe(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let i=0;i<e.length;i++){const r=t[i];for(let t=0;t<r.length;t++)n.push(e[i])}return n},t.V=function(t){xe(this);let e=[];if("string"==typeof t)Me(this,t)&&(e=e.concat(this.g.get(Fe(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e},t.set=function(t,e){return xe(this),this.i=null,Me(this,t=Fe(this,t))&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this},t.get=function(t,e){return t&&0<(t=this.V(t)).length?String(t[0]):e},t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var i=e[n];const s=encodeURIComponent(String(i)),o=this.V(i);for(i=0;i<o.length;i++){var r=s;""!==o[i]&&(r+="="+encodeURIComponent(String(o[i]))),t.push(r)}}return this.i=t.join("&")},u(je,gt),je.prototype.g=function(){return new $e(this.l,this.j)},je.prototype.i=(Ae={},function(){return Ae}),u($e,it),(t=$e.prototype).open=function(t,e){if(0!=this.readyState)throw this.abort(),Error("Error reopening a connection");this.B=t,this.A=e,this.readyState=1,He(this)},t.send=function(t){if(1!=this.readyState)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.u,method:this.B,credentials:this.m,cache:void 0};t&&(e.body=t),(this.D||r).fetch(new Request(this.A,e)).then(this.Sa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch((()=>{})),1<=this.readyState&&this.g&&4!=this.readyState&&(this.g=!1,qe(this)),this.readyState=0},t.Sa=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,He(this)),this.g&&(this.readyState=3,He(this),this.g)))if("arraybuffer"===this.responseType)t.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(void 0!==r.ReadableStream&&"body"in t){if(this.j=t.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;ze(this)}else t.text().then(this.Ra.bind(this),this.ga.bind(this))},t.Pa=function(t){if(this.g){if(this.o&&t.value)this.response.push(t.value);else if(!this.o){var e=t.value?t.value:new Uint8Array(0);(e=this.v.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?qe(this):He(this),3==this.readyState&&ze(this)}},t.Ra=function(t){this.g&&(this.response=this.responseText=t,qe(this))},t.Qa=function(t){this.g&&(this.response=t,qe(this))},t.ga=function(){this.g&&qe(this)},t.setRequestHeader=function(t,e){this.u.append(t,e)},t.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join("\r\n")},Object.defineProperty($e.prototype,"withCredentials",{get:function(){return"include"===this.m},set:function(t){this.m=t?"include":"same-origin"}}),u(Qe,it);var We=/^https?$/i,Xe=["POST","PUT"];function Ye(t,e){t.h=!1,t.g&&(t.j=!0,t.g.abort(),t.j=!1),t.l=e,t.m=5,Je(t),tn(t)}function Je(t){t.A||(t.A=!0,rt(t,"complete"),rt(t,"error"))}function Ze(t){if(t.h&&void 0!==i&&(!t.v[1]||4!=nn(t)||2!=t.Z()))if(t.u&&4==nn(t))ot(t.Ea,0,t);else if(rt(t,"readystatechange"),4==nn(t)){t.h=!1;try{const i=t.Z();t:switch(i){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break t;default:e=!1}var n;if(!(n=e)){var s;if(s=0===i){var o=String(t.D).match(ge)[1]||null;!o&&r.self&&r.self.location&&(o=r.self.location.protocol.slice(0,-1)),s=!We.test(o?o.toLowerCase():"")}n=s}if(n)rt(t,"complete"),rt(t,"success");else{t.m=6;try{var a=2<nn(t)?t.g.statusText:""}catch(t){a=""}t.l=a+" ["+t.Z()+"]",Je(t)}}finally{tn(t)}}}function tn(t,e){if(t.g){en(t);const n=t.g,i=t.v[0]?()=>{}:null;t.g=null,t.v=null,e||rt(t,"ready");try{n.onreadystatechange=i}catch(t){}}}function en(t){t.I&&(r.clearTimeout(t.I),t.I=null)}function nn(t){return t.g?t.g.readyState:0}function rn(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.H){case"":case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch(t){return null}}function sn(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function on(t){this.Aa=0,this.i=[],this.j=new Bt,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=sn("failFast",!1,t),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=sn("baseRetryDelayMs",5e3,t),this.cb=sn("retryDelaySeedMs",1e4,t),this.Wa=sn("forwardChannelMaxRetries",2,t),this.wa=sn("forwardChannelRequestTimeoutMs",2e4,t),this.pa=t&&t.xmlHttpFactory||void 0,this.Xa=t&&t.Tb||void 0,this.Ca=t&&t.useFetchStreams||!1,this.L=void 0,this.J=t&&t.supportsCrossDomainXhr||!1,this.K="",this.h=new ae(t&&t.concurrentRequestLimit),this.Da=new Ue,this.P=t&&t.fastHandshake||!1,this.O=t&&t.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=t&&t.Rb||!1,t&&t.xa&&this.j.xa(),t&&t.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&t&&t.detectBufferingProxy||!1,this.ja=void 0,t&&t.longPollingTimeout&&0<t.longPollingTimeout&&(this.ja=t.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}function an(t){if(ln(t),3==t.G){var e=t.U++,n=ye(t.I);if(be(n,"SID",t.K),be(n,"RID",e),be(n,"TYPE","terminate"),fn(t,n),(e=new Gt(t,t.j,e)).L=2,e.v=_e(ye(n)),n=!1,r.navigator&&r.navigator.sendBeacon)try{n=r.navigator.sendBeacon(e.v.toString(),"")}catch(t){}!n&&r.Image&&((new Image).src=e.v,n=!0),n||(e.g=In(e.j,null),e.g.ea(e.v)),e.F=Date.now(),te(e)}_n(t)}function hn(t){t.g&&(mn(t),t.g.cancel(),t.g=null)}function ln(t){hn(t),t.u&&(r.clearTimeout(t.u),t.u=null),vn(t),t.h.cancel(),t.s&&("number"==typeof t.s&&r.clearTimeout(t.s),t.s=null)}function cn(t){if(!he(t.h)&&!t.s){t.s=!0;var e=t.Ga;C||k(),D||(C(),D=!0),N.add(e,t),t.B=0}}function un(t,e){var n;n=e?e.l:t.U++;const i=ye(t.I);be(i,"SID",t.K),be(i,"RID",n),be(i,"AID",t.T),fn(t,i),t.m&&t.o&&Ke(i,t.m,t.o),n=new Gt(t,t.j,n,t.B+1),null===t.m&&(n.H=t.o),e&&(t.i=e.D.concat(t.i)),e=dn(t,n,1e3),n.I=Math.round(.5*t.wa)+Math.round(.5*t.wa*Math.random()),ue(t.h,n),Xt(n,i,e)}function fn(t,e){t.H&&v(t.H,(function(t,n){be(e,n,t)})),t.l&&pe({},(function(t,n){be(e,n,t)}))}function dn(t,e,n){n=Math.min(t.i.length,n);var i=t.l?l(t.l.Na,t.l,t):null;t:{var r=t.i;let e=-1;for(;;){const t=["count="+n];-1==e?0<n?(e=r[0].g,t.push("ofs="+e)):e=0:t.push("ofs="+e);let s=!0;for(let o=0;o<n;o++){let n=r[o].g;const a=r[o].map;if(n-=e,0>n)e=Math.max(0,r[o].g-100),s=!1;else try{Be(a,t,"req"+n+"_")}catch(t){i&&i(a)}}if(s){i=t.join("&");break t}}}return t=t.i.splice(0,n),e.D=t,i}function pn(t){if(!t.g&&!t.u){t.Y=1;var e=t.Fa;C||k(),D||(C(),D=!0),N.add(e,t),t.v=0}}function gn(t){return!(t.g||t.u||3<=t.v)&&(t.Y++,t.u=Ut(l(t.Fa,t),En(t,t.v)),t.v++,!0)}function mn(t){null!=t.A&&(r.clearTimeout(t.A),t.A=null)}function yn(t){t.g=new Gt(t,t.j,"rpc",t.Y),null===t.m&&(t.g.H=t.o),t.g.O=0;var e=ye(t.qa);be(e,"RID","rpc"),be(e,"SID",t.K),be(e,"AID",t.T),be(e,"CI",t.F?"0":"1"),!t.F&&t.ja&&be(e,"TO",t.ja),be(e,"TYPE","xmlhttp"),fn(t,e),t.m&&t.o&&Ke(e,t.m,t.o),t.L&&(t.g.I=t.L);var n=t.g;t=t.ia,n.L=1,n.v=_e(ye(e)),n.m=null,n.P=!0,Yt(n,t)}function vn(t){null!=t.C&&(r.clearTimeout(t.C),t.C=null)}function wn(t,e){var n=null;if(t.g==e){vn(t),mn(t),t.g=null;var i=2}else{if(!ce(t.h,e))return;n=e.D,fe(t.h,e),i=1}if(0!=t.G)if(e.o)if(1==i){n=e.m?e.m.length:0,e=Date.now()-e.F;var r=t.B;rt(i=xt(),new Vt(i,n)),cn(t)}else pn(t);else if(3==(r=e.s)||0==r&&0<e.X||!(1==i&&function(t,e){return!(le(t.h)>=t.h.j-(t.s?1:0)||(t.s?(t.i=e.D.concat(t.i),0):1==t.G||2==t.G||t.B>=(t.Va?0:t.Wa)||(t.s=Ut(l(t.Ga,t,e),En(t,t.B)),t.B++,0)))}(t,e)||2==i&&gn(t)))switch(n&&0<n.length&&(e=t.h,e.i=e.i.concat(n)),r){case 1:bn(t,5);break;case 4:bn(t,10);break;case 3:bn(t,6);break;default:bn(t,2)}}function En(t,e){let n=t.Ta+Math.floor(Math.random()*t.cb);return t.isActive()||(n*=2),n*e}function bn(t,e){if(t.j.info("Error code "+e),2==e){var n=l(t.fb,t),i=t.Xa;const e=!i;i=new me(i||"//www.google.com/images/cleardot.gif"),
r.location&&"http"==r.location.protocol||ve(i,"https"),_e(i),e?function(t,e){const n=new Bt;if(r.Image){const i=new Image;i.onload=c(Ve,n,"TestLoadImage: loaded",!0,e,i),i.onerror=c(Ve,n,"TestLoadImage: error",!1,e,i),i.onabort=c(Ve,n,"TestLoadImage: abort",!1,e,i),i.ontimeout=c(Ve,n,"TestLoadImage: timeout",!1,e,i),r.setTimeout((function(){i.ontimeout&&i.ontimeout()}),1e4),i.src=t}else e(!1)}(i.toString(),n):function(t,e){new Bt;const n=new AbortController,i=setTimeout((()=>{n.abort(),Ve(0,0,!1,e)}),1e4);fetch(t,{signal:n.signal}).then((t=>{clearTimeout(i),t.ok?Ve(0,0,!0,e):Ve(0,0,!1,e)})).catch((()=>{clearTimeout(i),Ve(0,0,!1,e)}))}(i.toString(),n)}else Ft(2);t.G=0,t.l&&t.l.sa(e),_n(t),ln(t)}function _n(t){if(t.G=0,t.ka=[],t.l){const e=de(t.h);0==e.length&&0==t.i.length||(d(t.ka,e),d(t.ka,t.i),t.h.i.length=0,f(t.i),t.i.length=0),t.l.ra()}}function Tn(t,e,n){var i=n instanceof me?ye(n):new me(n);if(""!=i.g)e&&(i.g=e+"."+i.g),we(i,i.s);else{var s=r.location;i=s.protocol,e=e?e+"."+s.hostname:s.hostname,s=+s.port;var o=new me(null);i&&ve(o,i),e&&(o.g=e),s&&we(o,s),n&&(o.l=n),i=o}return n=t.D,e=t.ya,n&&e&&be(i,n,e),be(i,"VER",t.la),fn(t,i),i}function In(t,e,n){if(e&&!t.J)throw Error("Can't create secondary domain capable XhrIo object.");return(e=t.Ca&&!t.pa?new Qe(new je({eb:n})):new Qe(t.pa)).Ha(t.J),e}function Sn(){}function An(){}function Cn(t,e){it.call(this),this.g=new on(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.o=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.va&&(t?t["X-WebChannel-Client-Profile"]=e.va:t={"X-WebChannel-Client-Profile":e.va}),this.g.S=t,(t=e&&e.Sb)&&!p(t)&&(this.g.m=t),this.v=e&&e.supportsCrossDomainXhr||!1,this.u=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!p(e)&&(this.g.D=e,null!==(t=this.h)&&e in t&&(e in(t=this.h)&&delete t[e])),this.j=new kn(this)}function Dn(t){wt.call(this),t.__headers__&&(this.headers=t.__headers__,this.statusCode=t.__status__,delete t.__headers__,delete t.__status__);var e=t.__sm__;if(e){t:{for(const n in e){t=n;break t}t=void 0}(this.i=t)&&(t=this.i,e=null!==e&&t in e?e[t]:void 0),this.data=e}else this.data=t}function Nn(){kt.call(this),this.status=1}function kn(t){this.g=t}(t=Qe.prototype).Ha=function(t){this.J=t},t.ea=function(t,e,n,i){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+t);e=e?e.toUpperCase():"GET",this.D=t,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():$t.g(),this.v=this.o?mt(this.o):mt($t),this.g.onreadystatechange=l(this.Ea,this);try{this.B=!0,this.g.open(e,String(t),!0),this.B=!1}catch(t){return void Ye(this,t)}if(t=n||"",n=new Map(this.headers),i)if(Object.getPrototypeOf(i)===Object.prototype)for(var s in i)n.set(s,i[s]);else{if("function"!=typeof i.keys||"function"!=typeof i.get)throw Error("Unknown input type for opt_headers: "+String(i));for(const t of i.keys())n.set(t,i.get(t))}i=Array.from(n.keys()).find((t=>"content-type"==t.toLowerCase())),s=r.FormData&&t instanceof r.FormData,!(0<=Array.prototype.indexOf.call(Xe,e,void 0))||i||s||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[t,e]of n)this.g.setRequestHeader(t,e);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{en(this),this.u=!0,this.g.send(t),this.u=!1}catch(t){Ye(this,t)}},t.abort=function(t){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=t||7,rt(this,"complete"),rt(this,"abort"),tn(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),tn(this,!0)),Qe.aa.N.call(this)},t.Ea=function(){this.s||(this.B||this.u||this.j?Ze(this):this.bb())},t.bb=function(){Ze(this)},t.isActive=function(){return!!this.g},t.Z=function(){try{return 2<nn(this)?this.g.status:-1}catch(t){return-1}},t.oa=function(){try{return this.g?this.g.responseText:""}catch(t){return""}},t.Oa=function(t){if(this.g){var e=this.g.responseText;return t&&0==e.indexOf(t)&&(e=e.substring(t.length)),dt(e)}},t.Ba=function(){return this.m},t.Ka=function(){return"string"==typeof this.l?this.l:String(this.l)},(t=on.prototype).la=8,t.G=1,t.connect=function(t,e,n,i){Ft(0),this.W=t,this.H=e||{},n&&void 0!==i&&(this.H.OSID=n,this.H.OAID=i),this.F=this.X,this.I=Tn(this,null,this.W),cn(this)},t.Ga=function(t){if(this.s)if(this.s=null,1==this.G){if(!t){this.U=Math.floor(1e5*Math.random()),t=this.U++;const r=new Gt(this,this.j,t);let s=this.o;if(this.S&&(s?(s=w(s),b(s,this.S)):s=this.S),null!==this.m||this.O||(r.H=s,s=null),this.P)t:{for(var e=0,n=0;n<this.i.length;n++){var i=this.i[n];if(void 0===(i="__data__"in i.map&&"string"==typeof(i=i.map.__data__)?i.length:void 0))break;if(4096<(e+=i)){e=n;break t}if(4096===e||n===this.i.length-1){e=n+1;break t}}e=1e3}else e=1e3;e=dn(this,r,e),be(n=ye(this.I),"RID",t),be(n,"CVER",22),this.D&&be(n,"X-HTTP-Session-Id",this.D),fn(this,n),s&&(this.O?e="headers="+encodeURIComponent(String(Ge(s)))+"&"+e:this.m&&Ke(n,this.m,s)),ue(this.h,r),this.Ua&&be(n,"TYPE","init"),this.P?(be(n,"$req",e),be(n,"SID","null"),r.T=!0,Xt(r,n,null)):Xt(r,n,e),this.G=2}}else 3==this.G&&(t?un(this,t):0==this.i.length||he(this.h)||un(this))},t.Fa=function(){if(this.u=null,yn(this),this.ba&&!(this.M||null==this.g||0>=this.R)){var t=2*this.R;this.j.info("BP detection timer enabled: "+t),this.A=Ut(l(this.ab,this),t)}},t.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,Ft(10),hn(this),yn(this))},t.Za=function(){null!=this.C&&(this.C=null,hn(this),gn(this),Ft(19))},t.fb=function(t){t?(this.j.info("Successfully pinged google.com"),Ft(2)):(this.j.info("Failed to ping google.com"),Ft(1))},t.isActive=function(){return!!this.l&&this.l.isActive(this)},(t=Sn.prototype).ua=function(){},t.ta=function(){},t.sa=function(){},t.ra=function(){},t.isActive=function(){return!0},t.Na=function(){},An.prototype.g=function(t,e){return new Cn(t,e)},u(Cn,it),Cn.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Cn.prototype.close=function(){an(this.g)},Cn.prototype.o=function(t){var e=this.g;if("string"==typeof t){var n={};n.__data__=t,t=n}else this.u&&((n={}).__data__=ft(t),t=n);e.i.push(new oe(e.Ya++,t)),3==e.G&&cn(e)},Cn.prototype.N=function(){this.g.l=null,delete this.j,an(this.g),delete this.g,Cn.aa.N.call(this)},u(Dn,wt),u(Nn,kt),u(kn,Sn),kn.prototype.ua=function(){rt(this.g,"a")},kn.prototype.ta=function(t){rt(this.g,new Dn(t))},kn.prototype.sa=function(t){rt(this.g,new Nn)},kn.prototype.ra=function(){rt(this.g,"b")},An.prototype.createWebChannel=An.prototype.g,Cn.prototype.send=Cn.prototype.o,Cn.prototype.open=Cn.prototype.m,Cn.prototype.close=Cn.prototype.close,Dt=function(){return new An},Ct=function(){return xt()},At=Rt,St={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},zt.NO_ERROR=0,zt.TIMEOUT=8,zt.HTTP_ERROR=6,It=zt,qt.COMPLETE="complete",Tt=qt,yt.EventType=vt,vt.OPEN="a",vt.CLOSE="b",vt.ERROR="c",vt.MESSAGE="d",it.prototype.listen=it.prototype.K,_t=yt,bt=je,Qe.prototype.listenOnce=Qe.prototype.L,Qe.prototype.getLastError=Qe.prototype.Ka,Qe.prototype.getLastErrorCode=Qe.prototype.Ba,Qe.prototype.getStatus=Qe.prototype.Z,Qe.prototype.getResponseJson=Qe.prototype.Oa,Qe.prototype.getResponseText=Qe.prototype.oa,Qe.prototype.send=Qe.prototype.ea,Qe.prototype.setWithCredentials=Qe.prototype.Ha,Et=Qe}).apply(void 0!==Nt?Nt:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{});const kt="@firebase/firestore";
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
     */class Rt{constructor(t){this.uid=t}isAuthenticated(){return null!=this.uid}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}Rt.UNAUTHENTICATED=new Rt(null),Rt.GOOGLE_CREDENTIALS=new Rt("google-credentials-uid"),Rt.FIRST_PARTY=new Rt("first-party-uid"),Rt.MOCK_USER=new Rt("mock-user");
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
let Ot="10.12.1";
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
     */const xt=new A("@firebase/firestore");function Lt(){return xt.logLevel}function Mt(t,...e){if(xt.logLevel<=b.DEBUG){const n=e.map(Vt);xt.debug(`Firestore (${Ot}): ${t}`,...n)}}function Pt(t,...e){if(xt.logLevel<=b.ERROR){const n=e.map(Vt);xt.error(`Firestore (${Ot}): ${t}`,...n)}}function Ft(t,...e){if(xt.logLevel<=b.WARN){const n=e.map(Vt);xt.warn(`Firestore (${Ot}): ${t}`,...n)}}function Vt(t){if("string"==typeof t)return t;try{
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
     */function Ut(t="Unexpected state"){const e=`FIRESTORE (${Ot}) INTERNAL ASSERTION FAILED: `+t;throw Pt(e),new Error(e)}function Bt(t,e){t||Ut()}function jt(t,e){return t}
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
     */const $t={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class zt extends u{constructor(t,e){super(t,e),this.code=t,this.message=e,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}
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
     */class qt{constructor(){this.promise=new Promise(((t,e)=>{this.resolve=t,this.reject=e}))}}
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
     */class Ht{constructor(t,e){this.user=e,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class Gt{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,e){t.enqueueRetryable((()=>e(Rt.UNAUTHENTICATED)))}shutdown(){}}class Kt{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,e){this.changeListener=e,t.enqueueRetryable((()=>e(this.token.user)))}shutdown(){this.changeListener=null}}class Qt{constructor(t){this.t=t,this.currentUser=Rt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,e){let n=this.i;const i=t=>this.i!==n?(n=this.i,e(t)):Promise.resolve();let r=new qt;this.o=()=>{this.i++,this.currentUser=this.u(),r.resolve(),r=new qt,t.enqueueRetryable((()=>i(this.currentUser)))};const s=()=>{const e=r;t.enqueueRetryable((async()=>{await e.promise,await i(this.currentUser)}))},o=t=>{Mt("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=t,this.auth.addAuthTokenListener(this.o),s()};this.t.onInit((t=>o(t))),setTimeout((()=>{if(!this.auth){const t=this.t.getImmediate({optional:!0});t?o(t):(Mt("FirebaseAuthCredentialsProvider","Auth not yet detected"),r.resolve(),r=new qt)}}),0),s()}getToken(){const t=this.i,e=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(e).then((e=>this.i!==t?(Mt("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):e?(Bt("string"==typeof e.accessToken),new Ht(e.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const t=this.auth&&this.auth.getUid();return Bt(null===t||"string"==typeof t),new Rt(t)}}class Wt{constructor(t,e,n){this.l=t,this.h=e,this.P=n,this.type="FirstParty",this.user=Rt.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const t=this.T();return t&&this.I.set("Authorization",t),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class Xt{constructor(t,e,n){this.l=t,this.h=e,this.P=n}getToken(){return Promise.resolve(new Wt(this.l,this.h,this.P))}start(t,e){t.enqueueRetryable((()=>e(Rt.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class Yt{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Jt{constructor(t){this.A=t,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(t,e){const n=t=>{null!=t.error&&Mt("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${t.error.message}`);const n=t.token!==this.R;return this.R=t.token,Mt("FirebaseAppCheckTokenProvider",`Received ${n?"new":"existing"} token.`),n?e(t.token):Promise.resolve()};this.o=e=>{t.enqueueRetryable((()=>n(e)))};const i=t=>{Mt("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=t,this.appCheck.addTokenListener(this.o)};this.A.onInit((t=>i(t))),setTimeout((()=>{if(!this.appCheck){const t=this.A.getImmediate({optional:!0});t?i(t):Mt("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then((t=>t?(Bt("string"==typeof t.token),this.R=t.token,new Yt(t.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}
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
     */function Zt(t){const e="undefined"!=typeof self&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&"function"==typeof e.getRandomValues)e.getRandomValues(n);else for(let e=0;e<t;e++)n[e]=Math.floor(256*Math.random());return n}
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
     */class te{static newId(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",e=62*Math.floor(256/62);let n="";for(;n.length<20;){const i=Zt(40);for(let r=0;r<i.length;++r)n.length<20&&i[r]<e&&(n+=t.charAt(i[r]%62))}return n}}function ee(t,e){return t<e?-1:t>e?1:0}function ne(t,e,n){return t.length===e.length&&t.every(((t,i)=>n(t,e[i])))}
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
     */class ie{constructor(t,e){if(this.seconds=t,this.nanoseconds=e,e<0)throw new zt($t.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(e>=1e9)throw new zt($t.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(t<-62135596800)throw new zt($t.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new zt($t.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}static now(){return ie.fromMillis(Date.now())}static fromDate(t){return ie.fromMillis(t.getTime())}static fromMillis(t){const e=Math.floor(t/1e3),n=Math.floor(1e6*(t-1e3*e));return new ie(e,n)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(t){return this.seconds===t.seconds?ee(this.nanoseconds,t.nanoseconds):ee(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const t=this.seconds- -62135596800;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}
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
     */class re{constructor(t){this.timestamp=t}static fromTimestamp(t){return new re(t)}static min(){return new re(new ie(0,0))}static max(){return new re(new ie(253402300799,999999999))}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}
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
     */class se{constructor(t,e,n){void 0===e?e=0:e>t.length&&Ut(),void 0===n?n=t.length-e:n>t.length-e&&Ut(),this.segments=t,this.offset=e,this.len=n}get length(){return this.len}isEqual(t){return 0===se.comparator(this,t)}child(t){const e=this.segments.slice(this.offset,this.limit());return t instanceof se?t.forEach((t=>{e.push(t)})):e.push(t),this.construct(e)}limit(){return this.offset+this.length}popFirst(t){return t=void 0===t?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return 0===this.length}isPrefixOf(t){if(t.length<this.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}forEach(t){for(let e=this.offset,n=this.limit();e<n;e++)t(this.segments[e])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,e){const n=Math.min(t.length,e.length);for(let i=0;i<n;i++){const n=t.get(i),r=e.get(i);if(n<r)return-1;if(n>r)return 1}return t.length<e.length?-1:t.length>e.length?1:0}}class oe extends se{construct(t,e,n){return new oe(t,e,n)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...t){const e=[];for(const n of t){if(n.indexOf("//")>=0)throw new zt($t.INVALID_ARGUMENT,`Invalid segment (${n}). Paths must not contain // in them.`);e.push(...n.split("/").filter((t=>t.length>0)))}return new oe(e)}static emptyPath(){return new oe([])}}const ae=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class he extends se{construct(t,e,n){return new he(t,e,n)}static isValidIdentifier(t){return ae.test(t)}canonicalString(){return this.toArray().map((t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),he.isValidIdentifier(t)||(t="`"+t+"`"),t))).join(".")}toString(){return this.canonicalString()}isKeyField(){return 1===this.length&&"__name__"===this.get(0)}static keyField(){return new he(["__name__"])}static fromServerFormat(t){const e=[];let n="",i=0;const r=()=>{if(0===n.length)throw new zt($t.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);e.push(n),n=""};let s=!1;for(;i<t.length;){const e=t[i];if("\\"===e){if(i+1===t.length)throw new zt($t.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const e=t[i+1];if("\\"!==e&&"."!==e&&"`"!==e)throw new zt($t.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);n+=e,i+=2}else"`"===e?(s=!s,i++):"."!==e||s?(n+=e,i++):(r(),i++)}if(r(),s)throw new zt($t.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new he(e)}static emptyPath(){return new he([])}}
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
     */class le{constructor(t){this.path=t}static fromPath(t){return new le(oe.fromString(t))}static fromName(t){return new le(oe.fromString(t).popFirst(5))}static empty(){return new le(oe.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return null!==t&&0===oe.comparator(this.path,t.path)}toString(){return this.path.toString()}static comparator(t,e){return oe.comparator(t.path,e.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new le(new oe(t.slice()))}}function ce(t){return new ue(t.readTime,t.key,-1)}class ue{constructor(t,e,n){this.readTime=t,this.documentKey=e,this.largestBatchId=n}static min(){return new ue(re.min(),le.empty(),-1)}static max(){return new ue(re.max(),le.empty(),-1)}}function fe(t,e){let n=t.readTime.compareTo(e.readTime);return 0!==n?n:(n=le.comparator(t.documentKey,e.documentKey),0!==n?n:ee(t.largestBatchId,e.largestBatchId))}
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
     */const de="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class pe{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((t=>t()))}}
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
     */async function ge(t){if(t.code!==$t.FAILED_PRECONDITION||t.message!==de)throw t;Mt("LocalStore","Unexpectedly lost primary lease")}
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
     */class me{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t((t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)}),(t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)}))}catch(t){return this.next(void 0,t)}next(t,e){return this.callbackAttached&&Ut(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(e,this.error):this.wrapSuccess(t,this.result):new me(((n,i)=>{this.nextCallback=e=>{this.wrapSuccess(t,e).next(n,i)},this.catchCallback=t=>{this.wrapFailure(e,t).next(n,i)}}))}toPromise(){return new Promise(((t,e)=>{this.next(t,e)}))}wrapUserFunction(t){try{const e=t();return e instanceof me?e:me.resolve(e)}catch(t){return me.reject(t)}}wrapSuccess(t,e){return t?this.wrapUserFunction((()=>t(e))):me.resolve(e)}wrapFailure(t,e){return t?this.wrapUserFunction((()=>t(e))):me.reject(e)}static resolve(t){return new me(((e,n)=>{e(t)}))}static reject(t){return new me(((e,n)=>{n(t)}))}static waitFor(t){return new me(((e,n)=>{let i=0,r=0,s=!1;t.forEach((t=>{++i,t.next((()=>{++r,s&&r===i&&e()}),(t=>n(t)))})),s=!0,r===i&&e()}))}static or(t){let e=me.resolve(!1);for(const n of t)e=e.next((t=>t?me.resolve(t):n()));return e}static forEach(t,e){const n=[];return t.forEach(((t,i)=>{n.push(e.call(this,t,i))})),this.waitFor(n)}static mapArray(t,e){return new me(((n,i)=>{const r=t.length,s=new Array(r);let o=0;for(let a=0;a<r;a++){const h=a;e(t[h]).next((t=>{s[h]=t,++o,o===r&&n(s)}),(t=>i(t)))}}))}static doWhile(t,e){return new me(((n,i)=>{const r=()=>{!0===t()?e().next((()=>{r()}),i):n()};r()}))}}function ye(t){return"IndexedDbTransactionError"===t.name}
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
     */class ve{constructor(t,e){this.previousValue=t,e&&(e.sequenceNumberHandler=t=>this.ie(t),this.se=t=>e.writeSequenceNumber(t))}ie(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.se&&this.se(t),t}}function we(t){return null==t}function Ee(t){return 0===t&&1/t==-1/0}
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
function be(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function _e(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function Te(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}
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
     */ve.oe=-1;class Ie{constructor(t,e){this.comparator=t,this.root=e||Ae.EMPTY}insert(t,e){return new Ie(this.comparator,this.root.insert(t,e,this.comparator).copy(null,null,Ae.BLACK,null,null))}remove(t){return new Ie(this.comparator,this.root.remove(t,this.comparator).copy(null,null,Ae.BLACK,null,null))}get(t){let e=this.root;for(;!e.isEmpty();){const n=this.comparator(t,e.key);if(0===n)return e.value;n<0?e=e.left:n>0&&(e=e.right)}return null}indexOf(t){let e=0,n=this.root;for(;!n.isEmpty();){const i=this.comparator(t,n.key);if(0===i)return e+n.left.size;i<0?n=n.left:(e+=n.left.size+1,n=n.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal(((e,n)=>(t(e,n),!1)))}toString(){const t=[];return this.inorderTraversal(((e,n)=>(t.push(`${e}:${n}`),!1))),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new Se(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new Se(this.root,t,this.comparator,!1)}getReverseIterator(){return new Se(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new Se(this.root,t,this.comparator,!0)}}class Se{constructor(t,e,n,i){this.isReverse=i,this.nodeStack=[];let r=1;for(;!t.isEmpty();)if(r=e?n(t.key,e):1,e&&i&&(r*=-1),r<0)t=this.isReverse?t.left:t.right;else{if(0===r){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const e={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return e}hasNext(){return this.nodeStack.length>0}peek(){if(0===this.nodeStack.length)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class Ae{constructor(t,e,n,i,r){this.key=t,this.value=e,this.color=null!=n?n:Ae.RED,this.left=null!=i?i:Ae.EMPTY,this.right=null!=r?r:Ae.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,e,n,i,r){return new Ae(null!=t?t:this.key,null!=e?e:this.value,null!=n?n:this.color,null!=i?i:this.left,null!=r?r:this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,e,n){let i=this;const r=n(t,i.key);return i=r<0?i.copy(null,null,null,i.left.insert(t,e,n),null):0===r?i.copy(null,e,null,null,null):i.copy(null,null,null,null,i.right.insert(t,e,n)),i.fixUp()}removeMin(){if(this.left.isEmpty())return Ae.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,e){let n,i=this;if(e(t,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(t,e),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),0===e(t,i.key)){if(i.right.isEmpty())return Ae.EMPTY;n=i.right.min(),i=i.copy(n.key,n.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(t,e))}return i.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,Ae.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,Ae.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),e=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,e)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw Ut();if(this.right.isRed())throw Ut();const t=this.left.check();if(t!==this.right.check())throw Ut();return t+(this.isRed()?0:1)}}Ae.EMPTY=null,Ae.RED=!0,Ae.BLACK=!1,Ae.EMPTY=new class{constructor(){this.size=0}get key(){throw Ut()}get value(){throw Ut()}get color(){throw Ut()}get left(){throw Ut()}get right(){throw Ut()}copy(t,e,n,i,r){return this}insert(t,e,n){return new Ae(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};
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
class Ce{constructor(t){this.comparator=t,this.data=new Ie(this.comparator)}has(t){return null!==this.data.get(t)}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal(((e,n)=>(t(e),!1)))}forEachInRange(t,e){const n=this.data.getIteratorFrom(t[0]);for(;n.hasNext();){const i=n.getNext();if(this.comparator(i.key,t[1])>=0)return;e(i.key)}}forEachWhile(t,e){let n;for(n=void 0!==e?this.data.getIteratorFrom(e):this.data.getIterator();n.hasNext();)if(!t(n.getNext().key))return}firstAfterOrEqual(t){const e=this.data.getIteratorFrom(t);return e.hasNext()?e.getNext().key:null}getIterator(){return new De(this.data.getIterator())}getIteratorFrom(t){return new De(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let e=this;return e.size<t.size&&(e=t,t=this),t.forEach((t=>{e=e.add(t)})),e}isEqual(t){if(!(t instanceof Ce))return!1;if(this.size!==t.size)return!1;const e=this.data.getIterator(),n=t.data.getIterator();for(;e.hasNext();){const t=e.getNext().key,i=n.getNext().key;if(0!==this.comparator(t,i))return!1}return!0}toArray(){const t=[];return this.forEach((e=>{t.push(e)})),t}toString(){const t=[];return this.forEach((e=>t.push(e))),"SortedSet("+t.toString()+")"}copy(t){const e=new Ce(this.comparator);return e.data=t,e}}class De{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}
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
     */class Ne{constructor(t){this.fields=t,t.sort(he.comparator)}static empty(){return new Ne([])}unionWith(t){let e=new Ce(he.comparator);for(const t of this.fields)e=e.add(t);for(const n of t)e=e.add(n);return new Ne(e.toArray())}covers(t){for(const e of this.fields)if(e.isPrefixOf(t))return!0;return!1}isEqual(t){return ne(this.fields,t.fields,((t,e)=>t.isEqual(e)))}}
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
     */class ke extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}
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
     */class Re{constructor(t){this.binaryString=t}static fromBase64String(t){const e=function(t){try{return atob(t)}catch(t){throw"undefined"!=typeof DOMException&&t instanceof DOMException?new ke("Invalid base64 string: "+t):t}}(t);return new Re(e)}static fromUint8Array(t){const e=function(t){let e="";for(let n=0;n<t.length;++n)e+=String.fromCharCode(t[n]);return e}(t);return new Re(e)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return t=this.binaryString,btoa(t);var t}toUint8Array(){return function(t){const e=new Uint8Array(t.length);for(let n=0;n<t.length;n++)e[n]=t.charCodeAt(n);return e}
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
     */(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return ee(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}Re.EMPTY_BYTE_STRING=new Re("");const Oe=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function xe(t){if(Bt(!!t),"string"==typeof t){let e=0;const n=Oe.exec(t);if(Bt(!!n),n[1]){let t=n[1];t=(t+"000000000").substr(0,9),e=Number(t)}const i=new Date(t);return{seconds:Math.floor(i.getTime()/1e3),nanos:e}}return{seconds:Le(t.seconds),nanos:Le(t.nanos)}}function Le(t){return"number"==typeof t?t:"string"==typeof t?Number(t):0}function Me(t){return"string"==typeof t?Re.fromBase64String(t):Re.fromUint8Array(t)}
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
     */function Pe(t){var e,n;return"server_timestamp"===(null===(n=((null===(e=null==t?void 0:t.mapValue)||void 0===e?void 0:e.fields)||{}).__type__)||void 0===n?void 0:n.stringValue)}function Fe(t){const e=t.mapValue.fields.__previous_value__;return Pe(e)?Fe(e):e}function Ve(t){const e=xe(t.mapValue.fields.__local_write_time__.timestampValue);return new ie(e.seconds,e.nanos)}
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
     */class Ue{constructor(t,e,n,i,r,s,o,a,h){this.databaseId=t,this.appId=e,this.persistenceKey=n,this.host=i,this.ssl=r,this.forceLongPolling=s,this.autoDetectLongPolling=o,this.longPollingOptions=a,this.useFetchStreams=h}}class Be{constructor(t,e){this.projectId=t,this.database=e||"(default)"}static empty(){return new Be("","")}get isDefaultDatabase(){return"(default)"===this.database}isEqual(t){return t instanceof Be&&t.projectId===this.projectId&&t.database===this.database}}
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
     */const je={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function $e(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Pe(t)?4:function(t){return"__max__"===(((t.mapValue||{}).fields||{}).__type__||{}).stringValue}
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
     */(t)?9007199254740991:10:Ut()}function ze(t,e){if(t===e)return!0;const n=$e(t);if(n!==$e(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Ve(t).isEqual(Ve(e));case 3:return function(t,e){if("string"==typeof t.timestampValue&&"string"==typeof e.timestampValue&&t.timestampValue.length===e.timestampValue.length)return t.timestampValue===e.timestampValue;const n=xe(t.timestampValue),i=xe(e.timestampValue);return n.seconds===i.seconds&&n.nanos===i.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(t,e){return Me(t.bytesValue).isEqual(Me(e.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(t,e){return Le(t.geoPointValue.latitude)===Le(e.geoPointValue.latitude)&&Le(t.geoPointValue.longitude)===Le(e.geoPointValue.longitude)}(t,e);case 2:return function(t,e){if("integerValue"in t&&"integerValue"in e)return Le(t.integerValue)===Le(e.integerValue);if("doubleValue"in t&&"doubleValue"in e){const n=Le(t.doubleValue),i=Le(e.doubleValue);return n===i?Ee(n)===Ee(i):isNaN(n)&&isNaN(i)}return!1}(t,e);case 9:return ne(t.arrayValue.values||[],e.arrayValue.values||[],ze);case 10:return function(t,e){const n=t.mapValue.fields||{},i=e.mapValue.fields||{};if(be(n)!==be(i))return!1;for(const t in n)if(n.hasOwnProperty(t)&&(void 0===i[t]||!ze(n[t],i[t])))return!1;return!0}(t,e);default:return Ut()}}function qe(t,e){return void 0!==(t.values||[]).find((t=>ze(t,e)))}function He(t,e){if(t===e)return 0;const n=$e(t),i=$e(e);if(n!==i)return ee(n,i);switch(n){case 0:case 9007199254740991:return 0;case 1:return ee(t.booleanValue,e.booleanValue);case 2:return function(t,e){const n=Le(t.integerValue||t.doubleValue),i=Le(e.integerValue||e.doubleValue);return n<i?-1:n>i?1:n===i?0:isNaN(n)?isNaN(i)?0:-1:1}(t,e);case 3:return Ge(t.timestampValue,e.timestampValue);case 4:return Ge(Ve(t),Ve(e));case 5:return ee(t.stringValue,e.stringValue);case 6:return function(t,e){const n=Me(t),i=Me(e);return n.compareTo(i)}(t.bytesValue,e.bytesValue);case 7:return function(t,e){const n=t.split("/"),i=e.split("/");for(let t=0;t<n.length&&t<i.length;t++){const e=ee(n[t],i[t]);if(0!==e)return e}return ee(n.length,i.length)}(t.referenceValue,e.referenceValue);case 8:return function(t,e){const n=ee(Le(t.latitude),Le(e.latitude));return 0!==n?n:ee(Le(t.longitude),Le(e.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(t,e){const n=t.values||[],i=e.values||[];for(let t=0;t<n.length&&t<i.length;++t){const e=He(n[t],i[t]);if(e)return e}return ee(n.length,i.length)}(t.arrayValue,e.arrayValue);case 10:return function(t,e){if(t===je.mapValue&&e===je.mapValue)return 0;if(t===je.mapValue)return 1;if(e===je.mapValue)return-1;const n=t.fields||{},i=Object.keys(n),r=e.fields||{},s=Object.keys(r);i.sort(),s.sort();for(let t=0;t<i.length&&t<s.length;++t){const e=ee(i[t],s[t]);if(0!==e)return e;const o=He(n[i[t]],r[s[t]]);if(0!==o)return o}return ee(i.length,s.length)}(t.mapValue,e.mapValue);default:throw Ut()}}function Ge(t,e){if("string"==typeof t&&"string"==typeof e&&t.length===e.length)return ee(t,e);const n=xe(t),i=xe(e),r=ee(n.seconds,i.seconds);return 0!==r?r:ee(n.nanos,i.nanos)}function Ke(t){return Qe(t)}function Qe(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(t){const e=xe(t);return`time(${e.seconds},${e.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(t){return Me(t).toBase64()}(t.bytesValue):"referenceValue"in t?function(t){return le.fromName(t).toString()}(t.referenceValue):"geoPointValue"in t?function(t){return`geo(${t.latitude},${t.longitude})`}(t.geoPointValue):"arrayValue"in t?function(t){let e="[",n=!0;for(const i of t.values||[])n?n=!1:e+=",",e+=Qe(i);return e+"]"}(t.arrayValue):"mapValue"in t?function(t){const e=Object.keys(t.fields||{}).sort();let n="{",i=!0;for(const r of e)i?i=!1:n+=",",n+=`${r}:${Qe(t.fields[r])}`;return n+"}"}(t.mapValue):Ut()}function We(t){return!!t&&"integerValue"in t}function Xe(t){return!!t&&"arrayValue"in t}function Ye(t){return!!t&&"mapValue"in t}function Je(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&"object"==typeof t.timestampValue)return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return _e(t.mapValue.fields,((t,n)=>e.mapValue.fields[t]=Je(n))),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Je(t.arrayValue.values[n]);return e}return Object.assign({},t)}class Ze{constructor(t){this.value=t}static empty(){return new Ze({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let e=this.value;for(let n=0;n<t.length-1;++n)if(e=(e.mapValue.fields||{})[t.get(n)],!Ye(e))return null;return e=(e.mapValue.fields||{})[t.lastSegment()],e||null}}set(t,e){this.getFieldsMap(t.popLast())[t.lastSegment()]=Je(e)}setAll(t){let e=he.emptyPath(),n={},i=[];t.forEach(((t,r)=>{if(!e.isImmediateParentOf(r)){const t=this.getFieldsMap(e);this.applyChanges(t,n,i),n={},i=[],e=r.popLast()}t?n[r.lastSegment()]=Je(t):i.push(r.lastSegment())}));const r=this.getFieldsMap(e);this.applyChanges(r,n,i)}delete(t){const e=this.field(t.popLast());Ye(e)&&e.mapValue.fields&&delete e.mapValue.fields[t.lastSegment()]}isEqual(t){return ze(this.value,t.value)}getFieldsMap(t){let e=this.value;e.mapValue.fields||(e.mapValue={fields:{}});for(let n=0;n<t.length;++n){let i=e.mapValue.fields[t.get(n)];Ye(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},e.mapValue.fields[t.get(n)]=i),e=i}return e.mapValue.fields}applyChanges(t,e,n){_e(e,((e,n)=>t[e]=n));for(const e of n)delete t[e]}clone(){return new Ze(Je(this.value))}}function tn(t){const e=[];return _e(t.fields,((t,n)=>{const i=new he([t]);if(Ye(n)){const t=tn(n.mapValue).fields;if(0===t.length)e.push(i);else for(const n of t)e.push(i.child(n))}else e.push(i)})),new Ne(e)
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
     */}class en{constructor(t,e,n,i,r,s,o){this.key=t,this.documentType=e,this.version=n,this.readTime=i,this.createTime=r,this.data=s,this.documentState=o}static newInvalidDocument(t){return new en(t,0,re.min(),re.min(),re.min(),Ze.empty(),0)}static newFoundDocument(t,e,n,i){return new en(t,1,e,re.min(),n,i,0)}static newNoDocument(t,e){return new en(t,2,e,re.min(),re.min(),Ze.empty(),0)}static newUnknownDocument(t,e){return new en(t,3,e,re.min(),re.min(),Ze.empty(),2)}convertToFoundDocument(t,e){return!this.createTime.isEqual(re.min())||2!==this.documentType&&0!==this.documentType||(this.createTime=t),this.version=t,this.documentType=1,this.data=e,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=Ze.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=Ze.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=re.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return 1===this.documentState}get hasCommittedMutations(){return 2===this.documentState}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return 0!==this.documentType}isFoundDocument(){return 1===this.documentType}isNoDocument(){return 2===this.documentType}isUnknownDocument(){return 3===this.documentType}isEqual(t){return t instanceof en&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new en(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}
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
     */class nn{constructor(t,e){this.position=t,this.inclusive=e}}function rn(t,e,n){let i=0;for(let r=0;r<t.position.length;r++){const s=e[r],o=t.position[r];if(i=s.field.isKeyField()?le.comparator(le.fromName(o.referenceValue),n.key):He(o,n.data.field(s.field)),"desc"===s.dir&&(i*=-1),0!==i)break}return i}function sn(t,e){if(null===t)return null===e;if(null===e)return!1;if(t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!ze(t.position[n],e.position[n]))return!1;return!0}
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
     */class on{constructor(t,e="asc"){this.field=t,this.dir=e}}function an(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}
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
     */class hn{}class ln extends hn{constructor(t,e,n){super(),this.field=t,this.op=e,this.value=n}static create(t,e,n){return t.isKeyField()?"in"===e||"not-in"===e?this.createKeyFieldInFilter(t,e,n):new mn(t,e,n):"array-contains"===e?new En(t,n):"in"===e?new bn(t,n):"not-in"===e?new _n(t,n):"array-contains-any"===e?new Tn(t,n):new ln(t,e,n)}static createKeyFieldInFilter(t,e,n){return"in"===e?new yn(t,n):new vn(t,n)}matches(t){const e=t.data.field(this.field);return"!="===this.op?null!==e&&this.matchesComparison(He(e,this.value)):null!==e&&$e(this.value)===$e(e)&&this.matchesComparison(He(e,this.value))}matchesComparison(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return 0===t;case"!=":return 0!==t;case">":return t>0;case">=":return t>=0;default:return Ut()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class cn extends hn{constructor(t,e){super(),this.filters=t,this.op=e,this.ae=null}static create(t,e){return new cn(t,e)}matches(t){return un(this)?void 0===this.filters.find((e=>!e.matches(t))):void 0!==this.filters.find((e=>e.matches(t)))}getFlattenedFilters(){return null!==this.ae||(this.ae=this.filters.reduce(((t,e)=>t.concat(e.getFlattenedFilters())),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function un(t){return"and"===t.op}function fn(t){return function(t){for(const e of t.filters)if(e instanceof cn)return!1;return!0}(t)&&un(t)}function dn(t){if(t instanceof ln)return t.field.canonicalString()+t.op.toString()+Ke(t.value);if(fn(t))return t.filters.map((t=>dn(t))).join(",");{const e=t.filters.map((t=>dn(t))).join(",");return`${t.op}(${e})`}}function pn(t,e){return t instanceof ln?function(t,e){return e instanceof ln&&t.op===e.op&&t.field.isEqual(e.field)&&ze(t.value,e.value)}(t,e):t instanceof cn?function(t,e){return e instanceof cn&&t.op===e.op&&t.filters.length===e.filters.length&&t.filters.reduce(((t,n,i)=>t&&pn(n,e.filters[i])),!0)}(t,e):void Ut()}function gn(t){return t instanceof ln?function(t){return`${t.field.canonicalString()} ${t.op} ${Ke(t.value)}`}(t):t instanceof cn?function(t){return t.op.toString()+" {"+t.getFilters().map(gn).join(" ,")+"}"}(t):"Filter"}class mn extends ln{constructor(t,e,n){super(t,e,n),this.key=le.fromName(n.referenceValue)}matches(t){const e=le.comparator(t.key,this.key);return this.matchesComparison(e)}}class yn extends ln{constructor(t,e){super(t,"in",e),this.keys=wn("in",e)}matches(t){return this.keys.some((e=>e.isEqual(t.key)))}}class vn extends ln{constructor(t,e){super(t,"not-in",e),this.keys=wn("not-in",e)}matches(t){return!this.keys.some((e=>e.isEqual(t.key)))}}function wn(t,e){var n;return((null===(n=e.arrayValue)||void 0===n?void 0:n.values)||[]).map((t=>le.fromName(t.referenceValue)))}class En extends ln{constructor(t,e){super(t,"array-contains",e)}matches(t){const e=t.data.field(this.field);return Xe(e)&&qe(e.arrayValue,this.value)}}class bn extends ln{constructor(t,e){super(t,"in",e)}matches(t){const e=t.data.field(this.field);return null!==e&&qe(this.value.arrayValue,e)}}class _n extends ln{constructor(t,e){super(t,"not-in",e)}matches(t){if(qe(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const e=t.data.field(this.field);return null!==e&&!qe(this.value.arrayValue,e)}}class Tn extends ln{constructor(t,e){super(t,"array-contains-any",e)}matches(t){const e=t.data.field(this.field);return!(!Xe(e)||!e.arrayValue.values)&&e.arrayValue.values.some((t=>qe(this.value.arrayValue,t)))}}
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
     */class In{constructor(t,e=null,n=[],i=[],r=null,s=null,o=null){this.path=t,this.collectionGroup=e,this.orderBy=n,this.filters=i,this.limit=r,this.startAt=s,this.endAt=o,this.ue=null}}function Sn(t,e=null,n=[],i=[],r=null,s=null,o=null){return new In(t,e,n,i,r,s,o)}function An(t){const e=jt(t);if(null===e.ue){let t=e.path.canonicalString();null!==e.collectionGroup&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map((t=>dn(t))).join(","),t+="|ob:",t+=e.orderBy.map((t=>function(t){return t.field.canonicalString()+t.dir}(t))).join(","),we(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map((t=>Ke(t))).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map((t=>Ke(t))).join(",")),e.ue=t}return e.ue}function Cn(t,e){if(t.limit!==e.limit)return!1;if(t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!an(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!pn(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!sn(t.startAt,e.startAt)&&sn(t.endAt,e.endAt)}
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
     */class Dn{constructor(t,e=null,n=[],i=[],r=null,s="F",o=null,a=null){this.path=t,this.collectionGroup=e,this.explicitOrderBy=n,this.filters=i,this.limit=r,this.limitType=s,this.startAt=o,this.endAt=a,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function Nn(t){return 0===t.filters.length&&null===t.limit&&null==t.startAt&&null==t.endAt&&(0===t.explicitOrderBy.length||1===t.explicitOrderBy.length&&t.explicitOrderBy[0].field.isKeyField())}function kn(t){const e=jt(t);if(null===e.ce){e.ce=[];const t=new Set;for(const n of e.explicitOrderBy)e.ce.push(n),t.add(n.field.canonicalString());const n=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc",i=function(t){let e=new Ce(he.comparator);return t.filters.forEach((t=>{t.getFlattenedFilters().forEach((t=>{t.isInequality()&&(e=e.add(t.field))}))})),e}(e);i.forEach((i=>{t.has(i.canonicalString())||i.isKeyField()||e.ce.push(new on(i,n))})),t.has(he.keyField().canonicalString())||e.ce.push(new on(he.keyField(),n))}return e.ce}function Rn(t){const e=jt(t);return e.le||(e.le=function(t,e){if("F"===t.limitType)return Sn(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map((t=>{const e="desc"===t.dir?"asc":"desc";return new on(t.field,e)}));const n=t.endAt?new nn(t.endAt.position,t.endAt.inclusive):null,i=t.startAt?new nn(t.startAt.position,t.startAt.inclusive):null;return Sn(t.path,t.collectionGroup,e,t.filters,t.limit,n,i)}}(e,kn(t))),e.le}function On(t,e,n){return new Dn(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function xn(t,e){return Cn(Rn(t),Rn(e))&&t.limitType===e.limitType}function Ln(t){return`${An(Rn(t))}|lt:${t.limitType}`}function Mn(t){return`Query(target=${function(t){let e=t.path.canonicalString();return null!==t.collectionGroup&&(e+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(e+=`, filters: [${t.filters.map((t=>gn(t))).join(", ")}]`),we(t.limit)||(e+=", limit: "+t.limit),t.orderBy.length>0&&(e+=`, orderBy: [${t.orderBy.map((t=>function(t){return`${t.field.canonicalString()} (${t.dir})`}(t))).join(", ")}]`),t.startAt&&(e+=", startAt: ",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map((t=>Ke(t))).join(",")),t.endAt&&(e+=", endAt: ",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map((t=>Ke(t))).join(",")),`Target(${e})`}(Rn(t))}; limitType=${t.limitType})`}function Pn(t,e){return e.isFoundDocument()&&function(t,e){const n=e.key.path;return null!==t.collectionGroup?e.key.hasCollectionId(t.collectionGroup)&&t.path.isPrefixOf(n):le.isDocumentKey(t.path)?t.path.isEqual(n):t.path.isImmediateParentOf(n)}(t,e)&&function(t,e){for(const n of kn(t))if(!n.field.isKeyField()&&null===e.data.field(n.field))return!1;return!0}(t,e)&&function(t,e){for(const n of t.filters)if(!n.matches(e))return!1;return!0}(t,e)&&function(t,e){return!(t.startAt&&!function(t,e,n){const i=rn(t,e,n);return t.inclusive?i<=0:i<0}(t.startAt,kn(t),e))&&!(t.endAt&&!function(t,e,n){const i=rn(t,e,n);return t.inclusive?i>=0:i>0}(t.endAt,kn(t),e))}(t,e)}function Fn(t,e,n){const i=t.field.isKeyField()?le.comparator(e.key,n.key):function(t,e,n){const i=e.data.field(t),r=n.data.field(t);return null!==i&&null!==r?He(i,r):Ut()}(t.field,e,n);switch(t.dir){case"asc":return i;case"desc":return-1*i;default:return Ut()}}
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
     */class Vn{constructor(t,e){this.mapKeyFn=t,this.equalsFn=e,this.inner={},this.innerSize=0}get(t){const e=this.mapKeyFn(t),n=this.inner[e];if(void 0!==n)for(const[e,i]of n)if(this.equalsFn(e,t))return i}has(t){return void 0!==this.get(t)}set(t,e){const n=this.mapKeyFn(t),i=this.inner[n];if(void 0===i)return this.inner[n]=[[t,e]],void this.innerSize++;for(let n=0;n<i.length;n++)if(this.equalsFn(i[n][0],t))return void(i[n]=[t,e]);i.push([t,e]),this.innerSize++}delete(t){const e=this.mapKeyFn(t),n=this.inner[e];if(void 0===n)return!1;for(let i=0;i<n.length;i++)if(this.equalsFn(n[i][0],t))return 1===n.length?delete this.inner[e]:n.splice(i,1),this.innerSize--,!0;return!1}forEach(t){_e(this.inner,((e,n)=>{for(const[e,i]of n)t(e,i)}))}isEmpty(){return Te(this.inner)}size(){return this.innerSize}}
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
     */const Un=new Ie(le.comparator);function Bn(){return Un}const jn=new Ie(le.comparator);function $n(...t){let e=jn;for(const n of t)e=e.insert(n.key,n);return e}function zn(t){let e=jn;return t.forEach(((t,n)=>e=e.insert(t,n.overlayedDocument))),e}function qn(){return Gn()}function Hn(){return Gn()}function Gn(){return new Vn((t=>t.toString()),((t,e)=>t.isEqual(e)))}const Kn=new Ie(le.comparator),Qn=new Ce(le.comparator);function Wn(...t){let e=Qn;for(const n of t)e=e.add(n);return e}const Xn=new Ce(ee);
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
function Yn(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Ee(e)?"-0":e}}function Jn(t){return{integerValue:""+t}}function Zn(t,e){return function(t){return"number"==typeof t&&Number.isInteger(t)&&!Ee(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}(e)?Jn(e):Yn(t,e)}
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
     */class ti{constructor(){this._=void 0}}function ei(t,e,n){return t instanceof ri?function(t,e){const n={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:t.seconds,nanos:t.nanoseconds}}}};return e&&Pe(e)&&(e=Fe(e)),e&&(n.fields.__previous_value__=e),{mapValue:n}}(n,e):t instanceof si?oi(t,e):t instanceof ai?hi(t,e):function(t,e){const n=ii(t,e),i=ci(n)+ci(t.Pe);return We(n)&&We(t.Pe)?Jn(i):Yn(t.serializer,i)}(t,e)}function ni(t,e,n){return t instanceof si?oi(t,e):t instanceof ai?hi(t,e):n}function ii(t,e){return t instanceof li?function(t){return We(t)||function(t){return!!t&&"doubleValue"in t}(t)}(e)?e:{integerValue:0}:null}class ri extends ti{}class si extends ti{constructor(t){super(),this.elements=t}}function oi(t,e){const n=ui(e);for(const e of t.elements)n.some((t=>ze(t,e)))||n.push(e);return{arrayValue:{values:n}}}class ai extends ti{constructor(t){super(),this.elements=t}}function hi(t,e){let n=ui(e);for(const e of t.elements)n=n.filter((t=>!ze(t,e)));return{arrayValue:{values:n}}}class li extends ti{constructor(t,e){super(),this.serializer=t,this.Pe=e}}function ci(t){return Le(t.integerValue||t.doubleValue)}function ui(t){return Xe(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}
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
     */class fi{constructor(t,e){this.field=t,this.transform=e}}class di{constructor(t,e){this.version=t,this.transformResults=e}}class pi{constructor(t,e){this.updateTime=t,this.exists=e}static none(){return new pi}static exists(t){return new pi(void 0,t)}static updateTime(t){return new pi(t)}get isNone(){return void 0===this.updateTime&&void 0===this.exists}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function gi(t,e){return void 0!==t.updateTime?e.isFoundDocument()&&e.version.isEqual(t.updateTime):void 0===t.exists||t.exists===e.isFoundDocument()}class mi{}function yi(t,e){if(!t.hasLocalMutations||e&&0===e.fields.length)return null;if(null===e)return t.isNoDocument()?new Ci(t.key,pi.none()):new _i(t.key,t.data,pi.none());{const n=t.data,i=Ze.empty();let r=new Ce(he.comparator);for(let t of e.fields)if(!r.has(t)){let e=n.field(t);null===e&&t.length>1&&(t=t.popLast(),e=n.field(t)),null===e?i.delete(t):i.set(t,e),r=r.add(t)}return new Ti(t.key,i,new Ne(r.toArray()),pi.none())}}function vi(t,e,n){t instanceof _i?function(t,e,n){const i=t.value.clone(),r=Si(t.fieldTransforms,e,n.transformResults);i.setAll(r),e.convertToFoundDocument(n.version,i).setHasCommittedMutations()}(t,e,n):t instanceof Ti?function(t,e,n){if(!gi(t.precondition,e))return void e.convertToUnknownDocument(n.version);const i=Si(t.fieldTransforms,e,n.transformResults),r=e.data;r.setAll(Ii(t)),r.setAll(i),e.convertToFoundDocument(n.version,r).setHasCommittedMutations()}(t,e,n):function(t,e,n){e.convertToNoDocument(n.version).setHasCommittedMutations()}(0,e,n)}function wi(t,e,n,i){return t instanceof _i?function(t,e,n,i){if(!gi(t.precondition,e))return n;const r=t.value.clone(),s=Ai(t.fieldTransforms,i,e);return r.setAll(s),e.convertToFoundDocument(e.version,r).setHasLocalMutations(),null}(t,e,n,i):t instanceof Ti?function(t,e,n,i){if(!gi(t.precondition,e))return n;const r=Ai(t.fieldTransforms,i,e),s=e.data;return s.setAll(Ii(t)),s.setAll(r),e.convertToFoundDocument(e.version,s).setHasLocalMutations(),null===n?null:n.unionWith(t.fieldMask.fields).unionWith(t.fieldTransforms.map((t=>t.field)))}(t,e,n,i):function(t,e,n){return gi(t.precondition,e)?(e.convertToNoDocument(e.version).setHasLocalMutations(),null):n}(t,e,n)}function Ei(t,e){let n=null;for(const i of t.fieldTransforms){const t=e.data.field(i.field),r=ii(i.transform,t||null);null!=r&&(null===n&&(n=Ze.empty()),n.set(i.field,r))}return n||null}function bi(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(t,e){return void 0===t&&void 0===e||!(!t||!e)&&ne(t,e,((t,e)=>function(t,e){return t.field.isEqual(e.field)&&function(t,e){return t instanceof si&&e instanceof si||t instanceof ai&&e instanceof ai?ne(t.elements,e.elements,ze):t instanceof li&&e instanceof li?ze(t.Pe,e.Pe):t instanceof ri&&e instanceof ri}(t.transform,e.transform)}(t,e)))}(t.fieldTransforms,e.fieldTransforms)&&(0===t.type?t.value.isEqual(e.value):1!==t.type||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class _i extends mi{constructor(t,e,n,i=[]){super(),this.key=t,this.value=e,this.precondition=n,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class Ti extends mi{constructor(t,e,n,i,r=[]){super(),this.key=t,this.data=e,this.fieldMask=n,this.precondition=i,this.fieldTransforms=r,this.type=1}getFieldMask(){return this.fieldMask}}function Ii(t){const e=new Map;return t.fieldMask.fields.forEach((n=>{if(!n.isEmpty()){const i=t.data.field(n);e.set(n,i)}})),e}function Si(t,e,n){const i=new Map;Bt(t.length===n.length);for(let r=0;r<n.length;r++){const s=t[r],o=s.transform,a=e.data.field(s.field);i.set(s.field,ni(o,a,n[r]))}return i}function Ai(t,e,n){const i=new Map;for(const r of t){const t=r.transform,s=n.data.field(r.field);i.set(r.field,ei(t,s,e))}return i}class Ci extends mi{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class Di extends mi{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}
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
     */class Ni{constructor(t,e,n,i){this.batchId=t,this.localWriteTime=e,this.baseMutations=n,this.mutations=i}applyToRemoteDocument(t,e){const n=e.mutationResults;for(let e=0;e<this.mutations.length;e++){const i=this.mutations[e];i.key.isEqual(t.key)&&vi(i,t,n[e])}}applyToLocalView(t,e){for(const n of this.baseMutations)n.key.isEqual(t.key)&&(e=wi(n,t,e,this.localWriteTime));for(const n of this.mutations)n.key.isEqual(t.key)&&(e=wi(n,t,e,this.localWriteTime));return e}applyToLocalDocumentSet(t,e){const n=Hn();return this.mutations.forEach((i=>{const r=t.get(i.key),s=r.overlayedDocument;let o=this.applyToLocalView(s,r.mutatedFields);o=e.has(i.key)?null:o;const a=yi(s,o);null!==a&&n.set(i.key,a),s.isValidDocument()||s.convertToNoDocument(re.min())})),n}keys(){return this.mutations.reduce(((t,e)=>t.add(e.key)),Wn())}isEqual(t){return this.batchId===t.batchId&&ne(this.mutations,t.mutations,((t,e)=>bi(t,e)))&&ne(this.baseMutations,t.baseMutations,((t,e)=>bi(t,e)))}}class ki{constructor(t,e,n,i){this.batch=t,this.commitVersion=e,this.mutationResults=n,this.docVersions=i}static from(t,e,n){Bt(t.mutations.length===n.length);let i=Kn;const r=t.mutations;for(let t=0;t<r.length;t++)i=i.insert(r[t].key,n[t].version);return new ki(t,e,n,i)}}
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
     */class Ri{constructor(t,e){this.largestBatchId=t,this.mutation=e}getKey(){return this.mutation.key}isEqual(t){return null!==t&&this.mutation===t.mutation}toString(){return`Overlay{\n      largestBatchId: ${this.largestBatchId},\n      mutation: ${this.mutation.toString()}\n    }`}}
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
     */var Oi,xi;(xi=Oi||(Oi={}))[xi.OK=0]="OK",xi[xi.CANCELLED=1]="CANCELLED",xi[xi.UNKNOWN=2]="UNKNOWN",xi[xi.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",xi[xi.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",xi[xi.NOT_FOUND=5]="NOT_FOUND",xi[xi.ALREADY_EXISTS=6]="ALREADY_EXISTS",xi[xi.PERMISSION_DENIED=7]="PERMISSION_DENIED",xi[xi.UNAUTHENTICATED=16]="UNAUTHENTICATED",xi[xi.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",xi[xi.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",xi[xi.ABORTED=10]="ABORTED",xi[xi.OUT_OF_RANGE=11]="OUT_OF_RANGE",xi[xi.UNIMPLEMENTED=12]="UNIMPLEMENTED",xi[xi.INTERNAL=13]="INTERNAL",xi[xi.UNAVAILABLE=14]="UNAVAILABLE",xi[xi.DATA_LOSS=15]="DATA_LOSS",
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
new vt([4294967295,4294967295],0);class Li{constructor(t,e){this.databaseId=t,this.useProto3Json=e}}function Mi(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Pi(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function Fi(t,e){return Mi(t,e.toTimestamp())}function Vi(t){return Bt(!!t),re.fromTimestamp(function(t){const e=xe(t);return new ie(e.seconds,e.nanos)}(t))}function Ui(t,e){return Bi(t,e).canonicalString()}function Bi(t,e){const n=function(t){return new oe(["projects",t.projectId,"databases",t.database])}(t).child("documents");return void 0===e?n:n.child(e)}function ji(t,e){return Ui(t.databaseId,e.path)}function $i(t){const e=function(t){const e=oe.fromString(t);return Bt(function(t){return t.length>=4&&"projects"===t.get(0)&&"databases"===t.get(2)}
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
     */(e)),e}(t);return 4===e.length?oe.emptyPath():function(t){return Bt(t.length>4&&"documents"===t.get(4)),t.popFirst(5)}(e)}function zi(t,e,n){return{name:ji(t,e),fields:n.value.mapValue.fields}}function qi(t){let e=$i(t.parent);const n=t.structuredQuery,i=n.from?n.from.length:0;let r=null;if(i>0){Bt(1===i);const t=n.from[0];t.allDescendants?r=t.collectionId:e=e.child(t.collectionId)}let s=[];n.where&&(s=function(t){const e=Hi(t);return e instanceof cn&&fn(e)?e.getFilters():[e]}(n.where));let o=[];n.orderBy&&(o=function(t){return t.map((t=>function(t){return new on(Gi(t.field),function(t){switch(t){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(t.direction))}(t)))}(n.orderBy));let a=null;n.limit&&(a=function(t){let e;return e="object"==typeof t?t.value:t,we(e)?null:e}(n.limit));let h=null;n.startAt&&(h=function(t){const e=!!t.before,n=t.values||[];return new nn(n,e)}(n.startAt));let l=null;return n.endAt&&(l=function(t){const e=!t.before,n=t.values||[];return new nn(n,e)}(n.endAt)),function(t,e,n,i,r,s,o,a){return new Dn(t,e,n,i,r,s,o,a)}(e,r,o,s,a,"F",h,l)}function Hi(t){return void 0!==t.unaryFilter?function(t){switch(t.unaryFilter.op){case"IS_NAN":const e=Gi(t.unaryFilter.field);return ln.create(e,"==",{doubleValue:NaN});case"IS_NULL":const n=Gi(t.unaryFilter.field);return ln.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=Gi(t.unaryFilter.field);return ln.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const r=Gi(t.unaryFilter.field);return ln.create(r,"!=",{nullValue:"NULL_VALUE"});default:return Ut()}}(t):void 0!==t.fieldFilter?function(t){return ln.create(Gi(t.fieldFilter.field),function(t){switch(t){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return Ut()}}(t.fieldFilter.op),t.fieldFilter.value)}(t):void 0!==t.compositeFilter?function(t){return cn.create(t.compositeFilter.filters.map((t=>Hi(t))),function(t){switch(t){case"AND":return"and";case"OR":return"or";default:return Ut()}}(t.compositeFilter.op))}(t):Ut()}function Gi(t){return he.fromServerFormat(t.fieldPath)}function Ki(t){const e=[];return t.fields.forEach((t=>e.push(t.canonicalString()))),{fieldPaths:e}}class Qi{constructor(t){this.ct=t}}function Wi(t){const e=qi({parent:t.parent,structuredQuery:t.structuredQuery});return"LAST"===t.limitType?On(e,e.limit,"L"):e}
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
     */class Xi{constructor(){this._n=new Yi}addToCollectionParentIndex(t,e){return this._n.add(e),me.resolve()}getCollectionParents(t,e){return me.resolve(this._n.getEntries(e))}addFieldIndex(t,e){return me.resolve()}deleteFieldIndex(t,e){return me.resolve()}deleteAllFieldIndexes(t){return me.resolve()}createTargetIndexes(t,e){return me.resolve()}getDocumentsMatchingTarget(t,e){return me.resolve(null)}getIndexType(t,e){return me.resolve(0)}getFieldIndexes(t,e){return me.resolve([])}getNextCollectionGroupToUpdate(t){return me.resolve(null)}getMinOffset(t,e){return me.resolve(ue.min())}getMinOffsetFromCollectionGroup(t,e){return me.resolve(ue.min())}updateCollectionGroup(t,e,n){return me.resolve()}updateIndexEntries(t,e){return me.resolve()}}class Yi{constructor(){this.index={}}add(t){const e=t.lastSegment(),n=t.popLast(),i=this.index[e]||new Ce(oe.comparator),r=!i.has(n);return this.index[e]=i.add(n),r}has(t){const e=t.lastSegment(),n=t.popLast(),i=this.index[e];return i&&i.has(n)}getEntries(t){return(this.index[t]||new Ce(oe.comparator)).toArray()}}
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
     */class Ji{constructor(t){this.On=t}next(){return this.On+=2,this.On}static Nn(){return new Ji(0)}static Ln(){return new Ji(-1)}}
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
     */class Zi{constructor(){this.changes=new Vn((t=>t.toString()),((t,e)=>t.isEqual(e))),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,e){this.assertNotApplied(),this.changes.set(t,en.newInvalidDocument(t).setReadTime(e))}getEntry(t,e){this.assertNotApplied();const n=this.changes.get(e);return void 0!==n?me.resolve(n):this.getFromCache(t,e)}getEntries(t,e){return this.getAllFromCache(t,e)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}
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
     */class tr{constructor(t,e){this.overlayedDocument=t,this.mutatedFields=e}}
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
     */class er{constructor(t,e,n,i){this.remoteDocumentCache=t,this.mutationQueue=e,this.documentOverlayCache=n,this.indexManager=i}getDocument(t,e){let n=null;return this.documentOverlayCache.getOverlay(t,e).next((i=>(n=i,this.remoteDocumentCache.getEntry(t,e)))).next((t=>(null!==n&&wi(n.mutation,t,Ne.empty(),ie.now()),t)))}getDocuments(t,e){return this.remoteDocumentCache.getEntries(t,e).next((e=>this.getLocalViewOfDocuments(t,e,Wn()).next((()=>e))))}getLocalViewOfDocuments(t,e,n=Wn()){const i=qn();return this.populateOverlays(t,i,e).next((()=>this.computeViews(t,e,i,n).next((t=>{let e=$n();return t.forEach(((t,n)=>{e=e.insert(t,n.overlayedDocument)})),e}))))}getOverlayedDocuments(t,e){const n=qn();return this.populateOverlays(t,n,e).next((()=>this.computeViews(t,e,n,Wn())))}populateOverlays(t,e,n){const i=[];return n.forEach((t=>{e.has(t)||i.push(t)})),this.documentOverlayCache.getOverlays(t,i).next((t=>{t.forEach(((t,n)=>{e.set(t,n)}))}))}computeViews(t,e,n,i){let r=Bn();const s=Gn(),o=Gn();return e.forEach(((t,e)=>{const o=n.get(e.key);i.has(e.key)&&(void 0===o||o.mutation instanceof Ti)?r=r.insert(e.key,e):void 0!==o?(s.set(e.key,o.mutation.getFieldMask()),wi(o.mutation,e,o.mutation.getFieldMask(),ie.now())):s.set(e.key,Ne.empty())})),this.recalculateAndSaveOverlays(t,r).next((t=>(t.forEach(((t,e)=>s.set(t,e))),e.forEach(((t,e)=>{var n;return o.set(t,new tr(e,null!==(n=s.get(t))&&void 0!==n?n:null))})),o)))}recalculateAndSaveOverlays(t,e){const n=Gn();let i=new Ie(((t,e)=>t-e)),r=Wn();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,e).next((t=>{for(const r of t)r.keys().forEach((t=>{const s=e.get(t);if(null===s)return;let o=n.get(t)||Ne.empty();o=r.applyToLocalView(s,o),n.set(t,o);const a=(i.get(r.batchId)||Wn()).add(t);i=i.insert(r.batchId,a)}))})).next((()=>{const s=[],o=i.getReverseIterator();for(;o.hasNext();){const i=o.getNext(),a=i.key,h=i.value,l=Hn();h.forEach((t=>{if(!r.has(t)){const i=yi(e.get(t),n.get(t));null!==i&&l.set(t,i),r=r.add(t)}})),s.push(this.documentOverlayCache.saveOverlays(t,a,l))}return me.waitFor(s)})).next((()=>n))}recalculateAndSaveOverlaysForDocumentKeys(t,e){return this.remoteDocumentCache.getEntries(t,e).next((e=>this.recalculateAndSaveOverlays(t,e)))}getDocumentsMatchingQuery(t,e,n,i){return function(t){return le.isDocumentKey(t.path)&&null===t.collectionGroup&&0===t.filters.length}(e)?this.getDocumentsMatchingDocumentQuery(t,e.path):function(t){return null!==t.collectionGroup}(e)?this.getDocumentsMatchingCollectionGroupQuery(t,e,n,i):this.getDocumentsMatchingCollectionQuery(t,e,n,i)}getNextDocuments(t,e,n,i){return this.remoteDocumentCache.getAllFromCollectionGroup(t,e,n,i).next((r=>{const s=i-r.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,e,n.largestBatchId,i-r.size):me.resolve(qn());let o=-1,a=r;return s.next((e=>me.forEach(e,((e,n)=>(o<n.largestBatchId&&(o=n.largestBatchId),r.get(e)?me.resolve():this.remoteDocumentCache.getEntry(t,e).next((t=>{a=a.insert(e,t)}))))).next((()=>this.populateOverlays(t,e,r))).next((()=>this.computeViews(t,a,e,Wn()))).next((t=>({batchId:o,changes:zn(t)})))))}))}getDocumentsMatchingDocumentQuery(t,e){return this.getDocument(t,new le(e)).next((t=>{let e=$n();return t.isFoundDocument()&&(e=e.insert(t.key,t)),e}))}getDocumentsMatchingCollectionGroupQuery(t,e,n,i){const r=e.collectionGroup;let s=$n();return this.indexManager.getCollectionParents(t,r).next((o=>me.forEach(o,(o=>{const a=function(t,e){return new Dn(e,null,t.explicitOrderBy.slice(),t.filters.slice(),t.limit,t.limitType,t.startAt,t.endAt)}(e,o.child(r));return this.getDocumentsMatchingCollectionQuery(t,a,n,i).next((t=>{t.forEach(((t,e)=>{s=s.insert(t,e)}))}))})).next((()=>s))))}getDocumentsMatchingCollectionQuery(t,e,n,i){let r;return this.documentOverlayCache.getOverlaysForCollection(t,e.path,n.largestBatchId).next((s=>(r=s,this.remoteDocumentCache.getDocumentsMatchingQuery(t,e,n,r,i)))).next((t=>{r.forEach(((e,n)=>{const i=n.getKey();null===t.get(i)&&(t=t.insert(i,en.newInvalidDocument(i)))}));let n=$n();return t.forEach(((t,i)=>{const s=r.get(t);void 0!==s&&wi(s.mutation,i,Ne.empty(),ie.now()),Pn(e,i)&&(n=n.insert(t,i))})),n}))}}
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
     */class nr{constructor(t){this.serializer=t,this.cr=new Map,this.lr=new Map}getBundleMetadata(t,e){return me.resolve(this.cr.get(e))}saveBundleMetadata(t,e){return this.cr.set(e.id,function(t){return{id:t.id,version:t.version,createTime:Vi(t.createTime)}}(e)),me.resolve()}getNamedQuery(t,e){return me.resolve(this.lr.get(e))}saveNamedQuery(t,e){return this.lr.set(e.name,function(t){return{name:t.name,query:Wi(t.bundledQuery),readTime:Vi(t.readTime)}}(e)),me.resolve()}}
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
     */class ir{constructor(){this.overlays=new Ie(le.comparator),this.hr=new Map}getOverlay(t,e){return me.resolve(this.overlays.get(e))}getOverlays(t,e){const n=qn();return me.forEach(e,(e=>this.getOverlay(t,e).next((t=>{null!==t&&n.set(e,t)})))).next((()=>n))}saveOverlays(t,e,n){return n.forEach(((n,i)=>{this.ht(t,e,i)})),me.resolve()}removeOverlaysForBatchId(t,e,n){const i=this.hr.get(n);return void 0!==i&&(i.forEach((t=>this.overlays=this.overlays.remove(t))),this.hr.delete(n)),me.resolve()}getOverlaysForCollection(t,e,n){const i=qn(),r=e.length+1,s=new le(e.child("")),o=this.overlays.getIteratorFrom(s);for(;o.hasNext();){const t=o.getNext().value,s=t.getKey();if(!e.isPrefixOf(s.path))break;s.path.length===r&&t.largestBatchId>n&&i.set(t.getKey(),t)}return me.resolve(i)}getOverlaysForCollectionGroup(t,e,n,i){let r=new Ie(((t,e)=>t-e));const s=this.overlays.getIterator();for(;s.hasNext();){const t=s.getNext().value;if(t.getKey().getCollectionGroup()===e&&t.largestBatchId>n){let e=r.get(t.largestBatchId);null===e&&(e=qn(),r=r.insert(t.largestBatchId,e)),e.set(t.getKey(),t)}}const o=qn(),a=r.getIterator();for(;a.hasNext()&&(a.getNext().value.forEach(((t,e)=>o.set(t,e))),!(o.size()>=i)););return me.resolve(o)}ht(t,e,n){const i=this.overlays.get(n.key);if(null!==i){const t=this.hr.get(i.largestBatchId).delete(n.key);this.hr.set(i.largestBatchId,t)}this.overlays=this.overlays.insert(n.key,new Ri(e,n));let r=this.hr.get(e);void 0===r&&(r=Wn(),this.hr.set(e,r)),this.hr.set(e,r.add(n.key))}}
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
     */class rr{constructor(){this.Pr=new Ce(sr.Ir),this.Tr=new Ce(sr.Er)}isEmpty(){return this.Pr.isEmpty()}addReference(t,e){const n=new sr(t,e);this.Pr=this.Pr.add(n),this.Tr=this.Tr.add(n)}dr(t,e){t.forEach((t=>this.addReference(t,e)))}removeReference(t,e){this.Ar(new sr(t,e))}Rr(t,e){t.forEach((t=>this.removeReference(t,e)))}Vr(t){const e=new le(new oe([])),n=new sr(e,t),i=new sr(e,t+1),r=[];return this.Tr.forEachInRange([n,i],(t=>{this.Ar(t),r.push(t.key)})),r}mr(){this.Pr.forEach((t=>this.Ar(t)))}Ar(t){this.Pr=this.Pr.delete(t),this.Tr=this.Tr.delete(t)}gr(t){const e=new le(new oe([])),n=new sr(e,t),i=new sr(e,t+1);let r=Wn();return this.Tr.forEachInRange([n,i],(t=>{r=r.add(t.key)})),r}containsKey(t){const e=new sr(t,0),n=this.Pr.firstAfterOrEqual(e);return null!==n&&t.isEqual(n.key)}}class sr{constructor(t,e){this.key=t,this.pr=e}static Ir(t,e){return le.comparator(t.key,e.key)||ee(t.pr,e.pr)}static Er(t,e){return ee(t.pr,e.pr)||le.comparator(t.key,e.key)}}
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
     */class or{constructor(t,e){this.indexManager=t,this.referenceDelegate=e,this.mutationQueue=[],this.yr=1,this.wr=new Ce(sr.Ir)}checkEmpty(t){return me.resolve(0===this.mutationQueue.length)}addMutationBatch(t,e,n,i){const r=this.yr;this.yr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const s=new Ni(r,e,n,i);this.mutationQueue.push(s);for(const e of i)this.wr=this.wr.add(new sr(e.key,r)),this.indexManager.addToCollectionParentIndex(t,e.key.path.popLast());return me.resolve(s)}lookupMutationBatch(t,e){return me.resolve(this.Sr(e))}getNextMutationBatchAfterBatchId(t,e){const n=e+1,i=this.br(n),r=i<0?0:i;return me.resolve(this.mutationQueue.length>r?this.mutationQueue[r]:null)}getHighestUnacknowledgedBatchId(){return me.resolve(0===this.mutationQueue.length?-1:this.yr-1)}getAllMutationBatches(t){return me.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,e){const n=new sr(e,0),i=new sr(e,Number.POSITIVE_INFINITY),r=[];return this.wr.forEachInRange([n,i],(t=>{const e=this.Sr(t.pr);r.push(e)})),me.resolve(r)}getAllMutationBatchesAffectingDocumentKeys(t,e){let n=new Ce(ee);return e.forEach((t=>{const e=new sr(t,0),i=new sr(t,Number.POSITIVE_INFINITY);this.wr.forEachInRange([e,i],(t=>{n=n.add(t.pr)}))})),me.resolve(this.Dr(n))}getAllMutationBatchesAffectingQuery(t,e){const n=e.path,i=n.length+1;let r=n;le.isDocumentKey(r)||(r=r.child(""));const s=new sr(new le(r),0);let o=new Ce(ee);return this.wr.forEachWhile((t=>{const e=t.key.path;return!!n.isPrefixOf(e)&&(e.length===i&&(o=o.add(t.pr)),!0)}),s),me.resolve(this.Dr(o))}Dr(t){const e=[];return t.forEach((t=>{const n=this.Sr(t);null!==n&&e.push(n)})),e}removeMutationBatch(t,e){Bt(0===this.Cr(e.batchId,"removed")),this.mutationQueue.shift();let n=this.wr;return me.forEach(e.mutations,(i=>{const r=new sr(i.key,e.batchId);return n=n.delete(r),this.referenceDelegate.markPotentiallyOrphaned(t,i.key)})).next((()=>{this.wr=n}))}Mn(t){}containsKey(t,e){const n=new sr(e,0),i=this.wr.firstAfterOrEqual(n);return me.resolve(e.isEqual(i&&i.key))}performConsistencyCheck(t){return this.mutationQueue.length,me.resolve()}Cr(t,e){return this.br(t)}br(t){return 0===this.mutationQueue.length?0:t-this.mutationQueue[0].batchId}Sr(t){const e=this.br(t);return e<0||e>=this.mutationQueue.length?null:this.mutationQueue[e]}}
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
     */class ar{constructor(t){this.vr=t,this.docs=new Ie(le.comparator),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,e){const n=e.key,i=this.docs.get(n),r=i?i.size:0,s=this.vr(e);return this.docs=this.docs.insert(n,{document:e.mutableCopy(),size:s}),this.size+=s-r,this.indexManager.addToCollectionParentIndex(t,n.path.popLast())}removeEntry(t){const e=this.docs.get(t);e&&(this.docs=this.docs.remove(t),this.size-=e.size)}getEntry(t,e){const n=this.docs.get(e);return me.resolve(n?n.document.mutableCopy():en.newInvalidDocument(e))}getEntries(t,e){let n=Bn();return e.forEach((t=>{const e=this.docs.get(t);n=n.insert(t,e?e.document.mutableCopy():en.newInvalidDocument(t))})),me.resolve(n)}getDocumentsMatchingQuery(t,e,n,i){let r=Bn();const s=e.path,o=new le(s.child("")),a=this.docs.getIteratorFrom(o);for(;a.hasNext();){const{key:t,value:{document:o}}=a.getNext();if(!s.isPrefixOf(t.path))break;t.path.length>s.length+1||fe(ce(o),n)<=0||(i.has(o.key)||Pn(e,o))&&(r=r.insert(o.key,o.mutableCopy()))}return me.resolve(r)}getAllFromCollectionGroup(t,e,n,i){Ut()}Fr(t,e){return me.forEach(this.docs,(t=>e(t)))}newChangeBuffer(t){return new hr(this)}getSize(t){return me.resolve(this.size)}}class hr extends Zi{constructor(t){super(),this.ar=t}applyChanges(t){const e=[];return this.changes.forEach(((n,i)=>{i.isValidDocument()?e.push(this.ar.addEntry(t,i)):this.ar.removeEntry(n)})),me.waitFor(e)}getFromCache(t,e){return this.ar.getEntry(t,e)}getAllFromCache(t,e){return this.ar.getEntries(t,e)}}
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
     */class lr{constructor(t){this.persistence=t,this.Mr=new Vn((t=>An(t)),Cn),this.lastRemoteSnapshotVersion=re.min(),this.highestTargetId=0,this.Or=0,this.Nr=new rr,this.targetCount=0,this.Lr=Ji.Nn()}forEachTarget(t,e){return this.Mr.forEach(((t,n)=>e(n))),me.resolve()}getLastRemoteSnapshotVersion(t){return me.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return me.resolve(this.Or)}allocateTargetId(t){return this.highestTargetId=this.Lr.next(),me.resolve(this.highestTargetId)}setTargetsMetadata(t,e,n){return n&&(this.lastRemoteSnapshotVersion=n),e>this.Or&&(this.Or=e),me.resolve()}qn(t){this.Mr.set(t.target,t);const e=t.targetId;e>this.highestTargetId&&(this.Lr=new Ji(e),this.highestTargetId=e),t.sequenceNumber>this.Or&&(this.Or=t.sequenceNumber)}addTargetData(t,e){return this.qn(e),this.targetCount+=1,me.resolve()}updateTargetData(t,e){return this.qn(e),me.resolve()}removeTargetData(t,e){return this.Mr.delete(e.target),this.Nr.Vr(e.targetId),this.targetCount-=1,me.resolve()}removeTargets(t,e,n){let i=0;const r=[];return this.Mr.forEach(((s,o)=>{o.sequenceNumber<=e&&null===n.get(o.targetId)&&(this.Mr.delete(s),r.push(this.removeMatchingKeysForTargetId(t,o.targetId)),i++)})),me.waitFor(r).next((()=>i))}getTargetCount(t){return me.resolve(this.targetCount)}getTargetData(t,e){const n=this.Mr.get(e)||null;return me.resolve(n)}addMatchingKeys(t,e,n){return this.Nr.dr(e,n),me.resolve()}removeMatchingKeys(t,e,n){this.Nr.Rr(e,n);const i=this.persistence.referenceDelegate,r=[];return i&&e.forEach((e=>{r.push(i.markPotentiallyOrphaned(t,e))})),me.waitFor(r)}removeMatchingKeysForTargetId(t,e){return this.Nr.Vr(e),me.resolve()}getMatchingKeysForTargetId(t,e){const n=this.Nr.gr(e);return me.resolve(n)}containsKey(t,e){return me.resolve(this.Nr.containsKey(e))}}
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
     */class cr{constructor(t,e){this.Br={},this.overlays={},this.kr=new ve(0),this.qr=!1,this.qr=!0,this.referenceDelegate=t(this),this.Qr=new lr(this),this.indexManager=new Xi,this.remoteDocumentCache=function(t){return new ar(t)}((t=>this.referenceDelegate.Kr(t))),this.serializer=new Qi(e),this.$r=new nr(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.qr=!1,Promise.resolve()}get started(){return this.qr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let e=this.overlays[t.toKey()];return e||(e=new ir,this.overlays[t.toKey()]=e),e}getMutationQueue(t,e){let n=this.Br[t.toKey()];return n||(n=new or(e,this.referenceDelegate),this.Br[t.toKey()]=n),n}getTargetCache(){return this.Qr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.$r}runTransaction(t,e,n){Mt("MemoryPersistence","Starting transaction:",t);const i=new ur(this.kr.next());return this.referenceDelegate.Ur(),n(i).next((t=>this.referenceDelegate.Wr(i).next((()=>t)))).toPromise().then((t=>(i.raiseOnCommittedEvent(),t)))}Gr(t,e){return me.or(Object.values(this.Br).map((n=>()=>n.containsKey(t,e))))}}class ur extends pe{constructor(t){super(),this.currentSequenceNumber=t}}class fr{constructor(t){this.persistence=t,this.zr=new rr,this.jr=null}static Hr(t){return new fr(t)}get Jr(){if(this.jr)return this.jr;throw Ut()}addReference(t,e,n){return this.zr.addReference(n,e),this.Jr.delete(n.toString()),me.resolve()}removeReference(t,e,n){return this.zr.removeReference(n,e),this.Jr.add(n.toString()),me.resolve()}markPotentiallyOrphaned(t,e){return this.Jr.add(e.toString()),me.resolve()}removeTarget(t,e){this.zr.Vr(e.targetId).forEach((t=>this.Jr.add(t.toString())));const n=this.persistence.getTargetCache();return n.getMatchingKeysForTargetId(t,e.targetId).next((t=>{t.forEach((t=>this.Jr.add(t.toString())))})).next((()=>n.removeTargetData(t,e)))}Ur(){this.jr=new Set}Wr(t){const e=this.persistence.getRemoteDocumentCache().newChangeBuffer();return me.forEach(this.Jr,(n=>{const i=le.fromPath(n);return this.Yr(t,i).next((t=>{t||e.removeEntry(i,re.min())}))})).next((()=>(this.jr=null,e.apply(t))))}updateLimboDocument(t,e){return this.Yr(t,e).next((t=>{t?this.Jr.delete(e.toString()):this.Jr.add(e.toString())}))}Kr(t){return 0}Yr(t,e){return me.or([()=>me.resolve(this.zr.containsKey(e)),()=>this.persistence.getTargetCache().containsKey(t,e),()=>this.persistence.Gr(t,e)])}}
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
     */class dr{constructor(t,e,n,i){this.targetId=t,this.fromCache=e,this.qi=n,this.Qi=i}static Ki(t,e){let n=Wn(),i=Wn();for(const t of e.docChanges)switch(t.type){case 0:n=n.add(t.doc.key);break;case 1:i=i.add(t.doc.key)}return new dr(t,e.fromCache,n,i)}}
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
     */class pr{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(t){this._documentReadCount+=t}}
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
     */class gr{constructor(){this.$i=!1,this.Ui=!1,this.Wi=100,this.Gi=c()?8:function(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}("undefined"!=typeof navigator&&"string"==typeof navigator.userAgent?navigator.userAgent:"")>0?6:4}initialize(t,e){this.zi=t,this.indexManager=e,this.$i=!0}getDocumentsMatchingQuery(t,e,n,i){const r={result:null};return this.ji(t,e).next((t=>{r.result=t})).next((()=>{if(!r.result)return this.Hi(t,e,i,n).next((t=>{r.result=t}))})).next((()=>{if(r.result)return;const n=new pr;return this.Ji(t,e,n).next((i=>{if(r.result=i,this.Ui)return this.Yi(t,e,n,i.size)}))})).next((()=>r.result))}Yi(t,e,n,i){return n.documentReadCount<this.Wi?(Lt()<=b.DEBUG&&Mt("QueryEngine","SDK will not create cache indexes for query:",Mn(e),"since it only creates cache indexes for collection contains","more than or equal to",this.Wi,"documents"),me.resolve()):(Lt()<=b.DEBUG&&Mt("QueryEngine","Query:",Mn(e),"scans",n.documentReadCount,"local documents and returns",i,"documents as results."),n.documentReadCount>this.Gi*i?(Lt()<=b.DEBUG&&Mt("QueryEngine","The SDK decides to create cache indexes for query:",Mn(e),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(t,Rn(e))):me.resolve())}ji(t,e){if(Nn(e))return me.resolve(null);let n=Rn(e);return this.indexManager.getIndexType(t,n).next((i=>0===i?null:(null!==e.limit&&1===i&&(e=On(e,null,"F"),n=Rn(e)),this.indexManager.getDocumentsMatchingTarget(t,n).next((i=>{const r=Wn(...i);return this.zi.getDocuments(t,r).next((i=>this.indexManager.getMinOffset(t,n).next((n=>{const s=this.Zi(e,i);return this.Xi(e,s,r,n.readTime)?this.ji(t,On(e,null,"F")):this.es(t,s,e,n)}))))})))))}Hi(t,e,n,i){return Nn(e)||i.isEqual(re.min())?me.resolve(null):this.zi.getDocuments(t,n).next((r=>{const s=this.Zi(e,r);return this.Xi(e,s,n,i)?me.resolve(null):(Lt()<=b.DEBUG&&Mt("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),Mn(e)),this.es(t,s,e,function(t,e){const n=t.toTimestamp().seconds,i=t.toTimestamp().nanoseconds+1,r=re.fromTimestamp(1e9===i?new ie(n+1,0):new ie(n,i));return new ue(r,le.empty(),e)}(i,-1)).next((t=>t)))}))}Zi(t,e){let n=new Ce(function(t){return(e,n)=>{let i=!1;for(const r of kn(t)){const t=Fn(r,e,n);if(0!==t)return t;i=i||r.field.isKeyField()}return 0}}(t));return e.forEach(((e,i)=>{Pn(t,i)&&(n=n.add(i))})),n}Xi(t,e,n,i){if(null===t.limit)return!1;if(n.size!==e.size)return!0;const r="F"===t.limitType?e.last():e.first();return!!r&&(r.hasPendingWrites||r.version.compareTo(i)>0)}Ji(t,e,n){return Lt()<=b.DEBUG&&Mt("QueryEngine","Using full collection scan to execute query:",Mn(e)),this.zi.getDocumentsMatchingQuery(t,e,ue.min(),n)}es(t,e,n,i){return this.zi.getDocumentsMatchingQuery(t,n,i).next((t=>(e.forEach((e=>{t=t.insert(e.key,e)})),t)))}}
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
     */class mr{constructor(t,e,n,i){this.persistence=t,this.ts=e,this.serializer=i,this.ns=new Ie(ee),this.rs=new Vn((t=>An(t)),Cn),this.ss=new Map,this.os=t.getRemoteDocumentCache(),this.Qr=t.getTargetCache(),this.$r=t.getBundleCache(),this._s(n)}_s(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new er(this.os,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.os.setIndexManager(this.indexManager),this.ts.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(e=>t.collect(e,this.ns)))}}async function yr(t,e){const n=jt(t);return await n.persistence.runTransaction("Handle user change","readonly",(t=>{let i;return n.mutationQueue.getAllMutationBatches(t).next((r=>(i=r,n._s(e),n.mutationQueue.getAllMutationBatches(t)))).next((e=>{const r=[],s=[];let o=Wn();for(const t of i){r.push(t.batchId);for(const e of t.mutations)o=o.add(e.key)}for(const t of e){s.push(t.batchId);for(const e of t.mutations)o=o.add(e.key)}return n.localDocuments.getDocuments(t,o).next((t=>({us:t,removedBatchIds:r,addedBatchIds:s})))}))}))}function vr(t,e){const n=jt(t);return n.persistence.runTransaction("Get next mutation batch","readonly",(t=>(void 0===e&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(t,e))))}class wr{constructor(){this.activeTargetIds=Xn}As(t){this.activeTargetIds=this.activeTargetIds.add(t)}Rs(t){this.activeTargetIds=this.activeTargetIds.delete(t)}ds(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class Er{constructor(){this.no=new wr,this.ro={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,e,n){}addLocalQueryTarget(t){return this.no.As(t),this.ro[t]||"not-current"}updateQueryState(t,e,n){this.ro[t]=e}removeLocalQueryTarget(t){this.no.Rs(t)}isLocalQueryTarget(t){return this.no.activeTargetIds.has(t)}clearQueryState(t){delete this.ro[t]}getAllActiveQueryTargets(){return this.no.activeTargetIds}isActiveQueryTarget(t){return this.no.activeTargetIds.has(t)}start(){return this.no=new wr,Promise.resolve()}handleUserChange(t,e,n){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}
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
     */class br{io(t){}shutdown(){}}
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
     */class _r{constructor(){this.so=()=>this.oo(),this._o=()=>this.ao(),this.uo=[],this.co()}io(t){this.uo.push(t)}shutdown(){window.removeEventListener("online",this.so),window.removeEventListener("offline",this._o)}co(){window.addEventListener("online",this.so),window.addEventListener("offline",this._o)}oo(){Mt("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const t of this.uo)t(0)}ao(){Mt("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const t of this.uo)t(1)}static D(){return"undefined"!=typeof window&&void 0!==window.addEventListener&&void 0!==window.removeEventListener}}
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
     */let Tr=null;function Ir(){return null===Tr?Tr=268435456+Math.round(2147483648*Math.random()):Tr++,"0x"+Tr.toString(16)
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
     */}const Sr={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};
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
     */class Ar{constructor(t){this.lo=t.lo,this.ho=t.ho}Po(t){this.Io=t}To(t){this.Eo=t}Ao(t){this.Ro=t}onMessage(t){this.Vo=t}close(){this.ho()}send(t){this.lo(t)}mo(){this.Io()}fo(){this.Eo()}po(t){this.Ro(t)}yo(t){this.Vo(t)}}
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
     */const Cr="WebChannelConnection";class Dr extends class{constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const e=t.ssl?"https":"http",n=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.wo=e+"://"+t.host,this.So=`projects/${n}/databases/${i}`,this.bo="(default)"===this.databaseId.database?`project_id=${n}`:`project_id=${n}&database_id=${i}`}get Do(){return!1}Co(t,e,n,i,r){const s=Ir(),o=this.vo(t,e.toUriEncodedString());Mt("RestConnection",`Sending RPC '${t}' ${s}:`,o,n);const a={"google-cloud-resource-prefix":this.So,"x-goog-request-params":this.bo};return this.Fo(a,i,r),this.Mo(t,o,a,n).then((e=>(Mt("RestConnection",`Received RPC '${t}' ${s}: `,e),e)),(e=>{throw Ft("RestConnection",`RPC '${t}' ${s} failed with error: `,e,"url: ",o,"request:",n),e}))}xo(t,e,n,i,r,s){return this.Co(t,e,n,i,r)}Fo(t,e,n){t["X-Goog-Api-Client"]="gl-js/ fire/"+Ot,t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),e&&e.headers.forEach(((e,n)=>t[n]=e)),n&&n.headers.forEach(((e,n)=>t[n]=e))}vo(t,e){const n=Sr[t];return`${this.wo}/v1/${e}:${n}`}terminate(){}}{constructor(t){super(t),this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams,this.longPollingOptions=t.longPollingOptions}Mo(t,e,n,i){const r=Ir();return new Promise(((s,o)=>{const a=new Et;a.setWithCredentials(!0),a.listenOnce(Tt.COMPLETE,(()=>{try{switch(a.getLastErrorCode()){case It.NO_ERROR:const e=a.getResponseJson();Mt(Cr,`XHR for RPC '${t}' ${r} received:`,JSON.stringify(e)),s(e);break;case It.TIMEOUT:Mt(Cr,`RPC '${t}' ${r} timed out`),o(new zt($t.DEADLINE_EXCEEDED,"Request time out"));break;case It.HTTP_ERROR:const n=a.getStatus();if(Mt(Cr,`RPC '${t}' ${r} failed with status:`,n,"response text:",a.getResponseText()),n>0){let t=a.getResponseJson();Array.isArray(t)&&(t=t[0]);const e=null==t?void 0:t.error;if(e&&e.status&&e.message){const t=function(t){const e=t.toLowerCase().replace(/_/g,"-");return Object.values($t).indexOf(e)>=0?e:$t.UNKNOWN}(e.status);o(new zt(t,e.message))}else o(new zt($t.UNKNOWN,"Server responded with status "+a.getStatus()))}else o(new zt($t.UNAVAILABLE,"Connection failed."));break;default:Ut()}}finally{Mt(Cr,`RPC '${t}' ${r} completed.`)}}));const h=JSON.stringify(i);Mt(Cr,`RPC '${t}' ${r} sending request:`,i),a.send(e,"POST",h,n,15)}))}Oo(t,e,n){const i=Ir(),r=[this.wo,"/","google.firestore.v1.Firestore","/",t,"/channel"],s=Dt(),o=Ct(),a={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},h=this.longPollingOptions.timeoutSeconds;void 0!==h&&(a.longPollingTimeout=Math.round(1e3*h)),this.useFetchStreams&&(a.xmlHttpFactory=new bt({})),this.Fo(a.initMessageHeaders,e,n),a.encodeInitMessageHeaders=!0;const l=r.join("");Mt(Cr,`Creating RPC '${t}' stream ${i}: ${l}`,a);const c=s.createWebChannel(l,a);let u=!1,f=!1;const d=new Ar({lo:e=>{f?Mt(Cr,`Not sending because RPC '${t}' stream ${i} is closed:`,e):(u||(Mt(Cr,`Opening RPC '${t}' stream ${i} transport.`),c.open(),u=!0),Mt(Cr,`RPC '${t}' stream ${i} sending:`,e),c.send(e))},ho:()=>c.close()}),p=(t,e,n)=>{t.listen(e,(t=>{try{n(t)}catch(t){setTimeout((()=>{throw t}),0)}}))};return p(c,_t.EventType.OPEN,(()=>{f||(Mt(Cr,`RPC '${t}' stream ${i} transport opened.`),d.mo())})),p(c,_t.EventType.CLOSE,(()=>{f||(f=!0,Mt(Cr,`RPC '${t}' stream ${i} transport closed`),d.po())})),p(c,_t.EventType.ERROR,(e=>{f||(f=!0,Ft(Cr,`RPC '${t}' stream ${i} transport errored:`,e),d.po(new zt($t.UNAVAILABLE,"The operation could not be completed")))})),p(c,_t.EventType.MESSAGE,(e=>{var n;if(!f){const r=e.data[0];Bt(!!r);const s=r,o=s.error||(null===(n=s[0])||void 0===n?void 0:n.error);if(o){Mt(Cr,`RPC '${t}' stream ${i} received error:`,o);const e=o.status;let n=function(t){const e=Oi[t];if(void 0!==e)return function(t){if(void 0===t)return Pt("GRPC error has no .code"),$t.UNKNOWN;switch(t){case Oi.OK:return $t.OK;case Oi.CANCELLED:return $t.CANCELLED;case Oi.UNKNOWN:return $t.UNKNOWN;case Oi.DEADLINE_EXCEEDED:return $t.DEADLINE_EXCEEDED;case Oi.RESOURCE_EXHAUSTED:return $t.RESOURCE_EXHAUSTED;case Oi.INTERNAL:return $t.INTERNAL;case Oi.UNAVAILABLE:return $t.UNAVAILABLE;case Oi.UNAUTHENTICATED:return $t.UNAUTHENTICATED;case Oi.INVALID_ARGUMENT:return $t.INVALID_ARGUMENT;case Oi.NOT_FOUND:return $t.NOT_FOUND;case Oi.ALREADY_EXISTS:return $t.ALREADY_EXISTS;case Oi.PERMISSION_DENIED:return $t.PERMISSION_DENIED;case Oi.FAILED_PRECONDITION:return $t.FAILED_PRECONDITION;case Oi.ABORTED:return $t.ABORTED;case Oi.OUT_OF_RANGE:return $t.OUT_OF_RANGE;case Oi.UNIMPLEMENTED:return $t.UNIMPLEMENTED;case Oi.DATA_LOSS:return $t.DATA_LOSS;default:return Ut()}}(e)}(e),r=o.message;void 0===n&&(n=$t.INTERNAL,r="Unknown error status: "+e+" with message "+o.message),f=!0,d.po(new zt(n,r)),c.close()}else Mt(Cr,`RPC '${t}' stream ${i} received:`,r),d.yo(r)}})),p(o,At.STAT_EVENT,(e=>{e.stat===St.PROXY?Mt(Cr,`RPC '${t}' stream ${i} detected buffering proxy`):e.stat===St.NOPROXY&&Mt(Cr,`RPC '${t}' stream ${i} detected no buffering proxy`)})),setTimeout((()=>{d.fo()}),0),d}}function Nr(){return"undefined"!=typeof document?document:null}
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
     */function kr(t){return new Li(t,!0)}
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
     */class Rr{constructor(t,e,n=1e3,i=1.5,r=6e4){this.oi=t,this.timerId=e,this.No=n,this.Lo=i,this.Bo=r,this.ko=0,this.qo=null,this.Qo=Date.now(),this.reset()}reset(){this.ko=0}Ko(){this.ko=this.Bo}$o(t){this.cancel();const e=Math.floor(this.ko+this.Uo()),n=Math.max(0,Date.now()-this.Qo),i=Math.max(0,e-n);i>0&&Mt("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.ko} ms, delay with jitter: ${e} ms, last attempt: ${n} ms ago)`),this.qo=this.oi.enqueueAfterDelay(this.timerId,i,(()=>(this.Qo=Date.now(),t()))),this.ko*=this.Lo,this.ko<this.No&&(this.ko=this.No),this.ko>this.Bo&&(this.ko=this.Bo)}Wo(){null!==this.qo&&(this.qo.skipDelay(),this.qo=null)}cancel(){null!==this.qo&&(this.qo.cancel(),this.qo=null)}Uo(){return(Math.random()-.5)*this.ko}}
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
     */class Or{constructor(t,e,n,i,r,s,o,a){this.oi=t,this.Go=n,this.zo=i,this.connection=r,this.authCredentialsProvider=s,this.appCheckCredentialsProvider=o,this.listener=a,this.state=0,this.jo=0,this.Ho=null,this.Jo=null,this.stream=null,this.Yo=new Rr(t,e)}Zo(){return 1===this.state||5===this.state||this.Xo()}Xo(){return 2===this.state||3===this.state}start(){4!==this.state?this.auth():this.e_()}async stop(){this.Zo()&&await this.close(0)}t_(){this.state=0,this.Yo.reset()}n_(){this.Xo()&&null===this.Ho&&(this.Ho=this.oi.enqueueAfterDelay(this.Go,6e4,(()=>this.r_())))}i_(t){this.s_(),this.stream.send(t)}async r_(){if(this.Xo())return this.close(0)}s_(){this.Ho&&(this.Ho.cancel(),this.Ho=null)}o_(){this.Jo&&(this.Jo.cancel(),this.Jo=null)}async close(t,e){this.s_(),this.o_(),this.Yo.cancel(),this.jo++,4!==t?this.Yo.reset():e&&e.code===$t.RESOURCE_EXHAUSTED?(Pt(e.toString()),Pt("Using maximum backoff delay to prevent overloading the backend."),this.Yo.Ko()):e&&e.code===$t.UNAUTHENTICATED&&3!==this.state&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),null!==this.stream&&(this.__(),this.stream.close(),this.stream=null),this.state=t,await this.listener.Ao(e)}__(){}auth(){this.state=1;const t=this.a_(this.jo),e=this.jo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([t,n])=>{this.jo===e&&this.u_(t,n)}),(e=>{t((()=>{const t=new zt($t.UNKNOWN,"Fetching auth token failed: "+e.message);return this.c_(t)}))}))}u_(t,e){const n=this.a_(this.jo);this.stream=this.l_(t,e),this.stream.Po((()=>{n((()=>this.listener.Po()))})),this.stream.To((()=>{n((()=>(this.state=2,this.Jo=this.oi.enqueueAfterDelay(this.zo,1e4,(()=>(this.Xo()&&(this.state=3),Promise.resolve()))),this.listener.To())))})),this.stream.Ao((t=>{n((()=>this.c_(t)))})),this.stream.onMessage((t=>{n((()=>this.onMessage(t)))}))}e_(){this.state=5,this.Yo.$o((async()=>{this.state=0,this.start()}))}c_(t){return Mt("PersistentStream",`close with error: ${t}`),this.stream=null,this.close(4,t)}a_(t){return e=>{this.oi.enqueueAndForget((()=>this.jo===t?e():(Mt("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class xr extends Or{constructor(t,e,n,i,r,s){super(t,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",e,n,i,s),this.serializer=r,this.T_=!1}get E_(){return this.T_}start(){this.T_=!1,this.lastStreamToken=void 0,super.start()}__(){this.T_&&this.d_([])}l_(t,e){return this.connection.Oo("Write",t,e)}onMessage(t){if(Bt(!!t.streamToken),this.lastStreamToken=t.streamToken,this.T_){this.Yo.reset();const e=function(t,e){return t&&t.length>0?(Bt(void 0!==e),t.map((t=>function(t,e){let n=t.updateTime?Vi(t.updateTime):Vi(e);return n.isEqual(re.min())&&(n=Vi(e)),new di(n,t.transformResults||[])}(t,e)))):[]}(t.writeResults,t.commitTime),n=Vi(t.commitTime);return this.listener.A_(n,e)}return Bt(!t.writeResults||0===t.writeResults.length),this.T_=!0,this.listener.R_()}V_(){const t={};t.database=function(t){return new oe(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}(this.serializer),this.i_(t)}d_(t){const e={streamToken:this.lastStreamToken,writes:t.map((t=>function(t,e){let n;if(e instanceof _i)n={update:zi(t,e.key,e.value)};else if(e instanceof Ci)n={delete:ji(t,e.key)};else if(e instanceof Ti)n={update:zi(t,e.key,e.data),updateMask:Ki(e.fieldMask)};else{if(!(e instanceof Di))return Ut();n={verify:ji(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map((t=>function(t,e){const n=e.transform;if(n instanceof ri)return{fieldPath:e.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(n instanceof si)return{fieldPath:e.field.canonicalString(),appendMissingElements:{values:n.elements}};if(n instanceof ai)return{fieldPath:e.field.canonicalString(),removeAllFromArray:{values:n.elements}};if(n instanceof li)return{fieldPath:e.field.canonicalString(),increment:n.Pe};throw Ut()}(0,t)))),e.precondition.isNone||(n.currentDocument=function(t,e){return void 0!==e.updateTime?{updateTime:Fi(t,e.updateTime)}:void 0!==e.exists?{exists:e.exists}:Ut()}(t,e.precondition)),n}(this.serializer,t)))};this.i_(e)}}
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
     */class Lr extends class{}{constructor(t,e,n,i){super(),this.authCredentials=t,this.appCheckCredentials=e,this.connection=n,this.serializer=i,this.m_=!1}f_(){if(this.m_)throw new zt($t.FAILED_PRECONDITION,"The client has already been terminated.")}Co(t,e,n,i){return this.f_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([r,s])=>this.connection.Co(t,Bi(e,n),i,r,s))).catch((t=>{throw"FirebaseError"===t.name?(t.code===$t.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),t):new zt($t.UNKNOWN,t.toString())}))}xo(t,e,n,i,r){return this.f_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([s,o])=>this.connection.xo(t,Bi(e,n),i,s,o,r))).catch((t=>{throw"FirebaseError"===t.name?(t.code===$t.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),t):new zt($t.UNKNOWN,t.toString())}))}terminate(){this.m_=!0,this.connection.terminate()}}class Mr{constructor(t,e){this.asyncQueue=t,this.onlineStateHandler=e,this.state="Unknown",this.g_=0,this.p_=null,this.y_=!0}w_(){0===this.g_&&(this.S_("Unknown"),this.p_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this.p_=null,this.b_("Backend didn't respond within 10 seconds."),this.S_("Offline"),Promise.resolve()))))}D_(t){"Online"===this.state?this.S_("Unknown"):(this.g_++,this.g_>=1&&(this.C_(),this.b_(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.S_("Offline")))}set(t){this.C_(),this.g_=0,"Online"===t&&(this.y_=!1),this.S_(t)}S_(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}b_(t){const e=`Could not reach Cloud Firestore backend. ${t}\nThis typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.y_?(Pt(e),this.y_=!1):Mt("OnlineStateTracker",e)}C_(){null!==this.p_&&(this.p_.cancel(),this.p_=null)}}
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
     */class Pr{constructor(t,e,n,i,r){this.localStore=t,this.datastore=e,this.asyncQueue=n,this.remoteSyncer={},this.v_=[],this.F_=new Map,this.M_=new Set,this.x_=[],this.O_=r,this.O_.io((t=>{n.enqueueAndForget((async()=>{Ur(this)&&(Mt("RemoteStore","Restarting streams for network reachability change."),await async function(t){const e=jt(t);e.M_.add(4),await Vr(e),e.N_.set("Unknown"),e.M_.delete(4),await Fr(e)}(this))}))})),this.N_=new Mr(n,i)}}async function Fr(t){if(Ur(t))for(const e of t.x_)await e(!0)}async function Vr(t){for(const e of t.x_)await e(!1)}function Ur(t){return 0===jt(t).M_.size}async function Br(t,e,n){if(!ye(e))throw e;t.M_.add(1),await Vr(t),t.N_.set("Offline"),n||(n=()=>function(t){const e=jt(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",(t=>e.Qr.getLastRemoteSnapshotVersion(t)))}(t.localStore)),t.asyncQueue.enqueueRetryable((async()=>{Mt("RemoteStore","Retrying IndexedDB access"),await n(),t.M_.delete(1),await Fr(t)}))}function jr(t,e){return e().catch((n=>Br(t,n,e)))}async function $r(t){const e=jt(t),n=Jr(e);let i=e.v_.length>0?e.v_[e.v_.length-1].batchId:-1;for(;zr(e);)try{const t=await vr(e.localStore,i);if(null===t){0===e.v_.length&&n.n_();break}i=t.batchId,qr(e,t)}catch(t){await Br(e,t)}Hr(e)&&Gr(e)}function zr(t){return Ur(t)&&t.v_.length<10}function qr(t,e){t.v_.push(e);const n=Jr(t);n.Xo()&&n.E_&&n.d_(e.mutations)}function Hr(t){return Ur(t)&&!Jr(t).Zo()&&t.v_.length>0}function Gr(t){Jr(t).start()}async function Kr(t){Jr(t).V_()}async function Qr(t){const e=Jr(t);for(const n of t.v_)e.d_(n.mutations)}async function Wr(t,e,n){const i=t.v_.shift(),r=ki.from(i,e,n);await jr(t,(()=>t.remoteSyncer.applySuccessfulWrite(r))),await $r(t)}async function Xr(t,e){e&&Jr(t).E_&&await async function(t,e){if(function(t){return function(t){switch(t){default:return Ut();case $t.CANCELLED:case $t.UNKNOWN:case $t.DEADLINE_EXCEEDED:case $t.RESOURCE_EXHAUSTED:case $t.INTERNAL:case $t.UNAVAILABLE:case $t.UNAUTHENTICATED:return!1;case $t.INVALID_ARGUMENT:case $t.NOT_FOUND:case $t.ALREADY_EXISTS:case $t.PERMISSION_DENIED:case $t.FAILED_PRECONDITION:case $t.ABORTED:case $t.OUT_OF_RANGE:case $t.UNIMPLEMENTED:case $t.DATA_LOSS:return!0}}(t)&&t!==$t.ABORTED}(e.code)){const n=t.v_.shift();Jr(t).t_(),await jr(t,(()=>t.remoteSyncer.rejectFailedWrite(n.batchId,e))),await $r(t)}}(t,e),Hr(t)&&Gr(t)}async function Yr(t,e){const n=jt(t);n.asyncQueue.verifyOperationInProgress(),Mt("RemoteStore","RemoteStore received new credentials");const i=Ur(n);n.M_.add(3),await Vr(n),i&&n.N_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.M_.delete(3),await Fr(n)}function Jr(t){return t.k_||(t.k_=function(t,e,n){const i=jt(t);return i.f_(),new xr(e,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,n)}(t.datastore,t.asyncQueue,{Po:()=>Promise.resolve(),To:Kr.bind(null,t),Ao:Xr.bind(null,t),R_:Qr.bind(null,t),A_:Wr.bind(null,t)}),t.x_.push((async e=>{e?(t.k_.t_(),await $r(t)):(await t.k_.stop(),t.v_.length>0&&(Mt("RemoteStore",`Stopping write stream with ${t.v_.length} pending writes`),t.v_=[]))}))),t.k_
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
     */}class Zr{constructor(t,e,n,i,r){this.asyncQueue=t,this.timerId=e,this.targetTimeMs=n,this.op=i,this.removalCallback=r,this.deferred=new qt,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((t=>{}))}get promise(){return this.deferred.promise}static createAndSchedule(t,e,n,i,r){const s=Date.now()+n,o=new Zr(t,e,s,i,r);return o.start(n),o}start(t){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){null!==this.timerHandle&&(this.clearTimeout(),this.deferred.reject(new zt($t.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>null!==this.timerHandle?(this.clearTimeout(),this.op().then((t=>this.deferred.resolve(t)))):Promise.resolve()))}clearTimeout(){null!==this.timerHandle&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function ts(t,e){if(Pt("AsyncQueue",`${e}: ${t}`),ye(t))return new zt($t.UNAVAILABLE,`${e}: ${t}`);throw t}class es{constructor(){this.queries=new Vn((t=>Ln(t)),xn),this.onlineState="Unknown",this.z_=new Set}}var ns,is;(is=ns||(ns={})).J_="default",is.Cache="cache";class rs{constructor(t,e,n,i,r,s){this.localStore=t,this.remoteStore=e,this.eventManager=n,this.sharedClientState=i,this.currentUser=r,this.maxConcurrentLimboResolutions=s,this.Sa={},this.ba=new Vn((t=>Ln(t)),xn),this.Da=new Map,this.Ca=new Set,this.va=new Ie(le.comparator),this.Fa=new Map,this.Ma=new rr,this.xa={},this.Oa=new Map,this.Na=Ji.Ln(),this.onlineState="Unknown",this.La=void 0}get isPrimaryClient(){return!0===this.La}}async function ss(t,e,n){const i=function(t){const e=jt(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=as.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=hs.bind(null,e),e}(t);try{const t=await function(t,e){const n=jt(t),i=ie.now(),r=e.reduce(((t,e)=>t.add(e.key)),Wn());let s,o;return n.persistence.runTransaction("Locally write mutations","readwrite",(t=>{let a=Bn(),h=Wn();return n.os.getEntries(t,r).next((t=>{a=t,a.forEach(((t,e)=>{e.isValidDocument()||(h=h.add(t))}))})).next((()=>n.localDocuments.getOverlayedDocuments(t,a))).next((r=>{s=r;const o=[];for(const t of e){const e=Ei(t,s.get(t.key).overlayedDocument);null!=e&&o.push(new Ti(t.key,e,tn(e.value.mapValue),pi.exists(!0)))}return n.mutationQueue.addMutationBatch(t,i,o,e)})).next((e=>{o=e;const i=e.applyToLocalDocumentSet(s,h);return n.documentOverlayCache.saveOverlays(t,e.batchId,i)}))})).then((()=>({batchId:o.batchId,changes:zn(s)})))}(i.localStore,e);i.sharedClientState.addPendingMutation(t.batchId),function(t,e,n){let i=t.xa[t.currentUser.toKey()];i||(i=new Ie(ee)),i=i.insert(e,n),t.xa[t.currentUser.toKey()]=i}(i,t.batchId,n),await us(i,t.changes),await $r(i.remoteStore)}catch(t){const e=ts(t,"Failed to persist write");n.reject(e)}}function os(t,e,n){const i=jt(t);if(i.isPrimaryClient&&0===n||!i.isPrimaryClient&&1===n){const t=[];i.ba.forEach(((n,i)=>{const r=i.view.j_(e);r.snapshot&&t.push(r.snapshot)})),function(t,e){const n=jt(t);n.onlineState=e;let i=!1;n.queries.forEach(((t,n)=>{for(const t of n.U_)t.j_(e)&&(i=!0)})),i&&function(t){t.z_.forEach((t=>{t.next()}))}(n)}(i.eventManager,e),t.length&&i.Sa.h_(t),i.onlineState=e,i.isPrimaryClient&&i.sharedClientState.setOnlineState(e)}}async function as(t,e){const n=jt(t),i=e.batch.batchId;try{const t=await function(t,e){const n=jt(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",(t=>{const i=e.batch.keys(),r=n.os.newChangeBuffer({trackRemovals:!0});return function(t,e,n,i){const r=n.batch,s=r.keys();let o=me.resolve();return s.forEach((t=>{o=o.next((()=>i.getEntry(e,t))).next((e=>{const s=n.docVersions.get(t);Bt(null!==s),e.version.compareTo(s)<0&&(r.applyToRemoteDocument(e,n),e.isValidDocument()&&(e.setReadTime(n.commitVersion),i.addEntry(e)))}))})),o.next((()=>t.mutationQueue.removeMutationBatch(e,r)))}(n,t,e,r).next((()=>r.apply(t))).next((()=>n.mutationQueue.performConsistencyCheck(t))).next((()=>n.documentOverlayCache.removeOverlaysForBatchId(t,i,e.batch.batchId))).next((()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(t,function(t){let e=Wn();for(let n=0;n<t.mutationResults.length;++n)t.mutationResults[n].transformResults.length>0&&(e=e.add(t.batch.mutations[n].key));return e}(e)))).next((()=>n.localDocuments.getDocuments(t,i)))}))}(n.localStore,e);cs(n,i,null),ls(n,i),n.sharedClientState.updateMutationState(i,"acknowledged"),await us(n,t)}catch(t){await ge(t)}}async function hs(t,e,n){const i=jt(t);try{const t=await function(t,e){const n=jt(t);return n.persistence.runTransaction("Reject batch","readwrite-primary",(t=>{let i;return n.mutationQueue.lookupMutationBatch(t,e).next((e=>(Bt(null!==e),i=e.keys(),n.mutationQueue.removeMutationBatch(t,e)))).next((()=>n.mutationQueue.performConsistencyCheck(t))).next((()=>n.documentOverlayCache.removeOverlaysForBatchId(t,i,e))).next((()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(t,i))).next((()=>n.localDocuments.getDocuments(t,i)))}))}(i.localStore,e);cs(i,e,n),ls(i,e),i.sharedClientState.updateMutationState(e,"rejected",n),await us(i,t)}catch(n){await ge(n)}}function ls(t,e){(t.Oa.get(e)||[]).forEach((t=>{t.resolve()})),t.Oa.delete(e)}function cs(t,e,n){const i=jt(t);let r=i.xa[i.currentUser.toKey()];if(r){const t=r.get(e);t&&(n?t.reject(n):t.resolve(),r=r.remove(e)),i.xa[i.currentUser.toKey()]=r}}async function us(t,e,n){const i=jt(t),r=[],s=[],o=[];i.ba.isEmpty()||(i.ba.forEach(((t,a)=>{o.push(i.Ba(a,e,n).then((t=>{if((t||n)&&i.isPrimaryClient){const e=t&&!t.fromCache;i.sharedClientState.updateQueryState(a.targetId,e?"current":"not-current")}if(t){r.push(t);const e=dr.Ki(a.targetId,t);s.push(e)}})))})),await Promise.all(o),i.Sa.h_(r),await async function(t,e){const n=jt(t);try{await n.persistence.runTransaction("notifyLocalViewChanges","readwrite",(t=>me.forEach(e,(e=>me.forEach(e.qi,(i=>n.persistence.referenceDelegate.addReference(t,e.targetId,i))).next((()=>me.forEach(e.Qi,(i=>n.persistence.referenceDelegate.removeReference(t,e.targetId,i)))))))))}catch(t){if(!ye(t))throw t;Mt("LocalStore","Failed to update sequence numbers: "+t)}for(const t of e){const e=t.targetId;if(!t.fromCache){const t=n.ns.get(e),i=t.snapshotVersion,r=t.withLastLimboFreeSnapshotVersion(i);n.ns=n.ns.insert(e,r)}}}(i.localStore,s))}async function fs(t,e){const n=jt(t);if(!n.currentUser.isEqual(e)){Mt("SyncEngine","User change. New user:",e.toKey());const t=await yr(n.localStore,e);n.currentUser=e,function(t,e){t.Oa.forEach((t=>{t.forEach((t=>{t.reject(new zt($t.CANCELLED,e))}))})),t.Oa.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,t.removedBatchIds,t.addedBatchIds),await us(n,t.us)}}class ds{constructor(){this.synchronizeTabs=!1}async initialize(t){this.serializer=kr(t.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(t),this.persistence=this.createPersistence(t),await this.persistence.start(),this.localStore=this.createLocalStore(t),this.gcScheduler=this.createGarbageCollectionScheduler(t,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(t,this.localStore)}createGarbageCollectionScheduler(t,e){return null}createIndexBackfillerScheduler(t,e){return null}createLocalStore(t){return function(t,e,n,i){return new mr(t,e,n,i)}(this.persistence,new gr,t.initialUser,this.serializer)}createPersistence(t){return new cr(fr.Hr,this.serializer)}createSharedClientState(t){return new Er}async terminate(){var t,e;null===(t=this.gcScheduler)||void 0===t||t.stop(),null===(e=this.indexBackfillerScheduler)||void 0===e||e.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class ps{async initialize(t,e){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(e),this.remoteStore=this.createRemoteStore(e),this.eventManager=this.createEventManager(e),this.syncEngine=this.createSyncEngine(e,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=t=>os(this.syncEngine,t,1),this.remoteStore.remoteSyncer.handleCredentialChange=fs.bind(null,this.syncEngine),await async function(t,e){const n=jt(t);e?(n.M_.delete(2),await Fr(n)):e||(n.M_.add(2),await Vr(n),n.N_.set("Unknown"))}(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return new es}createDatastore(t){const e=kr(t.databaseInfo.databaseId),n=function(t){return new Dr(t)}(t.databaseInfo);return function(t,e,n,i){return new Lr(t,e,n,i)}(t.authCredentials,t.appCheckCredentials,n,e)}createRemoteStore(t){return function(t,e,n,i,r){return new Pr(t,e,n,i,r)}(this.localStore,this.datastore,t.asyncQueue,(t=>os(this.syncEngine,t,0)),_r.D()?new _r:new br)}createSyncEngine(t,e){return function(t,e,n,i,r,s,o){const a=new rs(t,e,n,i,r,s);return o&&(a.La=!0),a}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,e)}async terminate(){var t;await async function(t){const e=jt(t);Mt("RemoteStore","RemoteStore shutting down."),e.M_.add(5),await Vr(e),e.O_.shutdown(),e.N_.set("Unknown")}(this.remoteStore),null===(t=this.datastore)||void 0===t||t.terminate()}}
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
     */class gs{constructor(t,e,n,i){this.authCredentials=t,this.appCheckCredentials=e,this.asyncQueue=n,this.databaseInfo=i,this.user=Rt.UNAUTHENTICATED,this.clientId=te.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(n,(async t=>{Mt("FirestoreClient","Received user=",t.uid),await this.authCredentialListener(t),this.user=t})),this.appCheckCredentials.start(n,(t=>(Mt("FirestoreClient","Received new app check token=",t),this.appCheckCredentialListener(t,this.user))))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new zt($t.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const t=new qt;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(e){const n=ts(e,"Failed to shutdown persistence");t.reject(n)}})),t.promise}}async function ms(t,e){t.asyncQueue.verifyOperationInProgress(),Mt("FirestoreClient","Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let i=n.initialUser;t.setCredentialChangeListener((async t=>{i.isEqual(t)||(await yr(e.localStore,t),i=t)})),e.persistence.setDatabaseDeletedListener((()=>t.terminate())),t._offlineComponents=e}async function ys(t,e){t.asyncQueue.verifyOperationInProgress();const n=await async function(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){Mt("FirestoreClient","Using user provided OfflineComponentProvider");try{await ms(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!function(t){return"FirebaseError"===t.name?t.code===$t.FAILED_PRECONDITION||t.code===$t.UNIMPLEMENTED:!("undefined"!=typeof DOMException&&t instanceof DOMException)||22===t.code||20===t.code||11===t.code}(n))throw n;Ft("Error using user provided cache. Falling back to memory cache: "+n),await ms(t,new ds)}}else Mt("FirestoreClient","Using default OfflineComponentProvider"),await ms(t,new ds);return t._offlineComponents}(t);Mt("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener((t=>Yr(e.remoteStore,t))),t.setAppCheckTokenChangeListener(((t,n)=>Yr(e.remoteStore,n))),t._onlineComponents=e}function vs(t){return async function(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(Mt("FirestoreClient","Using user provided OnlineComponentProvider"),await ys(t,t._uninitializedComponentsProvider._online)):(Mt("FirestoreClient","Using default OnlineComponentProvider"),await ys(t,new ps))),t._onlineComponents}(t).then((t=>t.syncEngine))}
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
     */function ws(t){const e={};return void 0!==t.timeoutSeconds&&(e.timeoutSeconds=t.timeoutSeconds),e
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
     */}const Es=new Map;
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
     */function bs(t,e,n){if(!n)throw new zt($t.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function _s(t){if(!le.isDocumentKey(t))throw new zt($t.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function Ts(t){if(le.isDocumentKey(t))throw new zt($t.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Is(t){if(void 0===t)return"undefined";if(null===t)return"null";if("string"==typeof t)return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if("number"==typeof t||"boolean"==typeof t)return""+t;if("object"==typeof t){if(t instanceof Array)return"an array";{const e=function(t){return t.constructor?t.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return"function"==typeof t?"a function":Ut()}function Ss(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new zt($t.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Is(t);throw new zt($t.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}
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
     */class As{constructor(t){var e,n;if(void 0===t.host){if(void 0!==t.ssl)throw new zt($t.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=t.host,this.ssl=null===(e=t.ssl)||void 0===e||e;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.localCache=t.localCache,void 0===t.cacheSizeBytes)this.cacheSizeBytes=41943040;else{if(-1!==t.cacheSizeBytes&&t.cacheSizeBytes<1048576)throw new zt($t.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}(function(t,e,n,i){if(!0===e&&!0===i)throw new zt($t.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)})("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:void 0===t.experimentalAutoDetectLongPolling?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=ws(null!==(n=t.experimentalLongPollingOptions)&&void 0!==n?n:{}),function(t){if(void 0!==t.timeoutSeconds){if(isNaN(t.timeoutSeconds))throw new zt($t.INVALID_ARGUMENT,`invalid long polling timeout: ${t.timeoutSeconds} (must not be NaN)`);if(t.timeoutSeconds<5)throw new zt($t.INVALID_ARGUMENT,`invalid long polling timeout: ${t.timeoutSeconds} (minimum allowed value is 5)`);if(t.timeoutSeconds>30)throw new zt($t.INVALID_ARGUMENT,`invalid long polling timeout: ${t.timeoutSeconds} (maximum allowed value is 30)`)}}
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
     */(this.experimentalLongPollingOptions),this.useFetchStreams=!!t.useFetchStreams}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&function(t,e){return t.timeoutSeconds===e.timeoutSeconds}(this.experimentalLongPollingOptions,t.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}class Cs{constructor(t,e,n,i){this._authCredentials=t,this._appCheckCredentials=e,this._databaseId=n,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new As({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new zt($t.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return void 0!==this._terminateTask}_setSettings(t){if(this._settingsFrozen)throw new zt($t.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new As(t),void 0!==t.credentials&&(this._authCredentials=function(t){if(!t)return new Gt;switch(t.type){case"firstParty":return new Xt(t.sessionIndex||"0",t.iamToken||null,t.authTokenFactory||null);case"provider":return t.client;default:throw new zt($t.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const e=Es.get(t);e&&(Mt("ComponentProvider","Removing Datastore"),Es.delete(t),e.terminate())}(this),Promise.resolve()}}function Ds(t,e,n,r={}){var s;const o=(t=Ss(t,Cs))._getSettings(),a=`${e}:${n}`;if("firestore.googleapis.com"!==o.host&&o.host!==a&&Ft("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},o),{host:a,ssl:!1})),r.mockUserToken){let e,n;if("string"==typeof r.mockUserToken)e=r.mockUserToken,n=Rt.MOCK_USER;else{e=function(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n=e||"demo-project",r=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${n}`,aud:n,iat:r,exp:r+3600,auth_time:r,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t);return[i(JSON.stringify({alg:"none",type:"JWT"})),i(JSON.stringify(o)),""].join(".")}
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
     */(r.mockUserToken,null===(s=t._app)||void 0===s?void 0:s.options.projectId);const o=r.mockUserToken.sub||r.mockUserToken.user_id;if(!o)throw new zt($t.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");n=new Rt(o)}t._authCredentials=new Kt(new Ht(e,n))}}
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
     */class Ns{constructor(t,e,n){this.converter=e,this._query=n,this.type="query",this.firestore=t}withConverter(t){return new Ns(this.firestore,t,this._query)}}class ks{constructor(t,e,n){this.converter=e,this._key=n,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Rs(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new ks(this.firestore,t,this._key)}}class Rs extends Ns{constructor(t,e,n){super(t,e,function(t){return new Dn(t)}(n)),this._path=n,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new ks(this.firestore,null,new le(t))}withConverter(t){return new Rs(this.firestore,t,this._path)}}
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
class Os{constructor(){this.iu=Promise.resolve(),this.su=[],this.ou=!1,this._u=[],this.au=null,this.uu=!1,this.cu=!1,this.lu=[],this.Yo=new Rr(this,"async_queue_retry"),this.hu=()=>{const t=Nr();t&&Mt("AsyncQueue","Visibility state changed to "+t.visibilityState),this.Yo.Wo()};const t=Nr();t&&"function"==typeof t.addEventListener&&t.addEventListener("visibilitychange",this.hu)}get isShuttingDown(){return this.ou}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.Pu(),this.Iu(t)}enterRestrictedMode(t){if(!this.ou){this.ou=!0,this.cu=t||!1;const e=Nr();e&&"function"==typeof e.removeEventListener&&e.removeEventListener("visibilitychange",this.hu)}}enqueue(t){if(this.Pu(),this.ou)return new Promise((()=>{}));const e=new qt;return this.Iu((()=>this.ou&&this.cu?Promise.resolve():(t().then(e.resolve,e.reject),e.promise))).then((()=>e.promise))}enqueueRetryable(t){this.enqueueAndForget((()=>(this.su.push(t),this.Tu())))}async Tu(){if(0!==this.su.length){try{await this.su[0](),this.su.shift(),this.Yo.reset()}catch(t){if(!ye(t))throw t;Mt("AsyncQueue","Operation failed with retryable error: "+t)}this.su.length>0&&this.Yo.$o((()=>this.Tu()))}}Iu(t){const e=this.iu.then((()=>(this.uu=!0,t().catch((t=>{this.au=t,this.uu=!1;const e=function(t){let e=t.message||"";return t.stack&&(e=t.stack.includes(t.message)?t.stack:t.message+"\n"+t.stack),e}
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
     */(t);throw Pt("INTERNAL UNHANDLED ERROR: ",e),t})).then((t=>(this.uu=!1,t))))));return this.iu=e,e}enqueueAfterDelay(t,e,n){this.Pu(),this.lu.indexOf(t)>-1&&(e=0);const i=Zr.createAndSchedule(this,t,e,n,(t=>this.Eu(t)));return this._u.push(i),i}Pu(){this.au&&Ut()}verifyOperationInProgress(){}async du(){let t;do{t=this.iu,await t}while(t!==this.iu)}Au(t){for(const e of this._u)if(e.timerId===t)return!0;return!1}Ru(t){return this.du().then((()=>{this._u.sort(((t,e)=>t.targetTimeMs-e.targetTimeMs));for(const e of this._u)if(e.skipDelay(),"all"!==t&&e.timerId===t)break;return this.du()}))}Vu(t){this.lu.push(t)}Eu(t){const e=this._u.indexOf(t);this._u.splice(e,1)}}class xs extends Cs{constructor(t,e,n,i){super(t,e,n,i),this.type="firestore",this._queue=new Os,this._persistenceKey=(null==i?void 0:i.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||Ls(this),this._firestoreClient.terminate()}}function Ls(t){var e,n,i;const r=t._freezeSettings(),s=function(t,e,n,i){return new Ue(t,e,n,i.host,i.ssl,i.experimentalForceLongPolling,i.experimentalAutoDetectLongPolling,ws(i.experimentalLongPollingOptions),i.useFetchStreams)}(t._databaseId,(null===(e=t._app)||void 0===e?void 0:e.options.appId)||"",t._persistenceKey,r);t._firestoreClient=new gs(t._authCredentials,t._appCheckCredentials,t._queue,s),(null===(n=r.localCache)||void 0===n?void 0:n._offlineComponentProvider)&&(null===(i=r.localCache)||void 0===i?void 0:i._onlineComponentProvider)&&(t._firestoreClient._uninitializedComponentsProvider={_offlineKind:r.localCache.kind,_offline:r.localCache._offlineComponentProvider,_online:r.localCache._onlineComponentProvider})}
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
     */class Ms{constructor(t){this._byteString=t}static fromBase64String(t){try{return new Ms(Re.fromBase64String(t))}catch(t){throw new zt($t.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(t){return new Ms(Re.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}}
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
     */class Ps{constructor(...t){for(let e=0;e<t.length;++e)if(0===t[e].length)throw new zt($t.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new he(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}
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
     */class Fs{constructor(t){this._methodName=t}}
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
     */class Vs{constructor(t,e){if(!isFinite(t)||t<-90||t>90)throw new zt($t.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(e)||e<-180||e>180)throw new zt($t.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+e);this._lat=t,this._long=e}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(t){return ee(this._lat,t._lat)||ee(this._long,t._long)}}
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
     */const Us=/^__.*__$/;class Bs{constructor(t,e,n){this.data=t,this.fieldMask=e,this.fieldTransforms=n}toMutation(t,e){return null!==this.fieldMask?new Ti(t,this.data,this.fieldMask,e,this.fieldTransforms):new _i(t,this.data,e,this.fieldTransforms)}}function js(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw Ut()}}class $s{constructor(t,e,n,i,r,s){this.settings=t,this.databaseId=e,this.serializer=n,this.ignoreUndefinedProperties=i,void 0===r&&this.mu(),this.fieldTransforms=r||[],this.fieldMask=s||[]}get path(){return this.settings.path}get fu(){return this.settings.fu}gu(t){return new $s(Object.assign(Object.assign({},this.settings),t),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}pu(t){var e;const n=null===(e=this.path)||void 0===e?void 0:e.child(t),i=this.gu({path:n,yu:!1});return i.wu(t),i}Su(t){var e;const n=null===(e=this.path)||void 0===e?void 0:e.child(t),i=this.gu({path:n,yu:!1});return i.mu(),i}bu(t){return this.gu({path:void 0,yu:!0})}Du(t){return Zs(t,this.settings.methodName,this.settings.Cu||!1,this.path,this.settings.vu)}contains(t){return void 0!==this.fieldMask.find((e=>t.isPrefixOf(e)))||void 0!==this.fieldTransforms.find((e=>t.isPrefixOf(e.field)))}mu(){if(this.path)for(let t=0;t<this.path.length;t++)this.wu(this.path.get(t))}wu(t){if(0===t.length)throw this.Du("Document fields must not be empty");if(js(this.fu)&&Us.test(t))throw this.Du('Document fields cannot begin and end with "__"')}}class zs{constructor(t,e,n){this.databaseId=t,this.ignoreUndefinedProperties=e,this.serializer=n||kr(t)}Fu(t,e,n,i=!1){return new $s({fu:t,methodName:e,vu:n,path:he.emptyPath(),yu:!1,Cu:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function qs(t){const e=t._freezeSettings(),n=kr(t._databaseId);return new zs(t._databaseId,!!e.ignoreUndefinedProperties,n)}function Hs(t,e,n,i,r,s={}){const o=t.Fu(s.merge||s.mergeFields?2:0,e,n,r);Xs("Data must be an object, but it was:",o,i);const a=Qs(i,o);let h,l;if(s.merge)h=new Ne(o.fieldMask),l=o.fieldTransforms;else if(s.mergeFields){const t=[];for(const i of s.mergeFields){const r=Ys(e,i,n);if(!o.contains(r))throw new zt($t.INVALID_ARGUMENT,`Field '${r}' is specified in your field mask but missing from your input data.`);to(t,r)||t.push(r)}h=new Ne(t),l=o.fieldTransforms.filter((t=>h.covers(t.field)))}else h=null,l=o.fieldTransforms;return new Bs(new Ze(a),h,l)}class Gs extends Fs{_toFieldTransform(t){return new fi(t.path,new ri)}isEqual(t){return t instanceof Gs}}function Ks(t,e){if(Ws(t=m(t)))return Xs("Unsupported field value:",e,t),Qs(t,e);if(t instanceof Fs)return function(t,e){if(!js(e.fu))throw e.Du(`${t._methodName}() can only be used with update() and set()`);if(!e.path)throw e.Du(`${t._methodName}() is not currently supported inside arrays`);const n=t._toFieldTransform(e);n&&e.fieldTransforms.push(n)}(t,e),null;if(void 0===t&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.yu&&4!==e.fu)throw e.Du("Nested arrays are not supported");return function(t,e){const n=[];let i=0;for(const r of t){let t=Ks(r,e.bu(i));null==t&&(t={nullValue:"NULL_VALUE"}),n.push(t),i++}return{arrayValue:{values:n}}}(t,e)}return function(t,e){if(null===(t=m(t)))return{nullValue:"NULL_VALUE"};if("number"==typeof t)return Zn(e.serializer,t);if("boolean"==typeof t)return{booleanValue:t};if("string"==typeof t)return{stringValue:t};if(t instanceof Date){const n=ie.fromDate(t);return{timestampValue:Mi(e.serializer,n)}}if(t instanceof ie){const n=new ie(t.seconds,1e3*Math.floor(t.nanoseconds/1e3));return{timestampValue:Mi(e.serializer,n)}}if(t instanceof Vs)return{geoPointValue:{latitude:t.latitude,longitude:t.longitude}};if(t instanceof Ms)return{bytesValue:Pi(e.serializer,t._byteString)};if(t instanceof ks){const n=e.databaseId,i=t.firestore._databaseId;if(!i.isEqual(n))throw e.Du(`Document reference is for database ${i.projectId}/${i.database} but should be for database ${n.projectId}/${n.database}`);return{referenceValue:Ui(t.firestore._databaseId||e.databaseId,t._key.path)}}throw e.Du(`Unsupported field value: ${Is(t)}`)}(t,e)}function Qs(t,e){const n={};return Te(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):_e(t,((t,i)=>{const r=Ks(i,e.pu(t));null!=r&&(n[t]=r)})),{mapValue:{fields:n}}}function Ws(t){return!("object"!=typeof t||null===t||t instanceof Array||t instanceof Date||t instanceof ie||t instanceof Vs||t instanceof Ms||t instanceof ks||t instanceof Fs)}function Xs(t,e,n){if(!Ws(n)||!function(t){return"object"==typeof t&&null!==t&&(Object.getPrototypeOf(t)===Object.prototype||null===Object.getPrototypeOf(t))}(n)){const i=Is(n);throw"an object"===i?e.Du(t+" a custom object"):e.Du(t+" "+i)}}function Ys(t,e,n){if((e=m(e))instanceof Ps)return e._internalPath;if("string"==typeof e)return function(t,e,n){if(e.search(Js)>=0)throw Zs(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Ps(...e.split("."))._internalPath}catch(i){throw Zs(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}(t,e);throw Zs("Field path arguments must be of type string or ",t,!1,void 0,n)}const Js=new RegExp("[~\\*/\\[\\]]");function Zs(t,e,n,i,r){const s=i&&!i.isEmpty(),o=void 0!==r;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let h="";return(s||o)&&(h+=" (found",s&&(h+=` in field ${i}`),o&&(h+=` in document ${r}`),h+=")"),new zt($t.INVALID_ARGUMENT,a+t+h)}function to(t,e){return t.some((t=>t.isEqual(e)))}
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
     */function eo(t,e){const n=Ss(t.firestore,xs),i=function(t,e,...n){if(t=m(t),1===arguments.length&&(e=te.newId()),bs("doc","path",e),t instanceof Cs){const i=oe.fromString(e,...n);return _s(i),new ks(t,null,new le(i))}{if(!(t instanceof ks||t instanceof Rs))throw new zt($t.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const i=t._path.child(oe.fromString(e,...n));return _s(i),new ks(t.firestore,t instanceof Rs?t.converter:null,new le(i))}}(t),r=function(t,e,n){let i;return i=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,i}(t.converter,e);return function(t,e){return function(t,e){const n=new qt;return t.asyncQueue.enqueueAndForget((async()=>ss(await vs(t),e,n))),n.promise}(function(t){return t._firestoreClient||Ls(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}(t),e)}(n,[Hs(qs(t.firestore),"addDoc",i._key,r,null!==t.converter,{}).toMutation(i._key,pi.exists(!1))]).then((()=>i))}!function(t,e=!0){!function(t){Ot=t}("10.12.2"),et(new y("firestore",((t,{instanceIdentifier:n,options:i})=>{const r=t.getProvider("app").getImmediate(),s=new xs(new Qt(t.getProvider("auth-internal")),new Jt(t.getProvider("app-check-internal")),function(t,e){if(!Object.prototype.hasOwnProperty.apply(t.options,["projectId"]))throw new zt($t.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Be(t.options.projectId,e)}(r,n),r);return i=Object.assign({useFetchStreams:e},i),s._setSettings(i),s}),"PUBLIC").setMultipleInstances(!0)),st(kt,"4.6.3",t),st(kt,"4.6.3","esm2017")}();rt({apiKey:"AIzaSyBgOheePCJqT_ivlXs_EagQ3wQPGIMpJUg",authDomain:"howardlucas-7fcb0.firebaseapp.com",projectId:"howardlucas-7fcb0",storageBucket:"howardlucas-7fcb0.appspot.com",messagingSenderId:"945745527827",appId:"1:945745527827:web:3e282534ecdd22c66eabe6",measurementId:"G-QEE9Y648VB"});const no=function(t,e){const n="object"==typeof t?t:function(t=W){const e=Y.get(t);if(!e&&t===W&&h())return rt();if(!e)throw nt.create("no-app",{appName:t});return e}(),i="string"==typeof t?t:e||"(default)",r=function(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}(n,"firestore").getImmediate({identifier:i});if(!r._initialized){const t=a("firestore");t&&Ds(r,...t)}return r}(),io=function(t,e,...n){if(t=m(t),bs("collection","path",e),t instanceof Cs){const i=oe.fromString(e,...n);return Ts(i),new Rs(t,null,i)}{if(!(t instanceof ks||t instanceof Rs))throw new zt($t.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const i=t._path.child(oe.fromString(e,...n));return Ts(i),new Rs(t.firestore,null,i)}}(no,"contacts"),ro=document.querySelector(".contact-form"),so=document.querySelector(".feedback");ro.addEventListener("submit",(t=>{t.preventDefault(),eo(io,{name:ro.name.value,email:ro.email.value,message:ro.message.value,createdAt:new Gs("serverTimestamp")}).then((()=>{so.style.display="block",setTimeout((()=>{so.style.display="none",ro.name.value="",ro.email.value="",ro.message.value=""}),3e3)}))}))}();