export default class Validator {
    validateUsername(username) {
      // Паттерн для проверки имени пользователя
      const pattern = /^[a-zA-Z0-9_-]+$/;

      // Проверяем, соответствует ли имя паттерну
      if (pattern.test(username)) {
        // Проверка на подряд идущие цифры
        if (!/\d{4,}/.test(username)) {
          // Проверка на начало и конец с цифры, подчёркивания или тире
          if (!/^[0-9_-]|[_-]$/.test(username)) {
            return true; // Имя пользователя валидно
          }
        }
      }

      return false; // Имя пользователя не соответствует правилам
    }
  }