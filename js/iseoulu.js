var first_text, second_text, third_text, bottom_text;

$(document).ready(function () {

    var $input_first = $('#text_input_first');
    var $input_second = $('#text_input_second');
    var $input_third = $('#text_input_third');
    var $input_bottom = $('#text_input_bottom');

    $input_first.on('keyup', function () {
        first_text = $input_first.val();
        updateOutputValue();
    });

    $input_second.on('keyup', function () {
        second_text = $input_second.val();
        updateOutputValue();
    });

    $input_third.on('keyup', function () {
        third_text = $input_third.val();
        updateOutputValue();
    });

    $input_bottom.on('keyup', function () {
        bottom_text = $input_bottom.val();
        updateOutputValue();
    });

    var $input_font_size = $('#font_size_range_input');
    $input_font_size.on("change mousemove", function () {
        updateFontSize();
    });

    var $input_bottom_font_size = $('#bottom_font_size_range_input');
    $input_bottom_font_size.on("change mousemove", function () {
        updateFontSize();
    });

    var $input_round_size = $('#circle_range_input');
    $input_round_size.on("change mousemove", function () {
        updateRoundSize();
    });

    var $input_circle_text_spacing_size = $('#circle_text_spacing_input');
    $input_circle_text_spacing_size.on('change mousemove', function () {
        updateCircleTextSpacing();
    });

    var $text_bottom_text_spacing_input = $('#text_bottom_text_spacing_input');
    $text_bottom_text_spacing_input.on('change mousemove', function () {
        updateBottomTextSpacing();
    });

    var $text_bottom_text_translatex_input = $('#text_bottom_text_translatex_input');
    $text_bottom_text_translatex_input.on('change mousemove', function () {
        updateBottomTextTranslateX();
    });

    var $circle_translatey_input = $('#circle_translatey_input');
    $circle_translatey_input.on('change mousemove', function () {
        updateCircleTranslateY();
    });
});

function updateOutputValue() {
    $('#text_output_first').text(first_text);
    $('#text_output_second').text(second_text);
    $('#text_output_third').text(third_text);

    $('#text_output_bottom').text(bottom_text);
}

function updateFontSize() {
    var fontSize = $('#font_size_range_input').val();
    var bottomFontSize = $('#bottom_font_size_range_input').val();

    $('.text_outputs span').css("font-size", fontSize + 'px');
    $('#text_output_bottom').css("font-size", bottomFontSize + 'px');
}

function updateRoundSize() {
    var roundSize = $('#circle_range_input').val();
    $('.text_outputs div').css("width", roundSize);
    $('.text_outputs div').css("height", roundSize);

    $('.text_outputs div').css("border-radius", roundSize / 2);
    $('.text_outputs div').css("-moz-border-radius", roundSize / 2);
    $('.text_outputs div').css("-webkit-border-radius", roundSize / 2);
}

function updateCircleTextSpacing() {
    var spacingSize = $('#circle_text_spacing_input').val();
    $('.text_outputs div').css("margin-left", spacingSize + 'px');
    $('.text_outputs div').css("margin-right", spacingSize + 'px');
}

function updateCircleTranslateY() {
    var translateY = $('#circle_translatey_input').val();
    $('.text_outputs div').css('transform', 'translateY(' + translateY + 'px)');
}

function updateBottomTextSpacing() {
    var spacingSize = $('#text_bottom_text_spacing_input').val();
    $('.text_output_bottom').css("margin-top", spacingSize + 'px');
}

function updateBottomTextTranslateX() {
    var translateX = $('#text_bottom_text_translatex_input').val();
    $('.text_output_bottom').css('transform', 'translateX(' + translateX + 'px)');
}

function onClickSave() {
    html2canvas($(".i_seoul_u_output"), {
        onrendered: function (canvas) {
            Canvas2Image.saveAsPNG(canvas);
        }
    });
}
