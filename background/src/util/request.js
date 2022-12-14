import {post,get,put,del} from './service'

export const loginApi = data => {
    return post({
        url:'/login',
        data
    })
}

//获取用户列表
export const userListApi = data => {
    return get({
        url:'/users',
        data
    })
}

//获取新增列表
export const userAddApi = data => {
    return post({
        url:'/users',
        data
    })
}
//用户状态开关
export const userChangeStateApi = data => {
    return put({
        url:`users/${data.id}/state/${data.mg_state}`,
        data
    })
}
//更改用户信息
export const userChangeInfoApi = data => {
    return put({
        url:`users/${data.id}`,
        data
    })
}
//删除用户信息
export const userDeleteApi = data => {
    return del({
        url:`users/${data.id}`
    })
}

//角色列表
//获取角色
export const getRolesApi = data => {
    return get({
        url:'/roles',
        data
    })
}
//新建角色
export const addRolesApi = data => {
    return post({
        url:'/roles',
        data
    })
}
//编辑角色
export const editRolesApi = data => {
    return put({
        url:`roles/${data.id}`,
        data
    })
}
//删除用户信息
export const rolesDeleteApi = data => {
    return del({
        url:`roles/${data.id}`
    })
}

//物品管理
//获取物品列表
export const goodsListApi = data => {
    return get({
        url:'/goods',
        data
    })
}