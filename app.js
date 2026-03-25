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
    disclaimer:'⚠️ Приложение выполняет математический расчёт по введённым данным. Итоговая доза определяется Вами и врачом с учётом вашего состояния.',
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
    consent_title:'Прежде чем продолжить',
    consent_p1:'⚠️ Приложение вычисляет предполагаемую дозу на основе введённых данных. Оно не учитывает активный инсулин, болезнь, стресс и другие факторы. <strong>Результат не является медицинской рекомендацией.</strong>',
    consent_p2:'⚠️ <strong>Все решения о введении дозы принимаете вы совместно с врачом.</strong> Разработчик (DMN) не несёт ответственности за любой вред, возникший в результате использования приложения.',
    consent_p3:'⚠️ Приложение <strong>не является сертифицированным медицинским устройством</strong> и не одобрено FDA, EMA или иными регуляторными органами.',
    consent_checkbox:'Я прочитал(а) и принимаю <a href="./terms.html" target="_blank">Условия использования</a> и <a href="./privacy.html" target="_blank">Политику конфиденциальности</a>. Я понимаю, что приложение является информационным инструментом, а все решения о дозировании — моя ответственность.',
    consent_btn:'Продолжить',
    terms_title:'Условия использования',
    terms_date:'Последнее обновление: 25 марта 2026 &middot; Версия 1.2',
    terms_intro:'Настоящие Условия использования («Условия») регулируют доступ к веб-приложению «Калькулятор дозы инсулина» («Приложение») и его использование. Используя Приложение любым способом — просматривая, вводя данные или читая результаты — вы подтверждаете, что ознакомились с настоящими Условиями, поняли их и согласны соблюдать их в полном объёме. Если вы не согласны, не используйте Приложение.',
    terms_s01_label:'Характер и назначение приложения',
    terms_s01_plain:'Приложение является <strong>инструментом для математических вычислений исключительно в информационных целях</strong>. Оно применяет введённые вами значения к стандартной формуле болюса. Результат <strong>не является рекомендацией по дозированию и не заменяет клиническое суждение</strong>.<br><br>Приложение <strong>не</strong> учитывает: активный инсулин (IOB), гликемический индекс, физическую активность, болезнь, стресс, гормональные изменения и другие физиологические факторы. Результаты необходимо проверять с врачом.',
    terms_s01_legal:'Приложение является инструментом для математических вычислений, предоставляемым исключительно в информационных целях. Оно применяет введённые пользователем значения к стандартной формуле болюса. Данный результат не является рекомендацией по дозированию, медицинским советом или заменой клинического суждения. Приложение прямо не является медицинским изделием по смыслу Регламента ЕС 2017/745 (MDR), Регламента ЕС 2017/746 (IVDR), Закона США FD&amp;C Act или любого аналогичного национального законодательства.',
    terms_s02_label:'Отсутствие медицинских рекомендаций',
    terms_s02_plain:'Ничто в этом Приложении не является медицинским советом. <strong>Вам абсолютно запрещено использовать результаты Приложения в качестве единственного основания для принятия решения о дозировании инсулина.</strong> Все результаты должны быть независимо проверены с квалифицированным медицинским специалистом. Приложение не устанавливает никаких профессиональных отношений между разработчиком (DMN) и вами.',
    terms_s02_legal:'Ничто в данном Приложении — включая любые расчётные значения, метки, подсказки, примеры или параметры по умолчанию — не является медицинским советом, клинической рекомендацией, диагнозом, прогнозом, планом лечения или рецептом. Пользователю абсолютно запрещено использовать результаты Приложения в качестве единственного основания для принятия решения о дозировании. Все результаты должны быть независимо проверены с квалифицированным медицинским специалистом (эндокринологом, диабетологом или сертифицированным специалистом по диабету). Приложение не устанавливает отношений врач–пациент между разработчиком (DMN) и пользователем.',
    terms_s03_label:'Ограничение ответственности',
    terms_s03_plain:'<strong>Разработчик (DMN) не несёт никакой ответственности</strong> за любой ущерб, вред или убытки, возникшие в результате использования данного Приложения — включая личный вред, гипогликемию, гипергликемию, ошибки вычислений, потерю данных или сбои сторонних сервисов. Использование Приложения осуществляется полностью на ваш страх и риск.',
    terms_s03_legal:'В максимально допустимой законом мере разработчик (DMN) и любые соавторы, лицензиары или аффилированные лица не несут никакой ответственности за любой ущерб, включая:<ol type="a"><li>личный вред, инвалидность или смерть вследствие неправильного дозирования инсулина;</li><li>гипогликемию, гипергликемию, диабетический кетоацидоз или иные медицинские события;</li><li>ошибки или неточности в расчётных результатах;</li><li>потерю данных в localStorage или кеше браузера;</li><li>недоступность или сбои Приложения, в том числе в офлайн-режиме;</li><li>действия сторонних сервисов, включая Google AdSense, GitHub Pages или CDN;</li><li>использование устаревшей кешированной версии Приложения;</li><li>использование Приложения третьими лицами, включая несовершеннолетних.</li></ol>Это ограничение применяется вне зависимости от правовой теории (договор, деликт, строгая ответственность и т.д.), даже если разработчик был уведомлён о возможности такого ущерба.',
    terms_s04_label:'Отсутствие гарантий',
    terms_s04_plain:'Приложение предоставляется <strong>«как есть» и «по мере доступности»</strong> без каких-либо гарантий. Не предоставляется никаких гарантий точности, полноты или пригодности для каких-либо целей. Всегда проверяйте результаты с медицинским специалистом.',
    terms_s04_legal:'Приложение предоставляется «как есть» и «по мере доступности» без каких-либо гарантий — явных, подразумеваемых или законодательно установленных. Разработчик не гарантирует: (a) отсутствие ошибок; (b) что формула болюса соответствует индивидуальному клиническому протоколу пользователя; (c) актуальность кешированных или офлайн-версий; (d) доступность Приложения в любое время; (e) корректную работу на конкретном устройстве или браузере.',
    terms_s05_label:'Регуляторный статус',
    terms_s05_plain:'Данное Приложение <strong>не является сертифицированным медицинским изделием</strong>. Оно не прошло проверку, одобрение или сертификацию со стороны FDA (США), EMA (ЕС) или иного регуляторного органа. Не имеет знака CE и не прошло процедуру оценки соответствия. <strong>Данное приложение не является сертифицированным медицинским устройством и не одобрено ни одним регуляторным органом (FDA, EMA или аналогичным).</strong>',
    terms_s05_legal:'Приложение не было представлено, проверено, одобрено или сертифицировано ни одним регуляторным органом, включая FDA (США), EMA и национальные компетентные органы ЕС по MDR 2017/745 или IVDR 2017/746, а также иные национальные органы по медицинским технологиям. Приложение не классифицируется разработчиком как программное обеспечение как медицинское изделие (SaMD). Пользователи всех юрисдикций самостоятельно несут ответственность за соответствие своего использования местному законодательству.',
    terms_s06_label:'Ответственность пользователя',
    terms_s06_plain:'<strong>Вы несёте полную и единоличную ответственность за все решения о дозировании инсулина.</strong> Используя данное Приложение, вы подтверждаете, что не будете дозировать инсулин, опираясь исключительно на его результаты, что вы проконсультировались или проконсультируетесь с медицинским специалистом, и что понимаете: Приложение не учитывает активный инсулин на борту (IOB).',
    terms_s06_legal:'Используя Приложение, пользователь прямо и безотзывно признаёт и соглашается с тем, что: (a) принимает полную и единоличную ответственность за все решения о дозировании инсулина; (b) не будет вводить инсулин, опираясь исключительно на результаты Приложения; (c) проконсультировался или проконсультируется с квалифицированным медицинским специалистом; (d) индивидуальные физиологические различия могут существенно отличать фактическое действие инсулина от расчётного; (e) Приложение не учитывает IOB, и несоблюдение этого может привести к передозировке; (f) пользователю исполнилось 18 лет, либо он является несовершеннолетним, использующим Приложение под непосредственным надзором ответственного взрослого; (g) пользователь принимает настоящие Условия в полном объёме.',
    terms_s07_label:'Возрастные ограничения',
    terms_s07_plain:'Данное Приложение <strong>не предназначено для лиц до 18 лет</strong> без непосредственного контроля родителя или опекуна. Использование лицами до 18 лет без такого контроля запрещено. Разработчик не несёт ответственности за вред, причинённый несанкционированным использованием несовершеннолетними.',
    terms_s07_legal:'Приложение не предназначено для использования лицами младше 18 лет без непосредственного контроля родителя или законного опекуна. Разработчик не допускает использования несовершеннолетними без надзора и не несёт ответственности за ущерб, возникший вследствие несанкционированного использования несовершеннолетними.',
    terms_s08_label:'Изменения приложения и условий',
    terms_s08_plain:'Разработчик вправе изменять, приостанавливать или прекращать работу Приложения в любое время без уведомления, а также обновлять настоящие Условия. Обновления обозначаются новым номером версии и датой. <strong>Продолжение использования после публикации означает принятие изменённых Условий.</strong>',
    terms_s08_legal:'Разработчик оставляет за собой право изменять, приостанавливать или прекращать работу Приложения в любое время без уведомления, а также обновлять настоящие Условия в любое время. Обновлённая версия обозначается новым номером версии и датой. Продолжение использования Приложения после публикации изменённых Условий означает принятие изменённых Условий.',
    terms_s09_label:'Применимое право и общие положения',
    terms_s09_plain:'Настоящие Условия регулируются законодательством юрисдикции по месту домицилия разработчика. Пользователи ЕС сохраняют все предусмотренные законом права по GDPR и праву потребителей ЕС. Если какое-либо положение признано недействительным, остальные положения сохраняют силу. Настоящие Условия совместно с Политикой конфиденциальности составляют полное соглашение между вами и разработчиком.',
    terms_s09_legal:'Настоящие Условия регулируются законодательством по месту домицилия разработчика на дату спора. Ничто в настоящих Условиях не ограничивает права, которые не могут быть исключены согласно обязательному применимому законодательству, включая Регламент (ЕС) 2016/679 (GDPR) и Директиву ЕС 2019/771.<br><br><strong>Делимость.</strong> Если какое-либо положение признано недействительным, оно изменяется до минимально необходимого. Если изменение невозможно, положение исключается; остальные положения сохраняют полную силу.<br><br><strong>Отсутствие отказа.</strong> Неприменение разработчиком какого-либо права не означает отказа от него.<br><br><strong>Полнота соглашения.</strong> Настоящие Условия совместно с Политикой конфиденциальности составляют полное соглашение между сторонами.',
    terms_s10_label:'Разработчик и контакты',
    terms_s10_plain:'Приложение разработано и поддерживается <strong>DMN</strong> (индивидуальный разработчик).<br>По вопросам, связанным с настоящими Условиями, или для реализации прав: <a href="mailto:basedoseapp@gmail.com">basedoseapp@gmail.com</a><br>Срок ответа: до 30 календарных дней согласно ст. 12 GDPR.',
    terms_s10_legal:'Приложение разработано и поддерживается DMN (индивидуальный разработчик). Использование Приложения также регулируется <a href="./privacy.html">Политикой конфиденциальности</a>, которая включена в настоящие Условия по ссылке.<br><br><strong>Email:</strong> <a href="mailto:basedoseapp@gmail.com">basedoseapp@gmail.com</a><br><strong>Срок ответа:</strong> до 30 календарных дней согласно ст. 12 GDPR.',

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
    disclaimer:'⚠️ This app performs a mathematical calculation based on the data you enter. The final dose is determined by you and your doctor based on your condition.',
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
    consent_title:'Before you continue',
    consent_p1:'⚠️ This app calculates a suggested dose based on the numbers you enter. It does not account for active insulin, illness, stress, or other factors. <strong>The result is not a medical recommendation.</strong>',
    consent_p2:'⚠️ <strong>All dosing decisions are made by you and your doctor.</strong> The app developer (DMN) is not liable for any harm resulting from use of this app.',
    consent_p3:'⚠️ This app is <strong>not a certified medical device</strong> and has not been approved by FDA, EMA, or any regulatory authority.',
    consent_checkbox:'I have read and accept the <a href="./terms.html" target="_blank">Terms of Use</a> and <a href="./privacy.html" target="_blank">Privacy Policy</a>. I understand that this app is an informational tool only and that all dosing decisions are my responsibility.',
    consent_btn:'Continue',
    terms_title:'Terms of Use',
    terms_date:'Last updated: 25 March 2026 &middot; Version 1.3',
    terms_intro:'These Terms of Use ("Terms") govern your access to and use of the Insulin Dose Calculator web application ("Application", "App"). By accessing or using the App in any way — including viewing, entering data, or reading results — you acknowledge that you have read, understood, and agree to be bound by these Terms in their entirety. If you do not agree, do not use the App.',
    terms_s01_label:'Nature and Purpose of the Application',
    terms_s01_plain:'This App is a <strong>mathematical calculation tool for informational purposes only</strong>. It applies values you enter (glucose, carbs, ICR, ISF, target glucose) to a standard bolus formula and returns a numeric output. This output is <strong>not a dosing recommendation, not medical advice, and not a substitute for clinical judgment</strong>.<br><br>The App does <strong>not</strong> account for: active insulin on board (IOB), glycaemic index of foods, physical activity, illness, stress, hormonal variation, pump settings, or any other physiological factor. Results must be verified by you and your healthcare professional.',
    terms_s01_legal:'The Application is a mathematical calculation tool provided solely for informational purposes. It applies user-supplied values to a standard bolus formula and returns a numeric output. This output is not a dosing recommendation, not medical advice, and not a substitute for clinical judgment. The Application is expressly not a medical device within the meaning of EU Regulation 2017/745 (MDR), EU Regulation 2017/746 (IVDR), the U.S. FD&amp;C Act, or any equivalent national legislation.',
    terms_s02_label:'No Medical Advice — Absolute Prohibition on Sole Reliance',
    terms_s02_plain:'Nothing in this App constitutes medical advice. <strong>You are absolutely prohibited from using the App output as the sole basis for any insulin dosing decision.</strong> All outputs must be independently verified with a qualified healthcare professional. The App does not establish any professional-patient relationship between the developer (DMN) and you.',
    terms_s02_legal:'Nothing in this Application — including any calculated value, label, hint, example, default parameter, or any other content — constitutes medical advice, a clinical recommendation, a diagnosis, a treatment plan, or a prescription. The user is absolutely prohibited from using the Application output as the sole basis for any insulin dosing decision. The Application does not establish a physician-patient or any other professional relationship between the developer (DMN) and the user.',
    terms_s03_label:'Limitation of Liability',
    terms_s03_plain:'<strong>The developer (DMN) has zero liability</strong> for any loss, harm, injury, or damage of any kind arising from use of this App — including personal injury, hypoglycaemia, hyperglycaemia, calculation errors, data loss, downtime, or third-party service failures. Use of this App is entirely at your own risk.',
    terms_s03_legal:'To the fullest extent permitted by applicable law, the developer (DMN) shall have zero liability for any loss, harm, injury, or damage arising from use of the Application, including:<ol type="a"><li>personal injury, disability, or death from incorrect dosing;</li><li>hypoglycaemia, hyperglycaemia, DKA, or any other medical event;</li><li>errors or inaccuracies in calculated output;</li><li>data loss in localStorage or browser cache;</li><li>unavailability or malfunction, including offline mode;</li><li>third-party service failures (AdSense, GitHub Pages, CDN);</li><li>use of a cached or outdated version;</li><li>reliance by any third party including a minor.</li></ol>This limitation applies regardless of legal theory, even if the developer was advised of the possibility of such damages.',
    terms_s04_label:'No Warranties',
    terms_s04_plain:'The App is provided <strong>"as is" and "as available"</strong> without any warranty of any kind. No guarantee of accuracy, completeness, or fitness for any purpose. Always verify results with a healthcare professional.',
    terms_s04_legal:'The Application is provided "as is" and "as available" without any warranty of any kind, express, implied, or statutory. The developer makes no warranty that: (a) the Application will be free of errors; (b) the bolus formula reflects the user individual clinical protocol; (c) cached versions are current; (d) the Application will be available at any time; (e) the Application will function correctly on any device or browser.',
    terms_s05_label:'Regulatory Status',
    terms_s05_plain:'This App is <strong>not a certified medical device</strong>. It has not been reviewed, cleared, or approved by the FDA (USA), EMA (EU), or any other regulatory authority. It does not carry a CE mark. <strong>This application is not a certified medical device and has not been approved by any regulatory authority (FDA, EMA, or equivalent).</strong>',
    terms_s05_legal:'The Application has not been submitted to, reviewed by, cleared, approved, or certified by any regulatory authority, including the FDA, EMA, or any national competent authority under EU MDR 2017/745 or IVDR 2017/746. It does not carry a CE mark and has not undergone any conformity assessment procedure. It is not classified as Software as a Medical Device (SaMD) by the developer.',
    terms_s06_label:'User Responsibility and Acknowledgement',
    terms_s06_plain:'<strong>You are fully and solely responsible for all insulin dosing decisions.</strong> By using this App you confirm you will not dose based solely on its output, that you have consulted or will consult a healthcare professional, and that you understand the App does not account for active insulin on board (IOB).',
    terms_s06_legal:'By using the Application, the user acknowledges that: (a) the user assumes full responsibility for all dosing decisions; (b) the user will not administer insulin based solely on the Application output; (c) the user has consulted or will consult a qualified healthcare professional; (d) physiological variation may cause actual insulin effects to differ from calculated values; (e) the Application does not account for IOB, and failure to account for IOB may result in overdose; (f) the user is 18 or older, or a minor under direct supervision of a responsible adult; (g) the user accepts these Terms as a binding condition of use.',
    terms_s07_label:'Age Restriction',
    terms_s07_plain:'This App is <strong>not intended for persons under 18</strong> without direct parental or guardian supervision. Use by under-18s without supervision is prohibited. The developer assumes no liability for harm from unauthorised use by a minor.',
    terms_s07_legal:'The Application is not intended for use by persons under the age of 18 without direct supervision of a parent or legal guardian. The developer does not knowingly permit unsupervised use by minors and assumes no liability for any harm arising from unauthorised use by a minor.',
    terms_s08_label:'Modifications to the Application and Terms',
    terms_s08_plain:'The developer may modify, suspend, or discontinue the App at any time without notice, and may update these Terms at any time. Updates are indicated by a revised version number and "Last updated" date. <strong>Continued use after posting constitutes acceptance of revised Terms.</strong>',
    terms_s08_legal:'The developer reserves the right to modify, suspend, or discontinue the Application at any time without notice, and to update these Terms at any time. The updated version will be indicated by a revised version number and date. Continued use of the Application after the posting of revised Terms constitutes acceptance of the revised Terms.',
    terms_s09_label:'Governing Law, Dispute Resolution &amp; General Provisions',
    terms_s09_plain:'These Terms are governed by the laws of the developer jurisdiction of domicile. EU users retain all statutory rights under GDPR and EU consumer protection law. If any provision is held invalid, the remainder continues in full force. These Terms together with the Privacy Policy constitute the entire agreement between you and the developer.',
    terms_s09_legal:'These Terms shall be governed by the laws of the developer jurisdiction of domicile. EU users retain non-waivable rights under GDPR (Regulation (EU) 2016/679) and EU Directive 2019/771.<br><br><strong>Severability.</strong> If any provision is held invalid, it shall be modified to the minimum extent necessary. If modification is not possible, it shall be severed; remaining provisions continue in full force.<br><br><strong>No Waiver.</strong> Failure to enforce any right does not constitute a waiver.<br><br><strong>Entire Agreement.</strong> These Terms, together with the Privacy Policy, constitute the entire agreement between the user and the developer.',
    terms_s10_label:'Developer &amp; Contact',
    terms_s10_plain:'This App is developed and maintained by <strong>DMN</strong> (individual developer).<br>For questions or to exercise legal rights: <a href="mailto:basedoseapp@gmail.com">basedoseapp@gmail.com</a><br>Response time: up to 30 calendar days (GDPR Article 12).',
    terms_s10_legal:'This Application is developed and maintained by DMN (individual developer). Your use is also governed by our <a href="./privacy.html">Privacy Policy</a>, incorporated herein by reference.<br><br><strong>Email:</strong> <a href="mailto:basedoseapp@gmail.com">basedoseapp@gmail.com</a><br><strong>Response time:</strong> up to 30 calendar days, as required by GDPR Article 12.',

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
    disclaimer:'⚠️ Esta aplicación realiza un cálculo matemático basado en los datos que introduce. La dosis final la determinan usted y su médico según su estado.',
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
    consent_title:'Antes de continuar',
    consent_p1:'⚠️ Esta aplicación calcula una dosis sugerida basada en los datos que introduce. No tiene en cuenta la insulina activa, enfermedad, estrés u otros factores. <strong>El resultado no es una recomendación médica.</strong>',
    consent_p2:'⚠️ <strong>Todas las decisiones de dosificación las toman usted y su médico.</strong> El desarrollador (DMN) no es responsable de ningún daño derivado del uso de esta aplicación.',
    consent_p3:'⚠️ Esta aplicación <strong>no es un dispositivo médico certificado</strong> y no ha sido aprobada por FDA, EMA ni ninguna autoridad reguladora.',
    consent_checkbox:'He leído y acepto las <a href="./terms.html" target="_blank">Condiciones de uso</a> y la <a href="./privacy.html" target="_blank">Política de privacidad</a>. Entiendo que esta aplicación es solo informativa y que todas las decisiones de dosificación son mi responsabilidad.',
    consent_btn:'Continuar',
    terms_title:'Condiciones de uso',
    terms_date:'Última actualización: 25 de marzo de 2026 &middot; Versión 1.2',
    terms_intro:'Estas Condiciones de uso ("Condiciones") rigen el acceso y uso de la aplicación web Calculadora de dosis de insulina ("Aplicación"). Al acceder o usar la Aplicación de cualquier forma, usted reconoce que ha leído, comprendido y acepta estar sujeto a estas Condiciones en su totalidad. Si no está de acuerdo, no utilice la Aplicación.',
    terms_s01_label:'Naturaleza y propósito de la aplicación',
    terms_s01_plain:'Esta Aplicación es una <strong>herramienta de cálculo matemático sólo para fines informativos</strong>. Aplica los valores que introduce a una fórmula de bolo estándar. El resultado <strong>no es una recomendación de dosis, no es consejo médico y no sustituye al criterio clínico</strong>.<br><br>La Aplicación <strong>no</strong> tiene en cuenta: insulina activa (IOB), índice glucémico, actividad física, enfermedad, estrés u otros factores fisiológicos. Los resultados deben verificarse con su médico.',
    terms_s01_legal:'La Aplicación es una herramienta de cálculo matemático proporcionada únicamente con fines informativos. No es una recomendación de dosificación, consejo médico, ni sustituto del juicio clínico. La Aplicación no es un dispositivo médico según el Reglamento (UE) 2017/745 (MDR), el Reglamento (UE) 2017/746 (IVDR), la Ley FD&amp;C de EE. UU., ni cualquier legislación nacional equivalente.',
    terms_s02_label:'Sin consejo médico — prohibición absoluta de uso exclusivo',
    terms_s02_plain:'Nada en esta Aplicación constituye consejo médico. <strong>Está absolutamente prohibido usar el resultado de la Aplicación como única base para cualquier decisión de dosificación de insulina.</strong> Todos los resultados deben verificarse independientemente con un profesional sanitario cualificado. La Aplicación no establece ninguna relación profesional-paciente entre el desarrollador (DMN) y usted.',
    terms_s02_legal:'Ningún contenido de esta Aplicación — incluyendo valores calculados, etiquetas, sugerencias, ejemplos o parámetros por defecto — constituye consejo médico, recomendación clínica, diagnóstico, pronóstico, plan de tratamiento ni prescripción. El usuario tiene prohibido usar el resultado de la Aplicación como única base para cualquier decisión de dosificación. La Aplicación no establece relación médico-paciente entre el desarrollador (DMN) y el usuario.',
    terms_s03_label:'Limitación de responsabilidad',
    terms_s03_plain:'<strong>El desarrollador (DMN) no tiene ninguna responsabilidad</strong> por cualquier pérdida, daño o perjuicio derivado del uso de esta Aplicación — incluyendo lesiones personales, hipoglucemia, hiperglucemia, errores de cálculo, pérdida de datos o fallos de servicios de terceros. El uso de esta Aplicación es enteramente bajo su propio riesgo.',
    terms_s03_legal:'En la máxima medida permitida por la ley, el desarrollador (DMN) no tendrá responsabilidad alguna por daños derivados del uso de la Aplicación, incluyendo:<ol type="a"><li>lesiones personales o muerte por dosificación incorrecta;</li><li>hipoglucemia, hiperglucemia, cetoacidosis diabética u otros eventos médicos;</li><li>errores o inexactitudes en los resultados calculados;</li><li>pérdida de datos en localStorage o caché del navegador;</li><li>no disponibilidad o fallos de la Aplicación, incluso en modo sin conexión;</li><li>fallos de servicios de terceros (AdSense, GitHub Pages, CDN);</li><li>uso de una versión en caché u obsoleta;</li><li>uso por terceros incluyendo menores.</li></ol>',
    terms_s04_label:'Sin garantías',
    terms_s04_plain:'La Aplicación se proporciona <strong>"tal cual" y "según disponibilidad"</strong> sin garantía de ningún tipo. No se garantiza la exactitud, integridad ni idoneidad para ningún fin. Siempre verifique los resultados con un profesional sanitario.',
    terms_s04_legal:'La Aplicación se proporciona "tal cual" y "según disponibilidad" sin garantías de ningún tipo. El desarrollador no garantiza: (a) que esté libre de errores; (b) que la fórmula de bolo refleje el protocolo clínico individual del usuario; (c) que las versiones en caché estén actualizadas; (d) disponibilidad en todo momento; (e) funcionamiento correcto en cualquier dispositivo o navegador.',
    terms_s05_label:'Estado regulatorio',
    terms_s05_plain:'Esta Aplicación <strong>no es un dispositivo médico certificado</strong>. No ha sido revisada, aprobada ni certificada por la FDA (EE. UU.), la EMA (UE) ni ninguna otra autoridad reguladora. No tiene marcado CE. <strong>Esta aplicación no es un dispositivo médico certificado y no ha sido aprobada por ninguna autoridad reguladora (FDA, EMA o equivalente).</strong>',
    terms_s05_legal:'La Aplicación no ha sido presentada, revisada, aprobada ni certificada por ninguna autoridad reguladora, incluyendo la FDA, la EMA ni ninguna autoridad nacional competente bajo MDR 2017/745 o IVDR 2017/746. No tiene marcado CE ni ha pasado ningún procedimiento de evaluación de conformidad. No está clasificada como Software como Dispositivo Médico (SaMD) por el desarrollador.',
    terms_s06_label:'Responsabilidad del usuario',
    terms_s06_plain:'<strong>Usted es plena y únicamente responsable de todas las decisiones de dosificación de insulina.</strong> Al usar esta Aplicación confirma que no dosificará basándose únicamente en sus resultados, que ha consultado o consultará a un profesional sanitario, y que comprende que la Aplicación no tiene en cuenta la insulina activa (IOB).',
    terms_s06_legal:'Al usar la Aplicación, el usuario reconoce que: (a) asume plena responsabilidad por todas las decisiones de dosificación; (b) no administrará insulina basándose únicamente en el resultado; (c) ha consultado o consultará a un profesional sanitario; (d) la variación fisiológica individual puede diferir de los valores calculados; (e) la Aplicación no tiene en cuenta el IOB, y no considerarlo puede resultar en sobredosis; (f) tiene 18 años o más, o es menor bajo supervisión directa de un adulto responsable; (g) acepta estas Condiciones como condición vinculante de uso.',
    terms_s07_label:'Restricción de edad',
    terms_s07_plain:'Esta Aplicación <strong>no está destinada a personas menores de 18 años</strong> sin supervisión directa de un padre o tutor. El uso por menores de 18 años sin dicha supervisión está prohibido.',
    terms_s07_legal:'La Aplicación no está destinada al uso por personas menores de 18 años sin supervisión directa de un padre o tutor legal. El desarrollador no permite el uso no supervisado por menores y no asume responsabilidad por daños derivados del uso no autorizado por un menor.',
    terms_s08_label:'Modificaciones',
    terms_s08_plain:'El desarrollador puede modificar, suspender o interrumpir la Aplicación en cualquier momento sin previo aviso, y puede actualizar estas Condiciones en cualquier momento. <strong>El uso continuado constituye aceptación de las Condiciones revisadas.</strong>',
    terms_s08_legal:'El desarrollador se reserva el derecho de modificar, suspender o interrumpir la Aplicación en cualquier momento sin previo aviso, y de actualizar estas Condiciones en cualquier momento. El uso continuado de la Aplicación tras la publicación de las Condiciones revisadas constituye su aceptación.',
    terms_s09_label:'Ley aplicable y disposiciones generales',
    terms_s09_plain:'Estas Condiciones se rigen por las leyes de la jurisdicción de domicilio del desarrollador. Los usuarios de la UE conservan todos los derechos legales bajo el RGPD y la legislación de protección al consumidor de la UE. Si alguna disposición es declarada inválida, el resto mantiene plena vigencia.',
    terms_s09_legal:'Estas Condiciones se rigen por las leyes aplicables en la jurisdicción de domicilio del desarrollador. Los usuarios de la UE conservan derechos irrenunciables bajo el RGPD y la Directiva UE 2019/771.<br><br><strong>Divisibilidad.</strong> Si alguna disposición se declara inválida, se modificará al mínimo necesario; el resto mantiene plena vigencia.<br><br><strong>Sin renuncia.</strong> El no ejercicio de un derecho no constituye renuncia al mismo.<br><br><strong>Acuerdo completo.</strong> Estas Condiciones junto con la Política de privacidad constituyen el acuerdo completo entre el usuario y el desarrollador.',
    terms_s10_label:'Desarrollador y contacto',
    terms_s10_plain:'Esta Aplicación es desarrollada y mantenida por <strong>DMN</strong> (desarrollador individual).<br>Para preguntas o ejercer derechos legales: <a href="mailto:basedoseapp@gmail.com">basedoseapp@gmail.com</a><br>Tiempo de respuesta: hasta 30 días naturales (RGPD, Art. 12).',
    terms_s10_legal:'Esta Aplicación es desarrollada y mantenida por DMN (desarrollador individual). Su uso también se rige por nuestra <a href="./privacy.html">Política de privacidad</a>, incorporada por referencia.<br><br><strong>Email:</strong> <a href="mailto:basedoseapp@gmail.com">basedoseapp@gmail.com</a><br><strong>Tiempo de respuesta:</strong> hasta 30 días naturales, según el Artículo 12 del RGPD.',

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
    disclaimer:'⚠️ Die Anwendung führt eine mathematische Berechnung anhand der eingegebenen Daten durch. Die endgültige Dosis wird von Ihnen und Ihrem Arzt festgelegt.',
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
    consent_title:'Bevor Sie fortfahren',
    consent_p1:'⚠️ Diese Anwendung berechnet eine vorgeschlagene Dosis anhand der eingegebenen Werte. Sie berücksichtigt kein aktives Insulin, Krankheit, Stress oder andere Faktoren. <strong>Das Ergebnis ist keine medizinische Empfehlung.</strong>',
    consent_p2:'⚠️ <strong>Alle Dosierungsentscheidungen treffen Sie gemeinsam mit Ihrem Arzt.</strong> Der Entwickler (DMN) haftet nicht für Schäden, die durch die Nutzung dieser Anwendung entstehen.',
    consent_p3:'⚠️ Diese Anwendung ist <strong>kein zugelassenes Medizinprodukt</strong> und wurde nicht von der FDA, EMA oder einer anderen Aufsichtsbehörde genehmigt.',
    consent_checkbox:'Ich habe die <a href="./terms.html" target="_blank">Nutzungsbedingungen</a> und die <a href="./privacy.html" target="_blank">Datenschutzerklärung</a> gelesen und akzeptiere sie. Ich verstehe, dass diese Anwendung nur ein Informationswerkzeug ist und alle Dosierungsentscheidungen meine Verantwortung sind.',
    consent_btn:'Weiter',
    terms_title:'Nutzungsbedingungen',
    terms_date:'Zuletzt aktualisiert: 25. März 2026 &middot; Version 1.3',
    terms_intro:'Diese Nutzungsbedingungen ("Bedingungen") regeln den Zugang zur und die Nutzung der Webanwendung Insulindosisrechner ("Anwendung"). Durch den Zugriff auf oder die Nutzung der Anwendung auf jede Weise bestätigen Sie, dass Sie diese Bedingungen gelesen, verstanden haben und ihnen zustimmen. Falls Sie nicht einverstanden sind, nutzen Sie die Anwendung nicht.',
    terms_s01_label:'Art und Zweck der Anwendung',
    terms_s01_plain:'Diese Anwendung ist ein <strong>mathematisches Berechnungswerkzeug ausschließlich zu Informationszwecken</strong>. Sie wendet Ihre eingegebenen Werte auf eine Standard-Bolusformel an. Das Ergebnis ist <strong>keine Dosierungsempfehlung, kein medizinischer Rat und kein Ersatz für klinisches Urteilsvermögen</strong>.<br><br>Die Anwendung berücksichtigt <strong>nicht</strong>: aktives Insulin (IOB), glykämischen Index, körperliche Aktivität, Krankheit, Stress oder andere physiologische Faktoren. Ergebnisse müssen mit Ihrem Arzt überprüft werden.',
    terms_s01_legal:'Die Anwendung ist ein mathematisches Berechnungswerkzeug, das ausschließlich zu Informationszwecken bereitgestellt wird. Das Ergebnis ist keine Dosierungsempfehlung, kein medizinischer Rat und kein Ersatz für klinisches Urteilsvermögen. Die Anwendung ist ausdrücklich kein Medizinprodukt im Sinne der EU-Verordnung 2017/745 (MDR), der EU-Verordnung 2017/746 (IVDR), des US FD&amp;C Act oder entsprechender nationaler Rechtsvorschriften.',
    terms_s02_label:'Kein medizinischer Rat — absolutes Verbot',
    terms_s02_plain:'Nichts in dieser Anwendung stellt medizinischen Rat dar. <strong>Es ist Ihnen absolut untersagt, das Ergebnis der Anwendung als einzige Grundlage für Insulindosierungsentscheidungen zu verwenden.</strong> Alle Ergebnisse müssen von einem qualifizierten Mediziner unabhängig überprüft werden. Die Anwendung begründet keine Arzt-Patienten-Beziehung zwischen dem Entwickler (DMN) und Ihnen.',
    terms_s02_legal:'Nichts in dieser Anwendung — einschließlich berechneter Werte, Beschriftungen, Hinweise, Beispiele oder Standardparameter — stellt medizinischen Rat, eine klinische Empfehlung, Diagnose, Prognose, Behandlungsplan oder Verschreibung dar. Es ist dem Nutzer absolut untersagt, das Ergebnis der Anwendung als einzige Grundlage für Insulindosierungsentscheidungen zu verwenden. Die Anwendung begründet keine Arzt-Patienten-Beziehung zwischen dem Entwickler (DMN) und dem Nutzer.',
    terms_s03_label:'Haftungsbeschränkung',
    terms_s03_plain:'<strong>Der Entwickler (DMN) haftet nicht</strong> für Verluste, Schäden oder Verletzungen jeglicher Art, die aus der Nutzung dieser Anwendung entstehen — einschließlich Personenschäden, Hypoglykämie, Hyperglykämie, Berechnungsfehlern, Datenverlust oder Ausfällen von Drittanbieterdiensten. Die Nutzung erfolgt auf Ihr eigenes Risiko.',
    terms_s03_legal:'Im größtmöglichen gesetzlich zulässigen Umfang haftet der Entwickler (DMN) nicht für Schäden aus der Nutzung der Anwendung, einschließlich:<ol type="a"><li>Personenschäden oder Tod durch falsche Dosierung;</li><li>Hypoglykämie, Hyperglykämie, diabetische Ketoazidose oder andere medizinische Ereignisse;</li><li>Fehler oder Ungenauigkeiten in Berechnungsergebnissen;</li><li>Datenverlust in localStorage oder Browser-Cache;</li><li>Nichtverfügbarkeit oder Fehlfunktion, auch im Offline-Modus;</li><li>Ausfälle von Drittanbieterdiensten (AdSense, GitHub Pages, CDN);</li><li>Nutzung einer veralteten gecachten Version;</li><li>Nutzung durch Dritte einschließlich Minderjährige.</li></ol>',
    terms_s04_label:'Keine Gewährleistung',
    terms_s04_plain:'Die Anwendung wird <strong>„wie besehen" und „wie verfügbar"</strong> ohne jegliche Gewährleistung bereitgestellt. Keine Garantie für Genauigkeit, Vollständigkeit oder Eignung für einen bestimmten Zweck. Überprüfen Sie Ergebnisse stets mit einem Arzt.',
    terms_s04_legal:'Die Anwendung wird „wie besehen" und „wie verfügbar" ohne jegliche Gewährleistung bereitgestellt. Der Entwickler gewährleistet nicht: (a) Fehlerfreiheit; (b) dass die Bolusformel dem individuellen klinischen Protokoll entspricht; (c) Aktualität gecachter Versionen; (d) Verfügbarkeit zu jeder Zeit; (e) korrekte Funktion auf jedem Gerät oder Browser.',
    terms_s05_label:'Regulatorischer Status',
    terms_s05_plain:'Diese Anwendung ist <strong>kein zugelassenes Medizinprodukt</strong>. Sie wurde nicht von der FDA (USA), der EMA (EU) oder einer anderen Aufsichtsbehörde geprüft oder zugelassen. Sie trägt kein CE-Kennzeichen. <strong>Diese Anwendung ist kein zugelassenes Medizinprodukt und wurde von keiner Aufsichtsbehörde (FDA, EMA oder gleichwertig) genehmigt.</strong>',
    terms_s05_legal:'Die Anwendung wurde keiner Aufsichtsbehörde vorgelegt und von keiner überprüft, zugelassen oder zertifiziert, einschließlich FDA, EMA oder nationalen Behörden gemäß EU MDR 2017/745 oder IVDR 2017/746. Sie trägt kein CE-Kennzeichen und hat kein Konformitätsbewertungsverfahren durchlaufen. Sie wird vom Entwickler nicht als Software als Medizinprodukt (SaMD) eingestuft.',
    terms_s06_label:'Nutzerverantwortung',
    terms_s06_plain:'<strong>Sie tragen die volle und alleinige Verantwortung für alle Insulindosierungsentscheidungen.</strong> Mit der Nutzung bestätigen Sie, dass Sie nicht ausschließlich auf Berechnungsergebnisse dosieren, dass Sie einen Arzt konsultiert haben oder werden, und dass Sie verstehen, dass aktives Insulin (IOB) nicht berücksichtigt wird.',
    terms_s06_legal:'Mit der Nutzung der Anwendung erkennt der Nutzer an: (a) volle Verantwortung für alle Dosierungsentscheidungen; (b) kein Verabreichen von Insulin ausschließlich auf Basis des Ergebnisses; (c) Konsultation eines Arztes; (d) physiologische Variationen können vom berechneten Wert abweichen; (e) die Anwendung berücksichtigt kein IOB — Nichtberücksichtigung kann zu Überdosierung führen; (f) Nutzer ist 18 Jahre oder älter bzw. Minderjähriger unter direkter Aufsicht; (g) Nutzer akzeptiert diese Bedingungen vollumfänglich.',
    terms_s07_label:'Altersbeschränkung',
    terms_s07_plain:'Diese Anwendung ist <strong>nicht für Personen unter 18 Jahren</strong> ohne direkte elterliche Aufsicht bestimmt. Die Nutzung durch unter 18-Jährige ohne Aufsicht ist untersagt.',
    terms_s07_legal:'Die Anwendung ist nicht für die Nutzung durch Personen unter 18 Jahren ohne direkte Aufsicht eines Elternteils oder gesetzlichen Vormunds bestimmt. Der Entwickler übernimmt keine Haftung für Schäden durch unbefugte Nutzung durch Minderjährige.',
    terms_s08_label:'Änderungen der Anwendung und der Bedingungen',
    terms_s08_plain:'Der Entwickler kann die Anwendung jederzeit ohne Vorankündigung ändern, aussetzen oder einstellen sowie diese Bedingungen jederzeit aktualisieren. <strong>Die weitere Nutzung nach Veröffentlichung gilt als Zustimmung zu den geänderten Bedingungen.</strong>',
    terms_s08_legal:'Der Entwickler behält sich das Recht vor, die Anwendung jederzeit ohne Ankündigung zu ändern, auszusetzen oder einzustellen und diese Bedingungen jederzeit zu aktualisieren. Die weitere Nutzung nach Veröffentlichung der geänderten Bedingungen gilt als deren Annahme.',
    terms_s09_label:'Geltendes Recht und allgemeine Bestimmungen',
    terms_s09_plain:'Diese Bedingungen unterliegen dem Recht des Wohnsitzlandes des Entwicklers. EU-Nutzer behalten alle gesetzlichen Rechte nach DSGVO und EU-Verbraucherrecht. Sollte eine Bestimmung unwirksam sein, bleiben die übrigen in Kraft. Diese Bedingungen zusammen mit der Datenschutzerklärung stellen die vollständige Vereinbarung dar.',
    terms_s09_legal:'Diese Bedingungen unterliegen dem am Wohnsitz des Entwicklers geltenden Recht. EU-Nutzer behalten unabdingbare Rechte nach DSGVO (Verordnung (EU) 2016/679) und EU-Richtlinie 2019/771.<br><br><strong>Salvatorische Klausel.</strong> Sollte eine Bestimmung unwirksam sein, wird sie auf das Mindestmaß geändert; die übrigen Bestimmungen bleiben in vollem Umfang in Kraft.<br><br><strong>Kein Verzicht.</strong> Die Nichtdurchsetzung eines Rechts gilt nicht als Verzicht darauf.<br><br><strong>Vollständige Vereinbarung.</strong> Diese Bedingungen und die Datenschutzerklärung bilden die vollständige Vereinbarung zwischen Nutzer und Entwickler.',
    terms_s10_label:'Entwickler &amp; Kontakt',
    terms_s10_plain:'Diese Anwendung wird von <strong>DMN</strong> (Einzelentwickler) entwickelt und gepflegt.<br>Bei Fragen oder zur Ausübung gesetzlicher Rechte: <a href="mailto:basedoseapp@gmail.com">basedoseapp@gmail.com</a><br>Antwortzeit: bis zu 30 Kalendertage (DSGVO Art. 12).',
    terms_s10_legal:'Diese Anwendung wird von DMN (Einzelentwickler) entwickelt und gepflegt. Ihre Nutzung unterliegt auch unserer <a href="./privacy.html">Datenschutzerklärung</a>, die hiermit durch Verweis einbezogen wird.<br><br><strong>E-Mail:</strong> <a href="mailto:basedoseapp@gmail.com">basedoseapp@gmail.com</a><br><strong>Antwortzeit:</strong> bis zu 30 Kalendertage gemäß Art. 12 DSGVO.',

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
    disclaimer:'⚠️ L\'application effectue un calcul mathématique à partir des données saisies. La dose finale est déterminée par vous et votre médecin en fonction de votre état.',
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
    faq_regulatory:'⚠️ Cette application n\'est pas un dispositif médical certifié et n\'a pas été approuvée par une autorité réglementaire (FDA, EMA ou équivalent)',
    consent_title:'Avant de continuer',
    consent_p1:'⚠️ Cette application calcule une dose suggérée à partir des données saisies. Elle ne tient pas compte de l\'insuline active, de la maladie, du stress ou d\'autres facteurs. <strong>Le résultat n\'est pas une recommandation médicale.</strong>',
    consent_p2:'⚠️ <strong>Toutes les décisions de dosage sont prises par vous et votre médecin.</strong> Le développeur (DMN) n\'est pas responsable des dommages résultant de l\'utilisation de cette application.',
    consent_p3:'⚠️ Cette application <strong>n\'est pas un dispositif médical certifié</strong> et n\'a pas été approuvée par la FDA, l\'EMA ou toute autre autorité réglementaire.',
    consent_checkbox:'J\'ai lu et j\'accepte les <a href="./terms.html" target="_blank">Conditions d\'utilisation</a> et la <a href="./privacy.html" target="_blank">Politique de confidentialité</a>. Je comprends que cette application est un outil informatif et que toutes les décisions de dosage sont de ma responsabilité.',
    consent_btn:'Continuer',
    terms_title:'Conditions d\'utilisation',
    terms_date:'Dernière mise à jour : 25 mars 2026 &middot; Version 1.3',
    terms_intro:'Les présentes Conditions d\'utilisation ("Conditions") régissent votre accès et votre utilisation de l\'application web Calculateur de dose d\'insuline ("Application"). En accédant ou en utilisant l\'Application, vous reconnaissez avoir lu, compris et accepté d\'être lié par ces Conditions. Si vous n\'acceptez pas, n\'utilisez pas l\'Application.',
    terms_s01_label:'Nature et objet de l\'application',
    terms_s01_plain:'Cette Application est un <strong>outil de calcul mathématique à des fins informatives uniquement</strong>. Elle applique les valeurs que vous saisissez à une formule de bolus standard. Le résultat <strong>n\'est pas une recommandation de dosage, pas un conseil médical et ne remplace pas le jugement clinique</strong>.<br><br>L\'Application ne tient <strong>pas</strong> compte de : l\'insuline active (IOB), l\'indice glycémique, l\'activité physique, la maladie, le stress ou d\'autres facteurs physiologiques. Les résultats doivent être vérifiés avec votre médecin.',
    terms_s01_legal:'L\'Application est un outil de calcul mathématique fourni uniquement à des fins informatives. Elle n\'est pas une recommandation de dosage, un conseil médical, ni un substitut au jugement clinique. L\'Application n\'est pas un dispositif médical au sens du Règlement (UE) 2017/745 (MDR), du Règlement (UE) 2017/746 (IVDR), de la loi américaine FD&amp;C Act ou de toute législation nationale équivalente.',
    terms_s02_label:'Pas de conseil médical — interdiction absolue',
    terms_s02_plain:'Rien dans cette Application ne constitue un conseil médical. <strong>Il vous est absolument interdit d\'utiliser le résultat de l\'Application comme seule base pour toute décision de dosage d\'insuline.</strong> Tous les résultats doivent être vérifiés indépendamment par un professionnel de santé qualifié. L\'Application n\'établit aucune relation professionnelle entre le développeur (DMN) et vous.',
    terms_s02_legal:'Aucun contenu de cette Application — y compris les valeurs calculées, libellés, suggestions, exemples ou paramètres par défaut — ne constitue un conseil médical, une recommandation clinique, un diagnostic, un pronostic, un plan de traitement ou une ordonnance. Il est absolument interdit à l\'utilisateur d\'utiliser le résultat comme seule base pour toute décision de dosage. L\'Application n\'établit pas de relation médecin-patient entre le développeur (DMN) et l\'utilisateur.',
    terms_s03_label:'Limitation de responsabilité',
    terms_s03_plain:'<strong>Le développeur (DMN) décline toute responsabilité</strong> pour tout préjudice, perte ou dommage découlant de l\'utilisation de cette Application — y compris les blessures, hypoglycémies, hyperglycémies, erreurs de calcul, pertes de données ou défaillances de services tiers. L\'utilisation s\'effectue entièrement à vos risques.',
    terms_s03_legal:'Dans toute la mesure permise par la loi applicable, le développeur (DMN) décline toute responsabilité pour les dommages découlant de l\'utilisation de l\'Application, notamment :<ol type="a"><li>blessures corporelles ou décès suite à un dosage incorrect ;</li><li>hypoglycémie, hyperglycémie, acidocétose diabétique ou tout autre événement médical ;</li><li>erreurs ou inexactitudes dans les résultats calculés ;</li><li>perte de données dans localStorage ou le cache du navigateur ;</li><li>indisponibilité ou dysfonctionnement, y compris en mode hors ligne ;</li><li>défaillances de services tiers (AdSense, GitHub Pages, CDN) ;</li><li>utilisation d\'une version mise en cache ou obsolète ;</li><li>utilisation par des tiers y compris des mineurs.</li></ol>',
    terms_s04_label:'Absence de garantie',
    terms_s04_plain:'L\'Application est fournie <strong>« en l\'état » et « selon disponibilité »</strong> sans aucune garantie. Aucune garantie d\'exactitude, d\'exhaustivité ou d\'adéquation à un usage particulier. Vérifiez toujours les résultats avec un professionnel de santé.',
    terms_s04_legal:'L\'Application est fournie « en l\'état » et « selon disponibilité » sans aucune garantie, expresse, implicite ou légale. Le développeur ne garantit pas : (a) l\'absence d\'erreurs ; (b) que la formule de bolus correspond au protocole clinique individuel de l\'utilisateur ; (c) l\'actualité des versions mises en cache ; (d) la disponibilité à tout moment ; (e) le bon fonctionnement sur tout appareil ou navigateur.',
    terms_s05_label:'Statut réglementaire',
    terms_s05_plain:'Cette Application <strong>n\'est pas un dispositif médical certifié</strong>. Elle n\'a pas été examinée, autorisée ou certifiée par la FDA (États-Unis), l\'EMA (UE) ou toute autre autorité réglementaire. Elle ne porte pas le marquage CE. <strong>Cette application n\'est pas un dispositif médical certifié et n\'a pas été approuvée par une autorité réglementaire (FDA, EMA ou équivalent).</strong>',
    terms_s05_legal:'L\'Application n\'a pas été soumise, examinée, autorisée ou certifiée par une autorité réglementaire, notamment la FDA, l\'EMA ou une autorité nationale compétente selon le MDR 2017/745 ou l\'IVDR 2017/746 de l\'UE. Elle ne porte pas le marquage CE et n\'a pas subi de procédure d\'évaluation de la conformité. Elle n\'est pas classée comme Logiciel en tant que Dispositif Médical (SaMD) par le développeur.',
    terms_s06_label:'Responsabilité de l\'utilisateur',
    terms_s06_plain:'<strong>Vous êtes entièrement et uniquement responsable de toutes les décisions de dosage d\'insuline.</strong> En utilisant cette Application, vous confirmez que vous ne vous fierez pas uniquement à ses résultats, que vous avez consulté ou consulterez un professionnel de santé, et que vous comprenez que l\'Application ne tient pas compte de l\'insuline active (IOB).',
    terms_s06_legal:'En utilisant l\'Application, l\'utilisateur reconnaît que : (a) il assume l\'entière responsabilité de toutes les décisions de dosage ; (b) il n\'administrera pas d\'insuline uniquement sur la base du résultat ; (c) il a consulté ou consultera un professionnel de santé qualifié ; (d) les variations physiologiques individuelles peuvent différer des valeurs calculées ; (e) l\'Application ne tient pas compte de l\'IOB, et ne pas en tenir compte peut entraîner un surdosage ; (f) l\'utilisateur a 18 ans ou plus, ou est un mineur sous supervision directe d\'un adulte responsable ; (g) l\'utilisateur accepte ces Conditions dans leur intégralité.',
    terms_s07_label:'Restriction d\'âge',
    terms_s07_plain:'Cette Application <strong>n\'est pas destinée aux personnes de moins de 18 ans</strong> sans supervision directe d\'un parent ou tuteur. L\'utilisation par les moins de 18 ans sans supervision est interdite.',
    terms_s07_legal:'L\'Application n\'est pas destinée à une utilisation par des personnes de moins de 18 ans sans la supervision directe d\'un parent ou d\'un tuteur légal. Le développeur ne permet pas l\'utilisation non supervisée par des mineurs et décline toute responsabilité pour les dommages résultant d\'une utilisation non autorisée par un mineur.',
    terms_s08_label:'Modifications',
    terms_s08_plain:'Le développeur peut modifier, suspendre ou interrompre l\'Application à tout moment sans préavis, et peut mettre à jour ces Conditions à tout moment. <strong>L\'utilisation continue après publication vaut acceptation des Conditions révisées.</strong>',
    terms_s08_legal:'Le développeur se réserve le droit de modifier, suspendre ou interrompre l\'Application à tout moment sans préavis, et de mettre à jour ces Conditions à tout moment. L\'utilisation continue de l\'Application après la publication des Conditions révisées vaut acceptation de celles-ci.',
    terms_s09_label:'Droit applicable et dispositions générales',
    terms_s09_plain:'Ces Conditions sont régies par le droit applicable au domicile du développeur. Les utilisateurs de l\'UE conservent tous leurs droits légaux au titre du RGPD et du droit de la consommation européen. Si une disposition est déclarée invalide, le reste reste en vigueur. Ces Conditions et la Politique de confidentialité constituent l\'accord complet entre vous et le développeur.',
    terms_s09_legal:'Ces Conditions sont régies par le droit applicable au domicile du développeur. Les utilisateurs de l\'UE conservent des droits non renoniables au titre du RGPD (Règlement (UE) 2016/679) et de la Directive UE 2019/771.<br><br><strong>Divisibilité.</strong> Si une disposition est déclarée invalide, elle sera modifiée au minimum nécessaire ; les dispositions restantes restent en pleine vigueur.<br><br><strong>Absence de renonciation.</strong> Le fait de ne pas faire valoir un droit ne constitue pas une renonciation à celui-ci.<br><br><strong>Accord complet.</strong> Ces Conditions et la Politique de confidentialité constituent l\'accord complet entre l\'utilisateur et le développeur.',
    terms_s10_label:'Développeur &amp; Contact',
    terms_s10_plain:'Cette Application est développée et maintenue par <strong>DMN</strong> (développeur individuel).<br>Pour questions ou exercice de droits légaux : <a href="mailto:basedoseapp@gmail.com">basedoseapp@gmail.com</a><br>Délai de réponse : jusqu\'à 30 jours calendaires (RGPD Art. 12).',
    terms_s10_legal:'Cette Application est développée et maintenue par DMN (développeur individuel). Votre utilisation est également régie par notre <a href="./privacy.html">Politique de confidentialité</a>, incorporée par référence.<br><br><strong>E-mail :</strong> <a href="mailto:basedoseapp@gmail.com">basedoseapp@gmail.com</a><br><strong>Délai de réponse :</strong> jusqu\'à 30 jours calendaires, conformément à l\'article 12 du RGPD.',

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
    disclaimer:'⚠️ Прыкладанне выконвае матэматычны разлік па ўведзеных дадзеных. Выніковая доза вызначаецца вамі і ўрачом з улікам вашага стану.',
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
    faq_regulatory:'⚠️ Гэтае прыкладанне не з\'яўляецца сертыфікаваным медыцынскім прыборам і не зацверджана ніводным рэгулятарным органам (FDA, EMA або аналагічным).',
    consent_title:'Перш чым працягнуць',
    consent_p1:'⚠️ Прыкладанне вылічвае прапанаваную дозу на аснове ўведзеных даных. Яно не ўлічвае актыўны інсулін, хваробу, стрэс і іншыя фактары. <strong>Вынік не з\'яўляецца медыцынскай рэкамендацыяй.</strong>',
    consent_p2:'⚠️ <strong>Усе рашэнні аб увядзенні дозы прымаеце вы разам з урачом.</strong> Распрацоўшчык (DMN) не нясе адказнасці за любую шкоду, якая ўзнікла ў выніку выкарыстання прыкладання.',
    consent_p3:'⚠️ Прыкладанне <strong>не з\'яўляецца сертыфікаваным медыцынскім прыборам</strong> і не зацверджана FDA, EMA або іншымі рэгулятарнымі органамі.',
    consent_checkbox:'Я прачытаў(ла) і прымаю <a href="./terms.html" target="_blank">Умовы выкарыстання</a> і <a href="./privacy.html" target="_blank">Палітыку канфідэнцыяльнасці</a>. Я разумею, што прыкладанне з\'яўляецца інфармацыйным інструментам, а ўсе рашэнні аб дазаванні — мая адказнасць.',
    consent_btn:'Працягнуць',
    terms_title:'Умовы выкарыстання',
    terms_date:'Апошняе абнаўленне: 25 сакавіка 2026 &middot; Версія 1.2',
    terms_intro:'Гэтыя Умовы выкарыстання («Умовы») рэгулюць доступ да вэб-прыкладання «Калькулятар дозы інсуліну» («Прыкладанне») і яго выкарыстанне. Выкарыстоўваючы Прыкладанне любым чынам, вы пацвярджаеце, што азнаёміліся з гэтымі Умовамі, зразумелі іх і згодны прытрымлівацца іх у поўным аб\'ёме. Калі вы не згодны, не выкарыстоўвайце Прыкладанне.',
    terms_s01_label:'Характар і прызначэнне прыкладання',
    terms_s01_plain:'Прыкладанне з\'яўляецца <strong>інструментам для матэматычных вылічэнняў выключна ў інфармацыйных мэтах</strong>. Яно прымяняе ўведзеныя вамі значэнні да стандартнай формулы болюсу. Вынік <strong>не з\'яўляецца рэкамендацыяй па дазаванні і не замяняе клінічнае меркаванне</strong>.<br><br>Прыкладанне <strong>не</strong> ўлічвае: актыўны інсулін (IOB), глікемічны індэкс, фізічную актыўнасць, хваробу, стрэс і іншыя фізіялагічныя фактары. Вынікі неабходна правяраць з урачом.',
    terms_s01_legal:'Прыкладанне з\'яўляецца інструментам для матэматычных вылічэнняў, прадастаўляемым выключна ў інфармацыйных мэтах. Вынік не з\'яўляецца рэкамендацыяй па дазаванні, медыцынскай парадай або заменай клінічнага меркавання. Прыкладанне не з\'яўляецца медыцынскім выробам па сэнсе Рэгламента ЕС 2017/745 (MDR), Рэгламента ЕС 2017/746 (IVDR), Закона ЗША FD&amp;C Act або аналагічнага нацыянальнага заканадаўства.',
    terms_s02_label:'Адсутнасць медыцынскіх рэкамендацый',
    terms_s02_plain:'Нішто ў гэтым Прыкладанні не з\'яўляецца медыцынскай парадай. <strong>Вам абсалютна забаронена выкарыстоўваць вынікі Прыкладання ў якасці адзінай падставы для прыняцця рашэнняў аб дазаванні інсуліну.</strong> Усе вынікі павінны быць незалежна праверены кваліфікаваным медыцынскім спецыялістам.',
    terms_s02_legal:'Нішто ў гэтым Прыкладанні не з\'яўляецца медыцынскай парадай, клінічнай рэкамендацыяй, дыягнозам, планам лячэння або рэцэптам. Карыстальніку абсалютна забаронена выкарыстоўваць вынік Прыкладання ў якасці адзінай падставы для прыняцця рашэнняў аб дазаванні інсуліну. Прыкладанне не ўстанаўлівае адносін урач-пацыент паміж распрацоўшчыкам (DMN) і карыстальнікам.',
    terms_s03_label:'Абмежаванне адказнасці',
    terms_s03_plain:'<strong>Распрацоўшчык (DMN) не нясе ніякай адказнасці</strong> за любую шкоду ці страты, якія ўзніклі ў выніку выкарыстання гэтага Прыкладання — уключаючы асабісты вушкод, гіпаглікемію, гіперглікемію, памылкі вылічэнняў або збоі іншых сэрвісаў. Выкарыстанне Прыкладання здзяйсняецца на ваш уласны рызыку.',
    terms_s03_legal:'У максімальна дапушчальнай законам меры распрацоўшчык (DMN) не нясе ніякай адказнасці за шкоду, звязаную з выкарыстаннем Прыкладання, уключаючы: (a) асабісты вушкод або смерць унаследак няправільнага дазавання; (b) гіпаглікемію, гіперглікемію, дыябетычны кетаацыдоз; (c) памылкі ў разліковых выніках; (d) страту даных; (e) недаступнасць Прыкладання; (f) збоі іншых сэрвісаў; (g) выкарыстанне ўстарэлай версіі; (h) выкарыстанне трэцімі асобамі, уключаючы непаўналетніх.',
    terms_s04_label:'Адсутнасць гарантый',
    terms_s04_plain:'Прыкладанне прадастаўляецца <strong>«як ёсць» і «па меры даступнасці»</strong> без якіх-небудзь гарантый дакладнасці, паўнаты або прыдатнасці для якой-небудзь мэты. Заўсёды правярайце вынікі з урачом.',
    terms_s04_legal:'Прыкладанне прадастаўляецца «як ёсць» без якіх-небудзь гарантый. Распрацоўшчык не гарантуе: (a) адсутнасці памылак; (b) адпаведнасці формулы індывідуальнаму клінічнаму пратаколу; (c) актуальнасці кэшаваных версій; (d) даступнасці ў любы момант; (e) правільнай працы на любой прыладзе.',
    terms_s05_label:'Рэгулятарны статус',
    terms_s05_plain:'Дадзенае Прыкладанне <strong>не з\'яўляецца сертыфікаваным медыцынскім прыборам</strong>. Яно не было праверана, адобрана або сертыфікавана FDA (ЗША), EMA (ЕС) або іншым рэгулятарным органам. Не мае знака CE. <strong>Дадзенае прыкладанне не з\'яўляецца сертыфікаваным медыцынскім прыборам і не зацверджана ніводным рэгулятарным органам (FDA, EMA або аналагічным).</strong>',
    terms_s05_legal:'Прыкладанне не было прадстаўлена, праверана, адобрана або сертыфікавана ніводным рэгулятарным органам, уключаючы FDA, EMA або нацыянальныя кампетэнтныя органы ЕС па MDR 2017/745 або IVDR 2017/746. Не класіфікуецца распрацоўшчыкам як праграмнае забеспячэнне як медыцынскі прыбор (SaMD).',
    terms_s06_label:'Адказнасць карыстальніка',
    terms_s06_plain:'<strong>Вы нясяце поўную і адзінаасобную адказнасць за ўсе рашэнні аб дазаванні інсуліну.</strong> Выкарыстоўваючы гэта Прыкладанне, вы пацвярджаеце, што не будзеце дазаваць інсулін, абапіраючыся выключна на яго вынікі, і разумееце, што Прыкладанне не ўлічвае актыўны інсулін (IOB).',
    terms_s06_legal:'Выкарыстоўваючы Прыкладанне, карыстальнік прызнае: (a) поўную адказнасць за ўсе рашэнні па дазаванні; (b) не ўводзіць інсулін, абапіраючыся выключна на вынік; (c) кансультацыю з урачом; (d) фізіялагічныя адрозненні могуць адрознівацца ад разліковых значэнняў; (e) Прыкладанне не ўлічвае IOB; (f) карыстальніку 18 гадоў або больш; (g) прыняцце Умоваў у поўным аб\'ёме.',
    terms_s07_label:'Узроставыя абмежаванні',
    terms_s07_plain:'Дадзенае Прыкладанне <strong>не прызначана для асоб да 18 гадоў</strong> без непасрэднага нагляду бацькоў або апекуна. Выкарыстанне асобамі да 18 гадоў без такога нагляду забаронена.',
    terms_s07_legal:'Прыкладанне не прызначана для выкарыстання асобамі малодшымі за 18 гадоў без непасрэднага нагляду бацькі або законнага апекуна. Распрацоўшчык не нясе адказнасці за шкоду, прычыненую несанкцыянаваным выкарыстаннем непаўналетнімі.',
    terms_s08_label:'Змены прыкладання і ўмоваў',
    terms_s08_plain:'Распрацоўшчык мае права змяняць, прыпыняць або спыняць Прыкладанне ў любы момант без папярэджання, а таксама абнаўляць гэтыя Умовы. <strong>Працяг выкарыстання пасля публікацыі азначае прыняцце зменёных Умоваў.</strong>',
    terms_s08_legal:'Распрацоўшчык пакідае за сабой права змяняць, прыпыняць або спыняць Прыкладанне ў любы момант без папярэджання, а таксама абнаўляць гэтыя Умовы ў любы час. Працяг выкарыстання Прыкладання пасля публікацыі змененых Умоваў азначае іх прыняцце.',
    terms_s09_label:'Прыменнае права і агульныя палажэнні',
    terms_s09_plain:'Гэтыя Умовы рэгулююцца заканадаўствам юрысдыкцыі месца жыхарства распрацоўшчыка. Карыстальнікі ЕС захоўваюць усе заканодаўча прадугледжаныя правы па GDPR і праве спажыўцоў ЕС. Калі якое-небудзь палажэнне прызнана несапраўдным, астатнія застаюцца ў сіле.',
    terms_s09_legal:'Гэтыя Умовы рэгулююцца заканадаўствам па месцы жыхарства распрацоўшчыка. Карыстальнікі ЕС захоўваюць непарушальныя правы па GDPR (Рэгламент (ЕС) 2016/679) і Дырэктыве ЕС 2019/771.<br><br><strong>Падзельнасць.</strong> Калі якое-небудзь палажэнне прызнана несапраўдным, яно змяняецца да мінімальна неабходнага; астатнія палажэнні застаюцца ў поўнай сіле.<br><br><strong>Адсутнасць адмовы.</strong> Невыкарыстанне права не з\'яўляецца адмовай ад яго.<br><br><strong>Поўнасць пагаднення.</strong> Гэтыя Умовы разам з Палітыкай канфідэнцыяльнасці складаюць поўнае пагадненне паміж карыстальнікам і распрацоўшчыкам.',
    terms_s10_label:'Распрацоўшчык і кантакты',
    terms_s10_plain:'Прыкладанне распрацавана і падтрымліваецца <strong>DMN</strong> (індывідуальны распрацоўшчык).<br>Па пытаннях або для рэалізацыі правоў: <a href="mailto:basedoseapp@gmail.com">basedoseapp@gmail.com</a><br>Тэрмін адказу: да 30 каляндарных дзён (GDPR, Art. 12).',
    terms_s10_legal:'Прыкладанне распрацавана і падтрымліваецца DMN (індывідуальны распрацоўшчык). Выкарыстанне таксама рэгулюецца нашай <a href="./privacy.html">Палітыкай канфідэнцыяльнасці</a>.<br><br><strong>Email:</strong> <a href="mailto:basedoseapp@gmail.com">basedoseapp@gmail.com</a><br><strong>Тэрмін адказу:</strong> да 30 каляндарных дзён згодна Art. 12 GDPR.',

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
    disclaimer:'⚠️ 本应用程序根据您输入的数据进行数学计算。最终剂量由您和医生根据您的状况共同确定。',
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
    consent_title:'继续之前',
    consent_p1:'⚠️ 本应用程序根据您输入的数据计算建议剂量。它不考虑活性胰岛素、疾病、压力或其他因素。<strong>结果不是医疗建议。</strong>',
    consent_p2:'⚠️ <strong>所有剂量决策由您和您的医生共同做出。</strong>应用程序开发者（DMN）对使用本应用程序造成的任何伤害不承担责任。',
    consent_p3:'⚠️ 本应用程序<strong>不是经认证的医疗器械</strong>，未经FDA、EMA或任何监管机构批准。',
    consent_checkbox:'我已阅读并接受<a href="./terms.html" target="_blank">使用条款</a>和<a href="./privacy.html" target="_blank">隐私政策</a>。我理解本应用程序仅为参考工具，所有剂量决策均由我负责。',
    consent_btn:'继续',
    terms_title:'使用条款',
    terms_date:'最后更新：2026年3月25日 &middot; 版本 1.2',
    terms_intro:'本使用条款（"条款"）规范您对胰岛素剂量计算器网络应用程序（"应用程序"）的访问和使用。通过以任何方式访问或使用本应用程序，您确认已阅读、理解并同意完全受本条款约束。如您不同意，请勿使用本应用程序。',
    terms_s01_label:'应用程序的性质和目的',
    terms_s01_plain:'本应用程序是一款<strong>仅用于参考的数学计算工具</strong>。它将您输入的数值（血糖、碳水化合物、ICR、ISF、目标血糖）应用于标准大剂量公式，并返回数字结果。该结果<strong>不是剂量建议，不是医疗建议，也不能替代临床判断</strong>。<br><br>本应用程序<strong>不</strong>考虑：活性胰岛素（IOB）、食物升糖指数、体育活动、疾病、压力或其他生理因素。结果须在采取任何行动前与医疗专业人员核实。',
    terms_s01_legal:'本应用程序是仅供参考的数学计算工具。其输出结果不是剂量建议、医疗建议或临床判断的替代品。本应用程序明确不属于欧盟法规2017/745（MDR）、欧盟法规2017/746（IVDR）、美国FD&amp;C法案或任何等效国家立法意义上的医疗器械。',
    terms_s02_label:'无医疗建议——绝对禁止单独依赖',
    terms_s02_plain:'本应用程序中的任何内容均不构成医疗建议。<strong>绝对禁止将本应用程序的结果作为任何胰岛素剂量决策的唯一依据。</strong>所有结果必须在注射任何胰岛素之前由合格的医疗专业人员独立验证。本应用程序不建立开发者（DMN）与用户之间的任何专业关系。',
    terms_s02_legal:'本应用程序中的任何内容——包括计算值、标签、提示、示例或默认参数——均不构成医疗建议、临床建议、诊断、预后、治疗计划或处方。绝对禁止用户将应用程序结果作为胰岛素剂量决策的唯一依据。本应用程序不建立开发者（DMN）与用户之间的医患关系。',
    terms_s03_label:'责任限制',
    terms_s03_plain:'<strong>开发者（DMN）对因使用本应用程序而产生的任何损失、伤害或损害概不负责</strong>——包括人身伤害、低血糖、高血糖、计算错误、数据丢失或第三方服务故障。使用本应用程序完全由您自担风险。',
    terms_s03_legal:'在适用法律允许的最大范围内，开发者（DMN）对因使用本应用程序而产生的任何损失概不负责，包括：<ol type="a"><li>因错误剂量导致的人身伤害或死亡；</li><li>低血糖、高血糖、糖尿病酮症酸中毒或其他医疗事件；</li><li>计算结果中的错误或不准确；</li><li>localStorage或浏览器缓存中的数据丢失；</li><li>应用程序不可用或故障，包括离线模式；</li><li>第三方服务故障（AdSense、GitHub Pages、CDN）；</li><li>使用缓存或过时版本；</li><li>第三方（包括未成年人）对本应用程序的依赖。</li></ol>',
    terms_s04_label:'无保证',
    terms_s04_plain:'本应用程序以<strong>"现状"和"按可用性"</strong>提供，不提供任何形式的保证。不保证准确性、完整性或适用于任何特定目的。请务必与医疗专业人员核实结果。',
    terms_s04_legal:'本应用程序以"现状"和"按可用性"提供，不提供任何明示、暗示或法定形式的保证。开发者不保证：(a)无错误；(b)大剂量公式符合用户的个人临床方案；(c)缓存版本的时效性；(d)随时可用；(e)在任何设备或浏览器上正常运行。',
    terms_s05_label:'监管状态',
    terms_s05_plain:'本应用程序<strong>不是经认证的医疗器械</strong>。未经FDA（美国）、EMA（欧盟）或任何其他监管机构审查、批准或认证。不带有CE标志。<strong>本应用程序不是经认证的医疗设备，未经任何监管机构（FDA、EMA或同等机构）批准。</strong>',
    terms_s05_legal:'本应用程序未经任何监管机构提交、审查、批准或认证，包括FDA、EMA或任何欧盟MDR 2017/745或IVDR 2017/746下的国家主管机构。不带有CE标志，未经过任何合规评估程序。开发者未将其归类为医疗器械软件（SaMD）。',
    terms_s06_label:'用户责任与确认',
    terms_s06_plain:'<strong>您对所有胰岛素剂量决策负全部和唯一责任。</strong>使用本应用程序即表示您确认不会仅依据其结果进行剂量注射，您已咨询或将咨询医疗专业人员，并且您了解本应用程序不考虑活性胰岛素（IOB）。',
    terms_s06_legal:'使用本应用程序，用户明确不可撤销地确认：(a)对所有剂量决策承担完全责任；(b)不会仅凭应用程序结果注射胰岛素；(c)已咨询或将咨询合格的医疗专业人员；(d)个体生理差异可能导致实际胰岛素效果与计算值有重大差异；(e)应用程序不考虑IOB，未考虑IOB可能导致过量注射；(f)用户年满18岁，或在负责任成年人直接监督下使用的未成年人；(g)用户接受本条款作为使用的约束条件。',
    terms_s07_label:'年龄限制',
    terms_s07_plain:'本应用程序<strong>不适合18岁以下</strong>未经父母或监护人直接监督的人士使用。18岁以下人士未经监督使用被禁止。',
    terms_s07_legal:'本应用程序不适合18岁以下人士在未经父母或法定监护人直接监督的情况下使用。开发者不允许未成年人无监督使用，对未成年人未经授权使用造成的伤害不承担责任。',
    terms_s08_label:'应用程序和条款的修改',
    terms_s08_plain:'开发者可随时无需通知地修改、暂停或终止应用程序，并可随时更新本条款。更新以修订版本号和"最后更新"日期标注。<strong>发布后继续使用即表示接受修订后的条款。</strong>',
    terms_s08_legal:'开发者保留随时无需通知地修改、暂停或终止应用程序的权利，以及随时更新本条款的权利。更新版本将以修订版本号和日期标注。发布修订条款后继续使用应用程序即表示接受修订后的条款。',
    terms_s09_label:'适用法律、争议解决及一般条款',
    terms_s09_plain:'本条款受开发者住所地适用法律管辖。欧盟用户根据GDPR和欧盟消费者保护法保留所有法定权利。如任何条款被认定无效，其余条款继续完全有效。本条款与隐私政策共同构成您与开发者之间的完整协议。',
    terms_s09_legal:'本条款受开发者住所地法律管辖。欧盟用户保留GDPR（法规(EU) 2016/679）和欧盟指令2019/771下不可放弃的权利。<br><br><strong>可分割性。</strong>如任何条款被认定无效，应将其修改至最低必要限度；其余条款继续完全有效。<br><br><strong>不弃权。</strong>未执行任何权利不构成放弃。<br><br><strong>完整协议。</strong>本条款与隐私政策共同构成用户与开发者之间的完整协议。',
    terms_s10_label:'开发者与联系方式',
    terms_s10_plain:'本应用程序由<strong>DMN</strong>（个人开发者）开发和维护。<br>如有关于本条款的问题或行使法律权利：<a href="mailto:basedoseapp@gmail.com">basedoseapp@gmail.com</a><br>回复时限：最多30个日历天（GDPR第12条）。',
    terms_s10_legal:'本应用程序由DMN（个人开发者）开发和维护。您的使用还受我们的<a href="./privacy.html">隐私政策</a>约束，该政策以引用方式纳入本条款。<br><br><strong>电子邮件：</strong><a href="mailto:basedoseapp@gmail.com">basedoseapp@gmail.com</a><br><strong>回复时限：</strong>最多30个日历天，依据GDPR第12条要求。',

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
const TERMS_VERSION   = '1.3'; // Increment on every Terms of Use update

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

// ── Terms clickwrap ───────────────────────────────────────────
function checkTermsConsent() {
  const accepted = localStorage.getItem('terms_accepted');
  const savedVer = localStorage.getItem('terms_version');
  if (accepted === 'true' && savedVer === TERMS_VERSION) return; // already accepted
  const modal = document.getElementById('terms-consent-modal');
  if (modal) modal.classList.add('show');
  // Block cookie banner until terms accepted
}

function acceptTerms() {
  localStorage.setItem('terms_accepted', 'true');
  localStorage.setItem('terms_version', TERMS_VERSION);
  localStorage.setItem('accepted_at', new Date().toISOString());
  const modal = document.getElementById('terms-consent-modal');
  if (modal) modal.classList.remove('show');
  // Now trigger cookie banner
  checkCookieConsent();
}

function onConsentCheckbox(cb) {
  const btn = document.getElementById('consent-continue-btn');
  if (btn) btn.disabled = !cb.checked;
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
  checkTermsConsent(); // Shows modal if needed; cookie banner fires inside acceptTerms()
  // checkCookieConsent() is called inside acceptTerms() to prevent two overlapping banners
  if (localStorage.getItem('terms_accepted') === 'true' &&
      localStorage.getItem('terms_version') === TERMS_VERSION) {
    checkCookieConsent(); // Already accepted — show cookie banner normally
  }
  updateOnline();

  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('./sw.js').catch(() => {});
  }
});
