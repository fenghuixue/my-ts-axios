export type method = 'get' | 'GET' | 'delete' 
| 'DELETE' | 'head' | 'HEAD' | 'options' | 'OPTIONS' | 'post' | 'POST' | 'put' | 'PUT' | 'patch' | 'PATCH'
export interface AxiosRequestConfig {
    url: string,
    data?: any,
    method?: method,
    params?: any 
}