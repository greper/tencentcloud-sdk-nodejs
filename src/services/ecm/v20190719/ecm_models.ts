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
 * IP直通相关的信息
 */
export interface RunEIPDirectServiceEnabled {
  /**
      * 是否开通IP直通。取值范围：
TRUE：表示开通IP直通
FALSE：表示不开通IP直通
默认取值：TRUE。
windows镜像目前不支持IP直通。
      */
  Enabled?: boolean
}

/**
 * DescribeTaskResult返回参数结构体
 */
export interface DescribeTaskResultResponse {
  /**
   * 异步任务ID。
   */
  TaskId?: string

  /**
   * 执行结果，包括"SUCCESS", "FAILED", "RUNNING"
   */
  Result?: string

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * IPv6地址信息。
 */
export interface Ipv6Address {
  /**
   * IPv6地址，形如：3402:4e00:20:100:0:8cd9:2a67:71f3
   */
  Address: string

  /**
   * 是否是主IP。
   */
  Primary?: boolean

  /**
   * EIP实例ID，形如：eip-hxlqja90。
   */
  AddressId?: string

  /**
   * 描述信息。
   */
  Description?: string

  /**
   * 公网IP是否被封堵。
   */
  IsWanIpBlocked?: boolean

  /**
      * IPv6地址状态：
PENDING：生产中
MIGRATING：迁移中
DELETING：删除中
AVAILABLE：可用的
      */
  State?: string
}

/**
 * BatchDeregisterTargets返回参数结构体
 */
export interface BatchDeregisterTargetsResponse {
  /**
      * 解绑失败的监听器ID
注意：此字段可能返回 null，表示取不到有效值。
      */
  FailListenerIdSet?: Array<string>

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribePeakBaseOverview请求参数结构体
 */
export interface DescribePeakBaseOverviewRequest {
  /**
   * 开始时间（xxxx-xx-xx）如2019-08-14，默认为一周之前的日期，不应与当前日期间隔超过90天。
   */
  StartTime?: string

  /**
   * 结束时间（xxxx-xx-xx）如2019-08-14，默认为昨天，不应与当前日期间隔超过90天。当开始与结束间隔不超过30天时返回1小时粒度的数据，否则返回3小时粒度的数据。
   */
  EndTime?: string
}

/**
 * 安全组关联的资源统计
 */
export interface SecurityGroupAssociationStatistics {
  /**
   * 安全组实例ID。
   */
  SecurityGroupId: string

  /**
   * ECM实例数。
   */
  ECM: number

  /**
   * ECM模块数。
   */
  Module: number

  /**
   * 弹性网卡实例数。
   */
  ENI: number

  /**
   * 被安全组引用数。
   */
  SG: number

  /**
   * 负载均衡实例数。
   */
  CLB: number

  /**
   * 全量实例的绑定统计。
   */
  InstanceStatistics: Array<InstanceStatistic>

  /**
   * 所有资源的总计数（不包含被安全组引用数）。
   */
  TotalCount: number
}

/**
 * 用户安全组配额限制
 */
export interface SecurityGroupLimitSet {
  /**
   * 可创建安全组总数
   */
  SecurityGroupLimit: number

  /**
   * 安全组下的最大规则数
   */
  SecurityGroupPolicyLimit: number

  /**
   * 安全组下嵌套安全组规则数
   */
  ReferedSecurityGroupLimit: number

  /**
   * 单安全组关联实例数
   */
  SecurityGroupInstanceLimit: number

  /**
   * 实例关联安全组数
   */
  InstanceSecurityGroupLimit: number

  /**
   * 单安全组关联的模块数
   */
  SecurityGroupModuleLimit: number

  /**
   * 模块关联的安全组数
   */
  ModuleSecurityGroupLimit: number
}

/**
 * DisassociateAddress返回参数结构体
 */
export interface DisassociateAddressResponse {
  /**
   * 异步任务TaskId。可以使用DescribeTaskResult接口查询任务状态。
   */
  TaskId?: string

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * BatchModifyTargetWeight返回参数结构体
 */
export interface BatchModifyTargetWeightResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 用于描述实例的统计信息
 */
export interface InstanceStatistic {
  /**
   * 实例的类型
   */
  InstanceType: string

  /**
   * 实例的个数
   */
  InstanceCount: number
}

/**
 * CreateRoutes请求参数结构体
 */
export interface CreateRoutesRequest {
  /**
   * 路由表实例ID。
   */
  RouteTableId: string

  /**
   * 要创建的路由策略对象。
   */
  Routes: Array<Route>
}

/**
 * CreateLoadBalancer请求参数结构体
 */
export interface CreateLoadBalancerRequest {
  /**
   * 区域。
   */
  EcmRegion: string

  /**
   * 负载均衡实例的网络类型。目前只支持传入OPEN，表示公网属性。
   */
  LoadBalancerType: string

  /**
   * CMCC | CTCC | CUCC，分别对应 移动 | 电信 | 联通。
   */
  VipIsp: string

  /**
      * 负载均衡实例的名称，只在创建一个实例的时候才会生效。规则：1-50 个英文、汉字、数字、连接线“-”或下划线“_”。
注意：如果名称与系统中已有负载均衡实例的名称相同，则系统将会自动生成此次创建的负载均衡实例的名称。
      */
  LoadBalancerName?: string

  /**
   * 负载均衡后端目标设备所属的网络 ID，如vpc-12345678。
   */
  VpcId?: string

  /**
   * 创建负载均衡的个数，默认值 1。
   */
  Number?: number

  /**
   * 负载均衡的带宽限制等信息。
   */
  InternetAccessible?: LoadBalancerInternetAccessible

  /**
   * 标签。
   */
  Tags?: Array<TagInfo>
}

/**
 * DescribeHaVips返回参数结构体
 */
export interface DescribeHaVipsResponse {
  /**
   * 符合条件的对象数。
   */
  TotalCount?: number

  /**
      * HAVIP对象数组。
注意：此字段可能返回 null，表示取不到有效值。
      */
  HaVipSet?: Array<HaVip>

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyModuleSecurityGroups请求参数结构体
 */
export interface ModifyModuleSecurityGroupsRequest {
  /**
   * 安全组列表。不超过5个。
   */
  SecurityGroupIdSet: Array<string>

  /**
   * 模块id。
   */
  ModuleId: string
}

/**
 * 实例的网络相关信息。
 */
export interface Internet {
  /**
      * 实例的内网相关信息列表。
注意：此字段可能返回 null，表示取不到有效值。
      */
  PrivateIPAddressSet: Array<PrivateIPAddressInfo>

  /**
      * 实例的公网相关信息列表。
注意：此字段可能返回 null，表示取不到有效值。
      */
  PublicIPAddressSet: Array<PublicIPAddressInfo>

  /**
      * 实例网络相关信息。
注意：此字段可能返回 null，表示取不到有效值。
      */
  InstanceNetworkInfoSet: Array<InstanceNetworkInfo>
}

/**
 * DescribeModule返回参数结构体
 */
export interface DescribeModuleResponse {
  /**
      * 符合条件的模块数量。
注意：此字段可能返回 null，表示取不到有效值。
      */
  TotalCount?: number

  /**
      * 模块详情信息的列表。
注意：此字段可能返回 null，表示取不到有效值。
      */
  ModuleItemSet?: Array<ModuleItem>

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyLoadBalancerAttributes请求参数结构体
 */
export interface ModifyLoadBalancerAttributesRequest {
  /**
   * 负载均衡的唯一ID
   */
  LoadBalancerId: string

  /**
   * 负载均衡实例名称
   */
  LoadBalancerName?: string

  /**
   * 网络计费及带宽相关参数
   */
  InternetChargeInfo?: LoadBalancerInternetAccessible
}

/**
 * DeleteSecurityGroupPolicies请求参数结构体
 */
export interface DeleteSecurityGroupPoliciesRequest {
  /**
   * 安全组实例ID，例如esg-33ocnj9n，可通过DescribeSecurityGroups获取。
   */
  SecurityGroupId: string

  /**
   * 安全组规则集合。一个请求中只能删除单个方向的一条或多条规则。支持指定索引（PolicyIndex） 匹配删除和安全组规则匹配删除两种方式，一个请求中只能使用一种匹配方式。
   */
  SecurityGroupPolicySet: SecurityGroupPolicySet
}

/**
 * 镜像任务
 */
export interface ImageTask {
  /**
   * 镜像导入状态， PENDING, PROCESSING, SUCCESS, FAILED
   */
  State: string

  /**
      * 导入失败(FAILED)时， 说明失败原因
注意：此字段可能返回 null，表示取不到有效值。
      */
  Message: string

  /**
   * 镜像名称
   */
  ImageName: string

  /**
   * 创建时间
   */
  CreateTime: string
}

/**
 * 省份信息
 */
export interface Province {
  /**
   * 省份Id
   */
  ProvinceId: string

  /**
   * 省份名称
   */
  ProvinceName: string
}

/**
 * ImportCustomImage返回参数结构体
 */
export interface ImportCustomImageResponse {
  /**
   * 镜像ID
   */
  ImageId?: string

  /**
   * 异步任务ID，可根据DescribeCustomImageTask查询任务信息
   */
  TaskId?: number

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyModuleConfig返回参数结构体
 */
export interface ModifyModuleConfigResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 网络硬盘上下限数据
 */
export interface NetworkStorageRange {
  /**
   * 网络带宽上限
   */
  MaxBandwidth: number

  /**
   * 数据盘上限
   */
  MaxSystemDiskSize: number

  /**
   * 网络带宽下限
   */
  MinBandwidth: number

  /**
   * 数据盘下限
   */
  MinSystemDiskSize: number

  /**
   * 最大数据盘大小
   */
  MaxDataDiskSize: number

  /**
   * 最小数据盘大小
   */
  MinDataDiskSize: number

  /**
   * 建议带宽
   */
  SuggestBandwidth: number

  /**
   * 建议硬盘大小
   */
  SuggestDataDiskSize: number

  /**
   * 建议系统盘大小
   */
  SuggestSystemDiskSize: number

  /**
   * Cpu核数峰值
   */
  MaxVcpu: number

  /**
   * Cpu核最小值
   */
  MinVcpu: number

  /**
   * 单次请求最大cpu核数
   */
  MaxVcpuPerReq: number

  /**
   * 带宽步长
   */
  PerBandwidth: number

  /**
   * 数据盘步长
   */
  PerDataDisk: number

  /**
   * 总模块数量
   */
  MaxModuleNum: number
}

/**
 * ModifyModuleName返回参数结构体
 */
export interface ModifyModuleNameResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeNetworkInterfaces请求参数结构体
 */
export interface DescribeNetworkInterfacesRequest {
  /**
   * 弹性网卡实例ID查询。形如：eni-pxir56ns。每次请求的实例的上限为100。参数不支持同时指定NetworkInterfaceIds和Filters。
   */
  NetworkInterfaceIds?: Array<string>

  /**
      * 过滤条件，参数不支持同时指定NetworkInterfaceIds和Filters。
vpc-id - String - （过滤条件）VPC实例ID，形如：vpc-f49l6u0z。
subnet-id - String - （过滤条件）所属子网实例ID，形如：subnet-f49l6u0z。
network-interface-id - String - （过滤条件）弹性网卡实例ID，形如：eni-5k56k7k7。
attachment.instance-id - String - （过滤条件）绑定的云服务器实例ID，形如：ins-3nqpdn3i。
groups.security-group-id - String - （过滤条件）绑定的安全组实例ID，例如：sg-f9ekbxeq。
network-interface-name - String - （过滤条件）网卡实例名称。
network-interface-description - String - （过滤条件）网卡实例描述。
address-ip - String - （过滤条件）内网IPv4地址。
tag-key - String -是否必填：否- （过滤条件）按照标签键进行过滤。使用请参考示例2
tag:tag-key - String - 是否必填：否 - （过滤条件）按照标签键值对进行过滤。 tag-key使用具体的标签键进行替换。使用请参考示例3。
is-primary - Boolean - 是否必填：否 - （过滤条件）按照是否主网卡进行过滤。值为true时，仅过滤主网卡；值为false时，仅过滤辅助网卡；次过滤参数为提供时，同时过滤主网卡和辅助网卡。
      */
  Filters?: Array<Filter>

  /**
   * 偏移量，默认为0。
   */
  Offset?: number

  /**
   * 返回数量，默认为20，最大值为100。
   */
  Limit?: number

  /**
   * ECM 地域
   */
  EcmRegion?: string
}

/**
 * DescribeSubnets请求参数结构体
 */
export interface DescribeSubnetsRequest {
  /**
   * 子网实例ID查询。形如：subnet-pxir56ns。每次请求的实例的上限为100。参数不支持同时指定SubnetIds和Filters。
   */
  SubnetIds?: Array<string>

  /**
      * 过滤条件，参数不支持同时指定SubnetIds和Filters。
subnet-id - String - Subnet实例名称。
subnet-name - String - 子网名称。只支持单值的模糊查询。
cidr-block - String - 子网网段，形如: 192.168.1.0 。只支持单值的模糊查询。
vpc-id - String - VPC实例ID，形如：vpc-f49l6u0z。
vpc-cidr-block  - String - vpc网段，形如: 192.168.1.0 。只支持单值的模糊查询。
region - String - ECM地域
zone - String - 可用区。
tag-key - String -是否必填：否- 按照标签键进行过滤。
tag:tag-key - String - 是否必填：否 - 按照标签键值对进行过滤。
      */
  Filters?: Array<Filter>

  /**
   * 偏移量
   */
  Offset?: string

  /**
   * 返回数量
   */
  Limit?: string

  /**
   * ECM 地域
   */
  EcmRegion?: string

  /**
   * 排序方式：time时间倒序, default按照网络规划排序
   */
  Sort?: string
}

/**
 * AssociateSecurityGroups请求参数结构体
 */
export interface AssociateSecurityGroupsRequest {
  /**
   * 要绑定的安全组ID，类似esg-efil73jd，只支持绑定单个安全组。
   */
  SecurityGroupIds: Array<string>

  /**
   * 被绑定的实例ID，类似ein-lesecurk，支持指定多个实例，每次请求批量实例的上限为100。
   */
  InstanceIds: Array<string>
}

/**
 * StartInstances请求参数结构体
 */
export interface StartInstancesRequest {
  /**
   * 待开启的实例ID列表。在单次请求的过程中，单个region下的请求实例数上限为100。
   */
  InstanceIdSet: Array<string>
}

/**
 * HAVIP对象。
 */
export interface HaVip {
  /**
   * HAVIP的ID，是HAVIP的唯一标识。
   */
  HaVipId: string

  /**
      * HAVIP名称。
注意：此字段可能返回 null，表示取不到有效值。
      */
  HaVipName: string

  /**
   * 虚拟IP地址。
   */
  Vip: string

  /**
   * HAVIP所在私有网络ID。
   */
  VpcId: string

  /**
   * HAVIP所在子网ID。
   */
  SubnetId: string

  /**
   * HAVIP关联弹性网卡ID。
   */
  NetworkInterfaceId: string

  /**
      * 被绑定的实例ID。
注意：此字段可能返回 null，表示取不到有效值。
      */
  InstanceId: string

  /**
      * 绑定EIP。
注意：此字段可能返回 null，表示取不到有效值。
      */
  AddressIp: string

  /**
      * 状态：
AVAILABLE：运行中。
UNBIND：未绑定。
      */
  State: string

  /**
   * 创建时间。
   */
  CreatedTime: string

  /**
      * 使用havip的业务标识。
注意：此字段可能返回 null，表示取不到有效值。
      */
  Business: string
}

/**
 * 路由冲突对象
 */
export interface RouteConflict {
  /**
   * 路由表实例ID
   */
  RouteTableId?: string

  /**
   * 要检查的与之冲突的目的端
   */
  DestinationCidrBlock: string

  /**
      * 冲突的路由策略列表
注意：此字段可能返回 null，表示取不到有效值。
      */
  ConflictSet: Array<Route>
}

/**
 * 描述EIP配额信息
 */
export interface EipQuota {
  /**
      * 配额名称，取值范围：
TOTAL_EIP_QUOTA：用户当前地域下EIP的配额数；
DAILY_EIP_APPLY：用户当前地域下今日申购次数；
DAILY_PUBLIC_IP_ASSIGN：用户当前地域下，重新分配公网 IP次数。
      */
  QuotaId: string

  /**
   * 当前数量
   */
  QuotaCurrent: number

  /**
   * 配额数量
   */
  QuotaLimit: number
}

/**
 * DeleteSubnet返回参数结构体
 */
export interface DeleteSubnetResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyAddressesBandwidth返回参数结构体
 */
export interface ModifyAddressesBandwidthResponse {
  /**
   * 异步任务TaskId。
   */
  TaskId?: string

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeSubnets返回参数结构体
 */
export interface DescribeSubnetsResponse {
  /**
   * 符合条件的实例数量。
   */
  TotalCount?: number

  /**
      * 子网对象。
注意：此字段可能返回 null，表示取不到有效值。
      */
  SubnetSet?: Array<Subnet>

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * RunInstances请求参数结构体
 */
export interface RunInstancesRequest {
  /**
   * 需要创建实例的可用区及创建数目及运营商的列表。在单次请求的过程中，单个region下的请求创建实例数上限为100
   */
  ZoneInstanceCountISPSet: Array<ZoneInstanceCountISP>

  /**
      * 实例登录密码。不同操作系统类型密码复杂度限制不一样，具体如下：
Linux实例密码必须8到30位，至少包括两项[a-z]，[A-Z]、[0-9] 和 [( ) ` ~ ! @ # $ % ^ & - + = | { } [ ] : ; ' , . ? / ]中的特殊符。Windows实例密码必须12到30位，至少包括三项[a-z]，[A-Z]，[0-9] 和 [( ) ` ~ ! @ # $ % ^ & - + = | { } [ ] : ; ' , . ? /]中的特殊符号。
      */
  Password?: string

  /**
      * 公网出带宽上限，单位：Mbps。
1.如果未传该参数或者传的值为0，则使用模块下的默认值。
2.如果未传该参数或者传的值为0且未指定模块，则使用InternetMaxBandwidthIn的值
      */
  InternetMaxBandwidthOut?: number

  /**
   * 模块ID。如果未传该参数，则必须传ImageId，InstanceType，DataDiskSize，InternetMaxBandwidthOut参数
   */
  ModuleId?: string

  /**
   * 镜像ID。如果未传该参数或者传的值为空，则使用模块下的默认值
   */
  ImageId?: string

  /**
      * 实例显示名称。
不指定实例显示名称则默认显示‘未命名’。
购买多台实例，如果指定模式串{R:x}，表示生成数字[x, x+n-1]，其中n表示购买实例的数量，例如server\_{R:3}，购买1台时，实例显示名称为server\_3；购买2台时，实例显示名称分别为server\_3，server\_4。
支持指定多个模式串{R:x}。
购买多台实例，如果不指定模式串，则在实例显示名称添加后缀1、2...n，其中n表示购买实例的数量，例如server_，购买2台时，实例显示名称分别为server\_1，server\_2。
如果购买的实例属于不同的地域或运营商，则上述规则在每个地域和运营商内独立计数。
最多支持60个字符（包含模式串）。
      */
  InstanceName?: string

  /**
      * 主机名称
点号（.）和短横线（-）不能作为 HostName 的首尾字符，不能连续使用。
Windows 实例：名字符长度为[2, 15]，允许字母（不限制大小写）、数字和短横线（-）组成，不支持点号（.），不能全是数字。
其他类型（Linux 等）实例：字符长度为[2, 60]，允许支持多个点号，点之间为一段，每段允许字母（不限制大小写）、数字和短横线（-）组成。
      */
  HostName?: string

  /**
   * 用于保证请求幂等性的字符串。目前为保留参数，请勿使用。
   */
  ClientToken?: string

  /**
   * 增强服务。通过该参数可以指定是否开启云安全、云监控等服务。若不指定该参数，则默认公共镜像开启云监控、云安全服务
   */
  EnhancedService?: EnhancedService

  /**
   * 标签列表
   */
  TagSpecification?: Array<TagSpecification>

  /**
   * 提供给实例使用的用户数据，需要以 base64 方式编码，支持的最大数据大小为 16KB
   */
  UserData?: string

  /**
   * 机型。如果未传该参数或者传的值为空，则使用模块下的默认值
   */
  InstanceType?: string

  /**
   * 数据盘大小，单位是G。如果未传该参数或者传的值为0，则使用模块下的默认值
   */
  DataDiskSize?: number

  /**
   * 实例所属安全组。该参数可以通过调用 DescribeSecurityGroups 的返回值中的sgId字段来获取。若不指定该参数，则绑定默认安全组。
   */
  SecurityGroupIds?: Array<string>

  /**
   * 系统盘大小，单位是G。如果未传该参数或者传的值为0，则使用模块下的默认值
   */
  SystemDiskSize?: number

  /**
      * 公网入带宽上限，单位：Mbps。
1.如果未传该参数或者传的值为0，则使用对应模块的默认值。
2.如果未传该参数或者传的值为0且未指定模块，则使用InternetMaxBandwidthOut
      */
  InternetMaxBandwidthIn?: number
}

/**
 * ReleaseAddresses请求参数结构体
 */
export interface ReleaseAddressesRequest {
  /**
   * ECM 地域
   */
  EcmRegion: string

  /**
   * 标识 EIP 的唯一 ID 列表。
   */
  AddressIds: Array<string>
}

/**
 * DescribeLoadBalancers请求参数结构体
 */
export interface DescribeLoadBalancersRequest {
  /**
   * 区域。如果不传则默认查询所有区域。
   */
  EcmRegion?: string

  /**
   * 负载均衡实例 ID。
   */
  LoadBalancerIds?: Array<string>

  /**
   * 负载均衡实例的名称。
   */
  LoadBalancerName?: string

  /**
   * 负载均衡实例的 VIP 地址，支持多个。
   */
  LoadBalancerVips?: Array<string>

  /**
   * 负载均衡绑定的后端服务的内网 IP。
   */
  BackendPrivateIps?: Array<string>

  /**
   * 数据偏移量，默认为 0。
   */
  Offset?: number

  /**
   * 返回负载均衡实例的数量，默认为20，最大值为100。
   */
  Limit?: number

  /**
      * 负载均衡是否绑定后端服务，0：没有绑定后端服务，1：绑定后端服务，-1：查询全部。 
如果不传则默认查询全部。
      */
  WithBackend?: number

  /**
   * 负载均衡实例所属私有网络唯一ID，如 vpc-bhqkbhdx。
   */
  VpcId?: string

  /**
      * 每次请求的`Filters`的上限为10，`Filter.Values`的上限为100。详细的过滤条件如下：
tag-key - String - 是否必填：否 - （过滤条件）按照标签的键过滤。
      */
  Filters?: Array<Filter>
}

/**
 * DescribeInstances返回参数结构体
 */
export interface DescribeInstancesResponse {
  /**
   * 返回的实例相关信息列表的长度。
   */
  TotalCount?: number

  /**
      * 返回的实例相关信息列表。
注意：此字段可能返回 null，表示取不到有效值。
      */
  InstanceSet?: Array<Instance>

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 弹性网卡
 */
export interface NetworkInterface {
  /**
   * 弹性网卡实例ID，例如：eni-f1xjkw1b。
   */
  NetworkInterfaceId: string

  /**
   * 弹性网卡名称。
   */
  NetworkInterfaceName: string

  /**
   * 弹性网卡描述。
   */
  NetworkInterfaceDescription: string

  /**
   * 子网实例ID。
   */
  SubnetId: string

  /**
   * VPC实例ID。
   */
  VpcId: string

  /**
      * 绑定的安全组。
注意：此字段可能返回 null，表示取不到有效值。
      */
  GroupSet: Array<string>

  /**
   * 是否是主网卡。
   */
  Primary: boolean

  /**
   * MAC地址。
   */
  MacAddress: string

  /**
      * 弹性网卡状态：
PENDING：创建中
AVAILABLE：可用的
ATTACHING：绑定中
DETACHING：解绑中
DELETING：删除中
      */
  State: string

  /**
      * 内网IP信息。
注意：此字段可能返回 null，表示取不到有效值。
      */
  PrivateIpAddressSet: Array<PrivateIpAddressSpecification>

  /**
      * 绑定的云服务器对象。
注意：此字段可能返回 null，表示取不到有效值。
注意：此字段可能返回 null，表示取不到有效值。
      */
  Attachment: NetworkInterfaceAttachment

  /**
   * 可用区。
   */
  Zone: string

  /**
   * 创建时间。
   */
  CreatedTime: string

  /**
      * IPv6地址列表。
注意：此字段可能返回 null，表示取不到有效值。
      */
  Ipv6AddressSet: Array<Ipv6Address>

  /**
      * 标签键值对。
注意：此字段可能返回 null，表示取不到有效值。
      */
  TagSet: Array<Tag>

  /**
   * 网卡类型。0 - 弹性网卡；1 - evm弹性网卡。
   */
  EniType: number

  /**
   * EcmRegion ecm区域
   */
  EcmRegion: string
}

/**
 * ModifyModuleSecurityGroups返回参数结构体
 */
export interface ModifyModuleSecurityGroupsResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 镜像来源信息
 */
export interface SrcImage {
  /**
   * 镜像id
   */
  ImageId: string

  /**
   * 镜像名称
   */
  ImageName: string

  /**
   * 系统名称
   */
  ImageOsName: string

  /**
   * 镜像描述
   */
  ImageDescription: string

  /**
   * 区域
   */
  Region: string

  /**
   * 区域ID
   */
  RegionID: number

  /**
   * 区域名称
   */
  RegionName: string

  /**
   * 来源实例名称
   */
  InstanceName: string

  /**
   * 来源实例ID
   */
  InstanceId: string

  /**
   * 来源镜像类型
   */
  ImageType: string
}

/**
 * 机型配置
 */
export interface InstanceTypeConfig {
  /**
   * 机型族配置信息
   */
  InstanceFamilyConfig: InstanceFamilyConfig

  /**
   * 机型
   */
  InstanceType: string

  /**
   * CPU核数
   */
  Vcpu: number

  /**
   * 内存大小
   */
  Memory: number

  /**
   * 主频
   */
  Frequency: string

  /**
   * 处理器型号
   */
  CpuModelName: string

  /**
   * 机型族类别配置信息
   */
  InstanceFamilyTypeConfig: InstanceFamilyTypeConfig

  /**
      * 机型额外信息 是一个json字符串，如果存在则表示特殊机型，格式如下：{"dataDiskSize":3200,"systemDiskSize":60, "systemDiskSizeShow":"系统盘默认60G","dataDiskSizeShow":"本地NVMe SSD 硬盘3200 GB"}
注意：此字段可能返回 null，表示取不到有效值。
      */
  ExtInfo: string
}

/**
 * DescribeNode返回参数结构体
 */
export interface DescribeNodeResponse {
  /**
      * 节点详细信息的列表
注意：此字段可能返回 null，表示取不到有效值。
      */
  NodeSet?: Array<Node>

  /**
   * 所有的节点数量。
   */
  TotalCount?: number

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * RemovePrivateIpAddresses返回参数结构体
 */
export interface RemovePrivateIpAddressesResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeDefaultSubnet返回参数结构体
 */
export interface DescribeDefaultSubnetResponse {
  /**
   * 默认子网信息，若无子网，则为空数据。
   */
  Subnet?: Subnet

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ReplaceRouteTableAssociation请求参数结构体
 */
export interface ReplaceRouteTableAssociationRequest {
  /**
   * 子网实例ID，例如：subnet-3x5lf5q0。可通过DescribeSubnets接口查询。
   */
  SubnetId: string

  /**
   * 路由表实例ID，例如：rtb-azd4dt1c。
   */
  RouteTableId: string

  /**
   * ECM 地域
   */
  EcmRegion: string
}

/**
 * ReplaceSecurityGroupPolicy请求参数结构体
 */
export interface ReplaceSecurityGroupPolicyRequest {
  /**
   * 安全组实例ID，例如esg-33ocnj9n，可通过DescribeSecurityGroups获取
   */
  SecurityGroupId: string

  /**
   * 安全组规则集合对象。
   */
  SecurityGroupPolicySet: SecurityGroupPolicySet
}

/**
 * ModifyTargetWeight返回参数结构体
 */
export interface ModifyTargetWeightResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 节点信息
 */
export interface Node {
  /**
   * zone信息
   */
  ZoneInfo: ZoneInfo

  /**
   * 国家信息
   */
  Country: Country

  /**
   * 区域信息
   */
  Area: Area

  /**
   * 省份信息
   */
  Province: Province

  /**
   * 城市信息
   */
  City: City

  /**
   * Region信息
   */
  RegionInfo: RegionInfo

  /**
   * 运营商列表
   */
  ISPSet: Array<ISP>

  /**
   * 运营商数量
   */
  ISPNum: number
}

/**
 * DescribeCustomImageTask返回参数结构体
 */
export interface DescribeCustomImageTaskResponse {
  /**
      * 导入任务详情
注意：此字段可能返回 null，表示取不到有效值。
      */
  ImageTaskSet?: Array<ImageTask>

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
 * 安全组对象
 */
export interface SecurityGroup {
  /**
   * 安全组实例ID，例如：esg-ohuuioma。
   */
  SecurityGroupId: string

  /**
   * 安全组名称，可任意命名，但不得超过60个字符。
   */
  SecurityGroupName: string

  /**
   * 安全组备注，最多100个字符。
   */
  SecurityGroupDesc: string

  /**
   * 是否是默认安全组，默认安全组不支持删除。
   */
  IsDefault?: boolean

  /**
   * 安全组创建时间。
   */
  CreatedTime?: string

  /**
   * 标签键值对。
   */
  TagSet?: Array<Tag>
}

/**
 * DeleteSubnet请求参数结构体
 */
export interface DeleteSubnetRequest {
  /**
   * 子网实例ID。可通过DescribeSubnets接口返回值中的SubnetId获取。
   */
  SubnetId: string

  /**
   * ECM 地域
   */
  EcmRegion: string
}

/**
 * DescribeModule请求参数结构体
 */
export interface DescribeModuleRequest {
  /**
      * 过滤条件。
module-name - string - 是否必填：否 - （过滤条件）按照模块名称过滤。
module-id - string - 是否必填：否 - （过滤条件）按照模块ID过滤。
image-id      String      是否必填：否      （过滤条件）按照镜像ID过滤。
instance-family      String      是否必填：否      （过滤条件）按照机型family过滤。
security-group-id - string 是否必填：否 - （过滤条件）按照模块绑定的安全组id过滤。
每次请求的Filters的上限为10，Filter.Values的上限为5。
      */
  Filters?: Array<Filter>

  /**
   * 偏移量，默认为0。关于Offset的更进一步介绍请参考 API 简介中的相关小节。
   */
  Offset?: number

  /**
   * 返回数量，默认为20，最大值为100。关于Limit的更进一步介绍请参考 API 简介中的相关小节。
   */
  Limit?: number

  /**
      * 指定排序字段。目前支持的可选值如下
instance-num 按实例数量排序。
node-num 按节点数量排序。
timestamp 按实例创建时间排序。
如果不传，默认按实例创建时间排序
      */
  OrderByField?: string

  /**
   * 指定排序是降序还是升序。0表示降序； 1表示升序。如果不传默认为降序
   */
  OrderDirection?: number
}

/**
 * DescribeTaskStatus请求参数结构体
 */
export interface DescribeTaskStatusRequest {
  /**
   * 任务描述
   */
  TaskSet: Array<TaskInput>
}

/**
 * CreateNetworkInterface请求参数结构体
 */
export interface CreateNetworkInterfaceRequest {
  /**
   * VPC实例ID。可通过DescribeVpcs接口返回值中的VpcId获取。
   */
  VpcId: string

  /**
   * 弹性网卡名称，最大长度不能超过60个字节。
   */
  NetworkInterfaceName: string

  /**
   * 弹性网卡所在的子网实例ID，例如：subnet-0ap8nwca。
   */
  SubnetId: string

  /**
   * ECM 地域
   */
  EcmRegion: string

  /**
   * 弹性网卡描述，可任意命名，但不得超过60个字符。
   */
  NetworkInterfaceDescription?: string

  /**
   * 新申请的内网IP地址个数，内网IP地址个数总和不能超过配数。
   */
  SecondaryPrivateIpAddressCount?: number

  /**
   * 指定绑定的安全组，例如：['sg-1dd51d']。
   */
  SecurityGroupIds?: Array<string>

  /**
   * 指定的内网IP信息，单次最多指定10个。
   */
  PrivateIpAddresses?: Array<PrivateIpAddressSpecification>

  /**
   * 指定绑定的标签列表，例如：[{"Key": "city", "Value": "shanghai"}]
   */
  Tags?: Array<Tag>
}

/**
 * CreateModule返回参数结构体
 */
export interface CreateModuleResponse {
  /**
   * 模块ID，创建模块成功后分配给该模块的ID。
   */
  ModuleId?: string

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * RebootInstances请求参数结构体
 */
export interface RebootInstancesRequest {
  /**
   * 待重启的实例ID列表。在单次请求的过程中，单个region下的请求实例数上限为100。
   */
  InstanceIdSet: Array<string>

  /**
      * 是否在正常重启失败后选择强制重启实例。取值范围：
TRUE：表示在正常重启失败后进行强制重启；
FALSE：表示在正常重启失败后不进行强制重启；
默认取值：FALSE。
      */
  ForceReboot?: boolean

  /**
      * 关机类型。取值范围：
SOFT：表示软关机
HARD：表示硬关机
SOFT_FIRST：表示优先软关机，失败再执行硬关机

默认取值：SOFT。
      */
  StopType?: string
}

/**
 * 安全组规则集合
 */
export interface SecurityGroupPolicySet {
  /**
   * 安全组规则当前版本。用户每次更新安全规则版本会自动加1，防止更新的路由规则已过期，不填不考虑冲突。
   */
  Version?: string

  /**
   * 出站规则。其中出站规则和入站规则必须选一个。
   */
  Egress?: Array<SecurityGroupPolicy>

  /**
   * 入站规则。其中出站规则和入站规则必须选一个。
   */
  Ingress?: Array<SecurityGroupPolicy>
}

/**
 * AllocateAddresses请求参数结构体
 */
export interface AllocateAddressesRequest {
  /**
   * ECM 地域
   */
  EcmRegion: string

  /**
   * EIP数量。默认值：1。
   */
  AddressCount?: number

  /**
      * CMCC：中国移动
CTCC：中国电信
CUCC：中国联通
      */
  InternetServiceProvider?: string

  /**
   * 1 Mbps 至 5000 Mbps，默认值：1 Mbps。
   */
  InternetMaxBandwidthOut?: number

  /**
   * 需要关联的标签列表。
   */
  Tags?: Array<Tag>
}

/**
 * 弹性网卡绑定关系
 */
export interface NetworkInterfaceAttachment {
  /**
   * 云主机实例ID。
   */
  InstanceId: string

  /**
   * 网卡在云主机实例内的序号。
   */
  DeviceIndex: number

  /**
   * 云主机所有者账户信息。
   */
  InstanceAccountId: string

  /**
   * 绑定时间。
   */
  AttachTime: string
}

/**
 * 用于描述实例相关的信息。
 */
export interface Instance {
  /**
   * 实例ID。
   */
  InstanceId: string

  /**
      * 实例名称，如ens-34241f3s。
注意：此字段可能返回 null，表示取不到有效值。
      */
  InstanceName: string

  /**
      * 实例状态。取值范围：
PENDING：表示创建中
LAUNCH_FAILED：表示创建失败
RUNNING：表示运行中
STOPPED：表示关机
STARTING：表示开机中
STOPPING：表示关机中
REBOOTING：表示重启中
SHUTDOWN：表示停止待销毁
TERMINATING：表示销毁中。
      */
  InstanceState: string

  /**
      * 实例当前使用的镜像的信息。
注意：此字段可能返回 null，表示取不到有效值。
      */
  Image: Image

  /**
      * 实例当前所属的模块简要信息。
注意：此字段可能返回 null，表示取不到有效值。
      */
  SimpleModule: SimpleModule

  /**
      * 实例所在的位置相关信息。
注意：此字段可能返回 null，表示取不到有效值。
      */
  Position: Position

  /**
      * 实例的网络相关信息。
注意：此字段可能返回 null，表示取不到有效值。
      */
  Internet: Internet

  /**
      * 实例的配置相关信息。
注意：此字段可能返回 null，表示取不到有效值。
      */
  InstanceTypeConfig: InstanceTypeConfig

  /**
      * 实例的创建时间。
注意：此字段可能返回 null，表示取不到有效值。
      */
  CreateTime: string

  /**
      * 实例的标签信息。
注意：此字段可能返回 null，表示取不到有效值。
      */
  TagSet: Array<Tag>

  /**
      * 实例最后一次操作。
注意：此字段可能返回 null，表示取不到有效值。
      */
  LatestOperation: string

  /**
      * 实例最后一次操作结果。
注意：此字段可能返回 null，表示取不到有效值。
      */
  LatestOperationState: string

  /**
      * 实例业务状态。取值范围：
NORMAL：表示正常状态的实例
EXPIRED：表示过期的实例
PROTECTIVELY_ISOLATED：表示被安全隔离的实例。
注意：此字段可能返回 null，表示取不到有效值。
      */
  RestrictState: string

  /**
      * 系统盘大小，单位GB。
注意：此字段可能返回 null，表示取不到有效值。
      */
  SystemDiskSize: number

  /**
      * 数据盘大小，单位GB。
注意：此字段可能返回 null，表示取不到有效值。
      */
  DataDiskSize: number

  /**
      * 实例UUID
注意：此字段可能返回 null，表示取不到有效值。
      */
  UUID: string

  /**
      * 付费方式。
    0为后付费。
    1为预付费。
注意：此字段可能返回 null，表示取不到有效值。
      */
  PayMode: number

  /**
      * 过期时间。格式为yyyy-mm-dd HH:mm:ss。
注意：此字段可能返回 null，表示取不到有效值。
      */
  ExpireTime: string

  /**
      * 隔离时间。格式为yyyy-mm-dd HH:mm:ss。
注意：此字段可能返回 null，表示取不到有效值。
      */
  IsolatedTime: string

  /**
      * 是否自动续费。
      0为不自动续费。
      1为自动续费。
注意：此字段可能返回 null，表示取不到有效值。
      */
  RenewFlag: number

  /**
      * 过期状态。
    NORMAL 表示机器运行正常。
    WILL_EXPIRE 表示即将过期。
    EXPIRED 表示已过期。
注意：此字段可能返回 null，表示取不到有效值。
      */
  ExpireState: string

  /**
      * 系统盘信息
注意：此字段可能返回 null，表示取不到有效值。
      */
  SystemDisk: DiskInfo

  /**
      * 数据盘信息
注意：此字段可能返回 null，表示取不到有效值。
      */
  DataDisks: Array<DiskInfo>

  /**
      * 新实例标志
注意：此字段可能返回 null，表示取不到有效值。
      */
  NewFlag: number

  /**
      * 实例所属安全组。该参数可以通过调用 DescribeSecurityGroups 的返回值中的sgId字段来获取。
注意：此字段可能返回 null，表示取不到有效值。
      */
  SecurityGroupIds: Array<string>

  /**
      * VPC属性
注意：此字段可能返回 null，表示取不到有效值。
      */
  VirtualPrivateCloud: VirtualPrivateCloud

  /**
      * 实例运营商字段。
注意：此字段可能返回 null，表示取不到有效值。
      */
  ISP: string
}

/**
 * DeleteNetworkInterface请求参数结构体
 */
export interface DeleteNetworkInterfaceRequest {
  /**
   * 弹性网卡实例ID，例如：eni-m6dyj72l。
   */
  NetworkInterfaceId: string

  /**
   * ECM 地域
   */
  EcmRegion: string
}

/**
 * RemovePrivateIpAddresses请求参数结构体
 */
export interface RemovePrivateIpAddressesRequest {
  /**
   * ECM 地域。
   */
  EcmRegion: string

  /**
   * 弹性网卡实例ID，例如：eni-11112222。
   */
  NetworkInterfaceId: string

  /**
   * 指定的内网IP信息，单次最多指定10个。
   */
  PrivateIpAddresses: Array<PrivateIpAddressSpecification>
}

/**
 * 路由表
 */
export interface RouteTable {
  /**
   * VPC实例ID
   */
  VpcId?: string

  /**
   * 路由表实例ID
   */
  RouteTableId?: string

  /**
   * 路由表名称
   */
  RouteTableName?: string

  /**
      * 路由表关联关系
注意：此字段可能返回 null，表示取不到有效值。
      */
  AssociationSet?: Array<RouteTableAssociation>

  /**
      * IPv4路由策略集合
注意：此字段可能返回 null，表示取不到有效值。
      */
  RouteSet?: Array<Route>

  /**
   * 是否默认路由表
   */
  Main?: boolean

  /**
   * 创建时间
   */
  CreatedTime?: string
}

/**
 * 实例可用区及对应的实例创建数目及运营商的组合；
 */
export interface ZoneInstanceCountISP {
  /**
   * 创建实例的可用区。
   */
  Zone: string

  /**
   * 在当前可用区欲创建的实例数目。
   */
  InstanceCount: number

  /**
   * 运营商，CTCC电信，CUCC联通，CMCC移动，多个运营商用英文分号连接";"。多运营商需要开通白名单，请直接联系腾讯云客服。
   */
  ISP: string

  /**
   * 指定私有网络编号，SubnetId与VpcId必须同时指定或不指定
   */
  VpcId?: string

  /**
   * 指定子网编号，SubnetId与VpcId必须同时指定或不指定
   */
  SubnetId?: string

  /**
   * 指定主网卡内网IP。条件：SubnetId与VpcId必须同时指定，并且IP数量与InstanceCount相同，多IP主机副网卡内网IP在相同子网内通过DHCP获取。
   */
  PrivateIpAddresses?: Array<string>

  /**
   * 为弹性网卡指定随机生成的IPv6地址数量，目前数量不能大于1。
   */
  Ipv6AddressCount?: number
}

/**
 * 负载均衡器健康状态
 */
export interface LoadBalancerHealth {
  /**
      * 负载均衡实例ID
注意：此字段可能返回 null，表示取不到有效值。
      */
  LoadBalancerId: string

  /**
      * 负载均衡实例名称
注意：此字段可能返回 null，表示取不到有效值。
      */
  LoadBalancerName: string

  /**
      * 监听器列表
注意：此字段可能返回 null，表示取不到有效值。
      */
  Listeners: Array<ListenerHealth>
}

/**
 * DescribeTargets请求参数结构体
 */
export interface DescribeTargetsRequest {
  /**
   * 负载均衡实例 ID
   */
  LoadBalancerId: string

  /**
   * 监听器 ID列表
   */
  ListenerIds?: Array<string>

  /**
   * 监听器协议类型
   */
  Protocol?: number

  /**
   * 监听器端口
   */
  Port?: number
}

/**
 * ModifyInstancesAttribute请求参数结构体
 */
export interface ModifyInstancesAttributeRequest {
  /**
   * 待修改的实例ID列表。在单次请求的过程中，请求实例数上限为100。
   */
  InstanceIdSet: Array<string>

  /**
   * 修改成功后显示的实例名称，不得超过60个字符，不传则名称显示为空。
   */
  InstanceName?: string

  /**
   * 指定实例的安全组Id列表，子机将重新关联指定列表的安全组，原本关联的安全组会被解绑。限制不超过5个。
   */
  SecurityGroups?: Array<string>
}

/**
 * 实例系列类型配置
 */
export interface InstanceFamilyTypeConfig {
  /**
   * 实例机型系列类型Id
   */
  InstanceFamilyType: string

  /**
   * 实例机型系列类型名称
   */
  InstanceFamilyTypeName: string
}

/**
 * ResetInstances返回参数结构体
 */
export interface ResetInstancesResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DeleteVpc请求参数结构体
 */
export interface DeleteVpcRequest {
  /**
   * VPC实例ID。可通过DescribeVpcs接口返回值中的VpcId获取。
   */
  VpcId: string

  /**
   * ECM 地域
   */
  EcmRegion: string
}

/**
 * DeleteLoadBalancerListeners请求参数结构体
 */
export interface DeleteLoadBalancerListenersRequest {
  /**
   * 负载均衡实例 ID
   */
  LoadBalancerId: string

  /**
   * 指定删除的监听器ID数组，若不填则删除负载均衡的所有监听器
   */
  ListenerIds?: Array<string>
}

/**
 * MigratePrivateIpAddress请求参数结构体
 */
export interface MigratePrivateIpAddressRequest {
  /**
   * ECM 地域
   */
  EcmRegion: string

  /**
   * 当内网IP绑定的弹性网卡实例ID，例如：eni-11112222。
   */
  SourceNetworkInterfaceId: string

  /**
   * 待迁移的目的弹性网卡实例ID。
   */
  DestinationNetworkInterfaceId: string

  /**
   * 迁移的内网IP地址，例如：10.0.0.6。
   */
  PrivateIpAddress: string
}

/**
 * ModifySubnetAttribute返回参数结构体
 */
export interface ModifySubnetAttributeResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * Zone信息
 */
export interface ZoneInfo {
  /**
   * ZoneId
   */
  ZoneId: number

  /**
   * ZoneName
   */
  ZoneName: string

  /**
   * Zone
   */
  Zone: string
}

/**
 * DescribeInstancesDeniedActions请求参数结构体
 */
export interface DescribeInstancesDeniedActionsRequest {
  /**
   * 无
   */
  InstanceIdSet: Array<string>
}

/**
 * DeleteRouteTable请求参数结构体
 */
export interface DeleteRouteTableRequest {
  /**
   * 路由表实例ID，例如：rtb-azd4dt1c
   */
  RouteTableId: string
}

/**
 * DescribeNode请求参数结构体
 */
export interface DescribeNodeRequest {
  /**
   * 过滤条件，name取值为： InstanceFamily-实例系列
   */
  Filters?: Array<Filter>
}

/**
 * CreateSubnet返回参数结构体
 */
export interface CreateSubnetResponse {
  /**
   * 子网对象。
   */
  Subnet?: Subnet

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeSecurityGroupPolicies返回参数结构体
 */
export interface DescribeSecurityGroupPoliciesResponse {
  /**
   * 安全组规则集合。
   */
  SecurityGroupPolicySet?: SecurityGroupPolicySet

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeListeners返回参数结构体
 */
export interface DescribeListenersResponse {
  /**
      * 监听器列表
注意：此字段可能返回 null，表示取不到有效值。
      */
  Listeners?: Array<Listener>

  /**
      * 总的监听器个数
注意：此字段可能返回 null，表示取不到有效值。
      */
  TotalCount?: number

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 区域信息
 */
export interface Area {
  /**
   * 区域ID
   */
  AreaId: string

  /**
   * 区域名称
   */
  AreaName: string
}

/**
 * ModifySecurityGroupPolicies请求参数结构体
 */
export interface ModifySecurityGroupPoliciesRequest {
  /**
   * 安全组实例ID，例如esg-33ocnj9n，可通过DescribeSecurityGroups获取。
   */
  SecurityGroupId: string

  /**
   * 安全组规则集合。 SecurityGroupPolicySet对象必须同时指定新的出（Egress）入（Ingress）站规则。 SecurityGroupPolicy对象不支持自定义索引（PolicyIndex）。
   */
  SecurityGroupPolicySet: SecurityGroupPolicySet

  /**
   * 排序安全组标识。值为True时，支持安全组排序；SortPolicys不存在或SortPolicys为False时，为修改安全组规则。
   */
  SortPolicys?: boolean
}

/**
 * DescribeConfig请求参数结构体
 */
export type DescribeConfigRequest = null

/**
 * DescribeInstanceVncUrl请求参数结构体
 */
export interface DescribeInstanceVncUrlRequest {
  /**
   * 一个操作的实例ID。可通过DescribeInstances API返回值中的InstanceId获取。
   */
  InstanceId: string
}

/**
 * DescribeInstanceVncUrl返回参数结构体
 */
export interface DescribeInstanceVncUrlResponse {
  /**
   * 实例的管理终端地址。
   */
  InstanceVncUrl?: string

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 目标和权重的描述信息
 */
export interface TargetsWeightRule {
  /**
      * 负载均衡监听器 ID
注意：此字段可能返回 null，表示取不到有效值。
      */
  ListenerId?: string

  /**
      * 要修改权重的后端机器列表
注意：此字段可能返回 null，表示取不到有效值。
      */
  Targets?: Array<Target>

  /**
      * 后端服务新的转发权重，取值范围：0~100。
注意：此字段可能返回 null，表示取不到有效值。
      */
  Weight?: number
}

/**
 * StopInstances返回参数结构体
 */
export interface StopInstancesResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * StartInstances返回参数结构体
 */
export interface StartInstancesResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateVpc返回参数结构体
 */
export interface CreateVpcResponse {
  /**
   * Vpc对象。
   */
  Vpc?: VpcInfo

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyTargetPort返回参数结构体
 */
export interface ModifyTargetPortResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * VPC辅助CIDR信息。
 */
export interface AssistantCidr {
  /**
   * VPC实例ID。形如：vpc-6v2ht8q5
   */
  VpcId: string

  /**
   * 辅助CIDR。形如：172.16.0.0/16
   */
  CidrBlock: string

  /**
   * 辅助CIDR类型（0：普通辅助CIDR，1：容器辅助CIDR），默认都是0。
   */
  AssistantType: number

  /**
      * 辅助CIDR拆分的子网。
注意：此字段可能返回 null，表示取不到有效值。
注意：此字段可能返回 null，表示取不到有效值。
      */
  SubnetSet: Array<Subnet>
}

/**
 * TerminateInstances请求参数结构体
 */
export interface TerminateInstancesRequest {
  /**
   * 待销毁的实例ID列表。
   */
  InstanceIdSet: Array<string>

  /**
   * 是否定时销毁，默认为否。
   */
  TerminateDelay?: boolean

  /**
   * 定时销毁的时间，格式形如："2019-08-05 12:01:30"，若非定时销毁，则此参数被忽略。
   */
  TerminateTime?: string
}

/**
 * DescribeTaskStatus返回参数结构体
 */
export interface DescribeTaskStatusResponse {
  /**
   * 任务描述
   */
  TaskSet?: Array<TaskOutput>

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * BatchRegisterTargets返回参数结构体
 */
export interface BatchRegisterTargetsResponse {
  /**
      * 绑定失败的监听器ID，如为空表示全部绑定成功。
注意：此字段可能返回 null，表示取不到有效值。
      */
  FailListenerIdSet?: Array<string>

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateModule请求参数结构体
 */
export interface CreateModuleRequest {
  /**
   * 模块名称，如视频直播模块。限制：模块名称不得以空格开头，长度不得超过60个字符。
   */
  ModuleName: string

  /**
   * 默认带宽，单位：M。范围不得超过带宽上下限，详看DescribeConfig。
   */
  DefaultBandWidth: number

  /**
   * 默认镜像，如img-qsdf3ff2。
   */
  DefaultImageId: string

  /**
   * 机型ID。
   */
  InstanceType: string

  /**
   * 默认系统盘大小，单位：G，默认大小为50G。范围不得超过系统盘上下限制，详看DescribeConfig。
   */
  DefaultSystemDiskSize: number

  /**
   * 默认数据盘大小，单位：G。范围不得超过数据盘范围大小，详看DescribeConfig。
   */
  DefaultDataDiskSize: number

  /**
      * 是否关闭IP直通。取值范围：
1：表示关闭IP直通
0：表示开通IP直通
      */
  CloseIpDirect?: boolean

  /**
   * 标签列表。
   */
  TagSpecification?: Array<TagSpecification>

  /**
   * 模块默认安全组列表
   */
  SecurityGroups?: Array<string>

  /**
   * 默认入带宽，单位：M。范围不得超过带宽上下限，详看DescribeConfig。
   */
  DefaultBandWidthIn?: number

  /**
   * 是否禁止分配外网IP
   */
  DisableWanIp?: boolean
}

/**
 * ReplaceRouteTableAssociation返回参数结构体
 */
export interface ReplaceRouteTableAssociationResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 实例网卡ip网络信息数组
 */
export interface InstanceNetworkInfo {
  /**
      * 实例内外网ip相关信息。
注意：此字段可能返回 null，表示取不到有效值。
      */
  AddressInfoSet: Array<AddressInfo>

  /**
   * 网卡ID。
   */
  NetworkInterfaceId: string

  /**
      * 网卡名称。
注意：此字段可能返回 null，表示取不到有效值。
      */
  NetworkInterfaceName: string

  /**
   * 主网卡属性。true为主网卡，false为辅助网卡。
   */
  Primary: boolean
}

/**
 * ModifyInstancesAttribute返回参数结构体
 */
export interface ModifyInstancesAttributeResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ReleaseAddresses返回参数结构体
 */
export interface ReleaseAddressesResponse {
  /**
   * 异步任务TaskId。可以使用DescribeTaskResult接口查询任务状态。
   */
  TaskId?: string

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyVpcAttribute请求参数结构体
 */
export interface ModifyVpcAttributeRequest {
  /**
   * VPC实例ID。形如：vpc-f49l6u0z。
   */
  VpcId: string

  /**
   * ECM 地域
   */
  EcmRegion: string

  /**
   * 私有网络名称，可任意命名，但不得超过60个字符。
   */
  VpcName?: string

  /**
   * 标签
   */
  Tags?: Array<Tag>

  /**
   * 私有网络描述
   */
  Description?: string
}

/**
 * DescribeInstancesDeniedActions返回参数结构体
 */
export interface DescribeInstancesDeniedActionsResponse {
  /**
   * 实例对应的禁止操作
   */
  InstanceOperatorSet?: Array<InstanceOperator>

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DeleteHaVip返回参数结构体
 */
export interface DeleteHaVipResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ReleaseIpv6Addresses请求参数结构体
 */
export interface ReleaseIpv6AddressesRequest {
  /**
   * ECM 地域
   */
  EcmRegion: string

  /**
   * 弹性网卡实例ID，形如：eni-m6dyj72l。
   */
  NetworkInterfaceId: string

  /**
   * 指定的IPv6地址列表，单次最多指定10个。
   */
  Ipv6Addresses: Array<Ipv6Address>
}

/**
 * 任务查询出参
 */
export interface TaskOutput {
  /**
   * 任务id
   */
  TaskId: string

  /**
   * 状态描述
   */
  Message: string

  /**
   * 状态值，SUCCESS/FAILED/OPERATING
   */
  Status: string

  /**
   * 任务提交时间
   */
  AddTime: string

  /**
   * 任务结束时间
   */
  EndTime: string

  /**
   * 操作名
   */
  Operation: string
}

/**
 * 节点统计数据
 */
export interface ModuleCounter {
  /**
   * 运营商统计信息列表
   */
  ISPCounterSet: Array<ISPCounter>

  /**
   * 省份数量
   */
  ProvinceNum: number

  /**
   * 城市数量
   */
  CityNum: number

  /**
   * 节点数量
   */
  NodeNum: number

  /**
   * 实例数量
   */
  InstanceNum: number
}

/**
 * ReplaceSecurityGroupPolicy返回参数结构体
 */
export interface ReplaceSecurityGroupPolicyResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ReplaceRoutes返回参数结构体
 */
export interface ReplaceRoutesResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 转发规则及健康状态列表
 */
export interface RuleHealth {
  /**
      * 本规则上绑定的后端的健康检查状态
注意：此字段可能返回 null，表示取不到有效值。
      */
  Targets: Array<TargetHealth>
}

/**
 * 负载均衡监听器
 */
export interface Listener {
  /**
      * 负载均衡监听器 ID
注意：此字段可能返回 null，表示取不到有效值。
      */
  ListenerId: string

  /**
      * 监听器协议
注意：此字段可能返回 null，表示取不到有效值。
      */
  Protocol: string

  /**
      * 监听器端口
注意：此字段可能返回 null，表示取不到有效值。
      */
  Port: number

  /**
      * 监听器的健康检查信息
注意：此字段可能返回 null，表示取不到有效值。
      */
  HealthCheck: HealthCheck

  /**
      * 请求的调度方式
注意：此字段可能返回 null，表示取不到有效值。
      */
  Scheduler: string

  /**
      * 会话保持时间
注意：此字段可能返回 null，表示取不到有效值。
      */
  SessionExpireTime: number

  /**
      * 监听器的名称
注意：此字段可能返回 null，表示取不到有效值。
      */
  ListenerName: string

  /**
      * 监听器的创建时间
注意：此字段可能返回 null，表示取不到有效值。
      */
  CreateTime: string

  /**
      * 监听器的会话类型
注意：此字段可能返回 null，表示取不到有效值。
      */
  SessionType: string
}

/**
 * ModifyLoadBalancerAttributes返回参数结构体
 */
export interface ModifyLoadBalancerAttributesResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 标签信息。
 */
export interface Tag {
  /**
      * 标签的键。
注意：此字段可能返回 null，表示取不到有效值。
      */
  Key: string

  /**
      * 标签的值。
注意：此字段可能返回 null，表示取不到有效值。
      */
  Value: string
}

/**
 * DescribeDefaultSubnet请求参数结构体
 */
export interface DescribeDefaultSubnetRequest {
  /**
   * ECM地域
   */
  EcmRegion: string

  /**
   * ECM可用区
   */
  Zone: string
}

/**
 * ResetInstancesMaxBandwidth返回参数结构体
 */
export interface ResetInstancesMaxBandwidthResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DeleteSecurityGroup返回参数结构体
 */
export interface DeleteSecurityGroupResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 私有网络(VPC)对象。
 */
export interface VpcInfo {
  /**
   * VPC名称。
   */
  VpcName: string

  /**
   * VPC实例ID，例如：vpc-azd4dt1c。
   */
  VpcId: string

  /**
   * VPC的IPv4 CIDR。
   */
  CidrBlock: string

  /**
   * 是否默认VPC。
   */
  IsDefault: boolean

  /**
   * 是否开启组播。
   */
  EnableMulticast: boolean

  /**
   * 创建时间。
   */
  CreatedTime: string

  /**
      * DNS列表。
注意：此字段可能返回 null，表示取不到有效值。
      */
  DnsServerSet: Array<string>

  /**
   * DHCP域名选项值。
   */
  DomainName: string

  /**
   * DHCP选项集ID。
   */
  DhcpOptionsId: string

  /**
   * 是否开启DHCP。
   */
  EnableDhcp: boolean

  /**
   * VPC的IPv6 CIDR。
   */
  Ipv6CidrBlock: string

  /**
      * 标签键值对
注意：此字段可能返回 null，表示取不到有效值。
      */
  TagSet: Array<Tag>

  /**
      * 辅助CIDR
注意：此字段可能返回 null，表示取不到有效值。
      */
  AssistantCidrSet: Array<AssistantCidr>

  /**
   * 地域
   */
  Region: string

  /**
   * 描述
   */
  Description: string

  /**
   * 地域中文名
   */
  RegionName: string

  /**
   * 包含子网数量
   */
  SubnetCount: number

  /**
   * 包含实例数量
   */
  InstanceCount: number
}

/**
 * 路由策略
 */
export interface Route {
  /**
   * 目的IPv4网段
   */
  DestinationCidrBlock?: string

  /**
      * 下一跳类型
NORMAL_CVM：普通云服务器；
      */
  GatewayType?: string

  /**
      * 下一跳地址
这里只需要指定不同下一跳类型的网关ID，系统会自动匹配到下一跳地址
当 GatewayType 为 EIP 时，GatewayId 固定值 '0'
      */
  GatewayId?: string

  /**
   * 路由策略唯一ID
   */
  RouteItemId?: string

  /**
   * 路由策略描述
   */
  RouteDescription?: string

  /**
   * 是否启用
   */
  Enabled?: boolean

  /**
      * 路由类型，目前我们支持的类型有：
USER：用户路由；
NETD：网络探测路由，创建网络探测实例时，系统默认下发，不可编辑与删除；
CCN：云联网路由，系统默认下发，不可编辑与删除。
用户只能添加和操作 USER 类型的路由。
      */
  RouteType?: string

  /**
   * 路由策略ID。IPv4路由策略ID是有意义的值，IPv6路由策略是无意义的值0。后续建议完全使用字符串唯一ID `RouteItemId`操作路由策略
   */
  RouteId?: number
}

/**
 * DescribeImage请求参数结构体
 */
export interface DescribeImageRequest {
  /**
      * 过滤条件，每次请求的Filters的上限为10，详细的过滤条件如下：
image-id - String - 是否必填： 否 - （过滤条件）按照镜像ID进行过滤
image-type - String - 是否必填： 否 - （过滤条件）按照镜像类型进行过滤。取值范围：
PRIVATE_IMAGE: 私有镜像 (本帐户创建的镜像) 
PUBLIC_IMAGE: 公共镜像 (腾讯云官方镜像)
      */
  Filters?: Array<Filter>

  /**
   * 偏移量，默认为0。关于Offset的更进一步介绍请参考 API 简介中的相关小节。
   */
  Offset?: number

  /**
   * 返回数量，默认为20，最大值为100。关于Limit的更进一步介绍请参考 API 简介中的相关小节。
   */
  Limit?: number
}

/**
 * CreateNetworkInterface返回参数结构体
 */
export interface CreateNetworkInterfaceResponse {
  /**
   * 弹性网卡实例。
   */
  NetworkInterface?: NetworkInterface

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyListener请求参数结构体
 */
export interface ModifyListenerRequest {
  /**
   * 负载均衡实例 ID
   */
  LoadBalancerId: string

  /**
   * 负载均衡监听器 ID
   */
  ListenerId: string

  /**
   * 新的监听器名称
   */
  ListenerName?: string

  /**
   * 会话保持时间，单位：秒。可选值：30~3600，默认 0，表示不开启。此参数仅适用于TCP/UDP监听器。
   */
  SessionExpireTime?: number

  /**
   * 健康检查相关参数
   */
  HealthCheck?: HealthCheck

  /**
      * 监听器转发的方式。可选值：WRR、LEAST_CONN
分别表示按权重轮询、最小连接数， 默认为 WRR。
      */
  Scheduler?: string
}

/**
 * RunInstances返回参数结构体
 */
export interface RunInstancesResponse {
  /**
      * 创建中的实例ID列表
注意：此字段可能返回 null，表示取不到有效值。
      */
  InstanceIdSet?: Array<string>

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeAddressQuota请求参数结构体
 */
export interface DescribeAddressQuotaRequest {
  /**
   * ECM 地域
   */
  EcmRegion: string
}

/**
 * ModifyModuleName请求参数结构体
 */
export interface ModifyModuleNameRequest {
  /**
   * 模块ID。
   */
  ModuleId: string

  /**
   * 模块名称。
   */
  ModuleName: string
}

/**
 * DescribeInstanceTypeConfig返回参数结构体
 */
export interface DescribeInstanceTypeConfigResponse {
  /**
   * 总数
   */
  TotalCount?: number

  /**
      * 机型配置信息
注意：此字段可能返回 null，表示取不到有效值。
      */
  InstanceTypeConfigSet?: Array<InstanceTypeConfig>

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 节点实例数量信息
 */
export interface NodeInstanceNum {
  /**
   * 节点数量
   */
  NodeNum: number

  /**
   * 实例数量
   */
  InstanceNum: number
}

/**
 * 负载均衡健康检查
 */
export interface HealthCheck {
  /**
      * 是否开启健康检查：1（开启）、0（关闭）
注意：此字段可能返回 null，表示取不到有效值。
      */
  HealthSwitch?: number

  /**
      * 健康检查的响应超时时间，可选值：2~60，默认值：2，单位：秒。响应超时时间要小于检查间隔时间。
注意：此字段可能返回 null，表示取不到有效值。
      */
  TimeOut?: number

  /**
      * 健康检查探测间隔时间，默认值：5，可选值：5~300，单位：秒。
注意：此字段可能返回 null，表示取不到有效值。
      */
  IntervalTime?: number

  /**
      * 健康阈值，默认值：3，表示当连续探测三次健康则表示该转发正常，可选值：2~10，单位：次。
注意：此字段可能返回 null，表示取不到有效值。
      */
  HealthNum?: number

  /**
      * 不健康阈值，默认值：3，表示当连续探测三次不健康则表示该转发异常，可选值：2~10，单位：次。
注意：此字段可能返回 null，表示取不到有效值。
      */
  UnHealthyNum?: number

  /**
      * 自定义探测相关参数。健康检查端口，默认为后端服务的端口，除非您希望指定特定端口，否则建议留空。
注意：此字段可能返回 null，表示取不到有效值。
      */
  CheckPort?: number

  /**
      * 自定义探测相关参数。健康检查协议CheckType的值取CUSTOM时，必填此字段，代表健康检查的输入格式，可取值：HEX或TEXT；取值为HEX时，SendContext和RecvContext的字符只能在0123456789ABCDEF中选取且长度必须是偶数位。
注意：此字段可能返回 null，表示取不到有效值。
      */
  ContextType?: string

  /**
      * 自定义探测相关参数。健康检查协议CheckType的值取CUSTOM时，必填此字段，代表健康检查发送的请求内容，只允许ASCII可见字符，最大长度限制500。
注意：此字段可能返回 null，表示取不到有效值。
      */
  SendContext?: string

  /**
      * 自定义探测相关参数。健康检查协议CheckType的值取CUSTOM时，必填此字段，代表健康检查返回的结果，只允许ASCII可见字符，最大长度限制500。
注意：此字段可能返回 null，表示取不到有效值。
      */
  RecvContext?: string

  /**
      * 自定义探测相关参数。健康检查使用的协议：TCP | CUSTOM（UDP监听器只支持CUSTOM；如果使用自定义健康检查功能，则必传）。
注意：此字段可能返回 null，表示取不到有效值。
      */
  CheckType?: string
}

/**
 * DescribeSecurityGroupLimits返回参数结构体
 */
export interface DescribeSecurityGroupLimitsResponse {
  /**
   * 用户安全组配额限制。
   */
  SecurityGroupLimitSet?: SecurityGroupLimitSet

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeAddresses返回参数结构体
 */
export interface DescribeAddressesResponse {
  /**
   * 符合条件的 EIP 数量。
   */
  TotalCount?: number

  /**
   * EIP 详细信息列表。
   */
  AddressSet?: Array<Address>

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * AssignIpv6Addresses返回参数结构体
 */
export interface AssignIpv6AddressesResponse {
  /**
   * 分配给弹性网卡的IPv6地址列表。
   */
  Ipv6AddressSet?: Array<Ipv6Address>

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateRoutes返回参数结构体
 */
export interface CreateRoutesResponse {
  /**
   * 新增的实例个数。
   */
  TotalCount?: number

  /**
      * 路由表对象。
注意：此字段可能返回 null，表示取不到有效值。
      */
  RouteTableSet?: Array<RouteTable>

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DeleteListener请求参数结构体
 */
export interface DeleteListenerRequest {
  /**
   * 负载均衡实例 ID
   */
  LoadBalancerId: string

  /**
   * 要删除的监听器 ID
   */
  ListenerId: string
}

/**
 * DescribeSecurityGroups返回参数结构体
 */
export interface DescribeSecurityGroupsResponse {
  /**
   * 符合条件的实例数量。
   */
  TotalCount?: number

  /**
   * 安全组对象。
   */
  SecurityGroupSet?: Array<SecurityGroup>

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ImportImage请求参数结构体
 */
export interface ImportImageRequest {
  /**
   * 镜像的Id。
   */
  ImageId: string

  /**
   * 镜像的描述。
   */
  ImageDescription: string

  /**
   * 源地域
   */
  SourceRegion: string
}

/**
 * DetachNetworkInterface返回参数结构体
 */
export interface DetachNetworkInterfaceResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 机型族配置
 */
export interface InstanceFamilyConfig {
  /**
   * 机型名称
   */
  InstanceFamilyName: string

  /**
   * 机型ID
   */
  InstanceFamily: string
}

/**
 * ResetRoutes返回参数结构体
 */
export interface ResetRoutesResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DeleteModule请求参数结构体
 */
export interface DeleteModuleRequest {
  /**
   * 模块ID。如：em-qn46snq8
   */
  ModuleId: string
}

/**
 * CreateImage返回参数结构体
 */
export interface CreateImageResponse {
  /**
   * 任务id
   */
  TaskId?: string

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifySecurityGroupPolicies返回参数结构体
 */
export interface ModifySecurityGroupPoliciesResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ResetInstancesMaxBandwidth请求参数结构体
 */
export interface ResetInstancesMaxBandwidthRequest {
  /**
   * 待重置带宽上限的实例ID列表。在单次请求的过程中，单个region下的请求实例数上限为100。
   */
  InstanceIdSet: Array<string>

  /**
   * 修改后的最大出带宽上限。
   */
  MaxBandwidthOut: number

  /**
   * 修改后的最大入带宽上限。
   */
  MaxBandwidthIn?: number
}

/**
 * 负载均衡的带宽限制等信息。
 */
export interface LoadBalancerInternetAccessible {
  /**
   * 最大出带宽，单位Mbps。
   */
  InternetMaxBandwidthOut?: number
}

/**
 * 操作系统支持的类型。
 */
export interface OsVersion {
  /**
   * 操作系统类型
   */
  OsName: string

  /**
      * 支持的操作系统版本
注意：此字段可能返回 null，表示取不到有效值。
      */
  OsVersions: Array<string>

  /**
      * 支持的操作系统架构
注意：此字段可能返回 null，表示取不到有效值。
      */
  Architecture: Array<string>
}

/**
 * ResetRoutes请求参数结构体
 */
export interface ResetRoutesRequest {
  /**
   * 路由表实例ID，例如：rtb-azd4dt1c。
   */
  RouteTableId: string

  /**
   * 路由表名称，最大长度不能超过60个字节。
   */
  RouteTableName: string

  /**
   * 路由策略。
   */
  Routes: Array<Route>
}

/**
 * DisableRoutes返回参数结构体
 */
export interface DisableRoutesResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 峰值信息
 */
export interface PeakBase {
  /**
   * CPU峰值
   */
  PeakCpuNum: number

  /**
   * 内存峰值
   */
  PeakMemoryNum: number

  /**
   * 硬盘峰值
   */
  PeakStorageNum: number

  /**
   * 记录时间
   */
  RecordTime: string
}

/**
 * ResetInstancesPassword返回参数结构体
 */
export interface ResetInstancesPasswordResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyModuleNetwork请求参数结构体
 */
export interface ModifyModuleNetworkRequest {
  /**
   * 模块Id
   */
  ModuleId: string

  /**
   * 默认出带宽上限
   */
  DefaultBandwidth: number

  /**
   * 默认入带宽上限
   */
  DefaultBandwidthIn?: number
}

/**
 * 镜像信息
 */
export interface Image {
  /**
   * 镜像ID
   */
  ImageId: string

  /**
   * 镜像名称
   */
  ImageName: string

  /**
   * 镜像状态
   */
  ImageState: string

  /**
   * 镜像类型
   */
  ImageType: string

  /**
   * 操作系统名称
   */
  ImageOsName: string

  /**
   * 镜像描述
   */
  ImageDescription: string

  /**
   * 镜像导入时间
   */
  ImageCreateTime: string

  /**
   * 操作系统位数
   */
  Architecture: string

  /**
   * 操作系统类型
   */
  OsType: string

  /**
   * 操作系统版本
   */
  OsVersion: string

  /**
   * 操作系统平台
   */
  Platform: string

  /**
   * 镜像所有者
   */
  ImageOwner: number

  /**
   * 镜像大小。单位：GB
   */
  ImageSize: number

  /**
   * 镜像来源信息
   */
  SrcImage: SrcImage

  /**
   * 镜像来源类型
   */
  ImageSource: string

  /**
   * 中间态和失败时候的任务ID
   */
  TaskId: string
}

/**
 * 资源类型的Tag
 */
export interface TagSpecification {
  /**
   * 资源类型，目前仅支持"instance"、"module"
   */
  ResourceType: string

  /**
   * 标签列表
   */
  Tags: Array<Tag>
}

/**
 * DetachNetworkInterface请求参数结构体
 */
export interface DetachNetworkInterfaceRequest {
  /**
   * 弹性网卡实例ID，例如：eni-m6dyj72l。
   */
  NetworkInterfaceId: string

  /**
   * 实例ID。形如：ein-hcs7jkg4
   */
  InstanceId: string

  /**
   * ECM 地域
   */
  EcmRegion: string
}

/**
 * IP地址模版
 */
export interface AddressTemplateSpecification {
  /**
   * IP地址ID，例如：eipm-2uw6ujo6。
   */
  AddressId: string

  /**
   * IP地址组ID，例如：eipmg-2uw6ujo6。
   */
  AddressGroupId: string
}

/**
 * DescribeConfig返回参数结构体
 */
export interface DescribeConfigResponse {
  /**
   * 网络带宽硬盘大小的范围信息。
   */
  NetworkStorageRange?: NetworkStorageRange

  /**
      * 镜像操作系统白名单
注意：此字段可能返回 null，表示取不到有效值。
      */
  ImageWhiteSet?: Array<string>

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * AssignIpv6Addresses请求参数结构体
 */
export interface AssignIpv6AddressesRequest {
  /**
   * ECM 地域
   */
  EcmRegion: string

  /**
   * 弹性网卡实例ID，形如：eni-1snva0vd。目前只支持主网卡上分配。
   */
  NetworkInterfaceId: string

  /**
   * 指定的IPv6地址列表，单次最多指定10个。与入参Ipv6AddressCount合并计算配额。与Ipv6AddressCount必填一个。
   */
  Ipv6Addresses?: Array<Ipv6Address>

  /**
   * 自动分配IPv6地址个数，内网IP地址个数总和不能超过配数。与入参Ipv6Addresses合并计算配额。与Ipv6Addresses必填一个。
   */
  Ipv6AddressCount?: number
}

/**
 * ModifyModuleNetwork返回参数结构体
 */
export interface ModifyModuleNetworkResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyDefaultSubnet返回参数结构体
 */
export interface ModifyDefaultSubnetResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyTargetWeight请求参数结构体
 */
export interface ModifyTargetWeightRequest {
  /**
   * 负载均衡实例 ID
   */
  LoadBalancerId: string

  /**
   * 负载均衡监听器 ID
   */
  ListenerId: string

  /**
   * 要修改权重的后端服务列表
   */
  Targets: Array<Target>

  /**
   * 后端服务新的转发权重，取值范围：0~100，默认值10。如果设置了 Targets.Weight 参数，则此参数不生效。
   */
  Weight?: number
}

/**
 * CreateSubnet请求参数结构体
 */
export interface CreateSubnetRequest {
  /**
   * 待操作的VPC实例ID。可通过DescribeVpcs接口返回值中的VpcId获取。
   */
  VpcId: string

  /**
   * 子网名称，最大长度不能超过60个字节。
   */
  SubnetName: string

  /**
   * 子网网段，子网网段必须在VPC网段内，相同VPC内子网网段不能重叠。
   */
  CidrBlock: string

  /**
   * 子网所在的可用区ID，不同子网选择不同可用区可以做跨可用区灾备。
   */
  Zone: string

  /**
   * ECM 地域
   */
  EcmRegion: string

  /**
   * 指定绑定的标签列表，例如：[{"Key": "city", "Value": "shanghai"}]
   */
  Tags?: Array<Tag>
}

/**
 * DescribeModuleDetail返回参数结构体
 */
export interface DescribeModuleDetailResponse {
  /**
      * 模块的详细信息，详细见数据结构中的ModuleInfo。
注意：此字段可能返回 null，表示取不到有效值。
      */
  Module?: Module

  /**
      * 模块的统计信息，详细见数据结构中的ModuleCounterInfo。
注意：此字段可能返回 null，表示取不到有效值。
      */
  ModuleCounter?: ModuleCounter

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 任务查询
 */
export interface TaskInput {
  /**
   * 操作名，即API名称，比如：CreateImage
   */
  Operation: string

  /**
   * 任务id
   */
  TaskId: string
}

/**
 * ModifyModuleDisableWanIp请求参数结构体
 */
export interface ModifyModuleDisableWanIpRequest {
  /**
   * 模块ID
   */
  ModuleId: string

  /**
   * 是否禁止分配外网ip
   */
  DisableWanIp: boolean
}

/**
 * 负责均衡后端信息
 */
export interface Backend {
  /**
      * 后端服务的唯一 ID
注意：此字段可能返回 null，表示取不到有效值。
      */
  InstanceId?: string

  /**
      * 后端服务的监听端口
注意：此字段可能返回 null，表示取不到有效值。
      */
  Port?: number

  /**
      * 后端服务的转发权重，取值范围：[0, 100]，默认为 10。
注意：此字段可能返回 null，表示取不到有效值。
      */
  Weight?: number

  /**
      * 后端服务的内网 IP
注意：此字段可能返回 null，表示取不到有效值。
      */
  PrivateIpAddresses?: Array<string>

  /**
      * 后端服务被绑定的时间
注意：此字段可能返回 null，表示取不到有效值。
      */
  RegisteredTime?: string

  /**
      * 弹性网卡唯一ID
注意：此字段可能返回 null，表示取不到有效值。
      */
  EniId?: string

  /**
      * 后端服务的外网 IP
注意：此字段可能返回 null，表示取不到有效值。
      */
  PublicIpAddresses: Array<string>

  /**
      * 后端服务的实例名称
注意：此字段可能返回 null，表示取不到有效值。
      */
  InstanceName: string
}

/**
 * 子网对象
 */
export interface Subnet {
  /**
   * VPC实例ID。
   */
  VpcId: string

  /**
   * 子网实例ID，例如：subnet-bthucmmy。
   */
  SubnetId: string

  /**
   * 子网名称。
   */
  SubnetName: string

  /**
   * 子网的 IPv4 CIDR。
   */
  CidrBlock: string

  /**
   * 是否默认子网。
   */
  IsDefault: boolean

  /**
   * 是否开启广播。
   */
  EnableBroadcast: boolean

  /**
   * 路由表实例ID，例如：rtb-l2h8d7c2。
   */
  RouteTableId: string

  /**
   * 创建时间。
   */
  CreatedTime: string

  /**
   * 可用IP数。
   */
  AvailableIpAddressCount: number

  /**
   * 子网的 IPv6 CIDR。
   */
  Ipv6CidrBlock: string

  /**
   * 关联ACLID
   */
  NetworkAclId: string

  /**
   * 是否为 SNAT 地址池子网。
   */
  IsRemoteVpcSnat: boolean

  /**
      * 标签键值对。
注意：此字段可能返回 null，表示取不到有效值。
      */
  TagSet: Array<Tag>

  /**
   * 所在区域
   */
  Zone: string

  /**
      * 可用区名称
注意：此字段可能返回 null，表示取不到有效值。
      */
  ZoneName: string

  /**
      * 实例数量
注意：此字段可能返回 null，表示取不到有效值。
      */
  InstanceCount: number

  /**
      * VPC的 IPv4 CIDR。
注意：此字段可能返回 null，表示取不到有效值。
      */
  VpcCidrBlock: string

  /**
      * VPC的 IPv6 CIDR。
注意：此字段可能返回 null，表示取不到有效值。
      */
  VpcIpv6CidrBlock: string

  /**
      * 地域
注意：此字段可能返回 null，表示取不到有效值。
      */
  Region: string
}

/**
 * ModifyVpcAttribute返回参数结构体
 */
export interface ModifyVpcAttributeResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DeleteLoadBalancer请求参数结构体
 */
export interface DeleteLoadBalancerRequest {
  /**
   * 要删除的负载均衡实例 ID数组，数组大小最大支持20
   */
  LoadBalancerIds?: Array<string>
}

/**
 * ModifyIpv6AddressesAttribute返回参数结构体
 */
export interface ModifyIpv6AddressesAttributeResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DeleteVpc返回参数结构体
 */
export interface DeleteVpcResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 负责均衡后端目标
 */
export interface Target {
  /**
      * 后端服务的监听端口
注意：此字段可能返回 null，表示取不到有效值。
      */
  Port?: number

  /**
      * 子机ID
注意：此字段可能返回 null，表示取不到有效值。
      */
  InstanceId?: string

  /**
      * 后端服务的转发权重，取值范围：[0, 100]，默认为 10。
注意：此字段可能返回 null，表示取不到有效值。
      */
  Weight?: number

  /**
      * 绑定弹性网卡时需要传入此参数，代表弹性网卡的IP，弹性网卡必须先绑定至子机，然后才能绑定到负载均衡实例。注意：参数 InstanceId 和 EniIp 只能传入一个且必须传入一个。
注意：此字段可能返回 null，表示取不到有效值。
      */
  EniIp?: string
}

/**
 * 路由表关联关系
 */
export interface RouteTableAssociation {
  /**
   * 子网实例ID
   */
  SubnetId?: string

  /**
   * 路由表实例ID
   */
  RouteTableId?: string
}

/**
 * DescribeVpcs返回参数结构体
 */
export interface DescribeVpcsResponse {
  /**
   * 符合条件的对象数。
   */
  TotalCount?: number

  /**
      * 私有网络对象。
注意：此字段可能返回 null，表示取不到有效值。
      */
  VpcSet?: Array<VpcInfo>

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 镜像文件信息
 */
export interface ImageUrl {
  /**
   * 镜像文件COS链接，如设置私有读写，需授权腾讯云ECM运营账号访问权限。
   */
  ImageFile: string
}

/**
 * 运营商信息
 */
export interface ISP {
  /**
   * 运营商ID
   */
  ISPId: string

  /**
   * 运营商名称
   */
  ISPName: string
}

/**
 * 内网IP信息
 */
export interface PrivateIpAddressSpecification {
  /**
   * 内网IP地址。
   */
  PrivateIpAddress: string

  /**
      * 是否是主IP。
注意：此字段可能返回 null，表示取不到有效值。
      */
  Primary?: boolean

  /**
   * 公网IP地址。
   */
  PublicIpAddress?: string

  /**
   * EIP实例ID，例如：eip-11112222。
   */
  AddressId?: string

  /**
   * 内网IP描述信息。
   */
  Description?: string

  /**
      * 公网IP是否被封堵。
注意：此字段可能返回 null，表示取不到有效值。
      */
  IsWanIpBlocked?: boolean

  /**
      * IP状态：
PENDING：生产中
MIGRATING：迁移中
DELETING：删除中
AVAILABLE：可用的
      */
  State?: string
}

/**
 * ModifySecurityGroupAttribute返回参数结构体
 */
export interface ModifySecurityGroupAttributeResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 运行商统计信息
 */
export interface ISPCounter {
  /**
   * 运营商名称
   */
  ProviderName: string

  /**
   * 节点数量
   */
  ProviderNodeNum: number

  /**
   * 实例数量
   */
  ProvederInstanceNum: number

  /**
   * Zone实例信息结构体数组
   */
  ZoneInstanceInfoSet: Array<ZoneInstanceInfo>
}

/**
 * MigratePrivateIpAddress返回参数结构体
 */
export interface MigratePrivateIpAddressResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateImage请求参数结构体
 */
export interface CreateImageRequest {
  /**
   * 镜像名称。
   */
  ImageName: string

  /**
   * 需要制作镜像的实例ID。
   */
  InstanceId: string

  /**
   * 镜像描述。
   */
  ImageDescription?: string

  /**
      * 是否执行强制关机以制作镜像。取值范围：
TRUE：表示自动关机后制作镜像
FALSE：表示开机状态制作，目前不支持，需要先手动关机
默认取值：FALSE。
      */
  ForcePoweroff?: string
}

/**
 * DeleteRouteTable返回参数结构体
 */
export interface DeleteRouteTableResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyModuleDisableWanIp返回参数结构体
 */
export interface ModifyModuleDisableWanIpResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 增强服务
 */
export interface EnhancedService {
  /**
   * 是否开启云镜服务。
   */
  SecurityService?: RunSecurityServiceEnabled

  /**
   * 是否开启云监控服务。
   */
  MonitorService?: RunMonitorServiceEnabled

  /**
   * 是否开通IP直通。若不指定该参数，则Linux镜像默认开通，windows镜像暂不支持IP直通。
   */
  EIPDirectService?: RunEIPDirectServiceEnabled
}

/**
 * CreateListener返回参数结构体
 */
export interface CreateListenerResponse {
  /**
      * 创建的监听器的唯一标识数组
注意：此字段可能返回 null，表示取不到有效值。
      */
  ListenerIds?: Array<string>

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DeleteModule返回参数结构体
 */
export interface DeleteModuleResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeInstanceTypeConfig请求参数结构体
 */
export type DescribeInstanceTypeConfigRequest = null

/**
 * DescribeLoadBalanceTaskStatus请求参数结构体
 */
export interface DescribeLoadBalanceTaskStatusRequest {
  /**
   * 请求ID，即接口返回的 RequestId 参数
   */
  TaskId: string
}

/**
 * ImportCustomImage请求参数结构体
 */
export interface ImportCustomImageRequest {
  /**
   * 镜像名称
   */
  ImageName: string

  /**
   * 导入镜像的操作系统架构，x86_64 或 i386
   */
  Architecture: string

  /**
   * 导入镜像的操作系统类型，通过DescribeImportImageOs获取
   */
  OsType: string

  /**
   * 导入镜像的操作系统版本，通过DescribeImportImageOs获取
   */
  OsVersion: string

  /**
   * 镜像描述
   */
  ImageDescription?: string

  /**
   * 镜像启动方式，cloudinit或nbd， 默认cloudinit
   */
  InitFlag?: string

  /**
   * 镜像文件描述，多层镜像按顺序传入
   */
  ImageUrls?: Array<ImageUrl>
}

/**
 * ModifyHaVipAttribute返回参数结构体
 */
export interface ModifyHaVipAttributeResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyIpv6AddressesAttribute请求参数结构体
 */
export interface ModifyIpv6AddressesAttributeRequest {
  /**
   * ECM 地域
   */
  EcmRegion: string

  /**
   * 弹性网卡实例ID，形如：eni-m6dyj72l。
   */
  NetworkInterfaceId: string

  /**
   * 指定的IPv6地址信息。
   */
  Ipv6Addresses: Array<Ipv6Address>
}

/**
 * DescribeModuleDetail请求参数结构体
 */
export interface DescribeModuleDetailRequest {
  /**
   * 模块ID，如em-qn46snq8。
   */
  ModuleId: string
}

/**
 * DeleteRoutes请求参数结构体
 */
export interface DeleteRoutesRequest {
  /**
   * 路由表唯一ID。
   */
  RouteTableId: string

  /**
   * 路由策略对象。
   */
  Routes: Array<Route>
}

/**
 * AssociateAddress请求参数结构体
 */
export interface AssociateAddressRequest {
  /**
   * ECM 地域
   */
  EcmRegion: string

  /**
   * 标识 EIP 的唯一 ID。EIP 唯一 ID 形如：eip-11112222。
   */
  AddressId: string

  /**
   * 要绑定的实例 ID。
   */
  InstanceId?: string

  /**
   * 要绑定的弹性网卡 ID。 弹性网卡 ID 形如：eni-11112222。NetworkInterfaceId 与 InstanceId 不可同时指定。弹性网卡 ID 可通过DescribeNetworkInterfaces接口返回值中的networkInterfaceId获取。
   */
  NetworkInterfaceId?: string

  /**
   * 要绑定的内网 IP。如果指定了 NetworkInterfaceId 则也必须指定 PrivateIpAddress ，表示将 EIP 绑定到指定弹性网卡的指定内网 IP 上。同时要确保指定的 PrivateIpAddress 是指定的 NetworkInterfaceId 上的一个内网 IP。指定弹性网卡的内网 IP 可通过DescribeNetworkInterfaces接口返回值中的privateIpAddress获取。
   */
  PrivateIpAddress?: string
}

/**
 * ModifySecurityGroupAttribute请求参数结构体
 */
export interface ModifySecurityGroupAttributeRequest {
  /**
   * 安全组实例ID，例如esg-33ocnj9n，可通过DescribeSecurityGroups获取。
   */
  SecurityGroupId: string

  /**
   * 安全组名称，可任意命名，但不得超过60个字符。
   */
  GroupName?: string

  /**
   * 安全组备注，最多100个字符。
   */
  GroupDescription?: string
}

/**
 * ModifyModuleConfig请求参数结构体
 */
export interface ModifyModuleConfigRequest {
  /**
   * 模块ID。
   */
  ModuleId: string

  /**
   * 机型ID。
   */
  InstanceType: string

  /**
   * 默认数据盘大小，单位：G。范围不得超过数据盘范围大小，详看DescribeConfig。
   */
  DefaultDataDiskSize: number
}

/**
 * 描述实例的位置相关信息。
 */
export interface Position {
  /**
   * 实例所在的Zone的信息。
   */
  ZoneInfo: ZoneInfo

  /**
   * 实例所在的国家的信息。
   */
  Country: Country

  /**
   * 实例所在的Area的信息。
   */
  Area: Area

  /**
   * 实例所在的省份的信息。
   */
  Province: Province

  /**
   * 实例所在的城市的信息。
   */
  City: City

  /**
   * 实例所在的Region的信息。
   */
  RegionInfo: RegionInfo
}

/**
 * DescribePeakNetworkOverview返回参数结构体
 */
export interface DescribePeakNetworkOverviewResponse {
  /**
      * 网络峰值数组。
注意：此字段可能返回 null，表示取不到有效值。
      */
  PeakNetworkRegionSet?: Array<PeakNetworkRegionInfo>

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * AttachNetworkInterface返回参数结构体
 */
export interface AttachNetworkInterfaceResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 安全组规则对象
 */
export interface SecurityGroupPolicy {
  /**
   * 安全组规则索引号
   */
  PolicyIndex?: number

  /**
   * 协议, 取值: TCP,UDP, ICMP。
   */
  Protocol?: string

  /**
   * 端口(all, 离散port, range)。
   */
  Port?: string

  /**
   * 协议端口ID或者协议端口组ID。ServiceTemplate和Protocol+Port互斥。
   */
  ServiceTemplate?: ServiceTemplateSpecification

  /**
   * 网段或IP(互斥)。
   */
  CidrBlock?: string

  /**
   * 安全组实例ID，例如：esg-ohuuioma。
   */
  SecurityGroupId?: string

  /**
   * IP地址ID或者ID地址组ID。
   */
  AddressTemplate?: AddressTemplateSpecification

  /**
   * ACCEPT 或 DROP。
   */
  Action?: string

  /**
   * 安全组规则描述。
   */
  PolicyDescription?: string

  /**
      * 修改时间，例如 2020-07-22 19：27：23
注意：此字段可能返回 null，表示取不到有效值。
      */
  ModifyTime?: string
}

/**
 * DescribeVpcs请求参数结构体
 */
export interface DescribeVpcsRequest {
  /**
   * VPC实例ID。形如：vpc-f49l6u0z。每次请求的实例的上限为100。参数不支持同时指定VpcIds和Filters。
   */
  VpcIds?: Array<string>

  /**
      * 过滤条件，参数不支持同时指定VpcIds和Filters。
vpc-name - String - VPC实例名称，只支持单值的模糊查询。
vpc-id - String - VPC实例ID形如：vpc-f49l6u0z。
cidr-block - String - vpc的cidr，只支持单值的模糊查询。
region - String - vpc的region。
tag-key - String -是否必填：否- 按照标签键进行过滤。
tag:tag-key - String - 是否必填：否 - 按照标签键值对进行过滤。
      */
  Filters?: Array<Filter>

  /**
   * 偏移量
   */
  Offset?: number

  /**
   * 返回数量
   */
  Limit?: number

  /**
   * 地域
   */
  EcmRegion?: string

  /**
   * 排序方式：time时间倒序, default按照网络规划排序
   */
  Sort?: string
}

/**
 * DescribeRouteConflicts返回参数结构体
 */
export interface DescribeRouteConflictsResponse {
  /**
      * 路由策略冲突列表
注意：此字段可能返回 null，表示取不到有效值。
      */
  RouteConflictSet?: Array<RouteConflict>

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeRouteTables请求参数结构体
 */
export interface DescribeRouteTablesRequest {
  /**
   * 路由表实例ID，例如：rtb-azd4dt1c。
   */
  RouteTableIds?: Array<string>

  /**
      * 过滤条件，参数不支持同时指定RouteTableIds和Filters。
route-table-id - String - （过滤条件）路由表实例ID。
route-table-name - String - （过滤条件）路由表名称。
vpc-id - String - （过滤条件）VPC实例ID，形如：vpc-f49l6u0z。
association.main - String - （过滤条件）是否主路由表。
      */
  Filters?: Array<Filter>

  /**
   * 偏移量
   */
  Offset?: number

  /**
   * 限数
   */
  Limit?: number

  /**
   * ECM 地域，传空或不传表示所有区域
   */
  EcmRegion?: string
}

/**
 * DescribeBaseOverview请求参数结构体
 */
export type DescribeBaseOverviewRequest = null

/**
 * CreateHaVip返回参数结构体
 */
export interface CreateHaVipResponse {
  /**
   * HAVIP对象。
   */
  HaVip?: HaVip

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * AssociateSecurityGroups返回参数结构体
 */
export interface AssociateSecurityGroupsResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 磁盘信息
 */
export interface DiskInfo {
  /**
   * 磁盘类型：LOCAL_BASIC
   */
  DiskType: string

  /**
   * 磁盘ID
   */
  DiskId: string

  /**
   * 磁盘大小（GB）
   */
  DiskSize: number
}

/**
 * ModifyRouteTableAttribute请求参数结构体
 */
export interface ModifyRouteTableAttributeRequest {
  /**
   * 路由表实例ID，例如：rtb-azd4dt1c
   */
  RouteTableId: string

  /**
   * 路由表名称
   */
  RouteTableName: string
}

/**
 * BatchDeregisterTargets请求参数结构体
 */
export interface BatchDeregisterTargetsRequest {
  /**
   * 负载均衡ID
   */
  LoadBalancerId: string

  /**
   * 解绑目标
   */
  Targets: Array<BatchTarget>
}

/**
 * DescribeImportImageOs请求参数结构体
 */
export type DescribeImportImageOsRequest = null

/**
 * DisableRoutes请求参数结构体
 */
export interface DisableRoutesRequest {
  /**
   * 路由表唯一ID。
   */
  RouteTableId: string

  /**
   * 路由策略ID。
   */
  RouteIds: Array<number>
}

/**
 * ModifyListener返回参数结构体
 */
export interface ModifyListenerResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeTargetHealth返回参数结构体
 */
export interface DescribeTargetHealthResponse {
  /**
      * 负载均衡实例列表
注意：此字段可能返回 null，表示取不到有效值。
      */
  LoadBalancers?: Array<LoadBalancerHealth>

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeLoadBalanceTaskStatus返回参数结构体
 */
export interface DescribeLoadBalanceTaskStatusResponse {
  /**
      * 任务的当前状态。 0：成功，1：失败，2：进行中。
注意：此字段可能返回 null，表示取不到有效值。
      */
  Status?: number

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * EnableRoutes请求参数结构体
 */
export interface EnableRoutesRequest {
  /**
   * 路由表唯一ID。
   */
  RouteTableId: string

  /**
   * 路由策略ID。
   */
  RouteIds: Array<number>
}

/**
 * ModifyDefaultSubnet请求参数结构体
 */
export interface ModifyDefaultSubnetRequest {
  /**
   * ECM地域
   */
  EcmRegion: string

  /**
   * ECM可用区
   */
  Zone: string

  /**
   * 私有网络ID
   */
  VpcId: string

  /**
   * 子网ID
   */
  SubnetId: string
}

/**
 * DescribeInstances请求参数结构体
 */
export interface DescribeInstancesRequest {
  /**
      * 过滤条件。
zone      String      是否必填：否     （过滤条件）按照可用区英文标识符过滤。
zone-name      String      是否必填：否     （过滤条件）按照可用区中文名过滤,支持模糊匹配。
module-id      String      是否必填：否     （过滤条件）按照模块ID过滤。
instance-id      String      是否必填：否      （过滤条件）按照实例ID过滤。
instance-name      String      是否必填：否      （过滤条件）按照实例名称过滤,支持模糊匹配。
ip-address      String      是否必填：否      （过滤条件）按照实例的内网/公网IP过滤。
instance-uuid   string 是否必填：否 （过滤条件）按照uuid过滤实例列表。
instance-state  string  是否必填：否 （过滤条件）按照实例状态更新实例列表。
internet-service-provider      String      是否必填：否      （过滤条件）按照实例公网IP所属的运营商进行过滤。
tag-key      String      是否必填：否      （过滤条件）按照标签键进行过滤。
tag:tag-key      String      是否必填：否      （过滤条件）按照标签键值对进行过滤。 tag-key使用具体的标签键进行替换。
instance-family      String      是否必填：否      （过滤条件）按照机型family过滤。
module-name      String      是否必填：否      （过滤条件）按照模块名称过滤,支持模糊匹配。
image-id      String      是否必填：否      （过滤条件）按照实例的镜像ID过滤。
vpc-id String      是否必填：否      （过滤条件）按照实例的vpc id过滤。
subnet-id String      是否必填：否      （过滤条件）按照实例的subnet id过滤。

若不传Filters参数则表示查询所有相关的实例信息。
单次请求的Filter.Values的上限为5。
      */
  Filters?: Array<Filter>

  /**
   * 偏移量，默认为0。
   */
  Offset?: number

  /**
   * 返回数量，默认为20(如果查询结果数目大于等于20)，最大值为100。
   */
  Limit?: number

  /**
      * 指定排序字段。目前支持的可选值如下
timestamp 按实例创建时间排序。
注意：目前仅支持按创建时间排序，后续可能会有扩展。
如果不传，默认按实例创建时间排序
      */
  OrderByField?: string

  /**
   * 指定排序是降序还是升序。0表示降序； 1表示升序。如果不传默认为降序
   */
  OrderDirection?: number
}

/**
 * CreateListener请求参数结构体
 */
export interface CreateListenerRequest {
  /**
   * 负载均衡实例 ID
   */
  LoadBalancerId: string

  /**
   * 要将监听器创建到哪些端口，每个端口对应一个新的监听器
   */
  Ports: Array<number>

  /**
   * 监听器协议： TCP | UDP
   */
  Protocol: string

  /**
   * 要创建的监听器名称列表，名称与Ports数组按序一一对应，如不需立即命名，则无需提供此参数
   */
  ListenerNames?: Array<string>

  /**
   * 健康检查相关参数
   */
  HealthCheck?: HealthCheck

  /**
   * 会话保持时间，单位：秒。可选值：30~3600，默认 0，表示不开启。此参数仅适用于TCP/UDP监听器。
   */
  SessionExpireTime?: number

  /**
      * 监听器转发的方式。可选值：WRR、LEAST_CONN
分别表示按权重轮询、最小连接数， 默认为 WRR。
      */
  Scheduler?: string

  /**
   * 会话保持类型。不传或传NORMAL表示默认会话保持类型。QUIC_CID 表示根据Quic Connection ID做会话保持。QUIC_CID只支持UDP协议。
   */
  SessionType?: string
}

/**
 * DescribeTaskResult请求参数结构体
 */
export interface DescribeTaskResultRequest {
  /**
   * ECM 地域
   */
  EcmRegion: string

  /**
   * 异步任务ID。
   */
  TaskId: string
}

/**
 * 私有网络相关信息配置。
 */
export interface VirtualPrivateCloud {
  /**
   * 私有网络ID，形如vpc-xxx。
   */
  VpcId: string

  /**
   * 私有网络子网ID，形如subnet-xxx。
   */
  SubnetId: string

  /**
      * 是否用作公网网关。公网网关只有在实例拥有公网IP以及处于私有网络下时才能正常使用。取值范围：
TRUE：表示用作公网网关
FALSE：表示不用作公网网关

默认取值：FALSE。
      */
  AsVpcGateway?: boolean

  /**
   * 私有网络子网 IP 数组，在创建实例、修改实例vpc属性操作中可使用此参数。
   */
  PrivateIpAddresses?: Array<string>

  /**
   * 为弹性网卡指定随机生成的 IPv6 地址数量。
   */
  Ipv6AddressCount?: number
}

/**
 * AssociateAddress返回参数结构体
 */
export interface AssociateAddressResponse {
  /**
   * 异步任务TaskId。可以使用DescribeTaskResult接口查询任务状态。
   */
  TaskId?: string

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 过滤器Filter;由Name和ValueSet组成，是string的key和字符串数组的value
 */
export interface Filter {
  /**
   * 过滤字段名称
   */
  Name: string

  /**
   * 过滤字段内容数组
   */
  Values: Array<string>
}

/**
 * CreateRouteTable请求参数结构体
 */
export interface CreateRouteTableRequest {
  /**
   * 待操作的VPC实例ID。可通过DescribeVpcs接口返回值中的VpcId获取。
   */
  VpcId: string

  /**
   * 路由表名称，最大长度不能超过60个字节。
   */
  RouteTableName: string

  /**
   * ecm地域
   */
  EcmRegion: string
}

/**
 * 实例的公网ip相关信息。
 */
export interface PublicIPAddressInfo {
  /**
   * 计费模式。
   */
  ChargeMode: string

  /**
   * 实例的公网ip。
   */
  PublicIPAddress: string

  /**
   * 实例的公网ip所属的运营商。
   */
  ISP: ISP

  /**
   * 实例的最大出带宽上限，单位为Mbps。
   */
  MaxBandwidthOut: number

  /**
   * 实例的最大入带宽上限，单位为Mbps。
   */
  MaxBandwidthIn: number
}

/**
 * TerminateInstances返回参数结构体
 */
export interface TerminateInstancesResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateHaVip请求参数结构体
 */
export interface CreateHaVipRequest {
  /**
   * HAVIP所在私有网络ID。
   */
  VpcId: string

  /**
   * HAVIP所在子网ID。
   */
  SubnetId: string

  /**
   * HAVIP名称。
   */
  HaVipName: string

  /**
   * 指定虚拟IP地址，必须在VPC网段内且未被占用。不指定则自动分配。
   */
  Vip?: string
}

/**
 * DescribeAddresses请求参数结构体
 */
export interface DescribeAddressesRequest {
  /**
   * ECM 地域
   */
  EcmRegion: string

  /**
   * 标识 EIP 的唯一 ID 列表。EIP 唯一 ID 形如：eip-11112222。参数不支持同时指定AddressIds和Filters。
   */
  AddressIds?: Array<string>

  /**
      * 每次请求的Filters的上限为10，Filter.Values的上限为5。参数不支持同时指定AddressIds和Filters。详细的过滤条件如下：
address-id - String - 是否必填：否 - （过滤条件）按照 EIP 的唯一 ID 过滤。EIP 唯一 ID 形如：eip-11112222。
address-name - String - 是否必填：否 - （过滤条件）按照 EIP 名称过滤。不支持模糊过滤。
address-ip - String - 是否必填：否 - （过滤条件）按照 EIP 的 IP 地址过滤。
address-status - String - 是否必填：否 - （过滤条件）按照 EIP 的状态过滤。取值范围：详见EIP状态列表。
instance-id - String - 是否必填：否 - （过滤条件）按照 EIP 绑定的实例 ID 过滤。实例 ID 形如：ins-11112222。
private-ip-address - String - 是否必填：否 - （过滤条件）按照 EIP 绑定的内网 IP 过滤。
network-interface-id - String - 是否必填：否 - （过滤条件）按照 EIP 绑定的弹性网卡 ID 过滤。弹性网卡 ID 形如：eni-11112222。
is-arrears - String - 是否必填：否 - （过滤条件）按照 EIP 是否欠费进行过滤。（TRUE：EIP 处于欠费状态|FALSE：EIP 费用状态正常）
      */
  Filters?: Array<Filter>

  /**
   * 偏移量，默认为0。
   */
  Offset?: number

  /**
   * 返回数量，默认为20，最大值为100。
   */
  Limit?: number
}

/**
 * DescribeSecurityGroupPolicies请求参数结构体
 */
export interface DescribeSecurityGroupPoliciesRequest {
  /**
   * 安全组实例ID，例如：esg-33ocnj9n，可通过[DescribeSecurityGroups](https://cloud.tencent.com/document/product/1108/47697)获取。
   */
  SecurityGroupId: string
}

/**
 * MigrateNetworkInterface请求参数结构体
 */
export interface MigrateNetworkInterfaceRequest {
  /**
   * ECM 地域
   */
  EcmRegion: string

  /**
   * 弹性网卡实例ID，例如：eni-m6dyj72l。
   */
  NetworkInterfaceId: string

  /**
   * 弹性网卡当前绑定的ECM实例ID。形如：ein-r8hr2upy。
   */
  SourceInstanceId: string

  /**
   * 待迁移的目的ECM实例ID。
   */
  DestinationInstanceId: string
}

/**
 * DescribeAddressQuota返回参数结构体
 */
export interface DescribeAddressQuotaResponse {
  /**
   * 账户 EIP 配额信息。
   */
  QuotaSet?: Array<EipQuota>

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateSecurityGroupPolicies返回参数结构体
 */
export interface CreateSecurityGroupPoliciesResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * CreateSecurityGroup返回参数结构体
 */
export interface CreateSecurityGroupResponse {
  /**
   * 安全组对象。
   */
  SecurityGroup?: SecurityGroup

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * Zone的实例信息
 */
export interface ZoneInstanceInfo {
  /**
   * Zone名称
   */
  ZoneName: string

  /**
   * 实例数量
   */
  InstanceNum: number
}

/**
 * DeleteLoadBalancer返回参数结构体
 */
export interface DeleteLoadBalancerResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DeleteSecurityGroup请求参数结构体
 */
export interface DeleteSecurityGroupRequest {
  /**
   * 安全组实例ID，例如esg-33ocnj9n，可通过DescribeSecurityGroups获取。
   */
  SecurityGroupId: string
}

/**
 * ReplaceRoutes请求参数结构体
 */
export interface ReplaceRoutesRequest {
  /**
   * 路由表实例ID。
   */
  RouteTableId: string

  /**
   * 路由策略对象。
   */
  Routes: Array<Route>
}

/**
 * CreateRouteTable返回参数结构体
 */
export interface CreateRouteTableResponse {
  /**
   * 路由表对象
   */
  RouteTable?: RouteTable

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyModuleImage返回参数结构体
 */
export interface ModifyModuleImageResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DeleteRoutes返回参数结构体
 */
export interface DeleteRoutesResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ResetInstances请求参数结构体
 */
export interface ResetInstancesRequest {
  /**
   * 待重装的实例ID列表。
   */
  InstanceIdSet: Array<string>

  /**
   * 重装使用的镜像ID，若未指定，则使用各个实例当前的镜像进行重装。
   */
  ImageId?: string

  /**
   * 密码设置，若未指定，则后续将以站内信的形式通知密码。
   */
  Password?: string

  /**
   * 是否开启云监控和云镜服务，未指定时默认开启。
   */
  EnhancedService?: EnhancedService

  /**
   * 是否保留数据盘数据，取值"true"/"false"。默认为"true"
   */
  KeepData?: string
}

/**
 * 峰值网络数据
 */
export interface PeakNetwork {
  /**
   * 记录时间。
   */
  RecordTime: string

  /**
   * 入带宽数据。
   */
  PeakInNetwork: string

  /**
   * 出带宽数据。
   */
  PeakOutNetwork: string
}

/**
 * DescribeCustomImageTask请求参数结构体
 */
export interface DescribeCustomImageTaskRequest {
  /**
      * 支持key,value查询
task-id: 异步任务ID
image-id: 镜像ID
image-name: 镜像名称
      */
  Filters: Array<Filter>
}

/**
 * DescribeSecurityGroupAssociationStatistics返回参数结构体
 */
export interface DescribeSecurityGroupAssociationStatisticsResponse {
  /**
   * 安全组关联实例统计。
   */
  SecurityGroupAssociationStatisticsSet?: Array<SecurityGroupAssociationStatistics>

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeTargets返回参数结构体
 */
export interface DescribeTargetsResponse {
  /**
      * 监听器后端绑定的机器信息
注意：此字段可能返回 null，表示取不到有效值。
      */
  Listeners?: Array<ListenerBackend>

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 支持的操作系统类型，根据windows和Linux分类。
 */
export interface ImageOsList {
  /**
      * 支持的windows操作系统
注意：此字段可能返回 null，表示取不到有效值。
      */
  Windows: Array<string>

  /**
      * 支持的linux操作系统
注意：此字段可能返回 null，表示取不到有效值。
      */
  Linux: Array<string>
}

/**
 * 实例可执行操作
 */
export interface InstanceOperator {
  /**
   * 实例id
   */
  InstanceId: string

  /**
      * 实例禁止的操作
注意：此字段可能返回 null，表示取不到有效值。
      */
  DeniedActions: Array<OperatorAction>
}

/**
 * ModifyAddressAttribute返回参数结构体
 */
export interface ModifyAddressAttributeResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ImportImage返回参数结构体
 */
export interface ImportImageResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * BatchModifyTargetWeight请求参数结构体
 */
export interface BatchModifyTargetWeightRequest {
  /**
   * 负载均衡实例 ID
   */
  LoadBalancerId: string

  /**
   * 要批量修改权重的列表
   */
  ModifyList: Array<TargetsWeightRule>
}

/**
 * CreateSecurityGroup请求参数结构体
 */
export interface CreateSecurityGroupRequest {
  /**
   * 安全组名称，可任意命名，但不得超过60个字符。
   */
  GroupName: string

  /**
   * 安全组备注，最多100个字符。
   */
  GroupDescription: string

  /**
   * 指定绑定的标签列表，例如：[{"Key": "city", "Value": "shanghai"}]
   */
  Tags?: Array<Tag>
}

/**
 * DescribeSecurityGroupLimits请求参数结构体
 */
export type DescribeSecurityGroupLimitsRequest = null

/**
 * 负责均衡批量目标项
 */
export interface BatchTarget {
  /**
      * 监听器ID
注意：此字段可能返回 null，表示取不到有效值。
      */
  ListenerId?: string

  /**
      * 绑定端口
注意：此字段可能返回 null，表示取不到有效值。
      */
  Port?: number

  /**
      * 子机ID
注意：此字段可能返回 null，表示取不到有效值。
      */
  InstanceId?: string

  /**
      * 弹性网卡ip
注意：此字段可能返回 null，表示取不到有效值。
      */
  EniIp?: string

  /**
      * 子机权重，范围[0, 100]。绑定时如果不存在，则默认为10。
注意：此字段可能返回 null，表示取不到有效值。
      */
  Weight?: number
}

/**
 * 城市信息
 */
export interface City {
  /**
   * 城市ID
   */
  CityId: string

  /**
   * 城市名称
   */
  CityName: string
}

/**
 * 实例的内网ip相关信息。
 */
export interface PrivateIPAddressInfo {
  /**
      * 实例的内网ip。
注意：此字段可能返回 null，表示取不到有效值。
      */
  PrivateIPAddress: string
}

/**
 * DescribeTargetHealth请求参数结构体
 */
export interface DescribeTargetHealthRequest {
  /**
   * 要查询的负载均衡实例 ID列表
   */
  LoadBalancerIds: Array<string>
}

/**
 * EnableRoutes返回参数结构体
 */
export interface EnableRoutesResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DeleteNetworkInterface返回参数结构体
 */
export interface DeleteNetworkInterfaceResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * Module的简要信息
 */
export interface SimpleModule {
  /**
   * 模块ID
   */
  ModuleId: string

  /**
   * 模块名称
   */
  ModuleName: string
}

/**
 * DescribePeakNetworkOverview请求参数结构体
 */
export interface DescribePeakNetworkOverviewRequest {
  /**
   * 开始时间（xxxx-xx-xx）如2019-08-14，默认为一周之前的日期，不应与当前日期间隔超过30天。
   */
  StartTime?: string

  /**
   * 结束时间（xxxx-xx-xx）如2019-08-14，默认为昨天，不应与当前日期间隔超过30天。当开始与结束间隔不超过1天时会返回1分钟粒度的数据，不超过7天时返回5分钟粒度的数据，否则返回1小时粒度的数据。
   */
  EndTime?: string

  /**
      * 过滤条件。

region    String      是否必填：否     （过滤条件）按照region过滤，不支持模糊匹配。注意 region 填上需要查询ecm region才能返回数据。
area       String      是否必填：否     （过滤条件）按照大区过滤，不支持模糊匹配。大区包括：china-central、china-east等等，可以通过DescribeNode获得所有大区；也可使用ALL_REGION表示所有地区。
isp         String      是否必填：否     （过滤条件）按照运营商过滤大区流量，运营商包括CTCC、CUCC和CMCC。只和area同时使用，且一次只能指定一种运营商。

region和area只应填写一个。
      */
  Filters?: Array<Filter>
}

/**
 * ModifyModuleIpDirect返回参数结构体
 */
export interface ModifyModuleIpDirectResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * AssignPrivateIpAddresses返回参数结构体
 */
export interface AssignPrivateIpAddressesResponse {
  /**
      * 内网IP详细信息。
注意：此字段可能返回 null，表示取不到有效值。
      */
  PrivateIpAddressSet?: Array<PrivateIpAddressSpecification>

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeSecurityGroups请求参数结构体
 */
export interface DescribeSecurityGroupsRequest {
  /**
   * 安全组实例ID，例如：esg-33ocnj9n，可通过[DescribeSecurityGroups](https://cloud.tencent.com/document/product/1108/47697)获取。每次请求的实例的上限为100。参数不支持同时指定SecurityGroupIds和Filters。
   */
  SecurityGroupIds?: Array<string>

  /**
      * 过滤条件，参数不支持同时指定SecurityGroupIds和Filters。
security-group-id - String - （过滤条件）安全组ID。
security-group-name - String - （过滤条件）安全组名称。
tag-key - String -是否必填：否- （过滤条件）按照标签键进行过滤。
tag:tag-key - String - 是否必填：否 - （过滤条件）按照标签键值对进行过滤。 tag-key使用具体的标签键进行替换。
      */
  Filters?: Array<Filter>

  /**
   * 偏移量，默认为0。
   */
  Offset?: number

  /**
   * 返回数量，默认为20，最大值为100。
   */
  Limit?: number
}

/**
 * region维度的网络峰值信息
 */
export interface PeakNetworkRegionInfo {
  /**
   * region信息
   */
  Region: string

  /**
      * 网络峰值集合
注意：此字段可能返回 null，表示取不到有效值。
      */
  PeakNetworkSet: Array<PeakNetwork>
}

/**
 * ModifyHaVipAttribute请求参数结构体
 */
export interface ModifyHaVipAttributeRequest {
  /**
   * HAVIP唯一ID，形如：havip-9o233uri。
   */
  HaVipId: string

  /**
   * HAVIP名称，可任意命名，但不得超过60个字符。
   */
  HaVipName: string
}

/**
 * RebootInstances返回参数结构体
 */
export interface RebootInstancesResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyModuleIpDirect请求参数结构体
 */
export interface ModifyModuleIpDirectRequest {
  /**
   * 模块ID。
   */
  ModuleId: string

  /**
      * 是否关闭IP直通。取值范围：
true：表示关闭IP直通
false：表示开通IP直通
      */
  CloseIpDirect: boolean
}

/**
 * ModifyAddressesBandwidth请求参数结构体
 */
export interface ModifyAddressesBandwidthRequest {
  /**
   * ECM 地域
   */
  EcmRegion: string

  /**
   * EIP唯一标识ID，形如'eip-xxxxxxx'
   */
  AddressIds: Array<string>

  /**
   * 调整带宽目标值
   */
  InternetMaxBandwidthOut: number
}

/**
 * DeleteSecurityGroupPolicies返回参数结构体
 */
export interface DeleteSecurityGroupPoliciesResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyAddressAttribute请求参数结构体
 */
export interface ModifyAddressAttributeRequest {
  /**
   * ECM 地域
   */
  EcmRegion: string

  /**
   * 标识 EIP 的唯一 ID。EIP 唯一 ID 形如：eip-11112222。
   */
  AddressId: string

  /**
   * 修改后的 EIP 名称。长度上限为20个字符。
   */
  AddressName?: string

  /**
   * 设定EIP是否直通，"TRUE"表示直通，"FALSE"表示非直通。注意该参数仅对EIP直通功能可见的用户可以设定。
   */
  EipDirectConnection?: string
}

/**
 * PeakFamilyInfo 按机型类别分类的cpu等数据的峰值信息
 */
export interface PeakFamilyInfo {
  /**
   * 机型类别信息。
   */
  InstanceFamily: InstanceFamilyTypeConfig

  /**
   * 基础数据峰值信息。
   */
  PeakBaseSet: Array<PeakBase>
}

/**
 * DescribePeakBaseOverview返回参数结构体
 */
export interface DescribePeakBaseOverviewResponse {
  /**
      * 基础峰值列表。
注意：此字段可能返回 null，表示取不到有效值。
      */
  PeakFamilyInfoSet?: Array<PeakFamilyInfo>

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyImageAttribute返回参数结构体
 */
export interface ModifyImageAttributeResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeHaVips请求参数结构体
 */
export interface DescribeHaVipsRequest {
  /**
   * HAVIP数组，HAVIP唯一ID，形如：havip-9o233uri。
   */
  HaVipIds?: Array<string>

  /**
      * 过滤条件，参数不支持同时指定HaVipIds和Filters。
havip-id - String - HAVIP唯一ID，形如：havip-9o233uri。
havip-name - String - HAVIP名称。
vpc-id - String - HAVIP所在私有网络ID。
subnet-id - String - HAVIP所在子网ID。
      */
  Filters?: Array<Filter>

  /**
   * 偏移量。
   */
  Offset?: number

  /**
   * 返回数量。
   */
  Limit?: number

  /**
   * Ecm 区域，不填代表全部区域。
   */
  EcmRegion?: string
}

/**
 * BatchRegisterTargets请求参数结构体
 */
export interface BatchRegisterTargetsRequest {
  /**
   * 负载均衡ID
   */
  LoadBalancerId: string

  /**
   * 绑定目标
   */
  Targets: Array<BatchTarget>
}

/**
 * DescribeImage返回参数结构体
 */
export interface DescribeImageResponse {
  /**
   * 镜像总数
   */
  TotalCount?: number

  /**
      * 镜像数组
注意：此字段可能返回 null，表示取不到有效值。
      */
  ImageSet?: Array<Image>

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 监听器后端
 */
export interface ListenerBackend {
  /**
      * 监听器 ID
注意：此字段可能返回 null，表示取不到有效值。
      */
  ListenerId?: string

  /**
      * 监听器的协议
注意：此字段可能返回 null，表示取不到有效值。
      */
  Protocol?: string

  /**
      * 监听器的端口
注意：此字段可能返回 null，表示取不到有效值。
      */
  Port?: number

  /**
      * 监听器上绑定的后端服务列表
注意：此字段可能返回 null，表示取不到有效值。
      */
  Targets?: Array<Backend>
}

/**
 * Region和RegionName
 */
export interface RegionInfo {
  /**
   * Region
   */
  Region: string

  /**
   * Region名称
   */
  RegionName: string

  /**
   * RegionID
   */
  RegionId: number
}

/**
 * 标签信息。
 */
export interface TagInfo {
  /**
   * 标签的键。
   */
  TagKey?: string

  /**
   * 标签的值。
   */
  TagValue?: string
}

/**
 * DeleteImage返回参数结构体
 */
export interface DeleteImageResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 描述 EIP 信息
 */
export interface Address {
  /**
   * EIP的ID，是EIP的唯一标识。
   */
  AddressId: string

  /**
   * EIP名称。
   */
  AddressName: string

  /**
   * EIP状态，包含'CREATING'(创建中),'BINDING'(绑定中),'BIND'(已绑定),'UNBINDING'(解绑中),'UNBIND'(已解绑),'OFFLINING'(释放中),'BIND_ENI'(绑定悬空弹性网卡)
   */
  AddressStatus: string

  /**
   * 外网IP地址
   */
  AddressIp: string

  /**
      * 绑定的资源实例ID。
注意：此字段可能返回 null，表示取不到有效值。
      */
  InstanceId: string

  /**
   * 创建时间。ISO 8601 格式：YYYY-MM-DDTHH:mm:ss.sssZ
   */
  CreatedTime: string

  /**
      * 绑定的弹性网卡ID
注意：此字段可能返回 null，表示取不到有效值。
      */
  NetworkInterfaceId: string

  /**
      * 绑定的资源内网ip
注意：此字段可能返回 null，表示取不到有效值。
      */
  PrivateAddressIp: string

  /**
   * 资源隔离状态。true表示eip处于隔离状态，false表示资源处于未隔离状态
   */
  IsArrears: boolean

  /**
   * 资源封堵状态。true表示eip处于封堵状态，false表示eip处于未封堵状态
   */
  IsBlocked: boolean

  /**
   * eip是否支持直通模式。true表示eip支持直通模式，false表示资源不支持直通模式
   */
  IsEipDirectConnection: boolean

  /**
   * eip资源类型，包括"CalcIP","WanIP","EIP","AnycastEIP"。其中"CalcIP"表示设备ip，“WanIP”表示普通公网ip，“EIP”表示弹性公网ip，“AnycastEip”表示加速EIP
   */
  AddressType: string

  /**
   * eip是否在解绑后自动释放。true表示eip将会在解绑后自动释放，false表示eip在解绑后不会自动释放
   */
  CascadeRelease: boolean

  /**
      * 运营商，CTCC电信，CUCC联通，CMCC移动
注意：此字段可能返回 null，表示取不到有效值。
      */
  InternetServiceProvider: string

  /**
      * 带宽上限
注意：此字段可能返回 null，表示取不到有效值。
      */
  Bandwidth: number

  /**
      * 计费模式
注意：此字段可能返回 null，表示取不到有效值。
      */
  PayMode: string
}

/**
 * DescribeNetworkInterfaces返回参数结构体
 */
export interface DescribeNetworkInterfacesResponse {
  /**
   * 符合条件的实例数量。
   */
  TotalCount?: number

  /**
      * 实例详细信息列表。
注意：此字段可能返回 null，表示取不到有效值。
      */
  NetworkInterfaceSet?: Array<NetworkInterface>

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DeleteHaVip请求参数结构体
 */
export interface DeleteHaVipRequest {
  /**
   * HAVIP唯一ID，形如：havip-9o233uri。
   */
  HaVipId: string
}

/**
 * AssignPrivateIpAddresses请求参数结构体
 */
export interface AssignPrivateIpAddressesRequest {
  /**
   * 弹性网卡实例ID，例如：eni-m6dyj72l。
   */
  NetworkInterfaceId: string

  /**
   * ECM 地域
   */
  EcmRegion: string

  /**
   * 指定的内网IP信息，单次最多指定10个。与SecondaryPrivateIpAddressCount至少提供一个。
   */
  PrivateIpAddresses?: Array<PrivateIpAddressSpecification>

  /**
   * 新申请的内网IP地址个数，与PrivateIpAddresses至少提供一个。内网IP地址个数总和不能超过配额数
   */
  SecondaryPrivateIpAddressCount?: number
}

/**
 * ResetInstancesPassword请求参数结构体
 */
export interface ResetInstancesPasswordRequest {
  /**
   * 待重置密码的实例ID列表。在单次请求的过程中，单个region下的请求实例数上限为100。
   */
  InstanceIdSet: Array<string>

  /**
      * 新密码，Linux实例密码必须8到16位，至少包括两项[a-z，A-Z]、[0-9]和[( ) ~ ~ ! @ # $ % ^ & * - + = _ | { } [ ] : ; ' < > , . ? /]中的符号。密码不允许以/符号开头。
Windows实例密码必须12到16位，至少包括三项[a-z]，[A-Z]，[0-9]和[( ) ~ ~ ! @ # $ % ^ & * - + = _ | { } [ ] : ; ' < > , . ? /]中的符号。密码不允许以/符号开头。
如果实例即包含Linux实例又包含Windows实例，则密码复杂度限制按照Windows实例的限制。
      */
  Password: string

  /**
   * 是否强制关机，默认为false。
   */
  ForceStop?: boolean

  /**
   * 待重置密码的实例的用户名，不得超过64个字符。若未指定用户名，则对于Linux而言，默认重置root用户的密码，对于Windows而言，默认重置administrator的密码。
   */
  UserName?: string
}

/**
 * ModifyImageAttribute请求参数结构体
 */
export interface ModifyImageAttributeRequest {
  /**
   * 镜像ID，形如img-gvbnzy6f
   */
  ImageId: string

  /**
      * 设置新的镜像名称；必须满足下列限制：
不得超过20个字符。
- 镜像名称不能与已有镜像重复。
      */
  ImageName?: string

  /**
      * 设置新的镜像描述；必须满足下列限制：
- 不得超过60个字符。
      */
  ImageDescription?: string
}

/**
 * 操作Action
 */
export interface OperatorAction {
  /**
   * 可执行操作
   */
  Action: string

  /**
      * 编码Code
注意：此字段可能返回 null，表示取不到有效值。
      */
  Code: string

  /**
      * 具体信息
注意：此字段可能返回 null，表示取不到有效值。
      */
  Message: string
}

/**
 * CreateVpc请求参数结构体
 */
export interface CreateVpcRequest {
  /**
   * vpc名称，最大长度不能超过60个字节。
   */
  VpcName: string

  /**
   * vpc的cidr，只能为10.*.0.0/16，172.[16-31].0.0/16，192.168.0.0/16这三个内网网段内。
   */
  CidrBlock: string

  /**
   * ECM 地域
   */
  EcmRegion: string

  /**
   * 是否开启组播。true: 开启, false: 不开启。暂不支持
   */
  EnableMulticast?: string

  /**
   * DNS地址，最多支持4个，暂不支持
   */
  DnsServers?: Array<string>

  /**
   * 域名，暂不支持
   */
  DomainName?: string

  /**
   * 指定绑定的标签列表，例如：[{"Key": "city", "Value": "shanghai"}]
   */
  Tags?: Array<Tag>

  /**
   * 描述信息
   */
  Description?: string
}

/**
 * CreateLoadBalancer返回参数结构体
 */
export interface CreateLoadBalancerResponse {
  /**
      * 由负载均衡实例ID组成的数组
注意：此字段可能返回 null，表示取不到有效值。
      */
  LoadBalancerIds?: Array<string>

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 云镜服务；
 */
export interface RunSecurityServiceEnabled {
  /**
   * 是否开启。
   */
  Enabled?: boolean

  /**
   * 云镜版本：0 基础版，1 专业版。目前仅支持基础版
   */
  Version?: number
}

/**
 * DescribeSecurityGroupAssociationStatistics请求参数结构体
 */
export interface DescribeSecurityGroupAssociationStatisticsRequest {
  /**
   * 安全实例ID，例如esg-33ocnj9n，可通过[DescribeSecurityGroups](https://cloud.tencent.com/document/product/1108/47697)获取。
   */
  SecurityGroupIds: Array<string>
}

/**
 * 国家信息
 */
export interface Country {
  /**
   * 国家ID
   */
  CountryId: string

  /**
   * 国家名称
   */
  CountryName: string
}

/**
 * DisassociateSecurityGroups请求参数结构体
 */
export interface DisassociateSecurityGroupsRequest {
  /**
   * 要解绑的安全组ID，类似esg-efil73jd，只支持解绑单个安全组。
   */
  SecurityGroupIds: Array<string>

  /**
   * 被解绑的实例ID，类似ein-lesecurk，支持指定多个实例 。
   */
  InstanceIds: Array<string>
}

/**
 * DescribeRouteTables返回参数结构体
 */
export interface DescribeRouteTablesResponse {
  /**
   * 符合条件的实例数量
   */
  TotalCount?: number

  /**
      * 路由表列表
注意：此字段可能返回 null，表示取不到有效值。
      */
  RouteTableSet?: Array<RouteTable>

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * StopInstances请求参数结构体
 */
export interface StopInstancesRequest {
  /**
   * 需要关机的实例ID列表。在单次请求的过程中，单个region下的请求实例数上限为100。
   */
  InstanceIdSet: Array<string>

  /**
   * 是否在正常关闭失败后选择强制关闭实例，默认为false，即否。
   */
  ForceStop?: boolean

  /**
      * 实例的关闭模式。取值范围：
SOFT_FIRST：表示在正常关闭失败后进行强制关闭;
HARD：直接强制关闭;
SOFT：仅软关机；
默认为SOFT。
      */
  StopType?: string
}

/**
 * ModifySubnetAttribute请求参数结构体
 */
export interface ModifySubnetAttributeRequest {
  /**
   * 子网实例ID。形如：subnet-pxir56ns。
   */
  SubnetId: string

  /**
   * ECM 地域
   */
  EcmRegion: string

  /**
   * 子网名称，最大长度不能超过60个字节。
   */
  SubnetName?: string

  /**
   * 子网是否开启广播。
   */
  EnableBroadcast?: string

  /**
   * 子网的标签键值
   */
  Tags?: Array<Tag>
}

/**
 * AllocateAddresses返回参数结构体
 */
export interface AllocateAddressesResponse {
  /**
      * 申请到的 EIP 的唯一 ID 列表。
注意：此字段可能返回 null，表示取不到有效值。
      */
  AddressSet?: Array<string>

  /**
   * 异步任务TaskId。可以使用DescribeTaskResult接口查询任务状态。
   */
  TaskId?: string

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DisassociateAddress请求参数结构体
 */
export interface DisassociateAddressRequest {
  /**
   * ECM 地域
   */
  EcmRegion: string

  /**
   * 标识 EIP 的唯一 ID。EIP 唯一 ID 形如：eip-11112222。
   */
  AddressId: string

  /**
      * 表示解绑 EIP 之后是否分配普通公网 IP。取值范围：
TRUE：表示解绑 EIP 之后分配普通公网 IP。
FALSE：表示解绑 EIP 之后不分配普通公网 IP。
默认取值：FALSE。

只有满足以下条件时才能指定该参数：
只有在解绑主网卡的主内网 IP 上的 EIP 时才能指定该参数。
解绑 EIP 后重新分配普通公网 IP 操作一个账号每天最多操作 10 次；详情可通过 DescribeAddressQuota 接口获取。
      */
  ReallocateNormalPublicIp?: boolean
}

/**
 * DeleteLoadBalancerListeners返回参数结构体
 */
export interface DeleteLoadBalancerListenersResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeListeners请求参数结构体
 */
export interface DescribeListenersRequest {
  /**
   * 负载均衡实例 ID
   */
  LoadBalancerId: string

  /**
   * 要查询的负载均衡监听器 ID数组
   */
  ListenerIds?: Array<string>

  /**
   * 要查询的监听器协议类型，取值 TCP | UDP
   */
  Protocol?: string

  /**
   * 要查询的监听器的端口
   */
  Port?: number
}

/**
 * AttachNetworkInterface请求参数结构体
 */
export interface AttachNetworkInterfaceRequest {
  /**
   * 弹性网卡实例ID，例如：eni-m6dyj72l。
   */
  NetworkInterfaceId: string

  /**
   * 实例ID。形如：ein-r8hr2upy。
   */
  InstanceId: string

  /**
   * ECM 地域
   */
  EcmRegion: string
}

/**
 * 模块列表Item信息
 */
export interface ModuleItem {
  /**
   * 节点实例统计信息
   */
  NodeInstanceNum: NodeInstanceNum

  /**
   * 模块信息
   */
  Module: Module
}

/**
 * ModifyModuleImage请求参数结构体
 */
export interface ModifyModuleImageRequest {
  /**
   * 默认镜像ID
   */
  DefaultImageId: string

  /**
   * 模块ID
   */
  ModuleId: string
}

/**
 * CreateSecurityGroupPolicies请求参数结构体
 */
export interface CreateSecurityGroupPoliciesRequest {
  /**
   * 安全组实例ID，例如esg-33ocnj9n，可通过DescribeSecurityGroups获取。
   */
  SecurityGroupId: string

  /**
   * 安全组规则集合。
   */
  SecurityGroupPolicySet: SecurityGroupPolicySet
}

/**
 * 云监控服务
 */
export interface RunMonitorServiceEnabled {
  /**
   * 是否开启。
   */
  Enabled?: boolean
}

/**
 * ModifyTargetPort请求参数结构体
 */
export interface ModifyTargetPortRequest {
  /**
   * 负载均衡实例 ID
   */
  LoadBalancerId: string

  /**
   * 负载均衡监听器 ID
   */
  ListenerId: string

  /**
   * 要修改端口的后端服务列表
   */
  Targets: Array<Target>

  /**
   * 后端服务绑定到监听器或转发规则的新端口
   */
  NewPort: number
}

/**
 * DescribeImportImageOs返回参数结构体
 */
export interface DescribeImportImageOsResponse {
  /**
   * 支持的导入镜像的操作系统类型
   */
  ImportImageOsListSupported?: ImageOsList

  /**
   * 支持的导入镜像的操作系统版本
   */
  ImportImageOsVersionSet?: Array<OsVersion>

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeLoadBalancers返回参数结构体
 */
export interface DescribeLoadBalancersResponse {
  /**
      * 满足过滤条件的负载均衡实例总数。此数值与入参中的Limit无关。
注意：此字段可能返回 null，表示取不到有效值。
      */
  TotalCount?: number

  /**
      * 返回的负载均衡实例数组。
注意：此字段可能返回 null，表示取不到有效值。
      */
  LoadBalancerSet?: Array<LoadBalancer>

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * ModifyRouteTableAttribute返回参数结构体
 */
export interface ModifyRouteTableAttributeResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * MigrateNetworkInterface返回参数结构体
 */
export interface MigrateNetworkInterfaceResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DeleteListener返回参数结构体
 */
export interface DeleteListenerResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DeleteImage请求参数结构体
 */
export interface DeleteImageRequest {
  /**
   * 镜像ID列表。
   */
  ImageIDSet: Array<string>
}

/**
 * 模块信息
 */
export interface Module {
  /**
   * 模块Id
   */
  ModuleId: string

  /**
   * 模块名称
   */
  ModuleName: string

  /**
      * 模块状态：
NORMAL：正常
DELETING：删除中 
DELETEFAILED：删除失败
      */
  ModuleState: string

  /**
   * 默认系统盘大小
   */
  DefaultSystemDiskSize: number

  /**
   * 默认数据盘大小
   */
  DefaultDataDiskSize: number

  /**
   * 默认机型
   */
  InstanceTypeConfig: InstanceTypeConfig

  /**
   * 默认镜像
   */
  DefaultImage: Image

  /**
   * 创建时间
   */
  CreateTime: string

  /**
   * 默认出带宽
   */
  DefaultBandwidth: number

  /**
      * 标签集合
注意：此字段可能返回 null，表示取不到有效值。
      */
  TagSet: Array<Tag>

  /**
   * 是否关闭IP直通
   */
  CloseIpDirect: number

  /**
   * 默认安全组id列表
   */
  SecurityGroupIds: Array<string>

  /**
   * 默认入带宽
   */
  DefaultBandwidthIn: number
}

/**
 * DescribeBaseOverview返回参数结构体
 */
export interface DescribeBaseOverviewResponse {
  /**
   * 模块数量，单位：个
   */
  ModuleNum?: number

  /**
   * 节点数量，单位：个
   */
  NodeNum?: number

  /**
   * cpu核数，单位：个
   */
  VcpuNum?: number

  /**
   * 内存大小，单位：G
   */
  MemoryNum?: number

  /**
   * 硬盘大小，单位：G
   */
  StorageNum?: number

  /**
   * 昨日网络峰值,单位：M
   */
  NetworkNum?: number

  /**
   * 实例数量，单位：台
   */
  InstanceNum?: number

  /**
   * 运行中数量，单位：台
   */
  RunningNum?: number

  /**
   * 安全隔离数量，单位：台
   */
  IsolationNum?: number

  /**
   * 过期实例数量，单位：台
   */
  ExpiredNum?: number

  /**
   * 即将过期实例数量，单位：台
   */
  WillExpireNum?: number

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 协议端口模版
 */
export interface ServiceTemplateSpecification {
  /**
   * 协议端口ID，例如：eppm-f5n1f8da。
   */
  ServiceId: string

  /**
   * 协议端口组ID，例如：eppmg-f5n1f8da。
   */
  ServiceGroupId: string
}

/**
 * 后端的健康检查状态
 */
export interface TargetHealth {
  /**
      * Target的内网IP
注意：此字段可能返回 null，表示取不到有效值。
      */
  IP: string

  /**
      * Target绑定的端口
注意：此字段可能返回 null，表示取不到有效值。
      */
  Port: number

  /**
      * 当前健康状态，true：健康，false：不健康（包括尚未开始探测、探测中、状态异常等几种状态）。只有处于健康状态（且权重大于0），负载均衡才会向其转发流量。
注意：此字段可能返回 null，表示取不到有效值。
      */
  HealthStatus: boolean

  /**
      * Target的实例ID
注意：此字段可能返回 null，表示取不到有效值。
      */
  TargetId: string

  /**
      * 当前健康状态的详细信息。如：Alive、Dead、Unknown、Close。Alive状态为健康，Dead状态为异常，Unknown状态包括尚未开始探测、探测中、状态未知，Close为未配置健康检查。
注意：此字段可能返回 null，表示取不到有效值。
      */
  HealthStatusDetail: string
}

/**
 * 监听器健康状态
 */
export interface ListenerHealth {
  /**
      * 监听器ID
注意：此字段可能返回 null，表示取不到有效值。
      */
  ListenerId: string

  /**
      * 监听器名称
注意：此字段可能返回 null，表示取不到有效值。
      */
  ListenerName: string

  /**
      * 监听器的协议
注意：此字段可能返回 null，表示取不到有效值。
      */
  Protocol: string

  /**
      * 监听器的端口
注意：此字段可能返回 null，表示取不到有效值。
      */
  Port: number

  /**
      * 监听器的转发规则列表
注意：此字段可能返回 null，表示取不到有效值。
      */
  Rules: Array<RuleHealth>
}

/**
 * DisassociateSecurityGroups返回参数结构体
 */
export interface DisassociateSecurityGroupsResponse {
  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * DescribeRouteConflicts请求参数结构体
 */
export interface DescribeRouteConflictsRequest {
  /**
   * 路由表实例ID，例如：rtb-azd4dt1c。
   */
  RouteTableId: string

  /**
   * 要检查的与之冲突的目的端列表
   */
  DestinationCidrBlocks: Array<string>
}

/**
 * ReleaseIpv6Addresses返回参数结构体
 */
export interface ReleaseIpv6AddressesResponse {
  /**
   * 任务ID，可以通过DescribeTaskResult查询任务状态
   */
  TaskId?: number

  /**
   * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
   */
  RequestId?: string
}

/**
 * 负载均衡实例信息
 */
export interface LoadBalancer {
  /**
      * 区域。
注意：此字段可能返回 null，表示取不到有效值。
      */
  Region: string

  /**
      * 位置信息。
注意：此字段可能返回 null，表示取不到有效值。
      */
  Position: Position

  /**
      * 负载均衡实例 ID。
注意：此字段可能返回 null，表示取不到有效值。
      */
  LoadBalancerId: string

  /**
      * 负载均衡实例的名称。
注意：此字段可能返回 null，表示取不到有效值。
      */
  LoadBalancerName: string

  /**
      * 负载均衡实例的网络类型：OPEN：公网属性
注意：此字段可能返回 null，表示取不到有效值。
      */
  LoadBalancerType: string

  /**
      * 负载均衡实例的 VIP 列表。
注意：此字段可能返回 null，表示取不到有效值。
      */
  LoadBalancerVips: Array<string>

  /**
      * 负载均衡实例的状态，包括
 0：创建中，1：正常运行。
注意：此字段可能返回 null，表示取不到有效值。
      */
  Status: number

  /**
      * 负载均衡实例的创建时间。
注意：此字段可能返回 null，表示取不到有效值。
      */
  CreateTime: string

  /**
      * 负载均衡实例的上次状态转换时间。
注意：此字段可能返回 null，表示取不到有效值。
      */
  StatusTime: string

  /**
      * 私有网络的 ID。
注意：此字段可能返回 null，表示取不到有效值。
      */
  VpcId: string

  /**
      * 负载均衡实例的标签信息。
注意：此字段可能返回 null，表示取不到有效值。
      */
  Tags: Array<TagInfo>

  /**
      * 负载均衡IP地址所属的ISP。
注意：此字段可能返回 null，表示取不到有效值。
      */
  VipIsp: string

  /**
      * 负载均衡实例的网络属性。
注意：此字段可能返回 null，表示取不到有效值。
      */
  NetworkAttributes: LoadBalancerInternetAccessible
}

/**
 * ip地址相关信息结构体。
 */
export interface AddressInfo {
  /**
      * 实例的外网ip相关信息。
注意：此字段可能返回 null，表示取不到有效值。
      */
  PublicIPAddressInfo: PublicIPAddressInfo

  /**
      * 实例的内网ip相关信息。
注意：此字段可能返回 null，表示取不到有效值。
      */
  PrivateIPAddressInfo: PrivateIPAddressInfo

  /**
      * 实例的外网ipv6相关信息。
注意：此字段可能返回 null，表示取不到有效值。
      */
  PublicIPv6AddressInfo: PublicIPAddressInfo
}
