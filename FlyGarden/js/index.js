$(function () {
    $(window).on("resize", function () {
        //获取窗口宽度
        let clientW = $(window).width();
        // console.log(clientW);

        //设置临界值
        let isShowBigImage = clientW >= 800;

        //获取item
        let $allItems = $("#fly_carousel .item");
        console.log($allItems);

        //遍历
        $allItems.each(function (index, item) {
            //取图
            let src = isShowBigImage ? $(item).data("lg-img") : $(item).data("sm-img");
            let imgUrl = 'url("' + src + '")';

            //设置背景
            $(item).css({
                backgroundImage: imgUrl
            });

            //设置img标签
            if (!isShowBigImage) {
                let $img = "<img src='" + src + "'>";
                $(item).empty().append($img);
            } else {
                $(item).empty();
            }
        })
    });

    $(window).trigger("resize");
});