import { AbstractClient } from "../../../common/abstract_client";
import { ClientConfig } from "../../../common/interface";
import { ImageModerationRequest, ImageModerationResponse } from "./ims_models";
/**
 * ims client
 * @class
 */
export declare class Client extends AbstractClient {
    constructor(clientConfig: ClientConfig);
    /**
     * 图片内容检测服务（Image Moderation, IM）能自动扫描图片，识别涉黄、涉恐、涉政、涉毒等有害内容，同时支持用户配置图片黑名单，打击自定义的违规图片。

<div class="rno-api-explorer" style="margin-bottom:20px">
    <div class="rno-api-explorer-inner">
        <div class="rno-api-explorer-hd">
            <div class="rno-api-explorer-title">
                关于版本迭代的描述
            </div>
        </div>
        <div class="rno-api-explorer-body">
            <div class="rno-api-explorer-cont">
                <p>当前页面版本为图片内容安全2020版本，2020.11.3日前接入的图片内容安全接口为2019版本，在此时间前接入的用户可直接访问以下链接进行维护操作：<a href="https://cloud.tencent.com/document/product/1125/38206" target="_blank">图片内容安全-2019版本</a></p>
                <p>2020版本相对2019版本进行了升级，支持更灵活的多场景业务策略配置以及更丰富的识别回调信息，满足不同业务的审核需求，建议按照2020版本接入指引进行接口升级；同时，2019版本也会持续维护直至用户不再使用为止。</p>
            </div>
        </div>
    </div>
</div>
     */
    ImageModeration(req: ImageModerationRequest, cb?: (error: string, rep: ImageModerationResponse) => void): Promise<ImageModerationResponse>;
}
