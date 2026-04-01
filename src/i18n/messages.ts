export type Locale = "en" | "ar";

export type Messages = {
  metaTitle: string;
  metaDescription: string;
  navAbout: string;
  navLms: string;
  navQuranArabic: string;
  navAi: string;
  navOpenMenu: string;
  navCloseMenu: string;
  navHome: string;
  navOpenLms: string;
  prefThemeLight: string;
  prefThemeDark: string;
  prefLangEnglish: string;
  prefLangArabic: string;
  loaderPreparing: string;
  heroBadge: string;
  heroH1Line1: string;
  heroH1Line3: string;
  heroSub: string;
  heroCtaOpenLms: string;
  heroCtaLearn: string;
  heroExploreLms: string;
  heroBuiltFor: string;
  heroRotating: readonly string[];
  heroStrip: readonly string[];
  aboutKicker: string;
  aboutTitle: string;
  aboutP1Prefix: string;
  aboutP1Strong: string;
  aboutP1Suffix: string;
  aboutP2: string;
  aboutP3: string;
  lmsKicker: string;
  lmsTitle: string;
  lmsIntro: string;
  lmsSpotlight: string;
  lmsOpenLms: string;
  lmsCourseImgAlt: string;
  lmsFeatures: readonly { title: string; body: string }[];
  quranKicker: string;
  quranTitle: string;
  quranIntro: string;
  quranIntroStrong: string;
  quranIntroSuffix: string;
  quranCards: readonly { title: string; body: string }[];
  aiKicker: string;
  aiTitle: string;
  aiIntro: string;
  aiOptions: readonly { title: string; body: string }[];
  soonKicker: string;
  soonTitle: string;
  soonBodyPrefix: string;
  soonBodyStrong: string;
  soonBodySuffix: string;
  soonBadge: string;
  soonSubjects: readonly string[];
  footerTagline: string;
  footerLearn: string;
  footerResources: string;
  footerContact: string;
  footerLinkAbout: string;
  footerLinkLms: string;
  footerLinkQuran: string;
  footerLinkAi: string;
  footerLinkComing: string;
  footerLinkOpenLms: string;
  footerLinkSite: string;
  footerContactMail: string;
  footerContactMap: string;
  footerCopyright: string;
  socialWebsite: string;
  socialOrganization: string;
  socialUpdates: string;
  socialShare: string;
  socialCommunity: string;
  socialContact: string;
  scrollTop: string;
};

export const messagesEn: Messages = {
  metaTitle: "Inun — Social and Learning Network",
  metaDescription:
    "Inun connects learners and educators: Quran and Arabic with live classes and modern tools, plus an LMS for structured learning. More subjects coming soon.",
  navAbout: "About",
  navLms: "LMS",
  navQuranArabic: "Quran & Arabic",
  navAi: "AI learning",
  navOpenMenu: "Open menu",
  navCloseMenu: "Close menu",
  navHome: "Inun home",
  navOpenLms: "Open LMS",
  prefThemeLight: "Switch to light mode",
  prefThemeDark: "Switch to dark mode",
  prefLangEnglish: "English",
  prefLangArabic: "العربية",
  loaderPreparing: "Preparing your learning network",
  heroBadge: "Inun Social & Learning Network",
  heroH1Line1: "Modern learning for",
  heroH1Line3: "One connected network—from your first lesson to your career.",
  heroSub:
    "Courses, live sessions, assessments, AI mock interviews, and a job portal in one place—built so learners and educators move forward together.",
  heroCtaOpenLms: "Open LMS",
  heroCtaLearn: "Learn about Inun",
  heroExploreLms: "Explore the LMS features",
  heroBuiltFor: "Built for real programs",
  heroRotating: [
    "Quran & Arabic",
    "live classes",
    "skills & assessments",
    "mock interviews",
    "careers & jobs",
    "your community",
  ],
  heroStrip: [
    "Courses & video",
    "Quizzes",
    "Assessments",
    "Community",
    "Course experience",
    "Live & learn",
    "Progress & results",
    "Your hub",
  ],
  aboutKicker: "About",
  aboutTitle: "What is the Inun network?",
  aboutP1Prefix: "Inun is a ",
  aboutP1Strong: "social and learning network",
  aboutP1Suffix:
    " designed for people who want more than passive content: clear pathways, live touchpoints with instructors, and peers who share the same goals.",
  aboutP2:
    "Whether you are beginning your journey or deepening existing skills, Inun connects you to curriculum, schedules, and progress in one place. The same LMS hosts courses (including video and quiz content), assessments, live sessions, mock interviews, a job portal with application tracking, and more—so you spend less time juggling tools and more time learning.",
  aboutP3:
    "Our focus starts with foundational Islamic literacy—Quran and Arabic—delivered with modern tooling and live instruction. More subjects will follow on the same interactive platform.",
  lmsKicker: "Platform",
  lmsTitle: "What you get in the Inun LMS",
  lmsIntro:
    "The Inun learning portal brings together the same capabilities our learners use every day: structured courses, assessments, AI mock interviews, a job portal with application tracking, live Zoom sessions, attendance, and community—all behind one sign-in at the link below.",
  lmsSpotlight:
    "Your institution turns individual features on or off, but the platform is built to cover the full journey—from lessons and quizzes to assessments, careers, and live instruction.",
  lmsOpenLms: "Open LMS",
  lmsCourseImgAlt: "Inun LMS course experience",
  lmsFeatures: [
    {
      title: "Courses, videos & quizzes",
      body: "Enroll in courses, follow structured modules, and track your progress. Course content includes video lessons and quizzes so you practice as you learn—not only at exam time.",
    },
    {
      title: "Assessments",
      body: "Scheduled assessments with clear start times and instructions. When your program requires it, assessments can run in a proctored setup with device checks for a fair, focused attempt.",
    },
    {
      title: "Mock interviews",
      body: "Prepare for real interviews with AI-powered mock sessions: quick start for instant practice or scheduled interviews with topics, difficulty, and AI-generated questions.",
    },
    {
      title: "Job portal & applications",
      body: "Browse open roles in the job portal, submit applications, and track where you stand—so job search and coursework stay organized in one platform.",
    },
    {
      title: "Live sessions",
      body: "Join live Zoom classes from the LMS, access join links and session details, and watch recordings when your instructor makes them available.",
    },
    {
      title: "Attendance",
      body: "Mark attendance for live activities using the code your instructor shares—quick confirmation that you participated.",
    },
    {
      title: "Community",
      body: "Discuss and connect with peers in the community area alongside your courses, so learning stays social even between live sessions.",
    },
  ],
  quranKicker: "Focus now",
  quranTitle: "Quran & Arabic—live classes and modern tools",
  quranIntro:
    "Our first learning tracks focus on Quran recitation (tajweed), memorization support where appropriate, and Arabic so you can engage with the text with growing confidence. Instruction blends ",
  quranIntroStrong: "live classes",
  quranIntroSuffix: " with practice between sessions.",
  quranCards: [
    {
      title: "Live instruction",
      body: "Learn with real-time feedback from teachers, ask questions, and stay accountable to a schedule that fits structured growth.",
    },
    {
      title: "Practice between classes",
      body: "Reinforce lessons with guided exercises and tools that support repetition, listening, and reading at your pace.",
    },
    {
      title: "Thoughtful use of AI",
      body: "Where it helps, we use AI-powered features to suggest practice, surface explanations, and keep you moving—always alongside human instruction, not instead of it.",
    },
  ],
  aiKicker: "Responsible AI",
  aiTitle: "AI options that support real learning",
  aiIntro:
    "Artificial intelligence in Inun is optional assistance: it complements your teachers and peers—never a replacement for live guidance on sensitive or religious topics. In the LMS, you will see it most directly in features like mock interviews and future assistive tools.",
  aiOptions: [
    {
      title: "AI mock interviews",
      body: "The LMS includes AI-powered mock interviews—quick practice or fully scheduled sessions with generated questions—so you rehearse before real employer conversations.",
    },
    {
      title: "Adaptive practice",
      body: "Extra drills and prompts tuned to what you are working on—so review time goes further.",
    },
    {
      title: "Faster feedback",
      body: "Get timely suggestions on exercises and reflections between live sessions.",
    },
    {
      title: "Clear next steps",
      body: "Summaries and reminders that help you see what to study next without guesswork.",
    },
    {
      title: "Support for instructors",
      body: "Administrators and teachers use AI-assisted course tooling in the same ecosystem—more time for live teaching and mentoring.",
    },
  ],
  soonKicker: "Roadmap",
  soonTitle: "More subjects—coming soon",
  soonBodyPrefix: "We are building an ",
  soonBodyStrong: "interactive learning platform",
  soonBodySuffix:
    " that will expand beyond Quran and Arabic. Expect the same emphasis on structure, live touchpoints, and tools that keep learners engaged.",
  soonBadge: "Soon",
  soonSubjects: [
    "Mathematics",
    "Science",
    "Language arts",
    "Computer skills",
    "More to be announced",
  ],
  footerTagline:
    "Inun is a social and learning network for Quran, Arabic, and modern learning—courses, live classes, assessments, and careers in one place.",
  footerLearn: "Learn",
  footerResources: "Resources",
  footerContact: "Contact",
  footerLinkAbout: "About Inun",
  footerLinkLms: "LMS platform",
  footerLinkQuran: "Quran & Arabic",
  footerLinkAi: "AI learning",
  footerLinkComing: "Coming soon subjects",
  footerLinkOpenLms: "Open LMS",
  footerLinkSite: "inun.com",
  footerContactMail: "Visit inun.com for contact options",
  footerContactMap: "Social & learning network — online",
  footerCopyright: "All rights reserved.",
  socialWebsite: "Website",
  socialOrganization: "Organization",
  socialUpdates: "Updates",
  socialShare: "Share",
  socialCommunity: "Community",
  socialContact: "Contact",
  scrollTop: "Back to top",
};

export const messagesAr: Messages = {
  metaTitle: "إنون — شبكة اجتماعية وتعليمية",
  metaDescription:
    "إنون تربط المتعلمين والمعلمين: القرآن والعربية مع حصص مباشرة وأدوات حديثة، ومنصة تعليمية متكاملة. المزيد من المواد قريبًا.",
  navAbout: "عن إنون",
  navLms: "المنصة",
  navQuranArabic: "القرآن والعربية",
  navAi: "التعلم بالذكاء الاصطناعي",
  navOpenMenu: "فتح القائمة",
  navCloseMenu: "إغلاق القائمة",
  navHome: "الرئيسية — إنون",
  navOpenLms: "فتح المنصة",
  prefThemeLight: "الوضع الفاتح",
  prefThemeDark: "الوضع الداكن",
  prefLangEnglish: "English",
  prefLangArabic: "العربية",
  loaderPreparing: "جاري تجهيز شبكتك التعليمية",
  heroBadge: "إنون — شبكة اجتماعية وتعليمية",
  heroH1Line1: "تعلّم حديث لـ",
  heroH1Line3: "شبكة واحدة تربط أول درس بمسارك المهني.",
  heroSub:
    "دورات، جلسات مباشرة، تقييمات، مقابلات تجريبية بالذكاء الاصطناعي، وبوابة وظائف في مكان واحد—ليتقدّم المتعلمون والمعلمون معًا.",
  heroCtaOpenLms: "فتح المنصة",
  heroCtaLearn: "تعرّف على إنون",
  heroExploreLms: "استكشف مزايا المنصة",
  heroBuiltFor: "مصمم للبرامج الحقيقية",
  heroRotating: [
    "القرآن والعربية",
    "الحصص المباشرة",
    "المهارات والتقييمات",
    "المقابلات التجريبية",
    "المسارات المهنية",
    "مجتمعك",
  ],
  heroStrip: [
    "دورات وفيديو",
    "اختبارات قصيرة",
    "التقييمات",
    "المجتمع",
    "تجربة الدورة",
    "تعلّم مباشر",
    "التقدم والنتائج",
    "مركزك",
  ],
  aboutKicker: "نبذة",
  aboutTitle: "ما هي شبكة إنون؟",
  aboutP1Prefix: "إنون ",
  aboutP1Strong: "شبكة اجتماعية وتعليمية",
  aboutP1Suffix:
    " لمن يريد أكثر من المحتوى السلبي: مسارات واضحة، نقاط تواصل مباشرة مع المعلمين، وأقران يشتركون أهدافك.",
  aboutP2:
    "سواء بدأت رحلتك أو عمّقت مهاراتك، تربطك إنون بالمنهج والجداول والتقدم في مكان واحد. نفس المنصة تضم الدورات (بما فيها الفيديو والاختبارات القصيرة) والتقييمات والجلسات الحية والمقابلات التجريبية وبوابة الوظائف وتتبع الطلبات—لتقضي وقتاً أقل بين الأدوات وأكثر في التعلم.",
  aboutP3:
    "نبدأ بالثقافة الإسلامية الأساسية—القرآن والعربية—بأدوات حديثة وتعليم مباشر. ستُضاف مواد أخرى على نفس المنصة التفاعلية.",
  lmsKicker: "المنصة",
  lmsTitle: "ما تحصل عليه في منصة إنون",
  lmsIntro:
    "تجمع بوابة التعلم لدينا ما يستخدمه المتعلمون يوميًا: دورات منظمة، تقييمات، مقابلات تجريبية بالذكاء الاصطناعي، بوابة وظائف وتتبع الطلبات، جلسات زووم مباشرة، حضور، ومجتمع—بكل ذلك خلف تسجيل دخول واحد عبر الرابط أدناه.",
  lmsSpotlight:
    "مؤسستك تفعّل أو تعطّل المزايا حسب الحاجة، لكن المنصة مصممة لتغطي الرحلة كاملة—من الدروس والاختبارات القصيرة إلى التقييمات والوظائف والتعليم المباشر.",
  lmsOpenLms: "فتح المنصة",
  lmsCourseImgAlt: "تجربة الدورة في منصة إنون",
  lmsFeatures: [
    {
      title: "دورات وفيديو واختبارات قصيرة",
      body: "سجّل في الدورات، اتبع الوحدات، وتابع تقدمك. المحتوى يشمل دروسًا مرئية واختباراتًا قصيرة لتطبّق أثناء التعلم—لا في الامتحان فقط.",
    },
    {
      title: "التقييمات",
      body: "تقييمات بمواعيد واضحة وتعليمات. عند الحاجة يمكن إجراؤها بإشراف مع فحص الأجهزة لمحاولة عادلة ومركزة.",
    },
    {
      title: "المقابلات التجريبية",
      body: "تدرّب على المقابلات الحقيقية بجلسات بالذكاء الاصطناعي: بدء سريع أو جدولة كاملة بمواضيع وصعوبة وأسئلة مولّدة.",
    },
    {
      title: "بوابة الوظائف والطلبات",
      body: "تصفّح الوظائف، قدّم الطلبات، واعرف حالة طلبك—ليبقى البحث عن العمل والدراسة منظّمين في منصة واحدة.",
    },
    {
      title: "الجلسات المباشرة",
      body: "انضمّ لحصص زووم من المنصة، مع روابط الانضمام والتفاصيل، وسجلات عند توفرها من المعلم.",
    },
    {
      title: "الحضور",
      body: "سجّل حضورك للأنشطة المباشرة بالرمز الذي يشاركه المعلم—تأكيد سريع لمشاركتك.",
    },
    {
      title: "المجتمع",
      body: "ناقش وتواصل مع الأقران في مساحة المجتمع بجانب دوراتك، ليبقى التعلم اجتماعيًا بين الحصص.",
    },
  ],
  quranKicker: "التركيز الآن",
  quranTitle: "القرآن والعربية—حصص مباشرة وأدوات حديثة",
  quranIntro:
    "مساراتنا الأولى تركز على التلاوة (التجويد) ودعم الحفظ حيث يناسب، والعربية لتتعامل مع النص بثقة متزايدة. يمزج التعليم ",
  quranIntroStrong: "حصصًا مباشرة",
  quranIntroSuffix: " مع التدريب بين الجلسات.",
  quranCards: [
    {
      title: "تعليم مباشر",
      body: "تعلّم مع ملاحظات فورية من المعلمين، واسأل، والتزم بجدول يناسب نموًا منظمًا.",
    },
    {
      title: "تدريب بين الحصص",
      body: "عزّز الدروس بتمارين وأدوات تدعم التكرار والاستماع والقراءة وفق وتيرتك.",
    },
    {
      title: "استخدام مدروس للذكاء الاصطناعي",
      body: "حيث يساعد، نستخدم مزايا بالذكاء الاصطناعي لاقتراح التدريب وشرح المفاهيم وإبقائك متحركًا—دائمًا إلى جانب المعلم البشري لا بديلاً عنه.",
    },
  ],
  aiKicker: "ذكاء اصطناعي مسؤول",
  aiTitle: "خيارات ذكاء اصطناعي تدعم التعلم الحقيقي",
  aiIntro:
    "الذكاء الاصطناعي في إنون مساعدة اختيارية: يكمّل معلميك وأقرانك—وليس بديلاً عن الإرشاد المباشر في المواضيع الحساسة أو الدينية. في المنصة ستراه غالبًا في المقابلات التجريبية والمزايا المساعدة مستقبلًا.",
  aiOptions: [
    {
      title: "مقابلات تجريبية بالذكاء الاصطناعي",
      body: "تتضمن المنصة مقابلات تجريبية بالذكاء الاصطناعي—تمرين سريع أو جلسات مجدولة بأسئلة مولّدة—لتتدرّب قبل مقابلات العمل.",
    },
    {
      title: "تدريب متكيف",
      body: "تمارين إضافية وفق ما تعمل عليه—لتستفيد من وقت المراجعة.",
    },
    {
      title: "ملاحظات أسرع",
      body: "اقتراحات في الوقت المناسب على التمارين والتأملات بين الجلسات المباشرة.",
    },
    {
      title: "خطوات واضحة",
      body: "ملخصات وتذكيرات تبيّن ماذا تدرس لاحقًا دون تخمين.",
    },
    {
      title: "دعم المعلمين",
      body: "يستخدم المشرفون والمعلمون أدوات مساعدة بالذكاء الاصطناعي في نفس النظام—وقت أطول للتدريس المباشر والإرشاد.",
    },
  ],
  soonKicker: "خارطة الطريق",
  soonTitle: "مواد إضافية—قريبًا",
  soonBodyPrefix: "نبني ",
  soonBodyStrong: "منصة تعليمية تفاعلية",
  soonBodySuffix:
    " تتوسّع بعد القرآن والعربية. نفس التركيز على البنية، والتواصل المباشر، والأدوات التي تبقي المتعلمين منخرطين.",
  soonBadge: "قريبًا",
  soonSubjects: [
    "الرياضيات",
    "العلوم",
    "اللغة",
    "مهارات الحاسوب",
    "المزيد لاحقًا",
  ],
  footerTagline:
    "إنون شبكة اجتماعية وتعليمية للقرآن والعربية والتعلم الحديث—دورات، حصص مباشرة، تقييمات، ومسارات مهنية في مكان واحد.",
  footerLearn: "تعلّم",
  footerResources: "موارد",
  footerContact: "تواصل",
  footerLinkAbout: "عن إنون",
  footerLinkLms: "منصة التعلم",
  footerLinkQuran: "القرآن والعربية",
  footerLinkAi: "التعلم بالذكاء الاصطناعي",
  footerLinkComing: "مواد قادمة",
  footerLinkOpenLms: "فتح المنصة",
  footerLinkSite: "inun.com",
  footerContactMail: "زر inun.com لخيارات التواصل",
  footerContactMap: "شبكة اجتماعية وتعليمية — عبر الإنترنت",
  footerCopyright: "جميع الحقوق محفوظة.",
  socialWebsite: "الموقع",
  socialOrganization: "الجهة",
  socialUpdates: "التحديثات",
  socialShare: "مشاركة",
  socialCommunity: "المجتمع",
  socialContact: "مراسلة",
  scrollTop: "العودة للأعلى",
};

export const messages: Record<Locale, Messages> = {
  en: messagesEn,
  ar: messagesAr,
};

export function getMessages(locale: Locale): Messages {
  return messages[locale];
}
