import _ from 'loadsh';

export function parseEnv(env) {
    const envs = _.cloneDeep(env);
    Object.entries(env).forEach(([key, value]) => {

        if (value == "true" || value == "false") {
            value == "true" ? envs[key] = true : envs[key] = false;
        }
        if (/^\d+$/.test(value)) {
            envs[key] = parseInt(value);
        }

    })

    return envs;
}