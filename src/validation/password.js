export default function isPassword(password) {
  const allConditionsMet = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\W)[^\s]+$/.test(password)

  return allConditionsMet
}
