 
 






const lwLang = (document.documentElement.getAttribute('lang') || 'en').slice(0, 2).toLowerCase();
const LW_I18N = {
  ar: { too_large_title: 'هذا الملف كبير جدًا. يُرجى استخدام LimeWire بدلاً من ذلك!', too_large_body: 'يُرجى العلم أننا ندعم الملفات حتى 10 جيجابايت فقط. يتيح حساب LimeWire المجاني حتى 20 جيجابايت في كل عملية نقل ويُبقي الروابط فعّالة 7 أيام. خطط LimeWire المدفوعة تقبل ملفات تصل إلى 500 جيجابايت: الزر أدناه ينقلك إلى LimeWire.', switch_cta: 'انتقل إلى LimeWire', redirect: 'جارٍ تحويلك إلى LimeWire ...', failed_title: 'تعذّر رفع الملف', limit_title: 'بلغت الحد اليومي', limit_files_body: 'يمكن إرسال {n} ملف يوميًا من العنوان نفسه بدون حساب. يُعاد ضبط العدّاد الساعة 00:00 بتوقيت UTC. حساب LimeWire يرفع هذا الحد.', limit_bytes_body: 'استُنفد الحجم اليومي للرفع من هذا العنوان ({limit}). يُعاد ضبط العدّاد الساعة 00:00 بتوقيت UTC. حساب LimeWire يرفع هذا الحد.', retry_cta: 'إعادة المحاولة', unreadable_body: 'تعذّرت قراءة هذا الملف من جهازك — ربما تغيّر أو نُقل أو ما زال يُزامَن من السحابة. احفظه على جهازك ثم اختره مرة أخرى.', ready_title: 'رابطك جاهز', ready_opened: 'فُتح في LimeWire في علامة تبويب جديدة. هذه الصفحة تبقى مفتوحة لإرسال المزيد.', ready_open_cta: 'افتح الرابط في LimeWire', ready_more_cta: 'إرسال ملفات أخرى', ready_body: 'رابطك جاهز في LimeWire: افتحه لنسخه ومشاركته.', done_cta: 'تم', limit_nearby: 'الإرسال إلى جهاز قريب بلا حدود.', share_title: 'ملفاتك جاهزة!', share_body: 'انسخ هذا الرابط وأرسله — تنتهي صلاحيته بعد 3 أيام.', share_copy: 'نسخ الرابط', share_copied: 'تم النسخ!', share_upsell: 'تحتاج إلى ملفات أكبر من 10 جيجابايت أو روابط لا تنتهي صلاحيتها؟ {link}.', share_upsell_cta: 'اطّلع على خطط LimeWire المدفوعة' },
  bn: { too_large_title: 'এই ফাইলটি অনেক বড়। এর বদলে LimeWire ব্যবহার করুন।', too_large_body: 'আমরা সর্বোচ্চ ১০ জিবি পর্যন্ত ফাইল সমর্থন করি। বিনামূল্যের LimeWire অ্যাকাউন্টে প্রতি ট্রান্সফারে ২০ জিবি পর্যন্ত পাঠানো যায় এবং লিংক ৭ দিন সক্রিয় থাকে। LimeWire-এর পেইড প্ল্যানে ৫০০ জিবি পর্যন্ত ফাইল নেওয়া যায়: নিচের বোতামটি আপনাকে LimeWire-এ নিয়ে যাবে।', switch_cta: 'LimeWire-এ যান', redirect: 'আপনাকে LimeWire-এ নিয়ে যাওয়া হচ্ছে ...', failed_title: 'আপলোড ব্যর্থ হয়েছে', limit_title: 'দৈনিক সীমা শেষ', limit_files_body: 'অ্যাকাউন্ট ছাড়া একই ঠিকানা থেকে দিনে {n}টি ফাইল পাঠানো যায়। কাউন্টার ০০:০০ UTC-তে রিসেট হয়। LimeWire অ্যাকাউন্টে সীমা বেশি।', limit_bytes_body: 'এই ঠিকানা থেকে দৈনিক আপলোডের আয়তন শেষ ({limit})। কাউন্টার ০০:০০ UTC-তে রিসেট হয়। LimeWire অ্যাকাউন্টে সীমা বেশি।', retry_cta: 'আবার চেষ্টা করুন', unreadable_body: 'আপনার ডিভাইস থেকে এই ফাইলটি আর পড়া যাচ্ছে না — এটি হয়তো বদলেছে, সরানো হয়েছে বা এখনও ক্লাউড থেকে সিঙ্ক হচ্ছে। ফাইলটি ডিভাইসে সেভ করে আবার বেছে নিন।', ready_title: 'আপনার লিংক তৈরি', ready_opened: 'LimeWire নতুন ট্যাবে খুলেছে। আরও পাঠাতে এই পেজটি খোলা থাকছে।', ready_open_cta: 'LimeWire-এ লিংক খুলুন', ready_more_cta: 'আরও ফাইল পাঠান', ready_body: 'আপনার লিংক LimeWire-এ তৈরি: কপি ও শেয়ার করতে খুলুন।', done_cta: 'হয়ে গেছে', limit_nearby: 'কাছের ডিভাইসে পাঠাতে কোনো সীমা নেই।', share_title: 'আপনার ফাইল প্রস্তুত!', share_body: 'এই লিঙ্কটি কপি করে পাঠান — এটি 3 দিনে মেয়াদোত্তীর্ণ হবে।', share_copy: 'লিঙ্ক কপি করুন', share_copied: 'কপি হয়েছে!', share_upsell: '10 GB-এর বড় ফাইল বা কখনো মেয়াদ শেষ না হওয়া লিঙ্ক দরকার? {link}।', share_upsell_cta: 'LimeWire-এর পেইড প্ল্যান দেখুন' },
  de: { too_large_title: 'Diese Datei ist zu groß. Bitte nutze stattdessen LimeWire!', too_large_body: 'Wir unterstützen Dateien mit maximal 10 GB. Ein kostenloses LimeWire-Konto nimmt bis zu 20 GB pro Übertragung an und hält Links 7 Tage lang aktiv. Bezahlte LimeWire-Tarife nehmen Dateien bis zu 500 GB an: Die Schaltfläche unten bringt dich zu LimeWire.', switch_cta: 'Zu LimeWire wechseln', redirect: 'Du wirst zu LimeWire weitergeleitet ...', failed_title: 'Upload fehlgeschlagen', limit_title: 'Tageslimit erreicht', limit_files_body: 'Ohne Konto lassen sich pro Tag {n} Dateien von derselben Adresse senden. Der Zähler wird um 00:00 UTC zurückgesetzt. Mit einem LimeWire-Konto ist das Limit höher.', limit_bytes_body: 'Das Tagesvolumen für Uploads von dieser Adresse ist aufgebraucht ({limit}). Der Zähler wird um 00:00 UTC zurückgesetzt. Mit einem LimeWire-Konto ist das Limit höher.', retry_cta: 'Erneut versuchen', unreadable_body: 'Diese Datei lässt sich auf deinem Gerät nicht mehr lesen – sie wurde vielleicht geändert, verschoben oder wird noch aus der Cloud synchronisiert. Speichere sie auf dem Gerät und wähle sie erneut aus.', ready_title: 'Dein Link ist fertig', ready_opened: 'Er wurde in LimeWire in einem neuen Tab geöffnet. Diese Seite bleibt offen für weitere Dateien.', ready_open_cta: 'Link in LimeWire öffnen', ready_more_cta: 'Weitere Dateien senden', ready_body: 'Dein Link liegt in LimeWire bereit: öffne ihn, um ihn zu kopieren und zu teilen.', done_cta: 'Fertig', limit_nearby: 'Senden an ein Gerät in der Nähe hat kein Limit.', share_title: 'Ihre Dateien sind bereit!', share_body: 'Kopieren Sie diesen Link und senden Sie ihn – er läuft in 3 Tagen ab.', share_copy: 'Link kopieren', share_copied: 'Kopiert!', share_upsell: 'Dateien über 10 GB oder Links, die nie ablaufen? {link}.', share_upsell_cta: 'Bezahlte LimeWire-Tarife ansehen' },
  es: { too_large_title: 'Este archivo es demasiado grande. Usa LimeWire en su lugar.', too_large_body: 'Solo admitimos archivos de hasta 10 GB. Una cuenta gratuita de LimeWire admite hasta 20 GB por transferencia y mantiene los enlaces activos 7 días. Los planes de pago de LimeWire admiten archivos de hasta 500 GB: el botón de abajo te lleva a LimeWire.', switch_cta: 'Cambiar a LimeWire', redirect: 'Redirigiéndote a LimeWire ...', failed_title: 'No se pudo subir', limit_title: 'Límite diario alcanzado', limit_files_body: 'Sin cuenta se pueden enviar {n} archivos al día desde la misma dirección. El contador se reinicia a las 00:00 UTC. Con una cuenta de LimeWire el límite es mayor.', limit_bytes_body: 'El volumen diario de subida desde esta dirección se ha agotado ({limit}). El contador se reinicia a las 00:00 UTC. Con una cuenta de LimeWire el límite es mayor.', retry_cta: 'Reintentar', unreadable_body: 'No se puede leer este archivo desde tu dispositivo: puede que haya cambiado, se haya movido o aún se esté sincronizando desde la nube. Guárdalo en tu dispositivo y vuelve a seleccionarlo.', ready_title: 'Tu enlace está listo', ready_opened: 'Se abrió en LimeWire en una pestaña nueva. Esta página sigue abierta para enviar más.', ready_open_cta: 'Abrir el enlace en LimeWire', ready_more_cta: 'Enviar más archivos', ready_body: 'Tu enlace está listo en LimeWire: ábrelo para copiarlo y compartirlo.', done_cta: 'Listo', limit_nearby: 'Enviar a un dispositivo cercano no tiene límite.', share_title: '¡Tus archivos están listos!', share_body: 'Copia este enlace y envíalo: caduca en 3 días.', share_copy: 'Copiar enlace', share_copied: '¡Copiado!', share_upsell: '¿Necesitas archivos de más de 10 GB o enlaces que no caduquen? {link}.', share_upsell_cta: 'Ver los planes de pago de LimeWire' },
  fr: { too_large_title: 'Ce fichier est trop volumineux. Utilisez plutôt LimeWire.', too_large_body: 'Nous acceptons les fichiers jusqu’à 10 Go. Un compte LimeWire gratuit accepte jusqu’à 20 Go par transfert et garde les liens actifs 7 jours. Les offres payantes de LimeWire acceptent les fichiers jusqu’à 500 Go : le bouton ci-dessous vous mène à LimeWire.', switch_cta: 'Passer à LimeWire', redirect: 'Redirection vers LimeWire ...', failed_title: 'Échec de l’envoi', limit_title: 'Limite quotidienne atteinte', limit_files_body: 'Sans compte, {n} fichiers par jour peuvent être envoyés depuis la même adresse. Le compteur est remis à zéro à 00:00 UTC. Un compte LimeWire relève cette limite.', limit_bytes_body: 'Le volume d’envoi quotidien depuis cette adresse est épuisé ({limit}). Le compteur est remis à zéro à 00:00 UTC. Un compte LimeWire relève cette limite.', retry_cta: 'Réessayer', unreadable_body: 'Ce fichier ne peut plus être lu depuis votre appareil : il a peut-être été modifié, déplacé ou est encore en cours de synchronisation depuis le cloud. Enregistrez-le sur votre appareil et sélectionnez-le à nouveau.', ready_title: 'Votre lien est prêt', ready_opened: 'Il s’est ouvert dans LimeWire dans un nouvel onglet. Cette page reste ouverte pour envoyer d’autres fichiers.', ready_open_cta: 'Ouvrir le lien dans LimeWire', ready_more_cta: 'Envoyer d’autres fichiers', ready_body: 'Votre lien est prêt dans LimeWire : ouvrez-le pour le copier et le partager.', done_cta: 'Terminé', limit_nearby: 'L’envoi vers un appareil à proximité est illimité.', share_title: 'Vos fichiers sont prêts !', share_body: 'Copiez ce lien et envoyez-le : il expire dans 3 jours.', share_copy: 'Copier le lien', share_copied: 'Copié !', share_upsell: 'Besoin de fichiers de plus de 10 Go ou de liens sans expiration ? {link}.', share_upsell_cta: 'Découvrez les offres payantes de LimeWire' },
  id: { too_large_title: 'File ini terlalu besar. Silakan gunakan LimeWire sebagai gantinya.', too_large_body: 'Kami hanya mendukung file dengan ukuran maksimal 10 GB. Akun LimeWire gratis menerima hingga 20 GB per transfer dan menjaga tautan tetap aktif selama 7 hari. Paket berbayar LimeWire menerima file hingga 500 GB: tombol di bawah akan membawa Anda ke LimeWire.', switch_cta: 'Beralih ke LimeWire', redirect: 'Mengalihkan Anda ke LimeWire ...', failed_title: 'Unggahan gagal', limit_title: 'Batas harian tercapai', limit_files_body: 'Tanpa akun, {n} berkas per hari dapat dikirim dari alamat yang sama. Penghitung direset pukul 00:00 UTC. Akun LimeWire menaikkan batas ini.', limit_bytes_body: 'Volume unggahan harian dari alamat ini sudah habis ({limit}). Penghitung direset pukul 00:00 UTC. Akun LimeWire menaikkan batas ini.', retry_cta: 'Coba lagi', unreadable_body: 'File ini tidak bisa dibaca lagi dari perangkat Anda — mungkin sudah diubah, dipindahkan, atau masih disinkronkan dari cloud. Simpan ke perangkat lalu pilih lagi.', ready_title: 'Tautan Anda siap', ready_opened: 'Tautan terbuka di LimeWire pada tab baru. Halaman ini tetap terbuka untuk mengirim lagi.', ready_open_cta: 'Buka tautan di LimeWire', ready_more_cta: 'Kirim file lain', ready_body: 'Tautan Anda siap di LimeWire: buka untuk menyalin dan membagikannya.', done_cta: 'Selesai', limit_nearby: 'Mengirim ke perangkat terdekat tidak dibatasi.', share_title: 'File Anda sudah siap!', share_body: 'Salin tautan ini dan kirimkan — berlaku selama 3 hari.', share_copy: 'Salin tautan', share_copied: 'Disalin!', share_upsell: 'Perlu file lebih dari 10 GB atau tautan yang tidak kedaluwarsa? {link}.', share_upsell_cta: 'Lihat paket berbayar LimeWire' },
  it: { too_large_title: 'Questo file è troppo grande. Usa invece LimeWire.', too_large_body: 'Accettiamo file fino a 10 GB. Un account LimeWire gratuito accetta fino a 20 GB per trasferimento e mantiene i link attivi per 7 giorni. I piani a pagamento di LimeWire accettano file fino a 500 GB: il pulsante qui sotto ti porta su LimeWire.', switch_cta: 'Passa a LimeWire', redirect: 'Reindirizzamento a LimeWire ...', failed_title: 'Caricamento non riuscito', limit_title: 'Limite giornaliero raggiunto', limit_files_body: 'Senza account si possono inviare {n} file al giorno dallo stesso indirizzo. Il contatore si azzera alle 00:00 UTC. Con un account LimeWire il limite è più alto.', limit_bytes_body: 'Il volume giornaliero di caricamento da questo indirizzo è esaurito ({limit}). Il contatore si azzera alle 00:00 UTC. Con un account LimeWire il limite è più alto.', retry_cta: 'Riprova', unreadable_body: 'Non è più possibile leggere questo file dal tuo dispositivo: potrebbe essere stato modificato, spostato o essere ancora in sincronizzazione dal cloud. Salvalo sul dispositivo e selezionalo di nuovo.', ready_title: 'Il tuo link è pronto', ready_opened: 'Si è aperto in LimeWire in una nuova scheda. Questa pagina resta aperta per inviare altri file.', ready_open_cta: 'Apri il link in LimeWire', ready_more_cta: 'Invia altri file', ready_body: 'Il tuo link è pronto in LimeWire: aprilo per copiarlo e condividerlo.', done_cta: 'Fatto', limit_nearby: 'L’invio a un dispositivo vicino non ha limiti.', share_title: 'I tuoi file sono pronti!', share_body: 'Copia questo link e invialo: scade tra 3 giorni.', share_copy: 'Copia link', share_copied: 'Copiato!', share_upsell: 'Ti servono file oltre 10 GB o link senza scadenza? {link}.', share_upsell_cta: 'Scopri i piani a pagamento di LimeWire' },
  ja: { too_large_title: 'このファイルは大きすぎます。代わりに LimeWire をご利用ください。', too_large_body: '対応しているファイルサイズは最大 10GB です。無料の LimeWire アカウントなら 1 回の転送で最大 20GB まで送れ、リンクは 7 日間有効です。LimeWire の有料プランでは最大 500GB までのファイルに対応しています。下のボタンから LimeWire へ移動できます。', switch_cta: 'LimeWire に切り替える', redirect: 'LimeWire に移動しています ...', failed_title: 'アップロードできませんでした', limit_title: '1日の上限に達しました', limit_files_body: 'アカウントなしでは、同じアドレスから1日に {n} 件までアップロードできます。カウンターは 00:00 UTC にリセットされます。LimeWire のアカウントなら上限が上がります。', limit_bytes_body: 'このアドレスからの1日のアップロード容量を使い切りました（{limit}）。カウンターは 00:00 UTC にリセットされます。LimeWire のアカウントなら上限が上がります。', retry_cta: 'もう一度試す', unreadable_body: 'このファイルをデバイスから読み込めなくなりました。変更・移動されたか、クラウドから同期中の可能性があります。デバイスに保存してから、もう一度選択してください。', ready_title: 'リンクの準備ができました', ready_opened: 'LimeWire が新しいタブで開きました。このページは開いたままなので、続けて送れます。', ready_open_cta: 'LimeWire でリンクを開く', ready_more_cta: 'ほかのファイルを送る', ready_body: 'リンクは LimeWire で準備できています。開いてコピー・共有してください。', done_cta: '完了', limit_nearby: '近くのデバイスへの送信には制限がありません。', share_title: 'ファイルの準備ができました！', share_body: 'このリンクをコピーして送信してください。有効期限は3日間です。', share_copy: 'リンクをコピー', share_copied: 'コピーしました！', share_upsell: '10 GBを超えるファイルや期限のないリンクが必要ですか？{link}。', share_upsell_cta: 'LimeWireの有料プランを見る' },
  pt: { too_large_title: 'Este arquivo é muito grande. Use o LimeWire em vez disso.', too_large_body: 'Só aceitamos arquivos de até 10 GB. Uma conta LimeWire gratuita aceita até 20 GB por transferência e mantém os links ativos por 7 dias. Os planos pagos do LimeWire aceitam arquivos de até 500 GB: o botão abaixo leva você ao LimeWire.', switch_cta: 'Mudar para o LimeWire', redirect: 'Redirecionando você para o LimeWire ...', failed_title: 'Falha no envio', limit_title: 'Limite diário atingido', limit_files_body: 'Sem conta é possível enviar {n} arquivos por dia a partir do mesmo endereço. O contador zera às 00:00 UTC. Com uma conta LimeWire o limite é maior.', limit_bytes_body: 'O volume diário de envio deste endereço acabou ({limit}). O contador zera às 00:00 UTC. Com uma conta LimeWire o limite é maior.', retry_cta: 'Tentar de novo', unreadable_body: 'Não é mais possível ler este arquivo do seu dispositivo — ele pode ter sido alterado, movido ou ainda estar sincronizando com a nuvem. Salve-o no dispositivo e selecione-o novamente.', ready_title: 'Seu link está pronto', ready_opened: 'Ele abriu no LimeWire em uma nova aba. Esta página continua aberta para enviar mais.', ready_open_cta: 'Abrir o link no LimeWire', ready_more_cta: 'Enviar mais arquivos', ready_body: 'Seu link está pronto no LimeWire: abra-o para copiar e compartilhar.', done_cta: 'Concluído', limit_nearby: 'Enviar para um dispositivo próximo não tem limite.', share_title: 'Seus arquivos estão prontos!', share_body: 'Copie este link e envie — ele expira em 3 dias.', share_copy: 'Copiar link', share_copied: 'Copiado!', share_upsell: 'Precisa de arquivos maiores que 10 GB ou links que nunca expiram? {link}.', share_upsell_cta: 'Veja os planos pagos do LimeWire' },
  th: { too_large_title: 'ไฟล์นี้ใหญ่เกินไป กรุณาใช้ LimeWire แทน', too_large_body: 'เรารองรับไฟล์ขนาดไม่เกิน 10GB เท่านั้น บัญชี LimeWire ฟรีรับไฟล์ได้สูงสุด 20GB ต่อการโอนหนึ่งครั้ง และเก็บลิงก์ไว้ 7 วัน แพ็กเกจแบบชำระเงินของ LimeWire รองรับไฟล์ขนาดสูงสุด 500GB ปุ่มด้านล่างจะพาคุณไปยัง LimeWire', switch_cta: 'เปลี่ยนไปใช้ LimeWire', redirect: 'กำลังพาคุณไปยัง LimeWire ...', failed_title: 'อัปโหลดไม่สำเร็จ', limit_title: 'ถึงขีดจำกัดรายวันแล้ว', limit_files_body: 'หากไม่มีบัญชี จะส่งได้ {n} ไฟล์ต่อวันจากที่อยู่เดียวกัน ตัวนับจะรีเซ็ตเวลา 00:00 UTC บัญชี LimeWire จะเพิ่มขีดจำกัดนี้', limit_bytes_body: 'ปริมาณอัปโหลดรายวันจากที่อยู่นี้ถูกใช้หมดแล้ว ({limit}) ตัวนับจะรีเซ็ตเวลา 00:00 UTC บัญชี LimeWire จะเพิ่มขีดจำกัดนี้', retry_cta: 'ลองอีกครั้ง', unreadable_body: 'ไม่สามารถอ่านไฟล์นี้จากอุปกรณ์ของคุณได้อีก — ไฟล์อาจถูกแก้ไข ย้าย หรือยังซิงก์จากคลาวด์อยู่ บันทึกไฟล์ลงอุปกรณ์แล้วเลือกใหม่อีกครั้ง', ready_title: 'ลิงก์ของคุณพร้อมแล้ว', ready_opened: 'เปิดใน LimeWire ในแท็บใหม่แล้ว หน้านี้ยังเปิดอยู่เพื่อส่งไฟล์เพิ่ม', ready_open_cta: 'เปิดลิงก์ใน LimeWire', ready_more_cta: 'ส่งไฟล์อื่น', ready_body: 'ลิงก์ของคุณพร้อมใน LimeWire แล้ว เปิดเพื่อคัดลอกและแชร์', done_cta: 'เสร็จสิ้น', limit_nearby: 'ส่งไปยังอุปกรณ์ใกล้เคียงได้ไม่จำกัด', share_title: 'ไฟล์ของคุณพร้อมแล้ว!', share_body: 'คัดลอกลิงก์นี้แล้วส่งไป — ลิงก์จะหมดอายุใน 3 วัน', share_copy: 'คัดลอกลิงก์', share_copied: 'คัดลอกแล้ว!', share_upsell: 'ต้องการไฟล์ใหญ่กว่า 10 GB หรือลิงก์ที่ไม่มีวันหมดอายุ? {link}', share_upsell_cta: 'ดูแพ็กเกจแบบชำระเงินของ LimeWire' },
  tr: { too_large_title: 'Bu dosya çok büyük. Bunun yerine LimeWire’ı kullanın.', too_large_body: 'Yalnızca 10 GB’a kadar dosyaları destekliyoruz. Ücretsiz bir LimeWire hesabı aktarım başına 20 GB\'a kadar dosya kabul eder ve bağlantıları 7 gün açık tutar. LimeWire’ın ücretli planları 500 GB’a kadar dosyaları kabul eder: aşağıdaki düğme sizi LimeWire’a götürür.', switch_cta: 'LimeWire’a geç', redirect: 'LimeWire’a yönlendiriliyorsunuz ...', failed_title: 'Yükleme başarısız', limit_title: 'Günlük sınıra ulaşıldı', limit_files_body: 'Hesap olmadan aynı adresten günde {n} dosya gönderilebilir. Sayaç 00:00 UTC’de sıfırlanır. LimeWire hesabıyla sınır daha yüksektir.', limit_bytes_body: 'Bu adresten günlük yükleme hacmi tükendi ({limit}). Sayaç 00:00 UTC’de sıfırlanır. LimeWire hesabıyla sınır daha yüksektir.', retry_cta: 'Yeniden dene', unreadable_body: 'Bu dosya artık cihazınızdan okunamıyor — değiştirilmiş, taşınmış ya da hâlâ buluttan eşitleniyor olabilir. Dosyayı cihazınıza kaydedip yeniden seçin.', ready_title: 'Bağlantınız hazır', ready_opened: 'LimeWire yeni bir sekmede açıldı. Bu sayfa daha fazlasını göndermeniz için açık kalıyor.', ready_open_cta: 'Bağlantıyı LimeWire’da aç', ready_more_cta: 'Başka dosya gönder', ready_body: 'Bağlantınız LimeWire’da hazır: kopyalayıp paylaşmak için açın.', done_cta: 'Tamam', limit_nearby: 'Yakındaki bir cihaza göndermenin sınırı yok.', share_title: 'Dosyalarınız hazır!', share_body: 'Bu bağlantıyı kopyalayıp gönderin — 3 gün sonra sona erer.', share_copy: 'Bağlantıyı kopyala', share_copied: 'Kopyalandı!', share_upsell: '10 GB\'tan büyük dosyalar veya süresi dolmayan bağlantılar mı lazım? {link}.', share_upsell_cta: 'LimeWire ücretli planlarını görün' },
  vi: { too_large_title: 'Tệp này quá lớn. Vui lòng dùng LimeWire thay thế.', too_large_body: 'Chúng tôi chỉ hỗ trợ tệp tối đa 10 GB. Tài khoản LimeWire miễn phí nhận tối đa 20 GB mỗi lần chuyển và giữ liên kết trong 7 ngày. Các gói trả phí của LimeWire nhận tệp tối đa 500 GB: nút bên dưới sẽ đưa bạn đến LimeWire.', switch_cta: 'Chuyển sang LimeWire', redirect: 'Đang chuyển bạn tới LimeWire ...', failed_title: 'Tải lên thất bại', limit_title: 'Đã đạt giới hạn trong ngày', limit_files_body: 'Không có tài khoản thì mỗi ngày gửi được {n} tệp từ cùng một địa chỉ. Bộ đếm đặt lại lúc 00:00 UTC. Tài khoản LimeWire nâng giới hạn này lên.', limit_bytes_body: 'Dung lượng tải lên trong ngày từ địa chỉ này đã hết ({limit}). Bộ đếm đặt lại lúc 00:00 UTC. Tài khoản LimeWire nâng giới hạn này lên.', retry_cta: 'Thử lại', unreadable_body: 'Không thể đọc tệp này từ thiết bị của bạn nữa — có thể tệp đã bị thay đổi, di chuyển hoặc vẫn đang đồng bộ từ đám mây. Hãy lưu tệp vào thiết bị rồi chọn lại.', ready_title: 'Liên kết đã sẵn sàng', ready_opened: 'Đã mở trong LimeWire ở thẻ mới. Trang này vẫn mở để bạn gửi thêm.', ready_open_cta: 'Mở liên kết trong LimeWire', ready_more_cta: 'Gửi thêm tệp', ready_body: 'Liên kết đã sẵn sàng trong LimeWire: mở để sao chép và chia sẻ.', done_cta: 'Xong', limit_nearby: 'Gửi tới thiết bị ở gần không giới hạn.', share_title: 'Tệp của bạn đã sẵn sàng!', share_body: 'Sao chép liên kết này và gửi đi — liên kết hết hạn sau 3 ngày.', share_copy: 'Sao chép liên kết', share_copied: 'Đã sao chép!', share_upsell: 'Cần tệp lớn hơn 10 GB hoặc liên kết không bao giờ hết hạn? {link}.', share_upsell_cta: 'Xem các gói trả phí của LimeWire' },
  zh: { too_large_title: '此文件过大，请改用 LimeWire。', too_large_body: '我们仅支持最大 10 GB 的文件。免费 LimeWire 账户每次传输最多 20 GB，链接保留 7 天。LimeWire 付费套餐支持最大 500 GB 的文件：点击下方按钮即可前往 LimeWire。', switch_cta: '切换到 LimeWire', redirect: '正在将您转到 LimeWire ...', failed_title: '上传失败', limit_title: '已达每日上限', limit_files_body: '未登录时，同一地址每天可发送 {n} 个文件。计数在 00:00 UTC 重置。使用 LimeWire 账号上限更高。', limit_bytes_body: '该地址今天的上传容量已用完（{limit}）。计数在 00:00 UTC 重置。使用 LimeWire 账号上限更高。', retry_cta: '重试', unreadable_body: '无法再从你的设备读取此文件——它可能已被修改、移动，或仍在从云端同步。请先将其保存到设备上，然后重新选择。', ready_title: '链接已就绪', ready_opened: '已在新标签页的 LimeWire 中打开。此页面保持打开，可继续发送。', ready_open_cta: '在 LimeWire 中打开链接', ready_more_cta: '发送更多文件', ready_body: '链接已在 LimeWire 中就绪：打开即可复制和分享。', done_cta: '完成', limit_nearby: '发送到附近设备不受限制。', share_title: '文件已准备好！', share_body: '复制此链接并发送——链接 3 天后过期。', share_copy: '复制链接', share_copied: '已复制！', share_upsell: '需要大于 10 GB 的文件或永不过期的链接？{link}。', share_upsell_cta: '查看 LimeWire 付费套餐' },
};
function lwT(key, fallback) { return (LW_I18N[lwLang] || {})[key] || fallback; }




const LW_APP_LOCALES = ['ar', 'bn', 'de', 'es', 'fr', 'id', 'it', 'ja', 'pt', 'th', 'tr', 'vi', 'zh'];
const lwAppLang = LW_APP_LOCALES.indexOf(lwLang) >= 0 ? lwLang : '';

const lwLinkBase = lwAppLang ? 'https://limewire.com/' + lwAppLang : 'https://limewire.com/';




const lwAuthUrl = 'https://limewire.com/auth?' + (lwAppLang ? 'lang=' + lwAppLang + '&' : '')
  + 'utm_source=snapdrop.net&utm_medium=satellite&utm_campaign=upload&referrer=tlza455s3j&utm_content=' + encodeURIComponent(location.pathname);
 

 






let lwFailureShown = false;







const lwCompat = [];
try {
  if (typeof AbortController === 'function' && typeof AbortSignal === 'function') {
    const lwNoReason = () => new DOMException('signal is aborted without reason', 'AbortError');
    if (!('reason' in AbortSignal.prototype)) {
      const reasons = new WeakMap();
      const abort = AbortController.prototype.abort;
      AbortController.prototype.abort = function (reason) {
        if (!this.signal.aborted) { reasons.set(this.signal, reason === undefined ? lwNoReason() : reason); }
        return abort.call(this);
      };
      Object.defineProperty(AbortSignal.prototype, 'reason', {
        configurable: true,
        get() { return reasons.has(this) ? reasons.get(this) : (this.aborted ? lwNoReason() : undefined); },
      });
      lwCompat.push('abort-reason');
    }
    if (typeof AbortSignal.prototype.throwIfAborted !== 'function') {
      AbortSignal.prototype.throwIfAborted = function () { if (this.aborted) { throw this.reason; } };
      lwCompat.push('throw-if-aborted');
    }
  }
  if (window.crypto && window.crypto.getRandomValues && typeof window.crypto.randomUUID !== 'function') {
    window.crypto.randomUUID = () => {
      const b = window.crypto.getRandomValues(new Uint8Array(16));
      b[6] = (b[6] & 0x0f) | 0x40;
      b[8] = (b[8] & 0x3f) | 0x80;
      const h = Array.from(b, (x) => x.toString(16).padStart(2, '0')).join('');
      return h.slice(0, 8) + '-' + h.slice(8, 12) + '-' + h.slice(12, 16) + '-' + h.slice(16, 20) + '-' + h.slice(20);
    };
    lwCompat.push('random-uuid');
  }
} catch (e) {   }



const lwRealMessage = (message) => {
  const text = message === undefined || message === null ? '' : String(message).trim();
  return /^(undefined|null|\[object object\])?$/i.test(text) ? '' : text;
};



const lwFT = (key, fallback) => (typeof lwT === 'function' ? lwT(key, fallback) : fallback);
const lwFAuthUrl = () => (typeof lwAuthUrl === 'string' ? lwAuthUrl : 'https://limewire.com/auth');




const lwLimitUrl = () => {
  const auth = lwFAuthUrl().replace('utm_campaign=upload', 'utm_campaign=limit');
  const pricing = '/' + (typeof lwAppLang === 'string' && lwAppLang ? lwAppLang + '/' : '') + 'pricing';
  return auth + (auth.indexOf('?') >= 0 ? '&' : '?') + 'redirectTo=' + encodeURIComponent(pricing);
};



const lwFailureText = (message) => {
  const text = String(message || '');
  const files = /daily upload limit of ([\d\s,.]+) files/i.exec(text);
  if (files) {
    return {
      limit: true,
      title: lwFT('limit_title', 'Daily limit reached'),
      body: lwFT('limit_files_body', 'Up to {n} files a day can be sent from one address without an account. The counter resets at 00:00 UTC. A LimeWire account raises the limit.').replace('{n}', files[1].trim()),
    };
  }
  const bytes = /daily upload limit of ([^.]+)\./i.exec(text);
  if (bytes) {
    return {
      limit: true,
      title: lwFT('limit_title', 'Daily limit reached'),
      body: lwFT('limit_bytes_body', 'The daily upload volume from this address is used up ({limit}). The counter resets at 00:00 UTC. A LimeWire account raises the limit.').replace('{limit}', bytes[1].trim()),
    };
  }
  
  
  
  if (lwReasonOf(text) === 'source_read') {
    return { limit: false, title: lwFT('failed_title', 'Upload failed'), body: lwFT('unreadable_body', "This file can't be read from your device anymore — it may have changed, moved or still be syncing from the cloud. Save it to your device and select it again.") };
  }
  
  
  
  return { limit: false, title: lwFT('failed_title', 'Upload failed'), body: lwRealMessage(text) };
};



const lwReasonOf = (message) => {
  const text = String(message || '');
  if (/could not read the file from this device/i.test(text)) { return 'source_read'; }
  if (/xhr error|xhr stalled|failed to fetch|networkerror|network error|load failed|fetcherror/i.test(text)) { return 'connection'; }
  if (/array buffer allocation failed/i.test(text)) { return 'memory'; }
  return 'other';
};






const lwSignatureOf = (message) => String(message || '')
  .toLowerCase()
  .replace(/https?:\/\/\S+/g, '<url>')
  .replace(/[0-9a-f]{8,}/g, '<id>')
  .replace(/\d+([.,]\d+)?/g, '#')
  .replace(/\s+/g, ' ')
  .trim()
  .slice(0, 80) || 'empty';













const LW_SENTRY_ENVELOPE = 'https://o4505008135340032.ingest.sentry.io/api/4505114707099648/envelope/?sentry_key=3914d239cc544007a8bc3b33c2e276e7&sentry_version=7&sentry_client=lw.satellite%2F1';
const lwReportFailure = (code, message, reason, stage) => {
  try {
    if (code === 'upload_limit_reached' || typeof fetch !== 'function') { return; }
    
    const rate = typeof window.lwFailureSampleRate === 'number' ? window.lwFailureSampleRate : 0.1;
    if (Math.random() >= rate) { return; }
    const bytes = new Uint8Array(16);
    if (window.crypto && window.crypto.getRandomValues) { window.crypto.getRandomValues(bytes); }
    else { for (let i = 0; i < 16; i += 1) { bytes[i] = Math.floor(Math.random() * 256); } }
    const id = Array.from(bytes, (b) => b.toString(16).padStart(2, '0')).join('');
    
    
    
    let who = '';
    try {
      who = localStorage.getItem('lwReporterId') || '';
      if (!who) { who = 'sat-' + id.slice(0, 16); localStorage.setItem('lwReporterId', who); }
    } catch (e) { who = 'sat-' + id.slice(0, 16); }
    const host = location.host;
    const kind = String(code || 'none').slice(0, 64);
    const step = String(stage || 'unknown').slice(0, 64);
    const real = lwRealMessage(message);
    const value = real || (code ? kind : 'Upload failed without a reason from the browser (stage: ' + step + ')');
    const expected = reason === 'source_read';
    const event = {
      event_id: id,
      timestamp: Date.now() / 1000,
      platform: 'javascript',
      level: expected ? 'warning' : 'error',
      environment: 'production',
      logger: 'satellite-uploader',
      exception: { values: [{ type: 'SatelliteUploadFailed', value: value.slice(0, 500) }] },
      tags: {
        'upload.failed': 'true', 'upload.surface': 'satellite', 'upload.host': host, 'upload.reason': reason, 'upload.code': kind,
        'upload.stage': step, 'upload.compat': lwCompat.join(',') || 'native', 'upload.expected': expected ? 'true' : 'false',
      },
      fingerprint: reason === 'other'
        ? ['satellite-upload-failed', host, reason, kind, real ? lwSignatureOf(real) : 'no-reason']
        : ['satellite-upload-failed', host, reason, kind],
      user: { id: who },
      request: { url: location.origin + location.pathname, headers: { 'User-Agent': navigator.userAgent } },
      sdk: { name: 'lw.satellite', version: '1' },
    };
    const body = [JSON.stringify({ event_id: id, sent_at: new Date().toISOString() }), JSON.stringify({ type: 'event' }), JSON.stringify(event)].join('\n');
    
    fetch(LW_SENTRY_ENVELOPE, { method: 'POST', body, keepalive: true, credentials: 'omit' }).catch(() => {});
  } catch (e) {   }
};

const lwShowUploadFailure = (uploadEntry) => {
  const result = uploadEntry && uploadEntry.result;
  if (!result || result.ok !== false) { return false; }
  if (lwFailureShown) { return true; }
  lwFailureShown = true;

  const info = lwFailureText(result.error && result.error.message);
  const modal = $('body').find('.lw_modal');
  modal.removeClass('initializing').addClass('has_upload_failure').show();
  modal.find('.lw_loading_spinner').hide();
  
  
  modal.find('.lw_modal_files_container').hide();

  const dialog = modal.find('.lw_redirect_dialog');
  dialog.empty();
  
  dialog.append($('<strong class="lw_failure_title"></strong>').text(info.title));
  dialog.append($('<br>'));
  dialog.append($('<span class="lw_failure_body"></span>').text(info.body));

  const actions = $('<div class="lw_modal_cta lw_failure_cta"></div>');
  if (info.limit) {
    const plans = $('<a class="lw_modal_to_lw_btn lw_limit_plans" target="_blank" rel="noopener"></a>').attr('href', lwLimitUrl()).text(lwFT('switch_cta', 'Switch to LimeWire'));
    plans.on('click', () => { try { if (typeof gtag === 'function') gtag('event', 'limit_plans_click'); } catch (e) {   } });
    actions.append(plans);
    
    if (window.lwP2p) dialog.append($('<span class="lw_failure_body lw_failure_hint"></span>').text(lwFT('limit_nearby', 'Sending to a device nearby has no limit.')));
  }
  
  const retry = $('<button type="button" class="lw_modal_to_lw_btn lw_btn_secondary lw_failure_retry"></button>')
    .text(info.limit ? lwFT('done_cta', 'Done') : lwFT('retry_cta', 'Try again'));
  retry.on('click', () => { window.location.reload(); });
  actions.append(retry);
  modal.find('.lw_modal_footer').append(actions);

  try {
    if (typeof gtag === 'function') {
      gtag('event', 'upload_failed', { reason: (result.error && result.error.code) || 'unknown' });
    }
  } catch (e) {   }
  const rawMessage = result.error && result.error.message;
  lwReportFailure(result.error && result.error.code, rawMessage, lwReasonOf(rawMessage), uploadEntry.stage || uploadEntry.status);

  return true;
};
 

const isStaging = window.location?.href?.startsWith('https://staging.snapdrop.net');

const lwEnv = ['dev', 'stage'].find((e) => e === new URLSearchParams(window.location.search).get('lwenv')) || 'stage';
const lwAppBaseUrl = isStaging ? `https://${lwEnv}.bluegreenenv.com` : 'https://limewire.com';
const lwApiBaseUrl = isStaging ? `https://api-${lwEnv}.bluegreenenv.com` : 'https://api.limewire.com';
const libUrl = `${lwAppBaseUrl}/file-sharing-lib/file-sharing-lib.es.js`;
const fileSharingLib = await import(libUrl);

window.fileSharingLib = fileSharingLib;



var lwClaimStarted = false;








const lwLabelClaimLink = (claimLink) => {
  try {
    const url = new URL(claimLink);
    url.searchParams.set('utm_source', 'snapdrop.net');
    url.searchParams.set('utm_medium', 'satellite');
    url.searchParams.set('utm_campaign', 'link');
    url.searchParams.set('utm_content', location.pathname);
    return url.href;
  } catch (e) { return claimLink; }
};
const lwShowLinkReady = (claimLink) => {
  claimLink = lwLabelClaimLink(claimLink);
  const modal = $('body').find('.lw_modal');
  modal.addClass('has_link_ready');
  modal.find('.lw_loading_spinner').hide();
  const dialog = modal.find('.lw_redirect_dialog');
  dialog.empty();
  dialog.append($('<strong class="lw_failure_title"></strong>').text(lwT('ready_title', 'Your link is ready')));
  const body = $('<span class="lw_failure_body"></span>').text(lwT('ready_body', 'Your link is ready on LimeWire: open it to copy and share it.'));
  dialog.append(body);
  const actions = $('<div class="lw_modal_cta lw_failure_cta"></div>');
  const open = $('<a class="lw_modal_to_lw_btn lw_link_open" target="_blank" rel="noopener"></a>')
    .attr('href', claimLink).text(lwT('ready_open_cta', 'Open the link on LimeWire'));
  const done = $('<button type="button" class="lw_modal_to_lw_btn lw_btn_secondary lw_link_done"></button>').text(lwT('done_cta', 'Done')).hide();
  done.on('click', () => { window.location.reload(); });
  open.on('click', () => {
    try { if (typeof gtag === 'function') gtag('event', 'link_open_click', { auto: 0 }); } catch (e) {   }
    body.text(lwT('ready_opened', 'It opened on LimeWire in a new tab. This page stays open to send more.'));
    done.show();
  });
  actions.append(open, done);
  modal.find('.lw_modal_footer').append(actions);
  try { if (typeof gtag === 'function') gtag('event', 'link_ready', { auto_open: 0 }); } catch (e) {   }
};

var allFiles = [];
var filesUploaded = [];

const uploadFilesInput = document.querySelector('#select-files-input');
const uploadFolderInput = document.querySelector('#upload-folder');
const uploadDragDrop = document.querySelector('#upload-drag-drop');
const uploadEntriesElement = document.querySelector('#upload-entries');

const { Upload, getDataTransferFiles, getUploadEntryIcon, getFileExtension, getFileSize, canUploadAllFiles } = window.fileSharingLib;

const createHtmlElement = (htmlString) => {
  const div = document.createElement('div');
  
  return div.firstChild;
}
const getUploadEntryHtml = (uploadEntry) => {
  const { result } = uploadEntry;

  const resultText = result ? result.ok ? 'Uploaded' : result.error.message : '';
  const error = result && !result.ok;
  const success = result && result.ok;
  const preview = uploadEntry.previews[0];
  const icon = getUploadEntryIcon(uploadEntry);

  
}

const sharingBucketUpload = new Upload({
  apiBaseUrl: lwApiBaseUrl,
  linkBaseUrl: isStaging ? lwAppBaseUrl : lwLinkBase,
  sharingBucketName: (files) => {
    return files[0].name;
  },
  entryAdded: (uploadEntry) => {
    const uploadEntryElement = createHtmlElement(getUploadEntryHtml(uploadEntry));

    $('body').find('.lw_modal').removeClass('initializing').show();

    $('body').find('.lw_modal_files_container').append('<div data-upload-id="' + uploadEntry.id + '" data-upload-size="' + uploadEntry.file.size + '" class="lw_modal_file"><div class="lw_file_name">' + uploadEntry.file.name + '</div><div class="lw_file_size">' + getFileSize(uploadEntry.file.size) + '</div><div class="lw_file_progress"><div class="lw_progress_bar" style="width: 0%"></div><div class="lw_progress_percentage">0%</div></div><div class="lw_file_icon"></div></div>');

  },
  entryUpdated: (uploadEntry) => {
    if (lwShowUploadFailure(uploadEntry)) { return; }
    const uploadEntryElement = document.querySelector('#upload-entry-' + uploadEntry.id);

    var numberOfFiles = parseInt($('body').find('[data-upload-id]').length);

    $('body').find('[data-upload-id]').each(function () {

      if ($.inArray(uploadEntry.id, allFiles) == -1) {
        allFiles.push(uploadEntry.id);
      }

      if ($(this).attr('data-upload-id') == uploadEntry.id) {

        
        

        var progress100 = (uploadEntry.file.uploadProgress * 100).toFixed(0);

        $(this).find('.lw_file_progress').attr('data-upload-progress', progress100);
        $(this).find('.lw_file_progress .lw_progress_bar').css('width', progress100 + '%');
        $(this).find('.lw_file_progress .lw_progress_percentage').text(progress100 + '%');

        if (uploadEntry.file.uploadProgress == 1 && ($.inArray(uploadEntry.id, filesUploaded) == -1)) {
          filesUploaded.push(uploadEntry.id);
        }

        
        
      }

    });

    if (allFiles.length == filesUploaded.length && !lwClaimStarted) {
      lwClaimStarted = true;

      $('body').find('.lw_redirect_dialog span').text(lwT('redirect', 'Redirecting you to LimeWire ...'));

      sharingBucketUpload.getClaimLink('tlza455s3j', true).then(lwShowLinkReady);
    }
  }
});



uploadFilesInput.addEventListener('change', (event) => {
  const { target } = event;

  $('body').find('.lw_modal').addClass('initializing').fadeIn();
	
  if (sharingBucketUpload.canUploadAllFiles(target.files)) {
    sharingBucketUpload.addEntries(target.files);
  }
  else {
    console.log('Too big!');

	  $('body').find('.lw_modal').addClass('has_login_signup_popup').fadeIn();
	  $('body').find('.lw_modal_container .lw_modal_footer').append('<div class="in_login_signup_popup lw_modal_text"> <p><strong>' + lwT('too_large_title', 'This file is too large. Please use LimeWire instead!') + '</strong></p> <p>' + lwT('too_large_body', 'Please note that we can only support files with a maximum size of 10 GB. A free LimeWire account takes up to 20 GB per transfer and keeps links for 7 days. Paid LimeWire plans take files of up to 500 GB: the button below takes you to LimeWire.') + ' </p> </div> <div class="in_login_signup_popup lw_modal_cta"> <a class="in_login_signup_popup lw_modal_to_lw_btn" target="_blank" rel="noopener" href="' + lwAuthUrl + '">' + lwT('switch_cta', 'Switch to LimeWire') + '</a> </div>');
    
  }
});

uploadFolderInput.addEventListener('change', (event) => {
  const { target } = event;

  $('body').find('.lw_modal').addClass('initializing').fadeIn();
	
  if (sharingBucketUpload.canUploadAllFiles(target.files)) {
    sharingBucketUpload.addEntries(target.files);
  }
  else {
    console.log('Too big!');

	  $('body').find('.lw_modal').addClass('has_login_signup_popup').fadeIn();
	  $('body').find('.lw_modal_container .lw_modal_footer').append('<div class="in_login_signup_popup lw_modal_text"> <p><strong>' + lwT('too_large_title', 'This file is too large. Please use LimeWire instead!') + '</strong></p> <p>' + lwT('too_large_body', 'Please note that we can only support files with a maximum size of 10 GB. A free LimeWire account takes up to 20 GB per transfer and keeps links for 7 days. Paid LimeWire plans take files of up to 500 GB: the button below takes you to LimeWire.') + ' </p> </div> <div class="in_login_signup_popup lw_modal_cta"> <a class="in_login_signup_popup lw_modal_to_lw_btn" target="_blank" rel="noopener" href="' + lwAuthUrl + '">' + lwT('switch_cta', 'Switch to LimeWire') + '</a> </div>');
    
  }
});

uploadDragDrop.addEventListener('dragover', (event) => {
  event.preventDefault();
});
uploadDragDrop.addEventListener('drop', async (event) => {
  event.preventDefault();

  $('body').find('.lw_modal').addClass('initializing').fadeIn();
	
  const files = await getDataTransferFiles(event.dataTransfer);
  if (canUploadAllFiles(files.flat())) {
    files.forEach((fileDescriptors) => {
      sharingBucketUpload.addEntries(fileDescriptors);
    });  
  } else {
    console.log('Too big!');

	  $('body').find('.lw_modal').addClass('has_login_signup_popup').fadeIn();
	  $('body').find('.lw_modal_container .lw_modal_footer').append('<div class="in_login_signup_popup lw_modal_text"> <p><strong>' + lwT('too_large_title', 'This file is too large. Please use LimeWire instead!') + '</strong></p> <p>' + lwT('too_large_body', 'Please note that we can only support files with a maximum size of 10 GB. A free LimeWire account takes up to 20 GB per transfer and keeps links for 7 days. Paid LimeWire plans take files of up to 500 GB: the button below takes you to LimeWire.') + ' </p> </div> <div class="in_login_signup_popup lw_modal_cta"> <a class="in_login_signup_popup lw_modal_to_lw_btn" target="_blank" rel="noopener" href="' + lwAuthUrl + '">' + lwT('switch_cta', 'Switch to LimeWire') + '</a> </div>');
    
  }
});

 


var array = [
    "Aardvark",
    "Albatross",
    "Alligator",
    "Alpaca",
    "Ant",
    "Anteater",
    "Antelope",
    "Ape",
    "Armadillo",
    "Donkey",
    "Baboon",
    "Badger",
    "Barracuda",
    "Bat",
    "Bear",
    "Beaver",
    "Bee",
    "Bison",
    "Boar",
    "Buffalo",
    "Butterfly",
    "Camel",
    "Capybara",
    "Caribou",
    "Cassowary",
    "Cat",
    "Caterpillar",
    "Cattle",
    "Chamois",
    "Cheetah",
    "Chicken",
    "Chimpanzee",
    "Chinchilla",
    "Chough",
    "Clam",
    "Cobra",
    "Cockroach",
    "Cod",
    "Cormorant",
    "Coyote",
    "Crab",
    "Crane",
    "Crocodile",
    "Crow",
    "Curlew",
    "Deer",
    "Dinosaur",
    "Dog",
    "Dogfish",
    "Dolphin",
    "Dotterel",
    "Dove",
    "Dragonfly",
    "Duck",
    "Dugong",
    "Dunlin",
    "Eagle",
    "Echidna",
    "Eel",
    "Eland",
    "Elephant",
    "Elk",
    "Emu",
    "Falcon",
    "Ferret",
    "Finch",
    "Fish",
    "Flamingo",
    "Fly",
    "Fox",
    "Frog",
    "Gaur",
    "Gazelle",
    "Gerbil",
    "Giraffe",
    "Gnat",
    "Gnu",
    "Goat",
    "Goldfinch",
    "Goldfish",
    "Goose",
    "Gorilla",
    "Goshawk",
    "Grasshopper",
    "Grouse",
    "Guanaco",
    "Gull",
    "Hamster",
    "Hare",
    "Hawk",
    "Hedgehog",
    "Heron",
    "Herring",
    "Hippopotamus",
    "Hornet",
    "Horse",
    "Human",
    "Hummingbird",
    "Hyena",
    "Ibex",
    "Ibis",
    "Jackal",
    "Jaguar",
    "Jay",
    "Jellyfish",
    "Kangaroo",
    "Kingfisher",
    "Koala",
    "Kookabura",
    "Kouprey",
    "Kudu",
    "Lapwing",
    "Lark",
    "Lemur",
    "Leopard",
    "Lion",
    "Llama",
    "Lobster",
    "Locust",
    "Loris",
    "Louse",
    "Lyrebird",
    "Magpie",
    "Mallard",
    "Manatee",
    "Mandrill",
    "Mantis",
    "Marten",
    "Meerkat",
    "Mink",
    "Mole",
    "Mongoose",
    "Monkey",
    "Moose",
    "Mosquito",
    "Mouse",
    "Mule",
    "Narwhal",
    "Newt",
    "Nightingale",
    "Octopus",
    "Okapi",
    "Opossum",
    "Oryx",
    "Ostrich",
    "Otter",
    "Owl",
    "Oyster",
    "Panther",
    "Parrot",
    "Partridge",
    "Peafowl",
    "Pelican",
    "Penguin",
    "Pheasant",
    "Pig",
    "Pigeon",
    "Pony",
    "Porcupine",
    "Porpoise",
    "Quail",
    "Quelea",
    "Quetzal",
    "Rabbit",
    "Raccoon",
    "Rail",
    "Ram",
    "Rat",
    "Raven",
    "Red deer",
    "Red panda",
    "Reindeer",
    "Rhinoceros",
    "Rook",
    "Salamander",
    "Salmon",
    "Sand Dollar",
    "Sandpiper",
    "Sardine",
    "Scorpion",
    "Seahorse",
    "Seal",
    "Shark",
    "Sheep",
    "Shrew",
    "Skunk",
    "Snail",
    "Snake",
    "Sparrow",
    "Spider",
    "Spoonbill",
    "Squid",
    "Squirrel",
    "Starling",
    "Stingray",
    "Stinkbug",
    "Stork",
    "Swallow",
    "Swan",
    "Tapir",
    "Tarsier",
    "Termite",
    "Tiger",
    "Toad",
    "Trout",
    "Turkey",
    "Turtle",
    "Viper",
    "Vulture",
    "Wallaby",
    "Walrus",
    "Wasp",
    "Weasel",
    "Whale",
    "Wildcat",
    "Wolf",
    "Wolverine",
    "Wombat",
    "Woodcock",
    "Woodpecker",
    "Worm",
    "Wren",
    "Yak",
    "Zebra"
];

 


(() => {
  const track = (name, params) => {
    if (typeof window.gtag !== 'function') return;
    try {
      window.gtag('event', name, { site: location.hostname, ...params });
    } catch (error) {
      console.error('upload analytics failed', error);
    }
  };

  const measure = (files) => {
    try {
      const list = Array.from(files ?? []).flat();
      return {
        file_count: list.length,
        size_mb: Math.round(list.reduce((sum, file) => sum + (file?.size || 0), 0) / 1048576),
      };
    } catch (error) {
      return {};
    }
  };

  let startReported = false;

  const originalAddEntries = sharingBucketUpload.addEntries.bind(sharingBucketUpload);
  sharingBucketUpload.addEntries = (files, ...rest) => {
    
    if (!startReported) {
      startReported = true;
      track('upload_started', measure(files));
    }
    return originalAddEntries(files, ...rest);
  };

  const originalCanUpload = sharingBucketUpload.canUploadAllFiles.bind(sharingBucketUpload);
  sharingBucketUpload.canUploadAllFiles = (files, ...rest) => {
    const allowed = originalCanUpload(files, ...rest);
    if (!allowed) {
      track('upload_blocked_size', measure(files));
    }
    return allowed;
  };

  
  ['getSharingLink', 'getClaimLink'].forEach((method) => {
    if (typeof sharingBucketUpload[method] !== 'function') return;
    const original = sharingBucketUpload[method].bind(sharingBucketUpload);
    sharingBucketUpload[method] = (...args) => {
      track('upload_completed', {});
      return original(...args);
    };
  });

  
  window.jQuery?.(document).on('lw:modal-closed', () => {
    startReported = false;
  });
})();
