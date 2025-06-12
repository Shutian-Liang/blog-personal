export interface BasePaper {
  title: string;
  authors: string;
  year: string;
  doi: string;
  tags: string[];
}

export interface JournalPaper extends BasePaper {
  journal: string;
}

export interface ConferencePaper extends BasePaper {
  conference: string;
}

export type Paper = JournalPaper | ConferencePaper;

export const journalPapers: JournalPaper[] = [
  {
    title: "Cognitive Phenotype Shifts in Risk Taking: Interplay of Nonsuicidal Self-Injury Behaviors and Intensified Depression",
    authors: "Yi-Long Lu, Yuqi Ge,Mingzhu Li, Shutian Liang, Xiaoxi Zhang, Yupeng Sui, Lei Yang, Xueni Li, Yuyanan Zhang, Weihua Yue, Hang Zhang, Hao Yan",
    year: "2024",
    journal: "Biological Psychiatry: Cognitive Neuroscience and Neuroimaging",
    doi: "https://www.sciencedirect.com/science/article/pii/S2451902224001575?via%3Dihub",
    tags: ["Psychology"]
  }
];

export const conferencePapers: ConferencePaper[] = [
  {
    title: "Diffusion to Diffusion Process(In writing)",
    authors: "Shutian Liang, Xingsi Dong, Si Wu",
    year: "2025",
    conference: "Example Conference",
    doi: "",
    tags: ["Diffusion model"]
  }
]; 