import { Specialty, SpecializedConsultation, SurgeryArea, ClinicValue, InfrastructureItem } from '../types';

export const SPECIALTIES: Specialty[] = [
  {
    id: 1,
    name: 'Clínica Geral',
    description: 'Atendimento médico primário, avaliação clínica integral, diagnóstico precoce e orientação preventiva continuada para todas as idades.',
    category: 'clinica',
    icon: 'Stethoscope',
  },
  {
    id: 2,
    name: 'Cirurgia Geral',
    description: 'Diagnóstico e procedimentos cirúrgicos abdominais e de tecidos moles, incluindo abordagens minimamente invasivas de alta precisão.',
    category: 'cirurgica',
    icon: 'Activity',
  },
  {
    id: 3,
    name: 'Medicina Interna',
    description: 'Prevenção, diagnóstico minucioso e tratamento de patologias clínicas complexas e multissistémicas em pacientes adultos.',
    category: 'clinica',
    icon: 'HeartPulse',
  },
  {
    id: 4,
    name: 'Ginecologia e Obstetrícia',
    description: 'Cuidados dedicados à saúde integral da mulher em todas as fases da vida, rastreios ginecológicos e acompanhamento pré-natal.',
    category: 'clinica',
    icon: 'Baby',
  },
  {
    id: 5,
    name: 'Pediatria',
    description: 'Acompanhamento especializado do crescimento, desenvolvimento físico e psicomotor, vacinação e saúde da criança e adolescente.',
    category: 'clinica',
    icon: 'Smile',
  },
  {
    id: 6,
    name: 'Urologia',
    description: 'Diagnóstico clínico e cirúrgico de afeções do aparelho urinário masculino e feminino, bem como do aparelho reprodutor masculino.',
    category: 'cirurgica',
    icon: 'ShieldCheck',
  },
  {
    id: 7,
    name: 'Dermatologia',
    description: 'Diagnóstico, tratamento e prevenção de patologias da pele, cabelos e unhas com cuidados clínicos e estéticos seguros.',
    category: 'clinica',
    icon: 'Sparkles',
  },
  {
    id: 8,
    name: 'Oftalmologia',
    description: 'Exames de acuidade visual, refração, rastreio de patologias oculares e cuidados com a saúde da visão.',
    category: 'diagnostico',
    icon: 'Eye',
  },
  {
    id: 9,
    name: 'Cardiologia',
    description: 'Avaliação cardiovascular completa, prevenção, rastreio e controlo de hipertensão arterial e doenças cardiovasculares.',
    category: 'clinica',
    icon: 'Heart',
  },
  {
    id: 10,
    name: 'Nutrição',
    description: 'Avaliação do estado nutricional, elaboração de planos alimentares personalizados e reeducação nutricional clínica.',
    category: 'clinica',
    icon: 'Apple',
  },
  {
    id: 11,
    name: 'Ortopedia',
    description: 'Diagnóstico e tratamento de patologias, lesões e traumatismos do aparelho locomotor, ossos, músculos e articulações.',
    category: 'cirurgica',
    icon: 'Bone',
  },
  {
    id: 12,
    name: 'Infectologia',
    description: 'Diagnóstico, prevenção e tratamento especializado de doenças infeciosas, bacterianas, virais, fúngicas e parasitárias.',
    category: 'clinica',
    icon: 'ShieldAlert',
  },
  {
    id: 13,
    name: 'Cirurgia Reconstrutiva e Estética',
    description: 'Procedimentos cirúrgicos reparadores, funcionais e estéticos executados com elevado rigor técnico e científico.',
    category: 'cirurgica',
    icon: 'Scissors',
  },
  {
    id: 14,
    name: 'Gastroenterologia',
    description: 'Cuidados dedicados ao aparelho digestivo, esófago, estômago, intestinos, fígado, pâncreas e vias biliares.',
    category: 'clinica',
    icon: 'FileSpreadsheet',
  },
  {
    id: 15,
    name: 'Coloproctologia',
    description: 'Diagnóstico clínico e intervenções terapêuticas especializadas para patologias do cólon, reto e ânus.',
    category: 'cirurgica',
    icon: 'Compass',
  },
  {
    id: 16,
    name: 'Neurologia',
    description: 'Diagnóstico e tratamento das afeções do sistema nervoso central, periférico e autónomo com rigor neurológico.',
    category: 'clinica',
    icon: 'Brain',
  },
  {
    id: 17,
    name: 'Neurocirurgia',
    description: 'Avaliação cirúrgica e intervenções de alta precisão para patologias cranioencefálicas e da coluna vertebral.',
    category: 'cirurgica',
    icon: 'Crosshair',
  },
  {
    id: 18,
    name: 'Otorrinolaringologia',
    description: 'Diagnóstico e tratamento de patologias do ouvido, nariz, seios perinasais, faringe, laringe e equilíbrio.',
    category: 'clinica',
    icon: 'Ear',
  },
];

export const SPECIALIZED_CONSULTATIONS: SpecializedConsultation[] = [
  {
    id: 'planejamento-familiar',
    title: 'Planejamento Familiar',
    description: 'Atendimento especializado relacionado ao planejamento familiar e saúde reprodutiva.',
    icon: 'HeartHandshake',
  },
  {
    id: 'disfuncao-erectil',
    title: 'Disfunção Eréctil',
    description: 'Avaliação e acompanhamento médico especializado.',
    icon: 'UserCheck',
  },
  {
    id: 'dor-nao-controlada',
    title: 'Tratamento da Dor não Controlada',
    description: 'Avaliação especializada para pacientes com situações de dor persistente ou de difícil controlo.',
    icon: 'ShieldPulse',
  },
];

export const SURGERY_AREAS: SurgeryArea[] = [
  {
    id: 'cirurgia-geral',
    title: 'Cirurgia Geral',
    description: 'Procedimentos cirúrgicos minimamente invasivos que proporcionam incisões reduzidas, menor tempo cirúrgico e recuperação pós-operatória mais célere.',
    highlights: ['Menor trauma tecidual', 'Recuperação pós-operatória rápida', 'Técnicas avançadas'],
  },
  {
    id: 'ortopedia',
    title: 'Ortopedia',
    description: 'Intervenções cirúrgicas articulares e ósseas com técnicas modernas minimamente invasivas, visando o alívio funcional e a mobilidade do paciente.',
    highlights: ['Artroscopia e reparação articular', 'Preservação da função motora', 'Menor tempo de internamento'],
  },
  {
    id: 'urologia',
    title: 'Urologia',
    description: 'Procedimentos urológicos especializados com instrumentação de ponta, permitindo diagnósticos cirúrgicos e terapêuticos com máxima segurança e eficácia.',
    highlights: ['Endourologia e laparoscopia', 'Menor desconforto pós-operatório', 'Alta precisão clínica'],
  },
];

export const OBJECTIVES: string[] = [
  'Oferecer serviços de promoção e prevenção de saúde na comunidade local.',
  'Realizar atendimento especializado de excelência a todos os pacientes com patologia clínica e cirúrgica.',
  'Prestar serviço de diagnóstico, com tecnologia de ponta, clínico e imagiológico.',
  'Estabelecer uma atenção especializada que engloba o diagnóstico até ao tratamento curativo definitivo.',
  'Promover, estabelecer e manter um serviço de saúde especializado com os mais altos níveis científicos e tecnológicos possíveis.',
  'Disponibilizar à população um corpo médico e paramédico avalizado com o maior rigor científico possível.',
];

export const VALUES: ClinicValue[] = [
  {
    id: 1,
    title: 'Humanização do atendimento',
    icon: 'Heart',
  },
  {
    id: 2,
    title: 'Atuação com competência, dignidade e ética',
    icon: 'Shield',
  },
  {
    id: 3,
    title: 'Respeito do pudor e das diferenças de cultura, raça ou credo',
    icon: 'Users',
  },
  {
    id: 4,
    title: 'Inviolabilidade do sigilo da relação médico-paciente',
    icon: 'Lock',
  },
  {
    id: 5,
    title: 'Capacitação e desenvolvimento constante dos recursos humanos',
    icon: 'GraduationCap',
  },
  {
    id: 6,
    title: 'Ambiente de trabalho harmonioso e cooperativo',
    icon: 'Sparkles',
  },
  {
    id: 7,
    title: 'Elevado sentimento de pertença e zelo no cuidado e manutenção do património institucional',
    icon: 'Building2',
  },
  {
    id: 8,
    title: 'Incentivo ao desenvolvimento de pesquisas e de vias terapêuticas inovadoras',
    icon: 'Microscope',
  },
  {
    id: 9,
    title: 'Orgulho por fazer parte da equipa do Centro Médico Gelvisol',
    icon: 'Award',
  },
];

export const INFRASTRUCTURE: InfrastructureItem[] = [
  {
    id: 'consultorios',
    title: 'Consultórios',
    description: 'Espaços preparados para consultas e acompanhamento médico.',
    badge: 'Atendimento Clínico',
    icon: 'Stethoscope',
  },
  {
    id: 'laboratorio',
    title: 'Laboratório',
    description: 'Estrutura destinada à realização de análises clínicas.',
    badge: 'Diagnóstico Laboratorial',
    icon: 'FlaskConical',
  },
  {
    id: 'bloco-operatorio',
    title: 'Bloco Operatório',
    description: 'Estrutura preparada para procedimentos cirúrgicos.',
    badge: 'Cirurgia e Precisão',
    icon: 'Activity',
  },
  {
    id: 'internamento-vip',
    title: 'Internamento VIP',
    description: 'Salas destinadas ao internamento com maior conforto e privacidade.',
    badge: 'Conforto e Privacidade',
    icon: 'BedDouble',
  },
];

export const WHY_CHOOSE_US = [
  {
    id: '1',
    stat: '18',
    title: '18 Especialidades',
    description: 'Ampla oferta de especialidades médicas.',
    icon: 'Layers',
  },
  {
    id: '2',
    stat: 'HD',
    title: 'Tecnologia e Diagnóstico',
    description: 'Serviços de diagnóstico clínico e imagiológico.',
    icon: 'ScanLine',
  },
  {
    id: '3',
    stat: '3+',
    title: 'Cirurgia',
    description: 'Valências cirúrgicas gerais, ortopédicas e urológicas.',
    icon: 'Crosshair',
  },
  {
    id: '4',
    stat: '100%',
    title: 'Atendimento Humanizado',
    description: 'Compromisso com dignidade, ética, respeito e sigilo médico-paciente.',
    icon: 'HeartHandshake',
  },
];
