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
 * live client
 * @class
 */
class Client extends abstract_client_1.AbstractClient {
    constructor(clientConfig) {
        super("live.tencentcloudapi.com", "2018-08-01", clientConfig);
    }
    /**
     * 断开推流连接，但可以重新推流。
     */
    async DropLiveStream(req, cb) {
        return this.request("DropLiveStream", req, cb);
    }
    /**
     * 查询水印列表。
     */
    async DescribeLiveWatermarks(req, cb) {
        return this.request("DescribeLiveWatermarks", req, cb);
    }
    /**
     * 查询并发录制路数，对慢直播和普通直播适用。
     */
    async DescribeConcurrentRecordStreamNum(req, cb) {
        return this.request("DescribeConcurrentRecordStreamNum", req, cb);
    }
    /**
     * - 使用前提
  1. 录制文件存放于点播平台，所以用户如需使用录制功能，需首先自行开通点播服务。
  2. 录制文件存放后相关费用（含存储以及下行播放流量）按照点播平台计费方式收取，具体请参考 [对应文档](https://cloud.tencent.com/document/product/266/2838)。

- 模式说明
  该接口支持两种录制模式：
  1. 定时录制模式【默认模式】。
    需要传入开始时间与结束时间，录制任务根据起止时间自动开始与结束。在所设置结束时间过期之前（且未调用StopLiveRecord提前终止任务），录制任务都是有效的，期间多次断流然后重推都会启动录制任务。
  2. 实时视频录制模式。
    忽略传入的开始时间，在录制任务创建后立即开始录制，录制时长支持最大为30分钟，如果传入的结束时间与当前时间差大于30分钟，则按30分钟计算，实时视频录制主要用于录制精彩视频场景，时长建议控制在5分钟以内。

- 注意事项
  1. 调用接口超时设置应大于3秒，小于3秒重试以及按不同起止时间调用都有可能产生重复录制任务，进而导致额外录制费用。
  2. 受限于音视频文件格式（FLV/MP4/HLS）对编码类型的支持，视频编码类型支持 H.264，音频编码类型支持 AAC。
  3. 为避免恶意或非主观的频繁 API 请求，对定时录制模式最大创建任务数做了限制：其中，当天可以创建的最大任务数不超过4000（不含已删除的任务）；当前时刻并发运行的任务数不超过400。有超出此限制的需要提工单申请。
  4. 此调用方式暂时不支持海外推流录制。
     */
    async CreateLiveRecord(req, cb) {
        return this.request("CreateLiveRecord", req, cb);
    }
    /**
     * 更新水印。
     */
    async UpdateLiveWatermark(req, cb) {
        return this.request("UpdateLiveWatermark", req, cb);
    }
    /**
     * 修改截图模板配置。
     */
    async ModifyLiveSnapshotTemplate(req, cb) {
        return this.request("ModifyLiveSnapshotTemplate", req, cb);
    }
    /**
     * 修改录制模板配置。
     */
    async ModifyLiveRecordTemplate(req, cb) {
        return this.request("ModifyLiveRecordTemplate", req, cb);
    }
    /**
     * 创建水印规则，需要先调用[AddLiveWatermark](/document/product/267/30154)接口添加水印，将返回的水印id绑定到流使用。
     */
    async CreateLiveWatermarkRule(req, cb) {
        return this.request("CreateLiveWatermarkRule", req, cb);
    }
    /**
     * 用于查询推断流事件。<br>

注意：该接口可通过使用IsFilter进行过滤，返回推流历史记录。
     */
    async DescribeLiveStreamEventList(req, cb) {
        return this.request("DescribeLiveStreamEventList", req, cb);
    }
    /**
     * 查询直播拉流配置。
     */
    async DescribePullStreamConfigs(req, cb) {
        return this.request("DescribePullStreamConfigs", req, cb);
    }
    /**
     * 查询某段时间内5分钟粒度的各播放http状态码的个数。
备注：数据延迟1小时，如10:00-10:59点的数据12点才能查到。
     */
    async DescribeHttpStatusInfoList(req, cb) {
        return this.request("DescribeHttpStatusInfoList", req, cb);
    }
    /**
     * 查询某省份某运营商下行播放数据，包括带宽，流量，请求数，并发连接数信息。
     */
    async DescribeProvinceIspPlayInfoList(req, cb) {
        return this.request("DescribeProvinceIspPlayInfoList", req, cb);
    }
    /**
     * 修改播放域名信息。
     */
    async ModifyLivePlayDomain(req, cb) {
        return this.request("ModifyLivePlayDomain", req, cb);
    }
    /**
     * 查询流id的上行推流质量数据，包括音视频的帧率，码率，流逝时间，编码格式等。
     */
    async DescribeStreamPushInfoList(req, cb) {
        return this.request("DescribeStreamPushInfoList", req, cb);
    }
    /**
     * 获取截图规则列表
     */
    async DescribeLiveSnapshotRules(req, cb) {
        return this.request("DescribeLiveSnapshotRules", req, cb);
    }
    /**
     * 删除转码模板。
     */
    async DeleteLiveTranscodeTemplate(req, cb) {
        return this.request("DeleteLiveTranscodeTemplate", req, cb);
    }
    /**
     * 查询某段时间top n客户端ip汇总信息（暂支持top 1000）
     */
    async DescribeTopClientIpSumInfoList(req, cb) {
        return this.request("DescribeTopClientIpSumInfoList", req, cb);
    }
    /**
     * 修改直播拉流配置的状态。
     */
    async ModifyPullStreamStatus(req, cb) {
        return this.request("ModifyPullStreamStatus", req, cb);
    }
    /**
     * 获取录制模板列表。
     */
    async DescribeLiveRecordTemplates(req, cb) {
        return this.request("DescribeLiveRecordTemplates", req, cb);
    }
    /**
     * 修改域名和证书绑定信息
     */
    async ModifyLiveDomainCert(req, cb) {
        return this.request("ModifyLiveDomainCert", req, cb);
    }
    /**
     * 查询某时间段top n的域名或流id信息（暂支持top 1000）。
     */
    async DescribeVisitTopSumInfoList(req, cb) {
        return this.request("DescribeVisitTopSumInfoList", req, cb);
    }
    /**
     * 获取域名证书信息。
     */
    async DescribeLiveDomainCert(req, cb) {
        return this.request("DescribeLiveDomainCert", req, cb);
    }
    /**
     * 添加水印，成功返回水印 ID 后，需要调用[CreateLiveWatermarkRule](/document/product/267/32629)接口将水印 ID 绑定到流使用。
     */
    async AddLiveWatermark(req, cb) {
        return this.request("AddLiveWatermark", req, cb);
    }
    /**
     * 海外分区直播计费带宽和流量数据查询。
     */
    async DescribeAreaBillBandwidthAndFluxList(req, cb) {
        return this.request("DescribeAreaBillBandwidthAndFluxList", req, cb);
    }
    /**
     * 删除水印规则
     */
    async DeleteLiveWatermarkRule(req, cb) {
        return this.request("DeleteLiveWatermarkRule", req, cb);
    }
    /**
     * 删除回调规则。
     */
    async DeleteLiveCallbackRule(req, cb) {
        return this.request("DeleteLiveCallbackRule", req, cb);
    }
    /**
     * 更新拉流配置。
     */
    async ModifyPullStreamConfig(req, cb) {
        return this.request("ModifyPullStreamConfig", req, cb);
    }
    /**
     * 创建截图模板，成功返回模板id后，需要调用[CreateLiveSnapshotRule](/document/product/267/32625)接口，将模板id绑定到流使用。
<br>截图相关文档：[直播截图](/document/product/267/32737)。
     */
    async CreateLiveSnapshotTemplate(req, cb) {
        return this.request("CreateLiveSnapshotTemplate", req, cb);
    }
    /**
     * 返回正在直播中的流列表。适用于推流成功后查询在线流信息。
注意：该接口仅适用于流数少于2万路的情况，对于流数较大用户请联系售后。
     */
    async DescribeLiveStreamOnlineList(req, cb) {
        return this.request("DescribeLiveStreamOnlineList", req, cb);
    }
    /**
     * 删除回调模板。
     */
    async DeleteLiveCallbackTemplate(req, cb) {
        return this.request("DeleteLiveCallbackTemplate", req, cb);
    }
    /**
     * 查询直播推流鉴权key
     */
    async DescribeLivePushAuthKey(req, cb) {
        return this.request("DescribeLivePushAuthKey", req, cb);
    }
    /**
     * 删除直播拉流配置。
     */
    async DeletePullStreamConfig(req, cb) {
        return this.request("DeletePullStreamConfig", req, cb);
    }
    /**
     * 获取单个录制模板。
     */
    async DescribeLiveRecordTemplate(req, cb) {
        return this.request("DescribeLiveRecordTemplate", req, cb);
    }
    /**
     * 该接口用来创建通用混流。用法与旧接口 mix_streamv2.start_mix_stream_advanced 基本一致。
注意：当前最多支持16路混流。
最佳实践：https://cloud.tencent.com/document/product/267/45566
     */
    async CreateCommonMixStream(req, cb) {
        return this.request("CreateCommonMixStream", req, cb);
    }
    /**
     * 删除水印。
     */
    async DeleteLiveWatermark(req, cb) {
        return this.request("DeleteLiveWatermark", req, cb);
    }
    /**
     * 查询下行播放错误码信息。
     */
    async DescribePlayErrorCodeSumInfoList(req, cb) {
        return this.request("DescribePlayErrorCodeSumInfoList", req, cb);
    }
    /**
     * 对流设置延播时间
注意：如果在推流前设置延播，需要提前5分钟设置。
目前该接口只支持流粒度的，域名及应用粒度功能支持当前开发中。
使用场景：对重要直播，避免出现突发状况，可通过设置延迟播放，提前做好把控。

     */
    async AddDelayLiveStream(req, cb) {
        return this.request("AddDelayLiveStream", req, cb);
    }
    /**
     * 直播上行路数查询
     */
    async DescribeUploadStreamNums(req, cb) {
        return this.request("DescribeUploadStreamNums", req, cb);
    }
    /**
     * 查询天维度每条流的播放数据，包括总流量等。
     */
    async DescribeStreamDayPlayInfoList(req, cb) {
        return this.request("DescribeStreamDayPlayInfoList", req, cb);
    }
    /**
     * 修改直播推流鉴权key
     */
    async ModifyLivePushAuthKey(req, cb) {
        return this.request("ModifyLivePushAuthKey", req, cb);
    }
    /**
     * 修改转码模板配置。
     */
    async ModifyLiveTranscodeTemplate(req, cb) {
        return this.request("ModifyLiveTranscodeTemplate", req, cb);
    }
    /**
     * 删除转码规则。
DomainName+AppName+StreamName+TemplateId唯一标识单个转码规则，如需删除需要强匹配。其中TemplateId必填，其余参数为空时也需要传空字符串进行强匹配。
     */
    async DeleteLiveTranscodeRule(req, cb) {
        return this.request("DeleteLiveTranscodeRule", req, cb);
    }
    /**
     * 删除截图规则。
     */
    async DeleteLiveSnapshotRule(req, cb) {
        return this.request("DeleteLiveSnapshotRule", req, cb);
    }
    /**
     * 获取禁推流列表。
     */
    async DescribeLiveForbidStreamList(req, cb) {
        return this.request("DescribeLiveForbidStreamList", req, cb);
    }
    /**
     * 获取证书信息
     */
    async DescribeLiveCert(req, cb) {
        return this.request("DescribeLiveCert", req, cb);
    }
    /**
     * 修改证书
     */
    async ModifyLiveCert(req, cb) {
        return this.request("ModifyLiveCert", req, cb);
    }
    /**
     * 根据域名状态、类型等信息查询用户的域名信息。
     */
    async DescribeLiveDomains(req, cb) {
        return this.request("DescribeLiveDomains", req, cb);
    }
    /**
     * 删除域名对应的证书
     */
    async DeleteLiveCert(req, cb) {
        return this.request("DeleteLiveCert", req, cb);
    }
    /**
     * 创建回调模板，成功返回模板id后，需要调用[CreateLiveCallbackRule](/document/product/267/32638)接口将模板 ID 绑定到域名/路径使用。
<br>回调协议相关文档：[事件消息通知](/document/product/267/32744)。
注意：至少填写一个回调 URL。
     */
    async CreateLiveCallbackTemplate(req, cb) {
        return this.request("CreateLiveCallbackTemplate", req, cb);
    }
    /**
     * 恢复某条流的推流。
     */
    async ResumeLiveStream(req, cb) {
        return this.request("ResumeLiveStream", req, cb);
    }
    /**
     * 获取单个回调模板。
     */
    async DescribeLiveCallbackTemplate(req, cb) {
        return this.request("DescribeLiveCallbackTemplate", req, cb);
    }
    /**
     * 删除已添加的直播域名
     */
    async DeleteLiveDomain(req, cb) {
        return this.request("DeleteLiveDomain", req, cb);
    }
    /**
     * 修改回调模板。
     */
    async ModifyLiveCallbackTemplate(req, cb) {
        return this.request("ModifyLiveCallbackTemplate", req, cb);
    }
    /**
     * 查询某段时间内每个国家地区每个省份每个运营商的平均每秒流量，总流量，总请求数信息。
     */
    async DescribeProIspPlaySumInfoList(req, cb) {
        return this.request("DescribeProIspPlaySumInfoList", req, cb);
    }
    /**
     * 查询播放数据，支持按流名称查询详细播放数据，也可按播放域名查询详细总数据，数据延迟4分钟左右。
注意：按AppName查询请先联系工单申请，开通后配置生效预计需要5个工作日左右，具体时间以最终回复为准。
     */
    async DescribeStreamPlayInfoList(req, cb) {
        return this.request("DescribeStreamPlayInfoList", req, cb);
    }
    /**
     * 添加证书
     */
    async CreateLiveCert(req, cb) {
        return this.request("CreateLiveCert", req, cb);
    }
    /**
     * 获取转码规则列表
     */
    async DescribeLiveTranscodeRules(req, cb) {
        return this.request("DescribeLiveTranscodeRules", req, cb);
    }
    /**
     * 获取单个截图模板。
     */
    async DescribeLiveSnapshotTemplate(req, cb) {
        return this.request("DescribeLiveSnapshotTemplate", req, cb);
    }
    /**
     * 获取回调模板列表
     */
    async DescribeLiveCallbackTemplates(req, cb) {
        return this.request("DescribeLiveCallbackTemplates", req, cb);
    }
    /**
     * 提前结束录制，并中止运行中的录制任务。任务被成功终止后，本次任务将不再启动。
     */
    async StopRecordTask(req, cb) {
        return this.request("StopRecordTask", req, cb);
    }
    /**
     * 获取截图模板列表。
     */
    async DescribeLiveSnapshotTemplates(req, cb) {
        return this.request("DescribeLiveSnapshotTemplates", req, cb);
    }
    /**
     * 说明：录制后的文件存放于点播平台。用户如需使用录制功能，需首先自行开通点播账号并确保账号可用。录制文件存放后，相关费用（含存储以及下行播放流量）按照点播平台计费方式收取，请参考对应文档。
     */
    async StopLiveRecord(req, cb) {
        return this.request("StopLiveRecord", req, cb);
    }
    /**
     * 修改播放鉴权key
     */
    async ModifyLivePlayAuthKey(req, cb) {
        return this.request("ModifyLivePlayAuthKey", req, cb);
    }
    /**
     * 获取单个转码模板。
     */
    async DescribeLiveTranscodeTemplate(req, cb) {
        return this.request("DescribeLiveTranscodeTemplate", req, cb);
    }
    /**
     * 接口用来查询直播增值业务--截图的张数
     */
    async DescribeScreenShotSheetNumList(req, cb) {
        return this.request("DescribeScreenShotSheetNumList", req, cb);
    }
    /**
     * 解绑域名证书
     */
    async UnBindLiveDomainCert(req, cb) {
        return this.request("UnBindLiveDomainCert", req, cb);
    }
    /**
     * 删除录制任务配置。删除操作不影响正在运行当中的任务，仅对删除之后新的推流有效。
     */
    async DeleteRecordTask(req, cb) {
        return this.request("DeleteRecordTask", req, cb);
    }
    /**
     * 支持查询某天或某段时间的转码详细信息。
     */
    async DescribeLiveTranscodeDetailInfo(req, cb) {
        return this.request("DescribeLiveTranscodeDetailInfo", req, cb);
    }
    /**
     * 批量获取日志URL。
     */
    async DescribeLogDownloadList(req, cb) {
        return this.request("DescribeLogDownloadList", req, cb);
    }
    /**
     * 获取录制规则列表
     */
    async DescribeLiveRecordRules(req, cb) {
        return this.request("DescribeLiveRecordRules", req, cb);
    }
    /**
     * 获取直播延播列表。
     */
    async DescribeLiveDelayInfoList(req, cb) {
        return this.request("DescribeLiveDelayInfoList", req, cb);
    }
    /**
     * 删除录制规则。
     */
    async DeleteLiveRecordRule(req, cb) {
        return this.request("DeleteLiveRecordRule", req, cb);
    }
    /**
     * 查询直播域名信息。
     */
    async DescribeLiveDomain(req, cb) {
        return this.request("DescribeLiveDomain", req, cb);
    }
    /**
     * 创建回调规则，需要先调用[CreateLiveCallbackTemplate](/document/product/267/32637)接口创建回调模板，将返回的模板id绑定到域名/路径进行使用。
<br>回调协议相关文档：[事件消息通知](/document/product/267/32744)。
     */
    async CreateLiveCallbackRule(req, cb) {
        return this.request("CreateLiveCallbackRule", req, cb);
    }
    /**
     * 域名绑定证书。
注意：需先调用添加证书接口进行证书添加。获取到证书Id后再调用该接口进行绑定。
     */
    async BindLiveDomainCert(req, cb) {
        return this.request("BindLiveDomainCert", req, cb);
    }
    /**
     * 获取回调规则列表
     */
    async DescribeLiveCallbackRules(req, cb) {
        return this.request("DescribeLiveCallbackRules", req, cb);
    }
    /**
     * 查询下行播放错误码信息，某段时间内1分钟粒度的各http错误码出现的次数，包括4xx，5xx。


     */
    async DescribePlayErrorCodeDetailInfoList(req, cb) {
        return this.request("DescribePlayErrorCodeDetailInfoList", req, cb);
    }
    /**
     * 返回已经推过流的流列表。<br>
注意：分页最多支持查询1万条记录，可通过调整查询时间范围来获取更多数据。
     */
    async DescribeLiveStreamPublishedList(req, cb) {
        return this.request("DescribeLiveStreamPublishedList", req, cb);
    }
    /**
     * 禁止某条流的推送，可以预设某个时刻将流恢复。
     */
    async ForbidLiveStream(req, cb) {
        return this.request("ForbidLiveStream", req, cb);
    }
    /**
     * 添加域名，一次只能提交一个域名。域名必须已备案。
     */
    async AddLiveDomain(req, cb) {
        return this.request("AddLiveDomain", req, cb);
    }
    /**
     * 查询直播转推计费带宽，查询时间范围最大支持3个月内的数据，时间跨度最长31天。
     */
    async DescribeDeliverBandwidthList(req, cb) {
        return this.request("DescribeDeliverBandwidthList", req, cb);
    }
    /**
     * 查询实时的域名维度下行播放数据，由于数据处理有耗时，接口默认查询4分钟前的准实时数据。
     */
    async DescribeLiveDomainPlayInfoList(req, cb) {
        return this.request("DescribeLiveDomainPlayInfoList", req, cb);
    }
    /**
     * 回调事件查询
     */
    async DescribeCallbackRecordsList(req, cb) {
        return this.request("DescribeCallbackRecordsList", req, cb);
    }
    /**
     * 创建录制规则，需要先调用[CreateLiveRecordTemplate](/document/product/267/32614)接口创建录制模板，将返回的模板id绑定到流使用。
<br>录制相关文档：[直播录制](/document/product/267/32739)。
     */
    async CreateLiveRecordRule(req, cb) {
        return this.request("CreateLiveRecordRule", req, cb);
    }
    /**
     * 获取单个水印信息。
     */
    async DescribeLiveWatermark(req, cb) {
        return this.request("DescribeLiveWatermark", req, cb);
    }
    /**
     * 获取转码模板列表。
     */
    async DescribeLiveTranscodeTemplates(req, cb) {
        return this.request("DescribeLiveTranscodeTemplates", req, cb);
    }
    /**
     * 创建录制模板，成功返回模板id后，需要调用[CreateLiveRecordRule](/document/product/267/32615)接口，将模板id绑定到流进行使用。
<br>录制相关文档：[直播录制](/document/product/267/32739)。
     */
    async CreateLiveRecordTemplate(req, cb) {
        return this.request("CreateLiveRecordTemplate", req, cb);
    }
    /**
     * 直播计费带宽和流量数据查询。
     */
    async DescribeBillBandwidthAndFluxList(req, cb) {
        return this.request("DescribeBillBandwidthAndFluxList", req, cb);
    }
    /**
     * 停止使用某个直播域名。
     */
    async ForbidLiveDomain(req, cb) {
        return this.request("ForbidLiveDomain", req, cb);
    }
    /**
     * 创建转码规则，需要先调用[CreateLiveTranscodeTemplate](/document/product/267/32646)接口创建转码模板，将返回的模板id绑定到流使用。
<br>转码相关文档：[直播转封装及转码](/document/product/267/32736)。
     */
    async CreateLiveTranscodeRule(req, cb) {
        return this.request("CreateLiveTranscodeRule", req, cb);
    }
    /**
     * 获取水印规则列表。
     */
    async DescribeLiveWatermarkRules(req, cb) {
        return this.request("DescribeLiveWatermarkRules", req, cb);
    }
    /**
     * 注：DeleteLiveRecord 接口仅用于删除录制任务记录，不具备停止录制的功能，也不能删除正在进行中的录制。如果需要停止录制任务，请使用终止录制[StopLiveRecord](/document/product/267/30146) 接口。
     */
    async DeleteLiveRecord(req, cb) {
        return this.request("DeleteLiveRecord", req, cb);
    }
    /**
     * 创建截图规则，需要先调用[CreateLiveSnapshotTemplate](/document/product/267/32624)接口创建截图模板，然后将返回的模板 ID 绑定到流进行使用。
<br>截图相关文档：[直播截图](/document/product/267/32737)。
注意：单个域名仅支持关联一个截图模板。
     */
    async CreateLiveSnapshotRule(req, cb) {
        return this.request("CreateLiveSnapshotRule", req, cb);
    }
    /**
     * 查询按省份和运营商分组的下行播放数据。
     */
    async DescribeGroupProIspPlayInfoList(req, cb) {
        return this.request("DescribeGroupProIspPlayInfoList", req, cb);
    }
    /**
     * 输入某个时间点（1分钟维度），查询该时间点所有流的下行信息。
     */
    async DescribeAllStreamPlayInfoList(req, cb) {
        return this.request("DescribeAllStreamPlayInfoList", req, cb);
    }
    /**
     * 查询播放鉴权key。
     */
    async DescribeLivePlayAuthKey(req, cb) {
        return this.request("DescribeLivePlayAuthKey", req, cb);
    }
    /**
     * 返回直播中、无推流或者禁播等状态
     */
    async DescribeLiveStreamState(req, cb) {
        return this.request("DescribeLiveStreamState", req, cb);
    }
    /**
     * 删除录制模板。
     */
    async DeleteLiveRecordTemplate(req, cb) {
        return this.request("DeleteLiveRecordTemplate", req, cb);
    }
    /**
     * 恢复延迟播放设置
     */
    async ResumeDelayLiveStream(req, cb) {
        return this.request("ResumeDelayLiveStream", req, cb);
    }
    /**
     * 创建一个在指定时间启动、结束的录制任务，并使用指定录制模板ID对应的配置进行录制。
- 使用前提
1. 录制文件存放于点播平台，所以用户如需使用录制功能，需首先自行开通点播服务。
2. 录制文件存放后相关费用（含存储以及下行播放流量）按照点播平台计费方式收取，具体请参考 [对应文档](https://cloud.tencent.com/document/product/266/2837)。
- 注意事项
1. 断流会结束当前录制并生成录制文件。在结束时间到达之前任务仍然有效，期间只要正常推流都会正常录制，与是否多次推、断流无关。
2. 使用上避免创建时间段相互重叠的录制任务。若同一条流当前存在多个时段重叠的任务，为避免重复录制系统将启动最多3个录制任务。
3. 创建的录制任务记录在平台侧只保留3个月。
4. 当前录制任务管理API（CreateRecordTask/StopRecordTask/DeleteRecordTask）与旧API（CreateLiveRecord/StopLiveRecord/DeleteLiveRecord）不兼容，两套接口不能混用。
5. 避免 创建录制任务 与 推流 操作同时进行，可能导致因录制任务未生效而引起任务延迟启动问题，两者操作间隔建议大于3秒。
     */
    async CreateRecordTask(req, cb) {
        return this.request("CreateRecordTask", req, cb);
    }
    /**
     * 创建转码模板，成功返回模板id后，需要调用[CreateLiveTranscodeRule](/document/product/267/32647)接口，将返回的模板id绑定到流使用。
<br>转码相关文档：[直播转封装及转码](/document/product/267/32736)。
     */
    async CreateLiveTranscodeTemplate(req, cb) {
        return this.request("CreateLiveTranscodeTemplate", req, cb);
    }
    /**
     * 获取证书信息列表
     */
    async DescribeLiveCerts(req, cb) {
        return this.request("DescribeLiveCerts", req, cb);
    }
    /**
     * 启用状态为停用的直播域名。
     */
    async EnableLiveDomain(req, cb) {
        return this.request("EnableLiveDomain", req, cb);
    }
    /**
     * 该接口用来取消混流。用法与 mix_streamv2.cancel_mix_stream 基本一致。
     */
    async CancelCommonMixStream(req, cb) {
        return this.request("CancelCommonMixStream", req, cb);
    }
    /**
     * 查询用户套餐包总量、使用量、剩余量、包状态、购买时间和过期时间等。
     */
    async DescribeLivePackageInfo(req, cb) {
        return this.request("DescribeLivePackageInfo", req, cb);
    }
    /**
     * 创建临时拉流转推任务，目前限制添加10条任务。

注意：该接口用于创建临时拉流转推任务，
拉流源地址即 FromUrl 可以是腾讯或非腾讯数据源，
但转推目标地址即 ToUrl 目前限制为已注册的腾讯直播域名。
     */
    async CreatePullStreamConfig(req, cb) {
        return this.request("CreatePullStreamConfig", req, cb);
    }
    /**
     * 查询所有实时流的推流信息，包括客户端IP，服务端IP，帧率，码率，域名，开始推流时间。
     */
    async DescribeLiveStreamPushInfoList(req, cb) {
        return this.request("DescribeLiveStreamPushInfoList", req, cb);
    }
    /**
     * 删除截图模板
     */
    async DeleteLiveSnapshotTemplate(req, cb) {
        return this.request("DeleteLiveSnapshotTemplate", req, cb);
    }
}
exports.Client = Client;
