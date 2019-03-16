export function host(url) {
	if (!url) return ''
	const host = url.replace(/^https?:\/\//, '').replace(/\/.*$/, '')
	const parts = host.split('.').slice(-3)
	if (parts[0] === 'www') parts.shift()
	return parts.join('.')
}

export function https(url) {
	const env = weex.config.env || WXEnvironment
	if (env.platform === 'iOS' && typeof url === 'string') {
		return url.replace(/^http\:/, 'https:')
	}
	return url
}

export function timeAgo(dateTimeStamp) {
	var minute = 1000 * 60;
	var hour = minute * 60;
	var day = hour * 24;
	var halfamonth = day * 15;
	var month = day * 30;
	var year = month * 12;
	var now = new Date().getTime();
	var diffValue = now - getDateTimeStamp(dateTimeStamp);
	if (diffValue < 0) {
		return;
	}
	var yearC = diffValue / year;
	var monthC = diffValue / month;
	var weekC = diffValue / (7 * day);
	var dayC = diffValue / day;
	var hourC = diffValue / hour;
	var minC = diffValue / minute;
	let result="";
	if (yearC >= 1) {
		result = "" + parseInt(yearC) + "年前";
	} else if (monthC >= 1) {
		result = "" + parseInt(monthC) + "月前";
	} else if (weekC >= 1) {
		result = "" + parseInt(weekC) + "周前";
	} else if (dayC >= 1) {
		result = "" + parseInt(dayC) + "天前";
	} else if (hourC >= 1) {
		result = "" + parseInt(hourC) + "小时前";
	} else if (minC >= 1) {
		result = "" + parseInt(minC) + "分钟前";
	} else
		result = "刚刚";
	return result;
}
// 转换标准时间为时间戳
function getDateTimeStamp(dateStr) {
	return Date.parse(dateStr.replace(/-/gi, "/"));
}

export function unescape(text) {
	let res = text || '' ;
	[
		['<p>', '\n'],
		['&amp;', '&'],
		['&amp;', '&'],
		['&apos;', '\''],
		['&#x27;', '\''],
		['&#x2F;', '/'],
		['&#39;', '\''],
		['&#47;', '/'],
		['&lt;', '<'],
		['&gt;', '>'],
		['&nbsp;', ' '],
		['&quot;', '"']
	].forEach(pair => {
		res = res.replace(new RegExp(pair[0], 'ig'), pair[1])
	})

	return res
}
