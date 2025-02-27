import { AbstractClient } from "../../../common/abstract_client";
import { ClientConfig } from "../../../common/interface";
import { QueryInvoiceResponse, ApplyTradeRequest, QueryOutwardOrderResponse, QueryExchangeRateResponse, QueryAcctInfoListResponse, QueryAcctBindingRequest, ModifyMntMbrBindRelateAcctBankCodeRequest, ApplyPayerInfoResponse, RevokeRechargeByThirdPayRequest, QueryTradeRequest, UnifiedOrderResponse, QueryBankWithdrawCashDetailsRequest, QueryCustAcctIdBalanceRequest, QueryPayerInfoResponse, BindAcctRequest, ReviseMbrPropertyRequest, MigrateOrderRefundQueryResponse, RevResigterBillSupportWithdrawRequest, CreateInvoiceResponse, QueryOutwardOrderRequest, QueryAnchorContractInfoRequest, QueryBankWithdrawCashDetailsResponse, UnbindRelateAcctRequest, QueryAcctInfoListRequest, CreateMerchantRequest, DeleteAgentTaxPaymentInfoRequest, QueryAcctBindingResponse, QueryCommonTransferRechargeResponse, ApplyReWithdrawalResponse, ModifyAgentTaxPaymentInfoResponse, RegisterBillRequest, RevokeRechargeByThirdPayResponse, ReviseMbrPropertyResponse, CreateAcctRequest, CreateAgentTaxPaymentInfosRequest, CloseOrderResponse, CheckAcctRequest, CheckAmountResponse, CreateAgentTaxPaymentInfosResponse, QueryPayerInfoRequest, QueryMerchantInfoForManagementResponse, CreateTransferBatchResponse, QuerySingleTransactionStatusRequest, DescribeOrderStatusRequest, QuerySinglePayResponse, QueryCustAcctIdBalanceResponse, QueryTradeResponse, DownloadBillResponse, RevokeMemberRechargeThirdPayResponse, CreateRedInvoiceRequest, ApplyOutwardOrderResponse, DeleteAgentTaxPaymentInfosRequest, WithdrawCashMembershipRequest, ExecuteMemberTransactionResponse, BindRelateAcctUnionPayRequest, CreateTransferBatchRequest, RefundResponse, QueryAgentTaxPaymentBatchResponse, DeleteAgentTaxPaymentInfosResponse, RegisterBillSupportWithdrawResponse, QueryTransferResultResponse, QuerySmallAmountTransferResponse, CreateRedInvoiceResponse, RechargeByThirdPayRequest, QuerySingleTransactionStatusResponse, QueryAcctInfoRequest, DescribeChargeDetailResponse, ApplyWithdrawalResponse, QueryBankTransactionDetailsResponse, QueryTransferResultRequest, QueryMemberTransactionRequest, QueryOrderResponse, QueryMerchantBalanceRequest, CreateAcctResponse, DescribeChargeDetailRequest, BindAcctResponse, CreateSinglePayRequest, QueryRefundRequest, QueryTransferDetailResponse, BindRelateAccReUnionPayRequest, CreateCustAcctIdResponse, QueryMerchantBalanceResponse, QueryAcctInfoResponse, MigrateOrderRefundQueryRequest, QueryAgentTaxPaymentBatchRequest, RefundMemberTransactionRequest, QueryMemberBindResponse, RegisterBillResponse, ApplyOutwardOrderRequest, UnbindRelateAcctResponse, RechargeByThirdPayResponse, CheckAmountRequest, ApplyReWithdrawalRequest, CreateInvoiceRequest, RegisterBillSupportWithdrawRequest, CreateCustAcctIdRequest, UnBindAcctResponse, QueryCommonTransferRechargeRequest, QueryAgentStatementsResponse, QueryTransferDetailRequest, QueryOrderRequest, CloseOrderRequest, RevResigterBillSupportWithdrawResponse, QueryBalanceResponse, QueryTransferBatchRequest, CheckAcctResponse, QueryReconciliationDocumentResponse, QueryApplicationMaterialResponse, QueryExchangeRateRequest, QueryMerchantInfoForManagementRequest, RechargeMemberThirdPayRequest, TransferSinglePayRequest, ApplyPayerInfoRequest, CreateSinglePayResponse, RefundMemberTransactionResponse, MigrateOrderRefundRequest, QueryBankClearRequest, QueryInvoiceRequest, ApplyApplicationMaterialResponse, QueryBankTransactionDetailsRequest, DownloadBillRequest, RevokeMemberRechargeThirdPayRequest, ExecuteMemberTransactionRequest, QuerySinglePayRequest, ApplyTradeResponse, QueryBankClearResponse, RechargeMemberThirdPayResponse, DescribeOrderStatusResponse, WithdrawCashMembershipResponse, QueryApplicationMaterialRequest, CreateMerchantResponse, QueryMemberTransactionResponse, ApplyApplicationMaterialRequest, ModifyAgentTaxPaymentInfoRequest, QuerySmallAmountTransferRequest, BindRelateAcctSmallAmountResponse, ModifyMntMbrBindRelateAcctBankCodeResponse, QueryBalanceRequest, ApplyWithdrawalRequest, BindRelateAcctSmallAmountRequest, QueryRefundResponse, QueryTransferBatchResponse, QueryMemberBindRequest, TransferSinglePayResponse, QueryAgentStatementsRequest, BindRelateAcctUnionPayResponse, QueryReconciliationDocumentRequest, UnifiedOrderRequest, UnBindAcctRequest, MigrateOrderRefundResponse, QueryAnchorContractInfoResponse, DeleteAgentTaxPaymentInfoResponse, RefundRequest, BindRelateAccReUnionPayResponse } from "./cpdp_models";
/**
 * cpdp client
 * @class
 */
export declare class Client extends AbstractClient {
    constructor(clientConfig: ClientConfig);
    /**
     * 会员间交易-不验证。此接口可以实现会员间的余额的交易，实现资金在会员之间流动。
     */
    QueryMemberTransaction(req: QueryMemberTransactionRequest, cb?: (error: string, rep: QueryMemberTransactionResponse) => void): Promise<QueryMemberTransactionResponse>;
    /**
     * 银企直连-单笔支付状态查询接口
     */
    QuerySinglePay(req: QuerySinglePayRequest, cb?: (error: string, rep: QuerySinglePayResponse) => void): Promise<QuerySinglePayResponse>;
    /**
     * 跨境-付款人查询
     */
    QueryPayerInfo(req: QueryPayerInfoRequest, cb?: (error: string, rep: QueryPayerInfoResponse) => void): Promise<QueryPayerInfoResponse>;
    /**
     * 查询单笔订单交易状态
     */
    DescribeOrderStatus(req: DescribeOrderStatusRequest, cb?: (error: string, rep: DescribeOrderStatusResponse) => void): Promise<DescribeOrderStatusResponse>;
    /**
     * 直播平台-查询主播签约信息
     */
    QueryAnchorContractInfo(req: QueryAnchorContractInfoRequest, cb?: (error: string, rep: QueryAnchorContractInfoResponse) => void): Promise<QueryAnchorContractInfoResponse>;
    /**
     * 商户绑定提现银行卡，每个商户只能绑定一张提现银行卡
     */
    BindAcct(req: BindAcctRequest, cb?: (error: string, rep: BindAcctResponse) => void): Promise<BindAcctResponse>;
    /**
     * 会员绑定提现账户-小额鉴权。会员申请绑定提现账户，绑定后从会员子账户中提现到绑定账户。
转账鉴权有两种形式：往账鉴权和来账鉴权。
往账鉴权：该接口发起成功后，银行会向提现账户转入小于等于0.5元的随机金额，并短信通知客户查看，客户查看后，需将收到的金额大小，在电商平台页面上回填，并通知银行。银行验证通过后，完成提现账户绑定。
来账鉴权：该接口发起成功后，银行以短信通知客户查看，客户查看后，需通过待绑定的账户往市场的监管账户转入短信上指定的金额。银行检索到该笔指定金额的来账是源自待绑定账户，则绑定成功。平安银行的账户，即BankType送1时，大小额行号和超级网银号都不用送。
     */
    BindRelateAcctSmallAmount(req: BindRelateAcctSmallAmountRequest, cb?: (error: string, rep: BindRelateAcctSmallAmountResponse) => void): Promise<BindRelateAcctSmallAmountResponse>;
    /**
     * 商户提现
     */
    ApplyWithdrawal(req: ApplyWithdrawalRequest, cb?: (error: string, rep: ApplyWithdrawalResponse) => void): Promise<ApplyWithdrawalResponse>;
    /**
     * 直播平台-修改代理商完税信息
     */
    ModifyAgentTaxPaymentInfo(req: ModifyAgentTaxPaymentInfoRequest, cb?: (error: string, rep: ModifyAgentTaxPaymentInfoResponse) => void): Promise<ModifyAgentTaxPaymentInfoResponse>;
    /**
     * 会员绑定信息查询。查询标志为“单个会员”的情况下，返回该会员的有效的绑定账户信息。
查询标志为“全部会员”的情况下，返回市场下的全部的有效的绑定账户信息。查询标志为“单个会员的证件信息”的情况下，返回市场下的指定的会员的留存在电商见证宝系统的证件信息。
     */
    QueryMemberBind(req: QueryMemberBindRequest, cb?: (error: string, rep: QueryMemberBindResponse) => void): Promise<QueryMemberBindResponse>;
    /**
     * 维护会员绑定提现账户联行号。此接口可以支持市场修改会员的提现账户的开户行信息，具体包括开户行行名、开户行的银行联行号（大小额联行号）和超级网银行号。
     */
    ModifyMntMbrBindRelateAcctBankCode(req: ModifyMntMbrBindRelateAcctBankCodeRequest, cb?: (error: string, rep: ModifyMntMbrBindRelateAcctBankCodeResponse) => void): Promise<ModifyMntMbrBindRelateAcctBankCodeResponse>;
    /**
     * 银企直连-单笔支付接口
     */
    CreateSinglePay(req: CreateSinglePayRequest, cb?: (error: string, rep: CreateSinglePayResponse) => void): Promise<CreateSinglePayResponse>;
    /**
     * 查询充值明细接口
     */
    DescribeChargeDetail(req: DescribeChargeDetailRequest, cb?: (error: string, rep: DescribeChargeDetailResponse) => void): Promise<DescribeChargeDetailResponse>;
    /**
     * 登记挂账(支持撤销)。此接口可实现把不明来账或自有资金等已登记在挂账子账户下的资金调整到普通会员子账户。即通过申请调用此接口，将会减少挂账子账户的资金，调增指定的普通会员子账户的可提现余额及可用余额。此接口不支持把挂账子账户资金清分到功能子账户。
     */
    RegisterBillSupportWithdraw(req: RegisterBillSupportWithdrawRequest, cb?: (error: string, rep: RegisterBillSupportWithdrawResponse) => void): Promise<RegisterBillSupportWithdrawResponse>;
    /**
     * 会员子账户开立。会员在银行注册，并开立会员子账户，交易网会员代码即会员在平台端系统的会员编号。
平台需保存银行返回的子账户账号，后续交易接口都会用到。会员属性字段为预留扩展字段，当前必须送默认值。
     */
    CreateCustAcctId(req: CreateCustAcctIdRequest, cb?: (error: string, rep: CreateCustAcctIdResponse) => void): Promise<CreateCustAcctIdResponse>;
    /**
     * 会员提现-不验证。此接口受理会员发起的提现申请。会员子账户的可提现余额、可用余额会减少，市场的资金汇总账户(监管账户)会减少相应的发生金额，提现到会员申请的收款账户。
     */
    WithdrawCashMembership(req: WithdrawCashMembershipRequest, cb?: (error: string, rep: WithdrawCashMembershipResponse) => void): Promise<WithdrawCashMembershipResponse>;
    /**
     * 通过此接口关闭此前已创建的订单，关闭后，用户将无法继续付款。仅能关闭创建后未支付的订单
     */
    CloseOrder(req: CloseOrderRequest, cb?: (error: string, rep: CloseOrderResponse) => void): Promise<CloseOrderResponse>;
    /**
     * 跨境-查询汇率
     */
    QueryExchangeRate(req: QueryExchangeRateRequest, cb?: (error: string, rep: QueryExchangeRateResponse) => void): Promise<QueryExchangeRateResponse>;
    /**
     * 智慧零售-查询管理端商户
     */
    QueryMerchantInfoForManagement(req: QueryMerchantInfoForManagementRequest, cb?: (error: string, rep: QueryMerchantInfoForManagementResponse) => void): Promise<QueryMerchantInfoForManagementResponse>;
    /**
     * 修改会员属性-普通商户子账户。修改会员的会员属性。
     */
    ReviseMbrProperty(req: ReviseMbrPropertyRequest, cb?: (error: string, rep: ReviseMbrPropertyResponse) => void): Promise<ReviseMbrPropertyResponse>;
    /**
     * 子商户余额查询
     */
    QueryBalance(req: QueryBalanceRequest, cb?: (error: string, rep: QueryBalanceResponse) => void): Promise<QueryBalanceResponse>;
    /**
     * 撤销会员在途充值(经第三方支付渠道)接口
     */
    RevokeRechargeByThirdPay(req: RevokeRechargeByThirdPayRequest, cb?: (error: string, rep: RevokeRechargeByThirdPayResponse) => void): Promise<RevokeRechargeByThirdPayResponse>;
    /**
     * 通过商家批次单号或者微信批次号查询批次单
     */
    QueryTransferBatch(req: QueryTransferBatchRequest, cb?: (error: string, rep: QueryTransferBatchResponse) => void): Promise<QueryTransferBatchResponse>;
    /**
     * 直播平台-查询批次信息
     */
    QueryAgentTaxPaymentBatch(req: QueryAgentTaxPaymentBatchRequest, cb?: (error: string, rep: QueryAgentTaxPaymentBatchResponse) => void): Promise<QueryAgentTaxPaymentBatchResponse>;
    /**
     * 直播平台-删除代理商完税信息
     */
    DeleteAgentTaxPaymentInfo(req: DeleteAgentTaxPaymentInfoRequest, cb?: (error: string, rep: DeleteAgentTaxPaymentInfoResponse) => void): Promise<DeleteAgentTaxPaymentInfoResponse>;
    /**
     * 会员绑定提现账户-银联鉴权。用于会员申请绑定提现账户，申请后银行前往银联验证卡信息：姓名、证件、卡号、银行预留手机是否相符，相符则发送给会员手机动态验证码并返回成功，不相符则返回失败。
平台接收到银行返回成功后，进入输入动态验证码的页面，有效期120秒，若120秒未输入，客户可点击重新发送动态验证码，这个步骤重新调用该接口即可。
平安银行的账户，大小额行号和超级网银号都不用送。
超级网银号：单笔转账金额不超过5万，不限制笔数，只用选XX银行，不用具体到支行，可实时知道对方是否收款成功。
大小额联行号：单笔转账可超过5万，需具体到支行，不能实时知道对方是否收款成功。金额超过5万的，在工作日的8点30-17点间才会成功。
     */
    BindRelateAcctUnionPay(req: BindRelateAcctUnionPayRequest, cb?: (error: string, rep: BindRelateAcctUnionPayResponse) => void): Promise<BindRelateAcctUnionPayResponse>;
    /**
     * 直播平台-代理商完税信息录入
     */
    CreateAgentTaxPaymentInfos(req: CreateAgentTaxPaymentInfosRequest, cb?: (error: string, rep: CreateAgentTaxPaymentInfosResponse) => void): Promise<CreateAgentTaxPaymentInfosResponse>;
    /**
     * 会员解绑提现账户。此接口可以支持会员解除名下的绑定账户关系。
     */
    UnbindRelateAcct(req: UnbindRelateAcctRequest, cb?: (error: string, rep: UnbindRelateAcctResponse) => void): Promise<UnbindRelateAcctResponse>;
    /**
     * 跨境-成功申报材料查询。查询成功入库的申报材料。
     */
    QueryApplicationMaterial(req: QueryApplicationMaterialRequest, cb?: (error: string, rep: QueryApplicationMaterialResponse) => void): Promise<QueryApplicationMaterialResponse>;
    /**
     * 直播平台-删除代理商完税信息
     */
    DeleteAgentTaxPaymentInfos(req: DeleteAgentTaxPaymentInfosRequest, cb?: (error: string, rep: DeleteAgentTaxPaymentInfosResponse) => void): Promise<DeleteAgentTaxPaymentInfosResponse>;
    /**
     * 查询普通转账充值明细。接口用于查询会员主动转账进资金汇总账户的明细情况。若会员使用绑定账号转入，则直接入账到会员子账户。若未使用绑定账号转入，则系统无法自动清分到对应子账户，则转入挂账子账户由平台自行清分。若是 “见证+收单充值”T0充值记录时备注Note为“见证+收单充值,订单号” 此接口可以查到T0到账的“见证+收单充值”充值记录。
     */
    QueryCommonTransferRecharge(req: QueryCommonTransferRechargeRequest, cb?: (error: string, rep: QueryCommonTransferRechargeResponse) => void): Promise<QueryCommonTransferRechargeResponse>;
    /**
     * 账单下载接口，根据本接口返回的URL地址，在D+1日下载对账单。注意，本接口返回的URL地址有时效，请尽快下载。URL超时时效后，请重新调用本接口再次获取。
     */
    DownloadBill(req: DownloadBillRequest, cb?: (error: string, rep: DownloadBillResponse) => void): Promise<DownloadBillResponse>;
    /**
     * 聚鑫-查询子账户绑定银行卡
     */
    QueryAcctBinding(req: QueryAcctBindingRequest, cb?: (error: string, rep: QueryAcctBindingResponse) => void): Promise<QueryAcctBindingResponse>;
    /**
     * 根据订单号，或者用户Id，查询支付订单状态
     */
    QueryOrder(req: QueryOrderRequest, cb?: (error: string, rep: QueryOrderResponse) => void): Promise<QueryOrderResponse>;
    /**
     * 智慧零售-发票开具
     */
    CreateInvoice(req: CreateInvoiceRequest, cb?: (error: string, rep: CreateInvoiceResponse) => void): Promise<CreateInvoiceResponse>;
    /**
     * 正常结算提现失败情况下，发起重新提现的请求接口
     */
    ApplyReWithdrawal(req: ApplyReWithdrawalRequest, cb?: (error: string, rep: ApplyReWithdrawalResponse) => void): Promise<ApplyReWithdrawalResponse>;
    /**
     * 智能代发-单笔代发转账接口
     */
    TransferSinglePay(req: TransferSinglePayRequest, cb?: (error: string, rep: TransferSinglePayResponse) => void): Promise<TransferSinglePayResponse>;
    /**
     * 跨境-付款人申请。通过该接口提交付款人信息并进行 kyc 审核。
     */
    ApplyPayerInfo(req: ApplyPayerInfoRequest, cb?: (error: string, rep: ApplyPayerInfoResponse) => void): Promise<ApplyPayerInfoResponse>;
    /**
     * 撤销会员在途充值(经第三方支付渠道)
     */
    RevokeMemberRechargeThirdPay(req: RevokeMemberRechargeThirdPayRequest, cb?: (error: string, rep: RevokeMemberRechargeThirdPayResponse) => void): Promise<RevokeMemberRechargeThirdPayResponse>;
    /**
     * 跨境-对接方账户余额查询
     */
    QueryMerchantBalance(req: QueryMerchantBalanceRequest, cb?: (error: string, rep: QueryMerchantBalanceResponse) => void): Promise<QueryMerchantBalanceResponse>;
    /**
     * 跨境-贸易材料明细查询。
     */
    QueryTrade(req: QueryTradeRequest, cb?: (error: string, rep: QueryTradeResponse) => void): Promise<QueryTradeResponse>;
    /**
     * 会员间交易退款
     */
    RefundMemberTransaction(req: RefundMemberTransactionRequest, cb?: (error: string, rep: RefundMemberTransactionResponse) => void): Promise<RefundMemberTransactionResponse>;
    /**
     * 跨境-提交贸易材料。通过提交贸易材料接口可为对接方累计贸易额度，在额度范围内可发起汇兑汇出交易。
     */
    ApplyTrade(req: ApplyTradeRequest, cb?: (error: string, rep: ApplyTradeResponse) => void): Promise<ApplyTradeResponse>;
    /**
     * 查询银行在途清算结果。查询时间段内交易网的在途清算结果。
     */
    QueryBankClear(req: QueryBankClearRequest, cb?: (error: string, rep: QueryBankClearResponse) => void): Promise<QueryBankClearResponse>;
    /**
     * 通过商家或者微信批次明细单号查询明细单
     */
    QueryTransferDetail(req: QueryTransferDetailRequest, cb?: (error: string, rep: QueryTransferDetailResponse) => void): Promise<QueryTransferDetailResponse>;
    /**
     * 查询银行单笔交易状态。查询单笔交易的状态。
     */
    QuerySingleTransactionStatus(req: QuerySingleTransactionStatusRequest, cb?: (error: string, rep: QuerySingleTransactionStatusResponse) => void): Promise<QuerySingleTransactionStatusResponse>;
    /**
     * 直播平台-查询代理商结算单链接
     */
    QueryAgentStatements(req: QueryAgentStatementsRequest, cb?: (error: string, rep: QueryAgentStatementsResponse) => void): Promise<QueryAgentStatementsResponse>;
    /**
     * 会员绑定提现账户-回填银联鉴权短信码。用于会员填写动态验证码后，发往银行进行验证，验证成功则完成绑定。
     */
    BindRelateAccReUnionPay(req: BindRelateAccReUnionPayRequest, cb?: (error: string, rep: BindRelateAccReUnionPayResponse) => void): Promise<BindRelateAccReUnionPayResponse>;
    /**
     * 智慧零售-发票红冲
     */
    CreateRedInvoice(req: CreateRedInvoiceRequest, cb?: (error: string, rep: CreateRedInvoiceResponse) => void): Promise<CreateRedInvoiceResponse>;
    /**
     * 提交退款申请后，通过调用该接口查询退款状态。退款可能有一定延时。
     */
    MigrateOrderRefundQuery(req: MigrateOrderRefundQueryRequest, cb?: (error: string, rep: MigrateOrderRefundQueryResponse) => void): Promise<MigrateOrderRefundQueryResponse>;
    /**
     * 验证鉴权金额。此接口可受理BindRelateAcctSmallAmount接口发起的转账金额（往账鉴权方式）的验证处理。若所回填的验证金额验证通过，则会绑定原申请中的银行账户作为提现账户。通过此接口也可以查得BindRelateAcctSmallAmount接口发起的来账鉴权方式的申请的当前状态。
     */
    CheckAmount(req: CheckAmountRequest, cb?: (error: string, rep: CheckAmountResponse) => void): Promise<CheckAmountResponse>;
    /**
     * 登记挂账撤销。此接口可以实现把RegisterBillSupportWithdraw接口完成的登记挂账进行撤销，即调减普通会员子账户的可提现和可用余额，调增挂账子账户的可用余额。
     */
    RevResigterBillSupportWithdraw(req: RevResigterBillSupportWithdrawRequest, cb?: (error: string, rep: RevResigterBillSupportWithdrawResponse) => void): Promise<RevResigterBillSupportWithdrawResponse>;
    /**
     * 智能代发-单笔代发转账查询接口
     */
    QueryTransferResult(req: QueryTransferResultRequest, cb?: (error: string, rep: QueryTransferResultResponse) => void): Promise<QueryTransferResultResponse>;
    /**
     * 查询银行时间段内交易明细。查询时间段的会员成功交易。
     */
    QueryBankTransactionDetails(req: QueryBankTransactionDetailsRequest, cb?: (error: string, rep: QueryBankTransactionDetailsResponse) => void): Promise<QueryBankTransactionDetailsResponse>;
    /**
     * 跨境-提交申报材料。申报材料的主体是付款人，需要提前调用【跨境-付款人申请】接口提交付款人信息且审核通过后调用。
     */
    ApplyApplicationMaterial(req: ApplyApplicationMaterialRequest, cb?: (error: string, rep: ApplyApplicationMaterialResponse) => void): Promise<ApplyApplicationMaterialResponse>;
    /**
     * 跨境-汇出指令申请。通过该接口可将对接方账户中的人民币余额汇兑成外币，再汇出至指定银行账户。
     */
    ApplyOutwardOrder(req: ApplyOutwardOrderRequest, cb?: (error: string, rep: ApplyOutwardOrderResponse) => void): Promise<ApplyOutwardOrderResponse>;
    /**
     * 微信商户发起批量转账
     */
    CreateTransferBatch(req: CreateTransferBatchRequest, cb?: (error: string, rep: CreateTransferBatchResponse) => void): Promise<CreateTransferBatchResponse>;
    /**
     * 查询银行子账户余额。查询会员子账户以及平台的功能子账户的余额。
     */
    QueryCustAcctIdBalance(req: QueryCustAcctIdBalanceRequest, cb?: (error: string, rep: QueryCustAcctIdBalanceResponse) => void): Promise<QueryCustAcctIdBalanceResponse>;
    /**
     * 查询小额鉴权转账结果。查询小额往账鉴权的转账状态。
     */
    QuerySmallAmountTransfer(req: QuerySmallAmountTransferRequest, cb?: (error: string, rep: QuerySmallAmountTransferResponse) => void): Promise<QuerySmallAmountTransferResponse>;
    /**
     * 山姆聚合支付项目-存量订单退款接口。可以通过本接口将支付款全部或部分退还给付款方，在收到用户退款请求并且验证成功之后，按照退款规则将支付款按原路退回到支付帐号。
     */
    MigrateOrderRefund(req: MigrateOrderRefundRequest, cb?: (error: string, rep: MigrateOrderRefundResponse) => void): Promise<MigrateOrderRefundResponse>;
    /**
     * 会员在途充值(经第三方支付渠道)接口
     */
    RechargeByThirdPay(req: RechargeByThirdPayRequest, cb?: (error: string, rep: RechargeByThirdPayResponse) => void): Promise<RechargeByThirdPayResponse>;
    /**
     * 见证宝-会员在途充值(经第三方支付渠道)
     */
    RechargeMemberThirdPay(req: RechargeMemberThirdPayRequest, cb?: (error: string, rep: RechargeMemberThirdPayResponse) => void): Promise<RechargeMemberThirdPayResponse>;
    /**
     * 智慧零售-发票查询
     */
    QueryInvoice(req: QueryInvoiceRequest, cb?: (error: string, rep: QueryInvoiceResponse) => void): Promise<QueryInvoiceResponse>;
    /**
     * 智慧零售-商户注册
     */
    CreateMerchant(req: CreateMerchantRequest, cb?: (error: string, rep: CreateMerchantResponse) => void): Promise<CreateMerchantResponse>;
    /**
     * 子商户入驻聚鑫平台
     */
    CreateAcct(req: CreateAcctRequest, cb?: (error: string, rep: CreateAcctResponse) => void): Promise<CreateAcctResponse>;
    /**
     * 应用需要先调用本接口生成支付订单号，并将应答的PayInfo透传给聚鑫SDK，拉起客户端（包括微信公众号/微信小程序/客户端App）支付。
     */
    UnifiedOrder(req: UnifiedOrderRequest, cb?: (error: string, rep: UnifiedOrderResponse) => void): Promise<UnifiedOrderResponse>;
    /**
     * 登记挂账(支持撤销)
     */
    RegisterBill(req: RegisterBillRequest, cb?: (error: string, rep: RegisterBillResponse) => void): Promise<RegisterBillResponse>;
    /**
     * 聚鑫-开户信息查询
     */
    QueryAcctInfo(req: QueryAcctInfoRequest, cb?: (error: string, rep: QueryAcctInfoResponse) => void): Promise<QueryAcctInfoResponse>;
    /**
     * 会员间交易接口
     */
    ExecuteMemberTransaction(req: ExecuteMemberTransactionRequest, cb?: (error: string, rep: ExecuteMemberTransactionResponse) => void): Promise<ExecuteMemberTransactionResponse>;
    /**
     * 跨境-查询汇出结果
     */
    QueryOutwardOrder(req: QueryOutwardOrderRequest, cb?: (error: string, rep: QueryOutwardOrderResponse) => void): Promise<QueryOutwardOrderResponse>;
    /**
     * 商户解除绑定的提现银行卡
     */
    UnBindAcct(req: UnBindAcctRequest, cb?: (error: string, rep: UnBindAcctResponse) => void): Promise<UnBindAcctResponse>;
    /**
     * 查询银行时间段内清分提现明细。查询银行时间段内清分提现明细接口：若为“见证+收单退款”“见证+收单充值”记录时备注Note为“见证+收单充值,订单号”“见证+收单退款,订单号”，此接口可以查到T0/T1的充值明细和退款记录。查询标志：充值记录仍用3清分选项查询，退款记录同提现用2选项查询。
     */
    QueryBankWithdrawCashDetails(req: QueryBankWithdrawCashDetailsRequest, cb?: (error: string, rep: QueryBankWithdrawCashDetailsResponse) => void): Promise<QueryBankWithdrawCashDetailsResponse>;
    /**
     * 聚鑫-开户信息列表查询, 查询某一段时间的开户信息
     */
    QueryAcctInfoList(req: QueryAcctInfoListRequest, cb?: (error: string, rep: QueryAcctInfoListResponse) => void): Promise<QueryAcctInfoListResponse>;
    /**
     * 查询对账文件信息。平台调用该接口获取需下载对账文件的文件名称以及密钥。 平台获取到信息后， 可以再调用OPENAPI的文件下载功能。
     */
    QueryReconciliationDocument(req: QueryReconciliationDocumentRequest, cb?: (error: string, rep: QueryReconciliationDocumentResponse) => void): Promise<QueryReconciliationDocumentResponse>;
    /**
     * 商户绑定提现银行卡的验证接口
     */
    CheckAcct(req: CheckAcctRequest, cb?: (error: string, rep: CheckAcctResponse) => void): Promise<CheckAcctResponse>;
    /**
     * 如交易订单需退款，可以通过本接口将支付款全部或部分退还给付款方，聚鑫将在收到退款请求并且验证成功之后，按照退款规则将支付款按原路退回到支付帐号。最长支持1年的订单退款。在订单包含多个子订单的情况下，如果使用本接口传入OutTradeNo或TransactionId退款，则只支持全单退款；如果需要部分退款，请通过传入子订单的方式来指定部分金额退款。
     */
    Refund(req: RefundRequest, cb?: (error: string, rep: RefundResponse) => void): Promise<RefundResponse>;
    /**
     * 提交退款申请后，通过调用该接口查询退款状态。退款可能有一定延时，用微信零钱支付的退款约20分钟内到账，银行卡支付的退款约3个工作日后到账。
     */
    QueryRefund(req: QueryRefundRequest, cb?: (error: string, rep: QueryRefundResponse) => void): Promise<QueryRefundResponse>;
}
