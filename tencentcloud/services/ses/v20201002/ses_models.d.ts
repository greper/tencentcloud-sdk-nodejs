/**
 * 邮件发送的内容，可以是纯文本(TEXT)，也可以是纯代码(HTML)，或者纯文本+HTML的组合(建议方式)
 */
export interface Simple {
    /**
      * base64之后的Html代码。需要包含所有的代码信息，不要包含外部css，否则会导致显示格式错乱
      */
    Html?: string;
    /**
      * base64之后的纯文本信息，如果没有Html，邮件中会直接显示纯文本；如果有Html，它代表邮件的纯文本样式
      */
    Text?: string;
}
/**
 * ListEmailAddress请求参数结构体
 */
export declare type ListEmailAddressRequest = null;
/**
 * GetEmailIdentity返回参数结构体
 */
export interface GetEmailIdentityResponse {
    /**
      * 验证类型。固定值：DOMAIN
      */
    IdentityType?: string;
    /**
      * 是否已通过验证
      */
    VerifiedForSendingStatus?: boolean;
    /**
      * DNS配置详情
      */
    Attributes?: Array<DNSAttributes>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * ListBlackEmailAddress请求参数结构体
 */
export interface ListBlackEmailAddressRequest {
    /**
      * 开始日期
      */
    StartDate: string;
    /**
      * 结束日期
      */
    EndDate: string;
    /**
      * 规范，配合Offset使用
      */
    Limit: number;
    /**
      * 规范，配合Limit使用
      */
    Offset: number;
    /**
      * 可以指定邮箱进行查询
      */
    EmailAddress?: string;
    /**
      * 可以指定任务ID进行查询
      */
    TaskID?: string;
}
/**
 * 模板发送相关信息，包含模板ID，模板变量参数等信息
 */
export interface Template {
    /**
      * 模板ID。如果没有模板，请先新建一个
      */
    TemplateID: number;
    /**
      * 模板中的变量参数，请使用json.dump将json对象格式化为string类型。该对象是一组键值对，每个Key代表模板中的一个变量，模板中的变量使用{{键}}表示，相应的值在发送时会被替换为{{值}}。
      */
    TemplateData: string;
}
/**
 * SendEmail请求参数结构体
 */
export interface SendEmailRequest {
    /**
      * 发信邮件地址。请填写发件人邮箱地址，例如：noreply@mail.qcloud.com。如需填写发件人说明，请按照
发信人 &lt;邮件地址&gt; 的方式填写，例如：
腾讯云团队 &lt;noreply@mail.qcloud.com&gt;
      */
    FromEmailAddress: string;
    /**
      * 收信人邮箱地址
      */
    Destination: Array<string>;
    /**
      * 邮件主题
      */
    Subject: string;
    /**
      * 邮件的“回复”电子邮件地址。可以填写您能收到邮件的邮箱地址，可以是个人邮箱。如果不填，收件人将会回复到腾讯云。注意：邮件内容会显示所有收件人地址，非群发邮件请多次调用API发送。
      */
    ReplyToAddresses?: string;
    /**
      * 使用模板发送时，填写的模板相关参数
      */
    Template?: Template;
    /**
      * 使用API直接发送内容时，填写的邮件内容
      */
    Simple?: Simple;
}
/**
 * 用于描述发件人相关信息
 */
export interface EmailSender {
    /**
      * 发信地址
      */
    EmailAddress: string;
    /**
      * 发信人别名
注意：此字段可能返回 null，表示取不到有效值。
      */
    EmailSenderName: string;
    /**
      * 创建时间
注意：此字段可能返回 null，表示取不到有效值。
      */
    CreatedTimestamp: number;
}
/**
 * DeleteEmailIdentity请求参数结构体
 */
export interface DeleteEmailIdentityRequest {
    /**
      * 发信域名
      */
    EmailIdentity: string;
}
/**
 * UpdateEmailIdentity请求参数结构体
 */
export interface UpdateEmailIdentityRequest {
    /**
      * 请求验证的域名
      */
    EmailIdentity: string;
}
/**
 * GetEmailIdentity请求参数结构体
 */
export interface GetEmailIdentityRequest {
    /**
      * 发信域名
      */
    EmailIdentity: string;
}
/**
 * DeleteEmailIdentity返回参数结构体
 */
export interface DeleteEmailIdentityResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * GetStatisticsReport请求参数结构体
 */
export interface GetStatisticsReportRequest {
    /**
      * 开始日期
      */
    StartDate: string;
    /**
      * 结束日期
      */
    EndDate: string;
    /**
      * 发信域名
      */
    Domain?: string;
    /**
      * 收件方邮箱类型，例如gmail.com
      */
    ReceivingMailboxType?: string;
}
/**
 * DeleteEmailTemplate返回参数结构体
 */
export interface DeleteEmailTemplateResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * 统计数据的结构体
 */
export interface Volume {
    /**
      * 日期
注意：此字段可能返回 null，表示取不到有效值。
      */
    SendDate: string;
    /**
      * 邮件请求数量
      */
    RequestCount: number;
    /**
      * 腾讯云通过数量
      */
    AcceptedCount: number;
    /**
      * 送达数量
      */
    DeliveredCount: number;
    /**
      * 打开邮件的用户数量，根据收件人去重
      */
    OpenedCount: number;
    /**
      * 点击了邮件中的链接数量用户数量
      */
    ClickedCount: number;
    /**
      * 退信数量
      */
    BounceCount: number;
    /**
      * 取消订阅的用户数量
注意：此字段可能返回 null，表示取不到有效值。
      */
    UnsubscribeCount: number;
}
/**
 * CreateEmailTemplate请求参数结构体
 */
export interface CreateEmailTemplateRequest {
    /**
      * 模板名称
      */
    TemplateName: string;
    /**
      * 模板内容
      */
    TemplateContent: TemplateContent;
}
/**
 * UpdateEmailTemplate请求参数结构体
 */
export interface UpdateEmailTemplateRequest {
    /**
      * 模板内容
      */
    TemplateContent: TemplateContent;
    /**
      * 模板ID
      */
    TemplateID: number;
    /**
      * 模版名字
      */
    TemplateName: string;
}
/**
 * UpdateEmailIdentity返回参数结构体
 */
export interface UpdateEmailIdentityResponse {
    /**
      * 验证类型。固定值：DOMAIN
      */
    IdentityType?: string;
    /**
      * 是否已通过验证
      */
    VerifiedForSendingStatus?: boolean;
    /**
      * 需要配置的DNS信息
      */
    Attributes?: Array<DNSAttributes>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DeleteEmailTemplate请求参数结构体
 */
export interface DeleteEmailTemplateRequest {
    /**
      * 删除发信模版
      */
    TemplateID: number;
}
/**
 * DeleteBlackList返回参数结构体
 */
export interface DeleteBlackListResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * ListEmailTemplates请求参数结构体
 */
export interface ListEmailTemplatesRequest {
    /**
      * 获取模版数据量，用于分页
      */
    Limit: number;
    /**
      * 获取模版偏移值，用于分页
      */
    Offset: number;
}
/**
 * DeleteBlackList请求参数结构体
 */
export interface DeleteBlackListRequest {
    /**
      * 需要清除的黑名单邮箱列表，数组长度至少为1
      */
    EmailAddressList: Array<string>;
}
/**
 * ListEmailTemplates返回参数结构体
 */
export interface ListEmailTemplatesResponse {
    /**
      * 邮件模板列表
      */
    TemplatesMetadata?: Array<TemplatesMetadata>;
    /**
      * 模版总数量
      */
    TotalCount?: number;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * SendEmail返回参数结构体
 */
export interface SendEmailResponse {
    /**
      * 接受消息时生成的消息的唯一标识符。
      */
    MessageId?: string;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * ListBlackEmailAddress返回参数结构体
 */
export interface ListBlackEmailAddressResponse {
    /**
      * 黑名单列表
      */
    BlackList?: Array<BlackEmailAddress>;
    /**
      * 黑名单总数
      */
    TotalCount?: number;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * 模板列表结构
 */
export interface TemplatesMetadata {
    /**
      * 创建时间
      */
    CreatedTimestamp: number;
    /**
      * 模板名称
      */
    TemplateName: string;
    /**
      * 模板状态。1-审核中|0-已通过|2-拒绝|其它-不可用
      */
    TemplateStatus: number;
    /**
      * 模板ID
      */
    TemplateID: number;
    /**
      * 审核原因
      */
    ReviewReason: string;
}
/**
 * ListEmailIdentities返回参数结构体
 */
export interface ListEmailIdentitiesResponse {
    /**
      * 发信域名列表
      */
    EmailIdentities?: Array<EmailIdentity>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * ListEmailAddress返回参数结构体
 */
export interface ListEmailAddressResponse {
    /**
      * 发信地址列表详情
注意：此字段可能返回 null，表示取不到有效值。
      */
    EmailSenders?: Array<EmailSender>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * 模板内容，TEXT和HTML必须至少存在一项，建议使用TEXT和HTML的组合
 */
export interface TemplateContent {
    /**
      * base64之后的Html代码
      */
    Html?: string;
    /**
      * base64之后的文本内容
      */
    Text?: string;
}
/**
 * GetStatisticsReport返回参数结构体
 */
export interface GetStatisticsReportResponse {
    /**
      * 发信统计报告，按天
      */
    DailyVolumes?: Array<Volume>;
    /**
      * 发信统计报告，总览
      */
    OverallVolume?: Volume;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * DeleteEmailAddress请求参数结构体
 */
export interface DeleteEmailAddressRequest {
    /**
      * 发信地址
      */
    EmailAddress: string;
}
/**
 * 发信域名验证列表结构体
 */
export interface EmailIdentity {
    /**
      * 发信域名
      */
    IdentityName: string;
    /**
      * 验证类型，固定为DOMAIN
      */
    IdentityType: string;
    /**
      * 是否已通过验证
      */
    SendingEnabled: boolean;
}
/**
 * 邮箱黑名单结构，包含被拉黑的邮箱地址和被拉黑时间
 */
export interface BlackEmailAddress {
    /**
      * 邮箱被拉黑时间
      */
    BounceTime: string;
    /**
      * 被拉黑的邮箱地址
      */
    EmailAddress: string;
}
/**
 * GetEmailTemplate请求参数结构体
 */
export interface GetEmailTemplateRequest {
    /**
      * 模板ID
      */
    TemplateID: number;
}
/**
 * DeleteEmailAddress返回参数结构体
 */
export interface DeleteEmailAddressResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * CreateEmailIdentity返回参数结构体
 */
export interface CreateEmailIdentityResponse {
    /**
      * 验证类型。固定值：DOMAIN
      */
    IdentityType?: string;
    /**
      * 是否已通过验证
      */
    VerifiedForSendingStatus?: boolean;
    /**
      * 需要配置的DNS信息
      */
    Attributes?: Array<DNSAttributes>;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * CreateEmailIdentity请求参数结构体
 */
export interface CreateEmailIdentityRequest {
    /**
      * 您的发信域名，建议使用三级以上域名。例如：mail.qcloud.com。
      */
    EmailIdentity: string;
}
/**
 * CreateEmailAddress请求参数结构体
 */
export interface CreateEmailAddressRequest {
    /**
      * 您的发信地址，上限为10个
      */
    EmailAddress: string;
    /**
      * 发件人别名
      */
    EmailSenderName?: string;
}
/**
 * CreateEmailTemplate返回参数结构体
 */
export interface CreateEmailTemplateResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * CreateEmailAddress返回参数结构体
 */
export interface CreateEmailAddressResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * UpdateEmailTemplate返回参数结构体
 */
export interface UpdateEmailTemplateResponse {
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * 用于描述DNS记录的域名、记录类型、期望得到的值、目前配置的值
 */
export interface DNSAttributes {
    /**
      * 记录类型 CNAME | A | TXT | MX
      */
    Type: string;
    /**
      * 域名
      */
    SendDomain: string;
    /**
      * 需要配置的值
      */
    ExpectedValue: string;
    /**
      * 腾讯云目前检测到的值
      */
    CurrentValue: string;
    /**
      * 检测是否通过，创建时默认为false
      */
    Status: boolean;
}
/**
 * GetEmailTemplate返回参数结构体
 */
export interface GetEmailTemplateResponse {
    /**
      * 模板内容数据
      */
    TemplateContent?: TemplateContent;
    /**
      * 唯一请求 ID，每次请求都会返回。定位问题时需要提供该次请求的 RequestId。
      */
    RequestId?: string;
}
/**
 * ListEmailIdentities请求参数结构体
 */
export declare type ListEmailIdentitiesRequest = null;
