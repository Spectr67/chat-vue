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

export default function checkWord(word) {
  for (const bannedWord of bannedWords) {
    if (word.toLowerCase().includes(bannedWord)) return true
  }
  return false
}
