export interface Column {
  id?: string;
  type?: QuestionType;
  label?: string;
  text?: string;
  placeHolder?: string;
  columnNum?: string;
  disabled?: boolean;
}

enum QuestionType {
  SELECTOR,
  TEXTAREA,
}

export const USER_TAB_CONFIG: Column[] = [
  {
    label: "Super Rater Name",
    columnNum: "C",
    placeHolder: "Please enter ...",
  },
  {
    label: "Super Rater LDAP",
    columnNum: "D",
    placeHolder: "Please enter ...",
  },
  {
    label: "GlobalLogic Email",
    columnNum: "AC",
    placeHolder: "Please enter ...",
  },
  {
    label: "Google Email",
    columnNum: "Z",
    placeHolder: "Please enter ...",
  },
];

export const PROJECT_TAB_CONFIG: Column[] = [
  {
    label: "Pod",
    columnNum: "E",
    placeHolder: "Please enter ...",
  },
  {
    label: "Location",
    columnNum: "Q",
    placeHolder: "Please enter ...",
  },
  {
    label: "Assigned Project (based on q type)",
    columnNum: "V",
    placeHolder: "Please enter ...",
  },
];
