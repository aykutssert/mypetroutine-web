(function () {
  const translations = {
    en: {
      "nav.home": "Home",
      "nav.privacy": "Privacy",
      "nav.terms": "Terms",
      "nav.support": "Support",
      "app.name": "My Pet Routine",
      "app.copyright": "© 2026 My Pet Routine",
      "legal.eyebrow": "Legal",
      "legal.updated": "Last updated: May 12, 2026",
      "legal.contact.title": "Contact",
      "legal.contact.link": "Contact support",
      "home.meta.title": "My Pet Routine",
      "home.meta.description": "My Pet Routine helps you track pet care logs, reminders, weight, health records, and routines locally on your device.",
      "home.eyebrow": "Pet Care Tracker",
      "home.title": "Simple care tracking for every pet routine.",
      "home.lead": "Track feeding, care logs, health notes, weight changes, and reminders in one calm, local-first app.",
      "home.privacyCta": "Privacy Policy",
      "home.supportCta": "Get Support",
      "home.preview.feeding.title": "Feeding",
      "home.preview.feeding.body": "Breakfast logged for Milo",
      "home.preview.medication.title": "Medication",
      "home.preview.medication.body": "Reminder today at 18:30",
      "home.preview.weight.title": "Weight Trend",
      "home.preview.weight.body": "Healthy progress this month",
      "home.feature.history.title": "Care history",
      "home.feature.history.body": "Keep feeding, grooming, vaccine, medicine, weight, and general notes organized per pet.",
      "home.feature.reminders.title": "Reminders",
      "home.feature.reminders.body": "Schedule important routines and use quick notification actions when a reminder arrives.",
      "home.feature.privacy.title": "Local-first",
      "home.feature.privacy.body": "Your pet records are designed to stay on your device unless you choose to export or share them.",
      "privacy.meta.title": "Privacy Policy - My Pet Routine",
      "privacy.meta.description": "Privacy Policy for My Pet Routine.",
      "privacy.title": "Privacy Policy",
      "privacy.overview.title": "Overview",
      "privacy.overview.body": "My Pet Routine is designed as a local-first pet care tracking app. The app helps you save pet profiles, care logs, reminders, weight records, notes, and related information on your device.",
      "privacy.data.title": "Data We Store",
      "privacy.data.body": "The app may store information you enter, including pet names, species, photos, care records, reminder details, notes, and weight history. This information is stored locally on your device.",
      "privacy.sharing.title": "Data Sharing",
      "privacy.sharing.body": "We do not sell your data. My Pet Routine does not require an account and does not intentionally send your pet records to our servers. If you export, share, back up, or send a report, that action is controlled by you through iOS sharing and system services.",
      "privacy.notifications.title": "Notifications",
      "privacy.notifications.body": "If you allow notifications, the app uses local notifications to remind you about care tasks. Notification permission can be changed anytime in iOS Settings.",
      "privacy.contact.body": "For privacy questions, use the support contact below.",
      "terms.meta.title": "Terms of Use - My Pet Routine",
      "terms.meta.description": "Terms of Use for My Pet Routine.",
      "terms.title": "Terms of Use",
      "terms.use.title": "Use of the App",
      "terms.use.body": "My Pet Routine is provided to help organize pet care information and reminders. You are responsible for the accuracy of the information you enter and how you use it.",
      "terms.advice.title": "Not Veterinary Advice",
      "terms.advice.body": "The app is not a substitute for professional veterinary advice, diagnosis, or treatment. Always consult a qualified veterinarian for medical concerns or emergencies.",
      "terms.availability.title": "Availability",
      "terms.availability.body": "We aim to keep the app reliable, but we do not guarantee uninterrupted availability or that every reminder will be delivered in every device state or system configuration.",
      "terms.liability.title": "Limitation of Liability",
      "terms.liability.body": "To the maximum extent permitted by law, My Pet Routine is provided as is, without warranties of any kind. We are not liable for losses caused by reliance on app data or reminders.",
      "terms.contact.body": "For questions about these terms, use the support contact below.",
      "support.meta.title": "Support - My Pet Routine",
      "support.meta.description": "Support for My Pet Routine.",
      "support.eyebrow": "Support",
      "support.title": "Need help?",
      "support.lead": "If you have a question, bug report, or App Store support request, email us and include your device model, iOS version, and a short description of the issue.",
      "support.email.title": "Email support",
      "support.email.link": "Contact by email",
      "support.checks.title": "Common checks",
      "support.checks.body": "For reminders, confirm notification permission is enabled in iOS Settings. For exports, make sure there is enough available storage and try sharing again.",
      "notFound.meta.title": "Page Not Found - My Pet Routine",
      "notFound.title": "Page not found",
      "notFound.body": "The page you are looking for does not exist.",
      "notFound.cta": "Back to Home"
    },
    tr: {
      "nav.home": "Ana Sayfa",
      "nav.privacy": "Gizlilik",
      "nav.terms": "Şartlar",
      "nav.support": "Destek",
      "app.name": "Pet Takibi",
      "app.copyright": "© 2026 Pet Takibi",
      "legal.eyebrow": "Yasal",
      "legal.updated": "Son güncelleme: 12 Mayıs 2026",
      "legal.contact.title": "İletişim",
      "legal.contact.link": "Destek ile iletişime geç",
      "home.meta.title": "Pet Takibi",
      "home.meta.description": "Pet Takibi; bakım kayıtlarını, hatırlatıcıları, kilo ve sağlık notlarını cihazınızda düzenli şekilde takip etmenize yardımcı olur.",
      "home.eyebrow": "Evcil Hayvan Takibi",
      "home.title": "Her pet rutini için sade bakım takibi.",
      "home.lead": "Besleme, bakım kayıtları, sağlık notları, kilo değişimleri ve hatırlatıcıları gizlilik odaklı tek bir uygulamada takip edin.",
      "home.privacyCta": "Gizlilik Politikası",
      "home.supportCta": "Destek Al",
      "home.preview.feeding.title": "Besleme",
      "home.preview.feeding.body": "Milo için kahvaltı kaydedildi",
      "home.preview.medication.title": "İlaç",
      "home.preview.medication.body": "Bugün 18:30 için hatırlatıcı",
      "home.preview.weight.title": "Kilo Trendi",
      "home.preview.weight.body": "Bu ay sağlıklı ilerleme",
      "home.feature.history.title": "Bakım geçmişi",
      "home.feature.history.body": "Besleme, temizlik, aşı, ilaç, kilo ve genel notları her pet için düzenli tutun.",
      "home.feature.reminders.title": "Hatırlatıcılar",
      "home.feature.reminders.body": "Önemli rutinleri planlayın ve bildirim geldiğinde hızlı aksiyonları kullanın.",
      "home.feature.privacy.title": "Yerel öncelikli",
      "home.feature.privacy.body": "Pet kayıtlarınız, siz dışa aktarmayı veya paylaşmayı seçmediğiniz sürece cihazınızda kalacak şekilde tasarlanır.",
      "privacy.meta.title": "Gizlilik Politikası - Pet Takibi",
      "privacy.meta.description": "Pet Takibi gizlilik politikası.",
      "privacy.title": "Gizlilik Politikası",
      "privacy.overview.title": "Genel Bakış",
      "privacy.overview.body": "Pet Takibi, yerel öncelikli bir evcil hayvan bakım takip uygulaması olarak tasarlanmıştır. Uygulama; pet profilleri, bakım kayıtları, hatırlatıcılar, kilo kayıtları, notlar ve ilgili bilgileri cihazınızda saklamanıza yardımcı olur.",
      "privacy.data.title": "Saklanan Veriler",
      "privacy.data.body": "Uygulama; pet adları, türleri, fotoğraflar, bakım kayıtları, hatırlatıcı detayları, notlar ve kilo geçmişi gibi sizin girdiğiniz bilgileri saklayabilir. Bu bilgiler cihazınızda yerel olarak tutulur.",
      "privacy.sharing.title": "Veri Paylaşımı",
      "privacy.sharing.body": "Verilerinizi satmayız. Pet Takibi hesap gerektirmez ve pet kayıtlarınızı bilinçli olarak sunucularımıza göndermez. Bir raporu dışa aktarır, paylaşır, yedekler veya gönderirseniz bu işlem iOS paylaşım ve sistem servisleri üzerinden sizin kontrolünüzde gerçekleşir.",
      "privacy.notifications.title": "Bildirimler",
      "privacy.notifications.body": "Bildirimlere izin verirseniz uygulama, bakım görevlerini hatırlatmak için yerel bildirimler kullanır. Bildirim izni iOS Ayarları üzerinden her zaman değiştirilebilir.",
      "privacy.contact.body": "Gizlilik soruları için aşağıdaki destek iletişimini kullanın.",
      "terms.meta.title": "Kullanım Şartları - Pet Takibi",
      "terms.meta.description": "Pet Takibi kullanım şartları.",
      "terms.title": "Kullanım Şartları",
      "terms.use.title": "Uygulamanın Kullanımı",
      "terms.use.body": "Pet Takibi, evcil hayvan bakım bilgilerini ve hatırlatıcıları düzenlemenize yardımcı olmak için sunulur. Girdiğiniz bilgilerin doğruluğundan ve bunları nasıl kullandığınızdan siz sorumlusunuz.",
      "terms.advice.title": "Veteriner Tavsiyesi Değildir",
      "terms.advice.body": "Uygulama profesyonel veteriner tavsiyesi, teşhis veya tedavinin yerine geçmez. Tıbbi konular veya acil durumlar için her zaman yetkili bir veterinere danışın.",
      "terms.availability.title": "Erişilebilirlik",
      "terms.availability.body": "Uygulamanın güvenilir çalışmasını hedefleriz, ancak kesintisiz erişim veya her hatırlatıcının her cihaz durumu ve sistem yapılandırmasında teslim edileceğini garanti etmeyiz.",
      "terms.liability.title": "Sorumluluğun Sınırlandırılması",
      "terms.liability.body": "Yasaların izin verdiği azami ölçüde, Pet Takibi herhangi bir garanti olmaksızın olduğu gibi sunulur. Uygulama verilerine veya hatırlatıcılara güvenilmesinden kaynaklanan kayıplardan sorumlu değiliz.",
      "terms.contact.body": "Bu şartlarla ilgili sorular için aşağıdaki destek iletişimini kullanın.",
      "support.meta.title": "Destek - Pet Takibi",
      "support.meta.description": "Pet Takibi destek sayfası.",
      "support.eyebrow": "Destek",
      "support.title": "Yardıma mı ihtiyacınız var?",
      "support.lead": "Bir sorunuz, hata bildiriminiz veya App Store destek talebiniz varsa bize e-posta gönderin; cihaz modelinizi, iOS sürümünüzü ve sorunun kısa açıklamasını ekleyin.",
      "support.email.title": "E-posta desteği",
      "support.email.link": "E-posta ile iletişime geç",
      "support.checks.title": "Yaygın kontroller",
      "support.checks.body": "Hatırlatıcılar için iOS Ayarları'nda bildirim izninin açık olduğunu kontrol edin. Dışa aktarma için yeterli depolama alanı olduğundan emin olun ve tekrar paylaşmayı deneyin.",
      "notFound.meta.title": "Sayfa Bulunamadı - Pet Takibi",
      "notFound.title": "Sayfa bulunamadı",
      "notFound.body": "Aradığınız sayfa mevcut değil.",
      "notFound.cta": "Ana Sayfaya Dön"
    }
  };

  const getStoredLanguage = () => localStorage.getItem("mpr-language");
  const getPreferredLanguage = () => {
    const stored = getStoredLanguage();
    if (stored === "en" || stored === "tr") return stored;
    return navigator.language && navigator.language.toLowerCase().startsWith("tr") ? "tr" : "en";
  };

  const applyLanguage = (language) => {
    const dictionary = translations[language] || translations.en;
    document.documentElement.lang = language;

    document.querySelectorAll("[data-i18n]").forEach((element) => {
      const value = dictionary[element.dataset.i18n];
      if (value) element.textContent = value;
    });

    document.querySelectorAll("[data-i18n-title]").forEach((element) => {
      const value = dictionary[element.dataset.i18nTitle];
      if (value) {
        element.textContent = value;
        document.title = value;
      }
    });

    document.querySelectorAll("[data-i18n-description]").forEach((element) => {
      const value = dictionary[element.dataset.i18nDescription];
      if (value) element.setAttribute("content", value);
    });

    document.querySelectorAll("[data-language-toggle]").forEach((button) => {
      button.textContent = language === "tr" ? "EN" : "TR";
      button.setAttribute("aria-label", language === "tr" ? "Switch to English" : "Türkçe göster");
    });
  };

  let activeLanguage = getPreferredLanguage();
  applyLanguage(activeLanguage);

  document.querySelectorAll("[data-language-toggle]").forEach((button) => {
    button.addEventListener("click", () => {
      activeLanguage = activeLanguage === "tr" ? "en" : "tr";
      localStorage.setItem("mpr-language", activeLanguage);
      applyLanguage(activeLanguage);
    });
  });
})();
