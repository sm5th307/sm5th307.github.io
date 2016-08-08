<!--
//
// ■ 設定播放清單內容
//
//   完整的設定格式: mkList("媒體檔案位置","媒體標題","字幕檔案位置","凍結旗標(f)");
//   一般的設定格式: mkList("媒體檔案位置","媒體標題");
// 預設不播放某項目: mkList("媒體檔案位置","媒體標題","", "f");
// 自動取得媒體資訊: mkList("媒體檔案位置");
//
// ※註1: 第二個設定值(媒體標題)一般的格式是「演出者 - 曲目標題」。
// ※註2: 第四個設定值(凍結旗標/Frozen Flag)是以 f 字元來表示預設不選取播放此媒體檔案。

// 設定播放清單項目時，請注意以下各項：
//
//    1. 如果您使用相對路徑(Relative Path)的方式來設定檔案位置，請最好在連結前面使用如 ./ 或 ../ 來示意目前
//       所在的資料夾。當您以絕對路徑(Absolute Path)的方式來設定連結時，除了 http:// 或 ftp:// 之外，您也可
//       使用如 mms:// 或 rtsp:// 這些串流處理媒體的通訊協定。
//
//    2. 如果您想要使用字幕功能，媒體項目的第一個設定值(媒體檔案位置)或第三個設定值(字幕檔案位置)其中一項，
//       必須使用絕對路徑的方式來設定連結，否則字幕功能只會在本機運作，而在遠端伺服器卻失效的。此外，與媒體
//       檔案相連的字幕檔案，最好要符合這兩個條件： 1.存放在相同的資料夾； 2.以相同的檔名來命名。例如：媒體
//       檔名為 xyz.wmv 就使用 xyz.smi 的字幕檔案。假如字幕檔名跟媒體檔名不一樣，您必須在播放清單項目設定中
//       加入第三個設定值(字幕檔案位置)，但毋須加入路徑。以下的設定範例說明了上述各點：
//
//         例1: mkList("http://mydomain.com/exobud/video/xyz.wmv","我的生活片段");
//              解說 - 字幕檔案 xyz.smi 存放在相同的資料夾，則毋須設定「字幕檔案位置」。
//         例2: mkList("http://mydomain.com/exobud/video/xyz.wmv","我的生活片段","abc.smi");
//              解說 - 字幕檔案存放在相同的資料夾，但檔名有別，須設定字幕檔名。
//         例3: mkList("./music/xyz.wma","演出者 - 歌名","http://others.net/lyric/xyz.smi");
//              解說 - 字幕檔案存放在不同的主機，必須使用絕對路徑的方式來設定「字幕檔案位置」。
//         例4: mkList("http://others.net/music/xyz.wma","演出者 - 歌名");
//              解說 - 媒體檔案與字幕檔案俱存放在不同的主機，同時又符合相同資料夾及檔名的條件。
//
//    3. 使用全英文小寫半形字元的檔案路徑永遠是最保險的做法，因為可以保證在大部份情況下都能夠正常讀取連結。
//       請盡量避免使用包含雙字節字元 (例如中文字或韓文字) 、特殊字元或半形空白的連結；如果可以的話，在設定
//       連結時，最好將這些文字轉換成『％控制碼』，例如將半形空白寫成 %20 。
//
//    4. 當您在設定媒體標題時，可能會遇上一些跟繁體中文 (Big5) 不同語系的文字，例如韓文或日文。如果您決定要
//       保留媒體原本的語文做為媒體標題，請先將這些文字轉換成像 &#12345; 的『＆控制碼』(即Unicode/萬國碼)，
//       然後才好寫到媒體標題的設定值裡去，否則這些外語文字是無法在播放面板或播放清單上正確顯示出來的。
//
//    5. 如果您使用以「自動取得媒體資訊」的方式來讀取媒體標題的資訊，即在播放清單項目裡只填寫媒體檔案位置，
//       媒體標題則預設顯示為「未指定媒體標題(等待自動取得媒體資訊)」。在準備開始播放該曲目時，程式才會讀取
//       媒體資訊，然後在播放面板及播放清單顯示出來。(當播放器所在的頁面重新整理後，便會回復到原來的狀態。)
//
//    6. 因為本程式是利用微軟的 Windows Media Player 做為後台播放程式，所以並不支援以 .ra .rm .rv .ram 這些
//       由 RealNetworks 制訂的媒體格式來播放音訊或視訊內容。請不要在播放清單項目中加入這些媒體檔案。另外，
//       本程式雖然支援微軟最新開發的「Windows Media 播放清單」檔案格式 (副檔名為 .wpl)，但是因為此格式尚未
//       開發成熟，而本程式對此格式的支援可能不夠完全，所以建議使用者應避免使用這種檔案來製作播放清單，除非
//       您是本程式的開發人員／面板製作者，或對程式運作已有深入了解。

// ════════════════════════════════════════════════════
//            以下為樣本播放清單的內容，請在設定您的正式播放清單完畢後，將此部份刪除或註解起來。
// ════════════════════════════════════════════════════
//
// [T1] 下面這一行是使用一般的設定格式來設定播放清單項目 (是項設定只能在本機正常顯示字幕，在正式使用時請參考上述第2點之說明)



mkList("http://et235187.idv.st.141.hiavgirl.net/WMA/T8-11.wma","蔡依林-城堡-海盜");
mkList("http://et235187.idv.st.141.hiavgirl.net/WMA/T8-10.wma","蔡依林-城堡-愛情三十六計");
mkList("http://et235187.idv.st.141.hiavgirl.net/WMA/T8-9.wma","張韶涵-Over The Rainbow-寓言");
mkList("http://et235187.idv.st.141.hiavgirl.net/WMA/T8-7.wma","劉若英-我的失敗與偉大-分開旅行");
mkList("http://et235187.idv.st.141.hiavgirl.net/WMA/T8-6.wma","陳奕迅-七-聖誕節");
mkList("http://et235187.idv.st.141.hiavgirl.net/WMA/T8-5.wma","徐若萱-我愛你x4-決定愛你");
mkList("http://et235187.idv.st.141.hiavgirl.net/WMA/T8-4.wma","5566-西街少年電視原聲帶-存在");
mkList("http://et235187.idv.st.141.hiavgirl.net/WMA/T8-3.wma","S.H.E-SUPER STAR-SUPER STAR");
mkList("http://et235187.idv.st.141.hiavgirl.net/WMA/T8-2.wma","陶?-樂之路1997-2003-寂寞的季節");
mkList("http://et235187.idv.st.141.hiavgirl.net/WMA/T8-1.wma","陶?-樂之路1997-2003-今天不回家");
mkList("http://et235187.idv.st.141.hiavgirl.net/WMA/T7-1.wma","周杰倫-葉惠美-以父之名");
mkList("http://et235187.idv.st.141.hiavgirl.net/WMA/T7-2.wma","周杰倫-葉惠美-懦夫");
mkList("http://et235187.idv.st.141.hiavgirl.net/WMA/T7-3.wma","周杰倫-葉惠美-晴天");
mkList("http://et235187.idv.st.141.hiavgirl.net/WMA/T7-4.wma","周杰倫-葉惠美-三年二班");
mkList("http://et235187.idv.st.141.hiavgirl.net/WMA/T7-5.wma","周杰倫-葉惠美-東風破");
mkList("http://et235187.idv.st.141.hiavgirl.net/WMA/T7-6.wma","周杰倫-葉惠美-妳聽得到");
mkList("http://et235187.idv.st.141.hiavgirl.net/WMA/T7-7.wma","周杰倫-葉惠美-同一種調調");
mkList("http://et235187.idv.st.141.hiavgirl.net/WMA/T7-8.wma","周杰倫-葉惠美-她的睫毛");
mkList("http://et235187.idv.st.141.hiavgirl.net/WMA/T7-9.wma","周杰倫-葉惠美-愛情懸崖");
mkList("http://et235187.idv.st.141.hiavgirl.net/WMA/T7-10.wma","周杰倫-葉惠美-梯田");
mkList("http://et235187.idv.st.141.hiavgirl.net/WMA/T7-11.wma","周杰倫-葉惠美-雙刀");
mkList("http://et235187.idv.st.141.hiavgirl.net/WMA/G6-3.wma","電視原聲帶-薔薇之戀-花都開好了(S.H.E)");
mkList("http://et235187.idv.st.141.hiavgirl.net/WMA/T6-3.wma","姜育恒-劉家昌之歌1-我家在那裡-秋詩篇篇");
mkList("http://et235187.idv.st.141.hiavgirl.net/WMA/G6-2.wma","林曉培-SHINO 1st Best 首張精選-心動");
mkList("http://et235187.idv.st.141.hiavgirl.net/WMA/T6-2.wma","秦楊-心愛走天涯-心愛走天涯");
mkList("http://et235187.idv.st.141.hiavgirl.net/WMA/T6-1.wma","秦楊-心愛走天涯-海波浪之霹靂火之東邪西毒");
mkList("http://et235187.idv.st.141.hiavgirl.net/WMA/G6-1.wma","群星合輯-手牽手");
mkList("http://et235187.idv.st.141.hiavgirl.net/WMA/GW01.wma","蔡依琳-看我72變-說愛你");
mkList("http://et235187.idv.st.141.hiavgirl.net/WMA/GW02.wma","蔡依琳-看我72變-看我72變");
mkList("http://et235187.idv.st.141.hiavgirl.net/WMA/GW03.wma","蔡依琳-看我72變-假面的告白");
mkList("http://et235187.idv.st.141.hiavgirl.net/WMA/GW04.wma","蔡依琳-看我72變-奴隸船");
mkList("http://et235187.idv.st.141.hiavgirl.net/WMA/GW05.wma","蔡依琳-看我72變-布拉格廣場");
mkList("http://et235187.idv.st.141.hiavgirl.net/WMA/GW06.wma","蔡依琳-看我72變-做一天的你");
mkList("http://et235187.idv.st.141.hiavgirl.net/WMA/GW07.wma","蔡依琳-看我72變-Prove It");
mkList("http://et235187.idv.st.141.hiavgirl.net/WMA/GW08.wma","蔡依琳-看我72變-爆米花的味道");
mkList("http://et235187.idv.st.141.hiavgirl.net/WMA/GW09.wma","蔡依琳-看我72變-馬甲上的繩索");
mkList("http://et235187.idv.st.141.hiavgirl.net/WMA/GW10.wma","蔡依琳-看我72變-好東西");
mkList("http://et235187.idv.st.141.hiavgirl.net/WMA/g001.wma","'蔡依琳-騎士精神");
mkList("http://et235187.idv.st.141.hiavgirl.net/WMA/T09.wma","蘇永朋-雪來的時候");
mkList("http://et235187.idv.st.141.hiavgirl.net/WMA/T10.wma","李心潔-愛錯");
mkList("http://et235187.idv.st.141.hiavgirl.net/WMA/T01.wma","可米小子-Hey!Hah!");
mkList("http://et235187.idv.st.141.hiavgirl.net/WMA/T02.wma","可米小子-求愛復刻版");
mkList("http://et235187.idv.st.141.hiavgirl.net/WMA/T03.wma","F4-煙火的季節");
mkList("http://et235187.idv.st.141.hiavgirl.net/WMA/T04.wma","F4-絕不能失去你");
mkList("http://et235187.idv.st.141.hiavgirl.net/WMA/T05.wma","費玉清-天上人間");
mkList("http://et235187.idv.st.141.hiavgirl.net/WMA/T06.wma","費玉清-星心相印");
mkList("http://et235187.idv.st.141.hiavgirl.net/WMA/T07.wma","徐婕兒-Tic Tac Toe");
mkList("http://et235187.idv.st.141.hiavgirl.net/WMA/T08.wma","劉德華、梁朝偉-無間道");
mkList("http://et235187.idv.st.141.hiavgirl.net/WMA/001.wma","周杰倫八度空間-半獸人");
mkList("http://et235187.idv.st.141.hiavgirl.net/WMA/003.wma","周杰倫八度空間-半島鐵盒");
mkList("http://et235187.idv.st.141.hiavgirl.net/WMA/0103.wma","周杰倫八度空間-暗號");
mkList("http://et235187.idv.st.141.hiavgirl.net/WMA/00x4.wma","周杰倫八度空間-龍拳");
mkList("http://et235187.idv.st.141.hiavgirl.net/WMA/00x5.wma","周杰倫八度空間-火車叨位去");
mkList("http://et235187.idv.st.141.hiavgirl.net/WMA/00x6.wma","周杰倫八度空間-分裂");
mkList("http://et235187.idv.st.141.hiavgirl.net/WMA/00x7.wma","周杰倫八度空間-爺爺泡的茶");
mkList("http://et235187.idv.st.141.hiavgirl.net/WMA/00x8.wma","周杰倫八度空間-回到過去");
mkList("http://et235187.idv.st.141.hiavgirl.net/WMA/00x9.wma","周杰倫八度空間-米蘭的小鐵匠");
mkList("http://et235187.idv.st.141.hiavgirl.net/WMA/010.wma","周杰倫八度空間-最後的戰役");
mkList("http://et235187.idv.st.141.hiavgirl.net/WMA/a0001.wma","周杰倫范特西-愛在西元前");
mkList("http://et235187.idv.st.141.hiavgirl.net/WMA/a0002.wma","周杰倫范特西-爸我回來了");
mkList("http://et235187.idv.st.141.hiavgirl.net/WMA/a0003.wma","周杰倫范特西-簡單愛");
mkList("http://et235187.idv.st.141.hiavgirl.net/WMA/a0004.wma","周杰倫范特西-忍者");
mkList("http://et235187.idv.st.141.hiavgirl.net/WMA/a0005.wma","周杰倫范特西-開不了口");
mkList("http://et235187.idv.st.141.hiavgirl.net/WMA/a0006.wma","周杰倫范特西-上海一九四三");
mkList("http://et235187.idv.st.141.hiavgirl.net/WMA/a0007.wma","周杰倫范特西-對不起");
mkList("http://et235187.idv.st.141.hiavgirl.net/WMA/a0008.wma","周杰倫范特西-威廉古堡");
mkList("http://et235187.idv.st.141.hiavgirl.net/WMA/a0009.wma","周杰倫范特西-雙截棍");
mkList("http://et235187.idv.st.141.hiavgirl.net/WMA/a0010.wma","周杰倫范特西-安靜");
mkList("http://et235187.idv.st.141.hiavgirl.net/WMA/b0001.wma","周杰倫同名專輯-可愛女人");
mkList("http://et235187.idv.st.141.hiavgirl.net/WMA/b0002.wma","周杰倫同名專輯-完美主義");
mkList("http://et235187.idv.st.141.hiavgirl.net/WMA/b0003.wma","周杰倫同名專輯-星晴");
mkList("http://et235187.idv.st.141.hiavgirl.net/WMA/b0004.wma","周杰倫同名專輯-娘子");
mkList("http://et235187.idv.st.141.hiavgirl.net/WMA/b0005.wma","周杰倫同名專輯-鬥牛");
mkList("http://et235187.idv.st.141.hiavgirl.net/WMA/b0006.wma","周杰倫同名專輯-黑色幽默");
mkList("http://et235187.idv.st.141.hiavgirl.net/WMA/b0007.wma","周杰倫同名專輯-伊斯坦堡");
mkList("http://et235187.idv.st.141.hiavgirl.net/WMA/b0008.wma","周杰倫同名專輯-印第安老斑鳩");
mkList("http://et235187.idv.st.141.hiavgirl.net/WMA/b0009.wma","周杰倫同名專輯-龍捲風");
mkList("http://et235187.idv.st.141.hiavgirl.net/WMA/b0010.wma","周杰倫同名專輯-反方向的鐘");
mkList("http://et235187.idv.st.141.hiavgirl.net/WMA/b0011.wma","周杰倫Fantasy Plus-蝸牛");
mkList("http://et235187.idv.st.141.hiavgirl.net/WMA/b0012.wma","周杰倫Fantasy Plus-妳比從前快樂");
mkList("http://et235187.idv.st.141.hiavgirl.net/WMA/b0013.wma","周杰倫Fantasy Plus-世界末日");
mkList("http://et235187.idv.st.141.hiavgirl.net/WMA/004.wma","陳司翰-愛情主義");
mkList("http://et235187.idv.st.141.hiavgirl.net/WMA/005.wma","許紹洋-胡渣");
mkList("http://et235187.idv.st.141.hiavgirl.net/WMA/006.wma","5566-無所謂");
mkList("http://et235187.idv.st.141.hiavgirl.net/WMA/008.wma","永邦-你是我最深愛的人");
mkList("http://et235187.idv.st.141.hiavgirl.net/WMA/009.wma","5566-我難過");
mkList("http://et235187.idv.st.141.hiavgirl.net/WMA/0010.wma","吳奇隆-轉彎");
mkList("http://et235187.idv.st.141.hiavgirl.net/WMA/0011.wma","康康-或許您是對的");
mkList("http://et235187.idv.st.141.hiavgirl.net/WMA/0012.wma","鄭秀文-808");
mkList("http://et235187.idv.st.141.hiavgirl.net/WMA/0013.wma","江美琪-再一次也好");
mkList("http://et235187.idv.st.141.hiavgirl.net/WMA/0014.wma","江美琪-對您而言");
mkList("http://et235187.idv.st.141.hiavgirl.net/WMA/0015.wma","范逸臣-I belive");
mkList("http://et235187.idv.st.141.hiavgirl.net/WMA/0016.wma","范逸臣-鋼琴");
mkList("http://et235187.idv.st.141.hiavgirl.net/WMA/0017.wma","鄭秀文-值得");
mkList("http://et235187.idv.st.141.hiavgirl.net/WMA/0018.wma","鄭秀文-背叛");
mkList("http://et235187.idv.st.141.hiavgirl.net/WMA/0019.wma","蕭亞軒-吻");
mkList("http://et235187.idv.st.141.hiavgirl.net/WMA/0020.wma","許慧欣-孤單芭蕾");
mkList("http://et235187.idv.st.141.hiavgirl.net/WMA/0021.wma","許慧欣-愛情抗體");
mkList("http://et235187.idv.st.141.hiavgirl.net/WMA/0022.wma","鄭中基-想念你的愛");
mkList("http://et235187.idv.st.141.hiavgirl.net/WMA/0023.wma","鄭中基~陳慧琳-製造浪漫");
mkList("http://et235187.idv.st.141.hiavgirl.net/WMA/0024.wma","鄭中基~張學友-左右為難");
mkList("http://et235187.idv.st.141.hiavgirl.net/WMA/0025.wma","鄭中基-絕口不提愛妳");
mkList("http://et235187.idv.st.141.hiavgirl.net/WMA/0034.wma","任賢齊-心情車站");
mkList("http://et235187.idv.st.141.hiavgirl.net/WMA/0026.wma","任賢齊-傷心太平洋");
mkList("http://et235187.idv.st.141.hiavgirl.net/WMA/0027.wma","任賢齊-對面的女孩看過來");
mkList("http://et235187.idv.st.141.hiavgirl.net/WMA/0028.wma","任賢齊~莫文蔚-愛我愛我");
mkList("http://et235187.idv.st.141.hiavgirl.net/WMA/0029.wma","任賢齊~李心潔-風景");
mkList("http://et235187.idv.st.141.hiavgirl.net/WMA/0030.wma","任賢齊~徐懷鈺-水晶");
mkList("http://et235187.idv.st.141.hiavgirl.net/WMA/0031.wma","邰正宵-一千零一夜");
mkList("http://et235187.idv.st.141.hiavgirl.net/WMA/0032.wma","邰正宵-找一個字代替");
mkList("http://et235187.idv.st.141.hiavgirl.net/WMA/0033.wma","邰正宵-千紙鶴");
mkList("http://et235187.idv.st.141.hiavgirl.net/WMA/0035.wma","萬芳-新不了情");
mkList("http://et235187.idv.st.141.hiavgirl.net/WMA/0036.wma","陳淑樺-滾滾紅塵");
mkList("http://et235187.idv.st.141.hiavgirl.net/WMA/0037.wma","張國榮~陳淑樺-當真就好");
mkList("http://et235187.idv.st.141.hiavgirl.net/WMA/0038.wma","劉若英-成全");
mkList("http://et235187.idv.st.141.hiavgirl.net/WMA/0039.wma","周慧敏~吉田榮作-現在擁抱我");
mkList("http://et235187.idv.st.141.hiavgirl.net/WMA/0040.wma","周慧敏-保護");
mkList("http://et235187.idv.st.141.hiavgirl.net/WMA/0041.wma","周慧敏-處處留情");
mkList("http://et235187.idv.st.141.hiavgirl.net/WMA/0042.wma","周慧敏-深情不露");
mkList("http://et235187.idv.st.141.hiavgirl.net/WMA/0043.wma","庾澄慶-只有為您");
mkList("http://et235187.idv.st.141.hiavgirl.net/WMA/0044.wma","庾澄慶-都是您");
mkList("http://et235187.idv.st.141.hiavgirl.net/WMA/0045.wma","庾澄慶-酒館藍調");
mkList("http://et235187.idv.st.141.hiavgirl.net/WMA/0046.wma","庾澄慶-乘著愛");
mkList("http://et235187.idv.st.141.hiavgirl.net/WMA/0047.wma","庾澄慶-決定要愛你");
mkList("http://et235187.idv.st.141.hiavgirl.net/WMA/0048.wma","庾澄慶-想你，醒在0:03");
mkList("http://et235187.idv.st.141.hiavgirl.net/WMA/0049.wma","庾澄慶-愛情黑皮(HAPPY)書");
mkList("http://et235187.idv.st.141.hiavgirl.net/WMA/GA01.wma","孫燕姿-神奇");
mkList("http://et235187.idv.st.141.hiavgirl.net/WMA/GA02.wma","孫燕姿-我不難過");
mkList("http://et235187.idv.st.141.hiavgirl.net/WMA/GA03.wma","孫燕姿-永遠");
mkList("http://et235187.idv.st.141.hiavgirl.net/WMA/GA04.wma","孫燕姿-未完成");
mkList("http://et235187.idv.st.141.hiavgirl.net/WMA/GA05.wma","孫燕姿-接下來");
mkList("http://et235187.idv.st.141.hiavgirl.net/WMA/GA06.wma","孫燕姿-學會");
mkList("http://et235187.idv.st.141.hiavgirl.net/WMA/GA07.wma","孫燕姿-年輕無極限");
mkList("http://et235187.idv.st.141.hiavgirl.net/WMA/GA08.wma","孫燕姿-了解");
mkList("http://et235187.idv.st.141.hiavgirl.net/WMA/GA09.wma","孫燕姿-休止符");
mkList("http://et235187.idv.st.141.hiavgirl.net/WMA/GA010.wma","孫燕姿-沒有人的方向");
mkList("http://et235187.idv.st.141.hiavgirl.net/WMA/GA011.wma","孫燕姿-MY STORY YOUR SONG");
mkList("http://et235187.idv.st.141.hiavgirl.net/WMA/g0001.wma","孫燕姿-風箏-綠光");
mkList("http://et235187.idv.st.141.hiavgirl.net/WMA/g0002.wma","孫燕姿-風箏-風箏");
mkList("http://et235187.idv.st.141.hiavgirl.net/WMA/g0003.wma","孫燕姿-風箏-任性");
mkList("http://et235187.idv.st.141.hiavgirl.net/WMA/g0004.wma","孫燕姿-風箏-逃亡");
mkList("http://et235187.idv.st.141.hiavgirl.net/WMA/g0005.wma","孫燕姿-風箏-不是真的愛我");
mkList("http://et235187.idv.st.141.hiavgirl.net/WMA/g0006.wma","孫燕姿-風箏-真的");
mkList("http://et235187.idv.st.141.hiavgirl.net/WMA/g0007.wma","孫燕姿-風箏-練習");
mkList("http://et235187.idv.st.141.hiavgirl.net/WMA/g0008.wma","孫燕姿-風箏-愛情字典");
mkList("http://et235187.idv.st.141.hiavgirl.net/WMA/g0009.wma","孫燕姿-風箏-隨堂測驗");
mkList("http://et235187.idv.st.141.hiavgirl.net/WMA/g0010.wma","孫燕姿-風箏-我是我");
mkList("http://et235187.idv.st.141.hiavgirl.net/WMA/g0a01.wma","孫燕姿-自選集-Hey jude");
mkList("http://et235187.idv.st.141.hiavgirl.net/WMA/g0a02.wma","孫燕姿-自選集-Silent All These Years");
mkList("http://et235187.idv.st.141.hiavgirl.net/WMA/g0a03.wma","孫燕姿-自選集-橄欖樹");
mkList("http://et235187.idv.st.141.hiavgirl.net/WMA/g0a04.wma","孫燕姿-自選集-沒時間");
mkList("http://et235187.idv.st.141.hiavgirl.net/WMA/g0a05.wma","孫燕姿-自選集-Sometime");
mkList("http://et235187.idv.st.141.hiavgirl.net/WMA/g0a06.wma","孫燕姿-自選集-原來您都不要");
mkList("http://et235187.idv.st.141.hiavgirl.net/WMA/g0a07.wma","孫燕姿-自選集-That I Would Be Good");
mkList("http://et235187.idv.st.141.hiavgirl.net/WMA/g0a08.wma","孫燕姿-自選集-Venus");
mkList("http://et235187.idv.st.141.hiavgirl.net/WMA/g0a09.wma","孫燕姿-自選集-Someone");
mkList("http://et235187.idv.st.141.hiavgirl.net/WMA/g0a10.wma","孫燕姿-自選集-天空");
mkList("http://et235187.idv.st.141.hiavgirl.net/WMA/g0a11.wma","孫燕姿-自選集-就是這樣");
mkList("http://et235187.idv.st.141.hiavgirl.net/WMA/g0a12.wma","孫燕姿-自選集-Up2u");
mkList("http://et235187.idv.st.141.hiavgirl.net/WMA/g0011.wma","孫燕姿-Leave-作戰");
mkList("http://et235187.idv.st.141.hiavgirl.net/WMA/g0012.wma","孫燕姿-Leave-我不愛");
mkList("http://et235187.idv.st.141.hiavgirl.net/WMA/g0013.wma","孫燕姿-Leave-懂事");
mkList("http://et235187.idv.st.141.hiavgirl.net/WMA/g0014.wma","孫燕姿-Leave-直來直往");
mkList("http://et235187.idv.st.141.hiavgirl.net/WMA/g0015.wma","孫燕姿-Leave-一樣的夏天");
mkList("http://et235187.idv.st.141.hiavgirl.net/WMA/g0016.wma","孫燕姿-Leave-愛從零開始");
mkList("http://et235187.idv.st.141.hiavgirl.net/WMA/g0017.wma","孫燕姿-Leave-不同");
mkList("http://et235187.idv.st.141.hiavgirl.net/WMA/g0018.wma","孫燕姿-Leave-眼神");
mkList("http://et235187.idv.st.141.hiavgirl.net/WMA/g0019.wma","孫燕姿-Leave-我想");
mkList("http://et235187.idv.st.141.hiavgirl.net/WMA/g0020.wma","孫燕姿-Leave-Leave");
mkList("http://et235187.idv.st.141.hiavgirl.net/WMA/g0021.wma","孫燕姿-Leave-We Will Get There");
mkList("http://et235187.idv.st.141.hiavgirl.net/WMA/g0022.wma","孫燕姿-Leave-一起走過");
mkList("http://et235187.idv.st.141.hiavgirl.net/WMA/gg01.wma","孫燕姿-我要的幸福-On The Road");
mkList("http://et235187.idv.st.141.hiavgirl.net/WMA/gg02.wma","孫燕姿-我要的幸福-我要的幸福");
mkList("http://et235187.idv.st.141.hiavgirl.net/WMA/gg03.wma","孫燕姿-我要的幸福-壞天氣");
mkList("http://et235187.idv.st.141.hiavgirl.net/WMA/gg04.wma","孫燕姿-我要的幸福-零缺點");
mkList("http://et235187.idv.st.141.hiavgirl.net/WMA/gg05.wma","孫燕姿-我要的幸福-開始懂了");
mkList("http://et235187.idv.st.141.hiavgirl.net/WMA/gg06.wma","孫燕姿-我要的幸福-中間地帶");
mkList("http://et235187.idv.st.141.hiavgirl.net/WMA/gg07.wma","孫燕姿-我要的幸福-相信");
mkList("http://et235187.idv.st.141.hiavgirl.net/WMA/gg08.wma","孫燕姿-我要的幸福-累贅");
mkList("http://et235187.idv.st.141.hiavgirl.net/WMA/gg09.wma","孫燕姿-我要的幸福-難得一見");
mkList("http://et235187.idv.st.141.hiavgirl.net/WMA/gg10.wma","孫燕姿-我要的幸福-害怕");
mkList("http://et235187.idv.st.141.hiavgirl.net/WMA/gg11.wma","孫燕姿-我要的幸福-星期一天氣晴我離開你");
mkList("http://et235187.idv.st.141.hiavgirl.net/WMA/gg12.wma","孫燕姿-我要的幸福-On the Road2");
mkList("http://et235187.idv.st.141.hiavgirl.net/WMA/gg001.wma","孫燕姿-同名專輯-超快感");
mkList("http://et235187.idv.st.141.hiavgirl.net/WMA/gg002.wma","孫燕姿-同名專輯-愛情證書");
mkList("http://et235187.idv.st.141.hiavgirl.net/WMA/gg003.wma","孫燕姿-同名專輯-天黑黑");
mkList("http://et235187.idv.st.141.hiavgirl.net/WMA/gg004.wma","孫燕姿-同名專輯-E.Lover");
mkList("http://et235187.idv.st.141.hiavgirl.net/WMA/gg005.wma","孫燕姿-同名專輯-濃眉毛");
mkList("http://et235187.idv.st.141.hiavgirl.net/WMA/gg006.wma","孫燕姿-同名專輯-和平");
mkList("http://et235187.idv.st.141.hiavgirl.net/WMA/gg007.wma","孫燕姿-同名專輯-自然");
mkList("http://et235187.idv.st.141.hiavgirl.net/WMA/gg008.wma","孫燕姿-同名專輯-終於");
mkList("http://et235187.idv.st.141.hiavgirl.net/WMA/gg009.wma","孫燕姿-同名專輯-很好");
mkList("http://et235187.idv.st.141.hiavgirl.net/WMA/gg010.wma","孫燕姿-同名專輯-Leave Me Alone");
mkList("http://et235187.idv.st.141.hiavgirl.net/WMA/ggg01.wma","孫燕姿-乘著風-乘著風");
mkList("http://et235187.idv.st.141.hiavgirl.net/WMA/ggg02.wma","孫燕姿-乘著風-You love me");
mkList("http://et235187.idv.st.141.hiavgirl.net/WMA/ggg03.wma","孫燕姿-乘著風-牽掛");
mkList("http://et235187.idv.st.141.hiavgirl.net/WMA/ggg04.wma","孫燕姿-乘著風-天長地久");
mkList("http://et235187.idv.st.141.hiavgirl.net/WMA/TT01.wma","伍佰-夢的力量-翅膀");
mkList("http://et235187.idv.st.141.hiavgirl.net/WMA/TT02.wma","伍佰-夢的力量-蛇");
mkList("http://et235187.idv.st.141.hiavgirl.net/WMA/TT03.wma","伍佰-夢的力量-路");
mkList("http://et235187.idv.st.141.hiavgirl.net/WMA/TT04.wma","伍佰-夢的力量-流星");
mkList("http://et235187.idv.st.141.hiavgirl.net/WMA/TT05.wma","伍佰-夢的力量-妳愛我");
mkList("http://et235187.idv.st.141.hiavgirl.net/WMA/TT06.wma","伍佰-夢的力量-一點點");
mkList("http://et235187.idv.st.141.hiavgirl.net/WMA/TT07.wma","伍佰-夢的力量-九重天");
mkList("http://et235187.idv.st.141.hiavgirl.net/WMA/TT08.wma","伍佰-夢的力量-斷了");
mkList("http://et235187.idv.st.141.hiavgirl.net/WMA/TT09.wma","伍佰-夢的力量-沙漠裡的黑洞");
mkList("http://et235187.idv.st.141.hiavgirl.net/WMA/TT010.wma","伍佰-夢的力量-暴雨");
mkList("http://et235187.idv.st.141.hiavgirl.net/WMA/TT011.wma","伍佰-夢的力量-小囝船");
mkList("http://et235187.idv.st.141.hiavgirl.net/WMA/TT012.wma","伍佰-夢的力量-夢的河流");
mkList("http://et235187.idv.st.141.hiavgirl.net/WMA/TTA1.wma","伍佰-浪人情歌-背叛");
mkList("http://et235187.idv.st.141.hiavgirl.net/WMA/TTA2.wma","伍佰-浪人情歌-牽掛");
mkList("http://et235187.idv.st.141.hiavgirl.net/WMA/TTA3.wma","伍佰-浪人情歌-199玫瑰");
mkList("http://et235187.idv.st.141.hiavgirl.net/WMA/TTA4.wma","伍佰-浪人情歌-一親紅顏");
mkList("http://et235187.idv.st.141.hiavgirl.net/WMA/TTA5.wma","伍佰-浪人情歌-新愛的妳");
mkList("http://et235187.idv.st.141.hiavgirl.net/WMA/TTA6.wma","伍佰-浪人情歌-拋棄");
mkList("http://et235187.idv.st.141.hiavgirl.net/WMA/TTA7.wma","伍佰-浪人情歌-繼續墮落");
mkList("http://et235187.idv.st.141.hiavgirl.net/WMA/TTA8.wma","伍佰-浪人情歌-熱情交錯");
mkList("http://et235187.idv.st.141.hiavgirl.net/WMA/TTA9.wma","伍佰-浪人情歌-鋼鐵男子");
mkList("http://et235187.idv.st.141.hiavgirl.net/WMA/TTA10.wma","伍佰-浪人情歌-浪人情歌");
mkList("http://et235187.idv.st.141.hiavgirl.net/WMA/TTA11.wma","伍佰-浪人情歌-來不及");
mkList("http://et235187.idv.st.141.hiavgirl.net/WMA/TTC1.wma","伍佰-樹技孤鳥-少女的心");
mkList("http://et235187.idv.st.141.hiavgirl.net/WMA/TTC2.wma","伍佰-樹技孤鳥-斷腸詩");
mkList("http://et235187.idv.st.141.hiavgirl.net/WMA/TTC3.wma","伍佰-樹技孤鳥-漂浪");
mkList("http://et235187.idv.st.141.hiavgirl.net/WMA/TTC4.wma","伍佰-樹技孤鳥-返去故鄉");
mkList("http://et235187.idv.st.141.hiavgirl.net/WMA/TTC5.wma","伍佰-樹技孤鳥-萬丈深坑");
mkList("http://et235187.idv.st.141.hiavgirl.net/WMA/TTC6.wma","伍佰-樹技孤鳥-心愛的再會啦");
mkList("http://et235187.idv.st.141.hiavgirl.net/WMA/TTC7.wma","伍佰-樹技孤鳥-徘徊夜都市");
mkList("http://et235187.idv.st.141.hiavgirl.net/WMA/TTC8.wma","伍佰-樹技孤鳥-煞到你");
mkList("http://et235187.idv.st.141.hiavgirl.net/WMA/TTC9.wma","伍佰-樹技孤鳥-空襲警報");                      
mkList("http://et235187.idv.st.141.hiavgirl.net/WMA/TTC10.wma","伍佰-樹技孤鳥-樹枝孤鳥");
mkList("http://et235187.idv.st.141.hiavgirl.net/WMA/TTC11.wma","伍佰-樹技孤鳥-飛在空中的小雨");
mkList("http://et235187.idv.st.141.hiavgirl.net/WMA/TTC12.wma","伍佰-樹技孤鳥-怨嗟嘆");
mkList("http://et235187.idv.st.141.hiavgirl.net/WMA/TTB1.wma","伍佰-LOVE-無聲的所在");
mkList("http://et235187.idv.st.141.hiavgirl.net/WMA/TTB2.wma","伍佰-LOVE-秋風夜雨");
mkList("http://et235187.idv.st.141.hiavgirl.net/WMA/TTB3.wma","伍佰-LOVE-墓仔埔也敢去");
mkList("http://et235187.idv.st.141.hiavgirl.net/WMA/TTB4.wma","伍佰-LOVE-KISS ME（星星知我心)");
mkList("http://et235187.idv.st.141.hiavgirl.net/WMA/TTB5.wma","伍佰-LOVE-愛情限時批");
mkList("http://et235187.idv.st.141.hiavgirl.net/WMA/TTB6.wma","伍佰-LOVE-點煙");
mkList("http://et235187.idv.st.141.hiavgirl.net/WMA/TTB7.wma","伍佰-LOVE-飛");
mkList("http://et235187.idv.st.141.hiavgirl.net/WMA/TTB8.wma","伍佰-LOVE-小姐免驚");
mkList("http://et235187.idv.st.141.hiavgirl.net/WMA/TTB9.wma","伍佰-LOVE-恨世生");
mkList("http://et235187.idv.st.141.hiavgirl.net/WMA/TTB10.wma","伍佰-LOVE-枉費青春");
mkList("http://et235187.idv.st.141.hiavgirl.net/WMA/TB11.wma","伍佰-LOVE-愛你一萬年");
mkList("http://et235187.idv.st.141.hiavgirl.net/WMA/TA01.wma","伍佰-白鴿-上癮了");
mkList("http://et235187.idv.st.141.hiavgirl.net/WMA/TA02.wma","伍佰-白鴿-真世界");
mkList("http://et235187.idv.st.141.hiavgirl.net/WMA/TA03.wma","伍佰-白鴿-不曾在乎我");
mkList("http://et235187.idv.st.141.hiavgirl.net/WMA/TA04.wma","伍佰-白鴿-白鴿");
mkList("http://et235187.idv.st.141.hiavgirl.net/WMA/TA05.wma","伍佰-白鴿-上帝救救我");
mkList("http://et235187.idv.st.141.hiavgirl.net/WMA/TA06.wma","伍佰-白鴿-看我");
mkList("http://et235187.idv.st.141.hiavgirl.net/WMA/TA07.wma","伍佰-白鴿-與妳到永久");
mkList("http://et235187.idv.st.141.hiavgirl.net/WMA/TA08.wma","伍佰-白鴿-一生最愛的人");
mkList("http://et235187.idv.st.141.hiavgirl.net/WMA/TA09.wma","伍佰-白鴿-終於");
mkList("http://et235187.idv.st.141.hiavgirl.net/WMA/TA10.wma","伍佰-白鴿-懶人日記");
mkList("http://et235187.idv.st.141.hiavgirl.net/WMA/TA11.wma","伍佰-白鴿-半夜11點鐘");
mkList("http://et235187.idv.st.141.hiavgirl.net/WMA/TA12.wma","伍佰-白鴿-最後是溫柔");




// 以上所有開頭為 http:// 的串流音樂檔案連結，都是由韓國的一些網路音樂分享社區免費提供的。
// 當您播放這些曲目的時候，並不一定保證上列的串流音樂檔案連結，全部都能夠正常連線，亦不排除檔案位置已變更。

// ════════════════════════════════════════════════════
//          您可以在下面空白的地方 ( 設定內容必須寫在 //--> 標記之前 )，開始設定您的正式播放清單。
// ════════════════════════════════════════════════════
//-->