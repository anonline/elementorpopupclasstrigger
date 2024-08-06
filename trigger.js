jQuery(document).ready(function($){
    var selectedIds = ["7091"];
    var classNameToAdd = "showpopup";
    var popupIdToShow = 16395;
    
    var addToCartButtons = [];
    
    $('button[name="add-to-cart"]').each(function(){
        var productIdFromButton = $(this).val();
            
        if(selectedIds.includes(productIdFromButton)){
            addToCartButtons.push($(this));
        }
    });
    
    $('a.add_to_cart_button').each(function(){
        var productIdFromButton = $(this).data('product_id');
        console.log(productIdFromButton);
        if(selectedIds.includes(String(productIdFromButton))){
            addToCartButtons.push($(this));
        }
    });

    var count = 0;
    $.each(addToCartButtons, function(){
        $(this).addClass(classNameToAdd);
        count++;
    });
    console.log(count + " class added.");

    if(count > 0){
        $('.'+classNameToAdd).click(function(){
            elementorProFrontend.modules.popup.showPopup({id:popupIdToShow});
        });
    }
});
