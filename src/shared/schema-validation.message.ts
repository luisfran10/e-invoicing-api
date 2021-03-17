export class ValidationMessage {
  constructor(
    private readonly fieldNane: string,
    private readonly inputLenght?: number,
  ) {
    /**
     * the inputLenght parameter works for both, minLenght and maxLenght methods
     */
  }

  requiredField = (): string => {
    return `${this.fieldNane} is a required field`;
  };

  minLenght = (): string => {
    return `${this.fieldNane} requires a minimum lenght of ${this.inputLenght}`;
  };

  maxLenght = (): string => {
    return `${this.fieldNane} requires a maximum lenght of ${this.inputLenght}`;
  };

  uniqueValue = (): string => {
    return `${this.fieldNane} can't be duplicate`;
  };

  inputPattern = (): string => {
    return `${this.fieldNane} pattern is not valid`;
  };
}
