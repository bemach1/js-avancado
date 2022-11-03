import { changePage } from "../navigation.mjs";
import { PAGE_STATE } from "../data/domains.mjs";
import { addOrderAndTableRender, filterAllOrdersAndTableRender } from "../renders/orderRender.mjs";
import { printOrders, deleteOrdersChecked, editOrderChecked } from "../modules/order.mjs";


function checkAllItemsOnTable(tableSelector, checked) {
    checkedAllItemsRender(`${tableSelector} input[type="checkbox"]`, checked);
    formActionsUpdateStateRender();
}

export function LoadEvents() {
    const buttonAddOrder = document.querySelector(".form-add-order .btn");
    const buttonSaveOrder = document.querySelector(".table-new-order .btn-cta");
    const buttonCancelOrder = document.querySelector(
        ".table-new-order .btn-cta-link"
    );
    const buttonOrdersPrint = document.querySelector(".form-actions .btn-print");
    const buttonOrdersEdit = document.querySelector(".form-actions .btn-edit");
    const buttonOrdersDelete = document.querySelector(
        ".form-actions .btn-delete"
    );
    const filtersOrder = document.querySelectorAll(".form-actions select");
    const buttonSelectAllItemsTableOrders = document.querySelector(
        '.table-all-orders thead input[type="checkbox"]'
    );
    
    buttonAddOrder.addEventListener("click", (e) => {
        e.preventDefault();
        e.stopPropagation();
        changePage(PAGE_STATE.NEW_ORDER);
    });

    buttonSaveOrder.addEventListener("click", (e) => {
        addOrderAndTableRender();
    });

    buttonCancelOrder.addEventListener("click", (e) => {
        changePage(PAGE_STATE.ALL_ORDERS);
    });

    filtersOrder.forEach((select) => {
            select.addEventListener("change", (e) => {
            const orderType = filtersOrder[0].value;
            const orderStatus = filtersOrder[1].value;

            filterAllOrdersAndTableRender(orderType, orderStatus);
        });
    });

    buttonSelectAllItemsTableOrders.addEventListener("change", () => {
        checkAllItemsOnTable(
        ".table-all-orders tbody",
        buttonSelectAllItemsTableOrders.checked
        );
    });

    buttonOrdersPrint.addEventListener("click", (e) => {
        e.preventDefault();
        e.stopPropagation();
        printOrders();
    });

    buttonOrdersEdit.addEventListener("click", (e) => {
        e.preventDefault();
        e.stopPropagation();
        editOrderChecked();
    });

    buttonOrdersDelete.addEventListener("click", (e) => {
        e.preventDefault();
        e.stopPropagation();
        deleteOrdersChecked();
    });
}
