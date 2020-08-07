odoo.define('account.tour', function(require) {
"use strict";

var core = require('web.core');
var tour = require('web_tour.tour');

var _t = core._t;

tour.register('account_tour', {
    skip_enabled: true,
    url: "/web",
}, [
    ...tour.stepUtils.goToAppSteps('account.menu_finance', _t('Send invoices to your customers in no time with the <b>Invoicing app</b>.')),
    {
        trigger: "a.o_onboarding_step_action[data-method=action_open_base_onboarding_company]",
        content: _t("First of all, fill in your company’s details."),
    }, {
        trigger: "input[name=street], input[name=street_name]",
        content: _t("Let's start with the address."),
    }, {
        trigger: "input[name=email]",
        content: _t("Once the address is complete, be sure to set the right email."),
    }, {
        trigger: "div.o_form_image_controls",
        content: _t("You can also upload your logo. This will be displayed on your invoices."),
        position: "bottom",
    }, {
        trigger: "button[name=action_save_onboarding_company_step]",
        content: _t("Once everything is set, you are good to continue."),
    }, {
        trigger: "button.o_list_button_add",
        content: _t("Let’s create the invoice immediately."),
    }, {
        trigger: "div[name=partner_id] input",
        content: _t("Select a client.<br>Type the name of you client here. A lot of known companies are already prefilled!<br>Just start typing. If you see it in the list, click on it. Otherwise click on <b>Create and Edit</b>."),
    }, {
        trigger: ".o_m2o_dropdown_option a:contains('Create')",
        content: _t("Click on Create and Edit"),
        auto: true,
    }, {
        trigger: "input[name=street], input[name=street_name]",
        content: _t("Fill in the relevant fields needed to invoice your customer like the address and the tax information."),
    }, {
        trigger: "input[name=email]",
        content: _t("Add email."),
        run: 'text custome@example.com',
        auto: true,
    }, {
        trigger: "button.btn-primary",
        content: _t("Once everything is set, you are good to continue. You will be able to edit this later in the <b>Customers</b> menu."),
    }, {
        trigger: "div[name=invoice_line_ids] .o_field_x2many_list_row_add a:not([data-context])",
        content: _t("Add minimum one line, fill the invoice details."),
    }, {
        trigger: "div[name=invoice_line_ids] textarea[name=name]",
        content: _t("Fill in the details of the line (label, quantity, unit price, taxes,...). All the details can be set automatically if you configure your <b>products</b>."),
    }, {
        trigger: "div[name=invoice_line_ids] input[name=price_unit]",
        content: _t("Fill in the details of the line (label, quantity, unit price, taxes,...). All the details can be set automatically if you configure your <b>products</b>."),
        run: 'text 100',
    }, {
        trigger: "div[name=invoice_line_ids] .o_field_x2many_list_row_add a:not([data-context])",
        content: _t("You can add more <b>lines</b>, <b>sections</b> or <b>notes</b>."),
    }, {
        trigger: "div[name=invoice_line_ids] tr:nth-child(2) button[name=delete]",
        content: _t("Delete them if you made a mistake."),
        position: "bottom",
    }, {
        trigger: "div[name=invoice_line_ids] span[name=sequence]",
        content: _t("And reorder them."),
    }, {
        trigger: "button[name=action_post]",
        content: _t("Once your invoice is ready, validate. Note that if you didn’t fill in the date. It will be automatically set to today’s date."),
    }, {
        trigger: "button[name=action_invoice_sent]",
        content: _t("Send the invoice to your customer."),
    }, {
        trigger: "div[name=partner_ids]",
        content: _t("Would you like to change recipient? Add your email address to this first email. You’ll get what your client gets."),
    }, {
        trigger: "button[name=send_and_print_action]",
        content: _t("Validate. The first time you do this, you will have to configure the templates."),
    }, {
        trigger: "button[name=document_layout_save]",
        content: _t("Once everything is as you want it, validate."),
    }, {
        trigger: ".o_MessageList .o_Message:first()",
        content: _t("You can see the history of this invoice since creation here."),
        position: "top",
    }
]);

});
