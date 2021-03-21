export class MessageHandler {
  static requiredField = (fieldName: string): string => {
    return `${fieldName} is a required field`;
  };

  static minLenght = (fieldName: string, inputLenght: number): string => {
    return `${fieldName} requires a minimum lenght of ${inputLenght}`;
  };

  static maxLenght = (fieldName: string, inputLenght: number): string => {
    return `${fieldName} requires a maximum lenght of ${inputLenght}`;
  };

  static uniqueValue = (fieldName: string): string => {
    return `${fieldName} can't be duplicate`;
  };

  static inputPattern = (fieldName: string): string => {
    return `${fieldName} pattern is not valid`;
  };
}
