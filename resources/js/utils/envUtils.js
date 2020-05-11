import { DEFAULT_VALUES } from  "../configs";

export const getEnv = envVariable => {
    console.log(process.env)
    return process.env[`REACT_APP_${envVariable}`] || DEFAULT_VALUES[`DEFAULT_${envVariable}`];
};
