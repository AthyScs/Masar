document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM loaded - initializing...');

    
    // ==========  Const Data Sections ==========

    // Grammar Data
    const lessons = {
            
    // ========== TERM 1 LESSONS ==========
        'present-simple': [
            `<div class="explanation-content"><h3>Present Simple Tense</h3><p>We use the Present Simple to talk about:</p><ul><li>✅ Habits and routines</li><li>✅ Facts and general truths</li><li>✅ Permanent situations</li><li>✅ Fixed arrangements</li></ul><div class="example-box"><h4>Examples:</h4><p>• I <strong>work</strong> every day.</p><p>• She <strong>likes</strong> coffee.</p><p>• The sun <strong>rises</strong> in the east.</p><p>• The train <strong>leaves</strong> at 8 PM.</p></div><div class="arabic-help"><h4>بالعربي:</h4><p>نستخدم المضارع البسيط للتحدث عن العادات والحقائق العامة والمواقف الدائمة والترتيبات الثابتة</p></div></div>`,
            `<div class="explanation-content"><h3>How to Form Present Simple</h3><div class="example-box"><h4>Positive Sentences:</h4><p><strong>I/You/We/They</strong> + verb (base form)</p><p>• I <strong>play</strong> football.</p><p><strong>He/She/It</strong> + verb + <strong>s</strong></p><p>• She <strong>plays</strong> football.</p></div><div class="example-box"><h4>Negative Sentences:</h4><p><strong>I/You/We/They</strong> + <strong>do not</strong> + verb</p><p>• They <strong>do not like</strong> coffee.</p><p><strong>He/She/It</strong> + <strong>does not</strong> + verb</p><p>• He <strong>does not work</strong> here.</p></div><div class="example-box"><h4>Questions:</h4><p><strong>Do</strong> + <strong>I/you/we/they</strong> + verb?</p><p>• <strong>Do</strong> you <strong>like</strong> pizza?</p><p><strong>Does</strong> + <strong>he/she/it</strong> + verb?</p><p>• <strong>Does</strong> she <strong>study</strong> English?</p></div><div class="arabic-help"><h4>ملاحظات مهمة:</h4><p>• نضيف "s" للفعل مع he/she/it</p><p>• نستخدم do not مع I/you/we/they</p><p>• نستخدم does not مع he/she/it</p></div></div>`,
            `<div class="exercise-content"><h3>Practice Exercise</h3><p>Fill in the blanks:</p><p>She _______ (go) to school every day.</p><input type="text" id="answer1" placeholder="Type answer"><p>They _______ (play) football.</p><input type="text" id="answer2" placeholder="Type answer"><br><br><button onclick="checkAnswers()">Check Answers</button><p id="feedback"></p></div>`
        ],
        'present-continuous': [
            `<div class="explanation-content"><h3>Present Continuous Tense</h3><p>We use the Present Continuous for:</p><ul><li>✅ Actions happening now</li><li>✅ Temporary situations</li><li>✅ Future arrangements</li></ul><div class="example-box"><h4>Examples:</h4><p>• I <strong>am studying</strong> now.</p><p>• She <strong>is staying</strong> with friends.</p><p>• We <strong>are meeting</strong> tomorrow.</p></div><div class="arabic-help"><h4>بالعربي:</h4><p>نستخدم المضارع المستمر للأفعال التي تحدث الآن، المواقف المؤقتة، والترتيبات المستقبلية</p></div></div>`,
            `<div class="explanation-content"><h3>Forming Present Continuous</h3><div class="example-box"><h4>Structure:</h4><p><strong>am/is/are + verb + ing</strong></p><p>• I <strong>am reading</strong></p><p>• He <strong>is writing</strong></p><p>• They <strong>are playing</strong></p></div><div class="arabic-help"><h4>القاعدة:</h4><p>نستخدم am مع I، is مع he/she/it، are مع you/we/they</p></div></div>`,
            `<div class="exercise-content"><h3>Practice Exercise</h3><p>Complete the sentences:</p><p>I _______ (read) a book now.</p><input type="text" id="answer1-pc" placeholder="Type answer"><p>They _______ (watch) TV.</p><input type="text" id="answer2-pc" placeholder="Type answer"><br><br><button onclick="checkAnswersPC()">Check Answers</button><p id="feedback-pc"></p></div>`
        ],
        'past-simple': [
            `<div class="explanation-content"><h3>Past Simple Tense</h3><p>We use the Past Simple for:</p><ul><li>✅ Completed actions in the past</li><li>✅ Past habits</li><li>✅ Past facts</li></ul><div class="example-box"><h4>Examples:</h4><p>• I <strong>visited</strong> Dubai last year.</p><p>• She <strong>worked</strong> in a school.</p><p>• They <strong>played</strong> football yesterday.</p></div><div class="arabic-help"><h4>بالعربي:</h4><p>نستخدم الماضي البسيط للأفعال المكتملة في الماضي، العادات الماضية، والحقائق الماضية</p></div></div>`,
            `<div class="explanation-content"><h3>Regular and Irregular Verbs</h3><div class="example-box"><h4>Regular Verbs (add -ed):</h4><p>• work → worked</p><p>• play → played</p><p>• study → studied</p></div><div class="example-box"><h4>Irregular Verbs:</h4><p>• go → went</p><p>• eat → ate</p><p>• see → saw</p></div><div class="arabic-help"><h4>أنواع الأفعال:</h4><p>الأفعال المنتظمة نضيف لها ed، الأفعال الشاذة لها تصريف خاص</p></div></div>`,
            `<div class="exercise-content"><h3>Practice Exercise</h3><p>Write the past simple:</p><p>She _______ (finish) her homework.</p><input type="text" id="answer1-ps" placeholder="Type answer"><p>They _______ (go) to the mall.</p><input type="text" id="answer2-ps" placeholder="Type answer"><br><br><button onclick="checkAnswersPS()">Check Answers</button><p id="feedback-ps"></p></div>`
        ],
        'past-continuous': [
            `<div class="explanation-content"><h3>Past Continuous Tense</h3><p>We use the Past Continuous for:</p><ul><li>✅ Actions in progress in the past</li><li>✅ Interrupted actions</li><li>✅ Two simultaneous past actions</li></ul><div class="example-box"><h4>Examples:</h4><p>• I <strong>was studying</strong> when you called.</p><p>• They <strong>were playing</strong> football at 5 PM.</p></div><div class="arabic-help"><h4>بالعربي:</h4><p>نستخدم الماضي المستمر للأفعال المستمرة في الماضي، الأفعال المتقطعة، والأفعال المتزامنة</p></div></div>`,
            `<div class="explanation-content"><h3>Forming Past Continuous</h3><div class="example-box"><h4>Structure:</h4><p><strong>was/were + verb + ing</strong></p><p>• I/He/She/It <strong>was studying</strong></p><p>• You/We/They <strong>were playing</strong></p></div><div class="arabic-help"><h4>القاعدة:</h4><p>نستخدم was مع I/he/she/it، were مع you/we/they</p></div></div>`,
            `<div class="exercise-content"><h3>Practice Exercise</h3><p>Complete the sentences:</p><p>I _______ (watch) TV at 8 PM.</p><input type="text" id="answer1-pct" placeholder="Type answer"><p>They _______ (study) when I arrived.</p><input type="text" id="answer2-pct" placeholder="Type answer"><br><br><button onclick="checkAnswersPCT()">Check Answers</button><p id="feedback-pct"></p></div>`
        ],
        'past-participle': [
            `<div class="explanation-content"><h3>Past Participle</h3><p>The Past Participle is used for:</p><ul><li>✅ Perfect tenses (have/has + past participle)</li><li>✅ Passive voice (be + past participle)</li><li>✅ Adjectives</li></ul><div class="example-box"><h4>Examples:</h4><p>• I have <strong>finished</strong> my work.</p><p>• The book was <strong>written</strong> by her.</p><p>• <strong>broken</strong> glass</p></div><div class="arabic-help"><h4>بالعربي:</h4><p>التصريف الثالث يستخدم في الأزمنة التامة، المبني للمجهول، وكمصفوفات</p></div></div>`,
            `<div class="explanation-content"><h3>Regular and Irregular Participles</h3><div class="example-box"><h4>Regular (add -ed):</h4><p>• work → worked</p><p>• play → played</p></div><div class="example-box"><h4>Irregular:</h4><p>• go → gone</p><p>• eat → eaten</p><p>• see → seen</p></div><div class="arabic-help"><h4>أنواع التصريف الثالث:</h4><p>الأفعال المنتظمة تنتهي ب ed، الأفعال الشاذة لها تصريف ثالث خاص</p></div></div>`,
            `<div class="exercise-content"><h3>Practice Exercise</h3><p>Write the past participle:</p><p>She has _______ (finish) her work.</p><input type="text" id="answer1-pp" placeholder="Type answer"><p>The window was _______ (break).</p><input type="text" id="answer2-pp" placeholder="Type answer"><br><br><button onclick="checkAnswersPP()">Check Answers</button><p id="feedback-pp"></p></div>`
        ],
        'past-passive': [
            `<div class="explanation-content"><h3>Past Passive Voice</h3><p>We use Past Passive when:</p><ul><li>✅ The action is more important than who did it</li><li>✅ We don't know who did the action</li><li>✅ It's obvious who did the action</li></ul><div class="example-box"><h4>Examples:</h4><p>• The book <strong>was written</strong> in 2020.</p><p>• The window <strong>was broken</strong> yesterday.</p></div><div class="arabic-help"><h4>بالعربي:</h4><p>نستخدم المبني للمجهول في الماضي عندما يكون الفعل أهم من الفاعل، أو عندما لا نعرف الفاعل</p></div></div>`,
            `<div class="explanation-content"><h3>Forming Past Passive</h3><div class="example-box"><h4>Structure:</h4><p><strong>was/were + past participle</strong></p><p>• The car <strong>was repaired</strong></p><p>• The books <strong>were sold</strong></p></div><div class="arabic-help"><h4>القاعدة:</h4><p>was/were + التصريف الثالث للفعل</p></div></div>`,
            `<div class="exercise-content"><h3>Practice Exercise</h3><p>Change to passive voice:</p><p>They built this house in 1990.</p><input type="text" id="answer1-ppv" placeholder="Type answer"><p>She wrote the letter.</p><input type="text" id="answer2-ppv" placeholder="Type answer"><br><br><button onclick="checkAnswersPPV()">Check Answers</button><p id="feedback-ppv"></p></div>`
        ],
            
    // ========== TERM 2 LESSONS ==========
            'comparatives-superlatives': [
            `<div class="explanation-content"><h3>Comparatives & Superlatives</h3><p>We use comparatives to compare two things and superlatives to compare three or more things:</p><ul><li>✅ Comparative: adjective + <strong>er</strong> or <strong>more</strong> + adjective</li><li>✅ Superlative: adjective + <strong>est</strong> or <strong>most</strong> + adjective</li></ul><div class="example-box"><h4>Examples:</h4><p>• Tall → <strong>taller</strong> → <strong>tallest</strong></p><p>• Beautiful → <strong>more beautiful</strong> → <strong>most beautiful</strong></p><p>• Good → <strong>better</strong> → <strong>best</strong> (irregular)</p></div><div class="arabic-help"><h4>بالعربي:</h4><p>نستخدم المقارنة للمقارنة بين شيئين والتفضيل للمقارنة بين ثلاثة أشياء أو أكثر</p></div></div>`,
            `<div class="explanation-content"><h3>Forming Comparatives & Superlatives</h3><div class="example-box"><h4>One-syllable adjectives:</h4><p>Add <strong>-er / -est</strong></p><p>• small → smaller → smallest</p><p>• big → bigger → biggest</p></div><div class="example-box"><h4>Two+ syllable adjectives:</h4><p>Use <strong>more / most</strong></p><p>• interesting → more interesting → most interesting</p><p>• careful → more careful → most careful</p></div><div class="example-box"><h4>Irregular adjectives:</h4><p>• good → better → best</p><p>• bad → worse → worst</p><p>• far → farther/further → farthest/furthest</p></div><div class="arabic-help"><h4>القاعدة:</h4><p>الصفات القصيرة نضيف er/est، الصفات الطويلة نستخدم more/most</p></div></div>`,
            `<div class="exercise-content"><h3>Practice Exercise</h3><p>Complete the sentences:</p><p>My brother is _______ (tall) than me.</p><input type="text" id="answer1-cs" placeholder="Type answer"><p>This is the _______ (interesting) book I've ever read.</p><input type="text" id="answer2-cs" placeholder="Type answer"><br><br><button onclick="checkAnswersCS()">Check Answers</button><p id="feedback-cs"></p></div>`
        ],
        'question-tags': [
            `<div class="explanation-content"><h3>Question Tags</h3><p>Question tags are short questions at the end of statements:</p><ul><li>✅ Used to confirm information</li><li>✅ Ask for agreement</li><li>✅ Make conversation flow</li></ul><div class="example-box"><h4>Examples:</h4><p>• You like coffee, <strong>don't you?</strong></p><p>• She isn't coming, <strong>is she?</strong></p><p>• They can swim, <strong>can't they?</strong></p></div><div class="arabic-help"><h4>بالعربي:</h4><p>أسئلة الذيل تستخدم للتأكيد أو طلب الموافقة على المعلومة</p></div></div>`,
            `<div class="explanation-content"><h3>Forming Question Tags</h3><div class="example-box"><h4>Rules:</h4><p>1. Positive statement → negative tag</p><p>• You <strong>are</strong> tired, <strong>aren't you?</strong></p><p>2. Negative statement → positive tag</p><p>• She <strong>doesn't</strong> work, <strong>does she?</strong></p><p>3. Use the same auxiliary verb</p><p>• They <strong>can</strong> help, <strong>can't they?</strong></p></div><div class="example-box"><h4>Special Cases:</h4><p>• I am → aren't I?</p><p>• Let's → shall we?</p><p>• Imperatives → will you/won't you?</p></div><div class="arabic-help"><h4>القاعدة:</h4><p>الجملة المثبتة ← سؤال منفي، الجملة المنفية ← سؤال مثبت</p></div></div>`,
            `<div class="exercise-content"><h3>Practice Exercise</h3><p>Add question tags:</p><p>She speaks French, _______?</p><input type="text" id="answer1-qt" placeholder="Type answer"><p>You don't like pizza, _______?</p><input type="text" id="answer2-qt" placeholder="Type answer"><br><br><button onclick="checkAnswersQT()">Check Answers</button><p id="feedback-qt"></p></div>`
        ],
        'past-simple-present-perfect': [
            `<div class="explanation-content"><h3>Past Simple vs Present Perfect</h3><p>Key differences:</p><ul><li>✅ <strong>Past Simple</strong>: Finished time in the past</li><li>✅ <strong>Present Perfect</strong>: Connection between past and present</li><li>✅ <strong>Past Simple</strong>: Specific time mentioned</li><li>✅ <strong>Present Perfect</strong>: No specific time mentioned</li></ul><div class="example-box"><h4>Examples:</h4><p><strong>Past Simple:</strong> I <strong>visited</strong> Paris last year.</p><p><strong>Present Perfect:</strong> I <strong>have visited</strong> Paris three times.</p></div><div class="arabic-help"><h4>بالعربي:</h4><p>الماضي البسيط لحدث انتهى في الماضي، المضارع التام لحدث له علاقة بالحاضر</p></div></div>`,
            `<div class="explanation-content"><h3>When to Use Each Tense</h3><div class="example-box"><h4>Past Simple:</h4><p>• Finished actions with time words: <strong>yesterday, last week, in 2020</strong></p><p>• Sequence of past actions</p><p>• Habit in the past (used to)</p></div><div class="example-box"><h4>Present Perfect:</h4><p>• Experiences (ever/never)</p><p>• Unfinished time (today, this week)</p><p>• Recent past (just)</p><p>• Results in present</p></div><div class="arabic-help"><h4>التوقيت:</h4><p>الماضي البسيط: عندما نذكر وقت محدد، المضارع التام: عندما لا نذكر وقت محدد</p></div></div>`,
            `<div class="exercise-content"><h3>Practice Exercise</h3><p>Choose the correct tense:</p><p>I _______ (see) that movie yesterday.</p><input type="text" id="answer1-pspp" placeholder="Type answer"><p>She _______ (live) here since 2020.</p><input type="text" id="answer2-pspp" placeholder="Type answer"><br><br><button onclick="checkAnswersPSPP()">Check Answers</button><p id="feedback-pspp"></p></div>`
        ],
        'present-perfect-modifiers': [
            `<div class="explanation-content"><h3>Present Perfect with just, still, already, and yet</h3><p>These words modify the meaning of Present Perfect:</p><ul><li>✅ <strong>just</strong>: Very recent action</li><li>✅ <strong>already</strong>: Sooner than expected</li><li>✅ <strong>yet</strong>: Expected but not happened (questions/negatives)</li><li>✅ <strong>still</strong>: Continuing longer than expected</li></ul><div class="example-box"><h4>Examples:</h4><p>• I've <strong>just</strong> finished my homework.</p><p>• She's <strong>already</strong> seen that movie.</p><p>• Have you finished <strong>yet</strong>?</p><p>• I <strong>still</strong> haven't found my keys.</p></div><div class="arabic-help"><h4>بالعربي:</h4><p>just = للتو، already = بالفعل، yet = حتى الآن (للنفي والاستفهام)، still = لا يزال</p></div></div>`,
            `<div class="explanation-content"><h3>Position of Modifiers</h3><div class="example-box"><h4>Word Order:</h4><p><strong>just/already</strong>: between have/has and past participle</p><p>• I have <strong>just</strong> arrived.</p><p>• She has <strong>already</strong> eaten.</p><p><strong>yet</strong>: at the end of sentence</p><p>• Have you finished <strong>yet</strong>?</p><p>• I haven't seen it <strong>yet</strong>.</p><p><strong>still</strong>: before haven't/hasn't</p><p>• I <strong>still</strong> haven't decided.</p></div><div class="arabic-help"><h4>موقع الكلمات:</h4><p>just/already بين الفعل المساعد والتصريف الثالث، yet في نهاية الجملة</p></div></div>`,
            `<div class="exercise-content"><h3>Practice Exercise</h3><p>Complete with just, already, yet, or still:</p><p>I've _______ finished my work. (very recently)</p><input type="text" id="answer1-ppmod" placeholder="Type answer"><p>Have you seen the new movie _______?</p><input type="text" id="answer2-ppmod" placeholder="Type answer"><br><br><button onclick="checkAnswersPPMod()">Check Answers</button><p id="feedback-ppmod"></p></div>`
        ],
        'can-cannot': [
            `<div class="explanation-content"><h3>Can and Can't (Cannot)</h3><p>We use can/can't to express:</p><ul><li>✅ Ability (present)</li><li>✅ Permission</li><li>✅ Possibility</li><li>✅ Request</li></ul><div class="example-box"><h4>Examples:</h4><p>• I <strong>can</strong> speak English. (ability)</p><p>• You <strong>can</strong> go now. (permission)</p><p>• It <strong>can</strong> be cold in winter. (possibility)</p><p>• <strong>Can</strong> you help me? (request)</p></div><div class="arabic-help"><h4>بالعربي:</h4><p>نستخدم can للتعبير عن القدرة، الإذن، الاحتمال، أو الطلب</p></div></div>`,
            `<div class="explanation-content"><h3>Forming Sentences with Can</h3><div class="example-box"><h4>Positive:</h4><p><strong>Subject + can + verb (base form)</strong></p><p>• I can swim.</p><p>• She can drive.</p></div><div class="example-box"><h4>Negative:</h4><p><strong>Subject + cannot/can't + verb</strong></p><p>• They cannot come.</p><p>• He can't see.</p></div><div class="example-box"><h4>Questions:</h4><p><strong>Can + subject + verb?</strong></p><p>• Can you hear me?</p><p>• Can we leave?</p></div><div class="arabic-help"><h4>القاعدة:</h4><p>can يتبعها الفعل في صورته الأساسية بدون to</p></div></div>`,
            `<div class="exercise-content"><h3>Practice Exercise</h3><p>Complete the sentences:</p><p>My sister _______ (can/speak) three languages.</p><input type="text" id="answer1-can" placeholder="Type answer"><p>_______ you help me with this? (question)</p><input type="text" id="answer2-can" placeholder="Type answer"><br><br><button onclick="checkAnswersCan()">Check Answers</button><p id="feedback-can"></p></div>`
        ],
        'passive-voice': [
            `<div class="explanation-content"><h3>Passive Voice: to be + past participle</h3><p>We use passive voice when:</p><ul><li>✅ The action is more important than who did it</li><li>✅ We don't know who did the action</li><li>✅ It's obvious who did the action</li><li>✅ In formal writing</li></ul><div class="example-box"><h4>Examples:</h4><p>• The cake <strong>was eaten</strong> by the children.</p><p>• English <strong>is spoken</strong> here.</p><p>• The letter <strong>has been sent</strong>.</p></div><div class="arabic-help"><h4>بالعربي:</h4><p>نستخدم المبني للمجهول عندما يكون الفعل أهم من الفاعل أو عندما لا نعرف الفاعل</p></div></div>`,
            `<div class="explanation-content"><h3>Forming Passive Voice</h3><div class="example-box"><h4>Structure:</h4><p><strong>to be + past participle</strong></p><p><strong>Present:</strong> am/is/are + past participle</p><p>• The room <strong>is cleaned</strong> daily.</p><p><strong>Past:</strong> was/were + past participle</p><p>• The car <strong>was repaired</strong> yesterday.</p><p><strong>Present Perfect:</strong> have/has been + past participle</p><p>• The work <strong>has been finished</strong>.</p></div><div class="arabic-help"><h4>القاعدة:</h4><p>فعل الكون/المساعد + التصريف الثالث للفعل الرئيسي</p></div></div>`,
            `<div class="exercise-content"><h3>Practice Exercise</h3><p>Change to passive voice:</p><p>They clean the office every day.</p><input type="text" id="answer1-passive" placeholder="Type answer"><p>Someone stole my bicycle yesterday.</p><input type="text" id="answer2-passive" placeholder="Type answer"><br><br><button onclick="checkAnswersPassive()">Check Answers</button><p id="feedback-passive"></p></div>`
        ]
    };
    // Vocabulary Data with Complete Lists
    const vocabularyData = {
        // ========== TERM 1 VOCABULARY CATEGORIES ==========
    'communication': {
        title: 'Communication',
        words: [
            { word: 'Body language', translation: 'لغة الجسد', definition: 'Non-verbal communication through gestures, posture, and facial expressions', example: 'Understanding body language is important in job interviews.', exampleArabic: 'فهم لغة الجسد مهم في مقابلات العمل.' },
            { word: 'Printing', translation: 'الطباعة', definition: 'The process of reproducing text and images using ink and a printing press', example: 'Printing technology has advanced significantly over the years.', exampleArabic: 'تطورت تكنولوجيا الطباعة بشكل كبير على مر السنين.' },
            { word: 'Email', translation: 'البريد الإلكتروني', definition: 'Electronic mail sent over the internet', example: 'Please send me an email with the details.', exampleArabic: 'يرجى إرسال بريد إلكتروني لي بالتفاصيل.' },
            { word: 'Diary', translation: 'مذكرات', definition: 'A book in which one keeps a daily record of events and experiences', example: 'She writes in her diary every night.', exampleArabic: 'تكتب في مذكراتها كل ليلة.' },
            { word: 'Interact with', translation: 'التفاعل مع', definition: 'To communicate or engage with someone', example: 'Children need to interact with their peers.', exampleArabic: 'يحتاج الأطفال إلى التفاعل مع أقرانهم.' },
            { word: 'Through', translation: 'من خلال', definition: 'By means of; using a particular method', example: 'We communicate through video calls.', exampleArabic: 'نتواصل من خلال مكالمات الفيديو.' },
            { word: 'Communicate with', translation: 'التواصل مع', definition: 'To share information or ideas with someone', example: 'It\'s important to communicate with your team.', exampleArabic: 'من المهم التواصل مع فريقك.' },
            { word: 'Wireless', translation: 'لاسلكي', definition: 'Using radio waves instead of wires to send signals', example: 'We have wireless internet throughout the building.', exampleArabic: 'لدينا إنترنت لاسلكي في جميع أنحاء المبنى.' },
            { word: 'Text messaging', translation: 'المراسلة النصية', definition: 'Sending short written messages between mobile phones', example: 'Text messaging is convenient for quick updates.', exampleArabic: 'المراسلة النصية مناسبة للتحديثات السريعة.' },
            { word: 'Speech', translation: 'الكلام', definition: 'The expression of thoughts and feelings using spoken language', example: 'His speech at the conference was inspiring.', exampleArabic: 'كان خطابه في المؤتمر ملهمًا.' },
            { word: 'Social networking', translation: 'التواصل الاجتماعي', definition: 'Using internet platforms to connect with people', example: 'Social networking sites help people stay connected.', exampleArabic: 'تساعد مواقع التواصل الاجتماعي الناس على البقاء على اتصال.' },
            { word: 'Image', translation: 'صورة', definition: 'A representation of the external form of a person or thing', example: 'The image was clear and high-quality.', exampleArabic: 'كانت الصورة واضحة وعالية الجودة.' },
            { word: 'Mobile phone', translation: 'الهاتف المحمول', definition: 'A portable telephone that can make and receive calls over a radio link', example: 'Almost everyone has a mobile phone these days.', exampleArabic: 'يكاد يكون الجميع يملك هاتفًا محمولًا في هذه الأيام.' },
            { word: 'Move forward', translation: 'المضي قدماً', definition: 'To progress or advance', example: 'We need to move forward with the project.', exampleArabic: 'نحن بحاجة إلى المضي قدمًا في المشروع.' },
            { word: 'At a faster rate', translation: 'بمعدل أسرع', definition: 'More quickly; with increased speed', example: 'Technology is advancing at a faster rate.', exampleArabic: 'تتطور التكنولوجيا بمعدل أسرع.' },
            { word: 'Newspaper', translation: 'جريدة', definition: 'A printed publication containing news, articles, and advertisements', example: 'I read the newspaper every morning.', exampleArabic: 'أقرأ الجريدة كل صباح.' },
            { word: 'Communication skills', translation: 'مهارات التواصل', definition: 'The ability to convey information effectively', example: 'Good communication skills are essential for leadership.', exampleArabic: 'مهارات التواصل الجيدة ضرورية للقيادة.' },
            { word: 'Skills', translation: 'مهارات', definition: 'The ability to do something well', example: 'He has excellent technical skills.', exampleArabic: 'لديه مهارات تقنية ممتازة.' },
            { word: 'Radio', translation: 'راديو', definition: 'The transmission and reception of electromagnetic waves of radio frequency', example: 'We listen to the news on the radio.', exampleArabic: 'نستمع إلى الأخبار على الراديو.' },
            { word: 'Blog', translation: 'مدونة', definition: 'A regularly updated website or web page written in an informal style', example: 'She writes a travel blog about her adventures.', exampleArabic: 'تكتب مدونة سفر عن مغامراتها.' },
            { word: 'Confident', translation: 'واثق', definition: 'Feeling or showing certainty about something', example: 'He was confident about his presentation.', exampleArabic: 'كان واثقًا من عرضه التقديمي.' },
            { word: 'Connect to', translation: 'الاتصال بـ', definition: 'To link or join something to something else', example: 'Connect your phone to the Wi-Fi.', exampleArabic: 'قم بتوصيل هاتفك بشبكة Wi-Fi.' },
            { word: 'Log onto', translation: 'تسجيل الدخول إلى', definition: 'To gain access to a computer system', example: 'Log onto your account to check messages.', exampleArabic: 'سجل الدخول إلى حسابك للتحقق من الرسائل.' },
            { word: 'Dial a number', translation: 'طلب رقم', definition: 'To enter a telephone number on a phone', example: 'Dial the number and wait for the ring.', exampleArabic: 'اطلب الرقم وانتظر الرنين.' },
            { word: 'Voicemail', translation: 'البريد الصوتي', definition: 'A system for recording telephone messages', example: 'Leave a message on my voicemail.', exampleArabic: 'اترك رسالة على بريدي الصوتي.' },
            { word: 'Text', translation: 'نص', definition: 'Written words, especially in a digital format', example: 'Send me a text when you arrive.', exampleArabic: 'أرسل لي رسالة نصية عند وصولك.' },
            { word: 'Conversation', translation: 'محادثة', definition: 'A talk between two or more people', example: 'We had an interesting conversation about politics.', exampleArabic: 'أجرينا محادثة مثيرة للاهتمام حول السياسة.' },
            { word: 'Download', translation: 'تنزيل', definition: 'To copy data from a computer system to another device', example: 'Download the app from the official website.', exampleArabic: 'قم بتنزيل التطبيق من الموقع الرسمي.' },
            { word: 'Gesture', translation: 'إيماءة', definition: 'A movement of part of the body to express an idea', example: 'A thumbs-up is a positive gesture.', exampleArabic: 'الإبهام لأعلى إيماءة إيجابية.' },
            { word: 'Internet', translation: 'الإنترنت', definition: 'Global network connecting millions of computers', example: 'The internet has revolutionized communication.', exampleArabic: 'أحدثت الإنترنت ثورة في مجال الاتصالات.' },
            { word: 'Job', translation: 'وظيفة', definition: 'A paid position of regular employment', example: 'She got a new job at the bank.', exampleArabic: 'حصلت على وظيفة جديدة في البنك.' },
            { word: 'Interview', translation: 'مقابلة', definition: 'A formal meeting where questions are asked', example: 'The job interview went very well.', exampleArabic: 'سارت مقابلة العمل بشكل جيد للغاية.' },
            { word: 'Job interview', translation: 'مقابلة عمل', definition: 'A meeting where an employer assesses a job applicant', example: 'He prepared thoroughly for his job interview.', exampleArabic: 'استعد جيدًا لمقابلة عمله.' },
            { word: 'Laptop', translation: 'حاسوب محمول', definition: 'A portable computer', example: 'I take my laptop to work every day.', exampleArabic: 'آخذ حاسوبي المحمول إلى العمل كل يوم.' },
            { word: 'Liar', translation: 'كاذب', definition: 'A person who tells lies', example: 'Don\'t trust him; he\'s a known liar.', exampleArabic: 'لا تثق به؛ إنه كاذب معروف.' },
            { word: 'Message', translation: 'رسالة', definition: 'A verbal, written, or recorded communication', example: 'I received your message yesterday.', exampleArabic: 'تلقيت رسالتك أمس.' },
            { word: 'Opinion', translation: 'رأي', definition: 'A view or judgment formed about something', example: 'Everyone is entitled to their own opinion.', exampleArabic: 'لكل شخص الحق في رأيه الخاص.' },
            { word: 'Emergency', translation: 'طوارئ', definition: 'A serious, unexpected situation requiring immediate action', example: 'Call this number in case of emergency.', exampleArabic: 'اتصل بهذا الرقم في حالة الطوارئ.' },
            { word: 'Privacy', translation: 'خصوصية', definition: 'The state of being free from public attention', example: 'Respect other people\'s privacy.', exampleArabic: 'احترم خصوصية الآخرين.' },
            { word: 'Marvelous', translation: 'رائع', definition: 'Extremely good or wonderful', example: 'We had a marvelous time at the party.', exampleArabic: 'قضينا وقتًا رائعًا في الحفلة.' },
            { word: 'Get rid of', translation: 'التخلص من', definition: 'To remove or discard something unwanted', example: 'We need to get rid of this old furniture.', exampleArabic: 'نحن بحاجة إلى التخلص من هذا الأثاث القديم.' },
            { word: 'Constant', translation: 'مستمر', definition: 'Occurring continuously over a period of time', example: 'The constant noise was annoying.', exampleArabic: 'كان الضجيج المستمر مزعجًا.' },
            { word: 'Noise pollution', translation: 'التلوث الضوضائي', definition: 'Harmful or annoying levels of noise', example: 'Noise pollution affects mental health.', exampleArabic: 'يؤثر التلوث الضوضائي على الصحة النفسية.' },
            { word: 'Throw away', translation: 'رمي', definition: 'To discard something as useless', example: 'Don\'t throw away those papers.', exampleArabic: 'لا ترمي تلك الأوراق.' },
            { word: 'Wonderful', translation: 'رائع', definition: 'Inspiring delight, pleasure, or admiration', example: 'We had a wonderful vacation.', exampleArabic: 'قضينا إجازة رائعة.' },
            { word: 'Continuous', translation: 'مستمر', definition: 'Forming an unbroken whole; without interruption', example: 'We need continuous improvement.', exampleArabic: 'نحن بحاجة إلى تحسين مستمر.' },
            { word: 'Idea', translation: 'فكرة', definition: 'A thought or suggestion about a possible course of action', example: 'That\'s an excellent idea!', exampleArabic: 'هذه فكرة ممتازة!' },
            { word: 'Sound', translation: 'صوت', definition: 'Vibrations that travel through the air and can be heard', example: 'The sound of rain is relaxing.', exampleArabic: 'صوت المطر مريح.' },
            { word: 'Website', translation: 'موقع إلكتروني', definition: 'A collection of web pages on the internet', example: 'Visit our website for more information.', exampleArabic: 'زوروا موقعنا الإلكتروني للمزيد من المعلومات.' },
            { word: 'Key in', translation: 'إدخال', definition: 'To enter data using a keyboard', example: 'Key in your password to continue.', exampleArabic: 'أدخل كلمة المرور للمتابعة.' },
            { word: 'Switch off', translation: 'إيقاف التشغيل', definition: 'To turn off an electrical device', example: 'Switch off the lights before leaving.', exampleArabic: 'أوقف تشغيل الأنوار قبل المغادرة.' },
            { word: 'Switch on', translation: 'تشغيل', definition: 'To turn on an electrical device', example: 'Switch on the computer to start working.', exampleArabic: 'شغل الكمبيوتر لبدء العمل.' }
        ]
    },
    'teenage-things': {
        title: 'Those Teenage Things',
        words: [
            { word: 'Adolescent', translation: 'مراهق', definition: 'A young person in the process of developing into an adult', example: 'Adolescents often experience emotional changes.', exampleArabic: 'غالبًا ما يمر المراهقون بتغيرات عاطفية.' },
            { word: 'Hang out', translation: 'التجمع', definition: 'Spend time relaxing or socializing', example: 'Teenagers like to hang out at the mall.', exampleArabic: 'يحب المراهقون التجمع في المركز التجاري.' },
            { word: 'Self-conscious', translation: 'مرتبك', definition: 'Nervous or uncomfortable because of how you appear to others', example: 'She felt self-conscious about her new haircut.', exampleArabic: 'شعرت بالارتباك بسبب قصّة شعرها الجديدة.' },
            { word: 'Stereotype', translation: 'صورة نمطية', definition: 'A widely held but oversimplified image of a person or group', example: 'We should avoid using stereotypes.', exampleArabic: 'يجب أن نتجنب استخدام الصور النمطية.' },
            { word: 'Proofread', translation: 'مراجعة النص', definition: 'To read and correct written material before printing or publication', example: 'Always proofread your essays before submitting them.', exampleArabic: 'دائمًا راجع مقالاتك قبل تسليمها.' },
            { word: 'Emotional', translation: 'عاطفي', definition: 'Relating to a person\'s emotions', example: 'Teenagers can be very emotional.', exampleArabic: 'يمكن أن يكون المراهقون عاطفيين جدًا.' },
            { word: 'Hormones', translation: 'هرمونات', definition: 'Chemical substances that regulate body functions', example: 'Hormonal changes affect teenage behavior.', exampleArabic: 'تؤثر التغيرات الهرمونية على سلوك المراهقين.' },
            { word: 'Interrogate', translation: 'استجواب', definition: 'To ask questions thoroughly and aggressively', example: 'Parents sometimes interrogate their teenage children.', exampleArabic: 'أحيانًا يستجوب الآباء أبناءهم المراهقين.' },
            { word: 'Moody', translation: 'متقلب المزاج', definition: 'Having moods that change quickly', example: 'Teenagers can be moody sometimes.', exampleArabic: 'يمكن أن يكون المراهقون متقلبي المزاج أحيانًا.' },
            { word: 'Self-esteem', translation: 'تقدير الذات', definition: 'Confidence in one\'s own worth or abilities', example: 'Positive feedback boosts self-esteem.', exampleArabic: 'يعزز التعليق الإيجابي تقدير الذات.' },
            { word: 'Change', translation: 'تغيير', definition: 'To make or become different', example: 'Adolescence is a time of significant change.', exampleArabic: 'المراهقة فترة تغيير كبير.' },
            { word: 'Childhood', translation: 'الطفولة', definition: 'The state or period of being a child', example: 'She has happy memories of her childhood.', exampleArabic: 'لديها ذكريات سعيدة عن طفولتها.' },
            { word: 'Adulthood', translation: 'مرحلة البلوغ', definition: 'The state or period of being an adult', example: 'He entered adulthood with confidence.', exampleArabic: 'دخل مرحلة البلوغ بثقة.' },
            { word: 'Mutual friend', translation: 'صديق مشترك', definition: 'A person who is a friend to two or more people', example: 'We met through a mutual friend.', exampleArabic: 'التقينا من خلال صديق مشترك.' },
            { word: 'Close friend', translation: 'صديق مقرب', definition: 'A very good friend with whom one shares personal matters', example: 'She is my close friend since childhood.', exampleArabic: 'هي صديقتي المقربة منذ الطفولة.' },
            { word: 'Fair-weather', translation: 'منافق', definition: 'Reliable only during good times', example: 'A fair-weather friend disappears during difficulties.', exampleArabic: 'يختفي الصديق المنافق أثناء الصعوبات.' },
            { word: 'Lifelong friend', translation: 'صديق العمر', definition: 'A friend for the entire duration of one\'s life', example: 'They have been lifelong friends.', exampleArabic: 'كانوا أصدقاء العمر.' },
            { word: 'Physical', translation: 'جسدي', definition: 'Relating to the body as opposed to the mind', example: 'Physical changes occur during puberty.', exampleArabic: 'تحدث تغيرات جسدية أثناء البلوغ.' },
            { word: 'Increase', translation: 'زيادة', definition: 'To become greater in size, amount, or degree', example: 'There is an increase in responsibility during adolescence.', exampleArabic: 'هناك زيادة في المسؤولية خلال المراهقة.' },
            { word: 'Decrease', translation: 'انخفاض', definition: 'To become smaller or fewer in size, amount, or degree', example: 'Parental supervision decreases as teens grow older.', exampleArabic: 'ينخفض الإشراف الأبوي مع تقدم المراهقين في السن.' },
            { word: 'Growth spurt', translation: 'طفرة النمو', definition: 'A rapid increase in height and weight', example: 'Teenagers experience growth spurts during puberty.', exampleArabic: 'يمر المراهقون بطفرة في النمو خلال البلوغ.' },
            { word: 'Peer pressure', translation: 'ضغط الأقران', definition: 'Influence from members of one\'s peer group', example: 'Many teenagers face peer pressure in school.', exampleArabic: 'يواجه العديد من المراهقين ضغط الأقران في المدرسة.' },
            { word: 'Adolescence', translation: 'المراهقة', definition: 'The period between childhood and adulthood', example: 'Adolescence can be challenging for many young people.', exampleArabic: 'يمكن أن تكون المراهقة صعبة للعديد من الشباب.' },
            { word: 'Poet', translation: 'شاعر', definition: 'A person who writes poems', example: 'Many teenagers express themselves through poetry.', exampleArabic: 'يعبر العديد من المراهقين عن أنفسهم من خلال الشعر.' },
            { word: 'Poem', translation: 'قصيدة', definition: 'A piece of writing that expresses emotions and ideas', example: 'She wrote a beautiful poem about friendship.', exampleArabic: 'كتبت قصيدة جميلة عن الصداقة.' },
            { word: 'Poetry', translation: 'شعر', definition: 'Literary work in which special intensity is given to language', example: 'He has a deep appreciation for poetry.', exampleArabic: 'لديه تقدير عميق للشعر.' },
            { word: 'Mental', translation: 'ذهني', definition: 'Relating to the mind', example: 'Mental health is important during teenage years.', exampleArabic: 'الصحة النفسية مهمة خلال سنوات المراهقة.' },
            { word: 'Conflict', translation: 'صراع', definition: 'A serious disagreement or argument', example: 'Teenagers sometimes experience conflict with parents.', exampleArabic: 'يواجه المراهقون أحيانًا صراعًا مع الآباء.' },
            { word: 'Cool', translation: 'رائع', definition: 'Fashionably attractive or impressive', example: 'That new hairstyle looks really cool.', exampleArabic: 'تلك القصة الشعرية الجديدة تبدو رائعة حقًا.' },
            { word: 'Edit', translation: 'تحرير', definition: 'To prepare written material for publication', example: 'You should edit your essay before submitting it.', exampleArabic: 'يجب أن تحرر مقالتك قبل تسليمها.' },
            { word: 'Chill out', translation: 'الاسترخاء', definition: 'To relax or calm down', example: 'Just chill out and don\'t stress about it.', exampleArabic: 'فقط استرخ ولا تقلق بشأن ذلك.' },
            { word: 'Critical', translation: 'نقدي', definition: 'Expressing adverse or disapproving comments', example: 'Teenagers can be critical of authority figures.', exampleArabic: 'يمكن أن يكون المراهقون نقديين تجاه شخصيات السلطة.' },
            { word: 'Suspicious', translation: 'مشبوه', definition: 'Having or showing cautious distrust of someone or something', example: 'Parents can become suspicious of teenage behavior.', exampleArabic: 'يمكن أن يصبح الآباء مشبوهين بشأن سلوك المراهقين.' },
            { word: 'Glued to', translation: 'ملتصق بـ', definition: 'Unable to look away from; fixed on', example: 'Teenagers are often glued to their phones.', exampleArabic: 'غالبًا ما يكون المراهقون ملتصقين بهواتفهم.' },
            { word: 'Related to', translation: 'ذو صلة بـ', definition: 'Connected with; associated with', example: 'These issues are related to teenage development.', exampleArabic: 'هذه القضايا ذات صلة بتطور المراهقين.' },
            { word: 'Security', translation: 'أمان', definition: 'The state of being free from danger or threat', example: 'Teenagers need emotional security.', exampleArabic: 'يحتاج المراهقون إلى الأمان العاطفي.' },
            { word: 'Acne', translation: 'حب الشباب', definition: 'A skin condition common among teenagers', example: 'Many teenagers struggle with acne.', exampleArabic: 'يعاني العديد من المراهقين من حب الشباب.' },
            { word: 'Decide', translation: 'يتخذ قرار', definition: 'To make a choice from a number of alternatives', example: 'Teenagers need to learn to decide for themselves.', exampleArabic: 'يحتاج المراهقون إلى تعلم اتخاذ القرارات لأنفسهم.' },
            { word: 'Decision', translation: 'قرار', definition: 'A conclusion or resolution reached after consideration', example: 'Making good decisions is an important life skill.', exampleArabic: 'اتخاذ قرارات جيدة مهارة حياتية مهمة.' },
            { word: 'Independent', translation: 'مستقل', definition: 'Free from outside control; self-reliant', example: 'Teenagers want to become more independent.', exampleArabic: 'يريد المراهقون أن يصبحوا أكثر استقلالية.' },
            { word: 'Development', translation: 'تطور', definition: 'The process of growing or changing', example: 'Adolescence is a period of rapid development.', exampleArabic: 'المراهقة فترة تطور سريع.' },
            { word: 'Transition', translation: 'انتقال', definition: 'The process of changing from one state to another', example: 'The transition from childhood to adulthood can be challenging.', exampleArabic: 'يمكن أن يكون الانتقال من الطفولة إلى البلوغ صعبًا.' },
            { word: 'Teenagers', translation: 'مراهقون', definition: 'People aged between 13 and 19 years', example: 'Teenagers have their own unique challenges.', exampleArabic: 'يواجه المراهقون تحدياتهم الفريدة.' },
            { word: 'Adults', translation: 'بالغون', definition: 'People who are fully grown and developed', example: 'Teenagers look forward to becoming adults.', exampleArabic: 'يتطلع المراهقون إلى أن يصبحوا بالغين.' }
        ]
    },
    'travel': {
        title: 'Travellers and Tourists',
        words: [
            { word: 'Stunning', translation: 'مذهل', definition: 'Extremely impressive or attractive', example: 'The view from the mountain was stunning.', exampleArabic: 'كان المنظر من الجبل مذهلاً.' },
            { word: 'Scenery', translation: 'مشهد طبيعي', definition: 'The natural features of a landscape', example: 'We enjoyed the beautiful scenery during our drive.', exampleArabic: 'استمتعنا بالمشهد الطبيعي الجميل أثناء قيادتنا.' },
            { word: 'Explore', translation: 'استكشاف', definition: 'Travel through an unfamiliar area to learn about it', example: 'We want to explore the ancient ruins.', exampleArabic: 'نريد استكشاف الآثار القديمة.' },
            { word: 'Environment', translation: 'بيئة', definition: 'The natural world as a whole or a particular habitat', example: 'We should protect the environment when traveling.', exampleArabic: 'يجب أن نحمي البيئة عند السفر.' },
            { word: 'Cosmopolitan', translation: 'عالمي', definition: 'Familiar with and at ease in many different countries and cultures', example: 'New York is a cosmopolitan city.', exampleArabic: 'نيويورك مدينة عالمية.' },
            { word: 'Exotic', translation: 'غريب', definition: 'Originating in or characteristic of a distant foreign country', example: 'We tried exotic fruits at the local market.', exampleArabic: 'جربنا فواكه غريبة في السوق المحلي.' },
            { word: 'Secluded', translation: 'منعزل', definition: 'Not seen or visited by many people; sheltered and private', example: 'We found a secluded beach away from tourists.', exampleArabic: 'وجدنا شاطئًا منعزلاً بعيدًا عن السياح.' },
            { word: 'Adventure', translation: 'مغامرة', definition: 'An unusual and exciting experience', example: 'Our trip to the jungle was a real adventure.', exampleArabic: 'كانت رحلتنا إلى الغابة مغامرة حقيقية.' },
            { word: 'Itinerary', translation: 'الجدول الزمني', definition: 'A planned route or journey', example: 'Our travel itinerary includes five cities.', exampleArabic: 'يتضمن جدول سفرنا خمس مدن.' },
            { word: 'Represent', translation: 'يمثل', definition: 'To act or speak officially for someone', example: 'The tour guide represents the travel company.', exampleArabic: 'يمثل الدليل السياحي شركة السفر.' },
            { word: 'Representative', translation: 'مندوب', definition: 'A person chosen or appointed to act or speak for others', example: 'The hotel representative met us at the airport.', exampleArabic: 'التقى بنا مندوب الفندق في المطار.' },
            { word: 'Conference', translation: 'مؤتمر', definition: 'A formal meeting for discussion', example: 'He attended a business conference in Dubai.', exampleArabic: 'حضر مؤتمرًا تجاريًا في دبي.' },
            { word: 'Hire', translation: 'استئجار', definition: 'To obtain the use of something for payment', example: 'We decided to hire a car for our trip.', exampleArabic: 'قررنا استئجار سيارة لرحلتنا.' },
            { word: 'Expert', translation: 'خبير', definition: 'A person who has a comprehensive knowledge in a particular area', example: 'The tour was led by a local expert.', exampleArabic: 'قاد الجولة خبير محلي.' },
            { word: 'Experienced', translation: 'ذو خبرة', definition: 'Having knowledge or skill from doing something', example: 'We chose an experienced travel guide.', exampleArabic: 'اخترنا دليل سفر ذا خبرة.' },
            { word: 'Wildlife', translation: 'الحياة البرية', definition: 'Animals living in their natural environment', example: 'We saw amazing wildlife in the national park.', exampleArabic: 'شاهدنا حياة برية مذهلة في المنتزه الوطني.' },
            { word: 'Hike', translation: 'تنزه سيرًا', definition: 'To walk for a long distance in the countryside', example: 'We plan to hike in the mountains tomorrow.', exampleArabic: 'نخطط للتنزه سيرًا في الجبال غدًا.' },
            { word: 'Chef', translation: 'طاه', definition: 'A professional cook', example: 'The hotel has an excellent French chef.', exampleArabic: 'يوجد في الفندق طاهٍ فرنسي ممتاز.' },
            { word: 'Extreme', translation: 'متطرف', definition: 'Reaching a high or the highest degree', example: 'Extreme sports are popular among adventurous travelers.', exampleArabic: 'الرياضات المتطرفة شائعة بين المسافرين المغامرين.' },
            { word: 'Ingredients', translation: 'مكونات', definition: 'The components of a dish or meal', example: 'We bought fresh ingredients from the local market.', exampleArabic: 'اشترينا مكونات طازجة من السوق المحلي.' },
            { word: 'Habitat', translation: 'موطن', definition: 'The natural home or environment of an animal or plant', example: 'We visited a wildlife habitat conservation area.', exampleArabic: 'زرنا منطقة حفظ موائل الحياة البرية.' },
            { word: 'Variety', translation: 'تنوع', definition: 'The quality of being different or diverse', example: 'The resort offers a variety of activities.', exampleArabic: 'يقدم المنتجع مجموعة متنوعة من الأنشطة.' },
            { word: 'Coast', translation: 'ساحل', definition: 'The part of the land near the sea', example: 'We drove along the beautiful coast.', exampleArabic: 'قدنا على طول الساحل الجميل.' },
            { word: 'Reason', translation: 'سبب', definition: 'A cause, explanation, or justification', example: 'The main reason for our trip was relaxation.', exampleArabic: 'كان السبب الرئيسي لرحلتنا هو الاسترخاء.' },
            { word: 'Chance', translation: 'فرصة', definition: 'An opportunity to do something', example: 'We had the chance to visit historical sites.', exampleArabic: 'كانت لدينا الفرصة لزيارة المواقع التاريخية.' },
            { word: 'Restaurant', translation: 'مطعم', definition: 'A place where people pay to sit and eat meals', example: 'We tried a famous local restaurant.', exampleArabic: 'جربنا مطعمًا محليًا مشهورًا.' },
            { word: 'Shady', translation: 'مظلل', definition: 'Sheltered from direct sunlight', example: 'We found a shady spot for our picnic.', exampleArabic: 'وجدنا مكانًا مظللاً لنزهتنا.' },
            { word: 'Breed', translation: 'سلالة', definition: 'A particular type of animal that has been developed by people', example: 'We saw a rare breed of birds in the sanctuary.', exampleArabic: 'شاهدنا سلالة نادرة من الطيور في المحمية.' },
            { word: 'Masterpiece', translation: 'تحفة فنية', definition: 'A work of outstanding artistry or skill', example: 'The ancient temple is an architectural masterpiece.', exampleArabic: 'المعبد القديم تحفة معمارية.' },
            { word: 'Destination', translation: 'وجهة', definition: 'The place to which someone or something is going', example: 'Our final destination was the beach resort.', exampleArabic: 'كانت وجهتنا النهائية منتجع الشاطئ.' },
            { word: 'Discover', translation: 'اكتشاف', definition: 'To find something unexpectedly or during a search', example: 'We discovered a hidden waterfall.', exampleArabic: 'اكتشفنا شلالًا مخفيًا.' },
            { word: 'Sand dunes', translation: 'الكثبان الرملية', definition: 'Hills of sand built by wind', example: 'The desert has beautiful sand dunes.', exampleArabic: 'يوجد في الصحراء كثبان رملية جميلة.' },
            { word: 'Encounter', translation: 'مواجهة', definition: 'An unexpected or casual meeting', example: 'We had an interesting encounter with local artists.', exampleArabic: 'كانت لدينا مواجهة مثيرة للاهتمام مع فنانين محليين.' },
            { word: 'Magnificent', translation: 'مهيب', definition: 'Extremely beautiful, elaborate, or impressive', example: 'The palace was absolutely magnificent.', exampleArabic: 'كان القصر مهيبًا للغاية.' },
            { word: 'Package holiday', translation: 'عطلة مجمعة', definition: 'A holiday organized by a travel company', example: 'We booked a package holiday to Greece.', exampleArabic: 'حجزنا عطلة مجمعة إلى اليونان.' },
            { word: 'Reveal', translation: 'يكشف', definition: 'To make previously unknown information known', example: 'The guide revealed the history of the castle.', exampleArabic: 'كشف الدليل تاريخ القلعة.' },
            { word: 'Sanctuary', translation: 'محمية', definition: 'A place of refuge or safety', example: 'We visited a wildlife sanctuary.', exampleArabic: 'زرنا محمية للحياة البرية.' },
            { word: 'Sample', translation: 'عينة', definition: 'A small part or quantity intended to show what the whole is like', example: 'We sampled local cuisine at the food festival.', exampleArabic: 'تذوقنا المأكولات المحلية في مهرجان الطعام.' },
            { word: 'Stroll', translation: 'نزهة', definition: 'To walk in a leisurely way', example: 'We took a stroll along the river.', exampleArabic: 'أخذنا نزهة على طول النهر.' },
            { word: 'Wonder', translation: 'عجب', definition: 'A feeling of amazement and admiration', example: 'The ancient city filled us with wonder.', exampleArabic: 'ملأتنا المدينة القديمة بالعجب.' },
            { word: 'Wander', translation: 'يتجول', definition: 'To walk or move in a leisurely or aimless way', example: 'We wandered through the narrow streets.', exampleArabic: 'تجولنا في الشوارع الضيقة.' },
            { word: 'Tour', translation: 'جولة', definition: 'A journey for pleasure visiting several places', example: 'We took a guided tour of the historical sites.', exampleArabic: 'أخذنا جولة إرشادية للمواقع التاريخية.' },
            { word: 'Design', translation: 'تصميم', definition: 'A plan or drawing produced to show the look of something', example: 'We admired the design of the traditional houses.', exampleArabic: 'أعجبنا تصميم المنازل التقليدية.' },
            { word: 'Palace', translation: 'قصر', definition: 'A large and impressive building forming the official residence', example: 'We visited the royal palace.', exampleArabic: 'زرنا القصر الملكي.' },
            { word: 'Mosque', translation: 'مسجد', definition: 'A Muslim place of worship', example: 'The ancient mosque was beautifully decorated.', exampleArabic: 'كان المسجد القديم مزينًا بشكل جميل.' },
            { word: 'Dessert', translation: 'حلوى', definition: 'The sweet course eaten at the end of a meal', example: 'We tried traditional local desserts.', exampleArabic: 'جربنا الحلويات المحلية التقليدية.' },
            { word: 'Desert', translation: 'صحراء', definition: 'A barren area of landscape with little precipitation', example: 'We crossed the desert by camel.', exampleArabic: 'عبرنا الصحراء على الجمال.' },
            { word: 'Emerald', translation: 'زمرد', definition: 'A bright green precious stone', example: 'The sea had an emerald color.', exampleArabic: 'كان للبحر لون زمردي.' },
            { word: 'Tiles', translation: 'بلاط', definition: 'Thin pieces of baked clay used for covering surfaces', example: 'The floor was covered with beautiful tiles.', exampleArabic: 'كانت الأرضية مغطاة ببلاط جميل.' },
            { word: 'Museum', translation: 'متحف', definition: 'A building where objects of historical, scientific, or artistic interest are kept', example: 'We spent the afternoon at the museum.', exampleArabic: 'قضينا بعد الظهر في المتحف.' },
            { word: 'Attack', translation: 'هجوم', definition: 'To take aggressive action against', example: 'We were warned about possible insect attacks in the jungle.', exampleArabic: 'تم تحذيرنا من احتمالية هجوم الحشرات في الغابة.' },
            { word: 'Bay', translation: 'خليج', definition: 'A broad inlet of the sea where the land curves inward', example: 'We sailed across the beautiful bay.', exampleArabic: 'أبحرنا عبر الخليج الجميل.' },
            { word: 'Craft', translation: 'حرفة', definition: 'An activity involving skill in making things by hand', example: 'We learned about traditional crafts from local artisans.', exampleArabic: 'تعلمنا عن الحرف التقليدية من الحرفيين المحليين.' },
            { word: 'Lake', translation: 'بحيرة', definition: 'A large body of water surrounded by land', example: 'We went swimming in the clear lake.', exampleArabic: 'ذهبنا للسباحة في البحيرة الصافية.' },
            { word: 'Destroy', translation: 'تدمير', definition: 'To put an end to the existence of something by damaging or attacking it', example: 'The ancient city was destroyed by an earthquake.', exampleArabic: 'دمرت المدينة القديمة بزلزال.' },
            { word: 'Shore', translation: 'شاطئ', definition: 'The land along the edge of a sea, lake, or other large body of water', example: 'We walked along the shore at sunset.', exampleArabic: 'مشينا على طول الشاطئ عند غروب الشمس.' }
        ]
    },
    'innovation': {
        title: 'Innovation',
        words: [
            { word: 'According to', translation: 'وفقًا لـ', definition: 'As stated by or in', example: 'According to the report, technology is advancing rapidly.', exampleArabic: 'وفقًا للتقرير، تتقدم التكنولوجيا بسرعة.' },
            { word: 'Architect', translation: 'مهندس معماري', definition: 'A person who designs buildings and supervises their construction', example: 'The architect created an innovative building design.', exampleArabic: 'أنشأ المهندس المعماري تصميم بناء مبتكر.' },
            { word: 'Available', translation: 'متاح', definition: 'Able to be used or obtained', example: 'The new software update is now available.', exampleArabic: 'تحديث البرنامج الجديد متاح الآن.' },
            { word: 'Complain about', translation: 'يشكو من', definition: 'To express dissatisfaction or annoyance about something', example: 'Customers complain about faulty products.', exampleArabic: 'يشكو العملاء من المنتجات المعيبة.' },
            { word: 'Complaint', translation: 'شكوى', definition: 'A statement that something is unsatisfactory or unacceptable', example: 'We received a complaint about the device.', exampleArabic: 'تلقينا شكوى حول الجهاز.' },
            { word: 'Satisfied', translation: 'راضي', definition: 'Contented; pleased', example: 'The customers were satisfied with the innovative solution.', exampleArabic: 'كان العملاء راضين عن الحل المبتكر.' },
            { word: 'Convenient', translation: 'مريح', definition: 'Fitting in well with a person\'s needs, activities, and plans', example: 'Mobile apps make life more convenient.', exampleArabic: 'تجعل التطبيقات المحمولة الحياة أكثر راحة.' },
            { word: 'Electronic', translation: 'إلكتروني', definition: 'Using or involving technology based on electronics', example: 'Electronic devices have become essential.', exampleArabic: 'أصبحت الأجهزة الإلكترونية ضرورية.' },
            { word: 'Electricity', translation: 'كهرباء', definition: 'A form of energy resulting from the existence of charged particles', example: 'Electricity powers most modern innovations.', exampleArabic: 'تشغل الكهرباء معظم الابتكارات الحديثة.' },
            { word: 'Easy', translation: 'سهل', definition: 'Achieved without great effort', example: 'The new interface makes the app easy to use.', exampleArabic: 'تسهل الواجهة الجديدة استخدام التطبيق.' },
            { word: 'Essay', translation: 'مقال', definition: 'A short piece of writing on a particular subject', example: 'She wrote an essay about technological innovation.', exampleArabic: 'كتبت مقالاً عن الابتكار التكنولوجي.' },
            { word: 'Faulty', translation: 'معيب', definition: 'Not working correctly; having defects', example: 'The company recalled the faulty products.', exampleArabic: 'استدعت الشركة المنتجات المعيبة.' },
            { word: 'Global warming', translation: 'الاحتباس الحراري', definition: 'The gradual increase in Earth\'s temperature', example: 'Innovation can help solve global warming.', exampleArabic: 'يمكن أن يساعد الابتكار في حل مشكلة الاحتباس الحراري.' },
            { word: 'Harmful', translation: 'ضار', definition: 'Causing or likely to cause harm', example: 'Some innovations can be harmful to the environment.', exampleArabic: 'يمكن أن تكون بعض الابتكارات ضارة بالبيئة.' },
            { word: 'Repair', translation: 'إصلاح', definition: 'To fix or mend something that is broken', example: 'It\'s cheaper to repair than to buy new.', exampleArabic: 'الإصلاح أرخص من الشراء الجديد.' },
            { word: 'Fix', translation: 'إصلاح', definition: 'To repair or mend something', example: 'We need to fix the broken machine.', exampleArabic: 'نحن بحاجة إلى إصلاح الجهاز المعطل.' },
            { word: 'Systems', translation: 'أنظمة', definition: 'Sets of connected things or parts forming a complex whole', example: 'Modern transportation systems are highly efficient.', exampleArabic: 'أنظمة النقل الحديثة فعالة للغاية.' },
            { word: 'Device', translation: 'جهاز', definition: 'A piece of equipment made for a particular purpose', example: 'This smart device can control your entire home.', exampleArabic: 'يمكن لهذا الجهاز الذكي التحكم في منزلك بالكامل.' },
            { word: 'Innovate', translation: 'يبتكر', definition: 'To make changes by introducing new methods, ideas, or products', example: 'Companies must innovate to stay competitive.', exampleArabic: 'يجب على الشركات الابتكار للبقاء في المنافسة.' },
            { word: 'Innovation', translation: 'ابتكار', definition: 'A new method, idea, or product', example: 'Technological innovation has changed our lives.', exampleArabic: 'غير الابتكار التكنولوجي حياتنا.' },
            { word: 'Discover', translation: 'يكتشف', definition: 'To find something unexpectedly or during a search', example: 'Scientists continue to discover new things.', exampleArabic: 'يواصل العلماء اكتشاف أشياء جديدة.' },
            { word: 'Nuclear weapons', translation: 'أسلحة نووية', definition: 'Explosive devices that derive destructive force from nuclear reactions', example: 'The invention of nuclear weapons changed warfare.', exampleArabic: 'غير اختراع الأسلحة النووية الحرب.' },
            { word: 'Smart', translation: 'ذكي', definition: 'Having or showing intelligence; using advanced technology', example: 'Smart homes make life more convenient.', exampleArabic: 'تجعل المنازل الذكية الحياة أكثر راحة.' },
            { word: 'Guarantee', translation: 'ضمان', definition: 'A formal promise or assurance', example: 'The product comes with a two-year guarantee.', exampleArabic: 'يأتي المنتج مع ضمان لمدة عامين.' },
            { word: 'Appliances', translation: 'أجهزة', definition: 'Devices or machines used in the home', example: 'Modern kitchen appliances save time.', exampleArabic: 'توفّر أجهزة المطبخ الحديثة الوقت.' },
            { word: 'Equipment', translation: 'معدات', definition: 'The necessary items for a particular purpose', example: 'The factory uses advanced equipment.', exampleArabic: 'يستخدم المصنع معدات متقدمة.' },
            { word: 'Medicine', translation: 'طب', definition: 'The science or practice of the diagnosis, treatment, and prevention of disease', example: 'Medical innovation saves lives.', exampleArabic: 'ينقذ الابتكار الطبي الأرواح.' },
            { word: 'Destroy', translation: 'يدمر', definition: 'To put an end to the existence of something', example: 'Some innovations can destroy traditional industries.', exampleArabic: 'يمكن لبعض الابتكارات أن تدمر الصناعات التقليدية.' },
            { word: 'Destruction', translation: 'تدمير', definition: 'The action or process of causing so much damage that something no longer exists', example: 'We must avoid environmental destruction.', exampleArabic: 'يجب أن نتجنب التدمير البيئي.' },
            { word: 'Dissatisfied', translation: 'غير راض', definition: 'Not content or happy with something', example: 'Customers were dissatisfied with the product quality.', exampleArabic: 'كان العملاء غير راضين عن جودة المنتج.' },
            { word: 'Transport', translation: 'نقل', definition: 'To take or carry people or goods from one place to another', example: 'Innovations in transport have made travel faster.', exampleArabic: 'جعلت الابتكارات في النقل السفر أسرع.' },
            { word: 'Transportation', translation: 'مواصلات', definition: 'The movement of people or goods from one place to another', example: 'Modern transportation systems are efficient.', exampleArabic: 'أنظمة المواصلات الحديثة فعالة.' },
            { word: 'Limitations', translation: 'قيود', definition: 'Restrictions or weaknesses', example: 'Every innovation has its limitations.', exampleArabic: 'لكل ابتكار قيوده.' },
            { word: 'Audio', translation: 'صوتي', definition: 'Relating to sound or hearing', example: 'The audio quality of the device is excellent.', exampleArabic: 'جودة الصوت في الجهاز ممتازة.' },
            { word: 'Listen', translation: 'يستمع', definition: 'To give attention to sound', example: 'Listen carefully to the instructions.', exampleArabic: 'استمع جيدًا للتعليمات.' },
            { word: 'Visual', translation: 'بصري', definition: 'Relating to seeing or sight', example: 'The presentation has excellent visual effects.', exampleArabic: 'يحتوي العرض على تأثيرات بصرية ممتازة.' },
            { word: 'Sight', translation: 'بصر', definition: 'The faculty or power of seeing', example: 'The device helps people with poor sight.', exampleArabic: 'يساعد الجهاز الأشخاص ذوي البصر الضعيف.' },
            { word: 'Education', translation: 'تعليم', definition: 'The process of receiving or giving systematic instruction', example: 'Technology has transformed education.', exampleArabic: 'غيرت التكنولوجيا التعليم.' },
            { word: 'Password', translation: 'كلمة مرور', definition: 'A secret word or phrase used to gain access', example: 'Create a strong password for security.', exampleArabic: 'أنشئ كلمة مرور قوية للأمان.' },
            { word: 'Rules', translation: 'قواعد', definition: 'One of a set of explicit or understood regulations', example: 'Follow the safety rules when using equipment.', exampleArabic: 'اتبع قواعد السلامة عند استخدام المعدات.' },
            { word: 'Recommend', translation: 'يوصي', definition: 'To put forward with approval as being suitable', example: 'I recommend this innovative product.', exampleArabic: 'أوصي بهذا المنتج المبتكر.' },
            { word: 'Maximum', translation: 'أقصى', definition: 'As great, high, or intense as possible', example: 'The device has a maximum capacity of 500GB.', exampleArabic: 'الجهاز له سعة قصوى تبلغ 500 جيجابايت.' },
            { word: 'Minimum', translation: 'حد أدنى', definition: 'The least or smallest amount or quantity', example: 'There is a minimum age requirement.', exampleArabic: 'هناك حد أدنى لمتطلب العمر.' },
            { word: 'Discovery', translation: 'اكتشاف', definition: 'The process of finding something new', example: 'The discovery of electricity changed the world.', exampleArabic: 'غير اكتشاف الكهرباء العالم.' },
            { word: 'Cosmetics', translation: 'مستحضرات تجميل', definition: 'Substances applied to the body to enhance appearance', example: 'The cosmetics industry uses innovative formulas.', exampleArabic: 'تستخدم صناعة مستحضرات التجميل صيغًا مبتكرة.' },
            { word: 'Claims', translation: 'ادعاءات', definition: 'Statements that something is true', example: 'Read the product claims carefully.', exampleArabic: 'اقرأ ادعاءات المنتج بعناية.' },
            { word: 'Ticket', translation: 'تذكرة', definition: 'A piece of paper or card that gives the holder a right', example: 'Buy your ticket online for convenience.', exampleArabic: 'اشتر تذكرتك عبر الإنترنت للراحة.' }
        ]
    },
    // ========== TERM 2 VOCABULARY CATEGORIES ==========
        'brightest-best': {
        title: 'The Brightest & The Best',
        words: [
            { word: 'Athlete', translation: 'رياضي', definition: 'A person who is proficient in sports and other forms of physical exercise', example: 'The athlete trained hard for the competition.', exampleArabic: 'تدرب الرياضي بجد للمنافسة.' },
            { word: 'Compete', translation: 'يتنافس', definition: 'To strive to gain or win something by defeating or establishing superiority over others', example: 'Many countries compete in the Olympic Games.', exampleArabic: 'تتنافس العديد من الدول في الألعاب الأولمبية.' },
            { word: 'Elegant', translation: 'أنيق', definition: 'Graceful and stylish in appearance or manner', example: 'She wore an elegant dress to the party.', exampleArabic: 'ارتدت فستاناً أنيقاً للحفلة.' },
            { word: 'Architect', translation: 'مهندس معماري', definition: 'A person who designs buildings and supervises their construction', example: 'The architect created a modern building design.', exampleArabic: 'صمم المهندس المعماري مبنى حديثاً.' },
            { word: 'Prestigious', translation: 'مرموق', definition: 'Inspiring respect and admiration; having high status', example: 'He graduated from a prestigious university.', exampleArabic: 'تخرج من جامعة مرموقة.' },
            { word: 'Champion', translation: 'بطل', definition: 'A person who has defeated all opponents in a competition', example: 'She became the world champion in swimming.', exampleArabic: 'أصبحت بطلة العالم في السباحة.' },
            { word: 'Contest', translation: 'مسابقة', definition: 'An event in which people compete for supremacy', example: 'The singing contest attracted many participants.', exampleArabic: 'جذبت مسابقة الغناء العديد من المشاركين.' },
            { word: 'Host', translation: 'يستضيف', definition: 'To act as host at an event or for a television or radio program', example: 'Our country will host the next world cup.', exampleArabic: 'ستستضيف بلادنا كأس العالم القادم.' },
            { word: 'Select', translation: 'يختار', definition: 'To choose something or someone from a group', example: 'They will select the best candidates for the job.', exampleArabic: 'سيختارون أفضل المرشحين للوظيفة.' },
            { word: 'Deadline', translation: 'موعد نهائي', definition: 'The latest time or date by which something should be completed', example: 'The deadline for applications is tomorrow.', exampleArabic: 'الموعد النهائي للتقديم هو غداً.' },
            { word: 'Include', translation: 'يتضمن', definition: 'To contain or have as part of a whole', example: 'The price includes breakfast and dinner.', exampleArabic: 'يتضمن السعر الإفطار والعشاء.' },
            { word: 'Handover', translation: 'تسليم', definition: 'The act of passing control or responsibility to someone else', example: 'The handover of the project will happen next week.', exampleArabic: 'سيتم تسليم المشروع الأسبوع القادم.' },
            { word: 'Location', translation: 'موقع', definition: 'A particular place or position', example: 'We need to find a good location for the meeting.', exampleArabic: 'نحتاج إلى إيجاد موقع جيد للاجتماع.' },
            { word: 'Height', translation: 'ارتفاع', definition: 'The measurement from base to top or from head to foot', example: 'The height of the building is impressive.', exampleArabic: 'ارتفاع المبنى مثير للإعجاب.' },
            { word: 'Cost', translation: 'تكلفة', definition: 'An amount that has to be paid or spent to buy or obtain something', example: 'The cost of living has increased recently.', exampleArabic: 'ارتفعت تكلفة المعيشة مؤخراً.' },
            { word: 'Cheap', translation: 'رخيص', definition: 'Low in price; worth more than its cost', example: 'We found cheap flights to Dubai.', exampleArabic: 'وجدنا رحلات طيران رخيصة إلى دبي.' },
            { word: 'Expensive', translation: 'غالي', definition: 'Costing a lot of money', example: 'This restaurant is too expensive for me.', exampleArabic: 'هذا المطعم غالي جداً بالنسبة لي.' },
            { word: 'Tower', translation: 'برج', definition: 'A tall narrow building, either free-standing or forming part of a building', example: 'The clock tower is a famous landmark.', exampleArabic: 'برج الساعة معلم شهير.' },
            { word: 'Reach', translation: 'يصل', definition: 'To arrive at a place or achieve something after time or effort', example: 'We hope to reach our destination by noon.', exampleArabic: 'نأمل أن نصل إلى وجهتنا بحلول الظهيرة.' },
            { word: 'Altitude', translation: 'ارتفاع عن سطح البحر', definition: 'The height of an object or point in relation to sea level or ground level', example: 'The plane flies at a high altitude.', exampleArabic: 'الطائرة تحلق على ارتفاع عالٍ.' },
            { word: 'Fever', translation: 'حمى', definition: 'An abnormally high body temperature', example: 'He has a fever and needs to rest.', exampleArabic: 'لديه حمى ويحتاج إلى الراحة.' },
            { word: 'Triple', translation: 'ثلاثي', definition: 'Consisting of three parts or things', example: 'They won triple gold medals in the competition.', exampleArabic: 'فازوا بثلاث ميداليات ذهبية في المنافسة.' },
            { word: 'Venue', translation: 'مكان الحدث', definition: 'The place where something happens, especially an organized event', example: 'The wedding venue was beautifully decorated.', exampleArabic: 'كان مكان الزفاف مزيناً بشكل جميل.' },
            { word: 'Ceremony', translation: 'حفل', definition: 'A formal religious or public occasion', example: 'The graduation ceremony was very moving.', exampleArabic: 'كان حفل التخرج مؤثراً جداً.' },
            { word: 'Circuit', translation: 'دائرة', definition: 'A roughly circular line, route, or movement', example: 'The race car completed ten circuits of the track.', exampleArabic: 'أكملت سيارة السباق عشر دورات في المضمار.' },
            { word: 'Coach', translation: 'مدرب', definition: 'A person who trains athletes or a sports team', example: 'The football coach is very experienced.', exampleArabic: 'مدرب كرة القدم ذو خبرة كبيرة.' },
            { word: 'Pitch', translation: 'ملعب', definition: 'An area of ground where a sport is played', example: 'The football pitch was in excellent condition.', exampleArabic: 'كان ملعب كرة القدم في حالة ممتازة.' },
            { word: 'Course', translation: 'مسار', definition: 'The route or direction followed by a ship, aircraft, road, or river', example: 'The golf course is challenging but beautiful.', exampleArabic: 'ملعب الجولف صعب لكنه جميل.' },
            { word: 'Ring', translation: 'حلبة', definition: 'A circular band, typically of precious metal, worn on a finger', example: 'The boxing ring was surrounded by excited fans.', exampleArabic: 'كانت حلبة الملاكمة محاطة بالمعجبين المتحمسين.' },
            { word: 'Court', translation: 'ملعب', definition: 'A quadrangular area where various games are played', example: 'The tennis court needs to be resurfaced.', exampleArabic: 'يحتاج ملعب التنس إلى إعادة تجديد.' },
            { word: 'Track', translation: 'مضمار', definition: 'A rough path or minor road, typically one beaten by use', example: 'The running track is 400 meters long.', exampleArabic: 'طول مضمار الجري 400 متر.' },
            { word: 'Rink', translation: 'ساحة التزلج', definition: 'An enclosed area of ice for skating, ice hockey, or curling', example: 'The ice rink is open during winter.', exampleArabic: 'ساحة التزلج على الجليد مفتوحة خلال الشتاء.' },
            { word: 'Pool', translation: 'مسبح', definition: 'A small area of still water, typically one formed naturally', example: 'The swimming pool is heated all year round.', exampleArabic: 'المسبح ساخن طوال العام.' },
            { word: 'Concerned', translation: 'مهتم/قلق', definition: 'Worried, troubled, or anxious', example: 'Parents are concerned about their children\'s safety.', exampleArabic: 'الآباء قلقون بشأن سلامة أطفالهم.' },
            { word: 'Race', translation: 'سباق', definition: 'A competition between runners, horses, vehicles, etc.', example: 'The car race attracted thousands of spectators.', exampleArabic: 'جذب سباق السيارات آلاف المتفرجين.' },
            { word: 'Promote', translation: 'يروج', definition: 'To support or encourage something', example: 'The company will promote the new product.', exampleArabic: 'ستروج الشركة للمنتج الجديد.' },
            { word: 'Fresh', translation: 'طازج', definition: 'Recently made or obtained; not canned, frozen, or otherwise preserved', example: 'We bought fresh vegetables from the market.', exampleArabic: 'اشترينا خضروات طازجة من السوق.' },
            { word: 'Lazy', translation: 'كسول', definition: 'Unwilling to work or use energy', example: 'He was too lazy to clean his room.', exampleArabic: 'كان كسولاً جداً لتنظيف غرفته.' },
            { word: 'Wise', translation: 'حكيم', definition: 'Having or showing experience, knowledge, and good judgment', example: 'The old man gave us wise advice.', exampleArabic: 'أعطانا الرجل العجوز نصيحة حكيمة.' },
            { word: 'Deep', translation: 'عميق', definition: 'Extending far down from the top or surface', example: 'The ocean is very deep in this area.', exampleArabic: 'المحيط عميق جداً في هذه المنطقة.' },
            { word: 'Rich', translation: 'غني', definition: 'Having a great deal of money or assets', example: 'The rich businessman donated to charity.', exampleArabic: 'تبرع رجل الأعمال الغني للجمعيات الخيرية.' },
            { word: 'Ugly', translation: 'قبيح', definition: 'Unpleasant or repulsive in appearance', example: 'The building was old and ugly.', exampleArabic: 'كان المبنى قديماً وقبيحاً.' },
            { word: 'Clever', translation: 'ذكي', definition: 'Quick to understand, learn, and devise or apply ideas', example: 'The clever student solved the difficult problem.', exampleArabic: 'حل الطالب الذكي المشكلة الصعبة.' },
            { word: 'Smooth', translation: 'ناعم', definition: 'Having an even and regular surface', example: 'The road was newly paved and very smooth.', exampleArabic: 'كان الطريق معبداً حديثاً وناعماً جداً.' },
            { word: 'Committee', translation: 'لجنة', definition: 'A group of people appointed for a specific function', example: 'The planning committee will meet tomorrow.', exampleArabic: 'ستجتمع لجنة التخطيط غداً.' },
            { word: 'Sprinter', translation: 'عداء سريع', definition: 'An athlete who specializes in short-distance races', example: 'The sprinter broke the world record.', exampleArabic: 'حطم العداء السريع الرقم القياسي العالمي.' },
            { word: 'Last', translation: 'يستمر', definition: 'To continue for a specified period of time', example: 'The movie lasted for two hours.', exampleArabic: 'استمر الفيلم لمدة ساعتين.' },
            { word: 'Take part in', translation: 'يشارك في', definition: 'To be involved in an activity with other people', example: 'She will take part in the school play.', exampleArabic: 'ستشارك في مسرحية المدرسة.' },
            { word: 'Excited', translation: 'متحمس', definition: 'Very enthusiastic and eager', example: 'The children were excited about the trip.', exampleArabic: 'كان الأطفال متحمسين للرحلة.' },
            { word: 'Memorable', translation: 'خالد', definition: 'Worth remembering or easily remembered', example: 'We had a memorable vacation in Paris.', exampleArabic: 'قضينا عطلة خالدة في باريس.' },
            { word: 'Recommend', translation: 'يوصي', definition: 'To put forward with approval as being suitable for a purpose', example: 'I recommend this restaurant for its excellent food.', exampleArabic: 'أوصي بهذا المطعم لطعامه الممتاز.' },
            { word: 'Setback', translation: 'نكسة', definition: 'A reversal or check in progress', example: 'The project suffered a serious setback.', exampleArabic: 'عانى المشروع من نكسة خطيرة.' },
            { word: 'Skyscraper', translation: 'ناطحة سحاب', definition: 'A very tall building of many stories', example: 'New York is famous for its skyscrapers.', exampleArabic: 'تشتهر نيويورك بناطحات السحاب.' },
            { word: 'Summit', translation: 'قمة', definition: 'The highest point of a hill or mountain', example: 'They reached the summit of the mountain.', exampleArabic: 'وصلوا إلى قمة الجبل.' }
        ]
    },
    'sources-inspiration': {
        title: 'Sources of Inspiration',
        words: [
            { word: 'Dull', translation: 'ممل', definition: 'Lacking interest or excitement', example: 'The lecture was dull and boring.', exampleArabic: 'كانت المحاضرة مملة.' },
            { word: 'Inspire', translation: 'يلهم', definition: 'To fill someone with the urge or ability to do something', example: 'Her story inspired me to study harder.', exampleArabic: 'ألهمتني قصتها لأدرس بجدية أكبر.' },
            { word: 'Pride', translation: 'فخر', definition: 'A feeling of deep pleasure from achievements', example: 'He felt great pride when he graduated.', exampleArabic: 'شعر بفخر كبير عندما تخرج.' },
            { word: 'Achieve', translation: 'يحقق', definition: 'To successfully bring about or reach a desired objective', example: 'She achieved her goal of becoming a doctor.', exampleArabic: 'حققت هدفها بأن تصبح طبيبة.' },
            { word: 'Genius', translation: 'عبقري', definition: 'Exceptional intellectual or creative power', example: 'Einstein was a genius in physics.', exampleArabic: 'كان أينشتاين عبقرياً في الفيزياء.' },
            { word: 'Fictional', translation: 'خيالي', definition: 'Relating to fiction; invented for a story', example: 'Harry Potter is a fictional character.', exampleArabic: 'هاري بوتر شخصية خيالية.' },
            { word: 'Courage', translation: 'شجاعة', definition: 'The ability to do something that frightens one', example: 'It takes courage to speak in public.', exampleArabic: 'يتطلب الأمر شجاعة للتحدث أمام الجمهور.' },
            { word: 'Crew', translation: 'طاقم', definition: 'A group of people who work on and operate a ship, aircraft, etc.', example: 'The airplane crew was very professional.', exampleArabic: 'كان طاقم الطائرة محترفاً جداً.' },
            { word: 'Classic', translation: 'كلاسيكي', definition: 'Judged over a period of time to be of the highest quality', example: 'This book is considered a classic novel.', exampleArabic: 'يعتبر هذا الكتاب رواية كلاسيكية.' },
            { word: 'Theatre', translation: 'مسرح', definition: 'A building or outdoor area for dramatic performances', example: 'We went to the theatre to see a play.', exampleArabic: 'ذهبنا إلى المسرح لمشاهدة مسرحية.' },
            { word: 'Perform', translation: 'يؤدي', definition: 'To carry out, accomplish, or fulfill an action or task', example: 'The singer will perform her new song.', exampleArabic: 'ستؤدي المطربة أغنيتها الجديدة.' },
            { word: 'Prodigy', translation: 'معجزة', definition: 'A young person with exceptional qualities or abilities', example: 'He was a musical prodigy at age five.', exampleArabic: 'كان معجزة موسيقية في عمر الخامسة.' },
            { word: 'Concert', translation: 'حفل موسيقي', definition: 'A musical performance given in public', example: 'The concert tickets sold out quickly.', exampleArabic: 'بيعت تذاكر الحفل الموسيقي بسرعة.' },
            { word: 'Member', translation: 'عضو', definition: 'A person belonging to a particular group', example: 'She is a member of the school club.', exampleArabic: 'هي عضو في نادي المدرسة.' },
            { word: 'Debate', translation: 'مناظرة', definition: 'A formal discussion on a particular topic', example: 'There was a lively debate about the environment.', exampleArabic: 'كان هناك مناظرة حية حول البيئة.' },
            { word: 'Formal', translation: 'رسمي', definition: 'Done in accordance with convention or etiquette', example: 'The wedding was a formal occasion.', exampleArabic: 'كان الزفاف مناسبة رسمية.' },
            { word: 'Kind/Type', translation: 'نوع', definition: 'A category of people or things having common characteristics', example: 'What kind of music do you like?', exampleArabic: 'ما نوع الموسيقى الذي تحبه؟' },
            { word: 'Decision', translation: 'قرار', definition: 'A conclusion or resolution reached after consideration', example: 'Making important decisions requires careful thought.', exampleArabic: 'يتطلب اتخاذ القرارات المهمة تفكيراً دقيقاً.' },
            { word: 'Decide', translation: 'يقرر', definition: 'To come to a resolution in the mind', example: 'I can\'t decide which dress to buy.', exampleArabic: 'لا أستطيع أن أقرر أي فستان أشتري.' },
            { word: 'Frustrated', translation: 'محبط', definition: 'Feeling or expressing distress and annoyance', example: 'He was frustrated by the constant delays.', exampleArabic: 'كان محبطاً بسبب التأخير المستمر.' },
            { word: 'Exhausted', translation: 'مرهق', definition: 'Drained of one\'s physical or mental resources', example: 'After the marathon, she was exhausted.', exampleArabic: 'بعد الماراثون، كانت مرهقة.' },
            { word: 'Confused', translation: 'مرتبك', definition: 'Unable to think clearly; bewildered', example: 'The instructions were confusing.', exampleArabic: 'كانت التعليمات مربكة.' },
            { word: 'Irritate', translation: 'يضايق', definition: 'To make someone annoyed or impatient', example: 'Loud noises irritate me.', exampleArabic: 'الأصوات العالية تضايقني.' },
            { word: 'Annoyed', translation: 'منزعج', definition: 'Slightly angry; irritated', example: 'She was annoyed by his constant questions.', exampleArabic: 'كانت منزعجة من أسئلته المستمرة.' },
            { word: 'Bored', translation: 'ملل', definition: 'Feeling weary and impatient because one is unoccupied', example: 'The children were bored during the long car ride.', exampleArabic: 'كان الأطفال يشعرون بالملل أثناء رحلة السيارة الطويلة.' },
            { word: 'Tired', translation: 'متعب', definition: 'In need of sleep or rest; weary', example: 'I\'m too tired to go out tonight.', exampleArabic: 'أنا متعب جداً للخروج الليلة.' },
            { word: 'Pleased', translation: 'راضي', definition: 'Feeling or showing pleasure and satisfaction', example: 'The teacher was pleased with our work.', exampleArabic: 'كان المعلم راضياً عن عملنا.' },
            { word: 'Frightened', translation: 'خائف', definition: 'Afraid or anxious', example: 'The child was frightened by the loud thunder.', exampleArabic: 'كان الطفل خائفاً من الرعد العالي.' },
            { word: 'Detective', translation: 'مخبر', definition: 'A person, especially a police officer, who investigates crimes', example: 'The detective solved the mystery.', exampleArabic: 'حل المخبر اللغز.' },
            { word: 'Comedy', translation: 'كوميديا', definition: 'Professional entertainment consisting of jokes and sketches', example: 'We watched a comedy movie last night.', exampleArabic: 'شاهدنا فيلماً كوميدياً الليلة الماضية.' },
            { word: 'Obesity', translation: 'سمنة', definition: 'The condition of being grossly fat or overweight', example: 'Obesity can lead to health problems.', exampleArabic: 'يمكن أن تؤدي السمنة إلى مشاكل صحية.' },
            { word: 'Review', translation: 'مراجعة', definition: 'A formal assessment or examination of something', example: 'The restaurant received excellent reviews.', exampleArabic: 'تلقى المطعم مراجعات ممتازة.' },
            { word: 'Navigate', translation: 'يتنقل', definition: 'To plan and direct the route or course of a ship, aircraft, etc.', example: 'We need to navigate through the crowded streets.', exampleArabic: 'نحتاج إلى التنقل عبر الشوارع المزدحمة.' },
            { word: 'Voyage', translation: 'رحلة بحرية', definition: 'A long journey involving travel by sea or in space', example: 'The voyage across the ocean took three weeks.', exampleArabic: 'استغرقت الرحلة عبر المحيط ثلاثة أسابيع.' },
            { word: 'Documentary', translation: 'وثائقي', definition: 'A film or television or radio program providing a factual report', example: 'We watched a documentary about wildlife.', exampleArabic: 'شاهدنا فيلماً وثائقياً عن الحياة البرية.' },
            { word: 'Author', translation: 'مؤلف', definition: 'A writer of a book, article, or report', example: 'The author will sign books at the bookstore.', exampleArabic: 'سيوقع المؤلف الكتب في المكتبة.' },
            { word: 'Genre', translation: 'نوع أدبي', definition: 'A style or category of art, music, or literature', example: 'Science fiction is my favorite genre.', exampleArabic: 'الخيال العلمي هو نوعي المفضل.' },
            { word: 'Plot', translation: 'حبكة', definition: 'The main events of a play, novel, film, or similar work', example: 'The plot of the movie was very exciting.', exampleArabic: 'كانت حبكة الفيلم مثيرة جداً.' },
            { word: 'Recommend', translation: 'يوصي', definition: 'To put forward with approval as being suitable for a purpose', example: 'Can you recommend a good restaurant?', exampleArabic: 'هل يمكنك أن توصي بمطعم جيد؟' },
            { word: 'Setting', translation: 'إطار القصة', definition: 'The place or type of surroundings where something is positioned', example: 'The story has a medieval setting.', exampleArabic: 'القصة لها إطار تاريخي من العصور الوسطى.' },
            { word: 'Pollution', translation: 'تلوث', definition: 'The presence in or introduction into the environment of harmful substances', example: 'Air pollution is a serious problem in big cities.', exampleArabic: 'تلوث الهواء مشكلة خطيرة في المدن الكبيرة.' },
            { word: 'Population', translation: 'سكان', definition: 'All the inhabitants of a particular place', example: 'The population of the city is growing rapidly.', exampleArabic: 'سكان المدينة ينمون بسرعة.' }
        ]
    },
    'connections': {
        title: 'Connections',
        words: [
            { word: 'Entire', translation: 'كامل', definition: 'With no part left out; whole', example: 'She spent the entire day studying.', exampleArabic: 'قضت اليوم كله في الدراسة.' },
            { word: 'Connect', translation: 'يربط', definition: 'To bring together or into contact', example: 'The bridge connects the two cities.', exampleArabic: 'الجسر يربط المدينتين.' },
            { word: 'Project', translation: 'مشروع', definition: 'An individual or collaborative enterprise planned to achieve a particular aim', example: 'Our science project won first prize.', exampleArabic: 'فاز مشروعنا العلمي بالجائزة الأولى.' },
            { word: 'Memory', translation: 'ذاكرة', definition: 'The faculty by which the mind stores and remembers information', example: 'He has an excellent memory for names.', exampleArabic: 'لديه ذاكرة ممتازة للأسماء.' },
            { word: 'Powerful', translation: 'قوي', definition: 'Having great power or strength', example: 'The engine is very powerful.', exampleArabic: 'المحرك قوي جداً.' },
            { word: 'Affirm', translation: 'يؤكد', definition: 'To state emphatically or publicly; to assert', example: 'He affirmed his commitment to the project.', exampleArabic: 'أكد التزامه بالمشروع.' },
            { word: 'Popular', translation: 'شعبي', definition: 'Liked or admired by many people or by a particular person or group', example: 'This song is very popular among teenagers.', exampleArabic: 'هذه الأغنية شعبية جداً بين المراهقين.' },
            { word: 'Weakness', translation: 'ضعف', definition: 'The state or condition of being weak', example: 'His main weakness is that he works too slowly.', exampleArabic: 'ضعفه الرئيسي هو أنه يعمل ببطء شديد.' },
            { word: 'Encourage', translation: 'يشجع', definition: 'To give support, confidence, or hope to someone', example: 'Teachers should encourage students to ask questions.', exampleArabic: 'يجب أن يشجع المعلمون الطلاب على طرح الأسئلة.' },
            { word: 'Attitude', translation: 'موقف', definition: 'A settled way of thinking or feeling about something', example: 'She has a positive attitude toward life.', exampleArabic: 'لديها موقف إيجابي تجاه الحياة.' },
            { word: 'Contact', translation: 'اتصال', definition: 'The state of physical touching', example: 'Please keep in contact with me.', exampleArabic: 'يرجى البقاء على اتصال معي.' },
            { word: 'Alleviate', translation: 'يخفف', definition: 'To make suffering, deficiency, or a problem less severe', example: 'The medicine helped alleviate the pain.', exampleArabic: 'ساعد الدواء في تخفيف الألم.' },
            { word: 'Depressed', translation: 'مكتئب', definition: 'In a state of general unhappiness or despondency', example: 'He felt depressed after losing his job.', exampleArabic: 'شعر بالاكتئاب بعد فقدان وظيفته.' },
            { word: 'Increase', translation: 'يزيد', definition: 'To become or make greater in size, amount, or degree', example: 'Prices have increased by 10%.', exampleArabic: 'زادت الأسعار بنسبة 10%.' },
            { word: 'Share', translation: 'يشارك', definition: 'To have a portion of something with another or others', example: 'Let\'s share the pizza.', exampleArabic: 'دعونا نشارك البيتزا.' },
            { word: 'Pleasure', translation: 'متعة', definition: 'A feeling of happy satisfaction and enjoyment', example: 'It gives me great pleasure to be here.', exampleArabic: 'يمنحني متعة كبيرة أن أكون هنا.' },
            { word: 'Similar', translation: 'مشابه', definition: 'Resembling without being identical', example: 'Our opinions are similar.', exampleArabic: 'آراؤنا متشابهة.' },
            { word: 'Feather', translation: 'ريشة', definition: 'Any of the flat appendages growing from a bird\'s skin', example: 'The bird lost a feather from its wing.', exampleArabic: 'فقد الطائر ريشة من جناحه.' },
            { word: 'Flock', translation: 'سرب', definition: 'A number of birds of one kind feeding, resting, or traveling together', example: 'A flock of birds flew overhead.', exampleArabic: 'طار سرب من الطيور فوق رؤوسنا.' },
            { word: 'Ignore', translation: 'يتجاهل', definition: 'To refuse to take notice of or acknowledge', example: 'Please don\'t ignore my messages.', exampleArabic: 'من فضلك لا تتجاهل رسائلي.' },
            { word: 'Litter', translation: 'مخلفات', definition: 'Rubbish such as paper, cans, and bottles left lying in an open or public place', example: 'Don\'t litter in the park.', exampleArabic: 'لا تترك مخلفات في الحديقة.' },
            { word: 'Remember', translation: 'يتذكر', definition: 'To have in or be able to bring to one\'s mind an awareness of', example: 'I can\'t remember where I put my keys.', exampleArabic: 'لا أتذكر أين وضعت مفاتيحي.' },
            { word: 'Forget', translation: 'ينسى', definition: 'To fail to remember', example: 'Don\'t forget to call me.', exampleArabic: 'لا تنس أن تتصل بي.' },
            { word: 'Herb', translation: 'عشب', definition: 'Any plant with leaves, seeds, or flowers used for flavoring, food, medicine, or perfume', example: 'We grow herbs in our garden.', exampleArabic: 'نزرع الأعشاب في حديقتنا.' },
            { word: 'Tragedy', translation: 'مأساة', definition: 'An event causing great suffering, destruction, and distress', example: 'The earthquake was a great tragedy.', exampleArabic: 'كان الزلزال مأساة كبيرة.' },
            { word: 'Corpse', translation: 'جثة', definition: 'A dead body, especially of a human being', example: 'The police found a corpse in the river.', exampleArabic: 'وجدت الشرطة جثة في النهر.' },
            { word: 'Protect', translation: 'يحمي', definition: 'To keep safe from harm or injury', example: 'Parents protect their children.', exampleArabic: 'يحمي الآباء أطفالهم.' },
            { word: 'Disorder', translation: 'اضطراب', definition: 'A state of confusion', example: 'The room was in complete disorder.', exampleArabic: 'كانت الغرفة في حالة اضطراب تام.' },
            { word: 'Scent', translation: 'رائحة', definition: 'A distinctive smell, especially one that is pleasant', example: 'The scent of flowers filled the room.', exampleArabic: 'ملأت رائحة الزهور الغرفة.' },
            { word: 'Brain', translation: 'دماغ', definition: 'An organ of soft nervous tissue contained in the skull', example: 'The human brain is very complex.', exampleArabic: 'دماغ الإنسان معقد جداً.' },
            { word: 'Remind', translation: 'يذكر', definition: 'To cause someone to remember something', example: 'Remind me to buy milk.', exampleArabic: 'ذكرني بشراء الحليب.' },
            { word: 'Lose', translation: 'يخسر', definition: 'To be deprived of or cease to have or retain something', example: 'Be careful not to lose your phone.', exampleArabic: 'كن حذراً حتى لا تخسر هاتفك.' },
            { word: 'Picnic', translation: 'نزهة', definition: 'An outing or occasion that involves taking a packed meal to be eaten outdoors', example: 'We had a picnic in the park.', exampleArabic: 'أخذنا نزهة في الحديقة.' },
            { word: 'Barefoot', translation: 'حافي القدمين', definition: 'Wearing nothing on the feet', example: 'The children ran barefoot on the grass.', exampleArabic: 'ركض الأطفال حفاة القدمين على العشب.' },
            { word: 'Invite', translation: 'يدعو', definition: 'To make a polite, formal, or friendly request to someone to go somewhere or do something', example: 'I will invite all my friends to the party.', exampleArabic: 'سأدعو جميع أصدقائي إلى الحفلة.' },
            { word: 'Include', translation: 'يتضمن', definition: 'To comprise or contain as part of a whole', example: 'The price includes all taxes.', exampleArabic: 'يتضمن السعر جميع الضرائب.' },
            { word: 'Volunteer', translation: 'متطوع', definition: 'A person who freely offers to take part in an enterprise', example: 'She works as a volunteer at the hospital.', exampleArabic: 'تعمل كمتطوعة في المستشفى.' },
            { word: 'Outgoing', translation: 'منطلق', definition: 'Friendly and socially confident', example: 'He has an outgoing personality.', exampleArabic: 'لديه شخصية منطلقة.' },
            { word: 'Curious', translation: 'فضولي', definition: 'Eager to know or learn something', example: 'Children are naturally curious.', exampleArabic: 'الأطفال فضوليون بطبيعتهم.' },
            { word: 'Aggressive', translation: 'عدواني', definition: 'Ready or likely to attack or confront', example: 'Some dogs can be aggressive.', exampleArabic: 'بعض الكلاب يمكن أن تكون عدوانية.' },
            { word: 'Assertive', translation: 'حازم', definition: 'Having or showing a confident and forceful personality', example: 'She was assertive during the negotiation.', exampleArabic: 'كانت حازمة أثناء التفاوض.' },
            { word: 'Confident', translation: 'واثق', definition: 'Feeling or showing confidence in oneself', example: 'He was confident about passing the exam.', exampleArabic: 'كان واثقاً من اجتياز الامتحان.' },
            { word: 'Practical', translation: 'عملي', definition: 'Of or concerned with the actual doing or use of something', example: 'She gave us practical advice.', exampleArabic: 'أعطتنا نصيحة عملية.' },
            { word: 'Address', translation: 'عنوان', definition: 'The particulars of the place where someone lives or an organization is situated', example: 'What is your home address?', exampleArabic: 'ما عنوان منزلك؟' },
            { word: 'Greeting', translation: 'تحية', definition: 'A polite word or sign of welcome or recognition', example: 'He gave me a friendly greeting.', exampleArabic: 'قدم لي تحية ودية.' },
            { word: 'Signature', translation: 'توقيع', definition: 'A person\'s name written in a distinctive way', example: 'Please put your signature here.', exampleArabic: 'يرجى وضع توقيعك هنا.' },
            { word: 'Skill', translation: 'مهارة', definition: 'The ability to do something well', example: 'She has excellent computer skills.', exampleArabic: 'لديها مهارات ممتازة في الكمبيوتر.' },
            { word: 'Suitable', translation: 'مناسب', definition: 'Right or appropriate for a particular person, purpose, or situation', example: 'This dress is suitable for the occasion.', exampleArabic: 'هذا الفستان مناسب للمناسبة.' },
            { word: 'Friendly', translation: 'ودود', definition: 'Kind and pleasant', example: 'The staff were very friendly.', exampleArabic: 'كان الموظفون ودودين جداً.' },
            { word: 'Shy', translation: 'خجول', definition: 'Being reserved or having or showing nervousness in the company of other people', example: 'The shy child hid behind her mother.', exampleArabic: 'اختبأت الطفلة الخجولة خلف والدتها.' },
            { word: 'Quiet', translation: 'هادئ', definition: 'Making little or no noise', example: 'Please be quiet in the library.', exampleArabic: 'يرجى الهدوء في المكتبة.' },
            { word: 'Honest', translation: 'صادق', definition: 'Free of deceit and untruthfulness', example: 'He is an honest businessman.', exampleArabic: 'إنه رجل أعمال صادق.' },
            { word: 'Creative', translation: 'خلاق', definition: 'Relating to or involving the use of imagination or original ideas', example: 'She has a creative mind.', exampleArabic: 'لديها عقل خلاق.' },
            { word: 'Arrange', translation: 'يرتب', definition: 'To put things in a neat, attractive, or required order', example: 'I need to arrange my books.', exampleArabic: 'أحتاج إلى ترتيب كتبي.' }
        ]
    },
    'beginnings-endings': {
        title: 'Beginnings & Endings',
        words: [
            { word: 'Society', translation: 'مجتمع', definition: 'The aggregate of people living together in a more or less ordered community', example: 'We live in a multicultural society.', exampleArabic: 'نعيش في مجتمع متعدد الثقافات.' },
            { word: 'Adult', translation: 'بالغ', definition: 'A person who is fully grown or developed', example: 'The museum offers discounts for adults.', exampleArabic: 'يقدم المتحف خصومات للبالغين.' },
            { word: 'Legal', translation: 'قانوني', definition: 'Permitted by law', example: 'Driving without a license is not legal.', exampleArabic: 'القيادة بدون رخصة غير قانونية.' },
            { word: 'Mature', translation: 'ناضج', definition: 'Fully developed physically; full-grown', example: 'At 18, he was considered mature enough to vote.', exampleArabic: 'في عمر 18، كان يعتبر ناضجاً بما يكفي للتصويت.' },
            { word: 'Marriage', translation: 'زواج', definition: 'The legally or formally recognized union of two people as partners', example: 'Their marriage lasted for 50 years.', exampleArabic: 'استمر زواجهم لمدة 50 عاماً.' },
            { word: 'Celebrate', translation: 'يحتفل', definition: 'To acknowledge a significant or happy day or event', example: 'We celebrate birthdays with parties.', exampleArabic: 'نحتفل بأعياد الميلاد بالحفلات.' },
            { word: 'Occasion', translation: 'مناسبة', definition: 'A particular event, or the time at which it takes place', example: 'This is a special occasion.', exampleArabic: 'هذه مناسبة خاصة.' },
            { word: 'Festival', translation: 'مهرجان', definition: 'A day or period of celebration', example: 'The film festival attracts many visitors.', exampleArabic: 'يجذب مهرجان الأفلام العديد من الزوار.' },
            { word: 'Customs', translation: 'عادات', definition: 'Traditional and widely accepted way of behaving or doing something', example: 'Different countries have different customs.', exampleArabic: 'لدى الدول المختلفة عادات مختلفة.' },
            { word: 'Ritual', translation: 'طقوس', definition: 'A religious or solemn ceremony consisting of a series of actions', example: 'The wedding ritual was beautiful.', exampleArabic: 'كانت طقوس الزفاف جميلة.' },
            { word: 'Toddler', translation: 'طفل صغير', definition: 'A young child who is just beginning to walk', example: 'The toddler took his first steps.', exampleArabic: 'خطا الطفل الصغير خطواته الأولى.' },
            { word: 'Illegal', translation: 'غير قانوني', definition: 'Contrary to or forbidden by law', example: 'Smoking in public places is illegal.', exampleArabic: 'التدخين في الأماكن العامة غير قانوني.' },
            { word: 'Trial', translation: 'محاكمة', definition: 'A formal examination of evidence in court', example: 'The trial lasted for three weeks.', exampleArabic: 'استمرت المحاكمة لمدة ثلاثة أسابيع.' },
            { word: 'Symbol', translation: 'رمز', definition: 'A mark or character used as a conventional representation', example: 'The dove is a symbol of peace.', exampleArabic: 'الحمامة رمز للسلام.' },
            { word: 'Gradual', translation: 'تدريجي', definition: 'Taking place or progressing slowly or by degrees', example: 'The changes were gradual but significant.', exampleArabic: 'كانت التغييرات تدريجية لكنها مهمة.' },
            { word: 'Enough', translation: 'كافٍ', definition: 'As much or as many as required', example: 'We have enough food for everyone.', exampleArabic: 'لدينا طعام كافٍ للجميع.' },
            { word: 'Pet', translation: 'حيوان أليف', definition: 'A domestic or tamed animal kept for companionship', example: 'My pet dog is very friendly.', exampleArabic: 'كلبي الأليف ودود جداً.' },
            { word: 'Vote', translation: 'يصوت', definition: 'A formal indication of a choice between options', example: 'Citizens have the right to vote.', exampleArabic: 'يحق للمواطنين التصويت.' },
            { word: 'Election', translation: 'انتخابات', definition: 'A formal and organized process of electing or being elected', example: 'The presidential election is next month.', exampleArabic: 'الانتخابات الرئاسية الشهر القادم.' },
            { word: 'Private', translation: 'خاص', definition: 'Belonging to or for the use of one particular person or group', example: 'This is a private matter.', exampleArabic: 'هذا أمر خاص.' },
            { word: 'Carnival', translation: 'كرنفال', definition: 'A period of public revelry with processions, music, and dancing', example: 'The carnival parade was colorful.', exampleArabic: 'كان موكب الكرنفال ملوناً.' },
            { word: 'Mark', translation: 'علامة', definition: 'A visible impression or trace on something', example: 'The pencil left a mark on the paper.', exampleArabic: 'ترك القلم علامة على الورقة.' },
            { word: 'Wedding', translation: 'زفاف', definition: 'A marriage ceremony and the celebrations that follow', example: 'Their wedding was held in a garden.', exampleArabic: 'أقيم زفافهم في حديقة.' },
            { word: 'Ceremony', translation: 'حفل', definition: 'A formal religious or public occasion', example: 'The award ceremony was televised.', exampleArabic: 'تم بث حفل توزيع الجوائز على التلفزيون.' },
            { word: 'Guest', translation: 'ضيف', definition: 'A person who is invited to visit someone\'s home or attend an event', example: 'We have guests coming for dinner.', exampleArabic: 'لدينا ضيوف قادمون للعشاء.' },
            { word: 'Bride', translation: 'عروس', definition: 'A woman on her wedding day or just before and after the event', example: 'The bride looked beautiful in her dress.', exampleArabic: 'بدت العروس جميلة في فستانها.' },
            { word: 'Groom', translation: 'عريس', definition: 'A man on his wedding day or just before and after the event', example: 'The groom was nervous before the ceremony.', exampleArabic: 'كان العريس متوتراً قبل الحفل.' },
            { word: 'Witness', translation: 'شاهد', definition: 'A person who sees an event, typically a crime or accident, take place', example: 'The police are looking for witnesses.', exampleArabic: 'تبحث الشرطة عن شهود.' },
            { word: 'Reception', translation: 'استقبال', definition: 'The action or process of receiving something sent', example: 'The wedding reception was held at a hotel.', exampleArabic: 'أقيم استقبال الزفاف في فندق.' },
            { word: 'Propose', translation: 'يُقترح', definition: 'To put forward an idea or plan for consideration', example: 'He proposed a new business idea.', exampleArabic: 'اقترح فكرة عمل جديدة.' },
            { word: 'Consent', translation: 'موافقة', definition: 'Permission for something to happen or agreement to do something', example: 'You need parental consent to go on the trip.', exampleArabic: 'تحتاج إلى موافقة الوالدين للذهاب في الرحلة.' },
            { word: 'Involve', translation: 'يشمل', definition: 'To include something as a necessary part or result', example: 'The job involves a lot of traveling.', exampleArabic: 'تتضمن الوظيفة الكثير من السفر.' },
            { word: 'Several', translation: 'عدة', definition: 'More than two but not many', example: 'I\'ve read this book several times.', exampleArabic: 'قرأت هذا الكتاب عدة مرات.' },
            { word: 'Tradition', translation: 'تقليد', definition: 'The transmission of customs or beliefs from generation to generation', example: 'It\'s a family tradition to gather for holidays.', exampleArabic: 'إنه تقليد عائلي أن نجتمع في العطلات.' },
            { word: 'Intend to', translation: 'ينوي', definition: 'To have as a plan or purpose', example: 'I intend to study medicine.', exampleArabic: 'أنوي دراسة الطب.' },
            { word: 'Plan to', translation: 'يخطط', definition: 'To decide on and arrange in advance', example: 'We plan to visit Paris next summer.', exampleArabic: 'نخطط لزيارة باريس الصيف القادم.' },
            { word: 'Weight', translation: 'وزن', definition: 'A body\'s relative mass or the quantity of matter contained by it', example: 'He lost weight by exercising regularly.', exampleArabic: 'فقد وزنه بممارسة الرياضة بانتظام.' },
            { word: 'Diet', translation: 'نظام غذائي', definition: 'The kinds of food that a person, animal, or community habitually eats', example: 'A balanced diet is important for health.', exampleArabic: 'النظام الغذائي المتوازن مهم للصحة.' },
            { word: 'Worry', translation: 'قلق', definition: 'Feel or cause to feel anxious or troubled about actual or potential problems', example: 'Don\'t worry about the exam.', exampleArabic: 'لا تقلق بشأن الامتحان.' },
            { word: 'Relax', translation: 'يسترخي', definition: 'To make or become less tense or anxious', example: 'I like to relax by reading a book.', exampleArabic: 'أحب أن أسترخي بقراءة كتاب.' },
            { word: 'Hobby', translation: 'هواية', definition: 'An activity done regularly in one\'s leisure time for pleasure', example: 'Photography is my hobby.', exampleArabic: 'التصوير هوايتي.' },
            { word: 'Leisure', translation: 'وقت الفراغ', definition: 'Free time', example: 'What do you do in your leisure time?', exampleArabic: 'ماذا تفعل في وقت فراغك؟' },
            { word: 'Common', translation: 'شائع', definition: 'Occurring, found, or done often; prevalent', example: 'It\'s common to feel nervous before a test.', exampleArabic: 'من الشائع أن تشعر بالتوتر قبل الاختبار.' },
            { word: 'Calm', translation: 'هادئ', definition: 'Not showing or feeling nervousness, anger, or other strong emotions', example: 'Stay calm during the emergency.', exampleArabic: 'ابق هادئاً أثناء الطوارئ.' },
            { word: 'Tranquil', translation: 'هادئ', definition: 'Free from disturbance; calm', example: 'The lake was tranquil in the morning.', exampleArabic: 'كانت البحيرة هادئة في الصباح.' },
            { word: 'Peaceful', translation: 'سلمي', definition: 'Free from disturbance; tranquil', example: 'We had a peaceful walk in the park.', exampleArabic: 'أخذنا نزهة سلمية في الحديقة.' },
            { word: 'Parade', translation: 'موكب', definition: 'A public procession', example: 'The military parade was impressive.', exampleArabic: 'كان الموكب العسكري مثيراً للإعجاب.' },
            { word: 'Crowded', translation: 'مزدحم', definition: 'Full of people', example: 'The market was too crowded.', exampleArabic: 'كان السوق مزدحماً جداً.' },
            { word: 'Support', translation: 'يدعم', definition: 'To bear all or part of the weight; to hold up', example: 'I support your decision.', exampleArabic: 'أدعم قرارك.' },
            { word: 'Detest', translation: 'يكره', definition: 'To dislike intensely', example: 'I detest people who lie.', exampleArabic: 'أكره الناس الذين يكذبون.' },
            { word: 'Complain', translation: 'يشكو', definition: 'To express dissatisfaction or annoyance about something', example: 'Customers complain about poor service.', exampleArabic: 'يشكو العملاء من الخدمة السيئة.' },
            { word: 'Origin', translation: 'أصل', definition: 'The point or place where something begins', example: 'What is the origin of this tradition?', exampleArabic: 'ما أصل هذا التقليد؟' },
            { word: 'Spectacular', translation: 'مذهل', definition: 'Beautiful in a dramatic and eye-catching way', example: 'The fireworks display was spectacular.', exampleArabic: 'كان عرض الألعاب النارية مذهلاً.' },
            { word: 'Stimulate', translation: 'يحفز', definition: 'To encourage or arouse interest or enthusiasm in', example: 'Reading stimulates the mind.', exampleArabic: 'تحفز القراءة العقل.' }
        ]
    }
    };
    // Reading Passages Data
    const readingData = {
        'daily-routine': {
            title: 'My Daily Routine',
            level: 'Beginner',
            passage: `I wake up at 7 AM every day. First, I brush my teeth and take a shower. Then I have breakfast with my family. We usually eat eggs, bread, and drink tea or coffee.

After breakfast, I go to school. My classes start at 8:30 AM. I study different subjects like math, science, and English. I enjoy English class the most because I love learning new words.

Lunch break is at 12:30 PM. I eat with my friends in the cafeteria. We talk about our classes and plans for the weekend.

After school, I go home and do my homework. Then I help my mother with housework. Sometimes I watch TV or play video games.

In the evening, my family has dinner together. We share stories about our day. After dinner, I read a book or study for tests.

I usually go to bed at 10 PM. I need good sleep to be ready for the next day.`,
            questions: [
                {
                    question: 'What time does the writer wake up?',
                    options: ['6 AM', '7 AM', '8 AM', '9 AM'],
                    answer: 1
                },
                {
                    question: 'Which class does the writer enjoy the most?',
                    options: ['Math', 'Science', 'English', 'History'],
                    answer: 2
                },
                {
                    question: 'Where does the writer eat lunch?',
                    options: ['At home', 'In the classroom', 'In the cafeteria', 'In the park'],
                    answer: 2
                },
                {
                    question: 'What does the writer do after homework?',
                    options: ['Watch TV', 'Help with housework', 'Play outside', 'Read books'],
                    answer: 1
                },
                {
                    question: 'Why does the writer need good sleep?',
                    options: ['To dream well', 'To be ready for next day', 'To avoid being tired', 'All of the above'],
                    answer: 1
                }
            ]
        },
        'family': {
            title: 'My Family',
            level: 'Beginner',
            passage: `I have a wonderful family. There are four people in my family: my father, my mother, my younger sister, and me.

My father's name is Ahmed. He is 45 years old and works as an engineer. He helps me with my math homework because he is very good with numbers. He also likes to play football with me on weekends.

My mother's name is Fatima. She is 42 years old and she is a teacher. She teaches Arabic at a primary school. She cooks delicious food for us and helps me with my Arabic studies.

My sister's name is Sara. She is 10 years old and goes to the same school as me. She is in fourth grade. She loves drawing and always shows me her beautiful pictures.

We live in a comfortable house with three bedrooms and a big garden. In the evening, we always have dinner together and talk about our day. On Fridays, we visit our grandparents who live nearby.

I love my family very much. They are always there for me when I need help or support. Family is the most important thing in my life.`,
            questions: [
                {
                    question: 'How many people are in the family?',
                    options: ['Three', 'Four', 'Five', 'Six'],
                    answer: 1
                },
                {
                    question: 'What does the father do for work?',
                    options: ['Teacher', 'Doctor', 'Engineer', 'Driver'],
                    answer: 2
                },
                {
                    question: 'Which subject does the mother teach?',
                    options: ['English', 'Math', 'Arabic', 'Science'],
                    answer: 2
                },
                {
                    question: 'What is the sister\'s hobby?',
                    options: ['Singing', 'Drawing', 'Dancing', 'Reading'],
                    answer: 1
                },
                {
                    question: 'When do they visit their grandparents?',
                    options: ['Saturdays', 'Fridays', 'Sundays', 'Mondays'],
                    answer: 1
                }
            ]
        },

'climate-change': {
    title: 'Climate Change Effects',
    level: 'Intermediate',
    passage: `Climate change is affecting our planet in many ways. The Earth's temperature is rising, causing ice to melt at the poles and sea levels to rise. This phenomenon, known as global warming, is primarily caused by human activities that release greenhouse gases into the atmosphere.

The main contributors to climate change include burning fossil fuels for energy, deforestation, and industrial processes. These activities increase the concentration of carbon dioxide and other greenhouse gases, trapping heat in the Earth's atmosphere.

The consequences of climate change are widespread. Extreme weather events like hurricanes, droughts, and floods are becoming more frequent and intense. Many animal species are losing their habitats, and coral reefs are dying due to warmer ocean temperatures.

Scientists warn that if we don't take immediate action, the effects could be irreversible. Solutions include transitioning to renewable energy sources, protecting forests, and adopting sustainable agricultural practices. Every individual can contribute by reducing their carbon footprint through actions like using public transportation and conserving energy.

Addressing climate change requires global cooperation and commitment from governments, businesses, and citizens worldwide. It's one of the most significant challenges facing humanity today, but with collective effort, we can mitigate its worst effects.`,
    questions: [
        {
            question: 'What is the main cause of global warming?',
            options: ['Natural weather patterns', 'Human activities releasing greenhouse gases', 'Volcanic eruptions', 'Solar radiation'],
            answer: 1
        },
        {
            question: 'Which of these is NOT mentioned as a consequence of climate change?',
            options: ['Rising sea levels', 'More frequent extreme weather', 'Increased volcanic activity', 'Loss of animal habitats'],
            answer: 2
        },
        {
            question: 'What are the main contributors to climate change mentioned in the passage?',
            options: ['Burning fossil fuels, deforestation, and industrial processes', 'Agricultural practices only', 'Natural climate cycles', 'Ocean currents'],
            answer: 0
        },
        {
            question: 'What solution is NOT suggested in the passage?',
            options: ['Transitioning to renewable energy', 'Protecting forests', 'Building more factories', 'Adopting sustainable agriculture'],
            answer: 2
        },
        {
            question: 'What does the passage say about addressing climate change?',
            options: ['It requires only government action', 'It needs global cooperation from everyone', 'It can be solved by individuals alone', 'It is not an urgent matter'],
            answer: 1
        },
        {
            question: 'Why are coral reefs dying according to the passage?',
            options: ['Due to pollution from factories', 'Because of warmer ocean temperatures', 'From overfishing', 'Due to natural aging process'],
            answer: 1
        },
        {
            question: 'What can individuals do to help according to the passage?',
            options: ['Reduce their carbon footprint', 'Stop using all technology', 'Move to colder climates', 'Only use solar energy'],
            answer: 0
        },
        {
            question: 'What is the tone of the passage regarding climate change solutions?',
            options: ['Hopeless', 'Optimistic with collective effort', 'Indifferent', 'Sarcastic'],
            answer: 1
        }
    ]
}
    };
    // Writing Data with images
    const writingData = {
        //Term1
        'informal-email': {
            title: 'Informal Email',
            purpose: 'Writing to friends, family, or acquaintances in a casual style.',
            rules: [
                'Start with casual greeting (Hi/Hello + name)',
                'Use contractions (I\'m, don\'t, can\'t)',
                'Keep paragraphs short and conversational',
                'Use informal language and expressions',
                'End with casual closing (Best wishes, Take care)',
                'Don\'t need formal address or subject line'
            ],
            tips: [
                'Use exclamation marks to show excitement',
                'Ask questions to encourage reply',
                'Share personal news and feelings',
                'Keep it friendly and warm'
            ],
            exampleImage: 'pdfs/eng/IE.jpg',
            exampleText: 'Example of an informal email to a friend about a trip',
        },
        'informal-letter': {
            title: 'Informal Letter to Solve a Problem',
            purpose: 'Writing to someone you know to discuss and solve a problem.',
            rules: [
                'Start with friendly greeting (Dear [Name],)',
                'Briefly mention your relationship/connection',
                'Clearly describe the problem',
                'Explain why it\'s important to you',
                'Suggest possible solutions',
                'Ask for their opinion/help',
                'End with warm closing (Yours sincerely, Best regards)'
            ],
            tips: [
                'Be honest but polite about the problem',
                'Use "I" statements to express feelings',
                'Show appreciation for their understanding',
                'Keep a respectful but informal tone'
            ],
            exampleImage: 'pdfs/eng/IL.jpg',
            exampleText: 'Example letter discussing a neighborhood issue',
        },
        'tour-description': {
            title: 'Tour Description (Oman)',
            purpose: 'Describing a tour or travel experience in Oman.',
            rules: [
                'Start with an engaging introduction',
                'Describe locations in logical order',
                'Use descriptive adjectives (breathtaking, ancient, stunning)',
                'Include cultural and historical facts',
                'Mention personal experiences and feelings',
                'Use present tense for general descriptions',
                'End with recommendation or conclusion'
            ],
            tips: [
                'Research Omani landmarks (Nizwa Fort, Wahiba Sands)',
                'Include local culture and traditions',
                'Describe natural beauty (mountains, wadis, beaches)',
                'Mention traditional foods and markets',
                'Use sensory details (sights, sounds, smells)'
            ],
            exampleImage: 'pdfs/eng/TD.jpg',
            exampleText: 'Example tour description of Oman attractions',
        },
        'formal-email': {
            title: 'Formal Email (Complaint/Request)',
            purpose: 'Writing formal emails for complaints, requests, or official communication.',
            rules: [
                'Clear subject line indicating purpose',
                'Formal salutation (Dear Mr./Ms./Dr. [Last Name],)',
                'State purpose clearly in first paragraph',
                'Provide details and evidence in middle paragraphs',
                'Be polite and professional throughout',
                'State desired action or solution',
                'Formal closing (Yours sincerely, Respectfully yours)',
                'Include full name and contact information'
            ],
            tips: [
                'Use formal language (avoid contractions)',
                'Be specific with dates, times, and details',
                'Remain calm and factual, not emotional',
                'Proofread for spelling and grammar',
                'Keep it concise but complete'
            ],
            exampleImage: 'pdfs/eng/FE.jpg',
            exampleText: 'Example formal complaint email',
        },
        // Add this to your writing types object:
        'informative-writing': {
            title: 'Informative/Explanatory Writing',
            purpose: 'Explaining a topic, process, or idea clearly and objectively to educate readers.',
            rules: [
                'Start with a clear thesis statement or main idea',
                'Organize information logically (chronological, categorical, or sequential)',
                'Use facts, statistics, and evidence to support points',
                'Define specialized terms or concepts',
                'Use transition words to connect ideas (first, next, however, therefore)',
                'Maintain neutral, objective tone throughout',
                'Include examples to illustrate complex ideas',
                'End with a summary or conclusion that reinforces main points'
            ],
            tips: [
                'Research your topic thoroughly from reliable sources',
                'Consider your audience\'s prior knowledge',
                'Use headings and subheadings to organize long pieces',
                'Include diagrams or charts for complex processes',
                'Avoid personal opinions or persuasive language',
                'Use clear, precise language without unnecessary jargon',
                'Cite sources when using specific data or quotes'
          ],
            exampleImage: 'pdfs/eng/IW.jpg',
            exampleText: 'Example: "The Water Cycle in Oman\'s Ecosystem" or "Traditional Omani Craftsmanship"',
            writingGuide: 'Informative writing transforms complex information into accessible knowledge through logical organization and clear explanations. It prioritizes accuracy and clarity over stylistic flair, serving as a bridge between expert knowledge and general understanding.'
        },
        //Term2
        'biography': {
            title: 'Short Biography / Profile',
            purpose: 'Writing a brief biography about yourself or someone else.',
            rules: [
                'Start with basic information (name, age, nationality)',
                'Include educational background',
                'Mention current occupation/studies',
                'Describe key achievements or experiences',
                'Include hobbies and interests',
                'Future goals or aspirations',
                'Use third person for professional bios'
            ],
            tips: [
                'Focus on most relevant information',
                'Use positive and professional language',
                'Include specific examples of achievements',
                'Keep it concise (100-200 words)',
                'Update regularly for current bios'
            ],
            exampleImage: 'pdfs/eng/SB.jpg',
            exampleText: 'Example student biography',
        },
        'narrative': {
            title: 'Narrative About Personal Experience',
            purpose: 'Telling a story about a personal experience or event.',
            rules: [
                'Start with engaging hook or introduction',
                'Set the scene (time, place, context)',
                'Describe events in chronological order',
                'Include dialogue (optional but effective)',
                'Show emotions and reactions',
                'Build up to climax or main event',
                'End with resolution or lesson learned',
                'Use past tense for past experiences'
            ],
            tips: [
                'Use descriptive language to create imagery',
                'Show, don\'t just tell (describe actions)',
                'Include sensory details (what you saw, heard, felt)',
                'Keep paragraphs focused on specific moments',
                'Reflect on the experience\'s meaning'
            ],
            exampleImage: 'pdfs/eng/PN.jpg',
            exampleText: 'Example personal narrative story',
        },
        'book-review': {
            title: 'Book or Story Review',
            purpose: 'Analyzing and evaluating a book or story you\'ve read.',
            rules: [
                'Start with basic book information (title, author)',
                'Brief summary without spoilers',
                'Analysis of characters and plot',
                'Evaluation of writing style',
                'Personal opinion and reactions',
                'Recommendation for potential readers',
                'Use present tense for general statements',
                'Include rating (stars, out of 10, etc.)'
            ],
            tips: [
                'Balance summary with analysis',
                'Support opinions with examples from text',
                'Consider different elements (plot, characters, themes)',
                'Compare to similar books if relevant',
                'Be honest but respectful in criticism'
            ],
            exampleImage: 'pdfs/eng/BR.jpg',
            exampleText: 'Example book review of a novel',
        },
        'application-letter': {
            title: 'Formal Letter of Application',
            purpose: 'Applying for a job, scholarship, or program formally.',
            rules: [
                'Sender\'s address and date',
                'Recipient\'s address',
                'Formal salutation',
                'Clear statement of application',
                'Qualifications and relevant experience',
                'Reasons for interest',
                'Professional tone throughout',
                'Formal closing and signature',
                'Enclosure notation if needed'
            ],
            tips: [
                'Tailor letter to specific position',
                'Highlight relevant skills and achievements',
                'Show enthusiasm for opportunity',
                'Proofread multiple times for errors',
                'Keep to one page if possible',
                'Use professional formatting'
            ],
            exampleImage: 'pdfs/eng/FA.jpg',
            exampleText: 'Example scholarship application letter',
        },
        'festival': {
            title: 'Festival Description',
            purpose: 'Describing a cultural or religious festival experience.',
            rules: [
                'Introduction to the festival',
                'Historical and cultural significance',
                'Description of preparations',
                'Main events and activities',
                'Traditional foods and clothing',
                'Personal experiences and observations',
                'Conclusion about importance',
                'Use descriptive present tense'
            ],
            tips: [
                'Research festival origins and traditions',
                'Include specific cultural details',
                'Describe colors, sounds, smells, tastes',
                'Mention family and community aspects',
                'Connect to broader cultural significance',
                'For Oman: Eid, National Day, Muscat Festival'
            ],
            exampleImage: 'pdfs/eng/FD.jpg',
            exampleText: 'Example festival description in Oman',
        }
    };
    
    // ========== TERM SWITCH FUNCTIONALITY ==========
    const termSwitch = document.getElementById('term-switch');
    const termBtns = document.querySelectorAll('.term-btn');
    let currentTerm = localStorage.getItem('selectedTerm') || '1';
    let currentTab = localStorage.getItem('currentTab') || 'grammar';
    
    // Initialize term switch
    function initTermSwitch() {
        console.log('Initializing term switch...');
        
        // Set active term button
        termBtns.forEach(btn => btn.classList.remove('active'));
        const activeTermBtn = document.querySelector(`.term-btn[data-term="${currentTerm}"]`);
        if (activeTermBtn) {
            activeTermBtn.classList.add('active');
        } else if (termBtns[0]) {
            termBtns[0].classList.add('active');
        }
        
        // Apply term filtering
        applyTermFiltering(currentTerm);
        
        // Update section headers
        updateSectionHeaders(currentTerm);
    }
    
    // Apply term filtering to Grammar, Vocabulary, Exams, and Writing
    function applyTermFiltering(term) {
        console.log(`Applying term ${term} filtering`);
        
        // Set data attribute on grammar, vocabulary, exams, and writing sections
        ['grammar', 'vocabulary', 'exams', 'writing'].forEach(sectionId => {
            const section = document.getElementById(sectionId);
            if (section) {
                section.setAttribute('data-current-term', term);
                console.log(`${sectionId} section term:`, term);
            }
        });
        
        // For Reading - remove data attribute to show all
        const readingSection = document.getElementById('reading');
        if (readingSection) {
            readingSection.removeAttribute('data-current-term');
        }
    }
    
    // Update section headers to show current term
    function updateSectionHeaders(term) {
        console.log(`Updating headers for term ${term}`);
        
        const sections = ['grammar', 'vocabulary', 'exams', 'writing'];
        
        sections.forEach(sectionId => {
            const header = document.querySelector(`#${sectionId} .section-header h2`);
            if (header) {
                // Remove existing term indicators
                header.querySelectorAll('.term-indicator').forEach(el => el.remove());
                
                // Add new term indicator
                const termIndicator = document.createElement('span');
                termIndicator.className = 'term-indicator';
                termIndicator.textContent = ` (Term ${term})`;
                termIndicator.style.cssText = 'color: var(--primary-light); margin-left: 10px; font-size: 1rem;';
                header.appendChild(termIndicator);
            }
        });
    }
    
    // Term button click handlers
    termBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const selectedTerm = this.getAttribute('data-term');
            console.log(`Term button clicked: ${selectedTerm}`);
            
            // Update UI
            termBtns.forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            
            // Save to localStorage
            localStorage.setItem('selectedTerm', selectedTerm);
            currentTerm = selectedTerm;
            
            // Apply filtering
            applyTermFiltering(selectedTerm);
            
            // Update headers
            updateSectionHeaders(selectedTerm);
            
            // If current tab needs term filtering, update it
            if (currentTab === 'grammar' || currentTab === 'vocabulary' || 
                currentTab === 'exams' || currentTab === 'writing') {
                // Re-apply term filtering for the current tab
                applyTermFiltering(selectedTerm);
                updateSectionHeaders(selectedTerm);
            }
        });
    });
    
    // ========== TAB SWITCHING FUNCTIONALITY ==========
    const tabButtons = document.querySelectorAll('.tab-btn');
    const sections = document.querySelectorAll('.tab-section');
    
    // Function to switch tabs
    function switchTab(targetId) {
        console.log(`Switching to tab: ${targetId}`);
        
        // Update tab buttons
        tabButtons.forEach(btn => {
            btn.classList.remove('active');
            if (btn.getAttribute('data-target') === targetId) {
                btn.classList.add('active');
            }
        });
        
        // Update sections
        sections.forEach(section => {
            section.classList.remove('active');
            if (section.id === targetId) {
                section.classList.add('active');
            }
        });
        
        // Save current tab
        currentTab = targetId;
        localStorage.setItem('currentTab', targetId);
        
        // Apply term filtering for term-based sections
        if (targetId === 'grammar' || targetId === 'vocabulary' || 
            targetId === 'exams' || targetId === 'writing') {
            console.log(`Applying term ${currentTerm} to ${targetId}`);
            applyTermFiltering(currentTerm);
            updateSectionHeaders(currentTerm);
        } else if (targetId === 'reading') {
            // For reading, remove term indicators
            const section = document.getElementById('reading');
            if (section) {
                section.removeAttribute('data-current-term');
                const header = section.querySelector('.section-header h2');
                if (header) {
                    header.querySelectorAll('.term-indicator').forEach(el => el.remove());
                }
            }
        }
    }
    
    // Tab button click handlers
    tabButtons.forEach(btn => {
        btn.addEventListener('click', function() {
            const targetId = this.getAttribute('data-target');
            switchTab(targetId);
        });
    });
    
    // ========== EXAM CARDS SYSTEM ==========
    const examCards = document.querySelectorAll('.exam-card');
    const closePdfOverlay = document.getElementById('close-overlay');
    const pdfOverlay = document.getElementById('pdf-overlay');
const closePdfBtn = document.getElementById('close-overlay');
const pdfIframe = document.querySelector('#pdf-overlay iframe');
const pdfTitle = document.getElementById('pdf-title');
    
    // Check if exam cards exist
    console.log('Exam cards found:', examCards.length);
    
    // Toggle popup on card click
    examCards.forEach(card => {
        card.addEventListener('click', (e) => {
            if(e.target.classList.contains('pdf-btn') || e.target.closest('.pdf-btn')) return;
            examCards.forEach(c => c.classList.remove('active'));
            card.classList.add('active');
        });
    });
    
// Function to open PDF with title
function openPDF(pdfUrl, title) {
    pdfTitle.textContent = title || 'PDF Viewer';
    pdfIframe.src = pdfUrl;
    pdfOverlay.classList.add('active');
    document.body.style.overflow = 'hidden'; // Prevent scrolling
}

// Function to close PDF
function closePDF() {
    pdfOverlay.classList.remove('active');
    pdfIframe.src = '';
    document.body.style.overflow = ''; // Restore scrolling
}

// Close button click
if (closePdfBtn) {
    closePdfBtn.addEventListener('click', closePDF);
}

// Close on outside click
pdfOverlay.addEventListener('click', function(e) {
    if (e.target === pdfOverlay) {
        closePDF();
    }
});

// Close on Escape key
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && pdfOverlay.classList.contains('active')) {
        closePDF();
    }
});

// Update PDF buttons to use the new function
const pdfButtons = document.querySelectorAll('.pdf-btn');
pdfButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const pdfUrl = btn.dataset.pdf;
        const title = btn.textContent.trim();
        if (pdfUrl) {
            openPDF(pdfUrl, title);
        } else {
            console.error('No PDF URL found for button:', btn);
        }
    });
});

    // ========== VOCABULARY OVERLAY SYSTEM ==========
    const vocabOverlay = document.getElementById('vocab-overlay');
    const vocabSteps = document.getElementById('vocab-steps');
    const vocabTitle = document.getElementById('vocab-title');
    const closeVocab = document.getElementById('close-vocab');
    const prevVocab = document.getElementById('prev-vocab');
    const nextVocab = document.getElementById('next-vocab');
    
    let currentVocabCategory = null;
    let currentVocabStep = 0;
    
    console.log('Vocabulary overlay elements:', {
        overlay: !!vocabOverlay,
        steps: !!vocabSteps,
        title: !!vocabTitle,
        closeBtn: !!closeVocab,
        prevBtn: !!prevVocab,
        nextBtn: !!nextVocab
    });
    
    // Vocabulary Practice
    document.querySelectorAll('.vocab-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const category = this.getAttribute('data-category');
            console.log('vocabulary button clicked for category:', category);
            
            if (vocabularyData && vocabularyData[category]) {
                currentVocabCategory = vocabularyData[category];
                currentVocabStep = 0;
                showVocabPractice();
            } else {
                console.error('Vocabulary data not found for category:', category);
                alert('Vocabulary data not available for this category.');
            }
        });
    });
    
    function showVocabPractice() {
        console.log('Showing vocabulary practice:', currentVocabCategory.title);
        
        if (!vocabSteps || !vocabTitle) {
            console.error('Vocabulary overlay elements not found');
            return;
        }
        
        vocabTitle.textContent = currentVocabCategory.title;
        vocabSteps.innerHTML = generateVocabStep(currentVocabStep);
        vocabOverlay.style.display = 'flex';
        updateVocabNavigation();
    }
    
    function generateVocabStep(step) {
        if (!currentVocabCategory || !currentVocabCategory.words[step]) {
            return '<div class="explanation-content"><p>No vocabulary data available.</p></div>';
        }
        
        const word = currentVocabCategory.words[step];
        return `
            <div class="explanation-content">
                <h3>${word.word}</h3>
                <div class="word-details">
                    <p><strong>Translation:</strong> ${word.translation}</p>
                    <p><strong>Definition:</strong> ${word.definition}</p>
                    <div class="example-box">
                        <h4>Example:</h4>
                        <p>${word.example}</p>
                        <p class="arabic-example">${word.exampleArabic}</p>
                    </div>
                </div>
                <div class="arabic-help">
                    <h4>الأمثلة</h4>
                    <p><strong>${word.word}</strong> - ${word.translation}</p>
                    <p>${word.exampleArabic}</p>
                </div>
                <div class="word-counter">
                    <p>Word ${step + 1} of ${currentVocabCategory.words.length}</p>
                </div>
            </div>
        `;
    }
    
    function updateVocabNavigation() {
        if (!prevVocab || !nextVocab) return;
        
        prevVocab.style.display = currentVocabStep > 0 ? 'block' : 'none';
        const totalSteps = currentVocabCategory.words.length;
        nextVocab.textContent = currentVocabStep === totalSteps - 1 ? 'Finish' : 'Next';
    }
    
    function navigateVocab(direction) {
        if (!currentVocabCategory) return;
        
        const totalSteps = currentVocabCategory.words.length;
        
        if (currentVocabStep + direction >= 0 && currentVocabStep + direction < totalSteps) {
            currentVocabStep += direction;
            vocabSteps.innerHTML = generateVocabStep(currentVocabStep);
            updateVocabNavigation();
            if (vocabSteps) {
                vocabSteps.scrollTo({ top: 0, behavior: 'smooth' });
            }
        } else if (currentVocabStep + direction === totalSteps) {
            vocabOverlay.style.display = 'none';
        }
    }
    
    // Vocabulary navigation
    if (nextVocab) {
        nextVocab.addEventListener('click', () => navigateVocab(1));
    }
    if (prevVocab) {
        prevVocab.addEventListener('click', () => navigateVocab(-1));
    }
    if (closeVocab) {
        closeVocab.addEventListener('click', () => {
            vocabOverlay.style.display = 'none';
            currentVocabStep = 0;
        });
    }
    
    // ========== READING OVERLAY SYSTEM ==========
    const readingOverlay = document.getElementById('reading-overlay');
    const readingSteps = document.getElementById('reading-steps');
    const readingTitle = document.getElementById('reading-title');
    const closeReading = document.getElementById('close-reading');
    const prevReading = document.getElementById('prev-reading');
    const nextReading = document.getElementById('next-reading');
    
    let currentReadingPassage = null;
    let currentReadingStep = 0;
    
    console.log('Reading overlay elements:', {
        overlay: !!readingOverlay,
        steps: !!readingSteps,
        title: !!readingTitle,
        closeBtn: !!closeReading,
        prevBtn: !!prevReading,
        nextBtn: !!nextReading
    });
    
    // Reading Practice
    document.querySelectorAll('.read-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const passage = this.getAttribute('data-passage');
            console.log('Read button clicked for passage:', passage);
            
            if (readingData && readingData[passage]) {
                currentReadingPassage = readingData[passage];
                currentReadingStep = 0;
                showReadingPassage();
            } else {
                console.error('Reading data not found for passage:', passage);
                alert('Reading passage not available.');
            }
        });
    });
    
    function showReadingPassage() {
        console.log('Showing reading passage:', currentReadingPassage.title);
        
        if (!readingSteps || !readingTitle) {
            console.error('Reading overlay elements not found');
            return;
        }
        
        readingTitle.textContent = currentReadingPassage.title;
        readingSteps.innerHTML = generateReadingStep(currentReadingStep);
        readingOverlay.style.display = 'flex';
        updateReadingNavigation();
    }
    
    function generateReadingStep(step) {
        if (!currentReadingPassage) {
            return '<div class="explanation-content"><p>No reading data available.</p></div>';
        }
        
        if (step === 0) {
            return `
                <div class="explanation-content">
                    <h3>${currentReadingPassage.title}</h3>
                    <div class="reading-level">Level: ${currentReadingPassage.level}</div>
                    <div class="passage-content">
                        ${currentReadingPassage.passage.split('\n').map(para => `<p>${para}</p>`).join('')}
                    </div>
                    <br><br>
                    <div class="reading-tips">
                        <h4>💡 Reading Tips:</h4>
                        <ul>
                            <li>Read the passage carefully</li>
                            <li>Try to understand the main ideas</li>
                            <li>Look for key details</li>
                            <li>Answer the questions based on the text</li>
                        </ul>
                    </div>
                </div>
            `;
        } else {
            const question = currentReadingPassage.questions[step - 1];
            return `
                <div class="exercise-content">
                    <h3>Question ${step}</h3>
                    <p><strong>${question.question}</strong></p>
                    <div class="multiple-choice">
                        ${question.options.map((option, index) => `
                            <label class="option-label">
                                <input type="radio" name="reading-q${step}" value="${index}">
                                ${option}
                            </label>
                        `).join('')}
                    </div>
                    <br>
                    <button onclick="checkReadingAnswer(${step - 1})">Check Answer</button>
                    <p id="reading-feedback-${step}"></p>
                </div>
            `;
        }
    }
    
    function updateReadingNavigation() {
        if (!prevReading || !nextReading) return;
        
        prevReading.style.display = currentReadingStep > 0 ? 'block' : 'none';
        const totalSteps = 1 + (currentReadingPassage?.questions?.length || 0);
        nextReading.textContent = currentReadingStep === totalSteps - 1 ? 'Finish' : 'Next';
    }
    
    function navigateReading(direction) {
        if (!currentReadingPassage) return;
        
        const totalSteps = 1 + currentReadingPassage.questions.length;
        if (currentReadingStep + direction >= 0 && currentReadingStep + direction < totalSteps) {
            currentReadingStep += direction;
            readingSteps.innerHTML = generateReadingStep(currentReadingStep);
            updateReadingNavigation();
            if (readingSteps) {
                readingSteps.scrollTo({ top: 0, behavior: 'smooth' });
            }
        } else if (currentReadingStep + direction === totalSteps) {
            readingOverlay.style.display = 'none';
        }
    }
    
    // Reading navigation
    if (nextReading) {
        nextReading.addEventListener('click', () => navigateReading(1));
    }
    if (prevReading) {
        prevReading.addEventListener('click', () => navigateReading(-1));
    }
    if (closeReading) {
        closeReading.addEventListener('click', () => {
            readingOverlay.style.display = 'none';
            currentReadingStep = 0;
        });
    }
    
    // ========== WRITING OVERLAY SYSTEM ==========
    const writingOverlay = document.getElementById('writing-overlay');
    const writingSteps = document.getElementById('writing-steps');
    const writingTitle = document.getElementById('writing-title');
    const closeWriting = document.getElementById('close-writing');
    const prevWriting = document.getElementById('prev-writing');
    const nextWriting = document.getElementById('next-writing');
    
    let currentWritingType = null;
    let currentWritingStep = 0;
    
    console.log('Writing overlay elements:', {
        overlay: !!writingOverlay,
        steps: !!writingSteps,
        title: !!writingTitle,
        closeBtn: !!closeWriting,
        prevBtn: !!prevWriting,
        nextBtn: !!nextWriting
    });

        // Writing Practice - Button Click Handler
document.querySelectorAll('.write-btn').forEach(button => {
    button.addEventListener('click', function() {
        const writingId = this.getAttribute('data-writing');
        console.log('Writing button clicked:', writingId);
        
        if (writingData && writingData[writingId]) {
            currentWritingType = writingData[writingId];
            currentWritingStep = 0;
            showWritingLesson();
        } else {
            console.error('Writing data not found:', writingId);
            alert('Writing lesson coming soon!');
        }
    });
});
        
    function showWritingLesson() {
        console.log('Showing writing lesson:', currentWritingType.title);
        
        if (!writingSteps || !writingTitle) {
            console.error('Writing overlay elements not found');
            return;
        }
        
        writingTitle.textContent = currentWritingType.title;
        writingSteps.innerHTML = generateWritingStep(currentWritingStep);
        writingOverlay.style.display = 'flex';
        updateWritingNavigation();
    }
    
    function generateWritingStep(step) {
        if (!currentWritingType) {
            return '<div class="explanation-content"><p>No writing data available.</p></div>';
        }
        
        if (step === 0) {
            return `
                <div class="writing-content">
                    <div class="writing-purpose">
                        <p><strong>Purpose:</strong> ${currentWritingType.purpose}</p>
                    </div>
                    
                    <div class="writing-rules">
                        <h4><i class="fas fa-list-check"></i> Structure & Rules</h4>
                        <ul>
                            ${currentWritingType.rules.map(rule => `<li>${rule}</li>`).join('')}
                        </ul>
                    </div>
                    
                    <div class="writing-tips">
                        <h4><i class="fas fa-lightbulb"></i> Writing Tips</h4>
                        <ul>
                            ${currentWritingType.tips.map(tip => `<li>${tip}</li>`).join('')}
                        </ul>
                    </div>
                </div>
            `;
        } else if (step === 1) {
            return `
                <div class="writing-content">
                    <div class="writing-example">
                        <h4><i class="fas fa-image"></i> ${currentWritingType.exampleText}</h4>
                        <div class="example-image">
                            <img src="${currentWritingType.exampleImage}" alt="${currentWritingType.title} Example" onerror="this.src='pdfs/placeholder.jpg'">
                            <p>${currentWritingType.exampleText}</p>
                        </div>
                    </div>
                </div>
            `;
        }
    }
    
    function updateWritingNavigation() {
        if (!prevWriting || !nextWriting) return;
        
        prevWriting.style.display = currentWritingStep > 0 ? 'block' : 'none';
        nextWriting.textContent = currentWritingStep === 1 ? 'Finish' : 'Next';
    }
    
    function navigateWriting(direction) {
        if (!currentWritingType) return;
        
        if (currentWritingStep + direction >= 0 && currentWritingStep + direction <= 1) {
            currentWritingStep += direction;
            writingSteps.innerHTML = generateWritingStep(currentWritingStep);
            updateWritingNavigation();
            if (writingSteps) {
                writingSteps.scrollTo({ top: 0, behavior: 'smooth' });
            }
        } else if (currentWritingStep + direction === 2) {
            writingOverlay.style.display = 'none';
            currentWritingStep = 0;
        }
    }
    
    // Writing navigation
    if (nextWriting) {
        nextWriting.addEventListener('click', () => navigateWriting(1));
    }
    if (prevWriting) {
        prevWriting.addEventListener('click', () => navigateWriting(-1));
    }
    if (closeWriting) {
        closeWriting.addEventListener('click', () => {
            writingOverlay.style.display = 'none';
            currentWritingStep = 0;
        });
    }
    
    // Grammar Overlay System
    const overlay = document.getElementById('lesson-overlay');
    const lessonSteps = document.querySelector('.lesson-steps');
    const lessonTitle = document.getElementById('lesson-title');
    const closeBtn = document.getElementById('close-lesson');
    closeBtn.addEventListener('click', function() {
        overlay.style.display = 'none';
    });

    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');

    let currentLesson = [];
    let currentStep = 0;

    // Start lesson when button clicked
    document.querySelectorAll('.start-btn').forEach(button => {
        button.addEventListener('click', function() {
            const lessonId = this.getAttribute('data-lesson');
            if (lessons[lessonId]) {
                currentLesson = lessons[lessonId];
                currentStep = 0;
                showLesson();
            } else {
                alert('Lesson coming soon!');
            }
        });
    });

    function showLesson() {
        lessonTitle.textContent = 'Grammar Lesson';
        lessonSteps.innerHTML = currentLesson[currentStep];
        overlay.style.display = 'flex';
        updateNavigation();
    }

    function updateNavigation() {
        prevBtn.style.display = currentStep > 0 ? 'block' : 'none';
        nextBtn.textContent = currentStep === currentLesson.length - 1 ? 'Finish' : 'Next';
    }

    // Navigation buttons
    nextBtn.addEventListener('click', function() {
        if (currentStep < currentLesson.length - 1) {
            currentStep++;
            lessonSteps.innerHTML = currentLesson[currentStep];
            updateNavigation();
            lessonSteps.scrollTo({ top: 0, behavior: 'smooth' });
        } else {
            overlay.style.display = 'none';
        }
    });

    prevBtn.addEventListener('click', function() {
        if (currentStep > 0) {
            currentStep--;
            lessonSteps.innerHTML = currentLesson[currentStep];
            updateNavigation();
            lessonSteps.scrollTo({ top: 0, behavior: 'smooth' });
        }
    });

    // Exercise checking functions
    window.checkAnswers = function() {
        const answer1 = document.getElementById('answer1').value.toLowerCase();
        const answer2 = document.getElementById('answer2').value.toLowerCase();
        const feedback = document.getElementById('feedback');
        
        if (answer1 === 'goes' && answer2 === 'play') {
            feedback.textContent = '🎉 Correct! Well done!';
            feedback.style.color = 'green';
            feedback.style.background = 'rgba(74, 222, 128, 0.1)';
            feedback.style.padding = '10px 15px';
            feedback.style.borderRadius = '8px';
        } else {
            feedback.textContent = '❌ Try again! Answers: goes, play';
            feedback.style.color = 'red';
            feedback.style.background = 'rgba(239, 68, 68, 0.1)';
            feedback.style.padding = '10px 15px';
            feedback.style.borderRadius = '8px';
        }
    };

    window.checkAnswersPC = function() {
        const answer1 = document.getElementById('answer1-pc').value.toLowerCase();
        const answer2 = document.getElementById('answer2-pc').value.toLowerCase();
        const feedback = document.getElementById('feedback-pc');
        
        if (answer1 === 'am reading' && answer2 === 'are watching') {
            feedback.textContent = '🎉 Correct! Well done!';
            feedback.style.color = 'green';
            feedback.style.background = 'rgba(74, 222, 128, 0.1)';
            feedback.style.padding = '10px 15px';
            feedback.style.borderRadius = '8px';
        } else {
            feedback.textContent = '❌ Try again! Answers: am reading, are watching';
            feedback.style.color = 'red';
            feedback.style.background = 'rgba(239, 68, 68, 0.1)';
            feedback.style.padding = '10px 15px';
            feedback.style.borderRadius = '8px';
        }
    };

    window.checkAnswersPS = function() {
        const answer1 = document.getElementById('answer1-ps').value.toLowerCase();
        const answer2 = document.getElementById('answer2-ps').value.toLowerCase();
        const feedback = document.getElementById('feedback-ps');
        
        if (answer1 === 'finished' && answer2 === 'went') {
            feedback.textContent = '🎉 Correct! Well done!';
            feedback.style.color = 'green';
            feedback.style.background = 'rgba(74, 222, 128, 0.1)';
            feedback.style.padding = '10px 15px';
            feedback.style.borderRadius = '8px';
        } else {
            feedback.textContent = '❌ Try again! Answers: finished, went';
            feedback.style.color = 'red';
            feedback.style.background = 'rgba(239, 68, 68, 0.1)';
            feedback.style.padding = '10px 15px';
            feedback.style.borderRadius = '8px';
        }
    };

    window.checkAnswersPCT = function() {
        const answer1 = document.getElementById('answer1-pct').value.toLowerCase();
        const answer2 = document.getElementById('answer2-pct').value.toLowerCase();
        const feedback = document.getElementById('feedback-pct');
        
        if (answer1 === 'was watching' && answer2 === 'were studying') {
            feedback.textContent = '🎉 Correct! Well done!';
            feedback.style.color = 'green';
            feedback.style.background = 'rgba(74, 222, 128, 0.1)';
            feedback.style.padding = '10px 15px';
            feedback.style.borderRadius = '8px';
        } else {
            feedback.textContent = '❌ Try again! Answers: was watching, were studying';
            feedback.style.color = 'red';
            feedback.style.background = 'rgba(239, 68, 68, 0.1)';
            feedback.style.padding = '10px 15px';
            feedback.style.borderRadius = '8px';
        }
    };

    window.checkAnswersPP = function() {
        const answer1 = document.getElementById('answer1-pp').value.toLowerCase();
        const answer2 = document.getElementById('answer2-pp').value.toLowerCase();
        const feedback = document.getElementById('feedback-pp');
        
        if (answer1 === 'finished' && answer2 === 'broken') {
            feedback.textContent = '🎉 Correct! Well done!';
            feedback.style.color = 'green';
            feedback.style.background = 'rgba(74, 222, 128, 0.1)';
            feedback.style.padding = '10px 15px';
            feedback.style.borderRadius = '8px';
        } else {
            feedback.textContent = '❌ Try again! Answers: finished, broken';
            feedback.style.color = 'red';
            feedback.style.background = 'rgba(239, 68, 68, 0.1)';
            feedback.style.padding = '10px 15px';
            feedback.style.borderRadius = '8px';
        }
    };

    window.checkAnswersPPV = function() {
        const answer1 = document.getElementById('answer1-ppv').value.toLowerCase();
        const answer2 = document.getElementById('answer2-ppv').value.toLowerCase();
        const feedback = document.getElementById('feedback-ppv');
        
        if (answer1 === 'this house was built in 1990' && answer2 === 'the letter was written') {
            feedback.textContent = '🎉 Correct! Well done!';
            feedback.style.color = 'green';
            feedback.style.background = 'rgba(74, 222, 128, 0.1)';
            feedback.style.padding = '10px 15px';
            feedback.style.borderRadius = '8px';
        } else {
            feedback.textContent = '❌ Try again! Answers: This house was built in 1990, The letter was written';
            feedback.style.color = 'red';
            feedback.style.background = 'rgba(239, 68, 68, 0.1)';
            feedback.style.padding = '10px 15px';
            feedback.style.borderRadius = '8px';
        }
    };
    
    // Exercise checking functions for Term 2
    window.checkAnswersCS = function() {
        const answer1 = document.getElementById('answer1-cs').value.toLowerCase();
        const answer2 = document.getElementById('answer2-cs').value.toLowerCase();
        const feedback = document.getElementById('feedback-cs');
        
        if ((answer1 === 'taller' || answer1 === 'more tall') && 
            (answer2 === 'most interesting' || answer2 === 'interestingest')) {
            feedback.textContent = '🎉 Correct! Well done!';
            feedback.style.color = 'green';
            feedback.style.background = 'rgba(74, 222, 128, 0.1)';
            feedback.style.padding = '10px 15px';
            feedback.style.borderRadius = '8px';
        } else {
            feedback.textContent = '❌ Try again! Answers: taller/more tall, most interesting';
            feedback.style.color = 'red';
            feedback.style.background = 'rgba(239, 68, 68, 0.1)';
            feedback.style.padding = '10px 15px';
            feedback.style.borderRadius = '8px';
        }
    };

    window.checkAnswersQT = function() {
        const answer1 = document.getElementById('answer1-qt').value.toLowerCase().trim();
        const answer2 = document.getElementById('answer2-qt').value.toLowerCase().trim();
        const feedback = document.getElementById('feedback-qt');
        
        const correct1 = ["doesn't she", "does she not"];
        const correct2 = ["do you", "do you?"];
        
        if (correct1.includes(answer1) && correct2.includes(answer2)) {
            feedback.textContent = '🎉 Correct! Well done!';
            feedback.style.color = 'green';
            feedback.style.background = 'rgba(74, 222, 128, 0.1)';
            feedback.style.padding = '10px 15px';
            feedback.style.borderRadius = '8px';
        } else {
            feedback.textContent = '❌ Try again! Answers: doesn\'t she?, do you?';
            feedback.style.color = 'red';
            feedback.style.background = 'rgba(239, 68, 68, 0.1)';
            feedback.style.padding = '10px 15px';
            feedback.style.borderRadius = '8px';
        }
    };

    window.checkAnswersPSPP = function() {
        const answer1 = document.getElementById('answer1-pspp').value.toLowerCase();
        const answer2 = document.getElementById('answer2-pspp').value.toLowerCase();
        const feedback = document.getElementById('feedback-pspp');
        
        if ((answer1 === 'saw' || answer1 === 'have seen') && 
            (answer2 === 'has lived' || answer2 === 'lived')) {
            feedback.textContent = '🎉 Correct! Well done!';
            feedback.style.color = 'green';
            feedback.style.background = 'rgba(74, 222, 128, 0.1)';
            feedback.style.padding = '10px 15px';
            feedback.style.borderRadius = '8px';
        } else {
            feedback.textContent = '❌ Try again! Answers: saw/have seen, has lived/lived';
            feedback.style.color = 'red';
            feedback.style.background = 'rgba(239, 68, 68, 0.1)';
            feedback.style.padding = '10px 15px';
            feedback.style.borderRadius = '8px';
        }
    };

    window.checkAnswersPPMod = function() {
        const answer1 = document.getElementById('answer1-ppmod').value.toLowerCase();
        const answer2 = document.getElementById('answer2-ppmod').value.toLowerCase();
        const feedback = document.getElementById('feedback-ppmod');
        
        if (answer1 === 'just' && answer2 === 'yet') {
            feedback.textContent = '🎉 Correct! Well done!';
            feedback.style.color = 'green';
            feedback.style.background = 'rgba(74, 222, 128, 0.1)';
            feedback.style.padding = '10px 15px';
            feedback.style.borderRadius = '8px';
        } else {
            feedback.textContent = '❌ Try again! Answers: just, yet';
            feedback.style.color = 'red';
            feedback.style.background = 'rgba(239, 68, 68, 0.1)';
            feedback.style.padding = '10px 15px';
            feedback.style.borderRadius = '8px';
        }
    };

    window.checkAnswersCan = function() {
        const answer1 = document.getElementById('answer1-can').value.toLowerCase();
        const answer2 = document.getElementById('answer2-can').value.toLowerCase();
        const feedback = document.getElementById('feedback-can');
        
        if ((answer1 === 'can speak' || answer1 === 'canspeak') && 
            (answer2 === 'can' || answer2 === 'can?')) {
            feedback.textContent = '🎉 Correct! Well done!';
            feedback.style.color = 'green';
            feedback.style.background = 'rgba(74, 222, 128, 0.1)';
            feedback.style.padding = '10px 15px';
            feedback.style.borderRadius = '8px';
        } else {
            feedback.textContent = '❌ Try again! Answers: can speak, Can';
            feedback.style.color = 'red';
            feedback.style.background = 'rgba(239, 68, 68, 0.1)';
            feedback.style.padding = '10px 15px';
            feedback.style.borderRadius = '8px';
        }
    };

    window.checkAnswersPassive = function() {
        const answer1 = document.getElementById('answer1-passive').value.toLowerCase();
        const answer2 = document.getElementById('answer2-passive').value.toLowerCase();
        const feedback = document.getElementById('feedback-passive');
        
        const correct1 = "the office is cleaned every day";
        const correct2 = "my bicycle was stolen yesterday";
        
        if (answer1.includes('office is cleaned') && answer2.includes('bicycle was stolen')) {
            feedback.textContent = '🎉 Correct! Well done!';
            feedback.style.color = 'green';
            feedback.style.background = 'rgba(74, 222, 128, 0.1)';
            feedback.style.padding = '10px 15px';
            feedback.style.borderRadius = '8px';
        } else {
            feedback.textContent = '❌ Try again! Answers: The office is cleaned every day, My bicycle was stolen yesterday';
            feedback.style.color = 'red';
            feedback.style.background = 'rgba(239, 68, 68, 0.1)';
            feedback.style.padding = '10px 15px';
            feedback.style.borderRadius = '8px';
        }
    };
    
    // Vocabulary word cards click
    const wordCards = document.querySelectorAll('.word-card');
    wordCards.forEach(card => {
        card.addEventListener('click', function() {
        });
    });
     // vocabulary buttons
    const practiceBtns = document.querySelectorAll('.vocab-btn');
    practiceBtns.forEach(btn => {
        btn.addEventListener('click', function() {
        });
    });
     // Reading buttons
    const readBtns = document.querySelectorAll('.read-btn');
    readBtns.forEach(btn => {
        btn.addEventListener('click', function() {
        });
    });

    // Global functions for exercises
    window.checkMatchingExercise = function() {
        const feedback = document.getElementById('matching-feedback');
        const selects = document.querySelectorAll('.match-select');
        let allCorrect = true;
        
        selects.forEach(select => {
            const index = select.getAttribute('data-index');
            const correctMeaning = vocabularyData[currentVocabCategory].exercises[0].pairs[index].meaning;
            if (select.value !== correctMeaning) {
                allCorrect = false;
            }
        });
        
        if (allCorrect) {
            feedback.textContent = '🎉 Perfect! All matches are correct!';
            feedback.style.color = 'green';
            feedback.style.background = 'rgba(74, 222, 128, 0.1)';
            feedback.style.padding = '10px 15px';
            feedback.style.borderRadius = '8px';
        } else {
            feedback.textContent = '❌ Some matches are incorrect. Try again!';
            feedback.style.color = 'red';
            feedback.style.background = 'rgba(239, 68, 68, 0.1)';
            feedback.style.padding = '10px 15px';
            feedback.style.borderRadius = '8px';
        }
    };
    window.checkFillBlankExercise = function() {
        const feedback = document.getElementById('fillblank-feedback');
        const inputs = document.querySelectorAll('.blank-input');
        const correctAnswers = vocabularyData[currentVocabCategory].exercises[1].answers;
        let allCorrect = true;
        
        inputs.forEach((input, index) => {
            if (input.value.toLowerCase() !== correctAnswers[index].toLowerCase()) {
                allCorrect = false;
            }
        });
        
        if (allCorrect) {
            feedback.textContent = '🎉 Excellent! All answers are correct!';
            feedback.style.color = 'green';
            feedback.style.background = 'rgba(74, 222, 128, 0.1)';
            feedback.style.padding = '10px 15px';
            feedback.style.borderRadius = '8px';
        } else {
            feedback.textContent = '❌ Some answers are incorrect. Check and try again!';
            feedback.style.color = 'red';
            feedback.style.background = 'rgba(239, 68, 68, 0.1)';
            feedback.style.padding = '10px 15px';
            feedback.style.borderRadius = '8px';
        }
    };
    window.checkReadingAnswer = function(questionIndex) {
        const feedback = document.getElementById(`reading-feedback-${questionIndex + 1}`);
        const selected = document.querySelector(`input[name="reading-q${questionIndex + 1}"]:checked`);
        
        if (!selected) {
            feedback.textContent = 'Please select an answer first!';
            feedback.style.color = 'orange';
            feedback.style.background = 'rgba(245, 158, 11, 0.1)';
            feedback.style.padding = '10px 15px';
            feedback.style.borderRadius = '8px';
            return;
        }
        
        const correctAnswer = currentReadingPassage.questions[questionIndex].answer;
        if (parseInt(selected.value) === correctAnswer) {
            feedback.textContent = '✅ Correct! Well done!';
            feedback.style.color = 'green';
            feedback.style.background = 'rgba(74, 222, 128, 0.1)';
            feedback.style.padding = '10px 15px';
            feedback.style.borderRadius = '8px';
        } else {
            feedback.textContent = '❌ Incorrect. Try again!';
            feedback.style.color = 'red';
            feedback.style.background = 'rgba(239, 68, 68, 0.1)';
            feedback.style.padding = '10px 15px';
            feedback.style.borderRadius = '8px';
        }
    };

    const removeAllActive = () => {
        tabButtons.forEach(b => b.classList.remove('active'));
        sections.forEach(s => s.classList.remove('active'));
    };

    tabButtons.forEach(btn => {
        if (!btn.hasAttribute('type')) btn.setAttribute('type', 'button');
        btn.addEventListener('click', () => {
            removeAllActive();
            btn.classList.add('active');
            document.getElementById(btn.dataset.target).classList.add('active');
        });
    });

    document.addEventListener('click', function(event) {
        // Close exam card popups when clicking outside
        if (!event.target.closest('.exam-card')) {
            examCards.forEach(card => card.classList.remove('active'));
        }
        
        // Close overlays when clicking on the backdrop
        const overlays = [
            vocabOverlay, 
            readingOverlay, 
            writingOverlay, 
            pdfOverlay,
            overlay // grammar overlay
        ];
        
        overlays.forEach(overlayElement => {
            if (overlayElement && event.target === overlayElement) {
                overlayElement.style.display = 'none';
                if (overlayElement === pdfOverlay) {
                    pdfIframe.src = "";
                }
            }
        });
    });


            // ========== INITIALIZE EVERYTHING ==========
    function initializeEverything() {
        console.log('Initializing everything...');
        
        // Initialize term switch first
        initTermSwitch();
        
        // Then switch to saved tab
        switchTab(currentTab);
        
        console.log('Initialization complete');
        console.log(`Current term: ${currentTerm}, Current tab: ${currentTab}`);
    }
    
    // Run initialization
    initializeEverything();

});


