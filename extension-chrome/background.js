
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
	chrome.downloads.download({url: request.url, saveAs: true}, downloadId => {
		if (chrome.runtime.lastError) {
			// Обработка ошибки загрузки
			console.error(chrome.runtime.lastError.message);
		 } else {
			// Обработка успешной загрузки
			console.log("Изображение с [%i] загружено." + downloadId);
		 }
	});
 });