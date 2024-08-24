export interface Column {
  id?: string;
  type?: QuestionType;
  label?: string;
  value?: string;
  placeHolder?: string;
  columnNum?: string;
  disabled?: boolean;
  hide?: boolean;
}

export enum QuestionType {
  SELECTOR,
  TEXTAREA,
  INPUT,
  DATEPICKER
}

export const USER_TAB_CONFIG: Column[] = [
  {
    label: "Super Rater Name",
    columnNum: "C",
    placeHolder: "Please enter ...",
    type: QuestionType.INPUT
  },
  {
    label: "Super Rater LDAP",
    columnNum: "D",
    placeHolder: "Please enter ...",
    type: QuestionType.INPUT
  },
  {
    label: "GlobalLogic Email",
    columnNum: "AC",
    placeHolder: "Please enter ...",
    type: QuestionType.INPUT
  },
  {
    label: "Google Email",
    columnNum: "Z",
    placeHolder: "Please enter ...",
    type: QuestionType.INPUT
  },
];

export const PROJECT_TAB_CONFIG: Column[] = [
  {
    label: "Pod",
    columnNum: "E",
    placeHolder: "Please enter ...",
    type: QuestionType.INPUT
  },
  {
    label: "Location",
    columnNum: "Q",
    placeHolder: "Please enter ...",
    type: QuestionType.INPUT
  },
  {
    label: "Assigned Project (based on q type)",
    columnNum: "V",
    placeHolder: "Please enter ...",
    type: QuestionType.INPUT
  },
];
