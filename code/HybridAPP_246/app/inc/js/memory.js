/*
 * 注意事項，value請直接以純字串處理，不建議用什麼boolean，可能會失敗
 * 例如 setMemory("isDrag",true);
 * 那麼，判斷true or false 記得要這樣 if(getMemory("isDrag")=='true'))
 * 要以字串來判斷，最好 setMemory 也當純字串使用 'true'
 */
function setMemory(key, value) {
	localStorage.setItem(key, value);
}
function getMemory(key) {
	return localStorage.getItem(key);
}