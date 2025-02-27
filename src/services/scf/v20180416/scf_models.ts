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

/**
 * HTTP域名相关信息
 */
export interface AccessInfo {
  /**
   * 域名
   */
  Host: string

  /**
   * VIP
   */
  Vip: string
}

/**
 * UpdateAlias请求参数结构体
 */
export interface UpdateAliasRequest {
  /**
   * 函数名称
   */
  FunctionName: string

  /**
   * 别名的名称
   */
  Name: string

  /**
   * 别名指向的主版本
   */
  FunctionVersion: string

  /**
   * 函数所在的命名空间
   */
  Namespace?: string

  /**
   * 别名的路由信息，需要为别名指定附加版本时，必须提供此参数
   */
  RoutingConfig?: RoutingConfig

  /**
   * 别名的描述
   */
  Description?: string
}

/**
 * 触发器类型
 */
export interface Trigger {
  /**
   * 触发器最后修改时间
   */
  ModTime: string

  /**
   * 触发器类型
   */
  Type: string

  /**
   * 触发器详细配置
   */
  TriggerDesc: string

  /**
   * 触发器名称
   */
  TriggerName: string

  /**
   * 触发器创建时间
   */
  AddTime: string

  /**
   * 使能开关
   */
  Enable: number

  /**
   * 客户自定义参数
   */
  CustomArgument: string

  /**
   * 触发器状态
   */
  AvailableStatus: string

  /**
   * 触发器最小资源ID
   */
  ResourceId: string

  /**
   * 触发器和云函数绑定状态
   */
  BindStatus: string

  /**
   * 触发器类型，双向表示两侧控制台均可操作，单向表示SCF控制台单向创建
   */
  TriggerAttribute: string

  /**
   * 触发器绑定的别名或版本
   */
  Qualifier: string
}

/**
 * GetProvisionedConcurrencyConfig请求参数结构体
 */
export interface GetProvisionedConcurrencyConfigRequest {
  /**
   * 需要获取预置并发详情的函数名称。
   */
  FunctionName: string

  /**
   * 函数所在的命名空间，默认为default。
   */
  Namespace?: string

  /**
   * 函数版本号，不传则返回函数所有版本的预置并发信息。
   */
  Qualifier?: string
}

/**
 * ListAliases返回参数结构体
 */
export interface ListAliasesResponse {
  /**
   * 别名列表
   */
  Aliases?: Array<Alias>

  /**
      * 别名总数
注意：此字段可能返回 null，表示取不到有效值。
      */
  TotalCount?: number

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DeleteLayerVersion返回参数结构体
 */
export interface DeleteLayerVersionResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * GetReservedConcurrencyConfig返回参数结构体
 */
export interface GetReservedConcurrencyConfigResponse {
  /**
      * 该函数的保留并发内存。
注意：此字段可能返回 null，表示取不到有效值。
      */
  ReservedMem?: number

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 别名的版本路由配置
 */
export interface RoutingConfig {
  /**
   * 随机权重路由附加版本
   */
  AdditionalVersionWeights?: Array<VersionWeight>

  /**
   * 规则路由附加版本
   */
  AddtionVersionMatchs?: Array<VersionMatch>
}

/**
 * DeleteProvisionedConcurrencyConfig返回参数结构体
 */
export interface DeleteProvisionedConcurrencyConfigResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 带有权重的函数版本
 */
export interface VersionWeight {
  /**
   * 函数版本名称
   */
  Version: string

  /**
   * 该版本的权重
   */
  Weight: number
}

/**
 * 层版本信息
 */
export interface LayerVersionInfo {
  /**
      * 版本适用的运行时
注意：此字段可能返回 null，表示取不到有效值。
      */
  CompatibleRuntimes?: Array<string>

  /**
   * 创建时间
   */
  AddTime?: string

  /**
      * 版本描述
注意：此字段可能返回 null，表示取不到有效值。
      */
  Description?: string

  /**
      * 许可证信息
注意：此字段可能返回 null，表示取不到有效值。
      */
  LicenseInfo?: string

  /**
   * 版本号
   */
  LayerVersion: number

  /**
   * 层名称
   */
  LayerName: string

  /**
   * 层的具体版本当前状态，状态值[参考此处](https://cloud.tencent.com/document/product/583/47175#.E5.B1.82.EF.BC.88layer.EF.BC.89.E7.8A.B6.E6.80.81)
   */
  Status?: string
}

/**
 * PutProvisionedConcurrencyConfig返回参数结构体
 */
export interface PutProvisionedConcurrencyConfigResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * UpdateFunctionConfiguration返回参数结构体
 */
export interface UpdateFunctionConfigurationResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * PublishLayerVersion返回参数结构体
 */
export interface PublishLayerVersionResponse {
  /**
   * 本次创建的层的版本号
   */
  LayerVersion?: number

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 公网访问配置
 */
export interface PublicNetConfigIn {
  /**
   * 是否开启公网访问能力取值['DISABLE','ENABLE']
   */
  PublicNetStatus: string

  /**
   * Eip配置
   */
  EipConfig?: EipConfigIn
}

/**
 * DeleteReservedConcurrencyConfig返回参数结构体
 */
export interface DeleteReservedConcurrencyConfigResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * GetAlias返回参数结构体
 */
export interface GetAliasResponse {
  /**
   * 别名指向的主版本
   */
  FunctionVersion?: string

  /**
   * 别名的名称
   */
  Name?: string

  /**
   * 别名的路由信息
   */
  RoutingConfig?: RoutingConfig

  /**
      * 别名的描述
注意：此字段可能返回 null，表示取不到有效值。
      */
  Description?: string

  /**
      * 创建时间
注意：此字段可能返回 null，表示取不到有效值。
      */
  AddTime?: string

  /**
      * 更新时间
注意：此字段可能返回 null，表示取不到有效值。
      */
  ModTime?: string

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * UpdateAlias返回参数结构体
 */
export interface UpdateAliasResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 函数版本的预置并发信息，包括设置预置并发数、已完成预置的并发数和预置任务状态。
 */
export interface VersionProvisionedConcurrencyInfo {
  /**
   * 设置的预置并发数。
   */
  AllocatedProvisionedConcurrencyNum: number

  /**
   * 当前已完成预置的并发数。
   */
  AvailableProvisionedConcurrencyNum: number

  /**
   * 预置任务状态，Done表示已完成，InProgress表示进行中，Failed表示部分或全部失败。
   */
  Status: string

  /**
   * 对预置任务状态Status的说明。
   */
  StatusReason: string

  /**
   * 函数版本号
   */
  Qualifier: string
}

/**
 * GetFunctionLogs请求参数结构体
 */
export interface GetFunctionLogsRequest {
  /**
   * 函数的名称
   */
  FunctionName?: string

  /**
   * 数据的偏移量，Offset+Limit不能大于10000
   */
  Offset?: number

  /**
   * 返回数据的长度，Offset+Limit不能大于10000
   */
  Limit?: number

  /**
   * 以升序还是降序的方式对日志进行排序，可选值 desc和 asc
   */
  Order?: string

  /**
   * 根据某个字段排序日志,支持以下字段：function_name, duration, mem_usage, start_time
   */
  OrderBy?: string

  /**
   * 日志过滤条件。可用来区分正确和错误日志，filter.RetCode=not0 表示只返回错误日志，filter.RetCode=is0 表示只返回正确日志，不传，则返回所有日志
   */
  Filter?: LogFilter

  /**
   * 函数的命名空间
   */
  Namespace?: string

  /**
   * 函数的版本
   */
  Qualifier?: string

  /**
   * 执行该函数对应的requestId
   */
  FunctionRequestId?: string

  /**
   * 查询的具体日期，例如：2017-05-16 20:00:00，只能与endtime相差一天之内
   */
  StartTime?: string

  /**
   * 查询的具体日期，例如：2017-05-16 20:59:59，只能与startTime相差一天之内
   */
  EndTime?: string

  /**
   * 该字段已下线
   */
  SearchContext?: LogSearchContext
}

/**
 * 状态原因描述
 */
export interface StatusReason {
  /**
   * 错误码
   */
  ErrorCode: string

  /**
   * 错误描述
   */
  ErrorMessage: string
}

/**
 * 函数标签
 */
export interface Tag {
  /**
   * 标签的key
   */
  Key: string

  /**
   * 标签的value
   */
  Value: string
}

/**
 * 日志过滤条件，用于区分正确与错误日志
 */
export interface LogFilter {
  /**
      * filter.RetCode的取值有：
not0 表示只返回错误日志，
is0 表示只返回正确日志，
TimeLimitExceeded 返回函数调用发生超时的日志，
ResourceLimitExceeded 返回函数调用发生资源超限的日志，
UserCodeException 返回函数调用发生用户代码错误的日志，
无输入则返回所有日志。
      */
  RetCode?: string
}

/**
 * 公网访问固定ip配置
 */
export interface EipConfigIn {
  /**
   * Eip开启状态，取值['ENABLE','DISABLE']
   */
  EipStatus: string
}

/**
 * ListLayerVersions返回参数结构体
 */
export interface ListLayerVersionsResponse {
  /**
   * 层版本列表
   */
  LayerVersions?: Array<LayerVersionInfo>

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DeleteFunction请求参数结构体
 */
export interface DeleteFunctionRequest {
  /**
   * 要删除的函数名称
   */
  FunctionName: string

  /**
   * 函数所属命名空间
   */
  Namespace?: string

  /**
   * 函数版本
   */
  Qualifier?: string
}

/**
 * CopyFunction返回参数结构体
 */
export interface CopyFunctionResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 命名空间
 */
export interface Namespace {
  /**
   * 命名空间创建时间
   */
  ModTime: string

  /**
   * 命名空间修改时间
   */
  AddTime: string

  /**
   * 命名空间描述
   */
  Description: string

  /**
   * 命名空间名称
   */
  Name: string

  /**
   * 默认default，TCB表示是小程序云开发创建的
   */
  Type: string
}

/**
 * GetFunction请求参数结构体
 */
export interface GetFunctionRequest {
  /**
   * 需要获取详情的函数名称
   */
  FunctionName: string

  /**
   * 函数的版本号
   */
  Qualifier?: string

  /**
   * 函数所属命名空间
   */
  Namespace?: string

  /**
   * 是否显示代码, TRUE表示显示代码，FALSE表示不显示代码,大于1M的入口文件不会显示
   */
  ShowCode?: string
}

/**
 * ListNamespaces请求参数结构体
 */
export interface ListNamespacesRequest {
  /**
   * 返回数据长度，默认值为 20
   */
  Limit?: number

  /**
   * 数据的偏移量，默认值为 0
   */
  Offset?: number

  /**
   * 根据哪个字段进行返回结果排序,支持以下字段：Name,Updatetime
   */
  Orderby?: string

  /**
   * 以升序还是降序的方式返回结果，可选值 ASC 和 DESC
   */
  Order?: string
}

/**
 * PutReservedConcurrencyConfig返回参数结构体
 */
export interface PutReservedConcurrencyConfigResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DeleteAlias请求参数结构体
 */
export interface DeleteAliasRequest {
  /**
   * 函数名称
   */
  FunctionName: string

  /**
   * 别名的名称
   */
  Name: string

  /**
   * 函数所在的命名空间
   */
  Namespace?: string
}

/**
 * ListVersionByFunction返回参数结构体
 */
export interface ListVersionByFunctionResponse {
  /**
   * 函数版本。
   */
  FunctionVersion?: Array<string>

  /**
      * 函数版本列表。
注意：此字段可能返回 null，表示取不到有效值。
      */
  Versions?: Array<FunctionVersion>

  /**
      * 函数版本总数。
注意：此字段可能返回 null，表示取不到有效值。
      */
  TotalCount?: number

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * GetAlias请求参数结构体
 */
export interface GetAliasRequest {
  /**
   * 函数名称
   */
  FunctionName: string

  /**
   * 别名的名称
   */
  Name: string

  /**
   * 函数所在的命名空间
   */
  Namespace?: string
}

/**
 * CreateNamespace返回参数结构体
 */
export interface CreateNamespaceResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 公网访问配置
 */
export interface PublicNetConfigOut {
  /**
   * 是否开启公网访问能力取值['DISABLE','ENABLE']
   */
  PublicNetStatus: string

  /**
   * Eip配置
   */
  EipConfig: EipConfigOut
}

/**
 * UpdateFunctionCode请求参数结构体
 */
export interface UpdateFunctionCodeRequest {
  /**
   * 函数处理方法名称。名称格式支持“文件名称.函数名称”形式（java 名称格式 包名.类名::方法名），文件名称和函数名称之间以"."隔开，文件名称和函数名称要求以字母开始和结尾，中间允许插入字母、数字、下划线和连接符，文件名称和函数名字的长度要求 2-60 个字符
   */
  Handler: string

  /**
   * 要修改的函数名称
   */
  FunctionName: string

  /**
   * 对象存储桶名称
   */
  CosBucketName?: string

  /**
   * 对象存储对象路径
   */
  CosObjectName?: string

  /**
   * 包含函数代码文件及其依赖项的 zip 格式文件，使用该接口时要求将 zip 文件的内容转成 base64 编码，最大支持20M
   */
  ZipFile?: string

  /**
   * 函数所属命名空间
   */
  Namespace?: string

  /**
   * 对象存储的地域，注：北京分为ap-beijing和ap-beijing-1
   */
  CosBucketRegion?: string

  /**
   * 函数所属环境
   */
  EnvId?: string

  /**
   * 在更新时是否同步发布新版本，默认为：FALSE，不发布
   */
  Publish?: string

  /**
   * 函数代码
   */
  Code?: Code

  /**
   * 代码来源方式，支持 ZipFile, Cos, Inline 之一
   */
  CodeSource?: string
}

/**
 * UpdateFunctionConfiguration请求参数结构体
 */
export interface UpdateFunctionConfigurationRequest {
  /**
   * 要修改的函数名称
   */
  FunctionName: string

  /**
   * 函数描述。最大支持 1000 个英文字母、数字、空格、逗号和英文句号，支持中文
   */
  Description?: string

  /**
   * 函数运行时内存大小，默认为 128 M，可选范64M、128 M-3072 M，以 128MB 为阶梯。
   */
  MemorySize?: number

  /**
   * 函数最长执行时间，单位为秒，可选值范 1-900 秒，默认为 3 秒
   */
  Timeout?: number

  /**
   * 函数运行环境，目前仅支持 Python2.7，Python3.6，Nodejs6.10，Nodejs8.9，Nodejs10.15，Nodejs12.16， PHP5， PHP7，Go1 ， Java8和CustomRuntime
   */
  Runtime?: string

  /**
   * 函数的环境变量
   */
  Environment?: Environment

  /**
   * 函数所属命名空间
   */
  Namespace?: string

  /**
   * 函数的私有网络配置
   */
  VpcConfig?: VpcConfig

  /**
   * 函数绑定的角色
   */
  Role?: string

  /**
   * 日志投递到的cls日志集ID
   */
  ClsLogsetId?: string

  /**
   * 日志投递到的cls Topic ID
   */
  ClsTopicId?: string

  /**
   * 在更新时是否同步发布新版本，默认为：FALSE，不发布新版本
   */
  Publish?: string

  /**
   * 是否开启L5访问能力，TRUE 为开启，FALSE为关闭
   */
  L5Enable?: string

  /**
   * 函数要关联的层版本列表，层的版本会按照在列表中顺序依次覆盖。
   */
  Layers?: Array<LayerVersionSimple>

  /**
   * 函数关联的死信队列信息
   */
  DeadLetterConfig?: DeadLetterConfig

  /**
   * 公网访问配置
   */
  PublicNetConfig?: PublicNetConfigIn

  /**
   * 文件系统配置入参，用于云函数绑定CFS文件系统
   */
  CfsConfig?: CfsConfig

  /**
   * 函数初始化执行超时时间，默认15秒
   */
  InitTimeout?: number
}

/**
 * DeleteReservedConcurrencyConfig请求参数结构体
 */
export interface DeleteReservedConcurrencyConfigRequest {
  /**
   * 需要删除预置并发的函数的名称
   */
  FunctionName: string

  /**
   * 函数所属命名空间，默认为default
   */
  Namespace?: string
}

/**
 * ListTriggers返回参数结构体
 */
export interface ListTriggersResponse {
  /**
   * 触发器总数
   */
  TotalCount?: number

  /**
   * 触发器列表
   */
  Triggers?: Array<TriggerInfo>

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * UpdateNamespace返回参数结构体
 */
export interface UpdateNamespaceResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ListLayers请求参数结构体
 */
export interface ListLayersRequest {
  /**
   * 适配的运行时
   */
  CompatibleRuntime?: string

  /**
   * 偏移位置
   */
  Offset?: number

  /**
   * 查询数目限制
   */
  Limit?: number

  /**
   * 查询key，模糊匹配名称
   */
  SearchKey?: string
}

/**
 * CopyFunction请求参数结构体
 */
export interface CopyFunctionRequest {
  /**
   * 要复制的函数的名称
   */
  FunctionName: string

  /**
   * 新函数的名称
   */
  NewFunctionName: string

  /**
   * 要复制的函数所在的命名空间，默认为default
   */
  Namespace?: string

  /**
   * 将函数复制到的命名空间，默认为default
   */
  TargetNamespace?: string

  /**
   * 新函数的描述
   */
  Description?: string

  /**
   * 要将函数复制到的地域，不填则默认为当前地域
   */
  TargetRegion?: string

  /**
      * 如果目标Namespace下已有同名函数，是否覆盖，默认为否
（注意：如果选择覆盖，会导致同名函数被删除，请慎重操作）
TRUE：覆盖同名函数
FALSE：不覆盖同名函数
      */
  Override?: boolean

  /**
      * 是否复制函数的属性，包括环境变量、内存、超时、函数描述、标签、VPC等，默认为是。
TRUE：复制函数配置
FALSE：不复制函数配置
      */
  CopyConfiguration?: boolean
}

/**
 * DeleteNamespace返回参数结构体
 */
export interface DeleteNamespaceResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 指定某个Layer版本
 */
export interface LayerVersionSimple {
  /**
   * layer名称
   */
  LayerName: string

  /**
   * 版本号
   */
  LayerVersion: number
}

/**
 * 文件系统(cfs)配置描述
 */
export interface CfsConfig {
  /**
   * 文件系统信息列表
   */
  CfsInsList: Array<CfsInsInfo>
}

/**
 * DeleteNamespace请求参数结构体
 */
export interface DeleteNamespaceRequest {
  /**
   * 命名空间名称
   */
  Namespace: string
}

/**
 * ListFunctions请求参数结构体
 */
export interface ListFunctionsRequest {
  /**
   * 以升序还是降序的方式返回结果，可选值 ASC 和 DESC
   */
  Order?: string

  /**
   * 根据哪个字段进行返回结果排序,支持以下字段：AddTime, ModTime, FunctionName
   */
  Orderby?: string

  /**
   * 数据偏移量，默认值为 0
   */
  Offset?: number

  /**
   * 返回数据长度，默认值为 20
   */
  Limit?: number

  /**
   * 支持FunctionName模糊匹配
   */
  SearchKey?: string

  /**
   * 命名空间
   */
  Namespace?: string

  /**
   * 函数描述，支持模糊搜索
   */
  Description?: string

  /**
      * 过滤条件。
- tag:tag-key - String - 是否必填：否 - （过滤条件）按照标签键值对进行过滤。 tag-key使用具体的标签键进行替换。

每次请求的Filters的上限为10，Filter.Values的上限为5。
      */
  Filters?: Array<Filter>
}

/**
 * CreateTrigger请求参数结构体
 */
export interface CreateTriggerRequest {
  /**
   * 新建触发器绑定的函数名称
   */
  FunctionName: string

  /**
   * 新建触发器名称。如果是定时触发器，名称支持英文字母、数字、连接符和下划线，最长100个字符；如果是cos触发器，需要是对应cos存储桶适用于XML API的访问域名(例如:5401-5ff414-12345.cos.ap-shanghai.myqcloud.com);如果是其他触发器，见具体触发器绑定参数的说明
   */
  TriggerName: string

  /**
   * 触发器类型，目前支持 cos 、cmq、 timer、 ckafka、apigw类型
   */
  Type: string

  /**
   * 触发器对应的参数，可见具体[触发器描述说明](https://cloud.tencent.com/document/product/583/39901)
   */
  TriggerDesc?: string

  /**
   * 函数的命名空间
   */
  Namespace?: string

  /**
   * 函数的版本
   */
  Qualifier?: string

  /**
   * 触发器的初始是能状态 OPEN表示开启 CLOSE表示关闭
   */
  Enable?: string

  /**
   * 用户自定义参数，仅支持timer触发器
   */
  CustomArgument?: string
}

/**
 * ListLayers返回参数结构体
 */
export interface ListLayersResponse {
  /**
   * 层列表
   */
  Layers?: Array<LayerVersionInfo>

  /**
   * 层总数
   */
  TotalCount?: number

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DeleteFunction返回参数结构体
 */
export interface DeleteFunctionResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 运行函数的返回
 */
export interface Result {
  /**
   * 表示执行过程中的日志输出，异步调用返回为空
   */
  Log: string

  /**
   * 表示执行函数的返回，异步调用返回为空
   */
  RetMsg: string

  /**
   * 表示执行函数的错误返回信息，异步调用返回为空
   */
  ErrMsg: string

  /**
   * 执行函数时的内存大小，单位为Byte，异步调用返回为空
   */
  MemUsage: number

  /**
   * 表示执行函数的耗时，单位是毫秒，异步调用返回为空
   */
  Duration: number

  /**
   * 表示函数的计费耗时，单位是毫秒，异步调用返回为空
   */
  BillDuration: number

  /**
   * 此次函数执行的Id
   */
  FunctionRequestId: string

  /**
   * 0为正确，异步调用返回为空
   */
  InvokeResult: number
}

/**
 * CreateAlias返回参数结构体
 */
export interface CreateAliasResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 日志搜索上下文
 */
export interface LogSearchContext {
  /**
   * 偏移量
   */
  Offset: string

  /**
   * 日志条数
   */
  Limit: number

  /**
   * 日志关键词
   */
  Keyword?: string

  /**
   * 日志类型，支持Application和Platform，默认为Application
   */
  Type?: string
}

/**
 * 触发器信息
 */
export interface TriggerInfo {
  /**
   * 使能开关
   */
  Enable: number

  /**
   * 函数版本或别名
   */
  Qualifier: string

  /**
   * 触发器名称
   */
  TriggerName: string

  /**
   * 触发器类型
   */
  Type: string

  /**
   * 触发器详细配置
   */
  TriggerDesc: string

  /**
   * 触发器是否可用
   */
  AvailableStatus: string

  /**
      * 客户自定义参数
注意：此字段可能返回 null，表示取不到有效值。
      */
  CustomArgument: string

  /**
   * 触发器创建时间
   */
  AddTime: string

  /**
   * 触发器最后修改时间
   */
  ModTime: string

  /**
   * 触发器最小资源ID
   */
  ResourceId: string

  /**
   * 触发器和云函数绑定状态
   */
  BindStatus: string

  /**
   * 触发器类型，双向表示两侧控制台均可操作，单向表示SCF控制台单向创建
   */
  TriggerAttribute: string
}

/**
 * CreateFunction请求参数结构体
 */
export interface CreateFunctionRequest {
  /**
   * 创建的函数名称，函数名称支持26个英文字母大小写、数字、连接符和下划线，第一个字符只能以字母开头，最后一个字符不能为连接符或者下划线，名称长度2-60
   */
  FunctionName: string

  /**
   * 函数代码. 注意：不能同时指定Cos、ZipFile或 DemoId。
   */
  Code: Code

  /**
   * 函数处理方法名称，名称格式支持 "文件名称.方法名称" 形式（java 名称格式 包名.类名::方法名），文件名称和函数名称之间以"."隔开，文件名称和函数名称要求以字母开始和结尾，中间允许插入字母、数字、下划线和连接符，文件名称和函数名字的长度要求是 2-60 个字符
   */
  Handler?: string

  /**
   * 函数描述,最大支持 1000 个英文字母、数字、空格、逗号、换行符和英文句号，支持中文
   */
  Description?: string

  /**
   * 函数运行时内存大小，默认为 128M，可选范围 64、128MB-3072MB，并且以 128MB 为阶梯
   */
  MemorySize?: number

  /**
   * 函数最长执行时间，单位为秒，可选值范围 1-900 秒，默认为 3 秒
   */
  Timeout?: number

  /**
   * 函数的环境变量
   */
  Environment?: Environment

  /**
   * 函数运行环境，目前仅支持 Python2.7，Python3.6，Nodejs6.10，Nodejs8.9，Nodejs10.15，Nodejs12.16， Php5， Php7，Go1，Java8 和 CustomRuntime，默认Python2.7
   */
  Runtime?: string

  /**
   * 函数的私有网络配置
   */
  VpcConfig?: VpcConfig

  /**
   * 函数所属命名空间
   */
  Namespace?: string

  /**
   * 函数绑定的角色
   */
  Role?: string

  /**
   * 函数日志投递到的CLS LogsetID
   */
  ClsLogsetId?: string

  /**
   * 函数日志投递到的CLS TopicID
   */
  ClsTopicId?: string

  /**
   * 函数类型，默认值为Event，创建触发器函数请填写Event，创建HTTP函数级服务请填写HTTP
   */
  Type?: string

  /**
   * CodeSource 代码来源，支持ZipFile, Cos, Demo 其中之一
   */
  CodeSource?: string

  /**
   * 函数要关联的Layer版本列表，Layer会按照在列表中顺序依次覆盖。
   */
  Layers?: Array<LayerVersionSimple>

  /**
   * 死信队列参数
   */
  DeadLetterConfig?: DeadLetterConfig

  /**
   * 公网访问配置
   */
  PublicNetConfig?: PublicNetConfigIn

  /**
   * 文件系统配置参数，用于云函数挂载文件系统
   */
  CfsConfig?: CfsConfig

  /**
   * 函数初始化超时时间
   */
  InitTimeout?: number

  /**
   * 函数 Tag 参数，以键值对数组形式传入
   */
  Tags?: Array<Tag>
}

/**
 * PutTotalConcurrencyConfig返回参数结构体
 */
export interface PutTotalConcurrencyConfigResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DeleteAlias返回参数结构体
 */
export interface DeleteAliasResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * PublishVersion返回参数结构体
 */
export interface PublishVersionResponse {
  /**
   * 函数的版本
   */
  FunctionVersion?: string

  /**
   * 代码大小
   */
  CodeSize?: number

  /**
   * 最大可用内存
   */
  MemorySize?: number

  /**
   * 函数的描述
   */
  Description?: string

  /**
   * 函数的入口
   */
  Handler?: string

  /**
   * 函数的超时时间
   */
  Timeout?: number

  /**
   * 函数的运行环境
   */
  Runtime?: string

  /**
   * 函数的命名空间
   */
  Namespace?: string

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DeleteProvisionedConcurrencyConfig请求参数结构体
 */
export interface DeleteProvisionedConcurrencyConfigRequest {
  /**
   * 需要删除预置并发的函数的名称
   */
  FunctionName: string

  /**
   * 函数的版本号
   */
  Qualifier: string

  /**
   * 函数所属命名空间，默认为default
   */
  Namespace?: string
}

/**
 * 函数的环境变量参数
 */
export interface Environment {
  /**
   * 环境变量数组
   */
  Variables?: Array<Variable>
}

/**
 * GetFunctionAddress请求参数结构体
 */
export interface GetFunctionAddressRequest {
  /**
   * 函数的名称
   */
  FunctionName: string

  /**
   * 函数的版本
   */
  Qualifier?: string

  /**
   * 函数的命名空间
   */
  Namespace?: string
}

/**
 * Invoke返回参数结构体
 */
export interface InvokeResponse {
  /**
   * 函数执行结果
   */
  Result?: Result

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * Invoke请求参数结构体
 */
export interface InvokeRequest {
  /**
   * 函数名称
   */
  FunctionName: string

  /**
   * RequestResponse(同步) 和 Event(异步)，默认为同步
   */
  InvocationType?: string

  /**
   * 触发函数的版本号
   */
  Qualifier?: string

  /**
   * 运行函数时的参数，以json格式传入，最大支持的参数长度是 1M
   */
  ClientContext?: string

  /**
   * 同步调用时指定该字段，返回值会包含4K的日志，可选值为None和Tail，默认值为None。当该值为Tail时，返回参数中的logMsg字段会包含对应的函数执行日志
   */
  LogType?: string

  /**
   * 命名空间
   */
  Namespace?: string

  /**
   * 函数灰度流量控制调用，以json格式传入，例如{"k":"v"}，注意kv都需要是字符串类型，最大支持的参数长度是1024字节
   */
  RoutingKey?: string
}

/**
 * CreateAlias请求参数结构体
 */
export interface CreateAliasRequest {
  /**
   * 别名的名称，在函数级别中唯一，只能包含字母、数字、'_'和‘-’，且必须以字母开头，长度限制为1-64
   */
  Name: string

  /**
   * 函数名称
   */
  FunctionName: string

  /**
   * 别名指向的主版本
   */
  FunctionVersion: string

  /**
   * 函数所在的命名空间
   */
  Namespace?: string

  /**
   * 别名的请求路由配置
   */
  RoutingConfig?: RoutingConfig

  /**
   * 别名的描述信息
   */
  Description?: string
}

/**
 * 带有匹配规则的函数版本
 */
export interface VersionMatch {
  /**
   * 函数版本名称
   */
  Version: string

  /**
      * 匹配规则的key，调用时通过传key来匹配规则路由到指定版本
header方式：
key填写"invoke.headers.User"，并在 invoke 调用函数时传参 RoutingKey：{"User":"value"}规则匹配调用
      */
  Key: string

  /**
      * 匹配方式。取值范围：
range：范围匹配
exact：字符串精确匹配
      */
  Method: string

  /**
      * range 匹配规则要求：
需要为开区间或闭区间描述 (a,b) [a,b]，其中 a、b 均为整数
exact 匹配规则要求：
字符串精确匹配
      */
  Expression: string
}

/**
 * PutReservedConcurrencyConfig请求参数结构体
 */
export interface PutReservedConcurrencyConfigRequest {
  /**
   * 需要设置预置并发的函数的名称
   */
  FunctionName: string

  /**
   * 函数保留并发内存，注：函数的保留并发内存总和上限：用户总并发内存配额 - 12800
   */
  ReservedConcurrencyMem: number

  /**
   * 函数所属命名空间，默认为default
   */
  Namespace?: string
}

/**
 * ListLayerVersions请求参数结构体
 */
export interface ListLayerVersionsRequest {
  /**
   * 层名称
   */
  LayerName: string

  /**
   * 适配的运行时
   */
  CompatibleRuntime?: Array<string>
}

/**
 * CreateTrigger返回参数结构体
 */
export interface CreateTriggerResponse {
  /**
   * 触发器信息
   */
  TriggerInfo?: Trigger

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * PublishLayerVersion请求参数结构体
 */
export interface PublishLayerVersionRequest {
  /**
   * 层名称，支持26个英文字母大小写、数字、连接符和下划线，第一个字符只能以字母开头，最后一个字符不能为连接符或者下划线，名称长度1-64
   */
  LayerName: string

  /**
   * 层适用的运行时，可多选，可选的值对应函数的 Runtime 可选值。
   */
  CompatibleRuntimes: Array<string>

  /**
   * 层的文件来源或文件内容
   */
  Content: Code

  /**
   * 层的版本的描述
   */
  Description?: string

  /**
   * 层的软件许可证
   */
  LicenseInfo?: string
}

/**
 * CreateNamespace请求参数结构体
 */
export interface CreateNamespaceRequest {
  /**
   * 命名空间名称
   */
  Namespace: string

  /**
   * 命名空间描述
   */
  Description?: string
}

/**
 * DeleteLayerVersion请求参数结构体
 */
export interface DeleteLayerVersionRequest {
  /**
   * 层名称
   */
  LayerName: string

  /**
   * 版本号
   */
  LayerVersion: number
}

/**
 * 描述键值对过滤器，用于条件过滤查询。例如过滤ID、名称、状态等
若存在多个Filter时，Filter间的关系为逻辑与（AND）关系。
若同一个Filter存在多个Values，同一Filter下Values间的关系为逻辑或（OR）关系。
 */
export interface Filter {
  /**
   * 需要过滤的字段。
   */
  Name: string

  /**
   * 字段的过滤值。
   */
  Values: Array<string>
}

/**
 * 变量参数
 */
export interface Variable {
  /**
   * 变量的名称
   */
  Key?: string

  /**
   * 变量的值
   */
  Value?: string
}

/**
 * GetFunction返回参数结构体
 */
export interface GetFunctionResponse {
  /**
   * 函数的最后修改时间
   */
  ModTime?: string

  /**
   * 函数的代码
   */
  CodeInfo?: string

  /**
   * 函数的描述信息
   */
  Description?: string

  /**
   * 函数的触发器列表
   */
  Triggers?: Array<Trigger>

  /**
   * 函数的入口
   */
  Handler?: string

  /**
   * 函数代码大小
   */
  CodeSize?: number

  /**
   * 函数的超时时间
   */
  Timeout?: number

  /**
   * 函数的版本
   */
  FunctionVersion?: string

  /**
   * 函数的最大可用内存
   */
  MemorySize?: number

  /**
   * 函数的运行环境
   */
  Runtime?: string

  /**
   * 函数的名称
   */
  FunctionName?: string

  /**
   * 函数的私有网络
   */
  VpcConfig?: VpcConfig

  /**
   * 是否使用GPU
   */
  UseGpu?: string

  /**
   * 函数的环境变量
   */
  Environment?: Environment

  /**
   * 代码是否正确
   */
  CodeResult?: string

  /**
   * 代码错误信息
   */
  CodeError?: string

  /**
   * 代码错误码
   */
  ErrNo?: number

  /**
   * 函数的命名空间
   */
  Namespace?: string

  /**
   * 函数绑定的角色
   */
  Role?: string

  /**
   * 是否自动安装依赖
   */
  InstallDependency?: string

  /**
   * 函数状态，状态值及流转[参考说明](https://cloud.tencent.com/document/product/583/47175)
   */
  Status?: string

  /**
   * 状态描述
   */
  StatusDesc?: string

  /**
   * 日志投递到的Cls日志集
   */
  ClsLogsetId?: string

  /**
   * 日志投递到的Cls Topic
   */
  ClsTopicId?: string

  /**
   * 函数ID
   */
  FunctionId?: string

  /**
   * 函数的标签列表
   */
  Tags?: Array<Tag>

  /**
   * EipConfig配置
   */
  EipConfig?: EipOutConfig

  /**
   * 域名信息
   */
  AccessInfo?: AccessInfo

  /**
   * 函数类型，取值为HTTP或者Event
   */
  Type?: string

  /**
   * 是否启用L5
   */
  L5Enable?: string

  /**
   * 函数关联的Layer版本信息
   */
  Layers?: Array<LayerVersionInfo>

  /**
   * 函数关联的死信队列信息
   */
  DeadLetterConfig?: DeadLetterConfig

  /**
   * 函数创建回见
   */
  AddTime?: string

  /**
      * 公网访问配置
注意：此字段可能返回 null，表示取不到有效值。
      */
  PublicNetConfig?: PublicNetConfigOut

  /**
      * 是否启用Ons
注意：此字段可能返回 null，表示取不到有效值。
      */
  OnsEnable?: string

  /**
      * 文件系统配置参数，用于云函数挂载文件系统
注意：此字段可能返回 null，表示取不到有效值。
      */
  CfsConfig?: CfsConfig

  /**
      * 函数的计费状态，状态值[参考此处](https://cloud.tencent.com/document/product/583/47175#.E5.87.BD.E6.95.B0.E8.AE.A1.E8.B4.B9.E7.8A.B6.E6.80.81)
注意：此字段可能返回 null，表示取不到有效值。
      */
  AvailableStatus?: string

  /**
      * 函数版本
注意：此字段可能返回 null，表示取不到有效值。
      */
  Qualifier?: string

  /**
   * 函数初始化超时时间
   */
  InitTimeout?: number

  /**
      * 函数状态失败原因
注意：此字段可能返回 null，表示取不到有效值。
      */
  StatusReasons?: Array<StatusReason>

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 函数代码
 */
export interface Code {
  /**
   * 对象存储桶名称
   */
  CosBucketName?: string

  /**
   * 对象存储对象路径
   */
  CosObjectName?: string

  /**
   * 包含函数代码文件及其依赖项的 zip 格式文件，使用该接口时要求将 zip 文件的内容转成 base64 编码，最大支持20M
   */
  ZipFile?: string

  /**
   * 对象存储的地域，地域为北京时需要传入ap-beijing,北京一区时需要传递ap-beijing-1，其他的地域不需要传递。
   */
  CosBucketRegion?: string

  /**
   * 如果是通过Demo创建的话，需要传入DemoId
   */
  DemoId?: string

  /**
   * 如果是从TempCos创建的话，需要传入TempCosObjectName
   */
  TempCosObjectName?: string

  /**
   * Git地址
   */
  GitUrl?: string

  /**
   * Git用户名
   */
  GitUserName?: string

  /**
   * Git密码
   */
  GitPassword?: string

  /**
   * 加密后的Git密码，一般无需指定
   */
  GitPasswordSecret?: string

  /**
   * Git分支
   */
  GitBranch?: string

  /**
   * 代码在Git仓库中的路径
   */
  GitDirectory?: string

  /**
   * 指定要拉取的版本
   */
  GitCommitId?: string

  /**
   * 加密后的Git用户名，一般无需指定
   */
  GitUserNameSecret?: string
}

/**
 * PutTotalConcurrencyConfig请求参数结构体
 */
export interface PutTotalConcurrencyConfigRequest {
  /**
   * 账号并发内存配额，注：账号并发内存配额下限：用户已用并发内存总额 + 12800
   */
  TotalConcurrencyMem: number

  /**
   * 命名空间，默认为default
   */
  Namespace?: string
}

/**
 * UpdateNamespace请求参数结构体
 */
export interface UpdateNamespaceRequest {
  /**
   * 命名空间名称
   */
  Namespace: string

  /**
   * 命名空间描述
   */
  Description: string
}

/**
 * GetLayerVersion返回参数结构体
 */
export interface GetLayerVersionResponse {
  /**
   * 适配的运行时
   */
  CompatibleRuntimes?: Array<string>

  /**
   * 层中版本文件的SHA256编码
   */
  CodeSha256?: string

  /**
   * 层中版本文件的下载地址
   */
  Location?: string

  /**
   * 版本的创建时间
   */
  AddTime?: string

  /**
   * 版本的描述
   */
  Description?: string

  /**
   * 许可证信息
   */
  LicenseInfo?: string

  /**
   * 版本号
   */
  LayerVersion?: number

  /**
   * 层名称
   */
  LayerName?: string

  /**
      * 层的具体版本当前状态，可能取值：
Active 正常
Publishing  发布中
PublishFailed  发布失败
Deleted 已删除
      */
  Status?: string

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * PublishVersion请求参数结构体
 */
export interface PublishVersionRequest {
  /**
   * 发布函数的名称
   */
  FunctionName: string

  /**
   * 函数的描述
   */
  Description?: string

  /**
   * 函数的命名空间
   */
  Namespace?: string
}

/**
 * 日志信息
 */
export interface FunctionLog {
  /**
   * 函数的名称
   */
  FunctionName: string

  /**
   * 函数执行完成后的返回值
   */
  RetMsg: string

  /**
   * 执行该函数对应的requestId
   */
  RequestId: string

  /**
   * 函数开始执行时的时间点
   */
  StartTime: string

  /**
   * 函数执行结果，如果是 0 表示执行成功，其他值表示失败
   */
  RetCode: number

  /**
   * 函数调用是否结束，如果是 1 表示执行结束，其他值表示调用异常
   */
  InvokeFinished: number

  /**
   * 函数执行耗时，单位为 ms
   */
  Duration: number

  /**
   * 函数计费时间，根据 duration 向上取最近的 100ms，单位为ms
   */
  BillDuration: number

  /**
   * 函数执行时消耗实际内存大小，单位为 Byte
   */
  MemUsage: number

  /**
   * 函数执行过程中的日志输出
   */
  Log: string

  /**
   * 日志等级
   */
  Level: string

  /**
   * 日志来源
   */
  Source: string

  /**
   * 重试次数
   */
  RetryNum: number
}

/**
 * GetFunctionAddress返回参数结构体
 */
export interface GetFunctionAddressResponse {
  /**
   * 函数的Cos地址
   */
  Url?: string

  /**
   * 函数的SHA256编码
   */
  CodeSha256?: string

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 云函数关联的cfs配置信息
 */
export interface CfsInsInfo {
  /**
   * 用户id
   */
  UserId: string

  /**
   * 用户组id
   */
  UserGroupId: string

  /**
   * 文件系统实例id
   */
  CfsId: string

  /**
   * 文件系统挂载点id
   */
  MountInsId: string

  /**
   * 本地挂载点
   */
  LocalMountDir: string

  /**
   * 远程挂载点
   */
  RemoteMountDir: string

  /**
      * 文件系统ip，配置 cfs 时无需填写。
注意：此字段可能返回 null，表示取不到有效值。
注意：此字段可能返回 null，表示取不到有效值。
      */
  IpAddress?: string

  /**
      * 文件系统所在的私有网络id，配置 cfs 时无需填写。
注意：此字段可能返回 null，表示取不到有效值。
注意：此字段可能返回 null，表示取不到有效值。
      */
  MountVpcId?: string

  /**
      * 文件系统所在私有网络的子网id，配置 cfs 时无需填写。
注意：此字段可能返回 null，表示取不到有效值。
注意：此字段可能返回 null，表示取不到有效值。
      */
  MountSubnetId?: string
}

/**
 * 函数版本信息
 */
export interface FunctionVersion {
  /**
   * 函数版本名称
   */
  Version: string

  /**
      * 版本描述信息
注意：此字段可能返回 null，表示取不到有效值。
      */
  Description?: string

  /**
      * 创建时间
注意：此字段可能返回 null，表示取不到有效值。
      */
  AddTime?: string

  /**
      * 更新时间
注意：此字段可能返回 null，表示取不到有效值。
      */
  ModTime?: string
}

/**
 * 函数列表
 */
export interface Function {
  /**
   * 修改时间
   */
  ModTime: string

  /**
   * 创建时间
   */
  AddTime: string

  /**
   * 运行时
   */
  Runtime: string

  /**
   * 函数名称
   */
  FunctionName: string

  /**
   * 函数ID
   */
  FunctionId: string

  /**
   * 命名空间
   */
  Namespace: string

  /**
   * 函数状态，状态值及流转[参考此处](https://cloud.tencent.com/document/product/583/47175)
   */
  Status: string

  /**
   * 函数状态详情
   */
  StatusDesc: string

  /**
   * 函数描述
   */
  Description: string

  /**
   * 函数标签
   */
  Tags: Array<Tag>

  /**
   * 函数类型，取值为 HTTP 或者 Event
   */
  Type: string

  /**
   * 函数状态失败原因
   */
  StatusReasons: Array<StatusReason>

  /**
      * 函数所有版本预置并发内存总和
注意：此字段可能返回 null，表示取不到有效值。
      */
  TotalProvisionedConcurrencyMem: number

  /**
      * 函数并发保留内存
注意：此字段可能返回 null，表示取不到有效值。
      */
  ReservedConcurrencyMem: number
}

/**
 * 死信队列参数
 */
export interface DeadLetterConfig {
  /**
   * 死信队列模式
   */
  Type: string

  /**
   * 死信队列名称
   */
  Name: string

  /**
   * 死信队列主题模式的标签形式
   */
  FilterType?: string
}

/**
 * ListVersionByFunction请求参数结构体
 */
export interface ListVersionByFunctionRequest {
  /**
   * 函数名
   */
  FunctionName: string

  /**
   * 函数所在命名空间
   */
  Namespace?: string

  /**
   * 数据偏移量，默认值为 0
   */
  Offset?: number

  /**
   * 返回数据长度，默认值为 20
   */
  Limit?: number

  /**
   * 以升序还是降序的方式返回结果，可选值 ASC 和 DESC
   */
  Order?: string

  /**
   * 根据哪个字段进行返回结果排序,支持以下字段：AddTime, ModTime
   */
  OrderBy?: string
}

/**
 * ListFunctions返回参数结构体
 */
export interface ListFunctionsResponse {
  /**
   * 函数列表
   */
  Functions?: Array<Function>

  /**
   * 总数
   */
  TotalCount?: number

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ListTriggers请求参数结构体
 */
export interface ListTriggersRequest {
  /**
   * 函数名称
   */
  FunctionName: string

  /**
   * 命名空间，默认是default
   */
  Namespace?: string

  /**
   * 数据偏移量，默认值为 0
   */
  Offset?: number

  /**
   * 返回数据长度，默认值为 20
   */
  Limit?: number

  /**
   * 根据哪个字段进行返回结果排序,支持以下字段：AddTime, ModTime，默认ModTime
   */
  OrderBy?: string

  /**
   * 以升序还是降序的方式返回结果，可选值 ASC 和 DESC，默认DESC
   */
  Order?: string

  /**
      * * Qualifier:
函数版本，别名
      */
  Filters?: Array<Filter>
}

/**
 * CreateFunction返回参数结构体
 */
export interface CreateFunctionResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * GetReservedConcurrencyConfig请求参数结构体
 */
export interface GetReservedConcurrencyConfigRequest {
  /**
   * 需要获取预置并发详情的函数名称。
   */
  FunctionName: string

  /**
   * 函数所在的命名空间，默认为default。
   */
  Namespace?: string
}

/**
 * PutProvisionedConcurrencyConfig请求参数结构体
 */
export interface PutProvisionedConcurrencyConfigRequest {
  /**
   * 需要设置预置并发的函数的名称
   */
  FunctionName: string

  /**
   * 函数的版本号，注：$LATEST版本不支持预置并发
   */
  Qualifier: string

  /**
   * 预置并发数量，注：所有版本的预置并发数总和存在上限限制，当前的上限是：函数最大并发配额 - 100
   */
  VersionProvisionedConcurrencyNum: number

  /**
   * 函数所属命名空间，默认为default
   */
  Namespace?: string
}

/**
 * ListAliases请求参数结构体
 */
export interface ListAliasesRequest {
  /**
   * 函数名称
   */
  FunctionName: string

  /**
   * 函数所在的命名空间
   */
  Namespace?: string

  /**
   * 如果提供此参数，则只返回与该函数版本有关联的别名
   */
  FunctionVersion?: string

  /**
   * 数据偏移量，默认值为 0
   */
  Offset?: string

  /**
   * 返回数据长度，默认值为 20
   */
  Limit?: string
}

/**
 * EipOutConfig
 */
export interface EipOutConfig {
  /**
   * 是否是固定IP，["TRUE","FALSE"]
   */
  EipFixed: string

  /**
   * IP列表
   */
  Eips: Array<string>
}

/**
 * 函数的版本别名
 */
export interface Alias {
  /**
   * 别名指向的主版本
   */
  FunctionVersion: string

  /**
   * 别名的名称
   */
  Name: string

  /**
      * 别名的路由信息
注意：此字段可能返回 null，表示取不到有效值。
      */
  RoutingConfig: RoutingConfig

  /**
      * 描述信息
注意：此字段可能返回 null，表示取不到有效值。
      */
  Description?: string

  /**
      * 创建时间
注意：此字段可能返回 null，表示取不到有效值。
      */
  AddTime?: string

  /**
      * 更新时间
注意：此字段可能返回 null，表示取不到有效值。
      */
  ModTime?: string
}

/**
 * GetLayerVersion请求参数结构体
 */
export interface GetLayerVersionRequest {
  /**
   * 层名称
   */
  LayerName: string

  /**
   * 版本号
   */
  LayerVersion: number
}

/**
 * GetFunctionLogs返回参数结构体
 */
export interface GetFunctionLogsResponse {
  /**
   * 函数日志的总数
   */
  TotalCount?: number

  /**
   * 函数日志信息
   */
  Data?: Array<FunctionLog>

  /**
   * 该字段已下线
   */
  SearchContext?: LogSearchContext

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DeleteTrigger返回参数结构体
 */
export interface DeleteTriggerResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DeleteTrigger请求参数结构体
 */
export interface DeleteTriggerRequest {
  /**
   * 函数的名称
   */
  FunctionName: string

  /**
   * 要删除的触发器名称
   */
  TriggerName: string

  /**
   * 要删除的触发器类型，目前支持 cos 、cmq、 timer、ckafka 类型
   */
  Type: string

  /**
   * 函数所属命名空间
   */
  Namespace?: string

  /**
   * 如果删除的触发器类型为 COS 触发器，该字段为必填值，存放 JSON 格式的数据 {"event":"cos:ObjectCreated:*"}，数据内容和 SetTrigger 接口中该字段的格式相同；如果删除的触发器类型为定时触发器或 CMQ 触发器，可以不指定该字段
   */
  TriggerDesc?: string

  /**
   * 函数的版本信息
   */
  Qualifier?: string
}

/**
 * 私有网络参数配置
 */
export interface VpcConfig {
  /**
   * 私有网络 的 Id
   */
  VpcId?: string

  /**
   * 子网的 Id
   */
  SubnetId?: string
}

/**
 * GetProvisionedConcurrencyConfig返回参数结构体
 */
export interface GetProvisionedConcurrencyConfigResponse {
  /**
   * 该函数剩余可配置的预置并发数。
   */
  UnallocatedConcurrencyNum?: number

  /**
   * 函数已预置的并发配置详情。
   */
  Allocated?: Array<VersionProvisionedConcurrencyInfo>

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ListNamespaces返回参数结构体
 */
export interface ListNamespacesResponse {
  /**
   * namespace详情
   */
  Namespaces?: Array<Namespace>

  /**
   * 返回的namespace数量
   */
  TotalCount?: number

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 公网访问固定ip配置
 */
export interface EipConfigOut {
  /**
   * 是否是固定IP，["ENABLE","DISABLE"]
   */
  EipStatus: string

  /**
      * IP列表
注意：此字段可能返回 null，表示取不到有效值。
      */
  EipAddress: Array<string>
}

/**
 * UpdateFunctionCode返回参数结构体
 */
export interface UpdateFunctionCodeResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}
