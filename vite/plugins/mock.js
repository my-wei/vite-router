/*
 * @Author: gq
 * @Date: 2022-01-23 23:08:11
 * @LastEditors: gq
 * @LastEditTime: 2022-01-23 23:22:28
 * @Description: file content
 */
import { viteMockServe } from 'vite-plugin-mock'

export function setupMockPlugin(isBuild) {

    return viteMockServe({
        // default
        mockPath: 'mock',
        localEnabled: !isBuild,
    })

}