/* ============================================================
   app.js — shared logic: theme, i18n, cookie, pwa install
   ============================================================ */

// ── Translations ──────────────────────────────────────────────
const LANGS = {
  ru: {
    nav_calc:     'Калькулятор',
    nav_about:    'О расчёте',
    nav_faq:      'FAQ',
    calc_title:   'Расчёт дозы',
    calc_sub:     'Инсулин — калькулятор',
    label_glucose:'Глюкоза сейчас',
    label_carbs:  'Углеводы в еде',
    label_icr:    'ICR',
    label_isf:    'ISF',
    label_target: 'Цель',
    hint_icr:     'г углеводов / 1 ед.',
    hint_isf_mmol:'ммоль/л / 1 ед.',
    hint_isf_mgdl:'мг/дл / 1 ед.',
    hint_target_mmol:'ммоль/л цель',
    hint_target_mgdl:'мг/дл цель',
    settings_label:'Параметры (задайте с врачом)',
    inputs_label: 'Данные для расчёта',
    btn_calc:     'Рассчитать дозу →',
    btn_reset:    'Сбросить',
    btn_history:  'История расчётов',
    history_title:'История',
    history_clear:'Очистить',
    history_empty:'История пуста',
    result_label: 'Рекомендуемая доза',
    result_unit:  'единиц инсулина',
    breakdown_carbs: 'На углеводы',
    breakdown_corr:  'Коррекция',
    breakdown_exact: 'Итого точно',
    breakdown_round: 'Округлено до 0.5',
    no_dose_hypo: '⚠️ Глюкоза низкая — инсулин не нужен. Примите быстрые углеводы.',
    no_dose_zero: 'Суммарная доза ≤ 0 — инсулин не нужен. Уточните с врачом.',
    disclaimer:   '⚠️ <strong>Только для справки.</strong> Дозу инсулина всегда определяет лечащий врач. Проверяйте расчёт перед введением.',
    offline_msg:  '📡 Нет соединения — приложение работает офлайн',
    install_text: '📲 Установите приложение на главный экран',
    install_btn:  'Установить',
    cookie_text:  'Мы используем cookies для аналитики и рекламы.',
    cookie_accept:'Принять',
    cookie_decline:'Только необходимые',
    footer_copy:  '© 2026 insulin-calc. Только для информационных целей.',
    confirm_history: 'Очистить историю?',
    confirm_fill: 'Пожалуйста, заполните все поля.',
    unit_mmol:    'ммоль/л',
    unit_mgdl:    'мг/дл',
    ph_glucose_mmol: '5.5',
    ph_glucose_mgdl: '99',
  },
  en: {
    nav_calc:     'Calculator',
    nav_about:    'How it works',
    nav_faq:      'FAQ',
    calc_title:   'Dose Calculator',
    calc_sub:     'Insulin — bolus calculator',
    label_glucose:'Current glucose',
    label_carbs:  'Carbohydrates in meal',
    label_icr:    'ICR',
    label_isf:    'ISF',
    label_target: 'Target',
    hint_icr:     'g carbs / 1 unit',
    hint_isf_mmol:'mmol/L / 1 unit',
    hint_isf_mgdl:'mg/dL / 1 unit',
    hint_target_mmol:'mmol/L target',
    hint_target_mgdl:'mg/dL target',
    settings_label:'Parameters (set with your doctor)',
    inputs_label: 'Calculation data',
    btn_calc:     'Calculate dose →',
    btn_reset:    'Reset',
    btn_history:  'Calculation history',
    history_title:'History',
    history_clear:'Clear',
    history_empty:'No history yet',
    result_label: 'Recommended dose',
    result_unit:  'units of insulin',
    breakdown_carbs: 'Meal dose',
    breakdown_corr:  'Correction',
    breakdown_exact: 'Exact total',
    breakdown_round: 'Rounded to 0.5',
    no_dose_hypo: '⚠️ Low glucose — no insulin needed. Take fast-acting carbs.',
    no_dose_zero: 'Total dose ≤ 0 — no correction needed. Check with your doctor.',
    disclaimer:   '⚠️ <strong>For reference only.</strong> Always confirm insulin doses with your doctor before injecting.',
    offline_msg:  '📡 Offline — app works without internet',
    install_text: '📲 Install app to your home screen',
    install_btn:  'Install',
    cookie_text:  'We use cookies for analytics and advertising.',
    cookie_accept:'Accept',
    cookie_decline:'Essential only',
    footer_copy:  '© 2026 insulin-calc. For informational purposes only.',
    confirm_history: 'Clear history?',
    confirm_fill: 'Please fill in all fields.',
    unit_mmol:    'mmol/L',
    unit_mgdl:    'mg/dL',
    ph_glucose_mmol: '5.5',
    ph_glucose_mgdl: '99',
  },
  es: {
    nav_calc:     'Calculadora',
    nav_about:    'Cómo funciona',
    nav_faq:      'FAQ',
    calc_title:   'Cálculo de dosis',
    calc_sub:     'Insulina — calculadora de bolo',
    label_glucose:'Glucosa actual',
    label_carbs:  'Carbohidratos en la comida',
    label_icr:    'ICR',
    label_isf:    'ISF',
    label_target: 'Objetivo',
    hint_icr:     'g carbohidratos / 1 u.',
    hint_isf_mmol:'mmol/L / 1 u.',
    hint_isf_mgdl:'mg/dL / 1 u.',
    hint_target_mmol:'mmol/L objetivo',
    hint_target_mgdl:'mg/dL objetivo',
    settings_label:'Parámetros (defina con su médico)',
    inputs_label: 'Datos para el cálculo',
    btn_calc:     'Calcular dosis →',
    btn_reset:    'Reiniciar',
    btn_history:  'Historial',
    history_title:'Historial',
    history_clear:'Borrar',
    history_empty:'Sin historial',
    result_label: 'Dosis recomendada',
    result_unit:  'unidades de insulina',
    breakdown_carbs: 'Dosis por comida',
    breakdown_corr:  'Corrección',
    breakdown_exact: 'Total exacto',
    breakdown_round: 'Redondeado a 0.5',
    no_dose_hypo: '⚠️ Glucosa baja — no necesita insulina. Tome carbohidratos de acción rápida.',
    no_dose_zero: 'Dosis total ≤ 0 — no se necesita corrección. Consulte a su médico.',
    disclaimer:   '⚠️ <strong>Solo informativo.</strong> Siempre confirme las dosis con su médico antes de inyectar.',
    offline_msg:  '📡 Sin conexión — la app funciona sin internet',
    install_text: '📲 Instalar app en pantalla de inicio',
    install_btn:  'Instalar',
    cookie_text:  'Usamos cookies para análisis y publicidad.',
    cookie_accept:'Aceptar',
    cookie_decline:'Solo esenciales',
    footer_copy:  '© 2026 insulin-calc. Solo para fines informativos.',
    confirm_history: '¿Borrar historial?',
    confirm_fill: 'Por favor complete todos los campos.',
    unit_mmol:    'mmol/L',
    unit_mgdl:    'mg/dL',
    ph_glucose_mmol: '5.5',
    ph_glucose_mgdl: '99',
  },
  de: {
    nav_calc:     'Rechner',
    nav_about:    'Funktionsweise',
    nav_faq:      'FAQ',
    calc_title:   'Dosisrechner',
    calc_sub:     'Insulin — Bolusrechner',
    label_glucose:'Aktueller Blutzucker',
    label_carbs:  'Kohlenhydrate in der Mahlzeit',
    label_icr:    'ICR',
    label_isf:    'ISF',
    label_target: 'Zielwert',
    hint_icr:     'g KH / 1 Einheit',
    hint_isf_mmol:'mmol/L / 1 IE',
    hint_isf_mgdl:'mg/dL / 1 IE',
    hint_target_mmol:'mmol/L Ziel',
    hint_target_mgdl:'mg/dL Ziel',
    settings_label:'Parameter (mit Ihrem Arzt festlegen)',
    inputs_label: 'Berechnungsdaten',
    btn_calc:     'Dosis berechnen →',
    btn_reset:    'Zurücksetzen',
    btn_history:  'Berechnungsverlauf',
    history_title:'Verlauf',
    history_clear:'Löschen',
    history_empty:'Kein Verlauf',
    result_label: 'Empfohlene Dosis',
    result_unit:  'Einheiten Insulin',
    breakdown_carbs: 'Mahlzeitdosis',
    breakdown_corr:  'Korrekturdosis',
    breakdown_exact: 'Exakte Summe',
    breakdown_round: 'Auf 0.5 gerundet',
    no_dose_hypo: '⚠️ Niedriger Blutzucker — kein Insulin nötig. Nehmen Sie schnelle Kohlenhydrate.',
    no_dose_zero: 'Gesamtdosis ≤ 0 — keine Korrektur nötig. Bitte mit Arzt absprechen.',
    disclaimer:   '⚠️ <strong>Nur zur Information.</strong> Insulindosen immer vor der Injektion mit dem Arzt bestätigen.',
    offline_msg:  '📡 Offline — App funktioniert ohne Internet',
    install_text: '📲 App zum Startbildschirm hinzufügen',
    install_btn:  'Installieren',
    cookie_text:  'Wir verwenden Cookies für Analysen und Werbung.',
    cookie_accept:'Akzeptieren',
    cookie_decline:'Nur notwendige',
    footer_copy:  '© 2026 insulin-calc. Nur zu Informationszwecken.',
    confirm_history: 'Verlauf löschen?',
    confirm_fill: 'Bitte alle Felder ausfüllen.',
    unit_mmol:    'mmol/L',
    unit_mgdl:    'mg/dL',
    ph_glucose_mmol: '5.5',
    ph_glucose_mgdl: '99',
  },
  fr: {
    nav_calc:     'Calculateur',
    nav_about:    'Comment ça marche',
    nav_faq:      'FAQ',
    calc_title:   'Calcul de dose',
    calc_sub:     'Insuline — calculateur de bolus',
    label_glucose:'Glycémie actuelle',
    label_carbs:  'Glucides dans le repas',
    label_icr:    'ICR',
    label_isf:    'ISF',
    label_target: 'Cible',
    hint_icr:     'g glucides / 1 unité',
    hint_isf_mmol:'mmol/L / 1 unité',
    hint_isf_mgdl:'mg/dL / 1 unité',
    hint_target_mmol:'mmol/L cible',
    hint_target_mgdl:'mg/dL cible',
    settings_label:'Paramètres (à définir avec votre médecin)',
    inputs_label: 'Données pour le calcul',
    btn_calc:     'Calculer la dose →',
    btn_reset:    'Réinitialiser',
    btn_history:  'Historique',
    history_title:'Historique',
    history_clear:'Effacer',
    history_empty:'Aucun historique',
    result_label: 'Dose recommandée',
    result_unit:  'unités d\'insuline',
    breakdown_carbs: 'Dose repas',
    breakdown_corr:  'Correction',
    breakdown_exact: 'Total exact',
    breakdown_round: 'Arrondi à 0.5',
    no_dose_hypo: '⚠️ Glycémie basse — pas d\'insuline nécessaire. Prenez des glucides rapides.',
    no_dose_zero: 'Dose totale ≤ 0 — pas de correction nécessaire. Consultez votre médecin.',
    disclaimer:   '⚠️ <strong>À titre indicatif seulement.</strong> Confirmez toujours les doses avec votre médecin.',
    offline_msg:  '📡 Hors ligne — l\'app fonctionne sans internet',
    install_text: '📲 Installer l\'app sur l\'écran d\'accueil',
    install_btn:  'Installer',
    cookie_text:  'Nous utilisons des cookies pour l\'analyse et la publicité.',
    cookie_accept:'Accepter',
    cookie_decline:'Essentiels uniquement',
    footer_copy:  '© 2026 insulin-calc. À titre informatif uniquement.',
    confirm_history: 'Effacer l\'historique?',
    confirm_fill: 'Veuillez remplir tous les champs.',
    unit_mmol:    'mmol/L',
    unit_mgdl:    'mg/dL',
    ph_glucose_mmol: '5.5',
    ph_glucose_mgdl: '99',
  },
  be: {
    nav_calc:     'Калькулятар',
    nav_about:    'Пра разлік',
    nav_faq:      'FAQ',
    calc_title:   'Разлік дозы',
    calc_sub:     'Інсулін — калькулятар',
    label_glucose:'Глюкоза зараз',
    label_carbs:  'Вугляводы ў ежы',
    label_icr:    'ICR',
    label_isf:    'ISF',
    label_target: 'Мэта',
    hint_icr:     'г вугляводаў / 1 ад.',
    hint_isf_mmol:'ммаль/л / 1 ад.',
    hint_isf_mgdl:'мг/дл / 1 ад.',
    hint_target_mmol:'ммаль/л мэта',
    hint_target_mgdl:'мг/дл мэта',
    settings_label:'Параметры (вызначце з урачом)',
    inputs_label: 'Дадзеныя для разліку',
    btn_calc:     'Разлічыць дозу →',
    btn_reset:    'Скінуць',
    btn_history:  'Гісторыя разлікаў',
    history_title:'Гісторыя',
    history_clear:'Ачысціць',
    history_empty:'Гісторыя пустая',
    result_label: 'Рэкамендаваная доза',
    result_unit:  'адзінак інсуліну',
    breakdown_carbs: 'На вугляводы',
    breakdown_corr:  'Карэкцыя',
    breakdown_exact: 'Разам дакладна',
    breakdown_round: 'Акруглена да 0.5',
    no_dose_hypo: '⚠️ Глюкоза нізкая — інсулін не патрэбен. Прыміце хуткія вугляводы.',
    no_dose_zero: 'Сумарная доза ≤ 0 — карэкцыя не патрэбна. Удакладніце з урачом.',
    disclaimer:   '⚠️ <strong>Толькі для даведкі.</strong> Дозу інсуліну заўсёды вызначае ўрач.',
    offline_msg:  '📡 Няма злучэння — праграма працуе афлайн',
    install_text: '📲 Усталяваць праграму на галоўны экран',
    install_btn:  'Усталяваць',
    cookie_text:  'Мы выкарыстоўваем cookies для аналітыкі і рэкламы.',
    cookie_accept:'Прыняць',
    cookie_decline:'Толькі неабходныя',
    footer_copy:  '© 2026 insulin-calc. Толькі для інфармацыйных мэт.',
    confirm_history: 'Ачысціць гісторыю?',
    confirm_fill: 'Калі ласка, запоўніце ўсе палі.',
    unit_mmol:    'ммаль/л',
    unit_mgdl:    'мг/дл',
    ph_glucose_mmol: '5.5',
    ph_glucose_mgdl: '99',
  },
  zh: {
    nav_calc:     '计算器',
    nav_about:    '使用说明',
    nav_faq:      '常见问题',
    calc_title:   '胰岛素剂量计算',
    calc_sub:     '胰岛素 — 大剂量计算器',
    label_glucose:'当前血糖',
    label_carbs:  '餐中碳水化合物',
    label_icr:    'ICR',
    label_isf:    'ISF',
    label_target: '目标值',
    hint_icr:     'g 碳水 / 1单位',
    hint_isf_mmol:'mmol/L / 1单位',
    hint_isf_mgdl:'mg/dL / 1单位',
    hint_target_mmol:'mmol/L 目标',
    hint_target_mgdl:'mg/dL 目标',
    settings_label:'参数（与医生确认）',
    inputs_label: '计算数据',
    btn_calc:     '计算剂量 →',
    btn_reset:    '重置',
    btn_history:  '计算历史',
    history_title:'历史记录',
    history_clear:'清除',
    history_empty:'暂无记录',
    result_label: '推荐剂量',
    result_unit:  '单位胰岛素',
    breakdown_carbs: '餐时剂量',
    breakdown_corr:  '校正剂量',
    breakdown_exact: '精确合计',
    breakdown_round: '四舍五入至0.5',
    no_dose_hypo: '⚠️ 血糖偏低 — 无需注射胰岛素，请补充快速碳水化合物。',
    no_dose_zero: '总剂量 ≤ 0 — 无需校正，请咨询医生。',
    disclaimer:   '⚠️ <strong>仅供参考。</strong>注射前请始终与医生确认胰岛素剂量。',
    offline_msg:  '📡 离线 — 应用可在无网络状态下运行',
    install_text: '📲 将应用添加到主屏幕',
    install_btn:  '安装',
    cookie_text:  '我们使用 Cookie 进行分析和广告展示。',
    cookie_accept:'接受',
    cookie_decline:'仅必要',
    footer_copy:  '© 2026 insulin-calc. 仅供参考。',
    confirm_history: '清除历史记录？',
    confirm_fill: '请填写所有字段。',
    unit_mmol:    'mmol/L',
    unit_mgdl:    'mg/dL',
    ph_glucose_mmol: '5.5',
    ph_glucose_mgdl: '99',
  },
};

// ── Language ──────────────────────────────────────────────────
let currentLang = localStorage.getItem('lang') || 'ru';

function t(key) {
  return (LANGS[currentLang] || LANGS.ru)[key] || key;
}

function applyLang(lang) {
  currentLang = lang;
  localStorage.setItem('lang', lang);

  // Update all data-i18n elements
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    if (el.tagName === 'INPUT' && el.type !== 'button') {
      el.placeholder = t(key);
    } else {
      el.innerHTML = t(key);
    }
  });

  // Update data-i18n-placeholder
  document.querySelectorAll('[data-i18n-ph]').forEach(el => {
    el.placeholder = t(el.dataset.i18nPh);
  });

  // Sync lang select
  const sel = document.getElementById('lang-select');
  if (sel) sel.value = lang;
}

// ── Theme ─────────────────────────────────────────────────────
let currentTheme = localStorage.getItem('theme') || 'dark';

function applyTheme(theme) {
  currentTheme = theme;
  document.documentElement.setAttribute('data-theme', theme);
  localStorage.setItem('theme', theme);
  const btn = document.getElementById('theme-toggle');
  if (btn) btn.textContent = theme === 'dark' ? '☀️' : '🌙';
}

function toggleTheme() {
  applyTheme(currentTheme === 'dark' ? 'light' : 'dark');
}

// ── Cookie consent ────────────────────────────────────────────
function checkCookieConsent() {
  if (!localStorage.getItem('cookieConsent')) {
    setTimeout(() => {
      const b = document.getElementById('cookie-banner');
      if (b) b.classList.add('show');
    }, 1800);
  }
}
function acceptCookies() {
  localStorage.setItem('cookieConsent', 'accepted');
  const b = document.getElementById('cookie-banner');
  if (b) b.classList.remove('show');
}
function declineCookies() {
  localStorage.setItem('cookieConsent', 'declined');
  const b = document.getElementById('cookie-banner');
  if (b) b.classList.remove('show');
}

// ── PWA install ───────────────────────────────────────────────
let deferredInstall = null;
window.addEventListener('beforeinstallprompt', e => {
  e.preventDefault();
  deferredInstall = e;
  if (!localStorage.getItem('installDismissed')) {
    const b = document.getElementById('install-banner');
    if (b) b.classList.add('show');
  }
});
function installApp() {
  if (!deferredInstall) return;
  deferredInstall.prompt();
  deferredInstall.userChoice.then(() => {
    const b = document.getElementById('install-banner');
    if (b) b.classList.remove('show');
    deferredInstall = null;
  });
}
function closeInstall() {
  const b = document.getElementById('install-banner');
  if (b) b.classList.remove('show');
  localStorage.setItem('installDismissed', '1');
}

// ── Offline ───────────────────────────────────────────────────
function updateOnline() {
  const b = document.getElementById('offline-banner');
  if (b) b.classList.toggle('show', !navigator.onLine);
}
window.addEventListener('online',  updateOnline);
window.addEventListener('offline', updateOnline);

// ── Init (runs on every page) ─────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  // Apply saved theme immediately
  applyTheme(currentTheme);

  // Theme toggle button
  const themeBtn = document.getElementById('theme-toggle');
  if (themeBtn) themeBtn.addEventListener('click', toggleTheme);

  // Language selector
  const langSel = document.getElementById('lang-select');
  if (langSel) {
    langSel.value = currentLang;
    langSel.addEventListener('change', e => applyLang(e.target.value));
  }

  // Apply language to static elements
  applyLang(currentLang);

  checkCookieConsent();
  updateOnline();

  // Service Worker
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('sw.js').catch(() => {});
  }
});
