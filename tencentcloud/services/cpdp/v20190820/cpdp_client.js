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
 * cpdp client
 * @class
 */
class Client extends abstract_client_1.AbstractClient {
    constructor(clientConfig) {
        super("cpdp.tencentcloudapi.com", "2019-08-20", clientConfig);
    }
    /**
     * 会员间交易-不验证。此接口可以实现会员间的余额的交易，实现资金在会员之间流动。
     */
    async QueryMemberTransaction(req, cb) {
        return this.request("QueryMemberTransaction", req, cb);
    }
    /**
     * 银企直连-单笔支付状态查询接口
     */
    async QuerySinglePay(req, cb) {
        return this.request("QuerySinglePay", req, cb);
    }
    /**
     * 跨境-付款人查询
     */
    async QueryPayerInfo(req, cb) {
        return this.request("QueryPayerInfo", req, cb);
    }
    /**
     * 查询单笔订单交易状态
     */
    async DescribeOrderStatus(req, cb) {
        return this.request("DescribeOrderStatus", req, cb);
    }
    /**
     * 直播平台-查询主播签约信息
     */
    async QueryAnchorContractInfo(req, cb) {
        return this.request("QueryAnchorContractInfo", req, cb);
    }
    /**
     * 商户绑定提现银行卡，每个商户只能绑定一张提现银行卡
     */
    async BindAcct(req, cb) {
        return this.request("BindAcct", req, cb);
    }
    /**
     * 会员绑定提现账户-小额鉴权。会员申请绑定提现账户，绑定后从会员子账户中提现到绑定账户。
转账鉴权有两种形式：往账鉴权和来账鉴权。
往账鉴权：该接口发起成功后，银行会向提现账户转入小于等于0.5元的随机金额，并短信通知客户查看，客户查看后，需将收到的金额大小，在电商平台页面上回填，并通知银行。银行验证通过后，完成提现账户绑定。
来账鉴权：该接口发起成功后，银行以短信通知客户查看，客户查看后，需通过待绑定的账户往市场的监管账户转入短信上指定的金额。银行检索到该笔指定金额的来账是源自待绑定账户，则绑定成功。平安银行的账户，即BankType送1时，大小额行号和超级网银号都不用送。
     */
    async BindRelateAcctSmallAmount(req, cb) {
        return this.request("BindRelateAcctSmallAmount", req, cb);
    }
    /**
     * 商户提现
     */
    async ApplyWithdrawal(req, cb) {
        return this.request("ApplyWithdrawal", req, cb);
    }
    /**
     * 直播平台-修改代理商完税信息
     */
    async ModifyAgentTaxPaymentInfo(req, cb) {
        return this.request("ModifyAgentTaxPaymentInfo", req, cb);
    }
    /**
     * 会员绑定信息查询。查询标志为“单个会员”的情况下，返回该会员的有效的绑定账户信息。
查询标志为“全部会员”的情况下，返回市场下的全部的有效的绑定账户信息。查询标志为“单个会员的证件信息”的情况下，返回市场下的指定的会员的留存在电商见证宝系统的证件信息。
     */
    async QueryMemberBind(req, cb) {
        return this.request("QueryMemberBind", req, cb);
    }
    /**
     * 维护会员绑定提现账户联行号。此接口可以支持市场修改会员的提现账户的开户行信息，具体包括开户行行名、开户行的银行联行号（大小额联行号）和超级网银行号。
     */
    async ModifyMntMbrBindRelateAcctBankCode(req, cb) {
        return this.request("ModifyMntMbrBindRelateAcctBankCode", req, cb);
    }
    /**
     * 银企直连-单笔支付接口
     */
    async CreateSinglePay(req, cb) {
        return this.request("CreateSinglePay", req, cb);
    }
    /**
     * 查询充值明细接口
     */
    async DescribeChargeDetail(req, cb) {
        return this.request("DescribeChargeDetail", req, cb);
    }
    /**
     * 登记挂账(支持撤销)。此接口可实现把不明来账或自有资金等已登记在挂账子账户下的资金调整到普通会员子账户。即通过申请调用此接口，将会减少挂账子账户的资金，调增指定的普通会员子账户的可提现余额及可用余额。此接口不支持把挂账子账户资金清分到功能子账户。
     */
    async RegisterBillSupportWithdraw(req, cb) {
        return this.request("RegisterBillSupportWithdraw", req, cb);
    }
    /**
     * 会员子账户开立。会员在银行注册，并开立会员子账户，交易网会员代码即会员在平台端系统的会员编号。
平台需保存银行返回的子账户账号，后续交易接口都会用到。会员属性字段为预留扩展字段，当前必须送默认值。
     */
    async CreateCustAcctId(req, cb) {
        return this.request("CreateCustAcctId", req, cb);
    }
    /**
     * 会员提现-不验证。此接口受理会员发起的提现申请。会员子账户的可提现余额、可用余额会减少，市场的资金汇总账户(监管账户)会减少相应的发生金额，提现到会员申请的收款账户。
     */
    async WithdrawCashMembership(req, cb) {
        return this.request("WithdrawCashMembership", req, cb);
    }
    /**
     * 通过此接口关闭此前已创建的订单，关闭后，用户将无法继续付款。仅能关闭创建后未支付的订单
     */
    async CloseOrder(req, cb) {
        return this.request("CloseOrder", req, cb);
    }
    /**
     * 跨境-查询汇率
     */
    async QueryExchangeRate(req, cb) {
        return this.request("QueryExchangeRate", req, cb);
    }
    /**
     * 智慧零售-查询管理端商户
     */
    async QueryMerchantInfoForManagement(req, cb) {
        return this.request("QueryMerchantInfoForManagement", req, cb);
    }
    /**
     * 修改会员属性-普通商户子账户。修改会员的会员属性。
     */
    async ReviseMbrProperty(req, cb) {
        return this.request("ReviseMbrProperty", req, cb);
    }
    /**
     * 子商户余额查询
     */
    async QueryBalance(req, cb) {
        return this.request("QueryBalance", req, cb);
    }
    /**
     * 撤销会员在途充值(经第三方支付渠道)接口
     */
    async RevokeRechargeByThirdPay(req, cb) {
        return this.request("RevokeRechargeByThirdPay", req, cb);
    }
    /**
     * 通过商家批次单号或者微信批次号查询批次单
     */
    async QueryTransferBatch(req, cb) {
        return this.request("QueryTransferBatch", req, cb);
    }
    /**
     * 直播平台-查询批次信息
     */
    async QueryAgentTaxPaymentBatch(req, cb) {
        return this.request("QueryAgentTaxPaymentBatch", req, cb);
    }
    /**
     * 直播平台-删除代理商完税信息
     */
    async DeleteAgentTaxPaymentInfo(req, cb) {
        return this.request("DeleteAgentTaxPaymentInfo", req, cb);
    }
    /**
     * 会员绑定提现账户-银联鉴权。用于会员申请绑定提现账户，申请后银行前往银联验证卡信息：姓名、证件、卡号、银行预留手机是否相符，相符则发送给会员手机动态验证码并返回成功，不相符则返回失败。
平台接收到银行返回成功后，进入输入动态验证码的页面，有效期120秒，若120秒未输入，客户可点击重新发送动态验证码，这个步骤重新调用该接口即可。
平安银行的账户，大小额行号和超级网银号都不用送。
超级网银号：单笔转账金额不超过5万，不限制笔数，只用选XX银行，不用具体到支行，可实时知道对方是否收款成功。
大小额联行号：单笔转账可超过5万，需具体到支行，不能实时知道对方是否收款成功。金额超过5万的，在工作日的8点30-17点间才会成功。
     */
    async BindRelateAcctUnionPay(req, cb) {
        return this.request("BindRelateAcctUnionPay", req, cb);
    }
    /**
     * 直播平台-代理商完税信息录入
     */
    async CreateAgentTaxPaymentInfos(req, cb) {
        return this.request("CreateAgentTaxPaymentInfos", req, cb);
    }
    /**
     * 会员解绑提现账户。此接口可以支持会员解除名下的绑定账户关系。
     */
    async UnbindRelateAcct(req, cb) {
        return this.request("UnbindRelateAcct", req, cb);
    }
    /**
     * 跨境-成功申报材料查询。查询成功入库的申报材料。
     */
    async QueryApplicationMaterial(req, cb) {
        return this.request("QueryApplicationMaterial", req, cb);
    }
    /**
     * 直播平台-删除代理商完税信息
     */
    async DeleteAgentTaxPaymentInfos(req, cb) {
        return this.request("DeleteAgentTaxPaymentInfos", req, cb);
    }
    /**
     * 查询普通转账充值明细。接口用于查询会员主动转账进资金汇总账户的明细情况。若会员使用绑定账号转入，则直接入账到会员子账户。若未使用绑定账号转入，则系统无法自动清分到对应子账户，则转入挂账子账户由平台自行清分。若是 “见证+收单充值”T0充值记录时备注Note为“见证+收单充值,订单号” 此接口可以查到T0到账的“见证+收单充值”充值记录。
     */
    async QueryCommonTransferRecharge(req, cb) {
        return this.request("QueryCommonTransferRecharge", req, cb);
    }
    /**
     * 账单下载接口，根据本接口返回的URL地址，在D+1日下载对账单。注意，本接口返回的URL地址有时效，请尽快下载。URL超时时效后，请重新调用本接口再次获取。
     */
    async DownloadBill(req, cb) {
        return this.request("DownloadBill", req, cb);
    }
    /**
     * 聚鑫-查询子账户绑定银行卡
     */
    async QueryAcctBinding(req, cb) {
        return this.request("QueryAcctBinding", req, cb);
    }
    /**
     * 根据订单号，或者用户Id，查询支付订单状态
     */
    async QueryOrder(req, cb) {
        return this.request("QueryOrder", req, cb);
    }
    /**
     * 智慧零售-发票开具
     */
    async CreateInvoice(req, cb) {
        return this.request("CreateInvoice", req, cb);
    }
    /**
     * 正常结算提现失败情况下，发起重新提现的请求接口
     */
    async ApplyReWithdrawal(req, cb) {
        return this.request("ApplyReWithdrawal", req, cb);
    }
    /**
     * 智能代发-单笔代发转账接口
     */
    async TransferSinglePay(req, cb) {
        return this.request("TransferSinglePay", req, cb);
    }
    /**
     * 跨境-付款人申请。通过该接口提交付款人信息并进行 kyc 审核。
     */
    async ApplyPayerInfo(req, cb) {
        return this.request("ApplyPayerInfo", req, cb);
    }
    /**
     * 撤销会员在途充值(经第三方支付渠道)
     */
    async RevokeMemberRechargeThirdPay(req, cb) {
        return this.request("RevokeMemberRechargeThirdPay", req, cb);
    }
    /**
     * 跨境-对接方账户余额查询
     */
    async QueryMerchantBalance(req, cb) {
        return this.request("QueryMerchantBalance", req, cb);
    }
    /**
     * 跨境-贸易材料明细查询。
     */
    async QueryTrade(req, cb) {
        return this.request("QueryTrade", req, cb);
    }
    /**
     * 会员间交易退款
     */
    async RefundMemberTransaction(req, cb) {
        return this.request("RefundMemberTransaction", req, cb);
    }
    /**
     * 跨境-提交贸易材料。通过提交贸易材料接口可为对接方累计贸易额度，在额度范围内可发起汇兑汇出交易。
     */
    async ApplyTrade(req, cb) {
        return this.request("ApplyTrade", req, cb);
    }
    /**
     * 查询银行在途清算结果。查询时间段内交易网的在途清算结果。
     */
    async QueryBankClear(req, cb) {
        return this.request("QueryBankClear", req, cb);
    }
    /**
     * 通过商家或者微信批次明细单号查询明细单
     */
    async QueryTransferDetail(req, cb) {
        return this.request("QueryTransferDetail", req, cb);
    }
    /**
     * 查询银行单笔交易状态。查询单笔交易的状态。
     */
    async QuerySingleTransactionStatus(req, cb) {
        return this.request("QuerySingleTransactionStatus", req, cb);
    }
    /**
     * 直播平台-查询代理商结算单链接
     */
    async QueryAgentStatements(req, cb) {
        return this.request("QueryAgentStatements", req, cb);
    }
    /**
     * 会员绑定提现账户-回填银联鉴权短信码。用于会员填写动态验证码后，发往银行进行验证，验证成功则完成绑定。
     */
    async BindRelateAccReUnionPay(req, cb) {
        return this.request("BindRelateAccReUnionPay", req, cb);
    }
    /**
     * 智慧零售-发票红冲
     */
    async CreateRedInvoice(req, cb) {
        return this.request("CreateRedInvoice", req, cb);
    }
    /**
     * 提交退款申请后，通过调用该接口查询退款状态。退款可能有一定延时。
     */
    async MigrateOrderRefundQuery(req, cb) {
        return this.request("MigrateOrderRefundQuery", req, cb);
    }
    /**
     * 验证鉴权金额。此接口可受理BindRelateAcctSmallAmount接口发起的转账金额（往账鉴权方式）的验证处理。若所回填的验证金额验证通过，则会绑定原申请中的银行账户作为提现账户。通过此接口也可以查得BindRelateAcctSmallAmount接口发起的来账鉴权方式的申请的当前状态。
     */
    async CheckAmount(req, cb) {
        return this.request("CheckAmount", req, cb);
    }
    /**
     * 登记挂账撤销。此接口可以实现把RegisterBillSupportWithdraw接口完成的登记挂账进行撤销，即调减普通会员子账户的可提现和可用余额，调增挂账子账户的可用余额。
     */
    async RevResigterBillSupportWithdraw(req, cb) {
        return this.request("RevResigterBillSupportWithdraw", req, cb);
    }
    /**
     * 智能代发-单笔代发转账查询接口
     */
    async QueryTransferResult(req, cb) {
        return this.request("QueryTransferResult", req, cb);
    }
    /**
     * 查询银行时间段内交易明细。查询时间段的会员成功交易。
     */
    async QueryBankTransactionDetails(req, cb) {
        return this.request("QueryBankTransactionDetails", req, cb);
    }
    /**
     * 跨境-提交申报材料。申报材料的主体是付款人，需要提前调用【跨境-付款人申请】接口提交付款人信息且审核通过后调用。
     */
    async ApplyApplicationMaterial(req, cb) {
        return this.request("ApplyApplicationMaterial", req, cb);
    }
    /**
     * 跨境-汇出指令申请。通过该接口可将对接方账户中的人民币余额汇兑成外币，再汇出至指定银行账户。
     */
    async ApplyOutwardOrder(req, cb) {
        return this.request("ApplyOutwardOrder", req, cb);
    }
    /**
     * 微信商户发起批量转账
     */
    async CreateTransferBatch(req, cb) {
        return this.request("CreateTransferBatch", req, cb);
    }
    /**
     * 查询银行子账户余额。查询会员子账户以及平台的功能子账户的余额。
     */
    async QueryCustAcctIdBalance(req, cb) {
        return this.request("QueryCustAcctIdBalance", req, cb);
    }
    /**
     * 查询小额鉴权转账结果。查询小额往账鉴权的转账状态。
     */
    async QuerySmallAmountTransfer(req, cb) {
        return this.request("QuerySmallAmountTransfer", req, cb);
    }
    /**
     * 山姆聚合支付项目-存量订单退款接口。可以通过本接口将支付款全部或部分退还给付款方，在收到用户退款请求并且验证成功之后，按照退款规则将支付款按原路退回到支付帐号。
     */
    async MigrateOrderRefund(req, cb) {
        return this.request("MigrateOrderRefund", req, cb);
    }
    /**
     * 会员在途充值(经第三方支付渠道)接口
     */
    async RechargeByThirdPay(req, cb) {
        return this.request("RechargeByThirdPay", req, cb);
    }
    /**
     * 见证宝-会员在途充值(经第三方支付渠道)
     */
    async RechargeMemberThirdPay(req, cb) {
        return this.request("RechargeMemberThirdPay", req, cb);
    }
    /**
     * 智慧零售-发票查询
     */
    async QueryInvoice(req, cb) {
        return this.request("QueryInvoice", req, cb);
    }
    /**
     * 智慧零售-商户注册
     */
    async CreateMerchant(req, cb) {
        return this.request("CreateMerchant", req, cb);
    }
    /**
     * 子商户入驻聚鑫平台
     */
    async CreateAcct(req, cb) {
        return this.request("CreateAcct", req, cb);
    }
    /**
     * 应用需要先调用本接口生成支付订单号，并将应答的PayInfo透传给聚鑫SDK，拉起客户端（包括微信公众号/微信小程序/客户端App）支付。
     */
    async UnifiedOrder(req, cb) {
        return this.request("UnifiedOrder", req, cb);
    }
    /**
     * 登记挂账(支持撤销)
     */
    async RegisterBill(req, cb) {
        return this.request("RegisterBill", req, cb);
    }
    /**
     * 聚鑫-开户信息查询
     */
    async QueryAcctInfo(req, cb) {
        return this.request("QueryAcctInfo", req, cb);
    }
    /**
     * 会员间交易接口
     */
    async ExecuteMemberTransaction(req, cb) {
        return this.request("ExecuteMemberTransaction", req, cb);
    }
    /**
     * 跨境-查询汇出结果
     */
    async QueryOutwardOrder(req, cb) {
        return this.request("QueryOutwardOrder", req, cb);
    }
    /**
     * 商户解除绑定的提现银行卡
     */
    async UnBindAcct(req, cb) {
        return this.request("UnBindAcct", req, cb);
    }
    /**
     * 查询银行时间段内清分提现明细。查询银行时间段内清分提现明细接口：若为“见证+收单退款”“见证+收单充值”记录时备注Note为“见证+收单充值,订单号”“见证+收单退款,订单号”，此接口可以查到T0/T1的充值明细和退款记录。查询标志：充值记录仍用3清分选项查询，退款记录同提现用2选项查询。
     */
    async QueryBankWithdrawCashDetails(req, cb) {
        return this.request("QueryBankWithdrawCashDetails", req, cb);
    }
    /**
     * 聚鑫-开户信息列表查询, 查询某一段时间的开户信息
     */
    async QueryAcctInfoList(req, cb) {
        return this.request("QueryAcctInfoList", req, cb);
    }
    /**
     * 查询对账文件信息。平台调用该接口获取需下载对账文件的文件名称以及密钥。 平台获取到信息后， 可以再调用OPENAPI的文件下载功能。
     */
    async QueryReconciliationDocument(req, cb) {
        return this.request("QueryReconciliationDocument", req, cb);
    }
    /**
     * 商户绑定提现银行卡的验证接口
     */
    async CheckAcct(req, cb) {
        return this.request("CheckAcct", req, cb);
    }
    /**
     * 如交易订单需退款，可以通过本接口将支付款全部或部分退还给付款方，聚鑫将在收到退款请求并且验证成功之后，按照退款规则将支付款按原路退回到支付帐号。最长支持1年的订单退款。在订单包含多个子订单的情况下，如果使用本接口传入OutTradeNo或TransactionId退款，则只支持全单退款；如果需要部分退款，请通过传入子订单的方式来指定部分金额退款。
     */
    async Refund(req, cb) {
        return this.request("Refund", req, cb);
    }
    /**
     * 提交退款申请后，通过调用该接口查询退款状态。退款可能有一定延时，用微信零钱支付的退款约20分钟内到账，银行卡支付的退款约3个工作日后到账。
     */
    async QueryRefund(req, cb) {
        return this.request("QueryRefund", req, cb);
    }
}
exports.Client = Client;
