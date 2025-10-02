export type EventType = "work" | "education" | "certification"

export interface HistoryEvent {
  id: string
  title: string
  dateRange: string
  description: string
  type: EventType
}

export const historyEvents: HistoryEvent[] = [
  {
    id: "1",
    title: "Senior Software Engineer",
    dateRange: "2022 - Present",
    description:
      "Leading development of scalable web applications using modern technologies. Mentoring junior developers and architecting cloud-native solutions.",
    type: "work",
  },
  {
    id: "2",
    title: "AWS Solutions Architect Certification",
    dateRange: "2021",
    description:
      "Achieved AWS Solutions Architect Professional certification, demonstrating expertise in cloud architecture.",
    type: "certification",
  },
  {
    id: "3",
    title: "Full Stack Developer",
    dateRange: "2019 - 2022",
    description:
      "Developed and maintained multiple client projects using React, Node.js, and PostgreSQL. Implemented CI/CD pipelines and automated testing.",
    type: "work",
  },
  {
    id: "4",
    title: "Master's in Computer Science",
    dateRange: "2017 - 2019",
    description:
      "Specialized in distributed systems and machine learning. Thesis on scalable microservices architecture.",
    type: "education",
  },
  {
    id: "5",
    title: "Software Engineering Intern",
    dateRange: "2018",
    description:
      "Contributed to open-source projects and developed internal tools for automation. Gained experience in agile development.",
    type: "work",
  },
  {
    id: "6",
    title: "Bachelor's in Software Engineering",
    dateRange: "2013 - 2017",
    description: "Graduated with honors. Focus on software design patterns, algorithms, and data structures.",
    type: "education",
  },
]
