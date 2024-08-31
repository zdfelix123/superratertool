import { getCurrentTaskOptions } from "./currentTaskData";
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
  badge?:Badge;
  validation?:Validation;
}

export interface Validation {
  type: string;
  regex: string;
}

export interface Option {
  value: string;
  label: string;
}
export interface Project {
  name: string;
  project: string;
}

export enum QuestionType {
  SELECTOR,
  TEXTAREA,
  INPUT,
  DATEPICKER,
  MULTISELECT
}

export enum Badge {
  NEW_ROLE,
  NEWBIE,
  UNDEFINED,
}

export interface BarChartData {
  baseProject: string;
  budgetedHC: number;
  actualHC: number;
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

const ROLES: Option[] = [
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

export const PROJECTWORKTYPE: Option[] = [
  { value: "Magi - Eval 1", label: "Magi - Eval 1" },
  { value: "Magi - Writing 1", label: "Magi - Writing 1" },
  { value: "Gemit - Admin", label: "Gemit - Admin" },
  { value: "Cloud - Solutions", label: "Cloud - Solutions" },
  { value: "Workspace", label: "Workspace" },
  { value: "Ambient - Writing", label: "Ambient - Writing" },
  { value: "Ambient - Evals", label: "Ambient - Evals" },
  { value: "Magi - Writing 2", label: "Magi - Writing 2" },
  { value: "Magi - Eval 2", label: "Magi - Eval 2" },
  { value: "Magi - Eval 3", label: "Magi - Eval 3" },
  { value: "Magi - Eval 4", label: "Magi - Eval 4" },
  { value: "Gemit - Factuality1", label: "Gemit - Factuality1" },
  { value: "Gemit - Factuality2", label: "Gemit - Factuality2" },
  { value: "Gemit - Factuality3", label: "Gemit - Factuality3" },
  { value: "Gemit - Creative1", label: "Gemit - Creative1" },
  { value: "Gemit - Creative2", label: "Gemit - Creative2" },
  { value: "Gemit - Creative3", label: "Gemit - Creative3" },
  { value: "Gemit - Creative4", label: "Gemit - Creative4" },
  { value: "Python 1", label: "Python 1" },
  { value: "Python 2", label: "Python 2" },
  { value: "Magi - Writing 3", label: "Magi - Writing 3" },
  { value: "Gemit - Orientation", label: "Gemit - Orientation" },
  { value: "Gemini - 1", label: "Gemini - 1" },
  { value: "Gemini - 2", label: "Gemini - 2" },
  { value: "Gemini - 3", label: "Gemini - 3" },
  { value: "Cloud - CP1", label: "Cloud - CP1" },
  { value: "Cloud - CP2", label: "Cloud - CP2" },
  { value: "Cloud - CP3", label: "Cloud - CP3" },
  { value: "Cloud - CP4", label: "Cloud - CP4" },
  { value: "QC", label: "QC" },
  { value: "BrowseCUJ", label: "BrowseCUJ" },
  { value: "Magi - Essense", label: "Magi - Essense" },
  { value: "ImageInWords", label: "ImageInWords" },
  { value: "Ads", label: "Ads" },
  { value: "Bard", label: "Bard" },
  { value: "VideoInWords", label: "VideoInWords" },
  { value: "Buffer", label: "Buffer" },
  { value: "Core Fixed", label: "Core Fixed" },
  { value: "Magi - JA", label: "Magi - JA" },
  { value: "Gemit - Factuality4", label: "Gemit - Factuality4" },
  { value: "Magi - Writing 4", label: "Magi - Writing 4" },
  { value: "Magi - Eval 5", label: "Magi - Eval 5" },
  { value: "Onboarding", label: "Onboarding" },
  { value: "Gemini Multilinguality - JA", label: "Gemini Multilinguality - JA" },
  { value: "Gemini Multilinguality - DE", label: "Gemini Multilinguality - DE" },
  { value: "Gemini Multilinguality - HI", label: "Gemini Multilinguality - HI" },
  { value: "Magi - HI US", label: "Magi - HI US" },
  { value: "Magi - TE US", label: "Magi - TE US" },
  { value: "Magi - MR US", label: "Magi - MR US" }
];

const BASEPROJECT: Option[] = [
  { value: "Magi - JA", label: "Magi - JA" },
  { value: "Cloud LLM", label: "Cloud LLM" },
  { value: "GEMIT", label: "GEMIT" },
  { value: "Bard Extensions", label: "Bard Extensions" },
  { value: "Ambient", label: "Ambient" },
  { value: "Workspace", label: "Workspace" },
  { value: "Buffer", label: "Buffer" },
  { value: "PAO", label: "PAO" },
  { value: "QC", label: "QC" },
  { value: "Ads", label: "Ads" },
  { value: "Magi - HI", label: "Magi - HI" },
  { value: "Program Lead", label: "Program Lead" },
  { value: "ImageInWords", label: "ImageInWords" },
  { value: "Magi", label: "Magi" },
  { value: "Core Fixed", label: "Core Fixed" },
  { value: "Magi - Essense", label: "Magi - Essense" },
  { value: "Ask Photos", label: "Ask Photos" },
  { value: "Magi - Python", label: "Magi - Python" },
  { value: "Magi - BN", label: "Magi - BN" },
  { value: "Magi - TA", label: "Magi - TA" },
  { value: "Magi - TE", label: "Magi - TE" },
  { value: "Magi - MR", label: "Magi - MR" },
  { value: "VideoInWords", label: "VideoInWords" },
  { value: "Magi - Gemini", label: "Magi - Gemini" },
  { value: "Gemini Multilinguality - JA", label: "Gemini Multilinguality - JA" },
  { value: "Gemini Multilinguality - DE", label: "Gemini Multilinguality - DE" },
  { value: "Gemini Multilinguality - HI", label: "Gemini Multilinguality - HI" },
  { value: "Magi - Writing", label: "Magi - Writing" },
  { value: "Magi - Evaluation", label: "Magi - Evaluation" },
];

const CURRENTTASK: Option[] = getCurrentTaskOptions();

export const TOP_FILTER_CONFIG: Column = {
  columnNum: "C",
  placeHolder: "Select A Super Rator",
  type: QuestionType.SELECTOR,
  options: []
}

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
    type: QuestionType.INPUT,
    validation: {
      type: 'email',
      regex:'@globallogic.com'
    }
  },
  {
    label: "Google Email",
    columnNum: "Z",
    placeHolder: "Loading ...",
    type: QuestionType.INPUT,
    validation: {
      type: 'email',
      regex:'@google.com'
    }
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
  {
    label: "All Associated Roles",
    columnNum: "W",
    placeHolder: "Please select ...",
    type: QuestionType.MULTISELECT,
    options: ROLES
  },
  {
    label: "Production Role",
    columnNum: "N",
    placeHolder: "Please select ...",
    type: QuestionType.SELECTOR,
    options: PRODUCTIONROLE
  },
  {
    label: "Vendor Onboarded Date",
    columnNum: "J",
    placeHolder: "Please select ...",
    type: QuestionType.DATEPICKER
  },
  {
    label: "Production Ready Date",
    columnNum: "L",
    placeHolder: "Please select ...",
    type: QuestionType.DATEPICKER
  },
  {
    label: "Est. Date of Prod. Start",
    columnNum: "M",
    placeHolder: "Please select ...",
    type: QuestionType.DATEPICKER
  },
  {
    label: "Released from Onboarding",
    columnNum: "AA",
    placeHolder: "Please select ...",
    type: QuestionType.DATEPICKER
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
];

export const PROJECT_TAB_CONFIG: Column[] = [
  {
    label: "Base Project",
    columnNum: "I",
    placeHolder: "Select A Base Project",
    type: QuestionType.SELECTOR,
    options: BASEPROJECT
  },
  {
    label: "Project - Work Type",
    columnNum: "H",
    placeHolder: "Select A Project",
    type: QuestionType.SELECTOR,
    options: PROJECTWORKTYPE
  },
  {
    label: "Current Task",
    columnNum: "G",
    placeHolder: "Please select ...",
    type: QuestionType.SELECTOR,
    options: CURRENTTASK
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

export interface Cell {
  id?: string;
  type?: QuestionType;
  value?: string;
  placeHolder?: string;
  columnNum: string;
  disabled?: boolean;
  hide?: boolean;
  options?: Option[];
  badge?:Badge;
  validation?:Validation;
}


export interface SuperRaterRow{
  id: string;
  superRaterName: string;
  superRaterLDAP: string;
  pod: string;
  location: string;
  globalLogicEmail: string;
  googleEmail: string;
  onboardingStatus: string;
  highestLevelofEducation: string;
  allAssociatedRoles: string;
  productionRole: string;
  vendorOnboardedDate: string;
  productionReadyDate: string;
  estDateofProdStart: string;
  releasedfromOnboarding: string;
  majorAreaofStudy: string;
  technicalLanguageSkills: string;
  notes: string;
  baseProject: string;
  project:string;
  currentTask: string;
  assignedProject: string;
  prodLead: string;
  prodLeadLdap: string
}

export const SUPERRATEROW_MAP: SuperRaterRow = {
  id: "0",
  superRaterName: "C",
  superRaterLDAP: "D",
  pod: "E",
  location: "Q",
  globalLogicEmail: "AC",
  googleEmail: "Z",
  onboardingStatus: "K",
  highestLevelofEducation: "R",
  allAssociatedRoles:"W",
  productionRole: "N",
  vendorOnboardedDate: "J",
  productionReadyDate: "L",
  estDateofProdStart: "M",
  releasedfromOnboarding: "AA",
  majorAreaofStudy: "S",
  technicalLanguageSkills: "X",
  notes: "F",
  baseProject: "I",
  project:"H",
  currentTask: "G",
  assignedProject: "V",
  prodLead: "O",
  prodLeadLdap: "P"

}

