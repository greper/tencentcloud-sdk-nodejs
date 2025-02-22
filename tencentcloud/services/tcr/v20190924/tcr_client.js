"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Client = void 0;
/* eslint-disable @typescript-eslint/no-unused-vars */
/*
 * Copyright (c) 2018 THL A29 Limited, a Tencent company. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
const abstract_client_1 = require("../../../common/abstract_client");
/**
 * tcr client
 * @class
 */
class Client extends abstract_client_1.AbstractClient {
    constructor(clientConfig) {
        super("tcr.tencentcloudapi.com", "2019-09-24", clientConfig);
    }
    /**
     * 更新命名空间信息，当前仅支持修改命名空间访问级别
     */
    async ModifyNamespace(req, cb) {
        return this.request("ModifyNamespace", req, cb);
    }
    /**
     * 用于在个人版中查询与指定tag镜像内容相同的tag列表
     */
    async DescribeImageFilterPersonal(req, cb) {
        return this.request("DescribeImageFilterPersonal", req, cb);
    }
    /**
     * 用于查询应用更新触发器
     */
    async DescribeApplicationTriggerPersonal(req, cb) {
        return this.request("DescribeApplicationTriggerPersonal", req, cb);
    }
    /**
     * 用于在个人版中创建清理策略
     */
    async CreateImageLifecyclePersonal(req, cb) {
        return this.request("CreateImageLifecyclePersonal", req, cb);
    }
    /**
     * 用于在企业版中创建命名空间
     */
    async CreateNamespace(req, cb) {
        return this.request("CreateNamespace", req, cb);
    }
    /**
     * 用于获取个人版镜像仓库tag列表
     */
    async DescribeImagePersonal(req, cb) {
        return this.request("DescribeImagePersonal", req, cb);
    }
    /**
     * 用于获取个人版仓库中自动清理策略
     */
    async DescribeImageLifecyclePersonal(req, cb) {
        return this.request("DescribeImageLifecyclePersonal", req, cb);
    }
    /**
     * 用于获取个人版全局镜像版本自动清理策略
     */
    async DescribeImageLifecycleGlobalPersonal(req, cb) {
        return this.request("DescribeImageLifecycleGlobalPersonal", req, cb);
    }
    /**
     * 删除镜像仓库企业版实例
     */
    async DeleteInstance(req, cb) {
        return this.request("DeleteInstance", req, cb);
    }
    /**
     * 用于修改应用更新触发器
     */
    async ModifyApplicationTriggerPersonal(req, cb) {
        return this.request("ModifyApplicationTriggerPersonal", req, cb);
    }
    /**
     * 更新镜像仓库信息，可修改仓库描述信息
     */
    async ModifyRepository(req, cb) {
        return this.request("ModifyRepository", req, cb);
    }
    /**
     * 删除命名空间
     */
    async DeleteNamespace(req, cb) {
        return this.request("DeleteNamespace", req, cb);
    }
    /**
     * 删除镜像仓库
     */
    async DeleteRepository(req, cb) {
        return this.request("DeleteRepository", req, cb);
    }
    /**
     * 查询镜像仓库列表或指定镜像仓库信息
     */
    async DescribeRepositories(req, cb) {
        return this.request("DescribeRepositories", req, cb);
    }
    /**
     * 查询实例信息
     */
    async DescribeInstances(req, cb) {
        return this.request("DescribeInstances", req, cb);
    }
    /**
     * 用于在个人版镜像仓库中更新容器镜像描述
     */
    async ModifyRepositoryInfoPersonal(req, cb) {
        return this.request("ModifyRepositoryInfoPersonal", req, cb);
    }
    /**
     * 获取触发器日志
     */
    async DescribeWebhookTriggerLog(req, cb) {
        return this.request("DescribeWebhookTriggerLog", req, cb);
    }
    /**
     * 查询镜像版本列表或指定容器镜像信息
     */
    async DescribeImages(req, cb) {
        return this.request("DescribeImages", req, cb);
    }
    /**
     * 查询个人版命名空间信息
     */
    async DescribeNamespacePersonal(req, cb) {
        return this.request("DescribeNamespacePersonal", req, cb);
    }
    /**
     * 用于个人版镜像仓库中删除
     */
    async DeleteRepositoryPersonal(req, cb) {
        return this.request("DeleteRepositoryPersonal", req, cb);
    }
    /**
     * 查询个人版仓库信息
     */
    async DescribeRepositoryPersonal(req, cb) {
        return this.request("DescribeRepositoryPersonal", req, cb);
    }
    /**
     * 查询容器镜像Manifest信息
     */
    async DescribeImageManifests(req, cb) {
        return this.request("DescribeImageManifests", req, cb);
    }
    /**
     * 查询长期访问凭证信息
     */
    async DescribeInstanceToken(req, cb) {
        return this.request("DescribeInstanceToken", req, cb);
    }
    /**
     * 用于设置个人版全局镜像版本自动清理策略
     */
    async ManageImageLifecycleGlobalPersonal(req, cb) {
        return this.request("ManageImageLifecycleGlobalPersonal", req, cb);
    }
    /**
     * 用于查询应用更新触发器触发日志
     */
    async DescribeApplicationTriggerLogPersonal(req, cb) {
        return this.request("DescribeApplicationTriggerLogPersonal", req, cb);
    }
    /**
     * 删除长期访问凭证
     */
    async DeleteInstanceToken(req, cb) {
        return this.request("DeleteInstanceToken", req, cb);
    }
    /**
     * 修改个人用户登录密码
     */
    async ModifyUserPasswordPersonal(req, cb) {
        return this.request("ModifyUserPasswordPersonal", req, cb);
    }
    /**
     * 用于删除应用更新触发器
     */
    async DeleteApplicationTriggerPersonal(req, cb) {
        return this.request("DeleteApplicationTriggerPersonal", req, cb);
    }
    /**
     * 查询触发器
     */
    async DescribeWebhookTrigger(req, cb) {
        return this.request("DescribeWebhookTrigger", req, cb);
    }
    /**
     * 用于在个人版中删除tag
     */
    async DeleteImagePersonal(req, cb) {
        return this.request("DeleteImagePersonal", req, cb);
    }
    /**
     * 管理实例内网访问VPC链接
     */
    async ManageInternalEndpoint(req, cb) {
        return this.request("ManageInternalEndpoint", req, cb);
    }
    /**
     * 更新触发器
     */
    async ModifyWebhookTrigger(req, cb) {
        return this.request("ModifyWebhookTrigger", req, cb);
    }
    /**
     * 更新实例内指定长期访问凭证的启用状态
     */
    async ModifyInstanceToken(req, cb) {
        return this.request("ModifyInstanceToken", req, cb);
    }
    /**
     * 创建实例
     */
    async CreateInstance(req, cb) {
        return this.request("CreateInstance", req, cb);
    }
    /**
     * 查询从实例列表
     */
    async DescribeReplicationInstances(req, cb) {
        return this.request("DescribeReplicationInstances", req, cb);
    }
    /**
     * 创建触发器
     */
    async CreateWebhookTrigger(req, cb) {
        return this.request("CreateWebhookTrigger", req, cb);
    }
    /**
     * 用于创建应用更新触发器
     */
    async CreateApplicationTriggerPersonal(req, cb) {
        return this.request("CreateApplicationTriggerPersonal", req, cb);
    }
    /**
     * 用于个人版镜像仓库中批量删除镜像仓库
     */
    async BatchDeleteRepositoryPersonal(req, cb) {
        return this.request("BatchDeleteRepositoryPersonal", req, cb);
    }
    /**
     * 查询个人用户配额
     */
    async DescribeUserQuotaPersonal(req, cb) {
        return this.request("DescribeUserQuotaPersonal", req, cb);
    }
    /**
     * 删除触发器
     */
    async DeleteWebhookTrigger(req, cb) {
        return this.request("DeleteWebhookTrigger", req, cb);
    }
    /**
     * 查询创建从实例任务状态
     */
    async DescribeReplicationInstanceCreateTasks(req, cb) {
        return this.request("DescribeReplicationInstanceCreateTasks", req, cb);
    }
    /**
     * 用于企业版创建镜像仓库
     */
    async CreateRepository(req, cb) {
        return this.request("CreateRepository", req, cb);
    }
    /**
     * 查询个人收藏仓库
     */
    async DescribeFavorRepositoryPersonal(req, cb) {
        return this.request("DescribeFavorRepositoryPersonal", req, cb);
    }
    /**
     * 用于在个人版中获取用户全部的镜像仓库列表
     */
    async DescribeRepositoryOwnerPersonal(req, cb) {
        return this.request("DescribeRepositoryOwnerPersonal", req, cb);
    }
    /**
     * 查询命名空间列表或指定命名空间信息
     */
    async DescribeNamespaces(req, cb) {
        return this.request("DescribeNamespaces", req, cb);
    }
    /**
     * 查询实例当前状态以及过程信息
     */
    async DescribeInstanceStatus(req, cb) {
        return this.request("DescribeInstanceStatus", req, cb);
    }
    /**
     * 用于在个人版仓库中创建镜像仓库
     */
    async CreateRepositoryPersonal(req, cb) {
        return this.request("CreateRepositoryPersonal", req, cb);
    }
    /**
     * 用于在个人版镜像仓库中批量删除Tag
     */
    async BatchDeleteImagePersonal(req, cb) {
        return this.request("BatchDeleteImagePersonal", req, cb);
    }
    /**
     * 用于在个人版镜像仓库中复制镜像版本
     */
    async DuplicateImagePersonal(req, cb) {
        return this.request("DuplicateImagePersonal", req, cb);
    }
    /**
     * 用于在个人版镜像仓库中，获取满足输入搜索条件的用户镜像仓库
     */
    async DescribeRepositoryFilterPersonal(req, cb) {
        return this.request("DescribeRepositoryFilterPersonal", req, cb);
    }
    /**
     * 查询个人版用户命名空间是否存在
     */
    async ValidateNamespaceExistPersonal(req, cb) {
        return this.request("ValidateNamespaceExistPersonal", req, cb);
    }
    /**
     * 创建个人版镜像仓库命名空间，此命名空间全局唯一
     */
    async CreateNamespacePersonal(req, cb) {
        return this.request("CreateNamespacePersonal", req, cb);
    }
    /**
     * 创建个人用户
     */
    async CreateUserPersonal(req, cb) {
        return this.request("CreateUserPersonal", req, cb);
    }
    /**
     * 用于删除个人版全局镜像版本自动清理策略
     */
    async DeleteImageLifecycleGlobalPersonal(req, cb) {
        return this.request("DeleteImageLifecycleGlobalPersonal", req, cb);
    }
    /**
     * 删除共享版命名空间
     */
    async DeleteNamespacePersonal(req, cb) {
        return this.request("DeleteNamespacePersonal", req, cb);
    }
    /**
     * 用于更新个人版镜像仓库的访问属性
     */
    async ModifyRepositoryAccessPersonal(req, cb) {
        return this.request("ModifyRepositoryAccessPersonal", req, cb);
    }
    /**
     * 查询实例内网访问VPC链接
     */
    async DescribeInternalEndpoints(req, cb) {
        return this.request("DescribeInternalEndpoints", req, cb);
    }
    /**
     * 用于在个人版镜像仓库中删除仓库Tag自动清理策略
     */
    async DeleteImageLifecyclePersonal(req, cb) {
        return this.request("DeleteImageLifecyclePersonal", req, cb);
    }
    /**
     * 用于判断个人版仓库是否存在
     */
    async ValidateRepositoryExistPersonal(req, cb) {
        return this.request("ValidateRepositoryExistPersonal", req, cb);
    }
    /**
     * 删除指定镜像
     */
    async DeleteImage(req, cb) {
        return this.request("DeleteImage", req, cb);
    }
    /**
     * 创建实例的临时或长期访问凭证
     */
    async CreateInstanceToken(req, cb) {
        return this.request("CreateInstanceToken", req, cb);
    }
}
exports.Client = Client;
