const bannedWords = [
  'морковь',
  'капуста',
  'огурец',
  'помидор',
  'перец',
  'редис',
  'баклажан',
  'лук',
  'чеснок',
  'картофель',
]

export default function wordsChecker(text) {
  for (let word of bannedWords) {
    if (text.toLowerCase().includes(word)) {
      return true
    }
  }
  return false
}
