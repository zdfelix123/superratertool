export interface Column {
  id?: string;
  type?: QuestionType;
  label?: string;
  value?: string;
  placeHolder?: string;
  columnNum: string;
  disabled?: boolean;
  hide?: boolean;
  options?: Option[];
}

export interface Option {
  value: string;
  label: string;
}

export enum QuestionType {
  SELECTOR,
  TEXTAREA,
  INPUT,
  DATEPICKER
}

export enum MagiRoleBadge {
  NEW_ROLE,
  NEWBIE
}

const ONBOARDING_STATUS: Option[] = [
  { value: "Production Ready", label: "Production Ready" },
  { value: "Pre-Initial Training", label: "Pre-Initial Training" },
  { value: "Initial Training", label: "Initial Training" },
  { value: "Onboarding", label: "Onboarding" },
  { value: "Blocked", label: "Blocked" },
];

const EDUCATION: Option[] = [
  { value: "Doctorate", label: "Doctorate" },
  { value: "Masters", label: "Masters" },
  { value: "Bachelors", label: "Bachelors" },
  { value: "Other", label: "Other" },
];

const PRODUCTIONROLE: Option[] = [
  { value: "SR", label: "SR" },
  { value: "Reviewer", label: "Reviewer" },
  { value: "Sr. Reviewer", label: "Sr. Reviewer" },
  { value: "Lead", label: "Lead" },
  { value: "PO", label: "PO" },
  { value: "PAO", label: "PAO" },
  { value: "Sr. PAO", label: "Sr. PAO" },
  { value: "Program Lead", label: "Program Lead" },
  { value: "Pod Lead", label: "Pod Lead" },
  { value: "Sr. Pod Lead", label: "Sr. Pod Lead" },
  { value: "Pod Manager", label: "Pod Manager" },
  { value: "Onboarding Lead", label: "Onboarding Lead" },
  { value: "Sr. Onboarding Lead", label: "Sr. Onboarding Lead" },
  { value: "Interviewer", label: "Interviewer" },
  { value: "Interview Lead", label: "Interview Lead" },
  { value: "Interview Manager", label: "Interview Manager" },
  { value: "Culture & Inclusion", label: "Culture & Inclusion" },
  { value: "Data Manager", label: "Data Manager" },
  { value: "Business Analyst", label: "Business Analyst" },
  { value: "Data Analyst", label: "Data Analyst" },
  { value: "Evaluator", label: "Evaluator" },
  { value: "Golden Evaluator", label: "Golden Evaluator" },

];

export const USER_TAB_CONFIG: Column[] = [
  {
    label: "Super Rater Name",
    columnNum: "C",
    placeHolder: "Loading ...",
    type: QuestionType.INPUT
  },
  {
    label: "Super Rater LDAP",
    columnNum: "D",
    placeHolder: "Loading ...",
    type: QuestionType.INPUT
  },
  {
    label: "Pod",
    columnNum: "E",
    placeHolder: "Loading ...",
    type: QuestionType.INPUT
  },
  {
    label: "Location",
    columnNum: "Q",
    placeHolder: "Loading ...",
    type: QuestionType.INPUT
  },
  {
    label: "GlobalLogic Email",
    columnNum: "AC",
    placeHolder: "Loading ...",
    type: QuestionType.INPUT
  },
  {
    label: "Google Email",
    columnNum: "Z",
    placeHolder: "Loading ...",
    type: QuestionType.INPUT
  },
  {
    label: "Major/Area of Study",
    columnNum: "S",
    placeHolder: "Loading ...",
    type: QuestionType.TEXTAREA
  },
  {
    label: "Technical Language Skills",
    columnNum: "X",
    placeHolder: "Loading ...",
    type: QuestionType.TEXTAREA
  },
  {
    label: "Notes",
    columnNum: "F",
    placeHolder: "Loading ...",
    type: QuestionType.TEXTAREA
  },
  {
    label: "Onboarding Status",
    columnNum: "K",
    placeHolder: "Please select ...",
    type: QuestionType.SELECTOR,
    options: ONBOARDING_STATUS
  },
  {
    label: "Highest Level of Education",
    columnNum: "R",
    placeHolder: "Please select ...",
    type: QuestionType.SELECTOR,
    options: EDUCATION
  },
];

export const PROJECT_TAB_CONFIG: Column[] = [
  {
    label: "Production Role",
    columnNum: "N",
    placeHolder: "Please select ...",
    type: QuestionType.SELECTOR,
    options: PRODUCTIONROLE
  },
  {
    label: "Assigned Project (q type)",
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


