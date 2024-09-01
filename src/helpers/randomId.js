export default function generateRandomId() {
    return Math.random().toString(6).substr(2, 9);
  }