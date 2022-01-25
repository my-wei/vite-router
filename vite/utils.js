import _ from 'loadsh';

export function parseEnv(env) {
    const envs = _.cloneDeep(env);
    Object.entries(env).forEach(([key, value]) => {

        if (value == "true" || value == "false") value == "true" ? envs[key] = true : envs[key] = false;
        else if (/^\d+$/.test(value)) envs[key] = Number(value);
        else if (value == "null") envs[key] = null;
        else if (value == "undefined") envs[key] = undefined;

    })

    return envs;
}