export interface Column {
  id?: string;
  type?: QuestionType;
  label?: string;
  value?: string;
  placeHolder?: string;
  columnNum: string;
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
  {
    label: "Major/Area of Study",
    columnNum: "S",
    placeHolder: "Please enter ...",
    type: QuestionType.TEXTAREA
  },
  {
    label: "Technical Language Skills",
    columnNum: "X",
    placeHolder: "Please enter ...",
    type: QuestionType.TEXTAREA
  },
  {
    label: "Notes",
    columnNum: "F",
    placeHolder: "Please enter ...",
    type: QuestionType.TEXTAREA
  },
];

export const PROJECT_TAB_CONFIG: Column[] = [
  {
    label: "Assigned Project (based on q type)",
    columnNum: "V",
    placeHolder: "Please enter ...",
    type: QuestionType.INPUT
  },
  {
    label: "Prod Lead",
    columnNum: "O",
    placeHolder: "Please enter ...",
    type: QuestionType.INPUT
  },
  {
    label: "Prod Lead Ldap",
    columnNum: "P",
    placeHolder: "Please enter ...",
    type: QuestionType.INPUT
  },
];
