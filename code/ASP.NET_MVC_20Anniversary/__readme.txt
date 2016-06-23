網站：
http://www.gis.tw/20/

行動裝置可瀏覽網站

=======================================

網站由 ASP.NET MVC 開發

本資料夾僅保留自己寫的幾支檔案，未含完整的 MVC code


以下範例都是自己寫的，非套用現成

=======================================

範例一：

用CSS寫的圖片影格動畫

檔案：

CSS_Keyframes_Walk.html

=======================================

範例二：

照片牆
http://www.gis.tw/20/Wall

可隨螢幕寬度調整...照片牆及檢視內容的呈現


主要相關檔案：

照片牆
Views/Wall/Wall.cshtml
Views/Wall/PartialWall.cshtml
css/photo-wall.css
js/photo-wall.js

檢視內容
Views/Wall/Message.cshtml
Views/Wall/Topic.cshtml
css/colorbox.css

=======================================

範例三：

地圖上的選單(播放影片)
http://www.gis.tw/20/Video

選單是自己寫的；
螢幕寬度若在1024及以下會跳轉到行動版網址


相關檔案：

電腦版
Views/Video/Index.cshtml
css/video.css

行動版(只含影片)
Views/Video/Mobile.cshtml



