'use strict';

(function ($) {
    /*-------------------
		Quantity change
	--------------------- */
    var proQty = $('.pro-qty');
    proQty.prepend('<span class="dec qtybtn">-</span>');
    proQty.append('<span class="inc qtybtn">+</span>');
    proQty.on('click', '.qtybtn', function () {
        var $button = $(this);
        var oldValue = $button.parent().find('input').val();
        if ($button.hasClass('inc')) {
            var newVal = parseFloat(oldValue) + 1;
        } else {
            // Don't allow decrementing below zero
            if (oldValue > 0) {
                var newVal = parseFloat(oldValue) - 1;
            } else {
                newVal = 0;
            }
        }
        $button.parent().find('input').val(newVal);
        updateTotal();
    });

    /*-------------------
	Bổ sung hàm updateTotal()
	--------------------- */

    function updateTotal() {
        var price = 120000000; // Giá sản phẩm
        var quantity = parseFloat($('.pro-qty input').val());
        var total = price * quantity;
        $('.total-price').text(formatCurrency(total) + ' đ'); // Hiển thị tổng hóa đơn
    }

    // Hàm định dạng số tiền
    function formatCurrency(number) {
        return number.toFixed(0).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
    }
})(jQuery);