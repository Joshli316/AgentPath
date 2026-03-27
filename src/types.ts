export interface SprintMeta {
  id: number;
  title: string;
  titleZh: string;
  project: string;
  projectZh: string;
  weeks: string;
  skills?: Record<string, number>;
  days: { day: number; type: string; ref: string }[];
}

export interface BadgeDef {
  id: string;
  name: string;
  nameZh: string;
  sprint: number;
  type: string;
  desc: string;
  descZh: string;
}

export interface BonusProject {
  id: string;
  title: string;
  titleZh: string;
  description: string;
  descriptionZh: string;
  skills: string[];
  difficulty: string;
  milestones: { id: string; label: string; labelZh: string }[];
}

export interface NextStep {
  id: string;
  title: string;
  titleZh: string;
  category: string;
  categoryZh: string;
  description: string;
  descriptionZh: string;
  url: string;
}
