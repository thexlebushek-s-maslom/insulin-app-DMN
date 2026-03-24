/* ============================================================
   app.js — shared logic: theme, i18n, cookie, pwa install
   v4 — full translation coverage, fixed nav
   ============================================================ */

const LANGS = {
  ru: {
    nav_calc:'Калькулятор', nav_about:'О расчёте', nav_faq:'FAQ',
    calc_title:'Расчёт дозы', calc_sub:'Инсулин — калькулятор',
    label_glucose:'Глюкоза сейчас', label_carbs:'Углеводы в еде',
    label_target:'Целевая глюкоза',
    label_icr:'ICR', label_isf:'ISF',
    hint_icr:'г углеводов / 1 ед.',
    hint_isf_mmol:'ммоль/л / 1 ед.', hint_isf_mgdl:'мг/дл / 1 ед.',
    hint_target_mmol:'ммоль/л', hint_target_mgdl:'мг/дл',
    settings_label:'Параметры (задайте с врачом)',
    inputs_label:'Данные для расчёта',
    btn_calc:'Рассчитать дозу →', btn_reset:'Сбросить всё',
    btn_history:'История расчётов',
    history_title:'История', history_clear:'Очистить',
    history_empty:'История пуста',
    history_max:'Хранится не более 20 записей',
    result_label:'Рекомендуемая доза', result_unit:'единиц инсулина',
    breakdown_carbs:'На углеводы', breakdown_corr:'Коррекция',
    breakdown_exact:'Итого точно', breakdown_round:'Округлено до 0.5',
    no_dose_hypo:'⚠️ Глюкоза низкая — инсулин не нужен. Примите быстрые углеводы.',
    no_dose_zero:'Суммарная доза ≤ 0 — инсулин не нужен. Уточните с врачом.',
    disclaimer:'⚠️ <strong>Только для справки.</strong> Дозу инсулина всегда определяет лечащий врач. Проверяйте расчёт перед введением.',
    offline_msg:'📡 Нет соединения — приложение работает офлайн',
    install_text:'📲 Установите приложение на главный экран',
    install_btn:'Установить',
    cookie_text:'Мы используем cookies для аналитики и рекламы.',
    cookie_accept:'Принять', cookie_decline:'Только необходимые',
    footer_copy:'© 2026 insulin-calc. Только для информационных целей.',
    confirm_history:'Очистить историю?',
    err_required:'Обязательное поле',
    err_zero:'Значение должно быть больше 0',
    err_invalid:'Введите корректное число',
    unit_mmol:'ммоль/л', unit_mgdl:'мг/дл',
    ph_glucose_mmol:'5.5', ph_glucose_mgdl:'99',
    ph_carbs:'60', ph_icr:'12', ph_isf_mmol:'2.5', ph_isf_mgdl:'45',
    ph_target_mmol:'5.5', ph_target_mgdl:'99',
    faq_title:'FAQ', faq_subtitle:'Часто задаваемые вопросы · 2026',
    faq_warnings_title:'⚠️ Важные предупреждения',
    faq_warnings_body:'Расчёт дозы инсулина — сложный медицинский процесс. Данный калькулятор предназначен <strong>только для информационных целей</strong> и не заменяет консультацию врача.',
    faq_warn_1:'Всегда проверяйте рассчитанную дозу перед введением',
    faq_warn_2:'Учитывайте активный инсулин (IOB) от предыдущих введений',
    faq_warn_3:'Физическая активность меняет чувствительность к инсулину',
    faq_warn_4:'При болезни или стрессе коэффициенты могут меняться',
    faq_warn_5:'При признаках гипогликемии — немедленно примите быстрые углеводы',
    faq_warn_6:'Никогда не вводите инсулин без измерения уровня глюкозы',
    faq_goto_calc:'Перейти к калькулятору →',
    about_title:'Как рассчитывается доза инсулина',
    about_subtitle:'Информационная статья · 2026',
    about_goto_calc:'Перейти к калькулятору →',
  },
  en: {
    nav_calc:'Calculator', nav_about:'How it works', nav_faq:'FAQ',
    calc_title:'Dose Calculator', calc_sub:'Insulin — bolus calculator',
    label_glucose:'Current glucose', label_carbs:'Carbohydrates in meal',
    label_target:'Target glucose',
    label_icr:'ICR', label_isf:'ISF',
    hint_icr:'g carbs / 1 unit',
    hint_isf_mmol:'mmol/L / 1 unit', hint_isf_mgdl:'mg/dL / 1 unit',
    hint_target_mmol:'mmol/L', hint_target_mgdl:'mg/dL',
    settings_label:'Parameters (set with your doctor)',
    inputs_label:'Calculation data',
    btn_calc:'Calculate dose →', btn_reset:'Reset all',
    btn_history:'Calculation history',
    history_title:'History', history_clear:'Clear',
    history_empty:'No history yet',
    history_max:'Stores up to 20 entries',
    result_label:'Recommended dose', result_unit:'units of insulin',
    breakdown_carbs:'Meal dose', breakdown_corr:'Correction',
    breakdown_exact:'Exact total', breakdown_round:'Rounded to 0.5',
    no_dose_hypo:'⚠️ Low glucose — no insulin needed. Take fast-acting carbs.',
    no_dose_zero:'Total dose ≤ 0 — no correction needed. Check with your doctor.',
    disclaimer:'⚠️ <strong>For reference only.</strong> Always confirm insulin doses with your doctor before injecting.',
    offline_msg:'📡 Offline — app works without internet',
    install_text:'📲 Install app to your home screen',
    install_btn:'Install',
    cookie_text:'We use cookies for analytics and advertising.',
    cookie_accept:'Accept', cookie_decline:'Essential only',
    footer_copy:'© 2026 insulin-calc. For informational purposes only.',
    confirm_history:'Clear history?',
    err_required:'Required field',
    err_zero:'Value must be greater than 0',
    err_invalid:'Enter a valid number',
    unit_mmol:'mmol/L', unit_mgdl:'mg/dL',
    ph_glucose_mmol:'5.5', ph_glucose_mgdl:'99',
    ph_carbs:'60', ph_icr:'12', ph_isf_mmol:'2.5', ph_isf_mgdl:'45',
    ph_target_mmol:'5.5', ph_target_mgdl:'99',
    faq_title:'FAQ', faq_subtitle:'Frequently asked questions · 2026',
    faq_warnings_title:'⚠️ Important warnings',
    faq_warnings_body:'Insulin dosing is a complex medical process. This calculator is <strong>for informational purposes only</strong> and does not replace professional medical advice.',
    faq_warn_1:'Always verify the calculated dose before injecting',
    faq_warn_2:'Account for active insulin (IOB) from previous doses',
    faq_warn_3:'Physical activity affects insulin sensitivity',
    faq_warn_4:'Illness or stress may change your ratios',
    faq_warn_5:'If you experience hypoglycemia — take fast-acting carbs immediately',
    faq_warn_6:'Never inject insulin without measuring glucose first',
    faq_goto_calc:'Go to calculator →',
    about_title:'How insulin dose is calculated',
    about_subtitle:'Informational article · 2026',
    about_goto_calc:'Go to calculator →',
  },
  es: {
    nav_calc:'Calculadora', nav_about:'Cómo funciona', nav_faq:'FAQ',
    calc_title:'Cálculo de dosis', calc_sub:'Insulina — calculadora de bolo',
    label_glucose:'Glucosa actual', label_carbs:'Carbohidratos en la comida',
    label_target:'Glucosa objetivo',
    label_icr:'ICR', label_isf:'ISF',
    hint_icr:'g carbohidratos / 1 u.',
    hint_isf_mmol:'mmol/L / 1 u.', hint_isf_mgdl:'mg/dL / 1 u.',
    hint_target_mmol:'mmol/L', hint_target_mgdl:'mg/dL',
    settings_label:'Parámetros (defina con su médico)',
    inputs_label:'Datos para el cálculo',
    btn_calc:'Calcular dosis →', btn_reset:'Reiniciar todo',
    btn_history:'Historial',
    history_title:'Historial', history_clear:'Borrar',
    history_empty:'Sin historial',
    history_max:'Máximo 20 entradas almacenadas',
    result_label:'Dosis recomendada', result_unit:'unidades de insulina',
    breakdown_carbs:'Dosis por comida', breakdown_corr:'Corrección',
    breakdown_exact:'Total exacto', breakdown_round:'Redondeado a 0.5',
    no_dose_hypo:'⚠️ Glucosa baja — no necesita insulina. Tome carbohidratos rápidos.',
    no_dose_zero:'Dosis total ≤ 0 — no se necesita corrección. Consulte a su médico.',
    disclaimer:'⚠️ <strong>Solo informativo.</strong> Confirme siempre las dosis con su médico.',
    offline_msg:'📡 Sin conexión — la app funciona sin internet',
    install_text:'📲 Instalar en pantalla de inicio',
    install_btn:'Instalar',
    cookie_text:'Usamos cookies para análisis y publicidad.',
    cookie_accept:'Aceptar', cookie_decline:'Solo esenciales',
    footer_copy:'© 2026 insulin-calc. Solo para fines informativos.',
    confirm_history:'¿Borrar historial?',
    err_required:'Campo obligatorio',
    err_zero:'El valor debe ser mayor que 0',
    err_invalid:'Ingrese un número válido',
    unit_mmol:'mmol/L', unit_mgdl:'mg/dL',
    ph_glucose_mmol:'5.5', ph_glucose_mgdl:'99',
    ph_carbs:'60', ph_icr:'12', ph_isf_mmol:'2.5', ph_isf_mgdl:'45',
    ph_target_mmol:'5.5', ph_target_mgdl:'99',
    faq_title:'FAQ', faq_subtitle:'Preguntas frecuentes · 2026',
    faq_warnings_title:'⚠️ Advertencias importantes',
    faq_warnings_body:'El cálculo de dosis de insulina es un proceso médico complejo. Esta calculadora es <strong>solo para fines informativos</strong>.',
    faq_warn_1:'Siempre verifique la dosis calculada antes de inyectar',
    faq_warn_2:'Tenga en cuenta la insulina activa (IOB) de dosis anteriores',
    faq_warn_3:'La actividad física afecta la sensibilidad a la insulina',
    faq_warn_4:'La enfermedad o el estrés pueden cambiar sus ratios',
    faq_warn_5:'Si experimenta hipoglucemia — tome carbohidratos rápidos de inmediato',
    faq_warn_6:'Nunca inyecte insulina sin medir la glucosa primero',
    faq_goto_calc:'Ir a la calculadora →',
    about_title:'Cómo se calcula la dosis de insulina',
    about_subtitle:'Artículo informativo · 2026',
    about_goto_calc:'Ir a la calculadora →',
  },
  de: {
    nav_calc:'Rechner', nav_about:'Funktionsweise', nav_faq:'FAQ',
    calc_title:'Dosisrechner', calc_sub:'Insulin — Bolusrechner',
    label_glucose:'Aktueller Blutzucker', label_carbs:'Kohlenhydrate in der Mahlzeit',
    label_target:'Ziel-Blutzucker',
    label_icr:'ICR', label_isf:'ISF',
    hint_icr:'g KH / 1 IE',
    hint_isf_mmol:'mmol/L / 1 IE', hint_isf_mgdl:'mg/dL / 1 IE',
    hint_target_mmol:'mmol/L', hint_target_mgdl:'mg/dL',
    settings_label:'Parameter (mit Ihrem Arzt festlegen)',
    inputs_label:'Berechnungsdaten',
    btn_calc:'Dosis berechnen →', btn_reset:'Alles zurücksetzen',
    btn_history:'Berechnungsverlauf',
    history_title:'Verlauf', history_clear:'Löschen',
    history_empty:'Kein Verlauf',
    history_max:'Speichert bis zu 20 Einträge',
    result_label:'Empfohlene Dosis', result_unit:'Einheiten Insulin',
    breakdown_carbs:'Mahlzeitdosis', breakdown_corr:'Korrekturdosis',
    breakdown_exact:'Exakte Summe', breakdown_round:'Auf 0.5 gerundet',
    no_dose_hypo:'⚠️ Niedriger Blutzucker — kein Insulin nötig. Nehmen Sie schnelle KH.',
    no_dose_zero:'Gesamtdosis ≤ 0 — keine Korrektur nötig. Bitte mit Arzt absprechen.',
    disclaimer:'⚠️ <strong>Nur zur Information.</strong> Insulindosen immer mit dem Arzt bestätigen.',
    offline_msg:'📡 Offline — App funktioniert ohne Internet',
    install_text:'📲 App zum Startbildschirm hinzufügen',
    install_btn:'Installieren',
    cookie_text:'Wir verwenden Cookies für Analysen und Werbung.',
    cookie_accept:'Akzeptieren', cookie_decline:'Nur notwendige',
    footer_copy:'© 2026 insulin-calc. Nur zu Informationszwecken.',
    confirm_history:'Verlauf löschen?',
    err_required:'Pflichtfeld',
    err_zero:'Wert muss größer als 0 sein',
    err_invalid:'Gültige Zahl eingeben',
    unit_mmol:'mmol/L', unit_mgdl:'mg/dL',
    ph_glucose_mmol:'5,5', ph_glucose_mgdl:'99',
    ph_carbs:'60', ph_icr:'12', ph_isf_mmol:'2,5', ph_isf_mgdl:'45',
    ph_target_mmol:'5,5', ph_target_mgdl:'99',
    faq_title:'FAQ', faq_subtitle:'Häufig gestellte Fragen · 2026',
    faq_warnings_title:'⚠️ Wichtige Hinweise',
    faq_warnings_body:'Die Insulindosierung ist ein komplexer medizinischer Prozess. Dieser Rechner dient <strong>nur zu Informationszwecken</strong>.',
    faq_warn_1:'Überprüfen Sie die berechnete Dosis stets vor der Injektion',
    faq_warn_2:'Berücksichtigen Sie aktives Insulin (IOB) aus früheren Injektionen',
    faq_warn_3:'Körperliche Aktivität beeinflusst die Insulinempfindlichkeit',
    faq_warn_4:'Krankheit oder Stress können Ihre Faktoren verändern',
    faq_warn_5:'Bei Hypoglykämie — nehmen Sie sofort schnell wirkende KH',
    faq_warn_6:'Injizieren Sie niemals Insulin ohne vorherige Blutzuckermessung',
    faq_goto_calc:'Zum Rechner →',
    about_title:'Wie die Insulindosis berechnet wird',
    about_subtitle:'Informationsartikel · 2026',
    about_goto_calc:'Zum Rechner →',
  },
  fr: {
    nav_calc:'Calculateur', nav_about:'Comment ça marche', nav_faq:'FAQ',
    calc_title:'Calcul de dose', calc_sub:'Insuline — calculateur de bolus',
    label_glucose:'Glycémie actuelle', label_carbs:'Glucides dans le repas',
    label_target:'Glycémie cible',
    label_icr:'ICR', label_isf:'ISF',
    hint_icr:'g glucides / 1 unité',
    hint_isf_mmol:'mmol/L / 1 unité', hint_isf_mgdl:'mg/dL / 1 unité',
    hint_target_mmol:'mmol/L', hint_target_mgdl:'mg/dL',
    settings_label:'Paramètres (à définir avec votre médecin)',
    inputs_label:'Données pour le calcul',
    btn_calc:'Calculer la dose →', btn_reset:'Tout réinitialiser',
    btn_history:'Historique',
    history_title:'Historique', history_clear:'Effacer',
    history_empty:'Aucun historique',
    history_max:'Stocke jusqu\'à 20 entrées',
    result_label:'Dose recommandée', result_unit:'unités d\'insuline',
    breakdown_carbs:'Dose repas', breakdown_corr:'Correction',
    breakdown_exact:'Total exact', breakdown_round:'Arrondi à 0.5',
    no_dose_hypo:'⚠️ Glycémie basse — pas d\'insuline. Prenez des glucides rapides.',
    no_dose_zero:'Dose totale ≤ 0 — pas de correction. Consultez votre médecin.',
    disclaimer:'⚠️ <strong>À titre indicatif seulement.</strong> Confirmez toujours les doses avec votre médecin.',
    offline_msg:'📡 Hors ligne — l\'app fonctionne sans internet',
    install_text:'📲 Installer sur l\'écran d\'accueil',
    install_btn:'Installer',
    cookie_text:'Nous utilisons des cookies pour l\'analyse et la publicité.',
    cookie_accept:'Accepter', cookie_decline:'Essentiels uniquement',
    footer_copy:'© 2026 insulin-calc. À titre informatif uniquement.',
    confirm_history:'Effacer l\'historique?',
    err_required:'Champ obligatoire',
    err_zero:'La valeur doit être supérieure à 0',
    err_invalid:'Entrez un nombre valide',
    unit_mmol:'mmol/L', unit_mgdl:'mg/dL',
    ph_glucose_mmol:'5.5', ph_glucose_mgdl:'99',
    ph_carbs:'60', ph_icr:'12', ph_isf_mmol:'2.5', ph_isf_mgdl:'45',
    ph_target_mmol:'5.5', ph_target_mgdl:'99',
    faq_title:'FAQ', faq_subtitle:'Questions fréquentes · 2026',
    faq_warnings_title:'⚠️ Avertissements importants',
    faq_warnings_body:'Le calcul de la dose d\'insuline est un processus médical complexe. Cette calculatrice est <strong>uniquement à titre informatif</strong>.',
    faq_warn_1:'Vérifiez toujours la dose calculée avant d\'injecter',
    faq_warn_2:'Tenez compte de l\'insuline active (IOB) des doses précédentes',
    faq_warn_3:'L\'activité physique affecte la sensibilité à l\'insuline',
    faq_warn_4:'La maladie ou le stress peuvent modifier vos ratios',
    faq_warn_5:'En cas d\'hypoglycémie — prenez des glucides rapides immédiatement',
    faq_warn_6:'Ne jamais injecter de l\'insuline sans mesurer la glycémie',
    faq_goto_calc:'Aller au calculateur →',
    about_title:'Comment la dose d\'insuline est calculée',
    about_subtitle:'Article informatif · 2026',
    about_goto_calc:'Aller au calculateur →',
  },
  be: {
    nav_calc:'Калькулятар', nav_about:'Пра разлік', nav_faq:'FAQ',
    calc_title:'Разлік дозы', calc_sub:'Інсулін — калькулятар',
    label_glucose:'Глюкоза зараз', label_carbs:'Вугляводы ў ежы',
    label_target:'Мэтавая глюкоза',
    label_icr:'ICR', label_isf:'ISF',
    hint_icr:'г вугляводаў / 1 ад.',
    hint_isf_mmol:'ммаль/л / 1 ад.', hint_isf_mgdl:'мг/дл / 1 ад.',
    hint_target_mmol:'ммаль/л', hint_target_mgdl:'мг/дл',
    settings_label:'Параметры (вызначце з урачом)',
    inputs_label:'Дадзеныя для разліку',
    btn_calc:'Разлічыць дозу →', btn_reset:'Скінуць усё',
    btn_history:'Гісторыя разлікаў',
    history_title:'Гісторыя', history_clear:'Ачысціць',
    history_empty:'Гісторыя пустая',
    history_max:'Захоўваецца не больш за 20 запісаў',
    result_label:'Рэкамендаваная доза', result_unit:'адзінак інсуліну',
    breakdown_carbs:'На вугляводы', breakdown_corr:'Карэкцыя',
    breakdown_exact:'Разам дакладна', breakdown_round:'Акруглена да 0.5',
    no_dose_hypo:'⚠️ Глюкоза нізкая — інсулін не патрэбен. Прыміце хуткія вугляводы.',
    no_dose_zero:'Сумарная доза ≤ 0 — карэкцыя не патрэбна. Удакладніце з урачом.',
    disclaimer:'⚠️ <strong>Толькі для даведкі.</strong> Дозу інсуліну заўсёды вызначае ўрач.',
    offline_msg:'📡 Няма злучэння — праграма працуе афлайн',
    install_text:'📲 Усталяваць праграму на галоўны экран',
    install_btn:'Усталяваць',
    cookie_text:'Мы выкарыстоўваем cookies для аналітыкі і рэкламы.',
    cookie_accept:'Прыняць', cookie_decline:'Толькі неабходныя',
    footer_copy:'© 2026 insulin-calc. Толькі для інфармацыйных мэт.',
    confirm_history:'Ачысціць гісторыю?',
    err_required:'Абавязковае поле',
    err_zero:'Значэнне павінна быць больш за 0',
    err_invalid:'Увядзіце карэктны лік',
    unit_mmol:'ммаль/л', unit_mgdl:'мг/дл',
    ph_glucose_mmol:'5.5', ph_glucose_mgdl:'99',
    ph_carbs:'60', ph_icr:'12', ph_isf_mmol:'2.5', ph_isf_mgdl:'45',
    ph_target_mmol:'5.5', ph_target_mgdl:'99',
    faq_title:'FAQ', faq_subtitle:'Частыя пытанні · 2026',
    faq_warnings_title:'⚠️ Важныя папярэджанні',
    faq_warnings_body:'Разлік дозы інсуліну — складаны медыцынскі працэс. Калькулятар прызначаны <strong>толькі для інфармацыйных мэт</strong>.',
    faq_warn_1:'Заўсёды правярайце разлічаную дозу перад увядзеннем',
    faq_warn_2:'Улічвайце актыўны інсулін (IOB) ад папярэдніх увядзенняў',
    faq_warn_3:'Фізічная актыўнасць мяняе адчувальнасць да інсуліну',
    faq_warn_4:'Пры хваробе або стрэсе каэфіцыенты могуць мяняцца',
    faq_warn_5:'Пры прыкметах гіпагліцэміі — адразу прыміце хуткія вугляводы',
    faq_warn_6:'Ніколі не ўводзьце інсулін без вымярэння глюкозы',
    faq_goto_calc:'Перайсці да калькулятара →',
    about_title:'Як разлічваецца доза інсуліну',
    about_subtitle:'Інфармацыйны артыкул · 2026',
    about_goto_calc:'Перайсці да калькулятара →',
  },
  zh: {
    nav_calc:'计算器', nav_about:'使用说明', nav_faq:'常见问题',
    calc_title:'胰岛素剂量计算', calc_sub:'胰岛素 — 大剂量计算器',
    label_glucose:'当前血糖', label_carbs:'餐中碳水化合物',
    label_target:'目标血糖',
    label_icr:'ICR', label_isf:'ISF',
    hint_icr:'g 碳水 / 1单位',
    hint_isf_mmol:'mmol/L / 1单位', hint_isf_mgdl:'mg/dL / 1单位',
    hint_target_mmol:'mmol/L', hint_target_mgdl:'mg/dL',
    settings_label:'参数（与医生确认）',
    inputs_label:'计算数据',
    btn_calc:'计算剂量 →', btn_reset:'全部重置',
    btn_history:'计算历史',
    history_title:'历史记录', history_clear:'清除',
    history_empty:'暂无记录',
    history_max:'最多存储20条记录',
    result_label:'推荐剂量', result_unit:'单位胰岛素',
    breakdown_carbs:'餐时剂量', breakdown_corr:'校正剂量',
    breakdown_exact:'精确合计', breakdown_round:'四舍五入至0.5',
    no_dose_hypo:'⚠️ 血糖偏低 — 无需注射胰岛素，请补充快速碳水。',
    no_dose_zero:'总剂量 ≤ 0 — 无需校正，请咨询医生。',
    disclaimer:'⚠️ <strong>仅供参考。</strong>注射前请始终与医生确认剂量。',
    offline_msg:'📡 离线 — 应用可在无网络状态下运行',
    install_text:'📲 将应用添加到主屏幕',
    install_btn:'安装',
    cookie_text:'我们使用 Cookie 进行分析和广告展示。',
    cookie_accept:'接受', cookie_decline:'仅必要',
    footer_copy:'© 2026 insulin-calc. 仅供参考。',
    confirm_history:'清除历史记录？',
    err_required:'必填字段',
    err_zero:'数值必须大于0',
    err_invalid:'请输入有效数字',
    unit_mmol:'mmol/L', unit_mgdl:'mg/dL',
    ph_glucose_mmol:'5.5', ph_glucose_mgdl:'99',
    ph_carbs:'60', ph_icr:'12', ph_isf_mmol:'2.5', ph_isf_mgdl:'45',
    ph_target_mmol:'5.5', ph_target_mgdl:'99',
    faq_title:'常见问题', faq_subtitle:'常见问题解答 · 2026',
    faq_warnings_title:'⚠️ 重要警告',
    faq_warnings_body:'胰岛素剂量计算是复杂的医疗过程。本计算器<strong>仅供参考</strong>，不能替代专业医疗建议。',
    faq_warn_1:'注射前请始终核实计算结果',
    faq_warn_2:'考虑上次注射的活性胰岛素（IOB）',
    faq_warn_3:'体力活动会影响胰岛素敏感性',
    faq_warn_4:'疾病或压力可能改变您的系数',
    faq_warn_5:'出现低血糖症状时 — 立即补充快速碳水',
    faq_warn_6:'未测量血糖前切勿注射胰岛素',
    faq_goto_calc:'前往计算器 →',
    about_title:'胰岛素剂量如何计算',
    about_subtitle:'信息文章 · 2026',
    about_goto_calc:'前往计算器 →',
  },
};

// ── Current state ─────────────────────────────────────────────
let currentLang  = localStorage.getItem('lang')  || 'ru';
let currentTheme = localStorage.getItem('theme') || 'dark';

// ── i18n ──────────────────────────────────────────────────────
function t(key) {
  return (LANGS[currentLang] || LANGS.ru)[key] || (LANGS.ru[key] || key);
}

function applyLang(lang) {
  currentLang = lang;
  localStorage.setItem('lang', lang);
  document.documentElement.lang = lang;

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    const val = t(key);
    if (el.tagName === 'INPUT') {
      el.placeholder = val;
    } else {
      el.innerHTML = val;
    }
  });

  document.querySelectorAll('[data-i18n-title]').forEach(el => {
    el.title = t(el.dataset.i18nTitle);
  });

  // Sync select
  const sel = document.getElementById('lang-select');
  if (sel) sel.value = lang;

  // Fire custom event so page-specific JS can react
  document.dispatchEvent(new CustomEvent('langchange', { detail: lang }));
}

// ── Theme ─────────────────────────────────────────────────────
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

// ── Cookie ────────────────────────────────────────────────────
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

// ── PWA Install ───────────────────────────────────────────────
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

// ── Input helpers: normalize decimal separator ────────────────
// Allows both "," and "." as decimal separators
function normalizeDecimal(value) {
  return value.replace(/,/g, '.').replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1');
}

function parseDecimal(value) {
  return parseFloat(normalizeDecimal(String(value)));
}

// Block non-numeric chars on keydown (allow: digits, . , - Backspace Delete ArrowKeys Tab)
function numericKeydown(e) {
  const allowed = ['Backspace','Delete','ArrowLeft','ArrowRight','ArrowUp','ArrowDown','Tab','Enter','.',','];
  if (!allowed.includes(e.key) && !/^\d$/.test(e.key)) {
    e.preventDefault();
  }
  // Only allow one decimal separator
  if ((e.key === '.' || e.key === ',')) {
    const val = e.target.value;
    if (val.includes('.') || val.includes(',')) e.preventDefault();
  }
}

// ── Validation helpers ────────────────────────────────────────
function setFieldError(inputEl, msg) {
  inputEl.classList.add('input-error');
  let errEl = inputEl.closest('.input-group, .setting-item')?.querySelector('.field-error');
  if (!errEl) {
    errEl = document.createElement('div');
    errEl.className = 'field-error';
    inputEl.closest('.input-wrap') ? inputEl.closest('.input-wrap').after(errEl)
                                   : inputEl.after(errEl);
  }
  errEl.textContent = msg;
}

function clearFieldError(inputEl) {
  inputEl.classList.remove('input-error');
  const container = inputEl.closest('.input-group, .setting-item');
  if (container) {
    container.querySelectorAll('.field-error').forEach(e => e.remove());
  }
}

function clearAllErrors() {
  document.querySelectorAll('.input-error').forEach(el => el.classList.remove('input-error'));
  document.querySelectorAll('.field-error').forEach(el => el.remove());
}

// ── Init ──────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  // Apply theme immediately (avoids flash)
  applyTheme(currentTheme);

  // Theme toggle
  const themeBtn = document.getElementById('theme-toggle');
  if (themeBtn) themeBtn.addEventListener('click', toggleTheme);

  // Language selector
  const langSel = document.getElementById('lang-select');
  if (langSel) {
    langSel.addEventListener('change', e => applyLang(e.target.value));
  }

  // Apply language (after DOM ready)
  applyLang(currentLang);

  checkCookieConsent();
  updateOnline();

  // Add keydown validators to all number-like inputs
  document.querySelectorAll('input[inputmode="decimal"], input[data-numeric]').forEach(inp => {
    inp.addEventListener('keydown', numericKeydown);
    inp.addEventListener('input', () => {
      // Replace comma with dot live
      const pos = inp.selectionStart;
      inp.value = inp.value.replace(/,/g, '.').replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1');
      try { inp.setSelectionRange(pos, pos); } catch(e) {}
      clearFieldError(inp);
    });
  });

  // Service Worker
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('./sw.js').catch(() => {});
  }
});
