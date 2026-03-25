/* ============================================================
   app.js v5 — theme · i18n · cookie · pwa · input utils
   ============================================================ */

const LANGS = {
  ru: {
    nav_calc:'Калькулятор', nav_about:'О расчёте', nav_faq:'FAQ',
    calc_title:'Расчёт дозы',
    label_glucose:'Глюкоза сейчас', label_carbs:'Углеводы в еде',
    label_target:'Целевая глюкоза', label_icr:'ICR', label_isf:'ISF',
    hint_icr:'г углеводов / 1 ед.',
    hint_isf_mmol:'ммоль/л / 1 ед.', hint_isf_mgdl:'мг/дл / 1 ед.',
    hint_target_mmol:'ммоль/л', hint_target_mgdl:'мг/дл',
    settings_label:'Параметры (задайте с врачом)',
    inputs_label:'Данные для расчёта',
    btn_calc:'Рассчитать дозу →', btn_reset:'Сбросить всё',
    btn_history:'История расчётов',
    history_title:'История', history_clear:'Очистить',
    history_empty:'История пуста', history_max:'Хранится не более 20 записей',
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
    err_required:'Обязательное поле', err_zero:'Значение должно быть больше 0', err_invalid:'Введите корректное число',
    unit_mmol:'ммоль/л', unit_mgdl:'мг/дл',
    ph_glucose_mmol:'e.g. 5.5', ph_glucose_mgdl:'e.g. 99',
    ph_carbs:'0', ph_icr:'8 – 20',
    ph_isf_mmol:'1.5 – 4.0', ph_isf_mgdl:'27 – 72',
    ph_target_mmol:'5.0 – 7.0', ph_target_mgdl:'90 – 126',
    // about page
    about_title:'Как рассчитывается доза инсулина',
    about_date:'Информационная статья · 2026',
    about_h_formula:'Формула расчёта',
    about_p_formula:'Расчёт болюсной дозы инсулина состоит из двух частей:',
    about_li_meal:'<strong>Доза на еду</strong> = Углеводы (г) ÷ ICR',
    about_li_corr:'<strong>Коррекционная доза</strong> = (Текущая глюкоза − Целевая) ÷ ISF',
    about_li_total:'<strong>Итоговая доза</strong> = Доза на еду + Коррекционная доза',
    about_h_icr:'Что такое ICR',
    about_p_icr1:'<strong>ICR (Insulin-to-Carb Ratio)</strong> — инсулино-углеводный коэффициент. Показывает, сколько граммов углеводов «покрывает» одна единица инсулина. Например, ICR = 12 означает, что 1 ед. инсулина необходима на каждые 12 г углеводов.',
    about_p_icr2:'ICR подбирается индивидуально эндокринологом и может различаться в зависимости от времени суток.',
    about_h_isf:'Что такое ISF',
    about_p_isf:'<strong>ISF (Insulin Sensitivity Factor)</strong> — фактор чувствительности к инсулину. Показывает, насколько снизится уровень глюкозы при введении 1 единицы инсулина. ISF = 2.5 ммоль/л означает снижение на 2.5 ммоль/л.',
    about_h_target:'Целевой уровень глюкозы',
    about_p_target:'Для взрослых с диабетом 1 типа обычно <strong>5.0–7.0 ммоль/л</strong>. Точное значение определяет врач.',
    about_h_norms:'Нормы уровня глюкозы',
    about_li_low:'<strong>Ниже 3.9 ммоль/л</strong> — гипогликемия',
    about_li_ok:'<strong>3.9 – 7.8 ммоль/л</strong> — норма',
    about_li_high:'<strong>7.8 – 11.0 ммоль/л</strong> — повышенный',
    about_li_vhigh:'<strong>Выше 11.0 ммоль/л</strong> — гипергликемия',
    about_btn:'Перейти к калькулятору →',
    // faq page
    faq_title:'FAQ', faq_date:'Часто задаваемые вопросы · 2026',
    faq_warn_title:'⚠️ Важные предупреждения',
    faq_warn_body:'Расчёт дозы инсулина — сложный медицинский процесс. Данный калькулятор предназначен <strong>только для информационных целей</strong> и не заменяет консультацию врача.',
    faq_w1:'Всегда проверяйте рассчитанную дозу перед введением',
    faq_w2:'Учитывайте активный инсулин (IOB) от предыдущих введений',
    faq_w3:'Физическая активность меняет чувствительность к инсулину',
    faq_w4:'При болезни или стрессе коэффициенты могут меняться',
    faq_w5:'При признаках гипогликемии — немедленно примите быстрые углеводы',
    faq_w6:'Никогда не вводите инсулин без измерения уровня глюкозы',
    faq_q1:'Что такое ICR и как его узнать?',
    faq_a1:'<strong>ICR (Insulin-to-Carb Ratio)</strong> — инсулино-углеводный коэффициент. Показывает, сколько граммов углеводов покрывает 1 единица инсулина. Например, ICR = 12 означает: 1 ед. на каждые 12 г углеводов.<br><br>ICR подбирается эндокринологом индивидуально. Типичные значения — от 8 до 20. Не меняйте ICR без консультации с врачом.',
    faq_q2:'Что такое ISF и почему он важен?',
    faq_a2:'<strong>ISF (Insulin Sensitivity Factor)</strong> — фактор чувствительности к инсулину. Показывает, насколько снизится глюкоза при введении 1 единицы инсулина. ISF меняется в зависимости от времени суток, физической активности и других факторов.',
    faq_q3:'Что такое целевой уровень глюкозы?',
    faq_a3:'Целевой уровень — значение глюкозы, к которому стремится коррекционная доза. Обычно для взрослых с СД1 это <strong>5.0–7.0 ммоль/л</strong>. Ваш целевой уровень определяет эндокринолог.',
    faq_q4:'Почему доза округляется до 0.5?',
    faq_a4:'Большинство инсулиновых шприц-ручек позволяют вводить дозу с шагом 0.5 или 1 единица. Округление до 0.5 ед. — разумный компромисс между точностью и техническими возможностями устройств.',
    faq_q5:'Нормы уровня глюкозы крови',
    faq_a5:'<ul><li><strong>Ниже 3.9 ммоль/л</strong> — гипогликемия, требует немедленных действий</li><li><strong>3.9–7.8 ммоль/л</strong> — норма</li><li><strong>7.8–11.0 ммоль/л</strong> — повышенный уровень</li><li><strong>Выше 11.0 ммоль/л</strong> — гипергликемия</li></ul>',
    faq_q6:'Почему расчёт показывает 0 или отрицательное значение?',
    faq_a6:'Это происходит когда глюкоза уже ниже целевого уровня. Коррекционная доза отрицательная. Инсулин на коррекцию не нужен — уточните с врачом.',
    faq_q7:'Как часто нужно пересматривать ICR и ISF?',
    faq_a7:'Каждые <strong>3–6 месяцев</strong>, а также при значительном изменении веса, режима питания или активности.',
    faq_q8:'Работает ли приложение без интернета?',
    faq_a8:'Да. При первом открытии приложение кешируется на устройстве и работает полностью офлайн. История хранится локально.',
    faq_q9:'Безопасно ли использовать этот калькулятор?',
    faq_a9:'Калькулятор реализует стандартные формулы расчёта болюса. <strong>Однако он не учитывает</strong> активный инсулин (IOB), гликемический индекс продуктов, влияние физической нагрузки и болезней. Используйте как ориентир.',
    faq_btn:'Перейти к калькулятору →',
    faq_regulatory:'⚠️ Данное приложение не является сертифицированным медицинским устройством и не одобрено ни одним регуляторным органом (FDA, EMA или аналогичным).',

    // profiles & presets
    profile_label:'Профиль', profile_morning:'☀️ Утро', profile_day:'🌤 День', profile_evening:'🌙 Вечер',
    profile_edit_title:'Настройка профиля', profile_save:'Сохранить', profile_cancel:'Отмена', profile_reset:'Сбросить к умолчаниям',
    preset_label:'Углеводы', preset_add:'+ Добавить', preset_edit_title:'Пресет еды',
    preset_name_ph:'Название (напр. Завтрак)', preset_carbs_ph:'Углеводы (г)',
    preset_save:'Сохранить', preset_cancel:'Отмена', preset_delete:'Удалить',
    preset_breakfast:'Завтрак', preset_lunch:'Обед', preset_dinner:'Ужин',
  },

  en: {
    nav_calc:'Calculator', nav_about:'How it works', nav_faq:'FAQ',
    calc_title:'Dose Calculator',
    label_glucose:'Current glucose', label_carbs:'Carbohydrates in meal',
    label_target:'Target glucose', label_icr:'ICR', label_isf:'ISF',
    hint_icr:'g carbs / 1 unit',
    hint_isf_mmol:'mmol/L / 1 unit', hint_isf_mgdl:'mg/dL / 1 unit',
    hint_target_mmol:'mmol/L', hint_target_mgdl:'mg/dL',
    settings_label:'Parameters (set with your doctor)',
    inputs_label:'Calculation data',
    btn_calc:'Calculate dose →', btn_reset:'Reset all',
    btn_history:'Calculation history',
    history_title:'History', history_clear:'Clear',
    history_empty:'No history yet', history_max:'Stores up to 20 entries',
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
    err_required:'Required field', err_zero:'Value must be greater than 0', err_invalid:'Enter a valid number',
    unit_mmol:'mmol/L', unit_mgdl:'mg/dL',
    ph_glucose_mmol:'e.g. 5.5', ph_glucose_mgdl:'e.g. 99',
    ph_carbs:'0', ph_icr:'8 – 20',
    ph_isf_mmol:'1.5 – 4.0', ph_isf_mgdl:'27 – 72',
    ph_target_mmol:'5.0 – 7.0', ph_target_mgdl:'90 – 126',
    about_title:'How insulin dose is calculated',
    about_date:'Informational article · 2026',
    about_h_formula:'Calculation formula',
    about_p_formula:'The bolus insulin dose consists of two parts:',
    about_li_meal:'<strong>Meal dose</strong> = Carbohydrates (g) ÷ ICR',
    about_li_corr:'<strong>Correction dose</strong> = (Current glucose − Target) ÷ ISF',
    about_li_total:'<strong>Total dose</strong> = Meal dose + Correction dose',
    about_h_icr:'What is ICR',
    about_p_icr1:'<strong>ICR (Insulin-to-Carb Ratio)</strong> shows how many grams of carbohydrates one unit of insulin covers. For example, ICR = 12 means 1 unit covers every 12 g of carbs.',
    about_p_icr2:'ICR is set individually by your endocrinologist and may vary by time of day.',
    about_h_isf:'What is ISF',
    about_p_isf:'<strong>ISF (Insulin Sensitivity Factor)</strong> shows how much glucose drops per 1 unit of insulin. ISF = 45 mg/dL means 1 unit lowers glucose by 45 mg/dL.',
    about_h_target:'Target glucose level',
    about_p_target:'For adults with type 1 diabetes, typically <strong>90–126 mg/dL (5.0–7.0 mmol/L)</strong>. Your target is set by your doctor.',
    about_h_norms:'Blood glucose reference ranges',
    about_li_low:'<strong>Below 70 mg/dL (3.9 mmol/L)</strong> — hypoglycemia',
    about_li_ok:'<strong>70–140 mg/dL (3.9–7.8 mmol/L)</strong> — normal range',
    about_li_high:'<strong>140–198 mg/dL (7.8–11.0 mmol/L)</strong> — elevated',
    about_li_vhigh:'<strong>Above 198 mg/dL (11.0 mmol/L)</strong> — hyperglycemia',
    about_btn:'Go to calculator →',
    faq_title:'FAQ', faq_date:'Frequently asked questions · 2026',
    faq_warn_title:'⚠️ Important warnings',
    faq_warn_body:'Insulin dosing is a complex medical process. This calculator is <strong>for informational purposes only</strong> and does not replace professional medical advice.',
    faq_w1:'Always verify the calculated dose before injecting',
    faq_w2:'Account for active insulin (IOB) from previous doses',
    faq_w3:'Physical activity affects insulin sensitivity',
    faq_w4:'Illness or stress may change your ratios',
    faq_w5:'If you experience hypoglycemia — take fast-acting carbs immediately',
    faq_w6:'Never inject insulin without measuring glucose first',
    faq_q1:'What is ICR and how do I find mine?',
    faq_a1:'<strong>ICR (Insulin-to-Carb Ratio)</strong> shows how many grams of carbs 1 unit of insulin covers. For example, ICR = 12 means 1 unit per every 12 g carbs.<br><br>ICR is set individually by your endocrinologist. Typical range is 8–20. Never change ICR without consulting your doctor.',
    faq_q2:'What is ISF and why does it matter?',
    faq_a2:'<strong>ISF (Insulin Sensitivity Factor)</strong> shows how much your glucose drops per 1 unit of insulin. ISF varies by time of day, physical activity, and other factors.',
    faq_q3:'What is the target glucose level?',
    faq_a3:'The target is the glucose value the correction dose aims for. For most adults with T1D, this is <strong>90–126 mg/dL (5.0–7.0 mmol/L)</strong>. Your endocrinologist sets your personal target.',
    faq_q4:'Why is the dose rounded to 0.5?',
    faq_a4:'Most insulin pens deliver in 0.5 or 1-unit increments. Rounding to 0.5 u. is a practical compromise between mathematical precision and device limitations.',
    faq_q5:'Blood glucose reference ranges',
    faq_a5:'<ul><li><strong>Below 70 mg/dL</strong> — hypoglycemia, requires immediate action</li><li><strong>70–140 mg/dL</strong> — normal range</li><li><strong>140–198 mg/dL</strong> — elevated</li><li><strong>Above 198 mg/dL</strong> — hyperglycemia</li></ul>',
    faq_q6:'Why does the calculator show 0 or a negative dose?',
    faq_a6:'This happens when glucose is already below target. The correction dose is negative, offsetting the meal dose. No correction insulin is needed — consult your doctor.',
    faq_q7:'How often should ICR and ISF be reviewed?',
    faq_a7:'Every <strong>3–6 months</strong>, and also after significant changes in weight, diet, or activity level.',
    faq_q8:'Does the app work offline?',
    faq_a8:'Yes. On first load the app is cached by the service worker and works fully offline. History is stored locally on your device.',
    faq_q9:'Is this calculator safe to use?',
    faq_a9:'The calculator uses standard bolus formulas. <strong>However, it does not account for</strong> active insulin (IOB), glycemic index of foods, or the effects of exercise and illness. Use as a reference only.',
    faq_btn:'Go to calculator →',
    faq_regulatory:'⚠️ This application is not a certified medical device and has not been approved by any regulatory authority (FDA, EMA, or equivalent).',

    profile_label:'Profile', profile_morning:'☀️ Morning', profile_day:'🌤 Day', profile_evening:'🌙 Evening',
    profile_edit_title:'Edit profile', profile_save:'Save', profile_cancel:'Cancel', profile_reset:'Reset to defaults',
    preset_label:'Carbs', preset_add:'+ Add', preset_edit_title:'Meal preset',
    preset_name_ph:'Name (e.g. Breakfast)', preset_carbs_ph:'Carbohydrates (g)',
    preset_save:'Save', preset_cancel:'Cancel', preset_delete:'Delete',
    preset_breakfast:'Breakfast', preset_lunch:'Lunch', preset_dinner:'Dinner',
  },

  es: {
    nav_calc:'Calculadora', nav_about:'Cómo funciona', nav_faq:'FAQ',
    calc_title:'Cálculo de dosis',
    label_glucose:'Glucosa actual', label_carbs:'Carbohidratos en la comida',
    label_target:'Glucosa objetivo', label_icr:'ICR', label_isf:'ISF',
    hint_icr:'g carbohidratos / 1 u.',
    hint_isf_mmol:'mmol/L / 1 u.', hint_isf_mgdl:'mg/dL / 1 u.',
    hint_target_mmol:'mmol/L', hint_target_mgdl:'mg/dL',
    settings_label:'Parámetros (defina con su médico)',
    inputs_label:'Datos para el cálculo',
    btn_calc:'Calcular dosis →', btn_reset:'Reiniciar todo',
    btn_history:'Historial',
    history_title:'Historial', history_clear:'Borrar',
    history_empty:'Sin historial', history_max:'Máximo 20 entradas almacenadas',
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
    err_required:'Campo obligatorio', err_zero:'El valor debe ser mayor que 0', err_invalid:'Ingrese un número válido',
    unit_mmol:'mmol/L', unit_mgdl:'mg/dL',
    ph_glucose_mmol:'e.g. 5.5', ph_glucose_mgdl:'e.g. 99',
    ph_carbs:'0', ph_icr:'8 – 20',
    ph_isf_mmol:'1.5 – 4.0', ph_isf_mgdl:'27 – 72',
    ph_target_mmol:'5.0 – 7.0', ph_target_mgdl:'90 – 126',
    about_title:'Cómo se calcula la dosis de insulina',
    about_date:'Artículo informativo · 2026',
    about_h_formula:'Fórmula de cálculo',
    about_p_formula:'El bolo de insulina se compone de dos partes:',
    about_li_meal:'<strong>Dosis por comida</strong> = Carbohidratos (g) ÷ ICR',
    about_li_corr:'<strong>Dosis de corrección</strong> = (Glucosa actual − Objetivo) ÷ ISF',
    about_li_total:'<strong>Dosis total</strong> = Dosis por comida + Corrección',
    about_h_icr:'¿Qué es el ICR?',
    about_p_icr1:'<strong>ICR</strong> indica cuántos gramos de carbohidratos cubre 1 unidad de insulina. Por ejemplo, ICR = 12 significa 1 unidad por cada 12 g de carbohidratos.',
    about_p_icr2:'El ICR lo determina su endocrinólogo individualmente y puede variar según la hora del día.',
    about_h_isf:'¿Qué es el ISF?',
    about_p_isf:'<strong>ISF</strong> muestra cuánto baja la glucosa por 1 unidad de insulina. ISF = 2.5 mmol/L significa una bajada de 2.5 mmol/L.',
    about_h_target:'Glucosa objetivo',
    about_p_target:'Para adultos con DM1, normalmente <strong>5.0–7.0 mmol/L</strong>. Su médico establece su objetivo personal.',
    about_h_norms:'Rangos de glucosa en sangre',
    about_li_low:'<strong>Por debajo de 3.9 mmol/L</strong> — hipoglucemia',
    about_li_ok:'<strong>3.9–7.8 mmol/L</strong> — rango normal',
    about_li_high:'<strong>7.8–11.0 mmol/L</strong> — elevado',
    about_li_vhigh:'<strong>Por encima de 11.0 mmol/L</strong> — hiperglucemia',
    about_btn:'Ir a la calculadora →',
    faq_title:'FAQ', faq_date:'Preguntas frecuentes · 2026',
    faq_warn_title:'⚠️ Advertencias importantes',
    faq_warn_body:'El cálculo de dosis de insulina es un proceso médico complejo. Esta calculadora es <strong>solo para fines informativos</strong>.',
    faq_w1:'Verifique siempre la dosis antes de inyectar',
    faq_w2:'Tenga en cuenta la insulina activa (IOB)',
    faq_w3:'La actividad física afecta la sensibilidad a la insulina',
    faq_w4:'La enfermedad o el estrés pueden cambiar sus ratios',
    faq_w5:'En caso de hipoglucemia — tome carbohidratos rápidos de inmediato',
    faq_w6:'Nunca inyecte insulina sin medir la glucosa',
    faq_q1:'¿Qué es el ICR?', faq_a1:'El ICR indica cuántos gramos de carbohidratos cubre 1 unidad de insulina. Su endocrinólogo lo establece individualmente.',
    faq_q2:'¿Qué es el ISF?', faq_a2:'El ISF muestra cuánto baja la glucosa por 1 unidad de insulina. Varía según la hora del día y la actividad.',
    faq_q3:'¿Qué es la glucosa objetivo?', faq_a3:'Es el valor al que apunta la dosis de corrección. Normalmente <strong>5.0–7.0 mmol/L</strong> para adultos con DM1.',
    faq_q4:'¿Por qué se redondea a 0.5?', faq_a4:'La mayoría de los bolígrafos de insulina dosifican en incrementos de 0.5 o 1 unidad.',
    faq_q5:'Rangos de referencia de glucosa',
    faq_a5:'<ul><li><strong>Por debajo de 3.9 mmol/L</strong> — hipoglucemia</li><li><strong>3.9–7.8 mmol/L</strong> — normal</li><li><strong>7.8–11.0 mmol/L</strong> — elevado</li><li><strong>Por encima de 11.0 mmol/L</strong> — hiperglucemia</li></ul>',
    faq_q6:'¿Por qué aparece 0 o negativo?', faq_a6:'Ocurre cuando la glucosa ya está por debajo del objetivo. No se necesita corrección.',
    faq_q7:'¿Con qué frecuencia revisar ICR e ISF?', faq_a7:'Cada <strong>3–6 meses</strong> o tras cambios importantes en peso, dieta o actividad.',
    faq_q8:'¿Funciona sin internet?', faq_a8:'Sí. Se almacena en caché y funciona completamente sin conexión.',
    faq_q9:'¿Es seguro usar esta calculadora?', faq_a9:'Usa fórmulas estándar de bolo. <strong>No tiene en cuenta</strong> la insulina activa (IOB), el índice glucémico ni el ejercicio. Úsela como referencia.',
    faq_btn:'Ir a la calculadora →',
    faq_regulatory:'⚠️ Esta aplicación no es un dispositivo médico certificado y no ha sido aprobada por ninguna autoridad reguladora (FDA, EMA o equivalente).',

    profile_label:'Perfil', profile_morning:'☀️ Mañana', profile_day:'🌤 Día', profile_evening:'🌙 Noche',
    profile_edit_title:'Editar perfil', profile_save:'Guardar', profile_cancel:'Cancelar', profile_reset:'Restablecer',
    preset_label:'Carbohidratos', preset_add:'+ Agregar', preset_edit_title:'Preset de comida',
    preset_name_ph:'Nombre (p.ej. Desayuno)', preset_carbs_ph:'Carbohidratos (g)',
    preset_save:'Guardar', preset_cancel:'Cancelar', preset_delete:'Eliminar',
    preset_breakfast:'Desayuno', preset_lunch:'Almuerzo', preset_dinner:'Cena',
  },

  de: {
    nav_calc:'Rechner', nav_about:'Funktionsweise', nav_faq:'FAQ',
    calc_title:'Dosisrechner',
    label_glucose:'Aktueller Blutzucker', label_carbs:'Kohlenhydrate in der Mahlzeit',
    label_target:'Ziel-Blutzucker', label_icr:'ICR', label_isf:'ISF',
    hint_icr:'g KH / 1 IE',
    hint_isf_mmol:'mmol/L / 1 IE', hint_isf_mgdl:'mg/dL / 1 IE',
    hint_target_mmol:'mmol/L', hint_target_mgdl:'mg/dL',
    settings_label:'Parameter (mit Ihrem Arzt festlegen)',
    inputs_label:'Berechnungsdaten',
    btn_calc:'Dosis berechnen →', btn_reset:'Alles zurücksetzen',
    btn_history:'Berechnungsverlauf',
    history_title:'Verlauf', history_clear:'Löschen',
    history_empty:'Kein Verlauf', history_max:'Speichert bis zu 20 Einträge',
    result_label:'Empfohlene Dosis', result_unit:'Einheiten Insulin',
    breakdown_carbs:'Mahlzeitdosis', breakdown_corr:'Korrekturdosis',
    breakdown_exact:'Exakte Summe', breakdown_round:'Auf 0.5 gerundet',
    no_dose_hypo:'⚠️ Niedriger Blutzucker — kein Insulin. Nehmen Sie schnelle KH.',
    no_dose_zero:'Gesamtdosis ≤ 0 — keine Korrektur nötig. Mit Arzt absprechen.',
    disclaimer:'⚠️ <strong>Nur zur Information.</strong> Insulindosen immer mit dem Arzt bestätigen.',
    offline_msg:'📡 Offline — App funktioniert ohne Internet',
    install_text:'📲 App zum Startbildschirm hinzufügen',
    install_btn:'Installieren',
    cookie_text:'Wir verwenden Cookies für Analysen und Werbung.',
    cookie_accept:'Akzeptieren', cookie_decline:'Nur notwendige',
    footer_copy:'© 2026 insulin-calc. Nur zu Informationszwecken.',
    confirm_history:'Verlauf löschen?',
    err_required:'Pflichtfeld', err_zero:'Wert muss größer als 0 sein', err_invalid:'Gültige Zahl eingeben',
    unit_mmol:'mmol/L', unit_mgdl:'mg/dL',
    ph_glucose_mmol:'z.B. 5,5', ph_glucose_mgdl:'e.g. 99',
    ph_carbs:'0', ph_icr:'8 – 20',
    ph_isf_mmol:'1,5 – 4,0', ph_isf_mgdl:'27 – 72',
    ph_target_mmol:'5,0 – 7,0', ph_target_mgdl:'90 – 126',
    about_title:'Wie die Insulindosis berechnet wird',
    about_date:'Informationsartikel · 2026',
    about_h_formula:'Berechnungsformel',
    about_p_formula:'Der Bolus setzt sich aus zwei Teilen zusammen:',
    about_li_meal:'<strong>Mahlzeitdosis</strong> = Kohlenhydrate (g) ÷ ICR',
    about_li_corr:'<strong>Korrekturdosis</strong> = (Aktueller BZ − Zielwert) ÷ ISF',
    about_li_total:'<strong>Gesamtdosis</strong> = Mahlzeitdosis + Korrekturdosis',
    about_h_icr:'Was ist der ICR?',
    about_p_icr1:'<strong>ICR</strong> gibt an, wie viele Gramm Kohlenhydrate 1 Einheit Insulin abdeckt. ICR = 12 bedeutet: 1 IE pro 12 g KH.',
    about_p_icr2:'Der ICR wird individuell vom Endokrinologen festgelegt und kann je nach Tageszeit variieren.',
    about_h_isf:'Was ist der ISF?',
    about_p_isf:'<strong>ISF</strong> zeigt, um wie viel mmol/L der Blutzucker pro 1 IE Insulin sinkt.',
    about_h_target:'Ziel-Blutzucker',
    about_p_target:'Für Erwachsene mit Typ-1-Diabetes typischerweise <strong>5,0–7,0 mmol/L</strong>. Ihr Arzt legt Ihren Zielwert fest.',
    about_h_norms:'Blutzucker-Referenzwerte',
    about_li_low:'<strong>Unter 3,9 mmol/L</strong> — Hypoglykämie',
    about_li_ok:'<strong>3,9–7,8 mmol/L</strong> — Normalbereich',
    about_li_high:'<strong>7,8–11,0 mmol/L</strong> — Erhöht',
    about_li_vhigh:'<strong>Über 11,0 mmol/L</strong> — Hyperglykämie',
    about_btn:'Zum Rechner →',
    faq_title:'FAQ', faq_date:'Häufige Fragen · 2026',
    faq_warn_title:'⚠️ Wichtige Hinweise',
    faq_warn_body:'Die Insulindosierung ist ein komplexer medizinischer Prozess. Dieser Rechner dient <strong>nur zu Informationszwecken</strong>.',
    faq_w1:'Überprüfen Sie die Dosis stets vor der Injektion',
    faq_w2:'Berücksichtigen Sie aktives Insulin (IOB)',
    faq_w3:'Körperliche Aktivität beeinflusst die Insulinempfindlichkeit',
    faq_w4:'Krankheit oder Stress können Ihre Faktoren verändern',
    faq_w5:'Bei Hypoglykämie — sofort schnell wirkende KH nehmen',
    faq_w6:'Niemals Insulin injizieren ohne vorherige Blutzuckermessung',
    faq_q1:'Was ist der ICR?', faq_a1:'Der ICR gibt an, wie viele Gramm KH 1 IE Insulin abdeckt. Wird individuell vom Endokrinologen festgelegt.',
    faq_q2:'Was ist der ISF?', faq_a2:'Der ISF zeigt den BZ-Abfall pro 1 IE Insulin. Variiert je nach Tageszeit und Aktivität.',
    faq_q3:'Was ist der Ziel-Blutzucker?', faq_a3:'Der Zielwert, auf den die Korrekturdosis abzielt. Für Erwachsene mit T1D typisch <strong>5,0–7,0 mmol/L</strong>.',
    faq_q4:'Warum wird auf 0,5 gerundet?', faq_a4:'Die meisten Insulinpens dosieren in 0,5- oder 1-IE-Schritten.',
    faq_q5:'Blutzucker-Referenzwerte',
    faq_a5:'<ul><li><strong>Unter 3,9 mmol/L</strong> — Hypoglykämie</li><li><strong>3,9–7,8 mmol/L</strong> — Normal</li><li><strong>7,8–11,0 mmol/L</strong> — Erhöht</li><li><strong>Über 11,0 mmol/L</strong> — Hyperglykämie</li></ul>',
    faq_q6:'Warum erscheint 0 oder ein negativer Wert?', faq_a6:'Wenn der BZ bereits unter dem Zielwert liegt, ist die Korrekturdosis negativ. Keine Korrektur erforderlich.',
    faq_q7:'Wie oft ICR und ISF überprüfen?', faq_a7:'Alle <strong>3–6 Monate</strong> oder nach wesentlichen Änderungen in Gewicht, Ernährung oder Aktivität.',
    faq_q8:'Funktioniert die App offline?', faq_a8:'Ja. Beim ersten Laden wird die App gecacht und funktioniert vollständig offline.',
    faq_q9:'Ist der Rechner sicher?', faq_a9:'Er verwendet Standardformeln. <strong>Nicht berücksichtigt</strong> werden aktives Insulin (IOB), glykämischer Index und Sport. Als Richtwert verwenden.',
    faq_btn:'Zum Rechner →',
    faq_regulatory:'⚠️ Diese Anwendung ist kein zugelassenes Medizinprodukt und wurde von keiner Aufsichtsbehörde (FDA, EMA oder gleichwertig) genehmigt.',

    profile_label:'Profil', profile_morning:'☀️ Morgen', profile_day:'🌤 Tag', profile_evening:'🌙 Abend',
    profile_edit_title:'Profil bearbeiten', profile_save:'Speichern', profile_cancel:'Abbrechen', profile_reset:'Zurücksetzen',
    preset_label:'KH', preset_add:'+ Hinzufügen', preset_edit_title:'Mahlzeit-Preset',
    preset_name_ph:'Name (z.B. Frühstück)', preset_carbs_ph:'Kohlenhydrate (g)',
    preset_save:'Speichern', preset_cancel:'Abbrechen', preset_delete:'Löschen',
    preset_breakfast:'Frühstück', preset_lunch:'Mittagessen', preset_dinner:'Abendessen',
  },

  fr: {
    nav_calc:'Calculateur', nav_about:'Comment ça marche', nav_faq:'FAQ',
    calc_title:'Calcul de dose',
    label_glucose:'Glycémie actuelle', label_carbs:'Glucides dans le repas',
    label_target:'Glycémie cible', label_icr:'ICR', label_isf:'ISF',
    hint_icr:'g glucides / 1 unité',
    hint_isf_mmol:'mmol/L / 1 unité', hint_isf_mgdl:'mg/dL / 1 unité',
    hint_target_mmol:'mmol/L', hint_target_mgdl:'mg/dL',
    settings_label:'Paramètres (à définir avec votre médecin)',
    inputs_label:'Données pour le calcul',
    btn_calc:'Calculer la dose →', btn_reset:'Tout réinitialiser',
    btn_history:'Historique',
    history_title:'Historique', history_clear:'Effacer',
    history_empty:'Aucun historique', history_max:"Stocke jusqu'à 20 entrées",
    result_label:'Dose recommandée', result_unit:"unités d'insuline",
    breakdown_carbs:'Dose repas', breakdown_corr:'Correction',
    breakdown_exact:'Total exact', breakdown_round:'Arrondi à 0.5',
    no_dose_hypo:"⚠️ Glycémie basse — pas d'insuline. Prenez des glucides rapides.",
    no_dose_zero:'Dose totale ≤ 0 — pas de correction. Consultez votre médecin.',
    disclaimer:"⚠️ <strong>À titre indicatif seulement.</strong> Confirmez toujours les doses avec votre médecin.",
    offline_msg:"📡 Hors ligne — l'app fonctionne sans internet",
    install_text:"📲 Installer sur l'écran d'accueil",
    install_btn:'Installer',
    cookie_text:"Nous utilisons des cookies pour l'analyse et la publicité.",
    cookie_accept:'Accepter', cookie_decline:'Essentiels uniquement',
    footer_copy:'© 2026 insulin-calc. À titre informatif uniquement.',
    confirm_history:"Effacer l'historique?",
    err_required:'Champ obligatoire', err_zero:'La valeur doit être supérieure à 0', err_invalid:'Entrez un nombre valide',
    unit_mmol:'mmol/L', unit_mgdl:'mg/dL',
    ph_glucose_mmol:'e.g. 5.5', ph_glucose_mgdl:'e.g. 99',
    ph_carbs:'0', ph_icr:'8 – 20',
    ph_isf_mmol:'1.5 – 4.0', ph_isf_mgdl:'27 – 72',
    ph_target_mmol:'5.0 – 7.0', ph_target_mgdl:'90 – 126',
    about_title:'Comment la dose d\'insuline est calculée',
    about_date:'Article informatif · 2026',
    about_h_formula:'Formule de calcul',
    about_p_formula:'Le bolus d\'insuline se compose de deux parties :',
    about_li_meal:'<strong>Dose repas</strong> = Glucides (g) ÷ ICR',
    about_li_corr:'<strong>Dose de correction</strong> = (Glycémie actuelle − Cible) ÷ ISF',
    about_li_total:'<strong>Dose totale</strong> = Dose repas + Correction',
    about_h_icr:'Qu\'est-ce que le ICR ?',
    about_p_icr1:'<strong>ICR</strong> indique combien de grammes de glucides couvre 1 unité d\'insuline.',
    about_p_icr2:'Le ICR est fixé individuellement par votre endocrinologue.',
    about_h_isf:'Qu\'est-ce que le ISF ?',
    about_p_isf:'<strong>ISF</strong> montre de combien la glycémie baisse par 1 unité d\'insuline.',
    about_h_target:'Glycémie cible',
    about_p_target:'Pour les adultes avec DT1, généralement <strong>5,0–7,0 mmol/L</strong>.',
    about_h_norms:'Valeurs de référence de la glycémie',
    about_li_low:'<strong>En dessous de 3,9 mmol/L</strong> — hypoglycémie',
    about_li_ok:'<strong>3,9–7,8 mmol/L</strong> — plage normale',
    about_li_high:'<strong>7,8–11,0 mmol/L</strong> — élevé',
    about_li_vhigh:'<strong>Au-dessus de 11,0 mmol/L</strong> — hyperglycémie',
    about_btn:'Aller au calculateur →',
    faq_title:'FAQ', faq_date:'Questions fréquentes · 2026',
    faq_warn_title:'⚠️ Avertissements importants',
    faq_warn_body:"Le calcul de la dose d'insuline est un processus médical complexe. Cette calculatrice est <strong>uniquement à titre informatif</strong>.",
    faq_w1:'Vérifiez toujours la dose avant d\'injecter',
    faq_w2:"Tenez compte de l'insuline active (IOB)",
    faq_w3:"L'activité physique affecte la sensibilité à l'insuline",
    faq_w4:'La maladie ou le stress peuvent modifier vos ratios',
    faq_w5:'En cas d\'hypoglycémie — prenez des glucides rapides immédiatement',
    faq_w6:'Ne jamais injecter sans mesurer la glycémie',
    faq_q1:'Qu\'est-ce que le ICR ?', faq_a1:'Le ICR indique combien de grammes de glucides couvre 1 unité d\'insuline. Fixé par votre endocrinologue.',
    faq_q2:'Qu\'est-ce que le ISF ?', faq_a2:'Le ISF montre la baisse de glycémie par 1 unité d\'insuline.',
    faq_q3:'Qu\'est-ce que la glycémie cible ?', faq_a3:'La valeur visée par la dose de correction. Généralement <strong>5,0–7,0 mmol/L</strong>.',
    faq_q4:'Pourquoi arrondir à 0,5 ?', faq_a4:'La plupart des stylos à insuline dosent par incréments de 0,5 ou 1 unité.',
    faq_q5:'Valeurs de référence de la glycémie',
    faq_a5:'<ul><li><strong>En dessous de 3,9 mmol/L</strong> — hypoglycémie</li><li><strong>3,9–7,8 mmol/L</strong> — normal</li><li><strong>7,8–11,0 mmol/L</strong> — élevé</li><li><strong>Au-dessus de 11,0 mmol/L</strong> — hyperglycémie</li></ul>',
    faq_q6:'Pourquoi 0 ou une valeur négative ?', faq_a6:'La glycémie est déjà sous le niveau cible. Aucune correction n\'est nécessaire.',
    faq_q7:'À quelle fréquence réviser ICR et ISF ?', faq_a7:'Tous les <strong>3–6 mois</strong> ou après des changements importants.',
    faq_q8:'L\'app fonctionne-t-elle hors ligne ?', faq_a8:'Oui. Elle est mise en cache et fonctionne entièrement hors ligne.',
    faq_q9:'L\'utilisation est-elle sûre ?', faq_a9:"Utilise les formules standard. <strong>Ne tient pas compte</strong> de l'insuline active (IOB) ni du sport. À utiliser comme référence.",
    faq_btn:'Aller au calculateur →',
    faq_regulatory:'⚠️ Cette application n'est pas un dispositif médical certifié et n'a pas été approuvée par une autorité réglementaire (FDA, EMA ou équivalent).',

    profile_label:'Profil', profile_morning:'☀️ Matin', profile_day:'🌤 Journée', profile_evening:'🌙 Soir',
    profile_edit_title:'Modifier le profil', profile_save:'Enregistrer', profile_cancel:'Annuler', profile_reset:'Réinitialiser',
    preset_label:'Glucides', preset_add:'+ Ajouter', preset_edit_title:'Preset repas',
    preset_name_ph:'Nom (ex. Petit-déjeuner)', preset_carbs_ph:'Glucides (g)',
    preset_save:'Enregistrer', preset_cancel:'Annuler', preset_delete:'Supprimer',
    preset_breakfast:'Petit-déjeuner', preset_lunch:'Déjeuner', preset_dinner:'Dîner',
  },

  be: {
    nav_calc:'Калькулятар', nav_about:'Пра разлік', nav_faq:'FAQ',
    calc_title:'Разлік дозы',
    label_glucose:'Глюкоза зараз', label_carbs:'Вугляводы ў ежы',
    label_target:'Мэтавая глюкоза', label_icr:'ICR', label_isf:'ISF',
    hint_icr:'г вугляводаў / 1 ад.',
    hint_isf_mmol:'ммаль/л / 1 ад.', hint_isf_mgdl:'мг/дл / 1 ад.',
    hint_target_mmol:'ммаль/л', hint_target_mgdl:'мг/дл',
    settings_label:'Параметры (вызначце з урачом)',
    inputs_label:'Дадзеныя для разліку',
    btn_calc:'Разлічыць дозу →', btn_reset:'Скінуць усё',
    btn_history:'Гісторыя разлікаў',
    history_title:'Гісторыя', history_clear:'Ачысціць',
    history_empty:'Гісторыя пустая', history_max:'Захоўваецца не больш за 20 запісаў',
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
    err_required:'Абавязковае поле', err_zero:'Значэнне павінна быць больш за 0', err_invalid:'Увядзіце карэктны лік',
    unit_mmol:'ммаль/л', unit_mgdl:'мг/дл',
    ph_glucose_mmol:'e.g. 5.5', ph_glucose_mgdl:'e.g. 99',
    ph_carbs:'0', ph_icr:'8 – 20',
    ph_isf_mmol:'1.5 – 4.0', ph_isf_mgdl:'27 – 72',
    ph_target_mmol:'5.0 – 7.0', ph_target_mgdl:'90 – 126',
    about_title:'Як разлічваецца доза інсуліну',
    about_date:'Інфармацыйны артыкул · 2026',
    about_h_formula:'Формула разліку',
    about_p_formula:'Болюсная доза інсуліну складаецца з двух частак:',
    about_li_meal:'<strong>Доза на ежу</strong> = Вугляводы (г) ÷ ICR',
    about_li_corr:'<strong>Карэкцыйная доза</strong> = (Глюкоза − Мэта) ÷ ISF',
    about_li_total:'<strong>Выніковая доза</strong> = Доза на ежу + Карэкцыя',
    about_h_icr:'Што такое ICR',
    about_p_icr1:'<strong>ICR</strong> — колькасць грамаў вугляводаў на 1 адзінку інсуліну.',
    about_p_icr2:'ICR вызначаецца эндакрынолагам індывідуальна.',
    about_h_isf:'Што такое ISF',
    about_p_isf:'<strong>ISF</strong> — зніжэнне глюкозы пры ўвядзенні 1 адзінкі інсуліну.',
    about_h_target:'Мэтавы ўзровень глюкозы',
    about_p_target:'Звычайна для дарослых з СД1 — <strong>5.0–7.0 ммаль/л</strong>.',
    about_h_norms:'Нормы ўзроўню глюкозы',
    about_li_low:'<strong>Ніжэй 3.9 ммаль/л</strong> — гіпагліцэмія',
    about_li_ok:'<strong>3.9–7.8 ммаль/л</strong> — норма',
    about_li_high:'<strong>7.8–11.0 ммаль/л</strong> — павышаны',
    about_li_vhigh:'<strong>Вышэй 11.0 ммаль/л</strong> — гіперглікемія',
    about_btn:'Перайсці да калькулятара →',
    faq_title:'FAQ', faq_date:'Частыя пытанні · 2026',
    faq_warn_title:'⚠️ Важныя папярэджанні',
    faq_warn_body:'Разлік дозы інсуліну — складаны медыцынскі працэс. Калькулятар прызначаны <strong>толькі для інфармацыйных мэт</strong>.',
    faq_w1:'Заўсёды правярайце дозу перад увядзеннем',
    faq_w2:'Улічвайце актыўны інсулін (IOB)',
    faq_w3:'Фізічная актыўнасць мяняе адчувальнасць да інсуліну',
    faq_w4:'Пры хваробе каэфіцыенты могуць мяняцца',
    faq_w5:'Пры прыкметах гіпагліцэміі — адразу прыміце хуткія вугляводы',
    faq_w6:'Ніколі не ўводзьце інсулін без вымярэння глюкозы',
    faq_q1:'Што такое ICR?', faq_a1:'ICR — колькасць грамаў вугляводаў на 1 адзінку. Вызначаецца эндакрынолагам.',
    faq_q2:'Што такое ISF?', faq_a2:'ISF — зніжэнне глюкозы пры 1 адзінцы інсуліну.',
    faq_q3:'Што такое мэтавы ўзровень?', faq_a3:'Значэнне глюкозы, да якога імкнецца карэкцыйная доза. Звычайна <strong>5.0–7.0 ммаль/л</strong>.',
    faq_q4:'Чаму доза акругляецца да 0.5?', faq_a4:'Большасць шпрыц-ручак дазавалі з крокам 0.5 або 1 адзінка.',
    faq_q5:'Нормы ўзроўню глюкозы',
    faq_a5:'<ul><li><strong>Ніжэй 3.9 ммаль/л</strong> — гіпагліцэмія</li><li><strong>3.9–7.8 ммаль/л</strong> — норма</li><li><strong>7.8–11.0 ммаль/л</strong> — павышаны</li><li><strong>Вышэй 11.0 ммаль/л</strong> — гіперглікемія</li></ul>',
    faq_q6:'Чаму 0 або адмоўнае значэнне?', faq_a6:'Глюкоза ўжо ніжэй мэты. Карэкцыя не патрэбна.',
    faq_q7:'Як часта пераглядаць ICR і ISF?', faq_a7:'Кожныя <strong>3–6 месяцаў</strong>.',
    faq_q8:'Працуе без інтэрнэту?', faq_a8:'Так. Кэшуецца пры першым адкрыцці і працуе поўнасцю афлайн.',
    faq_q9:'Бяспечна ли выкарыстоўваць?', faq_a9:'Выкарыстоўвае стандартныя формулы. <strong>Не ўлічвае</strong> актыўны інсулін (IOB) і фізічную нагрузку.',
    faq_btn:'Перайсці да калькулятара →',
    faq_regulatory:'⚠️ Гэтае прыкладанне не з'яўляецца сертыфікаваным медыцынскім прыборам і не зацверджана ніводным рэгулятарным органам (FDA, EMA або аналагічным).',

    profile_label:'Профіль', profile_morning:'☀️ Раніца', profile_day:'🌤 Дзень', profile_evening:'🌙 Вечар',
    profile_edit_title:'Наладка профілю', profile_save:'Захаваць', profile_cancel:'Адмена', profile_reset:'Скінуць да змаўчання',
    preset_label:'Вугляводы', preset_add:'+ Дадаць', preset_edit_title:'Прэсет ежы',
    preset_name_ph:'Назва (напр. Сняданак)', preset_carbs_ph:'Вугляводы (г)',
    preset_save:'Захаваць', preset_cancel:'Адмена', preset_delete:'Выдаліць',
    preset_breakfast:'Сняданак', preset_lunch:'Абед', preset_dinner:'Вячэра',
  },

  zh: {
    nav_calc:'计算器', nav_about:'使用说明', nav_faq:'常见问题',
    calc_title:'胰岛素剂量计算',
    label_glucose:'当前血糖', label_carbs:'餐中碳水化合物',
    label_target:'目标血糖', label_icr:'ICR', label_isf:'ISF',
    hint_icr:'g 碳水 / 1单位',
    hint_isf_mmol:'mmol/L / 1单位', hint_isf_mgdl:'mg/dL / 1单位',
    hint_target_mmol:'mmol/L', hint_target_mgdl:'mg/dL',
    settings_label:'参数（与医生确认）',
    inputs_label:'计算数据',
    btn_calc:'计算剂量 →', btn_reset:'全部重置',
    btn_history:'计算历史',
    history_title:'历史记录', history_clear:'清除',
    history_empty:'暂无记录', history_max:'最多存储20条记录',
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
    err_required:'必填字段', err_zero:'数值必须大于0', err_invalid:'请输入有效数字',
    unit_mmol:'mmol/L', unit_mgdl:'mg/dL',
    ph_glucose_mmol:'e.g. 5.5', ph_glucose_mgdl:'e.g. 99',
    ph_carbs:'0', ph_icr:'8 – 20',
    ph_isf_mmol:'1.5 – 4.0', ph_isf_mgdl:'27 – 72',
    ph_target_mmol:'5.0 – 7.0', ph_target_mgdl:'90 – 126',
    about_title:'胰岛素剂量如何计算',
    about_date:'信息文章 · 2026',
    about_h_formula:'计算公式',
    about_p_formula:'大剂量胰岛素由两部分组成：',
    about_li_meal:'<strong>餐时剂量</strong> = 碳水化合物 (g) ÷ ICR',
    about_li_corr:'<strong>校正剂量</strong> = (当前血糖 − 目标血糖) ÷ ISF',
    about_li_total:'<strong>总剂量</strong> = 餐时剂量 + 校正剂量',
    about_h_icr:'什么是ICR？',
    about_p_icr1:'<strong>ICR（胰岛素碳水化合物比）</strong>表示1单位胰岛素可覆盖多少克碳水化合物。',
    about_p_icr2:'ICR由内分泌科医生个性化设定，可能因一天中的时间而有所不同。',
    about_h_isf:'什么是ISF？',
    about_p_isf:'<strong>ISF（胰岛素敏感系数）</strong>表示1单位胰岛素使血糖下降多少mmol/L。',
    about_h_target:'目标血糖水平',
    about_p_target:'1型糖尿病成人通常为 <strong>5.0–7.0 mmol/L</strong>。您的目标由医生设定。',
    about_h_norms:'血糖参考范围',
    about_li_low:'<strong>低于3.9 mmol/L</strong> — 低血糖',
    about_li_ok:'<strong>3.9–7.8 mmol/L</strong> — 正常范围',
    about_li_high:'<strong>7.8–11.0 mmol/L</strong> — 偏高',
    about_li_vhigh:'<strong>高于11.0 mmol/L</strong> — 高血糖',
    about_btn:'前往计算器 →',
    faq_title:'常见问题', faq_date:'常见问题解答 · 2026',
    faq_warn_title:'⚠️ 重要警告',
    faq_warn_body:'胰岛素剂量计算是复杂的医疗过程。本计算器<strong>仅供参考</strong>，不能替代专业医疗建议。',
    faq_w1:'注射前请始终核实计算结果',
    faq_w2:'考虑上次注射的活性胰岛素（IOB）',
    faq_w3:'体力活动会影响胰岛素敏感性',
    faq_w4:'疾病或压力可能改变您的系数',
    faq_w5:'出现低血糖症状时 — 立即补充快速碳水',
    faq_w6:'未测量血糖前切勿注射胰岛素',
    faq_q1:'什么是ICR？', faq_a1:'ICR表示1单位胰岛素覆盖多少克碳水化合物。由您的内分泌科医生个性化设定。',
    faq_q2:'什么是ISF？', faq_a2:'ISF表示1单位胰岛素使血糖下降多少。因时间和活动而异。',
    faq_q3:'什么是目标血糖？', faq_a3:'校正剂量的目标值。通常为 <strong>5.0–7.0 mmol/L</strong>。',
    faq_q4:'为什么四舍五入到0.5？', faq_a4:'大多数胰岛素笔以0.5或1单位为增量给药。',
    faq_q5:'血糖参考范围',
    faq_a5:'<ul><li><strong>低于3.9 mmol/L</strong> — 低血糖</li><li><strong>3.9–7.8 mmol/L</strong> — 正常</li><li><strong>7.8–11.0 mmol/L</strong> — 偏高</li><li><strong>高于11.0 mmol/L</strong> — 高血糖</li></ul>',
    faq_q6:'为什么显示0或负数？', faq_a6:'血糖已低于目标。校正剂量为负，无需校正。',
    faq_q7:'多久复查ICR和ISF？', faq_a7:'每 <strong>3–6个月</strong>，或体重、饮食、运动发生重大变化时。',
    faq_q8:'应用程序可以离线工作吗？', faq_a8:'可以。首次加载后缓存，完全离线运行，历史记录存储在本地。',
    faq_q9:'使用安全吗？', faq_a9:'使用标准计算公式。<strong>不考虑</strong>活性胰岛素（IOB）、食物升糖指数和运动影响。仅作参考。',
    faq_btn:'前往计算器 →',
    faq_regulatory:'⚠️ 本应用程序不是经认证的医疗设备，未经任何监管机构（FDA、EMA或同等机构）批准。',

    profile_label:'方案', profile_morning:'☀️ 早晨', profile_day:'🌤 白天', profile_evening:'🌙 晚上',
    profile_edit_title:'编辑方案', profile_save:'保存', profile_cancel:'取消', profile_reset:'重置为默认值',
    preset_label:'碳水', preset_add:'+ 添加', preset_edit_title:'餐食预设',
    preset_name_ph:'名称（如 早餐）', preset_carbs_ph:'碳水化合物 (g)',
    preset_save:'保存', preset_cancel:'取消', preset_delete:'删除',
    preset_breakfast:'早餐', preset_lunch:'午餐', preset_dinner:'晚餐',
  },
};

// ── State ─────────────────────────────────────────────────────
let currentLang  = localStorage.getItem('lang')  || 'ru';
let currentTheme = localStorage.getItem('theme') || 'dark';

function t(key) {
  return (LANGS[currentLang] && LANGS[currentLang][key] !== undefined)
    ? LANGS[currentLang][key]
    : (LANGS.ru[key] !== undefined ? LANGS.ru[key] : key);
}

function applyLang(lang) {
  currentLang = lang;
  localStorage.setItem('lang', lang);
  document.documentElement.lang = lang === 'zh' ? 'zh-CN' : lang;

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    const val = t(key);
    if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
      el.placeholder = val;
    } else {
      el.innerHTML = val;
    }
  });

  const sel = document.getElementById('lang-select');
  if (sel) sel.value = lang;

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
function toggleTheme() { applyTheme(currentTheme === 'dark' ? 'light' : 'dark'); }

// ── Cookie + GDPR version-bump re-consent ─────────────────────
const PRIVACY_VERSION = '2'; // Increment on every Privacy Policy update

function checkCookieConsent() {
  const consent = localStorage.getItem('cookieConsent');
  const savedVersion = localStorage.getItem('privacyVersion');

  // No consent yet, or policy version changed since last consent → re-trigger banner
  if (!consent || savedVersion !== PRIVACY_VERSION) {
    // Clear stale consent so the new choice is recorded fresh
    if (savedVersion !== PRIVACY_VERSION) {
      localStorage.removeItem('cookieConsent');
    }
    setTimeout(() => { const b = document.getElementById('cookie-banner'); if (b) b.classList.add('show'); }, 1800);
  }
}
function acceptCookies()  {
  localStorage.setItem('cookieConsent', 'accepted');
  localStorage.setItem('privacyVersion', PRIVACY_VERSION);
  const b = document.getElementById('cookie-banner'); if (b) b.classList.remove('show');
}
function declineCookies() {
  localStorage.setItem('cookieConsent', 'declined');
  localStorage.setItem('privacyVersion', PRIVACY_VERSION);
  const b = document.getElementById('cookie-banner'); if (b) b.classList.remove('show');
}

// ── PWA Install ───────────────────────────────────────────────
let deferredInstall = null;
window.addEventListener('beforeinstallprompt', e => {
  e.preventDefault(); deferredInstall = e;
  if (!localStorage.getItem('installDismissed')) { const b=document.getElementById('install-banner'); if(b) b.classList.add('show'); }
});
function installApp() {
  if (!deferredInstall) return;
  deferredInstall.prompt();
  deferredInstall.userChoice.then(() => { const b=document.getElementById('install-banner'); if(b) b.classList.remove('show'); deferredInstall=null; });
}
function closeInstall() { const b=document.getElementById('install-banner'); if(b) b.classList.remove('show'); localStorage.setItem('installDismissed','1'); }

// ── Offline ───────────────────────────────────────────────────
function updateOnline() { const b=document.getElementById('offline-banner'); if(b) b.classList.toggle('show',!navigator.onLine); }
window.addEventListener('online', updateOnline);
window.addEventListener('offline', updateOnline);

// ── Decimal input — FIX: allow comma+dot in all locales ───────
function normalizeDecimal(value) {
  // Replace comma with dot, strip anything that's not digit or dot
  return String(value).replace(/,/g, '.').replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1');
}

function parseDecimal(value) {
  return parseFloat(normalizeDecimal(String(value)));
}

function attachDecimalInput(el) {
  // keydown: allow digits, comma, dot, control keys — BLOCK everything else
  el.addEventListener('keydown', e => {
    const ctrl = e.ctrlKey || e.metaKey;
    const nav  = ['Backspace','Delete','ArrowLeft','ArrowRight','ArrowUp','ArrowDown','Tab','Enter','Home','End'].includes(e.key);
    if (ctrl || nav) return; // always allow
    if (/^\d$/.test(e.key)) return; // digits OK
    if (e.key === '.' || e.key === ',') {
      // Only allow one decimal separator
      const cur = el.value.replace(',', '.');
      if (cur.includes('.')) { e.preventDefault(); return; }
      return; // allow
    }
    e.preventDefault(); // block everything else
  });

  // input: normalize comma→dot live, clear error
  el.addEventListener('input', () => {
    const start = el.selectionStart;
    const normalized = el.value.replace(/,/g, '.').replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1');
    if (el.value !== normalized) {
      el.value = normalized;
      try { el.setSelectionRange(start, start); } catch(e) {}
    }
    clearFieldError(el);
  });
}

// ── Validation ────────────────────────────────────────────────
// Validation helpers — used by page-level scripts via global scope
function clearFieldError(inputEl) {
  inputEl.classList.remove('input-error');
  const container = inputEl.closest('.input-group, .setting-item');
  if (container) container.querySelectorAll('.field-error').forEach(e => e.remove());
}

function clearAllErrors() {
  document.querySelectorAll('.input-error').forEach(el => el.classList.remove('input-error'));
  document.querySelectorAll('.field-error').forEach(el => el.remove());
}

// ── Init ──────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  applyTheme(currentTheme);

  const themeBtn = document.getElementById('theme-toggle');
  if (themeBtn) themeBtn.addEventListener('click', toggleTheme);

  const langSel = document.getElementById('lang-select');
  if (langSel) langSel.addEventListener('change', e => applyLang(e.target.value));

  // Attach decimal input handler to all numeric fields
  document.querySelectorAll('input[inputmode="decimal"]').forEach(attachDecimalInput);

  applyLang(currentLang);
  checkCookieConsent();
  updateOnline();

  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('./sw.js').catch(() => {});
  }
});
