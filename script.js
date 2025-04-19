// input are
const input = document.getElementById('textInput');
const langs = ['ja', 'zh-CN', 'zh-TW', 'ko'];
let currentLanguage = 'ja';

// language data
const uiText = {
	ja: {
		title: 'CJK文字表示比較ツール',
		inputLabel: '比較する文字列',
		placeholder: '例: 刃直海角骨入',
		langNames: {
			ja: '日本語',
			'zh-CN': '中国語・簡体',
			'zh-TW': '中国語・繁体',
			ko: '韓国語',
			en: '英語',
		},
		toggle: 'English'
	},
	en: {
		title: 'CJK Character Comparison Tool',
		inputLabel: 'Text to Compare',
		placeholder: 'e.g. 刃直海角骨入',
		langNames: {
			ja: 'Japanese',
			'zh-CN': 'Chinese (Simplified)',
			'zh-TW': 'Chinese (Traditional)',
			ko: 'Korean',
			en: 'English',
		},
		toggle: '日本語'
	}
};

// update UI language mode
const updateUIText = (lang) => {
	const text = uiText[lang];
	document.getElementById('label_title').textContent = text.title;
	document.getElementById('label_input_text').textContent = text.inputLabel;
	input.placeholder = text.placeholder;
	document.getElementById('languageToggle').textContent = text.toggle;

	langs.forEach(code => {
		document.getElementById('label_input_title_' + code.replace('-', '').toLowerCase()).textContent = text.langNames[code];
	});
};

// language change event
document.getElementById('languageToggle').addEventListener('click', () => {
	currentLanguage = (currentLanguage === 'ja') ? 'en' : 'ja';
	updateUIText(currentLanguage);
});

// when input
input.addEventListener('input', () => {
	const value = input.value;
	langs.forEach(lang => {
		document.getElementById(lang).textContent = value ?? "";
	});
});

// initialize
updateUIText(currentLanguage);
