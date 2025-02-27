import { AbstractClient } from "../../../common/abstract_client";
import { ClientConfig } from "../../../common/interface";
import { DescribeCdnDomainLogsResponse, DescribePushQuotaResponse, DescribePurgeQuotaResponse, DescribeScdnTopDataResponse, DescribeCdnDomainLogsRequest, DescribeTrafficPackagesRequest, CreateClsLogTopicResponse, PurgePathCacheResponse, DescribeCdnOriginIpResponse, DescribePurgeQuotaRequest, StartScdnDomainRequest, StopScdnDomainResponse, DescribeCdnDataResponse, EnableClsLogTopicRequest, UpdateImageConfigResponse, DeleteCdnDomainRequest, DescribePayTypeResponse, ListTopDataRequest, ListClsTopicDomainsRequest, DescribeDomainsResponse, DescribePayTypeRequest, UpdateImageConfigRequest, DisableCachesRequest, UpdateScdnDomainResponse, DescribeDomainsConfigRequest, EnableCachesRequest, DescribeBillingDataRequest, DeleteClsLogTopicRequest, DeleteScdnDomainRequest, DescribeDistrictIspDataResponse, DescribeCdnOriginIpRequest, UpdatePayTypeResponse, DescribeDomainsConfigResponse, DescribeDiagnoseReportRequest, DescribeReportDataResponse, DisableClsLogTopicRequest, ListClsTopicDomainsResponse, DescribeCdnIpRequest, DescribeIpVisitResponse, EnableClsLogTopicResponse, ListClsLogTopicsResponse, AddCdnDomainRequest, UpdateDomainConfigRequest, DescribeCertDomainsRequest, CreateScdnLogTaskResponse, DescribeCertDomainsResponse, DuplicateDomainConfigRequest, DescribePushTasksResponse, AddCdnDomainResponse, ListScdnDomainsResponse, VerifyDomainRecordResponse, ListScdnDomainsRequest, CreateScdnLogTaskRequest, DisableClsLogTopicResponse, DescribeIpStatusRequest, GetDisableRecordsResponse, DuplicateDomainConfigResponse, UpdateScdnDomainRequest, UpdatePayTypeRequest, ManageClsTopicDomainsRequest, ListDiagnoseReportRequest, DescribeOriginDataRequest, ListScdnLogTasksRequest, SearchClsLogResponse, PushUrlsCacheRequest, DescribeReportDataRequest, DescribePushTasksRequest, DescribeScdnTopDataRequest, DescribeUrlViolationsRequest, CreateDiagnoseUrlResponse, CreateClsLogTopicRequest, CreateVerifyRecordResponse, StopCdnDomainRequest, DescribeMapInfoResponse, DescribeTrafficPackagesResponse, DescribeMapInfoRequest, EnableCachesResponse, DescribeIpVisitRequest, GetDisableRecordsRequest, CreateDiagnoseUrlRequest, PurgeUrlsCacheResponse, StartScdnDomainResponse, DeleteClsLogTopicResponse, DescribeBillingDataResponse, DisableCachesResponse, DescribeImageConfigRequest, DescribeCdnIpResponse, DescribeIpStatusResponse, DescribeDistrictIspDataRequest, ListScdnLogTasksResponse, VerifyDomainRecordRequest, DeleteScdnDomainResponse, ListClsLogTopicsRequest, CreateVerifyRecordRequest, PurgePathCacheRequest, DescribeDiagnoseReportResponse, StartCdnDomainResponse, PurgeUrlsCacheRequest, StartCdnDomainRequest, CreateEdgePackTaskResponse, DescribeScdnConfigResponse, DescribePushQuotaRequest, DescribePurgeTasksRequest, PushUrlsCacheResponse, StopCdnDomainResponse, ListTopDataResponse, UpdateDomainConfigResponse, ListDiagnoseReportResponse, SearchClsLogRequest, ManageClsTopicDomainsResponse, DescribeUrlViolationsResponse, DescribePurgeTasksResponse, DescribeOriginDataResponse, DeleteCdnDomainResponse, DescribeCdnDataRequest, DescribeImageConfigResponse, DescribeScdnConfigRequest, StopScdnDomainRequest, DescribeDomainsRequest, CreateEdgePackTaskRequest } from "./cdn_models";
/**
 * cdn client
 * @class
 */
export declare class Client extends AbstractClient {
    constructor(clientConfig: ClientConfig);
    /**
     * 动态打包任务提交接口
     */
    CreateEdgePackTask(req: CreateEdgePackTaskRequest, cb?: (error: string, rep: CreateEdgePackTaskResponse) => void): Promise<CreateEdgePackTaskResponse>;
    /**
     * DescribeIpStatus 用于查询域名所在加速平台的边缘节点、回源节点明细。注意事项：边缘节点（edge）尚未全量开放，未在内测名单中的账号不支持调用
     */
    DescribeIpStatus(req: DescribeIpStatusRequest, cb?: (error: string, rep: DescribeIpStatusResponse) => void): Promise<DescribeIpStatusResponse>;
    /**
     * DescribeMapInfo 用于查询省份对应的 ID，运营商对应的 ID 信息。
     */
    DescribeMapInfo(req: DescribeMapInfoRequest, cb?: (error: string, rep: DescribeMapInfoResponse) => void): Promise<DescribeMapInfoResponse>;
    /**
     * DeleteCdnDomain 用于删除指定加速域名
     */
    DeleteCdnDomain(req: DeleteCdnDomainRequest, cb?: (error: string, rep: DeleteCdnDomainResponse) => void): Promise<DeleteCdnDomainResponse>;
    /**
     * 验证域名解析值
     */
    VerifyDomainRecord(req: VerifyDomainRecordRequest, cb?: (error: string, rep: VerifyDomainRecordResponse) => void): Promise<VerifyDomainRecordResponse>;
    /**
     * DescribePurgeTasks 用于查询提交的 URL 刷新、目录刷新记录及执行进度，通过 PurgePathCache 与 PurgeUrlsCache 接口提交的任务均可通过此接口进行查询。
     */
    DescribePurgeTasks(req: DescribePurgeTasksRequest, cb?: (error: string, rep: DescribePurgeTasksResponse) => void): Promise<DescribePurgeTasksResponse>;
    /**
     * 删除SCDN域名
     */
    DeleteScdnDomain(req: DeleteScdnDomainRequest, cb?: (error: string, rep: DeleteScdnDomainResponse) => void): Promise<DeleteScdnDomainResponse>;
    /**
     * DescribePayType 用于查询用户的计费类型，计费周期等信息。
     */
    DescribePayType(req: DescribePayTypeRequest, cb?: (error: string, rep: DescribePayTypeResponse) => void): Promise<DescribePayTypeResponse>;
    /**
     * DescribeDomainsConfig 用于查询内容分发网络加速域名（含境内、境外）的所有配置信息。
     */
    DescribeDomainsConfig(req: DescribeDomainsConfigRequest, cb?: (error: string, rep: DescribeDomainsConfigResponse) => void): Promise<DescribeDomainsConfigResponse>;
    /**
     * AddCdnDomain 用于新增内容分发网络加速域名。
     */
    AddCdnDomain(req: AddCdnDomainRequest, cb?: (error: string, rep: AddCdnDomainResponse) => void): Promise<AddCdnDomainResponse>;
    /**
     * DescribeIpVisit 用于查询 5 分钟活跃用户数，及日活跃用户数明细

+ 5 分钟活跃用户数：根据日志中客户端 IP，5 分钟粒度去重统计
+ 日活跃用户数：根据日志中客户端 IP，按天粒度去重统计
     */
    DescribeIpVisit(req: DescribeIpVisitRequest, cb?: (error: string, rep: DescribeIpVisitResponse) => void): Promise<DescribeIpVisitResponse>;
    /**
     * DescribeCdnData 用于查询 CDN 实时访问监控数据，支持以下指标查询：

+ 流量（单位为 byte）
+ 带宽（单位为 bps）
+ 请求数（单位为 次）
+ 流量命中率（单位为 %，小数点后保留两位）
+ 状态码 2xx 汇总及各 2 开头状态码明细（单位为 个）
+ 状态码 3xx 汇总及各 3 开头状态码明细（单位为 个）
+ 状态码 4xx 汇总及各 4 开头状态码明细（单位为 个）
+ 状态码 5xx 汇总及各 5 开头状态码明细（单位为 个）
     */
    DescribeCdnData(req: DescribeCdnDataRequest, cb?: (error: string, rep: DescribeCdnDataResponse) => void): Promise<DescribeCdnDataResponse>;
    /**
     * DisableCaches 用于禁用 CDN 上指定 URL 的访问，禁用完成后，全网访问会直接返回 403。（接口尚在内测中，暂未全量开放使用）
     */
    DisableCaches(req: DisableCachesRequest, cb?: (error: string, rep: DisableCachesResponse) => void): Promise<DisableCachesResponse>;
    /**
     * DescribeDomains 用于查询内容分发网络加速域名（含境内、境外）基本配置信息，包括项目ID、服务状态，业务类型、创建时间、更新时间等信息。
     */
    DescribeDomains(req: DescribeDomainsRequest, cb?: (error: string, rep: DescribeDomainsResponse) => void): Promise<DescribeDomainsResponse>;
    /**
     * 生成一条子域名解析，提示客户添加到域名解析上，用于泛域名及域名取回校验归属权
     */
    CreateVerifyRecord(req: CreateVerifyRecordRequest, cb?: (error: string, rep: CreateVerifyRecordResponse) => void): Promise<CreateVerifyRecordResponse>;
    /**
     * GetDisableRecords 用于查询资源禁用历史，及 URL 当前状态。（接口尚在内测中，暂未全量开放使用）
     */
    GetDisableRecords(req: GetDisableRecordsRequest, cb?: (error: string, rep: GetDisableRecordsResponse) => void): Promise<GetDisableRecordsResponse>;
    /**
     * ManageClsTopicDomains 用于管理某日志主题下绑定的域名列表。
     */
    ManageClsTopicDomains(req: ManageClsTopicDomainsRequest, cb?: (error: string, rep: ManageClsTopicDomainsResponse) => void): Promise<ManageClsTopicDomainsResponse>;
    /**
     * CreateDiagnoseUrl 用于添加域名诊断任务URL
     */
    CreateDiagnoseUrl(req: CreateDiagnoseUrlRequest, cb?: (error: string, rep: CreateDiagnoseUrlResponse) => void): Promise<CreateDiagnoseUrlResponse>;
    /**
     * StartCdnDomain 用于启用已停用域名的加速服务
     */
    StartCdnDomain(req: StartCdnDomainRequest, cb?: (error: string, rep: StartCdnDomainResponse) => void): Promise<StartCdnDomainResponse>;
    /**
     * 拷贝参考域名的配置至新域名。暂不支持自有证书以及定制化配置
     */
    DuplicateDomainConfig(req: DuplicateDomainConfigRequest, cb?: (error: string, rep: DuplicateDomainConfigResponse) => void): Promise<DuplicateDomainConfigResponse>;
    /**
     * StopScdnDomain 用于关闭域名的安全防护配置
     */
    StopScdnDomain(req: StopScdnDomainRequest, cb?: (error: string, rep: StopScdnDomainResponse) => void): Promise<StopScdnDomainResponse>;
    /**
     * DescribeCertDomains 用于校验SSL证书并提取证书中包含的域名。
     */
    DescribeCertDomains(req: DescribeCertDomainsRequest, cb?: (error: string, rep: DescribeCertDomainsResponse) => void): Promise<DescribeCertDomainsResponse>;
    /**
     * ListDiagnoseReport 用于获取用户诊断URL访问后各个子任务的简要详情。
     */
    ListDiagnoseReport(req: ListDiagnoseReportRequest, cb?: (error: string, rep: ListDiagnoseReportResponse) => void): Promise<ListDiagnoseReportResponse>;
    /**
     * DescribePurgeQuota 用于查询账户刷新配额和每日可用量。
     */
    DescribePurgeQuota(req?: DescribePurgeQuotaRequest, cb?: (error: string, rep: DescribePurgeQuotaResponse) => void): Promise<DescribePurgeQuotaResponse>;
    /**
     * UpdateScdnDomain 用于修改 SCDN 加速域名安全相关配置
     */
    UpdateScdnDomain(req: UpdateScdnDomainRequest, cb?: (error: string, rep: UpdateScdnDomainResponse) => void): Promise<UpdateScdnDomainResponse>;
    /**
     * ListScdnLogTasks 用于查询SCDN日志下载任务列表,以及展示下载任务基本信息
     */
    ListScdnLogTasks(req?: ListScdnLogTasksRequest, cb?: (error: string, rep: ListScdnLogTasksResponse) => void): Promise<ListScdnLogTasksResponse>;
    /**
     * CreateScdnLogTask 用于创建事件日志任务
     */
    CreateScdnLogTask(req: CreateScdnLogTaskRequest, cb?: (error: string, rep: CreateScdnLogTaskResponse) => void): Promise<CreateScdnLogTaskResponse>;
    /**
     * DescribeImageConfig 用于获取域名图片优化的当前配置，支持Webp、TPG 和 Guetzli。
     */
    DescribeImageConfig(req: DescribeImageConfigRequest, cb?: (error: string, rep: DescribeImageConfigResponse) => void): Promise<DescribeImageConfigResponse>;
    /**
     * 获取SCDN的Top数据
     */
    DescribeScdnTopData(req: DescribeScdnTopDataRequest, cb?: (error: string, rep: DescribeScdnTopDataResponse) => void): Promise<DescribeScdnTopDataResponse>;
    /**
     * SearchClsLog 用于 CLS 日志检索。支持检索今天，24小时（可选近7中的某一天），近7天的日志数据。
     */
    SearchClsLog(req: SearchClsLogRequest, cb?: (error: string, rep: SearchClsLogResponse) => void): Promise<SearchClsLogResponse>;
    /**
     * StopCdnDomain 用于停止域名的加速服务。
注意：停止加速服务后，访问至加速节点的请求将会直接返回 404。为避免对您的业务造成影响，请在停止加速服务前将解析切走。
     */
    StopCdnDomain(req: StopCdnDomainRequest, cb?: (error: string, rep: StopCdnDomainResponse) => void): Promise<StopCdnDomainResponse>;
    /**
     * ListTopData 通过入参 Metric 和 Filter 组合不同，可以查询以下排序数据：

+ 依据总流量、总请求数对访问 URL 排序，从大至小返回 TOP 1000 URL
+ 依据总流量、总请求数对客户端省份排序，从大至小返回省份列表
+ 依据总流量、总请求数对客户端运营商排序，从大至小返回运营商列表
+ 依据总流量、峰值带宽、总请求数、平均命中率、2XX/3XX/4XX/5XX 状态码对域名排序，从大至小返回域名列表
+ 依据总回源流量、回源峰值带宽、总回源请求数、平均回源失败率、2XX/3XX/4XX/5XX 回源状态码对域名排序，从大至小返回域名列表

注意：仅支持 90 天内数据查询
     */
    ListTopData(req: ListTopDataRequest, cb?: (error: string, rep: ListTopDataResponse) => void): Promise<ListTopDataResponse>;
    /**
     * DescribeOriginData 用于查询 CDN 实时回源监控数据，支持以下指标查询：

+ 回源流量（单位为 byte）
+ 回源带宽（单位为 bps）
+ 回源请求数（单位为 次）
+ 回源失败请求数（单位为 次）
+ 回源失败率（单位为 %，小数点后保留两位）
+ 回源状态码 2xx 汇总及各 2 开头回源状态码明细（单位为 个）
+ 回源状态码 3xx 汇总及各 3 开头回源状态码明细（单位为 个）
+ 回源状态码 4xx 汇总及各 4 开头回源状态码明细（单位为 个）
+ 回源状态码 5xx 汇总及各 5 开头回源状态码明细（单位为 个）
     */
    DescribeOriginData(req: DescribeOriginDataRequest, cb?: (error: string, rep: DescribeOriginDataResponse) => void): Promise<DescribeOriginDataResponse>;
    /**
     * DescribeCdnIp 用于查询 CDN IP 归属。
（注意：此接口请求频率限制以 CDN 侧限制为准：200次/10分钟）
     */
    DescribeCdnIp(req: DescribeCdnIpRequest, cb?: (error: string, rep: DescribeCdnIpResponse) => void): Promise<DescribeCdnIpResponse>;
    /**
     * StartScdnDomain 用于开启域名的安全防护配置
     */
    StartScdnDomain(req: StartScdnDomainRequest, cb?: (error: string, rep: StartScdnDomainResponse) => void): Promise<StartScdnDomainResponse>;
    /**
     * PurgePathCache 用于批量提交目录刷新，根据域名的加速区域进行对应区域的刷新。
默认情况下境内、境外加速区域每日目录刷新额度为各 100 条，每次最多可提交 20 条。
     */
    PurgePathCache(req: PurgePathCacheRequest, cb?: (error: string, rep: PurgePathCacheResponse) => void): Promise<PurgePathCacheResponse>;
    /**
     * DescribeUrlViolations 用于查询被 CDN 系统扫描到的域名违规 URL 列表及当前状态。
对应内容分发网络控制台【图片鉴黄】页面。
     */
    DescribeUrlViolations(req: DescribeUrlViolationsRequest, cb?: (error: string, rep: DescribeUrlViolationsResponse) => void): Promise<DescribeUrlViolationsResponse>;
    /**
     * PurgeUrlsCache 用于批量提交 URL 进行刷新，根据 URL 中域名的当前加速区域进行对应区域的刷新。
默认情况下境内、境外加速区域每日 URL 刷新额度各为 10000 条，每次最多可提交 1000 条。
     */
    PurgeUrlsCache(req: PurgeUrlsCacheRequest, cb?: (error: string, rep: PurgeUrlsCacheResponse) => void): Promise<PurgeUrlsCacheResponse>;
    /**
     * DescribeTrafficPackages 用于查询中国境内 CDN 流量包详情。
     */
    DescribeTrafficPackages(req: DescribeTrafficPackagesRequest, cb?: (error: string, rep: DescribeTrafficPackagesResponse) => void): Promise<DescribeTrafficPackagesResponse>;
    /**
     * UpdateDomainConfig 用于修改内容分发网络加速域名配置信息
注意：如果需要更新复杂类型的配置项，必须传递整个对象的所有属性，未传递的属性将使用默认值，建议通过查询接口获取配置属性后，直接修改后传递给本接口。Https配置由于证书的特殊性，更新时不用传递证书和密钥字段。
     */
    UpdateDomainConfig(req: UpdateDomainConfigRequest, cb?: (error: string, rep: UpdateDomainConfigResponse) => void): Promise<UpdateDomainConfigResponse>;
    /**
     * DescribeCdnDomainLogs 用于查询访问日志下载地址，仅支持 30 天以内的境内、境外访问日志下载链接查询。
     */
    DescribeCdnDomainLogs(req: DescribeCdnDomainLogsRequest, cb?: (error: string, rep: DescribeCdnDomainLogsResponse) => void): Promise<DescribeCdnDomainLogsResponse>;
    /**
     * DescribePushTasks  用于查询预热任务提交历史记录及执行进度。
接口灰度中，暂未全量开放，敬请期待。
     */
    DescribePushTasks(req: DescribePushTasksRequest, cb?: (error: string, rep: DescribePushTasksResponse) => void): Promise<DescribePushTasksResponse>;
    /**
     * DescribeDiagnoseReport 用于获取指定报告id的内容
     */
    DescribeDiagnoseReport(req: DescribeDiagnoseReportRequest, cb?: (error: string, rep: DescribeDiagnoseReportResponse) => void): Promise<DescribeDiagnoseReportResponse>;
    /**
     * CreateClsLogTopic 用于创建日志主题。注意：一个日志集下至多可创建10个日志主题。
     */
    CreateClsLogTopic(req: CreateClsLogTopicRequest, cb?: (error: string, rep: CreateClsLogTopicResponse) => void): Promise<CreateClsLogTopicResponse>;
    /**
     * PushUrlsCache 用于将指定 URL 资源列表加载至 CDN 节点，支持指定加速区域预热。
默认情况下境内、境外每日预热 URL 限额为各 1000 条，每次最多可提交 20 条。
     */
    PushUrlsCache(req: PushUrlsCacheRequest, cb?: (error: string, rep: PushUrlsCacheResponse) => void): Promise<PushUrlsCacheResponse>;
    /**
     * UpdateImageConfig 用于更新控制台图片优化的相关配置，支持Webp、TPG 和 Guetzli。
     */
    UpdateImageConfig(req: UpdateImageConfigRequest, cb?: (error: string, rep: UpdateImageConfigResponse) => void): Promise<UpdateImageConfigResponse>;
    /**
     * DisableClsLogTopic 用于停止日志主题投递。注意：停止后，所有绑定该日志主题域名的日志将不再继续投递至该主题，已经投递的日志将会继续保留。生效时间约为 5~15 分钟。

     */
    DisableClsLogTopic(req: DisableClsLogTopicRequest, cb?: (error: string, rep: DisableClsLogTopicResponse) => void): Promise<DisableClsLogTopicResponse>;
    /**
     * ListClsTopicDomains 用于获取某日志主题下绑定的域名列表。
     */
    ListClsTopicDomains(req: ListClsTopicDomainsRequest, cb?: (error: string, rep: ListClsTopicDomainsResponse) => void): Promise<ListClsTopicDomainsResponse>;
    /**
     * ListClsLogTopics 用于显示日志主题列表。注意：一个日志集下至多含10个日志主题。
     */
    ListClsLogTopics(req: ListClsLogTopicsRequest, cb?: (error: string, rep: ListClsLogTopicsResponse) => void): Promise<ListClsLogTopicsResponse>;
    /**
     * DescribeScdnConfig 用于查询指定 SCDN 加速域名的安全相关配置
     */
    DescribeScdnConfig(req: DescribeScdnConfigRequest, cb?: (error: string, rep: DescribeScdnConfigResponse) => void): Promise<DescribeScdnConfigResponse>;
    /**
     * DeleteClsLogTopic 用于删除日志主题。注意：删除后，所有该日志主题下绑定域名的日志将不再继续投递至该主题，已经投递的日志将会被全部清空。生效时间约为 5~15 分钟。
     */
    DeleteClsLogTopic(req: DeleteClsLogTopicRequest, cb?: (error: string, rep: DeleteClsLogTopicResponse) => void): Promise<DeleteClsLogTopicResponse>;
    /**
     * 本接口（DescribeCdnOriginIp）用于查询 CDN 回源节点的IP信息。（注：使用此接口需开启对应白名单）
     */
    DescribeCdnOriginIp(req?: DescribeCdnOriginIpRequest, cb?: (error: string, rep: DescribeCdnOriginIpResponse) => void): Promise<DescribeCdnOriginIpResponse>;
    /**
     * DescribeBillingData 用于查询实际计费数据明细。
     */
    DescribeBillingData(req: DescribeBillingDataRequest, cb?: (error: string, rep: DescribeBillingDataResponse) => void): Promise<DescribeBillingDataResponse>;
    /**
     * DescribePushQuota  用于查询预热配额和每日可用量。
     */
    DescribePushQuota(req?: DescribePushQuotaRequest, cb?: (error: string, rep: DescribePushQuotaResponse) => void): Promise<DescribePushQuotaResponse>;
    /**
     * EnableClsLogTopic 用于启动日志主题投递。注意：启动后，所有绑定该日志主题域名的日志将继续投递至该主题。生效时间约为 5~15 分钟。
     */
    EnableClsLogTopic(req: EnableClsLogTopicRequest, cb?: (error: string, rep: EnableClsLogTopicResponse) => void): Promise<EnableClsLogTopicResponse>;
    /**
     * ListScdnDomains 用于查询 SCDN 安全加速域名列表，及域名基本配置信息
     */
    ListScdnDomains(req: ListScdnDomainsRequest, cb?: (error: string, rep: ListScdnDomainsResponse) => void): Promise<ListScdnDomainsResponse>;
    /**
     * DescribeReportData 用于查询域名/项目维度的日/周/月报表数据。
     */
    DescribeReportData(req: DescribeReportDataRequest, cb?: (error: string, rep: DescribeReportDataResponse) => void): Promise<DescribeReportDataResponse>;
    /**
     * 查询指定域名的区域、运营商明细数据
注意事项：接口尚未全量开放，未在内测名单中的账号不支持调用
     */
    DescribeDistrictIspData(req: DescribeDistrictIspDataRequest, cb?: (error: string, rep: DescribeDistrictIspDataResponse) => void): Promise<DescribeDistrictIspDataResponse>;
    /**
     * 本接口(UpdatePayType)用于修改账号计费类型，暂不支持月结用户或子账号修改。
     */
    UpdatePayType(req: UpdatePayTypeRequest, cb?: (error: string, rep: UpdatePayTypeResponse) => void): Promise<UpdatePayTypeResponse>;
    /**
     * EnableCaches 用于解禁手工封禁的 URL，解禁成功后，全网生效时间约 5~10 分钟。（接口尚在内测中，暂未全量开放使用）
     */
    EnableCaches(req: EnableCachesRequest, cb?: (error: string, rep: EnableCachesResponse) => void): Promise<EnableCachesResponse>;
}
