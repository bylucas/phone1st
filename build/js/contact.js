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
     */class c extends Error{constructor(t,e,n){super(e),this.code=t,this.customData=n,this.name="FirebaseError",Object.setPrototypeOf(this,c.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,u.prototype.create)}}class u{constructor(t,e,n){this.service=t,this.serviceName=e,this.errors=n}create(t,...e){const n=e[0]||{},i=`${this.service}/${t}`,r=this.errors[t],s=r?function(t,e){return t.replace(f,((t,n)=>{const i=e[n];return null!=i?String(i):`<${n}?>`}))}(r,n):"Error",o=`${this.serviceName}: ${s} (${i}).`;return new c(i,o,n)}}const f=/\{\$([^}]+)}/g;function d(t,e){if(t===e)return!0;const n=Object.keys(t),i=Object.keys(e);for(const r of n){if(!i.includes(r))return!1;const n=t[r],s=e[r];if(p(n)&&p(s)){if(!d(n,s))return!1}else if(n!==s)return!1}for(const t of i)if(!n.includes(t))return!1;return!0}function p(t){return null!==t&&"object"==typeof t}
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
     */function g(t){return t&&t._delegate?t._delegate:t}class m{constructor(t,e,n){this.name=t,this.instanceFactory=e,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}
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
     */const y="[DEFAULT]";
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
     */class v{constructor(t,e){this.name=t,this.container=e,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const e=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(e)){const t=new l;if(this.instancesDeferred.set(e,t),this.isInitialized(e)||this.shouldAutoInitialize())try{const n=this.getOrInitializeService({instanceIdentifier:e});n&&t.resolve(n)}catch(t){}}return this.instancesDeferred.get(e).promise}getImmediate(t){var e;const n=this.normalizeInstanceIdentifier(null==t?void 0:t.identifier),i=null!==(e=null==t?void 0:t.optional)&&void 0!==e&&e;if(!this.isInitialized(n)&&!this.shouldAutoInitialize()){if(i)return null;throw Error(`Service ${this.name} is not available`)}try{return this.getOrInitializeService({instanceIdentifier:n})}catch(t){if(i)return null;throw t}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,this.shouldAutoInitialize()){if(function(t){return"EAGER"===t.instantiationMode}
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
     */(t))try{this.getOrInitializeService({instanceIdentifier:y})}catch(t){}for(const[t,e]of this.instancesDeferred.entries()){const n=this.normalizeInstanceIdentifier(t);try{const t=this.getOrInitializeService({instanceIdentifier:n});e.resolve(t)}catch(t){}}}}clearInstance(t=y){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter((t=>"INTERNAL"in t)).map((t=>t.INTERNAL.delete())),...t.filter((t=>"_delete"in t)).map((t=>t._delete()))])}isComponentSet(){return null!=this.component}isInitialized(t=y){return this.instances.has(t)}getOptions(t=y){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:e={}}=t,n=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:n,options:e});for(const[t,e]of this.instancesDeferred.entries()){n===this.normalizeInstanceIdentifier(t)&&e.resolve(i)}return i}onInit(t,e){var n;const i=this.normalizeInstanceIdentifier(e),r=null!==(n=this.onInitCallbacks.get(i))&&void 0!==n?n:new Set;r.add(t),this.onInitCallbacks.set(i,r);const s=this.instances.get(i);return s&&t(s,i),()=>{r.delete(t)}}invokeOnInitCallbacks(t,e){const n=this.onInitCallbacks.get(e);if(n)for(const i of n)try{i(t,e)}catch(t){}}getOrInitializeService({instanceIdentifier:t,options:e={}}){let n=this.instances.get(t);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:(i=t,i===y?void 0:i),options:e}),this.instances.set(t,n),this.instancesOptions.set(t,e),this.invokeOnInitCallbacks(n,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,n)}catch(t){}var i;return n||null}normalizeInstanceIdentifier(t=y){return this.component?this.component.multipleInstances?t:y:t}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}}class w{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const e=this.getProvider(t.name);if(e.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);e.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const e=new v(t,this);return this.providers.set(t,e),e}getProviders(){return Array.from(this.providers.values())}}
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
     */var E;!function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"}(E||(E={}));const b={debug:E.DEBUG,verbose:E.VERBOSE,info:E.INFO,warn:E.WARN,error:E.ERROR,silent:E.SILENT},_=E.INFO,T={[E.DEBUG]:"log",[E.VERBOSE]:"log",[E.INFO]:"info",[E.WARN]:"warn",[E.ERROR]:"error"},I=(t,e,...n)=>{if(e<t.logLevel)return;const i=(new Date).toISOString(),r=T[e];if(!r)throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`);console[r](`[${i}]  ${t.name}:`,...n)};class S{constructor(t){this.name=t,this._logLevel=_,this._logHandler=I,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in E))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel="string"==typeof t?b[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if("function"!=typeof t)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,E.DEBUG,...t),this._logHandler(this,E.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,E.VERBOSE,...t),this._logHandler(this,E.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,E.INFO,...t),this._logHandler(this,E.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,E.WARN,...t),this._logHandler(this,E.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,E.ERROR,...t),this._logHandler(this,E.ERROR,...t)}}const C=(t,e)=>e.some((e=>t instanceof e));let A,D;const N=new WeakMap,k=new WeakMap,R=new WeakMap,O=new WeakMap,x=new WeakMap;let L={get(t,e,n){if(t instanceof IDBTransaction){if("done"===e)return k.get(t);if("objectStoreNames"===e)return t.objectStoreNames||R.get(t);if("store"===e)return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return F(t[e])},set:(t,e,n)=>(t[e]=n,!0),has:(t,e)=>t instanceof IDBTransaction&&("done"===e||"store"===e)||e in t};function M(t){return t!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?(D||(D=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])).includes(t)?function(...e){return t.apply(V(this),e),F(N.get(this))}:function(...e){return F(t.apply(V(this),e))}:function(e,...n){const i=t.call(V(this),e,...n);return R.set(i,e.sort?e.sort():[e]),F(i)}}function P(t){return"function"==typeof t?M(t):(t instanceof IDBTransaction&&function(t){if(k.has(t))return;const e=new Promise(((e,n)=>{const i=()=>{t.removeEventListener("complete",r),t.removeEventListener("error",s),t.removeEventListener("abort",s)},r=()=>{e(),i()},s=()=>{n(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",r),t.addEventListener("error",s),t.addEventListener("abort",s)}));k.set(t,e)}(t),C(t,A||(A=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction]))?new Proxy(t,L):t)}function F(t){if(t instanceof IDBRequest)return function(t){const e=new Promise(((e,n)=>{const i=()=>{t.removeEventListener("success",r),t.removeEventListener("error",s)},r=()=>{e(F(t.result)),i()},s=()=>{n(t.error),i()};t.addEventListener("success",r),t.addEventListener("error",s)}));return e.then((e=>{e instanceof IDBCursor&&N.set(e,t)})).catch((()=>{})),x.set(e,t),e}(t);if(O.has(t))return O.get(t);const e=P(t);return e!==t&&(O.set(t,e),x.set(e,t)),e}const V=t=>x.get(t);const U=["get","getKey","getAll","getAllKeys","count"],B=["put","add","delete","clear"],j=new Map;function z(t,e){if(!(t instanceof IDBDatabase)||e in t||"string"!=typeof e)return;if(j.get(e))return j.get(e);const n=e.replace(/FromIndex$/,""),i=e!==n,r=B.includes(n);if(!(n in(i?IDBIndex:IDBObjectStore).prototype)||!r&&!U.includes(n))return;const s=async function(t,...e){const s=this.transaction(t,r?"readwrite":"readonly");let o=s.store;return i&&(o=o.index(e.shift())),(await Promise.all([o[n](...e),r&&s.done]))[0]};return j.set(e,s),s}L=(t=>({...t,get:(e,n,i)=>z(e,n)||t.get(e,n,i),has:(e,n)=>!!z(e,n)||t.has(e,n)}))(L);
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
class H{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map((t=>{if(function(t){const e=t.getComponent();return"VERSION"===(null==e?void 0:e.type)}(t)){const e=t.getImmediate();return`${e.library}/${e.version}`}return null})).filter((t=>t)).join(" ")}}const q="@firebase/app",G="0.9.25",K=new S("@firebase/app"),Q="[DEFAULT]",W={[q]:"fire-core","@firebase/app-compat":"fire-core-compat","@firebase/analytics":"fire-analytics","@firebase/analytics-compat":"fire-analytics-compat","@firebase/app-check":"fire-app-check","@firebase/app-check-compat":"fire-app-check-compat","@firebase/auth":"fire-auth","@firebase/auth-compat":"fire-auth-compat","@firebase/database":"fire-rtdb","@firebase/database-compat":"fire-rtdb-compat","@firebase/functions":"fire-fn","@firebase/functions-compat":"fire-fn-compat","@firebase/installations":"fire-iid","@firebase/installations-compat":"fire-iid-compat","@firebase/messaging":"fire-fcm","@firebase/messaging-compat":"fire-fcm-compat","@firebase/performance":"fire-perf","@firebase/performance-compat":"fire-perf-compat","@firebase/remote-config":"fire-rc","@firebase/remote-config-compat":"fire-rc-compat","@firebase/storage":"fire-gcs","@firebase/storage-compat":"fire-gcs-compat","@firebase/firestore":"fire-fst","@firebase/firestore-compat":"fire-fst-compat","fire-js":"fire-js",firebase:"fire-js-all"},X=new Map,Y=new Map;function J(t,e){try{t.container.addComponent(e)}catch(n){K.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Z(t){const e=t.name;if(Y.has(e))return K.debug(`There were multiple attempts to register component ${e}.`),!1;Y.set(e,t);for(const e of X.values())J(e,t);return!0}
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
const tt=new u("app","Firebase",{"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."});
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
class et{constructor(t,e,n){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},e),this._name=e.name,this._automaticDataCollectionEnabled=e.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new m("app",(()=>this),"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw tt.create("app-deleted",{appName:this._name})}}
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
     */function nt(t,e={}){let n=t;if("object"!=typeof e){e={name:e}}const i=Object.assign({name:Q,automaticDataCollectionEnabled:!1},e),r=i.name;if("string"!=typeof r||!r)throw tt.create("bad-app-name",{appName:String(r)});if(n||(n=h()),!n)throw tt.create("no-options");const s=X.get(r);if(s){if(d(n,s.options)&&d(i,s.config))return s;throw tt.create("duplicate-app",{appName:r})}const o=new w(r);for(const t of Y.values())o.addComponent(t);const a=new et(n,i,o);return X.set(r,a),a}function it(t,e,n){var i;let r=null!==(i=W[t])&&void 0!==i?i:t;n&&(r+=`-${n}`);const s=r.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const t=[`Unable to register library "${r}" with version "${e}":`];return s&&t.push(`library name "${r}" contains illegal characters (whitespace or "/")`),s&&o&&t.push("and"),o&&t.push(`version name "${e}" contains illegal characters (whitespace or "/")`),void K.warn(t.join(" "))}Z(new m(`${r}-version`,(()=>({library:r,version:e})),"VERSION"))}
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
     */const rt="firebase-heartbeat-database",st=1,ot="firebase-heartbeat-store";let at=null;function ht(){return at||(at=function(t,e,{blocked:n,upgrade:i,blocking:r,terminated:s}={}){const o=indexedDB.open(t,e),a=F(o);return i&&o.addEventListener("upgradeneeded",(t=>{i(F(o.result),t.oldVersion,t.newVersion,F(o.transaction),t)})),n&&o.addEventListener("blocked",(t=>n(t.oldVersion,t.newVersion,t))),a.then((t=>{s&&t.addEventListener("close",(()=>s())),r&&t.addEventListener("versionchange",(t=>r(t.oldVersion,t.newVersion,t)))})).catch((()=>{})),a}(rt,st,{upgrade:(t,e)=>{if(0===e)t.createObjectStore(ot)}}).catch((t=>{throw tt.create("idb-open",{originalErrorMessage:t.message})}))),at}async function lt(t,e){try{const n=(await ht()).transaction(ot,"readwrite"),i=n.objectStore(ot);await i.put(e,ct(t)),await n.done}catch(t){if(t instanceof c)K.warn(t.message);else{const e=tt.create("idb-set",{originalErrorMessage:null==t?void 0:t.message});K.warn(e.message)}}}function ct(t){return`${t.name}!${t.options.appId}`}
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
     */class ut{constructor(t){this.container=t,this._heartbeatsCache=null;const e=this.container.getProvider("app").getImmediate();this._storage=new dt(e),this._heartbeatsCachePromise=this._storage.read().then((t=>(this._heartbeatsCache=t,t)))}async triggerHeartbeat(){var t,e;const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=ft();if((null!=(null===(t=this._heartbeatsCache)||void 0===t?void 0:t.heartbeats)||(this._heartbeatsCache=await this._heartbeatsCachePromise,null!=(null===(e=this._heartbeatsCache)||void 0===e?void 0:e.heartbeats)))&&this._heartbeatsCache.lastSentHeartbeatDate!==i&&!this._heartbeatsCache.heartbeats.some((t=>t.date===i)))return this._heartbeatsCache.heartbeats.push({date:i,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter((t=>{const e=new Date(t.date).valueOf();return Date.now()-e<=2592e6})),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var t;if(null===this._heartbeatsCache&&await this._heartbeatsCachePromise,null==(null===(t=this._heartbeatsCache)||void 0===t?void 0:t.heartbeats)||0===this._heartbeatsCache.heartbeats.length)return"";const e=ft(),{heartbeatsToSend:n,unsentEntries:r}=function(t,e=1024){const n=[];let i=t.slice();for(const r of t){const t=n.find((t=>t.agent===r.agent));if(t){if(t.dates.push(r.date),pt(n)>e){t.dates.pop();break}}else if(n.push({agent:r.agent,dates:[r.date]}),pt(n)>e){n.pop();break}i=i.slice(1)}return{heartbeatsToSend:n,unsentEntries:i}}(this._heartbeatsCache.heartbeats),s=i(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}}function ft(){return(new Date).toISOString().substring(0,10)}class dt{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return!!function(){try{return"object"==typeof indexedDB}catch(t){return!1}}()&&new Promise(((t,e)=>{try{let n=!0;const i="validate-browser-context-for-indexeddb-analytics-module",r=self.indexedDB.open(i);r.onsuccess=()=>{r.result.close(),n||self.indexedDB.deleteDatabase(i),t(!0)},r.onupgradeneeded=()=>{n=!1},r.onerror=()=>{var t;e((null===(t=r.error)||void 0===t?void 0:t.message)||"")}}catch(t){e(t)}})).then((()=>!0)).catch((()=>!1))}async read(){if(await this._canUseIndexedDBPromise){const t=await async function(t){try{const e=await ht();return await e.transaction(ot).objectStore(ot).get(ct(t))}catch(t){if(t instanceof c)K.warn(t.message);else{const e=tt.create("idb-get",{originalErrorMessage:null==t?void 0:t.message});K.warn(e.message)}}}(this.app);return(null==t?void 0:t.heartbeats)?t:{heartbeats:[]}}return{heartbeats:[]}}async overwrite(t){var e;if(await this._canUseIndexedDBPromise){const n=await this.read();return lt(this.app,{lastSentHeartbeatDate:null!==(e=t.lastSentHeartbeatDate)&&void 0!==e?e:n.lastSentHeartbeatDate,heartbeats:t.heartbeats})}}async add(t){var e;if(await this._canUseIndexedDBPromise){const n=await this.read();return lt(this.app,{lastSentHeartbeatDate:null!==(e=t.lastSentHeartbeatDate)&&void 0!==e?e:n.lastSentHeartbeatDate,heartbeats:[...n.heartbeats,...t.heartbeats]})}}}function pt(t){return i(JSON.stringify({version:2,heartbeats:t})).length}
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
     */var gt;gt="",Z(new m("platform-logger",(t=>new H(t)),"PRIVATE")),Z(new m("heartbeat",(t=>new ut(t)),"PRIVATE")),it(q,G,gt),it(q,G,"esm2017"),it("fire-js","");var mt,yt="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},vt=vt||{},wt=yt||self;function Et(t){var e=typeof t;return"array"==(e="object"!=e?e:t?Array.isArray(t)?"array":e:"null")||"object"==e&&"number"==typeof t.length}function bt(t){var e=typeof t;return"object"==e&&null!=t||"function"==e}var _t="closure_uid_"+(1e9*Math.random()>>>0),Tt=0;function It(t,e,n){return t.call.apply(t.bind,arguments)}function St(t,e,n){if(!t)throw Error();if(2<arguments.length){var i=Array.prototype.slice.call(arguments,2);return function(){var n=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(n,i),t.apply(e,n)}}return function(){return t.apply(e,arguments)}}function Ct(t,e,n){return(Ct=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?It:St).apply(null,arguments)}function At(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var e=n.slice();return e.push.apply(e,arguments),t.apply(this,e)}}function Dt(t,e){function n(){}n.prototype=e.prototype,t.$=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.ac=function(t,n,i){for(var r=Array(arguments.length-2),s=2;s<arguments.length;s++)r[s-2]=arguments[s];return e.prototype[n].apply(t,r)}}function Nt(){this.s=this.s,this.o=this.o}Nt.prototype.s=!1,Nt.prototype.sa=function(){var t;!this.s&&(this.s=!0,this.N(),0)&&(t=this,Object.prototype.hasOwnProperty.call(t,_t)&&t[_t]||(t[_t]=++Tt))},Nt.prototype.N=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const kt=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if("string"==typeof t)return"string"!=typeof e||1!=e.length?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function Rt(t){const e=t.length;if(0<e){const n=Array(e);for(let i=0;i<e;i++)n[i]=t[i];return n}return[]}function Ot(t,e){for(let e=1;e<arguments.length;e++){const n=arguments[e];if(Et(n)){const e=t.length||0,i=n.length||0;t.length=e+i;for(let r=0;r<i;r++)t[e+r]=n[r]}else t.push(n)}}function xt(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}xt.prototype.h=function(){this.defaultPrevented=!0};var Lt=function(){if(!wt.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{const t=()=>{};wt.addEventListener("test",t,e),wt.removeEventListener("test",t,e)}catch(t){}return t}();function Mt(t){return/^[\s\xa0]*$/.test(t)}function Pt(){var t=wt.navigator;return t&&(t=t.userAgent)?t:""}function Ft(t){return-1!=Pt().indexOf(t)}function Vt(t){return Vt[" "](t),t}Vt[" "]=function(){};var Ut,Bt,jt,$t=Ft("Opera"),zt=Ft("Trident")||Ft("MSIE"),Ht=Ft("Edge"),qt=Ht||zt,Gt=Ft("Gecko")&&!(-1!=Pt().toLowerCase().indexOf("webkit")&&!Ft("Edge"))&&!(Ft("Trident")||Ft("MSIE"))&&!Ft("Edge"),Kt=-1!=Pt().toLowerCase().indexOf("webkit")&&!Ft("Edge");function Qt(){var t=wt.document;return t?t.documentMode:void 0}t:{var Wt="",Xt=(Bt=Pt(),Gt?/rv:([^\);]+)(\)|;)/.exec(Bt):Ht?/Edge\/([\d\.]+)/.exec(Bt):zt?/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(Bt):Kt?/WebKit\/(\S+)/.exec(Bt):$t?/(?:Version)[ \/]?(\S+)/.exec(Bt):void 0);if(Xt&&(Wt=Xt?Xt[1]:""),zt){var Yt=Qt();if(null!=Yt&&Yt>parseFloat(Wt)){Ut=String(Yt);break t}}Ut=Wt}if(wt.document&&zt){var Jt=Qt();jt=Jt||(parseInt(Ut,10)||void 0)}else jt=void 0;var Zt=jt;function te(t,e){if(xt.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,i=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(Gt){t:{try{Vt(e.nodeName);var r=!0;break t}catch(t){}r=!1}r||(e=null)}}else"mouseover"==n?e=t.fromElement:"mouseout"==n&&(e=t.toElement);this.relatedTarget=e,i?(this.clientX=void 0!==i.clientX?i.clientX:i.pageX,this.clientY=void 0!==i.clientY?i.clientY:i.pageY,this.screenX=i.screenX||0,this.screenY=i.screenY||0):(this.clientX=void 0!==t.clientX?t.clientX:t.pageX,this.clientY=void 0!==t.clientY?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType="string"==typeof t.pointerType?t.pointerType:ee[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&te.$.h.call(this)}}Dt(te,xt);var ee={2:"touch",3:"pen",4:"mouse"};te.prototype.h=function(){te.$.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var ne="closure_listenable_"+(1e6*Math.random()|0),ie=0;function re(t,e,n,i,r){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!i,this.la=r,this.key=++ie,this.fa=this.ia=!1}function se(t){t.fa=!0,t.listener=null,t.proxy=null,t.src=null,t.la=null}function oe(t,e,n){for(const i in t)e.call(n,t[i],i,t)}function ae(t){const e={};for(const n in t)e[n]=t[n];return e}const he="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function le(t,e){let n,i;for(let e=1;e<arguments.length;e++){for(n in i=arguments[e],i)t[n]=i[n];for(let e=0;e<he.length;e++)n=he[e],Object.prototype.hasOwnProperty.call(i,n)&&(t[n]=i[n])}}function ce(t){this.src=t,this.g={},this.h=0}function ue(t,e){var n=e.type;if(n in t.g){var i,r=t.g[n],s=kt(r,e);(i=0<=s)&&Array.prototype.splice.call(r,s,1),i&&(se(e),0==t.g[n].length&&(delete t.g[n],t.h--))}}function fe(t,e,n,i){for(var r=0;r<t.length;++r){var s=t[r];if(!s.fa&&s.listener==e&&s.capture==!!n&&s.la==i)return r}return-1}ce.prototype.add=function(t,e,n,i,r){var s=t.toString();(t=this.g[s])||(t=this.g[s]=[],this.h++);var o=fe(t,e,i,r);return-1<o?(e=t[o],n||(e.ia=!1)):((e=new re(e,this.src,s,!!i,r)).ia=n,t.push(e)),e};var de="closure_lm_"+(1e6*Math.random()|0),pe={};function ge(t,e,n,i,r){if(i&&i.once)return ye(t,e,n,i,r);if(Array.isArray(e)){for(var s=0;s<e.length;s++)ge(t,e[s],n,i,r);return null}return n=Ie(n),t&&t[ne]?t.O(e,n,bt(i)?!!i.capture:!!i,r):me(t,e,n,!1,i,r)}function me(t,e,n,i,r,s){if(!e)throw Error("Invalid event type");var o=bt(r)?!!r.capture:!!r,a=_e(t);if(a||(t[de]=a=new ce(t)),(n=a.add(e,n,i,o,s)).proxy)return n;if(i=function(){function t(n){return e.call(t.src,t.listener,n)}const e=be;return t}(),n.proxy=i,i.src=t,i.listener=n,t.addEventListener)Lt||(r=o),void 0===r&&(r=!1),t.addEventListener(e.toString(),i,r);else if(t.attachEvent)t.attachEvent(Ee(e.toString()),i);else{if(!t.addListener||!t.removeListener)throw Error("addEventListener and attachEvent are unavailable.");t.addListener(i)}return n}function ye(t,e,n,i,r){if(Array.isArray(e)){for(var s=0;s<e.length;s++)ye(t,e[s],n,i,r);return null}return n=Ie(n),t&&t[ne]?t.P(e,n,bt(i)?!!i.capture:!!i,r):me(t,e,n,!0,i,r)}function ve(t,e,n,i,r){if(Array.isArray(e))for(var s=0;s<e.length;s++)ve(t,e[s],n,i,r);else i=bt(i)?!!i.capture:!!i,n=Ie(n),t&&t[ne]?(t=t.i,(e=String(e).toString())in t.g&&(-1<(n=fe(s=t.g[e],n,i,r))&&(se(s[n]),Array.prototype.splice.call(s,n,1),0==s.length&&(delete t.g[e],t.h--)))):t&&(t=_e(t))&&(e=t.g[e.toString()],t=-1,e&&(t=fe(e,n,i,r)),(n=-1<t?e[t]:null)&&we(n))}function we(t){if("number"!=typeof t&&t&&!t.fa){var e=t.src;if(e&&e[ne])ue(e.i,t);else{var n=t.type,i=t.proxy;e.removeEventListener?e.removeEventListener(n,i,t.capture):e.detachEvent?e.detachEvent(Ee(n),i):e.addListener&&e.removeListener&&e.removeListener(i),(n=_e(e))?(ue(n,t),0==n.h&&(n.src=null,e[de]=null)):se(t)}}}function Ee(t){return t in pe?pe[t]:pe[t]="on"+t}function be(t,e){if(t.fa)t=!0;else{e=new te(e,this);var n=t.listener,i=t.la||t.src;t.ia&&we(t),t=n.call(i,e)}return t}function _e(t){return(t=t[de])instanceof ce?t:null}var Te="__closure_events_fn_"+(1e9*Math.random()>>>0);function Ie(t){return"function"==typeof t?t:(t[Te]||(t[Te]=function(e){return t.handleEvent(e)}),t[Te])}function Se(){Nt.call(this),this.i=new ce(this),this.S=this,this.J=null}function Ce(t,e){var n,i=t.J;if(i)for(n=[];i;i=i.J)n.push(i);if(t=t.S,i=e.type||e,"string"==typeof e)e=new xt(e,t);else if(e instanceof xt)e.target=e.target||t;else{var r=e;le(e=new xt(i,t),r)}if(r=!0,n)for(var s=n.length-1;0<=s;s--){var o=e.g=n[s];r=Ae(o,i,!0,e)&&r}if(r=Ae(o=e.g=t,i,!0,e)&&r,r=Ae(o,i,!1,e)&&r,n)for(s=0;s<n.length;s++)r=Ae(o=e.g=n[s],i,!1,e)&&r}function Ae(t,e,n,i){if(!(e=t.i.g[String(e)]))return!0;e=e.concat();for(var r=!0,s=0;s<e.length;++s){var o=e[s];if(o&&!o.fa&&o.capture==n){var a=o.listener,h=o.la||o.src;o.ia&&ue(t.i,o),r=!1!==a.call(h,i)&&r}}return r&&!i.defaultPrevented}Dt(Se,Nt),Se.prototype[ne]=!0,Se.prototype.removeEventListener=function(t,e,n,i){ve(this,t,e,n,i)},Se.prototype.N=function(){if(Se.$.N.call(this),this.i){var t,e=this.i;for(t in e.g){for(var n=e.g[t],i=0;i<n.length;i++)se(n[i]);delete e.g[t],e.h--}}this.J=null},Se.prototype.O=function(t,e,n,i){return this.i.add(String(t),e,!1,n,i)},Se.prototype.P=function(t,e,n,i){return this.i.add(String(t),e,!0,n,i)};var De=wt.JSON.stringify;function Ne(){var t=Pe;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}var ke=new class{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}((()=>new Re),(t=>t.reset()));class Re{constructor(){this.next=this.g=this.h=null}set(t,e){this.h=t,this.g=e,this.next=null}reset(){this.next=this.g=this.h=null}}function Oe(t){var e=1;t=t.split(":");const n=[];for(;0<e&&t.length;)n.push(t.shift()),e--;return t.length&&n.push(t.join(":")),n}function xe(t){wt.setTimeout((()=>{throw t}),0)}let Le,Me=!1,Pe=new class{constructor(){this.h=this.g=null}add(t,e){const n=ke.get();n.set(t,e),this.h?this.h.next=n:this.g=n,this.h=n}},Fe=()=>{const t=wt.Promise.resolve(void 0);Le=()=>{t.then(Ve)}};var Ve=()=>{for(var t;t=Ne();){try{t.h.call(t.g)}catch(t){xe(t)}var e=ke;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}Me=!1};function Ue(t,e){Se.call(this),this.h=t||1,this.g=e||wt,this.j=Ct(this.qb,this),this.l=Date.now()}function Be(t){t.ga=!1,t.T&&(t.g.clearTimeout(t.T),t.T=null)}function je(t,e,n){if("function"==typeof t)n&&(t=Ct(t,n));else{if(!t||"function"!=typeof t.handleEvent)throw Error("Invalid listener argument");t=Ct(t.handleEvent,t)}return 2147483647<Number(e)?-1:wt.setTimeout(t,e||0)}function $e(t){t.g=je((()=>{t.g=null,t.i&&(t.i=!1,$e(t))}),t.j);const e=t.h;t.h=null,t.m.apply(null,e)}Dt(Ue,Se),(mt=Ue.prototype).ga=!1,mt.T=null,mt.qb=function(){if(this.ga){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.T=this.g.setTimeout(this.j,this.h-t):(this.T&&(this.g.clearTimeout(this.T),this.T=null),Ce(this,"tick"),this.ga&&(Be(this),this.start()))}},mt.start=function(){this.ga=!0,this.T||(this.T=this.g.setTimeout(this.j,this.h),this.l=Date.now())},mt.N=function(){Ue.$.N.call(this),Be(this),delete this.g};class ze extends Nt{constructor(t,e){super(),this.m=t,this.j=e,this.h=null,this.i=!1,this.g=null}l(t){this.h=arguments,this.g?this.i=!0:$e(this)}N(){super.N(),this.g&&(wt.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function He(t){Nt.call(this),this.h=t,this.g={}}Dt(He,Nt);var qe=[];function Ge(t,e,n,i){Array.isArray(n)||(n&&(qe[0]=n.toString()),n=qe);for(var r=0;r<n.length;r++){var s=ge(e,n[r],i||t.handleEvent,!1,t.h||t);if(!s)break;t.g[s.key]=s}}function Ke(t){oe(t.g,(function(t,e){this.g.hasOwnProperty(e)&&we(t)}),t),t.g={}}function Qe(){this.g=!0}function We(t,e,n,i){t.info((function(){return"XMLHTTP TEXT ("+e+"): "+function(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n)for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var i=n[t];if(!(2>i.length)){var r=i[1];if(Array.isArray(r)&&!(1>r.length)){var s=r[0];if("noop"!=s&&"stop"!=s&&"close"!=s)for(var o=1;o<r.length;o++)r[o]=""}}}return De(n)}catch(t){return e}}(t,n)+(i?" "+i:"")}))}He.prototype.N=function(){He.$.N.call(this),Ke(this)},He.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")},Qe.prototype.Ea=function(){this.g=!1},Qe.prototype.info=function(){};var Xe={},Ye=null;function Je(){return Ye=Ye||new Se}function Ze(t){xt.call(this,Xe.Ta,t)}function tn(t){const e=Je();Ce(e,new Ze(e))}function en(t,e){xt.call(this,Xe.STAT_EVENT,t),this.stat=e}function nn(t){const e=Je();Ce(e,new en(e,t))}function rn(t,e){xt.call(this,Xe.Ua,t),this.size=e}function sn(t,e){if("function"!=typeof t)throw Error("Fn must not be null and must be a function");return wt.setTimeout((function(){t()}),e)}Xe.Ta="serverreachability",Dt(Ze,xt),Xe.STAT_EVENT="statevent",Dt(en,xt),Xe.Ua="timingevent",Dt(rn,xt);var on={NO_ERROR:0,rb:1,Eb:2,Db:3,yb:4,Cb:5,Fb:6,Qa:7,TIMEOUT:8,Ib:9},an={wb:"complete",Sb:"success",Ra:"error",Qa:"abort",Kb:"ready",Lb:"readystatechange",TIMEOUT:"timeout",Gb:"incrementaldata",Jb:"progress",zb:"downloadprogress",$b:"uploadprogress"};function hn(){}function ln(t){return t.h||(t.h=t.i())}function cn(){}hn.prototype.h=null;var un,fn={OPEN:"a",vb:"b",Ra:"c",Hb:"d"};function dn(){xt.call(this,"d")}function pn(){xt.call(this,"c")}function gn(){}function mn(t,e,n,i){this.l=t,this.j=e,this.m=n,this.W=i||1,this.U=new He(this),this.P=vn,t=qt?125:void 0,this.V=new Ue(t),this.I=null,this.i=!1,this.u=this.B=this.A=this.L=this.G=this.Y=this.C=null,this.F=[],this.g=null,this.o=0,this.s=this.v=null,this.ca=-1,this.J=!1,this.O=0,this.M=null,this.ba=this.K=this.aa=this.S=!1,this.h=new yn}function yn(){this.i=null,this.g="",this.h=!1}Dt(dn,xt),Dt(pn,xt),Dt(gn,hn),gn.prototype.g=function(){return new XMLHttpRequest},gn.prototype.i=function(){return{}},un=new gn;var vn=45e3,wn={},En={};function bn(t,e,n){t.L=1,t.A=Bn(Mn(e)),t.u=n,t.S=!0,_n(t,null)}function _n(t,e){t.G=Date.now(),Cn(t),t.B=Mn(t.A);var n=t.B,i=t.W;Array.isArray(i)||(i=[String(i)]),Zn(n.i,"t",i),t.o=0,n=t.l.J,t.h=new yn,t.g=Zi(t.l,n?e:null,!t.u),0<t.O&&(t.M=new ze(Ct(t.Pa,t,t.g),t.O)),Ge(t.U,t.g,"readystatechange",t.nb),e=t.I?ae(t.I):{},t.u?(t.v||(t.v="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ha(t.B,t.v,t.u,e)):(t.v="GET",t.g.ha(t.B,t.v,null,e)),tn(),function(t,e,n,i,r,s){t.info((function(){if(t.g)if(s)for(var o="",a=s.split("&"),h=0;h<a.length;h++){var l=a[h].split("=");if(1<l.length){var c=l[0];l=l[1];var u=c.split("_");o=2<=u.length&&"type"==u[1]?o+(c+"=")+l+"&":o+(c+"=redacted&")}}else o=null;else o=s;return"XMLHTTP REQ ("+i+") [attempt "+r+"]: "+e+"\n"+n+"\n"+o}))}(t.j,t.v,t.B,t.m,t.W,t.u)}function Tn(t){return!!t.g&&("GET"==t.v&&2!=t.L&&t.l.Ha)}function In(t,e,n){let i,r=!0;for(;!t.J&&t.o<n.length;){if(i=Sn(t,n),i==En){4==e&&(t.s=4,nn(14),r=!1),We(t.j,t.m,null,"[Incomplete Response]");break}if(i==wn){t.s=4,nn(15),We(t.j,t.m,n,"[Invalid Chunk]"),r=!1;break}We(t.j,t.m,i,null),Rn(t,i)}Tn(t)&&0!=t.o&&(t.h.g=t.h.g.slice(t.o),t.o=0),4!=e||0!=n.length||t.h.h||(t.s=1,nn(16),r=!1),t.i=t.i&&r,r?0<n.length&&!t.ba&&(t.ba=!0,(e=t.l).g==t&&e.ca&&!e.M&&(e.l.info("Great, no buffering proxy detected. Bytes received: "+n.length),qi(e),e.M=!0,nn(11))):(We(t.j,t.m,n,"[Invalid Chunked Response]"),kn(t),Nn(t))}function Sn(t,e){var n=t.o,i=e.indexOf("\n",n);return-1==i?En:(n=Number(e.substring(n,i)),isNaN(n)?wn:(i+=1)+n>e.length?En:(e=e.slice(i,i+n),t.o=i+n,e))}function Cn(t){t.Y=Date.now()+t.P,An(t,t.P)}function An(t,e){if(null!=t.C)throw Error("WatchDog timer not null");t.C=sn(Ct(t.lb,t),e)}function Dn(t){t.C&&(wt.clearTimeout(t.C),t.C=null)}function Nn(t){0==t.l.H||t.J||Qi(t.l,t)}function kn(t){Dn(t);var e=t.M;e&&"function"==typeof e.sa&&e.sa(),t.M=null,Be(t.V),Ke(t.U),t.g&&(e=t.g,t.g=null,e.abort(),e.sa())}function Rn(t,e){try{var n=t.l;if(0!=n.H&&(n.g==t||oi(n.i,t)))if(!t.K&&oi(n.i,t)&&3==n.H){try{var i=n.Ja.g.parse(e)}catch(t){i=null}if(Array.isArray(i)&&3==i.length){var r=i;if(0==r[0]){t:if(!n.u){if(n.g){if(!(n.g.G+3e3<t.G))break t;Ki(n),Fi(n)}Hi(n),nn(18)}}else n.Fa=r[1],0<n.Fa-n.V&&37500>r[2]&&n.G&&0==n.A&&!n.v&&(n.v=sn(Ct(n.ib,n),6e3));if(1>=si(n.i)&&n.oa){try{n.oa()}catch(t){}n.oa=void 0}}else Xi(n,11)}else if((t.K||n.g==t)&&Ki(n),!Mt(e))for(r=n.Ja.g.parse(e),e=0;e<r.length;e++){let l=r[e];if(n.V=l[0],l=l[1],2==n.H)if("c"==l[0]){n.K=l[1],n.pa=l[2];const e=l[3];null!=e&&(n.ra=e,n.l.info("VER="+n.ra));const r=l[4];null!=r&&(n.Ga=r,n.l.info("SVER="+n.Ga));const c=l[5];null!=c&&"number"==typeof c&&0<c&&(i=1.5*c,n.L=i,n.l.info("backChannelRequestTimeoutMs_="+i)),i=n;const u=t.g;if(u){const t=u.g?u.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(t){var s=i.i;s.g||-1==t.indexOf("spdy")&&-1==t.indexOf("quic")&&-1==t.indexOf("h2")||(s.j=s.l,s.g=new Set,s.h&&(ai(s,s.h),s.h=null))}if(i.F){const t=u.g?u.g.getResponseHeader("X-HTTP-Session-Id"):null;t&&(i.Da=t,Un(i.I,i.F,t))}}n.H=3,n.h&&n.h.Ba(),n.ca&&(n.S=Date.now()-t.G,n.l.info("Handshake RTT: "+n.S+"ms"));var o=t;if((i=n).wa=Ji(i,i.J?i.pa:null,i.Y),o.K){hi(i.i,o);var a=o,h=i.L;h&&a.setTimeout(h),a.C&&(Dn(a),Cn(a)),i.g=o}else zi(i);0<n.j.length&&Ui(n)}else"stop"!=l[0]&&"close"!=l[0]||Xi(n,7);else 3==n.H&&("stop"==l[0]||"close"==l[0]?"stop"==l[0]?Xi(n,7):Pi(n):"noop"!=l[0]&&n.h&&n.h.Aa(l),n.A=0)}tn()}catch(t){}}function On(t,e){if(t.forEach&&"function"==typeof t.forEach)t.forEach(e,void 0);else if(Et(t)||"string"==typeof t)Array.prototype.forEach.call(t,e,void 0);else for(var n=function(t){if(t.ta&&"function"==typeof t.ta)return t.ta();if(!t.Z||"function"!=typeof t.Z){if("undefined"!=typeof Map&&t instanceof Map)return Array.from(t.keys());if(!("undefined"!=typeof Set&&t instanceof Set)){if(Et(t)||"string"==typeof t){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const i in t)e[n++]=i;return e}}}(t),i=function(t){if(t.Z&&"function"==typeof t.Z)return t.Z();if("undefined"!=typeof Map&&t instanceof Map||"undefined"!=typeof Set&&t instanceof Set)return Array.from(t.values());if("string"==typeof t)return t.split("");if(Et(t)){for(var e=[],n=t.length,i=0;i<n;i++)e.push(t[i]);return e}for(i in e=[],n=0,t)e[n++]=t[i];return e}(t),r=i.length,s=0;s<r;s++)e.call(void 0,i[s],n&&n[s],t)}(mt=mn.prototype).setTimeout=function(t){this.P=t},mt.nb=function(t){t=t.target;const e=this.M;e&&3==ki(t)?e.l():this.Pa(t)},mt.Pa=function(t){try{if(t==this.g)t:{const c=ki(this.g);var e=this.g.Ia();this.g.da();if(!(3>c)&&(3!=c||qt||this.g&&(this.h.h||this.g.ja()||Ri(this.g)))){this.J||4!=c||7==e||tn(),Dn(this);var n=this.g.da();this.ca=n;e:if(Tn(this)){var i=Ri(this.g);t="";var r=i.length,s=4==ki(this.g);if(!this.h.i){if("undefined"==typeof TextDecoder){kn(this),Nn(this);var o="";break e}this.h.i=new wt.TextDecoder}for(e=0;e<r;e++)this.h.h=!0,t+=this.h.i.decode(i[e],{stream:s&&e==r-1});i.length=0,this.h.g+=t,this.o=0,o=this.h.g}else o=this.g.ja();if(this.i=200==n,function(t,e,n,i,r,s,o){t.info((function(){return"XMLHTTP RESP ("+i+") [ attempt "+r+"]: "+e+"\n"+n+"\n"+s+" "+o}))}(this.j,this.v,this.B,this.m,this.W,c,n),this.i){if(this.aa&&!this.K){e:{if(this.g){var a,h=this.g;if((a=h.g?h.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!Mt(a)){var l=a;break e}}l=null}if(!(n=l)){this.i=!1,this.s=3,nn(12),kn(this),Nn(this);break t}We(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Rn(this,n)}this.S?(In(this,c,o),qt&&this.i&&3==c&&(Ge(this.U,this.V,"tick",this.mb),this.V.start())):(We(this.j,this.m,o,null),Rn(this,o)),4==c&&kn(this),this.i&&!this.J&&(4==c?Qi(this.l,this):(this.i=!1,Cn(this)))}else(function(t){const e={};t=(t.g&&2<=ki(t)&&t.g.getAllResponseHeaders()||"").split("\r\n");for(let i=0;i<t.length;i++){if(Mt(t[i]))continue;var n=Oe(t[i]);const r=n[0];if("string"!=typeof(n=n[1]))continue;n=n.trim();const s=e[r]||[];e[r]=s,s.push(n)}!function(t,e){for(const n in t)e.call(void 0,t[n],n,t)}(e,(function(t){return t.join(", ")}))})(this.g),400==n&&0<o.indexOf("Unknown SID")?(this.s=3,nn(12)):(this.s=0,nn(13)),kn(this),Nn(this)}}}catch(t){}},mt.mb=function(){if(this.g){var t=ki(this.g),e=this.g.ja();this.o<e.length&&(Dn(this),In(this,t,e),this.i&&4!=t&&Cn(this))}},mt.cancel=function(){this.J=!0,kn(this)},mt.lb=function(){this.C=null;const t=Date.now();0<=t-this.Y?(function(t,e){t.info((function(){return"TIMEOUT: "+e}))}(this.j,this.B),2!=this.L&&(tn(),nn(17)),kn(this),this.s=2,Nn(this)):An(this,this.Y-t)};var xn=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Ln(t){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof Ln){this.h=t.h,Pn(this,t.j),this.s=t.s,this.g=t.g,Fn(this,t.m),this.l=t.l;var e=t.i,n=new Wn;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),Vn(this,n),this.o=t.o}else t&&(e=String(t).match(xn))?(this.h=!1,Pn(this,e[1]||"",!0),this.s=jn(e[2]||""),this.g=jn(e[3]||"",!0),Fn(this,e[4]),this.l=jn(e[5]||"",!0),Vn(this,e[6]||"",!0),this.o=jn(e[7]||"")):(this.h=!1,this.i=new Wn(null,this.h))}function Mn(t){return new Ln(t)}function Pn(t,e,n){t.j=n?jn(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function Fn(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function Vn(t,e,n){e instanceof Wn?(t.i=e,function(t,e){e&&!t.j&&(Xn(t),t.i=null,t.g.forEach((function(t,e){var n=e.toLowerCase();e!=n&&(Yn(this,e),Zn(this,n,t))}),t)),t.j=e}(t.i,t.h)):(n||(e=$n(e,Kn)),t.i=new Wn(e,t.h))}function Un(t,e,n){t.i.set(e,n)}function Bn(t){return Un(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function jn(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function $n(t,e,n){return"string"==typeof t?(t=encodeURI(t).replace(e,zn),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function zn(t){return"%"+((t=t.charCodeAt(0))>>4&15).toString(16)+(15&t).toString(16)}Ln.prototype.toString=function(){var t=[],e=this.j;e&&t.push($n(e,Hn,!0),":");var n=this.g;return(n||"file"==e)&&(t.push("//"),(e=this.s)&&t.push($n(e,Hn,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),null!=(n=this.m)&&t.push(":",String(n))),(n=this.l)&&(this.g&&"/"!=n.charAt(0)&&t.push("/"),t.push($n(n,"/"==n.charAt(0)?Gn:qn,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",$n(n,Qn)),t.join("")};var Hn=/[#\/\?@]/g,qn=/[#\?:]/g,Gn=/[#\?]/g,Kn=/[#\?@]/g,Qn=/#/g;function Wn(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function Xn(t){t.g||(t.g=new Map,t.h=0,t.i&&function(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var i=t[n].indexOf("="),r=null;if(0<=i){var s=t[n].substring(0,i);r=t[n].substring(i+1)}else s=t[n];e(s,r?decodeURIComponent(r.replace(/\+/g," ")):"")}}}(t.i,(function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)})))}function Yn(t,e){Xn(t),e=ti(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function Jn(t,e){return Xn(t),e=ti(t,e),t.g.has(e)}function Zn(t,e,n){Yn(t,e),0<n.length&&(t.i=null,t.g.set(ti(t,e),Rt(n)),t.h+=n.length)}function ti(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}(mt=Wn.prototype).add=function(t,e){Xn(this),this.i=null,t=ti(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this},mt.forEach=function(t,e){Xn(this),this.g.forEach((function(n,i){n.forEach((function(n){t.call(e,n,i,this)}),this)}),this)},mt.ta=function(){Xn(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let i=0;i<e.length;i++){const r=t[i];for(let t=0;t<r.length;t++)n.push(e[i])}return n},mt.Z=function(t){Xn(this);let e=[];if("string"==typeof t)Jn(this,t)&&(e=e.concat(this.g.get(ti(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e},mt.set=function(t,e){return Xn(this),this.i=null,Jn(this,t=ti(this,t))&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this},mt.get=function(t,e){return t&&0<(t=this.Z(t)).length?String(t[0]):e},mt.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var i=e[n];const s=encodeURIComponent(String(i)),o=this.Z(i);for(i=0;i<o.length;i++){var r=s;""!==o[i]&&(r+="="+encodeURIComponent(String(o[i]))),t.push(r)}}return this.i=t.join("&")};var ei=class{constructor(t,e){this.g=t,this.map=e}};function ni(t){this.l=t||ii,wt.PerformanceNavigationTiming?t=0<(t=wt.performance.getEntriesByType("navigation")).length&&("hq"==t[0].nextHopProtocol||"h2"==t[0].nextHopProtocol):t=!!(wt.g&&wt.g.Ka&&wt.g.Ka()&&wt.g.Ka().dc),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var ii=10;function ri(t){return!!t.h||!!t.g&&t.g.size>=t.j}function si(t){return t.h?1:t.g?t.g.size:0}function oi(t,e){return t.h?t.h==e:!!t.g&&t.g.has(e)}function ai(t,e){t.g?t.g.add(e):t.h=e}function hi(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}function li(t){if(null!=t.h)return t.i.concat(t.h.F);if(null!=t.g&&0!==t.g.size){let e=t.i;for(const n of t.g.values())e=e.concat(n.F);return e}return Rt(t.i)}ni.prototype.cancel=function(){if(this.i=li(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&0!==this.g.size){for(const t of this.g.values())t.cancel();this.g.clear()}};var ci=class{stringify(t){return wt.JSON.stringify(t,void 0)}parse(t){return wt.JSON.parse(t,void 0)}};function ui(){this.g=new ci}function fi(t,e,n){const i=n||"";try{On(t,(function(t,n){let r=t;bt(t)&&(r=De(t)),e.push(i+n+"="+encodeURIComponent(r))}))}catch(t){throw e.push(i+"type="+encodeURIComponent("_badmap")),t}}function di(t,e,n,i,r){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,r(i)}catch(t){}}function pi(t){this.l=t.ec||null,this.j=t.ob||!1}function gi(t,e){Se.call(this),this.F=t,this.u=e,this.m=void 0,this.readyState=mi,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}Dt(pi,hn),pi.prototype.g=function(){return new gi(this.l,this.j)},pi.prototype.i=function(t){return function(){return t}}({}),Dt(gi,Se);var mi=0;function yi(t){t.j.read().then(t.Xa.bind(t)).catch(t.ka.bind(t))}function vi(t){t.readyState=4,t.l=null,t.j=null,t.A=null,wi(t)}function wi(t){t.onreadystatechange&&t.onreadystatechange.call(t)}(mt=gi.prototype).open=function(t,e){if(this.readyState!=mi)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,wi(this)},mt.send=function(t){if(1!=this.readyState)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.F||wt).fetch(new Request(this.B,e)).then(this.$a.bind(this),this.ka.bind(this))},mt.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch((()=>{})),1<=this.readyState&&this.g&&4!=this.readyState&&(this.g=!1,vi(this)),this.readyState=mi},mt.$a=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,wi(this)),this.g&&(this.readyState=3,wi(this),this.g)))if("arraybuffer"===this.responseType)t.arrayBuffer().then(this.Ya.bind(this),this.ka.bind(this));else if(void 0!==wt.ReadableStream&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;yi(this)}else t.text().then(this.Za.bind(this),this.ka.bind(this))},mt.Xa=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?vi(this):wi(this),3==this.readyState&&yi(this)}},mt.Za=function(t){this.g&&(this.response=this.responseText=t,vi(this))},mt.Ya=function(t){this.g&&(this.response=t,vi(this))},mt.ka=function(){this.g&&vi(this)},mt.setRequestHeader=function(t,e){this.v.append(t,e)},mt.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""},mt.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join("\r\n")},Object.defineProperty(gi.prototype,"withCredentials",{get:function(){return"include"===this.m},set:function(t){this.m=t?"include":"same-origin"}});var Ei=wt.JSON.parse;function bi(t){Se.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.I="",this.m=0,this.j="",this.l=this.G=this.v=this.F=!1,this.B=0,this.A=null,this.K=_i,this.L=this.M=!1}Dt(bi,Se);var _i="",Ti=/^https?$/i,Ii=["POST","PUT"];function Si(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,Ci(t),Di(t)}function Ci(t){t.F||(t.F=!0,Ce(t,"complete"),Ce(t,"error"))}function Ai(t){if(t.h&&void 0!==vt&&(!t.C[1]||4!=ki(t)||2!=t.da()))if(t.v&&4==ki(t))je(t.La,0,t);else if(Ce(t,"readystatechange"),4==ki(t)){t.h=!1;try{const o=t.da();t:switch(o){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break t;default:e=!1}var n;if(!(n=e)){var i;if(i=0===o){var r=String(t.I).match(xn)[1]||null;!r&&wt.self&&wt.self.location&&(r=wt.self.location.protocol.slice(0,-1)),i=!Ti.test(r?r.toLowerCase():"")}n=i}if(n)Ce(t,"complete"),Ce(t,"success");else{t.m=6;try{var s=2<ki(t)?t.g.statusText:""}catch(t){s=""}t.j=s+" ["+t.da()+"]",Ci(t)}}finally{Di(t)}}}function Di(t,e){if(t.g){Ni(t);const n=t.g,i=t.C[0]?()=>{}:null;t.g=null,t.C=null,e||Ce(t,"ready");try{n.onreadystatechange=i}catch(t){}}}function Ni(t){t.g&&t.L&&(t.g.ontimeout=null),t.A&&(wt.clearTimeout(t.A),t.A=null)}function ki(t){return t.g?t.g.readyState:0}function Ri(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.K){case _i:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch(t){return null}}function Oi(t){let e="";return oe(t,(function(t,n){e+=n,e+=":",e+=t,e+="\r\n"})),e}function xi(t,e,n){t:{for(i in n){var i=!1;break t}i=!0}i||(n=Oi(n),"string"==typeof t?null!=n&&encodeURIComponent(String(n)):Un(t,e,n))}function Li(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function Mi(t){this.Ga=0,this.j=[],this.l=new Qe,this.pa=this.wa=this.I=this.Y=this.g=this.Da=this.F=this.na=this.o=this.U=this.s=null,this.fb=this.W=0,this.cb=Li("failFast",!1,t),this.G=this.v=this.u=this.m=this.h=null,this.aa=!0,this.Fa=this.V=-1,this.ba=this.A=this.C=0,this.ab=Li("baseRetryDelayMs",5e3,t),this.hb=Li("retryDelaySeedMs",1e4,t),this.eb=Li("forwardChannelMaxRetries",2,t),this.xa=Li("forwardChannelRequestTimeoutMs",2e4,t),this.va=t&&t.xmlHttpFactory||void 0,this.Ha=t&&t.useFetchStreams||!1,this.L=void 0,this.J=t&&t.supportsCrossDomainXhr||!1,this.K="",this.i=new ni(t&&t.concurrentRequestLimit),this.Ja=new ui,this.P=t&&t.fastHandshake||!1,this.O=t&&t.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.bb=t&&t.bc||!1,t&&t.Ea&&this.l.Ea(),t&&t.forceLongPolling&&(this.aa=!1),this.ca=!this.P&&this.aa&&t&&t.detectBufferingProxy||!1,this.qa=void 0,t&&t.longPollingTimeout&&0<t.longPollingTimeout&&(this.qa=t.longPollingTimeout),this.oa=void 0,this.S=0,this.M=!1,this.ma=this.B=null}function Pi(t){if(Vi(t),3==t.H){var e=t.W++,n=Mn(t.I);if(Un(n,"SID",t.K),Un(n,"RID",e),Un(n,"TYPE","terminate"),ji(t,n),(e=new mn(t,t.l,e)).L=2,e.A=Bn(Mn(n)),n=!1,wt.navigator&&wt.navigator.sendBeacon)try{n=wt.navigator.sendBeacon(e.A.toString(),"")}catch(t){}!n&&wt.Image&&((new Image).src=e.A,n=!0),n||(e.g=Zi(e.l,null),e.g.ha(e.A)),e.G=Date.now(),Cn(e)}Yi(t)}function Fi(t){t.g&&(qi(t),t.g.cancel(),t.g=null)}function Vi(t){Fi(t),t.u&&(wt.clearTimeout(t.u),t.u=null),Ki(t),t.i.cancel(),t.m&&("number"==typeof t.m&&wt.clearTimeout(t.m),t.m=null)}function Ui(t){
if(!ri(t.i)&&!t.m){t.m=!0;var e=t.Na;Le||Fe(),Me||(Le(),Me=!0),Pe.add(e,t),t.C=0}}function Bi(t,e){var n;n=e?e.m:t.W++;const i=Mn(t.I);Un(i,"SID",t.K),Un(i,"RID",n),Un(i,"AID",t.V),ji(t,i),t.o&&t.s&&xi(i,t.o,t.s),n=new mn(t,t.l,n,t.C+1),null===t.o&&(n.I=t.s),e&&(t.j=e.F.concat(t.j)),e=$i(t,n,1e3),n.setTimeout(Math.round(.5*t.xa)+Math.round(.5*t.xa*Math.random())),ai(t.i,n),bn(n,i,e)}function ji(t,e){t.na&&oe(t.na,(function(t,n){Un(e,n,t)})),t.h&&On({},(function(t,n){Un(e,n,t)}))}function $i(t,e,n){n=Math.min(t.j.length,n);var i=t.h?Ct(t.h.Va,t.h,t):null;t:{var r=t.j;let e=-1;for(;;){const t=["count="+n];-1==e?0<n?(e=r[0].g,t.push("ofs="+e)):e=0:t.push("ofs="+e);let s=!0;for(let o=0;o<n;o++){let n=r[o].g;const a=r[o].map;if(n-=e,0>n)e=Math.max(0,r[o].g-100),s=!1;else try{fi(a,t,"req"+n+"_")}catch(t){i&&i(a)}}if(s){i=t.join("&");break t}}}return t=t.j.splice(0,n),e.F=t,i}function zi(t){if(!t.g&&!t.u){t.ba=1;var e=t.Ma;Le||Fe(),Me||(Le(),Me=!0),Pe.add(e,t),t.A=0}}function Hi(t){return!(t.g||t.u||3<=t.A)&&(t.ba++,t.u=sn(Ct(t.Ma,t),Wi(t,t.A)),t.A++,!0)}function qi(t){null!=t.B&&(wt.clearTimeout(t.B),t.B=null)}function Gi(t){t.g=new mn(t,t.l,"rpc",t.ba),null===t.o&&(t.g.I=t.s),t.g.O=0;var e=Mn(t.wa);Un(e,"RID","rpc"),Un(e,"SID",t.K),Un(e,"AID",t.V),Un(e,"CI",t.G?"0":"1"),!t.G&&t.qa&&Un(e,"TO",t.qa),Un(e,"TYPE","xmlhttp"),ji(t,e),t.o&&t.s&&xi(e,t.o,t.s),t.L&&t.g.setTimeout(t.L);var n=t.g;t=t.pa,n.L=1,n.A=Bn(Mn(e)),n.u=null,n.S=!0,_n(n,t)}function Ki(t){null!=t.v&&(wt.clearTimeout(t.v),t.v=null)}function Qi(t,e){var n=null;if(t.g==e){Ki(t),qi(t),t.g=null;var i=2}else{if(!oi(t.i,e))return;n=e.F,hi(t.i,e),i=1}if(0!=t.H)if(e.i)if(1==i){n=e.u?e.u.length:0,e=Date.now()-e.G;var r=t.C;Ce(i=Je(),new rn(i,n)),Ui(t)}else zi(t);else if(3==(r=e.s)||0==r&&0<e.ca||!(1==i&&function(t,e){return!(si(t.i)>=t.i.j-(t.m?1:0)||(t.m?(t.j=e.F.concat(t.j),0):1==t.H||2==t.H||t.C>=(t.cb?0:t.eb)||(t.m=sn(Ct(t.Na,t,e),Wi(t,t.C)),t.C++,0)))}(t,e)||2==i&&Hi(t)))switch(n&&0<n.length&&(e=t.i,e.i=e.i.concat(n)),r){case 1:Xi(t,5);break;case 4:Xi(t,10);break;case 3:Xi(t,6);break;default:Xi(t,2)}}function Wi(t,e){let n=t.ab+Math.floor(Math.random()*t.hb);return t.isActive()||(n*=2),n*e}function Xi(t,e){if(t.l.info("Error code "+e),2==e){var n=null;t.h&&(n=null);var i=Ct(t.pb,t);n||(n=new Ln("//www.google.com/images/cleardot.gif"),wt.location&&"http"==wt.location.protocol||Pn(n,"https"),Bn(n)),function(t,e){const n=new Qe;if(wt.Image){const i=new Image;i.onload=At(di,n,i,"TestLoadImage: loaded",!0,e),i.onerror=At(di,n,i,"TestLoadImage: error",!1,e),i.onabort=At(di,n,i,"TestLoadImage: abort",!1,e),i.ontimeout=At(di,n,i,"TestLoadImage: timeout",!1,e),wt.setTimeout((function(){i.ontimeout&&i.ontimeout()}),1e4),i.src=t}else e(!1)}(n.toString(),i)}else nn(2);t.H=0,t.h&&t.h.za(e),Yi(t),Vi(t)}function Yi(t){if(t.H=0,t.ma=[],t.h){const e=li(t.i);0==e.length&&0==t.j.length||(Ot(t.ma,e),Ot(t.ma,t.j),t.i.i.length=0,Rt(t.j),t.j.length=0),t.h.ya()}}function Ji(t,e,n){var i=n instanceof Ln?Mn(n):new Ln(n);if(""!=i.g)e&&(i.g=e+"."+i.g),Fn(i,i.m);else{var r=wt.location;i=r.protocol,e=e?e+"."+r.hostname:r.hostname,r=+r.port;var s=new Ln(null);i&&Pn(s,i),e&&(s.g=e),r&&Fn(s,r),n&&(s.l=n),i=s}return n=t.F,e=t.Da,n&&e&&Un(i,n,e),Un(i,"VER",t.ra),ji(t,i),i}function Zi(t,e,n){if(e&&!t.J)throw Error("Can't create secondary domain capable XhrIo object.");return(e=t.Ha&&!t.va?new bi(new pi({ob:n})):new bi(t.va)).Oa(t.J),e}function tr(){}function er(){if(zt&&!(10<=Number(Zt)))throw Error("Environmental error: no available transport.")}function nr(t,e){Se.call(this),this.g=new Mi(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.Ca&&(t?t["X-WebChannel-Client-Profile"]=e.Ca:t={"X-WebChannel-Client-Profile":e.Ca}),this.g.U=t,(t=e&&e.cc)&&!Mt(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!Mt(e)&&(this.g.F=e,null!==(t=this.h)&&e in t&&(e in(t=this.h)&&delete t[e])),this.j=new sr(this)}function ir(t){dn.call(this),t.__headers__&&(this.headers=t.__headers__,this.statusCode=t.__status__,delete t.__headers__,delete t.__status__);var e=t.__sm__;if(e){t:{for(const n in e){t=n;break t}t=void 0}(this.i=t)&&(t=this.i,e=null!==e&&t in e?e[t]:void 0),this.data=e}else this.data=t}function rr(){pn.call(this),this.status=1}function sr(t){this.g=t}function or(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.m=Array(this.blockSize),this.i=this.h=0,this.reset()}function ar(t,e,n){n||(n=0);var i=Array(16);if("string"==typeof e)for(var r=0;16>r;++r)i[r]=e.charCodeAt(n++)|e.charCodeAt(n++)<<8|e.charCodeAt(n++)<<16|e.charCodeAt(n++)<<24;else for(r=0;16>r;++r)i[r]=e[n++]|e[n++]<<8|e[n++]<<16|e[n++]<<24;e=t.g[0],n=t.g[1],r=t.g[2];var s=t.g[3],o=e+(s^n&(r^s))+i[0]+3614090360&4294967295;o=(n=(r=(s=(e=(n=(r=(s=(e=(n=(r=(s=(e=(n=(r=(s=(e=(n=(r=(s=(e=(n=(r=(s=(e=(n=(r=(s=(e=(n=(r=(s=(e=(n=(r=(s=(e=(n=(r=(s=(e=(n=(r=(s=(e=(n=(r=(s=(e=(n=(r=(s=(e=(n=(r=(s=(e=(n=(r=(s=(e=n+(o<<7&4294967295|o>>>25))+((o=s+(r^e&(n^r))+i[1]+3905402710&4294967295)<<12&4294967295|o>>>20))+((o=r+(n^s&(e^n))+i[2]+606105819&4294967295)<<17&4294967295|o>>>15))+((o=n+(e^r&(s^e))+i[3]+3250441966&4294967295)<<22&4294967295|o>>>10))+((o=e+(s^n&(r^s))+i[4]+4118548399&4294967295)<<7&4294967295|o>>>25))+((o=s+(r^e&(n^r))+i[5]+1200080426&4294967295)<<12&4294967295|o>>>20))+((o=r+(n^s&(e^n))+i[6]+2821735955&4294967295)<<17&4294967295|o>>>15))+((o=n+(e^r&(s^e))+i[7]+4249261313&4294967295)<<22&4294967295|o>>>10))+((o=e+(s^n&(r^s))+i[8]+1770035416&4294967295)<<7&4294967295|o>>>25))+((o=s+(r^e&(n^r))+i[9]+2336552879&4294967295)<<12&4294967295|o>>>20))+((o=r+(n^s&(e^n))+i[10]+4294925233&4294967295)<<17&4294967295|o>>>15))+((o=n+(e^r&(s^e))+i[11]+2304563134&4294967295)<<22&4294967295|o>>>10))+((o=e+(s^n&(r^s))+i[12]+1804603682&4294967295)<<7&4294967295|o>>>25))+((o=s+(r^e&(n^r))+i[13]+4254626195&4294967295)<<12&4294967295|o>>>20))+((o=r+(n^s&(e^n))+i[14]+2792965006&4294967295)<<17&4294967295|o>>>15))+((o=n+(e^r&(s^e))+i[15]+1236535329&4294967295)<<22&4294967295|o>>>10))+((o=e+(r^s&(n^r))+i[1]+4129170786&4294967295)<<5&4294967295|o>>>27))+((o=s+(n^r&(e^n))+i[6]+3225465664&4294967295)<<9&4294967295|o>>>23))+((o=r+(e^n&(s^e))+i[11]+643717713&4294967295)<<14&4294967295|o>>>18))+((o=n+(s^e&(r^s))+i[0]+3921069994&4294967295)<<20&4294967295|o>>>12))+((o=e+(r^s&(n^r))+i[5]+3593408605&4294967295)<<5&4294967295|o>>>27))+((o=s+(n^r&(e^n))+i[10]+38016083&4294967295)<<9&4294967295|o>>>23))+((o=r+(e^n&(s^e))+i[15]+3634488961&4294967295)<<14&4294967295|o>>>18))+((o=n+(s^e&(r^s))+i[4]+3889429448&4294967295)<<20&4294967295|o>>>12))+((o=e+(r^s&(n^r))+i[9]+568446438&4294967295)<<5&4294967295|o>>>27))+((o=s+(n^r&(e^n))+i[14]+3275163606&4294967295)<<9&4294967295|o>>>23))+((o=r+(e^n&(s^e))+i[3]+4107603335&4294967295)<<14&4294967295|o>>>18))+((o=n+(s^e&(r^s))+i[8]+1163531501&4294967295)<<20&4294967295|o>>>12))+((o=e+(r^s&(n^r))+i[13]+2850285829&4294967295)<<5&4294967295|o>>>27))+((o=s+(n^r&(e^n))+i[2]+4243563512&4294967295)<<9&4294967295|o>>>23))+((o=r+(e^n&(s^e))+i[7]+1735328473&4294967295)<<14&4294967295|o>>>18))+((o=n+(s^e&(r^s))+i[12]+2368359562&4294967295)<<20&4294967295|o>>>12))+((o=e+(n^r^s)+i[5]+4294588738&4294967295)<<4&4294967295|o>>>28))+((o=s+(e^n^r)+i[8]+2272392833&4294967295)<<11&4294967295|o>>>21))+((o=r+(s^e^n)+i[11]+1839030562&4294967295)<<16&4294967295|o>>>16))+((o=n+(r^s^e)+i[14]+4259657740&4294967295)<<23&4294967295|o>>>9))+((o=e+(n^r^s)+i[1]+2763975236&4294967295)<<4&4294967295|o>>>28))+((o=s+(e^n^r)+i[4]+1272893353&4294967295)<<11&4294967295|o>>>21))+((o=r+(s^e^n)+i[7]+4139469664&4294967295)<<16&4294967295|o>>>16))+((o=n+(r^s^e)+i[10]+3200236656&4294967295)<<23&4294967295|o>>>9))+((o=e+(n^r^s)+i[13]+681279174&4294967295)<<4&4294967295|o>>>28))+((o=s+(e^n^r)+i[0]+3936430074&4294967295)<<11&4294967295|o>>>21))+((o=r+(s^e^n)+i[3]+3572445317&4294967295)<<16&4294967295|o>>>16))+((o=n+(r^s^e)+i[6]+76029189&4294967295)<<23&4294967295|o>>>9))+((o=e+(n^r^s)+i[9]+3654602809&4294967295)<<4&4294967295|o>>>28))+((o=s+(e^n^r)+i[12]+3873151461&4294967295)<<11&4294967295|o>>>21))+((o=r+(s^e^n)+i[15]+530742520&4294967295)<<16&4294967295|o>>>16))+((o=n+(r^s^e)+i[2]+3299628645&4294967295)<<23&4294967295|o>>>9))+((o=e+(r^(n|~s))+i[0]+4096336452&4294967295)<<6&4294967295|o>>>26))+((o=s+(n^(e|~r))+i[7]+1126891415&4294967295)<<10&4294967295|o>>>22))+((o=r+(e^(s|~n))+i[14]+2878612391&4294967295)<<15&4294967295|o>>>17))+((o=n+(s^(r|~e))+i[5]+4237533241&4294967295)<<21&4294967295|o>>>11))+((o=e+(r^(n|~s))+i[12]+1700485571&4294967295)<<6&4294967295|o>>>26))+((o=s+(n^(e|~r))+i[3]+2399980690&4294967295)<<10&4294967295|o>>>22))+((o=r+(e^(s|~n))+i[10]+4293915773&4294967295)<<15&4294967295|o>>>17))+((o=n+(s^(r|~e))+i[1]+2240044497&4294967295)<<21&4294967295|o>>>11))+((o=e+(r^(n|~s))+i[8]+1873313359&4294967295)<<6&4294967295|o>>>26))+((o=s+(n^(e|~r))+i[15]+4264355552&4294967295)<<10&4294967295|o>>>22))+((o=r+(e^(s|~n))+i[6]+2734768916&4294967295)<<15&4294967295|o>>>17))+((o=n+(s^(r|~e))+i[13]+1309151649&4294967295)<<21&4294967295|o>>>11))+((s=(e=n+((o=e+(r^(n|~s))+i[4]+4149444226&4294967295)<<6&4294967295|o>>>26))+((o=s+(n^(e|~r))+i[11]+3174756917&4294967295)<<10&4294967295|o>>>22))^((r=s+((o=r+(e^(s|~n))+i[2]+718787259&4294967295)<<15&4294967295|o>>>17))|~e))+i[9]+3951481745&4294967295,t.g[0]=t.g[0]+e&4294967295,t.g[1]=t.g[1]+(r+(o<<21&4294967295|o>>>11))&4294967295,t.g[2]=t.g[2]+r&4294967295,t.g[3]=t.g[3]+s&4294967295}function hr(t,e){this.h=e;for(var n=[],i=!0,r=t.length-1;0<=r;r--){var s=0|t[r];i&&s==e||(n[r]=s,i=!1)}this.g=n}(mt=bi.prototype).Oa=function(t){this.M=t},mt.ha=function(t,e,n,i){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.I+"; newUri="+t);e=e?e.toUpperCase():"GET",this.I=t,this.j="",this.m=0,this.F=!1,this.h=!0,this.g=this.u?this.u.g():un.g(),this.C=this.u?ln(this.u):ln(un),this.g.onreadystatechange=Ct(this.La,this);try{this.G=!0,this.g.open(e,String(t),!0),this.G=!1}catch(t){return void Si(this,t)}if(t=n||"",n=new Map(this.headers),i)if(Object.getPrototypeOf(i)===Object.prototype)for(var r in i)n.set(r,i[r]);else{if("function"!=typeof i.keys||"function"!=typeof i.get)throw Error("Unknown input type for opt_headers: "+String(i));for(const t of i.keys())n.set(t,i.get(t))}i=Array.from(n.keys()).find((t=>"content-type"==t.toLowerCase())),r=wt.FormData&&t instanceof wt.FormData,!(0<=kt(Ii,e))||i||r||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[t,e]of n)this.g.setRequestHeader(t,e);this.K&&(this.g.responseType=this.K),"withCredentials"in this.g&&this.g.withCredentials!==this.M&&(this.g.withCredentials=this.M);try{Ni(this),0<this.B&&((this.L=function(t){return zt&&"number"==typeof t.timeout&&void 0!==t.ontimeout}(this.g))?(this.g.timeout=this.B,this.g.ontimeout=Ct(this.ua,this)):this.A=je(this.ua,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(t){Si(this,t)}},mt.ua=function(){void 0!==vt&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,Ce(this,"timeout"),this.abort(8))},mt.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,Ce(this,"complete"),Ce(this,"abort"),Di(this))},mt.N=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Di(this,!0)),bi.$.N.call(this)},mt.La=function(){this.s||(this.G||this.v||this.l?Ai(this):this.kb())},mt.kb=function(){Ai(this)},mt.isActive=function(){return!!this.g},mt.da=function(){try{return 2<ki(this)?this.g.status:-1}catch(t){return-1}},mt.ja=function(){try{return this.g?this.g.responseText:""}catch(t){return""}},mt.Wa=function(t){if(this.g){var e=this.g.responseText;return t&&0==e.indexOf(t)&&(e=e.substring(t.length)),Ei(e)}},mt.Ia=function(){return this.m},mt.Sa=function(){return"string"==typeof this.j?this.j:String(this.j)},(mt=Mi.prototype).ra=8,mt.H=1,mt.Na=function(t){if(this.m)if(this.m=null,1==this.H){if(!t){this.W=Math.floor(1e5*Math.random()),t=this.W++;const r=new mn(this,this.l,t);let s=this.s;if(this.U&&(s?(s=ae(s),le(s,this.U)):s=this.U),null!==this.o||this.O||(r.I=s,s=null),this.P)t:{for(var e=0,n=0;n<this.j.length;n++){var i=this.j[n];if(void 0===(i="__data__"in i.map&&"string"==typeof(i=i.map.__data__)?i.length:void 0))break;if(4096<(e+=i)){e=n;break t}if(4096===e||n===this.j.length-1){e=n+1;break t}}e=1e3}else e=1e3;e=$i(this,r,e),Un(n=Mn(this.I),"RID",t),Un(n,"CVER",22),this.F&&Un(n,"X-HTTP-Session-Id",this.F),ji(this,n),s&&(this.O?e="headers="+encodeURIComponent(String(Oi(s)))+"&"+e:this.o&&xi(n,this.o,s)),ai(this.i,r),this.bb&&Un(n,"TYPE","init"),this.P?(Un(n,"$req",e),Un(n,"SID","null"),r.aa=!0,bn(r,n,null)):bn(r,n,e),this.H=2}}else 3==this.H&&(t?Bi(this,t):0==this.j.length||ri(this.i)||Bi(this))},mt.Ma=function(){if(this.u=null,Gi(this),this.ca&&!(this.M||null==this.g||0>=this.S)){var t=2*this.S;this.l.info("BP detection timer enabled: "+t),this.B=sn(Ct(this.jb,this),t)}},mt.jb=function(){this.B&&(this.B=null,this.l.info("BP detection timeout reached."),this.l.info("Buffering proxy detected and switch to long-polling!"),this.G=!1,this.M=!0,nn(10),Fi(this),Gi(this))},mt.ib=function(){null!=this.v&&(this.v=null,Fi(this),Hi(this),nn(19))},mt.pb=function(t){t?(this.l.info("Successfully pinged google.com"),nn(2)):(this.l.info("Failed to ping google.com"),nn(1))},mt.isActive=function(){return!!this.h&&this.h.isActive(this)},(mt=tr.prototype).Ba=function(){},mt.Aa=function(){},mt.za=function(){},mt.ya=function(){},mt.isActive=function(){return!0},mt.Va=function(){},er.prototype.g=function(t,e){return new nr(t,e)},Dt(nr,Se),nr.prototype.m=function(){this.g.h=this.j,this.A&&(this.g.J=!0);var t=this.g,e=this.l,n=this.h||void 0;nn(0),t.Y=e,t.na=n||{},t.G=t.aa,t.I=Ji(t,null,t.Y),Ui(t)},nr.prototype.close=function(){Pi(this.g)},nr.prototype.u=function(t){var e=this.g;if("string"==typeof t){var n={};n.__data__=t,t=n}else this.v&&((n={}).__data__=De(t),t=n);e.j.push(new ei(e.fb++,t)),3==e.H&&Ui(e)},nr.prototype.N=function(){this.g.h=null,delete this.j,Pi(this.g),delete this.g,nr.$.N.call(this)},Dt(ir,dn),Dt(rr,pn),Dt(sr,tr),sr.prototype.Ba=function(){Ce(this.g,"a")},sr.prototype.Aa=function(t){Ce(this.g,new ir(t))},sr.prototype.za=function(t){Ce(this.g,new rr)},sr.prototype.ya=function(){Ce(this.g,"b")},Dt(or,(function(){this.blockSize=-1})),or.prototype.reset=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.i=this.h=0},or.prototype.j=function(t,e){void 0===e&&(e=t.length);for(var n=e-this.blockSize,i=this.m,r=this.h,s=0;s<e;){if(0==r)for(;s<=n;)ar(this,t,s),s+=this.blockSize;if("string"==typeof t){for(;s<e;)if(i[r++]=t.charCodeAt(s++),r==this.blockSize){ar(this,i),r=0;break}}else for(;s<e;)if(i[r++]=t[s++],r==this.blockSize){ar(this,i),r=0;break}}this.h=r,this.i+=e},or.prototype.l=function(){var t=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);t[0]=128;for(var e=1;e<t.length-8;++e)t[e]=0;var n=8*this.i;for(e=t.length-8;e<t.length;++e)t[e]=255&n,n/=256;for(this.j(t),t=Array(16),e=n=0;4>e;++e)for(var i=0;32>i;i+=8)t[n++]=this.g[e]>>>i&255;return t};var lr={};function cr(t){return-128<=t&&128>t?function(t,e){var n=lr;return Object.prototype.hasOwnProperty.call(n,t)?n[t]:n[t]=e(t)}(t,(function(t){return new hr([0|t],0>t?-1:0)})):new hr([0|t],0>t?-1:0)}function ur(t){if(isNaN(t)||!isFinite(t))return dr;if(0>t)return vr(ur(-t));for(var e=[],n=1,i=0;t>=n;i++)e[i]=t/n|0,n*=fr;return new hr(e,0)}var fr=4294967296,dr=cr(0),pr=cr(1),gr=cr(16777216);function mr(t){if(0!=t.h)return!1;for(var e=0;e<t.g.length;e++)if(0!=t.g[e])return!1;return!0}function yr(t){return-1==t.h}function vr(t){for(var e=t.g.length,n=[],i=0;i<e;i++)n[i]=~t.g[i];return new hr(n,~t.h).add(pr)}function wr(t,e){return t.add(vr(e))}function Er(t,e){for(;(65535&t[e])!=t[e];)t[e+1]+=t[e]>>>16,t[e]&=65535,e++}function br(t,e){this.g=t,this.h=e}function _r(t,e){if(mr(e))throw Error("division by zero");if(mr(t))return new br(dr,dr);if(yr(t))return e=_r(vr(t),e),new br(vr(e.g),vr(e.h));if(yr(e))return e=_r(t,vr(e)),new br(vr(e.g),e.h);if(30<t.g.length){if(yr(t)||yr(e))throw Error("slowDivide_ only works with positive integers.");for(var n=pr,i=e;0>=i.X(t);)n=Tr(n),i=Tr(i);var r=Ir(n,1),s=Ir(i,1);for(i=Ir(i,2),n=Ir(n,2);!mr(i);){var o=s.add(i);0>=o.X(t)&&(r=r.add(n),s=o),i=Ir(i,1),n=Ir(n,1)}return e=wr(t,r.R(e)),new br(r,e)}for(r=dr;0<=t.X(e);){for(n=Math.max(1,Math.floor(t.ea()/e.ea())),i=48>=(i=Math.ceil(Math.log(n)/Math.LN2))?1:Math.pow(2,i-48),o=(s=ur(n)).R(e);yr(o)||0<o.X(t);)o=(s=ur(n-=i)).R(e);mr(s)&&(s=pr),r=r.add(s),t=wr(t,o)}return new br(r,t)}function Tr(t){for(var e=t.g.length+1,n=[],i=0;i<e;i++)n[i]=t.D(i)<<1|t.D(i-1)>>>31;return new hr(n,t.h)}function Ir(t,e){var n=e>>5;e%=32;for(var i=t.g.length-n,r=[],s=0;s<i;s++)r[s]=0<e?t.D(s+n)>>>e|t.D(s+n+1)<<32-e:t.D(s+n);return new hr(r,t.h)}(mt=hr.prototype).ea=function(){if(yr(this))return-vr(this).ea();for(var t=0,e=1,n=0;n<this.g.length;n++){var i=this.D(n);t+=(0<=i?i:fr+i)*e,e*=fr}return t},mt.toString=function(t){if(2>(t=t||10)||36<t)throw Error("radix out of range: "+t);if(mr(this))return"0";if(yr(this))return"-"+vr(this).toString(t);for(var e=ur(Math.pow(t,6)),n=this,i="";;){var r=_r(n,e).g,s=((0<(n=wr(n,r.R(e))).g.length?n.g[0]:n.h)>>>0).toString(t);if(mr(n=r))return s+i;for(;6>s.length;)s="0"+s;i=s+i}},mt.D=function(t){return 0>t?0:t<this.g.length?this.g[t]:this.h},mt.X=function(t){return yr(t=wr(this,t))?-1:mr(t)?0:1},mt.abs=function(){return yr(this)?vr(this):this},mt.add=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],i=0,r=0;r<=e;r++){var s=i+(65535&this.D(r))+(65535&t.D(r)),o=(s>>>16)+(this.D(r)>>>16)+(t.D(r)>>>16);i=o>>>16,s&=65535,o&=65535,n[r]=o<<16|s}return new hr(n,-2147483648&n[n.length-1]?-1:0)},mt.R=function(t){if(mr(this)||mr(t))return dr;if(yr(this))return yr(t)?vr(this).R(vr(t)):vr(vr(this).R(t));if(yr(t))return vr(this.R(vr(t)));if(0>this.X(gr)&&0>t.X(gr))return ur(this.ea()*t.ea());for(var e=this.g.length+t.g.length,n=[],i=0;i<2*e;i++)n[i]=0;for(i=0;i<this.g.length;i++)for(var r=0;r<t.g.length;r++){var s=this.D(i)>>>16,o=65535&this.D(i),a=t.D(r)>>>16,h=65535&t.D(r);n[2*i+2*r]+=o*h,Er(n,2*i+2*r),n[2*i+2*r+1]+=s*h,Er(n,2*i+2*r+1),n[2*i+2*r+1]+=o*a,Er(n,2*i+2*r+1),n[2*i+2*r+2]+=s*a,Er(n,2*i+2*r+2)}for(i=0;i<e;i++)n[i]=n[2*i+1]<<16|n[2*i];for(i=e;i<2*e;i++)n[i]=0;return new hr(n,0)},mt.gb=function(t){return _r(this,t).h},mt.and=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],i=0;i<e;i++)n[i]=this.D(i)&t.D(i);return new hr(n,this.h&t.h)},mt.or=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],i=0;i<e;i++)n[i]=this.D(i)|t.D(i);return new hr(n,this.h|t.h)},mt.xor=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],i=0;i<e;i++)n[i]=this.D(i)^t.D(i);return new hr(n,this.h^t.h)},er.prototype.createWebChannel=er.prototype.g,nr.prototype.send=nr.prototype.u,nr.prototype.open=nr.prototype.m,nr.prototype.close=nr.prototype.close,on.NO_ERROR=0,on.TIMEOUT=8,on.HTTP_ERROR=6,an.COMPLETE="complete",cn.EventType=fn,fn.OPEN="a",fn.CLOSE="b",fn.ERROR="c",fn.MESSAGE="d",Se.prototype.listen=Se.prototype.O,bi.prototype.listenOnce=bi.prototype.P,bi.prototype.getLastError=bi.prototype.Sa,bi.prototype.getLastErrorCode=bi.prototype.Ia,bi.prototype.getStatus=bi.prototype.da,bi.prototype.getResponseJson=bi.prototype.Wa,bi.prototype.getResponseText=bi.prototype.ja,bi.prototype.send=bi.prototype.ha,bi.prototype.setWithCredentials=bi.prototype.Oa,or.prototype.digest=or.prototype.l,or.prototype.reset=or.prototype.reset,or.prototype.update=or.prototype.j,hr.prototype.add=hr.prototype.add,hr.prototype.multiply=hr.prototype.R,hr.prototype.modulo=hr.prototype.gb,hr.prototype.compare=hr.prototype.X,hr.prototype.toNumber=hr.prototype.ea,hr.prototype.toString=hr.prototype.toString,hr.prototype.getBits=hr.prototype.D,hr.fromNumber=ur,hr.fromString=function t(e,n){if(0==e.length)throw Error("number format error: empty string");if(2>(n=n||10)||36<n)throw Error("radix out of range: "+n);if("-"==e.charAt(0))return vr(t(e.substring(1),n));if(0<=e.indexOf("-"))throw Error('number format error: interior "-" character');for(var i=ur(Math.pow(n,8)),r=dr,s=0;s<e.length;s+=8){var o=Math.min(8,e.length-s),a=parseInt(e.substring(s,s+o),n);8>o?(o=ur(Math.pow(n,o)),r=r.R(o).add(ur(a))):r=(r=r.R(i)).add(ur(a))}return r};var Sr=on,Cr=an,Ar=Xe,Dr=10,Nr=11,kr=cn,Rr=bi,Or=hr;const xr="@firebase/firestore";
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
     */class Lr{constructor(t){this.uid=t}isAuthenticated(){return null!=this.uid}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}Lr.UNAUTHENTICATED=new Lr(null),Lr.GOOGLE_CREDENTIALS=new Lr("google-credentials-uid"),Lr.FIRST_PARTY=new Lr("first-party-uid"),Lr.MOCK_USER=new Lr("mock-user");
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
let Mr="10.7.0";
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
     */const Pr=new S("@firebase/firestore");function Fr(){return Pr.logLevel}function Vr(t,...e){if(Pr.logLevel<=E.DEBUG){const n=e.map(jr);Pr.debug(`Firestore (${Mr}): ${t}`,...n)}}function Ur(t,...e){if(Pr.logLevel<=E.ERROR){const n=e.map(jr);Pr.error(`Firestore (${Mr}): ${t}`,...n)}}function Br(t,...e){if(Pr.logLevel<=E.WARN){const n=e.map(jr);Pr.warn(`Firestore (${Mr}): ${t}`,...n)}}function jr(t){if("string"==typeof t)return t;try{
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
     */function $r(t="Unexpected state"){const e=`FIRESTORE (${Mr}) INTERNAL ASSERTION FAILED: `+t;throw Ur(e),new Error(e)}function zr(t,e){t||$r()}function Hr(t,e){return t}
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
     */const qr={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class Gr extends c{constructor(t,e){super(t,e),this.code=t,this.message=e,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}
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
     */class Kr{constructor(){this.promise=new Promise(((t,e)=>{this.resolve=t,this.reject=e}))}}
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
     */class Qr{constructor(t,e){this.user=e,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class Wr{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,e){t.enqueueRetryable((()=>e(Lr.UNAUTHENTICATED)))}shutdown(){}}class Xr{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,e){this.changeListener=e,t.enqueueRetryable((()=>e(this.token.user)))}shutdown(){this.changeListener=null}}class Yr{constructor(t){this.t=t,this.currentUser=Lr.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,e){let n=this.i;const i=t=>this.i!==n?(n=this.i,e(t)):Promise.resolve();let r=new Kr;this.o=()=>{this.i++,this.currentUser=this.u(),r.resolve(),r=new Kr,t.enqueueRetryable((()=>i(this.currentUser)))};const s=()=>{const e=r;t.enqueueRetryable((async()=>{await e.promise,await i(this.currentUser)}))},o=t=>{Vr("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=t,this.auth.addAuthTokenListener(this.o),s()};this.t.onInit((t=>o(t))),setTimeout((()=>{if(!this.auth){const t=this.t.getImmediate({optional:!0});t?o(t):(Vr("FirebaseAuthCredentialsProvider","Auth not yet detected"),r.resolve(),r=new Kr)}}),0),s()}getToken(){const t=this.i,e=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(e).then((e=>this.i!==t?(Vr("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):e?(zr("string"==typeof e.accessToken),new Qr(e.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const t=this.auth&&this.auth.getUid();return zr(null===t||"string"==typeof t),new Lr(t)}}class Jr{constructor(t,e,n){this.l=t,this.h=e,this.P=n,this.type="FirstParty",this.user=Lr.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const t=this.T();return t&&this.I.set("Authorization",t),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class Zr{constructor(t,e,n){this.l=t,this.h=e,this.P=n}getToken(){return Promise.resolve(new Jr(this.l,this.h,this.P))}start(t,e){t.enqueueRetryable((()=>e(Lr.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class ts{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class es{constructor(t){this.A=t,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(t,e){const n=t=>{null!=t.error&&Vr("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${t.error.message}`);const n=t.token!==this.R;return this.R=t.token,Vr("FirebaseAppCheckTokenProvider",`Received ${n?"new":"existing"} token.`),n?e(t.token):Promise.resolve()};this.o=e=>{t.enqueueRetryable((()=>n(e)))};const i=t=>{Vr("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=t,this.appCheck.addTokenListener(this.o)};this.A.onInit((t=>i(t))),setTimeout((()=>{if(!this.appCheck){const t=this.A.getImmediate({optional:!0});t?i(t):Vr("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then((t=>t?(zr("string"==typeof t.token),this.R=t.token,new ts(t.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}
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
     */function ns(t){const e="undefined"!=typeof self&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&"function"==typeof e.getRandomValues)e.getRandomValues(n);else for(let e=0;e<t;e++)n[e]=Math.floor(256*Math.random());return n}
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
     */class is{static newId(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",e=62*Math.floor(256/62);let n="";for(;n.length<20;){const i=ns(40);for(let r=0;r<i.length;++r)n.length<20&&i[r]<e&&(n+=t.charAt(i[r]%62))}return n}}function rs(t,e){return t<e?-1:t>e?1:0}function ss(t,e,n){return t.length===e.length&&t.every(((t,i)=>n(t,e[i])))}
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
     */class os{constructor(t,e){if(this.seconds=t,this.nanoseconds=e,e<0)throw new Gr(qr.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(e>=1e9)throw new Gr(qr.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(t<-62135596800)throw new Gr(qr.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new Gr(qr.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}static now(){return os.fromMillis(Date.now())}static fromDate(t){return os.fromMillis(t.getTime())}static fromMillis(t){const e=Math.floor(t/1e3),n=Math.floor(1e6*(t-1e3*e));return new os(e,n)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(t){return this.seconds===t.seconds?rs(this.nanoseconds,t.nanoseconds):rs(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const t=this.seconds- -62135596800;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}
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
     */class as{constructor(t){this.timestamp=t}static fromTimestamp(t){return new as(t)}static min(){return new as(new os(0,0))}static max(){return new as(new os(253402300799,999999999))}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}
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
     */class hs{constructor(t,e,n){void 0===e?e=0:e>t.length&&$r(),void 0===n?n=t.length-e:n>t.length-e&&$r(),this.segments=t,this.offset=e,this.len=n}get length(){return this.len}isEqual(t){return 0===hs.comparator(this,t)}child(t){const e=this.segments.slice(this.offset,this.limit());return t instanceof hs?t.forEach((t=>{e.push(t)})):e.push(t),this.construct(e)}limit(){return this.offset+this.length}popFirst(t){return t=void 0===t?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return 0===this.length}isPrefixOf(t){if(t.length<this.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}forEach(t){for(let e=this.offset,n=this.limit();e<n;e++)t(this.segments[e])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,e){const n=Math.min(t.length,e.length);for(let i=0;i<n;i++){const n=t.get(i),r=e.get(i);if(n<r)return-1;if(n>r)return 1}return t.length<e.length?-1:t.length>e.length?1:0}}class ls extends hs{construct(t,e,n){return new ls(t,e,n)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...t){const e=[];for(const n of t){if(n.indexOf("//")>=0)throw new Gr(qr.INVALID_ARGUMENT,`Invalid segment (${n}). Paths must not contain // in them.`);e.push(...n.split("/").filter((t=>t.length>0)))}return new ls(e)}static emptyPath(){return new ls([])}}const cs=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class us extends hs{construct(t,e,n){return new us(t,e,n)}static isValidIdentifier(t){return cs.test(t)}canonicalString(){return this.toArray().map((t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),us.isValidIdentifier(t)||(t="`"+t+"`"),t))).join(".")}toString(){return this.canonicalString()}isKeyField(){return 1===this.length&&"__name__"===this.get(0)}static keyField(){return new us(["__name__"])}static fromServerFormat(t){const e=[];let n="",i=0;const r=()=>{if(0===n.length)throw new Gr(qr.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);e.push(n),n=""};let s=!1;for(;i<t.length;){const e=t[i];if("\\"===e){if(i+1===t.length)throw new Gr(qr.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const e=t[i+1];if("\\"!==e&&"."!==e&&"`"!==e)throw new Gr(qr.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);n+=e,i+=2}else"`"===e?(s=!s,i++):"."!==e||s?(n+=e,i++):(r(),i++)}if(r(),s)throw new Gr(qr.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new us(e)}static emptyPath(){return new us([])}}
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
     */class fs{constructor(t){this.path=t}static fromPath(t){return new fs(ls.fromString(t))}static fromName(t){return new fs(ls.fromString(t).popFirst(5))}static empty(){return new fs(ls.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return null!==t&&0===ls.comparator(this.path,t.path)}toString(){return this.path.toString()}static comparator(t,e){return ls.comparator(t.path,e.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new fs(new ls(t.slice()))}}function ds(t){return new ps(t.readTime,t.key,-1)}class ps{constructor(t,e,n){this.readTime=t,this.documentKey=e,this.largestBatchId=n}static min(){return new ps(as.min(),fs.empty(),-1)}static max(){return new ps(as.max(),fs.empty(),-1)}}function gs(t,e){let n=t.readTime.compareTo(e.readTime);return 0!==n?n:(n=fs.comparator(t.documentKey,e.documentKey),0!==n?n:rs(t.largestBatchId,e.largestBatchId))}
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
     */const ms="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class ys{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((t=>t()))}}
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
     */async function vs(t){if(t.code!==qr.FAILED_PRECONDITION||t.message!==ms)throw t;Vr("LocalStore","Unexpectedly lost primary lease")}
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
     */class ws{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t((t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)}),(t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)}))}catch(t){return this.next(void 0,t)}next(t,e){return this.callbackAttached&&$r(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(e,this.error):this.wrapSuccess(t,this.result):new ws(((n,i)=>{this.nextCallback=e=>{this.wrapSuccess(t,e).next(n,i)},this.catchCallback=t=>{this.wrapFailure(e,t).next(n,i)}}))}toPromise(){return new Promise(((t,e)=>{this.next(t,e)}))}wrapUserFunction(t){try{const e=t();return e instanceof ws?e:ws.resolve(e)}catch(t){return ws.reject(t)}}wrapSuccess(t,e){return t?this.wrapUserFunction((()=>t(e))):ws.resolve(e)}wrapFailure(t,e){return t?this.wrapUserFunction((()=>t(e))):ws.reject(e)}static resolve(t){return new ws(((e,n)=>{e(t)}))}static reject(t){return new ws(((e,n)=>{n(t)}))}static waitFor(t){return new ws(((e,n)=>{let i=0,r=0,s=!1;t.forEach((t=>{++i,t.next((()=>{++r,s&&r===i&&e()}),(t=>n(t)))})),s=!0,r===i&&e()}))}static or(t){let e=ws.resolve(!1);for(const n of t)e=e.next((t=>t?ws.resolve(t):n()));return e}static forEach(t,e){const n=[];return t.forEach(((t,i)=>{n.push(e.call(this,t,i))})),this.waitFor(n)}static mapArray(t,e){return new ws(((n,i)=>{const r=t.length,s=new Array(r);let o=0;for(let a=0;a<r;a++){const h=a;e(t[h]).next((t=>{s[h]=t,++o,o===r&&n(s)}),(t=>i(t)))}}))}static doWhile(t,e){return new ws(((n,i)=>{const r=()=>{!0===t()?e().next((()=>{r()}),i):n()};r()}))}}function Es(t){return"IndexedDbTransactionError"===t.name}
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
     */class bs{constructor(t,e){this.previousValue=t,e&&(e.sequenceNumberHandler=t=>this.se(t),this.oe=t=>e.writeSequenceNumber(t))}se(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.oe&&this.oe(t),t}}function _s(t){return null==t}function Ts(t){return 0===t&&1/t==-1/0}
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
function Is(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Ss(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function Cs(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}
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
     */bs._e=-1;class As{constructor(t,e){this.comparator=t,this.root=e||Ns.EMPTY}insert(t,e){return new As(this.comparator,this.root.insert(t,e,this.comparator).copy(null,null,Ns.BLACK,null,null))}remove(t){return new As(this.comparator,this.root.remove(t,this.comparator).copy(null,null,Ns.BLACK,null,null))}get(t){let e=this.root;for(;!e.isEmpty();){const n=this.comparator(t,e.key);if(0===n)return e.value;n<0?e=e.left:n>0&&(e=e.right)}return null}indexOf(t){let e=0,n=this.root;for(;!n.isEmpty();){const i=this.comparator(t,n.key);if(0===i)return e+n.left.size;i<0?n=n.left:(e+=n.left.size+1,n=n.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal(((e,n)=>(t(e,n),!1)))}toString(){const t=[];return this.inorderTraversal(((e,n)=>(t.push(`${e}:${n}`),!1))),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new Ds(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new Ds(this.root,t,this.comparator,!1)}getReverseIterator(){return new Ds(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new Ds(this.root,t,this.comparator,!0)}}class Ds{constructor(t,e,n,i){this.isReverse=i,this.nodeStack=[];let r=1;for(;!t.isEmpty();)if(r=e?n(t.key,e):1,e&&i&&(r*=-1),r<0)t=this.isReverse?t.left:t.right;else{if(0===r){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const e={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return e}hasNext(){return this.nodeStack.length>0}peek(){if(0===this.nodeStack.length)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class Ns{constructor(t,e,n,i,r){this.key=t,this.value=e,this.color=null!=n?n:Ns.RED,this.left=null!=i?i:Ns.EMPTY,this.right=null!=r?r:Ns.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,e,n,i,r){return new Ns(null!=t?t:this.key,null!=e?e:this.value,null!=n?n:this.color,null!=i?i:this.left,null!=r?r:this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,e,n){let i=this;const r=n(t,i.key);return i=r<0?i.copy(null,null,null,i.left.insert(t,e,n),null):0===r?i.copy(null,e,null,null,null):i.copy(null,null,null,null,i.right.insert(t,e,n)),i.fixUp()}removeMin(){if(this.left.isEmpty())return Ns.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,e){let n,i=this;if(e(t,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(t,e),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),0===e(t,i.key)){if(i.right.isEmpty())return Ns.EMPTY;n=i.right.min(),i=i.copy(n.key,n.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(t,e))}return i.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,Ns.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,Ns.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),e=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,e)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw $r();if(this.right.isRed())throw $r();const t=this.left.check();if(t!==this.right.check())throw $r();return t+(this.isRed()?0:1)}}Ns.EMPTY=null,Ns.RED=!0,Ns.BLACK=!1,Ns.EMPTY=new class{constructor(){this.size=0}get key(){throw $r()}get value(){throw $r()}get color(){throw $r()}get left(){throw $r()}get right(){throw $r()}copy(t,e,n,i,r){return this}insert(t,e,n){return new Ns(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};
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
class ks{constructor(t){this.comparator=t,this.data=new As(this.comparator)}has(t){return null!==this.data.get(t)}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal(((e,n)=>(t(e),!1)))}forEachInRange(t,e){const n=this.data.getIteratorFrom(t[0]);for(;n.hasNext();){const i=n.getNext();if(this.comparator(i.key,t[1])>=0)return;e(i.key)}}forEachWhile(t,e){let n;for(n=void 0!==e?this.data.getIteratorFrom(e):this.data.getIterator();n.hasNext();)if(!t(n.getNext().key))return}firstAfterOrEqual(t){const e=this.data.getIteratorFrom(t);return e.hasNext()?e.getNext().key:null}getIterator(){return new Rs(this.data.getIterator())}getIteratorFrom(t){return new Rs(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let e=this;return e.size<t.size&&(e=t,t=this),t.forEach((t=>{e=e.add(t)})),e}isEqual(t){if(!(t instanceof ks))return!1;if(this.size!==t.size)return!1;const e=this.data.getIterator(),n=t.data.getIterator();for(;e.hasNext();){const t=e.getNext().key,i=n.getNext().key;if(0!==this.comparator(t,i))return!1}return!0}toArray(){const t=[];return this.forEach((e=>{t.push(e)})),t}toString(){const t=[];return this.forEach((e=>t.push(e))),"SortedSet("+t.toString()+")"}copy(t){const e=new ks(this.comparator);return e.data=t,e}}class Rs{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}
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
     */class Os{constructor(t){this.fields=t,t.sort(us.comparator)}static empty(){return new Os([])}unionWith(t){let e=new ks(us.comparator);for(const t of this.fields)e=e.add(t);for(const n of t)e=e.add(n);return new Os(e.toArray())}covers(t){for(const e of this.fields)if(e.isPrefixOf(t))return!0;return!1}isEqual(t){return ss(this.fields,t.fields,((t,e)=>t.isEqual(e)))}}
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
     */class xs extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}
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
     */class Ls{constructor(t){this.binaryString=t}static fromBase64String(t){const e=function(t){try{return atob(t)}catch(t){throw"undefined"!=typeof DOMException&&t instanceof DOMException?new xs("Invalid base64 string: "+t):t}}(t);return new Ls(e)}static fromUint8Array(t){const e=function(t){let e="";for(let n=0;n<t.length;++n)e+=String.fromCharCode(t[n]);return e}(t);return new Ls(e)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return t=this.binaryString,btoa(t);var t}toUint8Array(){return function(t){const e=new Uint8Array(t.length);for(let n=0;n<t.length;n++)e[n]=t.charCodeAt(n);return e}
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
     */(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return rs(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}Ls.EMPTY_BYTE_STRING=new Ls("");const Ms=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Ps(t){if(zr(!!t),"string"==typeof t){let e=0;const n=Ms.exec(t);if(zr(!!n),n[1]){let t=n[1];t=(t+"000000000").substr(0,9),e=Number(t)}const i=new Date(t);return{seconds:Math.floor(i.getTime()/1e3),nanos:e}}return{seconds:Fs(t.seconds),nanos:Fs(t.nanos)}}function Fs(t){return"number"==typeof t?t:"string"==typeof t?Number(t):0}function Vs(t){return"string"==typeof t?Ls.fromBase64String(t):Ls.fromUint8Array(t)}
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
     */function Us(t){var e,n;return"server_timestamp"===(null===(n=((null===(e=null==t?void 0:t.mapValue)||void 0===e?void 0:e.fields)||{}).__type__)||void 0===n?void 0:n.stringValue)}function Bs(t){const e=t.mapValue.fields.__previous_value__;return Us(e)?Bs(e):e}function js(t){const e=Ps(t.mapValue.fields.__local_write_time__.timestampValue);return new os(e.seconds,e.nanos)}
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
     */class $s{constructor(t,e,n,i,r,s,o,a,h){this.databaseId=t,this.appId=e,this.persistenceKey=n,this.host=i,this.ssl=r,this.forceLongPolling=s,this.autoDetectLongPolling=o,this.longPollingOptions=a,this.useFetchStreams=h}}class zs{constructor(t,e){this.projectId=t,this.database=e||"(default)"}static empty(){return new zs("","")}get isDefaultDatabase(){return"(default)"===this.database}isEqual(t){return t instanceof zs&&t.projectId===this.projectId&&t.database===this.database}}
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
     */const Hs={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function qs(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Us(t)?4:function(t){return"__max__"===(((t.mapValue||{}).fields||{}).__type__||{}).stringValue}
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
     */(t)?9007199254740991:10:$r()}function Gs(t,e){if(t===e)return!0;const n=qs(t);if(n!==qs(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return js(t).isEqual(js(e));case 3:return function(t,e){if("string"==typeof t.timestampValue&&"string"==typeof e.timestampValue&&t.timestampValue.length===e.timestampValue.length)return t.timestampValue===e.timestampValue;const n=Ps(t.timestampValue),i=Ps(e.timestampValue);return n.seconds===i.seconds&&n.nanos===i.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(t,e){return Vs(t.bytesValue).isEqual(Vs(e.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(t,e){return Fs(t.geoPointValue.latitude)===Fs(e.geoPointValue.latitude)&&Fs(t.geoPointValue.longitude)===Fs(e.geoPointValue.longitude)}(t,e);case 2:return function(t,e){if("integerValue"in t&&"integerValue"in e)return Fs(t.integerValue)===Fs(e.integerValue);if("doubleValue"in t&&"doubleValue"in e){const n=Fs(t.doubleValue),i=Fs(e.doubleValue);return n===i?Ts(n)===Ts(i):isNaN(n)&&isNaN(i)}return!1}(t,e);case 9:return ss(t.arrayValue.values||[],e.arrayValue.values||[],Gs);case 10:return function(t,e){const n=t.mapValue.fields||{},i=e.mapValue.fields||{};if(Is(n)!==Is(i))return!1;for(const t in n)if(n.hasOwnProperty(t)&&(void 0===i[t]||!Gs(n[t],i[t])))return!1;return!0}(t,e);default:return $r()}}function Ks(t,e){return void 0!==(t.values||[]).find((t=>Gs(t,e)))}function Qs(t,e){if(t===e)return 0;const n=qs(t),i=qs(e);if(n!==i)return rs(n,i);switch(n){case 0:case 9007199254740991:return 0;case 1:return rs(t.booleanValue,e.booleanValue);case 2:return function(t,e){const n=Fs(t.integerValue||t.doubleValue),i=Fs(e.integerValue||e.doubleValue);return n<i?-1:n>i?1:n===i?0:isNaN(n)?isNaN(i)?0:-1:1}(t,e);case 3:return Ws(t.timestampValue,e.timestampValue);case 4:return Ws(js(t),js(e));case 5:return rs(t.stringValue,e.stringValue);case 6:return function(t,e){const n=Vs(t),i=Vs(e);return n.compareTo(i)}(t.bytesValue,e.bytesValue);case 7:return function(t,e){const n=t.split("/"),i=e.split("/");for(let t=0;t<n.length&&t<i.length;t++){const e=rs(n[t],i[t]);if(0!==e)return e}return rs(n.length,i.length)}(t.referenceValue,e.referenceValue);case 8:return function(t,e){const n=rs(Fs(t.latitude),Fs(e.latitude));return 0!==n?n:rs(Fs(t.longitude),Fs(e.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(t,e){const n=t.values||[],i=e.values||[];for(let t=0;t<n.length&&t<i.length;++t){const e=Qs(n[t],i[t]);if(e)return e}return rs(n.length,i.length)}(t.arrayValue,e.arrayValue);case 10:return function(t,e){if(t===Hs.mapValue&&e===Hs.mapValue)return 0;if(t===Hs.mapValue)return 1;if(e===Hs.mapValue)return-1;const n=t.fields||{},i=Object.keys(n),r=e.fields||{},s=Object.keys(r);i.sort(),s.sort();for(let t=0;t<i.length&&t<s.length;++t){const e=rs(i[t],s[t]);if(0!==e)return e;const o=Qs(n[i[t]],r[s[t]]);if(0!==o)return o}return rs(i.length,s.length)}(t.mapValue,e.mapValue);default:throw $r()}}function Ws(t,e){if("string"==typeof t&&"string"==typeof e&&t.length===e.length)return rs(t,e);const n=Ps(t),i=Ps(e),r=rs(n.seconds,i.seconds);return 0!==r?r:rs(n.nanos,i.nanos)}function Xs(t){return Ys(t)}function Ys(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(t){const e=Ps(t);return`time(${e.seconds},${e.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(t){return Vs(t).toBase64()}(t.bytesValue):"referenceValue"in t?function(t){return fs.fromName(t).toString()}(t.referenceValue):"geoPointValue"in t?function(t){return`geo(${t.latitude},${t.longitude})`}(t.geoPointValue):"arrayValue"in t?function(t){let e="[",n=!0;for(const i of t.values||[])n?n=!1:e+=",",e+=Ys(i);return e+"]"}(t.arrayValue):"mapValue"in t?function(t){const e=Object.keys(t.fields||{}).sort();let n="{",i=!0;for(const r of e)i?i=!1:n+=",",n+=`${r}:${Ys(t.fields[r])}`;return n+"}"}(t.mapValue):$r()}function Js(t){return!!t&&"integerValue"in t}function Zs(t){return!!t&&"arrayValue"in t}function to(t){return!!t&&"mapValue"in t}function eo(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&"object"==typeof t.timestampValue)return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return Ss(t.mapValue.fields,((t,n)=>e.mapValue.fields[t]=eo(n))),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=eo(t.arrayValue.values[n]);return e}return Object.assign({},t)}class no{constructor(t){this.value=t}static empty(){return new no({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let e=this.value;for(let n=0;n<t.length-1;++n)if(e=(e.mapValue.fields||{})[t.get(n)],!to(e))return null;return e=(e.mapValue.fields||{})[t.lastSegment()],e||null}}set(t,e){this.getFieldsMap(t.popLast())[t.lastSegment()]=eo(e)}setAll(t){let e=us.emptyPath(),n={},i=[];t.forEach(((t,r)=>{if(!e.isImmediateParentOf(r)){const t=this.getFieldsMap(e);this.applyChanges(t,n,i),n={},i=[],e=r.popLast()}t?n[r.lastSegment()]=eo(t):i.push(r.lastSegment())}));const r=this.getFieldsMap(e);this.applyChanges(r,n,i)}delete(t){const e=this.field(t.popLast());to(e)&&e.mapValue.fields&&delete e.mapValue.fields[t.lastSegment()]}isEqual(t){return Gs(this.value,t.value)}getFieldsMap(t){let e=this.value;e.mapValue.fields||(e.mapValue={fields:{}});for(let n=0;n<t.length;++n){let i=e.mapValue.fields[t.get(n)];to(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},e.mapValue.fields[t.get(n)]=i),e=i}return e.mapValue.fields}applyChanges(t,e,n){Ss(e,((e,n)=>t[e]=n));for(const e of n)delete t[e]}clone(){return new no(eo(this.value))}}function io(t){const e=[];return Ss(t.fields,((t,n)=>{const i=new us([t]);if(to(n)){const t=io(n.mapValue).fields;if(0===t.length)e.push(i);else for(const n of t)e.push(i.child(n))}else e.push(i)})),new Os(e)
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
     */}class ro{constructor(t,e,n,i,r,s,o){this.key=t,this.documentType=e,this.version=n,this.readTime=i,this.createTime=r,this.data=s,this.documentState=o}static newInvalidDocument(t){return new ro(t,0,as.min(),as.min(),as.min(),no.empty(),0)}static newFoundDocument(t,e,n,i){return new ro(t,1,e,as.min(),n,i,0)}static newNoDocument(t,e){return new ro(t,2,e,as.min(),as.min(),no.empty(),0)}static newUnknownDocument(t,e){return new ro(t,3,e,as.min(),as.min(),no.empty(),2)}convertToFoundDocument(t,e){return!this.createTime.isEqual(as.min())||2!==this.documentType&&0!==this.documentType||(this.createTime=t),this.version=t,this.documentType=1,this.data=e,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=no.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=no.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=as.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return 1===this.documentState}get hasCommittedMutations(){return 2===this.documentState}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return 0!==this.documentType}isFoundDocument(){return 1===this.documentType}isNoDocument(){return 2===this.documentType}isUnknownDocument(){return 3===this.documentType}isEqual(t){return t instanceof ro&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new ro(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}
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
     */class so{constructor(t,e){this.position=t,this.inclusive=e}}function oo(t,e,n){let i=0;for(let r=0;r<t.position.length;r++){const s=e[r],o=t.position[r];if(i=s.field.isKeyField()?fs.comparator(fs.fromName(o.referenceValue),n.key):Qs(o,n.data.field(s.field)),"desc"===s.dir&&(i*=-1),0!==i)break}return i}function ao(t,e){if(null===t)return null===e;if(null===e)return!1;if(t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!Gs(t.position[n],e.position[n]))return!1;return!0}
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
     */class ho{constructor(t,e="asc"){this.field=t,this.dir=e}}function lo(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}
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
     */class co{}class uo extends co{constructor(t,e,n){super(),this.field=t,this.op=e,this.value=n}static create(t,e,n){return t.isKeyField()?"in"===e||"not-in"===e?this.createKeyFieldInFilter(t,e,n):new wo(t,e,n):"array-contains"===e?new To(t,n):"in"===e?new Io(t,n):"not-in"===e?new So(t,n):"array-contains-any"===e?new Co(t,n):new uo(t,e,n)}static createKeyFieldInFilter(t,e,n){return"in"===e?new Eo(t,n):new bo(t,n)}matches(t){const e=t.data.field(this.field);return"!="===this.op?null!==e&&this.matchesComparison(Qs(e,this.value)):null!==e&&qs(this.value)===qs(e)&&this.matchesComparison(Qs(e,this.value))}matchesComparison(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return 0===t;case"!=":return 0!==t;case">":return t>0;case">=":return t>=0;default:return $r()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class fo extends co{constructor(t,e){super(),this.filters=t,this.op=e,this.ue=null}static create(t,e){return new fo(t,e)}matches(t){return po(this)?void 0===this.filters.find((e=>!e.matches(t))):void 0!==this.filters.find((e=>e.matches(t)))}getFlattenedFilters(){return null!==this.ue||(this.ue=this.filters.reduce(((t,e)=>t.concat(e.getFlattenedFilters())),[])),this.ue}getFilters(){return Object.assign([],this.filters)}}function po(t){return"and"===t.op}function go(t){return function(t){for(const e of t.filters)if(e instanceof fo)return!1;return!0}(t)&&po(t)}function mo(t){if(t instanceof uo)return t.field.canonicalString()+t.op.toString()+Xs(t.value);if(go(t))return t.filters.map((t=>mo(t))).join(",");{const e=t.filters.map((t=>mo(t))).join(",");return`${t.op}(${e})`}}function yo(t,e){return t instanceof uo?function(t,e){return e instanceof uo&&t.op===e.op&&t.field.isEqual(e.field)&&Gs(t.value,e.value)}(t,e):t instanceof fo?function(t,e){return e instanceof fo&&t.op===e.op&&t.filters.length===e.filters.length&&t.filters.reduce(((t,n,i)=>t&&yo(n,e.filters[i])),!0)}(t,e):void $r()}function vo(t){return t instanceof uo?function(t){return`${t.field.canonicalString()} ${t.op} ${Xs(t.value)}`}(t):t instanceof fo?function(t){return t.op.toString()+" {"+t.getFilters().map(vo).join(" ,")+"}"}(t):"Filter"}class wo extends uo{constructor(t,e,n){super(t,e,n),this.key=fs.fromName(n.referenceValue)}matches(t){const e=fs.comparator(t.key,this.key);return this.matchesComparison(e)}}class Eo extends uo{constructor(t,e){super(t,"in",e),this.keys=_o("in",e)}matches(t){return this.keys.some((e=>e.isEqual(t.key)))}}class bo extends uo{constructor(t,e){super(t,"not-in",e),this.keys=_o("not-in",e)}matches(t){return!this.keys.some((e=>e.isEqual(t.key)))}}function _o(t,e){var n;return((null===(n=e.arrayValue)||void 0===n?void 0:n.values)||[]).map((t=>fs.fromName(t.referenceValue)))}class To extends uo{constructor(t,e){super(t,"array-contains",e)}matches(t){const e=t.data.field(this.field);return Zs(e)&&Ks(e.arrayValue,this.value)}}class Io extends uo{constructor(t,e){super(t,"in",e)}matches(t){const e=t.data.field(this.field);return null!==e&&Ks(this.value.arrayValue,e)}}class So extends uo{constructor(t,e){super(t,"not-in",e)}matches(t){if(Ks(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const e=t.data.field(this.field);return null!==e&&!Ks(this.value.arrayValue,e)}}class Co extends uo{constructor(t,e){super(t,"array-contains-any",e)}matches(t){const e=t.data.field(this.field);return!(!Zs(e)||!e.arrayValue.values)&&e.arrayValue.values.some((t=>Ks(this.value.arrayValue,t)))}}
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
     */class Ao{constructor(t,e=null,n=[],i=[],r=null,s=null,o=null){this.path=t,this.collectionGroup=e,this.orderBy=n,this.filters=i,this.limit=r,this.startAt=s,this.endAt=o,this.ce=null}}function Do(t,e=null,n=[],i=[],r=null,s=null,o=null){return new Ao(t,e,n,i,r,s,o)}function No(t){const e=Hr(t);if(null===e.ce){let t=e.path.canonicalString();null!==e.collectionGroup&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map((t=>mo(t))).join(","),t+="|ob:",t+=e.orderBy.map((t=>function(t){return t.field.canonicalString()+t.dir}(t))).join(","),_s(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map((t=>Xs(t))).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map((t=>Xs(t))).join(",")),e.ce=t}return e.ce}function ko(t,e){if(t.limit!==e.limit)return!1;if(t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!lo(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!yo(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!ao(t.startAt,e.startAt)&&ao(t.endAt,e.endAt)}
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
     */class Ro{constructor(t,e=null,n=[],i=[],r=null,s="F",o=null,a=null){this.path=t,this.collectionGroup=e,this.explicitOrderBy=n,this.filters=i,this.limit=r,this.limitType=s,this.startAt=o,this.endAt=a,this.le=null,this.he=null,this.Pe=null,this.startAt,this.endAt}}function Oo(t){return 0===t.filters.length&&null===t.limit&&null==t.startAt&&null==t.endAt&&(0===t.explicitOrderBy.length||1===t.explicitOrderBy.length&&t.explicitOrderBy[0].field.isKeyField())}function xo(t){const e=Hr(t);if(null===e.le){e.le=[];const t=new Set;for(const n of e.explicitOrderBy)e.le.push(n),t.add(n.field.canonicalString());const n=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc",i=function(t){let e=new ks(us.comparator);return t.filters.forEach((t=>{t.getFlattenedFilters().forEach((t=>{t.isInequality()&&(e=e.add(t.field))}))})),e}(e);i.forEach((i=>{t.has(i.canonicalString())||i.isKeyField()||e.le.push(new ho(i,n))})),t.has(us.keyField().canonicalString())||e.le.push(new ho(us.keyField(),n))}return e.le}function Lo(t){const e=Hr(t);return e.he||(e.he=function(t,e){if("F"===t.limitType)return Do(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map((t=>{const e="desc"===t.dir?"asc":"desc";return new ho(t.field,e)}));const n=t.endAt?new so(t.endAt.position,t.endAt.inclusive):null,i=t.startAt?new so(t.startAt.position,t.startAt.inclusive):null;return Do(t.path,t.collectionGroup,e,t.filters,t.limit,n,i)}}(e,xo(t))),e.he}function Mo(t,e,n){return new Ro(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Po(t,e){return ko(Lo(t),Lo(e))&&t.limitType===e.limitType}function Fo(t){return`${No(Lo(t))}|lt:${t.limitType}`}function Vo(t){return`Query(target=${function(t){let e=t.path.canonicalString();return null!==t.collectionGroup&&(e+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(e+=`, filters: [${t.filters.map((t=>vo(t))).join(", ")}]`),_s(t.limit)||(e+=", limit: "+t.limit),t.orderBy.length>0&&(e+=`, orderBy: [${t.orderBy.map((t=>function(t){return`${t.field.canonicalString()} (${t.dir})`}(t))).join(", ")}]`),t.startAt&&(e+=", startAt: ",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map((t=>Xs(t))).join(",")),t.endAt&&(e+=", endAt: ",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map((t=>Xs(t))).join(",")),`Target(${e})`}(Lo(t))}; limitType=${t.limitType})`}function Uo(t,e){return e.isFoundDocument()&&function(t,e){const n=e.key.path;return null!==t.collectionGroup?e.key.hasCollectionId(t.collectionGroup)&&t.path.isPrefixOf(n):fs.isDocumentKey(t.path)?t.path.isEqual(n):t.path.isImmediateParentOf(n)}(t,e)&&function(t,e){for(const n of xo(t))if(!n.field.isKeyField()&&null===e.data.field(n.field))return!1;return!0}(t,e)&&function(t,e){for(const n of t.filters)if(!n.matches(e))return!1;return!0}(t,e)&&function(t,e){return!(t.startAt&&!function(t,e,n){const i=oo(t,e,n);return t.inclusive?i<=0:i<0}(t.startAt,xo(t),e))&&!(t.endAt&&!function(t,e,n){const i=oo(t,e,n);return t.inclusive?i>=0:i>0}(t.endAt,xo(t),e))}(t,e)}function Bo(t,e,n){const i=t.field.isKeyField()?fs.comparator(e.key,n.key):function(t,e,n){const i=e.data.field(t),r=n.data.field(t);return null!==i&&null!==r?Qs(i,r):$r()}(t.field,e,n);switch(t.dir){case"asc":return i;case"desc":return-1*i;default:return $r()}}
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
     */class jo{constructor(t,e){this.mapKeyFn=t,this.equalsFn=e,this.inner={},this.innerSize=0}get(t){const e=this.mapKeyFn(t),n=this.inner[e];if(void 0!==n)for(const[e,i]of n)if(this.equalsFn(e,t))return i}has(t){return void 0!==this.get(t)}set(t,e){const n=this.mapKeyFn(t),i=this.inner[n];if(void 0===i)return this.inner[n]=[[t,e]],void this.innerSize++;for(let n=0;n<i.length;n++)if(this.equalsFn(i[n][0],t))return void(i[n]=[t,e]);i.push([t,e]),this.innerSize++}delete(t){const e=this.mapKeyFn(t),n=this.inner[e];if(void 0===n)return!1;for(let i=0;i<n.length;i++)if(this.equalsFn(n[i][0],t))return 1===n.length?delete this.inner[e]:n.splice(i,1),this.innerSize--,!0;return!1}forEach(t){Ss(this.inner,((e,n)=>{for(const[e,i]of n)t(e,i)}))}isEmpty(){return Cs(this.inner)}size(){return this.innerSize}}
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
     */const $o=new As(fs.comparator);function zo(){return $o}const Ho=new As(fs.comparator);function qo(...t){let e=Ho;for(const n of t)e=e.insert(n.key,n);return e}function Go(t){let e=Ho;return t.forEach(((t,n)=>e=e.insert(t,n.overlayedDocument))),e}function Ko(){return Wo()}function Qo(){return Wo()}function Wo(){return new jo((t=>t.toString()),((t,e)=>t.isEqual(e)))}const Xo=new As(fs.comparator),Yo=new ks(fs.comparator);function Jo(...t){let e=Yo;for(const n of t)e=e.add(n);return e}const Zo=new ks(rs);
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
function ta(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Ts(e)?"-0":e}}function ea(t){return{integerValue:""+t}}function na(t,e){return function(t){return"number"==typeof t&&Number.isInteger(t)&&!Ts(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}(e)?ea(e):ta(t,e)}
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
     */class ia{constructor(){this._=void 0}}function ra(t,e,n){return t instanceof aa?function(t,e){const n={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:t.seconds,nanos:t.nanoseconds}}}};return e&&Us(e)&&(e=Bs(e)),e&&(n.fields.__previous_value__=e),{mapValue:n}}(n,e):t instanceof ha?la(t,e):t instanceof ca?ua(t,e):function(t,e){const n=oa(t,e),i=da(n)+da(t.Ie);return Js(n)&&Js(t.Ie)?ea(i):ta(t.serializer,i)}(t,e)}function sa(t,e,n){return t instanceof ha?la(t,e):t instanceof ca?ua(t,e):n}function oa(t,e){return t instanceof fa?function(t){return Js(t)||function(t){return!!t&&"doubleValue"in t}(t)}(e)?e:{integerValue:0}:null}class aa extends ia{}class ha extends ia{constructor(t){super(),this.elements=t}}function la(t,e){const n=pa(e);for(const e of t.elements)n.some((t=>Gs(t,e)))||n.push(e);return{arrayValue:{values:n}}}class ca extends ia{constructor(t){super(),this.elements=t}}function ua(t,e){let n=pa(e);for(const e of t.elements)n=n.filter((t=>!Gs(t,e)));return{arrayValue:{values:n}}}class fa extends ia{constructor(t,e){super(),this.serializer=t,this.Ie=e}}function da(t){return Fs(t.integerValue||t.doubleValue)}function pa(t){return Zs(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}
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
     */class ga{constructor(t,e){this.field=t,this.transform=e}}class ma{constructor(t,e){this.version=t,this.transformResults=e}}class ya{constructor(t,e){this.updateTime=t,this.exists=e}static none(){return new ya}static exists(t){return new ya(void 0,t)}static updateTime(t){return new ya(t)}get isNone(){return void 0===this.updateTime&&void 0===this.exists}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function va(t,e){return void 0!==t.updateTime?e.isFoundDocument()&&e.version.isEqual(t.updateTime):void 0===t.exists||t.exists===e.isFoundDocument()}class wa{}function Ea(t,e){if(!t.hasLocalMutations||e&&0===e.fields.length)return null;if(null===e)return t.isNoDocument()?new ka(t.key,ya.none()):new Sa(t.key,t.data,ya.none());{const n=t.data,i=no.empty();let r=new ks(us.comparator);for(let t of e.fields)if(!r.has(t)){let e=n.field(t);null===e&&t.length>1&&(t=t.popLast(),e=n.field(t)),null===e?i.delete(t):i.set(t,e),r=r.add(t)}return new Ca(t.key,i,new Os(r.toArray()),ya.none())}}function ba(t,e,n){t instanceof Sa?function(t,e,n){const i=t.value.clone(),r=Da(t.fieldTransforms,e,n.transformResults);i.setAll(r),e.convertToFoundDocument(n.version,i).setHasCommittedMutations()}(t,e,n):t instanceof Ca?function(t,e,n){if(!va(t.precondition,e))return void e.convertToUnknownDocument(n.version);const i=Da(t.fieldTransforms,e,n.transformResults),r=e.data;r.setAll(Aa(t)),r.setAll(i),e.convertToFoundDocument(n.version,r).setHasCommittedMutations()}(t,e,n):function(t,e,n){e.convertToNoDocument(n.version).setHasCommittedMutations()}(0,e,n)}function _a(t,e,n,i){return t instanceof Sa?function(t,e,n,i){if(!va(t.precondition,e))return n;const r=t.value.clone(),s=Na(t.fieldTransforms,i,e);return r.setAll(s),e.convertToFoundDocument(e.version,r).setHasLocalMutations(),null}(t,e,n,i):t instanceof Ca?function(t,e,n,i){if(!va(t.precondition,e))return n;const r=Na(t.fieldTransforms,i,e),s=e.data;return s.setAll(Aa(t)),s.setAll(r),e.convertToFoundDocument(e.version,s).setHasLocalMutations(),null===n?null:n.unionWith(t.fieldMask.fields).unionWith(t.fieldTransforms.map((t=>t.field)))}(t,e,n,i):function(t,e,n){return va(t.precondition,e)?(e.convertToNoDocument(e.version).setHasLocalMutations(),null):n}(t,e,n)}function Ta(t,e){let n=null;for(const i of t.fieldTransforms){const t=e.data.field(i.field),r=oa(i.transform,t||null);null!=r&&(null===n&&(n=no.empty()),n.set(i.field,r))}return n||null}function Ia(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(t,e){return void 0===t&&void 0===e||!(!t||!e)&&ss(t,e,((t,e)=>function(t,e){return t.field.isEqual(e.field)&&function(t,e){return t instanceof ha&&e instanceof ha||t instanceof ca&&e instanceof ca?ss(t.elements,e.elements,Gs):t instanceof fa&&e instanceof fa?Gs(t.Ie,e.Ie):t instanceof aa&&e instanceof aa}(t.transform,e.transform)}(t,e)))}(t.fieldTransforms,e.fieldTransforms)&&(0===t.type?t.value.isEqual(e.value):1!==t.type||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Sa extends wa{constructor(t,e,n,i=[]){super(),this.key=t,this.value=e,this.precondition=n,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class Ca extends wa{constructor(t,e,n,i,r=[]){super(),this.key=t,this.data=e,this.fieldMask=n,this.precondition=i,this.fieldTransforms=r,this.type=1}getFieldMask(){return this.fieldMask}}function Aa(t){const e=new Map;return t.fieldMask.fields.forEach((n=>{if(!n.isEmpty()){const i=t.data.field(n);e.set(n,i)}})),e}function Da(t,e,n){const i=new Map;zr(t.length===n.length);for(let r=0;r<n.length;r++){const s=t[r],o=s.transform,a=e.data.field(s.field);i.set(s.field,sa(o,a,n[r]))}return i}function Na(t,e,n){const i=new Map;for(const r of t){const t=r.transform,s=n.data.field(r.field);i.set(r.field,ra(t,s,e))}return i}class ka extends wa{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class Ra extends wa{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}
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
     */class Oa{constructor(t,e,n,i){this.batchId=t,this.localWriteTime=e,this.baseMutations=n,this.mutations=i}applyToRemoteDocument(t,e){const n=e.mutationResults;for(let e=0;e<this.mutations.length;e++){const i=this.mutations[e];i.key.isEqual(t.key)&&ba(i,t,n[e])}}applyToLocalView(t,e){for(const n of this.baseMutations)n.key.isEqual(t.key)&&(e=_a(n,t,e,this.localWriteTime));for(const n of this.mutations)n.key.isEqual(t.key)&&(e=_a(n,t,e,this.localWriteTime));return e}applyToLocalDocumentSet(t,e){const n=Qo();return this.mutations.forEach((i=>{const r=t.get(i.key),s=r.overlayedDocument;let o=this.applyToLocalView(s,r.mutatedFields);o=e.has(i.key)?null:o;const a=Ea(s,o);null!==a&&n.set(i.key,a),s.isValidDocument()||s.convertToNoDocument(as.min())})),n}keys(){return this.mutations.reduce(((t,e)=>t.add(e.key)),Jo())}isEqual(t){return this.batchId===t.batchId&&ss(this.mutations,t.mutations,((t,e)=>Ia(t,e)))&&ss(this.baseMutations,t.baseMutations,((t,e)=>Ia(t,e)))}}class xa{constructor(t,e,n,i){this.batch=t,this.commitVersion=e,this.mutationResults=n,this.docVersions=i}static from(t,e,n){zr(t.mutations.length===n.length);let i=Xo;const r=t.mutations;for(let t=0;t<r.length;t++)i=i.insert(r[t].key,n[t].version);return new xa(t,e,n,i)}}
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
     */class La{constructor(t,e){this.largestBatchId=t,this.mutation=e}getKey(){return this.mutation.key}isEqual(t){return null!==t&&this.mutation===t.mutation}toString(){return`Overlay{\n      largestBatchId: ${this.largestBatchId},\n      mutation: ${this.mutation.toString()}\n    }`}}
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
     */var Ma,Pa;(Pa=Ma||(Ma={}))[Pa.OK=0]="OK",Pa[Pa.CANCELLED=1]="CANCELLED",Pa[Pa.UNKNOWN=2]="UNKNOWN",Pa[Pa.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Pa[Pa.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Pa[Pa.NOT_FOUND=5]="NOT_FOUND",Pa[Pa.ALREADY_EXISTS=6]="ALREADY_EXISTS",Pa[Pa.PERMISSION_DENIED=7]="PERMISSION_DENIED",Pa[Pa.UNAUTHENTICATED=16]="UNAUTHENTICATED",Pa[Pa.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Pa[Pa.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Pa[Pa.ABORTED=10]="ABORTED",Pa[Pa.OUT_OF_RANGE=11]="OUT_OF_RANGE",Pa[Pa.UNIMPLEMENTED=12]="UNIMPLEMENTED",Pa[Pa.INTERNAL=13]="INTERNAL",Pa[Pa.UNAVAILABLE=14]="UNAVAILABLE",Pa[Pa.DATA_LOSS=15]="DATA_LOSS",
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
new Or([4294967295,4294967295],0);class Fa{constructor(t,e){this.databaseId=t,this.useProto3Json=e}}function Va(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Ua(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function Ba(t,e){return Va(t,e.toTimestamp())}function ja(t){return zr(!!t),as.fromTimestamp(function(t){const e=Ps(t);return new os(e.seconds,e.nanos)}(t))}function $a(t,e){return function(t){return new ls(["projects",t.projectId,"databases",t.database])}(t).child("documents").child(e).canonicalString()}function za(t,e){return $a(t.databaseId,e.path)}function Ha(t){const e=function(t){const e=ls.fromString(t);return zr(function(t){return t.length>=4&&"projects"===t.get(0)&&"databases"===t.get(2)}
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
     */(e)),e}(t);return 4===e.length?ls.emptyPath():function(t){return zr(t.length>4&&"documents"===t.get(4)),t.popFirst(5)}(e)}function qa(t,e,n){return{name:za(t,e),fields:n.value.mapValue.fields}}function Ga(t){let e=Ha(t.parent);const n=t.structuredQuery,i=n.from?n.from.length:0;let r=null;if(i>0){zr(1===i);const t=n.from[0];t.allDescendants?r=t.collectionId:e=e.child(t.collectionId)}let s=[];n.where&&(s=function(t){const e=Ka(t);return e instanceof fo&&go(e)?e.getFilters():[e]}(n.where));let o=[];n.orderBy&&(o=function(t){return t.map((t=>function(t){return new ho(Qa(t.field),function(t){switch(t){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(t.direction))}(t)))}(n.orderBy));let a=null;n.limit&&(a=function(t){let e;return e="object"==typeof t?t.value:t,_s(e)?null:e}(n.limit));let h=null;n.startAt&&(h=function(t){const e=!!t.before,n=t.values||[];return new so(n,e)}(n.startAt));let l=null;return n.endAt&&(l=function(t){const e=!t.before,n=t.values||[];return new so(n,e)}(n.endAt)),function(t,e,n,i,r,s,o,a){return new Ro(t,e,n,i,r,s,o,a)}(e,r,o,s,a,"F",h,l)}function Ka(t){return void 0!==t.unaryFilter?function(t){switch(t.unaryFilter.op){case"IS_NAN":const e=Qa(t.unaryFilter.field);return uo.create(e,"==",{doubleValue:NaN});case"IS_NULL":const n=Qa(t.unaryFilter.field);return uo.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=Qa(t.unaryFilter.field);return uo.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const r=Qa(t.unaryFilter.field);return uo.create(r,"!=",{nullValue:"NULL_VALUE"});default:return $r()}}(t):void 0!==t.fieldFilter?function(t){return uo.create(Qa(t.fieldFilter.field),function(t){switch(t){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return $r()}}(t.fieldFilter.op),t.fieldFilter.value)}(t):void 0!==t.compositeFilter?function(t){return fo.create(t.compositeFilter.filters.map((t=>Ka(t))),function(t){switch(t){case"AND":return"and";case"OR":return"or";default:return $r()}}(t.compositeFilter.op))}(t):$r()}function Qa(t){return us.fromServerFormat(t.fieldPath)}function Wa(t){const e=[];return t.fields.forEach((t=>e.push(t.canonicalString()))),{fieldPaths:e}}class Xa{constructor(t){this.ut=t}}function Ya(t){const e=Ga({parent:t.parent,structuredQuery:t.structuredQuery});return"LAST"===t.limitType?Mo(e,e.limit,"L"):e}
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
     */class Ja{constructor(){this.on=new Za}addToCollectionParentIndex(t,e){return this.on.add(e),ws.resolve()}getCollectionParents(t,e){return ws.resolve(this.on.getEntries(e))}addFieldIndex(t,e){return ws.resolve()}deleteFieldIndex(t,e){return ws.resolve()}deleteAllFieldIndexes(t){return ws.resolve()}createTargetIndexes(t,e){return ws.resolve()}getDocumentsMatchingTarget(t,e){return ws.resolve(null)}getIndexType(t,e){return ws.resolve(0)}getFieldIndexes(t,e){return ws.resolve([])}getNextCollectionGroupToUpdate(t){return ws.resolve(null)}getMinOffset(t,e){return ws.resolve(ps.min())}getMinOffsetFromCollectionGroup(t,e){return ws.resolve(ps.min())}updateCollectionGroup(t,e,n){return ws.resolve()}updateIndexEntries(t,e){return ws.resolve()}}class Za{constructor(){this.index={}}add(t){const e=t.lastSegment(),n=t.popLast(),i=this.index[e]||new ks(ls.comparator),r=!i.has(n);return this.index[e]=i.add(n),r}has(t){const e=t.lastSegment(),n=t.popLast(),i=this.index[e];return i&&i.has(n)}getEntries(t){return(this.index[t]||new ks(ls.comparator)).toArray()}}
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
     */class th{constructor(t){this.xn=t}next(){return this.xn+=2,this.xn}static On(){return new th(0)}static Nn(){return new th(-1)}}
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
     */class eh{constructor(){this.changes=new jo((t=>t.toString()),((t,e)=>t.isEqual(e))),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,e){this.assertNotApplied(),this.changes.set(t,ro.newInvalidDocument(t).setReadTime(e))}getEntry(t,e){this.assertNotApplied();const n=this.changes.get(e);return void 0!==n?ws.resolve(n):this.getFromCache(t,e)}getEntries(t,e){return this.getAllFromCache(t,e)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}
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
     */class nh{constructor(t,e){this.overlayedDocument=t,this.mutatedFields=e}}
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
     */class ih{constructor(t,e,n,i){this.remoteDocumentCache=t,this.mutationQueue=e,this.documentOverlayCache=n,this.indexManager=i}getDocument(t,e){let n=null;return this.documentOverlayCache.getOverlay(t,e).next((i=>(n=i,this.remoteDocumentCache.getEntry(t,e)))).next((t=>(null!==n&&_a(n.mutation,t,Os.empty(),os.now()),t)))}getDocuments(t,e){return this.remoteDocumentCache.getEntries(t,e).next((e=>this.getLocalViewOfDocuments(t,e,Jo()).next((()=>e))))}getLocalViewOfDocuments(t,e,n=Jo()){const i=Ko();return this.populateOverlays(t,i,e).next((()=>this.computeViews(t,e,i,n).next((t=>{let e=qo();return t.forEach(((t,n)=>{e=e.insert(t,n.overlayedDocument)})),e}))))}getOverlayedDocuments(t,e){const n=Ko();return this.populateOverlays(t,n,e).next((()=>this.computeViews(t,e,n,Jo())))}populateOverlays(t,e,n){const i=[];return n.forEach((t=>{e.has(t)||i.push(t)})),this.documentOverlayCache.getOverlays(t,i).next((t=>{t.forEach(((t,n)=>{e.set(t,n)}))}))}computeViews(t,e,n,i){let r=zo();const s=Wo(),o=Wo();return e.forEach(((t,e)=>{const o=n.get(e.key);i.has(e.key)&&(void 0===o||o.mutation instanceof Ca)?r=r.insert(e.key,e):void 0!==o?(s.set(e.key,o.mutation.getFieldMask()),_a(o.mutation,e,o.mutation.getFieldMask(),os.now())):s.set(e.key,Os.empty())})),this.recalculateAndSaveOverlays(t,r).next((t=>(t.forEach(((t,e)=>s.set(t,e))),e.forEach(((t,e)=>{var n;return o.set(t,new nh(e,null!==(n=s.get(t))&&void 0!==n?n:null))})),o)))}recalculateAndSaveOverlays(t,e){const n=Wo();let i=new As(((t,e)=>t-e)),r=Jo();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,e).next((t=>{for(const r of t)r.keys().forEach((t=>{const s=e.get(t);if(null===s)return;let o=n.get(t)||Os.empty();o=r.applyToLocalView(s,o),n.set(t,o);const a=(i.get(r.batchId)||Jo()).add(t);i=i.insert(r.batchId,a)}))})).next((()=>{const s=[],o=i.getReverseIterator();for(;o.hasNext();){const i=o.getNext(),a=i.key,h=i.value,l=Qo();h.forEach((t=>{if(!r.has(t)){const i=Ea(e.get(t),n.get(t));null!==i&&l.set(t,i),r=r.add(t)}})),s.push(this.documentOverlayCache.saveOverlays(t,a,l))}return ws.waitFor(s)})).next((()=>n))}recalculateAndSaveOverlaysForDocumentKeys(t,e){return this.remoteDocumentCache.getEntries(t,e).next((e=>this.recalculateAndSaveOverlays(t,e)))}getDocumentsMatchingQuery(t,e,n,i){return function(t){return fs.isDocumentKey(t.path)&&null===t.collectionGroup&&0===t.filters.length}(e)?this.getDocumentsMatchingDocumentQuery(t,e.path):function(t){return null!==t.collectionGroup}(e)?this.getDocumentsMatchingCollectionGroupQuery(t,e,n,i):this.getDocumentsMatchingCollectionQuery(t,e,n,i)}getNextDocuments(t,e,n,i){return this.remoteDocumentCache.getAllFromCollectionGroup(t,e,n,i).next((r=>{const s=i-r.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,e,n.largestBatchId,i-r.size):ws.resolve(Ko());let o=-1,a=r;return s.next((e=>ws.forEach(e,((e,n)=>(o<n.largestBatchId&&(o=n.largestBatchId),r.get(e)?ws.resolve():this.remoteDocumentCache.getEntry(t,e).next((t=>{a=a.insert(e,t)}))))).next((()=>this.populateOverlays(t,e,r))).next((()=>this.computeViews(t,a,e,Jo()))).next((t=>({batchId:o,changes:Go(t)})))))}))}getDocumentsMatchingDocumentQuery(t,e){return this.getDocument(t,new fs(e)).next((t=>{let e=qo();return t.isFoundDocument()&&(e=e.insert(t.key,t)),e}))}getDocumentsMatchingCollectionGroupQuery(t,e,n,i){const r=e.collectionGroup;let s=qo();return this.indexManager.getCollectionParents(t,r).next((o=>ws.forEach(o,(o=>{const a=function(t,e){return new Ro(e,null,t.explicitOrderBy.slice(),t.filters.slice(),t.limit,t.limitType,t.startAt,t.endAt)}(e,o.child(r));return this.getDocumentsMatchingCollectionQuery(t,a,n,i).next((t=>{t.forEach(((t,e)=>{s=s.insert(t,e)}))}))})).next((()=>s))))}getDocumentsMatchingCollectionQuery(t,e,n,i){let r;return this.documentOverlayCache.getOverlaysForCollection(t,e.path,n.largestBatchId).next((s=>(r=s,this.remoteDocumentCache.getDocumentsMatchingQuery(t,e,n,r,i)))).next((t=>{r.forEach(((e,n)=>{const i=n.getKey();null===t.get(i)&&(t=t.insert(i,ro.newInvalidDocument(i)))}));let n=qo();return t.forEach(((t,i)=>{const s=r.get(t);void 0!==s&&_a(s.mutation,i,Os.empty(),os.now()),Uo(e,i)&&(n=n.insert(t,i))})),n}))}}
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
     */class rh{constructor(t){this.serializer=t,this.ur=new Map,this.cr=new Map}getBundleMetadata(t,e){return ws.resolve(this.ur.get(e))}saveBundleMetadata(t,e){return this.ur.set(e.id,function(t){return{id:t.id,version:t.version,createTime:ja(t.createTime)}}(e)),ws.resolve()}getNamedQuery(t,e){return ws.resolve(this.cr.get(e))}saveNamedQuery(t,e){return this.cr.set(e.name,function(t){return{name:t.name,query:Ya(t.bundledQuery),readTime:ja(t.readTime)}}(e)),ws.resolve()}}
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
     */class sh{constructor(){this.overlays=new As(fs.comparator),this.lr=new Map}getOverlay(t,e){return ws.resolve(this.overlays.get(e))}getOverlays(t,e){const n=Ko();return ws.forEach(e,(e=>this.getOverlay(t,e).next((t=>{null!==t&&n.set(e,t)})))).next((()=>n))}saveOverlays(t,e,n){return n.forEach(((n,i)=>{this.lt(t,e,i)})),ws.resolve()}removeOverlaysForBatchId(t,e,n){const i=this.lr.get(n);return void 0!==i&&(i.forEach((t=>this.overlays=this.overlays.remove(t))),this.lr.delete(n)),ws.resolve()}getOverlaysForCollection(t,e,n){const i=Ko(),r=e.length+1,s=new fs(e.child("")),o=this.overlays.getIteratorFrom(s);for(;o.hasNext();){const t=o.getNext().value,s=t.getKey();if(!e.isPrefixOf(s.path))break;s.path.length===r&&t.largestBatchId>n&&i.set(t.getKey(),t)}return ws.resolve(i)}getOverlaysForCollectionGroup(t,e,n,i){let r=new As(((t,e)=>t-e));const s=this.overlays.getIterator();for(;s.hasNext();){const t=s.getNext().value;if(t.getKey().getCollectionGroup()===e&&t.largestBatchId>n){let e=r.get(t.largestBatchId);null===e&&(e=Ko(),r=r.insert(t.largestBatchId,e)),e.set(t.getKey(),t)}}const o=Ko(),a=r.getIterator();for(;a.hasNext()&&(a.getNext().value.forEach(((t,e)=>o.set(t,e))),!(o.size()>=i)););return ws.resolve(o)}lt(t,e,n){const i=this.overlays.get(n.key);if(null!==i){const t=this.lr.get(i.largestBatchId).delete(n.key);this.lr.set(i.largestBatchId,t)}this.overlays=this.overlays.insert(n.key,new La(e,n));let r=this.lr.get(e);void 0===r&&(r=Jo(),this.lr.set(e,r)),this.lr.set(e,r.add(n.key))}}
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
     */class oh{constructor(){this.hr=new ks(ah.Pr),this.Ir=new ks(ah.Tr)}isEmpty(){return this.hr.isEmpty()}addReference(t,e){const n=new ah(t,e);this.hr=this.hr.add(n),this.Ir=this.Ir.add(n)}Er(t,e){t.forEach((t=>this.addReference(t,e)))}removeReference(t,e){this.dr(new ah(t,e))}Ar(t,e){t.forEach((t=>this.removeReference(t,e)))}Rr(t){const e=new fs(new ls([])),n=new ah(e,t),i=new ah(e,t+1),r=[];return this.Ir.forEachInRange([n,i],(t=>{this.dr(t),r.push(t.key)})),r}Vr(){this.hr.forEach((t=>this.dr(t)))}dr(t){this.hr=this.hr.delete(t),this.Ir=this.Ir.delete(t)}mr(t){const e=new fs(new ls([])),n=new ah(e,t),i=new ah(e,t+1);let r=Jo();return this.Ir.forEachInRange([n,i],(t=>{r=r.add(t.key)})),r}containsKey(t){const e=new ah(t,0),n=this.hr.firstAfterOrEqual(e);return null!==n&&t.isEqual(n.key)}}class ah{constructor(t,e){this.key=t,this.gr=e}static Pr(t,e){return fs.comparator(t.key,e.key)||rs(t.gr,e.gr)}static Tr(t,e){return rs(t.gr,e.gr)||fs.comparator(t.key,e.key)}}
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
     */class hh{constructor(t,e){this.indexManager=t,this.referenceDelegate=e,this.mutationQueue=[],this.pr=1,this.yr=new ks(ah.Pr)}checkEmpty(t){return ws.resolve(0===this.mutationQueue.length)}addMutationBatch(t,e,n,i){const r=this.pr;this.pr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const s=new Oa(r,e,n,i);this.mutationQueue.push(s);for(const e of i)this.yr=this.yr.add(new ah(e.key,r)),this.indexManager.addToCollectionParentIndex(t,e.key.path.popLast());return ws.resolve(s)}lookupMutationBatch(t,e){return ws.resolve(this.wr(e))}getNextMutationBatchAfterBatchId(t,e){const n=e+1,i=this.Sr(n),r=i<0?0:i;return ws.resolve(this.mutationQueue.length>r?this.mutationQueue[r]:null)}getHighestUnacknowledgedBatchId(){return ws.resolve(0===this.mutationQueue.length?-1:this.pr-1)}getAllMutationBatches(t){return ws.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,e){const n=new ah(e,0),i=new ah(e,Number.POSITIVE_INFINITY),r=[];return this.yr.forEachInRange([n,i],(t=>{const e=this.wr(t.gr);r.push(e)})),ws.resolve(r)}getAllMutationBatchesAffectingDocumentKeys(t,e){let n=new ks(rs);return e.forEach((t=>{const e=new ah(t,0),i=new ah(t,Number.POSITIVE_INFINITY);this.yr.forEachInRange([e,i],(t=>{n=n.add(t.gr)}))})),ws.resolve(this.br(n))}getAllMutationBatchesAffectingQuery(t,e){const n=e.path,i=n.length+1;let r=n;fs.isDocumentKey(r)||(r=r.child(""));const s=new ah(new fs(r),0);let o=new ks(rs);return this.yr.forEachWhile((t=>{const e=t.key.path;return!!n.isPrefixOf(e)&&(e.length===i&&(o=o.add(t.gr)),!0)}),s),ws.resolve(this.br(o))}br(t){const e=[];return t.forEach((t=>{const n=this.wr(t);null!==n&&e.push(n)})),e}removeMutationBatch(t,e){zr(0===this.Dr(e.batchId,"removed")),this.mutationQueue.shift();let n=this.yr;return ws.forEach(e.mutations,(i=>{const r=new ah(i.key,e.batchId);return n=n.delete(r),this.referenceDelegate.markPotentiallyOrphaned(t,i.key)})).next((()=>{this.yr=n}))}Fn(t){}containsKey(t,e){const n=new ah(e,0),i=this.yr.firstAfterOrEqual(n);return ws.resolve(e.isEqual(i&&i.key))}performConsistencyCheck(t){return this.mutationQueue.length,ws.resolve()}Dr(t,e){return this.Sr(t)}Sr(t){return 0===this.mutationQueue.length?0:t-this.mutationQueue[0].batchId}wr(t){const e=this.Sr(t);return e<0||e>=this.mutationQueue.length?null:this.mutationQueue[e]}}
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
     */class lh{constructor(t){this.Cr=t,this.docs=new As(fs.comparator),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,e){const n=e.key,i=this.docs.get(n),r=i?i.size:0,s=this.Cr(e);return this.docs=this.docs.insert(n,{document:e.mutableCopy(),size:s}),this.size+=s-r,this.indexManager.addToCollectionParentIndex(t,n.path.popLast())}removeEntry(t){const e=this.docs.get(t);e&&(this.docs=this.docs.remove(t),this.size-=e.size)}getEntry(t,e){const n=this.docs.get(e);return ws.resolve(n?n.document.mutableCopy():ro.newInvalidDocument(e))}getEntries(t,e){let n=zo();return e.forEach((t=>{const e=this.docs.get(t);n=n.insert(t,e?e.document.mutableCopy():ro.newInvalidDocument(t))})),ws.resolve(n)}getDocumentsMatchingQuery(t,e,n,i){let r=zo();const s=e.path,o=new fs(s.child("")),a=this.docs.getIteratorFrom(o);for(;a.hasNext();){const{key:t,value:{document:o}}=a.getNext();if(!s.isPrefixOf(t.path))break;t.path.length>s.length+1||gs(ds(o),n)<=0||(i.has(o.key)||Uo(e,o))&&(r=r.insert(o.key,o.mutableCopy()))}return ws.resolve(r)}getAllFromCollectionGroup(t,e,n,i){$r()}vr(t,e){return ws.forEach(this.docs,(t=>e(t)))}newChangeBuffer(t){return new ch(this)}getSize(t){return ws.resolve(this.size)}}class ch extends eh{constructor(t){super(),this._r=t}applyChanges(t){const e=[];return this.changes.forEach(((n,i)=>{i.isValidDocument()?e.push(this._r.addEntry(t,i)):this._r.removeEntry(n)})),ws.waitFor(e)}getFromCache(t,e){return this._r.getEntry(t,e)}getAllFromCache(t,e){return this._r.getEntries(t,e)}}
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
     */class uh{constructor(t){this.persistence=t,this.Fr=new jo((t=>No(t)),ko),this.lastRemoteSnapshotVersion=as.min(),this.highestTargetId=0,this.Mr=0,this.Or=new oh,this.targetCount=0,this.Nr=th.On()}forEachTarget(t,e){return this.Fr.forEach(((t,n)=>e(n))),ws.resolve()}getLastRemoteSnapshotVersion(t){return ws.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return ws.resolve(this.Mr)}allocateTargetId(t){return this.highestTargetId=this.Nr.next(),ws.resolve(this.highestTargetId)}setTargetsMetadata(t,e,n){return n&&(this.lastRemoteSnapshotVersion=n),e>this.Mr&&(this.Mr=e),ws.resolve()}kn(t){this.Fr.set(t.target,t);const e=t.targetId;e>this.highestTargetId&&(this.Nr=new th(e),this.highestTargetId=e),t.sequenceNumber>this.Mr&&(this.Mr=t.sequenceNumber)}addTargetData(t,e){return this.kn(e),this.targetCount+=1,ws.resolve()}updateTargetData(t,e){return this.kn(e),ws.resolve()}removeTargetData(t,e){return this.Fr.delete(e.target),this.Or.Rr(e.targetId),this.targetCount-=1,ws.resolve()}removeTargets(t,e,n){let i=0;const r=[];return this.Fr.forEach(((s,o)=>{o.sequenceNumber<=e&&null===n.get(o.targetId)&&(this.Fr.delete(s),r.push(this.removeMatchingKeysForTargetId(t,o.targetId)),i++)})),ws.waitFor(r).next((()=>i))}getTargetCount(t){return ws.resolve(this.targetCount)}getTargetData(t,e){const n=this.Fr.get(e)||null;return ws.resolve(n)}addMatchingKeys(t,e,n){return this.Or.Er(e,n),ws.resolve()}removeMatchingKeys(t,e,n){this.Or.Ar(e,n);const i=this.persistence.referenceDelegate,r=[];return i&&e.forEach((e=>{r.push(i.markPotentiallyOrphaned(t,e))})),ws.waitFor(r)}removeMatchingKeysForTargetId(t,e){return this.Or.Rr(e),ws.resolve()}getMatchingKeysForTargetId(t,e){const n=this.Or.mr(e);return ws.resolve(n)}containsKey(t,e){return ws.resolve(this.Or.containsKey(e))}}
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
     */class fh{constructor(t,e){this.Br={},this.overlays={},this.Lr=new bs(0),this.kr=!1,this.kr=!0,this.referenceDelegate=t(this),this.qr=new uh(this),this.indexManager=new Ja,this.remoteDocumentCache=function(t){return new lh(t)}((t=>this.referenceDelegate.Qr(t))),this.serializer=new Xa(e),this.Kr=new rh(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.kr=!1,Promise.resolve()}get started(){return this.kr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let e=this.overlays[t.toKey()];return e||(e=new sh,this.overlays[t.toKey()]=e),e}getMutationQueue(t,e){let n=this.Br[t.toKey()];return n||(n=new hh(e,this.referenceDelegate),this.Br[t.toKey()]=n),n}getTargetCache(){return this.qr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Kr}runTransaction(t,e,n){Vr("MemoryPersistence","Starting transaction:",t);const i=new dh(this.Lr.next());return this.referenceDelegate.$r(),n(i).next((t=>this.referenceDelegate.Ur(i).next((()=>t)))).toPromise().then((t=>(i.raiseOnCommittedEvent(),t)))}Wr(t,e){return ws.or(Object.values(this.Br).map((n=>()=>n.containsKey(t,e))))}}class dh extends ys{constructor(t){super(),this.currentSequenceNumber=t}}class ph{constructor(t){this.persistence=t,this.Gr=new oh,this.zr=null}static jr(t){return new ph(t)}get Hr(){if(this.zr)return this.zr;throw $r()}addReference(t,e,n){return this.Gr.addReference(n,e),this.Hr.delete(n.toString()),ws.resolve()}removeReference(t,e,n){return this.Gr.removeReference(n,e),this.Hr.add(n.toString()),ws.resolve()}markPotentiallyOrphaned(t,e){return this.Hr.add(e.toString()),ws.resolve()}removeTarget(t,e){this.Gr.Rr(e.targetId).forEach((t=>this.Hr.add(t.toString())));const n=this.persistence.getTargetCache();return n.getMatchingKeysForTargetId(t,e.targetId).next((t=>{t.forEach((t=>this.Hr.add(t.toString())))})).next((()=>n.removeTargetData(t,e)))}$r(){this.zr=new Set}Ur(t){const e=this.persistence.getRemoteDocumentCache().newChangeBuffer();return ws.forEach(this.Hr,(n=>{const i=fs.fromPath(n);return this.Jr(t,i).next((t=>{t||e.removeEntry(i,as.min())}))})).next((()=>(this.zr=null,e.apply(t))))}updateLimboDocument(t,e){return this.Jr(t,e).next((t=>{t?this.Hr.delete(e.toString()):this.Hr.add(e.toString())}))}Qr(t){return 0}Jr(t,e){return ws.or([()=>ws.resolve(this.Gr.containsKey(e)),()=>this.persistence.getTargetCache().containsKey(t,e),()=>this.persistence.Wr(t,e)])}}
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
     */class gh{constructor(t,e,n,i){this.targetId=t,this.fromCache=e,this.ki=n,this.qi=i}static Qi(t,e){let n=Jo(),i=Jo();for(const t of e.docChanges)switch(t.type){case 0:n=n.add(t.doc.key);break;case 1:i=i.add(t.doc.key)}return new gh(t,e.fromCache,n,i)}}
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
     */class mh{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(t){this._documentReadCount+=t}}
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
     */class yh{constructor(){this.Ki=!1,this.$i=!1,this.Ui=100,this.Wi=8}initialize(t,e){this.Gi=t,this.indexManager=e,this.Ki=!0}getDocumentsMatchingQuery(t,e,n,i){const r={result:null};return this.zi(t,e).next((t=>{r.result=t})).next((()=>{if(!r.result)return this.ji(t,e,i,n).next((t=>{r.result=t}))})).next((()=>{if(r.result)return;const n=new mh;return this.Hi(t,e,n).next((i=>{if(r.result=i,this.$i)return this.Ji(t,e,n,i.size)}))})).next((()=>r.result))}Ji(t,e,n,i){return n.documentReadCount<this.Ui?(Fr()<=E.DEBUG&&Vr("QueryEngine","SDK will not create cache indexes for query:",Vo(e),"since it only creates cache indexes for collection contains","more than or equal to",this.Ui,"documents"),ws.resolve()):(Fr()<=E.DEBUG&&Vr("QueryEngine","Query:",Vo(e),"scans",n.documentReadCount,"local documents and returns",i,"documents as results."),n.documentReadCount>this.Wi*i?(Fr()<=E.DEBUG&&Vr("QueryEngine","The SDK decides to create cache indexes for query:",Vo(e),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(t,Lo(e))):ws.resolve())}zi(t,e){if(Oo(e))return ws.resolve(null);let n=Lo(e);return this.indexManager.getIndexType(t,n).next((i=>0===i?null:(null!==e.limit&&1===i&&(e=Mo(e,null,"F"),n=Lo(e)),this.indexManager.getDocumentsMatchingTarget(t,n).next((i=>{const r=Jo(...i);return this.Gi.getDocuments(t,r).next((i=>this.indexManager.getMinOffset(t,n).next((n=>{const s=this.Yi(e,i);return this.Zi(e,s,r,n.readTime)?this.zi(t,Mo(e,null,"F")):this.Xi(t,s,e,n)}))))})))))}ji(t,e,n,i){return Oo(e)||i.isEqual(as.min())?ws.resolve(null):this.Gi.getDocuments(t,n).next((r=>{const s=this.Yi(e,r);return this.Zi(e,s,n,i)?ws.resolve(null):(Fr()<=E.DEBUG&&Vr("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),Vo(e)),this.Xi(t,s,e,function(t,e){const n=t.toTimestamp().seconds,i=t.toTimestamp().nanoseconds+1,r=as.fromTimestamp(1e9===i?new os(n+1,0):new os(n,i));return new ps(r,fs.empty(),e)}(i,-1)).next((t=>t)))}))}Yi(t,e){let n=new ks(function(t){return(e,n)=>{let i=!1;for(const r of xo(t)){const t=Bo(r,e,n);if(0!==t)return t;i=i||r.field.isKeyField()}return 0}}(t));return e.forEach(((e,i)=>{Uo(t,i)&&(n=n.add(i))})),n}Zi(t,e,n,i){if(null===t.limit)return!1;if(n.size!==e.size)return!0;const r="F"===t.limitType?e.last():e.first();return!!r&&(r.hasPendingWrites||r.version.compareTo(i)>0)}Hi(t,e,n){return Fr()<=E.DEBUG&&Vr("QueryEngine","Using full collection scan to execute query:",Vo(e)),this.Gi.getDocumentsMatchingQuery(t,e,ps.min(),n)}Xi(t,e,n,i){return this.Gi.getDocumentsMatchingQuery(t,n,i).next((t=>(e.forEach((e=>{t=t.insert(e.key,e)})),t)))}}
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
     */class vh{constructor(t,e,n,i){this.persistence=t,this.es=e,this.serializer=i,this.ts=new As(rs),this.ns=new jo((t=>No(t)),ko),this.rs=new Map,this.ss=t.getRemoteDocumentCache(),this.qr=t.getTargetCache(),this.Kr=t.getBundleCache(),this.os(n)}os(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new ih(this.ss,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.ss.setIndexManager(this.indexManager),this.es.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(e=>t.collect(e,this.ts)))}}async function wh(t,e){const n=Hr(t);return await n.persistence.runTransaction("Handle user change","readonly",(t=>{let i;return n.mutationQueue.getAllMutationBatches(t).next((r=>(i=r,n.os(e),n.mutationQueue.getAllMutationBatches(t)))).next((e=>{const r=[],s=[];let o=Jo();for(const t of i){r.push(t.batchId);for(const e of t.mutations)o=o.add(e.key)}for(const t of e){s.push(t.batchId);for(const e of t.mutations)o=o.add(e.key)}return n.localDocuments.getDocuments(t,o).next((t=>({_s:t,removedBatchIds:r,addedBatchIds:s})))}))}))}function Eh(t,e){const n=Hr(t);return n.persistence.runTransaction("Get next mutation batch","readonly",(t=>(void 0===e&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(t,e))))}class bh{constructor(){this.activeTargetIds=Zo}ds(t){this.activeTargetIds=this.activeTargetIds.add(t)}As(t){this.activeTargetIds=this.activeTargetIds.delete(t)}Es(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class _h{constructor(){this.eo=new bh,this.no={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,e,n){}addLocalQueryTarget(t){return this.eo.ds(t),this.no[t]||"not-current"}updateQueryState(t,e,n){this.no[t]=e}removeLocalQueryTarget(t){this.eo.As(t)}isLocalQueryTarget(t){return this.eo.activeTargetIds.has(t)}clearQueryState(t){delete this.no[t]}getAllActiveQueryTargets(){return this.eo.activeTargetIds}isActiveQueryTarget(t){return this.eo.activeTargetIds.has(t)}start(){return this.eo=new bh,Promise.resolve()}handleUserChange(t,e,n){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}
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
     */class Th{ro(t){}shutdown(){}}
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
     */class Ih{constructor(){this.io=()=>this.so(),this.oo=()=>this._o(),this.ao=[],this.uo()}ro(t){this.ao.push(t)}shutdown(){window.removeEventListener("online",this.io),window.removeEventListener("offline",this.oo)}uo(){window.addEventListener("online",this.io),window.addEventListener("offline",this.oo)}so(){Vr("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const t of this.ao)t(0)}_o(){Vr("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const t of this.ao)t(1)}static D(){return"undefined"!=typeof window&&void 0!==window.addEventListener&&void 0!==window.removeEventListener}}
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
     */let Sh=null;function Ch(){return null===Sh?Sh=268435456+Math.round(2147483648*Math.random()):Sh++,"0x"+Sh.toString(16)
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
     */}const Ah={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};
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
     */class Dh{constructor(t){this.co=t.co,this.lo=t.lo}ho(t){this.Po=t}Io(t){this.To=t}onMessage(t){this.Eo=t}close(){this.lo()}send(t){this.co(t)}Ao(){this.Po()}Ro(t){this.To(t)}Vo(t){this.Eo(t)}}
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
     */const Nh="WebChannelConnection";class kh extends class{constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const e=t.ssl?"https":"http",n=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.mo=e+"://"+t.host,this.fo=`projects/${n}/databases/${i}`,this.po="(default)"===this.databaseId.database?`project_id=${n}`:`project_id=${n}&database_id=${i}`}get yo(){return!1}wo(t,e,n,i,r){const s=Ch(),o=this.So(t,e);Vr("RestConnection",`Sending RPC '${t}' ${s}:`,o,n);const a={"google-cloud-resource-prefix":this.fo,"x-goog-request-params":this.po};return this.bo(a,i,r),this.Do(t,o,a,n).then((e=>(Vr("RestConnection",`Received RPC '${t}' ${s}: `,e),e)),(e=>{throw Br("RestConnection",`RPC '${t}' ${s} failed with error: `,e,"url: ",o,"request:",n),e}))}Co(t,e,n,i,r,s){return this.wo(t,e,n,i,r)}bo(t,e,n){t["X-Goog-Api-Client"]="gl-js/ fire/"+Mr,t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),e&&e.headers.forEach(((e,n)=>t[n]=e)),n&&n.headers.forEach(((e,n)=>t[n]=e))}So(t,e){const n=Ah[t];return`${this.mo}/v1/${e}:${n}`}}{constructor(t){super(t),this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams,this.longPollingOptions=t.longPollingOptions}Do(t,e,n,i){const r=Ch();return new Promise(((s,o)=>{const a=new Rr;a.setWithCredentials(!0),a.listenOnce(Cr.COMPLETE,(()=>{try{switch(a.getLastErrorCode()){case Sr.NO_ERROR:const e=a.getResponseJson();Vr(Nh,`XHR for RPC '${t}' ${r} received:`,JSON.stringify(e)),s(e);break;case Sr.TIMEOUT:Vr(Nh,`RPC '${t}' ${r} timed out`),o(new Gr(qr.DEADLINE_EXCEEDED,"Request time out"));break;case Sr.HTTP_ERROR:const n=a.getStatus();if(Vr(Nh,`RPC '${t}' ${r} failed with status:`,n,"response text:",a.getResponseText()),n>0){let t=a.getResponseJson();Array.isArray(t)&&(t=t[0]);const e=null==t?void 0:t.error;if(e&&e.status&&e.message){const t=function(t){const e=t.toLowerCase().replace(/_/g,"-");return Object.values(qr).indexOf(e)>=0?e:qr.UNKNOWN}(e.status);o(new Gr(t,e.message))}else o(new Gr(qr.UNKNOWN,"Server responded with status "+a.getStatus()))}else o(new Gr(qr.UNAVAILABLE,"Connection failed."));break;default:$r()}}finally{Vr(Nh,`RPC '${t}' ${r} completed.`)}}));const h=JSON.stringify(i);Vr(Nh,`RPC '${t}' ${r} sending request:`,i),a.send(e,"POST",h,n,15)}))}vo(t,e,n){const i=Ch(),r=[this.mo,"/","google.firestore.v1.Firestore","/",t,"/channel"],s=new er,o=Je(),a={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},h=this.longPollingOptions.timeoutSeconds;void 0!==h&&(a.longPollingTimeout=Math.round(1e3*h)),this.useFetchStreams&&(a.useFetchStreams=!0),this.bo(a.initMessageHeaders,e,n),a.encodeInitMessageHeaders=!0;const l=r.join("");Vr(Nh,`Creating RPC '${t}' stream ${i}: ${l}`,a);const c=s.createWebChannel(l,a);let u=!1,f=!1;const d=new Dh({co:e=>{f?Vr(Nh,`Not sending because RPC '${t}' stream ${i} is closed:`,e):(u||(Vr(Nh,`Opening RPC '${t}' stream ${i} transport.`),c.open(),u=!0),Vr(Nh,`RPC '${t}' stream ${i} sending:`,e),c.send(e))},lo:()=>c.close()}),p=(t,e,n)=>{t.listen(e,(t=>{try{n(t)}catch(t){setTimeout((()=>{throw t}),0)}}))};return p(c,kr.EventType.OPEN,(()=>{f||Vr(Nh,`RPC '${t}' stream ${i} transport opened.`)})),p(c,kr.EventType.CLOSE,(()=>{f||(f=!0,Vr(Nh,`RPC '${t}' stream ${i} transport closed`),d.Ro())})),p(c,kr.EventType.ERROR,(e=>{f||(f=!0,Br(Nh,`RPC '${t}' stream ${i} transport errored:`,e),d.Ro(new Gr(qr.UNAVAILABLE,"The operation could not be completed")))})),p(c,kr.EventType.MESSAGE,(e=>{var n;if(!f){const r=e.data[0];zr(!!r);const s=r,o=s.error||(null===(n=s[0])||void 0===n?void 0:n.error);if(o){Vr(Nh,`RPC '${t}' stream ${i} received error:`,o);const e=o.status;let n=function(t){const e=Ma[t];if(void 0!==e)return function(t){if(void 0===t)return Ur("GRPC error has no .code"),qr.UNKNOWN;switch(t){case Ma.OK:return qr.OK;case Ma.CANCELLED:return qr.CANCELLED;case Ma.UNKNOWN:return qr.UNKNOWN;case Ma.DEADLINE_EXCEEDED:return qr.DEADLINE_EXCEEDED;case Ma.RESOURCE_EXHAUSTED:return qr.RESOURCE_EXHAUSTED;case Ma.INTERNAL:return qr.INTERNAL;case Ma.UNAVAILABLE:return qr.UNAVAILABLE;case Ma.UNAUTHENTICATED:return qr.UNAUTHENTICATED;case Ma.INVALID_ARGUMENT:return qr.INVALID_ARGUMENT;case Ma.NOT_FOUND:return qr.NOT_FOUND;case Ma.ALREADY_EXISTS:return qr.ALREADY_EXISTS;case Ma.PERMISSION_DENIED:return qr.PERMISSION_DENIED;case Ma.FAILED_PRECONDITION:return qr.FAILED_PRECONDITION;case Ma.ABORTED:return qr.ABORTED;case Ma.OUT_OF_RANGE:return qr.OUT_OF_RANGE;case Ma.UNIMPLEMENTED:return qr.UNIMPLEMENTED;case Ma.DATA_LOSS:return qr.DATA_LOSS;default:return $r()}}(e)}(e),r=o.message;void 0===n&&(n=qr.INTERNAL,r="Unknown error status: "+e+" with message "+o.message),f=!0,d.Ro(new Gr(n,r)),c.close()}else Vr(Nh,`RPC '${t}' stream ${i} received:`,r),d.Vo(r)}})),p(o,Ar.STAT_EVENT,(e=>{e.stat===Dr?Vr(Nh,`RPC '${t}' stream ${i} detected buffering proxy`):e.stat===Nr&&Vr(Nh,`RPC '${t}' stream ${i} detected no buffering proxy`)})),setTimeout((()=>{d.Ao()}),0),d}}function Rh(){return"undefined"!=typeof document?document:null}
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
     */function Oh(t){return new Fa(t,!0)}
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
     */class xh{constructor(t,e,n=1e3,i=1.5,r=6e4){this.si=t,this.timerId=e,this.Fo=n,this.Mo=i,this.xo=r,this.Oo=0,this.No=null,this.Bo=Date.now(),this.reset()}reset(){this.Oo=0}Lo(){this.Oo=this.xo}ko(t){this.cancel();const e=Math.floor(this.Oo+this.qo()),n=Math.max(0,Date.now()-this.Bo),i=Math.max(0,e-n);i>0&&Vr("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Oo} ms, delay with jitter: ${e} ms, last attempt: ${n} ms ago)`),this.No=this.si.enqueueAfterDelay(this.timerId,i,(()=>(this.Bo=Date.now(),t()))),this.Oo*=this.Mo,this.Oo<this.Fo&&(this.Oo=this.Fo),this.Oo>this.xo&&(this.Oo=this.xo)}Qo(){null!==this.No&&(this.No.skipDelay(),this.No=null)}cancel(){null!==this.No&&(this.No.cancel(),this.No=null)}qo(){return(Math.random()-.5)*this.Oo}}
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
     */class Lh{constructor(t,e,n,i,r,s,o,a){this.si=t,this.Ko=n,this.$o=i,this.connection=r,this.authCredentialsProvider=s,this.appCheckCredentialsProvider=o,this.listener=a,this.state=0,this.Uo=0,this.Wo=null,this.Go=null,this.stream=null,this.zo=new xh(t,e)}jo(){return 1===this.state||5===this.state||this.Ho()}Ho(){return 2===this.state||3===this.state}start(){4!==this.state?this.auth():this.Jo()}async stop(){this.jo()&&await this.close(0)}Yo(){this.state=0,this.zo.reset()}Zo(){this.Ho()&&null===this.Wo&&(this.Wo=this.si.enqueueAfterDelay(this.Ko,6e4,(()=>this.Xo())))}e_(t){this.t_(),this.stream.send(t)}async Xo(){if(this.Ho())return this.close(0)}t_(){this.Wo&&(this.Wo.cancel(),this.Wo=null)}n_(){this.Go&&(this.Go.cancel(),this.Go=null)}async close(t,e){this.t_(),this.n_(),this.zo.cancel(),this.Uo++,4!==t?this.zo.reset():e&&e.code===qr.RESOURCE_EXHAUSTED?(Ur(e.toString()),Ur("Using maximum backoff delay to prevent overloading the backend."),this.zo.Lo()):e&&e.code===qr.UNAUTHENTICATED&&3!==this.state&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),null!==this.stream&&(this.r_(),this.stream.close(),this.stream=null),this.state=t,await this.listener.Io(e)}r_(){}auth(){this.state=1;const t=this.i_(this.Uo),e=this.Uo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([t,n])=>{this.Uo===e&&this.s_(t,n)}),(e=>{t((()=>{const t=new Gr(qr.UNKNOWN,"Fetching auth token failed: "+e.message);return this.o_(t)}))}))}s_(t,e){const n=this.i_(this.Uo);this.stream=this.__(t,e),this.stream.ho((()=>{n((()=>(this.state=2,this.Go=this.si.enqueueAfterDelay(this.$o,1e4,(()=>(this.Ho()&&(this.state=3),Promise.resolve()))),this.listener.ho())))})),this.stream.Io((t=>{n((()=>this.o_(t)))})),this.stream.onMessage((t=>{n((()=>this.onMessage(t)))}))}Jo(){this.state=5,this.zo.ko((async()=>{this.state=0,this.start()}))}o_(t){return Vr("PersistentStream",`close with error: ${t}`),this.stream=null,this.close(4,t)}i_(t){return e=>{this.si.enqueueAndForget((()=>this.Uo===t?e():(Vr("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class Mh extends Lh{constructor(t,e,n,i,r,s){super(t,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",e,n,i,s),this.serializer=r,this.l_=!1}get h_(){return this.l_}start(){this.l_=!1,this.lastStreamToken=void 0,super.start()}r_(){this.l_&&this.P_([])}__(t,e){return this.connection.vo("Write",t,e)}onMessage(t){if(zr(!!t.streamToken),this.lastStreamToken=t.streamToken,this.l_){this.zo.reset();const e=function(t,e){return t&&t.length>0?(zr(void 0!==e),t.map((t=>function(t,e){let n=t.updateTime?ja(t.updateTime):ja(e);return n.isEqual(as.min())&&(n=ja(e)),new ma(n,t.transformResults||[])}(t,e)))):[]}(t.writeResults,t.commitTime),n=ja(t.commitTime);return this.listener.I_(n,e)}return zr(!t.writeResults||0===t.writeResults.length),this.l_=!0,this.listener.T_()}E_(){const t={};t.database=function(t){return new ls(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}(this.serializer),this.e_(t)}P_(t){const e={streamToken:this.lastStreamToken,writes:t.map((t=>function(t,e){let n;if(e instanceof Sa)n={update:qa(t,e.key,e.value)};else if(e instanceof ka)n={delete:za(t,e.key)};else if(e instanceof Ca)n={update:qa(t,e.key,e.data),updateMask:Wa(e.fieldMask)};else{if(!(e instanceof Ra))return $r();n={verify:za(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map((t=>function(t,e){const n=e.transform;if(n instanceof aa)return{fieldPath:e.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(n instanceof ha)return{fieldPath:e.field.canonicalString(),appendMissingElements:{values:n.elements}};if(n instanceof ca)return{fieldPath:e.field.canonicalString(),removeAllFromArray:{values:n.elements}};if(n instanceof fa)return{fieldPath:e.field.canonicalString(),increment:n.Ie};throw $r()}(0,t)))),e.precondition.isNone||(n.currentDocument=function(t,e){return void 0!==e.updateTime?{updateTime:Ba(t,e.updateTime)}:void 0!==e.exists?{exists:e.exists}:$r()}(t,e.precondition)),n}(this.serializer,t)))};this.e_(e)}}
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
     */class Ph extends class{}{constructor(t,e,n,i){super(),this.authCredentials=t,this.appCheckCredentials=e,this.connection=n,this.serializer=i,this.d_=!1}A_(){if(this.d_)throw new Gr(qr.FAILED_PRECONDITION,"The client has already been terminated.")}wo(t,e,n){return this.A_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([i,r])=>this.connection.wo(t,e,n,i,r))).catch((t=>{throw"FirebaseError"===t.name?(t.code===qr.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),t):new Gr(qr.UNKNOWN,t.toString())}))}Co(t,e,n,i){return this.A_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([r,s])=>this.connection.Co(t,e,n,r,s,i))).catch((t=>{throw"FirebaseError"===t.name?(t.code===qr.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),t):new Gr(qr.UNKNOWN,t.toString())}))}terminate(){this.d_=!0}}class Fh{constructor(t,e){this.asyncQueue=t,this.onlineStateHandler=e,this.state="Unknown",this.V_=0,this.m_=null,this.f_=!0}g_(){0===this.V_&&(this.p_("Unknown"),this.m_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this.m_=null,this.y_("Backend didn't respond within 10 seconds."),this.p_("Offline"),Promise.resolve()))))}w_(t){"Online"===this.state?this.p_("Unknown"):(this.V_++,this.V_>=1&&(this.S_(),this.y_(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.p_("Offline")))}set(t){this.S_(),this.V_=0,"Online"===t&&(this.f_=!1),this.p_(t)}p_(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}y_(t){const e=`Could not reach Cloud Firestore backend. ${t}\nThis typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.f_?(Ur(e),this.f_=!1):Vr("OnlineStateTracker",e)}S_(){null!==this.m_&&(this.m_.cancel(),this.m_=null)}}
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
     */class Vh{constructor(t,e,n,i,r){this.localStore=t,this.datastore=e,this.asyncQueue=n,this.remoteSyncer={},this.b_=[],this.D_=new Map,this.C_=new Set,this.v_=[],this.F_=r,this.F_.ro((t=>{n.enqueueAndForget((async()=>{jh(this)&&(Vr("RemoteStore","Restarting streams for network reachability change."),await async function(t){const e=Hr(t);e.C_.add(4),await Bh(e),e.M_.set("Unknown"),e.C_.delete(4),await Uh(e)}(this))}))})),this.M_=new Fh(n,i)}}async function Uh(t){if(jh(t))for(const e of t.v_)await e(!0)}async function Bh(t){for(const e of t.v_)await e(!1)}function jh(t){return 0===Hr(t).C_.size}async function $h(t,e,n){if(!Es(e))throw e;t.C_.add(1),await Bh(t),t.M_.set("Offline"),n||(n=()=>function(t){const e=Hr(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",(t=>e.qr.getLastRemoteSnapshotVersion(t)))}(t.localStore)),t.asyncQueue.enqueueRetryable((async()=>{Vr("RemoteStore","Retrying IndexedDB access"),await n(),t.C_.delete(1),await Uh(t)}))}function zh(t,e){return e().catch((n=>$h(t,n,e)))}async function Hh(t){const e=Hr(t),n=tl(e);let i=e.b_.length>0?e.b_[e.b_.length-1].batchId:-1;for(;qh(e);)try{const t=await Eh(e.localStore,i);if(null===t){0===e.b_.length&&n.Zo();break}i=t.batchId,Gh(e,t)}catch(t){await $h(e,t)}Kh(e)&&Qh(e)}function qh(t){return jh(t)&&t.b_.length<10}function Gh(t,e){t.b_.push(e);const n=tl(t);n.Ho()&&n.h_&&n.P_(e.mutations)}function Kh(t){return jh(t)&&!tl(t).jo()&&t.b_.length>0}function Qh(t){tl(t).start()}async function Wh(t){tl(t).E_()}async function Xh(t){const e=tl(t);for(const n of t.b_)e.P_(n.mutations)}async function Yh(t,e,n){const i=t.b_.shift(),r=xa.from(i,e,n);await zh(t,(()=>t.remoteSyncer.applySuccessfulWrite(r))),await Hh(t)}async function Jh(t,e){e&&tl(t).h_&&await async function(t,e){if(function(t){return function(t){switch(t){default:return $r();case qr.CANCELLED:case qr.UNKNOWN:case qr.DEADLINE_EXCEEDED:case qr.RESOURCE_EXHAUSTED:case qr.INTERNAL:case qr.UNAVAILABLE:case qr.UNAUTHENTICATED:return!1;case qr.INVALID_ARGUMENT:case qr.NOT_FOUND:case qr.ALREADY_EXISTS:case qr.PERMISSION_DENIED:case qr.FAILED_PRECONDITION:case qr.ABORTED:case qr.OUT_OF_RANGE:case qr.UNIMPLEMENTED:case qr.DATA_LOSS:return!0}}(t)&&t!==qr.ABORTED}(e.code)){const n=t.b_.shift();tl(t).Yo(),await zh(t,(()=>t.remoteSyncer.rejectFailedWrite(n.batchId,e))),await Hh(t)}}(t,e),Kh(t)&&Qh(t)}async function Zh(t,e){const n=Hr(t);n.asyncQueue.verifyOperationInProgress(),Vr("RemoteStore","RemoteStore received new credentials");const i=jh(n);n.C_.add(3),await Bh(n),i&&n.M_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.C_.delete(3),await Uh(n)}function tl(t){return t.N_||(t.N_=function(t,e,n){const i=Hr(t);return i.A_(),new Mh(e,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,n)}(t.datastore,t.asyncQueue,{ho:Wh.bind(null,t),Io:Jh.bind(null,t),T_:Xh.bind(null,t),I_:Yh.bind(null,t)}),t.v_.push((async e=>{e?(t.N_.Yo(),await Hh(t)):(await t.N_.stop(),t.b_.length>0&&(Vr("RemoteStore",`Stopping write stream with ${t.b_.length} pending writes`),t.b_=[]))}))),t.N_
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
     */}class el{constructor(t,e,n,i,r){this.asyncQueue=t,this.timerId=e,this.targetTimeMs=n,this.op=i,this.removalCallback=r,this.deferred=new Kr,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((t=>{}))}get promise(){return this.deferred.promise}static createAndSchedule(t,e,n,i,r){const s=Date.now()+n,o=new el(t,e,s,i,r);return o.start(n),o}start(t){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){null!==this.timerHandle&&(this.clearTimeout(),this.deferred.reject(new Gr(qr.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>null!==this.timerHandle?(this.clearTimeout(),this.op().then((t=>this.deferred.resolve(t)))):Promise.resolve()))}clearTimeout(){null!==this.timerHandle&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function nl(t,e){if(Ur("AsyncQueue",`${e}: ${t}`),Es(t))return new Gr(qr.UNAVAILABLE,`${e}: ${t}`);throw t}class il{constructor(){this.queries=new jo((t=>Fo(t)),Po),this.onlineState="Unknown",this.q_=new Set}}class rl{constructor(t,e,n,i,r,s){this.localStore=t,this.remoteStore=e,this.eventManager=n,this.sharedClientState=i,this.currentUser=r,this.maxConcurrentLimboResolutions=s,this.Va={},this.ma=new jo((t=>Fo(t)),Po),this.fa=new Map,this.ga=new Set,this.pa=new As(fs.comparator),this.ya=new Map,this.wa=new oh,this.Sa={},this.ba=new Map,this.Da=th.Nn(),this.onlineState="Unknown",this.Ca=void 0}get isPrimaryClient(){return!0===this.Ca}}async function sl(t,e,n){const i=function(t){const e=Hr(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=al.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=hl.bind(null,e),e}(t);try{const t=await function(t,e){const n=Hr(t),i=os.now(),r=e.reduce(((t,e)=>t.add(e.key)),Jo());let s,o;return n.persistence.runTransaction("Locally write mutations","readwrite",(t=>{let a=zo(),h=Jo();return n.ss.getEntries(t,r).next((t=>{a=t,a.forEach(((t,e)=>{e.isValidDocument()||(h=h.add(t))}))})).next((()=>n.localDocuments.getOverlayedDocuments(t,a))).next((r=>{s=r;const o=[];for(const t of e){const e=Ta(t,s.get(t.key).overlayedDocument);null!=e&&o.push(new Ca(t.key,e,io(e.value.mapValue),ya.exists(!0)))}return n.mutationQueue.addMutationBatch(t,i,o,e)})).next((e=>{o=e;const i=e.applyToLocalDocumentSet(s,h);return n.documentOverlayCache.saveOverlays(t,e.batchId,i)}))})).then((()=>({batchId:o.batchId,changes:Go(s)})))}(i.localStore,e);i.sharedClientState.addPendingMutation(t.batchId),function(t,e,n){let i=t.Sa[t.currentUser.toKey()];i||(i=new As(rs)),i=i.insert(e,n),t.Sa[t.currentUser.toKey()]=i}(i,t.batchId,n),await ul(i,t.changes),await Hh(i.remoteStore)}catch(t){const e=nl(t,"Failed to persist write");n.reject(e)}}function ol(t,e,n){const i=Hr(t);if(i.isPrimaryClient&&0===n||!i.isPrimaryClient&&1===n){const t=[];i.ma.forEach(((n,i)=>{const r=i.view.Q_(e);r.snapshot&&t.push(r.snapshot)})),function(t,e){const n=Hr(t);n.onlineState=e;let i=!1;n.queries.forEach(((t,n)=>{for(const t of n.listeners)t.Q_(e)&&(i=!0)})),i&&function(t){t.q_.forEach((t=>{t.next()}))}(n)}(i.eventManager,e),t.length&&i.Va.a_(t),i.onlineState=e,i.isPrimaryClient&&i.sharedClientState.setOnlineState(e)}}async function al(t,e){const n=Hr(t),i=e.batch.batchId;try{const t=await function(t,e){const n=Hr(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",(t=>{const i=e.batch.keys(),r=n.ss.newChangeBuffer({trackRemovals:!0});return function(t,e,n,i){const r=n.batch,s=r.keys();let o=ws.resolve();return s.forEach((t=>{o=o.next((()=>i.getEntry(e,t))).next((e=>{const s=n.docVersions.get(t);zr(null!==s),e.version.compareTo(s)<0&&(r.applyToRemoteDocument(e,n),e.isValidDocument()&&(e.setReadTime(n.commitVersion),i.addEntry(e)))}))})),o.next((()=>t.mutationQueue.removeMutationBatch(e,r)))}(n,t,e,r).next((()=>r.apply(t))).next((()=>n.mutationQueue.performConsistencyCheck(t))).next((()=>n.documentOverlayCache.removeOverlaysForBatchId(t,i,e.batch.batchId))).next((()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(t,function(t){let e=Jo();for(let n=0;n<t.mutationResults.length;++n)t.mutationResults[n].transformResults.length>0&&(e=e.add(t.batch.mutations[n].key));return e}(e)))).next((()=>n.localDocuments.getDocuments(t,i)))}))}(n.localStore,e);cl(n,i,null),ll(n,i),n.sharedClientState.updateMutationState(i,"acknowledged"),await ul(n,t)}catch(t){await vs(t)}}async function hl(t,e,n){const i=Hr(t);try{const t=await function(t,e){const n=Hr(t);return n.persistence.runTransaction("Reject batch","readwrite-primary",(t=>{let i;return n.mutationQueue.lookupMutationBatch(t,e).next((e=>(zr(null!==e),i=e.keys(),n.mutationQueue.removeMutationBatch(t,e)))).next((()=>n.mutationQueue.performConsistencyCheck(t))).next((()=>n.documentOverlayCache.removeOverlaysForBatchId(t,i,e))).next((()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(t,i))).next((()=>n.localDocuments.getDocuments(t,i)))}))}(i.localStore,e);cl(i,e,n),ll(i,e),i.sharedClientState.updateMutationState(e,"rejected",n),await ul(i,t)}catch(n){await vs(n)}}function ll(t,e){(t.ba.get(e)||[]).forEach((t=>{t.resolve()})),t.ba.delete(e)}function cl(t,e,n){const i=Hr(t);let r=i.Sa[i.currentUser.toKey()];if(r){const t=r.get(e);t&&(n?t.reject(n):t.resolve(),r=r.remove(e)),i.Sa[i.currentUser.toKey()]=r}}async function ul(t,e,n){const i=Hr(t),r=[],s=[],o=[];i.ma.isEmpty()||(i.ma.forEach(((t,a)=>{o.push(i.va(a,e,n).then((t=>{if((t||n)&&i.isPrimaryClient&&i.sharedClientState.updateQueryState(a.targetId,(null==t?void 0:t.fromCache)?"not-current":"current"),t){r.push(t);const e=gh.Qi(a.targetId,t);s.push(e)}})))})),await Promise.all(o),i.Va.a_(r),await async function(t,e){const n=Hr(t);try{await n.persistence.runTransaction("notifyLocalViewChanges","readwrite",(t=>ws.forEach(e,(e=>ws.forEach(e.ki,(i=>n.persistence.referenceDelegate.addReference(t,e.targetId,i))).next((()=>ws.forEach(e.qi,(i=>n.persistence.referenceDelegate.removeReference(t,e.targetId,i)))))))))}catch(t){if(!Es(t))throw t;Vr("LocalStore","Failed to update sequence numbers: "+t)}for(const t of e){const e=t.targetId;if(!t.fromCache){const t=n.ts.get(e),i=t.snapshotVersion,r=t.withLastLimboFreeSnapshotVersion(i);n.ts=n.ts.insert(e,r)}}}(i.localStore,s))}async function fl(t,e){const n=Hr(t);if(!n.currentUser.isEqual(e)){Vr("SyncEngine","User change. New user:",e.toKey());const t=await wh(n.localStore,e);n.currentUser=e,function(t,e){t.ba.forEach((t=>{t.forEach((t=>{t.reject(new Gr(qr.CANCELLED,e))}))})),t.ba.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,t.removedBatchIds,t.addedBatchIds),await ul(n,t._s)}}class dl{constructor(){this.synchronizeTabs=!1}async initialize(t){this.serializer=Oh(t.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(t),this.persistence=this.createPersistence(t),await this.persistence.start(),this.localStore=this.createLocalStore(t),this.gcScheduler=this.createGarbageCollectionScheduler(t,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(t,this.localStore)}createGarbageCollectionScheduler(t,e){return null}createIndexBackfillerScheduler(t,e){return null}createLocalStore(t){return function(t,e,n,i){return new vh(t,e,n,i)}(this.persistence,new yh,t.initialUser,this.serializer)}createPersistence(t){return new fh(ph.jr,this.serializer)}createSharedClientState(t){return new _h}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class pl{async initialize(t,e){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(e),this.remoteStore=this.createRemoteStore(e),this.eventManager=this.createEventManager(e),this.syncEngine=this.createSyncEngine(e,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=t=>ol(this.syncEngine,t,1),this.remoteStore.remoteSyncer.handleCredentialChange=fl.bind(null,this.syncEngine),await async function(t,e){const n=Hr(t);e?(n.C_.delete(2),await Uh(n)):e||(n.C_.add(2),await Bh(n),n.M_.set("Unknown"))}(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return new il}createDatastore(t){const e=Oh(t.databaseInfo.databaseId),n=function(t){return new kh(t)}(t.databaseInfo);return function(t,e,n,i){return new Ph(t,e,n,i)}(t.authCredentials,t.appCheckCredentials,n,e)}createRemoteStore(t){return function(t,e,n,i,r){return new Vh(t,e,n,i,r)}(this.localStore,this.datastore,t.asyncQueue,(t=>ol(this.syncEngine,t,0)),Ih.D()?new Ih:new Th)}createSyncEngine(t,e){return function(t,e,n,i,r,s,o){const a=new rl(t,e,n,i,r,s);return o&&(a.Ca=!0),a}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,e)}terminate(){return async function(t){const e=Hr(t);Vr("RemoteStore","RemoteStore shutting down."),e.C_.add(5),await Bh(e),e.F_.shutdown(),e.M_.set("Unknown")}(this.remoteStore)}}
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
     */class gl{constructor(t,e,n,i){this.authCredentials=t,this.appCheckCredentials=e,this.asyncQueue=n,this.databaseInfo=i,this.user=Lr.UNAUTHENTICATED,this.clientId=is.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(n,(async t=>{Vr("FirestoreClient","Received user=",t.uid),await this.authCredentialListener(t),this.user=t})),this.appCheckCredentials.start(n,(t=>(Vr("FirestoreClient","Received new app check token=",t),this.appCheckCredentialListener(t,this.user))))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new Gr(qr.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const t=new Kr;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(e){const n=nl(e,"Failed to shutdown persistence");t.reject(n)}})),t.promise}}async function ml(t,e){t.asyncQueue.verifyOperationInProgress(),Vr("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let i=n.initialUser;t.setCredentialChangeListener((async t=>{i.isEqual(t)||(await wh(e.localStore,t),i=t)})),e.persistence.setDatabaseDeletedListener((()=>t.terminate())),t._offlineComponents=e}async function yl(t,e){t.asyncQueue.verifyOperationInProgress();const n=await async function(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){Vr("FirestoreClient","Using user provided OfflineComponentProvider");try{await ml(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!function(t){return"FirebaseError"===t.name?t.code===qr.FAILED_PRECONDITION||t.code===qr.UNIMPLEMENTED:!("undefined"!=typeof DOMException&&t instanceof DOMException)||22===t.code||20===t.code||11===t.code}(n))throw n;Br("Error using user provided cache. Falling back to memory cache: "+n),await ml(t,new dl)}}else Vr("FirestoreClient","Using default OfflineComponentProvider"),await ml(t,new dl);return t._offlineComponents}(t);Vr("FirestoreClient","Initializing OnlineComponentProvider");const i=await t.getConfiguration();await e.initialize(n,i),t.setCredentialChangeListener((t=>Zh(e.remoteStore,t))),t.setAppCheckTokenChangeListener(((t,n)=>Zh(e.remoteStore,n))),t._onlineComponents=e}function vl(t){return async function(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(Vr("FirestoreClient","Using user provided OnlineComponentProvider"),await yl(t,t._uninitializedComponentsProvider._online)):(Vr("FirestoreClient","Using default OnlineComponentProvider"),await yl(t,new pl))),t._onlineComponents}(t).then((t=>t.syncEngine))}
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
     */function wl(t){const e={};return void 0!==t.timeoutSeconds&&(e.timeoutSeconds=t.timeoutSeconds),e
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
     */}const El=new Map;
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
     */function bl(t,e,n){if(!n)throw new Gr(qr.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function _l(t){if(!fs.isDocumentKey(t))throw new Gr(qr.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function Tl(t){if(fs.isDocumentKey(t))throw new Gr(qr.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Il(t){if(void 0===t)return"undefined";if(null===t)return"null";if("string"==typeof t)return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if("number"==typeof t||"boolean"==typeof t)return""+t;if("object"==typeof t){if(t instanceof Array)return"an array";{const e=function(t){return t.constructor?t.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return"function"==typeof t?"a function":$r()}function Sl(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new Gr(qr.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Il(t);throw new Gr(qr.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}
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
     */class Cl{constructor(t){var e,n;if(void 0===t.host){if(void 0!==t.ssl)throw new Gr(qr.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=t.host,this.ssl=null===(e=t.ssl)||void 0===e||e;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.localCache=t.localCache,void 0===t.cacheSizeBytes)this.cacheSizeBytes=41943040;else{if(-1!==t.cacheSizeBytes&&t.cacheSizeBytes<1048576)throw new Gr(qr.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}(function(t,e,n,i){if(!0===e&&!0===i)throw new Gr(qr.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)})("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:void 0===t.experimentalAutoDetectLongPolling?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=wl(null!==(n=t.experimentalLongPollingOptions)&&void 0!==n?n:{}),function(t){if(void 0!==t.timeoutSeconds){if(isNaN(t.timeoutSeconds))throw new Gr(qr.INVALID_ARGUMENT,`invalid long polling timeout: ${t.timeoutSeconds} (must not be NaN)`);if(t.timeoutSeconds<5)throw new Gr(qr.INVALID_ARGUMENT,`invalid long polling timeout: ${t.timeoutSeconds} (minimum allowed value is 5)`);if(t.timeoutSeconds>30)throw new Gr(qr.INVALID_ARGUMENT,`invalid long polling timeout: ${t.timeoutSeconds} (maximum allowed value is 30)`)}}
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
     */(this.experimentalLongPollingOptions),this.useFetchStreams=!!t.useFetchStreams}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&function(t,e){return t.timeoutSeconds===e.timeoutSeconds}(this.experimentalLongPollingOptions,t.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}class Al{constructor(t,e,n,i){this._authCredentials=t,this._appCheckCredentials=e,this._databaseId=n,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Cl({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new Gr(qr.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return void 0!==this._terminateTask}_setSettings(t){if(this._settingsFrozen)throw new Gr(qr.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Cl(t),void 0!==t.credentials&&(this._authCredentials=function(t){if(!t)return new Wr;switch(t.type){case"firstParty":return new Zr(t.sessionIndex||"0",t.iamToken||null,t.authTokenFactory||null);case"provider":return t.client;default:throw new Gr(qr.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const e=El.get(t);e&&(Vr("ComponentProvider","Removing Datastore"),El.delete(t),e.terminate())}(this),Promise.resolve()}}function Dl(t,e,n,r={}){var s;const o=(t=Sl(t,Al))._getSettings(),a=`${e}:${n}`;if("firestore.googleapis.com"!==o.host&&o.host!==a&&Br("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},o),{host:a,ssl:!1})),r.mockUserToken){let e,n;if("string"==typeof r.mockUserToken)e=r.mockUserToken,n=Lr.MOCK_USER;else{e=function(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n=e||"demo-project",r=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${n}`,aud:n,iat:r,exp:r+3600,auth_time:r,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t);return[i(JSON.stringify({alg:"none",type:"JWT"})),i(JSON.stringify(o)),""].join(".")}(r.mockUserToken,null===(s=t._app)||void 0===s?void 0:s.options.projectId);const o=r.mockUserToken.sub||r.mockUserToken.user_id;if(!o)throw new Gr(qr.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");n=new Lr(o)}t._authCredentials=new Xr(new Qr(e,n))}}
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
     */class Nl{constructor(t,e,n){this.converter=e,this._query=n,this.type="query",this.firestore=t}withConverter(t){return new Nl(this.firestore,t,this._query)}}class kl{constructor(t,e,n){this.converter=e,this._key=n,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Rl(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new kl(this.firestore,t,this._key)}}class Rl extends Nl{constructor(t,e,n){super(t,e,function(t){return new Ro(t)}(n)),this._path=n,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new kl(this.firestore,null,new fs(t))}withConverter(t){return new Rl(this.firestore,t,this._path)}}
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
class Ol{constructor(){this.Ja=Promise.resolve(),this.Ya=[],this.Za=!1,this.Xa=[],this.eu=null,this.tu=!1,this.nu=!1,this.ru=[],this.zo=new xh(this,"async_queue_retry"),this.iu=()=>{const t=Rh();t&&Vr("AsyncQueue","Visibility state changed to "+t.visibilityState),this.zo.Qo()};const t=Rh();t&&"function"==typeof t.addEventListener&&t.addEventListener("visibilitychange",this.iu)}get isShuttingDown(){return this.Za}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.su(),this.ou(t)}enterRestrictedMode(t){if(!this.Za){this.Za=!0,this.nu=t||!1;const e=Rh();e&&"function"==typeof e.removeEventListener&&e.removeEventListener("visibilitychange",this.iu)}}enqueue(t){if(this.su(),this.Za)return new Promise((()=>{}));const e=new Kr;return this.ou((()=>this.Za&&this.nu?Promise.resolve():(t().then(e.resolve,e.reject),e.promise))).then((()=>e.promise))}enqueueRetryable(t){this.enqueueAndForget((()=>(this.Ya.push(t),this._u())))}async _u(){if(0!==this.Ya.length){try{await this.Ya[0](),this.Ya.shift(),this.zo.reset()}catch(t){if(!Es(t))throw t;Vr("AsyncQueue","Operation failed with retryable error: "+t)}this.Ya.length>0&&this.zo.ko((()=>this._u()))}}ou(t){const e=this.Ja.then((()=>(this.tu=!0,t().catch((t=>{this.eu=t,this.tu=!1;const e=function(t){let e=t.message||"";return t.stack&&(e=t.stack.includes(t.message)?t.stack:t.message+"\n"+t.stack),e}
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
     */(t);throw Ur("INTERNAL UNHANDLED ERROR: ",e),t})).then((t=>(this.tu=!1,t))))));return this.Ja=e,e}enqueueAfterDelay(t,e,n){this.su(),this.ru.indexOf(t)>-1&&(e=0);const i=el.createAndSchedule(this,t,e,n,(t=>this.au(t)));return this.Xa.push(i),i}su(){this.eu&&$r()}verifyOperationInProgress(){}async uu(){let t;do{t=this.Ja,await t}while(t!==this.Ja)}cu(t){for(const e of this.Xa)if(e.timerId===t)return!0;return!1}lu(t){return this.uu().then((()=>{this.Xa.sort(((t,e)=>t.targetTimeMs-e.targetTimeMs));for(const e of this.Xa)if(e.skipDelay(),"all"!==t&&e.timerId===t)break;return this.uu()}))}hu(t){this.ru.push(t)}au(t){const e=this.Xa.indexOf(t);this.Xa.splice(e,1)}}class xl extends Al{constructor(t,e,n,i){super(t,e,n,i),this.type="firestore",this._queue=new Ol,this._persistenceKey=(null==i?void 0:i.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||Ll(this),this._firestoreClient.terminate()}}function Ll(t){var e,n,i;const r=t._freezeSettings(),s=function(t,e,n,i){return new $s(t,e,n,i.host,i.ssl,i.experimentalForceLongPolling,i.experimentalAutoDetectLongPolling,wl(i.experimentalLongPollingOptions),i.useFetchStreams)}(t._databaseId,(null===(e=t._app)||void 0===e?void 0:e.options.appId)||"",t._persistenceKey,r);t._firestoreClient=new gl(t._authCredentials,t._appCheckCredentials,t._queue,s),(null===(n=r.localCache)||void 0===n?void 0:n._offlineComponentProvider)&&(null===(i=r.localCache)||void 0===i?void 0:i._onlineComponentProvider)&&(t._firestoreClient._uninitializedComponentsProvider={_offlineKind:r.localCache.kind,_offline:r.localCache._offlineComponentProvider,_online:r.localCache._onlineComponentProvider})}
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
     */class Ml{constructor(t){this._byteString=t}static fromBase64String(t){try{return new Ml(Ls.fromBase64String(t))}catch(t){throw new Gr(qr.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(t){return new Ml(Ls.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}}
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
     */class Pl{constructor(...t){for(let e=0;e<t.length;++e)if(0===t[e].length)throw new Gr(qr.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new us(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}
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
     */class Fl{constructor(t){this._methodName=t}}
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
     */class Vl{constructor(t,e){if(!isFinite(t)||t<-90||t>90)throw new Gr(qr.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(e)||e<-180||e>180)throw new Gr(qr.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+e);this._lat=t,this._long=e}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(t){return rs(this._lat,t._lat)||rs(this._long,t._long)}}
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
     */const Ul=/^__.*__$/;class Bl{constructor(t,e,n){this.data=t,this.fieldMask=e,this.fieldTransforms=n}toMutation(t,e){return null!==this.fieldMask?new Ca(t,this.data,this.fieldMask,e,this.fieldTransforms):new Sa(t,this.data,e,this.fieldTransforms)}}function jl(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw $r()}}class $l{constructor(t,e,n,i,r,s){this.settings=t,this.databaseId=e,this.serializer=n,this.ignoreUndefinedProperties=i,void 0===r&&this.Pu(),this.fieldTransforms=r||[],this.fieldMask=s||[]}get path(){return this.settings.path}get Iu(){return this.settings.Iu}Tu(t){return new $l(Object.assign(Object.assign({},this.settings),t),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Eu(t){var e;const n=null===(e=this.path)||void 0===e?void 0:e.child(t),i=this.Tu({path:n,du:!1});return i.Au(t),i}Ru(t){var e;const n=null===(e=this.path)||void 0===e?void 0:e.child(t),i=this.Tu({path:n,du:!1});return i.Pu(),i}Vu(t){return this.Tu({path:void 0,du:!0})}mu(t){return Zl(t,this.settings.methodName,this.settings.fu||!1,this.path,this.settings.gu)}contains(t){return void 0!==this.fieldMask.find((e=>t.isPrefixOf(e)))||void 0!==this.fieldTransforms.find((e=>t.isPrefixOf(e.field)))}Pu(){if(this.path)for(let t=0;t<this.path.length;t++)this.Au(this.path.get(t))}Au(t){if(0===t.length)throw this.mu("Document fields must not be empty");if(jl(this.Iu)&&Ul.test(t))throw this.mu('Document fields cannot begin and end with "__"')}}class zl{constructor(t,e,n){this.databaseId=t,this.ignoreUndefinedProperties=e,this.serializer=n||Oh(t)}pu(t,e,n,i=!1){return new $l({Iu:t,methodName:e,gu:n,path:us.emptyPath(),du:!1,fu:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Hl(t){const e=t._freezeSettings(),n=Oh(t._databaseId);return new zl(t._databaseId,!!e.ignoreUndefinedProperties,n)}function ql(t,e,n,i,r,s={}){const o=t.pu(s.merge||s.mergeFields?2:0,e,n,r);Xl("Data must be an object, but it was:",o,i);const a=Ql(i,o);let h,l;if(s.merge)h=new Os(o.fieldMask),l=o.fieldTransforms;else if(s.mergeFields){const t=[];for(const i of s.mergeFields){const r=Yl(e,i,n);if(!o.contains(r))throw new Gr(qr.INVALID_ARGUMENT,`Field '${r}' is specified in your field mask but missing from your input data.`);tc(t,r)||t.push(r)}h=new Os(t),l=o.fieldTransforms.filter((t=>h.covers(t.field)))}else h=null,l=o.fieldTransforms;return new Bl(new no(a),h,l)}class Gl extends Fl{_toFieldTransform(t){return new ga(t.path,new aa)}isEqual(t){return t instanceof Gl}}function Kl(t,e){if(Wl(t=g(t)))return Xl("Unsupported field value:",e,t),Ql(t,e);if(t instanceof Fl)return function(t,e){if(!jl(e.Iu))throw e.mu(`${t._methodName}() can only be used with update() and set()`);if(!e.path)throw e.mu(`${t._methodName}() is not currently supported inside arrays`);const n=t._toFieldTransform(e);n&&e.fieldTransforms.push(n)}(t,e),null;if(void 0===t&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.du&&4!==e.Iu)throw e.mu("Nested arrays are not supported");return function(t,e){const n=[];let i=0;for(const r of t){let t=Kl(r,e.Vu(i));null==t&&(t={nullValue:"NULL_VALUE"}),n.push(t),i++}return{arrayValue:{values:n}}}(t,e)}return function(t,e){if(null===(t=g(t)))return{nullValue:"NULL_VALUE"};if("number"==typeof t)return na(e.serializer,t);if("boolean"==typeof t)return{booleanValue:t};if("string"==typeof t)return{stringValue:t};if(t instanceof Date){const n=os.fromDate(t);return{timestampValue:Va(e.serializer,n)}}if(t instanceof os){const n=new os(t.seconds,1e3*Math.floor(t.nanoseconds/1e3));return{timestampValue:Va(e.serializer,n)}}if(t instanceof Vl)return{geoPointValue:{latitude:t.latitude,longitude:t.longitude}};if(t instanceof Ml)return{bytesValue:Ua(e.serializer,t._byteString)};if(t instanceof kl){const n=e.databaseId,i=t.firestore._databaseId;if(!i.isEqual(n))throw e.mu(`Document reference is for database ${i.projectId}/${i.database} but should be for database ${n.projectId}/${n.database}`);return{referenceValue:$a(t.firestore._databaseId||e.databaseId,t._key.path)}}throw e.mu(`Unsupported field value: ${Il(t)}`)}(t,e)}function Ql(t,e){const n={};return Cs(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Ss(t,((t,i)=>{const r=Kl(i,e.Eu(t));null!=r&&(n[t]=r)})),{mapValue:{fields:n}}}function Wl(t){return!("object"!=typeof t||null===t||t instanceof Array||t instanceof Date||t instanceof os||t instanceof Vl||t instanceof Ml||t instanceof kl||t instanceof Fl)}function Xl(t,e,n){if(!Wl(n)||!function(t){return"object"==typeof t&&null!==t&&(Object.getPrototypeOf(t)===Object.prototype||null===Object.getPrototypeOf(t))}(n)){const i=Il(n);throw"an object"===i?e.mu(t+" a custom object"):e.mu(t+" "+i)}}function Yl(t,e,n){if((e=g(e))instanceof Pl)return e._internalPath;if("string"==typeof e)return function(t,e,n){if(e.search(Jl)>=0)throw Zl(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Pl(...e.split("."))._internalPath}catch(i){throw Zl(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}(t,e);throw Zl("Field path arguments must be of type string or ",t,!1,void 0,n)}const Jl=new RegExp("[~\\*/\\[\\]]");function Zl(t,e,n,i,r){const s=i&&!i.isEmpty(),o=void 0!==r;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let h="";return(s||o)&&(h+=" (found",s&&(h+=` in field ${i}`),o&&(h+=` in document ${r}`),h+=")"),new Gr(qr.INVALID_ARGUMENT,a+t+h)}function tc(t,e){return t.some((t=>t.isEqual(e)))}
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
     */function ec(t,e){const n=Sl(t.firestore,xl),i=function(t,e,...n){if(t=g(t),1===arguments.length&&(e=is.newId()),bl("doc","path",e),t instanceof Al){const i=ls.fromString(e,...n);return _l(i),new kl(t,null,new fs(i))}{if(!(t instanceof kl||t instanceof Rl))throw new Gr(qr.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const i=t._path.child(ls.fromString(e,...n));return _l(i),new kl(t.firestore,t instanceof Rl?t.converter:null,new fs(i))}}(t),r=function(t,e,n){let i;return i=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,i}(t.converter,e);return function(t,e){return function(t,e){const n=new Kr;return t.asyncQueue.enqueueAndForget((async()=>sl(await vl(t),e,n))),n.promise}(function(t){return t._firestoreClient||Ll(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}(t),e)}(n,[ql(Hl(t.firestore),"addDoc",i._key,r,null!==t.converter,{}).toMutation(i._key,ya.exists(!1))]).then((()=>i))}!function(t,e=!0){!function(t){Mr=t}("10.7.1"),Z(new m("firestore",((t,{instanceIdentifier:n,options:i})=>{const r=t.getProvider("app").getImmediate(),s=new xl(new Yr(t.getProvider("auth-internal")),new es(t.getProvider("app-check-internal")),function(t,e){if(!Object.prototype.hasOwnProperty.apply(t.options,["projectId"]))throw new Gr(qr.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new zs(t.options.projectId,e)}(r,n),r);return i=Object.assign({useFetchStreams:e},i),s._setSettings(i),s}),"PUBLIC").setMultipleInstances(!0)),it(xr,"4.4.0",t),it(xr,"4.4.0","esm2017")}();
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
it("firebase","10.7.1","app");nt({apiKey:"AIzaSyBgOheePCJqT_ivlXs_EagQ3wQPGIMpJUg",authDomain:"howardlucas-7fcb0.firebaseapp.com",projectId:"howardlucas-7fcb0",storageBucket:"howardlucas-7fcb0.appspot.com",messagingSenderId:"945745527827",appId:"1:945745527827:web:3e282534ecdd22c66eabe6",measurementId:"G-QEE9Y648VB"});const nc=function(t,e){const n="object"==typeof t?t:function(t=Q){const e=X.get(t);if(!e&&t===Q&&h())return nt();if(!e)throw tt.create("no-app",{appName:t});return e}(),i="string"==typeof t?t:e||"(default)",r=function(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}(n,"firestore").getImmediate({identifier:i});if(!r._initialized){const t=a("firestore");t&&Dl(r,...t)}return r}(),ic=function(t,e,...n){if(t=g(t),bl("collection","path",e),t instanceof Al){const i=ls.fromString(e,...n);return Tl(i),new Rl(t,null,i)}{if(!(t instanceof kl||t instanceof Rl))throw new Gr(qr.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const i=t._path.child(ls.fromString(e,...n));return Tl(i),new Rl(t.firestore,null,i)}}(nc,"contacts"),rc=document.querySelector(".contact-form"),sc=document.querySelector(".feedback");rc.addEventListener("submit",(t=>{t.preventDefault(),ec(ic,{name:rc.name.value,email:rc.email.value,message:rc.message.value,createdAt:new Gl("serverTimestamp")}).then((()=>{sc.style.display="block",setTimeout((()=>{sc.style.display="none",rc.name.value="",rc.email.value="",rc.message.value=""}),3e3)}))}))}();