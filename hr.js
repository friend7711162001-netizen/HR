/* 
  飯店管理系統資料結構
*/
const resourceData = [
    {
        target: "常用",
        icon: "💡",
        sheets: [
            { name: "集團名冊", url: "https://docs.google.com/spreadsheets/d/109xIMXV25Ynq4Pg1YZkVdvSDstKDHPR61uy0oCQ2D9s/edit?gid=0#gid=0" },
            { name: "補助名單", url: "https://docs.google.com/spreadsheets/d/1I6HVFHvZbr3bc2tChaYEyU_uh_47JiWGb1r0tzK3GL4/" },
            { name: "補助薪資條", url: "https://docs.google.com/spreadsheets/d/1iWogLIkbMYLSHxOYAYQTmYDVpzJq5ztuaIG_THmzpHo/" }
        ]
    },
    {
        target: "民宿",
        icon: "🌈",
        sheets: [
            { name: "零用金", url: "https://docs.google.com/spreadsheets/d/1Nx7cIEYTUj6EpjhGUXrSxzk8ZxTERBxDBWT1Sf45Zqk/" },
            { name: "營業額", url: "https://docs.google.com/spreadsheets/d/1NwcheK33suylX73qWoq4MTYNQkOQ68i71pYGKb1ejFA/" },
            { name: "訂金", url: "https://docs.google.com/spreadsheets/d/1SSd53tqlyhIJSKRR-Zosp6YAJnPMMBkpRPC47d5CaO0/" },
            { name: "洗衣廠", url: "https://docs.google.com/spreadsheets/d/1nlqKSYgIDcL3EMzmRDCRtdvoIsNxo48NJPiC17rU02s/" },
            { name: "清房表", url: "https://docs.google.com/spreadsheets/d/1Oqcy5iB5PuJ4VO8zOxY1cJEMJPzJpt7D73ene3dAs7A/" },
            { name: "行程", url: "https://docs.google.com/spreadsheets/d/1Pi2upAXh-Oqi9PPX8xt2VEumclm32SKNxCKG19CoF08/edit?gid=755432321#gid=755432321" }
        ]
    },
    {
        target: "作帳",
        icon: "🍭",
        sheets: [
            { name: "年度", url: "https://docs.google.com/spreadsheets/d/1kv33LhLlPSbDhpZUjEOWrExeZ6ZyHHBXu8VJRKWul-c/" },
            { name: "作帳", url: "https://docs.google.com/spreadsheets/d/1tfWt3lY1IolS5rMjhGtdIWbPAi3GX8vnxIsCACeoYeo/" }
        ]
    },
    {
        target: "班表",
        icon: "📅",
        sheets: [
            { name: "雅霖班表", url: "https://docs.google.com/spreadsheets/d/130QCq1GylF5IsQzBpGG6h6Wm43ryus41EWagDuSSveA/" },
            { name: "勁健班表", url: "https://docs.google.com/spreadsheets/d/1ZRdkexsCKuvjZ5BkRcavlqWbBOiRFK4ixdl3ZwdePGE/" },
            { name: "總工司班表", url: "https://docs.google.com/spreadsheets/d/1P090gNf9YUxiuZeJF-pPfGGzybwQ7w2RKtEJHLYtmMM/" },
            { name: "宴會廳班表", url: "https://docs.google.com/spreadsheets/d/1fUm9Wa-M53TZFHfWZ9VMEfqWQXA4Fjz0Oo_YX5AoAmA/" },
            { name: "房務班表", url: "https://docs.google.com/spreadsheets/d/1ryZQlsf1sTbGeghSYQohSItksV-rGCjR9zpXy_BntKg/" },
            { name: "總班表", url: "https://docs.google.com/spreadsheets/d/1lJdKwwwWvGFo9Kcgo3PD7Q57CY2tMWJFSaxLacQu-Fo/" }
        ]
    },
    {
        target: "出勤表",
        icon: "📇",
        sheets: [
            { name: "雅霖出勤", url: "https://docs.google.com/spreadsheets/d/101NOYFz2-PAP_XVTye733hqWEUUBMd38ouDnTKd9CcE/" },
            { name: "豐家出勤", url: "https://docs.google.com/spreadsheets/d/1aJ346ww7LXxeZThhaVC2pvb9yKAXZOe0p-5RRupG6HA/" },
            { name: "豐國出勤", url: "https://docs.google.com/spreadsheets/d/1oATmVvlGAIwZzz9YRmfKOVqccvQNBeTb24Z7qA5Nlfw/" },
            { name: "豐谷出勤", url: "https://docs.google.com/spreadsheets/d/1DcMtHAt0SuweAePcfeh-YTfnGI6W62t4AywgP5XgKLI/" },
            { name: "勁健出勤", url: "https://docs.google.com/spreadsheets/d/1CAmMpWC8eC0JPq8wpDgfzLc82-ep9rhomx84b0iUzsM/" }
        ]
    },
    {
        target: "薪資表",
        icon: "💰",
        sheets: [
            { name: "雅霖薪資", url: "https://docs.google.com/spreadsheets/d/1RDWN3J14yyYGjttFlIRLmwwdlQtK_Y4dEX3PCwAKtCY/" },
            { name: "豐家薪資", url: "https://docs.google.com/spreadsheets/d/15YcDLS_c7fzFNgQRNoOqZt_lIJIL56qu-SIQIpSU9BM/" },
            { name: "豐國薪資", url: "https://docs.google.com/spreadsheets/d/167_jTCFcIycfaDneSVmLAWj0OBPFggKOTlO1VkqvffI/" },
            { name: "豐谷薪資", url: "https://docs.google.com/spreadsheets/d/1IvCdWV168EpfBiWsVf7_omJbyoVW2_J4XxJwe55OGYM/" },
            { name: "勁健薪資", url: "https://docs.google.com/spreadsheets/d/1L1cDHT-tcgwtbt9rk-ih08T-cag8NWNitJbIjGZK9KI/" }
        ]
    },
    {
        target: "館主出勤表",
        icon: "🙋‍♀️",
        sheets: [
            { name: "雅霖館主", url: "https://docs.google.com/spreadsheets/d/1Fkc431V2FTikWxmPeoaSbWNbgjVZ7gUg4-IXl9UIZAY/" },
            { name: "豐家館主", url: "https://docs.google.com/spreadsheets/d/1u5xaW_570GRj-A_XUtFh6vWSywMvP8VIG_VMukDIRts/" },
            { name: "豐國館主", url: "https://docs.google.com/spreadsheets/d/1PuCHvWis1SGx4YR60j18zEmgcwqDwMAF79SXvmG3URc/" },
            { name: "豐谷館主", url: "https://docs.google.com/spreadsheets/d/1gMfZb6fQbWNqL0XzsnqlcT7ONvexQJ07joIX0QtnwoU/" },
            { name: "宴會廳館主", url: "https://docs.google.com/spreadsheets/d/148DhN5wN2amb-oiAqrQvhahRazQkp0owhVuMqFAd6vI/" }
        ]
    },
    {
        target: "勞保",
        icon: "👷‍♂️",
        sheets: [
            { name: "雅霖勞", url: "https://docs.google.com/spreadsheets/d/1bv8t7KiAe_sLQmpGyHFcIfU_nH5SOJOo-bDQv2Mi8Uw/" },
            { name: "豐家勞", url: "https://docs.google.com/spreadsheets/d/17rc7GSgInKaRYbKIit-BlQbrxVvQXoeiHjh1kQOCPDs/" },
            { name: "豐國勞", url: "https://docs.google.com/spreadsheets/d/1SYm0PLg4bdaceY8CKFtVr_oV-3EqWM7XYlEE7nsibAc/" },
            { name: "豐谷勞", url: "https://docs.google.com/spreadsheets/d/1PYPyOfs-Jvl2kSJQSrov-fXRtDHsQu-oNpfhfGOnWX0/" },
            { name: "勁健勞", url: "https://docs.google.com/spreadsheets/d/1wxE7YJuzqJ7Vxnyuqr5ZphEhk9u5q3FkGx8Zl8afqhE/" },
            { name: "豐德勞", url: "https://docs.google.com/spreadsheets/d/17uRse_v99o3EU5ZBDYmDqH2rfHaGHH5YfiQBTc0OIEA/" }
        ]
    },
    {
        target: "健保",
        icon: "🩺",
        sheets: [
            { name: "雅霖健", url: "https://docs.google.com/spreadsheets/d/1YzNMWVjxXLR2zXodRcsR47-EdYcof-glj8d3Cp536Ps/" },
            { name: "豐家健", url: "https://docs.google.com/spreadsheets/d/163idwOgS2xrzvqdjIJRnKGLsYg4MZodUyel6EdrUwto/" },
            { name: "豐國健", url: "https://docs.google.com/spreadsheets/d/19cI2OA16HFg5ehVmYuDwgDr49SwHaXdCZHvmcbM6LuY/" },
            { name: "豐谷健", url: "https://docs.google.com/spreadsheets/d/1CvBjvgTxWzdMdQpaJa0ppnX0dh1kkMzZo11tzvIyASI/" },
            { name: "勁健健", url: "https://docs.google.com/spreadsheets/d/1Gc9QOdU53uCHn5SfGsaNXWHzmeVNN95KbAOoOalaqzU/" },
            { name: "豐德健", url: "https://docs.google.com/spreadsheets/d/1pXDl2hx79iQprXnLfQrE_wj2Fr79NDMuutc5buE_TmM/" }
        ]
    }
];

// 當網頁載入完成後，執行以下程式
document.addEventListener("DOMContentLoaded", () => {

    // ======== 密碼與 GPS 登入系統 ========
    const loginScreen = document.getElementById("login-screen");
    const appContainer = document.getElementById("app-container");
    const logoutBtn = document.getElementById("logout-btn");
    const loginBtn = document.getElementById("login-btn");
    const usernameInput = document.getElementById("username");
    const passwordInput = document.getElementById("password");
    const loginError = document.getElementById("login-error");

    // 網路 IP 鎖定清單
    const ALLOWED_IPS = [
        "1.175.177.14",    // 新增的第二個 IP
        "114.47.162.40"
    ];

    // 檢查是否已記住登入狀態
    if (localStorage.getItem("hrms_logged_in") === "true") {
        loginScreen.style.display = "none";
        appContainer.style.display = "flex";
    }

    // 驗證帳號密碼與 IP 的非同步函式
    const checkLogin = async () => {
        // 1. 先驗證帳號密碼
        if (usernameInput.value === "yu" && passwordInput.value === "496527") {

            // 2. 帳密正確，準備檢查網路 IP
            loginBtn.innerText = "🌐 網路環境確認中...";
            loginBtn.style.opacity = "0.7";
            loginBtn.style.cursor = "not-allowed";
            loginBtn.disabled = true;
            loginError.style.display = "none";

            try {
                // 向外部服務請求目前的公開 IP
                const response = await fetch('https://api.ipify.org?format=json');
                if (!response.ok) throw new Error("網路請求失敗");

                const data = await response.json();
                const currentIP = data.ip;

                // 確認目前的 IP 是否在允許清單中
                if (ALLOWED_IPS.includes(currentIP)) {
                    // IP 符合，登入成功！
                    localStorage.setItem("hrms_logged_in", "true"); // 記住登入狀態
                    loginScreen.style.display = "none";
                    appContainer.style.display = "flex";
                    loginError.style.display = "none";

                    // 恢復按鈕預設狀態以便下次登出後使用
                    loginBtn.innerText = "登入";
                    loginBtn.style.opacity = "1";
                    loginBtn.style.cursor = "pointer";
                    loginBtn.disabled = false;
                } else {
                    // IP 不符合
                    loginError.innerHTML = `登入失敗：請連接公司專屬網路！<br><span style="font-size: 0.85rem; color: #888;">(您目前的網路 IP: ${currentIP})</span>`;
                    loginError.style.display = "block";

                    loginBtn.innerText = "重新登入";
                    loginBtn.style.opacity = "1";
                    loginBtn.style.cursor = "pointer";
                    loginBtn.disabled = false;
                }
            } catch (error) {
                // 如果使用者沒連上網，或者 api 壞掉
                loginError.innerText = "無法取得您的網路 IP 資訊，請確認網路連線是否正常！";
                loginError.style.display = "block";

                loginBtn.innerText = "重新登入";
                loginBtn.style.opacity = "1";
                loginBtn.style.cursor = "pointer";
                loginBtn.disabled = false;
            }
        } else {
            loginError.innerText = "帳號或密碼錯誤！";
            loginError.style.display = "block";
        }
    };

    // 點擊「登入」按鈕時觸發
    if (loginBtn) {
        loginBtn.addEventListener("click", checkLogin);
    }

    // 在密碼欄位按下 Enter 鍵時也觸發登入
    if (passwordInput) {
        passwordInput.addEventListener("keydown", (e) => {
            if (e.key === "Enter") checkLogin();
        });
    }

    // 登出按鈕事件
    if (logoutBtn) {
        logoutBtn.addEventListener("click", () => {
            localStorage.removeItem("hrms_logged_in");
            appContainer.style.display = "none";
            loginScreen.style.display = "flex";

            // 清空輸入框
            if (usernameInput) usernameInput.value = "";
            if (passwordInput) passwordInput.value = "";
            if (loginError) loginError.style.display = "none";

            // 重置分頁與畫面狀態
            openedTabs = [];
            currentActiveTabId = null;
            document.getElementById("tabs-container").innerHTML = "";
            document.querySelectorAll(".sheet-link").forEach(link => link.classList.remove("active"));

            // 恢復只顯示歡迎畫面
            const iframeContainerEl = document.getElementById("iframe-container");
            iframeContainerEl.innerHTML = `
                <div class="welcome-screen" id="welcome-screen">
                    <h3>👋 歡迎使用！</h3>
                    <p>請從左側選單點開資料夾，選擇你想查看的表單。</p>
                    <p>如有需要新增或修改，請聯繫人資部。</p>
                </div>
            `;
        });
    }
    // ==============================

    const folderTree = document.getElementById("folder-tree");
    const iframeContainer = document.getElementById("iframe-container");
    const tabsContainer = document.getElementById("tabs-container");
    const welcomeScreen = document.getElementById("welcome-screen");
    const closeAllBtn = document.getElementById("close-all-btn"); // 一鍵關閉按鈕
    const refreshAllBtn = document.getElementById("refresh-all-btn"); // 全部重整按鈕

    // ======== 智慧型自動重新整理 (方案 3) ========
    let lastGlobalUpdateTime = Date.now();
    const SMART_REFRESH_THRESHOLD = 5 * 60 * 1000; // 門檻設定為 5 分鐘

    function trySmartRefresh() {
        if (openedTabs.length === 0) return; // 沒有分頁時不處理

        const now = Date.now();
        if (now - lastGlobalUpdateTime > SMART_REFRESH_THRESHOLD) {
            console.log("偵測到閒置超過 5 分鐘，正在執行智慧重整...");
            openedTabs.forEach(tab => {
                tab.iframeEl.src = tab.iframeEl.src;
            });
            lastGlobalUpdateTime = now; // 更新最後更新時間

            // 顯示一個提示讓使用者知道正在自動更新
            if (refreshAllBtn) {
                const originalText = refreshAllBtn.innerText;
                refreshAllBtn.innerText = "✨ 自動重整中...";
                setTimeout(() => { 
                    if (refreshAllBtn.innerText === "✨ 自動重整中...") {
                        refreshAllBtn.innerText = originalText; 
                    }
                }, 2000);
            }
        }
    }

    // 監聽網頁切換回來 (回到焦點)
    document.addEventListener("visibilitychange", () => {
        if (document.visibilityState === 'visible') {
            trySmartRefresh();
        }
    });

    // 一鍵關閉事件綁定
    if (closeAllBtn) {
        closeAllBtn.addEventListener("click", () => {
            // 只關閉未釘選的分頁
            [...openedTabs].filter(tab => !tab.isPinned).forEach(tab => closeTab(tab.id));
        });
    }

    // 全部重整事件綁定
    if (refreshAllBtn) {
        refreshAllBtn.addEventListener("click", () => {
            openedTabs.forEach(tab => {
                // 透過重新設定 src 來強制重新整理 iframe
                tab.iframeEl.src = tab.iframeEl.src;
            });
            lastGlobalUpdateTime = Date.now(); // 手動重整後也更新時間戳記，重新起算 5 分鐘

            // 點擊後的小提示
            const originalText = refreshAllBtn.innerText;
            refreshAllBtn.innerText = "⏳ 重整中...";
            setTimeout(() => { refreshAllBtn.innerText = originalText; }, 1000);
        });
    }

    // ======== 多分頁狀態與管理函式 ========
    let openedTabs = [];
    let currentActiveTabId = null;

    // ======== 初始化拖拽排序功能 (SortableJS) ========
    if (typeof Sortable !== 'undefined' && tabsContainer) {
        new Sortable(tabsContainer, {
            animation: 150,
            ghostClass: 'tab-ghost', // 拖拽時產生的影子樣式
            onEnd: function (evt) {
                // 當拖拽結束後，同步更新 openedTabs 陣列的順序
                // 確保後續「自動關閉最舊標籤」的順序正確
                if (evt.oldIndex !== evt.newIndex) {
                    const movedTab = openedTabs.splice(evt.oldIndex, 1)[0];
                    openedTabs.splice(evt.newIndex, 0, movedTab);
                }
            }
        });
    }

    function activateTab(tabId) {
        currentActiveTabId = tabId;
        openedTabs.forEach(tab => {
            if (tab.id === tabId) {
                tab.tabEl.classList.add("active");
                tab.iframeEl.style.display = "block";
            } else {
                tab.tabEl.classList.remove("active");
                tab.iframeEl.style.display = "none";
            }
        });
    }

    function closeTab(tabId) {
        const tabIndex = openedTabs.findIndex(t => t.id === tabId);
        if (tabIndex === -1) return;

        const tabObj = openedTabs[tabIndex];
        // 移除 DOM
        tabObj.tabEl.remove();
        tabObj.iframeEl.remove();

        // 從陣列移除
        openedTabs.splice(tabIndex, 1);

        if (openedTabs.length === 0) {
            currentActiveTabId = null;
            tabsContainer.style.display = "none";
            if (closeAllBtn) closeAllBtn.style.display = "none";
            if (refreshAllBtn) refreshAllBtn.style.display = "none";
            welcomeScreen.style.display = "flex"; // 恢復歡迎畫面
        } else if (currentActiveTabId === tabId) {
            // 若關閉的是目前正在顯示的分頁，自動切換到最後一個分頁
            activateTab(openedTabs[openedTabs.length - 1].id);
        }
    }

    const MAX_TABS = 10; // 設定最多允許的分頁數量

    function openTab(name, url) {
        tabsContainer.style.display = "flex"; // 確保分頁列有顯示
        if (closeAllBtn) closeAllBtn.style.display = "block"; // 顯示關閉全部按鈕
        if (refreshAllBtn) refreshAllBtn.style.display = "block"; // 顯示全部重整按鈕
        welcomeScreen.style.display = "none"; // 隱藏歡迎畫面

        // 檢查是否已經開過 (透過 URL 判斷)
        const existingTab = openedTabs.find(t => t.url === url);
        if (existingTab) {
            activateTab(existingTab.id); // 已經開過就直接切換過去
            return;
        }

        // 檢查是否達到分頁上限，若達到則自動關閉最前面 (最舊) 的非釘選分頁
        if (openedTabs.length >= MAX_TABS) {
            const firstUnpinned = openedTabs.find(t => !t.isPinned);
            if (firstUnpinned) {
                closeTab(firstUnpinned.id);
            }
            // 若全部都釘選，則依需求不主動關閉，維持釘選分頁的續存。
        }

        // 沒開過，建立全新的分頁 (加入隨機字串避免瞬間開啟多個分頁時 ID 衝突)
        const tabId = "tab_" + Date.now() + "_" + Math.random().toString(36).substr(2, 5);

        // 1. 建立標籤 UI
        const tabEl = document.createElement("div");
        tabEl.className = "tab";

        const titleEl = document.createElement("span");
        titleEl.className = "tab-title";
        titleEl.innerText = name;
        titleEl.title = name;

        const pinBtn = document.createElement("span");
        pinBtn.className = "pin-btn";
        pinBtn.innerHTML = "📍";
        pinBtn.title = "釘選分頁 (不會被『關閉全部』關閉)";

        const closeBtn = document.createElement("span");
        closeBtn.className = "close-btn";
        closeBtn.innerHTML = "✖";
        closeBtn.title = "關閉分頁";

        tabEl.appendChild(pinBtn);
        tabEl.appendChild(titleEl);
        tabEl.appendChild(closeBtn);

        // 2. 建立 iframe 渲染畫面
        const iframeEl = document.createElement("iframe");
        iframeEl.className = "sheet-frame";
        iframeEl.src = url;
        iframeEl.frameBorder = "0";
        iframeEl.allowFullscreen = true;
        iframeEl.title = name;

        // 放入畫面中
        tabsContainer.appendChild(tabEl);
        iframeContainer.appendChild(iframeEl);

        // 紀錄到狀態陣列
        const tabObj = {
            id: tabId,
            url: url,
            tabEl: tabEl,
            iframeEl: iframeEl,
            isPinned: false
        };
        openedTabs.push(tabObj);

        // 綁定事件
        tabEl.addEventListener("click", () => activateTab(tabId));

        pinBtn.addEventListener("click", (e) => {
            e.stopPropagation();
            tabObj.isPinned = !tabObj.isPinned;
            tabEl.classList.toggle("pinned", tabObj.isPinned);
            // 點擊後切換圖示狀態
            pinBtn.innerHTML = tabObj.isPinned ? "📌" : "📍";
        });

        closeBtn.addEventListener("click", (e) => {
            e.stopPropagation(); // 阻止點擊事件往上傳遞給 tabEl
            closeTab(tabId);
        });

        // 剛開好就預設讓他成為顯示中
        activateTab(tabId);
    }
    // ======================================

    // ======== 側邊欄自動彈出與鎖定功能 ========
    const showSidebarBtn = document.getElementById("show-sidebar");
    const sidebar = document.getElementById("sidebar");
    const pinBtn = document.getElementById("pin-sidebar");
    const hoverTrigger = document.getElementById("hover-trigger");

    let isPinned = false; // 紀錄是否鎖定側欄

    // 【自動機制】預設進入網頁時將側欄先收起來
    sidebar.classList.add("collapsed");
    showSidebarBtn.style.display = "flex";
    if (hoverTrigger) hoverTrigger.style.display = "block"; // 顯示透明感應區

    // 點擊右上角圖釘/解鎖按鈕
    if (pinBtn) {
        pinBtn.addEventListener("click", () => {
            isPinned = !isPinned; // 切換鎖定狀態
            if (isPinned) {
                pinBtn.innerHTML = "📌";
                pinBtn.title = "解除鎖定 (自動隱藏)";
            } else {
                pinBtn.innerHTML = "🔓";
                pinBtn.title = "釘選選單 (保持展開)";
            }
        });
    }

    // 將展開側欄的邏輯寫成共用函式
    const expandSidebar = () => {
        sidebar.classList.remove("collapsed");
        showSidebarBtn.style.display = "none";
        if (hoverTrigger) hoverTrigger.style.display = "none"; // 展開後將感應區隱藏，避免干擾
    };

    // 1. 滑鼠「移入」漢堡按鈕 或 「整個左邊邊緣」時 -> 展開側欄
    showSidebarBtn.addEventListener("mouseenter", expandSidebar);
    if (hoverTrigger) hoverTrigger.addEventListener("mouseenter", expandSidebar);

    // 2. 滑鼠「移出」整個側欄的範圍時 -> 若「未鎖定」則自動收合
    sidebar.addEventListener("mouseleave", () => {
        if (!isPinned) {
            sidebar.classList.add("collapsed");
            showSidebarBtn.style.display = "flex";
            if (hoverTrigger) hoverTrigger.style.display = "block"; // 恢復邊緣感應區
        }
    });
    // ============================================

    // 記住目前被點擊的連結
    let currentActiveLink = null;

    // 動態生成一層的資料夾結構
    resourceData.forEach((folder) => {
        // 建立資料夾容器
        const folderEl = document.createElement("div");
        folderEl.className = "folder";

        // 建立資料夾標題
        const folderTitle = document.createElement("div");
        folderTitle.className = "folder-title";
        folderTitle.innerHTML = `<span>${folder.icon}</span> &nbsp;${folder.target}`;

        // 建立右側的「開全部」小按鈕
        const openAllBtn = document.createElement("button");
        openAllBtn.className = "open-all-btn";
        openAllBtn.innerText = "開啟";
        openAllBtn.title = "開啟此資料夾內的所有報表";
        openAllBtn.addEventListener("click", (e) => {
            e.stopPropagation(); // 阻止干擾資料夾折疊事件

            // 確保資料夾處於展開狀態
            folderEl.classList.add("open");

            folder.sheets.forEach(sheet => {
                if (sheet.url) {
                    openTab(sheet.name, sheet.url);
                }
            });
        });

        folderTitle.appendChild(openAllBtn);
        folderEl.appendChild(folderTitle);

        // 資料夾內容容器
        const sheetGroup = document.createElement("div");
        sheetGroup.className = "sub-folder-group";

        // 處理每個 Google Sheet 連結
        folder.sheets.forEach((sheet) => {
            const sheetLinkEl = document.createElement("div");
            sheetLinkEl.className = "sheet-link";
            const defaultText = sheet.url ? sheet.name : `${sheet.name} (尚未加網址)`;
            sheetLinkEl.innerHTML = `🍄 ${defaultText}`;

            // 點擊網址事件
            sheetLinkEl.addEventListener("click", (e) => {
                e.stopPropagation();

                if (currentActiveLink) {
                    currentActiveLink.classList.remove("active");
                }
                // 反白選取的項目
                sheetLinkEl.classList.add("active");
                currentActiveLink = sheetLinkEl;

                // 多分頁切換邏輯
                if (sheet.url) {
                    openTab(sheet.name, sheet.url);
                } else {
                    alert(`還沒放上「${sheet.name}」的網址喔！請到 list.js 設定。`);
                }
            });

            sheetGroup.appendChild(sheetLinkEl);
        });

        // 點擊資料夾標題時，維持原本的展開/收合
        folderTitle.addEventListener("click", () => {
            folderEl.classList.toggle("open");
        });

        // 將內容組裝起來
        folderEl.appendChild(sheetGroup);
        folderTree.appendChild(folderEl);
    });

    // ======== 番茄鐘與連動計時器 ========
    const pomoDisplay = document.getElementById("pomo-display");
    const pomoPlay = document.getElementById("pomo-play");
    const pomoResetBtn = document.getElementById("pomo-reset");
    const stopwatchDisplay = document.getElementById("stopwatch-display");
    const stopwatchResetBtn = document.getElementById("stopwatch-reset");

    let pomoTimeLeft = 25 * 60; // 預設 25 分鐘
    let pomoIsRunning = false;
    let pomoMode = "work"; // "work" 或是 "break"
    let pomoInterval = null;

    // 用於系統校準的變數 (支援背景執行)
    let pomoEndTime = 0;
    let sessionStartTime = 0;
    let accumulatedWorkSeconds = 0;
    let totalWorkSeconds = 0; // 累積計時器 (連動番茄鐘)

    function formatTime(seconds) {
        const m = Math.floor(seconds / 60).toString().padStart(2, "0");
        const s = (seconds % 60).toString().padStart(2, "0");
        return `${m}:${s}`;
    }

    function formatStopwatch(seconds) {
        const h = Math.floor(seconds / 3600).toString().padStart(2, "0");
        const m = Math.floor((seconds % 3600) / 60).toString().padStart(2, "0");
        const s = (seconds % 60).toString().padStart(2, "0");
        return `${h}:${m}:${s}`;
    }

    function updateTimerDisplays() {
        if (pomoDisplay) pomoDisplay.innerText = formatTime(pomoTimeLeft);
        if (stopwatchDisplay) stopwatchDisplay.innerText = formatStopwatch(totalWorkSeconds);
    }

    // 番茄鐘：開始/暫停
    if (pomoPlay) {
        pomoPlay.addEventListener("click", () => {
            pomoIsRunning = !pomoIsRunning;
            if (pomoIsRunning) {
                pomoPlay.innerText = "⏸";

                // 設定系統對齊時間
                pomoEndTime = Date.now() + (pomoTimeLeft * 1000);
                sessionStartTime = Date.now();

                pomoInterval = setInterval(() => {
                    // 使用系統時間計算「剩餘時間」 (避免背景變慢)
                    const now = Date.now();
                    pomoTimeLeft = Math.max(0, Math.round((pomoEndTime - now) / 1000));

                    // 累積總計時：原本累積的 + (現在時間 - 本次 Session 開始時間)
                    if (pomoMode === "work") {
                        totalWorkSeconds = accumulatedWorkSeconds + Math.round((now - sessionStartTime) / 1000);
                    }

                    if (pomoTimeLeft <= 0) {
                        clearInterval(pomoInterval);
                        pomoIsRunning = false;
                        pomoPlay.innerText = "▶";

                        // 結算本次 Session
                        if (pomoMode === "work") {
                            accumulatedWorkSeconds = totalWorkSeconds;
                        }

                        if (pomoMode === "work") {
                            setTimeout(() => {
                                const audio = document.getElementById("pomo-alert-sound");
                                if (audio) audio.play().catch(e => console.log("Audio play failed:", e));
                                alert("🍅 番茄鐘 25 分鐘完成！稍微休息一下吧！");
                                pomoMode = "break";
                                pomoTimeLeft = 5 * 60;
                                updateTimerDisplays();
                            }, 50);
                        } else {
                            setTimeout(() => {
                                const audio = document.getElementById("pomo-alert-sound");
                                if (audio) audio.play().catch(e => console.log("Audio play failed:", e));
                                alert("☕ 休息結束！準備開始新的工作！");
                                pomoMode = "work";
                                pomoTimeLeft = 25 * 60;
                                updateTimerDisplays();
                            }, 50);
                        }
                    }
                    updateTimerDisplays();
                }, 500); // 頻率調高一點點，讓顯示更細膩
            } else {
                pomoPlay.innerText = "▶";
                clearInterval(pomoInterval);

                // 暫停時，將本次累積的時間存入底標
                if (pomoMode === "work") {
                    accumulatedWorkSeconds = totalWorkSeconds;
                }
            }
        });
    }

    // 番茄鐘：重置
    if (pomoResetBtn) {
        pomoResetBtn.addEventListener("click", () => {
            clearInterval(pomoInterval);
            pomoIsRunning = false;
            pomoPlay.innerText = "▶";
            pomoMode = "work";
            pomoTimeLeft = 25 * 60;

            // 重置時不一定要重置總累計時間，若使用者要重置累計時間，請使用累計計時器的重置鍵
            // 但本次 Session 的增量應該被清掉
            if (pomoMode === "work") {
                totalWorkSeconds = accumulatedWorkSeconds;
            }

            updateTimerDisplays();
        });
    }

    // 番茄鐘：點擊時間區域手動切換 工作/休息
    if (pomoDisplay) {
        pomoDisplay.addEventListener("click", () => {
            if (!pomoIsRunning) {
                if (pomoMode === "work") {
                    pomoMode = "break";
                    pomoTimeLeft = 5 * 60;
                } else {
                    pomoMode = "work";
                    pomoTimeLeft = 25 * 60;
                }
                updateTimerDisplays();
            }
        });
    }

    // 計時器：重置累積時間
    if (stopwatchResetBtn) {
        stopwatchResetBtn.addEventListener("click", () => {
            if (confirm("確定要將累積作帳時間歸零嗎？")) {
                accumulatedWorkSeconds = 0;
                totalWorkSeconds = 0;
                if (pomoIsRunning) {
                    sessionStartTime = Date.now(); // 歸零後重新起算 Session
                }
                updateTimerDisplays();
            }
        });
    }

    updateTimerDisplays();
});
