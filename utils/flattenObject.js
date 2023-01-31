import { readFile } from 'fs/promises';
import { inc } from './helperFunctions.js';

/* Flatten a deep object */
async function Flattener() {
    const getKey = obj => Object.keys(obj)[i];
    let i = 0,
        delim = '.',
        key = '',
        value,
        res = JSON.parse(await readFile('./profile.json', { encoding: 'utf8' }));
    try {
        flatten.call(res);
        console.log(res);
    }
    catch (e) {
        console.log(e);
    }
    function flatten() { 
        if (typeof (this) == "object") {
            if (!Object.entries(this).length) {
                update();
            }
            else {
                if (Array.isArray(this)) {
                    for (let [k, v] of Object.entries(this)) {
                        key += !key ? getKey(this) : delim + getKey(this);
                        value = this[k];
                        break;
                    }
                }
                else {
                    key += !key ? getKey(this) : delim + getKey(this);
                    value = this[key.substring(inc(key.lastIndexOf(delim)))];
                }
            }                        
        }        
        else {
            res[key] = value;
            update();
        }
        if (!value) {
            return true;
        }
        else {
            return flatten.call(value);   
        }
        function update() {
            if (!key) {
                key = getKey(this);
            }
            else {
                let j = i, arr = key.split(delim), l = arr.length - inc(i), k;
                while (j < l) {
                    k = arr[j++];
                    if (typeof (value) != "object" || !Object.entries(value).length) {
                        value = res[k];
                    }
                    else {
                        value = value[k];
                    }
                }
                k = arr[j];
                delete value[k];
                key = key.substring(i, key.lastIndexOf(delim));
                if (!Object.entries(value).length) {
                    if (!key && k) {
                        delete res[k];
                        value = undefined;
                        return true;
                    }
                }
            }            
        }
    }
}
Flattener();