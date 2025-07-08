export interface Skill {
  name: string;
  level: number;
  icon: string;
  description: string;
}

export const skills: Skill[] = [
  {
    name: 'Docker',
    level: 85,
    icon: 'Container',
    description: 'Containerization and orchestration'
  },
  {
    name: 'Kubernetes',
    level: 80,
    icon: 'Boxes',
    description: 'Container orchestration and management'
  },
  {
    name: 'Jenkins',
    level: 80,
    icon: 'Workflow',
    description: 'CI/CD pipeline automation'
  },
  {
    name: 'Terraform',
    level: 80,
    icon: 'Layers',
    description: 'Infrastructure as Code'
  },
  {
    name: 'AWS',
    level: 80,
    icon: 'Cloud',
    description: 'Cloud infrastructure and services'
  },
  {
    name: 'Prometheus & Grafana',
    level: 80,
    icon: 'BarChart3',
    description: 'Monitoring and observability'
  }
];